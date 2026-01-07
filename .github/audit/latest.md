# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T00:45:49.626Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T00:45:18.116Z] ========================================
[2026-01-07T00:45:18.118Z] Discord Bot Execution Log
[2026-01-07T00:45:18.118Z] Environment: GitHub Actions
[2026-01-07T00:45:18.118Z] Node Version: v20.19.6
[2026-01-07T00:45:18.118Z] ========================================
[2026-01-07T00:45:18.118Z] Environment Variables Check:
[2026-01-07T00:45:18.118Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T00:45:18.118Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.118Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T00:45:18.118Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T00:45:18.118Z] 
Multi-Channel Configuration:
[2026-01-07T00:45:18.119Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T00:45:18.119Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T00:45:18.119Z] 
Data Files Check:
[2026-01-07T00:45:18.120Z] .github/data/new_jobs.json: ✅ Exists (10 items, 122961 bytes)
[2026-01-07T00:45:18.126Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 717338 bytes)
[2026-01-07T00:45:18.126Z] 
========================================
[2026-01-07T00:45:18.126Z] Starting Enhanced Discord Bot...
[2026-01-07T00:45:18.126Z] ========================================
[2026-01-07T00:45:18.656Z] [BOT] ✅ Loaded V2 database: 1401 jobs
[2026-01-07T00:45:19.339Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T00:45:19.339Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T00:45:19.339Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T00:45:19.343Z] [BOT] ✅ Loaded pending queue: 85 total (65 pending, 20 enriched, 0 posted)
[2026-01-07T00:45:19.343Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Litigation and Risk Counsel at brex
[2026-01-07T00:45:19.345Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-07T00:45:19.345Z] [BOT] ⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T00:45:19.345Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T00:45:19.345Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-07T00:45:19.345Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_10f890da-neurology_jr91941-1 (posted within 7 days)
⏭️ Skipping already posted: Neuroimaging Engineer - Neurology at Wash U
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_99eb5377 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer Frontend 2 - Full Time - United States at Cisco
[2026-01-07T00:45:19.346Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_ffd09359-_01815056 (posted within 7 days)
⏭️ Skipping already posted: 2026 Full-Time Software Engineer 2 - IN at RTX
[2026-01-07T00:45:19.347Z] [BOT] ⏭️  Skipping duplicate: JID_5343cd50 (posted within 7 days)
⏭️ Skipping already posted: Full-Stack Software Engineer – New Grad at SpruceID
[2026-01-07T00:45:19.347Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319271 (posted within 7 days)
⏭️ Skipping already posted: Software Developer 1 at Oracle
⏭️  Skipping duplicate: JID_9d819ca6 (posted within 7 days)
[2026-01-07T00:45:19.347Z] [BOT] ⏭️ Skipping already posted: ROLE_9151f1cd at NBCUniversal
📬 Found 6 new jobs (14 already posted)...
[2026-01-07T00:45:19.347Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2026-01-07T00:45:19.347Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-07T00:45:19.348Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-07T00:45:19.348Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Litigation and Risk Counsel @ brex: seattle, washington, united states, san francisco, california, united states, new york, new york, united states
[2026-01-07T00:45:19.348Z] [BOT] ⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T00:45:19.352Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-07T00:45:19.352Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
[2026-01-07T00:45:19.352Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-07T00:45:19.357Z] [BOT ERROR] (node:3101) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T00:45:19.614Z] [BOT] ✅ Created forum post: 🏢 Litigation and Risk Counsel @ brex in #📣・marketing-jobs
  ✅ Industry: Litigation and Risk Counsel @ brex
[2026-01-07T00:45:21.410Z] [BOT] ✅ Created forum post: 🏢 Litigation and Risk Counsel @ brex in #🌧️・seattle
[2026-01-07T00:45:21.410Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-07T00:45:22.911Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-07T00:45:22.911Z] [BOT] 💾 BEFORE ARCHIVING: 1402 jobs in database
[2026-01-07T00:45:22.912Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T00:45:22.917Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-07T00:45:22.918Z] [BOT] ✅ Archiving complete: 2 archived, 1400 active
[2026-01-07T00:45:22.927Z] [BOT] 💾 Saved posted_jobs.json: 1400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:22.927Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-07T00:45:22.927Z] [BOT] 💾 BEFORE ARCHIVING: 1401 jobs in database
[2026-01-07T00:45:22.928Z] [BOT] ✅ No jobs to archive (all 1401 jobs within 7-day window)
[2026-01-07T00:45:22.939Z] [BOT] 💾 Saved posted_jobs.json: 1401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:22.940Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-07T00:45:22.940Z] [BOT] 💾 BEFORE ARCHIVING: 1402 jobs in database
[2026-01-07T00:45:22.941Z] [BOT] ✅ No jobs to archive (all 1402 jobs within 7-day window)
[2026-01-07T00:45:22.951Z] [BOT] 💾 Saved posted_jobs.json: 1402 active jobs
[2026-01-07T00:45:22.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:25.953Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-07T00:45:25.953Z] [BOT] 📍 [ROUTING] "Recruiter, G&A" @ anthropic
[2026-01-07T00:45:25.953Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-07T00:45:26.285Z] [BOT] ✅ Created forum post: 🏢 Recruiter, G&A @ anthropic in #📁・JID_e938df7b
  ✅ Industry: Recruiter, G&A @ anthropic
[2026-01-07T00:45:28.010Z] [BOT] ✅ Created forum post: 🏢 Recruiter, G&A @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T00:45:29.512Z] [BOT] 💾 Marked as posted: Recruiter, G&A @ anthropic (instance #1)
[2026-01-07T00:45:29.512Z] [BOT] 💾 BEFORE ARCHIVING: 1403 jobs in database
[2026-01-07T00:45:29.513Z] [BOT] ✅ No jobs to archive (all 1403 jobs within 7-day window)
[2026-01-07T00:45:29.523Z] [BOT] 💾 Saved posted_jobs.json: 1403 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:32.525Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T00:45:32.527Z] [BOT] 📍 [ROUTING] "Associate Systems Analyst-IT Sales & Trade Portfolio" @ ORG_4d4fb8cc Brands
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T00:45:32.808Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands in #💲・sales-jobs
  ✅ Industry: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands
