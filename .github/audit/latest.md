# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T19:11:38.992Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T19:10:44.164Z] ========================================
[2026-01-12T19:10:44.166Z] Discord Bot Execution Log
[2026-01-12T19:10:44.166Z] Environment: GitHub Actions
[2026-01-12T19:10:44.166Z] Node Version: v20.19.6
[2026-01-12T19:10:44.166Z] ========================================
[2026-01-12T19:10:44.166Z] Environment Variables Check:
[2026-01-12T19:10:44.166Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T19:10:44.166Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.166Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T19:10:44.167Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T19:10:44.167Z] 
Multi-Channel Configuration:
[2026-01-12T19:10:44.167Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T19:10:44.167Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T19:10:44.168Z] 
Data Files Check:
[2026-01-12T19:10:44.169Z] .github/data/new_jobs.json: ✅ Exists (10 items, 184027 bytes)
[2026-01-12T19:10:44.171Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 231089 bytes)
[2026-01-12T19:10:44.171Z] 
========================================
[2026-01-12T19:10:44.171Z] Starting Enhanced Discord Bot...
[2026-01-12T19:10:44.171Z] ========================================
[2026-01-12T19:10:44.683Z] [BOT] ✅ Loaded V2 database: 409 jobs
[2026-01-12T19:10:45.364Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T19:10:45.365Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T19:10:45.365Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T19:10:45.473Z] [BOT] ✅ Loaded pending queue: 2651 total (2631 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Systems Engineer, RL Engineering at anthropic
[2026-01-12T19:10:45.475Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T19:10:45.475Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T19:10:45.476Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T19:10:45.476Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-12T19:10:45.477Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T19:10:45.480Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-12T19:10:45.481Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, RL Engineering" @ anthropic
[2026-01-12T19:10:45.481Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:10:45.486Z] [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T19:10:48.406Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, RL Engineering @ anthropic in #🤖・ai-jobs
[2026-01-12T19:10:48.406Z] [BOT] ✅ Industry: Machine Learning Systems Engineer, RL Engineering @ anthropic
[2026-01-12T19:10:50.114Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, RL Engineering @ anthropic in #🌉・san-francisco
[2026-01-12T19:10:50.114Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:10:51.615Z] [BOT] 💾 Marked as posted: Machine Learning Systems Engineer, RL Engineering @ anthropic (instance #1)
[2026-01-12T19:10:51.615Z] [BOT] 💾 BEFORE ARCHIVING: 410 jobs in database
[2026-01-12T19:10:51.616Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T19:10:51.622Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 408 active
[2026-01-12T19:10:51.627Z] [BOT] 💾 Saved posted_jobs.json: 408 active jobs
[2026-01-12T19:10:51.627Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:10:51.627Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Biology & Life Sciences" @ anthropic
[2026-01-12T19:10:51.627Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-12T19:10:51.628Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:10:51.916Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #🤖・ai-jobs
[2026-01-12T19:10:51.916Z] [BOT] ✅ Industry: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic
[2026-01-12T19:10:53.669Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #🌉・san-francisco
[2026-01-12T19:10:53.669Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:10:55.170Z] [BOT] 💾 Marked as posted: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic (instance #1)
[2026-01-12T19:10:55.171Z] [BOT] 💾 BEFORE ARCHIVING: 409 jobs in database
[2026-01-12T19:10:55.171Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-12T19:10:55.175Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
[2026-01-12T19:10:55.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:10:55.176Z] [BOT] 📍 [ROUTING] "Staff Machine Learning Engineer, Virtual Collaborator" @ anthropic
[2026-01-12T19:10:55.176Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:10:55.601Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Virtual Collaborator @ anthropic in #🤖・ai-jobs
[2026-01-12T19:10:55.601Z] [BOT] ✅ Industry: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic
[2026-01-12T19:10:57.430Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Virtual Collaborator @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:10:58.930Z] [BOT] 💾 Marked as posted: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic (instance #1)
[2026-01-12T19:10:58.930Z] [BOT] 💾 BEFORE ARCHIVING: 410 jobs in database
[2026-01-12T19:10:58.931Z] [BOT] ✅ No jobs to archive (all 410 jobs within 7-day window)
[2026-01-12T19:10:58.935Z] [BOT] 💾 Saved posted_jobs.json: 410 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:10:58.936Z] [BOT] 📍 [ROUTING] " [Expression of Interest] Research Manager, Interpretability" @ anthropic
[2026-01-12T19:10:58.936Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T19:10:59.268Z] [BOT] ✅ Created forum post: 🏢  [Expression of Interest] Research Manager, Interpretability @ anthropic in #🤖・ai-jobs
  ✅ Industry:  [Expression of Interest] Research Manager, Interpretability @ anthropic
[2026-01-12T19:11:00.968Z] [BOT] ✅ Created forum post: 🏢  [Expression of Interest] Research Manager, Interpretability @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:02.470Z] [BOT] 💾 Marked as posted:  [Expression of Interest] Research Manager, Interpretability @ anthropic (instance #1)
[2026-01-12T19:11:02.470Z] [BOT] 💾 BEFORE ARCHIVING: 411 jobs in database
[2026-01-12T19:11:02.470Z] [BOT] ✅ No jobs to archive (all 411 jobs within 7-day window)
[2026-01-12T19:11:02.474Z] [BOT] 💾 Saved posted_jobs.json: 411 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:05.475Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T19:11:05.475Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Alignment Finetuning" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:11:05.726Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #💻・tech-jobs
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic
[2026-01-12T19:11:07.525Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:09.027Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic (instance #1)
[2026-01-12T19:11:09.027Z] [BOT] 💾 BEFORE ARCHIVING: 412 jobs in database
[2026-01-12T19:11:09.027Z] [BOT] ✅ No jobs to archive (all 412 jobs within 7-day window)
[2026-01-12T19:11:09.032Z] [BOT] 💾 Saved posted_jobs.json: 412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:12.032Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-12T19:11:12.032Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (2-8 YOE)" @ airtable
[2026-01-12T19:11:12.033Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T19:11:12.322Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (2-8 YOE) @ airtable in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Product Backend (2-8 YOE) @ airtable
[2026-01-12T19:11:14.538Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (2-8 YOE) @ airtable in #🌉・san-francisco
[2026-01-12T19:11:14.538Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:16.039Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (2-8 YOE) @ airtable (instance #1)
[2026-01-12T19:11:16.039Z] [BOT] 💾 BEFORE ARCHIVING: 413 jobs in database
[2026-01-12T19:11:16.040Z] [BOT] ✅ No jobs to archive (all 413 jobs within 7-day window)
[2026-01-12T19:11:16.044Z] [BOT] 💾 Saved posted_jobs.json: 413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:16.044Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (8+ YOE)" @ airtable
[2026-01-12T19:11:16.045Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T19:11:16.737Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (8+ YOE) @ airtable in #📈・JID_fb739488
[2026-01-12T19:11:16.737Z] [BOT] ✅ Industry: Software Engineer, Product Backend (8+ YOE) @ airtable
[2026-01-12T19:11:18.449Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (8+ YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:19.951Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (8+ YOE) @ airtable (instance #1)
[2026-01-12T19:11:19.951Z] [BOT] 💾 BEFORE ARCHIVING: 414 jobs in database
[2026-01-12T19:11:19.951Z] [BOT] ✅ No jobs to archive (all 414 jobs within 7-day window)
[2026-01-12T19:11:19.955Z] [BOT] 💾 Saved posted_jobs.json: 414 active jobs
[2026-01-12T19:11:19.956Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:19.956Z] [BOT] 📍 [ROUTING] "Developer Operations Analyst" @ discord
[2026-01-12T19:11:19.956Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T19:11:20.233Z] [BOT] ✅ Created forum post: 🏢 Developer Operations Analyst @ discord in #📈・JID_fb739488
  ✅ Industry: Developer Operations Analyst @ discord
[2026-01-12T19:11:22.140Z] [BOT] ✅ Created forum post: 🏢 Developer Operations Analyst @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:23.642Z] [BOT] 💾 Marked as posted: Developer Operations Analyst @ discord (instance #1)
[2026-01-12T19:11:23.642Z] [BOT] 💾 BEFORE ARCHIVING: 415 jobs in database
[2026-01-12T19:11:23.642Z] [BOT] ✅ No jobs to archive (all 415 jobs within 7-day window)
[2026-01-12T19:11:23.650Z] [BOT] 💾 Saved posted_jobs.json: 415 active jobs
[2026-01-12T19:11:23.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:26.651Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T19:11:26.652Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Salt Lake City)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-12T19:11:26.652Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:11:27.219Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, West (Salt Lake City) @ verkada in #💲・sales-jobs
  ✅ Industry: Channel Development Representative, West (Salt Lake City) @ verkada
[2026-01-12T19:11:28.721Z] [BOT] 💾 Marked as posted: Channel Development Representative, West (Salt Lake City) @ verkada (instance #1)
[2026-01-12T19:11:28.721Z] [BOT] 💾 BEFORE ARCHIVING: 416 jobs in database
[2026-01-12T19:11:28.721Z] [BOT] ✅ No jobs to archive (all 416 jobs within 7-day window)
[2026-01-12T19:11:28.725Z] [BOT] 💾 Saved posted_jobs.json: 416 active jobs
[2026-01-12T19:11:28.726Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:28.726Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-12T19:11:28.726Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:11:28.980Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
[2026-01-12T19:11:28.980Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-12T19:11:30.759Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #🌉・san-francisco
[2026-01-12T19:11:30.759Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:11:32.260Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-12T19:11:32.261Z] [BOT] 💾 BEFORE ARCHIVING: 417 jobs in database
[2026-01-12T19:11:32.261Z] [BOT] ✅ No jobs to archive (all 417 jobs within 7-day window)
[2026-01-12T19:11:32.265Z] [BOT] 💾 Saved posted_jobs.json: 417 active jobs
[2026-01-12T19:11:32.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:11:35.266Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_d9b8afd8 (posted within 7 days)
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_2e448c55 (posted within 7 days)
⏭️  Skipping duplicate: JID_19245b78 (posted within 7 days)
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_8eaf89fb (posted within 7 days)
⏭️  Skipping duplicate: JID_0aff1ccc (posted within 7 days)
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_c16b5fb8 (posted within 7 days)
⏭️  Skipping duplicate: JID_ebbf5c6f (posted within 7 days)
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_1c4bcafd (posted within 7 days)
⏭️  Skipping duplicate: JID_a093879d (posted within 7 days)
[2026-01-12T19:11:35.267Z] [BOT] ⏭️  Skipping duplicate: JID_da25f3c9 (posted within 7 days)
[2026-01-12T19:11:35.379Z] [BOT] ✅ Loaded pending queue: 2651 total (2631 pending, 20 enriched, 0 posted)
[2026-01-12T19:11:35.545Z] [BOT] ✅ Saved pending queue: 2651 total (2631 pending, 10 enriched, 10 posted)
[2026-01-12T19:11:35.546Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T19:11:35.601Z] [BOT] 📂 Loaded 2602 existing routing entries
[2026-01-12T19:11:35.656Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T19:11:35.656Z] [BOT] Total entries: 2612
   Timestamp: 2026-01-12T19:11:35.645Z
[2026-01-12T19:11:35.656Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 19
[2026-01-12T19:11:35.657Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-12T19:11:35.657Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
[2026-01-12T19:11:35.657Z] [BOT] Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-12T19:11:35.657Z] [BOT] 3. #📈・JID_fb739488: 3 posts
[2026-01-12T19:11:35.657Z] [BOT] 4. #💲・sales-jobs: 2 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-12T19:11:35.657Z] [BOT] [STATS] Channel stats saved
[2026-01-12T19:11:37.683Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*