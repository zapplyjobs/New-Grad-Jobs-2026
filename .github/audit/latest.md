# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T13:26:00.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T13:25:44.565Z] ========================================
[2026-01-20T13:25:44.568Z] Discord Bot Execution Log
[2026-01-20T13:25:44.568Z] Environment: GitHub Actions
[2026-01-20T13:25:44.568Z] Node Version: v20.19.6
[2026-01-20T13:25:44.568Z] ========================================
[2026-01-20T13:25:44.568Z] Environment Variables Check:
[2026-01-20T13:25:44.568Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T13:25:44.568Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.568Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T13:25:44.568Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T13:25:44.568Z] 
Multi-Channel Configuration:
[2026-01-20T13:25:44.568Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T13:25:44.569Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T13:25:44.569Z] 
Data Files Check:
[2026-01-20T13:25:44.571Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151417 bytes)
[2026-01-20T13:25:44.583Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1629274 bytes)
[2026-01-20T13:25:44.583Z] 
========================================
[2026-01-20T13:25:44.583Z] Starting Enhanced Discord Bot...
[2026-01-20T13:25:44.583Z] ========================================
[2026-01-20T13:25:45.122Z] [BOT] ✅ Loaded V2 database: 2927 jobs
[2026-01-20T13:25:45.703Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T13:25:45.704Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T13:25:45.704Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T13:25:45.820Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T13:25:45.824Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T13:25:45.825Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T13:25:45.825Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T13:25:45.826Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T13:25:45.826Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T13:25:45.826Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T13:25:45.829Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T13:25:45.829Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T13:25:45.830Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T13:25:45.830Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T13:25:45.830Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T13:25:45.830Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T13:25:45.831Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T13:25:45.831Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager, Duolingo Chess - skipping
[2026-01-20T13:25:45.832Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T13:25:45.832Z] [BOT] 📍 [ROUTING] "Influencer Marketing, Intern" @ duolingo
   Category: TECH (default)
[2026-01-20T13:25:45.832Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T13:25:45.836Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T13:25:46.060Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #tech-jobs
[2026-01-20T13:25:46.060Z] [BOT] ✅ Industry: Influencer Marketing, Intern @ duolingo
[2026-01-20T13:25:46.061Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → category channel (1 total channels)
[2026-01-20T13:25:46.061Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T13:25:46.063Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-20T13:25:46.082Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:48.793Z] [BOT] ✅ Posted message: Influencer Marketing, Intern @ duolingo in #JID_98d4f0de
[2026-01-20T13:25:48.793Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T13:25:48.793Z] [BOT] 💾 Added channel posting: Influencer Marketing, Intern @ duolingo → location channel (2 total channels)
[2026-01-20T13:25:48.793Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T13:25:48.796Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-20T13:25:48.813Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:50.315Z] [BOT] 💾 Marked as posted: Influencer Marketing, Intern @ duolingo (instance #1)
[2026-01-20T13:25:50.316Z] [BOT] 💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T13:25:50.317Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T13:25:50.339Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:50.339Z] [BOT] 📍 [ROUTING] "Senior AI Engineering Manager" @ duolingo
   Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-20T13:25:50.575Z] [BOT] ✅ Posted message: Senior AI Engineering Manager @ duolingo in #tech-jobs
[2026-01-20T13:25:50.575Z] [BOT] ✅ Industry: Senior AI Engineering Manager @ duolingo
[2026-01-20T13:25:50.576Z] [BOT] 💾 Added channel posting: Senior AI Engineering Manager @ duolingo → category channel (1 total channels)
[2026-01-20T13:25:50.576Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-20T13:25:50.578Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-20T13:25:50.596Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
[2026-01-20T13:25:50.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:52.387Z] [BOT] ✅ Posted message: Senior AI Engineering Manager @ duolingo in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T13:25:52.388Z] [BOT] 💾 Added channel posting: Senior AI Engineering Manager @ duolingo → location channel (2 total channels)
[2026-01-20T13:25:52.388Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-20T13:25:52.390Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-20T13:25:52.409Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:53.911Z] [BOT] 💾 Marked as posted: Senior AI Engineering Manager @ duolingo (instance #1)
[2026-01-20T13:25:53.912Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-20T13:25:53.913Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-20T13:25:53.929Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T13:25:56.931Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-20T13:25:56.932Z] [BOT] ⏭️  Skipping duplicate: JID_e0290d68 (posted within 7 days)
[2026-01-20T13:25:56.932Z] [BOT] ⏭️  Skipping duplicate: JID_b2e8be7b (posted within 7 days)
[2026-01-20T13:25:57.058Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[2026-01-20T13:25:57.240Z] [BOT] ✅ Saved pending queue: 2797 total (2777 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-20T13:25:57.241Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T13:25:57.303Z] [BOT] 📂 Loaded 5428 existing routing entries
[2026-01-20T13:25:57.376Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 5430
[2026-01-20T13:25:57.377Z] [BOT] Timestamp: 2026-01-20T13:25:57.354Z
[2026-01-20T13:25:57.377Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T13:25:57.377Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-20T13:25:57.377Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T13:25:57.377Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #tech-jobs: 2 posts
[2026-01-20T13:25:57.378Z] [BOT] 2. #JID_98d4f0de: 2 posts
[2026-01-20T13:25:57.378Z] [BOT] [STATS] Channel stats saved
[2026-01-20T13:25:59.404Z] 
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
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*