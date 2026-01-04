# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T12:06:16.175Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T12:05:23.440Z] ========================================
[2026-01-04T12:05:23.442Z] Discord Bot Execution Log
[2026-01-04T12:05:23.442Z] Environment: GitHub Actions
[2026-01-04T12:05:23.442Z] Node Version: v20.19.6
[2026-01-04T12:05:23.442Z] ========================================
[2026-01-04T12:05:23.442Z] Environment Variables Check:
[2026-01-04T12:05:23.442Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T12:05:23.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T12:05:23.443Z] 
Multi-Channel Configuration:
[2026-01-04T12:05:23.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.443Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.444Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.444Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T12:05:23.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T12:05:23.444Z] 
Data Files Check:
[2026-01-04T12:05:23.445Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167166 bytes)
[2026-01-04T12:05:23.449Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 538593 bytes)
[2026-01-04T12:05:23.449Z] 
========================================
[2026-01-04T12:05:23.449Z] Starting Enhanced Discord Bot...
[2026-01-04T12:05:23.449Z] ========================================
[2026-01-04T12:05:23.986Z] [BOT] ✅ Loaded V2 database: 1070 jobs
[2026-01-04T12:05:24.694Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T12:05:24.694Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T12:05:24.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T12:05:24.695Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T12:05:24.765Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T12:05:24.854Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T12:05:24.856Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T12:05:24.856Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T12:05:24.857Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T12:05:24.857Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T12:05:24.858Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T12:05:24.862Z] [BOT] 📌 Posting 3 jobs to #📦・product-jobs
[2026-01-04T12:05:24.863Z] [BOT] 📍 [ROUTING] "Product Manager, Sites" @ figma
[2026-01-04T12:05:24.863Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:05:24.880Z] [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T12:05:25.024Z] [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T12:05:25.024Z] [BOT] ❌ Industry post failed: Product Manager, Sites
[2026-01-04T12:05:25.024Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-04T12:05:26.759Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Sites @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:28.260Z] [BOT] 💾 Marked as posted: Product Manager, Sites @ figma (instance #1)
[2026-01-04T12:05:28.260Z] [BOT] 💾 BEFORE ARCHIVING: 1071 jobs in database
[2026-01-04T12:05:28.261Z] [BOT] ✅ No jobs to archive (all 1071 jobs within 7-day window)
[2026-01-04T12:05:28.272Z] [BOT] 💾 Saved posted_jobs.json: 1071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:28.272Z] [BOT] 📍 [ROUTING] "Product Manager, CMS" @ figma
[2026-01-04T12:05:28.272Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:05:28.506Z] [BOT] ✅ Created forum post: 🏢 Product Manager, CMS @ figma in #📦・product-jobs
[2026-01-04T12:05:28.506Z] [BOT] ✅ Industry: Product Manager, CMS @ figma
[2026-01-04T12:05:30.361Z] [BOT] ✅ Created forum post: 🏢 Product Manager, CMS @ figma in #🌉・san-francisco
[2026-01-04T12:05:30.361Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:31.862Z] [BOT] 💾 Marked as posted: Product Manager, CMS @ figma (instance #1)
[2026-01-04T12:05:31.862Z] [BOT] 💾 BEFORE ARCHIVING: 1072 jobs in database
[2026-01-04T12:05:31.863Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-04T12:05:31.870Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-04T12:05:31.871Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:31.871Z] [BOT] 📍 [ROUTING] "Product Manager, Growth" @ figma
[2026-01-04T12:05:31.871Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-04T12:05:32.174Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Growth @ figma in #📦・product-jobs
[2026-01-04T12:05:32.174Z] [BOT] ✅ Industry: Product Manager, Growth @ figma
[2026-01-04T12:05:34.039Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Growth @ figma in #🌉・san-francisco
[2026-01-04T12:05:34.040Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:35.541Z] [BOT] 💾 Marked as posted: Product Manager, Growth @ figma (instance #1)
[2026-01-04T12:05:35.542Z] [BOT] 💾 BEFORE ARCHIVING: 1073 jobs in database
[2026-01-04T12:05:35.543Z] [BOT] ✅ No jobs to archive (all 1073 jobs within 7-day window)
[2026-01-04T12:05:35.551Z] [BOT] 💾 Saved posted_jobs.json: 1073 active jobs
[2026-01-04T12:05:35.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:38.552Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T12:05:38.552Z] [BOT] 📍 [ROUTING] "Strategic Finance, Finance Systems & Automation" @ figma
[2026-01-04T12:05:38.552Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T12:05:38.796Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance, Finance Systems & Automation @ figma in #📈・JID_fb739488
  ✅ Industry: Strategic Finance, Finance Systems & Automation @ figma
[2026-01-04T12:05:40.492Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance, Finance Systems & Automation @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:41.993Z] [BOT] 💾 Marked as posted: Strategic Finance, Finance Systems & Automation @ figma (instance #1)
[2026-01-04T12:05:41.993Z] [BOT] 💾 BEFORE ARCHIVING: 1074 jobs in database
[2026-01-04T12:05:41.994Z] [BOT] ✅ No jobs to archive (all 1074 jobs within 7-day window)
[2026-01-04T12:05:42.002Z] [BOT] 💾 Saved posted_jobs.json: 1074 active jobs
[2026-01-04T12:05:42.002Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:45.003Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-04T12:05:45.003Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Product" @ figma
[2026-01-04T12:05:45.003Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T12:05:45.276Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Product @ figma in #📁・JID_e938df7b
  ✅ Industry: Technical Recruiter, Product @ figma
[2026-01-04T12:05:47.100Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Product @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:48.601Z] [BOT] 💾 Marked as posted: Technical Recruiter, Product @ figma (instance #1)
[2026-01-04T12:05:48.601Z] [BOT] 💾 BEFORE ARCHIVING: 1075 jobs in database
[2026-01-04T12:05:48.602Z] [BOT] ✅ No jobs to archive (all 1075 jobs within 7-day window)
[2026-01-04T12:05:48.611Z] [BOT] 💾 Saved posted_jobs.json: 1075 active jobs
[2026-01-04T12:05:48.611Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:51.612Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-04T12:05:51.612Z] [BOT] 📍 [ROUTING] "Account Executive, SMB " @ figma
[2026-01-04T12:05:51.612Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:05:51.839Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB  @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, SMB  @ figma
[2026-01-04T12:05:54.200Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:05:55.701Z] [BOT] 💾 Marked as posted: Account Executive, SMB  @ figma (instance #1)
[2026-01-04T12:05:55.701Z] [BOT] 💾 BEFORE ARCHIVING: 1076 jobs in database
[2026-01-04T12:05:55.701Z] [BOT] ✅ No jobs to archive (all 1076 jobs within 7-day window)
[2026-01-04T12:05:55.710Z] [BOT] 💾 Saved posted_jobs.json: 1076 active jobs
[2026-01-04T12:05:55.710Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:55.710Z] [BOT] 📍 [ROUTING] "Designer Advocate - Figma Weave " @ figma
[2026-01-04T12:05:55.711Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:05:56.068Z] [BOT] ✅ Created forum post: 🏢 Designer Advocate - Figma Weave  @ figma in #💲・sales-jobs
  ✅ Industry: Designer Advocate - Figma Weave  @ figma
[2026-01-04T12:05:57.858Z] [BOT] ✅ Created forum post: 🏢 Designer Advocate - Figma Weave  @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T12:05:59.358Z] [BOT] 💾 Marked as posted: Designer Advocate - Figma Weave  @ figma (instance #1)
[2026-01-04T12:05:59.358Z] [BOT] 💾 BEFORE ARCHIVING: 1077 jobs in database
[2026-01-04T12:05:59.359Z] [BOT] ✅ No jobs to archive (all 1077 jobs within 7-day window)
[2026-01-04T12:05:59.367Z] [BOT] 💾 Saved posted_jobs.json: 1077 active jobs
[2026-01-04T12:05:59.367Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T12:05:59.367Z] [BOT] 📍 [ROUTING] "Equity Operations Manager" @ figma
[2026-01-04T12:05:59.368Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:05:59.652Z] [BOT] ✅ Created forum post: 🏢 Equity Operations Manager @ figma in #💲・sales-jobs
[2026-01-04T12:05:59.652Z] [BOT] ✅ Industry: Equity Operations Manager @ figma
[2026-01-04T12:06:01.349Z] [BOT] ✅ Created forum post: 🏢 Equity Operations Manager @ figma in #🌉・san-francisco
[2026-01-04T12:06:01.349Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T12:06:02.850Z] [BOT] 💾 Marked as posted: Equity Operations Manager @ figma (instance #1)
[2026-01-04T12:06:02.850Z] [BOT] 💾 BEFORE ARCHIVING: 1078 jobs in database
[2026-01-04T12:06:02.851Z] [BOT] ✅ No jobs to archive (all 1078 jobs within 7-day window)
[2026-01-04T12:06:02.859Z] [BOT] 💾 Saved posted_jobs.json: 1078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:06:02.860Z] [BOT] 📍 [ROUTING] "Technical Learning Specialist" @ figma
[2026-01-04T12:06:02.860Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:06:03.160Z] [BOT] ✅ Created forum post: 🏢 Technical Learning Specialist @ figma in #💲・sales-jobs
[2026-01-04T12:06:03.160Z] [BOT] ✅ Industry: Technical Learning Specialist @ figma
[2026-01-04T12:06:04.877Z] [BOT] ✅ Created forum post: 🏢 Technical Learning Specialist @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T12:06:06.379Z] [BOT] 💾 Marked as posted: Technical Learning Specialist @ figma (instance #1)
[2026-01-04T12:06:06.379Z] [BOT] 💾 BEFORE ARCHIVING: 1079 jobs in database
[2026-01-04T12:06:06.380Z] [BOT] ✅ No jobs to archive (all 1079 jobs within 7-day window)
[2026-01-04T12:06:06.387Z] [BOT] 💾 Saved posted_jobs.json: 1079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T12:06:06.388Z] [BOT] 📍 [ROUTING] "Director, Design - Communication Tools" @ figma
[2026-01-04T12:06:06.388Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T12:06:06.525Z] [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Design - Communication Tools @ figma',
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
[2026-01-04T12:06:06.525Z] [BOT] ❌ Industry post failed: Director, Design - Communication Tools
⚠️  Channel full error count: 1/5
[2026-01-04T12:06:08.233Z] [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Design - Communication Tools @ figma',
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
[2026-01-04T12:06:08.233Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T12:06:12.735Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T12:06:12.735Z] [BOT] ⏭️  Skipping duplicate: JID_4906ba30 (posted within 7 days)
[2026-01-04T12:06:12.735Z] [BOT] ⏭️  Skipping duplicate: JID_e63c6a0e (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_2aab6a01 (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_fbea14ba (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_02c50a26 (posted within 7 days)
⏭️  Skipping duplicate: JID_5c211b5e (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_8d76e110 (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_e049b2b1 (posted within 7 days)
[2026-01-04T12:06:12.736Z] [BOT] ⏭️  Skipping duplicate: JID_7c8acff4 (posted within 7 days)
[2026-01-04T12:06:12.747Z] [BOT] ✅ Loaded pending queue: 220 total (200 pending, 20 enriched, 0 posted)
[2026-01-04T12:06:12.768Z] [BOT] ✅ Saved pending queue: 220 total (200 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-04T12:06:12.768Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T12:06:12.817Z] [BOT] 📂 Loaded 1979 existing routing entries
[2026-01-04T12:06:12.872Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T12:06:12.872Z] [BOT] Total entries: 1989
   Timestamp: 2026-01-04T12:06:12.863Z
[2026-01-04T12:06:12.873Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T12:06:12.873Z] [BOT] Total attempts: 20
   Successful: 17
   Failed: 3
   Skipped: 0
[2026-01-04T12:06:12.873Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T12:06:12.873Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 4 posts
     3. #📦・product-jobs: 2 posts
[2026-01-04T12:06:12.874Z] [BOT] 4. #📈・JID_fb739488: 1 posts
     5. #📁・JID_e938df7b: 1 posts
[2026-01-04T12:06:12.874Z] [BOT] [STATS] Channel stats saved
[2026-01-04T12:06:14.888Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Manager, Sites
- [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Design - Communication Tools
- [BOT ERROR] ❌ Error posting job Director, Design - Communication Tools: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*