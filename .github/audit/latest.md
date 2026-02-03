# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T23:52:38.788Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T23:52:26.834Z] ========================================
[2026-02-03T23:52:26.835Z] Discord Bot Execution Log
[2026-02-03T23:52:26.836Z] Environment: GitHub Actions
[2026-02-03T23:52:26.836Z] Node Version: v20.20.0
[2026-02-03T23:52:26.836Z] ========================================
[2026-02-03T23:52:26.836Z] Environment Variables Check:
[2026-02-03T23:52:26.836Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T23:52:26.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T23:52:26.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T23:52:26.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T23:52:26.836Z] 
Multi-Channel Configuration:
[2026-02-03T23:52:26.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T23:52:26.836Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.836Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T23:52:26.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T23:52:26.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T23:52:26.837Z] 
Data Files Check:
[2026-02-03T23:52:26.838Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200452 bytes)
[2026-02-03T23:52:26.895Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11427711 bytes)
[2026-02-03T23:52:26.895Z] 
========================================
[2026-02-03T23:52:26.895Z] Starting Enhanced Discord Bot...
[2026-02-03T23:52:26.895Z] ========================================
[2026-02-03T23:52:27.467Z] [BOT] ✅ Loaded V2 database: 2259 jobs
[2026-02-03T23:52:27.858Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T23:52:27.859Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T23:52:27.859Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T23:52:27.880Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T23:52:27.880Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T23:52:27.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T23:52:27.882Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T23:52:27.882Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T23:52:27.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-03T23:52:27.882Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-03T23:52:27.901Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-03T23:52:27.901Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T23:52:27.901Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
[2026-02-03T23:52:27.901Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployment) at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-03T23:52:27.902Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-03T23:52:27.903Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-03T23:52:27.903Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-03T23:52:27.903Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-03T23:52:27.931Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T23:52:27.965Z] [BOT] ✅ Saved pending queue: 273 total (270 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
[2026-02-03T23:52:27.965Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T23:52:27.966Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T23:52:27.966Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T23:52:27.968Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T23:52:27.969Z] [BOT] 📍 [ROUTING] "Technical Writer" @ datadog
[2026-02-03T23:52:27.970Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T23:52:27.987Z] [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T23:52:28.836Z] [BOT] ✅ Posted message: Technical Writer @ datadog in #💻・tech-jobs
  ✅ Industry: Technical Writer @ datadog
[2026-02-03T23:52:28.838Z] [BOT] 💾 Added channel posting: Technical Writer @ datadog → category channel (1 total channels)
[2026-02-03T23:52:28.838Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-03T23:52:28.882Z] [BOT] ✅ Loaded V2 database: 2259 jobs
💾 DISK STATE: 2259 jobs on disk
[2026-02-03T23:52:28.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-03T23:52:28.887Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T23:52:28.887Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-03T23:52:28.889Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-03T23:52:29.010Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T23:52:30.698Z] [BOT] ✅ Posted message: Technical Writer @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-03T23:52:30.699Z] [BOT] 💾 Added channel posting: Technical Writer @ datadog → location channel (2 total channels)
[2026-02-03T23:52:30.699Z] [BOT] 💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-03T23:52:30.737Z] [BOT] ✅ Loaded V2 database: 2260 jobs
[2026-02-03T23:52:30.737Z] [BOT] 💾 DISK STATE: 2260 jobs on disk
[2026-02-03T23:52:30.737Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-03T23:52:30.742Z] [BOT] 🔀 Deep merged: Technical Writer @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-03T23:52:30.742Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-03T23:52:30.744Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-03T23:52:30.852Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T23:52:35.352Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T23:52:35.354Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_02237c8e..." not found, but found as SHA256 "51b1e4385d5c4e6a"
⏭️  Skipping duplicate: JID_02237c8e (posted within 7 days)
[2026-02-03T23:52:35.370Z] [BOT] ✅ Loaded pending queue: 273 total (270 pending, 3 enriched, 0 posted)
[2026-02-03T23:52:35.404Z] [BOT] ✅ Saved pending queue: 273 total (270 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-03T23:52:35.404Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T23:52:35.495Z] [BOT] 📂 Loaded 12340 existing routing entries
[2026-02-03T23:52:35.633Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12341
   Timestamp: 2026-02-03T23:52:35.581Z
[2026-02-03T23:52:35.634Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T23:52:35.634Z] [BOT] Total attempts: 51
[2026-02-03T23:52:35.634Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T23:52:35.634Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-03T23:52:35.635Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2260 jobs in memory (cached)
[2026-02-03T23:52:35.678Z] [BOT] ✅ Loaded V2 database: 2260 jobs
💾 DISK STATE: 2260 jobs on disk
[2026-02-03T23:52:35.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2260
[2026-02-03T23:52:35.683Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T23:52:35.683Z] [BOT] 💾 AFTER MERGE: 2260 jobs (merged disk + memory)
[2026-02-03T23:52:35.684Z] [BOT] ✅ No jobs to archive (all 2260 jobs within 7-day window)
[2026-02-03T23:52:35.807Z] [BOT] 💾 Saved posted_jobs.json: 2260 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T23:52:37.831Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*