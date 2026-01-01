# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T22:38:24.254Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T22:38:03.388Z] ========================================
[2026-01-01T22:38:03.389Z] Discord Bot Execution Log
[2026-01-01T22:38:03.389Z] Environment: GitHub Actions
[2026-01-01T22:38:03.390Z] Node Version: v20.19.6
[2026-01-01T22:38:03.390Z] ========================================
[2026-01-01T22:38:03.390Z] Environment Variables Check:
[2026-01-01T22:38:03.390Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T22:38:03.390Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.390Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T22:38:03.390Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T22:38:03.390Z] 
Multi-Channel Configuration:
[2026-01-01T22:38:03.390Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.390Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T22:38:03.391Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T22:38:03.391Z] 
Data Files Check:
[2026-01-01T22:38:03.391Z] .github/data/new_jobs.json: ✅ Exists (3 items, 14719 bytes)
[2026-01-01T22:38:03.392Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 54288 bytes)
[2026-01-01T22:38:03.392Z] 
========================================
[2026-01-01T22:38:03.392Z] Starting Enhanced Discord Bot...
[2026-01-01T22:38:03.392Z] ========================================
[2026-01-01T22:38:03.913Z] [BOT] ✅ Loaded V2 database: 90 jobs
[2026-01-01T22:38:04.450Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T22:38:04.450Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T22:38:04.451Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T22:38:04.451Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2026-01-01T22:38:04.492Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T22:38:04.537Z] [BOT] ✅ Export complete: Added 2, Skipped 1, Total 39
[2026-01-01T22:38:04.538Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2026-01-01T22:38:04.538Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-01T22:38:04.539Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-01T22:38:04.539Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-01T22:38:04.539Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T22:38:04.543Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-01T22:38:04.543Z] [BOT] 📍 [ROUTING] "Director's Fellowship Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-01T22:38:04.543Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T22:38:04.550Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T22:38:04.825Z] [BOT] ✅ Created forum post: 🏢 Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
  ✅ Industry: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-01T22:38:06.537Z] [BOT] ✅ Created forum post: 🏢 Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T22:38:08.038Z] [BOT] 💾 Marked as posted: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
[2026-01-01T22:38:08.039Z] [BOT] 💾 BEFORE ARCHIVING: 91 jobs in database
[2026-01-01T22:38:08.039Z] [BOT] ✅ No jobs to archive (all 91 jobs within 7-day window)
[2026-01-01T22:38:08.045Z] [BOT] 💾 Saved posted_jobs.json: 91 active jobs
[2026-01-01T22:38:08.045Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T22:38:08.045Z] [BOT] 📍 [ROUTING] "Process Automation Specialist" @ ORG_8de41b07
   Category: MARKETING (matched: "growth")
[2026-01-01T22:38:08.045Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T22:38:08.202Z] [BOT] ✅ Created forum post: 🏢 Process Automation Specialist @ ORG_8de41b07 in #📣・marketing-jobs
[2026-01-01T22:38:08.202Z] [BOT] ✅ Industry: Process Automation Specialist @ ORG_8de41b07
[2026-01-01T22:38:09.895Z] [BOT] ✅ Created forum post: 🏢 Process Automation Specialist @ ORG_8de41b07 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-01T22:38:11.396Z] [BOT] 💾 Marked as posted: Process Automation Specialist @ ORG_8de41b07 (instance #1)
[2026-01-01T22:38:11.397Z] [BOT] 💾 BEFORE ARCHIVING: 92 jobs in database
✅ No jobs to archive (all 92 jobs within 7-day window)
[2026-01-01T22:38:11.399Z] [BOT] 💾 Saved posted_jobs.json: 92 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T22:38:14.400Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-01T22:38:14.402Z] [BOT] 📍 [ROUTING] "Process Automation Analyst - AI & Systems Focus" @ ORG_8de41b07
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-01T22:38:14.402Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-01T22:38:14.725Z] [BOT] ✅ Created forum post: 🏢 Process Automation Analyst - AI & Systems Focus @ ORG_8de41b07 in #🤖・ai-jobs
  ✅ Industry: Process Automation Analyst - AI & Systems Focus @ ORG_8de41b07
[2026-01-01T22:38:16.824Z] [BOT] ✅ Created forum post: 🏢 Process Automation Analyst - AI & Systems Focus @ ORG_8de41b07 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-01T22:38:18.325Z] [BOT] 💾 Marked as posted: Process Automation Analyst - AI & Systems Focus @ ORG_8de41b07 (instance #1)
[2026-01-01T22:38:18.325Z] [BOT] 💾 BEFORE ARCHIVING: 93 jobs in database
✅ No jobs to archive (all 93 jobs within 7-day window)
[2026-01-01T22:38:18.327Z] [BOT] 💾 Saved posted_jobs.json: 93 active jobs
[2026-01-01T22:38:18.327Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T22:38:21.327Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-01T22:38:21.327Z] [BOT] ⏭️  Skipping duplicate: JID_f1cb696e-researcher_r14061 (posted within 7 days)
[2026-01-01T22:38:21.327Z] [BOT] ⏭️  Skipping duplicate: JID_52e7a046 (posted within 7 days)
⏭️  Skipping duplicate: JID_8382dea7 (posted within 7 days)
[2026-01-01T22:38:21.328Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2026-01-01T22:38:21.383Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-01T22:38:21.384Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T22:38:21.428Z] [BOT] 📂 Loaded 1163 existing routing entries
[2026-01-01T22:38:21.523Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-01T22:38:21.524Z] [BOT] Total entries: 1166
   Timestamp: 2026-01-01T22:38:21.470Z
[2026-01-01T22:38:21.525Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 2 posts
     2. #🦢・los-angeles: 2 posts
     3. #💻・remote-usa: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-01T22:38:21.526Z] [BOT] [STATS] Channel stats saved
[2026-01-01T22:38:23.537Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*