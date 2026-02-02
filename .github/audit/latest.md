# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T00:19:33.895Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T00:19:22.564Z] ========================================
[2026-02-02T00:19:22.566Z] Discord Bot Execution Log
[2026-02-02T00:19:22.566Z] Environment: GitHub Actions
[2026-02-02T00:19:22.566Z] Node Version: v20.20.0
[2026-02-02T00:19:22.567Z] ========================================
[2026-02-02T00:19:22.567Z] Environment Variables Check:
[2026-02-02T00:19:22.567Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T00:19:22.567Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T00:19:22.567Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T00:19:22.567Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T00:19:22.567Z] 
Multi-Channel Configuration:
[2026-02-02T00:19:22.567Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T00:19:22.567Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T00:19:22.568Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T00:19:22.568Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T00:19:22.568Z] 
Data Files Check:
[2026-02-02T00:19:22.569Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173641 bytes)
[2026-02-02T00:19:22.627Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11128998 bytes)
[2026-02-02T00:19:22.627Z] 
========================================
[2026-02-02T00:19:22.627Z] Starting Enhanced Discord Bot...
[2026-02-02T00:19:22.627Z] ========================================
[2026-02-02T00:19:23.216Z] [BOT] ✅ Loaded V2 database: 2213 jobs
[2026-02-02T00:19:23.735Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T00:19:23.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T00:19:23.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T00:19:23.785Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T00:19:23.785Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:19:23.786Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T00:19:23.787Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T00:19:23.806Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T00:19:23.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Atlassian Administrator - Enterprise IT Operations at datadog
[2026-02-02T00:19:23.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Counsel, Corporate & M&A at datadog
[2026-02-02T00:19:23.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Customer Data Scientist at datadog
🚫 Skipping blacklisted job: Senior Director, Product Design at datadog
🚫 Skipping blacklisted job: Senior Enablement Manager, Emerging Technology at datadog
🚫 Skipping blacklisted job: Senior Field Enablement Manager - Leadership Development at datadog
🚫 Skipping blacklisted job: Senior FP&A Analyst - NYC at datadog
[2026-02-02T00:19:23.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, People Business Partner - NYC at datadog
[2026-02-02T00:19:23.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Cost and Usage Experience at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Database AI Optimization at datadog
🚫 Skipping blacklisted job: Senior Product Marketing Manager (AI Security) at datadog
🚫 Skipping blacklisted job: Senior Product Marketing Manager (Cloud Cost Management) at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts (West) at datadog
🚫 Skipping blacklisted job: Senior Security Engineer, Data Security at datadog
🚫 Skipping blacklisted job: Senior Security Engineer - Threat Detection Engineering at datadog
🚫 Skipping blacklisted job: Senior Software Engineer  at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - AI Code Gen - Agent Engineer at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - IDE AI Experiences - LLM Engineer at datadog
🚫 Skipping blacklisted job: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Tax Accountant - NYC at datadog
🚫 Skipping blacklisted job: Senior Technical Program Manager, Knowledge Systems at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - ML Observability at datadog
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Staff Statistics Engineer - Feature Flagging and Experimentation at datadog
🚫 Skipping blacklisted job: Senior Growth Marketing Manager, Builders at airtable
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-02T00:19:23.807Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T00:19:23.808Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Brand Marketing Director at gusto
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
[2026-02-02T00:19:23.808Z] [BOT] 🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
🚫 Skipping blacklisted job: Staff Applied Scientist - Observability Data Platform at datadog
[2026-02-02T00:19:23.854Z] [BOT] ✅ Loaded pending queue: 728 total (678 pending, 50 enriched, 0 posted)
[2026-02-02T00:19:23.934Z] [BOT] ✅ Saved pending queue: 680 total (678 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (48 blacklisted)
[2026-02-02T00:19:23.934Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-02T00:19:23.934Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-02T00:19:23.934Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T00:19:23.935Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-02T00:19:23.937Z] [BOT] 📍 [ROUTING] "Data Scientist, Product" @ anthropic
[2026-02-02T00:19:23.937Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-02T00:19:23.954Z] [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T00:19:24.086Z] [BOT] ✅ Posted message: Data Scientist, Product @ anthropic in #🤖・ai-jobs
  ✅ Industry: Data Scientist, Product @ anthropic
[2026-02-02T00:19:24.088Z] [BOT] 💾 Added channel posting: Data Scientist, Product @ anthropic → category channel (1 total channels)
[2026-02-02T00:19:24.088Z] [BOT] 💾 BEFORE MERGE: 2214 jobs in memory (cached)
[2026-02-02T00:19:24.132Z] [BOT] ✅ Loaded V2 database: 2213 jobs
💾 DISK STATE: 2213 jobs on disk
[2026-02-02T00:19:24.133Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2214
[2026-02-02T00:19:24.138Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:19:24.138Z] [BOT] 💾 AFTER MERGE: 2214 jobs (merged disk + memory)
[2026-02-02T00:19:24.140Z] [BOT] ✅ No jobs to archive (all 2214 jobs within 7-day window)
[2026-02-02T00:19:24.283Z] [BOT] 💾 Saved posted_jobs.json: 2214 active jobs
[2026-02-02T00:19:24.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-02T00:19:25.916Z] [BOT] ✅ Posted message: Data Scientist, Product @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-02T00:19:25.917Z] [BOT] 💾 Added channel posting: Data Scientist, Product @ anthropic → location channel (2 total channels)
[2026-02-02T00:19:25.917Z] [BOT] 💾 BEFORE MERGE: 2214 jobs in memory (cached)
[2026-02-02T00:19:25.955Z] [BOT] ✅ Loaded V2 database: 2214 jobs
[2026-02-02T00:19:25.956Z] [BOT] 💾 DISK STATE: 2214 jobs on disk
[2026-02-02T00:19:25.956Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2214
[2026-02-02T00:19:25.961Z] [BOT] 🔀 Deep merged: Data Scientist, Product @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-02T00:19:25.961Z] [BOT] 💾 AFTER MERGE: 2214 jobs (merged disk + memory)
[2026-02-02T00:19:25.962Z] [BOT] ✅ No jobs to archive (all 2214 jobs within 7-day window)
[2026-02-02T00:19:26.073Z] [BOT] 💾 Saved posted_jobs.json: 2214 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T00:19:30.574Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-02T00:19:30.576Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8d4f4c9e700f6592"
[2026-02-02T00:19:30.576Z] [BOT] ⏭️  Skipping duplicate: JID_97623477 (posted within 7 days)
[2026-02-02T00:19:30.613Z] [BOT] ✅ Loaded pending queue: 680 total (678 pending, 2 enriched, 0 posted)
[2026-02-02T00:19:30.681Z] [BOT] ✅ Saved pending queue: 680 total (678 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-02T00:19:30.681Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T00:19:30.777Z] [BOT] 📂 Loaded 12294 existing routing entries
[2026-02-02T00:19:30.911Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-02T00:19:30.911Z] [BOT] Total entries: 12295
   Timestamp: 2026-02-02T00:19:30.859Z
[2026-02-02T00:19:30.911Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T00:19:30.911Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-02T00:19:30.912Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-02-02T00:19:30.912Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-02T00:19:30.912Z] [BOT] [STATS] Channel stats saved
[2026-02-02T00:19:30.913Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2214 jobs in memory (cached)
[2026-02-02T00:19:30.953Z] [BOT] ✅ Loaded V2 database: 2214 jobs
💾 DISK STATE: 2214 jobs on disk
[2026-02-02T00:19:30.954Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2214
[2026-02-02T00:19:30.958Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T00:19:30.958Z] [BOT] 💾 AFTER MERGE: 2214 jobs (merged disk + memory)
[2026-02-02T00:19:30.959Z] [BOT] ✅ No jobs to archive (all 2214 jobs within 7-day window)
[2026-02-02T00:19:31.084Z] [BOT] 💾 Saved posted_jobs.json: 2214 active jobs
[2026-02-02T00:19:31.087Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T00:19:33.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*