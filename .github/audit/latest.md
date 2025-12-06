# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T03:10:04.910Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T03:09:43.374Z] ========================================
[2025-12-06T03:09:43.376Z] Discord Bot Execution Log
[2025-12-06T03:09:43.376Z] Environment: GitHub Actions
[2025-12-06T03:09:43.376Z] Node Version: v20.19.6
[2025-12-06T03:09:43.376Z] ========================================
[2025-12-06T03:09:43.376Z] Environment Variables Check:
[2025-12-06T03:09:43.376Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T03:09:43.377Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T03:09:43.377Z] 
Multi-Channel Configuration:
[2025-12-06T03:09:43.377Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T03:09:43.377Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T03:09:43.378Z] 
Data Files Check:
[2025-12-06T03:09:43.378Z] .github/data/new_jobs.json: ✅ Exists (3 items, 51405 bytes)
[2025-12-06T03:09:43.378Z] .github/data/posted_jobs.json: ✅ Exists (66 items, 6396 bytes)
[2025-12-06T03:09:43.378Z] 
========================================
[2025-12-06T03:09:43.378Z] Starting Enhanced Discord Bot...
[2025-12-06T03:09:43.378Z] ========================================
[2025-12-06T03:09:44.767Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T03:09:44.767Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-06T03:09:44.768Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T03:09:44.920Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 321
[2025-12-06T03:09:44.921Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-06T03:09:44.921Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-06T03:09:44.921Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
[2025-12-06T03:09:44.922Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T03:09:44.922Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2025-12-06T03:09:44.923Z] [BOT] 📍 [ROUTING] "Product Line Management Data Science" @ ORG_0c79a9c2 Materials
[2025-12-06T03:09:44.923Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-06T03:09:44.927Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T03:09:45.160Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #ai-jobs
[2025-12-06T03:09:45.160Z] [BOT] ✅ Industry: Product Line Management Data Science @ ORG_0c79a9c2 Materials
[2025-12-06T03:09:46.926Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T03:09:48.427Z] [BOT] 💾 BEFORE SAVE: Database has 67 jobs
[2025-12-06T03:09:48.432Z] [BOT] 💾 Saved 67 posted jobs to database
[2025-12-06T03:09:48.432Z] [BOT] ✅ Verified: Database file contains 67 jobs
[2025-12-06T03:09:48.432Z] [BOT] 📍 [ROUTING] "Technology Development Program - Data Scientist" @ Dick's Sporting Goods
[2025-12-06T03:09:48.432Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-06T03:09:48.667Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program - Data Scientist @ Dick's Sporting Goods in #ai-jobs
[2025-12-06T03:09:48.667Z] [BOT] ✅ Industry: Technology Development Program - Data Scientist @ Dick's Sporting Goods
[2025-12-06T03:09:50.651Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program - Data Scientist @ Dick's Sporting Goods in #💻・remote-usa
[2025-12-06T03:09:50.651Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-06T03:09:52.152Z] [BOT] 💾 BEFORE SAVE: Database has 68 jobs
[2025-12-06T03:09:52.153Z] [BOT] 💾 Saved 68 posted jobs to database
✅ Verified: Database file contains 68 jobs
[2025-12-06T03:09:55.153Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-06T03:09:55.154Z] [BOT] 📍 [ROUTING] "Associate Full Stack Developer" @ ORG_8e152e21
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T03:09:55.358Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Developer @ ORG_8e152e21 in #💻・tech-jobs
  ✅ Industry: Associate Full Stack Developer @ ORG_8e152e21
[2025-12-06T03:09:57.074Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Developer @ ORG_8e152e21 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T03:09:58.574Z] [BOT] 💾 BEFORE SAVE: Database has 69 jobs
[2025-12-06T03:09:58.575Z] [BOT] 💾 Saved 69 posted jobs to database
[2025-12-06T03:09:58.575Z] [BOT] ✅ Verified: Database file contains 69 jobs
[2025-12-06T03:10:01.575Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-06T03:10:01.576Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-06T03:10:01.577Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2025-12-06T03:10:01.577Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T03:10:01.614Z] [BOT] 📂 Loaded 177 existing routing entries
[2025-12-06T03:10:01.652Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 180
   Timestamp: 2025-12-06T03:10:01.651Z
[2025-12-06T03:10:03.665Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*