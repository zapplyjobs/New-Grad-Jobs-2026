# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T00:09:22.454Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T00:09:08.794Z] ========================================
[2025-12-30T00:09:08.796Z] Discord Bot Execution Log
[2025-12-30T00:09:08.796Z] Environment: GitHub Actions
[2025-12-30T00:09:08.796Z] Node Version: v20.19.6
[2025-12-30T00:09:08.796Z] ========================================
[2025-12-30T00:09:08.796Z] Environment Variables Check:
[2025-12-30T00:09:08.796Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T00:09:08.796Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.796Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T00:09:08.796Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T00:09:08.797Z] 
Multi-Channel Configuration:
[2025-12-30T00:09:08.797Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T00:09:08.797Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T00:09:08.797Z] 
Data Files Check:
[2025-12-30T00:09:08.798Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12032 bytes)
[2025-12-30T00:09:08.798Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 51599 bytes)
[2025-12-30T00:09:08.798Z] 
========================================
[2025-12-30T00:09:08.798Z] Starting Enhanced Discord Bot...
[2025-12-30T00:09:08.798Z] ========================================
[2025-12-30T00:09:09.334Z] [BOT] ✅ Loaded V2 database: 82 jobs
[2025-12-30T00:09:09.842Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2025-12-30T00:09:09.842Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T00:09:09.843Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T00:09:09.843Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-30T00:09:09.937Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 54
[2025-12-30T00:09:09.939Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-30T00:09:09.939Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-30T00:09:09.939Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-30T00:09:09.940Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-30T00:09:09.940Z] [BOT] 📤 Posting 2 jobs...
[2025-12-30T00:09:09.940Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T00:09:09.941Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-30T00:09:09.942Z] [BOT] 📍 [ROUTING] "Software Engineer - Starlink Ground Network" @ ORG_afd623b1
[2025-12-30T00:09:09.942Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T00:09:09.947Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T00:09:10.114Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Starlink Ground Network @ ORG_afd623b1
[2025-12-30T00:09:11.753Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #🖥️・redmond
[2025-12-30T00:09:11.754Z] [BOT] ✅ Location: 🖥️・redmond
[2025-12-30T00:09:13.254Z] [BOT] 💾 Marked as posted: Software Engineer - Starlink Ground Network @ ORG_afd623b1 (instance #1)
[2025-12-30T00:09:13.254Z] [BOT] 💾 BEFORE ARCHIVING: 83 jobs in database
[2025-12-30T00:09:13.255Z] [BOT] ✅ No jobs to archive (all 83 jobs within 7-day window)
[2025-12-30T00:09:13.269Z] [BOT] 💾 Saved posted_jobs.json: 83 active jobs
[2025-12-30T00:09:13.269Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T00:09:13.270Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-30T00:09:13.270Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T00:09:13.487Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-30T00:09:13.487Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-30T00:09:15.267Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-30T00:09:16.767Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2025-12-30T00:09:16.767Z] [BOT] 💾 BEFORE ARCHIVING: 84 jobs in database
✅ No jobs to archive (all 84 jobs within 7-day window)
[2025-12-30T00:09:16.770Z] [BOT] 💾 Saved posted_jobs.json: 84 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T00:09:19.771Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-30T00:09:19.771Z] [BOT] ⏭️  Skipping duplicate: JID_55a87b9c (posted within 7 days)
⏭️  Skipping duplicate: JID_34871874 (posted within 7 days)
[2025-12-30T00:09:19.771Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-30T00:09:19.772Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2025-12-30T00:09:19.772Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T00:09:19.816Z] [BOT] 📂 Loaded 1094 existing routing entries
[2025-12-30T00:09:19.865Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-30T00:09:19.865Z] [BOT] Total entries: 1096
   Timestamp: 2025-12-30T00:09:19.859Z
[2025-12-30T00:09:19.865Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
[2025-12-30T00:09:19.865Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2025-12-30T00:09:19.866Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-30T00:09:19.866Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🖥️・redmond: 1 posts
     3. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-30T00:09:21.878Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*