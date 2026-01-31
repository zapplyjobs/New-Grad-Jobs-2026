# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T00:26:29.965Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T00:25:51.234Z] ========================================
[2026-01-31T00:25:51.236Z] Discord Bot Execution Log
[2026-01-31T00:25:51.236Z] Environment: GitHub Actions
[2026-01-31T00:25:51.236Z] Node Version: v20.20.0
[2026-01-31T00:25:51.236Z] ========================================
[2026-01-31T00:25:51.236Z] Environment Variables Check:
[2026-01-31T00:25:51.236Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T00:25:51.236Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.236Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T00:25:51.236Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T00:25:51.236Z] 
Multi-Channel Configuration:
[2026-01-31T00:25:51.237Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T00:25:51.237Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T00:25:51.237Z] 
Data Files Check:
[2026-01-31T00:25:51.238Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T00:25:51.266Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5272820 bytes)
[2026-01-31T00:25:51.266Z] 
========================================
[2026-01-31T00:25:51.266Z] Starting Enhanced Discord Bot...
[2026-01-31T00:25:51.266Z] ========================================
[2026-01-31T00:25:51.831Z] [BOT] ✅ Loaded V2 database: 798 jobs
[2026-01-31T00:25:52.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T00:25:52.373Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T00:25:52.374Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T00:25:52.486Z] [BOT] ✅ Loaded pending queue: 2952 total (2133 pending, 50 enriched, 769 posted)
[2026-01-31T00:25:52.487Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T00:25:52.487Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T00:25:52.488Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T00:25:52.488Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T00:25:52.488Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T00:25:52.488Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T00:25:52.489Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T00:25:52.489Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T00:25:52.489Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T00:25:52.489Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T00:25:52.489Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T00:25:52.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T00:25:52.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T00:25:52.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T00:25:52.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-31T00:25:52.491Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T00:25:52.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T00:25:52.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T00:25:52.491Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T00:25:52.499Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T00:25:52.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
[2026-01-31T00:25:52.499Z] [BOT] 🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
🚫 Skipping blacklisted job: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-31T00:25:52.607Z] [BOT] ✅ Loaded pending queue: 2952 total (2133 pending, 50 enriched, 769 posted)
[2026-01-31T00:25:52.802Z] [BOT] ✅ Saved pending queue: 2948 total (2133 pending, 46 enriched, 769 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-31T00:25:52.803Z] [BOT] 📋 After blacklist filter: 32 jobs (4 blacklisted)
[2026-01-31T00:25:52.803Z] [BOT] 📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-31T00:25:52.804Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T00:25:52.804Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T00:25:52.808Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T00:25:52.809Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-31T00:25:52.809Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T00:25:52.827Z] [BOT ERROR] (node:3204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T00:25:53.076Z] [BOT] ✅ Posted message: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-31T00:25:53.076Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-31T00:25:53.077Z] [BOT] 💾 Added channel posting: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 → category channel (1 total channels)
[2026-01-31T00:25:53.077Z] [BOT] 💾 BEFORE MERGE: 799 jobs in memory (cached)
[2026-01-31T00:25:53.096Z] [BOT] ✅ Loaded V2 database: 798 jobs
💾 DISK STATE: 798 jobs on disk
[2026-01-31T00:25:53.096Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=799
[2026-01-31T00:25:53.099Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:25:53.099Z] [BOT] 💾 AFTER MERGE: 799 jobs (merged disk + memory)
[2026-01-31T00:25:53.100Z] [BOT] ✅ No jobs to archive (all 799 jobs within 7-day window)
[2026-01-31T00:25:53.159Z] [BOT] 💾 Saved posted_jobs.json: 799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:25:54.661Z] [BOT] 📍 [ROUTING] "Associate, Content Strategy & Operations" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T00:25:55.102Z] [BOT] ✅ Posted message: Associate, Content Strategy & Operations @ spotify in #🤖・ai-jobs
[2026-01-31T00:25:55.102Z] [BOT] ✅ Industry: Associate, Content Strategy & Operations @ spotify
[2026-01-31T00:25:55.102Z] [BOT] 💾 Added channel posting: Associate, Content Strategy & Operations @ spotify → category channel (1 total channels)
[2026-01-31T00:25:55.102Z] [BOT] 💾 BEFORE MERGE: 800 jobs in memory (cached)
[2026-01-31T00:25:55.118Z] [BOT] ✅ Loaded V2 database: 799 jobs
💾 DISK STATE: 799 jobs on disk
[2026-01-31T00:25:55.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=800
[2026-01-31T00:25:55.120Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 800 jobs (merged disk + memory)
[2026-01-31T00:25:55.121Z] [BOT] ✅ No jobs to archive (all 800 jobs within 7-day window)
[2026-01-31T00:25:55.172Z] [BOT] 💾 Saved posted_jobs.json: 800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:25:56.892Z] [BOT] ✅ Posted message: Associate, Content Strategy & Operations @ spotify in #🗽・JID_98d4f0de
[2026-01-31T00:25:56.892Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T00:25:56.892Z] [BOT] 💾 Added channel posting: Associate, Content Strategy & Operations @ spotify → location channel (2 total channels)
[2026-01-31T00:25:56.892Z] [BOT] 💾 BEFORE MERGE: 800 jobs in memory (cached)
[2026-01-31T00:25:56.908Z] [BOT] ✅ Loaded V2 database: 800 jobs
💾 DISK STATE: 800 jobs on disk
[2026-01-31T00:25:56.908Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=800
[2026-01-31T00:25:56.910Z] [BOT] 🔀 Deep merged: Associate, Content Strategy & Operations @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T00:25:56.910Z] [BOT] 💾 AFTER MERGE: 800 jobs (merged disk + memory)
[2026-01-31T00:25:56.911Z] [BOT] ✅ No jobs to archive (all 800 jobs within 7-day window)
[2026-01-31T00:25:56.963Z] [BOT] 💾 Saved posted_jobs.json: 800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:01.465Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-31T00:26:01.466Z] [BOT] 📍 [ROUTING] "Future Opportunities: Accountant Sales Talent" @ gusto
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T00:26:01.841Z] [BOT] ✅ Posted message: Future Opportunities: Accountant Sales Talent @ gusto in #💰・finance-jobs
[2026-01-31T00:26:01.841Z] [BOT] ✅ Industry: Future Opportunities: Accountant Sales Talent @ gusto
[2026-01-31T00:26:01.841Z] [BOT] 💾 Added channel posting: Future Opportunities: Accountant Sales Talent @ gusto → category channel (1 total channels)
[2026-01-31T00:26:01.841Z] [BOT] 💾 BEFORE MERGE: 801 jobs in memory (cached)
[2026-01-31T00:26:01.873Z] [BOT] ✅ Loaded V2 database: 800 jobs
💾 DISK STATE: 800 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=801
[2026-01-31T00:26:01.876Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:01.876Z] [BOT] 💾 AFTER MERGE: 801 jobs (merged disk + memory)
[2026-01-31T00:26:01.876Z] [BOT] ✅ No jobs to archive (all 801 jobs within 7-day window)
[2026-01-31T00:26:01.940Z] [BOT] 💾 Saved posted_jobs.json: 801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:03.440Z] [BOT] 📍 [ROUTING] "Head of Sales Compensation" @ gusto
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T00:26:03.660Z] [BOT] ✅ Posted message: Head of Sales Compensation @ gusto in #💰・finance-jobs
  ✅ Industry: Head of Sales Compensation @ gusto
