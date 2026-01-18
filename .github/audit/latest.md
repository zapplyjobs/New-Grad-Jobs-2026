# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T17:52:36.402Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T17:52:11.123Z] ========================================
[2026-01-18T17:52:11.125Z] Discord Bot Execution Log
[2026-01-18T17:52:11.125Z] Environment: GitHub Actions
[2026-01-18T17:52:11.125Z] Node Version: v20.19.6
[2026-01-18T17:52:11.125Z] ========================================
[2026-01-18T17:52:11.125Z] Environment Variables Check:
[2026-01-18T17:52:11.125Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T17:52:11.126Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T17:52:11.126Z] 
Multi-Channel Configuration:
[2026-01-18T17:52:11.126Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.126Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.127Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T17:52:11.127Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T17:52:11.127Z] 
Data Files Check:
[2026-01-18T17:52:11.127Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70892 bytes)
[2026-01-18T17:52:11.137Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1464075 bytes)
[2026-01-18T17:52:11.137Z] 
========================================
[2026-01-18T17:52:11.137Z] Starting Enhanced Discord Bot...
[2026-01-18T17:52:11.137Z] ========================================
[2026-01-18T17:52:11.658Z] [BOT] ✅ Loaded V2 database: 2702 jobs
[2026-01-18T17:52:12.669Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T17:52:12.670Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T17:52:12.670Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T17:52:12.788Z] [BOT] ✅ Loaded pending queue: 2842 total (2822 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-18T17:52:12.792Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T17:52:12.792Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T17:52:12.792Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T17:52:12.793Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T17:52:12.793Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T17:52:12.798Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T17:52:12.799Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Federal / State)" @ verkada
[2026-01-18T17:52:12.799Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T17:52:12.803Z] [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T17:52:12.933Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
[2026-01-18T17:52:12.933Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
⚠️  Channel full error count: 1/5
[2026-01-18T17:52:14.564Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
[2026-01-18T17:52:14.565Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:52:19.066Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-18T17:52:19.066Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_297c6f0f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:19.298Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_297c6f0f in #💻・tech-jobs
[2026-01-18T17:52:19.299Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_297c6f0f
[2026-01-18T17:52:20.921Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer 1 @ Ticketmaster',
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
[2026-01-18T17:52:20.921Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:52:22.423Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_297c6f0f (instance #1)
[2026-01-18T17:52:22.423Z] [BOT] 💾 BEFORE ARCHIVING: 2703 jobs in database
[2026-01-18T17:52:22.425Z] [BOT] ✅ No jobs to archive (all 2703 jobs within 7-day window)
[2026-01-18T17:52:22.449Z] [BOT] 💾 Saved posted_jobs.json: 2703 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T17:52:22.450Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
[2026-01-18T17:52:22.450Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:22.564Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🟦 Software Engineer 1 @ Microsoft',
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
[2026-01-18T17:52:22.564Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 1/5
[2026-01-18T17:52:24.173Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🟦 Software Engineer 1 @ Microsoft',
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
[2026-01-18T17:52:24.173Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:52:25.675Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_cdfeb1f5
[2026-01-18T17:52:25.675Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:25.795Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Principal Engineer @ Amgen',
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
[2026-01-18T17:52:25.795Z] [BOT] ❌ Industry post failed: Principal Engineer
⚠️  Channel full error count: 2/5
[2026-01-18T17:52:27.407Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Principal Engineer @ Amgen',
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
  url: 'https://discord.com/api/v10/channels/CH_297f020b/threads'
}
[2026-01-18T17:52:27.407Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T17:52:28.908Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-18T17:52:28.908Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:29.066Z] [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems',
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
[2026-01-18T17:52:29.066Z] [BOT] ❌ Industry post failed: C++ Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-18T17:52:30.690Z] [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-18T17:52:30.690Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-18T17:52:32.191Z] [BOT] 📍 [ROUTING] "Quality Engineer - Principal Quality Engineer" @ ORG_f3f2248d Grumman
[2026-01-18T17:52:32.191Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:32.302Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T17:52:32.303Z] [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
[2026-01-18T17:52:32.303Z] [BOT] ⚠️  Channel full error count: 4/5
[2026-01-18T17:52:33.933Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T17:52:33.933Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:52:35.434Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
[2026-01-18T17:52:35.435Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:52:35.614Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T17:52:35.615Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T17:52:35.615Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T17:52:35.615Z] [BOT] Total attempts: 13
   Successful: 1
   Failed: 12
   Skipped: 0
[2026-01-18T17:52:35.616Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T17:52:35.616Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-18T17:52:35.616Z] [BOT] 1. #💻・tech-jobs: 1 posts
[2026-01-18T17:52:35.616Z] [BOT] [STATS] Channel stats saved
[2026-01-18T17:52:35.616Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T17:52:35.628Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Principal Engineer
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: C++ Software Engineer
- [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*