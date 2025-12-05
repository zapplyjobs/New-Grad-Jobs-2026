# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T21:27:55.103Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 16
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T21:26:44.414Z] ========================================
[2025-12-05T21:26:44.416Z] Discord Bot Execution Log
[2025-12-05T21:26:44.416Z] Environment: GitHub Actions
[2025-12-05T21:26:44.416Z] Node Version: v20.19.6
[2025-12-05T21:26:44.416Z] ========================================
[2025-12-05T21:26:44.416Z] Environment Variables Check:
[2025-12-05T21:26:44.416Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T21:26:44.417Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T21:26:44.417Z] 
Multi-Channel Configuration:
[2025-12-05T21:26:44.417Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.417Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.418Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T21:26:44.418Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T21:26:44.418Z] 
Data Files Check:
[2025-12-05T21:26:44.422Z] .github/data/new_jobs.json: ✅ Exists (46 items, 601646 bytes)
[2025-12-05T21:26:44.423Z] .github/data/posted_jobs.json: ✅ Exists (35 items, 3234 bytes)
[2025-12-05T21:26:44.423Z] 
========================================
[2025-12-05T21:26:44.423Z] Starting Enhanced Discord Bot...
[2025-12-05T21:26:44.423Z] ========================================
[2025-12-05T21:26:46.313Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T21:26:46.314Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T21:26:46.314Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T21:26:46.317Z] [BOT] 📦 Exporting 46 jobs to encrypted JSON...
[2025-12-05T21:26:46.456Z] [BOT] ✅ Export complete: Added 0, Skipped 46, Total 302
[2025-12-05T21:26:46.460Z] [BOT] 📬 Found 46 new jobs (0 already posted)...
[2025-12-05T21:26:46.460Z] [BOT] 📋 After blacklist filter: 46 jobs (0 blacklisted)
[2025-12-05T21:26:46.460Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:26:46.461Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:26:46.461Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:26:46.461Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:26:46.461Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Associate Cloud Data Engineer at CVS Health, Irving (already posting one with this combination)
[2025-12-05T21:26:46.461Z] [BOT] ⏭️ Skipping duplicate title+company+location: ATC Salesforce Analyst - Nashville at Accenture, Nashville (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms at NVIDIA, Santa Clara (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer at Leidos, Huntsville (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Perception Infrastructure at pony.ai, Fremont (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: 2026 – Americas - New York City Area - Engineering at Goldman Sachs, NYC (already posting one with this combination)
[2025-12-05T21:26:46.462Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Development Engineer 1 at Tokyo Electron, Lowell (already posting one with this combination)
[2025-12-05T21:26:46.462Z] [BOT] ⏭️ Skipping duplicate title+company+location: Analyst – Enterprise Business Intelligence & AI/ML Engineering at Comcast, Philadelphia (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer / Principal Software Engineer - Aht at Northrop Grumman, Offutt AFB (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Level 1 or 2 at Northrop Grumman, Colorado Springs (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Appian Application Developer at Transamerica, Philadelphia (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Associate Software Engineer at Highmark Health, New Mexico (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Management Support 2 at Princeton University, Princeton (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at PennState University, State College (already posting one with this combination)
📋 After title+company+location dedup: 16 unique jobs to post
[2025-12-05T21:26:46.462Z] [BOT] (30 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 30 deferred for next run
📤 Posting 16 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T21:26:46.466Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-05T21:26:46.466Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-05T21:26:46.466Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:26:46.471Z] [BOT ERROR] (node:4443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T21:26:46.635Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T21:26:46.635Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T21:26:48.300Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T21:26:48.301Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T21:26:49.802Z] [BOT] 💾 BEFORE SAVE: Database has 36 jobs
[2025-12-05T21:26:49.807Z] [BOT] 💾 Saved 36 posted jobs to database
[2025-12-05T21:26:49.807Z] [BOT] ✅ Verified: Database file contains 36 jobs
📍 [ROUTING] "Postdoctoral Researcher" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:26:49.995Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #📁・JID_e938df7b
[2025-12-05T21:26:49.996Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_478e100e University
[2025-12-05T21:26:51.797Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #💻・remote-usa
[2025-12-05T21:26:51.797Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T21:26:53.297Z] [BOT] 💾 BEFORE SAVE: Database has 37 jobs
[2025-12-05T21:26:53.298Z] [BOT] 💾 Saved 37 posted jobs to database
[2025-12-05T21:26:53.298Z] [BOT] ✅ Verified: Database file contains 37 jobs
[2025-12-05T21:26:56.299Z] [BOT] 📌 Posting 13 jobs to #💻・tech-jobs
[2025-12-05T21:26:56.299Z] [BOT] 📍 [ROUTING] "Associate Cloud Data Engineer" @ ORG_6bda74c9 Health
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:26:56.668Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Associate Cloud Data Engineer @ ORG_6bda74c9 Health
[2025-12-05T21:26:58.690Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-05T21:27:00.190Z] [BOT] 💾 BEFORE SAVE: Database has 38 jobs
[2025-12-05T21:27:00.191Z] [BOT] 💾 Saved 38 posted jobs to database
[2025-12-05T21:27:00.191Z] [BOT] ✅ Verified: Database file contains 38 jobs
📍 [ROUTING] "Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms" @ ORG_0890f456
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:00.571Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456
[2025-12-05T21:27:02.302Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #🌉・san-francisco
[2025-12-05T21:27:02.302Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T21:27:03.802Z] [BOT] 💾 BEFORE SAVE: Database has 39 jobs
[2025-12-05T21:27:03.803Z] [BOT] 💾 Saved 39 posted jobs to database
[2025-12-05T21:27:03.804Z] [BOT] ✅ Verified: Database file contains 39 jobs
📍 [ROUTING] "Software Engineer" @ ORG_d51736fa
[2025-12-05T21:27:03.804Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:04.194Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・tech-jobs
[2025-12-05T21:27:04.194Z] [BOT] ✅ Industry: Software Engineer @ ORG_d51736fa
[2025-12-05T21:27:05.942Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・remote-usa
[2025-12-05T21:27:05.943Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T21:27:07.444Z] [BOT] 💾 BEFORE SAVE: Database has 40 jobs
[2025-12-05T21:27:07.445Z] [BOT] 💾 Saved 40 posted jobs to database
[2025-12-05T21:27:07.445Z] [BOT] ✅ Verified: Database file contains 40 jobs
📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
[2025-12-05T21:27:07.445Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:07.663Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
[2025-12-05T21:27:07.663Z] [BOT] ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2025-12-05T21:27:09.316Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #🌉・san-francisco
[2025-12-05T21:27:09.316Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T21:27:10.816Z] [BOT] 💾 BEFORE SAVE: Database has 41 jobs
[2025-12-05T21:27:10.818Z] [BOT] 💾 Saved 41 posted jobs to database
[2025-12-05T21:27:10.818Z] [BOT] ✅ Verified: Database file contains 41 jobs
📍 [ROUTING] "2026 – Americas - New York City Area - Engineering" @ ORG_d49bddaa Sachs
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:11.141Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #💻・tech-jobs
  ✅ Industry: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs
[2025-12-05T21:27:12.821Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T21:27:14.322Z] [BOT] 💾 BEFORE SAVE: Database has 42 jobs
[2025-12-05T21:27:14.323Z] [BOT] 💾 Saved 42 posted jobs to database
[2025-12-05T21:27:14.323Z] [BOT] ✅ Verified: Database file contains 42 jobs
📍 [ROUTING] "Software Development Engineer 1" @ ORG_ec2d1916 Electron
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:15.974Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 @ ORG_ec2d1916 Electron
[2025-12-05T21:27:17.771Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・remote-usa
[2025-12-05T21:27:17.772Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T21:27:19.272Z] [BOT] 💾 BEFORE SAVE: Database has 43 jobs
[2025-12-05T21:27:19.274Z] [BOT] 💾 Saved 43 posted jobs to database
[2025-12-05T21:27:19.274Z] [BOT] ✅ Verified: Database file contains 43 jobs
📍 [ROUTING] "Analyst – Enterprise Business Intelligence & AI/ML Engineering" @ ORG_a35c6c02
   Category: TECH (matched: "analytics")
[2025-12-05T21:27:19.274Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:19.441Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・tech-jobs
  ✅ Industry: Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02
[2025-12-05T21:27:21.458Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:27:22.960Z] [BOT] 💾 BEFORE SAVE: Database has 44 jobs
[2025-12-05T21:27:22.961Z] [BOT] 💾 Saved 44 posted jobs to database
[2025-12-05T21:27:22.961Z] [BOT] ✅ Verified: Database file contains 44 jobs
📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
[2025-12-05T21:27:22.961Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:23.181Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2025-12-05T21:27:25.248Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #🌧️・seattle
[2025-12-05T21:27:25.248Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-05T21:27:26.749Z] [BOT] 💾 BEFORE SAVE: Database has 45 jobs
[2025-12-05T21:27:26.750Z] [BOT] 💾 Saved 45 posted jobs to database
✅ Verified: Database file contains 45 jobs
[2025-12-05T21:27:26.750Z] [BOT] 📍 [ROUTING] "Software Engineer - Level 1 or 2" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:26.988Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman
[2025-12-05T21:27:28.741Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:27:30.241Z] [BOT] 💾 BEFORE SAVE: Database has 46 jobs
[2025-12-05T21:27:30.243Z] [BOT] 💾 Saved 46 posted jobs to database
[2025-12-05T21:27:30.243Z] [BOT] ✅ Verified: Database file contains 46 jobs
📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
[2025-12-05T21:27:30.243Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:30.541Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
  ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2025-12-05T21:27:32.227Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:27:33.728Z] [BOT] 💾 BEFORE SAVE: Database has 47 jobs
[2025-12-05T21:27:33.730Z] [BOT] 💾 Saved 47 posted jobs to database
✅ Verified: Database file contains 47 jobs
[2025-12-05T21:27:33.730Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e34691a8 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:34.081Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e34691a8 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e34691a8 Health
[2025-12-05T21:27:35.581Z] [BOT] 💾 BEFORE SAVE: Database has 48 jobs
[2025-12-05T21:27:35.583Z] [BOT] 💾 Saved 48 posted jobs to database
[2025-12-05T21:27:35.583Z] [BOT] ✅ Verified: Database file contains 48 jobs
📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
   Category: TECH (matched: "software")
[2025-12-05T21:27:35.583Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:35.778Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-05T21:27:35.778Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-05T21:27:37.421Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T21:27:38.921Z] [BOT] 💾 BEFORE SAVE: Database has 49 jobs
[2025-12-05T21:27:38.924Z] [BOT] 💾 Saved 49 posted jobs to database
[2025-12-05T21:27:38.925Z] [BOT] ✅ Verified: Database file contains 49 jobs
[2025-12-05T21:27:38.925Z] [BOT] 📍 [ROUTING] "Data Management Support 2" @ ORG_03272755inceton University
[2025-12-05T21:27:38.925Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:27:39.505Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・tech-jobs
[2025-12-05T21:27:39.505Z] [BOT] ✅ Industry: Data Management Support 2 @ ORG_03272755inceton University
[2025-12-05T21:27:41.169Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:27:42.670Z] [BOT] 💾 BEFORE SAVE: Database has 50 jobs
[2025-12-05T21:27:42.672Z] [BOT] 💾 Saved 50 posted jobs to database
✅ Verified: Database file contains 50 jobs
[2025-12-05T21:27:45.672Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-05T21:27:45.672Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-05T21:27:45.920Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🩺・healthcare-jobs
[2025-12-05T21:27:45.920Z] [BOT] ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2025-12-05T21:27:47.902Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T21:27:49.404Z] [BOT] 💾 BEFORE SAVE: Database has 51 jobs
[2025-12-05T21:27:49.405Z] [BOT] 💾 Saved 51 posted jobs to database
✅ Verified: Database file contains 51 jobs
[2025-12-05T21:27:52.406Z] [BOT] 🎉 Posting complete! Successfully posted: 16, Failed: 0
[2025-12-05T21:27:52.411Z] [BOT] ✅ Loaded pending queue: 46 total (0 pending, 46 enriched, 0 posted)
[2025-12-05T21:27:52.416Z] [BOT] ✅ Saved pending queue: 46 total (0 pending, 6 enriched, 40 posted)
[2025-12-05T21:27:52.416Z] [BOT] 📋 Updated queue: marked 40 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T21:27:52.453Z] [BOT] 📂 Loaded 92 existing routing entries
[2025-12-05T21:27:52.489Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 16
   Total entries: 108
   Timestamp: 2025-12-05T21:27:52.489Z
[2025-12-05T21:27:54.499Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*