# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T20:27:07.412Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T20:26:18.112Z] ========================================
[2026-01-14T20:26:18.114Z] Discord Bot Execution Log
[2026-01-14T20:26:18.114Z] Environment: GitHub Actions
[2026-01-14T20:26:18.114Z] Node Version: v20.19.6
[2026-01-14T20:26:18.114Z] ========================================
[2026-01-14T20:26:18.114Z] Environment Variables Check:
[2026-01-14T20:26:18.114Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T20:26:18.114Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.114Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T20:26:18.115Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T20:26:18.115Z] 
Multi-Channel Configuration:
[2026-01-14T20:26:18.115Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T20:26:18.115Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T20:26:18.116Z] 
Data Files Check:
[2026-01-14T20:26:18.117Z] .github/data/new_jobs.json: ✅ Exists (10 items, 197508 bytes)
[2026-01-14T20:26:18.123Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 752016 bytes)
[2026-01-14T20:26:18.123Z] 
========================================
[2026-01-14T20:26:18.123Z] Starting Enhanced Discord Bot...
[2026-01-14T20:26:18.123Z] ========================================
[2026-01-14T20:26:18.653Z] [BOT] ✅ Loaded V2 database: 1410 jobs
[2026-01-14T20:26:19.203Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T20:26:19.204Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T20:26:19.204Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T20:26:19.317Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of GTM Narrative  at anthropic
[2026-01-14T20:26:19.319Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T20:26:19.320Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T20:26:19.320Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T20:26:19.321Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T20:26:19.321Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T20:26:19.325Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-14T20:26:19.326Z] [BOT] 📍 [ROUTING] "Head of GTM Narrative " @ anthropic
[2026-01-14T20:26:19.326Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:19.344Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T20:26:19.529Z] [BOT] ✅ Created forum post: 🏢 Head of GTM Narrative  @ anthropic in #💲・sales-jobs
[2026-01-14T20:26:19.529Z] [BOT] ✅ Industry: Head of GTM Narrative  @ anthropic
[2026-01-14T20:26:21.308Z] [BOT] ✅ Created forum post: 🏢 Head of GTM Narrative  @ anthropic in #🌉・san-francisco
[2026-01-14T20:26:21.308Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:22.808Z] [BOT] 💾 Marked as posted: Head of GTM Narrative  @ anthropic (instance #1)
[2026-01-14T20:26:22.808Z] [BOT] 💾 BEFORE ARCHIVING: 1411 jobs in database
[2026-01-14T20:26:22.809Z] [BOT] ✅ No jobs to archive (all 1411 jobs within 7-day window)
[2026-01-14T20:26:22.820Z] [BOT] 💾 Saved posted_jobs.json: 1411 active jobs
[2026-01-14T20:26:22.820Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Head of Product Communications" @ anthropic
[2026-01-14T20:26:22.820Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:23.022Z] [BOT] ✅ Created forum post: 🏢 Head of Product Communications @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Product Communications @ anthropic
[2026-01-14T20:26:24.732Z] [BOT] ✅ Created forum post: 🏢 Head of Product Communications @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:26.234Z] [BOT] 💾 Marked as posted: Head of Product Communications @ anthropic (instance #1)
[2026-01-14T20:26:26.234Z] [BOT] 💾 BEFORE ARCHIVING: 1412 jobs in database
[2026-01-14T20:26:26.235Z] [BOT] ✅ No jobs to archive (all 1412 jobs within 7-day window)
[2026-01-14T20:26:26.243Z] [BOT] 💾 Saved posted_jobs.json: 1412 active jobs
[2026-01-14T20:26:26.243Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:26.244Z] [BOT] 📍 [ROUTING] "Manager, Customer Success" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-14T20:26:26.244Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:27.200Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Customer Success @ anthropic
[2026-01-14T20:26:28.887Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:30.388Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ anthropic (instance #1)
[2026-01-14T20:26:30.388Z] [BOT] 💾 BEFORE ARCHIVING: 1413 jobs in database
[2026-01-14T20:26:30.389Z] [BOT] ✅ No jobs to archive (all 1413 jobs within 7-day window)
[2026-01-14T20:26:30.400Z] [BOT] 💾 Saved posted_jobs.json: 1413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:30.400Z] [BOT] 📍 [ROUTING] "Manager of Associate Solutions Architects" @ anthropic
[2026-01-14T20:26:30.400Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:30.763Z] [BOT] ✅ Created forum post: 🏢 Manager of Associate Solutions Architects @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager of Associate Solutions Architects @ anthropic
[2026-01-14T20:26:32.522Z] [BOT] ✅ Created forum post: 🏢 Manager of Associate Solutions Architects @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:34.023Z] [BOT] 💾 Marked as posted: Manager of Associate Solutions Architects @ anthropic (instance #1)
[2026-01-14T20:26:34.023Z] [BOT] 💾 BEFORE ARCHIVING: 1414 jobs in database
[2026-01-14T20:26:34.025Z] [BOT] ✅ No jobs to archive (all 1414 jobs within 7-day window)
[2026-01-14T20:26:34.034Z] [BOT] 💾 Saved posted_jobs.json: 1414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:34.034Z] [BOT] 📍 [ROUTING] "Manager, Sales Development" @ anthropic
[2026-01-14T20:26:34.034Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:34.282Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ anthropic in #💲・sales-jobs
[2026-01-14T20:26:34.282Z] [BOT] ✅ Industry: Manager, Sales Development @ anthropic
[2026-01-14T20:26:36.187Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:37.688Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ anthropic (instance #1)
[2026-01-14T20:26:37.689Z] [BOT] 💾 BEFORE ARCHIVING: 1415 jobs in database
[2026-01-14T20:26:37.690Z] [BOT] ✅ No jobs to archive (all 1415 jobs within 7-day window)
[2026-01-14T20:26:37.699Z] [BOT] 💾 Saved posted_jobs.json: 1415 active jobs
[2026-01-14T20:26:37.699Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:37.700Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive, Industries" @ anthropic
[2026-01-14T20:26:37.700Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:37.818Z] [BOT ERROR] ❌ Error posting job Mid-Market Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mid-Market Account Executive, Industries @ anthropic',
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
[2026-01-14T20:26:37.818Z] [BOT] ❌ Industry post failed: Mid-Market Account Executive, Industries
⚠️  Channel full error count: 1/5
[2026-01-14T20:26:39.474Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:40.975Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive, Industries @ anthropic (instance #1)
[2026-01-14T20:26:40.975Z] [BOT] 💾 BEFORE ARCHIVING: 1416 jobs in database
[2026-01-14T20:26:40.976Z] [BOT] ✅ No jobs to archive (all 1416 jobs within 7-day window)
[2026-01-14T20:26:40.985Z] [BOT] 💾 Saved posted_jobs.json: 1416 active jobs
[2026-01-14T20:26:40.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:40.986Z] [BOT] 📍 [ROUTING] "Portfolio Activation Manager" @ anthropic
[2026-01-14T20:26:40.986Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:26:41.212Z] [BOT] ✅ Created forum post: 🏢 Portfolio Activation Manager @ anthropic in #💲・sales-jobs
[2026-01-14T20:26:41.212Z] [BOT] ✅ Industry: Portfolio Activation Manager @ anthropic
[2026-01-14T20:26:43.383Z] [BOT] ✅ Created forum post: 🏢 Portfolio Activation Manager @ anthropic in #🌉・san-francisco
[2026-01-14T20:26:43.383Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:44.884Z] [BOT] 💾 Marked as posted: Portfolio Activation Manager @ anthropic (instance #1)
[2026-01-14T20:26:44.884Z] [BOT] 💾 BEFORE ARCHIVING: 1417 jobs in database
[2026-01-14T20:26:44.885Z] [BOT] ✅ No jobs to archive (all 1417 jobs within 7-day window)
[2026-01-14T20:26:44.894Z] [BOT] 💾 Saved posted_jobs.json: 1417 active jobs
[2026-01-14T20:26:44.894Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:47.895Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-14T20:26:47.895Z] [BOT] 📍 [ROUTING] "Lead Product Manager, Research" @ anthropic
[2026-01-14T20:26:47.895Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-14T20:26:48.229Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Research @ anthropic in #📦・product-jobs
[2026-01-14T20:26:48.229Z] [BOT] ✅ Industry: Lead Product Manager, Research @ anthropic
[2026-01-14T20:26:49.929Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Research @ anthropic in #🌉・san-francisco
[2026-01-14T20:26:49.929Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:51.430Z] [BOT] 💾 Marked as posted: Lead Product Manager, Research @ anthropic (instance #1)
[2026-01-14T20:26:51.430Z] [BOT] 💾 BEFORE ARCHIVING: 1418 jobs in database
[2026-01-14T20:26:51.431Z] [BOT] ✅ No jobs to archive (all 1418 jobs within 7-day window)
[2026-01-14T20:26:51.442Z] [BOT] 💾 Saved posted_jobs.json: 1418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:54.443Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T20:26:54.443Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, Research Tools" @ anthropic
[2026-01-14T20:26:54.443Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T20:26:54.688Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, Research Tools @ anthropic in #🤖・ai-jobs
[2026-01-14T20:26:54.688Z] [BOT] ✅ Industry: Machine Learning Systems Engineer, Research Tools @ anthropic
[2026-01-14T20:26:56.405Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, Research Tools @ anthropic in #🌉・san-francisco
[2026-01-14T20:26:56.405Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:26:57.906Z] [BOT] 💾 Marked as posted: Machine Learning Systems Engineer, Research Tools @ anthropic (instance #1)
[2026-01-14T20:26:57.907Z] [BOT] 💾 BEFORE ARCHIVING: 1419 jobs in database
[2026-01-14T20:26:57.908Z] [BOT] ✅ No jobs to archive (all 1419 jobs within 7-day window)
[2026-01-14T20:26:57.920Z] [BOT] 💾 Saved posted_jobs.json: 1419 active jobs
[2026-01-14T20:26:57.920Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:26:57.920Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Public Sector, Applied AI" @ anthropic
[2026-01-14T20:26:57.920Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T20:26:58.299Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic
[2026-01-14T20:26:59.895Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Public Sector, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic',
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
[2026-01-14T20:26:59.895Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T20:27:01.396Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic (instance #1)
[2026-01-14T20:27:01.396Z] [BOT] 💾 BEFORE ARCHIVING: 1420 jobs in database
[2026-01-14T20:27:01.398Z] [BOT] ✅ No jobs to archive (all 1420 jobs within 7-day window)
[2026-01-14T20:27:01.408Z] [BOT] 💾 Saved posted_jobs.json: 1420 active jobs
[2026-01-14T20:27:01.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:27:04.409Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T20:27:04.410Z] [BOT] ⏭️  Skipping duplicate: JID_fcec0eb4 (posted within 7 days)
[2026-01-14T20:27:04.410Z] [BOT] ⏭️  Skipping duplicate: JID_d303f149 (posted within 7 days)
[2026-01-14T20:27:04.410Z] [BOT] ⏭️  Skipping duplicate: JID_60eeb9f6 (posted within 7 days)
[2026-01-14T20:27:04.410Z] [BOT] ⏭️  Skipping duplicate: JID_bf081e6e (posted within 7 days)
[2026-01-14T20:27:04.411Z] [BOT] ⏭️  Skipping duplicate: JID_dda80660 (posted within 7 days)
[2026-01-14T20:27:04.411Z] [BOT] ⏭️  Skipping duplicate: JID_e19bc474 (posted within 7 days)
⏭️  Skipping duplicate: JID_620d10bb (posted within 7 days)
[2026-01-14T20:27:04.411Z] [BOT] ⏭️  Skipping duplicate: JID_d2d21292 (posted within 7 days)
[2026-01-14T20:27:04.411Z] [BOT] ⏭️  Skipping duplicate: JID_d1e0fc36 (posted within 7 days)
[2026-01-14T20:27:04.411Z] [BOT] ⏭️  Skipping duplicate: JID_9779d71c (posted within 7 days)
[2026-01-14T20:27:04.530Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[2026-01-14T20:27:04.699Z] [BOT] ✅ Saved pending queue: 2731 total (2711 pending, 10 enriched, 10 posted)
[2026-01-14T20:27:04.699Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T20:27:04.753Z] [BOT] 📂 Loaded 3545 existing routing entries
[2026-01-14T20:27:04.814Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3555
[2026-01-14T20:27:04.814Z] [BOT] Timestamp: 2026-01-14T20:27:04.799Z
[2026-01-14T20:27:04.814Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T20:27:04.815Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-14T20:27:04.815Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-14T20:27:04.815Z] [BOT] Total posts: 18
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 9 posts
[2026-01-14T20:27:04.815Z] [BOT] 2. #💲・sales-jobs: 6 posts
     3. #🤖・ai-jobs: 2 posts
     4. #📦・product-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-14T20:27:06.840Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Mid-Market Account Executive, Industries: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Mid-Market Account Executive, Industries
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Public Sector, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*