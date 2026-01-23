#!/bin/bash

# Test script for metrics archiver workflow
# Creates fake old metrics files and verifies archiving logic

set -e

METRICS_DIR=".github/data/metrics"
ARCHIVE_DIR="${METRICS_DIR}/archive"
TEST_DIR="${METRICS_DIR}/test"

echo "🧪 Testing Metrics Archiver Logic"
echo "================================="
echo ""

# Create test directory
mkdir -p "${TEST_DIR}"
mkdir -p "${ARCHIVE_DIR}"

# Create fake metrics files with different dates
echo "📝 Creating test metrics files..."

# Old files (should be archived)
echo '{"timestamp":"2023-10-01","data":"old"}' > "${TEST_DIR}/pipeline-2023-10.jsonl"
echo '{"timestamp":"2024-06-01","data":"old"}' > "${TEST_DIR}/discord-2024-06.jsonl"

# Recent files (should be kept)
CURRENT_MONTH=$(date +%Y-%m)
LAST_MONTH=$(date -d '1 month ago' +%Y-%m)

echo '{"timestamp":"recent","data":"current"}' > "${TEST_DIR}/pipeline-${CURRENT_MONTH}.jsonl"
echo '{"timestamp":"recent","data":"last month"}' > "${TEST_DIR}/queue-${LAST_MONTH}.jsonl"

echo "✅ Created 4 test files"
ls -lh "${TEST_DIR}"/*.jsonl
echo ""

# Test archiving logic
echo "🔍 Testing archival (90-day cutoff)..."

CUTOFF_DATE=$(date -d '90 days ago' +%Y-%m)
echo "📅 Cutoff date: ${CUTOFF_DATE}"
echo ""

ARCHIVED_COUNT=0

for file in "${TEST_DIR}"/*.jsonl; do
  filename=$(basename "$file")

  if [[ $filename =~ ([0-9]{4}-[0-9]{2}) ]]; then
    file_date="${BASH_REMATCH[1]}"

    if [[ "$file_date" < "$CUTOFF_DATE" ]]; then
      echo "📦 Would archive: $filename (date: $file_date)"
      ARCHIVED_COUNT=$((ARCHIVED_COUNT + 1))
    else
      echo "✅ Would keep: $filename (date: $file_date)"
    fi
  fi
done

echo ""
echo "📊 Results:"
echo "- Files that would be archived: ${ARCHIVED_COUNT}"
echo "- Files that would be kept: $((4 - ARCHIVED_COUNT))"

# Cleanup
echo ""
echo "🧹 Cleaning up test files..."
rm -rf "${TEST_DIR}"

echo "✅ Test complete!"
echo ""
echo "Expected results:"
echo "- 2 files should be archived (2023-10, 2024-06)"
echo "- 2 files should be kept (current month, last month)"

if [ ${ARCHIVED_COUNT} -eq 2 ]; then
  echo ""
  echo "✅ TEST PASSED - Archiver logic works correctly"
  exit 0
else
  echo ""
  echo "❌ TEST FAILED - Expected 2 files to archive, got ${ARCHIVED_COUNT}"
  exit 1
fi
