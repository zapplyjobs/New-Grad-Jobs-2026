# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T07:52:50.316Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T07:52:08.199Z] ========================================
[2026-01-17T07:52:08.201Z] Discord Bot Execution Log
[2026-01-17T07:52:08.201Z] Environment: GitHub Actions
[2026-01-17T07:52:08.201Z] Node Version: v20.19.6
[2026-01-17T07:52:08.202Z] ========================================
[2026-01-17T07:52:08.202Z] Environment Variables Check:
[2026-01-17T07:52:08.202Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T07:52:08.202Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T07:52:08.202Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T07:52:08.202Z] 
Multi-Channel Configuration:
[2026-01-17T07:52:08.202Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.202Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.202Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T07:52:08.203Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T07:52:08.203Z] 
Data Files Check:
[2026-01-17T07:52:08.204Z] .github/data/new_jobs.json: ✅ Exists (10 items, 41629 bytes)
[2026-01-17T07:52:08.213Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1266819 bytes)
[2026-01-17T07:52:08.213Z] 
========================================
[2026-01-17T07:52:08.213Z] Starting Enhanced Discord Bot...
[2026-01-17T07:52:08.213Z] ========================================
[2026-01-17T07:52:08.781Z] [BOT] ✅ Loaded V2 database: 2341 jobs
[2026-01-17T07:52:09.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T07:52:09.250Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T07:52:09.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T07:52:09.381Z] [BOT] ✅ Loaded pending queue: 2885 total (2865 pending, 20 enriched, 0 posted)
[2026-01-17T07:52:09.382Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Machine Learning Engineer - E-Commerce Governance - PhD at ByteDance
[2026-01-17T07:52:09.387Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T07:52:09.388Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T07:52:09.388Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T07:52:09.389Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-17T07:52:09.389Z] [BOT] (2 grouped as same job with different locations)
[2026-01-17T07:52:09.389Z] [BOT] 📍 1 jobs with multiple locations:
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T07:52:09.393Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T07:52:09.394Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance - PhD" @ ORG_08c9a13c
[2026-01-17T07:52:09.394Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:52:09.413Z] [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T07:52:09.559Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-17T07:52:09.559Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c
[2026-01-17T07:52:11.260Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T07:52:12.761Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (instance #1)
[2026-01-17T07:52:12.761Z] [BOT] 💾 BEFORE ARCHIVING: 2342 jobs in database
[2026-01-17T07:52:12.763Z] [BOT] ✅ No jobs to archive (all 2342 jobs within 7-day window)
[2026-01-17T07:52:12.781Z] [BOT] 💾 Saved posted_jobs.json: 2342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:12.782Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (instance #1)
[2026-01-17T07:52:12.782Z] [BOT] 💾 BEFORE ARCHIVING: 2343 jobs in database
[2026-01-17T07:52:12.784Z] [BOT] ✅ No jobs to archive (all 2343 jobs within 7-day window)
[2026-01-17T07:52:12.800Z] [BOT] 💾 Saved posted_jobs.json: 2343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:12.800Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:52:13.077Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-17T07:52:13.077Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c
[2026-01-17T07:52:14.878Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:52:16.380Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c (instance #1)
[2026-01-17T07:52:16.381Z] [BOT] 💾 BEFORE ARCHIVING: 2344 jobs in database
[2026-01-17T07:52:16.382Z] [BOT] ✅ No jobs to archive (all 2344 jobs within 7-day window)
[2026-01-17T07:52:16.396Z] [BOT] 💾 Saved posted_jobs.json: 2344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:16.397Z] [BOT] 📍 [ROUTING] "Software Engineer – University Graduate" @ ORG_e5deb41a Securities
[2026-01-17T07:52:16.397Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:52:16.720Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – University Graduate @ ORG_e5deb41a Securities in #🤖・ai-jobs
  ✅ Industry: Software Engineer – University Graduate @ ORG_e5deb41a Securities
[2026-01-17T07:52:18.348Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – University Graduate @ ORG_e5deb41a Securities in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T07:52:19.849Z] [BOT] 💾 Marked as posted: Software Engineer – University Graduate @ ORG_e5deb41a Securities (instance #1)
[2026-01-17T07:52:19.849Z] [BOT] 💾 BEFORE ARCHIVING: 2345 jobs in database
[2026-01-17T07:52:19.851Z] [BOT] ✅ No jobs to archive (all 2345 jobs within 7-day window)
[2026-01-17T07:52:19.869Z] [BOT] 💾 Saved posted_jobs.json: 2345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:22.870Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T07:52:22.871Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA - Weekends)" @ supabase
[2026-01-17T07:52:22.871Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:23.073Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (EMEA - Weekends) @ supabase in #💻・tech-jobs
[2026-01-17T07:52:23.073Z] [BOT] ✅ Industry: Support Engineer (EMEA - Weekends) @ supabase
[2026-01-17T07:52:24.576Z] [BOT] 💾 Marked as posted: Support Engineer (EMEA - Weekends) @ supabase (instance #1)
[2026-01-17T07:52:24.576Z] [BOT] 💾 BEFORE ARCHIVING: 2346 jobs in database
[2026-01-17T07:52:24.577Z] [BOT] ✅ No jobs to archive (all 2346 jobs within 7-day window)
[2026-01-17T07:52:24.594Z] [BOT] 💾 Saved posted_jobs.json: 2346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:24.595Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER - Weekends)" @ supabase
[2026-01-17T07:52:24.595Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:24.741Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (AMER - Weekends) @ supabase in #💻・tech-jobs
[2026-01-17T07:52:24.741Z] [BOT] ✅ Industry: Support Engineer (AMER - Weekends) @ supabase
[2026-01-17T07:52:26.242Z] [BOT] 💾 Marked as posted: Support Engineer (AMER - Weekends) @ supabase (instance #1)
[2026-01-17T07:52:26.243Z] [BOT] 💾 BEFORE ARCHIVING: 2347 jobs in database
[2026-01-17T07:52:26.244Z] [BOT] ✅ No jobs to archive (all 2347 jobs within 7-day window)
[2026-01-17T07:52:26.259Z] [BOT] 💾 Saved posted_jobs.json: 2347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:26.260Z] [BOT] 📍 [ROUTING] "EGSE Software Engineer - Labview Specialist" @ ORG_7265ce52 Space Systems
[2026-01-17T07:52:26.260Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:26.438Z] [BOT] ✅ Created forum post: 🏢 EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems in #💻・tech-jobs
  ✅ Industry: EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems
[2026-01-17T07:52:28.189Z] [BOT] ✅ Created forum post: 🏢 EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T07:52:29.691Z] [BOT] 💾 Marked as posted: EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems (instance #1)
[2026-01-17T07:52:29.691Z] [BOT] 💾 BEFORE ARCHIVING: 2348 jobs in database
[2026-01-17T07:52:29.693Z] [BOT] ✅ No jobs to archive (all 2348 jobs within 7-day window)
[2026-01-17T07:52:29.709Z] [BOT] 💾 Saved posted_jobs.json: 2348 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:29.710Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_c6cfe6e4 Canyon Consulting
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:29.908Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_c6cfe6e4 Canyon Consulting
[2026-01-17T07:52:31.564Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:52:33.066Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_c6cfe6e4 Canyon Consulting (instance #1)
[2026-01-17T07:52:33.066Z] [BOT] 💾 BEFORE ARCHIVING: 2349 jobs in database
[2026-01-17T07:52:33.068Z] [BOT] ✅ No jobs to archive (all 2349 jobs within 7-day window)
[2026-01-17T07:52:33.085Z] [BOT] 💾 Saved posted_jobs.json: 2349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:33.085Z] [BOT] 📍 [ROUTING] "Linux Engineer" @ ORG_4f23798d Street
[2026-01-17T07:52:33.085Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:33.226Z] [BOT] ✅ Created forum post: 🏢 Linux Engineer @ ORG_4f23798d Street in #💻・tech-jobs
[2026-01-17T07:52:33.226Z] [BOT] ✅ Industry: Linux Engineer @ ORG_4f23798d Street
[2026-01-17T07:52:34.822Z] [BOT ERROR] ❌ Error posting job Linux Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Linux Engineer @ ORG_4f23798d Street',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-17T07:52:34.823Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T07:52:36.324Z] [BOT] 💾 Marked as posted: Linux Engineer @ ORG_4f23798d Street (instance #1)
[2026-01-17T07:52:36.324Z] [BOT] 💾 BEFORE ARCHIVING: 2350 jobs in database
[2026-01-17T07:52:36.326Z] [BOT] ✅ No jobs to archive (all 2350 jobs within 7-day window)
[2026-01-17T07:52:36.340Z] [BOT] 💾 Saved posted_jobs.json: 2350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:52:36.340Z] [BOT] 📍 [ROUTING] "Forward-Deployed Test Engineer" @ ORG_e6cd637f
[2026-01-17T07:52:36.340Z] [BOT] Category: TECH (matched: "QA engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:52:36.427Z] [BOT ERROR] ❌ Error posting job Forward-Deployed Test Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward-Deployed Test Engineer @ Ranger',
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
[2026-01-17T07:52:36.427Z] [BOT] ❌ Industry post failed: Forward-Deployed Test Engineer
⚠️  Channel full error count: 1/5
[2026-01-17T07:52:38.045Z] [BOT ERROR] ❌ Error posting job Forward-Deployed Test Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward-Deployed Test Engineer @ Ranger',
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
[2026-01-17T07:52:38.045Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T07:52:42.546Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T07:52:42.547Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect" @ supabase
   Category: SALES (matched: "business development")
[2026-01-17T07:52:42.547Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T07:52:42.668Z] [BOT ERROR] ❌ Error posting job Partner Solutions Architect: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Partner Solutions Architect @ supabase',
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
[2026-01-17T07:52:42.668Z] [BOT] ❌ Industry post failed: Partner Solutions Architect
⚠️  Channel full error count: 2/5
[2026-01-17T07:52:47.170Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-17T07:52:47.171Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_00f38d20-detail (posted within 7 days)
[2026-01-17T07:52:47.171Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9d605b95-detail (posted within 7 days)
[2026-01-17T07:52:47.171Z] [BOT] ⏭️  Skipping duplicate: JID_5073f585 (posted within 7 days)
[2026-01-17T07:52:47.171Z] [BOT] ⏭️  Skipping duplicate: JID_42a372db (posted within 7 days)
[2026-01-17T07:52:47.171Z] [BOT] ⏭️  Skipping duplicate: JID_b50d4f71 (posted within 7 days)
[2026-01-17T07:52:47.172Z] [BOT] ⏭️  Skipping duplicate: JID_2c61fe83 (posted within 7 days)
[2026-01-17T07:52:47.172Z] [BOT] ⏭️  Skipping duplicate: JID_5ffdbaca (posted within 7 days)
⏭️  Skipping duplicate: JID_71787af8 (posted within 7 days)
[2026-01-17T07:52:47.291Z] [BOT] ✅ Loaded pending queue: 2885 total (2865 pending, 20 enriched, 0 posted)
[2026-01-17T07:52:47.475Z] [BOT] ✅ Saved pending queue: 2885 total (2865 pending, 12 enriched, 8 posted)
[2026-01-17T07:52:47.476Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T07:52:47.537Z] [BOT] 📂 Loaded 4555 existing routing entries
[2026-01-17T07:52:47.609Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T07:52:47.609Z] [BOT] Total entries: 4565
   Timestamp: 2026-01-17T07:52:47.589Z
[2026-01-17T07:52:47.610Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T07:52:47.610Z] [BOT] Total attempts: 17
   Successful: 13
   Failed: 4
   Skipped: 0
[2026-01-17T07:52:47.610Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T07:52:47.610Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-17T07:52:47.610Z] [BOT] 3. #🌧️・seattle: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-17T07:52:47.611Z] [BOT] [STATS] Channel stats saved
[2026-01-17T07:52:49.638Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Linux Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Forward-Deployed Test Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Forward-Deployed Test Engineer
- [BOT ERROR] ❌ Error posting job Forward-Deployed Test Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Partner Solutions Architect: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Partner Solutions Architect
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*