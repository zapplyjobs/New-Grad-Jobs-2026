# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T01:43:36.975Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T01:43:25.044Z] ========================================
[2026-02-03T01:43:25.046Z] Discord Bot Execution Log
[2026-02-03T01:43:25.046Z] Environment: GitHub Actions
[2026-02-03T01:43:25.046Z] Node Version: v20.20.0
[2026-02-03T01:43:25.046Z] ========================================
[2026-02-03T01:43:25.046Z] Environment Variables Check:
[2026-02-03T01:43:25.046Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T01:43:25.046Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T01:43:25.046Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T01:43:25.046Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T01:43:25.046Z] 
Multi-Channel Configuration:
[2026-02-03T01:43:25.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T01:43:25.047Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T01:43:25.047Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T01:43:25.047Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T01:43:25.047Z] 
Data Files Check:
[2026-02-03T01:43:25.048Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151039 bytes)
[2026-02-03T01:43:25.107Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11312484 bytes)
[2026-02-03T01:43:25.108Z] 
========================================
[2026-02-03T01:43:25.108Z] Starting Enhanced Discord Bot...
[2026-02-03T01:43:25.108Z] ========================================
[2026-02-03T01:43:25.696Z] [BOT] ✅ Loaded V2 database: 2241 jobs
[2026-02-03T01:43:26.503Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T01:43:26.503Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T01:43:26.503Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T01:43:26.525Z] [BOT] ✅ Loaded pending queue: 330 total (280 pending, 50 enriched, 0 posted)
[2026-02-03T01:43:26.526Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T01:43:26.527Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T01:43:26.527Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T01:43:26.547Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T01:43:26.547Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-02-03T01:43:26.547Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-02-03T01:43:26.547Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
[2026-02-03T01:43:26.548Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-02-03T01:43:26.549Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
[2026-02-03T01:43:26.549Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-02-03T01:43:26.549Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-02-03T01:43:26.579Z] [BOT] ✅ Loaded pending queue: 330 total (280 pending, 50 enriched, 0 posted)
[2026-02-03T01:43:26.614Z] [BOT] ✅ Saved pending queue: 282 total (280 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-03T01:43:26.614Z] [BOT] 📋 After blacklist filter: 1 jobs (48 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-03T01:43:26.614Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-03T01:43:26.614Z] [BOT] ⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-03T01:43:26.617Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-03T01:43:26.618Z] [BOT] 📍 [ROUTING] "Account Executive, Bridge" @ stripe
[2026-02-03T01:43:26.618Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-03T01:43:26.635Z] [BOT ERROR] (node:2637) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T01:43:26.859Z] [BOT] ✅ Posted message: Account Executive, Bridge @ stripe in #💻・tech-jobs
[2026-02-03T01:43:26.859Z] [BOT] ✅ Industry: Account Executive, Bridge @ stripe
[2026-02-03T01:43:26.860Z] [BOT] 💾 Added channel posting: Account Executive, Bridge @ stripe → category channel (1 total channels)
[2026-02-03T01:43:26.860Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-03T01:43:26.903Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-03T01:43:26.904Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-03T01:43:26.909Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:43:26.909Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-03T01:43:26.911Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-03T01:43:27.036Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:43:28.839Z] [BOT] ✅ Posted message: Account Executive, Bridge @ stripe in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-03T01:43:28.840Z] [BOT] 💾 Added channel posting: Account Executive, Bridge @ stripe → location channel (2 total channels)
[2026-02-03T01:43:28.840Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-03T01:43:28.877Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-03T01:43:28.878Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-03T01:43:28.882Z] [BOT] 🔀 Deep merged: Account Executive, Bridge @ stripe (disk: 1 channels → merged: 2 channels)
[2026-02-03T01:43:28.882Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-03T01:43:28.884Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-03T01:43:28.991Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T01:43:33.492Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-03T01:43:33.494Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bcb83e1f..." not found, but found as SHA256 "b716f229c5852279"
[2026-02-03T01:43:33.494Z] [BOT] ⏭️  Skipping duplicate: JID_bcb83e1f (posted within 7 days)
[2026-02-03T01:43:33.510Z] [BOT] ✅ Loaded pending queue: 282 total (280 pending, 2 enriched, 0 posted)
[2026-02-03T01:43:33.543Z] [BOT] ✅ Saved pending queue: 282 total (280 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-03T01:43:33.543Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T01:43:33.636Z] [BOT] 📂 Loaded 12322 existing routing entries
[2026-02-03T01:43:33.777Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-03T01:43:33.777Z] [BOT] Total entries: 12323
   Timestamp: 2026-02-03T01:43:33.725Z
[2026-02-03T01:43:33.778Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T01:43:33.778Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-03T01:43:33.778Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-03T01:43:33.778Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-02-03T01:43:33.778Z] [BOT] 2. #🌉・JID_739bbc0b: 1 posts
[2026-02-03T01:43:33.779Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-03T01:43:33.824Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-03T01:43:33.825Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-03T01:43:33.829Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T01:43:33.830Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-03T01:43:33.831Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-03T01:43:33.968Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T01:43:35.994Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2637) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*