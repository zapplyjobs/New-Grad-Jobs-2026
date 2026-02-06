# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T18:39:08.678Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T18:38:30.172Z] ========================================
[2026-02-06T18:38:30.174Z] Discord Bot Execution Log
[2026-02-06T18:38:30.174Z] Environment: GitHub Actions
[2026-02-06T18:38:30.174Z] Node Version: v20.20.0
[2026-02-06T18:38:30.174Z] ========================================
[2026-02-06T18:38:30.174Z] Environment Variables Check:
[2026-02-06T18:38:30.174Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T18:38:30.174Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T18:38:30.174Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T18:38:30.175Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T18:38:30.175Z] 
Multi-Channel Configuration:
[2026-02-06T18:38:30.175Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T18:38:30.175Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T18:38:30.175Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T18:38:30.175Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T18:38:30.175Z] 
Data Files Check:
[2026-02-06T18:38:30.177Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141502 bytes)
[2026-02-06T18:38:30.228Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9155768 bytes)
[2026-02-06T18:38:30.228Z] 
========================================
[2026-02-06T18:38:30.228Z] Starting Enhanced Discord Bot...
[2026-02-06T18:38:30.228Z] ========================================
[2026-02-06T18:38:30.798Z] [BOT] ✅ Loaded V2 database: 1918 jobs
[2026-02-06T18:38:32.172Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T18:38:32.172Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T18:38:32.173Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T18:38:32.191Z] [BOT] ✅ Loaded pending queue: 235 total (185 pending, 50 enriched, 0 posted)
[2026-02-06T18:38:32.191Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T18:38:32.192Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T18:38:32.193Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T18:38:32.193Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T18:38:32.193Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T18:38:32.209Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T18:38:32.210Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T18:38:32.211Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-06T18:38:32.211Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T18:38:32.211Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Staff Brand Designer at brex
[2026-02-06T18:38:32.211Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T18:38:32.232Z] [BOT] ✅ Loaded pending queue: 235 total (185 pending, 50 enriched, 0 posted)
[2026-02-06T18:38:32.258Z] [BOT] ✅ Saved pending queue: 198 total (185 pending, 13 enriched, 0 posted)
🗑️ Removed 37 blacklisted jobs from pending queue
[2026-02-06T18:38:32.259Z] [BOT] 📋 After blacklist filter: 11 jobs (37 blacklisted)
📋 After data quality filter: 11 jobs (0 invalid)
[2026-02-06T18:38:32.259Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-02-06T18:38:32.259Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T18:38:32.264Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T18:38:32.265Z] [BOT] 📍 [ROUTING] "Associate or Experienced Software Quality Engineer" @ ORG_6181447bing
[2026-02-06T18:38:32.265Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-06T18:38:32.265Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T18:38:32.282Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T18:38:32.801Z] [BOT] ✅ Posted message: Associate or Experienced Software Quality Engineer @ ORG_6181447bing in #📊・JID_fb739488
  ✅ Industry: Associate or Experienced Software Quality Engineer @ ORG_6181447bing
[2026-02-06T18:38:32.802Z] [BOT] 💾 Added channel posting: Associate or Experienced Software Quality Engineer @ ORG_6181447bing → category channel (1 total channels)
[2026-02-06T18:38:32.803Z] [BOT] 💾 BEFORE MERGE: 1919 jobs in memory (cached)
[2026-02-06T18:38:32.839Z] [BOT] ✅ Loaded V2 database: 1918 jobs
💾 DISK STATE: 1918 jobs on disk
[2026-02-06T18:38:32.843Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1919
[2026-02-06T18:38:32.847Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:32.848Z] [BOT] 💾 AFTER MERGE: 1919 jobs (merged disk + memory)
[2026-02-06T18:38:32.849Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T18:38:32.855Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-02-06T18:38:32.856Z] [BOT] ✅ Archiving complete: 20 archived, 1899 active
[2026-02-06T18:38:32.949Z] [BOT] 💾 Saved posted_jobs.json: 1899 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:34.778Z] [BOT] ✅ Posted message: Associate or Experienced Software Quality Engineer @ ORG_6181447bing in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T18:38:34.778Z] [BOT] 💾 Added channel posting: Associate or Experienced Software Quality Engineer @ ORG_6181447bing → location channel (2 total channels)
[2026-02-06T18:38:34.778Z] [BOT] 💾 BEFORE MERGE: 1899 jobs in memory (cached)
[2026-02-06T18:38:34.806Z] [BOT] ✅ Loaded V2 database: 1899 jobs
💾 DISK STATE: 1899 jobs on disk
[2026-02-06T18:38:34.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1899
[2026-02-06T18:38:34.818Z] [BOT] 🔀 Deep merged: Associate or Experienced Software Quality Engineer @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T18:38:34.818Z] [BOT] 💾 AFTER MERGE: 1899 jobs (merged disk + memory)
[2026-02-06T18:38:34.819Z] [BOT] ✅ No jobs to archive (all 1899 jobs within 7-day window)
[2026-02-06T18:38:34.906Z] [BOT] 💾 Saved posted_jobs.json: 1899 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:39.409Z] [BOT] 📌 Posting 8 jobs to #💰・finance-jobs
[2026-02-06T18:38:39.410Z] [BOT] 📍 [ROUTING] "Account Executive, Select, Austin" @ verkada
   Category: FINANCE (matched: "tax")
