# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T05:49:27.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T05:49:23.297Z] ========================================
[2025-11-28T05:49:23.299Z] Discord Bot Execution Log
[2025-11-28T05:49:23.299Z] Environment: GitHub Actions
[2025-11-28T05:49:23.299Z] Node Version: v20.19.5
[2025-11-28T05:49:23.299Z] ========================================
[2025-11-28T05:49:23.299Z] Environment Variables Check:
[2025-11-28T05:49:23.300Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T05:49:23.300Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T05:49:23.300Z] 
Multi-Channel Configuration:
[2025-11-28T05:49:23.300Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.300Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.301Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.301Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.301Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.301Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T05:49:23.301Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T05:49:23.301Z] 
Data Files Check:
[2025-11-28T05:49:23.301Z] .github/data/new_jobs.json: ✅ Exists (12 items, 30530 bytes)
[2025-11-28T05:49:23.303Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T05:49:23.304Z] 
========================================
[2025-11-28T05:49:23.304Z] Starting Enhanced Discord Bot...
[2025-11-28T05:49:23.304Z] ========================================
[2025-11-28T05:49:24.421Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T05:49:24.422Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 12 jobs to encrypted JSON...
[2025-11-28T05:49:24.422Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T05:49:24.502Z] [BOT] ✅ Export complete: Added 0, Skipped 12, Total 12
[2025-11-28T05:49:24.503Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T05:49:24.503Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T05:49:24.503Z] [BOT] 📬 Found 9 new jobs (3 already posted)...
[2025-11-28T05:49:24.504Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T05:49:24.504Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T05:49:24.504Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 0 jobs (9 blacklisted)
📋 After title+company+location dedup: 0 unique jobs to post
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
[2025-11-28T05:49:24.504Z] [BOT] 📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2025-11-28T05:49:24.505Z] [BOT ERROR] (node:2273) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T05:49:26.514Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2273) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*