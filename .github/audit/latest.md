# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T08:55:48.152Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T08:55:10.832Z] ========================================
[2026-02-06T08:55:10.834Z] Discord Bot Execution Log
[2026-02-06T08:55:10.834Z] Environment: GitHub Actions
[2026-02-06T08:55:10.834Z] Node Version: v20.20.0
[2026-02-06T08:55:10.834Z] ========================================
[2026-02-06T08:55:10.835Z] Environment Variables Check:
[2026-02-06T08:55:10.835Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T08:55:10.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T08:55:10.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T08:55:10.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T08:55:10.835Z] 
Multi-Channel Configuration:
[2026-02-06T08:55:10.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T08:55:10.835Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.835Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T08:55:10.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.836Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.836Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.836Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.836Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T08:55:10.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T08:55:10.836Z] 
Data Files Check:
[2026-02-06T08:55:10.837Z] .github/data/new_jobs.json: ✅ Exists (10 items, 180813 bytes)
[2026-02-06T08:55:10.893Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10309698 bytes)
[2026-02-06T08:55:10.893Z] 
========================================
[2026-02-06T08:55:10.893Z] Starting Enhanced Discord Bot...
[2026-02-06T08:55:10.893Z] ========================================
[2026-02-06T08:55:11.456Z] [BOT] ✅ Loaded V2 database: 2111 jobs
[2026-02-06T08:55:12.662Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T08:55:12.662Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T08:55:12.662Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T08:55:12.676Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T08:55:12.677Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T08:55:12.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T08:55:12.678Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T08:55:12.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T08:55:12.679Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T08:55:12.679Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T08:55:12.680Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T08:55:12.697Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T08:55:12.697Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
[2026-02-06T08:55:12.698Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-06T08:55:12.699Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
[2026-02-06T08:55:12.699Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-06T08:55:12.699Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-06T08:55:12.699Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
[2026-02-06T08:55:12.712Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-06T08:55:12.736Z] [BOT] ✅ Saved pending queue: 178 total (169 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
[2026-02-06T08:55:12.736Z] [BOT] 📋 After blacklist filter: 5 jobs (41 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T08:55:12.737Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T08:55:12.737Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T08:55:12.740Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-06T08:55:12.741Z] [BOT] 📍 [ROUTING] "Recruiting Data Engineering & Analytics" @ anthropic
[2026-02-06T08:55:12.741Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-06T08:55:12.758Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T08:55:13.364Z] [BOT] ✅ Posted message: Recruiting Data Engineering & Analytics @ anthropic in #📊・JID_fb739488
[2026-02-06T08:55:13.364Z] [BOT] ✅ Industry: Recruiting Data Engineering & Analytics @ anthropic
[2026-02-06T08:55:13.365Z] [BOT] 💾 Added channel posting: Recruiting Data Engineering & Analytics @ anthropic → category channel (1 total channels)
[2026-02-06T08:55:13.365Z] [BOT] 💾 BEFORE MERGE: 2112 jobs in memory (cached)
[2026-02-06T08:55:13.405Z] [BOT] ✅ Loaded V2 database: 2111 jobs
💾 DISK STATE: 2111 jobs on disk
[2026-02-06T08:55:13.405Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2112
[2026-02-06T08:55:13.410Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:55:13.410Z] [BOT] 💾 AFTER MERGE: 2112 jobs (merged disk + memory)
[2026-02-06T08:55:13.412Z] [BOT] ✅ No jobs to archive (all 2112 jobs within 7-day window)
[2026-02-06T08:55:13.527Z] [BOT] 💾 Saved posted_jobs.json: 2112 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:15.300Z] [BOT] ✅ Posted message: Recruiting Data Engineering & Analytics @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T08:55:15.300Z] [BOT] 💾 Added channel posting: Recruiting Data Engineering & Analytics @ anthropic → location channel (2 total channels)
[2026-02-06T08:55:15.300Z] [BOT] 💾 BEFORE MERGE: 2112 jobs in memory (cached)
[2026-02-06T08:55:15.340Z] [BOT] ✅ Loaded V2 database: 2112 jobs
[2026-02-06T08:55:15.343Z] [BOT] 💾 DISK STATE: 2112 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2112
[2026-02-06T08:55:15.348Z] [BOT] 🔀 Deep merged: Recruiting Data Engineering & Analytics @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:55:15.348Z] [BOT] 💾 AFTER MERGE: 2112 jobs (merged disk + memory)
[2026-02-06T08:55:15.350Z] [BOT] ✅ No jobs to archive (all 2112 jobs within 7-day window)
[2026-02-06T08:55:15.459Z] [BOT] 💾 Saved posted_jobs.json: 2112 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:19.960Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T08:55:19.962Z] [BOT] 📍 [ROUTING] "Summer 2026 Software Engineer Intern (Game Development)" @ ORG_4e630c01
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T08:55:19.962Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T08:55:20.436Z] [BOT] ✅ Posted message: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01 in #🤖・ai-jobs
  ✅ Industry: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01
