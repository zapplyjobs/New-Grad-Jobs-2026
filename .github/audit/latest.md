# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T06:56:14.577Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T06:56:02.861Z] ========================================
[2026-02-04T06:56:02.863Z] Discord Bot Execution Log
[2026-02-04T06:56:02.863Z] Environment: GitHub Actions
[2026-02-04T06:56:02.863Z] Node Version: v20.20.0
[2026-02-04T06:56:02.863Z] ========================================
[2026-02-04T06:56:02.863Z] Environment Variables Check:
[2026-02-04T06:56:02.864Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T06:56:02.864Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T06:56:02.864Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T06:56:02.864Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T06:56:02.864Z] 
Multi-Channel Configuration:
[2026-02-04T06:56:02.864Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T06:56:02.864Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.864Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.864Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T06:56:02.864Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.865Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.865Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.865Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.865Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T06:56:02.865Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T06:56:02.865Z] 
Data Files Check:
[2026-02-04T06:56:02.866Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148965 bytes)
[2026-02-04T06:56:02.925Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T06:56:02.925Z] 
========================================
[2026-02-04T06:56:02.925Z] Starting Enhanced Discord Bot...
[2026-02-04T06:56:02.925Z] ========================================
[2026-02-04T06:56:03.525Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T06:56:04.069Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T06:56:04.070Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T06:56:04.070Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T06:56:04.092Z] [BOT] ✅ Loaded pending queue: 313 total (263 pending, 50 enriched, 0 posted)
[2026-02-04T06:56:04.092Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T06:56:04.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T06:56:04.093Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T06:56:04.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T06:56:04.094Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T06:56:04.113Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T06:56:04.113Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
[2026-02-04T06:56:04.114Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-04T06:56:04.115Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-04T06:56:04.116Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-02-04T06:56:04.144Z] [BOT] ✅ Loaded pending queue: 313 total (263 pending, 50 enriched, 0 posted)
[2026-02-04T06:56:04.188Z] [BOT] ✅ Saved pending queue: 266 total (263 pending, 3 enriched, 0 posted)
[2026-02-04T06:56:04.189Z] [BOT] 🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-04T06:56:04.189Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
[2026-02-04T06:56:04.189Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-04T06:56:04.190Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-04T06:56:04.192Z] [BOT] 📍 [ROUTING] "Software Engineer, Developer Experience" @ figma
[2026-02-04T06:56:04.192Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-04T06:56:04.210Z] [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T06:56:04.499Z] [BOT] ✅ Posted message: Software Engineer, Developer Experience @ figma in #💻・tech-jobs
[2026-02-04T06:56:04.500Z] [BOT] ✅ Industry: Software Engineer, Developer Experience @ figma
[2026-02-04T06:56:04.501Z] [BOT] 💾 Added channel posting: Software Engineer, Developer Experience @ figma → category channel (1 total channels)
[2026-02-04T06:56:04.501Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T06:56:04.545Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T06:56:04.545Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T06:56:04.550Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T06:56:04.551Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T06:56:04.552Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T06:56:04.690Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T06:56:06.522Z] [BOT] ✅ Posted message: Software Engineer, Developer Experience @ figma in #🌉・JID_739bbc0b
[2026-02-04T06:56:06.522Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-04T06:56:06.523Z] [BOT] 💾 Added channel posting: Software Engineer, Developer Experience @ figma → location channel (2 total channels)
[2026-02-04T06:56:06.523Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T06:56:06.561Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-04T06:56:06.561Z] [BOT] 💾 DISK STATE: 2266 jobs on disk
[2026-02-04T06:56:06.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T06:56:06.566Z] [BOT] 🔀 Deep merged: Software Engineer, Developer Experience @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-04T06:56:06.567Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T06:56:06.568Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T06:56:06.677Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T06:56:11.178Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-04T06:56:11.180Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1dfd80a9..." not found, but found as SHA256 "4eea1f2146c4cad3"
⏭️  Skipping duplicate: JID_ef671051 (posted within 7 days)
[2026-02-04T06:56:11.195Z] [BOT] ✅ Loaded pending queue: 266 total (263 pending, 3 enriched, 0 posted)
[2026-02-04T06:56:11.230Z] [BOT] ✅ Saved pending queue: 266 total (263 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-04T06:56:11.230Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T06:56:11.322Z] [BOT] 📂 Loaded 12346 existing routing entries
[2026-02-04T06:56:11.464Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-04T06:56:11.464Z] [BOT] Total entries: 12347
   Timestamp: 2026-02-04T06:56:11.412Z
[2026-02-04T06:56:11.465Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T06:56:11.465Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-04T06:56:11.465Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-04T06:56:11.466Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T06:56:11.510Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-04T06:56:11.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T06:56:11.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T06:56:11.515Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T06:56:11.516Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T06:56:11.638Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T06:56:13.662Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*