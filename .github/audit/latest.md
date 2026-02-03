# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T04:34:10.684Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T04:33:59.205Z] ========================================
[2026-02-03T04:33:59.207Z] Discord Bot Execution Log
[2026-02-03T04:33:59.207Z] Environment: GitHub Actions
[2026-02-03T04:33:59.207Z] Node Version: v20.20.0
[2026-02-03T04:33:59.207Z] ========================================
[2026-02-03T04:33:59.207Z] Environment Variables Check:
[2026-02-03T04:33:59.207Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T04:33:59.207Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T04:33:59.207Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T04:33:59.207Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T04:33:59.207Z] 
Multi-Channel Configuration:
[2026-02-03T04:33:59.207Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T04:33:59.208Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T04:33:59.208Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T04:33:59.208Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T04:33:59.208Z] 
Data Files Check:
[2026-02-03T04:33:59.209Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167854 bytes)
[2026-02-03T04:33:59.268Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11321298 bytes)
[2026-02-03T04:33:59.268Z] 
========================================
[2026-02-03T04:33:59.268Z] Starting Enhanced Discord Bot...
[2026-02-03T04:33:59.268Z] ========================================
[2026-02-03T04:33:59.848Z] [BOT] ✅ Loaded V2 database: 2243 jobs
[2026-02-03T04:34:00.266Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T04:34:00.266Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T04:34:00.266Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T04:34:00.288Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-03T04:34:00.289Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T04:34:00.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T04:34:00.290Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T04:34:00.290Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T04:34:00.308Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T04:34:00.309Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-03T04:34:00.309Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-03T04:34:00.309Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-03T04:34:00.309Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-03T04:34:00.309Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-03T04:34:00.310Z] [BOT] 🚫 Skipping blacklisted job: Sr Staff Software Engineer, Entity Management at gusto
[2026-02-03T04:34:00.339Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-03T04:34:00.374Z] [BOT] ✅ Saved pending queue: 276 total (274 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-03T04:34:00.375Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T04:34:00.375Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
[2026-02-03T04:34:00.375Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T04:34:00.377Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T04:34:00.379Z] [BOT] 📍 [ROUTING] "Startup Account Executive, Install Base" @ vercel
[2026-02-03T04:34:00.379Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T04:34:00.396Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T04:34:00.635Z] [BOT] ✅ Posted message: Startup Account Executive, Install Base @ vercel in #💻・tech-jobs
[2026-02-03T04:34:00.635Z] [BOT] ✅ Industry: Startup Account Executive, Install Base @ vercel
[2026-02-03T04:34:00.636Z] [BOT] 💾 Added channel posting: Startup Account Executive, Install Base @ vercel → category channel (1 total channels)
[2026-02-03T04:34:00.637Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T04:34:00.682Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-03T04:34:00.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T04:34:00.688Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T04:34:00.688Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T04:34:00.689Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T04:34:00.836Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T04:34:02.514Z] [BOT] ✅ Posted message: Startup Account Executive, Install Base @ vercel in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T04:34:02.515Z] [BOT] 💾 Added channel posting: Startup Account Executive, Install Base @ vercel → location channel (2 total channels)
[2026-02-03T04:34:02.515Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T04:34:02.554Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T04:34:02.554Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T04:34:02.559Z] [BOT] 🔀 Deep merged: Startup Account Executive, Install Base @ vercel (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T04:34:02.559Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T04:34:02.561Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T04:34:02.674Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T04:34:07.176Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T04:34:07.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8822f512..." not found, but found as SHA256 "e31f7b955ac49ebc"
[2026-02-03T04:34:07.178Z] [BOT] ⏭️  Skipping duplicate: JID_010c8075 (posted within 7 days)
[2026-02-03T04:34:07.195Z] [BOT] ✅ Loaded pending queue: 276 total (274 pending, 2 enriched, 0 posted)
[2026-02-03T04:34:07.229Z] [BOT] ✅ Saved pending queue: 276 total (274 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-03T04:34:07.324Z] [BOT] 📂 Loaded 12324 existing routing entries
[2026-02-03T04:34:07.469Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12325
   Timestamp: 2026-02-03T04:34:07.416Z
[2026-02-03T04:34:07.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
[2026-02-03T04:34:07.470Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T04:34:07.471Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T04:34:07.514Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T04:34:07.515Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T04:34:07.520Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T04:34:07.520Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T04:34:07.521Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T04:34:07.644Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T04:34:09.669Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*