[2026-02-06T08:55:20.436Z] [BOT] 💾 Added channel posting: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01 → category channel (1 total channels)
[2026-02-06T08:55:20.436Z] [BOT] 💾 BEFORE MERGE: 2113 jobs in memory (cached)
[2026-02-06T08:55:20.470Z] [BOT] ✅ Loaded V2 database: 2112 jobs
💾 DISK STATE: 2112 jobs on disk
[2026-02-06T08:55:20.470Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2113
[2026-02-06T08:55:20.475Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2113 jobs (merged disk + memory)
[2026-02-06T08:55:20.476Z] [BOT] ✅ No jobs to archive (all 2113 jobs within 7-day window)
[2026-02-06T08:55:20.590Z] [BOT] 💾 Saved posted_jobs.json: 2113 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:22.287Z] [BOT] ✅ Posted message: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01 in #🌉・JID_739bbc0b
[2026-02-06T08:55:22.287Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T08:55:22.287Z] [BOT] 💾 Added channel posting: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01 → location channel (2 total channels)
[2026-02-06T08:55:22.287Z] [BOT] 💾 BEFORE MERGE: 2113 jobs in memory (cached)
[2026-02-06T08:55:22.322Z] [BOT] ✅ Loaded V2 database: 2113 jobs
[2026-02-06T08:55:22.322Z] [BOT] 💾 DISK STATE: 2113 jobs on disk
[2026-02-06T08:55:22.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2113
[2026-02-06T08:55:22.326Z] [BOT] 🔀 Deep merged: Summer 2026 Software Engineer Intern (Game Development) @ ORG_4e630c01 (disk: 1 channels → merged: 2 channels)
[2026-02-06T08:55:22.326Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2113 jobs (merged disk + memory)
[2026-02-06T08:55:22.328Z] [BOT] ✅ No jobs to archive (all 2113 jobs within 7-day window)
[2026-02-06T08:55:22.441Z] [BOT] 💾 Saved posted_jobs.json: 2113 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:26.940Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T08:55:26.942Z] [BOT] 📍 [ROUTING] "Finance & Strategy, Global GTM Revenue Reporting " @ anthropic
[2026-02-06T08:55:26.942Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T08:55:27.312Z] [BOT] ✅ Posted message: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic in #💰・finance-jobs
[2026-02-06T08:55:27.312Z] [BOT] ✅ Industry: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic
[2026-02-06T08:55:27.312Z] [BOT] 💾 Added channel posting: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic → category channel (1 total channels)
[2026-02-06T08:55:27.313Z] [BOT] 💾 BEFORE MERGE: 2114 jobs in memory (cached)
[2026-02-06T08:55:27.347Z] [BOT] ✅ Loaded V2 database: 2113 jobs
💾 DISK STATE: 2113 jobs on disk
[2026-02-06T08:55:27.347Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2114
[2026-02-06T08:55:27.351Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:55:27.352Z] [BOT] 💾 AFTER MERGE: 2114 jobs (merged disk + memory)
[2026-02-06T08:55:27.353Z] [BOT] ✅ No jobs to archive (all 2114 jobs within 7-day window)
[2026-02-06T08:55:27.464Z] [BOT] 💾 Saved posted_jobs.json: 2114 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:29.222Z] [BOT] ✅ Posted message: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T08:55:29.222Z] [BOT] 💾 Added channel posting: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic → location channel (2 total channels)
[2026-02-06T08:55:29.222Z] [BOT] 💾 BEFORE MERGE: 2114 jobs in memory (cached)
[2026-02-06T08:55:29.264Z] [BOT] ✅ Loaded V2 database: 2114 jobs
💾 DISK STATE: 2114 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2114
[2026-02-06T08:55:29.271Z] [BOT] 🔀 Deep merged: Finance & Strategy, Global GTM Revenue Reporting  @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-06T08:55:29.272Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2114 jobs (merged disk + memory)
[2026-02-06T08:55:29.273Z] [BOT] ✅ No jobs to archive (all 2114 jobs within 7-day window)
[2026-02-06T08:55:29.383Z] [BOT] 💾 Saved posted_jobs.json: 2114 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:33.882Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T08:55:33.883Z] [BOT] 📍 [ROUTING] "Microfocus Developer" @ ORG_2f17a0f8 via Dice
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T08:55:34.300Z] [BOT] ✅ Posted message: Microfocus Developer @ ORG_2f17a0f8 via Dice in #💻・tech-jobs
[2026-02-06T08:55:34.301Z] [BOT] ✅ Industry: Microfocus Developer @ ORG_2f17a0f8 via Dice
[2026-02-06T08:55:34.301Z] [BOT] 💾 Added channel posting: Microfocus Developer @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-06T08:55:34.301Z] [BOT] 💾 BEFORE MERGE: 2115 jobs in memory (cached)
[2026-02-06T08:55:34.335Z] [BOT] ✅ Loaded V2 database: 2114 jobs
💾 DISK STATE: 2114 jobs on disk
[2026-02-06T08:55:34.335Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2115
[2026-02-06T08:55:34.339Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:55:34.339Z] [BOT] 💾 AFTER MERGE: 2115 jobs (merged disk + memory)
[2026-02-06T08:55:34.340Z] [BOT] ✅ No jobs to archive (all 2115 jobs within 7-day window)
[2026-02-06T08:55:34.448Z] [BOT] 💾 Saved posted_jobs.json: 2115 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:36.194Z] [BOT] ✅ Posted message: Microfocus Developer @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
[2026-02-06T08:55:36.195Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T08:55:36.195Z] [BOT] 💾 Added channel posting: Microfocus Developer @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-06T08:55:36.195Z] [BOT] 💾 BEFORE MERGE: 2115 jobs in memory (cached)
[2026-02-06T08:55:36.229Z] [BOT] ✅ Loaded V2 database: 2115 jobs
💾 DISK STATE: 2115 jobs on disk
[2026-02-06T08:55:36.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2115
[2026-02-06T08:55:36.233Z] [BOT] 🔀 Deep merged: Microfocus Developer @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:55:36.233Z] [BOT] 💾 AFTER MERGE: 2115 jobs (merged disk + memory)
[2026-02-06T08:55:36.234Z] [BOT] ✅ No jobs to archive (all 2115 jobs within 7-day window)
[2026-02-06T08:55:36.345Z] [BOT] 💾 Saved posted_jobs.json: 2115 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:37.846Z] [BOT] 📍 [ROUTING] "Computer & Electrical Engineer Software, Entry Level" @ ORG_e86ad8c9 Nuclear Laboratory
[2026-02-06T08:55:37.846Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T08:55:38.048Z] [BOT] ✅ Posted message: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory in #💻・tech-jobs
  ✅ Industry: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory
