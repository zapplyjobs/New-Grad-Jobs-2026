# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T23:06:22.335Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T23:05:49.360Z] ========================================
[2026-02-05T23:05:49.362Z] Discord Bot Execution Log
[2026-02-05T23:05:49.362Z] Environment: GitHub Actions
[2026-02-05T23:05:49.362Z] Node Version: v20.20.0
[2026-02-05T23:05:49.362Z] ========================================
[2026-02-05T23:05:49.362Z] Environment Variables Check:
[2026-02-05T23:05:49.362Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T23:05:49.362Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T23:05:49.362Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T23:05:49.362Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T23:05:49.363Z] 
Multi-Channel Configuration:
[2026-02-05T23:05:49.363Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T23:05:49.363Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T23:05:49.363Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T23:05:49.363Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T23:05:49.363Z] 
Data Files Check:
[2026-02-05T23:05:49.364Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160856 bytes)
[2026-02-05T23:05:49.435Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11342842 bytes)
[2026-02-05T23:05:49.435Z] 
========================================
[2026-02-05T23:05:49.435Z] Starting Enhanced Discord Bot...
[2026-02-05T23:05:49.435Z] ========================================
[2026-02-05T23:05:49.940Z] [BOT] ✅ Loaded V2 database: 2241 jobs
[2026-02-05T23:05:50.652Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T23:05:50.652Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T23:05:50.652Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T23:05:50.674Z] [BOT] ✅ Loaded pending queue: 243 total (193 pending, 50 enriched, 0 posted)
[2026-02-05T23:05:50.674Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:05:50.676Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T23:05:50.676Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T23:05:50.676Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T23:05:50.677Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T23:05:50.677Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T23:05:50.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T23:05:50.680Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-05T23:05:50.680Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-05T23:05:50.691Z] [BOT] 📬 Found 45 new jobs (5 already posted)...
[2026-02-05T23:05:50.691Z] [BOT] 🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-05T23:05:50.692Z] [BOT] 🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-05T23:05:50.693Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-05T23:05:50.720Z] [BOT] ✅ Loaded pending queue: 243 total (193 pending, 50 enriched, 0 posted)
[2026-02-05T23:05:50.738Z] [BOT] ✅ Saved pending queue: 205 total (193 pending, 12 enriched, 0 posted)
🗑️ Removed 38 blacklisted jobs from pending queue
📋 After blacklist filter: 7 jobs (38 blacklisted)
[2026-02-05T23:05:50.738Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2026-02-05T23:05:50.739Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
   (1 grouped as same job with different locations)
[2026-02-05T23:05:50.739Z] [BOT] 📍 1 jobs with multiple locations:
   - Head of Duolingo Store, Consumer Products @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 39 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T23:05:50.743Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T23:05:50.744Z] [BOT] 📍 [ROUTING] "Head of Duolingo Store, Consumer Products" @ duolingo
   Category: TECH (default)
