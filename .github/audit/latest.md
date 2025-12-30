# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T07:42:25.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-30T07:42:23.699Z] ========================================
[2025-12-30T07:42:23.701Z] Discord Bot Execution Log
[2025-12-30T07:42:23.701Z] Environment: GitHub Actions
[2025-12-30T07:42:23.701Z] Node Version: v20.19.6
[2025-12-30T07:42:23.701Z] ========================================
[2025-12-30T07:42:23.701Z] Environment Variables Check:
[2025-12-30T07:42:23.701Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T07:42:23.701Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.701Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T07:42:23.702Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T07:42:23.702Z] 
Multi-Channel Configuration:
[2025-12-30T07:42:23.702Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T07:42:23.702Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T07:42:23.702Z] 
Data Files Check:
[2025-12-30T07:42:23.703Z] .github/data/new_jobs.json: ✅ Exists (1 items, 700 bytes)
[2025-12-30T07:42:23.703Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42735 bytes)
[2025-12-30T07:42:23.703Z] 
========================================
[2025-12-30T07:42:23.703Z] Starting Enhanced Discord Bot...
[2025-12-30T07:42:23.703Z] ========================================
[2025-12-30T07:42:24.210Z] [BOT] ✅ Loaded V2 database: 70 jobs
[2025-12-30T07:42:24.861Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2025-12-30T07:42:24.861Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T07:42:24.861Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T07:42:24.862Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T07:42:24.906Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-30T07:42:24.956Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 52
[2025-12-30T07:42:24.956Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f5d2e34c (posted within 7 days)
[2025-12-30T07:42:24.956Z] [BOT] ⏭️ Skipping already posted: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start at TikTok
[2025-12-30T07:42:24.956Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-30T07:42:24.967Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*