#!/usr/bin/env python3
"""
Phase 2B-2 Integration Script
Integrates extracted modules into enhanced-discord-bot.js
"""

import re

# Read the original file
with open('enhanced-discord-bot.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# New imports to add after line 17 (after discord.js imports)
new_imports = """
// Import extracted modules
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, LEGACY_CHANNEL_ID, MULTI_CHANNEL_MODE, LOCATION_MODE_ENABLED } = require('./src/discord/config');
const { getJobChannelDetails } = require('./src/routing/router');
const { normalizeJob } = require('./src/utils/job-normalizer');
const { formatPostedDate, cleanJobDescription } = require('./src/utils/job-formatters');
const PostedJobsManager = require('./src/data/posted-jobs-manager');
const SubscriptionManager = require('./src/data/subscription-manager');
"""

# Find line 17 (} = require('discord.js');)
import_offset = 0
for i, line in enumerate(lines):
    if "} = require('discord.js');" in line:
        # Insert new imports after this line
        lines.insert(i + 1, new_imports)
        import_offset = 7  # Number of lines added by imports
        print(f"[OK] Added module imports after line {i + 1}")
        break

# Remove sections (working backwards to preserve line numbers)
# NOTE: Line numbers adjusted for the 7 lines added by imports
sections_to_remove = [
    # (start_line, end_line, description)
    (529, 557, "cleanJobDescription function"),  # 522+7 to 550+7
    (499, 526, "formatPostedDate function"),      # 492+7 to 519+7
    (225, 496, "PostedJobsManager class"),        # 218+7 to 489+7
    (153, 222, "SubscriptionManager class"),      # 146+7 to 215+7
    (96, 142, "normalizeJob function"),           # 89+7 to 135+7
    (79, 79, "old router import"),                # 72+7 (single line)
    (65, 68, "data paths"),                       # 58+7 to 61+7
    (32, 63, "CHANNEL_CONFIG inline"),            # 25+7 to 56+7 (comment starts at line 25!)
]

removed_lines = 0
for start, end, desc in sections_to_remove:
    # Working backwards, so no adjustment needed for line numbers
    # (removing lines below doesn't affect line numbers above)
    adj_start = start - 1  # -1 for 0-indexing
    adj_end = end  # +1 because slice end is exclusive, but we already counted it in 'end', so just use 'end' as-is

    # Actually, to remove lines start-end inclusive (1-indexed), we need lines[start-1:end] in Python
    # Because slice is exclusive of end, lines[start-1:end] gives indices [start-1, start, ..., end-1]
    # which is lines [start, start+1, ..., end] in 1-indexed terms ✓
    # Wait no, that's wrong. lines[start-1:end] gives indices start-1 through end-1 (exclusive end)
    # So that's (end-1) - (start-1) + 1 = end - start + 1 lines, but it's lines start through end-1, not through end!
    # To get lines start through end (inclusive), we need lines[start-1:end+1-1] = lines[start-1:end]
    # Hmm, let me recalculate:
    # - We want to remove 1-indexed lines start through end (inclusive)
    # - In 0-indexed, that's indices (start-1) through (end-1) (inclusive)
    # - Python slice [a:b] gives indices a through b-1 (inclusive)
    # - So we need slice [start-1 : end] to get indices start-1 through end-1 ✓

    # Actually I'm confusing myself. Let me just use the correct formula:
    # To remove 1-indexed lines [start, end] inclusive, use del lines[start-1:end]
    adj_start = start - 1
    adj_end = end  # This is correct for removing through line 'end' inclusive

    # Remove lines
    del lines[adj_start:adj_end]
    removed = end - start + 1
    removed_lines += removed
    print(f"[OK] Removed {desc} (lines {start}-{end}, {removed} lines)")

# Add manager instantiations after client initialization
# Find "Initialize client" comment
for i, line in enumerate(lines):
    if "// Initialize client" in line:
        # Find the closing of client initialization
        for j in range(i, min(i + 20, len(lines))):
            if "});" in lines[j] and "Client" in lines[i:j+1].__str__():
                # Add manager instantiations after client
                manager_init = "\n// Initialize managers\nconst subscriptionManager = new SubscriptionManager();\nconst postedJobsManager = new PostedJobsManager();\n"
                lines.insert(j + 1, manager_init)
                print(f"[OK] Added manager instantiations after line {j + 1}")
                break
        break

# Write the modified file
with open('enhanced-discord-bot.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"\n[OK] Integration complete!")
print(f"   Removed: ~{removed_lines} lines")
print(f"   New file: {len(lines)} lines (was 1,596)")
print(f"   Reduction: {1596 - len(lines)} lines ({(1596 - len(lines)) / 1596 * 100:.1f}%)")
