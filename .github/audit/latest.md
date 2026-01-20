# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T19:32:33.597Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T19:31:48.831Z] ========================================
[2026-01-20T19:31:48.833Z] Discord Bot Execution Log
[2026-01-20T19:31:48.833Z] Environment: GitHub Actions
[2026-01-20T19:31:48.833Z] Node Version: v20.19.6
[2026-01-20T19:31:48.833Z] ========================================
[2026-01-20T19:31:48.833Z] Environment Variables Check:
[2026-01-20T19:31:48.833Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T19:31:48.833Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T19:31:48.834Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T19:31:48.834Z] 
Multi-Channel Configuration:
[2026-01-20T19:31:48.834Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.834Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T19:31:48.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T19:31:48.835Z] 
Data Files Check:
[2026-01-20T19:31:48.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103347 bytes)
[2026-01-20T19:31:48.846Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1633057 bytes)
[2026-01-20T19:31:48.846Z] 
========================================
[2026-01-20T19:31:48.846Z] Starting Enhanced Discord Bot...
[2026-01-20T19:31:48.846Z] ========================================
[2026-01-20T19:31:49.371Z] [BOT] ✅ Loaded V2 database: 2927 jobs
[2026-01-20T19:31:50.017Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T19:31:50.018Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T19:31:50.018Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T19:31:50.135Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Product Manager, Monetization at duolingo
[2026-01-20T19:31:50.138Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T19:31:50.139Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T19:31:50.139Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T19:31:50.140Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-20T19:31:50.140Z] [BOT] (8 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Mid Market (MST/PST) @ samsara: san francisco, ca, united states, phoenix, arizona, united states
   -  Mid-Market Account Executive - PubSec @ samsara: boston, charleston, baltimore, louisville, san antonio, denver
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T19:31:50.140Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T19:31:50.144Z] [BOT] 📌 Posting 8 jobs to #tech-jobs
[2026-01-20T19:31:50.145Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Monetization" @ duolingo
   Category: TECH (matched: "product")
[2026-01-20T19:31:50.145Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T19:31:50.149Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T19:31:50.424Z] [BOT] ✅ Posted message: Senior Product Manager, Monetization @ duolingo in #tech-jobs
[2026-01-20T19:31:50.424Z] [BOT] ✅ Industry: Senior Product Manager, Monetization @ duolingo
[2026-01-20T19:31:50.425Z] [BOT] 💾 Added channel posting: Senior Product Manager, Monetization @ duolingo → category channel (1 total channels)
[2026-01-20T19:31:50.425Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T19:31:50.428Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T19:31:50.432Z] [BOT] 📦 Archived 34 jobs to 2026-01.json (34 total in archive)
[2026-01-20T19:31:50.432Z] [BOT] ✅ Archiving complete: 34 archived, 2894 active
[2026-01-20T19:31:50.455Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
[2026-01-20T19:31:50.455Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:52.193Z] [BOT] ✅ Posted message: Senior Product Manager, Monetization @ duolingo in #JID_98d4f0de
[2026-01-20T19:31:52.193Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:31:52.194Z] [BOT] 💾 Added channel posting: Senior Product Manager, Monetization @ duolingo → location channel (2 total channels)
[2026-01-20T19:31:52.194Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-20T19:31:52.197Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (35 total in archive)
[2026-01-20T19:31:52.197Z] [BOT] ✅ Archiving complete: 1 archived, 2893 active
[2026-01-20T19:31:52.213Z] [BOT] 💾 Saved posted_jobs.json: 2893 active jobs
[2026-01-20T19:31:52.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:53.713Z] [BOT] 💾 Marked as posted: Senior Product Manager, Monetization @ duolingo (instance #1)
[2026-01-20T19:31:53.713Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-20T19:31:53.715Z] [BOT] ✅ No jobs to archive (all 2894 jobs within 7-day window)
[2026-01-20T19:31:53.734Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
[2026-01-20T19:31:53.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:53.735Z] [BOT] 📍 [ROUTING] "Senior Site Reliability Engineer" @ duolingo
   Category: TECH (matched: "DevOps/SRE")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:31:53.911Z] [BOT] ✅ Posted message: Senior Site Reliability Engineer @ duolingo in #tech-jobs
[2026-01-20T19:31:53.911Z] [BOT] ✅ Industry: Senior Site Reliability Engineer @ duolingo
[2026-01-20T19:31:53.912Z] [BOT] 💾 Added channel posting: Senior Site Reliability Engineer @ duolingo → category channel (1 total channels)
[2026-01-20T19:31:53.912Z] [BOT] 💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-20T19:31:53.914Z] [BOT] ✅ No jobs to archive (all 2895 jobs within 7-day window)
[2026-01-20T19:31:53.932Z] [BOT] 💾 Saved posted_jobs.json: 2895 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:55.701Z] [BOT] ✅ Posted message: Senior Site Reliability Engineer @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:31:55.701Z] [BOT] 💾 Added channel posting: Senior Site Reliability Engineer @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-20T19:31:55.703Z] [BOT] ✅ No jobs to archive (all 2895 jobs within 7-day window)
[2026-01-20T19:31:55.721Z] [BOT] 💾 Saved posted_jobs.json: 2895 active jobs
[2026-01-20T19:31:55.721Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:57.222Z] [BOT] 💾 Marked as posted: Senior Site Reliability Engineer @ duolingo (instance #1)
[2026-01-20T19:31:57.222Z] [BOT] 💾 BEFORE ARCHIVING: 2896 jobs in database
[2026-01-20T19:31:57.224Z] [BOT] ✅ No jobs to archive (all 2896 jobs within 7-day window)
[2026-01-20T19:31:57.240Z] [BOT] 💾 Saved posted_jobs.json: 2896 active jobs
[2026-01-20T19:31:57.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:57.241Z] [BOT] 📍 [ROUTING] "Social Content Creator, Intern" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:31:57.487Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #tech-jobs
[2026-01-20T19:31:57.487Z] [BOT] ✅ Industry: Social Content Creator, Intern @ duolingo
[2026-01-20T19:31:57.488Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → category channel (1 total channels)
[2026-01-20T19:31:57.488Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-20T19:31:57.489Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-20T19:31:57.504Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
[2026-01-20T19:31:57.505Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:31:59.223Z] [BOT] ✅ Posted message: Social Content Creator, Intern @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:31:59.224Z] [BOT] 💾 Added channel posting: Social Content Creator, Intern @ duolingo → location channel (2 total channels)
[2026-01-20T19:31:59.224Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-20T19:31:59.226Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-20T19:31:59.247Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
[2026-01-20T19:31:59.247Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:00.747Z] [BOT] 💾 Marked as posted: Social Content Creator, Intern @ duolingo (instance #1)
[2026-01-20T19:32:00.748Z] [BOT] 💾 BEFORE ARCHIVING: 2898 jobs in database
[2026-01-20T19:32:00.749Z] [BOT] ✅ No jobs to archive (all 2898 jobs within 7-day window)
[2026-01-20T19:32:00.769Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:00.770Z] [BOT] 📍 [ROUTING] "Staff Android Engineer, Client Architecture" @ duolingo
[2026-01-20T19:32:00.770Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:32:01.187Z] [BOT] ✅ Posted message: Staff Android Engineer, Client Architecture @ duolingo in #tech-jobs
[2026-01-20T19:32:01.187Z] [BOT] ✅ Industry: Staff Android Engineer, Client Architecture @ duolingo
[2026-01-20T19:32:01.188Z] [BOT] 💾 Added channel posting: Staff Android Engineer, Client Architecture @ duolingo → category channel (1 total channels)
[2026-01-20T19:32:01.188Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-20T19:32:01.190Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-20T19:32:01.208Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:02.897Z] [BOT] ✅ Posted message: Staff Android Engineer, Client Architecture @ duolingo in #JID_98d4f0de
[2026-01-20T19:32:02.897Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:32:02.898Z] [BOT] 💾 Added channel posting: Staff Android Engineer, Client Architecture @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-20T19:32:02.900Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-20T19:32:02.917Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
[2026-01-20T19:32:02.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:04.417Z] [BOT] 💾 Marked as posted: Staff Android Engineer, Client Architecture @ duolingo (instance #1)
[2026-01-20T19:32:04.418Z] [BOT] 💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-20T19:32:04.419Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-20T19:32:04.437Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:04.437Z] [BOT] 📍 [ROUTING] "Staff iOS Engineer, App Builds" @ duolingo
[2026-01-20T19:32:04.437Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:32:04.644Z] [BOT] ✅ Posted message: Staff iOS Engineer, App Builds @ duolingo in #tech-jobs
[2026-01-20T19:32:04.644Z] [BOT] ✅ Industry: Staff iOS Engineer, App Builds @ duolingo
[2026-01-20T19:32:04.645Z] [BOT] 💾 Added channel posting: Staff iOS Engineer, App Builds @ duolingo → category channel (1 total channels)
[2026-01-20T19:32:04.645Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-20T19:32:04.646Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-20T19:32:04.663Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:06.688Z] [BOT] ✅ Posted message: Staff iOS Engineer, App Builds @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:32:06.688Z] [BOT] 💾 Added channel posting: Staff iOS Engineer, App Builds @ duolingo → location channel (2 total channels)
[2026-01-20T19:32:06.688Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-20T19:32:06.690Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-20T19:32:06.707Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:08.209Z] [BOT] 💾 Marked as posted: Staff iOS Engineer, App Builds @ duolingo (instance #1)
[2026-01-20T19:32:08.209Z] [BOT] 💾 BEFORE ARCHIVING: 2902 jobs in database
[2026-01-20T19:32:08.210Z] [BOT] ✅ No jobs to archive (all 2902 jobs within 7-day window)
[2026-01-20T19:32:08.228Z] [BOT] 💾 Saved posted_jobs.json: 2902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:08.229Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:32:08.589Z] [BOT] ✅ Posted message: Staff Product Designer @ duolingo in #tech-jobs
[2026-01-20T19:32:08.589Z] [BOT] ✅ Industry: Staff Product Designer @ duolingo
[2026-01-20T19:32:08.590Z] [BOT] 💾 Added channel posting: Staff Product Designer @ duolingo → category channel (1 total channels)
[2026-01-20T19:32:08.590Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-20T19:32:08.592Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-20T19:32:08.608Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
[2026-01-20T19:32:08.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:10.433Z] [BOT] ✅ Posted message: Staff Product Designer @ duolingo in #JID_98d4f0de
[2026-01-20T19:32:10.434Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:32:10.434Z] [BOT] 💾 Added channel posting: Staff Product Designer @ duolingo → location channel (2 total channels)
[2026-01-20T19:32:10.434Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-20T19:32:10.436Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-20T19:32:10.453Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
[2026-01-20T19:32:10.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:11.954Z] [BOT] 💾 Marked as posted: Staff Product Designer @ duolingo (instance #1)
[2026-01-20T19:32:11.954Z] [BOT] 💾 BEFORE ARCHIVING: 2904 jobs in database
[2026-01-20T19:32:11.956Z] [BOT] ✅ No jobs to archive (all 2904 jobs within 7-day window)
[2026-01-20T19:32:11.976Z] [BOT] 💾 Saved posted_jobs.json: 2904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:11.976Z] [BOT] 📍 [ROUTING] "R&D-Technician 1" @ ORG_6d9f16f0in-Williams
[2026-01-20T19:32:11.976Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:32:12.287Z] [BOT] ✅ Posted message: R&D-Technician 1 @ ORG_6d9f16f0in-Williams in #tech-jobs
[2026-01-20T19:32:12.287Z] [BOT] ✅ Industry: R&D-Technician 1 @ ORG_6d9f16f0in-Williams
[2026-01-20T19:32:12.288Z] [BOT] 💾 Added channel posting: R&D-Technician 1 @ ORG_6d9f16f0in-Williams → category channel (1 total channels)
[2026-01-20T19:32:12.288Z] [BOT] 💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-20T19:32:12.290Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-20T19:32:12.305Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:14.346Z] [BOT] ✅ Posted message: R&D-Technician 1 @ ORG_6d9f16f0in-Williams in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T19:32:14.347Z] [BOT] 💾 Added channel posting: R&D-Technician 1 @ ORG_6d9f16f0in-Williams → location channel (2 total channels)
[2026-01-20T19:32:14.347Z] [BOT] 💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-20T19:32:14.349Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-20T19:32:14.367Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:15.867Z] [BOT] 💾 Marked as posted: R&D-Technician 1 @ ORG_6d9f16f0in-Williams (instance #1)
[2026-01-20T19:32:15.868Z] [BOT] 💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-20T19:32:15.870Z] [BOT] ✅ No jobs to archive (all 2906 jobs within 7-day window)
[2026-01-20T19:32:15.888Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:15.889Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (EST/CST)" @ samsara
[2026-01-20T19:32:15.889Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:32:16.118Z] [BOT] ✅ Posted message: Account Executive, Mid Market (EST/CST) @ samsara in #tech-jobs
  ✅ Industry: Account Executive, Mid Market (EST/CST) @ samsara
[2026-01-20T19:32:16.118Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market (EST/CST) @ samsara → category channel (1 total channels)
[2026-01-20T19:32:16.118Z] [BOT] 💾 BEFORE ARCHIVING: 2907 jobs in database
[2026-01-20T19:32:16.120Z] [BOT] ✅ No jobs to archive (all 2907 jobs within 7-day window)
[2026-01-20T19:32:16.137Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:17.639Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T19:32:17.641Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T19:32:17.658Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:17.659Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
[2026-01-20T19:32:17.659Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-20T19:32:17.660Z] [BOT] ✅ No jobs to archive (all 2909 jobs within 7-day window)
[2026-01-20T19:32:17.676Z] [BOT] 💾 Saved posted_jobs.json: 2909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:20.677Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T19:32:20.677Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T19:32:20.869Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_7b717950 in #ai-jobs
[2026-01-20T19:32:20.869Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_7b717950
[2026-01-20T19:32:20.870Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_7b717950 → category channel (1 total channels)
[2026-01-20T19:32:20.870Z] [BOT] 💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T19:32:20.872Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T19:32:20.889Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
[2026-01-20T19:32:20.889Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:22.389Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_7b717950 (instance #1)
[2026-01-20T19:32:22.390Z] [BOT] 💾 BEFORE ARCHIVING: 2911 jobs in database
[2026-01-20T19:32:22.391Z] [BOT] ✅ No jobs to archive (all 2911 jobs within 7-day window)
[2026-01-20T19:32:22.408Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
[2026-01-20T19:32:22.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:25.409Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T19:32:25.409Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-20T19:32:25.410Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-20T19:32:25.818Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-20T19:32:25.818Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-20T19:32:25.818Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T19:32:25.820Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T19:32:25.836Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:27.338Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-20T19:32:27.340Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-20T19:32:27.357Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:32:30.358Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_b0c0d61c (posted within 7 days)
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_8b52879f (posted within 7 days)
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_92e4bda1 (posted within 7 days)
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_80859da3 (posted within 7 days)
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_98962c52 (posted within 7 days)
[2026-01-20T19:32:30.359Z] [BOT] ⏭️  Skipping duplicate: JID_d4ffa3ed (posted within 7 days)
[2026-01-20T19:32:30.360Z] [BOT] ⏭️  Skipping duplicate: JID_71eea517-cx_2-job-2601571 (posted within 7 days)
[2026-01-20T19:32:30.360Z] [BOT] ⏭️  Skipping duplicate: JID_64258a57 (posted within 7 days)
[2026-01-20T19:32:30.360Z] [BOT] ⏭️  Skipping duplicate: JID_4d42ce78 (posted within 7 days)
[2026-01-20T19:32:30.360Z] [BOT] ⏭️  Skipping duplicate: JID_1225ad2f (posted within 7 days)
[2026-01-20T19:32:30.463Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-20T19:32:30.655Z] [BOT] ✅ Saved pending queue: 2771 total (2751 pending, 10 enriched, 10 posted)
[2026-01-20T19:32:30.655Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T19:32:30.716Z] [BOT] 📂 Loaded 5443 existing routing entries
[2026-01-20T19:32:30.790Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5453
   Timestamp: 2026-01-20T19:32:30.766Z
[2026-01-20T19:32:30.790Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T19:32:30.790Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-20T19:32:30.791Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T19:32:30.791Z] [BOT] Total posts: 17
   Channels used: 5
   Top channels:
     1. #tech-jobs: 8 posts
[2026-01-20T19:32:30.791Z] [BOT] 2. #JID_98d4f0de: 6 posts
     3. #JID_ead674af: 1 posts
     4. #ai-jobs: 1 posts
     5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T19:32:32.817Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*