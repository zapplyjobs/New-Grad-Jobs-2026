# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T05:43:13.510Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T05:43:10.952Z] ========================================
[2026-01-09T05:43:10.954Z] Discord Bot Execution Log
[2026-01-09T05:43:10.954Z] Environment: GitHub Actions
[2026-01-09T05:43:10.954Z] Node Version: v20.19.6
[2026-01-09T05:43:10.954Z] ========================================
[2026-01-09T05:43:10.954Z] Environment Variables Check:
[2026-01-09T05:43:10.954Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T05:43:10.955Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T05:43:10.955Z] 
Multi-Channel Configuration:
[2026-01-09T05:43:10.955Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.955Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.956Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T05:43:10.956Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T05:43:10.956Z] 
Data Files Check:
[2026-01-09T05:43:10.957Z] .github/data/new_jobs.json: ✅ Exists (10 items, 97817 bytes)
[2026-01-09T05:43:10.963Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 772394 bytes)
[2026-01-09T05:43:10.963Z] 
========================================
[2026-01-09T05:43:10.963Z] Starting Enhanced Discord Bot...
[2026-01-09T05:43:10.963Z] ========================================
[2026-01-09T05:43:11.506Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T05:43:12.232Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T05:43:12.232Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T05:43:12.232Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T05:43:12.240Z] [BOT] ✅ Loaded pending queue: 211 total (191 pending, 20 enriched, 0 posted)
[2026-01-09T05:43:12.240Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Finance & Strategy, GTM at anthropic
[2026-01-09T05:43:12.241Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T05:43:12.241Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T05:43:12.241Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T05:43:12.242Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
[2026-01-09T05:43:12.242Z] [BOT] ⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T05:43:12.242Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-09T05:43:12.242Z] [BOT] ⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
[2026-01-09T05:43:12.243Z] [BOT] ⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
[2026-01-09T05:43:12.243Z] [BOT] ⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
[2026-01-09T05:43:12.243Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
[2026-01-09T05:43:12.244Z] [BOT] ⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T05:43:12.257Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*