# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T14:56:59.160Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T14:56:24.205Z] ========================================
[2026-01-14T14:56:24.207Z] Discord Bot Execution Log
[2026-01-14T14:56:24.207Z] Environment: GitHub Actions
[2026-01-14T14:56:24.207Z] Node Version: v20.19.6
[2026-01-14T14:56:24.207Z] ========================================
[2026-01-14T14:56:24.207Z] Environment Variables Check:
[2026-01-14T14:56:24.207Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T14:56:24.207Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T14:56:24.208Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T14:56:24.208Z] 
Multi-Channel Configuration:
[2026-01-14T14:56:24.208Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T14:56:24.208Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T14:56:24.209Z] 
Data Files Check:
[2026-01-14T14:56:24.209Z] .github/data/new_jobs.json: ✅ Exists (10 items, 85274 bytes)
[2026-01-14T14:56:24.215Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 715328 bytes)
[2026-01-14T14:56:24.215Z] 
========================================
[2026-01-14T14:56:24.215Z] Starting Enhanced Discord Bot...
[2026-01-14T14:56:24.215Z] ========================================
[2026-01-14T14:56:24.727Z] [BOT] ✅ Loaded V2 database: 1345 jobs
[2026-01-14T14:56:25.490Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T14:56:25.490Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T14:56:25.491Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T14:56:25.602Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineering/Scientist Associate 1 at University of Texas - Austin
[2026-01-14T14:56:25.605Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T14:56:25.606Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T14:56:25.606Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T14:56:25.607Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T14:56:25.607Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T14:56:25.611Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T14:56:25.612Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
[2026-01-14T14:56:25.612Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T14:56:25.630Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T14:56:25.764Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
[2026-01-14T14:56:25.764Z] [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
⚠️  Channel full error count: 1/5
[2026-01-14T14:56:27.384Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
[2026-01-14T14:56:27.384Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-14T14:56:28.886Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-14T14:56:28.886Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T14:56:29.015Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California',
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
[2026-01-14T14:56:29.015Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar Research Associate
⚠️  Channel full error count: 2/5
[2026-01-14T14:56:30.766Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #🦢・los-angeles
[2026-01-14T14:56:30.766Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-14T14:56:32.268Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California (instance #1)
[2026-01-14T14:56:32.268Z] [BOT] 💾 BEFORE ARCHIVING: 1346 jobs in database
[2026-01-14T14:56:32.270Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T14:56:32.271Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T14:56:32.271Z] [BOT] ✅ Archiving complete: 1 archived, 1345 active
[2026-01-14T14:56:32.279Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T14:56:35.280Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T14:56:35.281Z] [BOT] 📍 [ROUTING] "Clinical Analyst 1" @ ORG_b344d80e University of Kansas Hospital
[2026-01-14T14:56:35.281Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T14:56:35.501Z] [BOT] ✅ Created forum post: 🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital in #🩺・healthcare-jobs
[2026-01-14T14:56:35.502Z] [BOT] ✅ Industry: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital
[2026-01-14T14:56:37.334Z] [BOT ERROR] ❌ Error posting job Clinical Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital',
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
[2026-01-14T14:56:37.335Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T14:56:38.836Z] [BOT] 💾 Marked as posted: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital (instance #1)
[2026-01-14T14:56:38.836Z] [BOT] 💾 BEFORE ARCHIVING: 1346 jobs in database
[2026-01-14T14:56:38.838Z] [BOT] ✅ No jobs to archive (all 1346 jobs within 7-day window)
[2026-01-14T14:56:38.849Z] [BOT] 💾 Saved posted_jobs.json: 1346 active jobs
[2026-01-14T14:56:38.849Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T14:56:41.849Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T14:56:41.850Z] [BOT] 📍 [ROUTING] "Assistant Professor - Renewable Energy and Chemical Transformations" @ ORG_9d38443e of Central Florida
   Category: MARKETING (matched: "campaign")
[2026-01-14T14:56:41.850Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T14:56:42.036Z] [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori',
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
[2026-01-14T14:56:42.036Z] [BOT] ❌ Industry post failed: Assistant Professor - Renewable Energy and Chemical Transformations
⚠️  Channel full error count: 1/5
[2026-01-14T14:56:43.678Z] [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori',
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
[2026-01-14T14:56:43.679Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T14:56:48.181Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T14:56:48.181Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
   Category: TECH (matched: "software")
[2026-01-14T14:56:48.181Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T14:56:48.378Z] [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 New Grad Software Engineer - Backend 2026 @ Circle',
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
[2026-01-14T14:56:48.378Z] [BOT] ❌ Industry post failed: New Grad Software Engineer - Backend 2026
⚠️  Channel full error count: 2/5
[2026-01-14T14:56:50.029Z] [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 New Grad Software Engineer - Backend 2026 @ Circle',
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
[2026-01-14T14:56:50.029Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T14:56:51.530Z] [BOT] 📍 [ROUTING] "Engineering Support Associate" @ ORG_e1de44d1ington County VA
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T14:56:51.530Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T14:56:51.666Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T14:56:51.667Z] [BOT] ❌ Industry post failed: Engineering Support Associate
⚠️  Channel full error count: 3/5
[2026-01-14T14:56:53.312Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T14:56:53.313Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T14:56:54.814Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T14:56:54.814Z] [BOT] ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-14T14:56:54.995Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Data Center Infrastructure @ anthropic',
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
[2026-01-14T14:56:54.996Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 4/5
[2026-01-14T14:56:56.630Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Data Center Infrastructure @ anthropic',
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
[2026-01-14T14:56:56.630Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T14:56:58.131Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
   Category: TECH (matched: "software")
[2026-01-14T14:56:58.131Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T14:56:58.253Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T14:56:58.254Z] [BOT] ❌ Industry post failed: Software Developer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T14:56:58.254Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T14:56:58.255Z] [BOT] Total attempts: 15
   Successful: 2
   Failed: 13
   Skipped: 0
[2026-01-14T14:56:58.255Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-14T14:56:58.255Z] [BOT] 1. #🦢・los-angeles: 1 posts
     2. #🩺・healthcare-jobs: 1 posts
[2026-01-14T14:56:58.255Z] [BOT] [STATS] Channel stats saved
[2026-01-14T14:56:58.255Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T14:56:58.268Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar Research Associate
- [BOT ERROR] ❌ Error posting job Clinical Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Assistant Professor - Renewable Energy and Chemical Transformations
- [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: New Grad Software Engineer - Backend 2026
- [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Support Associate
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*