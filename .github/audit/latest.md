# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T20:35:01.357Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T20:34:45.179Z] ========================================
[2026-02-03T20:34:45.181Z] Discord Bot Execution Log
[2026-02-03T20:34:45.181Z] Environment: GitHub Actions
[2026-02-03T20:34:45.181Z] Node Version: v20.20.0
[2026-02-03T20:34:45.181Z] ========================================
[2026-02-03T20:34:45.181Z] Environment Variables Check:
[2026-02-03T20:34:45.181Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T20:34:45.182Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T20:34:45.182Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T20:34:45.182Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T20:34:45.182Z] 
Multi-Channel Configuration:
[2026-02-03T20:34:45.182Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T20:34:45.182Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T20:34:45.182Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T20:34:45.182Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T20:34:45.182Z] 
Data Files Check:
[2026-02-03T20:34:45.184Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162522 bytes)
[2026-02-03T20:34:45.242Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11384842 bytes)
[2026-02-03T20:34:45.243Z] 
========================================
[2026-02-03T20:34:45.243Z] Starting Enhanced Discord Bot...
[2026-02-03T20:34:45.243Z] ========================================
[2026-02-03T20:34:45.820Z] [BOT] ✅ Loaded V2 database: 2252 jobs
[2026-02-03T20:34:46.359Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T20:34:46.359Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T20:34:46.359Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T20:34:46.380Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-03T20:34:46.380Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T20:34:46.382Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T20:34:46.382Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T20:34:46.382Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T20:34:46.382Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T20:34:46.383Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T20:34:46.401Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T20:34:46.401Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-03T20:34:46.401Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-03T20:34:46.401Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T20:34:46.401Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager- Strategics at anthropic
🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-03T20:34:46.402Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-03T20:34:46.403Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-03T20:34:46.403Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-03T20:34:46.403Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-03T20:34:46.430Z] [BOT] ✅ Loaded pending queue: 318 total (268 pending, 50 enriched, 0 posted)
[2026-02-03T20:34:46.463Z] [BOT] ✅ Saved pending queue: 272 total (268 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-03T20:34:46.463Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-03T20:34:46.464Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-03T20:34:46.464Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T20:34:46.466Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-03T20:34:46.467Z] [BOT] 📍 [ROUTING] "Data Scientist, Generalist" @ anthropic
[2026-02-03T20:34:46.467Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-03T20:34:46.484Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T20:34:46.630Z] [BOT] ✅ Posted message: Data Scientist, Generalist @ anthropic in #🤖・ai-jobs
[2026-02-03T20:34:46.630Z] [BOT] ✅ Industry: Data Scientist, Generalist @ anthropic
[2026-02-03T20:34:46.631Z] [BOT] 💾 Added channel posting: Data Scientist, Generalist @ anthropic → category channel (1 total channels)
[2026-02-03T20:34:46.632Z] [BOT] 💾 BEFORE MERGE: 2253 jobs in memory (cached)
[2026-02-03T20:34:46.682Z] [BOT] ✅ Loaded V2 database: 2252 jobs
💾 DISK STATE: 2252 jobs on disk
[2026-02-03T20:34:46.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2253
[2026-02-03T20:34:46.693Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T20:34:46.693Z] [BOT] 💾 AFTER MERGE: 2253 jobs (merged disk + memory)
[2026-02-03T20:34:46.696Z] [BOT] ✅ No jobs to archive (all 2253 jobs within 7-day window)
[2026-02-03T20:34:46.835Z] [BOT] 💾 Saved posted_jobs.json: 2253 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T20:34:48.497Z] [BOT] ✅ Posted message: Data Scientist, Generalist @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T20:34:48.497Z] [BOT] 💾 Added channel posting: Data Scientist, Generalist @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2253 jobs in memory (cached)
[2026-02-03T20:34:48.535Z] [BOT] ✅ Loaded V2 database: 2253 jobs
💾 DISK STATE: 2253 jobs on disk
[2026-02-03T20:34:48.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2253
[2026-02-03T20:34:48.540Z] [BOT] 🔀 Deep merged: Data Scientist, Generalist @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T20:34:48.540Z] [BOT] 💾 AFTER MERGE: 2253 jobs (merged disk + memory)
[2026-02-03T20:34:48.541Z] [BOT] ✅ No jobs to archive (all 2253 jobs within 7-day window)
[2026-02-03T20:34:48.649Z] [BOT] 💾 Saved posted_jobs.json: 2253 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T20:34:53.150Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T20:34:53.152Z] [BOT] 📍 [ROUTING] "Sales Development Representative (Denver)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T20:34:53.412Z] [BOT] ✅ Posted message: Sales Development Representative (Denver) @ datadog in #💻・tech-jobs
  ✅ Industry: Sales Development Representative (Denver) @ datadog
[2026-02-03T20:34:53.413Z] [BOT] 💾 Added channel posting: Sales Development Representative (Denver) @ datadog → category channel (1 total channels)
[2026-02-03T20:34:53.413Z] [BOT] 💾 BEFORE MERGE: 2254 jobs in memory (cached)
[2026-02-03T20:34:53.455Z] [BOT] ✅ Loaded V2 database: 2253 jobs
💾 DISK STATE: 2253 jobs on disk
[2026-02-03T20:34:53.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2254
[2026-02-03T20:34:53.460Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T20:34:53.461Z] [BOT] 💾 AFTER MERGE: 2254 jobs (merged disk + memory)
[2026-02-03T20:34:53.462Z] [BOT] ✅ No jobs to archive (all 2254 jobs within 7-day window)
[2026-02-03T20:34:53.574Z] [BOT] 💾 Saved posted_jobs.json: 2254 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T20:34:58.077Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-03T20:34:58.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ac95c655322fcab1"
[2026-02-03T20:34:58.079Z] [BOT] ⏭️  Skipping duplicate: JID_97623477 (posted within 7 days)
[2026-02-03T20:34:58.079Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fcda0307..." not found, but found as SHA256 "54cbecf0d41eb2a6"
[2026-02-03T20:34:58.079Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-02-03T20:34:58.095Z] [BOT] ✅ Loaded pending queue: 272 total (268 pending, 4 enriched, 0 posted)
[2026-02-03T20:34:58.129Z] [BOT] ✅ Saved pending queue: 272 total (268 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-03T20:34:58.129Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T20:34:58.220Z] [BOT] 📂 Loaded 12333 existing routing entries
[2026-02-03T20:34:58.361Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-03T20:34:58.362Z] [BOT] Total entries: 12335
   Timestamp: 2026-02-03T20:34:58.307Z
[2026-02-03T20:34:58.362Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
   Successful: 3
   Failed: 0
   Skipped: 48
[2026-02-03T20:34:58.362Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
[2026-02-03T20:34:58.362Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-02-03T20:34:58.363Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T20:34:58.363Z] [BOT] 💾 BEFORE MERGE: 2254 jobs in memory (cached)
[2026-02-03T20:34:58.417Z] [BOT] ✅ Loaded V2 database: 2254 jobs
💾 DISK STATE: 2254 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2254
[2026-02-03T20:34:58.421Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T20:34:58.421Z] [BOT] 💾 AFTER MERGE: 2254 jobs (merged disk + memory)
[2026-02-03T20:34:58.422Z] [BOT] ✅ No jobs to archive (all 2254 jobs within 7-day window)
[2026-02-03T20:34:58.533Z] [BOT] 💾 Saved posted_jobs.json: 2254 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T20:34:58.533Z] [BOT] ✅ Database saved successfully
[2026-02-03T20:35:00.559Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*