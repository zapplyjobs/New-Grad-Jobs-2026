# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T08:42:39.286Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T08:41:52.058Z] ========================================
[2026-01-04T08:41:52.059Z] Discord Bot Execution Log
[2026-01-04T08:41:52.060Z] Environment: GitHub Actions
[2026-01-04T08:41:52.060Z] Node Version: v20.19.6
[2026-01-04T08:41:52.060Z] ========================================
[2026-01-04T08:41:52.060Z] Environment Variables Check:
[2026-01-04T08:41:52.060Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T08:41:52.060Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.060Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T08:41:52.060Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T08:41:52.060Z] 
Multi-Channel Configuration:
[2026-01-04T08:41:52.060Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.060Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T08:41:52.061Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T08:41:52.061Z] 
Data Files Check:
[2026-01-04T08:41:52.062Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164885 bytes)
[2026-01-04T08:41:52.066Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 482583 bytes)
[2026-01-04T08:41:52.066Z] 
========================================
[2026-01-04T08:41:52.066Z] Starting Enhanced Discord Bot...
[2026-01-04T08:41:52.066Z] ========================================
[2026-01-04T08:41:52.620Z] [BOT] ✅ Loaded V2 database: 958 jobs
[2026-01-04T08:41:53.332Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T08:41:53.333Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T08:41:53.333Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T08:41:53.334Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T08:41:53.404Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T08:41:53.499Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T08:41:53.502Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T08:41:53.502Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T08:41:53.502Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T08:41:53.503Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T08:41:53.503Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T08:41:53.506Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T08:41:53.507Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-04T08:41:53.507Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:41:53.524Z] [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T08:41:53.654Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T08:41:53.654Z] [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
⚠️  Channel full error count: 1/5
[2026-01-04T08:41:55.270Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T08:41:55.270Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:41:56.771Z] [BOT] 📍 [ROUTING] "Engineering Manager, Product Platform & Accounts Platform" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T08:41:56.771Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:41:56.844Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Product Platform & Accounts Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic',
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
[2026-01-04T08:41:56.844Z] [BOT] ❌ Industry post failed: Engineering Manager, Product Platform & Accounts Platform
⚠️  Channel full error count: 2/5
[2026-01-04T08:41:58.520Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Product Platform & Accounts Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic',
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
[2026-01-04T08:41:58.520Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:42:03.021Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T08:42:03.022Z] [BOT] 📍 [ROUTING] "Engineering Manager, Public Sector" @ anthropic
[2026-01-04T08:42:03.022Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:42:03.223Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Public Sector @ anthropic',
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
[2026-01-04T08:42:03.223Z] [BOT] ❌ Industry post failed: Engineering Manager, Public Sector
⚠️  Channel full error count: 3/5
[2026-01-04T08:42:05.327Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Public Sector @ anthropic in #🌉・san-francisco
[2026-01-04T08:42:05.327Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:42:06.829Z] [BOT] 💾 Marked as posted: Engineering Manager, Public Sector @ anthropic (instance #1)
[2026-01-04T08:42:06.829Z] [BOT] 💾 BEFORE ARCHIVING: 959 jobs in database
[2026-01-04T08:42:06.830Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-04T08:42:06.841Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
[2026-01-04T08:42:06.842Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:09.842Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-04T08:42:09.843Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Digital Native Business" @ anthropic
[2026-01-04T08:42:09.843Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:10.082Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Digital Native Business @ anthropic in #💲・sales-jobs
[2026-01-04T08:42:10.082Z] [BOT] ✅ Industry: Enterprise Account Executive, Digital Native Business @ anthropic
[2026-01-04T08:42:11.693Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Digital Native Business: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, Digital Native Business @ anthropic',
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
[2026-01-04T08:42:11.694Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:42:13.194Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Digital Native Business @ anthropic (instance #1)
[2026-01-04T08:42:13.195Z] [BOT] 💾 BEFORE ARCHIVING: 960 jobs in database
[2026-01-04T08:42:13.195Z] [BOT] ✅ No jobs to archive (all 960 jobs within 7-day window)
[2026-01-04T08:42:13.204Z] [BOT] 💾 Saved posted_jobs.json: 960 active jobs
[2026-01-04T08:42:13.204Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:13.204Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, DOD/IC" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:13.372Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, DOD/IC @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, DOD/IC @ anthropic
[2026-01-04T08:42:14.997Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, DOD/IC: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, DOD/IC @ anthropic',
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
[2026-01-04T08:42:14.997Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:42:16.497Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, DOD/IC @ anthropic (instance #1)
[2026-01-04T08:42:16.498Z] [BOT] 💾 BEFORE ARCHIVING: 961 jobs in database
[2026-01-04T08:42:16.498Z] [BOT] ✅ No jobs to archive (all 961 jobs within 7-day window)
[2026-01-04T08:42:16.507Z] [BOT] 💾 Saved posted_jobs.json: 961 active jobs
[2026-01-04T08:42:16.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:16.508Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Civilian Sales" @ anthropic
[2026-01-04T08:42:16.508Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:16.616Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Federal Civilian Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, Federal Civilian Sales @ anthropic',
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
[2026-01-04T08:42:16.616Z] [BOT] ❌ Industry post failed: Enterprise Account Executive, Federal Civilian Sales
⚠️  Channel full error count: 1/5
[2026-01-04T08:42:18.283Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Civilian Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:42:19.785Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Federal Civilian Sales @ anthropic (instance #1)
[2026-01-04T08:42:19.785Z] [BOT] 💾 BEFORE ARCHIVING: 962 jobs in database
[2026-01-04T08:42:19.786Z] [BOT] ✅ No jobs to archive (all 962 jobs within 7-day window)
[2026-01-04T08:42:19.793Z] [BOT] 💾 Saved posted_jobs.json: 962 active jobs
[2026-01-04T08:42:19.793Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:19.793Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Partners Sales" @ anthropic
[2026-01-04T08:42:19.793Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:19.966Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Partners Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, Federal Partners Sales @ anthropic
[2026-01-04T08:42:21.953Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Partners Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:42:23.453Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Federal Partners Sales @ anthropic (instance #1)
[2026-01-04T08:42:23.453Z] [BOT] 💾 BEFORE ARCHIVING: 963 jobs in database
[2026-01-04T08:42:23.454Z] [BOT] ✅ No jobs to archive (all 963 jobs within 7-day window)
[2026-01-04T08:42:23.461Z] [BOT] 💾 Saved posted_jobs.json: 963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:23.462Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Industries" @ anthropic
[2026-01-04T08:42:23.462Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:23.662Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, Industries @ anthropic
[2026-01-04T08:42:25.311Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:42:26.813Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Industries @ anthropic (instance #1)
[2026-01-04T08:42:26.813Z] [BOT] 💾 BEFORE ARCHIVING: 964 jobs in database
[2026-01-04T08:42:26.814Z] [BOT] ✅ No jobs to archive (all 964 jobs within 7-day window)
[2026-01-04T08:42:26.820Z] [BOT] 💾 Saved posted_jobs.json: 964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:26.820Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Insurance" @ anthropic
[2026-01-04T08:42:26.821Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:26.932Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, Insurance @ anthropic',
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
[2026-01-04T08:42:26.932Z] [BOT] ❌ Industry post failed: Enterprise Account Executive, Insurance
⚠️  Channel full error count: 1/5
[2026-01-04T08:42:28.512Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, Insurance @ anthropic',
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
[2026-01-04T08:42:28.512Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T08:42:30.012Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, State & Local Sales" @ anthropic
[2026-01-04T08:42:30.012Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:42:30.441Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, State & Local Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, State & Local Sales @ anthropic
[2026-01-04T08:42:32.043Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, State & Local Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, State & Local Sales @ anthropic',
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
[2026-01-04T08:42:32.043Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:42:33.544Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, State & Local Sales @ anthropic (instance #1)
[2026-01-04T08:42:33.544Z] [BOT] 💾 BEFORE ARCHIVING: 965 jobs in database
[2026-01-04T08:42:33.545Z] [BOT] ✅ No jobs to archive (all 965 jobs within 7-day window)
[2026-01-04T08:42:33.552Z] [BOT] 💾 Saved posted_jobs.json: 965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:42:36.553Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-04T08:42:36.554Z] [BOT] ⏭️  Skipping duplicate: JID_95e2326e (posted within 7 days)
[2026-01-04T08:42:36.554Z] [BOT] ⏭️  Skipping duplicate: JID_7b5ee9ef (posted within 7 days)
[2026-01-04T08:42:36.554Z] [BOT] ⏭️  Skipping duplicate: JID_19d4825d (posted within 7 days)
[2026-01-04T08:42:36.554Z] [BOT] ⏭️  Skipping duplicate: JID_c9c7ac06 (posted within 7 days)
⏭️  Skipping duplicate: JID_436eda90 (posted within 7 days)
⏭️  Skipping duplicate: JID_38dd38a6 (posted within 7 days)
[2026-01-04T08:42:36.555Z] [BOT] ⏭️  Skipping duplicate: JID_309b7949 (posted within 7 days)
[2026-01-04T08:42:36.585Z] [BOT] ✅ Loaded pending queue: 332 total (312 pending, 20 enriched, 0 posted)
[2026-01-04T08:42:36.617Z] [BOT] ✅ Saved pending queue: 332 total (312 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-04T08:42:36.618Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T08:42:36.668Z] [BOT] 📂 Loaded 1859 existing routing entries
[2026-01-04T08:42:36.716Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T08:42:36.716Z] [BOT] Total entries: 1869
   Timestamp: 2026-01-04T08:42:36.708Z
[2026-01-04T08:42:36.716Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 9
   Failed: 11
   Skipped: 0
[2026-01-04T08:42:36.717Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T08:42:36.717Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
[2026-01-04T08:42:36.717Z] [BOT] [STATS] Channel stats saved
[2026-01-04T08:42:38.731Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, Product Platform & Accounts Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Product Platform & Accounts Platform
- [BOT ERROR] ❌ Error posting job Engineering Manager, Product Platform & Accounts Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Public Sector
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Digital Native Business: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, DOD/IC: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Federal Civilian Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Account Executive, Federal Civilian Sales
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Account Executive, Insurance
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, State & Local Sales: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*