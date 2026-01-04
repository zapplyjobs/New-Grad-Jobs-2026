# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T05:54:14.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 14
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T05:53:36.752Z] ========================================
[2026-01-04T05:53:36.754Z] Discord Bot Execution Log
[2026-01-04T05:53:36.754Z] Environment: GitHub Actions
[2026-01-04T05:53:36.754Z] Node Version: v20.19.6
[2026-01-04T05:53:36.754Z] ========================================
[2026-01-04T05:53:36.754Z] Environment Variables Check:
[2026-01-04T05:53:36.754Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T05:53:36.754Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T05:53:36.755Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T05:53:36.755Z] 
Multi-Channel Configuration:
[2026-01-04T05:53:36.755Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.755Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.756Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T05:53:36.756Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T05:53:36.756Z] 
Data Files Check:
[2026-01-04T05:53:36.757Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151939 bytes)
[2026-01-04T05:53:36.761Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 457274 bytes)
[2026-01-04T05:53:36.761Z] 
========================================
[2026-01-04T05:53:36.761Z] Starting Enhanced Discord Bot...
[2026-01-04T05:53:36.761Z] ========================================
[2026-01-04T05:53:37.295Z] [BOT] ✅ Loaded V2 database: 907 jobs
[2026-01-04T05:53:37.862Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T05:53:37.863Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T05:53:37.863Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T05:53:37.864Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T05:53:37.934Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T05:53:38.026Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T05:53:38.028Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T05:53:38.028Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T05:53:38.029Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T05:53:38.029Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T05:53:38.030Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T05:53:38.034Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T05:53:38.035Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI" @ anthropic
[2026-01-04T05:53:38.035Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:53:38.053Z] [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T05:53:38.938Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:38.938Z] [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T05:53:40.570Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:40.571Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T05:53:42.071Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
[2026-01-04T05:53:42.071Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T05:53:42.192Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:42.192Z] [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
⚠️  Channel full error count: 2/5
[2026-01-04T05:53:43.824Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:43.824Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T05:53:45.324Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Spanish Speaking" @ figma
   Category: AI (matched: "machine learning")
[2026-01-04T05:53:45.325Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:53:47.228Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Spanish Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Spanish Speaking @ figma
[2026-01-04T05:53:48.977Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Spanish Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:53:50.479Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Spanish Speaking @ figma (instance #1)
[2026-01-04T05:53:50.479Z] [BOT] 💾 BEFORE ARCHIVING: 908 jobs in database
[2026-01-04T05:53:50.480Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2026-01-04T05:53:50.493Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
[2026-01-04T05:53:50.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:53:50.494Z] [BOT] 📍 [ROUTING] "Founding Developer Relations Lead" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-04T05:53:50.494Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:53:50.777Z] [BOT] ✅ Created forum post: 🏢 Founding Developer Relations Lead @ anthropic in #🤖・ai-jobs
  ✅ Industry: Founding Developer Relations Lead @ anthropic
[2026-01-04T05:53:52.385Z] [BOT ERROR] ❌ Error posting job Founding Developer Relations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Founding Developer Relations Lead @ anthropic',
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
[2026-01-04T05:53:52.385Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T05:53:53.886Z] [BOT] 💾 Marked as posted: Founding Developer Relations Lead @ anthropic (instance #1)
[2026-01-04T05:53:53.887Z] [BOT] 💾 BEFORE ARCHIVING: 909 jobs in database
[2026-01-04T05:53:53.887Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2026-01-04T05:53:53.896Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:53:56.896Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T05:53:56.896Z] [BOT] 📍 [ROUTING] "Senior AI Engineering Manager" @ duolingo
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:53:57.023Z] [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:57.023Z] [BOT] ❌ Industry post failed: Senior AI Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-04T05:53:58.633Z] [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:53:58.633Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T05:54:00.135Z] [BOT] 📍 [ROUTING] "Mobile Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T05:54:00.135Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:54:00.259Z] [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mobile Engineer @ vercel',
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
[2026-01-04T05:54:00.259Z] [BOT] ❌ Industry post failed: Mobile Engineer
⚠️  Channel full error count: 2/5
[2026-01-04T05:54:01.925Z] [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mobile Engineer @ vercel',
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
[2026-01-04T05:54:01.925Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T05:54:03.426Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer" @ duolingo
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:54:03.651Z] [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:54:03.651Z] [BOT] ❌ Industry post failed: Senior iOS Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-04T05:54:05.307Z] [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-04T05:54:05.307Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T05:54:09.809Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T05:54:09.809Z] [BOT] 📍 [ROUTING] "Ad Sales Lead" @ duolingo
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:54:09.984Z] [BOT ERROR] ❌ Error posting job Ad Sales Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Ad Sales Lead @ duolingo',
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
[2026-01-04T05:54:09.984Z] [BOT] ❌ Industry post failed: Ad Sales Lead
⚠️  Channel full error count: 4/5
[2026-01-04T05:54:11.612Z] [BOT ERROR] ❌ Error posting job Ad Sales Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Ad Sales Lead @ duolingo',
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
[2026-01-04T05:54:11.612Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-04T05:54:13.113Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T05:54:13.113Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:54:13.290Z] [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T05:54:13.290Z] [BOT] ❌ Industry post failed: Inside Sales Representative - Early Career (2026)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T05:54:13.291Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T05:54:13.291Z] [BOT] Total attempts: 17
   Successful: 3
   Failed: 14
   Skipped: 0
[2026-01-04T05:54:13.291Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T05:54:13.291Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-04T05:54:13.292Z] [BOT] [STATS] Channel stats saved
[2026-01-04T05:54:13.292Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T05:54:13.302Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Founding Developer Relations Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior AI Engineering Manager
- [BOT ERROR] ❌ Error posting job Senior AI Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Mobile Engineer
- [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior iOS Software Engineer
- [BOT ERROR] ❌ Error posting job Senior iOS Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Ad Sales Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Ad Sales Lead
- [BOT ERROR] ❌ Error posting job Ad Sales Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Inside Sales Representative - Early Career (2026): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Inside Sales Representative - Early Career (2026)
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*