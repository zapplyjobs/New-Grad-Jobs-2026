# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T19:37:26.406Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T19:36:52.856Z] ========================================
[2026-01-17T19:36:52.858Z] Discord Bot Execution Log
[2026-01-17T19:36:52.858Z] Environment: GitHub Actions
[2026-01-17T19:36:52.858Z] Node Version: v20.19.6
[2026-01-17T19:36:52.858Z] ========================================
[2026-01-17T19:36:52.858Z] Environment Variables Check:
[2026-01-17T19:36:52.858Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T19:36:52.859Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T19:36:52.859Z] 
Multi-Channel Configuration:
[2026-01-17T19:36:52.859Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.859Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.860Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T19:36:52.860Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T19:36:52.860Z] 
Data Files Check:
[2026-01-17T19:36:52.861Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114625 bytes)
[2026-01-17T19:36:52.870Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1314732 bytes)
[2026-01-17T19:36:52.870Z] 
========================================
[2026-01-17T19:36:52.870Z] Starting Enhanced Discord Bot...
[2026-01-17T19:36:52.870Z] ========================================
[2026-01-17T19:36:53.389Z] [BOT] ✅ Loaded V2 database: 2431 jobs
[2026-01-17T19:36:54.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T19:36:54.154Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T19:36:54.154Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T19:36:54.295Z] [BOT] ✅ Loaded pending queue: 2905 total (2885 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-01-17T19:36:54.297Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T19:36:54.298Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T19:36:54.298Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T19:36:54.299Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T19:36:54.299Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T19:36:54.304Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-17T19:36:54.304Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Machine Learning (Safety)" @ discord
[2026-01-17T19:36:54.305Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T19:36:54.309Z] [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T19:36:54.586Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Machine Learning (Safety) @ discord in #🤖・ai-jobs
[2026-01-17T19:36:54.586Z] [BOT] ✅ Industry: Staff Software Engineer, Machine Learning (Safety) @ discord
[2026-01-17T19:36:56.266Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Machine Learning (Safety) @ discord in #🌉・san-francisco
[2026-01-17T19:36:56.266Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T19:36:57.766Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Machine Learning (Safety) @ discord (instance #1)
[2026-01-17T19:36:57.766Z] [BOT] 💾 BEFORE ARCHIVING: 2432 jobs in database
[2026-01-17T19:36:57.768Z] [BOT] ✅ No jobs to archive (all 2432 jobs within 7-day window)
[2026-01-17T19:36:57.786Z] [BOT] 💾 Saved posted_jobs.json: 2432 active jobs
[2026-01-17T19:36:57.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T19:36:57.787Z] [BOT] 📍 [ROUTING] "Senior Director, Marketing Communications" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
[2026-01-17T19:36:57.787Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T19:36:57.997Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Marketing Communications @ gohighlevel in #🤖・ai-jobs
[2026-01-17T19:36:57.997Z] [BOT] ✅ Industry: Senior Director, Marketing Communications @ gohighlevel
[2026-01-17T19:36:59.499Z] [BOT] 💾 Marked as posted: Senior Director, Marketing Communications @ gohighlevel (instance #1)
[2026-01-17T19:36:59.500Z] [BOT] 💾 BEFORE ARCHIVING: 2433 jobs in database
[2026-01-17T19:36:59.501Z] [BOT] ✅ No jobs to archive (all 2433 jobs within 7-day window)
[2026-01-17T19:36:59.515Z] [BOT] 💾 Saved posted_jobs.json: 2433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T19:37:02.516Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T19:37:02.516Z] [BOT] 📍 [ROUTING] "Software Integration Engineer, Factory Firmware" @ ORG_f89f8538
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T19:37:02.924Z] [BOT] ✅ Created forum post: ⚡ Software Integration Engineer, Factory Firmware @ ORG_f89f8538 in #💻・tech-jobs
[2026-01-17T19:37:02.924Z] [BOT] ✅ Industry: Software Integration Engineer, Factory Firmware @ ORG_f89f8538
[2026-01-17T19:37:04.554Z] [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '⚡ Software Integration Engineer, Factory Firmware @ Tesla',
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
[2026-01-17T19:37:04.554Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T19:37:06.055Z] [BOT] 💾 Marked as posted: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 (instance #1)
[2026-01-17T19:37:06.055Z] [BOT] 💾 BEFORE ARCHIVING: 2434 jobs in database
[2026-01-17T19:37:06.057Z] [BOT] ✅ No jobs to archive (all 2434 jobs within 7-day window)
[2026-01-17T19:37:06.074Z] [BOT] 💾 Saved posted_jobs.json: 2434 active jobs
[2026-01-17T19:37:06.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T19:37:06.074Z] [BOT] 📍 [ROUTING] "Security Development Project Specialist" @ anthropic
[2026-01-17T19:37:06.074Z] [BOT] Category: TECH (matched: "security")
[2026-01-17T19:37:06.074Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T19:37:06.191Z] [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Development Project Specialist @ anthropic',
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
[2026-01-17T19:37:06.191Z] [BOT] ❌ Industry post failed: Security Development Project Specialist
⚠️  Channel full error count: 1/5
[2026-01-17T19:37:07.809Z] [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Development Project Specialist @ anthropic',
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
[2026-01-17T19:37:07.809Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T19:37:09.310Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Services" @ anthropic
[2026-01-17T19:37:09.310Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T19:37:09.474Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Claude Services: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Claude Services @ anthropic',
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
[2026-01-17T19:37:09.474Z] [BOT] ❌ Industry post failed: Engineering Manager, Claude Services
⚠️  Channel full error count: 2/5
[2026-01-17T19:37:11.098Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Claude Services: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Claude Services @ anthropic',
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
[2026-01-17T19:37:11.098Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T19:37:15.600Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-17T19:37:15.600Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (Contract)" @ vercel
   Category: MARKETING (matched: "marketing")
[2026-01-17T19:37:15.600Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T19:37:15.866Z] [BOT ERROR] ❌ Error posting job Recruiting Coordinator (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiting Coordinator (Contract) @ vercel',
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
[2026-01-17T19:37:15.866Z] [BOT] ❌ Industry post failed: Recruiting Coordinator (Contract)
⚠️  Channel full error count: 3/5
[2026-01-17T19:37:17.497Z] [BOT ERROR] ❌ Error posting job Recruiting Coordinator (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiting Coordinator (Contract) @ vercel',
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
[2026-01-17T19:37:17.497Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T19:37:18.998Z] [BOT] 📍 [ROUTING] "Senior Lidar Specialist" @ ORG_6ae04125
   Category: MARKETING (matched: "growth")
[2026-01-17T19:37:18.998Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T19:37:19.129Z] [BOT ERROR] ❌ Error posting job Senior Lidar Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Lidar Specialist @ Parkhill',
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
[2026-01-17T19:37:19.129Z] [BOT] ❌ Industry post failed: Senior Lidar Specialist
⚠️  Channel full error count: 4/5
[2026-01-17T19:37:20.767Z] [BOT ERROR] ❌ Error posting job Senior Lidar Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Lidar Specialist @ Parkhill',
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
[2026-01-17T19:37:20.767Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T19:37:25.269Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-17T19:37:25.269Z] [BOT] 📍 [ROUTING] "Senior Manager, Enterprise Sales - Figma Weave (New York, United States)" @ figma
   Category: SALES (matched: "sales")
[2026-01-17T19:37:25.270Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T19:37:25.525Z] [BOT ERROR] ❌ Error posting job Senior Manager, Enterprise Sales - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Enterprise Sales - Figma Weave (New York, United States) @ figma',
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
[2026-01-17T19:37:25.525Z] [BOT] ❌ Industry post failed: Senior Manager, Enterprise Sales - Figma Weave (New York, United States)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T19:37:25.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T19:37:25.526Z] [BOT] Total attempts: 14
   Successful: 4
   Failed: 10
   Skipped: 0
[2026-01-17T19:37:25.526Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-17T19:37:25.527Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・san-francisco: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-17T19:37:25.527Z] [BOT] [STATS] Channel stats saved
[2026-01-17T19:37:25.527Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T19:37:25.540Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Development Project Specialist
- [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, Claude Services: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Claude Services
- [BOT ERROR] ❌ Error posting job Engineering Manager, Claude Services: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Recruiting Coordinator (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Recruiting Coordinator (Contract)
- [BOT ERROR] ❌ Error posting job Recruiting Coordinator (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Lidar Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Lidar Specialist
- [BOT ERROR] ❌ Error posting job Senior Lidar Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Manager, Enterprise Sales - Figma Weave (New York, United States): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Enterprise Sales - Figma Weave (New York, United States)
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*