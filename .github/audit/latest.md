# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T20:56:33.597Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T20:56:00.128Z] ========================================
[2026-01-15T20:56:00.130Z] Discord Bot Execution Log
[2026-01-15T20:56:00.130Z] Environment: GitHub Actions
[2026-01-15T20:56:00.130Z] Node Version: v20.19.6
[2026-01-15T20:56:00.130Z] ========================================
[2026-01-15T20:56:00.130Z] Environment Variables Check:
[2026-01-15T20:56:00.130Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T20:56:00.130Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.130Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T20:56:00.131Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T20:56:00.131Z] 
Multi-Channel Configuration:
[2026-01-15T20:56:00.131Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T20:56:00.131Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T20:56:00.131Z] 
Data Files Check:
[2026-01-15T20:56:00.132Z] .github/data/new_jobs.json: ✅ Exists (10 items, 39805 bytes)
[2026-01-15T20:56:00.139Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 974874 bytes)
[2026-01-15T20:56:00.139Z] 
========================================
[2026-01-15T20:56:00.139Z] Starting Enhanced Discord Bot...
[2026-01-15T20:56:00.139Z] ========================================
[2026-01-15T20:56:00.674Z] [BOT] ✅ Loaded V2 database: 1817 jobs
[2026-01-15T20:56:01.289Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T20:56:01.290Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T20:56:01.290Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T20:56:01.400Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Recruiting Coordinator at nominal
[2026-01-15T20:56:01.403Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T20:56:01.404Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T20:56:01.404Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T20:56:01.405Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T20:56:01.405Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T20:56:01.408Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T20:56:01.409Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator" @ nominal
[2026-01-15T20:56:01.410Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T20:56:01.426Z] [BOT ERROR] (node:3050) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T20:56:01.647Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator @ nominal in #🤖・ai-jobs
[2026-01-15T20:56:01.647Z] [BOT] ✅ Industry: Recruiting Coordinator @ nominal
[2026-01-15T20:56:03.698Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T20:56:05.200Z] [BOT] 💾 Marked as posted: Recruiting Coordinator @ nominal (instance #1)
[2026-01-15T20:56:05.200Z] [BOT] 💾 BEFORE ARCHIVING: 1818 jobs in database
[2026-01-15T20:56:05.201Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T20:56:05.206Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T20:56:05.206Z] [BOT] ✅ Archiving complete: 1 archived, 1817 active
[2026-01-15T20:56:05.217Z] [BOT] 💾 Saved posted_jobs.json: 1817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:56:08.218Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T20:56:08.218Z] [BOT] 📍 [ROUTING] "Software Developer - Asset Management - SWE I','Government" @ ORG_d1aff162
   Category: TECH (matched: "software")
[2026-01-15T20:56:08.218Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:56:08.519Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 in #💻・tech-jobs
  ✅ Industry: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162
[2026-01-15T20:56:10.290Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T20:56:11.792Z] [BOT] 💾 Marked as posted: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 (instance #1)
[2026-01-15T20:56:11.792Z] [BOT] 💾 BEFORE ARCHIVING: 1818 jobs in database
[2026-01-15T20:56:11.793Z] [BOT] ✅ No jobs to archive (all 1818 jobs within 7-day window)
[2026-01-15T20:56:11.806Z] [BOT] 💾 Saved posted_jobs.json: 1818 active jobs
[2026-01-15T20:56:11.806Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T20:56:11.807Z] [BOT] 📍 [ROUTING] "Software Engineer I C#" @ McDonald's
[2026-01-15T20:56:11.807Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:56:12.185Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I C# @ McDonald's in #💻・tech-jobs
[2026-01-15T20:56:12.185Z] [BOT] ✅ Industry: Software Engineer I C# @ McDonald's
[2026-01-15T20:56:14.069Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I C# @ McDonald's in #🌆・chicago
[2026-01-15T20:56:14.069Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T20:56:15.571Z] [BOT] 💾 Marked as posted: Software Engineer I C# @ McDonald's (instance #1)
[2026-01-15T20:56:15.571Z] [BOT] 💾 BEFORE ARCHIVING: 1819 jobs in database
[2026-01-15T20:56:15.572Z] [BOT] ✅ No jobs to archive (all 1819 jobs within 7-day window)
[2026-01-15T20:56:15.585Z] [BOT] 💾 Saved posted_jobs.json: 1819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:56:15.586Z] [BOT] 📍 [ROUTING] "Japanese Speaker - AI Trainer" @ ORG_4ee447c5 Technologies
[2026-01-15T20:56:15.586Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:56:16.177Z] [BOT] ✅ Created forum post: 🏢 Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
  ✅ Industry: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-15T20:56:17.921Z] [BOT ERROR] ❌ Error posting job Japanese Speaker - AI Trainer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies',
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
[2026-01-15T20:56:17.921Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T20:56:19.423Z] [BOT] 💾 Marked as posted: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2026-01-15T20:56:19.423Z] [BOT] 💾 BEFORE ARCHIVING: 1820 jobs in database
[2026-01-15T20:56:19.424Z] [BOT] ✅ No jobs to archive (all 1820 jobs within 7-day window)
[2026-01-15T20:56:19.436Z] [BOT] 💾 Saved posted_jobs.json: 1820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:56:19.437Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f30b244b
[2026-01-15T20:56:19.437Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:56:19.585Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ Metron',
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
[2026-01-15T20:56:19.585Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-15T20:56:21.216Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ Metron',
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
[2026-01-15T20:56:21.217Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T20:56:25.718Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-15T20:56:25.719Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T20:56:25.720Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:56:26.308Z] [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer I @ Kroll',
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
[2026-01-15T20:56:26.308Z] [BOT] ❌ Industry post failed: Data Engineer I
⚠️  Channel full error count: 2/5
[2026-01-15T20:56:27.810Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_dc7620eb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T20:56:27.810Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:56:27.920Z] [BOT ERROR] ❌ Error posting job Senior Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Senior Data Scientist @ Oracle',
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
[2026-01-15T20:56:27.921Z] [BOT] ❌ Industry post failed: Senior Data Scientist
⚠️  Channel full error count: 3/5
[2026-01-15T20:56:29.422Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_5f7f16bb Engineering
[2026-01-15T20:56:29.422Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:56:29.561Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering',
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
[2026-01-15T20:56:29.561Z] [BOT] ❌ Industry post failed: Data Analyst 1
⚠️  Channel full error count: 4/5
[2026-01-15T20:56:31.181Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering',
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
[2026-01-15T20:56:31.181Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T20:56:32.682Z] [BOT] 📍 [ROUTING] "Enterprise Performance Analytics Engineer" @ ORG_4262074d Access
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T20:56:32.682Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:56:32.813Z] [BOT ERROR] ❌ Error posting job Enterprise Performance Analytics Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Performance Analytics Engineer @ ORG_4262074d Access',
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
[2026-01-15T20:56:32.813Z] [BOT] ❌ Industry post failed: Enterprise Performance Analytics Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
[2026-01-15T20:56:32.814Z] [BOT] ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T20:56:32.814Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 15
[2026-01-15T20:56:32.814Z] [BOT] Successful: 7
   Failed: 8
   Skipped: 0
[2026-01-15T20:56:32.814Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T20:56:32.815Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🤖・ai-jobs: 1 posts
     3. #🗽・new-york: 1 posts
     4. #💻・remote-usa: 1 posts
     5. #🌆・chicago: 1 posts
[2026-01-15T20:56:32.815Z] [BOT] [STATS] Channel stats saved
[2026-01-15T20:56:32.815Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T20:56:32.828Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3050) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Japanese Speaker - AI Trainer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer I
- [BOT ERROR] ❌ Error posting job Senior Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Data Scientist
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst 1
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Enterprise Performance Analytics Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Performance Analytics Engineer
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*