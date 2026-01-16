# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T21:27:51.106Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T21:27:06.087Z] ========================================
[2026-01-16T21:27:06.089Z] Discord Bot Execution Log
[2026-01-16T21:27:06.089Z] Environment: GitHub Actions
[2026-01-16T21:27:06.089Z] Node Version: v20.19.6
[2026-01-16T21:27:06.089Z] ========================================
[2026-01-16T21:27:06.089Z] Environment Variables Check:
[2026-01-16T21:27:06.089Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T21:27:06.090Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T21:27:06.090Z] 
Multi-Channel Configuration:
[2026-01-16T21:27:06.090Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.090Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T21:27:06.091Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T21:27:06.091Z] 
Data Files Check:
[2026-01-16T21:27:06.092Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114736 bytes)
[2026-01-16T21:27:06.100Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1148263 bytes)
[2026-01-16T21:27:06.100Z] 
========================================
[2026-01-16T21:27:06.101Z] Starting Enhanced Discord Bot...
[2026-01-16T21:27:06.101Z] ========================================
[2026-01-16T21:27:06.648Z] [BOT] ✅ Loaded V2 database: 2117 jobs
[2026-01-16T21:27:07.092Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T21:27:07.093Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T21:27:07.093Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T21:27:07.210Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Researcher at Citadel Securities
[2026-01-16T21:27:07.213Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T21:27:07.213Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T21:27:07.213Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T21:27:07.214Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T21:27:07.214Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-16T21:27:07.215Z] [BOT] - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
   - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T21:27:07.218Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T21:27:07.220Z] [BOT] 📍 [ROUTING] "Machine Learning Researcher" @ ORG_e5deb41a Securities
