# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T10:05:45.549Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T10:04:53.917Z] ========================================
[2026-01-04T10:04:53.919Z] Discord Bot Execution Log
[2026-01-04T10:04:53.919Z] Environment: GitHub Actions
[2026-01-04T10:04:53.919Z] Node Version: v20.19.6
[2026-01-04T10:04:53.919Z] ========================================
[2026-01-04T10:04:53.919Z] Environment Variables Check:
[2026-01-04T10:04:53.919Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T10:04:53.919Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.919Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T10:04:53.920Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T10:04:53.920Z] 
Multi-Channel Configuration:
[2026-01-04T10:04:53.920Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T10:04:53.920Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T10:04:53.921Z] 
Data Files Check:
[2026-01-04T10:04:53.922Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181604 bytes)
[2026-01-04T10:04:53.925Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 504724 bytes)
[2026-01-04T10:04:53.925Z] 
========================================
[2026-01-04T10:04:53.925Z] Starting Enhanced Discord Bot...
[2026-01-04T10:04:53.926Z] ========================================
[2026-01-04T10:04:54.458Z] [BOT] ✅ Loaded V2 database: 1002 jobs
[2026-01-04T10:04:55.169Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T10:04:55.169Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T10:04:55.169Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T10:04:55.170Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T10:04:55.241Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T10:04:55.331Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T10:04:55.334Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T10:04:55.334Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T10:04:55.334Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T10:04:55.335Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T10:04:55.335Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T10:04:55.340Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T10:04:55.341Z] [BOT] 📍 [ROUTING] "Product Operations Manager" @ anthropic
[2026-01-04T10:04:55.341Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T10:04:55.358Z] [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T10:04:55.555Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager @ anthropic in #💲・sales-jobs
[2026-01-04T10:04:55.555Z] [BOT] ✅ Industry: Product Operations Manager @ anthropic
[2026-01-04T10:04:57.336Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager @ anthropic in #🌉・san-francisco
[2026-01-04T10:04:57.336Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:04:58.836Z] [BOT] 💾 Marked as posted: Product Operations Manager @ anthropic (instance #1)
[2026-01-04T10:04:58.836Z] [BOT] 💾 BEFORE ARCHIVING: 1003 jobs in database
[2026-01-04T10:04:58.837Z] [BOT] ✅ No jobs to archive (all 1003 jobs within 7-day window)
[2026-01-04T10:04:58.848Z] [BOT] 💾 Saved posted_jobs.json: 1003 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:04:58.848Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Public Sector " @ anthropic
[2026-01-04T10:04:58.848Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T10:04:59.054Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Public Sector  @ anthropic in #💲・sales-jobs
[2026-01-04T10:04:59.054Z] [BOT] ✅ Industry: Product Operations Manager, Public Sector  @ anthropic
[2026-01-04T10:05:00.779Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Public Sector  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:02.280Z] [BOT] 💾 Marked as posted: Product Operations Manager, Public Sector  @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 1004 jobs in database
[2026-01-04T10:05:02.281Z] [BOT] ✅ No jobs to archive (all 1004 jobs within 7-day window)
[2026-01-04T10:05:02.287Z] [BOT] 💾 Saved posted_jobs.json: 1004 active jobs
[2026-01-04T10:05:02.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:02.287Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Research Product " @ anthropic
[2026-01-04T10:05:02.287Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T10:05:02.428Z] [BOT ERROR] ❌ Error posting job Product Operations Manager, Research Product : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Operations Manager, Research Product  @ anthropic',
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
[2026-01-04T10:05:02.428Z] [BOT] ❌ Industry post failed: Product Operations Manager, Research Product 
⚠️  Channel full error count: 1/5
[2026-01-04T10:05:04.147Z] [BOT] ✅ Created forum post: 🏢 Product Operations Manager, Research Product  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:05.647Z] [BOT] 💾 Marked as posted: Product Operations Manager, Research Product  @ anthropic (instance #1)
[2026-01-04T10:05:05.648Z] [BOT] 💾 BEFORE ARCHIVING: 1005 jobs in database
[2026-01-04T10:05:05.649Z] [BOT] ✅ No jobs to archive (all 1005 jobs within 7-day window)
[2026-01-04T10:05:05.658Z] [BOT] 💾 Saved posted_jobs.json: 1005 active jobs
[2026-01-04T10:05:05.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:08.659Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-04T10:05:08.659Z] [BOT] 📍 [ROUTING] "Product Operations Manager, Launch Readiness " @ anthropic
[2026-01-04T10:05:08.660Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T10:05:08.874Z] [BOT ERROR] ❌ Error posting job Product Operations Manager, Launch Readiness : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Operations Manager, Launch Readiness  @ anthropic',
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
[2026-01-04T10:05:08.874Z] [BOT] ❌ Industry post failed: Product Operations Manager, Launch Readiness 
⚠️  Channel full error count: 2/5
[2026-01-04T10:05:10.518Z] [BOT ERROR] ❌ Error posting job Product Operations Manager, Launch Readiness : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Operations Manager, Launch Readiness  @ anthropic',
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
[2026-01-04T10:05:10.518Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T10:05:12.019Z] [BOT] 📍 [ROUTING] "Product Support Manager" @ anthropic
   Category: MARKETING (matched: "growth")
[2026-01-04T10:05:12.019Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T10:05:12.220Z] [BOT] ✅ Created forum post: 🏢 Product Support Manager @ anthropic in #📣・marketing-jobs
  ✅ Industry: Product Support Manager @ anthropic
[2026-01-04T10:05:13.981Z] [BOT] ✅ Created forum post: 🏢 Product Support Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:15.482Z] [BOT] 💾 Marked as posted: Product Support Manager @ anthropic (instance #1)
[2026-01-04T10:05:15.482Z] [BOT] 💾 BEFORE ARCHIVING: 1006 jobs in database
[2026-01-04T10:05:15.483Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-04T10:05:15.491Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:18.492Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-04T10:05:18.492Z] [BOT] 📍 [ROUTING] "Product Support Specialist" @ anthropic
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T10:05:18.710Z] [BOT] ✅ Created forum post: 🏢 Product Support Specialist @ anthropic in #📁・JID_e938df7b
[2026-01-04T10:05:18.711Z] [BOT] ✅ Industry: Product Support Specialist @ anthropic
[2026-01-04T10:05:20.488Z] [BOT] ✅ Created forum post: 🏢 Product Support Specialist @ anthropic in #🌉・san-francisco
[2026-01-04T10:05:20.488Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:21.989Z] [BOT] 💾 Marked as posted: Product Support Specialist @ anthropic (instance #1)
[2026-01-04T10:05:21.989Z] [BOT] 💾 BEFORE ARCHIVING: 1007 jobs in database
[2026-01-04T10:05:21.990Z] [BOT] ✅ No jobs to archive (all 1007 jobs within 7-day window)
[2026-01-04T10:05:21.997Z] [BOT] 💾 Saved posted_jobs.json: 1007 active jobs
[2026-01-04T10:05:21.997Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:21.998Z] [BOT] 📍 [ROUTING] "Recruiter, Sales" @ anthropic
[2026-01-04T10:05:21.998Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T10:05:22.224Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Sales @ anthropic in #📁・JID_e938df7b
  ✅ Industry: Recruiter, Sales @ anthropic
[2026-01-04T10:05:23.915Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:25.415Z] [BOT] 💾 Marked as posted: Recruiter, Sales @ anthropic (instance #1)
[2026-01-04T10:05:25.415Z] [BOT] 💾 BEFORE ARCHIVING: 1008 jobs in database
[2026-01-04T10:05:25.416Z] [BOT] ✅ No jobs to archive (all 1008 jobs within 7-day window)
[2026-01-04T10:05:25.424Z] [BOT] 💾 Saved posted_jobs.json: 1008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:28.425Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T10:05:28.425Z] [BOT] 📍 [ROUTING] "Recruiter, AI Research" @ anthropic
[2026-01-04T10:05:28.425Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-04T10:05:28.763Z] [BOT] ✅ Created forum post: 🏢 Recruiter, AI Research @ anthropic in #🤖・ai-jobs
[2026-01-04T10:05:28.764Z] [BOT] ✅ Industry: Recruiter, AI Research @ anthropic
[2026-01-04T10:05:30.547Z] [BOT] ✅ Created forum post: 🏢 Recruiter, AI Research @ anthropic in #🌉・san-francisco
[2026-01-04T10:05:30.547Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:32.048Z] [BOT] 💾 Marked as posted: Recruiter, AI Research @ anthropic (instance #1)
[2026-01-04T10:05:32.048Z] [BOT] 💾 BEFORE ARCHIVING: 1009 jobs in database
[2026-01-04T10:05:32.049Z] [BOT] ✅ No jobs to archive (all 1009 jobs within 7-day window)
[2026-01-04T10:05:32.057Z] [BOT] 💾 Saved posted_jobs.json: 1009 active jobs
[2026-01-04T10:05:32.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:32.058Z] [BOT] 📍 [ROUTING] "Research Engineer, Interpretability" @ anthropic
[2026-01-04T10:05:32.058Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:05:32.404Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Interpretability @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Interpretability @ anthropic
[2026-01-04T10:05:34.095Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Interpretability @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:35.596Z] [BOT] 💾 Marked as posted: Research Engineer, Interpretability @ anthropic (instance #1)
[2026-01-04T10:05:35.596Z] [BOT] 💾 BEFORE ARCHIVING: 1010 jobs in database
[2026-01-04T10:05:35.597Z] [BOT] ✅ No jobs to archive (all 1010 jobs within 7-day window)
[2026-01-04T10:05:35.609Z] [BOT] 💾 Saved posted_jobs.json: 1010 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Research Engineer, Machine Learning (Horizons) " @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:05:35.829Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Machine Learning (Horizons)  @ anthropic in #🤖・ai-jobs
[2026-01-04T10:05:35.829Z] [BOT] ✅ Industry: Research Engineer, Machine Learning (Horizons)  @ anthropic
[2026-01-04T10:05:37.565Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Machine Learning (Horizons)  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:05:39.066Z] [BOT] 💾 Marked as posted: Research Engineer, Machine Learning (Horizons)  @ anthropic (instance #1)
[2026-01-04T10:05:39.067Z] [BOT] 💾 BEFORE ARCHIVING: 1011 jobs in database
[2026-01-04T10:05:39.067Z] [BOT] ✅ No jobs to archive (all 1011 jobs within 7-day window)
[2026-01-04T10:05:39.075Z] [BOT] 💾 Saved posted_jobs.json: 1011 active jobs
[2026-01-04T10:05:39.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:05:42.076Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T10:05:42.077Z] [BOT] ⏭️  Skipping duplicate: JID_68a7c280 (posted within 7 days)
[2026-01-04T10:05:42.077Z] [BOT] ⏭️  Skipping duplicate: JID_af574b6f (posted within 7 days)
[2026-01-04T10:05:42.077Z] [BOT] ⏭️  Skipping duplicate: JID_7e334b6d (posted within 7 days)
[2026-01-04T10:05:42.077Z] [BOT] ⏭️  Skipping duplicate: JID_911014cd (posted within 7 days)
[2026-01-04T10:05:42.077Z] [BOT] ⏭️  Skipping duplicate: JID_4e442941 (posted within 7 days)
[2026-01-04T10:05:42.078Z] [BOT] ⏭️  Skipping duplicate: JID_83451021 (posted within 7 days)
⏭️  Skipping duplicate: JID_017264f8 (posted within 7 days)
⏭️  Skipping duplicate: JID_73606e35 (posted within 7 days)
⏭️  Skipping duplicate: JID_d2212a19 (posted within 7 days)
[2026-01-04T10:05:42.098Z] [BOT] ✅ Loaded pending queue: 288 total (268 pending, 20 enriched, 0 posted)
[2026-01-04T10:05:42.124Z] [BOT] ✅ Saved pending queue: 288 total (268 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-04T10:05:42.124Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T10:05:42.175Z] [BOT] 📂 Loaded 1909 existing routing entries
[2026-01-04T10:05:42.223Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1919
[2026-01-04T10:05:42.223Z] [BOT] Timestamp: 2026-01-04T10:05:42.215Z
[2026-01-04T10:05:42.224Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T10:05:42.224Z] [BOT] Total attempts: 20
   Successful: 17
   Failed: 3
   Skipped: 0
[2026-01-04T10:05:42.224Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
[2026-01-04T10:05:42.224Z] [BOT] Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-04T10:05:42.224Z] [BOT] 4. #📁・JID_e938df7b: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-04T10:05:42.225Z] [BOT] [STATS] Channel stats saved
[2026-01-04T10:05:44.238Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Operations Manager, Research Product : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Operations Manager, Research Product
- [BOT ERROR] ❌ Error posting job Product Operations Manager, Launch Readiness : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Operations Manager, Launch Readiness
- [BOT ERROR] ❌ Error posting job Product Operations Manager, Launch Readiness : DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*