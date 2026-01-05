# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T17:57:54.235Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-05T17:57:49.771Z] ========================================
[2026-01-05T17:57:49.772Z] Discord Bot Execution Log
[2026-01-05T17:57:49.773Z] Environment: GitHub Actions
[2026-01-05T17:57:49.773Z] Node Version: v20.19.6
[2026-01-05T17:57:49.773Z] ========================================
[2026-01-05T17:57:49.773Z] Environment Variables Check:
[2026-01-05T17:57:49.773Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T17:57:49.773Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.773Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T17:57:49.773Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T17:57:49.773Z] 
Multi-Channel Configuration:
[2026-01-05T17:57:49.773Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T17:57:49.774Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T17:57:49.774Z] 
Data Files Check:
[2026-01-05T17:57:49.775Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8052 bytes)
[2026-01-05T17:57:49.780Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 662530 bytes)
[2026-01-05T17:57:49.780Z] 
========================================
[2026-01-05T17:57:49.780Z] Starting Enhanced Discord Bot...
[2026-01-05T17:57:49.780Z] ========================================
[2026-01-05T17:57:50.307Z] [BOT] ✅ Loaded V2 database: 1301 jobs
[2026-01-05T17:57:50.867Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T17:57:50.867Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T17:57:50.868Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T17:57:50.871Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:57:50.871Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:57:50.873Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T17:57:50.873Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T17:57:50.873Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
[2026-01-05T17:57:50.874Z] [BOT] ⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-05T17:57:50.874Z] [BOT] ⏭️ Skipping already posted: Applied Scientist 1 - Amazon at Amazon
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-05T17:57:50.874Z] [BOT] ⏭️  Skipping duplicate: JID_78e3784c-technology_r026155 (posted within 7 days)
⏭️ Skipping already posted: Rotational Engineer - Central Technology at Activision-Blizzard
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
⏭️ Skipping already posted: University Graduate - Machine Learning Engineer at Adobe
⏭️  Skipping duplicate: JID_7ad1bb4d-agilent_student_careers-JID_34dfb693-campus_4034599 (posted within 7 days)
⏭️ Skipping already posted: R&D Graduate Software Developer-Harwell Science Campus at Agilent Technologies
📬 Found 12 new jobs (8 already posted)...
[2026-01-05T17:57:50.875Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:57:50.875Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:57:50.877Z] [BOT] ✅ Saved pending queue: 38 total (30 pending, 8 enriched, 0 posted)
🗑️ Removed 12 blacklisted jobs from pending queue
[2026-01-05T17:57:50.877Z] [BOT] 📋 After blacklist filter: 0 jobs (12 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-01-05T17:57:50.877Z] [BOT] ℹ️ No routing entries to save
[2026-01-05T17:57:50.878Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 20
[2026-01-05T17:57:50.878Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 20
[2026-01-05T17:57:50.878Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-05T17:57:50.878Z] [BOT] [STATS] Channel stats saved
[2026-01-05T17:57:50.879Z] [BOT ERROR] (node:3298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T17:57:52.892Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*