# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T15:43:42.816Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T15:43:20.846Z] ========================================
[2026-01-15T15:43:20.848Z] Discord Bot Execution Log
[2026-01-15T15:43:20.848Z] Environment: GitHub Actions
[2026-01-15T15:43:20.848Z] Node Version: v20.19.6
[2026-01-15T15:43:20.848Z] ========================================
[2026-01-15T15:43:20.848Z] Environment Variables Check:
[2026-01-15T15:43:20.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T15:43:20.849Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T15:43:20.849Z] 
Multi-Channel Configuration:
[2026-01-15T15:43:20.849Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T15:43:20.850Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T15:43:20.850Z] 
Data Files Check:
[2026-01-15T15:43:20.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7922 bytes)
[2026-01-15T15:43:20.858Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 940191 bytes)
[2026-01-15T15:43:20.858Z] 
========================================
[2026-01-15T15:43:20.858Z] Starting Enhanced Discord Bot...
[2026-01-15T15:43:20.858Z] ========================================
[2026-01-15T15:43:21.442Z] [BOT] ✅ Loaded V2 database: 1758 jobs
[2026-01-15T15:43:22.499Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T15:43:22.500Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T15:43:22.500Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T15:43:22.623Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Research Scientist Generative AI - Intelligent Creation at TikTok
[2026-01-15T15:43:22.626Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T15:43:22.627Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T15:43:22.627Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T15:43:22.628Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T15:43:22.628Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T15:43:22.628Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T15:43:22.634Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T15:43:22.634Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
[2026-01-15T15:43:22.634Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:43:22.652Z] [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T15:43:22.783Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:22.784Z] [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
⚠️  Channel full error count: 1/5
[2026-01-15T15:43:24.438Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:24.438Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:43:25.939Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
[2026-01-15T15:43:25.939Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:43:26.272Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:26.272Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
⚠️  Channel full error count: 2/5
[2026-01-15T15:43:27.908Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:27.908Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:43:29.410Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T15:43:29.410Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:43:29.619Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - Multiple Teams @ ByteDance',
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
[2026-01-15T15:43:29.620Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Multiple Teams
⚠️  Channel full error count: 3/5
[2026-01-15T15:43:32.838Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T15:43:34.340Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c (instance #1)
[2026-01-15T15:43:34.340Z] [BOT] 💾 BEFORE ARCHIVING: 1759 jobs in database
[2026-01-15T15:43:34.342Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T15:43:34.345Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T15:43:34.345Z] [BOT] ✅ Archiving complete: 2 archived, 1757 active
[2026-01-15T15:43:34.359Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T15:43:37.360Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T15:43:37.361Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science" @ ORG_08c9a13c
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:43:37.627Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T15:43:37.627Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science
⚠️  Channel full error count: 4/5
[2026-01-15T15:43:39.258Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:39.258Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:43:40.760Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
   Category: TECH (default)
[2026-01-15T15:43:40.760Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:43:40.901Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:43:40.902Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T15:43:40.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T15:43:40.902Z] [BOT] Total attempts: 9
   Successful: 1
   Failed: 8
   Skipped: 0
[2026-01-15T15:43:40.904Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #🌧️・seattle: 1 posts
[STATS] Channel stats saved
💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T15:43:40.917Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Multiple Teams
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*