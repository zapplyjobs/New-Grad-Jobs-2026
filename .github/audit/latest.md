# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T17:47:22.453Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-30T17:47:05.521Z] ========================================
[2025-11-30T17:47:05.523Z] Discord Bot Execution Log
[2025-11-30T17:47:05.523Z] Environment: GitHub Actions
[2025-11-30T17:47:05.523Z] Node Version: v20.19.5
[2025-11-30T17:47:05.523Z] ========================================
[2025-11-30T17:47:05.523Z] Environment Variables Check:
[2025-11-30T17:47:05.523Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T17:47:05.523Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.523Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T17:47:05.523Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T17:47:05.523Z] 
Multi-Channel Configuration:
[2025-11-30T17:47:05.523Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T17:47:05.524Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T17:47:05.524Z] 
Data Files Check:
[2025-11-30T17:47:05.525Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11788 bytes)
[2025-11-30T17:47:05.527Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330744 bytes)
[2025-11-30T17:47:05.527Z] 
========================================
[2025-11-30T17:47:05.527Z] Starting Enhanced Discord Bot...
[2025-11-30T17:47:05.527Z] ========================================
[2025-11-30T17:47:06.349Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T17:47:06.349Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-30T17:47:06.350Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T17:47:06.424Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-11-30T17:47:06.425Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-30T17:47:06.425Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-11-30T17:47:06.425Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-30T17:47:06.428Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-30T17:47:06.428Z] [BOT] 📍 [ROUTING] "Quality Assurance Software Engineer 1" @ ORG_3cbc87c7 Anomaly
[2025-11-30T17:47:06.428Z] [BOT] Category: TECH (matched: "software")
[2025-11-30T17:47:06.428Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-30T17:47:06.433Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-30T17:47:06.728Z] [BOT] ✅ Created forum post: 🏢 Quality Assurance Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
[2025-11-30T17:47:06.728Z] [BOT] ✅ Industry: Quality Assurance Software Engineer 1 @ ORG_3cbc87c7 Anomaly
[2025-11-30T17:47:08.498Z] [BOT] ✅ Created forum post: 🏢 Quality Assurance Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #🌉・san-francisco
[2025-11-30T17:47:08.499Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-30T17:47:09.998Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T17:47:09.999Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T17:47:10.005Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-30T17:47:10.005Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T17:47:13.006Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-30T17:47:13.007Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-30T17:47:13.271Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #💰・finance-jobs
[2025-11-30T17:47:13.271Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2025-11-30T17:47:15.177Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-30T17:47:16.677Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T17:47:16.678Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T17:47:16.684Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-30T17:47:16.684Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T17:47:19.685Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-30T17:47:19.722Z] [BOT] 📂 Loaded 541 existing routing entries
[2025-11-30T17:47:19.761Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-30T17:47:19.761Z] [BOT] Total entries: 543
   Timestamp: 2025-11-30T17:47:19.759Z
[2025-11-30T17:47:21.772Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*