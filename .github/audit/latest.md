# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T19:04:13.312Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T19:03:51.719Z] ========================================
[2025-12-19T19:03:51.721Z] Discord Bot Execution Log
[2025-12-19T19:03:51.721Z] Environment: GitHub Actions
[2025-12-19T19:03:51.721Z] Node Version: v20.19.6
[2025-12-19T19:03:51.721Z] ========================================
[2025-12-19T19:03:51.721Z] Environment Variables Check:
[2025-12-19T19:03:51.721Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T19:03:51.721Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.721Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T19:03:51.721Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T19:03:51.721Z] 
Multi-Channel Configuration:
[2025-12-19T19:03:51.722Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T19:03:51.722Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T19:03:51.722Z] 
Data Files Check:
[2025-12-19T19:03:51.723Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45137 bytes)
[2025-12-19T19:03:51.726Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 383223 bytes)
[2025-12-19T19:03:51.726Z] 
========================================
[2025-12-19T19:03:51.726Z] Starting Enhanced Discord Bot...
[2025-12-19T19:03:51.726Z] ========================================
[2025-12-19T19:03:52.246Z] [BOT] ✅ Loaded V2 database: 635 jobs
[2025-12-19T19:03:52.725Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T19:03:52.726Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T19:03:52.726Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T19:03:52.726Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T19:03:52.770Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T19:03:52.817Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T19:03:52.820Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T19:03:52.820Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T19:03:52.820Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T19:03:52.821Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T19:03:52.821Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T19:03:52.824Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-19T19:03:52.825Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start" @ ORG_1bb6fcfb
[2025-12-19T19:03:52.825Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:03:52.841Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T19:03:53.424Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-19T19:03:53.424Z] [BOT] ✅ Industry: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb
[2025-12-19T19:03:55.061Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ TikTok',
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
[2025-12-19T19:03:55.061Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:03:56.561Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-19T19:03:56.562Z] [BOT] 💾 BEFORE ARCHIVING: 636 jobs in database
[2025-12-19T19:03:56.562Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-19T19:03:56.568Z] [BOT] 📦 Archived 106 jobs to 2025-12.json (106 total in archive)
[2025-12-19T19:03:56.568Z] [BOT] ✅ Archiving complete: 106 archived, 530 active
[2025-12-19T19:03:56.573Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:03:56.574Z] [BOT] 📍 [ROUTING] "Product Applications Engineer" @ ORG_8f6fe0d8 Devices
[2025-12-19T19:03:56.574Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:03:56.705Z] [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices',
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
[2025-12-19T19:03:56.705Z] [BOT] ❌ Industry post failed: Product Applications Engineer
⚠️  Channel full error count: 1/5
[2025-12-19T19:03:58.303Z] [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices',
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
[2025-12-19T19:03:58.303Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:03:59.804Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Applications" @ ORG_08c9a13c
[2025-12-19T19:03:59.805Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:03:59.981Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - AI Applications @ ByteDance',
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
[2025-12-19T19:03:59.981Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Applications
⚠️  Channel full error count: 2/5
[2025-12-19T19:04:01.575Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - AI Applications @ ByteDance',
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
[2025-12-19T19:04:01.575Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:04:03.078Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
[2025-12-19T19:04:03.078Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:04:03.167Z] [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank',
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
[2025-12-19T19:04:03.168Z] [BOT] ❌ Industry post failed: Deutsche Bank Graduate Programme - Technology - Data and Innovation
⚠️  Channel full error count: 3/5
[2025-12-19T19:04:04.802Z] [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank',
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
[2025-12-19T19:04:04.803Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2025-12-19T19:04:09.303Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-19T19:04:09.305Z] [BOT] 📍 [ROUTING] "GE Vernova Advanced Research 2026 Edison Rotational Program" @ ORG_e8760198 Vernova
[2025-12-19T19:04:09.305Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:04:09.485Z] [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova',
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
[2025-12-19T19:04:09.485Z] [BOT] ❌ Industry post failed: GE Vernova Advanced Research 2026 Edison Rotational Program
⚠️  Channel full error count: 4/5
[2025-12-19T19:04:11.093Z] [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova',
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
[2025-12-19T19:04:11.093Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2025-12-19T19:04:12.595Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:04:12.595Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:04:12.701Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin',
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
[2025-12-19T19:04:12.701Z] [BOT] ❌ Industry post failed: Postdoctoral Fellow
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
[2025-12-19T19:04:12.701Z] [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2025-12-19T19:04:12.702Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T19:04:12.702Z] [BOT] Total attempts: 11
   Successful: 1
   Failed: 10
   Skipped: 0
[2025-12-19T19:04:12.702Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
[2025-12-19T19:04:12.702Z] [BOT] Channels used: 1
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2025-12-19T19:04:12.703Z] [BOT] [STATS] Channel stats saved
[2025-12-19T19:04:12.703Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_41b776ee.json
[2025-12-19T19:04:12.713Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Applications Engineer
- [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Applications
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Deutsche Bank Graduate Programme - Technology - Data and Innovation
- [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: GE Vernova Advanced Research 2026 Edison Rotational Program
- [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Fellow
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*