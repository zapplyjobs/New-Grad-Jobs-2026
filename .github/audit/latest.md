# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T06:05:36.196Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T06:05:12.944Z] ========================================
[2026-01-03T06:05:12.946Z] Discord Bot Execution Log
[2026-01-03T06:05:12.946Z] Environment: GitHub Actions
[2026-01-03T06:05:12.946Z] Node Version: v20.19.6
[2026-01-03T06:05:12.946Z] ========================================
[2026-01-03T06:05:12.946Z] Environment Variables Check:
[2026-01-03T06:05:12.946Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T06:05:12.946Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.946Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T06:05:12.946Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T06:05:12.946Z] 
Multi-Channel Configuration:
[2026-01-03T06:05:12.946Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.946Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T06:05:12.947Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T06:05:12.947Z] 
Data Files Check:
[2026-01-03T06:05:12.948Z] .github/data/new_jobs.json: ✅ Exists (10 items, 194594 bytes)
[2026-01-03T06:05:12.950Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 118112 bytes)
[2026-01-03T06:05:12.950Z] 
========================================
[2026-01-03T06:05:12.950Z] Starting Enhanced Discord Bot...
[2026-01-03T06:05:12.950Z] ========================================
[2026-01-03T06:05:13.461Z] [BOT] ✅ Loaded V2 database: 205 jobs
[2026-01-03T06:05:14.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T06:05:14.154Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T06:05:14.154Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T06:05:14.155Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T06:05:14.276Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 125
[2026-01-03T06:05:14.278Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T06:05:14.278Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T06:05:14.278Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T06:05:14.279Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T06:05:14.279Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-03T06:05:14.280Z] [BOT] - Account Executive, Commercial @ samsara: los angeles, phoenix, arizona, portland
   - Account Executive, Mid Market (MST/PST) @ samsara: phoenix, arizona, united states, san francisco, ca, united states
   - Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara: austin, chicago, dallas
⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T06:05:14.283Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T06:05:14.283Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-03T06:05:14.283Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:05:14.288Z] [BOT ERROR] (node:2355) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T06:05:14.537Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial @ samsara in #💲・sales-jobs
  ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-03T06:05:16.239Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial @ samsara in #🦢・los-angeles
