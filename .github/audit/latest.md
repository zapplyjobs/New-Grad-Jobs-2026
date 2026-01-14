# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T23:26:39.023Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T23:25:42.680Z] ========================================
[2026-01-14T23:25:42.682Z] Discord Bot Execution Log
[2026-01-14T23:25:42.682Z] Environment: GitHub Actions
[2026-01-14T23:25:42.682Z] Node Version: v20.19.6
[2026-01-14T23:25:42.682Z] ========================================
[2026-01-14T23:25:42.682Z] Environment Variables Check:
[2026-01-14T23:25:42.682Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T23:25:42.682Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.682Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T23:25:42.682Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T23:25:42.682Z] 
Multi-Channel Configuration:
[2026-01-14T23:25:42.683Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T23:25:42.683Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T23:25:42.683Z] 
Data Files Check:
[2026-01-14T23:25:42.685Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173594 bytes)
[2026-01-14T23:25:42.691Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 802490 bytes)
[2026-01-14T23:25:42.691Z] 
========================================
[2026-01-14T23:25:42.691Z] Starting Enhanced Discord Bot...
[2026-01-14T23:25:42.691Z] ========================================
[2026-01-14T23:25:43.224Z] [BOT] ✅ Loaded V2 database: 1506 jobs
[2026-01-14T23:25:43.805Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T23:25:43.805Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T23:25:43.805Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T23:25:43.919Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Manager, Sites at figma
[2026-01-14T23:25:43.920Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T23:25:43.921Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T23:25:43.921Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T23:25:43.922Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T23:25:43.922Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T23:25:43.926Z] [BOT] 📌 Posting 3 jobs to #📦・product-jobs
[2026-01-14T23:25:43.927Z] [BOT] 📍 [ROUTING] "Product Manager, Sites" @ figma
[2026-01-14T23:25:43.927Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:25:43.944Z] [BOT ERROR] (node:2352) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T23:25:44.120Z] [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Manager, Sites @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_c616cbe4/threads'
}
[2026-01-14T23:25:44.120Z] [BOT] ❌ Industry post failed: Product Manager, Sites
⚠️  Channel full error count: 1/5
[2026-01-14T23:25:46.017Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Sites @ figma in #🌉・san-francisco
[2026-01-14T23:25:46.017Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:25:47.518Z] [BOT] 💾 Marked as posted: Product Manager, Sites @ figma (instance #1)
[2026-01-14T23:25:47.519Z] [BOT] 💾 BEFORE ARCHIVING: 1507 jobs in database
[2026-01-14T23:25:47.520Z] [BOT] ✅ No jobs to archive (all 1507 jobs within 7-day window)
[2026-01-14T23:25:47.534Z] [BOT] 💾 Saved posted_jobs.json: 1507 active jobs
[2026-01-14T23:25:47.535Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Product Manager, CMS" @ figma
[2026-01-14T23:25:47.535Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:25:47.809Z] [BOT] ✅ Created forum post: 🏢 Product Manager, CMS @ figma in #📦・product-jobs
[2026-01-14T23:25:47.809Z] [BOT] ✅ Industry: Product Manager, CMS @ figma
[2026-01-14T23:25:49.607Z] [BOT] ✅ Created forum post: 🏢 Product Manager, CMS @ figma in #🌉・san-francisco
[2026-01-14T23:25:49.607Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:25:51.107Z] [BOT] 💾 Marked as posted: Product Manager, CMS @ figma (instance #1)
[2026-01-14T23:25:51.108Z] [BOT] 💾 BEFORE ARCHIVING: 1508 jobs in database
[2026-01-14T23:25:51.109Z] [BOT] ✅ No jobs to archive (all 1508 jobs within 7-day window)
[2026-01-14T23:25:51.120Z] [BOT] 💾 Saved posted_jobs.json: 1508 active jobs
[2026-01-14T23:25:51.120Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:25:51.120Z] [BOT] 📍 [ROUTING] "Product Manager, Growth" @ figma
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:25:51.441Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Growth @ figma in #📦・product-jobs
  ✅ Industry: Product Manager, Growth @ figma
[2026-01-14T23:25:53.277Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Growth @ figma in #🌉・san-francisco
[2026-01-14T23:25:53.278Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:25:54.778Z] [BOT] 💾 Marked as posted: Product Manager, Growth @ figma (instance #1)
[2026-01-14T23:25:54.778Z] [BOT] 💾 BEFORE ARCHIVING: 1509 jobs in database
[2026-01-14T23:25:54.779Z] [BOT] ✅ No jobs to archive (all 1509 jobs within 7-day window)
[2026-01-14T23:25:54.791Z] [BOT] 💾 Saved posted_jobs.json: 1509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:25:57.791Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-14T23:25:57.791Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Product" @ figma
[2026-01-14T23:25:57.791Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T23:25:58.081Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Product @ figma in #📁・JID_e938df7b
  ✅ Industry: Technical Recruiter, Product @ figma
[2026-01-14T23:26:00.082Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Product @ figma in #🌉・san-francisco
[2026-01-14T23:26:00.082Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:01.583Z] [BOT] 💾 Marked as posted: Technical Recruiter, Product @ figma (instance #1)
[2026-01-14T23:26:01.583Z] [BOT] 💾 BEFORE ARCHIVING: 1510 jobs in database
[2026-01-14T23:26:01.584Z] [BOT] ✅ No jobs to archive (all 1510 jobs within 7-day window)
[2026-01-14T23:26:01.597Z] [BOT] 💾 Saved posted_jobs.json: 1510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:04.598Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T23:26:04.598Z] [BOT] 📍 [ROUTING] "Equity Operations Manager" @ figma
[2026-01-14T23:26:04.598Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:26:04.969Z] [BOT] ✅ Created forum post: 🏢 Equity Operations Manager @ figma in #💲・sales-jobs
[2026-01-14T23:26:04.969Z] [BOT] ✅ Industry: Equity Operations Manager @ figma
[2026-01-14T23:26:06.774Z] [BOT] ✅ Created forum post: 🏢 Equity Operations Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:08.274Z] [BOT] 💾 Marked as posted: Equity Operations Manager @ figma (instance #1)
[2026-01-14T23:26:08.274Z] [BOT] 💾 BEFORE ARCHIVING: 1511 jobs in database
[2026-01-14T23:26:08.276Z] [BOT] ✅ No jobs to archive (all 1511 jobs within 7-day window)
[2026-01-14T23:26:08.288Z] [BOT] 💾 Saved posted_jobs.json: 1511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:08.288Z] [BOT] 📍 [ROUTING] "Technical Learning Specialist" @ figma
[2026-01-14T23:26:08.288Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:26:08.567Z] [BOT] ✅ Created forum post: 🏢 Technical Learning Specialist @ figma in #💲・sales-jobs
  ✅ Industry: Technical Learning Specialist @ figma
[2026-01-14T23:26:10.349Z] [BOT] ✅ Created forum post: 🏢 Technical Learning Specialist @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:11.851Z] [BOT] 💾 Marked as posted: Technical Learning Specialist @ figma (instance #1)
[2026-01-14T23:26:11.851Z] [BOT] 💾 BEFORE ARCHIVING: 1512 jobs in database
[2026-01-14T23:26:11.852Z] [BOT] ✅ No jobs to archive (all 1512 jobs within 7-day window)
[2026-01-14T23:26:11.863Z] [BOT] 💾 Saved posted_jobs.json: 1512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:11.863Z] [BOT] 📍 [ROUTING] "Director, Design - Communication Tools" @ figma
[2026-01-14T23:26:11.863Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:26:12.070Z] [BOT] ✅ Created forum post: 🏢 Director, Design - Communication Tools @ figma in #💲・sales-jobs
[2026-01-14T23:26:12.071Z] [BOT] ✅ Industry: Director, Design - Communication Tools @ figma
[2026-01-14T23:26:13.795Z] [BOT] ✅ Created forum post: 🏢 Director, Design - Communication Tools @ figma in #🌉・san-francisco
[2026-01-14T23:26:13.795Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:15.295Z] [BOT] 💾 Marked as posted: Director, Design - Communication Tools @ figma (instance #1)
[2026-01-14T23:26:15.295Z] [BOT] 💾 BEFORE ARCHIVING: 1513 jobs in database
[2026-01-14T23:26:15.296Z] [BOT] ✅ No jobs to archive (all 1513 jobs within 7-day window)
[2026-01-14T23:26:15.307Z] [BOT] 💾 Saved posted_jobs.json: 1513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:18.308Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T23:26:18.308Z] [BOT] 📍 [ROUTING] "Software Engineer, AI Platforms" @ figma
[2026-01-14T23:26:18.308Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T23:26:18.628Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI Platforms @ figma in #🤖・ai-jobs
[2026-01-14T23:26:18.628Z] [BOT] ✅ Industry: Software Engineer, AI Platforms @ figma
[2026-01-14T23:26:20.474Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI Platforms @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:21.975Z] [BOT] 💾 Marked as posted: Software Engineer, AI Platforms @ figma (instance #1)
[2026-01-14T23:26:21.975Z] [BOT] 💾 BEFORE ARCHIVING: 1514 jobs in database
[2026-01-14T23:26:21.976Z] [BOT] ✅ No jobs to archive (all 1514 jobs within 7-day window)
[2026-01-14T23:26:21.988Z] [BOT] 💾 Saved posted_jobs.json: 1514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:21.989Z] [BOT] 📍 [ROUTING] "Integration Engineer, AI" @ figma
[2026-01-14T23:26:21.989Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T23:26:21.989Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T23:26:22.508Z] [BOT] ✅ Created forum post: 🏢 Integration Engineer, AI @ figma in #🤖・ai-jobs
  ✅ Industry: Integration Engineer, AI @ figma
[2026-01-14T23:26:24.295Z] [BOT] ✅ Created forum post: 🏢 Integration Engineer, AI @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:25.797Z] [BOT] 💾 Marked as posted: Integration Engineer, AI @ figma (instance #1)
[2026-01-14T23:26:25.797Z] [BOT] 💾 BEFORE ARCHIVING: 1515 jobs in database
[2026-01-14T23:26:25.798Z] [BOT] ✅ No jobs to archive (all 1515 jobs within 7-day window)
[2026-01-14T23:26:25.810Z] [BOT] 💾 Saved posted_jobs.json: 1515 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:28.811Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T23:26:28.811Z] [BOT] 📍 [ROUTING] "Software Engineer, Full Stack" @ figma
[2026-01-14T23:26:28.811Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T23:26:29.049Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Full Stack @ figma in #💻・tech-jobs
[2026-01-14T23:26:29.049Z] [BOT] ✅ Industry: Software Engineer, Full Stack @ figma
[2026-01-14T23:26:30.832Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Full Stack @ figma in #🌉・san-francisco
[2026-01-14T23:26:30.832Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:26:32.333Z] [BOT] 💾 Marked as posted: Software Engineer, Full Stack @ figma (instance #1)
[2026-01-14T23:26:32.333Z] [BOT] 💾 BEFORE ARCHIVING: 1516 jobs in database
[2026-01-14T23:26:32.334Z] [BOT] ✅ No jobs to archive (all 1516 jobs within 7-day window)
[2026-01-14T23:26:32.345Z] [BOT] 💾 Saved posted_jobs.json: 1516 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:26:35.346Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T23:26:35.346Z] [BOT] ⏭️  Skipping duplicate: JID_4906ba30 (posted within 7 days)
[2026-01-14T23:26:35.346Z] [BOT] ⏭️  Skipping duplicate: JID_2aab6a01 (posted within 7 days)
[2026-01-14T23:26:35.346Z] [BOT] ⏭️  Skipping duplicate: JID_5c211b5e (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_8d76e110 (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_e049b2b1 (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_7eac352b (posted within 7 days)
⏭️  Skipping duplicate: JID_8b51f994 (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_7c8acff4 (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_1ab70c9f (posted within 7 days)
[2026-01-14T23:26:35.347Z] [BOT] ⏭️  Skipping duplicate: JID_3b4bc80a (posted within 7 days)
[2026-01-14T23:26:35.466Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-14T23:26:35.632Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
[2026-01-14T23:26:35.632Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T23:26:35.686Z] [BOT] 📂 Loaded 3645 existing routing entries
[2026-01-14T23:26:35.748Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3655
[2026-01-14T23:26:35.748Z] [BOT] Timestamp: 2026-01-14T23:26:35.733Z
[2026-01-14T23:26:35.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-14T23:26:35.749Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T23:26:35.749Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #💲・sales-jobs: 3 posts
[2026-01-14T23:26:35.749Z] [BOT] 3. #📦・product-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📁・JID_e938df7b: 1 posts
[2026-01-14T23:26:35.750Z] [BOT] [STATS] Channel stats saved
[2026-01-14T23:26:37.773Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2352) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Manager, Sites
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*