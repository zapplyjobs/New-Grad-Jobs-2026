# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T21:21:20.751Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T21:21:08.751Z] ========================================
[2026-02-03T21:21:08.753Z] Discord Bot Execution Log
[2026-02-03T21:21:08.753Z] Environment: GitHub Actions
[2026-02-03T21:21:08.753Z] Node Version: v20.20.0
[2026-02-03T21:21:08.753Z] ========================================
[2026-02-03T21:21:08.753Z] Environment Variables Check:
[2026-02-03T21:21:08.753Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T21:21:08.753Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T21:21:08.753Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T21:21:08.754Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T21:21:08.754Z] 
Multi-Channel Configuration:
[2026-02-03T21:21:08.754Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T21:21:08.754Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T21:21:08.754Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T21:21:08.754Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T21:21:08.754Z] 
Data Files Check:
[2026-02-03T21:21:08.756Z] .github/data/new_jobs.json: ✅ Exists (10 items, 120496 bytes)
[2026-02-03T21:21:08.830Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11401246 bytes)
[2026-02-03T21:21:08.830Z] 
========================================
[2026-02-03T21:21:08.830Z] Starting Enhanced Discord Bot...
[2026-02-03T21:21:08.830Z] ========================================
[2026-02-03T21:21:09.399Z] [BOT] ✅ Loaded V2 database: 2254 jobs
[2026-02-03T21:21:10.126Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T21:21:10.127Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T21:21:10.127Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T21:21:10.151Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T21:21:10.151Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:21:10.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T21:21:10.152Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T21:21:10.152Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T21:21:10.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T21:21:10.153Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T21:21:10.167Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-03T21:21:10.168Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
[2026-02-03T21:21:10.169Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-03T21:21:10.169Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
[2026-02-03T21:21:10.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-02-03T21:21:10.169Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-03T21:21:10.169Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-03T21:21:10.200Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T21:21:10.232Z] [BOT] ✅ Saved pending queue: 273 total (270 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
[2026-02-03T21:21:10.233Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T21:21:10.233Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T21:21:10.233Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T21:21:10.234Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-03T21:21:10.236Z] [BOT] 📍 [ROUTING] "Prompt Engineer, Agent Prompts & Evals" @ anthropic
[2026-02-03T21:21:10.236Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-03T21:21:10.253Z] [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T21:21:10.506Z] [BOT] ✅ Posted message: Prompt Engineer, Agent Prompts & Evals @ anthropic in #🤖・ai-jobs
[2026-02-03T21:21:10.506Z] [BOT] ✅ Industry: Prompt Engineer, Agent Prompts & Evals @ anthropic
[2026-02-03T21:21:10.508Z] [BOT] 💾 Added channel posting: Prompt Engineer, Agent Prompts & Evals @ anthropic → category channel (1 total channels)
[2026-02-03T21:21:10.508Z] [BOT] 💾 BEFORE MERGE: 2255 jobs in memory (cached)
[2026-02-03T21:21:10.554Z] [BOT] ✅ Loaded V2 database: 2254 jobs
💾 DISK STATE: 2254 jobs on disk
[2026-02-03T21:21:10.555Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2255
[2026-02-03T21:21:10.560Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T21:21:10.560Z] [BOT] 💾 AFTER MERGE: 2255 jobs (merged disk + memory)
[2026-02-03T21:21:10.562Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-02-03T21:21:10.703Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T21:21:12.422Z] [BOT] ✅ Posted message: Prompt Engineer, Agent Prompts & Evals @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T21:21:12.422Z] [BOT] 💾 Added channel posting: Prompt Engineer, Agent Prompts & Evals @ anthropic → location channel (2 total channels)
[2026-02-03T21:21:12.422Z] [BOT] 💾 BEFORE MERGE: 2255 jobs in memory (cached)
[2026-02-03T21:21:12.464Z] [BOT] ✅ Loaded V2 database: 2255 jobs
💾 DISK STATE: 2255 jobs on disk
[2026-02-03T21:21:12.465Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2255
[2026-02-03T21:21:12.469Z] [BOT] 🔀 Deep merged: Prompt Engineer, Agent Prompts & Evals @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T21:21:12.469Z] [BOT] 💾 AFTER MERGE: 2255 jobs (merged disk + memory)
[2026-02-03T21:21:12.470Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-02-03T21:21:12.586Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T21:21:17.088Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T21:21:17.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b1775ba9ace58f9f"
[2026-02-03T21:21:17.090Z] [BOT] ⏭️  Skipping duplicate: JID_fe9335c8 (posted within 7 days)
[2026-02-03T21:21:17.107Z] [BOT] ✅ Loaded pending queue: 273 total (270 pending, 3 enriched, 0 posted)
[2026-02-03T21:21:17.140Z] [BOT] ✅ Saved pending queue: 273 total (270 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-03T21:21:17.140Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T21:21:17.241Z] [BOT] 📂 Loaded 12335 existing routing entries
[2026-02-03T21:21:17.375Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12336
[2026-02-03T21:21:17.375Z] [BOT] Timestamp: 2026-02-03T21:21:17.334Z
[2026-02-03T21:21:17.375Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T21:21:17.376Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T21:21:17.376Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-03T21:21:17.376Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T21:21:17.376Z] [BOT] [STATS] Channel stats saved
[2026-02-03T21:21:17.376Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2255 jobs in memory (cached)
[2026-02-03T21:21:17.424Z] [BOT] ✅ Loaded V2 database: 2255 jobs
💾 DISK STATE: 2255 jobs on disk
[2026-02-03T21:21:17.424Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2255
[2026-02-03T21:21:17.429Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T21:21:17.429Z] [BOT] 💾 AFTER MERGE: 2255 jobs (merged disk + memory)
[2026-02-03T21:21:17.430Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-02-03T21:21:17.562Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T21:21:17.562Z] [BOT] ✅ Database saved successfully
[2026-02-03T21:21:19.589Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*