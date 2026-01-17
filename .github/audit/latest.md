# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T22:54:03.258Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T22:53:09.600Z] ========================================
[2026-01-17T22:53:09.602Z] Discord Bot Execution Log
[2026-01-17T22:53:09.602Z] Environment: GitHub Actions
[2026-01-17T22:53:09.602Z] Node Version: v20.19.6
[2026-01-17T22:53:09.602Z] ========================================
[2026-01-17T22:53:09.602Z] Environment Variables Check:
[2026-01-17T22:53:09.602Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T22:53:09.602Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.602Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T22:53:09.602Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T22:53:09.602Z] 
Multi-Channel Configuration:
[2026-01-17T22:53:09.602Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T22:53:09.603Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T22:53:09.603Z] 
Data Files Check:
[2026-01-17T22:53:09.604Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60225 bytes)
[2026-01-17T22:53:09.613Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1343457 bytes)
[2026-01-17T22:53:09.613Z] 
========================================
[2026-01-17T22:53:09.613Z] Starting Enhanced Discord Bot...
[2026-01-17T22:53:09.613Z] ========================================
[2026-01-17T22:53:10.124Z] [BOT] ✅ Loaded V2 database: 2482 jobs
[2026-01-17T22:53:10.790Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T22:53:10.790Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T22:53:10.790Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T22:53:10.903Z] [BOT] ✅ Loaded pending queue: 2890 total (2870 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst 1 - Data Warehouse at Frost
[2026-01-17T22:53:10.906Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T22:53:10.906Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T22:53:10.906Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T22:53:10.906Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T22:53:10.907Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T22:53:11.002Z] [BOT] ✅ Loaded pending queue: 2890 total (2870 pending, 20 enriched, 0 posted)
[2026-01-17T22:53:11.169Z] [BOT] ✅ Saved pending queue: 2884 total (2870 pending, 14 enriched, 0 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-17T22:53:11.170Z] [BOT] 📋 After blacklist filter: 14 jobs (6 blacklisted)
📋 After data quality filter: 14 jobs (0 invalid)
[2026-01-17T22:53:11.170Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-17T22:53:11.171Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T22:53:11.176Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-17T22:53:11.176Z] [BOT] 📍 [ROUTING] "Data Analyst 1 - Data Warehouse" @ ORG_17636dd6
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-17T22:53:11.176Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T22:53:11.193Z] [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T22:53:11.331Z] [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 - Data Warehouse @ Frost',
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
[2026-01-17T22:53:11.332Z] [BOT] ❌ Industry post failed: Data Analyst 1 - Data Warehouse
⚠️  Channel full error count: 1/5
[2026-01-17T22:53:12.950Z] [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 - Data Warehouse @ Frost',
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
[2026-01-17T22:53:12.950Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T22:53:14.449Z] [BOT] 📍 [ROUTING] "Analyst Data Management" @ ORG_4aef9434ine
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-17T22:53:14.449Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T22:53:14.626Z] [BOT] ✅ Created forum post: 🏢 Analyst Data Management @ ORG_4aef9434ine in #📈・JID_fb739488
[2026-01-17T22:53:14.626Z] [BOT] ✅ Industry: Analyst Data Management @ ORG_4aef9434ine
[2026-01-17T22:53:16.129Z] [BOT] 💾 Marked as posted: Analyst Data Management @ ORG_4aef9434ine (instance #1)
[2026-01-17T22:53:16.129Z] [BOT] 💾 BEFORE ARCHIVING: 2483 jobs in database
[2026-01-17T22:53:16.131Z] [BOT] ✅ No jobs to archive (all 2483 jobs within 7-day window)
[2026-01-17T22:53:16.150Z] [BOT] 💾 Saved posted_jobs.json: 2483 active jobs
[2026-01-17T22:53:16.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:19.151Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-17T22:53:19.152Z] [BOT] 📍 [ROUTING] "Technical Consultant 1" @ RF-SMART
[2026-01-17T22:53:19.152Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T22:53:19.509Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant 1 @ RF-SMART in #📣・marketing-jobs
  ✅ Industry: Technical Consultant 1 @ RF-SMART
[2026-01-17T22:53:21.371Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant 1 @ RF-SMART in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T22:53:22.872Z] [BOT] 💾 Marked as posted: Technical Consultant 1 @ RF-SMART (instance #1)
[2026-01-17T22:53:22.872Z] [BOT] 💾 BEFORE ARCHIVING: 2484 jobs in database
[2026-01-17T22:53:22.874Z] [BOT] ✅ No jobs to archive (all 2484 jobs within 7-day window)
[2026-01-17T22:53:22.893Z] [BOT] 💾 Saved posted_jobs.json: 2484 active jobs
[2026-01-17T22:53:22.893Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:22.894Z] [BOT] 📍 [ROUTING] "ATS Technology Development Program" @ ORG_f5b4b427 Insurance Company
[2026-01-17T22:53:22.895Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T22:53:23.247Z] [BOT] ✅ Created forum post: 🏢 ATS Technology Development Program @ ORG_f5b4b427 Insurance Company in #📣・marketing-jobs
  ✅ Industry: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company
[2026-01-17T22:53:25.104Z] [BOT] ✅ Created forum post: 🏢 ATS Technology Development Program @ ORG_f5b4b427 Insurance Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:53:26.604Z] [BOT] 💾 Marked as posted: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company (instance #1)
[2026-01-17T22:53:26.604Z] [BOT] 💾 BEFORE ARCHIVING: 2485 jobs in database
[2026-01-17T22:53:26.606Z] [BOT] ✅ No jobs to archive (all 2485 jobs within 7-day window)
[2026-01-17T22:53:26.622Z] [BOT] 💾 Saved posted_jobs.json: 2485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:29.622Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-17T22:53:29.623Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Program" @ ORG_445edbc9 Computing
   Category: AI (matched: "artificial intelligence")
[2026-01-17T22:53:29.623Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T22:53:29.866Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad Program @ ORG_445edbc9 Computing in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New Grad Program @ ORG_445edbc9 Computing
[2026-01-17T22:53:31.529Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad Program @ ORG_445edbc9 Computing in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T22:53:33.030Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad Program @ ORG_445edbc9 Computing (instance #1)
[2026-01-17T22:53:33.030Z] [BOT] 💾 BEFORE ARCHIVING: 2486 jobs in database
[2026-01-17T22:53:33.032Z] [BOT] ✅ No jobs to archive (all 2486 jobs within 7-day window)
[2026-01-17T22:53:33.046Z] [BOT] 💾 Saved posted_jobs.json: 2486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:36.048Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T22:53:36.048Z] [BOT] 📍 [ROUTING] "Software Engineer 1/2 - Digital Engineering" @ ORG_d40a5aca Lab USA
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:53:36.336Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA in #💻・tech-jobs
  ✅ Industry: Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA
[2026-01-17T22:53:38.089Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T22:53:39.589Z] [BOT] 💾 Marked as posted: Software Engineer 1/2 - Digital Engineering @ ORG_d40a5aca Lab USA (instance #1)
[2026-01-17T22:53:39.589Z] [BOT] 💾 BEFORE ARCHIVING: 2487 jobs in database
[2026-01-17T22:53:39.591Z] [BOT] ✅ No jobs to archive (all 2487 jobs within 7-day window)
[2026-01-17T22:53:39.606Z] [BOT] 💾 Saved posted_jobs.json: 2487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:39.607Z] [BOT] 📍 [ROUTING] "Developer 2 - Programming" @ ORG_d7d2f0ff Digital
[2026-01-17T22:53:39.607Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:53:39.858Z] [BOT] ✅ Created forum post: 🏢 Developer 2 - Programming @ ORG_d7d2f0ff Digital in #💻・tech-jobs
  ✅ Industry: Developer 2 - Programming @ ORG_d7d2f0ff Digital
[2026-01-17T22:53:41.571Z] [BOT] ✅ Created forum post: 🏢 Developer 2 - Programming @ ORG_d7d2f0ff Digital in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:53:43.071Z] [BOT] 💾 Marked as posted: Developer 2 - Programming @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-17T22:53:43.071Z] [BOT] 💾 BEFORE ARCHIVING: 2488 jobs in database
[2026-01-17T22:53:43.073Z] [BOT] ✅ No jobs to archive (all 2488 jobs within 7-day window)
[2026-01-17T22:53:43.090Z] [BOT] 💾 Saved posted_jobs.json: 2488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:43.090Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Automation - Internal Tools" @ ORG_e03f7067 Technologies
[2026-01-17T22:53:43.090Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:53:43.406Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies
[2026-01-17T22:53:45.062Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies in #🌧️・seattle
[2026-01-17T22:53:45.062Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T22:53:46.563Z] [BOT] 💾 Marked as posted: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies (instance #1)
[2026-01-17T22:53:46.563Z] [BOT] 💾 BEFORE ARCHIVING: 2489 jobs in database
[2026-01-17T22:53:46.565Z] [BOT] ✅ No jobs to archive (all 2489 jobs within 7-day window)
[2026-01-17T22:53:46.581Z] [BOT] 💾 Saved posted_jobs.json: 2489 active jobs
[2026-01-17T22:53:46.581Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer-Associate/Experienced" @ ORG_b344d80e Boeing Company
[2026-01-17T22:53:46.581Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:53:46.884Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company
[2026-01-17T22:53:48.795Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T22:53:50.297Z] [BOT] 💾 Marked as posted: Software Engineer-Associate/Experienced @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-17T22:53:50.297Z] [BOT] 💾 BEFORE ARCHIVING: 2490 jobs in database
[2026-01-17T22:53:50.299Z] [BOT] ✅ No jobs to archive (all 2490 jobs within 7-day window)
[2026-01-17T22:53:50.314Z] [BOT] 💾 Saved posted_jobs.json: 2490 active jobs
[2026-01-17T22:53:50.314Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:53.315Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-17T22:53:53.315Z] [BOT] 📍 [ROUTING] "Terminal Visual Charting Specialist" @ ORG_d51736fa
   Category: HR (matched: "compensation")
[2026-01-17T22:53:53.315Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-17T22:53:53.615Z] [BOT] ✅ Created forum post: 🏢 Terminal Visual Charting Specialist @ ORG_d51736fa in #📁・JID_e938df7b
  ✅ Industry: Terminal Visual Charting Specialist @ ORG_d51736fa
[2026-01-17T22:53:55.405Z] [BOT] ✅ Created forum post: 🏢 Terminal Visual Charting Specialist @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T22:53:56.906Z] [BOT] 💾 Marked as posted: Terminal Visual Charting Specialist @ ORG_d51736fa (instance #1)
[2026-01-17T22:53:56.907Z] [BOT] 💾 BEFORE ARCHIVING: 2491 jobs in database
[2026-01-17T22:53:56.909Z] [BOT] ✅ No jobs to archive (all 2491 jobs within 7-day window)
[2026-01-17T22:53:56.923Z] [BOT] 💾 Saved posted_jobs.json: 2491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:53:59.924Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-17T22:53:59.925Z] [BOT] ⏭️  Skipping duplicate: JID_d1a8c834 (posted within 7 days)
[2026-01-17T22:53:59.925Z] [BOT] ⏭️  Skipping duplicate: JID_e164bef9 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_7f784420 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_db0316a6 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_d2e1be96-junior_jr2025484122-1 (posted within 7 days)
[2026-01-17T22:53:59.926Z] [BOT] ⏭️  Skipping duplicate: JID_78a0c557-management_r2522417 (posted within 7 days)
[2026-01-17T22:54:00.051Z] [BOT] ✅ Loaded pending queue: 2884 total (2870 pending, 14 enriched, 0 posted)
[2026-01-17T22:54:00.218Z] [BOT] ✅ Saved pending queue: 2884 total (2870 pending, 5 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-17T22:54:00.219Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T22:54:00.279Z] [BOT] 📂 Loaded 4655 existing routing entries
[2026-01-17T22:54:00.348Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T22:54:00.348Z] [BOT] Total entries: 4665
   Timestamp: 2026-01-17T22:54:00.328Z
[2026-01-17T22:54:00.348Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T22:54:00.348Z] [BOT] Total attempts: 25
   Successful: 17
   Failed: 2
   Skipped: 6
[2026-01-17T22:54:00.349Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T22:54:00.349Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 9
   Top channels:
[2026-01-17T22:54:00.349Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #🌧️・seattle: 2 posts
[2026-01-17T22:54:00.349Z] [BOT] [STATS] Channel stats saved
[2026-01-17T22:54:02.379Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst 1 - Data Warehouse
- [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*