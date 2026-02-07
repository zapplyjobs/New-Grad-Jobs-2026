# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T10:33:48.711Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T10:33:44.158Z] ========================================
[2026-02-07T10:33:44.160Z] Discord Bot Execution Log
[2026-02-07T10:33:44.160Z] Environment: GitHub Actions
[2026-02-07T10:33:44.160Z] Node Version: v20.20.0
[2026-02-07T10:33:44.160Z] ========================================
[2026-02-07T10:33:44.160Z] Environment Variables Check:
[2026-02-07T10:33:44.160Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T10:33:44.160Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T10:33:44.160Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T10:33:44.160Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T10:33:44.160Z] 
Multi-Channel Configuration:
[2026-02-07T10:33:44.161Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T10:33:44.161Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T10:33:44.161Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T10:33:44.161Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T10:33:44.161Z] 
Data Files Check:
[2026-02-07T10:33:44.162Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141237 bytes)
[2026-02-07T10:33:44.194Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6845887 bytes)
[2026-02-07T10:33:44.195Z] 
========================================
[2026-02-07T10:33:44.195Z] Starting Enhanced Discord Bot...
[2026-02-07T10:33:44.195Z] ========================================
[2026-02-07T10:33:44.755Z] [BOT] ✅ Loaded V2 database: 1512 jobs
[2026-02-07T10:33:45.898Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T10:33:45.898Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T10:33:45.899Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T10:33:45.913Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T10:33:45.913Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T10:33:45.914Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T10:33:45.914Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T10:33:45.915Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T10:33:45.915Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-07T10:33:45.915Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T10:33:45.926Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T10:33:45.926Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-07T10:33:45.926Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-07T10:33:45.926Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-07T10:33:45.926Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T10:33:45.927Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-07T10:33:45.928Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T10:33:45.928Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-07T10:33:45.945Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T10:33:45.967Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T10:33:45.967Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T10:33:45.968Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T10:33:45.968Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T10:33:45.968Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T10:33:45.968Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T10:33:45.968Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T10:33:45.969Z] [BOT] [STATS] Channel stats saved
[2026-02-07T10:33:45.969Z] [BOT] 💾 Saving posted jobs database...
[2026-02-07T10:33:45.969Z] [BOT] 💾 BEFORE MERGE: 1512 jobs in memory (cached)
[2026-02-07T10:33:46.006Z] [BOT] ✅ Loaded V2 database: 1512 jobs
💾 DISK STATE: 1512 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1512
[2026-02-07T10:33:46.010Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T10:33:46.010Z] [BOT] 💾 AFTER MERGE: 1512 jobs (merged disk + memory)
[2026-02-07T10:33:46.011Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T10:33:46.017Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T10:33:46.017Z] [BOT] ✅ Archiving complete: 10 archived, 1502 active
[2026-02-07T10:33:46.089Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T10:33:46.089Z] [BOT] ✅ Database saved successfully
[2026-02-07T10:33:46.090Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T10:33:48.108Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*