# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T17:41:58.614Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T17:41:36.293Z] ========================================
[2026-02-02T17:41:36.294Z] Discord Bot Execution Log
[2026-02-02T17:41:36.295Z] Environment: GitHub Actions
[2026-02-02T17:41:36.295Z] Node Version: v20.20.0
[2026-02-02T17:41:36.295Z] ========================================
[2026-02-02T17:41:36.295Z] Environment Variables Check:
[2026-02-02T17:41:36.295Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T17:41:36.295Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T17:41:36.295Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T17:41:36.295Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T17:41:36.295Z] 
Multi-Channel Configuration:
[2026-02-02T17:41:36.295Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T17:41:36.296Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T17:41:36.296Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T17:41:36.296Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T17:41:36.296Z] 
Data Files Check:
[2026-02-02T17:41:36.297Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166843 bytes)
[2026-02-02T17:41:36.358Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11223189 bytes)
[2026-02-02T17:41:36.358Z] 
========================================
[2026-02-02T17:41:36.358Z] Starting Enhanced Discord Bot...
[2026-02-02T17:41:36.358Z] ========================================
[2026-02-02T17:41:36.932Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-02T17:41:37.420Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T17:41:37.420Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T17:41:37.421Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T17:41:37.442Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T17:41:37.442Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T17:41:37.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T17:41:37.443Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T17:41:37.444Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T17:41:37.461Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-02T17:41:37.462Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-02T17:41:37.463Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-02-02T17:41:37.464Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-02T17:41:37.464Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
[2026-02-02T17:41:37.464Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
[2026-02-02T17:41:37.464Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
[2026-02-02T17:41:37.493Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T17:41:37.528Z] [BOT] ✅ Saved pending queue: 300 total (296 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (46 blacklisted)
[2026-02-02T17:41:37.528Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-02T17:41:37.529Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-02T17:41:37.529Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T17:41:37.530Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-02T17:41:37.531Z] [BOT] 📍 [ROUTING] "Junior Risk Developer" @ ORG_3df6d4d8 Trading
[2026-02-02T17:41:37.531Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-02T17:41:37.531Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-02T17:41:37.548Z] [BOT ERROR] (node:2683) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T17:41:37.786Z] [BOT] ✅ Posted message: Junior Risk Developer @ ORG_3df6d4d8 Trading in #🤖・ai-jobs
[2026-02-02T17:41:37.786Z] [BOT] ✅ Industry: Junior Risk Developer @ ORG_3df6d4d8 Trading
[2026-02-02T17:41:37.787Z] [BOT] 💾 Added channel posting: Junior Risk Developer @ ORG_3df6d4d8 Trading → category channel (1 total channels)
[2026-02-02T17:41:37.788Z] [BOT] 💾 BEFORE MERGE: 2227 jobs in memory (cached)
[2026-02-02T17:41:37.830Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
[2026-02-02T17:41:37.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2227
[2026-02-02T17:41:37.836Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T17:41:37.836Z] [BOT] 💾 AFTER MERGE: 2227 jobs (merged disk + memory)
[2026-02-02T17:41:37.837Z] [BOT] ✅ No jobs to archive (all 2227 jobs within 7-day window)
[2026-02-02T17:41:37.980Z] [BOT] 💾 Saved posted_jobs.json: 2227 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:39.732Z] [BOT] ✅ Posted message: Junior Risk Developer @ ORG_3df6d4d8 Trading in #📍・JID_6daed763
[2026-02-02T17:41:39.733Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-02T17:41:39.733Z] [BOT] 💾 Added channel posting: Junior Risk Developer @ ORG_3df6d4d8 Trading → location channel (2 total channels)
[2026-02-02T17:41:39.733Z] [BOT] 💾 BEFORE MERGE: 2227 jobs in memory (cached)
[2026-02-02T17:41:39.769Z] [BOT] ✅ Loaded V2 database: 2227 jobs
💾 DISK STATE: 2227 jobs on disk
[2026-02-02T17:41:39.769Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2227
[2026-02-02T17:41:39.774Z] [BOT] 🔀 Deep merged: Junior Risk Developer @ ORG_3df6d4d8 Trading (disk: 1 channels → merged: 2 channels)
[2026-02-02T17:41:39.774Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2227 jobs (merged disk + memory)
[2026-02-02T17:41:39.775Z] [BOT] ✅ No jobs to archive (all 2227 jobs within 7-day window)
[2026-02-02T17:41:39.881Z] [BOT] 💾 Saved posted_jobs.json: 2227 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:41.383Z] [BOT] 📍 [ROUTING] "Software Engineer 0" @ ORG_8b09cf05
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-02T17:41:41.384Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-02T17:41:41.636Z] [BOT] ✅ Posted message: Software Engineer 0 @ ORG_8b09cf05 in #🤖・ai-jobs
[2026-02-02T17:41:41.636Z] [BOT] ✅ Industry: Software Engineer 0 @ ORG_8b09cf05
[2026-02-02T17:41:41.637Z] [BOT] 💾 Added channel posting: Software Engineer 0 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-02-02T17:41:41.637Z] [BOT] 💾 BEFORE MERGE: 2228 jobs in memory (cached)
[2026-02-02T17:41:41.678Z] [BOT] ✅ Loaded V2 database: 2227 jobs
💾 DISK STATE: 2227 jobs on disk
[2026-02-02T17:41:41.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2228
[2026-02-02T17:41:41.683Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T17:41:41.683Z] [BOT] 💾 AFTER MERGE: 2228 jobs (merged disk + memory)
[2026-02-02T17:41:41.684Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-02-02T17:41:41.795Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:43.630Z] [BOT] ✅ Posted message: Software Engineer 0 @ ORG_8b09cf05 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-02T17:41:43.630Z] [BOT] 💾 Added channel posting: Software Engineer 0 @ ORG_8b09cf05 → location channel (2 total channels)
[2026-02-02T17:41:43.631Z] [BOT] 💾 BEFORE MERGE: 2228 jobs in memory (cached)
[2026-02-02T17:41:43.671Z] [BOT] ✅ Loaded V2 database: 2228 jobs
💾 DISK STATE: 2228 jobs on disk
[2026-02-02T17:41:43.671Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2228
[2026-02-02T17:41:43.676Z] [BOT] 🔀 Deep merged: Software Engineer 0 @ ORG_8b09cf05 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T17:41:43.676Z] [BOT] 💾 AFTER MERGE: 2228 jobs (merged disk + memory)
[2026-02-02T17:41:43.677Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-02-02T17:41:43.804Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:48.301Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-02T17:41:48.303Z] [BOT] 📍 [ROUTING] "Production Data Engineer" @ ORG_54f9eaef International Group (SIG)
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-02T17:41:48.303Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-02T17:41:48.607Z] [BOT] ✅ Posted message: Production Data Engineer @ ORG_54f9eaef International Group (SIG) in #📊・JID_fb739488
  ✅ Industry: Production Data Engineer @ ORG_54f9eaef International Group (SIG)
[2026-02-02T17:41:48.608Z] [BOT] 💾 Added channel posting: Production Data Engineer @ ORG_54f9eaef International Group (SIG) → category channel (1 total channels)
[2026-02-02T17:41:48.609Z] [BOT] 💾 BEFORE MERGE: 2229 jobs in memory (cached)
[2026-02-02T17:41:48.645Z] [BOT] ✅ Loaded V2 database: 2228 jobs
💾 DISK STATE: 2228 jobs on disk
[2026-02-02T17:41:48.646Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2229
[2026-02-02T17:41:48.650Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T17:41:48.651Z] [BOT] 💾 AFTER MERGE: 2229 jobs (merged disk + memory)
[2026-02-02T17:41:48.652Z] [BOT] ✅ No jobs to archive (all 2229 jobs within 7-day window)
[2026-02-02T17:41:48.771Z] [BOT] 💾 Saved posted_jobs.json: 2229 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:50.470Z] [BOT] ✅ Posted message: Production Data Engineer @ ORG_54f9eaef International Group (SIG) in #📍・JID_6daed763
[2026-02-02T17:41:50.470Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-02T17:41:50.471Z] [BOT] 💾 Added channel posting: Production Data Engineer @ ORG_54f9eaef International Group (SIG) → location channel (2 total channels)
[2026-02-02T17:41:50.471Z] [BOT] 💾 BEFORE MERGE: 2229 jobs in memory (cached)
[2026-02-02T17:41:50.515Z] [BOT] ✅ Loaded V2 database: 2229 jobs
💾 DISK STATE: 2229 jobs on disk
[2026-02-02T17:41:50.515Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2229
[2026-02-02T17:41:50.522Z] [BOT] 🔀 Deep merged: Production Data Engineer @ ORG_54f9eaef International Group (SIG) (disk: 1 channels → merged: 2 channels)
[2026-02-02T17:41:50.522Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2229 jobs (merged disk + memory)
[2026-02-02T17:41:50.524Z] [BOT] ✅ No jobs to archive (all 2229 jobs within 7-day window)
[2026-02-02T17:41:50.642Z] [BOT] 💾 Saved posted_jobs.json: 2229 active jobs
[2026-02-02T17:41:50.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-02T17:41:55.145Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-02T17:41:55.147Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_15f90f7c-..." not found, but found as SHA256 "32550de200b9ab3e"
[2026-02-02T17:41:55.147Z] [BOT] ⏭️  Skipping duplicate: JID_217f6510 (posted within 7 days)
[2026-02-02T17:41:55.147Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_29d5a5ec..." not found, but found as SHA256 "2653285e551f6e0c"
[2026-02-02T17:41:55.147Z] [BOT] ⏭️  Skipping duplicate: JID_6d32a023 (posted within 7 days)
[2026-02-02T17:41:55.148Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b19216ba..." not found, but found as SHA256 "03ba100fa9e79b37"
[2026-02-02T17:41:55.148Z] [BOT] ⏭️  Skipping duplicate: JID_b19216ba (posted within 7 days)
[2026-02-02T17:41:55.164Z] [BOT] ✅ Loaded pending queue: 300 total (296 pending, 4 enriched, 0 posted)
[2026-02-02T17:41:55.197Z] [BOT] ✅ Saved pending queue: 300 total (296 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-02T17:41:55.197Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T17:41:55.305Z] [BOT] 📂 Loaded 12307 existing routing entries
[2026-02-02T17:41:55.421Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-02-02T17:41:55.421Z] [BOT] Total entries: 12310
   Timestamp: 2026-02-02T17:41:55.370Z
[2026-02-02T17:41:55.422Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T17:41:55.422Z] [BOT] Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-02T17:41:55.423Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
     1. #📍・JID_6daed763: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2229 jobs in memory (cached)
[2026-02-02T17:41:55.470Z] [BOT] ✅ Loaded V2 database: 2229 jobs
💾 DISK STATE: 2229 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2229
[2026-02-02T17:41:55.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2229 jobs (merged disk + memory)
[2026-02-02T17:41:55.480Z] [BOT] ✅ No jobs to archive (all 2229 jobs within 7-day window)
[2026-02-02T17:41:55.610Z] [BOT] 💾 Saved posted_jobs.json: 2229 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T17:41:57.633Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2683) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*