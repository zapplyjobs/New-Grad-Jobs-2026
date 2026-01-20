# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T07:03:10.841Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T07:02:37.023Z] ========================================
[2026-01-20T07:02:37.025Z] Discord Bot Execution Log
[2026-01-20T07:02:37.025Z] Environment: GitHub Actions
[2026-01-20T07:02:37.025Z] Node Version: v20.19.6
[2026-01-20T07:02:37.025Z] ========================================
[2026-01-20T07:02:37.025Z] Environment Variables Check:
[2026-01-20T07:02:37.025Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T07:02:37.025Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.025Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T07:02:37.026Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T07:02:37.026Z] 
Multi-Channel Configuration:
[2026-01-20T07:02:37.026Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T07:02:37.026Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T07:02:37.026Z] 
Data Files Check:
[2026-01-20T07:02:37.028Z] .github/data/new_jobs.json: ✅ Exists (10 items, 165996 bytes)
[2026-01-20T07:02:37.039Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1555754 bytes)
[2026-01-20T07:02:37.039Z] 
========================================
[2026-01-20T07:02:37.039Z] Starting Enhanced Discord Bot...
[2026-01-20T07:02:37.039Z] ========================================
[2026-01-20T07:02:37.578Z] [BOT] ✅ Loaded V2 database: 2807 jobs
[2026-01-20T07:02:38.326Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T07:02:38.327Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T07:02:38.327Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T07:02:38.445Z] [BOT] ✅ Loaded pending queue: 2805 total (2785 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T07:02:38.448Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T07:02:38.449Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T07:02:38.449Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T07:02:38.450Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-20T07:02:38.450Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Major Account Manager @ datadog: boston, massachusetts, usa; new york, new york, usa, remote
   - Manager 1, Technical Account Management - Denver @ datadog: denver, colorado, usa, new york, new york, usa
   - Manager 2, Premier Support Engineering -  Boston @ datadog: boston, massachusetts, usa, new york, new york, usa
[2026-01-20T07:02:38.450Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T07:02:38.452Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T07:02:38.453Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T07:02:38.455Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T07:02:38.455Z] [BOT] 📍 [ROUTING] "Information Security Analyst II" @ datadog
[2026-01-20T07:02:38.455Z] [BOT] Category: TECH (matched: "security")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:38.460Z] [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T07:02:38.652Z] [BOT] ✅ Posted message: Information Security Analyst II @ datadog in #tech-jobs
[2026-01-20T07:02:38.652Z] [BOT] ✅ Industry: Information Security Analyst II @ datadog
[2026-01-20T07:02:38.653Z] [BOT] 💾 Added channel posting: Information Security Analyst II @ datadog → category channel (1 total channels)
[2026-01-20T07:02:38.653Z] [BOT] 💾 BEFORE ARCHIVING: 2808 jobs in database
[2026-01-20T07:02:38.656Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T07:02:38.659Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-20T07:02:38.659Z] [BOT] ✅ Archiving complete: 21 archived, 2787 active
[2026-01-20T07:02:38.675Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:40.402Z] [BOT] ✅ Posted message: Information Security Analyst II @ datadog in #JID_98d4f0de
[2026-01-20T07:02:40.402Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:02:40.403Z] [BOT] 💾 Added channel posting: Information Security Analyst II @ datadog → location channel (2 total channels)
[2026-01-20T07:02:40.403Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T07:02:40.405Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T07:02:40.420Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:41.920Z] [BOT] 💾 Marked as posted: Information Security Analyst II @ datadog (instance #1)
[2026-01-20T07:02:41.921Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T07:02:41.922Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T07:02:41.942Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:41.942Z] [BOT] 📍 [ROUTING] "Key Accounts Executive (East)" @ datadog
[2026-01-20T07:02:41.942Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:42.224Z] [BOT] ✅ Posted message: Key Accounts Executive (East) @ datadog in #tech-jobs
[2026-01-20T07:02:42.224Z] [BOT] ✅ Industry: Key Accounts Executive (East) @ datadog
[2026-01-20T07:02:42.224Z] [BOT] 💾 Added channel posting: Key Accounts Executive (East) @ datadog → category channel (1 total channels)
[2026-01-20T07:02:42.224Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T07:02:42.226Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T07:02:42.244Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:43.935Z] [BOT] ✅ Posted message: Key Accounts Executive (East) @ datadog in #JID_98d4f0de
[2026-01-20T07:02:43.935Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:02:43.935Z] [BOT] 💾 Added channel posting: Key Accounts Executive (East) @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T07:02:43.937Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T07:02:43.955Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:45.456Z] [BOT] 💾 Marked as posted: Key Accounts Executive (East) @ datadog (instance #1)
[2026-01-20T07:02:45.456Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T07:02:45.458Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T07:02:45.474Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:45.475Z] [BOT] 📍 [ROUTING] "Major Account Manager" @ datadog
[2026-01-20T07:02:45.475Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:45.638Z] [BOT] ✅ Posted message: Major Account Manager @ datadog in #tech-jobs
[2026-01-20T07:02:45.639Z] [BOT] ✅ Industry: Major Account Manager @ datadog
[2026-01-20T07:02:45.639Z] [BOT] 💾 Added channel posting: Major Account Manager @ datadog → category channel (1 total channels)
[2026-01-20T07:02:45.639Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T07:02:45.641Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T07:02:45.656Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:47.495Z] [BOT] ✅ Posted message: Major Account Manager @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:02:47.496Z] [BOT] 💾 Added channel posting: Major Account Manager @ datadog → location channel (2 total channels)
[2026-01-20T07:02:47.496Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T07:02:47.498Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T07:02:47.517Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
[2026-01-20T07:02:47.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:49.018Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-20T07:02:49.019Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T07:02:49.020Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-20T07:02:49.040Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:49.040Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-20T07:02:49.040Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-20T07:02:49.042Z] [BOT] ✅ No jobs to archive (all 2793 jobs within 7-day window)
[2026-01-20T07:02:49.058Z] [BOT] 💾 Saved posted_jobs.json: 2793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:49.059Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Account Management - Denver" @ datadog
[2026-01-20T07:02:49.059Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:49.243Z] [BOT] ✅ Posted message: Manager 1, Technical Account Management - Denver @ datadog in #tech-jobs
[2026-01-20T07:02:49.243Z] [BOT] ✅ Industry: Manager 1, Technical Account Management - Denver @ datadog
[2026-01-20T07:02:49.244Z] [BOT] 💾 Added channel posting: Manager 1, Technical Account Management - Denver @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2794 jobs in database
[2026-01-20T07:02:49.246Z] [BOT] ✅ No jobs to archive (all 2794 jobs within 7-day window)
[2026-01-20T07:02:49.262Z] [BOT] 💾 Saved posted_jobs.json: 2794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:50.764Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - Denver @ datadog (instance #1)
[2026-01-20T07:02:50.764Z] [BOT] 💾 BEFORE ARCHIVING: 2795 jobs in database
[2026-01-20T07:02:50.765Z] [BOT] ✅ No jobs to archive (all 2795 jobs within 7-day window)
[2026-01-20T07:02:50.782Z] [BOT] 💾 Saved posted_jobs.json: 2795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:50.783Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - New York @ datadog (instance #1)
[2026-01-20T07:02:50.783Z] [BOT] 💾 BEFORE ARCHIVING: 2796 jobs in database
[2026-01-20T07:02:50.785Z] [BOT] ✅ No jobs to archive (all 2796 jobs within 7-day window)
[2026-01-20T07:02:50.801Z] [BOT] 💾 Saved posted_jobs.json: 2796 active jobs
[2026-01-20T07:02:50.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:50.802Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Escalations Engineering - US-East" @ datadog
[2026-01-20T07:02:50.802Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:51.017Z] [BOT] ✅ Posted message: Manager 1, Technical Escalations Engineering - US-East @ datadog in #tech-jobs
[2026-01-20T07:02:51.017Z] [BOT] ✅ Industry: Manager 1, Technical Escalations Engineering - US-East @ datadog
[2026-01-20T07:02:51.017Z] [BOT] 💾 Added channel posting: Manager 1, Technical Escalations Engineering - US-East @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2797 jobs in database
[2026-01-20T07:02:51.019Z] [BOT] ✅ No jobs to archive (all 2797 jobs within 7-day window)
[2026-01-20T07:02:51.036Z] [BOT] 💾 Saved posted_jobs.json: 2797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:52.918Z] [BOT] ✅ Posted message: Manager 1, Technical Escalations Engineering - US-East @ datadog in #JID_98d4f0de
[2026-01-20T07:02:52.919Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:02:52.919Z] [BOT] 💾 Added channel posting: Manager 1, Technical Escalations Engineering - US-East @ datadog → location channel (2 total channels)
[2026-01-20T07:02:52.919Z] [BOT] 💾 BEFORE ARCHIVING: 2797 jobs in database
[2026-01-20T07:02:52.921Z] [BOT] ✅ No jobs to archive (all 2797 jobs within 7-day window)
[2026-01-20T07:02:52.937Z] [BOT] 💾 Saved posted_jobs.json: 2797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:54.439Z] [BOT] 💾 Marked as posted: Manager 1, Technical Escalations Engineering - US-East @ datadog (instance #1)
[2026-01-20T07:02:54.439Z] [BOT] 💾 BEFORE ARCHIVING: 2798 jobs in database
[2026-01-20T07:02:54.440Z] [BOT] ✅ No jobs to archive (all 2798 jobs within 7-day window)
[2026-01-20T07:02:54.458Z] [BOT] 💾 Saved posted_jobs.json: 2798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:54.459Z] [BOT] 📍 [ROUTING] "Manager 2, Premier Support Engineering -  Boston" @ datadog
[2026-01-20T07:02:54.459Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:54.727Z] [BOT] ✅ Posted message: Manager 2, Premier Support Engineering -  Boston @ datadog in #tech-jobs
  ✅ Industry: Manager 2, Premier Support Engineering -  Boston @ datadog
[2026-01-20T07:02:54.728Z] [BOT] 💾 Added channel posting: Manager 2, Premier Support Engineering -  Boston @ datadog → category channel (1 total channels)
[2026-01-20T07:02:54.728Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-20T07:02:54.730Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-20T07:02:54.748Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:56.250Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering -  Boston @ datadog (instance #1)
[2026-01-20T07:02:56.250Z] [BOT] 💾 BEFORE ARCHIVING: 2800 jobs in database
[2026-01-20T07:02:56.252Z] [BOT] ✅ No jobs to archive (all 2800 jobs within 7-day window)
[2026-01-20T07:02:56.268Z] [BOT] 💾 Saved posted_jobs.json: 2800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:56.268Z] [BOT] 💾 Marked as posted: Manager 2, Premier Support Engineering - New York @ datadog (instance #1)
[2026-01-20T07:02:56.268Z] [BOT] 💾 BEFORE ARCHIVING: 2801 jobs in database
[2026-01-20T07:02:56.269Z] [BOT] ✅ No jobs to archive (all 2801 jobs within 7-day window)
[2026-01-20T07:02:56.288Z] [BOT] 💾 Saved posted_jobs.json: 2801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:56.289Z] [BOT] 📍 [ROUTING] "Manager, Commercial Sales Engineering (AMER - West)" @ datadog
[2026-01-20T07:02:56.289Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:02:56.500Z] [BOT] ✅ Posted message: Manager, Commercial Sales Engineering (AMER - West) @ datadog in #tech-jobs
[2026-01-20T07:02:56.500Z] [BOT] ✅ Industry: Manager, Commercial Sales Engineering (AMER - West) @ datadog
[2026-01-20T07:02:56.501Z] [BOT] 💾 Added channel posting: Manager, Commercial Sales Engineering (AMER - West) @ datadog → category channel (1 total channels)
[2026-01-20T07:02:56.501Z] [BOT] 💾 BEFORE ARCHIVING: 2802 jobs in database
[2026-01-20T07:02:56.503Z] [BOT] ✅ No jobs to archive (all 2802 jobs within 7-day window)
[2026-01-20T07:02:56.520Z] [BOT] 💾 Saved posted_jobs.json: 2802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:02:58.022Z] [BOT] 💾 Marked as posted: Manager, Commercial Sales Engineering (AMER - West) @ datadog (instance #1)
[2026-01-20T07:02:58.022Z] [BOT] 💾 BEFORE ARCHIVING: 2803 jobs in database
[2026-01-20T07:02:58.024Z] [BOT] ✅ No jobs to archive (all 2803 jobs within 7-day window)
[2026-01-20T07:02:58.039Z] [BOT] 💾 Saved posted_jobs.json: 2803 active jobs
[2026-01-20T07:02:58.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:03:01.041Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T07:03:01.041Z] [BOT] 📍 [ROUTING] "Leadership Training Manager" @ datadog
   Category: AI (matched: "machine learning")
[2026-01-20T07:03:01.041Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-20T07:03:01.041Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-20T07:03:01.295Z] [BOT] ✅ Posted message: Leadership Training Manager @ datadog in #ai-jobs
  ✅ Industry: Leadership Training Manager @ datadog
[2026-01-20T07:03:01.296Z] [BOT] 💾 Added channel posting: Leadership Training Manager @ datadog → category channel (1 total channels)
[2026-01-20T07:03:01.296Z] [BOT] 💾 BEFORE ARCHIVING: 2804 jobs in database
[2026-01-20T07:03:01.297Z] [BOT] ✅ No jobs to archive (all 2804 jobs within 7-day window)
[2026-01-20T07:03:01.314Z] [BOT] 💾 Saved posted_jobs.json: 2804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:03:03.019Z] [BOT] ✅ Posted message: Leadership Training Manager @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:03:03.020Z] [BOT] 💾 Added channel posting: Leadership Training Manager @ datadog → location channel (2 total channels)
[2026-01-20T07:03:03.020Z] [BOT] 💾 BEFORE ARCHIVING: 2804 jobs in database
[2026-01-20T07:03:03.021Z] [BOT] ✅ No jobs to archive (all 2804 jobs within 7-day window)
[2026-01-20T07:03:03.037Z] [BOT] 💾 Saved posted_jobs.json: 2804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:03:04.538Z] [BOT] 💾 Marked as posted: Leadership Training Manager @ datadog (instance #1)
[2026-01-20T07:03:04.538Z] [BOT] 💾 BEFORE ARCHIVING: 2805 jobs in database
[2026-01-20T07:03:04.539Z] [BOT] ✅ No jobs to archive (all 2805 jobs within 7-day window)
[2026-01-20T07:03:04.555Z] [BOT] 💾 Saved posted_jobs.json: 2805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:03:07.555Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-20T07:03:07.556Z] [BOT] ⏭️  Skipping duplicate: JID_a21cfa1f (posted within 7 days)
[2026-01-20T07:03:07.556Z] [BOT] ⏭️  Skipping duplicate: JID_122347b6 (posted within 7 days)
[2026-01-20T07:03:07.557Z] [BOT] ⏭️  Skipping duplicate: JID_bbacdee7 (posted within 7 days)
⏭️  Skipping duplicate: JID_2155f838 (posted within 7 days)
[2026-01-20T07:03:07.557Z] [BOT] ⏭️  Skipping duplicate: JID_dfe4d61a (posted within 7 days)
[2026-01-20T07:03:07.557Z] [BOT] ⏭️  Skipping duplicate: JID_ad0fd891 (posted within 7 days)
[2026-01-20T07:03:07.557Z] [BOT] ⏭️  Skipping duplicate: JID_d092efb1 (posted within 7 days)
[2026-01-20T07:03:07.557Z] [BOT] ⏭️  Skipping duplicate: JID_e2c56bbd (posted within 7 days)
[2026-01-20T07:03:07.662Z] [BOT] ✅ Loaded pending queue: 2805 total (2785 pending, 20 enriched, 0 posted)
[2026-01-20T07:03:07.841Z] [BOT] ✅ Saved pending queue: 2805 total (2785 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-20T07:03:07.841Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T07:03:07.920Z] [BOT] 📂 Loaded 5336 existing routing entries
[2026-01-20T07:03:07.992Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-20T07:03:07.992Z] [BOT] Total entries: 5344
   Timestamp: 2026-01-20T07:03:07.969Z
[2026-01-20T07:03:07.992Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T07:03:07.992Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-20T07:03:07.993Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 3
   Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_98d4f0de: 5 posts
     3. #ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T07:03:10.016Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*