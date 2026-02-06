# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T21:53:06.453Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T21:52:40.244Z] ========================================
[2026-02-06T21:52:40.246Z] Discord Bot Execution Log
[2026-02-06T21:52:40.246Z] Environment: GitHub Actions
[2026-02-06T21:52:40.246Z] Node Version: v20.20.0
[2026-02-06T21:52:40.246Z] ========================================
[2026-02-06T21:52:40.246Z] Environment Variables Check:
[2026-02-06T21:52:40.246Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T21:52:40.246Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T21:52:40.246Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T21:52:40.246Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T21:52:40.246Z] 
Multi-Channel Configuration:
[2026-02-06T21:52:40.246Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T21:52:40.247Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T21:52:40.247Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T21:52:40.247Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T21:52:40.247Z] 
Data Files Check:
[2026-02-06T21:52:40.248Z] .github/data/new_jobs.json: ✅ Exists (10 items, 107932 bytes)
[2026-02-06T21:52:40.291Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8557303 bytes)
[2026-02-06T21:52:40.291Z] 
========================================
[2026-02-06T21:52:40.291Z] Starting Enhanced Discord Bot...
[2026-02-06T21:52:40.291Z] ========================================
[2026-02-06T21:52:40.874Z] [BOT] ✅ Loaded V2 database: 1837 jobs
[2026-02-06T21:52:41.489Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T21:52:41.489Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T21:52:41.490Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T21:52:41.508Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T21:52:41.508Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:52:41.509Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T21:52:41.509Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-06T21:52:41.509Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T21:52:41.510Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T21:52:41.510Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-06T21:52:41.510Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T21:52:41.525Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-06T21:52:41.526Z] [BOT] 🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
[2026-02-06T21:52:41.526Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-02-06T21:52:41.526Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T21:52:41.526Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-06T21:52:41.526Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
[2026-02-06T21:52:41.527Z] [BOT] 🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T21:52:41.528Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
[2026-02-06T21:52:41.528Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
[2026-02-06T21:52:41.528Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
[2026-02-06T21:52:41.528Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T21:52:41.528Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
[2026-02-06T21:52:41.547Z] [BOT] ✅ Loaded pending queue: 223 total (173 pending, 50 enriched, 0 posted)
[2026-02-06T21:52:41.573Z] [BOT] ✅ Saved pending queue: 179 total (173 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (44 blacklisted)
[2026-02-06T21:52:41.573Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-06T21:52:41.574Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-02-06T21:52:41.574Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T21:52:41.576Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-06T21:52:41.577Z] [BOT] 📍 [ROUTING] "Software Engineer, Human Data Interface" @ anthropic
[2026-02-06T21:52:41.577Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T21:52:41.594Z] [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T21:52:42.052Z] [BOT] ✅ Posted message: Software Engineer, Human Data Interface @ anthropic in #💻・tech-jobs
[2026-02-06T21:52:42.052Z] [BOT] ✅ Industry: Software Engineer, Human Data Interface @ anthropic
[2026-02-06T21:52:42.053Z] [BOT] 💾 Added channel posting: Software Engineer, Human Data Interface @ anthropic → category channel (1 total channels)
[2026-02-06T21:52:42.054Z] [BOT] 💾 BEFORE MERGE: 1838 jobs in memory (cached)
[2026-02-06T21:52:42.088Z] [BOT] ✅ Loaded V2 database: 1837 jobs
💾 DISK STATE: 1837 jobs on disk
[2026-02-06T21:52:42.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1838
[2026-02-06T21:52:42.097Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:52:42.097Z] [BOT] 💾 AFTER MERGE: 1838 jobs (merged disk + memory)
[2026-02-06T21:52:42.098Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T21:52:42.104Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T21:52:42.104Z] [BOT] ✅ Archiving complete: 10 archived, 1828 active
[2026-02-06T21:52:42.212Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:44.042Z] [BOT] ✅ Posted message: Software Engineer, Human Data Interface @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T21:52:44.043Z] [BOT] 💾 Added channel posting: Software Engineer, Human Data Interface @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 1828 jobs in memory (cached)
[2026-02-06T21:52:44.070Z] [BOT] ✅ Loaded V2 database: 1828 jobs
💾 DISK STATE: 1828 jobs on disk
[2026-02-06T21:52:44.071Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1828
[2026-02-06T21:52:44.075Z] [BOT] 🔀 Deep merged: Software Engineer, Human Data Interface @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:52:44.075Z] [BOT] 💾 AFTER MERGE: 1828 jobs (merged disk + memory)
[2026-02-06T21:52:44.080Z] [BOT] ✅ No jobs to archive (all 1828 jobs within 7-day window)
[2026-02-06T21:52:44.163Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:45.664Z] [BOT] 📍 [ROUTING] "Applied AI Security Architect " @ anthropic
[2026-02-06T21:52:45.665Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T21:52:45.812Z] [BOT] ✅ Posted message: Applied AI Security Architect  @ anthropic in #💻・tech-jobs
  ✅ Industry: Applied AI Security Architect  @ anthropic
[2026-02-06T21:52:45.813Z] [BOT] 💾 Added channel posting: Applied AI Security Architect  @ anthropic → category channel (1 total channels)
[2026-02-06T21:52:45.813Z] [BOT] 💾 BEFORE MERGE: 1829 jobs in memory (cached)
[2026-02-06T21:52:45.841Z] [BOT] ✅ Loaded V2 database: 1828 jobs
💾 DISK STATE: 1828 jobs on disk
[2026-02-06T21:52:45.841Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1829
[2026-02-06T21:52:45.849Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:52:45.849Z] [BOT] 💾 AFTER MERGE: 1829 jobs (merged disk + memory)
[2026-02-06T21:52:45.850Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-02-06T21:52:45.947Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:47.627Z] [BOT] ✅ Posted message: Applied AI Security Architect  @ anthropic in #🌉・JID_739bbc0b
[2026-02-06T21:52:47.628Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T21:52:47.628Z] [BOT] 💾 Added channel posting: Applied AI Security Architect  @ anthropic → location channel (2 total channels)
[2026-02-06T21:52:47.628Z] [BOT] 💾 BEFORE MERGE: 1829 jobs in memory (cached)
[2026-02-06T21:52:47.656Z] [BOT] ✅ Loaded V2 database: 1829 jobs
💾 DISK STATE: 1829 jobs on disk
[2026-02-06T21:52:47.656Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1829
[2026-02-06T21:52:47.661Z] [BOT] 🔀 Deep merged: Applied AI Security Architect  @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:52:47.661Z] [BOT] 💾 AFTER MERGE: 1829 jobs (merged disk + memory)
[2026-02-06T21:52:47.664Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-02-06T21:52:47.741Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:52.244Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-06T21:52:52.246Z] [BOT] 📍 [ROUTING] "Solutions Integration Engineer III" @ samsara
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T21:52:52.246Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T21:52:52.455Z] [BOT] ✅ Posted message: Solutions Integration Engineer III @ samsara in #🤖・ai-jobs
  ✅ Industry: Solutions Integration Engineer III @ samsara
[2026-02-06T21:52:52.456Z] [BOT] 💾 Added channel posting: Solutions Integration Engineer III @ samsara → category channel (1 total channels)
[2026-02-06T21:52:52.456Z] [BOT] 💾 BEFORE MERGE: 1830 jobs in memory (cached)
[2026-02-06T21:52:52.484Z] [BOT] ✅ Loaded V2 database: 1829 jobs
💾 DISK STATE: 1829 jobs on disk
[2026-02-06T21:52:52.485Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1830
[2026-02-06T21:52:52.488Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:52:52.490Z] [BOT] 💾 AFTER MERGE: 1830 jobs (merged disk + memory)
[2026-02-06T21:52:52.491Z] [BOT] ✅ No jobs to archive (all 1830 jobs within 7-day window)
[2026-02-06T21:52:52.575Z] [BOT] 💾 Saved posted_jobs.json: 1830 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:54.662Z] [BOT] ✅ Posted message: Solutions Integration Engineer III @ samsara in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T21:52:54.663Z] [BOT] 💾 Added channel posting: Solutions Integration Engineer III @ samsara → location channel (2 total channels)
[2026-02-06T21:52:54.663Z] [BOT] 💾 BEFORE MERGE: 1830 jobs in memory (cached)
[2026-02-06T21:52:54.691Z] [BOT] ✅ Loaded V2 database: 1830 jobs
💾 DISK STATE: 1830 jobs on disk
[2026-02-06T21:52:54.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1830
[2026-02-06T21:52:54.695Z] [BOT] 🔀 Deep merged: Solutions Integration Engineer III @ samsara (disk: 1 channels → merged: 2 channels)
[2026-02-06T21:52:54.695Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:52:54.697Z] [BOT] 💾 AFTER MERGE: 1830 jobs (merged disk + memory)
[2026-02-06T21:52:54.698Z] [BOT] ✅ No jobs to archive (all 1830 jobs within 7-day window)
[2026-02-06T21:52:54.791Z] [BOT] 💾 Saved posted_jobs.json: 1830 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:56.291Z] [BOT] 📍 [ROUTING] "Java Software Engineer Intern - Oracle Health & Analytics" @ ORG_dc7620eb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T21:52:56.291Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-06T21:52:56.631Z] [BOT] ✅ Posted message: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb in #🤖・ai-jobs
  ✅ Industry: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb
[2026-02-06T21:52:56.632Z] [BOT] 💾 Added channel posting: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb → category channel (1 total channels)
[2026-02-06T21:52:56.632Z] [BOT] 💾 BEFORE MERGE: 1831 jobs in memory (cached)
[2026-02-06T21:52:56.663Z] [BOT] ✅ Loaded V2 database: 1830 jobs
💾 DISK STATE: 1830 jobs on disk
[2026-02-06T21:52:56.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1831
[2026-02-06T21:52:56.670Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:52:56.670Z] [BOT] 💾 AFTER MERGE: 1831 jobs (merged disk + memory)
[2026-02-06T21:52:56.671Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-02-06T21:52:56.761Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:52:58.521Z] [BOT] ✅ Posted message: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T21:52:58.521Z] [BOT] 💾 Added channel posting: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb → location channel (2 total channels)
[2026-02-06T21:52:58.522Z] [BOT] 💾 BEFORE MERGE: 1831 jobs in memory (cached)
[2026-02-06T21:52:58.550Z] [BOT] ✅ Loaded V2 database: 1831 jobs
💾 DISK STATE: 1831 jobs on disk
[2026-02-06T21:52:58.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1831
[2026-02-06T21:52:58.554Z] [BOT] 🔀 Deep merged: Java Software Engineer Intern - Oracle Health & Analytics @ ORG_dc7620eb (disk: 1 channels → merged: 2 channels)
[2026-02-06T21:52:58.555Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T21:52:58.557Z] [BOT] 💾 AFTER MERGE: 1831 jobs (merged disk + memory)
[2026-02-06T21:52:58.558Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-02-06T21:52:58.654Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T21:53:03.153Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-06T21:53:03.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ccb8a97f9502a72e"
[2026-02-06T21:53:03.154Z] [BOT] ⏭️  Skipping duplicate: JID_40a5bfe9 (posted within 7 days)
[2026-02-06T21:53:03.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "2234386b503762f8"
[2026-02-06T21:53:03.155Z] [BOT] ⏭️  Skipping duplicate: JID_a5f1480c (posted within 7 days)
[2026-02-06T21:53:03.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "bc298ba9b2dcadd5"
[2026-02-06T21:53:03.155Z] [BOT] ⏭️  Skipping duplicate: JID_974b914b (posted within 7 days)
[2026-02-06T21:53:03.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08ed0292..." not found, but found as SHA256 "68c3c034b7ebb4f4"
⏭️  Skipping duplicate: JID_a8b0b78c (posted within 7 days)
[2026-02-06T21:53:03.165Z] [BOT] ✅ Loaded pending queue: 179 total (173 pending, 6 enriched, 0 posted)
[2026-02-06T21:53:03.182Z] [BOT] ✅ Saved pending queue: 179 total (173 pending, 2 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T21:53:03.294Z] [BOT] 📂 Loaded 12597 existing routing entries
[2026-02-06T21:53:03.420Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 12601
[2026-02-06T21:53:03.420Z] [BOT] Timestamp: 2026-02-06T21:53:03.364Z
[2026-02-06T21:53:03.421Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T21:53:03.421Z] [BOT] Total attempts: 54
   Successful: 8
   Failed: 0
   Skipped: 46
[2026-02-06T21:53:03.421Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 3
   Top channels:
     1. #🌉・JID_739bbc0b: 4 posts
     2. #💻・tech-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
[2026-02-06T21:53:03.421Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1831 jobs in memory (cached)
[2026-02-06T21:53:03.465Z] [BOT] ✅ Loaded V2 database: 1831 jobs
💾 DISK STATE: 1831 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1831
[2026-02-06T21:53:03.468Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T21:53:03.468Z] [BOT] 💾 AFTER MERGE: 1831 jobs (merged disk + memory)
[2026-02-06T21:53:03.469Z] [BOT] ✅ No jobs to archive (all 1831 jobs within 7-day window)
[2026-02-06T21:53:03.574Z] [BOT] 💾 Saved posted_jobs.json: 1831 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T21:53:05.592Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*