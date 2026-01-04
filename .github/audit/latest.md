# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T13:27:24.969Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T13:26:23.016Z] ========================================
[2026-01-04T13:26:23.018Z] Discord Bot Execution Log
[2026-01-04T13:26:23.018Z] Environment: GitHub Actions
[2026-01-04T13:26:23.018Z] Node Version: v20.19.6
[2026-01-04T13:26:23.018Z] ========================================
[2026-01-04T13:26:23.018Z] Environment Variables Check:
[2026-01-04T13:26:23.018Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T13:26:23.018Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.018Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T13:26:23.019Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T13:26:23.019Z] 
Multi-Channel Configuration:
[2026-01-04T13:26:23.019Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T13:26:23.019Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T13:26:23.019Z] 
Data Files Check:
[2026-01-04T13:26:23.020Z] .github/data/new_jobs.json: ✅ Exists (10 items, 116682 bytes)
[2026-01-04T13:26:23.024Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 556699 bytes)
[2026-01-04T13:26:23.024Z] 
========================================
[2026-01-04T13:26:23.024Z] Starting Enhanced Discord Bot...
[2026-01-04T13:26:23.024Z] ========================================
[2026-01-04T13:26:23.537Z] [BOT] ✅ Loaded V2 database: 1107 jobs
[2026-01-04T13:26:24.388Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T13:26:24.389Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T13:26:24.389Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T13:26:24.390Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T13:26:24.457Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T13:26:24.543Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T13:26:24.546Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T13:26:24.546Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T13:26:24.546Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T13:26:24.547Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T13:26:24.547Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T13:26:24.552Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T13:26:24.552Z] [BOT] 📍 [ROUTING] "Engineering Manager, CDN" @ vercel
[2026-01-04T13:26:24.552Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:26:24.569Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T13:26:24.707Z] [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, CDN @ vercel',
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
[2026-01-04T13:26:24.707Z] [BOT] ❌ Industry post failed: Engineering Manager, CDN
[2026-01-04T13:26:24.708Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-04T13:26:26.361Z] [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, CDN @ vercel',
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
[2026-01-04T13:26:26.361Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:26:30.862Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T13:26:30.862Z] [BOT] 📍 [ROUTING] "Fraud Specialist" @ vercel
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T13:26:31.164Z] [BOT] ✅ Created forum post: 🏢 Fraud Specialist @ vercel in #🤖・ai-jobs
[2026-01-04T13:26:31.164Z] [BOT] ✅ Industry: Fraud Specialist @ vercel
[2026-01-04T13:26:32.992Z] [BOT] ✅ Created forum post: 🏢 Fraud Specialist @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:34.493Z] [BOT] 💾 Marked as posted: Fraud Specialist @ vercel (instance #1)
[2026-01-04T13:26:34.493Z] [BOT] 💾 BEFORE ARCHIVING: 1108 jobs in database
[2026-01-04T13:26:34.494Z] [BOT] ✅ No jobs to archive (all 1108 jobs within 7-day window)
[2026-01-04T13:26:34.507Z] [BOT] 💾 Saved posted_jobs.json: 1108 active jobs
[2026-01-04T13:26:34.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:26:34.507Z] [BOT] 📍 [ROUTING] " IT Infrastructure Engineer " @ vercel
[2026-01-04T13:26:34.507Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T13:26:34.507Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T13:26:35.412Z] [BOT] ✅ Created forum post: 🏢  IT Infrastructure Engineer  @ vercel in #🤖・ai-jobs
[2026-01-04T13:26:35.412Z] [BOT] ✅ Industry:  IT Infrastructure Engineer  @ vercel
[2026-01-04T13:26:37.179Z] [BOT] ✅ Created forum post: 🏢  IT Infrastructure Engineer  @ vercel in #🌉・san-francisco
[2026-01-04T13:26:37.180Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:38.680Z] [BOT] 💾 Marked as posted:  IT Infrastructure Engineer  @ vercel (instance #1)
[2026-01-04T13:26:38.680Z] [BOT] 💾 BEFORE ARCHIVING: 1109 jobs in database
[2026-01-04T13:26:38.681Z] [BOT] ✅ No jobs to archive (all 1109 jobs within 7-day window)
[2026-01-04T13:26:38.690Z] [BOT] 💾 Saved posted_jobs.json: 1109 active jobs
[2026-01-04T13:26:38.690Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:26:38.691Z] [BOT] 📍 [ROUTING] "Product Engineer – v0" @ vercel
[2026-01-04T13:26:38.691Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T13:26:38.905Z] [BOT] ✅ Created forum post: 🏢 Product Engineer – v0 @ vercel in #🤖・ai-jobs
[2026-01-04T13:26:38.905Z] [BOT] ✅ Industry: Product Engineer – v0 @ vercel
[2026-01-04T13:26:41.017Z] [BOT] ✅ Created forum post: 🏢 Product Engineer – v0 @ vercel in #🌉・san-francisco
[2026-01-04T13:26:41.017Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:42.518Z] [BOT] 💾 Marked as posted: Product Engineer – v0 @ vercel (instance #1)
[2026-01-04T13:26:42.518Z] [BOT] 💾 BEFORE ARCHIVING: 1110 jobs in database
[2026-01-04T13:26:42.520Z] [BOT] ✅ No jobs to archive (all 1110 jobs within 7-day window)
[2026-01-04T13:26:42.528Z] [BOT] 💾 Saved posted_jobs.json: 1110 active jobs
[2026-01-04T13:26:42.528Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:26:45.527Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T13:26:45.528Z] [BOT] 📍 [ROUTING] "Head of Product Marketing " @ vercel
[2026-01-04T13:26:45.528Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:26:45.791Z] [BOT] ✅ Created forum post: 🏢 Head of Product Marketing  @ vercel in #💲・sales-jobs
[2026-01-04T13:26:45.791Z] [BOT] ✅ Industry: Head of Product Marketing  @ vercel
[2026-01-04T13:26:47.569Z] [BOT] ✅ Created forum post: 🏢 Head of Product Marketing  @ vercel in #🌉・san-francisco
[2026-01-04T13:26:47.570Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:49.069Z] [BOT] 💾 Marked as posted: Head of Product Marketing  @ vercel (instance #1)
[2026-01-04T13:26:49.070Z] [BOT] 💾 BEFORE ARCHIVING: 1111 jobs in database
[2026-01-04T13:26:49.070Z] [BOT] ✅ No jobs to archive (all 1111 jobs within 7-day window)
[2026-01-04T13:26:49.081Z] [BOT] 💾 Saved posted_jobs.json: 1111 active jobs
[2026-01-04T13:26:49.081Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:26:49.082Z] [BOT] 📍 [ROUTING] "Manager, Sales Development, v0" @ vercel
[2026-01-04T13:26:49.082Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:26:49.455Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development, v0 @ vercel in #💲・sales-jobs
  ✅ Industry: Manager, Sales Development, v0 @ vercel
[2026-01-04T13:26:51.280Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development, v0 @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:52.781Z] [BOT] 💾 Marked as posted: Manager, Sales Development, v0 @ vercel (instance #1)
[2026-01-04T13:26:52.781Z] [BOT] 💾 BEFORE ARCHIVING: 1112 jobs in database
[2026-01-04T13:26:52.782Z] [BOT] ✅ No jobs to archive (all 1112 jobs within 7-day window)
[2026-01-04T13:26:52.790Z] [BOT] 💾 Saved posted_jobs.json: 1112 active jobs
[2026-01-04T13:26:52.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:26:55.790Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-04T13:26:55.791Z] [BOT] 📍 [ROUTING] "Platform Abuse Operations Lead, Trust & Safety" @ vercel
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-04T13:26:55.791Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-04T13:26:56.098Z] [BOT] ✅ Created forum post: 🏢 Platform Abuse Operations Lead, Trust & Safety @ vercel in #🩺・healthcare-jobs
  ✅ Industry: Platform Abuse Operations Lead, Trust & Safety @ vercel
[2026-01-04T13:26:57.792Z] [BOT] ✅ Created forum post: 🏢 Platform Abuse Operations Lead, Trust & Safety @ vercel in #🌉・san-francisco
[2026-01-04T13:26:57.792Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:26:59.293Z] [BOT] 💾 Marked as posted: Platform Abuse Operations Lead, Trust & Safety @ vercel (instance #1)
[2026-01-04T13:26:59.293Z] [BOT] 💾 BEFORE ARCHIVING: 1113 jobs in database
[2026-01-04T13:26:59.294Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-04T13:26:59.302Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:27:02.303Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-04T13:27:02.303Z] [BOT] 📍 [ROUTING] "Product Manager - Accounts" @ vercel
   Category: PRODUCT (matched: "product")
[2026-01-04T13:27:02.304Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-04T13:27:02.578Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Accounts @ vercel in #📦・product-jobs
[2026-01-04T13:27:02.578Z] [BOT] ✅ Industry: Product Manager - Accounts @ vercel
[2026-01-04T13:27:04.297Z] [BOT] ✅ Created forum post: 🏢 Product Manager - Accounts @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:27:05.798Z] [BOT] 💾 Marked as posted: Product Manager - Accounts @ vercel (instance #1)
[2026-01-04T13:27:05.799Z] [BOT] 💾 BEFORE ARCHIVING: 1114 jobs in database
[2026-01-04T13:27:05.799Z] [BOT] ✅ No jobs to archive (all 1114 jobs within 7-day window)
[2026-01-04T13:27:05.807Z] [BOT] 💾 Saved posted_jobs.json: 1114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:27:08.808Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T13:27:08.808Z] [BOT] 📍 [ROUTING] "Senior Manager, People Systems" @ vercel
[2026-01-04T13:27:08.808Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T13:27:09.075Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ vercel in #💰・finance-jobs
[2026-01-04T13:27:09.075Z] [BOT] ✅ Industry: Senior Manager, People Systems @ vercel
[2026-01-04T13:27:10.797Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ vercel in #🌉・san-francisco
[2026-01-04T13:27:10.797Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:27:12.298Z] [BOT] 💾 Marked as posted: Senior Manager, People Systems @ vercel (instance #1)
[2026-01-04T13:27:12.298Z] [BOT] 💾 BEFORE ARCHIVING: 1115 jobs in database
[2026-01-04T13:27:12.299Z] [BOT] ✅ No jobs to archive (all 1115 jobs within 7-day window)
[2026-01-04T13:27:12.307Z] [BOT] 💾 Saved posted_jobs.json: 1115 active jobs
[2026-01-04T13:27:12.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:27:15.308Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T13:27:15.309Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ vercel
[2026-01-04T13:27:15.309Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T13:27:15.487Z] [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Partner Marketing Manager @ vercel',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-04T13:27:15.487Z] [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-04T13:27:17.187Z] [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Partner Marketing Manager @ vercel',
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
[2026-01-04T13:27:17.187Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T13:27:21.688Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-04T13:27:21.688Z] [BOT] ⏭️  Skipping duplicate: JID_30d38ce0 (posted within 7 days)
[2026-01-04T13:27:21.688Z] [BOT] ⏭️  Skipping duplicate: JID_e4a172cc (posted within 7 days)
[2026-01-04T13:27:21.688Z] [BOT] ⏭️  Skipping duplicate: JID_bc9cd7c4 (posted within 7 days)
⏭️  Skipping duplicate: JID_2af45c41 (posted within 7 days)
[2026-01-04T13:27:21.688Z] [BOT] ⏭️  Skipping duplicate: JID_a4080f57 (posted within 7 days)
[2026-01-04T13:27:21.689Z] [BOT] ⏭️  Skipping duplicate: JID_fe97901d (posted within 7 days)
⏭️  Skipping duplicate: JID_489c26a2 (posted within 7 days)
[2026-01-04T13:27:21.689Z] [BOT] ⏭️  Skipping duplicate: JID_d2efcfd9 (posted within 7 days)
[2026-01-04T13:27:21.699Z] [BOT] ✅ Loaded pending queue: 183 total (163 pending, 20 enriched, 0 posted)
[2026-01-04T13:27:21.715Z] [BOT] ✅ Saved pending queue: 183 total (163 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-04T13:27:21.715Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T13:27:21.765Z] [BOT] 📂 Loaded 2019 existing routing entries
[2026-01-04T13:27:21.816Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T13:27:21.816Z] [BOT] Total entries: 2029
   Timestamp: 2026-01-04T13:27:21.807Z
[2026-01-04T13:27:21.817Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-04T13:27:21.817Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T13:27:21.817Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 6
   Top channels:
[2026-01-04T13:27:21.817Z] [BOT] 1. #🌉・san-francisco: 8 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #🩺・healthcare-jobs: 1 posts
[2026-01-04T13:27:21.817Z] [BOT] 5. #📦・product-jobs: 1 posts
[2026-01-04T13:27:21.818Z] [BOT] [STATS] Channel stats saved
[2026-01-04T13:27:23.827Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, CDN
- [BOT ERROR] ❌ Error posting job Engineering Manager, CDN: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*