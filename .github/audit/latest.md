# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T10:38:29.964Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T10:38:27.505Z] ========================================
[2025-11-28T10:38:27.507Z] Discord Bot Execution Log
[2025-11-28T10:38:27.507Z] Environment: GitHub Actions
[2025-11-28T10:38:27.507Z] Node Version: v20.19.5
[2025-11-28T10:38:27.507Z] ========================================
[2025-11-28T10:38:27.507Z] Environment Variables Check:
[2025-11-28T10:38:27.507Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T10:38:27.507Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T10:38:27.508Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T10:38:27.508Z] 
Multi-Channel Configuration:
[2025-11-28T10:38:27.508Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.508Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T10:38:27.509Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T10:38:27.509Z] 
Data Files Check:
[2025-11-28T10:38:27.509Z] .github/data/new_jobs.json: ✅ Exists (3 items, 24284 bytes)
[2025-11-28T10:38:27.511Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T10:38:27.511Z] 
========================================
[2025-11-28T10:38:27.511Z] Starting Enhanced Discord Bot...
[2025-11-28T10:38:27.511Z] ========================================
[2025-11-28T10:38:28.767Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T10:38:28.767Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-28T10:38:28.768Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T10:38:28.839Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-28T10:38:28.840Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T10:38:28.840Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T10:38:28.840Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-28T10:38:28.848Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*