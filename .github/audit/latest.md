# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T14:16:46.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T14:16:34.630Z] ========================================
[2026-01-20T14:16:34.632Z] Discord Bot Execution Log
[2026-01-20T14:16:34.632Z] Environment: GitHub Actions
[2026-01-20T14:16:34.632Z] Node Version: v20.19.6
[2026-01-20T14:16:34.632Z] ========================================
[2026-01-20T14:16:34.632Z] Environment Variables Check:
[2026-01-20T14:16:34.632Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T14:16:34.632Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.632Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T14:16:34.632Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T14:16:34.632Z] 
Multi-Channel Configuration:
[2026-01-20T14:16:34.633Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T14:16:34.633Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T14:16:34.633Z] 
Data Files Check:
[2026-01-20T14:16:34.635Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150886 bytes)
[2026-01-20T14:16:34.647Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1634320 bytes)
[2026-01-20T14:16:34.647Z] 
========================================
[2026-01-20T14:16:34.647Z] Starting Enhanced Discord Bot...
[2026-01-20T14:16:34.647Z] ========================================
[2026-01-20T14:16:35.172Z] [BOT] ✅ Loaded V2 database: 2935 jobs
[2026-01-20T14:16:35.858Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T14:16:35.859Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T14:16:35.859Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T14:16:36.017Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T14:16:36.022Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T14:16:36.022Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T14:16:36.022Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T14:16:36.023Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-20T14:16:36.023Z] [BOT] 📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T14:16:36.026Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T14:16:36.027Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T14:16:36.027Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T14:16:36.027Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T14:16:36.028Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T14:16:36.028Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T14:16:36.028Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T14:16:36.029Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager, Duolingo Chess - skipping
[2026-01-20T14:16:36.029Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Product Manager, Ads - skipping
[2026-01-20T14:16:36.029Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-20T14:16:36.029Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer" @ duolingo
[2026-01-20T14:16:36.029Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T14:16:36.033Z] [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T14:16:36.677Z] [BOT] ✅ Posted message: Senior iOS Software Engineer @ duolingo in #tech-jobs
  ✅ Industry: Senior iOS Software Engineer @ duolingo
[2026-01-20T14:16:36.678Z] [BOT] 💾 Added channel posting: Senior iOS Software Engineer @ duolingo → category channel (1 total channels)
[2026-01-20T14:16:36.678Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-20T14:16:36.680Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-20T14:16:36.702Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T14:16:38.443Z] [BOT] ✅ Posted message: Senior iOS Software Engineer @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T14:16:38.444Z] [BOT] 💾 Added channel posting: Senior iOS Software Engineer @ duolingo → location channel (2 total channels)
[2026-01-20T14:16:38.444Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-20T14:16:38.446Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-20T14:16:38.463Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T14:16:39.964Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer @ duolingo (instance #1)
[2026-01-20T14:16:39.964Z] [BOT] 💾 BEFORE ARCHIVING: 2937 jobs in database
[2026-01-20T14:16:39.967Z] [BOT] ✅ No jobs to archive (all 2937 jobs within 7-day window)
[2026-01-20T14:16:39.986Z] [BOT] 💾 Saved posted_jobs.json: 2937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T14:16:42.987Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-20T14:16:42.988Z] [BOT] ⏭️  Skipping duplicate: JID_787e4aa1 (posted within 7 days)
[2026-01-20T14:16:43.138Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[2026-01-20T14:16:43.305Z] [BOT] ✅ Saved pending queue: 2790 total (2770 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T14:16:43.372Z] [BOT] 📂 Loaded 5432 existing routing entries
[2026-01-20T14:16:43.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-20T14:16:43.442Z] [BOT] Total entries: 5433
   Timestamp: 2026-01-20T14:16:43.422Z
[2026-01-20T14:16:43.442Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 2
   Successful: 2
[2026-01-20T14:16:43.443Z] [BOT] Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-20T14:16:43.443Z] [BOT] 1. #tech-jobs: 1 posts
     2. #JID_98d4f0de: 1 posts
[2026-01-20T14:16:43.443Z] [BOT] [STATS] Channel stats saved
[2026-01-20T14:16:45.460Z] 
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
- [BOT ERROR] ⚠️ No channel configured for job: Senior Product Manager, Ads - skipping
- [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*