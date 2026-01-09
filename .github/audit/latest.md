# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T06:49:40.329Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T06:49:37.960Z] ========================================
[2026-01-09T06:49:37.962Z] Discord Bot Execution Log
[2026-01-09T06:49:37.962Z] Environment: GitHub Actions
[2026-01-09T06:49:37.962Z] Node Version: v20.19.6
[2026-01-09T06:49:37.962Z] ========================================
[2026-01-09T06:49:37.962Z] Environment Variables Check:
[2026-01-09T06:49:37.962Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T06:49:37.962Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.962Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T06:49:37.962Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T06:49:37.962Z] 
Multi-Channel Configuration:
[2026-01-09T06:49:37.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T06:49:37.963Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T06:49:37.963Z] 
Data Files Check:
[2026-01-09T06:49:37.964Z] .github/data/new_jobs.json: ✅ Exists (10 items, 117263 bytes)
[2026-01-09T06:49:37.970Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 772256 bytes)
[2026-01-09T06:49:37.970Z] 
========================================
[2026-01-09T06:49:37.970Z] Starting Enhanced Discord Bot...
[2026-01-09T06:49:37.970Z] ========================================
[2026-01-09T06:49:38.421Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T06:49:39.283Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T06:49:39.283Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T06:49:39.283Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T06:49:39.295Z] [BOT] ✅ Loaded pending queue: 211 total (191 pending, 20 enriched, 0 posted)
[2026-01-09T06:49:39.295Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T06:49:39.296Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-09T06:49:39.296Z] [BOT] ⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T06:49:39.296Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T06:49:39.297Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T06:49:39.297Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T06:49:39.297Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T06:49:39.297Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T06:49:39.297Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
[2026-01-09T06:49:39.297Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T06:49:39.297Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T06:49:39.297Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T06:49:39.298Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T06:49:39.299Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
[2026-01-09T06:49:39.299Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
[2026-01-09T06:49:39.299Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T06:49:39.307Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*