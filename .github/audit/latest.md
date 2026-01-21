# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T13:53:52.297Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T13:53:19.234Z] ========================================
[2026-01-21T13:53:19.236Z] Discord Bot Execution Log
[2026-01-21T13:53:19.236Z] Environment: GitHub Actions
[2026-01-21T13:53:19.236Z] Node Version: v20.19.6
[2026-01-21T13:53:19.236Z] ========================================
[2026-01-21T13:53:19.236Z] Environment Variables Check:
[2026-01-21T13:53:19.236Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T13:53:19.236Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.236Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T13:53:19.236Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T13:53:19.237Z] 
Multi-Channel Configuration:
[2026-01-21T13:53:19.237Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T13:53:19.237Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T13:53:19.237Z] 
Data Files Check:
[2026-01-21T13:53:19.239Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200266 bytes)
[2026-01-21T13:53:19.252Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1985382 bytes)
[2026-01-21T13:53:19.252Z] 
========================================
[2026-01-21T13:53:19.252Z] Starting Enhanced Discord Bot...
[2026-01-21T13:53:19.252Z] ========================================
[2026-01-21T13:53:19.789Z] [BOT] ✅ Loaded V2 database: 3458 jobs
[2026-01-21T13:53:20.305Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T13:53:20.305Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T13:53:20.305Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T13:53:20.419Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engagement Manager, Applied AI at anthropic
[2026-01-21T13:53:20.424Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T13:53:20.424Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T13:53:20.425Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T13:53:20.425Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T13:53:20.425Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T13:53:20.429Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T13:53:20.430Z] [BOT] 📍 [ROUTING] "Engagement Manager, Applied AI" @ anthropic
[2026-01-21T13:53:20.430Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T13:53:20.434Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T13:53:20.742Z] [BOT] ✅ Posted message: Engagement Manager, Applied AI @ anthropic in #ai-jobs
  ✅ Industry: Engagement Manager, Applied AI @ anthropic
[2026-01-21T13:53:20.743Z] [BOT] 💾 Added channel posting: Engagement Manager, Applied AI @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:20.743Z] [BOT] 💾 BEFORE ARCHIVING: 3459 jobs in database
[2026-01-21T13:53:20.746Z] [BOT] ✅ No jobs to archive (all 3459 jobs within 7-day window)
[2026-01-21T13:53:20.771Z] [BOT] 💾 Saved posted_jobs.json: 3459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:22.274Z] [BOT] 💾 Marked as posted: Engagement Manager, Applied AI @ anthropic (instance #1)
[2026-01-21T13:53:22.274Z] [BOT] 💾 BEFORE ARCHIVING: 3460 jobs in database
[2026-01-21T13:53:22.276Z] [BOT] ✅ No jobs to archive (all 3460 jobs within 7-day window)
[2026-01-21T13:53:22.297Z] [BOT] 💾 Saved posted_jobs.json: 3460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:22.297Z] [BOT] 📍 [ROUTING] "Associate Manager, EDD Compliance" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T13:53:22.562Z] [BOT] ✅ Posted message: Associate Manager, EDD Compliance @ coinbase in #ai-jobs
  ✅ Industry: Associate Manager, EDD Compliance @ coinbase
[2026-01-21T13:53:22.563Z] [BOT] 💾 Added channel posting: Associate Manager, EDD Compliance @ coinbase → category channel (1 total channels)
[2026-01-21T13:53:22.563Z] [BOT] 💾 BEFORE ARCHIVING: 3461 jobs in database
[2026-01-21T13:53:22.566Z] [BOT] ✅ No jobs to archive (all 3461 jobs within 7-day window)
[2026-01-21T13:53:22.589Z] [BOT] 💾 Saved posted_jobs.json: 3461 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:24.091Z] [BOT] 💾 Marked as posted: Associate Manager, EDD Compliance @ coinbase (instance #1)
[2026-01-21T13:53:24.091Z] [BOT] 💾 BEFORE ARCHIVING: 3462 jobs in database
[2026-01-21T13:53:24.093Z] [BOT] ✅ No jobs to archive (all 3462 jobs within 7-day window)
[2026-01-21T13:53:24.117Z] [BOT] 💾 Saved posted_jobs.json: 3462 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:24.117Z] [BOT] 📍 [ROUTING] "Associate Manager, Quality Compliance" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T13:53:24.295Z] [BOT] ✅ Posted message: Associate Manager, Quality Compliance @ coinbase in #ai-jobs
  ✅ Industry: Associate Manager, Quality Compliance @ coinbase
