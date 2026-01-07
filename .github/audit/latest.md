# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T00:10:54.727Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 12
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T00:10:12.842Z] ========================================
[2026-01-07T00:10:12.844Z] Discord Bot Execution Log
[2026-01-07T00:10:12.844Z] Environment: GitHub Actions
[2026-01-07T00:10:12.844Z] Node Version: v20.19.6
[2026-01-07T00:10:12.845Z] ========================================
[2026-01-07T00:10:12.845Z] Environment Variables Check:
[2026-01-07T00:10:12.845Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T00:10:12.845Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.845Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T00:10:12.845Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T00:10:12.845Z] 
Multi-Channel Configuration:
[2026-01-07T00:10:12.845Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.845Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.845Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T00:10:12.846Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T00:10:12.846Z] 
Data Files Check:
[2026-01-07T00:10:12.847Z] .github/data/new_jobs.json: ✅ Exists (10 items, 96271 bytes)
[2026-01-07T00:10:12.853Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 712480 bytes)
[2026-01-07T00:10:12.853Z] 
========================================
[2026-01-07T00:10:12.853Z] Starting Enhanced Discord Bot...
[2026-01-07T00:10:12.853Z] ========================================
[2026-01-07T00:10:13.412Z] [BOT] ✅ Loaded V2 database: 1394 jobs
[2026-01-07T00:10:14.149Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T00:10:14.149Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T00:10:14.149Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T00:10:14.152Z] [BOT] ✅ Loaded pending queue: 78 total (58 pending, 20 enriched, 0 posted)
[2026-01-07T00:10:14.153Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T00:10:14.155Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-07T00:10:14.155Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T00:10:14.155Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T00:10:14.155Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
[2026-01-07T00:10:14.155Z] [BOT] ⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T00:10:14.156Z] [BOT] ⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
[2026-01-07T00:10:14.156Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319271 (posted within 7 days)
[2026-01-07T00:10:14.157Z] [BOT] ⏭️ Skipping already posted: Software Developer 1 at Oracle
⏭️  Skipping duplicate: JID_9d819ca6 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9151f1cd at NBCUniversal
⏭️  Skipping duplicate: JID_b288fb7c (posted within 7 days)
⏭️ Skipping already posted: SMB Account Executive, Industries at anthropic
⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003191 (posted within 7 days)
⏭️ Skipping already posted: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T00:10:14.157Z] [BOT] ⏭️  Skipping duplicate: JID_b8474f61 (posted within 7 days)
⏭️ Skipping already posted: Senior Data Scientist, Analytics - Growth/SEO at discord
⏭️  Skipping duplicate: JID_220d5816 (posted within 7 days)
⏭️ Skipping already posted: ROLE_08ee845d at dropbox
⏭️  Skipping duplicate: JID_4f5bc67c (posted within 7 days)
⏭️ Skipping already posted: Client Account Manager, Mid-Market (B2B Services) at reddit
📬 Found 8 new jobs (12 already posted)...
[2026-01-07T00:10:14.158Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
📋 After data quality filter: 8 jobs (0 invalid)
[2026-01-07T00:10:14.158Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-07T00:10:14.159Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T00:10:14.163Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T00:10:14.164Z] [BOT] 📍 [ROUTING] "AI Engineer – New Grad - Materia" @ ORG_98d67bb4 Reuters
[2026-01-07T00:10:14.164Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-07T00:10:14.169Z] [BOT ERROR] (node:3024) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T00:10:14.678Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters in #🤖・ai-jobs
[2026-01-07T00:10:14.678Z] [BOT] ✅ Industry: AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters
[2026-01-07T00:10:16.433Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T00:10:17.933Z] [BOT] 💾 Marked as posted: AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters (instance #1)
[2026-01-07T00:10:17.934Z] [BOT] 💾 BEFORE ARCHIVING: 1395 jobs in database
[2026-01-07T00:10:17.935Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T00:10:17.941Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
✅ Archiving complete: 1 archived, 1394 active
[2026-01-07T00:10:17.953Z] [BOT] 💾 Saved posted_jobs.json: 1394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:20.953Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-07T00:10:20.954Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-07T00:10:20.954Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:21.472Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-07T00:10:23.234Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・remote-usa
[2026-01-07T00:10:23.235Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T00:10:24.736Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
[2026-01-07T00:10:24.736Z] [BOT] 💾 BEFORE ARCHIVING: 1395 jobs in database
[2026-01-07T00:10:24.738Z] [BOT] ✅ No jobs to archive (all 1395 jobs within 7-day window)
[2026-01-07T00:10:24.749Z] [BOT] 💾 Saved posted_jobs.json: 1395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:24.750Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Starting Summer 2026" @ ORG_332e75fd
[2026-01-07T00:10:24.750Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:25.435Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd
[2026-01-07T00:10:27.405Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:10:28.905Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Starting Summer 2026 @ ORG_332e75fd (instance #1)
[2026-01-07T00:10:28.906Z] [BOT] 💾 BEFORE ARCHIVING: 1396 jobs in database
[2026-01-07T00:10:28.907Z] [BOT] ✅ No jobs to archive (all 1396 jobs within 7-day window)
[2026-01-07T00:10:28.916Z] [BOT] 💾 Saved posted_jobs.json: 1396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:28.916Z] [BOT] 📍 [ROUTING] "GIS Analyst" @ ORG_12fc059a County
[2026-01-07T00:10:28.917Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:29.080Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ ORG_12fc059a County in #💻・tech-jobs
  ✅ Industry: GIS Analyst @ ORG_12fc059a County
[2026-01-07T00:10:30.747Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ ORG_12fc059a County in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:10:32.248Z] [BOT] 💾 Marked as posted: GIS Analyst @ ORG_12fc059a County (instance #1)
[2026-01-07T00:10:32.248Z] [BOT] 💾 BEFORE ARCHIVING: 1397 jobs in database
[2026-01-07T00:10:32.249Z] [BOT] ✅ No jobs to archive (all 1397 jobs within 7-day window)
[2026-01-07T00:10:32.259Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:32.259Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Neurology" @ ORG_f5f75c9b U
[2026-01-07T00:10:32.260Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:34.500Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U in #💻・tech-jobs
  ✅ Industry: Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U
[2026-01-07T00:10:36.241Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:10:37.742Z] [BOT] 💾 Marked as posted: Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U (instance #1)
[2026-01-07T00:10:37.742Z] [BOT] 💾 BEFORE ARCHIVING: 1398 jobs in database
[2026-01-07T00:10:37.743Z] [BOT] ✅ No jobs to archive (all 1398 jobs within 7-day window)
[2026-01-07T00:10:37.755Z] [BOT] 💾 Saved posted_jobs.json: 1398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:37.755Z] [BOT] 📍 [ROUTING] "Software Engineer Frontend 2 - Full Time - United States" @ ORG_aa669b28
[2026-01-07T00:10:37.755Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:38.105Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28
[2026-01-07T00:10:39.969Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T00:10:41.469Z] [BOT] 💾 Marked as posted: Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28 (instance #1)
[2026-01-07T00:10:41.469Z] [BOT] 💾 BEFORE ARCHIVING: 1399 jobs in database
[2026-01-07T00:10:41.470Z] [BOT] ✅ No jobs to archive (all 1399 jobs within 7-day window)
[2026-01-07T00:10:41.480Z] [BOT] 💾 Saved posted_jobs.json: 1399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:41.481Z] [BOT] 📍 [ROUTING] "2026 Full-Time Software Engineer 2 - IN" @ ORG_75f04b84
[2026-01-07T00:10:41.481Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:41.730Z] [BOT] ✅ Created forum post: 🏢 2026 Full-Time Software Engineer 2 - IN @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-Time Software Engineer 2 - IN @ ORG_75f04b84
[2026-01-07T00:10:43.716Z] [BOT] ✅ Created forum post: 🏢 2026 Full-Time Software Engineer 2 - IN @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:10:45.217Z] [BOT] 💾 Marked as posted: 2026 Full-Time Software Engineer 2 - IN @ ORG_75f04b84 (instance #1)
[2026-01-07T00:10:45.217Z] [BOT] 💾 BEFORE ARCHIVING: 1400 jobs in database
[2026-01-07T00:10:45.219Z] [BOT] ✅ No jobs to archive (all 1400 jobs within 7-day window)
[2026-01-07T00:10:45.229Z] [BOT] 💾 Saved posted_jobs.json: 1400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:45.229Z] [BOT] 📍 [ROUTING] "Full-Stack Software Engineer – New Grad" @ ORG_c7607813
[2026-01-07T00:10:45.229Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:10:45.441Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #💻・tech-jobs
[2026-01-07T00:10:45.442Z] [BOT] ✅ Industry: Full-Stack Software Engineer – New Grad @ ORG_c7607813
[2026-01-07T00:10:47.279Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:10:48.781Z] [BOT] 💾 Marked as posted: Full-Stack Software Engineer – New Grad @ ORG_c7607813 (instance #1)
[2026-01-07T00:10:48.781Z] [BOT] 💾 BEFORE ARCHIVING: 1401 jobs in database
[2026-01-07T00:10:48.782Z] [BOT] ✅ No jobs to archive (all 1401 jobs within 7-day window)
[2026-01-07T00:10:48.793Z] [BOT] 💾 Saved posted_jobs.json: 1401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:10:51.794Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_10f890da-neurology_jr91941-1 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_99eb5377 (posted within 7 days)
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_ffd09359-_01815056 (posted within 7 days)
[2026-01-07T00:10:51.795Z] [BOT] ⏭️  Skipping duplicate: JID_5343cd50 (posted within 7 days)
[2026-01-07T00:10:51.798Z] [BOT] ✅ Loaded pending queue: 78 total (58 pending, 20 enriched, 0 posted)
[2026-01-07T00:10:51.804Z] [BOT] ✅ Saved pending queue: 78 total (58 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T00:10:51.861Z] [BOT] 📂 Loaded 2324 existing routing entries
[2026-01-07T00:10:51.927Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-07T00:10:51.928Z] [BOT] New entries: 8
   Total entries: 2332
   Timestamp: 2026-01-07T00:10:51.907Z
[2026-01-07T00:10:51.928Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T00:10:51.928Z] [BOT] Total attempts: 28
   Successful: 16
   Failed: 0
   Skipped: 12
[2026-01-07T00:10:51.929Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T00:10:51.929Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 4
   Top channels:
[2026-01-07T00:10:51.929Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 6 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-07T00:10:51.929Z] [BOT] [STATS] Channel stats saved
[2026-01-07T00:10:53.943Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3024) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*