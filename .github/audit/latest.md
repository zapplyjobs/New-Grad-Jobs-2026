# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T15:58:12.802Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 16
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T15:57:41.103Z] ========================================
[2026-01-15T15:57:41.105Z] Discord Bot Execution Log
[2026-01-15T15:57:41.105Z] Environment: GitHub Actions
[2026-01-15T15:57:41.105Z] Node Version: v20.19.6
[2026-01-15T15:57:41.105Z] ========================================
[2026-01-15T15:57:41.105Z] Environment Variables Check:
[2026-01-15T15:57:41.105Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T15:57:41.105Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T15:57:41.106Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T15:57:41.106Z] 
Multi-Channel Configuration:
[2026-01-15T15:57:41.106Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.106Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.107Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T15:57:41.107Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T15:57:41.107Z] 
Data Files Check:
[2026-01-15T15:57:41.107Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7917 bytes)
[2026-01-15T15:57:41.114Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 939574 bytes)
[2026-01-15T15:57:41.114Z] 
========================================
[2026-01-15T15:57:41.114Z] Starting Enhanced Discord Bot...
[2026-01-15T15:57:41.114Z] ========================================
[2026-01-15T15:57:41.705Z] [BOT] ✅ Loaded V2 database: 1757 jobs
[2026-01-15T15:57:42.197Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T15:57:42.198Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T15:57:42.309Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Research Scientist Generative AI - Intelligent Creation at TikTok
[2026-01-15T15:57:42.312Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T15:57:42.313Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T15:57:42.313Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T15:57:42.314Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T15:57:42.314Z] [BOT] (1 grouped as same job with different locations)
[2026-01-15T15:57:42.314Z] [BOT] 📍 1 jobs with multiple locations:
   - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T15:57:42.320Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T15:57:42.320Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T15:57:42.321Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:57:42.338Z] [BOT ERROR] (node:2360) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T15:57:42.494Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist Generative AI - Intelligent Creation @ TikTok',
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
[2026-01-15T15:57:42.495Z] [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
⚠️  Channel full error count: 1/5
[2026-01-15T15:57:44.111Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist Generative AI - Intelligent Creation @ TikTok',
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
[2026-01-15T15:57:44.111Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:57:45.613Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T15:57:45.613Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:57:45.779Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - Conversational AI @ ByteDance',
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
[2026-01-15T15:57:45.779Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
⚠️  Channel full error count: 2/5
[2026-01-15T15:57:47.406Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - Conversational AI @ ByteDance',
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
[2026-01-15T15:57:47.407Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:57:48.908Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T15:57:48.908Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:57:49.024Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance',
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
[2026-01-15T15:57:49.024Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS
⚠️  Channel full error count: 3/5
[2026-01-15T15:57:50.639Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance',
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
[2026-01-15T15:57:50.640Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:57:55.142Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T15:57:55.143Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science" @ ORG_08c9a13c
   Category: TECH (matched: "machine learning")
[2026-01-15T15:57:55.143Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:57:55.409Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_125466b8 in #💻・tech-jobs
[2026-01-15T15:57:55.409Z] [BOT] ✅ Industry: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c
[2026-01-15T15:57:57.067Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ By',
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
[2026-01-15T15:57:57.068Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:57:58.569Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c (instance #1)
[2026-01-15T15:57:58.569Z] [BOT] 💾 BEFORE ARCHIVING: 1758 jobs in database
[2026-01-15T15:57:58.571Z] [BOT] ✅ No jobs to archive (all 1758 jobs within 7-day window)
[2026-01-15T15:57:58.587Z] [BOT] 💾 Saved posted_jobs.json: 1758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T15:57:58.588Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
[2026-01-15T15:57:58.588Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:57:58.742Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:57:58.742Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 1/5
[2026-01-15T15:58:00.361Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:58:00.361Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:58:01.862Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:58:01.999Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ByteDance',
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
[2026-01-15T15:58:01.999Z] [BOT] ❌ Industry post failed: Backend Software Engineer Graduate - Capcut - 2026 Start
⚠️  Channel full error count: 2/5
[2026-01-15T15:58:03.623Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ByteDance',
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
[2026-01-15T15:58:03.623Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:58:05.124Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:58:05.264Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ByteDance',
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
[2026-01-15T15:58:05.264Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Ecommerce Recommendation - PhD
⚠️  Channel full error count: 3/5
[2026-01-15T15:58:06.908Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ByteDance',
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
[2026-01-15T15:58:06.909Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:58:08.409Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:58:08.537Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:58:08.537Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）
⚠️  Channel full error count: 4/5
[2026-01-15T15:58:10.232Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:58:10.232Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:58:11.733Z] [BOT] 📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
[2026-01-15T15:58:11.733Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:58:11.918Z] [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:58:11.918Z] [BOT] ❌ Industry post failed: Software Development Engineer Graduate - SDN Traffic Intelligence & Control
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T15:58:11.919Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T15:58:11.919Z] [BOT] Total attempts: 17
   Successful: 1
   Failed: 16
   Skipped: 0
[2026-01-15T15:58:11.919Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
[2026-01-15T15:58:11.919Z] [BOT] Channels used: 1
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-15T15:58:11.919Z] [BOT] [STATS] Channel stats saved
[2026-01-15T15:58:11.920Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T15:58:11.933Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2360) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Backend Software Engineer Graduate - Capcut - 2026 Start
- [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist - Ecommerce Recommendation - PhD
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development Engineer Graduate - SDN Traffic Intelligence & Control
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*