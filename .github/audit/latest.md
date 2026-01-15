# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T23:07:54.934Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T23:07:05.547Z] ========================================
[2026-01-15T23:07:05.549Z] Discord Bot Execution Log
[2026-01-15T23:07:05.549Z] Environment: GitHub Actions
[2026-01-15T23:07:05.549Z] Node Version: v20.19.6
[2026-01-15T23:07:05.549Z] ========================================
[2026-01-15T23:07:05.549Z] Environment Variables Check:
[2026-01-15T23:07:05.549Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T23:07:05.550Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T23:07:05.550Z] 
Multi-Channel Configuration:
[2026-01-15T23:07:05.550Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.550Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.551Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T23:07:05.551Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T23:07:05.551Z] 
Data Files Check:
[2026-01-15T23:07:05.551Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30011 bytes)
[2026-01-15T23:07:05.559Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1001364 bytes)
[2026-01-15T23:07:05.559Z] 
========================================
[2026-01-15T23:07:05.559Z] Starting Enhanced Discord Bot...
[2026-01-15T23:07:05.559Z] ========================================
[2026-01-15T23:07:06.077Z] [BOT] ✅ Loaded V2 database: 1862 jobs
[2026-01-15T23:07:06.789Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T23:07:06.790Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T23:07:06.790Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T23:07:06.905Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Junior Software QA Engineer at Logitech
[2026-01-15T23:07:06.908Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T23:07:06.908Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T23:07:06.908Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T23:07:06.909Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T23:07:06.909Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-15T23:07:06.909Z] [BOT] - Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners: nyc, colorado
   - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T23:07:06.910Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T23:07:06.913Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T23:07:06.914Z] [BOT] 📍 [ROUTING] "Junior Software QA Engineer" @ ORG_8697f6f3
