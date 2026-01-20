# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T13:52:25.363Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T13:52:10.903Z] ========================================
[2026-01-20T13:52:10.904Z] Discord Bot Execution Log
[2026-01-20T13:52:10.905Z] Environment: GitHub Actions
[2026-01-20T13:52:10.905Z] Node Version: v20.19.6
[2026-01-20T13:52:10.905Z] ========================================
[2026-01-20T13:52:10.905Z] Environment Variables Check:
[2026-01-20T13:52:10.905Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T13:52:10.905Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.905Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T13:52:10.905Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T13:52:10.905Z] 
Multi-Channel Configuration:
[2026-01-20T13:52:10.905Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T13:52:10.906Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T13:52:10.906Z] 
Data Files Check:
[2026-01-20T13:52:10.907Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156049 bytes)
[2026-01-20T13:52:10.919Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1631800 bytes)
[2026-01-20T13:52:10.919Z] 
========================================
[2026-01-20T13:52:10.919Z] Starting Enhanced Discord Bot...
[2026-01-20T13:52:10.919Z] ========================================
[2026-01-20T13:52:11.450Z] [BOT] ✅ Loaded V2 database: 2931 jobs
[2026-01-20T13:52:11.849Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T13:52:11.850Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T13:52:11.850Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T13:52:11.963Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T13:52:11.968Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T13:52:11.968Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T13:52:11.968Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T13:52:11.969Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T13:52:11.970Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T13:52:11.970Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T13:52:11.973Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T13:52:11.974Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T13:52:11.974Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T13:52:11.974Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T13:52:11.975Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T13:52:11.975Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T13:52:11.975Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T13:52:11.976Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager, Duolingo Chess - skipping
[2026-01-20T13:52:11.976Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T13:52:11.976Z] [BOT] 📍 [ROUTING] "Senior Android Engineer" @ duolingo
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T13:52:11.977Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T13:52:11.981Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T13:52:12.152Z] [BOT] ✅ Posted message: Senior Android Engineer @ duolingo in #tech-jobs
[2026-01-20T13:52:12.152Z] [BOT] ✅ Industry: Senior Android Engineer @ duolingo
[2026-01-20T13:52:12.153Z] [BOT] 💾 Added channel posting: Senior Android Engineer @ duolingo → category channel (1 total channels)
[2026-01-20T13:52:12.153Z] [BOT] 💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-20T13:52:12.156Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-20T13:52:12.179Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:13.868Z] [BOT] ✅ Posted message: Senior Android Engineer @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T13:52:13.869Z] [BOT] 💾 Added channel posting: Senior Android Engineer @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-20T13:52:13.871Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-20T13:52:13.889Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:15.390Z] [BOT] 💾 Marked as posted: Senior Android Engineer @ duolingo (instance #1)
[2026-01-20T13:52:15.391Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-20T13:52:15.393Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-20T13:52:15.413Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:15.414Z] [BOT] 📍 [ROUTING] "Senior iOS Engineer, App Builds" @ duolingo
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T13:52:15.538Z] [BOT] ✅ Posted message: Senior iOS Engineer, App Builds @ duolingo in #tech-jobs
[2026-01-20T13:52:15.538Z] [BOT] ✅ Industry: Senior iOS Engineer, App Builds @ duolingo
[2026-01-20T13:52:15.539Z] [BOT] 💾 Added channel posting: Senior iOS Engineer, App Builds @ duolingo → category channel (1 total channels)
[2026-01-20T13:52:15.539Z] [BOT] 💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-20T13:52:15.541Z] [BOT] ✅ No jobs to archive (all 2934 jobs within 7-day window)
[2026-01-20T13:52:15.559Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:17.606Z] [BOT] ✅ Posted message: Senior iOS Engineer, App Builds @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T13:52:17.607Z] [BOT] 💾 Added channel posting: Senior iOS Engineer, App Builds @ duolingo → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-20T13:52:17.609Z] [BOT] ✅ No jobs to archive (all 2934 jobs within 7-day window)
[2026-01-20T13:52:17.632Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:19.133Z] [BOT] 💾 Marked as posted: Senior iOS Engineer, App Builds @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 2935 jobs in database
[2026-01-20T13:52:19.135Z] [BOT] ✅ No jobs to archive (all 2935 jobs within 7-day window)
[2026-01-20T13:52:19.152Z] [BOT] 💾 Saved posted_jobs.json: 2935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:52:22.153Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-20T13:52:22.155Z] [BOT] ⏭️  Skipping duplicate: JID_a01fd1b4 (posted within 7 days)
[2026-01-20T13:52:22.155Z] [BOT] ⏭️  Skipping duplicate: JID_6006fee5 (posted within 7 days)
[2026-01-20T13:52:22.280Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[2026-01-20T13:52:22.464Z] [BOT] ✅ Saved pending queue: 2794 total (2774 pending, 18 enriched, 2 posted)
[2026-01-20T13:52:22.465Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T13:52:22.526Z] [BOT] 📂 Loaded 5430 existing routing entries
[2026-01-20T13:52:22.600Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 5432
   Timestamp: 2026-01-20T13:52:22.577Z
[2026-01-20T13:52:22.601Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T13:52:22.601Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-20T13:52:22.601Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
[2026-01-20T13:52:22.601Z] [BOT] 1. #tech-jobs: 2 posts
     2. #JID_98d4f0de: 2 posts
[2026-01-20T13:52:22.602Z] [BOT] [STATS] Channel stats saved
[2026-01-20T13:52:24.630Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager, Duolingo Chess - skipping
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*