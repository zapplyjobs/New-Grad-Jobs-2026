#!/bin/bash

##
# System Health Check - Quick status for all job board repositories
#
# Purpose: Get system health in 10 seconds instead of reading 1,216-line logs
# Expected savings: 15,000 tokens per debugging session
#
# Usage:
#   ./health-check.sh              # Check all repos
#   ./health-check.sh --json       # Output JSON format
##

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Repo paths (relative to Business/Job_Listings/)
BASE_DIR="/mnt/c/Users/Mahd/Videos/Work/Business/Job_Listings"
REPOS=(
    "New-Grad-Jobs-2026"
    "Internships-2026"
)
AGGREGATOR_DIR="/mnt/c/Users/Mahd/Videos/Work/Business/Job_Listings/jobs-data-2026"

# JSON output flag
JSON_OUTPUT=false
if [[ "${1:-}" == "--json" ]]; then
    JSON_OUTPUT=true
fi

##
# Get time since last workflow run in human-readable format
##
get_last_run() {
    local repo_dir="$1"
    if [[ ! -d "$repo_dir/.git" ]]; then
        echo "no git repo"
        return
    fi

    cd "$repo_dir"

    # Try to get last workflow run time using gh CLI
    local last_run_time=""
    if command -v gh &> /dev/null; then
        last_run_time=$(gh run list --limit 1 --json createdAt --jq '.[0].createdAt' 2>/dev/null || echo "")
    fi

    # Fallback to git commit time if gh CLI fails
    local diff=0
    if [[ -z "$last_run_time" ]]; then
        local last_commit_time=$(git log -1 --format=%ct 2>/dev/null || echo "0")
        local now=$(date +%s)
        diff=$((now - last_commit_time))
    else
        # Convert ISO 8601 timestamp to Unix timestamp
        local run_timestamp=$(date -d "$last_run_time" +%s 2>/dev/null || echo "0")
        local now=$(date +%s)
        diff=$((now - run_timestamp))
    fi

    if [[ $diff -lt 60 ]]; then
        echo "${diff}s ago"
    elif [[ $diff -lt 3600 ]]; then
        echo "$((diff / 60))m ago"
    elif [[ $diff -lt 86400 ]]; then
        echo "$((diff / 3600))h ago"
    else
        echo "$((diff / 86400))d ago"
    fi
}

