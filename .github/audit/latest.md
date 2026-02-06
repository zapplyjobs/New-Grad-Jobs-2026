# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T23:15:48.268Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T23:15:36.791Z] ========================================
[2026-02-06T23:15:36.793Z] Discord Bot Execution Log
[2026-02-06T23:15:36.793Z] Environment: GitHub Actions
[2026-02-06T23:15:36.793Z] Node Version: v20.20.0
[2026-02-06T23:15:36.793Z] ========================================
[2026-02-06T23:15:36.793Z] Environment Variables Check:
[2026-02-06T23:15:36.793Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T23:15:36.793Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T23:15:36.793Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T23:15:36.794Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T23:15:36.794Z] 
Multi-Channel Configuration:
[2026-02-06T23:15:36.794Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T23:15:36.794Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T23:15:36.794Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.794Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T23:15:36.795Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T23:15:36.795Z] 
Data Files Check:
[2026-02-06T23:15:36.796Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181183 bytes)
[2026-02-06T23:15:36.837Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8281917 bytes)
[2026-02-06T23:15:36.837Z] 
========================================
[2026-02-06T23:15:36.837Z] Starting Enhanced Discord Bot...
[2026-02-06T23:15:36.837Z] ========================================
[2026-02-06T23:15:37.404Z] [BOT] ✅ Loaded V2 database: 1796 jobs
[2026-02-06T23:15:38.120Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T23:15:38.121Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T23:15:38.121Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T23:15:38.139Z] [BOT] ✅ Loaded pending queue: 215 total (165 pending, 50 enriched, 0 posted)
[2026-02-06T23:15:38.139Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:15:38.140Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T23:15:38.140Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T23:15:38.141Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T23:15:38.141Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T23:15:38.157Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T23:15:38.158Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-06T23:15:38.158Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T23:15:38.158Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T23:15:38.158Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-02-06T23:15:38.159Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-06T23:15:38.174Z] [BOT] ✅ Loaded pending queue: 215 total (165 pending, 50 enriched, 0 posted)
[2026-02-06T23:15:38.196Z] [BOT] ✅ Saved pending queue: 168 total (165 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (47 blacklisted)
[2026-02-06T23:15:38.196Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T23:15:38.196Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T23:15:38.199Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T23:15:38.200Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-02-06T23:15:38.200Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T23:15:38.217Z] [BOT ERROR] (node:2569) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T23:15:38.451Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-02-06T23:15:38.451Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-02-06T23:15:38.453Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-02-06T23:15:38.453Z] [BOT] 💾 BEFORE MERGE: 1797 jobs in memory (cached)
[2026-02-06T23:15:38.479Z] [BOT] ✅ Loaded V2 database: 1796 jobs
💾 DISK STATE: 1796 jobs on disk
[2026-02-06T23:15:38.480Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1797
[2026-02-06T23:15:38.484Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:15:38.484Z] [BOT] 💾 AFTER MERGE: 1797 jobs (merged disk + memory)
[2026-02-06T23:15:38.486Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T23:15:38.494Z] [BOT] 📦 Archived 16 jobs to 2026-01.json (16 total in archive)
✅ Archiving complete: 16 archived, 1781 active
[2026-02-06T23:15:38.595Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:15:40.421Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T23:15:40.421Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 1781 jobs in memory (cached)
[2026-02-06T23:15:40.446Z] [BOT] ✅ Loaded V2 database: 1781 jobs
💾 DISK STATE: 1781 jobs on disk
[2026-02-06T23:15:40.447Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1781
[2026-02-06T23:15:40.451Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
[2026-02-06T23:15:40.451Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1781 jobs (merged disk + memory)
[2026-02-06T23:15:40.452Z] [BOT] ✅ No jobs to archive (all 1781 jobs within 7-day window)
[2026-02-06T23:15:40.532Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:15:45.035Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T23:15:45.036Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_529af91f..." not found, but found as SHA256 "21f4ee4aa0b3f0cb"
[2026-02-06T23:15:45.036Z] [BOT] ⏭️  Skipping duplicate: JID_529af91f (posted within 7 days)
[2026-02-06T23:15:45.046Z] [BOT] ✅ Loaded pending queue: 168 total (165 pending, 3 enriched, 0 posted)
[2026-02-06T23:15:45.061Z] [BOT] ✅ Saved pending queue: 168 total (165 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T23:15:45.061Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T23:15:45.161Z] [BOT] 📂 Loaded 12610 existing routing entries
[2026-02-06T23:15:45.313Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-06T23:15:45.313Z] [BOT] New entries: 1
   Total entries: 12611
   Timestamp: 2026-02-06T23:15:45.258Z
[2026-02-06T23:15:45.314Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T23:15:45.314Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T23:15:45.314Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T23:15:45.314Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-06T23:15:45.314Z] [BOT] 1. #💰・finance-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T23:15:45.315Z] [BOT] [STATS] Channel stats saved
[2026-02-06T23:15:45.315Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1781 jobs in memory (cached)
[2026-02-06T23:15:45.341Z] [BOT] ✅ Loaded V2 database: 1781 jobs
💾 DISK STATE: 1781 jobs on disk
[2026-02-06T23:15:45.342Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1781
[2026-02-06T23:15:45.345Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T23:15:45.346Z] [BOT] 💾 AFTER MERGE: 1781 jobs (merged disk + memory)
[2026-02-06T23:15:45.347Z] [BOT] ✅ No jobs to archive (all 1781 jobs within 7-day window)
[2026-02-06T23:15:45.422Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T23:15:45.422Z] [BOT] ✅ Database saved successfully
[2026-02-06T23:15:47.446Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2569) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*