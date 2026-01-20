# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T00:28:06.273Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T00:27:16.072Z] ========================================
[2026-01-20T00:27:16.074Z] Discord Bot Execution Log
[2026-01-20T00:27:16.074Z] Environment: GitHub Actions
[2026-01-20T00:27:16.075Z] Node Version: v20.19.6
[2026-01-20T00:27:16.075Z] ========================================
[2026-01-20T00:27:16.075Z] Environment Variables Check:
[2026-01-20T00:27:16.075Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T00:27:16.075Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.075Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T00:27:16.075Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T00:27:16.075Z] 
Multi-Channel Configuration:
[2026-01-20T00:27:16.075Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.075Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T00:27:16.076Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T00:27:16.076Z] 
Data Files Check:
[2026-01-20T00:27:16.077Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56470 bytes)
[2026-01-20T00:27:16.087Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1534577 bytes)
[2026-01-20T00:27:16.087Z] 
========================================
[2026-01-20T00:27:16.087Z] Starting Enhanced Discord Bot...
[2026-01-20T00:27:16.087Z] ========================================
[2026-01-20T00:27:16.619Z] [BOT] ✅ Loaded V2 database: 2795 jobs
[2026-01-20T00:27:17.723Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T00:27:17.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T00:27:17.724Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T00:27:17.842Z] [BOT] ✅ Loaded pending queue: 2806 total (2786 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Leadership program new grad Engineer - Parts at Westinghouse Electric Company
[2026-01-20T00:27:17.845Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T00:27:17.846Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T00:27:17.846Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T00:27:17.847Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T00:27:17.847Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T00:27:17.852Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-20T00:27:17.853Z] [BOT] 📍 [ROUTING] "Leadership program new grad Engineer - Parts" @ ORG_41a6741einghouse Electric Company
[2026-01-20T00:27:17.853Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:17.857Z] [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T00:27:18.241Z] [BOT] ✅ Created forum post: 🏢 Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company
[2026-01-20T00:27:19.943Z] [BOT] ✅ Created forum post: 🏢 Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
[2026-01-20T00:27:19.944Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-20T00:27:21.445Z] [BOT] 💾 Marked as posted: Leadership program new grad Engineer - Parts @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-20T00:27:21.445Z] [BOT] 💾 BEFORE ARCHIVING: 2796 jobs in database
[2026-01-20T00:27:21.447Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T00:27:21.452Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-20T00:27:21.452Z] [BOT] ✅ Archiving complete: 12 archived, 2784 active
[2026-01-20T00:27:21.467Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
[2026-01-20T00:27:21.468Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Ophthalmic Technician 1" @ ORG_8dfd9000 Partners
[2026-01-20T00:27:21.468Z] [BOT] Category: TECH (default)
[2026-01-20T00:27:21.468Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:21.740Z] [BOT] ✅ Created forum post: 🏢 Ophthalmic Technician 1 @ ORG_8dfd9000 Partners in #💻・tech-jobs
[2026-01-20T00:27:21.740Z] [BOT] ✅ Industry: Ophthalmic Technician 1 @ ORG_8dfd9000 Partners
[2026-01-20T00:27:23.487Z] [BOT] ✅ Created forum post: 🏢 Ophthalmic Technician 1 @ ORG_8dfd9000 Partners in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T00:27:24.989Z] [BOT] 💾 Marked as posted: Ophthalmic Technician 1 @ ORG_8dfd9000 Partners (instance #1)
[2026-01-20T00:27:24.989Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T00:27:24.991Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T00:27:25.007Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:25.007Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Video Agent" @ ORG_89070b6e
[2026-01-20T00:27:25.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:25.381Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Video Agent @ ORG_89070b6e in #💻・tech-jobs
  ✅ Industry: Software Engineer - AI Video Agent @ ORG_89070b6e
[2026-01-20T00:27:27.075Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Video Agent @ ORG_89070b6e in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-20T00:27:28.576Z] [BOT] 💾 Marked as posted: Software Engineer - AI Video Agent @ ORG_89070b6e (instance #1)
[2026-01-20T00:27:28.576Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-20T00:27:28.578Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-20T00:27:28.598Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:28.598Z] [BOT] 📍 [ROUTING] "Junior IT Software Developer" @ ORG_32d13e4c
[2026-01-20T00:27:28.599Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:29.043Z] [BOT] ✅ Created forum post: 🏢 Junior IT Software Developer @ ORG_32d13e4c in #💻・tech-jobs
[2026-01-20T00:27:29.043Z] [BOT] ✅ Industry: Junior IT Software Developer @ ORG_32d13e4c
[2026-01-20T00:27:30.839Z] [BOT] ✅ Created forum post: 🏢 Junior IT Software Developer @ ORG_32d13e4c in #💻・remote-usa
[2026-01-20T00:27:30.840Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-20T00:27:32.341Z] [BOT] 💾 Marked as posted: Junior IT Software Developer @ ORG_32d13e4c (instance #1)
[2026-01-20T00:27:32.341Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-20T00:27:32.343Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-20T00:27:32.361Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:32.362Z] [BOT] 📍 [ROUTING] "Digital Marketing Analyst 1" @ ORG_83f14822
[2026-01-20T00:27:32.362Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:32.598Z] [BOT] ✅ Created forum post: 🏢 Digital Marketing Analyst 1 @ ORG_83f14822 in #💻・tech-jobs
[2026-01-20T00:27:32.599Z] [BOT] ✅ Industry: Digital Marketing Analyst 1 @ ORG_83f14822
[2026-01-20T00:27:34.371Z] [BOT] ✅ Created forum post: 🏢 Digital Marketing Analyst 1 @ ORG_83f14822 in #💻・remote-usa
[2026-01-20T00:27:34.371Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-20T00:27:35.873Z] [BOT] 💾 Marked as posted: Digital Marketing Analyst 1 @ ORG_83f14822 (instance #1)
[2026-01-20T00:27:35.873Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-20T00:27:35.875Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-20T00:27:35.892Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:35.892Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Foundation Model - Video Generation" @ ORG_08c9a13c
   Category: TECH (default)
[2026-01-20T00:27:35.893Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:36.299Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-20T00:27:36.299Z] [BOT] ✅ Industry: Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c
[2026-01-20T00:27:38.162Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-20T00:27:38.163Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-20T00:27:39.664Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c (instance #1)
[2026-01-20T00:27:39.664Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-20T00:27:39.666Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-20T00:27:39.683Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:39.684Z] [BOT] 📍 [ROUTING] "Engineering Associate - Java API" @ ORG_332e04b7 Fargo
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T00:27:39.684Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-20T00:27:39.970Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Java API @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Java API @ ORG_332e04b7 Fargo
[2026-01-20T00:27:41.698Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Java API @ ORG_332e04b7 Fargo in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-20T00:27:43.200Z] [BOT] 💾 Marked as posted: Engineering Associate - Java API @ ORG_332e04b7 Fargo (instance #1)
[2026-01-20T00:27:43.200Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-20T00:27:43.202Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-20T00:27:43.219Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:46.220Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-20T00:27:46.220Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-20T00:27:46.863Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #🩺・healthcare-jobs
  ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-20T00:27:48.516Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst @ Vantor',
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
[2026-01-20T00:27:48.517Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-20T00:27:50.018Z] [BOT] 💾 Marked as posted: Geospatial Analyst @ ORG_eae683eb (instance #1)
[2026-01-20T00:27:50.018Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-20T00:27:50.020Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-20T00:27:50.038Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T00:27:53.040Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-20T00:27:53.040Z] [BOT] 📍 [ROUTING] "Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States" @ ORG_3cfbdbc3
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-20T00:27:53.040Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T00:27:53.227Z] [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ Uber',
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
[2026-01-20T00:27:53.227Z] [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
⚠️  Channel full error count: 1/5
[2026-01-20T00:27:54.866Z] [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ Uber',
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
[2026-01-20T00:27:54.866Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-20T00:27:56.367Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Safety Processing" @ discord
   Category: AI (matched: "AI/ML")
[2026-01-20T00:27:56.368Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T00:27:56.522Z] [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Software Engineer - Safety Processing @ discord',
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
[2026-01-20T00:27:56.523Z] [BOT] ❌ Industry post failed: Senior Software Engineer - Safety Processing
⚠️  Channel full error count: 2/5
[2026-01-20T00:27:58.167Z] [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Software Engineer - Safety Processing @ discord',
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
[2026-01-20T00:27:58.168Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-20T00:28:02.670Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-20T00:28:02.670Z] [BOT] ⏭️  Skipping duplicate: JID_f7dd6384 (posted within 7 days)
[2026-01-20T00:28:02.670Z] [BOT] ⏭️  Skipping duplicate: JID_d8a8dbe0 (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_4b2b9d6a (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_5f6db3d5 (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_45d1edd7-detail (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
[2026-01-20T00:28:02.671Z] [BOT] ⏭️  Skipping duplicate: JID_87c776fb-api_r-515563 (posted within 7 days)
[2026-01-20T00:28:02.789Z] [BOT] ✅ Loaded pending queue: 2806 total (2786 pending, 20 enriched, 0 posted)
[2026-01-20T00:28:02.978Z] [BOT] ✅ Saved pending queue: 2806 total (2786 pending, 12 enriched, 8 posted)
[2026-01-20T00:28:02.979Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T00:28:03.042Z] [BOT] 📂 Loaded 5215 existing routing entries
[2026-01-20T00:28:03.115Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5225
   Timestamp: 2026-01-20T00:28:03.093Z
[2026-01-20T00:28:03.116Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 20
   Successful: 15
[2026-01-20T00:28:03.116Z] [BOT] Failed: 5
   Skipped: 0
[2026-01-20T00:28:03.116Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T00:28:03.116Z] [BOT] Total posts: 15
   Channels used: 4
   Top channels:
[2026-01-20T00:28:03.116Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 5 posts
     3. #🌉・san-francisco: 2 posts
     4. #🩺・healthcare-jobs: 1 posts
[2026-01-20T00:28:03.116Z] [BOT] [STATS] Channel stats saved
[2026-01-20T00:28:05.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2374) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States
- [BOT ERROR] ❌ Error posting job Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Software Engineer - Safety Processing
- [BOT ERROR] ❌ Error posting job Senior Software Engineer - Safety Processing: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*