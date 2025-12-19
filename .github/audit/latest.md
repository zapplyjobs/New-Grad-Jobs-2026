# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T19:49:50.266Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T19:49:21.208Z] ========================================
[2025-12-19T19:49:21.209Z] Discord Bot Execution Log
[2025-12-19T19:49:21.210Z] Environment: GitHub Actions
[2025-12-19T19:49:21.210Z] Node Version: v20.19.6
[2025-12-19T19:49:21.210Z] ========================================
[2025-12-19T19:49:21.210Z] Environment Variables Check:
[2025-12-19T19:49:21.210Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T19:49:21.210Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.210Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T19:49:21.210Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T19:49:21.210Z] 
Multi-Channel Configuration:
[2025-12-19T19:49:21.210Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T19:49:21.211Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T19:49:21.211Z] 
Data Files Check:
[2025-12-19T19:49:21.212Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42640 bytes)
[2025-12-19T19:49:21.214Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 324376 bytes)
[2025-12-19T19:49:21.214Z] 
========================================
[2025-12-19T19:49:21.214Z] Starting Enhanced Discord Bot...
[2025-12-19T19:49:21.214Z] ========================================
[2025-12-19T19:49:21.729Z] [BOT] ✅ Loaded V2 database: 544 jobs
[2025-12-19T19:49:22.275Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T19:49:22.275Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T19:49:22.275Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T19:49:22.275Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T19:49:22.322Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T19:49:22.369Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T19:49:22.371Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T19:49:22.372Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T19:49:22.372Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T19:49:22.372Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T19:49:22.373Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T19:49:22.377Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-19T19:49:22.377Z] [BOT] 📍 [ROUTING] "Software Engineer - Identity" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
[2025-12-19T19:49:22.378Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:49:22.396Z] [BOT ERROR] (node:3294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T19:49:22.726Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity @ ORG_7bc88ebb in #💻・tech-jobs
[2025-12-19T19:49:22.726Z] [BOT] ✅ Industry: Software Engineer - Identity @ ORG_7bc88ebb
[2025-12-19T19:49:24.392Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity @ ORG_7bc88ebb in #🌉・san-francisco
[2025-12-19T19:49:24.393Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T19:49:25.893Z] [BOT] 💾 Marked as posted: Software Engineer - Identity @ ORG_7bc88ebb (instance #1)
[2025-12-19T19:49:25.893Z] [BOT] 💾 BEFORE ARCHIVING: 545 jobs in database
[2025-12-19T19:49:25.894Z] [BOT] ✅ No jobs to archive (all 545 jobs within 7-day window)
[2025-12-19T19:49:25.903Z] [BOT] 💾 Saved posted_jobs.json: 545 active jobs
[2025-12-19T19:49:25.903Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:49:25.903Z] [BOT] 📍 [ROUTING] "Seismology Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:49:25.903Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:49:26.440Z] [BOT] ✅ Created forum post: 🏢 Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
[2025-12-19T19:49:26.441Z] [BOT] ✅ Industry: Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:49:28.309Z] [BOT] ✅ Created forum post: 🏢 Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2025-12-19T19:49:28.310Z] [BOT] ✅ Location: 🤠・austin
[2025-12-19T19:49:29.811Z] [BOT] 💾 Marked as posted: Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T19:49:29.811Z] [BOT] 💾 BEFORE ARCHIVING: 546 jobs in database
[2025-12-19T19:49:29.811Z] [BOT] ✅ No jobs to archive (all 546 jobs within 7-day window)
[2025-12-19T19:49:29.816Z] [BOT] 💾 Saved posted_jobs.json: 546 active jobs
[2025-12-19T19:49:29.816Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:49:29.816Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b344d80e Swift Group
[2025-12-19T19:49:29.817Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:49:30.223Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Swift Group in #💻・tech-jobs
[2025-12-19T19:49:30.224Z] [BOT] ✅ Industry: Software Engineer @ ORG_b344d80e Swift Group
[2025-12-19T19:49:32.032Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Swift Group in #💻・remote-usa
[2025-12-19T19:49:32.033Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T19:49:33.533Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b344d80e Swift Group (instance #1)
[2025-12-19T19:49:33.533Z] [BOT] 💾 BEFORE ARCHIVING: 547 jobs in database
[2025-12-19T19:49:33.534Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2025-12-19T19:49:33.539Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:49:33.541Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_b344d80e Swift Group
[2025-12-19T19:49:33.541Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:49:33.634Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Principal Engineer @ ORG_b344d80e Swift Group',
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
[2025-12-19T19:49:33.634Z] [BOT] ❌ Industry post failed: Principal Engineer
⚠️  Channel full error count: 1/5
[2025-12-19T19:49:35.307Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Principal Engineer @ ORG_b344d80e Swift Group',
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
[2025-12-19T19:49:35.307Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T19:49:39.809Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-19T19:49:39.809Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_2e37d88c
[2025-12-19T19:49:39.810Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:49:39.933Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Subaru',
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
[2025-12-19T19:49:39.933Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 2/5
[2025-12-19T19:49:41.628Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Subaru',
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
[2025-12-19T19:49:41.629Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T19:49:43.131Z] [BOT] 📍 [ROUTING] "Postdoctoral Associate" @ ORG_9d38443e of Miami
[2025-12-19T19:49:43.131Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:49:43.239Z] [BOT ERROR] ❌ Error posting job Postdoctoral Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Associate @ ORG_9d38443e of Miami',
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
[2025-12-19T19:49:43.239Z] [BOT] ❌ Industry post failed: Postdoctoral Associate
⚠️  Channel full error count: 3/5
[2025-12-19T19:49:44.827Z] [BOT ERROR] ❌ Error posting job Postdoctoral Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Associate @ ORG_9d38443e of Miami',
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
[2025-12-19T19:49:44.828Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T19:49:46.329Z] [BOT] 📍 [ROUTING] "Software Engineer - E" @ ORG_fb8c4aa0 Corporation
[2025-12-19T19:49:46.329Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:49:46.453Z] [BOT ERROR] ❌ Error posting job Software Engineer - E: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation',
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
[2025-12-19T19:49:46.453Z] [BOT] ❌ Industry post failed: Software Engineer - E
⚠️  Channel full error count: 4/5
[2025-12-19T19:49:48.082Z] [BOT ERROR] ❌ Error posting job Software Engineer - E: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation',
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
[2025-12-19T19:49:48.082Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T19:49:49.582Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_64dba1b4
[2025-12-19T19:49:49.583Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:49:49.687Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate @ Northeastern',
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
[2025-12-19T19:49:49.687Z] [BOT] ❌ Industry post failed: Postdoctoral Research Associate
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
[2025-12-19T19:49:49.687Z] [BOT] ❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2025-12-19T19:49:49.688Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T19:49:49.688Z] [BOT] Total attempts: 15
   Successful: 6
   Failed: 9
   Skipped: 0
[2025-12-19T19:49:49.688Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T19:49:49.688Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🌉・san-francisco: 1 posts
     3. #🤠・austin: 1 posts
     4. #💻・remote-usa: 1 posts
[2025-12-19T19:49:49.688Z] [BOT] [STATS] Channel stats saved
[2025-12-19T19:49:49.689Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_41b776ee.json
[2025-12-19T19:49:49.698Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Principal Engineer
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Associate
- [BOT ERROR] ❌ Error posting job Postdoctoral Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - E: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - E
- [BOT ERROR] ❌ Error posting job Software Engineer - E: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Research Associate
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*