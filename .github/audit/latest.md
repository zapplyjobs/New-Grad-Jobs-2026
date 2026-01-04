# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T08:25:59.978Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T08:25:09.124Z] ========================================
[2026-01-04T08:25:09.126Z] Discord Bot Execution Log
[2026-01-04T08:25:09.126Z] Environment: GitHub Actions
[2026-01-04T08:25:09.126Z] Node Version: v20.19.6
[2026-01-04T08:25:09.126Z] ========================================
[2026-01-04T08:25:09.126Z] Environment Variables Check:
[2026-01-04T08:25:09.126Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T08:25:09.127Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T08:25:09.127Z] 
Multi-Channel Configuration:
[2026-01-04T08:25:09.127Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.127Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.128Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.128Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.128Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.128Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T08:25:09.128Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T08:25:09.128Z] 
Data Files Check:
[2026-01-04T08:25:09.129Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164251 bytes)
[2026-01-04T08:25:09.133Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 478108 bytes)
[2026-01-04T08:25:09.133Z] 
========================================
[2026-01-04T08:25:09.133Z] Starting Enhanced Discord Bot...
[2026-01-04T08:25:09.133Z] ========================================
[2026-01-04T08:25:09.678Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-04T08:25:10.319Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T08:25:10.320Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T08:25:10.320Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T08:25:10.321Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T08:25:10.398Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T08:25:10.497Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T08:25:10.500Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T08:25:10.500Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T08:25:10.500Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T08:25:10.501Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T08:25:10.501Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T08:25:10.506Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T08:25:10.507Z] [BOT] 📍 [ROUTING] "Customer Engagement Strategy Lead, Office of CCO" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-04T08:25:10.507Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:25:10.526Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T08:25:10.624Z] [BOT ERROR] ❌ Error posting job Customer Engagement Strategy Lead, Office of CCO: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Customer Engagement Strategy Lead, Office of CCO @ anthropic',
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
[2026-01-04T08:25:10.625Z] [BOT] ❌ Industry post failed: Customer Engagement Strategy Lead, Office of CCO
⚠️  Channel full error count: 1/5
[2026-01-04T08:25:12.341Z] [BOT] ✅ Created forum post: 🏢 Customer Engagement Strategy Lead, Office of CCO @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:13.842Z] [BOT] 💾 Marked as posted: Customer Engagement Strategy Lead, Office of CCO @ anthropic (instance #1)
[2026-01-04T08:25:13.843Z] [BOT] 💾 BEFORE ARCHIVING: 950 jobs in database
[2026-01-04T08:25:13.844Z] [BOT] ✅ No jobs to archive (all 950 jobs within 7-day window)
[2026-01-04T08:25:13.857Z] [BOT] 💾 Saved posted_jobs.json: 950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:13.857Z] [BOT] 📍 [ROUTING] "Customer Success Manager" @ anthropic
[2026-01-04T08:25:13.857Z] [BOT] Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:25:14.034Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager @ anthropic in #💲・sales-jobs
[2026-01-04T08:25:14.034Z] [BOT] ✅ Industry: Customer Success Manager @ anthropic
[2026-01-04T08:25:15.871Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:17.371Z] [BOT] 💾 Marked as posted: Customer Success Manager @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 951 jobs in database
[2026-01-04T08:25:17.372Z] [BOT] ✅ No jobs to archive (all 951 jobs within 7-day window)
[2026-01-04T08:25:17.380Z] [BOT] 💾 Saved posted_jobs.json: 951 active jobs
[2026-01-04T08:25:17.381Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:17.381Z] [BOT] 📍 [ROUTING] "Director, Order Management & Billing" @ anthropic
[2026-01-04T08:25:17.381Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:25:17.527Z] [BOT] ✅ Created forum post: 🏢 Director, Order Management & Billing @ anthropic in #💲・sales-jobs
[2026-01-04T08:25:17.527Z] [BOT] ✅ Industry: Director, Order Management & Billing @ anthropic
[2026-01-04T08:25:19.206Z] [BOT] ✅ Created forum post: 🏢 Director, Order Management & Billing @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:20.707Z] [BOT] 💾 Marked as posted: Director, Order Management & Billing @ anthropic (instance #1)
[2026-01-04T08:25:20.708Z] [BOT] 💾 BEFORE ARCHIVING: 952 jobs in database
[2026-01-04T08:25:20.708Z] [BOT] ✅ No jobs to archive (all 952 jobs within 7-day window)
[2026-01-04T08:25:20.718Z] [BOT] 💾 Saved posted_jobs.json: 952 active jobs
[2026-01-04T08:25:20.718Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:23.718Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T08:25:23.719Z] [BOT] 📍 [ROUTING] "Customer Marketing Manager" @ anthropic
[2026-01-04T08:25:23.719Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T08:25:24.058Z] [BOT] ✅ Created forum post: 🏢 Customer Marketing Manager @ anthropic in #📣・marketing-jobs
[2026-01-04T08:25:24.058Z] [BOT] ✅ Industry: Customer Marketing Manager @ anthropic
[2026-01-04T08:25:25.753Z] [BOT] ✅ Created forum post: 🏢 Customer Marketing Manager @ anthropic in #🌉・san-francisco
[2026-01-04T08:25:25.754Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:27.255Z] [BOT] 💾 Marked as posted: Customer Marketing Manager @ anthropic (instance #1)
[2026-01-04T08:25:27.255Z] [BOT] 💾 BEFORE ARCHIVING: 953 jobs in database
[2026-01-04T08:25:27.256Z] [BOT] ✅ No jobs to archive (all 953 jobs within 7-day window)
[2026-01-04T08:25:27.266Z] [BOT] 💾 Saved posted_jobs.json: 953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:27.266Z] [BOT] 📍 [ROUTING] "Director, Compute Infrastructure Procurement " @ anthropic
[2026-01-04T08:25:27.266Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T08:25:27.519Z] [BOT] ✅ Created forum post: 🏢 Director, Compute Infrastructure Procurement  @ anthropic in #📣・marketing-jobs
  ✅ Industry: Director, Compute Infrastructure Procurement  @ anthropic
[2026-01-04T08:25:29.264Z] [BOT] ✅ Created forum post: 🏢 Director, Compute Infrastructure Procurement  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:30.766Z] [BOT] 💾 Marked as posted: Director, Compute Infrastructure Procurement  @ anthropic (instance #1)
[2026-01-04T08:25:30.766Z] [BOT] 💾 BEFORE ARCHIVING: 954 jobs in database
[2026-01-04T08:25:30.767Z] [BOT] ✅ No jobs to archive (all 954 jobs within 7-day window)
[2026-01-04T08:25:30.777Z] [BOT] 💾 Saved posted_jobs.json: 954 active jobs
[2026-01-04T08:25:30.777Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:33.778Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T08:25:33.778Z] [BOT] 📍 [ROUTING] "Data Operations Manager" @ anthropic
   Category: TECH (matched: "data")
[2026-01-04T08:25:33.778Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:25:33.964Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Operations Manager @ anthropic
[2026-01-04T08:25:35.702Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:37.203Z] [BOT] 💾 Marked as posted: Data Operations Manager @ anthropic (instance #1)
[2026-01-04T08:25:37.203Z] [BOT] 💾 BEFORE ARCHIVING: 955 jobs in database
[2026-01-04T08:25:37.204Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-04T08:25:37.213Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:37.214Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Developer Platform" @ anthropic
[2026-01-04T08:25:37.214Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:25:37.523Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Developer Platform @ anthropic in #💻・tech-jobs
[2026-01-04T08:25:37.523Z] [BOT] ✅ Industry: Engineering Manager, Claude Developer Platform @ anthropic
[2026-01-04T08:25:39.296Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Developer Platform @ anthropic in #🌉・san-francisco
[2026-01-04T08:25:39.296Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:40.796Z] [BOT] 💾 Marked as posted: Engineering Manager, Claude Developer Platform @ anthropic (instance #1)
[2026-01-04T08:25:40.797Z] [BOT] 💾 BEFORE ARCHIVING: 956 jobs in database
[2026-01-04T08:25:40.797Z] [BOT] ✅ No jobs to archive (all 956 jobs within 7-day window)
[2026-01-04T08:25:40.807Z] [BOT] 💾 Saved posted_jobs.json: 956 active jobs
[2026-01-04T08:25:40.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:40.808Z] [BOT] 📍 [ROUTING] "Engineering Manager, Desktop" @ anthropic
[2026-01-04T08:25:40.808Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:25:40.910Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Desktop: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, Desktop @ anthropic',
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
[2026-01-04T08:25:40.911Z] [BOT] ❌ Industry post failed: Engineering Manager, Desktop
⚠️  Channel full error count: 1/5
[2026-01-04T08:25:42.576Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Desktop @ anthropic in #🌉・san-francisco
[2026-01-04T08:25:42.576Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:25:44.076Z] [BOT] 💾 Marked as posted: Engineering Manager, Desktop @ anthropic (instance #1)
[2026-01-04T08:25:44.077Z] [BOT] 💾 BEFORE ARCHIVING: 957 jobs in database
[2026-01-04T08:25:44.078Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-04T08:25:44.087Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
[2026-01-04T08:25:44.087Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:47.088Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T08:25:47.089Z] [BOT] 📍 [ROUTING] "Engineering Manager, Inference" @ anthropic
[2026-01-04T08:25:47.089Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:25:47.512Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Inference @ anthropic in #🤖・ai-jobs
  ✅ Industry: Engineering Manager, Inference @ anthropic
[2026-01-04T08:25:49.446Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Inference: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, Inference @ anthropic',
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
[2026-01-04T08:25:49.446Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:25:50.947Z] [BOT] 💾 Marked as posted: Engineering Manager, Inference @ anthropic (instance #1)
[2026-01-04T08:25:50.948Z] [BOT] 💾 BEFORE ARCHIVING: 958 jobs in database
[2026-01-04T08:25:50.949Z] [BOT] ✅ No jobs to archive (all 958 jobs within 7-day window)
[2026-01-04T08:25:50.958Z] [BOT] 💾 Saved posted_jobs.json: 958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:25:50.958Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-04T08:25:50.958Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:25:51.060Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T08:25:51.060Z] [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
⚠️  Channel full error count: 1/5
[2026-01-04T08:25:52.680Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T08:25:52.680Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:25:57.182Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T08:25:57.183Z] [BOT] ⏭️  Skipping duplicate: JID_dc96d916 (posted within 7 days)
[2026-01-04T08:25:57.183Z] [BOT] ⏭️  Skipping duplicate: JID_eb4bb172 (posted within 7 days)
[2026-01-04T08:25:57.183Z] [BOT] ⏭️  Skipping duplicate: JID_8ed7df7b (posted within 7 days)
[2026-01-04T08:25:57.183Z] [BOT] ⏭️  Skipping duplicate: JID_c5d6fff1 (posted within 7 days)
[2026-01-04T08:25:57.183Z] [BOT] ⏭️  Skipping duplicate: JID_8c0f5441 (posted within 7 days)
[2026-01-04T08:25:57.184Z] [BOT] ⏭️  Skipping duplicate: JID_51b3315a (posted within 7 days)
⏭️  Skipping duplicate: JID_a88e8770 (posted within 7 days)
⏭️  Skipping duplicate: JID_8e32a49c (posted within 7 days)
⏭️  Skipping duplicate: JID_26b14c96 (posted within 7 days)
[2026-01-04T08:25:57.223Z] [BOT] ✅ Loaded pending queue: 341 total (321 pending, 20 enriched, 0 posted)
[2026-01-04T08:25:57.258Z] [BOT] ✅ Saved pending queue: 341 total (321 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-04T08:25:57.258Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T08:25:57.313Z] [BOT] 📂 Loaded 1849 existing routing entries
[2026-01-04T08:25:57.364Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T08:25:57.365Z] [BOT] Total entries: 1859
   Timestamp: 2026-01-04T08:25:57.356Z
[2026-01-04T08:25:57.365Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T08:25:57.365Z] [BOT] Total attempts: 20
   Successful: 15
   Failed: 5
   Skipped: 0
[2026-01-04T08:25:57.365Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T08:25:57.366Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 2 posts
     3. #📣・marketing-jobs: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-04T08:25:57.366Z] [BOT] [STATS] Channel stats saved
[2026-01-04T08:25:59.383Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Engagement Strategy Lead, Office of CCO: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Engagement Strategy Lead, Office of CCO
- [BOT ERROR] ❌ Error posting job Engineering Manager, Desktop: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Desktop
- [BOT ERROR] ❌ Error posting job Engineering Manager, Inference: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*