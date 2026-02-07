# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T04:29:46.393Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T04:29:42.105Z] ========================================
[2026-02-07T04:29:42.106Z] Discord Bot Execution Log
[2026-02-07T04:29:42.106Z] Environment: GitHub Actions
[2026-02-07T04:29:42.107Z] Node Version: v20.20.0
[2026-02-07T04:29:42.107Z] ========================================
[2026-02-07T04:29:42.107Z] Environment Variables Check:
[2026-02-07T04:29:42.107Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T04:29:42.107Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T04:29:42.107Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T04:29:42.107Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T04:29:42.107Z] 
Multi-Channel Configuration:
[2026-02-07T04:29:42.107Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T04:29:42.107Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.107Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.107Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T04:29:42.107Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.108Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.108Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.108Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.108Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T04:29:42.108Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T04:29:42.108Z] 
Data Files Check:
[2026-02-07T04:29:42.109Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133343 bytes)
[2026-02-07T04:29:42.145Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7798870 bytes)
[2026-02-07T04:29:42.145Z] 
========================================
[2026-02-07T04:29:42.145Z] Starting Enhanced Discord Bot...
[2026-02-07T04:29:42.145Z] ========================================
[2026-02-07T04:29:42.697Z] [BOT] ✅ Loaded V2 database: 1708 jobs
[2026-02-07T04:29:43.361Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T04:29:43.361Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T04:29:43.361Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T04:29:43.377Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T04:29:43.378Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T04:29:43.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T04:29:43.379Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T04:29:43.379Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T04:29:43.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T04:29:43.380Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T04:29:43.393Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T04:29:43.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-07T04:29:43.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-07T04:29:43.393Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-07T04:29:43.394Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T04:29:43.395Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-07T04:29:43.395Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-07T04:29:43.395Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-07T04:29:43.407Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T04:29:43.429Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T04:29:43.429Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T04:29:43.429Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T04:29:43.429Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T04:29:43.430Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T04:29:43.430Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T04:29:43.430Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-07T04:29:43.430Z] [BOT] Channels used: 0
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T04:29:43.431Z] [BOT] 💾 BEFORE MERGE: 1708 jobs in memory (cached)
[2026-02-07T04:29:43.469Z] [BOT] ✅ Loaded V2 database: 1708 jobs
💾 DISK STATE: 1708 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1708
[2026-02-07T04:29:43.474Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T04:29:43.474Z] [BOT] 💾 AFTER MERGE: 1708 jobs (merged disk + memory)
[2026-02-07T04:29:43.476Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T04:29:43.481Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T04:29:43.481Z] [BOT] ✅ Archiving complete: 10 archived, 1698 active
[2026-02-07T04:29:43.567Z] [BOT] 💾 Saved posted_jobs.json: 1698 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T04:29:43.567Z] [BOT] ✅ Database saved successfully
[2026-02-07T04:29:43.567Z] [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T04:29:45.586Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*