# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T09:17:18.766Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T09:16:57.452Z] ========================================
[2026-01-20T09:16:57.454Z] Discord Bot Execution Log
[2026-01-20T09:16:57.454Z] Environment: GitHub Actions
[2026-01-20T09:16:57.455Z] Node Version: v20.19.6
[2026-01-20T09:16:57.455Z] ========================================
[2026-01-20T09:16:57.455Z] Environment Variables Check:
[2026-01-20T09:16:57.455Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T09:16:57.455Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.455Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T09:16:57.455Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T09:16:57.455Z] 
Multi-Channel Configuration:
[2026-01-20T09:16:57.455Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.455Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T09:16:57.456Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T09:16:57.456Z] 
Data Files Check:
[2026-01-20T09:16:57.457Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172719 bytes)
[2026-01-20T09:16:57.468Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1569810 bytes)
[2026-01-20T09:16:57.468Z] 
========================================
[2026-01-20T09:16:57.468Z] Starting Enhanced Discord Bot...
[2026-01-20T09:16:57.468Z] ========================================
[2026-01-20T09:16:57.997Z] [BOT] ✅ Loaded V2 database: 2825 jobs
[2026-01-20T09:16:58.630Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T09:16:58.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T09:16:58.631Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T09:16:58.750Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T09:16:58.753Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T09:16:58.753Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T09:16:58.754Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T09:16:58.755Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T09:16:58.755Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T09:16:58.757Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T09:16:58.758Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T09:16:58.758Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T09:16:58.758Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T09:16:58.758Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T09:16:58.759Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T09:16:58.760Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T09:16:58.760Z] [BOT] 📍 [ROUTING] "Senior Tax Accountant - NYC" @ datadog
[2026-01-20T09:16:58.760Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T09:16:58.764Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T09:16:59.049Z] [BOT] ✅ Posted message: Senior Tax Accountant - NYC @ datadog in #finance-jobs
  ✅ Industry: Senior Tax Accountant - NYC @ datadog
[2026-01-20T09:16:59.050Z] [BOT] 💾 Added channel posting: Senior Tax Accountant - NYC @ datadog → category channel (1 total channels)
[2026-01-20T09:16:59.051Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-20T09:16:59.053Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-20T09:16:59.076Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:00.896Z] [BOT] ✅ Posted message: Senior Tax Accountant - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T09:17:00.897Z] [BOT] 💾 Added channel posting: Senior Tax Accountant - NYC @ datadog → location channel (2 total channels)
[2026-01-20T09:17:00.897Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-20T09:17:00.899Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-20T09:17:00.915Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:02.416Z] [BOT] 💾 Marked as posted: Senior Tax Accountant - NYC @ datadog (instance #1)
[2026-01-20T09:17:02.416Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-20T09:17:02.418Z] [BOT] ✅ No jobs to archive (all 2827 jobs within 7-day window)
[2026-01-20T09:17:02.435Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:02.435Z] [BOT] 📍 [ROUTING] "Services Architect 3 - New York" @ datadog
[2026-01-20T09:17:02.435Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-20T09:17:02.713Z] [BOT] ✅ Posted message: Services Architect 3 - New York @ datadog in #finance-jobs
[2026-01-20T09:17:02.713Z] [BOT] ✅ Industry: Services Architect 3 - New York @ datadog
[2026-01-20T09:17:02.713Z] [BOT] 💾 Added channel posting: Services Architect 3 - New York @ datadog → category channel (1 total channels)
[2026-01-20T09:17:02.714Z] [BOT] 💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-20T09:17:02.715Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-20T09:17:02.732Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:04.370Z] [BOT] ✅ Posted message: Services Architect 3 - New York @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T09:17:04.370Z] [BOT] 💾 Added channel posting: Services Architect 3 - New York @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-20T09:17:04.373Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-20T09:17:04.390Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:05.892Z] [BOT] 💾 Marked as posted: Services Architect 3 - New York @ datadog (instance #1)
[2026-01-20T09:17:05.892Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-20T09:17:05.894Z] [BOT] ✅ No jobs to archive (all 2829 jobs within 7-day window)
[2026-01-20T09:17:05.910Z] [BOT] 💾 Saved posted_jobs.json: 2829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:08.911Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T09:17:08.912Z] [BOT] 📍 [ROUTING] "Senior Marketing Operations Manager, Product-Led Growth" @ brex
[2026-01-20T09:17:08.912Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T09:17:09.237Z] [BOT] ✅ Posted message: Senior Marketing Operations Manager, Product-Led Growth @ brex in #tech-jobs
  ✅ Industry: Senior Marketing Operations Manager, Product-Led Growth @ brex
