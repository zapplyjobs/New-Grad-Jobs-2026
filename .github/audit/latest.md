# Discord Bot Execution Audit
**Timestamp:** 2025-12-29T19:03:53.532Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-29T19:03:36.693Z] ========================================
[2025-12-29T19:03:36.695Z] Discord Bot Execution Log
[2025-12-29T19:03:36.695Z] Environment: GitHub Actions
[2025-12-29T19:03:36.695Z] Node Version: v20.19.6
[2025-12-29T19:03:36.695Z] ========================================
[2025-12-29T19:03:36.695Z] Environment Variables Check:
[2025-12-29T19:03:36.695Z] DISCORD_TOKEN: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-29T19:03:36.696Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-29T19:03:36.696Z] 
Multi-Channel Configuration:
[2025-12-29T19:03:36.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.696Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.697Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-29T19:03:36.697Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-29T19:03:36.697Z] 
Data Files Check:
[2025-12-29T19:03:36.697Z] .github/data/new_jobs.json: ✅ Exists (2 items, 14943 bytes)
[2025-12-29T19:03:36.698Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 51335 bytes)
[2025-12-29T19:03:36.698Z] 
========================================
[2025-12-29T19:03:36.698Z] Starting Enhanced Discord Bot...
[2025-12-29T19:03:36.698Z] ========================================
[2025-12-29T19:03:37.209Z] [BOT] ✅ Loaded V2 database: 82 jobs
[2025-12-29T19:03:37.565Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-29T19:03:37.565Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-29T19:03:37.565Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-29T19:03:37.566Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-29T19:03:37.662Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 65
[2025-12-29T19:03:37.664Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-29T19:03:37.664Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-29T19:03:37.664Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-29T19:03:37.665Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-29T19:03:37.665Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-29T19:03:37.666Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-29T19:03:37.668Z] [BOT] 📍 [ROUTING] "Post Doc – Advanced Computational Methods & Simulation" @ ORG_e8760198 Vernova
[2025-12-29T19:03:37.668Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-29T19:03:37.673Z] [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-29T19:03:38.357Z] [BOT] ✅ Created forum post: 🏢 Post Doc – Advanced Computational Methods & Simulation @ ORG_e8760198 Vernova in #🤖・ai-jobs
[2025-12-29T19:03:38.357Z] [BOT] ✅ Industry: Post Doc – Advanced Computational Methods & Simulation @ ORG_e8760198 Vernova
[2025-12-29T19:03:40.025Z] [BOT] ✅ Created forum post: 🏢 Post Doc – Advanced Computational Methods & Simulation @ ORG_e8760198 Vernova in #🗽・new-york
[2025-12-29T19:03:40.025Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-29T19:03:41.525Z] [BOT] 💾 Marked as posted: Post Doc – Advanced Computational Methods & Simulation @ ORG_e8760198 Vernova (instance #1)
[2025-12-29T19:03:41.525Z] [BOT] 💾 BEFORE ARCHIVING: 83 jobs in database
[2025-12-29T19:03:41.525Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-29T19:03:41.531Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
✅ Archiving complete: 1 archived, 82 active
[2025-12-29T19:03:41.533Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
[2025-12-29T19:03:41.533Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-29T19:03:44.533Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-29T19:03:44.534Z] [BOT] 📍 [ROUTING] "Applications Development Intermediate Programmer Analyst" @ ORG_e9591c52
   Category: TECH (matched: "software")
[2025-12-29T19:03:44.534Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-29T19:03:44.699Z] [BOT] ✅ Created forum post: 🏢 Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #💻・tech-jobs
[2025-12-29T19:03:44.700Z] [BOT] ✅ Industry: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52
[2025-12-29T19:03:46.378Z] [BOT] ✅ Created forum post: 🏢 Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-29T19:03:47.879Z] [BOT] 💾 Marked as posted: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 (instance #1)
[2025-12-29T19:03:47.879Z] [BOT] 💾 BEFORE ARCHIVING: 83 jobs in database
✅ No jobs to archive (all 83 jobs within 7-day window)
[2025-12-29T19:03:47.881Z] [BOT] 💾 Saved posted_jobs.json: 83 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-29T19:03:50.881Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-29T19:03:50.881Z] [BOT] ⏭️  Skipping duplicate: JID_457168e7-only_confidential_executive_recruiting-JID_38a42076-simulation_r5021476-1 (posted within 7 days)
[2025-12-29T19:03:50.882Z] [BOT] ⏭️  Skipping duplicate: JID_5982c0f1-officer_25926282 (posted within 7 days)
[2025-12-29T19:03:50.882Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-29T19:03:50.883Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-29T19:03:50.925Z] [BOT] 📂 Loaded 1089 existing routing entries
[2025-12-29T19:03:50.970Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-29T19:03:50.971Z] [BOT] Total entries: 1091
   Timestamp: 2025-12-29T19:03:50.965Z
[2025-12-29T19:03:50.971Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_268baebc.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2025-12-29T19:03:50.971Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-29T19:03:50.971Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2025-12-29T19:03:50.971Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2025-12-29T19:03:50.972Z] [BOT] [STATS] Channel stats saved
[2025-12-29T19:03:52.983Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*