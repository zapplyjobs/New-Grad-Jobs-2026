# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T02:46:50.538Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T02:46:35.191Z] ========================================
[2026-02-04T02:46:35.193Z] Discord Bot Execution Log
[2026-02-04T02:46:35.193Z] Environment: GitHub Actions
[2026-02-04T02:46:35.193Z] Node Version: v20.20.0
[2026-02-04T02:46:35.194Z] ========================================
[2026-02-04T02:46:35.194Z] Environment Variables Check:
[2026-02-04T02:46:35.194Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T02:46:35.194Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T02:46:35.194Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T02:46:35.194Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T02:46:35.194Z] 
Multi-Channel Configuration:
[2026-02-04T02:46:35.194Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T02:46:35.194Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T02:46:35.195Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T02:46:35.195Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T02:46:35.195Z] 
Data Files Check:
[2026-02-04T02:46:35.196Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176551 bytes)
[2026-02-04T02:46:35.254Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11454981 bytes)
[2026-02-04T02:46:35.254Z] 
========================================
[2026-02-04T02:46:35.254Z] Starting Enhanced Discord Bot...
[2026-02-04T02:46:35.254Z] ========================================
[2026-02-04T02:46:35.844Z] [BOT] ✅ Loaded V2 database: 2263 jobs
[2026-02-04T02:46:36.259Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T02:46:36.260Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T02:46:36.260Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T02:46:36.280Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T02:46:36.281Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T02:46:36.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T02:46:36.282Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T02:46:36.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T02:46:36.283Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T02:46:36.302Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T02:46:36.302Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-02-04T02:46:36.302Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
[2026-02-04T02:46:36.302Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-04T02:46:36.303Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-04T02:46:36.304Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-04T02:46:36.332Z] [BOT] ✅ Loaded pending queue: 315 total (265 pending, 50 enriched, 0 posted)
[2026-02-04T02:46:36.365Z] [BOT] ✅ Saved pending queue: 269 total (265 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-04T02:46:36.365Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-04T02:46:36.365Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-04T02:46:36.365Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T02:46:36.366Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-04T02:46:36.368Z] [BOT] 📍 [ROUTING] "Insider Risk Investigator - Technical & Human Intelligence" @ anthropic
[2026-02-04T02:46:36.369Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-04T02:46:36.385Z] [BOT ERROR] (node:2555) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T02:46:36.770Z] [BOT] ✅ Posted message: Insider Risk Investigator - Technical & Human Intelligence @ anthropic in #🤖・ai-jobs
[2026-02-04T02:46:36.770Z] [BOT] ✅ Industry: Insider Risk Investigator - Technical & Human Intelligence @ anthropic
[2026-02-04T02:46:36.771Z] [BOT] 💾 Added channel posting: Insider Risk Investigator - Technical & Human Intelligence @ anthropic → category channel (1 total channels)
[2026-02-04T02:46:36.772Z] [BOT] 💾 BEFORE MERGE: 2264 jobs in memory (cached)
[2026-02-04T02:46:36.815Z] [BOT] ✅ Loaded V2 database: 2263 jobs
💾 DISK STATE: 2263 jobs on disk
[2026-02-04T02:46:36.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2264
[2026-02-04T02:46:36.821Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T02:46:36.821Z] [BOT] 💾 AFTER MERGE: 2264 jobs (merged disk + memory)
[2026-02-04T02:46:36.822Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-02-04T02:46:36.965Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
[2026-02-04T02:46:36.965Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-04T02:46:38.635Z] [BOT] ✅ Posted message: Insider Risk Investigator - Technical & Human Intelligence @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T02:46:38.636Z] [BOT] 💾 Added channel posting: Insider Risk Investigator - Technical & Human Intelligence @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2264 jobs in memory (cached)
[2026-02-04T02:46:38.673Z] [BOT] ✅ Loaded V2 database: 2264 jobs
💾 DISK STATE: 2264 jobs on disk
[2026-02-04T02:46:38.674Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2264
[2026-02-04T02:46:38.678Z] [BOT] 🔀 Deep merged: Insider Risk Investigator - Technical & Human Intelligence @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-04T02:46:38.678Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2264 jobs (merged disk + memory)
[2026-02-04T02:46:38.680Z] [BOT] ✅ No jobs to archive (all 2264 jobs within 7-day window)
[2026-02-04T02:46:38.790Z] [BOT] 💾 Saved posted_jobs.json: 2264 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T02:46:40.291Z] [BOT] 📍 [ROUTING] "Regional Head of Early Career Associates, Applied AI" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-04T02:46:40.291Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-04T02:46:40.620Z] [BOT] ✅ Posted message: Regional Head of Early Career Associates, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Regional Head of Early Career Associates, Applied AI @ anthropic
[2026-02-04T02:46:40.621Z] [BOT] 💾 Added channel posting: Regional Head of Early Career Associates, Applied AI @ anthropic → category channel (1 total channels)
[2026-02-04T02:46:40.621Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T02:46:40.661Z] [BOT] ✅ Loaded V2 database: 2264 jobs
💾 DISK STATE: 2264 jobs on disk
[2026-02-04T02:46:40.662Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T02:46:40.666Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T02:46:40.666Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T02:46:40.668Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T02:46:40.780Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T02:46:42.529Z] [BOT] ✅ Posted message: Regional Head of Early Career Associates, Applied AI @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T02:46:42.530Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T02:46:42.530Z] [BOT] 💾 Added channel posting: Regional Head of Early Career Associates, Applied AI @ anthropic → location channel (2 total channels)
[2026-02-04T02:46:42.530Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T02:46:42.571Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T02:46:42.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T02:46:42.576Z] [BOT] 🔀 Deep merged: Regional Head of Early Career Associates, Applied AI @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-04T02:46:42.577Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T02:46:42.578Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T02:46:42.716Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T02:46:47.214Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-04T02:46:47.216Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "29ec1adcb858c007"
⏭️  Skipping duplicate: JID_4d8b373d (posted within 7 days)
[2026-02-04T02:46:47.216Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2b255aab2c8beec7"
⏭️  Skipping duplicate: JID_e19bc474 (posted within 7 days)
[2026-02-04T02:46:47.232Z] [BOT] ✅ Loaded pending queue: 269 total (265 pending, 4 enriched, 0 posted)
[2026-02-04T02:46:47.263Z] [BOT] ✅ Saved pending queue: 269 total (265 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-04T02:46:47.355Z] [BOT] 📂 Loaded 12344 existing routing entries
[2026-02-04T02:46:47.500Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-04T02:46:47.500Z] [BOT] Total entries: 12346
   Timestamp: 2026-02-04T02:46:47.451Z
[2026-02-04T02:46:47.501Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T02:46:47.501Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-04T02:46:47.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-04T02:46:47.501Z] [BOT] Total posts: 4
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T02:46:47.501Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T02:46:47.544Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T02:46:47.544Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T02:46:47.549Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T02:46:47.549Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T02:46:47.550Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T02:46:47.667Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
[2026-02-04T02:46:47.667Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T02:46:49.690Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2555) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*