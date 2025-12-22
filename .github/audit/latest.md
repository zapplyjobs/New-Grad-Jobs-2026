# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T20:04:13.076Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T20:03:56.789Z] ========================================
[2025-12-22T20:03:56.790Z] Discord Bot Execution Log
[2025-12-22T20:03:56.791Z] Environment: GitHub Actions
[2025-12-22T20:03:56.791Z] Node Version: v20.19.6
[2025-12-22T20:03:56.791Z] ========================================
[2025-12-22T20:03:56.791Z] Environment Variables Check:
[2025-12-22T20:03:56.791Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T20:03:56.791Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.791Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T20:03:56.791Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T20:03:56.791Z] 
Multi-Channel Configuration:
[2025-12-22T20:03:56.791Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.791Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T20:03:56.792Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T20:03:56.792Z] 
Data Files Check:
[2025-12-22T20:03:56.792Z] .github/data/new_jobs.json: ✅ Exists (3 items, 11432 bytes)
[2025-12-22T20:03:56.797Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 541791 bytes)
[2025-12-22T20:03:56.797Z] 
========================================
[2025-12-22T20:03:56.797Z] Starting Enhanced Discord Bot...
[2025-12-22T20:03:56.797Z] ========================================
[2025-12-22T20:03:57.326Z] [BOT] ✅ Loaded V2 database: 925 jobs
[2025-12-22T20:03:57.803Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T20:03:57.804Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T20:03:57.804Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T20:03:57.804Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-22T20:03:57.918Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 172
[2025-12-22T20:03:57.920Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-22T20:03:57.920Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T20:03:57.920Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
[2025-12-22T20:03:57.921Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-22T20:03:57.921Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-22T20:03:57.921Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T20:03:57.924Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-22T20:03:57.925Z] [BOT] 📍 [ROUTING] "Space Payload 1&T – Engineer/Principal Engineer" @ ORG_f3f2248d Grumman
[2025-12-22T20:03:57.925Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T20:03:57.929Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T20:03:58.311Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-22T20:03:58.311Z] [BOT] ✅ Industry: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman
[2025-12-22T20:04:00.073Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-22T20:04:00.073Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-22T20:04:01.574Z] [BOT] 💾 Marked as posted: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman (instance #1)
[2025-12-22T20:04:01.574Z] [BOT] 💾 BEFORE ARCHIVING: 926 jobs in database
[2025-12-22T20:04:01.575Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-22T20:04:01.581Z] [BOT] 📦 Archived 8 jobs to 2025-12.json (8 total in archive)
[2025-12-22T20:04:01.581Z] [BOT] ✅ Archiving complete: 8 archived, 918 active
[2025-12-22T20:04:01.588Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
[2025-12-22T20:04:01.588Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T20:04:01.589Z] [BOT] 📍 [ROUTING] "Associate – Application Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
[2025-12-22T20:04:01.589Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T20:04:01.815Z] [BOT] ✅ Created forum post: 🏢 Associate – Application Engineer @ ORG_86a62f4a in #💻・tech-jobs
[2025-12-22T20:04:01.816Z] [BOT] ✅ Industry: Associate – Application Engineer @ ORG_86a62f4a
[2025-12-22T20:04:05.820Z] [BOT] ✅ Created forum post: 🏢 Associate – Application Engineer @ ORG_86a62f4a in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-22T20:04:07.322Z] [BOT] 💾 Marked as posted: Associate – Application Engineer @ ORG_86a62f4a (instance #1)
[2025-12-22T20:04:07.322Z] [BOT] 💾 BEFORE ARCHIVING: 919 jobs in database
[2025-12-22T20:04:07.336Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (10 total in archive)
[2025-12-22T20:04:07.336Z] [BOT] ✅ Archiving complete: 2 archived, 917 active
[2025-12-22T20:04:07.344Z] [BOT] 💾 Saved posted_jobs.json: 917 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T20:04:10.345Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-22T20:04:10.345Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10217787 (posted within 7 days)
[2025-12-22T20:04:10.345Z] [BOT] ⏭️  Skipping duplicate: JID_d761c3b9-blackrock_professional-JID_dd388114-engineer_r258341-1 (posted within 7 days)
[2025-12-22T20:04:10.346Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-22T20:04:10.347Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
[2025-12-22T20:04:10.347Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T20:04:10.392Z] [BOT] 📂 Loaded 1010 existing routing entries
[2025-12-22T20:04:10.438Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1012
[2025-12-22T20:04:10.439Z] [BOT] Timestamp: 2025-12-22T20:04:10.433Z
[2025-12-22T20:04:10.439Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T20:04:10.439Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-22T20:04:10.439Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
[2025-12-22T20:04:10.439Z] [BOT] 2. #💻・remote-usa: 1 posts
     3. #🗽・new-york: 1 posts
[2025-12-22T20:04:10.440Z] [BOT] [STATS] Channel stats saved
[2025-12-22T20:04:12.451Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*