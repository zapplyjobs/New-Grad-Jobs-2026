# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T20:24:46.070Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T20:23:50.857Z] ========================================
[2025-12-19T20:23:50.859Z] Discord Bot Execution Log
[2025-12-19T20:23:50.859Z] Environment: GitHub Actions
[2025-12-19T20:23:50.859Z] Node Version: v20.19.6
[2025-12-19T20:23:50.859Z] ========================================
[2025-12-19T20:23:50.859Z] Environment Variables Check:
[2025-12-19T20:23:50.859Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T20:23:50.859Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.859Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T20:23:50.860Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T20:23:50.860Z] 
Multi-Channel Configuration:
[2025-12-19T20:23:50.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T20:23:50.860Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T20:23:50.860Z] 
Data Files Check:
[2025-12-19T20:23:50.861Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47417 bytes)
[2025-12-19T20:23:50.864Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 330317 bytes)
[2025-12-19T20:23:50.864Z] 
========================================
[2025-12-19T20:23:50.864Z] Starting Enhanced Discord Bot...
[2025-12-19T20:23:50.864Z] ========================================
[2025-12-19T20:23:51.396Z] [BOT] ✅ Loaded V2 database: 554 jobs
[2025-12-19T20:23:52.076Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T20:23:52.076Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T20:23:52.077Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T20:23:52.080Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T20:23:52.125Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T20:23:52.173Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T20:23:52.175Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T20:23:52.175Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T20:23:52.175Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T20:23:52.176Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T20:23:52.176Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T20:23:52.181Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-19T20:23:52.181Z] [BOT] 📍 [ROUTING] "Sales Data Analyst 1" @ ORG_c46dc795 Innovation
[2025-12-19T20:23:52.181Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T20:23:52.199Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T20:23:52.454Z] [BOT] ✅ Created forum post: 🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #📈・JID_fb739488
[2025-12-19T20:23:52.454Z] [BOT] ✅ Industry: Sales Data Analyst 1 @ ORG_c46dc795 Innovation
[2025-12-19T20:23:54.147Z] [BOT] ✅ Created forum post: 🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #🦢・los-angeles
[2025-12-19T20:23:54.147Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-19T20:23:55.648Z] [BOT] 💾 Marked as posted: Sales Data Analyst 1 @ ORG_c46dc795 Innovation (instance #1)
[2025-12-19T20:23:55.649Z] [BOT] 💾 BEFORE ARCHIVING: 555 jobs in database
[2025-12-19T20:23:55.649Z] [BOT] ✅ No jobs to archive (all 555 jobs within 7-day window)
[2025-12-19T20:23:55.655Z] [BOT] 💾 Saved posted_jobs.json: 555 active jobs
[2025-12-19T20:23:55.656Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:23:58.656Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-19T20:23:58.657Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Department of Physics - Wissel Research Group" @ ORG_478e100e University
[2025-12-19T20:23:58.657Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:23:59.251Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University in #💻・tech-jobs
[2025-12-19T20:23:59.252Z] [BOT] ✅ Industry: Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University
[2025-12-19T20:24:01.048Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University in #💻・remote-usa
[2025-12-19T20:24:01.048Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:24:02.550Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University (instance #1)
[2025-12-19T20:24:02.550Z] [BOT] 💾 BEFORE ARCHIVING: 556 jobs in database
[2025-12-19T20:24:02.550Z] [BOT] ✅ No jobs to archive (all 556 jobs within 7-day window)
[2025-12-19T20:24:02.561Z] [BOT] 💾 Saved posted_jobs.json: 556 active jobs
[2025-12-19T20:24:02.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:02.562Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Search - Usds" @ ORG_1bb6fcfb
[2025-12-19T20:24:02.562Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:24:02.849Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb
[2025-12-19T20:24:04.554Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T20:24:06.055Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb (instance #1)
[2025-12-19T20:24:06.055Z] [BOT] 💾 BEFORE ARCHIVING: 557 jobs in database
[2025-12-19T20:24:06.056Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2025-12-19T20:24:06.062Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
[2025-12-19T20:24:06.062Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:09.062Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-19T20:24:09.063Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_478e100e University
[2025-12-19T20:24:09.064Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-19T20:24:09.327Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #🩺・healthcare-jobs
[2025-12-19T20:24:09.328Z] [BOT] ✅ Industry: Postdoctoral Scholar @ ORG_478e100e University
[2025-12-19T20:24:11.058Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #💻・remote-usa
[2025-12-19T20:24:11.058Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:24:12.559Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_478e100e University (instance #1)
[2025-12-19T20:24:12.560Z] [BOT] 💾 BEFORE ARCHIVING: 558 jobs in database
[2025-12-19T20:24:12.560Z] [BOT] ✅ No jobs to archive (all 558 jobs within 7-day window)
[2025-12-19T20:24:12.566Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:15.567Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-19T20:24:15.568Z] [BOT] 📍 [ROUTING] "Physics Department - Postdoctoral Scholar - Ligo" @ ORG_478e100e University
[2025-12-19T20:24:15.568Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-19T20:24:15.835Z] [BOT] ✅ Created forum post: 🏢 Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University in #🤖・ai-jobs
[2025-12-19T20:24:15.835Z] [BOT] ✅ Industry: Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University
[2025-12-19T20:24:17.778Z] [BOT] ✅ Created forum post: 🏢 Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University in #💻・remote-usa
[2025-12-19T20:24:17.778Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:24:19.279Z] [BOT] 💾 Marked as posted: Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University (instance #1)
[2025-12-19T20:24:19.279Z] [BOT] 💾 BEFORE ARCHIVING: 559 jobs in database
[2025-12-19T20:24:19.280Z] [BOT] ✅ No jobs to archive (all 559 jobs within 7-day window)
[2025-12-19T20:24:19.286Z] [BOT] 💾 Saved posted_jobs.json: 559 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:19.286Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_c3f8be8b
[2025-12-19T20:24:19.286Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:24:19.543Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c3f8be8b in #🤖・ai-jobs
[2025-12-19T20:24:19.544Z] [BOT] ✅ Industry: Application Engineer @ ORG_c3f8be8b
[2025-12-19T20:24:21.308Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c3f8be8b in #💻・remote-usa
[2025-12-19T20:24:21.309Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:24:22.810Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_c3f8be8b (instance #1)
[2025-12-19T20:24:22.810Z] [BOT] 💾 BEFORE ARCHIVING: 560 jobs in database
[2025-12-19T20:24:22.811Z] [BOT] ✅ No jobs to archive (all 560 jobs within 7-day window)
[2025-12-19T20:24:22.817Z] [BOT] 💾 Saved posted_jobs.json: 560 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:22.818Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Fellow" @ ORG_64dba1b4
[2025-12-19T20:24:22.818Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-19T20:24:23.120Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Fellow @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Fellow @ ORG_64dba1b4
[2025-12-19T20:24:24.971Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Fellow @ ORG_64dba1b4 in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-19T20:24:26.473Z] [BOT] 💾 Marked as posted: Postdoctoral Research Fellow @ ORG_64dba1b4 (instance #1)
[2025-12-19T20:24:26.473Z] [BOT] 💾 BEFORE ARCHIVING: 561 jobs in database
[2025-12-19T20:24:26.474Z] [BOT] ✅ No jobs to archive (all 561 jobs within 7-day window)
[2025-12-19T20:24:26.480Z] [BOT] 💾 Saved posted_jobs.json: 561 active jobs
[2025-12-19T20:24:26.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:26.480Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal" @ ORG_1bb6fcfb
[2025-12-19T20:24:26.480Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:24:26.685Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ TikTok',
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
[2025-12-19T20:24:26.685Z] [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal
⚠️  Channel full error count: 1/5
[2025-12-19T20:24:28.359Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ TikTok',
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
[2025-12-19T20:24:28.359Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2025-12-19T20:24:29.860Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
[2025-12-19T20:24:29.860Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:24:30.116Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T20:24:30.116Z] [BOT] ✅ Industry: Machine Learning Graduate @ ORG_08c9a13c
[2025-12-19T20:24:31.793Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Graduate @ ByteDance',
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
[2025-12-19T20:24:31.793Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2025-12-19T20:24:33.294Z] [BOT] 💾 Marked as posted: Machine Learning Graduate @ ORG_08c9a13c (instance #1)
[2025-12-19T20:24:33.294Z] [BOT] 💾 BEFORE ARCHIVING: 562 jobs in database
[2025-12-19T20:24:33.294Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2025-12-19T20:24:33.301Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
[2025-12-19T20:24:33.301Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:24:36.301Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-19T20:24:36.301Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Aerosols and hydroclimate risk" @ ORG_9d38443e of Texas - Austin
[2025-12-19T20:24:36.301Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-19T20:24:36.999Z] [BOT ERROR] ❌ Error posting job Postdoctoral Researcher - Aerosols and hydroclimate risk: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2025-12-19T20:24:37.000Z] [BOT] ❌ Industry post failed: Postdoctoral Researcher - Aerosols and hydroclimate risk
⚠️  Channel full error count: 1/5
[2025-12-19T20:24:38.634Z] [BOT ERROR] ❌ Error posting job Postdoctoral Researcher - Aerosols and hydroclimate risk: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2025-12-19T20:24:38.634Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2025-12-19T20:24:43.135Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_affb5d98-onto_careers-JID_2c92c356-1_r-4671 (posted within 7 days)
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_9afec196-group_req_0000045022-1 (posted within 7 days)
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_40a990de-scholar_req_0000053661 (posted within 7 days)
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_a8e5e11b-ligo_req_0000062439-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_fff21582-engineer_r2700 (posted within 7 days)
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_c1126351-fellow_r115210-1 (posted within 7 days)
[2025-12-19T20:24:43.136Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ad7587c0-detail (posted within 7 days)
[2025-12-19T20:24:43.137Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2fd3a206 (posted within 7 days)
[2025-12-19T20:24:43.139Z] [BOT] ✅ Loaded pending queue: 361 total (341 pending, 20 enriched, 0 posted)
[2025-12-19T20:24:43.145Z] [BOT] ✅ Saved pending queue: 361 total (341 pending, 12 enriched, 8 posted)
[2025-12-19T20:24:43.145Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T20:24:43.187Z] [BOT] 📂 Loaded 633 existing routing entries
[2025-12-19T20:24:43.230Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-19T20:24:43.230Z] [BOT] New entries: 10
   Total entries: 643
   Timestamp: 2025-12-19T20:24:43.227Z
[2025-12-19T20:24:43.231Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T20:24:43.231Z] [BOT] Total attempts: 20
   Successful: 15
   Failed: 5
   Skipped: 0
[2025-12-19T20:24:43.231Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 8
   Top channels:
[2025-12-19T20:24:43.231Z] [BOT] 1. #💻・remote-usa: 4 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🦢・los-angeles: 1 posts
[2025-12-19T20:24:43.231Z] [BOT] [STATS] Channel stats saved
[2025-12-19T20:24:45.244Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Researcher - Aerosols and hydroclimate risk: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Researcher - Aerosols and hydroclimate risk
- [BOT ERROR] ❌ Error posting job Postdoctoral Researcher - Aerosols and hydroclimate risk: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*