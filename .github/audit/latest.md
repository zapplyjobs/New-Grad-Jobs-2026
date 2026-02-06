# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T07:16:53.151Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T07:16:23.459Z] ========================================
[2026-02-06T07:16:23.461Z] Discord Bot Execution Log
[2026-02-06T07:16:23.461Z] Environment: GitHub Actions
[2026-02-06T07:16:23.461Z] Node Version: v20.20.0
[2026-02-06T07:16:23.461Z] ========================================
[2026-02-06T07:16:23.461Z] Environment Variables Check:
[2026-02-06T07:16:23.461Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T07:16:23.461Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T07:16:23.461Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T07:16:23.461Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T07:16:23.462Z] 
Multi-Channel Configuration:
[2026-02-06T07:16:23.462Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T07:16:23.462Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T07:16:23.462Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T07:16:23.462Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T07:16:23.462Z] 
Data Files Check:
[2026-02-06T07:16:23.464Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168625 bytes)
[2026-02-06T07:16:23.521Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10628946 bytes)
[2026-02-06T07:16:23.521Z] 
========================================
[2026-02-06T07:16:23.521Z] Starting Enhanced Discord Bot...
[2026-02-06T07:16:23.521Z] ========================================
[2026-02-06T07:16:24.092Z] [BOT] ✅ Loaded V2 database: 2151 jobs
[2026-02-06T07:16:24.584Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T07:16:24.584Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T07:16:24.585Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T07:16:24.598Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T07:16:24.599Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T07:16:24.601Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T07:16:24.601Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T07:16:24.601Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T07:16:24.602Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T07:16:24.602Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T07:16:24.602Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T07:16:24.602Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T07:16:24.603Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T07:16:24.603Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T07:16:24.619Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T07:16:24.619Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T07:16:24.619Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-06T07:16:24.619Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-06T07:16:24.619Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Segment Marketing Manager, Financial Services & Insurance at anthropic
🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: SEO Lead at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Staff Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Director, Account Management at discord
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Director, People Business Partners at discord
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Director, Safety Policy at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-02-06T07:16:24.620Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-06T07:16:24.621Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Sales Operations Manager at discord
[2026-02-06T07:16:24.621Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-02-06T07:16:24.621Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-06T07:16:24.621Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
[2026-02-06T07:16:24.621Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-06T07:16:24.637Z] [BOT] ✅ Loaded pending queue: 225 total (175 pending, 50 enriched, 0 posted)
[2026-02-06T07:16:24.660Z] [BOT] ✅ Saved pending queue: 184 total (175 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
[2026-02-06T07:16:24.660Z] [BOT] 📋 After blacklist filter: 5 jobs (41 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T07:16:24.660Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T07:16:24.661Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T07:16:24.663Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-06T07:16:24.665Z] [BOT] 📍 [ROUTING] "Research Engineer/Research Scientist, Audio" @ anthropic
[2026-02-06T07:16:24.665Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T07:16:24.682Z] [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T07:16:24.918Z] [BOT] ✅ Posted message: Research Engineer/Research Scientist, Audio @ anthropic in #🤖・ai-jobs
[2026-02-06T07:16:24.918Z] [BOT] ✅ Industry: Research Engineer/Research Scientist, Audio @ anthropic
[2026-02-06T07:16:24.919Z] [BOT] 💾 Added channel posting: Research Engineer/Research Scientist, Audio @ anthropic → category channel (1 total channels)
[2026-02-06T07:16:24.919Z] [BOT] 💾 BEFORE MERGE: 2152 jobs in memory (cached)
[2026-02-06T07:16:24.961Z] [BOT] ✅ Loaded V2 database: 2151 jobs
💾 DISK STATE: 2151 jobs on disk
[2026-02-06T07:16:24.961Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2152
[2026-02-06T07:16:24.966Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:24.967Z] [BOT] 💾 AFTER MERGE: 2152 jobs (merged disk + memory)
[2026-02-06T07:16:24.968Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T07:16:24.974Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T07:16:24.974Z] [BOT] ✅ Archiving complete: 10 archived, 2142 active
[2026-02-06T07:16:25.100Z] [BOT] 💾 Saved posted_jobs.json: 2142 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:27.141Z] [BOT] ✅ Posted message: Research Engineer/Research Scientist, Audio @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T07:16:27.141Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T07:16:27.141Z] [BOT] 💾 Added channel posting: Research Engineer/Research Scientist, Audio @ anthropic → location channel (2 total channels)
[2026-02-06T07:16:27.142Z] [BOT] 💾 BEFORE MERGE: 2142 jobs in memory (cached)
[2026-02-06T07:16:27.186Z] [BOT] ✅ Loaded V2 database: 2142 jobs
[2026-02-06T07:16:27.186Z] [BOT] 💾 DISK STATE: 2142 jobs on disk
[2026-02-06T07:16:27.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2142
[2026-02-06T07:16:27.192Z] [BOT] 🔀 Deep merged: Research Engineer/Research Scientist, Audio @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T07:16:27.192Z] [BOT] 💾 AFTER MERGE: 2142 jobs (merged disk + memory)
[2026-02-06T07:16:27.194Z] [BOT] ✅ No jobs to archive (all 2142 jobs within 7-day window)
[2026-02-06T07:16:27.300Z] [BOT] 💾 Saved posted_jobs.json: 2142 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:28.803Z] [BOT] 📍 [ROUTING] "Google GTM Cosell Partnerships" @ anthropic
[2026-02-06T07:16:28.803Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-02-06T07:16:29.023Z] [BOT] ✅ Posted message: Google GTM Cosell Partnerships @ anthropic in #🤖・ai-jobs
[2026-02-06T07:16:29.023Z] [BOT] ✅ Industry: Google GTM Cosell Partnerships @ anthropic
[2026-02-06T07:16:29.024Z] [BOT] 💾 Added channel posting: Google GTM Cosell Partnerships @ anthropic → category channel (1 total channels)
[2026-02-06T07:16:29.024Z] [BOT] 💾 BEFORE MERGE: 2143 jobs in memory (cached)
[2026-02-06T07:16:29.061Z] [BOT] ✅ Loaded V2 database: 2142 jobs
💾 DISK STATE: 2142 jobs on disk
[2026-02-06T07:16:29.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2143
[2026-02-06T07:16:29.066Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:29.066Z] [BOT] 💾 AFTER MERGE: 2143 jobs (merged disk + memory)
[2026-02-06T07:16:29.068Z] [BOT] ✅ No jobs to archive (all 2143 jobs within 7-day window)
[2026-02-06T07:16:29.175Z] [BOT] 💾 Saved posted_jobs.json: 2143 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:30.851Z] [BOT] ✅ Posted message: Google GTM Cosell Partnerships @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T07:16:30.852Z] [BOT] 💾 Added channel posting: Google GTM Cosell Partnerships @ anthropic → location channel (2 total channels)
[2026-02-06T07:16:30.852Z] [BOT] 💾 BEFORE MERGE: 2143 jobs in memory (cached)
[2026-02-06T07:16:30.889Z] [BOT] ✅ Loaded V2 database: 2143 jobs
💾 DISK STATE: 2143 jobs on disk
[2026-02-06T07:16:30.889Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2143
[2026-02-06T07:16:30.895Z] [BOT] 🔀 Deep merged: Google GTM Cosell Partnerships @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T07:16:30.895Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2143 jobs (merged disk + memory)
[2026-02-06T07:16:30.896Z] [BOT] ✅ No jobs to archive (all 2143 jobs within 7-day window)
[2026-02-06T07:16:31.003Z] [BOT] 💾 Saved posted_jobs.json: 2143 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:35.504Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T07:16:35.505Z] [BOT] 📍 [ROUTING] "Recruiting Systems Analyst" @ anthropic
   Category: TECH (default)
