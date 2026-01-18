# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T05:56:20.273Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T05:55:44.137Z] ========================================
[2026-01-18T05:55:44.139Z] Discord Bot Execution Log
[2026-01-18T05:55:44.139Z] Environment: GitHub Actions
[2026-01-18T05:55:44.139Z] Node Version: v20.19.6
[2026-01-18T05:55:44.139Z] ========================================
[2026-01-18T05:55:44.139Z] Environment Variables Check:
[2026-01-18T05:55:44.139Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T05:55:44.139Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T05:55:44.140Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T05:55:44.140Z] 
Multi-Channel Configuration:
[2026-01-18T05:55:44.140Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T05:55:44.140Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T05:55:44.141Z] 
Data Files Check:
[2026-01-18T05:55:44.142Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98176 bytes)
[2026-01-18T05:55:44.151Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1401058 bytes)
[2026-01-18T05:55:44.151Z] 
========================================
[2026-01-18T05:55:44.151Z] Starting Enhanced Discord Bot...
[2026-01-18T05:55:44.151Z] ========================================
[2026-01-18T05:55:44.675Z] [BOT] ✅ Loaded V2 database: 2590 jobs
[2026-01-18T05:55:45.233Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T05:55:45.234Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T05:55:45.234Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T05:55:45.371Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist, Analytics - Growth/SEO at discord
[2026-01-18T05:55:45.372Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T05:55:45.373Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T05:55:45.373Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T05:55:45.374Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T05:55:45.374Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T05:55:45.378Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-18T05:55:45.378Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - Growth/SEO" @ discord
[2026-01-18T05:55:45.379Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T05:55:45.383Z] [BOT ERROR] (node:3139) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T05:55:45.581Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord in #📈・JID_fb739488
[2026-01-18T05:55:45.581Z] [BOT] ✅ Industry: Senior Data Scientist, Analytics - Growth/SEO @ discord
[2026-01-18T05:55:47.292Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:55:48.794Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics - Growth/SEO @ discord (instance #1)
[2026-01-18T05:55:48.794Z] [BOT] 💾 BEFORE ARCHIVING: 2591 jobs in database
[2026-01-18T05:55:48.796Z] [BOT] ✅ No jobs to archive (all 2591 jobs within 7-day window)
[2026-01-18T05:55:48.817Z] [BOT] 💾 Saved posted_jobs.json: 2591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:55:48.817Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Payments" @ discord
[2026-01-18T05:55:48.818Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T05:55:48.923Z] [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Product Manager, Payments @ discord',
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
[2026-01-18T05:55:48.923Z] [BOT] ❌ Industry post failed: Staff Product Manager, Payments
⚠️  Channel full error count: 1/5
[2026-01-18T05:55:50.600Z] [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Product Manager, Payments @ discord',
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
[2026-01-18T05:55:50.601Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:55:52.101Z] [BOT] 📍 [ROUTING] "Data Scientist 2" @ ORG_62ac23a8 Group
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T05:55:52.101Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T05:55:52.364Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 @ ORG_62ac23a8 Group in #📈・JID_fb739488
  ✅ Industry: Data Scientist 2 @ ORG_62ac23a8 Group
[2026-01-18T05:55:54.007Z] [BOT ERROR] ❌ Error posting job Data Scientist 2: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist 2 @ ORG_62ac23a8 Group',
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
[2026-01-18T05:55:54.007Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T05:55:55.508Z] [BOT] 💾 Marked as posted: Data Scientist 2 @ ORG_62ac23a8 Group (instance #1)
[2026-01-18T05:55:55.509Z] [BOT] 💾 BEFORE ARCHIVING: 2592 jobs in database
[2026-01-18T05:55:55.510Z] [BOT] ✅ No jobs to archive (all 2592 jobs within 7-day window)
[2026-01-18T05:55:55.528Z] [BOT] 💾 Saved posted_jobs.json: 2592 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:55:58.530Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T05:55:58.531Z] [BOT] 📍 [ROUTING] "Policy Manager, Chemical Weapons and High Yield Explosives" @ anthropic
[2026-01-18T05:55:58.531Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:55:58.730Z] [BOT] ✅ Created forum post: 🏢 Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic in #💲・sales-jobs
[2026-01-18T05:55:58.730Z] [BOT] ✅ Industry: Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic
[2026-01-18T05:56:00.417Z] [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic',
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
[2026-01-18T05:56:00.417Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:56:01.918Z] [BOT] 💾 Marked as posted: Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic (instance #1)
[2026-01-18T05:56:01.918Z] [BOT] 💾 BEFORE ARCHIVING: 2593 jobs in database
[2026-01-18T05:56:01.920Z] [BOT] ✅ No jobs to archive (all 2593 jobs within 7-day window)
[2026-01-18T05:56:01.937Z] [BOT] 💾 Saved posted_jobs.json: 2593 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:56:01.938Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
[2026-01-18T05:56:01.938Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:56:02.048Z] [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Account Executive, Industries @ anthropic',
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
[2026-01-18T05:56:02.049Z] [BOT] ❌ Industry post failed: Strategic Account Executive, Industries
⚠️  Channel full error count: 1/5
[2026-01-18T05:56:03.688Z] [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Account Executive, Industries @ anthropic',
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
[2026-01-18T05:56:03.688Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:56:05.190Z] [BOT] 📍 [ROUTING] "SMB Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T05:56:05.190Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:56:05.296Z] [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 SMB Account Executive, Industries @ anthropic',
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
[2026-01-18T05:56:05.296Z] [BOT] ❌ Industry post failed: SMB Account Executive, Industries
⚠️  Channel full error count: 2/5
[2026-01-18T05:56:06.920Z] [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 SMB Account Executive, Industries @ anthropic',
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
[2026-01-18T05:56:06.920Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:56:11.422Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T05:56:11.423Z] [BOT] 📍 [ROUTING] "Data Science Analyst 2 - Full Time - United States" @ ORG_aa669b28
[2026-01-18T05:56:11.423Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T05:56:11.548Z] [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Analyst 2 - Full Time - United States @ Cisco',
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
[2026-01-18T05:56:11.549Z] [BOT] ❌ Industry post failed: Data Science Analyst 2 - Full Time - United States
⚠️  Channel full error count: 3/5
[2026-01-18T05:56:13.168Z] [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Analyst 2 - Full Time - United States @ Cisco',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-18T05:56:13.169Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-18T05:56:14.669Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T05:56:14.669Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T05:56:14.801Z] [BOT ERROR] ❌ Error posting job AI Data Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Data Specialist @ RWS',
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
[2026-01-18T05:56:14.802Z] [BOT] ❌ Industry post failed: AI Data Specialist
⚠️  Channel full error count: 4/5
[2026-01-18T05:56:19.303Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T05:56:19.303Z] [BOT] 📍 [ROUTING] "Software Developer 1 - Python API" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:56:19.486Z] [BOT ERROR] ❌ Error posting job Software Developer 1 - Python API: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer 1 - Python API @ Esri',
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
[2026-01-18T05:56:19.486Z] [BOT] ❌ Industry post failed: Software Developer 1 - Python API
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T05:56:19.487Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 16
   Successful: 4
   Failed: 12
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #📈・JID_fb739488: 2 posts
     2. #🌉・san-francisco: 1 posts
     3. #💲・sales-jobs: 1 posts
[2026-01-18T05:56:19.487Z] [BOT] [STATS] Channel stats saved
[2026-01-18T05:56:19.488Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T05:56:19.502Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3139) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Product Manager, Payments
- [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Scientist 2: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Strategic Account Executive, Industries
- [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SMB Account Executive, Industries
- [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Science Analyst 2 - Full Time - United States
- [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job AI Data Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Data Specialist
- [BOT ERROR] ❌ Error posting job Software Developer 1 - Python API: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer 1 - Python API
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*