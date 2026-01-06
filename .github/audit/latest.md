# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T00:11:55.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T00:11:07.129Z] ========================================
[2026-01-06T00:11:07.131Z] Discord Bot Execution Log
[2026-01-06T00:11:07.131Z] Environment: GitHub Actions
[2026-01-06T00:11:07.131Z] Node Version: v20.19.6
[2026-01-06T00:11:07.131Z] ========================================
[2026-01-06T00:11:07.131Z] Environment Variables Check:
[2026-01-06T00:11:07.131Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T00:11:07.131Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T00:11:07.132Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T00:11:07.132Z] 
Multi-Channel Configuration:
[2026-01-06T00:11:07.132Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T00:11:07.132Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T00:11:07.133Z] 
Data Files Check:
[2026-01-06T00:11:07.133Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40666 bytes)
[2026-01-06T00:11:07.138Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 674874 bytes)
[2026-01-06T00:11:07.138Z] 
========================================
[2026-01-06T00:11:07.138Z] Starting Enhanced Discord Bot...
[2026-01-06T00:11:07.138Z] ========================================
[2026-01-06T00:11:07.659Z] [BOT] ✅ Loaded V2 database: 1326 jobs
[2026-01-06T00:11:08.542Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T00:11:08.543Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T00:11:08.543Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T00:11:08.543Z] [BOT] ✅ Loaded pending queue: 10 total (0 pending, 10 enriched, 0 posted)
[2026-01-06T00:11:08.543Z] [BOT] [BOT] 📬 Found 10 enriched jobs ready to post from pending queue
[2026-01-06T00:11:08.544Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 - Guidewire at The Travelers Companies
[2026-01-06T00:11:08.546Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-06T00:11:08.546Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-06T00:11:08.546Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-06T00:11:08.547Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-06T00:11:08.547Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T00:11:08.552Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-06T00:11:08.552Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Guidewire" @ ORG_b344d80e Travelers Companies
[2026-01-06T00:11:08.552Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:08.557Z] [BOT ERROR] (node:3293) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T00:11:08.812Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-06T00:11:08.812Z] [BOT] ✅ Industry: Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies
[2026-01-06T00:11:11.046Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-06T00:11:11.047Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T00:11:12.547Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-06T00:11:12.548Z] [BOT] 💾 BEFORE ARCHIVING: 1327 jobs in database
[2026-01-06T00:11:12.549Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T00:11:12.554Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-06T00:11:12.554Z] [BOT] ✅ Archiving complete: 2 archived, 1325 active
[2026-01-06T00:11:12.564Z] [BOT] 💾 Saved posted_jobs.json: 1325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:12.564Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
[2026-01-06T00:11:12.564Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:12.873Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
[2026-01-06T00:11:12.873Z] [BOT] ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-06T00:11:14.729Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・remote-usa
[2026-01-06T00:11:14.729Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T00:11:16.230Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-06T00:11:16.230Z] [BOT] 💾 BEFORE ARCHIVING: 1326 jobs in database
[2026-01-06T00:11:16.232Z] [BOT] ✅ No jobs to archive (all 1326 jobs within 7-day window)
[2026-01-06T00:11:16.241Z] [BOT] 💾 Saved posted_jobs.json: 1326 active jobs
[2026-01-06T00:11:16.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:16.242Z] [BOT] 📍 [ROUTING] "Software Engineering Boost Fellowship" @ ORG_3cfbdbc3
[2026-01-06T00:11:16.242Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:16.468Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Boost Fellowship @ ORG_3cfbdbc3 in #💻・tech-jobs
[2026-01-06T00:11:16.468Z] [BOT] ✅ Industry: Software Engineering Boost Fellowship @ ORG_3cfbdbc3
[2026-01-06T00:11:18.289Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Boost Fellowship @ ORG_3cfbdbc3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T00:11:19.790Z] [BOT] 💾 Marked as posted: Software Engineering Boost Fellowship @ ORG_3cfbdbc3 (instance #1)
[2026-01-06T00:11:19.791Z] [BOT] 💾 BEFORE ARCHIVING: 1327 jobs in database
[2026-01-06T00:11:19.792Z] [BOT] ✅ No jobs to archive (all 1327 jobs within 7-day window)
[2026-01-06T00:11:19.801Z] [BOT] 💾 Saved posted_jobs.json: 1327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:19.802Z] [BOT] 📍 [ROUTING] "Barista" @ ORG_9379ad87 International
   Category: TECH (default)
[2026-01-06T00:11:19.802Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:20.033Z] [BOT] ✅ Created forum post: 🏢 Barista @ ORG_9379ad87 International in #💻・tech-jobs
  ✅ Industry: Barista @ ORG_9379ad87 International
[2026-01-06T00:11:21.772Z] [BOT] ✅ Created forum post: 🏢 Barista @ ORG_9379ad87 International in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T00:11:23.274Z] [BOT] 💾 Marked as posted: Barista @ ORG_9379ad87 International (instance #1)
[2026-01-06T00:11:23.274Z] [BOT] 💾 BEFORE ARCHIVING: 1328 jobs in database
[2026-01-06T00:11:23.275Z] [BOT] ✅ No jobs to archive (all 1328 jobs within 7-day window)
[2026-01-06T00:11:23.285Z] [BOT] 💾 Saved posted_jobs.json: 1328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:23.286Z] [BOT] 📍 [ROUTING] "Frontend Web Developer" @ 1-800 Contacts
[2026-01-06T00:11:23.286Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:23.482Z] [BOT] ✅ Created forum post: 🏢 Frontend Web Developer @ 1-800 Contacts in #💻・tech-jobs
  ✅ Industry: Frontend Web Developer @ 1-800 Contacts
[2026-01-06T00:11:25.439Z] [BOT] ✅ Created forum post: 🏢 Frontend Web Developer @ 1-800 Contacts in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T00:11:26.941Z] [BOT] 💾 Marked as posted: Frontend Web Developer @ 1-800 Contacts (instance #1)
[2026-01-06T00:11:26.941Z] [BOT] 💾 BEFORE ARCHIVING: 1329 jobs in database
[2026-01-06T00:11:26.942Z] [BOT] ✅ No jobs to archive (all 1329 jobs within 7-day window)
[2026-01-06T00:11:26.950Z] [BOT] 💾 Saved posted_jobs.json: 1329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:26.951Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_e9c5e076 Technologies
[2026-01-06T00:11:26.951Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:27.193Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_e9c5e076 Technologies in #💻・tech-jobs
[2026-01-06T00:11:27.193Z] [BOT] ✅ Industry: Software Engineer 2 @ ORG_e9c5e076 Technologies
[2026-01-06T00:11:29.075Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_e9c5e076 Technologies in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-06T00:11:30.576Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_e9c5e076 Technologies (instance #1)
[2026-01-06T00:11:30.576Z] [BOT] 💾 BEFORE ARCHIVING: 1330 jobs in database
[2026-01-06T00:11:30.577Z] [BOT] ✅ No jobs to archive (all 1330 jobs within 7-day window)
[2026-01-06T00:11:30.584Z] [BOT] 💾 Saved posted_jobs.json: 1330 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:30.585Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_1550f0e6 ABLOY
[2026-01-06T00:11:30.585Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:31.098Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
  ✅ Industry: Associate Product Engineer @ ORG_1550f0e6 ABLOY
[2026-01-06T00:11:32.945Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T00:11:34.447Z] [BOT] 💾 Marked as posted: Associate Product Engineer @ ORG_1550f0e6 ABLOY (instance #1)
[2026-01-06T00:11:34.447Z] [BOT] 💾 BEFORE ARCHIVING: 1331 jobs in database
[2026-01-06T00:11:34.448Z] [BOT] ✅ No jobs to archive (all 1331 jobs within 7-day window)
[2026-01-06T00:11:34.456Z] [BOT] 💾 Saved posted_jobs.json: 1331 active jobs
[2026-01-06T00:11:34.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:34.457Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_9a413545
   Category: TECH (matched: "software")
[2026-01-06T00:11:34.457Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:11:34.699Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_9a413545 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_9a413545
[2026-01-06T00:11:36.496Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_9a413545 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T00:11:37.995Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_9a413545 (instance #1)
[2026-01-06T00:11:37.995Z] [BOT] 💾 BEFORE ARCHIVING: 1332 jobs in database
[2026-01-06T00:11:37.997Z] [BOT] ✅ No jobs to archive (all 1332 jobs within 7-day window)
[2026-01-06T00:11:38.006Z] [BOT] 💾 Saved posted_jobs.json: 1332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:41.007Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T00:11:41.007Z] [BOT] 📍 [ROUTING] "Product Engineer 1 - Generative AI - Arcgis Enterprise" @ ORG_0fb6ee9c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T00:11:41.331Z] [BOT] ✅ Created forum post: 🏢 Product Engineer 1 - Generative AI - Arcgis Enterprise @ ORG_0fb6ee9c in #🤖・ai-jobs
  ✅ Industry: Product Engineer 1 - Generative AI - Arcgis Enterprise @ ORG_0fb6ee9c
[2026-01-06T00:11:42.833Z] [BOT] 💾 Marked as posted: Product Engineer 1 - Generative AI - Arcgis Enterprise @ ORG_0fb6ee9c (instance #1)
[2026-01-06T00:11:42.833Z] [BOT] 💾 BEFORE ARCHIVING: 1333 jobs in database
[2026-01-06T00:11:42.834Z] [BOT] ✅ No jobs to archive (all 1333 jobs within 7-day window)
[2026-01-06T00:11:42.843Z] [BOT] 💾 Saved posted_jobs.json: 1333 active jobs
[2026-01-06T00:11:42.843Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:45.845Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-06T00:11:45.845Z] [BOT] 📍 [ROUTING] "Senior Data Scientist - Ads - Usds" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T00:11:46.146Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist - Ads - Usds @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist - Ads - Usds @ ORG_1bb6fcfb
[2026-01-06T00:11:47.837Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist - Ads - Usds @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-06T00:11:49.338Z] [BOT] 💾 Marked as posted: Senior Data Scientist - Ads - Usds @ ORG_1bb6fcfb (instance #1)
[2026-01-06T00:11:49.338Z] [BOT] 💾 BEFORE ARCHIVING: 1334 jobs in database
[2026-01-06T00:11:49.339Z] [BOT] ✅ No jobs to archive (all 1334 jobs within 7-day window)
[2026-01-06T00:11:49.348Z] [BOT] 💾 Saved posted_jobs.json: 1334 active jobs
[2026-01-06T00:11:49.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T00:11:52.349Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-06T00:11:52.349Z] [BOT] ⏭️  Skipping duplicate: JID_f0765a18-guidewire_r-48459 (posted within 7 days)
[2026-01-06T00:11:52.349Z] [BOT] ⏭️  Skipping duplicate: JID_0940be93-rater_r0007321 (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_836fa4f3 (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_5fbf23a8 (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_937da125 (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_791da0ad (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_8f63d936 (posted within 7 days)
⏭️  Skipping duplicate: JID_41e3595e-2_r282942-2 (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_12858b9a (posted within 7 days)
[2026-01-06T00:11:52.350Z] [BOT] ⏭️  Skipping duplicate: JID_319c3705 (posted within 7 days)
[2026-01-06T00:11:52.351Z] [BOT] ✅ Loaded pending queue: 10 total (0 pending, 10 enriched, 0 posted)
[2026-01-06T00:11:52.352Z] [BOT] ✅ Saved pending queue: 10 total (0 pending, 0 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T00:11:52.406Z] [BOT] 📂 Loaded 2240 existing routing entries
[2026-01-06T00:11:52.464Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-06T00:11:52.464Z] [BOT] Total entries: 2250
   Timestamp: 2026-01-06T00:11:52.454Z
[2026-01-06T00:11:52.465Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-06T00:11:52.465Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T00:11:52.465Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
[2026-01-06T00:11:52.465Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #💻・remote-usa: 6 posts
     3. #🌉・san-francisco: 1 posts
     4. #🚌・boston: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-06T00:11:52.466Z] [BOT] [STATS] Channel stats saved
[2026-01-06T00:11:54.477Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3293) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*