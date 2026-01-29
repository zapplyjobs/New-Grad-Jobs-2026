# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T20:32:39.006Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T20:32:04.466Z] ========================================
[2026-01-29T20:32:04.468Z] Discord Bot Execution Log
[2026-01-29T20:32:04.468Z] Environment: GitHub Actions
[2026-01-29T20:32:04.468Z] Node Version: v20.20.0
[2026-01-29T20:32:04.468Z] ========================================
[2026-01-29T20:32:04.468Z] Environment Variables Check:
[2026-01-29T20:32:04.468Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T20:32:04.468Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.468Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T20:32:04.468Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T20:32:04.468Z] 
Multi-Channel Configuration:
[2026-01-29T20:32:04.469Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T20:32:04.469Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T20:32:04.469Z] 
Data Files Check:
[2026-01-29T20:32:04.470Z] .github/data/new_jobs.json: ✅ Exists (10 items, 122850 bytes)
[2026-01-29T20:32:04.475Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 588317 bytes)
[2026-01-29T20:32:04.475Z] 
========================================
[2026-01-29T20:32:04.475Z] Starting Enhanced Discord Bot...
[2026-01-29T20:32:04.475Z] ========================================
[2026-01-29T20:32:04.979Z] [BOT] ✅ Loaded V2 database: 109 jobs
[2026-01-29T20:32:05.579Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T20:32:05.580Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T20:32:05.580Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T20:32:05.705Z] [BOT] ✅ Loaded pending queue: 2880 total (2750 pending, 50 enriched, 80 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Talkdesk
[2026-01-29T20:32:05.709Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T20:32:05.709Z] [BOT] 🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-01-29T20:32:05.709Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics at discord
[2026-01-29T20:32:05.709Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Data Engineer, Analytics at discord
[2026-01-29T20:32:05.709Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Data Engineering Manager at discord
[2026-01-29T20:32:05.709Z] [BOT] 🚫 Skipping blacklisted job: Major Accounts Manager at datadog
[2026-01-29T20:32:05.710Z] [BOT] 🚫 Skipping blacklisted job: Senior Staff Software Engineer at gusto
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Senior Software Security Engineer at anthropic
[2026-01-29T20:32:05.838Z] [BOT] ✅ Loaded pending queue: 2880 total (2750 pending, 50 enriched, 80 posted)
[2026-01-29T20:32:06.002Z] [BOT] ✅ Saved pending queue: 2870 total (2750 pending, 40 enriched, 80 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
[2026-01-29T20:32:06.003Z] [BOT] 📋 After blacklist filter: 40 jobs (10 blacklisted)
📋 After data quality filter: 40 jobs (0 invalid)
[2026-01-29T20:32:06.004Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-01-29T20:32:06.004Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T20:32:06.004Z] [BOT] - Expansion Account Executive, Enterprise @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T20:32:06.008Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-29T20:32:06.009Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_96722387
[2026-01-29T20:32:06.009Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:32:06.026Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T20:32:06.253Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_96722387 in #💻・tech-jobs
[2026-01-29T20:32:06.253Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_96722387
[2026-01-29T20:32:06.253Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_96722387 → category channel (1 total channels)
[2026-01-29T20:32:06.254Z] [BOT] 💾 BEFORE MERGE: 110 jobs in memory (cached)
[2026-01-29T20:32:06.256Z] [BOT] ✅ Loaded V2 database: 109 jobs
[2026-01-29T20:32:06.256Z] [BOT] 💾 DISK STATE: 109 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=110
[2026-01-29T20:32:06.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:06.257Z] [BOT] 💾 AFTER MERGE: 110 jobs (merged disk + memory)
[2026-01-29T20:32:06.257Z] [BOT] ✅ No jobs to archive (all 110 jobs within 7-day window)
[2026-01-29T20:32:06.268Z] [BOT] 💾 Saved posted_jobs.json: 110 active jobs
[2026-01-29T20:32:06.268Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:07.769Z] [BOT] 📍 [ROUTING] "Head of GTM Process & Tooling" @ gusto
[2026-01-29T20:32:07.769Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:32:07.956Z] [BOT] ✅ Posted message: Head of GTM Process & Tooling @ gusto in #💻・tech-jobs
[2026-01-29T20:32:07.956Z] [BOT] ✅ Industry: Head of GTM Process & Tooling @ gusto
[2026-01-29T20:32:07.956Z] [BOT] 💾 Added channel posting: Head of GTM Process & Tooling @ gusto → category channel (1 total channels)
[2026-01-29T20:32:07.956Z] [BOT] 💾 BEFORE MERGE: 111 jobs in memory (cached)
[2026-01-29T20:32:07.958Z] [BOT] ✅ Loaded V2 database: 110 jobs
[2026-01-29T20:32:07.959Z] [BOT] 💾 DISK STATE: 110 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=111
[2026-01-29T20:32:07.959Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:07.959Z] [BOT] 💾 AFTER MERGE: 111 jobs (merged disk + memory)
[2026-01-29T20:32:07.959Z] [BOT] ✅ No jobs to archive (all 111 jobs within 7-day window)
[2026-01-29T20:32:07.966Z] [BOT] 💾 Saved posted_jobs.json: 111 active jobs
[2026-01-29T20:32:07.967Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:09.466Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ figma
[2026-01-29T20:32:09.466Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:32:09.743Z] [BOT] ✅ Posted message: Solutions Consultant @ figma in #💻・tech-jobs
[2026-01-29T20:32:09.743Z] [BOT] ✅ Industry: Solutions Consultant @ figma
[2026-01-29T20:32:09.743Z] [BOT] 💾 Added channel posting: Solutions Consultant @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 112 jobs in memory (cached)
[2026-01-29T20:32:09.745Z] [BOT] ✅ Loaded V2 database: 111 jobs
💾 DISK STATE: 111 jobs on disk
[2026-01-29T20:32:09.745Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=112
[2026-01-29T20:32:09.746Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:09.746Z] [BOT] 💾 AFTER MERGE: 112 jobs (merged disk + memory)
[2026-01-29T20:32:09.746Z] [BOT] ✅ No jobs to archive (all 112 jobs within 7-day window)
[2026-01-29T20:32:09.753Z] [BOT] 💾 Saved posted_jobs.json: 112 active jobs
[2026-01-29T20:32:09.753Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:11.254Z] [BOT] 📍 [ROUTING] "Software Engineer, Sandboxing" @ anthropic
[2026-01-29T20:32:11.254Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:32:11.471Z] [BOT] ✅ Posted message: Software Engineer, Sandboxing @ anthropic in #💻・tech-jobs
[2026-01-29T20:32:11.471Z] [BOT] ✅ Industry: Software Engineer, Sandboxing @ anthropic
[2026-01-29T20:32:11.471Z] [BOT] 💾 Added channel posting: Software Engineer, Sandboxing @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 113 jobs in memory (cached)
[2026-01-29T20:32:11.473Z] [BOT] ✅ Loaded V2 database: 112 jobs
💾 DISK STATE: 112 jobs on disk
[2026-01-29T20:32:11.473Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=113
[2026-01-29T20:32:11.474Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:11.474Z] [BOT] 💾 AFTER MERGE: 113 jobs (merged disk + memory)
[2026-01-29T20:32:11.474Z] [BOT] ✅ No jobs to archive (all 113 jobs within 7-day window)
[2026-01-29T20:32:11.481Z] [BOT] 💾 Saved posted_jobs.json: 113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:12.982Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Integration Engineer I" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T20:32:13.376Z] [BOT] ✅ Posted message: 2026 Full-time - Software Integration Engineer I @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-time - Software Integration Engineer I @ ORG_75f04b84
[2026-01-29T20:32:13.376Z] [BOT] 💾 Added channel posting: 2026 Full-time - Software Integration Engineer I @ ORG_75f04b84 → category channel (1 total channels)
💾 BEFORE MERGE: 114 jobs in memory (cached)
[2026-01-29T20:32:13.379Z] [BOT] ✅ Loaded V2 database: 113 jobs
💾 DISK STATE: 113 jobs on disk
[2026-01-29T20:32:13.379Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=114
[2026-01-29T20:32:13.379Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 114 jobs (merged disk + memory)
[2026-01-29T20:32:13.379Z] [BOT] ✅ No jobs to archive (all 114 jobs within 7-day window)
[2026-01-29T20:32:13.386Z] [BOT] 💾 Saved posted_jobs.json: 114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:17.888Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-29T20:32:17.889Z] [BOT] 📍 [ROUTING] "GIS Mapper 1" @ ORG_3d4cddd0 County
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T20:32:18.102Z] [BOT] ✅ Posted message: GIS Mapper 1 @ ORG_3d4cddd0 County in #💰・finance-jobs
  ✅ Industry: GIS Mapper 1 @ ORG_3d4cddd0 County
[2026-01-29T20:32:18.102Z] [BOT] 💾 Added channel posting: GIS Mapper 1 @ ORG_3d4cddd0 County → category channel (1 total channels)
[2026-01-29T20:32:18.103Z] [BOT] 💾 BEFORE MERGE: 115 jobs in memory (cached)
[2026-01-29T20:32:18.106Z] [BOT] ✅ Loaded V2 database: 114 jobs
[2026-01-29T20:32:18.106Z] [BOT] 💾 DISK STATE: 114 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=115
[2026-01-29T20:32:18.107Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 115 jobs (merged disk + memory)
[2026-01-29T20:32:18.107Z] [BOT] ✅ No jobs to archive (all 115 jobs within 7-day window)
[2026-01-29T20:32:18.116Z] [BOT] 💾 Saved posted_jobs.json: 115 active jobs
[2026-01-29T20:32:18.116Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:19.616Z] [BOT] 📍 [ROUTING] "Global Enterprise Account Executive" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T20:32:19.809Z] [BOT] ✅ Posted message: Global Enterprise Account Executive @ verkada in #💰・finance-jobs
[2026-01-29T20:32:19.809Z] [BOT] ✅ Industry: Global Enterprise Account Executive @ verkada
[2026-01-29T20:32:19.809Z] [BOT] 💾 Added channel posting: Global Enterprise Account Executive @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 116 jobs in memory (cached)
[2026-01-29T20:32:19.812Z] [BOT] ✅ Loaded V2 database: 115 jobs
[2026-01-29T20:32:19.812Z] [BOT] 💾 DISK STATE: 115 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=116
[2026-01-29T20:32:19.813Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:19.813Z] [BOT] 💾 AFTER MERGE: 116 jobs (merged disk + memory)
[2026-01-29T20:32:19.813Z] [BOT] ✅ No jobs to archive (all 116 jobs within 7-day window)
[2026-01-29T20:32:19.822Z] [BOT] 💾 Saved posted_jobs.json: 116 active jobs
[2026-01-29T20:32:19.822Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:24.322Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-29T20:32:24.322Z] [BOT] 📍 [ROUTING] "Data Science 1 - Product Data Science" @ ORG_28d3793c
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-29T20:32:24.322Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:32:24.519Z] [BOT] ✅ Posted message: Data Science 1 - Product Data Science @ ORG_28d3793c in #📊・JID_fb739488
[2026-01-29T20:32:24.519Z] [BOT] ✅ Industry: Data Science 1 - Product Data Science @ ORG_28d3793c
[2026-01-29T20:32:24.519Z] [BOT] 💾 Added channel posting: Data Science 1 - Product Data Science @ ORG_28d3793c → category channel (1 total channels)
💾 BEFORE MERGE: 117 jobs in memory (cached)
[2026-01-29T20:32:24.522Z] [BOT] ✅ Loaded V2 database: 116 jobs
[2026-01-29T20:32:24.522Z] [BOT] 💾 DISK STATE: 116 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=117
[2026-01-29T20:32:24.522Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:24.522Z] [BOT] 💾 AFTER MERGE: 117 jobs (merged disk + memory)
✅ No jobs to archive (all 117 jobs within 7-day window)
[2026-01-29T20:32:24.531Z] [BOT] 💾 Saved posted_jobs.json: 117 active jobs
[2026-01-29T20:32:24.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:26.032Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Frontend (2-8 YOE)" @ airtable
[2026-01-29T20:32:26.033Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T20:32:26.214Z] [BOT] ✅ Posted message: Software Engineer, Product Frontend (2-8 YOE) @ airtable in #📊・JID_fb739488
[2026-01-29T20:32:26.214Z] [BOT] ✅ Industry: Software Engineer, Product Frontend (2-8 YOE) @ airtable
[2026-01-29T20:32:26.214Z] [BOT] 💾 Added channel posting: Software Engineer, Product Frontend (2-8 YOE) @ airtable → category channel (1 total channels)
💾 BEFORE MERGE: 118 jobs in memory (cached)
[2026-01-29T20:32:26.216Z] [BOT] ✅ Loaded V2 database: 117 jobs
[2026-01-29T20:32:26.216Z] [BOT] 💾 DISK STATE: 117 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=118
[2026-01-29T20:32:26.217Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:26.217Z] [BOT] 💾 AFTER MERGE: 118 jobs (merged disk + memory)
[2026-01-29T20:32:26.217Z] [BOT] ✅ No jobs to archive (all 118 jobs within 7-day window)
[2026-01-29T20:32:26.224Z] [BOT] 💾 Saved posted_jobs.json: 118 active jobs
[2026-01-29T20:32:26.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:30.728Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-29T20:32:30.729Z] [BOT] 📍 [ROUTING] "Power Methodology and Modeling Engineer – New College Grad" @ ORG_0890f456
[2026-01-29T20:32:30.729Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T20:32:30.994Z] [BOT] ✅ Posted message: Power Methodology and Modeling Engineer – New College Grad @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-29T20:32:30.994Z] [BOT] ✅ Industry: Power Methodology and Modeling Engineer – New College Grad @ ORG_0890f456
[2026-01-29T20:32:30.995Z] [BOT] 💾 Added channel posting: Power Methodology and Modeling Engineer – New College Grad @ ORG_0890f456 → category channel (1 total channels)
[2026-01-29T20:32:30.995Z] [BOT] 💾 BEFORE MERGE: 119 jobs in memory (cached)
[2026-01-29T20:32:30.998Z] [BOT] ✅ Loaded V2 database: 118 jobs
[2026-01-29T20:32:30.998Z] [BOT] 💾 DISK STATE: 118 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=119
[2026-01-29T20:32:30.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:30.998Z] [BOT] 💾 AFTER MERGE: 119 jobs (merged disk + memory)
[2026-01-29T20:32:30.999Z] [BOT] ✅ No jobs to archive (all 119 jobs within 7-day window)
[2026-01-29T20:32:31.008Z] [BOT] 💾 Saved posted_jobs.json: 119 active jobs
[2026-01-29T20:32:31.008Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T20:32:35.511Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T20:32:35.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4021e47..." not found, but found as SHA256 "35bd133fa6a0201b"
[2026-01-29T20:32:35.512Z] [BOT] ⏭️  Skipping duplicate: JID_f4021e47 (posted within 7 days)
[2026-01-29T20:32:35.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2fee24c2..." not found, but found as SHA256 "861f373b7dc06c1f"
⏭️  Skipping duplicate: JID_3f3c5d88-i_jr102093 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_05e9cef5..." not found, but found as SHA256 "55f6e22020b6cb4d"
⏭️  Skipping duplicate: JID_f229c33e (posted within 7 days)
[2026-01-29T20:32:35.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "08fc0b5908fd370a"
⏭️  Skipping duplicate: JID_958618fb-2026_jr2012047 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "ecbe3281d399d631"
[2026-01-29T20:32:35.512Z] [BOT] ⏭️  Skipping duplicate: JID_b2bcdce2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5cfafdaa..." not found, but found as SHA256 "5b487680afa2252d"
⏭️  Skipping duplicate: JID_d7a563b6 (posted within 7 days)
[2026-01-29T20:32:35.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5f14ab83..." not found, but found as SHA256 "c742d3268f16f7b5"
⏭️  Skipping duplicate: JID_853975cb (posted within 7 days)
[2026-01-29T20:32:35.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fca294811e0eae75"
⏭️  Skipping duplicate: JID_05fb6000 (posted within 7 days)
[2026-01-29T20:32:35.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6957dde4-rec_rtx_e..." not found, but found as SHA256 "8e8213128e8595c1"
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_45e38bb9-_01819844 (posted within 7 days)
[2026-01-29T20:32:35.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de1dbee..." not found, but found as SHA256 "51713c6224eae042"
⏭️  Skipping duplicate: JID_5a3cb3c9 (posted within 7 days)
[2026-01-29T20:32:35.625Z] [BOT] ✅ Loaded pending queue: 2870 total (2750 pending, 40 enriched, 80 posted)
[2026-01-29T20:32:35.811Z] [BOT] ✅ Saved pending queue: 2870 total (2750 pending, 30 enriched, 90 posted)
[2026-01-29T20:32:35.811Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T20:32:35.890Z] [BOT] 📂 Loaded 10171 existing routing entries
[2026-01-29T20:32:35.996Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10181
[2026-01-29T20:32:35.996Z] [BOT] Timestamp: 2026-01-29T20:32:35.955Z
[2026-01-29T20:32:35.997Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 20
   Successful: 10
   Failed: 0
   Skipped: 10
[2026-01-29T20:32:35.997Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T20:32:35.997Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-29T20:32:35.997Z] [BOT] 2. #💰・finance-jobs: 2 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-29T20:32:35.997Z] [BOT] [STATS] Channel stats saved
[2026-01-29T20:32:35.997Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 119 jobs in memory (cached)
[2026-01-29T20:32:36.001Z] [BOT] ✅ Loaded V2 database: 119 jobs
[2026-01-29T20:32:36.001Z] [BOT] 💾 DISK STATE: 119 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=119
[2026-01-29T20:32:36.001Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T20:32:36.001Z] [BOT] 💾 AFTER MERGE: 119 jobs (merged disk + memory)
[2026-01-29T20:32:36.002Z] [BOT] ✅ No jobs to archive (all 119 jobs within 7-day window)
[2026-01-29T20:32:36.009Z] [BOT] 💾 Saved posted_jobs.json: 119 active jobs
[2026-01-29T20:32:36.010Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T20:32:38.038Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*