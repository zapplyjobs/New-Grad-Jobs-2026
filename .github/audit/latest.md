# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T07:53:22.420Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T07:53:11.730Z] ========================================
[2026-01-07T07:53:11.732Z] Discord Bot Execution Log
[2026-01-07T07:53:11.732Z] Environment: GitHub Actions
[2026-01-07T07:53:11.732Z] Node Version: v20.19.6
[2026-01-07T07:53:11.732Z] ========================================
[2026-01-07T07:53:11.732Z] Environment Variables Check:
[2026-01-07T07:53:11.732Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T07:53:11.732Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.732Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T07:53:11.732Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T07:53:11.732Z] 
Multi-Channel Configuration:
[2026-01-07T07:53:11.733Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T07:53:11.733Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T07:53:11.733Z] 
Data Files Check:
[2026-01-07T07:53:11.734Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131406 bytes)
[2026-01-07T07:53:11.740Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 724008 bytes)
[2026-01-07T07:53:11.740Z] 
========================================
[2026-01-07T07:53:11.740Z] Starting Enhanced Discord Bot...
[2026-01-07T07:53:11.740Z] ========================================
[2026-01-07T07:53:12.264Z] [BOT] ✅ Loaded V2 database: 1413 jobs
[2026-01-07T07:53:13.089Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T07:53:13.090Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T07:53:13.090Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T07:53:13.096Z] [BOT] ✅ Loaded pending queue: 92 total (72 pending, 20 enriched, 0 posted)
[2026-01-07T07:53:13.097Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Workplace Operations at samsara
[2026-01-07T07:53:13.098Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-07T07:53:13.098Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
[2026-01-07T07:53:13.098Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T07:53:13.098Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-07T07:53:13.098Z] [BOT] ⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T07:53:13.099Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T07:53:13.100Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T07:53:13.100Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T07:53:13.100Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T07:53:13.100Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
[2026-01-07T07:53:13.100Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
[2026-01-07T07:53:13.100Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T07:53:13.101Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T07:53:13.101Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T07:53:13.101Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T07:53:13.104Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T07:53:13.105Z] [BOT] 📍 [ROUTING] "Manager, Workplace Operations" @ samsara
[2026-01-07T07:53:13.105Z] [BOT] Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T07:53:13.110Z] [BOT ERROR] (node:3342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T07:53:13.278Z] [BOT] ✅ Created forum post: 🏢 Manager, Workplace Operations @ samsara in #💲・sales-jobs
[2026-01-07T07:53:13.278Z] [BOT] ✅ Industry: Manager, Workplace Operations @ samsara
[2026-01-07T07:53:15.020Z] [BOT] ✅ Created forum post: 🏢 Manager, Workplace Operations @ samsara in #🌉・san-francisco
[2026-01-07T07:53:15.021Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-07T07:53:16.520Z] [BOT] 💾 Marked as posted: Manager, Workplace Operations @ samsara (instance #1)
[2026-01-07T07:53:16.521Z] [BOT] 💾 BEFORE ARCHIVING: 1414 jobs in database
[2026-01-07T07:53:16.522Z] [BOT] ✅ No jobs to archive (all 1414 jobs within 7-day window)
[2026-01-07T07:53:16.534Z] [BOT] 💾 Saved posted_jobs.json: 1414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T07:53:19.536Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T07:53:19.536Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T07:53:19.540Z] [BOT] ✅ Loaded pending queue: 92 total (72 pending, 20 enriched, 0 posted)
[2026-01-07T07:53:19.546Z] [BOT] ✅ Saved pending queue: 92 total (72 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T07:53:19.598Z] [BOT] 📂 Loaded 2345 existing routing entries
[2026-01-07T07:53:19.658Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T07:53:19.659Z] [BOT] Total entries: 2346
   Timestamp: 2026-01-07T07:53:19.648Z
[2026-01-07T07:53:19.659Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T07:53:19.659Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T07:53:19.659Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T07:53:19.659Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T07:53:19.659Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-07T07:53:19.660Z] [BOT] [STATS] Channel stats saved
[2026-01-07T07:53:21.669Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*