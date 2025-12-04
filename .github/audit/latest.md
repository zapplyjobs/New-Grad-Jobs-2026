# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T05:05:10.515Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 35
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T05:04:53.276Z] ========================================
[2025-12-04T05:04:53.278Z] Discord Bot Execution Log
[2025-12-04T05:04:53.278Z] Environment: GitHub Actions
[2025-12-04T05:04:53.278Z] Node Version: v20.19.6
[2025-12-04T05:04:53.278Z] ========================================
[2025-12-04T05:04:53.278Z] Environment Variables Check:
[2025-12-04T05:04:53.278Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T05:04:53.278Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.278Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T05:04:53.278Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T05:04:53.278Z] 
Multi-Channel Configuration:
[2025-12-04T05:04:53.279Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T05:04:53.279Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T05:04:53.279Z] 
Data Files Check:
[2025-12-04T05:04:53.281Z] .github/data/new_jobs.json: ✅ Exists (37 items, 229481 bytes)
[2025-12-04T05:04:53.282Z] .github/data/posted_jobs.json: ✅ Exists (3561 items, 239693 bytes)
[2025-12-04T05:04:53.282Z] 
========================================
[2025-12-04T05:04:53.282Z] Starting Enhanced Discord Bot...
[2025-12-04T05:04:53.282Z] ========================================
[2025-12-04T05:04:54.258Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T05:04:54.258Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T05:04:54.259Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T05:04:54.259Z] [BOT] 📦 Exporting 37 jobs to encrypted JSON...
[2025-12-04T05:04:54.348Z] [BOT] ✅ Export complete: Added 0, Skipped 37, Total 37
[2025-12-04T05:04:54.349Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.349Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.349Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.350Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.350Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.350Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.350Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.350Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:04:54.351Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.352Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:04:54.352Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:04:54.352Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:04:54.353Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 2 new jobs (35 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-04T05:04:54.353Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-04T05:04:54.353Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T05:04:54.355Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-04T05:04:54.355Z] [BOT] 📍 [ROUTING] "Associate Cloud Data Engineer" @ ORG_6bda74c9 Health
[2025-12-04T05:04:54.355Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T05:04:54.360Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T05:04:54.584Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2025-12-04T05:04:54.584Z] [BOT] ✅ Industry: Associate Cloud Data Engineer @ ORG_6bda74c9 Health
[2025-12-04T05:04:56.221Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-04T05:04:57.722Z] [BOT] 💾 BEFORE SAVE: Database has 3562 jobs
[2025-12-04T05:04:57.857Z] [BOT] 💾 Saved 3562 posted jobs to database
✅ Verified: Database file contains 3562 jobs
[2025-12-04T05:05:00.859Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-04T05:05:00.859Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-04T05:05:01.238Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #💲・sales-jobs
[2025-12-04T05:05:01.238Z] [BOT] ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2025-12-04T05:05:03.243Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
[2025-12-04T05:05:03.244Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-04T05:05:04.744Z] [BOT] 💾 BEFORE SAVE: Database has 3563 jobs
[2025-12-04T05:05:04.748Z] [BOT] 💾 Saved 3563 posted jobs to database
[2025-12-04T05:05:04.748Z] [BOT] ✅ Verified: Database file contains 3563 jobs
[2025-12-04T05:05:07.749Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-04T05:05:07.752Z] [BOT] ✅ Loaded pending queue: 37 total (0 pending, 37 enriched, 0 posted)
[2025-12-04T05:05:07.755Z] [BOT] ✅ Saved pending queue: 37 total (0 pending, 35 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T05:05:07.793Z] [BOT] 📂 Loaded 61 existing routing entries
[2025-12-04T05:05:07.831Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-04T05:05:07.832Z] [BOT] Total entries: 63
   Timestamp: 2025-12-04T05:05:07.831Z
[2025-12-04T05:05:09.844Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*