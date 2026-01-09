# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T09:26:50.966Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T09:26:49.097Z] ========================================
[2026-01-09T09:26:49.099Z] Discord Bot Execution Log
[2026-01-09T09:26:49.099Z] Environment: GitHub Actions
[2026-01-09T09:26:49.099Z] Node Version: v20.19.6
[2026-01-09T09:26:49.100Z] ========================================
[2026-01-09T09:26:49.100Z] Environment Variables Check:
[2026-01-09T09:26:49.100Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T09:26:49.100Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.100Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T09:26:49.100Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T09:26:49.100Z] 
Multi-Channel Configuration:
[2026-01-09T09:26:49.100Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.100Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.100Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T09:26:49.101Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T09:26:49.101Z] 
Data Files Check:
[2026-01-09T09:26:49.102Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123603 bytes)
[2026-01-09T09:26:49.108Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 773796 bytes)
[2026-01-09T09:26:49.108Z] 
========================================
[2026-01-09T09:26:49.108Z] Starting Enhanced Discord Bot...
[2026-01-09T09:26:49.108Z] ========================================
[2026-01-09T09:26:49.634Z] [BOT] ✅ Loaded V2 database: 1503 jobs
[2026-01-09T09:26:50.323Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T09:26:50.323Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T09:26:50.323Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T09:26:50.334Z] [BOT] ✅ Loaded pending queue: 219 total (199 pending, 20 enriched, 0 posted)
[2026-01-09T09:26:50.335Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer Entry Level at USAA
[2026-01-09T09:26:50.335Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
[2026-01-09T09:26:50.336Z] [BOT] ⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T09:26:50.336Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T09:26:50.336Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T09:26:50.336Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
[2026-01-09T09:26:50.337Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T09:26:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T09:26:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T09:26:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T09:26:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T09:26:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T09:26:50.352Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*