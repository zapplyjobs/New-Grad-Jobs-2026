# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T16:16:43.849Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T16:16:07.820Z] ========================================
[2026-01-21T16:16:07.822Z] Discord Bot Execution Log
[2026-01-21T16:16:07.822Z] Environment: GitHub Actions
[2026-01-21T16:16:07.822Z] Node Version: v20.19.6
[2026-01-21T16:16:07.822Z] ========================================
[2026-01-21T16:16:07.822Z] Environment Variables Check:
[2026-01-21T16:16:07.822Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T16:16:07.822Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.822Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T16:16:07.823Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T16:16:07.823Z] 
Multi-Channel Configuration:
[2026-01-21T16:16:07.823Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T16:16:07.823Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T16:16:07.824Z] 
Data Files Check:
[2026-01-21T16:16:07.825Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157211 bytes)
[2026-01-21T16:16:07.839Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2080921 bytes)
[2026-01-21T16:16:07.840Z] 
========================================
[2026-01-21T16:16:07.840Z] Starting Enhanced Discord Bot...
[2026-01-21T16:16:07.840Z] ========================================
[2026-01-21T16:16:08.415Z] [BOT] ✅ Loaded V2 database: 3625 jobs
[2026-01-21T16:16:09.390Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T16:16:09.391Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T16:16:09.391Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T16:16:09.510Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Engineering Manager, Risk Management  at brex
[2026-01-21T16:16:09.517Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T16:16:09.518Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T16:16:09.518Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T16:16:09.519Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-21T16:16:09.519Z] [BOT] (9 grouped as same job with different locations)
📍 5 jobs with multiple locations:
   - Senior GTM Recruiter @ brex: san francisco, california, united states, salt lake city, utah, united states, new york, new york, united states
   -  Senior Manager, Implementation @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Software Engineer II, Product  @ brex: san francisco, california, united states, new york, new york, united states, seattle, washington, united states
[2026-01-21T16:16:09.519Z] [BOT] - Staff Product Designer @ brex: san francisco, california, united states, new york, new york, united states
   - Startups Account Executive @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T16:16:09.526Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T16:16:09.527Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Risk Management " @ brex
[2026-01-21T16:16:09.527Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:09.551Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T16:16:09.986Z] [BOT] ✅ Posted message: Senior Engineering Manager, Risk Management  @ brex in #tech-jobs
[2026-01-21T16:16:09.986Z] [BOT] ✅ Industry: Senior Engineering Manager, Risk Management  @ brex
[2026-01-21T16:16:09.987Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Risk Management  @ brex → category channel (1 total channels)
[2026-01-21T16:16:09.988Z] [BOT] 💾 BEFORE ARCHIVING: 3626 jobs in database
[2026-01-21T16:16:09.991Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T16:16:09.995Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-21T16:16:09.996Z] [BOT] ✅ Archiving complete: 2 archived, 3624 active
[2026-01-21T16:16:10.021Z] [BOT] 💾 Saved posted_jobs.json: 3624 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:11.524Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
[2026-01-21T16:16:11.524Z] [BOT] 💾 BEFORE ARCHIVING: 3625 jobs in database
[2026-01-21T16:16:11.527Z] [BOT] ✅ No jobs to archive (all 3625 jobs within 7-day window)
[2026-01-21T16:16:11.549Z] [BOT] 💾 Saved posted_jobs.json: 3625 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:11.549Z] [BOT] 📍 [ROUTING] "Senior GTM Recruiter" @ brex
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:11.722Z] [BOT] ✅ Posted message: Senior GTM Recruiter @ brex in #tech-jobs
[2026-01-21T16:16:11.722Z] [BOT] ✅ Industry: Senior GTM Recruiter @ brex
[2026-01-21T16:16:11.723Z] [BOT] 💾 Added channel posting: Senior GTM Recruiter @ brex → category channel (1 total channels)
[2026-01-21T16:16:11.724Z] [BOT] 💾 BEFORE ARCHIVING: 3626 jobs in database
[2026-01-21T16:16:11.726Z] [BOT] ✅ No jobs to archive (all 3626 jobs within 7-day window)
[2026-01-21T16:16:11.751Z] [BOT] 💾 Saved posted_jobs.json: 3626 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:13.252Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-21T16:16:13.253Z] [BOT] 💾 BEFORE ARCHIVING: 3627 jobs in database
[2026-01-21T16:16:13.255Z] [BOT] ✅ No jobs to archive (all 3627 jobs within 7-day window)
[2026-01-21T16:16:13.280Z] [BOT] 💾 Saved posted_jobs.json: 3627 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:13.280Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-21T16:16:13.281Z] [BOT] 💾 BEFORE ARCHIVING: 3628 jobs in database
[2026-01-21T16:16:13.283Z] [BOT] ✅ No jobs to archive (all 3628 jobs within 7-day window)
[2026-01-21T16:16:13.306Z] [BOT] 💾 Saved posted_jobs.json: 3628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:13.307Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-21T16:16:13.307Z] [BOT] 💾 BEFORE ARCHIVING: 3629 jobs in database
[2026-01-21T16:16:13.309Z] [BOT] ✅ No jobs to archive (all 3629 jobs within 7-day window)
[2026-01-21T16:16:13.331Z] [BOT] 💾 Saved posted_jobs.json: 3629 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:13.331Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Product " @ brex
   Category: TECH (matched: "software")
