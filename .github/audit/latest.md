# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T14:26:35.045Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T14:26:23.660Z] ========================================
[2026-01-07T14:26:23.662Z] Discord Bot Execution Log
[2026-01-07T14:26:23.662Z] Environment: GitHub Actions
[2026-01-07T14:26:23.662Z] Node Version: v20.19.6
[2026-01-07T14:26:23.662Z] ========================================
[2026-01-07T14:26:23.662Z] Environment Variables Check:
[2026-01-07T14:26:23.663Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T14:26:23.663Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T14:26:23.663Z] 
Multi-Channel Configuration:
[2026-01-07T14:26:23.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.664Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T14:26:23.664Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T14:26:23.664Z] 
Data Files Check:
[2026-01-07T14:26:23.665Z] .github/data/new_jobs.json: ✅ Exists (10 items, 113730 bytes)
[2026-01-07T14:26:23.670Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 726486 bytes)
[2026-01-07T14:26:23.670Z] 
========================================
[2026-01-07T14:26:23.670Z] Starting Enhanced Discord Bot...
[2026-01-07T14:26:23.670Z] ========================================
[2026-01-07T14:26:24.192Z] [BOT] ✅ Loaded V2 database: 1417 jobs
[2026-01-07T14:26:25.034Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T14:26:25.034Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T14:26:25.034Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T14:26:25.041Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T14:26:25.042Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T14:26:25.043Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T14:26:25.043Z] [BOT] ⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T14:26:25.043Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T14:26:25.044Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-07T14:26:25.044Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T14:26:25.044Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T14:26:25.044Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T14:26:25.044Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T14:26:25.045Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T14:26:25.045Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T14:26:25.045Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T14:26:25.045Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-07T14:26:25.045Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
[2026-01-07T14:26:25.045Z] [BOT] ⏭️ Skipping already posted: ROLE_6389278a at Amentum
⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T14:26:25.045Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T14:26:25.045Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T14:26:25.046Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T14:26:25.046Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T14:26:25.049Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T14:26:25.050Z] [BOT] 📍 [ROUTING] "Sr. Sales Operations and Strategy Analyst" @ samsara
[2026-01-07T14:26:25.050Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T14:26:25.054Z] [BOT ERROR] (node:3306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T14:26:25.276Z] [BOT] ✅ Created forum post: 🏢 Sr. Sales Operations and Strategy Analyst @ samsara in #💲・sales-jobs
[2026-01-07T14:26:25.276Z] [BOT] ✅ Industry: Sr. Sales Operations and Strategy Analyst @ samsara
[2026-01-07T14:26:27.049Z] [BOT] ✅ Created forum post: 🏢 Sr. Sales Operations and Strategy Analyst @ samsara in #💻・remote-usa
[2026-01-07T14:26:27.049Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T14:26:28.549Z] [BOT] 💾 Marked as posted: Sr. Sales Operations and Strategy Analyst @ samsara (instance #1)
[2026-01-07T14:26:28.550Z] [BOT] 💾 BEFORE ARCHIVING: 1418 jobs in database
[2026-01-07T14:26:28.551Z] [BOT] ✅ No jobs to archive (all 1418 jobs within 7-day window)
[2026-01-07T14:26:28.568Z] [BOT] 💾 Saved posted_jobs.json: 1418 active jobs
[2026-01-07T14:26:28.569Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T14:26:31.570Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T14:26:31.570Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-01-07T14:26:31.574Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T14:26:31.581Z] [BOT] ✅ Saved pending queue: 90 total (70 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T14:26:31.581Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T14:26:31.634Z] [BOT] 📂 Loaded 2351 existing routing entries
[2026-01-07T14:26:31.694Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2352
[2026-01-07T14:26:31.694Z] [BOT] Timestamp: 2026-01-07T14:26:31.684Z
[2026-01-07T14:26:31.695Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T14:26:31.695Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T14:26:31.695Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-07T14:26:31.695Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T14:26:31.695Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-07T14:26:31.695Z] [BOT] [STATS] Channel stats saved
[2026-01-07T14:26:33.707Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*