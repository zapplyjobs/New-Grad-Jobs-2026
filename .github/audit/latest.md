# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T09:25:06.373Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T09:25:01.456Z] ========================================
[2026-02-06T09:25:01.458Z] Discord Bot Execution Log
[2026-02-06T09:25:01.458Z] Environment: GitHub Actions
[2026-02-06T09:25:01.458Z] Node Version: v20.20.0
[2026-02-06T09:25:01.458Z] ========================================
[2026-02-06T09:25:01.458Z] Environment Variables Check:
[2026-02-06T09:25:01.458Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T09:25:01.458Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T09:25:01.458Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T09:25:01.458Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T09:25:01.458Z] 
Multi-Channel Configuration:
[2026-02-06T09:25:01.458Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T09:25:01.459Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T09:25:01.459Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T09:25:01.459Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T09:25:01.459Z] 
Data Files Check:
[2026-02-06T09:25:01.461Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182059 bytes)
[2026-02-06T09:25:01.516Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10349699 bytes)
[2026-02-06T09:25:01.516Z] 
========================================
[2026-02-06T09:25:01.516Z] Starting Enhanced Discord Bot...
[2026-02-06T09:25:01.516Z] ========================================
[2026-02-06T09:25:02.109Z] [BOT] ✅ Loaded V2 database: 2116 jobs
[2026-02-06T09:25:02.636Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T09:25:02.636Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T09:25:02.636Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T09:25:02.650Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T09:25:02.651Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T09:25:02.652Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T09:25:02.652Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T09:25:02.652Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T09:25:02.653Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T09:25:02.653Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T09:25:02.654Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T09:25:02.671Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T09:25:02.671Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T09:25:02.671Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T09:25:02.671Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-06T09:25:02.671Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-06T09:25:02.672Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-06T09:25:02.673Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-06T09:25:02.673Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-06T09:25:02.673Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T09:25:02.673Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-06T09:25:02.673Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-06T09:25:02.685Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T09:25:02.709Z] [BOT] ✅ Saved pending queue: 170 total (166 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T09:25:02.709Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
[2026-02-06T09:25:02.709Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T09:25:02.710Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T09:25:02.710Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T09:25:02.710Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T09:25:02.711Z] [BOT] Total attempts: 50
[2026-02-06T09:25:02.711Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T09:25:02.711Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-06T09:25:02.711Z] [BOT] Channels used: 0
[2026-02-06T09:25:02.711Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T09:25:02.711Z] [BOT] 💾 BEFORE MERGE: 2116 jobs in memory (cached)
[2026-02-06T09:25:02.752Z] [BOT] ✅ Loaded V2 database: 2116 jobs
💾 DISK STATE: 2116 jobs on disk
[2026-02-06T09:25:02.753Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2116
[2026-02-06T09:25:02.758Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T09:25:02.758Z] [BOT] 💾 AFTER MERGE: 2116 jobs (merged disk + memory)
[2026-02-06T09:25:02.760Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T09:25:02.766Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T09:25:02.766Z] [BOT] ✅ Archiving complete: 20 archived, 2096 active
[2026-02-06T09:25:02.897Z] [BOT] 💾 Saved posted_jobs.json: 2096 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T09:25:02.897Z] [BOT] ✅ Database saved successfully
[2026-02-06T09:25:02.898Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T09:25:04.920Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*