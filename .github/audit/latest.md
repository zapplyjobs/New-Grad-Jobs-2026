# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T23:36:26.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T23:36:15.123Z] ========================================
[2026-02-05T23:36:15.125Z] Discord Bot Execution Log
[2026-02-05T23:36:15.125Z] Environment: GitHub Actions
[2026-02-05T23:36:15.126Z] Node Version: v20.20.0
[2026-02-05T23:36:15.126Z] ========================================
[2026-02-05T23:36:15.126Z] Environment Variables Check:
[2026-02-05T23:36:15.126Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T23:36:15.126Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T23:36:15.126Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T23:36:15.126Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T23:36:15.126Z] 
Multi-Channel Configuration:
[2026-02-05T23:36:15.126Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T23:36:15.126Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.126Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.126Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T23:36:15.127Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.127Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.127Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.127Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.127Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:36:15.127Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T23:36:15.127Z] 
Data Files Check:
[2026-02-05T23:36:15.128Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130373 bytes)
[2026-02-05T23:36:15.185Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11400999 bytes)
[2026-02-05T23:36:15.185Z] 
========================================
[2026-02-05T23:36:15.185Z] Starting Enhanced Discord Bot...
[2026-02-05T23:36:15.185Z] ========================================
[2026-02-05T23:36:15.749Z] [BOT] ✅ Loaded V2 database: 2250 jobs
[2026-02-05T23:36:16.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T23:36:16.294Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T23:36:16.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T23:36:16.309Z] [BOT] ✅ Loaded pending queue: 240 total (190 pending, 50 enriched, 0 posted)
[2026-02-05T23:36:16.309Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:36:16.310Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T23:36:16.310Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T23:36:16.310Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:36:16.311Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T23:36:16.311Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T23:36:16.311Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T23:36:16.312Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T23:36:16.312Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T23:36:16.312Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T23:36:16.312Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T23:36:16.329Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-05T23:36:16.330Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-05T23:36:16.330Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-05T23:36:16.330Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-05T23:36:16.330Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-05T23:36:16.330Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-05T23:36:16.331Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-05T23:36:16.348Z] [BOT] ✅ Loaded pending queue: 240 total (190 pending, 50 enriched, 0 posted)
[2026-02-05T23:36:16.372Z] [BOT] ✅ Saved pending queue: 196 total (190 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
[2026-02-05T23:36:16.372Z] [BOT] 📋 After blacklist filter: 1 jobs (44 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T23:36:16.372Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T23:36:16.375Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T23:36:16.376Z] [BOT] 📍 [ROUTING] "Training Content and Systems Architect" @ anthropic
[2026-02-05T23:36:16.376Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:36:16.393Z] [BOT ERROR] (node:2556) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T23:36:16.778Z] [BOT] ✅ Posted message: Training Content and Systems Architect @ anthropic in #💻・tech-jobs
[2026-02-05T23:36:16.778Z] [BOT] ✅ Industry: Training Content and Systems Architect @ anthropic
[2026-02-05T23:36:16.780Z] [BOT] 💾 Added channel posting: Training Content and Systems Architect @ anthropic → category channel (1 total channels)
[2026-02-05T23:36:16.780Z] [BOT] 💾 BEFORE MERGE: 2251 jobs in memory (cached)
[2026-02-05T23:36:16.825Z] [BOT] ✅ Loaded V2 database: 2250 jobs
💾 DISK STATE: 2250 jobs on disk
[2026-02-05T23:36:16.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2251
[2026-02-05T23:36:16.830Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:36:16.831Z] [BOT] 💾 AFTER MERGE: 2251 jobs (merged disk + memory)
[2026-02-05T23:36:16.832Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T23:36:16.838Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-05T23:36:16.838Z] [BOT] ✅ Archiving complete: 10 archived, 2241 active
[2026-02-05T23:36:16.957Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:36:18.727Z] [BOT] ✅ Posted message: Training Content and Systems Architect @ anthropic in #🌉・JID_739bbc0b
[2026-02-05T23:36:18.727Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T23:36:18.728Z] [BOT] 💾 Added channel posting: Training Content and Systems Architect @ anthropic → location channel (2 total channels)
[2026-02-05T23:36:18.728Z] [BOT] 💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-05T23:36:18.766Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-05T23:36:18.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-05T23:36:18.771Z] [BOT] 🔀 Deep merged: Training Content and Systems Architect @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-05T23:36:18.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-05T23:36:18.773Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-05T23:36:18.883Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:36:23.386Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T23:36:23.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3ee28697ea6d7443"
[2026-02-05T23:36:23.387Z] [BOT] ⏭️  Skipping duplicate: JID_167cbc72 (posted within 7 days)
[2026-02-05T23:36:23.398Z] [BOT] ✅ Loaded pending queue: 196 total (190 pending, 6 enriched, 0 posted)
[2026-02-05T23:36:23.417Z] [BOT] ✅ Saved pending queue: 196 total (190 pending, 5 enriched, 1 posted)
[2026-02-05T23:36:23.417Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T23:36:23.512Z] [BOT] 📂 Loaded 12481 existing routing entries
[2026-02-05T23:36:23.651Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-05T23:36:23.651Z] [BOT] Total entries: 12482
   Timestamp: 2026-02-05T23:36:23.599Z
[2026-02-05T23:36:23.651Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T23:36:23.652Z] [BOT] Total attempts: 51
[2026-02-05T23:36:23.652Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T23:36:23.652Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-02-05T23:36:23.652Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T23:36:23.652Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2241 jobs in memory (cached)
[2026-02-05T23:36:23.703Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2241
[2026-02-05T23:36:23.707Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:36:23.707Z] [BOT] 💾 AFTER MERGE: 2241 jobs (merged disk + memory)
[2026-02-05T23:36:23.709Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-02-05T23:36:23.828Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T23:36:25.850Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2556) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*