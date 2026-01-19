# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T07:06:31.258Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T07:05:39.825Z] ========================================
[2026-01-19T07:05:39.827Z] Discord Bot Execution Log
[2026-01-19T07:05:39.827Z] Environment: GitHub Actions
[2026-01-19T07:05:39.827Z] Node Version: v20.19.6
[2026-01-19T07:05:39.827Z] ========================================
[2026-01-19T07:05:39.827Z] Environment Variables Check:
[2026-01-19T07:05:39.827Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T07:05:39.827Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.827Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T07:05:39.827Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T07:05:39.827Z] 
Multi-Channel Configuration:
[2026-01-19T07:05:39.827Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T07:05:39.828Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T07:05:39.828Z] 
Data Files Check:
[2026-01-19T07:05:39.829Z] .github/data/new_jobs.json: ✅ Exists (10 items, 72668 bytes)
[2026-01-19T07:05:39.840Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567883 bytes)
[2026-01-19T07:05:39.840Z] 
========================================
[2026-01-19T07:05:39.840Z] Starting Enhanced Discord Bot...
[2026-01-19T07:05:39.840Z] ========================================
[2026-01-19T07:05:40.311Z] [BOT] ✅ Loaded V2 database: 2883 jobs
[2026-01-19T07:05:40.844Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T07:05:40.845Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T07:05:40.845Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T07:05:41.010Z] [BOT] ✅ Loaded pending queue: 2829 total (2809 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Full Stack at American Express
[2026-01-19T07:05:41.013Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T07:05:41.013Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T07:05:41.013Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T07:05:41.014Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T07:05:41.014Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T07:05:41.019Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T07:05:41.019Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack" @ ORG_0baaf6f2 Express
[2026-01-19T07:05:41.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:05:41.023Z] [BOT ERROR] (node:2937) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T07:05:41.204Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-01-19T07:05:41.204Z] [BOT] ✅ Industry: Software Engineer - Full Stack @ ORG_0baaf6f2 Express
[2026-01-19T07:05:42.909Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full Stack @ ORG_0baaf6f2 Express in #💻・remote-usa
[2026-01-19T07:05:42.909Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T07:05:44.411Z] [BOT] 💾 Marked as posted: Software Engineer - Full Stack @ ORG_0baaf6f2 Express (instance #1)
💾 BEFORE ARCHIVING: 2884 jobs in database
[2026-01-19T07:05:44.414Z] [BOT] ✅ No jobs to archive (all 2884 jobs within 7-day window)
[2026-01-19T07:05:44.439Z] [BOT] 💾 Saved posted_jobs.json: 2884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:05:44.440Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend" @ ORG_72797d26
[2026-01-19T07:05:44.440Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:05:44.621Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_72797d26 in #💻・tech-jobs
[2026-01-19T07:05:44.621Z] [BOT] ✅ Industry: Software Engineer 1 - Backend @ ORG_72797d26
[2026-01-19T07:05:46.292Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_72797d26 in #🌧️・seattle
[2026-01-19T07:05:46.292Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-19T07:05:47.793Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend @ ORG_72797d26 (instance #1)
[2026-01-19T07:05:47.794Z] [BOT] 💾 BEFORE ARCHIVING: 2885 jobs in database
[2026-01-19T07:05:47.796Z] [BOT] ✅ No jobs to archive (all 2885 jobs within 7-day window)
[2026-01-19T07:05:47.812Z] [BOT] 💾 Saved posted_jobs.json: 2885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:05:47.812Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_be3702e3inal Health
[2026-01-19T07:05:47.813Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:05:47.973Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_be3702e3inal Health in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_be3702e3inal Health
[2026-01-19T07:05:49.671Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_be3702e3inal Health in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-19T07:05:51.172Z] [BOT] 💾 Marked as posted: Product Engineer @ ORG_be3702e3inal Health (instance #1)
💾 BEFORE ARCHIVING: 2886 jobs in database
[2026-01-19T07:05:51.174Z] [BOT] ✅ No jobs to archive (all 2886 jobs within 7-day window)
[2026-01-19T07:05:51.194Z] [BOT] 💾 Saved posted_jobs.json: 2886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:05:51.195Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English - Florida" @ ORG_f3ae3598
   Category: TECH (default)
[2026-01-19T07:05:51.195Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:05:51.392Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English - Florida @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: Search Quality Rater - English - Florida @ ORG_f3ae3598
[2026-01-19T07:05:53.298Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English - Florida @ ORG_f3ae3598 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:05:54.800Z] [BOT] 💾 Marked as posted: Search Quality Rater - English - Florida @ ORG_f3ae3598 (instance #1)
[2026-01-19T07:05:54.800Z] [BOT] 💾 BEFORE ARCHIVING: 2887 jobs in database
[2026-01-19T07:05:54.803Z] [BOT] ✅ No jobs to archive (all 2887 jobs within 7-day window)
[2026-01-19T07:05:54.820Z] [BOT] 💾 Saved posted_jobs.json: 2887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:05:57.821Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-19T07:05:57.822Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Ad Sales" @ spotify
[2026-01-19T07:05:57.822Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:05:58.210Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Ad Sales @ spotify in #🤖・ai-jobs
  ✅ Industry: Customer Success Manager, Ad Sales @ spotify
[2026-01-19T07:05:59.925Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Ad Sales @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T07:06:01.426Z] [BOT] 💾 Marked as posted: Customer Success Manager, Ad Sales @ spotify (instance #1)
[2026-01-19T07:06:01.426Z] [BOT] 💾 BEFORE ARCHIVING: 2888 jobs in database
[2026-01-19T07:06:01.429Z] [BOT] ✅ No jobs to archive (all 2888 jobs within 7-day window)
[2026-01-19T07:06:01.446Z] [BOT] 💾 Saved posted_jobs.json: 2888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:06:01.447Z] [BOT] 📍 [ROUTING] "Engineering Technician 1" @ ORG_81f16575ington Ingalls Industries
   Category: AI (matched: "machine learning")
[2026-01-19T07:06:01.447Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:06:02.379Z] [BOT] ✅ Created forum post: 🏢 Engineering Technician 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
  ✅ Industry: Engineering Technician 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-19T07:06:04.098Z] [BOT] ✅ Created forum post: 🏢 Engineering Technician 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
[2026-01-19T07:06:04.099Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T07:06:05.599Z] [BOT] 💾 Marked as posted: Engineering Technician 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-19T07:06:05.599Z] [BOT] 💾 BEFORE ARCHIVING: 2889 jobs in database
[2026-01-19T07:06:05.602Z] [BOT] ✅ No jobs to archive (all 2889 jobs within 7-day window)
[2026-01-19T07:06:05.622Z] [BOT] 💾 Saved posted_jobs.json: 2889 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:06:05.622Z] [BOT] 📍 [ROUTING] "Applied Researcher 1 - AI Foundations" @ ORG_1a1cf792 One
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:06:05.844Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One in #🤖・ai-jobs
  ✅ Industry: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One
[2026-01-19T07:06:07.623Z] [BOT] ✅ Created forum post: 🏢 Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T07:06:09.124Z] [BOT] 💾 Marked as posted: Applied Researcher 1 - AI Foundations @ ORG_1a1cf792 One (instance #1)
[2026-01-19T07:06:09.124Z] [BOT] 💾 BEFORE ARCHIVING: 2890 jobs in database
[2026-01-19T07:06:09.126Z] [BOT] ✅ No jobs to archive (all 2890 jobs within 7-day window)
[2026-01-19T07:06:09.144Z] [BOT] 💾 Saved posted_jobs.json: 2890 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:06:09.145Z] [BOT] 📍 [ROUTING] "Knowledge Engineer/Scientist - PhD" @ ORG_58b7c913 & Gamble (P&G)
   Category: AI (matched: "machine learning")
[2026-01-19T07:06:09.145Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T07:06:09.266Z] [BOT ERROR] ❌ Error posting job Knowledge Engineer/Scientist - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G)',
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
[2026-01-19T07:06:09.266Z] [BOT] ❌ Industry post failed: Knowledge Engineer/Scientist - PhD
⚠️  Channel full error count: 1/5
[2026-01-19T07:06:10.882Z] [BOT ERROR] ❌ Error posting job Knowledge Engineer/Scientist - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G)',
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
[2026-01-19T07:06:10.883Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T07:06:15.384Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T07:06:15.384Z] [BOT] 📍 [ROUTING] "Partner Marketing Lead, GSIs" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:06:15.534Z] [BOT ERROR] ❌ Error posting job Partner Marketing Lead, GSIs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Partner Marketing Lead, GSIs @ anthropic',
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
[2026-01-19T07:06:15.534Z] [BOT] ❌ Industry post failed: Partner Marketing Lead, GSIs
⚠️  Channel full error count: 2/5
[2026-01-19T07:06:17.172Z] [BOT ERROR] ❌ Error posting job Partner Marketing Lead, GSIs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Partner Marketing Lead, GSIs @ anthropic',
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
[2026-01-19T07:06:17.172Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T07:06:21.674Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T07:06:21.674Z] [BOT] 📍 [ROUTING] "Solutions Analyst - Enterprise Asset Management - Eam" @ ORG_4db4f14a Technologies
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T07:06:21.851Z] [BOT ERROR] ❌ Error posting job Solutions Analyst - Enterprise Asset Management - Eam: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies',
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
[2026-01-19T07:06:21.851Z] [BOT] ❌ Industry post failed: Solutions Analyst - Enterprise Asset Management - Eam
⚠️  Channel full error count: 3/5
[2026-01-19T07:06:23.470Z] [BOT ERROR] ❌ Error posting job Solutions Analyst - Enterprise Asset Management - Eam: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies',
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
[2026-01-19T07:06:23.470Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T07:06:27.973Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-19T07:06:27.973Z] [BOT] ⏭️  Skipping duplicate: JID_b1583194 (posted within 7 days)
[2026-01-19T07:06:27.973Z] [BOT] ⏭️  Skipping duplicate: JID_747969be (posted within 7 days)
[2026-01-19T07:06:27.974Z] [BOT] ⏭️  Skipping duplicate: JID_89113af6 (posted within 7 days)
[2026-01-19T07:06:27.974Z] [BOT] ⏭️  Skipping duplicate: JID_30c8e0a1 (posted within 7 days)
[2026-01-19T07:06:27.974Z] [BOT] ⏭️  Skipping duplicate: JID_b4bd9f8e-capital_one-JID_e0a63d19-_r229418-1 (posted within 7 days)
[2026-01-19T07:06:27.974Z] [BOT] ⏭️  Skipping duplicate: JID_86b6b588-engineer_20173691-1 (posted within 7 days)
[2026-01-19T07:06:27.975Z] [BOT] ⏭️  Skipping duplicate: JID_ea891334 (posted within 7 days)
[2026-01-19T07:06:28.134Z] [BOT] ✅ Loaded pending queue: 2829 total (2809 pending, 20 enriched, 0 posted)
[2026-01-19T07:06:28.315Z] [BOT] ✅ Saved pending queue: 2829 total (2809 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-19T07:06:28.315Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T07:06:28.380Z] [BOT] 📂 Loaded 5035 existing routing entries
[2026-01-19T07:06:28.448Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5045
[2026-01-19T07:06:28.448Z] [BOT] Timestamp: 2026-01-19T07:06:28.429Z
[2026-01-19T07:06:28.448Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
[2026-01-19T07:06:28.449Z] [BOT] Successful: 14
   Failed: 6
   Skipped: 0
[2026-01-19T07:06:28.449Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T07:06:28.449Z] [BOT] Total posts: 14
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 4 posts
[2026-01-19T07:06:28.449Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-19T07:06:28.449Z] [BOT] [STATS] Channel stats saved
[2026-01-19T07:06:30.466Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2937) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Knowledge Engineer/Scientist - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Knowledge Engineer/Scientist - PhD
- [BOT ERROR] ❌ Error posting job Knowledge Engineer/Scientist - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Partner Marketing Lead, GSIs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Partner Marketing Lead, GSIs
- [BOT ERROR] ❌ Error posting job Partner Marketing Lead, GSIs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Solutions Analyst - Enterprise Asset Management - Eam: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Solutions Analyst - Enterprise Asset Management - Eam
- [BOT ERROR] ❌ Error posting job Solutions Analyst - Enterprise Asset Management - Eam: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*