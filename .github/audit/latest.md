# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T20:07:09.937Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T20:06:52.830Z] ========================================
[2026-02-06T20:06:52.832Z] Discord Bot Execution Log
[2026-02-06T20:06:52.832Z] Environment: GitHub Actions
[2026-02-06T20:06:52.833Z] Node Version: v20.20.0
[2026-02-06T20:06:52.833Z] ========================================
[2026-02-06T20:06:52.833Z] Environment Variables Check:
[2026-02-06T20:06:52.833Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T20:06:52.833Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T20:06:52.833Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T20:06:52.833Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T20:06:52.833Z] 
Multi-Channel Configuration:
[2026-02-06T20:06:52.833Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T20:06:52.833Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.833Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.833Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T20:06:52.834Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.834Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.834Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.834Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.834Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:06:52.834Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T20:06:52.834Z] 
Data Files Check:
[2026-02-06T20:06:52.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172430 bytes)
[2026-02-06T20:06:52.883Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8952728 bytes)
[2026-02-06T20:06:52.883Z] 
========================================
[2026-02-06T20:06:52.883Z] Starting Enhanced Discord Bot...
[2026-02-06T20:06:52.883Z] ========================================
[2026-02-06T20:06:53.444Z] [BOT] ✅ Loaded V2 database: 1896 jobs
[2026-02-06T20:06:54.145Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T20:06:54.146Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T20:06:54.146Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T20:06:54.164Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T20:06:54.164Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:06:54.165Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T20:06:54.165Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T20:06:54.165Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:06:54.166Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T20:06:54.166Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T20:06:54.182Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T20:06:54.182Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-06T20:06:54.183Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T20:06:54.184Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-06T20:06:54.202Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T20:06:54.228Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (46 blacklisted)
[2026-02-06T20:06:54.228Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T20:06:54.229Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T20:06:54.231Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T20:06:54.232Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer, Custom Agents" @ anthropic
[2026-02-06T20:06:54.232Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T20:06:54.232Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T20:06:54.249Z] [BOT ERROR] (node:2501) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T20:06:54.718Z] [BOT] ✅ Posted message: Forward Deployed Engineer, Custom Agents @ anthropic in #🤖・ai-jobs
[2026-02-06T20:06:54.719Z] [BOT] ✅ Industry: Forward Deployed Engineer, Custom Agents @ anthropic
[2026-02-06T20:06:54.720Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer, Custom Agents @ anthropic → category channel (1 total channels)
[2026-02-06T20:06:54.720Z] [BOT] 💾 BEFORE MERGE: 1897 jobs in memory (cached)
[2026-02-06T20:06:54.754Z] [BOT] ✅ Loaded V2 database: 1896 jobs
💾 DISK STATE: 1896 jobs on disk
[2026-02-06T20:06:54.755Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1897
[2026-02-06T20:06:54.763Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:06:54.763Z] [BOT] 💾 AFTER MERGE: 1897 jobs (merged disk + memory)
[2026-02-06T20:06:54.765Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T20:06:54.772Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
✅ Archiving complete: 13 archived, 1884 active
[2026-02-06T20:06:54.870Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
[2026-02-06T20:06:54.871Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T20:06:56.738Z] [BOT] ✅ Posted message: Forward Deployed Engineer, Custom Agents @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T20:06:56.739Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer, Custom Agents @ anthropic → location channel (2 total channels)
[2026-02-06T20:06:56.739Z] [BOT] 💾 BEFORE MERGE: 1884 jobs in memory (cached)
[2026-02-06T20:06:56.767Z] [BOT] ✅ Loaded V2 database: 1884 jobs
💾 DISK STATE: 1884 jobs on disk
[2026-02-06T20:06:56.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1884
[2026-02-06T20:06:56.774Z] [BOT] 🔀 Deep merged: Forward Deployed Engineer, Custom Agents @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T20:06:56.774Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1884 jobs (merged disk + memory)
[2026-02-06T20:06:56.775Z] [BOT] ✅ No jobs to archive (all 1884 jobs within 7-day window)
[2026-02-06T20:06:56.869Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:07:01.371Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T20:07:01.372Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (San Diego, Orange County)" @ verkada
[2026-02-06T20:07:01.372Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T20:07:01.658Z] [BOT] ✅ Posted message: Enterprise Account Executive (San Diego, Orange County) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (San Diego, Orange County) @ verkada
[2026-02-06T20:07:01.659Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (San Diego, Orange County) @ verkada → category channel (1 total channels)
[2026-02-06T20:07:01.659Z] [BOT] 💾 BEFORE MERGE: 1885 jobs in memory (cached)
[2026-02-06T20:07:01.690Z] [BOT] ✅ Loaded V2 database: 1884 jobs
💾 DISK STATE: 1884 jobs on disk
[2026-02-06T20:07:01.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1885
[2026-02-06T20:07:01.698Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:07:01.698Z] [BOT] 💾 AFTER MERGE: 1885 jobs (merged disk + memory)
[2026-02-06T20:07:01.699Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-02-06T20:07:01.798Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:07:06.298Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T20:07:06.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "191a8fdb7dd3f8ff"
[2026-02-06T20:07:06.300Z] [BOT] ⏭️  Skipping duplicate: JID_aafe4aa8 (posted within 7 days)
[2026-02-06T20:07:06.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "211607edeb5f23fb"
⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
[2026-02-06T20:07:06.310Z] [BOT] ✅ Loaded pending queue: 174 total (170 pending, 4 enriched, 0 posted)
[2026-02-06T20:07:06.327Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T20:07:06.437Z] [BOT] 📂 Loaded 12587 existing routing entries
[2026-02-06T20:07:06.558Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12589
[2026-02-06T20:07:06.558Z] [BOT] Timestamp: 2026-02-06T20:07:06.506Z
[2026-02-06T20:07:06.559Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 3
   Failed: 0
   Skipped: 48
[2026-02-06T20:07:06.559Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
[2026-02-06T20:07:06.559Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
     3. #💰・finance-jobs: 1 posts
[2026-02-06T20:07:06.559Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1885 jobs in memory (cached)
[2026-02-06T20:07:06.604Z] [BOT] ✅ Loaded V2 database: 1885 jobs
💾 DISK STATE: 1885 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1885
[2026-02-06T20:07:06.606Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:07:06.606Z] [BOT] 💾 AFTER MERGE: 1885 jobs (merged disk + memory)
[2026-02-06T20:07:06.607Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-02-06T20:07:06.700Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:07:06.701Z] [BOT] ✅ Database saved successfully
[2026-02-06T20:07:08.721Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2501) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*