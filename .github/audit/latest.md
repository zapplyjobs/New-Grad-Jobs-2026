# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T14:21:01.862Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T14:20:57.767Z] ========================================
[2026-02-07T14:20:57.769Z] Discord Bot Execution Log
[2026-02-07T14:20:57.769Z] Environment: GitHub Actions
[2026-02-07T14:20:57.769Z] Node Version: v20.20.0
[2026-02-07T14:20:57.769Z] ========================================
[2026-02-07T14:20:57.769Z] Environment Variables Check:
[2026-02-07T14:20:57.769Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T14:20:57.769Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T14:20:57.769Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T14:20:57.770Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T14:20:57.770Z] 
Multi-Channel Configuration:
[2026-02-07T14:20:57.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T14:20:57.770Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T14:20:57.770Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:20:57.770Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T14:20:57.770Z] 
Data Files Check:
[2026-02-07T14:20:57.772Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155474 bytes)
[2026-02-07T14:20:57.810Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6159013 bytes)
[2026-02-07T14:20:57.810Z] 
========================================
[2026-02-07T14:20:57.810Z] Starting Enhanced Discord Bot...
[2026-02-07T14:20:57.810Z] ========================================
[2026-02-07T14:20:58.369Z] [BOT] ✅ Loaded V2 database: 1397 jobs
[2026-02-07T14:20:58.791Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T14:20:58.791Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T14:20:58.792Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T14:20:58.821Z] [BOT] ✅ Loaded pending queue: 405 total (355 pending, 50 enriched, 0 posted)
[2026-02-07T14:20:58.821Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:20:58.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T14:20:58.822Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T14:20:58.822Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:20:58.823Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T14:20:58.823Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-07T14:20:58.823Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T14:20:58.835Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T14:20:58.835Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-07T14:20:58.835Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-07T14:20:58.836Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-07T14:20:58.837Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-07T14:20:58.838Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T14:20:58.838Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-07T14:20:58.838Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-07T14:20:58.886Z] [BOT] ✅ Loaded pending queue: 405 total (355 pending, 50 enriched, 0 posted)
[2026-02-07T14:20:58.920Z] [BOT] ✅ Saved pending queue: 357 total (355 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T14:20:58.920Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T14:20:58.921Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T14:20:58.921Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T14:20:58.921Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T14:20:58.922Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T14:20:58.922Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T14:20:58.922Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T14:20:58.922Z] [BOT] 💾 BEFORE MERGE: 1397 jobs in memory (cached)
[2026-02-07T14:20:58.948Z] [BOT] ✅ Loaded V2 database: 1397 jobs
💾 DISK STATE: 1397 jobs on disk
[2026-02-07T14:20:58.948Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1397
[2026-02-07T14:20:58.952Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:20:58.952Z] [BOT] 💾 AFTER MERGE: 1397 jobs (merged disk + memory)
[2026-02-07T14:20:58.954Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T14:20:58.959Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T14:20:58.959Z] [BOT] ✅ Archiving complete: 10 archived, 1387 active
[2026-02-07T14:20:59.042Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:20:59.043Z] [BOT] ✅ Database saved successfully
[2026-02-07T14:20:59.043Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T14:21:01.063Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*