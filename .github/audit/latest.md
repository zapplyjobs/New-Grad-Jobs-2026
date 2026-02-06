# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T04:35:36.006Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T04:35:21.032Z] ========================================
[2026-02-06T04:35:21.034Z] Discord Bot Execution Log
[2026-02-06T04:35:21.034Z] Environment: GitHub Actions
[2026-02-06T04:35:21.034Z] Node Version: v20.20.0
[2026-02-06T04:35:21.034Z] ========================================
[2026-02-06T04:35:21.034Z] Environment Variables Check:
[2026-02-06T04:35:21.034Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T04:35:21.035Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T04:35:21.035Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T04:35:21.035Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T04:35:21.035Z] 
Multi-Channel Configuration:
[2026-02-06T04:35:21.035Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T04:35:21.035Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.035Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T04:35:21.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.035Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.035Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.035Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.036Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T04:35:21.036Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T04:35:21.036Z] 
Data Files Check:
[2026-02-06T04:35:21.037Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168676 bytes)
[2026-02-06T04:35:21.093Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11037174 bytes)
[2026-02-06T04:35:21.094Z] 
========================================
[2026-02-06T04:35:21.094Z] Starting Enhanced Discord Bot...
[2026-02-06T04:35:21.094Z] ========================================
[2026-02-06T04:35:21.676Z] [BOT] ✅ Loaded V2 database: 2200 jobs
[2026-02-06T04:35:22.047Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T04:35:22.047Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T04:35:22.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T04:35:22.062Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T04:35:22.062Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T04:35:22.063Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T04:35:22.063Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T04:35:22.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T04:35:22.065Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T04:35:22.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T04:35:22.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T04:35:22.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T04:35:22.083Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-06T04:35:22.084Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-02-06T04:35:22.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-02-06T04:35:22.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-06T04:35:22.085Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-06T04:35:22.103Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T04:35:22.127Z] [BOT] ✅ Saved pending queue: 183 total (175 pending, 8 enriched, 0 posted)
🗑️ Removed 42 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (42 blacklisted)
[2026-02-06T04:35:22.127Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T04:35:22.128Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T04:35:22.128Z] [BOT] ⏸️ Limiting to 10 jobs this run, 42 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T04:35:22.129Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-06T04:35:22.130Z] [BOT] 📍 [ROUTING] "2026 Summer Intern: Data Science" @ ORG_fc457d42
[2026-02-06T04:35:22.130Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T04:35:22.131Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T04:35:22.148Z] [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T04:35:22.478Z] [BOT] ✅ Posted message: 2026 Summer Intern: Data Science @ ORG_fc457d42 in #🤖・ai-jobs
  ✅ Industry: 2026 Summer Intern: Data Science @ ORG_fc457d42
