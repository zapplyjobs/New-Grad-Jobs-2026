# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T06:29:18.085Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T06:28:32.048Z] ========================================
[2026-01-16T06:28:32.050Z] Discord Bot Execution Log
[2026-01-16T06:28:32.050Z] Environment: GitHub Actions
[2026-01-16T06:28:32.050Z] Node Version: v20.19.6
[2026-01-16T06:28:32.050Z] ========================================
[2026-01-16T06:28:32.050Z] Environment Variables Check:
[2026-01-16T06:28:32.050Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T06:28:32.050Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.050Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T06:28:32.051Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T06:28:32.051Z] 
Multi-Channel Configuration:
[2026-01-16T06:28:32.051Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T06:28:32.051Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T06:28:32.051Z] 
Data Files Check:
[2026-01-16T06:28:32.052Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44520 bytes)
[2026-01-16T06:28:32.059Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1045041 bytes)
[2026-01-16T06:28:32.059Z] 
========================================
[2026-01-16T06:28:32.059Z] Starting Enhanced Discord Bot...
[2026-01-16T06:28:32.059Z] ========================================
[2026-01-16T06:28:32.613Z] [BOT] ✅ Loaded V2 database: 1941 jobs
[2026-01-16T06:28:33.751Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T06:28:33.751Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T06:28:33.752Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T06:28:33.865Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-16T06:28:33.866Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineer I - AI Business Engineer at Western Alliance Bancorporation
[2026-01-16T06:28:33.870Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T06:28:33.870Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T06:28:33.871Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T06:28:33.871Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T06:28:33.871Z] [BOT] (2 grouped as same job with different locations)
[2026-01-16T06:28:33.872Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Backend @ OpenAI: sf, seattle
   - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T06:28:33.875Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-16T06:28:33.876Z] [BOT] 📍 [ROUTING] "Engineer I - AI Business Engineer" @ ORG_d7d2f0ff Alliance Bancorporation
[2026-01-16T06:28:33.876Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:28:33.893Z] [BOT ERROR] (node:2825) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T06:28:34.079Z] [BOT] ✅ Created forum post: 🏢 Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation in #💻・tech-jobs
  ✅ Industry: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation
