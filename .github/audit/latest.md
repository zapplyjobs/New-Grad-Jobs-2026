# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T07:38:01.965Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T07:37:57.226Z] ========================================
[2026-02-07T07:37:57.228Z] Discord Bot Execution Log
[2026-02-07T07:37:57.228Z] Environment: GitHub Actions
[2026-02-07T07:37:57.228Z] Node Version: v20.20.0
[2026-02-07T07:37:57.228Z] ========================================
[2026-02-07T07:37:57.228Z] Environment Variables Check:
[2026-02-07T07:37:57.228Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T07:37:57.228Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T07:37:57.228Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T07:37:57.228Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T07:37:57.228Z] 
Multi-Channel Configuration:
[2026-02-07T07:37:57.229Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T07:37:57.229Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T07:37:57.229Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:37:57.229Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T07:37:57.229Z] 
Data Files Check:
[2026-02-07T07:37:57.231Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137049 bytes)
[2026-02-07T07:37:57.267Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7373005 bytes)
[2026-02-07T07:37:57.267Z] 
========================================
[2026-02-07T07:37:57.267Z] Starting Enhanced Discord Bot...
[2026-02-07T07:37:57.267Z] ========================================
[2026-02-07T07:37:57.841Z] [BOT] ✅ Loaded V2 database: 1630 jobs
[2026-02-07T07:37:58.439Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T07:37:58.439Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T07:37:58.439Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T07:37:58.458Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T07:37:58.458Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:37:58.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T07:37:58.459Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T07:37:58.459Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:37:58.460Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T07:37:58.460Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T07:37:58.473Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T07:37:58.473Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-07T07:37:58.473Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-07T07:37:58.473Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-07T07:37:58.473Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
[2026-02-07T07:37:58.474Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-07T07:37:58.475Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-07T07:37:58.475Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T07:37:58.475Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-07T07:37:58.489Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T07:37:58.511Z] [BOT] ✅ Saved pending queue: 168 total (166 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T07:37:58.511Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T07:37:58.512Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T07:37:58.512Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T07:37:58.512Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T07:37:58.513Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T07:37:58.513Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T07:37:58.513Z] [BOT] 💾 BEFORE MERGE: 1630 jobs in memory (cached)
[2026-02-07T07:37:58.552Z] [BOT] ✅ Loaded V2 database: 1630 jobs
💾 DISK STATE: 1630 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1630
[2026-02-07T07:37:58.557Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T07:37:58.557Z] [BOT] 💾 AFTER MERGE: 1630 jobs (merged disk + memory)
[2026-02-07T07:37:58.559Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T07:37:58.564Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T07:37:58.564Z] [BOT] ✅ Archiving complete: 10 archived, 1620 active
[2026-02-07T07:37:58.653Z] [BOT] 💾 Saved posted_jobs.json: 1620 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:37:58.654Z] [BOT] ✅ Database saved successfully
[2026-02-07T07:37:58.654Z] [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T07:38:00.673Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*