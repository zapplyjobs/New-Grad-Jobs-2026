# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T20:43:01.456Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T20:42:12.016Z] ========================================
[2026-01-16T20:42:12.018Z] Discord Bot Execution Log
[2026-01-16T20:42:12.018Z] Environment: GitHub Actions
[2026-01-16T20:42:12.018Z] Node Version: v20.19.6
[2026-01-16T20:42:12.018Z] ========================================
[2026-01-16T20:42:12.018Z] Environment Variables Check:
[2026-01-16T20:42:12.018Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T20:42:12.018Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.018Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T20:42:12.018Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T20:42:12.018Z] 
Multi-Channel Configuration:
[2026-01-16T20:42:12.018Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.018Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.018Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T20:42:12.019Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T20:42:12.019Z] 
Data Files Check:
[2026-01-16T20:42:12.019Z] .github/data/new_jobs.json: ✅ Exists (10 items, 11501 bytes)
[2026-01-16T20:42:12.028Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1137088 bytes)
[2026-01-16T20:42:12.028Z] 
========================================
[2026-01-16T20:42:12.028Z] Starting Enhanced Discord Bot...
[2026-01-16T20:42:12.028Z] ========================================
[2026-01-16T20:42:12.483Z] [BOT] ✅ Loaded V2 database: 2098 jobs
[2026-01-16T20:42:13.324Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T20:42:13.324Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T20:42:13.324Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T20:42:13.473Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Nodal
[2026-01-16T20:42:13.476Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T20:42:13.476Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T20:42:13.476Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T20:42:13.477Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T20:42:13.477Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T20:42:13.477Z] [BOT] - Software Engineer – New Grad @ ORG_0c79a9c2 Intuition: ann arbor, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T20:42:13.481Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T20:42:13.482Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1bb5b63e
[2026-01-16T20:42:13.482Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:13.498Z] [BOT ERROR] (node:3410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T20:42:13.745Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1bb5b63e in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_1bb5b63e
[2026-01-16T20:42:15.499Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1bb5b63e in #💻・remote-usa
[2026-01-16T20:42:15.499Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T20:42:17.000Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_1bb5b63e (instance #1)
[2026-01-16T20:42:17.000Z] [BOT] 💾 BEFORE ARCHIVING: 2099 jobs in database
[2026-01-16T20:42:17.002Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T20:42:17.006Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T20:42:17.006Z] [BOT] ✅ Archiving complete: 1 archived, 2098 active
[2026-01-16T20:42:17.019Z] [BOT] 💾 Saved posted_jobs.json: 2098 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:17.019Z] [BOT] 📍 [ROUTING] "Cloud Engineer Graduate" @ ORG_a5257743 Packard Enterprise
[2026-01-16T20:42:17.019Z] [BOT] Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:17.259Z] [BOT] ✅ Created forum post: 🏢 Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
  ✅ Industry: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-16T20:42:18.999Z] [BOT] ✅ Created forum post: 🏢 Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:42:20.501Z] [BOT] 💾 Marked as posted: Cloud Engineer Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-16T20:42:20.501Z] [BOT] 💾 BEFORE ARCHIVING: 2099 jobs in database
[2026-01-16T20:42:20.503Z] [BOT] ✅ No jobs to archive (all 2099 jobs within 7-day window)
[2026-01-16T20:42:20.515Z] [BOT] 💾 Saved posted_jobs.json: 2099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:20.515Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_61859c65 Learning
   Category: TECH (matched: "software")
