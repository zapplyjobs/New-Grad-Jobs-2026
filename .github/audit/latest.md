# Discord Bot Execution Audit
**Timestamp:** 2025-12-29T23:36:09.423Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-29T23:35:46.273Z] ========================================
[2025-12-29T23:35:46.275Z] Discord Bot Execution Log
[2025-12-29T23:35:46.275Z] Environment: GitHub Actions
[2025-12-29T23:35:46.275Z] Node Version: v20.19.6
[2025-12-29T23:35:46.275Z] ========================================
[2025-12-29T23:35:46.275Z] Environment Variables Check:
[2025-12-29T23:35:46.275Z] DISCORD_TOKEN: ✅ Set
[2025-12-29T23:35:46.275Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-29T23:35:46.276Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-29T23:35:46.276Z] 
Multi-Channel Configuration:
[2025-12-29T23:35:46.276Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.276Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-29T23:35:46.277Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-29T23:35:46.277Z] 
Data Files Check:
[2025-12-29T23:35:46.277Z] .github/data/new_jobs.json: ✅ Exists (3 items, 20487 bytes)
[2025-12-29T23:35:46.277Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 52277 bytes)
[2025-12-29T23:35:46.278Z] 
========================================
[2025-12-29T23:35:46.278Z] Starting Enhanced Discord Bot...
[2025-12-29T23:35:46.278Z] ========================================
[2025-12-29T23:35:46.824Z] [BOT] ✅ Loaded V2 database: 83 jobs
[2025-12-29T23:35:47.303Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-29T23:35:47.303Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-29T23:35:47.304Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-29T23:35:47.304Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-29T23:35:47.400Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 58
[2025-12-29T23:35:47.402Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-29T23:35:47.402Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-29T23:35:47.402Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-29T23:35:47.402Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-29T23:35:47.403Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-29T23:35:47.404Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-29T23:35:47.405Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b344d80e Job Sauce
[2025-12-29T23:35:47.405Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-29T23:35:47.409Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-29T23:35:47.564Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Job Sauce in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_b344d80e Job Sauce
[2025-12-29T23:35:49.236Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Job Sauce in #🌉・san-francisco
[2025-12-29T23:35:49.236Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-29T23:35:50.736Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b344d80e Job Sauce (instance #1)
[2025-12-29T23:35:50.737Z] [BOT] 💾 BEFORE ARCHIVING: 84 jobs in database
[2025-12-29T23:35:50.737Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-29T23:35:50.742Z] [BOT] 📦 Archived 4 jobs to 2025-12.json (4 total in archive)
[2025-12-29T23:35:50.742Z] [BOT] ✅ Archiving complete: 4 archived, 80 active
[2025-12-29T23:35:50.743Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
[2025-12-29T23:35:50.743Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-29T23:35:53.745Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-29T23:35:53.745Z] [BOT] 📍 [ROUTING] "Data Analyst 1 - Nordstrom Media Network - Hybrid','Seattle" @ ORG_2d67c3be
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-29T23:35:53.746Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-29T23:35:54.074Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Nordstrom Media Network - Hybrid','Seattle @ ORG_2d67c3be in #📈・JID_fb739488
[2025-12-29T23:35:54.074Z] [BOT] ✅ Industry: Data Analyst 1 - Nordstrom Media Network - Hybrid','Seattle @ ORG_2d67c3be
[2025-12-29T23:35:55.783Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Nordstrom Media Network - Hybrid','Seattle @ ORG_2d67c3be in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-29T23:35:57.284Z] [BOT] 💾 Marked as posted: Data Analyst 1 - Nordstrom Media Network - Hybrid','Seattle @ ORG_2d67c3be (instance #1)
[2025-12-29T23:35:57.284Z] [BOT] 💾 BEFORE ARCHIVING: 81 jobs in database
✅ No jobs to archive (all 81 jobs within 7-day window)
[2025-12-29T23:35:57.286Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
[2025-12-29T23:35:57.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-29T23:36:00.288Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-29T23:36:00.289Z] [BOT] 📍 [ROUTING] "Early Career Talent - Applications Engineer - Data Science/Automation" @ ORG_d7d2f0ff Digital
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-29T23:36:00.289Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-29T23:36:00.549Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital in #🤖・ai-jobs
  ✅ Industry: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital
[2025-12-29T23:36:02.205Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-29T23:36:03.706Z] [BOT] 💾 Marked as posted: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital (instance #1)
[2025-12-29T23:36:03.706Z] [BOT] 💾 BEFORE ARCHIVING: 82 jobs in database
✅ No jobs to archive (all 82 jobs within 7-day window)
[2025-12-29T23:36:03.764Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-29T23:36:06.765Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-29T23:36:06.765Z] [BOT] ⏭️  Skipping duplicate: JID_1bb13100 (posted within 7 days)
⏭️  Skipping duplicate: JID_ae9a87e5-nordstrom_careers-JID_d0ccd302-_r-805780-1 (posted within 7 days)
[2025-12-29T23:36:06.765Z] [BOT] ⏭️  Skipping duplicate: JID_a74c4f3b (posted within 7 days)
[2025-12-29T23:36:06.766Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-29T23:36:06.767Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2025-12-29T23:36:06.767Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-29T23:36:06.810Z] [BOT] 📂 Loaded 1091 existing routing entries
[2025-12-29T23:36:06.856Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-29T23:36:06.856Z] [BOT] Total entries: 1094
   Timestamp: 2025-12-29T23:36:06.851Z
[2025-12-29T23:36:06.857Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_268baebc.jsonl
[2025-12-29T23:36:06.857Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2025-12-29T23:36:06.857Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-29T23:36:06.857Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 5
   Top channels:
[2025-12-29T23:36:06.857Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #💻・tech-jobs: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #🌧️・seattle: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2025-12-29T23:36:06.858Z] [BOT] [STATS] Channel stats saved
[2025-12-29T23:36:08.870Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*