# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T13:37:07.716Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T13:36:35.047Z] ========================================
[2026-02-06T13:36:35.049Z] Discord Bot Execution Log
[2026-02-06T13:36:35.049Z] Environment: GitHub Actions
[2026-02-06T13:36:35.049Z] Node Version: v20.20.0
[2026-02-06T13:36:35.049Z] ========================================
[2026-02-06T13:36:35.049Z] Environment Variables Check:
[2026-02-06T13:36:35.049Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T13:36:35.049Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T13:36:35.050Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T13:36:35.050Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T13:36:35.050Z] 
Multi-Channel Configuration:
[2026-02-06T13:36:35.050Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T13:36:35.050Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T13:36:35.050Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T13:36:35.050Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T13:36:35.051Z] 
Data Files Check:
[2026-02-06T13:36:35.052Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160289 bytes)
[2026-02-06T13:36:35.107Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9737615 bytes)
[2026-02-06T13:36:35.107Z] 
========================================
[2026-02-06T13:36:35.107Z] Starting Enhanced Discord Bot...
[2026-02-06T13:36:35.107Z] ========================================
[2026-02-06T13:36:35.684Z] [BOT] ✅ Loaded V2 database: 2011 jobs
[2026-02-06T13:36:36.127Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T13:36:36.127Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T13:36:36.128Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T13:36:36.141Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T13:36:36.142Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T13:36:36.144Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T13:36:36.144Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T13:36:36.144Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T13:36:36.145Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T13:36:36.145Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T13:36:36.160Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
🚫 Skipping blacklisted job: Principal Software Engineer - Infrastructure at discord
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Sales Operations Manager at discord
🚫 Skipping blacklisted job: Senior Data Engineer - Ads  at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
[2026-02-06T13:36:36.161Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-06T13:36:36.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-06T13:36:36.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T13:36:36.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-06T13:36:36.162Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
[2026-02-06T13:36:36.162Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
[2026-02-06T13:36:36.174Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T13:36:36.199Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
📋 After blacklist filter: 7 jobs (41 blacklisted)
[2026-02-06T13:36:36.200Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2026-02-06T13:36:36.200Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-02-06T13:36:36.200Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-06T13:36:36.201Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: los angeles, ca united states, atlanta, ga united states
⏸️ Limiting to 10 jobs this run, 42 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T13:36:36.204Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T13:36:36.205Z] [BOT] 📍 [ROUTING] "Key Accounts Executive" @ datadog
[2026-02-06T13:36:36.205Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T13:36:36.222Z] [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T13:36:36.676Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Key Accounts Executive @ datadog
[2026-02-06T13:36:36.677Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → category channel (1 total channels)
[2026-02-06T13:36:36.677Z] [BOT] 💾 BEFORE MERGE: 2012 jobs in memory (cached)
[2026-02-06T13:36:36.714Z] [BOT] ✅ Loaded V2 database: 2011 jobs
💾 DISK STATE: 2011 jobs on disk
[2026-02-06T13:36:36.714Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2012
[2026-02-06T13:36:36.719Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:36:36.719Z] [BOT] 💾 AFTER MERGE: 2012 jobs (merged disk + memory)
[2026-02-06T13:36:36.720Z] [BOT] ✅ No jobs to archive (all 2012 jobs within 7-day window)
[2026-02-06T13:36:36.832Z] [BOT] 💾 Saved posted_jobs.json: 2012 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:38.542Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #🏠・JID_ead674af
[2026-02-06T13:36:38.542Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-06T13:36:38.543Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → location channel (2 total channels)
[2026-02-06T13:36:38.543Z] [BOT] 💾 BEFORE MERGE: 2012 jobs in memory (cached)
[2026-02-06T13:36:38.577Z] [BOT] ✅ Loaded V2 database: 2012 jobs
💾 DISK STATE: 2012 jobs on disk
[2026-02-06T13:36:38.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2012
[2026-02-06T13:36:38.582Z] [BOT] 🔀 Deep merged: Key Accounts Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-02-06T13:36:38.582Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2012 jobs (merged disk + memory)
[2026-02-06T13:36:38.584Z] [BOT] ✅ No jobs to archive (all 2012 jobs within 7-day window)
[2026-02-06T13:36:38.694Z] [BOT] 💾 Saved posted_jobs.json: 2012 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:40.193Z] [BOT] 📍 [ROUTING] " Enterprise Sales Executive (SLED)" @ datadog
   Category: TECH (default)
[2026-02-06T13:36:40.194Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T13:36:40.425Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #💻・tech-jobs
[2026-02-06T13:36:40.426Z] [BOT] ✅ Industry:  Enterprise Sales Executive (SLED) @ datadog
[2026-02-06T13:36:40.426Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → category channel (1 total channels)
[2026-02-06T13:36:40.426Z] [BOT] 💾 BEFORE MERGE: 2013 jobs in memory (cached)
[2026-02-06T13:36:40.459Z] [BOT] ✅ Loaded V2 database: 2012 jobs
💾 DISK STATE: 2012 jobs on disk
[2026-02-06T13:36:40.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2013
[2026-02-06T13:36:40.464Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:36:40.464Z] [BOT] 💾 AFTER MERGE: 2013 jobs (merged disk + memory)
[2026-02-06T13:36:40.465Z] [BOT] ✅ No jobs to archive (all 2013 jobs within 7-day window)
[2026-02-06T13:36:40.564Z] [BOT] 💾 Saved posted_jobs.json: 2013 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:42.462Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-06T13:36:42.462Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 2013 jobs in memory (cached)
[2026-02-06T13:36:42.497Z] [BOT] ✅ Loaded V2 database: 2013 jobs
💾 DISK STATE: 2013 jobs on disk
[2026-02-06T13:36:42.498Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2013
[2026-02-06T13:36:42.502Z] [BOT] 🔀 Deep merged:  Enterprise Sales Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-02-06T13:36:42.502Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2013 jobs (merged disk + memory)
[2026-02-06T13:36:42.504Z] [BOT] ✅ No jobs to archive (all 2013 jobs within 7-day window)
[2026-02-06T13:36:42.603Z] [BOT] 💾 Saved posted_jobs.json: 2013 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:44.106Z] [BOT] 📍 [ROUTING] "Software Engineer, Ads" @ discord
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T13:36:44.321Z] [BOT] ✅ Posted message: Software Engineer, Ads @ discord in #💻・tech-jobs
  ✅ Industry: Software Engineer, Ads @ discord
[2026-02-06T13:36:44.322Z] [BOT] 💾 Added channel posting: Software Engineer, Ads @ discord → category channel (1 total channels)
[2026-02-06T13:36:44.322Z] [BOT] 💾 BEFORE MERGE: 2014 jobs in memory (cached)
[2026-02-06T13:36:44.363Z] [BOT] ✅ Loaded V2 database: 2013 jobs
💾 DISK STATE: 2013 jobs on disk
[2026-02-06T13:36:44.364Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2014
[2026-02-06T13:36:44.368Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2014 jobs (merged disk + memory)
[2026-02-06T13:36:44.369Z] [BOT] ✅ No jobs to archive (all 2014 jobs within 7-day window)
[2026-02-06T13:36:44.465Z] [BOT] 💾 Saved posted_jobs.json: 2014 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:46.207Z] [BOT] ✅ Posted message: Software Engineer, Ads @ discord in #🌉・JID_739bbc0b
[2026-02-06T13:36:46.207Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T13:36:46.208Z] [BOT] 💾 Added channel posting: Software Engineer, Ads @ discord → location channel (2 total channels)
[2026-02-06T13:36:46.208Z] [BOT] 💾 BEFORE MERGE: 2014 jobs in memory (cached)
[2026-02-06T13:36:46.244Z] [BOT] ✅ Loaded V2 database: 2014 jobs
💾 DISK STATE: 2014 jobs on disk
[2026-02-06T13:36:46.244Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2014
[2026-02-06T13:36:46.248Z] [BOT] 🔀 Deep merged: Software Engineer, Ads @ discord (disk: 1 channels → merged: 2 channels)
[2026-02-06T13:36:46.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2014 jobs (merged disk + memory)
[2026-02-06T13:36:46.249Z] [BOT] ✅ No jobs to archive (all 2014 jobs within 7-day window)
[2026-02-06T13:36:46.354Z] [BOT] 💾 Saved posted_jobs.json: 2014 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:50.855Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-06T13:36:50.857Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-02-06T13:36:50.857Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T13:36:51.044Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-02-06T13:36:51.044Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T13:36:51.045Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-06T13:36:51.045Z] [BOT] 💾 BEFORE MERGE: 2015 jobs in memory (cached)
[2026-02-06T13:36:51.079Z] [BOT] ✅ Loaded V2 database: 2014 jobs
💾 DISK STATE: 2014 jobs on disk
[2026-02-06T13:36:51.079Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2015
[2026-02-06T13:36:51.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:36:51.084Z] [BOT] 💾 AFTER MERGE: 2015 jobs (merged disk + memory)
[2026-02-06T13:36:51.085Z] [BOT] ✅ No jobs to archive (all 2015 jobs within 7-day window)
[2026-02-06T13:36:51.185Z] [BOT] 💾 Saved posted_jobs.json: 2015 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:52.688Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State (Southeast)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T13:36:52.916Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State (Southeast) @ verkada in #💰・finance-jobs
[2026-02-06T13:36:52.917Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State (Southeast) @ verkada
[2026-02-06T13:36:52.917Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State (Southeast) @ verkada → category channel (1 total channels)
[2026-02-06T13:36:52.917Z] [BOT] 💾 BEFORE MERGE: 2016 jobs in memory (cached)
[2026-02-06T13:36:52.952Z] [BOT] ✅ Loaded V2 database: 2015 jobs
[2026-02-06T13:36:52.952Z] [BOT] 💾 DISK STATE: 2015 jobs on disk
[2026-02-06T13:36:52.952Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2016
[2026-02-06T13:36:52.957Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:36:52.957Z] [BOT] 💾 AFTER MERGE: 2016 jobs (merged disk + memory)
[2026-02-06T13:36:52.958Z] [BOT] ✅ No jobs to archive (all 2016 jobs within 7-day window)
[2026-02-06T13:36:53.061Z] [BOT] 💾 Saved posted_jobs.json: 2016 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:57.563Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T13:36:57.565Z] [BOT] 📍 [ROUTING] "Data Science Intern, Great American Risk Solutions" @ ORG_c8cc1c7b American Insurance Company
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T13:36:57.565Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T13:36:57.856Z] [BOT] ✅ Posted message: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company in #🤖・ai-jobs
  ✅ Industry: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company
[2026-02-06T13:36:57.857Z] [BOT] 💾 Added channel posting: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company → category channel (1 total channels)
[2026-02-06T13:36:57.857Z] [BOT] 💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-06T13:36:57.891Z] [BOT] ✅ Loaded V2 database: 2016 jobs
💾 DISK STATE: 2016 jobs on disk
[2026-02-06T13:36:57.891Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-06T13:36:57.895Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:36:57.895Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-06T13:36:57.896Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-06T13:36:57.998Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:36:59.683Z] [BOT] ✅ Posted message: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-06T13:36:59.684Z] [BOT] 💾 Added channel posting: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company → location channel (2 total channels)
[2026-02-06T13:36:59.684Z] [BOT] 💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-06T13:36:59.726Z] [BOT] ✅ Loaded V2 database: 2017 jobs
[2026-02-06T13:36:59.726Z] [BOT] 💾 DISK STATE: 2017 jobs on disk
[2026-02-06T13:36:59.727Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-06T13:36:59.734Z] [BOT] 🔀 Deep merged: Data Science Intern, Great American Risk Solutions @ ORG_c8cc1c7b American Insurance Company (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T13:36:59.734Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-06T13:36:59.735Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-06T13:36:59.842Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T13:37:04.344Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-02-06T13:37:04.346Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T13:37:04.346Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T13:37:04.346Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T13:37:04.346Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-02-06T13:37:04.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "dddb14a43a41898f"
⏭️  Skipping duplicate: JID_38ddeff2 (posted within 7 days)
[2026-02-06T13:37:04.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "59d7c169b091e9b0"
[2026-02-06T13:37:04.347Z] [BOT] ⏭️  Skipping duplicate: JID_7ecadf6f (posted within 7 days)
[2026-02-06T13:37:04.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "533135737930f35a"
⏭️  Skipping duplicate: JID_9a844d49 (posted within 7 days)
[2026-02-06T13:37:04.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5b5a7f7b-..." not found, but found as SHA256 "08ce0e041aac9e43"
⏭️  Skipping duplicate: JID_9059da25 (posted within 7 days)
[2026-02-06T13:37:04.358Z] [BOT] ✅ Loaded pending queue: 182 total (173 pending, 9 enriched, 0 posted)
[2026-02-06T13:37:04.376Z] [BOT] ✅ Saved pending queue: 182 total (173 pending, 3 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-02-06T13:37:04.376Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T13:37:04.469Z] [BOT] 📂 Loaded 12540 existing routing entries
[2026-02-06T13:37:04.617Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-02-06T13:37:04.617Z] [BOT] Total entries: 12546
   Timestamp: 2026-02-06T13:37:04.563Z
[2026-02-06T13:37:04.618Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T13:37:04.618Z] [BOT] Total attempts: 53
   Successful: 10
   Failed: 0
   Skipped: 43
[2026-02-06T13:37:04.618Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
[2026-02-06T13:37:04.618Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #💰・finance-jobs: 2 posts
     4. #🌉・JID_739bbc0b: 1 posts
[2026-02-06T13:37:04.618Z] [BOT] 5. #🤖・ai-jobs: 1 posts
[2026-02-06T13:37:04.618Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2017 jobs in memory (cached)
[2026-02-06T13:37:04.657Z] [BOT] ✅ Loaded V2 database: 2017 jobs
💾 DISK STATE: 2017 jobs on disk
[2026-02-06T13:37:04.657Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2017
[2026-02-06T13:37:04.661Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T13:37:04.661Z] [BOT] 💾 AFTER MERGE: 2017 jobs (merged disk + memory)
[2026-02-06T13:37:04.663Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-02-06T13:37:04.778Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T13:37:06.798Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*