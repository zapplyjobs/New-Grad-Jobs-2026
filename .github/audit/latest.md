# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T01:43:44.490Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T01:43:27.812Z] ========================================
[2026-02-06T01:43:27.814Z] Discord Bot Execution Log
[2026-02-06T01:43:27.814Z] Environment: GitHub Actions
[2026-02-06T01:43:27.814Z] Node Version: v20.20.0
[2026-02-06T01:43:27.814Z] ========================================
[2026-02-06T01:43:27.814Z] Environment Variables Check:
[2026-02-06T01:43:27.814Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T01:43:27.814Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T01:43:27.814Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T01:43:27.814Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T01:43:27.815Z] 
Multi-Channel Configuration:
[2026-02-06T01:43:27.815Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T01:43:27.815Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T01:43:27.815Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:43:27.815Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T01:43:27.815Z] 
Data Files Check:
[2026-02-06T01:43:27.817Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163518 bytes)
[2026-02-06T01:43:27.889Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11240108 bytes)
[2026-02-06T01:43:27.890Z] 
========================================
[2026-02-06T01:43:27.890Z] Starting Enhanced Discord Bot...
[2026-02-06T01:43:27.890Z] ========================================
[2026-02-06T01:43:28.488Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-06T01:43:29.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T01:43:29.026Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T01:43:29.027Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T01:43:29.040Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T01:43:29.040Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T01:43:29.042Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T01:43:29.042Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-06T01:43:29.042Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T01:43:29.042Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T01:43:29.043Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T01:43:29.043Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T01:43:29.043Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T01:43:29.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T01:43:29.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T01:43:29.044Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T01:43:29.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T01:43:29.044Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T01:43:29.061Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-06T01:43:29.062Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-06T01:43:29.063Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-06T01:43:29.064Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
[2026-02-06T01:43:29.076Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T01:43:29.102Z] [BOT] ✅ Saved pending queue: 178 total (170 pending, 8 enriched, 0 posted)
🗑️ Removed 42 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (42 blacklisted)
[2026-02-06T01:43:29.102Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T01:43:29.102Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T01:43:29.102Z] [BOT] ⏸️ Limiting to 10 jobs this run, 42 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T01:43:29.105Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T01:43:29.106Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-02-06T01:43:29.107Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T01:43:29.124Z] [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T01:43:29.414Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-02-06T01:43:29.415Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T01:43:29.416Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-06T01:43:29.416Z] [BOT] 💾 BEFORE MERGE: 2227 jobs in memory (cached)
[2026-02-06T01:43:29.461Z] [BOT] ✅ Loaded V2 database: 2226 jobs
[2026-02-06T01:43:29.462Z] [BOT] 💾 DISK STATE: 2226 jobs on disk
[2026-02-06T01:43:29.462Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2227
[2026-02-06T01:43:29.468Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T01:43:29.468Z] [BOT] 💾 AFTER MERGE: 2227 jobs (merged disk + memory)
[2026-02-06T01:43:29.469Z] [BOT] ✅ No jobs to archive (all 2227 jobs within 7-day window)
[2026-02-06T01:43:29.606Z] [BOT] 💾 Saved posted_jobs.json: 2227 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:43:34.110Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T01:43:34.111Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Digital Native Business" @ anthropic
   Category: TECH (default)
[2026-02-06T01:43:34.111Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T01:43:34.322Z] [BOT] ✅ Posted message: Strategic Account Executive, Digital Native Business @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, Digital Native Business @ anthropic
[2026-02-06T01:43:34.323Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Digital Native Business @ anthropic → category channel (1 total channels)
[2026-02-06T01:43:34.323Z] [BOT] 💾 BEFORE MERGE: 2228 jobs in memory (cached)
[2026-02-06T01:43:34.368Z] [BOT] ✅ Loaded V2 database: 2227 jobs
[2026-02-06T01:43:34.370Z] [BOT] 💾 DISK STATE: 2227 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2228
[2026-02-06T01:43:34.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T01:43:34.376Z] [BOT] 💾 AFTER MERGE: 2228 jobs (merged disk + memory)
[2026-02-06T01:43:34.377Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-02-06T01:43:34.499Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:43:36.354Z] [BOT] ✅ Posted message: Strategic Account Executive, Digital Native Business @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T01:43:36.355Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Digital Native Business @ anthropic → location channel (2 total channels)
[2026-02-06T01:43:36.355Z] [BOT] 💾 BEFORE MERGE: 2228 jobs in memory (cached)
[2026-02-06T01:43:36.395Z] [BOT] ✅ Loaded V2 database: 2228 jobs
💾 DISK STATE: 2228 jobs on disk
[2026-02-06T01:43:36.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2228
[2026-02-06T01:43:36.400Z] [BOT] 🔀 Deep merged: Strategic Account Executive, Digital Native Business @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T01:43:36.401Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2228 jobs (merged disk + memory)
[2026-02-06T01:43:36.402Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-02-06T01:43:36.532Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:43:41.032Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T01:43:41.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "6788d73bd5bb9bd0"
[2026-02-06T01:43:41.034Z] [BOT] ⏭️  Skipping duplicate: JID_10ccb697 (posted within 7 days)
[2026-02-06T01:43:41.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "798615dfc778a5f7"
[2026-02-06T01:43:41.034Z] [BOT] ⏭️  Skipping duplicate: JID_1d6b84cb (posted within 7 days)
[2026-02-06T01:43:41.044Z] [BOT] ✅ Loaded pending queue: 178 total (170 pending, 8 enriched, 0 posted)
[2026-02-06T01:43:41.062Z] [BOT] ✅ Saved pending queue: 178 total (170 pending, 6 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T01:43:41.172Z] [BOT] 📂 Loaded 12487 existing routing entries
[2026-02-06T01:43:41.297Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-06T01:43:41.298Z] [BOT] Total entries: 12489
   Timestamp: 2026-02-06T01:43:41.244Z
[2026-02-06T01:43:41.298Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T01:43:41.298Z] [BOT] Total attempts: 51
   Successful: 3
   Failed: 0
   Skipped: 48
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T01:43:41.299Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 1 posts
     2. #💻・tech-jobs: 1 posts
     3. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T01:43:41.299Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2228 jobs in memory (cached)
[2026-02-06T01:43:41.361Z] [BOT] ✅ Loaded V2 database: 2228 jobs
💾 DISK STATE: 2228 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2228
[2026-02-06T01:43:41.366Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T01:43:41.366Z] [BOT] 💾 AFTER MERGE: 2228 jobs (merged disk + memory)
[2026-02-06T01:43:41.368Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-02-06T01:43:41.499Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T01:43:43.523Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*