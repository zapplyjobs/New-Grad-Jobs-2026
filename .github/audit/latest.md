# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T20:08:08.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T20:07:48.076Z] ========================================
[2026-01-13T20:07:48.078Z] Discord Bot Execution Log
[2026-01-13T20:07:48.078Z] Environment: GitHub Actions
[2026-01-13T20:07:48.078Z] Node Version: v20.19.6
[2026-01-13T20:07:48.078Z] ========================================
[2026-01-13T20:07:48.078Z] Environment Variables Check:
[2026-01-13T20:07:48.079Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T20:07:48.079Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T20:07:48.079Z] 
Multi-Channel Configuration:
[2026-01-13T20:07:48.079Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.079Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.080Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.080Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.080Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T20:07:48.080Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T20:07:48.080Z] 
Data Files Check:
[2026-01-13T20:07:48.081Z] .github/data/new_jobs.json: ✅ Exists (10 items, 119724 bytes)
[2026-01-13T20:07:48.085Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 504770 bytes)
[2026-01-13T20:07:48.085Z] 
========================================
[2026-01-13T20:07:48.085Z] Starting Enhanced Discord Bot...
[2026-01-13T20:07:48.085Z] ========================================
[2026-01-13T20:07:48.617Z] [BOT] ✅ Loaded V2 database: 956 jobs
[2026-01-13T20:07:49.136Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T20:07:49.137Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T20:07:49.137Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T20:07:49.248Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mercury Ignite: Data Engineering Graduate Development Program at Mercury Insurance
[2026-01-13T20:07:49.251Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T20:07:49.251Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T20:07:49.251Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T20:07:49.252Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T20:07:49.252Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T20:07:49.257Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T20:07:49.257Z] [BOT] 📍 [ROUTING] "Mercury Ignite: Data Engineering Graduate Development Program" @ ORG_6a7367ef Insurance
[2026-01-13T20:07:49.257Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T20:07:49.262Z] [BOT ERROR] (node:3740) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T20:07:49.514Z] [BOT] ✅ Created forum post: 🏢 Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
[2026-01-13T20:07:49.514Z] [BOT] ✅ Industry: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance
[2026-01-13T20:07:51.017Z] [BOT] 💾 Marked as posted: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance (instance #1)
[2026-01-13T20:07:51.017Z] [BOT] 💾 BEFORE ARCHIVING: 957 jobs in database
[2026-01-13T20:07:51.019Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-13T20:07:51.030Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
[2026-01-13T20:07:51.030Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:07:51.030Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b4800baa
   Category: AI (matched: "machine learning")
[2026-01-13T20:07:51.031Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T20:07:51.124Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Enova',
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
[2026-01-13T20:07:51.124Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-13T20:07:52.788Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Enova',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-13T20:07:52.788Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-13T20:07:54.288Z] [BOT] 📍 [ROUTING] "AI Applied Scientist" @ figma
   Category: AI (matched: "machine learning")
[2026-01-13T20:07:54.289Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T20:07:54.366Z] [BOT ERROR] ❌ Error posting job AI Applied Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Applied Scientist @ figma',
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
[2026-01-13T20:07:54.366Z] [BOT] ❌ Industry post failed: AI Applied Scientist
⚠️  Channel full error count: 2/5
[2026-01-13T20:07:55.973Z] [BOT ERROR] ❌ Error posting job AI Applied Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Applied Scientist @ figma',
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
[2026-01-13T20:07:55.973Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T20:08:00.474Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T20:08:00.475Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Database Technologies" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:08:00.680Z] [BOT ERROR] ❌ Error posting job Advanced Degree Software Engineer - Database Technologies: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Advanced Degree Software Engineer - Database Technologies @ Oracle',
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
[2026-01-13T20:08:00.680Z] [BOT] ❌ Industry post failed: Advanced Degree Software Engineer - Database Technologies
⚠️  Channel full error count: 3/5
[2026-01-13T20:08:02.320Z] [BOT ERROR] ❌ Error posting job Advanced Degree Software Engineer - Database Technologies: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Advanced Degree Software Engineer - Database Technologies @ Oracle',
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
[2026-01-13T20:08:02.321Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T20:08:03.822Z] [BOT] 📍 [ROUTING] "Data Center Hardware Operations Lead" @ anthropic
[2026-01-13T20:08:03.822Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:08:04.035Z] [BOT ERROR] ❌ Error posting job Data Center Hardware Operations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Center Hardware Operations Lead @ anthropic',
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
[2026-01-13T20:08:04.035Z] [BOT] ❌ Industry post failed: Data Center Hardware Operations Lead
⚠️  Channel full error count: 4/5
[2026-01-13T20:08:05.710Z] [BOT ERROR] ❌ Error posting job Data Center Hardware Operations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Center Hardware Operations Lead @ anthropic',
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
[2026-01-13T20:08:05.710Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T20:08:07.212Z] [BOT] 📍 [ROUTING] "Database Support Engineer (APAC)" @ supabase
   Category: TECH (matched: "data")
[2026-01-13T20:08:07.212Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:08:07.442Z] [BOT ERROR] ❌ Error posting job Database Support Engineer (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Database Support Engineer (APAC) @ supabase',
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
[2026-01-13T20:08:07.442Z] [BOT] ❌ Industry post failed: Database Support Engineer (APAC)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-13T20:08:07.443Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 10
[2026-01-13T20:08:07.443Z] [BOT] Successful: 1
   Failed: 9
   Skipped: 0
[2026-01-13T20:08:07.443Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T20:08:07.443Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-13T20:08:07.443Z] [BOT] [STATS] Channel stats saved
[2026-01-13T20:08:07.444Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_1242ab09.json
[2026-01-13T20:08:07.456Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3740) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job AI Applied Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Applied Scientist
- [BOT ERROR] ❌ Error posting job AI Applied Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Advanced Degree Software Engineer - Database Technologies: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Advanced Degree Software Engineer - Database Technologies
- [BOT ERROR] ❌ Error posting job Advanced Degree Software Engineer - Database Technologies: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Center Hardware Operations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Center Hardware Operations Lead
- [BOT ERROR] ❌ Error posting job Data Center Hardware Operations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Database Support Engineer (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Database Support Engineer (APAC)
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*