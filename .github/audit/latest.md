# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T11:38:18.221Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T11:38:14.024Z] ========================================
[2026-02-04T11:38:14.026Z] Discord Bot Execution Log
[2026-02-04T11:38:14.026Z] Environment: GitHub Actions
[2026-02-04T11:38:14.026Z] Node Version: v20.20.0
[2026-02-04T11:38:14.026Z] ========================================
[2026-02-04T11:38:14.026Z] Environment Variables Check:
[2026-02-04T11:38:14.026Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T11:38:14.027Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T11:38:14.027Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T11:38:14.027Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T11:38:14.027Z] 
Multi-Channel Configuration:
[2026-02-04T11:38:14.027Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T11:38:14.027Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.027Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.027Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T11:38:14.027Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.027Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.027Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.028Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.028Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T11:38:14.028Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T11:38:14.028Z] 
Data Files Check:
[2026-02-04T11:38:14.029Z] .github/data/new_jobs.json: ✅ Exists (10 items, 192403 bytes)
[2026-02-04T11:38:14.090Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11494746 bytes)
[2026-02-04T11:38:14.090Z] 
========================================
[2026-02-04T11:38:14.090Z] Starting Enhanced Discord Bot...
[2026-02-04T11:38:14.090Z] ========================================
[2026-02-04T11:38:14.663Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-04T11:38:15.075Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T11:38:15.075Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T11:38:15.076Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T11:38:15.098Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:38:15.099Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:38:15.100Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T11:38:15.100Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T11:38:15.100Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T11:38:15.100Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T11:38:15.101Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T11:38:15.119Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T11:38:15.119Z] [BOT] 🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Manager, National Security Policy at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Research Product Manager at anthropic
🚫 Skipping blacklisted job: Transaction Manager at anthropic
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Senior Product Manager, Cloud Network Monitoring at datadog
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
🚫 Skipping blacklisted job: Directors, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-04T11:38:15.120Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-04T11:38:15.121Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
[2026-02-04T11:38:15.150Z] [BOT] ✅ Loaded pending queue: 311 total (261 pending, 50 enriched, 0 posted)
[2026-02-04T11:38:15.185Z] [BOT] ✅ Saved pending queue: 263 total (261 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-04T11:38:15.185Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T11:38:15.186Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T11:38:15.186Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T11:38:15.186Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T11:38:15.187Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T11:38:15.187Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T11:38:15.187Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T11:38:15.187Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-04T11:38:15.231Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-04T11:38:15.231Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-04T11:38:15.237Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T11:38:15.237Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-04T11:38:15.238Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-04T11:38:15.374Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T11:38:15.374Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T11:38:17.396Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*