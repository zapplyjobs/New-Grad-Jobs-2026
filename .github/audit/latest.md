# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T12:57:13.597Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T12:57:08.984Z] ========================================
[2026-02-07T12:57:08.986Z] Discord Bot Execution Log
[2026-02-07T12:57:08.986Z] Environment: GitHub Actions
[2026-02-07T12:57:08.986Z] Node Version: v20.20.0
[2026-02-07T12:57:08.986Z] ========================================
[2026-02-07T12:57:08.987Z] Environment Variables Check:
[2026-02-07T12:57:08.987Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T12:57:08.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T12:57:08.987Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T12:57:08.987Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T12:57:08.987Z] 
Multi-Channel Configuration:
[2026-02-07T12:57:08.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T12:57:08.987Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.987Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.987Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T12:57:08.988Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.988Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.988Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.988Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.988Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T12:57:08.988Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T12:57:08.988Z] 
Data Files Check:
[2026-02-07T12:57:08.989Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148342 bytes)
[2026-02-07T12:57:09.021Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6320092 bytes)
[2026-02-07T12:57:09.021Z] 
========================================
[2026-02-07T12:57:09.021Z] Starting Enhanced Discord Bot...
[2026-02-07T12:57:09.021Z] ========================================
[2026-02-07T12:57:09.587Z] [BOT] ✅ Loaded V2 database: 1427 jobs
[2026-02-07T12:57:10.311Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T12:57:10.312Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T12:57:10.312Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T12:57:10.325Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T12:57:10.326Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:57:10.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T12:57:10.327Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T12:57:10.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T12:57:10.328Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T12:57:10.338Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T12:57:10.338Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-07T12:57:10.338Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
[2026-02-07T12:57:10.339Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-07T12:57:10.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T12:57:10.357Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T12:57:10.378Z] [BOT] ✅ Saved pending queue: 168 total (166 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T12:57:10.379Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T12:57:10.379Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T12:57:10.380Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T12:57:10.380Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T12:57:10.380Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T12:57:10.380Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T12:57:10.380Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T12:57:10.381Z] [BOT] 💾 BEFORE MERGE: 1427 jobs in memory (cached)
[2026-02-07T12:57:10.418Z] [BOT] ✅ Loaded V2 database: 1427 jobs
💾 DISK STATE: 1427 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1427
[2026-02-07T12:57:10.422Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T12:57:10.422Z] [BOT] 💾 AFTER MERGE: 1427 jobs (merged disk + memory)
[2026-02-07T12:57:10.423Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T12:57:10.429Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T12:57:10.429Z] [BOT] ✅ Archiving complete: 10 archived, 1417 active
[2026-02-07T12:57:10.505Z] [BOT] 💾 Saved posted_jobs.json: 1417 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T12:57:10.506Z] [BOT] ✅ Database saved successfully
[2026-02-07T12:57:10.506Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T12:57:12.524Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*