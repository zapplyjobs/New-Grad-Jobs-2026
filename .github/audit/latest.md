# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T19:30:09.445Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T19:29:16.716Z] ========================================
[2026-01-19T19:29:16.718Z] Discord Bot Execution Log
[2026-01-19T19:29:16.718Z] Environment: GitHub Actions
[2026-01-19T19:29:16.718Z] Node Version: v20.19.6
[2026-01-19T19:29:16.718Z] ========================================
[2026-01-19T19:29:16.718Z] Environment Variables Check:
[2026-01-19T19:29:16.718Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T19:29:16.718Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.718Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T19:29:16.719Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T19:29:16.719Z] 
Multi-Channel Configuration:
[2026-01-19T19:29:16.719Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T19:29:16.719Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T19:29:16.719Z] 
Data Files Check:
[2026-01-19T19:29:16.720Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101798 bytes)
[2026-01-19T19:29:16.731Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1599972 bytes)
[2026-01-19T19:29:16.731Z] 
========================================
[2026-01-19T19:29:16.731Z] Starting Enhanced Discord Bot...
[2026-01-19T19:29:16.732Z] ========================================
[2026-01-19T19:29:17.274Z] [BOT] ✅ Loaded V2 database: 2938 jobs
[2026-01-19T19:29:18.096Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T19:29:18.097Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T19:29:18.097Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T19:29:18.233Z] [BOT] ✅ Loaded pending queue: 2820 total (2800 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Technical Program Manager, Claude Experiences at anthropic
[2026-01-19T19:29:18.236Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T19:29:18.236Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T19:29:18.237Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T19:29:18.237Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T19:29:18.237Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T19:29:18.242Z] [BOT] 📌 Posting 2 jobs to #📊・JID_9910249a
[2026-01-19T19:29:18.243Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Claude Experiences" @ anthropic
[2026-01-19T19:29:18.243Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T19:29:18.248Z] [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T19:29:18.410Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Claude Experiences @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_d597ace3/threads'
}
[2026-01-19T19:29:18.410Z] [BOT] ❌ Industry post failed: Technical Program Manager, Claude Experiences
⚠️  Channel full error count: 1/5
[2026-01-19T19:29:20.189Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Claude Experiences @ anthropic in #🌉・san-francisco
[2026-01-19T19:29:20.189Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T19:29:21.691Z] [BOT] 💾 Marked as posted: Technical Program Manager, Claude Experiences @ anthropic (instance #1)
[2026-01-19T19:29:21.691Z] [BOT] 💾 BEFORE ARCHIVING: 2939 jobs in database
[2026-01-19T19:29:21.694Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T19:29:21.699Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-19T19:29:21.699Z] [BOT] ✅ Archiving complete: 11 archived, 2928 active
[2026-01-19T19:29:21.717Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:21.717Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Launches" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-19T19:29:21.717Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T19:29:21.941Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Launches @ anthropic in #📊・JID_9910249a
[2026-01-19T19:29:21.942Z] [BOT] ✅ Industry: Technical Program Manager, Launches @ anthropic
[2026-01-19T19:29:23.649Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Launches @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T19:29:25.151Z] [BOT] 💾 Marked as posted: Technical Program Manager, Launches @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-19T19:29:25.153Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-19T19:29:25.169Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:28.171Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T19:29:28.172Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Mathematics" @ ORG_64dba1b4 University
[2026-01-19T19:29:28.172Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T19:29:28.401Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University in #📈・JID_fb739488
  ✅ Industry: Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University
[2026-01-19T19:29:30.119Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T19:29:31.621Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University (instance #1)
[2026-01-19T19:29:31.621Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-19T19:29:31.623Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-19T19:29:31.644Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
[2026-01-19T19:29:31.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:34.645Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T19:29:34.646Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:29:34.905Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company
[2026-01-19T19:29:36.634Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
[2026-01-19T19:29:36.634Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T19:29:38.136Z] [BOT] 💾 Marked as posted: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-19T19:29:38.136Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-19T19:29:38.138Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-19T19:29:38.156Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:38.156Z] [BOT] 📍 [ROUTING] "Mission Systems Software Engineer - Full Stack - Mission Operations" @ ORG_55bd43a0
   Category: TECH (matched: "software")
[2026-01-19T19:29:38.156Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:29:38.370Z] [BOT] ✅ Created forum post: 🏢 Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0 in #💻・tech-jobs
  ✅ Industry: Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0
[2026-01-19T19:29:39.872Z] [BOT] 💾 Marked as posted: Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0 (instance #1)
💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-19T19:29:39.874Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-19T19:29:39.893Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:39.894Z] [BOT] 📍 [ROUTING] "MFG System Implementations Engineer 1" @ ORG_3a7d2c6a Bottling
[2026-01-19T19:29:39.894Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:29:40.103Z] [BOT] ✅ Created forum post: 🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #💻・tech-jobs
  ✅ Industry: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling
[2026-01-19T19:29:41.741Z] [BOT ERROR] ❌ Error posting job MFG System Implementations Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling',
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
[2026-01-19T19:29:41.741Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T19:29:43.243Z] [BOT] 💾 Marked as posted: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling (instance #1)
[2026-01-19T19:29:43.243Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-19T19:29:43.245Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-19T19:29:43.263Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:29:46.263Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T19:29:46.263Z] [BOT] 📍 [ROUTING] "Content Technologist" @ discord
   Category: MARKETING (matched: "brand")
[2026-01-19T19:29:46.263Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T19:29:46.417Z] [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Content Technologist @ discord',
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
[2026-01-19T19:29:46.417Z] [BOT] ❌ Industry post failed: Content Technologist
⚠️  Channel full error count: 1/5
[2026-01-19T19:29:48.077Z] [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Content Technologist @ discord',
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
[2026-01-19T19:29:48.077Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:29:49.577Z] [BOT] 📍 [ROUTING] "Technician" @ NV5 Global
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T19:29:49.710Z] [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technician @ NV5 Global',
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
[2026-01-19T19:29:49.710Z] [BOT] ❌ Industry post failed: Technician
⚠️  Channel full error count: 2/5
[2026-01-19T19:29:51.338Z] [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technician @ NV5 Global',
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
[2026-01-19T19:29:51.339Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:29:55.841Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T19:29:55.842Z] [BOT] 📍 [ROUTING] "Applied AI Engineer, Startups" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-19T19:29:55.842Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T19:29:56.021Z] [BOT ERROR] ❌ Error posting job Applied AI Engineer, Startups: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applied AI Engineer, Startups @ anthropic',
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
[2026-01-19T19:29:56.021Z] [BOT] ❌ Industry post failed: Applied AI Engineer, Startups
⚠️  Channel full error count: 3/5
[2026-01-19T19:29:57.675Z] [BOT ERROR] ❌ Error posting job Applied AI Engineer, Startups: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applied AI Engineer, Startups @ anthropic',
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
[2026-01-19T19:29:57.676Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T19:29:59.176Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Interdisciplinary Data Science" @ ORG_9d38443e of Nevada Las Vegas (UNLV)
[2026-01-19T19:29:59.176Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T19:29:59.464Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)',
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
[2026-01-19T19:29:59.464Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar - Interdisciplinary Data Science
⚠️  Channel full error count: 4/5
[2026-01-19T19:30:01.132Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)',
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
[2026-01-19T19:30:01.132Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:30:05.633Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-19T19:30:05.634Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-19T19:30:05.634Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
[2026-01-19T19:30:05.634Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
[2026-01-19T19:30:05.634Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
[2026-01-19T19:30:05.635Z] [BOT] ⏭️  Skipping duplicate: JID_1cb702e0 (posted within 7 days)
[2026-01-19T19:30:05.635Z] [BOT] ⏭️  Skipping duplicate: JID_d918151e-i_r52230 (posted within 7 days)
[2026-01-19T19:30:05.764Z] [BOT] ✅ Loaded pending queue: 2820 total (2800 pending, 20 enriched, 0 posted)
[2026-01-19T19:30:05.955Z] [BOT] ✅ Saved pending queue: 2820 total (2800 pending, 14 enriched, 6 posted)
[2026-01-19T19:30:05.955Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T19:30:06.018Z] [BOT] 📂 Loaded 5125 existing routing entries
[2026-01-19T19:30:06.089Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5135
   Timestamp: 2026-01-19T19:30:06.069Z
[2026-01-19T19:30:06.090Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
[2026-01-19T19:30:06.090Z] [BOT] Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-19T19:30:06.090Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🌉・san-francisco: 2 posts
     3. #📊・JID_9910249a: 1 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🚌・boston: 1 posts
[STATS] Channel stats saved
[2026-01-19T19:30:08.114Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2779) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Claude Experiences
- [BOT ERROR] ❌ Error posting job MFG System Implementations Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Content Technologist
- [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technician
- [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Applied AI Engineer, Startups: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Applied AI Engineer, Startups
- [BOT ERROR] ❌ Error posting job Applied AI Engineer, Startups: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar - Interdisciplinary Data Science
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*