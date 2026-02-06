# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T05:47:04.009Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T05:46:54.286Z] ========================================
[2026-02-06T05:46:54.288Z] Discord Bot Execution Log
[2026-02-06T05:46:54.288Z] Environment: GitHub Actions
[2026-02-06T05:46:54.288Z] Node Version: v20.20.0
[2026-02-06T05:46:54.288Z] ========================================
[2026-02-06T05:46:54.288Z] Environment Variables Check:
[2026-02-06T05:46:54.288Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T05:46:54.288Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T05:46:54.288Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T05:46:54.289Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T05:46:54.289Z] 
Multi-Channel Configuration:
[2026-02-06T05:46:54.289Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T05:46:54.289Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T05:46:54.289Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:46:54.289Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T05:46:54.290Z] 
Data Files Check:
[2026-02-06T05:46:54.291Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161599 bytes)
[2026-02-06T05:46:54.348Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10886892 bytes)
[2026-02-06T05:46:54.349Z] 
========================================
[2026-02-06T05:46:54.349Z] Starting Enhanced Discord Bot...
[2026-02-06T05:46:54.349Z] ========================================
[2026-02-06T05:46:54.926Z] [BOT] ✅ Loaded V2 database: 2182 jobs
[2026-02-06T05:46:55.493Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T05:46:55.494Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T05:46:55.494Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T05:46:55.508Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T05:46:55.508Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T05:46:55.509Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T05:46:55.509Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-06T05:46:55.510Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T05:46:55.510Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T05:46:55.510Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T05:46:55.511Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T05:46:55.511Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T05:46:55.511Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T05:46:55.512Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T05:46:55.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T05:46:55.512Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-02-06T05:46:55.512Z] [BOT] ⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T05:46:55.528Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T05:46:55.529Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T05:46:55.529Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-06T05:46:55.529Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-06T05:46:55.529Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-06T05:46:55.529Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T05:46:55.530Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-06T05:46:55.542Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T05:46:55.568Z] [BOT] ✅ Saved pending queue: 185 total (178 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T05:46:55.568Z] [BOT] 📋 After blacklist filter: 1 jobs (43 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T05:46:55.568Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T05:46:55.569Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T05:46:55.569Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T05:46:55.571Z] [BOT] 📍 [ROUTING] "2026 Entry Level Software Engineer - Full-time" @ ORG_b1b059ca Systems
[2026-02-06T05:46:55.571Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T05:46:55.588Z] [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T05:46:56.033Z] [BOT] ✅ Posted message: 2026 Entry Level Software Engineer - Full-time @ ORG_b1b059ca Systems in #💻・tech-jobs
[2026-02-06T05:46:56.033Z] [BOT] ✅ Industry: 2026 Entry Level Software Engineer - Full-time @ ORG_b1b059ca Systems
[2026-02-06T05:46:56.034Z] [BOT] 💾 Added channel posting: 2026 Entry Level Software Engineer - Full-time @ ORG_b1b059ca Systems → category channel (1 total channels)
[2026-02-06T05:46:56.035Z] [BOT] 💾 BEFORE MERGE: 2183 jobs in memory (cached)
[2026-02-06T05:46:56.077Z] [BOT] ✅ Loaded V2 database: 2182 jobs
💾 DISK STATE: 2182 jobs on disk
[2026-02-06T05:46:56.078Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2183
[2026-02-06T05:46:56.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T05:46:56.083Z] [BOT] 💾 AFTER MERGE: 2183 jobs (merged disk + memory)
[2026-02-06T05:46:56.085Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T05:46:56.090Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2173 active
[2026-02-06T05:46:56.213Z] [BOT] 💾 Saved posted_jobs.json: 2173 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T05:47:00.716Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T05:47:00.717Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "3971785bfbc2da58"
⏭️  Skipping duplicate: JID_1c5daed8 (posted within 7 days)
[2026-02-06T05:47:00.727Z] [BOT] ✅ Loaded pending queue: 185 total (178 pending, 7 enriched, 0 posted)
[2026-02-06T05:47:00.745Z] [BOT] ✅ Saved pending queue: 185 total (178 pending, 6 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T05:47:00.745Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T05:47:00.854Z] [BOT] 📂 Loaded 12493 existing routing entries
[2026-02-06T05:47:00.972Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-06T05:47:00.972Z] [BOT] Total entries: 12494
   Timestamp: 2026-02-06T05:47:00.921Z
[2026-02-06T05:47:00.973Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
   Successful: 1
   Failed: 0
   Skipped: 49
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #💻・tech-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2173 jobs in memory (cached)
[2026-02-06T05:47:01.010Z] [BOT] ✅ Loaded V2 database: 2173 jobs
💾 DISK STATE: 2173 jobs on disk
[2026-02-06T05:47:01.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2173
[2026-02-06T05:47:01.015Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T05:47:01.015Z] [BOT] 💾 AFTER MERGE: 2173 jobs (merged disk + memory)
[2026-02-06T05:47:01.017Z] [BOT] ✅ No jobs to archive (all 2173 jobs within 7-day window)
[2026-02-06T05:47:01.121Z] [BOT] 💾 Saved posted_jobs.json: 2173 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T05:47:01.121Z] [BOT] ✅ Database saved successfully
[2026-02-06T05:47:03.138Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*