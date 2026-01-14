# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T21:07:55.446Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T21:07:09.389Z] ========================================
[2026-01-14T21:07:09.391Z] Discord Bot Execution Log
[2026-01-14T21:07:09.391Z] Environment: GitHub Actions
[2026-01-14T21:07:09.391Z] Node Version: v20.19.6
[2026-01-14T21:07:09.391Z] ========================================
[2026-01-14T21:07:09.391Z] Environment Variables Check:
[2026-01-14T21:07:09.392Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T21:07:09.392Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T21:07:09.392Z] 
Multi-Channel Configuration:
[2026-01-14T21:07:09.392Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.392Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.393Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.393Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.393Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T21:07:09.393Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T21:07:09.393Z] 
Data Files Check:
[2026-01-14T21:07:09.394Z] .github/data/new_jobs.json: ✅ Exists (10 items, 201415 bytes)
[2026-01-14T21:07:09.400Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 761938 bytes)
[2026-01-14T21:07:09.400Z] 
========================================
[2026-01-14T21:07:09.400Z] Starting Enhanced Discord Bot...
[2026-01-14T21:07:09.400Z] ========================================
[2026-01-14T21:07:09.924Z] [BOT] ✅ Loaded V2 database: 1430 jobs
[2026-01-14T21:07:10.384Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T21:07:10.385Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T21:07:10.385Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T21:07:10.495Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Operations Manager, Research Product  at anthropic
[2026-01-14T21:07:10.497Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T21:07:10.498Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T21:07:10.498Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T21:07:10.499Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T21:07:10.499Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T21:07:10.503Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T21:07:10.504Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Research Product " @ anthropic
[2026-01-14T21:07:10.504Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T21:07:10.522Z] [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T21:07:10.957Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Research Product  @ anthropic in #💲・sales-jobs
[2026-01-14T21:07:10.957Z] [BOT] ✅ Industry: Product Operations Manager, Research Product  @ anthropic
[2026-01-14T21:07:12.640Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Research Product  @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:12.640Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:14.141Z] [BOT] 💾 Marked as posted: Product Operations Manager, Research Product  @ anthropic (instance #1)
[2026-01-14T21:07:14.141Z] [BOT] 💾 BEFORE ARCHIVING: 1431 jobs in database
[2026-01-14T21:07:14.142Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T21:07:14.147Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 1429 active
[2026-01-14T21:07:14.160Z] [BOT] 💾 Saved posted_jobs.json: 1429 active jobs
[2026-01-14T21:07:14.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:14.160Z] [BOT] 📍 [ROUTING] "Product Support Manager" @ anthropic
[2026-01-14T21:07:14.160Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T21:07:14.301Z] [BOT] ✅ Created forum post: 🏢 Product Support Manager @ anthropic in #💲・sales-jobs
[2026-01-14T21:07:14.301Z] [BOT] ✅ Industry: Product Support Manager @ anthropic
[2026-01-14T21:07:16.360Z] [BOT] ✅ Created forum post: 🏢 Product Support Manager @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:16.360Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:17.861Z] [BOT] 💾 Marked as posted: Product Support Manager @ anthropic (instance #1)
[2026-01-14T21:07:17.862Z] [BOT] 💾 BEFORE ARCHIVING: 1430 jobs in database
[2026-01-14T21:07:17.863Z] [BOT] ✅ No jobs to archive (all 1430 jobs within 7-day window)
[2026-01-14T21:07:17.871Z] [BOT] 💾 Saved posted_jobs.json: 1430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:17.872Z] [BOT] 📍 [ROUTING] "Product Support Specialist" @ anthropic
[2026-01-14T21:07:17.872Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T21:07:18.047Z] [BOT] ✅ Created forum post: 🏢 Product Support Specialist @ anthropic in #💲・sales-jobs
[2026-01-14T21:07:18.047Z] [BOT] ✅ Industry: Product Support Specialist @ anthropic
[2026-01-14T21:07:19.743Z] [BOT] ✅ Created forum post: 🏢 Product Support Specialist @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:19.743Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:21.245Z] [BOT] 💾 Marked as posted: Product Support Specialist @ anthropic (instance #1)
[2026-01-14T21:07:21.245Z] [BOT] 💾 BEFORE ARCHIVING: 1431 jobs in database
[2026-01-14T21:07:21.246Z] [BOT] ✅ No jobs to archive (all 1431 jobs within 7-day window)
[2026-01-14T21:07:21.257Z] [BOT] 💾 Saved posted_jobs.json: 1431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:24.256Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-14T21:07:24.257Z] [BOT] 📍 [ROUTING] "Recruiter, AI Research" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:07:24.258Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-14T21:07:24.576Z] [BOT] ✅ Created forum post: 🏢 Recruiter, AI Research @ anthropic in #🤖・ai-jobs
  ✅ Industry: Recruiter, AI Research @ anthropic
[2026-01-14T21:07:26.383Z] [BOT] ✅ Created forum post: 🏢 Recruiter, AI Research @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:26.383Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:27.885Z] [BOT] 💾 Marked as posted: Recruiter, AI Research @ anthropic (instance #1)
[2026-01-14T21:07:27.885Z] [BOT] 💾 BEFORE ARCHIVING: 1432 jobs in database
[2026-01-14T21:07:27.887Z] [BOT] ✅ No jobs to archive (all 1432 jobs within 7-day window)
[2026-01-14T21:07:27.903Z] [BOT] 💾 Saved posted_jobs.json: 1432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:27.904Z] [BOT] 📍 [ROUTING] "Research Engineer, Interpretability" @ anthropic
[2026-01-14T21:07:27.904Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:07:28.354Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Interpretability @ anthropic in #🤖・ai-jobs
[2026-01-14T21:07:28.354Z] [BOT] ✅ Industry: Research Engineer, Interpretability @ anthropic
[2026-01-14T21:07:30.046Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Interpretability @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:30.047Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:31.547Z] [BOT] 💾 Marked as posted: Research Engineer, Interpretability @ anthropic (instance #1)
[2026-01-14T21:07:31.547Z] [BOT] 💾 BEFORE ARCHIVING: 1433 jobs in database
[2026-01-14T21:07:31.548Z] [BOT] ✅ No jobs to archive (all 1433 jobs within 7-day window)
[2026-01-14T21:07:31.559Z] [BOT] 💾 Saved posted_jobs.json: 1433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:31.560Z] [BOT] 📍 [ROUTING] "Research Engineer, Model Evaluations" @ anthropic
[2026-01-14T21:07:31.560Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:07:31.728Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Model Evaluations @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Model Evaluations @ anthropic
[2026-01-14T21:07:33.396Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Model Evaluations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:34.897Z] [BOT] 💾 Marked as posted: Research Engineer, Model Evaluations @ anthropic (instance #1)
[2026-01-14T21:07:34.897Z] [BOT] 💾 BEFORE ARCHIVING: 1434 jobs in database
[2026-01-14T21:07:34.899Z] [BOT] ✅ No jobs to archive (all 1434 jobs within 7-day window)
[2026-01-14T21:07:34.908Z] [BOT] 💾 Saved posted_jobs.json: 1434 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:34.909Z] [BOT] 📍 [ROUTING] "Research Engineer, Pretraining Scaling" @ anthropic
[2026-01-14T21:07:34.909Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:07:35.239Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pretraining Scaling @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Pretraining Scaling @ anthropic
[2026-01-14T21:07:36.928Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pretraining Scaling @ anthropic in #🌉・san-francisco
[2026-01-14T21:07:36.928Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:38.428Z] [BOT] 💾 Marked as posted: Research Engineer, Pretraining Scaling @ anthropic (instance #1)
[2026-01-14T21:07:38.428Z] [BOT] 💾 BEFORE ARCHIVING: 1435 jobs in database
[2026-01-14T21:07:38.429Z] [BOT] ✅ No jobs to archive (all 1435 jobs within 7-day window)
[2026-01-14T21:07:38.439Z] [BOT] 💾 Saved posted_jobs.json: 1435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:38.439Z] [BOT] 📍 [ROUTING] "Research Scientist, Interpretability" @ anthropic
[2026-01-14T21:07:38.439Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:07:38.983Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Interpretability @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Scientist, Interpretability @ anthropic
[2026-01-14T21:07:40.659Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Interpretability @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:42.160Z] [BOT] 💾 Marked as posted: Research Scientist, Interpretability @ anthropic (instance #1)
[2026-01-14T21:07:42.160Z] [BOT] 💾 BEFORE ARCHIVING: 1436 jobs in database
[2026-01-14T21:07:42.161Z] [BOT] ✅ No jobs to archive (all 1436 jobs within 7-day window)
[2026-01-14T21:07:42.170Z] [BOT] 💾 Saved posted_jobs.json: 1436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:42.170Z] [BOT] 📍 [ROUTING] "Senior+ Software Engineer, Research Tools" @ anthropic
[2026-01-14T21:07:42.170Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:07:42.170Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:07:42.476Z] [BOT] ✅ Created forum post: 🏢 Senior+ Software Engineer, Research Tools @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior+ Software Engineer, Research Tools @ anthropic
[2026-01-14T21:07:44.243Z] [BOT] ✅ Created forum post: 🏢 Senior+ Software Engineer, Research Tools @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:45.744Z] [BOT] 💾 Marked as posted: Senior+ Software Engineer, Research Tools @ anthropic (instance #1)
[2026-01-14T21:07:45.744Z] [BOT] 💾 BEFORE ARCHIVING: 1437 jobs in database
[2026-01-14T21:07:45.745Z] [BOT] ✅ No jobs to archive (all 1437 jobs within 7-day window)
[2026-01-14T21:07:45.754Z] [BOT] 💾 Saved posted_jobs.json: 1437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:45.754Z] [BOT] 📍 [ROUTING] "Senior/Staff Software Engineer, Inference" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T21:07:45.755Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:07:46.121Z] [BOT] ✅ Created forum post: 🏢 Senior/Staff Software Engineer, Inference @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior/Staff Software Engineer, Inference @ anthropic
[2026-01-14T21:07:47.815Z] [BOT] ✅ Created forum post: 🏢 Senior/Staff Software Engineer, Inference @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:07:49.315Z] [BOT] 💾 Marked as posted: Senior/Staff Software Engineer, Inference @ anthropic (instance #1)
[2026-01-14T21:07:49.315Z] [BOT] 💾 BEFORE ARCHIVING: 1438 jobs in database
[2026-01-14T21:07:49.316Z] [BOT] ✅ No jobs to archive (all 1438 jobs within 7-day window)
[2026-01-14T21:07:49.325Z] [BOT] 💾 Saved posted_jobs.json: 1438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:07:52.326Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T21:07:52.327Z] [BOT] ⏭️  Skipping duplicate: JID_7e334b6d (posted within 7 days)
[2026-01-14T21:07:52.327Z] [BOT] ⏭️  Skipping duplicate: JID_911014cd (posted within 7 days)
⏭️  Skipping duplicate: JID_4e442941 (posted within 7 days)
⏭️  Skipping duplicate: JID_83451021 (posted within 7 days)
[2026-01-14T21:07:52.327Z] [BOT] ⏭️  Skipping duplicate: JID_73606e35 (posted within 7 days)
[2026-01-14T21:07:52.327Z] [BOT] ⏭️  Skipping duplicate: JID_c0cecaa1 (posted within 7 days)
[2026-01-14T21:07:52.328Z] [BOT] ⏭️  Skipping duplicate: JID_da743159 (posted within 7 days)
⏭️  Skipping duplicate: JID_15566316 (posted within 7 days)
[2026-01-14T21:07:52.328Z] [BOT] ⏭️  Skipping duplicate: JID_90e6f492 (posted within 7 days)
[2026-01-14T21:07:52.328Z] [BOT] ⏭️  Skipping duplicate: JID_5518fc76 (posted within 7 days)
[2026-01-14T21:07:52.461Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T21:07:52.622Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T21:07:52.623Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T21:07:52.678Z] [BOT] 📂 Loaded 3565 existing routing entries
[2026-01-14T21:07:52.741Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-14T21:07:52.741Z] [BOT] New entries: 10
   Total entries: 3575
   Timestamp: 2026-01-14T21:07:52.726Z
[2026-01-14T21:07:52.742Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T21:07:52.742Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T21:07:52.742Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T21:07:52.742Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 7 posts
[2026-01-14T21:07:52.742Z] [BOT] 3. #💲・sales-jobs: 3 posts
[2026-01-14T21:07:52.743Z] [BOT] [STATS] Channel stats saved
[2026-01-14T21:07:54.770Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*