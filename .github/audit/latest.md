# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T10:24:20.382Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T10:24:16.154Z] ========================================
[2026-02-06T10:24:16.156Z] Discord Bot Execution Log
[2026-02-06T10:24:16.156Z] Environment: GitHub Actions
[2026-02-06T10:24:16.156Z] Node Version: v20.20.0
[2026-02-06T10:24:16.156Z] ========================================
[2026-02-06T10:24:16.156Z] Environment Variables Check:
[2026-02-06T10:24:16.156Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T10:24:16.156Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T10:24:16.156Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T10:24:16.156Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T10:24:16.156Z] 
Multi-Channel Configuration:
[2026-02-06T10:24:16.156Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T10:24:16.157Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T10:24:16.157Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:24:16.157Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T10:24:16.157Z] 
Data Files Check:
[2026-02-06T10:24:16.158Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118345 bytes)
[2026-02-06T10:24:16.223Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10214983 bytes)
[2026-02-06T10:24:16.223Z] 
========================================
[2026-02-06T10:24:16.223Z] Starting Enhanced Discord Bot...
[2026-02-06T10:24:16.223Z] ========================================
[2026-02-06T10:24:16.794Z] [BOT] ✅ Loaded V2 database: 2089 jobs
[2026-02-06T10:24:17.270Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T10:24:17.270Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T10:24:17.271Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T10:24:17.288Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T10:24:17.288Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T10:24:17.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T10:24:17.290Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T10:24:17.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T10:24:17.290Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T10:24:17.291Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T10:24:17.303Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T10:24:17.303Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
[2026-02-06T10:24:17.304Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T10:24:17.305Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T10:24:17.305Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-06T10:24:17.305Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T10:24:17.320Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T10:24:17.345Z] [BOT] ✅ Saved pending queue: 174 total (170 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
[2026-02-06T10:24:17.345Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T10:24:17.345Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T10:24:17.346Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T10:24:17.346Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
[2026-02-06T10:24:17.346Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T10:24:17.346Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
[2026-02-06T10:24:17.347Z] [BOT] 💾 Saving posted jobs database...
[2026-02-06T10:24:17.347Z] [BOT] 💾 BEFORE MERGE: 2089 jobs in memory (cached)
[2026-02-06T10:24:17.391Z] [BOT] ✅ Loaded V2 database: 2089 jobs
💾 DISK STATE: 2089 jobs on disk
[2026-02-06T10:24:17.392Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2089
[2026-02-06T10:24:17.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T10:24:17.397Z] [BOT] 💾 AFTER MERGE: 2089 jobs (merged disk + memory)
[2026-02-06T10:24:17.398Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T10:24:17.405Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T10:24:17.405Z] [BOT] ✅ Archiving complete: 20 archived, 2069 active
[2026-02-06T10:24:17.539Z] [BOT] 💾 Saved posted_jobs.json: 2069 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T10:24:17.539Z] [BOT] ✅ Database saved successfully
[2026-02-06T10:24:17.539Z] [BOT ERROR] (node:2855) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T10:24:19.563Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2855) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*