[2026-01-03T06:05:16.239Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T06:05:17.739Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-03T06:05:17.740Z] [BOT] 💾 BEFORE ARCHIVING: 206 jobs in database
[2026-01-03T06:05:17.740Z] [BOT] ✅ No jobs to archive (all 206 jobs within 7-day window)
[2026-01-03T06:05:17.746Z] [BOT] 💾 Saved posted_jobs.json: 206 active jobs
[2026-01-03T06:05:17.746Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial - (Phoenix, AR) @ samsara (instance #1)
[2026-01-03T06:05:17.746Z] [BOT] 💾 BEFORE ARCHIVING: 207 jobs in database
[2026-01-03T06:05:17.746Z] [BOT] ✅ No jobs to archive (all 207 jobs within 7-day window)
[2026-01-03T06:05:17.748Z] [BOT] 💾 Saved posted_jobs.json: 207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:17.748Z] [BOT] 💾 Marked as posted: Account Executive, Commercial - (Portland, OR) @ samsara (instance #1)
💾 BEFORE ARCHIVING: 208 jobs in database
[2026-01-03T06:05:17.749Z] [BOT] ✅ No jobs to archive (all 208 jobs within 7-day window)
[2026-01-03T06:05:17.751Z] [BOT] 💾 Saved posted_jobs.json: 208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:17.751Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (EST/CST)" @ samsara
[2026-01-03T06:05:17.751Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:05:17.936Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (EST/CST) @ samsara in #💲・sales-jobs
[2026-01-03T06:05:17.936Z] [BOT] ✅ Industry: Account Executive, Mid Market (EST/CST) @ samsara
[2026-01-03T06:05:19.436Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
[2026-01-03T06:05:19.436Z] [BOT] 💾 BEFORE ARCHIVING: 209 jobs in database
✅ No jobs to archive (all 209 jobs within 7-day window)
[2026-01-03T06:05:19.439Z] [BOT] 💾 Saved posted_jobs.json: 209 active jobs
[2026-01-03T06:05:19.439Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Mid Market (EST/CST) @ samsara (instance #1)
[2026-01-03T06:05:19.439Z] [BOT] 💾 BEFORE ARCHIVING: 210 jobs in database
[2026-01-03T06:05:19.439Z] [BOT] ✅ No jobs to archive (all 210 jobs within 7-day window)
[2026-01-03T06:05:19.442Z] [BOT] 💾 Saved posted_jobs.json: 210 active jobs
[2026-01-03T06:05:19.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:19.442Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market (MST/PST)" @ samsara
   Category: SALES (matched: "sales")
[2026-01-03T06:05:19.442Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:05:19.710Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (MST/PST) @ samsara in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market (MST/PST) @ samsara
[2026-01-03T06:05:21.378Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market (MST/PST) @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T06:05:22.878Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
[2026-01-03T06:05:22.878Z] [BOT] 💾 BEFORE ARCHIVING: 211 jobs in database
[2026-01-03T06:05:22.878Z] [BOT] ✅ No jobs to archive (all 211 jobs within 7-day window)
[2026-01-03T06:05:22.881Z] [BOT] 💾 Saved posted_jobs.json: 211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:22.881Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market (MST/PST) @ samsara (instance #1)
💾 BEFORE ARCHIVING: 212 jobs in database
[2026-01-03T06:05:22.881Z] [BOT] ✅ No jobs to archive (all 212 jobs within 7-day window)
[2026-01-03T06:05:22.883Z] [BOT] 💾 Saved posted_jobs.json: 212 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:25.884Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T06:05:25.885Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Austin, TX" @ samsara
[2026-01-03T06:05:25.885Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T06:05:26.184Z] [BOT] ✅ Created forum post: 🏢 Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #📈・JID_fb739488
[2026-01-03T06:05:26.184Z] [BOT] ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara
[2026-01-03T06:05:27.999Z] [BOT] ✅ Created forum post: 🏢 Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #🤠・austin
[2026-01-03T06:05:27.999Z] [BOT] ✅ Location: 🤠・austin
[2026-01-03T06:05:29.501Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara (instance #1)
[2026-01-03T06:05:29.501Z] [BOT] 💾 BEFORE ARCHIVING: 213 jobs in database
[2026-01-03T06:05:29.501Z] [BOT] ✅ No jobs to archive (all 213 jobs within 7-day window)
[2026-01-03T06:05:29.504Z] [BOT] 💾 Saved posted_jobs.json: 213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:29.504Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara (instance #1)
[2026-01-03T06:05:29.504Z] [BOT] 💾 BEFORE ARCHIVING: 214 jobs in database
[2026-01-03T06:05:29.504Z] [BOT] ✅ No jobs to archive (all 214 jobs within 7-day window)
[2026-01-03T06:05:29.506Z] [BOT] 💾 Saved posted_jobs.json: 214 active jobs
[2026-01-03T06:05:29.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:29.507Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara (instance #1)
[2026-01-03T06:05:29.507Z] [BOT] 💾 BEFORE ARCHIVING: 215 jobs in database
[2026-01-03T06:05:29.507Z] [BOT] ✅ No jobs to archive (all 215 jobs within 7-day window)
[2026-01-03T06:05:29.510Z] [BOT] 💾 Saved posted_jobs.json: 215 active jobs
[2026-01-03T06:05:29.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:05:32.510Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-03T06:05:32.510Z] [BOT] ⏭️  Skipping duplicate: JID_b66e7316 (posted within 7 days)
[2026-01-03T06:05:32.510Z] [BOT] ⏭️  Skipping duplicate: JID_1225ad2f (posted within 7 days)
[2026-01-03T06:05:32.510Z] [BOT] ⏭️  Skipping duplicate: JID_86c959e9 (posted within 7 days)
[2026-01-03T06:05:32.510Z] [BOT] ⏭️  Skipping duplicate: JID_e437aa26 (posted within 7 days)
[2026-01-03T06:05:32.605Z] [BOT] ✅ Loaded pending queue: 1085 total (1065 pending, 20 enriched, 0 posted)
[2026-01-03T06:05:32.736Z] [BOT] ✅ Saved pending queue: 1085 total (1065 pending, 16 enriched, 4 posted)
[2026-01-03T06:05:32.736Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T06:05:32.779Z] [BOT] 📂 Loaded 1267 existing routing entries
[2026-01-03T06:05:32.823Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 1271
   Timestamp: 2026-01-03T06:05:32.818Z
[2026-01-03T06:05:32.824Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 7
[2026-01-03T06:05:32.824Z] [BOT] Successful: 7
   Failed: 0
   Skipped: 0
[2026-01-03T06:05:32.824Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 3 posts
     2. #🦢・los-angeles: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-03T06:05:32.824Z] [BOT] [STATS] Channel stats saved
[2026-01-03T06:05:34.844Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2355) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*