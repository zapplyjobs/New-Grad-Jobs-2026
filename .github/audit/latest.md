# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T05:05:57.853Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T05:05:26.758Z] ========================================
[2026-01-30T05:05:26.760Z] Discord Bot Execution Log
[2026-01-30T05:05:26.760Z] Environment: GitHub Actions
[2026-01-30T05:05:26.760Z] Node Version: v20.20.0
[2026-01-30T05:05:26.761Z] ========================================
[2026-01-30T05:05:26.761Z] Environment Variables Check:
[2026-01-30T05:05:26.761Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T05:05:26.761Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.761Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T05:05:26.761Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T05:05:26.761Z] 
Multi-Channel Configuration:
[2026-01-30T05:05:26.761Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.761Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.761Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.761Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T05:05:26.762Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T05:05:26.762Z] 
Data Files Check:
[2026-01-30T05:05:26.763Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200451 bytes)
[2026-01-30T05:05:26.772Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1459790 bytes)
[2026-01-30T05:05:26.772Z] 
========================================
[2026-01-30T05:05:26.772Z] Starting Enhanced Discord Bot...
[2026-01-30T05:05:26.772Z] ========================================
[2026-01-30T05:05:27.309Z] [BOT] ✅ Loaded V2 database: 239 jobs
[2026-01-30T05:05:27.885Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T05:05:27.886Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T05:05:27.886Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T05:05:28.008Z] [BOT] ✅ Loaded pending queue: 2920 total (2660 pending, 50 enriched, 210 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T05:05:28.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T05:05:28.009Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T05:05:28.009Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T05:05:28.010Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T05:05:28.013Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T05:05:28.013Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code Growth at anthropic
[2026-01-30T05:05:28.013Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
🚫 Skipping blacklisted job: Product Marketing Lead, Agents at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager at anthropic
[2026-01-30T05:05:28.014Z] [BOT] 🚫 Skipping blacklisted job: Product Operations Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Public Sector  at anthropic
🚫 Skipping blacklisted job: Product Operations Manager, Research Product  at anthropic
[2026-01-30T05:05:28.014Z] [BOT] 🚫 Skipping blacklisted job: Product Policy Manager, Frontier Risk at anthropic
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-01-30T05:05:28.117Z] [BOT] ✅ Loaded pending queue: 2920 total (2660 pending, 50 enriched, 210 posted)
[2026-01-30T05:05:28.279Z] [BOT] ✅ Saved pending queue: 2910 total (2660 pending, 40 enriched, 210 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 38 jobs (10 blacklisted)
[2026-01-30T05:05:28.280Z] [BOT] 📋 After data quality filter: 38 jobs (0 invalid)
[2026-01-30T05:05:28.281Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
[2026-01-30T05:05:28.281Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Nonprofit Account Executive @ anthropic: san francisco, ca | new york, new york
⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T05:05:28.286Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T05:05:28.286Z] [BOT] 📍 [ROUTING] "Growth Account Executive" @ anthropic
[2026-01-30T05:05:28.287Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:28.304Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T05:05:28.537Z] [BOT] ✅ Posted message: Growth Account Executive @ anthropic in #💻・tech-jobs
[2026-01-30T05:05:28.537Z] [BOT] ✅ Industry: Growth Account Executive @ anthropic
[2026-01-30T05:05:28.537Z] [BOT] 💾 Added channel posting: Growth Account Executive @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:28.538Z] [BOT] 💾 BEFORE MERGE: 240 jobs in memory (cached)
[2026-01-30T05:05:28.544Z] [BOT] ✅ Loaded V2 database: 239 jobs
💾 DISK STATE: 239 jobs on disk
[2026-01-30T05:05:28.544Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=240
[2026-01-30T05:05:28.545Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:28.545Z] [BOT] 💾 AFTER MERGE: 240 jobs (merged disk + memory)
[2026-01-30T05:05:28.545Z] [BOT] ✅ No jobs to archive (all 240 jobs within 7-day window)
[2026-01-30T05:05:28.564Z] [BOT] 💾 Saved posted_jobs.json: 240 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:30.066Z] [BOT] 📍 [ROUTING] "Head of GTM Narrative " @ anthropic
[2026-01-30T05:05:30.066Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:30.462Z] [BOT] ✅ Posted message: Head of GTM Narrative  @ anthropic in #💻・tech-jobs
[2026-01-30T05:05:30.462Z] [BOT] ✅ Industry: Head of GTM Narrative  @ anthropic
💾 Added channel posting: Head of GTM Narrative  @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:30.463Z] [BOT] 💾 BEFORE MERGE: 241 jobs in memory (cached)
[2026-01-30T05:05:30.468Z] [BOT] ✅ Loaded V2 database: 240 jobs
[2026-01-30T05:05:30.468Z] [BOT] 💾 DISK STATE: 240 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=241
[2026-01-30T05:05:30.469Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:30.469Z] [BOT] 💾 AFTER MERGE: 241 jobs (merged disk + memory)
[2026-01-30T05:05:30.469Z] [BOT] ✅ No jobs to archive (all 241 jobs within 7-day window)
[2026-01-30T05:05:30.486Z] [BOT] 💾 Saved posted_jobs.json: 241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:31.987Z] [BOT] 📍 [ROUTING] "Head of Insurance, GTM Sales" @ anthropic
   Category: TECH (default)
