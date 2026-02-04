# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T08:19:49.603Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T08:19:44.668Z] ========================================
[2026-02-04T08:19:44.670Z] Discord Bot Execution Log
[2026-02-04T08:19:44.670Z] Environment: GitHub Actions
[2026-02-04T08:19:44.670Z] Node Version: v20.20.0
[2026-02-04T08:19:44.670Z] ========================================
[2026-02-04T08:19:44.670Z] Environment Variables Check:
[2026-02-04T08:19:44.670Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T08:19:44.670Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T08:19:44.670Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T08:19:44.670Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T08:19:44.670Z] 
Multi-Channel Configuration:
[2026-02-04T08:19:44.671Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T08:19:44.671Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T08:19:44.671Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T08:19:44.671Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T08:19:44.671Z] 
Data Files Check:
[2026-02-04T08:19:44.672Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158810 bytes)
[2026-02-04T08:19:44.732Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11480581 bytes)
[2026-02-04T08:19:44.733Z] 
========================================
[2026-02-04T08:19:44.733Z] Starting Enhanced Discord Bot...
[2026-02-04T08:19:44.733Z] ========================================
[2026-02-04T08:19:45.308Z] [BOT] ✅ Loaded V2 database: 2266 jobs
[2026-02-04T08:19:45.818Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T08:19:45.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T08:19:45.819Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T08:19:45.840Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T08:19:45.840Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:19:45.841Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T08:19:45.841Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T08:19:45.842Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T08:19:45.842Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T08:19:45.860Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T08:19:45.860Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Product Design Manager, Engagement at discord
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-04T08:19:45.861Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-04T08:19:45.862Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-04T08:19:45.862Z] [BOT] 🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-04T08:19:45.862Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-04T08:19:45.862Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
[2026-02-04T08:19:45.862Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
[2026-02-04T08:19:45.889Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T08:19:45.921Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
[2026-02-04T08:19:45.922Z] [BOT] 🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
[2026-02-04T08:19:45.922Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T08:19:45.922Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T08:19:45.922Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T08:19:45.923Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T08:19:45.923Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T08:19:45.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-04T08:19:45.923Z] [BOT] Channels used: 0
[2026-02-04T08:19:45.923Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T08:19:45.924Z] [BOT] 💾 BEFORE MERGE: 2266 jobs in memory (cached)
[2026-02-04T08:19:45.966Z] [BOT] ✅ Loaded V2 database: 2266 jobs
💾 DISK STATE: 2266 jobs on disk
[2026-02-04T08:19:45.966Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2266
[2026-02-04T08:19:45.971Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T08:19:45.971Z] [BOT] 💾 AFTER MERGE: 2266 jobs (merged disk + memory)
[2026-02-04T08:19:45.973Z] [BOT] ✅ No jobs to archive (all 2266 jobs within 7-day window)
[2026-02-04T08:19:46.114Z] [BOT] 💾 Saved posted_jobs.json: 2266 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T08:19:46.114Z] [BOT] ✅ Database saved successfully
[2026-02-04T08:19:46.114Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T08:19:48.137Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*