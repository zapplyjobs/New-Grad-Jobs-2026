# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T07:22:48.231Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T07:22:24.527Z] ========================================
[2026-01-20T07:22:24.529Z] Discord Bot Execution Log
[2026-01-20T07:22:24.529Z] Environment: GitHub Actions
[2026-01-20T07:22:24.529Z] Node Version: v20.19.6
[2026-01-20T07:22:24.529Z] ========================================
[2026-01-20T07:22:24.529Z] Environment Variables Check:
[2026-01-20T07:22:24.529Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T07:22:24.529Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T07:22:24.530Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T07:22:24.530Z] 
Multi-Channel Configuration:
[2026-01-20T07:22:24.530Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.530Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T07:22:24.531Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T07:22:24.531Z] 
Data Files Check:
[2026-01-20T07:22:24.532Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160054 bytes)
[2026-01-20T07:22:24.543Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1563922 bytes)
[2026-01-20T07:22:24.543Z] 
========================================
[2026-01-20T07:22:24.543Z] Starting Enhanced Discord Bot...
[2026-01-20T07:22:24.543Z] ========================================
[2026-01-20T07:22:25.078Z] [BOT] ✅ Loaded V2 database: 2819 jobs
[2026-01-20T07:22:25.676Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T07:22:25.676Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T07:22:25.676Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T07:22:25.794Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T07:22:25.798Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T07:22:25.798Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T07:22:25.798Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T07:22:25.799Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-20T07:22:25.799Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Mid Market Account Executive @ datadog: new york, new york, usa, denver, colorado, usa
   - Sales Engineer (Customer Success) - Boston @ datadog: boston, massachusetts, usa, denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T07:22:25.800Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T07:22:25.802Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T07:22:25.802Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T07:22:25.803Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T07:22:25.804Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T07:22:25.804Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-20T07:22:25.805Z] [BOT] 📍 [ROUTING] "Mid Market Account Executive" @ datadog
