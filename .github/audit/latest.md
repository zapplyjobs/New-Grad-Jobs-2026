# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T07:44:10.294Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T07:43:16.545Z] ========================================
[2026-01-14T07:43:16.546Z] Discord Bot Execution Log
[2026-01-14T07:43:16.547Z] Environment: GitHub Actions
[2026-01-14T07:43:16.547Z] Node Version: v20.19.6
[2026-01-14T07:43:16.547Z] ========================================
[2026-01-14T07:43:16.547Z] Environment Variables Check:
[2026-01-14T07:43:16.547Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T07:43:16.547Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.547Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T07:43:16.547Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T07:43:16.547Z] 
Multi-Channel Configuration:
[2026-01-14T07:43:16.547Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T07:43:16.548Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T07:43:16.548Z] 
Data Files Check:
[2026-01-14T07:43:16.549Z] .github/data/new_jobs.json: ✅ Exists (10 items, 46884 bytes)
[2026-01-14T07:43:16.554Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 692387 bytes)
[2026-01-14T07:43:16.555Z] 
========================================
[2026-01-14T07:43:16.555Z] Starting Enhanced Discord Bot...
[2026-01-14T07:43:16.555Z] ========================================
[2026-01-14T07:43:17.092Z] [BOT] ✅ Loaded V2 database: 1305 jobs
[2026-01-14T07:43:17.843Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T07:43:17.844Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T07:43:17.844Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T07:43:17.955Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Commerce Architects
[2026-01-14T07:43:17.957Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T07:43:17.958Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T07:43:17.958Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T07:43:17.959Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T07:43:17.959Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T07:43:17.963Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T07:43:17.964Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_8a40e6ae Architects
[2026-01-14T07:43:17.964Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:17.981Z] [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T07:43:18.162Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ ORG_8a40e6ae Architects',
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
[2026-01-14T07:43:18.163Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-14T07:43:19.886Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_8a40e6ae Architects in #🌧️・seattle
[2026-01-14T07:43:19.886Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-14T07:43:21.387Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_8a40e6ae Architects (instance #1)
[2026-01-14T07:43:21.387Z] [BOT] 💾 BEFORE ARCHIVING: 1306 jobs in database
[2026-01-14T07:43:21.388Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T07:43:21.393Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T07:43:21.393Z] [BOT] ✅ Archiving complete: 1 archived, 1305 active
[2026-01-14T07:43:21.402Z] [BOT] 💾 Saved posted_jobs.json: 1305 active jobs
[2026-01-14T07:43:21.403Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:21.403Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_bcf1e359
[2026-01-14T07:43:21.403Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:21.683Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_bcf1e359 in #💻・tech-jobs
[2026-01-14T07:43:21.683Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_bcf1e359
[2026-01-14T07:43:23.408Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_bcf1e359 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:43:24.908Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_bcf1e359 (instance #1)
[2026-01-14T07:43:24.909Z] [BOT] 💾 BEFORE ARCHIVING: 1306 jobs in database
[2026-01-14T07:43:24.910Z] [BOT] ✅ No jobs to archive (all 1306 jobs within 7-day window)
[2026-01-14T07:43:24.917Z] [BOT] 💾 Saved posted_jobs.json: 1306 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:24.918Z] [BOT] 📍 [ROUTING] "Java Developer" @ mthree
   Category: TECH (matched: "software")
[2026-01-14T07:43:24.918Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:25.211Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ mthree in #💻・tech-jobs
[2026-01-14T07:43:25.211Z] [BOT] ✅ Industry: Java Developer @ mthree
[2026-01-14T07:43:26.930Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ mthree in #🚌・boston
[2026-01-14T07:43:26.931Z] [BOT] ✅ Location: 🚌・boston
[2026-01-14T07:43:28.431Z] [BOT] 💾 Marked as posted: Java Developer @ mthree (instance #1)
[2026-01-14T07:43:28.431Z] [BOT] 💾 BEFORE ARCHIVING: 1307 jobs in database
[2026-01-14T07:43:28.432Z] [BOT] ✅ No jobs to archive (all 1307 jobs within 7-day window)
[2026-01-14T07:43:28.442Z] [BOT] 💾 Saved posted_jobs.json: 1307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:28.443Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer Graduate" @ ORG_f5f00f52
[2026-01-14T07:43:28.443Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:28.660Z] [BOT] ✅ Created forum post: 🏢 Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #💻・tech-jobs
[2026-01-14T07:43:28.660Z] [BOT] ✅ Industry: Full Stack Software Engineer Graduate @ ORG_f5f00f52
[2026-01-14T07:43:30.413Z] [BOT] ✅ Created forum post: 🏢 Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #🗽・new-york
[2026-01-14T07:43:30.413Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T07:43:31.914Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer Graduate @ ORG_f5f00f52 (instance #1)
[2026-01-14T07:43:31.914Z] [BOT] 💾 BEFORE ARCHIVING: 1308 jobs in database
[2026-01-14T07:43:31.915Z] [BOT] ✅ No jobs to archive (all 1308 jobs within 7-day window)
[2026-01-14T07:43:31.924Z] [BOT] 💾 Saved posted_jobs.json: 1308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:31.924Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - 2026 Start" @ ORG_7bc88ebb
[2026-01-14T07:43:31.925Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:32.142Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #💻・tech-jobs
[2026-01-14T07:43:32.142Z] [BOT] ✅ Industry: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb
[2026-01-14T07:43:34.035Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #🌉・san-francisco
[2026-01-14T07:43:34.035Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:43:35.536Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb (instance #1)
[2026-01-14T07:43:35.536Z] [BOT] 💾 BEFORE ARCHIVING: 1309 jobs in database
[2026-01-14T07:43:35.537Z] [BOT] ✅ No jobs to archive (all 1309 jobs within 7-day window)
[2026-01-14T07:43:35.546Z] [BOT] 💾 Saved posted_jobs.json: 1309 active jobs
[2026-01-14T07:43:35.546Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:35.546Z] [BOT] 📍 [ROUTING] "Tech 1 – Mapping" @ ORG_6f8a62f0 Hathaway Energy
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:43:35.919Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
[2026-01-14T07:43:35.920Z] [BOT] ✅ Industry: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy
[2026-01-14T07:43:37.673Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・remote-usa
[2026-01-14T07:43:37.673Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T07:43:39.174Z] [BOT] 💾 Marked as posted: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2026-01-14T07:43:39.174Z] [BOT] 💾 BEFORE ARCHIVING: 1310 jobs in database
[2026-01-14T07:43:39.175Z] [BOT] ✅ No jobs to archive (all 1310 jobs within 7-day window)
[2026-01-14T07:43:39.184Z] [BOT] 💾 Saved posted_jobs.json: 1310 active jobs
[2026-01-14T07:43:39.184Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:42.185Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T07:43:42.186Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:43:42.445Z] [BOT] ✅ Created forum post: 🏢 Inside Sales Representative - Early Career (2026) @ figma in #💲・sales-jobs
  ✅ Industry: Inside Sales Representative - Early Career (2026) @ figma
[2026-01-14T07:43:44.240Z] [BOT] ✅ Created forum post: 🏢 Inside Sales Representative - Early Career (2026) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T07:43:45.741Z] [BOT] 💾 Marked as posted: Inside Sales Representative - Early Career (2026) @ figma (instance #1)
[2026-01-14T07:43:45.741Z] [BOT] 💾 BEFORE ARCHIVING: 1311 jobs in database
[2026-01-14T07:43:45.742Z] [BOT] ✅ No jobs to archive (all 1311 jobs within 7-day window)
[2026-01-14T07:43:45.752Z] [BOT] 💾 Saved posted_jobs.json: 1311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:48.752Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T07:43:48.753Z] [BOT] 📍 [ROUTING] "Associate Data Analyst" @ ORG_578d5e7d
[2026-01-14T07:43:48.753Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T07:43:49.113Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_578d5e7d in #📈・JID_fb739488
  ✅ Industry: Associate Data Analyst @ ORG_578d5e7d
[2026-01-14T07:43:50.789Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_578d5e7d in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T07:43:52.291Z] [BOT] 💾 Marked as posted: Associate Data Analyst @ ORG_578d5e7d (instance #1)
[2026-01-14T07:43:52.291Z] [BOT] 💾 BEFORE ARCHIVING: 1312 jobs in database
[2026-01-14T07:43:52.292Z] [BOT] ✅ No jobs to archive (all 1312 jobs within 7-day window)
[2026-01-14T07:43:52.303Z] [BOT] 💾 Saved posted_jobs.json: 1312 active jobs
[2026-01-14T07:43:52.303Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:43:55.304Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T07:43:55.304Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Prediction" @ ORG_9eb7abc4
[2026-01-14T07:43:55.304Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:43:55.629Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #🤖・ai-jobs
[2026-01-14T07:43:55.629Z] [BOT] ✅ Industry: Machine Learning Engineer - Prediction @ ORG_9eb7abc4
[2026-01-14T07:43:58.663Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #🚌・boston
[2026-01-14T07:43:58.663Z] [BOT] ✅ Location: 🚌・boston
[2026-01-14T07:44:00.163Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 (instance #1)
[2026-01-14T07:44:00.164Z] [BOT] 💾 BEFORE ARCHIVING: 1313 jobs in database
[2026-01-14T07:44:00.165Z] [BOT] ✅ No jobs to archive (all 1313 jobs within 7-day window)
[2026-01-14T07:44:00.180Z] [BOT] 💾 Saved posted_jobs.json: 1313 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "AI Product Specialist" @ ORG_a0a5b7ba
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T07:44:00.388Z] [BOT] ✅ Created forum post: 🏢 AI Product Specialist @ ORG_a0a5b7ba in #🤖・ai-jobs
  ✅ Industry: AI Product Specialist @ ORG_a0a5b7ba
[2026-01-14T07:44:02.175Z] [BOT] ✅ Created forum post: 🏢 AI Product Specialist @ ORG_a0a5b7ba in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T07:44:03.677Z] [BOT] 💾 Marked as posted: AI Product Specialist @ ORG_a0a5b7ba (instance #1)
[2026-01-14T07:44:03.677Z] [BOT] 💾 BEFORE ARCHIVING: 1314 jobs in database
[2026-01-14T07:44:03.678Z] [BOT] ✅ No jobs to archive (all 1314 jobs within 7-day window)
[2026-01-14T07:44:03.688Z] [BOT] 💾 Saved posted_jobs.json: 1314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:44:06.689Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T07:44:06.689Z] [BOT] ⏭️  Skipping duplicate: JID_b2086fb7 (posted within 7 days)
[2026-01-14T07:44:06.689Z] [BOT] ⏭️  Skipping duplicate: JID_c292fcc0 (posted within 7 days)
[2026-01-14T07:44:06.689Z] [BOT] ⏭️  Skipping duplicate: JID_efb98fbf (posted within 7 days)
[2026-01-14T07:44:06.689Z] [BOT] ⏭️  Skipping duplicate: JID_cb0e6e14 (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_b7215b2b (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_d86c1432 (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_64fd6385 (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_3f2874e7 (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_81a68038 (posted within 7 days)
[2026-01-14T07:44:06.690Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003893 (posted within 7 days)
[2026-01-14T07:44:06.808Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-14T07:44:06.991Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 10 enriched, 10 posted)
[2026-01-14T07:44:06.991Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T07:44:07.045Z] [BOT] 📂 Loaded 3425 existing routing entries
[2026-01-14T07:44:07.106Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3435
[2026-01-14T07:44:07.106Z] [BOT] Timestamp: 2026-01-14T07:44:07.092Z
[2026-01-14T07:44:07.106Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T07:44:07.107Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・new-york: 4 posts
     3. #🌉・san-francisco: 2 posts
     4. #🚌・boston: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-14T07:44:07.107Z] [BOT] [STATS] Channel stats saved
[2026-01-14T07:44:09.134Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*