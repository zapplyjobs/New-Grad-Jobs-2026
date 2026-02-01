# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T18:36:16.269Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T18:35:30.403Z] ========================================
[2026-02-01T18:35:30.405Z] Discord Bot Execution Log
[2026-02-01T18:35:30.405Z] Environment: GitHub Actions
[2026-02-01T18:35:30.405Z] Node Version: v20.20.0
[2026-02-01T18:35:30.405Z] ========================================
[2026-02-01T18:35:30.405Z] Environment Variables Check:
[2026-02-01T18:35:30.405Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T18:35:30.406Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T18:35:30.406Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T18:35:30.406Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T18:35:30.406Z] 
Multi-Channel Configuration:
[2026-02-01T18:35:30.406Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T18:35:30.406Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T18:35:30.406Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:35:30.406Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T18:35:30.407Z] 
Data Files Check:
[2026-02-01T18:35:30.408Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123877 bytes)
[2026-02-01T18:35:30.477Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10518246 bytes)
[2026-02-01T18:35:30.477Z] 
========================================
[2026-02-01T18:35:30.477Z] Starting Enhanced Discord Bot...
[2026-02-01T18:35:30.477Z] ========================================
[2026-02-01T18:35:30.996Z] [BOT] ✅ Loaded V2 database: 2117 jobs
[2026-02-01T18:35:31.648Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T18:35:31.648Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T18:35:31.649Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T18:35:31.718Z] [BOT] ✅ Loaded pending queue: 832 total (782 pending, 50 enriched, 0 posted)
[2026-02-01T18:35:31.718Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad - Defense at Palantir
[2026-02-01T18:35:31.733Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T18:35:31.733Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
[2026-02-01T18:35:31.733Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Director, User Research - Product Design at datadog
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Western States at anthropic
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Southern States at anthropic
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Northeast States at anthropic
🚫 Skipping blacklisted job: Retirement AI Senior Staff Engineer at gusto
🚫 Skipping blacklisted job: Customer Success Manager, Public Sector at anthropic
🚫 Skipping blacklisted job: Workforce Management Tools Administration Lead at gusto
🚫 Skipping blacklisted job: Workforce Management Program Manager at gusto
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Engineering Manager, UI Claude Consumer Products at anthropic
🚫 Skipping blacklisted job: Senior Manager, People Systems at vercel
🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Event Security Program Manager at anthropic
🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
[2026-02-01T18:35:31.734Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
[2026-02-01T18:35:31.735Z] [BOT] 🚫 Skipping blacklisted job: Senior Analyst - Enterprise Field Tools at AbbVie
[2026-02-01T18:35:31.809Z] [BOT] ✅ Loaded pending queue: 832 total (782 pending, 50 enriched, 0 posted)
[2026-02-01T18:35:31.881Z] [BOT] ✅ Saved pending queue: 799 total (782 pending, 17 enriched, 0 posted)
🗑️ Removed 33 blacklisted jobs from pending queue
📋 After blacklist filter: 17 jobs (33 blacklisted)
[2026-02-01T18:35:31.881Z] [BOT] 📋 After data quality filter: 17 jobs (0 invalid)
[2026-02-01T18:35:31.882Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-02-01T18:35:31.882Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Defense @ Palantir: palo alto, seattle, new york, denver
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T18:35:31.885Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T18:35:31.887Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Defense" @ ORG_f56b7436
[2026-02-01T18:35:31.887Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:31.904Z] [BOT ERROR] (node:2671) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T18:35:32.063Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T18:35:32.063Z] [BOT] ✅ Industry: Software Engineer – New Grad - Defense @ ORG_f56b7436
[2026-02-01T18:35:32.064Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T18:35:32.064Z] [BOT] 💾 BEFORE MERGE: 2118 jobs in memory (cached)
[2026-02-01T18:35:32.129Z] [BOT] ✅ Loaded V2 database: 2117 jobs
💾 DISK STATE: 2117 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2118
[2026-02-01T18:35:32.137Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:32.137Z] [BOT] 💾 AFTER MERGE: 2118 jobs (merged disk + memory)
[2026-02-01T18:35:32.139Z] [BOT] ✅ No jobs to archive (all 2118 jobs within 7-day window)
[2026-02-01T18:35:32.279Z] [BOT] 💾 Saved posted_jobs.json: 2118 active jobs
[2026-02-01T18:35:32.282Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:34.106Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #🌉・JID_739bbc0b
[2026-02-01T18:35:34.106Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:35:34.107Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T18:35:34.107Z] [BOT] 💾 BEFORE MERGE: 2118 jobs in memory (cached)
[2026-02-01T18:35:34.159Z] [BOT] ✅ Loaded V2 database: 2118 jobs
💾 DISK STATE: 2118 jobs on disk
[2026-02-01T18:35:34.159Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2118
[2026-02-01T18:35:34.164Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Defense @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:34.164Z] [BOT] 💾 AFTER MERGE: 2118 jobs (merged disk + memory)
[2026-02-01T18:35:34.165Z] [BOT] ✅ No jobs to archive (all 2118 jobs within 7-day window)
[2026-02-01T18:35:34.281Z] [BOT] 💾 Saved posted_jobs.json: 2118 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:35.783Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ nominal
   Category: TECH (matched: "software")
[2026-02-01T18:35:35.783Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:36.104Z] [BOT] ✅ Posted message: Software Engineer - Frontend @ nominal in #💻・tech-jobs
  ✅ Industry: Software Engineer - Frontend @ nominal
[2026-02-01T18:35:36.105Z] [BOT] 💾 Added channel posting: Software Engineer - Frontend @ nominal → category channel (1 total channels)
[2026-02-01T18:35:36.105Z] [BOT] 💾 BEFORE MERGE: 2119 jobs in memory (cached)
[2026-02-01T18:35:36.157Z] [BOT] ✅ Loaded V2 database: 2118 jobs
💾 DISK STATE: 2118 jobs on disk
[2026-02-01T18:35:36.158Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2119
[2026-02-01T18:35:36.162Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:36.162Z] [BOT] 💾 AFTER MERGE: 2119 jobs (merged disk + memory)
[2026-02-01T18:35:36.163Z] [BOT] ✅ No jobs to archive (all 2119 jobs within 7-day window)
[2026-02-01T18:35:36.281Z] [BOT] 💾 Saved posted_jobs.json: 2119 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:37.783Z] [BOT] 📍 [ROUTING] "Platform Hardware Security" @ anthropic
[2026-02-01T18:35:37.784Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:38.091Z] [BOT] ✅ Posted message: Platform Hardware Security @ anthropic in #💻・tech-jobs
  ✅ Industry: Platform Hardware Security @ anthropic
[2026-02-01T18:35:38.092Z] [BOT] 💾 Added channel posting: Platform Hardware Security @ anthropic → category channel (1 total channels)
[2026-02-01T18:35:38.092Z] [BOT] 💾 BEFORE MERGE: 2120 jobs in memory (cached)
[2026-02-01T18:35:38.145Z] [BOT] ✅ Loaded V2 database: 2119 jobs
💾 DISK STATE: 2119 jobs on disk
[2026-02-01T18:35:38.146Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2120
[2026-02-01T18:35:38.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:38.150Z] [BOT] 💾 AFTER MERGE: 2120 jobs (merged disk + memory)
[2026-02-01T18:35:38.151Z] [BOT] ✅ No jobs to archive (all 2120 jobs within 7-day window)
[2026-02-01T18:35:38.280Z] [BOT] 💾 Saved posted_jobs.json: 2120 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:40.017Z] [BOT] ✅ Posted message: Platform Hardware Security @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:35:40.018Z] [BOT] 💾 Added channel posting: Platform Hardware Security @ anthropic → location channel (2 total channels)
[2026-02-01T18:35:40.018Z] [BOT] 💾 BEFORE MERGE: 2120 jobs in memory (cached)
[2026-02-01T18:35:40.071Z] [BOT] ✅ Loaded V2 database: 2120 jobs
💾 DISK STATE: 2120 jobs on disk
[2026-02-01T18:35:40.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2120
[2026-02-01T18:35:40.078Z] [BOT] 🔀 Deep merged: Platform Hardware Security @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:35:40.078Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2120 jobs (merged disk + memory)
[2026-02-01T18:35:40.080Z] [BOT] ✅ No jobs to archive (all 2120 jobs within 7-day window)
[2026-02-01T18:35:40.208Z] [BOT] 💾 Saved posted_jobs.json: 2120 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:41.709Z] [BOT] 📍 [ROUTING] "Pricing and Revenue Planner" @ samsara
[2026-02-01T18:35:41.709Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:41.921Z] [BOT] ✅ Posted message: Pricing and Revenue Planner @ samsara in #💻・tech-jobs
[2026-02-01T18:35:41.922Z] [BOT] ✅ Industry: Pricing and Revenue Planner @ samsara
[2026-02-01T18:35:41.922Z] [BOT] 💾 Added channel posting: Pricing and Revenue Planner @ samsara → category channel (1 total channels)
[2026-02-01T18:35:41.922Z] [BOT] 💾 BEFORE MERGE: 2121 jobs in memory (cached)
[2026-02-01T18:35:41.975Z] [BOT] ✅ Loaded V2 database: 2120 jobs
💾 DISK STATE: 2120 jobs on disk
[2026-02-01T18:35:41.976Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2121
[2026-02-01T18:35:41.979Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:41.979Z] [BOT] 💾 AFTER MERGE: 2121 jobs (merged disk + memory)
[2026-02-01T18:35:41.981Z] [BOT] ✅ No jobs to archive (all 2121 jobs within 7-day window)
[2026-02-01T18:35:42.097Z] [BOT] 💾 Saved posted_jobs.json: 2121 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:43.891Z] [BOT] ✅ Posted message: Pricing and Revenue Planner @ samsara in #🏠・JID_ead674af
[2026-02-01T18:35:43.891Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:35:43.892Z] [BOT] 💾 Added channel posting: Pricing and Revenue Planner @ samsara → location channel (2 total channels)
[2026-02-01T18:35:43.892Z] [BOT] 💾 BEFORE MERGE: 2121 jobs in memory (cached)
[2026-02-01T18:35:43.949Z] [BOT] ✅ Loaded V2 database: 2121 jobs
[2026-02-01T18:35:43.950Z] [BOT] 💾 DISK STATE: 2121 jobs on disk
[2026-02-01T18:35:43.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2121
[2026-02-01T18:35:43.963Z] [BOT] 🔀 Deep merged: Pricing and Revenue Planner @ samsara (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:35:43.963Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:43.963Z] [BOT] 💾 AFTER MERGE: 2121 jobs (merged disk + memory)
[2026-02-01T18:35:43.965Z] [BOT] ✅ No jobs to archive (all 2121 jobs within 7-day window)
[2026-02-01T18:35:44.077Z] [BOT] 💾 Saved posted_jobs.json: 2121 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:45.578Z] [BOT] 📍 [ROUTING] "Software Engineer, Windows - Claude Code" @ anthropic
[2026-02-01T18:35:45.579Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:45.761Z] [BOT] ✅ Posted message: Software Engineer, Windows - Claude Code @ anthropic in #💻・tech-jobs
[2026-02-01T18:35:45.762Z] [BOT] ✅ Industry: Software Engineer, Windows - Claude Code @ anthropic
[2026-02-01T18:35:45.762Z] [BOT] 💾 Added channel posting: Software Engineer, Windows - Claude Code @ anthropic → category channel (1 total channels)
[2026-02-01T18:35:45.763Z] [BOT] 💾 BEFORE MERGE: 2122 jobs in memory (cached)
[2026-02-01T18:35:45.814Z] [BOT] ✅ Loaded V2 database: 2121 jobs
💾 DISK STATE: 2121 jobs on disk
[2026-02-01T18:35:45.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2122
[2026-02-01T18:35:45.818Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:45.818Z] [BOT] 💾 AFTER MERGE: 2122 jobs (merged disk + memory)
[2026-02-01T18:35:45.820Z] [BOT] ✅ No jobs to archive (all 2122 jobs within 7-day window)
[2026-02-01T18:35:45.938Z] [BOT] 💾 Saved posted_jobs.json: 2122 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:47.657Z] [BOT] ✅ Posted message: Software Engineer, Windows - Claude Code @ anthropic in #🌉・JID_739bbc0b
[2026-02-01T18:35:47.657Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:35:47.657Z] [BOT] 💾 Added channel posting: Software Engineer, Windows - Claude Code @ anthropic → location channel (2 total channels)
[2026-02-01T18:35:47.657Z] [BOT] 💾 BEFORE MERGE: 2122 jobs in memory (cached)
[2026-02-01T18:35:47.709Z] [BOT] ✅ Loaded V2 database: 2122 jobs
💾 DISK STATE: 2122 jobs on disk
[2026-02-01T18:35:47.709Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2122
[2026-02-01T18:35:47.713Z] [BOT] 🔀 Deep merged: Software Engineer, Windows - Claude Code @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:35:47.713Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:47.713Z] [BOT] 💾 AFTER MERGE: 2122 jobs (merged disk + memory)
[2026-02-01T18:35:47.714Z] [BOT] ✅ No jobs to archive (all 2122 jobs within 7-day window)
[2026-02-01T18:35:47.841Z] [BOT] 💾 Saved posted_jobs.json: 2122 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:49.344Z] [BOT] 📍 [ROUTING] "Software Engineer - Ref. M-2537" @ ORG_9ad28ad4 Technology
   Category: TECH (matched: "software")
[2026-02-01T18:35:49.345Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:49.786Z] [BOT] ✅ Posted message: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology in #💻・tech-jobs
  ✅ Industry: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology
[2026-02-01T18:35:49.787Z] [BOT] 💾 Added channel posting: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology → category channel (1 total channels)
[2026-02-01T18:35:49.787Z] [BOT] 💾 BEFORE MERGE: 2123 jobs in memory (cached)
[2026-02-01T18:35:49.837Z] [BOT] ✅ Loaded V2 database: 2122 jobs
💾 DISK STATE: 2122 jobs on disk
[2026-02-01T18:35:49.837Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2123
[2026-02-01T18:35:49.841Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:49.841Z] [BOT] 💾 AFTER MERGE: 2123 jobs (merged disk + memory)
[2026-02-01T18:35:49.842Z] [BOT] ✅ No jobs to archive (all 2123 jobs within 7-day window)
[2026-02-01T18:35:49.951Z] [BOT] 💾 Saved posted_jobs.json: 2123 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:51.684Z] [BOT] ✅ Posted message: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology in #📍・JID_6daed763
[2026-02-01T18:35:51.685Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T18:35:51.685Z] [BOT] 💾 Added channel posting: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology → location channel (2 total channels)
[2026-02-01T18:35:51.685Z] [BOT] 💾 BEFORE MERGE: 2123 jobs in memory (cached)
[2026-02-01T18:35:51.738Z] [BOT] ✅ Loaded V2 database: 2123 jobs
💾 DISK STATE: 2123 jobs on disk
[2026-02-01T18:35:51.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2123
[2026-02-01T18:35:51.742Z] [BOT] 🔀 Deep merged: Software Engineer - Ref. M-2537 @ ORG_9ad28ad4 Technology (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:51.742Z] [BOT] 💾 AFTER MERGE: 2123 jobs (merged disk + memory)
[2026-02-01T18:35:51.744Z] [BOT] ✅ No jobs to archive (all 2123 jobs within 7-day window)
[2026-02-01T18:35:51.856Z] [BOT] 💾 Saved posted_jobs.json: 2123 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:53.358Z] [BOT] 📍 [ROUTING] "Early Career Geologist" @ ORG_b01859ad
   Category: TECH (default)
[2026-02-01T18:35:53.358Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:53.522Z] [BOT] ✅ Posted message: Early Career Geologist @ ORG_b01859ad in #💻・tech-jobs
[2026-02-01T18:35:53.523Z] [BOT] ✅ Industry: Early Career Geologist @ ORG_b01859ad
[2026-02-01T18:35:53.523Z] [BOT] 💾 Added channel posting: Early Career Geologist @ ORG_b01859ad → category channel (1 total channels)
[2026-02-01T18:35:53.524Z] [BOT] 💾 BEFORE MERGE: 2124 jobs in memory (cached)
[2026-02-01T18:35:53.583Z] [BOT] ✅ Loaded V2 database: 2123 jobs
💾 DISK STATE: 2123 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2124
[2026-02-01T18:35:53.595Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:53.596Z] [BOT] 💾 AFTER MERGE: 2124 jobs (merged disk + memory)
[2026-02-01T18:35:53.597Z] [BOT] ✅ No jobs to archive (all 2124 jobs within 7-day window)
[2026-02-01T18:35:53.708Z] [BOT] 💾 Saved posted_jobs.json: 2124 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:55.421Z] [BOT] ✅ Posted message: Early Career Geologist @ ORG_b01859ad in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T18:35:55.422Z] [BOT] 💾 Added channel posting: Early Career Geologist @ ORG_b01859ad → location channel (2 total channels)
[2026-02-01T18:35:55.422Z] [BOT] 💾 BEFORE MERGE: 2124 jobs in memory (cached)
[2026-02-01T18:35:55.474Z] [BOT] ✅ Loaded V2 database: 2124 jobs
💾 DISK STATE: 2124 jobs on disk
[2026-02-01T18:35:55.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2124
[2026-02-01T18:35:55.479Z] [BOT] 🔀 Deep merged: Early Career Geologist @ ORG_b01859ad (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:55.479Z] [BOT] 💾 AFTER MERGE: 2124 jobs (merged disk + memory)
[2026-02-01T18:35:55.480Z] [BOT] ✅ No jobs to archive (all 2124 jobs within 7-day window)
[2026-02-01T18:35:55.593Z] [BOT] 💾 Saved posted_jobs.json: 2124 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:57.096Z] [BOT] 📍 [ROUTING] "Entry-Level Full Stack Web Developer" @ ORG_20eac5aa Dynamics Laboratory
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:35:57.254Z] [BOT] ✅ Posted message: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory in #💻・tech-jobs
  ✅ Industry: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory
[2026-02-01T18:35:57.255Z] [BOT] 💾 Added channel posting: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory → category channel (1 total channels)
[2026-02-01T18:35:57.255Z] [BOT] 💾 BEFORE MERGE: 2125 jobs in memory (cached)
[2026-02-01T18:35:57.308Z] [BOT] ✅ Loaded V2 database: 2124 jobs
💾 DISK STATE: 2124 jobs on disk
[2026-02-01T18:35:57.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2125
[2026-02-01T18:35:57.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:35:57.312Z] [BOT] 💾 AFTER MERGE: 2125 jobs (merged disk + memory)
[2026-02-01T18:35:57.313Z] [BOT] ✅ No jobs to archive (all 2125 jobs within 7-day window)
[2026-02-01T18:35:57.427Z] [BOT] 💾 Saved posted_jobs.json: 2125 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:35:59.182Z] [BOT] ✅ Posted message: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T18:35:59.182Z] [BOT] 💾 Added channel posting: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory → location channel (2 total channels)
[2026-02-01T18:35:59.182Z] [BOT] 💾 BEFORE MERGE: 2125 jobs in memory (cached)
[2026-02-01T18:35:59.234Z] [BOT] ✅ Loaded V2 database: 2125 jobs
💾 DISK STATE: 2125 jobs on disk
[2026-02-01T18:35:59.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2125
[2026-02-01T18:35:59.239Z] [BOT] 🔀 Deep merged: Entry-Level Full Stack Web Developer @ ORG_20eac5aa Dynamics Laboratory (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:35:59.239Z] [BOT] 💾 AFTER MERGE: 2125 jobs (merged disk + memory)
[2026-02-01T18:35:59.240Z] [BOT] ✅ No jobs to archive (all 2125 jobs within 7-day window)
[2026-02-01T18:35:59.355Z] [BOT] 💾 Saved posted_jobs.json: 2125 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:36:03.858Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T18:36:03.859Z] [BOT] 📍 [ROUTING] "Finance AI Engineer" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T18:36:03.859Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:36:04.306Z] [BOT] ✅ Posted message: Finance AI Engineer @ anthropic in #🤖・ai-jobs
  ✅ Industry: Finance AI Engineer @ anthropic
