# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T23:48:42.164Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T23:48:30.935Z] ========================================
[2026-02-05T23:48:30.938Z] Discord Bot Execution Log
[2026-02-05T23:48:30.938Z] Environment: GitHub Actions
[2026-02-05T23:48:30.938Z] Node Version: v20.20.0
[2026-02-05T23:48:30.938Z] ========================================
[2026-02-05T23:48:30.938Z] Environment Variables Check:
[2026-02-05T23:48:30.938Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T23:48:30.938Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T23:48:30.938Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T23:48:30.938Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T23:48:30.938Z] 
Multi-Channel Configuration:
[2026-02-05T23:48:30.938Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T23:48:30.939Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T23:48:30.939Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:48:30.939Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T23:48:30.939Z] 
Data Files Check:
[2026-02-05T23:48:30.941Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170329 bytes)
[2026-02-05T23:48:31.007Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11341159 bytes)
[2026-02-05T23:48:31.007Z] 
========================================
[2026-02-05T23:48:31.007Z] Starting Enhanced Discord Bot...
[2026-02-05T23:48:31.007Z] ========================================
[2026-02-05T23:48:31.609Z] [BOT] ✅ Loaded V2 database: 2241 jobs
[2026-02-05T23:48:32.045Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T23:48:32.046Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T23:48:32.046Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T23:48:32.062Z] [BOT] ✅ Loaded pending queue: 241 total (191 pending, 50 enriched, 0 posted)
[2026-02-05T23:48:32.063Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:48:32.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T23:48:32.064Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T23:48:32.064Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:48:32.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T23:48:32.065Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T23:48:32.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T23:48:32.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T23:48:32.066Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T23:48:32.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T23:48:32.066Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T23:48:32.083Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-05T23:48:32.083Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
[2026-02-05T23:48:32.083Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-05T23:48:32.084Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-05T23:48:32.085Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-05T23:48:32.108Z] [BOT] ✅ Loaded pending queue: 241 total (191 pending, 50 enriched, 0 posted)
[2026-02-05T23:48:32.127Z] [BOT] ✅ Saved pending queue: 197 total (191 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (44 blacklisted)
[2026-02-05T23:48:32.127Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T23:48:32.128Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T23:48:32.130Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T23:48:32.131Z] [BOT] 📍 [ROUTING] "Certification Content and Systems Architect" @ anthropic
[2026-02-05T23:48:32.132Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:48:32.149Z] [BOT ERROR] (node:2937) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T23:48:32.515Z] [BOT] ✅ Posted message: Certification Content and Systems Architect @ anthropic in #💻・tech-jobs
[2026-02-05T23:48:32.515Z] [BOT] ✅ Industry: Certification Content and Systems Architect @ anthropic
[2026-02-05T23:48:32.516Z] [BOT] 💾 Added channel posting: Certification Content and Systems Architect @ anthropic → category channel (1 total channels)
[2026-02-05T23:48:32.516Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-05T23:48:32.561Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-05T23:48:32.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-05T23:48:32.567Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:48:32.567Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-05T23:48:32.569Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-05T23:48:32.688Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:48:34.332Z] [BOT] ✅ Posted message: Certification Content and Systems Architect @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T23:48:34.333Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T23:48:34.333Z] [BOT] 💾 Added channel posting: Certification Content and Systems Architect @ anthropic → location channel (2 total channels)
[2026-02-05T23:48:34.333Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-05T23:48:34.371Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-05T23:48:34.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-05T23:48:34.376Z] [BOT] 🔀 Deep merged: Certification Content and Systems Architect @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-05T23:48:34.376Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-05T23:48:34.378Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-05T23:48:34.488Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:48:38.990Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T23:48:38.991Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c2c7bc39d6458996"
[2026-02-05T23:48:38.991Z] [BOT] ⏭️  Skipping duplicate: JID_9fe8863a (posted within 7 days)
[2026-02-05T23:48:39.002Z] [BOT] ✅ Loaded pending queue: 197 total (191 pending, 6 enriched, 0 posted)
[2026-02-05T23:48:39.022Z] [BOT] ✅ Saved pending queue: 197 total (191 pending, 5 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T23:48:39.121Z] [BOT] 📂 Loaded 12482 existing routing entries
[2026-02-05T23:48:39.261Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-05T23:48:39.261Z] [BOT] Total entries: 12483
   Timestamp: 2026-02-05T23:48:39.208Z
[2026-02-05T23:48:39.262Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T23:48:39.262Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T23:48:39.262Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T23:48:39.262Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T23:48:39.262Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T23:48:39.263Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-05T23:48:39.313Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-05T23:48:39.319Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:48:39.319Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-05T23:48:39.321Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-05T23:48:39.440Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:48:39.440Z] [BOT] ✅ Database saved successfully
[2026-02-05T23:48:41.465Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2937) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*