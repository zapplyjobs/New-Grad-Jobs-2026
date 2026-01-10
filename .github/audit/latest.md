# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T01:14:55.583Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 11
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T01:14:02.602Z] ========================================
[2026-01-10T01:14:02.604Z] Discord Bot Execution Log
[2026-01-10T01:14:02.604Z] Environment: GitHub Actions
[2026-01-10T01:14:02.604Z] Node Version: v20.19.6
[2026-01-10T01:14:02.604Z] ========================================
[2026-01-10T01:14:02.604Z] Environment Variables Check:
[2026-01-10T01:14:02.604Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T01:14:02.604Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-10T01:14:02.605Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-10T01:14:02.605Z] 
Multi-Channel Configuration:
[2026-01-10T01:14:02.605Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.605Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-10T01:14:02.606Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-10T01:14:02.606Z] 
Data Files Check:
[2026-01-10T01:14:02.607Z] .github/data/new_jobs.json: ✅ Exists (10 items, 113879 bytes)
[2026-01-10T01:14:02.612Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 769306 bytes)
[2026-01-10T01:14:02.612Z] 
========================================
[2026-01-10T01:14:02.612Z] Starting Enhanced Discord Bot...
[2026-01-10T01:14:02.612Z] ========================================
[2026-01-10T01:14:03.138Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-10T01:14:05.382Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T01:14:05.383Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-10T01:14:05.383Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-10T01:14:05.395Z] [BOT] ✅ Loaded pending queue: 250 total (230 pending, 20 enriched, 0 posted)
[2026-01-10T01:14:05.395Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor at Nextdoor
[2026-01-10T01:14:05.397Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-10T01:14:05.397Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-10T01:14:05.397Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-10T01:14:05.397Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
[2026-01-10T01:14:05.398Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-10T01:14:05.398Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
[2026-01-10T01:14:05.398Z] [BOT] ⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-10T01:14:05.398Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
[2026-01-10T01:14:05.398Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T01:14:05.399Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-10T01:14:05.399Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
[2026-01-10T01:14:05.399Z] [BOT] ⏭️  Skipping duplicate: JID_73356eb6 (posted within 7 days)
[2026-01-10T01:14:05.399Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Entry at Jerry
📬 Found 9 new jobs (11 already posted)...
[2026-01-10T01:14:05.399Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2026-01-10T01:14:05.400Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-10T01:14:05.400Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-10T01:14:05.400Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-10T01:14:05.404Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-10T01:14:05.405Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor" @ ORG_ae438873
[2026-01-10T01:14:05.405Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-10T01:14:05.422Z] [BOT ERROR] (node:3021) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T01:14:05.588Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873 in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873
[2026-01-10T01:14:07.535Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-10T01:14:09.036Z] [BOT] 💾 Marked as posted: Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873 (instance #1)
[2026-01-10T01:14:09.037Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-10T01:14:09.038Z] [BOT] ✅ No jobs to archive (all 1502 jobs within 7-day window)
[2026-01-10T01:14:09.053Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:09.054Z] [BOT] 📍 [ROUTING] "Product Engineer - Multiple Levels Available" @ ORG_f5b4b427 Insurance Company
[2026-01-10T01:14:09.055Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-10T01:14:09.335Z] [BOT] ✅ Created forum post: 🏢 Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company in #🤖・ai-jobs
  ✅ Industry: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company
[2026-01-10T01:14:11.041Z] [BOT] ✅ Created forum post: 🏢 Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-10T01:14:12.543Z] [BOT] 💾 Marked as posted: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company (instance #1)
[2026-01-10T01:14:12.543Z] [BOT] 💾 BEFORE ARCHIVING: 1503 jobs in database
[2026-01-10T01:14:12.544Z] [BOT] ✅ No jobs to archive (all 1503 jobs within 7-day window)
[2026-01-10T01:14:12.555Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
[2026-01-10T01:14:12.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:12.556Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-10T01:14:12.556Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-10T01:14:12.556Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch, nonTechMatch (using ai)
[2026-01-10T01:14:12.875Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
  ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-10T01:14:14.565Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🏙️・san-bruno
  ✅ Location: 🏙️・san-bruno
[2026-01-10T01:14:16.066Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-10T01:14:16.066Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-10T01:14:16.067Z] [BOT] ✅ No jobs to archive (all 1504 jobs within 7-day window)
[2026-01-10T01:14:16.076Z] [BOT] 💾 Saved posted_jobs.json: 1504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:16.077Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starshield" @ ORG_afd623b1
[2026-01-10T01:14:16.078Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-10T01:14:16.275Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Full Stack Software Engineer - Starshield @ ORG_afd623b1
[2026-01-10T01:14:17.962Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starshield @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-10T01:14:19.464Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Starshield @ ORG_afd623b1 (instance #1)
[2026-01-10T01:14:19.465Z] [BOT] 💾 BEFORE ARCHIVING: 1505 jobs in database
[2026-01-10T01:14:19.466Z] [BOT] ✅ No jobs to archive (all 1505 jobs within 7-day window)
[2026-01-10T01:14:19.477Z] [BOT] 💾 Saved posted_jobs.json: 1505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:22.477Z] [BOT] 📌 Posting 2 jobs to #📊・JID_9910249a
[2026-01-10T01:14:22.478Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Claude Experiences" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-10T01:14:22.721Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Claude Experiences @ anthropic in #📊・JID_9910249a
  ✅ Industry: Technical Program Manager, Claude Experiences @ anthropic
[2026-01-10T01:14:24.468Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Claude Experiences @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-10T01:14:25.968Z] [BOT] 💾 Marked as posted: Technical Program Manager, Claude Experiences @ anthropic (instance #1)
[2026-01-10T01:14:25.969Z] [BOT] 💾 BEFORE ARCHIVING: 1506 jobs in database
[2026-01-10T01:14:25.970Z] [BOT] ✅ No jobs to archive (all 1506 jobs within 7-day window)
[2026-01-10T01:14:25.979Z] [BOT] 💾 Saved posted_jobs.json: 1506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:25.980Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Launches" @ anthropic
[2026-01-10T01:14:25.980Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-10T01:14:26.332Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Launches @ anthropic in #📊・JID_9910249a
  ✅ Industry: Technical Program Manager, Launches @ anthropic
[2026-01-10T01:14:28.293Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Launches @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-10T01:14:29.794Z] [BOT] 💾 Marked as posted: Technical Program Manager, Launches @ anthropic (instance #1)
[2026-01-10T01:14:29.794Z] [BOT] 💾 BEFORE ARCHIVING: 1507 jobs in database
[2026-01-10T01:14:29.795Z] [BOT] ✅ No jobs to archive (all 1507 jobs within 7-day window)
[2026-01-10T01:14:29.805Z] [BOT] 💾 Saved posted_jobs.json: 1507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:32.806Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-10T01:14:32.806Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Multiple Teams" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-10T01:14:32.806Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T01:14:33.005Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Multiple Teams @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-10T01:14:33.005Z] [BOT] ✅ Industry: Software Engineer 2 - Multiple Teams @ ORG_b344d80e Travelers Companies
[2026-01-10T01:14:34.706Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Multiple Teams @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-10T01:14:34.706Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-10T01:14:36.208Z] [BOT] 💾 Marked as posted: Software Engineer 2 - Multiple Teams @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-10T01:14:36.208Z] [BOT] 💾 BEFORE ARCHIVING: 1508 jobs in database
[2026-01-10T01:14:36.209Z] [BOT] ✅ No jobs to archive (all 1508 jobs within 7-day window)
[2026-01-10T01:14:36.219Z] [BOT] 💾 Saved posted_jobs.json: 1508 active jobs
[2026-01-10T01:14:36.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:39.221Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-10T01:14:39.221Z] [BOT] 📍 [ROUTING] "Technician" @ NV5 Global
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-10T01:14:39.447Z] [BOT] ✅ Created forum post: 🏢 Technician @ NV5 Global in #📣・marketing-jobs
  ✅ Industry: Technician @ NV5 Global
[2026-01-10T01:14:41.314Z] [BOT] ✅ Created forum post: 🏢 Technician @ NV5 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-10T01:14:42.815Z] [BOT] 💾 Marked as posted: Technician @ NV5 Global (instance #1)
[2026-01-10T01:14:42.815Z] [BOT] 💾 BEFORE ARCHIVING: 1509 jobs in database
[2026-01-10T01:14:42.817Z] [BOT] ✅ No jobs to archive (all 1509 jobs within 7-day window)
[2026-01-10T01:14:42.828Z] [BOT] 💾 Saved posted_jobs.json: 1509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:45.829Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-10T01:14:45.829Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_05947b7b
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-10T01:14:45.829Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-10T01:14:46.451Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_05947b7b in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_05947b7b
[2026-01-10T01:14:48.121Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_05947b7b in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-10T01:14:49.622Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_05947b7b (instance #1)
[2026-01-10T01:14:49.622Z] [BOT] 💾 BEFORE ARCHIVING: 1510 jobs in database
[2026-01-10T01:14:49.623Z] [BOT] ✅ No jobs to archive (all 1510 jobs within 7-day window)
[2026-01-10T01:14:49.634Z] [BOT] 💾 Saved posted_jobs.json: 1510 active jobs
[2026-01-10T01:14:49.634Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T01:14:52.634Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-10T01:14:52.634Z] [BOT] ⏭️  Skipping duplicate: JID_b140a081 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
[2026-01-10T01:14:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
[2026-01-10T01:14:52.655Z] [BOT] ✅ Loaded pending queue: 250 total (230 pending, 20 enriched, 0 posted)
[2026-01-10T01:14:52.672Z] [BOT] ✅ Saved pending queue: 250 total (230 pending, 11 enriched, 9 posted)
[2026-01-10T01:14:52.672Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-10T01:14:52.729Z] [BOT] 📂 Loaded 2527 existing routing entries
[2026-01-10T01:14:52.786Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 2536
[2026-01-10T01:14:52.786Z] [BOT] Timestamp: 2026-01-10T01:14:52.774Z
[2026-01-10T01:14:52.787Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
[2026-01-10T01:14:52.787Z] [BOT] Total attempts: 29
   Successful: 18
   Failed: 0
[2026-01-10T01:14:52.787Z] [BOT] Skipped: 11
[2026-01-10T01:14:52.787Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 11
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 3 posts
     3. #📊・JID_9910249a: 2 posts
     4. #💻・remote-usa: 2 posts
[2026-01-10T01:14:52.787Z] [BOT] 5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-10T01:14:54.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3021) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*