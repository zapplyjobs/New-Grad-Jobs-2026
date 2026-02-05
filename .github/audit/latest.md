# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T08:54:50.513Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T08:53:54.693Z] ========================================
[2026-02-05T08:53:54.695Z] Discord Bot Execution Log
[2026-02-05T08:53:54.695Z] Environment: GitHub Actions
[2026-02-05T08:53:54.695Z] Node Version: v20.20.0
[2026-02-05T08:53:54.695Z] ========================================
[2026-02-05T08:53:54.696Z] Environment Variables Check:
[2026-02-05T08:53:54.696Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T08:53:54.696Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T08:53:54.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T08:53:54.696Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T08:53:54.696Z] 
Multi-Channel Configuration:
[2026-02-05T08:53:54.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T08:53:54.696Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.696Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T08:53:54.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.696Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.697Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.697Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.697Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:53:54.697Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T08:53:54.697Z] 
Data Files Check:
[2026-02-05T08:53:54.698Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104965 bytes)
[2026-02-05T08:53:54.758Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11798242 bytes)
[2026-02-05T08:53:54.758Z] 
========================================
[2026-02-05T08:53:54.758Z] Starting Enhanced Discord Bot...
[2026-02-05T08:53:54.758Z] ========================================
[2026-02-05T08:53:55.335Z] [BOT] ✅ Loaded V2 database: 2314 jobs
[2026-02-05T08:53:56.132Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T08:53:56.132Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T08:53:56.132Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T08:53:56.134Z] [BOT] ✅ Loaded pending queue: 41 total (0 pending, 41 enriched, 0 posted)
[2026-02-05T08:53:56.134Z] [BOT] [BOT] 📬 Found 41 enriched jobs ready to post from pending queue
[2026-02-05T08:53:56.134Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:53:56.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T08:53:56.136Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T08:53:56.136Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:53:56.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T08:53:56.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T08:53:56.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T08:53:56.137Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T08:53:56.152Z] [BOT] 📬 Found 37 new jobs (4 already posted)...
[2026-02-05T08:53:56.152Z] [BOT] 📋 After blacklist filter: 37 jobs (0 blacklisted)
[2026-02-05T08:53:56.153Z] [BOT] 📋 After data quality filter: 37 jobs (0 invalid)
[2026-02-05T08:53:56.153Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-02-05T08:53:56.153Z] [BOT] ⏸️ Limiting to 10 jobs this run, 27 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T08:53:56.157Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-05T08:53:56.158Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III" @ ORG_3eab285c
[2026-02-05T08:53:56.158Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:53:56.175Z] [BOT ERROR] (node:2462) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T08:53:56.360Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T08:53:56.360Z] [BOT] ✅ Industry: (USA) Software Engineer III @ ORG_3eab285c
[2026-02-05T08:53:56.361Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T08:53:56.362Z] [BOT] 💾 BEFORE MERGE: 2315 jobs in memory (cached)
[2026-02-05T08:53:56.410Z] [BOT] ✅ Loaded V2 database: 2314 jobs
💾 DISK STATE: 2314 jobs on disk
[2026-02-05T08:53:56.410Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2315
[2026-02-05T08:53:56.416Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:53:56.416Z] [BOT] 💾 AFTER MERGE: 2315 jobs (merged disk + memory)
[2026-02-05T08:53:56.418Z] [BOT] ✅ No jobs to archive (all 2315 jobs within 7-day window)
[2026-02-05T08:53:56.539Z] [BOT] 💾 Saved posted_jobs.json: 2315 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:53:59.749Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_3eab285c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T08:53:59.750Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T08:53:59.750Z] [BOT] 💾 BEFORE MERGE: 2315 jobs in memory (cached)
[2026-02-05T08:53:59.799Z] [BOT] ✅ Loaded V2 database: 2315 jobs
💾 DISK STATE: 2315 jobs on disk
[2026-02-05T08:53:59.799Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2315
[2026-02-05T08:53:59.804Z] [BOT] 🔀 Deep merged: (USA) Software Engineer III @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:53:59.804Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2315 jobs (merged disk + memory)
[2026-02-05T08:53:59.806Z] [BOT] ✅ No jobs to archive (all 2315 jobs within 7-day window)
[2026-02-05T08:53:59.923Z] [BOT] 💾 Saved posted_jobs.json: 2315 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:01.426Z] [BOT] 📍 [ROUTING] "Only Full Time: SDET" @ ORG_4f1af05e Innovative Technology Solutions LLC
[2026-02-05T08:54:01.426Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:54:01.693Z] [BOT] ✅ Posted message: Only Full Time: SDET @ ORG_4f1af05e Innovative Technology Solutions LLC in #💻・tech-jobs
[2026-02-05T08:54:01.693Z] [BOT] ✅ Industry: Only Full Time: SDET @ ORG_4f1af05e Innovative Technology Solutions LLC
[2026-02-05T08:54:01.694Z] [BOT] 💾 Added channel posting: Only Full Time: SDET @ ORG_4f1af05e Innovative Technology Solutions LLC → category channel (1 total channels)
[2026-02-05T08:54:01.694Z] [BOT] 💾 BEFORE MERGE: 2316 jobs in memory (cached)
[2026-02-05T08:54:01.745Z] [BOT] ✅ Loaded V2 database: 2315 jobs
💾 DISK STATE: 2315 jobs on disk
[2026-02-05T08:54:01.745Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2316
[2026-02-05T08:54:01.750Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:01.750Z] [BOT] 💾 AFTER MERGE: 2316 jobs (merged disk + memory)
[2026-02-05T08:54:01.752Z] [BOT] ✅ No jobs to archive (all 2316 jobs within 7-day window)
[2026-02-05T08:54:01.881Z] [BOT] 💾 Saved posted_jobs.json: 2316 active jobs
[2026-02-05T08:54:01.881Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:03.385Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III" @ ORG_d2454858
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:54:03.610Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_d2454858 in #💻・tech-jobs
  ✅ Industry: (USA) Software Engineer III @ ORG_d2454858
[2026-02-05T08:54:03.612Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_d2454858 → category channel (1 total channels)
💾 BEFORE MERGE: 2317 jobs in memory (cached)
[2026-02-05T08:54:03.649Z] [BOT] ✅ Loaded V2 database: 2316 jobs
💾 DISK STATE: 2316 jobs on disk
[2026-02-05T08:54:03.650Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2317
[2026-02-05T08:54:03.655Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2317 jobs (merged disk + memory)
[2026-02-05T08:54:03.656Z] [BOT] ✅ No jobs to archive (all 2317 jobs within 7-day window)
[2026-02-05T08:54:03.765Z] [BOT] 💾 Saved posted_jobs.json: 2317 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:05.504Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_d2454858 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:54:05.505Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_d2454858 → location channel (2 total channels)
[2026-02-05T08:54:05.505Z] [BOT] 💾 BEFORE MERGE: 2317 jobs in memory (cached)
[2026-02-05T08:54:05.546Z] [BOT] ✅ Loaded V2 database: 2317 jobs
💾 DISK STATE: 2317 jobs on disk
[2026-02-05T08:54:05.547Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2317
[2026-02-05T08:54:05.554Z] [BOT] 🔀 Deep merged: (USA) Software Engineer III @ ORG_d2454858 (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:54:05.554Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2317 jobs (merged disk + memory)
[2026-02-05T08:54:05.556Z] [BOT] ✅ No jobs to archive (all 2317 jobs within 7-day window)
[2026-02-05T08:54:05.685Z] [BOT] 💾 Saved posted_jobs.json: 2317 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:07.185Z] [BOT] 📍 [ROUTING] "Software Tool Verification" @ ORG_7e94d896 Technologies Inc.
   Category: TECH (matched: "software")
[2026-02-05T08:54:07.185Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:54:07.678Z] [BOT] ✅ Posted message: Software Tool Verification @ ORG_7e94d896 Technologies Inc. in #💻・tech-jobs
  ✅ Industry: Software Tool Verification @ ORG_7e94d896 Technologies Inc.
[2026-02-05T08:54:07.679Z] [BOT] 💾 Added channel posting: Software Tool Verification @ ORG_7e94d896 Technologies Inc. → category channel (1 total channels)
[2026-02-05T08:54:07.679Z] [BOT] 💾 BEFORE MERGE: 2318 jobs in memory (cached)
[2026-02-05T08:54:07.718Z] [BOT] ✅ Loaded V2 database: 2317 jobs
💾 DISK STATE: 2317 jobs on disk
[2026-02-05T08:54:07.719Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2318
[2026-02-05T08:54:07.722Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:07.723Z] [BOT] 💾 AFTER MERGE: 2318 jobs (merged disk + memory)
[2026-02-05T08:54:07.724Z] [BOT] ✅ No jobs to archive (all 2318 jobs within 7-day window)
[2026-02-05T08:54:07.847Z] [BOT] 💾 Saved posted_jobs.json: 2318 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:09.603Z] [BOT] ✅ Posted message: Software Tool Verification @ ORG_7e94d896 Technologies Inc. in #📍・JID_6daed763
[2026-02-05T08:54:09.603Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:54:09.603Z] [BOT] 💾 Added channel posting: Software Tool Verification @ ORG_7e94d896 Technologies Inc. → location channel (2 total channels)
[2026-02-05T08:54:09.603Z] [BOT] 💾 BEFORE MERGE: 2318 jobs in memory (cached)
[2026-02-05T08:54:09.642Z] [BOT] ✅ Loaded V2 database: 2318 jobs
💾 DISK STATE: 2318 jobs on disk
[2026-02-05T08:54:09.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2318
[2026-02-05T08:54:09.647Z] [BOT] 🔀 Deep merged: Software Tool Verification @ ORG_7e94d896 Technologies Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:54:09.647Z] [BOT] 💾 AFTER MERGE: 2318 jobs (merged disk + memory)
[2026-02-05T08:54:09.648Z] [BOT] ✅ No jobs to archive (all 2318 jobs within 7-day window)
[2026-02-05T08:54:09.763Z] [BOT] 💾 Saved posted_jobs.json: 2318 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:11.266Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer for Warehouse Automation" @ ORG_93b90803
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:54:11.504Z] [BOT] ✅ Posted message: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803 in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803
[2026-02-05T08:54:11.505Z] [BOT] 💾 Added channel posting: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803 → category channel (1 total channels)
💾 BEFORE MERGE: 2319 jobs in memory (cached)
[2026-02-05T08:54:11.560Z] [BOT] ✅ Loaded V2 database: 2318 jobs
💾 DISK STATE: 2318 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2319
[2026-02-05T08:54:11.564Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:11.564Z] [BOT] 💾 AFTER MERGE: 2319 jobs (merged disk + memory)
[2026-02-05T08:54:11.565Z] [BOT] ✅ No jobs to archive (all 2319 jobs within 7-day window)
[2026-02-05T08:54:11.673Z] [BOT] 💾 Saved posted_jobs.json: 2319 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:13.446Z] [BOT] ✅ Posted message: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803 in #📍・JID_6daed763
[2026-02-05T08:54:13.446Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:54:13.447Z] [BOT] 💾 Added channel posting: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803 → location channel (2 total channels)
[2026-02-05T08:54:13.447Z] [BOT] 💾 BEFORE MERGE: 2319 jobs in memory (cached)
[2026-02-05T08:54:13.489Z] [BOT] ✅ Loaded V2 database: 2319 jobs
💾 DISK STATE: 2319 jobs on disk
[2026-02-05T08:54:13.489Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2319
[2026-02-05T08:54:13.493Z] [BOT] 🔀 Deep merged: Entry-Level Software Engineer for Warehouse Automation @ ORG_93b90803 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:54:13.493Z] [BOT] 💾 AFTER MERGE: 2319 jobs (merged disk + memory)
[2026-02-05T08:54:13.494Z] [BOT] ✅ No jobs to archive (all 2319 jobs within 7-day window)
[2026-02-05T08:54:13.610Z] [BOT] 💾 Saved posted_jobs.json: 2319 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:15.112Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_ff611071
   Category: TECH (matched: "software")
[2026-02-05T08:54:15.112Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:54:15.308Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_ff611071 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_ff611071
[2026-02-05T08:54:15.309Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_ff611071 → category channel (1 total channels)
[2026-02-05T08:54:15.309Z] [BOT] 💾 BEFORE MERGE: 2320 jobs in memory (cached)
[2026-02-05T08:54:15.352Z] [BOT] ✅ Loaded V2 database: 2319 jobs
💾 DISK STATE: 2319 jobs on disk
[2026-02-05T08:54:15.353Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2320
[2026-02-05T08:54:15.357Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:15.357Z] [BOT] 💾 AFTER MERGE: 2320 jobs (merged disk + memory)
[2026-02-05T08:54:15.358Z] [BOT] ✅ No jobs to archive (all 2320 jobs within 7-day window)
[2026-02-05T08:54:15.488Z] [BOT] 💾 Saved posted_jobs.json: 2320 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:17.436Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_ff611071 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T08:54:17.437Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_ff611071 → location channel (2 total channels)
💾 BEFORE MERGE: 2320 jobs in memory (cached)
[2026-02-05T08:54:17.474Z] [BOT] ✅ Loaded V2 database: 2320 jobs
💾 DISK STATE: 2320 jobs on disk
[2026-02-05T08:54:17.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2320
[2026-02-05T08:54:17.479Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_ff611071 (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:54:17.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2320 jobs (merged disk + memory)
[2026-02-05T08:54:17.481Z] [BOT] ✅ No jobs to archive (all 2320 jobs within 7-day window)
[2026-02-05T08:54:17.593Z] [BOT] 💾 Saved posted_jobs.json: 2320 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:22.094Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-05T08:54:22.095Z] [BOT] 📍 [ROUTING] "Software Engineer - Machine Learning" @ ORG_5c4c8ca4
[2026-02-05T08:54:22.096Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T08:54:22.480Z] [BOT] ✅ Posted message: Software Engineer - Machine Learning @ ORG_5c4c8ca4 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Machine Learning @ ORG_5c4c8ca4
[2026-02-05T08:54:22.481Z] [BOT] 💾 Added channel posting: Software Engineer - Machine Learning @ ORG_5c4c8ca4 → category channel (1 total channels)
[2026-02-05T08:54:22.481Z] [BOT] 💾 BEFORE MERGE: 2321 jobs in memory (cached)
[2026-02-05T08:54:22.538Z] [BOT] ✅ Loaded V2 database: 2320 jobs
💾 DISK STATE: 2320 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2321
[2026-02-05T08:54:22.541Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:22.541Z] [BOT] 💾 AFTER MERGE: 2321 jobs (merged disk + memory)
[2026-02-05T08:54:22.543Z] [BOT] ✅ No jobs to archive (all 2321 jobs within 7-day window)
[2026-02-05T08:54:22.696Z] [BOT] 💾 Saved posted_jobs.json: 2321 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:24.429Z] [BOT] ✅ Posted message: Software Engineer - Machine Learning @ ORG_5c4c8ca4 in #🌉・JID_739bbc0b
[2026-02-05T08:54:24.429Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T08:54:24.429Z] [BOT] 💾 Added channel posting: Software Engineer - Machine Learning @ ORG_5c4c8ca4 → location channel (2 total channels)
[2026-02-05T08:54:24.430Z] [BOT] 💾 BEFORE MERGE: 2321 jobs in memory (cached)
[2026-02-05T08:54:24.468Z] [BOT] ✅ Loaded V2 database: 2321 jobs
💾 DISK STATE: 2321 jobs on disk
[2026-02-05T08:54:24.468Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2321
[2026-02-05T08:54:24.472Z] [BOT] 🔀 Deep merged: Software Engineer - Machine Learning @ ORG_5c4c8ca4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:54:24.472Z] [BOT] 💾 AFTER MERGE: 2321 jobs (merged disk + memory)
[2026-02-05T08:54:24.474Z] [BOT] ✅ No jobs to archive (all 2321 jobs within 7-day window)
[2026-02-05T08:54:24.595Z] [BOT] 💾 Saved posted_jobs.json: 2321 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:26.096Z] [BOT] 📍 [ROUTING] "Entry Level - Software Engineering or Computer Science" @ ORG_b344d80e MITRE Corporation
[2026-02-05T08:54:26.096Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T08:54:26.264Z] [BOT] ✅ Posted message: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation in #🤖・ai-jobs
  ✅ Industry: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation
[2026-02-05T08:54:26.265Z] [BOT] 💾 Added channel posting: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation → category channel (1 total channels)
[2026-02-05T08:54:26.265Z] [BOT] 💾 BEFORE MERGE: 2322 jobs in memory (cached)
[2026-02-05T08:54:26.303Z] [BOT] ✅ Loaded V2 database: 2321 jobs
💾 DISK STATE: 2321 jobs on disk
[2026-02-05T08:54:26.304Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2322
[2026-02-05T08:54:26.308Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:26.308Z] [BOT] 💾 AFTER MERGE: 2322 jobs (merged disk + memory)
[2026-02-05T08:54:26.309Z] [BOT] ✅ No jobs to archive (all 2322 jobs within 7-day window)
[2026-02-05T08:54:26.424Z] [BOT] 💾 Saved posted_jobs.json: 2322 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:28.185Z] [BOT] ✅ Posted message: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:54:28.185Z] [BOT] 💾 Added channel posting: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation → location channel (2 total channels)
[2026-02-05T08:54:28.185Z] [BOT] 💾 BEFORE MERGE: 2322 jobs in memory (cached)
[2026-02-05T08:54:28.227Z] [BOT] ✅ Loaded V2 database: 2322 jobs
💾 DISK STATE: 2322 jobs on disk
[2026-02-05T08:54:28.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2322
[2026-02-05T08:54:28.232Z] [BOT] 🔀 Deep merged: Entry Level - Software Engineering or Computer Science @ ORG_b344d80e MITRE Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:54:28.232Z] [BOT] 💾 AFTER MERGE: 2322 jobs (merged disk + memory)
[2026-02-05T08:54:28.233Z] [BOT] ✅ No jobs to archive (all 2322 jobs within 7-day window)
[2026-02-05T08:54:28.349Z] [BOT] 💾 Saved posted_jobs.json: 2322 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:32.852Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-05T08:54:32.853Z] [BOT] 📍 [ROUTING] "Fullstack developers" @ ORG_cbcc0986 Tech Consulting
[2026-02-05T08:54:32.853Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-05T08:54:33.089Z] [BOT] ✅ Posted message: Fullstack developers @ ORG_cbcc0986 Tech Consulting in #💰・finance-jobs
[2026-02-05T08:54:33.089Z] [BOT] ✅ Industry: Fullstack developers @ ORG_cbcc0986 Tech Consulting
[2026-02-05T08:54:33.090Z] [BOT] 💾 Added channel posting: Fullstack developers @ ORG_cbcc0986 Tech Consulting → category channel (1 total channels)
[2026-02-05T08:54:33.090Z] [BOT] 💾 BEFORE MERGE: 2323 jobs in memory (cached)
[2026-02-05T08:54:33.146Z] [BOT] ✅ Loaded V2 database: 2322 jobs
💾 DISK STATE: 2322 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2323
[2026-02-05T08:54:33.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:33.150Z] [BOT] 💾 AFTER MERGE: 2323 jobs (merged disk + memory)
[2026-02-05T08:54:33.152Z] [BOT] ✅ No jobs to archive (all 2323 jobs within 7-day window)
[2026-02-05T08:54:33.263Z] [BOT] 💾 Saved posted_jobs.json: 2323 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:35.013Z] [BOT] ✅ Posted message: Fullstack developers @ ORG_cbcc0986 Tech Consulting in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T08:54:35.013Z] [BOT] 💾 Added channel posting: Fullstack developers @ ORG_cbcc0986 Tech Consulting → location channel (2 total channels)
💾 BEFORE MERGE: 2323 jobs in memory (cached)
[2026-02-05T08:54:35.054Z] [BOT] ✅ Loaded V2 database: 2323 jobs
💾 DISK STATE: 2323 jobs on disk
[2026-02-05T08:54:35.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2323
[2026-02-05T08:54:35.058Z] [BOT] 🔀 Deep merged: Fullstack developers @ ORG_cbcc0986 Tech Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:54:35.059Z] [BOT] 💾 AFTER MERGE: 2323 jobs (merged disk + memory)
[2026-02-05T08:54:35.060Z] [BOT] ✅ No jobs to archive (all 2323 jobs within 7-day window)
[2026-02-05T08:54:35.189Z] [BOT] 💾 Saved posted_jobs.json: 2323 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:39.688Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T08:54:39.689Z] [BOT] 📍 [ROUTING] "Software Engineer - Early Career" @ ORG_c4d60d82 Martin
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-05T08:54:39.689Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T08:54:39.690Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T08:54:40.034Z] [BOT] ✅ Posted message: Software Engineer - Early Career @ ORG_c4d60d82 Martin in #📊・JID_fb739488
[2026-02-05T08:54:40.034Z] [BOT] ✅ Industry: Software Engineer - Early Career @ ORG_c4d60d82 Martin
[2026-02-05T08:54:40.035Z] [BOT] 💾 Added channel posting: Software Engineer - Early Career @ ORG_c4d60d82 Martin → category channel (1 total channels)
[2026-02-05T08:54:40.035Z] [BOT] 💾 BEFORE MERGE: 2324 jobs in memory (cached)
[2026-02-05T08:54:40.073Z] [BOT] ✅ Loaded V2 database: 2323 jobs
💾 DISK STATE: 2323 jobs on disk
[2026-02-05T08:54:40.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2324
[2026-02-05T08:54:40.077Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:40.078Z] [BOT] 💾 AFTER MERGE: 2324 jobs (merged disk + memory)
[2026-02-05T08:54:40.079Z] [BOT] ✅ No jobs to archive (all 2324 jobs within 7-day window)
[2026-02-05T08:54:40.186Z] [BOT] 💾 Saved posted_jobs.json: 2324 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:41.958Z] [BOT] ✅ Posted message: Software Engineer - Early Career @ ORG_c4d60d82 Martin in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T08:54:41.959Z] [BOT] 💾 Added channel posting: Software Engineer - Early Career @ ORG_c4d60d82 Martin → location channel (2 total channels)
[2026-02-05T08:54:41.959Z] [BOT] 💾 BEFORE MERGE: 2324 jobs in memory (cached)
[2026-02-05T08:54:42.014Z] [BOT] ✅ Loaded V2 database: 2324 jobs
💾 DISK STATE: 2324 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2324
[2026-02-05T08:54:42.019Z] [BOT] 🔀 Deep merged: Software Engineer - Early Career @ ORG_c4d60d82 Martin (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:54:42.019Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2324 jobs (merged disk + memory)
[2026-02-05T08:54:42.021Z] [BOT] ✅ No jobs to archive (all 2324 jobs within 7-day window)
[2026-02-05T08:54:42.128Z] [BOT] 💾 Saved posted_jobs.json: 2324 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:54:46.631Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T08:54:46.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_48a05a6b..." not found, but found as SHA256 "bcdeff5443a76a62"
[2026-02-05T08:54:46.632Z] [BOT] ⏭️  Skipping duplicate: JID_55972b4d (posted within 7 days)
[2026-02-05T08:54:46.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_80dd7d8a..." not found, but found as SHA256 "25198dc9554bf72b"
⏭️  Skipping duplicate: JID_c7d6abac (posted within 7 days)
[2026-02-05T08:54:46.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5301ea8b..." not found, but found as SHA256 "d9138b6c16faf32d"
⏭️  Skipping duplicate: JID_ac403aac (posted within 7 days)
[2026-02-05T08:54:46.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6f91f70b..." not found, but found as SHA256 "03c8ee523f848473"
[2026-02-05T08:54:46.634Z] [BOT] ⏭️  Skipping duplicate: JID_2bbe8198 (posted within 7 days)
[2026-02-05T08:54:46.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "6a4015036249b3a9"
[2026-02-05T08:54:46.634Z] [BOT] ⏭️  Skipping duplicate: JID_1bf3fc37 (posted within 7 days)
[2026-02-05T08:54:46.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_630569df..." not found, but found as SHA256 "eb1cd1f33248af95"
[2026-02-05T08:54:46.634Z] [BOT] ⏭️  Skipping duplicate: JID_faef2c05 (posted within 7 days)
[2026-02-05T08:54:46.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08bec582..." not found, but found as SHA256 "6c2b196bd3abc508"
[2026-02-05T08:54:46.635Z] [BOT] ⏭️  Skipping duplicate: JID_9c014364 (posted within 7 days)
[2026-02-05T08:54:46.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9e5e8109..." not found, but found as SHA256 "a5cd28a185375575"
[2026-02-05T08:54:46.635Z] [BOT] ⏭️  Skipping duplicate: JID_9744024b (posted within 7 days)
[2026-02-05T08:54:46.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_27704bf9..." not found, but found as SHA256 "20e3ba17b7428eb1"
[2026-02-05T08:54:46.635Z] [BOT] ⏭️  Skipping duplicate: JID_af591d59 (posted within 7 days)
[2026-02-05T08:54:46.636Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "4ef104a4c2ec6474"
[2026-02-05T08:54:46.636Z] [BOT] ⏭️  Skipping duplicate: JID_e1edbc15 (posted within 7 days)
[2026-02-05T08:54:46.638Z] [BOT] ✅ Loaded pending queue: 41 total (0 pending, 41 enriched, 0 posted)
[2026-02-05T08:54:46.640Z] [BOT] ✅ Saved pending queue: 41 total (0 pending, 31 enriched, 10 posted)
[2026-02-05T08:54:46.641Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T08:54:46.731Z] [BOT] 📂 Loaded 12405 existing routing entries
[2026-02-05T08:54:46.869Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-05T08:54:46.870Z] [BOT] Total entries: 12415
   Timestamp: 2026-02-05T08:54:46.817Z
[2026-02-05T08:54:46.870Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T08:54:46.870Z] [BOT] Total attempts: 23
   Successful: 19
   Failed: 0
   Skipped: 4
[2026-02-05T08:54:46.870Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T08:54:46.871Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-02-05T08:54:46.871Z] [BOT] 2. #📍・JID_6daed763: 4 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🗽・JID_98d4f0de: 2 posts
[2026-02-05T08:54:46.871Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2324 jobs in memory (cached)
[2026-02-05T08:54:46.916Z] [BOT] ✅ Loaded V2 database: 2324 jobs
💾 DISK STATE: 2324 jobs on disk
[2026-02-05T08:54:46.917Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2324
[2026-02-05T08:54:46.921Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:54:46.921Z] [BOT] 💾 AFTER MERGE: 2324 jobs (merged disk + memory)
[2026-02-05T08:54:46.922Z] [BOT] ✅ No jobs to archive (all 2324 jobs within 7-day window)
[2026-02-05T08:54:47.051Z] [BOT] 💾 Saved posted_jobs.json: 2324 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T08:54:49.073Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2462) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*