[2026-01-21T16:16:13.332Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:13.480Z] [BOT] ✅ Posted message: Senior Software Engineer, Product  @ brex in #tech-jobs
[2026-01-21T16:16:13.481Z] [BOT] ✅ Industry: Senior Software Engineer, Product  @ brex
[2026-01-21T16:16:13.481Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Product  @ brex → category channel (1 total channels)
[2026-01-21T16:16:13.481Z] [BOT] 💾 BEFORE ARCHIVING: 3630 jobs in database
[2026-01-21T16:16:13.483Z] [BOT] ✅ No jobs to archive (all 3630 jobs within 7-day window)
[2026-01-21T16:16:13.505Z] [BOT] 💾 Saved posted_jobs.json: 3630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:15.287Z] [BOT] ✅ Posted message: Senior Software Engineer, Product  @ brex in #JID_98d4f0de
[2026-01-21T16:16:15.287Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T16:16:15.288Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Product  @ brex → location channel (2 total channels)
[2026-01-21T16:16:15.289Z] [BOT] 💾 BEFORE ARCHIVING: 3630 jobs in database
[2026-01-21T16:16:15.291Z] [BOT] ✅ No jobs to archive (all 3630 jobs within 7-day window)
[2026-01-21T16:16:15.312Z] [BOT] 💾 Saved posted_jobs.json: 3630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:16.813Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Product  @ brex (instance #1)
💾 BEFORE ARCHIVING: 3631 jobs in database
[2026-01-21T16:16:16.816Z] [BOT] ✅ No jobs to archive (all 3631 jobs within 7-day window)
[2026-01-21T16:16:16.837Z] [BOT] 💾 Saved posted_jobs.json: 3631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:16.837Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
   Category: TECH (matched: "software")
[2026-01-21T16:16:16.837Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:17.104Z] [BOT] ✅ Posted message: Software Engineer II, Product  @ brex in #tech-jobs
  ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-21T16:16:17.104Z] [BOT] 💾 Added channel posting: Software Engineer II, Product  @ brex → category channel (1 total channels)
[2026-01-21T16:16:17.104Z] [BOT] 💾 BEFORE ARCHIVING: 3632 jobs in database
[2026-01-21T16:16:17.107Z] [BOT] ✅ No jobs to archive (all 3632 jobs within 7-day window)
[2026-01-21T16:16:17.128Z] [BOT] 💾 Saved posted_jobs.json: 3632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:18.630Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-21T16:16:18.630Z] [BOT] 💾 BEFORE ARCHIVING: 3633 jobs in database
[2026-01-21T16:16:18.634Z] [BOT] ✅ No jobs to archive (all 3633 jobs within 7-day window)
[2026-01-21T16:16:18.661Z] [BOT] 💾 Saved posted_jobs.json: 3633 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:18.662Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-21T16:16:18.662Z] [BOT] 💾 BEFORE ARCHIVING: 3634 jobs in database
[2026-01-21T16:16:18.665Z] [BOT] ✅ No jobs to archive (all 3634 jobs within 7-day window)
[2026-01-21T16:16:18.691Z] [BOT] 💾 Saved posted_jobs.json: 3634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:18.691Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-21T16:16:18.691Z] [BOT] 💾 BEFORE ARCHIVING: 3635 jobs in database
[2026-01-21T16:16:18.694Z] [BOT] ✅ No jobs to archive (all 3635 jobs within 7-day window)
[2026-01-21T16:16:18.717Z] [BOT] 💾 Saved posted_jobs.json: 3635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:18.718Z] [BOT] 📍 [ROUTING] "Staff Brand Designer" @ brex
[2026-01-21T16:16:18.718Z] [BOT] Category: TECH (matched: "product strategy")
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:18.869Z] [BOT] ✅ Posted message: Staff Brand Designer @ brex in #tech-jobs
[2026-01-21T16:16:18.869Z] [BOT] ✅ Industry: Staff Brand Designer @ brex
[2026-01-21T16:16:18.870Z] [BOT] 💾 Added channel posting: Staff Brand Designer @ brex → category channel (1 total channels)
[2026-01-21T16:16:18.870Z] [BOT] 💾 BEFORE ARCHIVING: 3636 jobs in database
[2026-01-21T16:16:18.872Z] [BOT] ✅ No jobs to archive (all 3636 jobs within 7-day window)
[2026-01-21T16:16:18.894Z] [BOT] 💾 Saved posted_jobs.json: 3636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:20.396Z] [BOT] 💾 Marked as posted: Staff Brand Designer @ brex (instance #1)
[2026-01-21T16:16:20.397Z] [BOT] 💾 BEFORE ARCHIVING: 3637 jobs in database
[2026-01-21T16:16:20.399Z] [BOT] ✅ No jobs to archive (all 3637 jobs within 7-day window)
[2026-01-21T16:16:20.422Z] [BOT] 💾 Saved posted_jobs.json: 3637 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:20.423Z] [BOT] 📍 [ROUTING] "Staff Brand Designer, Interactive" @ brex
   Category: TECH (matched: "product strategy")
