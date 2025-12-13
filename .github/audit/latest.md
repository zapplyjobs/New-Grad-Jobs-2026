# Discord Bot Execution Audit
**Timestamp:** 2025-12-13T11:04:16.348Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 10
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-13T11:04:14.239Z] ========================================
[2025-12-13T11:04:14.241Z] Discord Bot Execution Log
[2025-12-13T11:04:14.241Z] Environment: GitHub Actions
[2025-12-13T11:04:14.241Z] Node Version: v20.19.6
[2025-12-13T11:04:14.241Z] ========================================
[2025-12-13T11:04:14.241Z] Environment Variables Check:
[2025-12-13T11:04:14.241Z] DISCORD_TOKEN: ✅ Set
[2025-12-13T11:04:14.241Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.241Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-13T11:04:14.241Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-13T11:04:14.242Z] 
Multi-Channel Configuration:
[2025-12-13T11:04:14.242Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-13T11:04:14.242Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-13T11:04:14.242Z] 
Data Files Check:
[2025-12-13T11:04:14.244Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141833 bytes)
[2025-12-13T11:04:14.244Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68536 bytes)
[2025-12-13T11:04:14.244Z] 
========================================
[2025-12-13T11:04:14.244Z] Starting Enhanced Discord Bot...
[2025-12-13T11:04:14.244Z] ========================================
[2025-12-13T11:04:14.804Z] [BOT] ✅ Loaded V2 database: 106 jobs
[2025-12-13T11:04:15.477Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-13T11:04:15.478Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-13T11:04:15.478Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-13T11:04:15.479Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-13T11:04:15.581Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 112
[2025-12-13T11:04:15.581Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-13T11:04:15.581Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-13T11:04:15.581Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
[2025-12-13T11:04:15.581Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-13T11:04:15.582Z] [BOT] ⏭️  Skipping duplicate: JID_d864ec9b-_r2519402 (posted within 7 days)
⏭️ Skipping already posted: Data Science Engineer - New College Grad-Master's/PhD at Applied Materials
⏭️  Skipping duplicate: JID_2f317ae4-2026_jr2009934 (posted within 7 days)
[2025-12-13T11:04:15.582Z] [BOT] ⏭️ Skipping already posted: GPU and SoC Modelling Architect – New College Grad at NVIDIA
⏭️  Skipping duplicate: JID_19f24911 (posted within 7 days)
⏭️ Skipping already posted: ROLE_62f44bde at Matic
⏭️  Skipping duplicate: JID_3826ac21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ec91c7c8 at Masimo
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_098be064-engineer_r160351-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d790a222 at Adobe
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-13T11:04:15.595Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*