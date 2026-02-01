# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T21:33:57.370Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T21:33:03.982Z] ========================================
[2026-02-01T21:33:03.984Z] Discord Bot Execution Log
[2026-02-01T21:33:03.984Z] Environment: GitHub Actions
[2026-02-01T21:33:03.984Z] Node Version: v20.20.0
[2026-02-01T21:33:03.984Z] ========================================
[2026-02-01T21:33:03.984Z] Environment Variables Check:
[2026-02-01T21:33:03.984Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T21:33:03.985Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T21:33:03.985Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T21:33:03.985Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T21:33:03.985Z] 
Multi-Channel Configuration:
[2026-02-01T21:33:03.985Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T21:33:03.985Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T21:33:03.985Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T21:33:03.985Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T21:33:03.985Z] 
Data Files Check:
[2026-02-01T21:33:03.986Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115124 bytes)
[2026-02-01T21:33:04.059Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10949472 bytes)
[2026-02-01T21:33:04.060Z] 
========================================
[2026-02-01T21:33:04.060Z] Starting Enhanced Discord Bot...
[2026-02-01T21:33:04.060Z] ========================================
[2026-02-01T21:33:04.597Z] [BOT] ✅ Loaded V2 database: 2189 jobs
[2026-02-01T21:33:05.330Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T21:33:05.331Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T21:33:05.331Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T21:33:05.401Z] [BOT] ✅ Loaded pending queue: 752 total (702 pending, 50 enriched, 0 posted)
[2026-02-01T21:33:05.401Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Deep Learning Algorithm Engineer at NVIDIA
[2026-02-01T21:33:05.416Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-02-01T21:33:05.416Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-02-01T21:33:05.416Z] [BOT] 🚫 Skipping blacklisted job: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-02-01T21:33:05.416Z] [BOT] 🚫 Skipping blacklisted job: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection at Berkshire Hathaway Energy
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Contracts Manager, Procurement and AI at airtable
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: GTM Strategy Manager  at figma
🚫 Skipping blacklisted job: Director, Product Marketing  at figma
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Director's Fellowship Postdoctoral Researcher at National Renewable Energy Laboratory
🚫 Skipping blacklisted job: Senior Backend Developer at Gallup
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Director of Sales, Scaled Vendor Sales at spotify
🚫 Skipping blacklisted job: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence at Prairie View A&M University
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Sales Enablement Manager  at figma
🚫 Skipping blacklisted job: Senior Software Engineer at Oracle
🚫 Skipping blacklisted job: People Analytics Lead at airtable
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, AI at airtable
🚫 Skipping blacklisted job: Product Manager, Omni Analysis & Q&A at airtable
🚫 Skipping blacklisted job: Scaled Customer Success Manager at airtable
🚫 Skipping blacklisted job: Senior Enterprise Marketing Manager at airtable
🚫 Skipping blacklisted job: Senior Manager, Finance Systems at airtable
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, People Systems at airtable
🚫 Skipping blacklisted job: Legal Operations Lead, CLM & Technology at figma
🚫 Skipping blacklisted job: Senior Manager, Music Label Deal Analysis - FP&A at spotify
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Revenue Manager at figma
[2026-02-01T21:33:05.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Walmart
[2026-02-01T21:33:05.418Z] [BOT] 🚫 Skipping blacklisted job: Data Insight Analyst - Principal Data Insight Analyst at Northrop Grumman
🚫 Skipping blacklisted job: Strategic Program Manager at figma
[2026-02-01T21:33:05.418Z] [BOT] 🚫 Skipping blacklisted job: Manager, Figma for Education  at figma
🚫 Skipping blacklisted job: Staff Economist at brex
🚫 Skipping blacklisted job: Compliance Manager, Customer Trust & Third Party Risk at figma
[2026-02-01T21:33:05.418Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Revenue Transformation at figma
🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
[2026-02-01T21:33:05.418Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
🚫 Skipping blacklisted job: Associate Director, Programmatic Platform Operations at spotify
🚫 Skipping blacklisted job: Associate / Staff Mission Data Analyst at SciTec
🚫 Skipping blacklisted job: Customer Solution Architect Team Lead (AMER) at supabase
[2026-02-01T21:33:05.480Z] [BOT] ✅ Loaded pending queue: 752 total (702 pending, 50 enriched, 0 posted)
[2026-02-01T21:33:05.562Z] [BOT] ✅ Saved pending queue: 714 total (702 pending, 12 enriched, 0 posted)
🗑️ Removed 38 blacklisted jobs from pending queue
📋 After blacklist filter: 12 jobs (38 blacklisted)
[2026-02-01T21:33:05.562Z] [BOT] 📋 After data quality filter: 12 jobs (0 invalid)
[2026-02-01T21:33:05.563Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
   (3 grouped as same job with different locations)
[2026-02-01T21:33:05.563Z] [BOT] 📍 1 jobs with multiple locations:
   - Upmarket Account Executive @ brex: seattle, washington, united states, salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 41 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T21:33:05.566Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T21:33:05.568Z] [BOT] 📍 [ROUTING] "Deep Learning Algorithm Engineer" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-02-01T21:33:05.568Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T21:33:05.584Z] [BOT ERROR] (node:3761) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T21:33:05.823Z] [BOT] ✅ Posted message: Deep Learning Algorithm Engineer @ ORG_0890f456 in #🤖・ai-jobs
[2026-02-01T21:33:05.823Z] [BOT] ✅ Industry: Deep Learning Algorithm Engineer @ ORG_0890f456
[2026-02-01T21:33:05.824Z] [BOT] 💾 Added channel posting: Deep Learning Algorithm Engineer @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T21:33:05.824Z] [BOT] 💾 BEFORE MERGE: 2190 jobs in memory (cached)
[2026-02-01T21:33:05.882Z] [BOT] ✅ Loaded V2 database: 2189 jobs
💾 DISK STATE: 2189 jobs on disk
[2026-02-01T21:33:05.883Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2190
[2026-02-01T21:33:05.888Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:05.888Z] [BOT] 💾 AFTER MERGE: 2190 jobs (merged disk + memory)
[2026-02-01T21:33:05.889Z] [BOT] ✅ No jobs to archive (all 2190 jobs within 7-day window)
[2026-02-01T21:33:06.035Z] [BOT] 💾 Saved posted_jobs.json: 2190 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:07.775Z] [BOT] ✅ Posted message: Deep Learning Algorithm Engineer @ ORG_0890f456 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T21:33:07.775Z] [BOT] 💾 Added channel posting: Deep Learning Algorithm Engineer @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T21:33:07.776Z] [BOT] 💾 BEFORE MERGE: 2190 jobs in memory (cached)
[2026-02-01T21:33:07.831Z] [BOT] ✅ Loaded V2 database: 2190 jobs
💾 DISK STATE: 2190 jobs on disk
[2026-02-01T21:33:07.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2190
[2026-02-01T21:33:07.836Z] [BOT] 🔀 Deep merged: Deep Learning Algorithm Engineer @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:07.837Z] [BOT] 💾 AFTER MERGE: 2190 jobs (merged disk + memory)
[2026-02-01T21:33:07.838Z] [BOT] ✅ No jobs to archive (all 2190 jobs within 7-day window)
[2026-02-01T21:33:07.966Z] [BOT] 💾 Saved posted_jobs.json: 2190 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:09.469Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_f49eab72ine
   Category: AI (matched: "machine learning")
