# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T23:40:54.499Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T23:39:56.166Z] ========================================
[2026-01-17T23:39:56.167Z] Discord Bot Execution Log
[2026-01-17T23:39:56.168Z] Environment: GitHub Actions
[2026-01-17T23:39:56.168Z] Node Version: v20.19.6
[2026-01-17T23:39:56.168Z] ========================================
[2026-01-17T23:39:56.168Z] Environment Variables Check:
[2026-01-17T23:39:56.168Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T23:39:56.168Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.168Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T23:39:56.168Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T23:39:56.168Z] 
Multi-Channel Configuration:
[2026-01-17T23:39:56.168Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T23:39:56.169Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T23:39:56.169Z] 
Data Files Check:
[2026-01-17T23:39:56.170Z] .github/data/new_jobs.json: ✅ Exists (10 items, 81908 bytes)
[2026-01-17T23:39:56.179Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1354584 bytes)
[2026-01-17T23:39:56.179Z] 
========================================
[2026-01-17T23:39:56.179Z] Starting Enhanced Discord Bot...
[2026-01-17T23:39:56.179Z] ========================================
[2026-01-17T23:39:56.716Z] [BOT] ✅ Loaded V2 database: 2501 jobs
[2026-01-17T23:39:57.549Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T23:39:57.549Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T23:39:57.549Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T23:39:57.666Z] [BOT] ✅ Loaded pending queue: 2876 total (2856 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Real Estate Graduate at Vistry Group
[2026-01-17T23:39:57.669Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T23:39:57.670Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T23:39:57.670Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T23:39:57.671Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T23:39:57.671Z] [BOT] (1 grouped as same job with different locations)
[2026-01-17T23:39:57.671Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T23:39:57.675Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-17T23:39:57.676Z] [BOT] 📍 [ROUTING] "Real Estate Graduate" @ ORG_9e04a5f8 Group
[2026-01-17T23:39:57.676Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T23:39:57.693Z] [BOT ERROR] (node:3078) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T23:39:57.813Z] [BOT ERROR] ❌ Error posting job Real Estate Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Real Estate Graduate @ ORG_9e04a5f8 Group',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-17T23:39:57.813Z] [BOT] ❌ Industry post failed: Real Estate Graduate
⚠️  Channel full error count: 1/5
[2026-01-17T23:39:59.661Z] [BOT] ✅ Created forum post: 🏢 Real Estate Graduate @ ORG_9e04a5f8 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:40:01.162Z] [BOT] 💾 Marked as posted: Real Estate Graduate @ ORG_9e04a5f8 Group (instance #1)
[2026-01-17T23:40:01.162Z] [BOT] 💾 BEFORE ARCHIVING: 2502 jobs in database
[2026-01-17T23:40:01.164Z] [BOT] ✅ No jobs to archive (all 2502 jobs within 7-day window)
[2026-01-17T23:40:01.185Z] [BOT] 💾 Saved posted_jobs.json: 2502 active jobs
[2026-01-17T23:40:01.185Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:04.185Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T23:40:04.185Z] [BOT] 📍 [ROUTING] "Leasing Professional - Residential" @ ORG_a19f5876
   Category: SALES (matched: "sales")
[2026-01-17T23:40:04.185Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T23:40:04.462Z] [BOT] ✅ Created forum post: 🏢 Leasing Professional - Residential @ ORG_a19f5876 in #💲・sales-jobs
  ✅ Industry: Leasing Professional - Residential @ ORG_a19f5876
[2026-01-17T23:40:06.152Z] [BOT] ✅ Created forum post: 🏢 Leasing Professional - Residential @ ORG_a19f5876 in #💻・remote-usa
[2026-01-17T23:40:06.153Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T23:40:07.653Z] [BOT] 💾 Marked as posted: Leasing Professional - Residential @ ORG_a19f5876 (instance #1)
[2026-01-17T23:40:07.653Z] [BOT] 💾 BEFORE ARCHIVING: 2503 jobs in database
[2026-01-17T23:40:07.655Z] [BOT] ✅ No jobs to archive (all 2503 jobs within 7-day window)
[2026-01-17T23:40:07.673Z] [BOT] 💾 Saved posted_jobs.json: 2503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:10.674Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T23:40:10.676Z] [BOT] 📍 [ROUTING] "Healthcare Analyst" @ ORG_a212407d Health Care
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T23:40:11.071Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_a212407d Health Care in #📈・JID_fb739488
  ✅ Industry: Healthcare Analyst @ ORG_a212407d Health Care
[2026-01-17T23:40:12.763Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_a212407d Health Care in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T23:40:14.265Z] [BOT] 💾 Marked as posted: Healthcare Analyst @ ORG_a212407d Health Care (instance #1)
[2026-01-17T23:40:14.265Z] [BOT] 💾 BEFORE ARCHIVING: 2504 jobs in database
[2026-01-17T23:40:14.267Z] [BOT] ✅ No jobs to archive (all 2504 jobs within 7-day window)
[2026-01-17T23:40:14.284Z] [BOT] 💾 Saved posted_jobs.json: 2504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:17.284Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T23:40:17.285Z] [BOT] 📍 [ROUTING] "Benefits Technology Analyst" @ ORG_22fa11a5ingham & Butler
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T23:40:17.572Z] [BOT] ✅ Created forum post: 🏢 Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler in #📣・marketing-jobs
  ✅ Industry: Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler
