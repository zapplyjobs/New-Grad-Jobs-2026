# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T07:53:48.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T07:53:02.845Z] ========================================
[2026-01-14T07:53:02.847Z] Discord Bot Execution Log
[2026-01-14T07:53:02.847Z] Environment: GitHub Actions
[2026-01-14T07:53:02.847Z] Node Version: v20.19.6
[2026-01-14T07:53:02.848Z] ========================================
[2026-01-14T07:53:02.848Z] Environment Variables Check:
[2026-01-14T07:53:02.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T07:53:02.848Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T07:53:02.848Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T07:53:02.848Z] 
Multi-Channel Configuration:
[2026-01-14T07:53:02.848Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.848Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.848Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.848Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T07:53:02.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T07:53:02.849Z] 
Data Files Check:
[2026-01-14T07:53:02.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 83280 bytes)
[2026-01-14T07:53:02.854Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 697279 bytes)
[2026-01-14T07:53:02.855Z] 
========================================
[2026-01-14T07:53:02.855Z] Starting Enhanced Discord Bot...
[2026-01-14T07:53:02.855Z] ========================================
[2026-01-14T07:53:03.383Z] [BOT] ✅ Loaded V2 database: 1314 jobs
[2026-01-14T07:53:03.859Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T07:53:03.860Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T07:53:03.860Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T07:53:03.968Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mobile Engineer at vercel
[2026-01-14T07:53:03.971Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T07:53:03.971Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T07:53:03.972Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T07:53:03.972Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T07:53:03.973Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T07:53:03.977Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T07:53:03.978Z] [BOT] 📍 [ROUTING] "Mobile Engineer" @ vercel
[2026-01-14T07:53:03.978Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:53:03.995Z] [BOT ERROR] (node:2594) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T07:53:04.068Z] [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Mobile Engineer @ vercel',
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
[2026-01-14T07:53:04.068Z] [BOT] ❌ Industry post failed: Mobile Engineer
[2026-01-14T07:53:04.068Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-14T07:53:05.717Z] [BOT] ✅ Created forum post: 🏢 Mobile Engineer @ vercel in #🗽・new-york
[2026-01-14T07:53:05.717Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T07:53:07.220Z] [BOT] 💾 Marked as posted: Mobile Engineer @ vercel (instance #1)
[2026-01-14T07:53:07.220Z] [BOT] 💾 BEFORE ARCHIVING: 1315 jobs in database
[2026-01-14T07:53:07.221Z] [BOT] ✅ No jobs to archive (all 1315 jobs within 7-day window)
[2026-01-14T07:53:07.234Z] [BOT] 💾 Saved posted_jobs.json: 1315 active jobs
[2026-01-14T07:53:07.234Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Full-Stack Developer - Junior" @ ORG_39417f32 Allen
[2026-01-14T07:53:07.234Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:53:07.519Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer - Junior @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-14T07:53:07.519Z] [BOT] ✅ Industry: Full-Stack Developer - Junior @ ORG_39417f32 Allen
[2026-01-14T07:53:09.189Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer - Junior @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:53:10.691Z] [BOT] 💾 Marked as posted: Full-Stack Developer - Junior @ ORG_39417f32 Allen (instance #1)
[2026-01-14T07:53:10.691Z] [BOT] 💾 BEFORE ARCHIVING: 1316 jobs in database
[2026-01-14T07:53:10.692Z] [BOT] ✅ No jobs to archive (all 1316 jobs within 7-day window)
[2026-01-14T07:53:10.700Z] [BOT] 💾 Saved posted_jobs.json: 1316 active jobs
[2026-01-14T07:53:10.700Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:10.700Z] [BOT] 📍 [ROUTING] "Ion Exchange Development Technician" @ ORG_540647baing
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:53:10.841Z] [BOT ERROR] ❌ Error posting job Ion Exchange Development Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Ion Exchange Development Technician @ ORG_540647baing',
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
[2026-01-14T07:53:10.842Z] [BOT] ❌ Industry post failed: Ion Exchange Development Technician
⚠️  Channel full error count: 1/5
[2026-01-14T07:53:12.494Z] [BOT] ✅ Created forum post: 🏢 Ion Exchange Development Technician @ ORG_540647baing in #🗽・new-york
[2026-01-14T07:53:12.494Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T07:53:13.994Z] [BOT] 💾 Marked as posted: Ion Exchange Development Technician @ ORG_540647baing (instance #1)
[2026-01-14T07:53:13.995Z] [BOT] 💾 BEFORE ARCHIVING: 1317 jobs in database
[2026-01-14T07:53:13.996Z] [BOT] ✅ No jobs to archive (all 1317 jobs within 7-day window)
[2026-01-14T07:53:14.005Z] [BOT] 💾 Saved posted_jobs.json: 1317 active jobs
[2026-01-14T07:53:14.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:14.005Z] [BOT] 📍 [ROUTING] "Associate Full Stack Engineer" @ ORG_66279f04 Investments
[2026-01-14T07:53:14.006Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:53:14.168Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Engineer @ ORG_66279f04 Investments in #💻・tech-jobs
[2026-01-14T07:53:14.168Z] [BOT] ✅ Industry: Associate Full Stack Engineer @ ORG_66279f04 Investments
[2026-01-14T07:53:15.831Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Engineer @ ORG_66279f04 Investments in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:53:17.331Z] [BOT] 💾 Marked as posted: Associate Full Stack Engineer @ ORG_66279f04 Investments (instance #1)
[2026-01-14T07:53:17.331Z] [BOT] 💾 BEFORE ARCHIVING: 1318 jobs in database
[2026-01-14T07:53:17.333Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T07:53:17.334Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T07:53:17.334Z] [BOT] ✅ Archiving complete: 1 archived, 1317 active
[2026-01-14T07:53:17.343Z] [BOT] 💾 Saved posted_jobs.json: 1317 active jobs
[2026-01-14T07:53:17.344Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:20.344Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-14T07:53:20.345Z] [BOT] 📍 [ROUTING] "RevOps Reporting & Insights Analyst" @ anthropic
[2026-01-14T07:53:20.345Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:53:20.519Z] [BOT] ✅ Created forum post: 🏢 RevOps Reporting & Insights Analyst @ anthropic in #💲・sales-jobs
[2026-01-14T07:53:20.519Z] [BOT] ✅ Industry: RevOps Reporting & Insights Analyst @ anthropic
[2026-01-14T07:53:22.265Z] [BOT] ✅ Created forum post: 🏢 RevOps Reporting & Insights Analyst @ anthropic in #🌉・san-francisco
[2026-01-14T07:53:22.265Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:53:23.766Z] [BOT] 💾 Marked as posted: RevOps Reporting & Insights Analyst @ anthropic (instance #1)
[2026-01-14T07:53:23.766Z] [BOT] 💾 BEFORE ARCHIVING: 1318 jobs in database
[2026-01-14T07:53:23.768Z] [BOT] ✅ No jobs to archive (all 1318 jobs within 7-day window)
[2026-01-14T07:53:23.778Z] [BOT] 💾 Saved posted_jobs.json: 1318 active jobs
[2026-01-14T07:53:23.778Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:23.778Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ anthropic
[2026-01-14T07:53:23.778Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:53:23.997Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ anthropic in #💲・sales-jobs
[2026-01-14T07:53:23.997Z] [BOT] ✅ Industry: Business Development Representative @ anthropic
[2026-01-14T07:53:25.699Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ anthropic in #🌉・san-francisco
[2026-01-14T07:53:25.700Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:53:27.201Z] [BOT] 💾 Marked as posted: Business Development Representative @ anthropic (instance #1)
[2026-01-14T07:53:27.201Z] [BOT] 💾 BEFORE ARCHIVING: 1319 jobs in database
[2026-01-14T07:53:27.202Z] [BOT] ✅ No jobs to archive (all 1319 jobs within 7-day window)
[2026-01-14T07:53:27.211Z] [BOT] 💾 Saved posted_jobs.json: 1319 active jobs
[2026-01-14T07:53:27.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:27.212Z] [BOT] 📍 [ROUTING] "Community Experiences Manager" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T07:53:27.577Z] [BOT] ✅ Created forum post: 🏢 Community Experiences Manager @ figma in #💲・sales-jobs
[2026-01-14T07:53:27.577Z] [BOT] ✅ Industry: Community Experiences Manager @ figma
[2026-01-14T07:53:29.294Z] [BOT] ✅ Created forum post: 🏢 Community Experiences Manager @ figma in #🌉・san-francisco
[2026-01-14T07:53:29.295Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T07:53:30.795Z] [BOT] 💾 Marked as posted: Community Experiences Manager @ figma (instance #1)
[2026-01-14T07:53:30.796Z] [BOT] 💾 BEFORE ARCHIVING: 1320 jobs in database
[2026-01-14T07:53:30.797Z] [BOT] ✅ No jobs to archive (all 1320 jobs within 7-day window)
[2026-01-14T07:53:30.805Z] [BOT] 💾 Saved posted_jobs.json: 1320 active jobs
[2026-01-14T07:53:30.805Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:33.805Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T07:53:33.806Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:53:33.971Z] [BOT] ✅ Created forum post: 🏢 Internship Program Coordinator @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Internship Program Coordinator @ gohighlevel
[2026-01-14T07:53:35.472Z] [BOT] 💾 Marked as posted: Internship Program Coordinator @ gohighlevel (instance #1)
[2026-01-14T07:53:35.472Z] [BOT] 💾 BEFORE ARCHIVING: 1321 jobs in database
[2026-01-14T07:53:35.473Z] [BOT] ✅ No jobs to archive (all 1321 jobs within 7-day window)
[2026-01-14T07:53:35.483Z] [BOT] 💾 Saved posted_jobs.json: 1321 active jobs
[2026-01-14T07:53:35.483Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:35.483Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_e5ca4df3 Group
[2026-01-14T07:53:35.483Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:53:35.669Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group
[2026-01-14T07:53:37.399Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-14T07:53:38.901Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group (instance #1)
[2026-01-14T07:53:38.901Z] [BOT] 💾 BEFORE ARCHIVING: 1322 jobs in database
[2026-01-14T07:53:38.902Z] [BOT] ✅ No jobs to archive (all 1322 jobs within 7-day window)
[2026-01-14T07:53:38.911Z] [BOT] 💾 Saved posted_jobs.json: 1322 active jobs
[2026-01-14T07:53:38.911Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:38.911Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Machine Learning" @ ORG_d9bc2c87
[2026-01-14T07:53:38.912Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:53:39.182Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #🤖・ai-jobs
[2026-01-14T07:53:39.182Z] [BOT] ✅ Industry: Software Engineer 1 - Machine Learning @ ORG_d9bc2c87
[2026-01-14T07:53:40.878Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 in #🗽・new-york
[2026-01-14T07:53:40.878Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T07:53:42.379Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Machine Learning @ ORG_d9bc2c87 (instance #1)
[2026-01-14T07:53:42.379Z] [BOT] 💾 BEFORE ARCHIVING: 1323 jobs in database
[2026-01-14T07:53:42.380Z] [BOT] ✅ No jobs to archive (all 1323 jobs within 7-day window)
[2026-01-14T07:53:42.389Z] [BOT] 💾 Saved posted_jobs.json: 1323 active jobs
[2026-01-14T07:53:42.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:53:45.389Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T07:53:45.389Z] [BOT] ⏭️  Skipping duplicate: JID_13223fd1 (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_7fd4c3cf (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_eae44490-junior_r0230138 (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_766dbf9e (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_ad97a5b6 (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_13ccb65e-engineer_2120832-1 (posted within 7 days)
[2026-01-14T07:53:45.390Z] [BOT] ⏭️  Skipping duplicate: JID_4bca4deb (posted within 7 days)
[2026-01-14T07:53:45.391Z] [BOT] ⏭️  Skipping duplicate: JID_bf35e57b-costar_campus-JID_280988fc-engineer_r37862 (posted within 7 days)
[2026-01-14T07:53:45.391Z] [BOT] ⏭️  Skipping duplicate: JID_b623225e (posted within 7 days)
⏭️  Skipping duplicate: JID_744551aa-etsy_careers-JID_dd7d3f69-data_jr5230 (posted within 7 days)
[2026-01-14T07:53:45.502Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-14T07:53:45.673Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
[2026-01-14T07:53:45.673Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T07:53:45.726Z] [BOT] 📂 Loaded 3435 existing routing entries
[2026-01-14T07:53:45.787Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3445
[2026-01-14T07:53:45.787Z] [BOT] Timestamp: 2026-01-14T07:53:45.774Z
[2026-01-14T07:53:45.788Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 19
   Successful: 17
   Failed: 2
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 7
   Top channels:
     1. #🗽・new-york: 3 posts
     2. #💲・sales-jobs: 3 posts
     3. #🌉・san-francisco: 3 posts
[2026-01-14T07:53:45.788Z] [BOT] 4. #🤖・ai-jobs: 3 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-14T07:53:45.789Z] [BOT] [STATS] Channel stats saved
[2026-01-14T07:53:47.813Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2594) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Mobile Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Mobile Engineer
- [BOT ERROR] ❌ Error posting job Ion Exchange Development Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Ion Exchange Development Technician
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*