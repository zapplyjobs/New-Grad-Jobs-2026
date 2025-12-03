# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T23:51:58.648Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 15
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T23:50:43.265Z] ========================================
[2025-12-03T23:50:43.267Z] Discord Bot Execution Log
[2025-12-03T23:50:43.267Z] Environment: GitHub Actions
[2025-12-03T23:50:43.267Z] Node Version: v20.19.6
[2025-12-03T23:50:43.267Z] ========================================
[2025-12-03T23:50:43.267Z] Environment Variables Check:
[2025-12-03T23:50:43.267Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T23:50:43.267Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.267Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T23:50:43.267Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T23:50:43.267Z] 
Multi-Channel Configuration:
[2025-12-03T23:50:43.267Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T23:50:43.268Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T23:50:43.268Z] 
Data Files Check:
[2025-12-03T23:50:43.269Z] .github/data/new_jobs.json: ✅ Exists (21 items, 115322 bytes)
[2025-12-03T23:50:43.271Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333676 bytes)
[2025-12-03T23:50:43.271Z] 
========================================
[2025-12-03T23:50:43.271Z] Starting Enhanced Discord Bot...
[2025-12-03T23:50:43.271Z] ========================================
[2025-12-03T23:50:49.564Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T23:50:49.565Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T23:50:49.565Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T23:50:49.565Z] [BOT] 📦 Exporting 21 jobs to encrypted JSON...
[2025-12-03T23:50:49.654Z] [BOT] ✅ Export complete: Added 0, Skipped 21, Total 21
[2025-12-03T23:50:49.655Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T23:50:49.656Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-12-03T23:50:49.656Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T23:50:49.656Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T23:50:49.656Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T23:50:49.657Z] [BOT] 📬 Found 15 new jobs (6 already posted)...
[2025-12-03T23:50:49.657Z] [BOT] 📋 After blacklist filter: 15 jobs (0 blacklisted)
[2025-12-03T23:50:49.657Z] [BOT] 📋 After title+company+location dedup: 15 unique jobs to post
📤 Posting 15 jobs...
[2025-12-03T23:50:49.657Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T23:50:49.660Z] [BOT] 📌 Posting 13 jobs to #💻・tech-jobs
[2025-12-03T23:50:49.661Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_26f9a186
   Category: TECH (matched: "software")
[2025-12-03T23:50:49.661Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:50:49.666Z] [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T23:50:50.178Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_26f9a186 in #💻・tech-jobs
[2025-12-03T23:50:50.178Z] [BOT] ✅ Industry: Software Engineer @ ORG_26f9a186
[2025-12-03T23:50:52.077Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_26f9a186 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T23:50:53.579Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T23:50:53.579Z] [BOT] 📦 FIRST-TIME ARCHIVE: Bootstrapping with 1500 jobs
📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-03T23:50:53.580Z] [BOT] 📦 Archiving 1500 oldest jobs to 2025-12 archive...
[2025-12-03T23:50:53.582Z] [BOT] ✅ Archive verified: 1500 total jobs in 2025-12
[2025-12-03T23:50:53.583Z] [BOT] 💾 Active database now has 3501 jobs
[2025-12-03T23:50:53.585Z] [BOT] 💾 Saved 3501 posted jobs to database
[2025-12-03T23:50:53.586Z] [BOT] ✅ Verified: Database file contains 3501 jobs
📍 [ROUTING] "Software Development Engineer" @ ORG_b3069556
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:50:54.086Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_b3069556 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_b3069556
[2025-12-03T23:50:55.833Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_b3069556 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T23:50:57.334Z] [BOT] 💾 BEFORE SAVE: Database has 3502 jobs
[2025-12-03T23:50:57.337Z] [BOT] 💾 Saved 3502 posted jobs to database
[2025-12-03T23:50:57.337Z] [BOT] ✅ Verified: Database file contains 3502 jobs
📍 [ROUTING] "Business Intelligence Developer" @ Auto-Owners Insurance
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:50:57.743Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・tech-jobs
  ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2025-12-03T23:50:59.450Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:51:00.951Z] [BOT] 💾 BEFORE SAVE: Database has 3503 jobs