[2026-01-17T23:40:19.572Z] [BOT] ✅ Created forum post: 🏢 Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:40:21.073Z] [BOT] 💾 Marked as posted: Benefits Technology Analyst @ ORG_22fa11a5ingham & Butler (instance #1)
[2026-01-17T23:40:21.074Z] [BOT] 💾 BEFORE ARCHIVING: 2505 jobs in database
[2026-01-17T23:40:21.075Z] [BOT] ✅ No jobs to archive (all 2505 jobs within 7-day window)
[2026-01-17T23:40:21.090Z] [BOT] 💾 Saved posted_jobs.json: 2505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:24.091Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-17T23:40:24.092Z] [BOT] 📍 [ROUTING] "Data Scientist - AI Engineering" @ ORG_35fa4cf8
   Category: AI (matched: "machine learning")
[2026-01-17T23:40:24.092Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T23:40:24.493Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - AI Engineering @ ORG_35fa4cf8 in #🤖・ai-jobs
  ✅ Industry: Data Scientist - AI Engineering @ ORG_35fa4cf8
[2026-01-17T23:40:26.238Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - AI Engineering @ ORG_35fa4cf8 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:40:27.738Z] [BOT] 💾 Marked as posted: Data Scientist - AI Engineering @ ORG_35fa4cf8 (instance #1)
[2026-01-17T23:40:27.739Z] [BOT] 💾 BEFORE ARCHIVING: 2506 jobs in database
[2026-01-17T23:40:27.740Z] [BOT] ✅ No jobs to archive (all 2506 jobs within 7-day window)
[2026-01-17T23:40:27.759Z] [BOT] 💾 Saved posted_jobs.json: 2506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:27.760Z] [BOT] 📍 [ROUTING] "DL Algorithms Engineer – New College Graduate 2026 - Cosmos" @ ORG_0890f456
[2026-01-17T23:40:27.760Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T23:40:28.010Z] [BOT] ✅ Created forum post: 🏢 DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456
[2026-01-17T23:40:29.716Z] [BOT] ✅ Created forum post: 🏢 DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T23:40:31.217Z] [BOT] 💾 Marked as posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 (instance #1)
[2026-01-17T23:40:31.217Z] [BOT] 💾 BEFORE ARCHIVING: 2507 jobs in database
[2026-01-17T23:40:31.219Z] [BOT] ✅ No jobs to archive (all 2507 jobs within 7-day window)
[2026-01-17T23:40:31.234Z] [BOT] 💾 Saved posted_jobs.json: 2507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:31.235Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Auto)" @ reddit
[2026-01-17T23:40:31.235Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T23:40:31.477Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Auto) @ reddit in #🤖・ai-jobs
[2026-01-17T23:40:31.477Z] [BOT] ✅ Industry: Senior Client Partner, Large Customer Sales (Auto) @ reddit
[2026-01-17T23:40:33.169Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Auto) @ reddit in #🦢・los-angeles
[2026-01-17T23:40:33.169Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T23:40:34.670Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Auto) @ reddit (instance #1)
[2026-01-17T23:40:34.670Z] [BOT] 💾 BEFORE ARCHIVING: 2508 jobs in database
[2026-01-17T23:40:34.672Z] [BOT] ✅ No jobs to archive (all 2508 jobs within 7-day window)
[2026-01-17T23:40:34.687Z] [BOT] 💾 Saved posted_jobs.json: 2508 active jobs
[2026-01-17T23:40:34.687Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:34.687Z] [BOT] 📍 [ROUTING] "Client Account Manager, Large Customer Sales (Auto)" @ reddit
[2026-01-17T23:40:34.687Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-17T23:40:34.915Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Auto) @ reddit in #🤖・ai-jobs
[2026-01-17T23:40:34.916Z] [BOT] ✅ Industry: Client Account Manager, Large Customer Sales (Auto) @ reddit
[2026-01-17T23:40:36.599Z] [BOT] ✅ Created forum post: 🏢 Client Account Manager, Large Customer Sales (Auto) @ reddit in #🦢・los-angeles
[2026-01-17T23:40:36.599Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T23:40:38.101Z] [BOT] 💾 Marked as posted: Client Account Manager, Large Customer Sales (Auto) @ reddit (instance #1)
[2026-01-17T23:40:38.101Z] [BOT] 💾 BEFORE ARCHIVING: 2509 jobs in database
[2026-01-17T23:40:38.102Z] [BOT] ✅ No jobs to archive (all 2509 jobs within 7-day window)
[2026-01-17T23:40:38.116Z] [BOT] 💾 Saved posted_jobs.json: 2509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:38.117Z] [BOT] 📍 [ROUTING] "Director of Trust & Safety Engineering" @ vercel
[2026-01-17T23:40:38.117Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-17T23:40:38.117Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T23:40:38.291Z] [BOT] ✅ Created forum post: 🏢 Director of Trust & Safety Engineering @ vercel in #🤖・ai-jobs
  ✅ Industry: Director of Trust & Safety Engineering @ vercel
[2026-01-17T23:40:39.993Z] [BOT] ✅ Created forum post: 🏢 Director of Trust & Safety Engineering @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T23:40:41.495Z] [BOT] 💾 Marked as posted: Director of Trust & Safety Engineering @ vercel (instance #1)
[2026-01-17T23:40:41.495Z] [BOT] 💾 BEFORE ARCHIVING: 2510 jobs in database
[2026-01-17T23:40:41.497Z] [BOT] ✅ No jobs to archive (all 2510 jobs within 7-day window)
[2026-01-17T23:40:41.511Z] [BOT] 💾 Saved posted_jobs.json: 2510 active jobs
[2026-01-17T23:40:41.511Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:44.512Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-17T23:40:44.513Z] [BOT] 📍 [ROUTING] "Engineer Data & Analytics" @ ORG_a35c6c02
[2026-01-17T23:40:44.513Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:40:44.776Z] [BOT] ✅ Created forum post: 🏢 Engineer Data & Analytics @ ORG_a35c6c02 in #💻・tech-jobs
  ✅ Industry: Engineer Data & Analytics @ ORG_a35c6c02
[2026-01-17T23:40:46.530Z] [BOT] ✅ Created forum post: 🏢 Engineer Data & Analytics @ ORG_a35c6c02 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:40:48.031Z] [BOT] 💾 Marked as posted: Engineer Data & Analytics @ ORG_a35c6c02 (instance #1)
[2026-01-17T23:40:48.031Z] [BOT] 💾 BEFORE ARCHIVING: 2511 jobs in database
[2026-01-17T23:40:48.033Z] [BOT] ✅ No jobs to archive (all 2511 jobs within 7-day window)
[2026-01-17T23:40:48.047Z] [BOT] 💾 Saved posted_jobs.json: 2511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:40:51.047Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T23:40:51.048Z] [BOT] ⏭️  Skipping duplicate: JID_9c6c81ed (posted within 7 days)
[2026-01-17T23:40:51.048Z] [BOT] ⏭️  Skipping duplicate: JID_28c7c951 (posted within 7 days)
[2026-01-17T23:40:51.048Z] [BOT] ⏭️  Skipping duplicate: JID_c7891044 (posted within 7 days)
[2026-01-17T23:40:51.048Z] [BOT] ⏭️  Skipping duplicate: JID_c6d2118b (posted within 7 days)
[2026-01-17T23:40:51.049Z] [BOT] ⏭️  Skipping duplicate: JID_a2d35122 (posted within 7 days)
[2026-01-17T23:40:51.049Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_e573726c-comcast_careers-JID_5100cb4a-analytics_r427045-1 (posted within 7 days)
[2026-01-17T23:40:51.049Z] [BOT] ⏭️  Skipping duplicate: JID_4d623c80 (posted within 7 days)
⏭️  Skipping duplicate: JID_aaf56659 (posted within 7 days)
[2026-01-17T23:40:51.049Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
[2026-01-17T23:40:51.185Z] [BOT] ✅ Loaded pending queue: 2876 total (2856 pending, 20 enriched, 0 posted)
[2026-01-17T23:40:51.356Z] [BOT] ✅ Saved pending queue: 2876 total (2856 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T23:40:51.356Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T23:40:51.415Z] [BOT] 📂 Loaded 4675 existing routing entries
[2026-01-17T23:40:51.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4685
   Timestamp: 2026-01-17T23:40:51.464Z
[2026-01-17T23:40:51.485Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
   Successful: 19
[2026-01-17T23:40:51.485Z] [BOT] Failed: 1
   Skipped: 0
[2026-01-17T23:40:51.485Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-17T23:40:51.485Z] [BOT] Channels used: 9
   Top channels:
     1. #💻・remote-usa: 5 posts
     2. #🤖・ai-jobs: 5 posts
     3. #🌉・san-francisco: 2 posts
     4. #🦢・los-angeles: 2 posts
[2026-01-17T23:40:51.485Z] [BOT] 5. #💲・sales-jobs: 1 posts
[2026-01-17T23:40:51.485Z] [BOT] [STATS] Channel stats saved
[2026-01-17T23:40:53.511Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3078) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Real Estate Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Real Estate Graduate
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*