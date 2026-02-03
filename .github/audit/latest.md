# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T22:34:13.104Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T22:33:57.520Z] ========================================
[2026-02-03T22:33:57.522Z] Discord Bot Execution Log
[2026-02-03T22:33:57.522Z] Environment: GitHub Actions
[2026-02-03T22:33:57.522Z] Node Version: v20.20.0
[2026-02-03T22:33:57.522Z] ========================================
[2026-02-03T22:33:57.522Z] Environment Variables Check:
[2026-02-03T22:33:57.522Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T22:33:57.523Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T22:33:57.523Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T22:33:57.523Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T22:33:57.523Z] 
Multi-Channel Configuration:
[2026-02-03T22:33:57.523Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T22:33:57.523Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.523Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.523Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T22:33:57.523Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.523Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.523Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.523Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.524Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T22:33:57.524Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T22:33:57.524Z] 
Data Files Check:
[2026-02-03T22:33:57.525Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176511 bytes)
[2026-02-03T22:33:57.583Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11410818 bytes)
[2026-02-03T22:33:57.583Z] 
========================================
[2026-02-03T22:33:57.583Z] Starting Enhanced Discord Bot...
[2026-02-03T22:33:57.583Z] ========================================
[2026-02-03T22:33:58.147Z] [BOT] ✅ Loaded V2 database: 2256 jobs
[2026-02-03T22:33:59.371Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T22:33:59.372Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T22:33:59.372Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T22:33:59.393Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-03T22:33:59.393Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T22:33:59.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T22:33:59.394Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T22:33:59.395Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T22:33:59.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T22:33:59.395Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-03T22:33:59.395Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T22:33:59.414Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T22:33:59.414Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-03T22:33:59.414Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
[2026-02-03T22:33:59.414Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
[2026-02-03T22:33:59.414Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-03T22:33:59.414Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Technical Support Manager  at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-03T22:33:59.415Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-03T22:33:59.416Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-03T22:33:59.443Z] [BOT] ✅ Loaded pending queue: 316 total (266 pending, 50 enriched, 0 posted)
[2026-02-03T22:33:59.478Z] [BOT] ✅ Saved pending queue: 270 total (266 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-03T22:33:59.478Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-03T22:33:59.479Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T22:33:59.482Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-03T22:33:59.483Z] [BOT] 📍 [ROUTING] "Startup Growth Advisor (Account Executive, Greenfield)" @ vercel
[2026-02-03T22:33:59.483Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T22:33:59.500Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T22:33:59.743Z] [BOT] ✅ Posted message: Startup Growth Advisor (Account Executive, Greenfield) @ vercel in #💻・tech-jobs
  ✅ Industry: Startup Growth Advisor (Account Executive, Greenfield) @ vercel
[2026-02-03T22:33:59.744Z] [BOT] 💾 Added channel posting: Startup Growth Advisor (Account Executive, Greenfield) @ vercel → category channel (1 total channels)
[2026-02-03T22:33:59.744Z] [BOT] 💾 BEFORE MERGE: 2257 jobs in memory (cached)
[2026-02-03T22:33:59.787Z] [BOT] ✅ Loaded V2 database: 2256 jobs
💾 DISK STATE: 2256 jobs on disk
[2026-02-03T22:33:59.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2257
[2026-02-03T22:33:59.793Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T22:33:59.793Z] [BOT] 💾 AFTER MERGE: 2257 jobs (merged disk + memory)
[2026-02-03T22:33:59.794Z] [BOT] ✅ No jobs to archive (all 2257 jobs within 7-day window)
[2026-02-03T22:33:59.931Z] [BOT] 💾 Saved posted_jobs.json: 2257 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:34:01.659Z] [BOT] ✅ Posted message: Startup Growth Advisor (Account Executive, Greenfield) @ vercel in #🌉・JID_739bbc0b
[2026-02-03T22:34:01.659Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T22:34:01.659Z] [BOT] 💾 Added channel posting: Startup Growth Advisor (Account Executive, Greenfield) @ vercel → location channel (2 total channels)
[2026-02-03T22:34:01.659Z] [BOT] 💾 BEFORE MERGE: 2257 jobs in memory (cached)
[2026-02-03T22:34:01.696Z] [BOT] ✅ Loaded V2 database: 2257 jobs
[2026-02-03T22:34:01.697Z] [BOT] 💾 DISK STATE: 2257 jobs on disk
[2026-02-03T22:34:01.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2257
[2026-02-03T22:34:01.701Z] [BOT] 🔀 Deep merged: Startup Growth Advisor (Account Executive, Greenfield) @ vercel (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T22:34:01.701Z] [BOT] 💾 AFTER MERGE: 2257 jobs (merged disk + memory)
[2026-02-03T22:34:01.703Z] [BOT] ✅ No jobs to archive (all 2257 jobs within 7-day window)
[2026-02-03T22:34:01.810Z] [BOT] 💾 Saved posted_jobs.json: 2257 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:34:03.314Z] [BOT] 📍 [ROUTING] "Startup Growth Advisor (Account Executive, Install Base)" @ vercel
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T22:34:03.452Z] [BOT] ✅ Posted message: Startup Growth Advisor (Account Executive, Install Base) @ vercel in #💻・tech-jobs
[2026-02-03T22:34:03.452Z] [BOT] ✅ Industry: Startup Growth Advisor (Account Executive, Install Base) @ vercel
[2026-02-03T22:34:03.453Z] [BOT] 💾 Added channel posting: Startup Growth Advisor (Account Executive, Install Base) @ vercel → category channel (1 total channels)
[2026-02-03T22:34:03.453Z] [BOT] 💾 BEFORE MERGE: 2258 jobs in memory (cached)
[2026-02-03T22:34:03.493Z] [BOT] ✅ Loaded V2 database: 2257 jobs
💾 DISK STATE: 2257 jobs on disk
[2026-02-03T22:34:03.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2258
[2026-02-03T22:34:03.499Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T22:34:03.499Z] [BOT] 💾 AFTER MERGE: 2258 jobs (merged disk + memory)
[2026-02-03T22:34:03.500Z] [BOT] ✅ No jobs to archive (all 2258 jobs within 7-day window)
[2026-02-03T22:34:03.613Z] [BOT] 💾 Saved posted_jobs.json: 2258 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:34:05.243Z] [BOT] ✅ Posted message: Startup Growth Advisor (Account Executive, Install Base) @ vercel in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T22:34:05.243Z] [BOT] 💾 Added channel posting: Startup Growth Advisor (Account Executive, Install Base) @ vercel → location channel (2 total channels)
[2026-02-03T22:34:05.243Z] [BOT] 💾 BEFORE MERGE: 2258 jobs in memory (cached)
[2026-02-03T22:34:05.285Z] [BOT] ✅ Loaded V2 database: 2258 jobs
💾 DISK STATE: 2258 jobs on disk
[2026-02-03T22:34:05.286Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2258
[2026-02-03T22:34:05.290Z] [BOT] 🔀 Deep merged: Startup Growth Advisor (Account Executive, Install Base) @ vercel (disk: 1 channels → merged: 2 channels)
[2026-02-03T22:34:05.290Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2258 jobs (merged disk + memory)
[2026-02-03T22:34:05.291Z] [BOT] ✅ No jobs to archive (all 2258 jobs within 7-day window)
[2026-02-03T22:34:05.416Z] [BOT] 💾 Saved posted_jobs.json: 2258 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T22:34:09.917Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-03T22:34:09.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f61cab7b..." not found, but found as SHA256 "99ba94f674d9dbb3"
[2026-02-03T22:34:09.918Z] [BOT] ⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-02-03T22:34:09.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8822f512..." not found, but found as SHA256 "52e908a003064449"
[2026-02-03T22:34:09.919Z] [BOT] ⏭️  Skipping duplicate: JID_010c8075 (posted within 7 days)
[2026-02-03T22:34:09.935Z] [BOT] ✅ Loaded pending queue: 270 total (266 pending, 4 enriched, 0 posted)
[2026-02-03T22:34:09.966Z] [BOT] ✅ Saved pending queue: 270 total (266 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-03T22:34:09.966Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T22:34:10.058Z] [BOT] 📂 Loaded 12337 existing routing entries
[2026-02-03T22:34:10.207Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-03T22:34:10.207Z] [BOT] New entries: 2
   Total entries: 12339
   Timestamp: 2026-02-03T22:34:10.144Z
[2026-02-03T22:34:10.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T22:34:10.208Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-03T22:34:10.208Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T22:34:10.208Z] [BOT] Total posts: 4
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-03T22:34:10.208Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T22:34:10.208Z] [BOT] 💾 BEFORE MERGE: 2258 jobs in memory (cached)
[2026-02-03T22:34:10.248Z] [BOT] ✅ Loaded V2 database: 2258 jobs
💾 DISK STATE: 2258 jobs on disk
[2026-02-03T22:34:10.248Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2258
[2026-02-03T22:34:10.253Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T22:34:10.253Z] [BOT] 💾 AFTER MERGE: 2258 jobs (merged disk + memory)
[2026-02-03T22:34:10.255Z] [BOT] ✅ No jobs to archive (all 2258 jobs within 7-day window)
[2026-02-03T22:34:10.378Z] [BOT] 💾 Saved posted_jobs.json: 2258 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T22:34:12.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*