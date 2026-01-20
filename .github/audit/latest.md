# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T10:49:14.511Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T10:48:53.782Z] ========================================
[2026-01-20T10:48:53.784Z] Discord Bot Execution Log
[2026-01-20T10:48:53.784Z] Environment: GitHub Actions
[2026-01-20T10:48:53.784Z] Node Version: v20.19.6
[2026-01-20T10:48:53.784Z] ========================================
[2026-01-20T10:48:53.784Z] Environment Variables Check:
[2026-01-20T10:48:53.785Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T10:48:53.785Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.785Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T10:48:53.785Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T10:48:53.785Z] 
Multi-Channel Configuration:
[2026-01-20T10:48:53.785Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.785Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.785Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.785Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T10:48:53.786Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T10:48:53.786Z] 
Data Files Check:
[2026-01-20T10:48:53.787Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166893 bytes)
[2026-01-20T10:48:53.798Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1597863 bytes)
[2026-01-20T10:48:53.798Z] 
========================================
[2026-01-20T10:48:53.798Z] Starting Enhanced Discord Bot...
[2026-01-20T10:48:53.798Z] ========================================
[2026-01-20T10:48:54.360Z] [BOT] ✅ Loaded V2 database: 2874 jobs
[2026-01-20T10:48:54.795Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T10:48:54.795Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T10:48:54.795Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T10:48:54.912Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T10:48:54.916Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T10:48:54.916Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T10:48:54.917Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T10:48:54.917Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T10:48:54.918Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T10:48:54.920Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T10:48:54.921Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T10:48:54.921Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T10:48:54.921Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T10:48:54.921Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T10:48:54.922Z] [BOT ERROR] ⚠️ No channel configured for job: Staff Product Manager, Growth & SEO - skipping
[2026-01-20T10:48:54.923Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T10:48:54.923Z] [BOT] 📍 [ROUTING] "Technical Account Manager 2 - New York" @ datadog
[2026-01-20T10:48:54.923Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:48:54.928Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T10:48:55.104Z] [BOT] ✅ Posted message: Technical Account Manager 2 - New York @ datadog in #tech-jobs
[2026-01-20T10:48:55.104Z] [BOT] ✅ Industry: Technical Account Manager 2 - New York @ datadog
[2026-01-20T10:48:55.105Z] [BOT] 💾 Added channel posting: Technical Account Manager 2 - New York @ datadog → category channel (1 total channels)
[2026-01-20T10:48:55.105Z] [BOT] 💾 BEFORE ARCHIVING: 2875 jobs in database
[2026-01-20T10:48:55.108Z] [BOT] ✅ No jobs to archive (all 2875 jobs within 7-day window)
[2026-01-20T10:48:55.131Z] [BOT] 💾 Saved posted_jobs.json: 2875 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:48:56.911Z] [BOT] ✅ Posted message: Technical Account Manager 2 - New York @ datadog in #JID_98d4f0de
[2026-01-20T10:48:56.911Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T10:48:56.911Z] [BOT] 💾 Added channel posting: Technical Account Manager 2 - New York @ datadog → location channel (2 total channels)
[2026-01-20T10:48:56.911Z] [BOT] 💾 BEFORE ARCHIVING: 2875 jobs in database
[2026-01-20T10:48:56.913Z] [BOT] ✅ No jobs to archive (all 2875 jobs within 7-day window)
[2026-01-20T10:48:56.931Z] [BOT] 💾 Saved posted_jobs.json: 2875 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:48:58.433Z] [BOT] 💾 Marked as posted: Technical Account Manager 2 - New York @ datadog (instance #1)
[2026-01-20T10:48:58.433Z] [BOT] 💾 BEFORE ARCHIVING: 2876 jobs in database
[2026-01-20T10:48:58.435Z] [BOT] ✅ No jobs to archive (all 2876 jobs within 7-day window)
[2026-01-20T10:48:58.457Z] [BOT] 💾 Saved posted_jobs.json: 2876 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:48:58.457Z] [BOT] 📍 [ROUTING] "Technical Content Writer" @ datadog
[2026-01-20T10:48:58.458Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:48:58.696Z] [BOT] ✅ Posted message: Technical Content Writer @ datadog in #tech-jobs
[2026-01-20T10:48:58.697Z] [BOT] ✅ Industry: Technical Content Writer @ datadog
[2026-01-20T10:48:58.697Z] [BOT] 💾 Added channel posting: Technical Content Writer @ datadog → category channel (1 total channels)
[2026-01-20T10:48:58.697Z] [BOT] 💾 BEFORE ARCHIVING: 2877 jobs in database
[2026-01-20T10:48:58.700Z] [BOT] ✅ No jobs to archive (all 2877 jobs within 7-day window)
[2026-01-20T10:48:58.721Z] [BOT] 💾 Saved posted_jobs.json: 2877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:00.375Z] [BOT] ✅ Posted message: Technical Content Writer @ datadog in #JID_98d4f0de
[2026-01-20T10:49:00.375Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T10:49:00.376Z] [BOT] 💾 Added channel posting: Technical Content Writer @ datadog → location channel (2 total channels)
[2026-01-20T10:49:00.376Z] [BOT] 💾 BEFORE ARCHIVING: 2877 jobs in database
[2026-01-20T10:49:00.378Z] [BOT] ✅ No jobs to archive (all 2877 jobs within 7-day window)
[2026-01-20T10:49:00.398Z] [BOT] 💾 Saved posted_jobs.json: 2877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:01.900Z] [BOT] 💾 Marked as posted: Technical Content Writer @ datadog (instance #1)
[2026-01-20T10:49:01.900Z] [BOT] 💾 BEFORE ARCHIVING: 2878 jobs in database
[2026-01-20T10:49:01.902Z] [BOT] ✅ No jobs to archive (all 2878 jobs within 7-day window)
[2026-01-20T10:49:01.919Z] [BOT] 💾 Saved posted_jobs.json: 2878 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:01.920Z] [BOT] 📍 [ROUTING] "Technical Support Engineer 2, Premier - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T10:49:02.090Z] [BOT] ✅ Posted message: Technical Support Engineer 2, Premier - Denver @ datadog in #tech-jobs
[2026-01-20T10:49:02.090Z] [BOT] ✅ Industry: Technical Support Engineer 2, Premier - Denver @ datadog
[2026-01-20T10:49:02.090Z] [BOT] 💾 Added channel posting: Technical Support Engineer 2, Premier - Denver @ datadog → category channel (1 total channels)
[2026-01-20T10:49:02.090Z] [BOT] 💾 BEFORE ARCHIVING: 2879 jobs in database
[2026-01-20T10:49:02.092Z] [BOT] ✅ No jobs to archive (all 2879 jobs within 7-day window)
[2026-01-20T10:49:02.108Z] [BOT] 💾 Saved posted_jobs.json: 2879 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:03.611Z] [BOT] 💾 Marked as posted: Technical Support Engineer 2, Premier - Denver @ datadog (instance #1)
[2026-01-20T10:49:03.611Z] [BOT] 💾 BEFORE ARCHIVING: 2880 jobs in database
[2026-01-20T10:49:03.613Z] [BOT] ✅ No jobs to archive (all 2880 jobs within 7-day window)
[2026-01-20T10:49:03.634Z] [BOT] 💾 Saved posted_jobs.json: 2880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:06.635Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T10:49:06.635Z] [BOT] 📍 [ROUTING] "Associate Product Manager Intern" @ coinbase
[2026-01-20T10:49:06.635Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-20T10:49:06.851Z] [BOT] ✅ Posted message: Associate Product Manager Intern @ coinbase in #ai-jobs
  ✅ Industry: Associate Product Manager Intern @ coinbase
