# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T18:46:13.118Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T18:45:55.211Z] ========================================
[2026-01-05T18:45:55.212Z] Discord Bot Execution Log
[2026-01-05T18:45:55.212Z] Environment: GitHub Actions
[2026-01-05T18:45:55.213Z] Node Version: v20.19.6
[2026-01-05T18:45:55.213Z] ========================================
[2026-01-05T18:45:55.213Z] Environment Variables Check:
[2026-01-05T18:45:55.213Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T18:45:55.213Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.213Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T18:45:55.213Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T18:45:55.213Z] 
Multi-Channel Configuration:
[2026-01-05T18:45:55.213Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T18:45:55.214Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T18:45:55.214Z] 
Data Files Check:
[2026-01-05T18:45:55.215Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5259 bytes)
[2026-01-05T18:45:55.220Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 668118 bytes)
[2026-01-05T18:45:55.220Z] 
========================================
[2026-01-05T18:45:55.220Z] Starting Enhanced Discord Bot...
[2026-01-05T18:45:55.220Z] ========================================
[2026-01-05T18:45:55.746Z] [BOT] ✅ Loaded V2 database: 1311 jobs
[2026-01-05T18:45:56.486Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T18:45:56.487Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T18:45:56.487Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T18:45:56.487Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[BOT] 📬 Found 2 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Software Engineer 1 at Uber
[2026-01-05T18:45:56.489Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-05T18:45:56.490Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-05T18:45:56.490Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T18:45:56.490Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T18:45:56.490Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T18:45:56.492Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T18:45:56.493Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1" @ ORG_3cfbdbc3
[2026-01-05T18:45:56.493Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:45:56.497Z] [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T18:45:56.733Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 @ ORG_3cfbdbc3 in #💻・tech-jobs
[2026-01-05T18:45:56.733Z] [BOT] ✅ Industry: Graduate Software Engineer 1 @ ORG_3cfbdbc3
[2026-01-05T18:45:58.513Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 @ ORG_3cfbdbc3 in #🌧️・seattle
[2026-01-05T18:45:58.513Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-05T18:46:00.013Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 @ ORG_3cfbdbc3 (instance #1)
[2026-01-05T18:46:00.013Z] [BOT] 💾 BEFORE ARCHIVING: 1312 jobs in database
[2026-01-05T18:46:00.014Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-05T18:46:00.020Z] [BOT] 📦 Archived 3 jobs to 2025-12.json (3 total in archive)
[2026-01-05T18:46:00.020Z] [BOT] ✅ Archiving complete: 3 archived, 1309 active
[2026-01-05T18:46:00.031Z] [BOT] 💾 Saved posted_jobs.json: 1309 active jobs
[2026-01-05T18:46:00.031Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:46:03.031Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-05T18:46:03.032Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8af17c2e
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-05T18:46:03.032Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-05T18:46:03.405Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #📈・JID_fb739488
[2026-01-05T18:46:03.405Z] [BOT] ✅ Industry: Data Scientist @ ORG_8af17c2e
[2026-01-05T18:46:05.210Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #🗽・new-york
[2026-01-05T18:46:05.210Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T18:46:06.711Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_8af17c2e (instance #1)
[2026-01-05T18:46:06.711Z] [BOT] 💾 BEFORE ARCHIVING: 1310 jobs in database
[2026-01-05T18:46:06.712Z] [BOT] ✅ No jobs to archive (all 1310 jobs within 7-day window)
[2026-01-05T18:46:06.722Z] [BOT] 💾 Saved posted_jobs.json: 1310 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T18:46:09.722Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T18:46:09.722Z] [BOT] ⏭️  Skipping duplicate: JID_16ff0fbc (posted within 7 days)
[2026-01-05T18:46:09.722Z] [BOT] ⏭️  Skipping duplicate: JID_614cec6b (posted within 7 days)
[2026-01-05T18:46:09.723Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-05T18:46:09.723Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-05T18:46:09.723Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T18:46:09.775Z] [BOT] 📂 Loaded 2218 existing routing entries
[2026-01-05T18:46:09.838Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2220
[2026-01-05T18:46:09.838Z] [BOT] Timestamp: 2026-01-05T18:46:09.823Z
[2026-01-05T18:46:09.839Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T18:46:09.839Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-05T18:46:09.839Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-05T18:46:09.839Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌧️・seattle: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-05T18:46:09.840Z] [BOT] [STATS] Channel stats saved
[2026-01-05T18:46:11.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*