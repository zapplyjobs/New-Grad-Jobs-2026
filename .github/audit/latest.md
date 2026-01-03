# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T08:25:43.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T08:24:55.623Z] ========================================
[2026-01-03T08:24:55.625Z] Discord Bot Execution Log
[2026-01-03T08:24:55.625Z] Environment: GitHub Actions
[2026-01-03T08:24:55.625Z] Node Version: v20.19.6
[2026-01-03T08:24:55.625Z] ========================================
[2026-01-03T08:24:55.625Z] Environment Variables Check:
[2026-01-03T08:24:55.625Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T08:24:55.626Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T08:24:55.626Z] 
Multi-Channel Configuration:
[2026-01-03T08:24:55.626Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.626Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.627Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T08:24:55.627Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T08:24:55.627Z] 
Data Files Check:
[2026-01-03T08:24:55.628Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162394 bytes)
[2026-01-03T08:24:55.630Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 162353 bytes)
[2026-01-03T08:24:55.630Z] 
========================================
[2026-01-03T08:24:55.630Z] Starting Enhanced Discord Bot...
[2026-01-03T08:24:55.630Z] ========================================
[2026-01-03T08:24:56.161Z] [BOT] ✅ Loaded V2 database: 294 jobs
[2026-01-03T08:24:56.602Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T08:24:56.603Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T08:24:56.603Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T08:24:56.604Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T08:24:56.672Z] [BOT] 🧹 Cleaned up 5 jobs older than 7 days
[2026-01-03T08:24:56.766Z] [BOT] ✅ Export complete: Added 5, Skipped 5, Total 211
[2026-01-03T08:24:56.768Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T08:24:56.768Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T08:24:56.768Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T08:24:56.769Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T08:24:56.769Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - National Channel Sales Manager, Convergint (East) @ verkada: jacksonville, fl united states, philadelphia, pa united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T08:24:56.774Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T08:24:56.774Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Account Management - Denver" @ datadog
[2026-01-03T08:24:56.774Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:24:56.779Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T08:24:57.061Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Account Management - Denver @ datadog in #💲・sales-jobs
[2026-01-03T08:24:57.061Z] [BOT] ✅ Industry: Manager 1, Technical Account Management - Denver @ datadog
[2026-01-03T08:24:58.563Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - Denver @ datadog (instance #1)
[2026-01-03T08:24:58.564Z] [BOT] 💾 BEFORE ARCHIVING: 295 jobs in database
[2026-01-03T08:24:58.564Z] [BOT] ✅ No jobs to archive (all 295 jobs within 7-day window)
[2026-01-03T08:24:58.571Z] [BOT] 💾 Saved posted_jobs.json: 295 active jobs
[2026-01-03T08:24:58.571Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:24:58.572Z] [BOT] 📍 [ROUTING] "Technical Account Manager 2 - West" @ datadog
[2026-01-03T08:24:58.572Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:24:58.764Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - West @ datadog in #💲・sales-jobs
[2026-01-03T08:24:58.765Z] [BOT] ✅ Industry: Technical Account Manager 2 - West @ datadog
[2026-01-03T08:25:00.402Z] [BOT] ✅ Created forum post: 🏢 Technical Account Manager 2 - West @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T08:25:01.903Z] [BOT] 💾 Marked as posted: Technical Account Manager 2 - West @ datadog (instance #1)
[2026-01-03T08:25:01.903Z] [BOT] 💾 BEFORE ARCHIVING: 296 jobs in database
[2026-01-03T08:25:01.903Z] [BOT] ✅ No jobs to archive (all 296 jobs within 7-day window)
[2026-01-03T08:25:01.907Z] [BOT] 💾 Saved posted_jobs.json: 296 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:04.908Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-03T08:25:04.909Z] [BOT] 📍 [ROUTING] "Field Marketing Manager (LATAM South)" @ datadog
   Category: MARKETING (matched: "marketing")
[2026-01-03T08:25:04.909Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T08:25:05.143Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager (LATAM South) @ datadog in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager (LATAM South) @ datadog
[2026-01-03T08:25:06.645Z] [BOT] 💾 Marked as posted: Field Marketing Manager (LATAM South) @ datadog (instance #1)
[2026-01-03T08:25:06.646Z] [BOT] 💾 BEFORE ARCHIVING: 297 jobs in database
[2026-01-03T08:25:06.646Z] [BOT] ✅ No jobs to archive (all 297 jobs within 7-day window)
[2026-01-03T08:25:06.649Z] [BOT] 💾 Saved posted_jobs.json: 297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:06.649Z] [BOT] 📍 [ROUTING] "Lead UX Designer - New York" @ datadog
[2026-01-03T08:25:06.649Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T08:25:06.820Z] [BOT] ✅ Created forum post: 🏢 Lead UX Designer - New York @ datadog in #📣・marketing-jobs
  ✅ Industry: Lead UX Designer - New York @ datadog
[2026-01-03T08:25:08.452Z] [BOT] ✅ Created forum post: 🏢 Lead UX Designer - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:25:09.953Z] [BOT] 💾 Marked as posted: Lead UX Designer - New York @ datadog (instance #1)
[2026-01-03T08:25:09.953Z] [BOT] 💾 BEFORE ARCHIVING: 298 jobs in database
[2026-01-03T08:25:09.953Z] [BOT] ✅ No jobs to archive (all 298 jobs within 7-day window)
[2026-01-03T08:25:09.956Z] [BOT] 💾 Saved posted_jobs.json: 298 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:09.957Z] [BOT] 📍 [ROUTING] "Coordinator, Business Recruiting - Contract" @ datadog
[2026-01-03T08:25:09.957Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T08:25:10.129Z] [BOT] ✅ Created forum post: 🏢 Coordinator, Business Recruiting - Contract @ datadog in #📣・marketing-jobs
  ✅ Industry: Coordinator, Business Recruiting - Contract @ datadog
[2026-01-03T08:25:11.772Z] [BOT] ✅ Created forum post: 🏢 Coordinator, Business Recruiting - Contract @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:25:13.272Z] [BOT] 💾 Marked as posted: Coordinator, Business Recruiting - Contract @ datadog (instance #1)
[2026-01-03T08:25:13.273Z] [BOT] 💾 BEFORE ARCHIVING: 299 jobs in database
[2026-01-03T08:25:13.273Z] [BOT] ✅ No jobs to archive (all 299 jobs within 7-day window)
[2026-01-03T08:25:13.276Z] [BOT] 💾 Saved posted_jobs.json: 299 active jobs
[2026-01-03T08:25:13.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:16.277Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-03T08:25:16.278Z] [BOT] 📍 [ROUTING] "People Program Manager" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-03T08:25:16.278Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T08:25:16.519Z] [BOT] ✅ Created forum post: 🏢 People Program Manager @ anthropic in #📊・JID_9910249a
  ✅ Industry: People Program Manager @ anthropic
[2026-01-03T08:25:18.268Z] [BOT] ✅ Created forum post: 🏢 People Program Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T08:25:19.769Z] [BOT] 💾 Marked as posted: People Program Manager @ anthropic (instance #1)
[2026-01-03T08:25:19.769Z] [BOT] 💾 BEFORE ARCHIVING: 300 jobs in database
[2026-01-03T08:25:19.770Z] [BOT] ✅ No jobs to archive (all 300 jobs within 7-day window)
[2026-01-03T08:25:19.773Z] [BOT] 💾 Saved posted_jobs.json: 300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:22.774Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T08:25:22.774Z] [BOT] 📍 [ROUTING] "Backend Engineer  - Data Infrastructure" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-03T08:25:22.774Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T08:25:23.148Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer  - Data Infrastructure @ spotify in #🤖・ai-jobs
  ✅ Industry: Backend Engineer  - Data Infrastructure @ spotify
[2026-01-03T08:25:25.068Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer  - Data Infrastructure @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:25:26.569Z] [BOT] 💾 Marked as posted: Backend Engineer  - Data Infrastructure @ spotify (instance #1)
[2026-01-03T08:25:26.569Z] [BOT] 💾 BEFORE ARCHIVING: 301 jobs in database
[2026-01-03T08:25:26.569Z] [BOT] ✅ No jobs to archive (all 301 jobs within 7-day window)
[2026-01-03T08:25:26.573Z] [BOT] 💾 Saved posted_jobs.json: 301 active jobs
[2026-01-03T08:25:26.573Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:29.574Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T08:25:29.574Z] [BOT] 📍 [ROUTING] "Software Engineer II, Frontend Platform " @ brex
[2026-01-03T08:25:29.575Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T08:25:29.917Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Frontend Platform  @ brex in #💻・tech-jobs
[2026-01-03T08:25:29.917Z] [BOT] ✅ Industry: Software Engineer II, Frontend Platform  @ brex
[2026-01-03T08:25:31.636Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Frontend Platform  @ brex in #🗽・new-york
[2026-01-03T08:25:31.636Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T08:25:33.137Z] [BOT] 💾 Marked as posted: Software Engineer II, Frontend Platform  @ brex (instance #1)
[2026-01-03T08:25:33.137Z] [BOT] 💾 BEFORE ARCHIVING: 302 jobs in database
[2026-01-03T08:25:33.137Z] [BOT] ✅ No jobs to archive (all 302 jobs within 7-day window)
[2026-01-03T08:25:33.141Z] [BOT] 💾 Saved posted_jobs.json: 302 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:36.142Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T08:25:36.143Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Convergint (East)" @ verkada
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T08:25:36.291Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Convergint (East) @ verkada in #📈・JID_fb739488
  ✅ Industry: National Channel Sales Manager, Convergint (East) @ verkada
[2026-01-03T08:25:37.792Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-03T08:25:37.792Z] [BOT] 💾 BEFORE ARCHIVING: 303 jobs in database
✅ No jobs to archive (all 303 jobs within 7-day window)
[2026-01-03T08:25:37.795Z] [BOT] 💾 Saved posted_jobs.json: 303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:37.796Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-03T08:25:37.796Z] [BOT] 💾 BEFORE ARCHIVING: 304 jobs in database
[2026-01-03T08:25:37.796Z] [BOT] ✅ No jobs to archive (all 304 jobs within 7-day window)
[2026-01-03T08:25:37.799Z] [BOT] 💾 Saved posted_jobs.json: 304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:25:40.800Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T08:25:40.800Z] [BOT] ⏭️  Skipping duplicate: JID_dfe4d61a (posted within 7 days)
[2026-01-03T08:25:40.801Z] [BOT] ⏭️  Skipping duplicate: JID_2b763968 (posted within 7 days)
⏭️  Skipping duplicate: JID_78a569be (posted within 7 days)
[2026-01-03T08:25:40.801Z] [BOT] ⏭️  Skipping duplicate: JID_3cac171d (posted within 7 days)
[2026-01-03T08:25:40.801Z] [BOT] ⏭️  Skipping duplicate: JID_069a63de (posted within 7 days)
⏭️  Skipping duplicate: JID_fe3ddf49 (posted within 7 days)
⏭️  Skipping duplicate: JID_3f9ff301 (posted within 7 days)
[2026-01-03T08:25:40.801Z] [BOT] ⏭️  Skipping duplicate: JID_304f6b44 (posted within 7 days)
⏭️  Skipping duplicate: JID_d13e9788 (posted within 7 days)
[2026-01-03T08:25:40.882Z] [BOT] ✅ Loaded pending queue: 995 total (975 pending, 20 enriched, 0 posted)
[2026-01-03T08:25:40.998Z] [BOT] ✅ Saved pending queue: 995 total (975 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-03T08:25:40.998Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T08:25:41.042Z] [BOT] 📂 Loaded 1308 existing routing entries
[2026-01-03T08:25:41.087Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 1317
   Timestamp: 2026-01-03T08:25:41.081Z
[2026-01-03T08:25:41.088Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 15
[2026-01-03T08:25:41.088Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-03T08:25:41.088Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
[2026-01-03T08:25:41.088Z] [BOT] Channels used: 8
   Top channels:
     1. #🗽・new-york: 4 posts
     2. #📣・marketing-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #📊・JID_9910249a: 1 posts
[2026-01-03T08:25:41.088Z] [BOT] [STATS] Channel stats saved
[2026-01-03T08:25:43.104Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*