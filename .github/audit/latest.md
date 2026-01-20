# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T11:45:01.767Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T11:44:48.678Z] ========================================
[2026-01-20T11:44:48.680Z] Discord Bot Execution Log
[2026-01-20T11:44:48.680Z] Environment: GitHub Actions
[2026-01-20T11:44:48.680Z] Node Version: v20.19.6
[2026-01-20T11:44:48.680Z] ========================================
[2026-01-20T11:44:48.680Z] Environment Variables Check:
[2026-01-20T11:44:48.680Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T11:44:48.681Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T11:44:48.681Z] 
Multi-Channel Configuration:
[2026-01-20T11:44:48.681Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.681Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.682Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T11:44:48.682Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T11:44:48.682Z] 
Data Files Check:
[2026-01-20T11:44:48.683Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148872 bytes)
[2026-01-20T11:44:48.693Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1612753 bytes)
[2026-01-20T11:44:48.693Z] 
========================================
[2026-01-20T11:44:48.693Z] Starting Enhanced Discord Bot...
[2026-01-20T11:44:48.693Z] ========================================
[2026-01-20T11:44:49.217Z] [BOT] ✅ Loaded V2 database: 2900 jobs
[2026-01-20T11:44:50.133Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T11:44:50.134Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T11:44:50.134Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T11:44:50.248Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T11:44:50.251Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T11:44:50.252Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T11:44:50.252Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T11:44:50.253Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T11:44:50.253Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T11:44:50.255Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T11:44:50.256Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T11:44:50.256Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T11:44:50.257Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T11:44:50.257Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T11:44:50.257Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T11:44:50.258Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T11:44:50.258Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T11:44:50.259Z] [BOT] 📍 [ROUTING] "Motion Design Animator, Thrive Intern" @ duolingo
[2026-01-20T11:44:50.259Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:44:50.263Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T11:44:50.427Z] [BOT] ✅ Posted message: Motion Design Animator, Thrive Intern @ duolingo in #tech-jobs
[2026-01-20T11:44:50.427Z] [BOT] ✅ Industry: Motion Design Animator, Thrive Intern @ duolingo
[2026-01-20T11:44:50.428Z] [BOT] 💾 Added channel posting: Motion Design Animator, Thrive Intern @ duolingo → category channel (1 total channels)
[2026-01-20T11:44:50.428Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-20T11:44:50.431Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T11:44:50.435Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-20T11:44:50.436Z] [BOT] ✅ Archiving complete: 3 archived, 2898 active
[2026-01-20T11:44:50.466Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
[2026-01-20T11:44:50.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:51.969Z] [BOT] 💾 Marked as posted: Motion Design Animator, Thrive Intern @ duolingo (instance #1)
[2026-01-20T11:44:51.969Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-20T11:44:51.971Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-20T11:44:51.987Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:51.987Z] [BOT] 📍 [ROUTING] "Illustrator, Thrive Intern" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:44:52.174Z] [BOT] ✅ Posted message: Illustrator, Thrive Intern @ duolingo in #tech-jobs
[2026-01-20T11:44:52.174Z] [BOT] ✅ Industry: Illustrator, Thrive Intern @ duolingo
[2026-01-20T11:44:52.175Z] [BOT] 💾 Added channel posting: Illustrator, Thrive Intern @ duolingo → category channel (1 total channels)
[2026-01-20T11:44:52.175Z] [BOT] 💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-20T11:44:52.177Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-20T11:44:52.197Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:53.699Z] [BOT] 💾 Marked as posted: Illustrator, Thrive Intern @ duolingo (instance #1)
[2026-01-20T11:44:53.700Z] [BOT] 💾 BEFORE ARCHIVING: 2901 jobs in database
[2026-01-20T11:44:53.701Z] [BOT] ✅ No jobs to archive (all 2901 jobs within 7-day window)
[2026-01-20T11:44:53.721Z] [BOT] 💾 Saved posted_jobs.json: 2901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:53.721Z] [BOT] 📍 [ROUTING] "Group Product Marketing Manager, Developer Commerce Solutions" @ discord
[2026-01-20T11:44:53.721Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:44:53.881Z] [BOT] ✅ Posted message: Group Product Marketing Manager, Developer Commerce Solutions @ discord in #tech-jobs
[2026-01-20T11:44:53.881Z] [BOT] ✅ Industry: Group Product Marketing Manager, Developer Commerce Solutions @ discord
[2026-01-20T11:44:53.882Z] [BOT] 💾 Added channel posting: Group Product Marketing Manager, Developer Commerce Solutions @ discord → category channel (1 total channels)
[2026-01-20T11:44:53.882Z] [BOT] 💾 BEFORE ARCHIVING: 2902 jobs in database
[2026-01-20T11:44:53.884Z] [BOT] ✅ No jobs to archive (all 2902 jobs within 7-day window)
[2026-01-20T11:44:53.907Z] [BOT] 💾 Saved posted_jobs.json: 2902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:55.409Z] [BOT] 💾 Marked as posted: Group Product Marketing Manager, Developer Commerce Solutions @ discord (instance #1)
[2026-01-20T11:44:55.409Z] [BOT] 💾 BEFORE ARCHIVING: 2903 jobs in database
[2026-01-20T11:44:55.411Z] [BOT] ✅ No jobs to archive (all 2903 jobs within 7-day window)
[2026-01-20T11:44:55.427Z] [BOT] 💾 Saved posted_jobs.json: 2903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:44:58.427Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T11:44:58.429Z] [BOT] ⏭️  Skipping duplicate: JID_cb60aed1 (posted within 7 days)
[2026-01-20T11:44:58.429Z] [BOT] ⏭️  Skipping duplicate: JID_97e87354 (posted within 7 days)
[2026-01-20T11:44:58.429Z] [BOT] ⏭️  Skipping duplicate: JID_42aa0817 (posted within 7 days)
[2026-01-20T11:44:58.552Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[2026-01-20T11:44:58.718Z] [BOT] ✅ Saved pending queue: 2797 total (2777 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-20T11:44:58.719Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T11:44:58.780Z] [BOT] 📂 Loaded 5413 existing routing entries
[2026-01-20T11:44:58.854Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5416
   Timestamp: 2026-01-20T11:44:58.831Z
[2026-01-20T11:44:58.854Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T11:44:58.854Z] [BOT] Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
[2026-01-20T11:44:58.855Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 1
   Top channels:
     1. #tech-jobs: 3 posts
[STATS] Channel stats saved
[2026-01-20T11:45:00.880Z] 
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
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*