[2026-01-30T05:05:31.988Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:32.202Z] [BOT] ✅ Posted message: Head of Insurance, GTM Sales @ anthropic in #💻・tech-jobs
[2026-01-30T05:05:32.202Z] [BOT] ✅ Industry: Head of Insurance, GTM Sales @ anthropic
💾 Added channel posting: Head of Insurance, GTM Sales @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:32.203Z] [BOT] 💾 BEFORE MERGE: 242 jobs in memory (cached)
[2026-01-30T05:05:32.207Z] [BOT] ✅ Loaded V2 database: 241 jobs
💾 DISK STATE: 241 jobs on disk
[2026-01-30T05:05:32.207Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=242
[2026-01-30T05:05:32.208Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:32.208Z] [BOT] 💾 AFTER MERGE: 242 jobs (merged disk + memory)
[2026-01-30T05:05:32.208Z] [BOT] ✅ No jobs to archive (all 242 jobs within 7-day window)
[2026-01-30T05:05:32.226Z] [BOT] 💾 Saved posted_jobs.json: 242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:33.991Z] [BOT] ✅ Posted message: Head of Insurance, GTM Sales @ anthropic in #🗽・JID_98d4f0de
[2026-01-30T05:05:33.991Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Head of Insurance, GTM Sales @ anthropic → location channel (2 total channels)
[2026-01-30T05:05:33.991Z] [BOT] 💾 BEFORE MERGE: 242 jobs in memory (cached)
[2026-01-30T05:05:33.996Z] [BOT] ✅ Loaded V2 database: 242 jobs
💾 DISK STATE: 242 jobs on disk
[2026-01-30T05:05:33.996Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=242
[2026-01-30T05:05:33.997Z] [BOT] 🔀 Deep merged: Head of Insurance, GTM Sales @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T05:05:33.997Z] [BOT] 💾 AFTER MERGE: 242 jobs (merged disk + memory)
[2026-01-30T05:05:33.997Z] [BOT] ✅ No jobs to archive (all 242 jobs within 7-day window)
[2026-01-30T05:05:34.012Z] [BOT] 💾 Saved posted_jobs.json: 242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:35.512Z] [BOT] 📍 [ROUTING] "Head of Product Communications" @ anthropic
   Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:35.734Z] [BOT] ✅ Posted message: Head of Product Communications @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Product Communications @ anthropic