[2026-01-15T23:07:06.914Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:06.931Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T23:07:07.062Z] [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software QA Engineer @ Logitech',
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
[2026-01-15T23:07:07.062Z] [BOT] ❌ Industry post failed: Junior Software QA Engineer
⚠️  Channel full error count: 1/5
[2026-01-15T23:07:08.784Z] [BOT] ✅ Created forum post: 🏢 Junior Software QA Engineer @ ORG_8697f6f3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T23:07:10.284Z] [BOT] 💾 Marked as posted: Junior Software QA Engineer @ ORG_8697f6f3 (instance #1)
[2026-01-15T23:07:10.285Z] [BOT] 💾 BEFORE ARCHIVING: 1863 jobs in database
[2026-01-15T23:07:10.287Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T23:07:10.291Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T23:07:10.292Z] [BOT] ✅ Archiving complete: 2 archived, 1861 active
[2026-01-15T23:07:10.306Z] [BOT] 💾 Saved posted_jobs.json: 1861 active jobs
[2026-01-15T23:07:10.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:10.307Z] [BOT] 📍 [ROUTING] "Graduate Environmental Engineer" @ ORG_65eedb45
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:10.581Z] [BOT] ✅ Created forum post: 🏢 Graduate Environmental Engineer @ ORG_65eedb45 in #💻・tech-jobs
[2026-01-15T23:07:10.581Z] [BOT] ✅ Industry: Graduate Environmental Engineer @ ORG_65eedb45
[2026-01-15T23:07:12.752Z] [BOT] ✅ Created forum post: 🏢 Graduate Environmental Engineer @ ORG_65eedb45 in #💻・remote-usa
[2026-01-15T23:07:12.752Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T23:07:14.252Z] [BOT] 💾 Marked as posted: Graduate Environmental Engineer @ ORG_65eedb45 (instance #1)
[2026-01-15T23:07:14.253Z] [BOT] 💾 BEFORE ARCHIVING: 1862 jobs in database
[2026-01-15T23:07:14.254Z] [BOT] ✅ No jobs to archive (all 1862 jobs within 7-day window)
[2026-01-15T23:07:14.265Z] [BOT] 💾 Saved posted_jobs.json: 1862 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:14.265Z] [BOT] 📍 [ROUTING] "Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:14.471Z] [BOT] ✅ Created forum post: 🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c
[2026-01-15T23:07:16.160Z] [BOT] ✅ Created forum post: 🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T23:07:17.661Z] [BOT] 💾 Marked as posted: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c (instance #1)
[2026-01-15T23:07:17.661Z] [BOT] 💾 BEFORE ARCHIVING: 1863 jobs in database
[2026-01-15T23:07:17.663Z] [BOT] ✅ No jobs to archive (all 1863 jobs within 7-day window)
[2026-01-15T23:07:17.677Z] [BOT] 💾 Saved posted_jobs.json: 1863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:17.678Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_74f80925 & Tango
[2026-01-15T23:07:17.678Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:17.874Z] [BOT] ✅ Created forum post: 🏢 Jr. Software Engineer @ ORG_74f80925 & Tango in #💻・tech-jobs
  ✅ Industry: Jr. Software Engineer @ ORG_74f80925 & Tango
[2026-01-15T23:07:19.598Z] [BOT] ✅ Created forum post: 🏢 Jr. Software Engineer @ ORG_74f80925 & Tango in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T23:07:21.099Z] [BOT] 💾 Marked as posted: Jr. Software Engineer @ ORG_74f80925 & Tango (instance #1)
[2026-01-15T23:07:21.099Z] [BOT] 💾 BEFORE ARCHIVING: 1864 jobs in database
[2026-01-15T23:07:21.100Z] [BOT] ✅ No jobs to archive (all 1864 jobs within 7-day window)
[2026-01-15T23:07:21.113Z] [BOT] 💾 Saved posted_jobs.json: 1864 active jobs
[2026-01-15T23:07:21.113Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:21.113Z] [BOT] 📍 [ROUTING] "Demo Engineer, Software Development" @ ORG_5e875bc9
[2026-01-15T23:07:21.114Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:21.300Z] [BOT] ✅ Created forum post: 🏢 Demo Engineer, Software Development @ ORG_5e875bc9 in #💻・tech-jobs
  ✅ Industry: Demo Engineer, Software Development @ ORG_5e875bc9
[2026-01-15T23:07:23.145Z] [BOT] ✅ Created forum post: 🏢 Demo Engineer, Software Development @ ORG_5e875bc9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T23:07:24.645Z] [BOT] 💾 Marked as posted: Demo Engineer, Software Development @ ORG_5e875bc9 (instance #1)
[2026-01-15T23:07:24.646Z] [BOT] 💾 BEFORE ARCHIVING: 1865 jobs in database
[2026-01-15T23:07:24.647Z] [BOT] ✅ No jobs to archive (all 1865 jobs within 7-day window)
[2026-01-15T23:07:24.660Z] [BOT] 💾 Saved posted_jobs.json: 1865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:24.660Z] [BOT] 📍 [ROUTING] "Java Developer" @ 360 IT Professionals
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:07:25.045Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Java Developer @ 360 IT Professionals
[2026-01-15T23:07:26.736Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ 360 IT Professionals in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T23:07:28.237Z] [BOT] 💾 Marked as posted: Java Developer @ 360 IT Professionals (instance #1)
[2026-01-15T23:07:28.238Z] [BOT] 💾 BEFORE ARCHIVING: 1866 jobs in database
[2026-01-15T23:07:28.239Z] [BOT] ✅ No jobs to archive (all 1866 jobs within 7-day window)
[2026-01-15T23:07:28.251Z] [BOT] 💾 Saved posted_jobs.json: 1866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:31.252Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T23:07:31.252Z] [BOT] 📍 [ROUTING] "Marketing Science Analyst - February 16th - 2026 Start" @ ORG_a7dddf79 Partners
[2026-01-15T23:07:31.252Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T23:07:31.674Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #📣・marketing-jobs
  ✅ Industry: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners
[2026-01-15T23:07:33.499Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #🗽・new-york
[2026-01-15T23:07:33.499Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T23:07:35.000Z] [BOT] 💾 Marked as posted: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners (instance #1)
[2026-01-15T23:07:35.000Z] [BOT] 💾 BEFORE ARCHIVING: 1867 jobs in database
[2026-01-15T23:07:35.002Z] [BOT] ✅ No jobs to archive (all 1867 jobs within 7-day window)
[2026-01-15T23:07:35.014Z] [BOT] 💾 Saved posted_jobs.json: 1867 active jobs
[2026-01-15T23:07:35.015Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:35.015Z] [BOT] 💾 Marked as posted: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners (instance #1)
[2026-01-15T23:07:35.015Z] [BOT] 💾 BEFORE ARCHIVING: 1868 jobs in database
[2026-01-15T23:07:35.016Z] [BOT] ✅ No jobs to archive (all 1868 jobs within 7-day window)
[2026-01-15T23:07:35.032Z] [BOT] 💾 Saved posted_jobs.json: 1868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:38.033Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T23:07:38.033Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_20c5cb2f
[2026-01-15T23:07:38.033Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T23:07:38.240Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_20c5cb2f in #🤖・ai-jobs
  ✅ Industry: Associate Data Scientist @ ORG_20c5cb2f
[2026-01-15T23:07:40.026Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_20c5cb2f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T23:07:41.527Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_20c5cb2f (instance #1)
[2026-01-15T23:07:41.527Z] [BOT] 💾 BEFORE ARCHIVING: 1869 jobs in database
[2026-01-15T23:07:41.529Z] [BOT] ✅ No jobs to archive (all 1869 jobs within 7-day window)
[2026-01-15T23:07:41.543Z] [BOT] 💾 Saved posted_jobs.json: 1869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:41.544Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads" @ ORG_d0ca1d93 Systems
[2026-01-15T23:07:41.544Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:07:41.544Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:07:41.758Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems
[2026-01-15T23:07:43.388Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer – Seeking 2025 & 2026 Grads: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems',
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
[2026-01-15T23:07:43.388Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T23:07:44.889Z] [BOT] 💾 Marked as posted: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T23:07:44.890Z] [BOT] 💾 BEFORE ARCHIVING: 1870 jobs in database
[2026-01-15T23:07:44.891Z] [BOT] ✅ No jobs to archive (all 1870 jobs within 7-day window)
[2026-01-15T23:07:44.904Z] [BOT] 💾 Saved posted_jobs.json: 1870 active jobs
[2026-01-15T23:07:44.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:44.904Z] [BOT] 💾 Marked as posted: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems (instance #1)
💾 BEFORE ARCHIVING: 1871 jobs in database
[2026-01-15T23:07:44.906Z] [BOT] ✅ No jobs to archive (all 1871 jobs within 7-day window)
[2026-01-15T23:07:44.917Z] [BOT] 💾 Saved posted_jobs.json: 1871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:07:44.918Z] [BOT] 📍 [ROUTING] "Marketing Analytics - Data Analyst - Adp" @ ORG_d0ca1d93 Systems
[2026-01-15T23:07:44.918Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T23:07:45.123Z] [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems',
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
[2026-01-15T23:07:45.123Z] [BOT] ❌ Industry post failed: Marketing Analytics - Data Analyst - Adp
⚠️  Channel full error count: 1/5
[2026-01-15T23:07:46.754Z] [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems',
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
[2026-01-15T23:07:46.754Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-15T23:07:51.257Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T23:07:51.258Z] [BOT] ⏭️  Skipping duplicate: JID_2f5acd9a-engineer_144324 (posted within 7 days)
[2026-01-15T23:07:51.258Z] [BOT] ⏭️  Skipping duplicate: JID_80af21aa (posted within 7 days)
[2026-01-15T23:07:51.258Z] [BOT] ⏭️  Skipping duplicate: JID_3701653c (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_4f8514a9-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_6d29dced (posted within 7 days)
[2026-01-15T23:07:51.258Z] [BOT] ⏭️  Skipping duplicate: JID_fc37d849-development_a6126bad-JID_12861abc (posted within 7 days)
[2026-01-15T23:07:51.259Z] [BOT] ⏭️  Skipping duplicate: JID_13dcb04f (posted within 7 days)
[2026-01-15T23:07:51.259Z] [BOT] ⏭️  Skipping duplicate: JID_ea1316a0 (posted within 7 days)
[2026-01-15T23:07:51.259Z] [BOT] ⏭️  Skipping duplicate: JID_4feb6c11 (posted within 7 days)
[2026-01-15T23:07:51.377Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[2026-01-15T23:07:51.535Z] [BOT] ✅ Saved pending queue: 2750 total (2730 pending, 11 enriched, 9 posted)
[2026-01-15T23:07:51.535Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T23:07:51.591Z] [BOT] 📂 Loaded 4055 existing routing entries
[2026-01-15T23:07:51.657Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-15T23:07:51.657Z] [BOT] New entries: 10
   Total entries: 4065
   Timestamp: 2026-01-15T23:07:51.639Z
[2026-01-15T23:07:51.658Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T23:07:51.658Z] [BOT] Total attempts: 20
   Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-15T23:07:51.658Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T23:07:51.658Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-15T23:07:51.658Z] [BOT] 2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-15T23:07:51.659Z] [BOT] [STATS] Channel stats saved
[2026-01-15T23:07:53.685Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software QA Engineer
- [BOT ERROR] ❌ Error posting job Associate Software Engineer – Seeking 2025 & 2026 Grads: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Marketing Analytics - Data Analyst - Adp
- [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*