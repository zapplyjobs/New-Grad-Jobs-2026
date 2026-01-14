# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T13:13:01.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T13:12:26.274Z] ========================================
[2026-01-14T13:12:26.276Z] Discord Bot Execution Log
[2026-01-14T13:12:26.276Z] Environment: GitHub Actions
[2026-01-14T13:12:26.276Z] Node Version: v20.19.6
[2026-01-14T13:12:26.276Z] ========================================
[2026-01-14T13:12:26.276Z] Environment Variables Check:
[2026-01-14T13:12:26.276Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T13:12:26.277Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T13:12:26.277Z] 
Multi-Channel Configuration:
[2026-01-14T13:12:26.277Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.277Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.278Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.278Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.278Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T13:12:26.278Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T13:12:26.278Z] 
Data Files Check:
[2026-01-14T13:12:26.279Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63037 bytes)
[2026-01-14T13:12:26.284Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 714633 bytes)
[2026-01-14T13:12:26.284Z] 
========================================
[2026-01-14T13:12:26.284Z] Starting Enhanced Discord Bot...
[2026-01-14T13:12:26.284Z] ========================================
[2026-01-14T13:12:26.807Z] [BOT] ✅ Loaded V2 database: 1344 jobs
[2026-01-14T13:12:27.469Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T13:12:27.469Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T13:12:27.470Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T13:12:27.578Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Java Developer - Associate at Morgan Stanley
[2026-01-14T13:12:27.580Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T13:12:27.580Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T13:12:27.581Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T13:12:27.581Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T13:12:27.582Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T13:12:27.586Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T13:12:27.587Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-14T13:12:27.587Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:27.604Z] [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T13:12:27.824Z] [BOT] ✅ Created forum post: 🏢 Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-14T13:12:27.825Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-14T13:12:29.453Z] [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Developer - Associate @ ORG_02281b3b Stanley',
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
[2026-01-14T13:12:29.453Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-14T13:12:30.954Z] [BOT] 💾 Marked as posted: Java Developer - Associate @ ORG_02281b3b Stanley (instance #1)
[2026-01-14T13:12:30.955Z] [BOT] 💾 BEFORE ARCHIVING: 1345 jobs in database
[2026-01-14T13:12:30.956Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T13:12:30.960Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-14T13:12:30.961Z] [BOT] ✅ Archiving complete: 3 archived, 1342 active
[2026-01-14T13:12:30.971Z] [BOT] 💾 Saved posted_jobs.json: 1342 active jobs
[2026-01-14T13:12:30.971Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T13:12:30.972Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-14T13:12:30.972Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:31.258Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-14T13:12:31.258Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-14T13:12:32.987Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-14T13:12:34.488Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 (instance #1)
[2026-01-14T13:12:34.488Z] [BOT] 💾 BEFORE ARCHIVING: 1343 jobs in database
[2026-01-14T13:12:34.490Z] [BOT] ✅ No jobs to archive (all 1343 jobs within 7-day window)
[2026-01-14T13:12:34.499Z] [BOT] 💾 Saved posted_jobs.json: 1343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T13:12:34.499Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-14T13:12:34.500Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:35.067Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-14T13:12:36.720Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T13:12:38.221Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career @ ORG_07b9fafa (instance #1)
[2026-01-14T13:12:38.221Z] [BOT] 💾 BEFORE ARCHIVING: 1344 jobs in database
[2026-01-14T13:12:38.222Z] [BOT] ✅ No jobs to archive (all 1344 jobs within 7-day window)
[2026-01-14T13:12:38.232Z] [BOT] 💾 Saved posted_jobs.json: 1344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T13:12:38.234Z] [BOT] 📍 [ROUTING] "Packaging Engineer - Sustainability" @ ORG_b344d80e Campbell's Company
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T13:12:38.234Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:38.454Z] [BOT] ✅ Created forum post: 🏢 Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company in #💻・tech-jobs
[2026-01-14T13:12:38.454Z] [BOT] ✅ Industry: Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company
[2026-01-14T13:12:40.037Z] [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company",
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
[2026-01-14T13:12:40.037Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T13:12:41.538Z] [BOT] 💾 Marked as posted: Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company (instance #1)
[2026-01-14T13:12:41.539Z] [BOT] 💾 BEFORE ARCHIVING: 1345 jobs in database
[2026-01-14T13:12:41.540Z] [BOT] ✅ No jobs to archive (all 1345 jobs within 7-day window)
[2026-01-14T13:12:41.549Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
[2026-01-14T13:12:41.549Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T13:12:41.550Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
   Category: TECH (matched: "software")
[2026-01-14T13:12:41.550Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:41.706Z] [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 New Grad Software Engineer - Backend 2026 @ Circle',
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
[2026-01-14T13:12:41.706Z] [BOT] ❌ Industry post failed: New Grad Software Engineer - Backend 2026
⚠️  Channel full error count: 1/5
[2026-01-14T13:12:43.379Z] [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 New Grad Software Engineer - Backend 2026 @ Circle',
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
[2026-01-14T13:12:43.379Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T13:12:44.881Z] [BOT] 📍 [ROUTING] "Engineering Support Associate" @ ORG_e1de44d1ington County VA
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T13:12:44.999Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T13:12:45.000Z] [BOT] ❌ Industry post failed: Engineering Support Associate
⚠️  Channel full error count: 2/5
[2026-01-14T13:12:46.585Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T13:12:46.585Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T13:12:51.087Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T13:12:51.088Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T13:12:51.329Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
[2026-01-14T13:12:51.329Z] [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
⚠️  Channel full error count: 3/5
[2026-01-14T13:12:52.959Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
[2026-01-14T13:12:52.960Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-14T13:12:54.460Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T13:12:54.607Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California',
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
[2026-01-14T13:12:54.607Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar Research Associate
⚠️  Channel full error count: 4/5
[2026-01-14T13:12:56.200Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California',
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
[2026-01-14T13:12:56.200Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-14T13:13:00.701Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T13:13:00.702Z] [BOT] 📍 [ROUTING] "Clinical Analyst 1" @ ORG_b344d80e University of Kansas Hospital
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-14T13:13:00.702Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T13:13:00.824Z] [BOT ERROR] ❌ Error posting job Clinical Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-14T13:13:00.824Z] [BOT] ❌ Industry post failed: Clinical Analyst 1
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T13:13:00.825Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T13:13:00.825Z] [BOT] Total attempts: 17
   Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-14T13:13:00.825Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T13:13:00.825Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🦢・los-angeles: 1 posts
[2026-01-14T13:13:00.825Z] [BOT] 3. #🗽・new-york: 1 posts
[2026-01-14T13:13:00.825Z] [BOT] [STATS] Channel stats saved
[2026-01-14T13:13:00.826Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T13:13:00.838Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: New Grad Software Engineer - Backend 2026
- [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Support Associate
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar Research Associate
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Clinical Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Clinical Analyst 1
- ❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*