[2026-02-01T21:33:09.469Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T21:33:09.775Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_f49eab72ine in #🤖・ai-jobs
  ✅ Industry: Data Scientist 1 @ ORG_f49eab72ine
[2026-02-01T21:33:09.776Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_f49eab72ine → category channel (1 total channels)
[2026-02-01T21:33:09.776Z] [BOT] 💾 BEFORE MERGE: 2191 jobs in memory (cached)
[2026-02-01T21:33:09.834Z] [BOT] ✅ Loaded V2 database: 2190 jobs
💾 DISK STATE: 2190 jobs on disk
[2026-02-01T21:33:09.834Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2191
[2026-02-01T21:33:09.839Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:09.839Z] [BOT] 💾 AFTER MERGE: 2191 jobs (merged disk + memory)
[2026-02-01T21:33:09.840Z] [BOT] ✅ No jobs to archive (all 2191 jobs within 7-day window)
[2026-02-01T21:33:09.969Z] [BOT] 💾 Saved posted_jobs.json: 2191 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:11.697Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_f49eab72ine in #🌲・JID_efdf5921
[2026-02-01T21:33:11.698Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:33:11.698Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_f49eab72ine → location channel (2 total channels)
[2026-02-01T21:33:11.698Z] [BOT] 💾 BEFORE MERGE: 2191 jobs in memory (cached)
[2026-02-01T21:33:11.755Z] [BOT] ✅ Loaded V2 database: 2191 jobs
💾 DISK STATE: 2191 jobs on disk
[2026-02-01T21:33:11.755Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2191
[2026-02-01T21:33:11.760Z] [BOT] 🔀 Deep merged: Data Scientist 1 @ ORG_f49eab72ine (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:11.760Z] [BOT] 💾 AFTER MERGE: 2191 jobs (merged disk + memory)
[2026-02-01T21:33:11.761Z] [BOT] ✅ No jobs to archive (all 2191 jobs within 7-day window)
[2026-02-01T21:33:11.907Z] [BOT] 💾 Saved posted_jobs.json: 2191 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:13.410Z] [BOT] 📍 [ROUTING] "Data Scientist, Capacity Operations" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-02-01T21:33:13.410Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T21:33:14.123Z] [BOT] ✅ Posted message: Data Scientist, Capacity Operations @ anthropic in #🤖・ai-jobs
  ✅ Industry: Data Scientist, Capacity Operations @ anthropic
[2026-02-01T21:33:14.125Z] [BOT] 💾 Added channel posting: Data Scientist, Capacity Operations @ anthropic → category channel (1 total channels)
[2026-02-01T21:33:14.125Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-01T21:33:14.181Z] [BOT] ✅ Loaded V2 database: 2191 jobs
💾 DISK STATE: 2191 jobs on disk
[2026-02-01T21:33:14.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-01T21:33:14.186Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:14.186Z] [BOT] 💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-01T21:33:14.188Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-02-01T21:33:14.307Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:16.051Z] [BOT] ✅ Posted message: Data Scientist, Capacity Operations @ anthropic in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T21:33:16.052Z] [BOT] 💾 Added channel posting: Data Scientist, Capacity Operations @ anthropic → location channel (2 total channels)
[2026-02-01T21:33:16.052Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-01T21:33:16.108Z] [BOT] ✅ Loaded V2 database: 2192 jobs
💾 DISK STATE: 2192 jobs on disk
[2026-02-01T21:33:16.108Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-01T21:33:16.112Z] [BOT] 🔀 Deep merged: Data Scientist, Capacity Operations @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:16.112Z] [BOT] 💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-01T21:33:16.113Z] [BOT] ✅ No jobs to archive (all 2192 jobs within 7-day window)
[2026-02-01T21:33:16.245Z] [BOT] 💾 Saved posted_jobs.json: 2192 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:17.747Z] [BOT] 📍 [ROUTING] "Data Scientist 2" @ ORG_f35d00fb
   Category: AI (matched: "machine learning")
