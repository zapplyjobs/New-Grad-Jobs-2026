# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T01:43:25.340Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T01:43:20.395Z] ========================================
[2026-02-07T01:43:20.396Z] Discord Bot Execution Log
[2026-02-07T01:43:20.397Z] Environment: GitHub Actions
[2026-02-07T01:43:20.397Z] Node Version: v20.20.0
[2026-02-07T01:43:20.397Z] ========================================
[2026-02-07T01:43:20.397Z] Environment Variables Check:
[2026-02-07T01:43:20.397Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T01:43:20.397Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T01:43:20.397Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T01:43:20.397Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T01:43:20.397Z] 
Multi-Channel Configuration:
[2026-02-07T01:43:20.397Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T01:43:20.398Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T01:43:20.398Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T01:43:20.398Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T01:43:20.398Z] 
Data Files Check:
[2026-02-07T01:43:20.399Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138279 bytes)
[2026-02-07T01:43:20.438Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7939402 bytes)
[2026-02-07T01:43:20.438Z] 
========================================
[2026-02-07T01:43:20.438Z] Starting Enhanced Discord Bot...
[2026-02-07T01:43:20.438Z] ========================================
[2026-02-07T01:43:21.006Z] [BOT] ✅ Loaded V2 database: 1737 jobs
[2026-02-07T01:43:21.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T01:43:21.870Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T01:43:21.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T01:43:21.889Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T01:43:21.889Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T01:43:21.890Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T01:43:21.890Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T01:43:21.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T01:43:21.891Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T01:43:21.904Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T01:43:21.904Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-07T01:43:21.905Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
[2026-02-07T01:43:21.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-07T01:43:21.919Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T01:43:21.942Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T01:43:21.942Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T01:43:21.942Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T01:43:21.942Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T01:43:21.943Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T01:43:21.943Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T01:43:21.943Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T01:43:21.943Z] [BOT] [STATS] Channel stats saved
[2026-02-07T01:43:21.944Z] [BOT] 💾 Saving posted jobs database...
[2026-02-07T01:43:21.944Z] [BOT] 💾 BEFORE MERGE: 1737 jobs in memory (cached)
[2026-02-07T01:43:21.987Z] [BOT] ✅ Loaded V2 database: 1737 jobs
💾 DISK STATE: 1737 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1737
[2026-02-07T01:43:21.993Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T01:43:21.993Z] [BOT] 💾 AFTER MERGE: 1737 jobs (merged disk + memory)
[2026-02-07T01:43:21.995Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T01:43:22.001Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T01:43:22.002Z] [BOT] ✅ Archiving complete: 10 archived, 1727 active
[2026-02-07T01:43:22.104Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T01:43:22.105Z] [BOT] ✅ Database saved successfully
[2026-02-07T01:43:22.105Z] [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T01:43:24.126Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2586) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*