# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T16:08:03.341Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 13
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T16:07:31.941Z] ========================================
[2026-01-14T16:07:31.943Z] Discord Bot Execution Log
[2026-01-14T16:07:31.943Z] Environment: GitHub Actions
[2026-01-14T16:07:31.943Z] Node Version: v20.19.6
[2026-01-14T16:07:31.943Z] ========================================
[2026-01-14T16:07:31.943Z] Environment Variables Check:
[2026-01-14T16:07:31.943Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T16:07:31.944Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T16:07:31.944Z] 
Multi-Channel Configuration:
[2026-01-14T16:07:31.944Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.944Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.945Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T16:07:31.945Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T16:07:31.945Z] 
Data Files Check:
[2026-01-14T16:07:31.946Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79204 bytes)
[2026-01-14T16:07:31.951Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 716216 bytes)
[2026-01-14T16:07:31.951Z] 
========================================
[2026-01-14T16:07:31.951Z] Starting Enhanced Discord Bot...
[2026-01-14T16:07:31.951Z] ========================================
[2026-01-14T16:07:32.492Z] [BOT] ✅ Loaded V2 database: 1346 jobs
[2026-01-14T16:07:33.324Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T16:07:33.324Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T16:07:33.325Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T16:07:33.437Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineering/Scientist Associate 1 at University of Texas - Austin
[2026-01-14T16:07:33.439Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T16:07:33.440Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T16:07:33.440Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T16:07:33.441Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T16:07:33.441Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T16:07:33.445Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T16:07:33.446Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
[2026-01-14T16:07:33.446Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T16:07:33.463Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T16:07:33.570Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
[2026-01-14T16:07:33.570Z] [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
⚠️  Channel full error count: 1/5
[2026-01-14T16:07:35.189Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-14T16:07:35.189Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-14T16:07:39.689Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T16:07:39.690Z] [BOT] 📍 [ROUTING] "Assistant Professor - Renewable Energy and Chemical Transformations" @ ORG_9d38443e of Central Florida
   Category: MARKETING (matched: "campaign")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T16:07:39.930Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori in #📣・marketing-jobs
[2026-01-14T16:07:39.930Z] [BOT] ✅ Industry: Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Florida
[2026-01-14T16:07:41.540Z] [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori',
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
[2026-01-14T16:07:41.541Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T16:07:43.039Z] [BOT] 💾 Marked as posted: Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Florida (instance #1)
[2026-01-14T16:07:43.040Z] [BOT] 💾 BEFORE ARCHIVING: 1347 jobs in database
[2026-01-14T16:07:43.041Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T16:07:43.042Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-14T16:07:43.042Z] [BOT] ✅ Archiving complete: 2 archived, 1345 active
[2026-01-14T16:07:43.053Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T16:07:46.054Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T16:07:46.055Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T16:07:46.273Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・tech-jobs
  ✅ Industry: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce
[2026-01-14T16:07:47.891Z] [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 New Grad Software Engineer - Backend 2026 @ Circle',
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
[2026-01-14T16:07:47.891Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T16:07:49.392Z] [BOT] 💾 Marked as posted: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce (instance #1)
[2026-01-14T16:07:49.392Z] [BOT] 💾 BEFORE ARCHIVING: 1346 jobs in database
[2026-01-14T16:07:49.393Z] [BOT] ✅ No jobs to archive (all 1346 jobs within 7-day window)
[2026-01-14T16:07:49.405Z] [BOT] 💾 Saved posted_jobs.json: 1346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T16:07:49.405Z] [BOT] 📍 [ROUTING] "Engineering Support Associate" @ ORG_e1de44d1ington County VA
[2026-01-14T16:07:49.405Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T16:07:49.578Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T16:07:49.578Z] [BOT] ❌ Industry post failed: Engineering Support Associate
⚠️  Channel full error count: 1/5
[2026-01-14T16:07:51.183Z] [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA',
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
[2026-01-14T16:07:51.184Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T16:07:52.685Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
[2026-01-14T16:07:52.685Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-14T16:07:52.810Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T16:07:52.810Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 2/5
[2026-01-14T16:07:54.393Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T16:07:54.393Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T16:07:55.893Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2026-01-14T16:07:55.893Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T16:07:56.070Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T16:07:56.070Z] [BOT] ❌ Industry post failed: Software Developer
⚠️  Channel full error count: 3/5
[2026-01-14T16:07:57.717Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T16:07:57.717Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T16:07:59.218Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Elixir" @ ORG_3cbc87c7 Anomaly
[2026-01-14T16:07:59.219Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T16:07:59.395Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Elixir: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly',
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
[2026-01-14T16:07:59.395Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Elixir
⚠️  Channel full error count: 4/5
[2026-01-14T16:08:00.986Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Elixir: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly',
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
[2026-01-14T16:08:00.987Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-14T16:08:02.488Z] [BOT] 📍 [ROUTING] "Graduate Engineering Development Program" @ ORG_b99419d3
[2026-01-14T16:08:02.488Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T16:08:02.642Z] [BOT ERROR] ❌ Error posting job Graduate Engineering Development Program: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineering Development Program @ Astemo',
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
[2026-01-14T16:08:02.643Z] [BOT] ❌ Industry post failed: Graduate Engineering Development Program
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T16:08:02.643Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T16:08:02.643Z] [BOT] Total attempts: 15
   Successful: 2
   Failed: 13
   Skipped: 0
[2026-01-14T16:08:02.644Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-14T16:08:02.644Z] [BOT] Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #💻・tech-jobs: 1 posts
[2026-01-14T16:08:02.644Z] [BOT] [STATS] Channel stats saved
[2026-01-14T16:08:02.644Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T16:08:02.658Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineering/Scientist Associate 1
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Assistant Professor - Renewable Energy and Chemical Transformations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job New Grad Software Engineer - Backend 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Support Associate
- [BOT ERROR] ❌ Error posting job Engineering Support Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Elixir: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Elixir
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Elixir: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Engineering Development Program: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Engineering Development Program
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*