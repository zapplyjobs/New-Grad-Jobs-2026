# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T20:04:17.480Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T20:03:44.918Z] ========================================
[2026-01-20T20:03:44.920Z] Discord Bot Execution Log
[2026-01-20T20:03:44.920Z] Environment: GitHub Actions
[2026-01-20T20:03:44.920Z] Node Version: v20.19.6
[2026-01-20T20:03:44.920Z] ========================================
[2026-01-20T20:03:44.920Z] Environment Variables Check:
[2026-01-20T20:03:44.920Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T20:03:44.920Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T20:03:44.921Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T20:03:44.921Z] 
Multi-Channel Configuration:
[2026-01-20T20:03:44.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.921Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.922Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T20:03:44.922Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T20:03:44.922Z] 
Data Files Check:
[2026-01-20T20:03:44.923Z] .github/data/new_jobs.json: ✅ Exists (10 items, 185450 bytes)
[2026-01-20T20:03:44.934Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1628432 bytes)
[2026-01-20T20:03:44.934Z] 
========================================
[2026-01-20T20:03:44.934Z] Starting Enhanced Discord Bot...
[2026-01-20T20:03:44.934Z] ========================================
[2026-01-20T20:03:45.476Z] [BOT] ✅ Loaded V2 database: 2913 jobs
[2026-01-20T20:03:46.697Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T20:03:46.697Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T20:03:46.697Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T20:03:46.817Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Mid Market (MST/PST) at samsara
[2026-01-20T20:03:46.820Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T20:03:46.820Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T20:03:46.820Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T20:03:46.821Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-20T20:03:46.821Z] [BOT] (11 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Mid Market (MST/PST) @ samsara: san francisco, ca, united states, phoenix, arizona, united states
   -  Mid-Market Account Executive - PubSec @ samsara: boston, charleston, baltimore, louisville, san antonio, denver, houston, texas, salt lake, chicago, dallas
⏸️ Limiting to 10 jobs this run, 11 deferred for next run
[2026-01-20T20:03:46.822Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T20:03:46.825Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T20:03:46.826Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (MST/PST)" @ samsara
[2026-01-20T20:03:46.826Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:46.831Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T20:03:47.064Z] [BOT] ✅ Posted message: Account Executive, Mid Market (MST/PST) @ samsara in #tech-jobs
  ✅ Industry: Account Executive, Mid Market (MST/PST) @ samsara
[2026-01-20T20:03:47.065Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market (MST/PST) @ samsara → category channel (1 total channels)
[2026-01-20T20:03:47.065Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T20:03:47.068Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T20:03:47.073Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-20T20:03:47.073Z] [BOT] ✅ Archiving complete: 21 archived, 2893 active
[2026-01-20T20:03:47.090Z] [BOT] 💾 Saved posted_jobs.json: 2893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:48.593Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
[2026-01-20T20:03:48.593Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-20T20:03:48.595Z] [BOT] ✅ No jobs to archive (all 2894 jobs within 7-day window)
[2026-01-20T20:03:48.612Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:48.612Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
[2026-01-20T20:03:48.612Z] [BOT] 💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-20T20:03:48.614Z] [BOT] ✅ No jobs to archive (all 2895 jobs within 7-day window)
[2026-01-20T20:03:48.633Z] [BOT] 💾 Saved posted_jobs.json: 2895 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:48.633Z] [BOT] 📍 [ROUTING] " Mid-Market Account Executive - PubSec" @ samsara
[2026-01-20T20:03:48.633Z] [BOT] Category: TECH (default)
[2026-01-20T20:03:48.634Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:48.910Z] [BOT] ✅ Posted message:  Mid-Market Account Executive - PubSec @ samsara in #tech-jobs
[2026-01-20T20:03:48.911Z] [BOT] ✅ Industry:  Mid-Market Account Executive - PubSec @ samsara
[2026-01-20T20:03:48.911Z] [BOT] 💾 Added channel posting:  Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-20T20:03:48.911Z] [BOT] 💾 BEFORE ARCHIVING: 2896 jobs in database
[2026-01-20T20:03:48.913Z] [BOT] ✅ No jobs to archive (all 2896 jobs within 7-day window)
[2026-01-20T20:03:48.932Z] [BOT] 💾 Saved posted_jobs.json: 2896 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.433Z] [BOT] 💾 Marked as posted:  Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.433Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-20T20:03:50.435Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-20T20:03:50.453Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.453Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.453Z] [BOT] 💾 BEFORE ARCHIVING: 2898 jobs in database
[2026-01-20T20:03:50.456Z] [BOT] ✅ No jobs to archive (all 2898 jobs within 7-day window)
[2026-01-20T20:03:50.472Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.473Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.473Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-20T20:03:50.475Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-20T20:03:50.491Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.491Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.491Z] [BOT] 💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-20T20:03:50.492Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-20T20:03:50.508Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.509Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.509Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-20T20:03:50.510Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-20T20:03:50.527Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.527Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 2902 jobs in database
[2026-01-20T20:03:50.529Z] [BOT] ✅ No jobs to archive (all 2902 jobs within 7-day window)
[2026-01-20T20:03:50.546Z] [BOT] 💾 Saved posted_jobs.json: 2902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.547Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.547Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-20T20:03:50.548Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-20T20:03:50.565Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.565Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.565Z] [BOT] 💾 BEFORE ARCHIVING: 2904 jobs in database
[2026-01-20T20:03:50.567Z] [BOT] ✅ No jobs to archive (all 2904 jobs within 7-day window)
[2026-01-20T20:03:50.583Z] [BOT] 💾 Saved posted_jobs.json: 2904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.584Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-20T20:03:50.585Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-20T20:03:50.601Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.602Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.602Z] [BOT] 💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-20T20:03:50.603Z] [BOT] ✅ No jobs to archive (all 2906 jobs within 7-day window)
[2026-01-20T20:03:50.619Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.620Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-20T20:03:50.620Z] [BOT] 💾 BEFORE ARCHIVING: 2907 jobs in database
[2026-01-20T20:03:50.621Z] [BOT] ✅ No jobs to archive (all 2907 jobs within 7-day window)
[2026-01-20T20:03:50.639Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:50.639Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Developer Platform" @ anthropic
[2026-01-20T20:03:50.639Z] [BOT] Category: TECH (matched: "software")
[2026-01-20T20:03:50.639Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:51.022Z] [BOT] ✅ Posted message: Engineering Manager, Claude Developer Platform @ anthropic in #tech-jobs
  ✅ Industry: Engineering Manager, Claude Developer Platform @ anthropic
[2026-01-20T20:03:51.023Z] [BOT] 💾 Added channel posting: Engineering Manager, Claude Developer Platform @ anthropic → category channel (1 total channels)
[2026-01-20T20:03:51.023Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T20:03:51.025Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T20:03:51.042Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:52.542Z] [BOT] 💾 Marked as posted: Engineering Manager, Claude Developer Platform @ anthropic (instance #1)
[2026-01-20T20:03:52.543Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-20T20:03:52.544Z] [BOT] ✅ No jobs to archive (all 2909 jobs within 7-day window)
[2026-01-20T20:03:52.560Z] [BOT] 💾 Saved posted_jobs.json: 2909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:52.560Z] [BOT] 📍 [ROUTING] "Growth Account Executive" @ anthropic
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:52.773Z] [BOT] ✅ Posted message: Growth Account Executive @ anthropic in #tech-jobs
  ✅ Industry: Growth Account Executive @ anthropic
