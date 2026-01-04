# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T06:46:18.271Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T06:45:35.576Z] ========================================
[2026-01-04T06:45:35.578Z] Discord Bot Execution Log
[2026-01-04T06:45:35.578Z] Environment: GitHub Actions
[2026-01-04T06:45:35.578Z] Node Version: v20.19.6
[2026-01-04T06:45:35.578Z] ========================================
[2026-01-04T06:45:35.578Z] Environment Variables Check:
[2026-01-04T06:45:35.578Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T06:45:35.578Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.578Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T06:45:35.578Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T06:45:35.579Z] 
Multi-Channel Configuration:
[2026-01-04T06:45:35.579Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T06:45:35.579Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T06:45:35.579Z] 
Data Files Check:
[2026-01-04T06:45:35.581Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139385 bytes)
[2026-01-04T06:45:35.584Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 463619 bytes)
[2026-01-04T06:45:35.584Z] 
========================================
[2026-01-04T06:45:35.584Z] Starting Enhanced Discord Bot...
[2026-01-04T06:45:35.584Z] ========================================
[2026-01-04T06:45:36.088Z] [BOT] ✅ Loaded V2 database: 920 jobs
[2026-01-04T06:45:36.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T06:45:36.568Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T06:45:36.568Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T06:45:36.569Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T06:45:36.636Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T06:45:36.724Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T06:45:36.727Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T06:45:36.727Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T06:45:36.728Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T06:45:36.728Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T06:45:36.728Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T06:45:36.733Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T06:45:36.733Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI" @ anthropic
[2026-01-04T06:45:36.734Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T06:45:36.751Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T06:45:36.899Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T06:45:36.899Z] [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T06:45:38.573Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Applied AI @ anthropic in #🌉・san-francisco
[2026-01-04T06:45:38.574Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T06:45:40.075Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Applied AI @ anthropic (instance #1)
[2026-01-04T06:45:40.075Z] [BOT] 💾 BEFORE ARCHIVING: 921 jobs in database
[2026-01-04T06:45:40.076Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-04T06:45:40.086Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
[2026-01-04T06:45:40.086Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:45:40.086Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
[2026-01-04T06:45:40.087Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T06:45:40.352Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Integration Engineer @ anthropic in #🤖・ai-jobs
[2026-01-04T06:45:40.352Z] [BOT] ✅ Industry: Finance Systems Integration Engineer @ anthropic
[2026-01-04T06:45:42.028Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Integration Engineer @ anthropic in #🌉・san-francisco
[2026-01-04T06:45:42.028Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T06:45:43.529Z] [BOT] 💾 Marked as posted: Finance Systems Integration Engineer @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 922 jobs in database
[2026-01-04T06:45:43.530Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-04T06:45:43.537Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:45:43.537Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
[2026-01-04T06:45:43.537Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T06:45:43.693Z] [BOT] ✅ Created forum post: 🏢 Internship Program Coordinator @ gohighlevel in #🤖・ai-jobs
[2026-01-04T06:45:43.693Z] [BOT] ✅ Industry: Internship Program Coordinator @ gohighlevel
[2026-01-04T06:45:45.195Z] [BOT] 💾 Marked as posted: Internship Program Coordinator @ gohighlevel (instance #1)
[2026-01-04T06:45:45.195Z] [BOT] 💾 BEFORE ARCHIVING: 923 jobs in database
[2026-01-04T06:45:45.196Z] [BOT] ✅ No jobs to archive (all 923 jobs within 7-day window)
[2026-01-04T06:45:45.203Z] [BOT] 💾 Saved posted_jobs.json: 923 active jobs
[2026-01-04T06:45:45.204Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:45:45.204Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager II" @ spotify
[2026-01-04T06:45:45.204Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T06:45:45.419Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager II @ spotify in #🤖・ai-jobs
[2026-01-04T06:45:45.419Z] [BOT] ✅ Industry: Machine Learning Engineering Manager II @ spotify
[2026-01-04T06:45:47.111Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager II @ spotify in #🗽・new-york
[2026-01-04T06:45:47.111Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T06:45:48.613Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager II @ spotify (instance #1)
[2026-01-04T06:45:48.613Z] [BOT] 💾 BEFORE ARCHIVING: 924 jobs in database
[2026-01-04T06:45:48.614Z] [BOT] ✅ No jobs to archive (all 924 jobs within 7-day window)
[2026-01-04T06:45:48.622Z] [BOT] 💾 Saved posted_jobs.json: 924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:45:48.622Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Research Scientist - PhD (New York City)" @ spotify
[2026-01-04T06:45:48.622Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T06:45:48.816Z] [BOT] ✅ Created forum post: 🏢 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🤖・ai-jobs
[2026-01-04T06:45:48.817Z] [BOT] ✅ Industry: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify
[2026-01-04T06:45:50.722Z] [BOT] ✅ Created forum post: 🏢 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🗽・new-york
[2026-01-04T06:45:50.723Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T06:45:52.224Z] [BOT] 💾 Marked as posted: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify (instance #1)
[2026-01-04T06:45:52.224Z] [BOT] 💾 BEFORE ARCHIVING: 925 jobs in database
[2026-01-04T06:45:52.224Z] [BOT] ✅ No jobs to archive (all 925 jobs within 7-day window)
[2026-01-04T06:45:52.232Z] [BOT] 💾 Saved posted_jobs.json: 925 active jobs
[2026-01-04T06:45:52.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:45:55.233Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T06:45:55.233Z] [BOT] 📍 [ROUTING] "Lifecycle Marketing Manager" @ vercel
[2026-01-04T06:45:55.233Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T06:45:55.379Z] [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lifecycle Marketing Manager @ vercel',
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
[2026-01-04T06:45:55.379Z] [BOT] ❌ Industry post failed: Lifecycle Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-04T06:45:57.031Z] [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lifecycle Marketing Manager @ vercel',
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
[2026-01-04T06:45:57.032Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:45:58.533Z] [BOT] 📍 [ROUTING] "Director, Technical Accounting & Financial Reporting" @ vercel
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T06:45:58.661Z] [BOT ERROR] ❌ Error posting job Director, Technical Accounting & Financial Reporting: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Technical Accounting & Financial Reporting @ vercel',
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
[2026-01-04T06:45:58.661Z] [BOT] ❌ Industry post failed: Director, Technical Accounting & Financial Reporting
⚠️  Channel full error count: 2/5
[2026-01-04T06:46:00.317Z] [BOT ERROR] ❌ Error posting job Director, Technical Accounting & Financial Reporting: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Technical Accounting & Financial Reporting @ vercel',
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
[2026-01-04T06:46:00.317Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:46:04.819Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T06:46:04.820Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T06:46:04.820Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:46:04.972Z] [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, GTM Finance @ figma',
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
[2026-01-04T06:46:04.972Z] [BOT] ❌ Industry post failed: Manager, GTM Finance
⚠️  Channel full error count: 3/5
[2026-01-04T06:46:06.605Z] [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, GTM Finance @ figma',
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
[2026-01-04T06:46:06.605Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:46:11.107Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T06:46:11.108Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
[2026-01-04T06:46:11.108Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T06:46:11.253Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T06:46:11.253Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 4/5
[2026-01-04T06:46:12.898Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T06:46:12.898Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:46:17.400Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T06:46:17.400Z] [BOT] 📍 [ROUTING] "Corporate Legal Specialist" @ anthropic
[2026-01-04T06:46:17.401Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T06:46:17.559Z] [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T06:46:17.559Z] [BOT] ❌ Industry post failed: Corporate Legal Specialist
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💰・finance-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
[2026-01-04T06:46:17.559Z] [BOT] 💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T06:46:17.560Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T06:46:17.560Z] [BOT] Total attempts: 18
   Successful: 8
   Failed: 10
   Skipped: 0
[2026-01-04T06:46:17.560Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T06:46:17.560Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-04T06:46:17.561Z] [BOT] 3. #🗽・new-york: 2 posts
[2026-01-04T06:46:17.561Z] [BOT] [STATS] Channel stats saved
[2026-01-04T06:46:17.561Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T06:46:17.571Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
- [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lifecycle Marketing Manager
- [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Director, Technical Accounting & Financial Reporting: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Technical Accounting & Financial Reporting
- [BOT ERROR] ❌ Error posting job Director, Technical Accounting & Financial Reporting: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager, GTM Finance
- [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Corporate Legal Specialist
- ❌ CRITICAL: Discord channel #💰・finance-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*