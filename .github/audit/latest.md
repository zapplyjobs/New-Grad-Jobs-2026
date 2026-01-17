# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T09:08:13.107Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T09:07:36.376Z] ========================================
[2026-01-17T09:07:36.378Z] Discord Bot Execution Log
[2026-01-17T09:07:36.378Z] Environment: GitHub Actions
[2026-01-17T09:07:36.378Z] Node Version: v20.19.6
[2026-01-17T09:07:36.378Z] ========================================
[2026-01-17T09:07:36.378Z] Environment Variables Check:
[2026-01-17T09:07:36.378Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T09:07:36.378Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.378Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T09:07:36.379Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T09:07:36.379Z] 
Multi-Channel Configuration:
[2026-01-17T09:07:36.379Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T09:07:36.379Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T09:07:36.379Z] 
Data Files Check:
[2026-01-17T09:07:36.380Z] .github/data/new_jobs.json: ✅ Exists (10 items, 105061 bytes)
[2026-01-17T09:07:36.390Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1298997 bytes)
[2026-01-17T09:07:36.390Z] 
========================================
[2026-01-17T09:07:36.391Z] Starting Enhanced Discord Bot...
[2026-01-17T09:07:36.391Z] ========================================
[2026-01-17T09:07:36.947Z] [BOT] ✅ Loaded V2 database: 2400 jobs
[2026-01-17T09:07:37.625Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T09:07:37.626Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T09:07:37.626Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T09:07:37.745Z] [BOT] ✅ Loaded pending queue: 2893 total (2873 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Solution Architect (APAC) at supabase
[2026-01-17T09:07:37.748Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T09:07:37.748Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T09:07:37.749Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T09:07:37.749Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T09:07:37.750Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T09:07:37.753Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T09:07:37.754Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (APAC)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-17T09:07:37.754Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T09:07:37.771Z] [BOT ERROR] (node:2886) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T09:07:37.981Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (APAC) @ supabase in #💲・sales-jobs
[2026-01-17T09:07:37.982Z] [BOT] ✅ Industry: Customer Solution Architect (APAC) @ supabase
[2026-01-17T09:07:39.483Z] [BOT] 💾 Marked as posted: Customer Solution Architect (APAC) @ supabase (instance #1)
[2026-01-17T09:07:39.484Z] [BOT] 💾 BEFORE ARCHIVING: 2401 jobs in database
[2026-01-17T09:07:39.485Z] [BOT] ✅ No jobs to archive (all 2401 jobs within 7-day window)
[2026-01-17T09:07:39.505Z] [BOT] 💾 Saved posted_jobs.json: 2401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:42.506Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-17T09:07:42.507Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive" @ nominal
[2026-01-17T09:07:42.507Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-17T09:07:42.937Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive @ nominal in #🤖・ai-jobs
[2026-01-17T09:07:42.938Z] [BOT] ✅ Industry: Mid-Market Account Executive @ nominal
[2026-01-17T09:07:44.882Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T09:07:46.383Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive @ nominal (instance #1)
[2026-01-17T09:07:46.384Z] [BOT] 💾 BEFORE ARCHIVING: 2402 jobs in database
[2026-01-17T09:07:46.386Z] [BOT] ✅ No jobs to archive (all 2402 jobs within 7-day window)
[2026-01-17T09:07:46.402Z] [BOT] 💾 Saved posted_jobs.json: 2402 active jobs
[2026-01-17T09:07:46.403Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:46.403Z] [BOT] 📍 [ROUTING] "Roboticist In Residence" @ nominal
[2026-01-17T09:07:46.404Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T09:07:46.716Z] [BOT] ✅ Created forum post: 🏢 Roboticist In Residence @ nominal in #🤖・ai-jobs
[2026-01-17T09:07:46.716Z] [BOT] ✅ Industry: Roboticist In Residence @ nominal
[2026-01-17T09:07:48.621Z] [BOT] ✅ Created forum post: 🏢 Roboticist In Residence @ nominal in #🦢・los-angeles
[2026-01-17T09:07:48.621Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T09:07:50.122Z] [BOT] 💾 Marked as posted: Roboticist In Residence @ nominal (instance #1)
[2026-01-17T09:07:50.122Z] [BOT] 💾 BEFORE ARCHIVING: 2403 jobs in database
[2026-01-17T09:07:50.124Z] [BOT] ✅ No jobs to archive (all 2403 jobs within 7-day window)
[2026-01-17T09:07:50.141Z] [BOT] 💾 Saved posted_jobs.json: 2403 active jobs
[2026-01-17T09:07:50.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:50.142Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer - USG/DoD" @ nominal
[2026-01-17T09:07:50.142Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T09:07:50.478Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer - USG/DoD @ nominal in #🤖・ai-jobs
  ✅ Industry: Mission Operations Engineer - USG/DoD @ nominal
[2026-01-17T09:07:52.406Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer - USG/DoD @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T09:07:53.908Z] [BOT] 💾 Marked as posted: Mission Operations Engineer - USG/DoD @ nominal (instance #1)
[2026-01-17T09:07:53.908Z] [BOT] 💾 BEFORE ARCHIVING: 2404 jobs in database
[2026-01-17T09:07:53.910Z] [BOT] ✅ No jobs to archive (all 2404 jobs within 7-day window)
[2026-01-17T09:07:53.926Z] [BOT] 💾 Saved posted_jobs.json: 2404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:53.926Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
[2026-01-17T09:07:53.926Z] [BOT] 💾 BEFORE ARCHIVING: 2405 jobs in database
[2026-01-17T09:07:53.928Z] [BOT] ✅ No jobs to archive (all 2405 jobs within 7-day window)
[2026-01-17T09:07:53.942Z] [BOT] 💾 Saved posted_jobs.json: 2405 active jobs
[2026-01-17T09:07:53.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:53.943Z] [BOT] 📍 [ROUTING] "Instrumentation Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-17T09:07:53.943Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T09:07:54.150Z] [BOT] ✅ Created forum post: 🏢 Instrumentation Engineer @ nominal in #🤖・ai-jobs
[2026-01-17T09:07:54.150Z] [BOT] ✅ Industry: Instrumentation Engineer @ nominal
[2026-01-17T09:07:55.816Z] [BOT ERROR] ❌ Error posting job Instrumentation Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Instrumentation Engineer @ nominal',
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
[2026-01-17T09:07:55.817Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-17T09:07:57.317Z] [BOT] 💾 Marked as posted: Instrumentation Engineer @ nominal (instance #1)
[2026-01-17T09:07:57.317Z] [BOT] 💾 BEFORE ARCHIVING: 2406 jobs in database
[2026-01-17T09:07:57.319Z] [BOT] ✅ No jobs to archive (all 2406 jobs within 7-day window)
[2026-01-17T09:07:57.334Z] [BOT] 💾 Saved posted_jobs.json: 2406 active jobs
[2026-01-17T09:07:57.334Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T09:07:57.335Z] [BOT] 📍 [ROUTING] "Cloud Infrastructure Engineer" @ nominal
[2026-01-17T09:07:57.335Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T09:07:57.485Z] [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Cloud Infrastructure Engineer @ nominal',
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
[2026-01-17T09:07:57.485Z] [BOT] ❌ Industry post failed: Cloud Infrastructure Engineer
⚠️  Channel full error count: 1/5
[2026-01-17T09:07:59.107Z] [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Cloud Infrastructure Engineer @ nominal',
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
[2026-01-17T09:07:59.108Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T09:08:03.610Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T09:08:03.611Z] [BOT] 📍 [ROUTING] "Software Engineer - Mission Dev" @ nominal
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T09:08:03.821Z] [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Mission Dev @ nominal',
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
[2026-01-17T09:08:03.821Z] [BOT] ❌ Industry post failed: Software Engineer - Mission Dev
⚠️  Channel full error count: 2/5
[2026-01-17T09:08:05.428Z] [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Mission Dev @ nominal',
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
[2026-01-17T09:08:05.428Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-17T09:08:06.930Z] [BOT] 📍 [ROUTING] "Support Engineer (APAC)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T09:08:06.930Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T09:08:07.049Z] [BOT ERROR] ❌ Error posting job Support Engineer (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Support Engineer (APAC) @ supabase',
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
[2026-01-17T09:08:07.049Z] [BOT] ❌ Industry post failed: Support Engineer (APAC)
⚠️  Channel full error count: 3/5
[2026-01-17T09:08:08.550Z] [BOT] 📍 [ROUTING] "Staff Engineer" @ clerk
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T09:08:08.719Z] [BOT ERROR] ❌ Error posting job Staff Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Engineer @ clerk',
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
[2026-01-17T09:08:08.720Z] [BOT] ❌ Industry post failed: Staff Engineer
⚠️  Channel full error count: 4/5
[2026-01-17T09:08:10.378Z] [BOT ERROR] ❌ Error posting job Staff Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Engineer @ clerk',
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
[2026-01-17T09:08:10.378Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T09:08:11.879Z] [BOT] 📍 [ROUTING] "Infra Engineer - Datacenters" @ railway
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T09:08:12.052Z] [BOT ERROR] ❌ Error posting job Infra Engineer - Datacenters: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Infra Engineer - Datacenters @ railway',
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
[2026-01-17T09:08:12.052Z] [BOT] ❌ Industry post failed: Infra Engineer - Datacenters
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T09:08:12.053Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 17
[2026-01-17T09:08:12.053Z] [BOT] Successful: 8
   Failed: 9
   Skipped: 0
[2026-01-17T09:08:12.053Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T09:08:12.053Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 3
   Top channels:
[2026-01-17T09:08:12.053Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🦢・los-angeles: 3 posts
     3. #💲・sales-jobs: 1 posts
[2026-01-17T09:08:12.053Z] [BOT] [STATS] Channel stats saved
[2026-01-17T09:08:12.054Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T09:08:12.066Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2886) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Instrumentation Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Cloud Infrastructure Engineer
- [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Mission Dev
- [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Support Engineer (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Support Engineer (APAC)
- [BOT ERROR] ❌ Error posting job Staff Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Engineer
- [BOT ERROR] ❌ Error posting job Staff Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Infra Engineer - Datacenters: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Infra Engineer - Datacenters
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*