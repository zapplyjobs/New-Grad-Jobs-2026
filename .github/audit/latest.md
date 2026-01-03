# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T23:50:11.248Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T23:49:37.420Z] ========================================
[2026-01-03T23:49:37.422Z] Discord Bot Execution Log
[2026-01-03T23:49:37.422Z] Environment: GitHub Actions
[2026-01-03T23:49:37.423Z] Node Version: v20.19.6
[2026-01-03T23:49:37.423Z] ========================================
[2026-01-03T23:49:37.423Z] Environment Variables Check:
[2026-01-03T23:49:37.423Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T23:49:37.423Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.423Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T23:49:37.423Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T23:49:37.423Z] 
Multi-Channel Configuration:
[2026-01-03T23:49:37.423Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T23:49:37.424Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T23:49:37.424Z] 
Data Files Check:
[2026-01-03T23:49:37.425Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156867 bytes)
[2026-01-03T23:49:37.429Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 423702 bytes)
[2026-01-03T23:49:37.429Z] 
========================================
[2026-01-03T23:49:37.429Z] Starting Enhanced Discord Bot...
[2026-01-03T23:49:37.429Z] ========================================
[2026-01-03T23:49:37.998Z] [BOT] ✅ Loaded V2 database: 837 jobs
[2026-01-03T23:49:38.859Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T23:49:38.860Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T23:49:38.860Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T23:49:38.861Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T23:49:38.939Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T23:49:39.032Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T23:49:39.036Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T23:49:39.037Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T23:49:39.037Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T23:49:39.038Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T23:49:39.038Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   -  Senior Manager, Implementation @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Senior Partner Marketing Manager @ brex: san francisco, california, united states, salt lake city, utah, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T23:49:39.042Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T23:49:39.043Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
[2026-01-03T23:49:39.043Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T23:49:39.049Z] [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T23:49:39.175Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  Senior Manager, Implementation @ brex',
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
[2026-01-03T23:49:39.176Z] [BOT] ❌ Industry post failed:  Senior Manager, Implementation
⚠️  Channel full error count: 1/5
[2026-01-03T23:49:40.858Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  Senior Manager, Implementation @ brex',
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
[2026-01-03T23:49:40.859Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-03T23:49:45.360Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T23:49:45.362Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ brex
[2026-01-03T23:49:45.363Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T23:49:45.573Z] [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Partner Marketing Manager @ brex',
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
[2026-01-03T23:49:45.573Z] [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
⚠️  Channel full error count: 2/5
[2026-01-03T23:49:47.247Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ brex in #🌉・san-francisco
[2026-01-03T23:49:47.248Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T23:49:48.749Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
[2026-01-03T23:49:48.749Z] [BOT] 💾 BEFORE ARCHIVING: 838 jobs in database
[2026-01-03T23:49:48.750Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2026-01-03T23:49:48.761Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:49:48.762Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
[2026-01-03T23:49:48.762Z] [BOT] 💾 BEFORE ARCHIVING: 839 jobs in database
[2026-01-03T23:49:48.763Z] [BOT] ✅ No jobs to archive (all 839 jobs within 7-day window)
[2026-01-03T23:49:48.769Z] [BOT] 💾 Saved posted_jobs.json: 839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:49:48.769Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ brex (instance #1)
[2026-01-03T23:49:48.769Z] [BOT] 💾 BEFORE ARCHIVING: 840 jobs in database
[2026-01-03T23:49:48.770Z] [BOT] ✅ No jobs to archive (all 840 jobs within 7-day window)
[2026-01-03T23:49:48.776Z] [BOT] 💾 Saved posted_jobs.json: 840 active jobs
[2026-01-03T23:49:48.776Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T23:49:51.777Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T23:49:51.778Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Full-Stack" @ brex
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T23:49:51.778Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T23:49:52.053Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Full-Stack @ brex in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Full-Stack @ brex
[2026-01-03T23:49:53.762Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Full-Stack @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T23:49:55.263Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Full-Stack @ brex (instance #1)
[2026-01-03T23:49:55.263Z] [BOT] 💾 BEFORE ARCHIVING: 841 jobs in database
[2026-01-03T23:49:55.264Z] [BOT] ✅ No jobs to archive (all 841 jobs within 7-day window)
[2026-01-03T23:49:55.271Z] [BOT] 💾 Saved posted_jobs.json: 841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:49:58.272Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T23:49:58.273Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Product " @ brex
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T23:49:58.585Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Product  @ brex in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer, Product  @ brex
[2026-01-03T23:50:00.235Z] [BOT ERROR] ❌ Error posting job Senior Software Engineer, Product : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Software Engineer, Product  @ brex',
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
[2026-01-03T23:50:00.235Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-03T23:50:01.737Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Product  @ brex (instance #1)
[2026-01-03T23:50:01.737Z] [BOT] 💾 BEFORE ARCHIVING: 842 jobs in database
[2026-01-03T23:50:01.737Z] [BOT] ✅ No jobs to archive (all 842 jobs within 7-day window)
[2026-01-03T23:50:01.745Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
[2026-01-03T23:50:01.745Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T23:50:01.745Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
   Category: TECH (matched: "software")
[2026-01-03T23:50:01.745Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T23:50:01.867Z] [BOT ERROR] ❌ Error posting job Software Engineer II, Product : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer II, Product  @ brex',
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
[2026-01-03T23:50:01.867Z] [BOT] ❌ Industry post failed: Software Engineer II, Product 
⚠️  Channel full error count: 1/5
[2026-01-03T23:50:03.511Z] [BOT ERROR] ❌ Error posting job Software Engineer II, Product : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer II, Product  @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-03T23:50:03.511Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-03T23:50:08.013Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 2
[2026-01-03T23:50:08.013Z] [BOT] ⏭️  Skipping duplicate: JID_58f83c1d (posted within 7 days)
[2026-01-03T23:50:08.013Z] [BOT] ⏭️  Skipping duplicate: JID_baae5752 (posted within 7 days)
[2026-01-03T23:50:08.013Z] [BOT] ⏭️  Skipping duplicate: JID_7ea6b88d (posted within 7 days)
[2026-01-03T23:50:08.054Z] [BOT] ✅ Loaded pending queue: 452 total (432 pending, 20 enriched, 0 posted)
[2026-01-03T23:50:08.102Z] [BOT] ✅ Saved pending queue: 452 total (432 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-03T23:50:08.102Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T23:50:08.155Z] [BOT] 📂 Loaded 1745 existing routing entries
[2026-01-03T23:50:08.205Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 1750
[2026-01-03T23:50:08.205Z] [BOT] Timestamp: 2026-01-03T23:50:08.197Z
[2026-01-03T23:50:08.206Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T23:50:08.206Z] [BOT] Total attempts: 10
   Successful: 4
   Failed: 6
   Skipped: 0
[2026-01-03T23:50:08.206Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T23:50:08.206Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-03T23:50:08.206Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-03T23:50:08.207Z] [BOT] [STATS] Channel stats saved
[2026-01-03T23:50:10.224Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  Senior Manager, Implementation
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Software Engineer, Product : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer II, Product : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer II, Product
- [BOT ERROR] ❌ Error posting job Software Engineer II, Product : DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*