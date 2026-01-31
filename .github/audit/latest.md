# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T11:44:59.798Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T11:44:29.684Z] ========================================
[2026-01-31T11:44:29.686Z] Discord Bot Execution Log
[2026-01-31T11:44:29.686Z] Environment: GitHub Actions
[2026-01-31T11:44:29.686Z] Node Version: v20.20.0
[2026-01-31T11:44:29.686Z] ========================================
[2026-01-31T11:44:29.686Z] Environment Variables Check:
[2026-01-31T11:44:29.686Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T11:44:29.686Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.686Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T11:44:29.686Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T11:44:29.687Z] 
Multi-Channel Configuration:
[2026-01-31T11:44:29.687Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T11:44:29.687Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T11:44:29.687Z] 
Data Files Check:
[2026-01-31T11:44:29.688Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T11:44:29.721Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6875603 bytes)
[2026-01-31T11:44:29.721Z] 
========================================
[2026-01-31T11:44:29.721Z] Starting Enhanced Discord Bot...
[2026-01-31T11:44:29.721Z] ========================================
[2026-01-31T11:44:30.295Z] [BOT] ✅ Loaded V2 database: 1096 jobs
[2026-01-31T11:44:30.713Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T11:44:30.714Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T11:44:30.714Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T11:44:30.827Z] [BOT] ✅ Loaded pending queue: 2953 total (1836 pending, 50 enriched, 1067 posted)
[2026-01-31T11:44:30.828Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T11:44:30.828Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:44:30.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T11:44:30.829Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:44:30.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T11:44:30.830Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T11:44:30.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T11:44:30.830Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T11:44:30.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-31T11:44:30.830Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T11:44:30.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T11:44:30.831Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T11:44:30.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T11:44:30.831Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T11:44:30.832Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T11:44:30.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T11:44:30.832Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T11:44:30.832Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T11:44:30.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T11:44:30.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T11:44:30.833Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T11:44:30.833Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T11:44:30.833Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T11:44:30.840Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T11:44:30.840Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T11:44:30.840Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T11:44:30.841Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-31T11:44:30.841Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T11:44:30.843Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T11:44:30.845Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Japanese Speaking" @ figma
[2026-01-31T11:44:30.845Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:44:30.862Z] [BOT ERROR] (node:3533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T11:44:31.139Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Japanese Speaking @ figma in #🤖・ai-jobs
[2026-01-31T11:44:31.139Z] [BOT] ✅ Industry: Enterprise Support Specialist, Japanese Speaking @ figma
[2026-01-31T11:44:31.140Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Japanese Speaking @ figma → category channel (1 total channels)
[2026-01-31T11:44:31.140Z] [BOT] 💾 BEFORE MERGE: 1097 jobs in memory (cached)
[2026-01-31T11:44:31.163Z] [BOT] ✅ Loaded V2 database: 1096 jobs
💾 DISK STATE: 1096 jobs on disk
[2026-01-31T11:44:31.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1097
[2026-01-31T11:44:31.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:31.171Z] [BOT] 💾 AFTER MERGE: 1097 jobs (merged disk + memory)
[2026-01-31T11:44:31.172Z] [BOT] ✅ No jobs to archive (all 1097 jobs within 7-day window)
[2026-01-31T11:44:31.238Z] [BOT] 💾 Saved posted_jobs.json: 1097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:32.741Z] [BOT] 📍 [ROUTING] "Associate Nuclear Consultant/Engineer" @ ORG_f273c1b5 Hughes
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:44:32.741Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:44:32.926Z] [BOT] ✅ Posted message: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes in #🤖・ai-jobs
[2026-01-31T11:44:32.926Z] [BOT] ✅ Industry: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes
[2026-01-31T11:44:32.926Z] [BOT] 💾 Added channel posting: Associate Nuclear Consultant/Engineer @ ORG_f273c1b5 Hughes → category channel (1 total channels)
[2026-01-31T11:44:32.927Z] [BOT] 💾 BEFORE MERGE: 1098 jobs in memory (cached)
[2026-01-31T11:44:32.948Z] [BOT] ✅ Loaded V2 database: 1097 jobs
💾 DISK STATE: 1097 jobs on disk
[2026-01-31T11:44:32.948Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1098
[2026-01-31T11:44:32.951Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:32.951Z] [BOT] 💾 AFTER MERGE: 1098 jobs (merged disk + memory)
[2026-01-31T11:44:32.952Z] [BOT] ✅ No jobs to archive (all 1098 jobs within 7-day window)
[2026-01-31T11:44:33.017Z] [BOT] 💾 Saved posted_jobs.json: 1098 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:34.518Z] [BOT] 📍 [ROUTING] "Research Scientist, Embodied and Agentic AI" @ ORG_0890f456
[2026-01-31T11:44:34.518Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:44:34.667Z] [BOT] ✅ Posted message: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-31T11:44:34.667Z] [BOT] ✅ Industry: Research Scientist, Embodied and Agentic AI @ ORG_0890f456
[2026-01-31T11:44:34.668Z] [BOT] 💾 Added channel posting: Research Scientist, Embodied and Agentic AI @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T11:44:34.668Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory (cached)
[2026-01-31T11:44:34.688Z] [BOT] ✅ Loaded V2 database: 1098 jobs
💾 DISK STATE: 1098 jobs on disk
[2026-01-31T11:44:34.689Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1099
[2026-01-31T11:44:34.691Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-31T11:44:34.692Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-31T11:44:34.756Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:36.258Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_8b09cf05
[2026-01-31T11:44:36.258Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:44:36.372Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_8b09cf05 in #🤖・ai-jobs
[2026-01-31T11:44:36.372Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_8b09cf05
[2026-01-31T11:44:36.373Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-01-31T11:44:36.373Z] [BOT] 💾 BEFORE MERGE: 1100 jobs in memory (cached)
[2026-01-31T11:44:36.393Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-31T11:44:36.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1100
[2026-01-31T11:44:36.396Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:36.396Z] [BOT] 💾 AFTER MERGE: 1100 jobs (merged disk + memory)
[2026-01-31T11:44:36.397Z] [BOT] ✅ No jobs to archive (all 1100 jobs within 7-day window)
[2026-01-31T11:44:36.462Z] [BOT] 💾 Saved posted_jobs.json: 1100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:37.964Z] [BOT] 📍 [ROUTING] "Associate Data Science" @ ORG_ae835968 media
[2026-01-31T11:44:37.964Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T11:44:38.234Z] [BOT] ✅ Posted message: Associate Data Science @ ORG_ae835968 media in #🤖・ai-jobs
[2026-01-31T11:44:38.234Z] [BOT] ✅ Industry: Associate Data Science @ ORG_ae835968 media
[2026-01-31T11:44:38.234Z] [BOT] 💾 Added channel posting: Associate Data Science @ ORG_ae835968 media → category channel (1 total channels)
[2026-01-31T11:44:38.235Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory (cached)
[2026-01-31T11:44:38.263Z] [BOT] ✅ Loaded V2 database: 1100 jobs
💾 DISK STATE: 1100 jobs on disk
[2026-01-31T11:44:38.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1101
[2026-01-31T11:44:38.265Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-31T11:44:38.266Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-31T11:44:38.330Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:40.019Z] [BOT] ✅ Posted message: Associate Data Science @ ORG_ae835968 media in #🗽・JID_98d4f0de
[2026-01-31T11:44:40.019Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:44:40.019Z] [BOT] 💾 Added channel posting: Associate Data Science @ ORG_ae835968 media → location channel (2 total channels)
[2026-01-31T11:44:40.019Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory (cached)
[2026-01-31T11:44:40.040Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-31T11:44:40.040Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1101
[2026-01-31T11:44:40.043Z] [BOT] 🔀 Deep merged: Associate Data Science @ ORG_ae835968 media (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:44:40.043Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-31T11:44:40.043Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-31T11:44:40.124Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
[2026-01-31T11:44:40.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:44.627Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T11:44:44.627Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_64fb62c2
[2026-01-31T11:44:44.628Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:44:44.880Z] [BOT] ✅ Posted message: Quantum Software Engineer @ ORG_64fb62c2 in #💻・tech-jobs
[2026-01-31T11:44:44.880Z] [BOT] ✅ Industry: Quantum Software Engineer @ ORG_64fb62c2
[2026-01-31T11:44:44.881Z] [BOT] 💾 Added channel posting: Quantum Software Engineer @ ORG_64fb62c2 → category channel (1 total channels)
[2026-01-31T11:44:44.881Z] [BOT] 💾 BEFORE MERGE: 1102 jobs in memory (cached)
[2026-01-31T11:44:44.902Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-31T11:44:44.902Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1102
[2026-01-31T11:44:44.904Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1102 jobs (merged disk + memory)
[2026-01-31T11:44:44.905Z] [BOT] ✅ No jobs to archive (all 1102 jobs within 7-day window)
[2026-01-31T11:44:44.967Z] [BOT] 💾 Saved posted_jobs.json: 1102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:46.469Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Associate" @ ORG_285075a0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:44:46.615Z] [BOT] ✅ Posted message: Software Quality Assurance Associate @ ORG_285075a0 in #💻・tech-jobs
  ✅ Industry: Software Quality Assurance Associate @ ORG_285075a0
[2026-01-31T11:44:46.616Z] [BOT] 💾 Added channel posting: Software Quality Assurance Associate @ ORG_285075a0 → category channel (1 total channels)
[2026-01-31T11:44:46.616Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory (cached)
[2026-01-31T11:44:46.637Z] [BOT] ✅ Loaded V2 database: 1102 jobs
💾 DISK STATE: 1102 jobs on disk
[2026-01-31T11:44:46.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1103
[2026-01-31T11:44:46.640Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:46.640Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-31T11:44:46.641Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-31T11:44:46.705Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:48.207Z] [BOT] 📍 [ROUTING] "Software Developer I" @ ORG_df6ef51e
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:44:48.365Z] [BOT] ✅ Posted message: Software Developer I @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Software Developer I @ ORG_df6ef51e
[2026-01-31T11:44:48.365Z] [BOT] 💾 Added channel posting: Software Developer I @ ORG_df6ef51e → category channel (1 total channels)
[2026-01-31T11:44:48.365Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory (cached)
[2026-01-31T11:44:48.387Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-31T11:44:48.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1104
[2026-01-31T11:44:48.389Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-31T11:44:48.390Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-31T11:44:48.467Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-31T11:44:48.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:49.970Z] [BOT] 📍 [ROUTING] "Junior Software Engineer, AI" @ ORG_307b6d84
   Category: TECH (matched: "software")
[2026-01-31T11:44:49.970Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:44:50.123Z] [BOT] ✅ Posted message: Junior Software Engineer, AI @ ORG_307b6d84 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer, AI @ ORG_307b6d84
[2026-01-31T11:44:50.124Z] [BOT] 💾 Added channel posting: Junior Software Engineer, AI @ ORG_307b6d84 → category channel (1 total channels)
[2026-01-31T11:44:50.124Z] [BOT] 💾 BEFORE MERGE: 1105 jobs in memory (cached)
[2026-01-31T11:44:50.145Z] [BOT] ✅ Loaded V2 database: 1104 jobs
💾 DISK STATE: 1104 jobs on disk
[2026-01-31T11:44:50.145Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1105
[2026-01-31T11:44:50.147Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:50.148Z] [BOT] 💾 AFTER MERGE: 1105 jobs (merged disk + memory)
[2026-01-31T11:44:50.148Z] [BOT] ✅ No jobs to archive (all 1105 jobs within 7-day window)
[2026-01-31T11:44:50.209Z] [BOT] 💾 Saved posted_jobs.json: 1105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:51.711Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I - Onsite/CO" @ ORG_75f04b84
   Category: TECH (matched: "software")
[2026-01-31T11:44:51.711Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:44:51.851Z] [BOT] ✅ Posted message: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84
[2026-01-31T11:44:51.851Z] [BOT] 💾 Added channel posting: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 → category channel (1 total channels)
[2026-01-31T11:44:51.851Z] [BOT] 💾 BEFORE MERGE: 1106 jobs in memory (cached)
[2026-01-31T11:44:51.879Z] [BOT] ✅ Loaded V2 database: 1105 jobs
💾 DISK STATE: 1105 jobs on disk
[2026-01-31T11:44:51.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1106
[2026-01-31T11:44:51.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1106 jobs (merged disk + memory)
[2026-01-31T11:44:51.882Z] [BOT] ✅ No jobs to archive (all 1106 jobs within 7-day window)
[2026-01-31T11:44:51.946Z] [BOT] 💾 Saved posted_jobs.json: 1106 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:44:56.448Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T11:44:56.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdbef2f4..." not found, but found as SHA256 "5e377243a05e41d3"
[2026-01-31T11:44:56.450Z] [BOT] ⏭️  Skipping duplicate: JID_a0ec39cd (posted within 7 days)
[2026-01-31T11:44:56.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0374b769..." not found, but found as SHA256 "07da403f4e5c38c3"
⏭️  Skipping duplicate: JID_4fd8b629 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_762447c6..." not found, but found as SHA256 "842819484ad8c919"
⏭️  Skipping duplicate: JID_e810b5f0 (posted within 7 days)
[2026-01-31T11:44:56.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "347c6ba42437bcad"
[2026-01-31T11:44:56.451Z] [BOT] ⏭️  Skipping duplicate: JID_d065bb6e-2026_jr2009464 (posted within 7 days)
[2026-01-31T11:44:56.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_03476317..." not found, but found as SHA256 "0b4609a3472ba855"
⏭️  Skipping duplicate: JID_6929dcbd (posted within 7 days)
[2026-01-31T11:44:56.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10906cde-samsung_..." not found, but found as SHA256 "fa62b7018ca8a8b0"
⏭️  Skipping duplicate: JID_10906cde-samsung_careers-JID_0c584a3e-associate_r111947 (posted within 7 days)
[2026-01-31T11:44:56.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7735318a..." not found, but found as SHA256 "426491ee8c410945"
⏭️  Skipping duplicate: JID_79c9e5ff-i_r8120 (posted within 7 days)
[2026-01-31T11:44:56.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f89bc117..." not found, but found as SHA256 "cc08da096d4979d0"
⏭️  Skipping duplicate: JID_3dd93fa8 (posted within 7 days)
[2026-01-31T11:44:56.452Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "4f945f3285008e14"
[2026-01-31T11:44:56.452Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_f5e19171-_01810840 (posted within 7 days)
[2026-01-31T11:44:56.452Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bca2a390..." not found, but found as SHA256 "dcf4866464061748"
[2026-01-31T11:44:56.452Z] [BOT] ⏭️  Skipping duplicate: JID_aa958bc9-science_r0016354 (posted within 7 days)
[2026-01-31T11:44:56.549Z] [BOT] ✅ Loaded pending queue: 2953 total (1836 pending, 50 enriched, 1067 posted)
[2026-01-31T11:44:56.730Z] [BOT] ✅ Saved pending queue: 2953 total (1836 pending, 40 enriched, 1077 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T11:44:56.730Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T11:44:56.816Z] [BOT] 📂 Loaded 11158 existing routing entries
[2026-01-31T11:44:56.938Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11168
[2026-01-31T11:44:56.938Z] [BOT] Timestamp: 2026-01-31T11:44:56.894Z
[2026-01-31T11:44:56.939Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T11:44:56.939Z] [BOT] Total attempts: 25
   Successful: 11
   Failed: 0
   Skipped: 14
[2026-01-31T11:44:56.939Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T11:44:56.939Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-31T11:44:56.939Z] [BOT] 2. #💻・tech-jobs: 5 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T11:44:56.940Z] [BOT] [STATS] Channel stats saved
[2026-01-31T11:44:56.940Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1106 jobs in memory (cached)
[2026-01-31T11:44:56.962Z] [BOT] ✅ Loaded V2 database: 1106 jobs
💾 DISK STATE: 1106 jobs on disk
[2026-01-31T11:44:56.962Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1106
[2026-01-31T11:44:56.964Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:44:56.964Z] [BOT] 💾 AFTER MERGE: 1106 jobs (merged disk + memory)
[2026-01-31T11:44:56.964Z] [BOT] ✅ No jobs to archive (all 1106 jobs within 7-day window)
[2026-01-31T11:44:57.045Z] [BOT] 💾 Saved posted_jobs.json: 1106 active jobs
[2026-01-31T11:44:57.045Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T11:44:59.077Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*