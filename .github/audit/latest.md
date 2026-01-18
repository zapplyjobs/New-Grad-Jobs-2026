# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T07:02:03.681Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T07:01:31.926Z] ========================================
[2026-01-18T07:01:31.928Z] Discord Bot Execution Log
[2026-01-18T07:01:31.928Z] Environment: GitHub Actions
[2026-01-18T07:01:31.928Z] Node Version: v20.19.6
[2026-01-18T07:01:31.928Z] ========================================
[2026-01-18T07:01:31.928Z] Environment Variables Check:
[2026-01-18T07:01:31.928Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T07:01:31.928Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.928Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T07:01:31.929Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T07:01:31.929Z] 
Multi-Channel Configuration:
[2026-01-18T07:01:31.929Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T07:01:31.929Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T07:01:31.929Z] 
Data Files Check:
[2026-01-18T07:01:31.930Z] .github/data/new_jobs.json: ✅ Exists (10 items, 113614 bytes)
[2026-01-18T07:01:31.941Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1413424 bytes)
[2026-01-18T07:01:31.941Z] 
========================================
[2026-01-18T07:01:31.941Z] Starting Enhanced Discord Bot...
[2026-01-18T07:01:31.941Z] ========================================
[2026-01-18T07:01:32.474Z] [BOT] ✅ Loaded V2 database: 2611 jobs
[2026-01-18T07:01:33.038Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T07:01:33.038Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T07:01:33.038Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T07:01:33.156Z] [BOT] ✅ Loaded pending queue: 2857 total (2837 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Development Engineer at Huntington Ingalls Industries
[2026-01-18T07:01:33.159Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T07:01:33.160Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T07:01:33.160Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T07:01:33.161Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-18T07:01:33.161Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T07:01:33.161Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T07:01:33.166Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-18T07:01:33.167Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_81f16575ington Ingalls Industries
[2026-01-18T07:01:33.167Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T07:01:33.172Z] [BOT ERROR] (node:3521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T07:01:33.390Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
  ✅ Industry: Software Development Engineer @ ORG_81f16575ington Ingalls Industries
[2026-01-18T07:01:35.116Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T07:01:36.618Z] [BOT] 💾 Marked as posted: Software Development Engineer @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-18T07:01:36.618Z] [BOT] 💾 BEFORE ARCHIVING: 2612 jobs in database
[2026-01-18T07:01:36.620Z] [BOT] ✅ No jobs to archive (all 2612 jobs within 7-day window)
[2026-01-18T07:01:36.640Z] [BOT] 💾 Saved posted_jobs.json: 2612 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:01:36.641Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_9d7ad979
[2026-01-18T07:01:36.641Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T07:01:36.860Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_9d7ad979 in #🤖・ai-jobs
[2026-01-18T07:01:36.860Z] [BOT] ✅ Industry: Software Engineer @ ORG_9d7ad979
[2026-01-18T07:01:38.576Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_9d7ad979 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T07:01:40.077Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_9d7ad979 (instance #1)
[2026-01-18T07:01:40.077Z] [BOT] 💾 BEFORE ARCHIVING: 2613 jobs in database
[2026-01-18T07:01:40.079Z] [BOT] ✅ No jobs to archive (all 2613 jobs within 7-day window)
[2026-01-18T07:01:40.094Z] [BOT] 💾 Saved posted_jobs.json: 2613 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:01:40.094Z] [BOT] 📍 [ROUTING] "Applied Scientist – New College Grad - AI Enterprise Products" @ ORG_0890f456
[2026-01-18T07:01:40.094Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:01:40.095Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T07:01:40.235Z] [BOT ERROR] ❌ Error posting job Applied Scientist – New College Grad - AI Enterprise Products: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applied Scientist – New College Grad - AI Enterprise Products @ NVIDIA',
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
[2026-01-18T07:01:40.235Z] [BOT] ❌ Industry post failed: Applied Scientist – New College Grad - AI Enterprise Products
⚠️  Channel full error count: 1/5
[2026-01-18T07:01:41.883Z] [BOT ERROR] ❌ Error posting job Applied Scientist – New College Grad - AI Enterprise Products: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applied Scientist – New College Grad - AI Enterprise Products @ NVIDIA',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-18T07:01:41.883Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T07:01:43.384Z] [BOT] 📍 [ROUTING] "Product Designer, Enterprise " @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:01:43.529Z] [BOT ERROR] ❌ Error posting job Product Designer, Enterprise : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Designer, Enterprise  @ anthropic',
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
[2026-01-18T07:01:43.529Z] [BOT] ❌ Industry post failed: Product Designer, Enterprise 
⚠️  Channel full error count: 2/5
[2026-01-18T07:01:45.164Z] [BOT ERROR] ❌ Error posting job Product Designer, Enterprise : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Designer, Enterprise  @ anthropic',
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
[2026-01-18T07:01:45.164Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T07:01:49.666Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T07:01:49.667Z] [BOT] 📍 [ROUTING] "Recruiter, G&A" @ anthropic
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T07:01:49.837Z] [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, G&A @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2026-01-18T07:01:49.837Z] [BOT] ❌ Industry post failed: Recruiter, G&A
⚠️  Channel full error count: 3/5
[2026-01-18T07:01:51.465Z] [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, G&A @ anthropic',
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
[2026-01-18T07:01:51.465Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T07:01:55.968Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T07:01:55.968Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
   Category: MARKETING (matched: "brand")
[2026-01-18T07:01:55.968Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T07:01:56.121Z] [BOT ERROR] ❌ Error posting job Litigation and Risk Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Litigation and Risk Counsel @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-18T07:01:56.122Z] [BOT] ❌ Industry post failed: Litigation and Risk Counsel
⚠️  Channel full error count: 4/5
[2026-01-18T07:01:57.754Z] [BOT ERROR] ❌ Error posting job Litigation and Risk Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Litigation and Risk Counsel @ brex',
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
[2026-01-18T07:01:57.755Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-18T07:02:02.256Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T07:02:02.256Z] [BOT] 📍 [ROUTING] "Associate Systems Analyst-IT Sales & Trade Portfolio" @ ORG_4d4fb8cc Brands
[2026-01-18T07:02:02.257Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:02:02.402Z] [BOT ERROR] ❌ Error posting job Associate Systems Analyst-IT Sales & Trade Portfolio: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands',
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
[2026-01-18T07:02:02.403Z] [BOT] ❌ Industry post failed: Associate Systems Analyst-IT Sales & Trade Portfolio
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T07:02:02.403Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T07:02:02.403Z] [BOT] Total attempts: 13
   Successful: 4
   Failed: 9
   Skipped: 0
[2026-01-18T07:02:02.404Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T07:02:02.404Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-18T07:02:02.404Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
     3. #🚌・boston: 1 posts
[2026-01-18T07:02:02.404Z] [BOT] [STATS] Channel stats saved
[2026-01-18T07:02:02.404Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T07:02:02.417Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Applied Scientist – New College Grad - AI Enterprise Products: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Applied Scientist – New College Grad - AI Enterprise Products
- [BOT ERROR] ❌ Error posting job Applied Scientist – New College Grad - AI Enterprise Products: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Designer, Enterprise : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Designer, Enterprise
- [BOT ERROR] ❌ Error posting job Product Designer, Enterprise : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Recruiter, G&A
- [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Litigation and Risk Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Litigation and Risk Counsel
- [BOT ERROR] ❌ Error posting job Litigation and Risk Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Systems Analyst-IT Sales & Trade Portfolio: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Systems Analyst-IT Sales & Trade Portfolio
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*