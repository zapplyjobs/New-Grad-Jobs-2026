# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T04:57:44.240Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T04:57:18.554Z] ========================================
[2026-01-17T04:57:18.556Z] Discord Bot Execution Log
[2026-01-17T04:57:18.556Z] Environment: GitHub Actions
[2026-01-17T04:57:18.556Z] Node Version: v20.19.6
[2026-01-17T04:57:18.556Z] ========================================
[2026-01-17T04:57:18.556Z] Environment Variables Check:
[2026-01-17T04:57:18.556Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T04:57:18.556Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.556Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T04:57:18.556Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T04:57:18.557Z] 
Multi-Channel Configuration:
[2026-01-17T04:57:18.557Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T04:57:18.557Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T04:57:18.557Z] 
Data Files Check:
[2026-01-17T04:57:18.558Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7736 bytes)
[2026-01-17T04:57:18.567Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1220638 bytes)
[2026-01-17T04:57:18.567Z] 
========================================
[2026-01-17T04:57:18.567Z] Starting Enhanced Discord Bot...
[2026-01-17T04:57:18.567Z] ========================================
[2026-01-17T04:57:19.031Z] [BOT] ✅ Loaded V2 database: 2252 jobs
[2026-01-17T04:57:19.736Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T04:57:19.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T04:57:19.737Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T04:57:19.893Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineer Graduate: - Machine Learning Engineer - Local Services Search at TikTok
[2026-01-17T04:57:19.896Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T04:57:19.896Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T04:57:19.896Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T04:57:19.897Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-17T04:57:19.897Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
   - Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T04:57:19.902Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-17T04:57:19.902Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2026-01-17T04:57:19.902Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:19.918Z] [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T04:57:20.108Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2026-01-17T04:57:21.855Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌧️・seattle
[2026-01-17T04:57:21.856Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T04:57:23.356Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:57:23.356Z] [BOT] 💾 BEFORE ARCHIVING: 2253 jobs in database
[2026-01-17T04:57:23.358Z] [BOT] ✅ No jobs to archive (all 2253 jobs within 7-day window)
[2026-01-17T04:57:23.374Z] [BOT] 💾 Saved posted_jobs.json: 2253 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:57:23.374Z] [BOT] 💾 Marked as posted: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:57:23.375Z] [BOT] 💾 BEFORE ARCHIVING: 2254 jobs in database
[2026-01-17T04:57:23.376Z] [BOT] ✅ No jobs to archive (all 2254 jobs within 7-day window)
[2026-01-17T04:57:23.392Z] [BOT] 💾 Saved posted_jobs.json: 2254 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:57:23.393Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - PhD" @ ORG_1bb6fcfb
[2026-01-17T04:57:23.394Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:23.561Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T04:57:23.561Z] [BOT] ✅ Industry: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb
[2026-01-17T04:57:25.406Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T04:57:25.406Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T04:57:26.908Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:57:26.908Z] [BOT] 💾 BEFORE ARCHIVING: 2255 jobs in database
[2026-01-17T04:57:26.909Z] [BOT] ✅ No jobs to archive (all 2255 jobs within 7-day window)
[2026-01-17T04:57:26.922Z] [BOT] 💾 Saved posted_jobs.json: 2255 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:57:26.923Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T04:57:26.923Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:27.102Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb
[2026-01-17T04:57:28.858Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T04:57:30.359Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:57:30.359Z] [BOT] 💾 BEFORE ARCHIVING: 2256 jobs in database
[2026-01-17T04:57:30.360Z] [BOT] ✅ No jobs to archive (all 2256 jobs within 7-day window)
[2026-01-17T04:57:30.376Z] [BOT] 💾 Saved posted_jobs.json: 2256 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:57:30.377Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:57:30.377Z] [BOT] 💾 BEFORE ARCHIVING: 2257 jobs in database
[2026-01-17T04:57:30.378Z] [BOT] ✅ No jobs to archive (all 2257 jobs within 7-day window)
[2026-01-17T04:57:30.393Z] [BOT] 💾 Saved posted_jobs.json: 2257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:57:30.395Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
[2026-01-17T04:57:30.395Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:30.504Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - Multiple Teams @ TikTok',
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
[2026-01-17T04:57:30.504Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
⚠️  Channel full error count: 1/5
[2026-01-17T04:57:32.126Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - Multiple Teams @ TikTok',
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
[2026-01-17T04:57:32.126Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:57:33.627Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T04:57:33.627Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:33.766Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok',
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
[2026-01-17T04:57:33.766Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation
⚠️  Channel full error count: 2/5
[2026-01-17T04:57:35.383Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok',
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
[2026-01-17T04:57:35.384Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T04:57:36.885Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD" @ ORG_1bb6fcfb
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T04:57:36.885Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:37.001Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ TikTok',
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
[2026-01-17T04:57:37.001Z] [BOT] ❌ Industry post failed: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD
⚠️  Channel full error count: 3/5
[2026-01-17T04:57:38.619Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ TikTok',
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
[2026-01-17T04:57:38.619Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T04:57:40.119Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Monetization Technology - GenAI" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T04:57:40.119Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:40.233Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Monetization Technology - GenAI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ TikTok',
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
[2026-01-17T04:57:40.233Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Monetization Technology - GenAI
⚠️  Channel full error count: 4/5
[2026-01-17T04:57:41.892Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Monetization Technology - GenAI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ TikTok',
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
[2026-01-17T04:57:41.893Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:57:43.393Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T04:57:43.393Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:57:43.517Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ TikTok',
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
[2026-01-17T04:57:43.517Z] [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T04:57:43.518Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T04:57:43.518Z] [BOT] Total attempts: 15
   Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-17T04:57:43.518Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2026-01-17T04:57:43.518Z] [BOT] 1. #🤖・ai-jobs: 3 posts
     2. #🌉・san-francisco: 2 posts
     3. #🌧️・seattle: 1 posts
[2026-01-17T04:57:43.518Z] [BOT] [STATS] Channel stats saved
[2026-01-17T04:57:43.519Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T04:57:43.529Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Monetization Technology - GenAI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Monetization Technology - GenAI
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Monetization Technology - GenAI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*