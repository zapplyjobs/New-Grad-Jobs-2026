# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T16:11:23.538Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T16:10:54.106Z] ========================================
[2026-01-15T16:10:54.107Z] Discord Bot Execution Log
[2026-01-15T16:10:54.107Z] Environment: GitHub Actions
[2026-01-15T16:10:54.108Z] Node Version: v20.19.6
[2026-01-15T16:10:54.108Z] ========================================
[2026-01-15T16:10:54.108Z] Environment Variables Check:
[2026-01-15T16:10:54.108Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T16:10:54.108Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.108Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T16:10:54.108Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T16:10:54.108Z] 
Multi-Channel Configuration:
[2026-01-15T16:10:54.108Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.108Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.108Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.108Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T16:10:54.109Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T16:10:54.109Z] 
Data Files Check:
[2026-01-15T16:10:54.109Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7884 bytes)
[2026-01-15T16:10:54.116Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 940126 bytes)
[2026-01-15T16:10:54.116Z] 
========================================
[2026-01-15T16:10:54.116Z] Starting Enhanced Discord Bot...
[2026-01-15T16:10:54.116Z] ========================================
[2026-01-15T16:10:54.634Z] [BOT] ✅ Loaded V2 database: 1758 jobs
[2026-01-15T16:10:55.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T16:10:55.308Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T16:10:55.308Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T16:10:55.422Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Research Scientist Generative AI - Intelligent Creation at TikTok
[2026-01-15T16:10:55.424Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T16:10:55.424Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T16:10:55.425Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T16:10:55.425Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T16:10:55.426Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T16:10:55.426Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T16:10:55.431Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T16:10:55.432Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
[2026-01-15T16:10:55.432Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T16:10:55.449Z] [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T16:10:55.677Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:10:55.677Z] [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
⚠️  Channel full error count: 1/5
[2026-01-15T16:10:57.356Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:10:57.356Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:10:58.857Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T16:10:58.857Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T16:10:59.014Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:10:59.014Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
⚠️  Channel full error count: 2/5
[2026-01-15T16:11:00.719Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T16:11:02.220Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c (instance #1)
[2026-01-15T16:11:02.221Z] [BOT] 💾 BEFORE ARCHIVING: 1759 jobs in database
[2026-01-15T16:11:02.224Z] [BOT] ✅ No jobs to archive (all 1759 jobs within 7-day window)
[2026-01-15T16:11:02.234Z] [BOT] 💾 Saved posted_jobs.json: 1759 active jobs
[2026-01-15T16:11:02.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T16:11:02.235Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T16:11:02.424Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c
[2026-01-15T16:11:04.099Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:04.100Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:11:05.600Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-15T16:11:05.600Z] [BOT] 💾 BEFORE ARCHIVING: 1760 jobs in database
[2026-01-15T16:11:05.602Z] [BOT] ✅ No jobs to archive (all 1760 jobs within 7-day window)
[2026-01-15T16:11:05.615Z] [BOT] 💾 Saved posted_jobs.json: 1760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T16:11:05.615Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-15T16:11:05.616Z] [BOT] 💾 BEFORE ARCHIVING: 1761 jobs in database
[2026-01-15T16:11:05.617Z] [BOT] ✅ No jobs to archive (all 1761 jobs within 7-day window)
[2026-01-15T16:11:05.628Z] [BOT] 💾 Saved posted_jobs.json: 1761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T16:11:08.629Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T16:11:08.630Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:11:08.919Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:08.919Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 1/5
[2026-01-15T16:11:10.579Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:10.580Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:11:12.080Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
[2026-01-15T16:11:12.080Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:11:12.212Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:12.212Z] [BOT] ❌ Industry post failed: Backend Software Engineer Graduate - Capcut - 2026 Start
⚠️  Channel full error count: 2/5
[2026-01-15T16:11:13.896Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:13.896Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:11:15.396Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
[2026-01-15T16:11:15.397Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:11:15.575Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:15.575Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Ecommerce Recommendation - PhD
⚠️  Channel full error count: 3/5
[2026-01-15T16:11:17.216Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:17.216Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T16:11:18.717Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）" @ ORG_08c9a13c
[2026-01-15T16:11:18.717Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:11:18.844Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:18.844Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）
⚠️  Channel full error count: 4/5
[2026-01-15T16:11:20.470Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:20.470Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T16:11:21.970Z] [BOT] 📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
[2026-01-15T16:11:21.970Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T16:11:22.111Z] [BOT ERROR] ❌ Error posting job Software Development Engineer Graduate - SDN Traffic Intelligence & Control: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T16:11:22.111Z] [BOT] ❌ Industry post failed: Software Development Engineer Graduate - SDN Traffic Intelligence & Control
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-15T16:11:22.111Z] [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T16:11:22.112Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T16:11:22.112Z] [BOT] Total attempts: 15
   Successful: 2
   Failed: 13
   Skipped: 0
[2026-01-15T16:11:22.112Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T16:11:22.112Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🌧️・seattle: 1 posts
     2. #🤖・ai-jobs: 1 posts
[2026-01-15T16:11:22.113Z] [BOT] [STATS] Channel stats saved
[2026-01-15T16:11:22.113Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T16:11:22.126Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Conversational AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Conversational AI
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
- [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*