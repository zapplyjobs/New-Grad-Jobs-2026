# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T12:47:42.856Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T12:46:53.191Z] ========================================
[2026-01-04T12:46:53.193Z] Discord Bot Execution Log
[2026-01-04T12:46:53.193Z] Environment: GitHub Actions
[2026-01-04T12:46:53.194Z] Node Version: v20.19.6
[2026-01-04T12:46:53.194Z] ========================================
[2026-01-04T12:46:53.194Z] Environment Variables Check:
[2026-01-04T12:46:53.194Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T12:46:53.194Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.194Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T12:46:53.194Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T12:46:53.194Z] 
Multi-Channel Configuration:
[2026-01-04T12:46:53.194Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.194Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.194Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.194Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T12:46:53.195Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T12:46:53.195Z] 
Data Files Check:
[2026-01-04T12:46:53.196Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162981 bytes)
[2026-01-04T12:46:53.200Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 547354 bytes)
[2026-01-04T12:46:53.200Z] 
========================================
[2026-01-04T12:46:53.200Z] Starting Enhanced Discord Bot...
[2026-01-04T12:46:53.200Z] ========================================
[2026-01-04T12:46:53.741Z] [BOT] ✅ Loaded V2 database: 1088 jobs
[2026-01-04T12:46:54.315Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T12:46:54.315Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T12:46:54.315Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T12:46:54.316Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T12:46:54.386Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T12:46:54.486Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T12:46:54.488Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T12:46:54.489Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T12:46:54.489Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T12:46:54.489Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T12:46:54.490Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T12:46:54.494Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-04T12:46:54.494Z] [BOT] 📍 [ROUTING] "Director, Design - Communication Tools" @ figma
[2026-01-04T12:46:54.495Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:46:54.512Z] [BOT ERROR] (node:2653) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T12:46:54.764Z] [BOT] ✅ Created forum post: 🏢 Director, Design - Communication Tools @ figma in #💲・sales-jobs
[2026-01-04T12:46:54.764Z] [BOT] ✅ Industry: Director, Design - Communication Tools @ figma
[2026-01-04T12:46:56.470Z] [BOT] ✅ Created forum post: 🏢 Director, Design - Communication Tools @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:46:57.970Z] [BOT] 💾 Marked as posted: Director, Design - Communication Tools @ figma (instance #1)
[2026-01-04T12:46:57.971Z] [BOT] 💾 BEFORE ARCHIVING: 1089 jobs in database
[2026-01-04T12:46:57.972Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-04T12:46:57.983Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
[2026-01-04T12:46:57.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:46:57.983Z] [BOT] 📍 [ROUTING] "Manager, Strategic Sales" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:46:58.217Z] [BOT] ✅ Created forum post: 🏢 Manager, Strategic Sales @ figma in #💲・sales-jobs
[2026-01-04T12:46:58.217Z] [BOT] ✅ Industry: Manager, Strategic Sales @ figma
[2026-01-04T12:46:59.869Z] [BOT] ✅ Created forum post: 🏢 Manager, Strategic Sales @ figma in #🌉・san-francisco
[2026-01-04T12:46:59.869Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:01.370Z] [BOT] 💾 Marked as posted: Manager, Strategic Sales @ figma (instance #1)
[2026-01-04T12:47:01.370Z] [BOT] 💾 BEFORE ARCHIVING: 1090 jobs in database
[2026-01-04T12:47:01.371Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-04T12:47:01.378Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:01.379Z] [BOT] 📍 [ROUTING] "Director, Sales Content & Solutions " @ figma
   Category: SALES (matched: "sales")
[2026-01-04T12:47:01.379Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:47:01.523Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Content & Solutions  @ figma in #💲・sales-jobs
  ✅ Industry: Director, Sales Content & Solutions  @ figma
[2026-01-04T12:47:03.217Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Content & Solutions  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:04.717Z] [BOT] 💾 Marked as posted: Director, Sales Content & Solutions  @ figma (instance #1)
[2026-01-04T12:47:04.717Z] [BOT] 💾 BEFORE ARCHIVING: 1091 jobs in database
[2026-01-04T12:47:04.719Z] [BOT] ✅ No jobs to archive (all 1091 jobs within 7-day window)
[2026-01-04T12:47:04.726Z] [BOT] 💾 Saved posted_jobs.json: 1091 active jobs
[2026-01-04T12:47:04.726Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:04.726Z] [BOT] 📍 [ROUTING] "Account Executive, Strategic" @ figma
[2026-01-04T12:47:04.726Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:47:05.016Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Strategic @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, Strategic @ figma
[2026-01-04T12:47:06.696Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Strategic @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:08.197Z] [BOT] 💾 Marked as posted: Account Executive, Strategic @ figma (instance #1)
[2026-01-04T12:47:08.198Z] [BOT] 💾 BEFORE ARCHIVING: 1092 jobs in database
[2026-01-04T12:47:08.198Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-04T12:47:08.205Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:08.205Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales " @ figma
   Category: SALES (matched: "sales")
[2026-01-04T12:47:08.205Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:47:08.363Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales  @ figma in #💲・sales-jobs
[2026-01-04T12:47:08.364Z] [BOT] ✅ Industry: Manager, Mid-Market Sales  @ figma
[2026-01-04T12:47:10.021Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales  @ figma in #🗽・new-york
[2026-01-04T12:47:10.021Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T12:47:11.522Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales  @ figma (instance #1)
[2026-01-04T12:47:11.522Z] [BOT] 💾 BEFORE ARCHIVING: 1093 jobs in database
[2026-01-04T12:47:11.523Z] [BOT] ✅ No jobs to archive (all 1093 jobs within 7-day window)
[2026-01-04T12:47:11.532Z] [BOT] 💾 Saved posted_jobs.json: 1093 active jobs
[2026-01-04T12:47:11.532Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:11.532Z] [BOT] 📍 [ROUTING] "Senior Account Executive, SMB" @ figma
[2026-01-04T12:47:11.533Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:47:11.799Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive, SMB @ figma in #💲・sales-jobs
[2026-01-04T12:47:11.799Z] [BOT] ✅ Industry: Senior Account Executive, SMB @ figma
[2026-01-04T12:47:13.477Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive, SMB @ figma in #🌉・san-francisco
[2026-01-04T12:47:13.477Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:14.978Z] [BOT] 💾 Marked as posted: Senior Account Executive, SMB @ figma (instance #1)
[2026-01-04T12:47:14.978Z] [BOT] 💾 BEFORE ARCHIVING: 1094 jobs in database
[2026-01-04T12:47:14.979Z] [BOT] ✅ No jobs to archive (all 1094 jobs within 7-day window)
[2026-01-04T12:47:14.987Z] [BOT] 💾 Saved posted_jobs.json: 1094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:14.987Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise" @ figma
[2026-01-04T12:47:14.987Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:47:15.232Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, Enterprise @ figma
[2026-01-04T12:47:19.163Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Enterprise @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:20.665Z] [BOT] 💾 Marked as posted: Account Executive, Enterprise @ figma (instance #1)
[2026-01-04T12:47:20.665Z] [BOT] 💾 BEFORE ARCHIVING: 1095 jobs in database
[2026-01-04T12:47:20.666Z] [BOT] ✅ No jobs to archive (all 1095 jobs within 7-day window)
[2026-01-04T12:47:20.674Z] [BOT] 💾 Saved posted_jobs.json: 1095 active jobs
[2026-01-04T12:47:20.674Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:23.675Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-04T12:47:23.675Z] [BOT] 📍 [ROUTING] "Product Manager, AI" @ figma
[2026-01-04T12:47:23.675Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-04T12:47:23.880Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ figma in #📈・JID_fb739488
  ✅ Industry: Product Manager, AI @ figma
[2026-01-04T12:47:25.553Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:27.054Z] [BOT] 💾 Marked as posted: Product Manager, AI @ figma (instance #1)
[2026-01-04T12:47:27.054Z] [BOT] 💾 BEFORE ARCHIVING: 1096 jobs in database
[2026-01-04T12:47:27.055Z] [BOT] ✅ No jobs to archive (all 1096 jobs within 7-day window)
[2026-01-04T12:47:27.064Z] [BOT] 💾 Saved posted_jobs.json: 1096 active jobs
[2026-01-04T12:47:27.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:27.064Z] [BOT] 📍 [ROUTING] "Data Scientist  " @ figma
[2026-01-04T12:47:27.064Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T12:47:27.457Z] [BOT] ✅ Created forum post: 🏢 Data Scientist   @ figma in #📈・JID_fb739488
  ✅ Industry: Data Scientist   @ figma
[2026-01-04T12:47:29.128Z] [BOT] ✅ Created forum post: 🏢 Data Scientist   @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:47:30.628Z] [BOT] 💾 Marked as posted: Data Scientist   @ figma (instance #1)
[2026-01-04T12:47:30.628Z] [BOT] 💾 BEFORE ARCHIVING: 1097 jobs in database
[2026-01-04T12:47:30.629Z] [BOT] ✅ No jobs to archive (all 1097 jobs within 7-day window)
[2026-01-04T12:47:30.637Z] [BOT] 💾 Saved posted_jobs.json: 1097 active jobs
[2026-01-04T12:47:30.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:33.638Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-04T12:47:33.638Z] [BOT] 📍 [ROUTING] "Product Manager, Design Tools" @ figma
[2026-01-04T12:47:33.638Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:47:33.989Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Design Tools @ figma in #📦・product-jobs
  ✅ Industry: Product Manager, Design Tools @ figma
[2026-01-04T12:47:35.591Z] [BOT ERROR] ❌ Error posting job Product Manager, Design Tools: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Product Manager, Design Tools @ figma',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-04T12:47:35.591Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T12:47:37.091Z] [BOT] 💾 Marked as posted: Product Manager, Design Tools @ figma (instance #1)
[2026-01-04T12:47:37.092Z] [BOT] 💾 BEFORE ARCHIVING: 1098 jobs in database
[2026-01-04T12:47:37.092Z] [BOT] ✅ No jobs to archive (all 1098 jobs within 7-day window)
[2026-01-04T12:47:37.101Z] [BOT] 💾 Saved posted_jobs.json: 1098 active jobs
[2026-01-04T12:47:37.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:47:40.101Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_1ab70c9f (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_89037655 (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_3f3ae6d1 (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_ff5aedcc (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_030688b3 (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_acf92713 (posted within 7 days)
[2026-01-04T12:47:40.102Z] [BOT] ⏭️  Skipping duplicate: JID_bc886aac (posted within 7 days)
[2026-01-04T12:47:40.103Z] [BOT] ⏭️  Skipping duplicate: JID_201c391a (posted within 7 days)
[2026-01-04T12:47:40.103Z] [BOT] ⏭️  Skipping duplicate: JID_069bd987 (posted within 7 days)
[2026-01-04T12:47:40.103Z] [BOT] ⏭️  Skipping duplicate: JID_ed49cd2c (posted within 7 days)
[2026-01-04T12:47:40.113Z] [BOT] ✅ Loaded pending queue: 202 total (182 pending, 20 enriched, 0 posted)
[2026-01-04T12:47:40.126Z] [BOT] ✅ Saved pending queue: 202 total (182 pending, 10 enriched, 10 posted)
[2026-01-04T12:47:40.126Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T12:47:40.174Z] [BOT] 📂 Loaded 1999 existing routing entries
[2026-01-04T12:47:40.233Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2009
[2026-01-04T12:47:40.233Z] [BOT] Timestamp: 2026-01-04T12:47:40.215Z
[2026-01-04T12:47:40.233Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
[2026-01-04T12:47:40.233Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-04T12:47:40.234Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 7 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🗽・new-york: 1 posts
[2026-01-04T12:47:40.234Z] [BOT] 5. #📦・product-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-04T12:47:42.247Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2653) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Manager, Design Tools: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*