# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T06:47:25.617Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T06:47:00.427Z] ========================================
[2026-01-05T06:47:00.429Z] Discord Bot Execution Log
[2026-01-05T06:47:00.429Z] Environment: GitHub Actions
[2026-01-05T06:47:00.429Z] Node Version: v20.19.6
[2026-01-05T06:47:00.429Z] ========================================
[2026-01-05T06:47:00.429Z] Environment Variables Check:
[2026-01-05T06:47:00.429Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T06:47:00.429Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.429Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T06:47:00.430Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T06:47:00.430Z] 
Multi-Channel Configuration:
[2026-01-05T06:47:00.430Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T06:47:00.430Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T06:47:00.431Z] 
Data Files Check:
[2026-01-05T06:47:00.431Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59006 bytes)
[2026-01-05T06:47:00.436Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 650809 bytes)
[2026-01-05T06:47:00.436Z] 
========================================
[2026-01-05T06:47:00.436Z] Starting Enhanced Discord Bot...
[2026-01-05T06:47:00.436Z] ========================================
[2026-01-05T06:47:00.969Z] [BOT] ✅ Loaded V2 database: 1279 jobs
[2026-01-05T06:47:01.992Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T06:47:01.993Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T06:47:01.993Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T06:47:01.993Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T06:47:02.158Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 211
[2026-01-05T06:47:02.161Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T06:47:02.161Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T06:47:02.161Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T06:47:02.161Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T06:47:02.161Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T06:47:02.162Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T06:47:02.163Z] [BOT] ✅ Loaded pending queue: 53 total (33 pending, 20 enriched, 0 posted)
[2026-01-05T06:47:02.164Z] [BOT] ✅ Saved pending queue: 46 total (33 pending, 13 enriched, 0 posted)
[2026-01-05T06:47:02.164Z] [BOT] 🗑️ Removed 7 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (7 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-05T06:47:02.165Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-05T06:47:02.165Z] [BOT] ⏸️ Limiting to 10 jobs this run, 7 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T06:47:02.168Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T06:47:02.169Z] [BOT] 📍 [ROUTING] "Data Scientist, Marketing" @ anthropic
[2026-01-05T06:47:02.169Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-05T06:47:02.174Z] [BOT ERROR] (node:2741) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T06:47:02.544Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Marketing @ anthropic in #🤖・ai-jobs
[2026-01-05T06:47:02.544Z] [BOT] ✅ Industry: Data Scientist, Marketing @ anthropic
[2026-01-05T06:47:04.648Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Marketing @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T06:47:06.148Z] [BOT] 💾 Marked as posted: Data Scientist, Marketing @ anthropic (instance #1)
[2026-01-05T06:47:06.148Z] [BOT] 💾 BEFORE ARCHIVING: 1280 jobs in database
[2026-01-05T06:47:06.150Z] [BOT] ✅ No jobs to archive (all 1280 jobs within 7-day window)
[2026-01-05T06:47:06.161Z] [BOT] 💾 Saved posted_jobs.json: 1280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T06:47:09.160Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-05T06:47:09.162Z] [BOT] 📍 [ROUTING] "Analytics Data Engineer" @ anthropic
[2026-01-05T06:47:09.162Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-05T06:47:09.533Z] [BOT] ✅ Created forum post: 🏢 Analytics Data Engineer @ anthropic in #📈・JID_fb739488
  ✅ Industry: Analytics Data Engineer @ anthropic
[2026-01-05T06:47:11.244Z] [BOT] ✅ Created forum post: 🏢 Analytics Data Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T06:47:12.744Z] [BOT] 💾 Marked as posted: Analytics Data Engineer @ anthropic (instance #1)
[2026-01-05T06:47:12.744Z] [BOT] 💾 BEFORE ARCHIVING: 1281 jobs in database
[2026-01-05T06:47:12.745Z] [BOT] ✅ No jobs to archive (all 1281 jobs within 7-day window)
[2026-01-05T06:47:12.754Z] [BOT] 💾 Saved posted_jobs.json: 1281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T06:47:15.754Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T06:47:15.755Z] [BOT] 📍 [ROUTING] "Senior Sales Strategy Manager" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T06:47:15.972Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Strategy Manager @ samsara in #💲・sales-jobs
  ✅ Industry: Senior Sales Strategy Manager @ samsara
[2026-01-05T06:47:17.696Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Strategy Manager @ samsara in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-05T06:47:19.197Z] [BOT] 💾 Marked as posted: Senior Sales Strategy Manager @ samsara (instance #1)
[2026-01-05T06:47:19.198Z] [BOT] 💾 BEFORE ARCHIVING: 1282 jobs in database
[2026-01-05T06:47:19.199Z] [BOT] ✅ No jobs to archive (all 1282 jobs within 7-day window)
[2026-01-05T06:47:19.209Z] [BOT] 💾 Saved posted_jobs.json: 1282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T06:47:22.210Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-05T06:47:22.210Z] [BOT] ⏭️  Skipping duplicate: JID_68f3abf5 (posted within 7 days)
[2026-01-05T06:47:22.210Z] [BOT] ⏭️  Skipping duplicate: JID_0ab0ba0f (posted within 7 days)
[2026-01-05T06:47:22.211Z] [BOT] ⏭️  Skipping duplicate: JID_b4774644 (posted within 7 days)
[2026-01-05T06:47:22.212Z] [BOT] ✅ Loaded pending queue: 46 total (33 pending, 13 enriched, 0 posted)
[2026-01-05T06:47:22.213Z] [BOT] ✅ Saved pending queue: 46 total (33 pending, 10 enriched, 3 posted)
[2026-01-05T06:47:22.213Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T06:47:22.263Z] [BOT] 📂 Loaded 2189 existing routing entries
[2026-01-05T06:47:22.323Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 2192
[2026-01-05T06:47:22.323Z] [BOT] Timestamp: 2026-01-05T06:47:22.308Z
[2026-01-05T06:47:22.324Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 13
   Successful: 6
   Failed: 0
   Skipped: 7
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #💲・sales-jobs: 1 posts
     5. #🌆・chicago: 1 posts
[2026-01-05T06:47:22.324Z] [BOT] [STATS] Channel stats saved
[2026-01-05T06:47:24.338Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2741) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*