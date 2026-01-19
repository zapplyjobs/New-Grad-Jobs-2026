# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T18:51:09.477Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T18:50:17.313Z] ========================================
[2026-01-19T18:50:17.315Z] Discord Bot Execution Log
[2026-01-19T18:50:17.315Z] Environment: GitHub Actions
[2026-01-19T18:50:17.315Z] Node Version: v20.19.6
[2026-01-19T18:50:17.315Z] ========================================
[2026-01-19T18:50:17.315Z] Environment Variables Check:
[2026-01-19T18:50:17.315Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T18:50:17.315Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.315Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T18:50:17.316Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T18:50:17.316Z] 
Multi-Channel Configuration:
[2026-01-19T18:50:17.316Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T18:50:17.316Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T18:50:17.316Z] 
Data Files Check:
[2026-01-19T18:50:17.317Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49727 bytes)
[2026-01-19T18:50:17.327Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1611475 bytes)
[2026-01-19T18:50:17.327Z] 
========================================
[2026-01-19T18:50:17.327Z] Starting Enhanced Discord Bot...
[2026-01-19T18:50:17.327Z] ========================================
[2026-01-19T18:50:17.858Z] [BOT] ✅ Loaded V2 database: 2963 jobs
[2026-01-19T18:50:18.546Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T18:50:18.546Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T18:50:18.546Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T18:50:18.664Z] [BOT] ✅ Loaded pending queue: 2823 total (2803 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer at Axle
[2026-01-19T18:50:18.668Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T18:50:18.668Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T18:50:18.668Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T18:50:18.669Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T18:50:18.669Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T18:50:18.673Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-19T18:50:18.674Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T18:50:18.674Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T18:50:18.678Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T18:50:18.769Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer @ Axle',
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
[2026-01-19T18:50:18.769Z] [BOT] ❌ Industry post failed: Developer
⚠️  Channel full error count: 1/5
[2026-01-19T18:50:20.757Z] [BOT] ✅ Created forum post: 🏢 Developer @ ORG_eead3632 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T18:50:22.258Z] [BOT] 💾 Marked as posted: Developer @ ORG_eead3632 (instance #1)
[2026-01-19T18:50:22.258Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-19T18:50:22.260Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T18:50:22.265Z] [BOT] 📦 Archived 19 jobs to 2026-01.json (19 total in archive)
[2026-01-19T18:50:22.265Z] [BOT] ✅ Archiving complete: 19 archived, 2945 active
[2026-01-19T18:50:22.283Z] [BOT] 💾 Saved posted_jobs.json: 2945 active jobs
[2026-01-19T18:50:22.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:22.283Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_91892627
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T18:50:22.283Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T18:50:22.635Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_91892627 in #📈・JID_fb739488
[2026-01-19T18:50:22.636Z] [BOT] ✅ Industry: Data Analyst 1 @ ORG_91892627
[2026-01-19T18:50:24.294Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_91892627 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T18:50:25.795Z] [BOT] 💾 Marked as posted: Data Analyst 1 @ ORG_91892627 (instance #1)
[2026-01-19T18:50:25.795Z] [BOT] 💾 BEFORE ARCHIVING: 2946 jobs in database
[2026-01-19T18:50:25.797Z] [BOT] ✅ No jobs to archive (all 2946 jobs within 7-day window)
[2026-01-19T18:50:25.814Z] [BOT] 💾 Saved posted_jobs.json: 2946 active jobs
[2026-01-19T18:50:25.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:28.814Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T18:50:28.816Z] [BOT] 📍 [ROUTING] "Associate – Marketing Technologist" @ ORG_66279f04 Investments
[2026-01-19T18:50:28.816Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T18:50:29.056Z] [BOT] ✅ Created forum post: 🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments in #💲・sales-jobs
  ✅ Industry: Associate – Marketing Technologist @ ORG_66279f04 Investments
[2026-01-19T18:50:30.735Z] [BOT] ✅ Created forum post: 🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T18:50:32.236Z] [BOT] 💾 Marked as posted: Associate – Marketing Technologist @ ORG_66279f04 Investments (instance #1)
[2026-01-19T18:50:32.236Z] [BOT] 💾 BEFORE ARCHIVING: 2947 jobs in database
[2026-01-19T18:50:32.238Z] [BOT] ✅ No jobs to archive (all 2947 jobs within 7-day window)
[2026-01-19T18:50:32.259Z] [BOT] 💾 Saved posted_jobs.json: 2947 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:32.260Z] [BOT] 📍 [ROUTING] "Digital Analyst" @ ORG_7eb1e1f5
[2026-01-19T18:50:32.260Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T18:50:32.608Z] [BOT] ✅ Created forum post: 🏢 Digital Analyst @ ORG_7eb1e1f5 in #💲・sales-jobs
[2026-01-19T18:50:32.608Z] [BOT] ✅ Industry: Digital Analyst @ ORG_7eb1e1f5
[2026-01-19T18:50:34.547Z] [BOT] ✅ Created forum post: 🏢 Digital Analyst @ ORG_7eb1e1f5 in #🗽・new-york
[2026-01-19T18:50:34.547Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T18:50:36.048Z] [BOT] 💾 Marked as posted: Digital Analyst @ ORG_7eb1e1f5 (instance #1)
[2026-01-19T18:50:36.048Z] [BOT] 💾 BEFORE ARCHIVING: 2948 jobs in database
[2026-01-19T18:50:36.050Z] [BOT] ✅ No jobs to archive (all 2948 jobs within 7-day window)
[2026-01-19T18:50:36.070Z] [BOT] 💾 Saved posted_jobs.json: 2948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:39.071Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-19T18:50:39.072Z] [BOT] 📍 [ROUTING] "Software Application Engineer – Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T18:50:39.504Z] [BOT] ✅ Created forum post: 🏢 Software Application Engineer – Entry Level @ ORG_cdb83ff1 in #💻・tech-jobs
  ✅ Industry: Software Application Engineer – Entry Level @ ORG_cdb83ff1
[2026-01-19T18:50:41.184Z] [BOT] ✅ Created forum post: 🏢 Software Application Engineer – Entry Level @ ORG_cdb83ff1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T18:50:42.686Z] [BOT] 💾 Marked as posted: Software Application Engineer – Entry Level @ ORG_cdb83ff1 (instance #1)
[2026-01-19T18:50:42.686Z] [BOT] 💾 BEFORE ARCHIVING: 2949 jobs in database
[2026-01-19T18:50:42.688Z] [BOT] ✅ No jobs to archive (all 2949 jobs within 7-day window)
[2026-01-19T18:50:42.707Z] [BOT] 💾 Saved posted_jobs.json: 2949 active jobs
[2026-01-19T18:50:42.707Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:42.708Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_336a7f11 Medical
[2026-01-19T18:50:42.708Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T18:50:42.978Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_336a7f11 Medical in #💻・tech-jobs
[2026-01-19T18:50:42.979Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_336a7f11 Medical
[2026-01-19T18:50:44.685Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_336a7f11 Medical in #💻・remote-usa
[2026-01-19T18:50:44.686Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T18:50:46.187Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_336a7f11 Medical (instance #1)
[2026-01-19T18:50:46.187Z] [BOT] 💾 BEFORE ARCHIVING: 2950 jobs in database
[2026-01-19T18:50:46.189Z] [BOT] ✅ No jobs to archive (all 2950 jobs within 7-day window)
[2026-01-19T18:50:46.207Z] [BOT] 💾 Saved posted_jobs.json: 2950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:46.207Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer-Simulation" @ ORG_b344d80e Boeing Company
[2026-01-19T18:50:46.208Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T18:50:46.397Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2026-01-19T18:50:46.398Z] [BOT] ✅ Industry: Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company
[2026-01-19T18:50:48.201Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2026-01-19T18:50:48.201Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T18:50:49.702Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-19T18:50:49.702Z] [BOT] 💾 BEFORE ARCHIVING: 2951 jobs in database
[2026-01-19T18:50:49.704Z] [BOT] ✅ No jobs to archive (all 2951 jobs within 7-day window)
[2026-01-19T18:50:49.722Z] [BOT] 💾 Saved posted_jobs.json: 2951 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:49.723Z] [BOT] 📍 [ROUTING] "Programmer Analyst 1" @ ORG_35863c7e
[2026-01-19T18:50:49.723Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T18:50:50.024Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst 1 @ ORG_35863c7e in #💻・tech-jobs
[2026-01-19T18:50:50.024Z] [BOT] ✅ Industry: Programmer Analyst 1 @ ORG_35863c7e
[2026-01-19T18:50:51.866Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst 1 @ ORG_35863c7e in #💻・remote-usa
[2026-01-19T18:50:51.866Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T18:50:53.367Z] [BOT] 💾 Marked as posted: Programmer Analyst 1 @ ORG_35863c7e (instance #1)
[2026-01-19T18:50:53.367Z] [BOT] 💾 BEFORE ARCHIVING: 2952 jobs in database
[2026-01-19T18:50:53.369Z] [BOT] ✅ No jobs to archive (all 2952 jobs within 7-day window)
[2026-01-19T18:50:53.388Z] [BOT] 💾 Saved posted_jobs.json: 2952 active jobs
[2026-01-19T18:50:53.388Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:53.388Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_9b059f91inhood
[2026-01-19T18:50:53.388Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T18:50:53.605Z] [BOT] ✅ Created forum post: 📈 Software Engineer - Backend @ ORG_9b059f91inhood in #💻・tech-jobs
[2026-01-19T18:50:53.606Z] [BOT] ✅ Industry: Software Engineer - Backend @ ORG_9b059f91inhood
[2026-01-19T18:50:55.386Z] [BOT] ✅ Created forum post: 📈 Software Engineer - Backend @ ORG_9b059f91inhood in #🗽・new-york
[2026-01-19T18:50:55.387Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T18:50:56.888Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_9b059f91inhood (instance #1)
[2026-01-19T18:50:56.888Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-19T18:50:56.890Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-19T18:50:56.908Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
[2026-01-19T18:50:56.909Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T18:50:59.909Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T18:50:59.909Z] [BOT] 📍 [ROUTING] "Entry-Level AI Generalist" @ ORG_4ee447c5 Technologies AI
[2026-01-19T18:50:59.909Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T18:51:00.250Z] [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T18:51:00.250Z] [BOT] ❌ Industry post failed: Entry-Level AI Generalist
⚠️  Channel full error count: 1/5
[2026-01-19T18:51:01.886Z] [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-19T18:51:01.887Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T18:51:06.389Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T18:51:06.390Z] [BOT] ⏭️  Skipping duplicate: JID_6baaa66c (posted within 7 days)
[2026-01-19T18:51:06.390Z] [BOT] ⏭️  Skipping duplicate: JID_d3ea6c41-technologist_2122316-1 (posted within 7 days)
[2026-01-19T18:51:06.390Z] [BOT] ⏭️  Skipping duplicate: JID_eb0c8dc7-level_r43851 (posted within 7 days)
[2026-01-19T18:51:06.390Z] [BOT] ⏭️  Skipping duplicate: JID_08c64584-analyst_r019735-1 (posted within 7 days)
[2026-01-19T18:51:06.391Z] [BOT] ⏭️  Skipping duplicate: JID_26d96cde-gmed_careers-JID_581af661-engineer_jr105520 (posted within 7 days)
[2026-01-19T18:51:06.391Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ffec05f8-simulation_jr2026491418-1 (posted within 7 days)
[2026-01-19T18:51:06.391Z] [BOT] ⏭️  Skipping duplicate: JID_3f9de719 (posted within 7 days)
[2026-01-19T18:51:06.391Z] [BOT] ⏭️  Skipping duplicate: JID_9bce800c-jabil_careers-JID_49aa93d8-i_j2437182 (posted within 7 days)
[2026-01-19T18:51:06.391Z] [BOT] ⏭️  Skipping duplicate: JID_12a4596e (posted within 7 days)
[2026-01-19T18:51:06.511Z] [BOT] ✅ Loaded pending queue: 2823 total (2803 pending, 20 enriched, 0 posted)
[2026-01-19T18:51:06.701Z] [BOT] ✅ Saved pending queue: 2823 total (2803 pending, 11 enriched, 9 posted)
[2026-01-19T18:51:06.701Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T18:51:06.761Z] [BOT] 📂 Loaded 5115 existing routing entries
[2026-01-19T18:51:06.831Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5125
   Timestamp: 2026-01-19T18:51:06.810Z
[2026-01-19T18:51:06.832Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
   Successful: 17
[2026-01-19T18:51:06.832Z] [BOT] Failed: 3
   Skipped: 0
[2026-01-19T18:51:06.832Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T18:51:06.832Z] [BOT] Total posts: 17
   Channels used: 6
   Top channels:
     1. #💻・remote-usa: 5 posts
     2. #💻・tech-jobs: 5 posts
     3. #🗽・new-york: 3 posts
     4. #💲・sales-jobs: 2 posts
[2026-01-19T18:51:06.832Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-19T18:51:06.832Z] [BOT] [STATS] Channel stats saved
[2026-01-19T18:51:08.859Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer
- [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry-Level AI Generalist
- [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*