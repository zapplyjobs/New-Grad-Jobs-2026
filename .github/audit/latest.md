# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T08:06:53.249Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T08:06:48.994Z] ========================================
[2026-02-03T08:06:48.996Z] Discord Bot Execution Log
[2026-02-03T08:06:48.996Z] Environment: GitHub Actions
[2026-02-03T08:06:48.996Z] Node Version: v20.20.0
[2026-02-03T08:06:48.996Z] ========================================
[2026-02-03T08:06:48.996Z] Environment Variables Check:
[2026-02-03T08:06:48.996Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T08:06:48.996Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T08:06:48.997Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T08:06:48.997Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T08:06:48.997Z] 
Multi-Channel Configuration:
[2026-02-03T08:06:48.997Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T08:06:48.997Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.997Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.997Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T08:06:48.997Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.997Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.997Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.997Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.998Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T08:06:48.998Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T08:06:48.998Z] 
Data Files Check:
[2026-02-03T08:06:48.999Z] .github/data/new_jobs.json: ✅ Exists (10 items, 128293 bytes)
[2026-02-03T08:06:49.057Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T08:06:49.057Z] 
========================================
[2026-02-03T08:06:49.057Z] Starting Enhanced Discord Bot...
[2026-02-03T08:06:49.057Z] ========================================
[2026-02-03T08:06:49.627Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T08:06:50.089Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T08:06:50.089Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T08:06:50.089Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T08:06:50.110Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T08:06:50.111Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T08:06:50.112Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T08:06:50.112Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T08:06:50.130Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T08:06:50.131Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-03T08:06:50.131Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-03T08:06:50.131Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-03T08:06:50.131Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-03T08:06:50.131Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Security at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-03T08:06:50.132Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T08:06:50.160Z] [BOT] ✅ Loaded pending queue: 323 total (273 pending, 50 enriched, 0 posted)
[2026-02-03T08:06:50.194Z] [BOT] ✅ Saved pending queue: 274 total (273 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T08:06:50.194Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T08:06:50.195Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T08:06:50.195Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T08:06:50.195Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T08:06:50.195Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T08:06:50.196Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-03T08:06:50.196Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T08:06:50.196Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T08:06:50.238Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T08:06:50.238Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T08:06:50.243Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T08:06:50.243Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T08:06:50.245Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T08:06:50.367Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-03T08:06:50.368Z] [BOT] ✅ Database saved successfully
[2026-02-03T08:06:50.368Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T08:06:52.391Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*