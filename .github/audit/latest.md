# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T00:18:07.829Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T00:17:34.784Z] ========================================
[2026-01-30T00:17:34.786Z] Discord Bot Execution Log
[2026-01-30T00:17:34.786Z] Environment: GitHub Actions
[2026-01-30T00:17:34.786Z] Node Version: v20.20.0
[2026-01-30T00:17:34.786Z] ========================================
[2026-01-30T00:17:34.786Z] Environment Variables Check:
[2026-01-30T00:17:34.786Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T00:17:34.786Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.786Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T00:17:34.787Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T00:17:34.787Z] 
Multi-Channel Configuration:
[2026-01-30T00:17:34.787Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T00:17:34.787Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T00:17:34.787Z] 
Data Files Check:
[2026-01-30T00:17:34.788Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66970 bytes)
[2026-01-30T00:17:34.795Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1004342 bytes)
[2026-01-30T00:17:34.795Z] 
========================================
[2026-01-30T00:17:34.795Z] Starting Enhanced Discord Bot...
[2026-01-30T00:17:34.795Z] ========================================
[2026-01-30T00:17:35.328Z] [BOT] ✅ Loaded V2 database: 179 jobs
[2026-01-30T00:17:37.179Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T00:17:37.180Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T00:17:37.180Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T00:17:37.298Z] [BOT] ✅ Loaded pending queue: 2906 total (2706 pending, 50 enriched, 150 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Occupational Therapist - Adult PHP at Sanford Health
[2026-01-30T00:17:37.302Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-30T00:17:37.303Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
[2026-01-30T00:17:37.303Z] [BOT] 🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-01-30T00:17:37.303Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Beneficial Deployments at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
[2026-01-30T00:17:37.303Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-30T00:17:37.303Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
[2026-01-30T00:17:37.407Z] [BOT] ✅ Loaded pending queue: 2906 total (2706 pending, 50 enriched, 150 posted)
[2026-01-30T00:17:37.578Z] [BOT] ✅ Saved pending queue: 2900 total (2706 pending, 44 enriched, 150 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-30T00:17:37.578Z] [BOT] 📋 After blacklist filter: 44 jobs (6 blacklisted)
[2026-01-30T00:17:37.578Z] [BOT] 📋 After data quality filter: 44 jobs (0 invalid)
[2026-01-30T00:17:37.579Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-30T00:17:37.579Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo: charlotte, phoenix
[2026-01-30T00:17:37.579Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T00:17:37.583Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T00:17:37.584Z] [BOT] 📍 [ROUTING] "Occupational Therapist - Adult PHP" @ ORG_ac22ea67 Health
[2026-01-30T00:17:37.584Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:17:37.601Z] [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T00:17:38.047Z] [BOT] ✅ Posted message: Occupational Therapist - Adult PHP @ ORG_ac22ea67 Health in #💻・tech-jobs
[2026-01-30T00:17:38.047Z] [BOT] ✅ Industry: Occupational Therapist - Adult PHP @ ORG_ac22ea67 Health
[2026-01-30T00:17:38.048Z] [BOT] 💾 Added channel posting: Occupational Therapist - Adult PHP @ ORG_ac22ea67 Health → category channel (1 total channels)
[2026-01-30T00:17:38.048Z] [BOT] 💾 BEFORE MERGE: 180 jobs in memory (cached)
[2026-01-30T00:17:38.053Z] [BOT] ✅ Loaded V2 database: 179 jobs
[2026-01-30T00:17:38.053Z] [BOT] 💾 DISK STATE: 179 jobs on disk
[2026-01-30T00:17:38.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=180
[2026-01-30T00:17:38.054Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:38.054Z] [BOT] 💾 AFTER MERGE: 180 jobs (merged disk + memory)
[2026-01-30T00:17:38.054Z] [BOT] ✅ No jobs to archive (all 180 jobs within 7-day window)
[2026-01-30T00:17:38.070Z] [BOT] 💾 Saved posted_jobs.json: 180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:39.572Z] [BOT] 📍 [ROUTING] "Application Developer - Scientific Applications" @ ORG_b344d80e Boeing Company
[2026-01-30T00:17:39.572Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:17:39.717Z] [BOT] ✅ Posted message: Application Developer - Scientific Applications @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2026-01-30T00:17:39.718Z] [BOT] ✅ Industry: Application Developer - Scientific Applications @ ORG_b344d80e Boeing Company
💾 Added channel posting: Application Developer - Scientific Applications @ ORG_b344d80e Boeing Company → category channel (1 total channels)
[2026-01-30T00:17:39.718Z] [BOT] 💾 BEFORE MERGE: 181 jobs in memory (cached)
[2026-01-30T00:17:39.722Z] [BOT] ✅ Loaded V2 database: 180 jobs
[2026-01-30T00:17:39.722Z] [BOT] 💾 DISK STATE: 180 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=181
[2026-01-30T00:17:39.722Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:39.722Z] [BOT] 💾 AFTER MERGE: 181 jobs (merged disk + memory)
[2026-01-30T00:17:39.723Z] [BOT] ✅ No jobs to archive (all 181 jobs within 7-day window)
[2026-01-30T00:17:39.735Z] [BOT] 💾 Saved posted_jobs.json: 181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:41.235Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_85937e82 Inc.
[2026-01-30T00:17:41.236Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:17:41.513Z] [BOT] ✅ Posted message: Software Engineer @ ORG_85937e82 Inc. in #💻・tech-jobs
[2026-01-30T00:17:41.513Z] [BOT] ✅ Industry: Software Engineer @ ORG_85937e82 Inc.
💾 Added channel posting: Software Engineer @ ORG_85937e82 Inc. → category channel (1 total channels)
💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-30T00:17:41.517Z] [BOT] ✅ Loaded V2 database: 181 jobs
💾 DISK STATE: 181 jobs on disk
[2026-01-30T00:17:41.517Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-30T00:17:41.517Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-30T00:17:41.518Z] [BOT] ✅ No jobs to archive (all 182 jobs within 7-day window)
[2026-01-30T00:17:41.530Z] [BOT] 💾 Saved posted_jobs.json: 182 active jobs
[2026-01-30T00:17:41.530Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:43.031Z] [BOT] 📍 [ROUTING] "Software Developer 1 - One Stop Shop" @ ORG_3bcc9251in
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:17:43.500Z] [BOT] ✅ Posted message: Software Developer 1 - One Stop Shop @ ORG_3bcc9251in in #💻・tech-jobs
[2026-01-30T00:17:43.500Z] [BOT] ✅ Industry: Software Developer 1 - One Stop Shop @ ORG_3bcc9251in
💾 Added channel posting: Software Developer 1 - One Stop Shop @ ORG_3bcc9251in → category channel (1 total channels)
[2026-01-30T00:17:43.500Z] [BOT] 💾 BEFORE MERGE: 183 jobs in memory (cached)
[2026-01-30T00:17:43.506Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=183
💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 183 jobs (merged disk + memory)
✅ No jobs to archive (all 183 jobs within 7-day window)
[2026-01-30T00:17:43.517Z] [BOT] 💾 Saved posted_jobs.json: 183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:45.018Z] [BOT] 📍 [ROUTING] "Engineering Associate - Auto Lending" @ ORG_332e04b7 Fargo
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:17:45.139Z] [BOT] ✅ Posted message: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo
[2026-01-30T00:17:45.139Z] [BOT] 💾 Added channel posting: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo → category channel (1 total channels)
💾 BEFORE MERGE: 184 jobs in memory (cached)
[2026-01-30T00:17:45.143Z] [BOT] ✅ Loaded V2 database: 183 jobs
💾 DISK STATE: 183 jobs on disk
[2026-01-30T00:17:45.143Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=184
[2026-01-30T00:17:45.144Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 184 jobs (merged disk + memory)
[2026-01-30T00:17:45.144Z] [BOT] ✅ No jobs to archive (all 184 jobs within 7-day window)
[2026-01-30T00:17:45.154Z] [BOT] 💾 Saved posted_jobs.json: 184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:49.658Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T00:17:49.659Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_d5e7e205
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T00:17:49.659Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T00:17:49.828Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_d5e7e205 in #📊・JID_fb739488
  ✅ Industry: Software Engineer 1 @ ORG_d5e7e205
[2026-01-30T00:17:49.828Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_d5e7e205 → category channel (1 total channels)
[2026-01-30T00:17:49.828Z] [BOT] 💾 BEFORE MERGE: 185 jobs in memory (cached)
[2026-01-30T00:17:49.834Z] [BOT] ✅ Loaded V2 database: 184 jobs
[2026-01-30T00:17:49.834Z] [BOT] 💾 DISK STATE: 184 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=185
[2026-01-30T00:17:49.836Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:49.836Z] [BOT] 💾 AFTER MERGE: 185 jobs (merged disk + memory)
[2026-01-30T00:17:49.836Z] [BOT] ✅ No jobs to archive (all 185 jobs within 7-day window)
[2026-01-30T00:17:49.851Z] [BOT] 💾 Saved posted_jobs.json: 185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:51.352Z] [BOT] 📍 [ROUTING] "Software Engineer - Associate" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T00:17:51.352Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T00:17:51.670Z] [BOT] ✅ Posted message: Software Engineer - Associate @ ORG_b344d80e Boeing Company in #📊・JID_fb739488
[2026-01-30T00:17:51.670Z] [BOT] ✅ Industry: Software Engineer - Associate @ ORG_b344d80e Boeing Company
[2026-01-30T00:17:51.670Z] [BOT] 💾 Added channel posting: Software Engineer - Associate @ ORG_b344d80e Boeing Company → category channel (1 total channels)
💾 BEFORE MERGE: 186 jobs in memory (cached)
[2026-01-30T00:17:51.676Z] [BOT] ✅ Loaded V2 database: 185 jobs
[2026-01-30T00:17:51.677Z] [BOT] 💾 DISK STATE: 185 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=186
[2026-01-30T00:17:51.677Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:51.677Z] [BOT] 💾 AFTER MERGE: 186 jobs (merged disk + memory)
[2026-01-30T00:17:51.677Z] [BOT] ✅ No jobs to archive (all 186 jobs within 7-day window)
[2026-01-30T00:17:51.690Z] [BOT] 💾 Saved posted_jobs.json: 186 active jobs
[2026-01-30T00:17:51.690Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:56.193Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T00:17:56.193Z] [BOT] 📍 [ROUTING] "Triage Associate 1" @ ORG_238a676d AI
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:17:56.720Z] [BOT] ✅ Posted message: Triage Associate 1 @ ORG_238a676d AI in #🤖・ai-jobs
  ✅ Industry: Triage Associate 1 @ ORG_238a676d AI
