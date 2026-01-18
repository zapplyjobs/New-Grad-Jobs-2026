# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T06:29:43.084Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T06:28:55.393Z] ========================================
[2026-01-18T06:28:55.395Z] Discord Bot Execution Log
[2026-01-18T06:28:55.395Z] Environment: GitHub Actions
[2026-01-18T06:28:55.395Z] Node Version: v20.19.6
[2026-01-18T06:28:55.395Z] ========================================
[2026-01-18T06:28:55.395Z] Environment Variables Check:
[2026-01-18T06:28:55.395Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T06:28:55.395Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.395Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T06:28:55.395Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T06:28:55.396Z] 
Multi-Channel Configuration:
[2026-01-18T06:28:55.396Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T06:28:55.396Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T06:28:55.396Z] 
Data Files Check:
[2026-01-18T06:28:55.397Z] .github/data/new_jobs.json: ✅ Exists (10 items, 80055 bytes)
[2026-01-18T06:28:55.407Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1402692 bytes)
[2026-01-18T06:28:55.407Z] 
========================================
[2026-01-18T06:28:55.408Z] Starting Enhanced Discord Bot...
[2026-01-18T06:28:55.408Z] ========================================
[2026-01-18T06:28:55.946Z] [BOT] ✅ Loaded V2 database: 2593 jobs
[2026-01-18T06:28:56.607Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T06:28:56.607Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T06:28:56.607Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T06:28:56.730Z] [BOT] ✅ Loaded pending queue: 2866 total (2846 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Science Analyst 2 - Full Time - United States at Cisco
[2026-01-18T06:28:56.733Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T06:28:56.734Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T06:28:56.734Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T06:28:56.735Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T06:28:56.735Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T06:28:56.740Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T06:28:56.740Z] [BOT] 📍 [ROUTING] "Data Science Analyst 2 - Full Time - United States" @ ORG_aa669b28
[2026-01-18T06:28:56.740Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T06:28:56.745Z] [BOT ERROR] (node:2781) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T06:28:56.829Z] [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Analyst 2 - Full Time - United States @ Cisco',
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
[2026-01-18T06:28:56.829Z] [BOT] ❌ Industry post failed: Data Science Analyst 2 - Full Time - United States
⚠️  Channel full error count: 1/5
[2026-01-18T06:28:58.669Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 in #🌆・chicago
[2026-01-18T06:28:58.669Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-18T06:29:00.171Z] [BOT] 💾 Marked as posted: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 (instance #1)
[2026-01-18T06:29:00.171Z] [BOT] 💾 BEFORE ARCHIVING: 2594 jobs in database
[2026-01-18T06:29:00.173Z] [BOT] ✅ No jobs to archive (all 2594 jobs within 7-day window)
[2026-01-18T06:29:00.196Z] [BOT] 💾 Saved posted_jobs.json: 2594 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:00.196Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T06:29:00.534Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-18T06:29:00.534Z] [BOT] ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2026-01-18T06:29:02.035Z] [BOT] 💾 Marked as posted: AI Data Specialist @ ORG_f3ae3598 (instance #1)
[2026-01-18T06:29:02.036Z] [BOT] 💾 BEFORE ARCHIVING: 2595 jobs in database
[2026-01-18T06:29:02.037Z] [BOT] ✅ No jobs to archive (all 2595 jobs within 7-day window)
[2026-01-18T06:29:02.051Z] [BOT] 💾 Saved posted_jobs.json: 2595 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:05.052Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T06:29:05.053Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Payments" @ discord
[2026-01-18T06:29:05.053Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T06:29:05.053Z] [BOT] ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T06:29:05.253Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Payments @ discord in #📈・JID_fb739488
[2026-01-18T06:29:05.254Z] [BOT] ✅ Industry: Staff Product Manager, Payments @ discord
[2026-01-18T06:29:07.043Z] [BOT] ✅ Created forum post: 🏢 Staff Product Manager, Payments @ discord in #🌉・san-francisco
[2026-01-18T06:29:07.043Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T06:29:08.544Z] [BOT] 💾 Marked as posted: Staff Product Manager, Payments @ discord (instance #1)
[2026-01-18T06:29:08.544Z] [BOT] 💾 BEFORE ARCHIVING: 2596 jobs in database
[2026-01-18T06:29:08.546Z] [BOT] ✅ No jobs to archive (all 2596 jobs within 7-day window)
[2026-01-18T06:29:08.564Z] [BOT] 💾 Saved posted_jobs.json: 2596 active jobs
[2026-01-18T06:29:08.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:11.565Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T06:29:11.565Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
[2026-01-18T06:29:11.566Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T06:29:11.787Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #💲・sales-jobs
[2026-01-18T06:29:11.788Z] [BOT] ✅ Industry: Strategic Account Executive, Industries @ anthropic
[2026-01-18T06:29:13.492Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T06:29:14.992Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Industries @ anthropic (instance #1)
[2026-01-18T06:29:14.992Z] [BOT] 💾 BEFORE ARCHIVING: 2597 jobs in database
[2026-01-18T06:29:14.994Z] [BOT] ✅ No jobs to archive (all 2597 jobs within 7-day window)
[2026-01-18T06:29:15.010Z] [BOT] 💾 Saved posted_jobs.json: 2597 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:15.011Z] [BOT] 📍 [ROUTING] "SMB Account Executive, Industries" @ anthropic
[2026-01-18T06:29:15.011Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T06:29:15.205Z] [BOT] ✅ Created forum post: 🏢 SMB Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: SMB Account Executive, Industries @ anthropic
[2026-01-18T06:29:16.884Z] [BOT] ✅ Created forum post: 🏢 SMB Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T06:29:18.384Z] [BOT] 💾 Marked as posted: SMB Account Executive, Industries @ anthropic (instance #1)
[2026-01-18T06:29:18.385Z] [BOT] 💾 BEFORE ARCHIVING: 2598 jobs in database
[2026-01-18T06:29:18.386Z] [BOT] ✅ No jobs to archive (all 2598 jobs within 7-day window)
[2026-01-18T06:29:18.402Z] [BOT] 💾 Saved posted_jobs.json: 2598 active jobs
[2026-01-18T06:29:18.402Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:21.402Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-18T06:29:21.403Z] [BOT] 📍 [ROUTING] "Software Developer 1 - Python API" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:29:21.579Z] [BOT] ✅ Created forum post: 🏢 Software Developer 1 - Python API @ ORG_0fb6ee9c in #💻・tech-jobs
[2026-01-18T06:29:21.580Z] [BOT] ✅ Industry: Software Developer 1 - Python API @ ORG_0fb6ee9c
[2026-01-18T06:29:23.081Z] [BOT] 💾 Marked as posted: Software Developer 1 - Python API @ ORG_0fb6ee9c (instance #1)
[2026-01-18T06:29:23.082Z] [BOT] 💾 BEFORE ARCHIVING: 2599 jobs in database
[2026-01-18T06:29:23.083Z] [BOT] ✅ No jobs to archive (all 2599 jobs within 7-day window)
[2026-01-18T06:29:23.099Z] [BOT] 💾 Saved posted_jobs.json: 2599 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:23.100Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-18T06:29:23.100Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:29:23.455Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-18T06:29:25.288Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T06:29:26.789Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
[2026-01-18T06:29:26.789Z] [BOT] 💾 BEFORE ARCHIVING: 2600 jobs in database
[2026-01-18T06:29:26.791Z] [BOT] ✅ No jobs to archive (all 2600 jobs within 7-day window)
[2026-01-18T06:29:26.807Z] [BOT] 💾 Saved posted_jobs.json: 2600 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:26.807Z] [BOT] 📍 [ROUTING] "GIS Analyst" @ ORG_12fc059a County
[2026-01-18T06:29:26.808Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:29:27.017Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ ORG_12fc059a County in #💻・tech-jobs
  ✅ Industry: GIS Analyst @ ORG_12fc059a County
[2026-01-18T06:29:29.011Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ ORG_12fc059a County in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T06:29:30.511Z] [BOT] 💾 Marked as posted: GIS Analyst @ ORG_12fc059a County (instance #1)
[2026-01-18T06:29:30.512Z] [BOT] 💾 BEFORE ARCHIVING: 2601 jobs in database
[2026-01-18T06:29:30.513Z] [BOT] ✅ No jobs to archive (all 2601 jobs within 7-day window)
[2026-01-18T06:29:30.528Z] [BOT] 💾 Saved posted_jobs.json: 2601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:29:30.528Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Neurology" @ ORG_f5f75c9b U
[2026-01-18T06:29:30.529Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:29:30.635Z] [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U',
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
[2026-01-18T06:29:30.635Z] [BOT] ❌ Industry post failed: Neuroimaging Engineer - Neurology
⚠️  Channel full error count: 1/5
[2026-01-18T06:29:32.231Z] [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U',
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
[2026-01-18T06:29:32.232Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T06:29:33.732Z] [BOT] 📍 [ROUTING] "Software Engineer Frontend 2 - Full Time - United States" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:29:33.824Z] [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Frontend 2 - Full Time - United States @ Cisco',
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
[2026-01-18T06:29:33.824Z] [BOT] ❌ Industry post failed: Software Engineer Frontend 2 - Full Time - United States
⚠️  Channel full error count: 2/5
[2026-01-18T06:29:35.459Z] [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Frontend 2 - Full Time - United States @ Cisco',
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
[2026-01-18T06:29:35.459Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T06:29:39.960Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-18T06:29:39.961Z] [BOT] ⏭️  Skipping duplicate: JID_8482e2ad (posted within 7 days)
[2026-01-18T06:29:39.961Z] [BOT] ⏭️  Skipping duplicate: JID_019e179c (posted within 7 days)
[2026-01-18T06:29:39.961Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-18T06:29:39.962Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️  Skipping duplicate: JID_b288fb7c (posted within 7 days)
⏭️  Skipping duplicate: JID_7fa3ff70 (posted within 7 days)
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-18T06:29:39.962Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
[2026-01-18T06:29:40.079Z] [BOT] ✅ Loaded pending queue: 2866 total (2846 pending, 20 enriched, 0 posted)
[2026-01-18T06:29:40.270Z] [BOT] ✅ Saved pending queue: 2866 total (2846 pending, 12 enriched, 8 posted)
[2026-01-18T06:29:40.271Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T06:29:40.331Z] [BOT] 📂 Loaded 4755 existing routing entries
[2026-01-18T06:29:40.400Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T06:29:40.400Z] [BOT] Total entries: 4765
   Timestamp: 2026-01-18T06:29:40.380Z
[2026-01-18T06:29:40.401Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 18
[2026-01-18T06:29:40.401Z] [BOT] Successful: 13
   Failed: 5
   Skipped: 0
[2026-01-18T06:29:40.401Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T06:29:40.401Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 3 posts
[2026-01-18T06:29:40.401Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-18T06:29:40.401Z] [BOT] [STATS] Channel stats saved
[2026-01-18T06:29:42.427Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2781) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Science Analyst 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Science Analyst 2 - Full Time - United States
- [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Neuroimaging Engineer - Neurology
- [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Frontend 2 - Full Time - United States
- [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*