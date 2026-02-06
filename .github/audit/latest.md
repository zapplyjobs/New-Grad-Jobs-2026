# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T15:25:34.724Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T15:25:07.225Z] ========================================
[2026-02-06T15:25:07.226Z] Discord Bot Execution Log
[2026-02-06T15:25:07.227Z] Environment: GitHub Actions
[2026-02-06T15:25:07.227Z] Node Version: v20.20.0
[2026-02-06T15:25:07.227Z] ========================================
[2026-02-06T15:25:07.227Z] Environment Variables Check:
[2026-02-06T15:25:07.227Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T15:25:07.227Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T15:25:07.227Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T15:25:07.227Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T15:25:07.227Z] 
Multi-Channel Configuration:
[2026-02-06T15:25:07.227Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T15:25:07.228Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T15:25:07.228Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T15:25:07.228Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T15:25:07.228Z] 
Data Files Check:
[2026-02-06T15:25:07.229Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161605 bytes)
[2026-02-06T15:25:07.283Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9670882 bytes)
[2026-02-06T15:25:07.283Z] 
========================================
[2026-02-06T15:25:07.283Z] Starting Enhanced Discord Bot...
[2026-02-06T15:25:07.283Z] ========================================
[2026-02-06T15:25:07.860Z] [BOT] ✅ Loaded V2 database: 2001 jobs
[2026-02-06T15:25:08.447Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T15:25:08.447Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T15:25:08.447Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T15:25:08.462Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T15:25:08.462Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T15:25:08.464Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T15:25:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T15:25:08.464Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T15:25:08.464Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T15:25:08.465Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T15:25:08.481Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T15:25:08.481Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-06T15:25:08.482Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-06T15:25:08.483Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-06T15:25:08.483Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-06T15:25:08.483Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-06T15:25:08.483Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T15:25:08.483Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-06T15:25:08.495Z] [BOT] ✅ Loaded pending queue: 220 total (170 pending, 50 enriched, 0 posted)
[2026-02-06T15:25:08.520Z] [BOT] ✅ Saved pending queue: 176 total (170 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (44 blacklisted)
[2026-02-06T15:25:08.521Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-06T15:25:08.521Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-02-06T15:25:08.521Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T15:25:08.524Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-06T15:25:08.525Z] [BOT] 📍 [ROUTING] "Intern - Enterprise Data Analyst" @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota
[2026-02-06T15:25:08.525Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T15:25:08.542Z] [BOT ERROR] (node:2628) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T15:25:08.944Z] [BOT] ✅ Posted message: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota in #📊・JID_fb739488
[2026-02-06T15:25:08.944Z] [BOT] ✅ Industry: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota
[2026-02-06T15:25:08.945Z] [BOT] 💾 Added channel posting: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota → category channel (1 total channels)
[2026-02-06T15:25:08.945Z] [BOT] 💾 BEFORE MERGE: 2002 jobs in memory (cached)
[2026-02-06T15:25:08.985Z] [BOT] ✅ Loaded V2 database: 2001 jobs
💾 DISK STATE: 2001 jobs on disk
[2026-02-06T15:25:08.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2002
[2026-02-06T15:25:08.990Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:25:08.990Z] [BOT] 💾 AFTER MERGE: 2002 jobs (merged disk + memory)
[2026-02-06T15:25:08.992Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T15:25:08.998Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T15:25:08.998Z] [BOT] ✅ Archiving complete: 20 archived, 1982 active
[2026-02-06T15:25:09.096Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:10.894Z] [BOT] ✅ Posted message: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota in #📍・JID_6daed763
[2026-02-06T15:25:10.894Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T15:25:10.895Z] [BOT] 💾 Added channel posting: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota → location channel (2 total channels)
[2026-02-06T15:25:10.895Z] [BOT] 💾 BEFORE MERGE: 1982 jobs in memory (cached)
[2026-02-06T15:25:10.933Z] [BOT] ✅ Loaded V2 database: 1982 jobs
[2026-02-06T15:25:10.936Z] [BOT] 💾 DISK STATE: 1982 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1982
[2026-02-06T15:25:10.942Z] [BOT] 🔀 Deep merged: Intern - Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota (disk: 1 channels → merged: 2 channels)
[2026-02-06T15:25:10.942Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1982 jobs (merged disk + memory)
[2026-02-06T15:25:10.944Z] [BOT] ✅ No jobs to archive (all 1982 jobs within 7-day window)
[2026-02-06T15:25:11.051Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:12.551Z] [BOT] 📍 [ROUTING] "Account Executive - Media & Entertainment" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T15:25:12.783Z] [BOT] ✅ Posted message: Account Executive - Media & Entertainment @ discord in #📊・JID_fb739488
[2026-02-06T15:25:12.783Z] [BOT] ✅ Industry: Account Executive - Media & Entertainment @ discord
[2026-02-06T15:25:12.783Z] [BOT] 💾 Added channel posting: Account Executive - Media & Entertainment @ discord → category channel (1 total channels)
[2026-02-06T15:25:12.784Z] [BOT] 💾 BEFORE MERGE: 1983 jobs in memory (cached)
[2026-02-06T15:25:12.815Z] [BOT] ✅ Loaded V2 database: 1982 jobs
💾 DISK STATE: 1982 jobs on disk
[2026-02-06T15:25:12.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1983
[2026-02-06T15:25:12.820Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:25:12.820Z] [BOT] 💾 AFTER MERGE: 1983 jobs (merged disk + memory)
[2026-02-06T15:25:12.821Z] [BOT] ✅ No jobs to archive (all 1983 jobs within 7-day window)
[2026-02-06T15:25:12.918Z] [BOT] 💾 Saved posted_jobs.json: 1983 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:17.419Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T15:25:17.421Z] [BOT] 📍 [ROUTING] "Content Technologist (Temporary)" @ discord
[2026-02-06T15:25:17.421Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T15:25:17.665Z] [BOT] ✅ Posted message: Content Technologist (Temporary) @ discord in #💻・tech-jobs
[2026-02-06T15:25:17.665Z] [BOT] ✅ Industry: Content Technologist (Temporary) @ discord
[2026-02-06T15:25:17.666Z] [BOT] 💾 Added channel posting: Content Technologist (Temporary) @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 1984 jobs in memory (cached)
[2026-02-06T15:25:17.704Z] [BOT] ✅ Loaded V2 database: 1983 jobs
💾 DISK STATE: 1983 jobs on disk
[2026-02-06T15:25:17.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1984
[2026-02-06T15:25:17.713Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:25:17.713Z] [BOT] 💾 AFTER MERGE: 1984 jobs (merged disk + memory)
[2026-02-06T15:25:17.717Z] [BOT] ✅ No jobs to archive (all 1984 jobs within 7-day window)
[2026-02-06T15:25:17.824Z] [BOT] 💾 Saved posted_jobs.json: 1984 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:19.610Z] [BOT] ✅ Posted message: Content Technologist (Temporary) @ discord in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-06T15:25:19.611Z] [BOT] 💾 Added channel posting: Content Technologist (Temporary) @ discord → location channel (2 total channels)
[2026-02-06T15:25:19.611Z] [BOT] 💾 BEFORE MERGE: 1984 jobs in memory (cached)
[2026-02-06T15:25:19.643Z] [BOT] ✅ Loaded V2 database: 1984 jobs
💾 DISK STATE: 1984 jobs on disk
[2026-02-06T15:25:19.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1984
[2026-02-06T15:25:19.647Z] [BOT] 🔀 Deep merged: Content Technologist (Temporary) @ discord (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T15:25:19.647Z] [BOT] 💾 AFTER MERGE: 1984 jobs (merged disk + memory)
[2026-02-06T15:25:19.648Z] [BOT] ✅ No jobs to archive (all 1984 jobs within 7-day window)
[2026-02-06T15:25:19.751Z] [BOT] 💾 Saved posted_jobs.json: 1984 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:24.252Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T15:25:24.254Z] [BOT] 📍 [ROUTING] "Data Scientist - Music Mission" @ spotify
[2026-02-06T15:25:24.254Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T15:25:24.513Z] [BOT] ✅ Posted message: Data Scientist - Music Mission @ spotify in #🤖・ai-jobs
[2026-02-06T15:25:24.513Z] [BOT] ✅ Industry: Data Scientist - Music Mission @ spotify
[2026-02-06T15:25:24.513Z] [BOT] 💾 Added channel posting: Data Scientist - Music Mission @ spotify → category channel (1 total channels)
[2026-02-06T15:25:24.513Z] [BOT] 💾 BEFORE MERGE: 1985 jobs in memory (cached)
[2026-02-06T15:25:24.546Z] [BOT] ✅ Loaded V2 database: 1984 jobs
💾 DISK STATE: 1984 jobs on disk
[2026-02-06T15:25:24.547Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1985
[2026-02-06T15:25:24.551Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:25:24.551Z] [BOT] 💾 AFTER MERGE: 1985 jobs (merged disk + memory)
[2026-02-06T15:25:24.552Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-02-06T15:25:24.654Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:26.365Z] [BOT] ✅ Posted message: Data Scientist - Music Mission @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T15:25:26.366Z] [BOT] 💾 Added channel posting: Data Scientist - Music Mission @ spotify → location channel (2 total channels)
[2026-02-06T15:25:26.366Z] [BOT] 💾 BEFORE MERGE: 1985 jobs in memory (cached)
[2026-02-06T15:25:26.398Z] [BOT] ✅ Loaded V2 database: 1985 jobs
💾 DISK STATE: 1985 jobs on disk
[2026-02-06T15:25:26.398Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1985
[2026-02-06T15:25:26.402Z] [BOT] 🔀 Deep merged: Data Scientist - Music Mission @ spotify (disk: 1 channels → merged: 2 channels)
[2026-02-06T15:25:26.402Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1985 jobs (merged disk + memory)
[2026-02-06T15:25:26.404Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-02-06T15:25:26.500Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T15:25:31.003Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-06T15:25:31.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6188d235..." not found, but found as SHA256 "eadb13e48903e526"
[2026-02-06T15:25:31.004Z] [BOT] ⏭️  Skipping duplicate: JID_7c90dcab (posted within 7 days)
[2026-02-06T15:25:31.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "5a338c47eabdb7c2"
[2026-02-06T15:25:31.005Z] [BOT] ⏭️  Skipping duplicate: JID_570efb88 (posted within 7 days)
[2026-02-06T15:25:31.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "624574085400e708"
⏭️  Skipping duplicate: JID_faed522a (posted within 7 days)
[2026-02-06T15:25:31.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8cd70501..." not found, but found as SHA256 "a0ebb1daa5ca23df"
[2026-02-06T15:25:31.006Z] [BOT] ⏭️  Skipping duplicate: JID_cee62397 (posted within 7 days)
[2026-02-06T15:25:31.015Z] [BOT] ✅ Loaded pending queue: 176 total (170 pending, 6 enriched, 0 posted)
[2026-02-06T15:25:31.031Z] [BOT] ✅ Saved pending queue: 176 total (170 pending, 2 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-02-06T15:25:31.031Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T15:25:31.125Z] [BOT] 📂 Loaded 12550 existing routing entries
[2026-02-06T15:25:31.261Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-02-06T15:25:31.261Z] [BOT] Total entries: 12554
   Timestamp: 2026-02-06T15:25:31.205Z
[2026-02-06T15:25:31.262Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 53
[2026-02-06T15:25:31.262Z] [BOT] Successful: 7
   Failed: 0
   Skipped: 46
[2026-02-06T15:25:31.262Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 6
   Top channels:
     1. #📊・JID_fb739488: 2 posts
     2. #📍・JID_6daed763: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-06T15:25:31.262Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1985 jobs in memory (cached)
[2026-02-06T15:25:31.308Z] [BOT] ✅ Loaded V2 database: 1985 jobs
💾 DISK STATE: 1985 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1985
[2026-02-06T15:25:31.311Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T15:25:31.311Z] [BOT] 💾 AFTER MERGE: 1985 jobs (merged disk + memory)
[2026-02-06T15:25:31.312Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-02-06T15:25:31.421Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T15:25:33.440Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2628) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*