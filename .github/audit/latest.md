# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T09:05:38.756Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T09:04:44.362Z] ========================================
[2026-01-04T09:04:44.363Z] Discord Bot Execution Log
[2026-01-04T09:04:44.364Z] Environment: GitHub Actions
[2026-01-04T09:04:44.364Z] Node Version: v20.19.6
[2026-01-04T09:04:44.364Z] ========================================
[2026-01-04T09:04:44.364Z] Environment Variables Check:
[2026-01-04T09:04:44.364Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T09:04:44.364Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.364Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T09:04:44.364Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T09:04:44.364Z] 
Multi-Channel Configuration:
[2026-01-04T09:04:44.364Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T09:04:44.365Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T09:04:44.365Z] 
Data Files Check:
[2026-01-04T09:04:44.366Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182905 bytes)
[2026-01-04T09:04:44.370Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 490230 bytes)
[2026-01-04T09:04:44.370Z] 
========================================
[2026-01-04T09:04:44.370Z] Starting Enhanced Discord Bot...
[2026-01-04T09:04:44.370Z] ========================================
[2026-01-04T09:04:44.888Z] [BOT] ✅ Loaded V2 database: 973 jobs
[2026-01-04T09:04:45.404Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T09:04:45.405Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T09:04:45.405Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T09:04:45.406Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T09:04:45.474Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T09:04:45.562Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T09:04:45.565Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T09:04:45.565Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T09:04:45.565Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T09:04:45.566Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T09:04:45.566Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T09:04:45.571Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T09:04:45.572Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-04T09:04:45.572Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:04:45.589Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T09:04:45.729Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-04T09:04:45.730Z] [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
⚠️  Channel full error count: 1/5
[2026-01-04T09:04:47.339Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T09:04:47.340Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T09:04:48.841Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Safeguards" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-04T09:04:48.841Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:04:49.042Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-04T09:04:49.042Z] [BOT] ✅ Industry: Machine Learning Engineer, Safeguards @ anthropic
[2026-01-04T09:04:50.687Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Safeguards: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:932:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Machine Learning Engineer, Safeguards @ anthropic',
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
[2026-01-04T09:04:50.687Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T09:04:52.189Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Safeguards @ anthropic (instance #1)
[2026-01-04T09:04:52.189Z] [BOT] 💾 BEFORE ARCHIVING: 974 jobs in database
[2026-01-04T09:04:52.190Z] [BOT] ✅ No jobs to archive (all 974 jobs within 7-day window)
[2026-01-04T09:04:52.205Z] [BOT] 💾 Saved posted_jobs.json: 974 active jobs
[2026-01-04T09:04:52.205Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:04:55.205Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T09:04:55.206Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst" @ anthropic
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T09:04:55.434Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst @ anthropic in #📣・marketing-jobs
  ✅ Industry: Finance Systems, Senior Business Systems Analyst @ anthropic
[2026-01-04T09:04:57.127Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:04:58.628Z] [BOT] 💾 Marked as posted: Finance Systems, Senior Business Systems Analyst @ anthropic (instance #1)
[2026-01-04T09:04:58.628Z] [BOT] 💾 BEFORE ARCHIVING: 975 jobs in database
[2026-01-04T09:04:58.629Z] [BOT] ✅ No jobs to archive (all 975 jobs within 7-day window)
[2026-01-04T09:04:58.637Z] [BOT] 💾 Saved posted_jobs.json: 975 active jobs
[2026-01-04T09:04:58.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:04:58.637Z] [BOT] 📍 [ROUTING] "Global Design & Construction Manager" @ anthropic
[2026-01-04T09:04:58.637Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T09:04:58.830Z] [BOT] ✅ Created forum post: 🏢 Global Design & Construction Manager @ anthropic in #📣・marketing-jobs
[2026-01-04T09:04:58.831Z] [BOT] ✅ Industry: Global Design & Construction Manager @ anthropic
[2026-01-04T09:05:00.586Z] [BOT] ✅ Created forum post: 🏢 Global Design & Construction Manager @ anthropic in #🌉・san-francisco
[2026-01-04T09:05:00.586Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:02.086Z] [BOT] 💾 Marked as posted: Global Design & Construction Manager @ anthropic (instance #1)
[2026-01-04T09:05:02.086Z] [BOT] 💾 BEFORE ARCHIVING: 976 jobs in database
[2026-01-04T09:05:02.087Z] [BOT] ✅ No jobs to archive (all 976 jobs within 7-day window)
[2026-01-04T09:05:02.095Z] [BOT] 💾 Saved posted_jobs.json: 976 active jobs
[2026-01-04T09:05:02.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:05.095Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-04T09:05:05.095Z] [BOT] 📍 [ROUTING] "Global Indirect Tax Compliance Lead" @ anthropic
[2026-01-04T09:05:05.095Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:05:05.279Z] [BOT] ✅ Created forum post: 🏢 Global Indirect Tax Compliance Lead @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Indirect Tax Compliance Lead @ anthropic
[2026-01-04T09:05:06.970Z] [BOT] ✅ Created forum post: 🏢 Global Indirect Tax Compliance Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:08.472Z] [BOT] 💾 Marked as posted: Global Indirect Tax Compliance Lead @ anthropic (instance #1)
[2026-01-04T09:05:08.472Z] [BOT] 💾 BEFORE ARCHIVING: 977 jobs in database
[2026-01-04T09:05:08.472Z] [BOT] ✅ No jobs to archive (all 977 jobs within 7-day window)
[2026-01-04T09:05:08.480Z] [BOT] 💾 Saved posted_jobs.json: 977 active jobs
[2026-01-04T09:05:08.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:08.481Z] [BOT] 📍 [ROUTING] "Head of GTM Narrative " @ anthropic
   Category: SALES (matched: "sales")
[2026-01-04T09:05:08.481Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:05:08.690Z] [BOT] ✅ Created forum post: 🏢 Head of GTM Narrative  @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of GTM Narrative  @ anthropic
[2026-01-04T09:05:10.603Z] [BOT] ✅ Created forum post: 🏢 Head of GTM Narrative  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:12.103Z] [BOT] 💾 Marked as posted: Head of GTM Narrative  @ anthropic (instance #1)
[2026-01-04T09:05:12.103Z] [BOT] 💾 BEFORE ARCHIVING: 978 jobs in database
[2026-01-04T09:05:12.104Z] [BOT] ✅ No jobs to archive (all 978 jobs within 7-day window)
[2026-01-04T09:05:12.111Z] [BOT] 💾 Saved posted_jobs.json: 978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:12.112Z] [BOT] 📍 [ROUTING] "Head of Infrastructure Accounting " @ anthropic
[2026-01-04T09:05:12.112Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:05:12.344Z] [BOT] ✅ Created forum post: 🏢 Head of Infrastructure Accounting  @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Infrastructure Accounting  @ anthropic
[2026-01-04T09:05:14.700Z] [BOT] ✅ Created forum post: 🏢 Head of Infrastructure Accounting  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:16.201Z] [BOT] 💾 Marked as posted: Head of Infrastructure Accounting  @ anthropic (instance #1)
[2026-01-04T09:05:16.202Z] [BOT] 💾 BEFORE ARCHIVING: 979 jobs in database
[2026-01-04T09:05:16.202Z] [BOT] ✅ No jobs to archive (all 979 jobs within 7-day window)
[2026-01-04T09:05:16.210Z] [BOT] 💾 Saved posted_jobs.json: 979 active jobs
[2026-01-04T09:05:16.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:16.211Z] [BOT] 📍 [ROUTING] "Head of Product Communications" @ anthropic
[2026-01-04T09:05:16.211Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:05:16.447Z] [BOT] ✅ Created forum post: 🏢 Head of Product Communications @ anthropic in #💲・sales-jobs
[2026-01-04T09:05:16.447Z] [BOT] ✅ Industry: Head of Product Communications @ anthropic
[2026-01-04T09:05:18.258Z] [BOT] ✅ Created forum post: 🏢 Head of Product Communications @ anthropic in #🌉・san-francisco
[2026-01-04T09:05:18.258Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:19.759Z] [BOT] 💾 Marked as posted: Head of Product Communications @ anthropic (instance #1)
[2026-01-04T09:05:19.759Z] [BOT] 💾 BEFORE ARCHIVING: 980 jobs in database
[2026-01-04T09:05:19.760Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-04T09:05:19.768Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
[2026-01-04T09:05:19.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:22.768Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T09:05:22.769Z] [BOT] 📍 [ROUTING] "Head of Forward Deployed Engineering" @ anthropic
[2026-01-04T09:05:22.769Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T09:05:23.061Z] [BOT] ✅ Created forum post: 🏢 Head of Forward Deployed Engineering @ anthropic in #💻・tech-jobs
[2026-01-04T09:05:23.061Z] [BOT] ✅ Industry: Head of Forward Deployed Engineering @ anthropic
[2026-01-04T09:05:24.875Z] [BOT] ✅ Created forum post: 🏢 Head of Forward Deployed Engineering @ anthropic in #🌉・san-francisco
[2026-01-04T09:05:24.875Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:26.376Z] [BOT] 💾 Marked as posted: Head of Forward Deployed Engineering @ anthropic (instance #1)
[2026-01-04T09:05:26.377Z] [BOT] 💾 BEFORE ARCHIVING: 981 jobs in database
[2026-01-04T09:05:26.378Z] [BOT] ✅ No jobs to archive (all 981 jobs within 7-day window)
[2026-01-04T09:05:26.385Z] [BOT] 💾 Saved posted_jobs.json: 981 active jobs
[2026-01-04T09:05:26.385Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:29.385Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-04T09:05:29.385Z] [BOT] 📍 [ROUTING] "Lead Product Manager, Research" @ anthropic
[2026-01-04T09:05:29.386Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T09:05:29.558Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Research @ anthropic in #📦・product-jobs
  ✅ Industry: Lead Product Manager, Research @ anthropic
[2026-01-04T09:05:31.344Z] [BOT] ✅ Created forum post: 🏢 Lead Product Manager, Research @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:05:32.845Z] [BOT] 💾 Marked as posted: Lead Product Manager, Research @ anthropic (instance #1)
[2026-01-04T09:05:32.845Z] [BOT] 💾 BEFORE ARCHIVING: 982 jobs in database
[2026-01-04T09:05:32.846Z] [BOT] ✅ No jobs to archive (all 982 jobs within 7-day window)
[2026-01-04T09:05:32.854Z] [BOT] 💾 Saved posted_jobs.json: 982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:05:35.855Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_bc9a7971 (posted within 7 days)
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_0432ef70 (posted within 7 days)
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_cea6099e (posted within 7 days)
⏭️  Skipping duplicate: JID_4c13d109 (posted within 7 days)
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_fcec0eb4 (posted within 7 days)
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_fd362e00 (posted within 7 days)
⏭️  Skipping duplicate: JID_d303f149 (posted within 7 days)
⏭️  Skipping duplicate: JID_60eeb9f6 (posted within 7 days)
[2026-01-04T09:05:35.856Z] [BOT] ⏭️  Skipping duplicate: JID_d0e620f0 (posted within 7 days)
[2026-01-04T09:05:35.887Z] [BOT] ✅ Loaded pending queue: 317 total (297 pending, 20 enriched, 0 posted)
[2026-01-04T09:05:35.918Z] [BOT] ✅ Saved pending queue: 317 total (297 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-04T09:05:35.918Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T09:05:35.970Z] [BOT] 📂 Loaded 1879 existing routing entries
[2026-01-04T09:05:36.017Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1889
[2026-01-04T09:05:36.017Z] [BOT] Timestamp: 2026-01-04T09:05:36.009Z
[2026-01-04T09:05:36.018Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T09:05:36.018Z] [BOT] Total attempts: 20
   Successful: 17
   Failed: 3
   Skipped: 0
[2026-01-04T09:05:36.018Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T09:05:36.018Z] [BOT] Total posts: 17
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 8 posts
[2026-01-04T09:05:36.018Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #📣・marketing-jobs: 2 posts
     4. #🤖・ai-jobs: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-04T09:05:36.019Z] [BOT] [STATS] Channel stats saved
[2026-01-04T09:05:38.035Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Safeguards: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*