[2025-12-03T23:51:00.964Z] [BOT] 💾 Saved 3503 posted jobs to database
✅ Verified: Database file contains 3503 jobs
[2025-12-03T23:51:00.964Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_b0c42a00
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:01.168Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b0c42a00 in #💻・tech-jobs
  ✅ Industry: Data Scientist @ ORG_b0c42a00
[2025-12-03T23:51:03.021Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b0c42a00 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-03T23:51:04.522Z] [BOT] 💾 BEFORE SAVE: Database has 3504 jobs
[2025-12-03T23:51:04.525Z] [BOT] 💾 Saved 3504 posted jobs to database
[2025-12-03T23:51:04.526Z] [BOT] ✅ Verified: Database file contains 3504 jobs
📍 [ROUTING] "Software Engineer 1 - Core Services" @ ORG_75a61ddb Forwarding Worldwide
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:04.890Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Core Services @ ORG_75a61ddb Forwarding Worldwide in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Core Services @ ORG_75a61ddb Forwarding Worldwide
[2025-12-03T23:51:06.732Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Core Services @ ORG_75a61ddb Forwarding Worldwide in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:08.233Z] [BOT] 💾 BEFORE SAVE: Database has 3505 jobs
[2025-12-03T23:51:08.236Z] [BOT] 💾 Saved 3505 posted jobs to database
[2025-12-03T23:51:08.236Z] [BOT] ✅ Verified: Database file contains 3505 jobs
📍 [ROUTING] "Software Engineer - Full Stack" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:08.426Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Full Stack @ ORG_0bbe3cb1
[2025-12-03T23:51:10.247Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack @ ORG_0bbe3cb1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-03T23:51:11.748Z] [BOT] 💾 BEFORE SAVE: Database has 3506 jobs
[2025-12-03T23:51:11.751Z] [BOT] 💾 Saved 3506 posted jobs to database
[2025-12-03T23:51:11.751Z] [BOT] ✅ Verified: Database file contains 3506 jobs
📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:12.637Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_c7bac469
[2025-12-03T23:51:14.404Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-03T23:51:15.905Z] [BOT] 💾 BEFORE SAVE: Database has 3507 jobs
[2025-12-03T23:51:15.909Z] [BOT] 💾 Saved 3507 posted jobs to database
✅ Verified: Database file contains 3507 jobs
[2025-12-03T23:51:15.909Z] [BOT] 📍 [ROUTING] "AI Researcher" @ ORG_313e7c50 Holdings
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:16.402Z] [BOT] ✅ Created forum post: 🏢 AI Researcher @ ORG_313e7c50 Holdings in #💻・tech-jobs
  ✅ Industry: AI Researcher @ ORG_313e7c50 Holdings
