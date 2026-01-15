# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T20:28:25.552Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T20:27:31.177Z] ========================================
[2026-01-15T20:27:31.179Z] Discord Bot Execution Log
[2026-01-15T20:27:31.179Z] Environment: GitHub Actions
[2026-01-15T20:27:31.179Z] Node Version: v20.19.6
[2026-01-15T20:27:31.179Z] ========================================
[2026-01-15T20:27:31.180Z] Environment Variables Check:
[2026-01-15T20:27:31.180Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T20:27:31.180Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.180Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T20:27:31.180Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T20:27:31.180Z] 
Multi-Channel Configuration:
[2026-01-15T20:27:31.180Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.180Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.180Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T20:27:31.181Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T20:27:31.181Z] 
Data Files Check:
[2026-01-15T20:27:31.182Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24587 bytes)
[2026-01-15T20:27:31.189Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 969618 bytes)
[2026-01-15T20:27:31.189Z] 
========================================
[2026-01-15T20:27:31.189Z] Starting Enhanced Discord Bot...
[2026-01-15T20:27:31.189Z] ========================================
[2026-01-15T20:27:31.746Z] [BOT] ✅ Loaded V2 database: 1807 jobs
[2026-01-15T20:27:32.296Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T20:27:32.296Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T20:27:32.296Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T20:27:32.413Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate - AI Platform - 2026 Start at ByteDance
[2026-01-15T20:27:32.416Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T20:27:32.416Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T20:27:32.417Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T20:27:32.417Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T20:27:32.418Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T20:27:32.422Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T20:27:32.422Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
[2026-01-15T20:27:32.423Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:27:32.440Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T20:27:32.567Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ByteDance',
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
[2026-01-15T20:27:32.568Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T20:27:34.327Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T20:27:34.327Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T20:27:35.829Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T20:27:35.830Z] [BOT] 💾 BEFORE ARCHIVING: 1808 jobs in database
[2026-01-15T20:27:35.831Z] [BOT] ✅ No jobs to archive (all 1808 jobs within 7-day window)
[2026-01-15T20:27:35.846Z] [BOT] 💾 Saved posted_jobs.json: 1808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:35.846Z] [BOT] 📍 [ROUTING] "Programmer Analyst" @ ORG_39509385 Systems Integrators
[2026-01-15T20:27:35.847Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:27:36.198Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst @ ORG_39509385 Systems Integrators in #💻・tech-jobs
[2026-01-15T20:27:36.198Z] [BOT] ✅ Industry: Programmer Analyst @ ORG_39509385 Systems Integrators
[2026-01-15T20:27:37.899Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst @ ORG_39509385 Systems Integrators in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T20:27:39.400Z] [BOT] 💾 Marked as posted: Programmer Analyst @ ORG_39509385 Systems Integrators (instance #1)
💾 BEFORE ARCHIVING: 1809 jobs in database
[2026-01-15T20:27:39.402Z] [BOT] ✅ No jobs to archive (all 1809 jobs within 7-day window)
[2026-01-15T20:27:39.414Z] [BOT] 💾 Saved posted_jobs.json: 1809 active jobs
[2026-01-15T20:27:39.414Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:39.414Z] [BOT] 📍 [ROUTING] "SCA Telecommunications Mechanic 1" @ ORG_7efd3259
[2026-01-15T20:27:39.415Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:27:39.606Z] [BOT] ✅ Created forum post: 🏢 SCA Telecommunications Mechanic 1 @ ORG_7efd3259 in #💻・tech-jobs
  ✅ Industry: SCA Telecommunications Mechanic 1 @ ORG_7efd3259
[2026-01-15T20:27:41.316Z] [BOT] ✅ Created forum post: 🏢 SCA Telecommunications Mechanic 1 @ ORG_7efd3259 in #🦢・los-angeles
[2026-01-15T20:27:41.316Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-15T20:27:42.817Z] [BOT] 💾 Marked as posted: SCA Telecommunications Mechanic 1 @ ORG_7efd3259 (instance #1)
[2026-01-15T20:27:42.817Z] [BOT] 💾 BEFORE ARCHIVING: 1810 jobs in database
[2026-01-15T20:27:42.819Z] [BOT] ✅ No jobs to archive (all 1810 jobs within 7-day window)
[2026-01-15T20:27:42.833Z] [BOT] 💾 Saved posted_jobs.json: 1810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:42.834Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Productization" @ ORG_acec4064
[2026-01-15T20:27:42.834Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:27:43.348Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Productization @ ORG_acec4064 in #💻・tech-jobs
[2026-01-15T20:27:43.348Z] [BOT] ✅ Industry: Software Engineer - AI Productization @ ORG_acec4064
[2026-01-15T20:27:45.062Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Productization @ ORG_acec4064 in #🌆・chicago
[2026-01-15T20:27:45.063Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T20:27:46.564Z] [BOT] 💾 Marked as posted: Software Engineer - AI Productization @ ORG_acec4064 (instance #1)
[2026-01-15T20:27:46.564Z] [BOT] 💾 BEFORE ARCHIVING: 1811 jobs in database
[2026-01-15T20:27:46.566Z] [BOT] ✅ No jobs to archive (all 1811 jobs within 7-day window)
[2026-01-15T20:27:46.579Z] [BOT] 💾 Saved posted_jobs.json: 1811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:49.579Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T20:27:49.580Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Enterprise" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T20:27:49.580Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:27:49.829Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c
[2026-01-15T20:27:51.590Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:27:53.092Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c (instance #1)
[2026-01-15T20:27:53.092Z] [BOT] 💾 BEFORE ARCHIVING: 1812 jobs in database
[2026-01-15T20:27:53.093Z] [BOT] ✅ No jobs to archive (all 1812 jobs within 7-day window)
[2026-01-15T20:27:53.108Z] [BOT] 💾 Saved posted_jobs.json: 1812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:53.109Z] [BOT] 📍 [ROUTING] "Data Structuring Specialist" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
[2026-01-15T20:27:53.109Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:27:55.682Z] [BOT] ✅ Created forum post: 🏢 Data Structuring Specialist @ ORG_6a1ef406 in #🤖・ai-jobs
[2026-01-15T20:27:55.682Z] [BOT] ✅ Industry: Data Structuring Specialist @ ORG_6a1ef406
[2026-01-15T20:27:57.382Z] [BOT] ✅ Created forum post: 🏢 Data Structuring Specialist @ ORG_6a1ef406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:27:58.883Z] [BOT] 💾 Marked as posted: Data Structuring Specialist @ ORG_6a1ef406 (instance #1)
[2026-01-15T20:27:58.883Z] [BOT] 💾 BEFORE ARCHIVING: 1813 jobs in database
[2026-01-15T20:27:58.884Z] [BOT] ✅ No jobs to archive (all 1813 jobs within 7-day window)
[2026-01-15T20:27:58.897Z] [BOT] 💾 Saved posted_jobs.json: 1813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:27:58.898Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Monetization GenAI - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T20:27:58.898Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:27:59.198Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-15T20:27:59.199Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb
[2026-01-15T20:28:00.907Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T20:28:00.907Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T20:28:02.408Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:28:02.408Z] [BOT] 💾 BEFORE ARCHIVING: 1814 jobs in database
[2026-01-15T20:28:02.409Z] [BOT] ✅ No jobs to archive (all 1814 jobs within 7-day window)
[2026-01-15T20:28:02.424Z] [BOT] 💾 Saved posted_jobs.json: 1814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:28:02.426Z] [BOT] 📍 [ROUTING] "Perception and Autonomy Engineer" @ ORG_1bff266d
[2026-01-15T20:28:02.426Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:28:02.758Z] [BOT] ✅ Created forum post: 🏢 Perception and Autonomy Engineer @ ORG_1bff266d in #🤖・ai-jobs
[2026-01-15T20:28:02.758Z] [BOT] ✅ Industry: Perception and Autonomy Engineer @ ORG_1bff266d
[2026-01-15T20:28:04.617Z] [BOT] ✅ Created forum post: 🏢 Perception and Autonomy Engineer @ ORG_1bff266d in #🤠・austin
[2026-01-15T20:28:04.618Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T20:28:06.119Z] [BOT] 💾 Marked as posted: Perception and Autonomy Engineer @ ORG_1bff266d (instance #1)
[2026-01-15T20:28:06.119Z] [BOT] 💾 BEFORE ARCHIVING: 1815 jobs in database
[2026-01-15T20:28:06.120Z] [BOT] ✅ No jobs to archive (all 1815 jobs within 7-day window)
[2026-01-15T20:28:06.135Z] [BOT] 💾 Saved posted_jobs.json: 1815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:28:09.136Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T20:28:09.136Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Shop AMS Data Science" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:28:09.532Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb
[2026-01-15T20:28:11.300Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T20:28:12.801Z] [BOT] 💾 Marked as posted: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:28:12.801Z] [BOT] 💾 BEFORE ARCHIVING: 1816 jobs in database
[2026-01-15T20:28:12.803Z] [BOT] ✅ No jobs to archive (all 1816 jobs within 7-day window)
[2026-01-15T20:28:12.814Z] [BOT] 💾 Saved posted_jobs.json: 1816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:28:15.815Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T20:28:15.816Z] [BOT] 📍 [ROUTING] "Account Executive (USA)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-15T20:28:15.816Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T20:28:16.030Z] [BOT] ✅ Created forum post: 🏢 Account Executive (USA) @ supabase in #💲・sales-jobs
  ✅ Industry: Account Executive (USA) @ supabase
[2026-01-15T20:28:17.781Z] [BOT ERROR] ❌ Error posting job Account Executive (USA): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive (USA) @ supabase',
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
[2026-01-15T20:28:17.781Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T20:28:19.283Z] [BOT] 💾 Marked as posted: Account Executive (USA) @ supabase (instance #1)
[2026-01-15T20:28:19.283Z] [BOT] 💾 BEFORE ARCHIVING: 1817 jobs in database
[2026-01-15T20:28:19.285Z] [BOT] ✅ No jobs to archive (all 1817 jobs within 7-day window)
[2026-01-15T20:28:19.300Z] [BOT] 💾 Saved posted_jobs.json: 1817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:28:22.300Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_80e093bc-detail (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c2df5284-detail (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_a842c276 (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f269e50a (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_afa2d455 (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_4caa57dd (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_557ded04 (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_11f30fcc (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_f5ef0997 (posted within 7 days)
[2026-01-15T20:28:22.301Z] [BOT] ⏭️  Skipping duplicate: JID_c2156082-en_us-JID_6ea61ba3 (posted within 7 days)
[2026-01-15T20:28:22.433Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[2026-01-15T20:28:22.594Z] [BOT] ✅ Saved pending queue: 2756 total (2736 pending, 10 enriched, 10 posted)
[2026-01-15T20:28:22.594Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T20:28:22.651Z] [BOT] 📂 Loaded 3995 existing routing entries
[2026-01-15T20:28:22.715Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4005
   Timestamp: 2026-01-15T20:28:22.699Z
[2026-01-15T20:28:22.716Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T20:28:22.716Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-15T20:28:22.716Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T20:28:22.717Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 10
   Top channels:
[2026-01-15T20:28:22.717Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #💻・remote-usa: 1 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-15T20:28:22.717Z] [BOT] [STATS] Channel stats saved
[2026-01-15T20:28:24.742Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
- [BOT ERROR] ❌ Error posting job Account Executive (USA): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*