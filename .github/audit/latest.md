# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T22:05:19.915Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T22:04:45.462Z] ========================================
[2026-01-29T22:04:45.464Z] Discord Bot Execution Log
[2026-01-29T22:04:45.464Z] Environment: GitHub Actions
[2026-01-29T22:04:45.464Z] Node Version: v20.20.0
[2026-01-29T22:04:45.464Z] ========================================
[2026-01-29T22:04:45.464Z] Environment Variables Check:
[2026-01-29T22:04:45.464Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T22:04:45.464Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.464Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T22:04:45.465Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T22:04:45.465Z] 
Multi-Channel Configuration:
[2026-01-29T22:04:45.465Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T22:04:45.465Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T22:04:45.466Z] 
Data Files Check:
[2026-01-29T22:04:45.466Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44156 bytes)
[2026-01-29T22:04:45.471Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 716623 bytes)
[2026-01-29T22:04:45.471Z] 
========================================
[2026-01-29T22:04:45.471Z] Starting Enhanced Discord Bot...
[2026-01-29T22:04:45.471Z] ========================================
[2026-01-29T22:04:46.003Z] [BOT] ✅ Loaded V2 database: 129 jobs
[2026-01-29T22:04:46.606Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T22:04:46.606Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T22:04:46.606Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T22:04:46.722Z] [BOT] ✅ Loaded pending queue: 2883 total (2733 pending, 50 enriched, 100 posted)
[2026-01-29T22:04:46.722Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Search Quality Rater at Welocalize
[2026-01-29T22:04:46.726Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T22:04:46.727Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Application Security Platform at datadog
[2026-01-29T22:04:46.727Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Cloud Foundations at datadog
[2026-01-29T22:04:46.727Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Backstage at spotify
🚫 Skipping blacklisted job: Staff Product Designer - AI Observability at datadog
[2026-01-29T22:04:46.727Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Design Engineer II at samsara
🚫 Skipping blacklisted job: Event Security Program Manager at anthropic
[2026-01-29T22:04:46.728Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Revenue Accounting at gusto
🚫 Skipping blacklisted job: Product Public Policy Manager, Privacy & Data Governance at anthropic
🚫 Skipping blacklisted job: Public Policy, Events Lead at anthropic
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-29T22:04:46.834Z] [BOT] ✅ Loaded pending queue: 2883 total (2733 pending, 50 enriched, 100 posted)
[2026-01-29T22:04:47.003Z] [BOT] ✅ Saved pending queue: 2872 total (2733 pending, 39 enriched, 100 posted)
[2026-01-29T22:04:47.004Z] [BOT] 🗑️ Removed 11 blacklisted jobs from pending queue
📋 After blacklist filter: 39 jobs (11 blacklisted)
📋 After data quality filter: 39 jobs (0 invalid)
[2026-01-29T22:04:47.005Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-29T22:04:47.005Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
[2026-01-29T22:04:47.005Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T22:04:47.008Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-29T22:04:47.009Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
[2026-01-29T22:04:47.009Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:04:47.026Z] [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T22:04:47.551Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
[2026-01-29T22:04:47.551Z] [BOT] ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-29T22:04:47.552Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_066855bc → category channel (1 total channels)
[2026-01-29T22:04:47.552Z] [BOT] 💾 BEFORE MERGE: 130 jobs in memory (cached)
[2026-01-29T22:04:47.556Z] [BOT] ✅ Loaded V2 database: 129 jobs
💾 DISK STATE: 129 jobs on disk
[2026-01-29T22:04:47.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=130
[2026-01-29T22:04:47.557Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:04:47.557Z] [BOT] 💾 AFTER MERGE: 130 jobs (merged disk + memory)
[2026-01-29T22:04:47.557Z] [BOT] ✅ No jobs to archive (all 130 jobs within 7-day window)
[2026-01-29T22:04:47.570Z] [BOT] 💾 Saved posted_jobs.json: 130 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:04:49.072Z] [BOT] 📍 [ROUTING] "Front End Software Engineer" @ ORG_e44a6f65
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:04:49.360Z] [BOT] ✅ Posted message: Front End Software Engineer @ ORG_e44a6f65 in #💻・tech-jobs
[2026-01-29T22:04:49.360Z] [BOT] ✅ Industry: Front End Software Engineer @ ORG_e44a6f65
💾 Added channel posting: Front End Software Engineer @ ORG_e44a6f65 → category channel (1 total channels)
[2026-01-29T22:04:49.360Z] [BOT] 💾 BEFORE MERGE: 131 jobs in memory (cached)
[2026-01-29T22:04:49.363Z] [BOT] ✅ Loaded V2 database: 130 jobs
[2026-01-29T22:04:49.363Z] [BOT] 💾 DISK STATE: 130 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=131
[2026-01-29T22:04:49.363Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:04:49.363Z] [BOT] 💾 AFTER MERGE: 131 jobs (merged disk + memory)
[2026-01-29T22:04:49.364Z] [BOT] ✅ No jobs to archive (all 131 jobs within 7-day window)
[2026-01-29T22:04:49.371Z] [BOT] 💾 Saved posted_jobs.json: 131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:04:50.873Z] [BOT] 📍 [ROUTING] "ERP Software Engineer" @ ORG_52b67b60 Grand Technologies
[2026-01-29T22:04:50.874Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:04:51.074Z] [BOT] ✅ Posted message: ERP Software Engineer @ ORG_52b67b60 Grand Technologies in #💻・tech-jobs
[2026-01-29T22:04:51.074Z] [BOT] ✅ Industry: ERP Software Engineer @ ORG_52b67b60 Grand Technologies
💾 Added channel posting: ERP Software Engineer @ ORG_52b67b60 Grand Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 132 jobs in memory (cached)
[2026-01-29T22:04:51.077Z] [BOT] ✅ Loaded V2 database: 131 jobs
[2026-01-29T22:04:51.077Z] [BOT] 💾 DISK STATE: 131 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=132
[2026-01-29T22:04:51.078Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:04:51.078Z] [BOT] 💾 AFTER MERGE: 132 jobs (merged disk + memory)
[2026-01-29T22:04:51.078Z] [BOT] ✅ No jobs to archive (all 132 jobs within 7-day window)
[2026-01-29T22:04:51.086Z] [BOT] 💾 Saved posted_jobs.json: 132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:04:52.588Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:04:52.843Z] [BOT] ✅ Posted message: Software Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
[2026-01-29T22:04:52.843Z] [BOT] ✅ Industry: Software Engineer @ ORG_41a6741einghouse Electric Company
💾 Added channel posting: Software Engineer @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
💾 BEFORE MERGE: 133 jobs in memory (cached)
[2026-01-29T22:04:52.847Z] [BOT] ✅ Loaded V2 database: 132 jobs
💾 DISK STATE: 132 jobs on disk
[2026-01-29T22:04:52.847Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=133
[2026-01-29T22:04:52.847Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 133 jobs (merged disk + memory)
[2026-01-29T22:04:52.847Z] [BOT] ✅ No jobs to archive (all 133 jobs within 7-day window)
[2026-01-29T22:04:52.857Z] [BOT] 💾 Saved posted_jobs.json: 133 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:04:57.359Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T22:04:57.360Z] [BOT] 📍 [ROUTING] "Data Scientist - Junior" @ ORG_39417f32 Allen
[2026-01-29T22:04:57.360Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T22:04:57.692Z] [BOT] ✅ Posted message: Data Scientist - Junior @ ORG_39417f32 Allen in #🤖・ai-jobs
[2026-01-29T22:04:57.692Z] [BOT] ✅ Industry: Data Scientist - Junior @ ORG_39417f32 Allen
💾 Added channel posting: Data Scientist - Junior @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-29T22:04:57.692Z] [BOT] 💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-29T22:04:57.697Z] [BOT] ✅ Loaded V2 database: 133 jobs
[2026-01-29T22:04:57.697Z] [BOT] 💾 DISK STATE: 133 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-29T22:04:57.697Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:04:57.697Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-29T22:04:57.698Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-29T22:04:57.708Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2026-01-29T22:04:57.708Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:04:59.210Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
[2026-01-29T22:04:59.210Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:04:59.430Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28
[2026-01-29T22:04:59.430Z] [BOT] 💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-29T22:04:59.430Z] [BOT] 💾 BEFORE MERGE: 135 jobs in memory (cached)
[2026-01-29T22:04:59.434Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-29T22:04:59.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=135
[2026-01-29T22:04:59.434Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:04:59.434Z] [BOT] 💾 AFTER MERGE: 135 jobs (merged disk + memory)
[2026-01-29T22:04:59.434Z] [BOT] ✅ No jobs to archive (all 135 jobs within 7-day window)
[2026-01-29T22:04:59.444Z] [BOT] 💾 Saved posted_jobs.json: 135 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:01.284Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-01-29T22:05:01.284Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28 → location channel (2 total channels)
[2026-01-29T22:05:01.284Z] [BOT] 💾 BEFORE MERGE: 135 jobs in memory (cached)
[2026-01-29T22:05:01.290Z] [BOT] ✅ Loaded V2 database: 135 jobs
[2026-01-29T22:05:01.290Z] [BOT] 💾 DISK STATE: 135 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=135
[2026-01-29T22:05:01.290Z] [BOT] 🔀 Deep merged: Software Engineer Data/AI/Intelligent Systems 2 - Full Time - United States @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
[2026-01-29T22:05:01.290Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 135 jobs (merged disk + memory)
[2026-01-29T22:05:01.291Z] [BOT] ✅ No jobs to archive (all 135 jobs within 7-day window)
[2026-01-29T22:05:01.300Z] [BOT] 💾 Saved posted_jobs.json: 135 active jobs
[2026-01-29T22:05:01.300Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:02.801Z] [BOT] 📍 [ROUTING] "Research Scientist - AI for Graphics and Gaming" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-29T22:05:02.801Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:05:03.089Z] [BOT] ✅ Posted message: Research Scientist - AI for Graphics and Gaming @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist - AI for Graphics and Gaming @ ORG_0890f456
[2026-01-29T22:05:03.089Z] [BOT] 💾 Added channel posting: Research Scientist - AI for Graphics and Gaming @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 136 jobs in memory (cached)
[2026-01-29T22:05:03.092Z] [BOT] ✅ Loaded V2 database: 135 jobs
[2026-01-29T22:05:03.092Z] [BOT] 💾 DISK STATE: 135 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=136
[2026-01-29T22:05:03.093Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:05:03.093Z] [BOT] 💾 AFTER MERGE: 136 jobs (merged disk + memory)
[2026-01-29T22:05:03.093Z] [BOT] ✅ No jobs to archive (all 136 jobs within 7-day window)
[2026-01-29T22:05:03.101Z] [BOT] 💾 Saved posted_jobs.json: 136 active jobs
[2026-01-29T22:05:03.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:07.604Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-29T22:05:07.604Z] [BOT] 📍 [ROUTING] "Associate Accounting Data Analyst/Accounting Data Analyst" @ ORG_75f52a98 Petroleum
[2026-01-29T22:05:07.604Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-29T22:05:07.605Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T22:05:07.912Z] [BOT] ✅ Posted message: Associate Accounting Data Analyst/Accounting Data Analyst @ ORG_75f52a98 Petroleum in #📊・JID_fb739488
[2026-01-29T22:05:07.913Z] [BOT] ✅ Industry: Associate Accounting Data Analyst/Accounting Data Analyst @ ORG_75f52a98 Petroleum
[2026-01-29T22:05:07.913Z] [BOT] 💾 Added channel posting: Associate Accounting Data Analyst/Accounting Data Analyst @ ORG_75f52a98 Petroleum → category channel (1 total channels)
[2026-01-29T22:05:07.913Z] [BOT] 💾 BEFORE MERGE: 137 jobs in memory (cached)
[2026-01-29T22:05:07.916Z] [BOT] ✅ Loaded V2 database: 136 jobs
💾 DISK STATE: 136 jobs on disk
[2026-01-29T22:05:07.917Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=137
[2026-01-29T22:05:07.917Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:05:07.917Z] [BOT] 💾 AFTER MERGE: 137 jobs (merged disk + memory)
[2026-01-29T22:05:07.917Z] [BOT] ✅ No jobs to archive (all 137 jobs within 7-day window)
[2026-01-29T22:05:07.928Z] [BOT] 💾 Saved posted_jobs.json: 137 active jobs
[2026-01-29T22:05:07.928Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:09.429Z] [BOT] 📍 [ROUTING] "Planning Analytics and Risk Management Associate Data Scientist - Innovation" @ ORG_aacf2bc5innati Financial
[2026-01-29T22:05:09.429Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T22:05:09.728Z] [BOT] ✅ Posted message: Planning Analytics and Risk Management Associate Data Scientist - Innovation @ ORG_aacf2bc5innati Financial in #📊・JID_fb739488
[2026-01-29T22:05:09.728Z] [BOT] ✅ Industry: Planning Analytics and Risk Management Associate Data Scientist - Innovation @ ORG_aacf2bc5innati Financial
[2026-01-29T22:05:09.729Z] [BOT] 💾 Added channel posting: Planning Analytics and Risk Management Associate Data Scientist - Innovation @ ORG_aacf2bc5innati Financial → category channel (1 total channels)
[2026-01-29T22:05:09.729Z] [BOT] 💾 BEFORE MERGE: 138 jobs in memory (cached)
[2026-01-29T22:05:09.732Z] [BOT] ✅ Loaded V2 database: 137 jobs
💾 DISK STATE: 137 jobs on disk
[2026-01-29T22:05:09.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=138
[2026-01-29T22:05:09.732Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:05:09.733Z] [BOT] 💾 AFTER MERGE: 138 jobs (merged disk + memory)
[2026-01-29T22:05:09.733Z] [BOT] ✅ No jobs to archive (all 138 jobs within 7-day window)
[2026-01-29T22:05:09.743Z] [BOT] 💾 Saved posted_jobs.json: 138 active jobs
[2026-01-29T22:05:09.743Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:11.245Z] [BOT] 📍 [ROUTING] "Programmer Analyst - Marketing Analytics" @ ORG_9dc72f07 USA
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-29T22:05:11.245Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T22:05:11.549Z] [BOT] ✅ Posted message: Programmer Analyst - Marketing Analytics @ ORG_9dc72f07 USA in #📊・JID_fb739488
[2026-01-29T22:05:11.549Z] [BOT] ✅ Industry: Programmer Analyst - Marketing Analytics @ ORG_9dc72f07 USA
[2026-01-29T22:05:11.549Z] [BOT] 💾 Added channel posting: Programmer Analyst - Marketing Analytics @ ORG_9dc72f07 USA → category channel (1 total channels)
💾 BEFORE MERGE: 139 jobs in memory (cached)
[2026-01-29T22:05:11.552Z] [BOT] ✅ Loaded V2 database: 138 jobs
[2026-01-29T22:05:11.552Z] [BOT] 💾 DISK STATE: 138 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=139
[2026-01-29T22:05:11.553Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:05:11.553Z] [BOT] 💾 AFTER MERGE: 139 jobs (merged disk + memory)
[2026-01-29T22:05:11.553Z] [BOT] ✅ No jobs to archive (all 139 jobs within 7-day window)
[2026-01-29T22:05:11.562Z] [BOT] 💾 Saved posted_jobs.json: 139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:16.063Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T22:05:16.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f1c0291c..." not found, but found as SHA256 "a266544e9c09c751"
[2026-01-29T22:05:16.064Z] [BOT] ⏭️  Skipping duplicate: JID_0940be93-rater_r0005879 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_74c79d06..." not found, but found as SHA256 "cf9ab4ddf1b8867e"
[2026-01-29T22:05:16.064Z] [BOT] ⏭️  Skipping duplicate: JID_74c79d06 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f3b88256a0538518"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_db055c93-junior_r0232545 (posted within 7 days)
[2026-01-29T22:05:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_daa4c3c8..." not found, but found as SHA256 "5f9eefbcbd640b17"
[2026-01-29T22:05:16.065Z] [BOT] ⏭️  Skipping duplicate: JID_8b2ac053-analyst_00020199 (posted within 7 days)
[2026-01-29T22:05:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3541794..." not found, but found as SHA256 "b12929bd47d80604"
⏭️  Skipping duplicate: JID_c80d7ff7 (posted within 7 days)
[2026-01-29T22:05:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f99779f1..." not found, but found as SHA256 "d4ec07e5bafe6969"
⏭️  Skipping duplicate: JID_f99779f1 (posted within 7 days)
[2026-01-29T22:05:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c6aedae5..." not found, but found as SHA256 "2c3fc544b5e1dbec"
[2026-01-29T22:05:16.065Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "44291738e2d5d323"
⏭️  Skipping duplicate: JID_a1fd3a2b-2026_jr2011267 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_08217803..." not found, but found as SHA256 "0f15695008729022"
⏭️  Skipping duplicate: JID_ca326cae (posted within 7 days)
[2026-01-29T22:05:16.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55980a77..." not found, but found as SHA256 "75ec3e9c2e2b8992"
⏭️  Skipping duplicate: JID_3b28e712 (posted within 7 days)
[2026-01-29T22:05:16.185Z] [BOT] ✅ Loaded pending queue: 2872 total (2733 pending, 39 enriched, 100 posted)
[2026-01-29T22:05:16.363Z] [BOT] ✅ Saved pending queue: 2872 total (2733 pending, 29 enriched, 110 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T22:05:16.364Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T22:05:16.464Z] [BOT] 📂 Loaded 10191 existing routing entries
[2026-01-29T22:05:16.570Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T22:05:16.570Z] [BOT] Total entries: 10201
   Timestamp: 2026-01-29T22:05:16.527Z
[2026-01-29T22:05:16.570Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T22:05:16.570Z] [BOT] Total attempts: 22
   Successful: 11
   Failed: 0
   Skipped: 11
[2026-01-29T22:05:16.571Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T22:05:16.571Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 3 posts
[2026-01-29T22:05:16.571Z] [BOT] 4. #🗽・JID_98d4f0de: 1 posts
[2026-01-29T22:05:16.571Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T22:05:16.571Z] [BOT] 💾 BEFORE MERGE: 139 jobs in memory (cached)
[2026-01-29T22:05:16.574Z] [BOT] ✅ Loaded V2 database: 139 jobs
💾 DISK STATE: 139 jobs on disk
[2026-01-29T22:05:16.574Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=139
[2026-01-29T22:05:16.575Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:05:16.575Z] [BOT] 💾 AFTER MERGE: 139 jobs (merged disk + memory)
[2026-01-29T22:05:16.575Z] [BOT] ✅ No jobs to archive (all 139 jobs within 7-day window)
[2026-01-29T22:05:16.584Z] [BOT] 💾 Saved posted_jobs.json: 139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:05:16.585Z] [BOT] ✅ Database saved successfully
[2026-01-29T22:05:18.612Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*