# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T01:52:43.291Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T01:52:06.426Z] ========================================
[2026-01-30T01:52:06.428Z] Discord Bot Execution Log
[2026-01-30T01:52:06.428Z] Environment: GitHub Actions
[2026-01-30T01:52:06.428Z] Node Version: v20.20.0
[2026-01-30T01:52:06.428Z] ========================================
[2026-01-30T01:52:06.428Z] Environment Variables Check:
[2026-01-30T01:52:06.428Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T01:52:06.428Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.428Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T01:52:06.429Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T01:52:06.429Z] 
Multi-Channel Configuration:
[2026-01-30T01:52:06.429Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T01:52:06.429Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T01:52:06.430Z] 
Data Files Check:
[2026-01-30T01:52:06.431Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167097 bytes)
[2026-01-30T01:52:06.438Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1141704 bytes)
[2026-01-30T01:52:06.438Z] 
========================================
[2026-01-30T01:52:06.438Z] Starting Enhanced Discord Bot...
[2026-01-30T01:52:06.438Z] ========================================
[2026-01-30T01:52:06.960Z] [BOT] ✅ Loaded V2 database: 199 jobs
[2026-01-30T01:52:07.545Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T01:52:07.545Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T01:52:07.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T01:52:07.676Z] [BOT] ✅ Loaded pending queue: 2912 total (2692 pending, 50 enriched, 170 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Temporary Informatics and Data Analyst - Qmps at Cornell University
[2026-01-30T01:52:07.679Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T01:52:07.680Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T01:52:07.681Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-01-30T01:52:07.681Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Inference at anthropic
[2026-01-30T01:52:07.682Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, ML Acceleration at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Networking at anthropic
[2026-01-30T01:52:07.682Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Product Platform & Accounts Platform at anthropic
🚫 Skipping blacklisted job:  [Expression of Interest] Research Manager, Interpretability at anthropic
🚫 Skipping blacklisted job: Field Marketing Manager, Industries at anthropic
[2026-01-30T01:52:07.682Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Finance Systems, Finance & Strategy Lead at anthropic
🚫 Skipping blacklisted job: Finance Systems, Senior Business Systems Analyst at anthropic
🚫 Skipping blacklisted job: Finance Systems, Tax Technology Lead at anthropic
🚫 Skipping blacklisted job: Finance Variable Compensation Lead at anthropic
[2026-01-30T01:52:07.794Z] [BOT] ✅ Loaded pending queue: 2912 total (2692 pending, 50 enriched, 170 posted)
[2026-01-30T01:52:07.963Z] [BOT] ✅ Saved pending queue: 2901 total (2692 pending, 39 enriched, 170 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-30T01:52:07.963Z] [BOT] 📋 After blacklist filter: 38 jobs (11 blacklisted)
📋 After data quality filter: 38 jobs (0 invalid)
[2026-01-30T01:52:07.964Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-01-30T01:52:07.964Z] [BOT] ⏸️ Limiting to 10 jobs this run, 39 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T01:52:07.967Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-30T01:52:07.968Z] [BOT] 📍 [ROUTING] "Temporary Informatics and Data Analyst - Qmps" @ ORG_1aa20d0c University
[2026-01-30T01:52:07.968Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T01:52:07.986Z] [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T01:52:08.230Z] [BOT] ✅ Posted message: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University in #🤖・ai-jobs
[2026-01-30T01:52:08.230Z] [BOT] ✅ Industry: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University
[2026-01-30T01:52:08.230Z] [BOT] 💾 Added channel posting: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University → category channel (1 total channels)
[2026-01-30T01:52:08.231Z] [BOT] 💾 BEFORE MERGE: 200 jobs in memory (cached)
[2026-01-30T01:52:08.237Z] [BOT] ✅ Loaded V2 database: 199 jobs
[2026-01-30T01:52:08.237Z] [BOT] 💾 DISK STATE: 199 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=200
[2026-01-30T01:52:08.238Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:08.238Z] [BOT] 💾 AFTER MERGE: 200 jobs (merged disk + memory)
[2026-01-30T01:52:08.238Z] [BOT] ✅ No jobs to archive (all 200 jobs within 7-day window)
[2026-01-30T01:52:08.255Z] [BOT] 💾 Saved posted_jobs.json: 200 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:10.010Z] [BOT] ✅ Posted message: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University in #🗽・JID_98d4f0de
[2026-01-30T01:52:10.010Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University → location channel (2 total channels)
💾 BEFORE MERGE: 200 jobs in memory (cached)
[2026-01-30T01:52:10.014Z] [BOT] ✅ Loaded V2 database: 200 jobs
[2026-01-30T01:52:10.015Z] [BOT] 💾 DISK STATE: 200 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=200
[2026-01-30T01:52:10.015Z] [BOT] 🔀 Deep merged: Temporary Informatics and Data Analyst - Qmps @ ORG_1aa20d0c University (disk: 1 channels → merged: 2 channels)
[2026-01-30T01:52:10.015Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 200 jobs (merged disk + memory)
[2026-01-30T01:52:10.015Z] [BOT] ✅ No jobs to archive (all 200 jobs within 7-day window)
[2026-01-30T01:52:10.028Z] [BOT] 💾 Saved posted_jobs.json: 200 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:11.530Z] [BOT] 📍 [ROUTING] "Red Team Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T01:52:11.530Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T01:52:11.690Z] [BOT] ✅ Posted message: Red Team Engineer, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-30T01:52:11.690Z] [BOT] ✅ Industry: Red Team Engineer, Safeguards @ anthropic
[2026-01-30T01:52:11.690Z] [BOT] 💾 Added channel posting: Red Team Engineer, Safeguards @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 201 jobs in memory (cached)
[2026-01-30T01:52:11.695Z] [BOT] ✅ Loaded V2 database: 200 jobs
[2026-01-30T01:52:11.695Z] [BOT] 💾 DISK STATE: 200 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=201
[2026-01-30T01:52:11.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 201 jobs (merged disk + memory)
[2026-01-30T01:52:11.696Z] [BOT] ✅ No jobs to archive (all 201 jobs within 7-day window)
[2026-01-30T01:52:11.708Z] [BOT] 💾 Saved posted_jobs.json: 201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:13.210Z] [BOT] 📍 [ROUTING] "Applied AI Engineer, Beneficial Deployments" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T01:52:13.210Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T01:52:13.468Z] [BOT] ✅ Posted message: Applied AI Engineer, Beneficial Deployments @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied AI Engineer, Beneficial Deployments @ anthropic
[2026-01-30T01:52:13.468Z] [BOT] 💾 Added channel posting: Applied AI Engineer, Beneficial Deployments @ anthropic → category channel (1 total channels)
[2026-01-30T01:52:13.468Z] [BOT] 💾 BEFORE MERGE: 202 jobs in memory (cached)
[2026-01-30T01:52:13.473Z] [BOT] ✅ Loaded V2 database: 201 jobs
[2026-01-30T01:52:13.473Z] [BOT] 💾 DISK STATE: 201 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=202
[2026-01-30T01:52:13.474Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:13.474Z] [BOT] 💾 AFTER MERGE: 202 jobs (merged disk + memory)
[2026-01-30T01:52:13.474Z] [BOT] ✅ No jobs to archive (all 202 jobs within 7-day window)
[2026-01-30T01:52:13.488Z] [BOT] 💾 Saved posted_jobs.json: 202 active jobs
[2026-01-30T01:52:13.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:14.990Z] [BOT] 📍 [ROUTING] "Applied AI Engineer (Startups)" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T01:52:14.990Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T01:52:15.165Z] [BOT] ✅ Posted message: Applied AI Engineer (Startups) @ anthropic in #🤖・ai-jobs
[2026-01-30T01:52:15.165Z] [BOT] ✅ Industry: Applied AI Engineer (Startups) @ anthropic
[2026-01-30T01:52:15.165Z] [BOT] 💾 Added channel posting: Applied AI Engineer (Startups) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 203 jobs in memory (cached)
[2026-01-30T01:52:15.169Z] [BOT] ✅ Loaded V2 database: 202 jobs
[2026-01-30T01:52:15.170Z] [BOT] 💾 DISK STATE: 202 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=203
[2026-01-30T01:52:15.170Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 203 jobs (merged disk + memory)
[2026-01-30T01:52:15.170Z] [BOT] ✅ No jobs to archive (all 203 jobs within 7-day window)
[2026-01-30T01:52:15.183Z] [BOT] 💾 Saved posted_jobs.json: 203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:16.684Z] [BOT] 📍 [ROUTING] "Applied Safety Research Engineer, Safeguards" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T01:52:16.685Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T01:52:16.906Z] [BOT] ✅ Posted message: Applied Safety Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied Safety Research Engineer, Safeguards @ anthropic
[2026-01-30T01:52:16.906Z] [BOT] 💾 Added channel posting: Applied Safety Research Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-30T01:52:16.907Z] [BOT] 💾 BEFORE MERGE: 204 jobs in memory (cached)
[2026-01-30T01:52:16.914Z] [BOT] ✅ Loaded V2 database: 203 jobs
[2026-01-30T01:52:16.914Z] [BOT] 💾 DISK STATE: 203 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=204
[2026-01-30T01:52:16.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:16.915Z] [BOT] 💾 AFTER MERGE: 204 jobs (merged disk + memory)
[2026-01-30T01:52:16.915Z] [BOT] ✅ No jobs to archive (all 204 jobs within 7-day window)
[2026-01-30T01:52:16.931Z] [BOT] 💾 Saved posted_jobs.json: 204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:21.433Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T01:52:21.434Z] [BOT] 📍 [ROUTING] "Account Executive, SLED" @ airtable
[2026-01-30T01:52:21.434Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T01:52:21.685Z] [BOT] ✅ Posted message: Account Executive, SLED @ airtable in #💻・tech-jobs
[2026-01-30T01:52:21.685Z] [BOT] ✅ Industry: Account Executive, SLED @ airtable
💾 Added channel posting: Account Executive, SLED @ airtable → category channel (1 total channels)
[2026-01-30T01:52:21.686Z] [BOT] 💾 BEFORE MERGE: 205 jobs in memory (cached)
[2026-01-30T01:52:21.690Z] [BOT] ✅ Loaded V2 database: 204 jobs
[2026-01-30T01:52:21.690Z] [BOT] 💾 DISK STATE: 204 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=205
[2026-01-30T01:52:21.691Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:21.691Z] [BOT] 💾 AFTER MERGE: 205 jobs (merged disk + memory)
[2026-01-30T01:52:21.691Z] [BOT] ✅ No jobs to archive (all 205 jobs within 7-day window)
[2026-01-30T01:52:21.706Z] [BOT] 💾 Saved posted_jobs.json: 205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:23.207Z] [BOT] 📍 [ROUTING] "Software Engineering Apprenticeship (Summer 2026)" @ gusto
[2026-01-30T01:52:23.207Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T01:52:23.443Z] [BOT] ✅ Posted message: Software Engineering Apprenticeship (Summer 2026) @ gusto in #💻・tech-jobs
[2026-01-30T01:52:23.443Z] [BOT] ✅ Industry: Software Engineering Apprenticeship (Summer 2026) @ gusto
💾 Added channel posting: Software Engineering Apprenticeship (Summer 2026) @ gusto → category channel (1 total channels)
[2026-01-30T01:52:23.443Z] [BOT] 💾 BEFORE MERGE: 206 jobs in memory (cached)
[2026-01-30T01:52:23.448Z] [BOT] ✅ Loaded V2 database: 205 jobs
💾 DISK STATE: 205 jobs on disk
[2026-01-30T01:52:23.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=206
[2026-01-30T01:52:23.449Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:23.449Z] [BOT] 💾 AFTER MERGE: 206 jobs (merged disk + memory)
[2026-01-30T01:52:23.450Z] [BOT] ✅ No jobs to archive (all 206 jobs within 7-day window)
[2026-01-30T01:52:23.464Z] [BOT] 💾 Saved posted_jobs.json: 206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:24.966Z] [BOT] 📍 [ROUTING] "Application Security Engineer" @ anthropic
[2026-01-30T01:52:24.966Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T01:52:25.269Z] [BOT] ✅ Posted message: Application Security Engineer @ anthropic in #💻・tech-jobs
[2026-01-30T01:52:25.269Z] [BOT] ✅ Industry: Application Security Engineer @ anthropic
💾 Added channel posting: Application Security Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T01:52:25.269Z] [BOT] 💾 BEFORE MERGE: 207 jobs in memory (cached)
[2026-01-30T01:52:25.274Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2026-01-30T01:52:25.274Z] [BOT] 💾 DISK STATE: 206 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=207
[2026-01-30T01:52:25.275Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:25.275Z] [BOT] 💾 AFTER MERGE: 207 jobs (merged disk + memory)
[2026-01-30T01:52:25.275Z] [BOT] ✅ No jobs to archive (all 207 jobs within 7-day window)
[2026-01-30T01:52:25.290Z] [BOT] 💾 Saved posted_jobs.json: 207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:29.793Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T01:52:29.793Z] [BOT] 📍 [ROUTING] "Enterprise Development Representative" @ verkada
[2026-01-30T01:52:29.793Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T01:52:30.165Z] [BOT] ✅ Posted message: Enterprise Development Representative @ verkada in #💰・finance-jobs
[2026-01-30T01:52:30.166Z] [BOT] ✅ Industry: Enterprise Development Representative @ verkada
[2026-01-30T01:52:30.166Z] [BOT] 💾 Added channel posting: Enterprise Development Representative @ verkada → category channel (1 total channels)
[2026-01-30T01:52:30.166Z] [BOT] 💾 BEFORE MERGE: 208 jobs in memory (cached)
[2026-01-30T01:52:30.170Z] [BOT] ✅ Loaded V2 database: 207 jobs
💾 DISK STATE: 207 jobs on disk
[2026-01-30T01:52:30.171Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=208
[2026-01-30T01:52:30.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:30.171Z] [BOT] 💾 AFTER MERGE: 208 jobs (merged disk + memory)
[2026-01-30T01:52:30.171Z] [BOT] ✅ No jobs to archive (all 208 jobs within 7-day window)
[2026-01-30T01:52:30.184Z] [BOT] 💾 Saved posted_jobs.json: 208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:34.687Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T01:52:34.687Z] [BOT] 📍 [ROUTING] "Analytics Data Engineer" @ anthropic
[2026-01-30T01:52:34.687Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T01:52:34.884Z] [BOT] ✅ Posted message: Analytics Data Engineer @ anthropic in #📊・JID_fb739488
[2026-01-30T01:52:34.884Z] [BOT] ✅ Industry: Analytics Data Engineer @ anthropic
[2026-01-30T01:52:34.884Z] [BOT] 💾 Added channel posting: Analytics Data Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T01:52:34.884Z] [BOT] 💾 BEFORE MERGE: 209 jobs in memory (cached)
[2026-01-30T01:52:34.889Z] [BOT] ✅ Loaded V2 database: 208 jobs
[2026-01-30T01:52:34.889Z] [BOT] 💾 DISK STATE: 208 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=209
[2026-01-30T01:52:34.890Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:34.890Z] [BOT] 💾 AFTER MERGE: 209 jobs (merged disk + memory)
[2026-01-30T01:52:34.890Z] [BOT] ✅ No jobs to archive (all 209 jobs within 7-day window)
[2026-01-30T01:52:34.905Z] [BOT] 💾 Saved posted_jobs.json: 209 active jobs
[2026-01-30T01:52:34.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T01:52:39.407Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T01:52:39.408Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a980b96e..." not found, but found as SHA256 "6ed79a9157c96f0e"
⏭️  Skipping duplicate: JID_c421d351-qmps_wdr-00056753-1 (posted within 7 days)
[2026-01-30T01:52:39.408Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9916becf857131df"
⏭️  Skipping duplicate: JID_c21989ea (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "6dacb871910f4b4d"
⏭️  Skipping duplicate: JID_34247f54 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "a2378f7efeee689d"
⏭️  Skipping duplicate: JID_ce87da78 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_95923654..." not found, but found as SHA256 "77ad009cb5c78757"
⏭️  Skipping duplicate: JID_3bc8e7f2 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8af4333f131e54e3"
⏭️  Skipping duplicate: JID_0ab0ba0f (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "09c92654f318c38c"
⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c452ebc4b4f390c8"
⏭️  Skipping duplicate: JID_a269b1c9 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4feddc338d9cd197"
⏭️  Skipping duplicate: JID_ef49bed9 (posted within 7 days)
[2026-01-30T01:52:39.409Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "4c7b43eae5c3114f"
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
[2026-01-30T01:52:39.523Z] [BOT] ✅ Loaded pending queue: 2901 total (2692 pending, 39 enriched, 170 posted)
[2026-01-30T01:52:39.715Z] [BOT] ✅ Saved pending queue: 2901 total (2692 pending, 29 enriched, 180 posted)
[2026-01-30T01:52:39.715Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T01:52:39.796Z] [BOT] 📂 Loaded 10261 existing routing entries
[2026-01-30T01:52:39.905Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T01:52:39.905Z] [BOT] Total entries: 10271
   Timestamp: 2026-01-30T01:52:39.861Z
[2026-01-30T01:52:39.906Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T01:52:39.906Z] [BOT] Total attempts: 23
   Successful: 11
   Failed: 0
   Skipped: 12
[2026-01-30T01:52:39.906Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T01:52:39.906Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-30T01:52:39.906Z] [BOT] 3. #🗽・JID_98d4f0de: 1 posts
     4. #💰・finance-jobs: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T01:52:39.907Z] [BOT] [STATS] Channel stats saved
[2026-01-30T01:52:39.907Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 209 jobs in memory (cached)
[2026-01-30T01:52:39.912Z] [BOT] ✅ Loaded V2 database: 209 jobs
[2026-01-30T01:52:39.912Z] [BOT] 💾 DISK STATE: 209 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=209
[2026-01-30T01:52:39.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:52:39.913Z] [BOT] 💾 AFTER MERGE: 209 jobs (merged disk + memory)
[2026-01-30T01:52:39.913Z] [BOT] ✅ No jobs to archive (all 209 jobs within 7-day window)
[2026-01-30T01:52:39.926Z] [BOT] 💾 Saved posted_jobs.json: 209 active jobs
[2026-01-30T01:52:39.926Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T01:52:41.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*