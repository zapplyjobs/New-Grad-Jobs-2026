# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T16:55:02.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T16:54:26.967Z] ========================================
[2026-01-18T16:54:26.969Z] Discord Bot Execution Log
[2026-01-18T16:54:26.969Z] Environment: GitHub Actions
[2026-01-18T16:54:26.969Z] Node Version: v20.19.6
[2026-01-18T16:54:26.969Z] ========================================
[2026-01-18T16:54:26.969Z] Environment Variables Check:
[2026-01-18T16:54:26.969Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T16:54:26.970Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T16:54:26.970Z] 
Multi-Channel Configuration:
[2026-01-18T16:54:26.970Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.970Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.971Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.971Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.971Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T16:54:26.971Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T16:54:26.971Z] 
Data Files Check:
[2026-01-18T16:54:26.972Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123703 bytes)
[2026-01-18T16:54:26.981Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1460847 bytes)
[2026-01-18T16:54:26.981Z] 
========================================
[2026-01-18T16:54:26.982Z] Starting Enhanced Discord Bot...
[2026-01-18T16:54:26.982Z] ========================================
[2026-01-18T16:54:27.516Z] [BOT] ✅ Loaded V2 database: 2696 jobs
[2026-01-18T16:54:28.522Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T16:54:28.523Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T16:54:28.523Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T16:54:28.638Z] [BOT] ✅ Loaded pending queue: 2842 total (2822 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Recruiter, Sales & GTM at airtable
[2026-01-18T16:54:28.641Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T16:54:28.642Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T16:54:28.642Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T16:54:28.643Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T16:54:28.643Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T16:54:28.647Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T16:54:28.647Z] [BOT] 📍 [ROUTING] "Recruiter, Sales & GTM" @ airtable
[2026-01-18T16:54:28.648Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T16:54:28.652Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T16:54:28.815Z] [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, Sales & GTM @ airtable',
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
[2026-01-18T16:54:28.815Z] [BOT] ❌ Industry post failed: Recruiter, Sales & GTM
⚠️  Channel full error count: 1/5
[2026-01-18T16:54:30.539Z] [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, Sales & GTM @ airtable',
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
[2026-01-18T16:54:30.539Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T16:54:35.040Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T16:54:35.041Z] [BOT] 📍 [ROUTING] "Business Controller Intern" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-18T16:54:35.289Z] [BOT] ✅ Created forum post: 🏢 Business Controller Intern @ coinbase in #🤖・ai-jobs
[2026-01-18T16:54:35.290Z] [BOT] ✅ Industry: Business Controller Intern @ coinbase
[2026-01-18T16:54:37.075Z] [BOT] ✅ Created forum post: 🏢 Business Controller Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T16:54:38.576Z] [BOT] 💾 Marked as posted: Business Controller Intern @ coinbase (instance #1)
[2026-01-18T16:54:38.577Z] [BOT] 💾 BEFORE ARCHIVING: 2697 jobs in database
[2026-01-18T16:54:38.578Z] [BOT] ✅ No jobs to archive (all 2697 jobs within 7-day window)
[2026-01-18T16:54:38.597Z] [BOT] 💾 Saved posted_jobs.json: 2697 active jobs
[2026-01-18T16:54:38.597Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T16:54:38.598Z] [BOT] 📍 [ROUTING] "Senior Data Engineer, Analytics" @ discord
[2026-01-18T16:54:38.598Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T16:54:38.598Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T16:54:38.727Z] [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Data Engineer, Analytics @ discord',
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
[2026-01-18T16:54:38.727Z] [BOT] ❌ Industry post failed: Senior Data Engineer, Analytics
⚠️  Channel full error count: 1/5
[2026-01-18T16:54:40.340Z] [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Data Engineer, Analytics @ discord',
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
[2026-01-18T16:54:40.340Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T16:54:41.843Z] [BOT] 📍 [ROUTING] "Security Risk & Compliance, Cloud & Data Center" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T16:54:41.843Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T16:54:41.990Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T16:54:41.990Z] [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
⚠️  Channel full error count: 2/5
[2026-01-18T16:54:43.596Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T16:54:43.597Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T16:54:48.098Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T16:54:48.099Z] [BOT] 📍 [ROUTING] "Account Executive - Media & Entertainment" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T16:54:48.099Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T16:54:48.316Z] [BOT ERROR] ❌ Error posting job Account Executive - Media & Entertainment: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive - Media & Entertainment @ discord',
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
[2026-01-18T16:54:48.317Z] [BOT] ❌ Industry post failed: Account Executive - Media & Entertainment
⚠️  Channel full error count: 3/5
[2026-01-18T16:54:49.926Z] [BOT ERROR] ❌ Error posting job Account Executive - Media & Entertainment: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive - Media & Entertainment @ discord',
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
[2026-01-18T16:54:49.926Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T16:54:54.428Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T16:54:54.429Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Federal / State)" @ verkada
[2026-01-18T16:54:54.429Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T16:54:54.637Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
[2026-01-18T16:54:54.637Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
[2026-01-18T16:54:54.637Z] [BOT] ⚠️  Channel full error count: 4/5
[2026-01-18T16:54:56.301Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
[2026-01-18T16:54:56.301Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T16:55:00.802Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-18T16:55:00.803Z] [BOT] 📍 [ROUTING] "Field Application Engineer – New College Graduate - Ncg" @ ORG_54360ad7
[2026-01-18T16:55:00.804Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T16:55:01.011Z] [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Application Engineer – New College Graduate - Ncg @ Sandisk',
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
[2026-01-18T16:55:01.011Z] [BOT] ❌ Industry post failed: Field Application Engineer – New College Graduate - Ncg
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-18T16:55:01.011Z] [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T16:55:01.012Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T16:55:01.012Z] [BOT] Total attempts: 13
   Successful: 2
   Failed: 11
   Skipped: 0
[2026-01-18T16:55:01.012Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T16:55:01.012Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-18T16:55:01.013Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-18T16:55:01.013Z] [BOT] [STATS] Channel stats saved
[2026-01-18T16:55:01.013Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T16:55:01.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Recruiter, Sales & GTM
- [BOT ERROR] ❌ Error posting job Recruiter, Sales & GTM: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Data Engineer, Analytics
- [BOT ERROR] ❌ Error posting job Senior Data Engineer, Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Account Executive - Media & Entertainment: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Account Executive - Media & Entertainment
- [BOT ERROR] ❌ Error posting job Account Executive - Media & Entertainment: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Field Application Engineer – New College Graduate - Ncg: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Field Application Engineer – New College Graduate - Ncg
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*