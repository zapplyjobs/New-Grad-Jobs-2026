# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T21:18:22.629Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T21:18:10.777Z] ========================================
[2026-02-06T21:18:10.779Z] Discord Bot Execution Log
[2026-02-06T21:18:10.779Z] Environment: GitHub Actions
[2026-02-06T21:18:10.779Z] Node Version: v20.20.0
[2026-02-06T21:18:10.779Z] ========================================
[2026-02-06T21:18:10.779Z] Environment Variables Check:
[2026-02-06T21:18:10.780Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T21:18:10.780Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T21:18:10.780Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T21:18:10.780Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T21:18:10.780Z] 
Multi-Channel Configuration:
[2026-02-06T21:18:10.780Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T21:18:10.780Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.780Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.780Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T21:18:10.780Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.781Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.781Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.781Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.781Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:18:10.781Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T21:18:10.781Z] 
Data Files Check:
[2026-02-06T21:18:10.782Z] .github/data/new_jobs.json: ✅ Exists (10 items, 127674 bytes)
[2026-02-06T21:18:10.838Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8737649 bytes)
[2026-02-06T21:18:10.838Z] 
========================================
[2026-02-06T21:18:10.838Z] Starting Enhanced Discord Bot...
[2026-02-06T21:18:10.838Z] ========================================
[2026-02-06T21:18:11.411Z] [BOT] ✅ Loaded V2 database: 1864 jobs
[2026-02-06T21:18:12.125Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T21:18:12.125Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T21:18:12.126Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T21:18:12.144Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T21:18:12.144Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:18:12.145Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T21:18:12.145Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T21:18:12.145Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:18:12.146Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T21:18:12.146Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-06T21:18:12.146Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T21:18:12.162Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T21:18:12.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-06T21:18:12.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-06T21:18:12.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
[2026-02-06T21:18:12.163Z] [BOT] 🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
[2026-02-06T21:18:12.164Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-06T21:18:12.164Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T21:18:12.164Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T21:18:12.181Z] [BOT] ✅ Loaded pending queue: 221 total (171 pending, 50 enriched, 0 posted)
[2026-02-06T21:18:12.207Z] [BOT] ✅ Saved pending queue: 174 total (171 pending, 3 enriched, 0 posted)
🗑️ Removed 47 blacklisted jobs from pending queue
[2026-02-06T21:18:12.208Z] [BOT] 📋 After blacklist filter: 1 jobs (47 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T21:18:12.208Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-06T21:18:12.208Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T21:18:12.209Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T21:18:12.211Z] [BOT] 📍 [ROUTING] "Software Engineer II - Mobile Platform" @ samsara
[2026-02-06T21:18:12.211Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T21:18:12.228Z] [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T21:18:12.667Z] [BOT] ✅ Posted message: Software Engineer II - Mobile Platform @ samsara in #💻・tech-jobs
[2026-02-06T21:18:12.667Z] [BOT] ✅ Industry: Software Engineer II - Mobile Platform @ samsara
[2026-02-06T21:18:12.668Z] [BOT] 💾 Added channel posting: Software Engineer II - Mobile Platform @ samsara → category channel (1 total channels)
[2026-02-06T21:18:12.668Z] [BOT] 💾 BEFORE MERGE: 1865 jobs in memory (cached)
[2026-02-06T21:18:12.702Z] [BOT] ✅ Loaded V2 database: 1864 jobs
💾 DISK STATE: 1864 jobs on disk
[2026-02-06T21:18:12.703Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1865
[2026-02-06T21:18:12.710Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:18:12.710Z] [BOT] 💾 AFTER MERGE: 1865 jobs (merged disk + memory)
[2026-02-06T21:18:12.711Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T21:18:12.718Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T21:18:12.718Z] [BOT] ✅ Archiving complete: 20 archived, 1845 active
[2026-02-06T21:18:12.806Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:18:14.637Z] [BOT] ✅ Posted message: Software Engineer II - Mobile Platform @ samsara in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T21:18:14.637Z] [BOT] 💾 Added channel posting: Software Engineer II - Mobile Platform @ samsara → location channel (2 total channels)
[2026-02-06T21:18:14.637Z] [BOT] 💾 BEFORE MERGE: 1845 jobs in memory (cached)
[2026-02-06T21:18:14.664Z] [BOT] ✅ Loaded V2 database: 1845 jobs
💾 DISK STATE: 1845 jobs on disk
[2026-02-06T21:18:14.665Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1845
[2026-02-06T21:18:14.669Z] [BOT] 🔀 Deep merged: Software Engineer II - Mobile Platform @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:18:14.670Z] [BOT] 💾 AFTER MERGE: 1845 jobs (merged disk + memory)
[2026-02-06T21:18:14.671Z] [BOT] ✅ No jobs to archive (all 1845 jobs within 7-day window)
[2026-02-06T21:18:14.758Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:18:19.259Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T21:18:19.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_13e4a2ec..." not found, but found as SHA256 "dbcd0d268423dbe2"
[2026-02-06T21:18:19.261Z] [BOT] ⏭️  Skipping duplicate: JID_f676ed39 (posted within 7 days)
[2026-02-06T21:18:19.271Z] [BOT] ✅ Loaded pending queue: 174 total (171 pending, 3 enriched, 0 posted)
[2026-02-06T21:18:19.288Z] [BOT] ✅ Saved pending queue: 174 total (171 pending, 2 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-06T21:18:19.288Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T21:18:19.385Z] [BOT] 📂 Loaded 12594 existing routing entries
[2026-02-06T21:18:19.525Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-06T21:18:19.525Z] [BOT] Total entries: 12595
   Timestamp: 2026-02-06T21:18:19.472Z
[2026-02-06T21:18:19.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T21:18:19.526Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-06T21:18:19.526Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T21:18:19.526Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T21:18:19.526Z] [BOT] 💾 BEFORE MERGE: 1845 jobs in memory (cached)
[2026-02-06T21:18:19.557Z] [BOT] ✅ Loaded V2 database: 1845 jobs
[2026-02-06T21:18:19.558Z] [BOT] 💾 DISK STATE: 1845 jobs on disk
[2026-02-06T21:18:19.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1845
[2026-02-06T21:18:19.562Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:18:19.562Z] [BOT] 💾 AFTER MERGE: 1845 jobs (merged disk + memory)
[2026-02-06T21:18:19.565Z] [BOT] ✅ No jobs to archive (all 1845 jobs within 7-day window)
[2026-02-06T21:18:19.659Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:18:19.659Z] [BOT] ✅ Database saved successfully
[2026-02-06T21:18:21.683Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*