# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T06:22:47.285Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T06:22:42.958Z] ========================================
[2026-02-07T06:22:42.960Z] Discord Bot Execution Log
[2026-02-07T06:22:42.960Z] Environment: GitHub Actions
[2026-02-07T06:22:42.960Z] Node Version: v20.20.0
[2026-02-07T06:22:42.960Z] ========================================
[2026-02-07T06:22:42.960Z] Environment Variables Check:
[2026-02-07T06:22:42.960Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T06:22:42.961Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T06:22:42.961Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T06:22:42.961Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T06:22:42.961Z] 
Multi-Channel Configuration:
[2026-02-07T06:22:42.961Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T06:22:42.961Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.961Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.961Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T06:22:42.961Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.961Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.962Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.962Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.962Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T06:22:42.962Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T06:22:42.962Z] 
Data Files Check:
[2026-02-07T06:22:42.963Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154747 bytes)
[2026-02-07T06:22:42.999Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7580504 bytes)
[2026-02-07T06:22:42.999Z] 
========================================
[2026-02-07T06:22:42.999Z] Starting Enhanced Discord Bot...
[2026-02-07T06:22:42.999Z] ========================================
[2026-02-07T06:22:43.556Z] [BOT] ✅ Loaded V2 database: 1669 jobs
[2026-02-07T06:22:44.055Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T06:22:44.056Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T06:22:44.056Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T06:22:44.074Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T06:22:44.074Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T06:22:44.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T06:22:44.075Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T06:22:44.075Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T06:22:44.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T06:22:44.076Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-07T06:22:44.076Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T06:22:44.088Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T06:22:44.088Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-07T06:22:44.088Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-07T06:22:44.089Z] [BOT] 🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T06:22:44.090Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-07T06:22:44.102Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T06:22:44.126Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T06:22:44.126Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T06:22:44.127Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T06:22:44.127Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T06:22:44.127Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T06:22:44.127Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T06:22:44.128Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T06:22:44.128Z] [BOT] 💾 BEFORE MERGE: 1669 jobs in memory (cached)
[2026-02-07T06:22:44.170Z] [BOT] ✅ Loaded V2 database: 1669 jobs
💾 DISK STATE: 1669 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1669
[2026-02-07T06:22:44.173Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T06:22:44.173Z] [BOT] 💾 AFTER MERGE: 1669 jobs (merged disk + memory)
[2026-02-07T06:22:44.174Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T06:22:44.180Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T06:22:44.180Z] [BOT] ✅ Archiving complete: 10 archived, 1659 active
[2026-02-07T06:22:44.265Z] [BOT] 💾 Saved posted_jobs.json: 1659 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T06:22:44.265Z] [BOT] ✅ Database saved successfully
[2026-02-07T06:22:44.265Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T06:22:46.286Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*