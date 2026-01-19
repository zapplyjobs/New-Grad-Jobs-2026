# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T19:12:21.522Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T19:11:33.817Z] ========================================
[2026-01-19T19:11:33.819Z] Discord Bot Execution Log
[2026-01-19T19:11:33.819Z] Environment: GitHub Actions
[2026-01-19T19:11:33.819Z] Node Version: v20.19.6
[2026-01-19T19:11:33.819Z] ========================================
[2026-01-19T19:11:33.819Z] Environment Variables Check:
[2026-01-19T19:11:33.819Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T19:11:33.819Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T19:11:33.820Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T19:11:33.820Z] 
Multi-Channel Configuration:
[2026-01-19T19:11:33.820Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T19:11:33.820Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T19:11:33.820Z] 
Data Files Check:
[2026-01-19T19:11:33.821Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94617 bytes)
[2026-01-19T19:11:33.833Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1607388 bytes)
[2026-01-19T19:11:33.833Z] 
========================================
[2026-01-19T19:11:33.833Z] Starting Enhanced Discord Bot...
[2026-01-19T19:11:33.833Z] ========================================
[2026-01-19T19:11:34.287Z] [BOT] ✅ Loaded V2 database: 2953 jobs
[2026-01-19T19:11:35.181Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T19:11:35.182Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T19:11:35.182Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T19:11:35.336Z] [BOT] ✅ Loaded pending queue: 2820 total (2800 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry-Level AI Generalist at Invisible Technologies AI
[2026-01-19T19:11:35.340Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T19:11:35.341Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T19:11:35.341Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T19:11:35.342Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T19:11:35.342Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T19:11:35.346Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-19T19:11:35.346Z] [BOT] 📍 [ROUTING] "Entry-Level AI Generalist" @ ORG_4ee447c5 Technologies AI
[2026-01-19T19:11:35.346Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T19:11:35.347Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T19:11:35.351Z] [BOT ERROR] (node:2993) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T19:11:35.625Z] [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI',
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
[2026-01-19T19:11:35.625Z] [BOT] ❌ Industry post failed: Entry-Level AI Generalist
⚠️  Channel full error count: 1/5
[2026-01-19T19:11:37.457Z] [BOT] ✅ Created forum post: 🏢 Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T19:11:38.957Z] [BOT] 💾 Marked as posted: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI (instance #1)
[2026-01-19T19:11:38.958Z] [BOT] 💾 BEFORE ARCHIVING: 2954 jobs in database
[2026-01-19T19:11:38.960Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T19:11:38.964Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-19T19:11:38.964Z] [BOT] ✅ Archiving complete: 20 archived, 2934 active
[2026-01-19T19:11:38.982Z] [BOT] 💾 Saved posted_jobs.json: 2934 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:11:38.982Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Digital Native Business" @ anthropic
[2026-01-19T19:11:38.982Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T19:11:39.174Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Business @ anthropic in #🤖・ai-jobs
  ✅ Industry: Customer Success Manager, Digital Native Business @ anthropic
[2026-01-19T19:11:40.981Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Business @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T19:11:42.481Z] [BOT] 💾 Marked as posted: Customer Success Manager, Digital Native Business @ anthropic (instance #1)
[2026-01-19T19:11:42.482Z] [BOT] 💾 BEFORE ARCHIVING: 2935 jobs in database
[2026-01-19T19:11:42.484Z] [BOT] ✅ No jobs to archive (all 2935 jobs within 7-day window)
[2026-01-19T19:11:42.500Z] [BOT] 💾 Saved posted_jobs.json: 2935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:11:42.501Z] [BOT] 📍 [ROUTING] "Product Engineer - Multiple Levels Available" @ ORG_f5b4b427 Insurance Company
[2026-01-19T19:11:42.501Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T19:11:44.424Z] [BOT] ✅ Created forum post: 🏢 Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company in #🤖・ai-jobs
  ✅ Industry: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company
[2026-01-19T19:11:46.098Z] [BOT] ✅ Created forum post: 🏢 Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T19:11:47.599Z] [BOT] 💾 Marked as posted: Product Engineer - Multiple Levels Available @ ORG_f5b4b427 Insurance Company (instance #1)
[2026-01-19T19:11:47.600Z] [BOT] 💾 BEFORE ARCHIVING: 2936 jobs in database
[2026-01-19T19:11:47.602Z] [BOT] ✅ No jobs to archive (all 2936 jobs within 7-day window)
[2026-01-19T19:11:47.620Z] [BOT] 💾 Saved posted_jobs.json: 2936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:11:47.621Z] [BOT] 📍 [ROUTING] "Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights" @ ORG_1b9f0910
[2026-01-19T19:11:47.621Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch, nonTechMatch (using ai)
[2026-01-19T19:11:47.961Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🤖・ai-jobs
[2026-01-19T19:11:47.961Z] [BOT] ✅ Industry: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910
[2026-01-19T19:11:49.672Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 in #🏙️・san-bruno
[2026-01-19T19:11:49.672Z] [BOT] ✅ Location: 🏙️・san-bruno
[2026-01-19T19:11:51.173Z] [BOT] 💾 Marked as posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ ORG_1b9f0910 (instance #1)
[2026-01-19T19:11:51.173Z] [BOT] 💾 BEFORE ARCHIVING: 2937 jobs in database
[2026-01-19T19:11:51.175Z] [BOT] ✅ No jobs to archive (all 2937 jobs within 7-day window)
[2026-01-19T19:11:51.192Z] [BOT] 💾 Saved posted_jobs.json: 2937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:11:51.193Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor" @ ORG_ae438873
   Category: AI (matched: "machine learning")
[2026-01-19T19:11:51.193Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T19:11:51.486Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873 in #🤖・ai-jobs
[2026-01-19T19:11:51.486Z] [BOT] ✅ Industry: Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873
[2026-01-19T19:11:53.197Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ Nextdoor',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-19T19:11:53.197Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-19T19:11:54.698Z] [BOT] 💾 Marked as posted: Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor @ ORG_ae438873 (instance #1)
[2026-01-19T19:11:54.698Z] [BOT] 💾 BEFORE ARCHIVING: 2938 jobs in database
[2026-01-19T19:11:54.700Z] [BOT] ✅ No jobs to archive (all 2938 jobs within 7-day window)
[2026-01-19T19:11:54.718Z] [BOT] 💾 Saved posted_jobs.json: 2938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:11:57.720Z] [BOT] 📌 Posting 2 jobs to #📊・JID_9910249a
[2026-01-19T19:11:57.721Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Claude Experiences" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-19T19:11:57.721Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T19:11:57.907Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Claude Experiences @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_d597ace3/threads'
}
[2026-01-19T19:11:57.907Z] [BOT] ❌ Industry post failed: Technical Program Manager, Claude Experiences
⚠️  Channel full error count: 1/5
[2026-01-19T19:11:59.577Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Claude Experiences @ anthropic',
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
[2026-01-19T19:11:59.577Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T19:12:01.078Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Launches" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-19T19:12:01.078Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T19:12:01.228Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Launches: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Launches @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_d597ace3/threads'
}
[2026-01-19T19:12:01.228Z] [BOT] ❌ Industry post failed: Technical Program Manager, Launches
⚠️  Channel full error count: 2/5
[2026-01-19T19:12:02.916Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Launches: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Launches @ anthropic',
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
[2026-01-19T19:12:02.916Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T19:12:07.419Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T19:12:07.420Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Mathematics" @ ORG_64dba1b4 University
[2026-01-19T19:12:07.420Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T19:12:07.622Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate - Mathematics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University',
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
[2026-01-19T19:12:07.622Z] [BOT] ❌ Industry post failed: Postdoctoral Research Associate - Mathematics
⚠️  Channel full error count: 3/5
[2026-01-19T19:12:09.285Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate - Mathematics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University',
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
[2026-01-19T19:12:09.285Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-19T19:12:13.786Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-19T19:12:13.786Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer" @ ORG_41a6741einghouse Electric Company
[2026-01-19T19:12:13.787Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:12:13.981Z] [BOT ERROR] ❌ Error posting job Probabilistic Risk Assessment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T19:12:13.981Z] [BOT] ❌ Industry post failed: Probabilistic Risk Assessment Engineer
⚠️  Channel full error count: 4/5
[2026-01-19T19:12:15.641Z] [BOT ERROR] ❌ Error posting job Probabilistic Risk Assessment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T19:12:15.641Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:12:20.142Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T19:12:20.143Z] [BOT] 📍 [ROUTING] "Content Technologist" @ discord
   Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T19:12:20.349Z] [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Content Technologist @ discord',
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
[2026-01-19T19:12:20.349Z] [BOT] ❌ Industry post failed: Content Technologist
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T19:12:20.350Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T19:12:20.350Z] [BOT] Total attempts: 19
   Successful: 8
   Failed: 11
[2026-01-19T19:12:20.350Z] [BOT] Skipped: 0
[2026-01-19T19:12:20.350Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T19:12:20.350Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
[2026-01-19T19:12:20.350Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 1 posts
     4. #🏙️・san-bruno: 1 posts
[2026-01-19T19:12:20.350Z] [BOT] [STATS] Channel stats saved
[2026-01-19T19:12:20.351Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T19:12:20.360Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2993) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry-Level AI Generalist
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer – New Grad 2026 - Machine Learning - Nextdoor: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Claude Experiences
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Claude Experiences: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Launches: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Launches
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Launches: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate - Mathematics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Research Associate - Mathematics
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate - Mathematics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Probabilistic Risk Assessment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Probabilistic Risk Assessment Engineer
- [BOT ERROR] ❌ Error posting job Probabilistic Risk Assessment Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Content Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Content Technologist
- ❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*