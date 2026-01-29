# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T18:20:22.612Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T18:19:43.440Z] ========================================
[2026-01-29T18:19:43.442Z] Discord Bot Execution Log
[2026-01-29T18:19:43.442Z] Environment: GitHub Actions
[2026-01-29T18:19:43.442Z] Node Version: v20.20.0
[2026-01-29T18:19:43.443Z] ========================================
[2026-01-29T18:19:43.443Z] Environment Variables Check:
[2026-01-29T18:19:43.443Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T18:19:43.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T18:19:43.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T18:19:43.443Z] 
Multi-Channel Configuration:
[2026-01-29T18:19:43.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T18:19:43.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T18:19:43.444Z] 
Data Files Check:
[2026-01-29T18:19:43.445Z] .github/data/new_jobs.json: ✅ Exists (10 items, 136672 bytes)
[2026-01-29T18:19:43.446Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T18:19:43.446Z] 
========================================
[2026-01-29T18:19:43.446Z] Starting Enhanced Discord Bot...
[2026-01-29T18:19:43.446Z] ========================================
[2026-01-29T18:19:43.971Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T18:19:44.597Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T18:19:44.598Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T18:19:44.598Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T18:19:44.713Z] [BOT] ✅ Loaded pending queue: 2879 total (2829 pending, 50 enriched, 0 posted)
[2026-01-29T18:19:44.714Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T18:19:44.714Z] [BOT] [BOT] 🔍 Sample enriched job: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) at coinbase
[2026-01-29T18:19:44.717Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T18:19:44.717Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston at datadog
[2026-01-29T18:19:44.718Z] [BOT] 🚫 Skipping blacklisted job: Senior Principal Revenue Analyst at gusto
🚫 Skipping blacklisted job: Research Product Manager at anthropic
[2026-01-29T18:19:44.718Z] [BOT] 🚫 Skipping blacklisted job: Intranet Platform Manager at datadog
[2026-01-29T18:19:44.718Z] [BOT] 🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Contracts Manager - NYC at datadog
[2026-01-29T18:19:44.718Z] [BOT] 🚫 Skipping blacklisted job: Operations Manager, Communications  at anthropic
🚫 Skipping blacklisted job: Partnership Manager, AI for Science at anthropic
[2026-01-29T18:19:44.718Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Startups/Commercial at anthropic
[2026-01-29T18:19:44.719Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, AI for Science at anthropic
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-01-29T18:19:44.719Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - LATAM (Portuguese Speaking) at datadog
🚫 Skipping blacklisted job: Postdoctoral Researcher at Brookhaven Lab
[2026-01-29T18:19:44.855Z] [BOT] ✅ Loaded pending queue: 2879 total (2829 pending, 50 enriched, 0 posted)
[2026-01-29T18:19:45.026Z] [BOT] ✅ Saved pending queue: 2866 total (2829 pending, 37 enriched, 0 posted)
🗑️ Removed 13 blacklisted jobs from pending queue
[2026-01-29T18:19:45.027Z] [BOT] 📋 After blacklist filter: 37 jobs (13 blacklisted)
📋 After data quality filter: 37 jobs (0 invalid)
[2026-01-29T18:19:45.028Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-29T18:19:45.028Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-29T18:19:45.028Z] [BOT] - Capco Associate Talent Program - Houston June 2026 @ Capco: houston, dallas
   - Software Engineer 1 @ RTX: huntsville, fulton
   - Startups Ambassador @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T18:19:45.028Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T18:19:45.031Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-29T18:19:45.032Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team (Onsite - Relocation Assistance Available)" @ coinbase
[2026-01-29T18:19:45.032Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:45.049Z] [BOT ERROR] (node:4793) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T18:19:45.442Z] [BOT] ✅ Posted message: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase in #🤖・ai-jobs
[2026-01-29T18:19:45.442Z] [BOT] ✅ Industry: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase
[2026-01-29T18:19:45.443Z] [BOT] 💾 Added channel posting: Supervisor, Customer Success Team (Onsite - Relocation Assistance Available) @ coinbase → category channel (1 total channels)
[2026-01-29T18:19:45.443Z] [BOT] 💾 BEFORE MERGE: 30 jobs in memory (cached)
[2026-01-29T18:19:45.443Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T18:19:45.444Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=30
[2026-01-29T18:19:45.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 30 jobs (merged disk + memory)
[2026-01-29T18:19:45.444Z] [BOT] ✅ No jobs to archive (all 30 jobs within 7-day window)
[2026-01-29T18:19:45.452Z] [BOT] 💾 Saved posted_jobs.json: 30 active jobs
[2026-01-29T18:19:45.452Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:46.953Z] [BOT] 📍 [ROUTING] "Corporate Development" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:47.126Z] [BOT] ✅ Posted message: Corporate Development @ anthropic in #🤖・ai-jobs
[2026-01-29T18:19:47.126Z] [BOT] ✅ Industry: Corporate Development @ anthropic
💾 Added channel posting: Corporate Development @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 31 jobs in memory (cached)
[2026-01-29T18:19:47.127Z] [BOT] ✅ Loaded V2 database: 30 jobs
[2026-01-29T18:19:47.127Z] [BOT] 💾 DISK STATE: 30 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=31
[2026-01-29T18:19:47.127Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:19:47.127Z] [BOT] 💾 AFTER MERGE: 31 jobs (merged disk + memory)
✅ No jobs to archive (all 31 jobs within 7-day window)
[2026-01-29T18:19:47.130Z] [BOT] 💾 Saved posted_jobs.json: 31 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:48.630Z] [BOT] 📍 [ROUTING] "Capco Associate Talent Program - Houston June 2026" @ ORG_da05efaa
[2026-01-29T18:19:48.631Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:48.862Z] [BOT] ✅ Posted message: Capco Associate Talent Program - Houston June 2026 @ ORG_da05efaa in #🤖・ai-jobs
[2026-01-29T18:19:48.862Z] [BOT] ✅ Industry: Capco Associate Talent Program - Houston June 2026 @ ORG_da05efaa
💾 Added channel posting: Capco Associate Talent Program - Houston June 2026 @ ORG_da05efaa → category channel (1 total channels)
[2026-01-29T18:19:48.862Z] [BOT] 💾 BEFORE MERGE: 32 jobs in memory (cached)
[2026-01-29T18:19:48.862Z] [BOT] ✅ Loaded V2 database: 31 jobs
💾 DISK STATE: 31 jobs on disk
[2026-01-29T18:19:48.863Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=32
[2026-01-29T18:19:48.863Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 32 jobs (merged disk + memory)
[2026-01-29T18:19:48.863Z] [BOT] ✅ No jobs to archive (all 32 jobs within 7-day window)
[2026-01-29T18:19:48.865Z] [BOT] 💾 Saved posted_jobs.json: 32 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:50.366Z] [BOT] 📍 [ROUTING] "Engineering Associate - Database Operations & Automation" @ ORG_332e04b7 Fargo
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:50.366Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T18:19:50.610Z] [BOT] ✅ Posted message: Engineering Associate - Database Operations & Automation @ ORG_332e04b7 Fargo in #🤖・ai-jobs
[2026-01-29T18:19:50.610Z] [BOT] ✅ Industry: Engineering Associate - Database Operations & Automation @ ORG_332e04b7 Fargo
💾 Added channel posting: Engineering Associate - Database Operations & Automation @ ORG_332e04b7 Fargo → category channel (1 total channels)
[2026-01-29T18:19:50.610Z] [BOT] 💾 BEFORE MERGE: 33 jobs in memory (cached)
[2026-01-29T18:19:50.611Z] [BOT] ✅ Loaded V2 database: 32 jobs
[2026-01-29T18:19:50.611Z] [BOT] 💾 DISK STATE: 32 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=33
[2026-01-29T18:19:50.611Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 33 jobs (merged disk + memory)
✅ No jobs to archive (all 33 jobs within 7-day window)
[2026-01-29T18:19:50.613Z] [BOT] 💾 Saved posted_jobs.json: 33 active jobs
[2026-01-29T18:19:50.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:52.114Z] [BOT] 📍 [ROUTING] "Client Partner - Financial Services" @ spotify
[2026-01-29T18:19:52.115Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:52.327Z] [BOT] ✅ Posted message: Client Partner - Financial Services @ spotify in #🤖・ai-jobs
  ✅ Industry: Client Partner - Financial Services @ spotify
[2026-01-29T18:19:52.328Z] [BOT] 💾 Added channel posting: Client Partner - Financial Services @ spotify → category channel (1 total channels)
💾 BEFORE MERGE: 34 jobs in memory (cached)
[2026-01-29T18:19:52.329Z] [BOT] ✅ Loaded V2 database: 33 jobs
💾 DISK STATE: 33 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=34
[2026-01-29T18:19:52.329Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 34 jobs (merged disk + memory)
[2026-01-29T18:19:52.329Z] [BOT] ✅ No jobs to archive (all 34 jobs within 7-day window)
[2026-01-29T18:19:52.331Z] [BOT] 💾 Saved posted_jobs.json: 34 active jobs
[2026-01-29T18:19:52.331Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:54.071Z] [BOT] ✅ Posted message: Client Partner - Financial Services @ spotify in #🗽・JID_98d4f0de
[2026-01-29T18:19:54.071Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Client Partner - Financial Services @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 34 jobs in memory (cached)
[2026-01-29T18:19:54.072Z] [BOT] ✅ Loaded V2 database: 34 jobs
[2026-01-29T18:19:54.072Z] [BOT] 💾 DISK STATE: 34 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=34
[2026-01-29T18:19:54.072Z] [BOT] 🔀 Deep merged: Client Partner - Financial Services @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T18:19:54.073Z] [BOT] 💾 AFTER MERGE: 34 jobs (merged disk + memory)
✅ No jobs to archive (all 34 jobs within 7-day window)
[2026-01-29T18:19:54.075Z] [BOT] 💾 Saved posted_jobs.json: 34 active jobs
[2026-01-29T18:19:54.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:19:55.576Z] [BOT] 📍 [ROUTING] "Geopolitics Analyst, Policy" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:19:55.804Z] [BOT] ✅ Posted message: Geopolitics Analyst, Policy @ anthropic in #🤖・ai-jobs
[2026-01-29T18:19:55.805Z] [BOT] ✅ Industry: Geopolitics Analyst, Policy @ anthropic
💾 Added channel posting: Geopolitics Analyst, Policy @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 35 jobs in memory (cached)
[2026-01-29T18:19:55.806Z] [BOT] ✅ Loaded V2 database: 34 jobs
[2026-01-29T18:19:55.806Z] [BOT] 💾 DISK STATE: 34 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=35
[2026-01-29T18:19:55.806Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 35 jobs (merged disk + memory)
[2026-01-29T18:19:55.806Z] [BOT] ✅ No jobs to archive (all 35 jobs within 7-day window)
[2026-01-29T18:19:55.809Z] [BOT] 💾 Saved posted_jobs.json: 35 active jobs
[2026-01-29T18:19:55.809Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:00.310Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-29T18:20:00.311Z] [BOT] 📍 [ROUTING] "Designer Advocate - Figma Weave (New York, United States)" @ figma
[2026-01-29T18:20:00.311Z] [BOT] Category: TECH (matched: "pm")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:20:00.734Z] [BOT] ✅ Posted message: Designer Advocate - Figma Weave (New York, United States) @ figma in #💻・tech-jobs
  ✅ Industry: Designer Advocate - Figma Weave (New York, United States) @ figma
[2026-01-29T18:20:00.734Z] [BOT] 💾 Added channel posting: Designer Advocate - Figma Weave (New York, United States) @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 36 jobs in memory (cached)
[2026-01-29T18:20:00.736Z] [BOT] ✅ Loaded V2 database: 35 jobs
💾 DISK STATE: 35 jobs on disk
[2026-01-29T18:20:00.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=36
[2026-01-29T18:20:00.736Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 36 jobs (merged disk + memory)
✅ No jobs to archive (all 36 jobs within 7-day window)
[2026-01-29T18:20:00.738Z] [BOT] 💾 Saved posted_jobs.json: 36 active jobs
[2026-01-29T18:20:00.738Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:02.734Z] [BOT] ✅ Posted message: Designer Advocate - Figma Weave (New York, United States) @ figma in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T18:20:02.734Z] [BOT] 💾 Added channel posting: Designer Advocate - Figma Weave (New York, United States) @ figma → location channel (2 total channels)
💾 BEFORE MERGE: 36 jobs in memory (cached)
[2026-01-29T18:20:02.735Z] [BOT] ✅ Loaded V2 database: 36 jobs
💾 DISK STATE: 36 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=36
[2026-01-29T18:20:02.735Z] [BOT] 🔀 Deep merged: Designer Advocate - Figma Weave (New York, United States) @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T18:20:02.735Z] [BOT] 💾 AFTER MERGE: 36 jobs (merged disk + memory)
✅ No jobs to archive (all 36 jobs within 7-day window)
[2026-01-29T18:20:02.738Z] [BOT] 💾 Saved posted_jobs.json: 36 active jobs
[2026-01-29T18:20:02.739Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:04.240Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
[2026-01-29T18:20:04.240Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:20:05.908Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-29T18:20:05.908Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_75f04b84
💾 Added channel posting: Software Engineer 1 @ ORG_75f04b84 → category channel (1 total channels)
💾 BEFORE MERGE: 37 jobs in memory (cached)
[2026-01-29T18:20:05.909Z] [BOT] ✅ Loaded V2 database: 36 jobs
[2026-01-29T18:20:05.909Z] [BOT] 💾 DISK STATE: 36 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=37
[2026-01-29T18:20:05.909Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:20:05.910Z] [BOT] 💾 AFTER MERGE: 37 jobs (merged disk + memory)
✅ No jobs to archive (all 37 jobs within 7-day window)
[2026-01-29T18:20:05.913Z] [BOT] 💾 Saved posted_jobs.json: 37 active jobs
[2026-01-29T18:20:05.913Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:07.760Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_75f04b84 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T18:20:07.760Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_75f04b84 → location channel (2 total channels)
💾 BEFORE MERGE: 37 jobs in memory (cached)
[2026-01-29T18:20:07.762Z] [BOT] ✅ Loaded V2 database: 37 jobs
💾 DISK STATE: 37 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=37
[2026-01-29T18:20:07.762Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_75f04b84 (disk: 1 channels → merged: 2 channels)
[2026-01-29T18:20:07.762Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 37 jobs (merged disk + memory)
✅ No jobs to archive (all 37 jobs within 7-day window)
[2026-01-29T18:20:07.765Z] [BOT] 💾 Saved posted_jobs.json: 37 active jobs
[2026-01-29T18:20:07.765Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:09.267Z] [BOT] 📍 [ROUTING] "MMS Applications Engineer" @ ORG_0c3d8c79
   Category: TECH (matched: "engineer/engineering")
[2026-01-29T18:20:09.267Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:20:09.556Z] [BOT] ✅ Posted message: MMS Applications Engineer @ ORG_0c3d8c79 in #💻・tech-jobs
[2026-01-29T18:20:09.556Z] [BOT] ✅ Industry: MMS Applications Engineer @ ORG_0c3d8c79
💾 Added channel posting: MMS Applications Engineer @ ORG_0c3d8c79 → category channel (1 total channels)
[2026-01-29T18:20:09.557Z] [BOT] 💾 BEFORE MERGE: 38 jobs in memory (cached)
[2026-01-29T18:20:09.558Z] [BOT] ✅ Loaded V2 database: 37 jobs
[2026-01-29T18:20:09.558Z] [BOT] 💾 DISK STATE: 37 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=38
[2026-01-29T18:20:09.558Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:20:09.558Z] [BOT] 💾 AFTER MERGE: 38 jobs (merged disk + memory)
✅ No jobs to archive (all 38 jobs within 7-day window)
[2026-01-29T18:20:09.561Z] [BOT] 💾 Saved posted_jobs.json: 38 active jobs
[2026-01-29T18:20:09.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:14.064Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T18:20:14.064Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1" @ ORG_9f59c5cf Health Solutions
[2026-01-29T18:20:14.064Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T18:20:14.065Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T18:20:14.617Z] [BOT] ✅ Posted message: Software Development Engineer 1 @ ORG_9f59c5cf Health Solutions in #📊・JID_fb739488
[2026-01-29T18:20:14.617Z] [BOT] ✅ Industry: Software Development Engineer 1 @ ORG_9f59c5cf Health Solutions
💾 Added channel posting: Software Development Engineer 1 @ ORG_9f59c5cf Health Solutions → category channel (1 total channels)
💾 BEFORE MERGE: 39 jobs in memory (cached)
[2026-01-29T18:20:14.618Z] [BOT] ✅ Loaded V2 database: 38 jobs
[2026-01-29T18:20:14.618Z] [BOT] 💾 DISK STATE: 38 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=39
[2026-01-29T18:20:14.618Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 39 jobs (merged disk + memory)
[2026-01-29T18:20:14.618Z] [BOT] ✅ No jobs to archive (all 39 jobs within 7-day window)
[2026-01-29T18:20:14.621Z] [BOT] 💾 Saved posted_jobs.json: 39 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:20:19.123Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T18:20:19.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_044f8f36..." not found, but found as SHA256 "1027d639bd2f91ae"
[2026-01-29T18:20:19.124Z] [BOT] ⏭️  Skipping duplicate: JID_7bf34ecb (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f95533d3f335de4a"
[2026-01-29T18:20:19.125Z] [BOT] ⏭️  Skipping duplicate: JID_225f9b82 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e22c0880..." not found, but found as SHA256 "6f90b7f48a5e9614"
⏭️  Skipping duplicate: JID_bbf74693 (posted within 7 days)
[2026-01-29T18:20:19.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "eb31b65f2b125660"
⏭️  Skipping duplicate: JID_b65f0d57-automation_r-517910 (posted within 7 days)
[2026-01-29T18:20:19.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c3811800..." not found, but found as SHA256 "d90db86d11c7376e"
⏭️  Skipping duplicate: JID_61ac6704 (posted within 7 days)
[2026-01-29T18:20:19.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b23ac78da86c0517"
⏭️  Skipping duplicate: JID_5441ed22 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_41f708c4..." not found, but found as SHA256 "f61e5f3b68f52006"
⏭️  Skipping duplicate: JID_02c50a26 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "40dd5b270fa77c57"
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_324f4cc2-_01819702 (posted within 7 days)
[2026-01-29T18:20:19.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_56538621-ercot_career..." not found, but found as SHA256 "6a65c3769824914e"
⏭️  Skipping duplicate: JID_56538621-ercot_careers-JID_5f824f64-engineer_r1983-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e59dcab4..." not found, but found as SHA256 "37929c2df28e0a82"
[2026-01-29T18:20:19.125Z] [BOT] ⏭️  Skipping duplicate: JID_2be17475-i_r-6269 (posted within 7 days)
[2026-01-29T18:20:19.251Z] [BOT] ✅ Loaded pending queue: 2866 total (2829 pending, 37 enriched, 0 posted)
[2026-01-29T18:20:19.423Z] [BOT] ✅ Saved pending queue: 2866 total (2829 pending, 27 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T18:20:19.423Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T18:20:19.505Z] [BOT] 📂 Loaded 10091 existing routing entries
[2026-01-29T18:20:19.611Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T18:20:19.611Z] [BOT] Total entries: 10101
   Timestamp: 2026-01-29T18:20:19.567Z
[2026-01-29T18:20:19.611Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T18:20:19.612Z] [BOT] Total attempts: 26
   Successful: 13
[2026-01-29T18:20:19.612Z] [BOT] Failed: 0
   Skipped: 13
[2026-01-29T18:20:19.612Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-29T18:20:19.612Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 39 jobs in memory (cached)
[2026-01-29T18:20:19.613Z] [BOT] ✅ Loaded V2 database: 39 jobs
[2026-01-29T18:20:19.613Z] [BOT] 💾 DISK STATE: 39 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=39
[2026-01-29T18:20:19.613Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:20:19.614Z] [BOT] 💾 AFTER MERGE: 39 jobs (merged disk + memory)
✅ No jobs to archive (all 39 jobs within 7-day window)
[2026-01-29T18:20:19.617Z] [BOT] 💾 Saved posted_jobs.json: 39 active jobs
[2026-01-29T18:20:19.617Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T18:20:21.648Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4793) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*