# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T20:44:49.292Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T20:44:11.603Z] ========================================
[2026-01-19T20:44:11.605Z] Discord Bot Execution Log
[2026-01-19T20:44:11.605Z] Environment: GitHub Actions
[2026-01-19T20:44:11.605Z] Node Version: v20.19.6
[2026-01-19T20:44:11.605Z] ========================================
[2026-01-19T20:44:11.605Z] Environment Variables Check:
[2026-01-19T20:44:11.605Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T20:44:11.605Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.605Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T20:44:11.606Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T20:44:11.606Z] 
Multi-Channel Configuration:
[2026-01-19T20:44:11.606Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T20:44:11.606Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T20:44:11.606Z] 
Data Files Check:
[2026-01-19T20:44:11.608Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173477 bytes)
[2026-01-19T20:44:11.620Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1586730 bytes)
[2026-01-19T20:44:11.620Z] 
========================================
[2026-01-19T20:44:11.620Z] Starting Enhanced Discord Bot...
[2026-01-19T20:44:11.620Z] ========================================
[2026-01-19T20:44:12.150Z] [BOT] ✅ Loaded V2 database: 2905 jobs
[2026-01-19T20:44:12.625Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T20:44:12.626Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T20:44:12.626Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T20:44:12.742Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Accountant (Platform Accounting) at gusto
[2026-01-19T20:44:12.746Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T20:44:12.746Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T20:44:12.747Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T20:44:12.747Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T20:44:12.748Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T20:44:12.752Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-19T20:44:12.752Z] [BOT] 📍 [ROUTING] "Senior Accountant (Platform Accounting)" @ gusto
[2026-01-19T20:44:12.753Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T20:44:12.757Z] [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T20:44:13.066Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant (Platform Accounting) @ gusto in #💰・finance-jobs
[2026-01-19T20:44:13.066Z] [BOT] ✅ Industry: Senior Accountant (Platform Accounting) @ gusto
[2026-01-19T20:44:14.717Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant (Platform Accounting) @ gusto in #🗽・new-york
[2026-01-19T20:44:14.717Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T20:44:16.219Z] [BOT] 💾 Marked as posted: Senior Accountant (Platform Accounting) @ gusto (instance #1)
[2026-01-19T20:44:16.219Z] [BOT] 💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-19T20:44:16.222Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T20:44:16.226Z] [BOT] 📦 Archived 14 jobs to 2026-01.json (14 total in archive)
[2026-01-19T20:44:16.227Z] [BOT] ✅ Archiving complete: 14 archived, 2892 active
[2026-01-19T20:44:16.248Z] [BOT] 💾 Saved posted_jobs.json: 2892 active jobs
[2026-01-19T20:44:16.248Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:44:19.249Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-19T20:44:19.249Z] [BOT] 📍 [ROUTING] "Senior Offline Media Manager" @ gusto
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:44:19.791Z] [BOT] ✅ Created forum post: 🏢 Senior Offline Media Manager @ gusto in #📈・JID_fb739488
[2026-01-19T20:44:19.791Z] [BOT] ✅ Industry: Senior Offline Media Manager @ gusto
[2026-01-19T20:44:21.557Z] [BOT] ✅ Created forum post: 🏢 Senior Offline Media Manager @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:44:23.058Z] [BOT] 💾 Marked as posted: Senior Offline Media Manager @ gusto (instance #1)
[2026-01-19T20:44:23.059Z] [BOT] 💾 BEFORE ARCHIVING: 2893 jobs in database
[2026-01-19T20:44:23.061Z] [BOT] ✅ No jobs to archive (all 2893 jobs within 7-day window)
[2026-01-19T20:44:23.081Z] [BOT] 💾 Saved posted_jobs.json: 2893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:44:23.081Z] [BOT] 📍 [ROUTING] "Senior Data Scientist - Gusto 401(k)" @ gusto
[2026-01-19T20:44:23.081Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:44:23.081Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T20:44:23.339Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist - Gusto 401(k) @ gusto in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist - Gusto 401(k) @ gusto
[2026-01-19T20:44:25.166Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist - Gusto 401(k) @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:44:26.668Z] [BOT] 💾 Marked as posted: Senior Data Scientist - Gusto 401(k) @ gusto (instance #1)
[2026-01-19T20:44:26.668Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-19T20:44:26.670Z] [BOT] ✅ No jobs to archive (all 2894 jobs within 7-day window)
[2026-01-19T20:44:26.689Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:44:26.689Z] [BOT] 📍 [ROUTING] "Staff Data Scientist - Product" @ gusto
[2026-01-19T20:44:26.689Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T20:44:26.789Z] [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Data Scientist - Product @ gusto',
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
[2026-01-19T20:44:26.790Z] [BOT] ❌ Industry post failed: Staff Data Scientist - Product
⚠️  Channel full error count: 1/5
[2026-01-19T20:44:28.372Z] [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Data Scientist - Product @ gusto',
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
[2026-01-19T20:44:28.372Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:44:29.873Z] [BOT] 📍 [ROUTING] "Senior Sales Operations Analyst - Business Insurance" @ gusto
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-19T20:44:29.874Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:44:29.980Z] [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Sales Operations Analyst - Business Insurance @ gusto',
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
[2026-01-19T20:44:29.980Z] [BOT] ❌ Industry post failed: Senior Sales Operations Analyst - Business Insurance
⚠️  Channel full error count: 2/5
[2026-01-19T20:44:31.562Z] [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Sales Operations Analyst - Business Insurance @ gusto',
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
[2026-01-19T20:44:31.562Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:44:36.064Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-19T20:44:36.064Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - Payroll Platform" @ gusto
   Category: TECH (matched: "software")
[2026-01-19T20:44:36.064Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:44:36.181Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Software Engineer - Payroll Platform @ gusto',
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
[2026-01-19T20:44:36.181Z] [BOT] ❌ Industry post failed: Staff Software Engineer - Payroll Platform
⚠️  Channel full error count: 3/5
[2026-01-19T20:44:37.782Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Software Engineer - Payroll Platform @ gusto',
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
[2026-01-19T20:44:37.782Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:44:42.284Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T20:44:42.284Z] [BOT] 📍 [ROUTING] "Product Counsel - PEO/Employment Law" @ gusto
[2026-01-19T20:44:42.284Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T20:44:42.447Z] [BOT ERROR] ❌ Error posting job Product Counsel - PEO/Employment Law: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Counsel - PEO/Employment Law @ gusto',
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
[2026-01-19T20:44:42.447Z] [BOT] ❌ Industry post failed: Product Counsel - PEO/Employment Law
⚠️  Channel full error count: 4/5
[2026-01-19T20:44:44.039Z] [BOT ERROR] ❌ Error posting job Product Counsel - PEO/Employment Law: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Counsel - PEO/Employment Law @ gusto',
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
[2026-01-19T20:44:44.039Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:44:48.542Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-19T20:44:48.542Z] [BOT] 📍 [ROUTING] "Head of Onboarding and Implementation (GTM Operations)" @ gusto
[2026-01-19T20:44:48.542Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:44:48.669Z] [BOT ERROR] ❌ Error posting job Head of Onboarding and Implementation (GTM Operations): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Onboarding and Implementation (GTM Operations) @ gusto',
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
[2026-01-19T20:44:48.669Z] [BOT] ❌ Industry post failed: Head of Onboarding and Implementation (GTM Operations)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T20:44:48.670Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T20:44:48.670Z] [BOT] Total attempts: 15
   Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-19T20:44:48.670Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T20:44:48.670Z] [BOT] Total posts: 6
   Channels used: 4
   Top channels:
     1. #📈・JID_fb739488: 2 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-19T20:44:48.670Z] [BOT] 3. #💰・finance-jobs: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-19T20:44:48.670Z] [BOT] [STATS] Channel stats saved
[2026-01-19T20:44:48.671Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T20:44:48.685Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Data Scientist - Product
- [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Sales Operations Analyst - Business Insurance
- [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Software Engineer - Payroll Platform
- [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Counsel - PEO/Employment Law: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Counsel - PEO/Employment Law
- [BOT ERROR] ❌ Error posting job Product Counsel - PEO/Employment Law: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Head of Onboarding and Implementation (GTM Operations): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Onboarding and Implementation (GTM Operations)
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*