# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T00:48:17.737Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T00:47:25.684Z] ========================================
[2026-01-16T00:47:25.686Z] Discord Bot Execution Log
[2026-01-16T00:47:25.686Z] Environment: GitHub Actions
[2026-01-16T00:47:25.686Z] Node Version: v20.19.6
[2026-01-16T00:47:25.686Z] ========================================
[2026-01-16T00:47:25.686Z] Environment Variables Check:
[2026-01-16T00:47:25.686Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T00:47:25.686Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.686Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T00:47:25.687Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T00:47:25.687Z] 
Multi-Channel Configuration:
[2026-01-16T00:47:25.687Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T00:47:25.687Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T00:47:25.687Z] 
Data Files Check:
[2026-01-16T00:47:25.688Z] .github/data/new_jobs.json: ✅ Exists (10 items, 52408 bytes)
[2026-01-16T00:47:25.695Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1017436 bytes)
[2026-01-16T00:47:25.695Z] 
========================================
[2026-01-16T00:47:25.695Z] Starting Enhanced Discord Bot...
[2026-01-16T00:47:25.695Z] ========================================
[2026-01-16T00:47:26.225Z] [BOT] ✅ Loaded V2 database: 1892 jobs
[2026-01-16T00:47:26.672Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T00:47:26.673Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T00:47:26.673Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T00:47:26.785Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Development at Hewlett Packard (HP)
[2026-01-16T00:47:26.788Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T00:47:26.788Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T00:47:26.788Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T00:47:26.789Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T00:47:26.789Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T00:47:26.793Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-16T00:47:26.794Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_a5257743 Packard (HP)
[2026-01-16T00:47:26.794Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T00:47:26.811Z] [BOT ERROR] (node:2857) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T00:47:27.048Z] [BOT ERROR] ❌ Error posting job Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development @ ORG_a5257743 Packard (HP)',
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
[2026-01-16T00:47:27.049Z] [BOT] ❌ Industry post failed: Software Development
⚠️  Channel full error count: 1/5
[2026-01-16T00:47:28.665Z] [BOT ERROR] ❌ Error posting job Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development @ ORG_a5257743 Packard (HP)',
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
[2026-01-16T00:47:28.665Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T00:47:30.167Z] [BOT] 📍 [ROUTING] "Cloud Support Engineer I (Support Response) - Weekend Shift" @ ORG_862a3f0f
[2026-01-16T00:47:30.167Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T00:47:30.523Z] [BOT] ✅ Created forum post: 🏢 Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f in #💻・tech-jobs
[2026-01-16T00:47:30.523Z] [BOT] ✅ Industry: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f
[2026-01-16T00:47:32.598Z] [BOT] ✅ Created forum post: 🏢 Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f in #💻・remote-usa
[2026-01-16T00:47:32.599Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T00:47:34.100Z] [BOT] 💾 Marked as posted: Cloud Support Engineer I (Support Response) - Weekend Shift @ ORG_862a3f0f (instance #1)
[2026-01-16T00:47:34.100Z] [BOT] 💾 BEFORE ARCHIVING: 1893 jobs in database
[2026-01-16T00:47:34.102Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T00:47:34.103Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-16T00:47:34.103Z] [BOT] ✅ Archiving complete: 10 archived, 1883 active
[2026-01-16T00:47:34.115Z] [BOT] 💾 Saved posted_jobs.json: 1883 active jobs
[2026-01-16T00:47:34.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:37.116Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-16T00:47:37.118Z] [BOT] 📍 [ROUTING] "Computer Vision Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:47:37.118Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:47:37.364Z] [BOT] ✅ Created forum post: 🏢 Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
  ✅ Industry: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-16T00:47:39.078Z] [BOT] ✅ Created forum post: 🏢 Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T00:47:40.579Z] [BOT] 💾 Marked as posted: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2026-01-16T00:47:40.579Z] [BOT] 💾 BEFORE ARCHIVING: 1884 jobs in database
