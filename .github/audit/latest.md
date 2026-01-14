# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T18:29:08.657Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T18:28:20.456Z] ========================================
[2026-01-14T18:28:20.458Z] Discord Bot Execution Log
[2026-01-14T18:28:20.458Z] Environment: GitHub Actions
[2026-01-14T18:28:20.458Z] Node Version: v20.19.6
[2026-01-14T18:28:20.458Z] ========================================
[2026-01-14T18:28:20.459Z] Environment Variables Check:
[2026-01-14T18:28:20.459Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T18:28:20.459Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.459Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T18:28:20.459Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T18:28:20.460Z] 
Multi-Channel Configuration:
[2026-01-14T18:28:20.460Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T18:28:20.460Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T18:28:20.460Z] 
Data Files Check:
[2026-01-14T18:28:20.461Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30021 bytes)
[2026-01-14T18:28:20.467Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 719048 bytes)
[2026-01-14T18:28:20.467Z] 
========================================
[2026-01-14T18:28:20.467Z] Starting Enhanced Discord Bot...
[2026-01-14T18:28:20.467Z] ========================================
[2026-01-14T18:28:20.974Z] [BOT] ✅ Loaded V2 database: 1350 jobs
[2026-01-14T18:28:22.134Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T18:28:22.134Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T18:28:22.134Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T18:28:22.246Z] [BOT] ✅ Loaded pending queue: 2744 total (2724 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Developer at Cisive
[2026-01-14T18:28:22.247Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T18:28:22.248Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T18:28:22.248Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T18:28:22.249Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T18:28:22.249Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T18:28:22.253Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T18:28:22.254Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2026-01-14T18:28:22.254Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:28:22.271Z] [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T18:28:22.702Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T18:28:22.702Z] [BOT] ❌ Industry post failed: Software Developer
⚠️  Channel full error count: 1/5
[2026-01-14T18:28:24.340Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T18:28:24.340Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T18:28:25.840Z] [BOT] 📍 [ROUTING] "Software Engineer, New Grad, Backend" @ ORG_9cc3a043
   Category: TECH (matched: "software")
[2026-01-14T18:28:25.840Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:28:26.082Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Backend @ ORG_9cc3a043 in #💻・tech-jobs
[2026-01-14T18:28:26.083Z] [BOT] ✅ Industry: Software Engineer, New Grad, Backend @ ORG_9cc3a043
[2026-01-14T18:28:27.792Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Backend @ ORG_9cc3a043 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T18:28:29.293Z] [BOT] 💾 Marked as posted: Software Engineer, New Grad, Backend @ ORG_9cc3a043 (instance #1)
[2026-01-14T18:28:29.293Z] [BOT] 💾 BEFORE ARCHIVING: 1351 jobs in database
[2026-01-14T18:28:29.294Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T18:28:29.299Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-14T18:28:29.299Z] [BOT] ✅ Archiving complete: 6 archived, 1345 active
[2026-01-14T18:28:29.309Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:29.309Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Ads ML Infrastructure - PhD" @ ORG_1bb6fcfb
[2026-01-14T18:28:29.309Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:28:29.498Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-14T18:28:29.498Z] [BOT] ✅ Industry: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb
[2026-01-14T18:28:31.216Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T18:28:32.715Z] [BOT] 💾 Marked as posted: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-14T18:28:32.716Z] [BOT] 💾 BEFORE ARCHIVING: 1346 jobs in database
[2026-01-14T18:28:32.717Z] [BOT] ✅ No jobs to archive (all 1346 jobs within 7-day window)
[2026-01-14T18:28:32.727Z] [BOT] 💾 Saved posted_jobs.json: 1346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:32.727Z] [BOT] 📍 [ROUTING] "PhD Applied Scientist - Oracle Health & Analytics" @ ORG_dc7620eb
   Category: TECH (matched: "analytics")
[2026-01-14T18:28:32.728Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:28:32.935Z] [BOT] ✅ Created forum post: 🔴 PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-14T18:28:32.935Z] [BOT] ✅ Industry: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb
[2026-01-14T18:28:34.436Z] [BOT] 💾 Marked as posted: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb (instance #1)
💾 BEFORE ARCHIVING: 1347 jobs in database
[2026-01-14T18:28:34.437Z] [BOT] ✅ No jobs to archive (all 1347 jobs within 7-day window)
[2026-01-14T18:28:34.447Z] [BOT] 💾 Saved posted_jobs.json: 1347 active jobs
[2026-01-14T18:28:34.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:34.448Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
[2026-01-14T18:28:34.448Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:28:35.179Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2026-01-14T18:28:36.894Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T18:28:38.395Z] [BOT] 💾 Marked as posted: Application Software Engineer @ ORG_afd623b1 (instance #1)
[2026-01-14T18:28:38.395Z] [BOT] 💾 BEFORE ARCHIVING: 1348 jobs in database
[2026-01-14T18:28:38.397Z] [BOT] ✅ No jobs to archive (all 1348 jobs within 7-day window)
[2026-01-14T18:28:38.406Z] [BOT] 💾 Saved posted_jobs.json: 1348 active jobs
[2026-01-14T18:28:38.406Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:41.407Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-14T18:28:41.407Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar-Neutrino Physics" @ ORG_478e100e University
[2026-01-14T18:28:41.407Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T18:28:41.632Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University
[2026-01-14T18:28:43.439Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University in #💻・remote-usa
[2026-01-14T18:28:43.439Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T18:28:44.940Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University (instance #1)
[2026-01-14T18:28:44.940Z] [BOT] 💾 BEFORE ARCHIVING: 1349 jobs in database
[2026-01-14T18:28:44.941Z] [BOT] ✅ No jobs to archive (all 1349 jobs within 7-day window)
[2026-01-14T18:28:44.951Z] [BOT] 💾 Saved posted_jobs.json: 1349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:44.951Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
[2026-01-14T18:28:44.951Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T18:28:45.554Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2026-01-14T18:28:45.554Z] [BOT] ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2026-01-14T18:28:47.329Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-14T18:28:48.829Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-14T18:28:48.829Z] [BOT] 💾 BEFORE ARCHIVING: 1350 jobs in database
[2026-01-14T18:28:48.830Z] [BOT] ✅ No jobs to archive (all 1350 jobs within 7-day window)
[2026-01-14T18:28:48.840Z] [BOT] 💾 Saved posted_jobs.json: 1350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:51.841Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T18:28:51.841Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T18:28:51.841Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T18:28:52.110Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb
[2026-01-14T18:28:53.822Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T18:28:55.323Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb (instance #1)
[2026-01-14T18:28:55.323Z] [BOT] 💾 BEFORE ARCHIVING: 1351 jobs in database
[2026-01-14T18:28:55.324Z] [BOT] ✅ No jobs to archive (all 1351 jobs within 7-day window)
[2026-01-14T18:28:55.335Z] [BOT] 💾 Saved posted_jobs.json: 1351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:55.335Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
[2026-01-14T18:28:55.335Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T18:28:55.628Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-14T18:28:55.628Z] [BOT] ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2026-01-14T18:28:57.322Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
[2026-01-14T18:28:57.322Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-14T18:28:58.823Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-14T18:28:58.823Z] [BOT] 💾 BEFORE ARCHIVING: 1352 jobs in database
[2026-01-14T18:28:58.824Z] [BOT] ✅ No jobs to archive (all 1352 jobs within 7-day window)
[2026-01-14T18:28:58.834Z] [BOT] 💾 Saved posted_jobs.json: 1352 active jobs
[2026-01-14T18:28:58.834Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:28:58.834Z] [BOT] 📍 [ROUTING] "Builder – New Grad - AI Engineer" @ ORG_eb020b7a
[2026-01-14T18:28:58.834Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T18:28:59.120Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - AI Engineer @ ORG_eb020b7a in #🤖・ai-jobs
[2026-01-14T18:28:59.120Z] [BOT] ✅ Industry: Builder – New Grad - AI Engineer @ ORG_eb020b7a
[2026-01-14T18:29:00.939Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - AI Engineer @ ORG_eb020b7a in #🌉・san-francisco
[2026-01-14T18:29:00.939Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T18:29:02.439Z] [BOT] 💾 Marked as posted: Builder – New Grad - AI Engineer @ ORG_eb020b7a (instance #1)
[2026-01-14T18:29:02.439Z] [BOT] 💾 BEFORE ARCHIVING: 1353 jobs in database
[2026-01-14T18:29:02.440Z] [BOT] ✅ No jobs to archive (all 1353 jobs within 7-day window)
[2026-01-14T18:29:02.450Z] [BOT] 💾 Saved posted_jobs.json: 1353 active jobs
[2026-01-14T18:29:02.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:29:05.451Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-14T18:29:05.451Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_e3a83b15-physics_req_0000073465-1 (posted within 7 days)
[2026-01-14T18:29:05.451Z] [BOT] ⏭️  Skipping duplicate: JID_3ade432d (posted within 7 days)
[2026-01-14T18:29:05.451Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_eae81305 (posted within 7 days)
[2026-01-14T18:29:05.452Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f89204d4 (posted within 7 days)
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-317554 (posted within 7 days)
[2026-01-14T18:29:05.452Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a5bcef8c-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_ba64f531-separation_421467-1 (posted within 7 days)
[2026-01-14T18:29:05.452Z] [BOT] ⏭️  Skipping duplicate: JID_65476f3f (posted within 7 days)
⏭️  Skipping duplicate: JID_88e70eae (posted within 7 days)
[2026-01-14T18:29:05.565Z] [BOT] ✅ Loaded pending queue: 2744 total (2724 pending, 20 enriched, 0 posted)
[2026-01-14T18:29:05.729Z] [BOT] ✅ Saved pending queue: 2744 total (2724 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-14T18:29:05.729Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T18:29:05.781Z] [BOT] 📂 Loaded 3475 existing routing entries
[2026-01-14T18:29:05.840Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3485
   Timestamp: 2026-01-14T18:29:05.826Z
[2026-01-14T18:29:05.840Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 19
[2026-01-14T18:29:05.840Z] [BOT] Successful: 17
   Failed: 2
   Skipped: 0
[2026-01-14T18:29:05.841Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 9
   Top channels:
[2026-01-14T18:29:05.841Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #📁・JID_e938df7b: 2 posts
     5. #🌧️・seattle: 2 posts
[2026-01-14T18:29:05.841Z] [BOT] [STATS] Channel stats saved
[2026-01-14T18:29:07.865Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*