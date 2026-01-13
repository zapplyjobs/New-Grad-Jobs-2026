# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T07:27:57.799Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T07:27:05.554Z] ========================================
[2026-01-13T07:27:05.556Z] Discord Bot Execution Log
[2026-01-13T07:27:05.556Z] Environment: GitHub Actions
[2026-01-13T07:27:05.556Z] Node Version: v20.19.6
[2026-01-13T07:27:05.556Z] ========================================
[2026-01-13T07:27:05.556Z] Environment Variables Check:
[2026-01-13T07:27:05.556Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T07:27:05.556Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.556Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T07:27:05.556Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T07:27:05.556Z] 
Multi-Channel Configuration:
[2026-01-13T07:27:05.556Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T07:27:05.557Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T07:27:05.557Z] 
Data Files Check:
[2026-01-13T07:27:05.558Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56427 bytes)
[2026-01-13T07:27:05.561Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 441675 bytes)
[2026-01-13T07:27:05.561Z] 
========================================
[2026-01-13T07:27:05.562Z] Starting Enhanced Discord Bot...
[2026-01-13T07:27:05.562Z] ========================================
[2026-01-13T07:27:06.102Z] [BOT] ✅ Loaded V2 database: 839 jobs
[2026-01-13T07:27:06.994Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T07:27:06.995Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T07:27:06.995Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T07:27:07.104Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: FP&A Analyst, Strategic Planning at spotify
[2026-01-13T07:27:07.106Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T07:27:07.106Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T07:27:07.107Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T07:27:07.107Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T07:27:07.108Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T07:27:07.111Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T07:27:07.112Z] [BOT] 📍 [ROUTING] "FP&A Analyst, Strategic Planning" @ spotify
[2026-01-13T07:27:07.112Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T07:27:07.116Z] [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T07:27:07.365Z] [BOT] ✅ Created forum post: 🏢 FP&A Analyst, Strategic Planning @ spotify in #🤖・ai-jobs
[2026-01-13T07:27:07.366Z] [BOT] ✅ Industry: FP&A Analyst, Strategic Planning @ spotify
[2026-01-13T07:27:09.090Z] [BOT] ✅ Created forum post: 🏢 FP&A Analyst, Strategic Planning @ spotify in #🗽・new-york
[2026-01-13T07:27:09.090Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T07:27:10.591Z] [BOT] 💾 Marked as posted: FP&A Analyst, Strategic Planning @ spotify (instance #1)
[2026-01-13T07:27:10.591Z] [BOT] 💾 BEFORE ARCHIVING: 840 jobs in database
[2026-01-13T07:27:10.592Z] [BOT] ✅ No jobs to archive (all 840 jobs within 7-day window)
[2026-01-13T07:27:10.606Z] [BOT] 💾 Saved posted_jobs.json: 840 active jobs
[2026-01-13T07:27:10.607Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:10.607Z] [BOT] 📍 [ROUTING] "AI Developer I- Call Center" @ ORG_a151ceb1 Financial Bank
   Category: AI (matched: "artificial intelligence")
[2026-01-13T07:27:10.607Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:27:10.883Z] [BOT] ✅ Created forum post: 🏢 AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #🤖・ai-jobs
[2026-01-13T07:27:10.883Z] [BOT] ✅ Industry: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank
[2026-01-13T07:27:12.578Z] [BOT] ✅ Created forum post: 🏢 AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T07:27:14.080Z] [BOT] 💾 Marked as posted: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank (instance #1)
[2026-01-13T07:27:14.080Z] [BOT] 💾 BEFORE ARCHIVING: 841 jobs in database
[2026-01-13T07:27:14.081Z] [BOT] ✅ No jobs to archive (all 841 jobs within 7-day window)
[2026-01-13T07:27:14.087Z] [BOT] 💾 Saved posted_jobs.json: 841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:14.087Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T07:27:14.087Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:27:14.274Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
[2026-01-13T07:27:14.275Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2026-01-13T07:27:16.062Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:27:17.563Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_44ebd2cb (instance #1)
[2026-01-13T07:27:17.564Z] [BOT] 💾 BEFORE ARCHIVING: 842 jobs in database
[2026-01-13T07:27:17.564Z] [BOT] ✅ No jobs to archive (all 842 jobs within 7-day window)
[2026-01-13T07:27:17.572Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:17.573Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_7a9c8205
[2026-01-13T07:27:17.573Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T07:27:17.814Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_7a9c8205 in #🤖・ai-jobs
[2026-01-13T07:27:17.814Z] [BOT] ✅ Industry: Junior Data Engineer @ ORG_7a9c8205
[2026-01-13T07:27:19.554Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_7a9c8205 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:27:21.054Z] [BOT] 💾 Marked as posted: Junior Data Engineer @ ORG_7a9c8205 (instance #1)
[2026-01-13T07:27:21.054Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2026-01-13T07:27:21.055Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2026-01-13T07:27:21.062Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:24.063Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T07:27:24.065Z] [BOT] 📍 [ROUTING] "Global Technology Partner Lead" @ anthropic
[2026-01-13T07:27:24.065Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:27:24.339Z] [BOT] ✅ Created forum post: 🏢 Global Technology Partner Lead @ anthropic in #💲・sales-jobs
[2026-01-13T07:27:24.339Z] [BOT] ✅ Industry: Global Technology Partner Lead @ anthropic
[2026-01-13T07:27:26.036Z] [BOT] ✅ Created forum post: 🏢 Global Technology Partner Lead @ anthropic in #🌉・san-francisco
[2026-01-13T07:27:26.036Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:27:27.539Z] [BOT] 💾 Marked as posted: Global Technology Partner Lead @ anthropic (instance #1)
[2026-01-13T07:27:27.539Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2026-01-13T07:27:27.539Z] [BOT] ✅ No jobs to archive (all 844 jobs within 7-day window)
[2026-01-13T07:27:27.547Z] [BOT] 💾 Saved posted_jobs.json: 844 active jobs
[2026-01-13T07:27:27.547Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:30.548Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T07:27:30.548Z] [BOT] 📍 [ROUTING] "Data Scientist I - Hybrid" @ ORG_96324500
[2026-01-13T07:27:30.548Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T07:27:30.778Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I - Hybrid @ ORG_96324500 in #📈・JID_fb739488
[2026-01-13T07:27:30.779Z] [BOT] ✅ Industry: Data Scientist I - Hybrid @ ORG_96324500
[2026-01-13T07:27:32.532Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I - Hybrid @ ORG_96324500 in #🗽・new-york
[2026-01-13T07:27:32.533Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T07:27:34.034Z] [BOT] 💾 Marked as posted: Data Scientist I - Hybrid @ ORG_96324500 (instance #1)
[2026-01-13T07:27:34.034Z] [BOT] 💾 BEFORE ARCHIVING: 845 jobs in database
[2026-01-13T07:27:34.035Z] [BOT] ✅ No jobs to archive (all 845 jobs within 7-day window)
[2026-01-13T07:27:34.042Z] [BOT] 💾 Saved posted_jobs.json: 845 active jobs
[2026-01-13T07:27:34.042Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:37.042Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T07:27:37.042Z] [BOT] 📍 [ROUTING] "Associate Software Engineer (Temporary)" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:27:37.365Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros.
[2026-01-13T07:27:39.097Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #🌆・chicago
[2026-01-13T07:27:39.098Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T07:27:40.599Z] [BOT] 💾 Marked as posted: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. (instance #1)
[2026-01-13T07:27:40.600Z] [BOT] 💾 BEFORE ARCHIVING: 846 jobs in database
[2026-01-13T07:27:40.600Z] [BOT] ✅ No jobs to archive (all 846 jobs within 7-day window)
[2026-01-13T07:27:40.608Z] [BOT] 💾 Saved posted_jobs.json: 846 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:40.609Z] [BOT] 📍 [ROUTING] "Software Developer, Network Software Associate" @ ORG_9ee5b96f
[2026-01-13T07:27:40.609Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:27:40.894Z] [BOT] ✅ Created forum post: 🏢 Software Developer, Network Software Associate @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Developer, Network Software Associate @ ORG_9ee5b96f
[2026-01-13T07:27:42.714Z] [BOT] ✅ Created forum post: 🏢 Software Developer, Network Software Associate @ ORG_9ee5b96f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:27:44.215Z] [BOT] 💾 Marked as posted: Software Developer, Network Software Associate @ ORG_9ee5b96f (instance #1)
[2026-01-13T07:27:44.215Z] [BOT] 💾 BEFORE ARCHIVING: 847 jobs in database
[2026-01-13T07:27:44.216Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2026-01-13T07:27:44.223Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:44.223Z] [BOT] 📍 [ROUTING] "Junior Product Software Engineer" @ ORG_d6d2009d
[2026-01-13T07:27:44.223Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:27:44.443Z] [BOT] ✅ Created forum post: 🏢 Junior Product Software Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Junior Product Software Engineer @ ORG_d6d2009d
[2026-01-13T07:27:46.142Z] [BOT] ✅ Created forum post: 🏢 Junior Product Software Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:27:47.643Z] [BOT] 💾 Marked as posted: Junior Product Software Engineer @ ORG_d6d2009d (instance #1)
[2026-01-13T07:27:47.643Z] [BOT] 💾 BEFORE ARCHIVING: 848 jobs in database
[2026-01-13T07:27:47.643Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2026-01-13T07:27:47.651Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:47.651Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_a0299599
[2026-01-13T07:27:47.651Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:27:47.869Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a0299599 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_a0299599
[2026-01-13T07:27:49.579Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a0299599 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:27:51.079Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_a0299599 (instance #1)
[2026-01-13T07:27:51.079Z] [BOT] 💾 BEFORE ARCHIVING: 849 jobs in database
[2026-01-13T07:27:51.080Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2026-01-13T07:27:51.088Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
[2026-01-13T07:27:51.089Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:27:54.089Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T07:27:54.089Z] [BOT] ⏭️  Skipping duplicate: JID_3e9d0ef2 (posted within 7 days)
[2026-01-13T07:27:54.089Z] [BOT] ⏭️  Skipping duplicate: JID_894b5313 (posted within 7 days)
[2026-01-13T07:27:54.089Z] [BOT] ⏭️  Skipping duplicate: JID_ad33ad88-radian_external_career_site-JID_af066355-hybrid_r20250160 (posted within 7 days)
[2026-01-13T07:27:54.089Z] [BOT] ⏭️  Skipping duplicate: JID_5468cf71-first_financial_bank-JID_a7a52860-center_jr102406 (posted within 7 days)
[2026-01-13T07:27:54.090Z] [BOT] ⏭️  Skipping duplicate: JID_ee7c7aa1-_r000101071 (posted within 7 days)
⏭️  Skipping duplicate: JID_7b79f1e0 (posted within 7 days)
⏭️  Skipping duplicate: JID_672289ac (posted within 7 days)
⏭️  Skipping duplicate: JID_f3e2390a (posted within 7 days)
⏭️  Skipping duplicate: JID_0b7b19a5 (posted within 7 days)
⏭️  Skipping duplicate: JID_404c57a4 (posted within 7 days)
[2026-01-13T07:27:54.205Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[2026-01-13T07:27:54.364Z] [BOT] ✅ Saved pending queue: 2697 total (2677 pending, 10 enriched, 10 posted)
[2026-01-13T07:27:54.364Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T07:27:54.417Z] [BOT] 📂 Loaded 2975 existing routing entries
[2026-01-13T07:27:54.477Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T07:27:54.478Z] [BOT] Total entries: 2985
   Timestamp: 2026-01-13T07:27:54.464Z
[2026-01-13T07:27:54.478Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T07:27:54.478Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T07:27:54.478Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T07:27:54.479Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-13T07:27:54.479Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #🗽・new-york: 2 posts
[2026-01-13T07:27:54.479Z] [BOT] 5. #💻・remote-usa: 2 posts
[2026-01-13T07:27:54.479Z] [BOT] [STATS] Channel stats saved
[2026-01-13T07:27:56.504Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2629) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*