[2026-02-05T23:05:50.744Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T23:05:50.760Z] [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T23:05:52.187Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #💻・tech-jobs
[2026-02-05T23:05:52.187Z] [BOT] ✅ Industry: Head of Duolingo Store, Consumer Products @ duolingo
[2026-02-05T23:05:52.188Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → category channel (1 total channels)
[2026-02-05T23:05:52.188Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-05T23:05:52.248Z] [BOT] ✅ Loaded V2 database: 2241 jobs
💾 DISK STATE: 2241 jobs on disk
[2026-02-05T23:05:52.249Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-05T23:05:52.254Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:05:52.254Z] [BOT] 💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-05T23:05:52.255Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-05T23:05:52.396Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:05:54.366Z] [BOT] ✅ Posted message: Head of Duolingo Store, Consumer Products @ duolingo in #🗽・JID_98d4f0de
[2026-02-05T23:05:54.366Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T23:05:54.366Z] [BOT] 💾 Added channel posting: Head of Duolingo Store, Consumer Products @ duolingo → location channel (2 total channels)
[2026-02-05T23:05:54.366Z] [BOT] 💾 BEFORE MERGE: 2242 jobs in memory (cached)
[2026-02-05T23:05:54.420Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-05T23:05:54.421Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2242
[2026-02-05T23:05:54.425Z] [BOT] 🔀 Deep merged: Head of Duolingo Store, Consumer Products @ duolingo (disk: 1 channels → merged: 2 channels)
[2026-02-05T23:05:54.425Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2242 jobs (merged disk + memory)
[2026-02-05T23:05:54.427Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-02-05T23:05:54.551Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:05:59.053Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T23:05:59.055Z] [BOT] 📍 [ROUTING] "Strategic Finance" @ figma
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-05T23:05:59.055Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T23:05:59.348Z] [BOT] ✅ Posted message: Strategic Finance @ figma in #📊・JID_fb739488
[2026-02-05T23:05:59.348Z] [BOT] ✅ Industry: Strategic Finance @ figma
[2026-02-05T23:05:59.349Z] [BOT] 💾 Added channel posting: Strategic Finance @ figma → category channel (1 total channels)
[2026-02-05T23:05:59.349Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-05T23:05:59.403Z] [BOT] ✅ Loaded V2 database: 2242 jobs
💾 DISK STATE: 2242 jobs on disk
[2026-02-05T23:05:59.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-05T23:05:59.408Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:05:59.408Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-05T23:05:59.409Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-05T23:05:59.544Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:01.279Z] [BOT] ✅ Posted message: Strategic Finance @ figma in #🌉・JID_739bbc0b
[2026-02-05T23:06:01.279Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T23:06:01.280Z] [BOT] 💾 Added channel posting: Strategic Finance @ figma → location channel (2 total channels)
[2026-02-05T23:06:01.280Z] [BOT] 💾 BEFORE MERGE: 2243 jobs in memory (cached)
[2026-02-05T23:06:01.333Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-05T23:06:01.334Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2243
[2026-02-05T23:06:01.339Z] [BOT] 🔀 Deep merged: Strategic Finance @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T23:06:01.339Z] [BOT] 💾 AFTER MERGE: 2243 jobs (merged disk + memory)
[2026-02-05T23:06:01.340Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-02-05T23:06:01.460Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:05.962Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-02-05T23:06:05.964Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Houston - SLED)" @ verkada
[2026-02-05T23:06:05.964Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T23:06:06.345Z] [BOT] ✅ Posted message: Enterprise Account Executive (Houston - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Houston - SLED) @ verkada
[2026-02-05T23:06:06.346Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Houston - SLED) @ verkada → category channel (1 total channels)
[2026-02-05T23:06:06.346Z] [BOT] 💾 BEFORE MERGE: 2244 jobs in memory (cached)
[2026-02-05T23:06:06.400Z] [BOT] ✅ Loaded V2 database: 2243 jobs
💾 DISK STATE: 2243 jobs on disk
[2026-02-05T23:06:06.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2244
[2026-02-05T23:06:06.405Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:06:06.405Z] [BOT] 💾 AFTER MERGE: 2244 jobs (merged disk + memory)
[2026-02-05T23:06:06.406Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-02-05T23:06:06.542Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:08.047Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (NOVA - SLED)" @ verkada
[2026-02-05T23:06:08.047Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T23:06:08.222Z] [BOT] ✅ Posted message: Enterprise Account Executive (NOVA - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (NOVA - SLED) @ verkada
[2026-02-05T23:06:08.223Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (NOVA - SLED) @ verkada → category channel (1 total channels)
[2026-02-05T23:06:08.223Z] [BOT] 💾 BEFORE MERGE: 2245 jobs in memory (cached)
[2026-02-05T23:06:08.276Z] [BOT] ✅ Loaded V2 database: 2244 jobs
💾 DISK STATE: 2244 jobs on disk
[2026-02-05T23:06:08.277Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2245
[2026-02-05T23:06:08.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:06:08.281Z] [BOT] 💾 AFTER MERGE: 2245 jobs (merged disk + memory)
[2026-02-05T23:06:08.282Z] [BOT] ✅ No jobs to archive (all 2245 jobs within 7-day window)
[2026-02-05T23:06:08.417Z] [BOT] 💾 Saved posted_jobs.json: 2245 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:09.916Z] [BOT] 📍 [ROUTING] "Global Enterprise Account Executive" @ verkada
[2026-02-05T23:06:09.916Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T23:06:10.147Z] [BOT] ✅ Posted message: Global Enterprise Account Executive @ verkada in #💰・finance-jobs
[2026-02-05T23:06:10.147Z] [BOT] ✅ Industry: Global Enterprise Account Executive @ verkada
[2026-02-05T23:06:10.148Z] [BOT] 💾 Added channel posting: Global Enterprise Account Executive @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 2246 jobs in memory (cached)
[2026-02-05T23:06:10.204Z] [BOT] ✅ Loaded V2 database: 2245 jobs
💾 DISK STATE: 2245 jobs on disk
[2026-02-05T23:06:10.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2246
[2026-02-05T23:06:10.211Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:06:10.211Z] [BOT] 💾 AFTER MERGE: 2246 jobs (merged disk + memory)
[2026-02-05T23:06:10.213Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-02-05T23:06:10.350Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
[2026-02-05T23:06:10.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:11.852Z] [BOT] 📍 [ROUTING] "Tradeshow Associate" @ verkada
[2026-02-05T23:06:11.852Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T23:06:12.049Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #💰・finance-jobs
[2026-02-05T23:06:12.049Z] [BOT] ✅ Industry: Tradeshow Associate @ verkada
[2026-02-05T23:06:12.050Z] [BOT] 💾 Added channel posting: Tradeshow Associate @ verkada → category channel (1 total channels)
[2026-02-05T23:06:12.050Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-05T23:06:12.104Z] [BOT] ✅ Loaded V2 database: 2246 jobs
💾 DISK STATE: 2246 jobs on disk
[2026-02-05T23:06:12.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-05T23:06:12.108Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T23:06:12.109Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-05T23:06:12.110Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-05T23:06:12.250Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:14.029Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #🗽・JID_98d4f0de
[2026-02-05T23:06:14.030Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T23:06:14.030Z] [BOT] 💾 Added channel posting: Tradeshow Associate @ verkada → location channel (2 total channels)
[2026-02-05T23:06:14.030Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-05T23:06:14.084Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
[2026-02-05T23:06:14.085Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-05T23:06:14.089Z] [BOT] 🔀 Deep merged: Tradeshow Associate @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T23:06:14.089Z] [BOT] 💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-05T23:06:14.090Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-05T23:06:14.219Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
[2026-02-05T23:06:14.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T23:06:18.721Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-02-05T23:06:18.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c501f09..." not found, but found as SHA256 "ab2f6c5faf1b40b1"
[2026-02-05T23:06:18.723Z] [BOT] ⏭️  Skipping duplicate: JID_3c501f09 (posted within 7 days)
[2026-02-05T23:06:18.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_126298de..." not found, but found as SHA256 "156c24faf4e6fd30"
[2026-02-05T23:06:18.723Z] [BOT] ⏭️  Skipping duplicate: JID_288a5270 (posted within 7 days)
[2026-02-05T23:06:18.724Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "e836feec5171b132"
[2026-02-05T23:06:18.724Z] [BOT] ⏭️  Skipping duplicate: JID_22381731 (posted within 7 days)
[2026-02-05T23:06:18.724Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "b20681ff4769f025"
[2026-02-05T23:06:18.724Z] [BOT] ⏭️  Skipping duplicate: JID_d3650349 (posted within 7 days)
[2026-02-05T23:06:18.724Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "ecbe3281d399d631"
[2026-02-05T23:06:18.724Z] [BOT] ⏭️  Skipping duplicate: JID_b2bcdce2 (posted within 7 days)
[2026-02-05T23:06:18.725Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "9aa61c7ccf9e3db1"
[2026-02-05T23:06:18.725Z] [BOT] ⏭️  Skipping duplicate: JID_297ef683 (posted within 7 days)
[2026-02-05T23:06:18.741Z] [BOT] ✅ Loaded pending queue: 205 total (193 pending, 12 enriched, 0 posted)
[2026-02-05T23:06:18.760Z] [BOT] ✅ Saved pending queue: 205 total (193 pending, 6 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T23:06:18.880Z] [BOT] 📂 Loaded 12472 existing routing entries
[2026-02-05T23:06:18.992Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 12478
   Timestamp: 2026-02-05T23:06:18.949Z
[2026-02-05T23:06:18.993Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 52
   Successful: 9
[2026-02-05T23:06:18.993Z] [BOT] Failed: 0
   Skipped: 43
[2026-02-05T23:06:18.993Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-05T23:06:18.993Z] [BOT] Total posts: 9
   Channels used: 5
   Top channels:
     1. #💰・finance-jobs: 4 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #💻・tech-jobs: 1 posts
     4. #📊・JID_fb739488: 1 posts
     5. #🌉・JID_739bbc0b: 1 posts
[2026-02-05T23:06:18.993Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T23:06:18.993Z] [BOT] 💾 BEFORE MERGE: 2247 jobs in memory (cached)
[2026-02-05T23:06:19.068Z] [BOT] ✅ Loaded V2 database: 2247 jobs
💾 DISK STATE: 2247 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2247
[2026-02-05T23:06:19.073Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2247 jobs (merged disk + memory)
[2026-02-05T23:06:19.075Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-02-05T23:06:19.214Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T23:06:21.228Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*