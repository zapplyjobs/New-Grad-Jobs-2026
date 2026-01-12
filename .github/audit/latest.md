# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T19:01:12.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T19:00:22.406Z] ========================================
[2026-01-12T19:00:22.408Z] Discord Bot Execution Log
[2026-01-12T19:00:22.408Z] Environment: GitHub Actions
[2026-01-12T19:00:22.408Z] Node Version: v20.19.6
[2026-01-12T19:00:22.408Z] ========================================
[2026-01-12T19:00:22.408Z] Environment Variables Check:
[2026-01-12T19:00:22.408Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T19:00:22.408Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.408Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T19:00:22.408Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T19:00:22.408Z] 
Multi-Channel Configuration:
[2026-01-12T19:00:22.408Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.408Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T19:00:22.409Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T19:00:22.409Z] 
Data Files Check:
[2026-01-12T19:00:22.410Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174737 bytes)
[2026-01-12T19:00:22.412Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 226544 bytes)
[2026-01-12T19:00:22.412Z] 
========================================
[2026-01-12T19:00:22.413Z] Starting Enhanced Discord Bot...
[2026-01-12T19:00:22.413Z] ========================================
[2026-01-12T19:00:22.936Z] [BOT] ✅ Loaded V2 database: 400 jobs
[2026-01-12T19:00:23.535Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T19:00:23.536Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T19:00:23.536Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T19:00:23.644Z] [BOT] ✅ Loaded pending queue: 2647 total (2627 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Machine Learning Engineer, Agent Skills at anthropic
[2026-01-12T19:00:23.646Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T19:00:23.646Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T19:00:23.646Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T19:00:23.647Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-12T19:00:23.647Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T19:00:23.649Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-12T19:00:23.651Z] [BOT] 📍 [ROUTING] "Staff Machine Learning Engineer, Agent Skills" @ anthropic
[2026-01-12T19:00:23.651Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:23.656Z] [BOT ERROR] (node:2364) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T19:00:23.918Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Agent Skills @ anthropic in #🤖・ai-jobs
[2026-01-12T19:00:23.918Z] [BOT] ✅ Industry: Staff Machine Learning Engineer, Agent Skills @ anthropic
[2026-01-12T19:00:26.069Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Agent Skills @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:27.571Z] [BOT] 💾 Marked as posted: Staff Machine Learning Engineer, Agent Skills @ anthropic (instance #1)
[2026-01-12T19:00:27.571Z] [BOT] 💾 BEFORE ARCHIVING: 401 jobs in database
[2026-01-12T19:00:27.572Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T19:00:27.577Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T19:00:27.577Z] [BOT] ✅ Archiving complete: 1 archived, 400 active
[2026-01-12T19:00:27.582Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2026-01-12T19:00:27.582Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:27.583Z] [BOT] 📍 [ROUTING] "TPU Kernel Engineer" @ anthropic
[2026-01-12T19:00:27.583Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-12T19:00:27.583Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:27.864Z] [BOT] ✅ Created forum post: 🏢 TPU Kernel Engineer @ anthropic in #🤖・ai-jobs
[2026-01-12T19:00:27.864Z] [BOT] ✅ Industry: TPU Kernel Engineer @ anthropic
[2026-01-12T19:00:29.711Z] [BOT] ✅ Created forum post: 🏢 TPU Kernel Engineer @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:29.712Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:31.212Z] [BOT] 💾 Marked as posted: TPU Kernel Engineer @ anthropic (instance #1)
[2026-01-12T19:00:31.212Z] [BOT] 💾 BEFORE ARCHIVING: 401 jobs in database
[2026-01-12T19:00:31.212Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2026-01-12T19:00:31.216Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
[2026-01-12T19:00:31.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:31.216Z] [BOT] 📍 [ROUTING] "Performance Engineer" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:31.442Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Performance Engineer @ anthropic
[2026-01-12T19:00:33.292Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:34.794Z] [BOT] 💾 Marked as posted: Performance Engineer @ anthropic (instance #1)
[2026-01-12T19:00:34.794Z] [BOT] 💾 BEFORE ARCHIVING: 402 jobs in database
[2026-01-12T19:00:34.794Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2026-01-12T19:00:34.799Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
[2026-01-12T19:00:34.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:34.801Z] [BOT] 📍 [ROUTING] "Research Engineer, Machine Learning (Reinforcement Learning) " @ anthropic
[2026-01-12T19:00:34.801Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:34.998Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic in #🤖・ai-jobs
[2026-01-12T19:00:34.998Z] [BOT] ✅ Industry: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic
[2026-01-12T19:00:36.973Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:36.973Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:38.474Z] [BOT] 💾 Marked as posted: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic (instance #1)
[2026-01-12T19:00:38.474Z] [BOT] 💾 BEFORE ARCHIVING: 403 jobs in database
[2026-01-12T19:00:38.475Z] [BOT] ✅ No jobs to archive (all 403 jobs within 7-day window)
[2026-01-12T19:00:38.479Z] [BOT] 💾 Saved posted_jobs.json: 403 active jobs
[2026-01-12T19:00:38.479Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:38.480Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Alignment Science" @ anthropic
[2026-01-12T19:00:38.480Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:38.733Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Scientist, Alignment Science @ anthropic in #🤖・ai-jobs
[2026-01-12T19:00:38.733Z] [BOT] ✅ Industry: Research Engineer / Scientist, Alignment Science @ anthropic
[2026-01-12T19:00:40.435Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Scientist, Alignment Science @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:40.435Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:41.936Z] [BOT] 💾 Marked as posted: Research Engineer / Scientist, Alignment Science @ anthropic (instance #1)
[2026-01-12T19:00:41.936Z] [BOT] 💾 BEFORE ARCHIVING: 404 jobs in database
[2026-01-12T19:00:41.937Z] [BOT] ✅ No jobs to archive (all 404 jobs within 7-day window)
[2026-01-12T19:00:41.941Z] [BOT] 💾 Saved posted_jobs.json: 404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:41.941Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Safeguards" @ anthropic
[2026-01-12T19:00:41.941Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:42.150Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, Safeguards @ anthropic
[2026-01-12T19:00:43.895Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:43.895Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:45.395Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Safeguards @ anthropic (instance #1)
[2026-01-12T19:00:45.396Z] [BOT] 💾 BEFORE ARCHIVING: 405 jobs in database
[2026-01-12T19:00:45.396Z] [BOT] ✅ No jobs to archive (all 405 jobs within 7-day window)
[2026-01-12T19:00:45.402Z] [BOT] 💾 Saved posted_jobs.json: 405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:45.402Z] [BOT] 📍 [ROUTING] "Research Engineer, Production Model Post Training" @ anthropic
[2026-01-12T19:00:45.402Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T19:00:45.754Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Production Model Post Training @ anthropic in #🤖・ai-jobs
[2026-01-12T19:00:45.754Z] [BOT] ✅ Industry: Research Engineer, Production Model Post Training @ anthropic
[2026-01-12T19:00:47.498Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Production Model Post Training @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:47.498Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:49.000Z] [BOT] 💾 Marked as posted: Research Engineer, Production Model Post Training @ anthropic (instance #1)
[2026-01-12T19:00:49.000Z] [BOT] 💾 BEFORE ARCHIVING: 406 jobs in database
[2026-01-12T19:00:49.000Z] [BOT] ✅ No jobs to archive (all 406 jobs within 7-day window)
[2026-01-12T19:00:49.004Z] [BOT] 💾 Saved posted_jobs.json: 406 active jobs
[2026-01-12T19:00:49.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:52.005Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T19:00:52.006Z] [BOT] 📍 [ROUTING] "Performance Engineer, GPU" @ anthropic
[2026-01-12T19:00:52.006Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:00:52.257Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer, GPU @ anthropic in #💻・tech-jobs
[2026-01-12T19:00:52.257Z] [BOT] ✅ Industry: Performance Engineer, GPU @ anthropic
[2026-01-12T19:00:54.112Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer, GPU @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:54.112Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:55.614Z] [BOT] 💾 Marked as posted: Performance Engineer, GPU @ anthropic (instance #1)
[2026-01-12T19:00:55.614Z] [BOT] 💾 BEFORE ARCHIVING: 407 jobs in database
[2026-01-12T19:00:55.614Z] [BOT] ✅ No jobs to archive (all 407 jobs within 7-day window)
[2026-01-12T19:00:55.619Z] [BOT] 💾 Saved posted_jobs.json: 407 active jobs
[2026-01-12T19:00:55.619Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:00:55.619Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Networking" @ anthropic
[2026-01-12T19:00:55.619Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:00:55.930Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Networking @ anthropic in #💻・tech-jobs
[2026-01-12T19:00:55.930Z] [BOT] ✅ Industry: Software Engineer, ML Networking @ anthropic
[2026-01-12T19:00:57.630Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Networking @ anthropic in #🌉・san-francisco
[2026-01-12T19:00:57.630Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T19:00:59.130Z] [BOT] 💾 Marked as posted: Software Engineer, ML Networking @ anthropic (instance #1)
[2026-01-12T19:00:59.130Z] [BOT] 💾 BEFORE ARCHIVING: 408 jobs in database
[2026-01-12T19:00:59.131Z] [BOT] ✅ No jobs to archive (all 408 jobs within 7-day window)
[2026-01-12T19:00:59.135Z] [BOT] 💾 Saved posted_jobs.json: 408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:01:02.135Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T19:01:02.136Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Honesty" @ anthropic
[2026-01-12T19:01:02.136Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T19:01:02.381Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #📈・JID_fb739488
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic
[2026-01-12T19:01:04.259Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:01:05.760Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic (instance #1)
[2026-01-12T19:01:05.760Z] [BOT] 💾 BEFORE ARCHIVING: 409 jobs in database
[2026-01-12T19:01:05.761Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-12T19:01:05.765Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
[2026-01-12T19:01:05.765Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:01:08.765Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_a1e38cd4 (posted within 7 days)
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_68539aa3 (posted within 7 days)
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_fe906425 (posted within 7 days)
⏭️  Skipping duplicate: JID_b2f8ad02 (posted within 7 days)
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_274d4691 (posted within 7 days)
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_d2212a19 (posted within 7 days)
[2026-01-12T19:01:08.766Z] [BOT] ⏭️  Skipping duplicate: JID_1dd0224e (posted within 7 days)
⏭️  Skipping duplicate: JID_d0e620f0 (posted within 7 days)
[2026-01-12T19:01:08.767Z] [BOT] ⏭️  Skipping duplicate: JID_3d74887a (posted within 7 days)
⏭️  Skipping duplicate: JID_eda3b2a4 (posted within 7 days)
[2026-01-12T19:01:08.878Z] [BOT] ✅ Loaded pending queue: 2647 total (2627 pending, 20 enriched, 0 posted)
[2026-01-12T19:01:09.043Z] [BOT] ✅ Saved pending queue: 2647 total (2627 pending, 10 enriched, 10 posted)
[2026-01-12T19:01:09.043Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T19:01:09.093Z] [BOT] 📂 Loaded 2592 existing routing entries
[2026-01-12T19:01:09.146Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T19:01:09.146Z] [BOT] Total entries: 2602
   Timestamp: 2026-01-12T19:01:09.136Z
[2026-01-12T19:01:09.147Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T19:01:09.147Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T19:01:09.147Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T19:01:09.147Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
[2026-01-12T19:01:09.148Z] [BOT] 1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 7 posts
     3. #💻・tech-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
[2026-01-12T19:01:09.148Z] [BOT] [STATS] Channel stats saved
[2026-01-12T19:01:11.171Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2364) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*