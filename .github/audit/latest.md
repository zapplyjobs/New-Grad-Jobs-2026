# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T03:47:54.081Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T03:47:13.857Z] ========================================
[2026-01-17T03:47:13.859Z] Discord Bot Execution Log
[2026-01-17T03:47:13.859Z] Environment: GitHub Actions
[2026-01-17T03:47:13.859Z] Node Version: v20.19.6
[2026-01-17T03:47:13.859Z] ========================================
[2026-01-17T03:47:13.859Z] Environment Variables Check:
[2026-01-17T03:47:13.859Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T03:47:13.859Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.859Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T03:47:13.859Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T03:47:13.859Z] 
Multi-Channel Configuration:
[2026-01-17T03:47:13.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T03:47:13.860Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T03:47:13.860Z] 
Data Files Check:
[2026-01-17T03:47:13.861Z] .github/data/new_jobs.json: ✅ Exists (10 items, 14701 bytes)
[2026-01-17T03:47:13.869Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1211911 bytes)
[2026-01-17T03:47:13.869Z] 
========================================
[2026-01-17T03:47:13.869Z] Starting Enhanced Discord Bot...
[2026-01-17T03:47:13.869Z] ========================================
[2026-01-17T03:47:14.400Z] [BOT] ✅ Loaded V2 database: 2237 jobs
[2026-01-17T03:47:15.097Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T03:47:15.098Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T03:47:15.098Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T03:47:15.209Z] [BOT] ✅ Loaded pending queue: 2819 total (2799 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer - Search E-Commerce at TikTok
[2026-01-17T03:47:15.213Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T03:47:15.213Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T03:47:15.213Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T03:47:15.214Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-17T03:47:15.214Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T03:47:15.214Z] [BOT] - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T03:47:15.216Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-17T03:47:15.218Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Search E-Commerce" @ ORG_1bb6fcfb
[2026-01-17T03:47:15.218Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T03:47:15.218Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T03:47:15.235Z] [BOT ERROR] (node:2444) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T03:47:15.551Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb
[2026-01-17T03:47:17.421Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T03:47:18.922Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb (instance #1)
[2026-01-17T03:47:18.922Z] [BOT] 💾 BEFORE ARCHIVING: 2238 jobs in database
[2026-01-17T03:47:18.924Z] [BOT] ✅ No jobs to archive (all 2238 jobs within 7-day window)
[2026-01-17T03:47:18.940Z] [BOT] 💾 Saved posted_jobs.json: 2238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:47:18.941Z] [BOT] 📍 [ROUTING] "Research Scientist, Robotics Research" @ ORG_0890f456
[2026-01-17T03:47:18.942Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T03:47:19.277Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Robotics Research @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-17T03:47:19.277Z] [BOT] ✅ Industry: Research Scientist, Robotics Research @ ORG_0890f456
[2026-01-17T03:47:21.002Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Robotics Research @ ORG_0890f456 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T03:47:22.504Z] [BOT] 💾 Marked as posted: Research Scientist, Robotics Research @ ORG_0890f456 (instance #1)
[2026-01-17T03:47:22.504Z] [BOT] 💾 BEFORE ARCHIVING: 2239 jobs in database
[2026-01-17T03:47:22.506Z] [BOT] ✅ No jobs to archive (all 2239 jobs within 7-day window)
[2026-01-17T03:47:22.519Z] [BOT] 💾 Saved posted_jobs.json: 2239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:47:22.519Z] [BOT] 📍 [ROUTING] "Software Developer I - AI Developer" @ ORG_722b29f2 State University
[2026-01-17T03:47:22.519Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T03:47:22.519Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T03:47:22.900Z] [BOT] ✅ Created forum post: 🏢 Software Developer I - AI Developer @ ORG_722b29f2 State University in #🤖・ai-jobs
[2026-01-17T03:47:22.901Z] [BOT] ✅ Industry: Software Developer I - AI Developer @ ORG_722b29f2 State University
[2026-01-17T03:47:24.618Z] [BOT] ✅ Created forum post: 🏢 Software Developer I - AI Developer @ ORG_722b29f2 State University in #💻・remote-usa
[2026-01-17T03:47:24.618Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T03:47:26.119Z] [BOT] 💾 Marked as posted: Software Developer I - AI Developer @ ORG_722b29f2 State University (instance #1)
[2026-01-17T03:47:26.119Z] [BOT] 💾 BEFORE ARCHIVING: 2240 jobs in database
[2026-01-17T03:47:26.120Z] [BOT] ✅ No jobs to archive (all 2240 jobs within 7-day window)
[2026-01-17T03:47:26.137Z] [BOT] 💾 Saved posted_jobs.json: 2240 active jobs
[2026-01-17T03:47:26.137Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T03:47:26.138Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Search Local Services team" @ ORG_1bb6fcfb
[2026-01-17T03:47:26.138Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T03:47:26.378Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T03:47:26.378Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb
[2026-01-17T03:47:28.333Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🌧️・seattle
[2026-01-17T03:47:28.333Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T03:47:29.835Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb (instance #1)
[2026-01-17T03:47:29.835Z] [BOT] 💾 BEFORE ARCHIVING: 2241 jobs in database
[2026-01-17T03:47:29.836Z] [BOT] ✅ No jobs to archive (all 2241 jobs within 7-day window)
[2026-01-17T03:47:29.851Z] [BOT] 💾 Saved posted_jobs.json: 2241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:47:29.852Z] [BOT] 📍 [ROUTING] "Graduate Researcher - Applied Machine Learning - Enterprise" @ ORG_08c9a13c
[2026-01-17T03:47:29.852Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T03:47:30.229Z] [BOT] ✅ Created forum post: 🏢 Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c
[2026-01-17T03:47:31.930Z] [BOT] ✅ Created forum post: 🏢 Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T03:47:33.432Z] [BOT] 💾 Marked as posted: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c (instance #1)
[2026-01-17T03:47:33.432Z] [BOT] 💾 BEFORE ARCHIVING: 2242 jobs in database
[2026-01-17T03:47:33.434Z] [BOT] ✅ No jobs to archive (all 2242 jobs within 7-day window)
[2026-01-17T03:47:33.448Z] [BOT] 💾 Saved posted_jobs.json: 2242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:47:36.449Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T03:47:36.450Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI-Driven Data Science & Analytics)" @ ORG_5c4c8ca4
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T03:47:36.450Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T03:47:36.624Z] [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ Celonis',
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
[2026-01-17T03:47:36.624Z] [BOT] ❌ Industry post failed: Associate Value Engineer (AI-Driven Data Science & Analytics)
⚠️  Channel full error count: 1/5
[2026-01-17T03:47:38.282Z] [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ Celonis',
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
[2026-01-17T03:47:38.282Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T03:47:42.784Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T03:47:42.784Z] [BOT] 📍 [ROUTING] "Associate Engineer, Software" @ ORG_1c0f1132 Carribean Group
   Category: TECH (matched: "software")
[2026-01-17T03:47:42.785Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:47:42.948Z] [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group',
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
[2026-01-17T03:47:42.949Z] [BOT] ❌ Industry post failed: Associate Engineer, Software
⚠️  Channel full error count: 2/5
[2026-01-17T03:47:44.585Z] [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group',
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
[2026-01-17T03:47:44.585Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T03:47:46.086Z] [BOT] 📍 [ROUTING] "Junior Full Stack Software Engineer" @ ORG_b891e1e7 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:47:46.280Z] [BOT ERROR] ❌ Error posting job Junior Full Stack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies',
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
[2026-01-17T03:47:46.280Z] [BOT] ❌ Industry post failed: Junior Full Stack Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-17T03:47:47.916Z] [BOT ERROR] ❌ Error posting job Junior Full Stack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies',
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
[2026-01-17T03:47:47.916Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T03:47:49.418Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-01-17T03:47:49.418Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:47:49.545Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer @ Oracle',
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
[2026-01-17T03:47:49.545Z] [BOT] ❌ Industry post failed: Undergrad Software Engineer
⚠️  Channel full error count: 4/5
[2026-01-17T03:47:51.187Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer @ Oracle',
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
[2026-01-17T03:47:51.187Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T03:47:52.688Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer I" @ ORG_76725f91
   Category: TECH (matched: "software")
[2026-01-17T03:47:52.688Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:47:52.840Z] [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward Deployed Software Engineer I @ Maxar',
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
[2026-01-17T03:47:52.841Z] [BOT] ❌ Industry post failed: Forward Deployed Software Engineer I
⚠️  Channel full error count: 5/5
[2026-01-17T03:47:52.841Z] [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
[2026-01-17T03:47:52.841Z] [BOT] 💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T03:47:52.842Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T03:47:52.842Z] [BOT] Total attempts: 19
   Successful: 10
   Failed: 9
   Skipped: 0
[2026-01-17T03:47:52.842Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T03:47:52.842Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-17T03:47:52.842Z] [BOT] 2. #🌧️・seattle: 3 posts
     3. #💻・remote-usa: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-17T03:47:52.842Z] [BOT] [STATS] Channel stats saved
[2026-01-17T03:47:52.843Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T03:47:52.857Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2444) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Value Engineer (AI-Driven Data Science & Analytics)
- [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Engineer, Software
- [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Junior Full Stack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Full Stack Software Engineer
- [BOT ERROR] ❌ Error posting job Junior Full Stack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Undergrad Software Engineer
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Forward Deployed Software Engineer I
- [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*