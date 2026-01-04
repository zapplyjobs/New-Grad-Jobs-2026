# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T09:50:29.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T09:49:38.765Z] ========================================
[2026-01-04T09:49:38.767Z] Discord Bot Execution Log
[2026-01-04T09:49:38.767Z] Environment: GitHub Actions
[2026-01-04T09:49:38.767Z] Node Version: v20.19.6
[2026-01-04T09:49:38.767Z] ========================================
[2026-01-04T09:49:38.767Z] Environment Variables Check:
[2026-01-04T09:49:38.767Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T09:49:38.767Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.767Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T09:49:38.767Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T09:49:38.768Z] 
Multi-Channel Configuration:
[2026-01-04T09:49:38.768Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T09:49:38.768Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T09:49:38.768Z] 
Data Files Check:
[2026-01-04T09:49:38.769Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154294 bytes)
[2026-01-04T09:49:38.773Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 499791 bytes)
[2026-01-04T09:49:38.773Z] 
========================================
[2026-01-04T09:49:38.773Z] Starting Enhanced Discord Bot...
[2026-01-04T09:49:38.773Z] ========================================
[2026-01-04T09:49:39.305Z] [BOT] ✅ Loaded V2 database: 992 jobs
[2026-01-04T09:49:40.131Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T09:49:40.132Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T09:49:40.132Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T09:49:40.133Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T09:49:40.200Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T09:49:40.289Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T09:49:40.292Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T09:49:40.292Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T09:49:40.292Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T09:49:40.293Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T09:49:40.293Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T09:49:40.297Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T09:49:40.298Z] [BOT] 📍 [ROUTING] "Performance Engineer" @ anthropic
[2026-01-04T09:49:40.298Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:49:40.315Z] [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T09:49:40.491Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer @ anthropic in #🤖・ai-jobs
[2026-01-04T09:49:40.491Z] [BOT] ✅ Industry: Performance Engineer @ anthropic
[2026-01-04T09:49:42.356Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer @ anthropic in #🌉・san-francisco
[2026-01-04T09:49:42.356Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:49:43.857Z] [BOT] 💾 Marked as posted: Performance Engineer @ anthropic (instance #1)
[2026-01-04T09:49:43.857Z] [BOT] 💾 BEFORE ARCHIVING: 993 jobs in database
[2026-01-04T09:49:43.858Z] [BOT] ✅ No jobs to archive (all 993 jobs within 7-day window)
[2026-01-04T09:49:43.869Z] [BOT] 💾 Saved posted_jobs.json: 993 active jobs
[2026-01-04T09:49:43.869Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:49:43.869Z] [BOT] 📍 [ROUTING] "Privacy Research Engineer, Safeguards" @ anthropic
[2026-01-04T09:49:43.869Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:49:44.081Z] [BOT] ✅ Created forum post: 🏢 Privacy Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-04T09:49:44.081Z] [BOT] ✅ Industry: Privacy Research Engineer, Safeguards @ anthropic
[2026-01-04T09:49:45.730Z] [BOT] ✅ Created forum post: 🏢 Privacy Research Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:49:47.232Z] [BOT] 💾 Marked as posted: Privacy Research Engineer, Safeguards @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 994 jobs in database
[2026-01-04T09:49:47.233Z] [BOT] ✅ No jobs to archive (all 994 jobs within 7-day window)
[2026-01-04T09:49:47.241Z] [BOT] 💾 Saved posted_jobs.json: 994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:49:47.241Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Experiences" @ anthropic
[2026-01-04T09:49:47.241Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T09:49:47.590Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Experiences @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Claude Experiences @ anthropic
[2026-01-04T09:49:49.405Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Experiences @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:49:50.906Z] [BOT] 💾 Marked as posted: Product Designer, Claude Experiences @ anthropic (instance #1)
[2026-01-04T09:49:50.907Z] [BOT] 💾 BEFORE ARCHIVING: 995 jobs in database
[2026-01-04T09:49:50.907Z] [BOT] ✅ No jobs to archive (all 995 jobs within 7-day window)
[2026-01-04T09:49:50.914Z] [BOT] 💾 Saved posted_jobs.json: 995 active jobs
[2026-01-04T09:49:50.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:49:50.914Z] [BOT] 📍 [ROUTING] "Product Designer, Growth " @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-04T09:49:50.914Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T09:49:51.061Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Growth  @ anthropic
[2026-01-04T09:49:53.045Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth  @ anthropic in #🌉・san-francisco
[2026-01-04T09:49:53.045Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:49:54.546Z] [BOT] 💾 Marked as posted: Product Designer, Growth  @ anthropic (instance #1)
[2026-01-04T09:49:54.546Z] [BOT] 💾 BEFORE ARCHIVING: 996 jobs in database
[2026-01-04T09:49:54.547Z] [BOT] ✅ No jobs to archive (all 996 jobs within 7-day window)
[2026-01-04T09:49:54.553Z] [BOT] 💾 Saved posted_jobs.json: 996 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:49:54.553Z] [BOT] 📍 [ROUTING] "Product Manager, Safeguards" @ anthropic
[2026-01-04T09:49:54.553Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T09:49:54.754Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-04T09:49:54.754Z] [BOT] ✅ Industry: Product Manager, Safeguards @ anthropic
[2026-01-04T09:49:56.395Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:49:57.896Z] [BOT] 💾 Marked as posted: Product Manager, Safeguards @ anthropic (instance #1)
[2026-01-04T09:49:57.896Z] [BOT] 💾 BEFORE ARCHIVING: 997 jobs in database
[2026-01-04T09:49:57.897Z] [BOT] ✅ No jobs to archive (all 997 jobs within 7-day window)
[2026-01-04T09:49:57.905Z] [BOT] 💾 Saved posted_jobs.json: 997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:00.906Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T09:50:00.906Z] [BOT] 📍 [ROUTING] "Portfolio Activation Manager" @ anthropic
[2026-01-04T09:50:00.907Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:50:01.146Z] [BOT] ✅ Created forum post: 🏢 Portfolio Activation Manager @ anthropic in #💲・sales-jobs
  ✅ Industry: Portfolio Activation Manager @ anthropic
[2026-01-04T09:50:02.864Z] [BOT] ✅ Created forum post: 🏢 Portfolio Activation Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:50:04.366Z] [BOT] 💾 Marked as posted: Portfolio Activation Manager @ anthropic (instance #1)
[2026-01-04T09:50:04.366Z] [BOT] 💾 BEFORE ARCHIVING: 998 jobs in database
[2026-01-04T09:50:04.367Z] [BOT] ✅ No jobs to archive (all 998 jobs within 7-day window)
[2026-01-04T09:50:04.374Z] [BOT] 💾 Saved posted_jobs.json: 998 active jobs
[2026-01-04T09:50:04.374Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:07.375Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T09:50:07.376Z] [BOT] 📍 [ROUTING] "Privacy Counsel" @ anthropic
[2026-01-04T09:50:07.376Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T09:50:07.589Z] [BOT] ✅ Created forum post: 🏢 Privacy Counsel @ anthropic in #📣・marketing-jobs
[2026-01-04T09:50:07.589Z] [BOT] ✅ Industry: Privacy Counsel @ anthropic
[2026-01-04T09:50:09.287Z] [BOT] ✅ Created forum post: 🏢 Privacy Counsel @ anthropic in #🌉・san-francisco
[2026-01-04T09:50:09.287Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:50:10.789Z] [BOT] 💾 Marked as posted: Privacy Counsel @ anthropic (instance #1)
[2026-01-04T09:50:10.789Z] [BOT] 💾 BEFORE ARCHIVING: 999 jobs in database
[2026-01-04T09:50:10.789Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-04T09:50:10.798Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-04T09:50:10.798Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:13.798Z] [BOT] 📌 Posting 3 jobs to #📦・product-jobs
[2026-01-04T09:50:13.798Z] [BOT] 📍 [ROUTING] "Product Manager, API " @ anthropic
[2026-01-04T09:50:13.798Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T09:50:13.947Z] [BOT] ✅ Created forum post: 🏢 Product Manager, API  @ anthropic in #📦・product-jobs
[2026-01-04T09:50:13.947Z] [BOT] ✅ Industry: Product Manager, API  @ anthropic
[2026-01-04T09:50:15.707Z] [BOT] ✅ Created forum post: 🏢 Product Manager, API  @ anthropic in #🌉・san-francisco
[2026-01-04T09:50:15.707Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:50:17.208Z] [BOT] 💾 Marked as posted: Product Manager, API  @ anthropic (instance #1)
[2026-01-04T09:50:17.209Z] [BOT] 💾 BEFORE ARCHIVING: 1000 jobs in database
[2026-01-04T09:50:17.209Z] [BOT] ✅ No jobs to archive (all 1000 jobs within 7-day window)
[2026-01-04T09:50:17.218Z] [BOT] 💾 Saved posted_jobs.json: 1000 active jobs
[2026-01-04T09:50:17.218Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:17.218Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code" @ anthropic
[2026-01-04T09:50:17.218Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T09:50:17.389Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code @ anthropic in #📦・product-jobs
[2026-01-04T09:50:17.389Z] [BOT] ✅ Industry: Product Manager, Claude Code @ anthropic
[2026-01-04T09:50:19.123Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:50:20.623Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code @ anthropic (instance #1)
[2026-01-04T09:50:20.623Z] [BOT] 💾 BEFORE ARCHIVING: 1001 jobs in database
[2026-01-04T09:50:20.624Z] [BOT] ✅ No jobs to archive (all 1001 jobs within 7-day window)
[2026-01-04T09:50:20.632Z] [BOT] 💾 Saved posted_jobs.json: 1001 active jobs
[2026-01-04T09:50:20.632Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:20.632Z] [BOT] 📍 [ROUTING] "Product Manager, Research" @ anthropic
[2026-01-04T09:50:20.632Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T09:50:20.851Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Research @ anthropic in #📦・product-jobs
[2026-01-04T09:50:20.851Z] [BOT] ✅ Industry: Product Manager, Research @ anthropic
[2026-01-04T09:50:22.566Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Research @ anthropic in #🌉・san-francisco
[2026-01-04T09:50:22.566Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:50:24.066Z] [BOT] 💾 Marked as posted: Product Manager, Research @ anthropic (instance #1)
[2026-01-04T09:50:24.066Z] [BOT] 💾 BEFORE ARCHIVING: 1002 jobs in database
[2026-01-04T09:50:24.067Z] [BOT] ✅ No jobs to archive (all 1002 jobs within 7-day window)
[2026-01-04T09:50:24.075Z] [BOT] 💾 Saved posted_jobs.json: 1002 active jobs
[2026-01-04T09:50:24.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:50:27.077Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T09:50:27.077Z] [BOT] ⏭️  Skipping duplicate: JID_274d4691 (posted within 7 days)
[2026-01-04T09:50:27.077Z] [BOT] ⏭️  Skipping duplicate: JID_9779d71c (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_5606d9df (posted within 7 days)
⏭️  Skipping duplicate: JID_b5558b07 (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_5292ed7a (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_7e6e2044 (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_c25849df (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_2c1c7ed4 (posted within 7 days)
⏭️  Skipping duplicate: JID_118788c0 (posted within 7 days)
[2026-01-04T09:50:27.078Z] [BOT] ⏭️  Skipping duplicate: JID_58fa31c4 (posted within 7 days)
[2026-01-04T09:50:27.101Z] [BOT] ✅ Loaded pending queue: 298 total (278 pending, 20 enriched, 0 posted)
[2026-01-04T09:50:27.129Z] [BOT] ✅ Saved pending queue: 298 total (278 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T09:50:27.183Z] [BOT] 📂 Loaded 1899 existing routing entries
[2026-01-04T09:50:27.230Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T09:50:27.231Z] [BOT] Total entries: 1909
   Timestamp: 2026-01-04T09:50:27.222Z
[2026-01-04T09:50:27.231Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T09:50:27.231Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-04T09:50:27.231Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T09:50:27.232Z] [BOT] Total posts: 20
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 5 posts
     3. #📦・product-jobs: 3 posts
     4. #💲・sales-jobs: 1 posts
[2026-01-04T09:50:27.232Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2026-01-04T09:50:27.232Z] [BOT] [STATS] Channel stats saved
[2026-01-04T09:50:29.247Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*