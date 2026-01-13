# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T15:43:42.360Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T15:43:19.418Z] ========================================
[2026-01-13T15:43:19.420Z] Discord Bot Execution Log
[2026-01-13T15:43:19.420Z] Environment: GitHub Actions
[2026-01-13T15:43:19.420Z] Node Version: v20.19.6
[2026-01-13T15:43:19.420Z] ========================================
[2026-01-13T15:43:19.420Z] Environment Variables Check:
[2026-01-13T15:43:19.420Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T15:43:19.420Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.420Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T15:43:19.420Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T15:43:19.420Z] 
Multi-Channel Configuration:
[2026-01-13T15:43:19.421Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T15:43:19.421Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T15:43:19.421Z] 
Data Files Check:
[2026-01-13T15:43:19.423Z] .github/data/new_jobs.json: ✅ Exists (10 items, 180749 bytes)
[2026-01-13T15:43:19.426Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 470038 bytes)
[2026-01-13T15:43:19.426Z] 
========================================
[2026-01-13T15:43:19.426Z] Starting Enhanced Discord Bot...
[2026-01-13T15:43:19.426Z] ========================================
[2026-01-13T15:43:19.891Z] [BOT] ✅ Loaded V2 database: 889 jobs
[2026-01-13T15:43:20.680Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T15:43:20.680Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T15:43:20.681Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T15:43:20.820Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Development Representative at airtable
[2026-01-13T15:43:20.822Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T15:43:20.822Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T15:43:20.823Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T15:43:20.823Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T15:43:20.823Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T15:43:20.824Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T15:43:20.828Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T15:43:20.828Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ airtable
   Category: SALES (matched: "sales")
[2026-01-13T15:43:20.828Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:43:20.833Z] [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T15:43:21.506Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ airtable in #💲・sales-jobs
[2026-01-13T15:43:21.506Z] [BOT] ✅ Industry: Business Development Representative @ airtable
[2026-01-13T15:43:23.255Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ airtable in #🤠・austin
[2026-01-13T15:43:23.255Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T15:43:24.757Z] [BOT] 💾 Marked as posted: Business Development Representative @ airtable (instance #1)
[2026-01-13T15:43:24.757Z] [BOT] 💾 BEFORE ARCHIVING: 890 jobs in database
[2026-01-13T15:43:24.758Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T15:43:24.763Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T15:43:24.763Z] [BOT] ✅ Archiving complete: 1 archived, 889 active
[2026-01-13T15:43:24.770Z] [BOT] 💾 Saved posted_jobs.json: 889 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T15:43:24.770Z] [BOT] 📍 [ROUTING] "Field Marketing Specialist, West" @ airtable
[2026-01-13T15:43:24.770Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:43:24.916Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T15:43:24.917Z] [BOT] ❌ Industry post failed: Field Marketing Specialist, West
⚠️  Channel full error count: 1/5
[2026-01-13T15:43:26.568Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T15:43:26.568Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T15:43:28.069Z] [BOT] 📍 [ROUTING] "Lead Solutions Consultant" @ airtable
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:43:28.203Z] [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Solutions Consultant @ airtable',
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
[2026-01-13T15:43:28.203Z] [BOT] ❌ Industry post failed: Lead Solutions Consultant
⚠️  Channel full error count: 2/5
[2026-01-13T15:43:29.869Z] [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Solutions Consultant @ airtable',
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
[2026-01-13T15:43:29.869Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-13T15:43:34.369Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T15:43:34.370Z] [BOT] 📍 [ROUTING] "Engineering Manager, AI Platform " @ airtable
[2026-01-13T15:43:34.370Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T15:43:34.370Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T15:43:34.551Z] [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, AI Platform  @ airtable',
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
[2026-01-13T15:43:34.551Z] [BOT] ❌ Industry post failed: Engineering Manager, AI Platform 
⚠️  Channel full error count: 3/5
[2026-01-13T15:43:36.172Z] [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, AI Platform  @ airtable',
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
[2026-01-13T15:43:36.172Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T15:43:37.674Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T15:43:37.674Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T15:43:37.847Z] [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  People Systems Engineer, Airtable Specialist @ airtable',
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
[2026-01-13T15:43:37.847Z] [BOT] ❌ Industry post failed:  People Systems Engineer, Airtable Specialist
⚠️  Channel full error count: 4/5
[2026-01-13T15:43:39.491Z] [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  People Systems Engineer, Airtable Specialist @ airtable',
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
[2026-01-13T15:43:39.491Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T15:43:40.992Z] [BOT] 📍 [ROUTING] "Product Manager, AI" @ airtable
   Category: AI (matched: "AI specialization")
[2026-01-13T15:43:40.993Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-13T15:43:41.125Z] [BOT ERROR] ❌ Error posting job Product Manager, AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Manager, AI @ airtable',
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
[2026-01-13T15:43:41.125Z] [BOT] ❌ Industry post failed: Product Manager, AI
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-13T15:43:41.126Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T15:43:41.126Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-13T15:43:41.126Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-13T15:43:41.126Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2026-01-13T15:43:41.126Z] [BOT] [STATS] Channel stats saved
[2026-01-13T15:43:41.126Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_1242ab09.json
[2026-01-13T15:43:41.136Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Field Marketing Specialist, West
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lead Solutions Consultant
- [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, AI Platform
- [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  People Systems Engineer, Airtable Specialist
- [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Manager, AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Manager, AI
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*