##
# Check repository health
##
check_repo() {
    local repo_name="$1"
    local repo_dir="$BASE_DIR/$repo_name"

    if [[ ! -d "$repo_dir" ]]; then
        if $JSON_OUTPUT; then
            echo "\"status\":\"missing\",\"error\":\"Directory not found\""
        else
            echo -e "${RED}✗ Missing${NC}"
        fi
        return 1
    fi

    cd "$repo_dir"

    # Check data files
    local data_dir=".github/data"
    local current_jobs="$data_dir/current_jobs.json"
    local seen_jobs="$data_dir/seen_jobs.json"
    local pending_queue="$data_dir/pending_posts.json"
    local jsearch_usage="$data_dir/jsearch_usage.json"

    # Count jobs
    local current_count=0
    local seen_count=0
    local pending_count=0
    if [[ -f "$current_jobs" ]]; then
        current_count=$(jq 'length' "$current_jobs" 2>/dev/null || echo "0")
    fi
    if [[ -f "$seen_jobs" ]]; then
        seen_count=$(jq 'if type == "array" then length else (. | keys | length) end' "$seen_jobs" 2>/dev/null || echo "0")
    fi
    if [[ -f "$pending_queue" ]]; then
        pending_count=$(jq 'length' "$pending_queue" 2>/dev/null || echo "0")
    fi

    # Get queue size
    local queue_size="0 B"
    if [[ -f "$pending_queue" ]]; then
        queue_size=$(du -h "$pending_queue" | cut -f1)
    fi

    # Get JSearch quota
    local jsearch_quota="N/A"
    if [[ -f "$jsearch_usage" ]]; then
        local requests=$(jq -r '.requests // 0' "$jsearch_usage" 2>/dev/null || echo "0")
        local remaining=$(jq -r '.remaining // 0' "$jsearch_usage" 2>/dev/null || echo "0")
        local total=$((requests + remaining))
        jsearch_quota="${requests}/${total}"
    fi

    # Get last run time
    local last_run=$(get_last_run "$repo_dir")

    # Determine status
    local status="healthy"
    local status_icon="${GREEN}✓${NC}"
    local warnings=()

    # Check for issues
    if [[ "$last_run" == *"h ago"* ]]; then
        local hours=$(echo "$last_run" | grep -oP '\d+')
        if [[ $hours -gt 1 ]]; then
            status="warning"
            status_icon="${YELLOW}⚠${NC}"
            warnings+=("Last run ${last_run}")
        fi
    elif [[ "$last_run" == *"d ago"* ]]; then
        status="error"
        status_icon="${RED}✗${NC}"
        warnings+=("Last run ${last_run}")
    fi

    if [[ $current_count -eq 0 ]]; then
        status="error"
        status_icon="${RED}✗${NC}"
        warnings+=("No current jobs")
    fi

    if [[ "$queue_size" == *"M"* ]]; then
        local size_mb=$(echo "$queue_size" | grep -oP '[\d.]+')
        if (( $(echo "$size_mb > 5" | bc -l) )); then
            status="warning"
            if [[ "$status_icon" != *"✗"* ]]; then
                status_icon="${YELLOW}⚠${NC}"
            fi
            warnings+=("Queue size: ${queue_size}")
        fi
    fi

    # Output
    if $JSON_OUTPUT; then
        echo -n "\"status\":\"$status\","
        echo -n "\"last_run\":\"$last_run\","
        echo -n "\"current_jobs\":$current_count,"
        echo -n "\"seen_jobs\":$seen_count,"
        echo -n "\"pending_queue\":$pending_count,"
        echo -n "\"queue_size\":\"$queue_size\","
        echo -n "\"jsearch_quota\":\"$jsearch_quota\","
        echo -n "\"warnings\":[$(printf '"%s",' "${warnings[@]}" | sed 's/,$//')]"
    else
        echo -e "\n${repo_name}:"
        echo -e "  Status: $status_icon ${status^}"
        echo -e "  Last run: $last_run"
        echo -e "  Jobs: ${current_count} current, ${seen_count} seen"
        echo -e "  Queue: ${queue_size} (${pending_count} jobs)"
        if [[ "$jsearch_quota" != "N/A" ]]; then
            echo -e "  Quota: ${jsearch_quota} JSearch"
        fi
        if [[ ${#warnings[@]} -gt 0 ]]; then
            for warning in "${warnings[@]}"; do
                echo -e "  ${YELLOW}⚠${NC} $warning"
            done
        fi
    fi
}

##
# Check aggregator
##
check_aggregator() {
    local repo_dir="$AGGREGATOR_DIR"

    if [[ ! -d "$repo_dir" ]]; then
        if $JSON_OUTPUT; then
            echo "\"status\":\"missing\",\"error\":\"Directory not found\""
        else
            echo -e "${RED}✗ Missing${NC}"
        fi
        return 1
    fi

    cd "$repo_dir"

    # Check posted jobs
    local posted_jobs=".github/data/posted_jobs.json"
    local posted_count=0
    if [[ -f "$posted_jobs" ]]; then
        posted_count=$(jq '.jobs | length' "$posted_jobs" 2>/dev/null || echo "0")
    fi

    # Get last run time
    local last_run=$(get_last_run "$repo_dir")

    # Check Discord token (env var should be set)
    local discord_status="unknown"
    if [[ -n "${DISCORD_BOT_TOKEN:-}" ]]; then
        discord_status="configured"
    fi

    # Determine status
    local status="healthy"
    local status_icon="${GREEN}✓${NC}"
    local warnings=()

    if [[ "$last_run" == *"h ago"* ]]; then
        local hours=$(echo "$last_run" | grep -oP '\d+')
        if [[ $hours -gt 1 ]]; then
            status="warning"
            status_icon="${YELLOW}⚠${NC}"
            warnings+=("Last run ${last_run}")
        fi
    elif [[ "$last_run" == *"d ago"* ]]; then
        status="error"
        status_icon="${RED}✗${NC}"
        warnings+=("Last run ${last_run}")
    fi

    # Output
    if $JSON_OUTPUT; then
        echo -n "\"status\":\"$status\","
        echo -n "\"last_run\":\"$last_run\","
        echo -n "\"posted_jobs\":$posted_count,"
        echo -n "\"discord_token\":\"$discord_status\","
        echo -n "\"warnings\":[$(printf '"%s",' "${warnings[@]}" | sed 's/,$//')]"
    else
        echo -e "\nAggregator (jobs-data-2026):"
        echo -e "  Status: $status_icon ${status^}"
        echo -e "  Last run: $last_run"
        echo -e "  Posted: ${posted_count} jobs total"
        echo -e "  Discord: ${discord_status}"
        if [[ ${#warnings[@]} -gt 0 ]]; then
            for warning in "${warnings[@]}"; do
                echo -e "  ${YELLOW}⚠${NC} $warning"
            done
        fi
    fi
}

##
# Main execution
##
main() {
    if $JSON_OUTPUT; then
        echo "{"
        echo "\"timestamp\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\","
        echo "\"repositories\":{"
    else
        echo "=== SYSTEM HEALTH CHECK ==="
        echo "Date: $(date -u +%Y-%m-%d\ %H:%M\ UTC)"
    fi

    # Check each repository
    local first=true
    for repo in "${REPOS[@]}"; do
        if $JSON_OUTPUT; then
            if ! $first; then echo ","; fi
            echo -n "\"$repo\":{"
            check_repo "$repo"
            echo "}"
            first=false
        else
            check_repo "$repo"
        fi
    done

    # Check aggregator
    if $JSON_OUTPUT; then
        echo ","
        echo -n "\"aggregator\":{"
        check_aggregator
        echo "}"
        echo "}}"
    else
        check_aggregator

        # Summary
        echo -e "\n================================"
        echo "Use './health-check.sh --json' for machine-readable output"
    fi
}

main "$@"
