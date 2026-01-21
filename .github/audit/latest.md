# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T01:40:45.768Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T01:40:12.914Z] ========================================
[2026-01-21T01:40:12.916Z] Discord Bot Execution Log
[2026-01-21T01:40:12.916Z] Environment: GitHub Actions
[2026-01-21T01:40:12.916Z] Node Version: v20.19.6
[2026-01-21T01:40:12.916Z] ========================================
[2026-01-21T01:40:12.916Z] Environment Variables Check:
[2026-01-21T01:40:12.916Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T01:40:12.916Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.916Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T01:40:12.916Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T01:40:12.916Z] 
Multi-Channel Configuration:
[2026-01-21T01:40:12.916Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T01:40:12.917Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T01:40:12.917Z] 
Data Files Check:
[2026-01-21T01:40:12.918Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169130 bytes)
[2026-01-21T01:40:12.931Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1728535 bytes)
[2026-01-21T01:40:12.931Z] 
========================================
[2026-01-21T01:40:12.931Z] Starting Enhanced Discord Bot...
[2026-01-21T01:40:12.931Z] ========================================
[2026-01-21T01:40:13.408Z] [BOT] ✅ Loaded V2 database: 3075 jobs
[2026-01-21T01:40:14.327Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T01:40:14.328Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T01:40:14.328Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T01:40:14.477Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive (New York State  - SLED) at verkada
[2026-01-21T01:40:14.480Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T01:40:14.480Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T01:40:14.481Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T01:40:14.481Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-21T01:40:14.482Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Project Engineer, Global Services @ verkada: austin, tx united states; new york city, ny united states; philadelphia, pa united states; tampa, fl united states, new york city, ny united states, chicago, il united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T01:40:14.486Z] [BOT] 📌 Posting 5 jobs to #finance-jobs
[2026-01-21T01:40:14.486Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (New York State  - SLED)" @ verkada
[2026-01-21T01:40:14.486Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T01:40:14.490Z] [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T01:40:14.658Z] [BOT] ✅ Posted message: Enterprise Account Executive (New York State  - SLED) @ verkada in #finance-jobs
[2026-01-21T01:40:14.658Z] [BOT] ✅ Industry: Enterprise Account Executive (New York State  - SLED) @ verkada
[2026-01-21T01:40:14.659Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (New York State  - SLED) @ verkada → category channel (1 total channels)
[2026-01-21T01:40:14.659Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T01:40:14.662Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T01:40:14.666Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
✅ Archiving complete: 11 archived, 3065 active
[2026-01-21T01:40:14.689Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:16.371Z] [BOT] ✅ Posted message: Enterprise Account Executive (New York State  - SLED) @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T01:40:16.371Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (New York State  - SLED) @ verkada → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-21T01:40:16.373Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-21T01:40:16.390Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:17.891Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (New York State  - SLED) @ verkada (instance #1)
[2026-01-21T01:40:17.892Z] [BOT] 💾 BEFORE ARCHIVING: 3066 jobs in database
[2026-01-21T01:40:17.894Z] [BOT] ✅ No jobs to archive (all 3066 jobs within 7-day window)
[2026-01-21T01:40:17.914Z] [BOT] 💾 Saved posted_jobs.json: 3066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:17.914Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (SoCal - Corporate)" @ verkada
[2026-01-21T01:40:17.915Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T01:40:18.132Z] [BOT] ✅ Posted message: Enterprise Account Executive (SoCal - Corporate) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (SoCal - Corporate) @ verkada
[2026-01-21T01:40:18.133Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (SoCal - Corporate) @ verkada → category channel (1 total channels)
[2026-01-21T01:40:18.133Z] [BOT] 💾 BEFORE ARCHIVING: 3067 jobs in database
[2026-01-21T01:40:18.135Z] [BOT] ✅ No jobs to archive (all 3067 jobs within 7-day window)
[2026-01-21T01:40:18.154Z] [BOT] 💾 Saved posted_jobs.json: 3067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:19.656Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (SoCal - Corporate) @ verkada (instance #1)
[2026-01-21T01:40:19.656Z] [BOT] 💾 BEFORE ARCHIVING: 3068 jobs in database
[2026-01-21T01:40:19.658Z] [BOT] ✅ No jobs to archive (all 3068 jobs within 7-day window)
[2026-01-21T01:40:19.678Z] [BOT] 💾 Saved posted_jobs.json: 3068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:19.678Z] [BOT] 📍 [ROUTING] "Enterprise Development Representative" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T01:40:19.919Z] [BOT] ✅ Posted message: Enterprise Development Representative @ verkada in #finance-jobs
[2026-01-21T01:40:19.919Z] [BOT] ✅ Industry: Enterprise Development Representative @ verkada
[2026-01-21T01:40:19.920Z] [BOT] 💾 Added channel posting: Enterprise Development Representative @ verkada → category channel (1 total channels)
[2026-01-21T01:40:19.920Z] [BOT] 💾 BEFORE ARCHIVING: 3069 jobs in database
[2026-01-21T01:40:19.922Z] [BOT] ✅ No jobs to archive (all 3069 jobs within 7-day window)
[2026-01-21T01:40:19.939Z] [BOT] 💾 Saved posted_jobs.json: 3069 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:21.441Z] [BOT] 💾 Marked as posted: Enterprise Development Representative @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-21T01:40:21.443Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-21T01:40:21.461Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:21.461Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (US West - Federal Veterans Affairs)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-21T01:40:21.461Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T01:40:21.807Z] [BOT] ✅ Posted message: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada
[2026-01-21T01:40:21.808Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada → category channel (1 total channels)
[2026-01-21T01:40:21.808Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T01:40:21.809Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T01:40:21.827Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:23.328Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada (instance #1)
[2026-01-21T01:40:23.328Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T01:40:23.330Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T01:40:23.351Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:23.352Z] [BOT] 📍 [ROUTING] "Enterprise Development Manager" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-21T01:40:23.352Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T01:40:23.757Z] [BOT] ✅ Posted message: Enterprise Development Manager @ verkada in #finance-jobs
[2026-01-21T01:40:23.757Z] [BOT] ✅ Industry: Enterprise Development Manager @ verkada
[2026-01-21T01:40:23.758Z] [BOT] 💾 Added channel posting: Enterprise Development Manager @ verkada → category channel (1 total channels)
[2026-01-21T01:40:23.758Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T01:40:23.760Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T01:40:23.780Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:25.282Z] [BOT] 💾 Marked as posted: Enterprise Development Manager @ verkada (instance #1)
[2026-01-21T01:40:25.282Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T01:40:25.284Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T01:40:25.302Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:28.303Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T01:40:28.304Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Carolinas " @ verkada
[2026-01-21T01:40:28.304Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T01:40:28.726Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Carolinas  @ verkada in #tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Carolinas  @ verkada
[2026-01-21T01:40:28.727Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Carolinas  @ verkada → category channel (1 total channels)
[2026-01-21T01:40:28.727Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T01:40:28.728Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T01:40:28.747Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:30.250Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Carolinas  @ verkada (instance #1)
[2026-01-21T01:40:30.250Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T01:40:30.252Z] [BOT] ✅ No jobs to archive (all 3076 jobs within 7-day window)
[2026-01-21T01:40:30.271Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:30.271Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Greater Atlanta Area" @ verkada
[2026-01-21T01:40:30.271Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T01:40:30.586Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada in #tech-jobs
[2026-01-21T01:40:30.587Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada
[2026-01-21T01:40:30.587Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada → category channel (1 total channels)
[2026-01-21T01:40:30.587Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T01:40:30.589Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T01:40:30.608Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:32.110Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T01:40:32.112Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T01:40:32.131Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:32.131Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Mid-West, SLED" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T01:40:32.378Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #tech-jobs
[2026-01-21T01:40:32.378Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Mid-West, SLED @ verkada
[2026-01-21T01:40:32.379Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Mid-West, SLED @ verkada → category channel (1 total channels)
[2026-01-21T01:40:32.379Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T01:40:32.381Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T01:40:32.398Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:33.900Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Mid-West, SLED @ verkada (instance #1)
[2026-01-21T01:40:33.900Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T01:40:33.902Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T01:40:33.921Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:33.921Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Northeast" @ verkada
[2026-01-21T01:40:33.921Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T01:40:34.202Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Northeast @ verkada in #tech-jobs
[2026-01-21T01:40:34.203Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Northeast @ verkada
[2026-01-21T01:40:34.203Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Northeast @ verkada → category channel (1 total channels)
[2026-01-21T01:40:34.204Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T01:40:34.206Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T01:40:34.225Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:35.996Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Northeast @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T01:40:35.997Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Northeast @ verkada → location channel (2 total channels)
[2026-01-21T01:40:35.997Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T01:40:35.998Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T01:40:36.017Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:37.519Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Northeast @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T01:40:37.521Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T01:40:37.541Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:37.542Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Rocky Mountains" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T01:40:37.542Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T01:40:37.688Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Rocky Mountains @ verkada in #tech-jobs
[2026-01-21T01:40:37.689Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Rocky Mountains @ verkada
[2026-01-21T01:40:37.689Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Rocky Mountains @ verkada → category channel (1 total channels)
[2026-01-21T01:40:37.689Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T01:40:37.691Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T01:40:37.709Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:39.210Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Rocky Mountains @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T01:40:39.212Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T01:40:39.232Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T01:40:42.232Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T01:40:42.233Z] [BOT] ⏭️  Skipping duplicate: JID_b0b83342 (posted within 7 days)
[2026-01-21T01:40:42.233Z] [BOT] ⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
[2026-01-21T01:40:42.233Z] [BOT] ⏭️  Skipping duplicate: JID_ce87da78 (posted within 7 days)
[2026-01-21T01:40:42.233Z] [BOT] ⏭️  Skipping duplicate: JID_81c0b62d (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_bf0d2987 (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_97e7cb0f (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_93d9360f (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_152141f5 (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_2c363f0d (posted within 7 days)
[2026-01-21T01:40:42.234Z] [BOT] ⏭️  Skipping duplicate: JID_b75dc978 (posted within 7 days)
[2026-01-21T01:40:42.377Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[2026-01-21T01:40:42.562Z] [BOT] ✅ Saved pending queue: 2739 total (2719 pending, 10 enriched, 10 posted)
[2026-01-21T01:40:42.562Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T01:40:42.631Z] [BOT] 📂 Loaded 5595 existing routing entries
[2026-01-21T01:40:42.711Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5605
[2026-01-21T01:40:42.711Z] [BOT] Timestamp: 2026-01-21T01:40:42.690Z
[2026-01-21T01:40:42.711Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T01:40:42.712Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T01:40:42.712Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
[2026-01-21T01:40:42.712Z] [BOT] 1. #finance-jobs: 5 posts
     2. #tech-jobs: 5 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-21T01:40:42.712Z] [BOT] [STATS] Channel stats saved
[2026-01-21T01:40:44.729Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*