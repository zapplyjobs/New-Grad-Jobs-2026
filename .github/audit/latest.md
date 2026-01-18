# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T10:08:33.220Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T10:08:16.916Z] ========================================
[2026-01-18T10:08:16.918Z] Discord Bot Execution Log
[2026-01-18T10:08:16.918Z] Environment: GitHub Actions
[2026-01-18T10:08:16.918Z] Node Version: v20.19.6
[2026-01-18T10:08:16.918Z] ========================================
[2026-01-18T10:08:16.918Z] Environment Variables Check:
[2026-01-18T10:08:16.918Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T10:08:16.919Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T10:08:16.919Z] 
Multi-Channel Configuration:
[2026-01-18T10:08:16.919Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.919Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.920Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T10:08:16.920Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T10:08:16.920Z] 
Data Files Check:
[2026-01-18T10:08:16.921Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171240 bytes)
[2026-01-18T10:08:16.931Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1455406 bytes)
[2026-01-18T10:08:16.931Z] 
========================================
[2026-01-18T10:08:16.931Z] Starting Enhanced Discord Bot...
[2026-01-18T10:08:16.931Z] ========================================
[2026-01-18T10:08:17.445Z] [BOT] ✅ Loaded V2 database: 2685 jobs
[2026-01-18T10:08:18.320Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T10:08:18.320Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T10:08:18.320Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T10:08:18.433Z] [BOT] ✅ Loaded pending queue: 2840 total (2820 pending, 20 enriched, 0 posted)
[2026-01-18T10:08:18.435Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Policy Manager, Frontier Risk at anthropic
[2026-01-18T10:08:18.438Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T10:08:18.439Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T10:08:18.439Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T10:08:18.440Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T10:08:18.440Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T10:08:18.445Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-18T10:08:18.445Z] [BOT] 📍 [ROUTING] "Product Policy Manager, Frontier Risk" @ anthropic
[2026-01-18T10:08:18.445Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T10:08:18.450Z] [BOT ERROR] (node:2878) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T10:08:18.584Z] [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Policy Manager, Frontier Risk @ anthropic',
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
[2026-01-18T10:08:18.585Z] [BOT] ❌ Industry post failed: Product Policy Manager, Frontier Risk
⚠️  Channel full error count: 1/5
[2026-01-18T10:08:20.319Z] [BOT] ✅ Created forum post: 🏢 Product Policy Manager, Frontier Risk @ anthropic in #🌉・san-francisco
[2026-01-18T10:08:20.319Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T10:08:21.820Z] [BOT] 💾 Marked as posted: Product Policy Manager, Frontier Risk @ anthropic (instance #1)
[2026-01-18T10:08:21.820Z] [BOT] 💾 BEFORE ARCHIVING: 2686 jobs in database
[2026-01-18T10:08:21.822Z] [BOT] ✅ No jobs to archive (all 2686 jobs within 7-day window)
[2026-01-18T10:08:21.842Z] [BOT] 💾 Saved posted_jobs.json: 2686 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T10:08:21.842Z] [BOT] 📍 [ROUTING] "Technical Policy Manager, Cyber Harms " @ anthropic
[2026-01-18T10:08:21.842Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T10:08:22.168Z] [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Policy Manager, Cyber Harms  @ anthropic',
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
[2026-01-18T10:08:22.168Z] [BOT] ❌ Industry post failed: Technical Policy Manager, Cyber Harms 
⚠️  Channel full error count: 2/5
[2026-01-18T10:08:23.808Z] [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Policy Manager, Cyber Harms  @ anthropic',
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
[2026-01-18T10:08:23.809Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T10:08:25.310Z] [BOT] 📍 [ROUTING] "Health and Life Science Policy Lead" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T10:08:25.458Z] [BOT ERROR] ❌ Error posting job Health and Life Science Policy Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Health and Life Science Policy Lead @ anthropic',
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
[2026-01-18T10:08:25.458Z] [BOT] ❌ Industry post failed: Health and Life Science Policy Lead
⚠️  Channel full error count: 3/5
[2026-01-18T10:08:27.157Z] [BOT] ✅ Created forum post: 🏢 Health and Life Science Policy Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T10:08:28.656Z] [BOT] 💾 Marked as posted: Health and Life Science Policy Lead @ anthropic (instance #1)
[2026-01-18T10:08:28.657Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-18T10:08:28.659Z] [BOT] ✅ No jobs to archive (all 2687 jobs within 7-day window)
[2026-01-18T10:08:28.678Z] [BOT] 💾 Saved posted_jobs.json: 2687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T10:08:28.678Z] [BOT] 📍 [ROUTING] "Regional Manager, Sales Engineer - Key Accounts (East)" @ datadog
[2026-01-18T10:08:28.679Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T10:08:28.818Z] [BOT ERROR] ❌ Error posting job Regional Manager, Sales Engineer - Key Accounts (East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Regional Manager, Sales Engineer - Key Accounts (East) @ datadog',
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
[2026-01-18T10:08:28.818Z] [BOT] ❌ Industry post failed: Regional Manager, Sales Engineer - Key Accounts (East)
⚠️  Channel full error count: 4/5
[2026-01-18T10:08:30.449Z] [BOT ERROR] ❌ Error posting job Regional Manager, Sales Engineer - Key Accounts (East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Regional Manager, Sales Engineer - Key Accounts (East) @ datadog',
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
[2026-01-18T10:08:30.450Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T10:08:31.951Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Denver" @ datadog
[2026-01-18T10:08:31.951Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T10:08:32.093Z] [BOT ERROR] ❌ Error posting job Customer Success Manager - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Success Manager - Denver @ datadog',
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
[2026-01-18T10:08:32.093Z] [BOT] ❌ Industry post failed: Customer Success Manager - Denver
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
[2026-01-18T10:08:32.094Z] [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 3 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T10:08:32.094Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T10:08:32.095Z] [BOT] Total attempts: 9
   Successful: 2
   Failed: 7
   Skipped: 0
[2026-01-18T10:08:32.095Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-18T10:08:32.095Z] [BOT] Total posts: 2
   Channels used: 1
   Top channels:
[2026-01-18T10:08:32.095Z] [BOT] 1. #🌉・san-francisco: 2 posts
[2026-01-18T10:08:32.095Z] [BOT] [STATS] Channel stats saved
[2026-01-18T10:08:32.095Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T10:08:32.108Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2878) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Policy Manager, Frontier Risk: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Policy Manager, Frontier Risk
- [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Policy Manager, Cyber Harms
- [BOT ERROR] ❌ Error posting job Technical Policy Manager, Cyber Harms : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Health and Life Science Policy Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Health and Life Science Policy Lead
- [BOT ERROR] ❌ Error posting job Regional Manager, Sales Engineer - Key Accounts (East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Regional Manager, Sales Engineer - Key Accounts (East)
- [BOT ERROR] ❌ Error posting job Regional Manager, Sales Engineer - Key Accounts (East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Success Manager - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Success Manager - Denver
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 3 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*