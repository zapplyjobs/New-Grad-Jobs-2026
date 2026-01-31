# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T19:18:07.815Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T19:17:38.036Z] ========================================
[2026-01-31T19:17:38.038Z] Discord Bot Execution Log
[2026-01-31T19:17:38.038Z] Environment: GitHub Actions
[2026-01-31T19:17:38.038Z] Node Version: v20.20.0
[2026-01-31T19:17:38.038Z] ========================================
[2026-01-31T19:17:38.038Z] Environment Variables Check:
[2026-01-31T19:17:38.038Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T19:17:38.038Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.038Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T19:17:38.039Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T19:17:38.039Z] 
Multi-Channel Configuration:
[2026-01-31T19:17:38.039Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T19:17:38.039Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T19:17:38.039Z] 
Data Files Check:
[2026-01-31T19:17:38.040Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T19:17:38.083Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8223242 bytes)
[2026-01-31T19:17:38.083Z] 
========================================
[2026-01-31T19:17:38.083Z] Starting Enhanced Discord Bot...
[2026-01-31T19:17:38.083Z] ========================================
[2026-01-31T19:17:38.671Z] [BOT] ✅ Loaded V2 database: 1357 jobs
[2026-01-31T19:17:39.277Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T19:17:39.278Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T19:17:39.278Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T19:17:39.395Z] [BOT] ✅ Loaded pending queue: 2945 total (1558 pending, 50 enriched, 1337 posted)
[2026-01-31T19:17:39.395Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T19:17:39.395Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:17:39.396Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T19:17:39.396Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T19:17:39.396Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:17:39.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T19:17:39.397Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T19:17:39.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T19:17:39.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T19:17:39.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T19:17:39.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T19:17:39.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T19:17:39.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T19:17:39.399Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T19:17:39.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T19:17:39.399Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T19:17:39.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T19:17:39.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T19:17:39.400Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T19:17:39.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T19:17:39.400Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T19:17:39.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T19:17:39.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T19:17:39.411Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T19:17:39.411Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T19:17:39.412Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T19:17:39.412Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T19:17:39.413Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-31T19:17:39.413Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ByteDance: san jose, seattle
   - Software Engineer Graduate - Ads Interface and Platform - BS/MS @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T19:17:39.415Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T19:17:39.416Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
[2026-01-31T19:17:39.416Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:17:39.434Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T19:17:39.701Z] [BOT] ✅ Posted message: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
[2026-01-31T19:17:39.701Z] [BOT] ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2026-01-31T19:17:39.702Z] [BOT] 💾 Added channel posting: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-01-31T19:17:39.702Z] [BOT] 💾 BEFORE MERGE: 1358 jobs in memory (cached)
[2026-01-31T19:17:39.736Z] [BOT] ✅ Loaded V2 database: 1357 jobs
💾 DISK STATE: 1357 jobs on disk
[2026-01-31T19:17:39.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1358
[2026-01-31T19:17:39.739Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:39.739Z] [BOT] 💾 AFTER MERGE: 1358 jobs (merged disk + memory)
[2026-01-31T19:17:39.740Z] [BOT] ✅ No jobs to archive (all 1358 jobs within 7-day window)
[2026-01-31T19:17:39.824Z] [BOT] 💾 Saved posted_jobs.json: 1358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:41.326Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T19:17:41.326Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:17:41.585Z] [BOT] ✅ Posted message: Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 Systems
[2026-01-31T19:17:41.585Z] [BOT] 💾 Added channel posting: Associate Software Engineer – Seeking 2025 & 2026 Grads - Engineering Development Program @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-01-31T19:17:41.586Z] [BOT] 💾 BEFORE MERGE: 1359 jobs in memory (cached)
[2026-01-31T19:17:41.609Z] [BOT] ✅ Loaded V2 database: 1358 jobs
💾 DISK STATE: 1358 jobs on disk
[2026-01-31T19:17:41.609Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1359
[2026-01-31T19:17:41.612Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:41.612Z] [BOT] 💾 AFTER MERGE: 1359 jobs (merged disk + memory)
[2026-01-31T19:17:41.615Z] [BOT] ✅ No jobs to archive (all 1359 jobs within 7-day window)
[2026-01-31T19:17:41.702Z] [BOT] 💾 Saved posted_jobs.json: 1359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:43.203Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T19:17:43.203Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:17:43.416Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c
[2026-01-31T19:17:43.416Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:17:43.417Z] [BOT] 💾 BEFORE MERGE: 1360 jobs in memory (cached)
[2026-01-31T19:17:43.440Z] [BOT] ✅ Loaded V2 database: 1359 jobs
💾 DISK STATE: 1359 jobs on disk
[2026-01-31T19:17:43.441Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1360
[2026-01-31T19:17:43.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:43.445Z] [BOT] 💾 AFTER MERGE: 1360 jobs (merged disk + memory)
[2026-01-31T19:17:43.446Z] [BOT] ✅ No jobs to archive (all 1360 jobs within 7-day window)
[2026-01-31T19:17:43.532Z] [BOT] 💾 Saved posted_jobs.json: 1360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:45.033Z] [BOT] 📍 [ROUTING] "Full Stack Developer" @ ORG_23325912 Global
[2026-01-31T19:17:45.034Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:17:45.205Z] [BOT] ✅ Posted message: Full Stack Developer @ ORG_23325912 Global in #🤖・ai-jobs
[2026-01-31T19:17:45.205Z] [BOT] ✅ Industry: Full Stack Developer @ ORG_23325912 Global
[2026-01-31T19:17:45.206Z] [BOT] 💾 Added channel posting: Full Stack Developer @ ORG_23325912 Global → category channel (1 total channels)
💾 BEFORE MERGE: 1361 jobs in memory (cached)
[2026-01-31T19:17:45.229Z] [BOT] ✅ Loaded V2 database: 1360 jobs
💾 DISK STATE: 1360 jobs on disk
[2026-01-31T19:17:45.230Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1361
[2026-01-31T19:17:45.233Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:45.233Z] [BOT] 💾 AFTER MERGE: 1361 jobs (merged disk + memory)
[2026-01-31T19:17:45.236Z] [BOT] ✅ No jobs to archive (all 1361 jobs within 7-day window)
[2026-01-31T19:17:45.321Z] [BOT] 💾 Saved posted_jobs.json: 1361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:46.822Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
[2026-01-31T19:17:46.822Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:17:47.149Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-01-31T19:17:47.150Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:17:47.150Z] [BOT] 💾 BEFORE MERGE: 1362 jobs in memory (cached)
[2026-01-31T19:17:47.173Z] [BOT] ✅ Loaded V2 database: 1361 jobs
💾 DISK STATE: 1361 jobs on disk
[2026-01-31T19:17:47.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1362
[2026-01-31T19:17:47.176Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1362 jobs (merged disk + memory)
[2026-01-31T19:17:47.179Z] [BOT] ✅ No jobs to archive (all 1362 jobs within 7-day window)
[2026-01-31T19:17:47.266Z] [BOT] 💾 Saved posted_jobs.json: 1362 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:51.767Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T19:17:51.768Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time" @ ORG_7a23266b
[2026-01-31T19:17:51.769Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:17:51.973Z] [BOT] ✅ Posted message: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b
[2026-01-31T19:17:51.974Z] [BOT] 💾 Added channel posting: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b → category channel (1 total channels)
💾 BEFORE MERGE: 1363 jobs in memory (cached)
[2026-01-31T19:17:51.997Z] [BOT] ✅ Loaded V2 database: 1362 jobs
💾 DISK STATE: 1362 jobs on disk
[2026-01-31T19:17:51.998Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1363
[2026-01-31T19:17:52.002Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:52.002Z] [BOT] 💾 AFTER MERGE: 1363 jobs (merged disk + memory)
[2026-01-31T19:17:52.003Z] [BOT] ✅ No jobs to archive (all 1363 jobs within 7-day window)
[2026-01-31T19:17:52.079Z] [BOT] 💾 Saved posted_jobs.json: 1363 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:53.582Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate Social - BS/MS" @ ORG_1bb6fcfb
[2026-01-31T19:17:53.582Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:17:53.887Z] [BOT] ✅ Posted message: Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T19:17:53.887Z] [BOT] ✅ Industry: Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb
[2026-01-31T19:17:53.888Z] [BOT] 💾 Added channel posting: Software Engineer Graduate Social - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1364 jobs in memory (cached)
[2026-01-31T19:17:53.911Z] [BOT] ✅ Loaded V2 database: 1363 jobs
💾 DISK STATE: 1363 jobs on disk
[2026-01-31T19:17:53.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1364
[2026-01-31T19:17:53.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:53.916Z] [BOT] 💾 AFTER MERGE: 1364 jobs (merged disk + memory)
[2026-01-31T19:17:53.916Z] [BOT] ✅ No jobs to archive (all 1364 jobs within 7-day window)
[2026-01-31T19:17:54.014Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:55.512Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model Speech Multimodal Interactions" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:17:55.753Z] [BOT] ✅ Posted message: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T19:17:55.753Z] [BOT] ✅ Industry: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c
[2026-01-31T19:17:55.754Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:17:55.754Z] [BOT] 💾 BEFORE MERGE: 1365 jobs in memory (cached)
[2026-01-31T19:17:55.777Z] [BOT] ✅ Loaded V2 database: 1364 jobs
💾 DISK STATE: 1364 jobs on disk
[2026-01-31T19:17:55.778Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1365
[2026-01-31T19:17:55.784Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:55.784Z] [BOT] 💾 AFTER MERGE: 1365 jobs (merged disk + memory)
[2026-01-31T19:17:55.785Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-01-31T19:17:55.870Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
[2026-01-31T19:17:55.870Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:57.372Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:17:57.629Z] [BOT] ✅ Posted message: Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2026-01-31T19:17:57.629Z] [BOT] 💾 Added channel posting: Backend Software Engineer Graduate @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:17:57.629Z] [BOT] 💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-01-31T19:17:57.653Z] [BOT] ✅ Loaded V2 database: 1365 jobs
💾 DISK STATE: 1365 jobs on disk
[2026-01-31T19:17:57.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-01-31T19:17:57.657Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:57.657Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-01-31T19:17:57.658Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-01-31T19:17:57.737Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
[2026-01-31T19:17:57.737Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T19:17:59.239Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Ads Identity and Attribution Technology" @ ORG_1bb6fcfb
[2026-01-31T19:17:59.239Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:17:59.526Z] [BOT] ✅ Posted message: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T19:17:59.527Z] [BOT] ✅ Industry: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb
[2026-01-31T19:17:59.527Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:17:59.527Z] [BOT] 💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-01-31T19:17:59.551Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-01-31T19:17:59.551Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-01-31T19:17:59.553Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:17:59.555Z] [BOT] 💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-01-31T19:17:59.556Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-01-31T19:17:59.638Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:18:04.140Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T19:18:04.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26af9f43..." not found, but found as SHA256 "746c9d335d14d79b"
[2026-01-31T19:18:04.142Z] [BOT] ⏭️  Skipping duplicate: JID_5cc5ba5b (posted within 7 days)
[2026-01-31T19:18:04.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2bfdbf4..." not found, but found as SHA256 "83a5a357725454cb"
[2026-01-31T19:18:04.142Z] [BOT] ⏭️  Skipping duplicate: JID_124936eb (posted within 7 days)
[2026-01-31T19:18:04.142Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ac065e5c..." not found, but found as SHA256 "b219d3621783cd9c"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_96109f8a-detail (posted within 7 days)
[2026-01-31T19:18:04.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_867a22df..." not found, but found as SHA256 "c98c0755aa06bf1e"
[2026-01-31T19:18:04.143Z] [BOT] ⏭️  Skipping duplicate: JID_0f40ceab (posted within 7 days)
[2026-01-31T19:18:04.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf889592..." not found, but found as SHA256 "5e12a1a5ecb76564"
⏭️  Skipping duplicate: JID_40e7d34f (posted within 7 days)
[2026-01-31T19:18:04.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f85c3690..." not found, but found as SHA256 "2d9cdf2b9c7301bb"
[2026-01-31T19:18:04.143Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_fbfd7eeb (posted within 7 days)
[2026-01-31T19:18:04.143Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3eb91f35..." not found, but found as SHA256 "dfe392f3f8e6ebc7"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_4beb9e59-detail (posted within 7 days)
[2026-01-31T19:18:04.144Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d73ccb92..." not found, but found as SHA256 "09e46ba6bf12bc26"
[2026-01-31T19:18:04.144Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c7570dd0-detail (posted within 7 days)
[2026-01-31T19:18:04.144Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ae75215a..." not found, but found as SHA256 "22ce916b4a8b6631"
⏭️  Skipping duplicate: JID_6796d1d6-CH_a09627a9 (posted within 7 days)
[2026-01-31T19:18:04.144Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_707736bf..." not found, but found as SHA256 "50254f4358ba24c9"
[2026-01-31T19:18:04.145Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_465e7f86 (posted within 7 days)
[2026-01-31T19:18:04.253Z] [BOT] ✅ Loaded pending queue: 2945 total (1558 pending, 50 enriched, 1337 posted)
[2026-01-31T19:18:04.440Z] [BOT] ✅ Saved pending queue: 2945 total (1558 pending, 40 enriched, 1347 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T19:18:04.440Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T19:18:04.525Z] [BOT] 📂 Loaded 11428 existing routing entries
[2026-01-31T19:18:04.667Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T19:18:04.667Z] [BOT] New entries: 10
   Total entries: 11438
   Timestamp: 2026-01-31T19:18:04.607Z
[2026-01-31T19:18:04.668Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T19:18:04.668Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T19:18:04.668Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 5 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-01-31T19:18:04.692Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-01-31T19:18:04.693Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-01-31T19:18:04.695Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:18:04.695Z] [BOT] 💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-01-31T19:18:04.699Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-01-31T19:18:04.785Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:18:04.785Z] [BOT] ✅ Database saved successfully
[2026-01-31T19:18:06.814Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*