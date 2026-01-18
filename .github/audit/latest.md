# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T21:41:32.381Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T21:40:39.119Z] ========================================
[2026-01-18T21:40:39.121Z] Discord Bot Execution Log
[2026-01-18T21:40:39.121Z] Environment: GitHub Actions
[2026-01-18T21:40:39.121Z] Node Version: v20.19.6
[2026-01-18T21:40:39.122Z] ========================================
[2026-01-18T21:40:39.122Z] Environment Variables Check:
[2026-01-18T21:40:39.122Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T21:40:39.122Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T21:40:39.122Z] 
Multi-Channel Configuration:
[2026-01-18T21:40:39.122Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.122Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.123Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.123Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.123Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T21:40:39.123Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T21:40:39.123Z] 
Data Files Check:
[2026-01-18T21:40:39.124Z] .github/data/new_jobs.json: ✅ Exists (10 items, 71972 bytes)
[2026-01-18T21:40:39.134Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1491253 bytes)
[2026-01-18T21:40:39.134Z] 
========================================
[2026-01-18T21:40:39.134Z] Starting Enhanced Discord Bot...
[2026-01-18T21:40:39.134Z] ========================================
[2026-01-18T21:40:39.671Z] [BOT] ✅ Loaded V2 database: 2748 jobs
[2026-01-18T21:40:40.285Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T21:40:40.285Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T21:40:40.286Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T21:40:40.402Z] [BOT] ✅ Loaded pending queue: 2840 total (2820 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Trust Lead at anthropic
[2026-01-18T21:40:40.407Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T21:40:40.407Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T21:40:40.407Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T21:40:40.408Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T21:40:40.408Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T21:40:40.413Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T21:40:40.413Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T21:40:40.413Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T21:40:40.418Z] [BOT ERROR] (node:3642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T21:40:40.615Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T21:40:40.615Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 1/5
[2026-01-18T21:40:42.489Z] [BOT] ✅ Created forum post: 🏢 Customer Trust Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T21:40:43.989Z] [BOT] 💾 Marked as posted: Customer Trust Lead @ anthropic (instance #1)
[2026-01-18T21:40:43.989Z] [BOT] 💾 BEFORE ARCHIVING: 2749 jobs in database
[2026-01-18T21:40:43.991Z] [BOT] ✅ No jobs to archive (all 2749 jobs within 7-day window)
[2026-01-18T21:40:44.011Z] [BOT] 💾 Saved posted_jobs.json: 2749 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:40:44.011Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Multiple Teams" @ ORG_9d38443e of Nevada Reno
[2026-01-18T21:40:44.011Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T21:40:44.196Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Multiple Teams @ ORG_9d38443e of Nevada Reno in #💲・sales-jobs
[2026-01-18T21:40:44.196Z] [BOT] ✅ Industry: Postdoctoral Scholar - Multiple Teams @ ORG_9d38443e of Nevada Reno
[2026-01-18T21:40:45.925Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Multiple Teams @ ORG_9d38443e of Nevada Reno in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T21:40:47.426Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Multiple Teams @ ORG_9d38443e of Nevada Reno (instance #1)
[2026-01-18T21:40:47.426Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-18T21:40:47.428Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-18T21:40:47.444Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:40:50.445Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T21:40:50.446Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Multiple Teams" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-18T21:40:50.446Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:40:50.658Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies
[2026-01-18T21:40:52.420Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-18T21:40:52.421Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T21:40:53.921Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-18T21:40:53.921Z] [BOT] 💾 BEFORE ARCHIVING: 2751 jobs in database
[2026-01-18T21:40:53.923Z] [BOT] ✅ No jobs to archive (all 2751 jobs within 7-day window)
[2026-01-18T21:40:53.944Z] [BOT] 💾 Saved posted_jobs.json: 2751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:40:53.945Z] [BOT] 📍 [ROUTING] "Engineering Associate - Application Modernization" @ ORG_332e04b7 Fargo
[2026-01-18T21:40:53.945Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:40:54.318Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Application Modernization @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Application Modernization @ ORG_332e04b7 Fargo
[2026-01-18T21:40:56.218Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Application Modernization @ ORG_332e04b7 Fargo in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T21:40:57.720Z] [BOT] 💾 Marked as posted: Engineering Associate - Application Modernization @ ORG_332e04b7 Fargo (instance #1)
[2026-01-18T21:40:57.720Z] [BOT] 💾 BEFORE ARCHIVING: 2752 jobs in database
[2026-01-18T21:40:57.722Z] [BOT] ✅ No jobs to archive (all 2752 jobs within 7-day window)
[2026-01-18T21:40:57.737Z] [BOT] 💾 Saved posted_jobs.json: 2752 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:40:57.738Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-18T21:40:57.738Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:40:58.322Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-18T21:41:00.075Z] [BOT] ✅ Created forum post: 💰 Software Engineer – Early Career @ ORG_07b9fafa in #🌆・chicago
[2026-01-18T21:41:00.075Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-18T21:41:01.577Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career @ ORG_07b9fafa (instance #1)
[2026-01-18T21:41:01.577Z] [BOT] 💾 BEFORE ARCHIVING: 2753 jobs in database
[2026-01-18T21:41:01.579Z] [BOT] ✅ No jobs to archive (all 2753 jobs within 7-day window)
[2026-01-18T21:41:01.597Z] [BOT] 💾 Saved posted_jobs.json: 2753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:41:04.598Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T21:41:04.598Z] [BOT] 📍 [ROUTING] "AI Engineer – New Grad - Materia" @ ORG_98d67bb4 Reuters
   Category: AI (matched: "artificial intelligence")
[2026-01-18T21:41:04.598Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:41:04.982Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters in #🤖・ai-jobs
  ✅ Industry: AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters
[2026-01-18T21:41:06.612Z] [BOT ERROR] ❌ Error posting job AI Engineer – New Grad - Materia: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters',
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
[2026-01-18T21:41:06.613Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T21:41:08.114Z] [BOT] 💾 Marked as posted: AI Engineer – New Grad - Materia @ ORG_98d67bb4 Reuters (instance #1)
[2026-01-18T21:41:08.114Z] [BOT] 💾 BEFORE ARCHIVING: 2754 jobs in database
[2026-01-18T21:41:08.116Z] [BOT] ✅ No jobs to archive (all 2754 jobs within 7-day window)
[2026-01-18T21:41:08.132Z] [BOT] 💾 Saved posted_jobs.json: 2754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:41:08.132Z] [BOT] 📍 [ROUTING] "Machine Learning Research Scientist - Hsu & Konermann Labs" @ ORG_7291b1b6 Institute
[2026-01-18T21:41:08.132Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:41:08.288Z] [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute',
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
[2026-01-18T21:41:08.288Z] [BOT] ❌ Industry post failed: Machine Learning Research Scientist - Hsu & Konermann Labs
⚠️  Channel full error count: 1/5
[2026-01-18T21:41:09.921Z] [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute',
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
[2026-01-18T21:41:09.921Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T21:41:14.422Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T21:41:14.422Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T21:41:14.587Z] [BOT ERROR] ❌ Error posting job Business Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Data Analyst @ ORG_9d38443e of Southern California',
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
[2026-01-18T21:41:14.588Z] [BOT] ❌ Industry post failed: Business Data Analyst
⚠️  Channel full error count: 2/5
[2026-01-18T21:41:16.089Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Product Analytics" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T21:41:16.089Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T21:41:16.223Z] [BOT ERROR] ❌ Error posting job Data Scientist Graduate - Product Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist Graduate - Product Analytics @ TikTok',
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
[2026-01-18T21:41:16.223Z] [BOT] ❌ Industry post failed: Data Scientist Graduate - Product Analytics
⚠️  Channel full error count: 3/5
[2026-01-18T21:41:17.886Z] [BOT ERROR] ❌ Error posting job Data Scientist Graduate - Product Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist Graduate - Product Analytics @ TikTok',
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
[2026-01-18T21:41:17.886Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T21:41:22.387Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-18T21:41:22.387Z] [BOT] 📍 [ROUTING] "Logistics Coordinator" @ ORG_9e6cd9ac Logistics Services
[2026-01-18T21:41:22.387Z] [BOT] Category: SUPPLY-CHAIN (matched: "supply-chain")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-18T21:41:22.572Z] [BOT ERROR] ❌ Error posting job Logistics Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Logistics Coordinator @ ORG_9e6cd9ac Logistics Services',
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
  url: 'https://discord.com/api/v10/channels/CH_6f6699d7/threads'
}
[2026-01-18T21:41:22.572Z] [BOT] ❌ Industry post failed: Logistics Coordinator
⚠️  Channel full error count: 4/5
[2026-01-18T21:41:24.214Z] [BOT ERROR] ❌ Error posting job Logistics Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Logistics Coordinator @ ORG_9e6cd9ac Logistics Services',
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
[2026-01-18T21:41:24.214Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T21:41:28.715Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-18T21:41:28.716Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
[2026-01-18T21:41:28.716Z] [BOT] ⏭️  Skipping duplicate: JID_5c247253-_r-48736 (posted within 7 days)
[2026-01-18T21:41:28.716Z] [BOT] ⏭️  Skipping duplicate: JID_6bbd2224-modernization_r-515424 (posted within 7 days)
[2026-01-18T21:41:28.716Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-18T21:41:28.717Z] [BOT] ⏭️  Skipping duplicate: JID_35067d67-physics_r0150275 (posted within 7 days)
[2026-01-18T21:41:28.717Z] [BOT] ⏭️  Skipping duplicate: JID_93a1fe81 (posted within 7 days)
[2026-01-18T21:41:28.848Z] [BOT] ✅ Loaded pending queue: 2840 total (2820 pending, 20 enriched, 0 posted)
[2026-01-18T21:41:29.021Z] [BOT] ✅ Saved pending queue: 2840 total (2820 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-18T21:41:29.021Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T21:41:29.082Z] [BOT] 📂 Loaded 4885 existing routing entries
[2026-01-18T21:41:29.151Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4895
   Timestamp: 2026-01-18T21:41:29.132Z
[2026-01-18T21:41:29.152Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
[2026-01-18T21:41:29.152Z] [BOT] Successful: 10
   Failed: 9
   Skipped: 0
[2026-01-18T21:41:29.152Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T21:41:29.153Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🌉・san-francisco: 1 posts
     4. #💲・sales-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-18T21:41:29.153Z] [BOT] [STATS] Channel stats saved
[2026-01-18T21:41:31.180Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3642) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- [BOT ERROR] ❌ Error posting job AI Engineer – New Grad - Materia: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Research Scientist - Hsu & Konermann Labs
- [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Data Analyst
- [BOT ERROR] ❌ Error posting job Data Scientist Graduate - Product Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist Graduate - Product Analytics
- [BOT ERROR] ❌ Error posting job Data Scientist Graduate - Product Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Logistics Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Logistics Coordinator
- [BOT ERROR] ❌ Error posting job Logistics Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*