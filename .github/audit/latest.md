# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T15:27:36.834Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T15:27:02.480Z] ========================================
[2026-01-15T15:27:02.482Z] Discord Bot Execution Log
[2026-01-15T15:27:02.482Z] Environment: GitHub Actions
[2026-01-15T15:27:02.482Z] Node Version: v20.19.6
[2026-01-15T15:27:02.482Z] ========================================
[2026-01-15T15:27:02.482Z] Environment Variables Check:
[2026-01-15T15:27:02.482Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T15:27:02.482Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T15:27:02.483Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T15:27:02.483Z] 
Multi-Channel Configuration:
[2026-01-15T15:27:02.483Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.483Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T15:27:02.484Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T15:27:02.484Z] 
Data Files Check:
[2026-01-15T15:27:02.484Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7645 bytes)
[2026-01-15T15:27:02.491Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 939032 bytes)
[2026-01-15T15:27:02.491Z] 
========================================
[2026-01-15T15:27:02.491Z] Starting Enhanced Discord Bot...
[2026-01-15T15:27:02.491Z] ========================================
[2026-01-15T15:27:03.020Z] [BOT] ✅ Loaded V2 database: 1755 jobs
[2026-01-15T15:27:03.913Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T15:27:03.914Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T15:27:03.914Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T15:27:04.026Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS at TikTok
[2026-01-15T15:27:04.028Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T15:27:04.029Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T15:27:04.029Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T15:27:04.030Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T15:27:04.030Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T15:27:04.030Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T15:27:04.035Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-15T15:27:04.035Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T15:27:04.036Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:04.053Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T15:27:04.200Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:27:04.201Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
⚠️  Channel full error count: 1/5
[2026-01-15T15:27:05.953Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T15:27:05.954Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T15:27:07.454Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T15:27:07.454Z] [BOT] 💾 BEFORE ARCHIVING: 1756 jobs in database
[2026-01-15T15:27:07.456Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T15:27:07.460Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T15:27:07.461Z] [BOT] ✅ Archiving complete: 1 archived, 1755 active
[2026-01-15T15:27:07.472Z] [BOT] 💾 Saved posted_jobs.json: 1755 active jobs
[2026-01-15T15:27:07.472Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T15:27:07.472Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate Online Architecture-2026 Start - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:07.714Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T15:27:07.714Z] [BOT] ✅ Industry: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb
[2026-01-15T15:27:09.557Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:27:09.557Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:27:11.059Z] [BOT] 💾 Marked as posted: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 1756 jobs in database
[2026-01-15T15:27:11.060Z] [BOT] ✅ No jobs to archive (all 1756 jobs within 7-day window)
[2026-01-15T15:27:11.071Z] [BOT] 💾 Saved posted_jobs.json: 1756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T15:27:11.071Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global SRE - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:11.185Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T15:27:11.185Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T15:27:12.872Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T15:27:12.873Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T15:27:14.373Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-15T15:27:14.373Z] [BOT] 💾 BEFORE ARCHIVING: 1757 jobs in database
[2026-01-15T15:27:14.375Z] [BOT] ✅ No jobs to archive (all 1757 jobs within 7-day window)
[2026-01-15T15:27:14.388Z] [BOT] 💾 Saved posted_jobs.json: 1757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T15:27:14.389Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate User Growth - 2026 Start - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T15:27:14.389Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:14.593Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate User Growth - 2026 Start - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T15:27:14.594Z] [BOT] ✅ Industry: Software Engineer Graduate User Growth - 2026 Start - BS/MS @ ORG_1bb6fcfb
[2026-01-15T15:27:16.314Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-15T15:27:16.314Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:27:17.816Z] [BOT] 💾 Marked as posted: Software Engineer Graduate User Growth - 2026 Start - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T15:27:17.816Z] [BOT] 💾 BEFORE ARCHIVING: 1758 jobs in database
[2026-01-15T15:27:17.817Z] [BOT] ✅ No jobs to archive (all 1758 jobs within 7-day window)
[2026-01-15T15:27:17.830Z] [BOT] 💾 Saved posted_jobs.json: 1758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T15:27:17.831Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science" @ ORG_08c9a13c
[2026-01-15T15:27:17.831Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:18.052Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ By',
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
[2026-01-15T15:27:18.053Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science
⚠️  Channel full error count: 1/5
[2026-01-15T15:27:19.669Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ By',
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
[2026-01-15T15:27:19.670Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:27:21.171Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
[2026-01-15T15:27:21.171Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:21.276Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ByteDance',
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
[2026-01-15T15:27:21.276Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 2/5
[2026-01-15T15:27:22.927Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ByteDance',
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
[2026-01-15T15:27:22.927Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:27:24.427Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
[2026-01-15T15:27:24.428Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:24.632Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ByteDance',
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
[2026-01-15T15:27:24.633Z] [BOT] ❌ Industry post failed: Backend Software Engineer Graduate - Capcut - 2026 Start
⚠️  Channel full error count: 3/5
[2026-01-15T15:27:27.900Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer Graduate - Capcut - 2026 Start @ ByteDance',
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
[2026-01-15T15:27:27.900Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T15:27:29.401Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
   Category: TECH (default)
[2026-01-15T15:27:29.401Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T15:27:29.528Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ByteDance',
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
[2026-01-15T15:27:29.528Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Ecommerce Recommendation - PhD
⚠️  Channel full error count: 4/5
[2026-01-15T15:27:31.183Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ByteDance',
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
[2026-01-15T15:27:31.183Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T15:27:35.684Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T15:27:35.684Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T15:27:35.684Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T15:27:35.841Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist Generative AI - Intelligent Creation @ TikTok',
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
[2026-01-15T15:27:35.841Z] [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T15:27:35.842Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T15:27:35.842Z] [BOT] Total attempts: 17
   Successful: 4
   Failed: 13
   Skipped: 0
[2026-01-15T15:27:35.842Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T15:27:35.842Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
[2026-01-15T15:27:35.842Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-15T15:27:35.843Z] [BOT] [STATS] Channel stats saved
[2026-01-15T15:27:35.843Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T15:27:35.857Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Backend Software Engineer Graduate - Capcut - 2026 Start
- [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate - Capcut - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist - Ecommerce Recommendation - PhD
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Ecommerce Recommendation - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist Generative AI - Intelligent Creation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist Generative AI - Intelligent Creation
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*