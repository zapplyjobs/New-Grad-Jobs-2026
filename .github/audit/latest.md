# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T00:02:04.284Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-24T00:01:54.327Z] ========================================
[2025-11-24T00:01:54.329Z] Discord Bot Execution Log
[2025-11-24T00:01:54.329Z] Environment: GitHub Actions
[2025-11-24T00:01:54.329Z] Node Version: v20.19.5
[2025-11-24T00:01:54.329Z] ========================================
[2025-11-24T00:01:54.329Z] Environment Variables Check:
[2025-11-24T00:01:54.329Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T00:01:54.329Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T00:01:54.329Z] 
Multi-Channel Configuration:
[2025-11-24T00:01:54.329Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.329Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T00:01:54.330Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T00:01:54.330Z] 
Data Files Check:
[2025-11-24T00:01:54.330Z] .github/data/new_jobs.json: ✅ Exists (3 items, 6918 bytes)
[2025-11-24T00:01:54.331Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327450 bytes)
[2025-11-24T00:01:54.331Z] 
========================================
[2025-11-24T00:01:54.331Z] Starting Enhanced Discord Bot...
[2025-11-24T00:01:54.332Z] ========================================
[2025-11-24T00:01:55.222Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T00:01:55.223Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-24T00:01:55.223Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T00:01:55.261Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 3
[2025-11-24T00:01:55.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-24T00:01:55.262Z] [BOT] 📬 Found 2 new jobs (1 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-24T00:01:55.262Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-24T00:01:55.263Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ L3Harris Technologies
[2025-11-24T00:01:55.263Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-24T00:01:55.267Z] [BOT ERROR] (node:2285) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-24T00:01:55.435Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ L3Harris Technologies in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ L3Harris Technologies
[2025-11-24T00:01:56.937Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T00:01:56.937Z] [BOT] 📍 [ROUTING] "Assoc – Software Engineer - Waco - TX" @ L3Harris Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-24T00:01:57.137Z] [BOT] ✅ Created forum post: 🏢 Assoc – Software Engineer - Waco - TX @ L3Harris Technologies in #💻・tech-jobs
[2025-11-24T00:01:57.137Z] [BOT] ✅ Industry: Assoc – Software Engineer - Waco - TX @ L3Harris Technologies
[2025-11-24T00:01:58.640Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T00:02:01.641Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-24T00:02:01.680Z] [BOT] ⚠️ Failed to load existing logs: Unsupported state or unable to authenticate data
[2025-11-24T00:02:01.716Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2
[2025-11-24T00:02:01.716Z] [BOT] Timestamp: 2025-11-24T00:02:01.715Z
[2025-11-24T00:02:03.724Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2285) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*