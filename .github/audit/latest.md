# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T05:41:37.235Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T05:41:14.661Z] ========================================
[2026-01-16T05:41:14.663Z] Discord Bot Execution Log
[2026-01-16T05:41:14.663Z] Environment: GitHub Actions
[2026-01-16T05:41:14.663Z] Node Version: v20.19.6
[2026-01-16T05:41:14.663Z] ========================================
[2026-01-16T05:41:14.663Z] Environment Variables Check:
[2026-01-16T05:41:14.663Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T05:41:14.663Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T05:41:14.663Z] 
Multi-Channel Configuration:
[2026-01-16T05:41:14.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.664Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.664Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.664Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T05:41:14.664Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T05:41:14.664Z] 
Data Files Check:
[2026-01-16T05:41:14.664Z] .github/data/new_jobs.json: ✅ Exists (10 items, 26506 bytes)
[2026-01-16T05:41:14.671Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1037279 bytes)
[2026-01-16T05:41:14.671Z] 
========================================
[2026-01-16T05:41:14.672Z] Starting Enhanced Discord Bot...
[2026-01-16T05:41:14.672Z] ========================================
[2026-01-16T05:41:15.197Z] [BOT] ✅ Loaded V2 database: 1929 jobs
[2026-01-16T05:41:15.709Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T05:41:15.709Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T05:41:15.710Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T05:41:15.821Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-16T05:41:15.821Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Utility Analyst 1 at Bernhard
[2026-01-16T05:41:15.824Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T05:41:15.825Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T05:41:15.825Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T05:41:15.826Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T05:41:15.826Z] [BOT] (3 grouped as same job with different locations)
[2026-01-16T05:41:15.826Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Engineer - Backend @ OpenAI: sf, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T05:41:15.829Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T05:41:15.830Z] [BOT] 📍 [ROUTING] "Utility Analyst 1" @ ORG_43fee717
[2026-01-16T05:41:15.830Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T05:41:15.847Z] [BOT ERROR] (node:3282) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T05:41:16.030Z] [BOT] ✅ Created forum post: 🏢 Utility Analyst 1 @ ORG_43fee717 in #📣・marketing-jobs
[2026-01-16T05:41:16.031Z] [BOT] ✅ Industry: Utility Analyst 1 @ ORG_43fee717
[2026-01-16T05:41:17.737Z] [BOT] ✅ Created forum post: 🏢 Utility Analyst 1 @ ORG_43fee717 in #💻・remote-usa
[2026-01-16T05:41:17.737Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T05:41:19.238Z] [BOT] 💾 Marked as posted: Utility Analyst 1 @ ORG_43fee717 (instance #1)
[2026-01-16T05:41:19.238Z] [BOT] 💾 BEFORE ARCHIVING: 1930 jobs in database
[2026-01-16T05:41:19.240Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T05:41:19.245Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T05:41:19.245Z] [BOT] ✅ Archiving complete: 1 archived, 1929 active
[2026-01-16T05:41:19.257Z] [BOT] 💾 Saved posted_jobs.json: 1929 active jobs
[2026-01-16T05:41:19.257Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:41:22.258Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T05:41:22.258Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Agent" @ ORG_d5eef8ad
[2026-01-16T05:41:22.259Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T05:41:22.259Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:41:22.370Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grad - Agent @ Sierra',
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
[2026-01-16T05:41:22.370Z] [BOT] ❌ Industry post failed: Software Engineer – New Grad - Agent
⚠️  Channel full error count: 1/5
[2026-01-16T05:41:23.952Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grad - Agent @ Sierra',
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
[2026-01-16T05:41:23.952Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T05:41:25.455Z] [BOT] 📍 [ROUTING] "Software Engineer - Starshield" @ ORG_afd623b1
[2026-01-16T05:41:25.455Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T05:41:25.455Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:41:25.543Z] [BOT ERROR] ❌ Error posting job Software Engineer - Starshield: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 Software Engineer - Starshield @ SpaceX',
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
[2026-01-16T05:41:25.544Z] [BOT] ❌ Industry post failed: Software Engineer - Starshield
⚠️  Channel full error count: 2/5
[2026-01-16T05:41:27.131Z] [BOT ERROR] ❌ Error posting job Software Engineer - Starshield: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 Software Engineer - Starshield @ SpaceX',
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
[2026-01-16T05:41:27.131Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T05:41:28.631Z] [BOT] 📍 [ROUTING] "University Graduate Software Engineer - Software Engineering" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-16T05:41:28.632Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:41:28.719Z] [BOT ERROR] ❌ Error posting job University Graduate Software Engineer - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🎨 University Graduate Software Engineer - Software Engineering @ Adobe',
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
[2026-01-16T05:41:28.719Z] [BOT] ❌ Industry post failed: University Graduate Software Engineer - Software Engineering
⚠️  Channel full error count: 3/5
[2026-01-16T05:41:30.354Z] [BOT ERROR] ❌ Error posting job University Graduate Software Engineer - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🎨 University Graduate Software Engineer - Software Engineering @ Adobe',
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
[2026-01-16T05:41:30.354Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T05:41:34.856Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-16T05:41:34.857Z] [BOT] 📍 [ROUTING] "Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T05:41:34.857Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:41:35.000Z] [BOT ERROR] ❌ Error posting job Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ Honeywell',
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
[2026-01-16T05:41:35.000Z] [BOT] ❌ Industry post failed: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science
⚠️  Channel full error count: 4/5
[2026-01-16T05:41:36.502Z] [BOT] 📍 [ROUTING] "Information Systems - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-16T05:41:36.502Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:41:36.602Z] [BOT ERROR] ❌ Error posting job Information Systems - IT - Cyber Engineer & Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Information Systems - IT - Cyber Engineer & Data Science @ Honeywell',
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
[2026-01-16T05:41:36.602Z] [BOT] ❌ Industry post failed: Information Systems - IT - Cyber Engineer & Data Science
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
[2026-01-16T05:41:36.602Z] [BOT] 💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T05:41:36.603Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 10
[2026-01-16T05:41:36.603Z] [BOT] Successful: 2
   Failed: 8
   Skipped: 0
[2026-01-16T05:41:36.603Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T05:41:36.603Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-16T05:41:36.603Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-16T05:41:36.603Z] [BOT] [STATS] Channel stats saved
[2026-01-16T05:41:36.604Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T05:41:36.616Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3282) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New Grad - Agent
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Starshield: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Starshield
- [BOT ERROR] ❌ Error posting job Software Engineer - Starshield: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job University Graduate Software Engineer - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: University Graduate Software Engineer - Software Engineering
- [BOT ERROR] ❌ Error posting job University Graduate Software Engineer - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science
- [BOT ERROR] ❌ Error posting job Information Systems - IT - Cyber Engineer & Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Information Systems - IT - Cyber Engineer & Data Science
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*