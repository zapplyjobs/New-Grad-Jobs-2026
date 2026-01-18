# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T20:41:51.932Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T20:40:55.968Z] ========================================
[2026-01-18T20:40:55.970Z] Discord Bot Execution Log
[2026-01-18T20:40:55.970Z] Environment: GitHub Actions
[2026-01-18T20:40:55.970Z] Node Version: v20.19.6
[2026-01-18T20:40:55.970Z] ========================================
[2026-01-18T20:40:55.970Z] Environment Variables Check:
[2026-01-18T20:40:55.971Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T20:40:55.971Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T20:40:55.971Z] 
Multi-Channel Configuration:
[2026-01-18T20:40:55.971Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.971Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.972Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.972Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.972Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T20:40:55.972Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T20:40:55.972Z] 
Data Files Check:
[2026-01-18T20:40:55.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115015 bytes)
[2026-01-18T20:40:55.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1476530 bytes)
[2026-01-18T20:40:55.983Z] 
========================================
[2026-01-18T20:40:55.983Z] Starting Enhanced Discord Bot...
[2026-01-18T20:40:55.983Z] ========================================
[2026-01-18T20:40:56.544Z] [BOT] ✅ Loaded V2 database: 2723 jobs
[2026-01-18T20:40:57.135Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T20:40:57.136Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T20:40:57.136Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T20:40:57.256Z] [BOT] ✅ Loaded pending queue: 2837 total (2817 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Trust Lead at anthropic
[2026-01-18T20:40:57.259Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T20:40:57.259Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T20:40:57.259Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T20:40:57.260Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T20:40:57.260Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T20:40:57.265Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T20:40:57.265Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T20:40:57.266Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:40:57.270Z] [BOT ERROR] (node:2851) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T20:40:57.417Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T20:40:57.417Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 1/5
[2026-01-18T20:40:59.059Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T20:40:59.060Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:41:00.561Z] [BOT] 📍 [ROUTING] "Technical Product Marketing Lead" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T20:41:00.561Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:41:00.706Z] [BOT ERROR] ❌ Error posting job Technical Product Marketing Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Product Marketing Lead @ anthropic',
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
[2026-01-18T20:41:00.707Z] [BOT] ❌ Industry post failed: Technical Product Marketing Lead
⚠️  Channel full error count: 2/5
[2026-01-18T20:41:02.398Z] [BOT ERROR] ❌ Error posting job Technical Product Marketing Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Product Marketing Lead @ anthropic',
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
[2026-01-18T20:41:02.398Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:41:06.899Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T20:41:06.900Z] [BOT] 📍 [ROUTING] "Assoc Analyst Technology" @ ORG_4aef9434ine
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:41:07.065Z] [BOT ERROR] ❌ Error posting job Assoc Analyst Technology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Assoc Analyst Technology @ ORG_4aef9434ine',
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
[2026-01-18T20:41:07.065Z] [BOT] ❌ Industry post failed: Assoc Analyst Technology
⚠️  Channel full error count: 3/5
[2026-01-18T20:41:11.567Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T20:41:11.568Z] [BOT] 📍 [ROUTING] "Research Data Analyst 1" @ Children's Hospital of Philadelphia
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T20:41:11.568Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T20:41:11.903Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst 1 @ Children's Hospital of Philadelphia in #📈・JID_fb739488
  ✅ Industry: Research Data Analyst 1 @ Children's Hospital of Philadelphia
