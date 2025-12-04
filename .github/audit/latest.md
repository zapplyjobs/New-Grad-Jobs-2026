# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T02:37:26.838Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T02:36:43.853Z] ========================================
[2025-12-04T02:36:43.855Z] Discord Bot Execution Log
[2025-12-04T02:36:43.855Z] Environment: GitHub Actions
[2025-12-04T02:36:43.855Z] Node Version: v20.19.6
[2025-12-04T02:36:43.855Z] ========================================
[2025-12-04T02:36:43.855Z] Environment Variables Check:
[2025-12-04T02:36:43.855Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T02:36:43.855Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.855Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T02:36:43.855Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T02:36:43.855Z] 
Multi-Channel Configuration:
[2025-12-04T02:36:43.855Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T02:36:43.856Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T02:36:43.856Z] 
Data Files Check:
[2025-12-04T02:36:43.857Z] .github/data/new_jobs.json: ✅ Exists (27 items, 142792 bytes)
[2025-12-04T02:36:43.859Z] .github/data/posted_jobs.json: ✅ Exists (3548 items, 238384 bytes)
[2025-12-04T02:36:43.859Z] 
========================================
[2025-12-04T02:36:43.859Z] Starting Enhanced Discord Bot...
[2025-12-04T02:36:43.859Z] ========================================
[2025-12-04T02:36:45.172Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T02:36:45.173Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T02:36:45.173Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T02:36:45.174Z] [BOT] 📦 Exporting 27 jobs to encrypted JSON...
[2025-12-04T02:36:45.258Z] [BOT] ✅ Export complete: Added 0, Skipped 27, Total 27
[2025-12-04T02:36:45.259Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.260Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T02:36:45.260Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.260Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T02:36:45.260Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.260Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.261Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T02:36:45.261Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.261Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T02:36:45.261Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.261Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T02:36:45.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T02:36:45.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 13 new jobs (14 already posted)...
[2025-12-04T02:36:45.263Z] [BOT] 📋 After blacklist filter: 13 jobs (0 blacklisted)
[2025-12-04T02:36:45.263Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T02:36:45.263Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 9 unique jobs to post
   (4 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 4 deferred for next run
📤 Posting 9 jobs...
[2025-12-04T02:36:45.263Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T02:36:45.267Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2025-12-04T02:36:45.267Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms" @ ORG_0890f456
   Category: TECH (matched: "software")
[2025-12-04T02:36:45.268Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:36:45.272Z] [BOT ERROR] (node:3278) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T02:36:45.515Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #💻・tech-jobs
[2025-12-04T02:36:45.516Z] [BOT] ✅ Industry: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456
[2025-12-04T02:36:47.330Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-04T02:36:48.829Z] [BOT] 💾 BEFORE SAVE: Database has 3549 jobs
[2025-12-04T02:36:48.835Z] [BOT] 💾 Saved 3549 posted jobs to database
[2025-12-04T02:36:48.835Z] [BOT] ✅ Verified: Database file contains 3549 jobs
📍 [ROUTING] "Software Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:36:49.097Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・tech-jobs
[2025-12-04T02:36:49.097Z] [BOT] ✅ Industry: Software Engineer @ ORG_d51736fa
[2025-12-04T02:36:50.965Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・remote-usa
[2025-12-04T02:36:50.965Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T02:36:52.466Z] [BOT] 💾 BEFORE SAVE: Database has 3550 jobs
[2025-12-04T02:36:52.468Z] [BOT] 💾 Saved 3550 posted jobs to database
[2025-12-04T02:36:52.468Z] [BOT] ✅ Verified: Database file contains 3550 jobs
📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:36:52.772Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
[2025-12-04T02:36:52.772Z] [BOT] ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2025-12-04T02:36:54.517Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-04T02:36:56.018Z] [BOT] 💾 BEFORE SAVE: Database has 3551 jobs
[2025-12-04T02:36:56.020Z] [BOT] 💾 Saved 3551 posted jobs to database
[2025-12-04T02:36:56.021Z] [BOT] ✅ Verified: Database file contains 3551 jobs
📍 [ROUTING] "2026 – Americas - New York City Area - Engineering" @ ORG_d49bddaa Sachs
   Category: TECH (matched: "engineer/engineering")
[2025-12-04T02:36:56.021Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:36:56.292Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #💻・tech-jobs
  ✅ Industry: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs
[2025-12-04T02:36:58.148Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-04T02:36:59.648Z] [BOT] 💾 BEFORE SAVE: Database has 3552 jobs
[2025-12-04T02:36:59.651Z] [BOT] 💾 Saved 3552 posted jobs to database
[2025-12-04T02:36:59.651Z] [BOT] ✅ Verified: Database file contains 3552 jobs
📍 [ROUTING] "Artificial Intelligence Enterprise Engineer" @ ORG_2965600f Trust
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:36:59.935Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust in #💻・tech-jobs
  ✅ Industry: Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust
[2025-12-04T02:37:01.823Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-04T02:37:03.324Z] [BOT] 💾 BEFORE SAVE: Database has 3553 jobs
[2025-12-04T02:37:03.326Z] [BOT] 💾 Saved 3553 posted jobs to database
✅ Verified: Database file contains 3553 jobs
[2025-12-04T02:37:03.326Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1" @ ORG_ec2d1916 Electron
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:37:03.599Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 @ ORG_ec2d1916 Electron
[2025-12-04T02:37:05.297Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T02:37:06.797Z] [BOT] 💾 BEFORE SAVE: Database has 3554 jobs
[2025-12-04T02:37:06.800Z] [BOT] 💾 Saved 3554 posted jobs to database
[2025-12-04T02:37:06.801Z] [BOT] ✅ Verified: Database file contains 3554 jobs
📍 [ROUTING] "Analyst – Enterprise Business Intelligence & AI/ML Engineering" @ ORG_a35c6c02
[2025-12-04T02:37:06.801Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:37:07.003Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・tech-jobs
  ✅ Industry: Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02
[2025-12-04T02:37:08.693Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T02:37:10.194Z] [BOT] 💾 BEFORE SAVE: Database has 3555 jobs
[2025-12-04T02:37:10.197Z] [BOT] 💾 Saved 3555 posted jobs to database
✅ Verified: Database file contains 3555 jobs
[2025-12-04T02:37:10.197Z] [BOT] 📍 [ROUTING] "Senior Applied AI Engineer" @ ORG_a7f64157
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T02:37:10.578Z] [BOT] ✅ Created forum post: 🏢 Senior Applied AI Engineer @ ORG_a7f64157 in #💻・tech-jobs
  ✅ Industry: Senior Applied AI Engineer @ ORG_a7f64157
[2025-12-04T02:37:12.298Z] [BOT] ✅ Created forum post: 🏢 Senior Applied AI Engineer @ ORG_a7f64157 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T02:37:13.799Z] [BOT] 💾 BEFORE SAVE: Database has 3556 jobs
[2025-12-04T02:37:13.803Z] [BOT] 💾 Saved 3556 posted jobs to database
[2025-12-04T02:37:13.803Z] [BOT] ✅ Verified: Database file contains 3556 jobs
[2025-12-04T02:37:16.803Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T02:37:16.803Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T02:37:17.232Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T02:37:18.968Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-04T02:37:18.968Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T02:37:20.469Z] [BOT] 💾 BEFORE SAVE: Database has 3557 jobs
[2025-12-04T02:37:20.473Z] [BOT] 💾 Saved 3557 posted jobs to database
[2025-12-04T02:37:20.473Z] [BOT] ✅ Verified: Database file contains 3557 jobs
[2025-12-04T02:37:23.473Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-04T02:37:23.474Z] [BOT] ✅ Loaded pending queue: 27 total (0 pending, 27 enriched, 0 posted)
[2025-12-04T02:37:23.476Z] [BOT] ✅ Saved pending queue: 27 total (0 pending, 18 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T02:37:23.513Z] [BOT] 📂 Loaded 48 existing routing entries
[2025-12-04T02:37:23.549Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 57
   Timestamp: 2025-12-04T02:37:23.549Z
[2025-12-04T02:37:25.561Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3278) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*