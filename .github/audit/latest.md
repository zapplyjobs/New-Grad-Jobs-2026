# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T03:15:54.138Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T03:15:33.506Z] ========================================
[2025-12-24T03:15:33.508Z] Discord Bot Execution Log
[2025-12-24T03:15:33.508Z] Environment: GitHub Actions
[2025-12-24T03:15:33.508Z] Node Version: v20.19.6
[2025-12-24T03:15:33.509Z] ========================================
[2025-12-24T03:15:33.509Z] Environment Variables Check:
[2025-12-24T03:15:33.509Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T03:15:33.509Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.509Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T03:15:33.509Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T03:15:33.509Z] 
Multi-Channel Configuration:
[2025-12-24T03:15:33.509Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.509Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.509Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.509Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T03:15:33.510Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T03:15:33.510Z] 
Data Files Check:
[2025-12-24T03:15:33.510Z] .github/data/new_jobs.json: ✅ Exists (4 items, 23375 bytes)
[2025-12-24T03:15:33.513Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 382775 bytes)
[2025-12-24T03:15:33.513Z] 
========================================
[2025-12-24T03:15:33.514Z] Starting Enhanced Discord Bot...
[2025-12-24T03:15:33.514Z] ========================================
[2025-12-24T03:15:34.033Z] [BOT] ✅ Loaded V2 database: 661 jobs
[2025-12-24T03:15:34.635Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T03:15:34.635Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T03:15:34.636Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T03:15:34.636Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-24T03:15:34.689Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T03:15:34.747Z] [BOT] ✅ Export complete: Added 1, Skipped 3, Total 155
[2025-12-24T03:15:34.748Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-24T03:15:34.749Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T03:15:34.749Z] [BOT] 📋 After blacklist filter: 3 jobs (1 blacklisted)
[2025-12-24T03:15:34.749Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-24T03:15:34.750Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-24T03:15:34.750Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
[2025-12-24T03:15:34.750Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T03:15:34.751Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-24T03:15:34.752Z] [BOT] 📍 [ROUTING] "Software Engineer-Test & Verification – Mid Level – Senior - Associate" @ ORG_b344d80e Boeing Company
[2025-12-24T03:15:34.752Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-24T03:15:34.752Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-24T03:15:34.757Z] [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T03:15:35.051Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Test & Verification – Mid Level – Senior - Associate @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
[2025-12-24T03:15:35.052Z] [BOT] ✅ Industry: Software Engineer-Test & Verification – Mid Level – Senior - Associate @ ORG_b344d80e Boeing Company
[2025-12-24T03:15:36.740Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Test & Verification – Mid Level – Senior - Associate @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-24T03:15:36.740Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-24T03:15:38.242Z] [BOT] 💾 Marked as posted: Software Engineer-Test & Verification – Mid Level – Senior - Associate @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-24T03:15:38.242Z] [BOT] 💾 BEFORE ARCHIVING: 662 jobs in database
[2025-12-24T03:15:38.243Z] [BOT] ✅ No jobs to archive (all 662 jobs within 7-day window)
[2025-12-24T03:15:38.252Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
[2025-12-24T03:15:38.252Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T03:15:38.253Z] [BOT] 📍 [ROUTING] "Software Engineer-Simulation Mid Level Senior - Associate" @ ORG_b344d80e Boeing Company
[2025-12-24T03:15:38.253Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-24T03:15:38.253Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-24T03:15:38.434Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Simulation Mid Level Senior - Associate @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
[2025-12-24T03:15:38.434Z] [BOT] ✅ Industry: Software Engineer-Simulation Mid Level Senior - Associate @ ORG_b344d80e Boeing Company
[2025-12-24T03:15:40.148Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Simulation Mid Level Senior - Associate @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-24T03:15:40.148Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-24T03:15:41.649Z] [BOT] 💾 Marked as posted: Software Engineer-Simulation Mid Level Senior - Associate @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-24T03:15:41.649Z] [BOT] 💾 BEFORE ARCHIVING: 663 jobs in database
[2025-12-24T03:15:41.649Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2025-12-24T03:15:41.654Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T03:15:44.655Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-24T03:15:44.656Z] [BOT] 📍 [ROUTING] "Applied Research Scientist - Perception" @ ORG_c90f574b
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-24T03:15:44.837Z] [BOT] ✅ Created forum post: 🏢 Applied Research Scientist - Perception @ ORG_c90f574b in #🤖・ai-jobs
  ✅ Industry: Applied Research Scientist - Perception @ ORG_c90f574b
[2025-12-24T03:15:46.796Z] [BOT] ✅ Created forum post: 🏢 Applied Research Scientist - Perception @ ORG_c90f574b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-24T03:15:48.298Z] [BOT] 💾 Marked as posted: Applied Research Scientist - Perception @ ORG_c90f574b (instance #1)
[2025-12-24T03:15:48.298Z] [BOT] 💾 BEFORE ARCHIVING: 664 jobs in database
[2025-12-24T03:15:48.298Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2025-12-24T03:15:48.304Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T03:15:51.305Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-24T03:15:51.305Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_09e059ae-_jr2025488587-1 (posted within 7 days)
[2025-12-24T03:15:51.305Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_bba62762-_jr2025488590-1 (posted within 7 days)
[2025-12-24T03:15:51.305Z] [BOT] ⏭️  Skipping duplicate: JID_e4669bfe (posted within 7 days)
[2025-12-24T03:15:51.306Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-24T03:15:51.306Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 1 enriched, 3 posted)
[2025-12-24T03:15:51.307Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T03:15:51.349Z] [BOT] 📂 Loaded 1054 existing routing entries
[2025-12-24T03:15:51.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-24T03:15:51.396Z] [BOT] Total entries: 1057
   Timestamp: 2025-12-24T03:15:51.390Z
[2025-12-24T03:15:51.396Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T03:15:51.396Z] [BOT] Total attempts: 7
   Successful: 6
   Failed: 0
   Skipped: 1
[2025-12-24T03:15:51.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-24T03:15:51.396Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #📈・JID_fb739488: 2 posts
[2025-12-24T03:15:51.396Z] [BOT] 2. #💻・remote-usa: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2025-12-24T03:15:51.397Z] [BOT] [STATS] Channel stats saved
[2025-12-24T03:15:53.406Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*