# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T07:02:27.403Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T07:01:39.527Z] ========================================
[2026-01-16T07:01:39.529Z] Discord Bot Execution Log
[2026-01-16T07:01:39.529Z] Environment: GitHub Actions
[2026-01-16T07:01:39.530Z] Node Version: v20.19.6
[2026-01-16T07:01:39.530Z] ========================================
[2026-01-16T07:01:39.530Z] Environment Variables Check:
[2026-01-16T07:01:39.530Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T07:01:39.530Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.530Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T07:01:39.530Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T07:01:39.530Z] 
Multi-Channel Configuration:
[2026-01-16T07:01:39.530Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.530Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T07:01:39.531Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T07:01:39.531Z] 
Data Files Check:
[2026-01-16T07:01:39.532Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31245 bytes)
[2026-01-16T07:01:39.539Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1057184 bytes)
[2026-01-16T07:01:39.539Z] 
========================================
[2026-01-16T07:01:39.540Z] Starting Enhanced Discord Bot...
[2026-01-16T07:01:39.540Z] ========================================
[2026-01-16T07:01:40.061Z] [BOT] ✅ Loaded V2 database: 1962 jobs
[2026-01-16T07:01:40.621Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T07:01:40.621Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T07:01:40.621Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T07:01:40.732Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist I - (DSAP) at RELX
[2026-01-16T07:01:40.736Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T07:01:40.736Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T07:01:40.736Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T07:01:40.737Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T07:01:40.737Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T07:01:40.737Z] [BOT] - Enterprise Account Executive @ nominal: new york, austin
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T07:01:40.740Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T07:01:40.741Z] [BOT] 📍 [ROUTING] "Data Scientist I - (DSAP)" @ ORG_692aa04a
[2026-01-16T07:01:40.741Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T07:01:40.741Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T07:01:40.758Z] [BOT ERROR] (node:2889) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T07:01:40.885Z] [BOT ERROR] ❌ Error posting job Data Scientist I - (DSAP): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist I - (DSAP) @ RELX',
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
[2026-01-16T07:01:40.885Z] [BOT] ❌ Industry post failed: Data Scientist I - (DSAP)
⚠️  Channel full error count: 1/5
[2026-01-16T07:01:42.648Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I - (DSAP) @ ORG_692aa04a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:01:44.150Z] [BOT] 💾 Marked as posted: Data Scientist I - (DSAP) @ ORG_692aa04a (instance #1)
[2026-01-16T07:01:44.150Z] [BOT] 💾 BEFORE ARCHIVING: 1963 jobs in database
[2026-01-16T07:01:44.152Z] [BOT] ✅ No jobs to archive (all 1963 jobs within 7-day window)
[2026-01-16T07:01:44.168Z] [BOT] 💾 Saved posted_jobs.json: 1963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:01:47.169Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-16T07:01:47.169Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Brand Ads" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-16T07:01:47.170Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:01:47.361Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-16T07:01:47.361Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb
[2026-01-16T07:01:49.019Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T07:01:50.520Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Brand Ads @ ORG_1bb6fcfb (instance #1)
[2026-01-16T07:01:50.520Z] [BOT] 💾 BEFORE ARCHIVING: 1964 jobs in database
[2026-01-16T07:01:50.522Z] [BOT] ✅ No jobs to archive (all 1964 jobs within 7-day window)
[2026-01-16T07:01:50.535Z] [BOT] 💾 Saved posted_jobs.json: 1964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:01:50.537Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-16T07:01:50.537Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T07:01:50.537Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:01:50.741Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-16T07:01:52.427Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T07:01:53.929Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-16T07:01:53.929Z] [BOT] 💾 BEFORE ARCHIVING: 1965 jobs in database
[2026-01-16T07:01:53.931Z] [BOT] ✅ No jobs to archive (all 1965 jobs within 7-day window)
[2026-01-16T07:01:53.944Z] [BOT] 💾 Saved posted_jobs.json: 1965 active jobs
[2026-01-16T07:01:53.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:01:53.946Z] [BOT] 📍 [ROUTING] "Graduate Research Engineer" @ ORG_08c9a13c
[2026-01-16T07:01:53.946Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:01:54.130Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Engineer @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Engineer @ ORG_08c9a13c
[2026-01-16T07:01:55.848Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Engineer @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T07:01:57.349Z] [BOT] 💾 Marked as posted: Graduate Research Engineer @ ORG_08c9a13c (instance #1)
[2026-01-16T07:01:57.349Z] [BOT] 💾 BEFORE ARCHIVING: 1966 jobs in database
[2026-01-16T07:01:57.351Z] [BOT] ✅ No jobs to archive (all 1966 jobs within 7-day window)
[2026-01-16T07:01:57.364Z] [BOT] 💾 Saved posted_jobs.json: 1966 active jobs
[2026-01-16T07:01:57.364Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:01:57.364Z] [BOT] 📍 [ROUTING] "New Grads 2026 - Software Engineer - Computer Vision" @ ORG_eb3a28ce
[2026-01-16T07:01:57.364Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:01:57.531Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce in #🤖・ai-jobs
  ✅ Industry: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce
[2026-01-16T07:01:59.224Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T07:02:00.726Z] [BOT] 💾 Marked as posted: New Grads 2026 - Software Engineer - Computer Vision @ ORG_eb3a28ce (instance #1)
[2026-01-16T07:02:00.726Z] [BOT] 💾 BEFORE ARCHIVING: 1967 jobs in database
[2026-01-16T07:02:00.727Z] [BOT] ✅ No jobs to archive (all 1967 jobs within 7-day window)
[2026-01-16T07:02:00.739Z] [BOT] 💾 Saved posted_jobs.json: 1967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:00.740Z] [BOT] 📍 [ROUTING] "New Grads 2026 - General Software Engineer" @ ORG_eb3a28ce
[2026-01-16T07:02:00.740Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:02:00.898Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - General Software Engineer @ ORG_eb3a28ce in #🤖・ai-jobs
[2026-01-16T07:02:00.898Z] [BOT] ✅ Industry: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce
[2026-01-16T07:02:02.580Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - General Software Engineer @ ORG_eb3a28ce in #🌉・san-francisco
[2026-01-16T07:02:02.580Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T07:02:04.082Z] [BOT] 💾 Marked as posted: New Grads 2026 - General Software Engineer @ ORG_eb3a28ce (instance #1)
[2026-01-16T07:02:04.082Z] [BOT] 💾 BEFORE ARCHIVING: 1968 jobs in database
[2026-01-16T07:02:04.083Z] [BOT] ✅ No jobs to archive (all 1968 jobs within 7-day window)
[2026-01-16T07:02:04.096Z] [BOT] 💾 Saved posted_jobs.json: 1968 active jobs
[2026-01-16T07:02:04.096Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:04.097Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_64dba1b4
[2026-01-16T07:02:04.097Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T07:02:04.253Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_64dba1b4 in #🤖・ai-jobs
[2026-01-16T07:02:04.253Z] [BOT] ✅ Industry: Research Assistant @ ORG_64dba1b4
[2026-01-16T07:02:06.052Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_64dba1b4 in #🚌・boston
[2026-01-16T07:02:06.053Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T07:02:07.555Z] [BOT] 💾 Marked as posted: Research Assistant @ ORG_64dba1b4 (instance #1)
[2026-01-16T07:02:07.555Z] [BOT] 💾 BEFORE ARCHIVING: 1969 jobs in database
[2026-01-16T07:02:07.557Z] [BOT] ✅ No jobs to archive (all 1969 jobs within 7-day window)
[2026-01-16T07:02:07.568Z] [BOT] 💾 Saved posted_jobs.json: 1969 active jobs
[2026-01-16T07:02:07.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:10.568Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-16T07:02:10.569Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_0c79a9c2 Intuition
[2026-01-16T07:02:10.569Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:02:10.747Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-01-16T07:02:10.747Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition
[2026-01-16T07:02:12.857Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_0c79a9c2 Intuition in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-16T07:02:14.358Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_0c79a9c2 Intuition (instance #1)
[2026-01-16T07:02:14.358Z] [BOT] 💾 BEFORE ARCHIVING: 1970 jobs in database
[2026-01-16T07:02:14.359Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-01-16T07:02:14.374Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:14.375Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD" @ ORG_08c9a13c
[2026-01-16T07:02:14.375Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:02:14.573Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c
[2026-01-16T07:02:16.298Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T07:02:17.800Z] [BOT] 💾 Marked as posted: Research Engineer Graduate - Seed-Infra-Platform-US - 2026 Start","PhD @ ORG_08c9a13c (instance #1)
[2026-01-16T07:02:17.800Z] [BOT] 💾 BEFORE ARCHIVING: 1971 jobs in database
[2026-01-16T07:02:17.801Z] [BOT] ✅ No jobs to archive (all 1971 jobs within 7-day window)
[2026-01-16T07:02:17.814Z] [BOT] 💾 Saved posted_jobs.json: 1971 active jobs
[2026-01-16T07:02:17.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:17.815Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Seed-Infra-Inference-US - PhD" @ ORG_08c9a13c
[2026-01-16T07:02:17.815Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:02:18.047Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T07:02:18.047Z] [BOT] ✅ Industry: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c
[2026-01-16T07:02:19.661Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Seed-Infra-Inference-US - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ByteDance',
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
[2026-01-16T07:02:19.661Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T07:02:21.162Z] [BOT] 💾 Marked as posted: Research Engineer Graduate - Seed-Infra-Inference-US - PhD @ ORG_08c9a13c (instance #1)
[2026-01-16T07:02:21.162Z] [BOT] 💾 BEFORE ARCHIVING: 1972 jobs in database
[2026-01-16T07:02:21.164Z] [BOT] ✅ No jobs to archive (all 1972 jobs within 7-day window)
[2026-01-16T07:02:21.175Z] [BOT] 💾 Saved posted_jobs.json: 1972 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:02:24.175Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T07:02:24.176Z] [BOT] ⏭️  Skipping duplicate: JID_a900c709-i_r101296-1 (posted within 7 days)
[2026-01-16T07:02:24.176Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_19b344a9 (posted within 7 days)
[2026-01-16T07:02:24.176Z] [BOT] ⏭️  Skipping duplicate: JID_6f020520 (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160134 (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b8c6c876-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_19a0ff0c-detail (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9b1ea507-detail (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_644a60ec (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_3a2ab7c9 (posted within 7 days)
[2026-01-16T07:02:24.177Z] [BOT] ⏭️  Skipping duplicate: JID_ea76c2ba-assistant_r136132-1 (posted within 7 days)
[2026-01-16T07:02:24.286Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-16T07:02:24.461Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 10 enriched, 10 posted)
[2026-01-16T07:02:24.461Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T07:02:24.519Z] [BOT] 📂 Loaded 4185 existing routing entries
[2026-01-16T07:02:24.586Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4195
   Timestamp: 2026-01-16T07:02:24.567Z
[2026-01-16T07:02:24.587Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T07:02:24.587Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T07:02:24.587Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2026-01-16T07:02:24.587Z] [BOT] Channels used: 7
   Top channels:
     1. #🤖・ai-jobs: 6 posts
[2026-01-16T07:02:24.587Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #🌧️・seattle: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #💻・remote-usa: 1 posts
[2026-01-16T07:02:24.587Z] [BOT] [STATS] Channel stats saved
[2026-01-16T07:02:26.612Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2889) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Scientist I - (DSAP): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist I - (DSAP)
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Seed-Infra-Inference-US - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*