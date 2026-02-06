# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T22:51:05.598Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T22:50:43.948Z] ========================================
[2026-02-06T22:50:43.950Z] Discord Bot Execution Log
[2026-02-06T22:50:43.950Z] Environment: GitHub Actions
[2026-02-06T22:50:43.950Z] Node Version: v20.20.0
[2026-02-06T22:50:43.950Z] ========================================
[2026-02-06T22:50:43.950Z] Environment Variables Check:
[2026-02-06T22:50:43.950Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T22:50:43.950Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T22:50:43.950Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T22:50:43.951Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T22:50:43.951Z] 
Multi-Channel Configuration:
[2026-02-06T22:50:43.951Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T22:50:43.951Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T22:50:43.951Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T22:50:43.951Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T22:50:43.952Z] 
Data Files Check:
[2026-02-06T22:50:43.953Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173199 bytes)
[2026-02-06T22:50:43.993Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8373659 bytes)
[2026-02-06T22:50:43.993Z] 
========================================
[2026-02-06T22:50:43.993Z] Starting Enhanced Discord Bot...
[2026-02-06T22:50:43.993Z] ========================================
[2026-02-06T22:50:44.561Z] [BOT] ✅ Loaded V2 database: 1806 jobs
[2026-02-06T22:50:44.925Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T22:50:44.925Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T22:50:44.926Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T22:50:44.943Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-06T22:50:44.943Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:50:44.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T22:50:44.944Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T22:50:44.944Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T22:50:44.945Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T22:50:44.945Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T22:50:44.961Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T22:50:44.961Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-06T22:50:44.961Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-06T22:50:44.962Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T22:50:44.963Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-06T22:50:44.975Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-06T22:50:44.996Z] [BOT] ✅ Saved pending queue: 172 total (167 pending, 5 enriched, 0 posted)
🗑️ Removed 45 blacklisted jobs from pending queue
[2026-02-06T22:50:44.996Z] [BOT] 📋 After blacklist filter: 3 jobs (45 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T22:50:44.997Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-06T22:50:44.997Z] [BOT] ⏸️ Limiting to 10 jobs this run, 45 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T22:50:44.999Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T22:50:45.001Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-02-06T22:50:45.001Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T22:50:45.017Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T22:50:45.377Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-02-06T22:50:45.377Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-02-06T22:50:45.378Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-02-06T22:50:45.379Z] [BOT] 💾 BEFORE MERGE: 1807 jobs in memory (cached)
[2026-02-06T22:50:45.407Z] [BOT] ✅ Loaded V2 database: 1806 jobs
💾 DISK STATE: 1806 jobs on disk
[2026-02-06T22:50:45.407Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1807
[2026-02-06T22:50:45.412Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1807 jobs (merged disk + memory)
[2026-02-06T22:50:45.413Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T22:50:45.421Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-02-06T22:50:45.421Z] [BOT] ✅ Archiving complete: 8 archived, 1799 active
[2026-02-06T22:50:45.512Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:50:47.540Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🏠・JID_ead674af
[2026-02-06T22:50:47.540Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-06T22:50:47.540Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
[2026-02-06T22:50:47.541Z] [BOT] 💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-06T22:50:47.567Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-06T22:50:47.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-06T22:50:47.572Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:50:47.572Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-06T22:50:47.573Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-06T22:50:47.657Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:50:52.160Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T22:50:52.161Z] [BOT] 📍 [ROUTING] "UI Software Engineer, Claude.ai Consumer Product " @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T22:50:52.471Z] [BOT] ✅ Posted message: UI Software Engineer, Claude.ai Consumer Product  @ anthropic in #💻・tech-jobs
[2026-02-06T22:50:52.471Z] [BOT] ✅ Industry: UI Software Engineer, Claude.ai Consumer Product  @ anthropic
[2026-02-06T22:50:52.472Z] [BOT] 💾 Added channel posting: UI Software Engineer, Claude.ai Consumer Product  @ anthropic → category channel (1 total channels)
[2026-02-06T22:50:52.472Z] [BOT] 💾 BEFORE MERGE: 1800 jobs in memory (cached)
[2026-02-06T22:50:52.498Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-06T22:50:52.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1800
[2026-02-06T22:50:52.502Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:50:52.502Z] [BOT] 💾 AFTER MERGE: 1800 jobs (merged disk + memory)
[2026-02-06T22:50:52.509Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (10 total in archive)
[2026-02-06T22:50:52.509Z] [BOT] ✅ Archiving complete: 2 archived, 1798 active
[2026-02-06T22:50:52.601Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:50:54.331Z] [BOT] ✅ Posted message: UI Software Engineer, Claude.ai Consumer Product  @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T22:50:54.332Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T22:50:54.332Z] [BOT] 💾 Added channel posting: UI Software Engineer, Claude.ai Consumer Product  @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 1798 jobs in memory (cached)
[2026-02-06T22:50:54.359Z] [BOT] ✅ Loaded V2 database: 1798 jobs
💾 DISK STATE: 1798 jobs on disk
[2026-02-06T22:50:54.359Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1798
[2026-02-06T22:50:54.363Z] [BOT] 🔀 Deep merged: UI Software Engineer, Claude.ai Consumer Product  @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:50:54.363Z] [BOT] 💾 AFTER MERGE: 1798 jobs (merged disk + memory)
[2026-02-06T22:50:54.365Z] [BOT] ✅ No jobs to archive (all 1798 jobs within 7-day window)
[2026-02-06T22:50:54.454Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:50:55.954Z] [BOT] 📍 [ROUTING] "Summer Intern - Software Engineering (Hybrid, Paid)" @ ORG_56e0d739 Distribution
   Category: TECH (matched: "software")
[2026-02-06T22:50:55.955Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T22:50:56.079Z] [BOT] ✅ Posted message: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution in #💻・tech-jobs
  ✅ Industry: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution
[2026-02-06T22:50:56.080Z] [BOT] 💾 Added channel posting: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution → category channel (1 total channels)
[2026-02-06T22:50:56.080Z] [BOT] 💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-06T22:50:56.107Z] [BOT] ✅ Loaded V2 database: 1798 jobs
💾 DISK STATE: 1798 jobs on disk
[2026-02-06T22:50:56.107Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-06T22:50:56.111Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:50:56.111Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-06T22:50:56.113Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-06T22:50:56.203Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:50:57.889Z] [BOT] ✅ Posted message: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T22:50:57.889Z] [BOT] 💾 Added channel posting: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution → location channel (2 total channels)
[2026-02-06T22:50:57.890Z] [BOT] 💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-06T22:50:57.916Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-06T22:50:57.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-06T22:50:57.919Z] [BOT] 🔀 Deep merged: Summer Intern - Software Engineering (Hybrid, Paid) @ ORG_56e0d739 Distribution (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T22:50:57.920Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-06T22:50:57.921Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-06T22:50:58.001Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T22:51:02.503Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T22:51:02.504Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_026a52e5..." not found, but found as SHA256 "36cd2ae57056ab07"
[2026-02-06T22:51:02.505Z] [BOT] ⏭️  Skipping duplicate: JID_026a52e5 (posted within 7 days)
[2026-02-06T22:51:02.505Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "822e01055e171db1"
⏭️  Skipping duplicate: JID_07a84756 (posted within 7 days)
[2026-02-06T22:51:02.505Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9321d894..." not found, but found as SHA256 "1b59c59205150bb6"
[2026-02-06T22:51:02.505Z] [BOT] ⏭️  Skipping duplicate: JID_ad95608f (posted within 7 days)
[2026-02-06T22:51:02.515Z] [BOT] ✅ Loaded pending queue: 172 total (167 pending, 5 enriched, 0 posted)
[2026-02-06T22:51:02.530Z] [BOT] ✅ Saved pending queue: 172 total (167 pending, 2 enriched, 3 posted)
[2026-02-06T22:51:02.530Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T22:51:02.642Z] [BOT] 📂 Loaded 12606 existing routing entries
[2026-02-06T22:51:02.761Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12609
[2026-02-06T22:51:02.762Z] [BOT] Timestamp: 2026-02-06T22:51:02.710Z
[2026-02-06T22:51:02.762Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 53
   Successful: 6
   Failed: 0
   Skipped: 47
[2026-02-06T22:51:02.763Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #💰・finance-jobs: 1 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
     5. #📍・JID_6daed763: 1 posts
[2026-02-06T22:51:02.763Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1799 jobs in memory (cached)
[2026-02-06T22:51:02.790Z] [BOT] ✅ Loaded V2 database: 1799 jobs
💾 DISK STATE: 1799 jobs on disk
[2026-02-06T22:51:02.790Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1799
[2026-02-06T22:51:02.793Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T22:51:02.794Z] [BOT] 💾 AFTER MERGE: 1799 jobs (merged disk + memory)
[2026-02-06T22:51:02.794Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-02-06T22:51:02.879Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
[2026-02-06T22:51:02.879Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T22:51:04.895Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*