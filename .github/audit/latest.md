# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T15:58:27.198Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T15:57:54.882Z] ========================================
[2026-01-31T15:57:54.884Z] Discord Bot Execution Log
[2026-01-31T15:57:54.884Z] Environment: GitHub Actions
[2026-01-31T15:57:54.884Z] Node Version: v20.20.0
[2026-01-31T15:57:54.884Z] ========================================
[2026-01-31T15:57:54.884Z] Environment Variables Check:
[2026-01-31T15:57:54.884Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T15:57:54.884Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.884Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T15:57:54.884Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T15:57:54.884Z] 
Multi-Channel Configuration:
[2026-01-31T15:57:54.885Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T15:57:54.885Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T15:57:54.885Z] 
Data Files Check:
[2026-01-31T15:57:54.886Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T15:57:54.922Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7612229 bytes)
[2026-01-31T15:57:54.922Z] 
========================================
[2026-01-31T15:57:54.922Z] Starting Enhanced Discord Bot...
[2026-01-31T15:57:54.922Z] ========================================
[2026-01-31T15:57:55.504Z] [BOT] ✅ Loaded V2 database: 1236 jobs
[2026-01-31T15:57:55.903Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T15:57:55.903Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T15:57:55.904Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T15:57:56.022Z] [BOT] ✅ Loaded pending queue: 2947 total (1690 pending, 50 enriched, 1207 posted)
[2026-01-31T15:57:56.022Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T15:57:56.022Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:57:56.023Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T15:57:56.023Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:57:56.024Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T15:57:56.024Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T15:57:56.024Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T15:57:56.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T15:57:56.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T15:57:56.025Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T15:57:56.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T15:57:56.026Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T15:57:56.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T15:57:56.026Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T15:57:56.026Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T15:57:56.026Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T15:57:56.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T15:57:56.027Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T15:57:56.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T15:57:56.027Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T15:57:56.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T15:57:56.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T15:57:56.028Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T15:57:56.028Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T15:57:56.028Z] [BOT] ⏭️  Skipping stale data: JID_233080b1 (source date 61 days old)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T15:57:56.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping stale data: JID_eba80728-2026_25920581 (source date 61 days old)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T15:57:56.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T15:57:56.029Z] [BOT] ⏭️  Skipping stale data: JID_f6d7bbee-2026_jr2008990 (source date 61 days old)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T15:57:56.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
⏭️  Skipping stale data: JID_efd24cdc-2026_25920348 (source date 61 days old)
[2026-01-31T15:57:56.029Z] [BOT] ⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T15:57:56.029Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
⏭️  Skipping stale data: JID_c113399f-cameras_r00193769 (source date 61 days old)
[2026-01-31T15:57:56.030Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T15:57:56.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
[2026-01-31T15:57:56.030Z] [BOT] ⏭️  Skipping stale data: JID_c934712a (source date 61 days old)
⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T15:57:56.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
⏭️  Skipping stale data: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (source date 61 days old)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T15:57:56.036Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T15:57:56.037Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Creation Engine at figma
[2026-01-31T15:57:56.037Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Scale at figma
🚫 Skipping blacklisted job: Director, Software Engineering - Growth at figma
[2026-01-31T15:57:56.037Z] [BOT] 🚫 Skipping blacklisted job: Director, Software Engineering - Product Platform at figma
🚫 Skipping blacklisted job: Product Manager, AI at figma
🚫 Skipping blacklisted job: Manager, Mid-Market Sales  at figma
[2026-01-31T15:57:56.037Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive, SMB at figma
🚫 Skipping blacklisted job: Product Manager, Design Tools at figma
[2026-01-31T15:57:56.144Z] [BOT] ✅ Loaded pending queue: 2947 total (1690 pending, 50 enriched, 1207 posted)
[2026-01-31T15:57:56.329Z] [BOT] ✅ Saved pending queue: 2939 total (1690 pending, 42 enriched, 1207 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-31T15:57:56.330Z] [BOT] 📋 After blacklist filter: 21 jobs (8 blacklisted)
📋 After data quality filter: 21 jobs (0 invalid)
[2026-01-31T15:57:56.330Z] [BOT] 📋 After multi-location grouping: 21 unique jobs to post
[2026-01-31T15:57:56.330Z] [BOT] ⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T15:57:56.335Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T15:57:56.335Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_0728f366 Panalytical
[2026-01-31T15:57:56.335Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:57:56.353Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T15:57:56.619Z] [BOT] ✅ Posted message: Graduate Software Engineer @ ORG_0728f366 Panalytical in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer @ ORG_0728f366 Panalytical
[2026-01-31T15:57:56.620Z] [BOT] 💾 Added channel posting: Graduate Software Engineer @ ORG_0728f366 Panalytical → category channel (1 total channels)
[2026-01-31T15:57:56.620Z] [BOT] 💾 BEFORE MERGE: 1237 jobs in memory (cached)
[2026-01-31T15:57:56.646Z] [BOT] ✅ Loaded V2 database: 1236 jobs
💾 DISK STATE: 1236 jobs on disk
[2026-01-31T15:57:56.647Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1237
[2026-01-31T15:57:56.650Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:57:56.650Z] [BOT] 💾 AFTER MERGE: 1237 jobs (merged disk + memory)
[2026-01-31T15:57:56.651Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-31T15:57:56.656Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-31T15:57:56.656Z] [BOT] ✅ Archiving complete: 9 archived, 1228 active
[2026-01-31T15:57:56.734Z] [BOT] 💾 Saved posted_jobs.json: 1228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:57:58.237Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer" @ ORG_20eac5aa Dynamics Laboratory
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:57:58.409Z] [BOT] ✅ Posted message: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory
[2026-01-31T15:57:58.410Z] [BOT] 💾 Added channel posting: Entry-Level Software Engineer @ ORG_20eac5aa Dynamics Laboratory → category channel (1 total channels)
[2026-01-31T15:57:58.410Z] [BOT] 💾 BEFORE MERGE: 1229 jobs in memory (cached)
[2026-01-31T15:57:58.432Z] [BOT] ✅ Loaded V2 database: 1228 jobs
💾 DISK STATE: 1228 jobs on disk
[2026-01-31T15:57:58.433Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1229
[2026-01-31T15:57:58.435Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1229 jobs (merged disk + memory)
[2026-01-31T15:57:58.436Z] [BOT] ✅ No jobs to archive (all 1229 jobs within 7-day window)
[2026-01-31T15:57:58.509Z] [BOT] 💾 Saved posted_jobs.json: 1229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:00.010Z] [BOT] 📍 [ROUTING] "Business Systems Architect, AI" @ figma
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:58:00.256Z] [BOT] ✅ Posted message: Business Systems Architect, AI @ figma in #💻・tech-jobs
  ✅ Industry: Business Systems Architect, AI @ figma
[2026-01-31T15:58:00.257Z] [BOT] 💾 Added channel posting: Business Systems Architect, AI @ figma → category channel (1 total channels)
[2026-01-31T15:58:00.257Z] [BOT] 💾 BEFORE MERGE: 1230 jobs in memory (cached)
[2026-01-31T15:58:00.279Z] [BOT] ✅ Loaded V2 database: 1229 jobs
💾 DISK STATE: 1229 jobs on disk
[2026-01-31T15:58:00.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1230
[2026-01-31T15:58:00.282Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1230 jobs (merged disk + memory)
[2026-01-31T15:58:00.283Z] [BOT] ✅ No jobs to archive (all 1230 jobs within 7-day window)
[2026-01-31T15:58:00.353Z] [BOT] 💾 Saved posted_jobs.json: 1230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:01.855Z] [BOT] 📍 [ROUTING] "Corporate Development & Strategy, M&A Integration" @ figma
[2026-01-31T15:58:01.855Z] [BOT] Category: TECH (matched: "pm")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:58:02.081Z] [BOT] ✅ Posted message: Corporate Development & Strategy, M&A Integration @ figma in #💻・tech-jobs
[2026-01-31T15:58:02.081Z] [BOT] ✅ Industry: Corporate Development & Strategy, M&A Integration @ figma
[2026-01-31T15:58:02.082Z] [BOT] 💾 Added channel posting: Corporate Development & Strategy, M&A Integration @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 1231 jobs in memory (cached)
[2026-01-31T15:58:02.105Z] [BOT] ✅ Loaded V2 database: 1230 jobs
💾 DISK STATE: 1230 jobs on disk
[2026-01-31T15:58:02.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1231
[2026-01-31T15:58:02.108Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:58:02.108Z] [BOT] 💾 AFTER MERGE: 1231 jobs (merged disk + memory)
[2026-01-31T15:58:02.108Z] [BOT] ✅ No jobs to archive (all 1231 jobs within 7-day window)
[2026-01-31T15:58:02.196Z] [BOT] 💾 Saved posted_jobs.json: 1231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:03.694Z] [BOT] 📍 [ROUTING] "Account Executive, SMB " @ figma
[2026-01-31T15:58:03.694Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:58:03.924Z] [BOT] ✅ Posted message: Account Executive, SMB  @ figma in #💻・tech-jobs
[2026-01-31T15:58:03.924Z] [BOT] ✅ Industry: Account Executive, SMB  @ figma
[2026-01-31T15:58:03.924Z] [BOT] 💾 Added channel posting: Account Executive, SMB  @ figma → category channel (1 total channels)
[2026-01-31T15:58:03.924Z] [BOT] 💾 BEFORE MERGE: 1232 jobs in memory (cached)
[2026-01-31T15:58:03.946Z] [BOT] ✅ Loaded V2 database: 1231 jobs
💾 DISK STATE: 1231 jobs on disk
[2026-01-31T15:58:03.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1232
[2026-01-31T15:58:03.948Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1232 jobs (merged disk + memory)
[2026-01-31T15:58:03.949Z] [BOT] ✅ No jobs to archive (all 1232 jobs within 7-day window)
[2026-01-31T15:58:04.017Z] [BOT] 💾 Saved posted_jobs.json: 1232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:05.519Z] [BOT] 📍 [ROUTING] "Software Engineer, Full Stack" @ figma
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:58:05.746Z] [BOT] ✅ Posted message: Software Engineer, Full Stack @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer, Full Stack @ figma
[2026-01-31T15:58:05.747Z] [BOT] 💾 Added channel posting: Software Engineer, Full Stack @ figma → category channel (1 total channels)
[2026-01-31T15:58:05.747Z] [BOT] 💾 BEFORE MERGE: 1233 jobs in memory (cached)
[2026-01-31T15:58:05.769Z] [BOT] ✅ Loaded V2 database: 1232 jobs
💾 DISK STATE: 1232 jobs on disk
[2026-01-31T15:58:05.770Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1233
[2026-01-31T15:58:05.772Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:58:05.773Z] [BOT] 💾 AFTER MERGE: 1233 jobs (merged disk + memory)
[2026-01-31T15:58:05.773Z] [BOT] ✅ No jobs to archive (all 1233 jobs within 7-day window)
[2026-01-31T15:58:05.842Z] [BOT] 💾 Saved posted_jobs.json: 1233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:07.343Z] [BOT] 📍 [ROUTING] "Technical Learning Specialist" @ figma
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:58:07.511Z] [BOT] ✅ Posted message: Technical Learning Specialist @ figma in #💻・tech-jobs
[2026-01-31T15:58:07.511Z] [BOT] ✅ Industry: Technical Learning Specialist @ figma
[2026-01-31T15:58:07.512Z] [BOT] 💾 Added channel posting: Technical Learning Specialist @ figma → category channel (1 total channels)
[2026-01-31T15:58:07.512Z] [BOT] 💾 BEFORE MERGE: 1234 jobs in memory (cached)
[2026-01-31T15:58:07.534Z] [BOT] ✅ Loaded V2 database: 1233 jobs
💾 DISK STATE: 1233 jobs on disk
[2026-01-31T15:58:07.534Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1234
[2026-01-31T15:58:07.537Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:58:07.537Z] [BOT] 💾 AFTER MERGE: 1234 jobs (merged disk + memory)
[2026-01-31T15:58:07.537Z] [BOT] ✅ No jobs to archive (all 1234 jobs within 7-day window)
[2026-01-31T15:58:07.628Z] [BOT] 💾 Saved posted_jobs.json: 1234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:12.127Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T15:58:12.128Z] [BOT] 📍 [ROUTING] "Strategic Finance, Finance Systems & Automation" @ figma
[2026-01-31T15:58:12.128Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T15:58:12.395Z] [BOT] ✅ Posted message: Strategic Finance, Finance Systems & Automation @ figma in #📊・JID_fb739488
[2026-01-31T15:58:12.395Z] [BOT] ✅ Industry: Strategic Finance, Finance Systems & Automation @ figma
[2026-01-31T15:58:12.396Z] [BOT] 💾 Added channel posting: Strategic Finance, Finance Systems & Automation @ figma → category channel (1 total channels)
[2026-01-31T15:58:12.396Z] [BOT] 💾 BEFORE MERGE: 1235 jobs in memory (cached)
[2026-01-31T15:58:12.418Z] [BOT] ✅ Loaded V2 database: 1234 jobs
💾 DISK STATE: 1234 jobs on disk
[2026-01-31T15:58:12.418Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1235
[2026-01-31T15:58:12.420Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1235 jobs (merged disk + memory)
[2026-01-31T15:58:12.421Z] [BOT] ✅ No jobs to archive (all 1235 jobs within 7-day window)
[2026-01-31T15:58:12.492Z] [BOT] 💾 Saved posted_jobs.json: 1235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:16.995Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T15:58:16.996Z] [BOT] 📍 [ROUTING] "Software Engineer, AI Platforms" @ figma
[2026-01-31T15:58:16.996Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:58:17.208Z] [BOT] ✅ Posted message: Software Engineer, AI Platforms @ figma in #🤖・ai-jobs
  ✅ Industry: Software Engineer, AI Platforms @ figma
[2026-01-31T15:58:17.208Z] [BOT] 💾 Added channel posting: Software Engineer, AI Platforms @ figma → category channel (1 total channels)
[2026-01-31T15:58:17.208Z] [BOT] 💾 BEFORE MERGE: 1236 jobs in memory (cached)
[2026-01-31T15:58:17.230Z] [BOT] ✅ Loaded V2 database: 1235 jobs
💾 DISK STATE: 1235 jobs on disk
[2026-01-31T15:58:17.230Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1236
[2026-01-31T15:58:17.232Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:58:17.232Z] [BOT] 💾 AFTER MERGE: 1236 jobs (merged disk + memory)
[2026-01-31T15:58:17.233Z] [BOT] ✅ No jobs to archive (all 1236 jobs within 7-day window)
[2026-01-31T15:58:17.323Z] [BOT] 💾 Saved posted_jobs.json: 1236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:18.821Z] [BOT] 📍 [ROUTING] "Integration Engineer, AI" @ figma
[2026-01-31T15:58:18.822Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:58:19.037Z] [BOT] ✅ Posted message: Integration Engineer, AI @ figma in #🤖・ai-jobs
[2026-01-31T15:58:19.037Z] [BOT] ✅ Industry: Integration Engineer, AI @ figma
[2026-01-31T15:58:19.038Z] [BOT] 💾 Added channel posting: Integration Engineer, AI @ figma → category channel (1 total channels)
[2026-01-31T15:58:19.038Z] [BOT] 💾 BEFORE MERGE: 1237 jobs in memory (cached)
[2026-01-31T15:58:19.060Z] [BOT] ✅ Loaded V2 database: 1236 jobs
💾 DISK STATE: 1236 jobs on disk
[2026-01-31T15:58:19.060Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1237
[2026-01-31T15:58:19.062Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1237 jobs (merged disk + memory)
[2026-01-31T15:58:19.063Z] [BOT] ✅ No jobs to archive (all 1237 jobs within 7-day window)
[2026-01-31T15:58:19.134Z] [BOT] 💾 Saved posted_jobs.json: 1237 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:23.636Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T15:58:23.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6816c3af..." not found, but found as SHA256 "b1818b391f47fae5"
[2026-01-31T15:58:23.637Z] [BOT] ⏭️  Skipping duplicate: JID_3fd56fb0-malvern_panalytical_careers-JID_686911c2-engineer_16693 (posted within 7 days)
[2026-01-31T15:58:23.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d68ea6d5..." not found, but found as SHA256 "8672996c22b226ac"
[2026-01-31T15:58:23.638Z] [BOT] ⏭️  Skipping duplicate: JID_02c8e9ca (posted within 7 days)
[2026-01-31T15:58:23.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_83dd0a4b..." not found, but found as SHA256 "2062a6d4b44440ea"
⏭️  Skipping duplicate: JID_976601b2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b16a2f29..." not found, but found as SHA256 "0c8b62b11c601a10"
⏭️  Skipping duplicate: JID_509fb2e3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b3d47ff5..." not found, but found as SHA256 "37274976b5ddf1fd"
⏭️  Skipping duplicate: JID_e63c6a0e (posted within 7 days)
[2026-01-31T15:58:23.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0269e8a4..." not found, but found as SHA256 "7307ea78ac5036c4"
[2026-01-31T15:58:23.639Z] [BOT] ⏭️  Skipping duplicate: JID_fbea14ba (posted within 7 days)
[2026-01-31T15:58:23.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e8a9b12d..." not found, but found as SHA256 "1ea38b894dee6ce9"
⏭️  Skipping duplicate: JID_7eac352b (posted within 7 days)
[2026-01-31T15:58:23.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5075ac83..." not found, but found as SHA256 "c792cc640ff2247c"
⏭️  Skipping duplicate: JID_8b51f994 (posted within 7 days)
[2026-01-31T15:58:23.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f2f89a4..." not found, but found as SHA256 "41024b2298657a9a"
[2026-01-31T15:58:23.640Z] [BOT] ⏭️  Skipping duplicate: JID_7c8acff4 (posted within 7 days)
[2026-01-31T15:58:23.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09eac3c1..." not found, but found as SHA256 "1efca1133fe66b53"
⏭️  Skipping duplicate: JID_3b4bc80a (posted within 7 days)
[2026-01-31T15:58:23.754Z] [BOT] ✅ Loaded pending queue: 2939 total (1690 pending, 42 enriched, 1207 posted)
[2026-01-31T15:58:23.943Z] [BOT] ✅ Saved pending queue: 2939 total (1690 pending, 32 enriched, 1217 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T15:58:23.943Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T15:58:24.030Z] [BOT] 📂 Loaded 11298 existing routing entries
[2026-01-31T15:58:24.156Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T15:58:24.156Z] [BOT] Total entries: 11308
   Timestamp: 2026-01-31T15:58:24.110Z
[2026-01-31T15:58:24.158Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 39
   Successful: 10
   Failed: 0
   Skipped: 29
[2026-01-31T15:58:24.158Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-31T15:58:24.158Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
[2026-01-31T15:58:24.158Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T15:58:24.158Z] [BOT] 💾 BEFORE MERGE: 1237 jobs in memory (cached)
[2026-01-31T15:58:24.197Z] [BOT] ✅ Loaded V2 database: 1237 jobs
💾 DISK STATE: 1237 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1237
[2026-01-31T15:58:24.198Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:58:24.198Z] [BOT] 💾 AFTER MERGE: 1237 jobs (merged disk + memory)
[2026-01-31T15:58:24.199Z] [BOT] ✅ No jobs to archive (all 1237 jobs within 7-day window)
[2026-01-31T15:58:24.276Z] [BOT] 💾 Saved posted_jobs.json: 1237 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:58:24.277Z] [BOT] ✅ Database saved successfully
[2026-01-31T15:58:26.307Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*