[2026-01-16T00:47:40.581Z] [BOT] ✅ No jobs to archive (all 1884 jobs within 7-day window)
[2026-01-16T00:47:40.596Z] [BOT] 💾 Saved posted_jobs.json: 1884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:40.597Z] [BOT] 📍 [ROUTING] "Homography Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
[2026-01-16T00:47:40.597Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:47:41.043Z] [BOT] ✅ Created forum post: 🏢 Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
  ✅ Industry: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-16T00:47:42.905Z] [BOT] ✅ Created forum post: 🏢 Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
[2026-01-16T00:47:42.905Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T00:47:44.406Z] [BOT] 💾 Marked as posted: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2026-01-16T00:47:44.406Z] [BOT] 💾 BEFORE ARCHIVING: 1885 jobs in database
[2026-01-16T00:47:44.408Z] [BOT] ✅ No jobs to archive (all 1885 jobs within 7-day window)
[2026-01-16T00:47:44.421Z] [BOT] 💾 Saved posted_jobs.json: 1885 active jobs
[2026-01-16T00:47:44.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:44.421Z] [BOT] 📍 [ROUTING] "Software Engineer, Test & Infrastructure I" @ ORG_ba13c5a3 Systems
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:47:44.421Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:47:44.576Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
[2026-01-16T00:47:44.577Z] [BOT] ✅ Industry: Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems
[2026-01-16T00:47:46.337Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🌆・chicago
[2026-01-16T00:47:46.337Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-16T00:47:47.838Z] [BOT] 💾 Marked as posted: Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems (instance #1)
[2026-01-16T00:47:47.838Z] [BOT] 💾 BEFORE ARCHIVING: 1886 jobs in database
[2026-01-16T00:47:47.840Z] [BOT] ✅ No jobs to archive (all 1886 jobs within 7-day window)
[2026-01-16T00:47:47.852Z] [BOT] 💾 Saved posted_jobs.json: 1886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:47.853Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - AI Research (PhD)" @ ORG_c910d474 Motors
[2026-01-16T00:47:47.853Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:47:48.206Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors in #🤖・ai-jobs
[2026-01-16T00:47:48.206Z] [BOT] ✅ Industry: Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors
[2026-01-16T00:47:50.003Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors in #🌄・mountain-view
[2026-01-16T00:47:50.003Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-16T00:47:51.504Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors (instance #1)
[2026-01-16T00:47:51.504Z] [BOT] 💾 BEFORE ARCHIVING: 1887 jobs in database
[2026-01-16T00:47:51.505Z] [BOT] ✅ No jobs to archive (all 1887 jobs within 7-day window)
[2026-01-16T00:47:51.517Z] [BOT] 💾 Saved posted_jobs.json: 1887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:51.517Z] [BOT] 📍 [ROUTING] "Software Engineer - Test & Infrastructure I" @ ORG_ba13c5a3 Systems
   Category: AI (matched: "artificial intelligence")
[2026-01-16T00:47:51.517Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T00:47:51.518Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T00:47:52.028Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems
[2026-01-16T00:47:53.726Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T00:47:55.227Z] [BOT] 💾 Marked as posted: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems (instance #1)
[2026-01-16T00:47:55.228Z] [BOT] 💾 BEFORE ARCHIVING: 1888 jobs in database
[2026-01-16T00:47:55.229Z] [BOT] ✅ No jobs to archive (all 1888 jobs within 7-day window)
[2026-01-16T00:47:55.240Z] [BOT] 💾 Saved posted_jobs.json: 1888 active jobs
[2026-01-16T00:47:55.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:47:58.241Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-16T00:47:58.243Z] [BOT] 📍 [ROUTING] "Associate – Entry Level" @ ORG_5f6cd045
   Category: HR (matched: "compensation")
[2026-01-16T00:47:58.243Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-16T00:47:58.552Z] [BOT] ✅ Created forum post: 🏢 Associate – Entry Level @ ORG_5f6cd045 in #📁・JID_e938df7b
[2026-01-16T00:47:58.552Z] [BOT] ✅ Industry: Associate – Entry Level @ ORG_5f6cd045
[2026-01-16T00:48:00.213Z] [BOT] ✅ Created forum post: 🏢 Associate – Entry Level @ ORG_5f6cd045 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T00:48:01.714Z] [BOT] 💾 Marked as posted: Associate – Entry Level @ ORG_5f6cd045 (instance #1)
[2026-01-16T00:48:01.714Z] [BOT] 💾 BEFORE ARCHIVING: 1889 jobs in database
[2026-01-16T00:48:01.715Z] [BOT] ✅ No jobs to archive (all 1889 jobs within 7-day window)
[2026-01-16T00:48:01.731Z] [BOT] 💾 Saved posted_jobs.json: 1889 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T00:48:04.732Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T00:48:04.732Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Data Warehouse" @ ORG_a258b30f Lending Services
[2026-01-16T00:48:04.732Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T00:48:04.910Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services in #📈・JID_fb739488
[2026-01-16T00:48:04.910Z] [BOT] ✅ Industry: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services
[2026-01-16T00:48:06.576Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services in #💻・remote-usa
[2026-01-16T00:48:06.576Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T00:48:08.077Z] [BOT] 💾 Marked as posted: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services (instance #1)
[2026-01-16T00:48:08.077Z] [BOT] 💾 BEFORE ARCHIVING: 1890 jobs in database
[2026-01-16T00:48:08.079Z] [BOT] ✅ No jobs to archive (all 1890 jobs within 7-day window)
[2026-01-16T00:48:08.091Z] [BOT] 💾 Saved posted_jobs.json: 1890 active jobs
[2026-01-16T00:48:08.091Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:48:08.092Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_f8d13f3b Health
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T00:48:08.092Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T00:48:08.334Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_f8d13f3b Health in #📈・JID_fb739488
[2026-01-16T00:48:08.334Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_f8d13f3b Health
[2026-01-16T00:48:10.160Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_f8d13f3b Health in #🗽・new-york
[2026-01-16T00:48:10.160Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T00:48:11.661Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_f8d13f3b Health (instance #1)
[2026-01-16T00:48:11.661Z] [BOT] 💾 BEFORE ARCHIVING: 1891 jobs in database
[2026-01-16T00:48:11.662Z] [BOT] ✅ No jobs to archive (all 1891 jobs within 7-day window)
[2026-01-16T00:48:11.675Z] [BOT] 💾 Saved posted_jobs.json: 1891 active jobs
[2026-01-16T00:48:11.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T00:48:14.676Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T00:48:14.677Z] [BOT] ⏭️  Skipping duplicate: JID_d8b0f893 (posted within 7 days)
[2026-01-16T00:48:14.677Z] [BOT] ⏭️  Skipping duplicate: JID_c50aea90 (posted within 7 days)
[2026-01-16T00:48:14.677Z] [BOT] ⏭️  Skipping duplicate: JID_8671b952 (posted within 7 days)
[2026-01-16T00:48:14.677Z] [BOT] ⏭️  Skipping duplicate: JID_f0e6f92d (posted within 7 days)
[2026-01-16T00:48:14.677Z] [BOT] ⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_85d94579-research_jr-202519114 (posted within 7 days)
[2026-01-16T00:48:14.678Z] [BOT] ⏭️  Skipping duplicate: JID_86f06dfe (posted within 7 days)
[2026-01-16T00:48:14.678Z] [BOT] ⏭️  Skipping duplicate: JID_add51d87 (posted within 7 days)
[2026-01-16T00:48:14.678Z] [BOT] ⏭️  Skipping duplicate: JID_8311e04d (posted within 7 days)
⏭️  Skipping duplicate: JID_2095ae8c (posted within 7 days)
[2026-01-16T00:48:14.786Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-16T00:48:14.954Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 11 enriched, 9 posted)
[2026-01-16T00:48:14.955Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T00:48:15.011Z] [BOT] 📂 Loaded 4095 existing routing entries
[2026-01-16T00:48:15.077Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4105
[2026-01-16T00:48:15.077Z] [BOT] Timestamp: 2026-01-16T00:48:15.059Z
[2026-01-16T00:48:15.078Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T00:48:15.078Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T00:48:15.079Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🌆・chicago: 2 posts
     4. #🗽・new-york: 2 posts
     5. #📈・JID_fb739488: 2 posts
[STATS] Channel stats saved
[2026-01-16T00:48:17.105Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2857) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development
- [BOT ERROR] ❌ Error posting job Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*