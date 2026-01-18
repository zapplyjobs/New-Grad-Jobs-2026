# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T23:53:22.550Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T23:52:27.702Z] ========================================
[2026-01-18T23:52:27.704Z] Discord Bot Execution Log
[2026-01-18T23:52:27.704Z] Environment: GitHub Actions
[2026-01-18T23:52:27.704Z] Node Version: v20.19.6
[2026-01-18T23:52:27.705Z] ========================================
[2026-01-18T23:52:27.705Z] Environment Variables Check:
[2026-01-18T23:52:27.705Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T23:52:27.705Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.705Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T23:52:27.705Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T23:52:27.705Z] 
Multi-Channel Configuration:
[2026-01-18T23:52:27.705Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.705Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.705Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.705Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T23:52:27.706Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T23:52:27.706Z] 
Data Files Check:
[2026-01-18T23:52:27.707Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114882 bytes)
[2026-01-18T23:52:27.717Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1520887 bytes)
[2026-01-18T23:52:27.718Z] 
========================================
[2026-01-18T23:52:27.718Z] Starting Enhanced Discord Bot...
[2026-01-18T23:52:27.718Z] ========================================
[2026-01-18T23:52:28.237Z] [BOT] ✅ Loaded V2 database: 2799 jobs
[2026-01-18T23:52:28.843Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T23:52:28.844Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T23:52:28.844Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T23:52:28.967Z] [BOT] ✅ Loaded pending queue: 2827 total (2807 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Dental Assistant at Blue Ridge Health
[2026-01-18T23:52:28.971Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T23:52:28.971Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T23:52:28.971Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T23:52:28.972Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-18T23:52:28.972Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Manager, Customer Success @ brex: seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T23:52:28.972Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T23:52:28.976Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T23:52:28.977Z] [BOT] 📍 [ROUTING] "Dental Assistant" @ ORG_ec7d56a0 Ridge Health
[2026-01-18T23:52:28.977Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T23:52:28.994Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T23:52:29.199Z] [BOT] ✅ Created forum post: 🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health in #🩺・healthcare-jobs
  ✅ Industry: Dental Assistant @ ORG_ec7d56a0 Ridge Health
[2026-01-18T23:52:30.906Z] [BOT] ✅ Created forum post: 🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:52:32.408Z] [BOT] 💾 Marked as posted: Dental Assistant @ ORG_ec7d56a0 Ridge Health (instance #1)
[2026-01-18T23:52:32.408Z] [BOT] 💾 BEFORE ARCHIVING: 2800 jobs in database
[2026-01-18T23:52:32.410Z] [BOT] ✅ No jobs to archive (all 2800 jobs within 7-day window)
[2026-01-18T23:52:32.431Z] [BOT] 💾 Saved posted_jobs.json: 2800 active jobs
[2026-01-18T23:52:32.431Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:52:35.432Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T23:52:35.432Z] [BOT] 📍 [ROUTING] "Senior Manager, Large Customer Sales (Tech)" @ reddit
[2026-01-18T23:52:35.432Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T23:52:35.888Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Tech) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Manager, Large Customer Sales (Tech) @ reddit
[2026-01-18T23:52:37.594Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Large Customer Sales (Tech) @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T23:52:39.097Z] [BOT] 💾 Marked as posted: Senior Manager, Large Customer Sales (Tech) @ reddit (instance #1)
[2026-01-18T23:52:39.097Z] [BOT] 💾 BEFORE ARCHIVING: 2801 jobs in database
[2026-01-18T23:52:39.099Z] [BOT] ✅ No jobs to archive (all 2801 jobs within 7-day window)
[2026-01-18T23:52:39.120Z] [BOT] 💾 Saved posted_jobs.json: 2801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:52:39.121Z] [BOT] 📍 [ROUTING] "Solutions Architect, Beneficial Deployments" @ anthropic
[2026-01-18T23:52:39.121Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T23:52:41.158Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Beneficial Deployments @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Beneficial Deployments @ anthropic
[2026-01-18T23:52:42.876Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Beneficial Deployments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T23:52:44.377Z] [BOT] 💾 Marked as posted: Solutions Architect, Beneficial Deployments @ anthropic (instance #1)
[2026-01-18T23:52:44.378Z] [BOT] 💾 BEFORE ARCHIVING: 2802 jobs in database
[2026-01-18T23:52:44.380Z] [BOT] ✅ No jobs to archive (all 2802 jobs within 7-day window)
[2026-01-18T23:52:44.397Z] [BOT] 💾 Saved posted_jobs.json: 2802 active jobs
[2026-01-18T23:52:44.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:52:47.399Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T23:52:47.400Z] [BOT] 📍 [ROUTING] "Regional Sales Manager, Mid-Market, Austin" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T23:52:47.597Z] [BOT] ✅ Created forum post: 🏢 Regional Sales Manager, Mid-Market, Austin @ verkada in #💲・sales-jobs
[2026-01-18T23:52:47.597Z] [BOT] ✅ Industry: Regional Sales Manager, Mid-Market, Austin @ verkada
[2026-01-18T23:52:49.396Z] [BOT] ✅ Created forum post: 🏢 Regional Sales Manager, Mid-Market, Austin @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-18T23:52:50.899Z] [BOT] 💾 Marked as posted: Regional Sales Manager, Mid-Market, Austin @ verkada (instance #1)
[2026-01-18T23:52:50.899Z] [BOT] 💾 BEFORE ARCHIVING: 2803 jobs in database
[2026-01-18T23:52:50.901Z] [BOT] ✅ No jobs to archive (all 2803 jobs within 7-day window)
[2026-01-18T23:52:50.917Z] [BOT] 💾 Saved posted_jobs.json: 2803 active jobs
[2026-01-18T23:52:50.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:52:50.918Z] [BOT] 📍 [ROUTING] "Area Vice President, Enterprise Sales - Public Sector" @ datadog
[2026-01-18T23:52:50.918Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T23:52:51.137Z] [BOT] ✅ Created forum post: 🏢 Area Vice President, Enterprise Sales - Public Sector @ datadog in #💲・sales-jobs
  ✅ Industry: Area Vice President, Enterprise Sales - Public Sector @ datadog
[2026-01-18T23:52:52.827Z] [BOT] ✅ Created forum post: 🏢 Area Vice President, Enterprise Sales - Public Sector @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:52:54.329Z] [BOT] 💾 Marked as posted: Area Vice President, Enterprise Sales - Public Sector @ datadog (instance #1)
[2026-01-18T23:52:54.329Z] [BOT] 💾 BEFORE ARCHIVING: 2804 jobs in database
[2026-01-18T23:52:54.331Z] [BOT] ✅ No jobs to archive (all 2804 jobs within 7-day window)
[2026-01-18T23:52:54.352Z] [BOT] 💾 Saved posted_jobs.json: 2804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:52:57.353Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-18T23:52:57.353Z] [BOT] 📍 [ROUTING] "Software Engineer, Enterprise Foundations" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:52:57.508Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Enterprise Foundations @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Enterprise Foundations @ anthropic
[2026-01-18T23:52:59.195Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Enterprise Foundations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T23:53:00.698Z] [BOT] 💾 Marked as posted: Software Engineer, Enterprise Foundations @ anthropic (instance #1)
[2026-01-18T23:53:00.698Z] [BOT] 💾 BEFORE ARCHIVING: 2805 jobs in database
[2026-01-18T23:53:00.700Z] [BOT] ✅ No jobs to archive (all 2805 jobs within 7-day window)
[2026-01-18T23:53:00.718Z] [BOT] 💾 Saved posted_jobs.json: 2805 active jobs
[2026-01-18T23:53:00.718Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:53:00.718Z] [BOT] 📍 [ROUTING] "Area Vice President, Enterprise Security Sales" @ datadog
[2026-01-18T23:53:00.719Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:53:00.831Z] [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Area Vice President, Enterprise Security Sales @ datadog',
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
[2026-01-18T23:53:00.832Z] [BOT] ❌ Industry post failed: Area Vice President, Enterprise Security Sales
⚠️  Channel full error count: 1/5
[2026-01-18T23:53:02.445Z] [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Area Vice President, Enterprise Security Sales @ datadog',
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
[2026-01-18T23:53:02.446Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T23:53:03.947Z] [BOT] 📍 [ROUTING] "IT Services Academy Program - Software Analyst" @ ORG_d5ef9966 Family
   Category: TECH (matched: "software")
[2026-01-18T23:53:03.947Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:53:04.016Z] [BOT ERROR] ❌ Error posting job IT Services Academy Program - Software Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family',
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
[2026-01-18T23:53:04.016Z] [BOT] ❌ Industry post failed: IT Services Academy Program - Software Analyst
⚠️  Channel full error count: 2/5
[2026-01-18T23:53:05.606Z] [BOT ERROR] ❌ Error posting job IT Services Academy Program - Software Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family',
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
[2026-01-18T23:53:05.606Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T23:53:07.108Z] [BOT] 📍 [ROUTING] "Software Developer - Emerging Career - Java / Spring Boot" @ ORG_a9d35ae9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:53:07.185Z] [BOT ERROR] ❌ Error posting job Software Developer - Emerging Career - Java / Spring Boot: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer - Emerging Career - Java / Spring Boot @ SAS',
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
[2026-01-18T23:53:07.185Z] [BOT] ❌ Industry post failed: Software Developer - Emerging Career - Java / Spring Boot
⚠️  Channel full error count: 3/5
[2026-01-18T23:53:08.779Z] [BOT ERROR] ❌ Error posting job Software Developer - Emerging Career - Java / Spring Boot: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer - Emerging Career - Java / Spring Boot @ SAS',
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
[2026-01-18T23:53:08.779Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T23:53:13.280Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T23:53:13.280Z] [BOT] 📍 [ROUTING] "Statistical Data Analyst - Surgery" @ ORG_f5f75c9b U
[2026-01-18T23:53:13.280Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T23:53:13.393Z] [BOT ERROR] ❌ Error posting job Statistical Data Analyst - Surgery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Statistical Data Analyst - Surgery @ ORG_f5f75c9b U',
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
[2026-01-18T23:53:13.393Z] [BOT] ❌ Industry post failed: Statistical Data Analyst - Surgery
⚠️  Channel full error count: 4/5
[2026-01-18T23:53:15.010Z] [BOT ERROR] ❌ Error posting job Statistical Data Analyst - Surgery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Statistical Data Analyst - Surgery @ ORG_f5f75c9b U',
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
[2026-01-18T23:53:15.011Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T23:53:19.512Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-18T23:53:19.513Z] [BOT] ⏭️  Skipping duplicate: JID_50d7b94e (posted within 7 days)
[2026-01-18T23:53:19.514Z] [BOT] ⏭️  Skipping duplicate: JID_00c2438e (posted within 7 days)
⏭️  Skipping duplicate: JID_84fbc0cb (posted within 7 days)
[2026-01-18T23:53:19.514Z] [BOT] ⏭️  Skipping duplicate: JID_30e00939 (posted within 7 days)
[2026-01-18T23:53:19.514Z] [BOT] ⏭️  Skipping duplicate: JID_7b2bffcb (posted within 7 days)
[2026-01-18T23:53:19.515Z] [BOT] ⏭️  Skipping duplicate: JID_adb6fafc (posted within 7 days)
[2026-01-18T23:53:19.635Z] [BOT] ✅ Loaded pending queue: 2827 total (2807 pending, 20 enriched, 0 posted)
[2026-01-18T23:53:19.808Z] [BOT] ✅ Saved pending queue: 2827 total (2807 pending, 14 enriched, 6 posted)
[2026-01-18T23:53:19.809Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T23:53:19.869Z] [BOT] 📂 Loaded 4935 existing routing entries
[2026-01-18T23:53:19.941Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4945
[2026-01-18T23:53:19.941Z] [BOT] Timestamp: 2026-01-18T23:53:19.919Z
[2026-01-18T23:53:19.941Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 20
[2026-01-18T23:53:19.942Z] [BOT] Successful: 12
   Failed: 8
   Skipped: 0
[2026-01-18T23:53:19.942Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 7
   Top channels:
[2026-01-18T23:53:19.942Z] [BOT] 1. #🌉・san-francisco: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-18T23:53:19.942Z] [BOT] [STATS] Channel stats saved
[2026-01-18T23:53:21.968Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Area Vice President, Enterprise Security Sales
- [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job IT Services Academy Program - Software Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: IT Services Academy Program - Software Analyst
- [BOT ERROR] ❌ Error posting job IT Services Academy Program - Software Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer - Emerging Career - Java / Spring Boot: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer - Emerging Career - Java / Spring Boot
- [BOT ERROR] ❌ Error posting job Software Developer - Emerging Career - Java / Spring Boot: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Statistical Data Analyst - Surgery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Statistical Data Analyst - Surgery
- [BOT ERROR] ❌ Error posting job Statistical Data Analyst - Surgery: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*