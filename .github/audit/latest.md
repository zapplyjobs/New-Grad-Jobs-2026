# Discord Bot Execution Audit
**Timestamp:** 2026-02-02T11:53:05.906Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-02T11:52:47.233Z] ========================================
[2026-02-02T11:52:47.235Z] Discord Bot Execution Log
[2026-02-02T11:52:47.235Z] Environment: GitHub Actions
[2026-02-02T11:52:47.235Z] Node Version: v20.20.0
[2026-02-02T11:52:47.235Z] ========================================
[2026-02-02T11:52:47.235Z] Environment Variables Check:
[2026-02-02T11:52:47.235Z] DISCORD_TOKEN: ✅ Set
[2026-02-02T11:52:47.235Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-02T11:52:47.235Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-02T11:52:47.235Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-02T11:52:47.235Z] 
Multi-Channel Configuration:
[2026-02-02T11:52:47.235Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-02T11:52:47.235Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-02T11:52:47.236Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-02T11:52:47.236Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-02T11:52:47.236Z] 
Data Files Check:
[2026-02-02T11:52:47.237Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143365 bytes)
[2026-02-02T11:52:47.296Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11182184 bytes)
[2026-02-02T11:52:47.296Z] 
========================================
[2026-02-02T11:52:47.296Z] Starting Enhanced Discord Bot...
[2026-02-02T11:52:47.296Z] ========================================
[2026-02-02T11:52:47.876Z] [BOT] ✅ Loaded V2 database: 2220 jobs
[2026-02-02T11:52:48.491Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-02T11:52:48.491Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-02T11:52:48.491Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-02T11:52:48.514Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T11:52:48.514Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T11:52:48.515Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-02T11:52:48.516Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-02T11:52:48.516Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-02T11:52:48.534Z] [BOT] 📬 Found 49 new jobs (1 already posted)...
[2026-02-02T11:52:48.535Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-02T11:52:48.535Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
[2026-02-02T11:52:48.535Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-02-02T11:52:48.535Z] [BOT] 🚫 Skipping blacklisted job: Manager Consumer Business Development, TV Partnerships at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer - Majors Northeast at datadog
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-02T11:52:48.536Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-02T11:52:48.537Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
🚫 Skipping blacklisted job: Staff Software Engineer - Payroll Platform at gusto
[2026-02-02T11:52:48.537Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - CCM Optimize  at datadog
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-02T11:52:48.537Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-02T11:52:48.537Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T11:52:48.537Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-02T11:52:48.565Z] [BOT] ✅ Loaded pending queue: 346 total (296 pending, 50 enriched, 0 posted)
[2026-02-02T11:52:48.602Z] [BOT] ✅ Saved pending queue: 300 total (296 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 3 jobs (46 blacklisted)
[2026-02-02T11:52:48.602Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-02T11:52:48.602Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-02T11:52:48.603Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Application Developer 1 @ ORG_b70ac5e6 Group: plover, wisconsin
[2026-02-02T11:52:48.603Z] [BOT] ⏸️ Limiting to 10 jobs this run, 47 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-02T11:52:48.604Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-02T11:52:48.605Z] [BOT] 📍 [ROUTING] "Application Developer 1" @ ORG_b70ac5e6 Group
[2026-02-02T11:52:48.605Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-02T11:52:48.623Z] [BOT ERROR] (node:2940) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-02T11:52:49.348Z] [BOT] ✅ Posted message: Application Developer 1 @ ORG_b70ac5e6 Group in #💻・tech-jobs
[2026-02-02T11:52:49.348Z] [BOT] ✅ Industry: Application Developer 1 @ ORG_b70ac5e6 Group
[2026-02-02T11:52:49.350Z] [BOT] 💾 Added channel posting: Application Developer 1 @ ORG_b70ac5e6 Group → category channel (1 total channels)
[2026-02-02T11:52:49.350Z] [BOT] 💾 BEFORE MERGE: 2221 jobs in memory (cached)
[2026-02-02T11:52:49.393Z] [BOT] ✅ Loaded V2 database: 2220 jobs
💾 DISK STATE: 2220 jobs on disk
[2026-02-02T11:52:49.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2221
[2026-02-02T11:52:49.399Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T11:52:49.399Z] [BOT] 💾 AFTER MERGE: 2221 jobs (merged disk + memory)
[2026-02-02T11:52:49.401Z] [BOT] ✅ No jobs to archive (all 2221 jobs within 7-day window)
[2026-02-02T11:52:49.528Z] [BOT] 💾 Saved posted_jobs.json: 2221 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T11:52:51.225Z] [BOT] ✅ Posted message: Application Developer 1 @ ORG_b70ac5e6 Group in #📍・JID_6daed763
[2026-02-02T11:52:51.225Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-02T11:52:51.226Z] [BOT] 💾 Added channel posting: Application Developer 1 @ ORG_b70ac5e6 Group → location channel (2 total channels)
[2026-02-02T11:52:51.226Z] [BOT] 💾 BEFORE MERGE: 2221 jobs in memory (cached)
[2026-02-02T11:52:51.262Z] [BOT] ✅ Loaded V2 database: 2221 jobs
💾 DISK STATE: 2221 jobs on disk
[2026-02-02T11:52:51.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2221
[2026-02-02T11:52:51.267Z] [BOT] 🔀 Deep merged: Application Developer 1 @ ORG_b70ac5e6 Group (disk: 1 channels → merged: 2 channels)
[2026-02-02T11:52:51.267Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2221 jobs (merged disk + memory)
[2026-02-02T11:52:51.269Z] [BOT] ✅ No jobs to archive (all 2221 jobs within 7-day window)
[2026-02-02T11:52:51.374Z] [BOT] 💾 Saved posted_jobs.json: 2221 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T11:52:55.875Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-02T11:52:55.877Z] [BOT] 📍 [ROUTING] "iOS Users - Join Project Mavara" @ ORG_15236607 by Appen
[2026-02-02T11:52:55.877Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-02T11:52:56.043Z] [BOT] ✅ Posted message: iOS Users - Join Project Mavara @ ORG_15236607 by Appen in #🤖・ai-jobs
[2026-02-02T11:52:56.043Z] [BOT] ✅ Industry: iOS Users - Join Project Mavara @ ORG_15236607 by Appen
[2026-02-02T11:52:56.044Z] [BOT] 💾 Added channel posting: iOS Users - Join Project Mavara @ ORG_15236607 by Appen → category channel (1 total channels)
[2026-02-02T11:52:56.044Z] [BOT] 💾 BEFORE MERGE: 2222 jobs in memory (cached)
[2026-02-02T11:52:56.084Z] [BOT] ✅ Loaded V2 database: 2221 jobs
💾 DISK STATE: 2221 jobs on disk
[2026-02-02T11:52:56.084Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2222
[2026-02-02T11:52:56.089Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T11:52:56.089Z] [BOT] 💾 AFTER MERGE: 2222 jobs (merged disk + memory)
[2026-02-02T11:52:56.090Z] [BOT] ✅ No jobs to archive (all 2222 jobs within 7-day window)
[2026-02-02T11:52:56.198Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T11:52:57.858Z] [BOT] ✅ Posted message: iOS Users - Join Project Mavara @ ORG_15236607 by Appen in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-02T11:52:57.859Z] [BOT] 💾 Added channel posting: iOS Users - Join Project Mavara @ ORG_15236607 by Appen → location channel (2 total channels)
[2026-02-02T11:52:57.859Z] [BOT] 💾 BEFORE MERGE: 2222 jobs in memory (cached)
[2026-02-02T11:52:57.907Z] [BOT] ✅ Loaded V2 database: 2222 jobs
💾 DISK STATE: 2222 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2222
[2026-02-02T11:52:57.911Z] [BOT] 🔀 Deep merged: iOS Users - Join Project Mavara @ ORG_15236607 by Appen (disk: 1 channels → merged: 2 channels)
[2026-02-02T11:52:57.911Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2222 jobs (merged disk + memory)
[2026-02-02T11:52:57.913Z] [BOT] ✅ No jobs to archive (all 2222 jobs within 7-day window)
[2026-02-02T11:52:58.030Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-02T11:53:02.529Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-02T11:53:02.530Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_563dcde2..." not found, but found as SHA256 "6867ee079b792d13"
[2026-02-02T11:53:02.530Z] [BOT] ⏭️  Skipping duplicate: JID_e74bd62f-i_jr103120-1 (posted within 7 days)
[2026-02-02T11:53:02.531Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_201c6856..." not found, but found as SHA256 "52f4fe5ce4c4cf72"
⏭️  Skipping duplicate: JID_a1738a2e (posted within 7 days)
[2026-02-02T11:53:02.547Z] [BOT] ✅ Loaded pending queue: 300 total (296 pending, 4 enriched, 0 posted)
[2026-02-02T11:53:02.580Z] [BOT] ✅ Saved pending queue: 300 total (296 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-02-02T11:53:02.580Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-02T11:53:02.687Z] [BOT] 📂 Loaded 12301 existing routing entries
[2026-02-02T11:53:02.804Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-02T11:53:02.805Z] [BOT] Total entries: 12303
   Timestamp: 2026-02-02T11:53:02.754Z
[2026-02-02T11:53:02.805Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_571cf069.jsonl
[2026-02-02T11:53:02.805Z] [BOT] Total attempts: 51
   Successful: 4
   Failed: 0
   Skipped: 47
[2026-02-02T11:53:02.805Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-02T11:53:02.805Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-02-02T11:53:02.806Z] [BOT] 2. #📍・JID_6daed763: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-02-02T11:53:02.806Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-02T11:53:02.806Z] [BOT] 💾 BEFORE MERGE: 2222 jobs in memory (cached)
[2026-02-02T11:53:02.860Z] [BOT] ✅ Loaded V2 database: 2222 jobs
💾 DISK STATE: 2222 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2222
[2026-02-02T11:53:02.863Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-02T11:53:02.863Z] [BOT] 💾 AFTER MERGE: 2222 jobs (merged disk + memory)
[2026-02-02T11:53:02.864Z] [BOT] ✅ No jobs to archive (all 2222 jobs within 7-day window)
[2026-02-02T11:53:02.990Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-02T11:53:05.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2940) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*