# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T20:54:23.934Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T20:53:59.597Z] ========================================
[2026-01-17T20:53:59.599Z] Discord Bot Execution Log
[2026-01-17T20:53:59.599Z] Environment: GitHub Actions
[2026-01-17T20:53:59.599Z] Node Version: v20.19.6
[2026-01-17T20:53:59.599Z] ========================================
[2026-01-17T20:53:59.599Z] Environment Variables Check:
[2026-01-17T20:53:59.599Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T20:53:59.599Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T20:53:59.600Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T20:53:59.600Z] 
Multi-Channel Configuration:
[2026-01-17T20:53:59.600Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.600Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.601Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T20:53:59.601Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T20:53:59.601Z] 
Data Files Check:
[2026-01-17T20:53:59.601Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43180 bytes)
[2026-01-17T20:53:59.610Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1327599 bytes)
[2026-01-17T20:53:59.610Z] 
========================================
[2026-01-17T20:53:59.610Z] Starting Enhanced Discord Bot...
[2026-01-17T20:53:59.610Z] ========================================
[2026-01-17T20:54:00.132Z] [BOT] ✅ Loaded V2 database: 2455 jobs
[2026-01-17T20:54:01.110Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T20:54:01.111Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T20:54:01.111Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T20:54:01.229Z] [BOT] ✅ Loaded pending queue: 2899 total (2879 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Engineer at Marvell
[2026-01-17T20:54:01.232Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T20:54:01.233Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T20:54:01.233Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T20:54:01.234Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T20:54:01.234Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T20:54:01.238Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T20:54:01.239Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_00a3af23
[2026-01-17T20:54:01.239Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T20:54:01.243Z] [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T20:54:01.529Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_00a3af23 in #🤖・ai-jobs
  ✅ Industry: AI Engineer @ ORG_00a3af23
[2026-01-17T20:54:03.485Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_00a3af23 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T20:54:04.986Z] [BOT] 💾 Marked as posted: AI Engineer @ ORG_00a3af23 (instance #1)
[2026-01-17T20:54:04.986Z] [BOT] 💾 BEFORE ARCHIVING: 2456 jobs in database
[2026-01-17T20:54:04.988Z] [BOT] ✅ No jobs to archive (all 2456 jobs within 7-day window)
[2026-01-17T20:54:05.009Z] [BOT] 💾 Saved posted_jobs.json: 2456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:54:05.010Z] [BOT] 📍 [ROUTING] "Applied Scientist" @ ORG_72fd3ae0
[2026-01-17T20:54:05.010Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T20:54:05.311Z] [BOT] ✅ Created forum post: 🎨 Applied Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-17T20:54:05.311Z] [BOT] ✅ Industry: Applied Scientist @ ORG_72fd3ae0
[2026-01-17T20:54:07.002Z] [BOT] ✅ Created forum post: 🎨 Applied Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T20:54:08.503Z] [BOT] 💾 Marked as posted: Applied Scientist @ ORG_72fd3ae0 (instance #1)
[2026-01-17T20:54:08.503Z] [BOT] 💾 BEFORE ARCHIVING: 2457 jobs in database
[2026-01-17T20:54:08.504Z] [BOT] ✅ No jobs to archive (all 2457 jobs within 7-day window)
[2026-01-17T20:54:08.517Z] [BOT] 💾 Saved posted_jobs.json: 2457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T20:54:08.517Z] [BOT] 📍 [ROUTING] "Senior Research Specialist 1" @ ORG_03272755inceton University
   Category: AI (matched: "machine learning")
[2026-01-17T20:54:08.517Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T20:54:08.615Z] [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Research Specialist 1 @ ORG_03272755inceton University',
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
[2026-01-17T20:54:08.616Z] [BOT] ❌ Industry post failed: Senior Research Specialist 1
⚠️  Channel full error count: 1/5
[2026-01-17T20:54:10.253Z] [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Research Specialist 1 @ ORG_03272755inceton University',
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
[2026-01-17T20:54:10.253Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T20:54:11.754Z] [BOT] 📍 [ROUTING] "Faculty Fellow" @ ORG_54f9eaef International Group (SIG)
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T20:54:11.894Z] [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG)',
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
[2026-01-17T20:54:11.895Z] [BOT] ❌ Industry post failed: Faculty Fellow
⚠️  Channel full error count: 2/5
[2026-01-17T20:54:13.573Z] [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG)',
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
[2026-01-17T20:54:13.574Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T20:54:18.076Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-17T20:54:18.077Z] [BOT] 📍 [ROUTING] "CPM Data Processor 1" @ ORG_a3b50c47 of Montana
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:54:18.240Z] [BOT ERROR] ❌ Error posting job CPM Data Processor 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 CPM Data Processor 1 @ ORG_a3b50c47 of Montana',
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
[2026-01-17T20:54:18.240Z] [BOT] ❌ Industry post failed: CPM Data Processor 1
⚠️  Channel full error count: 3/5
[2026-01-17T20:54:19.742Z] [BOT] 📍 [ROUTING] "Systems Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T20:54:19.742Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:54:19.847Z] [BOT ERROR] ❌ Error posting job Systems Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Systems Engineer 1 @ RTX',
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
[2026-01-17T20:54:19.847Z] [BOT] ❌ Industry post failed: Systems Engineer 1
⚠️  Channel full error count: 4/5
[2026-01-17T20:54:21.466Z] [BOT ERROR] ❌ Error posting job Systems Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Systems Engineer 1 @ RTX',
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
[2026-01-17T20:54:21.467Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T20:54:22.968Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T20:54:23.104Z] [BOT ERROR] ❌ Error posting job Software Engineer 2: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2 @ RTX',
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
[2026-01-17T20:54:23.104Z] [BOT] ❌ Industry post failed: Software Engineer 2
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T20:54:23.105Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T20:54:23.105Z] [BOT] Total attempts: 12
   Successful: 4
   Failed: 8
   Skipped: 0
[2026-01-17T20:54:23.105Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T20:54:23.105Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-17T20:54:23.105Z] [BOT] 2. #🌉・san-francisco: 2 posts
[2026-01-17T20:54:23.105Z] [BOT] [STATS] Channel stats saved
[2026-01-17T20:54:23.106Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T20:54:23.119Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Research Specialist 1
- [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Faculty Fellow
- [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job CPM Data Processor 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: CPM Data Processor 1
- [BOT ERROR] ❌ Error posting job Systems Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Systems Engineer 1
- [BOT ERROR] ❌ Error posting job Systems Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 2
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*