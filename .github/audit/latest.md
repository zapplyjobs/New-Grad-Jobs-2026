# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T18:05:52.834Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T18:05:18.843Z] ========================================
[2025-12-21T18:05:18.845Z] Discord Bot Execution Log
[2025-12-21T18:05:18.845Z] Environment: GitHub Actions
[2025-12-21T18:05:18.845Z] Node Version: v20.19.6
[2025-12-21T18:05:18.846Z] ========================================
[2025-12-21T18:05:18.846Z] Environment Variables Check:
[2025-12-21T18:05:18.846Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T18:05:18.846Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.846Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T18:05:18.846Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T18:05:18.846Z] 
Multi-Channel Configuration:
[2025-12-21T18:05:18.846Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.846Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.846Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.846Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T18:05:18.847Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T18:05:18.847Z] 
Data Files Check:
[2025-12-21T18:05:18.847Z] .github/data/new_jobs.json: ✅ Exists (10 items, 35493 bytes)
[2025-12-21T18:05:18.851Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 489153 bytes)
[2025-12-21T18:05:18.851Z] 
========================================
[2025-12-21T18:05:18.851Z] Starting Enhanced Discord Bot...
[2025-12-21T18:05:18.851Z] ========================================
[2025-12-21T18:05:19.361Z] [BOT] ✅ Loaded V2 database: 835 jobs
[2025-12-21T18:05:19.965Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T18:05:19.965Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T18:05:19.965Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T18:05:19.965Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T18:05:20.068Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 106
[2025-12-21T18:05:20.071Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T18:05:20.071Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T18:05:20.071Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T18:05:20.072Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T18:05:20.072Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-21T18:05:20.073Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Associate Researcher @ STR: arlington, burlington, san diego
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T18:05:20.077Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-21T18:05:20.078Z] [BOT] 📍 [ROUTING] "Data Quality Analyst - Statistical Reporting" @ ORG_73571e71 Capital Group
[2025-12-21T18:05:20.078Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:05:20.083Z] [BOT ERROR] (node:3461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T18:05:20.362Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst - Statistical Reporting @ ORG_73571e71 Capital Group in #💻・tech-jobs
  ✅ Industry: Data Quality Analyst - Statistical Reporting @ ORG_73571e71 Capital Group
[2025-12-21T18:05:22.258Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst - Statistical Reporting @ ORG_73571e71 Capital Group in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-21T18:05:23.759Z] [BOT] 💾 Marked as posted: Data Quality Analyst - Statistical Reporting @ ORG_73571e71 Capital Group (instance #1)
[2025-12-21T18:05:23.759Z] [BOT] 💾 BEFORE ARCHIVING: 836 jobs in database
[2025-12-21T18:05:23.760Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2025-12-21T18:05:23.772Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:23.772Z] [BOT] 📍 [ROUTING] "Associate Researcher" @ ORG_e1bad657
   Category: TECH (default)
[2025-12-21T18:05:23.773Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:05:23.938Z] [BOT] ✅ Created forum post: 🏢 Associate Researcher @ ORG_e1bad657 in #💻・tech-jobs
[2025-12-21T18:05:23.938Z] [BOT] ✅ Industry: Associate Researcher @ ORG_e1bad657
[2025-12-21T18:05:25.628Z] [BOT] ✅ Created forum post: 🏢 Associate Researcher @ ORG_e1bad657 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:05:27.129Z] [BOT] 💾 Marked as posted: Associate Researcher @ ORG_e1bad657 (instance #1)
[2025-12-21T18:05:27.129Z] [BOT] 💾 BEFORE ARCHIVING: 837 jobs in database
[2025-12-21T18:05:27.130Z] [BOT] ✅ No jobs to archive (all 837 jobs within 7-day window)
[2025-12-21T18:05:27.136Z] [BOT] 💾 Saved posted_jobs.json: 837 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:27.137Z] [BOT] 💾 Marked as posted: Associate Researcher @ ORG_e1bad657 (instance #1)
[2025-12-21T18:05:27.137Z] [BOT] 💾 BEFORE ARCHIVING: 838 jobs in database
[2025-12-21T18:05:27.137Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2025-12-21T18:05:27.146Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
[2025-12-21T18:05:27.147Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Associate Researcher @ ORG_e1bad657 (instance #1)
[2025-12-21T18:05:27.147Z] [BOT] 💾 BEFORE ARCHIVING: 839 jobs in database
[2025-12-21T18:05:27.147Z] [BOT] ✅ No jobs to archive (all 839 jobs within 7-day window)
[2025-12-21T18:05:27.153Z] [BOT] 💾 Saved posted_jobs.json: 839 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:27.153Z] [BOT] 📍 [ROUTING] "Field Geologist" @ ORG_3c8e259b
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:05:27.303Z] [BOT] ✅ Created forum post: 🏢 Field Geologist @ ORG_3c8e259b in #💻・tech-jobs
  ✅ Industry: Field Geologist @ ORG_3c8e259b
[2025-12-21T18:05:28.975Z] [BOT] ✅ Created forum post: 🏢 Field Geologist @ ORG_3c8e259b in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-21T18:05:30.476Z] [BOT] 💾 Marked as posted: Field Geologist @ ORG_3c8e259b (instance #1)
[2025-12-21T18:05:30.476Z] [BOT] 💾 BEFORE ARCHIVING: 840 jobs in database
[2025-12-21T18:05:30.477Z] [BOT] ✅ No jobs to archive (all 840 jobs within 7-day window)
[2025-12-21T18:05:30.485Z] [BOT] 💾 Saved posted_jobs.json: 840 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:30.486Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-21T18:05:30.486Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:05:30.689Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-21T18:05:30.689Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-21T18:05:32.445Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T18:05:33.946Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2025-12-21T18:05:33.946Z] [BOT] 💾 BEFORE ARCHIVING: 841 jobs in database
[2025-12-21T18:05:33.946Z] [BOT] ✅ No jobs to archive (all 841 jobs within 7-day window)
[2025-12-21T18:05:33.954Z] [BOT] 💾 Saved posted_jobs.json: 841 active jobs
[2025-12-21T18:05:33.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:33.955Z] [BOT] 📍 [ROUTING] "Systems Engineer" @ ORG_6c1b0d75
[2025-12-21T18:05:33.955Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:05:34.212Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_6c1b0d75 in #💻・tech-jobs
  ✅ Industry: Systems Engineer @ ORG_6c1b0d75
[2025-12-21T18:05:35.868Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_6c1b0d75 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:05:37.369Z] [BOT] 💾 Marked as posted: Systems Engineer @ ORG_6c1b0d75 (instance #1)
[2025-12-21T18:05:37.370Z] [BOT] 💾 BEFORE ARCHIVING: 842 jobs in database
[2025-12-21T18:05:37.370Z] [BOT] ✅ No jobs to archive (all 842 jobs within 7-day window)
[2025-12-21T18:05:37.379Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
[2025-12-21T18:05:37.379Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:40.380Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T18:05:40.380Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Direct Issuance" @ ORG_a10ae009
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T18:05:40.594Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 - Direct Issuance @ ORG_a10ae009
[2025-12-21T18:05:42.258Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T18:05:43.759Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 (instance #1)
[2025-12-21T18:05:43.759Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:05:43.760Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2025-12-21T18:05:43.768Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:05:43.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:43.768Z] [BOT] 📍 [ROUTING] "Data Annotation - QC and Crawling - Thai" @ ORG_68dd70b6 Ai
[2025-12-21T18:05:43.768Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T18:05:43.964Z] [BOT] ✅ Created forum post: 🏢 Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #🤖・ai-jobs
[2025-12-21T18:05:43.964Z] [BOT] ✅ Industry: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai
[2025-12-21T18:05:45.611Z] [BOT] ✅ Created forum post: 🏢 Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #🌉・san-francisco
[2025-12-21T18:05:45.612Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T18:05:47.112Z] [BOT] 💾 Marked as posted: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai (instance #1)
[2025-12-21T18:05:47.112Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:05:47.113Z] [BOT] ✅ No jobs to archive (all 844 jobs within 7-day window)
[2025-12-21T18:05:47.121Z] [BOT] 💾 Saved posted_jobs.json: 844 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:05:50.122Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-21T18:05:50.123Z] [BOT] ⏭️  Skipping duplicate: JID_a713c94a-reporting_r25_1219 (posted within 7 days)
[2025-12-21T18:05:50.123Z] [BOT] ⏭️  Skipping duplicate: JID_d2bc336a (posted within 7 days)
[2025-12-21T18:05:50.123Z] [BOT] ⏭️  Skipping duplicate: JID_646bc27b-cx_1-job-36628 (posted within 7 days)
⏭️  Skipping duplicate: JID_a61d700c (posted within 7 days)
[2025-12-21T18:05:50.123Z] [BOT] ⏭️  Skipping duplicate: JID_d64630b3 (posted within 7 days)
[2025-12-21T18:05:50.123Z] [BOT] ⏭️  Skipping duplicate: JID_8b73a10f (posted within 7 days)
⏭️  Skipping duplicate: JID_22e4b182-engineer_568730-1 (posted within 7 days)
[2025-12-21T18:05:50.125Z] [BOT] ✅ Loaded pending queue: 107 total (87 pending, 20 enriched, 0 posted)
[2025-12-21T18:05:50.128Z] [BOT] ✅ Saved pending queue: 107 total (87 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2025-12-21T18:05:50.128Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-21T18:05:50.169Z] [BOT] 📂 Loaded 898 existing routing entries
[2025-12-21T18:05:50.213Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-12-21T18:05:50.213Z] [BOT] Total entries: 905
   Timestamp: 2025-12-21T18:05:50.209Z
[2025-12-21T18:05:50.214Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T18:05:50.214Z] [BOT] Total attempts: 15
   Successful: 14
   Failed: 0
   Skipped: 1
[2025-12-21T18:05:50.214Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T18:05:50.214Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
[2025-12-21T18:05:50.214Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🗽・new-york: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2025-12-21T18:05:50.214Z] [BOT] [STATS] Channel stats saved
[2025-12-21T18:05:52.227Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*