[2026-01-20T20:03:52.773Z] [BOT] 💾 Added channel posting: Growth Account Executive @ anthropic → category channel (1 total channels)
[2026-01-20T20:03:52.773Z] [BOT] 💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T20:03:52.775Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T20:03:52.791Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:54.292Z] [BOT] 💾 Marked as posted: Growth Account Executive @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2911 jobs in database
[2026-01-20T20:03:54.294Z] [BOT] ✅ No jobs to archive (all 2911 jobs within 7-day window)
[2026-01-20T20:03:54.311Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:54.311Z] [BOT] 📍 [ROUTING] "Manager, Growth Account Executive" @ anthropic
[2026-01-20T20:03:54.311Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:54.506Z] [BOT] ✅ Posted message: Manager, Growth Account Executive @ anthropic in #tech-jobs
  ✅ Industry: Manager, Growth Account Executive @ anthropic
[2026-01-20T20:03:54.507Z] [BOT] 💾 Added channel posting: Manager, Growth Account Executive @ anthropic → category channel (1 total channels)
[2026-01-20T20:03:54.507Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T20:03:54.509Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T20:03:54.526Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
[2026-01-20T20:03:54.526Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:56.028Z] [BOT] 💾 Marked as posted: Manager, Growth Account Executive @ anthropic (instance #1)
[2026-01-20T20:03:56.028Z] [BOT] 💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-20T20:03:56.030Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-20T20:03:56.051Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:56.051Z] [BOT] 📍 [ROUTING] "Manager, Startup Account Executive" @ anthropic
   Category: TECH (default)
[2026-01-20T20:03:56.051Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:56.217Z] [BOT] ✅ Posted message: Manager, Startup Account Executive @ anthropic in #tech-jobs
  ✅ Industry: Manager, Startup Account Executive @ anthropic
[2026-01-20T20:03:56.218Z] [BOT] 💾 Added channel posting: Manager, Startup Account Executive @ anthropic → category channel (1 total channels)
[2026-01-20T20:03:56.218Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T20:03:56.220Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-20T20:03:56.239Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:57.740Z] [BOT] 💾 Marked as posted: Manager, Startup Account Executive @ anthropic (instance #1)
[2026-01-20T20:03:57.740Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-20T20:03:57.742Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-20T20:03:57.759Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:57.760Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Claude Developer Platform (Backend)" @ anthropic
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:03:58.067Z] [BOT] ✅ Posted message: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic in #tech-jobs
  ✅ Industry: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic
[2026-01-20T20:03:58.068Z] [BOT] 💾 Added channel posting: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic → category channel (1 total channels)
[2026-01-20T20:03:58.068Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-20T20:03:58.070Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-20T20:03:58.088Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:03:59.590Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic (instance #1)
[2026-01-20T20:03:59.591Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-20T20:03:59.593Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-20T20:03:59.610Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:02.612Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T20:04:02.612Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Retail Beauty)" @ reddit
[2026-01-20T20:04:02.612Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T20:04:02.945Z] [BOT] ✅ Posted message: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #ai-jobs
[2026-01-20T20:04:02.946Z] [BOT] ✅ Industry: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit
[2026-01-20T20:04:02.946Z] [BOT] 💾 Added channel posting: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit → category channel (1 total channels)
[2026-01-20T20:04:02.946Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T20:04:02.948Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T20:04:02.965Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:04.607Z] [BOT] ✅ Posted message: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #JID_98d4f0de
[2026-01-20T20:04:04.607Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T20:04:04.608Z] [BOT] 💾 Added channel posting: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit → location channel (2 total channels)
[2026-01-20T20:04:04.608Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T20:04:04.610Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T20:04:04.627Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:06.129Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit (instance #1)
[2026-01-20T20:04:06.129Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T20:04:06.131Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T20:04:06.150Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:09.152Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T20:04:09.152Z] [BOT] 📍 [ROUTING] "Product Designer, Notifications" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-20T20:04:09.152Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-20T20:04:09.602Z] [BOT] ✅ Posted message: Product Designer, Notifications @ discord in #JID_fb739488
  ✅ Industry: Product Designer, Notifications @ discord
[2026-01-20T20:04:09.603Z] [BOT] 💾 Added channel posting: Product Designer, Notifications @ discord → category channel (1 total channels)
[2026-01-20T20:04:09.603Z] [BOT] 💾 BEFORE ARCHIVING: 2920 jobs in database
[2026-01-20T20:04:09.605Z] [BOT] ✅ No jobs to archive (all 2920 jobs within 7-day window)
[2026-01-20T20:04:09.622Z] [BOT] 💾 Saved posted_jobs.json: 2920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:11.123Z] [BOT] 💾 Marked as posted: Product Designer, Notifications @ discord (instance #1)
[2026-01-20T20:04:11.124Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T20:04:11.125Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T20:04:11.144Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:04:14.145Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T20:04:14.146Z] [BOT] ⏭️  Skipping duplicate: JID_7c2dc632 (posted within 7 days)
[2026-01-20T20:04:14.146Z] [BOT] ⏭️  Skipping duplicate: JID_efed3126 (posted within 7 days)
[2026-01-20T20:04:14.146Z] [BOT] ⏭️  Skipping duplicate: JID_61d9ceb5 (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_074cb95b (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_a88e8770 (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_78316e95 (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_ad2ee979 (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_7a1af65d (posted within 7 days)
[2026-01-20T20:04:14.147Z] [BOT] ⏭️  Skipping duplicate: JID_c37304c6 (posted within 7 days)
[2026-01-20T20:04:14.256Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-20T20:04:14.453Z] [BOT] ✅ Saved pending queue: 2771 total (2751 pending, 11 enriched, 9 posted)
[2026-01-20T20:04:14.454Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T20:04:14.517Z] [BOT] 📂 Loaded 5453 existing routing entries
[2026-01-20T20:04:14.592Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5462
[2026-01-20T20:04:14.592Z] [BOT] Timestamp: 2026-01-20T20:04:14.568Z
[2026-01-20T20:04:14.592Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T20:04:14.592Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-20T20:04:14.593Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T20:04:14.593Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #tech-jobs: 7 posts
     2. #ai-jobs: 1 posts
     3. #JID_98d4f0de: 1 posts
     4. #JID_fb739488: 1 posts
[2026-01-20T20:04:14.593Z] [BOT] [STATS] Channel stats saved
[2026-01-20T20:04:16.619Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*