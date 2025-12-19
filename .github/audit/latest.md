# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T23:04:53.858Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T23:04:17.228Z] ========================================
[2025-12-19T23:04:17.230Z] Discord Bot Execution Log
[2025-12-19T23:04:17.230Z] Environment: GitHub Actions
[2025-12-19T23:04:17.230Z] Node Version: v20.19.6
[2025-12-19T23:04:17.230Z] ========================================
[2025-12-19T23:04:17.230Z] Environment Variables Check:
[2025-12-19T23:04:17.230Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T23:04:17.230Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.230Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T23:04:17.231Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T23:04:17.231Z] 
Multi-Channel Configuration:
[2025-12-19T23:04:17.231Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T23:04:17.231Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T23:04:17.232Z] 
Data Files Check:
[2025-12-19T23:04:17.232Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7053 bytes)
[2025-12-19T23:04:17.234Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 374630 bytes)
[2025-12-19T23:04:17.234Z] 
========================================
[2025-12-19T23:04:17.234Z] Starting Enhanced Discord Bot...
[2025-12-19T23:04:17.234Z] ========================================
[2025-12-19T23:04:17.765Z] [BOT] ✅ Loaded V2 database: 634 jobs
[2025-12-19T23:04:24.213Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T23:04:24.213Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T23:04:24.214Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T23:04:24.214Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T23:04:24.262Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T23:04:24.308Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T23:04:24.310Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T23:04:24.311Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T23:04:24.311Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T23:04:24.311Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T23:04:24.312Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T23:04:24.313Z] [BOT] 📌 Posting 10 jobs to #🤖・ai-jobs
[2025-12-19T23:04:24.314Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Inference" @ ORG_08c9a13c
[2025-12-19T23:04:24.314Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:24.332Z] [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T23:04:25.665Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T23:04:25.665Z] [BOT] ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c
[2025-12-19T23:04:27.604Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-19T23:04:27.604Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T23:04:29.105Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c (instance #1)
[2025-12-19T23:04:29.105Z] [BOT] 💾 BEFORE ARCHIVING: 635 jobs in database
[2025-12-19T23:04:29.106Z] [BOT] ✅ No jobs to archive (all 635 jobs within 7-day window)
[2025-12-19T23:04:29.117Z] [BOT] 💾 Saved posted_jobs.json: 635 active jobs
[2025-12-19T23:04:29.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T23:04:29.119Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Risk Control - MS" @ ORG_1bb6fcfb
[2025-12-19T23:04:29.119Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:29.595Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Risk Control - MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-19T23:04:29.595Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Risk Control - MS @ ORG_1bb6fcfb
[2025-12-19T23:04:31.262Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - E-Commerce Risk Control - MS: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Graduate Machine Learning Engineer - E-Commerce Risk Control - MS @ TikTok',
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
[2025-12-19T23:04:31.262Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T23:04:32.763Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Risk Control - MS @ ORG_1bb6fcfb (instance #1)
[2025-12-19T23:04:32.763Z] [BOT] 💾 BEFORE ARCHIVING: 636 jobs in database
[2025-12-19T23:04:32.764Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2025-12-19T23:04:32.769Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2025-12-19T23:04:32.769Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T23:04:32.770Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start" @ ORG_1bb6fcfb
[2025-12-19T23:04:32.770Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:33.801Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-19T23:04:33.802Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb
[2025-12-19T23:04:35.432Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start @ TikTok',
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
[2025-12-19T23:04:35.433Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T23:04:36.933Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-19T23:04:36.933Z] [BOT] 💾 BEFORE ARCHIVING: 637 jobs in database
[2025-12-19T23:04:36.934Z] [BOT] ✅ No jobs to archive (all 637 jobs within 7-day window)
[2025-12-19T23:04:36.942Z] [BOT] 💾 Saved posted_jobs.json: 637 active jobs
[2025-12-19T23:04:36.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T23:04:36.942Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety" @ ORG_1bb6fcfb
[2025-12-19T23:04:36.942Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:37.352Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ TikTok',
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
[2025-12-19T23:04:37.353Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety
⚠️  Channel full error count: 1/5
[2025-12-19T23:04:40.287Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ TikTok',
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
[2025-12-19T23:04:40.287Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2025-12-19T23:04:41.787Z] [BOT] 📍 [ROUTING] "LLM Research Scientist Graduate" @ ORG_1bb6fcfb
[2025-12-19T23:04:41.787Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T23:04:42.402Z] [BOT ERROR] ❌ Error posting job LLM Research Scientist Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 LLM Research Scientist Graduate @ TikTok',
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
[2025-12-19T23:04:42.402Z] [BOT] ❌ Industry post failed: LLM Research Scientist Graduate
⚠️  Channel full error count: 2/5
[2025-12-19T23:04:44.356Z] [BOT ERROR] ❌ Error posting job LLM Research Scientist Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 LLM Research Scientist Graduate @ TikTok',
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
[2025-12-19T23:04:44.356Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T23:04:45.857Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - E-Commerce Risk Control" @ ORG_1bb6fcfb
[2025-12-19T23:04:45.857Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:46.009Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer - E-Commerce Risk Control: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer - E-Commerce Risk Control @ TikTok',
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
[2025-12-19T23:04:46.009Z] [BOT] ❌ Industry post failed: Machine Learning Engineer - E-Commerce Risk Control
⚠️  Channel full error count: 3/5
[2025-12-19T23:04:47.710Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer - E-Commerce Risk Control: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer - E-Commerce Risk Control @ TikTok',
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
[2025-12-19T23:04:47.711Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T23:04:49.211Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_1bb6fcfb
[2025-12-19T23:04:49.211Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:49.508Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ TikTok',
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
[2025-12-19T23:04:49.508Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP
⚠️  Channel full error count: 4/5
[2025-12-19T23:04:51.122Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ TikTok',
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
[2025-12-19T23:04:51.123Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T23:04:52.623Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_1bb6fcfb
[2025-12-19T23:04:52.623Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T23:04:52.839Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - Multiple Teams @ TikTok',
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
[2025-12-19T23:04:52.839Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Multiple Teams
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2025-12-19T23:04:52.840Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 15
   Successful: 4
   Failed: 11
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-19T23:04:52.840Z] [BOT] Total posts: 4
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #🌉・san-francisco: 1 posts
[2025-12-19T23:04:52.840Z] [BOT] [STATS] Channel stats saved
[2025-12-19T23:04:52.841Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_41b776ee.json
[2025-12-19T23:04:52.850Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - E-Commerce Risk Control - MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Ecommerce Recommendation - 2025 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job LLM Research Scientist Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: LLM Research Scientist Graduate
- [BOT ERROR] ❌ Error posting job LLM Research Scientist Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer - E-Commerce Risk Control: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer - E-Commerce Risk Control
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer - E-Commerce Risk Control: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - Multiple Teams
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*