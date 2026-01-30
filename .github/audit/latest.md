# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T22:51:01.056Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T22:50:21.959Z] ========================================
[2026-01-30T22:50:21.961Z] Discord Bot Execution Log
[2026-01-30T22:50:21.961Z] Environment: GitHub Actions
[2026-01-30T22:50:21.961Z] Node Version: v20.20.0
[2026-01-30T22:50:21.961Z] ========================================
[2026-01-30T22:50:21.961Z] Environment Variables Check:
[2026-01-30T22:50:21.961Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T22:50:21.961Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.961Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T22:50:21.962Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T22:50:21.962Z] 
Multi-Channel Configuration:
[2026-01-30T22:50:21.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T22:50:21.962Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T22:50:21.963Z] 
Data Files Check:
[2026-01-30T22:50:21.964Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T22:50:21.990Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4882287 bytes)
[2026-01-30T22:50:21.990Z] 
========================================
[2026-01-30T22:50:21.990Z] Starting Enhanced Discord Bot...
[2026-01-30T22:50:21.990Z] ========================================
[2026-01-30T22:50:22.564Z] [BOT] ✅ Loaded V2 database: 738 jobs
[2026-01-30T22:50:23.140Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T22:50:23.141Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T22:50:23.141Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T22:50:23.259Z] [BOT] ✅ Loaded pending queue: 2939 total (2180 pending, 50 enriched, 709 posted)
[2026-01-30T22:50:23.260Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T22:50:23.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T22:50:23.261Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T22:50:23.261Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T22:50:23.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T22:50:23.261Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T22:50:23.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-30T22:50:23.262Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T22:50:23.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T22:50:23.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T22:50:23.262Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T22:50:23.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-30T22:50:23.262Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T22:50:23.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T22:50:23.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T22:50:23.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T22:50:23.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T22:50:23.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T22:50:23.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T22:50:23.272Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T22:50:23.272Z] [BOT] 🚫 Skipping blacklisted job: Senior Associate - Analytics - Media at VaynerMedia
[2026-01-30T22:50:23.272Z] [BOT] 🚫 Skipping blacklisted job: Director, Corporate & Securities Counsel at figma
🚫 Skipping blacklisted job: Associate Manager, Compliance at coinbase
[2026-01-30T22:50:23.388Z] [BOT] ✅ Loaded pending queue: 2939 total (2180 pending, 50 enriched, 709 posted)
[2026-01-30T22:50:23.568Z] [BOT] ✅ Saved pending queue: 2936 total (2180 pending, 47 enriched, 709 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-30T22:50:23.568Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-30T22:50:23.568Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-30T22:50:23.569Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-30T22:50:23.569Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T22:50:23.569Z] [BOT] - Select Major Account Executive EST/CST - San Antonio, TX @ samsara: san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T22:50:23.573Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T22:50:23.574Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - San Antonio, TX" @ samsara
[2026-01-30T22:50:23.574Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T22:50:23.592Z] [BOT ERROR] (node:3189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T22:50:23.999Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - San Antonio, TX @ samsara in #💰・finance-jobs
[2026-01-30T22:50:23.999Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - San Antonio, TX @ samsara
[2026-01-30T22:50:24.000Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - San Antonio, TX @ samsara → category channel (1 total channels)
[2026-01-30T22:50:24.000Z] [BOT] 💾 BEFORE MERGE: 739 jobs in memory (cached)
[2026-01-30T22:50:24.017Z] [BOT] ✅ Loaded V2 database: 738 jobs
💾 DISK STATE: 738 jobs on disk
[2026-01-30T22:50:24.017Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=739
[2026-01-30T22:50:24.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:24.019Z] [BOT] 💾 AFTER MERGE: 739 jobs (merged disk + memory)
[2026-01-30T22:50:24.020Z] [BOT] ✅ No jobs to archive (all 739 jobs within 7-day window)
[2026-01-30T22:50:24.076Z] [BOT] 💾 Saved posted_jobs.json: 739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:25.578Z] [BOT] 📍 [ROUTING] "Product Counsel - PEO/Employment Law" @ gusto
[2026-01-30T22:50:25.579Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T22:50:25.859Z] [BOT] ✅ Posted message: Product Counsel - PEO/Employment Law @ gusto in #💰・finance-jobs
[2026-01-30T22:50:25.859Z] [BOT] ✅ Industry: Product Counsel - PEO/Employment Law @ gusto
[2026-01-30T22:50:25.860Z] [BOT] 💾 Added channel posting: Product Counsel - PEO/Employment Law @ gusto → category channel (1 total channels)
[2026-01-30T22:50:25.860Z] [BOT] 💾 BEFORE MERGE: 740 jobs in memory (cached)
[2026-01-30T22:50:25.874Z] [BOT] ✅ Loaded V2 database: 739 jobs
💾 DISK STATE: 739 jobs on disk
[2026-01-30T22:50:25.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=740
[2026-01-30T22:50:25.876Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:25.876Z] [BOT] 💾 AFTER MERGE: 740 jobs (merged disk + memory)
[2026-01-30T22:50:25.876Z] [BOT] ✅ No jobs to archive (all 740 jobs within 7-day window)
[2026-01-30T22:50:25.931Z] [BOT] 💾 Saved posted_jobs.json: 740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:30.433Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T22:50:30.433Z] [BOT] 📍 [ROUTING] "Software Engineer, CI/CD" @ vercel
[2026-01-30T22:50:30.433Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:30.748Z] [BOT] ✅ Posted message: Software Engineer, CI/CD @ vercel in #💻・tech-jobs
[2026-01-30T22:50:30.748Z] [BOT] ✅ Industry: Software Engineer, CI/CD @ vercel
[2026-01-30T22:50:30.748Z] [BOT] 💾 Added channel posting: Software Engineer, CI/CD @ vercel → category channel (1 total channels)
[2026-01-30T22:50:30.748Z] [BOT] 💾 BEFORE MERGE: 741 jobs in memory (cached)
[2026-01-30T22:50:30.762Z] [BOT] ✅ Loaded V2 database: 740 jobs
💾 DISK STATE: 740 jobs on disk
[2026-01-30T22:50:30.762Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=741
[2026-01-30T22:50:30.764Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:30.764Z] [BOT] 💾 AFTER MERGE: 741 jobs (merged disk + memory)
[2026-01-30T22:50:30.765Z] [BOT] ✅ No jobs to archive (all 741 jobs within 7-day window)
[2026-01-30T22:50:30.813Z] [BOT] 💾 Saved posted_jobs.json: 741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:32.546Z] [BOT] ✅ Posted message: Software Engineer, CI/CD @ vercel in #🗽・JID_98d4f0de
[2026-01-30T22:50:32.546Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T22:50:32.546Z] [BOT] 💾 Added channel posting: Software Engineer, CI/CD @ vercel → location channel (2 total channels)
[2026-01-30T22:50:32.547Z] [BOT] 💾 BEFORE MERGE: 741 jobs in memory (cached)
[2026-01-30T22:50:32.574Z] [BOT] ✅ Loaded V2 database: 741 jobs
💾 DISK STATE: 741 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=741
[2026-01-30T22:50:32.577Z] [BOT] 🔀 Deep merged: Software Engineer, CI/CD @ vercel (disk: 1 channels → merged: 2 channels)
[2026-01-30T22:50:32.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 741 jobs (merged disk + memory)
[2026-01-30T22:50:32.578Z] [BOT] ✅ No jobs to archive (all 741 jobs within 7-day window)
[2026-01-30T22:50:32.637Z] [BOT] 💾 Saved posted_jobs.json: 741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:34.137Z] [BOT] 📍 [ROUTING] "Software Engineer, Deployment Infrastructure" @ vercel
   Category: TECH (matched: "software")
[2026-01-30T22:50:34.137Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:34.340Z] [BOT] ✅ Posted message: Software Engineer, Deployment Infrastructure @ vercel in #💻・tech-jobs
[2026-01-30T22:50:34.340Z] [BOT] ✅ Industry: Software Engineer, Deployment Infrastructure @ vercel
[2026-01-30T22:50:34.341Z] [BOT] 💾 Added channel posting: Software Engineer, Deployment Infrastructure @ vercel → category channel (1 total channels)
[2026-01-30T22:50:34.341Z] [BOT] 💾 BEFORE MERGE: 742 jobs in memory (cached)
[2026-01-30T22:50:34.356Z] [BOT] ✅ Loaded V2 database: 741 jobs
💾 DISK STATE: 741 jobs on disk
[2026-01-30T22:50:34.356Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=742
[2026-01-30T22:50:34.358Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:34.358Z] [BOT] 💾 AFTER MERGE: 742 jobs (merged disk + memory)
[2026-01-30T22:50:34.359Z] [BOT] ✅ No jobs to archive (all 742 jobs within 7-day window)
[2026-01-30T22:50:34.415Z] [BOT] 💾 Saved posted_jobs.json: 742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:35.918Z] [BOT] 📍 [ROUTING] "Software Engineer, Support Platform" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:36.106Z] [BOT] ✅ Posted message: Software Engineer, Support Platform @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, Support Platform @ vercel
[2026-01-30T22:50:36.106Z] [BOT] 💾 Added channel posting: Software Engineer, Support Platform @ vercel → category channel (1 total channels)
[2026-01-30T22:50:36.106Z] [BOT] 💾 BEFORE MERGE: 743 jobs in memory (cached)
[2026-01-30T22:50:36.121Z] [BOT] ✅ Loaded V2 database: 742 jobs
💾 DISK STATE: 742 jobs on disk
[2026-01-30T22:50:36.121Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=743
[2026-01-30T22:50:36.123Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:36.123Z] [BOT] 💾 AFTER MERGE: 743 jobs (merged disk + memory)
[2026-01-30T22:50:36.123Z] [BOT] ✅ No jobs to archive (all 743 jobs within 7-day window)
[2026-01-30T22:50:36.171Z] [BOT] 💾 Saved posted_jobs.json: 743 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:37.672Z] [BOT] 📍 [ROUTING] "Software Engineer (Web Performance), v0" @ vercel
[2026-01-30T22:50:37.673Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:37.863Z] [BOT] ✅ Posted message: Software Engineer (Web Performance), v0 @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer (Web Performance), v0 @ vercel
[2026-01-30T22:50:37.863Z] [BOT] 💾 Added channel posting: Software Engineer (Web Performance), v0 @ vercel → category channel (1 total channels)
[2026-01-30T22:50:37.863Z] [BOT] 💾 BEFORE MERGE: 744 jobs in memory (cached)
[2026-01-30T22:50:37.878Z] [BOT] ✅ Loaded V2 database: 743 jobs
💾 DISK STATE: 743 jobs on disk
[2026-01-30T22:50:37.878Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=744
[2026-01-30T22:50:37.880Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:37.880Z] [BOT] 💾 AFTER MERGE: 744 jobs (merged disk + memory)
[2026-01-30T22:50:37.881Z] [BOT] ✅ No jobs to archive (all 744 jobs within 7-day window)
[2026-01-30T22:50:37.936Z] [BOT] 💾 Saved posted_jobs.json: 744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:39.438Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors" @ vercel
[2026-01-30T22:50:39.438Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:39.613Z] [BOT] ✅ Posted message: Vercel Development Representative, Majors @ vercel in #💻・tech-jobs
  ✅ Industry: Vercel Development Representative, Majors @ vercel
[2026-01-30T22:50:39.614Z] [BOT] 💾 Added channel posting: Vercel Development Representative, Majors @ vercel → category channel (1 total channels)
[2026-01-30T22:50:39.614Z] [BOT] 💾 BEFORE MERGE: 745 jobs in memory (cached)
[2026-01-30T22:50:39.629Z] [BOT] ✅ Loaded V2 database: 744 jobs
💾 DISK STATE: 744 jobs on disk
[2026-01-30T22:50:39.629Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=745
[2026-01-30T22:50:39.631Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:39.631Z] [BOT] 💾 AFTER MERGE: 745 jobs (merged disk + memory)
[2026-01-30T22:50:39.631Z] [BOT] ✅ No jobs to archive (all 745 jobs within 7-day window)
[2026-01-30T22:50:39.680Z] [BOT] 💾 Saved posted_jobs.json: 745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:41.181Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors, v0" @ vercel
   Category: TECH (default)
[2026-01-30T22:50:41.181Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:50:42.808Z] [BOT] ✅ Posted message: Vercel Development Representative, Majors, v0 @ vercel in #💻・tech-jobs
  ✅ Industry: Vercel Development Representative, Majors, v0 @ vercel
[2026-01-30T22:50:42.809Z] [BOT] 💾 Added channel posting: Vercel Development Representative, Majors, v0 @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 746 jobs in memory (cached)
[2026-01-30T22:50:42.823Z] [BOT] ✅ Loaded V2 database: 745 jobs
💾 DISK STATE: 745 jobs on disk
[2026-01-30T22:50:42.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=746
[2026-01-30T22:50:42.825Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 746 jobs (merged disk + memory)
[2026-01-30T22:50:42.826Z] [BOT] ✅ No jobs to archive (all 746 jobs within 7-day window)
[2026-01-30T22:50:42.875Z] [BOT] 💾 Saved posted_jobs.json: 746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:47.377Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T22:50:47.377Z] [BOT] 📍 [ROUTING] "Software Engineer, Web Platform" @ figma
   Category: AI (matched: "AI/ML")
[2026-01-30T22:50:47.378Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T22:50:47.618Z] [BOT] ✅ Posted message: Software Engineer, Web Platform @ figma in #🤖・ai-jobs
[2026-01-30T22:50:47.618Z] [BOT] ✅ Industry: Software Engineer, Web Platform @ figma
[2026-01-30T22:50:47.619Z] [BOT] 💾 Added channel posting: Software Engineer, Web Platform @ figma → category channel (1 total channels)
[2026-01-30T22:50:47.619Z] [BOT] 💾 BEFORE MERGE: 747 jobs in memory (cached)
[2026-01-30T22:50:47.634Z] [BOT] ✅ Loaded V2 database: 746 jobs
💾 DISK STATE: 746 jobs on disk
[2026-01-30T22:50:47.634Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=747
[2026-01-30T22:50:47.636Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:47.636Z] [BOT] 💾 AFTER MERGE: 747 jobs (merged disk + memory)
[2026-01-30T22:50:47.637Z] [BOT] ✅ No jobs to archive (all 747 jobs within 7-day window)
[2026-01-30T22:50:47.685Z] [BOT] 💾 Saved posted_jobs.json: 747 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:52.188Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T22:50:52.189Z] [BOT] 📍 [ROUTING] "Site Manufacturing Data Engineer" @ ORG_58b7c913 & Gamble (P&G)
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T22:50:52.189Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T22:50:52.500Z] [BOT] ✅ Posted message: Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G) in #📊・JID_fb739488
  ✅ Industry: Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G)
[2026-01-30T22:50:52.501Z] [BOT] 💾 Added channel posting: Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G) → category channel (1 total channels)
[2026-01-30T22:50:52.501Z] [BOT] 💾 BEFORE MERGE: 748 jobs in memory (cached)
[2026-01-30T22:50:52.516Z] [BOT] ✅ Loaded V2 database: 747 jobs
💾 DISK STATE: 747 jobs on disk
[2026-01-30T22:50:52.516Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=748
[2026-01-30T22:50:52.517Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:52.518Z] [BOT] 💾 AFTER MERGE: 748 jobs (merged disk + memory)
[2026-01-30T22:50:52.518Z] [BOT] ✅ No jobs to archive (all 748 jobs within 7-day window)
[2026-01-30T22:50:52.566Z] [BOT] 💾 Saved posted_jobs.json: 748 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:50:57.069Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T22:50:57.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "2f736c219772ab28"
[2026-01-30T22:50:57.070Z] [BOT] ⏭️  Skipping duplicate: JID_475ec70b (posted within 7 days)
[2026-01-30T22:50:57.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5f3911c..." not found, but found as SHA256 "1fb4eb94302a8603"
⏭️  Skipping duplicate: JID_a856957e (posted within 7 days)
[2026-01-30T22:50:57.071Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f6bc47bd..." not found, but found as SHA256 "7433d99e44a33cd3"
[2026-01-30T22:50:57.071Z] [BOT] ⏭️  Skipping duplicate: JID_be1974ea (posted within 7 days)
[2026-01-30T22:50:57.071Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7202e577..." not found, but found as SHA256 "da74342b271733b7"
⏭️  Skipping duplicate: JID_42f20984 (posted within 7 days)
[2026-01-30T22:50:57.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16309a8d..." not found, but found as SHA256 "613bd15288a08663"
⏭️  Skipping duplicate: JID_1b547e55 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_52014ff7..." not found, but found as SHA256 "3e78b0c9db5b8a43"
⏭️  Skipping duplicate: JID_74470633 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e333090e..." not found, but found as SHA256 "ec9a963d8cf101a9"
⏭️  Skipping duplicate: JID_21e304e2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_97b5413a..." not found, but found as SHA256 "b64d5af30cb073ba"
⏭️  Skipping duplicate: JID_0b3e33cd (posted within 7 days)
[2026-01-30T22:50:57.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb203190..." not found, but found as SHA256 "75234680bffdc582"
⏭️  Skipping duplicate: JID_836a54e3-engineer_r000142913-1 (posted within 7 days)
[2026-01-30T22:50:57.072Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8597cce9..." not found, but found as SHA256 "9229247a6e84d8e3"
⏭️  Skipping duplicate: JID_5f7b94e0 (posted within 7 days)
[2026-01-30T22:50:57.181Z] [BOT] ✅ Loaded pending queue: 2936 total (2180 pending, 47 enriched, 709 posted)
[2026-01-30T22:50:57.361Z] [BOT] ✅ Saved pending queue: 2936 total (2180 pending, 37 enriched, 719 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T22:50:57.362Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T22:50:57.446Z] [BOT] 📂 Loaded 10800 existing routing entries
[2026-01-30T22:50:57.589Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T22:50:57.589Z] [BOT] New entries: 10
   Total entries: 10810
   Timestamp: 2026-01-30T22:50:57.546Z
[2026-01-30T22:50:57.591Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 28
[2026-01-30T22:50:57.591Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 17
[2026-01-30T22:50:57.591Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T22:50:57.591Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
[2026-01-30T22:50:57.591Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 2 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #🤖・ai-jobs: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T22:50:57.591Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 748 jobs in memory (cached)
[2026-01-30T22:50:57.609Z] [BOT] ✅ Loaded V2 database: 748 jobs
💾 DISK STATE: 748 jobs on disk
[2026-01-30T22:50:57.609Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=748
[2026-01-30T22:50:57.611Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:50:57.611Z] [BOT] 💾 AFTER MERGE: 748 jobs (merged disk + memory)
[2026-01-30T22:50:57.612Z] [BOT] ✅ No jobs to archive (all 748 jobs within 7-day window)
[2026-01-30T22:50:57.660Z] [BOT] 💾 Saved posted_jobs.json: 748 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T22:50:59.690Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3189) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*