# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T04:55:15.276Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T04:54:43.964Z] ========================================
[2026-01-20T04:54:43.966Z] Discord Bot Execution Log
[2026-01-20T04:54:43.966Z] Environment: GitHub Actions
[2026-01-20T04:54:43.966Z] Node Version: v20.19.6
[2026-01-20T04:54:43.966Z] ========================================
[2026-01-20T04:54:43.966Z] Environment Variables Check:
[2026-01-20T04:54:43.967Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T04:54:43.967Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T04:54:43.967Z] 
Multi-Channel Configuration:
[2026-01-20T04:54:43.967Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.967Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.968Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.968Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.968Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T04:54:43.968Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T04:54:43.968Z] 
Data Files Check:
[2026-01-20T04:54:43.969Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177819 bytes)
[2026-01-20T04:54:43.980Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1535018 bytes)
[2026-01-20T04:54:43.980Z] 
========================================
[2026-01-20T04:54:43.980Z] Starting Enhanced Discord Bot...
[2026-01-20T04:54:43.980Z] ========================================
[2026-01-20T04:54:44.518Z] [BOT] ✅ Loaded V2 database: 2783 jobs
[2026-01-20T04:54:45.022Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T04:54:45.022Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T04:54:45.023Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T04:54:45.148Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T04:54:45.152Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T04:54:45.152Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T04:54:45.153Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T04:54:45.153Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-20T04:54:45.154Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T04:54:45.156Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T04:54:45.157Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T04:54:45.158Z] [BOT] 📍 [ROUTING] "Engineering Manager I - Cyber Threat Intelligence" @ datadog
[2026-01-20T04:54:45.158Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:54:45.162Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T04:54:45.370Z] [BOT] ✅ Posted message: Engineering Manager I - Cyber Threat Intelligence @ datadog in #tech-jobs
[2026-01-20T04:54:45.370Z] [BOT] ✅ Industry: Engineering Manager I - Cyber Threat Intelligence @ datadog
[2026-01-20T04:54:45.371Z] [BOT] 💾 Added channel posting: Engineering Manager I - Cyber Threat Intelligence @ datadog → category channel (1 total channels)
[2026-01-20T04:54:45.371Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T04:54:45.373Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T04:54:45.378Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-20T04:54:45.378Z] [BOT] ✅ Archiving complete: 20 archived, 2764 active
[2026-01-20T04:54:45.401Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:47.131Z] [BOT] ✅ Posted message: Engineering Manager I - Cyber Threat Intelligence @ datadog in #JID_98d4f0de
[2026-01-20T04:54:47.131Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T04:54:47.131Z] [BOT] 💾 Added channel posting: Engineering Manager I - Cyber Threat Intelligence @ datadog → location channel (2 total channels)
[2026-01-20T04:54:47.132Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T04:54:47.134Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T04:54:47.149Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
[2026-01-20T04:54:47.149Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:48.650Z] [BOT] 💾 Marked as posted: Engineering Manager I - Cyber Threat Intelligence @ datadog (instance #1)
[2026-01-20T04:54:48.650Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T04:54:48.652Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T04:54:48.670Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:48.671Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Networking" @ anthropic
[2026-01-20T04:54:48.671Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:54:48.850Z] [BOT] ✅ Posted message: Software Engineer, ML Networking @ anthropic in #tech-jobs
[2026-01-20T04:54:48.850Z] [BOT] ✅ Industry: Software Engineer, ML Networking @ anthropic
[2026-01-20T04:54:48.851Z] [BOT] 💾 Added channel posting: Software Engineer, ML Networking @ anthropic → category channel (1 total channels)
[2026-01-20T04:54:48.851Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T04:54:48.853Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T04:54:48.870Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:50.371Z] [BOT] 💾 Marked as posted: Software Engineer, ML Networking @ anthropic (instance #1)
[2026-01-20T04:54:50.371Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T04:54:50.373Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T04:54:50.390Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:53.390Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T04:54:53.391Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Salt Lake City)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-20T04:54:53.650Z] [BOT] ✅ Posted message: Channel Development Representative, West (Salt Lake City) @ verkada in #finance-jobs
  ✅ Industry: Channel Development Representative, West (Salt Lake City) @ verkada
[2026-01-20T04:54:53.651Z] [BOT] 💾 Added channel posting: Channel Development Representative, West (Salt Lake City) @ verkada → category channel (1 total channels)
[2026-01-20T04:54:53.651Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T04:54:53.653Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T04:54:53.672Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:55.174Z] [BOT] 💾 Marked as posted: Channel Development Representative, West (Salt Lake City) @ verkada (instance #1)
[2026-01-20T04:54:55.174Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T04:54:55.177Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T04:54:55.195Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
[2026-01-20T04:54:55.195Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:54:58.196Z] [BOT] 📌 Posting 6 jobs to #ai-jobs
[2026-01-20T04:54:58.197Z] [BOT] 📍 [ROUTING] "TPU Kernel Engineer" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:54:58.197Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:54:58.592Z] [BOT] ✅ Posted message: TPU Kernel Engineer @ anthropic in #ai-jobs
  ✅ Industry: TPU Kernel Engineer @ anthropic
[2026-01-20T04:54:58.592Z] [BOT] 💾 Added channel posting: TPU Kernel Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T04:54:58.592Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T04:54:58.594Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T04:54:58.613Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:00.116Z] [BOT] 💾 Marked as posted: TPU Kernel Engineer @ anthropic (instance #1)
[2026-01-20T04:55:00.116Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T04:55:00.118Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T04:55:00.133Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:00.134Z] [BOT] 📍 [ROUTING] "Performance Engineer" @ anthropic
[2026-01-20T04:55:00.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:55:00.561Z] [BOT] ✅ Posted message: Performance Engineer @ anthropic in #ai-jobs
[2026-01-20T04:55:00.561Z] [BOT] ✅ Industry: Performance Engineer @ anthropic
[2026-01-20T04:55:00.562Z] [BOT] 💾 Added channel posting: Performance Engineer @ anthropic → category channel (1 total channels)
[2026-01-20T04:55:00.562Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T04:55:00.564Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T04:55:00.582Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:02.083Z] [BOT] 💾 Marked as posted: Performance Engineer @ anthropic (instance #1)
[2026-01-20T04:55:02.084Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T04:55:02.085Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T04:55:02.104Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:02.104Z] [BOT] 📍 [ROUTING] "Research Engineer, Machine Learning (Reinforcement Learning) " @ anthropic
[2026-01-20T04:55:02.104Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:55:02.294Z] [BOT] ✅ Posted message: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic in #ai-jobs
[2026-01-20T04:55:02.294Z] [BOT] ✅ Industry: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic
[2026-01-20T04:55:02.294Z] [BOT] 💾 Added channel posting: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic → category channel (1 total channels)
[2026-01-20T04:55:02.294Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T04:55:02.296Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T04:55:02.312Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:03.814Z] [BOT] 💾 Marked as posted: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic (instance #1)
[2026-01-20T04:55:03.814Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T04:55:03.816Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T04:55:03.833Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:03.833Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, RL Engineering" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-20T04:55:03.833Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:55:04.060Z] [BOT] ✅ Posted message: Machine Learning Systems Engineer, RL Engineering @ anthropic in #ai-jobs
[2026-01-20T04:55:04.060Z] [BOT] ✅ Industry: Machine Learning Systems Engineer, RL Engineering @ anthropic
[2026-01-20T04:55:04.061Z] [BOT] 💾 Added channel posting: Machine Learning Systems Engineer, RL Engineering @ anthropic → category channel (1 total channels)
[2026-01-20T04:55:04.061Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T04:55:04.063Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T04:55:04.087Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:05.589Z] [BOT] 💾 Marked as posted: Machine Learning Systems Engineer, RL Engineering @ anthropic (instance #1)
[2026-01-20T04:55:05.589Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T04:55:05.591Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T04:55:05.608Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
[2026-01-20T04:55:05.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:05.608Z] [BOT] 📍 [ROUTING] " [Expression of Interest] Research Manager, Interpretability" @ anthropic
[2026-01-20T04:55:05.609Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:55:05.800Z] [BOT] ✅ Posted message:  [Expression of Interest] Research Manager, Interpretability @ anthropic in #ai-jobs
[2026-01-20T04:55:05.800Z] [BOT] ✅ Industry:  [Expression of Interest] Research Manager, Interpretability @ anthropic
[2026-01-20T04:55:05.800Z] [BOT] 💾 Added channel posting:  [Expression of Interest] Research Manager, Interpretability @ anthropic → category channel (1 total channels)
[2026-01-20T04:55:05.800Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T04:55:05.802Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T04:55:05.819Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
[2026-01-20T04:55:05.819Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:07.321Z] [BOT] 💾 Marked as posted:  [Expression of Interest] Research Manager, Interpretability @ anthropic (instance #1)
[2026-01-20T04:55:07.321Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-20T04:55:07.323Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-20T04:55:07.342Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
[2026-01-20T04:55:07.342Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:07.342Z] [BOT] 📍 [ROUTING] "ML/Research Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-20T04:55:07.343Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:55:07.504Z] [BOT] ✅ Posted message: ML/Research Engineer, Safeguards @ anthropic in #ai-jobs
  ✅ Industry: ML/Research Engineer, Safeguards @ anthropic
[2026-01-20T04:55:07.505Z] [BOT] 💾 Added channel posting: ML/Research Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-20T04:55:07.505Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-20T04:55:07.507Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-20T04:55:07.522Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
[2026-01-20T04:55:07.522Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:09.024Z] [BOT] 💾 Marked as posted: ML/Research Engineer, Safeguards @ anthropic (instance #1)
[2026-01-20T04:55:09.024Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T04:55:09.025Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T04:55:09.043Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:55:12.044Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_7e8e9e95 (posted within 7 days)
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_1c4bcafd (posted within 7 days)
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_fe906425 (posted within 7 days)
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_b2f8ad02 (posted within 7 days)
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_274d4691 (posted within 7 days)
[2026-01-20T04:55:12.045Z] [BOT] ⏭️  Skipping duplicate: JID_d2212a19 (posted within 7 days)
[2026-01-20T04:55:12.046Z] [BOT] ⏭️  Skipping duplicate: JID_d9b8afd8 (posted within 7 days)
[2026-01-20T04:55:12.046Z] [BOT] ⏭️  Skipping duplicate: JID_0aff1ccc (posted within 7 days)
[2026-01-20T04:55:12.046Z] [BOT] ⏭️  Skipping duplicate: JID_d0e620f0 (posted within 7 days)
[2026-01-20T04:55:12.153Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[2026-01-20T04:55:12.337Z] [BOT] ✅ Saved pending queue: 2813 total (2793 pending, 11 enriched, 9 posted)
[2026-01-20T04:55:12.337Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T04:55:12.398Z] [BOT] 📂 Loaded 5274 existing routing entries
[2026-01-20T04:55:12.472Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5283
   Timestamp: 2026-01-20T04:55:12.448Z
[2026-01-20T04:55:12.473Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-20T04:55:12.473Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-20T04:55:12.473Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T04:55:12.473Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #ai-jobs: 6 posts
     2. #tech-jobs: 2 posts
     3. #JID_98d4f0de: 1 posts
     4. #finance-jobs: 1 posts
[2026-01-20T04:55:12.473Z] [BOT] [STATS] Channel stats saved
[2026-01-20T04:55:14.499Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*