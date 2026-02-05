# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T05:47:23.818Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T05:47:11.676Z] ========================================
[2026-02-05T05:47:11.678Z] Discord Bot Execution Log
[2026-02-05T05:47:11.678Z] Environment: GitHub Actions
[2026-02-05T05:47:11.678Z] Node Version: v20.20.0
[2026-02-05T05:47:11.678Z] ========================================
[2026-02-05T05:47:11.678Z] Environment Variables Check:
[2026-02-05T05:47:11.678Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T05:47:11.679Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T05:47:11.679Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T05:47:11.679Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T05:47:11.679Z] 
Multi-Channel Configuration:
[2026-02-05T05:47:11.679Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T05:47:11.679Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T05:47:11.679Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T05:47:11.679Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T05:47:11.680Z] 
Data Files Check:
[2026-02-05T05:47:11.681Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140233 bytes)
[2026-02-05T05:47:11.740Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11514248 bytes)
[2026-02-05T05:47:11.740Z] 
========================================
[2026-02-05T05:47:11.740Z] Starting Enhanced Discord Bot...
[2026-02-05T05:47:11.740Z] ========================================
[2026-02-05T05:47:12.322Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-05T05:47:12.987Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T05:47:12.988Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T05:47:12.988Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T05:47:12.999Z] [BOT] ✅ Loaded pending queue: 201 total (151 pending, 50 enriched, 0 posted)
[2026-02-05T05:47:13.000Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T05:47:13.001Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T05:47:13.001Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T05:47:13.002Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T05:47:13.002Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T05:47:13.003Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T05:47:13.003Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T05:47:13.020Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T05:47:13.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-05T05:47:13.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-05T05:47:13.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
[2026-02-05T05:47:13.021Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
[2026-02-05T05:47:13.022Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-05T05:47:13.022Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-05T05:47:13.031Z] [BOT] ✅ Loaded pending queue: 201 total (151 pending, 50 enriched, 0 posted)
[2026-02-05T05:47:13.047Z] [BOT] ✅ Saved pending queue: 156 total (151 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-05T05:47:13.047Z] [BOT] 📋 After blacklist filter: 1 jobs (45 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T05:47:13.048Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T05:47:13.048Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T05:47:13.049Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T05:47:13.051Z] [BOT] 📍 [ROUTING] "Finance & Strategy, Marketing Finance Business Partner" @ anthropic
[2026-02-05T05:47:13.051Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T05:47:13.068Z] [BOT ERROR] (node:2606) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T05:47:13.338Z] [BOT] ✅ Posted message: Finance & Strategy, Marketing Finance Business Partner @ anthropic in #📊・JID_fb739488
[2026-02-05T05:47:13.338Z] [BOT] ✅ Industry: Finance & Strategy, Marketing Finance Business Partner @ anthropic
[2026-02-05T05:47:13.339Z] [BOT] 💾 Added channel posting: Finance & Strategy, Marketing Finance Business Partner @ anthropic → category channel (1 total channels)
[2026-02-05T05:47:13.340Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T05:47:13.390Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T05:47:13.391Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T05:47:13.397Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T05:47:13.398Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T05:47:13.399Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T05:47:13.531Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T05:47:15.289Z] [BOT] ✅ Posted message: Finance & Strategy, Marketing Finance Business Partner @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T05:47:15.290Z] [BOT] 💾 Added channel posting: Finance & Strategy, Marketing Finance Business Partner @ anthropic → location channel (2 total channels)
[2026-02-05T05:47:15.290Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T05:47:15.340Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T05:47:15.345Z] [BOT] 🔀 Deep merged: Finance & Strategy, Marketing Finance Business Partner @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T05:47:15.345Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T05:47:15.347Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T05:47:15.462Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T05:47:19.964Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T05:47:19.965Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b3cf540b4f342f96"
[2026-02-05T05:47:19.965Z] [BOT] ⏭️  Skipping duplicate: JID_53c8279a (posted within 7 days)
[2026-02-05T05:47:19.972Z] [BOT] ✅ Loaded pending queue: 156 total (151 pending, 5 enriched, 0 posted)
[2026-02-05T05:47:19.984Z] [BOT] ✅ Saved pending queue: 156 total (151 pending, 4 enriched, 1 posted)
[2026-02-05T05:47:19.984Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T05:47:20.077Z] [BOT] 📂 Loaded 12358 existing routing entries
[2026-02-05T05:47:20.216Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12359
[2026-02-05T05:47:20.216Z] [BOT] Timestamp: 2026-02-05T05:47:20.164Z
[2026-02-05T05:47:20.216Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T05:47:20.216Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T05:47:20.217Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-02-05T05:47:20.217Z] [BOT] Channels used: 2
   Top channels:
     1. #📊・JID_fb739488: 1 posts
[2026-02-05T05:47:20.217Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T05:47:20.218Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T05:47:20.262Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-05T05:47:20.262Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T05:47:20.267Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T05:47:20.267Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T05:47:20.268Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T05:47:20.394Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
[2026-02-05T05:47:20.394Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T05:47:22.415Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2606) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*