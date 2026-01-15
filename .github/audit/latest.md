# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T23:40:25.020Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T23:40:03.795Z] ========================================
[2026-01-15T23:40:03.797Z] Discord Bot Execution Log
[2026-01-15T23:40:03.797Z] Environment: GitHub Actions
[2026-01-15T23:40:03.797Z] Node Version: v20.19.6
[2026-01-15T23:40:03.797Z] ========================================
[2026-01-15T23:40:03.797Z] Environment Variables Check:
[2026-01-15T23:40:03.797Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T23:40:03.797Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.797Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T23:40:03.797Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T23:40:03.798Z] 
Multi-Channel Configuration:
[2026-01-15T23:40:03.798Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T23:40:03.798Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T23:40:03.798Z] 
Data Files Check:
[2026-01-15T23:40:03.799Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56346 bytes)
[2026-01-15T23:40:03.806Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1009757 bytes)
[2026-01-15T23:40:03.807Z] 
========================================
[2026-01-15T23:40:03.807Z] Starting Enhanced Discord Bot...
[2026-01-15T23:40:03.807Z] ========================================
[2026-01-15T23:40:04.357Z] [BOT] ✅ Loaded V2 database: 1876 jobs
[2026-01-15T23:40:04.935Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T23:40:04.935Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T23:40:04.935Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T23:40:05.048Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Marketing Analytics - Data Analyst - Adp at Veeva Systems
[2026-01-15T23:40:05.052Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T23:40:05.052Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T23:40:05.052Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T23:40:05.053Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T23:40:05.053Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T23:40:05.053Z] [BOT] - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T23:40:05.055Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T23:40:05.056Z] [BOT] 📍 [ROUTING] "Marketing Analytics - Data Analyst - Adp" @ ORG_d0ca1d93 Systems
[2026-01-15T23:40:05.057Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T23:40:05.074Z] [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T23:40:05.251Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
[2026-01-15T23:40:05.251Z] [BOT] ✅ Industry: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems
[2026-01-15T23:40:07.024Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #🗽・new-york
[2026-01-15T23:40:07.024Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T23:40:08.524Z] [BOT] 💾 Marked as posted: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T23:40:08.524Z] [BOT] 💾 BEFORE ARCHIVING: 1877 jobs in database
[2026-01-15T23:40:08.525Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-01-15T23:40:08.542Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:40:08.543Z] [BOT] 📍 [ROUTING] "Payroll Specialist" @ spotify
[2026-01-15T23:40:08.543Z] [BOT] Category: AI (matched: "artificial intelligence")
[2026-01-15T23:40:08.544Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:40:08.659Z] [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Payroll Specialist @ spotify',
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
[2026-01-15T23:40:08.659Z] [BOT] ❌ Industry post failed: Payroll Specialist
⚠️  Channel full error count: 1/5
[2026-01-15T23:40:10.279Z] [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Payroll Specialist @ spotify',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-15T23:40:10.279Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-15T23:40:11.781Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grads: Fall 2025/Spring 2026" @ ORG_2e5592d2 Technologies
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:40:11.781Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:40:11.905Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grads: Fall 2025/Spring 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies',
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
[2026-01-15T23:40:11.905Z] [BOT] ❌ Industry post failed: Software Engineer – New Grads: Fall 2025/Spring 2026
⚠️  Channel full error count: 2/5
[2026-01-15T23:40:14.875Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grads: Fall 2025/Spring 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies',
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
[2026-01-15T23:40:14.875Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T23:40:16.378Z] [BOT] 📍 [ROUTING] "Senior Growth Engineer" @ clerk
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:40:16.378Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:40:16.468Z] [BOT ERROR] ❌ Error posting job Senior Growth Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Engineer @ clerk',
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
[2026-01-15T23:40:16.469Z] [BOT] ❌ Industry post failed: Senior Growth Engineer
⚠️  Channel full error count: 3/5
[2026-01-15T23:40:20.971Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T23:40:20.972Z] [BOT] 📍 [ROUTING] "Software Engineer - Kernels" @ ORG_cdec6f53
[2026-01-15T23:40:20.972Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:40:21.149Z] [BOT ERROR] ❌ Error posting job Software Engineer - Kernels: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Kernels @ MatX',
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
[2026-01-15T23:40:21.149Z] [BOT] ❌ Industry post failed: Software Engineer - Kernels
⚠️  Channel full error count: 4/5
[2026-01-15T23:40:22.732Z] [BOT ERROR] ❌ Error posting job Software Engineer - Kernels: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Kernels @ MatX',
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
  url: 'https://discord.com/api/v10/channels/CH_f2feb41c/threads'
}
[2026-01-15T23:40:22.732Z] [BOT] ⚠️ Location post failed: 🌄・mountain-view
[2026-01-15T23:40:24.234Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_02281b3b Stanley
[2026-01-15T23:40:24.234Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:40:24.362Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ ORG_02281b3b Stanley',
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
[2026-01-15T23:40:24.363Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T23:40:24.363Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T23:40:24.363Z] [BOT] Total attempts: 10
   Successful: 2
   Failed: 8
   Skipped: 0
[2026-01-15T23:40:24.364Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T23:40:24.364Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-15T23:40:24.364Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-15T23:40:24.364Z] [BOT] [STATS] Channel stats saved
[2026-01-15T23:40:24.364Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T23:40:24.378Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Payroll Specialist
- [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grads: Fall 2025/Spring 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New Grads: Fall 2025/Spring 2026
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grads: Fall 2025/Spring 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Growth Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Growth Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer - Kernels: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Kernels
- [BOT ERROR] ❌ Error posting job Software Engineer - Kernels: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*