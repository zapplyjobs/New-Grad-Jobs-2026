# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T04:29:48.714Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T04:29:14.050Z] ========================================
[2026-01-30T04:29:14.051Z] Discord Bot Execution Log
[2026-01-30T04:29:14.051Z] Environment: GitHub Actions
[2026-01-30T04:29:14.051Z] Node Version: v20.20.0
[2026-01-30T04:29:14.051Z] ========================================
[2026-01-30T04:29:14.051Z] Environment Variables Check:
[2026-01-30T04:29:14.052Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T04:29:14.052Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T04:29:14.052Z] 
Multi-Channel Configuration:
[2026-01-30T04:29:14.052Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.052Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T04:29:14.053Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T04:29:14.053Z] 
Data Files Check:
[2026-01-30T04:29:14.054Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190109 bytes)
[2026-01-30T04:29:14.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1378682 bytes)
[2026-01-30T04:29:14.064Z] 
========================================
[2026-01-30T04:29:14.064Z] Starting Enhanced Discord Bot...
[2026-01-30T04:29:14.064Z] ========================================
[2026-01-30T04:29:14.523Z] [BOT] ✅ Loaded V2 database: 229 jobs
[2026-01-30T04:29:15.191Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T04:29:15.191Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T04:29:15.191Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T04:29:15.349Z] [BOT] ✅ Loaded pending queue: 2920 total (2670 pending, 50 enriched, 200 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T04:29:15.350Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T04:29:15.353Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T04:29:15.355Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T04:29:15.355Z] [BOT] 🚫 Skipping blacklisted job: Partner Development Manager, Build Partners at anthropic
[2026-01-30T04:29:15.355Z] [BOT] 🚫 Skipping blacklisted job: Partner Marketing Lead, GSIs at anthropic
🚫 Skipping blacklisted job: Partner Marketing Manager, Cloud Partners at anthropic
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
🚫 Skipping blacklisted job: Policy Manager, Harmful Persuasion  at anthropic
[2026-01-30T04:29:15.356Z] [BOT] 🚫 Skipping blacklisted job: Principal Threat Intelligence Lead at anthropic
🚫 Skipping blacklisted job: Product Manager, API  at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Product Manager, Claude Code (Enterprise) at anthropic
[2026-01-30T04:29:15.508Z] [BOT] ✅ Loaded pending queue: 2920 total (2670 pending, 50 enriched, 200 posted)
[2026-01-30T04:29:15.675Z] [BOT] ✅ Saved pending queue: 2910 total (2670 pending, 40 enriched, 200 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 38 jobs (10 blacklisted)
[2026-01-30T04:29:15.675Z] [BOT] 📋 After data quality filter: 38 jobs (0 invalid)
[2026-01-30T04:29:15.676Z] [BOT] 📋 After multi-location grouping: 37 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-30T04:29:15.676Z] [BOT] 📍 1 jobs with multiple locations:
   - Nonprofit Account Executive @ anthropic: san francisco, ca | new york, new york
⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T04:29:15.680Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T04:29:15.681Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Healthcare" @ anthropic
   Category: TECH (default)
