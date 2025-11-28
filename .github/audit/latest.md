# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T03:35:46.066Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T03:35:35.144Z] ========================================
[2025-11-28T03:35:35.146Z] Discord Bot Execution Log
[2025-11-28T03:35:35.146Z] Environment: GitHub Actions
[2025-11-28T03:35:35.146Z] Node Version: v20.19.5
[2025-11-28T03:35:35.146Z] ========================================
[2025-11-28T03:35:35.146Z] Environment Variables Check:
[2025-11-28T03:35:35.146Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T03:35:35.146Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T03:35:35.147Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T03:35:35.147Z] 
Multi-Channel Configuration:
[2025-11-28T03:35:35.147Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.147Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.148Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T03:35:35.148Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T03:35:35.148Z] 
Data Files Check:
[2025-11-28T03:35:35.148Z] .github/data/new_jobs.json: ✅ Exists (13 items, 35126 bytes)
[2025-11-28T03:35:35.150Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329701 bytes)
[2025-11-28T03:35:35.150Z] 
========================================
[2025-11-28T03:35:35.150Z] Starting Enhanced Discord Bot...
[2025-11-28T03:35:35.150Z] ========================================
[2025-11-28T03:35:36.212Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T03:35:36.213Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 13 jobs to encrypted JSON...
[2025-11-28T03:35:36.213Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T03:35:36.293Z] [BOT] ✅ Export complete: Added 0, Skipped 13, Total 13
[2025-11-28T03:35:36.294Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T03:35:36.294Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T03:35:36.294Z] [BOT] 📬 Found 10 new jobs (3 already posted)...
[2025-11-28T03:35:36.294Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T03:35:36.295Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 1 jobs (9 blacklisted)
[2025-11-28T03:35:36.295Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
[2025-11-28T03:35:36.295Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T03:35:36.295Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-28T03:35:36.296Z] [BOT] 📍 [ROUTING] "AI Engineer Trainee" @ ORG_6192ac83
[2025-11-28T03:35:36.296Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T03:35:36.300Z] [BOT ERROR] (node:2218) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T03:35:36.504Z] [BOT] ✅ Created forum post: 🏢 AI Engineer Trainee @ ORG_6192ac83 in #💻・tech-jobs
[2025-11-28T03:35:36.505Z] [BOT] ✅ Industry: AI Engineer Trainee @ ORG_6192ac83
[2025-11-28T03:35:38.231Z] [BOT] ✅ Created forum post: 🏢 AI Engineer Trainee @ ORG_6192ac83 in #💻・remote-usa
[2025-11-28T03:35:38.232Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-28T03:35:39.732Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T03:35:39.733Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T03:35:39.737Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T03:35:39.737Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T03:35:42.738Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-28T03:35:42.738Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-28T03:35:42.776Z] [BOT] 📂 Loaded 521 existing routing entries
[2025-11-28T03:35:42.814Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-11-28T03:35:42.814Z] [BOT] Total entries: 522
   Timestamp: 2025-11-28T03:35:42.812Z
[2025-11-28T03:35:44.823Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2218) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*