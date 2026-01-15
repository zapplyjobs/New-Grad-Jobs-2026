# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T21:55:39.652Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T21:54:48.365Z] ========================================
[2026-01-15T21:54:48.367Z] Discord Bot Execution Log
[2026-01-15T21:54:48.367Z] Environment: GitHub Actions
[2026-01-15T21:54:48.367Z] Node Version: v20.19.6
[2026-01-15T21:54:48.367Z] ========================================
[2026-01-15T21:54:48.367Z] Environment Variables Check:
[2026-01-15T21:54:48.367Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T21:54:48.368Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T21:54:48.368Z] 
Multi-Channel Configuration:
[2026-01-15T21:54:48.368Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.368Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.369Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T21:54:48.369Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T21:54:48.369Z] 
Data Files Check:
[2026-01-15T21:54:48.369Z] .github/data/new_jobs.json: ✅ Exists (10 items, 41524 bytes)
[2026-01-15T21:54:48.376Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 985542 bytes)
[2026-01-15T21:54:48.377Z] 
========================================
[2026-01-15T21:54:48.377Z] Starting Enhanced Discord Bot...
[2026-01-15T21:54:48.377Z] ========================================
[2026-01-15T21:54:48.895Z] [BOT] ✅ Loaded V2 database: 1836 jobs
[2026-01-15T21:54:49.554Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T21:54:49.554Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T21:54:49.554Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T21:54:49.667Z] [BOT] ✅ Loaded pending queue: 2758 total (2738 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer I at Kroll
[2026-01-15T21:54:49.670Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T21:54:49.670Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T21:54:49.670Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T21:54:49.671Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T21:54:49.671Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-15T21:54:49.672Z] [BOT] - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
   - Software Engineer – Forward Deployed AI (New Grad) @ Promise: oakland, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T21:54:49.676Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T21:54:49.677Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
[2026-01-15T21:54:49.677Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:54:49.694Z] [BOT ERROR] (node:3361) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T21:54:49.785Z] [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T21:54:49.785Z] [BOT] ❌ Industry post failed: Data Engineer I
⚠️  Channel full error count: 1/5
[2026-01-15T21:54:51.287Z] [BOT] 📍 [ROUTING] "Clinical Data Analyst - Same Day Surgery/Observation Coder" @ ORG_b344d80e University of Chicago Medicine
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-15T21:54:51.287Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-15T21:54:51.369Z] [BOT ERROR] ❌ Error posting job Clinical Data Analyst - Same Day Surgery/Observation Coder: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine',
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
[2026-01-15T21:54:51.369Z] [BOT] ❌ Industry post failed: Clinical Data Analyst - Same Day Surgery/Observation Coder
⚠️  Channel full error count: 2/5
[2026-01-15T21:54:53.198Z] [BOT] ✅ Created forum post: 🏢 Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine in #🌆・chicago
[2026-01-15T21:54:53.199Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T21:54:54.699Z] [BOT] 💾 Marked as posted: Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine (instance #1)
[2026-01-15T21:54:54.700Z] [BOT] 💾 BEFORE ARCHIVING: 1837 jobs in database
[2026-01-15T21:54:54.701Z] [BOT] ✅ No jobs to archive (all 1837 jobs within 7-day window)
[2026-01-15T21:54:54.716Z] [BOT] 💾 Saved posted_jobs.json: 1837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:54:57.717Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T21:54:57.718Z] [BOT] 📍 [ROUTING] "Technology Associate" @ ORG_f0945c53
[2026-01-15T21:54:57.718Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:54:57.897Z] [BOT] ✅ Created forum post: 🏢 Technology Associate @ ORG_f0945c53 in #💻・tech-jobs
  ✅ Industry: Technology Associate @ ORG_f0945c53
