# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T21:54:46.336Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T21:53:51.603Z] ========================================
[2026-01-17T21:53:51.605Z] Discord Bot Execution Log
[2026-01-17T21:53:51.605Z] Environment: GitHub Actions
[2026-01-17T21:53:51.605Z] Node Version: v20.19.6
[2026-01-17T21:53:51.605Z] ========================================
[2026-01-17T21:53:51.605Z] Environment Variables Check:
[2026-01-17T21:53:51.605Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T21:53:51.605Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.605Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T21:53:51.605Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T21:53:51.606Z] 
Multi-Channel Configuration:
[2026-01-17T21:53:51.606Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T21:53:51.606Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T21:53:51.606Z] 
Data Files Check:
[2026-01-17T21:53:51.607Z] .github/data/new_jobs.json: ✅ Exists (10 items, 73033 bytes)
[2026-01-17T21:53:51.617Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1332114 bytes)
[2026-01-17T21:53:51.617Z] 
========================================
[2026-01-17T21:53:51.617Z] Starting Enhanced Discord Bot...
[2026-01-17T21:53:51.617Z] ========================================
[2026-01-17T21:53:52.078Z] [BOT] ✅ Loaded V2 database: 2462 jobs
[2026-01-17T21:53:52.551Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T21:53:52.552Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T21:53:52.552Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T21:53:52.707Z] [BOT] ✅ Loaded pending queue: 2895 total (2875 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst - Regulatory Data and Systems at Bank of Montreal
[2026-01-17T21:53:52.711Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T21:53:52.711Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T21:53:52.711Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T21:53:52.712Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T21:53:52.712Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T21:53:52.712Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T21:53:52.717Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T21:53:52.717Z] [BOT] 📍 [ROUTING] "Data Analyst - Regulatory Data and Systems" @ ORG_676c471b of Montreal
[2026-01-17T21:53:52.717Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T21:53:52.722Z] [BOT ERROR] (node:3627) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T21:53:53.079Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal in #📈・JID_fb739488
[2026-01-17T21:53:53.079Z] [BOT] ✅ Industry: Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal
[2026-01-17T21:53:54.755Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-17T21:53:56.255Z] [BOT] 💾 Marked as posted: Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal (instance #1)
[2026-01-17T21:53:56.255Z] [BOT] 💾 BEFORE ARCHIVING: 2463 jobs in database
[2026-01-17T21:53:56.257Z] [BOT] ✅ No jobs to archive (all 2463 jobs within 7-day window)
[2026-01-17T21:53:56.274Z] [BOT] 💾 Saved posted_jobs.json: 2463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:53:59.275Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T21:53:59.275Z] [BOT] 📍 [ROUTING] "Senior Research Specialist 1" @ ORG_03272755inceton University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T21:53:59.629Z] [BOT] ✅ Created forum post: 🏢 Senior Research Specialist 1 @ ORG_03272755inceton University in #🤖・ai-jobs
[2026-01-17T21:53:59.629Z] [BOT] ✅ Industry: Senior Research Specialist 1 @ ORG_03272755inceton University
[2026-01-17T21:54:01.686Z] [BOT] ✅ Created forum post: 🏢 Senior Research Specialist 1 @ ORG_03272755inceton University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T21:54:03.188Z] [BOT] 💾 Marked as posted: Senior Research Specialist 1 @ ORG_03272755inceton University (instance #1)
💾 BEFORE ARCHIVING: 2464 jobs in database
[2026-01-17T21:54:03.189Z] [BOT] ✅ No jobs to archive (all 2464 jobs within 7-day window)
[2026-01-17T21:54:03.207Z] [BOT] 💾 Saved posted_jobs.json: 2464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:03.208Z] [BOT] 📍 [ROUTING] "Faculty Fellow" @ ORG_54f9eaef International Group (SIG)
   Category: AI (matched: "machine learning")
