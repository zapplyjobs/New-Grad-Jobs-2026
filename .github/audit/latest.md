# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T18:25:32.803Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T18:24:51.347Z] ========================================
[2026-02-01T18:24:51.349Z] Discord Bot Execution Log
[2026-02-01T18:24:51.349Z] Environment: GitHub Actions
[2026-02-01T18:24:51.349Z] Node Version: v20.20.0
[2026-02-01T18:24:51.349Z] ========================================
[2026-02-01T18:24:51.349Z] Environment Variables Check:
[2026-02-01T18:24:51.349Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T18:24:51.349Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T18:24:51.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T18:24:51.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T18:24:51.350Z] 
Multi-Channel Configuration:
[2026-02-01T18:24:51.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T18:24:51.350Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.350Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T18:24:51.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.350Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.350Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.350Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.351Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T18:24:51.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T18:24:51.351Z] 
Data Files Check:
[2026-02-01T18:24:51.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104237 bytes)
[2026-02-01T18:24:51.406Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10462685 bytes)
[2026-02-01T18:24:51.407Z] 
========================================
[2026-02-01T18:24:51.407Z] Starting Enhanced Discord Bot...
[2026-02-01T18:24:51.407Z] ========================================
[2026-02-01T18:24:51.966Z] [BOT] ✅ Loaded V2 database: 2107 jobs
[2026-02-01T18:24:52.521Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T18:24:52.521Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T18:24:52.522Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T18:24:52.573Z] [BOT] ✅ Loaded pending queue: 846 total (796 pending, 50 enriched, 0 posted)
[2026-02-01T18:24:52.573Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad - Defense at Palantir
[2026-02-01T18:24:52.593Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T18:24:52.593Z] [BOT] 🚫 Skipping blacklisted job: Compliance Oversight Lead at anthropic
[2026-02-01T18:24:52.593Z] [BOT] 🚫 Skipping blacklisted job: Data Center Facility Operations Lead at anthropic
[2026-02-01T18:24:52.593Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Senior HRBP - EPD  at vercel
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Director, Sales Enablement  at figma
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Product Engineer at gusto
🚫 Skipping blacklisted job: Sr. Customer Marketing Manager - Startups  at vercel
🚫 Skipping blacklisted job: Staff Data Platform Engineer at vercel
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Technical Enterprise Client Success Manager - Symmetry at gusto
🚫 Skipping blacklisted job: Staff - Data Scientist at Walmart
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Boston/New York at datadog
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Technical Account Manager 2 - New York/Boston at datadog
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Staff Software Engineer, Database Infrastructure at gusto
🚫 Skipping blacklisted job: Manager of Sales Engineering, Majors/Commercial - AMER at vercel
[2026-02-01T18:24:52.594Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
[2026-02-01T18:24:52.595Z] [BOT] 🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Data Engineering Manager at discord
🚫 Skipping blacklisted job: Major Accounts Manager at datadog
[2026-02-01T18:24:52.645Z] [BOT] ✅ Loaded pending queue: 846 total (796 pending, 50 enriched, 0 posted)
[2026-02-01T18:24:52.718Z] [BOT] ✅ Saved pending queue: 813 total (796 pending, 17 enriched, 0 posted)
🗑️ Removed 33 blacklisted jobs from pending queue
[2026-02-01T18:24:52.719Z] [BOT] 📋 After blacklist filter: 17 jobs (33 blacklisted)
📋 After data quality filter: 17 jobs (0 invalid)
[2026-02-01T18:24:52.719Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-02-01T18:24:52.720Z] [BOT] (5 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Defense @ Palantir: washington, palo alto, seattle, new york, denver
[2026-02-01T18:24:52.720Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T18:24:52.723Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-02-01T18:24:52.725Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Defense" @ ORG_f56b7436
[2026-02-01T18:24:52.725Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:24:52.741Z] [BOT ERROR] (node:2637) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T18:24:53.206Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T18:24:53.206Z] [BOT] ✅ Industry: Software Engineer – New Grad - Defense @ ORG_f56b7436
[2026-02-01T18:24:53.207Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T18:24:53.207Z] [BOT] 💾 BEFORE MERGE: 2108 jobs in memory (cached)
[2026-02-01T18:24:53.251Z] [BOT] ✅ Loaded V2 database: 2107 jobs
💾 DISK STATE: 2107 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2108
[2026-02-01T18:24:53.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:24:53.257Z] [BOT] 💾 AFTER MERGE: 2108 jobs (merged disk + memory)
[2026-02-01T18:24:53.259Z] [BOT] ✅ No jobs to archive (all 2108 jobs within 7-day window)
[2026-02-01T18:24:53.385Z] [BOT] 💾 Saved posted_jobs.json: 2108 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:24:55.077Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Defense @ ORG_f56b7436 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T18:24:55.077Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Defense @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T18:24:55.077Z] [BOT] 💾 BEFORE MERGE: 2108 jobs in memory (cached)
[2026-02-01T18:24:55.113Z] [BOT] ✅ Loaded V2 database: 2108 jobs
[2026-02-01T18:24:55.113Z] [BOT] 💾 DISK STATE: 2108 jobs on disk
[2026-02-01T18:24:55.114Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2108
[2026-02-01T18:24:55.118Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Defense @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:24:55.118Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2108 jobs (merged disk + memory)
[2026-02-01T18:24:55.120Z] [BOT] ✅ No jobs to archive (all 2108 jobs within 7-day window)
[2026-02-01T18:24:55.221Z] [BOT] 💾 Saved posted_jobs.json: 2108 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:24:56.724Z] [BOT] 📍 [ROUTING] "Infra Engineer - Datacenters" @ railway
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:24:57.062Z] [BOT] ✅ Posted message: Infra Engineer - Datacenters @ railway in #💻・tech-jobs
[2026-02-01T18:24:57.063Z] [BOT] ✅ Industry: Infra Engineer - Datacenters @ railway
[2026-02-01T18:24:57.063Z] [BOT] 💾 Added channel posting: Infra Engineer - Datacenters @ railway → category channel (1 total channels)
[2026-02-01T18:24:57.063Z] [BOT] 💾 BEFORE MERGE: 2109 jobs in memory (cached)
[2026-02-01T18:24:57.100Z] [BOT] ✅ Loaded V2 database: 2108 jobs
💾 DISK STATE: 2108 jobs on disk
[2026-02-01T18:24:57.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2109
[2026-02-01T18:24:57.104Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:24:57.105Z] [BOT] 💾 AFTER MERGE: 2109 jobs (merged disk + memory)
[2026-02-01T18:24:57.106Z] [BOT] ✅ No jobs to archive (all 2109 jobs within 7-day window)
[2026-02-01T18:24:57.222Z] [BOT] 💾 Saved posted_jobs.json: 2109 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:24:58.949Z] [BOT] ✅ Posted message: Infra Engineer - Datacenters @ railway in #🏠・JID_ead674af
[2026-02-01T18:24:58.949Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:24:58.949Z] [BOT] 💾 Added channel posting: Infra Engineer - Datacenters @ railway → location channel (2 total channels)
[2026-02-01T18:24:58.950Z] [BOT] 💾 BEFORE MERGE: 2109 jobs in memory (cached)
[2026-02-01T18:24:58.984Z] [BOT] ✅ Loaded V2 database: 2109 jobs
💾 DISK STATE: 2109 jobs on disk
[2026-02-01T18:24:58.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2109
[2026-02-01T18:24:58.988Z] [BOT] 🔀 Deep merged: Infra Engineer - Datacenters @ railway (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:24:58.988Z] [BOT] 💾 AFTER MERGE: 2109 jobs (merged disk + memory)
[2026-02-01T18:24:58.990Z] [BOT] ✅ No jobs to archive (all 2109 jobs within 7-day window)
[2026-02-01T18:24:59.107Z] [BOT] 💾 Saved posted_jobs.json: 2109 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:00.605Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T18:25:00.606Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:00.975Z] [BOT] ✅ Posted message: Support Engineer (AMER) @ supabase in #💻・tech-jobs
[2026-02-01T18:25:00.975Z] [BOT] ✅ Industry: Support Engineer (AMER) @ supabase
[2026-02-01T18:25:00.976Z] [BOT] 💾 Added channel posting: Support Engineer (AMER) @ supabase → category channel (1 total channels)
[2026-02-01T18:25:00.976Z] [BOT] 💾 BEFORE MERGE: 2110 jobs in memory (cached)
[2026-02-01T18:25:01.019Z] [BOT] ✅ Loaded V2 database: 2109 jobs
💾 DISK STATE: 2109 jobs on disk
[2026-02-01T18:25:01.019Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2110
[2026-02-01T18:25:01.025Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:01.025Z] [BOT] 💾 AFTER MERGE: 2110 jobs (merged disk + memory)
[2026-02-01T18:25:01.027Z] [BOT] ✅ No jobs to archive (all 2110 jobs within 7-day window)
[2026-02-01T18:25:01.136Z] [BOT] 💾 Saved posted_jobs.json: 2110 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:02.878Z] [BOT] ✅ Posted message: Support Engineer (AMER) @ supabase in #🏠・JID_ead674af
[2026-02-01T18:25:02.878Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:25:02.879Z] [BOT] 💾 Added channel posting: Support Engineer (AMER) @ supabase → location channel (2 total channels)
[2026-02-01T18:25:02.879Z] [BOT] 💾 BEFORE MERGE: 2110 jobs in memory (cached)
[2026-02-01T18:25:02.914Z] [BOT] ✅ Loaded V2 database: 2110 jobs
💾 DISK STATE: 2110 jobs on disk
[2026-02-01T18:25:02.914Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2110
[2026-02-01T18:25:02.918Z] [BOT] 🔀 Deep merged: Support Engineer (AMER) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:25:02.918Z] [BOT] 💾 AFTER MERGE: 2110 jobs (merged disk + memory)
[2026-02-01T18:25:02.919Z] [BOT] ✅ No jobs to archive (all 2110 jobs within 7-day window)
[2026-02-01T18:25:03.015Z] [BOT] 💾 Saved posted_jobs.json: 2110 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:04.518Z] [BOT] 📍 [ROUTING] "Developer Relations" @ railway
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:04.782Z] [BOT] ✅ Posted message: Developer Relations @ railway in #💻・tech-jobs
[2026-02-01T18:25:04.782Z] [BOT] ✅ Industry: Developer Relations @ railway
[2026-02-01T18:25:04.782Z] [BOT] 💾 Added channel posting: Developer Relations @ railway → category channel (1 total channels)
[2026-02-01T18:25:04.783Z] [BOT] 💾 BEFORE MERGE: 2111 jobs in memory (cached)
[2026-02-01T18:25:04.820Z] [BOT] ✅ Loaded V2 database: 2110 jobs
💾 DISK STATE: 2110 jobs on disk
[2026-02-01T18:25:04.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2111
[2026-02-01T18:25:04.824Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:04.824Z] [BOT] 💾 AFTER MERGE: 2111 jobs (merged disk + memory)
[2026-02-01T18:25:04.825Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-02-01T18:25:04.940Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:06.688Z] [BOT] ✅ Posted message: Developer Relations @ railway in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:25:06.689Z] [BOT] 💾 Added channel posting: Developer Relations @ railway → location channel (2 total channels)
[2026-02-01T18:25:06.689Z] [BOT] 💾 BEFORE MERGE: 2111 jobs in memory (cached)
[2026-02-01T18:25:06.723Z] [BOT] ✅ Loaded V2 database: 2111 jobs
💾 DISK STATE: 2111 jobs on disk
[2026-02-01T18:25:06.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2111
[2026-02-01T18:25:06.727Z] [BOT] 🔀 Deep merged: Developer Relations @ railway (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:25:06.727Z] [BOT] 💾 AFTER MERGE: 2111 jobs (merged disk + memory)
[2026-02-01T18:25:06.729Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-02-01T18:25:06.829Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:08.330Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
   Category: TECH (default)
[2026-02-01T18:25:08.331Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:08.672Z] [BOT] ✅ Posted message: Customer Solution Architect (US time zones) @ supabase in #💻・tech-jobs
  ✅ Industry: Customer Solution Architect (US time zones) @ supabase
[2026-02-01T18:25:08.673Z] [BOT] 💾 Added channel posting: Customer Solution Architect (US time zones) @ supabase → category channel (1 total channels)
[2026-02-01T18:25:08.673Z] [BOT] 💾 BEFORE MERGE: 2112 jobs in memory (cached)
[2026-02-01T18:25:08.710Z] [BOT] ✅ Loaded V2 database: 2111 jobs
💾 DISK STATE: 2111 jobs on disk
[2026-02-01T18:25:08.710Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2112
[2026-02-01T18:25:08.714Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:08.714Z] [BOT] 💾 AFTER MERGE: 2112 jobs (merged disk + memory)
[2026-02-01T18:25:08.716Z] [BOT] ✅ No jobs to archive (all 2112 jobs within 7-day window)
[2026-02-01T18:25:08.819Z] [BOT] 💾 Saved posted_jobs.json: 2112 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:10.641Z] [BOT] ✅ Posted message: Customer Solution Architect (US time zones) @ supabase in #🏠・JID_ead674af
[2026-02-01T18:25:10.641Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:25:10.642Z] [BOT] 💾 Added channel posting: Customer Solution Architect (US time zones) @ supabase → location channel (2 total channels)
[2026-02-01T18:25:10.642Z] [BOT] 💾 BEFORE MERGE: 2112 jobs in memory (cached)
[2026-02-01T18:25:10.676Z] [BOT] ✅ Loaded V2 database: 2112 jobs
💾 DISK STATE: 2112 jobs on disk
[2026-02-01T18:25:10.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2112
[2026-02-01T18:25:10.680Z] [BOT] 🔀 Deep merged: Customer Solution Architect (US time zones) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:25:10.681Z] [BOT] 💾 AFTER MERGE: 2112 jobs (merged disk + memory)
[2026-02-01T18:25:10.682Z] [BOT] ✅ No jobs to archive (all 2112 jobs within 7-day window)
[2026-02-01T18:25:10.784Z] [BOT] 💾 Saved posted_jobs.json: 2112 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:12.287Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ nominal
[2026-02-01T18:25:12.287Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:12.506Z] [BOT] ✅ Posted message: Software Engineer - Backend @ nominal in #💻・tech-jobs
  ✅ Industry: Software Engineer - Backend @ nominal
[2026-02-01T18:25:12.507Z] [BOT] 💾 Added channel posting: Software Engineer - Backend @ nominal → category channel (1 total channels)
[2026-02-01T18:25:12.507Z] [BOT] 💾 BEFORE MERGE: 2113 jobs in memory (cached)
[2026-02-01T18:25:12.549Z] [BOT] ✅ Loaded V2 database: 2112 jobs
💾 DISK STATE: 2112 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2113
[2026-02-01T18:25:12.555Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:12.555Z] [BOT] 💾 AFTER MERGE: 2113 jobs (merged disk + memory)
[2026-02-01T18:25:12.557Z] [BOT] ✅ No jobs to archive (all 2113 jobs within 7-day window)
[2026-02-01T18:25:12.665Z] [BOT] 💾 Saved posted_jobs.json: 2113 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:14.165Z] [BOT] 📍 [ROUTING] "Deployment Systems Engineer" @ nominal
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:14.428Z] [BOT] ✅ Posted message: Deployment Systems Engineer @ nominal in #💻・tech-jobs
  ✅ Industry: Deployment Systems Engineer @ nominal
[2026-02-01T18:25:14.429Z] [BOT] 💾 Added channel posting: Deployment Systems Engineer @ nominal → category channel (1 total channels)
[2026-02-01T18:25:14.429Z] [BOT] 💾 BEFORE MERGE: 2114 jobs in memory (cached)
[2026-02-01T18:25:14.463Z] [BOT] ✅ Loaded V2 database: 2113 jobs
💾 DISK STATE: 2113 jobs on disk
[2026-02-01T18:25:14.464Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2114
[2026-02-01T18:25:14.467Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:14.467Z] [BOT] 💾 AFTER MERGE: 2114 jobs (merged disk + memory)
[2026-02-01T18:25:14.468Z] [BOT] ✅ No jobs to archive (all 2114 jobs within 7-day window)
[2026-02-01T18:25:14.571Z] [BOT] 💾 Saved posted_jobs.json: 2114 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:16.074Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer" @ railway
[2026-02-01T18:25:16.074Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:16.363Z] [BOT] ✅ Posted message: Infrastructure Engineer @ railway in #💻・tech-jobs
[2026-02-01T18:25:16.363Z] [BOT] ✅ Industry: Infrastructure Engineer @ railway
[2026-02-01T18:25:16.364Z] [BOT] 💾 Added channel posting: Infrastructure Engineer @ railway → category channel (1 total channels)
[2026-02-01T18:25:16.364Z] [BOT] 💾 BEFORE MERGE: 2115 jobs in memory (cached)
[2026-02-01T18:25:16.398Z] [BOT] ✅ Loaded V2 database: 2114 jobs
💾 DISK STATE: 2114 jobs on disk
[2026-02-01T18:25:16.399Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2115
[2026-02-01T18:25:16.402Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:16.402Z] [BOT] 💾 AFTER MERGE: 2115 jobs (merged disk + memory)
[2026-02-01T18:25:16.404Z] [BOT] ✅ No jobs to archive (all 2115 jobs within 7-day window)
[2026-02-01T18:25:16.506Z] [BOT] 💾 Saved posted_jobs.json: 2115 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:18.230Z] [BOT] ✅ Posted message: Infrastructure Engineer @ railway in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T18:25:18.231Z] [BOT] 💾 Added channel posting: Infrastructure Engineer @ railway → location channel (2 total channels)
[2026-02-01T18:25:18.231Z] [BOT] 💾 BEFORE MERGE: 2115 jobs in memory (cached)
[2026-02-01T18:25:18.267Z] [BOT] ✅ Loaded V2 database: 2115 jobs
💾 DISK STATE: 2115 jobs on disk
[2026-02-01T18:25:18.267Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2115
[2026-02-01T18:25:18.271Z] [BOT] 🔀 Deep merged: Infrastructure Engineer @ railway (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T18:25:18.271Z] [BOT] 💾 AFTER MERGE: 2115 jobs (merged disk + memory)
[2026-02-01T18:25:18.272Z] [BOT] ✅ No jobs to archive (all 2115 jobs within 7-day window)
[2026-02-01T18:25:18.377Z] [BOT] 💾 Saved posted_jobs.json: 2115 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:19.879Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:20.180Z] [BOT] ✅ Posted message: Mission Operations Engineer @ nominal in #💻・tech-jobs
[2026-02-01T18:25:20.181Z] [BOT] ✅ Industry: Mission Operations Engineer @ nominal
[2026-02-01T18:25:20.181Z] [BOT] 💾 Added channel posting: Mission Operations Engineer @ nominal → category channel (1 total channels)
[2026-02-01T18:25:20.181Z] [BOT] 💾 BEFORE MERGE: 2116 jobs in memory (cached)
[2026-02-01T18:25:20.224Z] [BOT] ✅ Loaded V2 database: 2115 jobs
💾 DISK STATE: 2115 jobs on disk
[2026-02-01T18:25:20.227Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2116
[2026-02-01T18:25:20.229Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:20.230Z] [BOT] 💾 AFTER MERGE: 2116 jobs (merged disk + memory)
[2026-02-01T18:25:20.231Z] [BOT] ✅ No jobs to archive (all 2116 jobs within 7-day window)
[2026-02-01T18:25:20.341Z] [BOT] 💾 Saved posted_jobs.json: 2116 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:21.842Z] [BOT] 📍 [ROUTING] "Platform Security Engineer, Operating Systems" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T18:25:22.063Z] [BOT] ✅ Posted message: Platform Security Engineer, Operating Systems @ anthropic in #💻・tech-jobs
  ✅ Industry: Platform Security Engineer, Operating Systems @ anthropic
