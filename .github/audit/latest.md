# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T20:56:02.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T20:55:10.818Z] ========================================
[2026-01-19T20:55:10.821Z] Discord Bot Execution Log
[2026-01-19T20:55:10.821Z] Environment: GitHub Actions
[2026-01-19T20:55:10.821Z] Node Version: v20.19.6
[2026-01-19T20:55:10.821Z] ========================================
[2026-01-19T20:55:10.821Z] Environment Variables Check:
[2026-01-19T20:55:10.821Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T20:55:10.821Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.821Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T20:55:10.821Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T20:55:10.822Z] 
Multi-Channel Configuration:
[2026-01-19T20:55:10.822Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T20:55:10.822Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T20:55:10.822Z] 
Data Files Check:
[2026-01-19T20:55:10.824Z] .github/data/new_jobs.json: ✅ Exists (10 items, 165996 bytes)
[2026-01-19T20:55:10.841Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1581474 bytes)
[2026-01-19T20:55:10.841Z] 
========================================
[2026-01-19T20:55:10.841Z] Starting Enhanced Discord Bot...
[2026-01-19T20:55:10.841Z] ========================================
[2026-01-19T20:55:11.375Z] [BOT] ✅ Loaded V2 database: 2894 jobs
[2026-01-19T20:55:11.981Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T20:55:11.982Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T20:55:11.982Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T20:55:12.144Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer - Payroll Platform at gusto
[2026-01-19T20:55:12.147Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T20:55:12.148Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T20:55:12.148Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T20:55:12.148Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T20:55:12.149Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T20:55:12.153Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T20:55:12.153Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - Payroll Platform" @ gusto
[2026-01-19T20:55:12.153Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:55:12.158Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T20:55:12.309Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T20:55:12.309Z] [BOT] ❌ Industry post failed: Staff Software Engineer - Payroll Platform
⚠️  Channel full error count: 1/5
[2026-01-19T20:55:14.049Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - Payroll Platform @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:55:15.551Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Payroll Platform @ gusto (instance #1)
[2026-01-19T20:55:15.551Z] [BOT] 💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-19T20:55:15.553Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T20:55:15.557Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-19T20:55:15.557Z] [BOT] ✅ Archiving complete: 12 archived, 2883 active
[2026-01-19T20:55:15.576Z] [BOT] 💾 Saved posted_jobs.json: 2883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:15.576Z] [BOT] 📍 [ROUTING] "People Tech Integrations Developer" @ gusto
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:55:15.836Z] [BOT] ✅ Created forum post: 🏢 People Tech Integrations Developer @ gusto in #💻・tech-jobs
  ✅ Industry: People Tech Integrations Developer @ gusto
[2026-01-19T20:55:17.566Z] [BOT] ✅ Created forum post: 🏢 People Tech Integrations Developer @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:55:19.067Z] [BOT] 💾 Marked as posted: People Tech Integrations Developer @ gusto (instance #1)
[2026-01-19T20:55:19.067Z] [BOT] 💾 BEFORE ARCHIVING: 2884 jobs in database
[2026-01-19T20:55:19.069Z] [BOT] ✅ No jobs to archive (all 2884 jobs within 7-day window)
[2026-01-19T20:55:19.085Z] [BOT] 💾 Saved posted_jobs.json: 2884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:22.085Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T20:55:22.087Z] [BOT] 📍 [ROUTING] "Product Counsel - PEO/Employment Law" @ gusto
[2026-01-19T20:55:22.087Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T20:55:22.444Z] [BOT] ✅ Created forum post: 🏢 Product Counsel - PEO/Employment Law @ gusto in #📣・marketing-jobs
  ✅ Industry: Product Counsel - PEO/Employment Law @ gusto
