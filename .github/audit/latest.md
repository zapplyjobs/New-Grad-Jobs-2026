# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T20:51:03.716Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T20:50:33.104Z] ========================================
[2026-01-29T20:50:33.106Z] Discord Bot Execution Log
[2026-01-29T20:50:33.106Z] Environment: GitHub Actions
[2026-01-29T20:50:33.106Z] Node Version: v20.20.0
[2026-01-29T20:50:33.106Z] ========================================
[2026-01-29T20:50:33.106Z] Environment Variables Check:
[2026-01-29T20:50:33.106Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T20:50:33.106Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.106Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T20:50:33.106Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T20:50:33.106Z] 
Multi-Channel Configuration:
[2026-01-29T20:50:33.106Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T20:50:33.107Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T20:50:33.107Z] 
Data Files Check:
[2026-01-29T20:50:33.108Z] .github/data/new_jobs.json: ✅ Exists (10 items, 82990 bytes)
[2026-01-29T20:50:33.113Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 658141 bytes)
[2026-01-29T20:50:33.113Z] 
========================================
[2026-01-29T20:50:33.113Z] Starting Enhanced Discord Bot...
[2026-01-29T20:50:33.113Z] ========================================
[2026-01-29T20:50:33.641Z] [BOT] ✅ Loaded V2 database: 119 jobs
[2026-01-29T20:50:34.325Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T20:50:34.325Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T20:50:34.326Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T20:50:34.444Z] [BOT] ✅ Loaded pending queue: 2881 total (2741 pending, 50 enriched, 90 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, Product Backend (8+ YOE) at airtable
[2026-01-29T20:50:34.448Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T20:50:34.448Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-01-29T20:50:34.448Z] [BOT] 🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-01-29T20:50:34.449Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-01-29T20:50:34.449Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-01-29T20:50:34.449Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-01-29T20:50:34.449Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Engineering Manager, UI Claude Consumer Products at anthropic
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
[2026-01-29T20:50:34.551Z] [BOT] ✅ Loaded pending queue: 2881 total (2741 pending, 50 enriched, 90 posted)
[2026-01-29T20:50:34.719Z] [BOT] ✅ Saved pending queue: 2868 total (2741 pending, 37 enriched, 90 posted)
🗑️ Removed 13 blacklisted jobs from pending queue
[2026-01-29T20:50:34.719Z] [BOT] 📋 After blacklist filter: 37 jobs (13 blacklisted)
📋 After data quality filter: 37 jobs (0 invalid)
[2026-01-29T20:50:34.720Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-29T20:50:34.720Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
[2026-01-29T20:50:34.721Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T20:50:34.724Z] [BOT] 📌 Posting 4 jobs to #📊・JID_fb739488
[2026-01-29T20:50:34.725Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (8+ YOE)" @ airtable
[2026-01-29T20:50:34.725Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:50:34.742Z] [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T20:50:35.190Z] [BOT] ✅ Posted message: Software Engineer, Product Backend (8+ YOE) @ airtable in #📊・JID_fb739488
[2026-01-29T20:50:35.190Z] [BOT] ✅ Industry: Software Engineer, Product Backend (8+ YOE) @ airtable
[2026-01-29T20:50:35.190Z] [BOT] 💾 Added channel posting: Software Engineer, Product Backend (8+ YOE) @ airtable → category channel (1 total channels)
[2026-01-29T20:50:35.191Z] [BOT] 💾 BEFORE MERGE: 120 jobs in memory (cached)
[2026-01-29T20:50:35.193Z] [BOT] ✅ Loaded V2 database: 119 jobs
[2026-01-29T20:50:35.193Z] [BOT] 💾 DISK STATE: 119 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=120
[2026-01-29T20:50:35.194Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:35.194Z] [BOT] 💾 AFTER MERGE: 120 jobs (merged disk + memory)
[2026-01-29T20:50:35.194Z] [BOT] ✅ No jobs to archive (all 120 jobs within 7-day window)
[2026-01-29T20:50:35.207Z] [BOT] 💾 Saved posted_jobs.json: 120 active jobs
[2026-01-29T20:50:35.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:36.709Z] [BOT] 📍 [ROUTING] "Instructional Assistant - Data Engineer" @ ORG_89ac4dc9 Scholas
[2026-01-29T20:50:36.709Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:50:37.820Z] [BOT] ✅ Posted message: Instructional Assistant - Data Engineer @ ORG_89ac4dc9 Scholas in #📊・JID_fb739488
[2026-01-29T20:50:37.821Z] [BOT] ✅ Industry: Instructional Assistant - Data Engineer @ ORG_89ac4dc9 Scholas
💾 Added channel posting: Instructional Assistant - Data Engineer @ ORG_89ac4dc9 Scholas → category channel (1 total channels)
[2026-01-29T20:50:37.821Z] [BOT] 💾 BEFORE MERGE: 121 jobs in memory (cached)
[2026-01-29T20:50:37.823Z] [BOT] ✅ Loaded V2 database: 120 jobs
💾 DISK STATE: 120 jobs on disk
[2026-01-29T20:50:37.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=121
[2026-01-29T20:50:37.824Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 121 jobs (merged disk + memory)
[2026-01-29T20:50:37.824Z] [BOT] ✅ No jobs to archive (all 121 jobs within 7-day window)
[2026-01-29T20:50:37.832Z] [BOT] 💾 Saved posted_jobs.json: 121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:39.333Z] [BOT] 📍 [ROUTING] "Data Science Analyst 1 - Data Analytics and Business Intelligence" @ ORG_b344d80e City of Dallas
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T20:50:39.334Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:50:39.606Z] [BOT] ✅ Posted message: Data Science Analyst 1 - Data Analytics and Business Intelligence @ ORG_b344d80e City of Dallas in #📊・JID_fb739488
  ✅ Industry: Data Science Analyst 1 - Data Analytics and Business Intelligence @ ORG_b344d80e City of Dallas
[2026-01-29T20:50:39.606Z] [BOT] 💾 Added channel posting: Data Science Analyst 1 - Data Analytics and Business Intelligence @ ORG_b344d80e City of Dallas → category channel (1 total channels)
💾 BEFORE MERGE: 122 jobs in memory (cached)
[2026-01-29T20:50:39.610Z] [BOT] ✅ Loaded V2 database: 121 jobs
💾 DISK STATE: 121 jobs on disk
[2026-01-29T20:50:39.610Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=122
[2026-01-29T20:50:39.610Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:39.610Z] [BOT] 💾 AFTER MERGE: 122 jobs (merged disk + memory)
[2026-01-29T20:50:39.610Z] [BOT] ✅ No jobs to archive (all 122 jobs within 7-day window)
[2026-01-29T20:50:39.618Z] [BOT] 💾 Saved posted_jobs.json: 122 active jobs
[2026-01-29T20:50:39.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:41.120Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_692aa04a
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T20:50:41.120Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:50:41.490Z] [BOT] ✅ Posted message: Data Analyst @ ORG_692aa04a in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_692aa04a
[2026-01-29T20:50:41.490Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_692aa04a → category channel (1 total channels)
💾 BEFORE MERGE: 123 jobs in memory (cached)
[2026-01-29T20:50:41.493Z] [BOT] ✅ Loaded V2 database: 122 jobs
💾 DISK STATE: 122 jobs on disk
[2026-01-29T20:50:41.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=123
[2026-01-29T20:50:41.494Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 123 jobs (merged disk + memory)
[2026-01-29T20:50:41.494Z] [BOT] ✅ No jobs to archive (all 123 jobs within 7-day window)
[2026-01-29T20:50:41.503Z] [BOT] 💾 Saved posted_jobs.json: 123 active jobs
[2026-01-29T20:50:41.503Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:46.004Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T20:50:46.005Z] [BOT] 📍 [ROUTING] "Linux System Administrator – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:46.302Z] [BOT] ✅ Posted message: Linux System Administrator – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Linux System Administrator – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2026-01-29T20:50:46.302Z] [BOT] 💾 Added channel posting: Linux System Administrator – Associate or Mid-Level @ ORG_b344d80e Boeing Company → category channel (1 total channels)
💾 BEFORE MERGE: 124 jobs in memory (cached)
[2026-01-29T20:50:46.307Z] [BOT] ✅ Loaded V2 database: 123 jobs
💾 DISK STATE: 123 jobs on disk
[2026-01-29T20:50:46.307Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=124
[2026-01-29T20:50:46.308Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:46.308Z] [BOT] 💾 AFTER MERGE: 124 jobs (merged disk + memory)
[2026-01-29T20:50:46.308Z] [BOT] ✅ No jobs to archive (all 124 jobs within 7-day window)
[2026-01-29T20:50:46.318Z] [BOT] 💾 Saved posted_jobs.json: 124 active jobs
[2026-01-29T20:50:46.318Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:47.820Z] [BOT] 📍 [ROUTING] "Associate Product Data Management Specialist" @ ORG_b344d80e Boeing Company
[2026-01-29T20:50:47.820Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:48.075Z] [BOT] ✅ Posted message: Associate Product Data Management Specialist @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2026-01-29T20:50:48.075Z] [BOT] ✅ Industry: Associate Product Data Management Specialist @ ORG_b344d80e Boeing Company
[2026-01-29T20:50:48.075Z] [BOT] 💾 Added channel posting: Associate Product Data Management Specialist @ ORG_b344d80e Boeing Company → category channel (1 total channels)
💾 BEFORE MERGE: 125 jobs in memory (cached)
[2026-01-29T20:50:48.078Z] [BOT] ✅ Loaded V2 database: 124 jobs
💾 DISK STATE: 124 jobs on disk
[2026-01-29T20:50:48.079Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=125
[2026-01-29T20:50:48.079Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 125 jobs (merged disk + memory)
[2026-01-29T20:50:48.079Z] [BOT] ✅ No jobs to archive (all 125 jobs within 7-day window)
[2026-01-29T20:50:48.088Z] [BOT] 💾 Saved posted_jobs.json: 125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:49.590Z] [BOT] 📍 [ROUTING] "Mechanical Application Engineer" @ ORG_0ddc6ede Systems
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:50.061Z] [BOT] ✅ Posted message: Mechanical Application Engineer @ ORG_0ddc6ede Systems in #💻・tech-jobs
[2026-01-29T20:50:50.061Z] [BOT] ✅ Industry: Mechanical Application Engineer @ ORG_0ddc6ede Systems
💾 Added channel posting: Mechanical Application Engineer @ ORG_0ddc6ede Systems → category channel (1 total channels)
[2026-01-29T20:50:50.061Z] [BOT] 💾 BEFORE MERGE: 126 jobs in memory (cached)
[2026-01-29T20:50:50.064Z] [BOT] ✅ Loaded V2 database: 125 jobs
💾 DISK STATE: 125 jobs on disk
[2026-01-29T20:50:50.064Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=126
[2026-01-29T20:50:50.064Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:50.064Z] [BOT] 💾 AFTER MERGE: 126 jobs (merged disk + memory)
[2026-01-29T20:50:50.065Z] [BOT] ✅ No jobs to archive (all 126 jobs within 7-day window)
[2026-01-29T20:50:50.074Z] [BOT] 💾 Saved posted_jobs.json: 126 active jobs
[2026-01-29T20:50:50.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:51.575Z] [BOT] 📍 [ROUTING] "Engineering Apex" @ ORG_c36a7fd9
[2026-01-29T20:50:51.576Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:51.840Z] [BOT] ✅ Posted message: Engineering Apex @ ORG_c36a7fd9 in #💻・tech-jobs
[2026-01-29T20:50:51.840Z] [BOT] ✅ Industry: Engineering Apex @ ORG_c36a7fd9
💾 Added channel posting: Engineering Apex @ ORG_c36a7fd9 → category channel (1 total channels)
[2026-01-29T20:50:51.841Z] [BOT] 💾 BEFORE MERGE: 127 jobs in memory (cached)
[2026-01-29T20:50:51.843Z] [BOT] ✅ Loaded V2 database: 126 jobs
[2026-01-29T20:50:51.843Z] [BOT] 💾 DISK STATE: 126 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=127
[2026-01-29T20:50:51.844Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:51.844Z] [BOT] 💾 AFTER MERGE: 127 jobs (merged disk + memory)
[2026-01-29T20:50:51.844Z] [BOT] ✅ No jobs to archive (all 127 jobs within 7-day window)
[2026-01-29T20:50:51.852Z] [BOT] 💾 Saved posted_jobs.json: 127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:53.354Z] [BOT] 📍 [ROUTING] "Head of Security Risk" @ anthropic
[2026-01-29T20:50:53.354Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:53.614Z] [BOT] ✅ Posted message: Head of Security Risk @ anthropic in #💻・tech-jobs
[2026-01-29T20:50:53.614Z] [BOT] ✅ Industry: Head of Security Risk @ anthropic
[2026-01-29T20:50:53.614Z] [BOT] 💾 Added channel posting: Head of Security Risk @ anthropic → category channel (1 total channels)
[2026-01-29T20:50:53.615Z] [BOT] 💾 BEFORE MERGE: 128 jobs in memory (cached)
[2026-01-29T20:50:53.618Z] [BOT] ✅ Loaded V2 database: 127 jobs
[2026-01-29T20:50:53.618Z] [BOT] 💾 DISK STATE: 127 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=128
[2026-01-29T20:50:53.618Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:53.619Z] [BOT] 💾 AFTER MERGE: 128 jobs (merged disk + memory)
[2026-01-29T20:50:53.619Z] [BOT] ✅ No jobs to archive (all 128 jobs within 7-day window)
[2026-01-29T20:50:53.628Z] [BOT] 💾 Saved posted_jobs.json: 128 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:55.129Z] [BOT] 📍 [ROUTING] "Engineering Associate - Middleware & Automation" @ ORG_332e04b7 Fargo
[2026-01-29T20:50:55.130Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:50:55.339Z] [BOT] ✅ Posted message: Engineering Associate - Middleware & Automation @ ORG_332e04b7 Fargo in #💻・tech-jobs
[2026-01-29T20:50:55.339Z] [BOT] ✅ Industry: Engineering Associate - Middleware & Automation @ ORG_332e04b7 Fargo
[2026-01-29T20:50:55.340Z] [BOT] 💾 Added channel posting: Engineering Associate - Middleware & Automation @ ORG_332e04b7 Fargo → category channel (1 total channels)
💾 BEFORE MERGE: 129 jobs in memory (cached)
[2026-01-29T20:50:55.343Z] [BOT] ✅ Loaded V2 database: 128 jobs
[2026-01-29T20:50:55.343Z] [BOT] 💾 DISK STATE: 128 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=129
[2026-01-29T20:50:55.343Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:50:55.344Z] [BOT] 💾 AFTER MERGE: 129 jobs (merged disk + memory)
[2026-01-29T20:50:55.344Z] [BOT] ✅ No jobs to archive (all 129 jobs within 7-day window)
[2026-01-29T20:50:55.354Z] [BOT] 💾 Saved posted_jobs.json: 129 active jobs
[2026-01-29T20:50:55.354Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:50:59.856Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "96f3540af7f35f6e"
[2026-01-29T20:50:59.857Z] [BOT] ⏭️  Skipping duplicate: JID_ebbf5c6f (posted within 7 days)
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0094e4df..." not found, but found as SHA256 "63c6b7541802d5d5"
⏭️  Skipping duplicate: JID_61705302 (posted within 7 days)
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "1aeb8dc803fcc165"
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_729cb6b1-_jr2025479786-1 (posted within 7 days)
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "1213646f2891d448"
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_8bd70e95-specialist_jr2026492824-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e318f851..." not found, but found as SHA256 "ed9b85abcf061dd5"
[2026-01-29T20:50:59.857Z] [BOT] ⏭️  Skipping duplicate: JID_e05a4aca-_26-26724 (posted within 7 days)
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63b72f5e..." not found, but found as SHA256 "c36424dc400618af"
⏭️  Skipping duplicate: JID_63b72f5e (posted within 7 days)
[2026-01-29T20:50:59.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0caac06a..." not found, but found as SHA256 "e6b3d0dbea313704"
⏭️  Skipping duplicate: JID_0caac06a (posted within 7 days)
[2026-01-29T20:50:59.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "784f03f1e7ed1d03"
⏭️  Skipping duplicate: JID_36eacaa5 (posted within 7 days)
[2026-01-29T20:50:59.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "76aef3383dd3ecc0"
[2026-01-29T20:50:59.858Z] [BOT] ⏭️  Skipping duplicate: JID_bde88543-automation_r-517729-1 (posted within 7 days)
[2026-01-29T20:50:59.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45633352..." not found, but found as SHA256 "304604f4e09b048f"
[2026-01-29T20:50:59.858Z] [BOT] ⏭️  Skipping duplicate: JID_bbe43c26-analyst_r104140-1 (posted within 7 days)
[2026-01-29T20:50:59.965Z] [BOT] ✅ Loaded pending queue: 2868 total (2741 pending, 37 enriched, 90 posted)
[2026-01-29T20:51:00.146Z] [BOT] ✅ Saved pending queue: 2868 total (2741 pending, 27 enriched, 100 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T20:51:00.146Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T20:51:00.248Z] [BOT] 📂 Loaded 10181 existing routing entries
[2026-01-29T20:51:00.352Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T20:51:00.352Z] [BOT] Total entries: 10191
   Timestamp: 2026-01-29T20:51:00.308Z
[2026-01-29T20:51:00.353Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T20:51:00.353Z] [BOT] Total attempts: 23
   Successful: 10
   Failed: 0
   Skipped: 13
[2026-01-29T20:51:00.353Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-29T20:51:00.353Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #📊・JID_fb739488: 4 posts
[2026-01-29T20:51:00.353Z] [BOT] [STATS] Channel stats saved
[2026-01-29T20:51:00.353Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 129 jobs in memory (cached)
[2026-01-29T20:51:00.356Z] [BOT] ✅ Loaded V2 database: 129 jobs
[2026-01-29T20:51:00.356Z] [BOT] 💾 DISK STATE: 129 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=129
[2026-01-29T20:51:00.357Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:51:00.357Z] [BOT] 💾 AFTER MERGE: 129 jobs (merged disk + memory)
[2026-01-29T20:51:00.357Z] [BOT] ✅ No jobs to archive (all 129 jobs within 7-day window)
[2026-01-29T20:51:00.365Z] [BOT] 💾 Saved posted_jobs.json: 129 active jobs
[2026-01-29T20:51:00.365Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T20:51:02.392Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*