[2026-02-01T18:25:22.064Z] [BOT] 💾 Added channel posting: Platform Security Engineer, Operating Systems @ anthropic → category channel (1 total channels)
[2026-02-01T18:25:22.064Z] [BOT] 💾 BEFORE MERGE: 2117 jobs in memory (cached)
[2026-02-01T18:25:22.100Z] [BOT] ✅ Loaded V2 database: 2116 jobs
💾 DISK STATE: 2116 jobs on disk
[2026-02-01T18:25:22.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2117
[2026-02-01T18:25:22.104Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:22.104Z] [BOT] 💾 AFTER MERGE: 2117 jobs (merged disk + memory)
[2026-02-01T18:25:22.105Z] [BOT] ✅ No jobs to archive (all 2117 jobs within 7-day window)
[2026-02-01T18:25:22.217Z] [BOT] 💾 Saved posted_jobs.json: 2117 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:24.095Z] [BOT] ✅ Posted message: Platform Security Engineer, Operating Systems @ anthropic in #🌉・JID_739bbc0b
[2026-02-01T18:25:24.096Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T18:25:24.096Z] [BOT] 💾 Added channel posting: Platform Security Engineer, Operating Systems @ anthropic → location channel (2 total channels)
[2026-02-01T18:25:24.096Z] [BOT] 💾 BEFORE MERGE: 2117 jobs in memory (cached)
[2026-02-01T18:25:24.131Z] [BOT] ✅ Loaded V2 database: 2117 jobs
💾 DISK STATE: 2117 jobs on disk
[2026-02-01T18:25:24.131Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2117
[2026-02-01T18:25:24.135Z] [BOT] 🔀 Deep merged: Platform Security Engineer, Operating Systems @ anthropic (disk: 1 channels → merged: 2 channels)
[2026-02-01T18:25:24.135Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2117 jobs (merged disk + memory)
[2026-02-01T18:25:24.136Z] [BOT] ✅ No jobs to archive (all 2117 jobs within 7-day window)
[2026-02-01T18:25:24.237Z] [BOT] 💾 Saved posted_jobs.json: 2117 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:28.739Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T18:25:28.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_de515b27..." not found, but found as SHA256 "24fb72b6b2501f37"
[2026-02-01T18:25:28.741Z] [BOT] ⏭️  Skipping duplicate: JID_56add5bb (posted within 7 days)
[2026-02-01T18:25:28.741Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39a52dfe..." not found, but found as SHA256 "d72ed631259ed94a"
[2026-02-01T18:25:28.742Z] [BOT] ⏭️  Skipping duplicate: JID_7f456e2b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ccac7f62-..." not found, but found as SHA256 "2563f611477a8838"
⏭️  Skipping duplicate: JID_44482875 (posted within 7 days)
[2026-02-01T18:25:28.742Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7c1b0063..." not found, but found as SHA256 "c62ddf89133301a5"
[2026-02-01T18:25:28.742Z] [BOT] ⏭️  Skipping duplicate: JID_369707cc (posted within 7 days)
[2026-02-01T18:25:28.742Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e60842e7-..." not found, but found as SHA256 "1895320a84f39c7e"
[2026-02-01T18:25:28.742Z] [BOT] ⏭️  Skipping duplicate: JID_9ff8ee50 (posted within 7 days)
[2026-02-01T18:25:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5b92949d..." not found, but found as SHA256 "c1c10c9ea78f037f"
[2026-02-01T18:25:28.743Z] [BOT] ⏭️  Skipping duplicate: JID_cd394886 (posted within 7 days)
[2026-02-01T18:25:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea5233df..." not found, but found as SHA256 "1474544508869130"
[2026-02-01T18:25:28.743Z] [BOT] ⏭️  Skipping duplicate: JID_8ce68f90 (posted within 7 days)
[2026-02-01T18:25:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a5bb17c..." not found, but found as SHA256 "c4ff08987404d10d"
[2026-02-01T18:25:28.743Z] [BOT] ⏭️  Skipping duplicate: JID_57de7a40 (posted within 7 days)
[2026-02-01T18:25:28.743Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e5730c2c..." not found, but found as SHA256 "7d35099331b7faa5"
[2026-02-01T18:25:28.744Z] [BOT] ⏭️  Skipping duplicate: JID_b07f940c (posted within 7 days)
[2026-02-01T18:25:28.744Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f82a2630ec6cdd08"
[2026-02-01T18:25:28.744Z] [BOT] ⏭️  Skipping duplicate: JID_9f32d073 (posted within 7 days)
[2026-02-01T18:25:28.795Z] [BOT] ✅ Loaded pending queue: 813 total (796 pending, 17 enriched, 0 posted)
[2026-02-01T18:25:28.876Z] [BOT] ✅ Saved pending queue: 813 total (796 pending, 7 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T18:25:28.877Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T18:25:28.967Z] [BOT] 📂 Loaded 12188 existing routing entries
[2026-02-01T18:25:29.095Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12198
[2026-02-01T18:25:29.096Z] [BOT] Timestamp: 2026-02-01T18:25:29.047Z
[2026-02-01T18:25:29.096Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T18:25:29.097Z] [BOT] Total attempts: 50
   Successful: 17
   Failed: 0
   Skipped: 33
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T18:25:29.097Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 10 posts
     2. #🏠・JID_ead674af: 5 posts
[2026-02-01T18:25:29.097Z] [BOT] 3. #📍・JID_6daed763: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
[2026-02-01T18:25:29.097Z] [BOT] [STATS] Channel stats saved
[2026-02-01T18:25:29.097Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2117 jobs in memory (cached)
[2026-02-01T18:25:29.156Z] [BOT] ✅ Loaded V2 database: 2117 jobs
💾 DISK STATE: 2117 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2117
[2026-02-01T18:25:29.160Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T18:25:29.160Z] [BOT] 💾 AFTER MERGE: 2117 jobs (merged disk + memory)
[2026-02-01T18:25:29.161Z] [BOT] ✅ No jobs to archive (all 2117 jobs within 7-day window)
[2026-02-01T18:25:29.262Z] [BOT] 💾 Saved posted_jobs.json: 2117 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T18:25:29.262Z] [BOT] ✅ Database saved successfully
[2026-02-01T18:25:31.290Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2637) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*