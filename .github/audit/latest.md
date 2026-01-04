# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T08:06:05.157Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T08:05:10.934Z] ========================================
[2026-01-04T08:05:10.936Z] Discord Bot Execution Log
[2026-01-04T08:05:10.936Z] Environment: GitHub Actions
[2026-01-04T08:05:10.936Z] Node Version: v20.19.6
[2026-01-04T08:05:10.936Z] ========================================
[2026-01-04T08:05:10.936Z] Environment Variables Check:
[2026-01-04T08:05:10.937Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T08:05:10.937Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.937Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T08:05:10.937Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T08:05:10.937Z] 
Multi-Channel Configuration:
[2026-01-04T08:05:10.937Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.937Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T08:05:10.938Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T08:05:10.938Z] 
Data Files Check:
[2026-01-04T08:05:10.939Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162542 bytes)
[2026-01-04T08:05:10.943Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 473145 bytes)
[2026-01-04T08:05:10.943Z] 
========================================
[2026-01-04T08:05:10.943Z] Starting Enhanced Discord Bot...
[2026-01-04T08:05:10.943Z] ========================================
[2026-01-04T08:05:11.474Z] [BOT] ✅ Loaded V2 database: 939 jobs
[2026-01-04T08:05:11.914Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T08:05:11.914Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T08:05:11.914Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T08:05:11.918Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T08:05:11.989Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T08:05:12.079Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T08:05:12.081Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T08:05:12.081Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T08:05:12.082Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T08:05:12.082Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T08:05:12.083Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T08:05:12.087Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-04T08:05:12.088Z] [BOT] 📍 [ROUTING] "Director, Inside Sales" @ figma
[2026-01-04T08:05:12.088Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:05:12.106Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T08:05:12.221Z] [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Director, Inside Sales @ figma',
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
[2026-01-04T08:05:12.221Z] [BOT] ❌ Industry post failed: Director, Inside Sales
⚠️  Channel full error count: 1/5
[2026-01-04T08:05:14.005Z] [BOT] ✅ Created forum post: 🏢 Director, Inside Sales @ figma in #🌉・san-francisco
[2026-01-04T08:05:14.005Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:15.506Z] [BOT] 💾 Marked as posted: Director, Inside Sales @ figma (instance #1)
[2026-01-04T08:05:15.507Z] [BOT] 💾 BEFORE ARCHIVING: 940 jobs in database
[2026-01-04T08:05:15.508Z] [BOT] ✅ No jobs to archive (all 940 jobs within 7-day window)
[2026-01-04T08:05:15.517Z] [BOT] 💾 Saved posted_jobs.json: 940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:15.519Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Beneficial Deployments" @ anthropic
[2026-01-04T08:05:15.519Z] [BOT] Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:05:15.670Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Beneficial Deployments @ anthropic in #💲・sales-jobs
[2026-01-04T08:05:15.671Z] [BOT] ✅ Industry: Customer Success Manager, Beneficial Deployments @ anthropic
[2026-01-04T08:05:17.347Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Beneficial Deployments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:18.848Z] [BOT] 💾 Marked as posted: Customer Success Manager, Beneficial Deployments @ anthropic (instance #1)
[2026-01-04T08:05:18.848Z] [BOT] 💾 BEFORE ARCHIVING: 941 jobs in database
[2026-01-04T08:05:18.849Z] [BOT] ✅ No jobs to archive (all 941 jobs within 7-day window)
[2026-01-04T08:05:18.855Z] [BOT] 💾 Saved posted_jobs.json: 941 active jobs
[2026-01-04T08:05:18.855Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:18.856Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Digital Native Business" @ anthropic
[2026-01-04T08:05:18.856Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:05:19.140Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Digital Native Business @ anthropic in #💲・sales-jobs
[2026-01-04T08:05:19.141Z] [BOT] ✅ Industry: Strategic Account Executive, Digital Native Business @ anthropic
[2026-01-04T08:05:20.818Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Digital Native Business @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:22.320Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Digital Native Business @ anthropic (instance #1)
[2026-01-04T08:05:22.320Z] [BOT] 💾 BEFORE ARCHIVING: 942 jobs in database
[2026-01-04T08:05:22.321Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-04T08:05:22.330Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:22.330Z] [BOT] 📍 [ROUTING] "Contracts Manager" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-04T08:05:22.330Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:05:22.612Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager @ anthropic in #💲・sales-jobs
[2026-01-04T08:05:22.612Z] [BOT] ✅ Industry: Contracts Manager @ anthropic
[2026-01-04T08:05:24.294Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:25.795Z] [BOT] 💾 Marked as posted: Contracts Manager @ anthropic (instance #1)
[2026-01-04T08:05:25.796Z] [BOT] 💾 BEFORE ARCHIVING: 943 jobs in database
[2026-01-04T08:05:25.796Z] [BOT] ✅ No jobs to archive (all 943 jobs within 7-day window)
[2026-01-04T08:05:25.803Z] [BOT] 💾 Saved posted_jobs.json: 943 active jobs
[2026-01-04T08:05:25.803Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:25.804Z] [BOT] 📍 [ROUTING] "Contracts Manager, Procurement" @ anthropic
[2026-01-04T08:05:25.804Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T08:05:25.950Z] [BOT ERROR] ❌ Error posting job Contracts Manager, Procurement: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Contracts Manager, Procurement @ anthropic',
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
[2026-01-04T08:05:25.950Z] [BOT] ❌ Industry post failed: Contracts Manager, Procurement
⚠️  Channel full error count: 1/5
[2026-01-04T08:05:27.739Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager, Procurement @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:29.240Z] [BOT] 💾 Marked as posted: Contracts Manager, Procurement @ anthropic (instance #1)
[2026-01-04T08:05:29.241Z] [BOT] 💾 BEFORE ARCHIVING: 944 jobs in database
[2026-01-04T08:05:29.242Z] [BOT] ✅ No jobs to archive (all 944 jobs within 7-day window)
[2026-01-04T08:05:29.249Z] [BOT] 💾 Saved posted_jobs.json: 944 active jobs
[2026-01-04T08:05:29.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:32.250Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T08:05:32.250Z] [BOT] 📍 [ROUTING] "Software Engineer, Business Technology " @ anthropic
[2026-01-04T08:05:32.250Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:05:32.466Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Business Technology  @ anthropic in #💻・tech-jobs
[2026-01-04T08:05:32.466Z] [BOT] ✅ Industry: Software Engineer, Business Technology  @ anthropic
[2026-01-04T08:05:34.160Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Business Technology  @ anthropic in #🌉・san-francisco
[2026-01-04T08:05:34.160Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:35.661Z] [BOT] 💾 Marked as posted: Software Engineer, Business Technology  @ anthropic (instance #1)
[2026-01-04T08:05:35.661Z] [BOT] 💾 BEFORE ARCHIVING: 945 jobs in database
[2026-01-04T08:05:35.662Z] [BOT] ✅ No jobs to archive (all 945 jobs within 7-day window)
[2026-01-04T08:05:35.670Z] [BOT] 💾 Saved posted_jobs.json: 945 active jobs
[2026-01-04T08:05:35.670Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:35.671Z] [BOT] 📍 [ROUTING] "AI Platform Security Engineer" @ anthropic
[2026-01-04T08:05:35.671Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T08:05:36.299Z] [BOT] ✅ Created forum post: 🏢 AI Platform Security Engineer @ anthropic in #💻・tech-jobs
[2026-01-04T08:05:36.299Z] [BOT] ✅ Industry: AI Platform Security Engineer @ anthropic
[2026-01-04T08:05:37.980Z] [BOT] ✅ Created forum post: 🏢 AI Platform Security Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:39.481Z] [BOT] 💾 Marked as posted: AI Platform Security Engineer @ anthropic (instance #1)
[2026-01-04T08:05:39.481Z] [BOT] 💾 BEFORE ARCHIVING: 946 jobs in database
[2026-01-04T08:05:39.482Z] [BOT] ✅ No jobs to archive (all 946 jobs within 7-day window)
[2026-01-04T08:05:39.489Z] [BOT] 💾 Saved posted_jobs.json: 946 active jobs
[2026-01-04T08:05:39.489Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:42.490Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T08:05:42.491Z] [BOT] 📍 [ROUTING] "Capacity Engineer, Compute" @ anthropic
[2026-01-04T08:05:42.491Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T08:05:42.789Z] [BOT] ✅ Created forum post: 🏢 Capacity Engineer, Compute @ anthropic in #📈・JID_fb739488
  ✅ Industry: Capacity Engineer, Compute @ anthropic
[2026-01-04T08:05:44.643Z] [BOT] ✅ Created forum post: 🏢 Capacity Engineer, Compute @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:46.144Z] [BOT] 💾 Marked as posted: Capacity Engineer, Compute @ anthropic (instance #1)
[2026-01-04T08:05:46.144Z] [BOT] 💾 BEFORE ARCHIVING: 947 jobs in database
[2026-01-04T08:05:46.145Z] [BOT] ✅ No jobs to archive (all 947 jobs within 7-day window)
[2026-01-04T08:05:46.153Z] [BOT] 💾 Saved posted_jobs.json: 947 active jobs
[2026-01-04T08:05:46.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:49.154Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-04T08:05:49.154Z] [BOT] 📍 [ROUTING] "Commercial Counsel" @ anthropic
[2026-01-04T08:05:49.154Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-04T08:05:49.636Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel @ anthropic in #🏗️・JID_b7c6683f
[2026-01-04T08:05:49.637Z] [BOT] ✅ Industry: Commercial Counsel @ anthropic
[2026-01-04T08:05:51.291Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:52.791Z] [BOT] 💾 Marked as posted: Commercial Counsel @ anthropic (instance #1)
[2026-01-04T08:05:52.791Z] [BOT] 💾 BEFORE ARCHIVING: 948 jobs in database
[2026-01-04T08:05:52.792Z] [BOT] ✅ No jobs to archive (all 948 jobs within 7-day window)
[2026-01-04T08:05:52.800Z] [BOT] 💾 Saved posted_jobs.json: 948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T08:05:55.801Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T08:05:55.801Z] [BOT] 📍 [ROUTING] "Commercial Legal Specialist, Technical AI Implementation" @ anthropic
[2026-01-04T08:05:55.801Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T08:05:56.169Z] [BOT] ✅ Created forum post: 🏢 Commercial Legal Specialist, Technical AI Implementation @ anthropic in #🤖・ai-jobs
[2026-01-04T08:05:56.169Z] [BOT] ✅ Industry: Commercial Legal Specialist, Technical AI Implementation @ anthropic
[2026-01-04T08:05:57.800Z] [BOT] ✅ Created forum post: 🏢 Commercial Legal Specialist, Technical AI Implementation @ anthropic in #🌉・san-francisco
[2026-01-04T08:05:57.800Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T08:05:59.301Z] [BOT] 💾 Marked as posted: Commercial Legal Specialist, Technical AI Implementation @ anthropic (instance #1)
[2026-01-04T08:05:59.301Z] [BOT] 💾 BEFORE ARCHIVING: 949 jobs in database
[2026-01-04T08:05:59.302Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-04T08:05:59.309Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-04T08:05:59.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T08:06:02.310Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T08:06:02.310Z] [BOT] ⏭️  Skipping duplicate: JID_b376b3a0 (posted within 7 days)
[2026-01-04T08:06:02.310Z] [BOT] ⏭️  Skipping duplicate: JID_9b02c5cb (posted within 7 days)
[2026-01-04T08:06:02.310Z] [BOT] ⏭️  Skipping duplicate: JID_1d6b84cb (posted within 7 days)
[2026-01-04T08:06:02.310Z] [BOT] ⏭️  Skipping duplicate: JID_d0f6433e (posted within 7 days)
[2026-01-04T08:06:02.310Z] [BOT] ⏭️  Skipping duplicate: JID_ec5b0019 (posted within 7 days)
[2026-01-04T08:06:02.311Z] [BOT] ⏭️  Skipping duplicate: JID_12cf4757 (posted within 7 days)
[2026-01-04T08:06:02.311Z] [BOT] ⏭️  Skipping duplicate: JID_032b774f (posted within 7 days)
[2026-01-04T08:06:02.311Z] [BOT] ⏭️  Skipping duplicate: JID_87913698 (posted within 7 days)
[2026-01-04T08:06:02.311Z] [BOT] ⏭️  Skipping duplicate: JID_c71a7923 (posted within 7 days)
[2026-01-04T08:06:02.311Z] [BOT] ⏭️  Skipping duplicate: JID_d171bf8f (posted within 7 days)
[2026-01-04T08:06:02.345Z] [BOT] ✅ Loaded pending queue: 351 total (331 pending, 20 enriched, 0 posted)
[2026-01-04T08:06:02.378Z] [BOT] ✅ Saved pending queue: 351 total (331 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T08:06:02.378Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T08:06:02.429Z] [BOT] 📂 Loaded 1839 existing routing entries
[2026-01-04T08:06:02.476Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T08:06:02.476Z] [BOT] Total entries: 1849
   Timestamp: 2026-01-04T08:06:02.468Z
[2026-01-04T08:06:02.477Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T08:06:02.477Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-04T08:06:02.477Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T08:06:02.477Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-01-04T08:06:02.477Z] [BOT] 1. #🌉・san-francisco: 10 posts
     2. #💲・sales-jobs: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🏗️・JID_b7c6683f: 1 posts
[2026-01-04T08:06:02.477Z] [BOT] [STATS] Channel stats saved
[2026-01-04T08:06:04.493Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Inside Sales
- [BOT ERROR] ❌ Error posting job Contracts Manager, Procurement: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Contracts Manager, Procurement
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*