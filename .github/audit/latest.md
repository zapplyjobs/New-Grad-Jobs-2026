# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T06:20:27.389Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T06:19:53.805Z] ========================================
[2026-01-20T06:19:53.807Z] Discord Bot Execution Log
[2026-01-20T06:19:53.807Z] Environment: GitHub Actions
[2026-01-20T06:19:53.807Z] Node Version: v20.19.6
[2026-01-20T06:19:53.807Z] ========================================
[2026-01-20T06:19:53.808Z] Environment Variables Check:
[2026-01-20T06:19:53.808Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T06:19:53.808Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T06:19:53.808Z] 
Multi-Channel Configuration:
[2026-01-20T06:19:53.808Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.808Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.809Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T06:19:53.809Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T06:19:53.809Z] 
Data Files Check:
[2026-01-20T06:19:53.810Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157923 bytes)
[2026-01-20T06:19:53.822Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1544128 bytes)
[2026-01-20T06:19:53.822Z] 
========================================
[2026-01-20T06:19:53.822Z] Starting Enhanced Discord Bot...
[2026-01-20T06:19:53.822Z] ========================================
[2026-01-20T06:19:54.337Z] [BOT] ✅ Loaded V2 database: 2790 jobs
[2026-01-20T06:19:55.296Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T06:19:55.297Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T06:19:55.297Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T06:19:55.465Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T06:19:55.469Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T06:19:55.470Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T06:19:55.470Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T06:19:55.471Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
   (8 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Enterprise Customer Success Manager - Denver @ datadog: denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
   - Enterprise Sales Executive @ datadog: washington, district of columbia, usa, remote, boston, massachusetts, usa
   - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
   - Enterprise Security Sales Specialist @ datadog: remote, chicago, illinois, usa; san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T06:19:55.473Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T06:19:55.475Z] [BOT] 📌 Posting 9 jobs to #tech-jobs
[2026-01-20T06:19:55.476Z] [BOT] 📍 [ROUTING] "Employee Relation Specialist - Workplace Investigations" @ datadog
   Category: TECH (default)
[2026-01-20T06:19:55.476Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:19:55.481Z] [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T06:19:55.792Z] [BOT] ✅ Posted message: Employee Relation Specialist - Workplace Investigations @ datadog in #tech-jobs
[2026-01-20T06:19:55.793Z] [BOT] ✅ Industry: Employee Relation Specialist - Workplace Investigations @ datadog
[2026-01-20T06:19:55.793Z] [BOT] 💾 Added channel posting: Employee Relation Specialist - Workplace Investigations @ datadog → category channel (1 total channels)
[2026-01-20T06:19:55.793Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T06:19:55.796Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T06:19:55.800Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T06:19:55.800Z] [BOT] ✅ Archiving complete: 10 archived, 2781 active
[2026-01-20T06:19:55.825Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:19:57.524Z] [BOT] ✅ Posted message: Employee Relation Specialist - Workplace Investigations @ datadog in #JID_98d4f0de
[2026-01-20T06:19:57.525Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T06:19:57.525Z] [BOT] 💾 Added channel posting: Employee Relation Specialist - Workplace Investigations @ datadog → location channel (2 total channels)
[2026-01-20T06:19:57.525Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T06:19:57.527Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T06:19:57.545Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:19:59.045Z] [BOT] 💾 Marked as posted: Employee Relation Specialist - Workplace Investigations @ datadog (instance #1)
[2026-01-20T06:19:59.045Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T06:19:59.047Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T06:19:59.067Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:19:59.067Z] [BOT] 📍 [ROUTING] "Engineering Manager, Application Security Platform" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T06:19:59.067Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:19:59.377Z] [BOT] ✅ Posted message: Engineering Manager, Application Security Platform @ datadog in #tech-jobs
  ✅ Industry: Engineering Manager, Application Security Platform @ datadog
[2026-01-20T06:19:59.378Z] [BOT] 💾 Added channel posting: Engineering Manager, Application Security Platform @ datadog → category channel (1 total channels)
[2026-01-20T06:19:59.378Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T06:19:59.380Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T06:19:59.398Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:01.183Z] [BOT] ✅ Posted message: Engineering Manager, Application Security Platform @ datadog in #JID_98d4f0de
[2026-01-20T06:20:01.183Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T06:20:01.184Z] [BOT] 💾 Added channel posting: Engineering Manager, Application Security Platform @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T06:20:01.185Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T06:20:01.203Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:02.703Z] [BOT] 💾 Marked as posted: Engineering Manager, Application Security Platform @ datadog (instance #1)
[2026-01-20T06:20:02.704Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T06:20:02.705Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-20T06:20:02.722Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:02.722Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager - Denver" @ datadog
[2026-01-20T06:20:02.722Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:03.185Z] [BOT] ✅ Posted message: Enterprise Customer Success Manager - Denver @ datadog in #tech-jobs
[2026-01-20T06:20:03.185Z] [BOT] ✅ Industry: Enterprise Customer Success Manager - Denver @ datadog
[2026-01-20T06:20:03.186Z] [BOT] 💾 Added channel posting: Enterprise Customer Success Manager - Denver @ datadog → category channel (1 total channels)
[2026-01-20T06:20:03.186Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T06:20:03.187Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T06:20:03.204Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:04.705Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - Denver @ datadog (instance #1)
[2026-01-20T06:20:04.706Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T06:20:04.708Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-20T06:20:04.726Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:04.726Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - East Coast @ datadog (instance #1)
[2026-01-20T06:20:04.727Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T06:20:04.728Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T06:20:04.745Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:04.745Z] [BOT] 📍 [ROUTING] "Enterprise Sales Engineer" @ datadog
   Category: TECH (default)
[2026-01-20T06:20:04.745Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:04.915Z] [BOT] ✅ Posted message: Enterprise Sales Engineer @ datadog in #tech-jobs
[2026-01-20T06:20:04.915Z] [BOT] ✅ Industry: Enterprise Sales Engineer @ datadog
[2026-01-20T06:20:04.915Z] [BOT] 💾 Added channel posting: Enterprise Sales Engineer @ datadog → category channel (1 total channels)
[2026-01-20T06:20:04.915Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T06:20:04.917Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T06:20:04.933Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:06.733Z] [BOT] ✅ Posted message: Enterprise Sales Engineer @ datadog in #JID_ead674af
[2026-01-20T06:20:06.733Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T06:20:06.734Z] [BOT] 💾 Added channel posting: Enterprise Sales Engineer @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T06:20:06.735Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T06:20:06.754Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:08.255Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer @ datadog (instance #1)
[2026-01-20T06:20:08.255Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T06:20:08.257Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T06:20:08.277Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:08.278Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer - South Africa @ datadog (instance #1)
[2026-01-20T06:20:08.278Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T06:20:08.280Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T06:20:08.301Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:08.301Z] [BOT] 📍 [ROUTING] " Enterprise Sales Executive (SLED)" @ datadog
   Category: TECH (default)
[2026-01-20T06:20:08.301Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:08.535Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #tech-jobs
[2026-01-20T06:20:08.535Z] [BOT] ✅ Industry:  Enterprise Sales Executive (SLED) @ datadog
[2026-01-20T06:20:08.536Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-20T06:20:08.536Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T06:20:08.537Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T06:20:08.556Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:10.230Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T06:20:10.231Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → location channel (2 total channels)
[2026-01-20T06:20:10.231Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T06:20:10.233Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T06:20:10.253Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:11.754Z] [BOT] 💾 Marked as posted:  Enterprise Sales Executive (SLED) @ datadog (instance #1)
[2026-01-20T06:20:11.754Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T06:20:11.756Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-20T06:20:11.780Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:11.781Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:12.009Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #tech-jobs
  ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-20T06:20:12.011Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-20T06:20:12.011Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-20T06:20:12.013Z] [BOT] ✅ No jobs to archive (all 2793 jobs within 7-day window)
[2026-01-20T06:20:12.043Z] [BOT] 💾 Saved posted_jobs.json: 2793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.544Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-20T06:20:13.544Z] [BOT] 💾 BEFORE ARCHIVING: 2794 jobs in database
[2026-01-20T06:20:13.546Z] [BOT] ✅ No jobs to archive (all 2794 jobs within 7-day window)
[2026-01-20T06:20:13.565Z] [BOT] 💾 Saved posted_jobs.json: 2794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.566Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-20T06:20:13.566Z] [BOT] 💾 BEFORE ARCHIVING: 2795 jobs in database
[2026-01-20T06:20:13.569Z] [BOT] ✅ No jobs to archive (all 2795 jobs within 7-day window)
[2026-01-20T06:20:13.588Z] [BOT] 💾 Saved posted_jobs.json: 2795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.588Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-20T06:20:13.588Z] [BOT] 💾 BEFORE ARCHIVING: 2796 jobs in database
[2026-01-20T06:20:13.590Z] [BOT] ✅ No jobs to archive (all 2796 jobs within 7-day window)
[2026-01-20T06:20:13.611Z] [BOT] 💾 Saved posted_jobs.json: 2796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.611Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-20T06:20:13.612Z] [BOT] 💾 BEFORE ARCHIVING: 2797 jobs in database
[2026-01-20T06:20:13.613Z] [BOT] ✅ No jobs to archive (all 2797 jobs within 7-day window)
[2026-01-20T06:20:13.637Z] [BOT] 💾 Saved posted_jobs.json: 2797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.637Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2798 jobs in database
[2026-01-20T06:20:13.641Z] [BOT] ✅ No jobs to archive (all 2798 jobs within 7-day window)
[2026-01-20T06:20:13.660Z] [BOT] 💾 Saved posted_jobs.json: 2798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:13.661Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (FED)" @ datadog
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:13.924Z] [BOT] ✅ Posted message: Enterprise Sales Executive (FED) @ datadog in #tech-jobs
[2026-01-20T06:20:13.925Z] [BOT] ✅ Industry: Enterprise Sales Executive (FED) @ datadog
[2026-01-20T06:20:13.925Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive (FED) @ datadog → category channel (1 total channels)
[2026-01-20T06:20:13.926Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-20T06:20:13.927Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-20T06:20:13.949Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:15.450Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
[2026-01-20T06:20:15.450Z] [BOT] 💾 BEFORE ARCHIVING: 2800 jobs in database
[2026-01-20T06:20:15.452Z] [BOT] ✅ No jobs to archive (all 2800 jobs within 7-day window)
[2026-01-20T06:20:15.467Z] [BOT] 💾 Saved posted_jobs.json: 2800 active jobs
[2026-01-20T06:20:15.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:15.467Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
[2026-01-20T06:20:15.467Z] [BOT] 💾 BEFORE ARCHIVING: 2801 jobs in database
[2026-01-20T06:20:15.469Z] [BOT] ✅ No jobs to archive (all 2801 jobs within 7-day window)
[2026-01-20T06:20:15.484Z] [BOT] 💾 Saved posted_jobs.json: 2801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:15.485Z] [BOT] 📍 [ROUTING] "Enterprise Security Sales Specialist" @ datadog
[2026-01-20T06:20:15.485Z] [BOT] Category: TECH (matched: "security")
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:15.738Z] [BOT] ✅ Posted message: Enterprise Security Sales Specialist @ datadog in #tech-jobs
  ✅ Industry: Enterprise Security Sales Specialist @ datadog
[2026-01-20T06:20:15.739Z] [BOT] 💾 Added channel posting: Enterprise Security Sales Specialist @ datadog → category channel (1 total channels)
[2026-01-20T06:20:15.739Z] [BOT] 💾 BEFORE ARCHIVING: 2802 jobs in database
[2026-01-20T06:20:15.740Z] [BOT] ✅ No jobs to archive (all 2802 jobs within 7-day window)
[2026-01-20T06:20:15.758Z] [BOT] 💾 Saved posted_jobs.json: 2802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:17.465Z] [BOT] ✅ Posted message: Enterprise Security Sales Specialist @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T06:20:17.466Z] [BOT] 💾 Added channel posting: Enterprise Security Sales Specialist @ datadog → location channel (2 total channels)
[2026-01-20T06:20:17.466Z] [BOT] 💾 BEFORE ARCHIVING: 2802 jobs in database
[2026-01-20T06:20:17.468Z] [BOT] ✅ No jobs to archive (all 2802 jobs within 7-day window)
[2026-01-20T06:20:17.484Z] [BOT] 💾 Saved posted_jobs.json: 2802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:18.986Z] [BOT] 💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
[2026-01-20T06:20:18.986Z] [BOT] 💾 BEFORE ARCHIVING: 2803 jobs in database
[2026-01-20T06:20:18.988Z] [BOT] ✅ No jobs to archive (all 2803 jobs within 7-day window)
[2026-01-20T06:20:19.008Z] [BOT] 💾 Saved posted_jobs.json: 2803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:19.009Z] [BOT] 💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
[2026-01-20T06:20:19.009Z] [BOT] 💾 BEFORE ARCHIVING: 2804 jobs in database
[2026-01-20T06:20:19.011Z] [BOT] ✅ No jobs to archive (all 2804 jobs within 7-day window)
[2026-01-20T06:20:19.030Z] [BOT] 💾 Saved posted_jobs.json: 2804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:19.030Z] [BOT] 📍 [ROUTING] "Executive Assistant II - San Francisco" @ datadog
[2026-01-20T06:20:19.030Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:20:19.371Z] [BOT] ✅ Posted message: Executive Assistant II - San Francisco @ datadog in #tech-jobs
  ✅ Industry: Executive Assistant II - San Francisco @ datadog
[2026-01-20T06:20:19.371Z] [BOT] 💾 Added channel posting: Executive Assistant II - San Francisco @ datadog → category channel (1 total channels)
[2026-01-20T06:20:19.371Z] [BOT] 💾 BEFORE ARCHIVING: 2805 jobs in database
[2026-01-20T06:20:19.373Z] [BOT] ✅ No jobs to archive (all 2805 jobs within 7-day window)
[2026-01-20T06:20:19.394Z] [BOT] 💾 Saved posted_jobs.json: 2805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:20.895Z] [BOT] 💾 Marked as posted: Executive Assistant II - San Francisco @ datadog (instance #1)
[2026-01-20T06:20:20.895Z] [BOT] 💾 BEFORE ARCHIVING: 2806 jobs in database
[2026-01-20T06:20:20.897Z] [BOT] ✅ No jobs to archive (all 2806 jobs within 7-day window)
[2026-01-20T06:20:20.918Z] [BOT] 💾 Saved posted_jobs.json: 2806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:20:23.918Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T06:20:23.920Z] [BOT] ⏭️  Skipping duplicate: JID_5c406f64 (posted within 7 days)
[2026-01-20T06:20:23.920Z] [BOT] ⏭️  Skipping duplicate: JID_54d6023b (posted within 7 days)
[2026-01-20T06:20:23.920Z] [BOT] ⏭️  Skipping duplicate: JID_6da9444c (posted within 7 days)
[2026-01-20T06:20:23.920Z] [BOT] ⏭️  Skipping duplicate: JID_20b447ad (posted within 7 days)
[2026-01-20T06:20:23.921Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-01-20T06:20:23.921Z] [BOT] ⏭️  Skipping duplicate: JID_986c19a5 (posted within 7 days)
[2026-01-20T06:20:23.921Z] [BOT] ⏭️  Skipping duplicate: JID_f16f7e01 (posted within 7 days)
[2026-01-20T06:20:23.921Z] [BOT] ⏭️  Skipping duplicate: JID_bffaf944 (posted within 7 days)
[2026-01-20T06:20:23.921Z] [BOT] ⏭️  Skipping duplicate: JID_84d2607c (posted within 7 days)
[2026-01-20T06:20:24.072Z] [BOT] ✅ Loaded pending queue: 2808 total (2788 pending, 20 enriched, 0 posted)
[2026-01-20T06:20:24.237Z] [BOT] ✅ Saved pending queue: 2808 total (2788 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T06:20:24.302Z] [BOT] 📂 Loaded 5319 existing routing entries
[2026-01-20T06:20:24.371Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5328
   Timestamp: 2026-01-20T06:20:24.352Z
[2026-01-20T06:20:24.372Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
     1. #tech-jobs: 9 posts
     2. #JID_ead674af: 3 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-20T06:20:24.372Z] [BOT] [STATS] Channel stats saved
[2026-01-20T06:20:26.387Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*