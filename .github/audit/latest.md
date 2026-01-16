# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T19:52:27.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T19:51:40.747Z] ========================================
[2026-01-16T19:51:40.749Z] Discord Bot Execution Log
[2026-01-16T19:51:40.749Z] Environment: GitHub Actions
[2026-01-16T19:51:40.749Z] Node Version: v20.19.6
[2026-01-16T19:51:40.749Z] ========================================
[2026-01-16T19:51:40.749Z] Environment Variables Check:
[2026-01-16T19:51:40.749Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T19:51:40.749Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.749Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T19:51:40.749Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T19:51:40.749Z] 
Multi-Channel Configuration:
[2026-01-16T19:51:40.749Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T19:51:40.750Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T19:51:40.750Z] 
Data Files Check:
[2026-01-16T19:51:40.751Z] .github/data/new_jobs.json: ✅ Exists (10 items, 41132 bytes)
[2026-01-16T19:51:40.759Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1118348 bytes)
[2026-01-16T19:51:40.759Z] 
========================================
[2026-01-16T19:51:40.759Z] Starting Enhanced Discord Bot...
[2026-01-16T19:51:40.759Z] ========================================
[2026-01-16T19:51:41.306Z] [BOT] ✅ Loaded V2 database: 2068 jobs
[2026-01-16T19:51:41.845Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T19:51:41.846Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T19:51:41.846Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T19:51:41.962Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-16T19:51:41.964Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Relations Engineer (San Francisco, CA) at supabase
[2026-01-16T19:51:41.967Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T19:51:41.967Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T19:51:41.968Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T19:51:41.968Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T19:51:41.969Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T19:51:41.969Z] [BOT] - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T19:51:41.971Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T19:51:41.972Z] [BOT] 📍 [ROUTING] "Developer Relations Engineer (San Francisco, CA)" @ supabase
[2026-01-16T19:51:41.973Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:51:41.990Z] [BOT ERROR] (node:2690) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T19:51:42.111Z] [BOT ERROR] ❌ Error posting job Developer Relations Engineer (San Francisco, CA): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer Relations Engineer (San Francisco, CA) @ supabase',
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
[2026-01-16T19:51:42.111Z] [BOT] ❌ Industry post failed: Developer Relations Engineer (San Francisco, CA)
⚠️  Channel full error count: 1/5
[2026-01-16T19:51:43.883Z] [BOT] ✅ Created forum post: 🏢 Developer Relations Engineer (San Francisco, CA) @ supabase in #🌉・san-francisco
[2026-01-16T19:51:43.883Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:51:45.384Z] [BOT] 💾 Marked as posted: Developer Relations Engineer (San Francisco, CA) @ supabase (instance #1)
[2026-01-16T19:51:45.384Z] [BOT] 💾 BEFORE ARCHIVING: 2069 jobs in database
[2026-01-16T19:51:45.386Z] [BOT] ✅ No jobs to archive (all 2069 jobs within 7-day window)
[2026-01-16T19:51:45.404Z] [BOT] 💾 Saved posted_jobs.json: 2069 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:51:45.405Z] [BOT] 📍 [ROUTING] "New Grad – Software Engineering" @ ORG_7f2d0c69
[2026-01-16T19:51:45.405Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:51:45.739Z] [BOT] ✅ Created forum post: 🏢 New Grad – Software Engineering @ ORG_7f2d0c69 in #💻・tech-jobs
[2026-01-16T19:51:45.739Z] [BOT] ✅ Industry: New Grad – Software Engineering @ ORG_7f2d0c69
[2026-01-16T19:51:47.431Z] [BOT] ✅ Created forum post: 🏢 New Grad – Software Engineering @ ORG_7f2d0c69 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:51:48.932Z] [BOT] 💾 Marked as posted: New Grad – Software Engineering @ ORG_7f2d0c69 (instance #1)
💾 BEFORE ARCHIVING: 2070 jobs in database
[2026-01-16T19:51:48.934Z] [BOT] ✅ No jobs to archive (all 2070 jobs within 7-day window)
[2026-01-16T19:51:48.946Z] [BOT] 💾 Saved posted_jobs.json: 2070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:51:48.947Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_66279f04
[2026-01-16T19:51:48.947Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:51:49.303Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_66279f04 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_66279f04
[2026-01-16T19:51:51.019Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_66279f04 in #🤠・austin
[2026-01-16T19:51:51.020Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T19:51:52.521Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_66279f04 (instance #1)
[2026-01-16T19:51:52.521Z] [BOT] 💾 BEFORE ARCHIVING: 2071 jobs in database
[2026-01-16T19:51:52.523Z] [BOT] ✅ No jobs to archive (all 2071 jobs within 7-day window)
[2026-01-16T19:51:52.541Z] [BOT] 💾 Saved posted_jobs.json: 2071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:51:52.542Z] [BOT] 📍 [ROUTING] "Product Applications Engineer" @ ORG_8f6fe0d8 Devices
[2026-01-16T19:51:52.542Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:51:52.932Z] [BOT] ✅ Created forum post: 🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices in #💻・tech-jobs
[2026-01-16T19:51:52.932Z] [BOT] ✅ Industry: Product Applications Engineer @ ORG_8f6fe0d8 Devices
[2026-01-16T19:51:54.691Z] [BOT] ✅ Created forum post: 🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:51:56.191Z] [BOT] 💾 Marked as posted: Product Applications Engineer @ ORG_8f6fe0d8 Devices (instance #1)
[2026-01-16T19:51:56.191Z] [BOT] 💾 BEFORE ARCHIVING: 2072 jobs in database
[2026-01-16T19:51:56.193Z] [BOT] ✅ No jobs to archive (all 2072 jobs within 7-day window)
[2026-01-16T19:51:56.208Z] [BOT] 💾 Saved posted_jobs.json: 2072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:51:56.208Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Applications" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-16T19:51:56.209Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:51:56.368Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Applications @ ORG_08c9a13c
[2026-01-16T19:51:58.318Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:51:59.820Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Applications @ ORG_08c9a13c (instance #1)
[2026-01-16T19:51:59.820Z] [BOT] 💾 BEFORE ARCHIVING: 2073 jobs in database
[2026-01-16T19:51:59.822Z] [BOT] ✅ No jobs to archive (all 2073 jobs within 7-day window)
[2026-01-16T19:51:59.836Z] [BOT] 💾 Saved posted_jobs.json: 2073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:51:59.837Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
[2026-01-16T19:51:59.837Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:52:00.106Z] [BOT] ✅ Created forum post: 🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #💻・tech-jobs
[2026-01-16T19:52:00.106Z] [BOT] ✅ Industry: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank
[2026-01-16T19:52:01.852Z] [BOT] ✅ Created forum post: 🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #🗽・new-york
[2026-01-16T19:52:01.853Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T19:52:03.354Z] [BOT] 💾 Marked as posted: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (instance #1)
[2026-01-16T19:52:03.354Z] [BOT] 💾 BEFORE ARCHIVING: 2074 jobs in database
[2026-01-16T19:52:03.356Z] [BOT] ✅ No jobs to archive (all 2074 jobs within 7-day window)
[2026-01-16T19:52:03.371Z] [BOT] 💾 Saved posted_jobs.json: 2074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:03.372Z] [BOT] 💾 Marked as posted: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (instance #1)
[2026-01-16T19:52:03.372Z] [BOT] 💾 BEFORE ARCHIVING: 2075 jobs in database
[2026-01-16T19:52:03.373Z] [BOT] ✅ No jobs to archive (all 2075 jobs within 7-day window)
[2026-01-16T19:52:03.385Z] [BOT] 💾 Saved posted_jobs.json: 2075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:06.387Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-16T19:52:06.387Z] [BOT] 📍 [ROUTING] "Computer Vision & Machine Learning, Junior" @ ORG_1670f014 Control Systems
[2026-01-16T19:52:06.387Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:52:06.611Z] [BOT] ✅ Created forum post: 🏢 Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems in #🤖・ai-jobs
[2026-01-16T19:52:06.611Z] [BOT] ✅ Industry: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems
[2026-01-16T19:52:08.624Z] [BOT] ✅ Created forum post: 🏢 Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems in #🤠・austin
[2026-01-16T19:52:08.625Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T19:52:10.126Z] [BOT] 💾 Marked as posted: Computer Vision & Machine Learning, Junior @ ORG_1670f014 Control Systems (instance #1)
[2026-01-16T19:52:10.126Z] [BOT] 💾 BEFORE ARCHIVING: 2076 jobs in database
[2026-01-16T19:52:10.128Z] [BOT] ✅ No jobs to archive (all 2076 jobs within 7-day window)
[2026-01-16T19:52:10.141Z] [BOT] 💾 Saved posted_jobs.json: 2076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:10.142Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:52:10.589Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-16T19:52:10.589Z] [BOT] ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2026-01-16T19:52:12.350Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:52:13.851Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-16T19:52:13.851Z] [BOT] 💾 BEFORE ARCHIVING: 2077 jobs in database
[2026-01-16T19:52:13.853Z] [BOT] ✅ No jobs to archive (all 2077 jobs within 7-day window)
[2026-01-16T19:52:13.866Z] [BOT] 💾 Saved posted_jobs.json: 2077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:13.867Z] [BOT] 📍 [ROUTING] "Support Engineer" @ ORG_c67ce9a6
[2026-01-16T19:52:13.867Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:52:14.117Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_c67ce9a6 in #🤖・ai-jobs
[2026-01-16T19:52:14.117Z] [BOT] ✅ Industry: Support Engineer @ ORG_c67ce9a6
[2026-01-16T19:52:15.875Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_c67ce9a6 in #🌉・san-francisco
[2026-01-16T19:52:15.875Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:52:17.376Z] [BOT] 💾 Marked as posted: Support Engineer @ ORG_c67ce9a6 (instance #1)
[2026-01-16T19:52:17.376Z] [BOT] 💾 BEFORE ARCHIVING: 2078 jobs in database
[2026-01-16T19:52:17.378Z] [BOT] ✅ No jobs to archive (all 2078 jobs within 7-day window)
[2026-01-16T19:52:17.390Z] [BOT] 💾 Saved posted_jobs.json: 2078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:17.391Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career - PhD - Infrastructure" @ ORG_ce770667
[2026-01-16T19:52:17.391Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:52:17.635Z] [BOT] ✅ Created forum post: 🟢 Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667
[2026-01-16T19:52:19.444Z] [BOT] ✅ Created forum post: 🟢 Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-16T19:52:20.946Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 (instance #1)
[2026-01-16T19:52:20.946Z] [BOT] 💾 BEFORE ARCHIVING: 2079 jobs in database
[2026-01-16T19:52:20.947Z] [BOT] ✅ No jobs to archive (all 2079 jobs within 7-day window)
[2026-01-16T19:52:20.960Z] [BOT] 💾 Saved posted_jobs.json: 2079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:52:23.961Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T19:52:23.962Z] [BOT] ⏭️  Skipping duplicate: JID_c8d334f4 (posted within 7 days)
[2026-01-16T19:52:23.962Z] [BOT] ⏭️  Skipping duplicate: JID_003c5281 (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_6e8eff51-engineer_2116586-1 (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_dfc492b4 (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_784cf8b0-engineering_r255206-1 (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_bf0b16a2-detail (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2e04d983-detail (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_c9a15e92 (posted within 7 days)
[2026-01-16T19:52:23.963Z] [BOT] ⏭️  Skipping duplicate: JID_1fc27256 (posted within 7 days)
[2026-01-16T19:52:23.964Z] [BOT] ⏭️  Skipping duplicate: JID_ff4b39dc (posted within 7 days)
[2026-01-16T19:52:24.077Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-16T19:52:24.262Z] [BOT] ✅ Saved pending queue: 2772 total (2752 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T19:52:24.262Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T19:52:24.322Z] [BOT] 📂 Loaded 4305 existing routing entries
[2026-01-16T19:52:24.393Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T19:52:24.393Z] [BOT] Total entries: 4315
   Timestamp: 2026-01-16T19:52:24.372Z
[2026-01-16T19:52:24.393Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T19:52:24.394Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-16T19:52:24.394Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T19:52:24.394Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🤠・austin: 2 posts
[2026-01-16T19:52:24.394Z] [BOT] 5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-16T19:52:26.422Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2690) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Developer Relations Engineer (San Francisco, CA): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer Relations Engineer (San Francisco, CA)
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*