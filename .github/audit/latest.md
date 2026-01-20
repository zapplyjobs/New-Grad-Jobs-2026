# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T23:56:36.926Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T23:55:54.415Z] ========================================
[2026-01-20T23:55:54.417Z] Discord Bot Execution Log
[2026-01-20T23:55:54.417Z] Environment: GitHub Actions
[2026-01-20T23:55:54.417Z] Node Version: v20.19.6
[2026-01-20T23:55:54.417Z] ========================================
[2026-01-20T23:55:54.417Z] Environment Variables Check:
[2026-01-20T23:55:54.417Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T23:55:54.417Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T23:55:54.418Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T23:55:54.418Z] 
Multi-Channel Configuration:
[2026-01-20T23:55:54.418Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.418Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T23:55:54.419Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T23:55:54.419Z] 
Data Files Check:
[2026-01-20T23:55:54.420Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121802 bytes)
[2026-01-20T23:55:54.431Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1716589 bytes)
[2026-01-20T23:55:54.431Z] 
========================================
[2026-01-20T23:55:54.431Z] Starting Enhanced Discord Bot...
[2026-01-20T23:55:54.431Z] ========================================
[2026-01-20T23:55:54.962Z] [BOT] ✅ Loaded V2 database: 3060 jobs
[2026-01-20T23:55:55.670Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T23:55:55.671Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T23:55:55.671Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T23:55:55.788Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Backend Developer at Gallup
[2026-01-20T23:55:55.791Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T23:55:55.791Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T23:55:55.792Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T23:55:55.792Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-20T23:55:55.793Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: salt lake city, ut united states, tempe, az united states, austin, tx united states, new york city, ny united states
   - National Channel Sales Manager, Convergint (East) @ verkada: atlanta, ga united states, jacksonville, fl united states, philadelphia, pa united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T23:55:55.793Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T23:55:55.797Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-20T23:55:55.797Z] [BOT] 📍 [ROUTING] "Senior Backend Developer" @ ORG_976dbfca
[2026-01-20T23:55:55.797Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T23:55:55.801Z] [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T23:55:56.118Z] [BOT] ✅ Posted message: Senior Backend Developer @ ORG_976dbfca in #ai-jobs
[2026-01-20T23:55:56.118Z] [BOT] ✅ Industry: Senior Backend Developer @ ORG_976dbfca
[2026-01-20T23:55:56.119Z] [BOT] 💾 Added channel posting: Senior Backend Developer @ ORG_976dbfca → category channel (1 total channels)
[2026-01-20T23:55:56.119Z] [BOT] 💾 BEFORE ARCHIVING: 3061 jobs in database
[2026-01-20T23:55:56.122Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T23:55:56.127Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T23:55:56.127Z] [BOT] ✅ Archiving complete: 10 archived, 3051 active
[2026-01-20T23:55:56.146Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:55:57.864Z] [BOT] ✅ Posted message: Senior Backend Developer @ ORG_976dbfca in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T23:55:57.864Z] [BOT] 💾 Added channel posting: Senior Backend Developer @ ORG_976dbfca → location channel (2 total channels)
[2026-01-20T23:55:57.864Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-20T23:55:57.866Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-20T23:55:57.884Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:55:59.385Z] [BOT] 💾 Marked as posted: Senior Backend Developer @ ORG_976dbfca (instance #1)
[2026-01-20T23:55:59.385Z] [BOT] 💾 BEFORE ARCHIVING: 3052 jobs in database
[2026-01-20T23:55:59.387Z] [BOT] ✅ No jobs to archive (all 3052 jobs within 7-day window)
[2026-01-20T23:55:59.406Z] [BOT] 💾 Saved posted_jobs.json: 3052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:55:59.406Z] [BOT] 📍 [ROUTING] "Backend Engineer  - Data Infrastructure" @ spotify
[2026-01-20T23:55:59.406Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T23:55:59.624Z] [BOT] ✅ Posted message: Backend Engineer  - Data Infrastructure @ spotify in #ai-jobs
[2026-01-20T23:55:59.624Z] [BOT] ✅ Industry: Backend Engineer  - Data Infrastructure @ spotify
[2026-01-20T23:55:59.625Z] [BOT] 💾 Added channel posting: Backend Engineer  - Data Infrastructure @ spotify → category channel (1 total channels)
[2026-01-20T23:55:59.625Z] [BOT] 💾 BEFORE ARCHIVING: 3053 jobs in database
[2026-01-20T23:55:59.627Z] [BOT] ✅ No jobs to archive (all 3053 jobs within 7-day window)
[2026-01-20T23:55:59.646Z] [BOT] 💾 Saved posted_jobs.json: 3053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:01.300Z] [BOT] ✅ Posted message: Backend Engineer  - Data Infrastructure @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T23:56:01.300Z] [BOT] 💾 Added channel posting: Backend Engineer  - Data Infrastructure @ spotify → location channel (2 total channels)
[2026-01-20T23:56:01.300Z] [BOT] 💾 BEFORE ARCHIVING: 3053 jobs in database
[2026-01-20T23:56:01.303Z] [BOT] ✅ No jobs to archive (all 3053 jobs within 7-day window)
[2026-01-20T23:56:01.321Z] [BOT] 💾 Saved posted_jobs.json: 3053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:02.822Z] [BOT] 💾 Marked as posted: Backend Engineer  - Data Infrastructure @ spotify (instance #1)
[2026-01-20T23:56:02.823Z] [BOT] 💾 BEFORE ARCHIVING: 3054 jobs in database
[2026-01-20T23:56:02.824Z] [BOT] ✅ No jobs to archive (all 3054 jobs within 7-day window)
[2026-01-20T23:56:02.841Z] [BOT] 💾 Saved posted_jobs.json: 3054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:02.842Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9d38443e of Chicago
[2026-01-20T23:56:02.842Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T23:56:03.040Z] [BOT] ✅ Posted message: Data Analyst @ ORG_9d38443e of Chicago in #ai-jobs
[2026-01-20T23:56:03.041Z] [BOT] ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2026-01-20T23:56:03.041Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-20T23:56:03.041Z] [BOT] 💾 BEFORE ARCHIVING: 3055 jobs in database
[2026-01-20T23:56:03.043Z] [BOT] ✅ No jobs to archive (all 3055 jobs within 7-day window)
[2026-01-20T23:56:03.061Z] [BOT] 💾 Saved posted_jobs.json: 3055 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:04.562Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_9d38443e of Chicago (instance #1)
[2026-01-20T23:56:04.562Z] [BOT] 💾 BEFORE ARCHIVING: 3056 jobs in database
[2026-01-20T23:56:04.564Z] [BOT] ✅ No jobs to archive (all 3056 jobs within 7-day window)
[2026-01-20T23:56:04.584Z] [BOT] 💾 Saved posted_jobs.json: 3056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:07.585Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T23:56:07.586Z] [BOT] 📍 [ROUTING] "Junior RUST Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:56:07.804Z] [BOT] ✅ Posted message: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #tech-jobs
[2026-01-20T23:56:07.804Z] [BOT] ✅ Industry: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-20T23:56:07.805Z] [BOT] 💾 Added channel posting: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-20T23:56:07.805Z] [BOT] 💾 BEFORE ARCHIVING: 3057 jobs in database
[2026-01-20T23:56:07.807Z] [BOT] ✅ No jobs to archive (all 3057 jobs within 7-day window)
[2026-01-20T23:56:07.825Z] [BOT] 💾 Saved posted_jobs.json: 3057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:09.326Z] [BOT] 💾 Marked as posted: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-20T23:56:09.326Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-20T23:56:09.328Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-20T23:56:09.348Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:09.348Z] [BOT] 📍 [ROUTING] "Consulting Associate - Engineering or Geology" @ ORG_d41a2092
[2026-01-20T23:56:09.348Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:56:10.935Z] [BOT] ✅ Posted message: Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #tech-jobs
[2026-01-20T23:56:10.936Z] [BOT] ✅ Industry: Consulting Associate - Engineering or Geology @ ORG_d41a2092
[2026-01-20T23:56:10.936Z] [BOT] 💾 Added channel posting: Consulting Associate - Engineering or Geology @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3059 jobs in database
[2026-01-20T23:56:10.939Z] [BOT] ✅ No jobs to archive (all 3059 jobs within 7-day window)
[2026-01-20T23:56:10.959Z] [BOT] 💾 Saved posted_jobs.json: 3059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:12.626Z] [BOT] ✅ Posted message: Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T23:56:12.626Z] [BOT] 💾 Added channel posting: Consulting Associate - Engineering or Geology @ ORG_d41a2092 → location channel (2 total channels)
[2026-01-20T23:56:12.626Z] [BOT] 💾 BEFORE ARCHIVING: 3059 jobs in database
[2026-01-20T23:56:12.628Z] [BOT] ✅ No jobs to archive (all 3059 jobs within 7-day window)
[2026-01-20T23:56:12.645Z] [BOT] 💾 Saved posted_jobs.json: 3059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:14.146Z] [BOT] 💾 Marked as posted: Consulting Associate - Engineering or Geology @ ORG_d41a2092 (instance #1)
[2026-01-20T23:56:14.146Z] [BOT] 💾 BEFORE ARCHIVING: 3060 jobs in database
[2026-01-20T23:56:14.148Z] [BOT] ✅ No jobs to archive (all 3060 jobs within 7-day window)
[2026-01-20T23:56:14.165Z] [BOT] 💾 Saved posted_jobs.json: 3060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:17.165Z] [BOT] 📌 Posting 4 jobs to #finance-jobs
[2026-01-20T23:56:17.166Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-20T23:56:17.412Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #finance-jobs
[2026-01-20T23:56:17.412Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-20T23:56:17.413Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-20T23:56:17.413Z] [BOT] 💾 BEFORE ARCHIVING: 3061 jobs in database
[2026-01-20T23:56:17.415Z] [BOT] ✅ No jobs to archive (all 3061 jobs within 7-day window)
[2026-01-20T23:56:17.432Z] [BOT] 💾 Saved posted_jobs.json: 3061 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:18.934Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-20T23:56:18.934Z] [BOT] 💾 BEFORE ARCHIVING: 3062 jobs in database
[2026-01-20T23:56:18.936Z] [BOT] ✅ No jobs to archive (all 3062 jobs within 7-day window)
[2026-01-20T23:56:18.953Z] [BOT] 💾 Saved posted_jobs.json: 3062 active jobs
[2026-01-20T23:56:18.953Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:18.953Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-20T23:56:18.953Z] [BOT] 💾 BEFORE ARCHIVING: 3063 jobs in database
[2026-01-20T23:56:18.955Z] [BOT] ✅ No jobs to archive (all 3063 jobs within 7-day window)
[2026-01-20T23:56:18.973Z] [BOT] 💾 Saved posted_jobs.json: 3063 active jobs
[2026-01-20T23:56:18.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:18.973Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3064 jobs in database
[2026-01-20T23:56:18.975Z] [BOT] ✅ No jobs to archive (all 3064 jobs within 7-day window)
[2026-01-20T23:56:18.993Z] [BOT] 💾 Saved posted_jobs.json: 3064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:18.993Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-20T23:56:18.993Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-20T23:56:18.995Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-20T23:56:19.014Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:19.014Z] [BOT] 📍 [ROUTING] "Account Executive, Select, Austin" @ verkada
[2026-01-20T23:56:19.014Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-20T23:56:19.202Z] [BOT] ✅ Posted message: Account Executive, Select, Austin @ verkada in #finance-jobs
[2026-01-20T23:56:19.202Z] [BOT] ✅ Industry: Account Executive, Select, Austin @ verkada
[2026-01-20T23:56:19.202Z] [BOT] 💾 Added channel posting: Account Executive, Select, Austin @ verkada → category channel (1 total channels)
[2026-01-20T23:56:19.202Z] [BOT] 💾 BEFORE ARCHIVING: 3066 jobs in database
[2026-01-20T23:56:19.204Z] [BOT] ✅ No jobs to archive (all 3066 jobs within 7-day window)
[2026-01-20T23:56:19.222Z] [BOT] 💾 Saved posted_jobs.json: 3066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:20.723Z] [BOT] 💾 Marked as posted: Account Executive, Select, Austin @ verkada (instance #1)
[2026-01-20T23:56:20.723Z] [BOT] 💾 BEFORE ARCHIVING: 3067 jobs in database
[2026-01-20T23:56:20.724Z] [BOT] ✅ No jobs to archive (all 3067 jobs within 7-day window)
[2026-01-20T23:56:20.741Z] [BOT] 💾 Saved posted_jobs.json: 3067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:20.741Z] [BOT] 📍 [ROUTING] "Channel Development Representative, South East (Tampa)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-20T23:56:20.741Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T23:56:20.979Z] [BOT] ✅ Posted message: Channel Development Representative, South East (Tampa) @ verkada in #finance-jobs
[2026-01-20T23:56:20.980Z] [BOT] ✅ Industry: Channel Development Representative, South East (Tampa) @ verkada
[2026-01-20T23:56:20.980Z] [BOT] 💾 Added channel posting: Channel Development Representative, South East (Tampa) @ verkada → category channel (1 total channels)
[2026-01-20T23:56:20.980Z] [BOT] 💾 BEFORE ARCHIVING: 3068 jobs in database
[2026-01-20T23:56:20.982Z] [BOT] ✅ No jobs to archive (all 3068 jobs within 7-day window)
[2026-01-20T23:56:21.000Z] [BOT] 💾 Saved posted_jobs.json: 3068 active jobs
[2026-01-20T23:56:21.000Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:22.501Z] [BOT] 💾 Marked as posted: Channel Development Representative, South East (Tampa) @ verkada (instance #1)
[2026-01-20T23:56:22.501Z] [BOT] 💾 BEFORE ARCHIVING: 3069 jobs in database
[2026-01-20T23:56:22.503Z] [BOT] ✅ No jobs to archive (all 3069 jobs within 7-day window)
[2026-01-20T23:56:22.521Z] [BOT] 💾 Saved posted_jobs.json: 3069 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:22.521Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_526691c5 Insurance
[2026-01-20T23:56:22.521Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T23:56:22.700Z] [BOT] ✅ Posted message: Technology Analyst Program @ ORG_526691c5 Insurance in #finance-jobs
[2026-01-20T23:56:22.701Z] [BOT] ✅ Industry: Technology Analyst Program @ ORG_526691c5 Insurance
[2026-01-20T23:56:22.701Z] [BOT] 💾 Added channel posting: Technology Analyst Program @ ORG_526691c5 Insurance → category channel (1 total channels)
[2026-01-20T23:56:22.701Z] [BOT] 💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-20T23:56:22.703Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-20T23:56:22.722Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:24.373Z] [BOT] ✅ Posted message: Technology Analyst Program @ ORG_526691c5 Insurance in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T23:56:24.373Z] [BOT] 💾 Added channel posting: Technology Analyst Program @ ORG_526691c5 Insurance → location channel (2 total channels)
[2026-01-20T23:56:24.373Z] [BOT] 💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-20T23:56:24.375Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-20T23:56:24.393Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:25.892Z] [BOT] 💾 Marked as posted: Technology Analyst Program @ ORG_526691c5 Insurance (instance #1)
[2026-01-20T23:56:25.893Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-20T23:56:25.894Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-20T23:56:25.912Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:28.912Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T23:56:28.912Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Convergint (East)" @ verkada
[2026-01-20T23:56:28.912Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T23:56:29.131Z] [BOT] ✅ Posted message: National Channel Sales Manager, Convergint (East) @ verkada in #JID_fb739488
  ✅ Industry: National Channel Sales Manager, Convergint (East) @ verkada
[2026-01-20T23:56:29.132Z] [BOT] 💾 Added channel posting: National Channel Sales Manager, Convergint (East) @ verkada → category channel (1 total channels)
[2026-01-20T23:56:29.132Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-20T23:56:29.134Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-20T23:56:29.150Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:30.652Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-20T23:56:30.652Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-20T23:56:30.654Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-20T23:56:30.671Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:30.671Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-20T23:56:30.672Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-20T23:56:30.673Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-20T23:56:30.690Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
[2026-01-20T23:56:30.690Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:30.690Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-20T23:56:30.692Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-20T23:56:30.709Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:56:33.710Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T23:56:33.710Z] [BOT] ⏭️  Skipping duplicate: JID_15f49163 (posted within 7 days)
[2026-01-20T23:56:33.710Z] [BOT] ⏭️  Skipping duplicate: JID_0b329593 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_aa50da2e (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_9601d5e9 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_f59a87c2 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_e5503d49 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_fe3ddf49 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_6cf3bd5c-geology_r00028752 (posted within 7 days)
[2026-01-20T23:56:33.711Z] [BOT] ⏭️  Skipping duplicate: JID_e938e280-analyst_jr32386 (posted within 7 days)
[2026-01-20T23:56:33.712Z] [BOT] ⏭️  Skipping duplicate: JID_cfb24211-2026_r2561 (posted within 7 days)
[2026-01-20T23:56:33.815Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[2026-01-20T23:56:34.002Z] [BOT] ✅ Saved pending queue: 2742 total (2722 pending, 10 enriched, 10 posted)
[2026-01-20T23:56:34.002Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T23:56:34.064Z] [BOT] 📂 Loaded 5575 existing routing entries
[2026-01-20T23:56:34.138Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5585
[2026-01-20T23:56:34.138Z] [BOT] Timestamp: 2026-01-20T23:56:34.115Z
[2026-01-20T23:56:34.138Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T23:56:34.139Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T23:56:34.139Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T23:56:34.139Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
     1. #finance-jobs: 4 posts
     2. #ai-jobs: 3 posts
     3. #JID_ead674af: 2 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-20T23:56:34.139Z] [BOT] 5. #tech-jobs: 2 posts
[2026-01-20T23:56:34.139Z] [BOT] [STATS] Channel stats saved
[2026-01-20T23:56:36.162Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*