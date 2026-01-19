# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T05:48:28.071Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T05:47:36.868Z] ========================================
[2026-01-19T05:47:36.870Z] Discord Bot Execution Log
[2026-01-19T05:47:36.870Z] Environment: GitHub Actions
[2026-01-19T05:47:36.870Z] Node Version: v20.19.6
[2026-01-19T05:47:36.870Z] ========================================
[2026-01-19T05:47:36.871Z] Environment Variables Check:
[2026-01-19T05:47:36.871Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T05:47:36.871Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T05:47:36.871Z] 
Multi-Channel Configuration:
[2026-01-19T05:47:36.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.871Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.872Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.872Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.872Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.872Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T05:47:36.872Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T05:47:36.872Z] 
Data Files Check:
[2026-01-19T05:47:36.873Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68841 bytes)
[2026-01-19T05:47:36.883Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1554326 bytes)
[2026-01-19T05:47:36.883Z] 
========================================
[2026-01-19T05:47:36.883Z] Starting Enhanced Discord Bot...
[2026-01-19T05:47:36.883Z] ========================================
[2026-01-19T05:47:37.405Z] [BOT] ✅ Loaded V2 database: 2861 jobs
[2026-01-19T05:47:37.883Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T05:47:37.884Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T05:47:37.884Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T05:47:38.003Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Aws - Node at The Travelers Companies
[2026-01-19T05:47:38.007Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T05:47:38.008Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T05:47:38.008Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T05:47:38.009Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T05:47:38.009Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T05:47:38.014Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-19T05:47:38.014Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws - Node" @ ORG_b344d80e Travelers Companies
[2026-01-19T05:47:38.014Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:47:38.019Z] [BOT ERROR] (node:3203) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T05:47:38.136Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws - Node: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies',
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
[2026-01-19T05:47:38.136Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Aws - Node
⚠️  Channel full error count: 1/5
[2026-01-19T05:47:39.714Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws - Node: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies',
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
[2026-01-19T05:47:39.714Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:47:41.215Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - .Net - Node.js','React" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:47:41.394Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-19T05:47:41.395Z] [BOT] ✅ Industry: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies
[2026-01-19T05:47:43.198Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-19T05:47:43.198Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T05:47:44.699Z] [BOT] 💾 Marked as posted: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-19T05:47:44.699Z] [BOT] 💾 BEFORE ARCHIVING: 2862 jobs in database
[2026-01-19T05:47:44.701Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T05:47:44.706Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-19T05:47:44.706Z] [BOT] ✅ Archiving complete: 1 archived, 2861 active
[2026-01-19T05:47:44.724Z] [BOT] 💾 Saved posted_jobs.json: 2861 active jobs
[2026-01-19T05:47:44.724Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:47:44.725Z] [BOT] 📍 [ROUTING] "Engineering Manager, Detection and Response" @ anthropic
[2026-01-19T05:47:44.725Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:47:44.902Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Detection and Response @ anthropic in #💻・tech-jobs
[2026-01-19T05:47:44.902Z] [BOT] ✅ Industry: Engineering Manager, Detection and Response @ anthropic
[2026-01-19T05:47:46.581Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Detection and Response @ anthropic in #🌉・san-francisco
[2026-01-19T05:47:46.582Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T05:47:48.082Z] [BOT] 💾 Marked as posted: Engineering Manager, Detection and Response @ anthropic (instance #1)
[2026-01-19T05:47:48.082Z] [BOT] 💾 BEFORE ARCHIVING: 2862 jobs in database
[2026-01-19T05:47:48.085Z] [BOT] ✅ No jobs to archive (all 2862 jobs within 7-day window)
[2026-01-19T05:47:48.104Z] [BOT] 💾 Saved posted_jobs.json: 2862 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:47:48.105Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_fb72c674 Financial
[2026-01-19T05:47:48.105Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:47:48.257Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_fb72c674 Financial in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_fb72c674 Financial
[2026-01-19T05:47:49.932Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_fb72c674 Financial in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T05:47:51.432Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_fb72c674 Financial (instance #1)
[2026-01-19T05:47:51.432Z] [BOT] 💾 BEFORE ARCHIVING: 2863 jobs in database
[2026-01-19T05:47:51.434Z] [BOT] ✅ No jobs to archive (all 2863 jobs within 7-day window)
[2026-01-19T05:47:51.452Z] [BOT] 💾 Saved posted_jobs.json: 2863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:47:51.453Z] [BOT] 📍 [ROUTING] "Analyst – Data & Software Engineering - February 2026 Start Date" @ ORG_82e4502a
   Category: TECH (matched: "software")
[2026-01-19T05:47:51.453Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:47:51.667Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a in #💻・tech-jobs
  ✅ Industry: Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a
[2026-01-19T05:47:53.342Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T05:47:54.843Z] [BOT] 💾 Marked as posted: Analyst – Data & Software Engineering - February 2026 Start Date @ ORG_82e4502a (instance #1)
[2026-01-19T05:47:54.843Z] [BOT] 💾 BEFORE ARCHIVING: 2864 jobs in database
[2026-01-19T05:47:54.845Z] [BOT] ✅ No jobs to archive (all 2864 jobs within 7-day window)
[2026-01-19T05:47:54.861Z] [BOT] 💾 Saved posted_jobs.json: 2864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:47:57.862Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T05:47:57.863Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Direct Issuance" @ ORG_a10ae009
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T05:47:57.863Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T05:47:58.047Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 - Direct Issuance @ ORG_a10ae009
[2026-01-19T05:47:59.929Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T05:48:01.431Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 (instance #1)
[2026-01-19T05:48:01.431Z] [BOT] 💾 BEFORE ARCHIVING: 2865 jobs in database
[2026-01-19T05:48:01.433Z] [BOT] ✅ No jobs to archive (all 2865 jobs within 7-day window)
[2026-01-19T05:48:01.452Z] [BOT] 💾 Saved posted_jobs.json: 2865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:48:01.453Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_cdfeb1f5
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T05:48:01.693Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_cdfeb1f5 in #🤖・ai-jobs
[2026-01-19T05:48:01.693Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ ORG_cdfeb1f5
[2026-01-19T05:48:03.391Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_cdfeb1f5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:48:04.892Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_cdfeb1f5 (instance #1)
[2026-01-19T05:48:04.892Z] [BOT] 💾 BEFORE ARCHIVING: 2866 jobs in database
[2026-01-19T05:48:04.894Z] [BOT] ✅ No jobs to archive (all 2866 jobs within 7-day window)
[2026-01-19T05:48:04.912Z] [BOT] 💾 Saved posted_jobs.json: 2866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:48:04.913Z] [BOT] 📍 [ROUTING] "IT Software Engineering - Data Engineer" @ ORG_66279f04 Investments
   Category: AI (matched: "AI/ML")
[2026-01-19T05:48:04.913Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T05:48:05.105Z] [BOT] ✅ Created forum post: 🏢 IT Software Engineering - Data Engineer @ ORG_66279f04 Investments in #🤖・ai-jobs
  ✅ Industry: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments
[2026-01-19T05:48:06.736Z] [BOT] ✅ Created forum post: 🏢 IT Software Engineering - Data Engineer @ ORG_66279f04 Investments in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:48:08.236Z] [BOT] 💾 Marked as posted: IT Software Engineering - Data Engineer @ ORG_66279f04 Investments (instance #1)
[2026-01-19T05:48:08.236Z] [BOT] 💾 BEFORE ARCHIVING: 2867 jobs in database
[2026-01-19T05:48:08.238Z] [BOT] ✅ No jobs to archive (all 2867 jobs within 7-day window)
[2026-01-19T05:48:08.256Z] [BOT] 💾 Saved posted_jobs.json: 2867 active jobs
[2026-01-19T05:48:08.256Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:48:11.256Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T05:48:11.256Z] [BOT] 📍 [ROUTING] "Advanced Practice Provider - Aprn or PA - Medical Informatics" @ ORG_0f4848d3ing Health
[2026-01-19T05:48:11.256Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T05:48:11.370Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-19T05:48:11.370Z] [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
⚠️  Channel full error count: 1/5
[2026-01-19T05:48:12.938Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health',
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
[2026-01-19T05:48:12.938Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:48:17.440Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T05:48:17.441Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
[2026-01-19T05:48:17.441Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T05:48:17.528Z] [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics',
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
[2026-01-19T05:48:17.528Z] [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
⚠️  Channel full error count: 2/5
[2026-01-19T05:48:20.480Z] [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics',
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
[2026-01-19T05:48:20.480Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:48:24.982Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_8110fa24 (posted within 7 days)
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_5132119a-engineer_r-122920-1 (posted within 7 days)
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_b7f9cca2-engineer_r-234146 (posted within 7 days)
[2026-01-19T05:48:24.983Z] [BOT] ⏭️  Skipping duplicate: JID_52d5dba1-date_jr100158-1 (posted within 7 days)
[2026-01-19T05:48:24.984Z] [BOT] ⏭️  Skipping duplicate: JID_ef6e297f-engineer_2123335-1 (posted within 7 days)
[2026-01-19T05:48:25.115Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[2026-01-19T05:48:25.294Z] [BOT] ✅ Saved pending queue: 2834 total (2814 pending, 13 enriched, 7 posted)
[2026-01-19T05:48:25.295Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T05:48:25.355Z] [BOT] 📂 Loaded 5005 existing routing entries
[2026-01-19T05:48:25.426Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5015
[2026-01-19T05:48:25.426Z] [BOT] Timestamp: 2026-01-19T05:48:25.406Z
[2026-01-19T05:48:25.427Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
   Successful: 14
   Failed: 6
[2026-01-19T05:48:25.427Z] [BOT] Skipped: 0
[2026-01-19T05:48:25.427Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 7
   Top channels:
[2026-01-19T05:48:25.427Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
[2026-01-19T05:48:25.427Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-19T05:48:25.428Z] [BOT] [STATS] Channel stats saved
[2026-01-19T05:48:27.454Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3203) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws - Node: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Aws - Node
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws - Node: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
- [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*