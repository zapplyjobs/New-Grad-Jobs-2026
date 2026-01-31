# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T03:40:48.591Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T03:40:09.213Z] ========================================
[2026-01-31T03:40:09.215Z] Discord Bot Execution Log
[2026-01-31T03:40:09.215Z] Environment: GitHub Actions
[2026-01-31T03:40:09.215Z] Node Version: v20.20.0
[2026-01-31T03:40:09.215Z] ========================================
[2026-01-31T03:40:09.215Z] Environment Variables Check:
[2026-01-31T03:40:09.215Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T03:40:09.215Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.215Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T03:40:09.215Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T03:40:09.215Z] 
Multi-Channel Configuration:
[2026-01-31T03:40:09.216Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T03:40:09.216Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T03:40:09.216Z] 
Data Files Check:
[2026-01-31T03:40:09.217Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T03:40:09.252Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5502825 bytes)
[2026-01-31T03:40:09.252Z] 
========================================
[2026-01-31T03:40:09.252Z] Starting Enhanced Discord Bot...
[2026-01-31T03:40:09.252Z] ========================================
[2026-01-31T03:40:09.742Z] [BOT] ✅ Loaded V2 database: 838 jobs
[2026-01-31T03:40:10.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T03:40:10.463Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T03:40:10.464Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T03:40:10.617Z] [BOT] ✅ Loaded pending queue: 2961 total (2102 pending, 50 enriched, 809 posted)
[2026-01-31T03:40:10.618Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T03:40:10.618Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T03:40:10.619Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T03:40:10.619Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T03:40:10.619Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T03:40:10.619Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T03:40:10.620Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T03:40:10.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T03:40:10.620Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T03:40:10.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T03:40:10.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T03:40:10.620Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T03:40:10.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T03:40:10.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T03:40:10.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T03:40:10.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T03:40:10.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T03:40:10.622Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T03:40:10.622Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T03:40:10.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T03:40:10.622Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T03:40:10.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T03:40:10.622Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T03:40:10.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T03:40:10.629Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T03:40:10.629Z] [BOT] 🚫 Skipping blacklisted job: Tax Director at brex
[2026-01-31T03:40:10.630Z] [BOT] 🚫 Skipping blacklisted job: Tax Director at brex
🚫 Skipping blacklisted job: GTM Strategy Manager  at figma
[2026-01-31T03:40:10.779Z] [BOT] ✅ Loaded pending queue: 2961 total (2102 pending, 50 enriched, 809 posted)
[2026-01-31T03:40:10.952Z] [BOT] ✅ Saved pending queue: 2958 total (2102 pending, 47 enriched, 809 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T03:40:10.952Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T03:40:10.953Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T03:40:10.953Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T03:40:10.957Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T03:40:10.958Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Data Science" @ figma
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T03:40:10.958Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T03:40:10.975Z] [BOT ERROR] (node:3374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T03:40:11.522Z] [BOT] ✅ Posted message: Technical Recruiter, Data Science @ figma in #📊・JID_fb739488
[2026-01-31T03:40:11.522Z] [BOT] ✅ Industry: Technical Recruiter, Data Science @ figma
[2026-01-31T03:40:11.523Z] [BOT] 💾 Added channel posting: Technical Recruiter, Data Science @ figma → category channel (1 total channels)
[2026-01-31T03:40:11.523Z] [BOT] 💾 BEFORE MERGE: 839 jobs in memory (cached)
[2026-01-31T03:40:11.549Z] [BOT] ✅ Loaded V2 database: 838 jobs
💾 DISK STATE: 838 jobs on disk
[2026-01-31T03:40:11.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=839
[2026-01-31T03:40:11.552Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:11.552Z] [BOT] 💾 AFTER MERGE: 839 jobs (merged disk + memory)
[2026-01-31T03:40:11.553Z] [BOT] ✅ No jobs to archive (all 839 jobs within 7-day window)
[2026-01-31T03:40:11.616Z] [BOT] 💾 Saved posted_jobs.json: 839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:13.117Z] [BOT] 📍 [ROUTING] "Entry-Level Data Analyst" @ ORG_30165398ing World
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T03:40:13.117Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T03:40:13.315Z] [BOT] ✅ Posted message: Entry-Level Data Analyst @ ORG_30165398ing World in #📊・JID_fb739488
  ✅ Industry: Entry-Level Data Analyst @ ORG_30165398ing World
