# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T17:27:37.482Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T17:26:52.705Z] ========================================
[2026-01-16T17:26:52.707Z] Discord Bot Execution Log
[2026-01-16T17:26:52.707Z] Environment: GitHub Actions
[2026-01-16T17:26:52.707Z] Node Version: v20.19.6
[2026-01-16T17:26:52.707Z] ========================================
[2026-01-16T17:26:52.708Z] Environment Variables Check:
[2026-01-16T17:26:52.708Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T17:26:52.708Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.708Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T17:26:52.708Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T17:26:52.708Z] 
Multi-Channel Configuration:
[2026-01-16T17:26:52.708Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.708Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.708Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T17:26:52.709Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T17:26:52.709Z] 
Data Files Check:
[2026-01-16T17:26:52.710Z] .github/data/new_jobs.json: ✅ Exists (10 items, 28014 bytes)
[2026-01-16T17:26:52.718Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1094668 bytes)
[2026-01-16T17:26:52.718Z] 
========================================
[2026-01-16T17:26:52.718Z] Starting Enhanced Discord Bot...
[2026-01-16T17:26:52.718Z] ========================================
[2026-01-16T17:26:53.258Z] [BOT] ✅ Loaded V2 database: 2029 jobs
[2026-01-16T17:26:53.795Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T17:26:53.796Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T17:26:53.796Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T17:26:53.910Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Digital Engineering Rotational Aspire at American Bureau of Shipping
[2026-01-16T17:26:53.913Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T17:26:53.914Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T17:26:53.914Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T17:26:53.915Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T17:26:53.915Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T17:26:53.915Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T17:26:53.919Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T17:26:53.920Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-16T17:26:53.920Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T17:26:53.937Z] [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T17:26:54.092Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T17:26:54.092Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 1/5
[2026-01-16T17:26:55.706Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T17:26:55.706Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T17:26:57.208Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_352dd990
[2026-01-16T17:26:57.208Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T17:26:57.420Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_352dd990 in #💻・tech-jobs
[2026-01-16T17:26:57.421Z] [BOT] ✅ Industry: Software Engineer @ ORG_352dd990
[2026-01-16T17:26:59.171Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_352dd990 in #🗽・new-york
[2026-01-16T17:26:59.172Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T17:27:00.673Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_352dd990 (instance #1)
[2026-01-16T17:27:00.674Z] [BOT] 💾 BEFORE ARCHIVING: 2030 jobs in database
[2026-01-16T17:27:00.676Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T17:27:00.680Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-16T17:27:00.681Z] [BOT] ✅ Archiving complete: 5 archived, 2025 active
[2026-01-16T17:27:00.697Z] [BOT] 💾 Saved posted_jobs.json: 2025 active jobs
[2026-01-16T17:27:00.697Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:00.697Z] [BOT] 📍 [ROUTING] "Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track" @ ORG_b344d80e Cigna Group
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T17:27:01.153Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Gro in #💻・tech-jobs
  ✅ Industry: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group
[2026-01-16T17:27:02.905Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Gro in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T17:27:04.406Z] [BOT] 💾 Marked as posted: Technology Development Program (TECDP) - Infrastructure & Cloud Engineering Track @ ORG_b344d80e Cigna Group (instance #1)
[2026-01-16T17:27:04.406Z] [BOT] 💾 BEFORE ARCHIVING: 2026 jobs in database
[2026-01-16T17:27:04.408Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-01-16T17:27:04.424Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:04.425Z] [BOT] 💾 Marked as posted: Technology Development Program (TECDP) - Artificial Intelligence @ ORG_b344d80e Cigna Group (instance #1)
[2026-01-16T17:27:04.425Z] [BOT] 💾 BEFORE ARCHIVING: 2027 jobs in database
[2026-01-16T17:27:04.427Z] [BOT] ✅ No jobs to archive (all 2027 jobs within 7-day window)
[2026-01-16T17:27:04.441Z] [BOT] 💾 Saved posted_jobs.json: 2027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:04.442Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_961a6062
[2026-01-16T17:27:04.442Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T17:27:04.833Z] [BOT] ✅ Created forum post: 💳 Software Engineer @ ORG_961a6062 in #💻・tech-jobs
[2026-01-16T17:27:04.834Z] [BOT] ✅ Industry: Software Engineer @ ORG_961a6062
[2026-01-16T17:27:06.817Z] [BOT] ✅ Created forum post: 💳 Software Engineer @ ORG_961a6062 in #🌉・san-francisco
[2026-01-16T17:27:06.817Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T17:27:08.318Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_961a6062 (instance #1)
[2026-01-16T17:27:08.319Z] [BOT] 💾 BEFORE ARCHIVING: 2028 jobs in database
[2026-01-16T17:27:08.320Z] [BOT] ✅ No jobs to archive (all 2028 jobs within 7-day window)
[2026-01-16T17:27:08.333Z] [BOT] 💾 Saved posted_jobs.json: 2028 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:08.334Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-01-16T17:27:08.334Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T17:27:08.509Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-01-16T17:27:10.212Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T17:27:11.713Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7b717950 (instance #1)
[2026-01-16T17:27:11.714Z] [BOT] 💾 BEFORE ARCHIVING: 2029 jobs in database
[2026-01-16T17:27:11.715Z] [BOT] ✅ No jobs to archive (all 2029 jobs within 7-day window)
[2026-01-16T17:27:11.729Z] [BOT] 💾 Saved posted_jobs.json: 2029 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:14.730Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-16T17:27:14.731Z] [BOT] 📍 [ROUTING] "Government Contracts Strategist" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T17:27:15.054Z] [BOT] ✅ Created forum post: 🏢 Government Contracts Strategist @ nominal in #🤖・ai-jobs
  ✅ Industry: Government Contracts Strategist @ nominal
[2026-01-16T17:27:16.558Z] [BOT] 💾 Marked as posted: Government Contracts Strategist @ nominal (instance #1)
[2026-01-16T17:27:16.558Z] [BOT] 💾 BEFORE ARCHIVING: 2030 jobs in database
[2026-01-16T17:27:16.559Z] [BOT] ✅ No jobs to archive (all 2030 jobs within 7-day window)
[2026-01-16T17:27:16.572Z] [BOT] 💾 Saved posted_jobs.json: 2030 active jobs
[2026-01-16T17:27:16.573Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:16.573Z] [BOT] 📍 [ROUTING] "Associate AI Engineer" @ T-Mobile
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T17:27:16.795Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ T-Mobile in #🤖・ai-jobs
[2026-01-16T17:27:16.795Z] [BOT] ✅ Industry: Associate AI Engineer @ T-Mobile
[2026-01-16T17:27:18.505Z] [BOT] ✅ Created forum post: 🏢 Associate AI Engineer @ T-Mobile in #🌧️・seattle
[2026-01-16T17:27:18.506Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T17:27:20.007Z] [BOT] 💾 Marked as posted: Associate AI Engineer @ T-Mobile (instance #1)
[2026-01-16T17:27:20.007Z] [BOT] 💾 BEFORE ARCHIVING: 2031 jobs in database
[2026-01-16T17:27:20.008Z] [BOT] ✅ No jobs to archive (all 2031 jobs within 7-day window)
[2026-01-16T17:27:20.022Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
[2026-01-16T17:27:20.022Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T17:27:20.023Z] [BOT] 📍 [ROUTING] "Software Engineer – University Grad" @ ORG_30b5b45b
[2026-01-16T17:27:20.023Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T17:27:20.160Z] [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – University Grad @ Glean',
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
[2026-01-16T17:27:20.160Z] [BOT] ❌ Industry post failed: Software Engineer – University Grad
⚠️  Channel full error count: 1/5
[2026-01-16T17:27:21.813Z] [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – University Grad @ Glean',
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
[2026-01-16T17:27:21.813Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T17:27:23.313Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_7a332bb8
   Category: AI (matched: "AI/ML")
[2026-01-16T17:27:23.314Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T17:27:23.461Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Ivo',
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
[2026-01-16T17:27:23.462Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-16T17:27:25.089Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Ivo',
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
[2026-01-16T17:27:25.089Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T17:27:29.589Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T17:27:29.590Z] [BOT] 📍 [ROUTING] "Head of Databases" @ supabase
[2026-01-16T17:27:29.590Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T17:27:29.725Z] [BOT ERROR] ❌ Error posting job Head of Databases: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Databases @ supabase',
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
[2026-01-16T17:27:29.725Z] [BOT] ❌ Industry post failed: Head of Databases
⚠️  Channel full error count: 3/5
[2026-01-16T17:27:34.228Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_b4a39376 (posted within 7 days)
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_9f81c82f (posted within 7 days)
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_be4d6e94-2026_25011438-1 (posted within 7 days)
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_ad2d598d-engineer_req329843-1 (posted within 7 days)
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_b4c2b9c8 (posted within 7 days)
[2026-01-16T17:27:34.229Z] [BOT] ⏭️  Skipping duplicate: JID_376a49f3 (posted within 7 days)
[2026-01-16T17:27:34.348Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-16T17:27:34.525Z] [BOT] ✅ Saved pending queue: 2771 total (2751 pending, 14 enriched, 6 posted)
[2026-01-16T17:27:34.526Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T17:27:34.584Z] [BOT] 📂 Loaded 4245 existing routing entries
[2026-01-16T17:27:34.650Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T17:27:34.650Z] [BOT] Total entries: 4255
   Timestamp: 2026-01-16T17:27:34.632Z
[2026-01-16T17:27:34.651Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 18
[2026-01-16T17:27:34.651Z] [BOT] Successful: 11
   Failed: 7
   Skipped: 0
[2026-01-16T17:27:34.651Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T17:27:34.651Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-16T17:27:34.651Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🗽・new-york: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-16T17:27:34.651Z] [BOT] [STATS] Channel stats saved
[2026-01-16T17:27:36.675Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – University Grad
- [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Head of Databases: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Databases
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*