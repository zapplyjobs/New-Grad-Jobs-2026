# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T02:44:01.546Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T02:43:10.388Z] ========================================
[2026-01-15T02:43:10.389Z] Discord Bot Execution Log
[2026-01-15T02:43:10.389Z] Environment: GitHub Actions
[2026-01-15T02:43:10.389Z] Node Version: v20.19.6
[2026-01-15T02:43:10.390Z] ========================================
[2026-01-15T02:43:10.390Z] Environment Variables Check:
[2026-01-15T02:43:10.390Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T02:43:10.390Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T02:43:10.390Z] 
Multi-Channel Configuration:
[2026-01-15T02:43:10.390Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.390Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.391Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T02:43:10.391Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T02:43:10.391Z] 
Data Files Check:
[2026-01-15T02:43:10.392Z] .github/data/new_jobs.json: ✅ Exists (10 items, 55141 bytes)
[2026-01-15T02:43:10.399Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 819138 bytes)
[2026-01-15T02:43:10.399Z] 
========================================
[2026-01-15T02:43:10.399Z] Starting Enhanced Discord Bot...
[2026-01-15T02:43:10.399Z] ========================================
[2026-01-15T02:43:10.865Z] [BOT] ✅ Loaded V2 database: 1544 jobs
[2026-01-15T02:43:11.545Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T02:43:11.545Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T02:43:11.546Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T02:43:11.695Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Junior Software Engineer at mthree
[2026-01-15T02:43:11.697Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T02:43:11.697Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T02:43:11.697Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T02:43:11.698Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T02:43:11.698Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T02:43:11.703Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T02:43:11.703Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-01-15T02:43:11.703Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T02:43:11.720Z] [BOT ERROR] (node:3030) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T02:43:11.963Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #📈・JID_fb739488
  ✅ Industry: Junior Software Engineer @ mthree
[2026-01-15T02:43:13.729Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #💻・remote-usa
[2026-01-15T02:43:13.729Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T02:43:15.230Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ mthree (instance #1)
💾 BEFORE ARCHIVING: 1545 jobs in database
[2026-01-15T02:43:15.232Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T02:43:15.236Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-15T02:43:15.236Z] [BOT] ✅ Archiving complete: 7 archived, 1538 active
[2026-01-15T02:43:15.249Z] [BOT] 💾 Saved posted_jobs.json: 1538 active jobs
[2026-01-15T02:43:15.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:18.250Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T02:43:18.250Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_6491c1f5
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T02:43:18.569Z] [BOT] ✅ Created forum post: 🏢 Application Support Engineer @ ORG_6491c1f5 in #💻・tech-jobs
  ✅ Industry: Application Support Engineer @ ORG_6491c1f5
[2026-01-15T02:43:20.069Z] [BOT] 💾 Marked as posted: Application Support Engineer @ ORG_6491c1f5 (instance #1)
[2026-01-15T02:43:20.070Z] [BOT] 💾 BEFORE ARCHIVING: 1539 jobs in database
[2026-01-15T02:43:20.071Z] [BOT] ✅ No jobs to archive (all 1539 jobs within 7-day window)
[2026-01-15T02:43:20.081Z] [BOT] 💾 Saved posted_jobs.json: 1539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:20.082Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
   Category: TECH (matched: "software")
[2026-01-15T02:43:20.082Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T02:43:20.501Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・tech-jobs
[2026-01-15T02:43:20.502Z] [BOT] ✅ Industry: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce
[2026-01-15T02:43:22.296Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T02:43:23.798Z] [BOT] 💾 Marked as posted: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce (instance #1)
💾 BEFORE ARCHIVING: 1540 jobs in database
[2026-01-15T02:43:23.799Z] [BOT] ✅ No jobs to archive (all 1540 jobs within 7-day window)
[2026-01-15T02:43:23.810Z] [BOT] 💾 Saved posted_jobs.json: 1540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:23.811Z] [BOT] 📍 [ROUTING] "Technology, Production Support, Full-Time Analyst" @ ORG_e9591c52
[2026-01-15T02:43:23.811Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T02:43:24.055Z] [BOT] ✅ Created forum post: 🏢 Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 in #💻・tech-jobs
  ✅ Industry: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52
[2026-01-15T02:43:25.727Z] [BOT] ✅ Created forum post: 🏢 Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T02:43:27.227Z] [BOT] 💾 Marked as posted: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 (instance #1)
[2026-01-15T02:43:27.228Z] [BOT] 💾 BEFORE ARCHIVING: 1541 jobs in database
[2026-01-15T02:43:27.229Z] [BOT] ✅ No jobs to archive (all 1541 jobs within 7-day window)
[2026-01-15T02:43:27.239Z] [BOT] 💾 Saved posted_jobs.json: 1541 active jobs
[2026-01-15T02:43:27.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:27.240Z] [BOT] 📍 [ROUTING] "ServiceNow Junior Developer" @ ORG_82bce10b State University
[2026-01-15T02:43:27.240Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T02:43:28.103Z] [BOT] ✅ Created forum post: 🏢 ServiceNow Junior Developer @ ORG_82bce10b State University in #💻・tech-jobs
  ✅ Industry: ServiceNow Junior Developer @ ORG_82bce10b State University
[2026-01-15T02:43:29.826Z] [BOT] ✅ Created forum post: 🏢 ServiceNow Junior Developer @ ORG_82bce10b State University in #💻・remote-usa
[2026-01-15T02:43:29.827Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T02:43:31.327Z] [BOT] 💾 Marked as posted: ServiceNow Junior Developer @ ORG_82bce10b State University (instance #1)
💾 BEFORE ARCHIVING: 1542 jobs in database
[2026-01-15T02:43:31.328Z] [BOT] ✅ No jobs to archive (all 1542 jobs within 7-day window)
[2026-01-15T02:43:31.338Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:31.339Z] [BOT] 📍 [ROUTING] "Qlik Developer" @ ORG_101c2b5a Solutions
[2026-01-15T02:43:31.339Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T02:43:31.498Z] [BOT] ✅ Created forum post: 🏢 Qlik Developer @ ORG_101c2b5a Solutions in #💻・tech-jobs
  ✅ Industry: Qlik Developer @ ORG_101c2b5a Solutions
[2026-01-15T02:43:33.176Z] [BOT] ✅ Created forum post: 🏢 Qlik Developer @ ORG_101c2b5a Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T02:43:34.678Z] [BOT] 💾 Marked as posted: Qlik Developer @ ORG_101c2b5a Solutions (instance #1)
💾 BEFORE ARCHIVING: 1543 jobs in database
[2026-01-15T02:43:34.679Z] [BOT] ✅ No jobs to archive (all 1543 jobs within 7-day window)
[2026-01-15T02:43:34.688Z] [BOT] 💾 Saved posted_jobs.json: 1543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:37.689Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
📍 [ROUTING] "Accounting Manager" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T02:43:37.974Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤖・ai-jobs
  ✅ Industry: Accounting Manager @ nominal
[2026-01-15T02:43:39.669Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T02:43:41.169Z] [BOT] 💾 Marked as posted: Accounting Manager @ nominal (instance #1)
[2026-01-15T02:43:41.170Z] [BOT] 💾 BEFORE ARCHIVING: 1544 jobs in database
[2026-01-15T02:43:41.170Z] [BOT] ✅ No jobs to archive (all 1544 jobs within 7-day window)
[2026-01-15T02:43:41.182Z] [BOT] 💾 Saved posted_jobs.json: 1544 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:41.182Z] [BOT] 📍 [ROUTING] "Research Data Coordinator-Cardiovascular Research" @ ORG_efeccf10 Israel Lahey Health
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T02:43:41.182Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T02:43:41.360Z] [BOT] ✅ Created forum post: 🏢 Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health in #🤖・ai-jobs
[2026-01-15T02:43:41.360Z] [BOT] ✅ Industry: Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health
[2026-01-15T02:43:43.039Z] [BOT] ✅ Created forum post: 🏢 Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health in #🚌・boston
[2026-01-15T02:43:43.039Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T02:43:44.541Z] [BOT] 💾 Marked as posted: Research Data Coordinator-Cardiovascular Research @ ORG_efeccf10 Israel Lahey Health (instance #1)
[2026-01-15T02:43:44.541Z] [BOT] 💾 BEFORE ARCHIVING: 1545 jobs in database
[2026-01-15T02:43:44.542Z] [BOT] ✅ No jobs to archive (all 1545 jobs within 7-day window)
[2026-01-15T02:43:44.552Z] [BOT] 💾 Saved posted_jobs.json: 1545 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:44.552Z] [BOT] 📍 [ROUTING] "University Graduate" @ ORG_72fd3ae0
[2026-01-15T02:43:44.552Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-15T02:43:45.006Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-15T02:43:45.006Z] [BOT] ✅ Industry: University Graduate @ ORG_72fd3ae0
[2026-01-15T02:43:46.900Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T02:43:48.402Z] [BOT] 💾 Marked as posted: University Graduate @ ORG_72fd3ae0 (instance #1)
💾 BEFORE ARCHIVING: 1546 jobs in database
[2026-01-15T02:43:48.403Z] [BOT] ✅ No jobs to archive (all 1546 jobs within 7-day window)
[2026-01-15T02:43:48.412Z] [BOT] 💾 Saved posted_jobs.json: 1546 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:51.413Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T02:43:51.413Z] [BOT] 📍 [ROUTING] "Technical Translator 1" @ ORG_19be7dd5 Technologies
   Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T02:43:51.708Z] [BOT] ✅ Created forum post: 🏢 Technical Translator 1 @ ORG_19be7dd5 Technologies in #📣・marketing-jobs
[2026-01-15T02:43:51.708Z] [BOT] ✅ Industry: Technical Translator 1 @ ORG_19be7dd5 Technologies
[2026-01-15T02:43:53.544Z] [BOT] ✅ Created forum post: 🏢 Technical Translator 1 @ ORG_19be7dd5 Technologies in #💻・remote-usa
[2026-01-15T02:43:53.544Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T02:43:55.045Z] [BOT] 💾 Marked as posted: Technical Translator 1 @ ORG_19be7dd5 Technologies (instance #1)
[2026-01-15T02:43:55.046Z] [BOT] 💾 BEFORE ARCHIVING: 1547 jobs in database
[2026-01-15T02:43:55.047Z] [BOT] ✅ No jobs to archive (all 1547 jobs within 7-day window)
[2026-01-15T02:43:55.058Z] [BOT] 💾 Saved posted_jobs.json: 1547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T02:43:58.059Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T02:43:58.059Z] [BOT] ⏭️  Skipping duplicate: JID_c4c8e2c6 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_75385a15 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_51500e28 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_fb11afb3 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_2127cbfa (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_fbb3e460 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_bcdf9d12 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_7b25577d-lab_jr87230 (posted within 7 days)
[2026-01-15T02:43:58.060Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r161169 (posted within 7 days)
⏭️  Skipping duplicate: JID_9a717762 (posted within 7 days)
[2026-01-15T02:43:58.215Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-15T02:43:58.380Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T02:43:58.381Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T02:43:58.440Z] [BOT] 📂 Loaded 3715 existing routing entries
[2026-01-15T02:43:58.499Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3725
   Timestamp: 2026-01-15T02:43:58.486Z
[2026-01-15T02:43:58.500Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 19
[2026-01-15T02:43:58.500Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-15T02:43:58.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-15T02:43:58.501Z] [BOT] Channels used: 9
   Top channels:
     1. #💻・remote-usa: 5 posts
[2026-01-15T02:43:58.501Z] [BOT] 2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-15T02:43:58.501Z] [BOT] [STATS] Channel stats saved
[2026-01-15T02:44:00.519Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3030) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*