[2026-01-31T03:40:13.316Z] [BOT] 💾 Added channel posting: Entry-Level Data Analyst @ ORG_30165398ing World → category channel (1 total channels)
💾 BEFORE MERGE: 840 jobs in memory (cached)
[2026-01-31T03:40:13.340Z] [BOT] ✅ Loaded V2 database: 839 jobs
💾 DISK STATE: 839 jobs on disk
[2026-01-31T03:40:13.340Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=840
[2026-01-31T03:40:13.342Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 840 jobs (merged disk + memory)
[2026-01-31T03:40:13.343Z] [BOT] ✅ No jobs to archive (all 840 jobs within 7-day window)
[2026-01-31T03:40:13.404Z] [BOT] 💾 Saved posted_jobs.json: 840 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:17.904Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T03:40:17.905Z] [BOT] 📍 [ROUTING] "Research Assistant in Geomorphology-GEOSCI" @ ORG_478e100e University
[2026-01-31T03:40:17.905Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:18.199Z] [BOT] ✅ Posted message: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University in #💻・tech-jobs
[2026-01-31T03:40:18.199Z] [BOT] ✅ Industry: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University
[2026-01-31T03:40:18.200Z] [BOT] 💾 Added channel posting: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University → category channel (1 total channels)
[2026-01-31T03:40:18.200Z] [BOT] 💾 BEFORE MERGE: 841 jobs in memory (cached)
[2026-01-31T03:40:18.225Z] [BOT] ✅ Loaded V2 database: 840 jobs
💾 DISK STATE: 840 jobs on disk
[2026-01-31T03:40:18.225Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=841
[2026-01-31T03:40:18.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:18.227Z] [BOT] 💾 AFTER MERGE: 841 jobs (merged disk + memory)
[2026-01-31T03:40:18.228Z] [BOT] ✅ No jobs to archive (all 841 jobs within 7-day window)
[2026-01-31T03:40:18.289Z] [BOT] 💾 Saved posted_jobs.json: 841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:19.791Z] [BOT] 📍 [ROUTING] "Product Analyst-Gen AI Automation" @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-31T03:40:19.792Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:19.963Z] [BOT] ✅ Posted message: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) in #💻・tech-jobs
[2026-01-31T03:40:19.963Z] [BOT] ✅ Industry: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-31T03:40:19.964Z] [BOT] 💾 Added channel posting: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) → category channel (1 total channels)
[2026-01-31T03:40:19.964Z] [BOT] 💾 BEFORE MERGE: 842 jobs in memory (cached)
[2026-01-31T03:40:19.989Z] [BOT] ✅ Loaded V2 database: 841 jobs
💾 DISK STATE: 841 jobs on disk
[2026-01-31T03:40:19.989Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=842
[2026-01-31T03:40:19.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:19.991Z] [BOT] 💾 AFTER MERGE: 842 jobs (merged disk + memory)
[2026-01-31T03:40:19.992Z] [BOT] ✅ No jobs to archive (all 842 jobs within 7-day window)
[2026-01-31T03:40:20.052Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:21.553Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - International" @ ORG_7dcce8d0ine
   Category: TECH (default)
[2026-01-31T03:40:21.554Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:21.784Z] [BOT] ✅ Posted message: Business Systems Analyst - International @ ORG_7dcce8d0ine in #💻・tech-jobs
[2026-01-31T03:40:21.784Z] [BOT] ✅ Industry: Business Systems Analyst - International @ ORG_7dcce8d0ine
[2026-01-31T03:40:21.785Z] [BOT] 💾 Added channel posting: Business Systems Analyst - International @ ORG_7dcce8d0ine → category channel (1 total channels)
[2026-01-31T03:40:21.785Z] [BOT] 💾 BEFORE MERGE: 843 jobs in memory (cached)
[2026-01-31T03:40:21.810Z] [BOT] ✅ Loaded V2 database: 842 jobs
💾 DISK STATE: 842 jobs on disk
[2026-01-31T03:40:21.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=843
[2026-01-31T03:40:21.812Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:21.812Z] [BOT] 💾 AFTER MERGE: 843 jobs (merged disk + memory)
[2026-01-31T03:40:21.812Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2026-01-31T03:40:21.888Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:23.388Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder" @ ORG_49d2dc07
[2026-01-31T03:40:23.388Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:23.628Z] [BOT] ✅ Posted message: Software Engineer 1 - Builder @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Builder @ ORG_49d2dc07
[2026-01-31T03:40:23.628Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Builder @ ORG_49d2dc07 → category channel (1 total channels)
[2026-01-31T03:40:23.628Z] [BOT] 💾 BEFORE MERGE: 844 jobs in memory (cached)
[2026-01-31T03:40:23.654Z] [BOT] ✅ Loaded V2 database: 843 jobs
💾 DISK STATE: 843 jobs on disk
[2026-01-31T03:40:23.654Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=844
[2026-01-31T03:40:23.656Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 844 jobs (merged disk + memory)
[2026-01-31T03:40:23.657Z] [BOT] ✅ No jobs to archive (all 844 jobs within 7-day window)
[2026-01-31T03:40:23.715Z] [BOT] 💾 Saved posted_jobs.json: 844 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:25.217Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-31T03:40:25.218Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:25.421Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
[2026-01-31T03:40:25.421Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-31T03:40:25.422Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_bbacffd9 → category channel (1 total channels)
💾 BEFORE MERGE: 845 jobs in memory (cached)
[2026-01-31T03:40:25.445Z] [BOT] ✅ Loaded V2 database: 844 jobs
💾 DISK STATE: 844 jobs on disk
[2026-01-31T03:40:25.446Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=845
[2026-01-31T03:40:25.447Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:25.447Z] [BOT] 💾 AFTER MERGE: 845 jobs (merged disk + memory)
[2026-01-31T03:40:25.448Z] [BOT] ✅ No jobs to archive (all 845 jobs within 7-day window)
[2026-01-31T03:40:25.509Z] [BOT] 💾 Saved posted_jobs.json: 845 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:27.011Z] [BOT] 📍 [ROUTING] "Associate Systems Analyst-IT Sales & Trade Portfolio" @ ORG_4d4fb8cc Brands
   Category: TECH (default)
[2026-01-31T03:40:27.011Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T03:40:27.231Z] [BOT] ✅ Posted message: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands in #💻・tech-jobs
  ✅ Industry: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands
[2026-01-31T03:40:27.231Z] [BOT] 💾 Added channel posting: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands → category channel (1 total channels)
[2026-01-31T03:40:27.231Z] [BOT] 💾 BEFORE MERGE: 846 jobs in memory (cached)
[2026-01-31T03:40:27.257Z] [BOT] ✅ Loaded V2 database: 845 jobs
💾 DISK STATE: 845 jobs on disk
[2026-01-31T03:40:27.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=846
[2026-01-31T03:40:27.258Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 846 jobs (merged disk + memory)
[2026-01-31T03:40:27.259Z] [BOT] ✅ No jobs to archive (all 846 jobs within 7-day window)
[2026-01-31T03:40:27.334Z] [BOT] 💾 Saved posted_jobs.json: 846 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:31.834Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T03:40:31.834Z] [BOT] 📍 [ROUTING] "GM, Surfaces Personalization" @ spotify
[2026-01-31T03:40:31.834Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T03:40:32.140Z] [BOT] ✅ Posted message: GM, Surfaces Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: GM, Surfaces Personalization @ spotify
[2026-01-31T03:40:32.140Z] [BOT] 💾 Added channel posting: GM, Surfaces Personalization @ spotify → category channel (1 total channels)
[2026-01-31T03:40:32.140Z] [BOT] 💾 BEFORE MERGE: 847 jobs in memory (cached)
[2026-01-31T03:40:32.164Z] [BOT] ✅ Loaded V2 database: 846 jobs
💾 DISK STATE: 846 jobs on disk
[2026-01-31T03:40:32.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=847
[2026-01-31T03:40:32.166Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 847 jobs (merged disk + memory)
[2026-01-31T03:40:32.166Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2026-01-31T03:40:32.229Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:35.210Z] [BOT] ✅ Posted message: GM, Surfaces Personalization @ spotify in #🗽・JID_98d4f0de
[2026-01-31T03:40:35.210Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T03:40:35.211Z] [BOT] 💾 Added channel posting: GM, Surfaces Personalization @ spotify → location channel (2 total channels)
[2026-01-31T03:40:35.211Z] [BOT] 💾 BEFORE MERGE: 847 jobs in memory (cached)
[2026-01-31T03:40:35.235Z] [BOT] ✅ Loaded V2 database: 847 jobs
💾 DISK STATE: 847 jobs on disk
[2026-01-31T03:40:35.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=847
[2026-01-31T03:40:35.237Z] [BOT] 🔀 Deep merged: GM, Surfaces Personalization @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-31T03:40:35.237Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 847 jobs (merged disk + memory)
[2026-01-31T03:40:35.238Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2026-01-31T03:40:35.301Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:39.801Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T03:40:39.802Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-31T03:40:39.802Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T03:40:40.155Z] [BOT] ✅ Posted message: Litigation and Risk Counsel @ brex in #💰・finance-jobs
  ✅ Industry: Litigation and Risk Counsel @ brex
[2026-01-31T03:40:40.156Z] [BOT] 💾 Added channel posting: Litigation and Risk Counsel @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 848 jobs in memory (cached)
[2026-01-31T03:40:40.180Z] [BOT] ✅ Loaded V2 database: 847 jobs
💾 DISK STATE: 847 jobs on disk
[2026-01-31T03:40:40.180Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=848
[2026-01-31T03:40:40.182Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:40.182Z] [BOT] 💾 AFTER MERGE: 848 jobs (merged disk + memory)
[2026-01-31T03:40:40.182Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2026-01-31T03:40:40.248Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:44.748Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T03:40:44.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4b167940..." not found, but found as SHA256 "6f237fae3da21a4d"
[2026-01-31T03:40:44.750Z] [BOT] ⏭️  Skipping duplicate: JID_6841d348 (posted within 7 days)
[2026-01-31T03:40:44.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28954219-psu_staff-job-..." not found, but found as SHA256 "5add81740bbeecdf"
⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
[2026-01-31T03:40:44.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a8533bdb..." not found, but found as SHA256 "0e2bba7365478113"
[2026-01-31T03:40:44.750Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
[2026-01-31T03:40:44.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e9ac2181..." not found, but found as SHA256 "b5235678ed5259bc"
⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4d2f7d1f-uline_..." not found, but found as SHA256 "3349a94aa13679ea"
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_82fa503e..." not found, but found as SHA256 "7bd1df8c51556ab7"
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_13082235..." not found, but found as SHA256 "43e1149e47835ad1"
⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-31T03:40:44.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da410659..." not found, but found as SHA256 "36a314fad5b04fdc"
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b69ed3c9-cox_external_c..." not found, but found as SHA256 "82269d1f7cd64b5a"
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-31T03:40:44.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b2a3fe46..." not found, but found as SHA256 "785de85c3cb34f4c"
⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
[2026-01-31T03:40:44.906Z] [BOT] ✅ Loaded pending queue: 2958 total (2102 pending, 47 enriched, 809 posted)
[2026-01-31T03:40:45.086Z] [BOT] ✅ Saved pending queue: 2958 total (2102 pending, 37 enriched, 819 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T03:40:45.181Z] [BOT] 📂 Loaded 10900 existing routing entries
[2026-01-31T03:40:45.299Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10910
   Timestamp: 2026-01-31T03:40:45.260Z
[2026-01-31T03:40:45.302Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 28
   Successful: 11
   Failed: 0
   Skipped: 17
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📊・JID_fb739488: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 848 jobs in memory (cached)
[2026-01-31T03:40:45.337Z] [BOT] ✅ Loaded V2 database: 848 jobs
[2026-01-31T03:40:45.338Z] [BOT] 💾 DISK STATE: 848 jobs on disk
[2026-01-31T03:40:45.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=848
[2026-01-31T03:40:45.343Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T03:40:45.343Z] [BOT] 💾 AFTER MERGE: 848 jobs (merged disk + memory)
[2026-01-31T03:40:45.343Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2026-01-31T03:40:45.403Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T03:40:45.403Z] [BOT] ✅ Database saved successfully
[2026-01-31T03:40:47.424Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*