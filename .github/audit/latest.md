# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T21:47:42.935Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T21:47:30.833Z] ========================================
[2026-02-01T21:47:30.835Z] Discord Bot Execution Log
[2026-02-01T21:47:30.835Z] Environment: GitHub Actions
[2026-02-01T21:47:30.835Z] Node Version: v20.20.0
[2026-02-01T21:47:30.836Z] ========================================
[2026-02-01T21:47:30.836Z] Environment Variables Check:
[2026-02-01T21:47:30.836Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T21:47:30.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T21:47:30.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T21:47:30.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T21:47:30.836Z] 
Multi-Channel Configuration:
[2026-02-01T21:47:30.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T21:47:30.836Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.836Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T21:47:30.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.837Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.837Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.837Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.837Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:47:30.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T21:47:30.837Z] 
Data Files Check:
[2026-02-01T21:47:30.838Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177856 bytes)
[2026-02-01T21:47:30.895Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11016141 bytes)
[2026-02-01T21:47:30.895Z] 
========================================
[2026-02-01T21:47:30.896Z] Starting Enhanced Discord Bot...
[2026-02-01T21:47:30.896Z] ========================================
[2026-02-01T21:47:31.464Z] [BOT] ✅ Loaded V2 database: 2198 jobs
[2026-02-01T21:47:31.907Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T21:47:31.908Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T21:47:31.908Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T21:47:31.956Z] [BOT] ✅ Loaded pending queue: 747 total (697 pending, 50 enriched, 0 posted)
[2026-02-01T21:47:31.956Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Upmarket Account Executive at brex
[2026-02-01T21:47:31.975Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T21:47:31.975Z] [BOT] 🚫 Skipping blacklisted job: Software Developer - 2026 Leadership Development Program - Houston at ION Group
[2026-02-01T21:47:31.976Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Marketing  at figma
[2026-02-01T21:47:31.976Z] [BOT] 🚫 Skipping blacklisted job: Director, Federal Sales at figma
🚫 Skipping blacklisted job: Associate Manager, EDD Compliance at coinbase
🚫 Skipping blacklisted job: Associate Manager, Quality Compliance at coinbase
[2026-02-01T21:47:31.976Z] [BOT] 🚫 Skipping blacklisted job: Associate Manager, Transaction Monitoring Compliance at coinbase
🚫 Skipping blacklisted job: Lead EDD Compliance Analyst at coinbase
[2026-02-01T21:47:31.976Z] [BOT] 🚫 Skipping blacklisted job: Senior AML Investigations Trainer at coinbase
🚫 Skipping blacklisted job: Postdoctoral Research Associate - Physics at Wash U
🚫 Skipping blacklisted job:  Accounting Manager, Legal Entity Controllership at brex
🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
🚫 Skipping blacklisted job: Engineering Manager, Security Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, Security Engineering  at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant at brex
🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management  at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management  at brex
🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
🚫 Skipping blacklisted job:  Senior Manager, Implementation at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
[2026-02-01T21:47:31.977Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Product Designer at brex
🚫 Skipping blacklisted job: Staff Product Designer at brex
[2026-02-01T21:47:31.978Z] [BOT] 🚫 Skipping blacklisted job: Staff Engineer I, Software Process Engineering at Samsung
🚫 Skipping blacklisted job: Staff Analytics Engineer at gohighlevel
[2026-02-01T21:47:32.019Z] [BOT] ✅ Loaded pending queue: 747 total (697 pending, 50 enriched, 0 posted)
[2026-02-01T21:47:32.096Z] [BOT] ✅ Saved pending queue: 700 total (697 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (47 blacklisted)
[2026-02-01T21:47:32.096Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-01T21:47:32.097Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-01T21:47:32.097Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Upmarket Account Executive @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
[2026-02-01T21:47:32.097Z] [BOT] ⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T21:47:32.100Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T21:47:32.101Z] [BOT] 📍 [ROUTING] "Upmarket Account Executive" @ brex
[2026-02-01T21:47:32.101Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T21:47:32.118Z] [BOT ERROR] (node:2970) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T21:47:32.439Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #💰・finance-jobs
[2026-02-01T21:47:32.439Z] [BOT] ✅ Industry: Upmarket Account Executive @ brex
[2026-02-01T21:47:32.440Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → category channel (1 total channels)
[2026-02-01T21:47:32.440Z] [BOT] 💾 BEFORE MERGE: 2199 jobs in memory (cached)
[2026-02-01T21:47:32.480Z] [BOT] ✅ Loaded V2 database: 2198 jobs
💾 DISK STATE: 2198 jobs on disk
[2026-02-01T21:47:32.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2199
[2026-02-01T21:47:32.486Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:47:32.486Z] [BOT] 💾 AFTER MERGE: 2199 jobs (merged disk + memory)
[2026-02-01T21:47:32.487Z] [BOT] ✅ No jobs to archive (all 2199 jobs within 7-day window)
[2026-02-01T21:47:32.615Z] [BOT] 💾 Saved posted_jobs.json: 2199 active jobs
[2026-02-01T21:47:32.615Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T21:47:34.341Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T21:47:34.342Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → location channel (2 total channels)
[2026-02-01T21:47:34.342Z] [BOT] 💾 BEFORE MERGE: 2199 jobs in memory (cached)
[2026-02-01T21:47:34.379Z] [BOT] ✅ Loaded V2 database: 2199 jobs
[2026-02-01T21:47:34.380Z] [BOT] 💾 DISK STATE: 2199 jobs on disk
[2026-02-01T21:47:34.380Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2199
[2026-02-01T21:47:34.385Z] [BOT] 🔀 Deep merged: Upmarket Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:47:34.385Z] [BOT] 💾 AFTER MERGE: 2199 jobs (merged disk + memory)
[2026-02-01T21:47:34.386Z] [BOT] ✅ No jobs to archive (all 2199 jobs within 7-day window)
[2026-02-01T21:47:34.496Z] [BOT] 💾 Saved posted_jobs.json: 2199 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:47:38.997Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-01T21:47:38.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b09664dd..." not found, but found as SHA256 "b41627ff762c5027"
[2026-02-01T21:47:38.999Z] [BOT] ⏭️  Skipping duplicate: JID_b09664dd (posted within 7 days)
[2026-02-01T21:47:39.040Z] [BOT] ✅ Loaded pending queue: 700 total (697 pending, 3 enriched, 0 posted)
[2026-02-01T21:47:39.111Z] [BOT] ✅ Saved pending queue: 700 total (697 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T21:47:39.202Z] [BOT] 📂 Loaded 12279 existing routing entries
[2026-02-01T21:47:39.341Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-01T21:47:39.341Z] [BOT] Total entries: 12280
   Timestamp: 2026-02-01T21:47:39.290Z
[2026-02-01T21:47:39.342Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T21:47:39.342Z] [BOT] Total attempts: 49
   Successful: 2
   Failed: 0
   Skipped: 47
[2026-02-01T21:47:39.342Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T21:47:39.342Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💰・finance-jobs: 1 posts
     2. #🏠・JID_ead674af: 1 posts
[2026-02-01T21:47:39.342Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T21:47:39.342Z] [BOT] 💾 BEFORE MERGE: 2199 jobs in memory (cached)
[2026-02-01T21:47:39.391Z] [BOT] ✅ Loaded V2 database: 2199 jobs
💾 DISK STATE: 2199 jobs on disk
[2026-02-01T21:47:39.392Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2199
[2026-02-01T21:47:39.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:47:39.397Z] [BOT] 💾 AFTER MERGE: 2199 jobs (merged disk + memory)
[2026-02-01T21:47:39.398Z] [BOT] ✅ No jobs to archive (all 2199 jobs within 7-day window)
[2026-02-01T21:47:39.520Z] [BOT] 💾 Saved posted_jobs.json: 2199 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:47:39.520Z] [BOT] ✅ Database saved successfully
[2026-02-01T21:47:41.547Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2970) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*