[2026-01-07T00:45:35.021Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands in #🌆・chicago
[2026-01-07T00:45:35.021Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-07T00:45:36.522Z] [BOT] 💾 Marked as posted: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands (instance #1)
[2026-01-07T00:45:36.522Z] [BOT] 💾 BEFORE ARCHIVING: 1404 jobs in database
[2026-01-07T00:45:36.523Z] [BOT] ✅ No jobs to archive (all 1404 jobs within 7-day window)
[2026-01-07T00:45:36.534Z] [BOT] 💾 Saved posted_jobs.json: 1404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:39.534Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T00:45:39.535Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_6fff67a2 SYSTEMS
   Category: TECH (matched: "software")
[2026-01-07T00:45:39.535Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T00:45:39.738Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_6fff67a2 SYSTEMS in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_6fff67a2 SYSTEMS
[2026-01-07T00:45:41.694Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_6fff67a2 SYSTEMS in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T00:45:43.195Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_6fff67a2 SYSTEMS (instance #1)
[2026-01-07T00:45:43.196Z] [BOT] 💾 BEFORE ARCHIVING: 1405 jobs in database
[2026-01-07T00:45:43.197Z] [BOT] ✅ No jobs to archive (all 1405 jobs within 7-day window)
[2026-01-07T00:45:43.208Z] [BOT] 💾 Saved posted_jobs.json: 1405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T00:45:46.209Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-07T00:45:46.209Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
[2026-01-07T00:45:46.209Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
[2026-01-07T00:45:46.210Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
[2026-01-07T00:45:46.215Z] [BOT] ✅ Loaded pending queue: 85 total (65 pending, 20 enriched, 0 posted)
[2026-01-07T00:45:46.221Z] [BOT] ✅ Saved pending queue: 85 total (65 pending, 16 enriched, 4 posted)
[2026-01-07T00:45:46.221Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T00:45:46.286Z] [BOT] 📂 Loaded 2332 existing routing entries
[2026-01-07T00:45:46.342Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 2336
   Timestamp: 2026-01-07T00:45:46.331Z
[2026-01-07T00:45:46.343Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T00:45:46.343Z] [BOT] Total attempts: 22
   Successful: 8
   Failed: 0
   Skipped: 14
[2026-01-07T00:45:46.343Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T00:45:46.344Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 8
   Top channels:
     1. #📣・marketing-jobs: 1 posts
[2026-01-07T00:45:46.344Z] [BOT] 2. #🌧️・seattle: 1 posts
     3. #📁・JID_e938df7b: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-07T00:45:46.344Z] [BOT] [STATS] Channel stats saved
[2026-01-07T00:45:48.358Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3101) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*