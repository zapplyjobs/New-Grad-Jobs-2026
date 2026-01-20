# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T11:56:00.379Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T11:55:39.914Z] ========================================
[2026-01-20T11:55:39.916Z] Discord Bot Execution Log
[2026-01-20T11:55:39.916Z] Environment: GitHub Actions
[2026-01-20T11:55:39.916Z] Node Version: v20.19.6
[2026-01-20T11:55:39.916Z] ========================================
[2026-01-20T11:55:39.916Z] Environment Variables Check:
[2026-01-20T11:55:39.916Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T11:55:39.917Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T11:55:39.917Z] 
Multi-Channel Configuration:
[2026-01-20T11:55:39.917Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.917Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.918Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T11:55:39.918Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T11:55:39.918Z] 
Data Files Check:
[2026-01-20T11:55:39.919Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175604 bytes)
[2026-01-20T11:55:39.930Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1614526 bytes)
[2026-01-20T11:55:39.930Z] 
========================================
[2026-01-20T11:55:39.930Z] Starting Enhanced Discord Bot...
[2026-01-20T11:55:39.930Z] ========================================
[2026-01-20T11:55:40.460Z] [BOT] ✅ Loaded V2 database: 2903 jobs
[2026-01-20T11:55:41.035Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T11:55:41.036Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T11:55:41.036Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T11:55:41.150Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T11:55:41.154Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T11:55:41.155Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T11:55:41.155Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T11:55:41.156Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T11:55:41.156Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T11:55:41.158Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T11:55:41.159Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T11:55:41.159Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T11:55:41.159Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T11:55:41.159Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T11:55:41.160Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T11:55:41.160Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T11:55:41.161Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T11:55:41.161Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI (Digital Native Businesses)" @ anthropic
[2026-01-20T11:55:41.161Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T11:55:41.166Z] [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T11:55:41.319Z] [BOT] ✅ Posted message: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic in #ai-jobs
[2026-01-20T11:55:41.319Z] [BOT] ✅ Industry: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic
[2026-01-20T11:55:41.320Z] [BOT] 💾 Added channel posting: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic → category channel (1 total channels)
[2026-01-20T11:55:41.320Z] [BOT] 💾 BEFORE ARCHIVING: 2904 jobs in database
[2026-01-20T11:55:41.323Z] [BOT] ✅ No jobs to archive (all 2904 jobs within 7-day window)
[2026-01-20T11:55:41.344Z] [BOT] 💾 Saved posted_jobs.json: 2904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:42.846Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Applied AI (Digital Native Businesses) @ anthropic (instance #1)
[2026-01-20T11:55:42.846Z] [BOT] 💾 BEFORE ARCHIVING: 2905 jobs in database
[2026-01-20T11:55:42.848Z] [BOT] ✅ No jobs to archive (all 2905 jobs within 7-day window)
[2026-01-20T11:55:42.866Z] [BOT] 💾 Saved posted_jobs.json: 2905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:45.868Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T11:55:45.868Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Data Science" @ figma
[2026-01-20T11:55:45.868Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T11:55:46.057Z] [BOT] ✅ Posted message: Technical Recruiter, Data Science @ figma in #JID_fb739488
[2026-01-20T11:55:46.057Z] [BOT] ✅ Industry: Technical Recruiter, Data Science @ figma
[2026-01-20T11:55:46.058Z] [BOT] 💾 Added channel posting: Technical Recruiter, Data Science @ figma → category channel (1 total channels)
[2026-01-20T11:55:46.058Z] [BOT] 💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-20T11:55:46.060Z] [BOT] ✅ No jobs to archive (all 2906 jobs within 7-day window)
[2026-01-20T11:55:46.081Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:47.583Z] [BOT] 💾 Marked as posted: Technical Recruiter, Data Science @ figma (instance #1)
[2026-01-20T11:55:47.583Z] [BOT] 💾 BEFORE ARCHIVING: 2907 jobs in database
[2026-01-20T11:55:47.585Z] [BOT] ✅ No jobs to archive (all 2907 jobs within 7-day window)
[2026-01-20T11:55:47.603Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:50.604Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-20T11:55:50.604Z] [BOT] 📍 [ROUTING] "Ad Sales Lead" @ duolingo
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T11:55:50.892Z] [BOT] ✅ Posted message: Ad Sales Lead @ duolingo in #tech-jobs
  ✅ Industry: Ad Sales Lead @ duolingo
[2026-01-20T11:55:50.893Z] [BOT] 💾 Added channel posting: Ad Sales Lead @ duolingo → category channel (1 total channels)
[2026-01-20T11:55:50.893Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T11:55:50.895Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T11:55:50.915Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:52.745Z] [BOT] ✅ Posted message: Ad Sales Lead @ duolingo in #JID_98d4f0de
[2026-01-20T11:55:52.745Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T11:55:52.746Z] [BOT] 💾 Added channel posting: Ad Sales Lead @ duolingo → location channel (2 total channels)
[2026-01-20T11:55:52.746Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T11:55:52.748Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T11:55:52.767Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:54.270Z] [BOT] 💾 Marked as posted: Ad Sales Lead @ duolingo (instance #1)
[2026-01-20T11:55:54.270Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-20T11:55:54.272Z] [BOT] ✅ No jobs to archive (all 2909 jobs within 7-day window)
[2026-01-20T11:55:54.290Z] [BOT] 💾 Saved posted_jobs.json: 2909 active jobs
[2026-01-20T11:55:54.291Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:55:57.292Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T11:55:57.293Z] [BOT] ⏭️  Skipping duplicate: JID_176ee686 (posted within 7 days)
[2026-01-20T11:55:57.294Z] [BOT] ⏭️  Skipping duplicate: JID_6841d348 (posted within 7 days)
[2026-01-20T11:55:57.294Z] [BOT] ⏭️  Skipping duplicate: JID_b593142e (posted within 7 days)
[2026-01-20T11:55:57.410Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T11:55:57.579Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-20T11:55:57.579Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T11:55:57.643Z] [BOT] 📂 Loaded 5416 existing routing entries
[2026-01-20T11:55:57.715Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-20T11:55:57.715Z] [BOT] Total entries: 5419
   Timestamp: 2026-01-20T11:55:57.693Z
[2026-01-20T11:55:57.717Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #ai-jobs: 1 posts
     2. #JID_fb739488: 1 posts
     3. #tech-jobs: 1 posts
     4. #JID_98d4f0de: 1 posts
[STATS] Channel stats saved
[2026-01-20T11:55:59.738Z] 
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
- [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*