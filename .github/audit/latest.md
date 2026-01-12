# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T18:28:16.967Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 11
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T18:27:33.582Z] ========================================
[2026-01-12T18:27:33.583Z] Discord Bot Execution Log
[2026-01-12T18:27:33.583Z] Environment: GitHub Actions
[2026-01-12T18:27:33.584Z] Node Version: v20.19.6
[2026-01-12T18:27:33.584Z] ========================================
[2026-01-12T18:27:33.584Z] Environment Variables Check:
[2026-01-12T18:27:33.584Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T18:27:33.584Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.584Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T18:27:33.584Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T18:27:33.584Z] 
Multi-Channel Configuration:
[2026-01-12T18:27:33.584Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.584Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.584Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T18:27:33.585Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T18:27:33.585Z] 
Data Files Check:
[2026-01-12T18:27:33.586Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166551 bytes)
[2026-01-12T18:27:33.588Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 226499 bytes)
[2026-01-12T18:27:33.588Z] 
========================================
[2026-01-12T18:27:33.588Z] Starting Enhanced Discord Bot...
[2026-01-12T18:27:33.588Z] ========================================
[2026-01-12T18:27:34.096Z] [BOT] ✅ Loaded V2 database: 399 jobs
[2026-01-12T18:27:34.483Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T18:27:34.484Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T18:27:34.484Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T18:27:34.592Z] [BOT] ✅ Loaded pending queue: 2664 total (2644 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer, Machine Learning (Safety) at discord
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T18:27:34.593Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-12T18:27:34.593Z] [BOT] ⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
⏭️  Skipping duplicate: JID_fedccf21 (posted within 7 days)
⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
[2026-01-12T18:27:34.593Z] [BOT] ⏭️  Skipping duplicate: JID_d5d07e23 (posted within 7 days)
⏭️ Skipping already posted: Account Executive, Embedded Finance at brex
[2026-01-12T18:27:34.594Z] [BOT] ⏭️  Skipping duplicate: JID_13d998db-i_r106463-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RELX
⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
[2026-01-12T18:27:34.594Z] [BOT] ⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T18:27:34.594Z] [BOT] ⏭️  Skipping duplicate: JID_6143f1ff (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_4b93d4f9 (posted within 7 days)
⏭️ Skipping already posted: Legal Counsel, Audiobook Licensing at spotify
⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-12T18:27:34.594Z] [BOT] ⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
📬 Found 9 new jobs (11 already posted)...
[2026-01-12T18:27:34.594Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2026-01-12T18:27:34.595Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-12T18:27:34.595Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-12T18:27:34.595Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Client Partner, Large Customer Sales (CPG) @ reddit: chicago, new york
[2026-01-12T18:27:34.595Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T18:27:34.600Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-12T18:27:34.600Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Machine Learning (Safety)" @ discord
[2026-01-12T18:27:34.600Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-12T18:27:34.605Z] [BOT ERROR] (node:2698) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T18:27:34.780Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Machine Learning (Safety) @ discord in #🤖・ai-jobs
[2026-01-12T18:27:34.780Z] [BOT] ✅ Industry: Senior Software Engineer, Machine Learning (Safety) @ discord
[2026-01-12T18:27:36.437Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Machine Learning (Safety) @ discord in #🌉・san-francisco
[2026-01-12T18:27:36.438Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T18:27:37.939Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Machine Learning (Safety) @ discord (instance #1)
[2026-01-12T18:27:37.939Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2026-01-12T18:27:37.940Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T18:27:37.945Z] [BOT] 📦 Archived 16 jobs to 2026-01.json (16 total in archive)
[2026-01-12T18:27:37.945Z] [BOT] ✅ Archiving complete: 16 archived, 384 active
[2026-01-12T18:27:37.948Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:37.949Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (CPG)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-12T18:27:37.949Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T18:27:38.317Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (CPG) @ reddit in #🤖・ai-jobs
[2026-01-12T18:27:38.317Z] [BOT] ✅ Industry: Senior Client Partner, Large Customer Sales (CPG) @ reddit
[2026-01-12T18:27:40.152Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (CPG) @ reddit in #🌆・chicago
[2026-01-12T18:27:40.152Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-12T18:27:41.653Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-12T18:27:41.653Z] [BOT] 💾 BEFORE ARCHIVING: 385 jobs in database
[2026-01-12T18:27:41.654Z] [BOT] ✅ No jobs to archive (all 385 jobs within 7-day window)
[2026-01-12T18:27:41.657Z] [BOT] 💾 Saved posted_jobs.json: 385 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:41.657Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (CPG) @ reddit (instance #1)
[2026-01-12T18:27:41.657Z] [BOT] 💾 BEFORE ARCHIVING: 386 jobs in database
[2026-01-12T18:27:41.657Z] [BOT] ✅ No jobs to archive (all 386 jobs within 7-day window)
[2026-01-12T18:27:41.660Z] [BOT] 💾 Saved posted_jobs.json: 386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:41.661Z] [BOT] 📍 [ROUTING] "Solutions Architect, Enterprise Industries" @ anthropic
[2026-01-12T18:27:41.661Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T18:27:41.661Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-12T18:27:41.979Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Enterprise Industries @ anthropic in #🤖・ai-jobs
[2026-01-12T18:27:41.979Z] [BOT] ✅ Industry: Solutions Architect, Enterprise Industries @ anthropic
[2026-01-12T18:27:44.198Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Enterprise Industries @ anthropic in #🌉・san-francisco
[2026-01-12T18:27:44.198Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T18:27:45.699Z] [BOT] 💾 Marked as posted: Solutions Architect, Enterprise Industries @ anthropic (instance #1)
[2026-01-12T18:27:45.699Z] [BOT] 💾 BEFORE ARCHIVING: 387 jobs in database
[2026-01-12T18:27:45.700Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-12T18:27:45.705Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-12T18:27:45.705Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:48.706Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T18:27:48.707Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Phoenix" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T18:27:48.915Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), Phoenix @ verkada in #💲・sales-jobs
[2026-01-12T18:27:48.916Z] [BOT] ✅ Industry: Sales Development Representative (AAE), Phoenix @ verkada
[2026-01-12T18:27:50.419Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Phoenix @ verkada (instance #1)
[2026-01-12T18:27:50.419Z] [BOT] 💾 BEFORE ARCHIVING: 388 jobs in database
[2026-01-12T18:27:50.419Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2026-01-12T18:27:50.425Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
[2026-01-12T18:27:50.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:53.426Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T18:27:53.427Z] [BOT] 📍 [ROUTING] "Research Engineer, Data Ingestion" @ anthropic
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:27:53.650Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Data Ingestion @ anthropic in #💻・tech-jobs
[2026-01-12T18:27:53.651Z] [BOT] ✅ Industry: Research Engineer, Data Ingestion @ anthropic
[2026-01-12T18:27:55.356Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Data Ingestion @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:27:56.857Z] [BOT] 💾 Marked as posted: Research Engineer, Data Ingestion @ anthropic (instance #1)
[2026-01-12T18:27:56.857Z] [BOT] 💾 BEFORE ARCHIVING: 389 jobs in database
[2026-01-12T18:27:56.858Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2026-01-12T18:27:56.861Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
[2026-01-12T18:27:56.861Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:27:56.862Z] [BOT] 📍 [ROUTING] "Security Software Engineer, D&R Platform" @ anthropic
[2026-01-12T18:27:56.862Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:27:57.144Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer, D&R Platform @ anthropic in #💻・tech-jobs
  ✅ Industry: Security Software Engineer, D&R Platform @ anthropic
[2026-01-12T18:27:59.114Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer, D&R Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:28:00.615Z] [BOT] 💾 Marked as posted: Security Software Engineer, D&R Platform @ anthropic (instance #1)
[2026-01-12T18:28:00.615Z] [BOT] 💾 BEFORE ARCHIVING: 390 jobs in database
[2026-01-12T18:28:00.616Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2026-01-12T18:28:00.620Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
[2026-01-12T18:28:00.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:28:00.621Z] [BOT] 📍 [ROUTING] "Engineering Manager I - Cyber Threat Intelligence" @ datadog
[2026-01-12T18:28:00.621Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:28:01.005Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager I - Cyber Threat Intelligence @ datadog in #💻・tech-jobs
  ✅ Industry: Engineering Manager I - Cyber Threat Intelligence @ datadog
[2026-01-12T18:28:02.726Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager I - Cyber Threat Intelligence @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T18:28:04.227Z] [BOT] 💾 Marked as posted: Engineering Manager I - Cyber Threat Intelligence @ datadog (instance #1)
[2026-01-12T18:28:04.228Z] [BOT] 💾 BEFORE ARCHIVING: 391 jobs in database
[2026-01-12T18:28:04.228Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2026-01-12T18:28:04.233Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2026-01-12T18:28:04.233Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:28:07.234Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T18:28:07.234Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager (Public Sector)" @ datadog
[2026-01-12T18:28:07.234Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T18:28:07.457Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager (Public Sector) @ datadog in #📣・marketing-jobs
[2026-01-12T18:28:07.457Z] [BOT] ✅ Industry: Partner Marketing Manager (Public Sector) @ datadog
[2026-01-12T18:28:09.380Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager (Public Sector) @ datadog in #💻・remote-usa
[2026-01-12T18:28:09.380Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T18:28:10.881Z] [BOT] 💾 Marked as posted: Partner Marketing Manager (Public Sector) @ datadog (instance #1)
[2026-01-12T18:28:10.881Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2026-01-12T18:28:10.881Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-12T18:28:10.886Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2026-01-12T18:28:10.886Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:28:13.886Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_ac320815 (posted within 7 days)
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_757842d4 (posted within 7 days)
⏭️  Skipping duplicate: JID_f905c4bf (posted within 7 days)
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_f05e0595 (posted within 7 days)
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_3a2e117d (posted within 7 days)
⏭️  Skipping duplicate: JID_10893c2a (posted within 7 days)
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_d535d200 (posted within 7 days)
[2026-01-12T18:28:13.887Z] [BOT] ⏭️  Skipping duplicate: JID_7e8e9e95 (posted within 7 days)
[2026-01-12T18:28:14.017Z] [BOT] ✅ Loaded pending queue: 2664 total (2644 pending, 20 enriched, 0 posted)
[2026-01-12T18:28:14.171Z] [BOT] ✅ Saved pending queue: 2664 total (2644 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-12T18:28:14.171Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T18:28:14.223Z] [BOT] 📂 Loaded 2574 existing routing entries
[2026-01-12T18:28:14.278Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2582
   Timestamp: 2026-01-12T18:28:14.267Z
[2026-01-12T18:28:14.278Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T18:28:14.278Z] [BOT] Total attempts: 26
   Successful: 15
   Failed: 0
   Skipped: 11
[2026-01-12T18:28:14.279Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 8
   Top channels:
[2026-01-12T18:28:14.279Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-12T18:28:14.279Z] [BOT] 3. #💻・tech-jobs: 3 posts
     4. #🌆・chicago: 1 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-12T18:28:14.279Z] [BOT] [STATS] Channel stats saved
[2026-01-12T18:28:16.304Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2698) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*