[2026-02-06T08:55:38.049Z] [BOT] 💾 Added channel posting: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory → category channel (1 total channels)
[2026-02-06T08:55:38.049Z] [BOT] 💾 BEFORE MERGE: 2116 jobs in memory (cached)
[2026-02-06T08:55:38.083Z] [BOT] ✅ Loaded V2 database: 2115 jobs
💾 DISK STATE: 2115 jobs on disk
[2026-02-06T08:55:38.084Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2116
[2026-02-06T08:55:38.087Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:55:38.088Z] [BOT] 💾 AFTER MERGE: 2116 jobs (merged disk + memory)
[2026-02-06T08:55:38.089Z] [BOT] ✅ No jobs to archive (all 2116 jobs within 7-day window)
[2026-02-06T08:55:38.200Z] [BOT] 💾 Saved posted_jobs.json: 2116 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:39.914Z] [BOT] ✅ Posted message: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory in #📍・JID_6daed763
[2026-02-06T08:55:39.914Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T08:55:39.915Z] [BOT] 💾 Added channel posting: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory → location channel (2 total channels)
[2026-02-06T08:55:39.915Z] [BOT] 💾 BEFORE MERGE: 2116 jobs in memory (cached)
[2026-02-06T08:55:39.949Z] [BOT] ✅ Loaded V2 database: 2116 jobs
💾 DISK STATE: 2116 jobs on disk
[2026-02-06T08:55:39.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2116
[2026-02-06T08:55:39.952Z] [BOT] 🔀 Deep merged: Computer & Electrical Engineer Software, Entry Level @ ORG_e86ad8c9 Nuclear Laboratory (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T08:55:39.953Z] [BOT] 💾 AFTER MERGE: 2116 jobs (merged disk + memory)
[2026-02-06T08:55:39.954Z] [BOT] ✅ No jobs to archive (all 2116 jobs within 7-day window)
[2026-02-06T08:55:40.063Z] [BOT] 💾 Saved posted_jobs.json: 2116 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:44.562Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T08:55:44.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c3ce575848ce9be1"
[2026-02-06T08:55:44.564Z] [BOT] ⏭️  Skipping duplicate: JID_27b17d0e (posted within 7 days)
[2026-02-06T08:55:44.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_53e2d12e..." not found, but found as SHA256 "e9515a1f171550c4"
[2026-02-06T08:55:44.565Z] [BOT] ⏭️  Skipping duplicate: JID_d7b8541b (posted within 7 days)
[2026-02-06T08:55:44.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2a3cc519ef148b36"
[2026-02-06T08:55:44.565Z] [BOT] ⏭️  Skipping duplicate: JID_df18cc4f (posted within 7 days)
[2026-02-06T08:55:44.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a970810f..." not found, but found as SHA256 "9b644353b6ab04b5"
[2026-02-06T08:55:44.565Z] [BOT] ⏭️  Skipping duplicate: JID_256a2a6a (posted within 7 days)
[2026-02-06T08:55:44.565Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_599e5c1a..." not found, but found as SHA256 "7805c64a2c927696"
[2026-02-06T08:55:44.566Z] [BOT] ⏭️  Skipping duplicate: JID_09ed641c (posted within 7 days)
[2026-02-06T08:55:44.575Z] [BOT] ✅ Loaded pending queue: 178 total (169 pending, 9 enriched, 0 posted)
[2026-02-06T08:55:44.591Z] [BOT] ✅ Saved pending queue: 178 total (169 pending, 4 enriched, 5 posted)
[2026-02-06T08:55:44.591Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T08:55:44.697Z] [BOT] 📂 Loaded 12512 existing routing entries
[2026-02-06T08:55:44.816Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T08:55:44.816Z] [BOT] Total entries: 12517
   Timestamp: 2026-02-06T08:55:44.766Z
[2026-02-06T08:55:44.817Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T08:55:44.817Z] [BOT] Total attempts: 55
   Successful: 10
   Failed: 0
   Skipped: 45
[2026-02-06T08:55:44.817Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-06T08:55:44.817Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
     1. #🌉・JID_739bbc0b: 3 posts
[2026-02-06T08:55:44.817Z] [BOT] 2. #💻・tech-jobs: 2 posts
     3. #📍・JID_6daed763: 2 posts
     4. #📊・JID_fb739488: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-06T08:55:44.818Z] [BOT] [STATS] Channel stats saved
[2026-02-06T08:55:44.818Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2116 jobs in memory (cached)
[2026-02-06T08:55:44.860Z] [BOT] ✅ Loaded V2 database: 2116 jobs
💾 DISK STATE: 2116 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2116
[2026-02-06T08:55:44.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T08:55:44.870Z] [BOT] 💾 AFTER MERGE: 2116 jobs (merged disk + memory)
[2026-02-06T08:55:44.872Z] [BOT] ✅ No jobs to archive (all 2116 jobs within 7-day window)
[2026-02-06T08:55:44.982Z] [BOT] 💾 Saved posted_jobs.json: 2116 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T08:55:44.982Z] [BOT] ✅ Database saved successfully
[2026-02-06T08:55:47.003Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*