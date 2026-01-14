# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T19:26:39.675Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T19:25:49.609Z] ========================================
[2026-01-14T19:25:49.611Z] Discord Bot Execution Log
[2026-01-14T19:25:49.611Z] Environment: GitHub Actions
[2026-01-14T19:25:49.611Z] Node Version: v20.19.6
[2026-01-14T19:25:49.611Z] ========================================
[2026-01-14T19:25:49.611Z] Environment Variables Check:
[2026-01-14T19:25:49.611Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T19:25:49.611Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.611Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T19:25:49.611Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T19:25:49.611Z] 
Multi-Channel Configuration:
[2026-01-14T19:25:49.611Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T19:25:49.612Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T19:25:49.612Z] 
Data Files Check:
[2026-01-14T19:25:49.613Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94569 bytes)
[2026-01-14T19:25:49.619Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 731781 bytes)
[2026-01-14T19:25:49.619Z] 
========================================
[2026-01-14T19:25:49.619Z] Starting Enhanced Discord Bot...
[2026-01-14T19:25:49.619Z] ========================================
[2026-01-14T19:25:50.129Z] [BOT] ✅ Loaded V2 database: 1373 jobs
[2026-01-14T19:25:50.641Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T19:25:50.642Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T19:25:50.642Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T19:25:50.755Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T19:25:50.755Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Research Scientist in Code Generation at ByteDance
[2026-01-14T19:25:50.760Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T19:25:50.760Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T19:25:50.760Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T19:25:50.761Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T19:25:50.761Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-14T19:25:50.761Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T19:25:50.768Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T19:25:50.768Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist in Code Generation" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:25:50.796Z] [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T19:25:50.932Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist in Code Generation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist in Code Generation @ ByteDance',
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
[2026-01-14T19:25:50.932Z] [BOT] ❌ Industry post failed: Graduate Research Scientist in Code Generation
⚠️  Channel full error count: 1/5
[2026-01-14T19:25:52.558Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist in Code Generation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist in Code Generation @ ByteDance',
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
[2026-01-14T19:25:52.559Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T19:25:54.059Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_a06522bc Consulting Group
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:25:54.059Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T19:25:54.200Z] [BOT ERROR] ❌ Error posting job AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Engineer @ ORG_a06522bc Consulting Group',
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
[2026-01-14T19:25:54.200Z] [BOT] ❌ Industry post failed: AI Engineer
⚠️  Channel full error count: 2/5
[2026-01-14T19:25:55.928Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_a06522bc Consulting Group in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-14T19:25:57.430Z] [BOT] 💾 Marked as posted: AI Engineer @ ORG_a06522bc Consulting Group (instance #1)
[2026-01-14T19:25:57.430Z] [BOT] 💾 BEFORE ARCHIVING: 1374 jobs in database
[2026-01-14T19:25:57.431Z] [BOT] ✅ No jobs to archive (all 1374 jobs within 7-day window)
[2026-01-14T19:25:57.444Z] [BOT] 💾 Saved posted_jobs.json: 1374 active jobs
[2026-01-14T19:25:57.444Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:25:57.444Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer/Scientist - Multi Modality" @ ORG_8bee3a8d Labs
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T19:25:57.597Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs in #🤖・ai-jobs
[2026-01-14T19:25:57.597Z] [BOT] ✅ Industry: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs
[2026-01-14T19:25:59.317Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs in #🌉・san-francisco
[2026-01-14T19:25:59.317Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:26:00.818Z] [BOT] 💾 Marked as posted: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs (instance #1)
[2026-01-14T19:26:00.818Z] [BOT] 💾 BEFORE ARCHIVING: 1375 jobs in database
[2026-01-14T19:26:00.819Z] [BOT] ✅ No jobs to archive (all 1375 jobs within 7-day window)
[2026-01-14T19:26:00.829Z] [BOT] 💾 Saved posted_jobs.json: 1375 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:03.830Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-14T19:26:03.831Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Beneficial Deployments" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:26:04.353Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Beneficial Deployments @ anthropic in #💲・sales-jobs
  ✅ Industry: Customer Success Manager, Beneficial Deployments @ anthropic
[2026-01-14T19:26:06.074Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Beneficial Deployments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:26:07.575Z] [BOT] 💾 Marked as posted: Customer Success Manager, Beneficial Deployments @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 1376 jobs in database
[2026-01-14T19:26:07.576Z] [BOT] ✅ No jobs to archive (all 1376 jobs within 7-day window)
[2026-01-14T19:26:07.587Z] [BOT] 💾 Saved posted_jobs.json: 1376 active jobs
[2026-01-14T19:26:07.587Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:07.587Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Digital Native Business" @ anthropic
[2026-01-14T19:26:07.587Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:26:07.828Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Digital Native Business @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Digital Native Business @ anthropic
[2026-01-14T19:26:09.622Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Digital Native Business @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:26:11.122Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Digital Native Business @ anthropic (instance #1)
[2026-01-14T19:26:11.123Z] [BOT] 💾 BEFORE ARCHIVING: 1377 jobs in database
[2026-01-14T19:26:11.124Z] [BOT] ✅ No jobs to archive (all 1377 jobs within 7-day window)
[2026-01-14T19:26:11.134Z] [BOT] 💾 Saved posted_jobs.json: 1377 active jobs
[2026-01-14T19:26:11.134Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:14.134Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T19:26:14.135Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Python - Linux" @ ORG_cc7e1d22
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:26:14.421Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Python - Linux @ ORG_cc7e1d22 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Python - Linux @ ORG_cc7e1d22
[2026-01-14T19:26:16.131Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Python - Linux @ ORG_cc7e1d22 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:26:17.632Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Python - Linux @ ORG_cc7e1d22 (instance #1)
[2026-01-14T19:26:17.632Z] [BOT] 💾 BEFORE ARCHIVING: 1378 jobs in database
[2026-01-14T19:26:17.633Z] [BOT] ✅ No jobs to archive (all 1378 jobs within 7-day window)
[2026-01-14T19:26:17.643Z] [BOT] 💾 Saved posted_jobs.json: 1378 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:17.643Z] [BOT] 📍 [ROUTING] "Sustaining Product Engineer" @ ORG_dd730736
[2026-01-14T19:26:17.643Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:26:17.857Z] [BOT] ✅ Created forum post: 🏢 Sustaining Product Engineer @ ORG_dd730736 in #💻・tech-jobs
  ✅ Industry: Sustaining Product Engineer @ ORG_dd730736
[2026-01-14T19:26:19.883Z] [BOT] ✅ Created forum post: 🏢 Sustaining Product Engineer @ ORG_dd730736 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T19:26:21.383Z] [BOT] 💾 Marked as posted: Sustaining Product Engineer @ ORG_dd730736 (instance #1)
[2026-01-14T19:26:21.383Z] [BOT] 💾 BEFORE ARCHIVING: 1379 jobs in database
[2026-01-14T19:26:21.384Z] [BOT] ✅ No jobs to archive (all 1379 jobs within 7-day window)
[2026-01-14T19:26:21.394Z] [BOT] 💾 Saved posted_jobs.json: 1379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:21.394Z] [BOT] 📍 [ROUTING] "Developer Productivity Engineer" @ supabase
[2026-01-14T19:26:21.395Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:26:21.721Z] [BOT] ✅ Created forum post: 🏢 Developer Productivity Engineer @ supabase in #💻・tech-jobs
[2026-01-14T19:26:21.722Z] [BOT] ✅ Industry: Developer Productivity Engineer @ supabase
[2026-01-14T19:26:23.223Z] [BOT] 💾 Marked as posted: Developer Productivity Engineer @ supabase (instance #1)
[2026-01-14T19:26:23.223Z] [BOT] 💾 BEFORE ARCHIVING: 1380 jobs in database
[2026-01-14T19:26:23.224Z] [BOT] ✅ No jobs to archive (all 1380 jobs within 7-day window)
[2026-01-14T19:26:23.234Z] [BOT] 💾 Saved posted_jobs.json: 1380 active jobs
[2026-01-14T19:26:23.234Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:26.234Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-14T19:26:26.235Z] [BOT] 📍 [ROUTING] "Operations Research Analyst-Foundational" @ ORG_fee50aac
[2026-01-14T19:26:26.235Z] [BOT] Category: MARKETING (matched: "campaign")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T19:26:26.400Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #📣・marketing-jobs
[2026-01-14T19:26:26.401Z] [BOT] ✅ Industry: Operations Research Analyst-Foundational @ ORG_fee50aac
[2026-01-14T19:26:28.545Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #💻・remote-usa
[2026-01-14T19:26:28.545Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T19:26:30.046Z] [BOT] 💾 Marked as posted: Operations Research Analyst-Foundational @ ORG_fee50aac (instance #1)
[2026-01-14T19:26:30.046Z] [BOT] 💾 BEFORE ARCHIVING: 1381 jobs in database
[2026-01-14T19:26:30.047Z] [BOT] ✅ No jobs to archive (all 1381 jobs within 7-day window)
[2026-01-14T19:26:30.058Z] [BOT] 💾 Saved posted_jobs.json: 1381 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:30.058Z] [BOT] 📍 [ROUTING] "Seismic Imaging Analyst" @ ORG_b253f799
[2026-01-14T19:26:30.058Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T19:26:30.295Z] [BOT] ✅ Created forum post: 🏢 Seismic Imaging Analyst @ ORG_b253f799 in #📣・marketing-jobs
[2026-01-14T19:26:30.295Z] [BOT] ✅ Industry: Seismic Imaging Analyst @ ORG_b253f799
[2026-01-14T19:26:32.100Z] [BOT] ✅ Created forum post: 🏢 Seismic Imaging Analyst @ ORG_b253f799 in #🤠・austin
[2026-01-14T19:26:32.100Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T19:26:33.601Z] [BOT] 💾 Marked as posted: Seismic Imaging Analyst @ ORG_b253f799 (instance #1)
[2026-01-14T19:26:33.601Z] [BOT] 💾 BEFORE ARCHIVING: 1382 jobs in database
[2026-01-14T19:26:33.602Z] [BOT] ✅ No jobs to archive (all 1382 jobs within 7-day window)
[2026-01-14T19:26:33.612Z] [BOT] 💾 Saved posted_jobs.json: 1382 active jobs
[2026-01-14T19:26:33.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:26:36.613Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-14T19:26:36.613Z] [BOT] ⏭️  Skipping duplicate: JID_9b02c5cb (posted within 7 days)
[2026-01-14T19:26:36.614Z] [BOT] ⏭️  Skipping duplicate: JID_f928417b (posted within 7 days)
[2026-01-14T19:26:36.614Z] [BOT] ⏭️  Skipping duplicate: JID_6e0f7725 (posted within 7 days)
⏭️  Skipping duplicate: JID_322dc1e3-cx_4001-job-38504 (posted within 7 days)
⏭️  Skipping duplicate: JID_b2a1fd23 (posted within 7 days)
⏭️  Skipping duplicate: JID_b04f1d2e (posted within 7 days)
[2026-01-14T19:26:36.614Z] [BOT] ⏭️  Skipping duplicate: JID_1d6b84cb (posted within 7 days)
⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_89d20214-foundational_r2114720 (posted within 7 days)
[2026-01-14T19:26:36.614Z] [BOT] ⏭️  Skipping duplicate: JID_c7ee204c-analyst_jr101070-2 (posted within 7 days)
[2026-01-14T19:26:36.726Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T19:26:36.898Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 11 enriched, 9 posted)
[2026-01-14T19:26:36.898Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T19:26:36.950Z] [BOT] 📂 Loaded 3505 existing routing entries
[2026-01-14T19:26:37.010Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T19:26:37.010Z] [BOT] Total entries: 3515
   Timestamp: 2026-01-14T19:26:36.995Z
[2026-01-14T19:26:37.011Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T19:26:37.011Z] [BOT] Total attempts: 19
   Successful: 16
   Failed: 3
   Skipped: 0
[2026-01-14T19:26:37.011Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T19:26:37.011Z] [BOT] Total posts: 16
   Channels used: 8
   Top channels:
[2026-01-14T19:26:37.011Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #📣・marketing-jobs: 2 posts
[2026-01-14T19:26:37.011Z] [BOT] [STATS] Channel stats saved
[2026-01-14T19:26:39.037Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist in Code Generation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist in Code Generation
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist in Code Generation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job AI Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Engineer
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*