[2026-01-21T13:53:24.296Z] [BOT] 💾 Added channel posting: Associate Manager, Quality Compliance @ coinbase → category channel (1 total channels)
[2026-01-21T13:53:24.296Z] [BOT] 💾 BEFORE ARCHIVING: 3463 jobs in database
[2026-01-21T13:53:24.299Z] [BOT] ✅ No jobs to archive (all 3463 jobs within 7-day window)
[2026-01-21T13:53:24.318Z] [BOT] 💾 Saved posted_jobs.json: 3463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:25.820Z] [BOT] 💾 Marked as posted: Associate Manager, Quality Compliance @ coinbase (instance #1)
[2026-01-21T13:53:25.820Z] [BOT] 💾 BEFORE ARCHIVING: 3464 jobs in database
[2026-01-21T13:53:25.822Z] [BOT] ✅ No jobs to archive (all 3464 jobs within 7-day window)
[2026-01-21T13:53:25.842Z] [BOT] 💾 Saved posted_jobs.json: 3464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:25.843Z] [BOT] 📍 [ROUTING] "Staff Red Team Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-21T13:53:25.843Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T13:53:26.013Z] [BOT] ✅ Posted message: Staff Red Team Engineer, Safeguards @ anthropic in #ai-jobs
[2026-01-21T13:53:26.013Z] [BOT] ✅ Industry: Staff Red Team Engineer, Safeguards @ anthropic
[2026-01-21T13:53:26.014Z] [BOT] 💾 Added channel posting: Staff Red Team Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:26.014Z] [BOT] 💾 BEFORE ARCHIVING: 3465 jobs in database
[2026-01-21T13:53:26.016Z] [BOT] ✅ No jobs to archive (all 3465 jobs within 7-day window)
[2026-01-21T13:53:26.036Z] [BOT] 💾 Saved posted_jobs.json: 3465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:27.538Z] [BOT] 💾 Marked as posted: Staff Red Team Engineer, Safeguards @ anthropic (instance #1)
[2026-01-21T13:53:27.538Z] [BOT] 💾 BEFORE ARCHIVING: 3466 jobs in database
[2026-01-21T13:53:27.540Z] [BOT] ✅ No jobs to archive (all 3466 jobs within 7-day window)
[2026-01-21T13:53:27.561Z] [BOT] 💾 Saved posted_jobs.json: 3466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:30.561Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-21T13:53:30.562Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ anthropic
[2026-01-21T13:53:30.562Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T13:53:30.719Z] [BOT] ✅ Posted message: Enterprise Account Executive @ anthropic in #tech-jobs
  ✅ Industry: Enterprise Account Executive @ anthropic
[2026-01-21T13:53:30.720Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:30.720Z] [BOT] 💾 BEFORE ARCHIVING: 3467 jobs in database
[2026-01-21T13:53:30.723Z] [BOT] ✅ No jobs to archive (all 3467 jobs within 7-day window)
[2026-01-21T13:53:30.747Z] [BOT] 💾 Saved posted_jobs.json: 3467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:32.462Z] [BOT] ✅ Posted message: Enterprise Account Executive @ anthropic in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T13:53:32.463Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ anthropic → location channel (2 total channels)
[2026-01-21T13:53:32.463Z] [BOT] 💾 BEFORE ARCHIVING: 3467 jobs in database
[2026-01-21T13:53:32.465Z] [BOT] ✅ No jobs to archive (all 3467 jobs within 7-day window)
[2026-01-21T13:53:32.488Z] [BOT] 💾 Saved posted_jobs.json: 3467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:33.989Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ anthropic (instance #1)
[2026-01-21T13:53:33.989Z] [BOT] 💾 BEFORE ARCHIVING: 3468 jobs in database
[2026-01-21T13:53:33.991Z] [BOT] ✅ No jobs to archive (all 3468 jobs within 7-day window)
[2026-01-21T13:53:34.014Z] [BOT] 💾 Saved posted_jobs.json: 3468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:34.015Z] [BOT] 📍 [ROUTING] "Manager, Strategic Account Executive - Digital Native Sales" @ anthropic
   Category: TECH (default)
