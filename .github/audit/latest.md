# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T04:57:27.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T04:56:51.239Z] ========================================
[2025-12-12T04:56:51.241Z] Discord Bot Execution Log
[2025-12-12T04:56:51.241Z] Environment: GitHub Actions
[2025-12-12T04:56:51.241Z] Node Version: v20.19.6
[2025-12-12T04:56:51.241Z] ========================================
[2025-12-12T04:56:51.242Z] Environment Variables Check:
[2025-12-12T04:56:51.242Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T04:56:51.242Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T04:56:51.242Z] 
Multi-Channel Configuration:
[2025-12-12T04:56:51.242Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.243Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.243Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.243Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.243Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T04:56:51.243Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T04:56:51.243Z] 
Data Files Check:
[2025-12-12T04:56:51.244Z] .github/data/new_jobs.json: ✅ Exists (10 items, 214415 bytes)
[2025-12-12T04:56:51.245Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 21906 bytes)
[2025-12-12T04:56:51.245Z] 
========================================
[2025-12-12T04:56:51.245Z] Starting Enhanced Discord Bot...
[2025-12-12T04:56:51.245Z] ========================================
[2025-12-12T04:56:51.814Z] [BOT] ✅ Loaded V2 database: 34 jobs
[2025-12-12T04:56:52.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T04:56:52.295Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T04:56:52.295Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T04:56:52.296Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T04:56:52.405Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 143
[2025-12-12T04:56:52.405Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T04:56:52.406Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T04:56:52.406Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T04:56:52.407Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T04:56:52.407Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2025-12-12T04:56:52.407Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T04:56:52.407Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T04:56:52.408Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T04:56:52.411Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-12T04:56:52.411Z] [BOT] 📍 [ROUTING] "Early Career Product Data Management Specialist" @ ORG_b344d80e Boeing Company
[2025-12-12T04:56:52.411Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:56:52.416Z] [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T04:56:52.629Z] [BOT] ✅ Created forum post: 🏢 Early Career Product Data Management Specialist @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
  ✅ Industry: Early Career Product Data Management Specialist @ ORG_b344d80e Boeing Company
[2025-12-12T04:56:54.346Z] [BOT] ✅ Created forum post: 🏢 Early Career Product Data Management Specialist @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-12T04:56:54.346Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:56:55.847Z] [BOT] 💾 Marked as posted: Early Career Product Data Management Specialist @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-12T04:56:55.847Z] [BOT] 💾 BEFORE ARCHIVING: 35 jobs in database
[2025-12-12T04:56:55.847Z] [BOT] ✅ No jobs to archive (all 35 jobs within 7-day window)
[2025-12-12T04:56:55.852Z] [BOT] 💾 Saved posted_jobs.json: 35 active jobs
[2025-12-12T04:56:55.852Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "UiPath Robotic Process Automation Developer Associate" @ ORG_c910d474 Dynamics Information Technology
[2025-12-12T04:56:55.853Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
[2025-12-12T04:56:55.853Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:56:55.988Z] [BOT] ✅ Created forum post: 🏢 UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology in #📈・JID_fb739488
[2025-12-12T04:56:55.988Z] [BOT] ✅ Industry: UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology
[2025-12-12T04:56:57.747Z] [BOT] ✅ Created forum post: 🏢 UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:56:59.248Z] [BOT] 💾 Marked as posted: UiPath Robotic Process Automation Developer Associate @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2025-12-12T04:56:59.248Z] [BOT] 💾 BEFORE ARCHIVING: 36 jobs in database
✅ No jobs to archive (all 36 jobs within 7-day window)
[2025-12-12T04:56:59.249Z] [BOT] 💾 Saved posted_jobs.json: 36 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:57:02.249Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-12T04:57:02.250Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_dc20179a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:57:02.407Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_dc20179a in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_dc20179a
[2025-12-12T04:57:04.086Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_dc20179a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:57:05.586Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_dc20179a (instance #1)
[2025-12-12T04:57:05.587Z] [BOT] 💾 BEFORE ARCHIVING: 37 jobs in database
✅ No jobs to archive (all 37 jobs within 7-day window)
[2025-12-12T04:57:05.588Z] [BOT] 💾 Saved posted_jobs.json: 37 active jobs
[2025-12-12T04:57:05.589Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer - 2026 Leadership Development Program - Houston" @ ORG_49d0893a Group
   Category: TECH (matched: "software")
[2025-12-12T04:57:05.589Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:57:05.843Z] [BOT] ✅ Created forum post: 🏢 Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group in #💻・tech-jobs
  ✅ Industry: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group
[2025-12-12T04:57:07.474Z] [BOT] ✅ Created forum post: 🏢 Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-12T04:57:08.975Z] [BOT] 💾 Marked as posted: Software Developer - 2026 Leadership Development Program - Houston @ ORG_49d0893a Group (instance #1)
[2025-12-12T04:57:08.975Z] [BOT] 💾 BEFORE ARCHIVING: 38 jobs in database
✅ No jobs to archive (all 38 jobs within 7-day window)
[2025-12-12T04:57:08.976Z] [BOT] 💾 Saved posted_jobs.json: 38 active jobs
[2025-12-12T04:57:08.976Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Multilingual Audio Personalization Evaluator - English - United States" @ ORG_066855bc
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:57:09.116Z] [BOT] ✅ Created forum post: 🏢 Multilingual Audio Personalization Evaluator - English - United States @ ORG_066855bc in #💻・tech-jobs
  ✅ Industry: Multilingual Audio Personalization Evaluator - English - United States @ ORG_066855bc
[2025-12-12T04:57:10.730Z] [BOT] ✅ Created forum post: 🏢 Multilingual Audio Personalization Evaluator - English - United States @ ORG_066855bc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:57:12.231Z] [BOT] 💾 Marked as posted: Multilingual Audio Personalization Evaluator - English - United States @ ORG_066855bc (instance #1)
[2025-12-12T04:57:12.231Z] [BOT] 💾 BEFORE ARCHIVING: 39 jobs in database
✅ No jobs to archive (all 39 jobs within 7-day window)
[2025-12-12T04:57:12.233Z] [BOT] 💾 Saved posted_jobs.json: 39 active jobs
[2025-12-12T04:57:12.233Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Programmer Analyst" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:57:12.397Z] [BOT] ✅ Created forum post: 🏢 Associate Programmer Analyst @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Associate Programmer Analyst @ ORG_b344d80e Boeing Company
[2025-12-12T04:57:14.132Z] [BOT] ✅ Created forum post: 🏢 Associate Programmer Analyst @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:57:15.633Z] [BOT] 💾 Marked as posted: Associate Programmer Analyst @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-12T04:57:15.633Z] [BOT] 💾 BEFORE ARCHIVING: 40 jobs in database
✅ No jobs to archive (all 40 jobs within 7-day window)
[2025-12-12T04:57:15.634Z] [BOT] 💾 Saved posted_jobs.json: 40 active jobs
[2025-12-12T04:57:15.635Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:57:18.635Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T04:57:18.635Z] [BOT] 📍 [ROUTING] "Database Administrator 1" @ ORG_81f16575ington Ingalls Industries
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:57:18.767Z] [BOT] ✅ Created forum post: 🏢 Database Administrator 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
  ✅ Industry: Database Administrator 1 @ ORG_81f16575ington Ingalls Industries
[2025-12-12T04:57:20.398Z] [BOT] ✅ Created forum post: 🏢 Database Administrator 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:57:21.898Z] [BOT] 💾 Marked as posted: Database Administrator 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2025-12-12T04:57:21.898Z] [BOT] 💾 BEFORE ARCHIVING: 41 jobs in database
✅ No jobs to archive (all 41 jobs within 7-day window)
[2025-12-12T04:57:21.900Z] [BOT] 💾 Saved posted_jobs.json: 41 active jobs
[2025-12-12T04:57:21.900Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:57:24.900Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T04:57:24.900Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_2b3cd64d-specialist_jr2025488062 (posted within 7 days)
⏭️  Skipping duplicate: JID_3dd5b6a7-engineer_jr101949 (posted within 7 days)
[2025-12-12T04:57:24.900Z] [BOT] ⏭️  Skipping duplicate: JID_4eca8e55 (posted within 7 days)
⏭️  Skipping duplicate: JID_2f3a30d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_07902af6 (posted within 7 days)
[2025-12-12T04:57:24.900Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2ac019f3-associate_rq211136 (posted within 7 days)
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_34b5c058-analyst_jr2025487618-1 (posted within 7 days)
[2025-12-12T04:57:24.905Z] [BOT] ✅ Loaded pending queue: 448 total (438 pending, 10 enriched, 0 posted)
[2025-12-12T04:57:24.914Z] [BOT] ✅ Saved pending queue: 448 total (410 pending, 3 enriched, 35 posted)
📋 Updated queue: marked 35 jobs as posted
[2025-12-12T04:57:24.914Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T04:57:24.950Z] [BOT] 📂 Loaded 31 existing routing entries
[2025-12-12T04:57:24.986Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 38
   Timestamp: 2025-12-12T04:57:24.985Z
[2025-12-12T04:57:26.998Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*