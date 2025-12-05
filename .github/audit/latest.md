# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T13:55:49.475Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T13:55:11.023Z] ========================================
[2025-12-05T13:55:11.025Z] Discord Bot Execution Log
[2025-12-05T13:55:11.025Z] Environment: GitHub Actions
[2025-12-05T13:55:11.025Z] Node Version: v20.19.6
[2025-12-05T13:55:11.025Z] ========================================
[2025-12-05T13:55:11.025Z] Environment Variables Check:
[2025-12-05T13:55:11.025Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T13:55:11.025Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.025Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T13:55:11.026Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T13:55:11.026Z] 
Multi-Channel Configuration:
[2025-12-05T13:55:11.026Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T13:55:11.026Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T13:55:11.027Z] 
Data Files Check:
[2025-12-05T13:55:11.031Z] .github/data/new_jobs.json: ✅ Exists (50 items, 600397 bytes)
[2025-12-05T13:55:11.032Z] .github/data/posted_jobs.json: ✅ Exists (10 items, 818 bytes)
[2025-12-05T13:55:11.032Z] 
========================================
[2025-12-05T13:55:11.032Z] Starting Enhanced Discord Bot...
[2025-12-05T13:55:11.032Z] ========================================
[2025-12-05T13:55:12.222Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T13:55:12.223Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T13:55:12.224Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T13:55:12.226Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T13:55:12.355Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 200
[2025-12-05T13:55:12.360Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T13:55:12.360Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T13:55:12.361Z] [BOT] ⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
[2025-12-05T13:55:12.361Z] [BOT] ⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
[2025-12-05T13:55:12.361Z] [BOT] ⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Cryptoanalyst Level 2 - CCA allowed at Link, Odenton (already posting one with this combination)
[2025-12-05T13:55:12.361Z] [BOT] ⏭️ Skipping duplicate title+company+location: Postdoc Research Associate-Computational Scientist at Savannah River National Laboratory, North Augusta (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Peraton, Aurora (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Analyst - Consumer Engagement at CVS Health, NYC (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Analyst at Lever, San Diego (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry Level Software Engineer at General Dynamics Mission Systems, Pittsburgh (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Custom Application Engineer at Trane Technologies, Fort Smith (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Level 2 - Advanced AI - NLP at Link, Odenton (already posting one with this combination)
📋 After title+company+location dedup: 8 unique jobs to post
   (42 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 42 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T13:55:12.367Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-05T13:55:12.368Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:12.376Z] [BOT ERROR] (node:2823) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T13:55:12.753Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #💻・tech-jobs
  ✅ Industry: Data Analyst @ ORG_2ea541c5
[2025-12-05T13:55:14.455Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T13:55:15.954Z] [BOT] 💾 BEFORE SAVE: Database has 11 jobs
[2025-12-05T13:55:15.959Z] [BOT] 💾 Saved 11 posted jobs to database
[2025-12-05T13:55:15.959Z] [BOT] ✅ Verified: Database file contains 11 jobs
📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:16.145Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-12-05T13:55:16.145Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2025-12-05T13:55:17.847Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:55:19.348Z] [BOT] 💾 BEFORE SAVE: Database has 12 jobs
[2025-12-05T13:55:19.349Z] [BOT] 💾 Saved 12 posted jobs to database
[2025-12-05T13:55:19.349Z] [BOT] ✅ Verified: Database file contains 12 jobs
📍 [ROUTING] "Custom Application Engineer" @ ORG_cb844c98 Technologies
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:19.540Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・tech-jobs
  ✅ Industry: Custom Application Engineer @ ORG_cb844c98 Technologies
[2025-12-05T13:55:21.197Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:55:22.698Z] [BOT] 💾 BEFORE SAVE: Database has 13 jobs
[2025-12-05T13:55:22.699Z] [BOT] 💾 Saved 13 posted jobs to database
✅ Verified: Database file contains 13 jobs
[2025-12-05T13:55:22.700Z] [BOT] 📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:23.025Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・tech-jobs
  ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2025-12-05T13:55:24.846Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:55:26.347Z] [BOT] 💾 BEFORE SAVE: Database has 14 jobs
[2025-12-05T13:55:26.348Z] [BOT] 💾 Saved 14 posted jobs to database
[2025-12-05T13:55:26.348Z] [BOT] ✅ Verified: Database file contains 14 jobs
📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:26.482Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・tech-jobs
  ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2025-12-05T13:55:28.294Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・remote-usa
[2025-12-05T13:55:28.294Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T13:55:29.794Z] [BOT] 💾 BEFORE SAVE: Database has 15 jobs
[2025-12-05T13:55:29.795Z] [BOT] 💾 Saved 15 posted jobs to database
[2025-12-05T13:55:29.796Z] [BOT] ✅ Verified: Database file contains 15 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:30.070Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_d6d2009d
[2025-12-05T13:55:31.974Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T13:55:33.476Z] [BOT] 💾 BEFORE SAVE: Database has 16 jobs
[2025-12-05T13:55:33.477Z] [BOT] 💾 Saved 16 posted jobs to database
[2025-12-05T13:55:33.477Z] [BOT] ✅ Verified: Database file contains 16 jobs
📍 [ROUTING] "Data Science Analyst - Consumer Engagement" @ ORG_6bda74c9 Health
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:55:33.896Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health
[2025-12-05T13:55:35.575Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #🗽・new-york
[2025-12-05T13:55:35.575Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-05T13:55:37.075Z] [BOT] 💾 BEFORE SAVE: Database has 17 jobs
[2025-12-05T13:55:37.078Z] [BOT] 💾 Saved 17 posted jobs to database
[2025-12-05T13:55:37.078Z] [BOT] ✅ Verified: Database file contains 17 jobs
[2025-12-05T13:55:40.079Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T13:55:40.079Z] [BOT] 📍 [ROUTING] "Postdoc Research Associate-Computational Scientist" @ ORG_f7906b79 River National Laboratory
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T13:55:40.367Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #📁・JID_e938df7b
  ✅ Industry: Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory
[2025-12-05T13:55:42.259Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:55:43.759Z] [BOT] 💾 BEFORE SAVE: Database has 18 jobs
[2025-12-05T13:55:43.760Z] [BOT] 💾 Saved 18 posted jobs to database
[2025-12-05T13:55:43.761Z] [BOT] ✅ Verified: Database file contains 18 jobs
[2025-12-05T13:55:46.762Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-05T13:55:46.769Z] [BOT] ✅ Loaded pending queue: 792 total (742 pending, 50 enriched, 0 posted)
[2025-12-05T13:55:46.785Z] [BOT] ✅ Saved pending queue: 792 total (452 pending, 0 enriched, 340 posted)
[2025-12-05T13:55:46.785Z] [BOT] 📋 Updated queue: marked 340 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T13:55:46.822Z] [BOT] 📂 Loaded 10 existing routing entries
[2025-12-05T13:55:46.858Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 18
   Timestamp: 2025-12-05T13:55:46.857Z
[2025-12-05T13:55:48.871Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2823) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*