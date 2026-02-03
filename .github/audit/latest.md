# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T09:22:41.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T09:22:31.785Z] ========================================
[2026-02-03T09:22:31.787Z] Discord Bot Execution Log
[2026-02-03T09:22:31.787Z] Environment: GitHub Actions
[2026-02-03T09:22:31.787Z] Node Version: v20.20.0
[2026-02-03T09:22:31.787Z] ========================================
[2026-02-03T09:22:31.787Z] Environment Variables Check:
[2026-02-03T09:22:31.787Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T09:22:31.788Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T09:22:31.788Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T09:22:31.788Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T09:22:31.788Z] 
Multi-Channel Configuration:
[2026-02-03T09:22:31.788Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T09:22:31.788Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.788Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.788Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T09:22:31.788Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.788Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.788Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.788Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.789Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T09:22:31.789Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T09:22:31.789Z] 
Data Files Check:
[2026-02-03T09:22:31.790Z] .github/data/new_jobs.json: ✅ Exists (10 items, 198524 bytes)
[2026-02-03T09:22:31.848Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11336248 bytes)
[2026-02-03T09:22:31.849Z] 
========================================
[2026-02-03T09:22:31.849Z] Starting Enhanced Discord Bot...
[2026-02-03T09:22:31.849Z] ========================================
[2026-02-03T09:22:32.430Z] [BOT] ✅ Loaded V2 database: 2245 jobs
[2026-02-03T09:22:33.039Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T09:22:33.040Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T09:22:33.040Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T09:22:33.060Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T09:22:33.061Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T09:22:33.062Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T09:22:33.062Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T09:22:33.062Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T09:22:33.081Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T09:22:33.081Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
[2026-02-03T09:22:33.082Z] [BOT] 🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
[2026-02-03T09:22:33.082Z] [BOT] 🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-02-03T09:22:33.082Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-03T09:22:33.082Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
[2026-02-03T09:22:33.082Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
[2026-02-03T09:22:33.083Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-02-03T09:22:33.113Z] [BOT] ✅ Loaded pending queue: 321 total (271 pending, 50 enriched, 0 posted)
[2026-02-03T09:22:33.147Z] [BOT] ✅ Saved pending queue: 273 total (271 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T09:22:33.147Z] [BOT] 📋 After blacklist filter: 1 jobs (48 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T09:22:33.148Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T09:22:33.148Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-03T09:22:33.150Z] [BOT] 📍 [ROUTING] "Business Technology AI Engineer IV" @ samsara
[2026-02-03T09:22:33.150Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-03T09:22:33.167Z] [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T09:22:33.405Z] [BOT] ✅ Posted message: Business Technology AI Engineer IV @ samsara in #🤖・ai-jobs
[2026-02-03T09:22:33.405Z] [BOT] ✅ Industry: Business Technology AI Engineer IV @ samsara
[2026-02-03T09:22:33.406Z] [BOT] 💾 Added channel posting: Business Technology AI Engineer IV @ samsara → category channel (1 total channels)
[2026-02-03T09:22:33.407Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T09:22:33.451Z] [BOT] ✅ Loaded V2 database: 2245 jobs
💾 DISK STATE: 2245 jobs on disk
[2026-02-03T09:22:33.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T09:22:33.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T09:22:33.457Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T09:22:33.458Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T09:22:33.590Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
[2026-02-03T09:22:33.592Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-03T09:22:38.093Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T09:22:38.095Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c156d3d..." not found, but found as SHA256 "60a6819e35d1729f"
[2026-02-03T09:22:38.095Z] [BOT] ⏭️  Skipping duplicate: JID_0a840f08 (posted within 7 days)
[2026-02-03T09:22:38.110Z] [BOT] ✅ Loaded pending queue: 273 total (271 pending, 2 enriched, 0 posted)
[2026-02-03T09:22:38.140Z] [BOT] ✅ Saved pending queue: 273 total (271 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-03T09:22:38.231Z] [BOT] 📂 Loaded 12326 existing routing entries
[2026-02-03T09:22:38.363Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-03T09:22:38.363Z] [BOT] Total entries: 12327
   Timestamp: 2026-02-03T09:22:38.311Z
[2026-02-03T09:22:38.364Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T09:22:38.364Z] [BOT] Total attempts: 50
   Successful: 1
   Failed: 0
   Skipped: 49
[2026-02-03T09:22:38.364Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-03T09:22:38.364Z] [BOT] Last cleanup: Never
[2026-02-03T09:22:38.364Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-02-03T09:22:38.365Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T09:22:38.365Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T09:22:38.408Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T09:22:38.408Z] [BOT] 💾 DISK STATE: 2246 jobs on disk
[2026-02-03T09:22:38.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T09:22:38.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T09:22:38.414Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T09:22:38.415Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T09:22:38.527Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T09:22:38.527Z] [BOT] ✅ Database saved successfully
[2026-02-03T09:22:40.556Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*