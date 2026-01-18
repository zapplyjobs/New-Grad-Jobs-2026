# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T06:48:29.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T06:47:46.967Z] ========================================
[2026-01-18T06:47:46.968Z] Discord Bot Execution Log
[2026-01-18T06:47:46.968Z] Environment: GitHub Actions
[2026-01-18T06:47:46.969Z] Node Version: v20.19.6
[2026-01-18T06:47:46.969Z] ========================================
[2026-01-18T06:47:46.969Z] Environment Variables Check:
[2026-01-18T06:47:46.969Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T06:47:46.969Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T06:47:46.969Z] 
Multi-Channel Configuration:
[2026-01-18T06:47:46.969Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.969Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.970Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.970Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T06:47:46.970Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T06:47:46.970Z] 
Data Files Check:
[2026-01-18T06:47:46.970Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40673 bytes)
[2026-01-18T06:47:46.981Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1406846 bytes)
[2026-01-18T06:47:46.981Z] 
========================================
[2026-01-18T06:47:46.981Z] Starting Enhanced Discord Bot...
[2026-01-18T06:47:46.981Z] ========================================
[2026-01-18T06:47:47.455Z] [BOT] ✅ Loaded V2 database: 2601 jobs
[2026-01-18T06:47:48.152Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T06:47:48.153Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T06:47:48.153Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T06:47:48.312Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Neuroimaging Engineer - Neurology at Wash U
[2026-01-18T06:47:48.316Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T06:47:48.317Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T06:47:48.317Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T06:47:48.318Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-18T06:47:48.318Z] [BOT] 📍 1 jobs with multiple locations:
   - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T06:47:48.321Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-18T06:47:48.322Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Neurology" @ ORG_f5f75c9b U
[2026-01-18T06:47:48.322Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:47:48.327Z] [BOT ERROR] (node:2633) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T06:47:48.454Z] [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U',
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
[2026-01-18T06:47:48.454Z] [BOT] ❌ Industry post failed: Neuroimaging Engineer - Neurology
⚠️  Channel full error count: 1/5
[2026-01-18T06:47:50.256Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T06:47:51.757Z] [BOT] 💾 Marked as posted: Neuroimaging Engineer - Neurology @ ORG_f5f75c9b U (instance #1)
[2026-01-18T06:47:51.758Z] [BOT] 💾 BEFORE ARCHIVING: 2602 jobs in database
[2026-01-18T06:47:51.759Z] [BOT] ✅ No jobs to archive (all 2602 jobs within 7-day window)
[2026-01-18T06:47:51.778Z] [BOT] 💾 Saved posted_jobs.json: 2602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:47:51.778Z] [BOT] 📍 [ROUTING] "Software Engineer Frontend 2 - Full Time - United States" @ ORG_aa669b28
[2026-01-18T06:47:51.779Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:47:52.118Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28 in #💻・tech-jobs
  ✅ Industry: Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28
[2026-01-18T06:47:53.788Z] [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Frontend 2 - Full Time - United States @ Cisco',
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
[2026-01-18T06:47:53.788Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T06:47:55.288Z] [BOT] 💾 Marked as posted: Software Engineer Frontend 2 - Full Time - United States @ ORG_aa669b28 (instance #1)
[2026-01-18T06:47:55.289Z] [BOT] 💾 BEFORE ARCHIVING: 2603 jobs in database
[2026-01-18T06:47:55.290Z] [BOT] ✅ No jobs to archive (all 2603 jobs within 7-day window)
[2026-01-18T06:47:55.305Z] [BOT] 💾 Saved posted_jobs.json: 2603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:47:55.305Z] [BOT] 📍 [ROUTING] "Full-Stack Software Engineer – New Grad" @ ORG_c7607813
   Category: TECH (matched: "software")
[2026-01-18T06:47:55.305Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:47:55.547Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #💻・tech-jobs
  ✅ Industry: Full-Stack Software Engineer – New Grad @ ORG_c7607813
[2026-01-18T06:47:57.220Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T06:47:58.720Z] [BOT] 💾 Marked as posted: Full-Stack Software Engineer – New Grad @ ORG_c7607813 (instance #1)
[2026-01-18T06:47:58.721Z] [BOT] 💾 BEFORE ARCHIVING: 2604 jobs in database
[2026-01-18T06:47:58.722Z] [BOT] ✅ No jobs to archive (all 2604 jobs within 7-day window)
[2026-01-18T06:47:58.741Z] [BOT] 💾 Saved posted_jobs.json: 2604 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:47:58.741Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_db95f8b8
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:47:58.920Z] [BOT] ✅ Created forum post: 🏢 Software Developer 1 @ ORG_db95f8b8 in #💻・tech-jobs
[2026-01-18T06:47:58.920Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_db95f8b8
[2026-01-18T06:48:00.620Z] [BOT] ✅ Created forum post: 🏢 Software Developer 1 @ ORG_db95f8b8 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T06:48:02.120Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_db95f8b8 (instance #1)
[2026-01-18T06:48:02.120Z] [BOT] 💾 BEFORE ARCHIVING: 2605 jobs in database
[2026-01-18T06:48:02.122Z] [BOT] ✅ No jobs to archive (all 2605 jobs within 7-day window)
[2026-01-18T06:48:02.138Z] [BOT] 💾 Saved posted_jobs.json: 2605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:02.138Z] [BOT] 📍 [ROUTING] "Central Data Platform Engineer - Software Dev Engineer I" @ ORG_db95f8b8
   Category: TECH (matched: "software")
[2026-01-18T06:48:02.138Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:48:02.483Z] [BOT] ✅ Created forum post: 🏢 Central Data Platform Engineer - Software Dev Engineer I @ ORG_db95f8b8 in #💻・tech-jobs
[2026-01-18T06:48:02.483Z] [BOT] ✅ Industry: Central Data Platform Engineer - Software Dev Engineer I @ ORG_db95f8b8
[2026-01-18T06:48:03.984Z] [BOT] 💾 Marked as posted: Central Data Platform Engineer - Software Dev Engineer I @ ORG_db95f8b8 (instance #1)
[2026-01-18T06:48:03.984Z] [BOT] 💾 BEFORE ARCHIVING: 2606 jobs in database
[2026-01-18T06:48:03.986Z] [BOT] ✅ No jobs to archive (all 2606 jobs within 7-day window)
[2026-01-18T06:48:04.004Z] [BOT] 💾 Saved posted_jobs.json: 2606 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:04.005Z] [BOT] 📍 [ROUTING] "Associate Software Developer - Dev Support" @ ORG_daf72bde Software
   Category: TECH (matched: "software")
[2026-01-18T06:48:04.005Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:48:04.559Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer - Dev Support @ ORG_daf72bde Software in #💻・tech-jobs
[2026-01-18T06:48:04.559Z] [BOT] ✅ Industry: Associate Software Developer - Dev Support @ ORG_daf72bde Software
[2026-01-18T06:48:06.258Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer - Dev Support @ ORG_daf72bde Software in #🤠・austin
[2026-01-18T06:48:06.258Z] [BOT] ✅ Location: 🤠・austin
[2026-01-18T06:48:07.760Z] [BOT] 💾 Marked as posted: Associate Software Developer - Dev Support @ ORG_daf72bde Software (instance #1)
[2026-01-18T06:48:07.760Z] [BOT] 💾 BEFORE ARCHIVING: 2607 jobs in database
[2026-01-18T06:48:07.762Z] [BOT] ✅ No jobs to archive (all 2607 jobs within 7-day window)
[2026-01-18T06:48:07.779Z] [BOT] 💾 Saved posted_jobs.json: 2607 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:07.780Z] [BOT] 📍 [ROUTING] "Engineer 1-CAD - Software Development" @ ORG_230fe79b Technology
[2026-01-18T06:48:07.780Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:48:07.989Z] [BOT] ✅ Created forum post: 🏢 Engineer 1-CAD - Software Development @ ORG_230fe79b Technology in #💻・tech-jobs
  ✅ Industry: Engineer 1-CAD - Software Development @ ORG_230fe79b Technology
[2026-01-18T06:48:09.848Z] [BOT] ✅ Created forum post: 🏢 Engineer 1-CAD - Software Development @ ORG_230fe79b Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T06:48:11.350Z] [BOT] 💾 Marked as posted: Engineer 1-CAD - Software Development @ ORG_230fe79b Technology (instance #1)
💾 BEFORE ARCHIVING: 2608 jobs in database
[2026-01-18T06:48:11.352Z] [BOT] ✅ No jobs to archive (all 2608 jobs within 7-day window)
[2026-01-18T06:48:11.368Z] [BOT] 💾 Saved posted_jobs.json: 2608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:11.369Z] [BOT] 📍 [ROUTING] "Solumina iSeries Software Developer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T06:48:11.560Z] [BOT] ✅ Created forum post: 🏢 Solumina iSeries Software Developer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Solumina iSeries Software Developer @ ORG_f3f2248d Grumman
[2026-01-18T06:48:13.062Z] [BOT] 💾 Marked as posted: Solumina iSeries Software Developer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-18T06:48:13.062Z] [BOT] 💾 BEFORE ARCHIVING: 2609 jobs in database
[2026-01-18T06:48:13.064Z] [BOT] ✅ No jobs to archive (all 2609 jobs within 7-day window)
[2026-01-18T06:48:13.079Z] [BOT] 💾 Saved posted_jobs.json: 2609 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:16.080Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T06:48:16.080Z] [BOT] 📍 [ROUTING] "Applied Machine Learning Scientist 1 - Traditional AI" @ ORG_b6a51c2a Bank
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T06:48:16.352Z] [BOT] ✅ Created forum post: 🏢 Applied Machine Learning Scientist 1 - Traditional AI @ ORG_b6a51c2a Bank in #🤖・ai-jobs
  ✅ Industry: Applied Machine Learning Scientist 1 - Traditional AI @ ORG_b6a51c2a Bank
[2026-01-18T06:48:18.045Z] [BOT] ✅ Created forum post: 🏢 Applied Machine Learning Scientist 1 - Traditional AI @ ORG_b6a51c2a Bank in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T06:48:19.546Z] [BOT] 💾 Marked as posted: Applied Machine Learning Scientist 1 - Traditional AI @ ORG_b6a51c2a Bank (instance #1)
💾 BEFORE ARCHIVING: 2610 jobs in database
[2026-01-18T06:48:19.548Z] [BOT] ✅ No jobs to archive (all 2610 jobs within 7-day window)
[2026-01-18T06:48:19.565Z] [BOT] 💾 Saved posted_jobs.json: 2610 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:19.566Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_d5ad4495
   Category: AI (matched: "artificial intelligence")
[2026-01-18T06:48:19.566Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T06:48:19.790Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_d5ad4495 in #🤖・ai-jobs
[2026-01-18T06:48:19.790Z] [BOT] ✅ Industry: Associate Product Engineer @ ORG_d5ad4495
[2026-01-18T06:48:21.522Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_d5ad4495 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T06:48:23.023Z] [BOT] 💾 Marked as posted: Associate Product Engineer @ ORG_d5ad4495 (instance #1)
[2026-01-18T06:48:23.024Z] [BOT] 💾 BEFORE ARCHIVING: 2611 jobs in database
[2026-01-18T06:48:23.026Z] [BOT] ✅ No jobs to archive (all 2611 jobs within 7-day window)
[2026-01-18T06:48:23.041Z] [BOT] 💾 Saved posted_jobs.json: 2611 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T06:48:26.041Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T06:48:26.042Z] [BOT] ⏭️  Skipping duplicate: JID_10f890da-neurology_jr91941-1 (posted within 7 days)
[2026-01-18T06:48:26.042Z] [BOT] ⏭️  Skipping duplicate: JID_99eb5377 (posted within 7 days)
[2026-01-18T06:48:26.042Z] [BOT] ⏭️  Skipping duplicate: JID_5343cd50 (posted within 7 days)
[2026-01-18T06:48:26.042Z] [BOT] ⏭️  Skipping duplicate: JID_96b895d1-td_bank_careers-JID_e6f7ab51-_r_1465899-1 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_d00dcc67-engineer_jr100284 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_646395be-i_jr0026741 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_4b4453d6-i_jr0026738-1 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_e8887be7 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_eb265f18-_r2665-25 (posted within 7 days)
[2026-01-18T06:48:26.043Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_002ef066-3_r10218870 (posted within 7 days)
[2026-01-18T06:48:26.195Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[2026-01-18T06:48:26.356Z] [BOT] ✅ Saved pending queue: 2864 total (2844 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T06:48:26.420Z] [BOT] 📂 Loaded 4765 existing routing entries
[2026-01-18T06:48:26.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4775
   Timestamp: 2026-01-18T06:48:26.467Z
[2026-01-18T06:48:26.490Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 18
   Successful: 16
   Failed: 2
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌆・chicago: 1 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-18T06:48:28.502Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2633) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Neuroimaging Engineer - Neurology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Neuroimaging Engineer - Neurology
- [BOT ERROR] ❌ Error posting job Software Engineer Frontend 2 - Full Time - United States: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*