[2026-02-06T18:38:39.410Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:39.654Z] [BOT] ✅ Posted message: Account Executive, Select, Austin @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Select, Austin @ verkada
[2026-02-06T18:38:39.655Z] [BOT] 💾 Added channel posting: Account Executive, Select, Austin @ verkada → category channel (1 total channels)
[2026-02-06T18:38:39.655Z] [BOT] 💾 BEFORE MERGE: 1900 jobs in memory (cached)
[2026-02-06T18:38:39.683Z] [BOT] ✅ Loaded V2 database: 1899 jobs
💾 DISK STATE: 1899 jobs on disk
[2026-02-06T18:38:39.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1900
[2026-02-06T18:38:39.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:39.696Z] [BOT] 💾 AFTER MERGE: 1900 jobs (merged disk + memory)
[2026-02-06T18:38:39.697Z] [BOT] ✅ No jobs to archive (all 1900 jobs within 7-day window)
[2026-02-06T18:38:39.784Z] [BOT] 💾 Saved posted_jobs.json: 1900 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:41.286Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-02-06T18:38:41.286Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:41.555Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-02-06T18:38:41.555Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T18:38:41.556Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 1901 jobs in memory (cached)
[2026-02-06T18:38:41.584Z] [BOT] ✅ Loaded V2 database: 1900 jobs
💾 DISK STATE: 1900 jobs on disk
[2026-02-06T18:38:41.584Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1901
[2026-02-06T18:38:41.596Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:41.596Z] [BOT] 💾 AFTER MERGE: 1901 jobs (merged disk + memory)
[2026-02-06T18:38:41.597Z] [BOT] ✅ No jobs to archive (all 1901 jobs within 7-day window)
[2026-02-06T18:38:41.699Z] [BOT] 💾 Saved posted_jobs.json: 1901 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:43.200Z] [BOT] 📍 [ROUTING] "Channel Development Representative, South East (Tampa)" @ verkada
[2026-02-06T18:38:43.201Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:43.599Z] [BOT] ✅ Posted message: Channel Development Representative, South East (Tampa) @ verkada in #💰・finance-jobs
  ✅ Industry: Channel Development Representative, South East (Tampa) @ verkada
[2026-02-06T18:38:43.600Z] [BOT] 💾 Added channel posting: Channel Development Representative, South East (Tampa) @ verkada → category channel (1 total channels)
[2026-02-06T18:38:43.600Z] [BOT] 💾 BEFORE MERGE: 1902 jobs in memory (cached)
[2026-02-06T18:38:43.627Z] [BOT] ✅ Loaded V2 database: 1901 jobs
💾 DISK STATE: 1901 jobs on disk
[2026-02-06T18:38:43.633Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1902
[2026-02-06T18:38:43.637Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:43.637Z] [BOT] 💾 AFTER MERGE: 1902 jobs (merged disk + memory)
[2026-02-06T18:38:43.638Z] [BOT] ✅ No jobs to archive (all 1902 jobs within 7-day window)
[2026-02-06T18:38:43.735Z] [BOT] 💾 Saved posted_jobs.json: 1902 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:45.235Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Chicago - SLED)" @ verkada
[2026-02-06T18:38:45.235Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:45.717Z] [BOT] ✅ Posted message: Enterprise Account Executive (Chicago - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Chicago - SLED) @ verkada
[2026-02-06T18:38:45.718Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Chicago - SLED) @ verkada → category channel (1 total channels)
[2026-02-06T18:38:45.718Z] [BOT] 💾 BEFORE MERGE: 1903 jobs in memory (cached)
[2026-02-06T18:38:45.746Z] [BOT] ✅ Loaded V2 database: 1902 jobs
💾 DISK STATE: 1902 jobs on disk
[2026-02-06T18:38:45.750Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1903
[2026-02-06T18:38:45.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:45.755Z] [BOT] 💾 AFTER MERGE: 1903 jobs (merged disk + memory)
[2026-02-06T18:38:45.757Z] [BOT] ✅ No jobs to archive (all 1903 jobs within 7-day window)
[2026-02-06T18:38:45.860Z] [BOT] 💾 Saved posted_jobs.json: 1903 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:47.359Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Colorado - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:47.579Z] [BOT] ✅ Posted message: Enterprise Account Executive (Colorado - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Colorado - SLED) @ verkada
[2026-02-06T18:38:47.580Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Colorado - SLED) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 1904 jobs in memory (cached)
[2026-02-06T18:38:47.608Z] [BOT] ✅ Loaded V2 database: 1903 jobs
💾 DISK STATE: 1903 jobs on disk
[2026-02-06T18:38:47.614Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1904
[2026-02-06T18:38:47.618Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:47.618Z] [BOT] 💾 AFTER MERGE: 1904 jobs (merged disk + memory)
[2026-02-06T18:38:47.619Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-02-06T18:38:47.707Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:49.210Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Kansas - SLED)" @ verkada
[2026-02-06T18:38:49.211Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:49.434Z] [BOT] ✅ Posted message: Enterprise Account Executive (Kansas - SLED) @ verkada in #💰・finance-jobs
[2026-02-06T18:38:49.434Z] [BOT] ✅ Industry: Enterprise Account Executive (Kansas - SLED) @ verkada
[2026-02-06T18:38:49.435Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Kansas - SLED) @ verkada → category channel (1 total channels)
[2026-02-06T18:38:49.435Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-06T18:38:49.463Z] [BOT] ✅ Loaded V2 database: 1904 jobs
[2026-02-06T18:38:49.463Z] [BOT] 💾 DISK STATE: 1904 jobs on disk
[2026-02-06T18:38:49.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-06T18:38:49.471Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:49.471Z] [BOT] 💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-06T18:38:49.472Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-06T18:38:49.572Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:51.072Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (SoCal - Corporate)" @ verkada
[2026-02-06T18:38:51.072Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:51.694Z] [BOT] ✅ Posted message: Enterprise Account Executive (SoCal - Corporate) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (SoCal - Corporate) @ verkada
[2026-02-06T18:38:51.695Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (SoCal - Corporate) @ verkada → category channel (1 total channels)
[2026-02-06T18:38:51.695Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-06T18:38:51.727Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-06T18:38:51.727Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-06T18:38:51.734Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:51.734Z] [BOT] 💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-06T18:38:51.735Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-06T18:38:51.835Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:53.336Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (West - State)" @ verkada
[2026-02-06T18:38:53.337Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T18:38:53.529Z] [BOT] ✅ Posted message: Enterprise Account Executive (West - State) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (West - State) @ verkada
[2026-02-06T18:38:53.530Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (West - State) @ verkada → category channel (1 total channels)
[2026-02-06T18:38:53.530Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T18:38:53.560Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
[2026-02-06T18:38:53.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T18:38:53.566Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:38:53.566Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T18:38:53.567Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T18:38:53.666Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:38:55.423Z] [BOT] ✅ Posted message: Enterprise Account Executive (West - State) @ verkada in #🌲・JID_efdf5921
[2026-02-06T18:38:55.424Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-06T18:38:55.424Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (West - State) @ verkada → location channel (2 total channels)
[2026-02-06T18:38:55.424Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T18:38:55.453Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T18:38:55.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T18:38:55.459Z] [BOT] 🔀 Deep merged: Enterprise Account Executive (West - State) @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T18:38:55.459Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T18:38:55.460Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T18:38:55.561Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:39:00.061Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T18:39:00.062Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Greater Atlanta Area" @ verkada
[2026-02-06T18:39:00.062Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T18:39:00.396Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada in #💻・tech-jobs
[2026-02-06T18:39:00.396Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada
[2026-02-06T18:39:00.397Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada → category channel (1 total channels)
[2026-02-06T18:39:00.397Z] [BOT] 💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T18:39:00.428Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T18:39:00.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T18:39:00.433Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T18:39:00.433Z] [BOT] 💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T18:39:00.434Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-06T18:39:00.533Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:39:05.035Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-06T18:39:05.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3337c501..." not found, but found as SHA256 "6e6c88be9ce6d7d9"
[2026-02-06T18:39:05.037Z] [BOT] ⏭️  Skipping duplicate: JID_2457936d (posted within 7 days)
[2026-02-06T18:39:05.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ddd7bef8..." not found, but found as SHA256 "dda5eae8b78fde99"
⏭️  Skipping duplicate: JID_9601d5e9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "aa922a8b8071ea92"
⏭️  Skipping duplicate: JID_1d4d6326 (posted within 7 days)
[2026-02-06T18:39:05.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "a9a3c1247563d8b4"
⏭️  Skipping duplicate: JID_f59a87c2 (posted within 7 days)
[2026-02-06T18:39:05.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "c17d919beddde79b"
[2026-02-06T18:39:05.038Z] [BOT] ⏭️  Skipping duplicate: JID_a73599fa (posted within 7 days)
[2026-02-06T18:39:05.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "4a95e5d061ef216e"
⏭️  Skipping duplicate: JID_639c4656 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "2118766a0e356edb"
⏭️  Skipping duplicate: JID_9b390ef8 (posted within 7 days)
[2026-02-06T18:39:05.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "b18dfcd28b33fa0b"
⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
[2026-02-06T18:39:05.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "3aae5f780ebf437d"
[2026-02-06T18:39:05.039Z] [BOT] ⏭️  Skipping duplicate: JID_e54c34e3 (posted within 7 days)
[2026-02-06T18:39:05.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "e47a17bcc93d96f7"
⏭️  Skipping duplicate: JID_93d9360f (posted within 7 days)
[2026-02-06T18:39:05.051Z] [BOT] ✅ Loaded pending queue: 198 total (185 pending, 13 enriched, 0 posted)
[2026-02-06T18:39:05.070Z] [BOT] ✅ Saved pending queue: 198 total (185 pending, 3 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T18:39:05.184Z] [BOT] 📂 Loaded 12567 existing routing entries
[2026-02-06T18:39:05.307Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12577
[2026-02-06T18:39:05.307Z] [BOT] Timestamp: 2026-02-06T18:39:05.254Z
[2026-02-06T18:39:05.308Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
   Successful: 12
   Failed: 0
   Skipped: 39
[2026-02-06T18:39:05.308Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T18:39:05.308Z] [BOT] Total posts: 12
   Channels used: 5
   Top channels:
     1. #💰・finance-jobs: 8 posts
     2. #📊・JID_fb739488: 1 posts
[2026-02-06T18:39:05.308Z] [BOT] 3. #🌉・JID_739bbc0b: 1 posts
     4. #🌲・JID_efdf5921: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-02-06T18:39:05.308Z] [BOT] [STATS] Channel stats saved
[2026-02-06T18:39:05.308Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1908 jobs in memory (cached)
[2026-02-06T18:39:05.342Z] [BOT] ✅ Loaded V2 database: 1908 jobs
[2026-02-06T18:39:05.342Z] [BOT] 💾 DISK STATE: 1908 jobs on disk
[2026-02-06T18:39:05.342Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1908
[2026-02-06T18:39:05.355Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1908 jobs (merged disk + memory)
[2026-02-06T18:39:05.356Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-02-06T18:39:05.455Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T18:39:05.455Z] [BOT] ✅ Database saved successfully
[2026-02-06T18:39:07.477Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*