[2026-02-06T07:16:35.505Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T07:16:35.774Z] [BOT] ✅ Posted message: Recruiting Systems Analyst @ anthropic in #💻・tech-jobs
  ✅ Industry: Recruiting Systems Analyst @ anthropic
[2026-02-06T07:16:35.775Z] [BOT] 💾 Added channel posting: Recruiting Systems Analyst @ anthropic → category channel (1 total channels)
[2026-02-06T07:16:35.775Z] [BOT] 💾 BEFORE MERGE: 2144 jobs in memory (cached)
[2026-02-06T07:16:35.819Z] [BOT] ✅ Loaded V2 database: 2143 jobs
💾 DISK STATE: 2143 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2144
[2026-02-06T07:16:35.829Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:35.829Z] [BOT] 💾 AFTER MERGE: 2144 jobs (merged disk + memory)
[2026-02-06T07:16:35.831Z] [BOT] ✅ No jobs to archive (all 2144 jobs within 7-day window)
[2026-02-06T07:16:35.939Z] [BOT] 💾 Saved posted_jobs.json: 2144 active jobs
[2026-02-06T07:16:35.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:37.612Z] [BOT] ✅ Posted message: Recruiting Systems Analyst @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T07:16:37.612Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T07:16:37.612Z] [BOT] 💾 Added channel posting: Recruiting Systems Analyst @ anthropic → location channel (2 total channels)
[2026-02-06T07:16:37.612Z] [BOT] 💾 BEFORE MERGE: 2144 jobs in memory (cached)
[2026-02-06T07:16:37.657Z] [BOT] ✅ Loaded V2 database: 2144 jobs
💾 DISK STATE: 2144 jobs on disk
[2026-02-06T07:16:37.657Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2144
[2026-02-06T07:16:37.662Z] [BOT] 🔀 Deep merged: Recruiting Systems Analyst @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T07:16:37.662Z] [BOT] 💾 AFTER MERGE: 2144 jobs (merged disk + memory)
[2026-02-06T07:16:37.664Z] [BOT] ✅ No jobs to archive (all 2144 jobs within 7-day window)
[2026-02-06T07:16:37.766Z] [BOT] 💾 Saved posted_jobs.json: 2144 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:39.267Z] [BOT] 📍 [ROUTING] "Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months" @ ORG_676c471b of Montreal
[2026-02-06T07:16:39.267Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T07:16:39.493Z] [BOT] ✅ Posted message: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal in #💻・tech-jobs
[2026-02-06T07:16:39.493Z] [BOT] ✅ Industry: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal
[2026-02-06T07:16:39.493Z] [BOT] 💾 Added channel posting: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal → category channel (1 total channels)
[2026-02-06T07:16:39.494Z] [BOT] 💾 BEFORE MERGE: 2145 jobs in memory (cached)
[2026-02-06T07:16:39.530Z] [BOT] ✅ Loaded V2 database: 2144 jobs
💾 DISK STATE: 2144 jobs on disk
[2026-02-06T07:16:39.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2145
[2026-02-06T07:16:39.534Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:39.534Z] [BOT] 💾 AFTER MERGE: 2145 jobs (merged disk + memory)
[2026-02-06T07:16:39.536Z] [BOT] ✅ No jobs to archive (all 2145 jobs within 7-day window)
[2026-02-06T07:16:39.638Z] [BOT] 💾 Saved posted_jobs.json: 2145 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:41.386Z] [BOT] ✅ Posted message: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal in #🗽・JID_98d4f0de
[2026-02-06T07:16:41.386Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T07:16:41.387Z] [BOT] 💾 Added channel posting: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal → location channel (2 total channels)
[2026-02-06T07:16:41.387Z] [BOT] 💾 BEFORE MERGE: 2145 jobs in memory (cached)
[2026-02-06T07:16:41.424Z] [BOT] ✅ Loaded V2 database: 2145 jobs
💾 DISK STATE: 2145 jobs on disk
[2026-02-06T07:16:41.424Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2145
[2026-02-06T07:16:41.429Z] [BOT] 🔀 Deep merged: Junior Software Developer, Summer 2026 (Co-op/Internship) - 4 Months @ ORG_676c471b of Montreal (disk: 1 channels → merged: 2 channels)
[2026-02-06T07:16:41.429Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2145 jobs (merged disk + memory)
[2026-02-06T07:16:41.430Z] [BOT] ✅ No jobs to archive (all 2145 jobs within 7-day window)
[2026-02-06T07:16:41.545Z] [BOT] 💾 Saved posted_jobs.json: 2145 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:43.048Z] [BOT] 📍 [ROUTING] "Engineer Intern" @ ORG_6deb3567 of Pennsylvania
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T07:16:43.308Z] [BOT] ✅ Posted message: Engineer Intern @ ORG_6deb3567 of Pennsylvania in #💻・tech-jobs
  ✅ Industry: Engineer Intern @ ORG_6deb3567 of Pennsylvania
