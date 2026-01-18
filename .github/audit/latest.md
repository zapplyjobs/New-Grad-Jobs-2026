# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T05:15:15.480Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T05:14:28.258Z] ========================================
[2026-01-18T05:14:28.259Z] Discord Bot Execution Log
[2026-01-18T05:14:28.259Z] Environment: GitHub Actions
[2026-01-18T05:14:28.259Z] Node Version: v20.19.6
[2026-01-18T05:14:28.259Z] ========================================
[2026-01-18T05:14:28.259Z] Environment Variables Check:
[2026-01-18T05:14:28.260Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T05:14:28.260Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T05:14:28.260Z] 
Multi-Channel Configuration:
[2026-01-18T05:14:28.260Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.260Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T05:14:28.261Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T05:14:28.261Z] 
Data Files Check:
[2026-01-18T05:14:28.262Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164860 bytes)
[2026-01-18T05:14:28.273Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1391147 bytes)
[2026-01-18T05:14:28.273Z] 
========================================
[2026-01-18T05:14:28.273Z] Starting Enhanced Discord Bot...
[2026-01-18T05:14:28.273Z] ========================================
[2026-01-18T05:14:28.726Z] [BOT] ✅ Loaded V2 database: 2571 jobs
[2026-01-18T05:14:29.537Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T05:14:29.537Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T05:14:29.538Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T05:14:29.693Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: People Analyst II at datadog
[2026-01-18T05:14:29.696Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T05:14:29.696Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T05:14:29.697Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T05:14:29.697Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T05:14:29.698Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T05:14:29.702Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T05:14:29.702Z] [BOT] 📍 [ROUTING] "People Analyst II" @ datadog
[2026-01-18T05:14:29.702Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T05:14:29.706Z] [BOT ERROR] (node:2595) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T05:14:30.138Z] [BOT] ✅ Created forum post: 🏢 People Analyst II @ datadog in #📣・marketing-jobs
[2026-01-18T05:14:30.138Z] [BOT] ✅ Industry: People Analyst II @ datadog
[2026-01-18T05:14:31.850Z] [BOT] ✅ Created forum post: 🏢 People Analyst II @ datadog in #🗽・new-york
[2026-01-18T05:14:31.850Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T05:14:33.351Z] [BOT] 💾 Marked as posted: People Analyst II @ datadog (instance #1)
[2026-01-18T05:14:33.351Z] [BOT] 💾 BEFORE ARCHIVING: 2572 jobs in database
[2026-01-18T05:14:33.353Z] [BOT] ✅ No jobs to archive (all 2572 jobs within 7-day window)
[2026-01-18T05:14:33.371Z] [BOT] 💾 Saved posted_jobs.json: 2572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:14:33.371Z] [BOT] 📍 [ROUTING] "Associate Event Marketing Manager (New York)" @ datadog
[2026-01-18T05:14:33.371Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T05:14:33.712Z] [BOT] ✅ Created forum post: 🏢 Associate Event Marketing Manager (New York) @ datadog in #📣・marketing-jobs
[2026-01-18T05:14:33.712Z] [BOT] ✅ Industry: Associate Event Marketing Manager (New York) @ datadog
[2026-01-18T05:14:35.388Z] [BOT] ✅ Created forum post: 🏢 Associate Event Marketing Manager (New York) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T05:14:36.889Z] [BOT] 💾 Marked as posted: Associate Event Marketing Manager (New York) @ datadog (instance #1)
[2026-01-18T05:14:36.889Z] [BOT] 💾 BEFORE ARCHIVING: 2573 jobs in database
[2026-01-18T05:14:36.890Z] [BOT] ✅ No jobs to archive (all 2573 jobs within 7-day window)
[2026-01-18T05:14:36.905Z] [BOT] 💾 Saved posted_jobs.json: 2573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:14:39.906Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T05:14:39.906Z] [BOT] 📍 [ROUTING] "Compute Capacity Strategy & Operations" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T05:14:40.196Z] [BOT] ✅ Created forum post: 🏢 Compute Capacity Strategy & Operations @ anthropic in #📈・JID_fb739488
  ✅ Industry: Compute Capacity Strategy & Operations @ anthropic
[2026-01-18T05:14:41.967Z] [BOT] ✅ Created forum post: 🏢 Compute Capacity Strategy & Operations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:14:43.467Z] [BOT] 💾 Marked as posted: Compute Capacity Strategy & Operations @ anthropic (instance #1)
[2026-01-18T05:14:43.468Z] [BOT] 💾 BEFORE ARCHIVING: 2574 jobs in database
[2026-01-18T05:14:43.469Z] [BOT] ✅ No jobs to archive (all 2574 jobs within 7-day window)
[2026-01-18T05:14:43.488Z] [BOT] 💾 Saved posted_jobs.json: 2574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:14:46.489Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T05:14:46.490Z] [BOT] 📍 [ROUTING] "Senior Field Enablement Manager - Leadership Development" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:14:46.765Z] [BOT] ✅ Created forum post: 🏢 Senior Field Enablement Manager - Leadership Development @ datadog in #💲・sales-jobs
  ✅ Industry: Senior Field Enablement Manager - Leadership Development @ datadog
