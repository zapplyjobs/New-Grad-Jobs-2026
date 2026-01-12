# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T18:47:51.791Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T18:47:02.915Z] ========================================
[2026-01-12T18:47:02.917Z] Discord Bot Execution Log
[2026-01-12T18:47:02.917Z] Environment: GitHub Actions
[2026-01-12T18:47:02.917Z] Node Version: v20.19.6
[2026-01-12T18:47:02.917Z] ========================================
[2026-01-12T18:47:02.917Z] Environment Variables Check:
[2026-01-12T18:47:02.918Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T18:47:02.918Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T18:47:02.918Z] 
Multi-Channel Configuration:
[2026-01-12T18:47:02.918Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.918Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.919Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.919Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.919Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T18:47:02.919Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T18:47:02.919Z] 
Data Files Check:
[2026-01-12T18:47:02.920Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178569 bytes)
[2026-01-12T18:47:02.922Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 222386 bytes)
[2026-01-12T18:47:02.922Z] 
========================================
[2026-01-12T18:47:02.922Z] Starting Enhanced Discord Bot...
[2026-01-12T18:47:02.922Z] ========================================
[2026-01-12T18:47:03.485Z] [BOT] ✅ Loaded V2 database: 392 jobs
[2026-01-12T18:47:04.125Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T18:47:04.125Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T18:47:04.126Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T18:47:04.232Z] [BOT] ✅ Loaded pending queue: 2645 total (2625 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Client Partner, Large Customer Sales (Alcohol) at reddit
[2026-01-12T18:47:04.234Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T18:47:04.234Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T18:47:04.234Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T18:47:04.235Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-12T18:47:04.235Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T18:47:04.238Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-12T18:47:04.239Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Alcohol)" @ reddit
[2026-01-12T18:47:04.239Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T18:47:04.244Z] [BOT ERROR] (node:2345) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T18:47:04.406Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #🤖・ai-jobs
[2026-01-12T18:47:04.406Z] [BOT] ✅ Industry: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit
[2026-01-12T18:47:06.741Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T18:47:08.242Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit (instance #1)
[2026-01-12T18:47:08.242Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-12T18:47:08.243Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T18:47:08.246Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-12T18:47:08.246Z] [BOT] ✅ Archiving complete: 2 archived, 391 active
[2026-01-12T18:47:08.250Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2026-01-12T18:47:08.250Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:08.250Z] [BOT] 📍 [ROUTING] "Software Engineer, Accelerator Build Infrastructure" @ anthropic
[2026-01-12T18:47:08.251Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T18:47:08.388Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Accelerator Build Infrastructure @ anthropic in #🤖・ai-jobs
[2026-01-12T18:47:08.388Z] [BOT] ✅ Industry: Software Engineer, Accelerator Build Infrastructure @ anthropic
[2026-01-12T18:47:10.263Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Accelerator Build Infrastructure @ anthropic in #🌉・san-francisco
[2026-01-12T18:47:10.263Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:11.763Z] [BOT] 💾 Marked as posted: Software Engineer, Accelerator Build Infrastructure @ anthropic (instance #1)
[2026-01-12T18:47:11.763Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2026-01-12T18:47:11.763Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-12T18:47:11.767Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2026-01-12T18:47:11.767Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:11.767Z] [BOT] 📍 [ROUTING] " Research Engineer / Research Scientist, Tokens" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T18:47:11.767Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T18:47:11.943Z] [BOT] ✅ Created forum post: 🏢  Research Engineer / Research Scientist, Tokens @ anthropic in #🤖・ai-jobs
[2026-01-12T18:47:11.943Z] [BOT] ✅ Industry:  Research Engineer / Research Scientist, Tokens @ anthropic
[2026-01-12T18:47:13.683Z] [BOT] ✅ Created forum post: 🏢  Research Engineer / Research Scientist, Tokens @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:15.184Z] [BOT] 💾 Marked as posted:  Research Engineer / Research Scientist, Tokens @ anthropic (instance #1)
[2026-01-12T18:47:15.184Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-12T18:47:15.184Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2026-01-12T18:47:15.189Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
[2026-01-12T18:47:15.189Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:15.190Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-12T18:47:15.191Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T18:47:15.401Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, ML Acceleration @ anthropic in #🤖・ai-jobs
[2026-01-12T18:47:15.401Z] [BOT] ✅ Industry: Engineering Manager, ML Acceleration @ anthropic
[2026-01-12T18:47:17.247Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, ML Acceleration @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:18.748Z] [BOT] 💾 Marked as posted: Engineering Manager, ML Acceleration @ anthropic (instance #1)
[2026-01-12T18:47:18.748Z] [BOT] 💾 BEFORE ARCHIVING: 394 jobs in database
[2026-01-12T18:47:18.748Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-12T18:47:18.752Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
[2026-01-12T18:47:18.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:18.754Z] [BOT] 📍 [ROUTING] "Senior Research Scientist, Reward Models" @ anthropic
[2026-01-12T18:47:18.754Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T18:47:19.529Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist, Reward Models @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior Research Scientist, Reward Models @ anthropic
[2026-01-12T18:47:21.244Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist, Reward Models @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:22.746Z] [BOT] 💾 Marked as posted: Senior Research Scientist, Reward Models @ anthropic (instance #1)
[2026-01-12T18:47:22.746Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2026-01-12T18:47:22.746Z] [BOT] ✅ No jobs to archive (all 395 jobs within 7-day window)
[2026-01-12T18:47:22.750Z] [BOT] 💾 Saved posted_jobs.json: 395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:22.751Z] [BOT] 📍 [ROUTING] "Staff Infrastructure Engineer, Pre-training" @ anthropic
[2026-01-12T18:47:22.751Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T18:47:23.044Z] [BOT] ✅ Created forum post: 🏢 Staff Infrastructure Engineer, Pre-training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Staff Infrastructure Engineer, Pre-training @ anthropic
[2026-01-12T18:47:24.699Z] [BOT] ✅ Created forum post: 🏢 Staff Infrastructure Engineer, Pre-training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:26.199Z] [BOT] 💾 Marked as posted: Staff Infrastructure Engineer, Pre-training @ anthropic (instance #1)
[2026-01-12T18:47:26.199Z] [BOT] 💾 BEFORE ARCHIVING: 396 jobs in database
[2026-01-12T18:47:26.199Z] [BOT] ✅ No jobs to archive (all 396 jobs within 7-day window)
[2026-01-12T18:47:26.203Z] [BOT] 💾 Saved posted_jobs.json: 396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:26.204Z] [BOT] 📍 [ROUTING] "Research Engineer, Pre-training" @ anthropic
[2026-01-12T18:47:26.204Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T18:47:26.404Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pre-training @ anthropic in #🤖・ai-jobs
[2026-01-12T18:47:26.404Z] [BOT] ✅ Industry: Research Engineer, Pre-training @ anthropic
[2026-01-12T18:47:28.333Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Pre-training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:29.833Z] [BOT] 💾 Marked as posted: Research Engineer, Pre-training @ anthropic (instance #1)
[2026-01-12T18:47:29.833Z] [BOT] 💾 BEFORE ARCHIVING: 397 jobs in database
[2026-01-12T18:47:29.834Z] [BOT] ✅ No jobs to archive (all 397 jobs within 7-day window)
[2026-01-12T18:47:29.838Z] [BOT] 💾 Saved posted_jobs.json: 397 active jobs
[2026-01-12T18:47:29.838Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:32.839Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T18:47:32.839Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Platform" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-12T18:47:32.839Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:47:33.707Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Platform @ anthropic in #💻・tech-jobs
  ✅ Industry: Research Engineer, Reward Models Platform @ anthropic
[2026-01-12T18:47:35.404Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:36.905Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Platform @ anthropic (instance #1)
[2026-01-12T18:47:36.905Z] [BOT] 💾 BEFORE ARCHIVING: 398 jobs in database
[2026-01-12T18:47:36.905Z] [BOT] ✅ No jobs to archive (all 398 jobs within 7-day window)
[2026-01-12T18:47:36.909Z] [BOT] 💾 Saved posted_jobs.json: 398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:36.910Z] [BOT] 📍 [ROUTING] "Research Engineer, Discovery" @ anthropic
[2026-01-12T18:47:36.910Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:47:37.443Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Discovery @ anthropic in #💻・tech-jobs
  ✅ Industry: Research Engineer, Discovery @ anthropic
[2026-01-12T18:47:40.893Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Discovery @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:42.394Z] [BOT] 💾 Marked as posted: Research Engineer, Discovery @ anthropic (instance #1)
[2026-01-12T18:47:42.394Z] [BOT] 💾 BEFORE ARCHIVING: 399 jobs in database
[2026-01-12T18:47:42.394Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-12T18:47:42.399Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
[2026-01-12T18:47:42.399Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:42.399Z] [BOT] 📍 [ROUTING] "Staff Research Engineer, Discovery Team" @ anthropic
[2026-01-12T18:47:42.399Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T18:47:42.577Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer, Discovery Team @ anthropic in #💻・tech-jobs
[2026-01-12T18:47:42.578Z] [BOT] ✅ Industry: Staff Research Engineer, Discovery Team @ anthropic
[2026-01-12T18:47:44.246Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer, Discovery Team @ anthropic in #🌉・san-francisco
[2026-01-12T18:47:44.246Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T18:47:45.747Z] [BOT] 💾 Marked as posted: Staff Research Engineer, Discovery Team @ anthropic (instance #1)
[2026-01-12T18:47:45.747Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2026-01-12T18:47:45.747Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2026-01-12T18:47:45.751Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2026-01-12T18:47:45.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T18:47:48.753Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_eb8e81ec (posted within 7 days)
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_00920064 (posted within 7 days)
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_8b67b0cc (posted within 7 days)
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_8721beb5 (posted within 7 days)
⏭️  Skipping duplicate: JID_11f66bd4 (posted within 7 days)
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_96879384 (posted within 7 days)
⏭️  Skipping duplicate: JID_ed8a4c29 (posted within 7 days)
[2026-01-12T18:47:48.753Z] [BOT] ⏭️  Skipping duplicate: JID_f9915154 (posted within 7 days)
[2026-01-12T18:47:48.754Z] [BOT] ⏭️  Skipping duplicate: JID_9237e4ff (posted within 7 days)
[2026-01-12T18:47:48.754Z] [BOT] ⏭️  Skipping duplicate: JID_b9aceaaa (posted within 7 days)
[2026-01-12T18:47:48.866Z] [BOT] ✅ Loaded pending queue: 2645 total (2625 pending, 20 enriched, 0 posted)
[2026-01-12T18:47:49.026Z] [BOT] ✅ Saved pending queue: 2645 total (2625 pending, 10 enriched, 10 posted)
[2026-01-12T18:47:49.026Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T18:47:49.076Z] [BOT] 📂 Loaded 2582 existing routing entries
[2026-01-12T18:47:49.130Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2592
   Timestamp: 2026-01-12T18:47:49.119Z
[2026-01-12T18:47:49.130Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 20
[2026-01-12T18:47:49.130Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T18:47:49.131Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T18:47:49.131Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
[2026-01-12T18:47:49.131Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 7 posts
     3. #💻・tech-jobs: 3 posts
[2026-01-12T18:47:49.131Z] [BOT] 4. #🗽・new-york: 1 posts
[2026-01-12T18:47:49.131Z] [BOT] [STATS] Channel stats saved
[2026-01-12T18:47:51.157Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2345) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*