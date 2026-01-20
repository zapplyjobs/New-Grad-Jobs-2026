# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T11:17:33.069Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T11:17:16.482Z] ========================================
[2026-01-20T11:17:16.484Z] Discord Bot Execution Log
[2026-01-20T11:17:16.484Z] Environment: GitHub Actions
[2026-01-20T11:17:16.484Z] Node Version: v20.19.6
[2026-01-20T11:17:16.484Z] ========================================
[2026-01-20T11:17:16.484Z] Environment Variables Check:
[2026-01-20T11:17:16.484Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T11:17:16.484Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.484Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T11:17:16.485Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T11:17:16.485Z] 
Multi-Channel Configuration:
[2026-01-20T11:17:16.485Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T11:17:16.485Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T11:17:16.485Z] 
Data Files Check:
[2026-01-20T11:17:16.487Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177340 bytes)
[2026-01-20T11:17:16.498Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1605997 bytes)
[2026-01-20T11:17:16.499Z] 
========================================
[2026-01-20T11:17:16.499Z] Starting Enhanced Discord Bot...
[2026-01-20T11:17:16.499Z] ========================================
[2026-01-20T11:17:16.965Z] [BOT] ✅ Loaded V2 database: 2888 jobs
[2026-01-20T11:17:17.901Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T11:17:17.902Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T11:17:17.902Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T11:17:18.059Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T11:17:18.062Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T11:17:18.062Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T11:17:18.062Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T11:17:18.063Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-20T11:17:18.063Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T11:17:18.065Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T11:17:18.066Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T11:17:18.066Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T11:17:18.066Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T11:17:18.067Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T11:17:18.067Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T11:17:18.067Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T11:17:18.068Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T11:17:18.068Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Phoenix - Corporate)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-20T11:17:18.069Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T11:17:18.073Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T11:17:18.371Z] [BOT] ✅ Posted message: Enterprise Account Executive (Phoenix - Corporate) @ verkada in #finance-jobs
[2026-01-20T11:17:18.371Z] [BOT] ✅ Industry: Enterprise Account Executive (Phoenix - Corporate) @ verkada
[2026-01-20T11:17:18.372Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Phoenix - Corporate) @ verkada → category channel (1 total channels)
[2026-01-20T11:17:18.372Z] [BOT] 💾 BEFORE ARCHIVING: 2889 jobs in database
[2026-01-20T11:17:18.375Z] [BOT] ✅ No jobs to archive (all 2889 jobs within 7-day window)
[2026-01-20T11:17:18.397Z] [BOT] 💾 Saved posted_jobs.json: 2889 active jobs
[2026-01-20T11:17:18.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:19.899Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Phoenix - Corporate) @ verkada (instance #1)
[2026-01-20T11:17:19.900Z] [BOT] 💾 BEFORE ARCHIVING: 2890 jobs in database
[2026-01-20T11:17:19.902Z] [BOT] ✅ No jobs to archive (all 2890 jobs within 7-day window)
[2026-01-20T11:17:19.919Z] [BOT] 💾 Saved posted_jobs.json: 2890 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:19.920Z] [BOT] 📍 [ROUTING] "Head of Infrastructure Accounting " @ anthropic
[2026-01-20T11:17:19.920Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T11:17:20.142Z] [BOT] ✅ Posted message: Head of Infrastructure Accounting  @ anthropic in #finance-jobs
[2026-01-20T11:17:20.143Z] [BOT] ✅ Industry: Head of Infrastructure Accounting  @ anthropic
[2026-01-20T11:17:20.143Z] [BOT] 💾 Added channel posting: Head of Infrastructure Accounting  @ anthropic → category channel (1 total channels)
[2026-01-20T11:17:20.143Z] [BOT] 💾 BEFORE ARCHIVING: 2891 jobs in database
[2026-01-20T11:17:20.146Z] [BOT] ✅ No jobs to archive (all 2891 jobs within 7-day window)
[2026-01-20T11:17:20.166Z] [BOT] 💾 Saved posted_jobs.json: 2891 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:21.666Z] [BOT] 💾 Marked as posted: Head of Infrastructure Accounting  @ anthropic (instance #1)
[2026-01-20T11:17:21.666Z] [BOT] 💾 BEFORE ARCHIVING: 2892 jobs in database
[2026-01-20T11:17:21.668Z] [BOT] ✅ No jobs to archive (all 2892 jobs within 7-day window)
[2026-01-20T11:17:21.686Z] [BOT] 💾 Saved posted_jobs.json: 2892 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:24.687Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T11:17:24.687Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI (Industries)" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-20T11:17:24.688Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T11:17:24.938Z] [BOT] ✅ Posted message: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic in #ai-jobs
  ✅ Industry: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic
[2026-01-20T11:17:24.938Z] [BOT] 💾 Added channel posting: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic → category channel (1 total channels)
[2026-01-20T11:17:24.939Z] [BOT] 💾 BEFORE ARCHIVING: 2893 jobs in database
[2026-01-20T11:17:24.941Z] [BOT] ✅ No jobs to archive (all 2893 jobs within 7-day window)
[2026-01-20T11:17:24.960Z] [BOT] 💾 Saved posted_jobs.json: 2893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:26.461Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Applied AI (Industries) @ anthropic (instance #1)
[2026-01-20T11:17:26.462Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-20T11:17:26.463Z] [BOT] ✅ No jobs to archive (all 2894 jobs within 7-day window)
[2026-01-20T11:17:26.480Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:17:29.481Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T11:17:29.482Z] [BOT] ⏭️  Skipping duplicate: JID_1fba0dfd (posted within 7 days)
[2026-01-20T11:17:29.482Z] [BOT] ⏭️  Skipping duplicate: JID_fd362e00 (posted within 7 days)
[2026-01-20T11:17:29.482Z] [BOT] ⏭️  Skipping duplicate: JID_58b7e124 (posted within 7 days)
[2026-01-20T11:17:29.635Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T11:17:29.803Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T11:17:29.874Z] [BOT] 📂 Loaded 5407 existing routing entries
[2026-01-20T11:17:29.943Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5410
   Timestamp: 2026-01-20T11:17:29.925Z
[2026-01-20T11:17:29.945Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
     1. #finance-jobs: 2 posts
     2. #ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T11:17:31.964Z] 
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
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*