[2026-01-21T13:53:34.015Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T13:53:34.207Z] [BOT] ✅ Posted message: Manager, Strategic Account Executive - Digital Native Sales @ anthropic in #tech-jobs
  ✅ Industry: Manager, Strategic Account Executive - Digital Native Sales @ anthropic
[2026-01-21T13:53:34.208Z] [BOT] 💾 Added channel posting: Manager, Strategic Account Executive - Digital Native Sales @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:34.208Z] [BOT] 💾 BEFORE ARCHIVING: 3469 jobs in database
[2026-01-21T13:53:34.211Z] [BOT] ✅ No jobs to archive (all 3469 jobs within 7-day window)
[2026-01-21T13:53:34.231Z] [BOT] 💾 Saved posted_jobs.json: 3469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:35.732Z] [BOT] 💾 Marked as posted: Manager, Strategic Account Executive - Digital Native Sales @ anthropic (instance #1)
[2026-01-21T13:53:35.732Z] [BOT] 💾 BEFORE ARCHIVING: 3470 jobs in database
[2026-01-21T13:53:35.734Z] [BOT] ✅ No jobs to archive (all 3470 jobs within 7-day window)
[2026-01-21T13:53:35.755Z] [BOT] 💾 Saved posted_jobs.json: 3470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:35.756Z] [BOT] 📍 [ROUTING] "Security Engineer, Detection & Response" @ anthropic
[2026-01-21T13:53:35.756Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T13:53:35.907Z] [BOT] ✅ Posted message: Security Engineer, Detection & Response @ anthropic in #tech-jobs
  ✅ Industry: Security Engineer, Detection & Response @ anthropic
[2026-01-21T13:53:35.908Z] [BOT] 💾 Added channel posting: Security Engineer, Detection & Response @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:35.908Z] [BOT] 💾 BEFORE ARCHIVING: 3471 jobs in database
[2026-01-21T13:53:35.910Z] [BOT] ✅ No jobs to archive (all 3471 jobs within 7-day window)
[2026-01-21T13:53:35.930Z] [BOT] 💾 Saved posted_jobs.json: 3471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:37.432Z] [BOT] 💾 Marked as posted: Security Engineer, Detection & Response @ anthropic (instance #1)
[2026-01-21T13:53:37.433Z] [BOT] 💾 BEFORE ARCHIVING: 3472 jobs in database
[2026-01-21T13:53:37.435Z] [BOT] ✅ No jobs to archive (all 3472 jobs within 7-day window)
[2026-01-21T13:53:37.455Z] [BOT] 💾 Saved posted_jobs.json: 3472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:40.456Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-21T13:53:40.456Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Accenture" @ anthropic
[2026-01-21T13:53:40.456Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T13:53:40.784Z] [BOT] ✅ Posted message: Global Partner Lead, Accenture @ anthropic in #finance-jobs
  ✅ Industry: Global Partner Lead, Accenture @ anthropic
[2026-01-21T13:53:40.785Z] [BOT] 💾 Added channel posting: Global Partner Lead, Accenture @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:40.785Z] [BOT] 💾 BEFORE ARCHIVING: 3473 jobs in database
[2026-01-21T13:53:40.787Z] [BOT] ✅ No jobs to archive (all 3473 jobs within 7-day window)
[2026-01-21T13:53:40.807Z] [BOT] 💾 Saved posted_jobs.json: 3473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:42.309Z] [BOT] 💾 Marked as posted: Global Partner Lead, Accenture @ anthropic (instance #1)
[2026-01-21T13:53:42.309Z] [BOT] 💾 BEFORE ARCHIVING: 3474 jobs in database
[2026-01-21T13:53:42.311Z] [BOT] ✅ No jobs to archive (all 3474 jobs within 7-day window)
[2026-01-21T13:53:42.332Z] [BOT] 💾 Saved posted_jobs.json: 3474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:42.332Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Deloitte" @ anthropic
[2026-01-21T13:53:42.332Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T13:53:42.535Z] [BOT] ✅ Posted message: Global Partner Lead, Deloitte @ anthropic in #finance-jobs
[2026-01-21T13:53:42.535Z] [BOT] ✅ Industry: Global Partner Lead, Deloitte @ anthropic
[2026-01-21T13:53:42.536Z] [BOT] 💾 Added channel posting: Global Partner Lead, Deloitte @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:42.536Z] [BOT] 💾 BEFORE ARCHIVING: 3475 jobs in database
[2026-01-21T13:53:42.538Z] [BOT] ✅ No jobs to archive (all 3475 jobs within 7-day window)
[2026-01-21T13:53:42.558Z] [BOT] 💾 Saved posted_jobs.json: 3475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:44.060Z] [BOT] 💾 Marked as posted: Global Partner Lead, Deloitte @ anthropic (instance #1)
[2026-01-21T13:53:44.060Z] [BOT] 💾 BEFORE ARCHIVING: 3476 jobs in database
[2026-01-21T13:53:44.062Z] [BOT] ✅ No jobs to archive (all 3476 jobs within 7-day window)
[2026-01-21T13:53:44.083Z] [BOT] 💾 Saved posted_jobs.json: 3476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:44.083Z] [BOT] 📍 [ROUTING] "Global Partner Sales Manager, Systems Integrators" @ anthropic
[2026-01-21T13:53:44.083Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T13:53:44.677Z] [BOT] ✅ Posted message: Global Partner Sales Manager, Systems Integrators @ anthropic in #finance-jobs
  ✅ Industry: Global Partner Sales Manager, Systems Integrators @ anthropic
