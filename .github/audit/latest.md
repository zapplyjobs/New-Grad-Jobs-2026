# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T05:45:23.527Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T05:45:18.646Z] ========================================
[2026-02-03T05:45:18.648Z] Discord Bot Execution Log
[2026-02-03T05:45:18.648Z] Environment: GitHub Actions
[2026-02-03T05:45:18.648Z] Node Version: v20.20.0
[2026-02-03T05:45:18.648Z] ========================================
[2026-02-03T05:45:18.648Z] Environment Variables Check:
[2026-02-03T05:45:18.648Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T05:45:18.649Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T05:45:18.649Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T05:45:18.649Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T05:45:18.649Z] 
Multi-Channel Configuration:
[2026-02-03T05:45:18.651Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T05:45:18.651Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T05:45:18.651Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:45:18.651Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T05:45:18.651Z] 
Data Files Check:
[2026-02-03T05:45:18.653Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121850 bytes)
[2026-02-03T05:45:18.726Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T05:45:18.726Z] 
========================================
[2026-02-03T05:45:18.726Z] Starting Enhanced Discord Bot...
[2026-02-03T05:45:18.726Z] ========================================
[2026-02-03T05:45:19.293Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T05:45:19.812Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T05:45:19.813Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T05:45:19.813Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T05:45:19.834Z] [BOT] ✅ Loaded pending queue: 322 total (272 pending, 50 enriched, 0 posted)
[2026-02-03T05:45:19.834Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T05:45:19.835Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T05:45:19.836Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T05:45:19.836Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T05:45:19.856Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T05:45:19.856Z] [BOT] 🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-03T05:45:19.857Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
[2026-02-03T05:45:19.857Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-03T05:45:19.857Z] [BOT] 🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-03T05:45:19.857Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-03T05:45:19.858Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-03T05:45:19.885Z] [BOT] ✅ Loaded pending queue: 322 total (272 pending, 50 enriched, 0 posted)
[2026-02-03T05:45:19.919Z] [BOT] ✅ Saved pending queue: 273 total (272 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T05:45:19.919Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T05:45:19.920Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T05:45:19.920Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T05:45:19.920Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T05:45:19.921Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T05:45:19.921Z] [BOT] Channels used: 0
[2026-02-03T05:45:19.921Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T05:45:19.921Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T05:45:19.969Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T05:45:19.970Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T05:45:19.975Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T05:45:19.975Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T05:45:19.977Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T05:45:20.112Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T05:45:20.112Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T05:45:22.132Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*