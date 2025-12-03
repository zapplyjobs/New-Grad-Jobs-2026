# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T23:58:49.827Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 23
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T23:57:15.673Z] ========================================
[2025-12-03T23:57:15.674Z] Discord Bot Execution Log
[2025-12-03T23:57:15.674Z] Environment: GitHub Actions
[2025-12-03T23:57:15.675Z] Node Version: v20.19.6
[2025-12-03T23:57:15.675Z] ========================================
[2025-12-03T23:57:15.675Z] Environment Variables Check:
[2025-12-03T23:57:15.675Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T23:57:15.675Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.675Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T23:57:15.675Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T23:57:15.675Z] 
Multi-Channel Configuration:
[2025-12-03T23:57:15.675Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.675Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.675Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.675Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T23:57:15.676Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T23:57:15.676Z] 
Data Files Check:
[2025-12-03T23:57:15.677Z] .github/data/new_jobs.json: ✅ Exists (35 items, 184204 bytes)
[2025-12-03T23:57:15.679Z] .github/data/posted_jobs.json: ✅ Exists (3515 items, 234705 bytes)
[2025-12-03T23:57:15.679Z] 
========================================
[2025-12-03T23:57:15.679Z] Starting Enhanced Discord Bot...
[2025-12-03T23:57:15.679Z] ========================================
[2025-12-03T23:57:16.911Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T23:57:16.912Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T23:57:16.912Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T23:57:16.913Z] [BOT] 📦 Exporting 35 jobs to encrypted JSON...
[2025-12-03T23:57:16.997Z] [BOT] ✅ Export complete: Added 0, Skipped 35, Total 35
[2025-12-03T23:57:16.998Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T23:57:16.998Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T23:57:16.999Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T23:57:17.000Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T23:57:17.000Z] [BOT] 📬 Found 31 new jobs (4 already posted)...
[2025-12-03T23:57:17.000Z] [BOT] 📋 After blacklist filter: 31 jobs (0 blacklisted)
[2025-12-03T23:57:17.001Z] [BOT] ⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
[2025-12-03T23:57:17.001Z] [BOT] ⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-03T23:57:17.001Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-03T23:57:17.001Z] [BOT] ⏭️ Skipping duplicate title+company+location: Early Career Software Engineer at Citizen Health, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Full-Stack Developer - Junior at Booz Allen, Huntsville (already posting one with this combination)
📋 After title+company+location dedup: 23 unique jobs to post
   (8 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 23 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T23:57:17.007Z] [BOT] 📌 Posting 18 jobs to #💻・tech-jobs
