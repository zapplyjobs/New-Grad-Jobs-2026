# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T08:54:38.334Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T08:53:42.915Z] ========================================
[2026-01-04T08:53:42.916Z] Discord Bot Execution Log
[2026-01-04T08:53:42.917Z] Environment: GitHub Actions
[2026-01-04T08:53:42.917Z] Node Version: v20.19.6
[2026-01-04T08:53:42.917Z] ========================================
[2026-01-04T08:53:42.917Z] Environment Variables Check:
[2026-01-04T08:53:42.917Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T08:53:42.917Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.917Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T08:53:42.917Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T08:53:42.917Z] 
Multi-Channel Configuration:
[2026-01-04T08:53:42.917Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.917Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T08:53:42.918Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T08:53:42.918Z] 
Data Files Check:
[2026-01-04T08:53:42.919Z] .github/data/new_jobs.json: ✅ Exists (10 items, 183519 bytes)
[2026-01-04T08:53:42.923Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 486134 bytes)
[2026-01-04T08:53:42.923Z] 
========================================
[2026-01-04T08:53:42.923Z] Starting Enhanced Discord Bot...
[2026-01-04T08:53:42.923Z] ========================================
[2026-01-04T08:53:43.449Z] [BOT] ✅ Loaded V2 database: 965 jobs
[2026-01-04T08:53:44.335Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T08:53:44.335Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T08:53:44.336Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T08:53:44.337Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T08:53:44.420Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T08:53:44.516Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T08:53:44.519Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T08:53:44.519Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T08:53:44.519Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T08:53:44.520Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T08:53:44.520Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T08:53:44.525Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T08:53:44.525Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-04T08:53:44.526Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T08:53:44.526Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:53:44.543Z] [BOT ERROR] (node:2323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T08:53:44.760Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T08:53:44.760Z] [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
⚠️  Channel full error count: 1/5
[2026-01-04T08:53:46.388Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T08:53:46.389Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:53:47.889Z] [BOT] 📍 [ROUTING] "Engineering Manager, Product Platform & Accounts Platform" @ anthropic
[2026-01-04T08:53:47.890Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T08:53:48.118Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic in #🤖・ai-jobs
[2026-01-04T08:53:48.118Z] [BOT] ✅ Industry: Engineering Manager, Product Platform & Accounts Platform @ anthropic
[2026-01-04T08:53:49.860Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Product Platform & Accounts Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:53:51.361Z] [BOT] 💾 Marked as posted: Engineering Manager, Product Platform & Accounts Platform @ anthropic (instance #1)
[2026-01-04T08:53:51.361Z] [BOT] 💾 BEFORE ARCHIVING: 966 jobs in database
[2026-01-04T08:53:51.362Z] [BOT] ✅ No jobs to archive (all 966 jobs within 7-day window)
[2026-01-04T08:53:51.372Z] [BOT] 💾 Saved posted_jobs.json: 966 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:53:54.372Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T08:53:54.373Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Insurance" @ anthropic
[2026-01-04T08:53:54.373Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:53:54.976Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Insurance @ anthropic in #💲・sales-jobs
[2026-01-04T08:53:54.976Z] [BOT] ✅ Industry: Enterprise Account Executive, Insurance @ anthropic
[2026-01-04T08:53:56.713Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Insurance @ anthropic in #🗽・new-york
[2026-01-04T08:53:56.714Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T08:53:58.215Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Insurance @ anthropic (instance #1)
[2026-01-04T08:53:58.215Z] [BOT] 💾 BEFORE ARCHIVING: 967 jobs in database
[2026-01-04T08:53:58.216Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-04T08:53:58.225Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:01.226Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T08:54:01.227Z] [BOT] 📍 [ROUTING] "Event Security Program Coordinator " @ anthropic
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:54:01.495Z] [BOT] ✅ Created forum post: 🏢 Event Security Program Coordinator  @ anthropic in #💻・tech-jobs
  ✅ Industry: Event Security Program Coordinator  @ anthropic
[2026-01-04T08:54:03.282Z] [BOT] ✅ Created forum post: 🏢 Event Security Program Coordinator  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:04.783Z] [BOT] 💾 Marked as posted: Event Security Program Coordinator  @ anthropic (instance #1)
[2026-01-04T08:54:04.784Z] [BOT] 💾 BEFORE ARCHIVING: 968 jobs in database
[2026-01-04T08:54:04.785Z] [BOT] ✅ No jobs to archive (all 968 jobs within 7-day window)
[2026-01-04T08:54:04.792Z] [BOT] 💾 Saved posted_jobs.json: 968 active jobs
[2026-01-04T08:54:04.793Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:04.793Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Alignment Finetuning" @ anthropic
[2026-01-04T08:54:04.793Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:54:05.052Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #💻・tech-jobs
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic
[2026-01-04T08:54:06.799Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:08.301Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Alignment Finetuning @ anthropic (instance #1)
[2026-01-04T08:54:08.301Z] [BOT] 💾 BEFORE ARCHIVING: 969 jobs in database
[2026-01-04T08:54:08.302Z] [BOT] ✅ No jobs to archive (all 969 jobs within 7-day window)
[2026-01-04T08:54:08.310Z] [BOT] 💾 Saved posted_jobs.json: 969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:11.311Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-04T08:54:11.311Z] [BOT] 📍 [ROUTING] "[Expression of Interest] Research Scientist/Engineer, Honesty" @ anthropic
[2026-01-04T08:54:11.311Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T08:54:11.623Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #📈・JID_fb739488
  ✅ Industry: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic
[2026-01-04T08:54:13.479Z] [BOT] ✅ Created forum post: 🏢 [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:14.981Z] [BOT] 💾 Marked as posted: [Expression of Interest] Research Scientist/Engineer, Honesty @ anthropic (instance #1)
[2026-01-04T08:54:14.981Z] [BOT] 💾 BEFORE ARCHIVING: 970 jobs in database
[2026-01-04T08:54:14.982Z] [BOT] ✅ No jobs to archive (all 970 jobs within 7-day window)
[2026-01-04T08:54:14.991Z] [BOT] 💾 Saved posted_jobs.json: 970 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:14.991Z] [BOT] 📍 [ROUTING] "Finance Systems Engineer" @ anthropic
[2026-01-04T08:54:14.991Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T08:54:15.207Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Engineer @ anthropic in #📈・JID_fb739488
  ✅ Industry: Finance Systems Engineer @ anthropic
[2026-01-04T08:54:16.932Z] [BOT] ✅ Created forum post: 🏢 Finance Systems Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:18.433Z] [BOT] 💾 Marked as posted: Finance Systems Engineer @ anthropic (instance #1)
[2026-01-04T08:54:18.433Z] [BOT] 💾 BEFORE ARCHIVING: 971 jobs in database
[2026-01-04T08:54:18.434Z] [BOT] ✅ No jobs to archive (all 971 jobs within 7-day window)
[2026-01-04T08:54:18.442Z] [BOT] 💾 Saved posted_jobs.json: 971 active jobs
[2026-01-04T08:54:18.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:21.443Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-04T08:54:21.443Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, Industries" @ anthropic
[2026-01-04T08:54:21.443Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T08:54:21.750Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Industries @ anthropic in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager, Industries @ anthropic
[2026-01-04T08:54:23.540Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:25.042Z] [BOT] 💾 Marked as posted: Field Marketing Manager, Industries @ anthropic (instance #1)
[2026-01-04T08:54:25.042Z] [BOT] 💾 BEFORE ARCHIVING: 972 jobs in database
[2026-01-04T08:54:25.043Z] [BOT] ✅ No jobs to archive (all 972 jobs within 7-day window)
[2026-01-04T08:54:25.054Z] [BOT] 💾 Saved posted_jobs.json: 972 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Finance Systems, Finance & Strategy" @ anthropic
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T08:54:25.386Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy @ anthropic in #📣・marketing-jobs
[2026-01-04T08:54:25.386Z] [BOT] ✅ Industry: Finance Systems, Finance & Strategy @ anthropic
[2026-01-04T08:54:27.171Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy @ anthropic in #🌉・san-francisco
[2026-01-04T08:54:27.171Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:54:28.672Z] [BOT] 💾 Marked as posted: Finance Systems, Finance & Strategy @ anthropic (instance #1)
[2026-01-04T08:54:28.673Z] [BOT] 💾 BEFORE ARCHIVING: 973 jobs in database
[2026-01-04T08:54:28.673Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-04T08:54:28.682Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:54:28.683Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst" @ anthropic
   Category: MARKETING (matched: "growth")
[2026-01-04T08:54:28.683Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T08:54:28.812Z] [BOT ERROR] ❌ Error posting job Finance Systems, Senior Business Systems Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems, Senior Business Systems Analyst @ anthropic',
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
[2026-01-04T08:54:28.812Z] [BOT] ❌ Industry post failed: Finance Systems, Senior Business Systems Analyst
⚠️  Channel full error count: 1/5
[2026-01-04T08:54:30.512Z] [BOT ERROR] ❌ Error posting job Finance Systems, Senior Business Systems Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems, Senior Business Systems Analyst @ anthropic',
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
[2026-01-04T08:54:30.512Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T08:54:35.014Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-04T08:54:35.014Z] [BOT] ⏭️  Skipping duplicate: JID_eb557646 (posted within 7 days)
[2026-01-04T08:54:35.014Z] [BOT] ⏭️  Skipping duplicate: JID_e13d0cd0 (posted within 7 days)
[2026-01-04T08:54:35.014Z] [BOT] ⏭️  Skipping duplicate: JID_ba5a5ed7 (posted within 7 days)
[2026-01-04T08:54:35.015Z] [BOT] ⏭️  Skipping duplicate: JID_2e448c55 (posted within 7 days)
[2026-01-04T08:54:35.015Z] [BOT] ⏭️  Skipping duplicate: JID_eda3b2a4 (posted within 7 days)
[2026-01-04T08:54:35.015Z] [BOT] ⏭️  Skipping duplicate: JID_1f27265e (posted within 7 days)
[2026-01-04T08:54:35.015Z] [BOT] ⏭️  Skipping duplicate: JID_cec23444 (posted within 7 days)
[2026-01-04T08:54:35.015Z] [BOT] ⏭️  Skipping duplicate: JID_560aad2e (posted within 7 days)
[2026-01-04T08:54:35.044Z] [BOT] ✅ Loaded pending queue: 325 total (305 pending, 20 enriched, 0 posted)
[2026-01-04T08:54:35.075Z] [BOT] ✅ Saved pending queue: 325 total (305 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-04T08:54:35.075Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T08:54:35.127Z] [BOT] 📂 Loaded 1869 existing routing entries
[2026-01-04T08:54:35.174Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-04T08:54:35.175Z] [BOT] New entries: 10
   Total entries: 1879
   Timestamp: 2026-01-04T08:54:35.166Z
[2026-01-04T08:54:35.175Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
[2026-01-04T08:54:35.175Z] [BOT] Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-04T08:54:35.176Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 7
   Top channels:
[2026-01-04T08:54:35.176Z] [BOT] 1. #🌉・san-francisco: 7 posts
     2. #💻・tech-jobs: 2 posts
     3. #📈・JID_fb739488: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-04T08:54:35.176Z] [BOT] [STATS] Channel stats saved
[2026-01-04T08:54:37.192Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance Systems, Senior Business Systems Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Systems, Senior Business Systems Analyst
- [BOT ERROR] ❌ Error posting job Finance Systems, Senior Business Systems Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*