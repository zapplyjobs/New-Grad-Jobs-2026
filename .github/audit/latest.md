# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T08:28:11.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T08:27:59.596Z] ========================================
[2026-02-03T08:27:59.598Z] Discord Bot Execution Log
[2026-02-03T08:27:59.598Z] Environment: GitHub Actions
[2026-02-03T08:27:59.598Z] Node Version: v20.20.0
[2026-02-03T08:27:59.598Z] ========================================
[2026-02-03T08:27:59.598Z] Environment Variables Check:
[2026-02-03T08:27:59.598Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T08:27:59.598Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T08:27:59.598Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T08:27:59.598Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T08:27:59.598Z] 
Multi-Channel Configuration:
[2026-02-03T08:27:59.598Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T08:27:59.599Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T08:27:59.599Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:27:59.599Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T08:27:59.599Z] 
Data Files Check:
[2026-02-03T08:27:59.600Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178762 bytes)
[2026-02-03T08:27:59.673Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T08:27:59.674Z] 
========================================
[2026-02-03T08:27:59.674Z] Starting Enhanced Discord Bot...
[2026-02-03T08:27:59.674Z] ========================================
[2026-02-03T08:28:00.183Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T08:28:00.777Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T08:28:00.777Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T08:28:00.778Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T08:28:00.807Z] [BOT] ✅ Loaded pending queue: 322 total (272 pending, 50 enriched, 0 posted)
[2026-02-03T08:28:00.807Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T08:28:00.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T08:28:00.808Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T08:28:00.809Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T08:28:00.823Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T08:28:00.823Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
[2026-02-03T08:28:00.823Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-03T08:28:00.824Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-03T08:28:00.859Z] [BOT] ✅ Loaded pending queue: 322 total (272 pending, 50 enriched, 0 posted)
[2026-02-03T08:28:00.892Z] [BOT] ✅ Saved pending queue: 274 total (272 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-03T08:28:00.892Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T08:28:00.892Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T08:28:00.893Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-03T08:28:00.894Z] [BOT] 📍 [ROUTING] "Software Development Engineer III - Content Hub" @ gohighlevel
[2026-02-03T08:28:00.895Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-03T08:28:00.911Z] [BOT ERROR] (node:2606) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T08:28:01.276Z] [BOT] ✅ Posted message: Software Development Engineer III - Content Hub @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Software Development Engineer III - Content Hub @ gohighlevel
[2026-02-03T08:28:01.278Z] [BOT] 💾 Added channel posting: Software Development Engineer III - Content Hub @ gohighlevel → category channel (1 total channels)
[2026-02-03T08:28:01.278Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-03T08:28:01.338Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T08:28:01.339Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-03T08:28:01.344Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T08:28:01.344Z] [BOT] 💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-03T08:28:01.345Z] [BOT] ✅ No jobs to archive (all 2245 jobs within 7-day window)
[2026-02-03T08:28:01.481Z] [BOT] 💾 Saved posted_jobs.json: 2245 active jobs
[2026-02-03T08:28:01.483Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-03T08:28:03.367Z] [BOT] ✅ Posted message: Software Development Engineer III - Content Hub @ gohighlevel in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-03T08:28:03.368Z] [BOT] 💾 Added channel posting: Software Development Engineer III - Content Hub @ gohighlevel → location channel (2 total channels)
[2026-02-03T08:28:03.368Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-03T08:28:03.422Z] [BOT] ✅ Loaded V2 database: 2245 jobs
💾 DISK STATE: 2245 jobs on disk
[2026-02-03T08:28:03.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-03T08:28:03.427Z] [BOT] 🔀 Deep merged: Software Development Engineer III - Content Hub @ gohighlevel (disk: 1 channels → merged: 2 channels)
[2026-02-03T08:28:03.427Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-03T08:28:03.429Z] [BOT] ✅ No jobs to archive (all 2245 jobs within 7-day window)
[2026-02-03T08:28:03.554Z] [BOT] 💾 Saved posted_jobs.json: 2245 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T08:28:08.057Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T08:28:08.058Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c8971f69-..." not found, but found as SHA256 "7554ffe73d1ad728"
[2026-02-03T08:28:08.058Z] [BOT] ⏭️  Skipping duplicate: JID_5378b48b (posted within 7 days)
[2026-02-03T08:28:08.082Z] [BOT] ✅ Loaded pending queue: 274 total (272 pending, 2 enriched, 0 posted)
[2026-02-03T08:28:08.114Z] [BOT] ✅ Saved pending queue: 274 total (272 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-03T08:28:08.216Z] [BOT] 📂 Loaded 12325 existing routing entries
[2026-02-03T08:28:08.349Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12326
   Timestamp: 2026-02-03T08:28:08.303Z
[2026-02-03T08:28:08.349Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
[2026-02-03T08:28:08.349Z] [BOT] Skipped: 49
[2026-02-03T08:28:08.350Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-03T08:28:08.350Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🏠・JID_ead674af: 1 posts
[2026-02-03T08:28:08.350Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T08:28:08.350Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-03T08:28:08.411Z] [BOT] ✅ Loaded V2 database: 2245 jobs
💾 DISK STATE: 2245 jobs on disk
[2026-02-03T08:28:08.411Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-03T08:28:08.415Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T08:28:08.416Z] [BOT] 💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-03T08:28:08.417Z] [BOT] ✅ No jobs to archive (all 2245 jobs within 7-day window)
[2026-02-03T08:28:08.549Z] [BOT] 💾 Saved posted_jobs.json: 2245 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T08:28:08.550Z] [BOT] ✅ Database saved successfully
[2026-02-03T08:28:10.569Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2606) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*