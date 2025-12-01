# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T23:36:12.805Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T23:35:48.297Z] ========================================
[2025-12-01T23:35:48.299Z] Discord Bot Execution Log
[2025-12-01T23:35:48.299Z] Environment: GitHub Actions
[2025-12-01T23:35:48.299Z] Node Version: v20.19.5
[2025-12-01T23:35:48.299Z] ========================================
[2025-12-01T23:35:48.299Z] Environment Variables Check:
[2025-12-01T23:35:48.299Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T23:35:48.299Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T23:35:48.300Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T23:35:48.300Z] 
Multi-Channel Configuration:
[2025-12-01T23:35:48.300Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.300Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T23:35:48.301Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T23:35:48.301Z] 
Data Files Check:
[2025-12-01T23:35:48.301Z] .github/data/new_jobs.json: ✅ Exists (5 items, 105586 bytes)
[2025-12-01T23:35:48.303Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332082 bytes)
[2025-12-01T23:35:48.304Z] 
========================================
[2025-12-01T23:35:48.304Z] Starting Enhanced Discord Bot...
[2025-12-01T23:35:48.304Z] ========================================
[2025-12-01T23:35:49.387Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T23:35:49.388Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-01T23:35:49.388Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T23:35:49.389Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2025-12-01T23:35:49.467Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-12-01T23:35:49.468Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-01T23:35:49.468Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-01T23:35:49.468Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
[2025-12-01T23:35:49.468Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T23:35:49.469Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-01T23:35:49.470Z] [BOT] 📍 [ROUTING] "Software Engineer - Platform Test - Systems Test Engineering" @ ORG_36b77757
[2025-12-01T23:35:49.470Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T23:35:49.475Z] [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T23:35:49.692Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757 in #💻・tech-jobs
[2025-12-01T23:35:49.692Z] [BOT] ✅ Industry: Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757
[2025-12-01T23:35:51.568Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T23:35:53.069Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T23:35:53.069Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T23:35:53.077Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T23:35:53.077Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T23:35:53.317Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-12-01T23:35:55.033Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T23:35:56.533Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T23:35:56.533Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T23:35:56.538Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T23:35:56.538Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T23:35:56.538Z] [BOT] 📍 [ROUTING] "Software Developer - Leadership Development Program - Uniondale" @ ORG_49d0893a Group
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T23:35:56.812Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #💻・tech-jobs
[2025-12-01T23:35:56.812Z] [BOT] ✅ Industry: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group
[2025-12-01T23:35:58.610Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T23:36:00.110Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T23:36:00.110Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T23:36:00.115Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T23:36:00.115Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_44c4dab8
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T23:36:00.360Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_44c4dab8 in #💻・tech-jobs
[2025-12-01T23:36:00.360Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_44c4dab8
[2025-12-01T23:36:02.189Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_44c4dab8 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T23:36:03.690Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T23:36:03.691Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T23:36:03.695Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T23:36:03.695Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer Full Stack & Application Development 1" @ ORG_aa669b28
[2025-12-01T23:36:03.695Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T23:36:03.884Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28
[2025-12-01T23:36:05.635Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T23:36:07.135Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T23:36:07.135Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T23:36:07.140Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T23:36:07.140Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T23:36:10.140Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T23:36:10.178Z] [BOT] 📂 Loaded 567 existing routing entries
[2025-12-01T23:36:10.217Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 572
[2025-12-01T23:36:10.217Z] [BOT] Timestamp: 2025-12-01T23:36:10.215Z
[2025-12-01T23:36:12.227Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*