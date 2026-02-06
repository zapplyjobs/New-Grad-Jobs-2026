# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T11:11:05.733Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T11:10:46.424Z] ========================================
[2026-02-06T11:10:46.426Z] Discord Bot Execution Log
[2026-02-06T11:10:46.426Z] Environment: GitHub Actions
[2026-02-06T11:10:46.426Z] Node Version: v20.20.0
[2026-02-06T11:10:46.426Z] ========================================
[2026-02-06T11:10:46.426Z] Environment Variables Check:
[2026-02-06T11:10:46.426Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T11:10:46.426Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T11:10:46.426Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T11:10:46.426Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T11:10:46.426Z] 
Multi-Channel Configuration:
[2026-02-06T11:10:46.427Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T11:10:46.427Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T11:10:46.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:10:46.427Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T11:10:46.427Z] 
Data Files Check:
[2026-02-06T11:10:46.429Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167115 bytes)
[2026-02-06T11:10:46.483Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10021876 bytes)
[2026-02-06T11:10:46.483Z] 
========================================
[2026-02-06T11:10:46.483Z] Starting Enhanced Discord Bot...
[2026-02-06T11:10:46.483Z] ========================================
[2026-02-06T11:10:47.064Z] [BOT] ✅ Loaded V2 database: 2059 jobs
[2026-02-06T11:10:47.767Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T11:10:47.767Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T11:10:47.768Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T11:10:47.782Z] [BOT] ✅ Loaded pending queue: 230 total (180 pending, 50 enriched, 0 posted)
[2026-02-06T11:10:47.782Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T11:10:47.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T11:10:47.784Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T11:10:47.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T11:10:47.785Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T11:10:47.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T11:10:47.786Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T11:10:47.803Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
[2026-02-06T11:10:47.803Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
🚫 Skipping blacklisted job: SEO Lead at anthropic
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-06T11:10:47.804Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-06T11:10:47.820Z] [BOT] ✅ Loaded pending queue: 230 total (180 pending, 50 enriched, 0 posted)
[2026-02-06T11:10:47.843Z] [BOT] ✅ Saved pending queue: 187 total (180 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (43 blacklisted)
[2026-02-06T11:10:47.843Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-06T11:10:47.843Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
⏸️ Limiting to 10 jobs this run, 43 deferred for next run
[2026-02-06T11:10:47.844Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T11:10:47.846Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T11:10:47.847Z] [BOT] 📍 [ROUTING] "ETL Programmer" @ ORG_2f17a0f8 via Dice
[2026-02-06T11:10:47.848Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:10:47.864Z] [BOT ERROR] (node:2569) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T11:10:48.331Z] [BOT] ✅ Posted message: ETL Programmer @ ORG_2f17a0f8 via Dice in #💻・tech-jobs
[2026-02-06T11:10:48.331Z] [BOT] ✅ Industry: ETL Programmer @ ORG_2f17a0f8 via Dice
[2026-02-06T11:10:48.332Z] [BOT] 💾 Added channel posting: ETL Programmer @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-06T11:10:48.332Z] [BOT] 💾 BEFORE MERGE: 2060 jobs in memory (cached)
[2026-02-06T11:10:48.372Z] [BOT] ✅ Loaded V2 database: 2059 jobs
💾 DISK STATE: 2059 jobs on disk
[2026-02-06T11:10:48.373Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2060
[2026-02-06T11:10:48.377Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:10:48.377Z] [BOT] 💾 AFTER MERGE: 2060 jobs (merged disk + memory)
[2026-02-06T11:10:48.379Z] [BOT] ✅ No jobs to archive (all 2060 jobs within 7-day window)
[2026-02-06T11:10:48.487Z] [BOT] 💾 Saved posted_jobs.json: 2060 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:10:50.207Z] [BOT] ✅ Posted message: ETL Programmer @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
[2026-02-06T11:10:50.207Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T11:10:50.207Z] [BOT] 💾 Added channel posting: ETL Programmer @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-06T11:10:50.208Z] [BOT] 💾 BEFORE MERGE: 2060 jobs in memory (cached)
[2026-02-06T11:10:50.248Z] [BOT] ✅ Loaded V2 database: 2060 jobs
💾 DISK STATE: 2060 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2060
[2026-02-06T11:10:50.255Z] [BOT] 🔀 Deep merged: ETL Programmer @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:10:50.255Z] [BOT] 💾 AFTER MERGE: 2060 jobs (merged disk + memory)
[2026-02-06T11:10:50.257Z] [BOT] ✅ No jobs to archive (all 2060 jobs within 7-day window)
[2026-02-06T11:10:50.367Z] [BOT] 💾 Saved posted_jobs.json: 2060 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:10:54.867Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-06T11:10:54.869Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Salt Lake City" @ verkada
[2026-02-06T11:10:54.869Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T11:10:55.154Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Salt Lake City @ verkada in #💰・finance-jobs
[2026-02-06T11:10:55.154Z] [BOT] ✅ Industry: Sales Development Representative (AAE), Salt Lake City @ verkada
[2026-02-06T11:10:55.155Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Salt Lake City @ verkada → category channel (1 total channels)
[2026-02-06T11:10:55.155Z] [BOT] 💾 BEFORE MERGE: 2061 jobs in memory (cached)
[2026-02-06T11:10:55.188Z] [BOT] ✅ Loaded V2 database: 2060 jobs
[2026-02-06T11:10:55.188Z] [BOT] 💾 DISK STATE: 2060 jobs on disk
[2026-02-06T11:10:55.188Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2061
[2026-02-06T11:10:55.193Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:10:55.193Z] [BOT] 💾 AFTER MERGE: 2061 jobs (merged disk + memory)
[2026-02-06T11:10:55.194Z] [BOT] ✅ No jobs to archive (all 2061 jobs within 7-day window)
[2026-02-06T11:10:55.308Z] [BOT] 💾 Saved posted_jobs.json: 2061 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:10:56.810Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T11:10:57.082Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T11:10:57.084Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 2062 jobs in memory (cached)
[2026-02-06T11:10:57.118Z] [BOT] ✅ Loaded V2 database: 2061 jobs
💾 DISK STATE: 2061 jobs on disk
[2026-02-06T11:10:57.119Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2062
[2026-02-06T11:10:57.123Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:10:57.123Z] [BOT] 💾 AFTER MERGE: 2062 jobs (merged disk + memory)
[2026-02-06T11:10:57.125Z] [BOT] ✅ No jobs to archive (all 2062 jobs within 7-day window)
[2026-02-06T11:10:57.237Z] [BOT] 💾 Saved posted_jobs.json: 2062 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:11:01.737Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-06T11:11:01.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb1ebf0b..." not found, but found as SHA256 "178505444fced4d5"
[2026-02-06T11:11:01.739Z] [BOT] ⏭️  Skipping duplicate: JID_198479ed (posted within 7 days)
[2026-02-06T11:11:01.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "6de0e820e860e0e7"
[2026-02-06T11:11:01.739Z] [BOT] ⏭️  Skipping duplicate: JID_f3eebe33 (posted within 7 days)
[2026-02-06T11:11:01.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "b18b5e7af525a8df"
[2026-02-06T11:11:01.740Z] [BOT] ⏭️  Skipping duplicate: JID_4d42ce78 (posted within 7 days)
[2026-02-06T11:11:01.750Z] [BOT] ✅ Loaded pending queue: 187 total (180 pending, 7 enriched, 0 posted)
[2026-02-06T11:11:01.767Z] [BOT] ✅ Saved pending queue: 187 total (180 pending, 4 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-02-06T11:11:01.767Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T11:11:01.877Z] [BOT] 📂 Loaded 12520 existing routing entries
[2026-02-06T11:11:02.001Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12523
[2026-02-06T11:11:02.001Z] [BOT] Timestamp: 2026-02-06T11:11:01.948Z
[2026-02-06T11:11:02.001Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T11:11:02.002Z] [BOT] Total attempts: 51
   Successful: 4
   Failed: 0
   Skipped: 47
[2026-02-06T11:11:02.002Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
[2026-02-06T11:11:02.002Z] [BOT] Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 2 posts
[2026-02-06T11:11:02.002Z] [BOT] 2. #💻・tech-jobs: 1 posts
     3. #📍・JID_6daed763: 1 posts
[2026-02-06T11:11:02.002Z] [BOT] [STATS] Channel stats saved
[2026-02-06T11:11:02.002Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2062 jobs in memory (cached)
[2026-02-06T11:11:02.055Z] [BOT] ✅ Loaded V2 database: 2062 jobs
💾 DISK STATE: 2062 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2062
[2026-02-06T11:11:02.058Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:11:02.058Z] [BOT] 💾 AFTER MERGE: 2062 jobs (merged disk + memory)
[2026-02-06T11:11:02.060Z] [BOT] ✅ No jobs to archive (all 2062 jobs within 7-day window)
[2026-02-06T11:11:02.182Z] [BOT] 💾 Saved posted_jobs.json: 2062 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T11:11:04.202Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2569) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*