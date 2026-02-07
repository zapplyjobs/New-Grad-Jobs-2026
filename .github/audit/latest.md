# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T05:55:39.723Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T05:55:34.945Z] ========================================
[2026-02-07T05:55:34.947Z] Discord Bot Execution Log
[2026-02-07T05:55:34.947Z] Environment: GitHub Actions
[2026-02-07T05:55:34.947Z] Node Version: v20.20.0
[2026-02-07T05:55:34.947Z] ========================================
[2026-02-07T05:55:34.947Z] Environment Variables Check:
[2026-02-07T05:55:34.947Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T05:55:34.947Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T05:55:34.947Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T05:55:34.947Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T05:55:34.948Z] 
Multi-Channel Configuration:
[2026-02-07T05:55:34.948Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T05:55:34.948Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T05:55:34.948Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:55:34.948Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T05:55:34.948Z] 
Data Files Check:
[2026-02-07T05:55:34.950Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150339 bytes)
[2026-02-07T05:55:34.986Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7635588 bytes)
[2026-02-07T05:55:34.986Z] 
========================================
[2026-02-07T05:55:34.986Z] Starting Enhanced Discord Bot...
[2026-02-07T05:55:34.986Z] ========================================
[2026-02-07T05:55:35.536Z] [BOT] ✅ Loaded V2 database: 1679 jobs
[2026-02-07T05:55:36.284Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T05:55:36.285Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T05:55:36.285Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T05:55:36.302Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T05:55:36.303Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:55:36.303Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T05:55:36.304Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T05:55:36.304Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:55:36.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T05:55:36.304Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T05:55:36.317Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T05:55:36.317Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-07T05:55:36.317Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-07T05:55:36.317Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-07T05:55:36.317Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-07T05:55:36.318Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-07T05:55:36.319Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-07T05:55:36.331Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T05:55:36.353Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T05:55:36.353Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T05:55:36.354Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T05:55:36.354Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T05:55:36.354Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T05:55:36.354Z] [BOT] Total attempts: 50
[2026-02-07T05:55:36.355Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-07T05:55:36.355Z] [BOT] Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T05:55:36.355Z] [BOT] 💾 BEFORE MERGE: 1679 jobs in memory (cached)
[2026-02-07T05:55:36.395Z] [BOT] ✅ Loaded V2 database: 1679 jobs
💾 DISK STATE: 1679 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1679
[2026-02-07T05:55:36.399Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T05:55:36.399Z] [BOT] 💾 AFTER MERGE: 1679 jobs (merged disk + memory)
[2026-02-07T05:55:36.401Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T05:55:36.407Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T05:55:36.407Z] [BOT] ✅ Archiving complete: 10 archived, 1669 active
[2026-02-07T05:55:36.495Z] [BOT] 💾 Saved posted_jobs.json: 1669 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T05:55:36.495Z] [BOT] ✅ Database saved successfully
[2026-02-07T05:55:36.496Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T05:55:38.515Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*