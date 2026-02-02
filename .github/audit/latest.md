# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T23:49:55.900Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T23:49:43.477Z] ========================================
[2026-02-02T23:49:43.479Z] Discord Bot Execution Log
[2026-02-02T23:49:43.479Z] Environment: GitHub Actions
[2026-02-02T23:49:43.479Z] Node Version: v20.20.0
[2026-02-02T23:49:43.479Z] ========================================
[2026-02-02T23:49:43.479Z] Environment Variables Check:
[2026-02-02T23:49:43.479Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T23:49:43.479Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T23:49:43.479Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T23:49:43.479Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T23:49:43.479Z] 
Multi-Channel Configuration:
[2026-02-02T23:49:43.479Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T23:49:43.480Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T23:49:43.480Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T23:49:43.480Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T23:49:43.480Z] 
Data Files Check:
[2026-02-02T23:49:43.481Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152037 bytes)
[2026-02-02T23:49:43.539Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11243408 bytes)
[2026-02-02T23:49:43.539Z] 
========================================
[2026-02-02T23:49:43.539Z] Starting Enhanced Discord Bot...
[2026-02-02T23:49:43.539Z] ========================================
[2026-02-02T23:49:44.106Z] [BOT] ✅ Loaded V2 database: 2231 jobs
[2026-02-02T23:49:44.709Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T23:49:44.709Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T23:49:44.710Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T23:49:44.733Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T23:49:44.733Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T23:49:44.734Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T23:49:44.734Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T23:49:44.734Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T23:49:44.753Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T23:49:44.753Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Foundations at vercel
[2026-02-02T23:49:44.753Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
[2026-02-02T23:49:44.753Z] [BOT] 🚫 Skipping blacklisted job: Load Forecasting Engineer – Engineer/Senior/Staff - Engineering Analytics & Modeling at Dominion Energy
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-02T23:49:44.753Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-02T23:49:44.754Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-02T23:49:44.755Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-02T23:49:44.755Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
[2026-02-02T23:49:44.784Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T23:49:44.822Z] [BOT] ✅ Saved pending queue: 298 total (296 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-02T23:49:44.822Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-02T23:49:44.822Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T23:49:44.824Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-02T23:49:44.826Z] [BOT] 📍 [ROUTING] "Workplace Generalist" @ figma
[2026-02-02T23:49:44.826Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T23:49:44.843Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T23:49:45.363Z] [BOT] ✅ Posted message: Workplace Generalist @ figma in #💻・tech-jobs
[2026-02-02T23:49:45.363Z] [BOT] ✅ Industry: Workplace Generalist @ figma
[2026-02-02T23:49:45.364Z] [BOT] 💾 Added channel posting: Workplace Generalist @ figma → category channel (1 total channels)
[2026-02-02T23:49:45.364Z] [BOT] 💾 BEFORE MERGE: 2232 jobs in memory (cached)
[2026-02-02T23:49:45.408Z] [BOT] ✅ Loaded V2 database: 2231 jobs
💾 DISK STATE: 2231 jobs on disk
[2026-02-02T23:49:45.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2232
[2026-02-02T23:49:45.413Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T23:49:45.413Z] [BOT] 💾 AFTER MERGE: 2232 jobs (merged disk + memory)
[2026-02-02T23:49:45.415Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-02-02T23:49:45.548Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T23:49:47.369Z] [BOT] ✅ Posted message: Workplace Generalist @ figma in #🌉・JID_739bbc0b
[2026-02-02T23:49:47.369Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T23:49:47.369Z] [BOT] 💾 Added channel posting: Workplace Generalist @ figma → location channel (2 total channels)
💾 BEFORE MERGE: 2232 jobs in memory (cached)
[2026-02-02T23:49:47.406Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-02T23:49:47.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2232
[2026-02-02T23:49:47.411Z] [BOT] 🔀 Deep merged: Workplace Generalist @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T23:49:47.411Z] [BOT] 💾 AFTER MERGE: 2232 jobs (merged disk + memory)
[2026-02-02T23:49:47.412Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-02-02T23:49:47.521Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T23:49:52.024Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-02T23:49:52.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_accdd5d2..." not found, but found as SHA256 "08977040457b4138"
[2026-02-02T23:49:52.025Z] [BOT] ⏭️  Skipping duplicate: JID_6229335a (posted within 7 days)
[2026-02-02T23:49:52.042Z] [BOT] ✅ Loaded pending queue: 298 total (296 pending, 2 enriched, 0 posted)
[2026-02-02T23:49:52.077Z] [BOT] ✅ Saved pending queue: 298 total (296 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-02T23:49:52.169Z] [BOT] 📂 Loaded 12312 existing routing entries
[2026-02-02T23:49:52.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12313
[2026-02-02T23:49:52.313Z] [BOT] Timestamp: 2026-02-02T23:49:52.260Z
[2026-02-02T23:49:52.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T23:49:52.313Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-02T23:49:52.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-02-02T23:49:52.313Z] [BOT] Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-02T23:49:52.314Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2232 jobs in memory (cached)
[2026-02-02T23:49:52.356Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-02T23:49:52.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2232
[2026-02-02T23:49:52.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T23:49:52.361Z] [BOT] 💾 AFTER MERGE: 2232 jobs (merged disk + memory)
[2026-02-02T23:49:52.362Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-02-02T23:49:52.487Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T23:49:54.511Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*