# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T23:52:02.440Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T23:51:14.320Z] ========================================
[2026-01-14T23:51:14.322Z] Discord Bot Execution Log
[2026-01-14T23:51:14.322Z] Environment: GitHub Actions
[2026-01-14T23:51:14.322Z] Node Version: v20.19.6
[2026-01-14T23:51:14.322Z] ========================================
[2026-01-14T23:51:14.322Z] Environment Variables Check:
[2026-01-14T23:51:14.322Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T23:51:14.323Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T23:51:14.323Z] 
Multi-Channel Configuration:
[2026-01-14T23:51:14.323Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.323Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.324Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T23:51:14.324Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T23:51:14.324Z] 
Data Files Check:
[2026-01-14T23:51:14.325Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168302 bytes)
[2026-01-14T23:51:14.331Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 812198 bytes)
[2026-01-14T23:51:14.331Z] 
========================================
[2026-01-14T23:51:14.331Z] Starting Enhanced Discord Bot...
[2026-01-14T23:51:14.331Z] ========================================
[2026-01-14T23:51:14.858Z] [BOT] ✅ Loaded V2 database: 1526 jobs
[2026-01-14T23:51:15.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T23:51:15.293Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T23:51:15.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T23:51:15.404Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Director, Software Engineering - Growth at figma
[2026-01-14T23:51:15.406Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T23:51:15.406Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T23:51:15.407Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T23:51:15.407Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-14T23:51:15.408Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T23:51:15.411Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T23:51:15.412Z] [BOT] 📍 [ROUTING] "Director, Software Engineering - Growth" @ figma
[2026-01-14T23:51:15.412Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T23:51:15.429Z] [BOT ERROR] (node:2392) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T23:51:15.575Z] [BOT ERROR] ❌ Error posting job Director, Software Engineering - Growth: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Software Engineering - Growth @ figma',
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
[2026-01-14T23:51:15.575Z] [BOT] ❌ Industry post failed: Director, Software Engineering - Growth
⚠️  Channel full error count: 1/5
[2026-01-14T23:51:17.270Z] [BOT] ✅ Created forum post: 🏢 Director, Software Engineering - Growth @ figma in #🌉・san-francisco
[2026-01-14T23:51:17.271Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:18.771Z] [BOT] 💾 Marked as posted: Director, Software Engineering - Growth @ figma (instance #1)
[2026-01-14T23:51:18.772Z] [BOT] 💾 BEFORE ARCHIVING: 1527 jobs in database
[2026-01-14T23:51:18.773Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T23:51:18.778Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-14T23:51:18.778Z] [BOT] ✅ Archiving complete: 3 archived, 1524 active
[2026-01-14T23:51:18.789Z] [BOT] 💾 Saved posted_jobs.json: 1524 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:18.789Z] [BOT] 💾 Marked as posted: Director, Software Engineering - Product Platform @ figma (instance #1)
[2026-01-14T23:51:18.789Z] [BOT] 💾 BEFORE ARCHIVING: 1525 jobs in database
[2026-01-14T23:51:18.791Z] [BOT] ✅ No jobs to archive (all 1525 jobs within 7-day window)
[2026-01-14T23:51:18.801Z] [BOT] 💾 Saved posted_jobs.json: 1525 active jobs
[2026-01-14T23:51:18.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:18.801Z] [BOT] 📍 [ROUTING] "Manager, Software Engineering - Infrastructure" @ figma
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T23:51:19.029Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Infrastructure @ figma in #💻・tech-jobs
[2026-01-14T23:51:19.029Z] [BOT] ✅ Industry: Manager, Software Engineering - Infrastructure @ figma
[2026-01-14T23:51:20.847Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Infrastructure @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:22.348Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Infrastructure @ figma (instance #1)
[2026-01-14T23:51:22.348Z] [BOT] 💾 BEFORE ARCHIVING: 1526 jobs in database
[2026-01-14T23:51:22.349Z] [BOT] ✅ No jobs to archive (all 1526 jobs within 7-day window)
[2026-01-14T23:51:22.359Z] [BOT] 💾 Saved posted_jobs.json: 1526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:22.359Z] [BOT] 📍 [ROUTING] "Software Engineer, C++" @ figma
   Category: TECH (matched: "software")
[2026-01-14T23:51:22.359Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T23:51:22.496Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, C++ @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer, C++ @ figma
[2026-01-14T23:51:24.349Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, C++ @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:25.849Z] [BOT] 💾 Marked as posted: Software Engineer, C++ @ figma (instance #1)
[2026-01-14T23:51:25.849Z] [BOT] 💾 BEFORE ARCHIVING: 1527 jobs in database
[2026-01-14T23:51:25.851Z] [BOT] ✅ No jobs to archive (all 1527 jobs within 7-day window)
[2026-01-14T23:51:25.862Z] [BOT] 💾 Saved posted_jobs.json: 1527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:28.862Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-14T23:51:28.863Z] [BOT] 📍 [ROUTING] "Product Manager, AI" @ figma
[2026-01-14T23:51:28.863Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-14T23:51:29.127Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ figma in #📈・JID_fb739488
  ✅ Industry: Product Manager, AI @ figma
[2026-01-14T23:51:30.911Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI @ figma in #🌉・san-francisco
[2026-01-14T23:51:30.912Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:32.413Z] [BOT] 💾 Marked as posted: Product Manager, AI @ figma (instance #1)
[2026-01-14T23:51:32.413Z] [BOT] 💾 BEFORE ARCHIVING: 1528 jobs in database
[2026-01-14T23:51:32.414Z] [BOT] ✅ No jobs to archive (all 1528 jobs within 7-day window)
[2026-01-14T23:51:32.425Z] [BOT] 💾 Saved posted_jobs.json: 1528 active jobs
[2026-01-14T23:51:32.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:32.426Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ figma
[2026-01-14T23:51:32.426Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T23:51:32.944Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, iOS @ figma in #📈・JID_fb739488
  ✅ Industry: Software Engineer, iOS @ figma
[2026-01-14T23:51:34.609Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, iOS @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:36.111Z] [BOT] 💾 Marked as posted: Software Engineer, iOS @ figma (instance #1)
[2026-01-14T23:51:36.111Z] [BOT] 💾 BEFORE ARCHIVING: 1529 jobs in database
[2026-01-14T23:51:36.112Z] [BOT] ✅ No jobs to archive (all 1529 jobs within 7-day window)
[2026-01-14T23:51:36.123Z] [BOT] 💾 Saved posted_jobs.json: 1529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:36.124Z] [BOT] 📍 [ROUTING] "Data Scientist  " @ figma
[2026-01-14T23:51:36.124Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T23:51:36.257Z] [BOT] ✅ Created forum post: 🏢 Data Scientist   @ figma in #📈・JID_fb739488
  ✅ Industry: Data Scientist   @ figma
[2026-01-14T23:51:37.918Z] [BOT] ✅ Created forum post: 🏢 Data Scientist   @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:39.419Z] [BOT] 💾 Marked as posted: Data Scientist   @ figma (instance #1)
[2026-01-14T23:51:39.419Z] [BOT] 💾 BEFORE ARCHIVING: 1530 jobs in database
[2026-01-14T23:51:39.421Z] [BOT] ✅ No jobs to archive (all 1530 jobs within 7-day window)
[2026-01-14T23:51:39.430Z] [BOT] 💾 Saved posted_jobs.json: 1530 active jobs
[2026-01-14T23:51:39.430Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:39.431Z] [BOT] 📍 [ROUTING] "Software Engineer, Graphics & Media" @ figma
[2026-01-14T23:51:39.431Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T23:51:39.599Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Graphics & Media @ figma in #📈・JID_fb739488
[2026-01-14T23:51:39.599Z] [BOT] ✅ Industry: Software Engineer, Graphics & Media @ figma
[2026-01-14T23:51:41.280Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Graphics & Media @ figma in #🌉・san-francisco
[2026-01-14T23:51:41.280Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:42.781Z] [BOT] 💾 Marked as posted: Software Engineer, Graphics & Media @ figma (instance #1)
[2026-01-14T23:51:42.781Z] [BOT] 💾 BEFORE ARCHIVING: 1531 jobs in database
[2026-01-14T23:51:42.782Z] [BOT] ✅ No jobs to archive (all 1531 jobs within 7-day window)
[2026-01-14T23:51:42.792Z] [BOT] 💾 Saved posted_jobs.json: 1531 active jobs
[2026-01-14T23:51:42.792Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:45.793Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T23:51:45.794Z] [BOT] 📍 [ROUTING] "Account Executive, Strategic" @ figma
[2026-01-14T23:51:45.794Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:51:46.007Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Strategic @ figma in #💲・sales-jobs
[2026-01-14T23:51:46.007Z] [BOT] ✅ Industry: Account Executive, Strategic @ figma
[2026-01-14T23:51:47.791Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Strategic @ figma in #🌉・san-francisco
[2026-01-14T23:51:47.792Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:49.293Z] [BOT] 💾 Marked as posted: Account Executive, Strategic @ figma (instance #1)
[2026-01-14T23:51:49.293Z] [BOT] 💾 BEFORE ARCHIVING: 1532 jobs in database
[2026-01-14T23:51:49.294Z] [BOT] ✅ No jobs to archive (all 1532 jobs within 7-day window)
[2026-01-14T23:51:49.306Z] [BOT] 💾 Saved posted_jobs.json: 1532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:49.307Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales " @ figma
[2026-01-14T23:51:49.307Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:51:49.500Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales  @ figma in #💲・sales-jobs
[2026-01-14T23:51:49.501Z] [BOT] ✅ Industry: Manager, Mid-Market Sales  @ figma
[2026-01-14T23:51:51.144Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales  @ figma in #🗽・new-york
[2026-01-14T23:51:51.144Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T23:51:52.645Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales  @ figma (instance #1)
[2026-01-14T23:51:52.646Z] [BOT] 💾 BEFORE ARCHIVING: 1533 jobs in database
[2026-01-14T23:51:52.647Z] [BOT] ✅ No jobs to archive (all 1533 jobs within 7-day window)
[2026-01-14T23:51:52.657Z] [BOT] 💾 Saved posted_jobs.json: 1533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:52.658Z] [BOT] 📍 [ROUTING] "Senior Account Executive, SMB" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T23:51:52.658Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:51:53.062Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive, SMB @ figma in #💲・sales-jobs
  ✅ Industry: Senior Account Executive, SMB @ figma
[2026-01-14T23:51:54.817Z] [BOT] ✅ Created forum post: 🏢 Senior Account Executive, SMB @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:51:56.318Z] [BOT] 💾 Marked as posted: Senior Account Executive, SMB @ figma (instance #1)
[2026-01-14T23:51:56.318Z] [BOT] 💾 BEFORE ARCHIVING: 1534 jobs in database
[2026-01-14T23:51:56.319Z] [BOT] ✅ No jobs to archive (all 1534 jobs within 7-day window)
[2026-01-14T23:51:56.329Z] [BOT] 💾 Saved posted_jobs.json: 1534 active jobs
[2026-01-14T23:51:56.329Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:51:59.330Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T23:51:59.331Z] [BOT] ⏭️  Skipping duplicate: JID_d300748c (posted within 7 days)
[2026-01-14T23:51:59.331Z] [BOT] ⏭️  Skipping duplicate: JID_18271124 (posted within 7 days)
[2026-01-14T23:51:59.331Z] [BOT] ⏭️  Skipping duplicate: JID_ff5aedcc (posted within 7 days)
[2026-01-14T23:51:59.331Z] [BOT] ⏭️  Skipping duplicate: JID_030688b3 (posted within 7 days)
[2026-01-14T23:51:59.331Z] [BOT] ⏭️  Skipping duplicate: JID_acf92713 (posted within 7 days)
[2026-01-14T23:51:59.332Z] [BOT] ⏭️  Skipping duplicate: JID_bc886aac (posted within 7 days)
[2026-01-14T23:51:59.332Z] [BOT] ⏭️  Skipping duplicate: JID_08b4364d (posted within 7 days)
⏭️  Skipping duplicate: JID_201c391a (posted within 7 days)
[2026-01-14T23:51:59.332Z] [BOT] ⏭️  Skipping duplicate: JID_f5b2af2c (posted within 7 days)
⏭️  Skipping duplicate: JID_ed15922f (posted within 7 days)
[2026-01-14T23:51:59.453Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-14T23:51:59.637Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
[2026-01-14T23:51:59.638Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T23:51:59.692Z] [BOT] 📂 Loaded 3665 existing routing entries
[2026-01-14T23:51:59.754Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T23:51:59.754Z] [BOT] Total entries: 3675
   Timestamp: 2026-01-14T23:51:59.739Z
[2026-01-14T23:51:59.755Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
   Successful: 19
[2026-01-14T23:51:59.755Z] [BOT] Failed: 1
   Skipped: 0
[2026-01-14T23:51:59.755Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T23:51:59.755Z] [BOT] Total posts: 19
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 9 posts
[2026-01-14T23:51:59.755Z] [BOT] 2. #📈・JID_fb739488: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-14T23:51:59.755Z] [BOT] [STATS] Channel stats saved
[2026-01-14T23:52:01.782Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2392) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Director, Software Engineering - Growth: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Software Engineering - Growth
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*