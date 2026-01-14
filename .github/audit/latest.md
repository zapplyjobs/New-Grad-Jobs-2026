# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T20:53:51.137Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T20:53:01.490Z] ========================================
[2026-01-14T20:53:01.492Z] Discord Bot Execution Log
[2026-01-14T20:53:01.492Z] Environment: GitHub Actions
[2026-01-14T20:53:01.492Z] Node Version: v20.19.6
[2026-01-14T20:53:01.492Z] ========================================
[2026-01-14T20:53:01.492Z] Environment Variables Check:
[2026-01-14T20:53:01.492Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T20:53:01.492Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.492Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T20:53:01.493Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T20:53:01.493Z] 
Multi-Channel Configuration:
[2026-01-14T20:53:01.493Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T20:53:01.493Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T20:53:01.494Z] 
Data Files Check:
[2026-01-14T20:53:01.495Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177990 bytes)
[2026-01-14T20:53:01.501Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 757020 bytes)
[2026-01-14T20:53:01.501Z] 
========================================
[2026-01-14T20:53:01.501Z] Starting Enhanced Discord Bot...
[2026-01-14T20:53:01.501Z] ========================================
[2026-01-14T20:53:02.021Z] [BOT] ✅ Loaded V2 database: 1420 jobs
[2026-01-14T20:53:02.824Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T20:53:02.824Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T20:53:02.824Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T20:53:02.930Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Privacy Counsel at anthropic
[2026-01-14T20:53:02.932Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T20:53:02.932Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T20:53:02.933Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T20:53:02.933Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T20:53:02.934Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T20:53:02.938Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T20:53:02.938Z] [BOT] 📍 [ROUTING] "Privacy Counsel" @ anthropic
[2026-01-14T20:53:02.938Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:53:02.955Z] [BOT ERROR] (node:2373) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T20:53:03.131Z] [BOT ERROR] ❌ Error posting job Privacy Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Privacy Counsel @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-14T20:53:03.131Z] [BOT] ❌ Industry post failed: Privacy Counsel
⚠️  Channel full error count: 1/5
[2026-01-14T20:53:04.845Z] [BOT] ✅ Created forum post: 🏢 Privacy Counsel @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:04.845Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:06.345Z] [BOT] 💾 Marked as posted: Privacy Counsel @ anthropic (instance #1)
[2026-01-14T20:53:06.346Z] [BOT] 💾 BEFORE ARCHIVING: 1421 jobs in database
[2026-01-14T20:53:06.347Z] [BOT] ✅ No jobs to archive (all 1421 jobs within 7-day window)
[2026-01-14T20:53:06.360Z] [BOT] 💾 Saved posted_jobs.json: 1421 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:06.361Z] [BOT] 📍 [ROUTING] "Product Operations Manager" @ anthropic
[2026-01-14T20:53:06.361Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:53:06.586Z] [BOT ERROR] ❌ Error posting job Product Operations Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Operations Manager @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-14T20:53:06.586Z] [BOT] ❌ Industry post failed: Product Operations Manager
⚠️  Channel full error count: 2/5
[2026-01-14T20:53:08.338Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:08.338Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:09.839Z] [BOT] 💾 Marked as posted: Product Operations Manager @ anthropic (instance #1)
[2026-01-14T20:53:09.839Z] [BOT] 💾 BEFORE ARCHIVING: 1422 jobs in database
[2026-01-14T20:53:09.840Z] [BOT] ✅ No jobs to archive (all 1422 jobs within 7-day window)
[2026-01-14T20:53:09.849Z] [BOT] 💾 Saved posted_jobs.json: 1422 active jobs
[2026-01-14T20:53:09.849Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:09.849Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Public Sector " @ anthropic
[2026-01-14T20:53:09.850Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:53:10.301Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Public Sector  @ anthropic in #💲・sales-jobs
  ✅ Industry: Product Operations Manager, Public Sector  @ anthropic
[2026-01-14T20:53:12.149Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Public Sector  @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:12.149Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:13.650Z] [BOT] 💾 Marked as posted: Product Operations Manager, Public Sector  @ anthropic (instance #1)
[2026-01-14T20:53:13.650Z] [BOT] 💾 BEFORE ARCHIVING: 1423 jobs in database
[2026-01-14T20:53:13.651Z] [BOT] ✅ No jobs to archive (all 1423 jobs within 7-day window)
[2026-01-14T20:53:13.662Z] [BOT] 💾 Saved posted_jobs.json: 1423 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:16.661Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T20:53:16.662Z] [BOT] 📍 [ROUTING] "Privacy Research Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-14T20:53:16.662Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T20:53:17.128Z] [BOT] ✅ Created forum post: 🏢 Privacy Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-14T20:53:17.128Z] [BOT] ✅ Industry: Privacy Research Engineer, Safeguards @ anthropic
[2026-01-14T20:53:18.904Z] [BOT] ✅ Created forum post: 🏢 Privacy Research Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:20.405Z] [BOT] 💾 Marked as posted: Privacy Research Engineer, Safeguards @ anthropic (instance #1)
[2026-01-14T20:53:20.405Z] [BOT] 💾 BEFORE ARCHIVING: 1424 jobs in database
[2026-01-14T20:53:20.407Z] [BOT] ✅ No jobs to archive (all 1424 jobs within 7-day window)
[2026-01-14T20:53:20.419Z] [BOT] 💾 Saved posted_jobs.json: 1424 active jobs
[2026-01-14T20:53:20.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:20.419Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Experiences" @ anthropic
[2026-01-14T20:53:20.419Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T20:53:20.609Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Experiences @ anthropic in #🤖・ai-jobs
[2026-01-14T20:53:20.609Z] [BOT] ✅ Industry: Product Designer, Claude Experiences @ anthropic
[2026-01-14T20:53:22.578Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Experiences @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:22.578Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:24.079Z] [BOT] 💾 Marked as posted: Product Designer, Claude Experiences @ anthropic (instance #1)
[2026-01-14T20:53:24.080Z] [BOT] 💾 BEFORE ARCHIVING: 1425 jobs in database
[2026-01-14T20:53:24.081Z] [BOT] ✅ No jobs to archive (all 1425 jobs within 7-day window)
[2026-01-14T20:53:24.091Z] [BOT] 💾 Saved posted_jobs.json: 1425 active jobs
[2026-01-14T20:53:24.091Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:24.091Z] [BOT] 📍 [ROUTING] "Product Designer, Growth " @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-14T20:53:24.091Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T20:53:24.351Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Growth  @ anthropic
[2026-01-14T20:53:26.208Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Growth  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:27.710Z] [BOT] 💾 Marked as posted: Product Designer, Growth  @ anthropic (instance #1)
[2026-01-14T20:53:27.710Z] [BOT] 💾 BEFORE ARCHIVING: 1426 jobs in database
[2026-01-14T20:53:27.711Z] [BOT] ✅ No jobs to archive (all 1426 jobs within 7-day window)
[2026-01-14T20:53:27.720Z] [BOT] 💾 Saved posted_jobs.json: 1426 active jobs
[2026-01-14T20:53:27.720Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:27.721Z] [BOT] 📍 [ROUTING] "Product Manager, Safeguards" @ anthropic
[2026-01-14T20:53:27.721Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-14T20:53:28.002Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-14T20:53:28.002Z] [BOT] ✅ Industry: Product Manager, Safeguards @ anthropic
[2026-01-14T20:53:29.863Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:29.863Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:31.364Z] [BOT] 💾 Marked as posted: Product Manager, Safeguards @ anthropic (instance #1)
[2026-01-14T20:53:31.364Z] [BOT] 💾 BEFORE ARCHIVING: 1427 jobs in database
[2026-01-14T20:53:31.365Z] [BOT] ✅ No jobs to archive (all 1427 jobs within 7-day window)
[2026-01-14T20:53:31.374Z] [BOT] 💾 Saved posted_jobs.json: 1427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:34.375Z] [BOT] 📌 Posting 3 jobs to #📦・product-jobs
[2026-01-14T20:53:34.375Z] [BOT] 📍 [ROUTING] "Product Manager, API " @ anthropic
   Category: PRODUCT (matched: "product")
[2026-01-14T20:53:34.375Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-14T20:53:34.583Z] [BOT] ✅ Created forum post: 🏢 Product Manager, API  @ anthropic in #📦・product-jobs
  ✅ Industry: Product Manager, API  @ anthropic
[2026-01-14T20:53:36.322Z] [BOT] ✅ Created forum post: 🏢 Product Manager, API  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:37.823Z] [BOT] 💾 Marked as posted: Product Manager, API  @ anthropic (instance #1)
[2026-01-14T20:53:37.823Z] [BOT] 💾 BEFORE ARCHIVING: 1428 jobs in database
[2026-01-14T20:53:37.824Z] [BOT] ✅ No jobs to archive (all 1428 jobs within 7-day window)
[2026-01-14T20:53:37.835Z] [BOT] 💾 Saved posted_jobs.json: 1428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:37.835Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code" @ anthropic
[2026-01-14T20:53:37.835Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T20:53:38.047Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code @ anthropic in #📦・product-jobs
  ✅ Industry: Product Manager, Claude Code @ anthropic
[2026-01-14T20:53:39.736Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:41.238Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code @ anthropic (instance #1)
[2026-01-14T20:53:41.238Z] [BOT] 💾 BEFORE ARCHIVING: 1429 jobs in database
[2026-01-14T20:53:41.239Z] [BOT] ✅ No jobs to archive (all 1429 jobs within 7-day window)
[2026-01-14T20:53:41.249Z] [BOT] 💾 Saved posted_jobs.json: 1429 active jobs
[2026-01-14T20:53:41.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:41.249Z] [BOT] 📍 [ROUTING] "Product Manager, Research" @ anthropic
[2026-01-14T20:53:41.249Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T20:53:41.486Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Research @ anthropic in #📦・product-jobs
  ✅ Industry: Product Manager, Research @ anthropic
[2026-01-14T20:53:43.353Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Research @ anthropic in #🌉・san-francisco
[2026-01-14T20:53:43.353Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:53:44.855Z] [BOT] 💾 Marked as posted: Product Manager, Research @ anthropic (instance #1)
[2026-01-14T20:53:44.855Z] [BOT] 💾 BEFORE ARCHIVING: 1430 jobs in database
[2026-01-14T20:53:44.856Z] [BOT] ✅ No jobs to archive (all 1430 jobs within 7-day window)
[2026-01-14T20:53:44.865Z] [BOT] 💾 Saved posted_jobs.json: 1430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:53:47.866Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T20:53:47.867Z] [BOT] ⏭️  Skipping duplicate: JID_5606d9df (posted within 7 days)
[2026-01-14T20:53:47.867Z] [BOT] ⏭️  Skipping duplicate: JID_b5558b07 (posted within 7 days)
[2026-01-14T20:53:47.867Z] [BOT] ⏭️  Skipping duplicate: JID_5292ed7a (posted within 7 days)
[2026-01-14T20:53:47.868Z] [BOT] ⏭️  Skipping duplicate: JID_7e6e2044 (posted within 7 days)
⏭️  Skipping duplicate: JID_c25849df (posted within 7 days)
⏭️  Skipping duplicate: JID_2c1c7ed4 (posted within 7 days)
⏭️  Skipping duplicate: JID_118788c0 (posted within 7 days)
⏭️  Skipping duplicate: JID_58fa31c4 (posted within 7 days)
⏭️  Skipping duplicate: JID_68a7c280 (posted within 7 days)
⏭️  Skipping duplicate: JID_af574b6f (posted within 7 days)
[2026-01-14T20:53:47.978Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T20:53:48.140Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 10 enriched, 10 posted)
[2026-01-14T20:53:48.140Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T20:53:48.193Z] [BOT] 📂 Loaded 3555 existing routing entries
[2026-01-14T20:53:48.252Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3565
   Timestamp: 2026-01-14T20:53:48.238Z
[2026-01-14T20:53:48.253Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T20:53:48.253Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 4 posts
     3. #📦・product-jobs: 3 posts
     4. #💲・sales-jobs: 1 posts
[2026-01-14T20:53:48.253Z] [BOT] [STATS] Channel stats saved
[2026-01-14T20:53:50.278Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2373) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Privacy Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Privacy Counsel
- [BOT ERROR] ❌ Error posting job Product Operations Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Operations Manager
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*