[2026-02-01T21:33:17.747Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T21:33:18.222Z] [BOT] ✅ Posted message: Data Scientist 2 @ ORG_f35d00fb in #🤖・ai-jobs
[2026-02-01T21:33:18.223Z] [BOT] ✅ Industry: Data Scientist 2 @ ORG_f35d00fb
[2026-02-01T21:33:18.224Z] [BOT] 💾 Added channel posting: Data Scientist 2 @ ORG_f35d00fb → category channel (1 total channels)
[2026-02-01T21:33:18.224Z] [BOT] 💾 BEFORE MERGE: 2193 jobs in memory (cached)
[2026-02-01T21:33:18.286Z] [BOT] ✅ Loaded V2 database: 2192 jobs
💾 DISK STATE: 2192 jobs on disk
[2026-02-01T21:33:18.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2193
[2026-02-01T21:33:18.291Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:18.291Z] [BOT] 💾 AFTER MERGE: 2193 jobs (merged disk + memory)
[2026-02-01T21:33:18.292Z] [BOT] ✅ No jobs to archive (all 2193 jobs within 7-day window)
[2026-02-01T21:33:18.420Z] [BOT] 💾 Saved posted_jobs.json: 2193 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:20.290Z] [BOT] ✅ Posted message: Data Scientist 2 @ ORG_f35d00fb in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T21:33:20.290Z] [BOT] 💾 Added channel posting: Data Scientist 2 @ ORG_f35d00fb → location channel (2 total channels)
[2026-02-01T21:33:20.290Z] [BOT] 💾 BEFORE MERGE: 2193 jobs in memory (cached)
[2026-02-01T21:33:20.344Z] [BOT] ✅ Loaded V2 database: 2193 jobs
💾 DISK STATE: 2193 jobs on disk
[2026-02-01T21:33:20.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2193
[2026-02-01T21:33:20.349Z] [BOT] 🔀 Deep merged: Data Scientist 2 @ ORG_f35d00fb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:20.349Z] [BOT] 💾 AFTER MERGE: 2193 jobs (merged disk + memory)
[2026-02-01T21:33:20.351Z] [BOT] ✅ No jobs to archive (all 2193 jobs within 7-day window)
[2026-02-01T21:33:20.473Z] [BOT] 💾 Saved posted_jobs.json: 2193 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:24.976Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T21:33:24.977Z] [BOT] 📍 [ROUTING] "Project Specialist - EH&S Safety and Data Analytics" @ ORG_8315ec2e Edison
[2026-02-01T21:33:24.978Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T21:33:25.286Z] [BOT] ✅ Posted message: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison in #📊・JID_fb739488
[2026-02-01T21:33:25.287Z] [BOT] ✅ Industry: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison
[2026-02-01T21:33:25.287Z] [BOT] 💾 Added channel posting: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison → category channel (1 total channels)
[2026-02-01T21:33:25.287Z] [BOT] 💾 BEFORE MERGE: 2194 jobs in memory (cached)
[2026-02-01T21:33:25.344Z] [BOT] ✅ Loaded V2 database: 2193 jobs
💾 DISK STATE: 2193 jobs on disk
[2026-02-01T21:33:25.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2194
[2026-02-01T21:33:25.349Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:25.349Z] [BOT] 💾 AFTER MERGE: 2194 jobs (merged disk + memory)
[2026-02-01T21:33:25.350Z] [BOT] ✅ No jobs to archive (all 2194 jobs within 7-day window)
[2026-02-01T21:33:25.478Z] [BOT] 💾 Saved posted_jobs.json: 2194 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:27.257Z] [BOT] ✅ Posted message: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison in #🗽・JID_98d4f0de
[2026-02-01T21:33:27.257Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T21:33:27.258Z] [BOT] 💾 Added channel posting: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison → location channel (2 total channels)
[2026-02-01T21:33:27.258Z] [BOT] 💾 BEFORE MERGE: 2194 jobs in memory (cached)
[2026-02-01T21:33:27.314Z] [BOT] ✅ Loaded V2 database: 2194 jobs
💾 DISK STATE: 2194 jobs on disk
[2026-02-01T21:33:27.315Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2194
[2026-02-01T21:33:27.320Z] [BOT] 🔀 Deep merged: Project Specialist - EH&S Safety and Data Analytics @ ORG_8315ec2e Edison (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:27.320Z] [BOT] 💾 AFTER MERGE: 2194 jobs (merged disk + memory)
[2026-02-01T21:33:27.321Z] [BOT] ✅ No jobs to archive (all 2194 jobs within 7-day window)
[2026-02-01T21:33:27.468Z] [BOT] 💾 Saved posted_jobs.json: 2194 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:31.967Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T21:33:31.969Z] [BOT] 📍 [ROUTING] "Upmarket Account Executive" @ brex
   Category: FINANCE (matched: "finance")
