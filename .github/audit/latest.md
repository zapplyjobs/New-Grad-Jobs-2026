# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T20:33:24.123Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T20:32:55.274Z] ========================================
[2026-02-01T20:32:55.276Z] Discord Bot Execution Log
[2026-02-01T20:32:55.276Z] Environment: GitHub Actions
[2026-02-01T20:32:55.276Z] Node Version: v20.20.0
[2026-02-01T20:32:55.276Z] ========================================
[2026-02-01T20:32:55.276Z] Environment Variables Check:
[2026-02-01T20:32:55.276Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T20:32:55.276Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T20:32:55.276Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T20:32:55.276Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T20:32:55.276Z] 
Multi-Channel Configuration:
[2026-02-01T20:32:55.276Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T20:32:55.276Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.276Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T20:32:55.277Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T20:32:55.277Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T20:32:55.277Z] 
Data Files Check:
[2026-02-01T20:32:55.278Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177495 bytes)
[2026-02-01T20:32:55.351Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10833335 bytes)
[2026-02-01T20:32:55.351Z] 
========================================
[2026-02-01T20:32:55.351Z] Starting Enhanced Discord Bot...
[2026-02-01T20:32:55.351Z] ========================================
[2026-02-01T20:32:55.893Z] [BOT] ✅ Loaded V2 database: 2171 jobs
[2026-02-01T20:32:56.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T20:32:56.295Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T20:32:56.295Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T20:32:56.361Z] [BOT] ✅ Loaded pending queue: 768 total (718 pending, 50 enriched, 0 posted)
[2026-02-01T20:32:56.362Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Product Manager - Notebooks at datadog
[2026-02-01T20:32:56.376Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T20:32:56.376Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Notebooks at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Flex Logs at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Incident Management at datadog
🚫 Skipping blacklisted job: Product Manager II - Software Delivery Suite at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior AI Engineer - APM Experiences at datadog
🚫 Skipping blacklisted job: Senior Associate, Sales Enablement Operations at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Atlassian Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Senior Counsel, Corporate & M&A at datadog
🚫 Skipping blacklisted job: Senior Customer Data Scientist at datadog
🚫 Skipping blacklisted job: Senior Director, Product Design at datadog
🚫 Skipping blacklisted job: Senior Enablement Manager, Emerging Technology at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Enablement Manager - Leadership Development at datadog
🚫 Skipping blacklisted job: Senior FP&A Analyst - NYC at datadog
🚫 Skipping blacklisted job: Senior Manager, People Business Partner - NYC at datadog
🚫 Skipping blacklisted job: Senior Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - Cost and Usage Experience at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Database AI Optimization at datadog
🚫 Skipping blacklisted job: Senior Product Marketing Manager (AI Security) at datadog
🚫 Skipping blacklisted job: Senior Product Marketing Manager (Cloud Cost Management) at datadog
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-02-01T20:32:56.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Engineer, Data Security at datadog
🚫 Skipping blacklisted job: Senior Security Engineer - Threat Detection Engineering at datadog
🚫 Skipping blacklisted job: Senior Software Engineer  at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - AI Code Gen - Agent Engineer at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Frontend at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - IDE AI Experiences - LLM Engineer at datadog
🚫 Skipping blacklisted job: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer  at datadog
🚫 Skipping blacklisted job: Senior Tax Accountant - NYC at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Knowledge Systems at datadog
🚫 Skipping blacklisted job: Staff GenAI Engineer - Application Performance Monitoring (APM) at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - Frontend at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - ML Observability at datadog
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Staff Statistics Engineer - Feature Flagging and Experimentation at datadog
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Growth Marketing Manager, Builders at airtable
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-01T20:32:56.378Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-01T20:32:56.443Z] [BOT] ✅ Loaded pending queue: 768 total (718 pending, 50 enriched, 0 posted)
[2026-02-01T20:32:56.518Z] [BOT] ✅ Saved pending queue: 722 total (718 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (46 blacklisted)
[2026-02-01T20:32:56.518Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-01T20:32:56.519Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-02-01T20:32:56.519Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T20:32:56.521Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T20:32:56.522Z] [BOT] 📍 [ROUTING] "Data Management Analyst 2 – Ideal graduate level role - Ideal graduate level role" @ ORG_88a78b3d
[2026-02-01T20:32:56.522Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T20:32:56.539Z] [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T20:32:56.919Z] [BOT] ✅ Posted message: Data Management Analyst 2 – Ideal graduate level role - Ideal graduate level role @ ORG_88a78b3d in #💻・tech-jobs
[2026-02-01T20:32:56.920Z] [BOT] ✅ Industry: Data Management Analyst 2 – Ideal graduate level role - Ideal graduate level role @ ORG_88a78b3d
[2026-02-01T20:32:56.921Z] [BOT] 💾 Added channel posting: Data Management Analyst 2 – Ideal graduate level role - Ideal graduate level role @ ORG_88a78b3d → category channel (1 total channels)
[2026-02-01T20:32:56.921Z] [BOT] 💾 BEFORE MERGE: 2172 jobs in memory (cached)
[2026-02-01T20:32:56.982Z] [BOT] ✅ Loaded V2 database: 2171 jobs
💾 DISK STATE: 2171 jobs on disk
[2026-02-01T20:32:56.983Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2172
[2026-02-01T20:32:56.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:32:56.988Z] [BOT] 💾 AFTER MERGE: 2172 jobs (merged disk + memory)
[2026-02-01T20:32:56.990Z] [BOT] ✅ No jobs to archive (all 2172 jobs within 7-day window)
[2026-02-01T20:32:57.143Z] [BOT] 💾 Saved posted_jobs.json: 2172 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:01.646Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T20:33:01.648Z] [BOT] 📍 [ROUTING] "GIS Analyst" @ ORG_403109cf Technologies
   Category: FINANCE (matched: "investment")
[2026-02-01T20:33:01.648Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T20:33:02.115Z] [BOT] ✅ Posted message: GIS Analyst @ ORG_403109cf Technologies in #💰・finance-jobs
[2026-02-01T20:33:02.115Z] [BOT] ✅ Industry: GIS Analyst @ ORG_403109cf Technologies
[2026-02-01T20:33:02.116Z] [BOT] 💾 Added channel posting: GIS Analyst @ ORG_403109cf Technologies → category channel (1 total channels)
[2026-02-01T20:33:02.116Z] [BOT] 💾 BEFORE MERGE: 2173 jobs in memory (cached)
[2026-02-01T20:33:02.169Z] [BOT] ✅ Loaded V2 database: 2172 jobs
💾 DISK STATE: 2172 jobs on disk
[2026-02-01T20:33:02.170Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2173
[2026-02-01T20:33:02.174Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:33:02.174Z] [BOT] 💾 AFTER MERGE: 2173 jobs (merged disk + memory)
[2026-02-01T20:33:02.175Z] [BOT] ✅ No jobs to archive (all 2173 jobs within 7-day window)
[2026-02-01T20:33:02.307Z] [BOT] 💾 Saved posted_jobs.json: 2173 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:04.039Z] [BOT] ✅ Posted message: GIS Analyst @ ORG_403109cf Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T20:33:04.039Z] [BOT] 💾 Added channel posting: GIS Analyst @ ORG_403109cf Technologies → location channel (2 total channels)
[2026-02-01T20:33:04.040Z] [BOT] 💾 BEFORE MERGE: 2173 jobs in memory (cached)
[2026-02-01T20:33:04.093Z] [BOT] ✅ Loaded V2 database: 2173 jobs
💾 DISK STATE: 2173 jobs on disk
[2026-02-01T20:33:04.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2173
[2026-02-01T20:33:04.099Z] [BOT] 🔀 Deep merged: GIS Analyst @ ORG_403109cf Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T20:33:04.099Z] [BOT] 💾 AFTER MERGE: 2173 jobs (merged disk + memory)
[2026-02-01T20:33:04.101Z] [BOT] ✅ No jobs to archive (all 2173 jobs within 7-day window)
[2026-02-01T20:33:04.229Z] [BOT] 💾 Saved posted_jobs.json: 2173 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:08.728Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T20:33:08.729Z] [BOT] 📍 [ROUTING] "New Grad - Technology - Data & Analytics" @ ORG_d021e8e8 Financial Holdings
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T20:33:08.729Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T20:33:09.072Z] [BOT] ✅ Posted message: New Grad - Technology - Data & Analytics @ ORG_d021e8e8 Financial Holdings in #📊・JID_fb739488
  ✅ Industry: New Grad - Technology - Data & Analytics @ ORG_d021e8e8 Financial Holdings
