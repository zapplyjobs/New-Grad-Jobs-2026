# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T17:10:15.294Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T17:09:53.450Z] ========================================
[2026-01-07T17:09:53.452Z] Discord Bot Execution Log
[2026-01-07T17:09:53.452Z] Environment: GitHub Actions
[2026-01-07T17:09:53.452Z] Node Version: v20.19.6
[2026-01-07T17:09:53.452Z] ========================================
[2026-01-07T17:09:53.452Z] Environment Variables Check:
[2026-01-07T17:09:53.452Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T17:09:53.453Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T17:09:53.453Z] 
Multi-Channel Configuration:
[2026-01-07T17:09:53.453Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.453Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.454Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T17:09:53.454Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T17:09:53.454Z] 
Data Files Check:
[2026-01-07T17:09:53.455Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98451 bytes)
[2026-01-07T17:09:53.460Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 728135 bytes)
[2026-01-07T17:09:53.460Z] 
========================================
[2026-01-07T17:09:53.460Z] Starting Enhanced Discord Bot...
[2026-01-07T17:09:53.460Z] ========================================
[2026-01-07T17:09:53.980Z] [BOT] ✅ Loaded V2 database: 1420 jobs
[2026-01-07T17:09:54.425Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T17:09:54.425Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T17:09:54.426Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T17:09:54.432Z] [BOT] ✅ Loaded pending queue: 96 total (76 pending, 20 enriched, 0 posted)
[2026-01-07T17:09:54.432Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T17:09:54.433Z] [BOT] [BOT] 🔍 Sample enriched job: Recruiter, G&A at anthropic
[2026-01-07T17:09:54.433Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-07T17:09:54.433Z] [BOT] ⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T17:09:54.435Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-07T17:09:54.435Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-01-07T17:09:54.435Z] [BOT] ⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
[2026-01-07T17:09:54.435Z] [BOT] ⏭️ Skipping already posted: Business Systems Analyst - International at Uline
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T17:09:54.435Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-07T17:09:54.436Z] [BOT] ⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-07T17:09:54.436Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T17:09:54.436Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T17:09:54.436Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
📬 Found 3 new jobs (17 already posted)...
[2026-01-07T17:09:54.437Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-07T17:09:54.437Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-07T17:09:54.437Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T17:09:54.441Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-07T17:09:54.442Z] [BOT] 📍 [ROUTING] "Healthcare Analyst" @ ORG_47633304
[2026-01-07T17:09:54.442Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-07T17:09:54.446Z] [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T17:09:54.766Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_47633304 in #🩺・healthcare-jobs
  ✅ Industry: Healthcare Analyst @ ORG_47633304
[2026-01-07T17:09:56.269Z] [BOT] 💾 Marked as posted: Healthcare Analyst @ ORG_47633304 (instance #1)
[2026-01-07T17:09:56.269Z] [BOT] 💾 BEFORE ARCHIVING: 1421 jobs in database
[2026-01-07T17:09:56.270Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T17:09:56.275Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-07T17:09:56.275Z] [BOT] ✅ Archiving complete: 2 archived, 1419 active
[2026-01-07T17:09:56.284Z] [BOT] 💾 Saved posted_jobs.json: 1419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:09:59.285Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T17:09:59.286Z] [BOT] 📍 [ROUTING] "BPO-Application Support-Health" @ ORG_0ee6cb3e Data
[2026-01-07T17:09:59.286Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-07T17:09:59.562Z] [BOT] ✅ Created forum post: 🏢 BPO-Application Support-Health @ ORG_0ee6cb3e Data in #🤖・ai-jobs
[2026-01-07T17:09:59.562Z] [BOT] ✅ Industry: BPO-Application Support-Health @ ORG_0ee6cb3e Data
[2026-01-07T17:10:01.298Z] [BOT] ✅ Created forum post: 🏢 BPO-Application Support-Health @ ORG_0ee6cb3e Data in #💻・remote-usa
[2026-01-07T17:10:01.299Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T17:10:02.799Z] [BOT] 💾 Marked as posted: BPO-Application Support-Health @ ORG_0ee6cb3e Data (instance #1)
[2026-01-07T17:10:02.799Z] [BOT] 💾 BEFORE ARCHIVING: 1420 jobs in database
[2026-01-07T17:10:02.800Z] [BOT] ✅ No jobs to archive (all 1420 jobs within 7-day window)
[2026-01-07T17:10:02.810Z] [BOT] 💾 Saved posted_jobs.json: 1420 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:10:05.811Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T17:10:05.813Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T17:10:06.029Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2026-01-07T17:10:07.943Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T17:10:09.443Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_75f04b84 (instance #1)
[2026-01-07T17:10:09.443Z] [BOT] 💾 BEFORE ARCHIVING: 1421 jobs in database
[2026-01-07T17:10:09.444Z] [BOT] ✅ No jobs to archive (all 1421 jobs within 7-day window)
[2026-01-07T17:10:09.454Z] [BOT] 💾 Saved posted_jobs.json: 1421 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:10:12.455Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-07T17:10:12.456Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
[2026-01-07T17:10:12.456Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
[2026-01-07T17:10:12.456Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
[2026-01-07T17:10:12.462Z] [BOT] ✅ Loaded pending queue: 96 total (76 pending, 20 enriched, 0 posted)
[2026-01-07T17:10:12.472Z] [BOT] ✅ Saved pending queue: 96 total (76 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-07T17:10:12.472Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T17:10:12.534Z] [BOT] 📂 Loaded 2354 existing routing entries
[2026-01-07T17:10:12.590Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-07T17:10:12.590Z] [BOT] Total entries: 2357
   Timestamp: 2026-01-07T17:10:12.578Z
[2026-01-07T17:10:12.590Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 22
   Successful: 5
   Failed: 0
   Skipped: 17
[2026-01-07T17:10:12.591Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 5
   Channels used: 4
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #🩺・healthcare-jobs: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #💻・tech-jobs: 1 posts
[2026-01-07T17:10:12.591Z] [BOT] [STATS] Channel stats saved
[2026-01-07T17:10:14.602Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*