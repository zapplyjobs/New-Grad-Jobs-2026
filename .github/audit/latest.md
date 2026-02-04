# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T00:59:42.500Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T00:59:28.110Z] ========================================
[2026-02-04T00:59:28.112Z] Discord Bot Execution Log
[2026-02-04T00:59:28.112Z] Environment: GitHub Actions
[2026-02-04T00:59:28.112Z] Node Version: v20.20.0
[2026-02-04T00:59:28.112Z] ========================================
[2026-02-04T00:59:28.112Z] Environment Variables Check:
[2026-02-04T00:59:28.112Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T00:59:28.112Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T00:59:28.112Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T00:59:28.112Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T00:59:28.112Z] 
Multi-Channel Configuration:
[2026-02-04T00:59:28.112Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T00:59:28.113Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T00:59:28.113Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T00:59:28.113Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T00:59:28.113Z] 
Data Files Check:
[2026-02-04T00:59:28.114Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171784 bytes)
[2026-02-04T00:59:28.188Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11434202 bytes)
[2026-02-04T00:59:28.189Z] 
========================================
[2026-02-04T00:59:28.189Z] Starting Enhanced Discord Bot...
[2026-02-04T00:59:28.189Z] ========================================
[2026-02-04T00:59:28.714Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-04T00:59:29.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T00:59:29.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T00:59:29.534Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T00:59:29.563Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T00:59:29.563Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:59:29.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T00:59:29.565Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T00:59:29.565Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T00:59:29.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T00:59:29.566Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T00:59:29.579Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T00:59:29.579Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
[2026-02-04T00:59:29.579Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-04T00:59:29.579Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-04T00:59:29.579Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T00:59:29.580Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T00:59:29.616Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-04T00:59:29.648Z] [BOT] ✅ Saved pending queue: 270 total (266 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (46 blacklisted)
[2026-02-04T00:59:29.648Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-04T00:59:29.649Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-04T00:59:29.649Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T00:59:29.651Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-04T00:59:29.652Z] [BOT] 📍 [ROUTING] "Security Engineer, Offensive Security" @ anthropic
[2026-02-04T00:59:29.652Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T00:59:29.669Z] [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T00:59:30.145Z] [BOT] ✅ Posted message: Security Engineer, Offensive Security @ anthropic in #💻・tech-jobs
[2026-02-04T00:59:30.145Z] [BOT] ✅ Industry: Security Engineer, Offensive Security @ anthropic
[2026-02-04T00:59:30.146Z] [BOT] 💾 Added channel posting: Security Engineer, Offensive Security @ anthropic → category channel (1 total channels)
[2026-02-04T00:59:30.147Z] [BOT] 💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T00:59:30.207Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-04T00:59:30.208Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T00:59:30.213Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:59:30.213Z] [BOT] 💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T00:59:30.215Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T00:59:30.360Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T00:59:32.135Z] [BOT] ✅ Posted message: Security Engineer, Offensive Security @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T00:59:32.135Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T00:59:32.135Z] [BOT] 💾 Added channel posting: Security Engineer, Offensive Security @ anthropic → location channel (2 total channels)
[2026-02-04T00:59:32.135Z] [BOT] 💾 BEFORE MERGE: 2261 jobs in memory (cached)
[2026-02-04T00:59:32.190Z] [BOT] ✅ Loaded V2 database: 2261 jobs
💾 DISK STATE: 2261 jobs on disk
[2026-02-04T00:59:32.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2261
[2026-02-04T00:59:32.196Z] [BOT] 🔀 Deep merged: Security Engineer, Offensive Security @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T00:59:32.196Z] [BOT] 💾 AFTER MERGE: 2261 jobs (merged disk + memory)
[2026-02-04T00:59:32.197Z] [BOT] ✅ No jobs to archive (all 2261 jobs within 7-day window)
[2026-02-04T00:59:32.322Z] [BOT] 💾 Saved posted_jobs.json: 2261 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T00:59:33.826Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Midwest, SLED" @ verkada
[2026-02-04T00:59:33.826Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T00:59:34.104Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Midwest, SLED @ verkada in #💻・tech-jobs
[2026-02-04T00:59:34.104Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Midwest, SLED @ verkada
[2026-02-04T00:59:34.105Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Midwest, SLED @ verkada → category channel (1 total channels)
[2026-02-04T00:59:34.105Z] [BOT] 💾 BEFORE MERGE: 2262 jobs in memory (cached)
[2026-02-04T00:59:34.163Z] [BOT] ✅ Loaded V2 database: 2261 jobs
💾 DISK STATE: 2261 jobs on disk
[2026-02-04T00:59:34.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2262
[2026-02-04T00:59:34.169Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:59:34.169Z] [BOT] 💾 AFTER MERGE: 2262 jobs (merged disk + memory)
[2026-02-04T00:59:34.171Z] [BOT] ✅ No jobs to archive (all 2262 jobs within 7-day window)
[2026-02-04T00:59:34.301Z] [BOT] 💾 Saved posted_jobs.json: 2262 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T00:59:38.803Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-04T00:59:38.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "209eb24507ab67ac"
[2026-02-04T00:59:38.805Z] [BOT] ⏭️  Skipping duplicate: JID_fbf27841 (posted within 7 days)
[2026-02-04T00:59:38.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10ced862..." not found, but found as SHA256 "fc778981a667b4c8"
⏭️  Skipping duplicate: JID_152141f5 (posted within 7 days)
[2026-02-04T00:59:38.829Z] [BOT] ✅ Loaded pending queue: 270 total (266 pending, 4 enriched, 0 posted)
[2026-02-04T00:59:38.862Z] [BOT] ✅ Saved pending queue: 270 total (266 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T00:59:38.969Z] [BOT] 📂 Loaded 12341 existing routing entries
[2026-02-04T00:59:39.109Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12343
   Timestamp: 2026-02-04T00:59:39.060Z
[2026-02-04T00:59:39.110Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
   Total attempts: 51
   Successful: 3
[2026-02-04T00:59:39.110Z] [BOT] Failed: 0
   Skipped: 48
[2026-02-04T00:59:39.110Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
[2026-02-04T00:59:39.110Z] [BOT] Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T00:59:39.110Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2262 jobs in memory (cached)
[2026-02-04T00:59:39.182Z] [BOT] ✅ Loaded V2 database: 2262 jobs
💾 DISK STATE: 2262 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2262
[2026-02-04T00:59:39.189Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T00:59:39.189Z] [BOT] 💾 AFTER MERGE: 2262 jobs (merged disk + memory)
[2026-02-04T00:59:39.191Z] [BOT] ✅ No jobs to archive (all 2262 jobs within 7-day window)
[2026-02-04T00:59:39.322Z] [BOT] 💾 Saved posted_jobs.json: 2262 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T00:59:39.322Z] [BOT] ✅ Database saved successfully
[2026-02-04T00:59:41.343Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*