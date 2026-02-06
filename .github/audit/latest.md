# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T03:45:23.433Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T03:45:11.116Z] ========================================
[2026-02-06T03:45:11.118Z] Discord Bot Execution Log
[2026-02-06T03:45:11.118Z] Environment: GitHub Actions
[2026-02-06T03:45:11.118Z] Node Version: v20.20.0
[2026-02-06T03:45:11.118Z] ========================================
[2026-02-06T03:45:11.118Z] Environment Variables Check:
[2026-02-06T03:45:11.118Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T03:45:11.119Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T03:45:11.119Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T03:45:11.119Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T03:45:11.119Z] 
Multi-Channel Configuration:
[2026-02-06T03:45:11.119Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T03:45:11.119Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.119Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.119Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T03:45:11.119Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.119Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.119Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.119Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.120Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T03:45:11.120Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T03:45:11.120Z] 
Data Files Check:
[2026-02-06T03:45:11.121Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166764 bytes)
[2026-02-06T03:45:11.177Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11104402 bytes)
[2026-02-06T03:45:11.177Z] 
========================================
[2026-02-06T03:45:11.177Z] Starting Enhanced Discord Bot...
[2026-02-06T03:45:11.177Z] ========================================
[2026-02-06T03:45:11.744Z] [BOT] ✅ Loaded V2 database: 2209 jobs
[2026-02-06T03:45:12.276Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T03:45:12.276Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T03:45:12.276Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T03:45:12.290Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T03:45:12.291Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T03:45:12.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T03:45:12.292Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T03:45:12.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T03:45:12.293Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T03:45:12.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T03:45:12.294Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T03:45:12.294Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T03:45:12.294Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T03:45:12.294Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T03:45:12.294Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T03:45:12.311Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T03:45:12.311Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-06T03:45:12.312Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-06T03:45:12.313Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T03:45:12.313Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-06T03:45:12.313Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-06T03:45:12.313Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-06T03:45:12.330Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T03:45:12.351Z] [BOT] ✅ Saved pending queue: 180 total (173 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T03:45:12.352Z] [BOT] 📋 After blacklist filter: 1 jobs (43 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T03:45:12.352Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T03:45:12.352Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T03:45:12.353Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T03:45:12.354Z] [BOT] 📍 [ROUTING] "2026 Summer Intern - Statistician and Data Scientist" @ ORG_9554f9b4
[2026-02-06T03:45:12.354Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T03:45:12.375Z] [BOT ERROR] (node:2600) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T03:45:13.105Z] [BOT] ✅ Posted message: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4 in #🤖・ai-jobs
[2026-02-06T03:45:13.105Z] [BOT] ✅ Industry: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4
[2026-02-06T03:45:13.106Z] [BOT] 💾 Added channel posting: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4 → category channel (1 total channels)
[2026-02-06T03:45:13.107Z] [BOT] 💾 BEFORE MERGE: 2210 jobs in memory (cached)
[2026-02-06T03:45:13.149Z] [BOT] ✅ Loaded V2 database: 2209 jobs
💾 DISK STATE: 2209 jobs on disk
[2026-02-06T03:45:13.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2210
[2026-02-06T03:45:13.155Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T03:45:13.155Z] [BOT] 💾 AFTER MERGE: 2210 jobs (merged disk + memory)
[2026-02-06T03:45:13.157Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T03:45:13.162Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T03:45:13.162Z] [BOT] ✅ Archiving complete: 10 archived, 2200 active
[2026-02-06T03:45:13.286Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T03:45:14.969Z] [BOT] ✅ Posted message: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T03:45:14.970Z] [BOT] 💾 Added channel posting: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4 → location channel (2 total channels)
[2026-02-06T03:45:14.970Z] [BOT] 💾 BEFORE MERGE: 2200 jobs in memory (cached)
[2026-02-06T03:45:15.016Z] [BOT] ✅ Loaded V2 database: 2200 jobs
[2026-02-06T03:45:15.016Z] [BOT] 💾 DISK STATE: 2200 jobs on disk
[2026-02-06T03:45:15.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2200
[2026-02-06T03:45:15.022Z] [BOT] 🔀 Deep merged: 2026 Summer Intern - Statistician and Data Scientist @ ORG_9554f9b4 (disk: 1 channels → merged: 2 channels)
[2026-02-06T03:45:15.022Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2200 jobs (merged disk + memory)
[2026-02-06T03:45:15.023Z] [BOT] ✅ No jobs to archive (all 2200 jobs within 7-day window)
[2026-02-06T03:45:15.132Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T03:45:19.633Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T03:45:19.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_53e8bf4e..." not found, but found as SHA256 "962071ab256933a6"
[2026-02-06T03:45:19.635Z] [BOT] ⏭️  Skipping duplicate: JID_603f7ce1 (posted within 7 days)
[2026-02-06T03:45:19.644Z] [BOT] ✅ Loaded pending queue: 180 total (173 pending, 7 enriched, 0 posted)
[2026-02-06T03:45:19.662Z] [BOT] ✅ Saved pending queue: 180 total (173 pending, 6 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T03:45:19.663Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T03:45:19.755Z] [BOT] 📂 Loaded 12490 existing routing entries
[2026-02-06T03:45:19.895Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12491
   Timestamp: 2026-02-06T03:45:19.842Z
📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2200 jobs in memory (cached)
[2026-02-06T03:45:19.957Z] [BOT] ✅ Loaded V2 database: 2200 jobs
💾 DISK STATE: 2200 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2200
[2026-02-06T03:45:19.963Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T03:45:19.963Z] [BOT] 💾 AFTER MERGE: 2200 jobs (merged disk + memory)
[2026-02-06T03:45:19.965Z] [BOT] ✅ No jobs to archive (all 2200 jobs within 7-day window)
[2026-02-06T03:45:20.077Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T03:45:22.098Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2600) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*