# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T23:34:14.987Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T23:33:35.321Z] ========================================
[2026-01-29T23:33:35.323Z] Discord Bot Execution Log
[2026-01-29T23:33:35.323Z] Environment: GitHub Actions
[2026-01-29T23:33:35.323Z] Node Version: v20.20.0
[2026-01-29T23:33:35.323Z] ========================================
[2026-01-29T23:33:35.323Z] Environment Variables Check:
[2026-01-29T23:33:35.323Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T23:33:35.323Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.323Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T23:33:35.323Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T23:33:35.323Z] 
Multi-Channel Configuration:
[2026-01-29T23:33:35.324Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T23:33:35.324Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T23:33:35.324Z] 
Data Files Check:
[2026-01-29T23:33:35.325Z] .github/data/new_jobs.json: ✅ Exists (10 items, 127614 bytes)
[2026-01-29T23:33:35.332Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 935297 bytes)
[2026-01-29T23:33:35.332Z] 
========================================
[2026-01-29T23:33:35.332Z] Starting Enhanced Discord Bot...
[2026-01-29T23:33:35.332Z] ========================================
[2026-01-29T23:33:35.857Z] [BOT] ✅ Loaded V2 database: 169 jobs
[2026-01-29T23:33:36.404Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T23:33:36.404Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T23:33:36.404Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T23:33:36.523Z] [BOT] ✅ Loaded pending queue: 2895 total (2705 pending, 50 enriched, 140 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Territory (Mid-Market) at verkada
[2026-01-29T23:33:36.527Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T23:33:36.528Z] [BOT] 🚫 Skipping blacklisted job: Application Security Engineering Manager at anthropic
[2026-01-29T23:33:36.632Z] [BOT] ✅ Loaded pending queue: 2895 total (2705 pending, 50 enriched, 140 posted)
[2026-01-29T23:33:36.814Z] [BOT] ✅ Saved pending queue: 2894 total (2705 pending, 49 enriched, 140 posted)
[2026-01-29T23:33:36.814Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 49 jobs (1 blacklisted)
[2026-01-29T23:33:36.814Z] [BOT] 📋 After data quality filter: 49 jobs (0 invalid)
[2026-01-29T23:33:36.816Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T23:33:36.816Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo: charlotte, phoenix
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T23:33:36.823Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-29T23:33:36.824Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-29T23:33:36.824Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T23:33:36.846Z] [BOT ERROR] (node:2442) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T23:33:37.287Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-01-29T23:33:37.287Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-29T23:33:37.287Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-29T23:33:37.287Z] [BOT] 💾 BEFORE MERGE: 170 jobs in memory (cached)
[2026-01-29T23:33:37.292Z] [BOT] ✅ Loaded V2 database: 169 jobs
[2026-01-29T23:33:37.293Z] [BOT] 💾 DISK STATE: 169 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=170
[2026-01-29T23:33:37.293Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T23:33:37.293Z] [BOT] 💾 AFTER MERGE: 170 jobs (merged disk + memory)
[2026-01-29T23:33:37.294Z] [BOT] ✅ No jobs to archive (all 170 jobs within 7-day window)
[2026-01-29T23:33:37.305Z] [BOT] 💾 Saved posted_jobs.json: 170 active jobs
[2026-01-29T23:33:37.305Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:38.808Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (US West - Federal Veterans Affairs)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T23:33:39.054Z] [BOT] ✅ Posted message: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada
[2026-01-29T23:33:39.054Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada → category channel (1 total channels)
[2026-01-29T23:33:39.054Z] [BOT] 💾 BEFORE MERGE: 171 jobs in memory (cached)
[2026-01-29T23:33:39.058Z] [BOT] ✅ Loaded V2 database: 170 jobs
💾 DISK STATE: 170 jobs on disk
[2026-01-29T23:33:39.058Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=171
[2026-01-29T23:33:39.059Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T23:33:39.059Z] [BOT] 💾 AFTER MERGE: 171 jobs (merged disk + memory)
[2026-01-29T23:33:39.059Z] [BOT] ✅ No jobs to archive (all 171 jobs within 7-day window)
[2026-01-29T23:33:39.069Z] [BOT] 💾 Saved posted_jobs.json: 171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:43.570Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T23:33:43.570Z] [BOT] 📍 [ROUTING] "Data Scientist, GTM Analytics" @ airtable
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T23:33:43.570Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T23:33:43.897Z] [BOT] ✅ Posted message: Data Scientist, GTM Analytics @ airtable in #🤖・ai-jobs
  ✅ Industry: Data Scientist, GTM Analytics @ airtable
[2026-01-29T23:33:43.897Z] [BOT] 💾 Added channel posting: Data Scientist, GTM Analytics @ airtable → category channel (1 total channels)
[2026-01-29T23:33:43.897Z] [BOT] 💾 BEFORE MERGE: 172 jobs in memory (cached)
[2026-01-29T23:33:43.901Z] [BOT] ✅ Loaded V2 database: 171 jobs
💾 DISK STATE: 171 jobs on disk
[2026-01-29T23:33:43.901Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=172
[2026-01-29T23:33:43.902Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 172 jobs (merged disk + memory)
[2026-01-29T23:33:43.902Z] [BOT] ✅ No jobs to archive (all 172 jobs within 7-day window)
[2026-01-29T23:33:43.915Z] [BOT] 💾 Saved posted_jobs.json: 172 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:45.416Z] [BOT] 📍 [ROUTING] "Applied Researcher 1 - Multi-agent Systems - Knowledge Graphs/Graphrag/Graph-of-Thought / Got" @ ORG_1a1cf792 One
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T23:33:47.062Z] [BOT] ✅ Posted message: Applied Researcher 1 - Multi-agent Systems - Knowledge Graphs/Graphrag/Graph-of-Thought / Got @ ORG_1a1cf792 One in #🤖・ai-jobs
  ✅ Industry: Applied Researcher 1 - Multi-agent Systems - Knowledge Graphs/Graphrag/Graph-of-Thought / Got @ ORG_1a1cf792 One
[2026-01-29T23:33:47.062Z] [BOT] 💾 Added channel posting: Applied Researcher 1 - Multi-agent Systems - Knowledge Graphs/Graphrag/Graph-of-Thought / Got @ ORG_1a1cf792 One → category channel (1 total channels)
💾 BEFORE MERGE: 173 jobs in memory (cached)
[2026-01-29T23:33:47.068Z] [BOT] ✅ Loaded V2 database: 172 jobs
💾 DISK STATE: 172 jobs on disk
[2026-01-29T23:33:47.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=173
[2026-01-29T23:33:47.069Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 173 jobs (merged disk + memory)
[2026-01-29T23:33:47.070Z] [BOT] ✅ No jobs to archive (all 173 jobs within 7-day window)
[2026-01-29T23:33:47.083Z] [BOT] 💾 Saved posted_jobs.json: 173 active jobs
[2026-01-29T23:33:47.083Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:48.584Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_4760c4c9
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T23:33:48.584Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T23:33:48.707Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_4760c4c9 in #🤖・ai-jobs
[2026-01-29T23:33:48.707Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_4760c4c9
[2026-01-29T23:33:48.707Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_4760c4c9 → category channel (1 total channels)
💾 BEFORE MERGE: 174 jobs in memory (cached)
[2026-01-29T23:33:48.712Z] [BOT] ✅ Loaded V2 database: 173 jobs
[2026-01-29T23:33:48.712Z] [BOT] 💾 DISK STATE: 173 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=174
[2026-01-29T23:33:48.712Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T23:33:48.712Z] [BOT] 💾 AFTER MERGE: 174 jobs (merged disk + memory)
[2026-01-29T23:33:48.713Z] [BOT] ✅ No jobs to archive (all 174 jobs within 7-day window)
[2026-01-29T23:33:48.725Z] [BOT] 💾 Saved posted_jobs.json: 174 active jobs
[2026-01-29T23:33:48.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:53.228Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-29T23:33:53.229Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Digital Native Business" @ anthropic
[2026-01-29T23:33:53.229Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T23:33:53.614Z] [BOT] ✅ Posted message: Strategic Account Executive, Digital Native Business @ anthropic in #💻・tech-jobs
[2026-01-29T23:33:53.614Z] [BOT] ✅ Industry: Strategic Account Executive, Digital Native Business @ anthropic
💾 Added channel posting: Strategic Account Executive, Digital Native Business @ anthropic → category channel (1 total channels)
[2026-01-29T23:33:53.614Z] [BOT] 💾 BEFORE MERGE: 175 jobs in memory (cached)
[2026-01-29T23:33:53.618Z] [BOT] ✅ Loaded V2 database: 174 jobs
[2026-01-29T23:33:53.618Z] [BOT] 💾 DISK STATE: 174 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=175
[2026-01-29T23:33:53.618Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T23:33:53.619Z] [BOT] 💾 AFTER MERGE: 175 jobs (merged disk + memory)
[2026-01-29T23:33:53.619Z] [BOT] ✅ No jobs to archive (all 175 jobs within 7-day window)
[2026-01-29T23:33:53.630Z] [BOT] 💾 Saved posted_jobs.json: 175 active jobs
[2026-01-29T23:33:53.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:55.133Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Java" @ ORG_bdf03daa Fintech Solutions
[2026-01-29T23:33:55.133Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T23:33:55.421Z] [BOT] ✅ Posted message: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2026-01-29T23:33:55.422Z] [BOT] ✅ Industry: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions
💾 Added channel posting: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions → category channel (1 total channels)
[2026-01-29T23:33:55.422Z] [BOT] 💾 BEFORE MERGE: 176 jobs in memory (cached)
[2026-01-29T23:33:55.427Z] [BOT] ✅ Loaded V2 database: 175 jobs
💾 DISK STATE: 175 jobs on disk
[2026-01-29T23:33:55.427Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=176
[2026-01-29T23:33:55.428Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 176 jobs (merged disk + memory)
[2026-01-29T23:33:55.428Z] [BOT] ✅ No jobs to archive (all 176 jobs within 7-day window)
[2026-01-29T23:33:55.440Z] [BOT] 💾 Saved posted_jobs.json: 176 active jobs
[2026-01-29T23:33:55.440Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:57.117Z] [BOT] ✅ Posted message: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T23:33:57.117Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions → location channel (2 total channels)
💾 BEFORE MERGE: 176 jobs in memory (cached)
[2026-01-29T23:33:57.121Z] [BOT] ✅ Loaded V2 database: 176 jobs
💾 DISK STATE: 176 jobs on disk
[2026-01-29T23:33:57.122Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=176
[2026-01-29T23:33:57.122Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-29T23:33:57.122Z] [BOT] 💾 AFTER MERGE: 176 jobs (merged disk + memory)
[2026-01-29T23:33:57.122Z] [BOT] ✅ No jobs to archive (all 176 jobs within 7-day window)
[2026-01-29T23:33:57.133Z] [BOT] 💾 Saved posted_jobs.json: 176 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:33:58.635Z] [BOT] 📍 [ROUTING] "Environmental Technician/Engineer – Entry Level - Air Quality Focus" @ ORG_c0e17070
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T23:34:00.874Z] [BOT] ✅ Posted message: Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070 in #💻・tech-jobs
  ✅ Industry: Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070
[2026-01-29T23:34:00.874Z] [BOT] 💾 Added channel posting: Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070 → category channel (1 total channels)
[2026-01-29T23:34:00.874Z] [BOT] 💾 BEFORE MERGE: 177 jobs in memory (cached)
[2026-01-29T23:34:00.878Z] [BOT] ✅ Loaded V2 database: 176 jobs
💾 DISK STATE: 176 jobs on disk
[2026-01-29T23:34:00.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=177
[2026-01-29T23:34:00.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 177 jobs (merged disk + memory)
[2026-01-29T23:34:00.879Z] [BOT] ✅ No jobs to archive (all 177 jobs within 7-day window)
[2026-01-29T23:34:00.892Z] [BOT] 💾 Saved posted_jobs.json: 177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:34:05.394Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-29T23:34:05.395Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (2-8 YOE)" @ airtable
[2026-01-29T23:34:05.395Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T23:34:05.571Z] [BOT] ✅ Posted message: Software Engineer, Product Backend (2-8 YOE) @ airtable in #📊・JID_fb739488
  ✅ Industry: Software Engineer, Product Backend (2-8 YOE) @ airtable
[2026-01-29T23:34:05.571Z] [BOT] 💾 Added channel posting: Software Engineer, Product Backend (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-01-29T23:34:05.571Z] [BOT] 💾 BEFORE MERGE: 178 jobs in memory (cached)
[2026-01-29T23:34:05.576Z] [BOT] ✅ Loaded V2 database: 177 jobs
💾 DISK STATE: 177 jobs on disk
[2026-01-29T23:34:05.576Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=178
[2026-01-29T23:34:05.576Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 178 jobs (merged disk + memory)
[2026-01-29T23:34:05.577Z] [BOT] ✅ No jobs to archive (all 178 jobs within 7-day window)
[2026-01-29T23:34:05.589Z] [BOT] 💾 Saved posted_jobs.json: 178 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:34:07.091Z] [BOT] 📍 [ROUTING] "Associate Ecommerce Data Analyst" @ ORG_7dcce8d0ine
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-29T23:34:07.091Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T23:34:07.261Z] [BOT] ✅ Posted message: Associate Ecommerce Data Analyst @ ORG_7dcce8d0ine in #📊・JID_fb739488
  ✅ Industry: Associate Ecommerce Data Analyst @ ORG_7dcce8d0ine
[2026-01-29T23:34:07.261Z] [BOT] 💾 Added channel posting: Associate Ecommerce Data Analyst @ ORG_7dcce8d0ine → category channel (1 total channels)
[2026-01-29T23:34:07.261Z] [BOT] 💾 BEFORE MERGE: 179 jobs in memory (cached)
[2026-01-29T23:34:07.265Z] [BOT] ✅ Loaded V2 database: 178 jobs
[2026-01-29T23:34:07.265Z] [BOT] 💾 DISK STATE: 178 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=179
[2026-01-29T23:34:07.265Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T23:34:07.265Z] [BOT] 💾 AFTER MERGE: 179 jobs (merged disk + memory)
[2026-01-29T23:34:07.266Z] [BOT] ✅ No jobs to archive (all 179 jobs within 7-day window)
[2026-01-29T23:34:07.276Z] [BOT] 💾 Saved posted_jobs.json: 179 active jobs
[2026-01-29T23:34:07.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T23:34:11.778Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T23:34:11.779Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "6788d73bd5bb9bd0"
[2026-01-29T23:34:11.779Z] [BOT] ⏭️  Skipping duplicate: JID_10ccb697 (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "239b46289aead103"
⏭️  Skipping duplicate: JID_00f8aad3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "798615dfc778a5f7"
⏭️  Skipping duplicate: JID_1d6b84cb (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "e7086a84ee068342"
⏭️  Skipping duplicate: JID_c16b5fb8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "5e7260f8d2dda442"
[2026-01-29T23:34:11.780Z] [BOT] ⏭️  Skipping duplicate: JID_81c0b62d (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9b7ae55..." not found, but found as SHA256 "e16a70b0626e41ff"
⏭️  Skipping duplicate: JID_61d16690-_jr104035-1 (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2598835e..." not found, but found as SHA256 "d825fbefbcf12e0e"
⏭️  Skipping duplicate: JID_b4bd9f8e-capital_one-JID_d2cc39b0-_r234367 (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f01a741..." not found, but found as SHA256 "06e2698d13a043c4"
⏭️  Skipping duplicate: JID_17fc4e9b-reliaquest_careers-JID_a85a314a-scientist_r14929 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8f11a139..." not found, but found as SHA256 "68f3d0055b9e0b77"
⏭️  Skipping duplicate: JID_8891c1fd-_r-101988 (posted within 7 days)
[2026-01-29T23:34:11.780Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d2f7d1f-uline_..." not found, but found as SHA256 "1b1fdd589064c25e"
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_ac01189f-analyst_r260722-1 (posted within 7 days)
[2026-01-29T23:34:11.895Z] [BOT] ✅ Loaded pending queue: 2894 total (2705 pending, 49 enriched, 140 posted)
[2026-01-29T23:34:12.080Z] [BOT] ✅ Saved pending queue: 2894 total (2705 pending, 39 enriched, 150 posted)
[2026-01-29T23:34:12.080Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T23:34:12.183Z] [BOT] 📂 Loaded 10231 existing routing entries
[2026-01-29T23:34:12.290Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-29T23:34:12.290Z] [BOT] New entries: 10
   Total entries: 10241
   Timestamp: 2026-01-29T23:34:12.247Z
[2026-01-29T23:34:12.290Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 12
[2026-01-29T23:34:12.291Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 1
[2026-01-29T23:34:12.291Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 2 posts
     4. #📊・JID_fb739488: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-01-29T23:34:12.291Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 179 jobs in memory (cached)
[2026-01-29T23:34:12.295Z] [BOT] ✅ Loaded V2 database: 179 jobs
[2026-01-29T23:34:12.295Z] [BOT] 💾 DISK STATE: 179 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=179
[2026-01-29T23:34:12.296Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 179 jobs (merged disk + memory)
[2026-01-29T23:34:12.296Z] [BOT] ✅ No jobs to archive (all 179 jobs within 7-day window)
[2026-01-29T23:34:12.309Z] [BOT] 💾 Saved posted_jobs.json: 179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T23:34:12.309Z] [BOT] ✅ Database saved successfully
[2026-01-29T23:34:14.338Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2442) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*