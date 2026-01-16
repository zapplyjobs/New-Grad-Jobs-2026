# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T03:26:22.503Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T03:25:32.983Z] ========================================
[2026-01-16T03:25:32.985Z] Discord Bot Execution Log
[2026-01-16T03:25:32.985Z] Environment: GitHub Actions
[2026-01-16T03:25:32.985Z] Node Version: v20.19.6
[2026-01-16T03:25:32.985Z] ========================================
[2026-01-16T03:25:32.985Z] Environment Variables Check:
[2026-01-16T03:25:32.985Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T03:25:32.985Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.985Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T03:25:32.985Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T03:25:32.986Z] 
Multi-Channel Configuration:
[2026-01-16T03:25:32.986Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T03:25:32.986Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T03:25:32.986Z] 
Data Files Check:
[2026-01-16T03:25:32.987Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27422 bytes)
[2026-01-16T03:25:32.994Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1024587 bytes)
[2026-01-16T03:25:32.994Z] 
========================================
[2026-01-16T03:25:32.994Z] Starting Enhanced Discord Bot...
[2026-01-16T03:25:32.994Z] ========================================
[2026-01-16T03:25:33.518Z] [BOT] ✅ Loaded V2 database: 1906 jobs
[2026-01-16T03:25:34.241Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T03:25:34.242Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T03:25:34.242Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T03:25:34.353Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-16T03:25:34.355Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer I at Fanatics
[2026-01-16T03:25:34.357Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T03:25:34.358Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T03:25:34.358Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T03:25:34.359Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T03:25:34.359Z] [BOT] (1 grouped as same job with different locations)
[2026-01-16T03:25:34.359Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T03:25:34.362Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T03:25:34.363Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_b18a8c08
[2026-01-16T03:25:34.363Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T03:25:34.380Z] [BOT ERROR] (node:3321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T03:25:34.498Z] [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I @ Fanatics',
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
[2026-01-16T03:25:34.498Z] [BOT] ❌ Industry post failed: Software Engineer I
⚠️  Channel full error count: 1/5
[2026-01-16T03:25:36.127Z] [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I @ Fanatics',
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
[2026-01-16T03:25:36.128Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T03:25:37.629Z] [BOT] 📍 [ROUTING] "Graduate Geoscientist" @ ORG_65eedb45
   Category: TECH (default)
[2026-01-16T03:25:37.629Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T03:25:37.914Z] [BOT] ✅ Created forum post: 🏢 Graduate Geoscientist @ ORG_65eedb45 in #💻・tech-jobs
[2026-01-16T03:25:37.915Z] [BOT] ✅ Industry: Graduate Geoscientist @ ORG_65eedb45
[2026-01-16T03:25:39.765Z] [BOT] ✅ Created forum post: 🏢 Graduate Geoscientist @ ORG_65eedb45 in #💻・remote-usa
[2026-01-16T03:25:39.765Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T03:25:41.267Z] [BOT] 💾 Marked as posted: Graduate Geoscientist @ ORG_65eedb45 (instance #1)
[2026-01-16T03:25:41.267Z] [BOT] 💾 BEFORE ARCHIVING: 1907 jobs in database
[2026-01-16T03:25:41.269Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T03:25:41.270Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-16T03:25:41.270Z] [BOT] ✅ Archiving complete: 3 archived, 1904 active
[2026-01-16T03:25:41.281Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:25:41.281Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd" @ ORG_08c9a13c
[2026-01-16T03:25:41.282Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T03:25:41.668Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c
[2026-01-16T03:25:43.391Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T03:25:44.892Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2026-01-16T03:25:44.892Z] [BOT] 💾 BEFORE ARCHIVING: 1905 jobs in database
[2026-01-16T03:25:44.893Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-01-16T03:25:44.907Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:25:44.908Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2026-01-16T03:25:44.908Z] [BOT] 💾 BEFORE ARCHIVING: 1906 jobs in database
[2026-01-16T03:25:44.909Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-01-16T03:25:44.921Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:25:44.922Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Multiple Teams" @ ORG_70866b08
[2026-01-16T03:25:44.922Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T03:25:45.106Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Multiple Teams @ ORG_70866b08 in #💻・tech-jobs
[2026-01-16T03:25:45.106Z] [BOT] ✅ Industry: Software Engineer – New Grad - Multiple Teams @ ORG_70866b08
[2026-01-16T03:25:47.149Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Multiple Teams @ ORG_70866b08 in #🦢・los-angeles
[2026-01-16T03:25:47.149Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T03:25:48.650Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Multiple Teams @ ORG_70866b08 (instance #1)
[2026-01-16T03:25:48.650Z] [BOT] 💾 BEFORE ARCHIVING: 1907 jobs in database
[2026-01-16T03:25:48.651Z] [BOT] ✅ No jobs to archive (all 1907 jobs within 7-day window)
[2026-01-16T03:25:48.664Z] [BOT] 💾 Saved posted_jobs.json: 1907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:25:48.664Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Technology" @ ORG_0baaf6f2 Express
[2026-01-16T03:25:48.664Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T03:25:48.860Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-01-16T03:25:48.861Z] [BOT] ✅ Industry: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express
[2026-01-16T03:25:50.548Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #💻・remote-usa
[2026-01-16T03:25:50.548Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T03:25:52.050Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express (instance #1)
[2026-01-16T03:25:52.050Z] [BOT] 💾 BEFORE ARCHIVING: 1908 jobs in database
[2026-01-16T03:25:52.051Z] [BOT] ✅ No jobs to archive (all 1908 jobs within 7-day window)
[2026-01-16T03:25:52.063Z] [BOT] 💾 Saved posted_jobs.json: 1908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:25:55.063Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T03:25:55.064Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_4ab323faing Medicine
[2026-01-16T03:25:55.064Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T03:25:55.355Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_4ab323faing Medicine in #📈・JID_fb739488
[2026-01-16T03:25:55.355Z] [BOT] ✅ Industry: Data Engineer 1 @ ORG_4ab323faing Medicine
[2026-01-16T03:25:57.078Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_4ab323faing Medicine in #💻・remote-usa
[2026-01-16T03:25:57.078Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T03:25:58.580Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_4ab323faing Medicine (instance #1)
[2026-01-16T03:25:58.580Z] [BOT] 💾 BEFORE ARCHIVING: 1909 jobs in database
[2026-01-16T03:25:58.581Z] [BOT] ✅ No jobs to archive (all 1909 jobs within 7-day window)
[2026-01-16T03:25:58.594Z] [BOT] 💾 Saved posted_jobs.json: 1909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:26:01.593Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-16T03:26:01.594Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad - Summer 2026" @ ORG_601a2965
   Category: AI (matched: "AI specialization")
[2026-01-16T03:26:01.594Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T03:26:01.924Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965
[2026-01-16T03:26:03.616Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T03:26:05.116Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad - Summer 2026 @ ORG_601a2965 (instance #1)
[2026-01-16T03:26:05.116Z] [BOT] 💾 BEFORE ARCHIVING: 1910 jobs in database
[2026-01-16T03:26:05.118Z] [BOT] ✅ No jobs to archive (all 1910 jobs within 7-day window)
[2026-01-16T03:26:05.133Z] [BOT] 💾 Saved posted_jobs.json: 1910 active jobs
[2026-01-16T03:26:05.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T03:26:05.134Z] [BOT] 📍 [ROUTING] "Postdoc – Machine Learning" @ ORG_13e36faa Lab
[2026-01-16T03:26:05.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T03:26:05.567Z] [BOT] ✅ Created forum post: 🏢 Postdoc – Machine Learning @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Postdoc – Machine Learning @ ORG_13e36faa Lab
[2026-01-16T03:26:07.412Z] [BOT] ✅ Created forum post: 🏢 Postdoc – Machine Learning @ ORG_13e36faa Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T03:26:08.912Z] [BOT] 💾 Marked as posted: Postdoc – Machine Learning @ ORG_13e36faa Lab (instance #1)
[2026-01-16T03:26:08.913Z] [BOT] 💾 BEFORE ARCHIVING: 1911 jobs in database
[2026-01-16T03:26:08.914Z] [BOT] ✅ No jobs to archive (all 1911 jobs within 7-day window)
[2026-01-16T03:26:08.926Z] [BOT] 💾 Saved posted_jobs.json: 1911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:26:08.926Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Summer 2026" @ ORG_601a2965
[2026-01-16T03:26:08.927Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T03:26:09.123Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965
[2026-01-16T03:26:10.902Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T03:26:12.403Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Summer 2026 @ ORG_601a2965 (instance #1)
[2026-01-16T03:26:12.404Z] [BOT] 💾 BEFORE ARCHIVING: 1912 jobs in database
[2026-01-16T03:26:12.405Z] [BOT] ✅ No jobs to archive (all 1912 jobs within 7-day window)
[2026-01-16T03:26:12.418Z] [BOT] 💾 Saved posted_jobs.json: 1912 active jobs
[2026-01-16T03:26:12.418Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T03:26:12.418Z] [BOT] 📍 [ROUTING] "New Grads 2026 - Data Engineer" @ ORG_eb3a28ce
[2026-01-16T03:26:12.418Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T03:26:12.941Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - Data Engineer @ ORG_eb3a28ce in #🤖・ai-jobs
  ✅ Industry: New Grads 2026 - Data Engineer @ ORG_eb3a28ce
[2026-01-16T03:26:14.658Z] [BOT] ✅ Created forum post: 🏢 New Grads 2026 - Data Engineer @ ORG_eb3a28ce in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T03:26:16.160Z] [BOT] 💾 Marked as posted: New Grads 2026 - Data Engineer @ ORG_eb3a28ce (instance #1)
[2026-01-16T03:26:16.160Z] [BOT] 💾 BEFORE ARCHIVING: 1913 jobs in database
[2026-01-16T03:26:16.161Z] [BOT] ✅ No jobs to archive (all 1913 jobs within 7-day window)
[2026-01-16T03:26:16.173Z] [BOT] 💾 Saved posted_jobs.json: 1913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T03:26:19.174Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T03:26:19.175Z] [BOT] ⏭️  Skipping duplicate: JID_56b3b471 (posted within 7 days)
[2026-01-16T03:26:19.175Z] [BOT] ⏭️  Skipping duplicate: JID_105a5de9 (posted within 7 days)
[2026-01-16T03:26:19.175Z] [BOT] ⏭️  Skipping duplicate: JID_2f3e5182 (posted within 7 days)
[2026-01-16T03:26:19.175Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ce0b3f57-detail (posted within 7 days)
[2026-01-16T03:26:19.176Z] [BOT] ⏭️  Skipping duplicate: JID_3160a2f0-learning_jr102052 (posted within 7 days)
[2026-01-16T03:26:19.176Z] [BOT] ⏭️  Skipping duplicate: JID_819bcbe2 (posted within 7 days)
[2026-01-16T03:26:19.176Z] [BOT] ⏭️  Skipping duplicate: JID_da369b65 (posted within 7 days)
[2026-01-16T03:26:19.176Z] [BOT] ⏭️  Skipping duplicate: JID_d0781909 (posted within 7 days)
[2026-01-16T03:26:19.176Z] [BOT] ⏭️  Skipping duplicate: JID_73f5962b (posted within 7 days)
[2026-01-16T03:26:19.286Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-16T03:26:19.452Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-16T03:26:19.452Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T03:26:19.508Z] [BOT] 📂 Loaded 4125 existing routing entries
[2026-01-16T03:26:19.573Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T03:26:19.573Z] [BOT] Total entries: 4135
   Timestamp: 2026-01-16T03:26:19.556Z
[2026-01-16T03:26:19.573Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T03:26:19.573Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T03:26:19.574Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T03:26:19.574Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
[2026-01-16T03:26:19.574Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🦢・los-angeles: 3 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-16T03:26:19.574Z] [BOT] [STATS] Channel stats saved
[2026-01-16T03:26:21.600Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3321) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer I
- [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*