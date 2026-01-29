# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T19:52:48.290Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T19:52:05.077Z] ========================================
[2026-01-29T19:52:05.079Z] Discord Bot Execution Log
[2026-01-29T19:52:05.079Z] Environment: GitHub Actions
[2026-01-29T19:52:05.079Z] Node Version: v20.20.0
[2026-01-29T19:52:05.079Z] ========================================
[2026-01-29T19:52:05.079Z] Environment Variables Check:
[2026-01-29T19:52:05.079Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T19:52:05.079Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.079Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T19:52:05.079Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T19:52:05.079Z] 
Multi-Channel Configuration:
[2026-01-29T19:52:05.079Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T19:52:05.080Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T19:52:05.080Z] 
Data Files Check:
[2026-01-29T19:52:05.081Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156780 bytes)
[2026-01-29T19:52:05.085Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 398576 bytes)
[2026-01-29T19:52:05.085Z] 
========================================
[2026-01-29T19:52:05.085Z] Starting Enhanced Discord Bot...
[2026-01-29T19:52:05.085Z] ========================================
[2026-01-29T19:52:05.570Z] [BOT] ✅ Loaded V2 database: 79 jobs
[2026-01-29T19:52:06.219Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T19:52:06.219Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T19:52:06.220Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T19:52:06.379Z] [BOT] ✅ Loaded pending queue: 2881 total (2781 pending, 50 enriched, 50 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Recruiter (12-month contract) at brex
[2026-01-29T19:52:06.383Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T19:52:06.383Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
[2026-01-29T19:52:06.384Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
[2026-01-29T19:52:06.533Z] [BOT] ✅ Loaded pending queue: 2881 total (2781 pending, 50 enriched, 50 posted)
[2026-01-29T19:52:06.707Z] [BOT] ✅ Saved pending queue: 2879 total (2781 pending, 48 enriched, 50 posted)
[2026-01-29T19:52:06.707Z] [BOT] 🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 48 jobs (2 blacklisted)
[2026-01-29T19:52:06.707Z] [BOT] 📋 After data quality filter: 48 jobs (0 invalid)
[2026-01-29T19:52:06.708Z] [BOT] 📋 After multi-location grouping: 46 unique jobs to post
[2026-01-29T19:52:06.708Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-29T19:52:06.708Z] [BOT] - Sales Recruiter (12-month contract) @ brex: salt lake city, utah, united states, san francisco, california, united states
   - 2026 Full-time - Software Engineer I @ RTX: mckinney, marlborough
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T19:52:06.712Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T19:52:06.713Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
   Category: TECH (default)
[2026-01-29T19:52:06.713Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:06.730Z] [BOT ERROR] (node:2961) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T19:52:06.962Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #💻・tech-jobs
[2026-01-29T19:52:06.962Z] [BOT] ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-29T19:52:06.963Z] [BOT] 💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → category channel (1 total channels)
[2026-01-29T19:52:06.963Z] [BOT] 💾 BEFORE MERGE: 80 jobs in memory (cached)
[2026-01-29T19:52:06.966Z] [BOT] ✅ Loaded V2 database: 79 jobs
[2026-01-29T19:52:06.967Z] [BOT] 💾 DISK STATE: 79 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=80
[2026-01-29T19:52:06.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:06.968Z] [BOT] 💾 AFTER MERGE: 80 jobs (merged disk + memory)
[2026-01-29T19:52:06.968Z] [BOT] ✅ No jobs to archive (all 80 jobs within 7-day window)
[2026-01-29T19:52:06.977Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:08.709Z] [BOT] ✅ Posted message: Sales Recruiter (12-month contract) @ brex in #🏠・JID_ead674af
[2026-01-29T19:52:08.709Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Sales Recruiter (12-month contract) @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 80 jobs in memory (cached)
[2026-01-29T19:52:08.711Z] [BOT] ✅ Loaded V2 database: 80 jobs
[2026-01-29T19:52:08.711Z] [BOT] 💾 DISK STATE: 80 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=80
[2026-01-29T19:52:08.712Z] [BOT] 🔀 Deep merged: Sales Recruiter (12-month contract) @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:52:08.712Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 80 jobs (merged disk + memory)
[2026-01-29T19:52:08.712Z] [BOT] ✅ No jobs to archive (all 80 jobs within 7-day window)
[2026-01-29T19:52:08.717Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
[2026-01-29T19:52:08.718Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:10.219Z] [BOT] 📍 [ROUTING] "Container Runtime Engineer" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:10.433Z] [BOT] ✅ Posted message: Container Runtime Engineer @ datadog in #💻・tech-jobs
  ✅ Industry: Container Runtime Engineer @ datadog
[2026-01-29T19:52:10.433Z] [BOT] 💾 Added channel posting: Container Runtime Engineer @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 81 jobs in memory (cached)
[2026-01-29T19:52:10.435Z] [BOT] ✅ Loaded V2 database: 80 jobs
[2026-01-29T19:52:10.435Z] [BOT] 💾 DISK STATE: 80 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=81
[2026-01-29T19:52:10.435Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 81 jobs (merged disk + memory)
[2026-01-29T19:52:10.435Z] [BOT] ✅ No jobs to archive (all 81 jobs within 7-day window)
[2026-01-29T19:52:10.441Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:12.420Z] [BOT] ✅ Posted message: Container Runtime Engineer @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T19:52:12.421Z] [BOT] 💾 Added channel posting: Container Runtime Engineer @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 81 jobs in memory (cached)
[2026-01-29T19:52:12.423Z] [BOT] ✅ Loaded V2 database: 81 jobs
💾 DISK STATE: 81 jobs on disk
[2026-01-29T19:52:12.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=81
[2026-01-29T19:52:12.423Z] [BOT] 🔀 Deep merged: Container Runtime Engineer @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T19:52:12.423Z] [BOT] 💾 AFTER MERGE: 81 jobs (merged disk + memory)
[2026-01-29T19:52:12.423Z] [BOT] ✅ No jobs to archive (all 81 jobs within 7-day window)
[2026-01-29T19:52:12.429Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:13.929Z] [BOT] 📍 [ROUTING] "Product Designer II, Actions" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:14.164Z] [BOT] ✅ Posted message: Product Designer II, Actions @ datadog in #💻・tech-jobs
  ✅ Industry: Product Designer II, Actions @ datadog
[2026-01-29T19:52:14.164Z] [BOT] 💾 Added channel posting: Product Designer II, Actions @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 82 jobs in memory (cached)
[2026-01-29T19:52:14.166Z] [BOT] ✅ Loaded V2 database: 81 jobs
💾 DISK STATE: 81 jobs on disk
[2026-01-29T19:52:14.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=82
[2026-01-29T19:52:14.167Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 82 jobs (merged disk + memory)
[2026-01-29T19:52:14.167Z] [BOT] ✅ No jobs to archive (all 82 jobs within 7-day window)
[2026-01-29T19:52:14.172Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:16.494Z] [BOT] ✅ Posted message: Product Designer II, Actions @ datadog in #🗽・JID_98d4f0de
[2026-01-29T19:52:16.495Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Product Designer II, Actions @ datadog → location channel (2 total channels)
[2026-01-29T19:52:16.495Z] [BOT] 💾 BEFORE MERGE: 82 jobs in memory (cached)
[2026-01-29T19:52:16.498Z] [BOT] ✅ Loaded V2 database: 82 jobs
[2026-01-29T19:52:16.498Z] [BOT] 💾 DISK STATE: 82 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=82
[2026-01-29T19:52:16.499Z] [BOT] 🔀 Deep merged: Product Designer II, Actions @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:52:16.499Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 82 jobs (merged disk + memory)
[2026-01-29T19:52:16.499Z] [BOT] ✅ No jobs to archive (all 82 jobs within 7-day window)
[2026-01-29T19:52:16.506Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:18.007Z] [BOT] 📍 [ROUTING] "Sales Development Representative" @ gusto
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:18.416Z] [BOT] ✅ Posted message: Sales Development Representative @ gusto in #💻・tech-jobs
[2026-01-29T19:52:18.417Z] [BOT] ✅ Industry: Sales Development Representative @ gusto
💾 Added channel posting: Sales Development Representative @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 83 jobs in memory (cached)
[2026-01-29T19:52:18.419Z] [BOT] ✅ Loaded V2 database: 82 jobs
💾 DISK STATE: 82 jobs on disk
[2026-01-29T19:52:18.419Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=83
[2026-01-29T19:52:18.421Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:18.421Z] [BOT] 💾 AFTER MERGE: 83 jobs (merged disk + memory)
✅ No jobs to archive (all 83 jobs within 7-day window)
[2026-01-29T19:52:18.426Z] [BOT] 💾 Saved posted_jobs.json: 83 active jobs
[2026-01-29T19:52:18.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:19.928Z] [BOT] 📍 [ROUTING] "Head of Sales & Partnerships Recruiting " @ anthropic
[2026-01-29T19:52:19.929Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:20.116Z] [BOT] ✅ Posted message: Head of Sales & Partnerships Recruiting  @ anthropic in #💻・tech-jobs
[2026-01-29T19:52:20.116Z] [BOT] ✅ Industry: Head of Sales & Partnerships Recruiting  @ anthropic
💾 Added channel posting: Head of Sales & Partnerships Recruiting  @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 84 jobs in memory (cached)
[2026-01-29T19:52:20.119Z] [BOT] ✅ Loaded V2 database: 83 jobs
💾 DISK STATE: 83 jobs on disk
[2026-01-29T19:52:20.119Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=84
[2026-01-29T19:52:20.119Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:20.119Z] [BOT] 💾 AFTER MERGE: 84 jobs (merged disk + memory)
[2026-01-29T19:52:20.120Z] [BOT] ✅ No jobs to archive (all 84 jobs within 7-day window)
[2026-01-29T19:52:20.127Z] [BOT] 💾 Saved posted_jobs.json: 84 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:21.628Z] [BOT] 📍 [ROUTING] "Sourcer II" @ datadog
   Category: TECH (default)
[2026-01-29T19:52:21.628Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T19:52:21.895Z] [BOT] ✅ Posted message: Sourcer II @ datadog in #💻・tech-jobs
[2026-01-29T19:52:21.895Z] [BOT] ✅ Industry: Sourcer II @ datadog
💾 Added channel posting: Sourcer II @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 85 jobs in memory (cached)
[2026-01-29T19:52:21.898Z] [BOT] ✅ Loaded V2 database: 84 jobs
💾 DISK STATE: 84 jobs on disk
[2026-01-29T19:52:21.898Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=85
[2026-01-29T19:52:21.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 85 jobs (merged disk + memory)
[2026-01-29T19:52:21.898Z] [BOT] ✅ No jobs to archive (all 85 jobs within 7-day window)
[2026-01-29T19:52:21.905Z] [BOT] 💾 Saved posted_jobs.json: 85 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:23.847Z] [BOT] ✅ Posted message: Sourcer II @ datadog in #🗽・JID_98d4f0de
[2026-01-29T19:52:23.847Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Sourcer II @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 85 jobs in memory (cached)
[2026-01-29T19:52:23.849Z] [BOT] ✅ Loaded V2 database: 85 jobs
💾 DISK STATE: 85 jobs on disk
[2026-01-29T19:52:23.850Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=85
[2026-01-29T19:52:23.850Z] [BOT] 🔀 Deep merged: Sourcer II @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-29T19:52:23.850Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 85 jobs (merged disk + memory)
[2026-01-29T19:52:23.850Z] [BOT] ✅ No jobs to archive (all 85 jobs within 7-day window)
[2026-01-29T19:52:23.857Z] [BOT] 💾 Saved posted_jobs.json: 85 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:28.361Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-29T19:52:28.362Z] [BOT] 📍 [ROUTING] "Compute Analyst" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-29T19:52:28.362Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T19:52:28.772Z] [BOT] ✅ Posted message: Compute Analyst @ anthropic in #📊・JID_fb739488
[2026-01-29T19:52:28.772Z] [BOT] ✅ Industry: Compute Analyst @ anthropic
💾 Added channel posting: Compute Analyst @ anthropic → category channel (1 total channels)
[2026-01-29T19:52:28.772Z] [BOT] 💾 BEFORE MERGE: 86 jobs in memory (cached)
[2026-01-29T19:52:28.775Z] [BOT] ✅ Loaded V2 database: 85 jobs
💾 DISK STATE: 85 jobs on disk
[2026-01-29T19:52:28.775Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=86
[2026-01-29T19:52:28.775Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:28.775Z] [BOT] 💾 AFTER MERGE: 86 jobs (merged disk + memory)
[2026-01-29T19:52:28.775Z] [BOT] ✅ No jobs to archive (all 86 jobs within 7-day window)
[2026-01-29T19:52:28.781Z] [BOT] 💾 Saved posted_jobs.json: 86 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:30.283Z] [BOT] 📍 [ROUTING] "Compute Capacity Strategy & Operations" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-29T19:52:30.283Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T19:52:30.697Z] [BOT] ✅ Posted message: Compute Capacity Strategy & Operations @ anthropic in #📊・JID_fb739488
[2026-01-29T19:52:30.697Z] [BOT] ✅ Industry: Compute Capacity Strategy & Operations @ anthropic
[2026-01-29T19:52:30.698Z] [BOT] 💾 Added channel posting: Compute Capacity Strategy & Operations @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 87 jobs in memory (cached)
[2026-01-29T19:52:30.701Z] [BOT] ✅ Loaded V2 database: 86 jobs
💾 DISK STATE: 86 jobs on disk
[2026-01-29T19:52:30.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=87
[2026-01-29T19:52:30.701Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 87 jobs (merged disk + memory)
[2026-01-29T19:52:30.701Z] [BOT] ✅ No jobs to archive (all 87 jobs within 7-day window)
[2026-01-29T19:52:30.708Z] [BOT] 💾 Saved posted_jobs.json: 87 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:35.209Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-29T19:52:35.210Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston" @ datadog
   Category: FINANCE (matched: "finance")
[2026-01-29T19:52:35.210Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T19:52:35.687Z] [BOT] ✅ Posted message: Customer Success Associate - Boston @ datadog in #💰・finance-jobs
[2026-01-29T19:52:35.687Z] [BOT] ✅ Industry: Customer Success Associate - Boston @ datadog
💾 Added channel posting: Customer Success Associate - Boston @ datadog → category channel (1 total channels)
[2026-01-29T19:52:35.687Z] [BOT] 💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-29T19:52:35.690Z] [BOT] ✅ Loaded V2 database: 87 jobs
💾 DISK STATE: 87 jobs on disk
[2026-01-29T19:52:35.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-29T19:52:35.691Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:35.691Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-29T19:52:35.691Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-29T19:52:35.699Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:37.200Z] [BOT] 📍 [ROUTING] "IT Internal Auditor II - NYC" @ datadog
   Category: FINANCE (matched: "finance")
[2026-01-29T19:52:37.200Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T19:52:38.026Z] [BOT] ✅ Posted message: IT Internal Auditor II - NYC @ datadog in #💰・finance-jobs
  ✅ Industry: IT Internal Auditor II - NYC @ datadog
[2026-01-29T19:52:38.026Z] [BOT] 💾 Added channel posting: IT Internal Auditor II - NYC @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 89 jobs in memory (cached)
[2026-01-29T19:52:38.029Z] [BOT] ✅ Loaded V2 database: 88 jobs
💾 DISK STATE: 88 jobs on disk
[2026-01-29T19:52:38.029Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=89
[2026-01-29T19:52:38.030Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T19:52:38.030Z] [BOT] 💾 AFTER MERGE: 89 jobs (merged disk + memory)
[2026-01-29T19:52:38.030Z] [BOT] ✅ No jobs to archive (all 89 jobs within 7-day window)
[2026-01-29T19:52:38.039Z] [BOT] 💾 Saved posted_jobs.json: 89 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:39.941Z] [BOT] ✅ Posted message: IT Internal Auditor II - NYC @ datadog in #🗽・JID_98d4f0de
[2026-01-29T19:52:39.941Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: IT Internal Auditor II - NYC @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 89 jobs in memory (cached)
[2026-01-29T19:52:39.944Z] [BOT] ✅ Loaded V2 database: 89 jobs
💾 DISK STATE: 89 jobs on disk
[2026-01-29T19:52:39.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=89
[2026-01-29T19:52:39.945Z] [BOT] 🔀 Deep merged: IT Internal Auditor II - NYC @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T19:52:39.945Z] [BOT] 💾 AFTER MERGE: 89 jobs (merged disk + memory)
[2026-01-29T19:52:39.945Z] [BOT] ✅ No jobs to archive (all 89 jobs within 7-day window)
[2026-01-29T19:52:39.953Z] [BOT] 💾 Saved posted_jobs.json: 89 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:44.455Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_588f7f3b..." not found, but found as SHA256 "3fc9e5e673ad9a41"
[2026-01-29T19:52:44.456Z] [BOT] ⏭️  Skipping duplicate: JID_588f7f3b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_83819915..." not found, but found as SHA256 "06d7ac1cec409c4f"
⏭️  Skipping duplicate: JID_83819915 (posted within 7 days)
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2ae23100..." not found, but found as SHA256 "d0f67123726be881"
⏭️  Skipping duplicate: JID_2ae23100 (posted within 7 days)
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "590f1d0c2befb7fd"
⏭️  Skipping duplicate: JID_3f7908dd (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a77502af5e530a3a"
[2026-01-29T19:52:44.456Z] [BOT] ⏭️  Skipping duplicate: JID_10f069fb (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_09efd4a6..." not found, but found as SHA256 "792f237e31f76721"
⏭️  Skipping duplicate: JID_f4097fd8 (posted within 7 days)
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d57147e5..." not found, but found as SHA256 "b5122365e1bcf4ea"
⏭️  Skipping duplicate: JID_d57147e5 (posted within 7 days)
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f24417b..." not found, but found as SHA256 "31283c19812c10d3"
⏭️  Skipping duplicate: JID_1f24417b (posted within 7 days)
[2026-01-29T19:52:44.456Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e3b64f1c2514a95b"
⏭️  Skipping duplicate: JID_68d8829e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ac0b81b9..." not found, but found as SHA256 "668320062b686724"
[2026-01-29T19:52:44.457Z] [BOT] ⏭️  Skipping duplicate: JID_ac0b81b9 (posted within 7 days)
[2026-01-29T19:52:44.638Z] [BOT] ✅ Loaded pending queue: 2879 total (2781 pending, 48 enriched, 50 posted)
[2026-01-29T19:52:44.802Z] [BOT] ✅ Saved pending queue: 2879 total (2781 pending, 38 enriched, 60 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T19:52:44.898Z] [BOT] 📂 Loaded 10141 existing routing entries
[2026-01-29T19:52:45.003Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10151
   Timestamp: 2026-01-29T19:52:44.963Z
[2026-01-29T19:52:45.004Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T19:52:45.004Z] [BOT] Total attempts: 17
   Successful: 15
   Failed: 0
   Skipped: 2
[2026-01-29T19:52:45.004Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
[2026-01-29T19:52:45.004Z] [BOT] Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🗽・JID_98d4f0de: 4 posts
     3. #📊・JID_fb739488: 2 posts
[2026-01-29T19:52:45.004Z] [BOT] 4. #💰・finance-jobs: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-29T19:52:45.004Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T19:52:45.005Z] [BOT] 💾 BEFORE MERGE: 89 jobs in memory (cached)
[2026-01-29T19:52:45.008Z] [BOT] ✅ Loaded V2 database: 89 jobs
💾 DISK STATE: 89 jobs on disk
[2026-01-29T19:52:45.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=89
[2026-01-29T19:52:45.008Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 89 jobs (merged disk + memory)
[2026-01-29T19:52:45.008Z] [BOT] ✅ No jobs to archive (all 89 jobs within 7-day window)
[2026-01-29T19:52:45.014Z] [BOT] 💾 Saved posted_jobs.json: 89 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T19:52:45.015Z] [BOT] ✅ Database saved successfully
[2026-01-29T19:52:47.037Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2961) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*