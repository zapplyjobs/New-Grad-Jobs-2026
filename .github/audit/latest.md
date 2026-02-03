# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T00:29:14.851Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T00:29:10.015Z] ========================================
[2026-02-03T00:29:10.017Z] Discord Bot Execution Log
[2026-02-03T00:29:10.017Z] Environment: GitHub Actions
[2026-02-03T00:29:10.017Z] Node Version: v20.20.0
[2026-02-03T00:29:10.017Z] ========================================
[2026-02-03T00:29:10.017Z] Environment Variables Check:
[2026-02-03T00:29:10.017Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T00:29:10.017Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T00:29:10.017Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T00:29:10.018Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T00:29:10.018Z] 
Multi-Channel Configuration:
[2026-02-03T00:29:10.018Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T00:29:10.018Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T00:29:10.018Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T00:29:10.018Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T00:29:10.018Z] 
Data Files Check:
[2026-02-03T00:29:10.020Z] .github/data/new_jobs.json: ✅ Exists (10 items, 120885 bytes)
[2026-02-03T00:29:10.078Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11251167 bytes)
[2026-02-03T00:29:10.078Z] 
========================================
[2026-02-03T00:29:10.078Z] Starting Enhanced Discord Bot...
[2026-02-03T00:29:10.078Z] ========================================
[2026-02-03T00:29:10.644Z] [BOT] ✅ Loaded V2 database: 2232 jobs
[2026-02-03T00:29:11.230Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-03T00:29:11.231Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T00:29:11.231Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T00:29:11.254Z] [BOT] ✅ Loaded pending queue: 340 total (290 pending, 50 enriched, 0 posted)
[2026-02-03T00:29:11.254Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T00:29:11.255Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T00:29:11.255Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-03T00:29:11.255Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T00:29:11.275Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T00:29:11.275Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-03T00:29:11.275Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-03T00:29:11.275Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-03T00:29:11.276Z] [BOT] 🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-03T00:29:11.277Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Senior Analyst - Enterprise Field Tools at AbbVie
🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
🚫 Skipping blacklisted job: Contracts Manager at anthropic
🚫 Skipping blacklisted job: Corporate Communications Manager  at anthropic
[2026-02-03T00:29:11.277Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager, Digital Native Business at anthropic
🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-03T00:29:11.277Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-03T00:29:11.277Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
[2026-02-03T00:29:11.277Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
[2026-02-03T00:29:11.306Z] [BOT] ✅ Loaded pending queue: 340 total (290 pending, 50 enriched, 0 posted)
[2026-02-03T00:29:11.343Z] [BOT] ✅ Saved pending queue: 291 total (290 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T00:29:11.343Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T00:29:11.343Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T00:29:11.344Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T00:29:11.344Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T00:29:11.344Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T00:29:11.344Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-03T00:29:11.345Z] [BOT] Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T00:29:11.345Z] [BOT] 💾 BEFORE MERGE: 2232 jobs in memory (cached)
[2026-02-03T00:29:11.388Z] [BOT] ✅ Loaded V2 database: 2232 jobs
💾 DISK STATE: 2232 jobs on disk
[2026-02-03T00:29:11.389Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2232
[2026-02-03T00:29:11.394Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T00:29:11.394Z] [BOT] 💾 AFTER MERGE: 2232 jobs (merged disk + memory)
[2026-02-03T00:29:11.396Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-02-03T00:29:11.519Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T00:29:11.519Z] [BOT] ✅ Database saved successfully
[2026-02-03T00:29:11.520Z] [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T00:29:13.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*