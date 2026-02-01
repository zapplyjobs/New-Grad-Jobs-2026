# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T16:15:12.801Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T16:14:18.815Z] ========================================
[2026-02-01T16:14:18.816Z] Discord Bot Execution Log
[2026-02-01T16:14:18.816Z] Environment: GitHub Actions
[2026-02-01T16:14:18.816Z] Node Version: v20.20.0
[2026-02-01T16:14:18.817Z] ========================================
[2026-02-01T16:14:18.817Z] Environment Variables Check:
[2026-02-01T16:14:18.817Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T16:14:18.817Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T16:14:18.817Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T16:14:18.817Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T16:14:18.817Z] 
Multi-Channel Configuration:
[2026-02-01T16:14:18.817Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T16:14:18.817Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T16:14:18.817Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T16:14:18.817Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T16:14:18.818Z] 
Data Files Check:
[2026-02-01T16:14:18.818Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59412 bytes)
[2026-02-01T16:14:18.881Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10151646 bytes)
[2026-02-01T16:14:18.881Z] 
========================================
[2026-02-01T16:14:18.881Z] Starting Enhanced Discord Bot...
[2026-02-01T16:14:18.881Z] ========================================
[2026-02-01T16:14:19.399Z] [BOT] ✅ Loaded V2 database: 1997 jobs
[2026-02-01T16:14:19.830Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T16:14:19.830Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T16:14:19.831Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T16:14:20.003Z] [BOT] ✅ Loaded pending queue: 2948 total (911 pending, 50 enriched, 1987 posted)
[2026-02-01T16:14:20.003Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:14:20.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T16:14:20.004Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T16:14:20.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T16:14:20.005Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T16:14:20.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T16:14:20.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T16:14:20.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T16:14:20.007Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T16:14:20.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T16:14:20.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T16:14:20.008Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T16:14:20.019Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T16:14:20.019Z] [BOT] 🚫 Skipping blacklisted job: Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) at TikTok
[2026-02-01T16:14:20.186Z] [BOT] ✅ Loaded pending queue: 2948 total (911 pending, 50 enriched, 1987 posted)
[2026-02-01T16:14:20.388Z] [BOT] ✅ Saved pending queue: 2947 total (911 pending, 49 enriched, 1987 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-02-01T16:14:20.388Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T16:14:20.390Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
   (4 grouped as same job with different locations)
[2026-02-01T16:14:20.390Z] [BOT] 📍 1 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T16:14:20.393Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-02-01T16:14:20.394Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T16:14:20.394Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:14:20.410Z] [BOT ERROR] (node:2743) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T16:14:21.067Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T16:14:21.068Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T16:14:21.068Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T16:14:21.069Z] [BOT] 💾 BEFORE MERGE: 1998 jobs in memory (cached)
[2026-02-01T16:14:21.121Z] [BOT] ✅ Loaded V2 database: 1997 jobs
💾 DISK STATE: 1997 jobs on disk
[2026-02-01T16:14:21.122Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1998
[2026-02-01T16:14:21.126Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:21.126Z] [BOT] 💾 AFTER MERGE: 1998 jobs (merged disk + memory)
[2026-02-01T16:14:21.128Z] [BOT] ✅ No jobs to archive (all 1998 jobs within 7-day window)
[2026-02-01T16:14:21.246Z] [BOT] 💾 Saved posted_jobs.json: 1998 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:22.929Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
[2026-02-01T16:14:22.930Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:22.930Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T16:14:22.930Z] [BOT] 💾 BEFORE MERGE: 1998 jobs in memory (cached)
[2026-02-01T16:14:22.980Z] [BOT] ✅ Loaded V2 database: 1998 jobs
💾 DISK STATE: 1998 jobs on disk
[2026-02-01T16:14:22.981Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1998
[2026-02-01T16:14:22.985Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:22.985Z] [BOT] 💾 AFTER MERGE: 1998 jobs (merged disk + memory)
[2026-02-01T16:14:22.987Z] [BOT] ✅ No jobs to archive (all 1998 jobs within 7-day window)
[2026-02-01T16:14:23.105Z] [BOT] 💾 Saved posted_jobs.json: 1998 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:24.607Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - TikTok Recommendation" @ ORG_1bb6fcfb
[2026-02-01T16:14:24.607Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:14:24.839Z] [BOT] ✅ Posted message: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T16:14:24.839Z] [BOT] ✅ Industry: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb
[2026-02-01T16:14:24.840Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:24.840Z] [BOT] 💾 BEFORE MERGE: 1999 jobs in memory (cached)
[2026-02-01T16:14:24.891Z] [BOT] ✅ Loaded V2 database: 1998 jobs
💾 DISK STATE: 1998 jobs on disk
[2026-02-01T16:14:24.891Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1999
[2026-02-01T16:14:24.895Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:24.896Z] [BOT] 💾 AFTER MERGE: 1999 jobs (merged disk + memory)
[2026-02-01T16:14:24.897Z] [BOT] ✅ No jobs to archive (all 1999 jobs within 7-day window)
[2026-02-01T16:14:25.015Z] [BOT] 💾 Saved posted_jobs.json: 1999 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:26.889Z] [BOT] ✅ Posted message: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T16:14:26.889Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:26.889Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:26.889Z] [BOT] 💾 BEFORE MERGE: 1999 jobs in memory (cached)
[2026-02-01T16:14:26.940Z] [BOT] ✅ Loaded V2 database: 1999 jobs
💾 DISK STATE: 1999 jobs on disk
[2026-02-01T16:14:26.941Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1999
[2026-02-01T16:14:26.945Z] [BOT] 🔀 Deep merged: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:26.945Z] [BOT] 💾 AFTER MERGE: 1999 jobs (merged disk + memory)
[2026-02-01T16:14:26.946Z] [BOT] ✅ No jobs to archive (all 1999 jobs within 7-day window)
[2026-02-01T16:14:27.063Z] [BOT] 💾 Saved posted_jobs.json: 1999 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:28.565Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:14:29.002Z] [BOT] ✅ Posted message: Graduate Algorithm Engineer @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Algorithm Engineer @ ORG_1bb6fcfb
[2026-02-01T16:14:29.003Z] [BOT] 💾 Added channel posting: Graduate Algorithm Engineer @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:29.003Z] [BOT] 💾 BEFORE MERGE: 2000 jobs in memory (cached)
[2026-02-01T16:14:29.053Z] [BOT] ✅ Loaded V2 database: 1999 jobs
💾 DISK STATE: 1999 jobs on disk
[2026-02-01T16:14:29.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2000
[2026-02-01T16:14:29.059Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:29.059Z] [BOT] 💾 AFTER MERGE: 2000 jobs (merged disk + memory)
[2026-02-01T16:14:29.061Z] [BOT] ✅ No jobs to archive (all 2000 jobs within 7-day window)
[2026-02-01T16:14:29.200Z] [BOT] 💾 Saved posted_jobs.json: 2000 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:31.017Z] [BOT] ✅ Posted message: Graduate Algorithm Engineer @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:31.018Z] [BOT] 💾 Added channel posting: Graduate Algorithm Engineer @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:31.018Z] [BOT] 💾 BEFORE MERGE: 2000 jobs in memory (cached)
[2026-02-01T16:14:31.067Z] [BOT] ✅ Loaded V2 database: 2000 jobs
💾 DISK STATE: 2000 jobs on disk
[2026-02-01T16:14:31.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2000
[2026-02-01T16:14:31.071Z] [BOT] 🔀 Deep merged: Graduate Algorithm Engineer @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:31.071Z] [BOT] 💾 AFTER MERGE: 2000 jobs (merged disk + memory)
[2026-02-01T16:14:31.072Z] [BOT] ✅ No jobs to archive (all 2000 jobs within 7-day window)
[2026-02-01T16:14:31.179Z] [BOT] 💾 Saved posted_jobs.json: 2000 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:32.683Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (default)
[2026-02-01T16:14:32.683Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T16:14:33.204Z] [BOT] ✅ Posted message: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T16:14:33.205Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:33.205Z] [BOT] 💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-01T16:14:33.255Z] [BOT] ✅ Loaded V2 database: 2000 jobs
💾 DISK STATE: 2000 jobs on disk
[2026-02-01T16:14:33.256Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-01T16:14:33.259Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:33.259Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-01T16:14:33.261Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-01T16:14:33.372Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:35.079Z] [BOT] ✅ Posted message: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:35.079Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:35.079Z] [BOT] 💾 BEFORE MERGE: 2001 jobs in memory (cached)
[2026-02-01T16:14:35.129Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
[2026-02-01T16:14:35.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2001
[2026-02-01T16:14:35.133Z] [BOT] 🔀 Deep merged: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:35.133Z] [BOT] 💾 AFTER MERGE: 2001 jobs (merged disk + memory)
[2026-02-01T16:14:35.134Z] [BOT] ✅ No jobs to archive (all 2001 jobs within 7-day window)
[2026-02-01T16:14:35.252Z] [BOT] 💾 Saved posted_jobs.json: 2001 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:39.754Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-02-01T16:14:39.755Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2026-02-01T16:14:39.756Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:14:40.094Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2026-02-01T16:14:40.095Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:40.095Z] [BOT] 💾 BEFORE MERGE: 2002 jobs in memory (cached)
[2026-02-01T16:14:40.146Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
[2026-02-01T16:14:40.146Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2002
[2026-02-01T16:14:40.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:40.150Z] [BOT] 💾 AFTER MERGE: 2002 jobs (merged disk + memory)
[2026-02-01T16:14:40.151Z] [BOT] ✅ No jobs to archive (all 2002 jobs within 7-day window)
[2026-02-01T16:14:40.288Z] [BOT] 💾 Saved posted_jobs.json: 2002 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:42.022Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T16:14:42.022Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:42.023Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:42.023Z] [BOT] 💾 BEFORE MERGE: 2002 jobs in memory (cached)
[2026-02-01T16:14:42.073Z] [BOT] ✅ Loaded V2 database: 2002 jobs
💾 DISK STATE: 2002 jobs on disk
[2026-02-01T16:14:42.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2002
[2026-02-01T16:14:42.077Z] [BOT] 🔀 Deep merged: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:42.077Z] [BOT] 💾 AFTER MERGE: 2002 jobs (merged disk + memory)
[2026-02-01T16:14:42.079Z] [BOT] ✅ No jobs to archive (all 2002 jobs within 7-day window)
[2026-02-01T16:14:42.205Z] [BOT] 💾 Saved posted_jobs.json: 2002 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:43.706Z] [BOT] 📍 [ROUTING] "Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD" @ ORG_1bb6fcfb
[2026-02-01T16:14:43.706Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:14:43.977Z] [BOT] ✅ Posted message: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T16:14:43.977Z] [BOT] ✅ Industry: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb
[2026-02-01T16:14:43.978Z] [BOT] 💾 Added channel posting: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:43.978Z] [BOT] 💾 BEFORE MERGE: 2003 jobs in memory (cached)
[2026-02-01T16:14:44.028Z] [BOT] ✅ Loaded V2 database: 2002 jobs
💾 DISK STATE: 2002 jobs on disk
[2026-02-01T16:14:44.028Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2003
[2026-02-01T16:14:44.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:44.032Z] [BOT] 💾 AFTER MERGE: 2003 jobs (merged disk + memory)
[2026-02-01T16:14:44.033Z] [BOT] ✅ No jobs to archive (all 2003 jobs within 7-day window)
[2026-02-01T16:14:44.146Z] [BOT] 💾 Saved posted_jobs.json: 2003 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:45.884Z] [BOT] ✅ Posted message: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb in #🌲・JID_efdf5921
[2026-02-01T16:14:45.885Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:14:45.885Z] [BOT] 💾 Added channel posting: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:45.885Z] [BOT] 💾 BEFORE MERGE: 2003 jobs in memory (cached)
[2026-02-01T16:14:45.935Z] [BOT] ✅ Loaded V2 database: 2003 jobs
💾 DISK STATE: 2003 jobs on disk
[2026-02-01T16:14:45.935Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2003
[2026-02-01T16:14:45.939Z] [BOT] 🔀 Deep merged: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:45.939Z] [BOT] 💾 AFTER MERGE: 2003 jobs (merged disk + memory)
[2026-02-01T16:14:45.940Z] [BOT] ✅ No jobs to archive (all 2003 jobs within 7-day window)
[2026-02-01T16:14:46.065Z] [BOT] 💾 Saved posted_jobs.json: 2003 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:47.565Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T16:14:47.566Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:14:47.869Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T16:14:47.869Z] [BOT] ✅ Industry: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb
[2026-02-01T16:14:47.870Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:47.870Z] [BOT] 💾 BEFORE MERGE: 2004 jobs in memory (cached)
[2026-02-01T16:14:47.920Z] [BOT] ✅ Loaded V2 database: 2003 jobs
💾 DISK STATE: 2003 jobs on disk
[2026-02-01T16:14:47.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2004
[2026-02-01T16:14:47.924Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:47.924Z] [BOT] 💾 AFTER MERGE: 2004 jobs (merged disk + memory)
[2026-02-01T16:14:47.925Z] [BOT] ✅ No jobs to archive (all 2004 jobs within 7-day window)
[2026-02-01T16:14:48.033Z] [BOT] 💾 Saved posted_jobs.json: 2004 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:49.787Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:49.787Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:49.787Z] [BOT] 💾 BEFORE MERGE: 2004 jobs in memory (cached)
[2026-02-01T16:14:49.836Z] [BOT] ✅ Loaded V2 database: 2004 jobs
💾 DISK STATE: 2004 jobs on disk
[2026-02-01T16:14:49.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2004
[2026-02-01T16:14:49.840Z] [BOT] 🔀 Deep merged: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:14:49.840Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2004 jobs (merged disk + memory)
[2026-02-01T16:14:49.841Z] [BOT] ✅ No jobs to archive (all 2004 jobs within 7-day window)
[2026-02-01T16:14:49.958Z] [BOT] 💾 Saved posted_jobs.json: 2004 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:51.460Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T16:14:51.460Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:14:51.673Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T16:14:51.673Z] [BOT] ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2026-02-01T16:14:51.674Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:51.674Z] [BOT] 💾 BEFORE MERGE: 2005 jobs in memory (cached)
[2026-02-01T16:14:51.724Z] [BOT] ✅ Loaded V2 database: 2004 jobs
💾 DISK STATE: 2004 jobs on disk
[2026-02-01T16:14:51.725Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2005
[2026-02-01T16:14:51.728Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:14:51.728Z] [BOT] 💾 AFTER MERGE: 2005 jobs (merged disk + memory)
[2026-02-01T16:14:51.729Z] [BOT] ✅ No jobs to archive (all 2005 jobs within 7-day window)
[2026-02-01T16:14:51.855Z] [BOT] 💾 Saved posted_jobs.json: 2005 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:53.516Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T16:14:53.516Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:53.516Z] [BOT] 💾 BEFORE MERGE: 2005 jobs in memory (cached)
[2026-02-01T16:14:53.566Z] [BOT] ✅ Loaded V2 database: 2005 jobs
💾 DISK STATE: 2005 jobs on disk
[2026-02-01T16:14:53.567Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2005
[2026-02-01T16:14:53.570Z] [BOT] 🔀 Deep merged: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:14:53.570Z] [BOT] 💾 AFTER MERGE: 2005 jobs (merged disk + memory)
[2026-02-01T16:14:53.571Z] [BOT] ✅ No jobs to archive (all 2005 jobs within 7-day window)
[2026-02-01T16:14:53.677Z] [BOT] 💾 Saved posted_jobs.json: 2005 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:55.180Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Search Ads Technology" @ ORG_1bb6fcfb
[2026-02-01T16:14:55.180Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T16:14:55.550Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T16:14:55.551Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb
[2026-02-01T16:14:55.551Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:14:55.552Z] [BOT] 💾 BEFORE MERGE: 2006 jobs in memory (cached)
[2026-02-01T16:14:55.601Z] [BOT] ✅ Loaded V2 database: 2005 jobs
💾 DISK STATE: 2005 jobs on disk
[2026-02-01T16:14:55.602Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2006
[2026-02-01T16:14:55.606Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2006 jobs (merged disk + memory)
[2026-02-01T16:14:55.607Z] [BOT] ✅ No jobs to archive (all 2006 jobs within 7-day window)
[2026-02-01T16:14:55.725Z] [BOT] 💾 Saved posted_jobs.json: 2006 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:14:57.483Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:14:57.484Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:14:57.484Z] [BOT] 💾 BEFORE MERGE: 2006 jobs in memory (cached)
[2026-02-01T16:14:57.534Z] [BOT] ✅ Loaded V2 database: 2006 jobs
[2026-02-01T16:14:57.534Z] [BOT] 💾 DISK STATE: 2006 jobs on disk
[2026-02-01T16:14:57.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2006
[2026-02-01T16:14:57.538Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T16:14:57.538Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2006 jobs (merged disk + memory)
[2026-02-01T16:14:57.539Z] [BOT] ✅ No jobs to archive (all 2006 jobs within 7-day window)
[2026-02-01T16:14:57.657Z] [BOT] 💾 Saved posted_jobs.json: 2006 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:15:02.158Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T16:15:02.159Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Multiple Teams" @ ORG_1bb6fcfb
[2026-02-01T16:15:02.159Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T16:15:02.493Z] [BOT] ✅ Posted message: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb
[2026-02-01T16:15:02.493Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T16:15:02.494Z] [BOT] 💾 BEFORE MERGE: 2007 jobs in memory (cached)
[2026-02-01T16:15:02.544Z] [BOT] ✅ Loaded V2 database: 2006 jobs
💾 DISK STATE: 2006 jobs on disk
[2026-02-01T16:15:02.545Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2007
[2026-02-01T16:15:02.548Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:15:02.549Z] [BOT] 💾 AFTER MERGE: 2007 jobs (merged disk + memory)
[2026-02-01T16:15:02.550Z] [BOT] ✅ No jobs to archive (all 2007 jobs within 7-day window)
[2026-02-01T16:15:02.670Z] [BOT] 💾 Saved posted_jobs.json: 2007 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:15:04.332Z] [BOT] ✅ Posted message: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T16:15:04.333Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T16:15:04.333Z] [BOT] 💾 BEFORE MERGE: 2007 jobs in memory (cached)
[2026-02-01T16:15:04.383Z] [BOT] ✅ Loaded V2 database: 2007 jobs
💾 DISK STATE: 2007 jobs on disk
[2026-02-01T16:15:04.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2007
[2026-02-01T16:15:04.387Z] [BOT] 🔀 Deep merged: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T16:15:04.387Z] [BOT] 💾 AFTER MERGE: 2007 jobs (merged disk + memory)
[2026-02-01T16:15:04.388Z] [BOT] ✅ No jobs to archive (all 2007 jobs within 7-day window)
[2026-02-01T16:15:04.506Z] [BOT] 💾 Saved posted_jobs.json: 2007 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T16:15:09.008Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T16:15:09.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "b2853fa1ce1ba730"
[2026-02-01T16:15:09.010Z] [BOT] ⏭️  Skipping duplicate: JID_726279a1 (posted within 7 days)
[2026-02-01T16:15:09.010Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c54e6d6e..." not found, but found as SHA256 "bb3d6946e6fa5a5d"
[2026-02-01T16:15:09.010Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e2bf3cb5 (posted within 7 days)
[2026-02-01T16:15:09.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c2e2761..." not found, but found as SHA256 "b739384ff60230c2"
[2026-02-01T16:15:09.011Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9e609b2f (posted within 7 days)
[2026-02-01T16:15:09.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4650069..." not found, but found as SHA256 "0f2012759e66c41d"
[2026-02-01T16:15:09.011Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6ef6fdf8 (posted within 7 days)
[2026-02-01T16:15:09.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_38b0e442..." not found, but found as SHA256 "c40225a5f5340def"
[2026-02-01T16:15:09.011Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_5e88383a (posted within 7 days)
[2026-02-01T16:15:09.011Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6f2464b4..." not found, but found as SHA256 "e54558ec3b063de6"
[2026-02-01T16:15:09.012Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_049fadae (posted within 7 days)
[2026-02-01T16:15:09.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63da8b49..." not found, but found as SHA256 "0baf3680f376c64b"
[2026-02-01T16:15:09.012Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9c78e28f (posted within 7 days)
[2026-02-01T16:15:09.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2fb6fbcc..." not found, but found as SHA256 "0b604c1931abce6b"
[2026-02-01T16:15:09.012Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0fb3e517 (posted within 7 days)
[2026-02-01T16:15:09.012Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_990599d9..." not found, but found as SHA256 "e2ba8ecdf17b43e8"
[2026-02-01T16:15:09.012Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f78a57c6 (posted within 7 days)
[2026-02-01T16:15:09.013Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_266ad3b6..." not found, but found as SHA256 "8893113b44a30753"
[2026-02-01T16:15:09.013Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f53d6e78 (posted within 7 days)
[2026-02-01T16:15:09.180Z] [BOT] ✅ Loaded pending queue: 2947 total (911 pending, 49 enriched, 1987 posted)
[2026-02-01T16:15:09.363Z] [BOT] ✅ Saved pending queue: 2947 total (911 pending, 39 enriched, 1997 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T16:15:09.465Z] [BOT] 📂 Loaded 12078 existing routing entries
[2026-02-01T16:15:09.591Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12088
[2026-02-01T16:15:09.591Z] [BOT] Timestamp: 2026-02-01T16:15:09.547Z
[2026-02-01T16:15:09.591Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 29
   Successful: 20
   Failed: 0
   Skipped: 9
[2026-02-01T16:15:09.592Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T16:15:09.592Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #🌉・JID_739bbc0b: 8 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 4 posts
     4. #🌲・JID_efdf5921: 2 posts
[2026-02-01T16:15:09.592Z] [BOT] 5. #📊・JID_fb739488: 1 posts
[2026-02-01T16:15:09.592Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T16:15:09.592Z] [BOT] 💾 BEFORE MERGE: 2007 jobs in memory (cached)
[2026-02-01T16:15:09.653Z] [BOT] ✅ Loaded V2 database: 2007 jobs
[2026-02-01T16:15:09.656Z] [BOT] 💾 DISK STATE: 2007 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2007
[2026-02-01T16:15:09.676Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T16:15:09.677Z] [BOT] 💾 AFTER MERGE: 2007 jobs (merged disk + memory)
[2026-02-01T16:15:09.679Z] [BOT] ✅ No jobs to archive (all 2007 jobs within 7-day window)
[2026-02-01T16:15:09.798Z] [BOT] 💾 Saved posted_jobs.json: 2007 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T16:15:11.826Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2743) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*