# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T08:14:16.040Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T08:13:50.273Z] ========================================
[2026-01-20T08:13:50.274Z] Discord Bot Execution Log
[2026-01-20T08:13:50.275Z] Environment: GitHub Actions
[2026-01-20T08:13:50.275Z] Node Version: v20.19.6
[2026-01-20T08:13:50.275Z] ========================================
[2026-01-20T08:13:50.275Z] Environment Variables Check:
[2026-01-20T08:13:50.275Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T08:13:50.275Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.275Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T08:13:50.275Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T08:13:50.275Z] 
Multi-Channel Configuration:
[2026-01-20T08:13:50.275Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T08:13:50.276Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T08:13:50.276Z] 
Data Files Check:
[2026-01-20T08:13:50.277Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176813 bytes)
[2026-01-20T08:13:50.288Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567733 bytes)
[2026-01-20T08:13:50.288Z] 
========================================
[2026-01-20T08:13:50.288Z] Starting Enhanced Discord Bot...
[2026-01-20T08:13:50.288Z] ========================================
[2026-01-20T08:13:50.815Z] [BOT] ✅ Loaded V2 database: 2824 jobs
[2026-01-20T08:13:51.638Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T08:13:51.639Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T08:13:51.639Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T08:13:51.753Z] [BOT] ✅ Loaded pending queue: 2793 total (2773 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T08:13:51.756Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T08:13:51.756Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T08:13:51.757Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T08:13:51.757Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T08:13:51.758Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Software Engineer  @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T08:13:51.758Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T08:13:51.760Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T08:13:51.761Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T08:13:51.761Z] [BOT ERROR] ⚠️ No channel configured for job: Product Marketing Manager - Log Management - skipping
[2026-01-20T08:13:51.761Z] [BOT ERROR] ⚠️ No channel configured for job: Product Manager II - Incident Management - skipping
[2026-01-20T08:13:51.762Z] [BOT ERROR] ⚠️ No channel configured for job: Senior Technical Program Manager, Knowledge Systems - skipping
[2026-01-20T08:13:51.762Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-20T08:13:51.763Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI Security)" @ datadog
[2026-01-20T08:13:51.763Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-20T08:13:51.767Z] [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T08:13:52.186Z] [BOT] ✅ Posted message: Senior Product Marketing Manager (AI Security) @ datadog in #tech-jobs
[2026-01-20T08:13:52.186Z] [BOT] ✅ Industry: Senior Product Marketing Manager (AI Security) @ datadog
[2026-01-20T08:13:52.187Z] [BOT] 💾 Added channel posting: Senior Product Marketing Manager (AI Security) @ datadog → category channel (1 total channels)
[2026-01-20T08:13:52.187Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-20T08:13:52.190Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T08:13:52.196Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T08:13:52.196Z] [BOT] ✅ Archiving complete: 10 archived, 2815 active
[2026-01-20T08:13:52.214Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:53.716Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI Security) @ datadog (instance #1)
[2026-01-20T08:13:53.716Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T08:13:53.718Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T08:13:53.734Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:53.734Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (Cloud Cost Management)" @ datadog
[2026-01-20T08:13:53.734Z] [BOT] Category: TECH (matched: "cloud")
   Channel: tech-jobs (1462...4987)
[2026-01-20T08:13:53.982Z] [BOT] ✅ Posted message: Senior Product Marketing Manager (Cloud Cost Management) @ datadog in #tech-jobs
[2026-01-20T08:13:53.982Z] [BOT] ✅ Industry: Senior Product Marketing Manager (Cloud Cost Management) @ datadog
[2026-01-20T08:13:53.983Z] [BOT] 💾 Added channel posting: Senior Product Marketing Manager (Cloud Cost Management) @ datadog → category channel (1 total channels)
[2026-01-20T08:13:53.983Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T08:13:53.985Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T08:13:54.004Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
[2026-01-20T08:13:54.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:55.505Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (Cloud Cost Management) @ datadog (instance #1)
[2026-01-20T08:13:55.505Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T08:13:55.507Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T08:13:55.525Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:55.525Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer - Majors Northeast" @ datadog
   Category: TECH (default)
[2026-01-20T08:13:55.525Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T08:13:55.876Z] [BOT] ✅ Posted message: Senior Sales Engineer - Majors Northeast @ datadog in #tech-jobs
  ✅ Industry: Senior Sales Engineer - Majors Northeast @ datadog
[2026-01-20T08:13:55.876Z] [BOT] 💾 Added channel posting: Senior Sales Engineer - Majors Northeast @ datadog → category channel (1 total channels)
[2026-01-20T08:13:55.876Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T08:13:55.878Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T08:13:55.896Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:57.574Z] [BOT] ✅ Posted message: Senior Sales Engineer - Majors Northeast @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T08:13:57.574Z] [BOT] 💾 Added channel posting: Senior Sales Engineer - Majors Northeast @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T08:13:57.576Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T08:13:57.591Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:59.092Z] [BOT] 💾 Marked as posted: Senior Sales Engineer - Majors Northeast @ datadog (instance #1)
[2026-01-20T08:13:59.092Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T08:13:59.094Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-20T08:13:59.109Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:13:59.109Z] [BOT] 📍 [ROUTING] "Senior Software Engineer " @ datadog
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T08:13:59.277Z] [BOT] ✅ Posted message: Senior Software Engineer  @ datadog in #tech-jobs
  ✅ Industry: Senior Software Engineer  @ datadog
[2026-01-20T08:13:59.277Z] [BOT] 💾 Added channel posting: Senior Software Engineer  @ datadog → category channel (1 total channels)
[2026-01-20T08:13:59.278Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T08:13:59.279Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T08:13:59.295Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:01.084Z] [BOT] ✅ Posted message: Senior Software Engineer  @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T08:14:01.085Z] [BOT] 💾 Added channel posting: Senior Software Engineer  @ datadog → location channel (2 total channels)
[2026-01-20T08:14:01.085Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-20T08:14:01.087Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-20T08:14:01.108Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:02.610Z] [BOT] 💾 Marked as posted: Senior Software Engineer  @ datadog (instance #1)
[2026-01-20T08:14:02.610Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-20T08:14:02.612Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-20T08:14:02.632Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
[2026-01-20T08:14:02.632Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:02.632Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Distributed Systems @ datadog (instance #1)
[2026-01-20T08:14:02.632Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-20T08:14:02.633Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-20T08:14:02.656Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Software Engineer - Frontend @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-20T08:14:02.658Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-20T08:14:02.674Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:05.675Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T08:14:05.676Z] [BOT] 📍 [ROUTING] "Senior Security Engineer, Data Security" @ datadog
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T08:14:05.676Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T08:14:06.106Z] [BOT] ✅ Posted message: Senior Security Engineer, Data Security @ datadog in #JID_fb739488
  ✅ Industry: Senior Security Engineer, Data Security @ datadog
[2026-01-20T08:14:06.107Z] [BOT] 💾 Added channel posting: Senior Security Engineer, Data Security @ datadog → category channel (1 total channels)
[2026-01-20T08:14:06.107Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-20T08:14:06.109Z] [BOT] ✅ No jobs to archive (all 2825 jobs within 7-day window)
[2026-01-20T08:14:06.125Z] [BOT] 💾 Saved posted_jobs.json: 2825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:07.990Z] [BOT] ✅ Posted message: Senior Security Engineer, Data Security @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T08:14:07.991Z] [BOT] 💾 Added channel posting: Senior Security Engineer, Data Security @ datadog → location channel (2 total channels)
[2026-01-20T08:14:07.991Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-20T08:14:07.993Z] [BOT] ✅ No jobs to archive (all 2825 jobs within 7-day window)
[2026-01-20T08:14:08.012Z] [BOT] 💾 Saved posted_jobs.json: 2825 active jobs
[2026-01-20T08:14:08.012Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:09.513Z] [BOT] 💾 Marked as posted: Senior Security Engineer, Data Security @ datadog (instance #1)
[2026-01-20T08:14:09.513Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-20T08:14:09.515Z] [BOT] ✅ No jobs to archive (all 2826 jobs within 7-day window)
[2026-01-20T08:14:09.533Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T08:14:12.534Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-20T08:14:12.536Z] [BOT] ⏭️  Skipping duplicate: JID_8d88551f (posted within 7 days)
[2026-01-20T08:14:12.536Z] [BOT] ⏭️  Skipping duplicate: JID_8ae984e3 (posted within 7 days)
[2026-01-20T08:14:12.536Z] [BOT] ⏭️  Skipping duplicate: JID_2e035db0 (posted within 7 days)
[2026-01-20T08:14:12.536Z] [BOT] ⏭️  Skipping duplicate: JID_2fe4cc9c (posted within 7 days)
[2026-01-20T08:14:12.536Z] [BOT] ⏭️  Skipping duplicate: JID_c766dee9 (posted within 7 days)
[2026-01-20T08:14:12.641Z] [BOT] ✅ Loaded pending queue: 2793 total (2773 pending, 20 enriched, 0 posted)
[2026-01-20T08:14:12.827Z] [BOT] ✅ Saved pending queue: 2793 total (2773 pending, 15 enriched, 5 posted)
[2026-01-20T08:14:12.827Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T08:14:12.888Z] [BOT] 📂 Loaded 5370 existing routing entries
[2026-01-20T08:14:12.962Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 5375
   Timestamp: 2026-01-20T08:14:12.938Z
[2026-01-20T08:14:12.963Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T08:14:12.963Z] [BOT] Total attempts: 8
   Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-20T08:14:12.963Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 4
[2026-01-20T08:14:12.963Z] [BOT] Top channels:
     1. #tech-jobs: 4 posts
     2. #JID_98d4f0de: 2 posts
     3. #JID_ead674af: 1 posts
[2026-01-20T08:14:12.963Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-20T08:14:12.964Z] [BOT] [STATS] Channel stats saved
[2026-01-20T08:14:14.989Z] 
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
- [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*