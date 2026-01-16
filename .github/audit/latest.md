# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T19:12:04.052Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T19:11:04.861Z] ========================================
[2026-01-16T19:11:04.863Z] Discord Bot Execution Log
[2026-01-16T19:11:04.863Z] Environment: GitHub Actions
[2026-01-16T19:11:04.863Z] Node Version: v20.19.6
[2026-01-16T19:11:04.863Z] ========================================
[2026-01-16T19:11:04.863Z] Environment Variables Check:
[2026-01-16T19:11:04.863Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T19:11:04.863Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T19:11:04.864Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T19:11:04.864Z] 
Multi-Channel Configuration:
[2026-01-16T19:11:04.864Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T19:11:04.864Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T19:11:04.865Z] 
Data Files Check:
[2026-01-16T19:11:04.865Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45794 bytes)
[2026-01-16T19:11:04.873Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1103741 bytes)
[2026-01-16T19:11:04.873Z] 
========================================
[2026-01-16T19:11:04.873Z] Starting Enhanced Discord Bot...
[2026-01-16T19:11:04.873Z] ========================================
[2026-01-16T19:11:05.415Z] [BOT] ✅ Loaded V2 database: 2044 jobs
[2026-01-16T19:11:06.217Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T19:11:06.218Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T19:11:06.218Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T19:11:06.331Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Digital Engineering Rotational Aspire at American Bureau of Shipping
[2026-01-16T19:11:06.333Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T19:11:06.334Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T19:11:06.334Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T19:11:06.335Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T19:11:06.335Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
[2026-01-16T19:11:06.335Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T19:11:06.340Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T19:11:06.340Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-16T19:11:06.341Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:11:06.357Z] [BOT ERROR] (node:2918) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T19:11:06.503Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T19:11:06.503Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 1/5
[2026-01-16T19:11:08.821Z] [BOT] ✅ Created forum post: 🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping in #🤠・austin
[2026-01-16T19:11:08.821Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T19:11:10.323Z] [BOT] 💾 Marked as posted: Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping (instance #1)
[2026-01-16T19:11:10.323Z] [BOT] 💾 BEFORE ARCHIVING: 2045 jobs in database
[2026-01-16T19:11:10.325Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T19:11:10.330Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-16T19:11:10.330Z] [BOT] ✅ Archiving complete: 2 archived, 2043 active
[2026-01-16T19:11:10.342Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
[2026-01-16T19:11:10.342Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:10.342Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:11:11.185Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics in #💻・tech-jobs
[2026-01-16T19:11:11.185Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics
[2026-01-16T19:11:12.849Z] [BOT ERROR] ❌ Error posting job Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics',
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
[2026-01-16T19:11:12.849Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T19:11:14.350Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_c910d474 Dynamics (instance #1)
[2026-01-16T19:11:14.351Z] [BOT] 💾 BEFORE ARCHIVING: 2044 jobs in database
[2026-01-16T19:11:14.352Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-01-16T19:11:14.364Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:14.365Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI)" @ ORG_dc7620eb
[2026-01-16T19:11:14.365Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:11:14.602Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb
[2026-01-16T19:11:16.406Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T19:11:17.907Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb (instance #1)
[2026-01-16T19:11:17.908Z] [BOT] 💾 BEFORE ARCHIVING: 2045 jobs in database
[2026-01-16T19:11:17.909Z] [BOT] ✅ No jobs to archive (all 2045 jobs within 7-day window)
[2026-01-16T19:11:17.925Z] [BOT] 💾 Saved posted_jobs.json: 2045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:17.926Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb (instance #1)
[2026-01-16T19:11:17.926Z] [BOT] 💾 BEFORE ARCHIVING: 2046 jobs in database
[2026-01-16T19:11:17.927Z] [BOT] ✅ No jobs to archive (all 2046 jobs within 7-day window)
[2026-01-16T19:11:17.941Z] [BOT] 💾 Saved posted_jobs.json: 2046 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:17.942Z] [BOT] 📍 [ROUTING] "Applications Development Engineer - Bbp" @ ORG_fb8c4aa0 Corporation
[2026-01-16T19:11:17.942Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:11:18.319Z] [BOT] ✅ Created forum post: 🏢 Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #💻・tech-jobs
[2026-01-16T19:11:18.319Z] [BOT] ✅ Industry: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation
[2026-01-16T19:11:20.766Z] [BOT] ✅ Created forum post: 🏢 Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #🦢・los-angeles
[2026-01-16T19:11:20.766Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T19:11:22.268Z] [BOT] 💾 Marked as posted: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation (instance #1)
[2026-01-16T19:11:22.268Z] [BOT] 💾 BEFORE ARCHIVING: 2047 jobs in database
[2026-01-16T19:11:22.269Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-01-16T19:11:22.283Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:22.283Z] [BOT] 📍 [ROUTING] "System Dev Engineer I, Analytics ADC" @ ORG_49d2dc07
[2026-01-16T19:11:22.283Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:11:22.576Z] [BOT] ✅ Created forum post: 📦 System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07
[2026-01-16T19:11:24.442Z] [BOT] ✅ Created forum post: 📦 System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T19:11:25.944Z] [BOT] 💾 Marked as posted: System Dev Engineer I, Analytics ADC @ ORG_49d2dc07 (instance #1)
[2026-01-16T19:11:25.944Z] [BOT] 💾 BEFORE ARCHIVING: 2048 jobs in database
[2026-01-16T19:11:25.945Z] [BOT] ✅ No jobs to archive (all 2048 jobs within 7-day window)
[2026-01-16T19:11:25.960Z] [BOT] 💾 Saved posted_jobs.json: 2048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:28.961Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-16T19:11:28.962Z] [BOT] 📍 [ROUTING] "Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe" @ ORG_31ce6e79 Turbines
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-16T19:11:29.223Z] [BOT] ✅ Created forum post: 🏢 Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines in #🩺・healthcare-jobs
  ✅ Industry: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines
[2026-01-16T19:11:30.952Z] [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T19:11:30.952Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T19:11:32.454Z] [BOT] 💾 Marked as posted: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines (instance #1)
[2026-01-16T19:11:32.454Z] [BOT] 💾 BEFORE ARCHIVING: 2049 jobs in database
[2026-01-16T19:11:32.455Z] [BOT] ✅ No jobs to archive (all 2049 jobs within 7-day window)
[2026-01-16T19:11:32.466Z] [BOT] 💾 Saved posted_jobs.json: 2049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:11:35.467Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T19:11:35.468Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-01-16T19:11:35.468Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T19:11:35.645Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T19:11:35.646Z] [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
⚠️  Channel full error count: 1/5
[2026-01-16T19:11:40.147Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T19:11:40.147Z] [BOT] 📍 [ROUTING] "Workday Payroll Specialist" @ spotify
[2026-01-16T19:11:40.147Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T19:11:40.461Z] [BOT ERROR] ❌ Error posting job Workday Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workday Payroll Specialist @ spotify',
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
[2026-01-16T19:11:40.462Z] [BOT] ❌ Industry post failed: Workday Payroll Specialist
⚠️  Channel full error count: 2/5
[2026-01-16T19:11:42.094Z] [BOT ERROR] ❌ Error posting job Workday Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workday Payroll Specialist @ spotify',
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
[2026-01-16T19:11:42.094Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T19:11:46.596Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T19:11:46.596Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - PhD" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T19:11:46.756Z] [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Graduate - Advertisement Team - PhD @ TikTok',
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
[2026-01-16T19:11:46.757Z] [BOT] ❌ Industry post failed: Data Science Graduate - Advertisement Team - PhD
⚠️  Channel full error count: 3/5
[2026-01-16T19:11:49.456Z] [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Graduate - Advertisement Team - PhD @ TikTok',
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
[2026-01-16T19:11:49.456Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T19:11:53.958Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-16T19:11:53.958Z] [BOT] 📍 [ROUTING] "Implementation Analyst" @ ORG_53b59486 Financial Software
[2026-01-16T19:11:53.958Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-16T19:11:54.120Z] [BOT ERROR] ❌ Error posting job Implementation Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Implementation Analyst @ ORG_53b59486 Financial Software ',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-16T19:11:54.120Z] [BOT] ❌ Industry post failed: Implementation Analyst
⚠️  Channel full error count: 4/5
[2026-01-16T19:11:55.844Z] [BOT ERROR] ❌ Error posting job Implementation Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Implementation Analyst @ ORG_53b59486 Financial Software ',
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
[2026-01-16T19:11:55.845Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T19:12:00.346Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-16T19:12:00.347Z] [BOT] ⏭️  Skipping duplicate: JID_0cbe1638-cx_1-job-3499 (posted within 7 days)
[2026-01-16T19:12:00.347Z] [BOT] ⏭️  Skipping duplicate: JID_c699d302-program_r0000316308 (posted within 7 days)
[2026-01-16T19:12:00.348Z] [BOT] ⏭️  Skipping duplicate: JID_8bb23850 (posted within 7 days)
[2026-01-16T19:12:00.348Z] [BOT] ⏭️  Skipping duplicate: JID_b263e2b3 (posted within 7 days)
[2026-01-16T19:12:00.348Z] [BOT] ⏭️  Skipping duplicate: JID_67b76248-bbp_2531350 (posted within 7 days)
[2026-01-16T19:12:00.348Z] [BOT] ⏭️  Skipping duplicate: JID_2e34dc7c (posted within 7 days)
[2026-01-16T19:12:00.458Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[2026-01-16T19:12:00.628Z] [BOT] ✅ Saved pending queue: 2777 total (2757 pending, 14 enriched, 6 posted)
[2026-01-16T19:12:00.628Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T19:12:00.684Z] [BOT] 📂 Loaded 4275 existing routing entries
[2026-01-16T19:12:00.748Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T19:12:00.748Z] [BOT] Total entries: 4285
   Timestamp: 2026-01-16T19:12:00.731Z
[2026-01-16T19:12:00.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 19
[2026-01-16T19:12:00.749Z] [BOT] Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-16T19:12:00.749Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-16T19:12:00.750Z] [BOT] Total posts: 9
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤠・austin: 1 posts
     3. #🌧️・seattle: 1 posts
     4. #🦢・los-angeles: 1 posts
     5. #💻・remote-usa: 1 posts
[STATS] Channel stats saved
[2026-01-16T19:12:02.773Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2918) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
- [BOT ERROR] ❌ Error posting job Workday Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Workday Payroll Specialist
- [BOT ERROR] ❌ Error posting job Workday Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Science Graduate - Advertisement Team - PhD
- [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Implementation Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Implementation Analyst
- [BOT ERROR] ❌ Error posting job Implementation Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*