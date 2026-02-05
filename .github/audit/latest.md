# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T23:16:06.291Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T23:15:53.135Z] ========================================
[2026-02-05T23:15:53.136Z] Discord Bot Execution Log
[2026-02-05T23:15:53.137Z] Environment: GitHub Actions
[2026-02-05T23:15:53.137Z] Node Version: v20.20.0
[2026-02-05T23:15:53.137Z] ========================================
[2026-02-05T23:15:53.137Z] Environment Variables Check:
[2026-02-05T23:15:53.137Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T23:15:53.137Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T23:15:53.137Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T23:15:53.137Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T23:15:53.137Z] 
Multi-Channel Configuration:
[2026-02-05T23:15:53.137Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T23:15:53.138Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T23:15:53.138Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:15:53.138Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T23:15:53.138Z] 
Data Files Check:
[2026-02-05T23:15:53.139Z] .github/data/new_jobs.json: ✅ Exists (10 items, 179127 bytes)
[2026-02-05T23:15:53.197Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11381947 bytes)
[2026-02-05T23:15:53.197Z] 
========================================
[2026-02-05T23:15:53.197Z] Starting Enhanced Discord Bot...
[2026-02-05T23:15:53.197Z] ========================================
[2026-02-05T23:15:53.766Z] [BOT] ✅ Loaded V2 database: 2247 jobs
[2026-02-05T23:15:54.547Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T23:15:54.548Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T23:15:54.548Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T23:15:54.563Z] [BOT] ✅ Loaded pending queue: 241 total (191 pending, 50 enriched, 0 posted)
[2026-02-05T23:15:54.563Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:15:54.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T23:15:54.565Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:15:54.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T23:15:54.565Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T23:15:54.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T23:15:54.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T23:15:54.567Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T23:15:54.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T23:15:54.568Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T23:15:54.584Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-05T23:15:54.584Z] [BOT] 🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-05T23:15:54.584Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-05T23:15:54.584Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-05T23:15:54.584Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-05T23:15:54.585Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-05T23:15:54.586Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-05T23:15:54.607Z] [BOT] ✅ Loaded pending queue: 241 total (191 pending, 50 enriched, 0 posted)
[2026-02-05T23:15:54.627Z] [BOT] ✅ Saved pending queue: 197 total (191 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
[2026-02-05T23:15:54.627Z] [BOT] 📋 After blacklist filter: 1 jobs (44 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T23:15:54.628Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T23:15:54.630Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T23:15:54.632Z] [BOT] 📍 [ROUTING] "Head of Duolingo Store, Consumer Products" @ duolingo
[2026-02-05T23:15:54.632Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:15:54.648Z] [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T23:15:54.840Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #💻・tech-jobs
[2026-02-05T23:15:54.840Z] [BOT] ✅ Industry: Head of Duolingo Store, Consumer Products @ duolingo
[2026-02-05T23:15:54.841Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → category channel (1 total channels)
[2026-02-05T23:15:54.841Z] [BOT] 💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-05T23:15:54.885Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-05T23:15:54.886Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-05T23:15:54.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:15:54.891Z] [BOT] 💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-05T23:15:54.892Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-05T23:15:55.025Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:15:58.469Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #🌲・JID_efdf5921
[2026-02-05T23:15:58.469Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-05T23:15:58.470Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → location channel (2 total channels)
[2026-02-05T23:15:58.470Z] [BOT] 💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-05T23:15:58.508Z] [BOT] ✅ Loaded V2 database: 2248 jobs
[2026-02-05T23:15:58.508Z] [BOT] 💾 DISK STATE: 2248 jobs on disk
[2026-02-05T23:15:58.508Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-05T23:15:58.513Z] [BOT] 🔀 Deep merged: Head of Duolingo Store, Consumer Products @ duolingo (disk: 1 channels → merged: 2 channels)
[2026-02-05T23:15:58.513Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-05T23:15:58.515Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-05T23:15:58.625Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:16:03.128Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T23:16:03.129Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a56ec0d..." not found, but found as SHA256 "75a1c0ec18c60bba"
[2026-02-05T23:16:03.129Z] [BOT] ⏭️  Skipping duplicate: JID_2a56ec0d (posted within 7 days)
[2026-02-05T23:16:03.140Z] [BOT] ✅ Loaded pending queue: 197 total (191 pending, 6 enriched, 0 posted)
[2026-02-05T23:16:03.160Z] [BOT] ✅ Saved pending queue: 197 total (191 pending, 5 enriched, 1 posted)
[2026-02-05T23:16:03.160Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T23:16:03.255Z] [BOT] 📂 Loaded 12478 existing routing entries
[2026-02-05T23:16:03.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12479
[2026-02-05T23:16:03.396Z] [BOT] Timestamp: 2026-02-05T23:16:03.342Z
[2026-02-05T23:16:03.396Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T23:16:03.396Z] [BOT] Total attempts: 51
   Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-05T23:16:03.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T23:16:03.397Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌲・JID_efdf5921: 1 posts
[2026-02-05T23:16:03.397Z] [BOT] [STATS] Channel stats saved
[2026-02-05T23:16:03.397Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2248 jobs in memory (cached)
[2026-02-05T23:16:03.448Z] [BOT] ✅ Loaded V2 database: 2248 jobs
💾 DISK STATE: 2248 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2248
[2026-02-05T23:16:03.452Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:16:03.453Z] [BOT] 💾 AFTER MERGE: 2248 jobs (merged disk + memory)
[2026-02-05T23:16:03.454Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-02-05T23:16:03.571Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:16:03.572Z] [BOT] ✅ Database saved successfully
[2026-02-05T23:16:05.597Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*