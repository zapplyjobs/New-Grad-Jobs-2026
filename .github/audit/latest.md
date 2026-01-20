# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T11:02:37.308Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T11:02:19.341Z] ========================================
[2026-01-20T11:02:19.343Z] Discord Bot Execution Log
[2026-01-20T11:02:19.343Z] Environment: GitHub Actions
[2026-01-20T11:02:19.343Z] Node Version: v20.19.6
[2026-01-20T11:02:19.343Z] ========================================
[2026-01-20T11:02:19.343Z] Environment Variables Check:
[2026-01-20T11:02:19.344Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T11:02:19.344Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T11:02:19.344Z] 
Multi-Channel Configuration:
[2026-01-20T11:02:19.344Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.344Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.345Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.345Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.345Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.345Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T11:02:19.345Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T11:02:19.345Z] 
Data Files Check:
[2026-01-20T11:02:19.346Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167349 bytes)
[2026-01-20T11:02:19.357Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1602615 bytes)
[2026-01-20T11:02:19.357Z] 
========================================
[2026-01-20T11:02:19.357Z] Starting Enhanced Discord Bot...
[2026-01-20T11:02:19.357Z] ========================================
[2026-01-20T11:02:19.921Z] [BOT] ✅ Loaded V2 database: 2882 jobs
[2026-01-20T11:02:20.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T11:02:20.666Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T11:02:20.666Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T11:02:20.780Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T11:02:20.784Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T11:02:20.784Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T11:02:20.785Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T11:02:20.786Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T11:02:20.786Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T11:02:20.788Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T11:02:20.789Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T11:02:20.789Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T11:02:20.789Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T11:02:20.789Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T11:02:20.790Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T11:02:20.790Z] [BOT ERROR] ⚠️ No channel configured for job: Designer Advocate - Figma Weave (New York, United States) - skipping
[2026-01-20T11:02:20.791Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T11:02:20.791Z] [BOT] 📍 [ROUTING] "Staff Economist" @ brex
[2026-01-20T11:02:20.791Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T11:02:20.795Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T11:02:21.071Z] [BOT] ✅ Posted message: Staff Economist @ brex in #finance-jobs
  ✅ Industry: Staff Economist @ brex
[2026-01-20T11:02:21.072Z] [BOT] 💾 Added channel posting: Staff Economist @ brex → category channel (1 total channels)
[2026-01-20T11:02:21.072Z] [BOT] 💾 BEFORE ARCHIVING: 2883 jobs in database
[2026-01-20T11:02:21.074Z] [BOT] ✅ No jobs to archive (all 2883 jobs within 7-day window)
[2026-01-20T11:02:21.100Z] [BOT] 💾 Saved posted_jobs.json: 2883 active jobs
[2026-01-20T11:02:21.100Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:22.813Z] [BOT] ✅ Posted message: Staff Economist @ brex in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T11:02:22.813Z] [BOT] 💾 Added channel posting: Staff Economist @ brex → location channel (2 total channels)
[2026-01-20T11:02:22.814Z] [BOT] 💾 BEFORE ARCHIVING: 2883 jobs in database
[2026-01-20T11:02:22.816Z] [BOT] ✅ No jobs to archive (all 2883 jobs within 7-day window)
[2026-01-20T11:02:22.832Z] [BOT] 💾 Saved posted_jobs.json: 2883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:24.332Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-20T11:02:24.332Z] [BOT] 💾 BEFORE ARCHIVING: 2884 jobs in database
[2026-01-20T11:02:24.334Z] [BOT] ✅ No jobs to archive (all 2884 jobs within 7-day window)
[2026-01-20T11:02:24.354Z] [BOT] 💾 Saved posted_jobs.json: 2884 active jobs
[2026-01-20T11:02:24.354Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:27.355Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T11:02:27.355Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-20T11:02:27.356Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T11:02:27.575Z] [BOT] ✅ Posted message: Senior Engineering Manager, Activation @ brex in #ai-jobs
[2026-01-20T11:02:27.575Z] [BOT] ✅ Industry: Senior Engineering Manager, Activation @ brex
[2026-01-20T11:02:27.576Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Activation @ brex → category channel (1 total channels)
[2026-01-20T11:02:27.576Z] [BOT] 💾 BEFORE ARCHIVING: 2885 jobs in database
[2026-01-20T11:02:27.578Z] [BOT] ✅ No jobs to archive (all 2885 jobs within 7-day window)
[2026-01-20T11:02:27.597Z] [BOT] 💾 Saved posted_jobs.json: 2885 active jobs
[2026-01-20T11:02:27.597Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:29.098Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-20T11:02:29.099Z] [BOT] 💾 BEFORE ARCHIVING: 2886 jobs in database
[2026-01-20T11:02:29.100Z] [BOT] ✅ No jobs to archive (all 2886 jobs within 7-day window)
[2026-01-20T11:02:29.120Z] [BOT] 💾 Saved posted_jobs.json: 2886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:29.120Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ coinbase
[2026-01-20T11:02:29.120Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T11:02:29.302Z] [BOT] ✅ Posted message: Software Engineer Intern @ coinbase in #ai-jobs
[2026-01-20T11:02:29.302Z] [BOT] ✅ Industry: Software Engineer Intern @ coinbase
[2026-01-20T11:02:29.303Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ coinbase → category channel (1 total channels)
[2026-01-20T11:02:29.303Z] [BOT] 💾 BEFORE ARCHIVING: 2887 jobs in database
[2026-01-20T11:02:29.305Z] [BOT] ✅ No jobs to archive (all 2887 jobs within 7-day window)
[2026-01-20T11:02:29.323Z] [BOT] 💾 Saved posted_jobs.json: 2887 active jobs
[2026-01-20T11:02:29.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:30.824Z] [BOT] 💾 Marked as posted: Software Engineer Intern @ coinbase (instance #1)
[2026-01-20T11:02:30.824Z] [BOT] 💾 BEFORE ARCHIVING: 2888 jobs in database
[2026-01-20T11:02:30.826Z] [BOT] ✅ No jobs to archive (all 2888 jobs within 7-day window)
[2026-01-20T11:02:30.842Z] [BOT] 💾 Saved posted_jobs.json: 2888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T11:02:33.842Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-20T11:02:33.844Z] [BOT] ⏭️  Skipping duplicate: JID_8a8316ad (posted within 7 days)
[2026-01-20T11:02:33.844Z] [BOT] ⏭️  Skipping duplicate: JID_f257189a (posted within 7 days)
[2026-01-20T11:02:33.844Z] [BOT] ⏭️  Skipping duplicate: JID_a45c2b21 (posted within 7 days)
[2026-01-20T11:02:33.958Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-20T11:02:34.130Z] [BOT] ✅ Saved pending queue: 2796 total (2776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-20T11:02:34.130Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T11:02:34.190Z] [BOT] 📂 Loaded 5404 existing routing entries
[2026-01-20T11:02:34.262Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 5407
   Timestamp: 2026-01-20T11:02:34.240Z
[2026-01-20T11:02:34.262Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T11:02:34.262Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-20T11:02:34.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-20T11:02:34.263Z] [BOT] 1. #ai-jobs: 2 posts
     2. #finance-jobs: 1 posts
     3. #JID_98d4f0de: 1 posts
[2026-01-20T11:02:34.263Z] [BOT] [STATS] Channel stats saved
[2026-01-20T11:02:36.285Z] 
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
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*