[2026-01-17T21:54:03.208Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T21:54:03.424Z] [BOT] ✅ Created forum post: 🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Faculty Fellow @ ORG_54f9eaef International Group (SIG)
[2026-01-17T21:54:05.208Z] [BOT] ✅ Created forum post: 🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T21:54:06.708Z] [BOT] 💾 Marked as posted: Faculty Fellow @ ORG_54f9eaef International Group (SIG) (instance #1)
[2026-01-17T21:54:06.709Z] [BOT] 💾 BEFORE ARCHIVING: 2465 jobs in database
[2026-01-17T21:54:06.710Z] [BOT] ✅ No jobs to archive (all 2465 jobs within 7-day window)
[2026-01-17T21:54:06.727Z] [BOT] 💾 Saved posted_jobs.json: 2465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:06.727Z] [BOT] 📍 [ROUTING] "Solutions Architect, Digital Native" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-17T21:54:06.727Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-17T21:54:07.215Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Digital Native @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Digital Native @ anthropic
[2026-01-17T21:54:08.884Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Digital Native @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T21:54:10.385Z] [BOT] 💾 Marked as posted: Solutions Architect, Digital Native @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2466 jobs in database
[2026-01-17T21:54:10.387Z] [BOT] ✅ No jobs to archive (all 2466 jobs within 7-day window)
[2026-01-17T21:54:10.401Z] [BOT] 💾 Saved posted_jobs.json: 2466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:13.402Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T21:54:13.403Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Diagnostics" @ ORG_d1289e5a P Moore
[2026-01-17T21:54:13.404Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:54:13.776Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore in #💻・tech-jobs
  ✅ Industry: Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore
[2026-01-17T21:54:15.516Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-17T21:54:17.016Z] [BOT] 💾 Marked as posted: Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore (instance #1)
[2026-01-17T21:54:17.017Z] [BOT] 💾 BEFORE ARCHIVING: 2467 jobs in database
[2026-01-17T21:54:17.018Z] [BOT] ✅ No jobs to archive (all 2467 jobs within 7-day window)
[2026-01-17T21:54:17.036Z] [BOT] 💾 Saved posted_jobs.json: 2467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:17.037Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – 2026 New Grad" @ ORG_17b1b281 Fantasy
[2026-01-17T21:54:17.037Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:54:17.502Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy
[2026-01-17T21:54:19.182Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T21:54:20.682Z] [BOT] 💾 Marked as posted: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy (instance #1)
💾 BEFORE ARCHIVING: 2468 jobs in database
[2026-01-17T21:54:20.684Z] [BOT] ✅ No jobs to archive (all 2468 jobs within 7-day window)
[2026-01-17T21:54:20.699Z] [BOT] 💾 Saved posted_jobs.json: 2468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:20.699Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Guidewire" @ ORG_b344d80e Travelers Companies
[2026-01-17T21:54:20.699Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:54:20.991Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-17T21:54:20.992Z] [BOT] ✅ Industry: Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies
[2026-01-17T21:54:22.640Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T21:54:24.142Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Guidewire @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-17T21:54:24.142Z] [BOT] 💾 BEFORE ARCHIVING: 2469 jobs in database
[2026-01-17T21:54:24.143Z] [BOT] ✅ No jobs to archive (all 2469 jobs within 7-day window)
[2026-01-17T21:54:24.159Z] [BOT] 💾 Saved posted_jobs.json: 2469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:24.159Z] [BOT] 📍 [ROUTING] "Frontend Web Developer" @ 1-800 Contacts
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:54:24.366Z] [BOT] ✅ Created forum post: 🏢 Frontend Web Developer @ 1-800 Contacts in #💻・tech-jobs
[2026-01-17T21:54:24.366Z] [BOT] ✅ Industry: Frontend Web Developer @ 1-800 Contacts
[2026-01-17T21:54:26.025Z] [BOT] ✅ Created forum post: 🏢 Frontend Web Developer @ 1-800 Contacts in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T21:54:27.526Z] [BOT] 💾 Marked as posted: Frontend Web Developer @ 1-800 Contacts (instance #1)
💾 BEFORE ARCHIVING: 2470 jobs in database
[2026-01-17T21:54:27.528Z] [BOT] ✅ No jobs to archive (all 2470 jobs within 7-day window)
[2026-01-17T21:54:27.543Z] [BOT] 💾 Saved posted_jobs.json: 2470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:54:30.544Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T21:54:30.544Z] [BOT] 📍 [ROUTING] "Head of Legal Operations" @ brex
[2026-01-17T21:54:30.544Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T21:54:30.714Z] [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Legal Operations @ brex',
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
[2026-01-17T21:54:30.714Z] [BOT] ❌ Industry post failed: Head of Legal Operations
⚠️  Channel full error count: 1/5
[2026-01-17T21:54:32.341Z] [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Legal Operations @ brex',
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
[2026-01-17T21:54:32.342Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T21:54:36.845Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T21:54:36.845Z] [BOT] 📍 [ROUTING] "Business Systems & Solutions Specialist" @ ORG_e85ad4b4
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T21:54:36.974Z] [BOT ERROR] ❌ Error posting job Business Systems & Solutions Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Systems & Solutions Specialist @ Taboola',
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
[2026-01-17T21:54:36.974Z] [BOT] ❌ Industry post failed: Business Systems & Solutions Specialist
⚠️  Channel full error count: 2/5
[2026-01-17T21:54:38.594Z] [BOT ERROR] ❌ Error posting job Business Systems & Solutions Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Systems & Solutions Specialist @ Taboola',
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
[2026-01-17T21:54:38.594Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T21:54:43.095Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-17T21:54:43.096Z] [BOT] ⏭️  Skipping duplicate: JID_c35f616e-_r260000698 (posted within 7 days)
[2026-01-17T21:54:43.096Z] [BOT] ⏭️  Skipping duplicate: JID_7871be2b (posted within 7 days)
[2026-01-17T21:54:43.096Z] [BOT] ⏭️  Skipping duplicate: JID_9c658ec4 (posted within 7 days)
[2026-01-17T21:54:43.096Z] [BOT] ⏭️  Skipping duplicate: JID_5ede2a55 (posted within 7 days)
[2026-01-17T21:54:43.097Z] [BOT] ⏭️  Skipping duplicate: JID_387bec1a (posted within 7 days)
[2026-01-17T21:54:43.097Z] [BOT] ⏭️  Skipping duplicate: JID_c186e786 (posted within 7 days)
[2026-01-17T21:54:43.097Z] [BOT] ⏭️  Skipping duplicate: JID_f0765a18-guidewire_r-48459 (posted within 7 days)
[2026-01-17T21:54:43.097Z] [BOT] ⏭️  Skipping duplicate: JID_8f63d936 (posted within 7 days)
[2026-01-17T21:54:43.255Z] [BOT] ✅ Loaded pending queue: 2895 total (2875 pending, 20 enriched, 0 posted)
[2026-01-17T21:54:43.446Z] [BOT] ✅ Saved pending queue: 2895 total (2875 pending, 12 enriched, 8 posted)
[2026-01-17T21:54:43.446Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T21:54:43.510Z] [BOT] 📂 Loaded 4635 existing routing entries
[2026-01-17T21:54:43.576Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T21:54:43.577Z] [BOT] Total entries: 4645
   Timestamp: 2026-01-17T21:54:43.560Z
[2026-01-17T21:54:43.577Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
[2026-01-17T21:54:43.577Z] [BOT] Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-17T21:54:43.577Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T21:54:43.577Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 6
   Top channels:
[2026-01-17T21:54:43.577Z] [BOT] 1. #💻・remote-usa: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌆・chicago: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-17T21:54:43.578Z] [BOT] [STATS] Channel stats saved
[2026-01-17T21:54:45.597Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3627) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Legal Operations
- [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Systems & Solutions Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Systems & Solutions Specialist
- [BOT ERROR] ❌ Error posting job Business Systems & Solutions Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*