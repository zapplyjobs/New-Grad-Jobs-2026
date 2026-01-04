# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T00:11:48.226Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T00:11:16.034Z] ========================================
[2026-01-04T00:11:16.036Z] Discord Bot Execution Log
[2026-01-04T00:11:16.036Z] Environment: GitHub Actions
[2026-01-04T00:11:16.036Z] Node Version: v20.19.6
[2026-01-04T00:11:16.036Z] ========================================
[2026-01-04T00:11:16.036Z] Environment Variables Check:
[2026-01-04T00:11:16.036Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T00:11:16.036Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.036Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T00:11:16.036Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T00:11:16.036Z] 
Multi-Channel Configuration:
[2026-01-04T00:11:16.036Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T00:11:16.037Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T00:11:16.037Z] 
Data Files Check:
[2026-01-04T00:11:16.038Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162061 bytes)
[2026-01-04T00:11:16.041Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 425932 bytes)
[2026-01-04T00:11:16.041Z] 
========================================
[2026-01-04T00:11:16.041Z] Starting Enhanced Discord Bot...
[2026-01-04T00:11:16.042Z] ========================================
[2026-01-04T00:11:16.569Z] [BOT] ✅ Loaded V2 database: 842 jobs
[2026-01-04T00:11:17.199Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T00:11:17.200Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T00:11:17.200Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T00:11:17.201Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T00:11:17.273Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T00:11:17.360Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T00:11:17.363Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T00:11:17.363Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T00:11:17.363Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T00:11:17.364Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
   (5 grouped as same job with different locations)
[2026-01-04T00:11:17.364Z] [BOT] 📍 2 jobs with multiple locations:
   -  Senior Manager, Implementation @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Software Engineer II, Product  @ brex: seattle, washington, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T00:11:17.369Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T00:11:17.369Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
[2026-01-04T00:11:17.370Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T00:11:17.374Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T00:11:17.557Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢  Senior Manager, Implementation @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-04T00:11:17.557Z] [BOT] ❌ Industry post failed:  Senior Manager, Implementation
⚠️  Channel full error count: 1/5
[2026-01-04T00:11:19.212Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  Senior Manager, Implementation @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-04T00:11:19.212Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-04T00:11:23.714Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T00:11:23.715Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
[2026-01-04T00:11:23.715Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T00:11:23.925Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Product  @ brex in #💻・tech-jobs
[2026-01-04T00:11:23.925Z] [BOT] ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-04T00:11:25.719Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Product  @ brex in #🌧️・seattle
[2026-01-04T00:11:25.719Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-04T00:11:27.220Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-04T00:11:27.221Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2026-01-04T00:11:27.221Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2026-01-04T00:11:27.232Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2026-01-04T00:11:27.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:11:27.232Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-04T00:11:27.233Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2026-01-04T00:11:27.233Z] [BOT] ✅ No jobs to archive (all 844 jobs within 7-day window)
[2026-01-04T00:11:27.241Z] [BOT] 💾 Saved posted_jobs.json: 844 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T00:11:27.241Z] [BOT] 💾 Marked as posted: Software Engineer II, Product  @ brex (instance #1)
[2026-01-04T00:11:27.241Z] [BOT] 💾 BEFORE ARCHIVING: 845 jobs in database
[2026-01-04T00:11:27.242Z] [BOT] ✅ No jobs to archive (all 845 jobs within 7-day window)
[2026-01-04T00:11:27.250Z] [BOT] 💾 Saved posted_jobs.json: 845 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T00:11:30.251Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-04T00:11:30.253Z] [BOT] 📍 [ROUTING] "Staff Brand Designer" @ brex
[2026-01-04T00:11:30.253Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T00:11:30.510Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer @ brex in #📣・marketing-jobs
[2026-01-04T00:11:30.510Z] [BOT] ✅ Industry: Staff Brand Designer @ brex
[2026-01-04T00:11:32.279Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T00:11:33.781Z] [BOT] 💾 Marked as posted: Staff Brand Designer @ brex (instance #1)
[2026-01-04T00:11:33.781Z] [BOT] 💾 BEFORE ARCHIVING: 846 jobs in database
[2026-01-04T00:11:33.782Z] [BOT] ✅ No jobs to archive (all 846 jobs within 7-day window)
[2026-01-04T00:11:33.789Z] [BOT] 💾 Saved posted_jobs.json: 846 active jobs
[2026-01-04T00:11:33.789Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:11:33.790Z] [BOT] 📍 [ROUTING] "Staff Brand Designer, Interactive" @ brex
[2026-01-04T00:11:33.790Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T00:11:33.985Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer, Interactive @ brex in #📣・marketing-jobs
[2026-01-04T00:11:33.986Z] [BOT] ✅ Industry: Staff Brand Designer, Interactive @ brex
[2026-01-04T00:11:35.691Z] [BOT] ✅ Created forum post: 🏢 Staff Brand Designer, Interactive @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T00:11:37.192Z] [BOT] 💾 Marked as posted: Staff Brand Designer, Interactive @ brex (instance #1)
[2026-01-04T00:11:37.193Z] [BOT] 💾 BEFORE ARCHIVING: 847 jobs in database
[2026-01-04T00:11:37.193Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2026-01-04T00:11:37.200Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
[2026-01-04T00:11:37.200Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:11:37.200Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ brex
[2026-01-04T00:11:37.200Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T00:11:38.563Z] [BOT ERROR] ❌ Error posting job Staff Product Designer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Staff Product Designer @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-04T00:11:38.563Z] [BOT] ❌ Industry post failed: Staff Product Designer
⚠️  Channel full error count: 1/5
[2026-01-04T00:11:40.238Z] [BOT ERROR] ❌ Error posting job Staff Product Designer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Product Designer @ brex',
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
[2026-01-04T00:11:40.238Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T00:11:44.741Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 2
[2026-01-04T00:11:44.741Z] [BOT] ⏭️  Skipping duplicate: JID_76cb04eb (posted within 7 days)
[2026-01-04T00:11:44.741Z] [BOT] ⏭️  Skipping duplicate: JID_1108fddb (posted within 7 days)
[2026-01-04T00:11:44.741Z] [BOT] ⏭️  Skipping duplicate: JID_b41975d9 (posted within 7 days)
[2026-01-04T00:11:44.779Z] [BOT] ✅ Loaded pending queue: 448 total (428 pending, 20 enriched, 0 posted)
[2026-01-04T00:11:44.821Z] [BOT] ✅ Saved pending queue: 448 total (428 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T00:11:44.873Z] [BOT] 📂 Loaded 1750 existing routing entries
[2026-01-04T00:11:44.922Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 1755
   Timestamp: 2026-01-04T00:11:44.914Z
[2026-01-04T00:11:44.922Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T00:11:44.923Z] [BOT] Total attempts: 10
   Successful: 6
   Failed: 4
   Skipped: 0
[2026-01-04T00:11:44.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T00:11:44.923Z] [BOT] Total posts: 6
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 2 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌧️・seattle: 1 posts
[2026-01-04T00:11:44.923Z] [BOT] [STATS] Channel stats saved
[2026-01-04T00:11:46.937Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  Senior Manager, Implementation
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Product Designer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Product Designer
- [BOT ERROR] ❌ Error posting job Staff Product Designer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*