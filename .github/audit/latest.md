# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T19:01:55.024Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T19:01:07.691Z] ========================================
[2026-01-14T19:01:07.693Z] Discord Bot Execution Log
[2026-01-14T19:01:07.693Z] Environment: GitHub Actions
[2026-01-14T19:01:07.693Z] Node Version: v20.19.6
[2026-01-14T19:01:07.693Z] ========================================
[2026-01-14T19:01:07.693Z] Environment Variables Check:
[2026-01-14T19:01:07.693Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T19:01:07.694Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.694Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T19:01:07.694Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T19:01:07.694Z] 
Multi-Channel Configuration:
[2026-01-14T19:01:07.694Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.694Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.694Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.694Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T19:01:07.695Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T19:01:07.695Z] 
Data Files Check:
[2026-01-14T19:01:07.696Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64481 bytes)
[2026-01-14T19:01:07.702Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 724011 bytes)
[2026-01-14T19:01:07.702Z] 
========================================
[2026-01-14T19:01:07.702Z] Starting Enhanced Discord Bot...
[2026-01-14T19:01:07.702Z] ========================================
[2026-01-14T19:01:08.287Z] [BOT] ✅ Loaded V2 database: 1359 jobs
[2026-01-14T19:01:09.065Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T19:01:09.065Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T19:01:09.065Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T19:01:09.178Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst - GTM Strategy & Operations at Datadog
[2026-01-14T19:01:09.181Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T19:01:09.182Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T19:01:09.182Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T19:01:09.183Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T19:01:09.183Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T19:01:09.187Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T19:01:09.188Z] [BOT] 📍 [ROUTING] "Data Analyst - GTM Strategy & Operations" @ ORG_8bd7b9fd
[2026-01-14T19:01:09.188Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T19:01:09.206Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T19:01:09.329Z] [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - GTM Strategy & Operations @ Datadog',
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
[2026-01-14T19:01:09.329Z] [BOT] ❌ Industry post failed: Data Analyst - GTM Strategy & Operations
⚠️  Channel full error count: 1/5
[2026-01-14T19:01:11.143Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - GTM Strategy & Operations @ ORG_8bd7b9fd in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T19:01:12.643Z] [BOT] 💾 Marked as posted: Data Analyst - GTM Strategy & Operations @ ORG_8bd7b9fd (instance #1)
[2026-01-14T19:01:12.643Z] [BOT] 💾 BEFORE ARCHIVING: 1360 jobs in database
[2026-01-14T19:01:12.644Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T19:01:12.649Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T19:01:12.649Z] [BOT] ✅ Archiving complete: 1 archived, 1359 active
[2026-01-14T19:01:12.659Z] [BOT] 💾 Saved posted_jobs.json: 1359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:01:12.660Z] [BOT] 📍 [ROUTING] "Business Intelligence Engineer" @ Auto-Owners Insurance
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-14T19:01:12.660Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T19:01:13.421Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Engineer @ Auto-Owners Insurance in #📈・JID_fb739488
[2026-01-14T19:01:13.422Z] [BOT] ✅ Industry: Business Intelligence Engineer @ Auto-Owners Insurance
[2026-01-14T19:01:15.267Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Engineer @ Auto-Owners Insurance in #💻・remote-usa
[2026-01-14T19:01:15.267Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T19:01:16.768Z] [BOT] 💾 Marked as posted: Business Intelligence Engineer @ Auto-Owners Insurance (instance #1)
[2026-01-14T19:01:16.768Z] [BOT] 💾 BEFORE ARCHIVING: 1360 jobs in database
[2026-01-14T19:01:16.769Z] [BOT] ✅ No jobs to archive (all 1360 jobs within 7-day window)
[2026-01-14T19:01:16.778Z] [BOT] 💾 Saved posted_jobs.json: 1360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:01:19.778Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T19:01:19.779Z] [BOT] 📍 [ROUTING] "AI Training Data Acquisition Analyst" @ ORG_a48be88b
   Category: AI (matched: "machine learning")
[2026-01-14T19:01:19.780Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T19:01:20.167Z] [BOT] ✅ Created forum post: 🏢 AI Training Data Acquisition Analyst @ ORG_a48be88b in #🤖・ai-jobs
  ✅ Industry: AI Training Data Acquisition Analyst @ ORG_a48be88b
[2026-01-14T19:01:22.132Z] [BOT] ✅ Created forum post: 🏢 AI Training Data Acquisition Analyst @ ORG_a48be88b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:01:23.633Z] [BOT] 💾 Marked as posted: AI Training Data Acquisition Analyst @ ORG_a48be88b (instance #1)
[2026-01-14T19:01:23.634Z] [BOT] 💾 BEFORE ARCHIVING: 1361 jobs in database
[2026-01-14T19:01:23.635Z] [BOT] ✅ No jobs to archive (all 1361 jobs within 7-day window)
[2026-01-14T19:01:23.645Z] [BOT] 💾 Saved posted_jobs.json: 1361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:01:23.646Z] [BOT] 📍 [ROUTING] "（General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd" @ ORG_1bb6fcfb
[2026-01-14T19:01:23.646Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T19:01:24.098Z] [BOT] ✅ Created forum post: 🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb
[2026-01-14T19:01:25.997Z] [BOT] ✅ Created forum post: 🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:01:27.498Z] [BOT] 💾 Marked as posted: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb (instance #1)
[2026-01-14T19:01:27.499Z] [BOT] 💾 BEFORE ARCHIVING: 1362 jobs in database
[2026-01-14T19:01:27.500Z] [BOT] ✅ No jobs to archive (all 1362 jobs within 7-day window)
[2026-01-14T19:01:27.511Z] [BOT] 💾 Saved posted_jobs.json: 1362 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:01:27.512Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Specialized" @ anthropic
[2026-01-14T19:01:27.512Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:01:27.512Z] [BOT] ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-14T19:01:27.706Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Specialized @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Recruiter, Specialized @ anthropic
[2026-01-14T19:01:29.790Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Specialized @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:01:31.292Z] [BOT] 💾 Marked as posted: Technical Recruiter, Specialized @ anthropic (instance #1)
[2026-01-14T19:01:31.292Z] [BOT] 💾 BEFORE ARCHIVING: 1363 jobs in database
[2026-01-14T19:01:31.293Z] [BOT] ✅ No jobs to archive (all 1363 jobs within 7-day window)
[2026-01-14T19:01:31.303Z] [BOT] 💾 Saved posted_jobs.json: 1363 active jobs
[2026-01-14T19:01:31.303Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:01:31.304Z] [BOT] 📍 [ROUTING] "Young Investigator - Flexolmo" @ ORG_b344d80e Allen Institute for AI
[2026-01-14T19:01:31.304Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:01:31.471Z] [BOT ERROR] ❌ Error posting job Young Investigator - Flexolmo: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI',
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
[2026-01-14T19:01:31.471Z] [BOT] ❌ Industry post failed: Young Investigator - Flexolmo
⚠️  Channel full error count: 1/5
[2026-01-14T19:01:33.110Z] [BOT ERROR] ❌ Error posting job Young Investigator - Flexolmo: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI',
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
[2026-01-14T19:01:33.111Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T19:01:37.613Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T19:01:37.613Z] [BOT] 📍 [ROUTING] "Applications Analyst 1" @ ORG_66ea81b5 Health
[2026-01-14T19:01:37.613Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T19:01:37.855Z] [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applications Analyst 1 @ ORG_66ea81b5 Health',
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
[2026-01-14T19:01:37.855Z] [BOT] ❌ Industry post failed: Applications Analyst 1
⚠️  Channel full error count: 2/5
[2026-01-14T19:01:39.525Z] [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applications Analyst 1 @ ORG_66ea81b5 Health',
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
[2026-01-14T19:01:39.525Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-14T19:01:44.027Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T19:01:44.028Z] [BOT] 📍 [ROUTING] "IT Systems Engineer" @ anthropic
[2026-01-14T19:01:44.028Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:01:44.209Z] [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T19:01:44.209Z] [BOT] ❌ Industry post failed: IT Systems Engineer
⚠️  Channel full error count: 3/5
[2026-01-14T19:01:45.859Z] [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-14T19:01:45.859Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T19:01:47.360Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Level 1 - Direct-to-Consumer Streaming" @ ORG_91249fea
[2026-01-14T19:01:47.360Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:01:47.597Z] [BOT ERROR] ❌ Error posting job Software Development Engineer - Level 1 - Direct-to-Consumer Streaming: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ Sinclair',
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
[2026-01-14T19:01:47.597Z] [BOT] ❌ Industry post failed: Software Development Engineer - Level 1 - Direct-to-Consumer Streaming
⚠️  Channel full error count: 4/5
[2026-01-14T19:01:49.326Z] [BOT ERROR] ❌ Error posting job Software Development Engineer - Level 1 - Direct-to-Consumer Streaming: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ Sinclair',
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
[2026-01-14T19:01:49.326Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-14T19:01:53.828Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T19:01:53.828Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:01:54.038Z] [BOT ERROR] ❌ Error posting job Operations Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Operations Analyst @ Fortive',
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
[2026-01-14T19:01:54.038Z] [BOT] ❌ Industry post failed: Operations Analyst
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T19:01:54.039Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T19:01:54.039Z] [BOT] Total attempts: 19
   Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-14T19:01:54.039Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T19:01:54.039Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 3 posts
[2026-01-14T19:01:54.040Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #🗽・new-york: 1 posts
     4. #📈・JID_fb739488: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-14T19:01:54.040Z] [BOT] [STATS] Channel stats saved
[2026-01-14T19:01:54.040Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T19:01:54.053Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst - GTM Strategy & Operations
- [BOT ERROR] ❌ Error posting job Young Investigator - Flexolmo: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Young Investigator - Flexolmo
- [BOT ERROR] ❌ Error posting job Young Investigator - Flexolmo: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Applications Analyst 1
- [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: IT Systems Engineer
- [BOT ERROR] ❌ Error posting job IT Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Development Engineer - Level 1 - Direct-to-Consumer Streaming: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development Engineer - Level 1 - Direct-to-Consumer Streaming
- [BOT ERROR] ❌ Error posting job Software Development Engineer - Level 1 - Direct-to-Consumer Streaming: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Operations Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Operations Analyst
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*