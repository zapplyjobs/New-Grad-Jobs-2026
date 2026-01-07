# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T02:41:40.852Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T02:41:38.686Z] ========================================
[2026-01-07T02:41:38.687Z] Discord Bot Execution Log
[2026-01-07T02:41:38.687Z] Environment: GitHub Actions
[2026-01-07T02:41:38.688Z] Node Version: v20.19.6
[2026-01-07T02:41:38.688Z] ========================================
[2026-01-07T02:41:38.688Z] Environment Variables Check:
[2026-01-07T02:41:38.688Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T02:41:38.688Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.688Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T02:41:38.688Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T02:41:38.688Z] 
Multi-Channel Configuration:
[2026-01-07T02:41:38.688Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.688Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.688Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T02:41:38.689Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T02:41:38.689Z] 
Data Files Check:
[2026-01-07T02:41:38.690Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130624 bytes)
[2026-01-07T02:41:38.696Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 722945 bytes)
[2026-01-07T02:41:38.696Z] 
========================================
[2026-01-07T02:41:38.696Z] Starting Enhanced Discord Bot...
[2026-01-07T02:41:38.696Z] ========================================
[2026-01-07T02:41:39.220Z] [BOT] ✅ Loaded V2 database: 1411 jobs
[2026-01-07T02:41:39.966Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T02:41:39.966Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T02:41:39.966Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T02:41:39.970Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T02:41:39.970Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T02:41:39.970Z] [BOT] [BOT] 🔍 Sample enriched job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T02:41:39.971Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-07T02:41:39.971Z] [BOT] ⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T02:41:39.971Z] [BOT] ⏭️  Skipping duplicate: JID_16172401 (posted within 7 days)
[2026-01-07T02:41:39.971Z] [BOT] ⏭️ Skipping already posted: ROLE_e2d947d7 at duolingo
⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
[2026-01-07T02:41:39.971Z] [BOT] ⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T02:41:39.972Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T02:41:39.973Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
[2026-01-07T02:41:39.973Z] [BOT] ⏭️  Skipping duplicate: JID_10f890da-neurology_jr91941-1 (posted within 7 days)
⏭️ Skipping already posted: Neuroimaging Engineer - Neurology at Wash U
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T02:41:39.984Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*