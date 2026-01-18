# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T08:55:53.640Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T08:54:59.339Z] ========================================
[2026-01-18T08:54:59.341Z] Discord Bot Execution Log
[2026-01-18T08:54:59.341Z] Environment: GitHub Actions
[2026-01-18T08:54:59.341Z] Node Version: v20.19.6
[2026-01-18T08:54:59.341Z] ========================================
[2026-01-18T08:54:59.341Z] Environment Variables Check:
[2026-01-18T08:54:59.341Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T08:54:59.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T08:54:59.342Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T08:54:59.342Z] 
Multi-Channel Configuration:
[2026-01-18T08:54:59.342Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.343Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T08:54:59.343Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T08:54:59.343Z] 
Data Files Check:
[2026-01-18T08:54:59.344Z] .github/data/new_jobs.json: ✅ Exists (10 items, 100697 bytes)
[2026-01-18T08:54:59.354Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1443528 bytes)
[2026-01-18T08:54:59.354Z] 
========================================
[2026-01-18T08:54:59.354Z] Starting Enhanced Discord Bot...
[2026-01-18T08:54:59.354Z] ========================================
[2026-01-18T08:54:59.889Z] [BOT] ✅ Loaded V2 database: 2664 jobs
[2026-01-18T08:55:00.893Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T08:55:00.893Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T08:55:00.893Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T08:55:01.011Z] [BOT] ✅ Loaded pending queue: 2845 total (2825 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Sales Engineer at datadog
[2026-01-18T08:55:01.015Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T08:55:01.015Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T08:55:01.016Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T08:55:01.016Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T08:55:01.016Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T08:55:01.021Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-18T08:55:01.022Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer" @ datadog
[2026-01-18T08:55:01.022Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:55:01.027Z] [BOT ERROR] (node:2393) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T08:55:01.418Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer @ datadog in #💲・sales-jobs
  ✅ Industry: Senior Sales Engineer @ datadog
[2026-01-18T08:55:03.317Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer @ datadog in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T08:55:04.818Z] [BOT] 💾 Marked as posted: Senior Sales Engineer @ datadog (instance #1)
[2026-01-18T08:55:04.818Z] [BOT] 💾 BEFORE ARCHIVING: 2665 jobs in database
[2026-01-18T08:55:04.820Z] [BOT] ✅ No jobs to archive (all 2665 jobs within 7-day window)
[2026-01-18T08:55:04.841Z] [BOT] 💾 Saved posted_jobs.json: 2665 active jobs
[2026-01-18T08:55:04.841Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:04.841Z] [BOT] 📍 [ROUTING] "Revenue Systems Solution Architect" @ anthropic
[2026-01-18T08:55:04.842Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:55:05.091Z] [BOT] ✅ Created forum post: 🏢 Revenue Systems Solution Architect @ anthropic in #💲・sales-jobs
  ✅ Industry: Revenue Systems Solution Architect @ anthropic
[2026-01-18T08:55:06.862Z] [BOT] ✅ Created forum post: 🏢 Revenue Systems Solution Architect @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:55:08.363Z] [BOT] 💾 Marked as posted: Revenue Systems Solution Architect @ anthropic (instance #1)
[2026-01-18T08:55:08.363Z] [BOT] 💾 BEFORE ARCHIVING: 2666 jobs in database
[2026-01-18T08:55:08.365Z] [BOT] ✅ No jobs to archive (all 2666 jobs within 7-day window)
[2026-01-18T08:55:08.381Z] [BOT] 💾 Saved posted_jobs.json: 2666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:08.381Z] [BOT] 📍 [ROUTING] "Senior Account Executive" @ duolingo
   Category: SALES (matched: "sales")
[2026-01-18T08:55:08.382Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:55:08.599Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive @ duolingo in #💲・sales-jobs
  ✅ Industry: Senior Account Executive @ duolingo
[2026-01-18T08:55:10.503Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive @ duolingo in #🗽・new-york
[2026-01-18T08:55:10.503Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T08:55:12.004Z] [BOT] 💾 Marked as posted: Senior Account Executive @ duolingo (instance #1)
[2026-01-18T08:55:12.005Z] [BOT] 💾 BEFORE ARCHIVING: 2667 jobs in database
[2026-01-18T08:55:12.006Z] [BOT] ✅ No jobs to archive (all 2667 jobs within 7-day window)
[2026-01-18T08:55:12.025Z] [BOT] 💾 Saved posted_jobs.json: 2667 active jobs
[2026-01-18T08:55:12.025Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:12.026Z] [BOT] 📍 [ROUTING] "Manager I, Customer Success" @ samsara
[2026-01-18T08:55:12.026Z] [BOT] Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:55:12.579Z] [BOT] ✅ Created forum post: 🏢 Manager I, Customer Success @ samsara in #💲・sales-jobs
[2026-01-18T08:55:12.580Z] [BOT] ✅ Industry: Manager I, Customer Success @ samsara
[2026-01-18T08:55:14.394Z] [BOT] ✅ Created forum post: 🏢 Manager I, Customer Success @ samsara in #🗽・new-york
[2026-01-18T08:55:14.394Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T08:55:15.896Z] [BOT] 💾 Marked as posted: Manager I, Customer Success @ samsara (instance #1)
[2026-01-18T08:55:15.896Z] [BOT] 💾 BEFORE ARCHIVING: 2668 jobs in database
[2026-01-18T08:55:15.898Z] [BOT] ✅ No jobs to archive (all 2668 jobs within 7-day window)
[2026-01-18T08:55:15.916Z] [BOT] 💾 Saved posted_jobs.json: 2668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:18.916Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-18T08:55:18.916Z] [BOT] 📍 [ROUTING] "Software Engineer - Spanner Hybrid Search" @ ORG_ce770667
[2026-01-18T08:55:18.916Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T08:55:19.135Z] [BOT] ✅ Created forum post: 🟢 Software Engineer - Spanner Hybrid Search @ ORG_ce770667 in #🤖・ai-jobs
[2026-01-18T08:55:19.135Z] [BOT] ✅ Industry: Software Engineer - Spanner Hybrid Search @ ORG_ce770667
[2026-01-18T08:55:20.910Z] [BOT] ✅ Created forum post: 🟢 Software Engineer - Spanner Hybrid Search @ ORG_ce770667 in #☀️・sunnyvale
[2026-01-18T08:55:20.910Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-18T08:55:22.411Z] [BOT] 💾 Marked as posted: Software Engineer - Spanner Hybrid Search @ ORG_ce770667 (instance #1)
[2026-01-18T08:55:22.411Z] [BOT] 💾 BEFORE ARCHIVING: 2669 jobs in database
[2026-01-18T08:55:22.413Z] [BOT] ✅ No jobs to archive (all 2669 jobs within 7-day window)
[2026-01-18T08:55:22.428Z] [BOT] 💾 Saved posted_jobs.json: 2669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:25.430Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T08:55:25.430Z] [BOT] 📍 [ROUTING] "Strategic Sourcing Manager" @ discord
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T08:55:25.577Z] [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Sourcing Manager @ discord',
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
[2026-01-18T08:55:25.577Z] [BOT] ❌ Industry post failed: Strategic Sourcing Manager
⚠️  Channel full error count: 1/5
[2026-01-18T08:55:27.244Z] [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Sourcing Manager @ discord',
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
[2026-01-18T08:55:27.244Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T08:55:28.744Z] [BOT] 📍 [ROUTING] "Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift" @ ORG_66ea81b5 Health
   Category: MARKETING (matched: "growth")
[2026-01-18T08:55:28.745Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T08:55:28.994Z] [BOT] ✅ Created forum post: 🏢 Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health in #📣・marketing-jobs
  ✅ Industry: Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health
[2026-01-18T08:55:30.715Z] [BOT] ✅ Created forum post: 🏢 Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T08:55:32.215Z] [BOT] 💾 Marked as posted: Mental Health Associate 1 - NCH Behavioral Health PHP/IOP-Day Shift @ ORG_66ea81b5 Health (instance #1)
[2026-01-18T08:55:32.216Z] [BOT] 💾 BEFORE ARCHIVING: 2670 jobs in database
[2026-01-18T08:55:32.218Z] [BOT] ✅ No jobs to archive (all 2670 jobs within 7-day window)
[2026-01-18T08:55:32.238Z] [BOT] 💾 Saved posted_jobs.json: 2670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:35.239Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T08:55:35.239Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_0a732051
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T08:55:35.458Z] [BOT ERROR] ❌ Error posting job Associate Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Data Scientist @ Haleon',
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
[2026-01-18T08:55:35.458Z] [BOT] ❌ Industry post failed: Associate Data Scientist
⚠️  Channel full error count: 1/5
[2026-01-18T08:55:36.960Z] [BOT] 📍 [ROUTING] "Digital Data Analyst" @ ORG_85937e82 Inc.
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-18T08:55:36.960Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T08:55:37.276Z] [BOT] ✅ Created forum post: 🏢 Digital Data Analyst @ ORG_85937e82 Inc. in #📈・JID_fb739488
  ✅ Industry: Digital Data Analyst @ ORG_85937e82 Inc.
[2026-01-18T08:55:38.966Z] [BOT ERROR] ❌ Error posting job Digital Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Data Analyst @ ORG_85937e82 Inc.',
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
[2026-01-18T08:55:38.966Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-18T08:55:40.467Z] [BOT] 💾 Marked as posted: Digital Data Analyst @ ORG_85937e82 Inc. (instance #1)
[2026-01-18T08:55:40.467Z] [BOT] 💾 BEFORE ARCHIVING: 2671 jobs in database
[2026-01-18T08:55:40.469Z] [BOT] ✅ No jobs to archive (all 2671 jobs within 7-day window)
[2026-01-18T08:55:40.489Z] [BOT] 💾 Saved posted_jobs.json: 2671 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:43.490Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T08:55:43.490Z] [BOT] 📍 [ROUTING] "Baseball Technical Operations Coordinator" @ Hawk-Eye Innovations
[2026-01-18T08:55:43.490Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T08:55:43.668Z] [BOT ERROR] ❌ Error posting job Baseball Technical Operations Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Baseball Technical Operations Coordinator @ Hawk-Eye Innovations',
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
[2026-01-18T08:55:43.668Z] [BOT] ❌ Industry post failed: Baseball Technical Operations Coordinator
⚠️  Channel full error count: 1/5
[2026-01-18T08:55:45.473Z] [BOT] ✅ Created forum post: 🏢 Baseball Technical Operations Coordinator @ Hawk-Eye Innovations in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:55:46.974Z] [BOT] 💾 Marked as posted: Baseball Technical Operations Coordinator @ Hawk-Eye Innovations (instance #1)
[2026-01-18T08:55:46.974Z] [BOT] 💾 BEFORE ARCHIVING: 2672 jobs in database
[2026-01-18T08:55:46.976Z] [BOT] ✅ No jobs to archive (all 2672 jobs within 7-day window)
[2026-01-18T08:55:46.994Z] [BOT] 💾 Saved posted_jobs.json: 2672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:55:49.994Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-18T08:55:49.995Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-18T08:55:49.995Z] [BOT] ⏭️  Skipping duplicate: JID_6bb08f4f-CH_37de5e42 (posted within 7 days)
[2026-01-18T08:55:49.995Z] [BOT] ⏭️  Skipping duplicate: JID_f3851771 (posted within 7 days)
[2026-01-18T08:55:49.996Z] [BOT] ⏭️  Skipping duplicate: JID_f07aaf1d-analyst_r0000335361 (posted within 7 days)
⏭️  Skipping duplicate: JID_1fe49bb0 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a41a8c4 (posted within 7 days)
[2026-01-18T08:55:49.996Z] [BOT] ⏭️  Skipping duplicate: JID_c686b86b (posted within 7 days)
[2026-01-18T08:55:49.996Z] [BOT] ⏭️  Skipping duplicate: JID_b6fd54f5-shift_r37241 (posted within 7 days)
[2026-01-18T08:55:50.108Z] [BOT] ✅ Loaded pending queue: 2845 total (2825 pending, 20 enriched, 0 posted)
[2026-01-18T08:55:50.286Z] [BOT] ✅ Saved pending queue: 2845 total (2825 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T08:55:50.348Z] [BOT] 📂 Loaded 4825 existing routing entries
[2026-01-18T08:55:50.416Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T08:55:50.417Z] [BOT] Total entries: 4835
   Timestamp: 2026-01-18T08:55:50.396Z
[2026-01-18T08:55:50.417Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
[2026-01-18T08:55:50.417Z] [BOT] Successful: 14
   Failed: 5
   Skipped: 0
[2026-01-18T08:55:50.417Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 9
   Top channels:
     1. #💲・sales-jobs: 4 posts
     2. #🌆・chicago: 2 posts
[2026-01-18T08:55:50.418Z] [BOT] 3. #🗽・new-york: 2 posts
     4. #🌉・san-francisco: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-18T08:55:50.418Z] [BOT] [STATS] Channel stats saved
[2026-01-18T08:55:52.441Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2393) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Strategic Sourcing Manager
- [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Data Scientist
- [BOT ERROR] ❌ Error posting job Digital Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Baseball Technical Operations Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Baseball Technical Operations Coordinator
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*