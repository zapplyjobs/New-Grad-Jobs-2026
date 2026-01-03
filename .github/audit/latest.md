# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T08:05:50.860Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T08:05:00.633Z] ========================================
[2026-01-03T08:05:00.635Z] Discord Bot Execution Log
[2026-01-03T08:05:00.635Z] Environment: GitHub Actions
[2026-01-03T08:05:00.635Z] Node Version: v20.19.6
[2026-01-03T08:05:00.635Z] ========================================
[2026-01-03T08:05:00.635Z] Environment Variables Check:
[2026-01-03T08:05:00.636Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T08:05:00.636Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T08:05:00.636Z] 
Multi-Channel Configuration:
[2026-01-03T08:05:00.636Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.636Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.637Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.637Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T08:05:00.637Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T08:05:00.637Z] 
Data Files Check:
[2026-01-03T08:05:00.638Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170868 bytes)
[2026-01-03T08:05:00.640Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 157468 bytes)
[2026-01-03T08:05:00.640Z] 
========================================
[2026-01-03T08:05:00.640Z] Starting Enhanced Discord Bot...
[2026-01-03T08:05:00.640Z] ========================================
[2026-01-03T08:05:01.168Z] [BOT] ✅ Loaded V2 database: 284 jobs
[2026-01-03T08:05:01.572Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T08:05:01.573Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T08:05:01.573Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T08:05:01.574Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T08:05:01.736Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 201
[2026-01-03T08:05:01.738Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T08:05:01.738Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T08:05:01.739Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T08:05:01.739Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T08:05:01.740Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T08:05:01.745Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-03T08:05:01.746Z] [BOT] 📍 [ROUTING] "Senior Systems EPM" @ samsara
[2026-01-03T08:05:01.746Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T08:05:01.750Z] [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T08:05:01.999Z] [BOT] ✅ Created forum post: 🏢 Senior Systems EPM @ samsara in #📁・JID_e938df7b
[2026-01-03T08:05:02.000Z] [BOT] ✅ Industry: Senior Systems EPM @ samsara
[2026-01-03T08:05:03.655Z] [BOT] ✅ Created forum post: 🏢 Senior Systems EPM @ samsara in #🌉・san-francisco
[2026-01-03T08:05:03.655Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T08:05:05.157Z] [BOT] 💾 Marked as posted: Senior Systems EPM @ samsara (instance #1)
[2026-01-03T08:05:05.157Z] [BOT] 💾 BEFORE ARCHIVING: 285 jobs in database
[2026-01-03T08:05:05.157Z] [BOT] ✅ No jobs to archive (all 285 jobs within 7-day window)
[2026-01-03T08:05:05.164Z] [BOT] 💾 Saved posted_jobs.json: 285 active jobs
[2026-01-03T08:05:05.164Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "University Recruiter" @ samsara
[2026-01-03T08:05:05.164Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T08:05:05.311Z] [BOT] ✅ Created forum post: 🏢 University Recruiter @ samsara in #📁・JID_e938df7b
[2026-01-03T08:05:05.311Z] [BOT] ✅ Industry: University Recruiter @ samsara
[2026-01-03T08:05:06.812Z] [BOT] 💾 Marked as posted: University Recruiter @ samsara (instance #1)
[2026-01-03T08:05:06.813Z] [BOT] 💾 BEFORE ARCHIVING: 286 jobs in database
[2026-01-03T08:05:06.813Z] [BOT] ✅ No jobs to archive (all 286 jobs within 7-day window)
[2026-01-03T08:05:06.815Z] [BOT] 💾 Saved posted_jobs.json: 286 active jobs
[2026-01-03T08:05:06.816Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:09.817Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T08:05:09.817Z] [BOT] 📍 [ROUTING] "Software Engineer II - Mobile Platform" @ samsara
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T08:05:10.023Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II - Mobile Platform @ samsara in #💻・tech-jobs
[2026-01-03T08:05:10.023Z] [BOT] ✅ Industry: Software Engineer II - Mobile Platform @ samsara
[2026-01-03T08:05:11.762Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II - Mobile Platform @ samsara in #🌉・san-francisco
[2026-01-03T08:05:11.762Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T08:05:13.263Z] [BOT] 💾 Marked as posted: Software Engineer II - Mobile Platform @ samsara (instance #1)
[2026-01-03T08:05:13.264Z] [BOT] 💾 BEFORE ARCHIVING: 287 jobs in database
[2026-01-03T08:05:13.264Z] [BOT] ✅ No jobs to archive (all 287 jobs within 7-day window)
[2026-01-03T08:05:13.267Z] [BOT] 💾 Saved posted_jobs.json: 287 active jobs
[2026-01-03T08:05:13.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:16.267Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T08:05:16.268Z] [BOT] 📍 [ROUTING] "Solutions Integration Engineer III" @ samsara
[2026-01-03T08:05:16.268Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T08:05:16.497Z] [BOT] ✅ Created forum post: 🏢 Solutions Integration Engineer III @ samsara in #🤖・ai-jobs
[2026-01-03T08:05:16.497Z] [BOT] ✅ Industry: Solutions Integration Engineer III @ samsara
[2026-01-03T08:05:18.198Z] [BOT] ✅ Created forum post: 🏢 Solutions Integration Engineer III @ samsara in #🌆・chicago
[2026-01-03T08:05:18.198Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-03T08:05:19.699Z] [BOT] 💾 Marked as posted: Solutions Integration Engineer III @ samsara (instance #1)
[2026-01-03T08:05:19.699Z] [BOT] 💾 BEFORE ARCHIVING: 288 jobs in database
[2026-01-03T08:05:19.700Z] [BOT] ✅ No jobs to archive (all 288 jobs within 7-day window)
[2026-01-03T08:05:19.703Z] [BOT] 💾 Saved posted_jobs.json: 288 active jobs
[2026-01-03T08:05:19.703Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:22.703Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-03T08:05:22.704Z] [BOT] 📍 [ROUTING] "Value Architect" @ samsara
[2026-01-03T08:05:22.704Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:05:22.835Z] [BOT] ✅ Created forum post: 🏢 Value Architect @ samsara in #💲・sales-jobs
  ✅ Industry: Value Architect @ samsara
[2026-01-03T08:05:24.672Z] [BOT] ✅ Created forum post: 🏢 Value Architect @ samsara in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T08:05:26.172Z] [BOT] 💾 Marked as posted: Value Architect @ samsara (instance #1)
[2026-01-03T08:05:26.173Z] [BOT] 💾 BEFORE ARCHIVING: 289 jobs in database
[2026-01-03T08:05:26.173Z] [BOT] ✅ No jobs to archive (all 289 jobs within 7-day window)
[2026-01-03T08:05:26.176Z] [BOT] 💾 Saved posted_jobs.json: 289 active jobs
[2026-01-03T08:05:26.176Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:26.176Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Salt Lake City" @ verkada
[2026-01-03T08:05:26.176Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:05:26.367Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), Salt Lake City @ verkada in #💲・sales-jobs
[2026-01-03T08:05:26.367Z] [BOT] ✅ Industry: Sales Development Representative (AAE), Salt Lake City @ verkada
[2026-01-03T08:05:27.868Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Salt Lake City @ verkada (instance #1)
[2026-01-03T08:05:27.868Z] [BOT] 💾 BEFORE ARCHIVING: 290 jobs in database
[2026-01-03T08:05:27.868Z] [BOT] ✅ No jobs to archive (all 290 jobs within 7-day window)
[2026-01-03T08:05:27.872Z] [BOT] 💾 Saved posted_jobs.json: 290 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:27.872Z] [BOT] 📍 [ROUTING] " Enterprise Sales Executive (SLED)" @ datadog
[2026-01-03T08:05:27.872Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:05:28.195Z] [BOT] ✅ Created forum post: 🏢  Enterprise Sales Executive (SLED) @ datadog in #💲・sales-jobs
[2026-01-03T08:05:28.195Z] [BOT] ✅ Industry:  Enterprise Sales Executive (SLED) @ datadog
[2026-01-03T08:05:30.157Z] [BOT] ✅ Created forum post: 🏢  Enterprise Sales Executive (SLED) @ datadog in #💻・remote-usa
[2026-01-03T08:05:30.157Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T08:05:31.657Z] [BOT] 💾 Marked as posted:  Enterprise Sales Executive (SLED) @ datadog (instance #1)
[2026-01-03T08:05:31.657Z] [BOT] 💾 BEFORE ARCHIVING: 291 jobs in database
[2026-01-03T08:05:31.657Z] [BOT] ✅ No jobs to archive (all 291 jobs within 7-day window)
[2026-01-03T08:05:31.661Z] [BOT] 💾 Saved posted_jobs.json: 291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:31.661Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-03T08:05:31.661Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:05:31.829Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
[2026-01-03T08:05:31.829Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-03T08:05:33.456Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #🌉・san-francisco
[2026-01-03T08:05:33.456Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T08:05:34.956Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-03T08:05:34.957Z] [BOT] 💾 BEFORE ARCHIVING: 292 jobs in database
[2026-01-03T08:05:34.957Z] [BOT] ✅ No jobs to archive (all 292 jobs within 7-day window)
[2026-01-03T08:05:34.961Z] [BOT] 💾 Saved posted_jobs.json: 292 active jobs
[2026-01-03T08:05:34.961Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:34.961Z] [BOT] 📍 [ROUTING] "Manager 1, Technical Account Management - New York" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:05:35.103Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Account Management - New York @ datadog in #💲・sales-jobs
[2026-01-03T08:05:35.104Z] [BOT] ✅ Industry: Manager 1, Technical Account Management - New York @ datadog
[2026-01-03T08:05:36.819Z] [BOT] ✅ Created forum post: 🏢 Manager 1, Technical Account Management - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:05:38.319Z] [BOT] 💾 Marked as posted: Manager 1, Technical Account Management - New York @ datadog (instance #1)
[2026-01-03T08:05:38.320Z] [BOT] 💾 BEFORE ARCHIVING: 293 jobs in database
[2026-01-03T08:05:38.320Z] [BOT] ✅ No jobs to archive (all 293 jobs within 7-day window)
[2026-01-03T08:05:38.323Z] [BOT] 💾 Saved posted_jobs.json: 293 active jobs
[2026-01-03T08:05:38.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:41.324Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T08:05:41.324Z] [BOT] 📍 [ROUTING] "Senior Manager, Stock Administration" @ discord
[2026-01-03T08:05:41.324Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T08:05:41.683Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Stock Administration @ discord in #💰・finance-jobs
  ✅ Industry: Senior Manager, Stock Administration @ discord
[2026-01-03T08:05:43.419Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Stock Administration @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T08:05:44.919Z] [BOT] 💾 Marked as posted: Senior Manager, Stock Administration @ discord (instance #1)
[2026-01-03T08:05:44.920Z] [BOT] 💾 BEFORE ARCHIVING: 294 jobs in database
[2026-01-03T08:05:44.920Z] [BOT] ✅ No jobs to archive (all 294 jobs within 7-day window)
[2026-01-03T08:05:44.923Z] [BOT] 💾 Saved posted_jobs.json: 294 active jobs
[2026-01-03T08:05:44.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:05:47.923Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T08:05:47.923Z] [BOT] ⏭️  Skipping duplicate: JID_9cf2a884 (posted within 7 days)
[2026-01-03T08:05:47.924Z] [BOT] ⏭️  Skipping duplicate: JID_f676ed39 (posted within 7 days)
[2026-01-03T08:05:47.924Z] [BOT] ⏭️  Skipping duplicate: JID_a5f1480c (posted within 7 days)
⏭️  Skipping duplicate: JID_6c22f675 (posted within 7 days)
⏭️  Skipping duplicate: JID_a35fcd58 (posted within 7 days)
[2026-01-03T08:05:47.924Z] [BOT] ⏭️  Skipping duplicate: JID_ff11a902 (posted within 7 days)
[2026-01-03T08:05:47.924Z] [BOT] ⏭️  Skipping duplicate: JID_f3eebe33 (posted within 7 days)
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️  Skipping duplicate: JID_da25f3c9 (posted within 7 days)
[2026-01-03T08:05:47.924Z] [BOT] ⏭️  Skipping duplicate: JID_13c81bc5 (posted within 7 days)
[2026-01-03T08:05:48.014Z] [BOT] ✅ Loaded pending queue: 1005 total (985 pending, 20 enriched, 0 posted)
[2026-01-03T08:05:48.133Z] [BOT] ✅ Saved pending queue: 1005 total (985 pending, 10 enriched, 10 posted)
[2026-01-03T08:05:48.134Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T08:05:48.178Z] [BOT] 📂 Loaded 1298 existing routing entries
[2026-01-03T08:05:48.224Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T08:05:48.224Z] [BOT] Total entries: 1308
   Timestamp: 2026-01-03T08:05:48.218Z
[2026-01-03T08:05:48.224Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T08:05:48.225Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T08:05:48.225Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T08:05:48.225Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 10
   Top channels:
[2026-01-03T08:05:48.225Z] [BOT] 1. #💲・sales-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #📁・JID_e938df7b: 2 posts
[2026-01-03T08:05:48.225Z] [BOT] 4. #💻・tech-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-03T08:05:48.225Z] [BOT] [STATS] Channel stats saved
[2026-01-03T08:05:50.246Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*