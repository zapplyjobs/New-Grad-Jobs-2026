# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T23:54:25.480Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T23:53:38.395Z] ========================================
[2026-01-16T23:53:38.397Z] Discord Bot Execution Log
[2026-01-16T23:53:38.397Z] Environment: GitHub Actions
[2026-01-16T23:53:38.397Z] Node Version: v20.19.6
[2026-01-16T23:53:38.397Z] ========================================
[2026-01-16T23:53:38.397Z] Environment Variables Check:
[2026-01-16T23:53:38.397Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T23:53:38.397Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.397Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T23:53:38.397Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T23:53:38.398Z] 
Multi-Channel Configuration:
[2026-01-16T23:53:38.398Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T23:53:38.398Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T23:53:38.398Z] 
Data Files Check:
[2026-01-16T23:53:38.399Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42909 bytes)
[2026-01-16T23:53:38.407Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1205222 bytes)
[2026-01-16T23:53:38.407Z] 
========================================
[2026-01-16T23:53:38.407Z] Starting Enhanced Discord Bot...
[2026-01-16T23:53:38.407Z] ========================================
[2026-01-16T23:53:38.934Z] [BOT] ✅ Loaded V2 database: 2222 jobs
[2026-01-16T23:53:39.497Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T23:53:39.498Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T23:53:39.498Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T23:53:39.610Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Frontend Developer - Angular at 360 IT Professionals
[2026-01-16T23:53:39.613Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T23:53:39.614Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T23:53:39.614Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T23:53:39.615Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T23:53:39.615Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T23:53:39.615Z] [BOT] - PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting: washington, boulder
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T23:53:39.617Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T23:53:39.618Z] [BOT] 📍 [ROUTING] "Frontend Developer - Angular" @ 360 IT Professionals
[2026-01-16T23:53:39.619Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:39.635Z] [BOT ERROR] (node:3142) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T23:53:39.964Z] [BOT] ✅ Created forum post: 🏢 Frontend Developer - Angular @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Frontend Developer - Angular @ 360 IT Professionals
[2026-01-16T23:53:41.646Z] [BOT] ✅ Created forum post: 🏢 Frontend Developer - Angular @ 360 IT Professionals in #🗽・new-york
[2026-01-16T23:53:41.646Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T23:53:43.146Z] [BOT] 💾 Marked as posted: Frontend Developer - Angular @ 360 IT Professionals (instance #1)
[2026-01-16T23:53:43.146Z] [BOT] 💾 BEFORE ARCHIVING: 2223 jobs in database
[2026-01-16T23:53:43.148Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T23:53:43.153Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T23:53:43.153Z] [BOT] ✅ Archiving complete: 1 archived, 2222 active
[2026-01-16T23:53:43.165Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:53:43.166Z] [BOT] 📍 [ROUTING] "Software Engineer - Software Development - Backend" @ ORG_9af9eef3 Technologies
[2026-01-16T23:53:43.166Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:43.424Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T23:53:43.424Z] [BOT] ✅ Industry: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies
[2026-01-16T23:53:45.204Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:53:46.704Z] [BOT] 💾 Marked as posted: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:53:46.705Z] [BOT] 💾 BEFORE ARCHIVING: 2223 jobs in database
[2026-01-16T23:53:46.706Z] [BOT] ✅ No jobs to archive (all 2223 jobs within 7-day window)
[2026-01-16T23:53:46.718Z] [BOT] 💾 Saved posted_jobs.json: 2223 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:53:46.719Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_0c79a9c2 Intuition
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:46.943Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-01-16T23:53:46.943Z] [BOT] ✅ Industry: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition
[2026-01-16T23:53:48.682Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_0c79a9c2 Intuition in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-16T23:53:50.183Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition (instance #1)
[2026-01-16T23:53:50.183Z] [BOT] 💾 BEFORE ARCHIVING: 2224 jobs in database
[2026-01-16T23:53:50.185Z] [BOT] ✅ No jobs to archive (all 2224 jobs within 7-day window)
[2026-01-16T23:53:50.202Z] [BOT] 💾 Saved posted_jobs.json: 2224 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:53:50.203Z] [BOT] 📍 [ROUTING] "Graduate 2025 Software Engineer I, US" @ ORG_3cfbdbc3
[2026-01-16T23:53:50.203Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:50.704Z] [BOT] ✅ Created forum post: 🏢 Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3
[2026-01-16T23:53:52.418Z] [BOT] ✅ Created forum post: 🏢 Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T23:53:53.919Z] [BOT] 💾 Marked as posted: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 (instance #1)
[2026-01-16T23:53:53.919Z] [BOT] 💾 BEFORE ARCHIVING: 2225 jobs in database
[2026-01-16T23:53:53.921Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-01-16T23:53:53.936Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:53:53.937Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – New Grad" @ ORG_33a7935d
[2026-01-16T23:53:53.937Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:54.139Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – New Grad @ ORG_33a7935d in #💻・tech-jobs
[2026-01-16T23:53:54.139Z] [BOT] ✅ Industry: Software Engineering AMTS – New Grad @ ORG_33a7935d
[2026-01-16T23:53:55.932Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – New Grad @ ORG_33a7935d in #🌉・san-francisco
[2026-01-16T23:53:55.932Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T23:53:57.433Z] [BOT] 💾 Marked as posted: Software Engineering AMTS – New Grad @ ORG_33a7935d (instance #1)
[2026-01-16T23:53:57.433Z] [BOT] 💾 BEFORE ARCHIVING: 2226 jobs in database
[2026-01-16T23:53:57.435Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-01-16T23:53:57.449Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
[2026-01-16T23:53:57.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:53:57.450Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Developer Infra - BS/MS" @ ORG_08c9a13c
[2026-01-16T23:53:57.450Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:53:57.937Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T23:53:57.938Z] [BOT] ✅ Industry: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c
[2026-01-16T23:53:59.662Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T23:54:01.163Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Developer Infra - BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-16T23:54:01.163Z] [BOT] 💾 BEFORE ARCHIVING: 2227 jobs in database
[2026-01-16T23:54:01.165Z] [BOT] ✅ No jobs to archive (all 2227 jobs within 7-day window)
[2026-01-16T23:54:01.179Z] [BOT] 💾 Saved posted_jobs.json: 2227 active jobs
[2026-01-16T23:54:01.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:01.180Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_6675b3b7 Information System
[2026-01-16T23:54:01.180Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:54:01.437Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_6675b3b7 Information System in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_6675b3b7 Information System
[2026-01-16T23:54:03.235Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_6675b3b7 Information System in #💻・remote-usa
[2026-01-16T23:54:03.236Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T23:54:04.737Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_6675b3b7 Information System (instance #1)
[2026-01-16T23:54:04.737Z] [BOT] 💾 BEFORE ARCHIVING: 2228 jobs in database
[2026-01-16T23:54:04.739Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-01-16T23:54:04.753Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
[2026-01-16T23:54:04.753Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:07.754Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-16T23:54:07.755Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1" @ ORG_52575429 Consulting
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T23:54:07.755Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T23:54:07.968Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📈・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting
[2026-01-16T23:54:09.684Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:54:11.185Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (instance #1)
[2026-01-16T23:54:11.185Z] [BOT] 💾 BEFORE ARCHIVING: 2229 jobs in database
[2026-01-16T23:54:11.187Z] [BOT] ✅ No jobs to archive (all 2229 jobs within 7-day window)
[2026-01-16T23:54:11.201Z] [BOT] 💾 Saved posted_jobs.json: 2229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:11.201Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (instance #1)
[2026-01-16T23:54:11.201Z] [BOT] 💾 BEFORE ARCHIVING: 2230 jobs in database
[2026-01-16T23:54:11.202Z] [BOT] ✅ No jobs to archive (all 2230 jobs within 7-day window)
[2026-01-16T23:54:11.216Z] [BOT] 💾 Saved posted_jobs.json: 2230 active jobs
[2026-01-16T23:54:11.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:11.216Z] [BOT] 📍 [ROUTING] "Data analyst - Applications L1" @ ORG_6675b3b7 Information System
[2026-01-16T23:54:11.216Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T23:54:11.672Z] [BOT] ✅ Created forum post: 🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System in #📈・JID_fb739488
  ✅ Industry: Data analyst - Applications L1 @ ORG_6675b3b7 Information System
[2026-01-16T23:54:13.833Z] [BOT] ✅ Created forum post: 🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:54:15.334Z] [BOT] 💾 Marked as posted: Data analyst - Applications L1 @ ORG_6675b3b7 Information System (instance #1)
[2026-01-16T23:54:15.334Z] [BOT] 💾 BEFORE ARCHIVING: 2231 jobs in database
[2026-01-16T23:54:15.336Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-01-16T23:54:15.351Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
[2026-01-16T23:54:15.351Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:15.351Z] [BOT] 📍 [ROUTING] ".Net Developer" @ ORG_6675b3b7 Information System
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T23:54:15.351Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T23:54:15.618Z] [BOT] ✅ Created forum post: 🏢 .Net Developer @ ORG_6675b3b7 Information System in #📈・JID_fb739488
  ✅ Industry: .Net Developer @ ORG_6675b3b7 Information System
[2026-01-16T23:54:17.354Z] [BOT] ✅ Created forum post: 🏢 .Net Developer @ ORG_6675b3b7 Information System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:54:18.855Z] [BOT] 💾 Marked as posted: .Net Developer @ ORG_6675b3b7 Information System (instance #1)
[2026-01-16T23:54:18.855Z] [BOT] 💾 BEFORE ARCHIVING: 2232 jobs in database
[2026-01-16T23:54:18.857Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-01-16T23:54:18.870Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:54:21.870Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T23:54:21.871Z] [BOT] ⏭️  Skipping duplicate: JID_d27506fc (posted within 7 days)
[2026-01-16T23:54:21.871Z] [BOT] ⏭️  Skipping duplicate: JID_6ff36b69 (posted within 7 days)
[2026-01-16T23:54:21.871Z] [BOT] ⏭️  Skipping duplicate: JID_3232bae0 (posted within 7 days)
[2026-01-16T23:54:21.871Z] [BOT] ⏭️  Skipping duplicate: JID_845d938d (posted within 7 days)
[2026-01-16T23:54:21.871Z] [BOT] ⏭️  Skipping duplicate: JID_43d67a94 (posted within 7 days)
[2026-01-16T23:54:21.872Z] [BOT] ⏭️  Skipping duplicate: JID_6098fed3-external_career_site-JID_5d8714f1-_jr307625-1 (posted within 7 days)
[2026-01-16T23:54:21.872Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a186c8e3-detail (posted within 7 days)
[2026-01-16T23:54:21.872Z] [BOT] ⏭️  Skipping duplicate: JID_a5ba30d6 (posted within 7 days)
⏭️  Skipping duplicate: JID_8e1accd4 (posted within 7 days)
[2026-01-16T23:54:21.872Z] [BOT] ⏭️  Skipping duplicate: JID_ee7a279e (posted within 7 days)
[2026-01-16T23:54:22.002Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[2026-01-16T23:54:22.172Z] [BOT] ✅ Saved pending queue: 2778 total (2758 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T23:54:22.173Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T23:54:22.229Z] [BOT] 📂 Loaded 4445 existing routing entries
[2026-01-16T23:54:22.295Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4455
   Timestamp: 2026-01-16T23:54:22.277Z
[2026-01-16T23:54:22.296Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T23:54:22.296Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T23:54:22.296Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T23:54:22.297Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-16T23:54:22.297Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 5 posts
     3. #🌉・san-francisco: 3 posts
     4. #📈・JID_fb739488: 3 posts
     5. #🗽・new-york: 1 posts
[2026-01-16T23:54:22.297Z] [BOT] [STATS] Channel stats saved
[2026-01-16T23:54:24.319Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3142) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*