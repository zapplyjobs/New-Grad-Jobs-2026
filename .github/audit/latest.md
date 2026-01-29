# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T18:54:10.204Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T18:53:35.583Z] ========================================
[2026-01-29T18:53:35.585Z] Discord Bot Execution Log
[2026-01-29T18:53:35.585Z] Environment: GitHub Actions
[2026-01-29T18:53:35.585Z] Node Version: v20.20.0
[2026-01-29T18:53:35.585Z] ========================================
[2026-01-29T18:53:35.585Z] Environment Variables Check:
[2026-01-29T18:53:35.585Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T18:53:35.585Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.585Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T18:53:35.585Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T18:53:35.585Z] 
Multi-Channel Configuration:
[2026-01-29T18:53:35.585Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T18:53:35.586Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T18:53:35.586Z] 
Data Files Check:
[2026-01-29T18:53:35.587Z] .github/data/new_jobs.json: ✅ Exists (10 items, 78487 bytes)
[2026-01-29T18:53:35.589Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 212416 bytes)
[2026-01-29T18:53:35.589Z] 
========================================
[2026-01-29T18:53:35.589Z] Starting Enhanced Discord Bot...
[2026-01-29T18:53:35.589Z] ========================================
[2026-01-29T18:53:36.121Z] [BOT] ✅ Loaded V2 database: 49 jobs
[2026-01-29T18:53:36.600Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T18:53:36.601Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T18:53:36.601Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T18:53:36.720Z] [BOT] ✅ Loaded pending queue: 2880 total (2810 pending, 50 enriched, 20 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startups Ambassador at brex
[2026-01-29T18:53:36.723Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T18:53:36.724Z] [BOT] 🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
[2026-01-29T18:53:36.724Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-01-29T18:53:36.724Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-01-29T18:53:36.724Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-01-29T18:53:36.724Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-01-29T18:53:36.725Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Product Engineer at gusto
[2026-01-29T18:53:36.833Z] [BOT] ✅ Loaded pending queue: 2880 total (2810 pending, 50 enriched, 20 posted)
[2026-01-29T18:53:37.013Z] [BOT] ✅ Saved pending queue: 2869 total (2810 pending, 39 enriched, 20 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-29T18:53:37.013Z] [BOT] 📋 After blacklist filter: 39 jobs (11 blacklisted)
📋 After data quality filter: 39 jobs (0 invalid)
[2026-01-29T18:53:37.014Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-01-29T18:53:37.014Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Sales Recruiter (12-month contract) @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
[2026-01-29T18:53:37.014Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T18:53:37.018Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T18:53:37.019Z] [BOT] 📍 [ROUTING] "Startups Ambassador" @ brex
[2026-01-29T18:53:37.019Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T18:53:37.037Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T18:53:37.213Z] [BOT] ✅ Posted message: Startups Ambassador @ brex in #💰・finance-jobs
  ✅ Industry: Startups Ambassador @ brex
[2026-01-29T18:53:37.213Z] [BOT] 💾 Added channel posting: Startups Ambassador @ brex → category channel (1 total channels)
[2026-01-29T18:53:37.214Z] [BOT] 💾 BEFORE MERGE: 50 jobs in memory (cached)
[2026-01-29T18:53:37.215Z] [BOT] ✅ Loaded V2 database: 49 jobs
💾 DISK STATE: 49 jobs on disk
[2026-01-29T18:53:37.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=50
[2026-01-29T18:53:37.215Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:37.215Z] [BOT] 💾 AFTER MERGE: 50 jobs (merged disk + memory)
[2026-01-29T18:53:37.216Z] [BOT] ✅ No jobs to archive (all 50 jobs within 7-day window)
[2026-01-29T18:53:37.224Z] [BOT] 💾 Saved posted_jobs.json: 50 active jobs
[2026-01-29T18:53:37.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:41.726Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T18:53:41.727Z] [BOT] 📍 [ROUTING] "Research Data Analyst 1" @ Children's Hospital of Philadelphia
[2026-01-29T18:53:41.727Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T18:53:41.727Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T18:53:42.019Z] [BOT] ✅ Posted message: Research Data Analyst 1 @ Children's Hospital of Philadelphia in #📊・JID_fb739488
[2026-01-29T18:53:42.020Z] [BOT] ✅ Industry: Research Data Analyst 1 @ Children's Hospital of Philadelphia
💾 Added channel posting: Research Data Analyst 1 @ Children's Hospital of Philadelphia → category channel (1 total channels)
[2026-01-29T18:53:42.020Z] [BOT] 💾 BEFORE MERGE: 51 jobs in memory (cached)
[2026-01-29T18:53:42.021Z] [BOT] ✅ Loaded V2 database: 50 jobs
[2026-01-29T18:53:42.021Z] [BOT] 💾 DISK STATE: 50 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=51
[2026-01-29T18:53:42.021Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 51 jobs (merged disk + memory)
✅ No jobs to archive (all 51 jobs within 7-day window)
[2026-01-29T18:53:42.025Z] [BOT] 💾 Saved posted_jobs.json: 51 active jobs
[2026-01-29T18:53:42.025Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:46.528Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-29T18:53:46.529Z] [BOT] 📍 [ROUTING] "Software Engineering 1" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:48.607Z] [BOT] ✅ Posted message: Software Engineering 1 @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-29T18:53:48.607Z] [BOT] ✅ Industry: Software Engineering 1 @ ORG_75f04b84
💾 Added channel posting: Software Engineering 1 @ ORG_75f04b84 → category channel (1 total channels)
[2026-01-29T18:53:48.607Z] [BOT] 💾 BEFORE MERGE: 52 jobs in memory (cached)
[2026-01-29T18:53:48.608Z] [BOT] ✅ Loaded V2 database: 51 jobs
[2026-01-29T18:53:48.608Z] [BOT] 💾 DISK STATE: 51 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=52
[2026-01-29T18:53:48.609Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 52 jobs (merged disk + memory)
[2026-01-29T18:53:48.609Z] [BOT] ✅ No jobs to archive (all 52 jobs within 7-day window)
[2026-01-29T18:53:48.614Z] [BOT] 💾 Saved posted_jobs.json: 52 active jobs
[2026-01-29T18:53:48.615Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:50.117Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
[2026-01-29T18:53:50.117Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:50.334Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2026-01-29T18:53:50.334Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_75f04b84 → category channel (1 total channels)
💾 BEFORE MERGE: 53 jobs in memory (cached)
[2026-01-29T18:53:50.336Z] [BOT] ✅ Loaded V2 database: 52 jobs
[2026-01-29T18:53:50.336Z] [BOT] 💾 DISK STATE: 52 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=53
[2026-01-29T18:53:50.336Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:50.336Z] [BOT] 💾 AFTER MERGE: 53 jobs (merged disk + memory)
✅ No jobs to archive (all 53 jobs within 7-day window)
[2026-01-29T18:53:50.341Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
[2026-01-29T18:53:50.341Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:51.842Z] [BOT] 📍 [ROUTING] "Associate Salesforce Development Engineer" @ ORG_0baaf6f2 Family Insurance Group
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:52.101Z] [BOT] ✅ Posted message: Associate Salesforce Development Engineer @ ORG_0baaf6f2 Family Insurance Group in #💻・tech-jobs
[2026-01-29T18:53:52.101Z] [BOT] ✅ Industry: Associate Salesforce Development Engineer @ ORG_0baaf6f2 Family Insurance Group
💾 Added channel posting: Associate Salesforce Development Engineer @ ORG_0baaf6f2 Family Insurance Group → category channel (1 total channels)
💾 BEFORE MERGE: 54 jobs in memory (cached)
[2026-01-29T18:53:52.102Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2026-01-29T18:53:52.103Z] [BOT] 💾 DISK STATE: 53 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=54
[2026-01-29T18:53:52.103Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:52.103Z] [BOT] 💾 AFTER MERGE: 54 jobs (merged disk + memory)
[2026-01-29T18:53:52.103Z] [BOT] ✅ No jobs to archive (all 54 jobs within 7-day window)
[2026-01-29T18:53:52.108Z] [BOT] 💾 Saved posted_jobs.json: 54 active jobs
[2026-01-29T18:53:52.108Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:53.609Z] [BOT] 📍 [ROUTING] "SW Obsolescence Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "engineer/engineering")
[2026-01-29T18:53:53.610Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:53.805Z] [BOT] ✅ Posted message: SW Obsolescence Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-29T18:53:53.805Z] [BOT] ✅ Industry: SW Obsolescence Engineer @ ORG_f3f2248d Grumman
💾 Added channel posting: SW Obsolescence Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
💾 BEFORE MERGE: 55 jobs in memory (cached)
[2026-01-29T18:53:53.806Z] [BOT] ✅ Loaded V2 database: 54 jobs
💾 DISK STATE: 54 jobs on disk
[2026-01-29T18:53:53.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=55
[2026-01-29T18:53:53.807Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:53.807Z] [BOT] 💾 AFTER MERGE: 55 jobs (merged disk + memory)
✅ No jobs to archive (all 55 jobs within 7-day window)
[2026-01-29T18:53:53.812Z] [BOT] 💾 Saved posted_jobs.json: 55 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:55.313Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_6276c45c
   Category: TECH (matched: "software")
[2026-01-29T18:53:55.313Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:55.439Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_6276c45c in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_6276c45c
[2026-01-29T18:53:55.439Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_6276c45c → category channel (1 total channels)
💾 BEFORE MERGE: 56 jobs in memory (cached)
[2026-01-29T18:53:55.440Z] [BOT] ✅ Loaded V2 database: 55 jobs
💾 DISK STATE: 55 jobs on disk
[2026-01-29T18:53:55.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=56
[2026-01-29T18:53:55.440Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:55.440Z] [BOT] 💾 AFTER MERGE: 56 jobs (merged disk + memory)
[2026-01-29T18:53:55.441Z] [BOT] ✅ No jobs to archive (all 56 jobs within 7-day window)
[2026-01-29T18:53:55.445Z] [BOT] 💾 Saved posted_jobs.json: 56 active jobs
[2026-01-29T18:53:55.445Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:57.226Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_6276c45c in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T18:53:57.226Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_6276c45c → location channel (2 total channels)
💾 BEFORE MERGE: 56 jobs in memory (cached)
[2026-01-29T18:53:57.228Z] [BOT] ✅ Loaded V2 database: 56 jobs
💾 DISK STATE: 56 jobs on disk
[2026-01-29T18:53:57.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=56
[2026-01-29T18:53:57.228Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_6276c45c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 56 jobs (merged disk + memory)
[2026-01-29T18:53:57.228Z] [BOT] ✅ No jobs to archive (all 56 jobs within 7-day window)
[2026-01-29T18:53:57.233Z] [BOT] 💾 Saved posted_jobs.json: 56 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:53:58.734Z] [BOT] 📍 [ROUTING] "Associate Engineer - Software" @ T-Mobile
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:53:59.098Z] [BOT] ✅ Posted message: Associate Engineer - Software @ T-Mobile in #💻・tech-jobs
  ✅ Industry: Associate Engineer - Software @ T-Mobile
[2026-01-29T18:53:59.098Z] [BOT] 💾 Added channel posting: Associate Engineer - Software @ T-Mobile → category channel (1 total channels)
[2026-01-29T18:53:59.099Z] [BOT] 💾 BEFORE MERGE: 57 jobs in memory (cached)
[2026-01-29T18:53:59.100Z] [BOT] ✅ Loaded V2 database: 56 jobs
💾 DISK STATE: 56 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=57
[2026-01-29T18:53:59.100Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:53:59.100Z] [BOT] 💾 AFTER MERGE: 57 jobs (merged disk + memory)
✅ No jobs to archive (all 57 jobs within 7-day window)
[2026-01-29T18:53:59.105Z] [BOT] 💾 Saved posted_jobs.json: 57 active jobs
[2026-01-29T18:53:59.105Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:54:00.607Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ T-Mobile
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:54:00.780Z] [BOT] ✅ Posted message: Associate Software Engineer @ T-Mobile in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ T-Mobile
[2026-01-29T18:54:00.780Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ T-Mobile → category channel (1 total channels)
💾 BEFORE MERGE: 58 jobs in memory (cached)
[2026-01-29T18:54:00.782Z] [BOT] ✅ Loaded V2 database: 57 jobs
[2026-01-29T18:54:00.782Z] [BOT] 💾 DISK STATE: 57 jobs on disk
[2026-01-29T18:54:00.782Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=58
[2026-01-29T18:54:00.782Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:54:00.782Z] [BOT] 💾 AFTER MERGE: 58 jobs (merged disk + memory)
✅ No jobs to archive (all 58 jobs within 7-day window)
[2026-01-29T18:54:00.787Z] [BOT] 💾 Saved posted_jobs.json: 58 active jobs
[2026-01-29T18:54:00.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:54:02.287Z] [BOT] 📍 [ROUTING] "Assoc Engineer - Software" @ T-Mobile
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:54:02.488Z] [BOT] ✅ Posted message: Assoc Engineer - Software @ T-Mobile in #💻・tech-jobs
[2026-01-29T18:54:02.488Z] [BOT] ✅ Industry: Assoc Engineer - Software @ T-Mobile
💾 Added channel posting: Assoc Engineer - Software @ T-Mobile → category channel (1 total channels)
[2026-01-29T18:54:02.488Z] [BOT] 💾 BEFORE MERGE: 59 jobs in memory (cached)
[2026-01-29T18:54:02.490Z] [BOT] ✅ Loaded V2 database: 58 jobs
[2026-01-29T18:54:02.490Z] [BOT] 💾 DISK STATE: 58 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=59
[2026-01-29T18:54:02.490Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:54:02.490Z] [BOT] 💾 AFTER MERGE: 59 jobs (merged disk + memory)
✅ No jobs to archive (all 59 jobs within 7-day window)
[2026-01-29T18:54:02.494Z] [BOT] 💾 Saved posted_jobs.json: 59 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:54:06.998Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T18:54:06.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9259cd44..." not found, but found as SHA256 "212052ee4b58de19"
[2026-01-29T18:54:06.999Z] [BOT] ⏭️  Skipping duplicate: JID_9259cd44 (posted within 7 days)
[2026-01-29T18:54:06.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d500cdd7..." not found, but found as SHA256 "afce88e51d9f0be8"
⏭️  Skipping duplicate: JID_ccea2a66-i_1021666-3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "50381ec6f153d497"
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_c3e5b216-_01820057 (posted within 7 days)
[2026-01-29T18:54:07.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "79f830d545a88a4d"
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_f1267425-_01801021 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0d4ef071..." not found, but found as SHA256 "4fa6b2d2f913bd94"
⏭️  Skipping duplicate: JID_e245e89a-engineer_r38081-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e3128470-northrop_grumm..." not found, but found as SHA256 "d8fb3945fff110d0"
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_7abe68f6-3_r10221066 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_129f884a..." not found, but found as SHA256 "63fa7feac74e18e4"
⏭️  Skipping duplicate: JID_7c2f057f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ffa4b8c2..." not found, but found as SHA256 "e25399a694294c30"
[2026-01-29T18:54:07.000Z] [BOT] ⏭️  Skipping duplicate: JID_da2f6a09-software_req338082 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ffa4b8c2..." not found, but found as SHA256 "1b680f8c9509a69e"
⏭️  Skipping duplicate: JID_3ddef7f2-engineer_req338143 (posted within 7 days)
[2026-01-29T18:54:07.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ffa4b8c2..." not found, but found as SHA256 "67d2fab777dcb16b"
⏭️  Skipping duplicate: JID_ed6d860b-software_req335427-1 (posted within 7 days)
[2026-01-29T18:54:07.132Z] [BOT] ✅ Loaded pending queue: 2869 total (2810 pending, 39 enriched, 20 posted)
[2026-01-29T18:54:07.298Z] [BOT] ✅ Saved pending queue: 2869 total (2810 pending, 29 enriched, 30 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T18:54:07.298Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T18:54:07.380Z] [BOT] 📂 Loaded 10111 existing routing entries
[2026-01-29T18:54:07.488Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10121
   Timestamp: 2026-01-29T18:54:07.443Z
[2026-01-29T18:54:07.488Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 22
[2026-01-29T18:54:07.488Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 11
[2026-01-29T18:54:07.489Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T18:54:07.489Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #💰・finance-jobs: 1 posts
     3. #📊・JID_fb739488: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-29T18:54:07.489Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 59 jobs in memory (cached)
[2026-01-29T18:54:07.491Z] [BOT] ✅ Loaded V2 database: 59 jobs
💾 DISK STATE: 59 jobs on disk
[2026-01-29T18:54:07.491Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=59
[2026-01-29T18:54:07.491Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:54:07.491Z] [BOT] 💾 AFTER MERGE: 59 jobs (merged disk + memory)
✅ No jobs to archive (all 59 jobs within 7-day window)
[2026-01-29T18:54:07.497Z] [BOT] 💾 Saved posted_jobs.json: 59 active jobs
[2026-01-29T18:54:07.497Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T18:54:09.527Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*