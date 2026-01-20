# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T23:30:21.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T23:29:52.505Z] ========================================
[2026-01-20T23:29:52.507Z] Discord Bot Execution Log
[2026-01-20T23:29:52.507Z] Environment: GitHub Actions
[2026-01-20T23:29:52.507Z] Node Version: v20.19.6
[2026-01-20T23:29:52.507Z] ========================================
[2026-01-20T23:29:52.507Z] Environment Variables Check:
[2026-01-20T23:29:52.507Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T23:29:52.507Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.507Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T23:29:52.508Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T23:29:52.508Z] 
Multi-Channel Configuration:
[2026-01-20T23:29:52.508Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T23:29:52.508Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T23:29:52.509Z] 
Data Files Check:
[2026-01-20T23:29:52.510Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160729 bytes)
[2026-01-20T23:29:52.521Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1699085 bytes)
[2026-01-20T23:29:52.521Z] 
========================================
[2026-01-20T23:29:52.521Z] Starting Enhanced Discord Bot...
[2026-01-20T23:29:52.521Z] ========================================
[2026-01-20T23:29:53.053Z] [BOT] ✅ Loaded V2 database: 3031 jobs
[2026-01-20T23:29:53.730Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T23:29:53.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T23:29:53.731Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T23:29:53.847Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Select Major Account Executive EST/CST - Philadelphia, PA at samsara
[2026-01-20T23:29:53.850Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T23:29:53.851Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T23:29:53.851Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T23:29:53.852Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-20T23:29:53.852Z] [BOT] (9 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Select Major Account Executive EST/CST - Philadelphia, PA @ samsara: philadelphia, providence, raleigh, richmond, san antonio, tallahassee, tampa, washington, d.c.
   - Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara: los angeles, san diego
   - Senior Hardware Systems Engineer @ samsara: san francisco, ca, united states, san francisco - sf9
[2026-01-20T23:29:53.852Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T23:29:53.856Z] [BOT] 📌 Posting 9 jobs to #tech-jobs
[2026-01-20T23:29:53.856Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Philadelphia, PA" @ samsara
   Category: TECH (default)
[2026-01-20T23:29:53.856Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T23:29:53.860Z] [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T23:29:54.266Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara in #tech-jobs
[2026-01-20T23:29:54.266Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara
[2026-01-20T23:29:54.267Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara → category channel (1 total channels)
[2026-01-20T23:29:54.267Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-20T23:29:54.270Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T23:29:54.274Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T23:29:54.274Z] [BOT] ✅ Archiving complete: 10 archived, 3022 active
[2026-01-20T23:29:54.296Z] [BOT] 💾 Saved posted_jobs.json: 3022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.798Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara (instance #1)
[2026-01-20T23:29:55.799Z] [BOT] 💾 BEFORE ARCHIVING: 3023 jobs in database
[2026-01-20T23:29:55.800Z] [BOT] ✅ No jobs to archive (all 3023 jobs within 7-day window)
[2026-01-20T23:29:55.818Z] [BOT] 💾 Saved posted_jobs.json: 3023 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.819Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Providence, RI @ samsara (instance #1)
[2026-01-20T23:29:55.819Z] [BOT] 💾 BEFORE ARCHIVING: 3024 jobs in database
[2026-01-20T23:29:55.821Z] [BOT] ✅ No jobs to archive (all 3024 jobs within 7-day window)
[2026-01-20T23:29:55.840Z] [BOT] 💾 Saved posted_jobs.json: 3024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.840Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Raleigh, NC @ samsara (instance #1)
[2026-01-20T23:29:55.840Z] [BOT] 💾 BEFORE ARCHIVING: 3025 jobs in database
[2026-01-20T23:29:55.842Z] [BOT] ✅ No jobs to archive (all 3025 jobs within 7-day window)
[2026-01-20T23:29:55.861Z] [BOT] 💾 Saved posted_jobs.json: 3025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.861Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Richmond, VA @ samsara (instance #1)
[2026-01-20T23:29:55.861Z] [BOT] 💾 BEFORE ARCHIVING: 3026 jobs in database
[2026-01-20T23:29:55.863Z] [BOT] ✅ No jobs to archive (all 3026 jobs within 7-day window)
[2026-01-20T23:29:55.882Z] [BOT] 💾 Saved posted_jobs.json: 3026 active jobs
[2026-01-20T23:29:55.882Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.882Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - San Antonio, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 3027 jobs in database
[2026-01-20T23:29:55.884Z] [BOT] ✅ No jobs to archive (all 3027 jobs within 7-day window)
[2026-01-20T23:29:55.900Z] [BOT] 💾 Saved posted_jobs.json: 3027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.901Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara (instance #1)
[2026-01-20T23:29:55.901Z] [BOT] 💾 BEFORE ARCHIVING: 3028 jobs in database
[2026-01-20T23:29:55.903Z] [BOT] ✅ No jobs to archive (all 3028 jobs within 7-day window)
[2026-01-20T23:29:55.921Z] [BOT] 💾 Saved posted_jobs.json: 3028 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.921Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tampa, FL @ samsara (instance #1)
[2026-01-20T23:29:55.921Z] [BOT] 💾 BEFORE ARCHIVING: 3029 jobs in database
[2026-01-20T23:29:55.923Z] [BOT] ✅ No jobs to archive (all 3029 jobs within 7-day window)
[2026-01-20T23:29:55.941Z] [BOT] 💾 Saved posted_jobs.json: 3029 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.941Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Washington, DC @ samsara (instance #1)
[2026-01-20T23:29:55.941Z] [BOT] 💾 BEFORE ARCHIVING: 3030 jobs in database
[2026-01-20T23:29:55.942Z] [BOT] ✅ No jobs to archive (all 3030 jobs within 7-day window)
[2026-01-20T23:29:55.959Z] [BOT] 💾 Saved posted_jobs.json: 3030 active jobs
[2026-01-20T23:29:55.959Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:55.959Z] [BOT] 📍 [ROUTING] "Select Major Account Executive (MST/PST) - Los Angeles, CA" @ samsara
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:29:56.119Z] [BOT] ✅ Posted message: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara in #tech-jobs
  ✅ Industry: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara
[2026-01-20T23:29:56.119Z] [BOT] 💾 Added channel posting: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara → category channel (1 total channels)
[2026-01-20T23:29:56.120Z] [BOT] 💾 BEFORE ARCHIVING: 3031 jobs in database
[2026-01-20T23:29:56.121Z] [BOT] ✅ No jobs to archive (all 3031 jobs within 7-day window)
[2026-01-20T23:29:56.139Z] [BOT] 💾 Saved posted_jobs.json: 3031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:57.640Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara (instance #1)
[2026-01-20T23:29:57.641Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-20T23:29:57.642Z] [BOT] ✅ No jobs to archive (all 3032 jobs within 7-day window)
[2026-01-20T23:29:57.659Z] [BOT] 💾 Saved posted_jobs.json: 3032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:57.659Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - San Diego, CA @ samsara (instance #1)
[2026-01-20T23:29:57.660Z] [BOT] 💾 BEFORE ARCHIVING: 3033 jobs in database
[2026-01-20T23:29:57.661Z] [BOT] ✅ No jobs to archive (all 3033 jobs within 7-day window)
[2026-01-20T23:29:57.678Z] [BOT] 💾 Saved posted_jobs.json: 3033 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:57.678Z] [BOT] 📍 [ROUTING] "Senior Hardware Systems Engineer" @ samsara
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T23:29:57.678Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T23:29:58.066Z] [BOT] ✅ Posted message: Senior Hardware Systems Engineer @ samsara in #tech-jobs
  ✅ Industry: Senior Hardware Systems Engineer @ samsara
[2026-01-20T23:29:58.067Z] [BOT] 💾 Added channel posting: Senior Hardware Systems Engineer @ samsara → category channel (1 total channels)
[2026-01-20T23:29:58.067Z] [BOT] 💾 BEFORE ARCHIVING: 3034 jobs in database
[2026-01-20T23:29:58.069Z] [BOT] ✅ No jobs to archive (all 3034 jobs within 7-day window)
[2026-01-20T23:29:58.086Z] [BOT] 💾 Saved posted_jobs.json: 3034 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:59.589Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
[2026-01-20T23:29:59.589Z] [BOT] 💾 BEFORE ARCHIVING: 3035 jobs in database
[2026-01-20T23:29:59.591Z] [BOT] ✅ No jobs to archive (all 3035 jobs within 7-day window)
[2026-01-20T23:29:59.608Z] [BOT] 💾 Saved posted_jobs.json: 3035 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:59.608Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
[2026-01-20T23:29:59.608Z] [BOT] 💾 BEFORE ARCHIVING: 3036 jobs in database
[2026-01-20T23:29:59.610Z] [BOT] ✅ No jobs to archive (all 3036 jobs within 7-day window)
[2026-01-20T23:29:59.627Z] [BOT] 💾 Saved posted_jobs.json: 3036 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:29:59.627Z] [BOT] 📍 [ROUTING] "Senior IT Network Engineer" @ samsara
[2026-01-20T23:29:59.627Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:29:59.869Z] [BOT] ✅ Posted message: Senior IT Network Engineer @ samsara in #tech-jobs
  ✅ Industry: Senior IT Network Engineer @ samsara
[2026-01-20T23:29:59.869Z] [BOT] 💾 Added channel posting: Senior IT Network Engineer @ samsara → category channel (1 total channels)
[2026-01-20T23:29:59.870Z] [BOT] 💾 BEFORE ARCHIVING: 3037 jobs in database
[2026-01-20T23:29:59.871Z] [BOT] ✅ No jobs to archive (all 3037 jobs within 7-day window)
[2026-01-20T23:29:59.888Z] [BOT] 💾 Saved posted_jobs.json: 3037 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:01.388Z] [BOT] 💾 Marked as posted: Senior IT Network Engineer @ samsara (instance #1)
[2026-01-20T23:30:01.388Z] [BOT] 💾 BEFORE ARCHIVING: 3038 jobs in database
[2026-01-20T23:30:01.390Z] [BOT] ✅ No jobs to archive (all 3038 jobs within 7-day window)
[2026-01-20T23:30:01.408Z] [BOT] 💾 Saved posted_jobs.json: 3038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:01.408Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Connected Workflows" @ samsara
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:30:01.633Z] [BOT] ✅ Posted message: Senior Software Engineer, Connected Workflows @ samsara in #tech-jobs
[2026-01-20T23:30:01.633Z] [BOT] ✅ Industry: Senior Software Engineer, Connected Workflows @ samsara
[2026-01-20T23:30:01.634Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Connected Workflows @ samsara → category channel (1 total channels)
[2026-01-20T23:30:01.634Z] [BOT] 💾 BEFORE ARCHIVING: 3039 jobs in database
[2026-01-20T23:30:01.636Z] [BOT] ✅ No jobs to archive (all 3039 jobs within 7-day window)
[2026-01-20T23:30:01.653Z] [BOT] 💾 Saved posted_jobs.json: 3039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:03.154Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Connected Workflows @ samsara (instance #1)
[2026-01-20T23:30:03.154Z] [BOT] 💾 BEFORE ARCHIVING: 3040 jobs in database
[2026-01-20T23:30:03.156Z] [BOT] ✅ No jobs to archive (all 3040 jobs within 7-day window)
[2026-01-20T23:30:03.177Z] [BOT] 💾 Saved posted_jobs.json: 3040 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:03.178Z] [BOT] 📍 [ROUTING] "Senior Staff Hardware Systems Engineer" @ samsara
[2026-01-20T23:30:03.178Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:30:03.450Z] [BOT] ✅ Posted message: Senior Staff Hardware Systems Engineer @ samsara in #tech-jobs
[2026-01-20T23:30:03.450Z] [BOT] ✅ Industry: Senior Staff Hardware Systems Engineer @ samsara
[2026-01-20T23:30:03.450Z] [BOT] 💾 Added channel posting: Senior Staff Hardware Systems Engineer @ samsara → category channel (1 total channels)
[2026-01-20T23:30:03.450Z] [BOT] 💾 BEFORE ARCHIVING: 3041 jobs in database
[2026-01-20T23:30:03.453Z] [BOT] ✅ No jobs to archive (all 3041 jobs within 7-day window)
[2026-01-20T23:30:03.472Z] [BOT] 💾 Saved posted_jobs.json: 3041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:04.973Z] [BOT] 💾 Marked as posted: Senior Staff Hardware Systems Engineer @ samsara (instance #1)
[2026-01-20T23:30:04.973Z] [BOT] 💾 BEFORE ARCHIVING: 3042 jobs in database
[2026-01-20T23:30:04.975Z] [BOT] ✅ No jobs to archive (all 3042 jobs within 7-day window)
[2026-01-20T23:30:04.994Z] [BOT] 💾 Saved posted_jobs.json: 3042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:04.994Z] [BOT] 📍 [ROUTING] "Senior Systems EPM" @ samsara
[2026-01-20T23:30:04.994Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:30:05.193Z] [BOT] ✅ Posted message: Senior Systems EPM @ samsara in #tech-jobs
[2026-01-20T23:30:05.193Z] [BOT] ✅ Industry: Senior Systems EPM @ samsara
[2026-01-20T23:30:05.194Z] [BOT] 💾 Added channel posting: Senior Systems EPM @ samsara → category channel (1 total channels)
[2026-01-20T23:30:05.194Z] [BOT] 💾 BEFORE ARCHIVING: 3043 jobs in database
[2026-01-20T23:30:05.196Z] [BOT] ✅ No jobs to archive (all 3043 jobs within 7-day window)
[2026-01-20T23:30:05.214Z] [BOT] 💾 Saved posted_jobs.json: 3043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:06.716Z] [BOT] 💾 Marked as posted: Senior Systems EPM @ samsara (instance #1)
[2026-01-20T23:30:06.716Z] [BOT] 💾 BEFORE ARCHIVING: 3044 jobs in database
[2026-01-20T23:30:06.718Z] [BOT] ✅ No jobs to archive (all 3044 jobs within 7-day window)
[2026-01-20T23:30:06.737Z] [BOT] 💾 Saved posted_jobs.json: 3044 active jobs
[2026-01-20T23:30:06.737Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer II - Mobile Platform" @ samsara
[2026-01-20T23:30:06.737Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:30:06.950Z] [BOT] ✅ Posted message: Software Engineer II - Mobile Platform @ samsara in #tech-jobs
[2026-01-20T23:30:06.950Z] [BOT] ✅ Industry: Software Engineer II - Mobile Platform @ samsara
[2026-01-20T23:30:06.951Z] [BOT] 💾 Added channel posting: Software Engineer II - Mobile Platform @ samsara → category channel (1 total channels)
[2026-01-20T23:30:06.951Z] [BOT] 💾 BEFORE ARCHIVING: 3045 jobs in database
[2026-01-20T23:30:06.952Z] [BOT] ✅ No jobs to archive (all 3045 jobs within 7-day window)
[2026-01-20T23:30:06.970Z] [BOT] 💾 Saved posted_jobs.json: 3045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:08.471Z] [BOT] 💾 Marked as posted: Software Engineer II - Mobile Platform @ samsara (instance #1)
[2026-01-20T23:30:08.471Z] [BOT] 💾 BEFORE ARCHIVING: 3046 jobs in database
[2026-01-20T23:30:08.473Z] [BOT] ✅ No jobs to archive (all 3046 jobs within 7-day window)
[2026-01-20T23:30:08.492Z] [BOT] 💾 Saved posted_jobs.json: 3046 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:08.492Z] [BOT] 📍 [ROUTING] "University Recruiter" @ samsara
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:30:08.820Z] [BOT] ✅ Posted message: University Recruiter @ samsara in #tech-jobs
  ✅ Industry: University Recruiter @ samsara
[2026-01-20T23:30:08.820Z] [BOT] 💾 Added channel posting: University Recruiter @ samsara → category channel (1 total channels)
[2026-01-20T23:30:08.821Z] [BOT] 💾 BEFORE ARCHIVING: 3047 jobs in database
[2026-01-20T23:30:08.822Z] [BOT] ✅ No jobs to archive (all 3047 jobs within 7-day window)
[2026-01-20T23:30:08.841Z] [BOT] 💾 Saved posted_jobs.json: 3047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:10.343Z] [BOT] 💾 Marked as posted: University Recruiter @ samsara (instance #1)
[2026-01-20T23:30:10.343Z] [BOT] 💾 BEFORE ARCHIVING: 3048 jobs in database
[2026-01-20T23:30:10.345Z] [BOT] ✅ No jobs to archive (all 3048 jobs within 7-day window)
[2026-01-20T23:30:10.362Z] [BOT] 💾 Saved posted_jobs.json: 3048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:13.362Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T23:30:13.363Z] [BOT] 📍 [ROUTING] "Solutions Integration Engineer III" @ samsara
[2026-01-20T23:30:13.363Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T23:30:13.733Z] [BOT] ✅ Posted message: Solutions Integration Engineer III @ samsara in #ai-jobs
[2026-01-20T23:30:13.733Z] [BOT] ✅ Industry: Solutions Integration Engineer III @ samsara
[2026-01-20T23:30:13.734Z] [BOT] 💾 Added channel posting: Solutions Integration Engineer III @ samsara → category channel (1 total channels)
[2026-01-20T23:30:13.734Z] [BOT] 💾 BEFORE ARCHIVING: 3049 jobs in database
[2026-01-20T23:30:13.736Z] [BOT] ✅ No jobs to archive (all 3049 jobs within 7-day window)
[2026-01-20T23:30:13.754Z] [BOT] 💾 Saved posted_jobs.json: 3049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:15.256Z] [BOT] 💾 Marked as posted: Solutions Integration Engineer III @ samsara (instance #1)
[2026-01-20T23:30:15.257Z] [BOT] 💾 BEFORE ARCHIVING: 3050 jobs in database
[2026-01-20T23:30:15.259Z] [BOT] ✅ No jobs to archive (all 3050 jobs within 7-day window)
[2026-01-20T23:30:15.278Z] [BOT] 💾 Saved posted_jobs.json: 3050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:30:18.279Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T23:30:18.280Z] [BOT] ⏭️  Skipping duplicate: JID_9cd0c16c (posted within 7 days)
[2026-01-20T23:30:18.280Z] [BOT] ⏭️  Skipping duplicate: JID_234d1170 (posted within 7 days)
[2026-01-20T23:30:18.280Z] [BOT] ⏭️  Skipping duplicate: JID_a7ff708b (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_de31ab0e (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_30b16819 (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_1fcd150f (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_9cf2a884 (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_f676ed39 (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_a5f1480c (posted within 7 days)
[2026-01-20T23:30:18.281Z] [BOT] ⏭️  Skipping duplicate: JID_6c22f675 (posted within 7 days)
[2026-01-20T23:30:18.386Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[2026-01-20T23:30:18.576Z] [BOT] ✅ Saved pending queue: 2745 total (2725 pending, 10 enriched, 10 posted)
[2026-01-20T23:30:18.577Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T23:30:18.640Z] [BOT] 📂 Loaded 5555 existing routing entries
[2026-01-20T23:30:18.717Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5565
   Timestamp: 2026-01-20T23:30:18.692Z
[2026-01-20T23:30:18.717Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T23:30:18.717Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-20T23:30:18.718Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T23:30:18.718Z] [BOT] Total posts: 10
   Channels used: 2
   Top channels:
     1. #tech-jobs: 9 posts
     2. #ai-jobs: 1 posts
[2026-01-20T23:30:18.718Z] [BOT] [STATS] Channel stats saved
[2026-01-20T23:30:20.744Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*