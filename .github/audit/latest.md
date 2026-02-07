# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T03:43:18.272Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T03:43:13.627Z] ========================================
[2026-02-07T03:43:13.628Z] Discord Bot Execution Log
[2026-02-07T03:43:13.628Z] Environment: GitHub Actions
[2026-02-07T03:43:13.629Z] Node Version: v20.20.0
[2026-02-07T03:43:13.629Z] ========================================
[2026-02-07T03:43:13.629Z] Environment Variables Check:
[2026-02-07T03:43:13.629Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T03:43:13.629Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T03:43:13.629Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T03:43:13.629Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T03:43:13.629Z] 
Multi-Channel Configuration:
[2026-02-07T03:43:13.629Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T03:43:13.629Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T03:43:13.629Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T03:43:13.629Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T03:43:13.629Z] 
Data Files Check:
[2026-02-07T03:43:13.631Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166555 bytes)
[2026-02-07T03:43:13.680Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7846041 bytes)
[2026-02-07T03:43:13.680Z] 
========================================
[2026-02-07T03:43:13.680Z] Starting Enhanced Discord Bot...
[2026-02-07T03:43:13.680Z] ========================================
[2026-02-07T03:43:14.195Z] [BOT] ✅ Loaded V2 database: 1718 jobs
[2026-02-07T03:43:14.906Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T03:43:14.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T03:43:14.907Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T03:43:14.929Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T03:43:14.929Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T03:43:14.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T03:43:14.931Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T03:43:14.931Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T03:43:14.931Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T03:43:14.941Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T03:43:14.942Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
[2026-02-07T03:43:14.943Z] [BOT] 🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
[2026-02-07T03:43:14.943Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-07T03:43:14.943Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-07T03:43:14.960Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T03:43:14.981Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T03:43:14.981Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T03:43:14.981Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T03:43:14.981Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T03:43:14.982Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T03:43:14.982Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T03:43:14.982Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T03:43:14.982Z] [BOT] 💾 BEFORE MERGE: 1718 jobs in memory (cached)
[2026-02-07T03:43:15.034Z] [BOT] ✅ Loaded V2 database: 1718 jobs
💾 DISK STATE: 1718 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1718
[2026-02-07T03:43:15.037Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T03:43:15.038Z] [BOT] 💾 AFTER MERGE: 1718 jobs (merged disk + memory)
[2026-02-07T03:43:15.039Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T03:43:15.043Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T03:43:15.043Z] [BOT] ✅ Archiving complete: 10 archived, 1708 active
[2026-02-07T03:43:15.141Z] [BOT] 💾 Saved posted_jobs.json: 1708 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T03:43:15.141Z] [BOT] ✅ Database saved successfully
[2026-02-07T03:43:15.141Z] [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T03:43:17.156Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*