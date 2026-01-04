# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T07:07:38.019Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T07:06:56.446Z] ========================================
[2026-01-04T07:06:56.448Z] Discord Bot Execution Log
[2026-01-04T07:06:56.448Z] Environment: GitHub Actions
[2026-01-04T07:06:56.448Z] Node Version: v20.19.6
[2026-01-04T07:06:56.448Z] ========================================
[2026-01-04T07:06:56.448Z] Environment Variables Check:
[2026-01-04T07:06:56.448Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T07:06:56.448Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.448Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T07:06:56.449Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T07:06:56.449Z] 
Multi-Channel Configuration:
[2026-01-04T07:06:56.449Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T07:06:56.449Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T07:06:56.449Z] 
Data Files Check:
[2026-01-04T07:06:56.450Z] .github/data/new_jobs.json: ✅ Exists (10 items, 144192 bytes)
[2026-01-04T07:06:56.454Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 466230 bytes)
[2026-01-04T07:06:56.454Z] 
========================================
[2026-01-04T07:06:56.454Z] Starting Enhanced Discord Bot...
[2026-01-04T07:06:56.454Z] ========================================
[2026-01-04T07:06:56.994Z] [BOT] ✅ Loaded V2 database: 925 jobs
[2026-01-04T07:06:58.819Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T07:06:58.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T07:06:58.820Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T07:06:58.823Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T07:06:58.893Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T07:06:58.983Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T07:06:58.985Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T07:06:58.986Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T07:06:58.986Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T07:06:58.987Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T07:06:58.987Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T07:06:58.992Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-04T07:06:58.992Z] [BOT] 📍 [ROUTING] "Lifecycle Marketing Manager" @ vercel
[2026-01-04T07:06:58.992Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T07:06:59.010Z] [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T07:06:59.102Z] [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lifecycle Marketing Manager @ vercel',
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
[2026-01-04T07:06:59.102Z] [BOT] ❌ Industry post failed: Lifecycle Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-04T07:07:00.738Z] [BOT] ✅ Created forum post: 🏢 Lifecycle Marketing Manager @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:07:02.239Z] [BOT] 💾 Marked as posted: Lifecycle Marketing Manager @ vercel (instance #1)
[2026-01-04T07:07:02.239Z] [BOT] 💾 BEFORE ARCHIVING: 926 jobs in database
[2026-01-04T07:07:02.240Z] [BOT] ✅ No jobs to archive (all 926 jobs within 7-day window)
[2026-01-04T07:07:02.249Z] [BOT] 💾 Saved posted_jobs.json: 926 active jobs
[2026-01-04T07:07:02.250Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:07:02.250Z] [BOT] 📍 [ROUTING] "Director, Technical Accounting & Financial Reporting" @ vercel
[2026-01-04T07:07:02.250Z] [BOT] Category: MARKETING (matched: "growth")
[2026-01-04T07:07:02.250Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T07:07:02.396Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Accounting & Financial Reporting @ vercel in #📣・marketing-jobs
[2026-01-04T07:07:02.396Z] [BOT] ✅ Industry: Director, Technical Accounting & Financial Reporting @ vercel
[2026-01-04T07:07:04.042Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Accounting & Financial Reporting @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:07:05.542Z] [BOT] 💾 Marked as posted: Director, Technical Accounting & Financial Reporting @ vercel (instance #1)
💾 BEFORE ARCHIVING: 927 jobs in database
[2026-01-04T07:07:05.543Z] [BOT] ✅ No jobs to archive (all 927 jobs within 7-day window)
[2026-01-04T07:07:05.549Z] [BOT] 💾 Saved posted_jobs.json: 927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T07:07:05.549Z] [BOT] 📍 [ROUTING] "Staff Product Marketing Manager, v0" @ vercel
[2026-01-04T07:07:05.549Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T07:07:05.804Z] [BOT] ✅ Created forum post: 🏢 Staff Product Marketing Manager, v0 @ vercel in #📣・marketing-jobs
[2026-01-04T07:07:05.805Z] [BOT] ✅ Industry: Staff Product Marketing Manager, v0 @ vercel
[2026-01-04T07:07:07.544Z] [BOT] ✅ Created forum post: 🏢 Staff Product Marketing Manager, v0 @ vercel in #🌉・san-francisco
[2026-01-04T07:07:07.545Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T07:07:09.046Z] [BOT] 💾 Marked as posted: Staff Product Marketing Manager, v0 @ vercel (instance #1)
[2026-01-04T07:07:09.046Z] [BOT] 💾 BEFORE ARCHIVING: 928 jobs in database
[2026-01-04T07:07:09.047Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-04T07:07:09.052Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T07:07:12.054Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T07:07:12.054Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: SALES (matched: "sales")
[2026-01-04T07:07:12.054Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T07:07:12.238Z] [BOT] ✅ Created forum post: 🏢 Manager, GTM Finance @ figma in #💲・sales-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-04T07:07:13.889Z] [BOT] ✅ Created forum post: 🏢 Manager, GTM Finance @ figma in #🌉・san-francisco
[2026-01-04T07:07:13.889Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T07:07:15.390Z] [BOT] 💾 Marked as posted: Manager, GTM Finance @ figma (instance #1)
[2026-01-04T07:07:15.391Z] [BOT] 💾 BEFORE ARCHIVING: 929 jobs in database
[2026-01-04T07:07:15.391Z] [BOT] ✅ No jobs to archive (all 929 jobs within 7-day window)
[2026-01-04T07:07:15.399Z] [BOT] 💾 Saved posted_jobs.json: 929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T07:07:18.400Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T07:07:18.401Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T07:07:18.556Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Data Center Infrastructure @ anthropic',
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
[2026-01-04T07:07:18.556Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-04T07:07:20.140Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Data Center Infrastructure @ anthropic',
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
[2026-01-04T07:07:20.140Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:07:21.641Z] [BOT] 📍 [ROUTING] "Research Engineer, Discovery" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T07:07:21.641Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:07:21.737Z] [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer, Discovery @ anthropic',
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
[2026-01-04T07:07:21.737Z] [BOT] ❌ Industry post failed: Research Engineer, Discovery
⚠️  Channel full error count: 2/5
[2026-01-04T07:07:23.328Z] [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer, Discovery @ anthropic',
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
[2026-01-04T07:07:23.329Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:07:24.830Z] [BOT] 📍 [ROUTING] "IT Systems Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T07:07:24.830Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:07:24.921Z] [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Systems Engineer @ anthropic',
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
[2026-01-04T07:07:24.922Z] [BOT] ❌ Industry post failed: IT Systems Engineer
⚠️  Channel full error count: 3/5
[2026-01-04T07:07:26.574Z] [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Systems Engineer @ anthropic',
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
[2026-01-04T07:07:26.574Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:07:31.076Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T07:07:31.076Z] [BOT] 📍 [ROUTING] "Corporate Legal Specialist" @ anthropic
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T07:07:31.234Z] [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Corporate Legal Specialist @ anthropic',
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
[2026-01-04T07:07:31.235Z] [BOT] ❌ Industry post failed: Corporate Legal Specialist
⚠️  Channel full error count: 4/5
[2026-01-04T07:07:32.820Z] [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Corporate Legal Specialist @ anthropic',
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
[2026-01-04T07:07:32.820Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:07:37.321Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T07:07:37.321Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Specialized" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-04T07:07:37.321Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T07:07:37.437Z] [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Recruiter, Specialized @ anthropic',
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
[2026-01-04T07:07:37.438Z] [BOT] ❌ Industry post failed: Technical Recruiter, Specialized
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-04T07:07:37.438Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T07:07:37.439Z] [BOT] Total attempts: 17
   Successful: 7
   Failed: 10
   Skipped: 0
[2026-01-04T07:07:37.439Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T07:07:37.439Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 4 posts
     2. #📣・marketing-jobs: 2 posts
[2026-01-04T07:07:37.439Z] [BOT] 3. #💲・sales-jobs: 1 posts
[2026-01-04T07:07:37.439Z] [BOT] [STATS] Channel stats saved
[2026-01-04T07:07:37.440Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_cafd9a66.json
[2026-01-04T07:07:37.449Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Lifecycle Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lifecycle Marketing Manager
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer, Discovery
- [BOT ERROR] ❌ Error posting job Research Engineer, Discovery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: IT Systems Engineer
- [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Corporate Legal Specialist
- [BOT ERROR] ❌ Error posting job Corporate Legal Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Recruiter, Specialized: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Recruiter, Specialized
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*