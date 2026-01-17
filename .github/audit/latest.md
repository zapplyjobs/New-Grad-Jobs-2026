# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T05:53:58.567Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T05:53:33.455Z] ========================================
[2026-01-17T05:53:33.457Z] Discord Bot Execution Log
[2026-01-17T05:53:33.457Z] Environment: GitHub Actions
[2026-01-17T05:53:33.457Z] Node Version: v20.19.6
[2026-01-17T05:53:33.457Z] ========================================
[2026-01-17T05:53:33.457Z] Environment Variables Check:
[2026-01-17T05:53:33.457Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T05:53:33.457Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.457Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T05:53:33.458Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T05:53:33.458Z] 
Multi-Channel Configuration:
[2026-01-17T05:53:33.458Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T05:53:33.458Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T05:53:33.459Z] 
Data Files Check:
[2026-01-17T05:53:33.459Z] .github/data/new_jobs.json: ✅ Exists (10 items, 15398 bytes)
[2026-01-17T05:53:33.468Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1240320 bytes)
[2026-01-17T05:53:33.468Z] 
========================================
[2026-01-17T05:53:33.468Z] Starting Enhanced Discord Bot...
[2026-01-17T05:53:33.468Z] ========================================
[2026-01-17T05:53:34.000Z] [BOT] ✅ Loaded V2 database: 2291 jobs
[2026-01-17T05:53:34.560Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T05:53:34.561Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T05:53:34.561Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T05:53:34.675Z] [BOT] ✅ Loaded pending queue: 2881 total (2861 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety at TikTok
[2026-01-17T05:53:34.678Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T05:53:34.678Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T05:53:34.678Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T05:53:34.679Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T05:53:34.679Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T05:53:34.681Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-17T05:53:34.682Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
[2026-01-17T05:53:34.682Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:34.699Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T05:53:35.077Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:53:35.078Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2026-01-17T05:53:36.734Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:53:38.234Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:53:38.234Z] [BOT] 💾 BEFORE ARCHIVING: 2292 jobs in database
[2026-01-17T05:53:38.236Z] [BOT] ✅ No jobs to archive (all 2292 jobs within 7-day window)
[2026-01-17T05:53:38.253Z] [BOT] 💾 Saved posted_jobs.json: 2292 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:53:38.254Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM" @ ORG_1bb6fcfb
[2026-01-17T05:53:38.254Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:38.516Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:53:38.516Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb
[2026-01-17T05:53:40.122Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ TikTok',
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
[2026-01-17T05:53:40.123Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T05:53:41.623Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:53:41.623Z] [BOT] 💾 BEFORE ARCHIVING: 2293 jobs in database
[2026-01-17T05:53:41.626Z] [BOT] ✅ No jobs to archive (all 2293 jobs within 7-day window)
[2026-01-17T05:53:41.639Z] [BOT] 💾 Saved posted_jobs.json: 2293 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:53:41.639Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:53:41.639Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:41.751Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ TikTok',
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
[2026-01-17T05:53:41.752Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD
⚠️  Channel full error count: 1/5
[2026-01-17T05:53:43.384Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ TikTok',
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
[2026-01-17T05:53:43.384Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T05:53:44.886Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_08c9a13c
[2026-01-17T05:53:44.886Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:45.035Z] [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ByteDance',
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
[2026-01-17T05:53:45.035Z] [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US
⚠️  Channel full error count: 2/5
[2026-01-17T05:53:46.688Z] [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ByteDance',
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
[2026-01-17T05:53:46.688Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T05:53:48.189Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Water Systems - Ml" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:53:48.189Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:48.292Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow in Water Systems - Ml: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin',
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
[2026-01-17T05:53:48.292Z] [BOT] ❌ Industry post failed: Postdoctoral Fellow in Water Systems - Ml
⚠️  Channel full error count: 3/5
[2026-01-17T05:53:49.899Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow in Water Systems - Ml: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-17T05:53:49.899Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T05:53:51.400Z] [BOT] 📍 [ROUTING] "Data Operations Specialist - GenAI Annotation" @ ORG_0b3f1c03inable Talent
   Category: AI (matched: "AI/ML")
[2026-01-17T05:53:51.400Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:53:51.516Z] [BOT ERROR] ❌ Error posting job Data Operations Specialist - GenAI Annotation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent',
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
[2026-01-17T05:53:51.516Z] [BOT] ❌ Industry post failed: Data Operations Specialist - GenAI Annotation
⚠️  Channel full error count: 4/5
[2026-01-17T05:53:53.157Z] [BOT ERROR] ❌ Error posting job Data Operations Specialist - GenAI Annotation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent',
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
[2026-01-17T05:53:53.157Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T05:53:57.658Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T05:53:57.659Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T05:53:57.659Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:53:57.788Z] [BOT ERROR] ❌ Error posting job Data Engineer Graduate - E-commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer Graduate - E-commerce - 2026 Start @ TikTok',
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
[2026-01-17T05:53:57.788Z] [BOT] ❌ Industry post failed: Data Engineer Graduate - E-commerce - 2026 Start
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T05:53:57.789Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T05:53:57.789Z] [BOT] Total attempts: 13
   Successful: 3
   Failed: 10
   Skipped: 0
[2026-01-17T05:53:57.789Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T05:53:57.789Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-17T05:53:57.789Z] [BOT] 2. #🌧️・seattle: 1 posts
[2026-01-17T05:53:57.789Z] [BOT] [STATS] Channel stats saved
[2026-01-17T05:53:57.790Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T05:53:57.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US
- [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow in Water Systems - Ml: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Fellow in Water Systems - Ml
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow in Water Systems - Ml: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Operations Specialist - GenAI Annotation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Operations Specialist - GenAI Annotation
- [BOT ERROR] ❌ Error posting job Data Operations Specialist - GenAI Annotation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Engineer Graduate - E-commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer Graduate - E-commerce - 2026 Start
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*