[2026-02-01T21:33:31.969Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T21:33:32.262Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #💰・finance-jobs
  ✅ Industry: Upmarket Account Executive @ brex
[2026-02-01T21:33:32.263Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → category channel (1 total channels)
[2026-02-01T21:33:32.263Z] [BOT] 💾 BEFORE MERGE: 2195 jobs in memory (cached)
[2026-02-01T21:33:32.319Z] [BOT] ✅ Loaded V2 database: 2194 jobs
💾 DISK STATE: 2194 jobs on disk
[2026-02-01T21:33:32.320Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2195
[2026-02-01T21:33:32.327Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:32.327Z] [BOT] 💾 AFTER MERGE: 2195 jobs (merged disk + memory)
[2026-02-01T21:33:32.329Z] [BOT] ✅ No jobs to archive (all 2195 jobs within 7-day window)
[2026-02-01T21:33:32.469Z] [BOT] 💾 Saved posted_jobs.json: 2195 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:34.179Z] [BOT] ✅ Posted message: Upmarket Account Executive @ brex in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:33:34.180Z] [BOT] 💾 Added channel posting: Upmarket Account Executive @ brex → location channel (2 total channels)
[2026-02-01T21:33:34.180Z] [BOT] 💾 BEFORE MERGE: 2195 jobs in memory (cached)
[2026-02-01T21:33:34.236Z] [BOT] ✅ Loaded V2 database: 2195 jobs
💾 DISK STATE: 2195 jobs on disk
[2026-02-01T21:33:34.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2195
[2026-02-01T21:33:34.241Z] [BOT] 🔀 Deep merged: Upmarket Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:34.241Z] [BOT] 💾 AFTER MERGE: 2195 jobs (merged disk + memory)
[2026-02-01T21:33:34.243Z] [BOT] ✅ No jobs to archive (all 2195 jobs within 7-day window)
[2026-02-01T21:33:34.386Z] [BOT] 💾 Saved posted_jobs.json: 2195 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:38.886Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-02-01T21:33:38.887Z] [BOT] 📍 [ROUTING] "Software Development Engineering Graduate" @ ORG_c5c37308 Group
[2026-02-01T21:33:38.887Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:33:39.182Z] [BOT] ✅ Posted message: Software Development Engineering Graduate @ ORG_c5c37308 Group in #💻・tech-jobs
  ✅ Industry: Software Development Engineering Graduate @ ORG_c5c37308 Group
