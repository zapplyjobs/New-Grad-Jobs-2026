# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T20:16:52.298Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T20:16:21.037Z] ========================================
[2026-01-29T20:16:21.039Z] Discord Bot Execution Log
[2026-01-29T20:16:21.039Z] Environment: GitHub Actions
[2026-01-29T20:16:21.039Z] Node Version: v20.20.0
[2026-01-29T20:16:21.039Z] ========================================
[2026-01-29T20:16:21.039Z] Environment Variables Check:
[2026-01-29T20:16:21.039Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T20:16:21.040Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T20:16:21.040Z] 
Multi-Channel Configuration:
[2026-01-29T20:16:21.040Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.040Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.041Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.041Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.041Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.041Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T20:16:21.041Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T20:16:21.041Z] 
Data Files Check:
[2026-01-29T20:16:21.042Z] .github/data/new_jobs.json: ✅ Exists (10 items, 122299 bytes)
[2026-01-29T20:16:21.046Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 515667 bytes)
[2026-01-29T20:16:21.046Z] 
========================================
[2026-01-29T20:16:21.046Z] Starting Enhanced Discord Bot...
[2026-01-29T20:16:21.046Z] ========================================
[2026-01-29T20:16:21.588Z] [BOT] ✅ Loaded V2 database: 99 jobs
[2026-01-29T20:16:22.199Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T20:16:22.200Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T20:16:22.200Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T20:16:22.331Z] [BOT] ✅ Loaded pending queue: 2880 total (2760 pending, 50 enriched, 70 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Trust & Safety at vercel
[2026-01-29T20:16:22.335Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T20:16:22.335Z] [BOT] 🚫 Skipping blacklisted job: Senior Brand Designer at brex
[2026-01-29T20:16:22.335Z] [BOT] 🚫 Skipping blacklisted job: Director, Technical Accounting & Financial Reporting at vercel
[2026-01-29T20:16:22.336Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer, Magic at brex
[2026-01-29T20:16:22.336Z] [BOT] 🚫 Skipping blacklisted job: Regional State and Local Affairs Lead, Midwestern States at anthropic
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-01-29T20:16:22.440Z] [BOT] ✅ Loaded pending queue: 2880 total (2760 pending, 50 enriched, 70 posted)
[2026-01-29T20:16:22.635Z] [BOT] ✅ Saved pending queue: 2875 total (2760 pending, 45 enriched, 70 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-01-29T20:16:22.636Z] [BOT] 📋 After blacklist filter: 45 jobs (5 blacklisted)
📋 After data quality filter: 45 jobs (0 invalid)
[2026-01-29T20:16:22.637Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-29T20:16:22.637Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - 2026 Full-time - Software Engineer I @ RTX: mckinney, marlborough
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T20:16:22.641Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T20:16:22.641Z] [BOT] 📍 [ROUTING] "Software Engineer - Trust & Safety" @ vercel
[2026-01-29T20:16:22.641Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:22.660Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T20:16:22.831Z] [BOT] ✅ Posted message: Software Engineer - Trust & Safety @ vercel in #💻・tech-jobs
[2026-01-29T20:16:22.831Z] [BOT] ✅ Industry: Software Engineer - Trust & Safety @ vercel
[2026-01-29T20:16:22.831Z] [BOT] 💾 Added channel posting: Software Engineer - Trust & Safety @ vercel → category channel (1 total channels)
[2026-01-29T20:16:22.832Z] [BOT] 💾 BEFORE MERGE: 100 jobs in memory (cached)
[2026-01-29T20:16:22.834Z] [BOT] ✅ Loaded V2 database: 99 jobs
[2026-01-29T20:16:22.834Z] [BOT] 💾 DISK STATE: 99 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=100
[2026-01-29T20:16:22.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:22.835Z] [BOT] 💾 AFTER MERGE: 100 jobs (merged disk + memory)
[2026-01-29T20:16:22.835Z] [BOT] ✅ No jobs to archive (all 100 jobs within 7-day window)
[2026-01-29T20:16:22.846Z] [BOT] 💾 Saved posted_jobs.json: 100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:24.347Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I" @ ORG_75f04b84
   Category: TECH (matched: "software")
[2026-01-29T20:16:24.347Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:24.516Z] [BOT] ✅ Posted message: 2026 Full-time - Software Engineer I @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-time - Software Engineer I @ ORG_75f04b84
[2026-01-29T20:16:24.517Z] [BOT] 💾 Added channel posting: 2026 Full-time - Software Engineer I @ ORG_75f04b84 → category channel (1 total channels)
💾 BEFORE MERGE: 101 jobs in memory (cached)
[2026-01-29T20:16:24.519Z] [BOT] ✅ Loaded V2 database: 100 jobs
[2026-01-29T20:16:24.519Z] [BOT] 💾 DISK STATE: 100 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=101
[2026-01-29T20:16:24.519Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 101 jobs (merged disk + memory)
[2026-01-29T20:16:24.520Z] [BOT] ✅ No jobs to archive (all 101 jobs within 7-day window)
[2026-01-29T20:16:24.526Z] [BOT] 💾 Saved posted_jobs.json: 101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:26.028Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Security Workforce" @ anthropic
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:26.233Z] [BOT] ✅ Posted message: Business Systems Analyst - Security Workforce @ anthropic in #💻・tech-jobs
[2026-01-29T20:16:26.233Z] [BOT] ✅ Industry: Business Systems Analyst - Security Workforce @ anthropic
💾 Added channel posting: Business Systems Analyst - Security Workforce @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 102 jobs in memory (cached)
[2026-01-29T20:16:26.235Z] [BOT] ✅ Loaded V2 database: 101 jobs
💾 DISK STATE: 101 jobs on disk
[2026-01-29T20:16:26.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=102
[2026-01-29T20:16:26.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 102 jobs (merged disk + memory)
[2026-01-29T20:16:26.236Z] [BOT] ✅ No jobs to archive (all 102 jobs within 7-day window)
[2026-01-29T20:16:26.242Z] [BOT] 💾 Saved posted_jobs.json: 102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:27.743Z] [BOT] 📍 [ROUTING] "Security Software Engineer, D&R Platform" @ anthropic
   Category: TECH (matched: "software")
[2026-01-29T20:16:27.743Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:27.910Z] [BOT] ✅ Posted message: Security Software Engineer, D&R Platform @ anthropic in #💻・tech-jobs
  ✅ Industry: Security Software Engineer, D&R Platform @ anthropic
[2026-01-29T20:16:27.910Z] [BOT] 💾 Added channel posting: Security Software Engineer, D&R Platform @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 103 jobs in memory (cached)
[2026-01-29T20:16:27.913Z] [BOT] ✅ Loaded V2 database: 102 jobs
💾 DISK STATE: 102 jobs on disk
[2026-01-29T20:16:27.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=103
[2026-01-29T20:16:27.913Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 103 jobs (merged disk + memory)
[2026-01-29T20:16:27.913Z] [BOT] ✅ No jobs to archive (all 103 jobs within 7-day window)
[2026-01-29T20:16:27.920Z] [BOT] 💾 Saved posted_jobs.json: 103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:29.421Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
   Category: TECH (matched: "program manager")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:29.598Z] [BOT] ✅ Posted message: Executive Assistant, Product Support  @ figma in #💻・tech-jobs
  ✅ Industry: Executive Assistant, Product Support  @ figma
[2026-01-29T20:16:29.599Z] [BOT] 💾 Added channel posting: Executive Assistant, Product Support  @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 104 jobs in memory (cached)
[2026-01-29T20:16:29.601Z] [BOT] ✅ Loaded V2 database: 103 jobs
💾 DISK STATE: 103 jobs on disk
[2026-01-29T20:16:29.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=104
[2026-01-29T20:16:29.602Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:29.602Z] [BOT] 💾 AFTER MERGE: 104 jobs (merged disk + memory)
[2026-01-29T20:16:29.602Z] [BOT] ✅ No jobs to archive (all 104 jobs within 7-day window)
[2026-01-29T20:16:29.611Z] [BOT] 💾 Saved posted_jobs.json: 104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:31.112Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Pipeline" @ ORG_af20d304
[2026-01-29T20:16:31.112Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:16:31.315Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Pipeline @ ORG_af20d304 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Pipeline @ ORG_af20d304
[2026-01-29T20:16:31.315Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Pipeline @ ORG_af20d304 → category channel (1 total channels)
💾 BEFORE MERGE: 105 jobs in memory (cached)
[2026-01-29T20:16:31.319Z] [BOT] ✅ Loaded V2 database: 104 jobs
💾 DISK STATE: 104 jobs on disk
[2026-01-29T20:16:31.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=105
[2026-01-29T20:16:31.320Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:31.320Z] [BOT] 💾 AFTER MERGE: 105 jobs (merged disk + memory)
[2026-01-29T20:16:31.320Z] [BOT] ✅ No jobs to archive (all 105 jobs within 7-day window)
[2026-01-29T20:16:31.328Z] [BOT] 💾 Saved posted_jobs.json: 105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:35.830Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T20:16:35.830Z] [BOT] 📍 [ROUTING] "Research Associate" @ ORG_438a7d59 State University
[2026-01-29T20:16:35.830Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T20:16:36.050Z] [BOT] ✅ Posted message: Research Associate @ ORG_438a7d59 State University in #🤖・ai-jobs
[2026-01-29T20:16:36.050Z] [BOT] ✅ Industry: Research Associate @ ORG_438a7d59 State University
💾 Added channel posting: Research Associate @ ORG_438a7d59 State University → category channel (1 total channels)
[2026-01-29T20:16:36.050Z] [BOT] 💾 BEFORE MERGE: 106 jobs in memory (cached)
[2026-01-29T20:16:36.052Z] [BOT] ✅ Loaded V2 database: 105 jobs
💾 DISK STATE: 105 jobs on disk
[2026-01-29T20:16:36.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=106
[2026-01-29T20:16:36.053Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 106 jobs (merged disk + memory)
[2026-01-29T20:16:36.053Z] [BOT] ✅ No jobs to archive (all 106 jobs within 7-day window)
[2026-01-29T20:16:36.061Z] [BOT] 💾 Saved posted_jobs.json: 106 active jobs
[2026-01-29T20:16:36.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:37.563Z] [BOT] 📍 [ROUTING] "Tenure-Track Faculty Position with a focus on Aviation Operations and Machine Learning/AI in the. - Daytona Beach Campus" @ Embry-Riddle Aeronautical University
[2026-01-29T20:16:37.563Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T20:16:37.834Z] [BOT] ✅ Posted message: Tenure-Track Faculty Position with a focus on Aviation Operations and Machine Learning/AI in the. - Daytona Beach Campus @ Embry-Riddle Aeronautical University in #🤖・ai-jobs
[2026-01-29T20:16:37.834Z] [BOT] ✅ Industry: Tenure-Track Faculty Position with a focus on Aviation Operations and Machine Learning/AI in the. - Daytona Beach Campus @ Embry-Riddle Aeronautical University
💾 Added channel posting: Tenure-Track Faculty Position with a focus on Aviation Operations and Machine Learning/AI in the. - Daytona Beach Campus @ Embry-Riddle Aeronautical University → category channel (1 total channels)
[2026-01-29T20:16:37.834Z] [BOT] 💾 BEFORE MERGE: 107 jobs in memory (cached)
[2026-01-29T20:16:37.837Z] [BOT] ✅ Loaded V2 database: 106 jobs
[2026-01-29T20:16:37.837Z] [BOT] 💾 DISK STATE: 106 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=107
[2026-01-29T20:16:37.837Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:37.838Z] [BOT] 💾 AFTER MERGE: 107 jobs (merged disk + memory)
[2026-01-29T20:16:37.838Z] [BOT] ✅ No jobs to archive (all 107 jobs within 7-day window)
[2026-01-29T20:16:37.846Z] [BOT] 💾 Saved posted_jobs.json: 107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:39.347Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ Embry-Riddle Aeronautical University
   Category: AI (matched: "machine learning")
[2026-01-29T20:16:39.347Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T20:16:39.598Z] [BOT] ✅ Posted message: Assistant Professor @ Embry-Riddle Aeronautical University in #🤖・ai-jobs
  ✅ Industry: Assistant Professor @ Embry-Riddle Aeronautical University
[2026-01-29T20:16:39.598Z] [BOT] 💾 Added channel posting: Assistant Professor @ Embry-Riddle Aeronautical University → category channel (1 total channels)
[2026-01-29T20:16:39.598Z] [BOT] 💾 BEFORE MERGE: 108 jobs in memory (cached)
[2026-01-29T20:16:39.601Z] [BOT] ✅ Loaded V2 database: 107 jobs
💾 DISK STATE: 107 jobs on disk
[2026-01-29T20:16:39.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=108
[2026-01-29T20:16:39.601Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 108 jobs (merged disk + memory)
[2026-01-29T20:16:39.602Z] [BOT] ✅ No jobs to archive (all 108 jobs within 7-day window)
[2026-01-29T20:16:39.608Z] [BOT] 💾 Saved posted_jobs.json: 108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:44.110Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T20:16:44.110Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (NOVA - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-29T20:16:44.111Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T20:16:44.333Z] [BOT] ✅ Posted message: Enterprise Account Executive (NOVA - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (NOVA - SLED) @ verkada
[2026-01-29T20:16:44.333Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (NOVA - SLED) @ verkada → category channel (1 total channels)
[2026-01-29T20:16:44.333Z] [BOT] 💾 BEFORE MERGE: 109 jobs in memory (cached)
[2026-01-29T20:16:44.337Z] [BOT] ✅ Loaded V2 database: 108 jobs
💾 DISK STATE: 108 jobs on disk
[2026-01-29T20:16:44.337Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=109
[2026-01-29T20:16:44.337Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:44.337Z] [BOT] 💾 AFTER MERGE: 109 jobs (merged disk + memory)
[2026-01-29T20:16:44.337Z] [BOT] ✅ No jobs to archive (all 109 jobs within 7-day window)
[2026-01-29T20:16:44.345Z] [BOT] 💾 Saved posted_jobs.json: 109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:16:48.847Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T20:16:48.848Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0eb7081b..." not found, but found as SHA256 "83e0b58cd054b82c"
[2026-01-29T20:16:48.848Z] [BOT] ⏭️  Skipping duplicate: JID_50e3b0eb (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ca74aa64..." not found, but found as SHA256 "87bc798aad11d15d"
⏭️  Skipping duplicate: JID_60266039-associate_r144192-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "b20681ff4769f025"
[2026-01-29T20:16:48.848Z] [BOT] ⏭️  Skipping duplicate: JID_d3650349 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "68ab27af8598e0e9"
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_ca35f314-_01819777 (posted within 7 days)
[2026-01-29T20:16:48.848Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "41cf3286e58c0348"
⏭️  Skipping duplicate: JID_0fed033c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "75a3848db8e287cb"
[2026-01-29T20:16:48.848Z] [BOT] ⏭️  Skipping duplicate: JID_d535d200 (posted within 7 days)
[2026-01-29T20:16:48.848Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37f1ccca..." not found, but found as SHA256 "db5f9e7af5347681"
⏭️  Skipping duplicate: JID_c2f82cb4-campus_r309969 (posted within 7 days)
[2026-01-29T20:16:48.848Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37f1ccca..." not found, but found as SHA256 "87469c2b302ddb6a"
⏭️  Skipping duplicate: JID_929f12cd-studies_r309967 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_92c22c7d..." not found, but found as SHA256 "4b0d9d7185ab4ab0"
[2026-01-29T20:16:48.848Z] [BOT] ⏭️  Skipping duplicate: JID_8ae602e1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8d647d9c-..." not found, but found as SHA256 "9bd5fb87db73fd9b"
[2026-01-29T20:16:48.848Z] [BOT] ⏭️  Skipping duplicate: JID_c13f6c6f (posted within 7 days)
[2026-01-29T20:16:48.964Z] [BOT] ✅ Loaded pending queue: 2875 total (2760 pending, 45 enriched, 70 posted)
[2026-01-29T20:16:49.153Z] [BOT] ✅ Saved pending queue: 2875 total (2760 pending, 35 enriched, 80 posted)
[2026-01-29T20:16:49.153Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T20:16:49.237Z] [BOT] 📂 Loaded 10161 existing routing entries
[2026-01-29T20:16:49.350Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10171
[2026-01-29T20:16:49.350Z] [BOT] Timestamp: 2026-01-29T20:16:49.305Z
[2026-01-29T20:16:49.351Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T20:16:49.351Z] [BOT] Total attempts: 15
   Successful: 10
   Failed: 0
   Skipped: 5
[2026-01-29T20:16:49.351Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-29T20:16:49.351Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T20:16:49.351Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-29T20:16:49.351Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 109 jobs in memory (cached)
[2026-01-29T20:16:49.355Z] [BOT] ✅ Loaded V2 database: 109 jobs
[2026-01-29T20:16:49.355Z] [BOT] 💾 DISK STATE: 109 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=109
[2026-01-29T20:16:49.356Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:16:49.356Z] [BOT] 💾 AFTER MERGE: 109 jobs (merged disk + memory)
[2026-01-29T20:16:49.356Z] [BOT] ✅ No jobs to archive (all 109 jobs within 7-day window)
[2026-01-29T20:16:49.363Z] [BOT] 💾 Saved posted_jobs.json: 109 active jobs
[2026-01-29T20:16:49.363Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T20:16:51.395Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*