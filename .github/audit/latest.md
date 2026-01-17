# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T06:47:44.390Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T06:46:56.474Z] ========================================
[2026-01-17T06:46:56.476Z] Discord Bot Execution Log
[2026-01-17T06:46:56.476Z] Environment: GitHub Actions
[2026-01-17T06:46:56.476Z] Node Version: v20.19.6
[2026-01-17T06:46:56.476Z] ========================================
[2026-01-17T06:46:56.476Z] Environment Variables Check:
[2026-01-17T06:46:56.476Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T06:46:56.476Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.476Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T06:46:56.476Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T06:46:56.477Z] 
Multi-Channel Configuration:
[2026-01-17T06:46:56.477Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T06:46:56.477Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T06:46:56.477Z] 
Data Files Check:
[2026-01-17T06:46:56.478Z] .github/data/new_jobs.json: ✅ Exists (10 items, 19595 bytes)
[2026-01-17T06:46:56.487Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1241869 bytes)
[2026-01-17T06:46:56.487Z] 
========================================
[2026-01-17T06:46:56.487Z] Starting Enhanced Discord Bot...
[2026-01-17T06:46:56.487Z] ========================================
[2026-01-17T06:46:56.940Z] [BOT] ✅ Loaded V2 database: 2294 jobs
[2026-01-17T06:46:57.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T06:46:57.407Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T06:46:57.407Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T06:46:57.558Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer Graduate - E-commerce - 2026 Start at TikTok
[2026-01-17T06:46:57.561Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T06:46:57.561Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T06:46:57.562Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T06:46:57.562Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T06:46:57.562Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T06:46:57.565Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T06:46:57.566Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T06:46:57.566Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T06:46:57.582Z] [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T06:46:58.422Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb
[2026-01-17T06:47:00.097Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T06:47:01.598Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - E-commerce - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-17T06:47:01.598Z] [BOT] 💾 BEFORE ARCHIVING: 2295 jobs in database
[2026-01-17T06:47:01.599Z] [BOT] ✅ No jobs to archive (all 2295 jobs within 7-day window)
[2026-01-17T06:47:01.616Z] [BOT] 💾 Saved posted_jobs.json: 2295 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:04.617Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T06:47:04.618Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-17T06:47:04.618Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T06:47:04.872Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-17T06:47:04.872Z] [BOT] ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c
[2026-01-17T06:47:06.580Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T06:47:08.081Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c (instance #1)
[2026-01-17T06:47:08.081Z] [BOT] 💾 BEFORE ARCHIVING: 2296 jobs in database
[2026-01-17T06:47:08.082Z] [BOT] ✅ No jobs to archive (all 2296 jobs within 7-day window)
[2026-01-17T06:47:08.099Z] [BOT] 💾 Saved posted_jobs.json: 2296 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:08.101Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Water Systems - Ml" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "machine learning")
[2026-01-17T06:47:08.101Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T06:47:08.324Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2026-01-17T06:47:08.324Z] [BOT] ✅ Industry: Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin
[2026-01-17T06:47:09.999Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-17T06:47:09.999Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T06:47:11.499Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-17T06:47:11.500Z] [BOT] 💾 BEFORE ARCHIVING: 2297 jobs in database
[2026-01-17T06:47:11.501Z] [BOT] ✅ No jobs to archive (all 2297 jobs within 7-day window)
[2026-01-17T06:47:11.516Z] [BOT] 💾 Saved posted_jobs.json: 2297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:11.517Z] [BOT] 📍 [ROUTING] "Data Operations Specialist - GenAI Annotation" @ ORG_0b3f1c03inable Talent
[2026-01-17T06:47:11.517Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T06:47:11.755Z] [BOT] ✅ Created forum post: 🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent in #🤖・ai-jobs
[2026-01-17T06:47:11.756Z] [BOT] ✅ Industry: Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent
[2026-01-17T06:47:13.444Z] [BOT] ✅ Created forum post: 🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T06:47:14.945Z] [BOT] 💾 Marked as posted: Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent (instance #1)
[2026-01-17T06:47:14.945Z] [BOT] 💾 BEFORE ARCHIVING: 2298 jobs in database
[2026-01-17T06:47:14.947Z] [BOT] ✅ No jobs to archive (all 2298 jobs within 7-day window)
[2026-01-17T06:47:14.960Z] [BOT] 💾 Saved posted_jobs.json: 2298 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:14.961Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_64923ce3
   Category: AI (matched: "AI/ML")
[2026-01-17T06:47:14.961Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T06:47:15.401Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_64923ce3 in #🤖・ai-jobs
[2026-01-17T06:47:15.401Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_64923ce3
[2026-01-17T06:47:17.068Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_64923ce3 in #🌉・san-francisco
[2026-01-17T06:47:17.068Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T06:47:18.569Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_64923ce3 (instance #1)
[2026-01-17T06:47:18.569Z] [BOT] 💾 BEFORE ARCHIVING: 2299 jobs in database
[2026-01-17T06:47:18.571Z] [BOT] ✅ No jobs to archive (all 2299 jobs within 7-day window)
[2026-01-17T06:47:18.584Z] [BOT] 💾 Saved posted_jobs.json: 2299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:21.586Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-17T06:47:21.586Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6ab523c5 Rings
[2026-01-17T06:47:21.586Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:47:21.781Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6ab523c5 Rings in #💻・tech-jobs
[2026-01-17T06:47:21.781Z] [BOT] ✅ Industry: Software Developer @ ORG_6ab523c5 Rings
[2026-01-17T06:47:23.477Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6ab523c5 Rings in #🗽・new-york
[2026-01-17T06:47:23.477Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T06:47:24.977Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_6ab523c5 Rings (instance #1)
[2026-01-17T06:47:24.977Z] [BOT] 💾 BEFORE ARCHIVING: 2300 jobs in database
[2026-01-17T06:47:24.979Z] [BOT] ✅ No jobs to archive (all 2300 jobs within 7-day window)
[2026-01-17T06:47:24.996Z] [BOT] 💾 Saved posted_jobs.json: 2300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:24.996Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_eb0050f7
[2026-01-17T06:47:24.996Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:47:25.290Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_eb0050f7 in #💻・tech-jobs
[2026-01-17T06:47:25.290Z] [BOT] ✅ Industry: Software Engineer - New Grad @ ORG_eb0050f7
[2026-01-17T06:47:26.903Z] [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - New Grad @ Reddit',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-17T06:47:26.903Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-17T06:47:28.403Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_eb0050f7 (instance #1)
[2026-01-17T06:47:28.404Z] [BOT] 💾 BEFORE ARCHIVING: 2301 jobs in database
[2026-01-17T06:47:28.405Z] [BOT] ✅ No jobs to archive (all 2301 jobs within 7-day window)
[2026-01-17T06:47:28.419Z] [BOT] 💾 Saved posted_jobs.json: 2301 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:47:28.419Z] [BOT] 📍 [ROUTING] "AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd" @ ORG_08c9a13c
[2026-01-17T06:47:28.419Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:47:28.537Z] [BOT ERROR] ❌ Error posting job AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ByteDance',
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
[2026-01-17T06:47:28.537Z] [BOT] ❌ Industry post failed: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd
⚠️  Channel full error count: 1/5
[2026-01-17T06:47:30.141Z] [BOT ERROR] ❌ Error posting job AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ByteDance',
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
[2026-01-17T06:47:30.141Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T06:47:31.641Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Modeling & Simulation" @ ORG_528ee40d
[2026-01-17T06:47:31.641Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:47:31.781Z] [BOT ERROR] ❌ Error posting job Junior Software Developer - Modeling & Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Developer - Modeling & Simulation @ SimIS',
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
[2026-01-17T06:47:31.781Z] [BOT] ❌ Industry post failed: Junior Software Developer - Modeling & Simulation
⚠️  Channel full error count: 2/5
[2026-01-17T06:47:33.417Z] [BOT ERROR] ❌ Error posting job Junior Software Developer - Modeling & Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Developer - Modeling & Simulation @ SimIS',
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
[2026-01-17T06:47:33.418Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T06:47:34.919Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Security-US" @ ORG_08c9a13c
[2026-01-17T06:47:34.919Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:47:35.041Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Security-US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Data Security-US @ ByteDance',
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
[2026-01-17T06:47:35.041Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Security-US
⚠️  Channel full error count: 3/5
[2026-01-17T06:47:36.661Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Security-US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Data Security-US @ ByteDance',
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
[2026-01-17T06:47:36.661Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T06:47:41.162Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a77f3e49 (posted within 7 days)
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_eae81305-detail (posted within 7 days)
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_9735a76a-_r_00041178-1 (posted within 7 days)
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_586e44dd (posted within 7 days)
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_dac17d8d (posted within 7 days)
[2026-01-17T06:47:41.163Z] [BOT] ⏭️  Skipping duplicate: JID_3e7f280d (posted within 7 days)
[2026-01-17T06:47:41.164Z] [BOT] ⏭️  Skipping duplicate: JID_ea106f03 (posted within 7 days)
[2026-01-17T06:47:41.323Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[2026-01-17T06:47:41.502Z] [BOT] ✅ Saved pending queue: 2883 total (2863 pending, 13 enriched, 7 posted)
[2026-01-17T06:47:41.502Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T06:47:41.564Z] [BOT] 📂 Loaded 4505 existing routing entries
[2026-01-17T06:47:41.627Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4515
   Timestamp: 2026-01-17T06:47:41.611Z
[2026-01-17T06:47:41.627Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T06:47:41.628Z] [BOT] Total attempts: 20
   Successful: 13
   Failed: 7
   Skipped: 0
[2026-01-17T06:47:41.628Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
[2026-01-17T06:47:41.628Z] [BOT] Channels used: 7
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #🌧️・seattle: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-17T06:47:43.646Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd
- [BOT ERROR] ❌ Error posting job AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Junior Software Developer - Modeling & Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software Developer - Modeling & Simulation
- [BOT ERROR] ❌ Error posting job Junior Software Developer - Modeling & Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Security-US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Security-US
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Security-US: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*