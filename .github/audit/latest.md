# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T12:09:46.055Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T12:09:13.900Z] ========================================
[2026-01-19T12:09:13.901Z] Discord Bot Execution Log
[2026-01-19T12:09:13.901Z] Environment: GitHub Actions
[2026-01-19T12:09:13.902Z] Node Version: v20.19.6
[2026-01-19T12:09:13.902Z] ========================================
[2026-01-19T12:09:13.902Z] Environment Variables Check:
[2026-01-19T12:09:13.902Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T12:09:13.902Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T12:09:13.902Z] 
Multi-Channel Configuration:
[2026-01-19T12:09:13.902Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.902Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.903Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.903Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T12:09:13.903Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T12:09:13.903Z] 
Data Files Check:
[2026-01-19T12:09:13.904Z] .github/data/new_jobs.json: ✅ Exists (10 items, 87078 bytes)
[2026-01-19T12:09:13.915Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1613815 bytes)
[2026-01-19T12:09:13.915Z] 
========================================
[2026-01-19T12:09:13.915Z] Starting Enhanced Discord Bot...
[2026-01-19T12:09:13.915Z] ========================================
[2026-01-19T12:09:14.367Z] [BOT] ✅ Loaded V2 database: 2968 jobs
[2026-01-19T12:09:15.005Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T12:09:15.006Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T12:09:15.006Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T12:09:15.161Z] [BOT] ✅ Loaded pending queue: 2827 total (2807 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-19T12:09:15.164Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T12:09:15.165Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T12:09:15.165Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T12:09:15.166Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-19T12:09:15.166Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: waukegan, cambridge
   - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T12:09:15.170Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T12:09:15.170Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
[2026-01-19T12:09:15.170Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T12:09:15.175Z] [BOT ERROR] (node:2943) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T12:09:15.309Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T12:09:15.310Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
⚠️  Channel full error count: 1/5
[2026-01-19T12:09:16.958Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T12:09:16.958Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T12:09:21.460Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-19T12:09:21.461Z] [BOT] 📍 [ROUTING] "Software Engineer - Platform Test - Systems Test Engineering" @ ORG_36b77757
[2026-01-19T12:09:21.461Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:21.721Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757 in #💻・tech-jobs
[2026-01-19T12:09:21.722Z] [BOT] ✅ Industry: Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757
[2026-01-19T12:09:23.495Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757 in #🦢・los-angeles
[2026-01-19T12:09:23.495Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T12:09:24.995Z] [BOT] 💾 Marked as posted: Software Engineer - Platform Test - Systems Test Engineering @ ORG_36b77757 (instance #1)
[2026-01-19T12:09:24.995Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-19T12:09:24.998Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-19T12:09:25.023Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T12:09:25.024Z] [BOT] 📍 [ROUTING] "Consulting Associate - Environmental Engineering - Geology / Scientist" @ ORG_d41a2092
[2026-01-19T12:09:25.025Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:25.304Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 in #💻・tech-jobs
  ✅ Industry: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092
[2026-01-19T12:09:26.939Z] [BOT ERROR] ❌ Error posting job Consulting Associate - Environmental Engineering - Geology / Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Consulting Associate - Environmental Engineering - Geology / Scientist @ ERM',
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
[2026-01-19T12:09:26.939Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T12:09:28.439Z] [BOT] 💾 Marked as posted: Consulting Associate - Environmental Engineering - Geology / Scientist @ ORG_d41a2092 (instance #1)
[2026-01-19T12:09:28.439Z] [BOT] 💾 BEFORE ARCHIVING: 2970 jobs in database
[2026-01-19T12:09:28.441Z] [BOT] ✅ No jobs to archive (all 2970 jobs within 7-day window)
[2026-01-19T12:09:28.460Z] [BOT] 💾 Saved posted_jobs.json: 2970 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T12:09:28.461Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f5ed86b6
[2026-01-19T12:09:28.461Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:28.657Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ BillionToOne',
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
[2026-01-19T12:09:28.657Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-19T12:09:30.288Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ BillionToOne',
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
[2026-01-19T12:09:30.288Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T12:09:31.790Z] [BOT] 📍 [ROUTING] "Integrations Engineer" @ ORG_8851aaa7
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T12:09:31.790Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:31.921Z] [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Integrations Engineer @ Merge',
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
[2026-01-19T12:09:31.921Z] [BOT] ❌ Industry post failed: Integrations Engineer
⚠️  Channel full error count: 2/5
[2026-01-19T12:09:33.633Z] [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Integrations Engineer @ Merge',
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
[2026-01-19T12:09:33.634Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T12:09:35.134Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Platform Test - Software Engineering" @ ORG_36b77757
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:35.281Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '📱 Software Engineer - Core Platform Test - Software Engineering @ Qualcomm',
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
[2026-01-19T12:09:35.281Z] [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
⚠️  Channel full error count: 3/5
[2026-01-19T12:09:36.950Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '📱 Software Engineer - Core Platform Test - Software Engineering @ Qualcomm',
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
[2026-01-19T12:09:36.951Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T12:09:38.451Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T12:09:38.580Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2 - Full Stack and Application Development @ Cisco',
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
[2026-01-19T12:09:38.580Z] [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
⚠️  Channel full error count: 4/5
[2026-01-19T12:09:40.204Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2 - Full Stack and Application Development @ Cisco',
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
[2026-01-19T12:09:40.204Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T12:09:44.704Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T12:09:44.704Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_d87c9ca3 Group
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T12:09:44.935Z] [BOT ERROR] ❌ Error posting job Business Intelligence Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Intelligence Analyst @ ORG_d87c9ca3 Group',
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
[2026-01-19T12:09:44.936Z] [BOT] ❌ Industry post failed: Business Intelligence Analyst
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T12:09:44.936Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T12:09:44.936Z] [BOT] Total attempts: 15
   Successful: 3
   Failed: 12
   Skipped: 0
[2026-01-19T12:09:44.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T12:09:44.937Z] [BOT] Last cleanup: Never
[2026-01-19T12:09:44.937Z] [BOT] Total posts: 3
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 2 posts
[2026-01-19T12:09:44.937Z] [BOT] 2. #🦢・los-angeles: 1 posts
[2026-01-19T12:09:44.937Z] [BOT] [STATS] Channel stats saved
[2026-01-19T12:09:44.937Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T12:09:44.947Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2943) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Consulting Associate - Environmental Engineering - Geology / Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Integrations Engineer
- [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Intelligence Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Intelligence Analyst
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*