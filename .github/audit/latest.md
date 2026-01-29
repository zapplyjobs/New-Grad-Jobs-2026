# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T19:37:46.468Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T19:37:09.111Z] ========================================
[2026-01-29T19:37:09.113Z] Discord Bot Execution Log
[2026-01-29T19:37:09.113Z] Environment: GitHub Actions
[2026-01-29T19:37:09.113Z] Node Version: v20.20.0
[2026-01-29T19:37:09.113Z] ========================================
[2026-01-29T19:37:09.113Z] Environment Variables Check:
[2026-01-29T19:37:09.113Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T19:37:09.113Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.113Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T19:37:09.114Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T19:37:09.114Z] 
Multi-Channel Configuration:
[2026-01-29T19:37:09.114Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T19:37:09.114Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T19:37:09.114Z] 
Data Files Check:
[2026-01-29T19:37:09.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 91328 bytes)
[2026-01-29T19:37:09.118Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 336285 bytes)
[2026-01-29T19:37:09.118Z] 
========================================
[2026-01-29T19:37:09.118Z] Starting Enhanced Discord Bot...
[2026-01-29T19:37:09.118Z] ========================================
[2026-01-29T19:37:09.652Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2026-01-29T19:37:10.246Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T19:37:10.246Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T19:37:10.247Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T19:37:10.370Z] [BOT] ✅ Loaded pending queue: 2882 total (2792 pending, 50 enriched, 40 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Collection Associate at Qualitest
[2026-01-29T19:37:10.373Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T19:37:10.374Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
[2026-01-29T19:37:10.374Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-01-29T19:37:10.374Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-01-29T19:37:10.483Z] [BOT] ✅ Loaded pending queue: 2882 total (2792 pending, 50 enriched, 40 posted)
[2026-01-29T19:37:10.657Z] [BOT] ✅ Saved pending queue: 2879 total (2792 pending, 47 enriched, 40 posted)
[2026-01-29T19:37:10.657Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 47 jobs (3 blacklisted)
📋 After data quality filter: 47 jobs (0 invalid)
[2026-01-29T19:37:10.658Z] [BOT] 📋 After multi-location grouping: 45 unique jobs to post
[2026-01-29T19:37:10.658Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T19:37:10.659Z] [BOT] - Sales Recruiter (12-month contract) @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T19:37:10.663Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-29T19:37:10.663Z] [BOT] 📍 [ROUTING] "Data Collection Associate" @ ORG_98cb1553
[2026-01-29T19:37:10.664Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:10.681Z] [BOT ERROR] (node:3001) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T19:37:10.877Z] [BOT] ✅ Posted message: Data Collection Associate @ ORG_98cb1553 in #💻・tech-jobs
[2026-01-29T19:37:10.878Z] [BOT] ✅ Industry: Data Collection Associate @ ORG_98cb1553
[2026-01-29T19:37:10.878Z] [BOT] 💾 Added channel posting: Data Collection Associate @ ORG_98cb1553 → category channel (1 total channels)
[2026-01-29T19:37:10.878Z] [BOT] 💾 BEFORE MERGE: 70 jobs in memory (cached)
[2026-01-29T19:37:10.880Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2026-01-29T19:37:10.880Z] [BOT] 💾 DISK STATE: 69 jobs on disk
[2026-01-29T19:37:10.880Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=70
[2026-01-29T19:37:10.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:10.881Z] [BOT] 💾 AFTER MERGE: 70 jobs (merged disk + memory)
[2026-01-29T19:37:10.881Z] [BOT] ✅ No jobs to archive (all 70 jobs within 7-day window)
[2026-01-29T19:37:10.890Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
[2026-01-29T19:37:10.890Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:12.393Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_a258b30f Lending Services
   Category: TECH (matched: "software")
[2026-01-29T19:37:12.393Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:12.539Z] [BOT] ✅ Posted message: Software Developer @ ORG_a258b30f Lending Services in #💻・tech-jobs
[2026-01-29T19:37:12.540Z] [BOT] ✅ Industry: Software Developer @ ORG_a258b30f Lending Services
💾 Added channel posting: Software Developer @ ORG_a258b30f Lending Services → category channel (1 total channels)
💾 BEFORE MERGE: 71 jobs in memory (cached)
[2026-01-29T19:37:12.542Z] [BOT] ✅ Loaded V2 database: 70 jobs
[2026-01-29T19:37:12.542Z] [BOT] 💾 DISK STATE: 70 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=71
[2026-01-29T19:37:12.542Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 71 jobs (merged disk + memory)
[2026-01-29T19:37:12.542Z] [BOT] ✅ No jobs to archive (all 71 jobs within 7-day window)
[2026-01-29T19:37:12.546Z] [BOT] 💾 Saved posted_jobs.json: 71 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:14.048Z] [BOT] 📍 [ROUTING] "Structural Engineering Analyst" @ ORG_36fd0d54
   Category: TECH (matched: "engineer/engineering")
[2026-01-29T19:37:14.048Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:14.480Z] [BOT] ✅ Posted message: Structural Engineering Analyst @ ORG_36fd0d54 in #💻・tech-jobs
  ✅ Industry: Structural Engineering Analyst @ ORG_36fd0d54
[2026-01-29T19:37:14.480Z] [BOT] 💾 Added channel posting: Structural Engineering Analyst @ ORG_36fd0d54 → category channel (1 total channels)
💾 BEFORE MERGE: 72 jobs in memory (cached)
[2026-01-29T19:37:14.482Z] [BOT] ✅ Loaded V2 database: 71 jobs
💾 DISK STATE: 71 jobs on disk
[2026-01-29T19:37:14.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=72
[2026-01-29T19:37:14.483Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 72 jobs (merged disk + memory)
[2026-01-29T19:37:14.483Z] [BOT] ✅ No jobs to archive (all 72 jobs within 7-day window)
[2026-01-29T19:37:14.487Z] [BOT] 💾 Saved posted_jobs.json: 72 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:15.988Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_9770a240 Services
[2026-01-29T19:37:15.988Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:16.223Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_9770a240 Services in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_9770a240 Services
[2026-01-29T19:37:16.224Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_9770a240 Services → category channel (1 total channels)
💾 BEFORE MERGE: 73 jobs in memory (cached)
[2026-01-29T19:37:16.225Z] [BOT] ✅ Loaded V2 database: 72 jobs
💾 DISK STATE: 72 jobs on disk
[2026-01-29T19:37:16.226Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=73
[2026-01-29T19:37:16.226Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:16.226Z] [BOT] 💾 AFTER MERGE: 73 jobs (merged disk + memory)
✅ No jobs to archive (all 73 jobs within 7-day window)
[2026-01-29T19:37:16.231Z] [BOT] 💾 Saved posted_jobs.json: 73 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:17.732Z] [BOT] 📍 [ROUTING] "Vice President, GTM Enablement & Business Value - NYC" @ datadog
   Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:17.947Z] [BOT] ✅ Posted message: Vice President, GTM Enablement & Business Value - NYC @ datadog in #💻・tech-jobs
  ✅ Industry: Vice President, GTM Enablement & Business Value - NYC @ datadog
[2026-01-29T19:37:17.947Z] [BOT] 💾 Added channel posting: Vice President, GTM Enablement & Business Value - NYC @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 74 jobs in memory (cached)
[2026-01-29T19:37:17.949Z] [BOT] ✅ Loaded V2 database: 73 jobs
[2026-01-29T19:37:17.949Z] [BOT] 💾 DISK STATE: 73 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=74
[2026-01-29T19:37:17.949Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 74 jobs (merged disk + memory)
[2026-01-29T19:37:17.950Z] [BOT] ✅ No jobs to archive (all 74 jobs within 7-day window)
[2026-01-29T19:37:17.954Z] [BOT] 💾 Saved posted_jobs.json: 74 active jobs
[2026-01-29T19:37:17.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:20.095Z] [BOT] ✅ Posted message: Vice President, GTM Enablement & Business Value - NYC @ datadog in #🗽・JID_98d4f0de
[2026-01-29T19:37:20.095Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Vice President, GTM Enablement & Business Value - NYC @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 74 jobs in memory (cached)
[2026-01-29T19:37:20.099Z] [BOT] ✅ Loaded V2 database: 74 jobs
💾 DISK STATE: 74 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=74
[2026-01-29T19:37:20.099Z] [BOT] 🔀 Deep merged: Vice President, GTM Enablement & Business Value - NYC @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:37:20.099Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 74 jobs (merged disk + memory)
[2026-01-29T19:37:20.099Z] [BOT] ✅ No jobs to archive (all 74 jobs within 7-day window)
[2026-01-29T19:37:20.105Z] [BOT] 💾 Saved posted_jobs.json: 74 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:21.606Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Digital Native Business – Cybersecurity" @ anthropic
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:21.933Z] [BOT] ✅ Posted message: Strategic Account Executive, Digital Native Business – Cybersecurity @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, Digital Native Business – Cybersecurity @ anthropic
[2026-01-29T19:37:21.933Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Digital Native Business – Cybersecurity @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 75 jobs in memory (cached)
[2026-01-29T19:37:21.936Z] [BOT] ✅ Loaded V2 database: 74 jobs
💾 DISK STATE: 74 jobs on disk
[2026-01-29T19:37:21.936Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=75
[2026-01-29T19:37:21.936Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:21.936Z] [BOT] 💾 AFTER MERGE: 75 jobs (merged disk + memory)
✅ No jobs to archive (all 75 jobs within 7-day window)
[2026-01-29T19:37:21.943Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2026-01-29T19:37:21.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:23.445Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:37:23.658Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #💻・tech-jobs
  ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-29T19:37:23.659Z] [BOT] 💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 76 jobs in memory (cached)
[2026-01-29T19:37:23.661Z] [BOT] ✅ Loaded V2 database: 75 jobs
💾 DISK STATE: 75 jobs on disk
[2026-01-29T19:37:23.661Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=76
[2026-01-29T19:37:23.661Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 76 jobs (merged disk + memory)
[2026-01-29T19:37:23.661Z] [BOT] ✅ No jobs to archive (all 76 jobs within 7-day window)
[2026-01-29T19:37:23.668Z] [BOT] 💾 Saved posted_jobs.json: 76 active jobs
[2026-01-29T19:37:23.668Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:25.476Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #🗽・JID_98d4f0de
[2026-01-29T19:37:25.476Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 76 jobs in memory (cached)
[2026-01-29T19:37:25.478Z] [BOT] ✅ Loaded V2 database: 76 jobs
[2026-01-29T19:37:25.478Z] [BOT] 💾 DISK STATE: 76 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=76
[2026-01-29T19:37:25.478Z] [BOT] 🔀 Deep merged: Sales Recruiter (12-month contract) @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T19:37:25.479Z] [BOT] 💾 AFTER MERGE: 76 jobs (merged disk + memory)
✅ No jobs to archive (all 76 jobs within 7-day window)
[2026-01-29T19:37:25.485Z] [BOT] 💾 Saved posted_jobs.json: 76 active jobs
[2026-01-29T19:37:25.485Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:29.986Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T19:37:29.986Z] [BOT] 📍 [ROUTING] "Associate Operations & Modeling Rail Planner/Analyst" @ ORG_b01859ad
[2026-01-29T19:37:29.987Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T19:37:30.225Z] [BOT] ✅ Posted message: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad in #💰・finance-jobs
  ✅ Industry: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad
[2026-01-29T19:37:30.225Z] [BOT] 💾 Added channel posting: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad → category channel (1 total channels)
💾 BEFORE MERGE: 77 jobs in memory (cached)
[2026-01-29T19:37:30.227Z] [BOT] ✅ Loaded V2 database: 76 jobs
💾 DISK STATE: 76 jobs on disk
[2026-01-29T19:37:30.227Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=77
[2026-01-29T19:37:30.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 77 jobs (merged disk + memory)
✅ No jobs to archive (all 77 jobs within 7-day window)
[2026-01-29T19:37:30.234Z] [BOT] 💾 Saved posted_jobs.json: 77 active jobs
[2026-01-29T19:37:30.234Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:31.915Z] [BOT] ✅ Posted message: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad in #🗽・JID_98d4f0de
[2026-01-29T19:37:31.916Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad → location channel (2 total channels)
💾 BEFORE MERGE: 77 jobs in memory (cached)
[2026-01-29T19:37:31.917Z] [BOT] ✅ Loaded V2 database: 77 jobs
[2026-01-29T19:37:31.917Z] [BOT] 💾 DISK STATE: 77 jobs on disk
[2026-01-29T19:37:31.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=77
[2026-01-29T19:37:31.918Z] [BOT] 🔀 Deep merged: Associate Operations & Modeling Rail Planner/Analyst @ ORG_b01859ad (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:37:31.918Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 77 jobs (merged disk + memory)
[2026-01-29T19:37:31.918Z] [BOT] ✅ No jobs to archive (all 77 jobs within 7-day window)
[2026-01-29T19:37:31.924Z] [BOT] 💾 Saved posted_jobs.json: 77 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:36.425Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-29T19:37:36.426Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_76405c14 & Bradstreet
[2026-01-29T19:37:36.426Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T19:37:36.727Z] [BOT] ✅ Posted message: Technology Analyst Program @ ORG_76405c14 & Bradstreet in #🤖・ai-jobs
  ✅ Industry: Technology Analyst Program @ ORG_76405c14 & Bradstreet
[2026-01-29T19:37:36.727Z] [BOT] 💾 Added channel posting: Technology Analyst Program @ ORG_76405c14 & Bradstreet → category channel (1 total channels)
💾 BEFORE MERGE: 78 jobs in memory (cached)
[2026-01-29T19:37:36.729Z] [BOT] ✅ Loaded V2 database: 77 jobs
[2026-01-29T19:37:36.729Z] [BOT] 💾 DISK STATE: 77 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=78
[2026-01-29T19:37:36.729Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:36.729Z] [BOT] 💾 AFTER MERGE: 78 jobs (merged disk + memory)
[2026-01-29T19:37:36.730Z] [BOT] ✅ No jobs to archive (all 78 jobs within 7-day window)
[2026-01-29T19:37:36.735Z] [BOT] 💾 Saved posted_jobs.json: 78 active jobs
[2026-01-29T19:37:36.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:38.238Z] [BOT] 📍 [ROUTING] "Data Analyst – Graduates" @ ORG_0760d36d
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T19:37:38.239Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T19:37:38.447Z] [BOT] ✅ Posted message: Data Analyst – Graduates @ ORG_0760d36d in #🤖・ai-jobs
  ✅ Industry: Data Analyst – Graduates @ ORG_0760d36d
[2026-01-29T19:37:38.448Z] [BOT] 💾 Added channel posting: Data Analyst – Graduates @ ORG_0760d36d → category channel (1 total channels)
💾 BEFORE MERGE: 79 jobs in memory (cached)
[2026-01-29T19:37:38.450Z] [BOT] ✅ Loaded V2 database: 78 jobs
[2026-01-29T19:37:38.450Z] [BOT] 💾 DISK STATE: 78 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=79
[2026-01-29T19:37:38.450Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:38.450Z] [BOT] 💾 AFTER MERGE: 79 jobs (merged disk + memory)
[2026-01-29T19:37:38.450Z] [BOT] ✅ No jobs to archive (all 79 jobs within 7-day window)
[2026-01-29T19:37:38.457Z] [BOT] 💾 Saved posted_jobs.json: 79 active jobs
[2026-01-29T19:37:38.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:37:42.959Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_91c5853e..." not found, but found as SHA256 "89dbb1d8f91a8347"
[2026-01-29T19:37:42.960Z] [BOT] ⏭️  Skipping duplicate: JID_55094bb1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ccf6e742..." not found, but found as SHA256 "f7623b06c9d2da4f"
[2026-01-29T19:37:42.960Z] [BOT] ⏭️  Skipping duplicate: JID_113f9ae5-cx_2001-job-79478 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_32cb5f7b..." not found, but found as SHA256 "ebf86512d79f84c5"
⏭️  Skipping duplicate: JID_09e950bb (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2440ea20-..." not found, but found as SHA256 "302091e9f163b4fc"
⏭️  Skipping duplicate: JID_7e96f7ff (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28c22446..." not found, but found as SHA256 "3c57ba57993b7d43"
⏭️  Skipping duplicate: JID_28c22446 (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f88a64c..." not found, but found as SHA256 "2036c314a0e79039"
⏭️  Skipping duplicate: JID_99b784b5-graduates_103573 (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8b9359f0..." not found, but found as SHA256 "a12cc3d07a5ad8c1"
⏭️  Skipping duplicate: JID_8b9359f0 (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_602076ee..." not found, but found as SHA256 "9aa2fdd396ffb95a"
⏭️  Skipping duplicate: JID_602076ee (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5706ec3c1dcd9548"
⏭️  Skipping duplicate: JID_21343f2a (posted within 7 days)
[2026-01-29T19:37:42.960Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_be001fd8..." not found, but found as SHA256 "d2e33343635b4a23"
[2026-01-29T19:37:42.961Z] [BOT] ⏭️  Skipping duplicate: JID_be001fd8 (posted within 7 days)
[2026-01-29T19:37:43.098Z] [BOT] ✅ Loaded pending queue: 2879 total (2792 pending, 47 enriched, 40 posted)
[2026-01-29T19:37:43.268Z] [BOT] ✅ Saved pending queue: 2879 total (2792 pending, 37 enriched, 50 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T19:37:43.268Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T19:37:43.351Z] [BOT] 📂 Loaded 10131 existing routing entries
[2026-01-29T19:37:43.458Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10141
[2026-01-29T19:37:43.459Z] [BOT] Timestamp: 2026-01-29T19:37:43.414Z
[2026-01-29T19:37:43.459Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T19:37:43.459Z] [BOT] Total attempts: 16
   Successful: 13
   Failed: 0
   Skipped: 3
[2026-01-29T19:37:43.459Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-29T19:37:43.460Z] [BOT] Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-29T19:37:43.460Z] [BOT] 2. #🗽・JID_98d4f0de: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-29T19:37:43.460Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T19:37:43.460Z] [BOT] 💾 BEFORE MERGE: 79 jobs in memory (cached)
[2026-01-29T19:37:43.463Z] [BOT] ✅ Loaded V2 database: 79 jobs
[2026-01-29T19:37:43.463Z] [BOT] 💾 DISK STATE: 79 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=79
[2026-01-29T19:37:43.463Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:37:43.463Z] [BOT] 💾 AFTER MERGE: 79 jobs (merged disk + memory)
✅ No jobs to archive (all 79 jobs within 7-day window)
[2026-01-29T19:37:43.469Z] [BOT] 💾 Saved posted_jobs.json: 79 active jobs
[2026-01-29T19:37:43.469Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T19:37:45.497Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3001) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*