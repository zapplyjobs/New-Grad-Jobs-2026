# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T04:32:53.646Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T04:32:26.366Z] ========================================
[2026-01-20T04:32:26.368Z] Discord Bot Execution Log
[2026-01-20T04:32:26.368Z] Environment: GitHub Actions
[2026-01-20T04:32:26.368Z] Node Version: v20.19.6
[2026-01-20T04:32:26.368Z] ========================================
[2026-01-20T04:32:26.368Z] Environment Variables Check:
[2026-01-20T04:32:26.368Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T04:32:26.369Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T04:32:26.369Z] 
Multi-Channel Configuration:
[2026-01-20T04:32:26.369Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.369Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.370Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.370Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T04:32:26.370Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T04:32:26.370Z] 
Data Files Check:
[2026-01-20T04:32:26.371Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173978 bytes)
[2026-01-20T04:32:26.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1534710 bytes)
[2026-01-20T04:32:26.381Z] 
========================================
[2026-01-20T04:32:26.381Z] Starting Enhanced Discord Bot...
[2026-01-20T04:32:26.381Z] ========================================
[2026-01-20T04:32:26.923Z] [BOT] ✅ Loaded V2 database: 2785 jobs
[2026-01-20T04:32:28.277Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T04:32:28.277Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T04:32:28.277Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T04:32:28.394Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer, Pre-training at anthropic
[2026-01-20T04:32:28.397Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T04:32:28.398Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T04:32:28.398Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T04:32:28.399Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-20T04:32:28.399Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T04:32:28.402Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T04:32:28.403Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-20T04:32:28.403Z] [BOT] 📍 [ROUTING] "Research Engineer, Pre-training" @ anthropic
[2026-01-20T04:32:28.403Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:32:28.407Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T04:32:28.650Z] [BOT] ✅ Posted message: Research Engineer, Pre-training @ anthropic in #ai-jobs
[2026-01-20T04:32:28.650Z] [BOT] ✅ Industry: Research Engineer, Pre-training @ anthropic
[2026-01-20T04:32:28.650Z] [BOT] 💾 Added channel posting: Research Engineer, Pre-training @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:28.650Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T04:32:28.653Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T04:32:28.660Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-20T04:32:28.660Z] [BOT] ✅ Archiving complete: 20 archived, 2766 active
[2026-01-20T04:32:28.680Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
[2026-01-20T04:32:28.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:30.182Z] [BOT] 💾 Marked as posted: Research Engineer, Pre-training @ anthropic (instance #1)
[2026-01-20T04:32:30.182Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T04:32:30.184Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T04:32:30.200Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:30.200Z] [BOT] 📍 [ROUTING] "Senior Research Scientist, Reward Models" @ anthropic
[2026-01-20T04:32:30.200Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:32:30.389Z] [BOT] ✅ Posted message: Senior Research Scientist, Reward Models @ anthropic in #ai-jobs
[2026-01-20T04:32:30.389Z] [BOT] ✅ Industry: Senior Research Scientist, Reward Models @ anthropic
[2026-01-20T04:32:30.390Z] [BOT] 💾 Added channel posting: Senior Research Scientist, Reward Models @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T04:32:30.391Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T04:32:30.409Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
[2026-01-20T04:32:30.409Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:31.911Z] [BOT] 💾 Marked as posted: Senior Research Scientist, Reward Models @ anthropic (instance #1)
[2026-01-20T04:32:31.911Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T04:32:31.913Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T04:32:31.930Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:31.931Z] [BOT] 📍 [ROUTING] "Software Engineer, Accelerator Build Infrastructure" @ anthropic
[2026-01-20T04:32:31.931Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:32:32.233Z] [BOT] ✅ Posted message: Software Engineer, Accelerator Build Infrastructure @ anthropic in #ai-jobs
[2026-01-20T04:32:32.234Z] [BOT] ✅ Industry: Software Engineer, Accelerator Build Infrastructure @ anthropic
[2026-01-20T04:32:32.234Z] [BOT] 💾 Added channel posting: Software Engineer, Accelerator Build Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:32.234Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T04:32:32.236Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T04:32:32.253Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
[2026-01-20T04:32:32.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:33.754Z] [BOT] 💾 Marked as posted: Software Engineer, Accelerator Build Infrastructure @ anthropic (instance #1)
[2026-01-20T04:32:33.755Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T04:32:33.756Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T04:32:33.771Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
[2026-01-20T04:32:33.772Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:33.772Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Machine Learning (Safety)" @ discord
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T04:32:34.097Z] [BOT] ✅ Posted message: Senior Software Engineer, Machine Learning (Safety) @ discord in #ai-jobs
[2026-01-20T04:32:34.098Z] [BOT] ✅ Industry: Senior Software Engineer, Machine Learning (Safety) @ discord
[2026-01-20T04:32:34.098Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Machine Learning (Safety) @ discord → category channel (1 total channels)
[2026-01-20T04:32:34.098Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T04:32:34.100Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T04:32:34.116Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
[2026-01-20T04:32:34.116Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:35.617Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Machine Learning (Safety) @ discord (instance #1)
💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T04:32:35.618Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T04:32:35.634Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:35.634Z] [BOT] 📍 [ROUTING] "Solutions Architect, Enterprise Industries" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:32:35.634Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-20T04:32:35.773Z] [BOT] ✅ Posted message: Solutions Architect, Enterprise Industries @ anthropic in #ai-jobs
  ✅ Industry: Solutions Architect, Enterprise Industries @ anthropic
[2026-01-20T04:32:35.774Z] [BOT] 💾 Added channel posting: Solutions Architect, Enterprise Industries @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T04:32:35.776Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T04:32:35.791Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:37.292Z] [BOT] 💾 Marked as posted: Solutions Architect, Enterprise Industries @ anthropic (instance #1)
[2026-01-20T04:32:37.292Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T04:32:37.294Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T04:32:37.313Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:40.313Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-20T04:32:40.314Z] [BOT] 📍 [ROUTING] "Staff Research Engineer, Discovery Team" @ anthropic
[2026-01-20T04:32:40.314Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:32:40.478Z] [BOT] ✅ Posted message: Staff Research Engineer, Discovery Team @ anthropic in #tech-jobs
[2026-01-20T04:32:40.478Z] [BOT] ✅ Industry: Staff Research Engineer, Discovery Team @ anthropic
[2026-01-20T04:32:40.479Z] [BOT] 💾 Added channel posting: Staff Research Engineer, Discovery Team @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:40.479Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T04:32:40.481Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T04:32:40.500Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:42.001Z] [BOT] 💾 Marked as posted: Staff Research Engineer, Discovery Team @ anthropic (instance #1)
[2026-01-20T04:32:42.002Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T04:32:42.004Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T04:32:42.020Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
[2026-01-20T04:32:42.020Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:42.021Z] [BOT] 📍 [ROUTING] "Research Engineer, Data Ingestion" @ anthropic
[2026-01-20T04:32:42.021Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:32:42.303Z] [BOT] ✅ Posted message: Research Engineer, Data Ingestion @ anthropic in #tech-jobs
[2026-01-20T04:32:42.303Z] [BOT] ✅ Industry: Research Engineer, Data Ingestion @ anthropic
[2026-01-20T04:32:42.303Z] [BOT] 💾 Added channel posting: Research Engineer, Data Ingestion @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:42.304Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T04:32:42.305Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T04:32:42.322Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:43.823Z] [BOT] 💾 Marked as posted: Research Engineer, Data Ingestion @ anthropic (instance #1)
[2026-01-20T04:32:43.823Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-20T04:32:43.825Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-20T04:32:43.843Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
[2026-01-20T04:32:43.843Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:43.843Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Platform" @ anthropic
[2026-01-20T04:32:43.843Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:32:44.243Z] [BOT] ✅ Posted message: Research Engineer, Reward Models Platform @ anthropic in #tech-jobs
  ✅ Industry: Research Engineer, Reward Models Platform @ anthropic
[2026-01-20T04:32:44.244Z] [BOT] 💾 Added channel posting: Research Engineer, Reward Models Platform @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:44.244Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-20T04:32:44.245Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-20T04:32:44.262Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:45.762Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Platform @ anthropic (instance #1)
[2026-01-20T04:32:45.763Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T04:32:45.764Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T04:32:45.781Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:45.781Z] [BOT] 📍 [ROUTING] "Security Software Engineer, D&R Platform" @ anthropic
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:32:46.054Z] [BOT] ✅ Posted message: Security Software Engineer, D&R Platform @ anthropic in #tech-jobs
[2026-01-20T04:32:46.054Z] [BOT] ✅ Industry: Security Software Engineer, D&R Platform @ anthropic
[2026-01-20T04:32:46.055Z] [BOT] 💾 Added channel posting: Security Software Engineer, D&R Platform @ anthropic → category channel (1 total channels)
[2026-01-20T04:32:46.055Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T04:32:46.056Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T04:32:46.073Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:47.576Z] [BOT] 💾 Marked as posted: Security Software Engineer, D&R Platform @ anthropic (instance #1)
[2026-01-20T04:32:47.576Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T04:32:47.578Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T04:32:47.593Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:32:50.595Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T04:32:50.595Z] [BOT] ⏭️  Skipping duplicate: JID_f9915154 (posted within 7 days)
[2026-01-20T04:32:50.595Z] [BOT] ⏭️  Skipping duplicate: JID_b9aceaaa (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_3a2e117d (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_11f66bd4 (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_ed8a4c29 (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_00920064 (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_ac320815 (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_d535d200 (posted within 7 days)
[2026-01-20T04:32:50.596Z] [BOT] ⏭️  Skipping duplicate: JID_f05e0595 (posted within 7 days)
[2026-01-20T04:32:50.703Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[2026-01-20T04:32:50.879Z] [BOT] ✅ Saved pending queue: 2813 total (2793 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-20T04:32:50.879Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T04:32:50.940Z] [BOT] 📂 Loaded 5265 existing routing entries
[2026-01-20T04:32:51.010Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5274
[2026-01-20T04:32:51.011Z] [BOT] Timestamp: 2026-01-20T04:32:50.989Z
[2026-01-20T04:32:51.012Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 2
   Top channels:
     1. #ai-jobs: 5 posts
     2. #tech-jobs: 4 posts
[STATS] Channel stats saved
[2026-01-20T04:32:53.034Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*