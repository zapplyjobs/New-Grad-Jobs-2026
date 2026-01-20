# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T10:14:01.673Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T10:13:34.692Z] ========================================
[2026-01-20T10:13:34.694Z] Discord Bot Execution Log
[2026-01-20T10:13:34.694Z] Environment: GitHub Actions
[2026-01-20T10:13:34.695Z] Node Version: v20.19.6
[2026-01-20T10:13:34.695Z] ========================================
[2026-01-20T10:13:34.695Z] Environment Variables Check:
[2026-01-20T10:13:34.695Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T10:13:34.695Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.695Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T10:13:34.695Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T10:13:34.695Z] 
Multi-Channel Configuration:
[2026-01-20T10:13:34.695Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.695Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T10:13:34.696Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T10:13:34.696Z] 
Data Files Check:
[2026-01-20T10:13:34.697Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166927 bytes)
[2026-01-20T10:13:34.708Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1583546 bytes)
[2026-01-20T10:13:34.709Z] 
========================================
[2026-01-20T10:13:34.709Z] Starting Enhanced Discord Bot...
[2026-01-20T10:13:34.709Z] ========================================
[2026-01-20T10:13:35.248Z] [BOT] ✅ Loaded V2 database: 2849 jobs
[2026-01-20T10:13:36.164Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T10:13:36.165Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T10:13:36.165Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T10:13:36.298Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T10:13:36.302Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T10:13:36.302Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T10:13:36.303Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T10:13:36.303Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-20T10:13:36.304Z] [BOT] (8 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, new york, new york, usa, chicago, illinois, usa, san francisco, california, usa, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T10:13:36.304Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T10:13:36.306Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T10:13:36.307Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T10:13:36.307Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T10:13:36.307Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T10:13:36.308Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T10:13:36.308Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T10:13:36.309Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T10:13:36.309Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors, v0" @ vercel
[2026-01-20T10:13:36.310Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:13:36.315Z] [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T10:13:36.683Z] [BOT] ✅ Posted message: Vercel Development Representative, Majors, v0 @ vercel in #tech-jobs
  ✅ Industry: Vercel Development Representative, Majors, v0 @ vercel
[2026-01-20T10:13:36.684Z] [BOT] 💾 Added channel posting: Vercel Development Representative, Majors, v0 @ vercel → category channel (1 total channels)
[2026-01-20T10:13:36.684Z] [BOT] 💾 BEFORE ARCHIVING: 2850 jobs in database
[2026-01-20T10:13:36.687Z] [BOT] ✅ No jobs to archive (all 2850 jobs within 7-day window)
[2026-01-20T10:13:36.709Z] [BOT] 💾 Saved posted_jobs.json: 2850 active jobs
[2026-01-20T10:13:36.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:38.211Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors, v0 @ vercel (instance #1)
[2026-01-20T10:13:38.211Z] [BOT] 💾 BEFORE ARCHIVING: 2851 jobs in database
[2026-01-20T10:13:38.213Z] [BOT] ✅ No jobs to archive (all 2851 jobs within 7-day window)
[2026-01-20T10:13:38.231Z] [BOT] 💾 Saved posted_jobs.json: 2851 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:38.231Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Visual Systems" @ datadog
[2026-01-20T10:13:38.231Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:13:38.453Z] [BOT] ✅ Posted message: Staff Product Designer, Visual Systems @ datadog in #tech-jobs
[2026-01-20T10:13:38.453Z] [BOT] ✅ Industry: Staff Product Designer, Visual Systems @ datadog
[2026-01-20T10:13:38.453Z] [BOT] 💾 Added channel posting: Staff Product Designer, Visual Systems @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-20T10:13:38.456Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-20T10:13:38.475Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:40.388Z] [BOT] ✅ Posted message: Staff Product Designer, Visual Systems @ datadog in #JID_98d4f0de
[2026-01-20T10:13:40.388Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T10:13:40.389Z] [BOT] 💾 Added channel posting: Staff Product Designer, Visual Systems @ datadog → location channel (2 total channels)
[2026-01-20T10:13:40.389Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-20T10:13:40.391Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-20T10:13:40.408Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:41.909Z] [BOT] 💾 Marked as posted: Staff Product Designer, Visual Systems @ datadog (instance #1)
[2026-01-20T10:13:41.910Z] [BOT] 💾 BEFORE ARCHIVING: 2853 jobs in database
[2026-01-20T10:13:41.911Z] [BOT] ✅ No jobs to archive (all 2853 jobs within 7-day window)
[2026-01-20T10:13:41.930Z] [BOT] 💾 Saved posted_jobs.json: 2853 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:44.931Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T10:13:44.932Z] [BOT] 📍 [ROUTING] "Staff Accountant II - NYC" @ datadog
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T10:13:45.157Z] [BOT] ✅ Posted message: Staff Accountant II - NYC @ datadog in #finance-jobs
[2026-01-20T10:13:45.158Z] [BOT] ✅ Industry: Staff Accountant II - NYC @ datadog
[2026-01-20T10:13:45.158Z] [BOT] 💾 Added channel posting: Staff Accountant II - NYC @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2854 jobs in database
[2026-01-20T10:13:45.160Z] [BOT] ✅ No jobs to archive (all 2854 jobs within 7-day window)
[2026-01-20T10:13:45.180Z] [BOT] 💾 Saved posted_jobs.json: 2854 active jobs
[2026-01-20T10:13:45.181Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:46.871Z] [BOT] ✅ Posted message: Staff Accountant II - NYC @ datadog in #JID_98d4f0de
[2026-01-20T10:13:46.871Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T10:13:46.871Z] [BOT] 💾 Added channel posting: Staff Accountant II - NYC @ datadog → location channel (2 total channels)
[2026-01-20T10:13:46.871Z] [BOT] 💾 BEFORE ARCHIVING: 2854 jobs in database
[2026-01-20T10:13:46.873Z] [BOT] ✅ No jobs to archive (all 2854 jobs within 7-day window)
[2026-01-20T10:13:46.891Z] [BOT] 💾 Saved posted_jobs.json: 2854 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:48.393Z] [BOT] 💾 Marked as posted: Staff Accountant II - NYC @ datadog (instance #1)
[2026-01-20T10:13:48.393Z] [BOT] 💾 BEFORE ARCHIVING: 2855 jobs in database
[2026-01-20T10:13:48.395Z] [BOT] ✅ No jobs to archive (all 2855 jobs within 7-day window)
[2026-01-20T10:13:48.413Z] [BOT] 💾 Saved posted_jobs.json: 2855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:51.414Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T10:13:51.414Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Bits AI" @ datadog
[2026-01-20T10:13:51.414Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T10:13:51.892Z] [BOT] ✅ Posted message: Staff Product Designer, Bits AI @ datadog in #ai-jobs
[2026-01-20T10:13:51.892Z] [BOT] ✅ Industry: Staff Product Designer, Bits AI @ datadog
[2026-01-20T10:13:51.893Z] [BOT] 💾 Added channel posting: Staff Product Designer, Bits AI @ datadog → category channel (1 total channels)
[2026-01-20T10:13:51.893Z] [BOT] 💾 BEFORE ARCHIVING: 2856 jobs in database
[2026-01-20T10:13:51.895Z] [BOT] ✅ No jobs to archive (all 2856 jobs within 7-day window)
[2026-01-20T10:13:51.911Z] [BOT] 💾 Saved posted_jobs.json: 2856 active jobs
[2026-01-20T10:13:51.911Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:53.677Z] [BOT] ✅ Posted message: Staff Product Designer, Bits AI @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T10:13:53.678Z] [BOT] 💾 Added channel posting: Staff Product Designer, Bits AI @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2856 jobs in database
[2026-01-20T10:13:53.680Z] [BOT] ✅ No jobs to archive (all 2856 jobs within 7-day window)
[2026-01-20T10:13:53.696Z] [BOT] 💾 Saved posted_jobs.json: 2856 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:55.197Z] [BOT] 💾 Marked as posted: Staff Product Designer, Bits AI @ datadog (instance #1)
[2026-01-20T10:13:55.198Z] [BOT] 💾 BEFORE ARCHIVING: 2857 jobs in database
[2026-01-20T10:13:55.199Z] [BOT] ✅ No jobs to archive (all 2857 jobs within 7-day window)
[2026-01-20T10:13:55.216Z] [BOT] 💾 Saved posted_jobs.json: 2857 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:13:58.217Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T10:13:58.218Z] [BOT] ⏭️  Skipping duplicate: JID_21e304e2 (posted within 7 days)
[2026-01-20T10:13:58.218Z] [BOT] ⏭️  Skipping duplicate: JID_1f2e8001 (posted within 7 days)
[2026-01-20T10:13:58.219Z] [BOT] ⏭️  Skipping duplicate: JID_fad4bacc (posted within 7 days)
[2026-01-20T10:13:58.219Z] [BOT] ⏭️  Skipping duplicate: JID_17e140fc (posted within 7 days)
[2026-01-20T10:13:58.332Z] [BOT] ✅ Loaded pending queue: 2790 total (2770 pending, 20 enriched, 0 posted)
[2026-01-20T10:13:58.499Z] [BOT] ✅ Saved pending queue: 2790 total (2770 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-20T10:13:58.499Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T10:13:58.568Z] [BOT] 📂 Loaded 5392 existing routing entries
[2026-01-20T10:13:58.651Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-20T10:13:58.651Z] [BOT] Total entries: 5396
   Timestamp: 2026-01-20T10:13:58.629Z
[2026-01-20T10:13:58.651Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T10:13:58.651Z] [BOT] Total attempts: 7
   Successful: 7
   Failed: 0
   Skipped: 0
[2026-01-20T10:13:58.652Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 4
   Top channels:
     1. #JID_98d4f0de: 3 posts
     2. #tech-jobs: 2 posts
     3. #finance-jobs: 1 posts
     4. #ai-jobs: 1 posts
[2026-01-20T10:13:58.652Z] [BOT] [STATS] Channel stats saved
[2026-01-20T10:14:00.674Z] 
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
- [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*