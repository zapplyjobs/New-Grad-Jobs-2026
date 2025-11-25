# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T00:02:09.659Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T00:01:52.778Z] ========================================
[2025-11-25T00:01:52.780Z] Discord Bot Execution Log
[2025-11-25T00:01:52.780Z] Environment: GitHub Actions
[2025-11-25T00:01:52.780Z] Node Version: v20.19.5
[2025-11-25T00:01:52.780Z] ========================================
[2025-11-25T00:01:52.780Z] Environment Variables Check:
[2025-11-25T00:01:52.780Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T00:01:52.780Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T00:01:52.780Z] 
Multi-Channel Configuration:
[2025-11-25T00:01:52.780Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T00:01:52.780Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T00:01:52.781Z] 
Data Files Check:
[2025-11-25T00:01:52.781Z] .github/data/new_jobs.json: ✅ Exists (2 items, 17396 bytes)
[2025-11-25T00:01:52.783Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327566 bytes)
[2025-11-25T00:01:52.783Z] 
========================================
[2025-11-25T00:01:52.783Z] Starting Enhanced Discord Bot...
[2025-11-25T00:01:52.783Z] ========================================
[2025-11-25T00:01:53.631Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T00:01:53.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T00:01:53.632Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T00:01:53.670Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T00:01:53.671Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-25T00:01:53.671Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T00:01:53.673Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-25T00:01:53.673Z] [BOT] 📍 [ROUTING] "Child and Adolescent Therapist" @ ORG_6a97f77a Behavioral Health
[2025-11-25T00:01:53.673Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-25T00:01:53.677Z] [BOT ERROR] (node:2413) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T00:01:53.841Z] [BOT] ✅ Created forum post: 🏢 Child and Adolescent Therapist @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
[2025-11-25T00:01:53.841Z] [BOT] ✅ Industry: Child and Adolescent Therapist @ ORG_6a97f77a Behavioral Health
[2025-11-25T00:01:55.680Z] [BOT] ✅ Created forum post: 🏢 Child and Adolescent Therapist @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
[2025-11-25T00:01:55.681Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-25T00:01:57.183Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T00:02:00.184Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T00:02:00.184Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer/Scientist - Multi Modality" @ ORG_8bee3a8d Labs
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T00:02:00.587Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs in #💻・tech-jobs
[2025-11-25T00:02:00.588Z] [BOT] ✅ Industry: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs
[2025-11-25T00:02:02.401Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs in #🌉・san-francisco
[2025-11-25T00:02:02.401Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-25T00:02:03.904Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T00:02:06.903Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-25T00:02:06.904Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-25T00:02:06.942Z] [BOT] 📂 Loaded 7 existing routing entries
[2025-11-25T00:02:06.978Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-25T00:02:06.978Z] [BOT] Total entries: 9
   Timestamp: 2025-11-25T00:02:06.978Z
[2025-11-25T00:02:08.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2413) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*