[2026-01-30T00:17:56.721Z] [BOT] 💾 Added channel posting: Triage Associate 1 @ ORG_238a676d AI → category channel (1 total channels)
💾 BEFORE MERGE: 187 jobs in memory (cached)
[2026-01-30T00:17:56.725Z] [BOT] ✅ Loaded V2 database: 186 jobs
💾 DISK STATE: 186 jobs on disk
[2026-01-30T00:17:56.725Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=187
[2026-01-30T00:17:56.725Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:56.726Z] [BOT] 💾 AFTER MERGE: 187 jobs (merged disk + memory)
[2026-01-30T00:17:56.726Z] [BOT] ✅ No jobs to archive (all 187 jobs within 7-day window)
[2026-01-30T00:17:56.737Z] [BOT] 💾 Saved posted_jobs.json: 187 active jobs
[2026-01-30T00:17:56.737Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:58.239Z] [BOT] 📍 [ROUTING] "Data Scientist / Technical Analyst - Data Scientist/Technical Analyst" @ ORG_85937e82 Inc.
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:17:58.239Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T00:17:58.403Z] [BOT] ✅ Posted message: Data Scientist / Technical Analyst - Data Scientist/Technical Analyst @ ORG_85937e82 Inc. in #🤖・ai-jobs
  ✅ Industry: Data Scientist / Technical Analyst - Data Scientist/Technical Analyst @ ORG_85937e82 Inc.
