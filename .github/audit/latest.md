# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T00:51:28.135Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T00:50:54.652Z] ========================================
[2026-01-18T00:50:54.654Z] Discord Bot Execution Log
[2026-01-18T00:50:54.654Z] Environment: GitHub Actions
[2026-01-18T00:50:54.654Z] Node Version: v20.19.6
[2026-01-18T00:50:54.654Z] ========================================
[2026-01-18T00:50:54.654Z] Environment Variables Check:
[2026-01-18T00:50:54.654Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T00:50:54.655Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T00:50:54.655Z] 
Multi-Channel Configuration:
[2026-01-18T00:50:54.655Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.655Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.656Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T00:50:54.656Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T00:50:54.656Z] 
Data Files Check:
[2026-01-18T00:50:54.656Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61847 bytes)
[2026-01-18T00:50:54.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1360129 bytes)
[2026-01-18T00:50:54.665Z] 
========================================
[2026-01-18T00:50:54.666Z] Starting Enhanced Discord Bot...
[2026-01-18T00:50:54.666Z] ========================================
[2026-01-18T00:50:55.210Z] [BOT] ✅ Loaded V2 database: 2511 jobs
[2026-01-18T00:50:55.632Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T00:50:55.632Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T00:50:55.633Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T00:50:55.779Z] [BOT] ✅ Loaded pending queue: 2870 total (2850 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Learning Technology Specialist at Wieland
[2026-01-18T00:50:55.782Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T00:50:55.782Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T00:50:55.782Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T00:50:55.783Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T00:50:55.783Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T00:50:55.788Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T00:50:55.789Z] [BOT] 📍 [ROUTING] "Learning Technology Specialist" @ ORG_e5fcdd7e
[2026-01-18T00:50:55.789Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T00:50:55.808Z] [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T00:50:55.963Z] [BOT] ✅ Created forum post: 🏢 Learning Technology Specialist @ ORG_e5fcdd7e in #📣・marketing-jobs
[2026-01-18T00:50:55.963Z] [BOT] ✅ Industry: Learning Technology Specialist @ ORG_e5fcdd7e
[2026-01-18T00:50:57.733Z] [BOT] ✅ Created forum post: 🏢 Learning Technology Specialist @ ORG_e5fcdd7e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T00:50:59.236Z] [BOT] 💾 Marked as posted: Learning Technology Specialist @ ORG_e5fcdd7e (instance #1)
[2026-01-18T00:50:59.236Z] [BOT] 💾 BEFORE ARCHIVING: 2512 jobs in database
[2026-01-18T00:50:59.238Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-18T00:50:59.243Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-18T00:50:59.244Z] [BOT] ✅ Archiving complete: 1 archived, 2511 active
[2026-01-18T00:50:59.261Z] [BOT] 💾 Saved posted_jobs.json: 2511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T00:50:59.261Z] [BOT] 📍 [ROUTING] "Instrument Operator" @ ORG_8fc44164 Consulting
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T00:50:59.398Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator @ ORG_8fc44164 Consulting in #📣・marketing-jobs
  ✅ Industry: Instrument Operator @ ORG_8fc44164 Consulting
