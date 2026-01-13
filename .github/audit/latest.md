# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T18:28:25.521Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T18:27:36.836Z] ========================================
[2026-01-13T18:27:36.837Z] Discord Bot Execution Log
[2026-01-13T18:27:36.838Z] Environment: GitHub Actions
[2026-01-13T18:27:36.838Z] Node Version: v20.19.6
[2026-01-13T18:27:36.838Z] ========================================
[2026-01-13T18:27:36.838Z] Environment Variables Check:
[2026-01-13T18:27:36.838Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T18:27:36.838Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.838Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T18:27:36.838Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T18:27:36.838Z] 
Multi-Channel Configuration:
[2026-01-13T18:27:36.838Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.838Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.838Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.838Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T18:27:36.839Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T18:27:36.839Z] 
Data Files Check:
[2026-01-13T18:27:36.840Z] .github/data/new_jobs.json: ✅ Exists (10 items, 204269 bytes)
[2026-01-13T18:27:36.844Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 473877 bytes)
[2026-01-13T18:27:36.844Z] 
========================================
[2026-01-13T18:27:36.844Z] Starting Enhanced Discord Bot...
[2026-01-13T18:27:36.844Z] ========================================
[2026-01-13T18:27:37.372Z] [BOT] ✅ Loaded V2 database: 897 jobs
[2026-01-13T18:27:38.126Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T18:27:38.126Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T18:27:38.126Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T18:27:38.232Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Enterprise Marketing Manager at airtable
[2026-01-13T18:27:38.236Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T18:27:38.236Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T18:27:38.236Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T18:27:38.237Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T18:27:38.237Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T18:27:38.242Z] [BOT] 📌 Posting 4 jobs to #📣・marketing-jobs
[2026-01-13T18:27:38.242Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
[2026-01-13T18:27:38.242Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:27:38.247Z] [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T18:27:38.389Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T18:27:38.389Z] [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-13T18:27:40.034Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T18:27:40.034Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T18:27:41.534Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:27:41.697Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
[2026-01-13T18:27:41.697Z] [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
⚠️  Channel full error count: 2/5
[2026-01-13T18:27:43.329Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
[2026-01-13T18:27:43.329Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T18:27:44.830Z] [BOT] 📍 [ROUTING] "Senior Manager, People Systems" @ airtable
[2026-01-13T18:27:44.830Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:27:45.308Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ airtable in #📣・marketing-jobs
  ✅ Industry: Senior Manager, People Systems @ airtable
[2026-01-13T18:27:47.016Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T18:27:48.517Z] [BOT] 💾 Marked as posted: Senior Manager, People Systems @ airtable (instance #1)
[2026-01-13T18:27:48.517Z] [BOT] 💾 BEFORE ARCHIVING: 898 jobs in database
[2026-01-13T18:27:48.518Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T18:27:48.521Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-13T18:27:48.521Z] [BOT] ✅ Archiving complete: 5 archived, 893 active
[2026-01-13T18:27:48.528Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T18:27:48.528Z] [BOT] 📍 [ROUTING] "Senior Paralegal" @ airtable
   Category: MARKETING (matched: "growth")
[2026-01-13T18:27:48.529Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:27:48.728Z] [BOT] ✅ Created forum post: 🏢 Senior Paralegal @ airtable in #📣・marketing-jobs
[2026-01-13T18:27:48.728Z] [BOT] ✅ Industry: Senior Paralegal @ airtable
[2026-01-13T18:27:50.478Z] [BOT] ✅ Created forum post: 🏢 Senior Paralegal @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T18:27:51.979Z] [BOT] 💾 Marked as posted: Senior Paralegal @ airtable (instance #1)
[2026-01-13T18:27:51.979Z] [BOT] 💾 BEFORE ARCHIVING: 894 jobs in database
[2026-01-13T18:27:51.980Z] [BOT] ✅ No jobs to archive (all 894 jobs within 7-day window)
[2026-01-13T18:27:51.987Z] [BOT] 💾 Saved posted_jobs.json: 894 active jobs
[2026-01-13T18:27:51.987Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:27:54.988Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T18:27:54.988Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ airtable
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T18:27:55.175Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Finance Systems @ airtable in #💲・sales-jobs
  ✅ Industry: Senior Manager, Finance Systems @ airtable
[2026-01-13T18:27:56.982Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Finance Systems @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T18:27:58.483Z] [BOT] 💾 Marked as posted: Senior Manager, Finance Systems @ airtable (instance #1)
[2026-01-13T18:27:58.483Z] [BOT] 💾 BEFORE ARCHIVING: 895 jobs in database
[2026-01-13T18:27:58.484Z] [BOT] ✅ No jobs to archive (all 895 jobs within 7-day window)
[2026-01-13T18:27:58.491Z] [BOT] 💾 Saved posted_jobs.json: 895 active jobs
[2026-01-13T18:27:58.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:27:58.492Z] [BOT] 📍 [ROUTING] "Senior Solutions Consultant" @ airtable
[2026-01-13T18:27:58.492Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T18:27:58.742Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant @ airtable in #💲・sales-jobs
  ✅ Industry: Senior Solutions Consultant @ airtable
[2026-01-13T18:28:00.628Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant @ airtable in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T18:28:02.130Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant @ airtable (instance #1)
💾 BEFORE ARCHIVING: 896 jobs in database
[2026-01-13T18:28:02.131Z] [BOT] ✅ No jobs to archive (all 896 jobs within 7-day window)
[2026-01-13T18:28:02.138Z] [BOT] 💾 Saved posted_jobs.json: 896 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T18:28:02.139Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ airtable
[2026-01-13T18:28:02.139Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T18:28:02.319Z] [BOT ERROR] ❌ Error posting job Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions Consultant @ airtable',
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
[2026-01-13T18:28:02.319Z] [BOT] ❌ Industry post failed: Solutions Consultant
⚠️  Channel full error count: 1/5
[2026-01-13T18:28:04.048Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ airtable in #🤠・austin
[2026-01-13T18:28:04.048Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T18:28:05.549Z] [BOT] 💾 Marked as posted: Solutions Consultant @ airtable (instance #1)
[2026-01-13T18:28:05.549Z] [BOT] 💾 BEFORE ARCHIVING: 897 jobs in database
[2026-01-13T18:28:05.550Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2026-01-13T18:28:05.556Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T18:28:08.557Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T18:28:08.557Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ airtable
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:28:08.750Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ airtable in #💻・tech-jobs
[2026-01-13T18:28:08.750Z] [BOT] ✅ Industry: Software Engineer, Android @ airtable
[2026-01-13T18:28:10.642Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T18:28:12.143Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ airtable (instance #1)
[2026-01-13T18:28:12.143Z] [BOT] 💾 BEFORE ARCHIVING: 898 jobs in database
[2026-01-13T18:28:12.144Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2026-01-13T18:28:12.153Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T18:28:12.154Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (2-8 YOE)" @ airtable
[2026-01-13T18:28:12.154Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:28:12.388Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (2-8 YOE) @ airtable in #💻・tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (2-8 YOE) @ airtable
[2026-01-13T18:28:14.109Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (2-8 YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T18:28:15.611Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (2-8 YOE) @ airtable (instance #1)
[2026-01-13T18:28:15.611Z] [BOT] 💾 BEFORE ARCHIVING: 899 jobs in database
[2026-01-13T18:28:15.612Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2026-01-13T18:28:15.620Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
[2026-01-13T18:28:15.620Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:28:15.620Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (8+ YOE)" @ airtable
   Category: TECH (matched: "software")
[2026-01-13T18:28:15.620Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:28:16.052Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (8+ YOE) @ airtable in #💻・tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (8+ YOE) @ airtable
[2026-01-13T18:28:17.831Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (8+ YOE) @ airtable in #🌉・san-francisco
[2026-01-13T18:28:17.831Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T18:28:19.332Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (8+ YOE) @ airtable (instance #1)
[2026-01-13T18:28:19.333Z] [BOT] 💾 BEFORE ARCHIVING: 900 jobs in database
[2026-01-13T18:28:19.333Z] [BOT] ✅ No jobs to archive (all 900 jobs within 7-day window)
[2026-01-13T18:28:19.341Z] [BOT] 💾 Saved posted_jobs.json: 900 active jobs
[2026-01-13T18:28:19.341Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:28:22.341Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_69728141 (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_35040d7a (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_6045abb3 (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_c3b16c3e (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_7382d413 (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_36d204f3 (posted within 7 days)
[2026-01-13T18:28:22.342Z] [BOT] ⏭️  Skipping duplicate: JID_f67c90ef (posted within 7 days)
[2026-01-13T18:28:22.343Z] [BOT] ⏭️  Skipping duplicate: JID_6ffb7799 (posted within 7 days)
[2026-01-13T18:28:22.459Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[2026-01-13T18:28:22.628Z] [BOT] ✅ Saved pending queue: 2730 total (2710 pending, 12 enriched, 8 posted)
[2026-01-13T18:28:22.628Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T18:28:22.679Z] [BOT] 📂 Loaded 3035 existing routing entries
[2026-01-13T18:28:22.737Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T18:28:22.737Z] [BOT] Total entries: 3045
   Timestamp: 2026-01-13T18:28:22.724Z
[2026-01-13T18:28:22.737Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T18:28:22.737Z] [BOT] Total attempts: 20
   Successful: 15
   Failed: 5
   Skipped: 0
[2026-01-13T18:28:22.738Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T18:28:22.738Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-13T18:28:22.738Z] [BOT] 3. #📣・marketing-jobs: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-13T18:28:22.738Z] [BOT] [STATS] Channel stats saved
[2026-01-13T18:28:24.761Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Solutions Consultant
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*