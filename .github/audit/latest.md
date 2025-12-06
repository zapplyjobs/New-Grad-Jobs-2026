# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T14:23:58.308Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T14:23:18.119Z] ========================================
[2025-12-06T14:23:18.121Z] Discord Bot Execution Log
[2025-12-06T14:23:18.121Z] Environment: GitHub Actions
[2025-12-06T14:23:18.121Z] Node Version: v20.19.6
[2025-12-06T14:23:18.121Z] ========================================
[2025-12-06T14:23:18.121Z] Environment Variables Check:
[2025-12-06T14:23:18.121Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T14:23:18.121Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.121Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T14:23:18.122Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T14:23:18.122Z] 
Multi-Channel Configuration:
[2025-12-06T14:23:18.122Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T14:23:18.122Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T14:23:18.122Z] 
Data Files Check:
[2025-12-06T14:23:18.123Z] .github/data/new_jobs.json: ✅ Exists (8 items, 101698 bytes)
[2025-12-06T14:23:18.123Z] .github/data/posted_jobs.json: ✅ Exists (69 items, 6687 bytes)
[2025-12-06T14:23:18.123Z] 
========================================
[2025-12-06T14:23:18.123Z] Starting Enhanced Discord Bot...
[2025-12-06T14:23:18.123Z] ========================================
[2025-12-06T14:23:20.838Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T14:23:20.839Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-06T14:23:20.839Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T14:23:20.840Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-06T14:23:20.993Z] [BOT] ✅ Export complete: Added 0, Skipped 8, Total 329
[2025-12-06T14:23:20.994Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-06T14:23:20.995Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-06T14:23:20.995Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
[2025-12-06T14:23:20.995Z] [BOT] 📋 After title+company+location dedup: 7 unique jobs to post
   (1 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 1 deferred for next run
[2025-12-06T14:23:20.995Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T14:23:20.999Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-06T14:23:20.999Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a11413b0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:23:21.004Z] [BOT ERROR] (node:2682) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T14:23:21.177Z] [BOT] ✅ Created forum post: 🔧 Software Engineer @ ORG_a11413b0 in #💻・tech-jobs
[2025-12-06T14:23:21.177Z] [BOT] ✅ Industry: Software Engineer @ ORG_a11413b0
[2025-12-06T14:23:22.872Z] [BOT] ✅ Created forum post: 🔧 Software Engineer @ ORG_a11413b0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T14:23:24.372Z] [BOT] 💾 BEFORE SAVE: Database has 70 jobs
[2025-12-06T14:23:24.376Z] [BOT] 💾 Saved 70 posted jobs to database
✅ Verified: Database file contains 70 jobs
[2025-12-06T14:23:24.377Z] [BOT] 📍 [ROUTING] "Automation Software Engineer" @ ORG_0c79a9c2 Materials
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:23:24.541Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #💻・tech-jobs
[2025-12-06T14:23:24.542Z] [BOT] ✅ Industry: Automation Software Engineer @ ORG_0c79a9c2 Materials
[2025-12-06T14:23:26.236Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-06T14:23:27.737Z] [BOT] 💾 BEFORE SAVE: Database has 71 jobs
[2025-12-06T14:23:27.738Z] [BOT] 💾 Saved 71 posted jobs to database
✅ Verified: Database file contains 71 jobs
[2025-12-06T14:23:27.738Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:23:27.913Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-06T14:23:29.622Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-06T14:23:31.122Z] [BOT] 💾 BEFORE SAVE: Database has 72 jobs
[2025-12-06T14:23:31.123Z] [BOT] 💾 Saved 72 posted jobs to database
✅ Verified: Database file contains 72 jobs
[2025-12-06T14:23:31.123Z] [BOT] 📍 [ROUTING] "Analyst 1" @ ORG_742553d6 Entertainment
   Category: TECH (default)
[2025-12-06T14:23:31.123Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:23:31.380Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・tech-jobs
  ✅ Industry: Analyst 1 @ ORG_742553d6 Entertainment
[2025-12-06T14:23:33.229Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T14:23:34.729Z] [BOT] 💾 BEFORE SAVE: Database has 73 jobs
[2025-12-06T14:23:34.730Z] [BOT] 💾 Saved 73 posted jobs to database
[2025-12-06T14:23:34.730Z] [BOT] ✅ Verified: Database file contains 73 jobs
📍 [ROUTING] "Entry Level Graphics Software Developer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:23:36.371Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Entry Level Graphics Software Developer @ ORG_d51736fa
[2025-12-06T14:23:38.072Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T14:23:39.573Z] [BOT] 💾 BEFORE SAVE: Database has 74 jobs
[2025-12-06T14:23:39.574Z] [BOT] 💾 Saved 74 posted jobs to database
✅ Verified: Database file contains 74 jobs
[2025-12-06T14:23:42.574Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-06T14:23:42.574Z] [BOT] 📍 [ROUTING] "Full-Time" @ ORG_75f04b84
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-06T14:23:42.912Z] [BOT] ✅ Created forum post: 🏢 Full-Time @ ORG_75f04b84 in #🩺・healthcare-jobs
[2025-12-06T14:23:42.913Z] [BOT] ✅ Industry: Full-Time @ ORG_75f04b84
[2025-12-06T14:23:44.582Z] [BOT] ✅ Created forum post: 🏢 Full-Time @ ORG_75f04b84 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-06T14:23:46.083Z] [BOT] 💾 BEFORE SAVE: Database has 75 jobs
[2025-12-06T14:23:46.084Z] [BOT] 💾 Saved 75 posted jobs to database
✅ Verified: Database file contains 75 jobs
[2025-12-06T14:23:49.083Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2025-12-06T14:23:49.083Z] [BOT] 📍 [ROUTING] "Senior – Data Scientist" @ ORG_3eab285c
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-06T14:23:49.275Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #ai-jobs
  ✅ Industry: Senior – Data Scientist @ ORG_3eab285c
[2025-12-06T14:23:51.008Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #💻・remote-usa
[2025-12-06T14:23:51.008Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-06T14:23:52.508Z] [BOT] 💾 BEFORE SAVE: Database has 76 jobs
[2025-12-06T14:23:52.509Z] [BOT] 💾 Saved 76 posted jobs to database
✅ Verified: Database file contains 76 jobs
[2025-12-06T14:23:55.510Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-06T14:23:55.511Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-06T14:23:55.512Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 1 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2025-12-06T14:23:55.513Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-06T14:23:55.550Z] [BOT] 📂 Loaded 180 existing routing entries
[2025-12-06T14:23:55.588Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 187
[2025-12-06T14:23:55.588Z] [BOT] Timestamp: 2025-12-06T14:23:55.588Z
[2025-12-06T14:23:57.599Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2682) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*