[2026-01-18T00:51:00.998Z] [BOT ERROR] ❌ Error posting job Instrument Operator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Instrument Operator @ ORG_8fc44164 Consulting',
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
[2026-01-18T00:51:00.998Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T00:51:02.499Z] [BOT] 💾 Marked as posted: Instrument Operator @ ORG_8fc44164 Consulting (instance #1)
[2026-01-18T00:51:02.499Z] [BOT] 💾 BEFORE ARCHIVING: 2512 jobs in database
[2026-01-18T00:51:02.501Z] [BOT] ✅ No jobs to archive (all 2512 jobs within 7-day window)
[2026-01-18T00:51:02.516Z] [BOT] 💾 Saved posted_jobs.json: 2512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T00:51:05.517Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T00:51:05.517Z] [BOT] 📍 [ROUTING] "Software Engineer Level 0" @ ORG_26f6f1be
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T00:51:05.638Z] [BOT ERROR] ❌ Error posting job Software Engineer Level 0: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Level 0 @ Markon',
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
[2026-01-18T00:51:05.638Z] [BOT] ❌ Industry post failed: Software Engineer Level 0
⚠️  Channel full error count: 1/5
[2026-01-18T00:51:07.224Z] [BOT ERROR] ❌ Error posting job Software Engineer Level 0: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Level 0 @ Markon',
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
[2026-01-18T00:51:07.224Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T00:51:08.724Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
   Category: TECH (matched: "software")
[2026-01-18T00:51:08.724Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T00:51:08.852Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Twitch',
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
[2026-01-18T00:51:08.852Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 2/5
[2026-01-18T00:51:10.457Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Twitch',
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
[2026-01-18T00:51:10.457Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-18T00:51:14.959Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T00:51:14.959Z] [BOT] 📍 [ROUTING] "Associate Analyst Cohort" @ ORG_4451467b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T00:51:15.084Z] [BOT ERROR] ❌ Error posting job Associate Analyst Cohort: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Analyst Cohort @ Koddi',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2026-01-18T00:51:15.084Z] [BOT] ❌ Industry post failed: Associate Analyst Cohort
⚠️  Channel full error count: 3/5
[2026-01-18T00:51:16.676Z] [BOT ERROR] ❌ Error posting job Associate Analyst Cohort: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Analyst Cohort @ Koddi',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-18T00:51:16.677Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-18T00:51:21.178Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T00:51:21.179Z] [BOT] 📍 [ROUTING] "Account Executive, Enterprise - Figma Weave (New York, United States)" @ figma
[2026-01-18T00:51:21.179Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T00:51:21.283Z] [BOT ERROR] ❌ Error posting job Account Executive, Enterprise - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive, Enterprise - Figma Weave (New York, United States) @ figma',
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
[2026-01-18T00:51:21.283Z] [BOT] ❌ Industry post failed: Account Executive, Enterprise - Figma Weave (New York, United States)
⚠️  Channel full error count: 4/5
[2026-01-18T00:51:22.864Z] [BOT ERROR] ❌ Error posting job Account Executive, Enterprise - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive, Enterprise - Figma Weave (New York, United States) @ figma',
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
[2026-01-18T00:51:22.864Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T00:51:27.366Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T00:51:27.366Z] [BOT] 📍 [ROUTING] "Director of AI Engineering Pfizer R&D" @ ORG_977ad75f
[2026-01-18T00:51:27.366Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T00:51:27.487Z] [BOT ERROR] ❌ Error posting job Director of AI Engineering Pfizer R&D: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director of AI Engineering Pfizer R&D @ Pfizer',
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
[2026-01-18T00:51:27.487Z] [BOT] ❌ Industry post failed: Director of AI Engineering Pfizer R&D
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T00:51:27.488Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T00:51:27.488Z] [BOT] Total attempts: 13
   Successful: 3
   Failed: 10
   Skipped: 0
[2026-01-18T00:51:27.489Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
[2026-01-18T00:51:27.489Z] [BOT] Top channels:
     1. #📣・marketing-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
[2026-01-18T00:51:27.489Z] [BOT] [STATS] Channel stats saved
[2026-01-18T00:51:27.489Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T00:51:27.503Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Instrument Operator: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Level 0: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Level 0
- [BOT ERROR] ❌ Error posting job Software Engineer Level 0: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Analyst Cohort: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Analyst Cohort
- [BOT ERROR] ❌ Error posting job Associate Analyst Cohort: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Account Executive, Enterprise - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Account Executive, Enterprise - Figma Weave (New York, United States)
- [BOT ERROR] ❌ Error posting job Account Executive, Enterprise - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Director of AI Engineering Pfizer R&D: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director of AI Engineering Pfizer R&D
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*