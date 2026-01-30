# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T01:00:06.947Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T00:59:32.793Z] ========================================
[2026-01-30T00:59:32.795Z] Discord Bot Execution Log
[2026-01-30T00:59:32.795Z] Environment: GitHub Actions
[2026-01-30T00:59:32.795Z] Node Version: v20.20.0
[2026-01-30T00:59:32.795Z] ========================================
[2026-01-30T00:59:32.795Z] Environment Variables Check:
[2026-01-30T00:59:32.795Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T00:59:32.796Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T00:59:32.796Z] 
Multi-Channel Configuration:
[2026-01-30T00:59:32.796Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.796Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.797Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T00:59:32.797Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T00:59:32.797Z] 
Data Files Check:
[2026-01-30T00:59:32.798Z] .github/data/new_jobs.json: ✅ Exists (10 items, 78850 bytes)
[2026-01-30T00:59:32.805Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1071994 bytes)
[2026-01-30T00:59:32.805Z] 
========================================
[2026-01-30T00:59:32.805Z] Starting Enhanced Discord Bot...
[2026-01-30T00:59:32.805Z] ========================================
[2026-01-30T00:59:33.322Z] [BOT] ✅ Loaded V2 database: 189 jobs
[2026-01-30T00:59:33.744Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T00:59:33.745Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T00:59:33.745Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T00:59:33.875Z] [BOT] ✅ Loaded pending queue: 2906 total (2696 pending, 50 enriched, 160 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Associate - Database Engineering & Automation at Wells Fargo
[2026-01-30T00:59:33.878Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T00:59:33.879Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T00:59:33.879Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-01-30T00:59:33.880Z] [BOT] 🚫 Skipping blacklisted job: Customer Trust Lead at anthropic
[2026-01-30T00:59:33.880Z] [BOT] 🚫 Skipping blacklisted job: Data Center Physical Security Lead at anthropic
[2026-01-30T00:59:33.880Z] [BOT] 🚫 Skipping blacklisted job: Data Center Strategic Sourcing Lead at anthropic
🚫 Skipping blacklisted job: Data Operations Manager, Computer Use & Tool Use at anthropic
[2026-01-30T00:59:33.880Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
🚫 Skipping blacklisted job: Director, Compute Infrastructure Procurement  at anthropic
🚫 Skipping blacklisted job: Director, Order Management & Billing at anthropic
🚫 Skipping blacklisted job: Engagement Manager, Applied AI at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Claude Developer Platform at anthropic
[2026-01-30T00:59:33.881Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Claude Services at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Inference Azure at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Cloud Security at anthropic
[2026-01-30T00:59:33.881Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Detection and Response at anthropic
[2026-01-30T00:59:33.985Z] [BOT] ✅ Loaded pending queue: 2906 total (2696 pending, 50 enriched, 160 posted)
[2026-01-30T00:59:34.146Z] [BOT] ✅ Saved pending queue: 2893 total (2696 pending, 37 enriched, 160 posted)
🗑️ Removed 13 blacklisted jobs from pending queue
📋 After blacklist filter: 36 jobs (13 blacklisted)
[2026-01-30T00:59:34.146Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T00:59:34.147Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-30T00:59:34.147Z] [BOT] ⏸️ Limiting to 10 jobs this run, 39 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T00:59:34.150Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-30T00:59:34.151Z] [BOT] 📍 [ROUTING] "Engineering Associate - Database Engineering & Automation" @ ORG_332e04b7 Fargo
[2026-01-30T00:59:34.151Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T00:59:34.168Z] [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T00:59:34.448Z] [BOT] ✅ Posted message: Engineering Associate - Database Engineering & Automation @ ORG_332e04b7 Fargo in #🤖・ai-jobs
[2026-01-30T00:59:34.448Z] [BOT] ✅ Industry: Engineering Associate - Database Engineering & Automation @ ORG_332e04b7 Fargo
[2026-01-30T00:59:34.448Z] [BOT] 💾 Added channel posting: Engineering Associate - Database Engineering & Automation @ ORG_332e04b7 Fargo → category channel (1 total channels)
[2026-01-30T00:59:34.449Z] [BOT] 💾 BEFORE MERGE: 190 jobs in memory (cached)
[2026-01-30T00:59:34.454Z] [BOT] ✅ Loaded V2 database: 189 jobs
💾 DISK STATE: 189 jobs on disk
[2026-01-30T00:59:34.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=190
[2026-01-30T00:59:34.455Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:59:34.455Z] [BOT] 💾 AFTER MERGE: 190 jobs (merged disk + memory)
[2026-01-30T00:59:34.455Z] [BOT] ✅ No jobs to archive (all 190 jobs within 7-day window)
[2026-01-30T00:59:34.471Z] [BOT] 💾 Saved posted_jobs.json: 190 active jobs
[2026-01-30T00:59:34.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:35.974Z] [BOT] 📍 [ROUTING] "Engineer Model-Based 1" @ ORG_81f16575ington Ingalls Industries
[2026-01-30T00:59:35.975Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T00:59:36.145Z] [BOT] ✅ Posted message: Engineer Model-Based 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
[2026-01-30T00:59:36.145Z] [BOT] ✅ Industry: Engineer Model-Based 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-30T00:59:36.145Z] [BOT] 💾 Added channel posting: Engineer Model-Based 1 @ ORG_81f16575ington Ingalls Industries → category channel (1 total channels)
💾 BEFORE MERGE: 191 jobs in memory (cached)
[2026-01-30T00:59:36.149Z] [BOT] ✅ Loaded V2 database: 190 jobs
💾 DISK STATE: 190 jobs on disk
[2026-01-30T00:59:36.149Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=191
[2026-01-30T00:59:36.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 191 jobs (merged disk + memory)
[2026-01-30T00:59:36.150Z] [BOT] ✅ No jobs to archive (all 191 jobs within 7-day window)
[2026-01-30T00:59:36.162Z] [BOT] 💾 Saved posted_jobs.json: 191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:37.663Z] [BOT] 📍 [ROUTING] "Data Analyst" @ iSoftStone
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:59:37.663Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T00:59:38.027Z] [BOT] ✅ Posted message: Data Analyst @ iSoftStone in #🤖・ai-jobs
[2026-01-30T00:59:38.027Z] [BOT] ✅ Industry: Data Analyst @ iSoftStone
💾 Added channel posting: Data Analyst @ iSoftStone → category channel (1 total channels)
[2026-01-30T00:59:38.027Z] [BOT] 💾 BEFORE MERGE: 192 jobs in memory (cached)
[2026-01-30T00:59:38.031Z] [BOT] ✅ Loaded V2 database: 191 jobs
💾 DISK STATE: 191 jobs on disk
[2026-01-30T00:59:38.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=192
[2026-01-30T00:59:38.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 192 jobs (merged disk + memory)
[2026-01-30T00:59:38.032Z] [BOT] ✅ No jobs to archive (all 192 jobs within 7-day window)
[2026-01-30T00:59:38.044Z] [BOT] 💾 Saved posted_jobs.json: 192 active jobs
[2026-01-30T00:59:38.044Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:39.545Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:59:39.545Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T00:59:39.701Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_7b717950 in #🤖・ai-jobs
[2026-01-30T00:59:39.701Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_7b717950
[2026-01-30T00:59:39.701Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_7b717950 → category channel (1 total channels)
💾 BEFORE MERGE: 193 jobs in memory (cached)
[2026-01-30T00:59:39.705Z] [BOT] ✅ Loaded V2 database: 192 jobs
💾 DISK STATE: 192 jobs on disk
[2026-01-30T00:59:39.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=193
[2026-01-30T00:59:39.706Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 193 jobs (merged disk + memory)
[2026-01-30T00:59:39.706Z] [BOT] ✅ No jobs to archive (all 193 jobs within 7-day window)
[2026-01-30T00:59:39.717Z] [BOT] 💾 Saved posted_jobs.json: 193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:41.219Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
[2026-01-30T00:59:41.219Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T00:59:41.458Z] [BOT] ✅ Posted message: Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
[2026-01-30T00:59:41.459Z] [BOT] ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-30T00:59:41.459Z] [BOT] 💾 Added channel posting: Software Engineer - Entry @ ORG_7b717950 → category channel (1 total channels)
💾 BEFORE MERGE: 194 jobs in memory (cached)
[2026-01-30T00:59:41.463Z] [BOT] ✅ Loaded V2 database: 193 jobs
💾 DISK STATE: 193 jobs on disk
[2026-01-30T00:59:41.463Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=194
[2026-01-30T00:59:41.464Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 194 jobs (merged disk + memory)
[2026-01-30T00:59:41.464Z] [BOT] ✅ No jobs to archive (all 194 jobs within 7-day window)
[2026-01-30T00:59:41.475Z] [BOT] 💾 Saved posted_jobs.json: 194 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:42.978Z] [BOT] 📍 [ROUTING] "People Partner, Research" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T00:59:43.118Z] [BOT] ✅ Posted message: People Partner, Research @ anthropic in #🤖・ai-jobs
  ✅ Industry: People Partner, Research @ anthropic
[2026-01-30T00:59:43.118Z] [BOT] 💾 Added channel posting: People Partner, Research @ anthropic → category channel (1 total channels)
[2026-01-30T00:59:43.118Z] [BOT] 💾 BEFORE MERGE: 195 jobs in memory (cached)
[2026-01-30T00:59:43.125Z] [BOT] ✅ Loaded V2 database: 194 jobs
[2026-01-30T00:59:43.125Z] [BOT] 💾 DISK STATE: 194 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=195
[2026-01-30T00:59:43.125Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:59:43.126Z] [BOT] 💾 AFTER MERGE: 195 jobs (merged disk + memory)
[2026-01-30T00:59:43.126Z] [BOT] ✅ No jobs to archive (all 195 jobs within 7-day window)
[2026-01-30T00:59:43.140Z] [BOT] 💾 Saved posted_jobs.json: 195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:47.641Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T00:59:47.642Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_1c0f1132 Caribbean Group
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T00:59:47.642Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T00:59:47.880Z] [BOT] ✅ Posted message: Data Analyst @ ORG_1c0f1132 Caribbean Group in #📊・JID_fb739488
[2026-01-30T00:59:47.880Z] [BOT] ✅ Industry: Data Analyst @ ORG_1c0f1132 Caribbean Group
[2026-01-30T00:59:47.880Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_1c0f1132 Caribbean Group → category channel (1 total channels)
[2026-01-30T00:59:47.880Z] [BOT] 💾 BEFORE MERGE: 196 jobs in memory (cached)
[2026-01-30T00:59:47.884Z] [BOT] ✅ Loaded V2 database: 195 jobs
💾 DISK STATE: 195 jobs on disk
[2026-01-30T00:59:47.884Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=196
[2026-01-30T00:59:47.885Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 196 jobs (merged disk + memory)
[2026-01-30T00:59:47.885Z] [BOT] ✅ No jobs to archive (all 196 jobs within 7-day window)
[2026-01-30T00:59:47.897Z] [BOT] 💾 Saved posted_jobs.json: 196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:52.399Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T00:59:52.399Z] [BOT] 📍 [ROUTING] "IT Software Engineer Analyst" @ ORG_41a6741einghouse Electric Company
[2026-01-30T00:59:52.399Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:59:52.664Z] [BOT] ✅ Posted message: IT Software Engineer Analyst @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: IT Software Engineer Analyst @ ORG_41a6741einghouse Electric Company
[2026-01-30T00:59:52.665Z] [BOT] 💾 Added channel posting: IT Software Engineer Analyst @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
[2026-01-30T00:59:52.665Z] [BOT] 💾 BEFORE MERGE: 197 jobs in memory (cached)
[2026-01-30T00:59:52.669Z] [BOT] ✅ Loaded V2 database: 196 jobs
💾 DISK STATE: 196 jobs on disk
[2026-01-30T00:59:52.669Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=197
[2026-01-30T00:59:52.670Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 197 jobs (merged disk + memory)
[2026-01-30T00:59:52.670Z] [BOT] ✅ No jobs to archive (all 197 jobs within 7-day window)
[2026-01-30T00:59:52.686Z] [BOT] 💾 Saved posted_jobs.json: 197 active jobs
[2026-01-30T00:59:52.686Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:54.188Z] [BOT] 📍 [ROUTING] "EA Sports Academy Software Engineer" @ ORG_a284c4f1 Arts
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T00:59:54.383Z] [BOT] ✅ Posted message: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #💻・tech-jobs
  ✅ Industry: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts
[2026-01-30T00:59:54.384Z] [BOT] 💾 Added channel posting: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts → category channel (1 total channels)
[2026-01-30T00:59:54.384Z] [BOT] 💾 BEFORE MERGE: 198 jobs in memory (cached)
[2026-01-30T00:59:54.388Z] [BOT] ✅ Loaded V2 database: 197 jobs
💾 DISK STATE: 197 jobs on disk
[2026-01-30T00:59:54.388Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=198
[2026-01-30T00:59:54.389Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 198 jobs (merged disk + memory)
[2026-01-30T00:59:54.389Z] [BOT] ✅ No jobs to archive (all 198 jobs within 7-day window)
[2026-01-30T00:59:54.404Z] [BOT] 💾 Saved posted_jobs.json: 198 active jobs
[2026-01-30T00:59:54.404Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T00:59:58.906Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T00:59:58.907Z] [BOT] 📍 [ROUTING] "Bank Systems Analyst" @ ORG_cb337902
[2026-01-30T00:59:58.907Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T00:59:59.176Z] [BOT] ✅ Posted message: Bank Systems Analyst @ ORG_cb337902 in #💰・finance-jobs
[2026-01-30T00:59:59.176Z] [BOT] ✅ Industry: Bank Systems Analyst @ ORG_cb337902
[2026-01-30T00:59:59.176Z] [BOT] 💾 Added channel posting: Bank Systems Analyst @ ORG_cb337902 → category channel (1 total channels)
[2026-01-30T00:59:59.176Z] [BOT] 💾 BEFORE MERGE: 199 jobs in memory (cached)
[2026-01-30T00:59:59.180Z] [BOT] ✅ Loaded V2 database: 198 jobs
[2026-01-30T00:59:59.181Z] [BOT] 💾 DISK STATE: 198 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=199
[2026-01-30T00:59:59.181Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T00:59:59.181Z] [BOT] 💾 AFTER MERGE: 199 jobs (merged disk + memory)
[2026-01-30T00:59:59.181Z] [BOT] ✅ No jobs to archive (all 199 jobs within 7-day window)
[2026-01-30T00:59:59.193Z] [BOT] 💾 Saved posted_jobs.json: 199 active jobs
[2026-01-30T00:59:59.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T01:00:03.696Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T01:00:03.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "8c8fd21168695bd8"
[2026-01-30T01:00:03.698Z] [BOT] ⏭️  Skipping duplicate: JID_78e52b73-automation_r-517684 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_31161a76..." not found, but found as SHA256 "8661b39711306f02"
[2026-01-30T01:00:03.698Z] [BOT] ⏭️  Skipping duplicate: JID_c0f4d284 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_04282f5f..." not found, but found as SHA256 "7559efa21fe5bdb7"
⏭️  Skipping duplicate: JID_31418a19 (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_95ccb76b..." not found, but found as SHA256 "9a2986921f46aeb0"
[2026-01-30T01:00:03.698Z] [BOT] ⏭️  Skipping duplicate: JID_612de7be (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45539a91..." not found, but found as SHA256 "2b8cbc89874248d5"
⏭️  Skipping duplicate: JID_45539a91 (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_384d442d-..." not found, but found as SHA256 "3d09b5c0325b25e4"
⏭️  Skipping duplicate: JID_1a5e411d (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9b5fffd0-..." not found, but found as SHA256 "0a6b558cdb061cf4"
⏭️  Skipping duplicate: JID_bc3a48f6 (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6e075de9-en_us-JID_11a642d9..." not found, but found as SHA256 "d4c09d37c625d51c"
⏭️  Skipping duplicate: JID_6e075de9-en_us-JID_7fe6d29e (posted within 7 days)
[2026-01-30T01:00:03.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e92dd6da22151024"
[2026-01-30T01:00:03.698Z] [BOT] ⏭️  Skipping duplicate: JID_0ac894ce (posted within 7 days)
[2026-01-30T01:00:03.699Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5b4a3c3e..." not found, but found as SHA256 "c9409adbec959354"
⏭️  Skipping duplicate: JID_5b4a3c3e (posted within 7 days)
[2026-01-30T01:00:03.816Z] [BOT] ✅ Loaded pending queue: 2893 total (2696 pending, 37 enriched, 160 posted)
[2026-01-30T01:00:04.003Z] [BOT] ✅ Saved pending queue: 2893 total (2696 pending, 27 enriched, 170 posted)
[2026-01-30T01:00:04.003Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T01:00:04.085Z] [BOT] 📂 Loaded 10251 existing routing entries
[2026-01-30T01:00:04.192Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10261
   Timestamp: 2026-01-30T01:00:04.149Z
[2026-01-30T01:00:04.192Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 24
[2026-01-30T01:00:04.193Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-30T01:00:04.193Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T01:00:04.193Z] [BOT] [STATS] Channel stats saved
[2026-01-30T01:00:04.193Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 199 jobs in memory (cached)
[2026-01-30T01:00:04.198Z] [BOT] ✅ Loaded V2 database: 199 jobs
[2026-01-30T01:00:04.198Z] [BOT] 💾 DISK STATE: 199 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=199
[2026-01-30T01:00:04.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T01:00:04.199Z] [BOT] 💾 AFTER MERGE: 199 jobs (merged disk + memory)
[2026-01-30T01:00:04.199Z] [BOT] ✅ No jobs to archive (all 199 jobs within 7-day window)
[2026-01-30T01:00:04.211Z] [BOT] 💾 Saved posted_jobs.json: 199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T01:00:04.212Z] [BOT] ✅ Database saved successfully
[2026-01-30T01:00:06.243Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*