# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T13:55:27.620Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T13:55:22.888Z] ========================================
[2026-02-07T13:55:22.890Z] Discord Bot Execution Log
[2026-02-07T13:55:22.890Z] Environment: GitHub Actions
[2026-02-07T13:55:22.890Z] Node Version: v20.20.0
[2026-02-07T13:55:22.890Z] ========================================
[2026-02-07T13:55:22.890Z] Environment Variables Check:
[2026-02-07T13:55:22.890Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T13:55:22.890Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T13:55:22.891Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T13:55:22.891Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T13:55:22.891Z] 
Multi-Channel Configuration:
[2026-02-07T13:55:22.891Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T13:55:22.891Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T13:55:22.891Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.891Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T13:55:22.892Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T13:55:22.892Z] 
Data Files Check:
[2026-02-07T13:55:22.893Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129460 bytes)
[2026-02-07T13:55:22.923Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6199584 bytes)
[2026-02-07T13:55:22.923Z] 
========================================
[2026-02-07T13:55:22.923Z] Starting Enhanced Discord Bot...
[2026-02-07T13:55:22.923Z] ========================================
[2026-02-07T13:55:23.481Z] [BOT] ✅ Loaded V2 database: 1407 jobs
[2026-02-07T13:55:24.125Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T13:55:24.126Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T13:55:24.126Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T13:55:24.140Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T13:55:24.140Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T13:55:24.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T13:55:24.141Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T13:55:24.141Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T13:55:24.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T13:55:24.142Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T13:55:24.152Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-07T13:55:24.153Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
[2026-02-07T13:55:24.154Z] [BOT] 🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-02-07T13:55:24.154Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-07T13:55:24.154Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-07T13:55:24.154Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-07T13:55:24.173Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T13:55:24.196Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T13:55:24.196Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T13:55:24.196Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T13:55:24.197Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T13:55:24.197Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T13:55:24.197Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T13:55:24.197Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T13:55:24.198Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T13:55:24.198Z] [BOT] 💾 BEFORE MERGE: 1407 jobs in memory (cached)
[2026-02-07T13:55:24.222Z] [BOT] ✅ Loaded V2 database: 1407 jobs
💾 DISK STATE: 1407 jobs on disk
[2026-02-07T13:55:24.223Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1407
[2026-02-07T13:55:24.226Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T13:55:24.226Z] [BOT] 💾 AFTER MERGE: 1407 jobs (merged disk + memory)
[2026-02-07T13:55:24.228Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T13:55:24.233Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T13:55:24.233Z] [BOT] ✅ Archiving complete: 10 archived, 1397 active
[2026-02-07T13:55:24.308Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T13:55:24.308Z] [BOT] ✅ Database saved successfully
[2026-02-07T13:55:24.309Z] [BOT ERROR] (node:2805) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T13:55:26.327Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2805) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*