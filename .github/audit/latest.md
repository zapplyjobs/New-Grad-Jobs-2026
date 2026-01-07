# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T14:07:21.761Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T14:07:19.084Z] ========================================
[2026-01-07T14:07:19.086Z] Discord Bot Execution Log
[2026-01-07T14:07:19.086Z] Environment: GitHub Actions
[2026-01-07T14:07:19.086Z] Node Version: v20.19.6
[2026-01-07T14:07:19.086Z] ========================================
[2026-01-07T14:07:19.086Z] Environment Variables Check:
[2026-01-07T14:07:19.086Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T14:07:19.086Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.086Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T14:07:19.086Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T14:07:19.086Z] 
Multi-Channel Configuration:
[2026-01-07T14:07:19.086Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.086Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T14:07:19.087Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T14:07:19.087Z] 
Data Files Check:
[2026-01-07T14:07:19.088Z] .github/data/new_jobs.json: ✅ Exists (10 items, 112987 bytes)
[2026-01-07T14:07:19.094Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 726486 bytes)
[2026-01-07T14:07:19.094Z] 
========================================
[2026-01-07T14:07:19.094Z] Starting Enhanced Discord Bot...
[2026-01-07T14:07:19.094Z] ========================================
[2026-01-07T14:07:19.631Z] [BOT] ✅ Loaded V2 database: 1417 jobs
[2026-01-07T14:07:20.560Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T14:07:20.561Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T14:07:20.561Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T14:07:20.567Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2026-01-07T14:07:20.567Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T14:07:20.568Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-07T14:07:20.568Z] [BOT] ⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T14:07:20.568Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T14:07:20.569Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
[2026-01-07T14:07:20.569Z] [BOT] ⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T14:07:20.569Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-07T14:07:20.569Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T14:07:20.569Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-07T14:07:20.569Z] [BOT] ⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T14:07:20.569Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T14:07:20.569Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
[2026-01-07T14:07:20.570Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T14:07:20.570Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
[2026-01-07T14:07:20.571Z] [BOT] ⏭️ Skipping already posted: ROLE_6389278a at Amentum
⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T14:07:20.571Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T14:07:20.582Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*