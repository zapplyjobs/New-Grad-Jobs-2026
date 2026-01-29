# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T22:50:46.410Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T22:50:13.695Z] ========================================
[2026-01-29T22:50:13.697Z] Discord Bot Execution Log
[2026-01-29T22:50:13.697Z] Environment: GitHub Actions
[2026-01-29T22:50:13.697Z] Node Version: v20.20.0
[2026-01-29T22:50:13.697Z] ========================================
[2026-01-29T22:50:13.697Z] Environment Variables Check:
[2026-01-29T22:50:13.697Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T22:50:13.698Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T22:50:13.698Z] 
Multi-Channel Configuration:
[2026-01-29T22:50:13.698Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.698Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.699Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T22:50:13.699Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T22:50:13.699Z] 
Data Files Check:
[2026-01-29T22:50:13.700Z] .github/data/new_jobs.json: ✅ Exists (10 items, 83462 bytes)
[2026-01-29T22:50:13.706Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 881832 bytes)
[2026-01-29T22:50:13.706Z] 
========================================
[2026-01-29T22:50:13.706Z] Starting Enhanced Discord Bot...
[2026-01-29T22:50:13.706Z] ========================================
[2026-01-29T22:50:14.233Z] [BOT] ✅ Loaded V2 database: 159 jobs
[2026-01-29T22:50:14.836Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T22:50:14.837Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T22:50:14.837Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T22:50:14.952Z] [BOT] ✅ Loaded pending queue: 2882 total (2702 pending, 50 enriched, 130 posted)
[2026-01-29T22:50:14.953Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T22:50:14.953Z] [BOT] [BOT] 🔍 Sample enriched job: Expansion Account Executive, Enterprise at brex
[2026-01-29T22:50:14.957Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T22:50:14.958Z] [BOT] 🚫 Skipping blacklisted job: Manager, Commercial Promotion Partnerships at spotify
[2026-01-29T22:50:14.958Z] [BOT] 🚫 Skipping blacklisted job: Associate Director, Monetization Strategy at spotify
🚫 Skipping blacklisted job: Research Product Manager, Labs at anthropic
[2026-01-29T22:50:14.958Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-01-29T22:50:14.958Z] [BOT] 🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
🚫 Skipping blacklisted job: Mid-Market Customer Success Manager at brex
[2026-01-29T22:50:15.065Z] [BOT] ✅ Loaded pending queue: 2882 total (2702 pending, 50 enriched, 130 posted)
[2026-01-29T22:50:15.266Z] [BOT] ✅ Saved pending queue: 2876 total (2702 pending, 44 enriched, 130 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-29T22:50:15.266Z] [BOT] 📋 After blacklist filter: 44 jobs (6 blacklisted)
📋 After data quality filter: 44 jobs (0 invalid)
[2026-01-29T22:50:15.267Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-29T22:50:15.267Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T22:50:15.267Z] [BOT] - Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo: charlotte, phoenix
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T22:50:15.271Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T22:50:15.271Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
[2026-01-29T22:50:15.272Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:50:15.289Z] [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T22:50:15.846Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #💰・finance-jobs
[2026-01-29T22:50:15.846Z] [BOT] ✅ Industry: Expansion Account Executive, Enterprise @ brex
[2026-01-29T22:50:15.846Z] [BOT] 💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → category channel (1 total channels)
[2026-01-29T22:50:15.847Z] [BOT] 💾 BEFORE MERGE: 160 jobs in memory (cached)
[2026-01-29T22:50:15.852Z] [BOT] ✅ Loaded V2 database: 159 jobs
[2026-01-29T22:50:15.852Z] [BOT] 💾 DISK STATE: 159 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=160
[2026-01-29T22:50:15.852Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:15.853Z] [BOT] 💾 AFTER MERGE: 160 jobs (merged disk + memory)
[2026-01-29T22:50:15.853Z] [BOT] ✅ No jobs to archive (all 160 jobs within 7-day window)
[2026-01-29T22:50:15.864Z] [BOT] 💾 Saved posted_jobs.json: 160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:20.365Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-29T22:50:20.366Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Kansas - US" @ ORG_f3ae3598
[2026-01-29T22:50:20.366Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T22:50:20.366Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:50:20.767Z] [BOT] ✅ Posted message: AI Data Specialist - Kansas - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-29T22:50:20.767Z] [BOT] ✅ Industry: AI Data Specialist - Kansas - US @ ORG_f3ae3598
💾 Added channel posting: AI Data Specialist - Kansas - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-29T22:50:20.767Z] [BOT] 💾 BEFORE MERGE: 161 jobs in memory (cached)
[2026-01-29T22:50:20.771Z] [BOT] ✅ Loaded V2 database: 160 jobs
[2026-01-29T22:50:20.771Z] [BOT] 💾 DISK STATE: 160 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=161
[2026-01-29T22:50:20.771Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:20.771Z] [BOT] 💾 AFTER MERGE: 161 jobs (merged disk + memory)
[2026-01-29T22:50:20.772Z] [BOT] ✅ No jobs to archive (all 161 jobs within 7-day window)
[2026-01-29T22:50:20.781Z] [BOT] 💾 Saved posted_jobs.json: 161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:22.283Z] [BOT] 📍 [ROUTING] "AI Data Specialist-Oklahoma - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T22:50:22.284Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:50:22.561Z] [BOT] ✅ Posted message: AI Data Specialist-Oklahoma - US @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist-Oklahoma - US @ ORG_f3ae3598
[2026-01-29T22:50:22.562Z] [BOT] 💾 Added channel posting: AI Data Specialist-Oklahoma - US @ ORG_f3ae3598 → category channel (1 total channels)
💾 BEFORE MERGE: 162 jobs in memory (cached)
[2026-01-29T22:50:22.565Z] [BOT] ✅ Loaded V2 database: 161 jobs
💾 DISK STATE: 161 jobs on disk
[2026-01-29T22:50:22.565Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=162
[2026-01-29T22:50:22.566Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:22.566Z] [BOT] 💾 AFTER MERGE: 162 jobs (merged disk + memory)
[2026-01-29T22:50:22.566Z] [BOT] ✅ No jobs to archive (all 162 jobs within 7-day window)
[2026-01-29T22:50:22.577Z] [BOT] 💾 Saved posted_jobs.json: 162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:24.079Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Louisana - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-29T22:50:24.079Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:50:24.315Z] [BOT] ✅ Posted message: AI Data Specialist - Louisana - US @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist - Louisana - US @ ORG_f3ae3598
[2026-01-29T22:50:24.315Z] [BOT] 💾 Added channel posting: AI Data Specialist - Louisana - US @ ORG_f3ae3598 → category channel (1 total channels)
💾 BEFORE MERGE: 163 jobs in memory (cached)
[2026-01-29T22:50:24.320Z] [BOT] ✅ Loaded V2 database: 162 jobs
💾 DISK STATE: 162 jobs on disk
[2026-01-29T22:50:24.321Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=163
[2026-01-29T22:50:24.321Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:24.321Z] [BOT] 💾 AFTER MERGE: 163 jobs (merged disk + memory)
[2026-01-29T22:50:24.321Z] [BOT] ✅ No jobs to archive (all 163 jobs within 7-day window)
[2026-01-29T22:50:24.335Z] [BOT] 💾 Saved posted_jobs.json: 163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:25.836Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Iowa - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T22:50:25.836Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:50:26.052Z] [BOT] ✅ Posted message: AI Data Specialist - Iowa - US @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist - Iowa - US @ ORG_f3ae3598
[2026-01-29T22:50:26.052Z] [BOT] 💾 Added channel posting: AI Data Specialist - Iowa - US @ ORG_f3ae3598 → category channel (1 total channels)
💾 BEFORE MERGE: 164 jobs in memory (cached)
[2026-01-29T22:50:26.057Z] [BOT] ✅ Loaded V2 database: 163 jobs
💾 DISK STATE: 163 jobs on disk
[2026-01-29T22:50:26.057Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=164
[2026-01-29T22:50:26.057Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 164 jobs (merged disk + memory)
[2026-01-29T22:50:26.057Z] [BOT] ✅ No jobs to archive (all 164 jobs within 7-day window)
[2026-01-29T22:50:26.069Z] [BOT] 💾 Saved posted_jobs.json: 164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:27.571Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_a2f917d4 Financial
   Category: AI (matched: "machine learning")
[2026-01-29T22:50:27.572Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T22:50:27.995Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_a2f917d4 Financial in #🤖・ai-jobs
[2026-01-29T22:50:27.995Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_a2f917d4 Financial
💾 Added channel posting: Associate Data Scientist @ ORG_a2f917d4 Financial → category channel (1 total channels)
[2026-01-29T22:50:27.995Z] [BOT] 💾 BEFORE MERGE: 165 jobs in memory (cached)
[2026-01-29T22:50:27.999Z] [BOT] ✅ Loaded V2 database: 164 jobs
[2026-01-29T22:50:27.999Z] [BOT] 💾 DISK STATE: 164 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=165
[2026-01-29T22:50:27.999Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:27.999Z] [BOT] 💾 AFTER MERGE: 165 jobs (merged disk + memory)
[2026-01-29T22:50:28.000Z] [BOT] ✅ No jobs to archive (all 165 jobs within 7-day window)
[2026-01-29T22:50:28.010Z] [BOT] 💾 Saved posted_jobs.json: 165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:29.512Z] [BOT] 📍 [ROUTING] "Head of International Marketing" @ anthropic
[2026-01-29T22:50:29.512Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T22:50:29.704Z] [BOT] ✅ Posted message: Head of International Marketing @ anthropic in #🤖・ai-jobs
[2026-01-29T22:50:29.704Z] [BOT] ✅ Industry: Head of International Marketing @ anthropic
💾 Added channel posting: Head of International Marketing @ anthropic → category channel (1 total channels)
[2026-01-29T22:50:29.704Z] [BOT] 💾 BEFORE MERGE: 166 jobs in memory (cached)
[2026-01-29T22:50:29.708Z] [BOT] ✅ Loaded V2 database: 165 jobs
[2026-01-29T22:50:29.708Z] [BOT] 💾 DISK STATE: 165 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=166
[2026-01-29T22:50:29.709Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:29.709Z] [BOT] 💾 AFTER MERGE: 166 jobs (merged disk + memory)
[2026-01-29T22:50:29.709Z] [BOT] ✅ No jobs to archive (all 166 jobs within 7-day window)
[2026-01-29T22:50:29.722Z] [BOT] 💾 Saved posted_jobs.json: 166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:34.224Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-29T22:50:34.225Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
[2026-01-29T22:50:34.225Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:50:34.627Z] [BOT] ✅ Posted message: Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-29T22:50:34.627Z] [BOT] ✅ Industry: Java Developer @ ORG_c910d474 Dynamics Information Technology
💾 Added channel posting: Java Developer @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-29T22:50:34.628Z] [BOT] 💾 BEFORE MERGE: 167 jobs in memory (cached)
[2026-01-29T22:50:34.631Z] [BOT] ✅ Loaded V2 database: 166 jobs
[2026-01-29T22:50:34.631Z] [BOT] 💾 DISK STATE: 166 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=167
[2026-01-29T22:50:34.632Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:34.632Z] [BOT] 💾 AFTER MERGE: 167 jobs (merged disk + memory)
[2026-01-29T22:50:34.632Z] [BOT] ✅ No jobs to archive (all 167 jobs within 7-day window)
[2026-01-29T22:50:34.642Z] [BOT] 💾 Saved posted_jobs.json: 167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:36.145Z] [BOT] 📍 [ROUTING] "Applications Analyst" @ ORG_18f28559 University Health
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:50:36.423Z] [BOT] ✅ Posted message: Applications Analyst @ ORG_18f28559 University Health in #💻・tech-jobs
  ✅ Industry: Applications Analyst @ ORG_18f28559 University Health
