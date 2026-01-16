# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T18:49:43.942Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T18:48:53.205Z] ========================================
[2026-01-16T18:48:53.207Z] Discord Bot Execution Log
[2026-01-16T18:48:53.207Z] Environment: GitHub Actions
[2026-01-16T18:48:53.207Z] Node Version: v20.19.6
[2026-01-16T18:48:53.207Z] ========================================
[2026-01-16T18:48:53.207Z] Environment Variables Check:
[2026-01-16T18:48:53.207Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T18:48:53.207Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.207Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T18:48:53.208Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T18:48:53.208Z] 
Multi-Channel Configuration:
[2026-01-16T18:48:53.208Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T18:48:53.208Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T18:48:53.208Z] 
Data Files Check:
[2026-01-16T18:48:53.209Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42666 bytes)
[2026-01-16T18:48:53.217Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1099498 bytes)
[2026-01-16T18:48:53.217Z] 
========================================
[2026-01-16T18:48:53.217Z] Starting Enhanced Discord Bot...
[2026-01-16T18:48:53.217Z] ========================================
[2026-01-16T18:48:53.766Z] [BOT] ✅ Loaded V2 database: 2037 jobs
[2026-01-16T18:48:54.403Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T18:48:54.403Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T18:48:54.403Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T18:48:54.516Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Digital Engineering Rotational Aspire at American Bureau of Shipping
[2026-01-16T18:48:54.519Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T18:48:54.520Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T18:48:54.520Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T18:48:54.521Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T18:48:54.521Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T18:48:54.521Z] [BOT] - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T18:48:54.526Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T18:48:54.527Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-16T18:48:54.527Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2026-01-16T18:48:54.527Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:48:54.544Z] [BOT ERROR] (node:3249) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T18:48:54.915Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T18:48:54.915Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 1/5
[2026-01-16T18:48:56.567Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T18:48:56.567Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T18:48:58.068Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_961a6062
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:48:58.380Z] [BOT] ✅ Created forum post: 💳 Software Engineer – New Grad @ ORG_961a6062 in #💻・tech-jobs
[2026-01-16T18:48:58.380Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_961a6062
[2026-01-16T18:49:00.198Z] [BOT] ✅ Created forum post: 💳 Software Engineer – New Grad @ ORG_961a6062 in #🌧️・seattle
[2026-01-16T18:49:00.198Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T18:49:01.700Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_961a6062 (instance #1)
[2026-01-16T18:49:01.700Z] [BOT] 💾 BEFORE ARCHIVING: 2038 jobs in database
[2026-01-16T18:49:01.702Z] [BOT] ✅ No jobs to archive (all 2038 jobs within 7-day window)
[2026-01-16T18:49:01.722Z] [BOT] 💾 Saved posted_jobs.json: 2038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:01.723Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
[2026-01-16T18:49:01.723Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:49:01.955Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-16T18:49:01.955Z] [BOT] ✅ Industry: Software Engineer @ ORG_afd623b1
[2026-01-16T18:49:03.802Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T18:49:05.303Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_afd623b1 (instance #1)
[2026-01-16T18:49:05.303Z] [BOT] 💾 BEFORE ARCHIVING: 2039 jobs in database
[2026-01-16T18:49:05.305Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-01-16T18:49:05.321Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:05.322Z] [BOT] 📍 [ROUTING] "F-22 Pilot Training Entry-Level Software Engineer – Simulation" @ ORG_6181447bing
[2026-01-16T18:49:05.322Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:49:05.578Z] [BOT] ✅ Created forum post: 🏢 F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing in #💻・tech-jobs
  ✅ Industry: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing
[2026-01-16T18:49:07.435Z] [BOT] ✅ Created forum post: 🏢 F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T18:49:08.936Z] [BOT] 💾 Marked as posted: F-22 Pilot Training Entry-Level Software Engineer – Simulation @ ORG_6181447bing (instance #1)
[2026-01-16T18:49:08.936Z] [BOT] 💾 BEFORE ARCHIVING: 2040 jobs in database
[2026-01-16T18:49:08.938Z] [BOT] ✅ No jobs to archive (all 2040 jobs within 7-day window)
[2026-01-16T18:49:08.952Z] [BOT] 💾 Saved posted_jobs.json: 2040 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:08.953Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5b5fea64
   Category: TECH (matched: "software")
[2026-01-16T18:49:08.953Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:49:09.153Z] [BOT] ✅ Created forum post: 📊 Software Engineer @ ORG_5b5fea64 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_5b5fea64
[2026-01-16T18:49:10.911Z] [BOT] ✅ Created forum post: 📊 Software Engineer @ ORG_5b5fea64 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T18:49:12.412Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_5b5fea64 (instance #1)
[2026-01-16T18:49:12.412Z] [BOT] 💾 BEFORE ARCHIVING: 2041 jobs in database
[2026-01-16T18:49:12.413Z] [BOT] ✅ No jobs to archive (all 2041 jobs within 7-day window)
[2026-01-16T18:49:12.425Z] [BOT] 💾 Saved posted_jobs.json: 2041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:12.426Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:49:12.959Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2026-01-16T18:49:12.959Z] [BOT] ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2026-01-16T18:49:14.641Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・remote-usa
[2026-01-16T18:49:14.641Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T18:49:16.142Z] [BOT] 💾 Marked as posted: Associate Software Development Engineer @ ORG_6bda74c9 Health (instance #1)
[2026-01-16T18:49:16.142Z] [BOT] 💾 BEFORE ARCHIVING: 2042 jobs in database
[2026-01-16T18:49:16.143Z] [BOT] ✅ No jobs to archive (all 2042 jobs within 7-day window)
[2026-01-16T18:49:16.157Z] [BOT] 💾 Saved posted_jobs.json: 2042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:19.157Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T18:49:19.158Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Agent" @ ORG_d5eef8ad
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T18:49:19.158Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T18:49:19.383Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad - Agent @ ORG_d5eef8ad
[2026-01-16T18:49:21.147Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T18:49:22.648Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Agent @ ORG_d5eef8ad (instance #1)
[2026-01-16T18:49:22.649Z] [BOT] 💾 BEFORE ARCHIVING: 2043 jobs in database
[2026-01-16T18:49:22.650Z] [BOT] ✅ No jobs to archive (all 2043 jobs within 7-day window)
[2026-01-16T18:49:22.665Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
[2026-01-16T18:49:22.665Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Machine Learning Engineer – New Grad" @ ORG_931a39c9
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T18:49:22.666Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T18:49:23.091Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – New Grad @ ORG_931a39c9 in #🤖・ai-jobs
[2026-01-16T18:49:23.091Z] [BOT] ✅ Industry: Machine Learning Engineer – New Grad @ ORG_931a39c9
[2026-01-16T18:49:24.721Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer – New Grad @ Netic',
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
[2026-01-16T18:49:24.721Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T18:49:26.222Z] [BOT] 💾 Marked as posted: Machine Learning Engineer – New Grad @ ORG_931a39c9 (instance #1)
[2026-01-16T18:49:26.222Z] [BOT] 💾 BEFORE ARCHIVING: 2044 jobs in database
[2026-01-16T18:49:26.224Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-01-16T18:49:26.238Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:49:29.238Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-16T18:49:29.239Z] [BOT] 📍 [ROUTING] "Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe" @ ORG_31ce6e79 Turbines
[2026-01-16T18:49:29.239Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-16T18:49:29.425Z] [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-16T18:49:29.426Z] [BOT] ❌ Industry post failed: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe
⚠️  Channel full error count: 1/5
[2026-01-16T18:49:31.061Z] [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines',
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
[2026-01-16T18:49:31.061Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T18:49:35.563Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T18:49:35.563Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-01-16T18:49:35.563Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T18:49:35.728Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Solution Architect (EMEA) @ supabase',
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
[2026-01-16T18:49:35.728Z] [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
⚠️  Channel full error count: 2/5
[2026-01-16T18:49:40.231Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-16T18:49:40.231Z] [BOT] ⏭️  Skipping duplicate: JID_bcb83e1f (posted within 7 days)
[2026-01-16T18:49:40.231Z] [BOT] ⏭️  Skipping duplicate: JID_1fc4090d (posted within 7 days)
[2026-01-16T18:49:40.232Z] [BOT] ⏭️  Skipping duplicate: JID_bb1d3179-external_careers-JID_2bcb1c43-simulation_jr2025457113-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_2d74207a (posted within 7 days)
[2026-01-16T18:49:40.232Z] [BOT] ⏭️  Skipping duplicate: JID_8cdfe60a (posted within 7 days)
[2026-01-16T18:49:40.232Z] [BOT] ⏭️  Skipping duplicate: JID_8eccd242 (posted within 7 days)
[2026-01-16T18:49:40.232Z] [BOT] ⏭️  Skipping duplicate: JID_b2951129-cvs_health_careers-JID_9262b276-engineer_r0699201-1 (posted within 7 days)
[2026-01-16T18:49:40.344Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[2026-01-16T18:49:40.520Z] [BOT] ✅ Saved pending queue: 2777 total (2757 pending, 13 enriched, 7 posted)
[2026-01-16T18:49:40.520Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T18:49:40.578Z] [BOT] 📂 Loaded 4265 existing routing entries
[2026-01-16T18:49:40.645Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4275
   Timestamp: 2026-01-16T18:49:40.626Z
[2026-01-16T18:49:40.646Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T18:49:40.646Z] [BOT] Total attempts: 19
   Successful: 13
   Failed: 6
   Skipped: 0
[2026-01-16T18:49:40.646Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T18:49:40.646Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-16T18:49:40.646Z] [BOT] 2. #🌧️・seattle: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-16T18:49:40.646Z] [BOT] [STATS] Channel stats saved
[2026-01-16T18:49:42.671Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3249) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe
- [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*