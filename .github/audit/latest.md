# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T17:53:31.870Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-05T17:53:27.247Z] ========================================
[2026-01-05T17:53:27.249Z] Discord Bot Execution Log
[2026-01-05T17:53:27.249Z] Environment: GitHub Actions
[2026-01-05T17:53:27.249Z] Node Version: v20.19.6
[2026-01-05T17:53:27.249Z] ========================================
[2026-01-05T17:53:27.249Z] Environment Variables Check:
[2026-01-05T17:53:27.249Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T17:53:27.249Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.249Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T17:53:27.250Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T17:53:27.250Z] 
Multi-Channel Configuration:
[2026-01-05T17:53:27.250Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.250Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T17:53:27.251Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T17:53:27.251Z] 
Data Files Check:
[2026-01-05T17:53:27.251Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8039 bytes)
[2026-01-05T17:53:27.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 662530 bytes)
[2026-01-05T17:53:27.256Z] 
========================================
[2026-01-05T17:53:27.256Z] Starting Enhanced Discord Bot...
[2026-01-05T17:53:27.257Z] ========================================
[2026-01-05T17:53:27.798Z] [BOT] ✅ Loaded V2 database: 1301 jobs
[2026-01-05T17:53:28.758Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T17:53:28.759Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T17:53:28.759Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T17:53:28.760Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:53:28.760Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T17:53:28.760Z] [BOT] [BOT] 🔍 Sample enriched job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-05T17:53:28.762Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T17:53:28.763Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T17:53:28.763Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T17:53:28.763Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-05T17:53:28.763Z] [BOT] ⏭️ Skipping already posted: Applied Scientist 1 - Amazon at Amazon
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_78e3784c-technology_r026155 (posted within 7 days)
⏭️ Skipping already posted: Rotational Engineer - Central Technology at Activision-Blizzard
[2026-01-05T17:53:28.763Z] [BOT] 📬 Found 14 new jobs (6 already posted)...
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.764Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:53:28.765Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T17:53:28.766Z] [BOT] ✅ Saved pending queue: 36 total (30 pending, 6 enriched, 0 posted)
[2026-01-05T17:53:28.766Z] [BOT] 🗑️ Removed 14 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (14 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 14 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-01-05T17:53:28.767Z] [BOT] ℹ️ No routing entries to save
[2026-01-05T17:53:28.767Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T17:53:28.767Z] [BOT] Total attempts: 20
   Successful: 0
   Failed: 0
   Skipped: 20
[2026-01-05T17:53:28.767Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T17:53:28.768Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-05T17:53:28.768Z] [BOT] [STATS] Channel stats saved
[2026-01-05T17:53:28.768Z] [BOT ERROR] (node:3148) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T17:53:30.780Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3148) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*