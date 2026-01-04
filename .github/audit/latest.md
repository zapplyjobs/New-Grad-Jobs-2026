# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T03:26:11.533Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T03:25:40.620Z] ========================================
[2026-01-04T03:25:40.622Z] Discord Bot Execution Log
[2026-01-04T03:25:40.622Z] Environment: GitHub Actions
[2026-01-04T03:25:40.622Z] Node Version: v20.19.6
[2026-01-04T03:25:40.622Z] ========================================
[2026-01-04T03:25:40.622Z] Environment Variables Check:
[2026-01-04T03:25:40.622Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T03:25:40.622Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.622Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T03:25:40.622Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T03:25:40.622Z] 
Multi-Channel Configuration:
[2026-01-04T03:25:40.623Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T03:25:40.623Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T03:25:40.623Z] 
Data Files Check:
[2026-01-04T03:25:40.625Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171033 bytes)
[2026-01-04T03:25:40.628Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 437460 bytes)
[2026-01-04T03:25:40.628Z] 
========================================
[2026-01-04T03:25:40.628Z] Starting Enhanced Discord Bot...
[2026-01-04T03:25:40.628Z] ========================================
[2026-01-04T03:25:41.175Z] [BOT] ✅ Loaded V2 database: 867 jobs
[2026-01-04T03:25:41.765Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T03:25:41.766Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T03:25:41.766Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T03:25:41.767Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T03:25:41.839Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T03:25:41.929Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T03:25:41.932Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T03:25:41.932Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T03:25:41.932Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T03:25:41.933Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T03:25:41.933Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T03:25:41.937Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-04T03:25:41.938Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ anthropic
[2026-01-04T03:25:41.938Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T03:25:41.943Z] [BOT ERROR] (node:2570) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T03:25:42.043Z] [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, iOS @ anthropic',
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
[2026-01-04T03:25:42.043Z] [BOT] ❌ Industry post failed: Software Engineer, iOS
⚠️  Channel full error count: 1/5
[2026-01-04T03:25:43.658Z] [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, iOS @ anthropic',
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
[2026-01-04T03:25:43.658Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:25:45.160Z] [BOT] 📍 [ROUTING] "Research Operations & Strategy Lead, Coding & Cybersecurity Data" @ anthropic
   Category: TECH (matched: "software")
[2026-01-04T03:25:45.160Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T03:25:45.236Z] [BOT ERROR] ❌ Error posting job Research Operations & Strategy Lead, Coding & Cybersecurity Data: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic',
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
[2026-01-04T03:25:45.236Z] [BOT] ❌ Industry post failed: Research Operations & Strategy Lead, Coding & Cybersecurity Data
⚠️  Channel full error count: 2/5
[2026-01-04T03:25:47.094Z] [BOT] ✅ Created forum post: 🏢 Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T03:25:48.595Z] [BOT] 💾 Marked as posted: Research Operations & Strategy Lead, Coding & Cybersecurity Data @ anthropic (instance #1)
[2026-01-04T03:25:48.595Z] [BOT] 💾 BEFORE ARCHIVING: 868 jobs in database
[2026-01-04T03:25:48.596Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-04T03:25:48.601Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-04T03:25:48.601Z] [BOT] ✅ Archiving complete: 1 archived, 867 active
[2026-01-04T03:25:48.608Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
[2026-01-04T03:25:48.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T03:25:48.609Z] [BOT] 📍 [ROUTING] "Data Operations Manager, Computer Use & Tool Use" @ anthropic
[2026-01-04T03:25:48.609Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T03:25:48.757Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager, Computer Use & Tool Use @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Operations Manager, Computer Use & Tool Use @ anthropic
[2026-01-04T03:25:50.343Z] [BOT ERROR] ❌ Error posting job Data Operations Manager, Computer Use & Tool Use: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Operations Manager, Computer Use & Tool Use @ anthropic',
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
[2026-01-04T03:25:50.344Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:25:51.844Z] [BOT] 💾 Marked as posted: Data Operations Manager, Computer Use & Tool Use @ anthropic (instance #1)
[2026-01-04T03:25:51.844Z] [BOT] 💾 BEFORE ARCHIVING: 868 jobs in database
[2026-01-04T03:25:51.845Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-04T03:25:51.851Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T03:25:51.851Z] [BOT] 📍 [ROUTING] "Performance Engineer, GPU" @ anthropic
[2026-01-04T03:25:51.851Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T03:25:51.968Z] [BOT ERROR] ❌ Error posting job Performance Engineer, GPU: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Performance Engineer, GPU @ anthropic',
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
[2026-01-04T03:25:51.969Z] [BOT] ❌ Industry post failed: Performance Engineer, GPU
⚠️  Channel full error count: 1/5
[2026-01-04T03:25:53.555Z] [BOT ERROR] ❌ Error posting job Performance Engineer, GPU: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Performance Engineer, GPU @ anthropic',
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
[2026-01-04T03:25:53.556Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:25:58.057Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T03:25:58.059Z] [BOT] 📍 [ROUTING] "Business Development, Strategic Technology Partnerships" @ anthropic
[2026-01-04T03:25:58.059Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T03:25:58.169Z] [BOT ERROR] ❌ Error posting job Business Development, Strategic Technology Partnerships: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development, Strategic Technology Partnerships @ anthropic',
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
[2026-01-04T03:25:58.170Z] [BOT] ❌ Industry post failed: Business Development, Strategic Technology Partnerships
⚠️  Channel full error count: 2/5
[2026-01-04T03:25:59.755Z] [BOT ERROR] ❌ Error posting job Business Development, Strategic Technology Partnerships: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development, Strategic Technology Partnerships @ anthropic',
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
[2026-01-04T03:25:59.756Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:26:04.258Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T03:26:04.259Z] [BOT] 📍 [ROUTING] "Research Engineer – Cybersecurity RL" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T03:26:04.259Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T03:26:04.463Z] [BOT ERROR] ❌ Error posting job Research Engineer – Cybersecurity RL: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer – Cybersecurity RL @ anthropic',
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
[2026-01-04T03:26:04.463Z] [BOT] ❌ Industry post failed: Research Engineer – Cybersecurity RL
⚠️  Channel full error count: 3/5
[2026-01-04T03:26:06.056Z] [BOT ERROR] ❌ Error posting job Research Engineer – Cybersecurity RL: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer – Cybersecurity RL @ anthropic',
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
[2026-01-04T03:26:06.057Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:26:07.558Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Portuguese Speaking" @ figma
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T03:26:07.650Z] [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Portuguese Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Support Specialist, Portuguese Speaking @ figma',
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
[2026-01-04T03:26:07.651Z] [BOT] ❌ Industry post failed: Enterprise Support Specialist, Portuguese Speaking
⚠️  Channel full error count: 4/5
[2026-01-04T03:26:09.242Z] [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Portuguese Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Support Specialist, Portuguese Speaking @ figma',
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
[2026-01-04T03:26:09.242Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T03:26:10.743Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Korean Speaking" @ figma
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T03:26:10.865Z] [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Korean Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Support Specialist, Korean Speaking @ figma',
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
[2026-01-04T03:26:10.866Z] [BOT] ❌ Industry post failed: Enterprise Support Specialist, Korean Speaking
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T03:26:10.866Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 15
[2026-01-04T03:26:10.866Z] [BOT] Successful: 2
   Failed: 13
   Skipped: 0
[2026-01-04T03:26:10.866Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T03:26:10.867Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🌉・san-francisco: 1 posts
[2026-01-04T03:26:10.867Z] [BOT] 2. #💻・tech-jobs: 1 posts
[2026-01-04T03:26:10.867Z] [BOT] [STATS] Channel stats saved
[2026-01-04T03:26:10.867Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T03:26:10.876Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2570) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, iOS
- [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Operations & Strategy Lead, Coding & Cybersecurity Data: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Operations & Strategy Lead, Coding & Cybersecurity Data
- [BOT ERROR] ❌ Error posting job Data Operations Manager, Computer Use & Tool Use: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Performance Engineer, GPU: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Performance Engineer, GPU
- [BOT ERROR] ❌ Error posting job Performance Engineer, GPU: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Development, Strategic Technology Partnerships: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Development, Strategic Technology Partnerships
- [BOT ERROR] ❌ Error posting job Business Development, Strategic Technology Partnerships: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer – Cybersecurity RL: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer – Cybersecurity RL
- [BOT ERROR] ❌ Error posting job Research Engineer – Cybersecurity RL: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Portuguese Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Support Specialist, Portuguese Speaking
- [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Portuguese Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Support Specialist, Korean Speaking: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Support Specialist, Korean Speaking
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*