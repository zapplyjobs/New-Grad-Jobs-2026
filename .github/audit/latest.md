# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T17:45:58.931Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T17:45:23.979Z] ========================================
[2026-01-19T17:45:23.981Z] Discord Bot Execution Log
[2026-01-19T17:45:23.981Z] Environment: GitHub Actions
[2026-01-19T17:45:23.981Z] Node Version: v20.19.6
[2026-01-19T17:45:23.981Z] ========================================
[2026-01-19T17:45:23.981Z] Environment Variables Check:
[2026-01-19T17:45:23.981Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T17:45:23.981Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.981Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T17:45:23.981Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T17:45:23.981Z] 
Multi-Channel Configuration:
[2026-01-19T17:45:23.981Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.981Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.981Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T17:45:23.982Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T17:45:23.982Z] 
Data Files Check:
[2026-01-19T17:45:23.983Z] .github/data/new_jobs.json: ✅ Exists (10 items, 65805 bytes)
[2026-01-19T17:45:23.995Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1611424 bytes)
[2026-01-19T17:45:23.995Z] 
========================================
[2026-01-19T17:45:23.995Z] Starting Enhanced Discord Bot...
[2026-01-19T17:45:23.995Z] ========================================
[2026-01-19T17:45:24.467Z] [BOT] ✅ Loaded V2 database: 2963 jobs
[2026-01-19T17:45:25.236Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T17:45:25.237Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T17:45:25.237Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T17:45:25.395Z] [BOT] ✅ Loaded pending queue: 2817 total (2797 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-19T17:45:25.399Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T17:45:25.399Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T17:45:25.399Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T17:45:25.400Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-19T17:45:25.400Z] [BOT] 📍 1 jobs with multiple locations:
   - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T17:45:25.400Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T17:45:25.405Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T17:45:25.405Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
[2026-01-19T17:45:25.405Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T17:45:25.410Z] [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T17:45:25.802Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada in #📣・marketing-jobs
[2026-01-19T17:45:25.803Z] [BOT] ✅ Industry: Senior Field Marketing Manager (Enterprise SLED East) @ verkada
[2026-01-19T17:45:27.592Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada in #🗽・new-york
[2026-01-19T17:45:27.592Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T17:45:29.093Z] [BOT] 💾 Marked as posted: Senior Field Marketing Manager (Enterprise SLED East) @ verkada (instance #1)
[2026-01-19T17:45:29.094Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-19T17:45:29.096Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T17:45:29.100Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-19T17:45:29.100Z] [BOT] ✅ Archiving complete: 4 archived, 2960 active
[2026-01-19T17:45:29.122Z] [BOT] 💾 Saved posted_jobs.json: 2960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T17:45:32.123Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-19T17:45:32.123Z] [BOT] 📍 [ROUTING] "Senior Technical Recruiter (Temporary)" @ discord
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-19T17:45:32.423Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Recruiter (Temporary) @ discord in #📁・JID_e938df7b
  ✅ Industry: Senior Technical Recruiter (Temporary) @ discord
[2026-01-19T17:45:34.285Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Recruiter (Temporary) @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T17:45:35.787Z] [BOT] 💾 Marked as posted: Senior Technical Recruiter (Temporary) @ discord (instance #1)
[2026-01-19T17:45:35.787Z] [BOT] 💾 BEFORE ARCHIVING: 2961 jobs in database
[2026-01-19T17:45:35.789Z] [BOT] ✅ No jobs to archive (all 2961 jobs within 7-day window)
[2026-01-19T17:45:35.812Z] [BOT] 💾 Saved posted_jobs.json: 2961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T17:45:38.813Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-19T17:45:38.814Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T17:45:38.814Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T17:45:38.979Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer @ Axle',
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
[2026-01-19T17:45:38.979Z] [BOT] ❌ Industry post failed: Developer
⚠️  Channel full error count: 1/5
[2026-01-19T17:45:40.680Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer @ Axle',
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
[2026-01-19T17:45:40.681Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T17:45:42.183Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_91892627
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T17:45:42.183Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T17:45:42.335Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ Mobilityware',
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
[2026-01-19T17:45:42.335Z] [BOT] ❌ Industry post failed: Data Analyst 1
⚠️  Channel full error count: 2/5
[2026-01-19T17:45:43.969Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ Mobilityware',
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
[2026-01-19T17:45:43.969Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T17:45:48.471Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T17:45:48.472Z] [BOT] 📍 [ROUTING] "Data Labeling Specialist - Imagery" @ ORG_6c847a27 Power
   Category: AI (matched: "machine learning")
[2026-01-19T17:45:48.472Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T17:45:48.626Z] [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power',
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
[2026-01-19T17:45:48.626Z] [BOT] ❌ Industry post failed: Data Labeling Specialist - Imagery
⚠️  Channel full error count: 3/5
[2026-01-19T17:45:50.276Z] [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power',
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
[2026-01-19T17:45:50.276Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T17:45:54.777Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T17:45:54.778Z] [BOT] 📍 [ROUTING] "Associate – Marketing Technologist" @ ORG_66279f04 Investments
[2026-01-19T17:45:54.778Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T17:45:54.943Z] [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments',
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
[2026-01-19T17:45:54.944Z] [BOT] ❌ Industry post failed: Associate – Marketing Technologist
⚠️  Channel full error count: 4/5
[2026-01-19T17:45:56.556Z] [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments',
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
[2026-01-19T17:45:56.557Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T17:45:58.058Z] [BOT] 📍 [ROUTING] "Digital Analyst" @ ORG_7eb1e1f5
[2026-01-19T17:45:58.059Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T17:45:58.171Z] [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Analyst @ TelevisaUnivision',
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
[2026-01-19T17:45:58.171Z] [BOT] ❌ Industry post failed: Digital Analyst
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T17:45:58.172Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 13
[2026-01-19T17:45:58.172Z] [BOT] Successful: 4
   Failed: 9
   Skipped: 0
[2026-01-19T17:45:58.172Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T17:45:58.172Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-19T17:45:58.172Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
     3. #📁・JID_e938df7b: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-19T17:45:58.172Z] [BOT] [STATS] Channel stats saved
[2026-01-19T17:45:58.173Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T17:45:58.182Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst 1
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Labeling Specialist - Imagery
- [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate – Marketing Technologist
- [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Analyst
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*