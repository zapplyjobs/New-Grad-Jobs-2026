# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T15:26:17.767Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T15:26:07.562Z] ========================================
[2026-01-07T15:26:07.564Z] Discord Bot Execution Log
[2026-01-07T15:26:07.565Z] Environment: GitHub Actions
[2026-01-07T15:26:07.565Z] Node Version: v20.19.6
[2026-01-07T15:26:07.565Z] ========================================
[2026-01-07T15:26:07.565Z] Environment Variables Check:
[2026-01-07T15:26:07.565Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T15:26:07.565Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.565Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T15:26:07.565Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T15:26:07.565Z] 
Multi-Channel Configuration:
[2026-01-07T15:26:07.565Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.565Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.565Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.565Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T15:26:07.566Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T15:26:07.566Z] 
Data Files Check:
[2026-01-07T15:26:07.567Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103198 bytes)
[2026-01-07T15:26:07.573Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 727452 bytes)
[2026-01-07T15:26:07.573Z] 
========================================
[2026-01-07T15:26:07.573Z] Starting Enhanced Discord Bot...
[2026-01-07T15:26:07.573Z] ========================================
[2026-01-07T15:26:08.111Z] [BOT] ✅ Loaded V2 database: 1419 jobs
[2026-01-07T15:26:08.556Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T15:26:08.557Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T15:26:08.557Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T15:26:08.564Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T15:26:08.564Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Martech Software Engineer at Brookfield Properties
[2026-01-07T15:26:08.565Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-07T15:26:08.565Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T15:26:08.565Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T15:26:08.565Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T15:26:08.566Z] [BOT] ⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T15:26:08.566Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T15:26:08.566Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T15:26:08.566Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T15:26:08.566Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-07T15:26:08.567Z] [BOT] ⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T15:26:08.567Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T15:26:08.567Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T15:26:08.567Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T15:26:08.568Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T15:26:08.568Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T15:26:08.569Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T15:26:08.570Z] [BOT] 📍 [ROUTING] "Martech Software Engineer" @ ORG_48e1f12a Properties
   Category: TECH (matched: "software")
[2026-01-07T15:26:08.570Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T15:26:08.574Z] [BOT ERROR] (node:3283) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T15:26:08.794Z] [BOT] ✅ Created forum post: 🏢 Martech Software Engineer @ ORG_48e1f12a Properties in #💻・tech-jobs
  ✅ Industry: Martech Software Engineer @ ORG_48e1f12a Properties
[2026-01-07T15:26:10.504Z] [BOT] ✅ Created forum post: 🏢 Martech Software Engineer @ ORG_48e1f12a Properties in #💻・remote-usa
[2026-01-07T15:26:10.504Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T15:26:12.006Z] [BOT] 💾 Marked as posted: Martech Software Engineer @ ORG_48e1f12a Properties (instance #1)
[2026-01-07T15:26:12.006Z] [BOT] 💾 BEFORE ARCHIVING: 1420 jobs in database
[2026-01-07T15:26:12.007Z] [BOT] ✅ No jobs to archive (all 1420 jobs within 7-day window)
[2026-01-07T15:26:12.021Z] [BOT] 💾 Saved posted_jobs.json: 1420 active jobs
[2026-01-07T15:26:12.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T15:26:15.022Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T15:26:15.022Z] [BOT] ⏭️  Skipping duplicate: JID_2e145427-engineer_r2045781 (posted within 7 days)
[2026-01-07T15:26:15.026Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T15:26:15.033Z] [BOT] ✅ Saved pending queue: 91 total (71 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T15:26:15.033Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T15:26:15.084Z] [BOT] 📂 Loaded 2353 existing routing entries
[2026-01-07T15:26:15.143Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T15:26:15.143Z] [BOT] Total entries: 2354
   Timestamp: 2026-01-07T15:26:15.133Z
[2026-01-07T15:26:15.144Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T15:26:15.144Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T15:26:15.144Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T15:26:15.144Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T15:26:15.144Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-07T15:26:15.144Z] [BOT] [STATS] Channel stats saved
[2026-01-07T15:26:17.155Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3283) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*