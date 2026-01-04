# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T06:05:48.814Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T06:05:03.199Z] ========================================
[2026-01-04T06:05:03.201Z] Discord Bot Execution Log
[2026-01-04T06:05:03.201Z] Environment: GitHub Actions
[2026-01-04T06:05:03.201Z] Node Version: v20.19.6
[2026-01-04T06:05:03.201Z] ========================================
[2026-01-04T06:05:03.201Z] Environment Variables Check:
[2026-01-04T06:05:03.201Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T06:05:03.201Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.201Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T06:05:03.201Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T06:05:03.201Z] 
Multi-Channel Configuration:
[2026-01-04T06:05:03.201Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T06:05:03.202Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T06:05:03.202Z] 
Data Files Check:
[2026-01-04T06:05:03.203Z] .github/data/new_jobs.json: ✅ Exists (10 items, 136949 bytes)
[2026-01-04T06:05:03.207Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 458278 bytes)
[2026-01-04T06:05:03.207Z] 
========================================
[2026-01-04T06:05:03.207Z] Starting Enhanced Discord Bot...
[2026-01-04T06:05:03.207Z] ========================================
[2026-01-04T06:05:03.675Z] [BOT] ✅ Loaded V2 database: 909 jobs
[2026-01-04T06:05:04.344Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T06:05:04.345Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T06:05:04.345Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T06:05:04.346Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T06:05:04.426Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T06:05:04.512Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T06:05:04.514Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T06:05:04.514Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T06:05:04.514Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T06:05:04.515Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T06:05:04.515Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T06:05:04.520Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T06:05:04.520Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI" @ anthropic
[2026-01-04T06:05:04.520Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T06:05:04.537Z] [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T06:05:04.667Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T06:05:04.668Z] [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T06:05:06.308Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T06:05:06.308Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:05:07.810Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T06:05:07.810Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T06:05:07.937Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems Integration Engineer @ anthropic',
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
[2026-01-04T06:05:07.937Z] [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
⚠️  Channel full error count: 2/5
[2026-01-04T06:05:09.575Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems Integration Engineer @ anthropic',
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
[2026-01-04T06:05:09.575Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:05:11.076Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
[2026-01-04T06:05:11.076Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T06:05:11.229Z] [BOT ERROR] ❌ Error posting job Internship Program Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Internship Program Coordinator @ gohighlevel',
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
[2026-01-04T06:05:11.229Z] [BOT] ❌ Industry post failed: Internship Program Coordinator
⚠️  Channel full error count: 3/5
[2026-01-04T06:05:15.731Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T06:05:15.731Z] [BOT] 📍 [ROUTING] "Senior AI Engineering Manager" @ duolingo
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T06:05:15.915Z] [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior AI Engineering Manager @ duolingo',
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
[2026-01-04T06:05:15.915Z] [BOT] ❌ Industry post failed: Senior AI Engineering Manager
⚠️  Channel full error count: 4/5
[2026-01-04T06:05:17.546Z] [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior AI Engineering Manager @ duolingo',
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
[2026-01-04T06:05:17.547Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T06:05:19.046Z] [BOT] 📍 [ROUTING] "Mobile Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T06:05:19.047Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T06:05:19.271Z] [BOT] ✅ Created forum post: 🏢 Mobile Engineer @ vercel in #💻・tech-jobs
  ✅ Industry: Mobile Engineer @ vercel
[2026-01-04T06:05:20.944Z] [BOT] ✅ Created forum post: 🏢 Mobile Engineer @ vercel in #🗽・new-york
[2026-01-04T06:05:20.944Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T06:05:22.446Z] [BOT] 💾 Marked as posted: Mobile Engineer @ vercel (instance #1)
[2026-01-04T06:05:22.446Z] [BOT] 💾 BEFORE ARCHIVING: 910 jobs in database
[2026-01-04T06:05:22.447Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2026-01-04T06:05:22.459Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:05:22.460Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer" @ duolingo
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T06:05:22.607Z] [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior iOS Software Engineer @ duolingo',
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
[2026-01-04T06:05:22.608Z] [BOT] ❌ Industry post failed: Senior iOS Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-04T06:05:24.395Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T06:05:25.896Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer @ duolingo (instance #1)
[2026-01-04T06:05:25.896Z] [BOT] 💾 BEFORE ARCHIVING: 911 jobs in database
[2026-01-04T06:05:25.897Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2026-01-04T06:05:25.906Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:05:28.907Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-04T06:05:28.907Z] [BOT] 📍 [ROUTING] "Ad Sales Lead" @ duolingo
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:05:29.274Z] [BOT] ✅ Created forum post: 🏢 Ad Sales Lead @ duolingo in #💲・sales-jobs
  ✅ Industry: Ad Sales Lead @ duolingo
[2026-01-04T06:05:30.953Z] [BOT] ✅ Created forum post: 🏢 Ad Sales Lead @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T06:05:32.453Z] [BOT] 💾 Marked as posted: Ad Sales Lead @ duolingo (instance #1)
[2026-01-04T06:05:32.454Z] [BOT] 💾 BEFORE ARCHIVING: 912 jobs in database
[2026-01-04T06:05:32.454Z] [BOT] ✅ No jobs to archive (all 912 jobs within 7-day window)
[2026-01-04T06:05:32.461Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:05:32.461Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T06:05:32.461Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:05:32.602Z] [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Inside Sales Representative - Early Career (2026) @ figma',
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
[2026-01-04T06:05:32.603Z] [BOT] ❌ Industry post failed: Inside Sales Representative - Early Career (2026)
⚠️  Channel full error count: 1/5
[2026-01-04T06:05:34.233Z] [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Inside Sales Representative - Early Career (2026) @ figma',
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
[2026-01-04T06:05:34.233Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T06:05:35.734Z] [BOT] 📍 [ROUTING] "RevOps Reporting & Insights Analyst" @ anthropic
[2026-01-04T06:05:35.734Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:05:35.959Z] [BOT] ✅ Created forum post: 🏢 RevOps Reporting & Insights Analyst @ anthropic in #💲・sales-jobs
  ✅ Industry: RevOps Reporting & Insights Analyst @ anthropic
[2026-01-04T06:05:37.682Z] [BOT] ✅ Created forum post: 🏢 RevOps Reporting & Insights Analyst @ anthropic in #🌉・san-francisco
[2026-01-04T06:05:37.682Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T06:05:39.183Z] [BOT] 💾 Marked as posted: RevOps Reporting & Insights Analyst @ anthropic (instance #1)
[2026-01-04T06:05:39.183Z] [BOT] 💾 BEFORE ARCHIVING: 913 jobs in database
[2026-01-04T06:05:39.184Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2026-01-04T06:05:39.193Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:05:39.193Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ anthropic
[2026-01-04T06:05:39.193Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:05:39.322Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ anthropic',
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
[2026-01-04T06:05:39.323Z] [BOT] ❌ Industry post failed: Business Development Representative
⚠️  Channel full error count: 1/5
[2026-01-04T06:05:40.978Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ anthropic',
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
[2026-01-04T06:05:40.978Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:05:45.480Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 6
[2026-01-04T06:05:45.480Z] [BOT] ⏭️  Skipping duplicate: JID_b593142e (posted within 7 days)
[2026-01-04T06:05:45.481Z] [BOT] ⏭️  Skipping duplicate: JID_13223fd1 (posted within 7 days)
[2026-01-04T06:05:45.481Z] [BOT] ⏭️  Skipping duplicate: JID_7fd4c3cf (posted within 7 days)
⏭️  Skipping duplicate: JID_787e4aa1 (posted within 7 days)
[2026-01-04T06:05:45.523Z] [BOT] ✅ Loaded pending queue: 380 total (360 pending, 20 enriched, 0 posted)
[2026-01-04T06:05:45.557Z] [BOT] ✅ Saved pending queue: 380 total (360 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T06:05:45.609Z] [BOT] 📂 Loaded 1809 existing routing entries
[2026-01-04T06:05:45.658Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1819
   Timestamp: 2026-01-04T06:05:45.652Z
[2026-01-04T06:05:45.659Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 19
[2026-01-04T06:05:45.659Z] [BOT] Successful: 7
   Failed: 12
   Skipped: 0
[2026-01-04T06:05:45.659Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
[2026-01-04T06:05:45.659Z] [BOT] Channels used: 4
   Top channels:
     1. #🗽・new-york: 3 posts
[2026-01-04T06:05:45.659Z] [BOT] 2. #💲・sales-jobs: 2 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-04T06:05:45.660Z] [BOT] [STATS] Channel stats saved
[2026-01-04T06:05:47.671Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Internship Program Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Internship Program Coordinator
- [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior AI Engineering Manager
- [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior iOS Software Engineer
- [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Inside Sales Representative - Early Career (2026)
- [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Development Representative
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*