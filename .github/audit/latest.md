# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T05:34:30.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T05:33:58.376Z] ========================================
[2026-01-30T05:33:58.378Z] Discord Bot Execution Log
[2026-01-30T05:33:58.378Z] Environment: GitHub Actions
[2026-01-30T05:33:58.378Z] Node Version: v20.20.0
[2026-01-30T05:33:58.378Z] ========================================
[2026-01-30T05:33:58.378Z] Environment Variables Check:
[2026-01-30T05:33:58.378Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T05:33:58.378Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.378Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T05:33:58.378Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T05:33:58.378Z] 
Multi-Channel Configuration:
[2026-01-30T05:33:58.378Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T05:33:58.379Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T05:33:58.379Z] 
Data Files Check:
[2026-01-30T05:33:58.380Z] .github/data/new_jobs.json: ✅ Exists (10 items, 184846 bytes)
[2026-01-30T05:33:58.390Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1544970 bytes)
[2026-01-30T05:33:58.390Z] 
========================================
[2026-01-30T05:33:58.390Z] Starting Enhanced Discord Bot...
[2026-01-30T05:33:58.390Z] ========================================
[2026-01-30T05:33:58.930Z] [BOT] ✅ Loaded V2 database: 249 jobs
[2026-01-30T05:33:59.558Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T05:33:59.559Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T05:33:59.559Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T05:33:59.688Z] [BOT] ✅ Loaded pending queue: 2920 total (2650 pending, 50 enriched, 220 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T05:33:59.689Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T05:33:59.689Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T05:33:59.694Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T05:33:59.695Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
[2026-01-30T05:33:59.800Z] [BOT] ✅ Loaded pending queue: 2920 total (2650 pending, 50 enriched, 220 posted)
[2026-01-30T05:33:59.981Z] [BOT] ✅ Saved pending queue: 2919 total (2650 pending, 49 enriched, 220 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-30T05:33:59.982Z] [BOT] 📋 After blacklist filter: 47 jobs (1 blacklisted)
📋 After data quality filter: 47 jobs (0 invalid)
[2026-01-30T05:33:59.983Z] [BOT] 📋 After multi-location grouping: 46 unique jobs to post
[2026-01-30T05:33:59.983Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Nonprofit Account Executive @ anthropic: san francisco, ca | new york, new york
[2026-01-30T05:33:59.983Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T05:33:59.987Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T05:33:59.988Z] [BOT] 📍 [ROUTING] "IT Support Engineer" @ anthropic
[2026-01-30T05:33:59.988Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:34:00.005Z] [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T05:34:00.238Z] [BOT] ✅ Posted message: IT Support Engineer @ anthropic in #💻・tech-jobs
[2026-01-30T05:34:00.238Z] [BOT] ✅ Industry: IT Support Engineer @ anthropic
[2026-01-30T05:34:00.239Z] [BOT] 💾 Added channel posting: IT Support Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T05:34:00.239Z] [BOT] 💾 BEFORE MERGE: 250 jobs in memory (cached)
[2026-01-30T05:34:00.245Z] [BOT] ✅ Loaded V2 database: 249 jobs
💾 DISK STATE: 249 jobs on disk
[2026-01-30T05:34:00.245Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=250
[2026-01-30T05:34:00.246Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:00.246Z] [BOT] 💾 AFTER MERGE: 250 jobs (merged disk + memory)
[2026-01-30T05:34:00.247Z] [BOT] ✅ No jobs to archive (all 250 jobs within 7-day window)
[2026-01-30T05:34:00.268Z] [BOT] 💾 Saved posted_jobs.json: 250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:01.769Z] [BOT] 📍 [ROUTING] "IT Systems Engineer" @ anthropic
[2026-01-30T05:34:01.770Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:34:01.980Z] [BOT] ✅ Posted message: IT Systems Engineer @ anthropic in #💻・tech-jobs
[2026-01-30T05:34:01.980Z] [BOT] ✅ Industry: IT Systems Engineer @ anthropic
[2026-01-30T05:34:01.980Z] [BOT] 💾 Added channel posting: IT Systems Engineer @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 251 jobs in memory (cached)
[2026-01-30T05:34:01.986Z] [BOT] ✅ Loaded V2 database: 250 jobs
💾 DISK STATE: 250 jobs on disk
[2026-01-30T05:34:01.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=251
[2026-01-30T05:34:01.987Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 251 jobs (merged disk + memory)
[2026-01-30T05:34:01.987Z] [BOT] ✅ No jobs to archive (all 251 jobs within 7-day window)
[2026-01-30T05:34:02.006Z] [BOT] 💾 Saved posted_jobs.json: 251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:03.507Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive, High Tech" @ anthropic
   Category: TECH (default)
[2026-01-30T05:34:03.507Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:34:03.879Z] [BOT] ✅ Posted message: Mid-Market Account Executive, High Tech @ anthropic in #💻・tech-jobs
[2026-01-30T05:34:03.879Z] [BOT] ✅ Industry: Mid-Market Account Executive, High Tech @ anthropic
[2026-01-30T05:34:03.879Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive, High Tech @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 252 jobs in memory (cached)
[2026-01-30T05:34:03.884Z] [BOT] ✅ Loaded V2 database: 251 jobs
💾 DISK STATE: 251 jobs on disk
[2026-01-30T05:34:03.885Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=252
[2026-01-30T05:34:03.885Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:03.885Z] [BOT] 💾 AFTER MERGE: 252 jobs (merged disk + memory)
[2026-01-30T05:34:03.885Z] [BOT] ✅ No jobs to archive (all 252 jobs within 7-day window)
[2026-01-30T05:34:03.903Z] [BOT] 💾 Saved posted_jobs.json: 252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:05.404Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive, Industries" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:34:05.754Z] [BOT] ✅ Posted message: Mid-Market Account Executive, Industries @ anthropic in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Executive, Industries @ anthropic
[2026-01-30T05:34:05.754Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive, Industries @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 253 jobs in memory (cached)
[2026-01-30T05:34:05.760Z] [BOT] ✅ Loaded V2 database: 252 jobs
💾 DISK STATE: 252 jobs on disk
[2026-01-30T05:34:05.760Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=253
[2026-01-30T05:34:05.761Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 253 jobs (merged disk + memory)
[2026-01-30T05:34:05.761Z] [BOT] ✅ No jobs to archive (all 253 jobs within 7-day window)
[2026-01-30T05:34:05.780Z] [BOT] 💾 Saved posted_jobs.json: 253 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:07.280Z] [BOT] 📍 [ROUTING] "Nonprofit Account Executive" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:34:07.510Z] [BOT] ✅ Posted message: Nonprofit Account Executive @ anthropic in #💻・tech-jobs
  ✅ Industry: Nonprofit Account Executive @ anthropic
[2026-01-30T05:34:07.510Z] [BOT] 💾 Added channel posting: Nonprofit Account Executive @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 254 jobs in memory (cached)
[2026-01-30T05:34:07.516Z] [BOT] ✅ Loaded V2 database: 253 jobs
💾 DISK STATE: 253 jobs on disk
[2026-01-30T05:34:07.516Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=254
[2026-01-30T05:34:07.517Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 254 jobs (merged disk + memory)
[2026-01-30T05:34:07.517Z] [BOT] ✅ No jobs to archive (all 254 jobs within 7-day window)
[2026-01-30T05:34:07.536Z] [BOT] 💾 Saved posted_jobs.json: 254 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:12.038Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T05:34:12.039Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, Research Tools" @ anthropic
[2026-01-30T05:34:12.039Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:34:12.266Z] [BOT] ✅ Posted message: Machine Learning Systems Engineer, Research Tools @ anthropic in #🤖・ai-jobs
  ✅ Industry: Machine Learning Systems Engineer, Research Tools @ anthropic
[2026-01-30T05:34:12.266Z] [BOT] 💾 Added channel posting: Machine Learning Systems Engineer, Research Tools @ anthropic → category channel (1 total channels)
[2026-01-30T05:34:12.266Z] [BOT] 💾 BEFORE MERGE: 255 jobs in memory (cached)
[2026-01-30T05:34:12.275Z] [BOT] ✅ Loaded V2 database: 254 jobs
💾 DISK STATE: 254 jobs on disk
[2026-01-30T05:34:12.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=255
[2026-01-30T05:34:12.276Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:12.277Z] [BOT] 💾 AFTER MERGE: 255 jobs (merged disk + memory)
[2026-01-30T05:34:12.277Z] [BOT] ✅ No jobs to archive (all 255 jobs within 7-day window)
[2026-01-30T05:34:12.299Z] [BOT] 💾 Saved posted_jobs.json: 255 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:13.802Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, RL Engineering" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T05:34:13.802Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:34:14.173Z] [BOT] ✅ Posted message: Machine Learning Systems Engineer, RL Engineering @ anthropic in #🤖・ai-jobs
[2026-01-30T05:34:14.173Z] [BOT] ✅ Industry: Machine Learning Systems Engineer, RL Engineering @ anthropic
[2026-01-30T05:34:14.173Z] [BOT] 💾 Added channel posting: Machine Learning Systems Engineer, RL Engineering @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 256 jobs in memory (cached)
[2026-01-30T05:34:14.178Z] [BOT] ✅ Loaded V2 database: 255 jobs
💾 DISK STATE: 255 jobs on disk
[2026-01-30T05:34:14.178Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=256
[2026-01-30T05:34:14.179Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:14.179Z] [BOT] 💾 AFTER MERGE: 256 jobs (merged disk + memory)
[2026-01-30T05:34:14.179Z] [BOT] ✅ No jobs to archive (all 256 jobs within 7-day window)
[2026-01-30T05:34:14.198Z] [BOT] 💾 Saved posted_jobs.json: 256 active jobs
[2026-01-30T05:34:14.198Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:15.698Z] [BOT] 📍 [ROUTING] "ML Infrastructure Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T05:34:15.699Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:34:15.927Z] [BOT] ✅ Posted message: ML Infrastructure Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: ML Infrastructure Engineer, Safeguards @ anthropic
[2026-01-30T05:34:15.928Z] [BOT] 💾 Added channel posting: ML Infrastructure Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-30T05:34:15.928Z] [BOT] 💾 BEFORE MERGE: 257 jobs in memory (cached)
[2026-01-30T05:34:15.937Z] [BOT] ✅ Loaded V2 database: 256 jobs
💾 DISK STATE: 256 jobs on disk
[2026-01-30T05:34:15.937Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=257
[2026-01-30T05:34:15.937Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:15.937Z] [BOT] 💾 AFTER MERGE: 257 jobs (merged disk + memory)
[2026-01-30T05:34:15.938Z] [BOT] ✅ No jobs to archive (all 257 jobs within 7-day window)
[2026-01-30T05:34:15.954Z] [BOT] 💾 Saved posted_jobs.json: 257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:17.456Z] [BOT] 📍 [ROUTING] "ML/Research Engineer, Safeguards" @ anthropic
[2026-01-30T05:34:17.457Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:34:17.657Z] [BOT] ✅ Posted message: ML/Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: ML/Research Engineer, Safeguards @ anthropic
[2026-01-30T05:34:17.657Z] [BOT] 💾 Added channel posting: ML/Research Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-30T05:34:17.658Z] [BOT] 💾 BEFORE MERGE: 258 jobs in memory (cached)
[2026-01-30T05:34:17.663Z] [BOT] ✅ Loaded V2 database: 257 jobs
💾 DISK STATE: 257 jobs on disk
[2026-01-30T05:34:17.663Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=258
[2026-01-30T05:34:17.664Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 258 jobs (merged disk + memory)
[2026-01-30T05:34:17.664Z] [BOT] ✅ No jobs to archive (all 258 jobs within 7-day window)
[2026-01-30T05:34:17.681Z] [BOT] 💾 Saved posted_jobs.json: 258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:22.183Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T05:34:22.183Z] [BOT] 📍 [ROUTING] "Partner Operations Specialist" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-30T05:34:22.183Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T05:34:22.459Z] [BOT] ✅ Posted message: Partner Operations Specialist @ anthropic in #💰・finance-jobs
  ✅ Industry: Partner Operations Specialist @ anthropic
[2026-01-30T05:34:22.459Z] [BOT] 💾 Added channel posting: Partner Operations Specialist @ anthropic → category channel (1 total channels)
[2026-01-30T05:34:22.459Z] [BOT] 💾 BEFORE MERGE: 259 jobs in memory (cached)
[2026-01-30T05:34:22.466Z] [BOT] ✅ Loaded V2 database: 258 jobs
[2026-01-30T05:34:22.466Z] [BOT] 💾 DISK STATE: 258 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=259
[2026-01-30T05:34:22.467Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:34:22.467Z] [BOT] 💾 AFTER MERGE: 259 jobs (merged disk + memory)
[2026-01-30T05:34:22.468Z] [BOT] ✅ No jobs to archive (all 259 jobs within 7-day window)
[2026-01-30T05:34:22.489Z] [BOT] 💾 Saved posted_jobs.json: 259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:26.991Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T05:34:26.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f14d2fcd85af3789"
[2026-01-30T05:34:26.992Z] [BOT] ⏭️  Skipping duplicate: JID_531047a6 (posted within 7 days)
[2026-01-30T05:34:26.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "292947ae51e6783a"
⏭️  Skipping duplicate: JID_e4ae921c (posted within 7 days)
[2026-01-30T05:34:26.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d8844b0a84b19614"
⏭️  Skipping duplicate: JID_bf081e6e (posted within 7 days)
[2026-01-30T05:34:26.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3b839a976198c7b2"
⏭️  Skipping duplicate: JID_d9b8afd8 (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c5f1da13fa798389"
⏭️  Skipping duplicate: JID_a67399f1 (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2c02cf70519d5424"
⏭️  Skipping duplicate: JID_d1e0fc36 (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9fe3df76129de707"
⏭️  Skipping duplicate: JID_6ef7d85e (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "56ab779cccd121ff"
⏭️  Skipping duplicate: JID_d0e620f0 (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9a8c60ee5e9dfdbf"
⏭️  Skipping duplicate: JID_bd579612 (posted within 7 days)
[2026-01-30T05:34:26.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "16e3939e12c08e95"
⏭️  Skipping duplicate: JID_b606c14e (posted within 7 days)
[2026-01-30T05:34:27.099Z] [BOT] ✅ Loaded pending queue: 2919 total (2650 pending, 49 enriched, 220 posted)
[2026-01-30T05:34:27.298Z] [BOT] ✅ Saved pending queue: 2919 total (2650 pending, 39 enriched, 230 posted)
[2026-01-30T05:34:27.299Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T05:34:27.381Z] [BOT] 📂 Loaded 10311 existing routing entries
[2026-01-30T05:34:27.499Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10321
   Timestamp: 2026-01-30T05:34:27.457Z
[2026-01-30T05:34:27.500Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 13
[2026-01-30T05:34:27.500Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 3
[2026-01-30T05:34:27.500Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-30T05:34:27.500Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-30T05:34:27.500Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 259 jobs in memory (cached)
[2026-01-30T05:34:27.506Z] [BOT] ✅ Loaded V2 database: 259 jobs
[2026-01-30T05:34:27.506Z] [BOT] 💾 DISK STATE: 259 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=259
[2026-01-30T05:34:27.506Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 259 jobs (merged disk + memory)
[2026-01-30T05:34:27.507Z] [BOT] ✅ No jobs to archive (all 259 jobs within 7-day window)
[2026-01-30T05:34:27.524Z] [BOT] 💾 Saved posted_jobs.json: 259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:34:27.524Z] [BOT] ✅ Database saved successfully
[2026-01-30T05:34:29.553Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*