[2026-02-01T21:33:39.183Z] [BOT] 💾 Added channel posting: Software Development Engineering Graduate @ ORG_c5c37308 Group → category channel (1 total channels)
[2026-02-01T21:33:39.183Z] [BOT] 💾 BEFORE MERGE: 2196 jobs in memory (cached)
[2026-02-01T21:33:39.237Z] [BOT] ✅ Loaded V2 database: 2195 jobs
💾 DISK STATE: 2195 jobs on disk
[2026-02-01T21:33:39.237Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2196
[2026-02-01T21:33:39.241Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:39.241Z] [BOT] 💾 AFTER MERGE: 2196 jobs (merged disk + memory)
[2026-02-01T21:33:39.242Z] [BOT] ✅ No jobs to archive (all 2196 jobs within 7-day window)
[2026-02-01T21:33:39.380Z] [BOT] 💾 Saved posted_jobs.json: 2196 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:41.100Z] [BOT] ✅ Posted message: Software Development Engineering Graduate @ ORG_c5c37308 Group in #🌲・JID_efdf5921
[2026-02-01T21:33:41.100Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:33:41.101Z] [BOT] 💾 Added channel posting: Software Development Engineering Graduate @ ORG_c5c37308 Group → location channel (2 total channels)
[2026-02-01T21:33:41.101Z] [BOT] 💾 BEFORE MERGE: 2196 jobs in memory (cached)
[2026-02-01T21:33:41.155Z] [BOT] ✅ Loaded V2 database: 2196 jobs
💾 DISK STATE: 2196 jobs on disk
[2026-02-01T21:33:41.155Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2196
[2026-02-01T21:33:41.159Z] [BOT] 🔀 Deep merged: Software Development Engineering Graduate @ ORG_c5c37308 Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:41.159Z] [BOT] 💾 AFTER MERGE: 2196 jobs (merged disk + memory)
[2026-02-01T21:33:41.160Z] [BOT] ✅ No jobs to archive (all 2196 jobs within 7-day window)
[2026-02-01T21:33:41.294Z] [BOT] 💾 Saved posted_jobs.json: 2196 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:42.795Z] [BOT] 📍 [ROUTING] "Graduate Software Development Engineer" @ ORG_c5c37308 Group
   Category: TECH (matched: "software")
