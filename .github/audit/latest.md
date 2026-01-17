# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T04:46:10.179Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T04:45:32.605Z] ========================================
[2026-01-17T04:45:32.607Z] Discord Bot Execution Log
[2026-01-17T04:45:32.607Z] Environment: GitHub Actions
[2026-01-17T04:45:32.607Z] Node Version: v20.19.6
[2026-01-17T04:45:32.607Z] ========================================
[2026-01-17T04:45:32.607Z] Environment Variables Check:
[2026-01-17T04:45:32.607Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T04:45:32.607Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T04:45:32.608Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T04:45:32.608Z] 
Multi-Channel Configuration:
[2026-01-17T04:45:32.608Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.608Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.609Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T04:45:32.609Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T04:45:32.609Z] 
Data Files Check:
[2026-01-17T04:45:32.609Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8576 bytes)
[2026-01-17T04:45:32.618Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1217309 bytes)
[2026-01-17T04:45:32.618Z] 
========================================
[2026-01-17T04:45:32.618Z] Starting Enhanced Discord Bot...
[2026-01-17T04:45:32.618Z] ========================================
[2026-01-17T04:45:33.147Z] [BOT] ✅ Loaded V2 database: 2246 jobs
[2026-01-17T04:45:33.638Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T04:45:33.639Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T04:45:33.639Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T04:45:33.759Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Forward Deployed Software Engineer I at Maxar
[2026-01-17T04:45:33.764Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T04:45:33.764Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T04:45:33.765Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T04:45:33.765Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T04:45:33.766Z] [BOT] - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T04:45:33.767Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-17T04:45:33.768Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer I" @ ORG_76725f91
[2026-01-17T04:45:33.768Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T04:45:33.786Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T04:45:33.956Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Software Engineer I @ ORG_76725f91 in #💻・tech-jobs
[2026-01-17T04:45:33.956Z] [BOT] ✅ Industry: Forward Deployed Software Engineer I @ ORG_76725f91
[2026-01-17T04:45:35.668Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Software Engineer I @ ORG_76725f91 in #💻・remote-usa
[2026-01-17T04:45:35.668Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T04:45:37.170Z] [BOT] 💾 Marked as posted: Forward Deployed Software Engineer I @ ORG_76725f91 (instance #1)
[2026-01-17T04:45:37.171Z] [BOT] 💾 BEFORE ARCHIVING: 2247 jobs in database
[2026-01-17T04:45:37.172Z] [BOT] ✅ No jobs to archive (all 2247 jobs within 7-day window)
[2026-01-17T04:45:37.194Z] [BOT] 💾 Saved posted_jobs.json: 2247 active jobs
[2026-01-17T04:45:37.194Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:40.194Z] [BOT] 📌 Posting 9 jobs to #🤖・ai-jobs
[2026-01-17T04:45:40.195Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
[2026-01-17T04:45:40.195Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:40.456Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-17T04:45:40.456Z] [BOT] ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2026-01-17T04:45:42.687Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-17T04:45:42.688Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T04:45:44.189Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (instance #1)
[2026-01-17T04:45:44.189Z] [BOT] 💾 BEFORE ARCHIVING: 2248 jobs in database
[2026-01-17T04:45:44.191Z] [BOT] ✅ No jobs to archive (all 2248 jobs within 7-day window)
[2026-01-17T04:45:44.208Z] [BOT] 💾 Saved posted_jobs.json: 2248 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:44.208Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Inference @ ORG_08c9a13c (instance #1)
[2026-01-17T04:45:44.208Z] [BOT] 💾 BEFORE ARCHIVING: 2249 jobs in database
[2026-01-17T04:45:44.210Z] [BOT] ✅ No jobs to archive (all 2249 jobs within 7-day window)
[2026-01-17T04:45:44.225Z] [BOT] 💾 Saved posted_jobs.json: 2249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:44.226Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning" @ ORG_08c9a13c
[2026-01-17T04:45:44.226Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:44.497Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c
[2026-01-17T04:45:47.750Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T04:45:49.251Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c (instance #1)
[2026-01-17T04:45:49.251Z] [BOT] 💾 BEFORE ARCHIVING: 2250 jobs in database
[2026-01-17T04:45:49.252Z] [BOT] ✅ No jobs to archive (all 2250 jobs within 7-day window)
[2026-01-17T04:45:49.266Z] [BOT] 💾 Saved posted_jobs.json: 2250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:49.267Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T04:45:49.267Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:49.584Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T04:45:49.584Z] [BOT] ✅ Industry: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb
[2026-01-17T04:45:51.328Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T04:45:52.829Z] [BOT] 💾 Marked as posted: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:45:52.829Z] [BOT] 💾 BEFORE ARCHIVING: 2251 jobs in database
[2026-01-17T04:45:52.831Z] [BOT] ✅ No jobs to archive (all 2251 jobs within 7-day window)
[2026-01-17T04:45:52.847Z] [BOT] 💾 Saved posted_jobs.json: 2251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:52.848Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation" @ ORG_1bb6fcfb
[2026-01-17T04:45:52.849Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:53.080Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb
[2026-01-17T04:45:54.703Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ TikTok',
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
[2026-01-17T04:45:54.704Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:45:56.204Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T04:45:56.204Z] [BOT] 💾 BEFORE ARCHIVING: 2252 jobs in database
[2026-01-17T04:45:56.206Z] [BOT] ✅ No jobs to archive (all 2252 jobs within 7-day window)
[2026-01-17T04:45:56.220Z] [BOT] 💾 Saved posted_jobs.json: 2252 active jobs
[2026-01-17T04:45:56.220Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T04:45:56.221Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2026-01-17T04:45:56.221Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:56.328Z] [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok',
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
[2026-01-17T04:45:56.328Z] [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Local Services Search
⚠️  Channel full error count: 1/5
[2026-01-17T04:45:57.980Z] [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok',
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
[2026-01-17T04:45:57.980Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T04:45:59.482Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - PhD" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T04:45:59.482Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:45:59.608Z] [BOT ERROR] ❌ Error posting job General Hire – Machine Learning Engineer Graduate - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 General Hire – Machine Learning Engineer Graduate - PhD @ TikTok',
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
[2026-01-17T04:45:59.608Z] [BOT] ❌ Industry post failed: General Hire – Machine Learning Engineer Graduate - PhD
⚠️  Channel full error count: 2/5
[2026-01-17T04:46:01.261Z] [BOT ERROR] ❌ Error posting job General Hire – Machine Learning Engineer Graduate - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 General Hire – Machine Learning Engineer Graduate - PhD @ TikTok',
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
[2026-01-17T04:46:01.261Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:46:02.763Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T04:46:02.764Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:46:02.859Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ TikTok',
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
[2026-01-17T04:46:02.859Z] [BOT] ❌ Industry post failed: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start
⚠️  Channel full error count: 3/5
[2026-01-17T04:46:04.466Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ TikTok',
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
[2026-01-17T04:46:04.466Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:46:05.966Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T04:46:05.966Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:46:06.069Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T04:46:06.069Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
⚠️  Channel full error count: 4/5
[2026-01-17T04:46:07.729Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T04:46:07.729Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:46:09.231Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T04:46:09.231Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:46:09.354Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T04:46:09.355Z] [BOT] ❌ Industry post failed: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T04:46:09.355Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 19
[2026-01-17T04:46:09.355Z] [BOT] Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-17T04:46:09.356Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T04:46:09.356Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 4
   Top channels:
[2026-01-17T04:46:09.356Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 3 posts
     3. #💻・tech-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-17T04:46:09.356Z] [BOT] [STATS] Channel stats saved
[2026-01-17T04:46:09.356Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T04:46:09.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Local Services Search
- [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job General Hire – Machine Learning Engineer Graduate - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: General Hire – Machine Learning Engineer Graduate - PhD
- [BOT ERROR] ❌ Error posting job General Hire – Machine Learning Engineer Graduate - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Engineer - Multiple Teams
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Scientist - Global E-commerce Content Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*