[2026-02-06T04:35:22.479Z] [BOT] 💾 Added channel posting: 2026 Summer Intern: Data Science @ ORG_fc457d42 → category channel (1 total channels)
[2026-02-06T04:35:22.480Z] [BOT] 💾 BEFORE MERGE: 2201 jobs in memory (cached)
[2026-02-06T04:35:22.524Z] [BOT] ✅ Loaded V2 database: 2200 jobs
💾 DISK STATE: 2200 jobs on disk
[2026-02-06T04:35:22.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2201
[2026-02-06T04:35:22.530Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T04:35:22.530Z] [BOT] 💾 AFTER MERGE: 2201 jobs (merged disk + memory)
[2026-02-06T04:35:22.532Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T04:35:22.538Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T04:35:22.538Z] [BOT] ✅ Archiving complete: 10 archived, 2191 active
[2026-02-06T04:35:22.668Z] [BOT] 💾 Saved posted_jobs.json: 2191 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T04:35:24.398Z] [BOT] ✅ Posted message: 2026 Summer Intern: Data Science @ ORG_fc457d42 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T04:35:24.399Z] [BOT] 💾 Added channel posting: 2026 Summer Intern: Data Science @ ORG_fc457d42 → location channel (2 total channels)
[2026-02-06T04:35:24.399Z] [BOT] 💾 BEFORE MERGE: 2191 jobs in memory (cached)
[2026-02-06T04:35:24.445Z] [BOT] ✅ Loaded V2 database: 2191 jobs
[2026-02-06T04:35:24.445Z] [BOT] 💾 DISK STATE: 2191 jobs on disk
[2026-02-06T04:35:24.446Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2191
[2026-02-06T04:35:24.451Z] [BOT] 🔀 Deep merged: 2026 Summer Intern: Data Science @ ORG_fc457d42 (disk: 1 channels → merged: 2 channels)
[2026-02-06T04:35:24.451Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2191 jobs (merged disk + memory)
[2026-02-06T04:35:24.453Z] [BOT] ✅ No jobs to archive (all 2191 jobs within 7-day window)
[2026-02-06T04:35:24.561Z] [BOT] 💾 Saved posted_jobs.json: 2191 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T04:35:26.063Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Engineer, Model Evaluations" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T04:35:26.063Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T04:35:26.310Z] [BOT] ✅ Posted message: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic in #🤖・ai-jobs
[2026-02-06T04:35:26.311Z] [BOT] ✅ Industry: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic
[2026-02-06T04:35:26.311Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic → category channel (1 total channels)
[2026-02-06T04:35:26.311Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-06T04:35:26.349Z] [BOT] ✅ Loaded V2 database: 2191 jobs
💾 DISK STATE: 2191 jobs on disk
[2026-02-06T04:35:26.350Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-06T04:35:26.355Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T04:35:26.355Z] [BOT] 💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-06T04:35:26.356Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-02-06T04:35:26.467Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T04:35:28.178Z] [BOT] ✅ Posted message: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T04:35:28.179Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T04:35:28.179Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic → location channel (2 total channels)
[2026-02-06T04:35:28.179Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-06T04:35:28.218Z] [BOT] ✅ Loaded V2 database: 2192 jobs
💾 DISK STATE: 2192 jobs on disk
[2026-02-06T04:35:28.218Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-06T04:35:28.223Z] [BOT] 🔀 Deep merged: [Expression of Interest] Research Engineer, Model Evaluations @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T04:35:28.223Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-06T04:35:28.224Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-02-06T04:35:28.336Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T04:35:32.838Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T04:35:32.839Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2aa831ed..." not found, but found as SHA256 "25c465942c698ec2"
[2026-02-06T04:35:32.839Z] [BOT] ⏭️  Skipping duplicate: JID_f410f7cd (posted within 7 days)
[2026-02-06T04:35:32.839Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4ef156364680156c"
[2026-02-06T04:35:32.840Z] [BOT] ⏭️  Skipping duplicate: JID_c0cecaa1 (posted within 7 days)
[2026-02-06T04:35:32.850Z] [BOT] ✅ Loaded pending queue: 183 total (175 pending, 8 enriched, 0 posted)
[2026-02-06T04:35:32.869Z] [BOT] ✅ Saved pending queue: 183 total (175 pending, 6 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-06T04:35:32.870Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T04:35:32.982Z] [BOT] 📂 Loaded 12491 existing routing entries
[2026-02-06T04:35:33.107Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12493
[2026-02-06T04:35:33.108Z] [BOT] Timestamp: 2026-02-06T04:35:33.056Z
📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T04:35:33.109Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #📍・JID_6daed763: 1 posts
     3. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T04:35:33.109Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T04:35:33.109Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-06T04:35:33.146Z] [BOT] ✅ Loaded V2 database: 2192 jobs
💾 DISK STATE: 2192 jobs on disk
[2026-02-06T04:35:33.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-06T04:35:33.151Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-06T04:35:33.153Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-02-06T04:35:33.272Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T04:35:35.292Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*