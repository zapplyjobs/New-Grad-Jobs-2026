# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T22:23:35.881Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-27T22:23:31.599Z] ========================================
[2025-11-27T22:23:31.601Z] Discord Bot Execution Log
[2025-11-27T22:23:31.601Z] Environment: GitHub Actions
[2025-11-27T22:23:31.601Z] Node Version: v20.19.5
[2025-11-27T22:23:31.601Z] ========================================
[2025-11-27T22:23:31.601Z] Environment Variables Check:
[2025-11-27T22:23:31.601Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T22:23:31.601Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T22:23:31.602Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T22:23:31.602Z] 
Multi-Channel Configuration:
[2025-11-27T22:23:31.602Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.602Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T22:23:31.603Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T22:23:31.603Z] 
Data Files Check:
[2025-11-27T22:23:31.603Z] .github/data/new_jobs.json: ✅ Exists (12 items, 36976 bytes)
[2025-11-27T22:23:31.605Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329465 bytes)
[2025-11-27T22:23:31.605Z] 
========================================
[2025-11-27T22:23:31.605Z] Starting Enhanced Discord Bot...
[2025-11-27T22:23:31.605Z] ========================================
[2025-11-27T22:23:32.577Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T22:23:32.577Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 12 jobs to encrypted JSON...
[2025-11-27T22:23:32.578Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T22:23:32.657Z] [BOT] ✅ Export complete: Added 0, Skipped 12, Total 12
[2025-11-27T22:23:32.658Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T22:23:32.658Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T22:23:32.658Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 8 new jobs (4 already posted)...
[2025-11-27T22:23:32.659Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-27T22:23:32.659Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 0 jobs (8 blacklisted)
📋 After title+company+location dedup: 0 unique jobs to post
⏸️ Limiting to 50 jobs this run, 8 deferred for next run
[2025-11-27T22:23:32.659Z] [BOT] 📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T22:23:32.659Z] [BOT] ℹ️ No routing entries to save
[2025-11-27T22:23:32.660Z] [BOT ERROR] (node:2215) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T22:23:34.671Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2215) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*