[2026-01-20T07:22:25.805Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:25.809Z] [BOT ERROR] (node:2389) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T07:22:26.044Z] [BOT] ✅ Posted message: Mid Market Account Executive @ datadog in #tech-jobs
[2026-01-20T07:22:26.044Z] [BOT] ✅ Industry: Mid Market Account Executive @ datadog
[2026-01-20T07:22:26.045Z] [BOT] 💾 Added channel posting: Mid Market Account Executive @ datadog → category channel (1 total channels)
[2026-01-20T07:22:26.045Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T07:22:26.047Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T07:22:26.052Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-20T07:22:26.052Z] [BOT] ✅ Archiving complete: 5 archived, 2815 active
[2026-01-20T07:22:26.071Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:27.741Z] [BOT] ✅ Posted message: Mid Market Account Executive @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:22:27.741Z] [BOT] 💾 Added channel posting: Mid Market Account Executive @ datadog → location channel (2 total channels)
[2026-01-20T07:22:27.742Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:22:27.743Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:22:27.759Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:29.261Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
[2026-01-20T07:22:29.261Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T07:22:29.263Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T07:22:29.282Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:29.282Z] [BOT] 💾 Marked as posted: Mid Market Account Executive @ datadog (instance #1)
[2026-01-20T07:22:29.283Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:22:29.284Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:22:29.302Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
[2026-01-20T07:22:29.302Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:29.303Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (Boston)" @ datadog
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:29.577Z] [BOT] ✅ Posted message: Mid-Market Account Executive (Boston) @ datadog in #tech-jobs
  ✅ Industry: Mid-Market Account Executive (Boston) @ datadog
[2026-01-20T07:22:29.578Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive (Boston) @ datadog → category channel (1 total channels)
[2026-01-20T07:22:29.578Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T07:22:29.580Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T07:22:29.598Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:31.099Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (Boston) @ datadog (instance #1)
[2026-01-20T07:22:31.099Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:22:31.101Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:22:31.116Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:31.117Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive (San Francisco)" @ datadog
[2026-01-20T07:22:31.117Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:31.269Z] [BOT] ✅ Posted message: Mid-Market Account Executive (San Francisco) @ datadog in #tech-jobs
  ✅ Industry: Mid-Market Account Executive (San Francisco) @ datadog
[2026-01-20T07:22:31.270Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive (San Francisco) @ datadog → category channel (1 total channels)
[2026-01-20T07:22:31.270Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T07:22:31.272Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T07:22:31.287Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:32.790Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive (San Francisco) @ datadog (instance #1)
[2026-01-20T07:22:32.791Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T07:22:32.794Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T07:22:32.817Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:32.818Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 3 - NYC" @ datadog
[2026-01-20T07:22:32.818Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:33.018Z] [BOT] ✅ Posted message: Premier Support Engineer 3 - NYC @ datadog in #tech-jobs
  ✅ Industry: Premier Support Engineer 3 - NYC @ datadog
[2026-01-20T07:22:33.018Z] [BOT] 💾 Added channel posting: Premier Support Engineer 3 - NYC @ datadog → category channel (1 total channels)
[2026-01-20T07:22:33.019Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T07:22:33.020Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T07:22:33.037Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:34.788Z] [BOT] ✅ Posted message: Premier Support Engineer 3 - NYC @ datadog in #JID_98d4f0de
[2026-01-20T07:22:34.788Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:22:34.788Z] [BOT] 💾 Added channel posting: Premier Support Engineer 3 - NYC @ datadog → location channel (2 total channels)
[2026-01-20T07:22:34.789Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T07:22:34.791Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T07:22:34.811Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:36.313Z] [BOT] 💾 Marked as posted: Premier Support Engineer 3 - NYC @ datadog (instance #1)
[2026-01-20T07:22:36.313Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T07:22:36.315Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-20T07:22:36.333Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:36.333Z] [BOT] 📍 [ROUTING] "Product Marketing Manager (Product Analytics)" @ datadog
   Category: TECH (matched: "analytics")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:36.742Z] [BOT] ✅ Posted message: Product Marketing Manager (Product Analytics) @ datadog in #tech-jobs
[2026-01-20T07:22:36.743Z] [BOT] ✅ Industry: Product Marketing Manager (Product Analytics) @ datadog
[2026-01-20T07:22:36.743Z] [BOT] 💾 Added channel posting: Product Marketing Manager (Product Analytics) @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T07:22:36.745Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T07:22:36.765Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:38.482Z] [BOT] ✅ Posted message: Product Marketing Manager (Product Analytics) @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:22:38.482Z] [BOT] 💾 Added channel posting: Product Marketing Manager (Product Analytics) @ datadog → location channel (2 total channels)
[2026-01-20T07:22:38.482Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T07:22:38.484Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T07:22:38.501Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:40.003Z] [BOT] 💾 Marked as posted: Product Marketing Manager (Product Analytics) @ datadog (instance #1)
[2026-01-20T07:22:40.003Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-20T07:22:40.005Z] [BOT] ✅ No jobs to archive (all 2825 jobs within 7-day window)
[2026-01-20T07:22:40.023Z] [BOT] 💾 Saved posted_jobs.json: 2825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:40.023Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking)" @ datadog
   Category: TECH (default)
[2026-01-20T07:22:40.023Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T07:22:40.321Z] [BOT] ✅ Posted message: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog in #tech-jobs
  ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog
[2026-01-20T07:22:40.322Z] [BOT] 💾 Added channel posting: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog → category channel (1 total channels)
[2026-01-20T07:22:40.322Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-20T07:22:40.324Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-20T07:22:40.340Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:41.842Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Portuguese Speaking) @ datadog (instance #1)
[2026-01-20T07:22:41.842Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-20T07:22:41.843Z] [BOT] ✅ No jobs to archive (all 2827 jobs within 7-day window)
[2026-01-20T07:22:41.859Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:41.859Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-20T07:22:41.861Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-20T07:22:41.878Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:22:44.878Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-20T07:22:44.879Z] [BOT] ⏭️  Skipping duplicate: JID_baa77441 (posted within 7 days)
[2026-01-20T07:22:44.879Z] [BOT] ⏭️  Skipping duplicate: JID_a569c0c1 (posted within 7 days)
[2026-01-20T07:22:44.880Z] [BOT] ⏭️  Skipping duplicate: JID_1fada6ce (posted within 7 days)
[2026-01-20T07:22:44.880Z] [BOT] ⏭️  Skipping duplicate: JID_a75435be (posted within 7 days)
[2026-01-20T07:22:44.880Z] [BOT] ⏭️  Skipping duplicate: JID_46a204a3 (posted within 7 days)
[2026-01-20T07:22:44.880Z] [BOT] ⏭️  Skipping duplicate: JID_932a4860 (posted within 7 days)
[2026-01-20T07:22:44.990Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[2026-01-20T07:22:45.169Z] [BOT] ✅ Saved pending queue: 2797 total (2777 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-20T07:22:45.170Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T07:22:45.231Z] [BOT] 📂 Loaded 5352 existing routing entries
[2026-01-20T07:22:45.304Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 5358
   Timestamp: 2026-01-20T07:22:45.282Z
[2026-01-20T07:22:45.304Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T07:22:45.305Z] [BOT] Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-20T07:22:45.305Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T07:22:45.305Z] [BOT] Total posts: 9
   Channels used: 2
   Top channels:
     1. #tech-jobs: 6 posts
     2. #JID_98d4f0de: 3 posts
[2026-01-20T07:22:45.305Z] [BOT] [STATS] Channel stats saved
[2026-01-20T07:22:47.328Z] 
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
- [BOT ERROR] (node:2389) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*