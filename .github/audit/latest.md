# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T08:08:03.397Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T08:07:07.834Z] ========================================
[2026-01-14T08:07:07.835Z] Discord Bot Execution Log
[2026-01-14T08:07:07.835Z] Environment: GitHub Actions
[2026-01-14T08:07:07.835Z] Node Version: v20.19.6
[2026-01-14T08:07:07.835Z] ========================================
[2026-01-14T08:07:07.835Z] Environment Variables Check:
[2026-01-14T08:07:07.835Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T08:07:07.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T08:07:07.836Z] 
Multi-Channel Configuration:
[2026-01-14T08:07:07.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T08:07:07.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T08:07:07.837Z] 
Data Files Check:
[2026-01-14T08:07:07.837Z] .github/data/new_jobs.json: ✅ Exists (10 items, 75850 bytes)
[2026-01-14T08:07:07.842Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 702458 bytes)
[2026-01-14T08:07:07.843Z] 
========================================
[2026-01-14T08:07:07.843Z] Starting Enhanced Discord Bot...
[2026-01-14T08:07:07.843Z] ========================================
[2026-01-14T08:07:08.298Z] [BOT] ✅ Loaded V2 database: 1323 jobs
[2026-01-14T08:07:09.159Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T08:07:09.160Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T08:07:09.160Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T08:07:09.312Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Report Developer at Lineage Logistics
[2026-01-14T08:07:09.313Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T08:07:09.313Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T08:07:09.313Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T08:07:09.314Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T08:07:09.315Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T08:07:09.318Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T08:07:09.319Z] [BOT] 📍 [ROUTING] "Associate Report Developer" @ ORG_044baaec Logistics
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:09.335Z] [BOT ERROR] (node:2933) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T08:07:09.486Z] [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Report Developer @ ORG_044baaec Logistics',
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
[2026-01-14T08:07:09.486Z] [BOT] ❌ Industry post failed: Associate Report Developer
⚠️  Channel full error count: 1/5
[2026-01-14T08:07:11.123Z] [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Report Developer @ ORG_044baaec Logistics',
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
[2026-01-14T08:07:11.124Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T08:07:12.626Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Warehouse" @ ORG_af20d304
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:12.778Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Data Warehouse @ Amplitude',
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
[2026-01-14T08:07:12.778Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Data Warehouse
⚠️  Channel full error count: 2/5
[2026-01-14T08:07:15.165Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Data Warehouse @ ORG_af20d304 in #🌉・san-francisco
[2026-01-14T08:07:15.166Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:16.667Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Data Warehouse @ ORG_af20d304 (instance #1)
[2026-01-14T08:07:16.667Z] [BOT] 💾 BEFORE ARCHIVING: 1324 jobs in database
[2026-01-14T08:07:16.668Z] [BOT] ✅ No jobs to archive (all 1324 jobs within 7-day window)
[2026-01-14T08:07:16.680Z] [BOT] 💾 Saved posted_jobs.json: 1324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:16.680Z] [BOT] 📍 [ROUTING] "Associate – Data Cloud Solutions" @ ORG_f0ac255c Global
   Category: TECH (matched: "data")
[2026-01-14T08:07:16.680Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:16.937Z] [BOT] ✅ Created forum post: 🏢 Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #💻・tech-jobs
[2026-01-14T08:07:16.937Z] [BOT] ✅ Industry: Associate – Data Cloud Solutions @ ORG_f0ac255c Global
[2026-01-14T08:07:18.666Z] [BOT] ✅ Created forum post: 🏢 Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #💻・remote-usa
[2026-01-14T08:07:18.666Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T08:07:20.167Z] [BOT] 💾 Marked as posted: Associate – Data Cloud Solutions @ ORG_f0ac255c Global (instance #1)
[2026-01-14T08:07:20.167Z] [BOT] 💾 BEFORE ARCHIVING: 1325 jobs in database
[2026-01-14T08:07:20.169Z] [BOT] ✅ No jobs to archive (all 1325 jobs within 7-day window)
[2026-01-14T08:07:20.179Z] [BOT] 💾 Saved posted_jobs.json: 1325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:20.180Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_44c4dab8
   Category: TECH (matched: "software")
[2026-01-14T08:07:20.180Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:20.372Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_44c4dab8 in #💻・tech-jobs
[2026-01-14T08:07:20.372Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_44c4dab8
[2026-01-14T08:07:22.095Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_44c4dab8 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:23.596Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_44c4dab8 (instance #1)
[2026-01-14T08:07:23.596Z] [BOT] 💾 BEFORE ARCHIVING: 1326 jobs in database
[2026-01-14T08:07:23.598Z] [BOT] ✅ No jobs to archive (all 1326 jobs within 7-day window)
[2026-01-14T08:07:23.607Z] [BOT] 💾 Saved posted_jobs.json: 1326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:23.607Z] [BOT] 📍 [ROUTING] "Software Engineer Full Stack & Application Development 1" @ ORG_aa669b28
   Category: TECH (matched: "software")
[2026-01-14T08:07:23.607Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:23.933Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28
[2026-01-14T08:07:25.633Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:27.134Z] [BOT] 💾 Marked as posted: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 (instance #1)
[2026-01-14T08:07:27.134Z] [BOT] 💾 BEFORE ARCHIVING: 1327 jobs in database
[2026-01-14T08:07:27.135Z] [BOT] ✅ No jobs to archive (all 1327 jobs within 7-day window)
[2026-01-14T08:07:27.144Z] [BOT] 💾 Saved posted_jobs.json: 1327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:27.144Z] [BOT] 📍 [ROUTING] "Manager, Software Engineering - Billing" @ figma
[2026-01-14T08:07:27.144Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:07:27.410Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Billing @ figma in #💻・tech-jobs
[2026-01-14T08:07:27.411Z] [BOT] ✅ Industry: Manager, Software Engineering - Billing @ figma
[2026-01-14T08:07:29.176Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Billing @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:30.677Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Billing @ figma (instance #1)
[2026-01-14T08:07:30.677Z] [BOT] 💾 BEFORE ARCHIVING: 1328 jobs in database
[2026-01-14T08:07:30.678Z] [BOT] ✅ No jobs to archive (all 1328 jobs within 7-day window)
[2026-01-14T08:07:30.687Z] [BOT] 💾 Saved posted_jobs.json: 1328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:33.689Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T08:07:33.689Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_7f1f7a12
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T08:07:33.926Z] [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst @ Magna',
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
[2026-01-14T08:07:33.926Z] [BOT] ❌ Industry post failed: Data Analyst
⚠️  Channel full error count: 1/5
[2026-01-14T08:07:35.577Z] [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst @ Magna',
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
[2026-01-14T08:07:35.577Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T08:07:40.078Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T08:07:40.079Z] [BOT] 📍 [ROUTING] "Director, Global Payments Strategy and Operations" @ discord
[2026-01-14T08:07:40.079Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T08:07:40.325Z] [BOT] ✅ Created forum post: 🏢 Director, Global Payments Strategy and Operations @ discord in #💲・sales-jobs
  ✅ Industry: Director, Global Payments Strategy and Operations @ discord
[2026-01-14T08:07:42.043Z] [BOT] ✅ Created forum post: 🏢 Director, Global Payments Strategy and Operations @ discord in #🌉・san-francisco
[2026-01-14T08:07:42.043Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:43.544Z] [BOT] 💾 Marked as posted: Director, Global Payments Strategy and Operations @ discord (instance #1)
[2026-01-14T08:07:43.545Z] [BOT] 💾 BEFORE ARCHIVING: 1329 jobs in database
[2026-01-14T08:07:43.546Z] [BOT] ✅ No jobs to archive (all 1329 jobs within 7-day window)
[2026-01-14T08:07:43.554Z] [BOT] 💾 Saved posted_jobs.json: 1329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:46.555Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T08:07:46.555Z] [BOT] 📍 [ROUTING] "Software Developer - Leadership Development Program - Uniondale" @ ORG_49d0893a Group
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:07:46.555Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T08:07:46.943Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #🤖・ai-jobs
  ✅ Industry: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group
[2026-01-14T08:07:48.693Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T08:07:50.193Z] [BOT] 💾 Marked as posted: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group (instance #1)
💾 BEFORE ARCHIVING: 1330 jobs in database
[2026-01-14T08:07:50.195Z] [BOT] ✅ No jobs to archive (all 1330 jobs within 7-day window)
[2026-01-14T08:07:50.203Z] [BOT] 💾 Saved posted_jobs.json: 1330 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:53.204Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T08:07:53.204Z] [BOT] 📍 [ROUTING] "Lifecycle Marketing Manager" @ vercel
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T08:07:53.486Z] [BOT] ✅ Created forum post: 🏢 Lifecycle Marketing Manager @ vercel in #📣・marketing-jobs
[2026-01-14T08:07:53.487Z] [BOT] ✅ Industry: Lifecycle Marketing Manager @ vercel
[2026-01-14T08:07:55.278Z] [BOT] ✅ Created forum post: 🏢 Lifecycle Marketing Manager @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T08:07:56.779Z] [BOT] 💾 Marked as posted: Lifecycle Marketing Manager @ vercel (instance #1)
💾 BEFORE ARCHIVING: 1331 jobs in database
[2026-01-14T08:07:56.781Z] [BOT] ✅ No jobs to archive (all 1331 jobs within 7-day window)
[2026-01-14T08:07:56.791Z] [BOT] 💾 Saved posted_jobs.json: 1331 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:07:59.791Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-14T08:07:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_4b752833 (posted within 7 days)
[2026-01-14T08:07:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_cea08a83 (posted within 7 days)
[2026-01-14T08:07:59.793Z] [BOT] ⏭️  Skipping duplicate: JID_c4f9a5a5 (posted within 7 days)
⏭️  Skipping duplicate: JID_cf16accc (posted within 7 days)
⏭️  Skipping duplicate: JID_5e8b2684 (posted within 7 days)
⏭️  Skipping duplicate: JID_60c63ce8 (posted within 7 days)
⏭️  Skipping duplicate: JID_8daed847 (posted within 7 days)
⏭️  Skipping duplicate: JID_9c3b8732 (posted within 7 days)
[2026-01-14T08:07:59.944Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-14T08:08:00.112Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T08:08:00.170Z] [BOT] 📂 Loaded 3445 existing routing entries
[2026-01-14T08:08:00.227Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3455
   Timestamp: 2026-01-14T08:08:00.216Z
[2026-01-14T08:08:00.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T08:08:00.228Z] [BOT] Successful: 15
   Failed: 5
   Skipped: 0
[2026-01-14T08:08:00.228Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 7
[2026-01-14T08:08:00.228Z] [BOT] Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #💻・remote-usa: 1 posts
[2026-01-14T08:08:00.228Z] [BOT] 4. #💲・sales-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-14T08:08:00.228Z] [BOT] [STATS] Channel stats saved
[2026-01-14T08:08:02.248Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2933) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Report Developer
- [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Data Warehouse
- [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst
- [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*