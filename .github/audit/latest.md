# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T07:24:55.111Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T07:24:22.308Z] ========================================
[2026-01-04T07:24:22.310Z] Discord Bot Execution Log
[2026-01-04T07:24:22.310Z] Environment: GitHub Actions
[2026-01-04T07:24:22.310Z] Node Version: v20.19.6
[2026-01-04T07:24:22.310Z] ========================================
[2026-01-04T07:24:22.310Z] Environment Variables Check:
[2026-01-04T07:24:22.310Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T07:24:22.310Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.310Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T07:24:22.310Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T07:24:22.311Z] 
Multi-Channel Configuration:
[2026-01-04T07:24:22.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T07:24:22.311Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T07:24:22.311Z] 
Data Files Check:
[2026-01-04T07:24:22.313Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144098 bytes)
[2026-01-04T07:24:22.316Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 468169 bytes)
[2026-01-04T07:24:22.316Z] 
========================================
[2026-01-04T07:24:22.316Z] Starting Enhanced Discord Bot...
[2026-01-04T07:24:22.316Z] ========================================
[2026-01-04T07:24:22.837Z] [BOT] ✅ Loaded V2 database: 929 jobs
[2026-01-04T07:24:23.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T07:24:23.308Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T07:24:23.308Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T07:24:23.309Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T07:24:23.378Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T07:24:23.468Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T07:24:23.471Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T07:24:23.471Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T07:24:23.471Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T07:24:23.472Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T07:24:23.472Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T07:24:23.477Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-04T07:24:23.477Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
[2026-01-04T07:24:23.477Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T07:24:23.495Z] [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T07:24:23.608Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
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
[2026-01-04T07:24:23.608Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-04T07:24:25.249Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
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
[2026-01-04T07:24:25.249Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:26.750Z] [BOT] 📍 [ROUTING] "Research Engineer, Discovery" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:24:26.857Z] [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Research Engineer, Discovery @ anthropic',
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
[2026-01-04T07:24:26.857Z] [BOT] ❌ Industry post failed: Research Engineer, Discovery
⚠️  Channel full error count: 2/5
[2026-01-04T07:24:30.198Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Discovery @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:24:31.698Z] [BOT] 💾 Marked as posted: Research Engineer, Discovery @ anthropic (instance #1)
[2026-01-04T07:24:31.699Z] [BOT] 💾 BEFORE ARCHIVING: 930 jobs in database
[2026-01-04T07:24:31.700Z] [BOT] ✅ No jobs to archive (all 930 jobs within 7-day window)
[2026-01-04T07:24:31.713Z] [BOT] 💾 Saved posted_jobs.json: 930 active jobs
[2026-01-04T07:24:31.713Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:24:31.715Z] [BOT] 📍 [ROUTING] "IT Systems Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T07:24:31.715Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:24:31.964Z] [BOT] ✅ Created forum post: 🏢 IT Systems Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: IT Systems Engineer @ anthropic
[2026-01-04T07:24:33.578Z] [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 IT Systems Engineer @ anthropic',
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
[2026-01-04T07:24:33.578Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:35.078Z] [BOT] 💾 Marked as posted: IT Systems Engineer @ anthropic (instance #1)
[2026-01-04T07:24:35.079Z] [BOT] 💾 BEFORE ARCHIVING: 931 jobs in database
[2026-01-04T07:24:35.079Z] [BOT] ✅ No jobs to archive (all 931 jobs within 7-day window)
[2026-01-04T07:24:35.088Z] [BOT] 💾 Saved posted_jobs.json: 931 active jobs
[2026-01-04T07:24:35.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:24:35.089Z] [BOT] 📍 [ROUTING] "Application Security Engineering Manager" @ anthropic
[2026-01-04T07:24:35.089Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:24:35.206Z] [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Application Security Engineering Manager @ anthropic',
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
[2026-01-04T07:24:35.207Z] [BOT] ❌ Industry post failed: Application Security Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-04T07:24:36.816Z] [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Application Security Engineering Manager @ anthropic',
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
[2026-01-04T07:24:36.816Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:38.317Z] [BOT] 📍 [ROUTING] "Engineering Manager, Cloud Security" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:24:38.470Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Cloud Security: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, Cloud Security @ anthropic',
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
[2026-01-04T07:24:38.470Z] [BOT] ❌ Industry post failed: Engineering Manager, Cloud Security
⚠️  Channel full error count: 2/5
[2026-01-04T07:24:40.124Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Cloud Security: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, Cloud Security @ anthropic',
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
[2026-01-04T07:24:40.124Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:44.626Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T07:24:44.626Z] [BOT] 📍 [ROUTING] "Corporate Legal Specialist" @ anthropic
[2026-01-04T07:24:44.626Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T07:24:44.775Z] [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Corporate Legal Specialist @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-04T07:24:44.775Z] [BOT] ❌ Industry post failed: Corporate Legal Specialist
⚠️  Channel full error count: 3/5
[2026-01-04T07:24:46.429Z] [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Corporate Legal Specialist @ anthropic',
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
[2026-01-04T07:24:46.429Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:50.932Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T07:24:50.932Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Specialized" @ anthropic
[2026-01-04T07:24:50.932Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T07:24:51.083Z] [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Technical Recruiter, Specialized @ anthropic',
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
[2026-01-04T07:24:51.084Z] [BOT] ❌ Industry post failed: Technical Recruiter, Specialized
⚠️  Channel full error count: 4/5
[2026-01-04T07:24:52.727Z] [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Technical Recruiter, Specialized @ anthropic',
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
[2026-01-04T07:24:52.728Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:24:54.229Z] [BOT] 📍 [ROUTING] "Brand Designer" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T07:24:54.339Z] [BOT ERROR] ❌ Error posting job Brand Designer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Brand Designer @ nominal',
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
[2026-01-04T07:24:54.339Z] [BOT] ❌ Industry post failed: Brand Designer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T07:24:54.340Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 15
   Successful: 2
   Failed: 13
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T07:24:54.340Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🌉・san-francisco: 1 posts
     2. #💻・tech-jobs: 1 posts
[2026-01-04T07:24:54.340Z] [BOT] [STATS] Channel stats saved
[2026-01-04T07:24:54.340Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T07:24:54.350Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer, Discovery
- [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Application Security Engineering Manager
- [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, Cloud Security: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Cloud Security
- [BOT ERROR] ❌ Error posting job Engineering Manager, Cloud Security: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Corporate Legal Specialist
- [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Recruiter, Specialized
- [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Brand Designer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Brand Designer
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*