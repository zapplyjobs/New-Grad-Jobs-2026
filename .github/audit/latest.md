# Discord Bot Execution Audit
**Timestamp:** 2025-12-13T06:43:46.706Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 10
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-13T06:43:44.035Z] ========================================
[2025-12-13T06:43:44.037Z] Discord Bot Execution Log
[2025-12-13T06:43:44.037Z] Environment: GitHub Actions
[2025-12-13T06:43:44.037Z] Node Version: v20.19.6
[2025-12-13T06:43:44.037Z] ========================================
[2025-12-13T06:43:44.037Z] Environment Variables Check:
[2025-12-13T06:43:44.037Z] DISCORD_TOKEN: ✅ Set
[2025-12-13T06:43:44.037Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.037Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-13T06:43:44.037Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-13T06:43:44.038Z] 
Multi-Channel Configuration:
[2025-12-13T06:43:44.038Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-13T06:43:44.038Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-13T06:43:44.038Z] 
Data Files Check:
[2025-12-13T06:43:44.039Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141833 bytes)
[2025-12-13T06:43:44.040Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68536 bytes)
[2025-12-13T06:43:44.040Z] 
========================================
[2025-12-13T06:43:44.040Z] Starting Enhanced Discord Bot...
[2025-12-13T06:43:44.040Z] ========================================
[2025-12-13T06:43:44.616Z] [BOT] ✅ Loaded V2 database: 106 jobs
[2025-12-13T06:43:45.352Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-13T06:43:45.353Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-13T06:43:45.353Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-13T06:43:45.354Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-13T06:43:45.459Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 115
[2025-12-13T06:43:45.460Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-13T06:43:45.460Z] [BOT] ⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-13T06:43:45.460Z] [BOT] ⏭️  Skipping duplicate: JID_d864ec9b-_r2519402 (posted within 7 days)
⏭️ Skipping already posted: Data Science Engineer - New College Grad-Master's/PhD at Applied Materials
[2025-12-13T06:43:45.460Z] [BOT] ⏭️  Skipping duplicate: JID_2f317ae4-2026_jr2009934 (posted within 7 days)
⏭️ Skipping already posted: GPU and SoC Modelling Architect – New College Grad at NVIDIA
⏭️  Skipping duplicate: JID_19f24911 (posted within 7 days)
[2025-12-13T06:43:45.460Z] [BOT] ⏭️ Skipping already posted: ROLE_62f44bde at Matic
⏭️  Skipping duplicate: JID_3826ac21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ec91c7c8 at Masimo
[2025-12-13T06:43:45.461Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_098be064-engineer_r160351-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d790a222 at Adobe
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-13T06:43:45.475Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*