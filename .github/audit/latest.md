# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T13:42:10.153Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T13:41:38.478Z] ========================================
[2026-01-04T13:41:38.480Z] Discord Bot Execution Log
[2026-01-04T13:41:38.480Z] Environment: GitHub Actions
[2026-01-04T13:41:38.480Z] Node Version: v20.19.6
[2026-01-04T13:41:38.480Z] ========================================
[2026-01-04T13:41:38.480Z] Environment Variables Check:
[2026-01-04T13:41:38.480Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T13:41:38.480Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.480Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T13:41:38.481Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T13:41:38.481Z] 
Multi-Channel Configuration:
[2026-01-04T13:41:38.481Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T13:41:38.481Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T13:41:38.482Z] 
Data Files Check:
[2026-01-04T13:41:38.483Z] .github/data/new_jobs.json: ✅ Exists (10 items, 106092 bytes)
[2026-01-04T13:41:38.487Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 560564 bytes)
[2026-01-04T13:41:38.487Z] 
========================================
[2026-01-04T13:41:38.487Z] Starting Enhanced Discord Bot...
[2026-01-04T13:41:38.487Z] ========================================
[2026-01-04T13:41:39.008Z] [BOT] ✅ Loaded V2 database: 1115 jobs
[2026-01-04T13:41:39.676Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T13:41:39.676Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T13:41:39.677Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T13:41:39.677Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T13:41:39.746Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T13:41:39.834Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T13:41:39.837Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T13:41:39.837Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T13:41:39.837Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T13:41:39.838Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T13:41:39.838Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T13:41:39.842Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-04T13:41:39.843Z] [BOT] 📍 [ROUTING] "Engineering Manager, CDN" @ vercel
[2026-01-04T13:41:39.843Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:39.860Z] [BOT ERROR] (node:2690) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T13:41:39.939Z] [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, CDN @ vercel',
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
[2026-01-04T13:41:39.939Z] [BOT] ❌ Industry post failed: Engineering Manager, CDN
⚠️  Channel full error count: 1/5
[2026-01-04T13:41:41.623Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, CDN @ vercel in #🌉・san-francisco
[2026-01-04T13:41:41.623Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:41:43.124Z] [BOT] 💾 Marked as posted: Engineering Manager, CDN @ vercel (instance #1)
[2026-01-04T13:41:43.124Z] [BOT] 💾 BEFORE ARCHIVING: 1116 jobs in database
[2026-01-04T13:41:43.125Z] [BOT] ✅ No jobs to archive (all 1116 jobs within 7-day window)
[2026-01-04T13:41:43.136Z] [BOT] 💾 Saved posted_jobs.json: 1116 active jobs
[2026-01-04T13:41:43.136Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:41:43.137Z] [BOT] 📍 [ROUTING] "Software Engineer, AI SDK" @ vercel
   Category: TECH (matched: "software")
[2026-01-04T13:41:43.137Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:43.366Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI SDK @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, AI SDK @ vercel
[2026-01-04T13:41:45.005Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI SDK @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:41:46.505Z] [BOT] 💾 Marked as posted: Software Engineer, AI SDK @ vercel (instance #1)
[2026-01-04T13:41:46.506Z] [BOT] 💾 BEFORE ARCHIVING: 1117 jobs in database
[2026-01-04T13:41:46.506Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-04T13:41:46.513Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
[2026-01-04T13:41:46.514Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:41:46.514Z] [BOT] 📍 [ROUTING] "Software Engineer, CI/CD" @ vercel
[2026-01-04T13:41:46.514Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:46.705Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CI/CD @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, CI/CD @ vercel
[2026-01-04T13:41:48.501Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, CI/CD @ vercel in #🗽・new-york
[2026-01-04T13:41:48.501Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T13:41:50.002Z] [BOT] 💾 Marked as posted: Software Engineer, CI/CD @ vercel (instance #1)
[2026-01-04T13:41:50.003Z] [BOT] 💾 BEFORE ARCHIVING: 1118 jobs in database
[2026-01-04T13:41:50.004Z] [BOT] ✅ No jobs to archive (all 1118 jobs within 7-day window)
[2026-01-04T13:41:50.012Z] [BOT] 💾 Saved posted_jobs.json: 1118 active jobs
[2026-01-04T13:41:50.013Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:41:50.014Z] [BOT] 📍 [ROUTING] "Software Engineer, Deployment Infrastructure" @ vercel
[2026-01-04T13:41:50.014Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:50.278Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Deployment Infrastructure @ vercel in #💻・tech-jobs
[2026-01-04T13:41:50.278Z] [BOT] ✅ Industry: Software Engineer, Deployment Infrastructure @ vercel
[2026-01-04T13:41:52.027Z] [BOT ERROR] ❌ Error posting job Software Engineer, Deployment Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Deployment Infrastructure @ vercel',
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
[2026-01-04T13:41:52.027Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:41:53.528Z] [BOT] 💾 Marked as posted: Software Engineer, Deployment Infrastructure @ vercel (instance #1)
[2026-01-04T13:41:53.528Z] [BOT] 💾 BEFORE ARCHIVING: 1119 jobs in database
[2026-01-04T13:41:53.529Z] [BOT] ✅ No jobs to archive (all 1119 jobs within 7-day window)
[2026-01-04T13:41:53.536Z] [BOT] 💾 Saved posted_jobs.json: 1119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:41:53.537Z] [BOT] 📍 [ROUTING] "Software Engineer, Financial Infrastructure" @ vercel
[2026-01-04T13:41:53.537Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:53.623Z] [BOT ERROR] ❌ Error posting job Software Engineer, Financial Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Financial Infrastructure @ vercel',
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
[2026-01-04T13:41:53.623Z] [BOT] ❌ Industry post failed: Software Engineer, Financial Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-04T13:41:55.232Z] [BOT ERROR] ❌ Error posting job Software Engineer, Financial Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Financial Infrastructure @ vercel',
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
[2026-01-04T13:41:55.232Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:41:56.734Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:41:56.855Z] [BOT ERROR] ❌ Error posting job Software Engineer, Growth: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Growth @ vercel',
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
[2026-01-04T13:41:56.855Z] [BOT] ❌ Industry post failed: Software Engineer, Growth
⚠️  Channel full error count: 2/5
[2026-01-04T13:41:58.470Z] [BOT ERROR] ❌ Error posting job Software Engineer, Growth: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Growth @ vercel',
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
[2026-01-04T13:41:58.471Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:41:59.972Z] [BOT] 📍 [ROUTING] "Software Engineer, Support Platform" @ vercel
   Category: TECH (matched: "software")
[2026-01-04T13:41:59.972Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:42:00.081Z] [BOT ERROR] ❌ Error posting job Software Engineer, Support Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Support Platform @ vercel',
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
[2026-01-04T13:42:00.081Z] [BOT] ❌ Industry post failed: Software Engineer, Support Platform
⚠️  Channel full error count: 3/5
[2026-01-04T13:42:01.676Z] [BOT ERROR] ❌ Error posting job Software Engineer, Support Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Support Platform @ vercel',
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
[2026-01-04T13:42:01.677Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:42:03.178Z] [BOT] 📍 [ROUTING] "Software Engineer - Trust & Safety" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:42:03.293Z] [BOT ERROR] ❌ Error posting job Software Engineer - Trust & Safety: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Trust & Safety @ vercel',
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
[2026-01-04T13:42:03.293Z] [BOT] ❌ Industry post failed: Software Engineer - Trust & Safety
⚠️  Channel full error count: 4/5
[2026-01-04T13:42:04.871Z] [BOT ERROR] ❌ Error posting job Software Engineer - Trust & Safety: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Trust & Safety @ vercel',
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
[2026-01-04T13:42:04.871Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:42:09.372Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T13:42:09.372Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ vercel
   Category: MARKETING (matched: "marketing")
[2026-01-04T13:42:09.372Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T13:42:09.526Z] [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Partner Marketing Manager @ vercel',
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
[2026-01-04T13:42:09.527Z] [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T13:42:09.527Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T13:42:09.527Z] [BOT] Total attempts: 17
   Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-04T13:42:09.528Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T13:42:09.528Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2026-01-04T13:42:09.528Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🌉・san-francisco: 2 posts
     3. #🗽・new-york: 1 posts
[2026-01-04T13:42:09.528Z] [BOT] [STATS] Channel stats saved
[2026-01-04T13:42:09.528Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T13:42:09.538Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2690) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, CDN
- [BOT ERROR] ❌ Error posting job Software Engineer, Deployment Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer, Financial Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, Financial Infrastructure
- [BOT ERROR] ❌ Error posting job Software Engineer, Financial Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer, Growth: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, Growth
- [BOT ERROR] ❌ Error posting job Software Engineer, Growth: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer, Support Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, Support Platform
- [BOT ERROR] ❌ Error posting job Software Engineer, Support Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Trust & Safety: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Trust & Safety
- [BOT ERROR] ❌ Error posting job Software Engineer - Trust & Safety: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
- ❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*