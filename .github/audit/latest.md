# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T12:07:36.805Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T12:07:06.295Z] ========================================
[2026-02-06T12:07:06.296Z] Discord Bot Execution Log
[2026-02-06T12:07:06.296Z] Environment: GitHub Actions
[2026-02-06T12:07:06.296Z] Node Version: v20.20.0
[2026-02-06T12:07:06.296Z] ========================================
[2026-02-06T12:07:06.296Z] Environment Variables Check:
[2026-02-06T12:07:06.296Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T12:07:06.297Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T12:07:06.297Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T12:07:06.297Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T12:07:06.297Z] 
Multi-Channel Configuration:
[2026-02-06T12:07:06.297Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T12:07:06.297Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T12:07:06.297Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T12:07:06.297Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T12:07:06.298Z] 
Data Files Check:
[2026-02-06T12:07:06.299Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183317 bytes)
[2026-02-06T12:07:06.368Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9885457 bytes)
[2026-02-06T12:07:06.368Z] 
========================================
[2026-02-06T12:07:06.369Z] Starting Enhanced Discord Bot...
[2026-02-06T12:07:06.369Z] ========================================
[2026-02-06T12:07:06.896Z] [BOT] ✅ Loaded V2 database: 2039 jobs
[2026-02-06T12:07:07.319Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T12:07:07.319Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T12:07:07.320Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T12:07:07.339Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T12:07:07.339Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T12:07:07.340Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T12:07:07.340Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T12:07:07.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T12:07:07.341Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T12:07:07.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T12:07:07.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T12:07:07.344Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T12:07:07.365Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T12:07:07.365Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-06T12:07:07.365Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-02-06T12:07:07.365Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-02-06T12:07:07.365Z] [BOT] 🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
[2026-02-06T12:07:07.365Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Executive Assistant at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Manager at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Score at duolingo
🚫 Skipping blacklisted job: Senior Product Writer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Director, Product Management - Core Platforms at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Senior Education Platform Engineer at anthropic
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Central at airtable
🚫 Skipping blacklisted job: Revenue Accounting Manager - NYC at datadog
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
[2026-02-06T12:07:07.366Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-06T12:07:07.384Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T12:07:07.408Z] [BOT] ✅ Saved pending queue: 185 total (176 pending, 9 enriched, 0 posted)
🗑️ Removed 41 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (41 blacklisted)
[2026-02-06T12:07:07.409Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-02-06T12:07:07.409Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-02-06T12:07:07.409Z] [BOT] ⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T12:07:07.412Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T12:07:07.413Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Indiana  - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-02-06T12:07:07.414Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T12:07:07.430Z] [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T12:07:07.689Z] [BOT] ✅ Posted message: Enterprise Account Executive (Indiana  - SLED) @ verkada in #💰・finance-jobs
[2026-02-06T12:07:07.689Z] [BOT] ✅ Industry: Enterprise Account Executive (Indiana  - SLED) @ verkada
[2026-02-06T12:07:07.690Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Indiana  - SLED) @ verkada → category channel (1 total channels)
[2026-02-06T12:07:07.690Z] [BOT] 💾 BEFORE MERGE: 2040 jobs in memory (cached)
[2026-02-06T12:07:07.746Z] [BOT] ✅ Loaded V2 database: 2039 jobs
💾 DISK STATE: 2039 jobs on disk
[2026-02-06T12:07:07.747Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2040
[2026-02-06T12:07:07.752Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:07.752Z] [BOT] 💾 AFTER MERGE: 2040 jobs (merged disk + memory)
[2026-02-06T12:07:07.754Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T12:07:07.758Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T12:07:07.758Z] [BOT] ✅ Archiving complete: 10 archived, 2030 active
[2026-02-06T12:07:07.880Z] [BOT] 💾 Saved posted_jobs.json: 2030 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:12.384Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T12:07:12.385Z] [BOT] 📍 [ROUTING] "Software Engineer, Observability" @ airtable
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-06T12:07:12.385Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T12:07:12.559Z] [BOT] ✅ Posted message: Software Engineer, Observability @ airtable in #🤖・ai-jobs
[2026-02-06T12:07:12.559Z] [BOT] ✅ Industry: Software Engineer, Observability @ airtable
[2026-02-06T12:07:12.560Z] [BOT] 💾 Added channel posting: Software Engineer, Observability @ airtable → category channel (1 total channels)
[2026-02-06T12:07:12.560Z] [BOT] 💾 BEFORE MERGE: 2031 jobs in memory (cached)
[2026-02-06T12:07:12.610Z] [BOT] ✅ Loaded V2 database: 2030 jobs
💾 DISK STATE: 2030 jobs on disk
[2026-02-06T12:07:12.611Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2031
[2026-02-06T12:07:12.615Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:12.615Z] [BOT] 💾 AFTER MERGE: 2031 jobs (merged disk + memory)
[2026-02-06T12:07:12.617Z] [BOT] ✅ No jobs to archive (all 2031 jobs within 7-day window)
[2026-02-06T12:07:12.743Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:14.395Z] [BOT] ✅ Posted message: Software Engineer, Observability @ airtable in #🌉・JID_739bbc0b
[2026-02-06T12:07:14.395Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T12:07:14.395Z] [BOT] 💾 Added channel posting: Software Engineer, Observability @ airtable → location channel (2 total channels)
[2026-02-06T12:07:14.396Z] [BOT] 💾 BEFORE MERGE: 2031 jobs in memory (cached)
[2026-02-06T12:07:14.444Z] [BOT] ✅ Loaded V2 database: 2031 jobs
💾 DISK STATE: 2031 jobs on disk
[2026-02-06T12:07:14.445Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2031
[2026-02-06T12:07:14.449Z] [BOT] 🔀 Deep merged: Software Engineer, Observability @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T12:07:14.449Z] [BOT] 💾 AFTER MERGE: 2031 jobs (merged disk + memory)
[2026-02-06T12:07:14.451Z] [BOT] ✅ No jobs to archive (all 2031 jobs within 7-day window)
[2026-02-06T12:07:14.568Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:19.069Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-06T12:07:19.070Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (2-8 YOE)" @ airtable
[2026-02-06T12:07:19.070Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T12:07:19.362Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (2-8 YOE) @ airtable in #💻・tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (2-8 YOE) @ airtable
[2026-02-06T12:07:19.363Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-02-06T12:07:19.363Z] [BOT] 💾 BEFORE MERGE: 2032 jobs in memory (cached)
[2026-02-06T12:07:19.412Z] [BOT] ✅ Loaded V2 database: 2031 jobs
💾 DISK STATE: 2031 jobs on disk
[2026-02-06T12:07:19.412Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2032
[2026-02-06T12:07:19.417Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:19.417Z] [BOT] 💾 AFTER MERGE: 2032 jobs (merged disk + memory)
[2026-02-06T12:07:19.419Z] [BOT] ✅ No jobs to archive (all 2032 jobs within 7-day window)
[2026-02-06T12:07:19.539Z] [BOT] 💾 Saved posted_jobs.json: 2032 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:21.240Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (2-8 YOE) @ airtable in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T12:07:21.241Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (2-8 YOE) @ airtable → location channel (2 total channels)
[2026-02-06T12:07:21.241Z] [BOT] 💾 BEFORE MERGE: 2032 jobs in memory (cached)
[2026-02-06T12:07:21.290Z] [BOT] ✅ Loaded V2 database: 2032 jobs
💾 DISK STATE: 2032 jobs on disk
[2026-02-06T12:07:21.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2032
[2026-02-06T12:07:21.294Z] [BOT] 🔀 Deep merged: Software Engineer, Infrastructure (2-8 YOE) @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T12:07:21.295Z] [BOT] 💾 AFTER MERGE: 2032 jobs (merged disk + memory)
[2026-02-06T12:07:21.296Z] [BOT] ✅ No jobs to archive (all 2032 jobs within 7-day window)
[2026-02-06T12:07:21.414Z] [BOT] 💾 Saved posted_jobs.json: 2032 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:22.915Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (8+ YOE)" @ airtable
[2026-02-06T12:07:22.915Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T12:07:23.149Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (8+ YOE) @ airtable in #💻・tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (8+ YOE) @ airtable
[2026-02-06T12:07:23.150Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (8+ YOE) @ airtable → category channel (1 total channels)
[2026-02-06T12:07:23.150Z] [BOT] 💾 BEFORE MERGE: 2033 jobs in memory (cached)
[2026-02-06T12:07:23.199Z] [BOT] ✅ Loaded V2 database: 2032 jobs
💾 DISK STATE: 2032 jobs on disk
[2026-02-06T12:07:23.199Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2033
[2026-02-06T12:07:23.203Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:23.203Z] [BOT] 💾 AFTER MERGE: 2033 jobs (merged disk + memory)
[2026-02-06T12:07:23.205Z] [BOT] ✅ No jobs to archive (all 2033 jobs within 7-day window)
[2026-02-06T12:07:23.311Z] [BOT] 💾 Saved posted_jobs.json: 2033 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:25.006Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (8+ YOE) @ airtable in #🌉・JID_739bbc0b
[2026-02-06T12:07:25.006Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T12:07:25.006Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (8+ YOE) @ airtable → location channel (2 total channels)
[2026-02-06T12:07:25.007Z] [BOT] 💾 BEFORE MERGE: 2033 jobs in memory (cached)
[2026-02-06T12:07:25.057Z] [BOT] ✅ Loaded V2 database: 2033 jobs
💾 DISK STATE: 2033 jobs on disk
[2026-02-06T12:07:25.057Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2033
[2026-02-06T12:07:25.061Z] [BOT] 🔀 Deep merged: Software Engineer, Infrastructure (8+ YOE) @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T12:07:25.062Z] [BOT] 💾 AFTER MERGE: 2033 jobs (merged disk + memory)
[2026-02-06T12:07:25.063Z] [BOT] ✅ No jobs to archive (all 2033 jobs within 7-day window)
[2026-02-06T12:07:25.173Z] [BOT] 💾 Saved posted_jobs.json: 2033 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:26.676Z] [BOT] 📍 [ROUTING] "Creative Producer" @ airtable
[2026-02-06T12:07:26.676Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T12:07:26.883Z] [BOT] ✅ Posted message: Creative Producer @ airtable in #💻・tech-jobs
  ✅ Industry: Creative Producer @ airtable
[2026-02-06T12:07:26.884Z] [BOT] 💾 Added channel posting: Creative Producer @ airtable → category channel (1 total channels)
[2026-02-06T12:07:26.884Z] [BOT] 💾 BEFORE MERGE: 2034 jobs in memory (cached)
[2026-02-06T12:07:26.934Z] [BOT] ✅ Loaded V2 database: 2033 jobs
💾 DISK STATE: 2033 jobs on disk
[2026-02-06T12:07:26.934Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2034
[2026-02-06T12:07:26.939Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:26.939Z] [BOT] 💾 AFTER MERGE: 2034 jobs (merged disk + memory)
[2026-02-06T12:07:26.940Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-02-06T12:07:27.066Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:28.718Z] [BOT] ✅ Posted message: Creative Producer @ airtable in #🌉・JID_739bbc0b
[2026-02-06T12:07:28.718Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-06T12:07:28.718Z] [BOT] 💾 Added channel posting: Creative Producer @ airtable → location channel (2 total channels)
[2026-02-06T12:07:28.719Z] [BOT] 💾 BEFORE MERGE: 2034 jobs in memory (cached)
[2026-02-06T12:07:28.767Z] [BOT] ✅ Loaded V2 database: 2034 jobs
💾 DISK STATE: 2034 jobs on disk
[2026-02-06T12:07:28.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2034
[2026-02-06T12:07:28.772Z] [BOT] 🔀 Deep merged: Creative Producer @ airtable (disk: 1 channels → merged: 2 channels)
[2026-02-06T12:07:28.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2034 jobs (merged disk + memory)
[2026-02-06T12:07:28.774Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-02-06T12:07:28.882Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T12:07:33.385Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-02-06T12:07:33.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "6dd033c796c0e72d"
[2026-02-06T12:07:33.386Z] [BOT] ⏭️  Skipping duplicate: JID_70112c6f (posted within 7 days)
[2026-02-06T12:07:33.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "e6dbbccd9e47ae43"
[2026-02-06T12:07:33.387Z] [BOT] ⏭️  Skipping duplicate: JID_9db583b0 (posted within 7 days)
[2026-02-06T12:07:33.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "eb756b1d82d8ab21"
[2026-02-06T12:07:33.388Z] [BOT] ⏭️  Skipping duplicate: JID_916635cb (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "c740370ebcaa00c0"
⏭️  Skipping duplicate: JID_e121c8fa (posted within 7 days)
[2026-02-06T12:07:33.388Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "a91e9d4f45c729fe"
[2026-02-06T12:07:33.388Z] [BOT] ⏭️  Skipping duplicate: JID_14de94c8 (posted within 7 days)
[2026-02-06T12:07:33.402Z] [BOT] ✅ Loaded pending queue: 185 total (176 pending, 9 enriched, 0 posted)
[2026-02-06T12:07:33.421Z] [BOT] ✅ Saved pending queue: 185 total (176 pending, 4 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T12:07:33.531Z] [BOT] 📂 Loaded 12530 existing routing entries
[2026-02-06T12:07:33.669Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-02-06T12:07:33.669Z] [BOT] Total entries: 12535
   Timestamp: 2026-02-06T12:07:33.620Z
[2026-02-06T12:07:33.669Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 54
[2026-02-06T12:07:33.670Z] [BOT] Successful: 9
   Failed: 0
   Skipped: 45
[2026-02-06T12:07:33.670Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 4
   Top channels:
[2026-02-06T12:07:33.670Z] [BOT] 1. #🌉・JID_739bbc0b: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-02-06T12:07:33.670Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2034 jobs in memory (cached)
[2026-02-06T12:07:33.733Z] [BOT] ✅ Loaded V2 database: 2034 jobs
💾 DISK STATE: 2034 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2034
[2026-02-06T12:07:33.744Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T12:07:33.744Z] [BOT] 💾 AFTER MERGE: 2034 jobs (merged disk + memory)
[2026-02-06T12:07:33.745Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-02-06T12:07:33.873Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T12:07:35.889Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2547) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*