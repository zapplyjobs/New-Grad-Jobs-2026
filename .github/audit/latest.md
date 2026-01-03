# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T06:26:09.496Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T06:25:31.183Z] ========================================
[2026-01-03T06:25:31.185Z] Discord Bot Execution Log
[2026-01-03T06:25:31.185Z] Environment: GitHub Actions
[2026-01-03T06:25:31.185Z] Node Version: v20.19.6
[2026-01-03T06:25:31.186Z] ========================================
[2026-01-03T06:25:31.186Z] Environment Variables Check:
[2026-01-03T06:25:31.186Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T06:25:31.186Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.186Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T06:25:31.186Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T06:25:31.186Z] 
Multi-Channel Configuration:
[2026-01-03T06:25:31.186Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.186Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.186Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T06:25:31.187Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T06:25:31.187Z] 
Data Files Check:
[2026-01-03T06:25:31.188Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170041 bytes)
[2026-01-03T06:25:31.190Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 123126 bytes)
[2026-01-03T06:25:31.190Z] 
========================================
[2026-01-03T06:25:31.190Z] Starting Enhanced Discord Bot...
[2026-01-03T06:25:31.190Z] ========================================
[2026-01-03T06:25:31.704Z] [BOT] ✅ Loaded V2 database: 215 jobs
[2026-01-03T06:25:32.220Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T06:25:32.220Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T06:25:32.220Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T06:25:32.221Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T06:25:32.350Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 135
[2026-01-03T06:25:32.351Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T06:25:32.352Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T06:25:32.352Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T06:25:32.352Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T06:25:32.353Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-03T06:25:32.353Z] [BOT] - Director, Sales Commissions @ samsara: atlanta, georgia, united states, phoenix, arizona, united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T06:25:32.358Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T06:25:32.359Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Houston, TX" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-03T06:25:32.359Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T06:25:32.363Z] [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T06:25:32.500Z] [BOT] ✅ Created forum post: 🏢 Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara in #📈・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara
[2026-01-03T06:25:34.003Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara (instance #1)
[2026-01-03T06:25:34.003Z] [BOT] 💾 BEFORE ARCHIVING: 216 jobs in database
[2026-01-03T06:25:34.004Z] [BOT] ✅ No jobs to archive (all 216 jobs within 7-day window)
[2026-01-03T06:25:34.010Z] [BOT] 💾 Saved posted_jobs.json: 216 active jobs
[2026-01-03T06:25:34.011Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:37.012Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-03T06:25:37.012Z] [BOT] 📍 [ROUTING] "Customer Success Associate" @ samsara
[2026-01-03T06:25:37.012Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:37.189Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate @ samsara in #💲・sales-jobs
  ✅ Industry: Customer Success Associate @ samsara
[2026-01-03T06:25:38.962Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T06:25:40.462Z] [BOT] 💾 Marked as posted: Customer Success Associate @ samsara (instance #1)
[2026-01-03T06:25:40.462Z] [BOT] 💾 BEFORE ARCHIVING: 217 jobs in database
✅ No jobs to archive (all 217 jobs within 7-day window)
[2026-01-03T06:25:40.466Z] [BOT] 💾 Saved posted_jobs.json: 217 active jobs
[2026-01-03T06:25:40.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:40.466Z] [BOT] 📍 [ROUTING] "Director, Sales Commissions" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:40.604Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Commissions @ samsara in #💲・sales-jobs
  ✅ Industry: Director, Sales Commissions @ samsara
[2026-01-03T06:25:42.106Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
[2026-01-03T06:25:42.106Z] [BOT] 💾 BEFORE ARCHIVING: 218 jobs in database
[2026-01-03T06:25:42.106Z] [BOT] ✅ No jobs to archive (all 218 jobs within 7-day window)
[2026-01-03T06:25:42.109Z] [BOT] 💾 Saved posted_jobs.json: 218 active jobs
[2026-01-03T06:25:42.109Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:42.109Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
💾 BEFORE ARCHIVING: 219 jobs in database
[2026-01-03T06:25:42.109Z] [BOT] ✅ No jobs to archive (all 219 jobs within 7-day window)
[2026-01-03T06:25:42.111Z] [BOT] 💾 Saved posted_jobs.json: 219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:42.112Z] [BOT] 📍 [ROUTING] "Enterprise Account Development Representative - Outbound" @ samsara
   Category: SALES (matched: "sales")
[2026-01-03T06:25:42.112Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:42.311Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Development Representative - Outbound @ samsara in #💲・sales-jobs
  ✅ Industry: Enterprise Account Development Representative - Outbound @ samsara
[2026-01-03T06:25:43.813Z] [BOT] 💾 Marked as posted: Enterprise Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-03T06:25:43.813Z] [BOT] 💾 BEFORE ARCHIVING: 220 jobs in database
✅ No jobs to archive (all 220 jobs within 7-day window)
[2026-01-03T06:25:43.815Z] [BOT] 💾 Saved posted_jobs.json: 220 active jobs
[2026-01-03T06:25:43.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:43.815Z] [BOT] 📍 [ROUTING] "Enterprise Business Development Representative- Outbound" @ samsara
[2026-01-03T06:25:43.816Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:43.952Z] [BOT] ✅ Created forum post: 🏢 Enterprise Business Development Representative- Outbound @ samsara in #💲・sales-jobs
  ✅ Industry: Enterprise Business Development Representative- Outbound @ samsara
[2026-01-03T06:25:45.453Z] [BOT] 💾 Marked as posted: Enterprise Business Development Representative- Outbound @ samsara (instance #1)
[2026-01-03T06:25:45.453Z] [BOT] 💾 BEFORE ARCHIVING: 221 jobs in database
✅ No jobs to archive (all 221 jobs within 7-day window)
[2026-01-03T06:25:45.455Z] [BOT] 💾 Saved posted_jobs.json: 221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:45.456Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant" @ samsara
[2026-01-03T06:25:45.456Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:45.972Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant @ samsara in #💲・sales-jobs
[2026-01-03T06:25:45.972Z] [BOT] ✅ Industry: Enterprise Implementation Consultant @ samsara
[2026-01-03T06:25:47.635Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T06:25:49.136Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant @ samsara (instance #1)
[2026-01-03T06:25:49.137Z] [BOT] 💾 BEFORE ARCHIVING: 222 jobs in database
[2026-01-03T06:25:49.137Z] [BOT] ✅ No jobs to archive (all 222 jobs within 7-day window)
[2026-01-03T06:25:49.140Z] [BOT] 💾 Saved posted_jobs.json: 222 active jobs
[2026-01-03T06:25:49.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:49.140Z] [BOT] 📍 [ROUTING] "Manager Account Development, Relocation to Atlanta" @ samsara
[2026-01-03T06:25:49.141Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:25:49.339Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development, Relocation to Atlanta @ samsara in #💲・sales-jobs
[2026-01-03T06:25:49.339Z] [BOT] ✅ Industry: Manager Account Development, Relocation to Atlanta @ samsara
[2026-01-03T06:25:50.842Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-03T06:25:50.842Z] [BOT] 💾 BEFORE ARCHIVING: 223 jobs in database
[2026-01-03T06:25:50.842Z] [BOT] ✅ No jobs to archive (all 223 jobs within 7-day window)
[2026-01-03T06:25:50.846Z] [BOT] 💾 Saved posted_jobs.json: 223 active jobs
[2026-01-03T06:25:50.846Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:25:53.847Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T06:25:53.848Z] [BOT] 📍 [ROUTING] "Executive Assistant, Go to Market" @ samsara
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T06:25:53.991Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Go to Market @ samsara in #📁・JID_e938df7b
[2026-01-03T06:25:53.991Z] [BOT] ✅ Industry: Executive Assistant, Go to Market @ samsara
[2026-01-03T06:25:55.714Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Go to Market @ samsara in #🌉・san-francisco
[2026-01-03T06:25:55.714Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T06:25:57.216Z] [BOT] 💾 Marked as posted: Executive Assistant, Go to Market @ samsara (instance #1)
[2026-01-03T06:25:57.216Z] [BOT] 💾 BEFORE ARCHIVING: 224 jobs in database
[2026-01-03T06:25:57.216Z] [BOT] ✅ No jobs to archive (all 224 jobs within 7-day window)
[2026-01-03T06:25:57.218Z] [BOT] 💾 Saved posted_jobs.json: 224 active jobs
[2026-01-03T06:25:57.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:26:00.219Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T06:26:00.219Z] [BOT] 📍 [ROUTING] "Hardware Solutions Firmware Engineer" @ samsara
[2026-01-03T06:26:00.220Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T06:26:00.374Z] [BOT] ✅ Created forum post: 🏢 Hardware Solutions Firmware Engineer @ samsara in #💻・tech-jobs
[2026-01-03T06:26:00.374Z] [BOT] ✅ Industry: Hardware Solutions Firmware Engineer @ samsara
[2026-01-03T06:26:02.080Z] [BOT] ✅ Created forum post: 🏢 Hardware Solutions Firmware Engineer @ samsara in #🌉・san-francisco
[2026-01-03T06:26:02.081Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T06:26:03.582Z] [BOT] 💾 Marked as posted: Hardware Solutions Firmware Engineer @ samsara (instance #1)
[2026-01-03T06:26:03.582Z] [BOT] 💾 BEFORE ARCHIVING: 225 jobs in database
[2026-01-03T06:26:03.582Z] [BOT] ✅ No jobs to archive (all 225 jobs within 7-day window)
[2026-01-03T06:26:03.585Z] [BOT] 💾 Saved posted_jobs.json: 225 active jobs
[2026-01-03T06:26:03.585Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:26:06.586Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_4af0c27d (posted within 7 days)
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_49fc1d4b (posted within 7 days)
⏭️  Skipping duplicate: JID_a9634ea9 (posted within 7 days)
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_97f60550 (posted within 7 days)
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_7f77c8d1 (posted within 7 days)
⏭️  Skipping duplicate: JID_ff256bbe (posted within 7 days)
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_26334b8f (posted within 7 days)
⏭️  Skipping duplicate: JID_b46f8a25 (posted within 7 days)
[2026-01-03T06:26:06.587Z] [BOT] ⏭️  Skipping duplicate: JID_05ff4096 (posted within 7 days)
[2026-01-03T06:26:06.680Z] [BOT] ✅ Loaded pending queue: 1075 total (1055 pending, 20 enriched, 0 posted)
[2026-01-03T06:26:06.798Z] [BOT] ✅ Saved pending queue: 1075 total (1055 pending, 11 enriched, 9 posted)
[2026-01-03T06:26:06.798Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T06:26:06.841Z] [BOT] 📂 Loaded 1271 existing routing entries
[2026-01-03T06:26:06.886Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-03T06:26:06.886Z] [BOT] New entries: 9
   Total entries: 1280
   Timestamp: 2026-01-03T06:26:06.880Z
[2026-01-03T06:26:06.886Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T06:26:06.886Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-03T06:26:06.887Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T06:26:06.887Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 6 posts
[2026-01-03T06:26:06.887Z] [BOT] 2. #💻・remote-usa: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #📁・JID_e938df7b: 1 posts
[2026-01-03T06:26:06.887Z] [BOT] [STATS] Channel stats saved
[2026-01-03T06:26:08.909Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*