[2026-01-20T10:49:06.851Z] [BOT] 💾 Added channel posting: Associate Product Manager Intern @ coinbase → category channel (1 total channels)
[2026-01-20T10:49:06.852Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-20T10:49:06.854Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-20T10:49:06.874Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:08.377Z] [BOT] 💾 Marked as posted: Associate Product Manager Intern @ coinbase (instance #1)
[2026-01-20T10:49:08.378Z] [BOT] 💾 BEFORE ARCHIVING: 2882 jobs in database
[2026-01-20T10:49:08.380Z] [BOT] ✅ No jobs to archive (all 2882 jobs within 7-day window)
[2026-01-20T10:49:08.398Z] [BOT] 💾 Saved posted_jobs.json: 2882 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T10:49:11.399Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T10:49:11.400Z] [BOT] ⏭️  Skipping duplicate: JID_02167180 (posted within 7 days)
[2026-01-20T10:49:11.400Z] [BOT] ⏭️  Skipping duplicate: JID_ea2b096f (posted within 7 days)
[2026-01-20T10:49:11.400Z] [BOT] ⏭️  Skipping duplicate: JID_37f7437b (posted within 7 days)
[2026-01-20T10:49:11.401Z] [BOT] ⏭️  Skipping duplicate: JID_e4d0fb77 (posted within 7 days)
[2026-01-20T10:49:11.522Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[2026-01-20T10:49:11.695Z] [BOT] ✅ Saved pending queue: 2792 total (2772 pending, 16 enriched, 4 posted)
[2026-01-20T10:49:11.695Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T10:49:11.759Z] [BOT] 📂 Loaded 5400 existing routing entries
[2026-01-20T10:49:11.837Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 5404
[2026-01-20T10:49:11.838Z] [BOT] Timestamp: 2026-01-20T10:49:11.812Z
[2026-01-20T10:49:11.838Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
[2026-01-20T10:49:11.839Z] [BOT] Top channels:
     1. #tech-jobs: 3 posts
     2. #JID_98d4f0de: 2 posts
     3. #ai-jobs: 1 posts
[2026-01-20T10:49:11.839Z] [BOT] [STATS] Channel stats saved
[2026-01-20T10:49:13.865Z] 
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
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*