[2026-02-01T20:33:09.073Z] [BOT] 💾 Added channel posting: New Grad - Technology - Data & Analytics @ ORG_d021e8e8 Financial Holdings → category channel (1 total channels)
[2026-02-01T20:33:09.074Z] [BOT] 💾 BEFORE MERGE: 2174 jobs in memory (cached)
[2026-02-01T20:33:09.127Z] [BOT] ✅ Loaded V2 database: 2173 jobs
💾 DISK STATE: 2173 jobs on disk
[2026-02-01T20:33:09.128Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2174
[2026-02-01T20:33:09.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2174 jobs (merged disk + memory)
[2026-02-01T20:33:09.134Z] [BOT] ✅ No jobs to archive (all 2174 jobs within 7-day window)
[2026-02-01T20:33:09.267Z] [BOT] 💾 Saved posted_jobs.json: 2174 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:13.766Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T20:33:13.767Z] [BOT] 📍 [ROUTING] "Data Transaction Testing Analyst 2" @ ORG_b93825c5 Bank
   Category: AI (matched: "machine learning")
[2026-02-01T20:33:13.768Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T20:33:14.025Z] [BOT] ✅ Posted message: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank in #🤖・ai-jobs
  ✅ Industry: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank
[2026-02-01T20:33:14.027Z] [BOT] 💾 Added channel posting: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank → category channel (1 total channels)
💾 BEFORE MERGE: 2175 jobs in memory (cached)
[2026-02-01T20:33:14.088Z] [BOT] ✅ Loaded V2 database: 2174 jobs
💾 DISK STATE: 2174 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2175
[2026-02-01T20:33:14.099Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:33:14.099Z] [BOT] 💾 AFTER MERGE: 2175 jobs (merged disk + memory)
[2026-02-01T20:33:14.101Z] [BOT] ✅ No jobs to archive (all 2175 jobs within 7-day window)
[2026-02-01T20:33:14.234Z] [BOT] 💾 Saved posted_jobs.json: 2175 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:15.917Z] [BOT] ✅ Posted message: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T20:33:15.917Z] [BOT] 💾 Added channel posting: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank → location channel (2 total channels)
[2026-02-01T20:33:15.918Z] [BOT] 💾 BEFORE MERGE: 2175 jobs in memory (cached)
[2026-02-01T20:33:15.975Z] [BOT] ✅ Loaded V2 database: 2175 jobs
💾 DISK STATE: 2175 jobs on disk
[2026-02-01T20:33:15.978Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2175
[2026-02-01T20:33:15.988Z] [BOT] 🔀 Deep merged: Data Transaction Testing Analyst 2 @ ORG_b93825c5 Bank (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2175 jobs (merged disk + memory)
[2026-02-01T20:33:15.990Z] [BOT] ✅ No jobs to archive (all 2175 jobs within 7-day window)
[2026-02-01T20:33:16.109Z] [BOT] 💾 Saved posted_jobs.json: 2175 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T20:33:20.611Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-01T20:33:20.612Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9b6dae3a..." not found, but found as SHA256 "477702f48051c4e8"
[2026-02-01T20:33:20.612Z] [BOT] ⏭️  Skipping duplicate: JID_8278d7c4-role_31139800 (posted within 7 days)
[2026-02-01T20:33:20.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5c73fcbb-..." not found, but found as SHA256 "40b605b802d95caa"
[2026-02-01T20:33:20.613Z] [BOT] ⏭️  Skipping duplicate: JID_b42c7fb1-analyst_r8930-1 (posted within 7 days)
[2026-02-01T20:33:20.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_876b355f..." not found, but found as SHA256 "9c46162442e9040b"
[2026-02-01T20:33:20.613Z] [BOT] ⏭️  Skipping duplicate: JID_f8b088be-analytics_r-046208-1 (posted within 7 days)
[2026-02-01T20:33:20.613Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c7a80b..." not found, but found as SHA256 "c3151b075091df88"
[2026-02-01T20:33:20.613Z] [BOT] ⏭️  Skipping duplicate: JID_01fddce9-ii_r0110150 (posted within 7 days)
[2026-02-01T20:33:20.668Z] [BOT] ✅ Loaded pending queue: 722 total (718 pending, 4 enriched, 0 posted)
[2026-02-01T20:33:20.734Z] [BOT] ✅ Saved pending queue: 722 total (718 pending, 0 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T20:33:20.837Z] [BOT] 📂 Loaded 12252 existing routing entries
[2026-02-01T20:33:20.987Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T20:33:20.987Z] [BOT] New entries: 4
   Total entries: 12256
   Timestamp: 2026-02-01T20:33:20.942Z
[2026-02-01T20:33:20.987Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T20:33:20.988Z] [BOT] Total attempts: 52
   Successful: 6
[2026-02-01T20:33:20.988Z] [BOT] Failed: 0
   Skipped: 46
[2026-02-01T20:33:20.988Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T20:33:20.988Z] [BOT] Total posts: 6
   Channels used: 5
   Top channels:
     1. #📍・JID_6daed763: 2 posts
     2. #💻・tech-jobs: 1 posts
     3. #💰・finance-jobs: 1 posts
     4. #📊・JID_fb739488: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-01T20:33:20.988Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2175 jobs in memory (cached)
[2026-02-01T20:33:21.044Z] [BOT] ✅ Loaded V2 database: 2175 jobs
💾 DISK STATE: 2175 jobs on disk
[2026-02-01T20:33:21.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2175
[2026-02-01T20:33:21.049Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T20:33:21.049Z] [BOT] 💾 AFTER MERGE: 2175 jobs (merged disk + memory)
[2026-02-01T20:33:21.050Z] [BOT] ✅ No jobs to archive (all 2175 jobs within 7-day window)
[2026-02-01T20:33:21.185Z] [BOT] 💾 Saved posted_jobs.json: 2175 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T20:33:23.202Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*