[2026-01-30T04:29:15.681Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T04:29:15.697Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T04:29:15.959Z] [BOT] ✅ Posted message: Enterprise Account Executive, Healthcare @ anthropic in #💻・tech-jobs
[2026-01-30T04:29:15.959Z] [BOT] ✅ Industry: Enterprise Account Executive, Healthcare @ anthropic
[2026-01-30T04:29:15.960Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Healthcare @ anthropic → category channel (1 total channels)
[2026-01-30T04:29:15.960Z] [BOT] 💾 BEFORE MERGE: 230 jobs in memory (cached)
[2026-01-30T04:29:15.968Z] [BOT] ✅ Loaded V2 database: 229 jobs
💾 DISK STATE: 229 jobs on disk
[2026-01-30T04:29:15.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=230
[2026-01-30T04:29:15.969Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:15.969Z] [BOT] 💾 AFTER MERGE: 230 jobs (merged disk + memory)
[2026-01-30T04:29:15.970Z] [BOT] ✅ No jobs to archive (all 230 jobs within 7-day window)
[2026-01-30T04:29:15.994Z] [BOT] 💾 Saved posted_jobs.json: 230 active jobs
[2026-01-30T04:29:15.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:17.495Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Industries" @ anthropic
[2026-01-30T04:29:17.495Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T04:29:17.804Z] [BOT] ✅ Posted message: Enterprise Account Executive, Industries @ anthropic in #💻・tech-jobs
[2026-01-30T04:29:17.804Z] [BOT] ✅ Industry: Enterprise Account Executive, Industries @ anthropic
[2026-01-30T04:29:17.804Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Industries @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 231 jobs in memory (cached)
[2026-01-30T04:29:17.811Z] [BOT] ✅ Loaded V2 database: 230 jobs
[2026-01-30T04:29:17.811Z] [BOT] 💾 DISK STATE: 230 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=231
[2026-01-30T04:29:17.811Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 231 jobs (merged disk + memory)
[2026-01-30T04:29:17.811Z] [BOT] ✅ No jobs to archive (all 231 jobs within 7-day window)
[2026-01-30T04:29:17.830Z] [BOT] 💾 Saved posted_jobs.json: 231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:19.331Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Life Sciences" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T04:29:19.483Z] [BOT] ✅ Posted message: Enterprise Account Executive, Life Sciences @ anthropic in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive, Life Sciences @ anthropic
[2026-01-30T04:29:19.483Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Life Sciences @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 232 jobs in memory (cached)
[2026-01-30T04:29:19.490Z] [BOT] ✅ Loaded V2 database: 231 jobs
[2026-01-30T04:29:19.490Z] [BOT] 💾 DISK STATE: 231 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=232
[2026-01-30T04:29:19.491Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:19.491Z] [BOT] 💾 AFTER MERGE: 232 jobs (merged disk + memory)
[2026-01-30T04:29:19.491Z] [BOT] ✅ No jobs to archive (all 232 jobs within 7-day window)
[2026-01-30T04:29:19.508Z] [BOT] 💾 Saved posted_jobs.json: 232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:21.009Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, State & Local Sales" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T04:29:21.194Z] [BOT] ✅ Posted message: Enterprise Account Executive, State & Local Sales @ anthropic in #💻・tech-jobs
[2026-01-30T04:29:21.194Z] [BOT] ✅ Industry: Enterprise Account Executive, State & Local Sales @ anthropic
[2026-01-30T04:29:21.194Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, State & Local Sales @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 233 jobs in memory (cached)
[2026-01-30T04:29:21.200Z] [BOT] ✅ Loaded V2 database: 232 jobs
💾 DISK STATE: 232 jobs on disk
[2026-01-30T04:29:21.200Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=233
[2026-01-30T04:29:21.201Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:21.201Z] [BOT] 💾 AFTER MERGE: 233 jobs (merged disk + memory)
[2026-01-30T04:29:21.201Z] [BOT] ✅ No jobs to archive (all 233 jobs within 7-day window)
[2026-01-30T04:29:21.216Z] [BOT] 💾 Saved posted_jobs.json: 233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:22.717Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Alignment Finetuning" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T04:29:22.984Z] [BOT] ✅ Posted message: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #💻・tech-jobs
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic
[2026-01-30T04:29:22.984Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 234 jobs in memory (cached)
[2026-01-30T04:29:22.990Z] [BOT] ✅ Loaded V2 database: 233 jobs
💾 DISK STATE: 233 jobs on disk
[2026-01-30T04:29:22.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=234
[2026-01-30T04:29:22.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:22.991Z] [BOT] 💾 AFTER MERGE: 234 jobs (merged disk + memory)
[2026-01-30T04:29:22.991Z] [BOT] ✅ No jobs to archive (all 234 jobs within 7-day window)
[2026-01-30T04:29:23.006Z] [BOT] 💾 Saved posted_jobs.json: 234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:27.508Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T04:29:27.509Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Honesty" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T04:29:27.509Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T04:29:27.819Z] [BOT] ✅ Posted message: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #📊・JID_fb739488
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic
[2026-01-30T04:29:27.819Z] [BOT] 💾 Added channel posting: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 235 jobs in memory (cached)
[2026-01-30T04:29:27.829Z] [BOT] ✅ Loaded V2 database: 234 jobs
💾 DISK STATE: 234 jobs on disk
[2026-01-30T04:29:27.829Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=235
[2026-01-30T04:29:27.830Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:27.830Z] [BOT] 💾 AFTER MERGE: 235 jobs (merged disk + memory)
[2026-01-30T04:29:27.830Z] [BOT] ✅ No jobs to archive (all 235 jobs within 7-day window)
[2026-01-30T04:29:27.848Z] [BOT] 💾 Saved posted_jobs.json: 235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:32.350Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T04:29:32.350Z] [BOT] 📍 [ROUTING] "Financial Reporting Accountant" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-30T04:29:32.350Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T04:29:32.540Z] [BOT] ✅ Posted message: Financial Reporting Accountant @ anthropic in #💰・finance-jobs
[2026-01-30T04:29:32.540Z] [BOT] ✅ Industry: Financial Reporting Accountant @ anthropic
[2026-01-30T04:29:32.540Z] [BOT] 💾 Added channel posting: Financial Reporting Accountant @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 236 jobs in memory (cached)
[2026-01-30T04:29:32.547Z] [BOT] ✅ Loaded V2 database: 235 jobs
💾 DISK STATE: 235 jobs on disk
[2026-01-30T04:29:32.547Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=236
[2026-01-30T04:29:32.548Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 236 jobs (merged disk + memory)
[2026-01-30T04:29:32.548Z] [BOT] ✅ No jobs to archive (all 236 jobs within 7-day window)
[2026-01-30T04:29:32.566Z] [BOT] 💾 Saved posted_jobs.json: 236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:37.068Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T04:29:37.068Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer, Applied AI" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T04:29:37.068Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T04:29:37.246Z] [BOT] ✅ Posted message: Forward Deployed Engineer, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Forward Deployed Engineer, Applied AI @ anthropic
[2026-01-30T04:29:37.246Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer, Applied AI @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 237 jobs in memory (cached)
[2026-01-30T04:29:37.257Z] [BOT] ✅ Loaded V2 database: 236 jobs
💾 DISK STATE: 236 jobs on disk
[2026-01-30T04:29:37.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=237
[2026-01-30T04:29:37.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T04:29:37.257Z] [BOT] 💾 AFTER MERGE: 237 jobs (merged disk + memory)
[2026-01-30T04:29:37.258Z] [BOT] ✅ No jobs to archive (all 237 jobs within 7-day window)
[2026-01-30T04:29:37.274Z] [BOT] 💾 Saved posted_jobs.json: 237 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:38.775Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer, Applied AI (Federal Civilian) " @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T04:29:38.775Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T04:29:39.011Z] [BOT] ✅ Posted message: Forward Deployed Engineer, Applied AI (Federal Civilian)  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Forward Deployed Engineer, Applied AI (Federal Civilian)  @ anthropic
[2026-01-30T04:29:39.011Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer, Applied AI (Federal Civilian)  @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 238 jobs in memory (cached)
[2026-01-30T04:29:39.018Z] [BOT] ✅ Loaded V2 database: 237 jobs
💾 DISK STATE: 237 jobs on disk
[2026-01-30T04:29:39.018Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=238
[2026-01-30T04:29:39.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 238 jobs (merged disk + memory)
✅ No jobs to archive (all 238 jobs within 7-day window)
[2026-01-30T04:29:39.035Z] [BOT] 💾 Saved posted_jobs.json: 238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:40.536Z] [BOT] 📍 [ROUTING] "Google GTM Cosell Partnerships" @ anthropic
[2026-01-30T04:29:40.536Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-30T04:29:40.733Z] [BOT] ✅ Posted message: Google GTM Cosell Partnerships @ anthropic in #🤖・ai-jobs
[2026-01-30T04:29:40.734Z] [BOT] ✅ Industry: Google GTM Cosell Partnerships @ anthropic
[2026-01-30T04:29:40.734Z] [BOT] 💾 Added channel posting: Google GTM Cosell Partnerships @ anthropic → category channel (1 total channels)
[2026-01-30T04:29:40.734Z] [BOT] 💾 BEFORE MERGE: 239 jobs in memory (cached)
[2026-01-30T04:29:40.741Z] [BOT] ✅ Loaded V2 database: 238 jobs
💾 DISK STATE: 238 jobs on disk
[2026-01-30T04:29:40.741Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=239
[2026-01-30T04:29:40.742Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 239 jobs (merged disk + memory)
[2026-01-30T04:29:40.743Z] [BOT] ✅ No jobs to archive (all 239 jobs within 7-day window)
[2026-01-30T04:29:40.761Z] [BOT] 💾 Saved posted_jobs.json: 239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:45.264Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T04:29:45.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5f1d15dbcd7a9df3"
[2026-01-30T04:29:45.265Z] [BOT] ⏭️  Skipping duplicate: JID_6d5834fd (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8dd1179dfd170802"
⏭️  Skipping duplicate: JID_38dd38a6 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "69d6ddaef94bc1ce"
⏭️  Skipping duplicate: JID_73b1628e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "0a2f5219163c46af"
[2026-01-30T04:29:45.265Z] [BOT] ⏭️  Skipping duplicate: JID_309b7949 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2ce867d27249b2d0"
⏭️  Skipping duplicate: JID_2e448c55 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "737e68f4c133537a"
[2026-01-30T04:29:45.265Z] [BOT] ⏭️  Skipping duplicate: JID_eda3b2a4 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3da0b54a38da310e"
⏭️  Skipping duplicate: JID_4470b153 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "312b4545c21d84cb"
⏭️  Skipping duplicate: JID_a5422c25 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "60440be5708f4c4f"
[2026-01-30T04:29:45.265Z] [BOT] ⏭️  Skipping duplicate: JID_ae66bad3 (posted within 7 days)
[2026-01-30T04:29:45.265Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "aac052cc9fcbe497"
⏭️  Skipping duplicate: JID_a100ab7f (posted within 7 days)
[2026-01-30T04:29:45.414Z] [BOT] ✅ Loaded pending queue: 2910 total (2670 pending, 40 enriched, 200 posted)
[2026-01-30T04:29:45.612Z] [BOT] ✅ Saved pending queue: 2910 total (2670 pending, 30 enriched, 210 posted)
[2026-01-30T04:29:45.612Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T04:29:45.705Z] [BOT] 📂 Loaded 10291 existing routing entries
[2026-01-30T04:29:45.818Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10301
   Timestamp: 2026-01-30T04:29:45.781Z
[2026-01-30T04:29:45.819Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T04:29:45.819Z] [BOT] Total attempts: 22
   Successful: 10
   Failed: 0
   Skipped: 12
[2026-01-30T04:29:45.819Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T04:29:45.819Z] [BOT] Total posts: 10
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 1 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T04:29:45.819Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T04:29:45.820Z] [BOT] 💾 BEFORE MERGE: 239 jobs in memory (cached)
[2026-01-30T04:29:45.826Z] [BOT] ✅ Loaded V2 database: 239 jobs
💾 DISK STATE: 239 jobs on disk
[2026-01-30T04:29:45.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=239
[2026-01-30T04:29:45.827Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 239 jobs (merged disk + memory)
[2026-01-30T04:29:45.827Z] [BOT] ✅ No jobs to archive (all 239 jobs within 7-day window)
[2026-01-30T04:29:45.845Z] [BOT] 💾 Saved posted_jobs.json: 239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T04:29:45.845Z] [BOT] ✅ Database saved successfully
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*