# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T18:46:17.848Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T18:45:44.736Z] ========================================
[2026-01-18T18:45:44.738Z] Discord Bot Execution Log
[2026-01-18T18:45:44.738Z] Environment: GitHub Actions
[2026-01-18T18:45:44.738Z] Node Version: v20.19.6
[2026-01-18T18:45:44.738Z] ========================================
[2026-01-18T18:45:44.738Z] Environment Variables Check:
[2026-01-18T18:45:44.738Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T18:45:44.738Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.738Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T18:45:44.738Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T18:45:44.738Z] 
Multi-Channel Configuration:
[2026-01-18T18:45:44.739Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T18:45:44.739Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T18:45:44.739Z] 
Data Files Check:
[2026-01-18T18:45:44.740Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79401 bytes)
[2026-01-18T18:45:44.750Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1464710 bytes)
[2026-01-18T18:45:44.750Z] 
========================================
[2026-01-18T18:45:44.750Z] Starting Enhanced Discord Bot...
[2026-01-18T18:45:44.750Z] ========================================
[2026-01-18T18:45:45.286Z] [BOT] ✅ Loaded V2 database: 2703 jobs
[2026-01-18T18:45:46.096Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T18:45:46.096Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T18:45:46.097Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T18:45:46.216Z] [BOT] ✅ Loaded pending queue: 2841 total (2821 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-18T18:45:46.220Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T18:45:46.220Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T18:45:46.220Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T18:45:46.221Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T18:45:46.221Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T18:45:46.221Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T18:45:46.226Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T18:45:46.226Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Federal / State)" @ verkada
[2026-01-18T18:45:46.227Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T18:45:46.231Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T18:45:46.476Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Federal / State) @ verkada in #📣・marketing-jobs
  ✅ Industry: Senior Field Marketing Manager (Federal / State) @ verkada
[2026-01-18T18:45:48.521Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Federal / State) @ verkada in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T18:45:50.023Z] [BOT] 💾 Marked as posted: Senior Field Marketing Manager (Federal / State) @ verkada (instance #1)
[2026-01-18T18:45:50.023Z] [BOT] 💾 BEFORE ARCHIVING: 2704 jobs in database
[2026-01-18T18:45:50.025Z] [BOT] ✅ No jobs to archive (all 2704 jobs within 7-day window)
[2026-01-18T18:45:50.045Z] [BOT] 💾 Saved posted_jobs.json: 2704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T18:45:53.046Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-18T18:45:53.047Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T18:45:53.285Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-18T18:45:53.285Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_c7bac469
[2026-01-18T18:45:55.057Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T18:45:56.559Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_c7bac469 (instance #1)
[2026-01-18T18:45:56.559Z] [BOT] 💾 BEFORE ARCHIVING: 2705 jobs in database
[2026-01-18T18:45:56.561Z] [BOT] ✅ No jobs to archive (all 2705 jobs within 7-day window)
[2026-01-18T18:45:56.580Z] [BOT] 💾 Saved posted_jobs.json: 2705 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T18:45:56.581Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_cdfeb1f5
[2026-01-18T18:45:56.582Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T18:45:56.881Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ ORG_cdfeb1f5 in #💻・tech-jobs
[2026-01-18T18:45:56.881Z] [BOT] ✅ Industry: Principal Engineer @ ORG_cdfeb1f5
[2026-01-18T18:45:58.528Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Principal Engineer @ Amgen',
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
[2026-01-18T18:45:58.528Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T18:46:00.030Z] [BOT] 💾 Marked as posted: Principal Engineer @ ORG_cdfeb1f5 (instance #1)
[2026-01-18T18:46:00.030Z] [BOT] 💾 BEFORE ARCHIVING: 2706 jobs in database
[2026-01-18T18:46:00.032Z] [BOT] ✅ No jobs to archive (all 2706 jobs within 7-day window)
[2026-01-18T18:46:00.050Z] [BOT] 💾 Saved posted_jobs.json: 2706 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T18:46:00.051Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-18T18:46:00.051Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T18:46:00.182Z] [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems',
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
[2026-01-18T18:46:00.182Z] [BOT] ❌ Industry post failed: C++ Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T18:46:01.874Z] [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-18T18:46:01.874Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-18T18:46:03.376Z] [BOT] 📍 [ROUTING] "Quality Engineer - Principal Quality Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T18:46:03.559Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T18:46:03.560Z] [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
⚠️  Channel full error count: 2/5
[2026-01-18T18:46:05.276Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T18:46:05.276Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T18:46:06.777Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
   Category: TECH (matched: "software")
[2026-01-18T18:46:06.778Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T18:46:06.907Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T18:46:06.908Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
⚠️  Channel full error count: 3/5
[2026-01-18T18:46:08.678Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T18:46:08.679Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T18:46:13.180Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T18:46:13.181Z] [BOT] 📍 [ROUTING] "Security Risk & Compliance, Cloud & Data Center" @ anthropic
[2026-01-18T18:46:13.181Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T18:46:13.358Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic',
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
[2026-01-18T18:46:13.359Z] [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
⚠️  Channel full error count: 4/5
[2026-01-18T18:46:15.010Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic',
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
[2026-01-18T18:46:15.011Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T18:46:16.512Z] [BOT] 📍 [ROUTING] "Software Engineer - Artificial Intelligence" @ ORG_b344d80e Boeing Company
[2026-01-18T18:46:16.512Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T18:46:16.683Z] [BOT ERROR] ❌ Error posting job Software Engineer - Artificial Intelligence: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company',
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
[2026-01-18T18:46:16.683Z] [BOT] ❌ Industry post failed: Software Engineer - Artificial Intelligence
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T18:46:16.684Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T18:46:16.684Z] [BOT] Total attempts: 15
   Successful: 5
   Failed: 10
   Skipped: 0
[2026-01-18T18:46:16.684Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T18:46:16.684Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
[2026-01-18T18:46:16.685Z] [BOT] 2. #💻・tech-jobs: 2 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-18T18:46:16.685Z] [BOT] [STATS] Channel stats saved
[2026-01-18T18:46:16.685Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T18:46:16.698Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: C++ Software Engineer
- [BOT ERROR] ❌ Error posting job C++ Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Artificial Intelligence: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Artificial Intelligence
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*