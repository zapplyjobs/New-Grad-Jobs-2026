# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T08:08:26.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T08:08:14.336Z] ========================================
[2026-02-06T08:08:14.338Z] Discord Bot Execution Log
[2026-02-06T08:08:14.338Z] Environment: GitHub Actions
[2026-02-06T08:08:14.338Z] Node Version: v20.20.0
[2026-02-06T08:08:14.338Z] ========================================
[2026-02-06T08:08:14.338Z] Environment Variables Check:
[2026-02-06T08:08:14.338Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T08:08:14.338Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T08:08:14.338Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T08:08:14.338Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T08:08:14.338Z] 
Multi-Channel Configuration:
[2026-02-06T08:08:14.338Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T08:08:14.338Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.338Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T08:08:14.339Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:08:14.339Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T08:08:14.339Z] 
Data Files Check:
[2026-02-06T08:08:14.340Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168493 bytes)
[2026-02-06T08:08:14.416Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10529752 bytes)
[2026-02-06T08:08:14.416Z] 
========================================
[2026-02-06T08:08:14.416Z] Starting Enhanced Discord Bot...
[2026-02-06T08:08:14.416Z] ========================================
[2026-02-06T08:08:14.944Z] [BOT] ✅ Loaded V2 database: 2138 jobs
[2026-02-06T08:08:15.851Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T08:08:15.852Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T08:08:15.852Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T08:08:15.871Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T08:08:15.871Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T08:08:15.872Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T08:08:15.873Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T08:08:15.873Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T08:08:15.873Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T08:08:15.874Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T08:08:15.874Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T08:08:15.874Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T08:08:15.874Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T08:08:15.887Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T08:08:15.887Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-06T08:08:15.888Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T08:08:15.906Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T08:08:15.932Z] [BOT] ✅ Saved pending queue: 175 total (170 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (45 blacklisted)
[2026-02-06T08:08:15.932Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T08:08:15.933Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T08:08:15.933Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T08:08:15.934Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T08:08:15.936Z] [BOT] 📍 [ROUTING] "IT Support Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-02-06T08:08:15.936Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T08:08:15.953Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T08:08:16.302Z] [BOT] ✅ Posted message: IT Support Engineer @ anthropic in #💻・tech-jobs
[2026-02-06T08:08:16.302Z] [BOT] ✅ Industry: IT Support Engineer @ anthropic
[2026-02-06T08:08:16.304Z] [BOT] 💾 Added channel posting: IT Support Engineer @ anthropic → category channel (1 total channels)
[2026-02-06T08:08:16.304Z] [BOT] 💾 BEFORE MERGE: 2139 jobs in memory (cached)
[2026-02-06T08:08:16.369Z] [BOT] ✅ Loaded V2 database: 2138 jobs
💾 DISK STATE: 2138 jobs on disk
[2026-02-06T08:08:16.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2139
[2026-02-06T08:08:16.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:08:16.375Z] [BOT] 💾 AFTER MERGE: 2139 jobs (merged disk + memory)
[2026-02-06T08:08:16.377Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T08:08:16.382Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T08:08:16.382Z] [BOT] ✅ Archiving complete: 10 archived, 2129 active
[2026-02-06T08:08:16.522Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:08:18.341Z] [BOT] ✅ Posted message: IT Support Engineer @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T08:08:18.342Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T08:08:18.342Z] [BOT] 💾 Added channel posting: IT Support Engineer @ anthropic → location channel (2 total channels)
[2026-02-06T08:08:18.342Z] [BOT] 💾 BEFORE MERGE: 2129 jobs in memory (cached)
[2026-02-06T08:08:18.407Z] [BOT] ✅ Loaded V2 database: 2129 jobs
💾 DISK STATE: 2129 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2129
[2026-02-06T08:08:18.414Z] [BOT] 🔀 Deep merged: IT Support Engineer @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:08:18.414Z] [BOT] 💾 AFTER MERGE: 2129 jobs (merged disk + memory)
[2026-02-06T08:08:18.416Z] [BOT] ✅ No jobs to archive (all 2129 jobs within 7-day window)
[2026-02-06T08:08:18.550Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:08:23.053Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T08:08:23.055Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f14d2fcd85af3789"
[2026-02-06T08:08:23.055Z] [BOT] ⏭️  Skipping duplicate: JID_531047a6 (posted within 7 days)
[2026-02-06T08:08:23.070Z] [BOT] ✅ Loaded pending queue: 175 total (170 pending, 5 enriched, 0 posted)
[2026-02-06T08:08:23.089Z] [BOT] ✅ Saved pending queue: 175 total (170 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T08:08:23.090Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T08:08:23.211Z] [BOT] 📂 Loaded 12509 existing routing entries
[2026-02-06T08:08:23.361Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12510
   Timestamp: 2026-02-06T08:08:23.309Z
[2026-02-06T08:08:23.362Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T08:08:23.362Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T08:08:23.362Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T08:08:23.362Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-06T08:08:23.362Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T08:08:23.362Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T08:08:23.363Z] [BOT] 💾 BEFORE MERGE: 2129 jobs in memory (cached)
[2026-02-06T08:08:23.425Z] [BOT] ✅ Loaded V2 database: 2129 jobs
💾 DISK STATE: 2129 jobs on disk
[2026-02-06T08:08:23.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2129
[2026-02-06T08:08:23.431Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:08:23.431Z] [BOT] 💾 AFTER MERGE: 2129 jobs (merged disk + memory)
[2026-02-06T08:08:23.433Z] [BOT] ✅ No jobs to archive (all 2129 jobs within 7-day window)
[2026-02-06T08:08:23.583Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T08:08:25.601Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*