[2026-01-30T05:05:35.734Z] [BOT] 💾 Added channel posting: Head of Product Communications @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:35.734Z] [BOT] 💾 BEFORE MERGE: 243 jobs in memory (cached)
[2026-01-30T05:05:35.740Z] [BOT] ✅ Loaded V2 database: 242 jobs
💾 DISK STATE: 242 jobs on disk
[2026-01-30T05:05:35.740Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=243
[2026-01-30T05:05:35.741Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 243 jobs (merged disk + memory)
[2026-01-30T05:05:35.741Z] [BOT] ✅ No jobs to archive (all 243 jobs within 7-day window)
[2026-01-30T05:05:35.755Z] [BOT] 💾 Saved posted_jobs.json: 243 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:37.256Z] [BOT] 📍 [ROUTING] "Incentive Compensation System Engineer" @ anthropic
[2026-01-30T05:05:37.257Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:37.443Z] [BOT] ✅ Posted message: Incentive Compensation System Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: Incentive Compensation System Engineer @ anthropic
[2026-01-30T05:05:37.443Z] [BOT] 💾 Added channel posting: Incentive Compensation System Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:37.443Z] [BOT] 💾 BEFORE MERGE: 244 jobs in memory (cached)
[2026-01-30T05:05:37.452Z] [BOT] ✅ Loaded V2 database: 243 jobs
💾 DISK STATE: 243 jobs on disk
[2026-01-30T05:05:37.452Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=244
[2026-01-30T05:05:37.453Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:37.453Z] [BOT] 💾 AFTER MERGE: 244 jobs (merged disk + memory)
[2026-01-30T05:05:37.453Z] [BOT] ✅ No jobs to archive (all 244 jobs within 7-day window)
[2026-01-30T05:05:37.473Z] [BOT] 💾 Saved posted_jobs.json: 244 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:38.975Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer, Sandboxing" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T05:05:38.975Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:05:39.312Z] [BOT] ✅ Posted message: Infrastructure Engineer, Sandboxing @ anthropic in #💻・tech-jobs
  ✅ Industry: Infrastructure Engineer, Sandboxing @ anthropic
[2026-01-30T05:05:39.313Z] [BOT] 💾 Added channel posting: Infrastructure Engineer, Sandboxing @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:39.313Z] [BOT] 💾 BEFORE MERGE: 245 jobs in memory (cached)
[2026-01-30T05:05:39.318Z] [BOT] ✅ Loaded V2 database: 244 jobs
💾 DISK STATE: 244 jobs on disk
[2026-01-30T05:05:39.318Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=245
[2026-01-30T05:05:39.319Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:39.319Z] [BOT] 💾 AFTER MERGE: 245 jobs (merged disk + memory)
[2026-01-30T05:05:39.319Z] [BOT] ✅ No jobs to archive (all 245 jobs within 7-day window)
[2026-01-30T05:05:39.338Z] [BOT] 💾 Saved posted_jobs.json: 245 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:43.840Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-30T05:05:43.840Z] [BOT] 📍 [ROUTING] "Head of Asset & Wealth Management, GTM Sales" @ anthropic
[2026-01-30T05:05:43.840Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T05:05:44.369Z] [BOT] ✅ Posted message: Head of Asset & Wealth Management, GTM Sales @ anthropic in #💰・finance-jobs
[2026-01-30T05:05:44.369Z] [BOT] ✅ Industry: Head of Asset & Wealth Management, GTM Sales @ anthropic
[2026-01-30T05:05:44.369Z] [BOT] 💾 Added channel posting: Head of Asset & Wealth Management, GTM Sales @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-30T05:05:44.378Z] [BOT] ✅ Loaded V2 database: 245 jobs
💾 DISK STATE: 245 jobs on disk
[2026-01-30T05:05:44.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-30T05:05:44.379Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:44.379Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-30T05:05:44.379Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-30T05:05:44.395Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:45.897Z] [BOT] 📍 [ROUTING] "Head of Enterprise Support" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-30T05:05:45.897Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T05:05:46.163Z] [BOT] ✅ Posted message: Head of Enterprise Support @ anthropic in #💰・finance-jobs
[2026-01-30T05:05:46.163Z] [BOT] ✅ Industry: Head of Enterprise Support @ anthropic
[2026-01-30T05:05:46.163Z] [BOT] 💾 Added channel posting: Head of Enterprise Support @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 247 jobs in memory (cached)
[2026-01-30T05:05:46.168Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-30T05:05:46.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=247
[2026-01-30T05:05:46.169Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:05:46.169Z] [BOT] 💾 AFTER MERGE: 247 jobs (merged disk + memory)
[2026-01-30T05:05:46.169Z] [BOT] ✅ No jobs to archive (all 247 jobs within 7-day window)
[2026-01-30T05:05:46.185Z] [BOT] 💾 Saved posted_jobs.json: 247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:47.687Z] [BOT] 📍 [ROUTING] "Head of Infrastructure Accounting " @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T05:05:47.882Z] [BOT] ✅ Posted message: Head of Infrastructure Accounting  @ anthropic in #💰・finance-jobs
[2026-01-30T05:05:47.882Z] [BOT] ✅ Industry: Head of Infrastructure Accounting  @ anthropic
[2026-01-30T05:05:47.882Z] [BOT] 💾 Added channel posting: Head of Infrastructure Accounting  @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:47.882Z] [BOT] 💾 BEFORE MERGE: 248 jobs in memory (cached)
[2026-01-30T05:05:47.888Z] [BOT] ✅ Loaded V2 database: 247 jobs
💾 DISK STATE: 247 jobs on disk
[2026-01-30T05:05:47.888Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=248
[2026-01-30T05:05:47.889Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 248 jobs (merged disk + memory)
[2026-01-30T05:05:47.889Z] [BOT] ✅ No jobs to archive (all 248 jobs within 7-day window)
[2026-01-30T05:05:47.909Z] [BOT] 💾 Saved posted_jobs.json: 248 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:49.411Z] [BOT] 📍 [ROUTING] "Head of IT SOX" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T05:05:49.658Z] [BOT] ✅ Posted message: Head of IT SOX @ anthropic in #💰・finance-jobs
  ✅ Industry: Head of IT SOX @ anthropic
