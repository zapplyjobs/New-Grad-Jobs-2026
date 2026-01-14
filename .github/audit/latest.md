# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T23:37:43.682Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T23:36:44.598Z] ========================================
[2026-01-14T23:36:44.600Z] Discord Bot Execution Log
[2026-01-14T23:36:44.600Z] Environment: GitHub Actions
[2026-01-14T23:36:44.600Z] Node Version: v20.19.6
[2026-01-14T23:36:44.600Z] ========================================
[2026-01-14T23:36:44.600Z] Environment Variables Check:
[2026-01-14T23:36:44.600Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T23:36:44.601Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T23:36:44.601Z] 
Multi-Channel Configuration:
[2026-01-14T23:36:44.601Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.601Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.602Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T23:36:44.602Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T23:36:44.602Z] 
Data Files Check:
[2026-01-14T23:36:44.603Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166804 bytes)
[2026-01-14T23:36:44.609Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 807312 bytes)
[2026-01-14T23:36:44.609Z] 
========================================
[2026-01-14T23:36:44.609Z] Starting Enhanced Discord Bot...
[2026-01-14T23:36:44.609Z] ========================================
[2026-01-14T23:36:45.123Z] [BOT] ✅ Loaded V2 database: 1516 jobs
[2026-01-14T23:36:45.711Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T23:36:45.712Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T23:36:45.712Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T23:36:45.823Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Onboarding Program Manager at figma
[2026-01-14T23:36:45.825Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T23:36:45.825Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T23:36:45.825Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T23:36:45.826Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-14T23:36:45.826Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T23:36:45.831Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-14T23:36:45.831Z] [BOT] 📍 [ROUTING] "Sales Onboarding Program Manager" @ figma
[2026-01-14T23:36:45.831Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-14T23:36:45.848Z] [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T23:36:46.033Z] [BOT] ✅ Created forum post: 🏢 Sales Onboarding Program Manager @ figma in #📊・JID_9910249a
  ✅ Industry: Sales Onboarding Program Manager @ figma
[2026-01-14T23:36:47.991Z] [BOT] ✅ Created forum post: 🏢 Sales Onboarding Program Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:36:49.493Z] [BOT] 💾 Marked as posted: Sales Onboarding Program Manager @ figma (instance #1)
[2026-01-14T23:36:49.493Z] [BOT] 💾 BEFORE ARCHIVING: 1517 jobs in database
[2026-01-14T23:36:49.494Z] [BOT] ✅ No jobs to archive (all 1517 jobs within 7-day window)
[2026-01-14T23:36:49.507Z] [BOT] 💾 Saved posted_jobs.json: 1517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:36:52.508Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-14T23:36:52.508Z] [BOT] 📍 [ROUTING] "Associate Solutions Consultant" @ figma
[2026-01-14T23:36:52.509Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:36:52.755Z] [BOT] ✅ Created forum post: 🏢 Associate Solutions Consultant @ figma in #💲・sales-jobs
[2026-01-14T23:36:52.755Z] [BOT] ✅ Industry: Associate Solutions Consultant @ figma
[2026-01-14T23:36:54.518Z] [BOT] ✅ Created forum post: 🏢 Associate Solutions Consultant @ figma in #🌉・san-francisco
[2026-01-14T23:36:54.518Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:36:56.019Z] [BOT] 💾 Marked as posted: Associate Solutions Consultant @ figma (instance #1)
[2026-01-14T23:36:56.019Z] [BOT] 💾 BEFORE ARCHIVING: 1518 jobs in database
[2026-01-14T23:36:56.021Z] [BOT] ✅ No jobs to archive (all 1518 jobs within 7-day window)
[2026-01-14T23:36:56.032Z] [BOT] 💾 Saved posted_jobs.json: 1518 active jobs
[2026-01-14T23:36:56.032Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:36:56.032Z] [BOT] 📍 [ROUTING] "Demo Strategy & Effectiveness Manager " @ figma
[2026-01-14T23:36:56.032Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:36:56.240Z] [BOT] ✅ Created forum post: 🏢 Demo Strategy & Effectiveness Manager  @ figma in #💲・sales-jobs
  ✅ Industry: Demo Strategy & Effectiveness Manager  @ figma
[2026-01-14T23:36:58.060Z] [BOT] ✅ Created forum post: 🏢 Demo Strategy & Effectiveness Manager  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:36:59.562Z] [BOT] 💾 Marked as posted: Demo Strategy & Effectiveness Manager  @ figma (instance #1)
[2026-01-14T23:36:59.562Z] [BOT] 💾 BEFORE ARCHIVING: 1519 jobs in database
[2026-01-14T23:36:59.563Z] [BOT] ✅ No jobs to archive (all 1519 jobs within 7-day window)
[2026-01-14T23:36:59.573Z] [BOT] 💾 Saved posted_jobs.json: 1519 active jobs
[2026-01-14T23:36:59.574Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:36:59.574Z] [BOT] 📍 [ROUTING] "Early Career, Product Designer (2026)" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T23:36:59.574Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:36:59.802Z] [BOT] ✅ Created forum post: 🏢 Early Career, Product Designer (2026) @ figma in #💲・sales-jobs
[2026-01-14T23:36:59.802Z] [BOT] ✅ Industry: Early Career, Product Designer (2026) @ figma
[2026-01-14T23:37:01.570Z] [BOT] ✅ Created forum post: 🏢 Early Career, Product Designer (2026) @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:03.073Z] [BOT] 💾 Marked as posted: Early Career, Product Designer (2026) @ figma (instance #1)
[2026-01-14T23:37:03.073Z] [BOT] 💾 BEFORE ARCHIVING: 1520 jobs in database
[2026-01-14T23:37:03.074Z] [BOT] ✅ No jobs to archive (all 1520 jobs within 7-day window)
[2026-01-14T23:37:03.084Z] [BOT] 💾 Saved posted_jobs.json: 1520 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:03.084Z] [BOT] 📍 [ROUTING] "Manager, Strategic Sales" @ figma
[2026-01-14T23:37:03.085Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:37:03.302Z] [BOT] ✅ Created forum post: 🏢 Manager, Strategic Sales @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Strategic Sales @ figma
[2026-01-14T23:37:05.009Z] [BOT] ✅ Created forum post: 🏢 Manager, Strategic Sales @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:06.511Z] [BOT] 💾 Marked as posted: Manager, Strategic Sales @ figma (instance #1)
[2026-01-14T23:37:06.511Z] [BOT] 💾 BEFORE ARCHIVING: 1521 jobs in database
[2026-01-14T23:37:06.512Z] [BOT] ✅ No jobs to archive (all 1521 jobs within 7-day window)
[2026-01-14T23:37:06.521Z] [BOT] 💾 Saved posted_jobs.json: 1521 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:09.522Z] [BOT] 📌 Posting 2 jobs to #📦・product-jobs
[2026-01-14T23:37:09.522Z] [BOT] 📍 [ROUTING] "Product Manager, Creation Engine" @ figma
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:37:10.045Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Creation Engine @ figma in #📦・product-jobs
[2026-01-14T23:37:10.046Z] [BOT] ✅ Industry: Product Manager, Creation Engine @ figma
[2026-01-14T23:37:11.945Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Creation Engine @ figma in #🌉・san-francisco
[2026-01-14T23:37:11.945Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:13.448Z] [BOT] 💾 Marked as posted: Product Manager, Creation Engine @ figma (instance #1)
[2026-01-14T23:37:13.448Z] [BOT] 💾 BEFORE ARCHIVING: 1522 jobs in database
[2026-01-14T23:37:13.449Z] [BOT] ✅ No jobs to archive (all 1522 jobs within 7-day window)
[2026-01-14T23:37:13.460Z] [BOT] 💾 Saved posted_jobs.json: 1522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:13.461Z] [BOT] 📍 [ROUTING] "Product Manager, Scale" @ figma
[2026-01-14T23:37:13.461Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:37:13.889Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Scale @ figma in #📦・product-jobs
  ✅ Industry: Product Manager, Scale @ figma
[2026-01-14T23:37:15.743Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Scale @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:17.244Z] [BOT] 💾 Marked as posted: Product Manager, Scale @ figma (instance #1)
[2026-01-14T23:37:17.244Z] [BOT] 💾 BEFORE ARCHIVING: 1523 jobs in database
[2026-01-14T23:37:17.245Z] [BOT] ✅ No jobs to archive (all 1523 jobs within 7-day window)
[2026-01-14T23:37:17.256Z] [BOT] 💾 Saved posted_jobs.json: 1523 active jobs
[2026-01-14T23:37:17.256Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:20.256Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T23:37:20.257Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Emerging Products" @ figma
[2026-01-14T23:37:20.257Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T23:37:20.638Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Emerging Products @ figma in #📣・marketing-jobs
  ✅ Industry: Product Marketing Manager, Emerging Products @ figma
[2026-01-14T23:37:22.404Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Emerging Products @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:23.904Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Emerging Products @ figma (instance #1)
[2026-01-14T23:37:23.904Z] [BOT] 💾 BEFORE ARCHIVING: 1524 jobs in database
[2026-01-14T23:37:23.905Z] [BOT] ✅ No jobs to archive (all 1524 jobs within 7-day window)
[2026-01-14T23:37:23.916Z] [BOT] 💾 Saved posted_jobs.json: 1524 active jobs
[2026-01-14T23:37:23.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:26.916Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T23:37:26.917Z] [BOT] 📍 [ROUTING] "Data Science Intern (2026)" @ figma
[2026-01-14T23:37:26.917Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T23:37:27.151Z] [BOT] ✅ Created forum post: 🏢 Data Science Intern (2026) @ figma in #📈・JID_fb739488
[2026-01-14T23:37:27.152Z] [BOT] ✅ Industry: Data Science Intern (2026) @ figma
[2026-01-14T23:37:29.011Z] [BOT] ✅ Created forum post: 🏢 Data Science Intern (2026) @ figma in #🌉・san-francisco
[2026-01-14T23:37:29.012Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:37:30.513Z] [BOT] 💾 Marked as posted: Data Science Intern (2026) @ figma (instance #1)
[2026-01-14T23:37:30.513Z] [BOT] 💾 BEFORE ARCHIVING: 1525 jobs in database
[2026-01-14T23:37:30.515Z] [BOT] ✅ No jobs to archive (all 1525 jobs within 7-day window)
[2026-01-14T23:37:30.527Z] [BOT] 💾 Saved posted_jobs.json: 1525 active jobs
[2026-01-14T23:37:30.527Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:33.527Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T23:37:33.527Z] [BOT] 📍 [ROUTING] "Software Engineer Intern (2026)" @ figma
[2026-01-14T23:37:33.527Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T23:37:33.817Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Intern (2026) @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer Intern (2026) @ figma
[2026-01-14T23:37:35.478Z] [BOT ERROR] ❌ Error posting job Software Engineer Intern (2026): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Intern (2026) @ figma',
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
[2026-01-14T23:37:35.478Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T23:37:36.978Z] [BOT] 💾 Marked as posted: Software Engineer Intern (2026) @ figma (instance #1)
[2026-01-14T23:37:36.979Z] [BOT] 💾 BEFORE ARCHIVING: 1526 jobs in database
[2026-01-14T23:37:36.979Z] [BOT] ✅ No jobs to archive (all 1526 jobs within 7-day window)
[2026-01-14T23:37:36.991Z] [BOT] 💾 Saved posted_jobs.json: 1526 active jobs
[2026-01-14T23:37:36.991Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:37:39.992Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T23:37:39.992Z] [BOT] ⏭️  Skipping duplicate: JID_71573458 (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_9c8a6ec2 (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_f58c81d4 (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_fc6200ef (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_03d65a75 (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_61991a1b (posted within 7 days)
[2026-01-14T23:37:39.993Z] [BOT] ⏭️  Skipping duplicate: JID_015db60b (posted within 7 days)
[2026-01-14T23:37:39.994Z] [BOT] ⏭️  Skipping duplicate: JID_961f144d (posted within 7 days)
[2026-01-14T23:37:39.994Z] [BOT] ⏭️  Skipping duplicate: JID_89037655 (posted within 7 days)
[2026-01-14T23:37:39.994Z] [BOT] ⏭️  Skipping duplicate: JID_d3ff77d9 (posted within 7 days)
[2026-01-14T23:37:40.121Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-14T23:37:40.276Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T23:37:40.276Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T23:37:40.330Z] [BOT] 📂 Loaded 3655 existing routing entries
[2026-01-14T23:37:40.390Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3665
   Timestamp: 2026-01-14T23:37:40.375Z
[2026-01-14T23:37:40.391Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T23:37:40.391Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-14T23:37:40.391Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T23:37:40.391Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💲・sales-jobs: 4 posts
[2026-01-14T23:37:40.391Z] [BOT] 3. #📦・product-jobs: 2 posts
     4. #📊・JID_9910249a: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-14T23:37:40.392Z] [BOT] [STATS] Channel stats saved
[2026-01-14T23:37:42.417Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Intern (2026): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*