# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T08:10:40.471Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T08:09:55.121Z] ========================================
[2026-01-16T08:09:55.123Z] Discord Bot Execution Log
[2026-01-16T08:09:55.123Z] Environment: GitHub Actions
[2026-01-16T08:09:55.123Z] Node Version: v20.19.6
[2026-01-16T08:09:55.123Z] ========================================
[2026-01-16T08:09:55.123Z] Environment Variables Check:
[2026-01-16T08:09:55.123Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T08:09:55.123Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.123Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T08:09:55.124Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T08:09:55.124Z] 
Multi-Channel Configuration:
[2026-01-16T08:09:55.124Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T08:09:55.124Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T08:09:55.125Z] 
Data Files Check:
[2026-01-16T08:09:55.125Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30095 bytes)
[2026-01-16T08:09:55.133Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1075906 bytes)
[2026-01-16T08:09:55.133Z] 
========================================
[2026-01-16T08:09:55.133Z] Starting Enhanced Discord Bot...
[2026-01-16T08:09:55.133Z] ========================================
[2026-01-16T08:09:55.679Z] [BOT] ✅ Loaded V2 database: 1995 jobs
[2026-01-16T08:09:56.149Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T08:09:56.150Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T08:09:56.150Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T08:09:56.266Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst at Gartner
[2026-01-16T08:09:56.268Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T08:09:56.269Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T08:09:56.269Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T08:09:56.270Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T08:09:56.270Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-16T08:09:56.270Z] [BOT] - Data Analyst @ Gartner: irving, stamford
   - Mission Operations Engineer @ nominal: new york, austin
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T08:09:56.273Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T08:09:56.274Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_0760d36d
[2026-01-16T08:09:56.274Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T08:09:56.274Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T08:09:56.291Z] [BOT ERROR] (node:3880) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T08:09:56.439Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0760d36d in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_0760d36d
[2026-01-16T08:09:58.198Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0760d36d in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T08:09:59.699Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_0760d36d (instance #1)
[2026-01-16T08:09:59.699Z] [BOT] 💾 BEFORE ARCHIVING: 1996 jobs in database
[2026-01-16T08:09:59.701Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T08:09:59.706Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-16T08:09:59.706Z] [BOT] ✅ Archiving complete: 5 archived, 1991 active
[2026-01-16T08:09:59.718Z] [BOT] 💾 Saved posted_jobs.json: 1991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:09:59.719Z] [BOT] 💾 Marked as posted: Data Analyst - Insights and Product Analytics @ ORG_0760d36d (instance #1)
[2026-01-16T08:09:59.719Z] [BOT] 💾 BEFORE ARCHIVING: 1992 jobs in database
[2026-01-16T08:09:59.721Z] [BOT] ✅ No jobs to archive (all 1992 jobs within 7-day window)
[2026-01-16T08:09:59.734Z] [BOT] 💾 Saved posted_jobs.json: 1992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:09:59.735Z] [BOT] 📍 [ROUTING] "Cross Asset Market Data Analyst" @ ORG_d9056112inental Exchange
[2026-01-16T08:09:59.735Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T08:09:59.884Z] [BOT] ✅ Created forum post: 🏢 Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange in #📈・JID_fb739488
[2026-01-16T08:09:59.884Z] [BOT] ✅ Industry: Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange
[2026-01-16T08:10:01.731Z] [BOT] ✅ Created forum post: 🏢 Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T08:10:03.232Z] [BOT] 💾 Marked as posted: Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange (instance #1)
[2026-01-16T08:10:03.233Z] [BOT] 💾 BEFORE ARCHIVING: 1993 jobs in database
[2026-01-16T08:10:03.234Z] [BOT] ✅ No jobs to archive (all 1993 jobs within 7-day window)
[2026-01-16T08:10:03.248Z] [BOT] 💾 Saved posted_jobs.json: 1993 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:06.248Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T08:10:06.250Z] [BOT] 📍 [ROUTING] "Artificial Intelligence Graduate" @ ORG_09b26be7
[2026-01-16T08:10:06.250Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T08:10:06.546Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Graduate @ ORG_09b26be7 in #🤖・ai-jobs
[2026-01-16T08:10:06.547Z] [BOT] ✅ Industry: Artificial Intelligence Graduate @ ORG_09b26be7
[2026-01-16T08:10:08.377Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Graduate @ ORG_09b26be7 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T08:10:09.879Z] [BOT] 💾 Marked as posted: Artificial Intelligence Graduate @ ORG_09b26be7 (instance #1)
[2026-01-16T08:10:09.879Z] [BOT] 💾 BEFORE ARCHIVING: 1994 jobs in database
[2026-01-16T08:10:09.880Z] [BOT] ✅ No jobs to archive (all 1994 jobs within 7-day window)
[2026-01-16T08:10:09.896Z] [BOT] 💾 Saved posted_jobs.json: 1994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:09.897Z] [BOT] 📍 [ROUTING] "Founder in Residence - Embedfi - SMB Hardware Leasing" @ ORG_11fb682b Fund
[2026-01-16T08:10:09.897Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T08:10:10.137Z] [BOT] ✅ Created forum post: 🏢 Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🤖・ai-jobs
[2026-01-16T08:10:10.137Z] [BOT] ✅ Industry: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund
[2026-01-16T08:10:11.960Z] [BOT] ✅ Created forum post: 🏢 Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🌉・san-francisco
[2026-01-16T08:10:11.961Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T08:10:13.462Z] [BOT] 💾 Marked as posted: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund (instance #1)
[2026-01-16T08:10:13.462Z] [BOT] 💾 BEFORE ARCHIVING: 1995 jobs in database
[2026-01-16T08:10:13.464Z] [BOT] ✅ No jobs to archive (all 1995 jobs within 7-day window)
[2026-01-16T08:10:13.477Z] [BOT] 💾 Saved posted_jobs.json: 1995 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:16.478Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T08:10:16.480Z] [BOT] 📍 [ROUTING] "CLI Engineer" @ supabase
[2026-01-16T08:10:16.480Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:16.752Z] [BOT] ✅ Created forum post: 🏢 CLI Engineer @ supabase in #💻・tech-jobs
[2026-01-16T08:10:16.752Z] [BOT] ✅ Industry: CLI Engineer @ supabase
[2026-01-16T08:10:18.254Z] [BOT] 💾 Marked as posted: CLI Engineer @ supabase (instance #1)
[2026-01-16T08:10:18.254Z] [BOT] 💾 BEFORE ARCHIVING: 1996 jobs in database
[2026-01-16T08:10:18.255Z] [BOT] ✅ No jobs to archive (all 1996 jobs within 7-day window)
[2026-01-16T08:10:18.268Z] [BOT] 💾 Saved posted_jobs.json: 1996 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:18.268Z] [BOT] 📍 [ROUTING] "Lidar – Quicklook Data Verification Technician" @ NV5 Global
[2026-01-16T08:10:18.268Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:18.542Z] [BOT] ✅ Created forum post: 🏢 Lidar – Quicklook Data Verification Technician @ NV5 Global in #💻・tech-jobs
[2026-01-16T08:10:18.542Z] [BOT] ✅ Industry: Lidar – Quicklook Data Verification Technician @ NV5 Global
[2026-01-16T08:10:20.229Z] [BOT] ✅ Created forum post: 🏢 Lidar – Quicklook Data Verification Technician @ NV5 Global in #💻・remote-usa
[2026-01-16T08:10:20.230Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T08:10:21.731Z] [BOT] 💾 Marked as posted: Lidar – Quicklook Data Verification Technician @ NV5 Global (instance #1)
[2026-01-16T08:10:21.731Z] [BOT] 💾 BEFORE ARCHIVING: 1997 jobs in database
[2026-01-16T08:10:21.733Z] [BOT] ✅ No jobs to archive (all 1997 jobs within 7-day window)
[2026-01-16T08:10:21.747Z] [BOT] 💾 Saved posted_jobs.json: 1997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:21.747Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_42413a38
[2026-01-16T08:10:21.747Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:21.944Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_42413a38 in #💻・tech-jobs
[2026-01-16T08:10:21.945Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_42413a38
[2026-01-16T08:10:23.717Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_42413a38 in #🌉・san-francisco
[2026-01-16T08:10:23.717Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T08:10:25.219Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_42413a38 (instance #1)
[2026-01-16T08:10:25.219Z] [BOT] 💾 BEFORE ARCHIVING: 1998 jobs in database
[2026-01-16T08:10:25.220Z] [BOT] ✅ No jobs to archive (all 1998 jobs within 7-day window)
[2026-01-16T08:10:25.234Z] [BOT] 💾 Saved posted_jobs.json: 1998 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:25.234Z] [BOT] 📍 [ROUTING] "Application Development Engineer I" @ ORG_441f2234
[2026-01-16T08:10:25.234Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:25.810Z] [BOT] ✅ Created forum post: 🏢 Application Development Engineer I @ ORG_441f2234 in #💻・tech-jobs
  ✅ Industry: Application Development Engineer I @ ORG_441f2234
[2026-01-16T08:10:27.311Z] [BOT] 💾 Marked as posted: Application Development Engineer I @ ORG_441f2234 (instance #1)
[2026-01-16T08:10:27.311Z] [BOT] 💾 BEFORE ARCHIVING: 1999 jobs in database
[2026-01-16T08:10:27.313Z] [BOT] ✅ No jobs to archive (all 1999 jobs within 7-day window)
[2026-01-16T08:10:27.324Z] [BOT] 💾 Saved posted_jobs.json: 1999 active jobs
[2026-01-16T08:10:27.324Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Development Engineer 1 - Engineering - Development" @ ORG_a06522bc Scientific
[2026-01-16T08:10:27.325Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:27.628Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific
[2026-01-16T08:10:29.387Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T08:10:30.889Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific (instance #1)
[2026-01-16T08:10:30.889Z] [BOT] 💾 BEFORE ARCHIVING: 2000 jobs in database
[2026-01-16T08:10:30.890Z] [BOT] ✅ No jobs to archive (all 2000 jobs within 7-day window)
[2026-01-16T08:10:30.902Z] [BOT] 💾 Saved posted_jobs.json: 2000 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:30.902Z] [BOT] 📍 [ROUTING] "Associate Software Software Engineer" @ ORG_ba19e9c3 Hat
   Category: TECH (matched: "software")
[2026-01-16T08:10:30.902Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:10:31.163Z] [BOT] ✅ Created forum post: 🏢 Associate Software Software Engineer @ ORG_ba19e9c3 Hat in #💻・tech-jobs
  ✅ Industry: Associate Software Software Engineer @ ORG_ba19e9c3 Hat
[2026-01-16T08:10:32.830Z] [BOT] ✅ Created forum post: 🏢 Associate Software Software Engineer @ ORG_ba19e9c3 Hat in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T08:10:34.331Z] [BOT] 💾 Marked as posted: Associate Software Software Engineer @ ORG_ba19e9c3 Hat (instance #1)
[2026-01-16T08:10:34.331Z] [BOT] 💾 BEFORE ARCHIVING: 2001 jobs in database
[2026-01-16T08:10:34.333Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-01-16T08:10:34.345Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
[2026-01-16T08:10:34.345Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:10:37.345Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T08:10:37.346Z] [BOT] ⏭️  Skipping duplicate: JID_7a032475-graduates_103573 (posted within 7 days)
[2026-01-16T08:10:37.346Z] [BOT] ⏭️  Skipping duplicate: JID_165b6c5e-aveva_careers-JID_e98af70d-us_r011630 (posted within 7 days)
[2026-01-16T08:10:37.346Z] [BOT] ⏭️  Skipping duplicate: JID_8db734ba (posted within 7 days)
[2026-01-16T08:10:37.347Z] [BOT] ⏭️  Skipping duplicate: JID_afadcbd6 (posted within 7 days)
⏭️  Skipping duplicate: JID_520a1186 (posted within 7 days)
⏭️  Skipping duplicate: JID_ba2460f5 (posted within 7 days)
[2026-01-16T08:10:37.347Z] [BOT] ⏭️  Skipping duplicate: JID_c7404514 (posted within 7 days)
⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_3db5fdbf-i_1592119-1 (posted within 7 days)
[2026-01-16T08:10:37.347Z] [BOT] ⏭️  Skipping duplicate: JID_06576a8b (posted within 7 days)
[2026-01-16T08:10:37.347Z] [BOT] ⏭️  Skipping duplicate: JID_39a66154-engineer_r-050446-1 (posted within 7 days)
[2026-01-16T08:10:37.452Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-16T08:10:37.627Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
[2026-01-16T08:10:37.627Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T08:10:37.685Z] [BOT] 📂 Loaded 4215 existing routing entries
[2026-01-16T08:10:37.752Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4225
[2026-01-16T08:10:37.752Z] [BOT] Timestamp: 2026-01-16T08:10:37.734Z
[2026-01-16T08:10:37.753Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T08:10:37.753Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-16T08:10:37.753Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-16T08:10:37.753Z] [BOT] Total posts: 18
   Channels used: 8
   Top channels:
[2026-01-16T08:10:37.753Z] [BOT] 1. #💻・tech-jobs: 6 posts
[2026-01-16T08:10:37.753Z] [BOT] 2. #📈・JID_fb739488: 2 posts
     3. #🚌・boston: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-16T08:10:37.754Z] [BOT] [STATS] Channel stats saved
[2026-01-16T08:10:39.779Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3880) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*