[2026-01-21T13:53:44.678Z] [BOT] 💾 Added channel posting: Global Partner Sales Manager, Systems Integrators @ anthropic → category channel (1 total channels)
[2026-01-21T13:53:44.678Z] [BOT] 💾 BEFORE ARCHIVING: 3477 jobs in database
[2026-01-21T13:53:44.680Z] [BOT] ✅ No jobs to archive (all 3477 jobs within 7-day window)
[2026-01-21T13:53:44.700Z] [BOT] 💾 Saved posted_jobs.json: 3477 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:46.201Z] [BOT] 💾 Marked as posted: Global Partner Sales Manager, Systems Integrators @ anthropic (instance #1)
[2026-01-21T13:53:46.201Z] [BOT] 💾 BEFORE ARCHIVING: 3478 jobs in database
[2026-01-21T13:53:46.203Z] [BOT] ✅ No jobs to archive (all 3478 jobs within 7-day window)
[2026-01-21T13:53:46.224Z] [BOT] 💾 Saved posted_jobs.json: 3478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:53:49.223Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T13:53:49.224Z] [BOT] ⏭️  Skipping duplicate: JID_2a8c4251 (posted within 7 days)
[2026-01-21T13:53:49.224Z] [BOT] ⏭️  Skipping duplicate: JID_5dac1616 (posted within 7 days)
[2026-01-21T13:53:49.224Z] [BOT] ⏭️  Skipping duplicate: JID_d3893432 (posted within 7 days)
[2026-01-21T13:53:49.224Z] [BOT] ⏭️  Skipping duplicate: JID_0e05785c (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_827caba2 (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_52ce7fbb (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_9c0c7605 (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_c2eb788e (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_27942dfd (posted within 7 days)
[2026-01-21T13:53:49.225Z] [BOT] ⏭️  Skipping duplicate: JID_c21989ea (posted within 7 days)
[2026-01-21T13:53:49.339Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T13:53:49.506Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T13:53:49.506Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T13:53:49.569Z] [BOT] 📂 Loaded 5905 existing routing entries
[2026-01-21T13:53:49.647Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5915
   Timestamp: 2026-01-21T13:53:49.622Z
[2026-01-21T13:53:49.647Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T13:53:49.647Z] [BOT] Total attempts: 11
   Successful: 11
   Failed: 0
   Skipped: 0
[2026-01-21T13:53:49.648Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T13:53:49.648Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #ai-jobs: 4 posts
[2026-01-21T13:53:49.648Z] [BOT] 2. #tech-jobs: 3 posts
     3. #finance-jobs: 3 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-21T13:53:49.648Z] [BOT] [STATS] Channel stats saved
[2026-01-21T13:53:51.671Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*