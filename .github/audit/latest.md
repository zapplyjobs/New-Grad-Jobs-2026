# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T10:34:34.200Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T10:34:31.711Z] ========================================
[2026-01-07T10:34:31.713Z] Discord Bot Execution Log
[2026-01-07T10:34:31.713Z] Environment: GitHub Actions
[2026-01-07T10:34:31.713Z] Node Version: v20.19.6
[2026-01-07T10:34:31.713Z] ========================================
[2026-01-07T10:34:31.713Z] Environment Variables Check:
[2026-01-07T10:34:31.713Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T10:34:31.714Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T10:34:31.714Z] 
Multi-Channel Configuration:
[2026-01-07T10:34:31.714Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.714Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.715Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T10:34:31.715Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T10:34:31.715Z] 
Data Files Check:
[2026-01-07T10:34:31.716Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133962 bytes)
[2026-01-07T10:34:31.722Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 724475 bytes)
[2026-01-07T10:34:31.722Z] 
========================================
[2026-01-07T10:34:31.722Z] Starting Enhanced Discord Bot...
[2026-01-07T10:34:31.722Z] ========================================
[2026-01-07T10:34:32.261Z] [BOT] ✅ Loaded V2 database: 1414 jobs
[2026-01-07T10:34:32.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T10:34:32.837Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T10:34:32.837Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T10:34:32.841Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T10:34:32.841Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T10:34:32.842Z] [BOT] [BOT] 🔍 Sample enriched job: Manager, Workplace Operations at samsara
[2026-01-07T10:34:32.842Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T10:34:32.842Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T10:34:32.842Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
[2026-01-07T10:34:32.843Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T10:34:32.843Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T10:34:32.843Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T10:34:32.843Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T10:34:32.843Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T10:34:32.843Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T10:34:32.844Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T10:34:32.844Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T10:34:32.844Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
[2026-01-07T10:34:32.844Z] [BOT] ⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T10:34:32.844Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T10:34:32.844Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T10:34:32.844Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T10:34:32.845Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T10:34:32.845Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T10:34:32.845Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T10:34:32.845Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
[2026-01-07T10:34:32.845Z] [BOT] ⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
[2026-01-07T10:34:32.845Z] [BOT] ⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T10:34:32.856Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*