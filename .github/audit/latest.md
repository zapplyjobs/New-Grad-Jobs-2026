# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T13:05:46.220Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T13:04:58.681Z] ========================================
[2026-01-04T13:04:58.683Z] Discord Bot Execution Log
[2026-01-04T13:04:58.683Z] Environment: GitHub Actions
[2026-01-04T13:04:58.683Z] Node Version: v20.19.6
[2026-01-04T13:04:58.683Z] ========================================
[2026-01-04T13:04:58.683Z] Environment Variables Check:
[2026-01-04T13:04:58.683Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T13:04:58.683Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.683Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T13:04:58.684Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T13:04:58.684Z] 
Multi-Channel Configuration:
[2026-01-04T13:04:58.684Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T13:04:58.684Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T13:04:58.684Z] 
Data Files Check:
[2026-01-04T13:04:58.685Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118509 bytes)
[2026-01-04T13:04:58.689Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 552198 bytes)
[2026-01-04T13:04:58.689Z] 
========================================
[2026-01-04T13:04:58.689Z] Starting Enhanced Discord Bot...
[2026-01-04T13:04:58.690Z] ========================================
[2026-01-04T13:04:59.209Z] [BOT] ✅ Loaded V2 database: 1098 jobs
[2026-01-04T13:04:59.683Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T13:04:59.683Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T13:04:59.684Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T13:04:59.687Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T13:04:59.755Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T13:04:59.844Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T13:04:59.847Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T13:04:59.847Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T13:04:59.847Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T13:04:59.848Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T13:04:59.848Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T13:04:59.853Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-04T13:04:59.853Z] [BOT] 📍 [ROUTING] "Account Executive, Federal" @ figma
[2026-01-04T13:04:59.853Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:04:59.870Z] [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T13:04:59.989Z] [BOT ERROR] ❌ Error posting job Account Executive, Federal: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive, Federal @ figma',
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
[2026-01-04T13:04:59.989Z] [BOT] ❌ Industry post failed: Account Executive, Federal
[2026-01-04T13:04:59.990Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-04T13:05:01.689Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Federal @ figma in #🌉・san-francisco
[2026-01-04T13:05:01.690Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:03.191Z] [BOT] 💾 Marked as posted: Account Executive, Federal @ figma (instance #1)
[2026-01-04T13:05:03.191Z] [BOT] 💾 BEFORE ARCHIVING: 1099 jobs in database
[2026-01-04T13:05:03.192Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-04T13:05:03.202Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:03.203Z] [BOT] 📍 [ROUTING] "Account Executive, Mid-Market" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:05:03.364Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market @ figma in #💲・sales-jobs
[2026-01-04T13:05:03.364Z] [BOT] ✅ Industry: Account Executive, Mid-Market @ figma
[2026-01-04T13:05:05.080Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:06.581Z] [BOT] 💾 Marked as posted: Account Executive, Mid-Market @ figma (instance #1)
[2026-01-04T13:05:06.581Z] [BOT] 💾 BEFORE ARCHIVING: 1100 jobs in database
[2026-01-04T13:05:06.582Z] [BOT] ✅ No jobs to archive (all 1100 jobs within 7-day window)
[2026-01-04T13:05:06.589Z] [BOT] 💾 Saved posted_jobs.json: 1100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:06.589Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Commercial" @ vercel
[2026-01-04T13:05:06.589Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:05:06.883Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Commercial @ vercel in #💲・sales-jobs
  ✅ Industry: Vercel Development Representative, Commercial @ vercel
[2026-01-04T13:05:08.675Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Commercial @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:10.175Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Commercial @ vercel (instance #1)
[2026-01-04T13:05:10.175Z] [BOT] 💾 BEFORE ARCHIVING: 1101 jobs in database
[2026-01-04T13:05:10.176Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-04T13:05:10.183Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:10.183Z] [BOT] 📍 [ROUTING] "Startup Growth Advisor (Account Executive)" @ vercel
[2026-01-04T13:05:10.184Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:05:10.388Z] [BOT] ✅ Created forum post: 🏢 Startup Growth Advisor (Account Executive) @ vercel in #💲・sales-jobs
[2026-01-04T13:05:10.388Z] [BOT] ✅ Industry: Startup Growth Advisor (Account Executive) @ vercel
[2026-01-04T13:05:12.059Z] [BOT] ✅ Created forum post: 🏢 Startup Growth Advisor (Account Executive) @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:13.561Z] [BOT] 💾 Marked as posted: Startup Growth Advisor (Account Executive) @ vercel (instance #1)
[2026-01-04T13:05:13.561Z] [BOT] 💾 BEFORE ARCHIVING: 1102 jobs in database
[2026-01-04T13:05:13.562Z] [BOT] ✅ No jobs to archive (all 1102 jobs within 7-day window)
[2026-01-04T13:05:13.568Z] [BOT] 💾 Saved posted_jobs.json: 1102 active jobs
[2026-01-04T13:05:13.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:13.569Z] [BOT] 📍 [ROUTING] "Account Executive, v0 Majors" @ vercel
[2026-01-04T13:05:13.569Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:05:13.757Z] [BOT] ✅ Created forum post: 🏢 Account Executive, v0 Majors @ vercel in #💲・sales-jobs
[2026-01-04T13:05:13.758Z] [BOT] ✅ Industry: Account Executive, v0 Majors @ vercel
[2026-01-04T13:05:15.436Z] [BOT] ✅ Created forum post: 🏢 Account Executive, v0 Majors @ vercel in #🌉・san-francisco
[2026-01-04T13:05:15.436Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:16.937Z] [BOT] 💾 Marked as posted: Account Executive, v0 Majors @ vercel (instance #1)
[2026-01-04T13:05:16.937Z] [BOT] 💾 BEFORE ARCHIVING: 1103 jobs in database
[2026-01-04T13:05:16.938Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-04T13:05:16.946Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-04T13:05:16.947Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:16.947Z] [BOT] 📍 [ROUTING] "Director of Partnerships, North America" @ vercel
[2026-01-04T13:05:16.947Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:05:17.194Z] [BOT] ✅ Created forum post: 🏢 Director of Partnerships, North America @ vercel in #💲・sales-jobs
  ✅ Industry: Director of Partnerships, North America @ vercel
[2026-01-04T13:05:18.971Z] [BOT] ✅ Created forum post: 🏢 Director of Partnerships, North America @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:05:20.473Z] [BOT] 💾 Marked as posted: Director of Partnerships, North America @ vercel (instance #1)
[2026-01-04T13:05:20.473Z] [BOT] 💾 BEFORE ARCHIVING: 1104 jobs in database
[2026-01-04T13:05:20.474Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-04T13:05:20.481Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-04T13:05:20.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:23.482Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T13:05:23.483Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager, Personalization" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T13:05:23.716Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineering Manager, Personalization @ spotify
[2026-01-04T13:05:25.456Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T13:05:26.956Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager, Personalization @ spotify (instance #1)
[2026-01-04T13:05:26.957Z] [BOT] 💾 BEFORE ARCHIVING: 1105 jobs in database
[2026-01-04T13:05:26.957Z] [BOT] ✅ No jobs to archive (all 1105 jobs within 7-day window)
[2026-01-04T13:05:26.966Z] [BOT] 💾 Saved posted_jobs.json: 1105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:26.966Z] [BOT] 📍 [ROUTING] "Senior Product Manager - Personalization" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T13:05:27.134Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Product Manager - Personalization @ spotify
[2026-01-04T13:05:29.080Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T13:05:30.580Z] [BOT] 💾 Marked as posted: Senior Product Manager - Personalization @ spotify (instance #1)
[2026-01-04T13:05:30.580Z] [BOT] 💾 BEFORE ARCHIVING: 1106 jobs in database
[2026-01-04T13:05:30.581Z] [BOT] ✅ No jobs to archive (all 1106 jobs within 7-day window)
[2026-01-04T13:05:30.590Z] [BOT] 💾 Saved posted_jobs.json: 1106 active jobs
[2026-01-04T13:05:30.590Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:30.590Z] [BOT] 📍 [ROUTING] "Accounting Manager" @ nominal
[2026-01-04T13:05:30.590Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T13:05:30.898Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤖・ai-jobs
  ✅ Industry: Accounting Manager @ nominal
[2026-01-04T13:05:32.655Z] [BOT ERROR] ❌ Error posting job Accounting Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Accounting Manager @ nominal',
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
[2026-01-04T13:05:32.655Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-04T13:05:34.157Z] [BOT] 💾 Marked as posted: Accounting Manager @ nominal (instance #1)
[2026-01-04T13:05:34.157Z] [BOT] 💾 BEFORE ARCHIVING: 1107 jobs in database
[2026-01-04T13:05:34.158Z] [BOT] ✅ No jobs to archive (all 1107 jobs within 7-day window)
[2026-01-04T13:05:34.166Z] [BOT] 💾 Saved posted_jobs.json: 1107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:05:37.166Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T13:05:37.166Z] [BOT] 📍 [ROUTING] "Engineering Manager, CDN" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T13:05:37.166Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:05:37.306Z] [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, CDN @ vercel',
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
[2026-01-04T13:05:37.306Z] [BOT] ❌ Industry post failed: Engineering Manager, CDN
⚠️  Channel full error count: 1/5
[2026-01-04T13:05:38.924Z] [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, CDN @ vercel',
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
[2026-01-04T13:05:38.924Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:05:43.427Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_fc4f97d1 (posted within 7 days)
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_64794b1b (posted within 7 days)
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_3ef4675e (posted within 7 days)
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_8d9fe176 (posted within 7 days)
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-01-04T13:05:43.428Z] [BOT] ⏭️  Skipping duplicate: JID_4268540e (posted within 7 days)
[2026-01-04T13:05:43.429Z] [BOT] ⏭️  Skipping duplicate: JID_0f437186 (posted within 7 days)
[2026-01-04T13:05:43.429Z] [BOT] ⏭️  Skipping duplicate: JID_2127cbfa (posted within 7 days)
⏭️  Skipping duplicate: JID_180b7712 (posted within 7 days)
[2026-01-04T13:05:43.436Z] [BOT] ✅ Loaded pending queue: 192 total (172 pending, 20 enriched, 0 posted)
[2026-01-04T13:05:43.451Z] [BOT] ✅ Saved pending queue: 192 total (172 pending, 11 enriched, 9 posted)
[2026-01-04T13:05:43.451Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T13:05:43.499Z] [BOT] 📂 Loaded 2009 existing routing entries
[2026-01-04T13:05:43.555Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T13:05:43.555Z] [BOT] Total entries: 2019
   Timestamp: 2026-01-04T13:05:43.543Z
[2026-01-04T13:05:43.555Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T13:05:43.556Z] [BOT] Total attempts: 20
   Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-04T13:05:43.556Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T13:05:43.556Z] [BOT] Last cleanup: Never
[2026-01-04T13:05:43.556Z] [BOT] Total posts: 16
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #💲・sales-jobs: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
[2026-01-04T13:05:43.556Z] [BOT] [STATS] Channel stats saved
[2026-01-04T13:05:45.570Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Account Executive, Federal: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Account Executive, Federal
- [BOT ERROR] ❌ Error posting job Accounting Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, CDN
- [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*