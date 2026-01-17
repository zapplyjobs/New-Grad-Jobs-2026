# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T07:08:07.713Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T07:07:22.368Z] ========================================
[2026-01-17T07:07:22.369Z] Discord Bot Execution Log
[2026-01-17T07:07:22.369Z] Environment: GitHub Actions
[2026-01-17T07:07:22.369Z] Node Version: v20.19.6
[2026-01-17T07:07:22.370Z] ========================================
[2026-01-17T07:07:22.370Z] Environment Variables Check:
[2026-01-17T07:07:22.370Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T07:07:22.370Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T07:07:22.370Z] 
Multi-Channel Configuration:
[2026-01-17T07:07:22.370Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.370Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.371Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.371Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T07:07:22.371Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T07:07:22.371Z] 
Data Files Check:
[2026-01-17T07:07:22.371Z] .github/data/new_jobs.json: ✅ Exists (10 items, 17073 bytes)
[2026-01-17T07:07:22.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1249505 bytes)
[2026-01-17T07:07:22.381Z] 
========================================
[2026-01-17T07:07:22.381Z] Starting Enhanced Discord Bot...
[2026-01-17T07:07:22.381Z] ========================================
[2026-01-17T07:07:22.839Z] [BOT] ✅ Loaded V2 database: 2308 jobs
[2026-01-17T07:07:23.440Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T07:07:23.440Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T07:07:23.440Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T07:07:23.594Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) at TikTok
[2026-01-17T07:07:23.596Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T07:07:23.596Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T07:07:23.596Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T07:07:23.597Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T07:07:23.597Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-17T07:07:23.597Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T07:07:23.600Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-17T07:07:23.601Z] [BOT] 📍 [ROUTING] "Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
[2026-01-17T07:07:23.601Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:23.617Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T07:07:23.719Z] [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T07:07:23.719Z] [BOT] ❌ Industry post failed: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)
⚠️  Channel full error count: 1/5
[2026-01-17T07:07:25.405Z] [BOT] ✅ Created forum post: 🏢 Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:07:26.905Z] [BOT] 💾 Marked as posted: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:07:26.906Z] [BOT] 💾 BEFORE ARCHIVING: 2309 jobs in database
[2026-01-17T07:07:26.907Z] [BOT] ✅ No jobs to archive (all 2309 jobs within 7-day window)
[2026-01-17T07:07:26.926Z] [BOT] 💾 Saved posted_jobs.json: 2309 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:26.927Z] [BOT] 📍 [ROUTING] "Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
[2026-01-17T07:07:26.927Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:27.214Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-01-17T07:07:29.013Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:07:30.514Z] [BOT] 💾 Marked as posted: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:07:30.514Z] [BOT] 💾 BEFORE ARCHIVING: 2310 jobs in database
[2026-01-17T07:07:30.515Z] [BOT] ✅ No jobs to archive (all 2310 jobs within 7-day window)
[2026-01-17T07:07:30.528Z] [BOT] 💾 Saved posted_jobs.json: 2310 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:30.528Z] [BOT] 📍 [ROUTING] "Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
[2026-01-17T07:07:30.528Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:30.707Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-01-17T07:07:32.669Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T07:07:34.170Z] [BOT] 💾 Marked as posted: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:07:34.170Z] [BOT] 💾 BEFORE ARCHIVING: 2311 jobs in database
[2026-01-17T07:07:34.171Z] [BOT] ✅ No jobs to archive (all 2311 jobs within 7-day window)
[2026-01-17T07:07:34.188Z] [BOT] 💾 Saved posted_jobs.json: 2311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:34.189Z] [BOT] 📍 [ROUTING] "Software Engineer I - PAAS" @ ORG_28d3793c
[2026-01-17T07:07:34.189Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:34.393Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - PAAS @ ORG_28d3793c in #💻・tech-jobs
  ✅ Industry: Software Engineer I - PAAS @ ORG_28d3793c
[2026-01-17T07:07:36.116Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - PAAS @ ORG_28d3793c in #🌧️・seattle
[2026-01-17T07:07:36.116Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T07:07:37.618Z] [BOT] 💾 Marked as posted: Software Engineer I - PAAS @ ORG_28d3793c (instance #1)
[2026-01-17T07:07:37.618Z] [BOT] 💾 BEFORE ARCHIVING: 2312 jobs in database
[2026-01-17T07:07:37.620Z] [BOT] ✅ No jobs to archive (all 2312 jobs within 7-day window)
[2026-01-17T07:07:37.635Z] [BOT] 💾 Saved posted_jobs.json: 2312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:37.636Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_8e152e21
[2026-01-17T07:07:37.636Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:37.813Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_8e152e21 in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_8e152e21
[2026-01-17T07:07:39.580Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_8e152e21 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:07:41.080Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_8e152e21 (instance #1)
💾 BEFORE ARCHIVING: 2313 jobs in database
[2026-01-17T07:07:41.082Z] [BOT] ✅ No jobs to archive (all 2313 jobs within 7-day window)
[2026-01-17T07:07:41.095Z] [BOT] 💾 Saved posted_jobs.json: 2313 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:41.096Z] [BOT] 📍 [ROUTING] "Software Engineer, Autonomy" @ ORG_4d802438
[2026-01-17T07:07:41.096Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:41.317Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Autonomy @ ORG_4d802438 in #💻・tech-jobs
[2026-01-17T07:07:41.318Z] [BOT] ✅ Industry: Software Engineer, Autonomy @ ORG_4d802438
[2026-01-17T07:07:43.211Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Autonomy @ ORG_4d802438 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-17T07:07:44.712Z] [BOT] 💾 Marked as posted: Software Engineer, Autonomy @ ORG_4d802438 (instance #1)
[2026-01-17T07:07:44.712Z] [BOT] 💾 BEFORE ARCHIVING: 2314 jobs in database
[2026-01-17T07:07:44.714Z] [BOT] ✅ No jobs to archive (all 2314 jobs within 7-day window)
[2026-01-17T07:07:44.729Z] [BOT] 💾 Saved posted_jobs.json: 2314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:44.730Z] [BOT] 📍 [ROUTING] "Product Security Engineer (University Grad)" @ ORG_4f749de7
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T07:07:44.730Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:44.907Z] [BOT] ✅ Created forum post: 🔵 Product Security Engineer (University Grad) @ ORG_4f749de7 in #💻・tech-jobs
[2026-01-17T07:07:44.907Z] [BOT] ✅ Industry: Product Security Engineer (University Grad) @ ORG_4f749de7
[2026-01-17T07:07:46.636Z] [BOT] ✅ Created forum post: 🔵 Product Security Engineer (University Grad) @ ORG_4f749de7 in #🌧️・seattle
[2026-01-17T07:07:46.636Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T07:07:48.136Z] [BOT] 💾 Marked as posted: Product Security Engineer (University Grad) @ ORG_4f749de7 (instance #1)
[2026-01-17T07:07:48.136Z] [BOT] 💾 BEFORE ARCHIVING: 2315 jobs in database
[2026-01-17T07:07:48.138Z] [BOT] ✅ No jobs to archive (all 2315 jobs within 7-day window)
[2026-01-17T07:07:48.153Z] [BOT] 💾 Saved posted_jobs.json: 2315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:48.153Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_a258b30f Lending Services
   Category: TECH (matched: "software")
[2026-01-17T07:07:48.153Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:07:48.330Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_a258b30f Lending Services in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_a258b30f Lending Services
[2026-01-17T07:07:50.059Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_a258b30f Lending Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:07:51.560Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_a258b30f Lending Services (instance #1)
💾 BEFORE ARCHIVING: 2316 jobs in database
[2026-01-17T07:07:51.561Z] [BOT] ✅ No jobs to archive (all 2316 jobs within 7-day window)
[2026-01-17T07:07:51.574Z] [BOT] 💾 Saved posted_jobs.json: 2316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:54.576Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
📍 [ROUTING] "Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T07:07:54.576Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:07:54.835Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-01-17T07:07:56.527Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T07:07:58.027Z] [BOT] 💾 Marked as posted: Machine Learning Engineer (Lead Ads Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T07:07:58.028Z] [BOT] 💾 BEFORE ARCHIVING: 2317 jobs in database
[2026-01-17T07:07:58.029Z] [BOT] ✅ No jobs to archive (all 2317 jobs within 7-day window)
[2026-01-17T07:07:58.042Z] [BOT] 💾 Saved posted_jobs.json: 2317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:07:58.043Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_28d3793c
[2026-01-17T07:07:58.043Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:07:58.297Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_28d3793c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_28d3793c
[2026-01-17T07:08:00.025Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_28d3793c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T07:08:01.527Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_28d3793c (instance #1)
💾 BEFORE ARCHIVING: 2318 jobs in database
[2026-01-17T07:08:01.528Z] [BOT] ✅ No jobs to archive (all 2318 jobs within 7-day window)
[2026-01-17T07:08:01.542Z] [BOT] 💾 Saved posted_jobs.json: 2318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:08:04.542Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_bc68ad0e (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_67095201 (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e3702d52 (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7cb7fce5 (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_5ffad40c (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_56d6aa79 (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_a22e1a29 (posted within 7 days)
⏭️  Skipping duplicate: JID_b27f664a (posted within 7 days)
[2026-01-17T07:08:04.543Z] [BOT] ⏭️  Skipping duplicate: JID_22d97a8a (posted within 7 days)
[2026-01-17T07:08:04.544Z] [BOT] ⏭️  Skipping duplicate: JID_6e7a6309 (posted within 7 days)
[2026-01-17T07:08:04.692Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[2026-01-17T07:08:04.870Z] [BOT] ✅ Saved pending queue: 2884 total (2864 pending, 10 enriched, 10 posted)
[2026-01-17T07:08:04.870Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T07:08:04.931Z] [BOT] 📂 Loaded 4525 existing routing entries
[2026-01-17T07:08:04.994Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4535
[2026-01-17T07:08:04.994Z] [BOT] Timestamp: 2026-01-17T07:08:04.978Z
[2026-01-17T07:08:04.995Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
[2026-01-17T07:08:04.995Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌧️・seattle: 4 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-17T07:08:04.995Z] [BOT] [STATS] Channel stats saved
[2026-01-17T07:08:07.013Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*