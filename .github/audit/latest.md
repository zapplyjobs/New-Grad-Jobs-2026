# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T01:56:54.946Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-09T01:56:52.096Z] ========================================
[2026-01-09T01:56:52.098Z] Discord Bot Execution Log
[2026-01-09T01:56:52.098Z] Environment: GitHub Actions
[2026-01-09T01:56:52.098Z] Node Version: v20.19.6
[2026-01-09T01:56:52.098Z] ========================================
[2026-01-09T01:56:52.098Z] Environment Variables Check:
[2026-01-09T01:56:52.098Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T01:56:52.099Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T01:56:52.099Z] 
Multi-Channel Configuration:
[2026-01-09T01:56:52.099Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.099Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.100Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.100Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T01:56:52.100Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T01:56:52.100Z] 
Data Files Check:
[2026-01-09T01:56:52.101Z] .github/data/new_jobs.json: ✅ Exists (10 items, 81108 bytes)
[2026-01-09T01:56:52.106Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765709 bytes)
[2026-01-09T01:56:52.106Z] 
========================================
[2026-01-09T01:56:52.107Z] Starting Enhanced Discord Bot...
[2026-01-09T01:56:52.107Z] ========================================
[2026-01-09T01:56:52.629Z] [BOT] ✅ Loaded V2 database: 1490 jobs
[2026-01-09T01:56:53.599Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T01:56:53.600Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T01:56:53.600Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T01:56:53.607Z] [BOT] ✅ Loaded pending queue: 201 total (181 pending, 20 enriched, 0 posted)
[2026-01-09T01:56:53.607Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T01:56:53.608Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-09T01:56:53.608Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T01:56:53.608Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T01:56:53.609Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
[2026-01-09T01:56:53.609Z] [BOT] ⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T01:56:53.609Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T01:56:53.609Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
[2026-01-09T01:56:53.609Z] [BOT] ⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
[2026-01-09T01:56:53.610Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Aws - Node at The Travelers Companies
⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - .Net - Node.js','React at The Travelers Companies
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Direct Issuance at StubHub
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
[2026-01-09T01:56:53.610Z] [BOT] ⏭️ Skipping already posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas at Caesars Entertainment
⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at MCA Connect
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Jerry
[2026-01-09T01:56:53.610Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e58e6cb8-onsite_01815653 (posted within 7 days)
⏭️ Skipping already posted: 2026 Fulltime - Data Management Analyst I at RTX
[2026-01-09T01:56:53.611Z] [BOT] ⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
⏭️ Skipping already posted: Nuclear Analysis Technician - Engineering Techs - Physics Techs at Westinghouse Electric Company
⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-09T01:56:53.611Z] [BOT] ⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-09T01:56:53.611Z] [BOT] ⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-09T01:56:53.622Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*