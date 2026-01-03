# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T21:49:39.328Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T21:49:11.417Z] ========================================
[2026-01-03T21:49:11.419Z] Discord Bot Execution Log
[2026-01-03T21:49:11.419Z] Environment: GitHub Actions
[2026-01-03T21:49:11.419Z] Node Version: v20.19.6
[2026-01-03T21:49:11.420Z] ========================================
[2026-01-03T21:49:11.420Z] Environment Variables Check:
[2026-01-03T21:49:11.420Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T21:49:11.420Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.420Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T21:49:11.420Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T21:49:11.420Z] 
Multi-Channel Configuration:
[2026-01-03T21:49:11.420Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.420Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T21:49:11.421Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T21:49:11.421Z] 
Data Files Check:
[2026-01-03T21:49:11.422Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158727 bytes)
[2026-01-03T21:49:11.425Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 417486 bytes)
[2026-01-03T21:49:11.426Z] 
========================================
[2026-01-03T21:49:11.426Z] Starting Enhanced Discord Bot...
[2026-01-03T21:49:11.426Z] ========================================
[2026-01-03T21:49:11.985Z] [BOT] ✅ Loaded V2 database: 823 jobs
[2026-01-03T21:49:12.753Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T21:49:12.753Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T21:49:12.754Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T21:49:12.754Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T21:49:12.825Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T21:49:12.916Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T21:49:12.918Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T21:49:12.919Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T21:49:12.919Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T21:49:12.920Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T21:49:12.920Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Senior Data Scientist @ brex: san francisco, california, united states, new york, new york, united states
   - Senior Engineering Manager, Acquisition @ brex: seattle, washington, united states, san francisco, california, united states, new york, new york, united states
   - Senior Engineering Manager, Activation @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Senior Engineering Manager, Risk Management @ brex: new york, new york, united states, san francisco, california, united states
[2026-01-03T21:49:12.920Z] [BOT] ⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T21:49:12.923Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T21:49:12.924Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ brex
[2026-01-03T21:49:12.924Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T21:49:12.929Z] [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T21:49:13.349Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ brex in #📈・JID_fb739488
[2026-01-03T21:49:13.349Z] [BOT] ✅ Industry: Senior Data Scientist @ brex
[2026-01-03T21:49:15.125Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ brex in #🌉・san-francisco
[2026-01-03T21:49:15.125Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T21:49:16.626Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ brex (instance #1)
[2026-01-03T21:49:16.626Z] [BOT] 💾 BEFORE ARCHIVING: 824 jobs in database
[2026-01-03T21:49:16.627Z] [BOT] ✅ No jobs to archive (all 824 jobs within 7-day window)
[2026-01-03T21:49:16.637Z] [BOT] 💾 Saved posted_jobs.json: 824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:49:16.638Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ brex (instance #1)
[2026-01-03T21:49:16.638Z] [BOT] 💾 BEFORE ARCHIVING: 825 jobs in database
[2026-01-03T21:49:16.639Z] [BOT] ✅ No jobs to archive (all 825 jobs within 7-day window)
[2026-01-03T21:49:16.645Z] [BOT] 💾 Saved posted_jobs.json: 825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:49:19.645Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T21:49:19.646Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Acquisition" @ brex
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T21:49:19.961Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Acquisition @ brex in #💻・tech-jobs
  ✅ Industry: Senior Engineering Manager, Acquisition @ brex
[2026-01-03T21:49:21.630Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Acquisition: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Acquisition @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-03T21:49:21.630Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-03T21:49:23.131Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-03T21:49:23.131Z] [BOT] 💾 BEFORE ARCHIVING: 826 jobs in database
[2026-01-03T21:49:23.132Z] [BOT] ✅ No jobs to archive (all 826 jobs within 7-day window)
[2026-01-03T21:49:23.140Z] [BOT] 💾 Saved posted_jobs.json: 826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:49:23.140Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-03T21:49:23.140Z] [BOT] 💾 BEFORE ARCHIVING: 827 jobs in database
[2026-01-03T21:49:23.141Z] [BOT] ✅ No jobs to archive (all 827 jobs within 7-day window)
[2026-01-03T21:49:23.147Z] [BOT] 💾 Saved posted_jobs.json: 827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:49:23.147Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-03T21:49:23.147Z] [BOT] 💾 BEFORE ARCHIVING: 828 jobs in database
[2026-01-03T21:49:23.148Z] [BOT] ✅ No jobs to archive (all 828 jobs within 7-day window)
[2026-01-03T21:49:23.154Z] [BOT] 💾 Saved posted_jobs.json: 828 active jobs
[2026-01-03T21:49:23.154Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:49:23.156Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Risk Management" @ brex
[2026-01-03T21:49:23.156Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T21:49:23.300Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Risk Management: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Risk Management @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-03T21:49:23.300Z] [BOT] ❌ Industry post failed: Senior Engineering Manager, Risk Management
⚠️  Channel full error count: 1/5
[2026-01-03T21:49:24.935Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Risk Management: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Risk Management @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-03T21:49:24.935Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-03T21:49:29.437Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T21:49:29.438Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
[2026-01-03T21:49:29.438Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T21:49:29.662Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Activation @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-03T21:49:29.662Z] [BOT] ❌ Industry post failed: Senior Engineering Manager, Activation
⚠️  Channel full error count: 2/5
[2026-01-03T21:49:31.307Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Activation @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-03T21:49:31.307Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-03T21:49:35.809Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 2
[2026-01-03T21:49:35.809Z] [BOT] ⏭️  Skipping duplicate: JID_f60420b3 (posted within 7 days)
[2026-01-03T21:49:35.809Z] [BOT] ⏭️  Skipping duplicate: JID_3157d0a9 (posted within 7 days)
[2026-01-03T21:49:35.854Z] [BOT] ✅ Loaded pending queue: 466 total (446 pending, 20 enriched, 0 posted)
[2026-01-03T21:49:35.902Z] [BOT] ✅ Saved pending queue: 466 total (446 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T21:49:35.952Z] [BOT] 📂 Loaded 1737 existing routing entries
[2026-01-03T21:49:36.002Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 1741
[2026-01-03T21:49:36.002Z] [BOT] Timestamp: 2026-01-03T21:49:35.994Z
[2026-01-03T21:49:36.002Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T21:49:36.002Z] [BOT] Total attempts: 8
   Successful: 3
   Failed: 5
   Skipped: 0
[2026-01-03T21:49:36.003Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T21:49:36.003Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #🌉・san-francisco: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-03T21:49:36.003Z] [BOT] [STATS] Channel stats saved
[2026-01-03T21:49:38.020Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Acquisition: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Risk Management: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Engineering Manager, Risk Management
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Risk Management: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Engineering Manager, Activation
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*