[2026-01-21T16:16:20.423Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:20.747Z] [BOT] ✅ Posted message: Staff Brand Designer, Interactive @ brex in #tech-jobs
  ✅ Industry: Staff Brand Designer, Interactive @ brex
[2026-01-21T16:16:20.748Z] [BOT] 💾 Added channel posting: Staff Brand Designer, Interactive @ brex → category channel (1 total channels)
[2026-01-21T16:16:20.748Z] [BOT] 💾 BEFORE ARCHIVING: 3638 jobs in database
[2026-01-21T16:16:20.751Z] [BOT] ✅ No jobs to archive (all 3638 jobs within 7-day window)
[2026-01-21T16:16:20.773Z] [BOT] 💾 Saved posted_jobs.json: 3638 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:22.274Z] [BOT] 💾 Marked as posted: Staff Brand Designer, Interactive @ brex (instance #1)
[2026-01-21T16:16:22.274Z] [BOT] 💾 BEFORE ARCHIVING: 3639 jobs in database
[2026-01-21T16:16:22.276Z] [BOT] ✅ No jobs to archive (all 3639 jobs within 7-day window)
[2026-01-21T16:16:22.298Z] [BOT] 💾 Saved posted_jobs.json: 3639 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:22.298Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ brex
[2026-01-21T16:16:22.298Z] [BOT] Category: TECH (matched: "pm")
   Channel: tech-jobs (1462...4987)
[2026-01-21T16:16:22.461Z] [BOT] ✅ Posted message: Staff Product Designer @ brex in #tech-jobs
[2026-01-21T16:16:22.462Z] [BOT] ✅ Industry: Staff Product Designer @ brex
[2026-01-21T16:16:22.462Z] [BOT] 💾 Added channel posting: Staff Product Designer @ brex → category channel (1 total channels)
[2026-01-21T16:16:22.463Z] [BOT] 💾 BEFORE ARCHIVING: 3640 jobs in database
[2026-01-21T16:16:22.465Z] [BOT] ✅ No jobs to archive (all 3640 jobs within 7-day window)
[2026-01-21T16:16:22.486Z] [BOT] 💾 Saved posted_jobs.json: 3640 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:23.988Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-21T16:16:23.988Z] [BOT] 💾 BEFORE ARCHIVING: 3641 jobs in database
[2026-01-21T16:16:23.990Z] [BOT] ✅ No jobs to archive (all 3641 jobs within 7-day window)
[2026-01-21T16:16:24.012Z] [BOT] 💾 Saved posted_jobs.json: 3641 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:24.013Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-21T16:16:24.013Z] [BOT] 💾 BEFORE ARCHIVING: 3642 jobs in database
[2026-01-21T16:16:24.015Z] [BOT] ✅ No jobs to archive (all 3642 jobs within 7-day window)
[2026-01-21T16:16:24.038Z] [BOT] 💾 Saved posted_jobs.json: 3642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:27.040Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T16:16:27.040Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
[2026-01-21T16:16:27.040Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T16:16:27.372Z] [BOT] ✅ Posted message:  Senior Manager, Implementation @ brex in #finance-jobs
[2026-01-21T16:16:27.373Z] [BOT] ✅ Industry:  Senior Manager, Implementation @ brex
[2026-01-21T16:16:27.373Z] [BOT] 💾 Added channel posting:  Senior Manager, Implementation @ brex → category channel (1 total channels)
[2026-01-21T16:16:27.374Z] [BOT] 💾 BEFORE ARCHIVING: 3643 jobs in database
[2026-01-21T16:16:27.376Z] [BOT] ✅ No jobs to archive (all 3643 jobs within 7-day window)
[2026-01-21T16:16:27.397Z] [BOT] 💾 Saved posted_jobs.json: 3643 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:29.068Z] [BOT] ✅ Posted message:  Senior Manager, Implementation @ brex in #JID_ead674af
[2026-01-21T16:16:29.068Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T16:16:29.069Z] [BOT] 💾 Added channel posting:  Senior Manager, Implementation @ brex → location channel (2 total channels)
[2026-01-21T16:16:29.069Z] [BOT] 💾 BEFORE ARCHIVING: 3643 jobs in database
[2026-01-21T16:16:29.071Z] [BOT] ✅ No jobs to archive (all 3643 jobs within 7-day window)
[2026-01-21T16:16:29.093Z] [BOT] 💾 Saved posted_jobs.json: 3643 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:30.595Z] [BOT] 💾 Marked as posted:  Senior Manager, Implementation @ brex (instance #1)
[2026-01-21T16:16:30.595Z] [BOT] 💾 BEFORE ARCHIVING: 3644 jobs in database
[2026-01-21T16:16:30.597Z] [BOT] ✅ No jobs to archive (all 3644 jobs within 7-day window)
[2026-01-21T16:16:30.618Z] [BOT] 💾 Saved posted_jobs.json: 3644 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:30.619Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-21T16:16:30.619Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-21T16:16:30.621Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-21T16:16:30.644Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:30.644Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-21T16:16:30.644Z] [BOT] 💾 BEFORE ARCHIVING: 3646 jobs in database
[2026-01-21T16:16:30.647Z] [BOT] ✅ No jobs to archive (all 3646 jobs within 7-day window)
[2026-01-21T16:16:30.669Z] [BOT] 💾 Saved posted_jobs.json: 3646 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:30.670Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-21T16:16:30.670Z] [BOT] 💾 BEFORE ARCHIVING: 3647 jobs in database
[2026-01-21T16:16:30.672Z] [BOT] ✅ No jobs to archive (all 3647 jobs within 7-day window)
[2026-01-21T16:16:30.694Z] [BOT] 💾 Saved posted_jobs.json: 3647 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:30.694Z] [BOT] 📍 [ROUTING] "Corporate Finance & Strategy, Planning & Reporting" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-21T16:16:30.695Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T16:16:31.003Z] [BOT] ✅ Posted message: Corporate Finance & Strategy, Planning & Reporting @ anthropic in #finance-jobs
  ✅ Industry: Corporate Finance & Strategy, Planning & Reporting @ anthropic
