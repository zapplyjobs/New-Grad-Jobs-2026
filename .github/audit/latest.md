# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T17:26:04.729Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T17:25:59.856Z] ========================================
[2026-02-06T17:25:59.857Z] Discord Bot Execution Log
[2026-02-06T17:25:59.858Z] Environment: GitHub Actions
[2026-02-06T17:25:59.858Z] Node Version: v20.20.0
[2026-02-06T17:25:59.858Z] ========================================
[2026-02-06T17:25:59.858Z] Environment Variables Check:
[2026-02-06T17:25:59.858Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T17:25:59.858Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T17:25:59.858Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T17:25:59.858Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T17:25:59.858Z] 
Multi-Channel Configuration:
[2026-02-06T17:25:59.858Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T17:25:59.858Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.858Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.858Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T17:25:59.858Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.858Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.858Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.859Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.859Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T17:25:59.859Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T17:25:59.859Z] 
Data Files Check:
[2026-02-06T17:25:59.860Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167303 bytes)
[2026-02-06T17:25:59.922Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9302351 bytes)
[2026-02-06T17:25:59.922Z] 
========================================
[2026-02-06T17:25:59.922Z] Starting Enhanced Discord Bot...
[2026-02-06T17:25:59.922Z] ========================================
[2026-02-06T17:26:00.449Z] [BOT] ✅ Loaded V2 database: 1943 jobs
[2026-02-06T17:26:01.119Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T17:26:01.120Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T17:26:01.120Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T17:26:01.144Z] [BOT] ✅ Loaded pending queue: 232 total (182 pending, 50 enriched, 0 posted)
[2026-02-06T17:26:01.145Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T17:26:01.146Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T17:26:01.146Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T17:26:01.146Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T17:26:01.146Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T17:26:01.147Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T17:26:01.158Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-06T17:26:01.159Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-06T17:26:01.160Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-06T17:26:01.190Z] [BOT] ✅ Loaded pending queue: 232 total (182 pending, 50 enriched, 0 posted)
[2026-02-06T17:26:01.213Z] [BOT] ✅ Saved pending queue: 184 total (182 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-06T17:26:01.213Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T17:26:01.214Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T17:26:01.214Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T17:26:01.214Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
[2026-02-06T17:26:01.214Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T17:26:01.215Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T17:26:01.215Z] [BOT] 💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-06T17:26:01.269Z] [BOT] ✅ Loaded V2 database: 1943 jobs
💾 DISK STATE: 1943 jobs on disk
[2026-02-06T17:26:01.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-06T17:26:01.274Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T17:26:01.274Z] [BOT] 💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-06T17:26:01.276Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T17:26:01.281Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T17:26:01.281Z] [BOT] ✅ Archiving complete: 10 archived, 1933 active
[2026-02-06T17:26:01.402Z] [BOT] 💾 Saved posted_jobs.json: 1933 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T17:26:01.402Z] [BOT] ✅ Database saved successfully
[2026-02-06T17:26:01.403Z] [BOT ERROR] (node:2812) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T17:26:03.419Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2812) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*