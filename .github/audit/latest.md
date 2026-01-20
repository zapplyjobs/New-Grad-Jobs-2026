# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T05:17:15.201Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T05:16:45.781Z] ========================================
[2026-01-20T05:16:45.783Z] Discord Bot Execution Log
[2026-01-20T05:16:45.783Z] Environment: GitHub Actions
[2026-01-20T05:16:45.783Z] Node Version: v20.19.6
[2026-01-20T05:16:45.783Z] ========================================
[2026-01-20T05:16:45.783Z] Environment Variables Check:
[2026-01-20T05:16:45.783Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T05:16:45.784Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T05:16:45.784Z] 
Multi-Channel Configuration:
[2026-01-20T05:16:45.784Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.784Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.785Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T05:16:45.785Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T05:16:45.785Z] 
Data Files Check:
[2026-01-20T05:16:45.786Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176292 bytes)
[2026-01-20T05:16:45.796Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1535350 bytes)
[2026-01-20T05:16:45.796Z] 
========================================
[2026-01-20T05:16:45.796Z] Starting Enhanced Discord Bot...
[2026-01-20T05:16:45.796Z] ========================================
[2026-01-20T05:16:46.310Z] [BOT] ✅ Loaded V2 database: 2781 jobs
[2026-01-20T05:16:46.917Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T05:16:46.918Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T05:16:46.918Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T05:16:47.036Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T05:16:47.040Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T05:16:47.040Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T05:16:47.041Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T05:16:47.042Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-20T05:16:47.042Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T05:16:47.044Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T05:16:47.046Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-20T05:16:47.046Z] [BOT] 📍 [ROUTING] "Research Engineer, Production Model Post Training" @ anthropic
[2026-01-20T05:16:47.046Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:16:47.051Z] [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T05:16:47.225Z] [BOT] ✅ Posted message: Research Engineer, Production Model Post Training @ anthropic in #ai-jobs
[2026-01-20T05:16:47.225Z] [BOT] ✅ Industry: Research Engineer, Production Model Post Training @ anthropic
[2026-01-20T05:16:47.226Z] [BOT] 💾 Added channel posting: Research Engineer, Production Model Post Training @ anthropic → category channel (1 total channels)
[2026-01-20T05:16:47.226Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T05:16:47.229Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T05:16:47.234Z] [BOT] 📦 Archived 30 jobs to 2026-01.json (30 total in archive)
[2026-01-20T05:16:47.234Z] [BOT] ✅ Archiving complete: 30 archived, 2752 active
[2026-01-20T05:16:47.258Z] [BOT] 💾 Saved posted_jobs.json: 2752 active jobs
[2026-01-20T05:16:47.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:48.760Z] [BOT] 💾 Marked as posted: Research Engineer, Production Model Post Training @ anthropic (instance #1)
[2026-01-20T05:16:48.760Z] [BOT] 💾 BEFORE ARCHIVING: 2753 jobs in database
[2026-01-20T05:16:48.762Z] [BOT] ✅ No jobs to archive (all 2753 jobs within 7-day window)
[2026-01-20T05:16:48.778Z] [BOT] 💾 Saved posted_jobs.json: 2753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:48.778Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Alignment Science" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-20T05:16:48.778Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:16:48.953Z] [BOT] ✅ Posted message: Research Engineer / Scientist, Alignment Science @ anthropic in #ai-jobs
[2026-01-20T05:16:48.953Z] [BOT] ✅ Industry: Research Engineer / Scientist, Alignment Science @ anthropic
[2026-01-20T05:16:48.954Z] [BOT] 💾 Added channel posting: Research Engineer / Scientist, Alignment Science @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2754 jobs in database
[2026-01-20T05:16:48.956Z] [BOT] ✅ No jobs to archive (all 2754 jobs within 7-day window)
[2026-01-20T05:16:48.974Z] [BOT] 💾 Saved posted_jobs.json: 2754 active jobs
[2026-01-20T05:16:48.974Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:50.475Z] [BOT] 💾 Marked as posted: Research Engineer / Scientist, Alignment Science @ anthropic (instance #1)
[2026-01-20T05:16:50.475Z] [BOT] 💾 BEFORE ARCHIVING: 2755 jobs in database
[2026-01-20T05:16:50.477Z] [BOT] ✅ No jobs to archive (all 2755 jobs within 7-day window)
[2026-01-20T05:16:50.494Z] [BOT] 💾 Saved posted_jobs.json: 2755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:50.494Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Biology & Life Sciences" @ anthropic
[2026-01-20T05:16:50.494Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:16:50.814Z] [BOT] ✅ Posted message: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #ai-jobs
  ✅ Industry: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic
[2026-01-20T05:16:50.814Z] [BOT] 💾 Added channel posting: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic → category channel (1 total channels)
[2026-01-20T05:16:50.815Z] [BOT] 💾 BEFORE ARCHIVING: 2756 jobs in database
[2026-01-20T05:16:50.816Z] [BOT] ✅ No jobs to archive (all 2756 jobs within 7-day window)
[2026-01-20T05:16:50.835Z] [BOT] 💾 Saved posted_jobs.json: 2756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:52.336Z] [BOT] 💾 Marked as posted: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic (instance #1)
[2026-01-20T05:16:52.337Z] [BOT] 💾 BEFORE ARCHIVING: 2757 jobs in database
[2026-01-20T05:16:52.339Z] [BOT] ✅ No jobs to archive (all 2757 jobs within 7-day window)
[2026-01-20T05:16:52.354Z] [BOT] 💾 Saved posted_jobs.json: 2757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:52.355Z] [BOT] 📍 [ROUTING] "Staff Machine Learning Engineer, Virtual Collaborator" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T05:16:52.355Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T05:16:52.508Z] [BOT] ✅ Posted message: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic in #ai-jobs
[2026-01-20T05:16:52.508Z] [BOT] ✅ Industry: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic
[2026-01-20T05:16:52.509Z] [BOT] 💾 Added channel posting: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic → category channel (1 total channels)
[2026-01-20T05:16:52.509Z] [BOT] 💾 BEFORE ARCHIVING: 2758 jobs in database
[2026-01-20T05:16:52.511Z] [BOT] ✅ No jobs to archive (all 2758 jobs within 7-day window)
[2026-01-20T05:16:52.526Z] [BOT] 💾 Saved posted_jobs.json: 2758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:54.027Z] [BOT] 💾 Marked as posted: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic (instance #1)
[2026-01-20T05:16:54.027Z] [BOT] 💾 BEFORE ARCHIVING: 2759 jobs in database
[2026-01-20T05:16:54.029Z] [BOT] ✅ No jobs to archive (all 2759 jobs within 7-day window)
[2026-01-20T05:16:54.044Z] [BOT] 💾 Saved posted_jobs.json: 2759 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:57.045Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-20T05:16:57.045Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Honesty" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T05:16:57.046Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T05:16:57.344Z] [BOT] ✅ Posted message: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #JID_fb739488
[2026-01-20T05:16:57.345Z] [BOT] ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic
[2026-01-20T05:16:57.345Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic → category channel (1 total channels)
[2026-01-20T05:16:57.345Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-20T05:16:57.349Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-20T05:16:57.367Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:58.869Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic (instance #1)
[2026-01-20T05:16:58.869Z] [BOT] 💾 BEFORE ARCHIVING: 2761 jobs in database
[2026-01-20T05:16:58.870Z] [BOT] ✅ No jobs to archive (all 2761 jobs within 7-day window)
[2026-01-20T05:16:58.889Z] [BOT] 💾 Saved posted_jobs.json: 2761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:16:58.890Z] [BOT] 📍 [ROUTING] "Developer Operations Analyst" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-20T05:16:58.890Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T05:16:59.154Z] [BOT] ✅ Posted message: Developer Operations Analyst @ discord in #JID_fb739488
  ✅ Industry: Developer Operations Analyst @ discord
[2026-01-20T05:16:59.155Z] [BOT] 💾 Added channel posting: Developer Operations Analyst @ discord → category channel (1 total channels)
[2026-01-20T05:16:59.155Z] [BOT] 💾 BEFORE ARCHIVING: 2762 jobs in database
[2026-01-20T05:16:59.157Z] [BOT] ✅ No jobs to archive (all 2762 jobs within 7-day window)
[2026-01-20T05:16:59.174Z] [BOT] 💾 Saved posted_jobs.json: 2762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:00.675Z] [BOT] 💾 Marked as posted: Developer Operations Analyst @ discord (instance #1)
[2026-01-20T05:17:00.675Z] [BOT] 💾 BEFORE ARCHIVING: 2763 jobs in database
[2026-01-20T05:17:00.677Z] [BOT] ✅ No jobs to archive (all 2763 jobs within 7-day window)
[2026-01-20T05:17:00.694Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:03.695Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T05:17:03.695Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Alignment Finetuning" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:17:03.890Z] [BOT] ✅ Posted message: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #tech-jobs
[2026-01-20T05:17:03.890Z] [BOT] ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic
[2026-01-20T05:17:03.891Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic → category channel (1 total channels)
[2026-01-20T05:17:03.891Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T05:17:03.893Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T05:17:03.910Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
[2026-01-20T05:17:03.910Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:05.412Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic (instance #1)
[2026-01-20T05:17:05.412Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T05:17:05.414Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T05:17:05.429Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
[2026-01-20T05:17:05.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:05.430Z] [BOT] 📍 [ROUTING] "Performance Engineer, GPU" @ anthropic
[2026-01-20T05:17:05.430Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:17:05.625Z] [BOT] ✅ Posted message: Performance Engineer, GPU @ anthropic in #tech-jobs
[2026-01-20T05:17:05.626Z] [BOT] ✅ Industry: Performance Engineer, GPU @ anthropic
[2026-01-20T05:17:05.626Z] [BOT] 💾 Added channel posting: Performance Engineer, GPU @ anthropic → category channel (1 total channels)
[2026-01-20T05:17:05.626Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T05:17:05.628Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T05:17:05.646Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:07.147Z] [BOT] 💾 Marked as posted: Performance Engineer, GPU @ anthropic (instance #1)
[2026-01-20T05:17:07.147Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T05:17:07.149Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T05:17:07.164Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:07.164Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-20T05:17:07.165Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T05:17:07.399Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #tech-jobs
  ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-20T05:17:07.399Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T05:17:07.401Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T05:17:07.418Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:08.919Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-20T05:17:08.919Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T05:17:08.921Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T05:17:08.940Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
[2026-01-20T05:17:08.940Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T05:17:11.941Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T05:17:11.942Z] [BOT] ⏭️  Skipping duplicate: JID_3d74887a (posted within 7 days)
[2026-01-20T05:17:11.942Z] [BOT] ⏭️  Skipping duplicate: JID_1dd0224e (posted within 7 days)
[2026-01-20T05:17:11.942Z] [BOT] ⏭️  Skipping duplicate: JID_eda3b2a4 (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_2e448c55 (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_19245b78 (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_8eaf89fb (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_a093879d (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_68539aa3 (posted within 7 days)
[2026-01-20T05:17:11.943Z] [BOT] ⏭️  Skipping duplicate: JID_da25f3c9 (posted within 7 days)
[2026-01-20T05:17:12.049Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[2026-01-20T05:17:12.229Z] [BOT] ✅ Saved pending queue: 2811 total (2791 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-20T05:17:12.229Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T05:17:12.304Z] [BOT] 📂 Loaded 5283 existing routing entries
[2026-01-20T05:17:12.376Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-20T05:17:12.376Z] [BOT] Total entries: 5292
   Timestamp: 2026-01-20T05:17:12.353Z
[2026-01-20T05:17:12.376Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T05:17:12.376Z] [BOT] Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-20T05:17:12.377Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 3
   Top channels:
[2026-01-20T05:17:12.377Z] [BOT] 1. #ai-jobs: 4 posts
     2. #tech-jobs: 3 posts
     3. #JID_fb739488: 2 posts
[2026-01-20T05:17:12.377Z] [BOT] [STATS] Channel stats saved
[2026-01-20T05:17:14.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*