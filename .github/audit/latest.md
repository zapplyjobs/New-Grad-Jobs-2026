# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T23:04:46.819Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T23:04:30.537Z] ========================================
[2026-02-04T23:04:30.539Z] Discord Bot Execution Log
[2026-02-04T23:04:30.539Z] Environment: GitHub Actions
[2026-02-04T23:04:30.539Z] Node Version: v20.20.0
[2026-02-04T23:04:30.539Z] ========================================
[2026-02-04T23:04:30.539Z] Environment Variables Check:
[2026-02-04T23:04:30.539Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T23:04:30.540Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T23:04:30.540Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T23:04:30.540Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T23:04:30.540Z] 
Multi-Channel Configuration:
[2026-02-04T23:04:30.540Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T23:04:30.540Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.540Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.540Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T23:04:30.540Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.540Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.540Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.540Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.541Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:04:30.541Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T23:04:30.541Z] 
Data Files Check:
[2026-02-04T23:04:30.542Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145784 bytes)
[2026-02-04T23:04:30.603Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11464298 bytes)
[2026-02-04T23:04:30.603Z] 
========================================
[2026-02-04T23:04:30.603Z] Starting Enhanced Discord Bot...
[2026-02-04T23:04:30.603Z] ========================================
[2026-02-04T23:04:31.192Z] [BOT] ✅ Loaded V2 database: 2261 jobs
[2026-02-04T23:04:31.683Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T23:04:31.683Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T23:04:31.683Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T23:04:31.712Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-04T23:04:31.712Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:04:31.714Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T23:04:31.714Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T23:04:31.714Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:04:31.715Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T23:04:31.715Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T23:04:31.716Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T23:04:31.716Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T23:04:31.716Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T23:04:31.716Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T23:04:31.744Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T23:04:31.744Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-04T23:04:31.744Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-04T23:04:31.744Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-04T23:04:31.745Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-04T23:04:31.746Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-04T23:04:31.746Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-04T23:04:31.746Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-02-04T23:04:31.777Z] [BOT] ✅ Loaded pending queue: 326 total (276 pending, 50 enriched, 0 posted)
[2026-02-04T23:04:31.811Z] [BOT] ✅ Saved pending queue: 282 total (276 pending, 6 enriched, 0 posted)
[2026-02-04T23:04:31.812Z] [BOT] 🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (44 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-04T23:04:31.812Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-04T23:04:31.812Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T23:04:31.815Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-04T23:04:31.816Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Civilian Sales (Department of Energy)" @ anthropic
[2026-02-04T23:04:31.816Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T23:04:31.833Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T23:04:32.442Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic in #💻・tech-jobs
[2026-02-04T23:04:32.442Z] [BOT] ✅ Industry: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic
[2026-02-04T23:04:32.443Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic → category channel (1 total channels)
[2026-02-04T23:04:32.443Z] [BOT] 💾 BEFORE MERGE: 2262 jobs in memory (cached)
[2026-02-04T23:04:32.487Z] [BOT] ✅ Loaded V2 database: 2261 jobs
💾 DISK STATE: 2261 jobs on disk
[2026-02-04T23:04:32.487Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2262
[2026-02-04T23:04:32.492Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:04:32.493Z] [BOT] 💾 AFTER MERGE: 2262 jobs (merged disk + memory)
[2026-02-04T23:04:32.494Z] [BOT] ✅ No jobs to archive (all 2262 jobs within 7-day window)
[2026-02-04T23:04:32.615Z] [BOT] 💾 Saved posted_jobs.json: 2262 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:04:34.389Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic in #🌉・JID_739bbc0b
[2026-02-04T23:04:34.389Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T23:04:34.389Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic → location channel (2 total channels)
[2026-02-04T23:04:34.390Z] [BOT] 💾 BEFORE MERGE: 2262 jobs in memory (cached)
[2026-02-04T23:04:34.428Z] [BOT] ✅ Loaded V2 database: 2262 jobs
💾 DISK STATE: 2262 jobs on disk
[2026-02-04T23:04:34.428Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2262
[2026-02-04T23:04:34.433Z] [BOT] 🔀 Deep merged: Enterprise Account Executive, Federal Civilian Sales (Department of Energy) @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T23:04:34.433Z] [BOT] 💾 AFTER MERGE: 2262 jobs (merged disk + memory)
[2026-02-04T23:04:34.435Z] [BOT] ✅ No jobs to archive (all 2262 jobs within 7-day window)
[2026-02-04T23:04:34.543Z] [BOT] 💾 Saved posted_jobs.json: 2262 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:04:36.046Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs)" @ anthropic
[2026-02-04T23:04:36.046Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T23:04:36.273Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic
[2026-02-04T23:04:36.273Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic → category channel (1 total channels)
[2026-02-04T23:04:36.274Z] [BOT] 💾 BEFORE MERGE: 2263 jobs in memory (cached)
[2026-02-04T23:04:36.315Z] [BOT] ✅ Loaded V2 database: 2262 jobs
💾 DISK STATE: 2262 jobs on disk
[2026-02-04T23:04:36.315Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2263
[2026-02-04T23:04:36.320Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:04:36.320Z] [BOT] 💾 AFTER MERGE: 2263 jobs (merged disk + memory)
[2026-02-04T23:04:36.321Z] [BOT] ✅ No jobs to archive (all 2263 jobs within 7-day window)
[2026-02-04T23:04:36.435Z] [BOT] 💾 Saved posted_jobs.json: 2263 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:04:38.194Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T23:04:38.195Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 2263 jobs in memory (cached)
[2026-02-04T23:04:38.237Z] [BOT] ✅ Loaded V2 database: 2263 jobs
💾 DISK STATE: 2263 jobs on disk
[2026-02-04T23:04:38.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2263
[2026-02-04T23:04:38.242Z] [BOT] 🔀 Deep merged: Enterprise Account Executive, Federal Civilian Sales (Veterans Affairs) @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T23:04:38.242Z] [BOT] 💾 AFTER MERGE: 2263 jobs (merged disk + memory)
[2026-02-04T23:04:38.243Z] [BOT] ✅ No jobs to archive (all 2263 jobs within 7-day window)
[2026-02-04T23:04:38.370Z] [BOT] 💾 Saved posted_jobs.json: 2263 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T23:04:42.869Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-04T23:04:42.870Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "cc7373f342f9e0af"
⏭️  Skipping duplicate: JID_c006e99b (posted within 7 days)
[2026-02-04T23:04:42.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3366d149a6b45fa9"
[2026-02-04T23:04:42.871Z] [BOT] ⏭️  Skipping duplicate: JID_a30670c6 (posted within 7 days)
[2026-02-04T23:04:42.887Z] [BOT] ✅ Loaded pending queue: 282 total (276 pending, 6 enriched, 0 posted)
[2026-02-04T23:04:42.919Z] [BOT] ✅ Saved pending queue: 282 total (276 pending, 4 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-04T23:04:42.919Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T23:04:43.026Z] [BOT] 📂 Loaded 12352 existing routing entries
[2026-02-04T23:04:43.145Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-04T23:04:43.145Z] [BOT] Total entries: 12354
   Timestamp: 2026-02-04T23:04:43.095Z
[2026-02-04T23:04:43.146Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T23:04:43.146Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-04T23:04:43.146Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-04T23:04:43.146Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-04T23:04:43.146Z] [BOT] [STATS] Channel stats saved
[2026-02-04T23:04:43.146Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2263 jobs in memory (cached)
[2026-02-04T23:04:43.202Z] [BOT] ✅ Loaded V2 database: 2263 jobs
💾 DISK STATE: 2263 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2263
[2026-02-04T23:04:43.207Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:04:43.207Z] [BOT] 💾 AFTER MERGE: 2263 jobs (merged disk + memory)
[2026-02-04T23:04:43.209Z] [BOT] ✅ No jobs to archive (all 2263 jobs within 7-day window)
[2026-02-04T23:04:43.339Z] [BOT] 💾 Saved posted_jobs.json: 2263 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T23:04:45.362Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*