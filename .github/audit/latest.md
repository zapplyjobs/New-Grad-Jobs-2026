# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T10:56:45.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T10:56:40.518Z] ========================================
[2026-02-03T10:56:40.520Z] Discord Bot Execution Log
[2026-02-03T10:56:40.520Z] Environment: GitHub Actions
[2026-02-03T10:56:40.520Z] Node Version: v20.20.0
[2026-02-03T10:56:40.520Z] ========================================
[2026-02-03T10:56:40.520Z] Environment Variables Check:
[2026-02-03T10:56:40.520Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T10:56:40.520Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T10:56:40.520Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T10:56:40.521Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T10:56:40.521Z] 
Multi-Channel Configuration:
[2026-02-03T10:56:40.521Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T10:56:40.521Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T10:56:40.521Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T10:56:40.521Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T10:56:40.521Z] 
Data Files Check:
[2026-02-03T10:56:40.522Z] .github/data/new_jobs.json: ✅ Exists (10 items, 127596 bytes)
[2026-02-03T10:56:40.583Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11337576 bytes)
[2026-02-03T10:56:40.583Z] 
========================================
[2026-02-03T10:56:40.583Z] Starting Enhanced Discord Bot...
[2026-02-03T10:56:40.583Z] ========================================
[2026-02-03T10:56:41.196Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-02-03T10:56:41.821Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T10:56:41.821Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T10:56:41.821Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T10:56:41.841Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T10:56:41.841Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T10:56:41.842Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T10:56:41.843Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T10:56:41.861Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T10:56:41.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-03T10:56:41.861Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
[2026-02-03T10:56:41.862Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-03T10:56:41.863Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-03T10:56:41.891Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-03T10:56:41.924Z] [BOT] ✅ Saved pending queue: 271 total (270 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (49 blacklisted)
[2026-02-03T10:56:41.925Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T10:56:41.925Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T10:56:41.925Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T10:56:41.926Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T10:56:41.926Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T10:56:41.927Z] [BOT] 💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-03T10:56:41.968Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-03T10:56:41.969Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-03T10:56:41.974Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T10:56:41.974Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-03T10:56:41.976Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-03T10:56:42.125Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T10:56:42.125Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T10:56:44.146Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*