# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T02:45:26.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T02:44:53.446Z] ========================================
[2026-01-30T02:44:53.448Z] Discord Bot Execution Log
[2026-01-30T02:44:53.448Z] Environment: GitHub Actions
[2026-01-30T02:44:53.448Z] Node Version: v20.20.0
[2026-01-30T02:44:53.448Z] ========================================
[2026-01-30T02:44:53.448Z] Environment Variables Check:
[2026-01-30T02:44:53.448Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T02:44:53.448Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.448Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T02:44:53.448Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T02:44:53.448Z] 
Multi-Channel Configuration:
[2026-01-30T02:44:53.448Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.448Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.448Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.448Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T02:44:53.449Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T02:44:53.449Z] 
Data Files Check:
[2026-01-30T02:44:53.451Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190466 bytes)
[2026-01-30T02:44:53.459Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1217150 bytes)
[2026-01-30T02:44:53.459Z] 
========================================
[2026-01-30T02:44:53.459Z] Starting Enhanced Discord Bot...
[2026-01-30T02:44:53.459Z] ========================================
[2026-01-30T02:44:53.932Z] [BOT] ✅ Loaded V2 database: 209 jobs
[2026-01-30T02:44:54.638Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T02:44:54.638Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T02:44:54.638Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T02:44:54.794Z] [BOT] ✅ Loaded pending queue: 2916 total (2686 pending, 50 enriched, 180 posted)
[2026-01-30T02:44:54.794Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T02:44:54.794Z] [BOT] [BOT] 🔍 Sample enriched job: Biological Safety Research Scientist at anthropic
[2026-01-30T02:44:54.796Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T02:44:54.797Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T02:44:54.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T02:44:54.798Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T02:44:54.799Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T02:44:54.799Z] [BOT] 🚫 Skipping blacklisted job: Founding Developer Relations Lead at anthropic
[2026-01-30T02:44:54.799Z] [BOT] 🚫 Skipping blacklisted job: Global Partner Lead, Deloitte at anthropic
🚫 Skipping blacklisted job: Global Partner Sales Manager, Systems Integrators at anthropic
🚫 Skipping blacklisted job: Global Real Estate Design & Construction Manager at anthropic
🚫 Skipping blacklisted job: Global Technology Partner Lead at anthropic
[2026-01-30T02:44:54.799Z] [BOT] 🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-01-30T02:44:54.942Z] [BOT] ✅ Loaded pending queue: 2916 total (2686 pending, 50 enriched, 180 posted)
[2026-01-30T02:44:55.121Z] [BOT] ✅ Saved pending queue: 2910 total (2686 pending, 44 enriched, 180 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
📋 After blacklist filter: 42 jobs (6 blacklisted)
[2026-01-30T02:44:55.121Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-01-30T02:44:55.122Z] [BOT] 📋 After multi-location grouping: 42 unique jobs to post
[2026-01-30T02:44:55.122Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T02:44:55.126Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T02:44:55.127Z] [BOT] 📍 [ROUTING] "Biological Safety Research Scientist" @ anthropic
   Category: TECH (default)
[2026-01-30T02:44:55.127Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T02:44:55.143Z] [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T02:44:55.466Z] [BOT] ✅ Posted message: Biological Safety Research Scientist @ anthropic in #💻・tech-jobs
[2026-01-30T02:44:55.466Z] [BOT] ✅ Industry: Biological Safety Research Scientist @ anthropic
[2026-01-30T02:44:55.467Z] [BOT] 💾 Added channel posting: Biological Safety Research Scientist @ anthropic → category channel (1 total channels)
[2026-01-30T02:44:55.467Z] [BOT] 💾 BEFORE MERGE: 210 jobs in memory (cached)
[2026-01-30T02:44:55.475Z] [BOT] ✅ Loaded V2 database: 209 jobs
💾 DISK STATE: 209 jobs on disk
[2026-01-30T02:44:55.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=210
[2026-01-30T02:44:55.476Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:44:55.476Z] [BOT] 💾 AFTER MERGE: 210 jobs (merged disk + memory)
[2026-01-30T02:44:55.476Z] [BOT] ✅ No jobs to archive (all 210 jobs within 7-day window)
[2026-01-30T02:44:55.493Z] [BOT] 💾 Saved posted_jobs.json: 210 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:44:56.995Z] [BOT] 📍 [ROUTING] "Commercial Counsel, GTM" @ anthropic
[2026-01-30T02:44:56.996Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T02:44:57.341Z] [BOT] ✅ Posted message: Commercial Counsel, GTM @ anthropic in #💻・tech-jobs
[2026-01-30T02:44:57.341Z] [BOT] ✅ Industry: Commercial Counsel, GTM @ anthropic
[2026-01-30T02:44:57.341Z] [BOT] 💾 Added channel posting: Commercial Counsel, GTM @ anthropic → category channel (1 total channels)
[2026-01-30T02:44:57.341Z] [BOT] 💾 BEFORE MERGE: 211 jobs in memory (cached)
[2026-01-30T02:44:57.347Z] [BOT] ✅ Loaded V2 database: 210 jobs
💾 DISK STATE: 210 jobs on disk
[2026-01-30T02:44:57.347Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=211
[2026-01-30T02:44:57.348Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:44:57.348Z] [BOT] 💾 AFTER MERGE: 211 jobs (merged disk + memory)
[2026-01-30T02:44:57.348Z] [BOT] ✅ No jobs to archive (all 211 jobs within 7-day window)
[2026-01-30T02:44:57.362Z] [BOT] 💾 Saved posted_jobs.json: 211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:01.864Z] [BOT] 📌 Posting 7 jobs to #💰・finance-jobs
[2026-01-30T02:45:01.865Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ anthropic
[2026-01-30T02:45:01.865Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:02.227Z] [BOT] ✅ Posted message: Business Development Representative @ anthropic in #💰・finance-jobs
  ✅ Industry: Business Development Representative @ anthropic
[2026-01-30T02:45:02.228Z] [BOT] 💾 Added channel posting: Business Development Representative @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 212 jobs in memory (cached)
[2026-01-30T02:45:02.234Z] [BOT] ✅ Loaded V2 database: 211 jobs
💾 DISK STATE: 211 jobs on disk
[2026-01-30T02:45:02.234Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=212
[2026-01-30T02:45:02.234Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:45:02.234Z] [BOT] 💾 AFTER MERGE: 212 jobs (merged disk + memory)
[2026-01-30T02:45:02.234Z] [BOT] ✅ No jobs to archive (all 212 jobs within 7-day window)
[2026-01-30T02:45:02.248Z] [BOT] 💾 Saved posted_jobs.json: 212 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:03.749Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Colo & Networks" @ anthropic
[2026-01-30T02:45:03.749Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:03.937Z] [BOT] ✅ Posted message: Commercial Counsel, Colo & Networks @ anthropic in #💰・finance-jobs
  ✅ Industry: Commercial Counsel, Colo & Networks @ anthropic
[2026-01-30T02:45:03.938Z] [BOT] 💾 Added channel posting: Commercial Counsel, Colo & Networks @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 213 jobs in memory (cached)
[2026-01-30T02:45:03.946Z] [BOT] ✅ Loaded V2 database: 212 jobs
💾 DISK STATE: 212 jobs on disk
[2026-01-30T02:45:03.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=213
[2026-01-30T02:45:03.947Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 213 jobs (merged disk + memory)
[2026-01-30T02:45:03.947Z] [BOT] ✅ No jobs to archive (all 213 jobs within 7-day window)
[2026-01-30T02:45:03.964Z] [BOT] 💾 Saved posted_jobs.json: 213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:05.465Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Compute & Infrastructure" @ anthropic
[2026-01-30T02:45:05.465Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:05.697Z] [BOT] ✅ Posted message: Commercial Counsel, Compute & Infrastructure @ anthropic in #💰・finance-jobs
[2026-01-30T02:45:05.697Z] [BOT] ✅ Industry: Commercial Counsel, Compute & Infrastructure @ anthropic
[2026-01-30T02:45:05.697Z] [BOT] 💾 Added channel posting: Commercial Counsel, Compute & Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-30T02:45:05.698Z] [BOT] 💾 BEFORE MERGE: 214 jobs in memory (cached)
[2026-01-30T02:45:05.704Z] [BOT] ✅ Loaded V2 database: 213 jobs
💾 DISK STATE: 213 jobs on disk
[2026-01-30T02:45:05.704Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=214
[2026-01-30T02:45:05.705Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:45:05.705Z] [BOT] 💾 AFTER MERGE: 214 jobs (merged disk + memory)
[2026-01-30T02:45:05.705Z] [BOT] ✅ No jobs to archive (all 214 jobs within 7-day window)
[2026-01-30T02:45:05.720Z] [BOT] 💾 Saved posted_jobs.json: 214 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:07.221Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Datacenters & Construction" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-30T02:45:07.221Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:07.401Z] [BOT] ✅ Posted message: Commercial Counsel, Datacenters & Construction @ anthropic in #💰・finance-jobs
  ✅ Industry: Commercial Counsel, Datacenters & Construction @ anthropic
[2026-01-30T02:45:07.401Z] [BOT] 💾 Added channel posting: Commercial Counsel, Datacenters & Construction @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 215 jobs in memory (cached)
[2026-01-30T02:45:07.408Z] [BOT] ✅ Loaded V2 database: 214 jobs
💾 DISK STATE: 214 jobs on disk
[2026-01-30T02:45:07.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=215
[2026-01-30T02:45:07.409Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:45:07.409Z] [BOT] 💾 AFTER MERGE: 215 jobs (merged disk + memory)
[2026-01-30T02:45:07.409Z] [BOT] ✅ No jobs to archive (all 215 jobs within 7-day window)
[2026-01-30T02:45:07.426Z] [BOT] 💾 Saved posted_jobs.json: 215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:08.928Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Partnerships & Alliances" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:09.152Z] [BOT] ✅ Posted message: Commercial Counsel, Partnerships & Alliances @ anthropic in #💰・finance-jobs
  ✅ Industry: Commercial Counsel, Partnerships & Alliances @ anthropic
[2026-01-30T02:45:09.152Z] [BOT] 💾 Added channel posting: Commercial Counsel, Partnerships & Alliances @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 216 jobs in memory (cached)
[2026-01-30T02:45:09.158Z] [BOT] ✅ Loaded V2 database: 215 jobs
💾 DISK STATE: 215 jobs on disk
[2026-01-30T02:45:09.158Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=216
[2026-01-30T02:45:09.159Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 216 jobs (merged disk + memory)
[2026-01-30T02:45:09.159Z] [BOT] ✅ No jobs to archive (all 216 jobs within 7-day window)
[2026-01-30T02:45:09.176Z] [BOT] 💾 Saved posted_jobs.json: 216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:10.677Z] [BOT] 📍 [ROUTING] "Compensation Systems and Infrastructure" @ anthropic
[2026-01-30T02:45:10.677Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:10.867Z] [BOT] ✅ Posted message: Compensation Systems and Infrastructure @ anthropic in #💰・finance-jobs
  ✅ Industry: Compensation Systems and Infrastructure @ anthropic
[2026-01-30T02:45:10.867Z] [BOT] 💾 Added channel posting: Compensation Systems and Infrastructure @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 217 jobs in memory (cached)
[2026-01-30T02:45:10.873Z] [BOT] ✅ Loaded V2 database: 216 jobs
💾 DISK STATE: 216 jobs on disk
[2026-01-30T02:45:10.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=217
[2026-01-30T02:45:10.874Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 217 jobs (merged disk + memory)
[2026-01-30T02:45:10.874Z] [BOT] ✅ No jobs to archive (all 217 jobs within 7-day window)
[2026-01-30T02:45:10.888Z] [BOT] 💾 Saved posted_jobs.json: 217 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:12.389Z] [BOT] 📍 [ROUTING] "Compute Transactions & Partnerships" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T02:45:12.583Z] [BOT] ✅ Posted message: Compute Transactions & Partnerships @ anthropic in #💰・finance-jobs
  ✅ Industry: Compute Transactions & Partnerships @ anthropic
[2026-01-30T02:45:12.583Z] [BOT] 💾 Added channel posting: Compute Transactions & Partnerships @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 218 jobs in memory (cached)
[2026-01-30T02:45:12.590Z] [BOT] ✅ Loaded V2 database: 217 jobs
💾 DISK STATE: 217 jobs on disk
[2026-01-30T02:45:12.590Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=218
[2026-01-30T02:45:12.590Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 218 jobs (merged disk + memory)
[2026-01-30T02:45:12.591Z] [BOT] ✅ No jobs to archive (all 218 jobs within 7-day window)
[2026-01-30T02:45:12.607Z] [BOT] 💾 Saved posted_jobs.json: 218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:17.109Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T02:45:17.109Z] [BOT] 📍 [ROUTING] "Capacity Engineer, Compute" @ anthropic
[2026-01-30T02:45:17.109Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T02:45:17.768Z] [BOT] ✅ Posted message: Capacity Engineer, Compute @ anthropic in #📊・JID_fb739488
[2026-01-30T02:45:17.769Z] [BOT] ✅ Industry: Capacity Engineer, Compute @ anthropic
[2026-01-30T02:45:17.769Z] [BOT] 💾 Added channel posting: Capacity Engineer, Compute @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 219 jobs in memory (cached)
[2026-01-30T02:45:17.775Z] [BOT] ✅ Loaded V2 database: 218 jobs
[2026-01-30T02:45:17.775Z] [BOT] 💾 DISK STATE: 218 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=219
[2026-01-30T02:45:17.776Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 219 jobs (merged disk + memory)
[2026-01-30T02:45:17.776Z] [BOT] ✅ No jobs to archive (all 219 jobs within 7-day window)
[2026-01-30T02:45:17.792Z] [BOT] 💾 Saved posted_jobs.json: 219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T02:45:22.293Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ea4d148767d3689b"
[2026-01-30T02:45:22.295Z] [BOT] ⏭️  Skipping duplicate: JID_a8b02a89 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "0025ddb5fbf66351"
⏭️  Skipping duplicate: JID_4bca4deb (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a9733ba1a6f492c1"
⏭️  Skipping duplicate: JID_12cf4757 (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "46655020d51c7f4e"
⏭️  Skipping duplicate: JID_c9e10682 (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "55e8dd99e3f56654"
⏭️  Skipping duplicate: JID_8d505e85 (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "338d0b23b6ff95a8"
[2026-01-30T02:45:22.295Z] [BOT] ⏭️  Skipping duplicate: JID_dd670afe (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ef0bf8f982cd982d"
[2026-01-30T02:45:22.295Z] [BOT] ⏭️  Skipping duplicate: JID_b5eff580 (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e2bca6068c4bf8b5"
⏭️  Skipping duplicate: JID_979f27ac (posted within 7 days)
[2026-01-30T02:45:22.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96a926e1fe686c06"
[2026-01-30T02:45:22.296Z] [BOT] ⏭️  Skipping duplicate: JID_9f7e5676 (posted within 7 days)
[2026-01-30T02:45:22.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2f6dcee36539654a"
⏭️  Skipping duplicate: JID_fd2df81c (posted within 7 days)
[2026-01-30T02:45:22.474Z] [BOT] ✅ Loaded pending queue: 2910 total (2686 pending, 44 enriched, 180 posted)
[2026-01-30T02:45:22.632Z] [BOT] ✅ Saved pending queue: 2910 total (2686 pending, 34 enriched, 190 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T02:45:22.725Z] [BOT] 📂 Loaded 10271 existing routing entries
[2026-01-30T02:45:22.850Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T02:45:22.850Z] [BOT] Total entries: 10281
   Timestamp: 2026-01-30T02:45:22.788Z
[2026-01-30T02:45:22.851Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T02:45:22.851Z] [BOT] Total attempts: 18
   Successful: 10
   Failed: 0
   Skipped: 8
[2026-01-30T02:45:22.851Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T02:45:22.851Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 7 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-30T02:45:22.851Z] [BOT] 3. #📊・JID_fb739488: 1 posts
[2026-01-30T02:45:22.851Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 219 jobs in memory (cached)
[2026-01-30T02:45:22.858Z] [BOT] ✅ Loaded V2 database: 219 jobs
[2026-01-30T02:45:22.858Z] [BOT] 💾 DISK STATE: 219 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=219
[2026-01-30T02:45:22.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T02:45:22.858Z] [BOT] 💾 AFTER MERGE: 219 jobs (merged disk + memory)
[2026-01-30T02:45:22.859Z] [BOT] ✅ No jobs to archive (all 219 jobs within 7-day window)
[2026-01-30T02:45:22.873Z] [BOT] 💾 Saved posted_jobs.json: 219 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T02:45:24.892Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*