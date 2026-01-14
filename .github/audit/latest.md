# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T11:40:14.194Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T11:39:34.907Z] ========================================
[2026-01-14T11:39:34.909Z] Discord Bot Execution Log
[2026-01-14T11:39:34.909Z] Environment: GitHub Actions
[2026-01-14T11:39:34.909Z] Node Version: v20.19.6
[2026-01-14T11:39:34.909Z] ========================================
[2026-01-14T11:39:34.909Z] Environment Variables Check:
[2026-01-14T11:39:34.909Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T11:39:34.909Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T11:39:34.910Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T11:39:34.910Z] 
Multi-Channel Configuration:
[2026-01-14T11:39:34.910Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T11:39:34.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T11:39:34.910Z] 
Data Files Check:
[2026-01-14T11:39:34.911Z] .github/data/new_jobs.json: ✅ Exists (10 items, 77189 bytes)
[2026-01-14T11:39:34.917Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 712981 bytes)
[2026-01-14T11:39:34.917Z] 
========================================
[2026-01-14T11:39:34.917Z] Starting Enhanced Discord Bot...
[2026-01-14T11:39:34.917Z] ========================================
[2026-01-14T11:39:35.446Z] [BOT] ✅ Loaded V2 database: 1342 jobs
[2026-01-14T11:39:36.203Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T11:39:36.203Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T11:39:36.203Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T11:39:36.314Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Technology - Application Development at Citi
[2026-01-14T11:39:36.316Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T11:39:36.316Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T11:39:36.316Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T11:39:36.317Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T11:39:36.317Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T11:39:36.321Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T11:39:36.322Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-14T11:39:36.322Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T11:39:36.339Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T11:39:36.477Z] [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technology - Application Development @ Citi',
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
[2026-01-14T11:39:36.478Z] [BOT] ❌ Industry post failed: Technology - Application Development
⚠️  Channel full error count: 1/5
[2026-01-14T11:39:38.241Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development @ ORG_e9591c52 in #💻・remote-usa
[2026-01-14T11:39:38.241Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T11:39:39.741Z] [BOT] 💾 Marked as posted: Technology - Application Development @ ORG_e9591c52 (instance #1)
[2026-01-14T11:39:39.742Z] [BOT] 💾 BEFORE ARCHIVING: 1343 jobs in database
[2026-01-14T11:39:39.743Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T11:39:39.748Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-14T11:39:39.748Z] [BOT] ✅ Archiving complete: 2 archived, 1341 active
[2026-01-14T11:39:39.758Z] [BOT] 💾 Saved posted_jobs.json: 1341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T11:39:39.759Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-14T11:39:39.759Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T11:39:40.117Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-14T11:39:40.118Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-14T11:39:42.206Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T11:39:43.705Z] [BOT] 💾 Marked as posted: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 (instance #1)
[2026-01-14T11:39:43.705Z] [BOT] 💾 BEFORE ARCHIVING: 1342 jobs in database
[2026-01-14T11:39:43.706Z] [BOT] ✅ No jobs to archive (all 1342 jobs within 7-day window)
[2026-01-14T11:39:43.714Z] [BOT] 💾 Saved posted_jobs.json: 1342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T11:39:43.714Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-14T11:39:43.715Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T11:39:43.934Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-14T11:39:46.068Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #💻・remote-usa
[2026-01-14T11:39:46.068Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T11:39:47.568Z] [BOT] 💾 Marked as posted: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 (instance #1)
[2026-01-14T11:39:47.569Z] [BOT] 💾 BEFORE ARCHIVING: 1343 jobs in database
[2026-01-14T11:39:47.569Z] [BOT] ✅ No jobs to archive (all 1343 jobs within 7-day window)
[2026-01-14T11:39:47.579Z] [BOT] 💾 Saved posted_jobs.json: 1343 active jobs
[2026-01-14T11:39:47.579Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T11:39:50.580Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T11:39:50.581Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T11:39:50.886Z] [BOT] ✅ Created forum post: 🏢 Manager, GTM Finance @ figma in #💲・sales-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-14T11:39:52.517Z] [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, GTM Finance @ figma',
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
[2026-01-14T11:39:52.517Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T11:39:54.018Z] [BOT] 💾 Marked as posted: Manager, GTM Finance @ figma (instance #1)
[2026-01-14T11:39:54.019Z] [BOT] 💾 BEFORE ARCHIVING: 1344 jobs in database
[2026-01-14T11:39:54.020Z] [BOT] ✅ No jobs to archive (all 1344 jobs within 7-day window)
[2026-01-14T11:39:54.031Z] [BOT] 💾 Saved posted_jobs.json: 1344 active jobs
[2026-01-14T11:39:54.032Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T11:39:57.032Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T11:39:57.033Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T11:39:57.183Z] [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-14T11:39:57.183Z] [BOT] ❌ Industry post failed: Java Developer - Associate
⚠️  Channel full error count: 1/5
[2026-01-14T11:39:58.862Z] [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T11:39:58.862Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-14T11:40:00.363Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T11:40:00.484Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Thermal Camera: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Thermal Camera @ Magna',
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
[2026-01-14T11:40:00.485Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Thermal Camera
⚠️  Channel full error count: 2/5
[2026-01-14T11:40:02.122Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Thermal Camera: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Thermal Camera @ Magna',
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
[2026-01-14T11:40:02.122Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-14T11:40:03.624Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-14T11:40:03.624Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T11:40:03.741Z] [BOT ERROR] ❌ Error posting job Software Engineer – Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '💰 Software Engineer – Early Career @ Affirm',
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
[2026-01-14T11:40:03.741Z] [BOT] ❌ Industry post failed: Software Engineer – Early Career
⚠️  Channel full error count: 3/5
[2026-01-14T11:40:05.403Z] [BOT ERROR] ❌ Error posting job Software Engineer – Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '💰 Software Engineer – Early Career @ Affirm',
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
[2026-01-14T11:40:05.404Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-14T11:40:06.906Z] [BOT] 📍 [ROUTING] "Packaging Engineer - Sustainability" @ ORG_b344d80e Campbell's Company
[2026-01-14T11:40:06.906Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T11:40:07.010Z] [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-14T11:40:07.010Z] [BOT] ❌ Industry post failed: Packaging Engineer - Sustainability
⚠️  Channel full error count: 4/5
[2026-01-14T11:40:08.642Z] [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T11:40:08.642Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T11:40:13.143Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T11:40:13.144Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-14T11:40:13.144Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T11:40:13.343Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T11:40:13.343Z] [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T11:40:13.344Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 17
[2026-01-14T11:40:13.344Z] [BOT] Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-14T11:40:13.344Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T11:40:13.344Z] [BOT] Total posts: 6
   Channels used: 4
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🌉・san-francisco: 1 posts
[2026-01-14T11:40:13.344Z] [BOT] 4. #💲・sales-jobs: 1 posts
[2026-01-14T11:40:13.345Z] [BOT] [STATS] Channel stats saved
[2026-01-14T11:40:13.345Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T11:40:13.357Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technology - Application Development
- [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Java Developer - Associate
- [BOT ERROR] ❌ Error posting job Java Developer - Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Thermal Camera: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Thermal Camera
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Thermal Camera: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – Early Career
- [BOT ERROR] ❌ Error posting job Software Engineer – Early Career: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Packaging Engineer - Sustainability
- [BOT ERROR] ❌ Error posting job Packaging Engineer - Sustainability: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*