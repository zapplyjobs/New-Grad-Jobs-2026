# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T21:08:31.207Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T21:07:39.401Z] ========================================
[2026-01-16T21:07:39.403Z] Discord Bot Execution Log
[2026-01-16T21:07:39.403Z] Environment: GitHub Actions
[2026-01-16T21:07:39.403Z] Node Version: v20.19.6
[2026-01-16T21:07:39.403Z] ========================================
[2026-01-16T21:07:39.403Z] Environment Variables Check:
[2026-01-16T21:07:39.403Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T21:07:39.403Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.403Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T21:07:39.403Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T21:07:39.403Z] 
Multi-Channel Configuration:
[2026-01-16T21:07:39.403Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T21:07:39.404Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T21:07:39.404Z] 
Data Files Check:
[2026-01-16T21:07:39.405Z] .github/data/new_jobs.json: ✅ Exists (10 items, 22635 bytes)
[2026-01-16T21:07:39.412Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1141720 bytes)
[2026-01-16T21:07:39.412Z] 
========================================
[2026-01-16T21:07:39.413Z] Starting Enhanced Discord Bot...
[2026-01-16T21:07:39.413Z] ========================================
[2026-01-16T21:07:39.941Z] [BOT] ✅ Loaded V2 database: 2106 jobs
[2026-01-16T21:07:40.553Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T21:07:40.553Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T21:07:40.554Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T21:07:40.671Z] [BOT] ✅ Loaded pending queue: 2786 total (2766 pending, 20 enriched, 0 posted)
[2026-01-16T21:07:40.671Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Graduate at ByteDance
[2026-01-16T21:07:40.675Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T21:07:40.675Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T21:07:40.676Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T21:07:40.677Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T21:07:40.677Z] [BOT] (3 grouped as same job with different locations)
[2026-01-16T21:07:40.677Z] [BOT] 📍 3 jobs with multiple locations:
   - Software Engineer – New Grad @ ORG_0c79a9c2 Intuition: ann arbor, washington
   - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T21:07:40.681Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T21:07:40.682Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
[2026-01-16T21:07:40.682Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:07:40.700Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T21:07:40.815Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-16T21:07:40.816Z] [BOT] ❌ Industry post failed: Machine Learning Graduate
⚠️  Channel full error count: 1/5
[2026-01-16T21:07:42.500Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🌧️・seattle
[2026-01-16T21:07:42.500Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T21:07:44.003Z] [BOT] 💾 Marked as posted: Machine Learning Graduate @ ORG_08c9a13c (instance #1)
[2026-01-16T21:07:44.003Z] [BOT] 💾 BEFORE ARCHIVING: 2107 jobs in database
[2026-01-16T21:07:44.005Z] [BOT] ✅ No jobs to archive (all 2107 jobs within 7-day window)
[2026-01-16T21:07:44.022Z] [BOT] 💾 Saved posted_jobs.json: 2107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:07:44.022Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b2c12453inal
[2026-01-16T21:07:44.022Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:07:44.314Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b2c12453inal in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_b2c12453inal
[2026-01-16T21:07:46.356Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b2c12453inal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T21:07:47.858Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b2c12453inal (instance #1)
[2026-01-16T21:07:47.858Z] [BOT] 💾 BEFORE ARCHIVING: 2108 jobs in database
[2026-01-16T21:07:47.860Z] [BOT] ✅ No jobs to archive (all 2108 jobs within 7-day window)
[2026-01-16T21:07:47.872Z] [BOT] 💾 Saved posted_jobs.json: 2108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:07:47.872Z] [BOT] 📍 [ROUTING] "Deep Learning Software Engineer, FlashInfer" @ ORG_0890f456
[2026-01-16T21:07:47.872Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:07:47.873Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:07:48.057Z] [BOT] ✅ Created forum post: 🏢 Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456
[2026-01-16T21:07:49.972Z] [BOT] ✅ Created forum post: 🏢 Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:07:51.473Z] [BOT] 💾 Marked as posted: Deep Learning Software Engineer, FlashInfer @ ORG_0890f456 (instance #1)
[2026-01-16T21:07:51.473Z] [BOT] 💾 BEFORE ARCHIVING: 2109 jobs in database
[2026-01-16T21:07:51.475Z] [BOT] ✅ No jobs to archive (all 2109 jobs within 7-day window)
[2026-01-16T21:07:51.491Z] [BOT] 💾 Saved posted_jobs.json: 2109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:07:54.492Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-16T21:07:54.494Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Aerosols and hydroclimate risk" @ ORG_9d38443e of Texas - Austin
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-16T21:07:54.704Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin
[2026-01-16T21:07:56.448Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T21:07:57.949Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T21:07:57.949Z] [BOT] 💾 BEFORE ARCHIVING: 2110 jobs in database
[2026-01-16T21:07:57.952Z] [BOT] ✅ No jobs to archive (all 2110 jobs within 7-day window)
[2026-01-16T21:07:57.966Z] [BOT] 💾 Saved posted_jobs.json: 2110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:00.968Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T21:08:00.969Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_144d4f9a Sales
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T21:08:00.969Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T21:08:01.321Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_144d4f9a Sales in #📈・JID_fb739488
  ✅ Industry: Junior Data Engineer @ ORG_144d4f9a Sales
[2026-01-16T21:08:03.018Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_144d4f9a Sales in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T21:08:04.520Z] [BOT] 💾 Marked as posted: Junior Data Engineer @ ORG_144d4f9a Sales (instance #1)
[2026-01-16T21:08:04.521Z] [BOT] 💾 BEFORE ARCHIVING: 2111 jobs in database
[2026-01-16T21:08:04.522Z] [BOT] ✅ No jobs to archive (all 2111 jobs within 7-day window)
[2026-01-16T21:08:04.536Z] [BOT] 💾 Saved posted_jobs.json: 2111 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:04.536Z] [BOT] 📍 [ROUTING] "Data Scientist III" @ ORG_3eab285c
[2026-01-16T21:08:04.536Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T21:08:04.711Z] [BOT] ✅ Created forum post: 🏢 Data Scientist III @ ORG_3eab285c in #📈・JID_fb739488
[2026-01-16T21:08:04.711Z] [BOT] ✅ Industry: Data Scientist III @ ORG_3eab285c
[2026-01-16T21:08:06.554Z] [BOT] ✅ Created forum post: 🏢 Data Scientist III @ ORG_3eab285c in #☀️・sunnyvale
[2026-01-16T21:08:06.554Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-16T21:08:08.055Z] [BOT] 💾 Marked as posted: Data Scientist III @ ORG_3eab285c (instance #1)
[2026-01-16T21:08:08.056Z] [BOT] 💾 BEFORE ARCHIVING: 2112 jobs in database
[2026-01-16T21:08:08.057Z] [BOT] ✅ No jobs to archive (all 2112 jobs within 7-day window)
[2026-01-16T21:08:08.073Z] [BOT] 💾 Saved posted_jobs.json: 2112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:11.075Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-16T21:08:11.075Z] [BOT] 📍 [ROUTING] "Hydrogeologist" @ ORG_a7c3f52e
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:08:11.270Z] [BOT] ✅ Created forum post: 🏢 Hydrogeologist @ ORG_a7c3f52e in #💻・tech-jobs
[2026-01-16T21:08:11.270Z] [BOT] ✅ Industry: Hydrogeologist @ ORG_a7c3f52e
[2026-01-16T21:08:12.937Z] [BOT] ✅ Created forum post: 🏢 Hydrogeologist @ ORG_a7c3f52e in #💻・remote-usa
[2026-01-16T21:08:12.937Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T21:08:14.438Z] [BOT] 💾 Marked as posted: Hydrogeologist @ ORG_a7c3f52e (instance #1)
[2026-01-16T21:08:14.438Z] [BOT] 💾 BEFORE ARCHIVING: 2113 jobs in database
[2026-01-16T21:08:14.439Z] [BOT] ✅ No jobs to archive (all 2113 jobs within 7-day window)
[2026-01-16T21:08:14.456Z] [BOT] 💾 Saved posted_jobs.json: 2113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:14.456Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_0c79a9c2 Intuition
[2026-01-16T21:08:14.456Z] [BOT] Category: TECH (matched: "software")
[2026-01-16T21:08:14.456Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:08:14.777Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-01-16T21:08:14.777Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition
[2026-01-16T21:08:16.594Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-16T21:08:18.096Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition (instance #1)
[2026-01-16T21:08:18.096Z] [BOT] 💾 BEFORE ARCHIVING: 2114 jobs in database
[2026-01-16T21:08:18.097Z] [BOT] ✅ No jobs to archive (all 2114 jobs within 7-day window)
[2026-01-16T21:08:18.111Z] [BOT] 💾 Saved posted_jobs.json: 2114 active jobs
[2026-01-16T21:08:18.111Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:18.111Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition (instance #1)
[2026-01-16T21:08:18.112Z] [BOT] 💾 BEFORE ARCHIVING: 2115 jobs in database
[2026-01-16T21:08:18.113Z] [BOT] ✅ No jobs to archive (all 2115 jobs within 7-day window)
[2026-01-16T21:08:18.127Z] [BOT] 💾 Saved posted_jobs.json: 2115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:18.127Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-01-16T21:08:18.127Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:08:18.365Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
[2026-01-16T21:08:18.365Z] [BOT] ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-01-16T21:08:20.071Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:08:21.572Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7b717950 (instance #1)
[2026-01-16T21:08:21.572Z] [BOT] 💾 BEFORE ARCHIVING: 2116 jobs in database
[2026-01-16T21:08:21.574Z] [BOT] ✅ No jobs to archive (all 2116 jobs within 7-day window)
[2026-01-16T21:08:21.587Z] [BOT] 💾 Saved posted_jobs.json: 2116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:21.587Z] [BOT] 📍 [ROUTING] "Software Engineer, Notifications Platform" @ ORG_871f17ec
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:08:21.817Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Notifications Platform @ ORG_871f17ec in #💻・tech-jobs
  ✅ Industry: Software Engineer, Notifications Platform @ ORG_871f17ec
[2026-01-16T21:08:23.425Z] [BOT ERROR] ❌ Error posting job Software Engineer, Notifications Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Notifications Platform @ Whatnot',
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
[2026-01-16T21:08:23.425Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T21:08:24.925Z] [BOT] 💾 Marked as posted: Software Engineer, Notifications Platform @ ORG_871f17ec (instance #1)
[2026-01-16T21:08:24.926Z] [BOT] 💾 BEFORE ARCHIVING: 2117 jobs in database
[2026-01-16T21:08:24.927Z] [BOT] ✅ No jobs to archive (all 2117 jobs within 7-day window)
[2026-01-16T21:08:24.941Z] [BOT] 💾 Saved posted_jobs.json: 2117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:08:27.942Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T21:08:27.942Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ad7587c0-detail (posted within 7 days)
[2026-01-16T21:08:27.942Z] [BOT] ⏭️  Skipping duplicate: JID_eff0e686-risk_r_00041495 (posted within 7 days)
[2026-01-16T21:08:27.943Z] [BOT] ⏭️  Skipping duplicate: JID_a8545e6d (posted within 7 days)
[2026-01-16T21:08:27.943Z] [BOT] ⏭️  Skipping duplicate: JID_fd336081-ca_r-2251073 (posted within 7 days)
[2026-01-16T21:08:27.944Z] [BOT] ⏭️  Skipping duplicate: JID_c75afa22-cx_1-job-1001997 (posted within 7 days)
⏭️  Skipping duplicate: JID_8423e1ff (posted within 7 days)
⏭️  Skipping duplicate: JID_81691056 (posted within 7 days)
⏭️  Skipping duplicate: JID_b66a2d0c (posted within 7 days)
[2026-01-16T21:08:27.944Z] [BOT] ⏭️  Skipping duplicate: JID_71241c50 (posted within 7 days)
⏭️  Skipping duplicate: JID_2a053543-2025_jr2002086 (posted within 7 days)
[2026-01-16T21:08:28.062Z] [BOT] ✅ Loaded pending queue: 2786 total (2766 pending, 20 enriched, 0 posted)
[2026-01-16T21:08:28.237Z] [BOT] ✅ Saved pending queue: 2786 total (2766 pending, 10 enriched, 10 posted)
[2026-01-16T21:08:28.237Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T21:08:28.296Z] [BOT] 📂 Loaded 4345 existing routing entries
[2026-01-16T21:08:28.366Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4355
   Timestamp: 2026-01-16T21:08:28.345Z
[2026-01-16T21:08:28.366Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T21:08:28.367Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T21:08:28.367Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 11
   Top channels:
[2026-01-16T21:08:28.367Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #📈・JID_fb739488: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-16T21:08:28.367Z] [BOT] [STATS] Channel stats saved
[2026-01-16T21:08:30.393Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Graduate
- [BOT ERROR] ❌ Error posting job Software Engineer, Notifications Platform: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*