[2026-01-16T20:42:20.515Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:20.781Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_61859c65 Learning in #💻・tech-jobs
[2026-01-16T20:42:20.781Z] [BOT] ✅ Industry: Software Engineer @ ORG_61859c65 Learning
[2026-01-16T20:42:22.734Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_61859c65 Learning in #🦢・los-angeles
[2026-01-16T20:42:22.734Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T20:42:24.236Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_61859c65 Learning (instance #1)
[2026-01-16T20:42:24.236Z] [BOT] 💾 BEFORE ARCHIVING: 2100 jobs in database
[2026-01-16T20:42:24.238Z] [BOT] ✅ No jobs to archive (all 2100 jobs within 7-day window)
[2026-01-16T20:42:24.254Z] [BOT] 💾 Saved posted_jobs.json: 2100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:24.255Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ interface.ai
   Category: TECH (matched: "software")
[2026-01-16T20:42:24.255Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:24.482Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ interface.ai in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ interface.ai
[2026-01-16T20:42:26.204Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ interface.ai in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:42:27.706Z] [BOT] 💾 Marked as posted: Software Engineer I @ interface.ai (instance #1)
[2026-01-16T20:42:27.706Z] [BOT] 💾 BEFORE ARCHIVING: 2101 jobs in database
[2026-01-16T20:42:27.708Z] [BOT] ✅ No jobs to archive (all 2101 jobs within 7-day window)
[2026-01-16T20:42:27.725Z] [BOT] 💾 Saved posted_jobs.json: 2101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:27.725Z] [BOT] 📍 [ROUTING] "Technology Platform Associate" @ ORG_4b95ce62 Capital Bank
[2026-01-16T20:42:27.725Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:27.935Z] [BOT] ✅ Created forum post: 🏢 Technology Platform Associate @ ORG_4b95ce62 Capital Bank in #💻・tech-jobs
  ✅ Industry: Technology Platform Associate @ ORG_4b95ce62 Capital Bank
[2026-01-16T20:42:29.755Z] [BOT] ✅ Created forum post: 🏢 Technology Platform Associate @ ORG_4b95ce62 Capital Bank in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:42:31.257Z] [BOT] 💾 Marked as posted: Technology Platform Associate @ ORG_4b95ce62 Capital Bank (instance #1)
[2026-01-16T20:42:31.257Z] [BOT] 💾 BEFORE ARCHIVING: 2102 jobs in database
[2026-01-16T20:42:31.258Z] [BOT] ✅ No jobs to archive (all 2102 jobs within 7-day window)
[2026-01-16T20:42:31.271Z] [BOT] 💾 Saved posted_jobs.json: 2102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:31.272Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Search - Usds" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-16T20:42:31.272Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:31.448Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb
[2026-01-16T20:42:33.336Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:42:34.837Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate - Search - Usds @ ORG_1bb6fcfb (instance #1)
[2026-01-16T20:42:34.837Z] [BOT] 💾 BEFORE ARCHIVING: 2103 jobs in database
[2026-01-16T20:42:34.839Z] [BOT] ✅ No jobs to archive (all 2103 jobs within 7-day window)
[2026-01-16T20:42:34.853Z] [BOT] 💾 Saved posted_jobs.json: 2103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:34.853Z] [BOT] 📍 [ROUTING] "Software Engineer, Communications Platform" @ ORG_f89f8538
   Category: TECH (matched: "software")
[2026-01-16T20:42:34.853Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:42:35.092Z] [BOT] ✅ Created forum post: ⚡ Software Engineer, Communications Platform @ ORG_f89f8538 in #💻・tech-jobs
  ✅ Industry: Software Engineer, Communications Platform @ ORG_f89f8538
[2026-01-16T20:42:36.802Z] [BOT] ✅ Created forum post: ⚡ Software Engineer, Communications Platform @ ORG_f89f8538 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:42:38.304Z] [BOT] 💾 Marked as posted: Software Engineer, Communications Platform @ ORG_f89f8538 (instance #1)
[2026-01-16T20:42:38.304Z] [BOT] 💾 BEFORE ARCHIVING: 2104 jobs in database
[2026-01-16T20:42:38.305Z] [BOT] ✅ No jobs to archive (all 2104 jobs within 7-day window)
[2026-01-16T20:42:38.318Z] [BOT] 💾 Saved posted_jobs.json: 2104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:41.319Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
📍 [ROUTING] "Data Scientist I" @ ORG_ab43fc6e
[2026-01-16T20:42:41.319Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T20:42:41.576Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I @ ORG_ab43fc6e in #📈・JID_fb739488
[2026-01-16T20:42:41.576Z] [BOT] ✅ Industry: Data Scientist I @ ORG_ab43fc6e
[2026-01-16T20:42:43.359Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I @ ORG_ab43fc6e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T20:42:44.860Z] [BOT] 💾 Marked as posted: Data Scientist I @ ORG_ab43fc6e (instance #1)
[2026-01-16T20:42:44.860Z] [BOT] 💾 BEFORE ARCHIVING: 2105 jobs in database
[2026-01-16T20:42:44.862Z] [BOT] ✅ No jobs to archive (all 2105 jobs within 7-day window)
[2026-01-16T20:42:44.875Z] [BOT] 💾 Saved posted_jobs.json: 2105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:44.875Z] [BOT] 📍 [ROUTING] "Data Science Graduate" @ ORG_a5257743 Packard Enterprise
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T20:42:45.112Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate @ ORG_a5257743 Packard Enterprise in #📈・JID_fb739488
  ✅ Industry: Data Science Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-16T20:42:47.003Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate @ ORG_a5257743 Packard Enterprise in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:42:48.504Z] [BOT] 💾 Marked as posted: Data Science Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-16T20:42:48.504Z] [BOT] 💾 BEFORE ARCHIVING: 2106 jobs in database
[2026-01-16T20:42:48.505Z] [BOT] ✅ No jobs to archive (all 2106 jobs within 7-day window)
[2026-01-16T20:42:48.523Z] [BOT] 💾 Saved posted_jobs.json: 2106 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:42:51.525Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T20:42:51.525Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T20:42:51.525Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T20:42:51.709Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T20:42:51.709Z] [BOT] ❌ Industry post failed: Machine Learning Graduate
⚠️  Channel full error count: 1/5
[2026-01-16T20:42:53.366Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-16T20:42:53.366Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T20:42:57.868Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T20:42:57.868Z] [BOT] ⏭️  Skipping duplicate: JID_17e7bfe6 (posted within 7 days)
[2026-01-16T20:42:57.869Z] [BOT] ⏭️  Skipping duplicate: JID_f4707d54-graduate_1192968-1 (posted within 7 days)
[2026-01-16T20:42:57.869Z] [BOT] ⏭️  Skipping duplicate: JID_0f927b80 (posted within 7 days)
[2026-01-16T20:42:57.869Z] [BOT] ⏭️  Skipping duplicate: JID_5dcdee45 (posted within 7 days)
[2026-01-16T20:42:57.869Z] [BOT] ⏭️  Skipping duplicate: JID_af57084e-i_r0059612 (posted within 7 days)
[2026-01-16T20:42:57.870Z] [BOT] ⏭️  Skipping duplicate: JID_d31f57a6-graduate_1192963 (posted within 7 days)
⏭️  Skipping duplicate: JID_9bbbba94-associate_jr104228 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_2fd3a206 (posted within 7 days)
⏭️  Skipping duplicate: JID_accb44e8 (posted within 7 days)
[2026-01-16T20:42:58.017Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[2026-01-16T20:42:58.184Z] [BOT] ✅ Saved pending queue: 2784 total (2764 pending, 11 enriched, 9 posted)
[2026-01-16T20:42:58.184Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T20:42:58.244Z] [BOT] 📂 Loaded 4335 existing routing entries
[2026-01-16T20:42:58.307Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4345
[2026-01-16T20:42:58.307Z] [BOT] Timestamp: 2026-01-16T20:42:58.291Z
[2026-01-16T20:42:58.308Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T20:42:58.308Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T20:42:58.308Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤠・austin: 3 posts
[2026-01-16T20:42:58.308Z] [BOT] 3. #🌉・san-francisco: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #📈・JID_fb739488: 2 posts
[STATS] Channel stats saved
[2026-01-16T20:43:00.327Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Graduate
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*