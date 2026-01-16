# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T16:59:10.013Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T16:58:44.987Z] ========================================
[2026-01-16T16:58:44.988Z] Discord Bot Execution Log
[2026-01-16T16:58:44.989Z] Environment: GitHub Actions
[2026-01-16T16:58:44.989Z] Node Version: v20.19.6
[2026-01-16T16:58:44.989Z] ========================================
[2026-01-16T16:58:44.989Z] Environment Variables Check:
[2026-01-16T16:58:44.989Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T16:58:44.989Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.989Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T16:58:44.989Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T16:58:44.989Z] 
Multi-Channel Configuration:
[2026-01-16T16:58:44.989Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T16:58:44.990Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T16:58:44.990Z] 
Data Files Check:
[2026-01-16T16:58:44.991Z] .github/data/new_jobs.json: ✅ Exists (10 items, 39811 bytes)
[2026-01-16T16:58:44.999Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1092577 bytes)
[2026-01-16T16:58:44.999Z] 
========================================
[2026-01-16T16:58:44.999Z] Starting Enhanced Discord Bot...
[2026-01-16T16:58:44.999Z] ========================================
[2026-01-16T16:58:45.536Z] [BOT] ✅ Loaded V2 database: 2025 jobs
[2026-01-16T16:58:46.490Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T16:58:46.491Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T16:58:46.491Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T16:58:46.602Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer at Cantina
[2026-01-16T16:58:46.604Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T16:58:46.604Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T16:58:46.605Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T16:58:46.606Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T16:58:46.606Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T16:58:46.606Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T16:58:46.609Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-16T16:58:46.610Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_b26219beina
[2026-01-16T16:58:46.610Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T16:58:46.627Z] [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T16:58:46.842Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_b26219beina in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_b26219beina
[2026-01-16T16:58:48.632Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_b26219beina in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T16:58:50.134Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_b26219beina (instance #1)
[2026-01-16T16:58:50.135Z] [BOT] 💾 BEFORE ARCHIVING: 2026 jobs in database
[2026-01-16T16:58:50.136Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-01-16T16:58:50.150Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
[2026-01-16T16:58:50.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T16:58:50.151Z] [BOT] 📍 [ROUTING] "OSTP Software Developer" @ ORG_85d40353
[2026-01-16T16:58:50.151Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T16:58:50.151Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T16:58:50.408Z] [BOT] ✅ Created forum post: 🏢 OSTP Software Developer @ ORG_85d40353 in #🤖・ai-jobs
[2026-01-16T16:58:50.408Z] [BOT] ✅ Industry: OSTP Software Developer @ ORG_85d40353
[2026-01-16T16:58:52.333Z] [BOT] ✅ Created forum post: 🏢 OSTP Software Developer @ ORG_85d40353 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T16:58:53.835Z] [BOT] 💾 Marked as posted: OSTP Software Developer @ ORG_85d40353 (instance #1)
[2026-01-16T16:58:53.836Z] [BOT] 💾 BEFORE ARCHIVING: 2027 jobs in database
[2026-01-16T16:58:53.837Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-01-16T16:58:53.848Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T16:58:53.848Z] [BOT] 📍 [ROUTING] "Government Contracts Strategist" @ nominal
[2026-01-16T16:58:53.848Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T16:58:54.055Z] [BOT ERROR] ❌ Error posting job Government Contracts Strategist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Government Contracts Strategist @ nominal',
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
[2026-01-16T16:58:54.056Z] [BOT] ❌ Industry post failed: Government Contracts Strategist
⚠️  Channel full error count: 1/5
[2026-01-16T16:58:55.558Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ T-Mobile
[2026-01-16T16:58:55.558Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T16:58:55.778Z] [BOT ERROR] ❌ Error posting job Associate AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate AI Engineer @ T-Mobile',
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
[2026-01-16T16:58:55.778Z] [BOT] ❌ Industry post failed: Associate AI Engineer
⚠️  Channel full error count: 2/5
[2026-01-16T16:58:57.414Z] [BOT ERROR] ❌ Error posting job Associate AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate AI Engineer @ T-Mobile',
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
[2026-01-16T16:58:57.414Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T16:59:01.915Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T16:59:01.916Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T16:59:02.147Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T16:59:02.147Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 3/5
[2026-01-16T16:59:03.849Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T16:59:03.849Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T16:59:05.351Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_352dd990
[2026-01-16T16:59:05.351Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T16:59:05.503Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Brellium',
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
[2026-01-16T16:59:05.503Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 4/5
[2026-01-16T16:59:07.131Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Brellium',
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
[2026-01-16T16:59:07.131Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T16:59:08.633Z] [BOT] 📍 [ROUTING] "New Graduate Engineer, Software (Starship)" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-16T16:59:08.633Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T16:59:08.785Z] [BOT ERROR] ❌ Error posting job New Graduate Engineer, Software (Starship): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 New Graduate Engineer, Software (Starship) @ SpaceX',
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
[2026-01-16T16:59:08.785Z] [BOT] ❌ Industry post failed: New Graduate Engineer, Software (Starship)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T16:59:08.786Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T16:59:08.786Z] [BOT] Total attempts: 12
   Successful: 4
   Failed: 8
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T16:59:08.786Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-16T16:59:08.786Z] [BOT] 2. #🗽・new-york: 2 posts
[2026-01-16T16:59:08.787Z] [BOT] [STATS] Channel stats saved
[2026-01-16T16:59:08.787Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T16:59:08.800Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Government Contracts Strategist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Government Contracts Strategist
- [BOT ERROR] ❌ Error posting job Associate AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate AI Engineer
- [BOT ERROR] ❌ Error posting job Associate AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job New Graduate Engineer, Software (Starship): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: New Graduate Engineer, Software (Starship)
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*