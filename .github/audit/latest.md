# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T08:51:48.754Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T08:51:21.133Z] ========================================
[2026-01-20T08:51:21.135Z] Discord Bot Execution Log
[2026-01-20T08:51:21.135Z] Environment: GitHub Actions
[2026-01-20T08:51:21.135Z] Node Version: v20.19.6
[2026-01-20T08:51:21.135Z] ========================================
[2026-01-20T08:51:21.135Z] Environment Variables Check:
[2026-01-20T08:51:21.135Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T08:51:21.136Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T08:51:21.136Z] 
Multi-Channel Configuration:
[2026-01-20T08:51:21.136Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.136Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.137Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T08:51:21.137Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T08:51:21.137Z] 
Data Files Check:
[2026-01-20T08:51:21.138Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174490 bytes)
[2026-01-20T08:51:21.150Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1569551 bytes)
[2026-01-20T08:51:21.150Z] 
========================================
[2026-01-20T08:51:21.150Z] Starting Enhanced Discord Bot...
[2026-01-20T08:51:21.150Z] ========================================
[2026-01-20T08:51:21.684Z] [BOT] ✅ Loaded V2 database: 2826 jobs
[2026-01-20T08:51:22.433Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T08:51:22.434Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T08:51:22.434Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T08:51:22.548Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T08:51:22.551Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T08:51:22.552Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T08:51:22.552Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T08:51:22.553Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-20T08:51:22.553Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T08:51:22.555Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T08:51:22.556Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T08:51:22.556Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T08:51:22.557Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T08:51:22.557Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T08:51:22.557Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-20T08:51:22.558Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - AI Code Gen - Agent Engineer" @ datadog
[2026-01-20T08:51:22.558Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T08:51:22.562Z] [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T08:51:22.905Z] [BOT] ✅ Posted message: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #ai-jobs
[2026-01-20T08:51:22.906Z] [BOT] ✅ Industry: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog
[2026-01-20T08:51:22.906Z] [BOT] 💾 Added channel posting: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog → category channel (1 total channels)
[2026-01-20T08:51:22.907Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-20T08:51:22.909Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T08:51:22.915Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-20T08:51:22.915Z] [BOT] ✅ Archiving complete: 11 archived, 2816 active
[2026-01-20T08:51:22.935Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
[2026-01-20T08:51:22.935Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:24.648Z] [BOT] ✅ Posted message: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T08:51:24.648Z] [BOT] 💾 Added channel posting: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog → location channel (2 total channels)
[2026-01-20T08:51:24.648Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T08:51:24.650Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T08:51:24.667Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:26.167Z] [BOT] 💾 Marked as posted: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog (instance #1)
[2026-01-20T08:51:26.167Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T08:51:26.169Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T08:51:26.189Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:26.189Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - IDE AI Experiences - LLM Engineer" @ datadog
   Category: AI (matched: "machine learning")
[2026-01-20T08:51:26.190Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T08:51:26.389Z] [BOT] ✅ Posted message: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog in #ai-jobs
[2026-01-20T08:51:26.389Z] [BOT] ✅ Industry: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog
[2026-01-20T08:51:26.390Z] [BOT] 💾 Added channel posting: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog → category channel (1 total channels)
[2026-01-20T08:51:26.390Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T08:51:26.392Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T08:51:26.409Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
[2026-01-20T08:51:26.410Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:27.910Z] [BOT] 💾 Marked as posted: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog (instance #1)
[2026-01-20T08:51:27.910Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T08:51:27.912Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T08:51:27.929Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
[2026-01-20T08:51:27.929Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:27.929Z] [BOT] 📍 [ROUTING] "Senior Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
[2026-01-20T08:51:27.929Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T08:51:27.930Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T08:51:28.262Z] [BOT] ✅ Posted message: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #ai-jobs
[2026-01-20T08:51:28.262Z] [BOT] ✅ Industry: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-20T08:51:28.263Z] [BOT] 💾 Added channel posting: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog → category channel (1 total channels)
[2026-01-20T08:51:28.263Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T08:51:28.265Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T08:51:28.281Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:30.085Z] [BOT] ✅ Posted message: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T08:51:30.086Z] [BOT] 💾 Added channel posting: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog → location channel (2 total channels)
[2026-01-20T08:51:30.086Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T08:51:30.088Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T08:51:30.103Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:31.604Z] [BOT] 💾 Marked as posted: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-20T08:51:31.605Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T08:51:31.607Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T08:51:31.627Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:34.628Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T08:51:34.629Z] [BOT] 📍 [ROUTING] "Senior Staff Engineer - Event Platform Storage" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T08:51:34.913Z] [BOT] ✅ Posted message: Senior Staff Engineer - Event Platform Storage @ datadog in #tech-jobs
  ✅ Industry: Senior Staff Engineer - Event Platform Storage @ datadog
[2026-01-20T08:51:34.913Z] [BOT] 💾 Added channel posting: Senior Staff Engineer - Event Platform Storage @ datadog → category channel (1 total channels)
[2026-01-20T08:51:34.913Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T08:51:34.915Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T08:51:34.933Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
[2026-01-20T08:51:34.933Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:36.965Z] [BOT] ✅ Posted message: Senior Staff Engineer - Event Platform Storage @ datadog in #JID_98d4f0de
[2026-01-20T08:51:36.965Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T08:51:36.966Z] [BOT] 💾 Added channel posting: Senior Staff Engineer - Event Platform Storage @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T08:51:36.968Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T08:51:36.986Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:38.487Z] [BOT] 💾 Marked as posted: Senior Staff Engineer - Event Platform Storage @ datadog (instance #1)
[2026-01-20T08:51:38.487Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T08:51:38.489Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-20T08:51:38.506Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
[2026-01-20T08:51:38.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:38.507Z] [BOT] 📍 [ROUTING] "Senior Staff Software Engineer " @ datadog
[2026-01-20T08:51:38.507Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T08:51:38.744Z] [BOT] ✅ Posted message: Senior Staff Software Engineer  @ datadog in #tech-jobs
  ✅ Industry: Senior Staff Software Engineer  @ datadog
[2026-01-20T08:51:38.744Z] [BOT] 💾 Added channel posting: Senior Staff Software Engineer  @ datadog → category channel (1 total channels)
[2026-01-20T08:51:38.744Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T08:51:38.746Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T08:51:38.761Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:40.558Z] [BOT] ✅ Posted message: Senior Staff Software Engineer  @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T08:51:40.559Z] [BOT] 💾 Added channel posting: Senior Staff Software Engineer  @ datadog → location channel (2 total channels)
[2026-01-20T08:51:40.559Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T08:51:40.561Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T08:51:40.577Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:42.078Z] [BOT] 💾 Marked as posted: Senior Staff Software Engineer  @ datadog (instance #1)
[2026-01-20T08:51:42.078Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-20T08:51:42.080Z] [BOT] ✅ No jobs to archive (all 2825 jobs within 7-day window)
[2026-01-20T08:51:42.096Z] [BOT] 💾 Saved posted_jobs.json: 2825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:51:45.097Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-20T08:51:45.098Z] [BOT] ⏭️  Skipping duplicate: JID_de2effe2 (posted within 7 days)
[2026-01-20T08:51:45.098Z] [BOT] ⏭️  Skipping duplicate: JID_412cb049 (posted within 7 days)
[2026-01-20T08:51:45.099Z] [BOT] ⏭️  Skipping duplicate: JID_58f775e0 (posted within 7 days)
[2026-01-20T08:51:45.099Z] [BOT] ⏭️  Skipping duplicate: JID_d17c3a22 (posted within 7 days)
[2026-01-20T08:51:45.099Z] [BOT] ⏭️  Skipping duplicate: JID_45aad627 (posted within 7 days)
[2026-01-20T08:51:45.208Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[2026-01-20T08:51:45.381Z] [BOT] ✅ Saved pending queue: 2792 total (2772 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-20T08:51:45.381Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T08:51:45.457Z] [BOT] 📂 Loaded 5375 existing routing entries
[2026-01-20T08:51:45.529Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-20T08:51:45.530Z] [BOT] Total entries: 5380
   Timestamp: 2026-01-20T08:51:45.507Z
[2026-01-20T08:51:45.530Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 9
[2026-01-20T08:51:45.530Z] [BOT] Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-20T08:51:45.530Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 3
   Top channels:
     1. #JID_98d4f0de: 4 posts
     2. #ai-jobs: 3 posts
     3. #tech-jobs: 2 posts
[2026-01-20T08:51:45.531Z] [BOT] [STATS] Channel stats saved
[2026-01-20T08:51:47.554Z] 
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
- [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*