[2026-01-15T21:54:59.619Z] [BOT] ✅ Created forum post: 🏢 Technology Associate @ ORG_f0945c53 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:55:01.121Z] [BOT] 💾 Marked as posted: Technology Associate @ ORG_f0945c53 (instance #1)
[2026-01-15T21:55:01.121Z] [BOT] 💾 BEFORE ARCHIVING: 1838 jobs in database
[2026-01-15T21:55:01.123Z] [BOT] ✅ No jobs to archive (all 1838 jobs within 7-day window)
[2026-01-15T21:55:01.137Z] [BOT] 💾 Saved posted_jobs.json: 1838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:01.138Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T21:55:01.138Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:55:01.375Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T21:55:03.108Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
[2026-01-15T21:55:03.108Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T21:55:04.609Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-15T21:55:04.610Z] [BOT] 💾 BEFORE ARCHIVING: 1839 jobs in database
[2026-01-15T21:55:04.611Z] [BOT] ✅ No jobs to archive (all 1839 jobs within 7-day window)
[2026-01-15T21:55:04.625Z] [BOT] 💾 Saved posted_jobs.json: 1839 active jobs
[2026-01-15T21:55:04.625Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:04.626Z] [BOT] 📍 [ROUTING] "Java DevSecOps Software Engineer" @ Trace3
[2026-01-15T21:55:04.626Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:55:05.308Z] [BOT] ✅ Created forum post: 🏢 Java DevSecOps Software Engineer @ Trace3 in #💻・tech-jobs
[2026-01-15T21:55:05.308Z] [BOT] ✅ Industry: Java DevSecOps Software Engineer @ Trace3
[2026-01-15T21:55:08.359Z] [BOT] ✅ Created forum post: 🏢 Java DevSecOps Software Engineer @ Trace3 in #🌉・san-francisco
[2026-01-15T21:55:08.360Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T21:55:09.860Z] [BOT] 💾 Marked as posted: Java DevSecOps Software Engineer @ Trace3 (instance #1)
[2026-01-15T21:55:09.860Z] [BOT] 💾 BEFORE ARCHIVING: 1840 jobs in database
[2026-01-15T21:55:09.861Z] [BOT] ✅ No jobs to archive (all 1840 jobs within 7-day window)
[2026-01-15T21:55:09.872Z] [BOT] 💾 Saved posted_jobs.json: 1840 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:09.873Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
[2026-01-15T21:55:09.873Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:55:10.061Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-15T21:55:11.791Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:55:13.292Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-15T21:55:13.292Z] [BOT] 💾 BEFORE ARCHIVING: 1841 jobs in database
[2026-01-15T21:55:13.293Z] [BOT] ✅ No jobs to archive (all 1841 jobs within 7-day window)
[2026-01-15T21:55:13.309Z] [BOT] 💾 Saved posted_jobs.json: 1841 active jobs
[2026-01-15T21:55:13.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:13.309Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Oracle Health and Analytics" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:55:13.737Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb
[2026-01-15T21:55:15.442Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T21:55:16.943Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb (instance #1)
[2026-01-15T21:55:16.943Z] [BOT] 💾 BEFORE ARCHIVING: 1842 jobs in database
[2026-01-15T21:55:16.945Z] [BOT] ✅ No jobs to archive (all 1842 jobs within 7-day window)
[2026-01-15T21:55:16.957Z] [BOT] 💾 Saved posted_jobs.json: 1842 active jobs
[2026-01-15T21:55:16.958Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:16.958Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Hybrid - Java/Mapreduce/Git/Pig/Maven" @ ORG_530743c3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:55:17.101Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Hybrid - Java/Mapreduce/Git/Pig/Maven @ ORG_530743c3 in #💻・tech-jobs
[2026-01-15T21:55:17.101Z] [BOT] ✅ Industry: Software Engineer 1 - Hybrid - Java/Mapreduce/Git/Pig/Maven @ ORG_530743c3
[2026-01-15T21:55:19.029Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Hybrid - Java/Mapreduce/Git/Pig/Maven @ ORG_530743c3 in #💻・remote-usa
[2026-01-15T21:55:19.029Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T21:55:20.530Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Hybrid - Java/Mapreduce/Git/Pig/Maven @ ORG_530743c3 (instance #1)
[2026-01-15T21:55:20.530Z] [BOT] 💾 BEFORE ARCHIVING: 1843 jobs in database
[2026-01-15T21:55:20.532Z] [BOT] ✅ No jobs to archive (all 1843 jobs within 7-day window)
[2026-01-15T21:55:20.543Z] [BOT] 💾 Saved posted_jobs.json: 1843 active jobs
[2026-01-15T21:55:20.543Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:23.544Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T21:55:23.544Z] [BOT] 📍 [ROUTING] "Material Handler" @ ORG_10a0c5f8 General Brigham
   Category: MARKETING (matched: "growth")
[2026-01-15T21:55:23.545Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T21:55:24.110Z] [BOT] ✅ Created forum post: 🏢 Material Handler @ ORG_10a0c5f8 General Brigham in #📣・marketing-jobs
  ✅ Industry: Material Handler @ ORG_10a0c5f8 General Brigham
[2026-01-15T21:55:25.789Z] [BOT ERROR] ❌ Error posting job Material Handler: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Material Handler @ ORG_10a0c5f8 General Brigham',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-15T21:55:25.790Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-15T21:55:27.291Z] [BOT] 💾 Marked as posted: Material Handler @ ORG_10a0c5f8 General Brigham (instance #1)
[2026-01-15T21:55:27.291Z] [BOT] 💾 BEFORE ARCHIVING: 1844 jobs in database
[2026-01-15T21:55:27.292Z] [BOT] ✅ No jobs to archive (all 1844 jobs within 7-day window)
[2026-01-15T21:55:27.306Z] [BOT] 💾 Saved posted_jobs.json: 1844 active jobs
[2026-01-15T21:55:27.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:55:30.306Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T21:55:30.306Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_a867f63f National Laboratory
[2026-01-15T21:55:30.306Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T21:55:30.446Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory',
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
[2026-01-15T21:55:30.446Z] [BOT] ❌ Industry post failed: Postdoctoral Research Associate
⚠️  Channel full error count: 1/5
[2026-01-15T21:55:32.076Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory',
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
[2026-01-15T21:55:32.076Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-15T21:55:36.577Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-15T21:55:36.577Z] [BOT] ⏭️  Skipping duplicate: JID_84b54c84-cx_2001-job-26148 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_4dd0db97 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_b096e5ab (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_1d0abbb2-handler_rq4039209 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0148259 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311345 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_72b63bf7 (posted within 7 days)
[2026-01-15T21:55:36.578Z] [BOT] ⏭️  Skipping duplicate: JID_1194cdc2 (posted within 7 days)
[2026-01-15T21:55:36.695Z] [BOT] ✅ Loaded pending queue: 2758 total (2738 pending, 20 enriched, 0 posted)
[2026-01-15T21:55:36.863Z] [BOT] ✅ Saved pending queue: 2758 total (2738 pending, 12 enriched, 8 posted)
[2026-01-15T21:55:36.864Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T21:55:36.919Z] [BOT] 📂 Loaded 4025 existing routing entries
[2026-01-15T21:55:36.982Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4035
   Timestamp: 2026-01-15T21:55:36.966Z
[2026-01-15T21:55:36.986Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 19
   Successful: 14
   Failed: 5
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 4 posts
     3. #🌆・chicago: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #🌧️・seattle: 1 posts
[STATS] Channel stats saved
[2026-01-15T21:55:39.007Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3361) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer I
- [BOT ERROR] ❌ Error posting job Clinical Data Analyst - Same Day Surgery/Observation Coder: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Clinical Data Analyst - Same Day Surgery/Observation Coder
- [BOT ERROR] ❌ Error posting job Material Handler: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Research Associate
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*