[2025-12-03T23:57:17.007Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-03T23:57:17.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:17.012Z] [BOT ERROR] (node:4520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T23:57:17.242Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-03T23:57:17.242Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-03T23:57:18.947Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
[2025-12-03T23:57:18.947Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T23:57:20.447Z] [BOT] 💾 BEFORE SAVE: Database has 3516 jobs
[2025-12-03T23:57:20.453Z] [BOT] 💾 Saved 3516 posted jobs to database
[2025-12-03T23:57:20.453Z] [BOT] ✅ Verified: Database file contains 3516 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:20.782Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-03T23:57:22.511Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2025-12-03T23:57:22.511Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-03T23:57:24.012Z] [BOT] 💾 BEFORE SAVE: Database has 3517 jobs
[2025-12-03T23:57:24.015Z] [BOT] 💾 Saved 3517 posted jobs to database
✅ Verified: Database file contains 3517 jobs
[2025-12-03T23:57:24.015Z] [BOT] 📍 [ROUTING] "Full-Stack Developer - Junior" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2025-12-03T23:57:24.015Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:24.157Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer - Junior @ ORG_39417f32 Allen in #💻・tech-jobs
[2025-12-03T23:57:24.157Z] [BOT] ✅ Industry: Full-Stack Developer - Junior @ ORG_39417f32 Allen
[2025-12-03T23:57:26.040Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer - Junior @ ORG_39417f32 Allen in #💻・remote-usa
[2025-12-03T23:57:26.040Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:57:27.541Z] [BOT] 💾 BEFORE SAVE: Database has 3518 jobs
[2025-12-03T23:57:27.544Z] [BOT] 💾 Saved 3518 posted jobs to database
[2025-12-03T23:57:27.544Z] [BOT] ✅ Verified: Database file contains 3518 jobs
📍 [ROUTING] "Software Engineer" @ ORG_26f9a186
   Category: TECH (matched: "software")
[2025-12-03T23:57:27.544Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:27.808Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_26f9a186 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_26f9a186
[2025-12-03T23:57:29.488Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_26f9a186 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T23:57:30.990Z] [BOT] 💾 BEFORE SAVE: Database has 3519 jobs
[2025-12-03T23:57:30.993Z] [BOT] 💾 Saved 3519 posted jobs to database
[2025-12-03T23:57:30.993Z] [BOT] ✅ Verified: Database file contains 3519 jobs
📍 [ROUTING] "Associate – Investment Analytics and Data - Portfolio Analytics" @ ORG_c9e92d4e Fund Advisors
   Category: TECH (matched: "data")
[2025-12-03T23:57:30.993Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:31.454Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #💻・tech-jobs
[2025-12-03T23:57:31.454Z] [BOT] ✅ Industry: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors
[2025-12-03T23:57:33.121Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #💻・remote-usa
[2025-12-03T23:57:33.122Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:57:34.623Z] [BOT] 💾 BEFORE SAVE: Database has 3520 jobs
[2025-12-03T23:57:34.626Z] [BOT] 💾 Saved 3520 posted jobs to database
[2025-12-03T23:57:34.626Z] [BOT] ✅ Verified: Database file contains 3520 jobs
📍 [ROUTING] "System Engineering Analytics Engineer 1" @ ORG_f23bb052 Truck
[2025-12-03T23:57:34.626Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:34.986Z] [BOT] ✅ Created forum post: 🏢 System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck in #💻・tech-jobs
[2025-12-03T23:57:34.986Z] [BOT] ✅ Industry: System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck
[2025-12-03T23:57:36.633Z] [BOT] ✅ Created forum post: 🏢 System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck in #💻・remote-usa
[2025-12-03T23:57:36.634Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:57:38.134Z] [BOT] 💾 BEFORE SAVE: Database has 3521 jobs
[2025-12-03T23:57:38.137Z] [BOT] 💾 Saved 3521 posted jobs to database
[2025-12-03T23:57:38.137Z] [BOT] ✅ Verified: Database file contains 3521 jobs
📍 [ROUTING] "Human Performance Data Scientist 1" @ ORG_c910d474 Dynamics Information Technology
[2025-12-03T23:57:38.137Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:38.314Z] [BOT] ✅ Created forum post: 🏢 Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2025-12-03T23:57:38.314Z] [BOT] ✅ Industry: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology
[2025-12-03T23:57:39.815Z] [BOT] 💾 BEFORE SAVE: Database has 3522 jobs
[2025-12-03T23:57:39.818Z] [BOT] 💾 Saved 3522 posted jobs to database
[2025-12-03T23:57:39.818Z] [BOT] ✅ Verified: Database file contains 3522 jobs
📍 [ROUTING] "Analyst – Python Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:40.261Z] [BOT] ✅ Created forum post: 🏢 Analyst – Python Engineer @ ORG_86a62f4a in #💻・tech-jobs
[2025-12-03T23:57:40.261Z] [BOT] ✅ Industry: Analyst – Python Engineer @ ORG_86a62f4a
[2025-12-03T23:57:42.019Z] [BOT] ✅ Created forum post: 🏢 Analyst – Python Engineer @ ORG_86a62f4a in #💻・remote-usa
[2025-12-03T23:57:42.019Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:57:43.519Z] [BOT] 💾 BEFORE SAVE: Database has 3523 jobs
[2025-12-03T23:57:43.522Z] [BOT] 💾 Saved 3523 posted jobs to database
[2025-12-03T23:57:43.522Z] [BOT] ✅ Verified: Database file contains 3523 jobs
📍 [ROUTING] "Research Associate - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2025-12-03T23:57:43.523Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:43.651Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2025-12-03T23:57:45.419Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・remote-usa
[2025-12-03T23:57:45.419Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:57:46.920Z] [BOT] 💾 BEFORE SAVE: Database has 3524 jobs
[2025-12-03T23:57:46.923Z] [BOT] 💾 Saved 3524 posted jobs to database
✅ Verified: Database file contains 3524 jobs
[2025-12-03T23:57:46.924Z] [BOT] 📍 [ROUTING] "Data Analytics - Junior Associate" @ ORG_44474c89
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:47.066Z] [BOT] ✅ Created forum post: 🏢 Data Analytics - Junior Associate @ ORG_44474c89 in #💻・tech-jobs
  ✅ Industry: Data Analytics - Junior Associate @ ORG_44474c89
[2025-12-03T23:57:48.713Z] [BOT] ✅ Created forum post: 🏢 Data Analytics - Junior Associate @ ORG_44474c89 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-03T23:57:50.214Z] [BOT] 💾 BEFORE SAVE: Database has 3525 jobs
[2025-12-03T23:57:50.216Z] [BOT] 💾 Saved 3525 posted jobs to database
✅ Verified: Database file contains 3525 jobs
[2025-12-03T23:57:50.217Z] [BOT] 📍 [ROUTING] "Software Engineer - C# - TypeScript" @ ORG_05d2f9ea Electric
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:50.383Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric in #💻・tech-jobs
  ✅ Industry: Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric
[2025-12-03T23:57:52.112Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T23:57:53.613Z] [BOT] 💾 BEFORE SAVE: Database has 3526 jobs
[2025-12-03T23:57:53.616Z] [BOT] 💾 Saved 3526 posted jobs to database
✅ Verified: Database file contains 3526 jobs
[2025-12-03T23:57:53.616Z] [BOT] 📍 [ROUTING] "Tech 1 – Mapping" @ ORG_6f8a62f0 Hathaway Energy
[2025-12-03T23:57:53.616Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:53.814Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
  ✅ Industry: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy
[2025-12-03T23:57:55.567Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:57:57.067Z] [BOT] 💾 BEFORE SAVE: Database has 3527 jobs
[2025-12-03T23:57:57.070Z] [BOT] 💾 Saved 3527 posted jobs to database
✅ Verified: Database file contains 3527 jobs
[2025-12-03T23:57:57.070Z] [BOT] 📍 [ROUTING] "Research Data Analyst" @ ORG_1954b120
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:57:57.250Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Research Data Analyst @ ORG_1954b120
[2025-12-03T23:57:58.973Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:58:00.474Z] [BOT] 💾 BEFORE SAVE: Database has 3528 jobs
[2025-12-03T23:58:00.478Z] [BOT] 💾 Saved 3528 posted jobs to database
✅ Verified: Database file contains 3528 jobs
[2025-12-03T23:58:00.478Z] [BOT] 📍 [ROUTING] "Associate Full Stack Engineer" @ ORG_66279f04 Investments
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:58:00.760Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Engineer @ ORG_66279f04 Investments in #💻・tech-jobs
  ✅ Industry: Associate Full Stack Engineer @ ORG_66279f04 Investments
[2025-12-03T23:58:02.487Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Engineer @ ORG_66279f04 Investments in #💻・remote-usa
[2025-12-03T23:58:02.487Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:58:03.987Z] [BOT] 💾 BEFORE SAVE: Database has 3529 jobs
[2025-12-03T23:58:03.990Z] [BOT] 💾 Saved 3529 posted jobs to database
[2025-12-03T23:58:03.990Z] [BOT] ✅ Verified: Database file contains 3529 jobs
📍 [ROUTING] "2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed)" @ ORG_75f04b84
[2025-12-03T23:58:03.990Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:58:04.364Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-03T23:58:04.364Z] [BOT] ✅ Industry: 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84
[2025-12-03T23:58:06.182Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84 in #💻・remote-usa
[2025-12-03T23:58:06.182Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:58:07.682Z] [BOT] 💾 BEFORE SAVE: Database has 3530 jobs
[2025-12-03T23:58:07.685Z] [BOT] 💾 Saved 3530 posted jobs to database
[2025-12-03T23:58:07.686Z] [BOT] ✅ Verified: Database file contains 3530 jobs
📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_e5ca4df3 Group
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:58:07.913Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
[2025-12-03T23:58:07.913Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group
[2025-12-03T23:58:09.718Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-12-03T23:58:11.219Z] [BOT] 💾 BEFORE SAVE: Database has 3531 jobs
[2025-12-03T23:58:11.222Z] [BOT] 💾 Saved 3531 posted jobs to database
[2025-12-03T23:58:11.222Z] [BOT] ✅ Verified: Database file contains 3531 jobs
📍 [ROUTING] "Software Engineer 1 - Machine Learning" @ ORG_d9bc2c87
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:58:11.436Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Machine Learning @ ORG_d9bc2c87
[2025-12-03T23:58:13.115Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-03T23:58:14.615Z] [BOT] 💾 BEFORE SAVE: Database has 3532 jobs
[2025-12-03T23:58:14.617Z] [BOT] 💾 Saved 3532 posted jobs to database
[2025-12-03T23:58:14.618Z] [BOT] ✅ Verified: Database file contains 3532 jobs
[2025-12-03T23:58:14.618Z] [BOT] 📍 [ROUTING] "C++ Engineer - ONSITE: Chicago - IL or Denver','CO" @ ORG_a35c6c02
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:58:14.791Z] [BOT] ✅ Created forum post: 🏢 C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02 in #💻・tech-jobs
  ✅ Industry: C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02
[2025-12-03T23:58:16.483Z] [BOT] ✅ Created forum post: 🏢 C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-03T23:58:17.983Z] [BOT] 💾 BEFORE SAVE: Database has 3533 jobs
[2025-12-03T23:58:17.987Z] [BOT] 💾 Saved 3533 posted jobs to database
[2025-12-03T23:58:17.987Z] [BOT] ✅ Verified: Database file contains 3533 jobs
[2025-12-03T23:58:20.988Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-03T23:58:20.988Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T23:58:21.177Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-03T23:58:22.872Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:58:24.372Z] [BOT] 💾 BEFORE SAVE: Database has 3534 jobs
[2025-12-03T23:58:24.375Z] [BOT] 💾 Saved 3534 posted jobs to database
✅ Verified: Database file contains 3534 jobs
[2025-12-03T23:58:24.375Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T23:58:24.601Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T23:58:26.321Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T23:58:27.821Z] [BOT] 💾 BEFORE SAVE: Database has 3535 jobs
[2025-12-03T23:58:27.827Z] [BOT] 💾 Saved 3535 posted jobs to database
✅ Verified: Database file contains 3535 jobs
[2025-12-03T23:58:30.827Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-12-03T23:58:30.827Z] [BOT] 📍 [ROUTING] "Design Standard Tech" @ ORG_85937e82 Inc.
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-03T23:58:31.023Z] [BOT] ✅ Created forum post: 🏢 Design Standard Tech @ ORG_85937e82 Inc. in #🩺・healthcare-jobs
  ✅ Industry: Design Standard Tech @ ORG_85937e82 Inc.
[2025-12-03T23:58:32.893Z] [BOT] ✅ Created forum post: 🏢 Design Standard Tech @ ORG_85937e82 Inc. in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:58:34.393Z] [BOT] 💾 BEFORE SAVE: Database has 3536 jobs
[2025-12-03T23:58:34.396Z] [BOT] 💾 Saved 3536 posted jobs to database
[2025-12-03T23:58:34.397Z] [BOT] ✅ Verified: Database file contains 3536 jobs
📍 [ROUTING] "Ion Exchange Development Technician" @ ORG_540647baing
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-03T23:58:34.527Z] [BOT] ✅ Created forum post: 🏢 Ion Exchange Development Technician @ ORG_540647baing in #🩺・healthcare-jobs
  ✅ Industry: Ion Exchange Development Technician @ ORG_540647baing