[2026-01-18T20:41:13.756Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst 1 @ Children's Hospital of Philadelphia in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:41:15.258Z] [BOT] 💾 Marked as posted: Research Data Analyst 1 @ Children's Hospital of Philadelphia (instance #1)
[2026-01-18T20:41:15.258Z] [BOT] 💾 BEFORE ARCHIVING: 2724 jobs in database
[2026-01-18T20:41:15.260Z] [BOT] ✅ No jobs to archive (all 2724 jobs within 7-day window)
[2026-01-18T20:41:15.286Z] [BOT] 💾 Saved posted_jobs.json: 2724 active jobs
[2026-01-18T20:41:15.286Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:18.288Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T20:41:18.289Z] [BOT] 📍 [ROUTING] "Program Manager, Global Education" @ anthropic
[2026-01-18T20:41:18.289Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-18T20:41:18.461Z] [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Program Manager, Global Education @ anthropic',
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
[2026-01-18T20:41:18.462Z] [BOT] ❌ Industry post failed: Program Manager, Global Education
⚠️  Channel full error count: 1/5
[2026-01-18T20:41:20.201Z] [BOT] ✅ Created forum post: 🏢 Program Manager, Global Education @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T20:41:21.702Z] [BOT] 💾 Marked as posted: Program Manager, Global Education @ anthropic (instance #1)
[2026-01-18T20:41:21.702Z] [BOT] 💾 BEFORE ARCHIVING: 2725 jobs in database
[2026-01-18T20:41:21.704Z] [BOT] ✅ No jobs to archive (all 2725 jobs within 7-day window)
[2026-01-18T20:41:21.723Z] [BOT] 💾 Saved posted_jobs.json: 2725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:21.723Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Finance)" @ reddit
[2026-01-18T20:41:21.723Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T20:41:21.918Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Finance) @ reddit in #🤖・ai-jobs
[2026-01-18T20:41:21.918Z] [BOT] ✅ Industry: Senior Client Partner, Large Customer Sales (Finance) @ reddit
[2026-01-18T20:41:23.856Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Finance) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T20:41:25.358Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Finance) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 2726 jobs in database
[2026-01-18T20:41:25.360Z] [BOT] ✅ No jobs to archive (all 2726 jobs within 7-day window)
[2026-01-18T20:41:25.377Z] [BOT] 💾 Saved posted_jobs.json: 2726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:25.377Z] [BOT] 📍 [ROUTING] "Data Scientist" @ 84.51 Degrees
[2026-01-18T20:41:25.378Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T20:41:25.581Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ 84.51 Degrees in #🤖・ai-jobs
[2026-01-18T20:41:25.581Z] [BOT] ✅ Industry: Data Scientist @ 84.51 Degrees
[2026-01-18T20:41:27.245Z] [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist @ 84.51 Degrees',
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
[2026-01-18T20:41:27.245Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-18T20:41:28.746Z] [BOT] 💾 Marked as posted: Data Scientist @ 84.51 Degrees (instance #1)
[2026-01-18T20:41:28.746Z] [BOT] 💾 BEFORE ARCHIVING: 2727 jobs in database
[2026-01-18T20:41:28.748Z] [BOT] ✅ No jobs to archive (all 2727 jobs within 7-day window)
[2026-01-18T20:41:28.764Z] [BOT] 💾 Saved posted_jobs.json: 2727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:31.764Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-18T20:41:31.765Z] [BOT] 📍 [ROUTING] "Software Engineer 1 – New Grad - Fullstack - Risk Engineering" @ ORG_c2a520b8
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:41:31.904Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 – New Grad - Fullstack - Risk Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ Flex',
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
[2026-01-18T20:41:31.904Z] [BOT] ❌ Industry post failed: Software Engineer 1 – New Grad - Fullstack - Risk Engineering
⚠️  Channel full error count: 1/5
[2026-01-18T20:41:33.760Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T20:41:35.261Z] [BOT] 💾 Marked as posted: Software Engineer 1 – New Grad - Fullstack - Risk Engineering @ ORG_c2a520b8 (instance #1)
[2026-01-18T20:41:35.261Z] [BOT] 💾 BEFORE ARCHIVING: 2728 jobs in database
[2026-01-18T20:41:35.263Z] [BOT] ✅ No jobs to archive (all 2728 jobs within 7-day window)
[2026-01-18T20:41:35.282Z] [BOT] 💾 Saved posted_jobs.json: 2728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:38.282Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T20:41:38.283Z] [BOT] 📍 [ROUTING] "Junior Application Solutions Analyst" @ ORG_41a6741einghouse Electric Company
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T20:41:38.728Z] [BOT] ✅ Created forum post: 🏢 Junior Application Solutions Analyst @ ORG_41a6741einghouse Electric Company in #📣・marketing-jobs
  ✅ Industry: Junior Application Solutions Analyst @ ORG_41a6741einghouse Electric Company
[2026-01-18T20:41:40.465Z] [BOT] ✅ Created forum post: 🏢 Junior Application Solutions Analyst @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:41:41.966Z] [BOT] 💾 Marked as posted: Junior Application Solutions Analyst @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-18T20:41:41.966Z] [BOT] 💾 BEFORE ARCHIVING: 2729 jobs in database
[2026-01-18T20:41:41.968Z] [BOT] ✅ No jobs to archive (all 2729 jobs within 7-day window)
[2026-01-18T20:41:41.985Z] [BOT] 💾 Saved posted_jobs.json: 2729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:41:41.985Z] [BOT] 📍 [ROUTING] "Construction Inspector" @ ORG_b1bcd3e3
[2026-01-18T20:41:41.986Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T20:41:42.128Z] [BOT ERROR] ❌ Error posting job Construction Inspector: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Construction Inspector @ Consor',
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
[2026-01-18T20:41:42.128Z] [BOT] ❌ Industry post failed: Construction Inspector
⚠️  Channel full error count: 1/5
[2026-01-18T20:41:43.780Z] [BOT ERROR] ❌ Error posting job Construction Inspector: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Construction Inspector @ Consor',
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
[2026-01-18T20:41:43.780Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T20:41:48.282Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-18T20:41:48.283Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
[2026-01-18T20:41:48.283Z] [BOT] ⏭️  Skipping duplicate: JID_2f31a4d7 (posted within 7 days)
[2026-01-18T20:41:48.283Z] [BOT] ⏭️  Skipping duplicate: JID_62c6467f (posted within 7 days)
[2026-01-18T20:41:48.283Z] [BOT] ⏭️  Skipping duplicate: JID_4855d707 (posted within 7 days)
[2026-01-18T20:41:48.284Z] [BOT] ⏭️  Skipping duplicate: JID_f9074f80-jr_-JID_6185f07a (posted within 7 days)
[2026-01-18T20:41:48.284Z] [BOT] ⏭️  Skipping duplicate: JID_478f4c4d (posted within 7 days)
[2026-01-18T20:41:48.400Z] [BOT] ✅ Loaded pending queue: 2837 total (2817 pending, 20 enriched, 0 posted)
[2026-01-18T20:41:48.574Z] [BOT] ✅ Saved pending queue: 2837 total (2817 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-18T20:41:48.574Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T20:41:48.635Z] [BOT] 📂 Loaded 4855 existing routing entries
[2026-01-18T20:41:48.703Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T20:41:48.704Z] [BOT] Total entries: 4865
   Timestamp: 2026-01-18T20:41:48.684Z
[2026-01-18T20:41:48.704Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T20:41:48.704Z] [BOT] Total attempts: 19
   Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-18T20:41:48.704Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T20:41:48.705Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 6
   Top channels:
[2026-01-18T20:41:48.705Z] [BOT] 1. #💻・remote-usa: 2 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・new-york: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-18T20:41:48.705Z] [BOT] [STATS] Channel stats saved
[2026-01-18T20:41:50.727Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2851) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Product Marketing Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Product Marketing Lead
- [BOT ERROR] ❌ Error posting job Technical Product Marketing Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Assoc Analyst Technology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Assoc Analyst Technology
- [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Program Manager, Global Education
- [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 – New Grad - Fullstack - Risk Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 – New Grad - Fullstack - Risk Engineering
- [BOT ERROR] ❌ Error posting job Construction Inspector: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Construction Inspector
- [BOT ERROR] ❌ Error posting job Construction Inspector: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*