[2026-01-18T05:14:48.550Z] [BOT] ✅ Created forum post: 🏢 Senior Field Enablement Manager - Leadership Development @ datadog in #🗽・new-york
[2026-01-18T05:14:48.550Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T05:14:50.051Z] [BOT] 💾 Marked as posted: Senior Field Enablement Manager - Leadership Development @ datadog (instance #1)
[2026-01-18T05:14:50.052Z] [BOT] 💾 BEFORE ARCHIVING: 2575 jobs in database
[2026-01-18T05:14:50.054Z] [BOT] ✅ No jobs to archive (all 2575 jobs within 7-day window)
[2026-01-18T05:14:50.069Z] [BOT] 💾 Saved posted_jobs.json: 2575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:14:50.069Z] [BOT] 📍 [ROUTING] "Emerging Small Business, Account Executive" @ airtable
[2026-01-18T05:14:50.070Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:14:50.358Z] [BOT] ✅ Created forum post: 🏢 Emerging Small Business, Account Executive @ airtable in #💲・sales-jobs
[2026-01-18T05:14:50.358Z] [BOT] ✅ Industry: Emerging Small Business, Account Executive @ airtable
[2026-01-18T05:14:52.008Z] [BOT ERROR] ❌ Error posting job Emerging Small Business, Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Emerging Small Business, Account Executive @ airtable',
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
[2026-01-18T05:14:52.008Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-18T05:14:53.510Z] [BOT] 💾 Marked as posted: Emerging Small Business, Account Executive @ airtable (instance #1)
[2026-01-18T05:14:53.510Z] [BOT] 💾 BEFORE ARCHIVING: 2576 jobs in database
[2026-01-18T05:14:53.512Z] [BOT] ✅ No jobs to archive (all 2576 jobs within 7-day window)
[2026-01-18T05:14:53.529Z] [BOT] 💾 Saved posted_jobs.json: 2576 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:14:53.529Z] [BOT] 📍 [ROUTING] "Sales Development Representative (Denver)" @ datadog
[2026-01-18T05:14:53.529Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:14:53.651Z] [BOT ERROR] ❌ Error posting job Sales Development Representative (Denver): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sales Development Representative (Denver) @ datadog',
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
[2026-01-18T05:14:53.651Z] [BOT] ❌ Industry post failed: Sales Development Representative (Denver)
⚠️  Channel full error count: 1/5
[2026-01-18T05:14:58.154Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-18T05:14:58.154Z] [BOT] 📍 [ROUTING] "Finance Manager, Business Operations" @ discord
[2026-01-18T05:14:58.154Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-18T05:14:58.349Z] [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Manager, Business Operations @ discord',
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
[2026-01-18T05:14:58.349Z] [BOT] ❌ Industry post failed: Finance Manager, Business Operations
⚠️  Channel full error count: 2/5
[2026-01-18T05:15:00.040Z] [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Manager, Business Operations @ discord',
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
[2026-01-18T05:15:00.040Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:15:04.542Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T05:15:04.542Z] [BOT] 📍 [ROUTING] "Data Center Physical Security Lead" @ anthropic
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:15:04.710Z] [BOT ERROR] ❌ Error posting job Data Center Physical Security Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Center Physical Security Lead @ anthropic',
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
[2026-01-18T05:15:04.710Z] [BOT] ❌ Industry post failed: Data Center Physical Security Lead
⚠️  Channel full error count: 3/5
[2026-01-18T05:15:06.337Z] [BOT ERROR] ❌ Error posting job Data Center Physical Security Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Center Physical Security Lead @ anthropic',
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
[2026-01-18T05:15:06.338Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:15:07.838Z] [BOT] 📍 [ROUTING] "Senior / Staff Software Engineer - Autonomous Agent Infrastructure" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:15:07.972Z] [BOT ERROR] ❌ Error posting job Senior / Staff Software Engineer - Autonomous Agent Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic',
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
[2026-01-18T05:15:07.972Z] [BOT] ❌ Industry post failed: Senior / Staff Software Engineer - Autonomous Agent Infrastructure
⚠️  Channel full error count: 4/5
[2026-01-18T05:15:09.643Z] [BOT ERROR] ❌ Error posting job Senior / Staff Software Engineer - Autonomous Agent Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic',
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
[2026-01-18T05:15:09.643Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:15:14.144Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-18T05:15:14.144Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Developer Platform" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T05:15:14.401Z] [BOT ERROR] ❌ Error posting job Product Designer, Claude Developer Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Designer, Claude Developer Platform @ anthropic',
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
[2026-01-18T05:15:14.401Z] [BOT] ❌ Industry post failed: Product Designer, Claude Developer Platform
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T05:15:14.402Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T05:15:14.402Z] [BOT] Total attempts: 18
   Successful: 9
   Failed: 9
   Skipped: 0
[2026-01-18T05:15:14.402Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T05:15:14.403Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
[2026-01-18T05:15:14.403Z] [BOT] 1. #🗽・new-york: 3 posts
     2. #📣・marketing-jobs: 2 posts
     3. #💲・sales-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-18T05:15:14.403Z] [BOT] [STATS] Channel stats saved
[2026-01-18T05:15:14.403Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T05:15:14.413Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2595) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Emerging Small Business, Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Sales Development Representative (Denver): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Sales Development Representative (Denver)
- [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Manager, Business Operations
- [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Center Physical Security Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Center Physical Security Lead
- [BOT ERROR] ❌ Error posting job Data Center Physical Security Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior / Staff Software Engineer - Autonomous Agent Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior / Staff Software Engineer - Autonomous Agent Infrastructure
- [BOT ERROR] ❌ Error posting job Senior / Staff Software Engineer - Autonomous Agent Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Designer, Claude Developer Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Designer, Claude Developer Platform
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*