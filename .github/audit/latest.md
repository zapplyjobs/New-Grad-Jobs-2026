# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T16:48:14.105Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T16:47:45.015Z] ========================================
[2026-01-15T16:47:45.017Z] Discord Bot Execution Log
[2026-01-15T16:47:45.017Z] Environment: GitHub Actions
[2026-01-15T16:47:45.017Z] Node Version: v20.19.6
[2026-01-15T16:47:45.017Z] ========================================
[2026-01-15T16:47:45.017Z] Environment Variables Check:
[2026-01-15T16:47:45.017Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T16:47:45.017Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.017Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T16:47:45.017Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T16:47:45.017Z] 
Multi-Channel Configuration:
[2026-01-15T16:47:45.018Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T16:47:45.018Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T16:47:45.018Z] 
Data Files Check:
[2026-01-15T16:47:45.019Z] .github/data/new_jobs.json: ✅ Exists (10 items, 12151 bytes)
[2026-01-15T16:47:45.026Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 942032 bytes)
[2026-01-15T16:47:45.026Z] 
========================================
[2026-01-15T16:47:45.026Z] Starting Enhanced Discord Bot...
[2026-01-15T16:47:45.026Z] ========================================
[2026-01-15T16:47:45.540Z] [BOT] ✅ Loaded V2 database: 1762 jobs
[2026-01-15T16:47:46.186Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T16:47:46.187Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T16:47:46.187Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T16:47:46.295Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) at ByteDance
[2026-01-15T16:47:46.298Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T16:47:46.299Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T16:47:46.299Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T16:47:46.300Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T16:47:46.300Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T16:47:46.305Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T16:47:46.306Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:47:46.323Z] [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T16:47:46.482Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ByteDance',
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
[2026-01-15T16:47:46.482Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 1/5
[2026-01-15T16:47:48.102Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ByteDance',
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
[2026-01-15T16:47:48.102Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:47:49.603Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-15T16:47:49.604Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:47:49.833Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T16:47:49.833Z] [BOT] ✅ Industry: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c
[2026-01-15T16:47:51.824Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T16:47:53.325Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T16:47:53.326Z] [BOT] 💾 BEFORE ARCHIVING: 1763 jobs in database
[2026-01-15T16:47:53.327Z] [BOT] ✅ No jobs to archive (all 1763 jobs within 7-day window)
[2026-01-15T16:47:53.342Z] [BOT] 💾 Saved posted_jobs.json: 1763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T16:47:53.342Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:47:53.529Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T16:47:53.529Z] [BOT] ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2026-01-15T16:47:55.280Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T16:47:56.781Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c (instance #1)
[2026-01-15T16:47:56.781Z] [BOT] 💾 BEFORE ARCHIVING: 1764 jobs in database
[2026-01-15T16:47:56.783Z] [BOT] ✅ No jobs to archive (all 1764 jobs within 7-day window)
[2026-01-15T16:47:56.796Z] [BOT] 💾 Saved posted_jobs.json: 1764 active jobs
[2026-01-15T16:47:56.796Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T16:47:56.797Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）" @ ORG_08c9a13c
[2026-01-15T16:47:56.797Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:47:56.914Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ByteDance',
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
[2026-01-15T16:47:56.914Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）
⚠️  Channel full error count: 1/5
[2026-01-15T16:47:58.594Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ByteDance',
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
[2026-01-15T16:47:58.594Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:48:00.094Z] [BOT] 📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
[2026-01-15T16:48:00.095Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:48:00.215Z] [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ByteDance',
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
[2026-01-15T16:48:00.215Z] [BOT] ❌ Industry post failed: Software Development Engineer Graduate - SDN Traffic Intelligence & Control
⚠️  Channel full error count: 2/5
[2026-01-15T16:48:01.934Z] [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ByteDance',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T16:48:01.934Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T16:48:03.434Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:48:03.610Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ByteDance',
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
[2026-01-15T16:48:03.611Z] [BOT] ❌ Industry post failed: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS
⚠️  Channel full error count: 3/5
[2026-01-15T16:48:05.239Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ByteDance',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T16:48:05.239Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T16:48:06.740Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-15T16:48:06.740Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:48:06.878Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ByteDance',
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
[2026-01-15T16:48:06.878Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start
⚠️  Channel full error count: 4/5
[2026-01-15T16:48:08.515Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ByteDance',
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
[2026-01-15T16:48:08.515Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T16:48:13.016Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T16:48:13.016Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T16:48:13.206Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ByteDance',
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
[2026-01-15T16:48:13.206Z] [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T16:48:13.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 15
[2026-01-15T16:48:13.207Z] [BOT] Successful: 4
   Failed: 11
   Skipped: 0
[2026-01-15T16:48:13.207Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
[2026-01-15T16:48:13.207Z] [BOT] Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・san-francisco: 1 posts
     3. #🌧️・seattle: 1 posts
[2026-01-15T16:48:13.207Z] [BOT] [STATS] Channel stats saved
[2026-01-15T16:48:13.207Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T16:48:13.221Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development Engineer Graduate - SDN Traffic Intelligence & Control
- [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*