[2026-01-21T16:16:31.003Z] [BOT] 💾 Added channel posting: Corporate Finance & Strategy, Planning & Reporting @ anthropic → category channel (1 total channels)
[2026-01-21T16:16:31.004Z] [BOT] 💾 BEFORE ARCHIVING: 3648 jobs in database
[2026-01-21T16:16:31.006Z] [BOT] ✅ No jobs to archive (all 3648 jobs within 7-day window)
[2026-01-21T16:16:31.027Z] [BOT] 💾 Saved posted_jobs.json: 3648 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:32.529Z] [BOT] 💾 Marked as posted: Corporate Finance & Strategy, Planning & Reporting @ anthropic (instance #1)
[2026-01-21T16:16:32.529Z] [BOT] 💾 BEFORE ARCHIVING: 3649 jobs in database
[2026-01-21T16:16:32.532Z] [BOT] ✅ No jobs to archive (all 3649 jobs within 7-day window)
[2026-01-21T16:16:32.554Z] [BOT] 💾 Saved posted_jobs.json: 3649 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:35.555Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T16:16:35.556Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Full-Stack" @ brex
[2026-01-21T16:16:35.556Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T16:16:35.913Z] [BOT] ✅ Posted message: Senior Software Engineer, Full-Stack @ brex in #ai-jobs
  ✅ Industry: Senior Software Engineer, Full-Stack @ brex
[2026-01-21T16:16:35.913Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Full-Stack @ brex → category channel (1 total channels)
[2026-01-21T16:16:35.914Z] [BOT] 💾 BEFORE ARCHIVING: 3650 jobs in database
[2026-01-21T16:16:35.916Z] [BOT] ✅ No jobs to archive (all 3650 jobs within 7-day window)
[2026-01-21T16:16:35.936Z] [BOT] 💾 Saved posted_jobs.json: 3650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:37.438Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Full-Stack @ brex (instance #1)
[2026-01-21T16:16:37.438Z] [BOT] 💾 BEFORE ARCHIVING: 3651 jobs in database
[2026-01-21T16:16:37.440Z] [BOT] ✅ No jobs to archive (all 3651 jobs within 7-day window)
[2026-01-21T16:16:37.462Z] [BOT] 💾 Saved posted_jobs.json: 3651 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T16:16:40.462Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T16:16:40.463Z] [BOT] ⏭️  Skipping duplicate: JID_09ddc272 (posted within 7 days)
[2026-01-21T16:16:40.464Z] [BOT] ⏭️  Skipping duplicate: JID_7856d05a (posted within 7 days)
[2026-01-21T16:16:40.464Z] [BOT] ⏭️  Skipping duplicate: JID_a30c2924 (posted within 7 days)
[2026-01-21T16:16:40.464Z] [BOT] ⏭️  Skipping duplicate: JID_68a4047b (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_baae5752 (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_7ea6b88d (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_e617f383 (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_1108fddb (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_b41975d9 (posted within 7 days)
[2026-01-21T16:16:40.465Z] [BOT] ⏭️  Skipping duplicate: JID_c98b801d (posted within 7 days)
[2026-01-21T16:16:40.580Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-21T16:16:40.795Z] [BOT] ✅ Saved pending queue: 2770 total (2750 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T16:16:40.866Z] [BOT] 📂 Loaded 5971 existing routing entries
[2026-01-21T16:16:40.945Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T16:16:40.946Z] [BOT] Total entries: 5981
   Timestamp: 2026-01-21T16:16:40.919Z
[2026-01-21T16:16:40.946Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 12
[2026-01-21T16:16:40.946Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T16:16:40.946Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
[2026-01-21T16:16:40.947Z] [BOT] 1. #tech-jobs: 7 posts
     2. #finance-jobs: 2 posts
     3. #JID_98d4f0de: 1 posts
     4. #JID_ead674af: 1 posts
     5. #ai-jobs: 1 posts
[2026-01-21T16:16:40.947Z] [BOT] [STATS] Channel stats saved
[2026-01-21T16:16:42.974Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*