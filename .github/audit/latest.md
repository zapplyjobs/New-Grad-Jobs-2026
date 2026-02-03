# Discord Bot Execution Audit
**Timestamp:** 2026-02-03T05:11:09.920Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-03T05:11:03.919Z] ========================================
[2026-02-03T05:11:03.921Z] Discord Bot Execution Log
[2026-02-03T05:11:03.921Z] Environment: GitHub Actions
[2026-02-03T05:11:03.921Z] Node Version: v20.20.0
[2026-02-03T05:11:03.921Z] ========================================
[2026-02-03T05:11:03.921Z] Environment Variables Check:
[2026-02-03T05:11:03.921Z] DISCORD_TOKEN: ✅ Set
[2026-02-03T05:11:03.921Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-03T05:11:03.921Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-03T05:11:03.921Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-03T05:11:03.921Z] 
Multi-Channel Configuration:
[2026-02-03T05:11:03.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-03T05:11:03.922Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-03T05:11:03.922Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-03T05:11:03.922Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-03T05:11:03.922Z] 
Data Files Check:
[2026-02-03T05:11:03.924Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147935 bytes)
[2026-02-03T05:11:03.989Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11329063 bytes)
[2026-02-03T05:11:03.990Z] 
========================================
[2026-02-03T05:11:03.990Z] Starting Enhanced Discord Bot...
[2026-02-03T05:11:03.990Z] ========================================
[2026-02-03T05:11:04.562Z] [BOT] ✅ Loaded V2 database: 2244 jobs
[2026-02-03T05:11:06.239Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-03T05:11:06.239Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-03T05:11:06.240Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-03T05:11:06.261Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-03T05:11:06.261Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T05:11:06.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-03T05:11:06.263Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-03T05:11:06.282Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-03T05:11:06.282Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-03T05:11:06.282Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-03T05:11:06.282Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI — Brex Assistant at brex
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Brand Marketing Director at gusto
[2026-02-03T05:11:06.283Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Finance) at reddit
🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Large Customer Sales (Auto) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Director, Mid-Market Sales (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff Software Engineer, Storage at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Director, Mid-Market Sales (B2B Services) at reddit
🚫 Skipping blacklisted job: Internal Communications Senior Manager (Global Sales) at reddit
🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (B2B Services) at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Android Test Engineering at reddit
🚫 Skipping blacklisted job: Senior IT Support Engineer, Snoo Operations & Support (SOS) at reddit
🚫 Skipping blacklisted job: Technical Support Manager  at reddit
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Partner, Large Customer Sales (Retail Beauty) at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-03T05:11:06.284Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-03T05:11:06.285Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-03T05:11:06.313Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-03T05:11:06.347Z] [BOT] ✅ Saved pending queue: 275 total (274 pending, 1 enriched, 0 posted)
🗑️ Removed 49 blacklisted jobs from pending queue
[2026-02-03T05:11:06.347Z] [BOT] 📋 After blacklist filter: 0 jobs (49 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 49 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-03T05:11:06.348Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-03T05:11:06.348Z] [BOT] ℹ️ No routing entries to save
[2026-02-03T05:11:06.349Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e3f041af.jsonl
[2026-02-03T05:11:06.349Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-03T05:11:06.349Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-03T05:11:06.349Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-03T05:11:06.393Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-03T05:11:06.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-03T05:11:06.398Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-03T05:11:06.399Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-03T05:11:06.400Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-03T05:11:06.524Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
[2026-02-03T05:11:06.526Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-03T05:11:06.526Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-03T05:11:08.547Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*