# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T14:24:33.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T14:23:58.089Z] ========================================
[2026-01-04T14:23:58.091Z] Discord Bot Execution Log
[2026-01-04T14:23:58.091Z] Environment: GitHub Actions
[2026-01-04T14:23:58.091Z] Node Version: v20.19.6
[2026-01-04T14:23:58.091Z] ========================================
[2026-01-04T14:23:58.091Z] Environment Variables Check:
[2026-01-04T14:23:58.091Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T14:23:58.092Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T14:23:58.092Z] 
Multi-Channel Configuration:
[2026-01-04T14:23:58.092Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.092Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.093Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T14:23:58.093Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T14:23:58.093Z] 
Data Files Check:
[2026-01-04T14:23:58.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 122332 bytes)
[2026-01-04T14:23:58.098Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 570241 bytes)
[2026-01-04T14:23:58.098Z] 
========================================
[2026-01-04T14:23:58.098Z] Starting Enhanced Discord Bot...
[2026-01-04T14:23:58.098Z] ========================================
[2026-01-04T14:23:58.627Z] [BOT] ✅ Loaded V2 database: 1135 jobs
[2026-01-04T14:23:59.304Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T14:23:59.304Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T14:23:59.305Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T14:23:59.305Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T14:23:59.375Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T14:23:59.464Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T14:23:59.467Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T14:23:59.467Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T14:23:59.467Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T14:23:59.468Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T14:23:59.468Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T14:23:59.471Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T14:23:59.473Z] [BOT] 📍 [ROUTING] "Senior Director, Integrated Marketing" @ gohighlevel
[2026-01-04T14:23:59.473Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:23:59.490Z] [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T14:23:59.730Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Integrated Marketing @ gohighlevel in #🤖・ai-jobs
[2026-01-04T14:23:59.731Z] [BOT] ✅ Industry: Senior Director, Integrated Marketing @ gohighlevel
[2026-01-04T14:24:01.233Z] [BOT] 💾 Marked as posted: Senior Director, Integrated Marketing @ gohighlevel (instance #1)
[2026-01-04T14:24:01.234Z] [BOT] 💾 BEFORE ARCHIVING: 1136 jobs in database
[2026-01-04T14:24:01.235Z] [BOT] ✅ No jobs to archive (all 1136 jobs within 7-day window)
[2026-01-04T14:24:01.246Z] [BOT] 💾 Saved posted_jobs.json: 1136 active jobs
[2026-01-04T14:24:01.247Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:24:01.247Z] [BOT] 📍 [ROUTING] "Manager, Community Programs" @ gohighlevel
[2026-01-04T14:24:01.248Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:24:01.461Z] [BOT] ✅ Created forum post: 🏢 Manager, Community Programs @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Manager, Community Programs @ gohighlevel
[2026-01-04T14:24:02.962Z] [BOT] 💾 Marked as posted: Manager, Community Programs @ gohighlevel (instance #1)
[2026-01-04T14:24:02.962Z] [BOT] 💾 BEFORE ARCHIVING: 1137 jobs in database
[2026-01-04T14:24:02.963Z] [BOT] ✅ No jobs to archive (all 1137 jobs within 7-day window)
[2026-01-04T14:24:02.974Z] [BOT] 💾 Saved posted_jobs.json: 1137 active jobs
[2026-01-04T14:24:02.974Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:24:02.974Z] [BOT] 📍 [ROUTING] "Senior Machine Learning Engineer" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:24:02.974Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T14:24:03.379Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer @ spotify in #🤖・ai-jobs
[2026-01-04T14:24:03.379Z] [BOT] ✅ Industry: Senior Machine Learning Engineer @ spotify
[2026-01-04T14:24:05.089Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer @ spotify in #🗽・new-york
[2026-01-04T14:24:05.089Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:24:06.589Z] [BOT] 💾 Marked as posted: Senior Machine Learning Engineer @ spotify (instance #1)
[2026-01-04T14:24:06.590Z] [BOT] 💾 BEFORE ARCHIVING: 1138 jobs in database
[2026-01-04T14:24:06.591Z] [BOT] ✅ No jobs to archive (all 1138 jobs within 7-day window)
[2026-01-04T14:24:06.597Z] [BOT] 💾 Saved posted_jobs.json: 1138 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:24:06.598Z] [BOT] 📍 [ROUTING] "Software Engineer - Infrastructure" @ nominal
[2026-01-04T14:24:06.598Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T14:24:06.960Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Infrastructure @ nominal in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Infrastructure @ nominal
[2026-01-04T14:24:08.602Z] [BOT ERROR] ❌ Error posting job Software Engineer - Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer - Infrastructure @ nominal',
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
[2026-01-04T14:24:08.603Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T14:24:10.104Z] [BOT] 💾 Marked as posted: Software Engineer - Infrastructure @ nominal (instance #1)
[2026-01-04T14:24:10.104Z] [BOT] 💾 BEFORE ARCHIVING: 1139 jobs in database
[2026-01-04T14:24:10.105Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-04T14:24:10.112Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:24:13.113Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-04T14:24:13.113Z] [BOT] 📍 [ROUTING] "Multigres Deployment Engineer" @ supabase
[2026-01-04T14:24:13.113Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:13.284Z] [BOT ERROR] ❌ Error posting job Multigres Deployment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Multigres Deployment Engineer @ supabase',
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
[2026-01-04T14:24:13.284Z] [BOT] ❌ Industry post failed: Multigres Deployment Engineer
⚠️  Channel full error count: 1/5
[2026-01-04T14:24:14.786Z] [BOT] 📍 [ROUTING] "Senior Security Engineer" @ duolingo
[2026-01-04T14:24:14.786Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:14.944Z] [BOT ERROR] ❌ Error posting job Senior Security Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Security Engineer @ duolingo',
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
[2026-01-04T14:24:14.944Z] [BOT] ❌ Industry post failed: Senior Security Engineer
⚠️  Channel full error count: 2/5
[2026-01-04T14:24:16.591Z] [BOT ERROR] ❌ Error posting job Senior Security Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Security Engineer @ duolingo',
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
[2026-01-04T14:24:16.591Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T14:24:18.093Z] [BOT] 📍 [ROUTING] "Senior Site Reliability Engineer" @ duolingo
   Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:18.229Z] [BOT ERROR] ❌ Error posting job Senior Site Reliability Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Site Reliability Engineer @ duolingo',
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
[2026-01-04T14:24:18.229Z] [BOT] ❌ Industry post failed: Senior Site Reliability Engineer
⚠️  Channel full error count: 3/5
[2026-01-04T14:24:19.898Z] [BOT ERROR] ❌ Error posting job Senior Site Reliability Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Senior Site Reliability Engineer @ duolingo',
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
[2026-01-04T14:24:19.898Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T14:24:21.399Z] [BOT] 📍 [ROUTING] "FinOps Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T14:24:21.400Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:21.502Z] [BOT ERROR] ❌ Error posting job FinOps Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 FinOps Engineer @ supabase',
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
[2026-01-04T14:24:21.502Z] [BOT] ❌ Industry post failed: FinOps Engineer
⚠️  Channel full error count: 4/5
[2026-01-04T14:24:23.004Z] [BOT] 📍 [ROUTING] "Rust Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:23.175Z] [BOT] ✅ Created forum post: 🏢 Rust Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Rust Engineer @ supabase
[2026-01-04T14:24:24.676Z] [BOT] 💾 Marked as posted: Rust Engineer @ supabase (instance #1)
[2026-01-04T14:24:24.676Z] [BOT] 💾 BEFORE ARCHIVING: 1140 jobs in database
[2026-01-04T14:24:24.677Z] [BOT] ✅ No jobs to archive (all 1140 jobs within 7-day window)
[2026-01-04T14:24:24.687Z] [BOT] 💾 Saved posted_jobs.json: 1140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:24:24.687Z] [BOT] 📍 [ROUTING] "Customer Success Engineer" @ railway
[2026-01-04T14:24:24.687Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:24:24.833Z] [BOT ERROR] ❌ Error posting job Customer Success Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Customer Success Engineer @ railway',
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
[2026-01-04T14:24:24.833Z] [BOT] ❌ Industry post failed: Customer Success Engineer
⚠️  Channel full error count: 1/5
[2026-01-04T14:24:26.447Z] [BOT ERROR] ❌ Error posting job Customer Success Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Customer Success Engineer @ railway',
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
[2026-01-04T14:24:26.447Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-04T14:24:30.948Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 5
[2026-01-04T14:24:30.949Z] [BOT] ⏭️  Skipping duplicate: JID_0da5a202 (posted within 7 days)
[2026-01-04T14:24:30.949Z] [BOT] ⏭️  Skipping duplicate: JID_11ac40c2 (posted within 7 days)
[2026-01-04T14:24:30.949Z] [BOT] ⏭️  Skipping duplicate: JID_c6bfa644 (posted within 7 days)
[2026-01-04T14:24:30.950Z] [BOT] ⏭️  Skipping duplicate: JID_23094729 (posted within 7 days)
[2026-01-04T14:24:30.950Z] [BOT] ⏭️  Skipping duplicate: JID_eec4e6ca (posted within 7 days)
[2026-01-04T14:24:30.956Z] [BOT] ✅ Loaded pending queue: 155 total (135 pending, 20 enriched, 0 posted)
[2026-01-04T14:24:30.966Z] [BOT] ✅ Saved pending queue: 155 total (135 pending, 15 enriched, 5 posted)
[2026-01-04T14:24:30.966Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T14:24:31.023Z] [BOT] 📂 Loaded 2049 existing routing entries
[2026-01-04T14:24:31.077Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2059
[2026-01-04T14:24:31.078Z] [BOT] Timestamp: 2026-01-04T14:24:31.066Z
[2026-01-04T14:24:31.078Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T14:24:31.078Z] [BOT] Total attempts: 15
   Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-04T14:24:31.078Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T14:24:31.079Z] [BOT] Total posts: 6
   Channels used: 3
   Top channels:
[2026-01-04T14:24:31.079Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🗽・new-york: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-04T14:24:31.079Z] [BOT] [STATS] Channel stats saved
[2026-01-04T14:24:33.093Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer - Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Multigres Deployment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Multigres Deployment Engineer
- [BOT ERROR] ❌ Error posting job Senior Security Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Security Engineer
- [BOT ERROR] ❌ Error posting job Senior Security Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Site Reliability Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Site Reliability Engineer
- [BOT ERROR] ❌ Error posting job Senior Site Reliability Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job FinOps Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: FinOps Engineer
- [BOT ERROR] ❌ Error posting job Customer Success Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Success Engineer
- [BOT ERROR] ❌ Error posting job Customer Success Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*