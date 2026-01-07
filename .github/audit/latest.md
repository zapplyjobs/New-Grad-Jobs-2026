# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T15:07:27.583Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T15:07:17.153Z] ========================================
[2026-01-07T15:07:17.155Z] Discord Bot Execution Log
[2026-01-07T15:07:17.155Z] Environment: GitHub Actions
[2026-01-07T15:07:17.155Z] Node Version: v20.19.6
[2026-01-07T15:07:17.155Z] ========================================
[2026-01-07T15:07:17.155Z] Environment Variables Check:
[2026-01-07T15:07:17.155Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T15:07:17.155Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.155Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T15:07:17.155Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T15:07:17.155Z] 
Multi-Channel Configuration:
[2026-01-07T15:07:17.155Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.155Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.155Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T15:07:17.156Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T15:07:17.156Z] 
Data Files Check:
[2026-01-07T15:07:17.157Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114300 bytes)
[2026-01-07T15:07:17.163Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 726992 bytes)
[2026-01-07T15:07:17.163Z] 
========================================
[2026-01-07T15:07:17.163Z] Starting Enhanced Discord Bot...
[2026-01-07T15:07:17.163Z] ========================================
[2026-01-07T15:07:17.737Z] [BOT] ✅ Loaded V2 database: 1418 jobs
[2026-01-07T15:07:18.286Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T15:07:18.286Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T15:07:18.286Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T15:07:18.294Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T15:07:18.294Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Sales Engineer at datadog
[2026-01-07T15:07:18.296Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-01-07T15:07:18.296Z] [BOT] ⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T15:07:18.296Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T15:07:18.296Z] [BOT] ⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
[2026-01-07T15:07:18.296Z] [BOT] ⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T15:07:18.297Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T15:07:18.297Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T15:07:18.297Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
[2026-01-07T15:07:18.297Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T15:07:18.297Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T15:07:18.298Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T15:07:18.298Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-07T15:07:18.298Z] [BOT] ⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T15:07:18.298Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T15:07:18.298Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T15:07:18.298Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T15:07:18.299Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T15:07:18.299Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T15:07:18.299Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T15:07:18.299Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T15:07:18.302Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T15:07:18.303Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer" @ datadog
[2026-01-07T15:07:18.304Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T15:07:18.309Z] [BOT ERROR] (node:3256) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T15:07:18.652Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer @ datadog in #💲・sales-jobs
  ✅ Industry: Senior Sales Engineer @ datadog
[2026-01-07T15:07:20.281Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer @ datadog in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-07T15:07:21.783Z] [BOT] 💾 Marked as posted: Senior Sales Engineer @ datadog (instance #1)
[2026-01-07T15:07:21.783Z] [BOT] 💾 BEFORE ARCHIVING: 1419 jobs in database
[2026-01-07T15:07:21.784Z] [BOT] ✅ No jobs to archive (all 1419 jobs within 7-day window)
[2026-01-07T15:07:21.798Z] [BOT] 💾 Saved posted_jobs.json: 1419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T15:07:24.798Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T15:07:24.799Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-07T15:07:24.803Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T15:07:24.809Z] [BOT] ✅ Saved pending queue: 91 total (71 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T15:07:24.809Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T15:07:24.864Z] [BOT] 📂 Loaded 2352 existing routing entries
[2026-01-07T15:07:24.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2353
[2026-01-07T15:07:24.925Z] [BOT] Timestamp: 2026-01-07T15:07:24.915Z
[2026-01-07T15:07:24.926Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 21
[2026-01-07T15:07:24.926Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T15:07:24.926Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2026-01-07T15:07:24.927Z] [BOT] [STATS] Channel stats saved
[2026-01-07T15:07:26.938Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3256) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*