# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T18:57:41.741Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T18:57:30.543Z] ========================================
[2026-02-03T18:57:30.545Z] Discord Bot Execution Log
[2026-02-03T18:57:30.545Z] Environment: GitHub Actions
[2026-02-03T18:57:30.545Z] Node Version: v20.20.0
[2026-02-03T18:57:30.546Z] ========================================
[2026-02-03T18:57:30.546Z] Environment Variables Check:
[2026-02-03T18:57:30.546Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T18:57:30.546Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T18:57:30.546Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T18:57:30.546Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T18:57:30.546Z] 
Multi-Channel Configuration:
[2026-02-03T18:57:30.546Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T18:57:30.546Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T18:57:30.547Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T18:57:30.547Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T18:57:30.547Z] 
Data Files Check:
[2026-02-03T18:57:30.549Z] .github/data/new_jobs.json: ✅ Exists (10 items, 194115 bytes)
[2026-02-03T18:57:30.627Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11344780 bytes)
[2026-02-03T18:57:30.627Z] 
========================================
[2026-02-03T18:57:30.627Z] Starting Enhanced Discord Bot...
[2026-02-03T18:57:30.627Z] ========================================
[2026-02-03T18:57:31.214Z] [BOT] ✅ Loaded V2 database: 2247 jobs
[2026-02-03T18:57:31.631Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T18:57:31.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T18:57:31.631Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T18:57:31.653Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T18:57:31.654Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T18:57:31.655Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T18:57:31.655Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T18:57:31.655Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T18:57:31.676Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T18:57:31.676Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
[2026-02-03T18:57:31.676Z] [BOT] 🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-02-03T18:57:31.676Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
[2026-02-03T18:57:31.677Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-03T18:57:31.678Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-03T18:57:31.679Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-03T18:57:31.706Z] [BOT] ✅ Loaded pending queue: 331 total (281 pending, 50 enriched, 0 posted)
[2026-02-03T18:57:31.743Z] [BOT] ✅ Saved pending queue: 283 total (281 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T18:57:31.743Z] [BOT] 📋 After blacklist filter: 1 jobs (48 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T18:57:31.744Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T18:57:31.744Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T18:57:31.746Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T18:57:31.748Z] [BOT] 📍 [ROUTING] "Jr. Onboarding Associate" @ gusto
[2026-02-03T18:57:31.748Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T18:57:31.765Z] [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T18:57:31.942Z] [BOT] ✅ Posted message: Jr. Onboarding Associate @ gusto in #💻・tech-jobs
[2026-02-03T18:57:31.943Z] [BOT] ✅ Industry: Jr. Onboarding Associate @ gusto
[2026-02-03T18:57:31.944Z] [BOT] 💾 Added channel posting: Jr. Onboarding Associate @ gusto → category channel (1 total channels)
[2026-02-03T18:57:31.944Z] [BOT] 💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-03T18:57:31.989Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-03T18:57:31.990Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-03T18:57:31.995Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T18:57:31.995Z] [BOT] 💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-03T18:57:31.997Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-03T18:57:32.144Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T18:57:33.816Z] [BOT] ✅ Posted message: Jr. Onboarding Associate @ gusto in #🌉・JID_739bbc0b
[2026-02-03T18:57:33.816Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T18:57:33.816Z] [BOT] 💾 Added channel posting: Jr. Onboarding Associate @ gusto → location channel (2 total channels)
[2026-02-03T18:57:33.817Z] [BOT] 💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-03T18:57:33.854Z] [BOT] ✅ Loaded V2 database: 2248 jobs
💾 DISK STATE: 2248 jobs on disk
[2026-02-03T18:57:33.854Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-03T18:57:33.859Z] [BOT] 🔀 Deep merged: Jr. Onboarding Associate @ gusto (disk: 1 channels → merged: 2 channels)
[2026-02-03T18:57:33.859Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-03T18:57:33.860Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-03T18:57:33.971Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T18:57:38.471Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T18:57:38.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6980399e..." not found, but found as SHA256 "9a05985666b3ce07"
[2026-02-03T18:57:38.473Z] [BOT] ⏭️  Skipping duplicate: JID_53dff2d1 (posted within 7 days)
[2026-02-03T18:57:38.490Z] [BOT] ✅ Loaded pending queue: 283 total (281 pending, 2 enriched, 0 posted)
[2026-02-03T18:57:38.523Z] [BOT] ✅ Saved pending queue: 283 total (281 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-03T18:57:38.524Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T18:57:38.617Z] [BOT] 📂 Loaded 12328 existing routing entries
[2026-02-03T18:57:38.761Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12329
   Timestamp: 2026-02-03T18:57:38.707Z
[2026-02-03T18:57:38.762Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T18:57:38.762Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-03T18:57:38.762Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-02-03T18:57:38.762Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T18:57:38.763Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-03T18:57:38.807Z] [BOT] ✅ Loaded V2 database: 2248 jobs
💾 DISK STATE: 2248 jobs on disk
[2026-02-03T18:57:38.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-03T18:57:38.812Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T18:57:38.812Z] [BOT] 💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-03T18:57:38.813Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-03T18:57:38.932Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T18:57:40.956Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*