[2025-12-03T23:58:36.179Z] [BOT] ✅ Created forum post: 🏢 Ion Exchange Development Technician @ ORG_540647baing in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-03T23:58:37.679Z] [BOT] 💾 BEFORE SAVE: Database has 3537 jobs
[2025-12-03T23:58:37.682Z] [BOT] 💾 Saved 3537 posted jobs to database
[2025-12-03T23:58:37.682Z] [BOT] ✅ Verified: Database file contains 3537 jobs
[2025-12-03T23:58:40.682Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-03T23:58:40.683Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_15a5b314 Mellon University
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-03T23:58:40.913Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #📣・marketing-jobs
[2025-12-03T23:58:40.914Z] [BOT] ✅ Industry: Research Assistant @ ORG_15a5b314 Mellon University
[2025-12-03T23:58:42.613Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #💻・remote-usa
[2025-12-03T23:58:42.613Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:58:44.114Z] [BOT] 💾 BEFORE SAVE: Database has 3538 jobs
[2025-12-03T23:58:44.118Z] [BOT] 💾 Saved 3538 posted jobs to database
✅ Verified: Database file contains 3538 jobs
[2025-12-03T23:58:47.117Z] [BOT] 🎉 Posting complete! Successfully posted: 23, Failed: 0
[2025-12-03T23:58:47.119Z] [BOT] ✅ Loaded pending queue: 35 total (0 pending, 35 enriched, 0 posted)
[2025-12-03T23:58:47.122Z] [BOT] ✅ Saved pending queue: 35 total (0 pending, 9 enriched, 26 posted)
[2025-12-03T23:58:47.122Z] [BOT] 📋 Updated queue: marked 26 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T23:58:47.159Z] [BOT] 📂 Loaded 15 existing routing entries
[2025-12-03T23:58:47.196Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 23
   Total entries: 38
   Timestamp: 2025-12-03T23:58:47.196Z
[2025-12-03T23:58:49.207Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*