[2026-01-30T05:05:49.658Z] [BOT] 💾 Added channel posting: Head of IT SOX @ anthropic → category channel (1 total channels)
[2026-01-30T05:05:49.658Z] [BOT] 💾 BEFORE MERGE: 249 jobs in memory (cached)
[2026-01-30T05:05:49.664Z] [BOT] ✅ Loaded V2 database: 248 jobs
💾 DISK STATE: 248 jobs on disk
[2026-01-30T05:05:49.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=249
[2026-01-30T05:05:49.665Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 249 jobs (merged disk + memory)
[2026-01-30T05:05:49.665Z] [BOT] ✅ No jobs to archive (all 249 jobs within 7-day window)
[2026-01-30T05:05:49.681Z] [BOT] 💾 Saved posted_jobs.json: 249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:54.183Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T05:05:54.184Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "03b655e46ca679b2"
⏭️  Skipping duplicate: JID_78316e95 (posted within 7 days)
[2026-01-30T05:05:54.184Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fdf2804bd0494b87"
⏭️  Skipping duplicate: JID_0cafa48d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f000e8fcaa975a80"
[2026-01-30T05:05:54.184Z] [BOT] ⏭️  Skipping duplicate: JID_27e5c284 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6fe06c4a385ab7b8"
⏭️  Skipping duplicate: JID_fcec0eb4 (posted within 7 days)
[2026-01-30T05:05:54.184Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "06af23f9bc1b6900"
⏭️  Skipping duplicate: JID_fd362e00 (posted within 7 days)
[2026-01-30T05:05:54.185Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "0b2439f327b93576"
⏭️  Skipping duplicate: JID_120669dc (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "30182ad44ab9f90c"
⏭️  Skipping duplicate: JID_cbc305b9 (posted within 7 days)
[2026-01-30T05:05:54.185Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2b0b4ddd84bb500f"
⏭️  Skipping duplicate: JID_d303f149 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d59b0766f489e92f"
⏭️  Skipping duplicate: JID_9fb079d8 (posted within 7 days)
[2026-01-30T05:05:54.185Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "06cdacdcf65ee238"
⏭️  Skipping duplicate: JID_37f991dd (posted within 7 days)
[2026-01-30T05:05:54.293Z] [BOT] ✅ Loaded pending queue: 2910 total (2660 pending, 40 enriched, 210 posted)
[2026-01-30T05:05:54.472Z] [BOT] ✅ Saved pending queue: 2910 total (2660 pending, 30 enriched, 220 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T05:05:54.473Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T05:05:54.574Z] [BOT] 📂 Loaded 10301 existing routing entries
[2026-01-30T05:05:54.681Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T05:05:54.681Z] [BOT] Total entries: 10311
   Timestamp: 2026-01-30T05:05:54.637Z
[2026-01-30T05:05:54.681Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T05:05:54.681Z] [BOT] Total attempts: 23
   Successful: 11
   Failed: 0
   Skipped: 12
[2026-01-30T05:05:54.682Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
[2026-01-30T05:05:54.682Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T05:05:54.682Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T05:05:54.682Z] [BOT] 💾 BEFORE MERGE: 249 jobs in memory (cached)
[2026-01-30T05:05:54.687Z] [BOT] ✅ Loaded V2 database: 249 jobs
💾 DISK STATE: 249 jobs on disk
[2026-01-30T05:05:54.687Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=249
[2026-01-30T05:05:54.688Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 249 jobs (merged disk + memory)
[2026-01-30T05:05:54.688Z] [BOT] ✅ No jobs to archive (all 249 jobs within 7-day window)
[2026-01-30T05:05:54.705Z] [BOT] 💾 Saved posted_jobs.json: 249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:05:54.705Z] [BOT] ✅ Database saved successfully
[2026-01-30T05:05:56.734Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*