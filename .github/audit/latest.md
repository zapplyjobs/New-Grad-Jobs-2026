# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T02:40:00.814Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T02:39:05.522Z] ========================================
[2026-01-18T02:39:05.524Z] Discord Bot Execution Log
[2026-01-18T02:39:05.524Z] Environment: GitHub Actions
[2026-01-18T02:39:05.524Z] Node Version: v20.19.6
[2026-01-18T02:39:05.524Z] ========================================
[2026-01-18T02:39:05.524Z] Environment Variables Check:
[2026-01-18T02:39:05.524Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T02:39:05.524Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.525Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T02:39:05.525Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T02:39:05.525Z] 
Multi-Channel Configuration:
[2026-01-18T02:39:05.525Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.525Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.525Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.525Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.525Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.526Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.526Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.526Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.526Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T02:39:05.526Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T02:39:05.526Z] 
Data Files Check:
[2026-01-18T02:39:05.527Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53138 bytes)
[2026-01-18T02:39:05.535Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1360563 bytes)
[2026-01-18T02:39:05.535Z] 
========================================
[2026-01-18T02:39:05.535Z] Starting Enhanced Discord Bot...
[2026-01-18T02:39:05.535Z] ========================================
[2026-01-18T02:39:06.074Z] [BOT] ✅ Loaded V2 database: 2512 jobs
[2026-01-18T02:39:06.602Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T02:39:06.603Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T02:39:06.603Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T02:39:06.721Z] [BOT] ✅ Loaded pending queue: 2870 total (2850 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Level 0 at Markon
[2026-01-18T02:39:06.724Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T02:39:06.725Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T02:39:06.725Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T02:39:06.726Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T02:39:06.726Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T02:39:06.732Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T02:39:06.732Z] [BOT] 📍 [ROUTING] "Software Engineer Level 0" @ ORG_26f6f1be
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T02:39:06.749Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T02:39:06.914Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Level 0 @ ORG_26f6f1be in #💻・tech-jobs
[2026-01-18T02:39:06.914Z] [BOT] ✅ Industry: Software Engineer Level 0 @ ORG_26f6f1be
[2026-01-18T02:39:08.561Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Level 0 @ ORG_26f6f1be in #💻・remote-usa
[2026-01-18T02:39:08.561Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T02:39:10.063Z] [BOT] 💾 Marked as posted: Software Engineer Level 0 @ ORG_26f6f1be (instance #1)
[2026-01-18T02:39:10.063Z] [BOT] 💾 BEFORE ARCHIVING: 2513 jobs in database
[2026-01-18T02:39:10.065Z] [BOT] ✅ No jobs to archive (all 2513 jobs within 7-day window)
[2026-01-18T02:39:10.086Z] [BOT] 💾 Saved posted_jobs.json: 2513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:10.087Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T02:39:10.483Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #💻・tech-jobs
[2026-01-18T02:39:10.483Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_a731a58c
[2026-01-18T02:39:12.231Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #🌧️・seattle
[2026-01-18T02:39:12.231Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-18T02:39:13.732Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_a731a58c (instance #1)
[2026-01-18T02:39:13.732Z] [BOT] 💾 BEFORE ARCHIVING: 2514 jobs in database
[2026-01-18T02:39:13.734Z] [BOT] ✅ No jobs to archive (all 2514 jobs within 7-day window)
[2026-01-18T02:39:13.748Z] [BOT] 💾 Saved posted_jobs.json: 2514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:13.749Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_a731a58c (instance #1)
[2026-01-18T02:39:13.749Z] [BOT] 💾 BEFORE ARCHIVING: 2515 jobs in database
[2026-01-18T02:39:13.751Z] [BOT] ✅ No jobs to archive (all 2515 jobs within 7-day window)
[2026-01-18T02:39:13.765Z] [BOT] 💾 Saved posted_jobs.json: 2515 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:13.765Z] [BOT] 📍 [ROUTING] "Security Officer" @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-18T02:39:13.765Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T02:39:14.040Z] [BOT] ✅ Created forum post: 🏢 Security Officer @ ORG_3d29dfd3 Johns Riverside Hospital in #💻・tech-jobs
  ✅ Industry: Security Officer @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-18T02:39:15.901Z] [BOT] ✅ Created forum post: 🏢 Security Officer @ ORG_3d29dfd3 Johns Riverside Hospital in #🗽・new-york
[2026-01-18T02:39:15.901Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T02:39:17.402Z] [BOT] 💾 Marked as posted: Security Officer @ ORG_3d29dfd3 Johns Riverside Hospital (instance #1)
[2026-01-18T02:39:17.402Z] [BOT] 💾 BEFORE ARCHIVING: 2516 jobs in database
[2026-01-18T02:39:17.404Z] [BOT] ✅ No jobs to archive (all 2516 jobs within 7-day window)
[2026-01-18T02:39:17.422Z] [BOT] 💾 Saved posted_jobs.json: 2516 active jobs
[2026-01-18T02:39:17.422Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:20.423Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T02:39:20.424Z] [BOT] 📍 [ROUTING] "Associate Analyst Cohort" @ ORG_4451467b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T02:39:20.633Z] [BOT] ✅ Created forum post: 🏢 Associate Analyst Cohort @ ORG_4451467b in #📈・JID_fb739488
[2026-01-18T02:39:20.633Z] [BOT] ✅ Industry: Associate Analyst Cohort @ ORG_4451467b
[2026-01-18T02:39:22.368Z] [BOT] ✅ Created forum post: 🏢 Associate Analyst Cohort @ ORG_4451467b in #🤠・austin
[2026-01-18T02:39:22.368Z] [BOT] ✅ Location: 🤠・austin
[2026-01-18T02:39:23.870Z] [BOT] 💾 Marked as posted: Associate Analyst Cohort @ ORG_4451467b (instance #1)
[2026-01-18T02:39:23.870Z] [BOT] 💾 BEFORE ARCHIVING: 2517 jobs in database
[2026-01-18T02:39:23.872Z] [BOT] ✅ No jobs to archive (all 2517 jobs within 7-day window)
[2026-01-18T02:39:23.888Z] [BOT] 💾 Saved posted_jobs.json: 2517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:26.889Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T02:39:26.889Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise - Figma Weave (New York, United States)" @ figma
   Category: SALES (matched: "sales")
[2026-01-18T02:39:26.890Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T02:39:27.107Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise - Figma Weave (New York, United States) @ figma in #💲・sales-jobs
[2026-01-18T02:39:27.107Z] [BOT] ✅ Industry: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma
[2026-01-18T02:39:29.023Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise - Figma Weave (New York, United States) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T02:39:30.524Z] [BOT] 💾 Marked as posted: Account Executive, Enterprise - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-18T02:39:30.525Z] [BOT] 💾 BEFORE ARCHIVING: 2518 jobs in database
[2026-01-18T02:39:30.526Z] [BOT] ✅ No jobs to archive (all 2518 jobs within 7-day window)
[2026-01-18T02:39:30.542Z] [BOT] 💾 Saved posted_jobs.json: 2518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:33.543Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T02:39:33.544Z] [BOT] 📍 [ROUTING] "Director of AI Engineering Pfizer R&D" @ ORG_977ad75f
[2026-01-18T02:39:33.544Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T02:39:33.911Z] [BOT] ✅ Created forum post: 🏢 Director of AI Engineering Pfizer R&D @ ORG_977ad75f in #🤖・ai-jobs
[2026-01-18T02:39:33.911Z] [BOT] ✅ Industry: Director of AI Engineering Pfizer R&D @ ORG_977ad75f
[2026-01-18T02:39:35.597Z] [BOT] ✅ Created forum post: 🏢 Director of AI Engineering Pfizer R&D @ ORG_977ad75f in #🌧️・seattle
[2026-01-18T02:39:35.597Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-18T02:39:37.097Z] [BOT] 💾 Marked as posted: Director of AI Engineering Pfizer R&D @ ORG_977ad75f (instance #1)
[2026-01-18T02:39:37.097Z] [BOT] 💾 BEFORE ARCHIVING: 2519 jobs in database
[2026-01-18T02:39:37.099Z] [BOT] ✅ No jobs to archive (all 2519 jobs within 7-day window)
[2026-01-18T02:39:37.120Z] [BOT] 💾 Saved posted_jobs.json: 2519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:37.120Z] [BOT] 📍 [ROUTING] "Project Jigglypuff Transcription - English-United States" @ ORG_15236607 by Appen
   Category: AI (matched: "artificial intelligence")
[2026-01-18T02:39:37.120Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T02:39:37.411Z] [BOT] ✅ Created forum post: 🏢 Project Jigglypuff Transcription - English-United States @ ORG_15236607 by Appen in #🤖・ai-jobs
[2026-01-18T02:39:37.412Z] [BOT] ✅ Industry: Project Jigglypuff Transcription - English-United States @ ORG_15236607 by Appen
[2026-01-18T02:39:39.320Z] [BOT] ✅ Created forum post: 🏢 Project Jigglypuff Transcription - English-United States @ ORG_15236607 by Appen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T02:39:40.821Z] [BOT] 💾 Marked as posted: Project Jigglypuff Transcription - English-United States @ ORG_15236607 by Appen (instance #1)
[2026-01-18T02:39:40.822Z] [BOT] 💾 BEFORE ARCHIVING: 2520 jobs in database
[2026-01-18T02:39:40.823Z] [BOT] ✅ No jobs to archive (all 2520 jobs within 7-day window)
[2026-01-18T02:39:40.839Z] [BOT] 💾 Saved posted_jobs.json: 2520 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:43.840Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-18T02:39:43.840Z] [BOT] 📍 [ROUTING] "Early-Career Geologist or Hydrogeologist" @ ORG_77d789fe Consultants
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T02:39:44.237Z] [BOT] ✅ Created forum post: 🏢 Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants in #🩺・healthcare-jobs
  ✅ Industry: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants
[2026-01-18T02:39:45.927Z] [BOT] ✅ Created forum post: 🏢 Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T02:39:47.429Z] [BOT] 💾 Marked as posted: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants (instance #1)
[2026-01-18T02:39:47.429Z] [BOT] 💾 BEFORE ARCHIVING: 2521 jobs in database
[2026-01-18T02:39:47.431Z] [BOT] ✅ No jobs to archive (all 2521 jobs within 7-day window)
[2026-01-18T02:39:47.448Z] [BOT] 💾 Saved posted_jobs.json: 2521 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:47.449Z] [BOT] 📍 [ROUTING] "Call Center Representative" @ ORG_8dfd9000 Partners
[2026-01-18T02:39:47.449Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T02:39:47.679Z] [BOT] ✅ Created forum post: 🏢 Call Center Representative @ ORG_8dfd9000 Partners in #🩺・healthcare-jobs
  ✅ Industry: Call Center Representative @ ORG_8dfd9000 Partners
[2026-01-18T02:39:49.474Z] [BOT] ✅ Created forum post: 🏢 Call Center Representative @ ORG_8dfd9000 Partners in #💻・remote-usa
[2026-01-18T02:39:49.474Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T02:39:50.974Z] [BOT] 💾 Marked as posted: Call Center Representative @ ORG_8dfd9000 Partners (instance #1)
[2026-01-18T02:39:50.974Z] [BOT] 💾 BEFORE ARCHIVING: 2522 jobs in database
[2026-01-18T02:39:50.976Z] [BOT] ✅ No jobs to archive (all 2522 jobs within 7-day window)
[2026-01-18T02:39:50.992Z] [BOT] 💾 Saved posted_jobs.json: 2522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:50.993Z] [BOT] 📍 [ROUTING] "ID Checker" @ Flanigan's Enterprises
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T02:39:51.384Z] [BOT] ✅ Created forum post: 🏢 ID Checker @ Flanigan's Enterprises in #🩺・healthcare-jobs
  ✅ Industry: ID Checker @ Flanigan's Enterprises
[2026-01-18T02:39:53.124Z] [BOT] ✅ Created forum post: 🏢 ID Checker @ Flanigan's Enterprises in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T02:39:54.626Z] [BOT] 💾 Marked as posted: ID Checker @ Flanigan's Enterprises (instance #1)
[2026-01-18T02:39:54.626Z] [BOT] 💾 BEFORE ARCHIVING: 2523 jobs in database
[2026-01-18T02:39:54.628Z] [BOT] ✅ No jobs to archive (all 2523 jobs within 7-day window)
[2026-01-18T02:39:54.642Z] [BOT] 💾 Saved posted_jobs.json: 2523 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T02:39:57.643Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_e8d56a94 (posted within 7 days)
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_fdd0f248 (posted within 7 days)
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_a8619621 (posted within 7 days)
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_50d5ff8b-d_4949810 (posted within 7 days)
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_e95cc55e (posted within 7 days)
[2026-01-18T02:39:57.644Z] [BOT] ⏭️  Skipping duplicate: JID_49811f3d (posted within 7 days)
[2026-01-18T02:39:57.645Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-18T02:39:57.645Z] [BOT] ⏭️  Skipping duplicate: JID_c0b76b96 (posted within 7 days)
[2026-01-18T02:39:57.645Z] [BOT] ⏭️  Skipping duplicate: JID_b8fda95c (posted within 7 days)
[2026-01-18T02:39:57.645Z] [BOT] ⏭️  Skipping duplicate: JID_9e33ad19 (posted within 7 days)
[2026-01-18T02:39:57.764Z] [BOT] ✅ Loaded pending queue: 2870 total (2850 pending, 20 enriched, 0 posted)
[2026-01-18T02:39:57.960Z] [BOT] ✅ Saved pending queue: 2870 total (2850 pending, 10 enriched, 10 posted)
[2026-01-18T02:39:57.960Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T02:39:58.020Z] [BOT] 📂 Loaded 4685 existing routing entries
[2026-01-18T02:39:58.089Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T02:39:58.090Z] [BOT] Total entries: 4695
   Timestamp: 2026-01-18T02:39:58.069Z
[2026-01-18T02:39:58.090Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T02:39:58.090Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-18T02:39:58.090Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-18T02:39:58.091Z] [BOT] 1. #💻・remote-usa: 5 posts
[2026-01-18T02:39:58.091Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #🩺・healthcare-jobs: 3 posts
     4. #🌧️・seattle: 2 posts
     5. #🗽・new-york: 2 posts
[2026-01-18T02:39:58.091Z] [BOT] [STATS] Channel stats saved
[2026-01-18T02:40:00.118Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*