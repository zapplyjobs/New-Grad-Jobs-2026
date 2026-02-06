# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T23:02:47.992Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T23:02:36.369Z] ========================================
[2026-02-06T23:02:36.371Z] Discord Bot Execution Log
[2026-02-06T23:02:36.371Z] Environment: GitHub Actions
[2026-02-06T23:02:36.371Z] Node Version: v20.20.0
[2026-02-06T23:02:36.371Z] ========================================
[2026-02-06T23:02:36.371Z] Environment Variables Check:
[2026-02-06T23:02:36.372Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T23:02:36.372Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T23:02:36.372Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T23:02:36.372Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T23:02:36.372Z] 
Multi-Channel Configuration:
[2026-02-06T23:02:36.372Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T23:02:36.372Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.372Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.372Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T23:02:36.372Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.372Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.373Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.373Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.373Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:02:36.373Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T23:02:36.373Z] 
Data Files Check:
[2026-02-06T23:02:36.374Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157596 bytes)
[2026-02-06T23:02:36.414Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8334728 bytes)
[2026-02-06T23:02:36.414Z] 
========================================
[2026-02-06T23:02:36.414Z] Starting Enhanced Discord Bot...
[2026-02-06T23:02:36.414Z] ========================================
[2026-02-06T23:02:37.014Z] [BOT] ✅ Loaded V2 database: 1799 jobs
[2026-02-06T23:02:37.754Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T23:02:37.754Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T23:02:37.754Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T23:02:37.770Z] [BOT] ✅ Loaded pending queue: 214 total (164 pending, 50 enriched, 0 posted)
[2026-02-06T23:02:37.771Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:02:37.772Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T23:02:37.772Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:02:37.772Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T23:02:37.773Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T23:02:37.788Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T23:02:37.788Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-06T23:02:37.789Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-06T23:02:37.790Z] [BOT] 🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
[2026-02-06T23:02:37.790Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-06T23:02:37.790Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T23:02:37.804Z] [BOT] ✅ Loaded pending queue: 214 total (164 pending, 50 enriched, 0 posted)
[2026-02-06T23:02:37.825Z] [BOT] ✅ Saved pending queue: 167 total (164 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-06T23:02:37.825Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T23:02:37.825Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T23:02:37.825Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T23:02:37.827Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T23:02:37.829Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-02-06T23:02:37.829Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T23:02:37.846Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T23:02:38.206Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-02-06T23:02:38.206Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-02-06T23:02:38.207Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-02-06T23:02:38.207Z] [BOT] 💾 BEFORE MERGE: 1800 jobs in memory (cached)
[2026-02-06T23:02:38.236Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-06T23:02:38.236Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1800
[2026-02-06T23:02:38.240Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:02:38.240Z] [BOT] 💾 AFTER MERGE: 1800 jobs (merged disk + memory)
[2026-02-06T23:02:38.242Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T23:02:38.249Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-02-06T23:02:38.250Z] [BOT] ✅ Archiving complete: 3 archived, 1797 active
[2026-02-06T23:02:38.357Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:02:40.154Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🌉・JID_739bbc0b
[2026-02-06T23:02:40.154Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T23:02:40.155Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
[2026-02-06T23:02:40.155Z] [BOT] 💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-06T23:02:40.181Z] [BOT] ✅ Loaded V2 database: 1797 jobs
💾 DISK STATE: 1797 jobs on disk
[2026-02-06T23:02:40.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-06T23:02:40.185Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
[2026-02-06T23:02:40.185Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-06T23:02:40.187Z] [BOT] ✅ No jobs to archive (all 1797 jobs within 7-day window)
[2026-02-06T23:02:40.270Z] [BOT] 💾 Saved posted_jobs.json: 1797 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:02:44.772Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T23:02:44.773Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f6565ad3..." not found, but found as SHA256 "35b189cd4c22b795"
⏭️  Skipping duplicate: JID_f6565ad3 (posted within 7 days)
[2026-02-06T23:02:44.782Z] [BOT] ✅ Loaded pending queue: 167 total (164 pending, 3 enriched, 0 posted)
[2026-02-06T23:02:44.797Z] [BOT] ✅ Saved pending queue: 167 total (164 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T23:02:44.797Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T23:02:44.912Z] [BOT] 📂 Loaded 12609 existing routing entries
[2026-02-06T23:02:45.038Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12610
   Timestamp: 2026-02-06T23:02:44.984Z
[2026-02-06T23:02:45.039Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
[2026-02-06T23:02:45.039Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T23:02:45.040Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💰・finance-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T23:02:45.040Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-06T23:02:45.067Z] [BOT] ✅ Loaded V2 database: 1797 jobs
💾 DISK STATE: 1797 jobs on disk
[2026-02-06T23:02:45.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-06T23:02:45.072Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:02:45.072Z] [BOT] 💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-06T23:02:45.077Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 1 archived, 1796 active
[2026-02-06T23:02:45.150Z] [BOT] 💾 Saved posted_jobs.json: 1796 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T23:02:47.168Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*