[2026-01-19T20:55:24.239Z] [BOT] ✅ Created forum post: 🏢 Product Counsel - PEO/Employment Law @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T20:55:25.740Z] [BOT] 💾 Marked as posted: Product Counsel - PEO/Employment Law @ gusto (instance #1)
[2026-01-19T20:55:25.741Z] [BOT] 💾 BEFORE ARCHIVING: 2885 jobs in database
[2026-01-19T20:55:25.743Z] [BOT] ✅ No jobs to archive (all 2885 jobs within 7-day window)
[2026-01-19T20:55:25.764Z] [BOT] 💾 Saved posted_jobs.json: 2885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:28.765Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-19T20:55:28.766Z] [BOT] 📍 [ROUTING] "Head of Onboarding and Implementation (GTM Operations)" @ gusto
[2026-01-19T20:55:28.766Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:55:28.997Z] [BOT] ✅ Created forum post: 🏢 Head of Onboarding and Implementation (GTM Operations) @ gusto in #💲・sales-jobs
[2026-01-19T20:55:28.997Z] [BOT] ✅ Industry: Head of Onboarding and Implementation (GTM Operations) @ gusto
[2026-01-19T20:55:31.011Z] [BOT] ✅ Created forum post: 🏢 Head of Onboarding and Implementation (GTM Operations) @ gusto in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T20:55:32.513Z] [BOT] 💾 Marked as posted: Head of Onboarding and Implementation (GTM Operations) @ gusto (instance #1)
[2026-01-19T20:55:32.513Z] [BOT] 💾 BEFORE ARCHIVING: 2886 jobs in database
[2026-01-19T20:55:32.515Z] [BOT] ✅ No jobs to archive (all 2886 jobs within 7-day window)
[2026-01-19T20:55:32.532Z] [BOT] 💾 Saved posted_jobs.json: 2886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:32.533Z] [BOT] 📍 [ROUTING] "Future Opportunities: Early Career Sales Talent" @ gusto
[2026-01-19T20:55:32.533Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:55:32.885Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Early Career Sales Talent @ gusto in #💲・sales-jobs
  ✅ Industry: Future Opportunities: Early Career Sales Talent @ gusto
[2026-01-19T20:55:34.588Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Early Career Sales Talent @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T20:55:36.090Z] [BOT] 💾 Marked as posted: Future Opportunities: Early Career Sales Talent @ gusto (instance #1)
[2026-01-19T20:55:36.090Z] [BOT] 💾 BEFORE ARCHIVING: 2887 jobs in database
[2026-01-19T20:55:36.092Z] [BOT] ✅ No jobs to archive (all 2887 jobs within 7-day window)
[2026-01-19T20:55:36.110Z] [BOT] 💾 Saved posted_jobs.json: 2887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:36.110Z] [BOT] 📍 [ROUTING] "Sales Development Representative" @ gusto
   Category: SALES (matched: "sales")
[2026-01-19T20:55:36.110Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:55:36.304Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative @ gusto in #💲・sales-jobs
  ✅ Industry: Sales Development Representative @ gusto
[2026-01-19T20:55:37.946Z] [BOT ERROR] ❌ Error posting job Sales Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sales Development Representative @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-19T20:55:37.946Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-19T20:55:39.448Z] [BOT] 💾 Marked as posted: Sales Development Representative @ gusto (instance #1)
[2026-01-19T20:55:39.448Z] [BOT] 💾 BEFORE ARCHIVING: 2888 jobs in database
[2026-01-19T20:55:39.450Z] [BOT] ✅ No jobs to archive (all 2888 jobs within 7-day window)
[2026-01-19T20:55:39.467Z] [BOT] 💾 Saved posted_jobs.json: 2888 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:55:39.467Z] [BOT] 📍 [ROUTING] "Retirement Account Executive" @ gusto
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:55:39.625Z] [BOT ERROR] ❌ Error posting job Retirement Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Retirement Account Executive @ gusto',
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
[2026-01-19T20:55:39.625Z] [BOT] ❌ Industry post failed: Retirement Account Executive
⚠️  Channel full error count: 1/5
[2026-01-19T20:55:41.303Z] [BOT ERROR] ❌ Error posting job Retirement Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Retirement Account Executive @ gusto',
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
[2026-01-19T20:55:41.303Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:55:45.805Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-19T20:55:45.805Z] [BOT] 📍 [ROUTING] "Staff Data Scientist - Product" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T20:55:45.806Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T20:55:45.951Z] [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T20:55:45.951Z] [BOT] ❌ Industry post failed: Staff Data Scientist - Product
⚠️  Channel full error count: 2/5
[2026-01-19T20:55:47.599Z] [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T20:55:47.599Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:55:49.101Z] [BOT] 📍 [ROUTING] "Senior Sales Operations Analyst - Business Insurance" @ gusto
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-19T20:55:49.101Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:55:49.239Z] [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T20:55:49.239Z] [BOT] ❌ Industry post failed: Senior Sales Operations Analyst - Business Insurance
⚠️  Channel full error count: 3/5
[2026-01-19T20:55:50.933Z] [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T20:55:50.933Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:55:52.434Z] [BOT] 📍 [ROUTING] "Finance, BizOps, & Strategy" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T20:55:52.434Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:55:52.564Z] [BOT ERROR] ❌ Error posting job Finance, BizOps, & Strategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance, BizOps, & Strategy @ gusto',
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
[2026-01-19T20:55:52.564Z] [BOT] ❌ Industry post failed: Finance, BizOps, & Strategy
⚠️  Channel full error count: 4/5
[2026-01-19T20:55:54.231Z] [BOT ERROR] ❌ Error posting job Finance, BizOps, & Strategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance, BizOps, & Strategy @ gusto',
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
[2026-01-19T20:55:54.231Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:55:58.732Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-19T20:55:58.733Z] [BOT] ⏭️  Skipping duplicate: JID_d6068155 (posted within 7 days)
[2026-01-19T20:55:58.733Z] [BOT] ⏭️  Skipping duplicate: JID_5f7b94e0 (posted within 7 days)
[2026-01-19T20:55:58.733Z] [BOT] ⏭️  Skipping duplicate: JID_a4919988 (posted within 7 days)
[2026-01-19T20:55:58.733Z] [BOT] ⏭️  Skipping duplicate: JID_d24f1bed (posted within 7 days)
[2026-01-19T20:55:58.734Z] [BOT] ⏭️  Skipping duplicate: JID_f4097fd8 (posted within 7 days)
[2026-01-19T20:55:58.734Z] [BOT] ⏭️  Skipping duplicate: JID_db8248a9 (posted within 7 days)
[2026-01-19T20:55:58.898Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[2026-01-19T20:55:59.084Z] [BOT] ✅ Saved pending queue: 2819 total (2799 pending, 14 enriched, 6 posted)
[2026-01-19T20:55:59.084Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T20:55:59.151Z] [BOT] 📂 Loaded 5145 existing routing entries
[2026-01-19T20:55:59.220Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5155
[2026-01-19T20:55:59.220Z] [BOT] Timestamp: 2026-01-19T20:55:59.202Z
[2026-01-19T20:55:59.220Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
[2026-01-19T20:55:59.221Z] [BOT] Successful: 10
   Failed: 10
   Skipped: 0
[2026-01-19T20:55:59.221Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
[2026-01-19T20:55:59.221Z] [BOT] 1. #🌉・san-francisco: 3 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 1 posts
     4. #📣・marketing-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-19T20:56:01.241Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Staff Software Engineer - Payroll Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Software Engineer - Payroll Platform
- [BOT ERROR] ❌ Error posting job Sales Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Retirement Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Retirement Account Executive
- [BOT ERROR] ❌ Error posting job Retirement Account Executive: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Data Scientist - Product
- [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Sales Operations Analyst - Business Insurance
- [BOT ERROR] ❌ Error posting job Senior Sales Operations Analyst - Business Insurance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance, BizOps, & Strategy: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance, BizOps, & Strategy
- [BOT ERROR] ❌ Error posting job Finance, BizOps, & Strategy: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*