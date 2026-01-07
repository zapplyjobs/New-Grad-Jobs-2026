# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T16:45:51.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T16:45:49.430Z] ========================================
[2026-01-07T16:45:49.432Z] Discord Bot Execution Log
[2026-01-07T16:45:49.432Z] Environment: GitHub Actions
[2026-01-07T16:45:49.432Z] Node Version: v20.19.6
[2026-01-07T16:45:49.432Z] ========================================
[2026-01-07T16:45:49.432Z] Environment Variables Check:
[2026-01-07T16:45:49.432Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T16:45:49.432Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.432Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T16:45:49.432Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T16:45:49.432Z] 
Multi-Channel Configuration:
[2026-01-07T16:45:49.432Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T16:45:49.433Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T16:45:49.433Z] 
Data Files Check:
[2026-01-07T16:45:49.434Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114300 bytes)
[2026-01-07T16:45:49.439Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 728135 bytes)
[2026-01-07T16:45:49.439Z] 
========================================
[2026-01-07T16:45:49.439Z] Starting Enhanced Discord Bot...
[2026-01-07T16:45:49.440Z] ========================================
[2026-01-07T16:45:49.955Z] [BOT] ✅ Loaded V2 database: 1420 jobs
[2026-01-07T16:45:50.552Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T16:45:50.553Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T16:45:50.553Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T16:45:50.559Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T16:45:50.560Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T16:45:50.560Z] [BOT] [BOT] 🔍 Sample enriched job: Senior Sales Engineer at datadog
[2026-01-07T16:45:50.560Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-07T16:45:50.560Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T16:45:50.561Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T16:45:50.561Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T16:45:50.561Z] [BOT] ⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T16:45:50.561Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
[2026-01-07T16:45:50.561Z] [BOT] ⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T16:45:50.561Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T16:45:50.561Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-07T16:45:50.562Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T16:45:50.562Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T16:45:50.563Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T16:45:50.563Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T16:45:50.563Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T16:45:50.563Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T16:45:50.574Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*