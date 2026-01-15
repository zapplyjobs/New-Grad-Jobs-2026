# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T18:29:31.463Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T18:28:39.832Z] ========================================
[2026-01-15T18:28:39.834Z] Discord Bot Execution Log
[2026-01-15T18:28:39.834Z] Environment: GitHub Actions
[2026-01-15T18:28:39.834Z] Node Version: v20.19.6
[2026-01-15T18:28:39.834Z] ========================================
[2026-01-15T18:28:39.834Z] Environment Variables Check:
[2026-01-15T18:28:39.834Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T18:28:39.834Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.834Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T18:28:39.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T18:28:39.835Z] 
Multi-Channel Configuration:
[2026-01-15T18:28:39.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T18:28:39.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T18:28:39.836Z] 
Data Files Check:
[2026-01-15T18:28:39.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31199 bytes)
[2026-01-15T18:28:39.843Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 945434 bytes)
[2026-01-15T18:28:39.843Z] 
========================================
[2026-01-15T18:28:39.843Z] Starting Enhanced Discord Bot...
[2026-01-15T18:28:39.843Z] ========================================
[2026-01-15T18:28:40.390Z] [BOT] ✅ Loaded V2 database: 1767 jobs
[2026-01-15T18:28:40.864Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T18:28:40.865Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T18:28:40.865Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T18:28:40.981Z] [BOT] ✅ Loaded pending queue: 2754 total (2734 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start at ByteDance
[2026-01-15T18:28:40.984Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T18:28:40.985Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T18:28:40.985Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T18:28:40.986Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T18:28:40.986Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T18:28:40.991Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T18:28:40.991Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
[2026-01-15T18:28:40.991Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T18:28:41.009Z] [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T18:28:41.140Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ByteDance',
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
[2026-01-15T18:28:41.140Z] [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T18:28:42.732Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ByteDance',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T18:28:42.732Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T18:28:44.233Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T18:28:44.384Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T18:28:44.384Z] [BOT] ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c
[2026-01-15T18:28:46.085Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T18:28:46.085Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T18:28:47.586Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Multiple Teams @ ORG_08c9a13c (instance #1)
[2026-01-15T18:28:47.586Z] [BOT] 💾 BEFORE ARCHIVING: 1768 jobs in database
[2026-01-15T18:28:47.588Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T18:28:47.593Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-15T18:28:47.593Z] [BOT] ✅ Archiving complete: 7 archived, 1761 active
[2026-01-15T18:28:47.606Z] [BOT] 💾 Saved posted_jobs.json: 1761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:28:47.607Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-15T18:28:47.607Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T18:28:47.778Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-15T18:28:49.410Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-15T18:28:49.411Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T18:28:50.912Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-15T18:28:50.912Z] [BOT] 💾 BEFORE ARCHIVING: 1762 jobs in database
[2026-01-15T18:28:50.913Z] [BOT] ✅ No jobs to archive (all 1762 jobs within 7-day window)
[2026-01-15T18:28:50.927Z] [BOT] 💾 Saved posted_jobs.json: 1762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:28:53.929Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T18:28:53.930Z] [BOT] 📍 [ROUTING] "Financial Data Analyst" @ ORG_23325912 Global
[2026-01-15T18:28:53.930Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T18:28:54.173Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_23325912 Global in #📈・JID_fb739488
[2026-01-15T18:28:54.173Z] [BOT] ✅ Industry: Financial Data Analyst @ ORG_23325912 Global
[2026-01-15T18:28:55.933Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_23325912 Global in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T18:28:57.434Z] [BOT] 💾 Marked as posted: Financial Data Analyst @ ORG_23325912 Global (instance #1)
[2026-01-15T18:28:57.435Z] [BOT] 💾 BEFORE ARCHIVING: 1763 jobs in database
[2026-01-15T18:28:57.436Z] [BOT] ✅ No jobs to archive (all 1763 jobs within 7-day window)
[2026-01-15T18:28:57.450Z] [BOT] 💾 Saved posted_jobs.json: 1763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:00.451Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T18:29:00.451Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:29:00.650Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T18:29:02.360Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T18:29:03.862Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-15T18:29:03.862Z] [BOT] 💾 BEFORE ARCHIVING: 1764 jobs in database
[2026-01-15T18:29:03.864Z] [BOT] ✅ No jobs to archive (all 1764 jobs within 7-day window)
[2026-01-15T18:29:03.879Z] [BOT] 💾 Saved posted_jobs.json: 1764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:03.879Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a856179e
[2026-01-15T18:29:03.880Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:29:04.104Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a856179e in #💻・tech-jobs
[2026-01-15T18:29:04.105Z] [BOT] ✅ Industry: Software Engineer @ ORG_a856179e
[2026-01-15T18:29:06.618Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a856179e in #🗽・new-york
[2026-01-15T18:29:06.618Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T18:29:08.117Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a856179e (instance #1)
[2026-01-15T18:29:08.118Z] [BOT] 💾 BEFORE ARCHIVING: 1765 jobs in database
[2026-01-15T18:29:08.119Z] [BOT] ✅ No jobs to archive (all 1765 jobs within 7-day window)
[2026-01-15T18:29:08.131Z] [BOT] 💾 Saved posted_jobs.json: 1765 active jobs
[2026-01-15T18:29:08.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:08.132Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_73114028
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:29:08.544Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_73114028 in #💻・tech-jobs
  ✅ Industry: GIS Technician @ ORG_73114028
[2026-01-15T18:29:10.356Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_73114028 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T18:29:11.858Z] [BOT] 💾 Marked as posted: GIS Technician @ ORG_73114028 (instance #1)
[2026-01-15T18:29:11.858Z] [BOT] 💾 BEFORE ARCHIVING: 1766 jobs in database
[2026-01-15T18:29:11.860Z] [BOT] ✅ No jobs to archive (all 1766 jobs within 7-day window)
[2026-01-15T18:29:11.871Z] [BOT] 💾 Saved posted_jobs.json: 1766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:11.872Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Full Stack" @ N1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:29:12.092Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Full Stack @ N1 in #💻・tech-jobs
  ✅ Industry: New Grad Software Engineer - Full Stack @ N1
[2026-01-15T18:29:13.774Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Full Stack @ N1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T18:29:15.274Z] [BOT] 💾 Marked as posted: New Grad Software Engineer - Full Stack @ N1 (instance #1)
[2026-01-15T18:29:15.274Z] [BOT] 💾 BEFORE ARCHIVING: 1767 jobs in database
[2026-01-15T18:29:15.276Z] [BOT] ✅ No jobs to archive (all 1767 jobs within 7-day window)
[2026-01-15T18:29:15.287Z] [BOT] 💾 Saved posted_jobs.json: 1767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:15.288Z] [BOT] 📍 [ROUTING] "Software Engineer – 2026 Grads - C++ or Python" @ ORG_ccdc7d45 River Trading
[2026-01-15T18:29:15.288Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:29:15.578Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading in #💻・tech-jobs
[2026-01-15T18:29:15.578Z] [BOT] ✅ Industry: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading
[2026-01-15T18:29:17.304Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading in #🗽・new-york
[2026-01-15T18:29:17.304Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T18:29:18.804Z] [BOT] 💾 Marked as posted: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading (instance #1)
[2026-01-15T18:29:18.804Z] [BOT] 💾 BEFORE ARCHIVING: 1768 jobs in database
[2026-01-15T18:29:18.806Z] [BOT] ✅ No jobs to archive (all 1768 jobs within 7-day window)
[2026-01-15T18:29:18.816Z] [BOT] 💾 Saved posted_jobs.json: 1768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:21.817Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-15T18:29:21.817Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Ultrafast Total X-ray Scattering" @ ORG_a867f63f National Laboratory
[2026-01-15T18:29:21.817Z] [BOT] Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-15T18:29:22.112Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
  ✅ Industry: Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory
[2026-01-15T18:29:23.716Z] [BOT ERROR] ❌ Error posting job Postdoctoral Appointee - Ultrafast Total X-ray Scattering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory',
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
[2026-01-15T18:29:23.716Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-15T18:29:25.216Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T18:29:25.216Z] [BOT] 💾 BEFORE ARCHIVING: 1769 jobs in database
[2026-01-15T18:29:25.218Z] [BOT] ✅ No jobs to archive (all 1769 jobs within 7-day window)
[2026-01-15T18:29:25.228Z] [BOT] 💾 Saved posted_jobs.json: 1769 active jobs
[2026-01-15T18:29:25.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T18:29:28.229Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5dbbf4c2-detail (posted within 7 days)
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_0a236e74 (posted within 7 days)
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160689 (posted within 7 days)
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_e61c32e9 (posted within 7 days)
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_0562e194 (posted within 7 days)
[2026-01-15T18:29:28.230Z] [BOT] ⏭️  Skipping duplicate: JID_d92a548b-cx_1-job-19551 (posted within 7 days)
[2026-01-15T18:29:28.231Z] [BOT] ⏭️  Skipping duplicate: JID_d652e561 (posted within 7 days)
[2026-01-15T18:29:28.231Z] [BOT] ⏭️  Skipping duplicate: JID_c92e24a8 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_67027ea6-scattering_421245 (posted within 7 days)
[2026-01-15T18:29:28.348Z] [BOT] ✅ Loaded pending queue: 2754 total (2734 pending, 20 enriched, 0 posted)
[2026-01-15T18:29:28.530Z] [BOT] ✅ Saved pending queue: 2754 total (2734 pending, 11 enriched, 9 posted)
[2026-01-15T18:29:28.530Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T18:29:28.588Z] [BOT] 📂 Loaded 3935 existing routing entries
[2026-01-15T18:29:28.652Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3945
   Timestamp: 2026-01-15T18:29:28.636Z
[2026-01-15T18:29:28.653Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T18:29:28.653Z] [BOT] Total attempts: 20
   Successful: 17
   Failed: 3
   Skipped: 0
[2026-01-15T18:29:28.654Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T18:29:28.654Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・new-york: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-15T18:29:28.654Z] [BOT] [STATS] Channel stats saved
[2026-01-15T18:29:30.679Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Appointee - Ultrafast Total X-ray Scattering: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*