# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T11:42:05.128Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T11:41:36.590Z] ========================================
[2026-01-15T11:41:36.592Z] Discord Bot Execution Log
[2026-01-15T11:41:36.592Z] Environment: GitHub Actions
[2026-01-15T11:41:36.592Z] Node Version: v20.19.6
[2026-01-15T11:41:36.592Z] ========================================
[2026-01-15T11:41:36.592Z] Environment Variables Check:
[2026-01-15T11:41:36.592Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T11:41:36.592Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.592Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T11:41:36.592Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T11:41:36.592Z] 
Multi-Channel Configuration:
[2026-01-15T11:41:36.592Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T11:41:36.593Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T11:41:36.593Z] 
Data Files Check:
[2026-01-15T11:41:36.594Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7370 bytes)
[2026-01-15T11:41:36.600Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 939562 bytes)
[2026-01-15T11:41:36.601Z] 
========================================
[2026-01-15T11:41:36.601Z] Starting Enhanced Discord Bot...
[2026-01-15T11:41:36.601Z] ========================================
[2026-01-15T11:41:37.114Z] [BOT] ✅ Loaded V2 database: 1755 jobs
[2026-01-15T11:41:37.798Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T11:41:37.798Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T11:41:37.799Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T11:41:37.908Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate - Data Arch - AI/ML Infrastructure at TikTok
[2026-01-15T11:41:37.911Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T11:41:37.911Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T11:41:37.911Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T11:41:37.912Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T11:41:37.912Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T11:41:37.912Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T11:41:37.915Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-15T11:41:37.916Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - AI/ML Infrastructure" @ ORG_1bb6fcfb
[2026-01-15T11:41:37.916Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:37.943Z] [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T11:41:38.013Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ TikTok',
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
[2026-01-15T11:41:38.014Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Arch - AI/ML Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-15T11:41:39.763Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T11:41:41.265Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ ORG_1bb6fcfb (instance #1)
[2026-01-15T11:41:41.265Z] [BOT] 💾 BEFORE ARCHIVING: 1756 jobs in database
[2026-01-15T11:41:41.267Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T11:41:41.272Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-15T11:41:41.272Z] [BOT] ✅ Archiving complete: 3 archived, 1753 active
[2026-01-15T11:41:41.283Z] [BOT] 💾 Saved posted_jobs.json: 1753 active jobs
[2026-01-15T11:41:41.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T11:41:41.284Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - Shorttext Rec" @ ORG_1bb6fcfb
[2026-01-15T11:41:41.284Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:41.369Z] [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Software Engineer - Data Arch - Shorttext Rec @ TikTok',
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
[2026-01-15T11:41:41.369Z] [BOT] ❌ Industry post failed: Graduate Software Engineer - Data Arch - Shorttext Rec
⚠️  Channel full error count: 2/5
[2026-01-15T11:41:43.028Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Arch - Shorttext Rec @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T11:41:44.528Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Data Arch - Shorttext Rec @ ORG_1bb6fcfb (instance #1)
[2026-01-15T11:41:44.528Z] [BOT] 💾 BEFORE ARCHIVING: 1754 jobs in database
[2026-01-15T11:41:44.530Z] [BOT] ✅ No jobs to archive (all 1754 jobs within 7-day window)
[2026-01-15T11:41:44.540Z] [BOT] 💾 Saved posted_jobs.json: 1754 active jobs
[2026-01-15T11:41:44.541Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T11:41:44.541Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global CRM - 2026 Start','BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:44.726Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T11:41:44.726Z] [BOT] ✅ Industry: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2026-01-15T11:41:46.388Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T11:41:46.388Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T11:41:47.889Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T11:41:47.889Z] [BOT] 💾 BEFORE ARCHIVING: 1755 jobs in database
[2026-01-15T11:41:47.890Z] [BOT] ✅ No jobs to archive (all 1755 jobs within 7-day window)
[2026-01-15T11:41:47.903Z] [BOT] 💾 Saved posted_jobs.json: 1755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T11:41:47.904Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Experimentation and Evaluation" @ ORG_1bb6fcfb
[2026-01-15T11:41:47.904Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:48.169Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T11:41:48.170Z] [BOT] ✅ Industry: Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb
[2026-01-15T11:41:49.935Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T11:41:51.436Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb (instance #1)
[2026-01-15T11:41:51.436Z] [BOT] 💾 BEFORE ARCHIVING: 1756 jobs in database
[2026-01-15T11:41:51.437Z] [BOT] ✅ No jobs to archive (all 1756 jobs within 7-day window)
[2026-01-15T11:41:51.449Z] [BOT] 💾 Saved posted_jobs.json: 1756 active jobs
[2026-01-15T11:41:51.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T11:41:51.449Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb (instance #1)
[2026-01-15T11:41:51.449Z] [BOT] 💾 BEFORE ARCHIVING: 1757 jobs in database
[2026-01-15T11:41:51.450Z] [BOT] ✅ No jobs to archive (all 1757 jobs within 7-day window)
[2026-01-15T11:41:51.463Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T11:41:51.464Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T11:41:51.464Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:51.537Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ TikTok',
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
[2026-01-15T11:41:51.538Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
⚠️  Channel full error count: 1/5
[2026-01-15T11:41:53.217Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ TikTok',
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
[2026-01-15T11:41:53.217Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T11:41:54.719Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate Online Architecture-2026 Start - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:54.995Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ TikTok',
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
[2026-01-15T11:41:54.995Z] [BOT] ❌ Industry post failed: Research Engineer Graduate Online Architecture-2026 Start - PhD
⚠️  Channel full error count: 2/5
[2026-01-15T11:41:56.588Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ TikTok',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T11:41:56.589Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T11:41:58.090Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer - Global CRM Platform" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-15T11:41:58.091Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:41:58.176Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer - Global CRM Platform @ TikTok',
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
[2026-01-15T11:41:58.176Z] [BOT] ❌ Industry post failed: Frontend Software Engineer - Global CRM Platform
⚠️  Channel full error count: 3/5
[2026-01-15T11:41:59.749Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer - Global CRM Platform @ TikTok',
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
[2026-01-15T11:41:59.749Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T11:42:01.250Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global SRE - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:42:01.349Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Global SRE - 2026 Start @ TikTok',
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
[2026-01-15T11:42:01.349Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
⚠️  Channel full error count: 4/5
[2026-01-15T11:42:02.928Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Global SRE - 2026 Start @ TikTok',
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
[2026-01-15T11:42:02.928Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T11:42:04.429Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate User Growth - 2026 Start - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T11:42:04.429Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T11:42:04.500Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate User Growth - 2026 Start - BS/MS @ TikTok',
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
[2026-01-15T11:42:04.500Z] [BOT] ❌ Industry post failed: Software Engineer Graduate User Growth - 2026 Start - BS/MS
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T11:42:04.501Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T11:42:04.501Z] [BOT] Total attempts: 17
   Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-15T11:42:04.501Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-15T11:42:04.501Z] [BOT] Total posts: 6
   Channels used: 2
   Top channels:
     1. #🌉・san-francisco: 4 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-15T11:42:04.502Z] [BOT] [STATS] Channel stats saved
[2026-01-15T11:42:04.502Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T11:42:04.516Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Arch - AI/ML Infrastructure
- [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Software Engineer - Data Arch - Shorttext Rec
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer Graduate Online Architecture-2026 Start - PhD
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Frontend Software Engineer - Global CRM Platform
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate User Growth - 2026 Start - BS/MS
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*