[2026-01-30T00:17:58.403Z] [BOT] 💾 Added channel posting: Data Scientist / Technical Analyst - Data Scientist/Technical Analyst @ ORG_85937e82 Inc. → category channel (1 total channels)
[2026-01-30T00:17:58.403Z] [BOT] 💾 BEFORE MERGE: 188 jobs in memory (cached)
[2026-01-30T00:17:58.407Z] [BOT] ✅ Loaded V2 database: 187 jobs
💾 DISK STATE: 187 jobs on disk
[2026-01-30T00:17:58.407Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=188
[2026-01-30T00:17:58.408Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:17:58.408Z] [BOT] 💾 AFTER MERGE: 188 jobs (merged disk + memory)
[2026-01-30T00:17:58.408Z] [BOT] ✅ No jobs to archive (all 188 jobs within 7-day window)
[2026-01-30T00:17:58.422Z] [BOT] 💾 Saved posted_jobs.json: 188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:17:59.924Z] [BOT] 📍 [ROUTING] "AI Training Data Acquisition Analyst - Spanish Speaker" @ ORG_a48be88b
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:17:59.924Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T00:18:00.083Z] [BOT] ✅ Posted message: AI Training Data Acquisition Analyst - Spanish Speaker @ ORG_a48be88b in #🤖・ai-jobs
  ✅ Industry: AI Training Data Acquisition Analyst - Spanish Speaker @ ORG_a48be88b