[2026-01-31T00:26:03.661Z] [BOT] 💾 Added channel posting: Head of Sales Compensation @ gusto → category channel (1 total channels)
[2026-01-31T00:26:03.661Z] [BOT] 💾 BEFORE MERGE: 802 jobs in memory (cached)
[2026-01-31T00:26:03.677Z] [BOT] ✅ Loaded V2 database: 801 jobs
💾 DISK STATE: 801 jobs on disk
[2026-01-31T00:26:03.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=802
[2026-01-31T00:26:03.679Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:03.679Z] [BOT] 💾 AFTER MERGE: 802 jobs (merged disk + memory)
[2026-01-31T00:26:03.680Z] [BOT] ✅ No jobs to archive (all 802 jobs within 7-day window)
[2026-01-31T00:26:03.739Z] [BOT] 💾 Saved posted_jobs.json: 802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:08.241Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T00:26:08.242Z] [BOT] 📍 [ROUTING] "Head of Revenue Analytics" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T00:26:08.242Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T00:26:08.655Z] [BOT] ✅ Posted message: Head of Revenue Analytics @ gusto in #📊・JID_fb739488
  ✅ Industry: Head of Revenue Analytics @ gusto
[2026-01-31T00:26:08.656Z] [BOT] 💾 Added channel posting: Head of Revenue Analytics @ gusto → category channel (1 total channels)
[2026-01-31T00:26:08.656Z] [BOT] 💾 BEFORE MERGE: 803 jobs in memory (cached)
[2026-01-31T00:26:08.672Z] [BOT] ✅ Loaded V2 database: 802 jobs
💾 DISK STATE: 802 jobs on disk
[2026-01-31T00:26:08.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=803
[2026-01-31T00:26:08.674Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 803 jobs (merged disk + memory)
[2026-01-31T00:26:08.675Z] [BOT] ✅ No jobs to archive (all 803 jobs within 7-day window)
[2026-01-31T00:26:08.727Z] [BOT] 💾 Saved posted_jobs.json: 803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:13.229Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T00:26:13.230Z] [BOT] 📍 [ROUTING] "Dedicated Service Advisor" @ gusto
[2026-01-31T00:26:13.230Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:26:13.743Z] [BOT] ✅ Posted message: Dedicated Service Advisor @ gusto in #💻・tech-jobs
[2026-01-31T00:26:13.744Z] [BOT] ✅ Industry: Dedicated Service Advisor @ gusto
[2026-01-31T00:26:13.744Z] [BOT] 💾 Added channel posting: Dedicated Service Advisor @ gusto → category channel (1 total channels)
[2026-01-31T00:26:13.744Z] [BOT] 💾 BEFORE MERGE: 804 jobs in memory (cached)
[2026-01-31T00:26:13.760Z] [BOT] ✅ Loaded V2 database: 803 jobs
💾 DISK STATE: 803 jobs on disk
[2026-01-31T00:26:13.760Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=804
[2026-01-31T00:26:13.762Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:13.762Z] [BOT] 💾 AFTER MERGE: 804 jobs (merged disk + memory)
[2026-01-31T00:26:13.763Z] [BOT] ✅ No jobs to archive (all 804 jobs within 7-day window)
[2026-01-31T00:26:13.815Z] [BOT] 💾 Saved posted_jobs.json: 804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:15.318Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2026-01-31T00:26:15.318Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:26:15.619Z] [BOT] ✅ Posted message: Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2026-01-31T00:26:15.619Z] [BOT] 💾 Added channel posting: Software Engineer - Direct To Cell @ ORG_afd623b1 → category channel (1 total channels)
💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-31T00:26:15.635Z] [BOT] ✅ Loaded V2 database: 804 jobs
💾 DISK STATE: 804 jobs on disk
[2026-01-31T00:26:15.635Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-31T00:26:15.637Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:15.637Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-31T00:26:15.638Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-31T00:26:15.690Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:17.192Z] [BOT] 📍 [ROUTING] "Newgrad Generalist Engineer" @ ORG_37e12d0f
[2026-01-31T00:26:17.192Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:26:17.490Z] [BOT] ✅ Posted message: Newgrad Generalist Engineer @ ORG_37e12d0f in #💻・tech-jobs
  ✅ Industry: Newgrad Generalist Engineer @ ORG_37e12d0f