[2026-01-16T06:28:35.828Z] [BOT] ✅ Created forum post: 🏢 Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:28:37.329Z] [BOT] 💾 Marked as posted: Engineer I - AI Business Engineer @ ORG_d7d2f0ff Alliance Bancorporation (instance #1)
[2026-01-16T06:28:37.329Z] [BOT] 💾 BEFORE ARCHIVING: 1942 jobs in database
[2026-01-16T06:28:37.331Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T06:28:37.336Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T06:28:37.336Z] [BOT] ✅ Archiving complete: 1 archived, 1941 active
[2026-01-16T06:28:37.349Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
[2026-01-16T06:28:37.349Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:37.350Z] [BOT] 📍 [ROUTING] "Estimating & Planning Engineer 1 - Future Opening" @ ORG_e9a14aad
[2026-01-16T06:28:37.351Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:28:37.525Z] [BOT] ✅ Created forum post: 🏢 Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad in #💻・tech-jobs
[2026-01-16T06:28:37.525Z] [BOT] ✅ Industry: Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad
[2026-01-16T06:28:39.026Z] [BOT] 💾 Marked as posted: Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad (instance #1)
[2026-01-16T06:28:39.027Z] [BOT] 💾 BEFORE ARCHIVING: 1942 jobs in database
[2026-01-16T06:28:39.028Z] [BOT] ✅ No jobs to archive (all 1942 jobs within 7-day window)
[2026-01-16T06:28:39.040Z] [BOT] 💾 Saved posted_jobs.json: 1942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:39.040Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Go Lang" @ mthree
[2026-01-16T06:28:39.040Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:28:39.417Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Go Lang @ mthree in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Go Lang @ mthree
[2026-01-16T06:28:40.918Z] [BOT] 💾 Marked as posted: Junior Software Developer - Go Lang @ mthree (instance #1)
[2026-01-16T06:28:40.918Z] [BOT] 💾 BEFORE ARCHIVING: 1943 jobs in database
[2026-01-16T06:28:40.919Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-01-16T06:28:40.931Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:40.932Z] [BOT] 💾 Marked as posted: Junior Software Developer - Java/Scala @ mthree (instance #1)
[2026-01-16T06:28:40.932Z] [BOT] 💾 BEFORE ARCHIVING: 1944 jobs in database
[2026-01-16T06:28:40.933Z] [BOT] ✅ No jobs to archive (all 1944 jobs within 7-day window)
[2026-01-16T06:28:40.944Z] [BOT] 💾 Saved posted_jobs.json: 1944 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:43.945Z] [BOT] 📌 Posting 5 jobs to #📈・JID_fb739488
[2026-01-16T06:28:43.946Z] [BOT] 📍 [ROUTING] "Software Engineer, Fullstack" @ ORG_73bcfe98
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T06:28:43.946Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T06:28:44.217Z] [BOT] ✅ Created forum post: 📝 Software Engineer, Fullstack @ ORG_73bcfe98 in #📈・JID_fb739488
[2026-01-16T06:28:44.217Z] [BOT] ✅ Industry: Software Engineer, Fullstack @ ORG_73bcfe98
[2026-01-16T06:28:45.954Z] [BOT] ✅ Created forum post: 📝 Software Engineer, Fullstack @ ORG_73bcfe98 in #🌉・san-francisco
[2026-01-16T06:28:45.954Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T06:28:47.454Z] [BOT] 💾 Marked as posted: Software Engineer, Fullstack @ ORG_73bcfe98 (instance #1)
[2026-01-16T06:28:47.455Z] [BOT] 💾 BEFORE ARCHIVING: 1945 jobs in database
[2026-01-16T06:28:47.456Z] [BOT] ✅ No jobs to archive (all 1945 jobs within 7-day window)
[2026-01-16T06:28:47.473Z] [BOT] 💾 Saved posted_jobs.json: 1945 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:47.473Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_ce460410
[2026-01-16T06:28:47.473Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T06:28:47.729Z] [BOT] ✅ Created forum post: 🎨 Software Engineer @ ORG_ce460410 in #📈・JID_fb739488
[2026-01-16T06:28:47.729Z] [BOT] ✅ Industry: Software Engineer @ ORG_ce460410
[2026-01-16T06:28:49.425Z] [BOT] ✅ Created forum post: 🎨 Software Engineer @ ORG_ce460410 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T06:28:50.926Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_ce460410 (instance #1)
[2026-01-16T06:28:50.926Z] [BOT] 💾 BEFORE ARCHIVING: 1946 jobs in database
[2026-01-16T06:28:50.927Z] [BOT] ✅ No jobs to archive (all 1946 jobs within 7-day window)
[2026-01-16T06:28:50.942Z] [BOT] 💾 Saved posted_jobs.json: 1946 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:50.943Z] [BOT] 📍 [ROUTING] "Associate Business Applications Engineer" @ ORG_49005fd1
[2026-01-16T06:28:50.943Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T06:28:51.129Z] [BOT] ✅ Created forum post: 🏢 Associate Business Applications Engineer @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Associate Business Applications Engineer @ ORG_49005fd1
[2026-01-16T06:28:52.862Z] [BOT] ✅ Created forum post: 🏢 Associate Business Applications Engineer @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:28:54.362Z] [BOT] 💾 Marked as posted: Associate Business Applications Engineer @ ORG_49005fd1 (instance #1)
[2026-01-16T06:28:54.363Z] [BOT] 💾 BEFORE ARCHIVING: 1947 jobs in database
[2026-01-16T06:28:54.364Z] [BOT] ✅ No jobs to archive (all 1947 jobs within 7-day window)
[2026-01-16T06:28:54.376Z] [BOT] 💾 Saved posted_jobs.json: 1947 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:54.378Z] [BOT] 📍 [ROUTING] "Internal Technical Consultant" @ ORG_49005fd1
[2026-01-16T06:28:54.378Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T06:28:54.622Z] [BOT] ✅ Created forum post: 🏢 Internal Technical Consultant @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Internal Technical Consultant @ ORG_49005fd1
[2026-01-16T06:28:56.303Z] [BOT] ✅ Created forum post: 🏢 Internal Technical Consultant @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:28:57.803Z] [BOT] 💾 Marked as posted: Internal Technical Consultant @ ORG_49005fd1 (instance #1)
[2026-01-16T06:28:57.803Z] [BOT] 💾 BEFORE ARCHIVING: 1948 jobs in database
[2026-01-16T06:28:57.805Z] [BOT] ✅ No jobs to archive (all 1948 jobs within 7-day window)
[2026-01-16T06:28:57.819Z] [BOT] 💾 Saved posted_jobs.json: 1948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:28:57.819Z] [BOT] 📍 [ROUTING] "Associate Application Developer - Appian Platform" @ ORG_49005fd1
[2026-01-16T06:28:57.820Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T06:28:58.034Z] [BOT] ✅ Created forum post: 🏢 Associate Application Developer - Appian Platform @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Associate Application Developer - Appian Platform @ ORG_49005fd1
[2026-01-16T06:28:59.751Z] [BOT] ✅ Created forum post: 🏢 Associate Application Developer - Appian Platform @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:29:01.253Z] [BOT] 💾 Marked as posted: Associate Application Developer - Appian Platform @ ORG_49005fd1 (instance #1)
[2026-01-16T06:29:01.253Z] [BOT] 💾 BEFORE ARCHIVING: 1949 jobs in database
[2026-01-16T06:29:01.254Z] [BOT] ✅ No jobs to archive (all 1949 jobs within 7-day window)
[2026-01-16T06:29:01.268Z] [BOT] 💾 Saved posted_jobs.json: 1949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:29:04.269Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T06:29:04.270Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_c3b0c544
[2026-01-16T06:29:04.270Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T06:29:04.661Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_c3b0c544 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_c3b0c544
[2026-01-16T06:29:06.411Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_c3b0c544 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T06:29:07.913Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_c3b0c544 (instance #1)
[2026-01-16T06:29:07.913Z] [BOT] 💾 BEFORE ARCHIVING: 1950 jobs in database
[2026-01-16T06:29:07.914Z] [BOT] ✅ No jobs to archive (all 1950 jobs within 7-day window)
[2026-01-16T06:29:07.925Z] [BOT] 💾 Saved posted_jobs.json: 1950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:29:07.925Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_8b7d1a31
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T06:29:08.157Z] [BOT] ✅ Created forum post: 🤖 Software Engineer - Backend @ ORG_8b7d1a31 in #🤖・ai-jobs
[2026-01-16T06:29:08.157Z] [BOT] ✅ Industry: Software Engineer - Backend @ ORG_8b7d1a31
[2026-01-16T06:29:09.843Z] [BOT] ✅ Created forum post: 🤖 Software Engineer - Backend @ ORG_8b7d1a31 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T06:29:11.345Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_8b7d1a31 (instance #1)
[2026-01-16T06:29:11.345Z] [BOT] 💾 BEFORE ARCHIVING: 1951 jobs in database
[2026-01-16T06:29:11.346Z] [BOT] ✅ No jobs to archive (all 1951 jobs within 7-day window)
[2026-01-16T06:29:11.358Z] [BOT] 💾 Saved posted_jobs.json: 1951 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:29:11.358Z] [BOT] 💾 Marked as posted: Software Engineer - Android @ ORG_8b7d1a31 (instance #1)
[2026-01-16T06:29:11.358Z] [BOT] 💾 BEFORE ARCHIVING: 1952 jobs in database
[2026-01-16T06:29:11.360Z] [BOT] ✅ No jobs to archive (all 1952 jobs within 7-day window)
[2026-01-16T06:29:11.373Z] [BOT] 💾 Saved posted_jobs.json: 1952 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:29:14.373Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T06:29:14.373Z] [BOT] ⏭️  Skipping duplicate: JID_a78b48a3-engineer_r11486 (posted within 7 days)
[2026-01-16T06:29:14.374Z] [BOT] ⏭️  Skipping duplicate: JID_cf4a1b14 (posted within 7 days)
[2026-01-16T06:29:14.374Z] [BOT] ⏭️  Skipping duplicate: JID_f522401d (posted within 7 days)
[2026-01-16T06:29:14.374Z] [BOT] ⏭️  Skipping duplicate: JID_ce28c345 (posted within 7 days)
[2026-01-16T06:29:14.374Z] [BOT] ⏭️  Skipping duplicate: JID_0a3edc88 (posted within 7 days)
[2026-01-16T06:29:14.374Z] [BOT] ⏭️  Skipping duplicate: JID_6f99e3fb (posted within 7 days)
⏭️  Skipping duplicate: JID_da347662 (posted within 7 days)
[2026-01-16T06:29:14.375Z] [BOT] ⏭️  Skipping duplicate: JID_597c6c7c (posted within 7 days)
⏭️  Skipping duplicate: JID_a31f7865 (posted within 7 days)
[2026-01-16T06:29:14.375Z] [BOT] ⏭️  Skipping duplicate: JID_647cf8f2 (posted within 7 days)
[2026-01-16T06:29:14.485Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-16T06:29:14.663Z] [BOT] ✅ Saved pending queue: 2767 total (2747 pending, 10 enriched, 10 posted)
[2026-01-16T06:29:14.663Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T06:29:14.722Z] [BOT] 📂 Loaded 4165 existing routing entries
[2026-01-16T06:29:14.790Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T06:29:14.791Z] [BOT] Total entries: 4175
   Timestamp: 2026-01-16T06:29:14.772Z
[2026-01-16T06:29:14.791Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T06:29:14.791Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-16T06:29:14.792Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #📈・JID_fb739488: 5 posts
     2. #💻・remote-usa: 4 posts
[2026-01-16T06:29:14.792Z] [BOT] 3. #🌉・san-francisco: 4 posts
     4. #💻・tech-jobs: 3 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-16T06:29:14.792Z] [BOT] [STATS] Channel stats saved
[2026-01-16T06:29:16.819Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2825) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*