[2026-02-01T18:36:04.307Z] [BOT] 💾 Added channel posting: Finance AI Engineer @ anthropic → category channel (1 total channels)
[2026-02-01T18:36:04.307Z] [BOT] 💾 BEFORE MERGE: 2126 jobs in memory (cached)
[2026-02-01T18:36:04.360Z] [BOT] ✅ Loaded V2 database: 2125 jobs
💾 DISK STATE: 2125 jobs on disk
[2026-02-01T18:36:04.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2126
[2026-02-01T18:36:04.364Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:36:04.364Z] [BOT] 💾 AFTER MERGE: 2126 jobs (merged disk + memory)
[2026-02-01T18:36:04.365Z] [BOT] ✅ No jobs to archive (all 2126 jobs within 7-day window)
[2026-02-01T18:36:04.502Z] [BOT] 💾 Saved posted_jobs.json: 2126 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:36:06.172Z] [BOT] ✅ Posted message: Finance AI Engineer @ anthropic in #🌉・JID_739bbc0b
[2026-02-01T18:36:06.172Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:36:06.173Z] [BOT] 💾 Added channel posting: Finance AI Engineer @ anthropic → location channel (2 total channels)
[2026-02-01T18:36:06.173Z] [BOT] 💾 BEFORE MERGE: 2126 jobs in memory (cached)
[2026-02-01T18:36:06.229Z] [BOT] ✅ Loaded V2 database: 2126 jobs
[2026-02-01T18:36:06.231Z] [BOT] 💾 DISK STATE: 2126 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2126
[2026-02-01T18:36:06.242Z] [BOT] 🔀 Deep merged: Finance AI Engineer @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:36:06.242Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:36:06.242Z] [BOT] 💾 AFTER MERGE: 2126 jobs (merged disk + memory)
[2026-02-01T18:36:06.244Z] [BOT] ✅ No jobs to archive (all 2126 jobs within 7-day window)
[2026-02-01T18:36:06.355Z] [BOT] 💾 Saved posted_jobs.json: 2126 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:36:07.857Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-02-01T18:36:07.857Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T18:36:08.139Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-02-01T18:36:08.140Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-02-01T18:36:08.140Z] [BOT] 💾 BEFORE MERGE: 2127 jobs in memory (cached)
[2026-02-01T18:36:08.193Z] [BOT] ✅ Loaded V2 database: 2126 jobs
💾 DISK STATE: 2126 jobs on disk
[2026-02-01T18:36:08.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2127
[2026-02-01T18:36:08.197Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:36:08.197Z] [BOT] 💾 AFTER MERGE: 2127 jobs (merged disk + memory)
[2026-02-01T18:36:08.198Z] [BOT] ✅ No jobs to archive (all 2127 jobs within 7-day window)
[2026-02-01T18:36:08.314Z] [BOT] 💾 Saved posted_jobs.json: 2127 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:36:12.815Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T18:36:12.817Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ae23dbd0..." not found, but found as SHA256 "e28f070f88fafc0e"
[2026-02-01T18:36:12.817Z] [BOT] ⏭️  Skipping duplicate: JID_61764df6 (posted within 7 days)
[2026-02-01T18:36:12.817Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_43290e65..." not found, but found as SHA256 "9490c0d961fe7c28"
[2026-02-01T18:36:12.818Z] [BOT] ⏭️  Skipping duplicate: JID_9396c1b0 (posted within 7 days)
[2026-02-01T18:36:12.818Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5b1f2215b0f86079"
[2026-02-01T18:36:12.818Z] [BOT] ⏭️  Skipping duplicate: JID_1dcfc3bd (posted within 7 days)
[2026-02-01T18:36:12.818Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c297c1..." not found, but found as SHA256 "94454dae5db7858d"
[2026-02-01T18:36:12.818Z] [BOT] ⏭️  Skipping duplicate: JID_62bea5bf (posted within 7 days)
[2026-02-01T18:36:12.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4f910d5d587f2fdd"
[2026-02-01T18:36:12.819Z] [BOT] ⏭️  Skipping duplicate: JID_d8f9fb89 (posted within 7 days)
[2026-02-01T18:36:12.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8e5f896d41279145"
[2026-02-01T18:36:12.819Z] [BOT] ⏭️  Skipping duplicate: JID_92c413c9 (posted within 7 days)
[2026-02-01T18:36:12.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b465b69d..." not found, but found as SHA256 "8a59fac4015f6363"
[2026-02-01T18:36:12.819Z] [BOT] ⏭️  Skipping duplicate: JID_0f15bb1c (posted within 7 days)
[2026-02-01T18:36:12.820Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ccf6e742..." not found, but found as SHA256 "dc4f03442e12b39f"
[2026-02-01T18:36:12.820Z] [BOT] ⏭️  Skipping duplicate: JID_113f9ae5-cx_2001-job-79442 (posted within 7 days)
[2026-02-01T18:36:12.820Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d47c749..." not found, but found as SHA256 "459800715a74ad35"
[2026-02-01T18:36:12.820Z] [BOT] ⏭️  Skipping duplicate: JID_a393cf73 (posted within 7 days)
[2026-02-01T18:36:12.820Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d68ea6d5..." not found, but found as SHA256 "bee55aecfae73abb"
[2026-02-01T18:36:12.820Z] [BOT] ⏭️  Skipping duplicate: JID_5eb9b96e (posted within 7 days)
[2026-02-01T18:36:12.894Z] [BOT] ✅ Loaded pending queue: 799 total (782 pending, 17 enriched, 0 posted)
[2026-02-01T18:36:12.959Z] [BOT] ✅ Saved pending queue: 799 total (782 pending, 7 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T18:36:13.062Z] [BOT] 📂 Loaded 12198 existing routing entries
[2026-02-01T18:36:13.187Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12208
[2026-02-01T18:36:13.187Z] [BOT] Timestamp: 2026-02-01T18:36:13.143Z
[2026-02-01T18:36:13.188Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T18:36:13.188Z] [BOT] Total attempts: 51
   Successful: 18
   Failed: 0
   Skipped: 33
[2026-02-01T18:36:13.188Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T18:36:13.188Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 8 posts
[2026-02-01T18:36:13.188Z] [BOT] 2. #🌉・JID_739bbc0b: 4 posts
     3. #📍・JID_6daed763: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-02-01T18:36:13.188Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2127 jobs in memory (cached)
[2026-02-01T18:36:13.244Z] [BOT] ✅ Loaded V2 database: 2127 jobs
💾 DISK STATE: 2127 jobs on disk
[2026-02-01T18:36:13.244Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2127
[2026-02-01T18:36:13.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:36:13.248Z] [BOT] 💾 AFTER MERGE: 2127 jobs (merged disk + memory)
[2026-02-01T18:36:13.249Z] [BOT] ✅ No jobs to archive (all 2127 jobs within 7-day window)
[2026-02-01T18:36:13.366Z] [BOT] 💾 Saved posted_jobs.json: 2127 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:36:13.367Z] [BOT] ✅ Database saved successfully
[2026-02-01T18:36:15.387Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2671) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*