[2026-01-20T09:17:09.238Z] [BOT] 💾 Added channel posting: Senior Marketing Operations Manager, Product-Led Growth @ brex → category channel (1 total channels)
[2026-01-20T09:17:09.238Z] [BOT] 💾 BEFORE ARCHIVING: 2830 jobs in database
[2026-01-20T09:17:09.240Z] [BOT] ✅ No jobs to archive (all 2830 jobs within 7-day window)
[2026-01-20T09:17:09.259Z] [BOT] 💾 Saved posted_jobs.json: 2830 active jobs
[2026-01-20T09:17:09.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:10.760Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, Product-Led Growth @ brex (instance #1)
[2026-01-20T09:17:10.761Z] [BOT] 💾 BEFORE ARCHIVING: 2831 jobs in database
[2026-01-20T09:17:10.762Z] [BOT] ✅ No jobs to archive (all 2831 jobs within 7-day window)
[2026-01-20T09:17:10.781Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:10.781Z] [BOT] 📍 [ROUTING] "Senior Marketing Operations Manager, B2B Sales" @ brex
[2026-01-20T09:17:10.782Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T09:17:11.109Z] [BOT] ✅ Posted message: Senior Marketing Operations Manager, B2B Sales @ brex in #tech-jobs
  ✅ Industry: Senior Marketing Operations Manager, B2B Sales @ brex
[2026-01-20T09:17:11.110Z] [BOT] 💾 Added channel posting: Senior Marketing Operations Manager, B2B Sales @ brex → category channel (1 total channels)
[2026-01-20T09:17:11.110Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-20T09:17:11.112Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-20T09:17:11.128Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:12.632Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, B2B Sales @ brex (instance #1)
[2026-01-20T09:17:12.632Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-20T09:17:12.634Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-20T09:17:12.652Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T09:17:15.653Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T09:17:15.655Z] [BOT] ⏭️  Skipping duplicate: JID_0f406816 (posted within 7 days)
[2026-01-20T09:17:15.655Z] [BOT] ⏭️  Skipping duplicate: JID_bedfae36 (posted within 7 days)
[2026-01-20T09:17:15.655Z] [BOT] ⏭️  Skipping duplicate: JID_2646e908 (posted within 7 days)
[2026-01-20T09:17:15.655Z] [BOT] ⏭️  Skipping duplicate: JID_015c9ca8 (posted within 7 days)
[2026-01-20T09:17:15.768Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[2026-01-20T09:17:15.938Z] [BOT] ✅ Saved pending queue: 2794 total (2774 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-20T09:17:15.938Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T09:17:16.000Z] [BOT] 📂 Loaded 5380 existing routing entries
[2026-01-20T09:17:16.071Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-20T09:17:16.071Z] [BOT] Total entries: 5384
   Timestamp: 2026-01-20T09:17:16.049Z
[2026-01-20T09:17:16.071Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T09:17:16.071Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-20T09:17:16.072Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
     1. #finance-jobs: 2 posts
     2. #JID_98d4f0de: 2 posts
[2026-01-20T09:17:16.072Z] [BOT] 3. #tech-jobs: 2 posts
[2026-01-20T09:17:16.072Z] [BOT] [STATS] Channel stats saved
[2026-01-20T09:17:18.094Z] 
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
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*