[2026-02-06T07:16:43.309Z] [BOT] 💾 Added channel posting: Engineer Intern @ ORG_6deb3567 of Pennsylvania → category channel (1 total channels)
[2026-02-06T07:16:43.309Z] [BOT] 💾 BEFORE MERGE: 2146 jobs in memory (cached)
[2026-02-06T07:16:43.345Z] [BOT] ✅ Loaded V2 database: 2145 jobs
💾 DISK STATE: 2145 jobs on disk
[2026-02-06T07:16:43.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2146
[2026-02-06T07:16:43.350Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:43.350Z] [BOT] 💾 AFTER MERGE: 2146 jobs (merged disk + memory)
[2026-02-06T07:16:43.351Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-02-06T07:16:43.448Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:45.227Z] [BOT] ✅ Posted message: Engineer Intern @ ORG_6deb3567 of Pennsylvania in #📍・JID_6daed763
[2026-02-06T07:16:45.227Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T07:16:45.228Z] [BOT] 💾 Added channel posting: Engineer Intern @ ORG_6deb3567 of Pennsylvania → location channel (2 total channels)
[2026-02-06T07:16:45.228Z] [BOT] 💾 BEFORE MERGE: 2146 jobs in memory (cached)
[2026-02-06T07:16:45.265Z] [BOT] ✅ Loaded V2 database: 2146 jobs
💾 DISK STATE: 2146 jobs on disk
[2026-02-06T07:16:45.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2146
[2026-02-06T07:16:45.270Z] [BOT] 🔀 Deep merged: Engineer Intern @ ORG_6deb3567 of Pennsylvania (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T07:16:45.270Z] [BOT] 💾 AFTER MERGE: 2146 jobs (merged disk + memory)
[2026-02-06T07:16:45.271Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-02-06T07:16:45.377Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T07:16:49.878Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T07:16:49.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-06T07:16:49.880Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
[2026-02-06T07:16:49.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "aac052cc9fcbe497"
⏭️  Skipping duplicate: JID_a100ab7f (posted within 7 days)
[2026-02-06T07:16:49.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_71ace175..." not found, but found as SHA256 "3b5847209237f387"
⏭️  Skipping duplicate: JID_3703abcf (posted within 7 days)
[2026-02-06T07:16:49.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_295a2c51..." not found, but found as SHA256 "9f43cc461fcba2ed"
[2026-02-06T07:16:49.882Z] [BOT] ⏭️  Skipping duplicate: JID_b929545f (posted within 7 days)
[2026-02-06T07:16:49.892Z] [BOT] ✅ Loaded pending queue: 184 total (175 pending, 9 enriched, 0 posted)
[2026-02-06T07:16:49.911Z] [BOT] ✅ Saved pending queue: 184 total (175 pending, 4 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-02-06T07:16:49.911Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T07:16:50.022Z] [BOT] 📂 Loaded 12502 existing routing entries
[2026-02-06T07:16:50.144Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T07:16:50.144Z] [BOT] Total entries: 12507
   Timestamp: 2026-02-06T07:16:50.092Z
[2026-02-06T07:16:50.144Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T07:16:50.145Z] [BOT] Total attempts: 55
   Successful: 10
   Failed: 0
   Skipped: 45
[2026-02-06T07:16:50.145Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 5
[2026-02-06T07:16:50.145Z] [BOT] Top channels:
     1. #🌉・JID_739bbc0b: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 2 posts
[2026-02-06T07:16:50.145Z] [BOT] 4. #🗽・JID_98d4f0de: 1 posts
     5. #📍・JID_6daed763: 1 posts
[2026-02-06T07:16:50.145Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2146 jobs in memory (cached)
[2026-02-06T07:16:50.182Z] [BOT] ✅ Loaded V2 database: 2146 jobs
💾 DISK STATE: 2146 jobs on disk
[2026-02-06T07:16:50.183Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2146
[2026-02-06T07:16:50.187Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T07:16:50.187Z] [BOT] 💾 AFTER MERGE: 2146 jobs (merged disk + memory)
[2026-02-06T07:16:50.189Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-02-06T07:16:50.306Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T07:16:52.328Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*