[2026-02-01T21:33:42.795Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:33:42.973Z] [BOT] ✅ Posted message: Graduate Software Development Engineer @ ORG_c5c37308 Group in #💻・tech-jobs
[2026-02-01T21:33:42.974Z] [BOT] ✅ Industry: Graduate Software Development Engineer @ ORG_c5c37308 Group
[2026-02-01T21:33:42.974Z] [BOT] 💾 Added channel posting: Graduate Software Development Engineer @ ORG_c5c37308 Group → category channel (1 total channels)
[2026-02-01T21:33:42.974Z] [BOT] 💾 BEFORE MERGE: 2197 jobs in memory (cached)
[2026-02-01T21:33:43.029Z] [BOT] ✅ Loaded V2 database: 2196 jobs
💾 DISK STATE: 2196 jobs on disk
[2026-02-01T21:33:43.029Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2197
[2026-02-01T21:33:43.033Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:43.033Z] [BOT] 💾 AFTER MERGE: 2197 jobs (merged disk + memory)
[2026-02-01T21:33:43.035Z] [BOT] ✅ No jobs to archive (all 2197 jobs within 7-day window)
[2026-02-01T21:33:43.161Z] [BOT] 💾 Saved posted_jobs.json: 2197 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:44.914Z] [BOT] ✅ Posted message: Graduate Software Development Engineer @ ORG_c5c37308 Group in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:33:44.915Z] [BOT] 💾 Added channel posting: Graduate Software Development Engineer @ ORG_c5c37308 Group → location channel (2 total channels)
[2026-02-01T21:33:44.915Z] [BOT] 💾 BEFORE MERGE: 2197 jobs in memory (cached)
[2026-02-01T21:33:44.970Z] [BOT] ✅ Loaded V2 database: 2197 jobs
💾 DISK STATE: 2197 jobs on disk
[2026-02-01T21:33:44.970Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2197
[2026-02-01T21:33:44.974Z] [BOT] 🔀 Deep merged: Graduate Software Development Engineer @ ORG_c5c37308 Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:44.974Z] [BOT] 💾 AFTER MERGE: 2197 jobs (merged disk + memory)
[2026-02-01T21:33:44.976Z] [BOT] ✅ No jobs to archive (all 2197 jobs within 7-day window)
[2026-02-01T21:33:45.118Z] [BOT] 💾 Saved posted_jobs.json: 2197 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:46.618Z] [BOT] 📍 [ROUTING] "Mobile Engineering Graduate" @ ORG_c5c37308 Group
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T21:33:46.619Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T21:33:46.899Z] [BOT] ✅ Posted message: Mobile Engineering Graduate @ ORG_c5c37308 Group in #💻・tech-jobs
[2026-02-01T21:33:46.899Z] [BOT] ✅ Industry: Mobile Engineering Graduate @ ORG_c5c37308 Group
[2026-02-01T21:33:46.900Z] [BOT] 💾 Added channel posting: Mobile Engineering Graduate @ ORG_c5c37308 Group → category channel (1 total channels)
[2026-02-01T21:33:46.900Z] [BOT] 💾 BEFORE MERGE: 2198 jobs in memory (cached)
[2026-02-01T21:33:46.954Z] [BOT] ✅ Loaded V2 database: 2197 jobs
💾 DISK STATE: 2197 jobs on disk
[2026-02-01T21:33:46.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2198
[2026-02-01T21:33:46.959Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2198 jobs (merged disk + memory)
[2026-02-01T21:33:46.961Z] [BOT] ✅ No jobs to archive (all 2198 jobs within 7-day window)
[2026-02-01T21:33:47.079Z] [BOT] 💾 Saved posted_jobs.json: 2198 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:48.823Z] [BOT] ✅ Posted message: Mobile Engineering Graduate @ ORG_c5c37308 Group in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T21:33:48.823Z] [BOT] 💾 Added channel posting: Mobile Engineering Graduate @ ORG_c5c37308 Group → location channel (2 total channels)
[2026-02-01T21:33:48.824Z] [BOT] 💾 BEFORE MERGE: 2198 jobs in memory (cached)
[2026-02-01T21:33:48.879Z] [BOT] ✅ Loaded V2 database: 2198 jobs
💾 DISK STATE: 2198 jobs on disk
[2026-02-01T21:33:48.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2198
[2026-02-01T21:33:48.883Z] [BOT] 🔀 Deep merged: Mobile Engineering Graduate @ ORG_c5c37308 Group (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T21:33:48.883Z] [BOT] 💾 AFTER MERGE: 2198 jobs (merged disk + memory)
[2026-02-01T21:33:48.885Z] [BOT] ✅ No jobs to archive (all 2198 jobs within 7-day window)
[2026-02-01T21:33:49.012Z] [BOT] 💾 Saved posted_jobs.json: 2198 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T21:33:53.514Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-02-01T21:33:53.516Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "2b0d7ea6dd8a58d2"
[2026-02-01T21:33:53.516Z] [BOT] ⏭️  Skipping duplicate: JID_1c428fd2-2026_jr2012497 (posted within 7 days)
[2026-02-01T21:33:53.517Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_04d93253..." not found, but found as SHA256 "82c8f9da0d86d648"
[2026-02-01T21:33:53.517Z] [BOT] ⏭️  Skipping duplicate: JID_53ca989f-cx_1033-job-5680 (posted within 7 days)
[2026-02-01T21:33:53.517Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b9189aec..." not found, but found as SHA256 "7201e28ee3618395"
[2026-02-01T21:33:53.517Z] [BOT] ⏭️  Skipping duplicate: JID_b9189aec (posted within 7 days)
[2026-02-01T21:33:53.518Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a83cc806..." not found, but found as SHA256 "77d62485b6311805"
[2026-02-01T21:33:53.518Z] [BOT] ⏭️  Skipping duplicate: JID_7f303824-seattle_r-98559-1 (posted within 7 days)
[2026-02-01T21:33:53.518Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3bc0bb9d-..." not found, but found as SHA256 "3989d78eed406403"
[2026-02-01T21:33:53.518Z] [BOT] ⏭️  Skipping duplicate: JID_ee37aa7c-seattle_r-98559 (posted within 7 days)
[2026-02-01T21:33:53.518Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a83cc806..." not found, but found as SHA256 "79ccf9b876fe6c3e"
[2026-02-01T21:33:53.519Z] [BOT] ⏭️  Skipping duplicate: JID_d65aae1a-seattle_r-98642-2 (posted within 7 days)
[2026-02-01T21:33:53.519Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a13133b-..." not found, but found as SHA256 "11124fa3a63f7cc2"
[2026-02-01T21:33:53.519Z] [BOT] ⏭️  Skipping duplicate: JID_35404d99 (posted within 7 days)
[2026-02-01T21:33:53.519Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6c17e36a3c1470ae"
[2026-02-01T21:33:53.519Z] [BOT] ⏭️  Skipping duplicate: JID_680ed9eb (posted within 7 days)
[2026-02-01T21:33:53.519Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8bff8af2-..." not found, but found as SHA256 "e48d8283f8f75b0e"
[2026-02-01T21:33:53.520Z] [BOT] ⏭️  Skipping duplicate: JID_36f56e39 (posted within 7 days)
[2026-02-01T21:33:53.577Z] [BOT] ✅ Loaded pending queue: 714 total (702 pending, 12 enriched, 0 posted)
[2026-02-01T21:33:53.648Z] [BOT] ✅ Saved pending queue: 714 total (702 pending, 3 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T21:33:53.773Z] [BOT] 📂 Loaded 12270 existing routing entries
[2026-02-01T21:33:53.891Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 12279
   Timestamp: 2026-02-01T21:33:53.845Z
[2026-02-01T21:33:53.891Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T21:33:53.892Z] [BOT] Total attempts: 56
   Successful: 18
   Failed: 0
   Skipped: 38
[2026-02-01T21:33:53.892Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T21:33:53.892Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #🌲・JID_efdf5921: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #🏠・JID_ead674af: 2 posts
     5. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2198 jobs in memory (cached)
[2026-02-01T21:33:53.950Z] [BOT] ✅ Loaded V2 database: 2198 jobs
💾 DISK STATE: 2198 jobs on disk
[2026-02-01T21:33:53.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2198
[2026-02-01T21:33:53.955Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T21:33:53.955Z] [BOT] 💾 AFTER MERGE: 2198 jobs (merged disk + memory)
[2026-02-01T21:33:53.956Z] [BOT] ✅ No jobs to archive (all 2198 jobs within 7-day window)
[2026-02-01T21:33:54.085Z] [BOT] 💾 Saved posted_jobs.json: 2198 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T21:33:56.106Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3761) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*