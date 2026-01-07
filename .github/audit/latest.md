# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T13:11:06.105Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T13:10:51.207Z] ========================================
[2026-01-07T13:10:51.209Z] Discord Bot Execution Log
[2026-01-07T13:10:51.209Z] Environment: GitHub Actions
[2026-01-07T13:10:51.209Z] Node Version: v20.19.6
[2026-01-07T13:10:51.209Z] ========================================
[2026-01-07T13:10:51.209Z] Environment Variables Check:
[2026-01-07T13:10:51.209Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T13:10:51.209Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.209Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T13:10:51.209Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T13:10:51.210Z] 
Multi-Channel Configuration:
[2026-01-07T13:10:51.210Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T13:10:51.210Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T13:10:51.210Z] 
Data Files Check:
[2026-01-07T13:10:51.211Z] .github/data/new_jobs.json: ✅ Exists (10 items, 112987 bytes)
[2026-01-07T13:10:51.217Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 725300 bytes)
[2026-01-07T13:10:51.217Z] 
========================================
[2026-01-07T13:10:51.217Z] Starting Enhanced Discord Bot...
[2026-01-07T13:10:51.217Z] ========================================
[2026-01-07T13:10:51.762Z] [BOT] ✅ Loaded V2 database: 1415 jobs
[2026-01-07T13:10:52.258Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-07T13:10:52.259Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T13:10:52.259Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T13:10:52.266Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2026-01-07T13:10:52.266Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T13:10:52.267Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
[2026-01-07T13:10:52.267Z] [BOT] ⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T13:10:52.268Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T13:10:52.268Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-07T13:10:52.268Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T13:10:52.269Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
[2026-01-07T13:10:52.269Z] [BOT] ⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-07T13:10:52.269Z] [BOT] ⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T13:10:52.269Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T13:10:52.270Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
[2026-01-07T13:10:52.270Z] [BOT] ⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-07T13:10:52.270Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T13:10:52.270Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T13:10:52.270Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
📬 Found 2 new jobs (18 already posted)...
[2026-01-07T13:10:52.270Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-07T13:10:52.270Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-07T13:10:52.271Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-07T13:10:52.271Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T13:10:52.272Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T13:10:52.274Z] [BOT] 📍 [ROUTING] "Product Analyst-Gen AI Automation" @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-07T13:10:52.274Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T13:10:52.279Z] [BOT ERROR] (node:3319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T13:10:52.409Z] [BOT] ✅ Created forum post: 🏢 Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) in #💻・tech-jobs
[2026-01-07T13:10:52.409Z] [BOT] ✅ Industry: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-07T13:10:53.912Z] [BOT] 💾 Marked as posted: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) (instance #1)
[2026-01-07T13:10:53.912Z] [BOT] 💾 BEFORE ARCHIVING: 1416 jobs in database
[2026-01-07T13:10:53.913Z] [BOT] ✅ No jobs to archive (all 1416 jobs within 7-day window)
[2026-01-07T13:10:53.926Z] [BOT] 💾 Saved posted_jobs.json: 1416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T13:10:56.927Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T13:10:56.929Z] [BOT] 📍 [ROUTING] "GM, Surfaces Personalization" @ spotify
[2026-01-07T13:10:56.929Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-07T13:10:57.168Z] [BOT] ✅ Created forum post: 🏢 GM, Surfaces Personalization @ spotify in #🤖・ai-jobs
[2026-01-07T13:10:57.169Z] [BOT] ✅ Industry: GM, Surfaces Personalization @ spotify
[2026-01-07T13:10:58.820Z] [BOT] ✅ Created forum post: 🏢 GM, Surfaces Personalization @ spotify in #🗽・new-york
[2026-01-07T13:10:58.820Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-07T13:11:00.320Z] [BOT] 💾 Marked as posted: GM, Surfaces Personalization @ spotify (instance #1)
[2026-01-07T13:11:00.321Z] [BOT] 💾 BEFORE ARCHIVING: 1417 jobs in database
[2026-01-07T13:11:00.322Z] [BOT] ✅ No jobs to archive (all 1417 jobs within 7-day window)
[2026-01-07T13:11:00.332Z] [BOT] 💾 Saved posted_jobs.json: 1417 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T13:11:03.332Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-07T13:11:03.332Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T13:11:03.332Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
[2026-01-07T13:11:03.336Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2026-01-07T13:11:03.343Z] [BOT] ✅ Saved pending queue: 89 total (69 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-07T13:11:03.343Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T13:11:03.398Z] [BOT] 📂 Loaded 2349 existing routing entries
[2026-01-07T13:11:03.453Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2351
   Timestamp: 2026-01-07T13:11:03.443Z
[2026-01-07T13:11:03.454Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T13:11:03.454Z] [BOT] Total attempts: 21
   Successful: 3
   Failed: 0
   Skipped: 18
[2026-01-07T13:11:03.454Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
[2026-01-07T13:11:03.454Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🤖・ai-jobs: 1 posts
     3. #🗽・new-york: 1 posts
[2026-01-07T13:11:03.455Z] [BOT] [STATS] Channel stats saved
[2026-01-07T13:11:05.471Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*