[2026-01-16T21:27:07.220Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:27:07.237Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T21:27:07.343Z] [BOT ERROR] ❌ Error posting job Machine Learning Researcher: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Researcher @ ORG_e5deb41a Securities',
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
[2026-01-16T21:27:07.343Z] [BOT] ❌ Industry post failed: Machine Learning Researcher
⚠️  Channel full error count: 1/5
[2026-01-16T21:27:08.940Z] [BOT ERROR] ❌ Error posting job Machine Learning Researcher: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Researcher @ ORG_e5deb41a Securities',
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
[2026-01-16T21:27:08.940Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T21:27:10.441Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:27:10.441Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:27:10.741Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-16T21:27:10.741Z] [BOT] ✅ Industry: Software Engineer in ML Systems Graduate @ ORG_08c9a13c
[2026-01-16T21:27:12.784Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-16T21:27:12.785Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T21:27:14.286Z] [BOT] 💾 Marked as posted: Software Engineer in ML Systems Graduate @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:14.286Z] [BOT] 💾 BEFORE ARCHIVING: 2118 jobs in database
[2026-01-16T21:27:14.288Z] [BOT] ✅ No jobs to archive (all 2118 jobs within 7-day window)
[2026-01-16T21:27:14.301Z] [BOT] 💾 Saved posted_jobs.json: 2118 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:14.302Z] [BOT] 📍 [ROUTING] "Senior Staff Machine Learning Engineer" @ spotify
[2026-01-16T21:27:14.302Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:27:14.302Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T21:27:14.482Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Staff Machine Learning Engineer @ spotify
[2026-01-16T21:27:16.160Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer @ spotify in #🗽・new-york
[2026-01-16T21:27:16.160Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T21:27:17.661Z] [BOT] 💾 Marked as posted: Senior Staff Machine Learning Engineer @ spotify (instance #1)
[2026-01-16T21:27:17.661Z] [BOT] 💾 BEFORE ARCHIVING: 2119 jobs in database
[2026-01-16T21:27:17.663Z] [BOT] ✅ No jobs to archive (all 2119 jobs within 7-day window)
[2026-01-16T21:27:17.681Z] [BOT] 💾 Saved posted_jobs.json: 2119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:20.682Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T21:27:20.683Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Video-on-Demand Algorithm)" @ ORG_1bb6fcfb
[2026-01-16T21:27:20.683Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:20.875Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb
[2026-01-16T21:27:22.657Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:27:24.158Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Video-on-Demand Algorithm) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T21:27:24.159Z] [BOT] 💾 BEFORE ARCHIVING: 2120 jobs in database
[2026-01-16T21:27:24.160Z] [BOT] ✅ No jobs to archive (all 2120 jobs within 7-day window)
[2026-01-16T21:27:24.175Z] [BOT] 💾 Saved posted_jobs.json: 2120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:24.175Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Arch - E-commerce)" @ ORG_1bb6fcfb
[2026-01-16T21:27:24.175Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:24.555Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb
[2026-01-16T21:27:26.225Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:27:27.727Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Data Arch - E-commerce) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T21:27:27.727Z] [BOT] 💾 BEFORE ARCHIVING: 2121 jobs in database
[2026-01-16T21:27:27.728Z] [BOT] ✅ No jobs to archive (all 2121 jobs within 7-day window)
[2026-01-16T21:27:27.743Z] [BOT] 💾 Saved posted_jobs.json: 2121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:27.744Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS" @ ORG_08c9a13c
[2026-01-16T21:27:27.744Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:27.997Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:27:27.997Z] [BOT] ✅ Industry: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c
[2026-01-16T21:27:29.667Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #🌧️・seattle
[2026-01-16T21:27:29.667Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T21:27:31.169Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:31.169Z] [BOT] 💾 BEFORE ARCHIVING: 2122 jobs in database
[2026-01-16T21:27:31.171Z] [BOT] ✅ No jobs to archive (all 2122 jobs within 7-day window)
[2026-01-16T21:27:31.185Z] [BOT] 💾 Saved posted_jobs.json: 2122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:31.185Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:31.185Z] [BOT] 💾 BEFORE ARCHIVING: 2123 jobs in database
[2026-01-16T21:27:31.187Z] [BOT] ✅ No jobs to archive (all 2123 jobs within 7-day window)
[2026-01-16T21:27:31.200Z] [BOT] 💾 Saved posted_jobs.json: 2123 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:31.200Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Cloud Native Infrastructure" @ ORG_08c9a13c
[2026-01-16T21:27:31.200Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:31.505Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:27:31.505Z] [BOT] ✅ Industry: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c
[2026-01-16T21:27:33.202Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #🌧️・seattle
[2026-01-16T21:27:33.202Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T21:27:34.703Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:34.704Z] [BOT] 💾 BEFORE ARCHIVING: 2124 jobs in database
[2026-01-16T21:27:34.705Z] [BOT] ✅ No jobs to archive (all 2124 jobs within 7-day window)
[2026-01-16T21:27:34.719Z] [BOT] 💾 Saved posted_jobs.json: 2124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:34.719Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:34.719Z] [BOT] 💾 BEFORE ARCHIVING: 2125 jobs in database
[2026-01-16T21:27:34.720Z] [BOT] ✅ No jobs to archive (all 2125 jobs within 7-day window)
[2026-01-16T21:27:34.734Z] [BOT] 💾 Saved posted_jobs.json: 2125 active jobs
[2026-01-16T21:27:34.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:34.736Z] [BOT] 📍 [ROUTING] "Software Engineer, New Grad - Infrastructure" @ ORG_f56b7436
[2026-01-16T21:27:34.736Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:34.999Z] [BOT] ✅ Created forum post: 👁️ Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-01-16T21:27:35.000Z] [BOT] ✅ Industry: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436
[2026-01-16T21:27:36.701Z] [BOT] ✅ Created forum post: 👁️ Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 in #🌉・san-francisco
[2026-01-16T21:27:36.701Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T21:27:38.202Z] [BOT] 💾 Marked as posted: Software Engineer, New Grad - Infrastructure @ ORG_f56b7436 (instance #1)
[2026-01-16T21:27:38.202Z] [BOT] 💾 BEFORE ARCHIVING: 2126 jobs in database
[2026-01-16T21:27:38.204Z] [BOT] ✅ No jobs to archive (all 2126 jobs within 7-day window)
[2026-01-16T21:27:38.218Z] [BOT] 💾 Saved posted_jobs.json: 2126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:38.218Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:38.417Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c
[2026-01-16T21:27:40.070Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:27:41.572Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-16T21:27:41.572Z] [BOT] 💾 BEFORE ARCHIVING: 2127 jobs in database
[2026-01-16T21:27:41.573Z] [BOT] ✅ No jobs to archive (all 2127 jobs within 7-day window)
[2026-01-16T21:27:41.588Z] [BOT] 💾 Saved posted_jobs.json: 2127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:41.589Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Production Infrastructure" @ ORG_f56b7436
[2026-01-16T21:27:41.589Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:27:41.785Z] [BOT] ✅ Created forum post: 👁️ Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436
[2026-01-16T21:27:43.539Z] [BOT] ✅ Created forum post: 👁️ Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T21:27:45.040Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (instance #1)
[2026-01-16T21:27:45.041Z] [BOT] 💾 BEFORE ARCHIVING: 2128 jobs in database
[2026-01-16T21:27:45.042Z] [BOT] ✅ No jobs to archive (all 2128 jobs within 7-day window)
[2026-01-16T21:27:45.055Z] [BOT] 💾 Saved posted_jobs.json: 2128 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:27:48.056Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ca8884d9 (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8a2bed2e (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_5d75fef3 (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_59828f46-detail (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd5b89ca-detail (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_217519ad (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_74fc3db8-detail (posted within 7 days)
[2026-01-16T21:27:48.057Z] [BOT] ⏭️  Skipping duplicate: JID_d47ecc0c (posted within 7 days)
[2026-01-16T21:27:48.058Z] [BOT] ⏭️  Skipping duplicate: JID_fc6276fd (posted within 7 days)
[2026-01-16T21:27:48.184Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[2026-01-16T21:27:48.346Z] [BOT] ✅ Saved pending queue: 2782 total (2762 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-16T21:27:48.346Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T21:27:48.405Z] [BOT] 📂 Loaded 4355 existing routing entries
[2026-01-16T21:27:48.471Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4365
   Timestamp: 2026-01-16T21:27:48.453Z
[2026-01-16T21:27:48.472Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T21:27:48.472Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T21:27:48.472Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T21:27:48.472Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 5 posts
[2026-01-16T21:27:48.473Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-16T21:27:50.498Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Researcher: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Researcher
- [BOT ERROR] ❌ Error posting job Machine Learning Researcher: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*