[2026-01-29T22:50:36.423Z] [BOT] 💾 Added channel posting: Applications Analyst @ ORG_18f28559 University Health → category channel (1 total channels)
💾 BEFORE MERGE: 168 jobs in memory (cached)
[2026-01-29T22:50:36.427Z] [BOT] ✅ Loaded V2 database: 167 jobs
[2026-01-29T22:50:36.427Z] [BOT] 💾 DISK STATE: 167 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=168
[2026-01-29T22:50:36.428Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:36.428Z] [BOT] 💾 AFTER MERGE: 168 jobs (merged disk + memory)
[2026-01-29T22:50:36.428Z] [BOT] ✅ No jobs to archive (all 168 jobs within 7-day window)
[2026-01-29T22:50:36.440Z] [BOT] 💾 Saved posted_jobs.json: 168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:37.942Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Temporary)" @ discord
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:50:38.160Z] [BOT] ✅ Posted message: Technical Sourcer (Temporary) @ discord in #💻・tech-jobs
  ✅ Industry: Technical Sourcer (Temporary) @ discord
[2026-01-29T22:50:38.160Z] [BOT] 💾 Added channel posting: Technical Sourcer (Temporary) @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 169 jobs in memory (cached)
[2026-01-29T22:50:38.165Z] [BOT] ✅ Loaded V2 database: 168 jobs
💾 DISK STATE: 168 jobs on disk
[2026-01-29T22:50:38.165Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=169
[2026-01-29T22:50:38.165Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 169 jobs (merged disk + memory)
[2026-01-29T22:50:38.166Z] [BOT] ✅ No jobs to archive (all 169 jobs within 7-day window)
[2026-01-29T22:50:38.177Z] [BOT] 💾 Saved posted_jobs.json: 169 active jobs
[2026-01-29T22:50:38.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:50:42.680Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T22:50:42.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eebc56d7..." not found, but found as SHA256 "ee95bf450c20defb"
[2026-01-29T22:50:42.681Z] [BOT] ⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_272a3558..." not found, but found as SHA256 "cfea32a8bc973bf8"
[2026-01-29T22:50:42.681Z] [BOT] ⏭️  Skipping duplicate: JID_42d53a0d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ce78f044..." not found, but found as SHA256 "cdfa9b3b2f553acd"
⏭️  Skipping duplicate: JID_2b956bc0 (posted within 7 days)
[2026-01-29T22:50:42.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e6c8e80a..." not found, but found as SHA256 "4b4b092918cb3c1f"
[2026-01-29T22:50:42.681Z] [BOT] ⏭️  Skipping duplicate: JID_ff2348f1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0ee4ed9a..." not found, but found as SHA256 "3a391b90681035d0"
⏭️  Skipping duplicate: JID_9a9f2c65 (posted within 7 days)
[2026-01-29T22:50:42.681Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5cbea66e..." not found, but found as SHA256 "0174c90e862dc7b5"
⏭️  Skipping duplicate: JID_2747daf7-scientist_r26_0282-1 (posted within 7 days)
[2026-01-29T22:50:42.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c3ec089463c8723f"
⏭️  Skipping duplicate: JID_fcfb2999 (posted within 7 days)
[2026-01-29T22:50:42.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "c9ad07195203630c"
[2026-01-29T22:50:42.682Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq213447-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dbd63bf6..." not found, but found as SHA256 "be3eafde94f9bba6"
[2026-01-29T22:50:42.682Z] [BOT] ⏭️  Skipping duplicate: JID_c3805187-external_careers-JID_1d9a067d-analyst_jr-80453 (posted within 7 days)
[2026-01-29T22:50:42.682Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "9aa96f297553d5b9"
[2026-01-29T22:50:42.682Z] [BOT] ⏭️  Skipping duplicate: JID_2700bf9a (posted within 7 days)
[2026-01-29T22:50:42.802Z] [BOT] ✅ Loaded pending queue: 2876 total (2702 pending, 44 enriched, 130 posted)
[2026-01-29T22:50:43.031Z] [BOT] ✅ Saved pending queue: 2876 total (2702 pending, 34 enriched, 140 posted)
[2026-01-29T22:50:43.031Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T22:50:43.113Z] [BOT] 📂 Loaded 10221 existing routing entries
[2026-01-29T22:50:43.222Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10231
   Timestamp: 2026-01-29T22:50:43.179Z
[2026-01-29T22:50:43.223Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T22:50:43.223Z] [BOT] Total attempts: 16
   Successful: 10
   Failed: 0
   Skipped: 6
[2026-01-29T22:50:43.223Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-29T22:50:43.223Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-29T22:50:43.223Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 169 jobs in memory (cached)
[2026-01-29T22:50:43.228Z] [BOT] ✅ Loaded V2 database: 169 jobs
💾 DISK STATE: 169 jobs on disk
[2026-01-29T22:50:43.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=169
[2026-01-29T22:50:43.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:50:43.229Z] [BOT] 💾 AFTER MERGE: 169 jobs (merged disk + memory)
[2026-01-29T22:50:43.229Z] [BOT] ✅ No jobs to archive (all 169 jobs within 7-day window)
[2026-01-29T22:50:43.239Z] [BOT] 💾 Saved posted_jobs.json: 169 active jobs
[2026-01-29T22:50:43.239Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T22:50:45.271Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2844) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*