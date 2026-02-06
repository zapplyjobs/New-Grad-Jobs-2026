# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T19:02:49.515Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T19:02:18.592Z] ========================================
[2026-02-06T19:02:18.594Z] Discord Bot Execution Log
[2026-02-06T19:02:18.594Z] Environment: GitHub Actions
[2026-02-06T19:02:18.594Z] Node Version: v20.20.0
[2026-02-06T19:02:18.594Z] ========================================
[2026-02-06T19:02:18.594Z] Environment Variables Check:
[2026-02-06T19:02:18.594Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T19:02:18.594Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T19:02:18.595Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T19:02:18.595Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T19:02:18.595Z] 
Multi-Channel Configuration:
[2026-02-06T19:02:18.595Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T19:02:18.595Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T19:02:18.595Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T19:02:18.595Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T19:02:18.595Z] 
Data Files Check:
[2026-02-06T19:02:18.597Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166419 bytes)
[2026-02-06T19:02:18.656Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9072457 bytes)
[2026-02-06T19:02:18.656Z] 
========================================
[2026-02-06T19:02:18.656Z] Starting Enhanced Discord Bot...
[2026-02-06T19:02:18.656Z] ========================================
[2026-02-06T19:02:19.165Z] [BOT] ✅ Loaded V2 database: 1908 jobs
[2026-02-06T19:02:20.697Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T19:02:20.698Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T19:02:20.698Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T19:02:20.721Z] [BOT] ✅ Loaded pending queue: 229 total (179 pending, 50 enriched, 0 posted)
[2026-02-06T19:02:20.721Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:02:20.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T19:02:20.722Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T19:02:20.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T19:02:20.723Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T19:02:20.734Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference Performance at anthropic
🚫 Skipping blacklisted job: Product Manager, Safeguards (Privacy)  at anthropic
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods - Shopping) at reddit
🚫 Skipping blacklisted job: Staff AI Engineer - Simulation Environments at datadog
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
[2026-02-06T19:02:20.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
[2026-02-06T19:02:20.736Z] [BOT] 🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T19:02:20.736Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
[2026-02-06T19:02:20.736Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T19:02:20.763Z] [BOT] ✅ Loaded pending queue: 229 total (179 pending, 50 enriched, 0 posted)
[2026-02-06T19:02:20.786Z] [BOT] ✅ Saved pending queue: 186 total (179 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (43 blacklisted)
[2026-02-06T19:02:20.787Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T19:02:20.787Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T19:02:20.787Z] [BOT] ⏸️ Limiting to 10 jobs this run, 43 deferred for next run
[2026-02-06T19:02:20.787Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T19:02:20.790Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T19:02:20.791Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Rocky Mountains" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-02-06T19:02:20.791Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T19:02:20.807Z] [BOT ERROR] (node:2851) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T19:02:21.316Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Rocky Mountains @ verkada in #💻・tech-jobs
[2026-02-06T19:02:21.317Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Rocky Mountains @ verkada
[2026-02-06T19:02:21.318Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Rocky Mountains @ verkada → category channel (1 total channels)
[2026-02-06T19:02:21.318Z] [BOT] 💾 BEFORE MERGE: 1909 jobs in memory (cached)
[2026-02-06T19:02:21.367Z] [BOT] ✅ Loaded V2 database: 1908 jobs
💾 DISK STATE: 1908 jobs on disk
[2026-02-06T19:02:21.367Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1909
[2026-02-06T19:02:21.375Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:21.376Z] [BOT] 💾 AFTER MERGE: 1909 jobs (merged disk + memory)
[2026-02-06T19:02:21.377Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T19:02:21.381Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-02-06T19:02:21.381Z] [BOT] ✅ Archiving complete: 6 archived, 1903 active
[2026-02-06T19:02:21.491Z] [BOT] 💾 Saved posted_jobs.json: 1903 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:22.994Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southern California" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T19:02:23.179Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Southern California @ verkada in #💻・tech-jobs
[2026-02-06T19:02:23.179Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Southern California @ verkada
[2026-02-06T19:02:23.180Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Southern California @ verkada → category channel (1 total channels)
[2026-02-06T19:02:23.180Z] [BOT] 💾 BEFORE MERGE: 1904 jobs in memory (cached)
[2026-02-06T19:02:23.223Z] [BOT] ✅ Loaded V2 database: 1903 jobs
💾 DISK STATE: 1903 jobs on disk
[2026-02-06T19:02:23.223Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1904
[2026-02-06T19:02:23.231Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:23.231Z] [BOT] 💾 AFTER MERGE: 1904 jobs (merged disk + memory)
[2026-02-06T19:02:23.233Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-02-06T19:02:23.331Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:24.833Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, West Coast" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T19:02:25.331Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, West Coast @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, West Coast @ verkada
[2026-02-06T19:02:25.333Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, West Coast @ verkada → category channel (1 total channels)
[2026-02-06T19:02:25.333Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-06T19:02:25.374Z] [BOT] ✅ Loaded V2 database: 1904 jobs
💾 DISK STATE: 1904 jobs on disk
[2026-02-06T19:02:25.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-06T19:02:25.383Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:25.383Z] [BOT] 💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-06T19:02:25.384Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-06T19:02:25.493Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:27.199Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, West Coast @ verkada in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-06T19:02:27.199Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, West Coast @ verkada → location channel (2 total channels)
[2026-02-06T19:02:27.199Z] [BOT] 💾 BEFORE MERGE: 1905 jobs in memory (cached)
[2026-02-06T19:02:27.242Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-06T19:02:27.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1905
[2026-02-06T19:02:27.249Z] [BOT] 🔀 Deep merged: Enterprise Solutions Engineer, West Coast @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T19:02:27.249Z] [BOT] 💾 AFTER MERGE: 1905 jobs (merged disk + memory)
[2026-02-06T19:02:27.251Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-02-06T19:02:27.345Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:31.848Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T19:02:31.851Z] [BOT] 📍 [ROUTING] "Trade Compliance Counsel" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T19:02:32.163Z] [BOT] ✅ Posted message: Trade Compliance Counsel @ anthropic in #💰・finance-jobs
[2026-02-06T19:02:32.163Z] [BOT] ✅ Industry: Trade Compliance Counsel @ anthropic
[2026-02-06T19:02:32.164Z] [BOT] 💾 Added channel posting: Trade Compliance Counsel @ anthropic → category channel (1 total channels)
[2026-02-06T19:02:32.164Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-06T19:02:32.205Z] [BOT] ✅ Loaded V2 database: 1905 jobs
💾 DISK STATE: 1905 jobs on disk
[2026-02-06T19:02:32.208Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-06T19:02:32.212Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:32.212Z] [BOT] 💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-06T19:02:32.213Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-06T19:02:32.310Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:34.249Z] [BOT] ✅ Posted message: Trade Compliance Counsel @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T19:02:34.250Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T19:02:34.250Z] [BOT] 💾 Added channel posting: Trade Compliance Counsel @ anthropic → location channel (2 total channels)
[2026-02-06T19:02:34.250Z] [BOT] 💾 BEFORE MERGE: 1906 jobs in memory (cached)
[2026-02-06T19:02:34.292Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
[2026-02-06T19:02:34.293Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1906
[2026-02-06T19:02:34.300Z] [BOT] 🔀 Deep merged: Trade Compliance Counsel @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T19:02:34.301Z] [BOT] 💾 AFTER MERGE: 1906 jobs (merged disk + memory)
[2026-02-06T19:02:34.302Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-02-06T19:02:34.399Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:38.900Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T19:02:38.901Z] [BOT] 📍 [ROUTING] "Safeguards Analyst, Account Abuse" @ anthropic
[2026-02-06T19:02:38.901Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-02-06T19:02:39.217Z] [BOT] ✅ Posted message: Safeguards Analyst, Account Abuse @ anthropic in #🤖・ai-jobs
[2026-02-06T19:02:39.217Z] [BOT] ✅ Industry: Safeguards Analyst, Account Abuse @ anthropic
[2026-02-06T19:02:39.218Z] [BOT] 💾 Added channel posting: Safeguards Analyst, Account Abuse @ anthropic → category channel (1 total channels)
[2026-02-06T19:02:39.218Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T19:02:39.260Z] [BOT] ✅ Loaded V2 database: 1906 jobs
💾 DISK STATE: 1906 jobs on disk
[2026-02-06T19:02:39.261Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T19:02:39.267Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:39.267Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T19:02:39.269Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T19:02:39.369Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
[2026-02-06T19:02:39.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:41.144Z] [BOT] ✅ Posted message: Safeguards Analyst, Account Abuse @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T19:02:41.144Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T19:02:41.144Z] [BOT] 💾 Added channel posting: Safeguards Analyst, Account Abuse @ anthropic → location channel (2 total channels)
[2026-02-06T19:02:41.144Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T19:02:41.187Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T19:02:41.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T19:02:41.194Z] [BOT] 🔀 Deep merged: Safeguards Analyst, Account Abuse @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T19:02:41.194Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T19:02:41.195Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T19:02:41.300Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:45.802Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T19:02:45.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "77f7ec862a27eece"
[2026-02-06T19:02:45.803Z] [BOT] ⏭️  Skipping duplicate: JID_b75dc978 (posted within 7 days)
[2026-02-06T19:02:45.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "b2d1955105ea9f1d"
[2026-02-06T19:02:45.804Z] [BOT] ⏭️  Skipping duplicate: JID_3fa8d492 (posted within 7 days)
[2026-02-06T19:02:45.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da41ab0c..." not found, but found as SHA256 "310c63c636f32536"
[2026-02-06T19:02:45.805Z] [BOT] ⏭️  Skipping duplicate: JID_d5432eed (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ae711e45b67c81f4"
[2026-02-06T19:02:45.805Z] [BOT] ⏭️  Skipping duplicate: JID_2abbf3ed (posted within 7 days)
[2026-02-06T19:02:45.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "bb18383a379d0757"
⏭️  Skipping duplicate: JID_afbdb6af (posted within 7 days)
[2026-02-06T19:02:45.820Z] [BOT] ✅ Loaded pending queue: 186 total (179 pending, 7 enriched, 0 posted)
[2026-02-06T19:02:45.836Z] [BOT] ✅ Saved pending queue: 186 total (179 pending, 2 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T19:02:45.945Z] [BOT] 📂 Loaded 12577 existing routing entries
[2026-02-06T19:02:46.090Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T19:02:46.090Z] [BOT] Total entries: 12582
   Timestamp: 2026-02-06T19:02:46.043Z
[2026-02-06T19:02:46.090Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T19:02:46.091Z] [BOT] Total attempts: 53
   Successful: 8
   Failed: 0
   Skipped: 45
[2026-02-06T19:02:46.091Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-06T19:02:46.091Z] [BOT] Total posts: 8
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🌉・JID_739bbc0b: 2 posts
[2026-02-06T19:02:46.091Z] [BOT] 3. #🌲・JID_efdf5921: 1 posts
     4. #💰・finance-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-06T19:02:46.091Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T19:02:46.091Z] [BOT] 💾 BEFORE MERGE: 1907 jobs in memory (cached)
[2026-02-06T19:02:46.137Z] [BOT] ✅ Loaded V2 database: 1907 jobs
💾 DISK STATE: 1907 jobs on disk
[2026-02-06T19:02:46.138Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1907
[2026-02-06T19:02:46.146Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T19:02:46.146Z] [BOT] 💾 AFTER MERGE: 1907 jobs (merged disk + memory)
[2026-02-06T19:02:46.147Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-02-06T19:02:46.246Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T19:02:46.246Z] [BOT] ✅ Database saved successfully
[2026-02-06T19:02:48.264Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2851) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*