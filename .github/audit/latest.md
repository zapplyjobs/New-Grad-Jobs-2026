# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T22:32:32.340Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T22:32:17.059Z] ========================================
[2026-02-05T22:32:17.061Z] Discord Bot Execution Log
[2026-02-05T22:32:17.061Z] Environment: GitHub Actions
[2026-02-05T22:32:17.061Z] Node Version: v20.20.0
[2026-02-05T22:32:17.061Z] ========================================
[2026-02-05T22:32:17.061Z] Environment Variables Check:
[2026-02-05T22:32:17.061Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T22:32:17.061Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T22:32:17.061Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T22:32:17.062Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T22:32:17.062Z] 
Multi-Channel Configuration:
[2026-02-05T22:32:17.062Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T22:32:17.062Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T22:32:17.062Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:32:17.062Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T22:32:17.062Z] 
Data Files Check:
[2026-02-05T22:32:17.063Z] .github/data/new_jobs.json: ✅ Exists (6 items, 78635 bytes)
[2026-02-05T22:32:17.118Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11440926 bytes)
[2026-02-05T22:32:17.118Z] 
========================================
[2026-02-05T22:32:17.118Z] Starting Enhanced Discord Bot...
[2026-02-05T22:32:17.118Z] ========================================
[2026-02-05T22:32:17.694Z] [BOT] ✅ Loaded V2 database: 2259 jobs
[2026-02-05T22:32:18.284Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T22:32:18.285Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T22:32:18.285Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T22:32:18.286Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T22:32:18.286Z] [BOT] [BOT] 📬 Found 6 enriched jobs ready to post from pending queue
[2026-02-05T22:32:18.286Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:32:18.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T22:32:18.287Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:32:18.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T22:32:18.288Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T22:32:18.288Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T22:32:18.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T22:32:18.289Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T22:32:18.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-05T22:32:18.289Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T22:32:18.291Z] [BOT] 📬 Found 2 new jobs (4 already posted)...
[2026-02-05T22:32:18.291Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-02-05T22:32:18.291Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-05T22:32:18.292Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-05T22:32:18.292Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T22:32:18.293Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-05T22:32:18.294Z] [BOT] 📍 [ROUTING] "Software Engineer, Entry Level New Grad" @ ORG_a404274c LLC
[2026-02-05T22:32:18.294Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:32:18.312Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T22:32:18.586Z] [BOT] ✅ Posted message: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC in #💻・tech-jobs
  ✅ Industry: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC
[2026-02-05T22:32:18.588Z] [BOT] 💾 Added channel posting: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC → category channel (1 total channels)
[2026-02-05T22:32:18.588Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-05T22:32:18.637Z] [BOT] ✅ Loaded V2 database: 2259 jobs
💾 DISK STATE: 2259 jobs on disk
[2026-02-05T22:32:18.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-05T22:32:18.642Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:32:18.642Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-05T22:32:18.644Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T22:32:18.653Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-02-05T22:32:18.653Z] [BOT] ✅ Archiving complete: 13 archived, 2247 active
[2026-02-05T22:32:18.773Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:32:20.695Z] [BOT] ✅ Posted message: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC in #📍・JID_6daed763
[2026-02-05T22:32:20.695Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T22:32:20.695Z] [BOT] 💾 Added channel posting: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC → location channel (2 total channels)
[2026-02-05T22:32:20.696Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-05T22:32:20.734Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-05T22:32:20.735Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-05T22:32:20.739Z] [BOT] 🔀 Deep merged: Software Engineer, Entry Level New Grad @ ORG_a404274c LLC (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:32:20.739Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-05T22:32:20.743Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (14 total in archive)
[2026-02-05T22:32:20.743Z] [BOT] ✅ Archiving complete: 1 archived, 2246 active
[2026-02-05T22:32:20.871Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:32:22.372Z] [BOT] 📍 [ROUTING] "Associate Engineer, Software Tools" @ ORG_8f6fe0d8 Devices, Inc.
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:32:22.698Z] [BOT] ✅ Posted message: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc. in #💻・tech-jobs
  ✅ Industry: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc.
[2026-02-05T22:32:22.699Z] [BOT] 💾 Added channel posting: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc. → category channel (1 total channels)
[2026-02-05T22:32:22.700Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-05T22:32:22.737Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-05T22:32:22.738Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-05T22:32:22.742Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:32:22.742Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-05T22:32:22.745Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (15 total in archive)
[2026-02-05T22:32:22.746Z] [BOT] ✅ Archiving complete: 1 archived, 2246 active
[2026-02-05T22:32:22.855Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:32:24.533Z] [BOT] ✅ Posted message: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc. in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T22:32:24.534Z] [BOT] 💾 Added channel posting: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc. → location channel (2 total channels)
[2026-02-05T22:32:24.534Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-05T22:32:24.587Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-05T22:32:24.593Z] [BOT] 🔀 Deep merged: Associate Engineer, Software Tools @ ORG_8f6fe0d8 Devices, Inc. (disk: 1 channels → merged: 2 channels)
[2026-02-05T22:32:24.593Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-05T22:32:24.595Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-05T22:32:24.704Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:32:29.205Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-05T22:32:29.207Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd5ae367..." not found, but found as SHA256 "dc893ade0ea90789"
[2026-02-05T22:32:29.207Z] [BOT] ⏭️  Skipping duplicate: JID_d69bbffc (posted within 7 days)
[2026-02-05T22:32:29.207Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5f8e937f..." not found, but found as SHA256 "429c7cdbd2155da6"
[2026-02-05T22:32:29.208Z] [BOT] ⏭️  Skipping duplicate: JID_c3e91559 (posted within 7 days)
[2026-02-05T22:32:29.208Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T22:32:29.209Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 4 enriched, 2 posted)
[2026-02-05T22:32:29.209Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T22:32:29.300Z] [BOT] 📂 Loaded 12460 existing routing entries
[2026-02-05T22:32:29.435Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-05T22:32:29.435Z] [BOT] Total entries: 12462
   Timestamp: 2026-02-05T22:32:29.380Z
[2026-02-05T22:32:29.436Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 8
   Successful: 4
   Failed: 0
   Skipped: 4
[2026-02-05T22:32:29.436Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-05T22:32:29.436Z] [BOT] Total posts: 4
   Channels used: 2
   Top channels:
[2026-02-05T22:32:29.436Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #📍・JID_6daed763: 2 posts
[2026-02-05T22:32:29.437Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T22:32:29.437Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-05T22:32:29.482Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-05T22:32:29.483Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-05T22:32:29.488Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:32:29.488Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-05T22:32:29.492Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (17 total in archive)
✅ Archiving complete: 2 archived, 2244 active
[2026-02-05T22:32:29.621Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T22:32:31.642Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*