# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T23:55:39.926Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T23:55:19.385Z] ========================================
[2026-01-19T23:55:19.388Z] Discord Bot Execution Log
[2026-01-19T23:55:19.388Z] Environment: GitHub Actions
[2026-01-19T23:55:19.388Z] Node Version: v20.19.6
[2026-01-19T23:55:19.388Z] ========================================
[2026-01-19T23:55:19.388Z] Environment Variables Check:
[2026-01-19T23:55:19.388Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T23:55:19.388Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.388Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T23:55:19.388Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T23:55:19.388Z] 
Multi-Channel Configuration:
[2026-01-19T23:55:19.389Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T23:55:19.389Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T23:55:19.389Z] 
Data Files Check:
[2026-01-19T23:55:19.392Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48623 bytes)
[2026-01-19T23:55:19.405Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1548747 bytes)
[2026-01-19T23:55:19.406Z] 
========================================
[2026-01-19T23:55:19.406Z] Starting Enhanced Discord Bot...
[2026-01-19T23:55:19.406Z] ========================================
[2026-01-19T23:55:19.943Z] [BOT] ✅ Loaded V2 database: 2824 jobs
[2026-01-19T23:55:20.639Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T23:55:20.640Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T23:55:20.640Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T23:55:20.760Z] [BOT] ✅ Loaded pending queue: 2809 total (2789 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Data Specialist - Florida - US at RWS
[2026-01-19T23:55:20.765Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T23:55:20.765Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-19T23:55:20.859Z] [BOT] ✅ Loaded pending queue: 2809 total (2789 pending, 20 enriched, 0 posted)
[2026-01-19T23:55:21.031Z] [BOT] ✅ Saved pending queue: 2808 total (2789 pending, 19 enriched, 0 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-19T23:55:21.032Z] [BOT] 📋 After blacklist filter: 19 jobs (1 blacklisted)
📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-19T23:55:21.033Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-19T23:55:21.033Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T23:55:21.039Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T23:55:21.039Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Florida - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T23:55:21.057Z] [BOT ERROR] (node:2594) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T23:55:21.286Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Florida - US @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist - Florida - US @ ORG_f3ae3598
[2026-01-19T23:55:22.789Z] [BOT] 💾 Marked as posted: AI Data Specialist - Florida - US @ ORG_f3ae3598 (instance #1)
[2026-01-19T23:55:22.789Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-19T23:55:22.791Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T23:55:22.796Z] [BOT] 📦 Archived 30 jobs to 2026-01.json (30 total in archive)
[2026-01-19T23:55:22.796Z] [BOT] ✅ Archiving complete: 30 archived, 2795 active
[2026-01-19T23:55:22.815Z] [BOT] 💾 Saved posted_jobs.json: 2795 active jobs
[2026-01-19T23:55:22.815Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States" @ ORG_3cfbdbc3
[2026-01-19T23:55:22.815Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T23:55:22.971Z] [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ Uber',
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
[2026-01-19T23:55:22.972Z] [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
⚠️  Channel full error count: 1/5
[2026-01-19T23:55:24.619Z] [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ Uber',
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
[2026-01-19T23:55:24.619Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T23:55:26.120Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Safety Processing" @ discord
[2026-01-19T23:55:26.121Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T23:55:26.231Z] [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Software Engineer - Safety Processing @ discord',
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
[2026-01-19T23:55:26.231Z] [BOT] ❌ Industry post failed: Senior Software Engineer - Safety Processing
⚠️  Channel full error count: 2/5
[2026-01-19T23:55:27.852Z] [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Software Engineer - Safety Processing @ discord',
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
[2026-01-19T23:55:27.852Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T23:55:32.354Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-19T23:55:32.355Z] [BOT] 📍 [ROUTING] "Leadership program new grad Engineer - Parts" @ ORG_41a6741einghouse Electric Company
[2026-01-19T23:55:32.355Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:55:32.613Z] [BOT ERROR] ❌ Error posting job Leadership program new grad Engineer - Parts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T23:55:32.613Z] [BOT] ❌ Industry post failed: Leadership program new grad Engineer - Parts
⚠️  Channel full error count: 3/5
[2026-01-19T23:55:34.232Z] [BOT ERROR] ❌ Error posting job Leadership program new grad Engineer - Parts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T23:55:34.232Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T23:55:35.734Z] [BOT] 📍 [ROUTING] "Ophthalmic Technician 1" @ ORG_8dfd9000 Partners
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:55:35.895Z] [BOT ERROR] ❌ Error posting job Ophthalmic Technician 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Ophthalmic Technician 1 @ ORG_8dfd9000 Partners',
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
[2026-01-19T23:55:35.895Z] [BOT] ❌ Industry post failed: Ophthalmic Technician 1
⚠️  Channel full error count: 4/5
[2026-01-19T23:55:37.510Z] [BOT ERROR] ❌ Error posting job Ophthalmic Technician 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Ophthalmic Technician 1 @ ORG_8dfd9000 Partners',
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
[2026-01-19T23:55:37.510Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T23:55:39.011Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Video Agent" @ ORG_89070b6e
   Category: TECH (matched: "software")
[2026-01-19T23:55:39.011Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:55:39.152Z] [BOT ERROR] ❌ Error posting job Software Engineer - AI Video Agent: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - AI Video Agent @ OpusClip',
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
[2026-01-19T23:55:39.152Z] [BOT] ❌ Industry post failed: Software Engineer - AI Video Agent
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T23:55:39.153Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T23:55:39.153Z] [BOT] Total attempts: 11
   Successful: 1
   Failed: 9
   Skipped: 1
[2026-01-19T23:55:39.153Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T23:55:39.153Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-19T23:55:39.154Z] [BOT] 1. #🤖・ai-jobs: 1 posts
[2026-01-19T23:55:39.154Z] [BOT] [STATS] Channel stats saved
[2026-01-19T23:55:39.154Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T23:55:39.170Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2594) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
- [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Software Engineer - Safety Processing
- [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Leadership program new grad Engineer - Parts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Leadership program new grad Engineer - Parts
- [BOT ERROR] ❌ Error posting job Leadership program new grad Engineer - Parts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Ophthalmic Technician 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Ophthalmic Technician 1
- [BOT ERROR] ❌ Error posting job Ophthalmic Technician 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - AI Video Agent: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - AI Video Agent
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*