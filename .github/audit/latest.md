# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T20:38:22.796Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T20:38:18.695Z] ========================================
[2026-02-06T20:38:18.697Z] Discord Bot Execution Log
[2026-02-06T20:38:18.697Z] Environment: GitHub Actions
[2026-02-06T20:38:18.697Z] Node Version: v20.20.0
[2026-02-06T20:38:18.697Z] ========================================
[2026-02-06T20:38:18.697Z] Environment Variables Check:
[2026-02-06T20:38:18.697Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T20:38:18.697Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T20:38:18.697Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T20:38:18.697Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T20:38:18.697Z] 
Multi-Channel Configuration:
[2026-02-06T20:38:18.698Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T20:38:18.698Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T20:38:18.698Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T20:38:18.698Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T20:38:18.698Z] 
Data Files Check:
[2026-02-06T20:38:18.700Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170205 bytes)
[2026-02-06T20:38:18.749Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8852485 bytes)
[2026-02-06T20:38:18.749Z] 
========================================
[2026-02-06T20:38:18.749Z] Starting Enhanced Discord Bot...
[2026-02-06T20:38:18.749Z] ========================================
[2026-02-06T20:38:19.318Z] [BOT] ✅ Loaded V2 database: 1880 jobs
[2026-02-06T20:38:19.769Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T20:38:19.769Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T20:38:19.770Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T20:38:19.787Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T20:38:19.787Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:38:19.788Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T20:38:19.788Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T20:38:19.789Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T20:38:19.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T20:38:19.789Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T20:38:19.805Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T20:38:19.805Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-06T20:38:19.805Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
[2026-02-06T20:38:19.806Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-06T20:38:19.807Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T20:38:19.807Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T20:38:19.807Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-06T20:38:19.807Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T20:38:19.825Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-06T20:38:19.849Z] [BOT] ✅ Saved pending queue: 168 total (166 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-06T20:38:19.849Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T20:38:19.850Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T20:38:19.850Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T20:38:19.850Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T20:38:19.850Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T20:38:19.851Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-06T20:38:19.851Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T20:38:19.851Z] [BOT] 💾 BEFORE MERGE: 1880 jobs in memory (cached)
[2026-02-06T20:38:19.887Z] [BOT] ✅ Loaded V2 database: 1880 jobs
💾 DISK STATE: 1880 jobs on disk
[2026-02-06T20:38:19.887Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1880
[2026-02-06T20:38:19.895Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T20:38:19.896Z] [BOT] 💾 AFTER MERGE: 1880 jobs (merged disk + memory)
[2026-02-06T20:38:19.897Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T20:38:19.903Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-02-06T20:38:19.903Z] [BOT] ✅ Archiving complete: 6 archived, 1874 active
[2026-02-06T20:38:20.013Z] [BOT] 💾 Saved posted_jobs.json: 1874 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T20:38:20.014Z] [BOT] ✅ Database saved successfully
[2026-02-06T20:38:20.014Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T20:38:22.035Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*