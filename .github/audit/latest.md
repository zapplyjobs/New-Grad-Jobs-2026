# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T07:45:04.153Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T07:44:40.943Z] ========================================
[2026-01-16T07:44:40.945Z] Discord Bot Execution Log
[2026-01-16T07:44:40.945Z] Environment: GitHub Actions
[2026-01-16T07:44:40.945Z] Node Version: v20.19.6
[2026-01-16T07:44:40.945Z] ========================================
[2026-01-16T07:44:40.945Z] Environment Variables Check:
[2026-01-16T07:44:40.945Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T07:44:40.946Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T07:44:40.946Z] 
Multi-Channel Configuration:
[2026-01-16T07:44:40.946Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.946Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.947Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T07:44:40.947Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T07:44:40.947Z] 
Data Files Check:
[2026-01-16T07:44:40.947Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8884 bytes)
[2026-01-16T07:44:40.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1068977 bytes)
[2026-01-16T07:44:40.955Z] 
========================================
[2026-01-16T07:44:40.955Z] Starting Enhanced Discord Bot...
[2026-01-16T07:44:40.955Z] ========================================
[2026-01-16T07:44:41.491Z] [BOT] ✅ Loaded V2 database: 1983 jobs
[2026-01-16T07:44:42.360Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T07:44:42.361Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T07:44:42.361Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T07:44:42.476Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security Software Engineer at Verkada
[2026-01-16T07:44:42.479Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T07:44:42.479Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T07:44:42.480Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T07:44:42.481Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T07:44:42.481Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T07:44:42.481Z] [BOT] - AI Research Engineer @ ORG_facb5814ingo: new york, pittsburgh
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T07:44:42.483Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T07:44:42.484Z] [BOT] 📍 [ROUTING] "Security Software Engineer" @ ORG_175f350d
[2026-01-16T07:44:42.484Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:42.501Z] [BOT ERROR] (node:4061) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T07:44:42.684Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer @ ORG_175f350d in #💻・tech-jobs
[2026-01-16T07:44:42.684Z] [BOT] ✅ Industry: Security Software Engineer @ ORG_175f350d
[2026-01-16T07:44:44.654Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer @ ORG_175f350d in #🦢・los-angeles
[2026-01-16T07:44:44.655Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T07:44:46.156Z] [BOT] 💾 Marked as posted: Security Software Engineer @ ORG_175f350d (instance #1)
[2026-01-16T07:44:46.156Z] [BOT] 💾 BEFORE ARCHIVING: 1984 jobs in database
[2026-01-16T07:44:46.158Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T07:44:46.165Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-16T07:44:46.165Z] [BOT] ✅ Archiving complete: 2 archived, 1982 active
[2026-01-16T07:44:46.179Z] [BOT] 💾 Saved posted_jobs.json: 1982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:44:46.179Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_facb5814ingo
[2026-01-16T07:44:46.180Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:46.376Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_facb5814ingo in #💻・tech-jobs
[2026-01-16T07:44:46.377Z] [BOT] ✅ Industry: AI Research Engineer @ ORG_facb5814ingo
[2026-01-16T07:44:48.067Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_facb5814ingo in #🗽・new-york
[2026-01-16T07:44:48.067Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T07:44:49.568Z] [BOT] 💾 Marked as posted: AI Research Engineer @ ORG_facb5814ingo (instance #1)
[2026-01-16T07:44:49.568Z] [BOT] 💾 BEFORE ARCHIVING: 1983 jobs in database
[2026-01-16T07:44:49.570Z] [BOT] ✅ No jobs to archive (all 1983 jobs within 7-day window)
[2026-01-16T07:44:49.581Z] [BOT] 💾 Saved posted_jobs.json: 1983 active jobs
[2026-01-16T07:44:49.581Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:44:49.582Z] [BOT] 💾 Marked as posted: AI Research Engineer @ ORG_facb5814ingo (instance #1)
[2026-01-16T07:44:49.582Z] [BOT] 💾 BEFORE ARCHIVING: 1984 jobs in database
[2026-01-16T07:44:49.583Z] [BOT] ✅ No jobs to archive (all 1984 jobs within 7-day window)
[2026-01-16T07:44:49.595Z] [BOT] 💾 Saved posted_jobs.json: 1984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:44:49.595Z] [BOT] 📍 [ROUTING] "BNY Analyst Program-Engineering - Developer" @ ORG_01d9a8c4
[2026-01-16T07:44:49.595Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:49.726Z] [BOT ERROR] ❌ Error posting job BNY Analyst Program-Engineering - Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 BNY Analyst Program-Engineering - Developer @ BNY',
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
[2026-01-16T07:44:49.726Z] [BOT] ❌ Industry post failed: BNY Analyst Program-Engineering - Developer
⚠️  Channel full error count: 1/5
[2026-01-16T07:44:51.350Z] [BOT ERROR] ❌ Error posting job BNY Analyst Program-Engineering - Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 BNY Analyst Program-Engineering - Developer @ BNY',
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
[2026-01-16T07:44:51.350Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T07:44:52.853Z] [BOT] 📍 [ROUTING] "Moodle Developer" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:52.984Z] [BOT ERROR] ❌ Error posting job Moodle Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Moodle Developer @ ORG_0aa5052d State University (LSU)',
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
[2026-01-16T07:44:52.984Z] [BOT] ❌ Industry post failed: Moodle Developer
⚠️  Channel full error count: 2/5
[2026-01-16T07:44:54.602Z] [BOT ERROR] ❌ Error posting job Moodle Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Moodle Developer @ ORG_0aa5052d State University (LSU)',
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
[2026-01-16T07:44:54.602Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T07:44:56.104Z] [BOT] 📍 [ROUTING] "Engineering Assistant I – Software" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:56.219Z] [BOT ERROR] ❌ Error posting job Engineering Assistant I – Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Assistant I – Software @ ORG_b1b059ca Systems',
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
[2026-01-16T07:44:56.220Z] [BOT] ❌ Industry post failed: Engineering Assistant I – Software
⚠️  Channel full error count: 3/5
[2026-01-16T07:44:57.875Z] [BOT ERROR] ❌ Error posting job Engineering Assistant I – Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Assistant I – Software @ ORG_b1b059ca Systems',
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
[2026-01-16T07:44:57.875Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T07:44:59.377Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:44:59.548Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ CoStar',
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
[2026-01-16T07:44:59.548Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 4/5
[2026-01-16T07:45:01.186Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ CoStar',
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
[2026-01-16T07:45:01.186Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T07:45:02.687Z] [BOT] 📍 [ROUTING] "Analyst, Data & Software Engineering" @ ORG_82e4502a Group
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:45:02.826Z] [BOT ERROR] ❌ Error posting job Analyst, Data & Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst, Data & Software Engineering @ ORG_82e4502a Group',
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
[2026-01-16T07:45:02.827Z] [BOT] ❌ Industry post failed: Analyst, Data & Software Engineering
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T07:45:02.827Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T07:45:02.827Z] [BOT] Total attempts: 13
   Successful: 4
   Failed: 9
   Skipped: 0
[2026-01-16T07:45:02.828Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T07:45:02.828Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🦢・los-angeles: 1 posts
     3. #🗽・new-york: 1 posts
[2026-01-16T07:45:02.828Z] [BOT] [STATS] Channel stats saved
[2026-01-16T07:45:02.828Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T07:45:02.841Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4061) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job BNY Analyst Program-Engineering - Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: BNY Analyst Program-Engineering - Developer
- [BOT ERROR] ❌ Error posting job BNY Analyst Program-Engineering - Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Moodle Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Moodle Developer
- [BOT ERROR] ❌ Error posting job Moodle Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Assistant I – Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Assistant I – Software
- [BOT ERROR] ❌ Error posting job Engineering Assistant I – Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analyst, Data & Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analyst, Data & Software Engineering
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*