[2026-01-30T00:18:00.083Z] [BOT] 💾 Added channel posting: AI Training Data Acquisition Analyst - Spanish Speaker @ ORG_a48be88b → category channel (1 total channels)
💾 BEFORE MERGE: 189 jobs in memory (cached)
[2026-01-30T00:18:00.087Z] [BOT] ✅ Loaded V2 database: 188 jobs
[2026-01-30T00:18:00.087Z] [BOT] 💾 DISK STATE: 188 jobs on disk
[2026-01-30T00:18:00.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=189
[2026-01-30T00:18:00.088Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 189 jobs (merged disk + memory)
[2026-01-30T00:18:00.088Z] [BOT] ✅ No jobs to archive (all 189 jobs within 7-day window)
[2026-01-30T00:18:00.103Z] [BOT] 💾 Saved posted_jobs.json: 189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:18:04.605Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f89a5d2..." not found, but found as SHA256 "4058dfc425f6378f"
[2026-01-30T00:18:04.606Z] [BOT] ⏭️  Skipping duplicate: JID_b5146051-php_r-0247726 (posted within 7 days)
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ba4d475..." not found, but found as SHA256 "231158c1b30102fc"
⏭️  Skipping duplicate: JID_5cd3e518 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_73a28aec..." not found, but found as SHA256 "3541a8c0cfa71105"
[2026-01-30T00:18:04.606Z] [BOT] ⏭️  Skipping duplicate: JID_c08ece24 (posted within 7 days)
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "e93aa2173c56006a"
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_e8cf6348-_jr2025488280 (posted within 7 days)
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "a8631dfb29cfc305"
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_62ee3943-_jr2026491832 (posted within 7 days)
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2cd0913f..." not found, but found as SHA256 "ee895bafb49c05ed"
⏭️  Skipping duplicate: JID_ddd500e0-analyst_r0000346431 (posted within 7 days)
[2026-01-30T00:18:04.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2cd0913f..." not found, but found as SHA256 "e2b918d33942c5c9"
[2026-01-30T00:18:04.606Z] [BOT] ⏭️  Skipping duplicate: JID_c2e96cf6-engineer_r0000346434-1 (posted within 7 days)
[2026-01-30T00:18:04.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0f7195dd-redfin_care..." not found, but found as SHA256 "02a7eab7b266c2ee"
⏭️  Skipping duplicate: JID_0f7195dd-redfin_careers-JID_bfdf590e-shop_59698-2 (posted within 7 days)
[2026-01-30T00:18:04.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_194cbb29..." not found, but found as SHA256 "f11a12517ce21163"
⏭️  Skipping duplicate: JID_d1195a21-speaker_jr0032255-1 (posted within 7 days)
[2026-01-30T00:18:04.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "51bf3af3f8a90430"
⏭️  Skipping duplicate: JID_0b0cc7d0-lending_r-517644 (posted within 7 days)
[2026-01-30T00:18:04.723Z] [BOT] ✅ Loaded pending queue: 2900 total (2706 pending, 44 enriched, 150 posted)
[2026-01-30T00:18:04.900Z] [BOT] ✅ Saved pending queue: 2900 total (2706 pending, 34 enriched, 160 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T00:18:04.900Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T00:18:04.982Z] [BOT] 📂 Loaded 10241 existing routing entries
[2026-01-30T00:18:05.107Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T00:18:05.107Z] [BOT] New entries: 10
   Total entries: 10251
   Timestamp: 2026-01-30T00:18:05.045Z
[2026-01-30T00:18:05.108Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T00:18:05.108Z] [BOT] Total attempts: 16
   Successful: 10
   Failed: 0
   Skipped: 6
[2026-01-30T00:18:05.108Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T00:18:05.108Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 2 posts
[2026-01-30T00:18:05.108Z] [BOT] [STATS] Channel stats saved
[2026-01-30T00:18:05.108Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 189 jobs in memory (cached)
[2026-01-30T00:18:05.113Z] [BOT] ✅ Loaded V2 database: 189 jobs
💾 DISK STATE: 189 jobs on disk
[2026-01-30T00:18:05.113Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=189
[2026-01-30T00:18:05.113Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 189 jobs (merged disk + memory)
[2026-01-30T00:18:05.113Z] [BOT] ✅ No jobs to archive (all 189 jobs within 7-day window)
[2026-01-30T00:18:05.125Z] [BOT] 💾 Saved posted_jobs.json: 189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:18:05.125Z] [BOT] ✅ Database saved successfully
[2026-01-30T00:18:07.152Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*