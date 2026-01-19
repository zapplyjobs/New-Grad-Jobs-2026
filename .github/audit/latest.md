# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T15:47:27.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T15:46:54.651Z] ========================================
[2026-01-19T15:46:54.653Z] Discord Bot Execution Log
[2026-01-19T15:46:54.653Z] Environment: GitHub Actions
[2026-01-19T15:46:54.653Z] Node Version: v20.19.6
[2026-01-19T15:46:54.653Z] ========================================
[2026-01-19T15:46:54.653Z] Environment Variables Check:
[2026-01-19T15:46:54.653Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T15:46:54.653Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.653Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T15:46:54.653Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T15:46:54.654Z] 
Multi-Channel Configuration:
[2026-01-19T15:46:54.654Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T15:46:54.654Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T15:46:54.654Z] 
Data Files Check:
[2026-01-19T15:46:54.655Z] .github/data/new_jobs.json: ✅ Exists (10 items, 88944 bytes)
[2026-01-19T15:46:54.667Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1611709 bytes)
[2026-01-19T15:46:54.667Z] 
========================================
[2026-01-19T15:46:54.667Z] Starting Enhanced Discord Bot...
[2026-01-19T15:46:54.667Z] ========================================
[2026-01-19T15:46:55.161Z] [BOT] ✅ Loaded V2 database: 2964 jobs
[2026-01-19T15:46:56.083Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T15:46:56.084Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T15:46:56.084Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T15:46:56.247Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-19T15:46:56.251Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T15:46:56.251Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T15:46:56.252Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T15:46:56.252Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-19T15:46:56.253Z] [BOT] 📍 2 jobs with multiple locations:
   - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: waukegan, cambridge
[2026-01-19T15:46:56.253Z] [BOT] - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T15:46:56.257Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T15:46:56.257Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
   Category: MARKETING (matched: "marketing")
[2026-01-19T15:46:56.258Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T15:46:56.262Z] [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T15:46:56.408Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T15:46:56.409Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
⚠️  Channel full error count: 1/5
[2026-01-19T15:46:58.048Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T15:46:58.048Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T15:47:02.549Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T15:47:02.549Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
   Category: AI (matched: "AI specialization")
[2026-01-19T15:47:02.550Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch, nonTechMatch (using ai)
[2026-01-19T15:47:02.949Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-19T15:47:02.949Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-19T15:47:04.658Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T15:47:06.160Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-19T15:47:06.161Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-19T15:47:06.163Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T15:47:06.167Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-19T15:47:06.167Z] [BOT] ✅ Archiving complete: 2 archived, 2963 active
[2026-01-19T15:47:06.193Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T15:47:06.194Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-19T15:47:06.194Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-19T15:47:06.196Z] [BOT] ✅ No jobs to archive (all 2964 jobs within 7-day window)
[2026-01-19T15:47:06.216Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T15:47:06.217Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_b93825c5 Bank
   Category: AI (matched: "machine learning")
[2026-01-19T15:47:06.217Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T15:47:06.837Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_b93825c5 Bank in #🤖・ai-jobs
  ✅ Industry: Data Scientist 1 @ ORG_b93825c5 Bank
[2026-01-19T15:47:08.548Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_b93825c5 Bank in #💻・remote-usa
[2026-01-19T15:47:08.548Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T15:47:10.049Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_b93825c5 Bank (instance #1)
[2026-01-19T15:47:10.050Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-19T15:47:10.052Z] [BOT] ✅ No jobs to archive (all 2965 jobs within 7-day window)
[2026-01-19T15:47:10.070Z] [BOT] 💾 Saved posted_jobs.json: 2965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T15:47:10.071Z] [BOT] 📍 [ROUTING] "Data Labeling Specialist - Imagery" @ ORG_6c847a27 Power
   Category: AI (matched: "machine learning")
[2026-01-19T15:47:10.071Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T15:47:10.324Z] [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power',
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
[2026-01-19T15:47:10.324Z] [BOT] ❌ Industry post failed: Data Labeling Specialist - Imagery
⚠️  Channel full error count: 1/5
[2026-01-19T15:47:11.987Z] [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power',
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
[2026-01-19T15:47:11.988Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T15:47:16.488Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T15:47:16.489Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f5ed86b6
   Category: TECH (matched: "software")
[2026-01-19T15:47:16.489Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T15:47:16.694Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ BillionToOne',
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
[2026-01-19T15:47:16.694Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-19T15:47:18.400Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ BillionToOne',
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
[2026-01-19T15:47:18.400Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T15:47:19.902Z] [BOT] 📍 [ROUTING] "Integrations Engineer" @ ORG_8851aaa7
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T15:47:19.902Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T15:47:20.037Z] [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Integrations Engineer @ Merge',
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
[2026-01-19T15:47:20.037Z] [BOT] ❌ Industry post failed: Integrations Engineer
⚠️  Channel full error count: 3/5
[2026-01-19T15:47:21.679Z] [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Integrations Engineer @ Merge',
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
[2026-01-19T15:47:21.680Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T15:47:23.180Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Platform Test - Software Engineering" @ ORG_36b77757
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T15:47:23.311Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '📱 Software Engineer - Core Platform Test - Software Engineering @ Qualcomm',
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
[2026-01-19T15:47:23.311Z] [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
⚠️  Channel full error count: 4/5
[2026-01-19T15:47:24.975Z] [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '📱 Software Engineer - Core Platform Test - Software Engineering @ Qualcomm',
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
[2026-01-19T15:47:24.975Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T15:47:26.477Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
   Category: TECH (matched: "software")
[2026-01-19T15:47:26.477Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T15:47:26.626Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2 - Full Stack and Application Development @ Cisco',
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
[2026-01-19T15:47:26.627Z] [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T15:47:26.627Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 15
[2026-01-19T15:47:26.628Z] [BOT] Successful: 4
   Failed: 11
   Skipped: 0
[2026-01-19T15:47:26.628Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-19T15:47:26.628Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #🚌・boston: 1 posts
     3. #💻・remote-usa: 1 posts
[2026-01-19T15:47:26.628Z] [BOT] [STATS] Channel stats saved
[2026-01-19T15:47:26.628Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T15:47:26.640Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Labeling Specialist - Imagery
- [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Integrations Engineer
- [BOT ERROR] ❌ Error posting job Integrations Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Core Platform Test - Software Engineering
- [BOT ERROR] ❌ Error posting job Software Engineer - Core Platform Test - Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 2 - Full Stack and Application Development
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*