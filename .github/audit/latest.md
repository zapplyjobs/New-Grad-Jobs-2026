# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T16:14:06.671Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T16:13:30.962Z] ========================================
[2026-01-19T16:13:30.964Z] Discord Bot Execution Log
[2026-01-19T16:13:30.964Z] Environment: GitHub Actions
[2026-01-19T16:13:30.964Z] Node Version: v20.19.6
[2026-01-19T16:13:30.964Z] ========================================
[2026-01-19T16:13:30.964Z] Environment Variables Check:
[2026-01-19T16:13:30.964Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T16:13:30.964Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.964Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T16:13:30.965Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T16:13:30.965Z] 
Multi-Channel Configuration:
[2026-01-19T16:13:30.965Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T16:13:30.965Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T16:13:30.966Z] 
Data Files Check:
[2026-01-19T16:13:30.966Z] .github/data/new_jobs.json: ✅ Exists (10 items, 78435 bytes)
[2026-01-19T16:13:30.977Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1612360 bytes)
[2026-01-19T16:13:30.977Z] 
========================================
[2026-01-19T16:13:30.977Z] Starting Enhanced Discord Bot...
[2026-01-19T16:13:30.977Z] ========================================
[2026-01-19T16:13:31.504Z] [BOT] ✅ Loaded V2 database: 2965 jobs
[2026-01-19T16:13:32.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T16:13:32.153Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T16:13:32.153Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T16:13:32.273Z] [BOT] ✅ Loaded pending queue: 2818 total (2798 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-19T16:13:32.277Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T16:13:32.277Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T16:13:32.277Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T16:13:32.278Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T16:13:32.278Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-19T16:13:32.279Z] [BOT] - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
[2026-01-19T16:13:32.279Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T16:13:32.283Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T16:13:32.284Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
[2026-01-19T16:13:32.284Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T16:13:32.289Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T16:13:32.426Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:32.426Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
⚠️  Channel full error count: 1/5
[2026-01-19T16:13:34.079Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:34.079Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T16:13:38.582Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-19T16:13:38.583Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f5ed86b6
[2026-01-19T16:13:38.583Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:13:38.890Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f5ed86b6 in #💻・tech-jobs
[2026-01-19T16:13:38.890Z] [BOT] ✅ Industry: Software Engineer @ ORG_f5ed86b6
[2026-01-19T16:13:40.634Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:40.634Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T16:13:42.135Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_f5ed86b6 (instance #1)
[2026-01-19T16:13:42.135Z] [BOT] 💾 BEFORE ARCHIVING: 2966 jobs in database
[2026-01-19T16:13:42.138Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T16:13:42.143Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-19T16:13:42.143Z] [BOT] ✅ Archiving complete: 2 archived, 2964 active
[2026-01-19T16:13:42.167Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T16:13:42.168Z] [BOT] 📍 [ROUTING] "Integrations Engineer" @ ORG_8851aaa7
[2026-01-19T16:13:42.168Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:13:42.608Z] [BOT] ✅ Created forum post: 🏢 Integrations Engineer @ ORG_8851aaa7 in #💻・tech-jobs
[2026-01-19T16:13:42.608Z] [BOT] ✅ Industry: Integrations Engineer @ ORG_8851aaa7
[2026-01-19T16:13:44.296Z] [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:44.297Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T16:13:45.798Z] [BOT] 💾 Marked as posted: Integrations Engineer @ ORG_8851aaa7 (instance #1)
[2026-01-19T16:13:45.798Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-19T16:13:45.800Z] [BOT] ✅ No jobs to archive (all 2965 jobs within 7-day window)
[2026-01-19T16:13:45.819Z] [BOT] 💾 Saved posted_jobs.json: 2965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T16:13:45.820Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Platform Test - Software Engineering" @ ORG_36b77757
[2026-01-19T16:13:45.820Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:13:45.977Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:45.977Z] [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
⚠️  Channel full error count: 1/5
[2026-01-19T16:13:47.620Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:47.620Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T16:13:49.122Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
[2026-01-19T16:13:49.122Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:13:49.346Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:49.347Z] [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
⚠️  Channel full error count: 2/5
[2026-01-19T16:13:51.001Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T16:13:51.001Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T16:13:52.502Z] [BOT] 📍 [ROUTING] "Software Application Engineer – Entry Level" @ ORG_cdb83ff1
[2026-01-19T16:13:52.503Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:13:52.733Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Application Engineer – Entry Level @ Oshkosh',
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
[2026-01-19T16:13:52.733Z] [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
⚠️  Channel full error count: 3/5
[2026-01-19T16:13:54.365Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Application Engineer – Entry Level @ Oshkosh',
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
[2026-01-19T16:13:54.365Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T16:13:58.867Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-19T16:13:58.867Z] [BOT] 📍 [ROUTING] "Senior Technical Recruiter (Temporary)" @ discord
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-19T16:13:59.076Z] [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Technical Recruiter (Temporary) @ discord',
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
[2026-01-19T16:13:59.076Z] [BOT] ❌ Industry post failed: Senior Technical Recruiter (Temporary)
⚠️  Channel full error count: 4/5
[2026-01-19T16:14:00.718Z] [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Technical Recruiter (Temporary) @ discord',
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
[2026-01-19T16:14:00.718Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T16:14:05.218Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T16:14:05.218Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T16:14:05.384Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer @ Axle',
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
[2026-01-19T16:14:05.384Z] [BOT] ❌ Industry post failed: Developer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T16:14:05.385Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 15
[2026-01-19T16:14:05.385Z] [BOT] Successful: 2
   Failed: 13
   Skipped: 0
[2026-01-19T16:14:05.385Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-19T16:14:05.385Z] [BOT] Channels used: 1
   Top channels:
     1. #💻・tech-jobs: 2 posts
[2026-01-19T16:14:05.385Z] [BOT] [STATS] Channel stats saved
[2026-01-19T16:14:05.386Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T16:14:05.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Technical Recruiter (Temporary)
- [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*