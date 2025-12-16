# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T00:06:57.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T00:06:32.590Z] ========================================
[2025-12-16T00:06:32.592Z] Discord Bot Execution Log
[2025-12-16T00:06:32.592Z] Environment: GitHub Actions
[2025-12-16T00:06:32.592Z] Node Version: v20.19.6
[2025-12-16T00:06:32.592Z] ========================================
[2025-12-16T00:06:32.592Z] Environment Variables Check:
[2025-12-16T00:06:32.592Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T00:06:32.593Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T00:06:32.593Z] 
Multi-Channel Configuration:
[2025-12-16T00:06:32.593Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.593Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.594Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T00:06:32.594Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T00:06:32.594Z] 
Data Files Check:
[2025-12-16T00:06:32.594Z] .github/data/new_jobs.json: ✅ Exists (4 items, 58350 bytes)
[2025-12-16T00:06:32.595Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 99437 bytes)
[2025-12-16T00:06:32.595Z] 
========================================
[2025-12-16T00:06:32.595Z] Starting Enhanced Discord Bot...
[2025-12-16T00:06:32.595Z] ========================================
[2025-12-16T00:06:33.166Z] [BOT] ✅ Loaded V2 database: 157 jobs
[2025-12-16T00:06:34.047Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T00:06:34.047Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T00:06:34.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T00:06:34.048Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-16T00:06:34.156Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 157
[2025-12-16T00:06:34.157Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-16T00:06:34.158Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
📋 After data quality filter: 4 jobs (0 invalid)
[2025-12-16T00:06:34.158Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2025-12-16T00:06:34.158Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T00:06:34.160Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-16T00:06:34.160Z] [BOT] 📍 [ROUTING] "Senior Software Engineer in Test Prisma Access - AI Automation Engineer" @ ORG_94b92bc9 Alto Networks
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T00:06:34.164Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T00:06:34.510Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #💻・tech-jobs
[2025-12-16T00:06:34.511Z] [BOT] ✅ Industry: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks
[2025-12-16T00:06:36.213Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #🌉・san-francisco
[2025-12-16T00:06:36.213Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T00:06:37.713Z] [BOT] 💾 Marked as posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks (instance #1)
[2025-12-16T00:06:37.713Z] [BOT] 💾 BEFORE ARCHIVING: 158 jobs in database
[2025-12-16T00:06:37.714Z] [BOT] ✅ No jobs to archive (all 158 jobs within 7-day window)
[2025-12-16T00:06:37.720Z] [BOT] 💾 Saved posted_jobs.json: 158 active jobs
[2025-12-16T00:06:37.720Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Software Engineer" @ ORG_1b77b3a4in Templeton
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T00:06:37.942Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_1b77b3a4in Templeton in #💻・tech-jobs
[2025-12-16T00:06:37.942Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_1b77b3a4in Templeton
[2025-12-16T00:06:39.692Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_1b77b3a4in Templeton in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T00:06:41.193Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_1b77b3a4in Templeton (instance #1)
[2025-12-16T00:06:41.193Z] [BOT] 💾 BEFORE ARCHIVING: 159 jobs in database
✅ No jobs to archive (all 159 jobs within 7-day window)
[2025-12-16T00:06:41.196Z] [BOT] 💾 Saved posted_jobs.json: 159 active jobs
[2025-12-16T00:06:41.196Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2025-12-16T00:06:41.196Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T00:06:41.377Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-16T00:06:41.377Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-16T00:06:43.319Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T00:06:44.819Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-16T00:06:44.820Z] [BOT] 💾 BEFORE ARCHIVING: 160 jobs in database
✅ No jobs to archive (all 160 jobs within 7-day window)
[2025-12-16T00:06:44.823Z] [BOT] 💾 Saved posted_jobs.json: 160 active jobs
[2025-12-16T00:06:44.823Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T00:06:47.823Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T00:06:47.823Z] [BOT] 📍 [ROUTING] "Data Scientist - Campus" @ 2nd Order Solutions
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T00:06:48.091Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Campus @ 2nd Order Solutions in #📈・JID_fb739488
[2025-12-16T00:06:48.092Z] [BOT] ✅ Industry: Data Scientist - Campus @ 2nd Order Solutions
[2025-12-16T00:06:49.994Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Campus @ 2nd Order Solutions in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T00:06:51.495Z] [BOT] 💾 Marked as posted: Data Scientist - Campus @ 2nd Order Solutions (instance #1)
[2025-12-16T00:06:51.495Z] [BOT] 💾 BEFORE ARCHIVING: 161 jobs in database
[2025-12-16T00:06:51.495Z] [BOT] ✅ No jobs to archive (all 161 jobs within 7-day window)
[2025-12-16T00:06:51.498Z] [BOT] 💾 Saved posted_jobs.json: 161 active jobs
[2025-12-16T00:06:51.498Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T00:06:54.499Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-12-16T00:06:54.499Z] [BOT] ⏭️  Skipping duplicate: JID_0277ecfb (posted within 7 days)
[2025-12-16T00:06:54.499Z] [BOT] ⏭️  Skipping duplicate: JID_d1fd1f1c-engineer_865347 (posted within 7 days)
⏭️  Skipping duplicate: JID_4db57e01 (posted within 7 days)
⏭️  Skipping duplicate: JID_0b22a04c (posted within 7 days)
[2025-12-16T00:06:54.500Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-16T00:06:54.501Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
[2025-12-16T00:06:54.501Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T00:06:54.538Z] [BOT] 📂 Loaded 150 existing routing entries
[2025-12-16T00:06:54.574Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 154
[2025-12-16T00:06:54.575Z] [BOT] Timestamp: 2025-12-16T00:06:54.574Z
[2025-12-16T00:06:56.586Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*