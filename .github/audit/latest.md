# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T02:47:22.533Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T02:47:10.981Z] ========================================
[2026-02-07T02:47:10.983Z] Discord Bot Execution Log
[2026-02-07T02:47:10.983Z] Environment: GitHub Actions
[2026-02-07T02:47:10.983Z] Node Version: v20.20.0
[2026-02-07T02:47:10.983Z] ========================================
[2026-02-07T02:47:10.983Z] Environment Variables Check:
[2026-02-07T02:47:10.983Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T02:47:10.983Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T02:47:10.983Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T02:47:10.983Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T02:47:10.983Z] 
Multi-Channel Configuration:
[2026-02-07T02:47:10.983Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T02:47:10.984Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T02:47:10.984Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T02:47:10.984Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T02:47:10.984Z] 
Data Files Check:
[2026-02-07T02:47:10.985Z] .github/data/new_jobs.json: ✅ Exists (10 items, 102030 bytes)
[2026-02-07T02:47:11.022Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7904161 bytes)
[2026-02-07T02:47:11.022Z] 
========================================
[2026-02-07T02:47:11.022Z] Starting Enhanced Discord Bot...
[2026-02-07T02:47:11.022Z] ========================================
[2026-02-07T02:47:11.571Z] [BOT] ✅ Loaded V2 database: 1727 jobs
[2026-02-07T02:47:12.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T02:47:12.026Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T02:47:12.027Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T02:47:12.043Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T02:47:12.043Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T02:47:12.044Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T02:47:12.044Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T02:47:12.044Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T02:47:12.045Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T02:47:12.058Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T02:47:12.058Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-07T02:47:12.059Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-07T02:47:12.060Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T02:47:12.061Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-07T02:47:12.073Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T02:47:12.094Z] [BOT] ✅ Saved pending queue: 169 total (166 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-07T02:47:12.094Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-07T02:47:12.095Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T02:47:12.097Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-07T02:47:12.098Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ figma
[2026-02-07T02:47:12.098Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T02:47:12.115Z] [BOT ERROR] (node:2888) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T02:47:12.655Z] [BOT] ✅ Posted message: Solutions Consultant @ figma in #💻・tech-jobs
[2026-02-07T02:47:12.655Z] [BOT] ✅ Industry: Solutions Consultant @ figma
[2026-02-07T02:47:12.656Z] [BOT] 💾 Added channel posting: Solutions Consultant @ figma → category channel (1 total channels)
[2026-02-07T02:47:12.657Z] [BOT] 💾 BEFORE MERGE: 1728 jobs in memory (cached)
[2026-02-07T02:47:12.682Z] [BOT] ✅ Loaded V2 database: 1727 jobs
💾 DISK STATE: 1727 jobs on disk
[2026-02-07T02:47:12.682Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1728
[2026-02-07T02:47:12.687Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1728 jobs (merged disk + memory)
[2026-02-07T02:47:12.688Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T02:47:12.693Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T02:47:12.693Z] [BOT] ✅ Archiving complete: 10 archived, 1718 active
[2026-02-07T02:47:12.774Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T02:47:14.893Z] [BOT] ✅ Posted message: Solutions Consultant @ figma in #🌉・JID_739bbc0b
[2026-02-07T02:47:14.893Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T02:47:14.893Z] [BOT] 💾 Added channel posting: Solutions Consultant @ figma → location channel (2 total channels)
[2026-02-07T02:47:14.894Z] [BOT] 💾 BEFORE MERGE: 1718 jobs in memory (cached)
[2026-02-07T02:47:14.918Z] [BOT] ✅ Loaded V2 database: 1718 jobs
💾 DISK STATE: 1718 jobs on disk
[2026-02-07T02:47:14.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1718
[2026-02-07T02:47:14.922Z] [BOT] 🔀 Deep merged: Solutions Consultant @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1718 jobs (merged disk + memory)
[2026-02-07T02:47:14.923Z] [BOT] ✅ No jobs to archive (all 1718 jobs within 7-day window)
[2026-02-07T02:47:14.999Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T02:47:19.501Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-07T02:47:19.503Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_249f7e0b..." not found, but found as SHA256 "36a22fc04a6cf412"
⏭️  Skipping duplicate: JID_010b303f (posted within 7 days)
[2026-02-07T02:47:19.512Z] [BOT] ✅ Loaded pending queue: 169 total (166 pending, 3 enriched, 0 posted)
[2026-02-07T02:47:19.528Z] [BOT] ✅ Saved pending queue: 169 total (166 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T02:47:19.641Z] [BOT] 📂 Loaded 12617 existing routing entries
[2026-02-07T02:47:19.761Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-07T02:47:19.761Z] [BOT] Total entries: 12618
   Timestamp: 2026-02-07T02:47:19.709Z
[2026-02-07T02:47:19.762Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 51
[2026-02-07T02:47:19.762Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-07T02:47:19.762Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T02:47:19.762Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-07T02:47:19.762Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-07T02:47:19.762Z] [BOT] [STATS] Channel stats saved
[2026-02-07T02:47:19.762Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1718 jobs in memory (cached)
[2026-02-07T02:47:19.787Z] [BOT] ✅ Loaded V2 database: 1718 jobs
💾 DISK STATE: 1718 jobs on disk
[2026-02-07T02:47:19.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1718
[2026-02-07T02:47:19.791Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T02:47:19.792Z] [BOT] 💾 AFTER MERGE: 1718 jobs (merged disk + memory)
[2026-02-07T02:47:19.793Z] [BOT] ✅ No jobs to archive (all 1718 jobs within 7-day window)
[2026-02-07T02:47:19.876Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T02:47:21.895Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2888) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*