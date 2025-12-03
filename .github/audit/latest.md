# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T03:40:38.565Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T03:39:54.044Z] ========================================
[2025-12-03T03:39:54.046Z] Discord Bot Execution Log
[2025-12-03T03:39:54.046Z] Environment: GitHub Actions
[2025-12-03T03:39:54.046Z] Node Version: v20.19.5
[2025-12-03T03:39:54.046Z] ========================================
[2025-12-03T03:39:54.046Z] Environment Variables Check:
[2025-12-03T03:39:54.046Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T03:39:54.046Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.046Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T03:39:54.046Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T03:39:54.046Z] 
Multi-Channel Configuration:
[2025-12-03T03:39:54.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T03:39:54.047Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T03:39:54.047Z] 
Data Files Check:
[2025-12-03T03:39:54.048Z] .github/data/new_jobs.json: ✅ Exists (14 items, 78751 bytes)
[2025-12-03T03:39:54.050Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333431 bytes)
[2025-12-03T03:39:54.050Z] 
========================================
[2025-12-03T03:39:54.050Z] Starting Enhanced Discord Bot...
[2025-12-03T03:39:54.050Z] ========================================
[2025-12-03T03:39:55.697Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T03:39:55.698Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T03:39:55.698Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T03:39:55.700Z] [BOT] 📦 Exporting 14 jobs to encrypted JSON...
[2025-12-03T03:39:55.780Z] [BOT] ✅ Export complete: Added 0, Skipped 14, Total 14
[2025-12-03T03:39:55.781Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T03:39:55.781Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T03:39:55.782Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T03:39:55.782Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 10 new jobs (4 already posted)...
[2025-12-03T03:39:55.782Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-03T03:39:55.782Z] [BOT] 📋 After title+company+location dedup: 10 unique jobs to post
[2025-12-03T03:39:55.782Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T03:39:55.786Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2025-12-03T03:39:55.786Z] [BOT] 📍 [ROUTING] "C# / .NET Software Application Support / Engineer" @ ORG_5e4eb7c5 Bank
[2025-12-03T03:39:55.787Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:39:55.794Z] [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T03:39:56.032Z] [BOT] ✅ Created forum post: 🏢 C# / .NET Software Application Support / Engineer @ ORG_5e4eb7c5 Bank in #💻・tech-jobs
[2025-12-03T03:39:56.032Z] [BOT] ✅ Industry: C# / .NET Software Application Support / Engineer @ ORG_5e4eb7c5 Bank
[2025-12-03T03:39:57.872Z] [BOT] ✅ Created forum post: 🏢 C# / .NET Software Application Support / Engineer @ ORG_5e4eb7c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T03:39:59.372Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:39:59.372Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:39:59.377Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:39:59.378Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Developer Associate" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
[2025-12-03T03:39:59.378Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:39:59.674Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2025-12-03T03:39:59.675Z] [BOT] ✅ Industry: Software Developer Associate @ ORG_c910d474 Dynamics Information Technology
[2025-12-03T03:40:01.370Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T03:40:02.870Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:02.871Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:02.875Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:02.875Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Human Performance Data Scientist 1" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "data")
[2025-12-03T03:40:02.875Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:03.161Z] [BOT] ✅ Created forum post: 🏢 Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology
[2025-12-03T03:40:04.662Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:04.662Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:04.666Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:04.666Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "ML Engineer 2" @ ORG_c3f8be8b
   Category: TECH (matched: "machine learning")
[2025-12-03T03:40:04.666Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:05.147Z] [BOT] ✅ Created forum post: 🏢 ML Engineer 2 @ ORG_c3f8be8b in #💻・tech-jobs
  ✅ Industry: ML Engineer 2 @ ORG_c3f8be8b
[2025-12-03T03:40:06.905Z] [BOT] ✅ Created forum post: 🏢 ML Engineer 2 @ ORG_c3f8be8b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T03:40:08.405Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:08.406Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:08.410Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:08.410Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Systems Modeling Simulations Engineer/Systems Modeling Simulations Engineer" @ ORG_f3f2248d Grumman
[2025-12-03T03:40:08.410Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:08.648Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Modeling Simulations Engineer/Systems Modeling Simulations Engineer @ ORG_f3f2248d  in #💻・tech-jobs
[2025-12-03T03:40:08.648Z] [BOT] ✅ Industry: Associate Systems Modeling Simulations Engineer/Systems Modeling Simulations Engineer @ ORG_f3f2248d Grumman
[2025-12-03T03:40:11.008Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Modeling Simulations Engineer/Systems Modeling Simulations Engineer @ ORG_f3f2248d  in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T03:40:12.509Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:12.510Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:12.513Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T03:40:12.513Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Machine Learning Researcher – New College Grad 2025" @ ORG_cdec6f53
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:12.743Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Researcher – New College Grad 2025 @ ORG_cdec6f53 in #💻・tech-jobs
  ✅ Industry: Machine Learning Researcher – New College Grad 2025 @ ORG_cdec6f53
[2025-12-03T03:40:14.471Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Researcher – New College Grad 2025 @ ORG_cdec6f53 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-03T03:40:15.972Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:15.972Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:15.977Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:15.977Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Analyst – Python Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
[2025-12-03T03:40:15.977Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:16.159Z] [BOT] ✅ Created forum post: 🏢 Analyst – Python Engineer @ ORG_86a62f4a in #💻・tech-jobs
  ✅ Industry: Analyst – Python Engineer @ ORG_86a62f4a
[2025-12-03T03:40:17.828Z] [BOT] ✅ Created forum post: 🏢 Analyst – Python Engineer @ ORG_86a62f4a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T03:40:19.330Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:19.331Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:19.335Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:19.335Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:40:19.335Z] [BOT] 📍 [ROUTING] "Data Analytics - Junior Associate" @ ORG_44474c89
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:19.551Z] [BOT] ✅ Created forum post: 🏢 Data Analytics - Junior Associate @ ORG_44474c89 in #💻・tech-jobs
[2025-12-03T03:40:19.551Z] [BOT] ✅ Industry: Data Analytics - Junior Associate @ ORG_44474c89
[2025-12-03T03:40:21.223Z] [BOT] ✅ Created forum post: 🏢 Data Analytics - Junior Associate @ ORG_44474c89 in #🗽・new-york
[2025-12-03T03:40:21.223Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-03T03:40:22.724Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:22.724Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:22.728Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:22.728Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2025-12-03T03:40:22.728Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:40:22.918Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T03:40:24.646Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T03:40:26.147Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:26.148Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:26.152Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T03:40:26.152Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:40:29.153Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T03:40:29.154Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T03:40:29.359Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T03:40:31.181Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T03:40:32.682Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:40:32.683Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:40:32.687Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:40:32.687Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:40:35.687Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-03T03:40:35.689Z] [BOT] ✅ Loaded pending queue: 14 total (0 pending, 14 enriched, 0 posted)
[2025-12-03T03:40:35.690Z] [BOT] ✅ Saved pending queue: 14 total (0 pending, 4 enriched, 10 posted)
[2025-12-03T03:40:35.690Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T03:40:35.729Z] [BOT] 📂 Loaded 659 existing routing entries
[2025-12-03T03:40:35.770Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-03T03:40:35.771Z] [BOT] Total entries: 669
   Timestamp: 2025-12-03T03:40:35.768Z
[2025-12-03T03:40:37.781Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*