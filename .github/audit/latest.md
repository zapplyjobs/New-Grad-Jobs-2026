# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T11:35:45.633Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T11:34:50.472Z] ========================================
[2026-01-04T11:34:50.474Z] Discord Bot Execution Log
[2026-01-04T11:34:50.474Z] Environment: GitHub Actions
[2026-01-04T11:34:50.474Z] Node Version: v20.19.6
[2026-01-04T11:34:50.474Z] ========================================
[2026-01-04T11:34:50.474Z] Environment Variables Check:
[2026-01-04T11:34:50.474Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T11:34:50.474Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.474Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T11:34:50.474Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T11:34:50.474Z] 
Multi-Channel Configuration:
[2026-01-04T11:34:50.475Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T11:34:50.475Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T11:34:50.475Z] 
Data Files Check:
[2026-01-04T11:34:50.476Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133584 bytes)
[2026-01-04T11:34:50.480Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 528806 bytes)
[2026-01-04T11:34:50.480Z] 
========================================
[2026-01-04T11:34:50.480Z] Starting Enhanced Discord Bot...
[2026-01-04T11:34:50.480Z] ========================================
[2026-01-04T11:34:51.008Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-04T11:34:51.657Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T11:34:51.658Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T11:34:51.658Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T11:34:51.659Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T11:34:51.729Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T11:34:51.819Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T11:34:51.821Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T11:34:51.822Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T11:34:51.822Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T11:34:51.822Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T11:34:51.823Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T11:34:51.827Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-04T11:34:51.828Z] [BOT] 📍 [ROUTING] "Product Designer " @ figma
[2026-01-04T11:34:51.828Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:34:51.846Z] [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T11:34:52.421Z] [BOT] ✅ Created forum post: 🏢 Product Designer  @ figma in #💲・sales-jobs
[2026-01-04T11:34:52.421Z] [BOT] ✅ Industry: Product Designer  @ figma
[2026-01-04T11:34:54.180Z] [BOT] ✅ Created forum post: 🏢 Product Designer  @ figma in #🌉・san-francisco
[2026-01-04T11:34:54.180Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:34:55.681Z] [BOT] 💾 Marked as posted: Product Designer  @ figma (instance #1)
[2026-01-04T11:34:55.681Z] [BOT] 💾 BEFORE ARCHIVING: 1051 jobs in database
[2026-01-04T11:34:55.682Z] [BOT] ✅ No jobs to archive (all 1051 jobs within 7-day window)
[2026-01-04T11:34:55.693Z] [BOT] 💾 Saved posted_jobs.json: 1051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:34:55.694Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ figma
[2026-01-04T11:34:55.694Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:34:55.888Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ figma in #💲・sales-jobs
[2026-01-04T11:34:55.888Z] [BOT] ✅ Industry: Solutions Consultant @ figma
[2026-01-04T11:34:57.653Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ figma in #🌉・san-francisco
[2026-01-04T11:34:57.653Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:34:59.153Z] [BOT] 💾 Marked as posted: Solutions Consultant @ figma (instance #1)
💾 BEFORE ARCHIVING: 1052 jobs in database
[2026-01-04T11:34:59.154Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-04T11:34:59.161Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:34:59.162Z] [BOT] 📍 [ROUTING] "Manager, Field Marketing" @ figma
[2026-01-04T11:34:59.162Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:34:59.380Z] [BOT] ✅ Created forum post: 🏢 Manager, Field Marketing @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Field Marketing @ figma
[2026-01-04T11:35:01.035Z] [BOT ERROR] ❌ Error posting job Manager, Field Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, Field Marketing @ figma',
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
[2026-01-04T11:35:01.035Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T11:35:02.536Z] [BOT] 💾 Marked as posted: Manager, Field Marketing @ figma (instance #1)
[2026-01-04T11:35:02.536Z] [BOT] 💾 BEFORE ARCHIVING: 1053 jobs in database
[2026-01-04T11:35:02.537Z] [BOT] ✅ No jobs to archive (all 1053 jobs within 7-day window)
[2026-01-04T11:35:02.544Z] [BOT] 💾 Saved posted_jobs.json: 1053 active jobs
[2026-01-04T11:35:02.544Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:02.545Z] [BOT] 📍 [ROUTING] "Commercial Account Executive, Greenfield " @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:35:02.687Z] [BOT ERROR] ❌ Error posting job Commercial Account Executive, Greenfield : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Commercial Account Executive, Greenfield  @ vercel',
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
[2026-01-04T11:35:02.687Z] [BOT] ❌ Industry post failed: Commercial Account Executive, Greenfield 
⚠️  Channel full error count: 1/5
[2026-01-04T11:35:04.389Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive, Greenfield  @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:05.889Z] [BOT] 💾 Marked as posted: Commercial Account Executive, Greenfield  @ vercel (instance #1)
[2026-01-04T11:35:05.889Z] [BOT] 💾 BEFORE ARCHIVING: 1054 jobs in database
[2026-01-04T11:35:05.890Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-04T11:35:05.897Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
[2026-01-04T11:35:05.897Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:05.897Z] [BOT] 📍 [ROUTING] "Director of Sales Engineering, AMER" @ vercel
[2026-01-04T11:35:05.898Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:35:06.120Z] [BOT] ✅ Created forum post: 🏢 Director of Sales Engineering, AMER @ vercel in #💲・sales-jobs
[2026-01-04T11:35:06.121Z] [BOT] ✅ Industry: Director of Sales Engineering, AMER @ vercel
[2026-01-04T11:35:07.969Z] [BOT] ✅ Created forum post: 🏢 Director of Sales Engineering, AMER @ vercel in #🌉・san-francisco
[2026-01-04T11:35:07.969Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:09.470Z] [BOT] 💾 Marked as posted: Director of Sales Engineering, AMER @ vercel (instance #1)
[2026-01-04T11:35:09.471Z] [BOT] 💾 BEFORE ARCHIVING: 1055 jobs in database
[2026-01-04T11:35:09.471Z] [BOT] ✅ No jobs to archive (all 1055 jobs within 7-day window)
[2026-01-04T11:35:09.481Z] [BOT] 💾 Saved posted_jobs.json: 1055 active jobs
[2026-01-04T11:35:09.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:12.482Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T11:35:12.482Z] [BOT] 📍 [ROUTING] "Recruiting Coordinator (Contract)" @ vercel
[2026-01-04T11:35:12.482Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T11:35:12.729Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (Contract) @ vercel in #📣・marketing-jobs
[2026-01-04T11:35:12.730Z] [BOT] ✅ Industry: Recruiting Coordinator (Contract) @ vercel
[2026-01-04T11:35:14.468Z] [BOT] ✅ Created forum post: 🏢 Recruiting Coordinator (Contract) @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:15.969Z] [BOT] 💾 Marked as posted: Recruiting Coordinator (Contract) @ vercel (instance #1)
[2026-01-04T11:35:15.969Z] [BOT] 💾 BEFORE ARCHIVING: 1056 jobs in database
[2026-01-04T11:35:15.970Z] [BOT] ✅ No jobs to archive (all 1056 jobs within 7-day window)
[2026-01-04T11:35:15.979Z] [BOT] 💾 Saved posted_jobs.json: 1056 active jobs
[2026-01-04T11:35:15.979Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:18.980Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-04T11:35:18.980Z] [BOT] 📍 [ROUTING] "Technical Program Manager, AI Platform" @ figma
[2026-01-04T11:35:18.981Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-04T11:35:19.302Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, AI Platform @ figma in #📈・JID_fb739488
[2026-01-04T11:35:19.302Z] [BOT] ✅ Industry: Technical Program Manager, AI Platform @ figma
[2026-01-04T11:35:21.092Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, AI Platform @ figma in #🌉・san-francisco
[2026-01-04T11:35:21.093Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:22.592Z] [BOT] 💾 Marked as posted: Technical Program Manager, AI Platform @ figma (instance #1)
[2026-01-04T11:35:22.592Z] [BOT] 💾 BEFORE ARCHIVING: 1057 jobs in database
[2026-01-04T11:35:22.593Z] [BOT] ✅ No jobs to archive (all 1057 jobs within 7-day window)
[2026-01-04T11:35:22.601Z] [BOT] 💾 Saved posted_jobs.json: 1057 active jobs
[2026-01-04T11:35:22.602Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:22.602Z] [BOT] 📍 [ROUTING] "Staff Data Engineer, Ads" @ discord
[2026-01-04T11:35:22.602Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T11:35:22.851Z] [BOT] ✅ Created forum post: 🏢 Staff Data Engineer, Ads @ discord in #📈・JID_fb739488
[2026-01-04T11:35:22.851Z] [BOT] ✅ Industry: Staff Data Engineer, Ads @ discord
[2026-01-04T11:35:24.654Z] [BOT] ✅ Created forum post: 🏢 Staff Data Engineer, Ads @ discord in #🌉・san-francisco
[2026-01-04T11:35:24.654Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:26.155Z] [BOT] 💾 Marked as posted: Staff Data Engineer, Ads @ discord (instance #1)
[2026-01-04T11:35:26.155Z] [BOT] 💾 BEFORE ARCHIVING: 1058 jobs in database
[2026-01-04T11:35:26.156Z] [BOT] ✅ No jobs to archive (all 1058 jobs within 7-day window)
[2026-01-04T11:35:26.165Z] [BOT] 💾 Saved posted_jobs.json: 1058 active jobs
[2026-01-04T11:35:26.165Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:29.165Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-04T11:35:29.166Z] [BOT] 📍 [ROUTING] "Software Engineer (Web Performance), v0" @ vercel
[2026-01-04T11:35:29.166Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:35:29.488Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Web Performance), v0 @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer (Web Performance), v0 @ vercel
[2026-01-04T11:35:31.216Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Web Performance), v0 @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:35:32.717Z] [BOT] 💾 Marked as posted: Software Engineer (Web Performance), v0 @ vercel (instance #1)
[2026-01-04T11:35:32.718Z] [BOT] 💾 BEFORE ARCHIVING: 1059 jobs in database
[2026-01-04T11:35:32.719Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-04T11:35:32.727Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-04T11:35:32.727Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:35.728Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-04T11:35:35.728Z] [BOT] 📍 [ROUTING] "Global Head of Sales Operations & Strategy" @ spotify
[2026-01-04T11:35:35.728Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-04T11:35:35.963Z] [BOT] ✅ Created forum post: 🏢 Global Head of Sales Operations & Strategy @ spotify in #🤖・ai-jobs
[2026-01-04T11:35:35.964Z] [BOT] ✅ Industry: Global Head of Sales Operations & Strategy @ spotify
[2026-01-04T11:35:37.702Z] [BOT] ✅ Created forum post: 🏢 Global Head of Sales Operations & Strategy @ spotify in #🗽・new-york
[2026-01-04T11:35:37.702Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T11:35:39.204Z] [BOT] 💾 Marked as posted: Global Head of Sales Operations & Strategy @ spotify (instance #1)
[2026-01-04T11:35:39.204Z] [BOT] 💾 BEFORE ARCHIVING: 1060 jobs in database
[2026-01-04T11:35:39.205Z] [BOT] ✅ No jobs to archive (all 1060 jobs within 7-day window)
[2026-01-04T11:35:39.217Z] [BOT] 💾 Saved posted_jobs.json: 1060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:35:42.216Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T11:35:42.216Z] [BOT] ⏭️  Skipping duplicate: JID_d39b2d94 (posted within 7 days)
[2026-01-04T11:35:42.216Z] [BOT] ⏭️  Skipping duplicate: JID_658bcfb4 (posted within 7 days)
[2026-01-04T11:35:42.216Z] [BOT] ⏭️  Skipping duplicate: JID_947e5f00 (posted within 7 days)
[2026-01-04T11:35:42.216Z] [BOT] ⏭️  Skipping duplicate: JID_853975cb (posted within 7 days)
[2026-01-04T11:35:42.217Z] [BOT] ⏭️  Skipping duplicate: JID_1b547e55 (posted within 7 days)
[2026-01-04T11:35:42.217Z] [BOT] ⏭️  Skipping duplicate: JID_bb403d2b (posted within 7 days)
[2026-01-04T11:35:42.217Z] [BOT] ⏭️  Skipping duplicate: JID_a323b072 (posted within 7 days)
⏭️  Skipping duplicate: JID_06424e64 (posted within 7 days)
[2026-01-04T11:35:42.217Z] [BOT] ⏭️  Skipping duplicate: JID_34f5f73e (posted within 7 days)
⏭️  Skipping duplicate: JID_620b2058 (posted within 7 days)
[2026-01-04T11:35:42.230Z] [BOT] ✅ Loaded pending queue: 240 total (220 pending, 20 enriched, 0 posted)
[2026-01-04T11:35:42.253Z] [BOT] ✅ Saved pending queue: 240 total (220 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T11:35:42.253Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T11:35:42.300Z] [BOT] 📂 Loaded 1959 existing routing entries
[2026-01-04T11:35:42.354Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T11:35:42.354Z] [BOT] Total entries: 1969
   Timestamp: 2026-01-04T11:35:42.345Z
[2026-01-04T11:35:42.355Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 18
[2026-01-04T11:35:42.355Z] [BOT] Failed: 2
   Skipped: 0
[2026-01-04T11:35:42.355Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T11:35:42.355Z] [BOT] Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 8 posts
[2026-01-04T11:35:42.355Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #📈・JID_fb739488: 2 posts
     4. #📣・marketing-jobs: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-04T11:35:42.355Z] [BOT] [STATS] Channel stats saved
[2026-01-04T11:35:44.370Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Manager, Field Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Commercial Account Executive, Greenfield : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Commercial Account Executive, Greenfield
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*