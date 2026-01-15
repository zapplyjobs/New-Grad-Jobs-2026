# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T01:13:32.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T01:12:45.377Z] ========================================
[2026-01-15T01:12:45.378Z] Discord Bot Execution Log
[2026-01-15T01:12:45.378Z] Environment: GitHub Actions
[2026-01-15T01:12:45.379Z] Node Version: v20.19.6
[2026-01-15T01:12:45.379Z] ========================================
[2026-01-15T01:12:45.379Z] Environment Variables Check:
[2026-01-15T01:12:45.379Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T01:12:45.379Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.379Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T01:12:45.379Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T01:12:45.379Z] 
Multi-Channel Configuration:
[2026-01-15T01:12:45.379Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T01:12:45.380Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T01:12:45.380Z] 
Data Files Check:
[2026-01-15T01:12:45.381Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27027 bytes)
[2026-01-15T01:12:45.387Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 814744 bytes)
[2026-01-15T01:12:45.387Z] 
========================================
[2026-01-15T01:12:45.387Z] Starting Enhanced Discord Bot...
[2026-01-15T01:12:45.387Z] ========================================
[2026-01-15T01:12:45.908Z] [BOT] ✅ Loaded V2 database: 1535 jobs
[2026-01-15T01:12:46.651Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T01:12:46.651Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T01:12:46.651Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T01:12:46.762Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Triage Engineer - Siri Attention and Invocation at Apple
[2026-01-15T01:12:46.765Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T01:12:46.765Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T01:12:46.765Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T01:12:46.766Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T01:12:46.766Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T01:12:46.767Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T01:12:46.769Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T01:12:46.770Z] [BOT] 📍 [ROUTING] "Software Triage Engineer - Siri Attention and Invocation" @ ORG_f223faa9
[2026-01-15T01:12:46.770Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:12:46.787Z] [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T01:12:46.956Z] [BOT] ✅ Created forum post: 🍎 Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9 in #💻・tech-jobs
[2026-01-15T01:12:46.956Z] [BOT] ✅ Industry: Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9
[2026-01-15T01:12:48.755Z] [BOT] ✅ Created forum post: 🍎 Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9 in #🌉・san-francisco
[2026-01-15T01:12:48.756Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T01:12:50.256Z] [BOT] 💾 Marked as posted: Software Triage Engineer - Siri Attention and Invocation @ ORG_f223faa9 (instance #1)
[2026-01-15T01:12:50.256Z] [BOT] 💾 BEFORE ARCHIVING: 1536 jobs in database
[2026-01-15T01:12:50.257Z] [BOT] ✅ No jobs to archive (all 1536 jobs within 7-day window)
[2026-01-15T01:12:50.271Z] [BOT] 💾 Saved posted_jobs.json: 1536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:12:50.272Z] [BOT] 📍 [ROUTING] "Integration Engineer" @ ORG_f223faa9
[2026-01-15T01:12:50.272Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:12:50.437Z] [BOT] ✅ Created forum post: 🍎 Integration Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2026-01-15T01:12:50.437Z] [BOT] ✅ Industry: Integration Engineer @ ORG_f223faa9
[2026-01-15T01:12:52.253Z] [BOT] ✅ Created forum post: 🍎 Integration Engineer @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T01:12:53.753Z] [BOT] 💾 Marked as posted: Integration Engineer @ ORG_f223faa9 (instance #1)
[2026-01-15T01:12:53.753Z] [BOT] 💾 BEFORE ARCHIVING: 1537 jobs in database
[2026-01-15T01:12:53.754Z] [BOT] ✅ No jobs to archive (all 1537 jobs within 7-day window)
[2026-01-15T01:12:53.763Z] [BOT] 💾 Saved posted_jobs.json: 1537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:12:53.763Z] [BOT] 📍 [ROUTING] "IOS Engineer - Photography Editing & Creativity Tools" @ ORG_f223faa9
[2026-01-15T01:12:53.763Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:12:54.060Z] [BOT] ✅ Created forum post: 🍎 IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9
[2026-01-15T01:12:55.727Z] [BOT] ✅ Created forum post: 🍎 IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9 in #🌉・san-francisco
[2026-01-15T01:12:55.727Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T01:12:57.228Z] [BOT] 💾 Marked as posted: IOS Engineer - Photography Editing & Creativity Tools @ ORG_f223faa9 (instance #1)
[2026-01-15T01:12:57.228Z] [BOT] 💾 BEFORE ARCHIVING: 1538 jobs in database
[2026-01-15T01:12:57.229Z] [BOT] ✅ No jobs to archive (all 1538 jobs within 7-day window)
[2026-01-15T01:12:57.240Z] [BOT] 💾 Saved posted_jobs.json: 1538 active jobs
[2026-01-15T01:12:57.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:12:57.241Z] [BOT] 📍 [ROUTING] "Software Engineer - Swe1 or Swe2 - United States" @ ORG_a032fda9
[2026-01-15T01:12:57.241Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:12:57.538Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9
[2026-01-15T01:12:59.040Z] [BOT] 💾 Marked as posted: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9 (instance #1)
[2026-01-15T01:12:59.040Z] [BOT] 💾 BEFORE ARCHIVING: 1539 jobs in database
[2026-01-15T01:12:59.041Z] [BOT] ✅ No jobs to archive (all 1539 jobs within 7-day window)
[2026-01-15T01:12:59.051Z] [BOT] 💾 Saved posted_jobs.json: 1539 active jobs
[2026-01-15T01:12:59.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:12:59.052Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_a4aa9800
[2026-01-15T01:12:59.052Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:12:59.246Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_a4aa9800 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_a4aa9800
[2026-01-15T01:13:00.974Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_a4aa9800 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T01:13:02.475Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_a4aa9800 (instance #1)
[2026-01-15T01:13:02.476Z] [BOT] 💾 BEFORE ARCHIVING: 1540 jobs in database
[2026-01-15T01:13:02.477Z] [BOT] ✅ No jobs to archive (all 1540 jobs within 7-day window)
[2026-01-15T01:13:02.487Z] [BOT] 💾 Saved posted_jobs.json: 1540 active jobs
[2026-01-15T01:13:02.487Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:13:02.487Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_509c517e
[2026-01-15T01:13:02.487Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:13:02.669Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・tech-jobs
[2026-01-15T01:13:02.669Z] [BOT] ✅ Industry: Software Development @ ORG_509c517e
[2026-01-15T01:13:04.485Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T01:13:05.987Z] [BOT] 💾 Marked as posted: Software Development @ ORG_509c517e (instance #1)
[2026-01-15T01:13:05.987Z] [BOT] 💾 BEFORE ARCHIVING: 1541 jobs in database
[2026-01-15T01:13:05.989Z] [BOT] ✅ No jobs to archive (all 1541 jobs within 7-day window)
[2026-01-15T01:13:05.997Z] [BOT] 💾 Saved posted_jobs.json: 1541 active jobs
[2026-01-15T01:13:05.997Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:13:08.999Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T01:13:09.000Z] [BOT] 📍 [ROUTING] "AIML Triage Engineer - Machine Learning Platform and Technologies" @ ORG_f223faa9
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T01:13:09.000Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T01:13:09.511Z] [BOT] ✅ Created forum post: 🍎 AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 in #🤖・ai-jobs
[2026-01-15T01:13:09.512Z] [BOT] ✅ Industry: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9
[2026-01-15T01:13:11.206Z] [BOT] ✅ Created forum post: 🍎 AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T01:13:12.707Z] [BOT] 💾 Marked as posted: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 (instance #1)
[2026-01-15T01:13:12.707Z] [BOT] 💾 BEFORE ARCHIVING: 1542 jobs in database
[2026-01-15T01:13:12.708Z] [BOT] ✅ No jobs to archive (all 1542 jobs within 7-day window)
[2026-01-15T01:13:12.720Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
[2026-01-15T01:13:12.720Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:13:12.721Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC" @ ORG_a867f63f National Laboratory
[2026-01-15T01:13:12.721Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T01:13:12.972Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Labo in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Laboratory
[2026-01-15T01:13:14.954Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Labo in #🌆・chicago
[2026-01-15T01:13:14.955Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T01:13:16.455Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Cosmological Physics & Advanced Computing - CPAC @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T01:13:16.455Z] [BOT] 💾 BEFORE ARCHIVING: 1543 jobs in database
[2026-01-15T01:13:16.456Z] [BOT] ✅ No jobs to archive (all 1543 jobs within 7-day window)
[2026-01-15T01:13:16.467Z] [BOT] 💾 Saved posted_jobs.json: 1543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:13:16.468Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager, Personalization" @ spotify
[2026-01-15T01:13:16.468Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T01:13:16.802Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🤖・ai-jobs
[2026-01-15T01:13:16.802Z] [BOT] ✅ Industry: Machine Learning Engineering Manager, Personalization @ spotify
[2026-01-15T01:13:18.541Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🗽・new-york
[2026-01-15T01:13:18.541Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T01:13:20.043Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager, Personalization @ spotify (instance #1)
[2026-01-15T01:13:20.043Z] [BOT] 💾 BEFORE ARCHIVING: 1544 jobs in database
[2026-01-15T01:13:20.044Z] [BOT] ✅ No jobs to archive (all 1544 jobs within 7-day window)
[2026-01-15T01:13:20.056Z] [BOT] 💾 Saved posted_jobs.json: 1544 active jobs
[2026-01-15T01:13:20.056Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:13:23.057Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T01:13:23.057Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-01-15T01:13:23.058Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T01:13:23.276Z] [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Engineer @ mthree',
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
[2026-01-15T01:13:23.276Z] [BOT] ❌ Industry post failed: Junior Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-15T01:13:24.905Z] [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Engineer @ mthree',
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
[2026-01-15T01:13:24.906Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T01:13:29.408Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T01:13:29.408Z] [BOT] ⏭️  Skipping duplicate: JID_4caf790e (posted within 7 days)
[2026-01-15T01:13:29.408Z] [BOT] ⏭️  Skipping duplicate: JID_ff26c509 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_b1f22de8 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_77702840 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_3a9f0254-_421370 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_a33e4e1c (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_13657d11 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_116264ce-development_r17786-1 (posted within 7 days)
[2026-01-15T01:13:29.409Z] [BOT] ⏭️  Skipping duplicate: JID_3ef4675e (posted within 7 days)
[2026-01-15T01:13:29.516Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-15T01:13:29.679Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 11 enriched, 9 posted)
[2026-01-15T01:13:29.679Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T01:13:29.734Z] [BOT] 📂 Loaded 3695 existing routing entries
[2026-01-15T01:13:29.797Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T01:13:29.797Z] [BOT] Total entries: 3705
   Timestamp: 2026-01-15T01:13:29.780Z
[2026-01-15T01:13:29.798Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T01:13:29.798Z] [BOT] Total attempts: 19
   Successful: 17
   Failed: 2
   Skipped: 0
[2026-01-15T01:13:29.798Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T01:13:29.798Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-15T01:13:29.798Z] [BOT] 2. #🌉・san-francisco: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-15T01:13:29.798Z] [BOT] [STATS] Channel stats saved
[2026-01-15T01:13:31.822Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software Engineer
- [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*