[2025-12-03T23:51:18.124Z] [BOT] ✅ Created forum post: 🏢 AI Researcher @ ORG_313e7c50 Holdings in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:19.625Z] [BOT] 💾 BEFORE SAVE: Database has 3508 jobs
[2025-12-03T23:51:19.629Z] [BOT] 💾 Saved 3508 posted jobs to database
[2025-12-03T23:51:19.629Z] [BOT] ✅ Verified: Database file contains 3508 jobs
[2025-12-03T23:51:19.629Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Graduate 2026 - Deep Learning Libraries" @ ORG_0890f456
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:19.841Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate 2026 - Deep Learning Libraries @ ORG_0890f456 in #💻・tech-jobs
[2025-12-03T23:51:19.841Z] [BOT] ✅ Industry: Software Engineer – New College Graduate 2026 - Deep Learning Libraries @ ORG_0890f456
[2025-12-03T23:51:21.682Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate 2026 - Deep Learning Libraries @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:23.183Z] [BOT] 💾 BEFORE SAVE: Database has 3509 jobs
[2025-12-03T23:51:23.185Z] [BOT] 💾 Saved 3509 posted jobs to database
✅ Verified: Database file contains 3509 jobs
[2025-12-03T23:51:23.186Z] [BOT] 📍 [ROUTING] "Research Scientist - Efficient Deep Learning" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:23.401Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Efficient Deep Learning @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Research Scientist - Efficient Deep Learning @ ORG_0890f456
[2025-12-03T23:51:25.195Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Efficient Deep Learning @ ORG_0890f456 in #🌉・san-francisco
[2025-12-03T23:51:25.196Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:26.695Z] [BOT] 💾 BEFORE SAVE: Database has 3510 jobs
[2025-12-03T23:51:26.698Z] [BOT] 💾 Saved 3510 posted jobs to database
[2025-12-03T23:51:26.699Z] [BOT] ✅ Verified: Database file contains 3510 jobs
[2025-12-03T23:51:26.699Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:26.995Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
[2025-12-03T23:51:26.995Z] [BOT] ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T23:51:30.115Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
[2025-12-03T23:51:30.115Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:51:31.615Z] [BOT] 💾 BEFORE SAVE: Database has 3511 jobs
[2025-12-03T23:51:31.618Z] [BOT] 💾 Saved 3511 posted jobs to database
[2025-12-03T23:51:31.618Z] [BOT] ✅ Verified: Database file contains 3511 jobs
[2025-12-03T23:51:31.618Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:31.911Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T23:51:31.911Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T23:51:33.632Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-03T23:51:33.632Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:35.133Z] [BOT] 💾 BEFORE SAVE: Database has 3512 jobs
[2025-12-03T23:51:35.137Z] [BOT] 💾 Saved 3512 posted jobs to database
[2025-12-03T23:51:35.137Z] [BOT] ✅ Verified: Database file contains 3512 jobs
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T23:51:35.404Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-03T23:51:35.404Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T23:51:37.170Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T23:51:38.670Z] [BOT] 💾 BEFORE SAVE: Database has 3513 jobs
[2025-12-03T23:51:38.673Z] [BOT] 💾 Saved 3513 posted jobs to database
[2025-12-03T23:51:38.674Z] [BOT] ✅ Verified: Database file contains 3513 jobs
[2025-12-03T23:51:41.673Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T23:51:41.674Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T23:51:41.924Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Researcher @ ORG_478e100e University
[2025-12-03T23:51:43.661Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #💻・remote-usa
[2025-12-03T23:51:43.661Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T23:51:45.161Z] [BOT] 💾 BEFORE SAVE: Database has 3514 jobs
[2025-12-03T23:51:45.165Z] [BOT] 💾 Saved 3514 posted jobs to database
[2025-12-03T23:51:45.165Z] [BOT] ✅ Verified: Database file contains 3514 jobs
[2025-12-03T23:51:48.166Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-03T23:51:48.166Z] [BOT] 📍 [ROUTING] "Post Doc LLM for Clinical Trials" @ ORG_3013b18f & Johnson
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-03T23:51:48.773Z] [BOT] ✅ Created forum post: 🏢 Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson in #🩺・healthcare-jobs
  ✅ Industry: Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson
[2025-12-03T23:51:50.517Z] [BOT] ✅ Created forum post: 🏢 Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T23:51:52.018Z] [BOT] 💾 BEFORE SAVE: Database has 3515 jobs
[2025-12-03T23:51:52.021Z] [BOT] 💾 Saved 3515 posted jobs to database
[2025-12-03T23:51:52.022Z] [BOT] ✅ Verified: Database file contains 3515 jobs
[2025-12-03T23:51:55.023Z] [BOT] 🎉 Posting complete! Successfully posted: 15, Failed: 0
[2025-12-03T23:51:55.024Z] [BOT] 📚 Loaded archive: 2025-12 (1500 jobs)
[2025-12-03T23:51:55.025Z] [BOT] ✅ Loaded pending queue: 21 total (0 pending, 21 enriched, 0 posted)
[2025-12-03T23:51:55.027Z] [BOT] ✅ Saved pending queue: 21 total (0 pending, 6 enriched, 15 posted)
[2025-12-03T23:51:55.027Z] [BOT] 📋 Updated queue: marked 15 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T23:51:55.064Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 15
   Total entries: 15
   Timestamp: 2025-12-03T23:51:55.064Z
[2025-12-03T23:51:57.077Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*