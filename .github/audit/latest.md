# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T05:44:55.021Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T05:44:23.632Z] ========================================
[2026-01-18T05:44:23.633Z] Discord Bot Execution Log
[2026-01-18T05:44:23.634Z] Environment: GitHub Actions
[2026-01-18T05:44:23.634Z] Node Version: v20.19.6
[2026-01-18T05:44:23.634Z] ========================================
[2026-01-18T05:44:23.634Z] Environment Variables Check:
[2026-01-18T05:44:23.634Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T05:44:23.634Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T05:44:23.634Z] 
Multi-Channel Configuration:
[2026-01-18T05:44:23.634Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T05:44:23.634Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T05:44:23.635Z] 
Data Files Check:
[2026-01-18T05:44:23.636Z] .github/data/new_jobs.json: ✅ Exists (10 items, 99724 bytes)
[2026-01-18T05:44:23.646Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1398561 bytes)
[2026-01-18T05:44:23.647Z] 
========================================
[2026-01-18T05:44:23.647Z] Starting Enhanced Discord Bot...
[2026-01-18T05:44:23.647Z] ========================================
[2026-01-18T05:44:24.107Z] [BOT] ✅ Loaded V2 database: 2586 jobs
[2026-01-18T05:44:24.577Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T05:44:24.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T05:44:24.578Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T05:44:24.739Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Search Quality Rater at Welocalize
[2026-01-18T05:44:24.743Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T05:44:24.743Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T05:44:24.744Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T05:44:24.744Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-18T05:44:24.745Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Developer 1 @ Oracle: pleasanton, nashville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T05:44:24.749Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T05:44:24.750Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
[2026-01-18T05:44:24.750Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:44:24.754Z] [BOT ERROR] (node:3644) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T05:44:24.907Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
[2026-01-18T05:44:24.908Z] [BOT] ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-18T05:44:26.627Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・remote-usa
[2026-01-18T05:44:26.627Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T05:44:28.129Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-18T05:44:28.130Z] [BOT] 💾 BEFORE ARCHIVING: 2587 jobs in database
[2026-01-18T05:44:28.131Z] [BOT] ✅ No jobs to archive (all 2587 jobs within 7-day window)
[2026-01-18T05:44:28.157Z] [BOT] 💾 Saved posted_jobs.json: 2587 active jobs
[2026-01-18T05:44:28.157Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-01-18T05:44:28.157Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:44:28.489Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-18T05:44:28.489Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-18T05:44:30.177Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T05:44:31.679Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2026-01-18T05:44:31.679Z] [BOT] 💾 BEFORE ARCHIVING: 2588 jobs in database
[2026-01-18T05:44:31.681Z] [BOT] ✅ No jobs to archive (all 2588 jobs within 7-day window)
[2026-01-18T05:44:31.695Z] [BOT] 💾 Saved posted_jobs.json: 2588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:44:31.695Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2026-01-18T05:44:31.696Z] [BOT] 💾 BEFORE ARCHIVING: 2589 jobs in database
[2026-01-18T05:44:31.697Z] [BOT] ✅ No jobs to archive (all 2589 jobs within 7-day window)
[2026-01-18T05:44:31.713Z] [BOT] 💾 Saved posted_jobs.json: 2589 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:44:31.713Z] [BOT] 📍 [ROUTING] "Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection" @ ORG_6f8a62f0 Hathaway Energy
[2026-01-18T05:44:31.713Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:44:31.916Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Princip in #💻・tech-jobs
  ✅ Industry: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection @ ORG_6f8a62f0 Hathaway Energy
[2026-01-18T05:44:33.566Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Princip in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T05:44:35.068Z] [BOT] 💾 Marked as posted: Engineer 1 – Senior Engineer – Senior Engineer 2 – Principal Engineer System Protection - Principal Engineer System Protection @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2026-01-18T05:44:35.068Z] [BOT] 💾 BEFORE ARCHIVING: 2590 jobs in database
[2026-01-18T05:44:35.070Z] [BOT] ✅ No jobs to archive (all 2590 jobs within 7-day window)
[2026-01-18T05:44:35.088Z] [BOT] 💾 Saved posted_jobs.json: 2590 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:44:38.089Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T05:44:38.089Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - Growth/SEO" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T05:44:38.090Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T05:44:38.290Z] [BOT ERROR] ❌ Error posting job Senior Data Scientist, Analytics - Growth/SEO: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord',
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
[2026-01-18T05:44:38.290Z] [BOT] ❌ Industry post failed: Senior Data Scientist, Analytics - Growth/SEO
⚠️  Channel full error count: 1/5
[2026-01-18T05:44:39.895Z] [BOT ERROR] ❌ Error posting job Senior Data Scientist, Analytics - Growth/SEO: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Data Scientist, Analytics - Growth/SEO @ discord',
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
[2026-01-18T05:44:39.896Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:44:41.396Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Payments" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T05:44:41.396Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T05:44:41.529Z] [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Product Manager, Payments @ discord',
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
[2026-01-18T05:44:41.529Z] [BOT] ❌ Industry post failed: Staff Product Manager, Payments
⚠️  Channel full error count: 2/5
[2026-01-18T05:44:43.139Z] [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Product Manager, Payments @ discord',
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
[2026-01-18T05:44:43.139Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:44:47.642Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T05:44:47.642Z] [BOT] 📍 [ROUTING] "Policy Manager, Chemical Weapons and High Yield Explosives" @ anthropic
[2026-01-18T05:44:47.642Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:44:47.760Z] [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic',
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
[2026-01-18T05:44:47.760Z] [BOT] ❌ Industry post failed: Policy Manager, Chemical Weapons and High Yield Explosives
⚠️  Channel full error count: 3/5
[2026-01-18T05:44:49.377Z] [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Policy Manager, Chemical Weapons and High Yield Explosives @ anthropic',
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
[2026-01-18T05:44:49.377Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:44:50.878Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:44:50.979Z] [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Account Executive, Industries @ anthropic',
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
[2026-01-18T05:44:50.979Z] [BOT] ❌ Industry post failed: Strategic Account Executive, Industries
⚠️  Channel full error count: 4/5
[2026-01-18T05:44:52.585Z] [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Account Executive, Industries @ anthropic',
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
[2026-01-18T05:44:52.586Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:44:54.087Z] [BOT] 📍 [ROUTING] "SMB Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T05:44:54.087Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:44:54.233Z] [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 SMB Account Executive, Industries @ anthropic',
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
[2026-01-18T05:44:54.234Z] [BOT] ❌ Industry post failed: SMB Account Executive, Industries
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T05:44:54.234Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 15
[2026-01-18T05:44:54.234Z] [BOT] Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-18T05:44:54.234Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2026-01-18T05:44:54.235Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🦢・los-angeles: 1 posts
[2026-01-18T05:44:54.235Z] [BOT] [STATS] Channel stats saved
[2026-01-18T05:44:54.235Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T05:44:54.244Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3644) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Data Scientist, Analytics - Growth/SEO: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Data Scientist, Analytics - Growth/SEO
- [BOT ERROR] ❌ Error posting job Senior Data Scientist, Analytics - Growth/SEO: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Product Manager, Payments
- [BOT ERROR] ❌ Error posting job Staff Product Manager, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Policy Manager, Chemical Weapons and High Yield Explosives
- [BOT ERROR] ❌ Error posting job Policy Manager, Chemical Weapons and High Yield Explosives: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Strategic Account Executive, Industries
- [BOT ERROR] ❌ Error posting job Strategic Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job SMB Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SMB Account Executive, Industries
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*