[2026-01-31T00:26:17.491Z] [BOT] 💾 Added channel posting: Newgrad Generalist Engineer @ ORG_37e12d0f → category channel (1 total channels)
💾 BEFORE MERGE: 806 jobs in memory (cached)
[2026-01-31T00:26:17.507Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-31T00:26:17.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=806
[2026-01-31T00:26:17.509Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 806 jobs (merged disk + memory)
[2026-01-31T00:26:17.510Z] [BOT] ✅ No jobs to archive (all 806 jobs within 7-day window)
[2026-01-31T00:26:17.561Z] [BOT] 💾 Saved posted_jobs.json: 806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:19.064Z] [BOT] 📍 [ROUTING] "Software Engineer 1/2 - Digital Engineering" @ ORG_d40a5aca Lab USA
[2026-01-31T00:26:19.065Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:26:19.487Z] [BOT] ✅ Posted message: Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA in #💻・tech-jobs
[2026-01-31T00:26:19.487Z] [BOT] ✅ Industry: Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA
[2026-01-31T00:26:19.487Z] [BOT] 💾 Added channel posting: Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA → category channel (1 total channels)
💾 BEFORE MERGE: 807 jobs in memory (cached)
[2026-01-31T00:26:19.503Z] [BOT] ✅ Loaded V2 database: 806 jobs
💾 DISK STATE: 806 jobs on disk
[2026-01-31T00:26:19.504Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=807
[2026-01-31T00:26:19.506Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:19.506Z] [BOT] 💾 AFTER MERGE: 807 jobs (merged disk + memory)
[2026-01-31T00:26:19.506Z] [BOT] ✅ No jobs to archive (all 807 jobs within 7-day window)
[2026-01-31T00:26:19.559Z] [BOT] 💾 Saved posted_jobs.json: 807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:21.062Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
[2026-01-31T00:26:21.062Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T00:26:21.369Z] [BOT] ✅ Posted message: Geospatial Analyst @ ORG_eae683eb in #💻・tech-jobs
  ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-31T00:26:21.369Z] [BOT] 💾 Added channel posting: Geospatial Analyst @ ORG_eae683eb → category channel (1 total channels)
[2026-01-31T00:26:21.369Z] [BOT] 💾 BEFORE MERGE: 808 jobs in memory (cached)
[2026-01-31T00:26:21.385Z] [BOT] ✅ Loaded V2 database: 807 jobs
💾 DISK STATE: 807 jobs on disk
[2026-01-31T00:26:21.386Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=808
[2026-01-31T00:26:21.388Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T00:26:21.388Z] [BOT] 💾 AFTER MERGE: 808 jobs (merged disk + memory)
[2026-01-31T00:26:21.388Z] [BOT] ✅ No jobs to archive (all 808 jobs within 7-day window)
[2026-01-31T00:26:21.439Z] [BOT] 💾 Saved posted_jobs.json: 808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:25.941Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T00:26:25.942Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_74d11c99..." not found, but found as SHA256 "b2d852d011e0987a"
⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
[2026-01-31T00:26:25.942Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b09b532d..." not found, but found as SHA256 "ef0fb004dd0cd13f"
[2026-01-31T00:26:25.943Z] [BOT] ⏭️  Skipping duplicate: JID_f549dcde (posted within 7 days)
[2026-01-31T00:26:25.943Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7fe0920..." not found, but found as SHA256 "d0221afebabf65b1"
[2026-01-31T00:26:25.943Z] [BOT] ⏭️  Skipping duplicate: JID_3b6e0518 (posted within 7 days)
[2026-01-31T00:26:25.943Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_49af5813..." not found, but found as SHA256 "0caa0c3e33b678ac"
⏭️  Skipping duplicate: JID_53c7d17c (posted within 7 days)
[2026-01-31T00:26:25.943Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0d1fc30d..." not found, but found as SHA256 "20dcb8c92d6bf355"
[2026-01-31T00:26:25.943Z] [BOT] ⏭️  Skipping duplicate: JID_d5f24f3b (posted within 7 days)
[2026-01-31T00:26:25.943Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_73bf0ee2..." not found, but found as SHA256 "3efe14550ad8914c"
⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-31T00:26:25.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_14a0ff13..." not found, but found as SHA256 "947a9feaa178945a"
⏭️  Skipping duplicate: JID_61ca4b37 (posted within 7 days)
[2026-01-31T00:26:25.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ae2509e2..." not found, but found as SHA256 "eb04af763bb95a82"
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_67074275-..." not found, but found as SHA256 "e5898b84853000e1"
⏭️  Skipping duplicate: JID_7f784420 (posted within 7 days)
[2026-01-31T00:26:25.944Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2a5278c..." not found, but found as SHA256 "4ddaa8d4285acb36"
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
[2026-01-31T00:26:26.053Z] [BOT] ✅ Loaded pending queue: 2948 total (2133 pending, 46 enriched, 769 posted)
[2026-01-31T00:26:26.238Z] [BOT] ✅ Saved pending queue: 2948 total (2133 pending, 36 enriched, 779 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T00:26:26.238Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T00:26:26.323Z] [BOT] 📂 Loaded 10860 existing routing entries
[2026-01-31T00:26:26.468Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T00:26:26.469Z] [BOT] New entries: 10
   Total entries: 10870
   Timestamp: 2026-01-31T00:26:26.406Z
[2026-01-31T00:26:26.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T00:26:26.469Z] [BOT] Total attempts: 29
   Successful: 11
   Failed: 0
   Skipped: 18
[2026-01-31T00:26:26.470Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💰・finance-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-31T00:26:26.470Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 808 jobs in memory (cached)
[2026-01-31T00:26:26.487Z] [BOT] ✅ Loaded V2 database: 808 jobs
💾 DISK STATE: 808 jobs on disk
[2026-01-31T00:26:26.487Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=808
[2026-01-31T00:26:26.489Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 808 jobs (merged disk + memory)
[2026-01-31T00:26:26.490Z] [BOT] ✅ No jobs to archive (all 808 jobs within 7-day window)
[2026-01-31T00:26:26.543Z] [BOT] 💾 Saved posted_jobs.json: 808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T00:26:26.543Z] [BOT] ✅ Database saved successfully
[2026-01-31T00:26:28.572Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*