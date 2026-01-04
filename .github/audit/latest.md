# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T13:51:37.780Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T13:50:51.222Z] ========================================
[2026-01-04T13:50:51.224Z] Discord Bot Execution Log
[2026-01-04T13:50:51.224Z] Environment: GitHub Actions
[2026-01-04T13:50:51.224Z] Node Version: v20.19.6
[2026-01-04T13:50:51.224Z] ========================================
[2026-01-04T13:50:51.224Z] Environment Variables Check:
[2026-01-04T13:50:51.224Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T13:50:51.224Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.224Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T13:50:51.224Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T13:50:51.224Z] 
Multi-Channel Configuration:
[2026-01-04T13:50:51.225Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T13:50:51.225Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T13:50:51.225Z] 
Data Files Check:
[2026-01-04T13:50:51.226Z] .github/data/new_jobs.json: ✅ Exists (10 items, 110332 bytes)
[2026-01-04T13:50:51.231Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 562484 bytes)
[2026-01-04T13:50:51.231Z] 
========================================
[2026-01-04T13:50:51.231Z] Starting Enhanced Discord Bot...
[2026-01-04T13:50:51.231Z] ========================================
[2026-01-04T13:50:51.765Z] [BOT] ✅ Loaded V2 database: 1119 jobs
[2026-01-04T13:50:52.356Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T13:50:52.356Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T13:50:52.356Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T13:50:52.357Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T13:50:52.426Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T13:50:52.514Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T13:50:52.517Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T13:50:52.517Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T13:50:52.517Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T13:50:52.518Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T13:50:52.518Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T13:50:52.523Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T13:50:52.524Z] [BOT] 📍 [ROUTING] "Senior Partner Marketing Manager" @ vercel
[2026-01-04T13:50:52.524Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T13:50:52.541Z] [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T13:50:52.669Z] [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T13:50:52.670Z] [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-04T13:50:54.403Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Marketing Manager @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:50:55.904Z] [BOT] 💾 Marked as posted: Senior Partner Marketing Manager @ vercel (instance #1)
[2026-01-04T13:50:55.904Z] [BOT] 💾 BEFORE ARCHIVING: 1120 jobs in database
[2026-01-04T13:50:55.905Z] [BOT] ✅ No jobs to archive (all 1120 jobs within 7-day window)
[2026-01-04T13:50:55.915Z] [BOT] 💾 Saved posted_jobs.json: 1120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:50:58.916Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-04T13:50:58.917Z] [BOT] 📍 [ROUTING] "Software Engineer, Financial Infrastructure" @ vercel
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:50:59.166Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Financial Infrastructure @ vercel in #💻・tech-jobs
[2026-01-04T13:50:59.166Z] [BOT] ✅ Industry: Software Engineer, Financial Infrastructure @ vercel
[2026-01-04T13:51:01.043Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Financial Infrastructure @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:02.543Z] [BOT] 💾 Marked as posted: Software Engineer, Financial Infrastructure @ vercel (instance #1)
[2026-01-04T13:51:02.544Z] [BOT] 💾 BEFORE ARCHIVING: 1121 jobs in database
[2026-01-04T13:51:02.545Z] [BOT] ✅ No jobs to archive (all 1121 jobs within 7-day window)
[2026-01-04T13:51:02.551Z] [BOT] 💾 Saved posted_jobs.json: 1121 active jobs
[2026-01-04T13:51:02.552Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:02.552Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ vercel
[2026-01-04T13:51:02.552Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:51:02.748Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ vercel in #💻・tech-jobs
  ✅ Industry: Software Engineer, Growth @ vercel
[2026-01-04T13:51:04.459Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:05.960Z] [BOT] 💾 Marked as posted: Software Engineer, Growth @ vercel (instance #1)
[2026-01-04T13:51:05.961Z] [BOT] 💾 BEFORE ARCHIVING: 1122 jobs in database
[2026-01-04T13:51:05.962Z] [BOT] ✅ No jobs to archive (all 1122 jobs within 7-day window)
[2026-01-04T13:51:05.968Z] [BOT] 💾 Saved posted_jobs.json: 1122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:05.968Z] [BOT] 📍 [ROUTING] "Software Engineer, Support Platform" @ vercel
[2026-01-04T13:51:05.969Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:51:06.278Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Support Platform @ vercel in #💻・tech-jobs
[2026-01-04T13:51:06.278Z] [BOT] ✅ Industry: Software Engineer, Support Platform @ vercel
[2026-01-04T13:51:08.294Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Support Platform @ vercel in #🌉・san-francisco
[2026-01-04T13:51:08.294Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:09.794Z] [BOT] 💾 Marked as posted: Software Engineer, Support Platform @ vercel (instance #1)
[2026-01-04T13:51:09.794Z] [BOT] 💾 BEFORE ARCHIVING: 1123 jobs in database
[2026-01-04T13:51:09.795Z] [BOT] ✅ No jobs to archive (all 1123 jobs within 7-day window)
[2026-01-04T13:51:09.804Z] [BOT] 💾 Saved posted_jobs.json: 1123 active jobs
[2026-01-04T13:51:09.804Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:09.805Z] [BOT] 📍 [ROUTING] "Software Engineer - Trust & Safety" @ vercel
[2026-01-04T13:51:09.805Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:51:10.295Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Trust & Safety @ vercel in #💻・tech-jobs
[2026-01-04T13:51:10.295Z] [BOT] ✅ Industry: Software Engineer - Trust & Safety @ vercel
[2026-01-04T13:51:12.285Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Trust & Safety @ vercel in #🌉・san-francisco
[2026-01-04T13:51:12.286Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:13.787Z] [BOT] 💾 Marked as posted: Software Engineer - Trust & Safety @ vercel (instance #1)
[2026-01-04T13:51:13.787Z] [BOT] 💾 BEFORE ARCHIVING: 1124 jobs in database
[2026-01-04T13:51:13.789Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-04T13:51:13.797Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-04T13:51:13.797Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:13.797Z] [BOT] 📍 [ROUTING] "Technical Support Engineer, Vercel Marketplaces " @ vercel
[2026-01-04T13:51:13.798Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:51:14.015Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer, Vercel Marketplaces  @ vercel in #💻・tech-jobs
  ✅ Industry: Technical Support Engineer, Vercel Marketplaces  @ vercel
[2026-01-04T13:51:15.866Z] [BOT] ✅ Created forum post: 🏢 Technical Support Engineer, Vercel Marketplaces  @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:17.368Z] [BOT] 💾 Marked as posted: Technical Support Engineer, Vercel Marketplaces  @ vercel (instance #1)
[2026-01-04T13:51:17.368Z] [BOT] 💾 BEFORE ARCHIVING: 1125 jobs in database
[2026-01-04T13:51:17.369Z] [BOT] ✅ No jobs to archive (all 1125 jobs within 7-day window)
[2026-01-04T13:51:17.377Z] [BOT] 💾 Saved posted_jobs.json: 1125 active jobs
[2026-01-04T13:51:17.377Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:17.377Z] [BOT] 📍 [ROUTING] "Senior Motion Designer" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T13:51:17.584Z] [BOT] ✅ Created forum post: 🏢 Senior Motion Designer @ duolingo in #💻・tech-jobs
[2026-01-04T13:51:17.584Z] [BOT] ✅ Industry: Senior Motion Designer @ duolingo
[2026-01-04T13:51:19.086Z] [BOT] 💾 Marked as posted: Senior Motion Designer @ duolingo (instance #1)
[2026-01-04T13:51:19.086Z] [BOT] 💾 BEFORE ARCHIVING: 1126 jobs in database
[2026-01-04T13:51:19.087Z] [BOT] ✅ No jobs to archive (all 1126 jobs within 7-day window)
[2026-01-04T13:51:19.095Z] [BOT] 💾 Saved posted_jobs.json: 1126 active jobs
[2026-01-04T13:51:19.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:22.096Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T13:51:22.096Z] [BOT] 📍 [ROUTING] "Sr. Director of SOX and Internal Controls" @ vercel
[2026-01-04T13:51:22.096Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T13:51:22.386Z] [BOT] ✅ Created forum post: 🏢 Sr. Director of SOX and Internal Controls @ vercel in #💲・sales-jobs
[2026-01-04T13:51:22.386Z] [BOT] ✅ Industry: Sr. Director of SOX and Internal Controls @ vercel
[2026-01-04T13:51:24.061Z] [BOT] ✅ Created forum post: 🏢 Sr. Director of SOX and Internal Controls @ vercel in #🌉・san-francisco
[2026-01-04T13:51:24.061Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T13:51:25.563Z] [BOT] 💾 Marked as posted: Sr. Director of SOX and Internal Controls @ vercel (instance #1)
[2026-01-04T13:51:25.563Z] [BOT] 💾 BEFORE ARCHIVING: 1127 jobs in database
[2026-01-04T13:51:25.564Z] [BOT] ✅ No jobs to archive (all 1127 jobs within 7-day window)
[2026-01-04T13:51:25.572Z] [BOT] 💾 Saved posted_jobs.json: 1127 active jobs
[2026-01-04T13:51:25.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T13:51:28.573Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T13:51:28.573Z] [BOT] 📍 [ROUTING] "Senior Director, Integrated Marketing" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
[2026-01-04T13:51:28.573Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T13:51:28.753Z] [BOT ERROR] ❌ Error posting job Senior Director, Integrated Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Director, Integrated Marketing @ gohighlevel',
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
[2026-01-04T13:51:28.753Z] [BOT] ❌ Industry post failed: Senior Director, Integrated Marketing
⚠️  Channel full error count: 1/5
[2026-01-04T13:51:30.256Z] [BOT] 📍 [ROUTING] "Manager, Community Programs" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T13:51:30.396Z] [BOT ERROR] ❌ Error posting job Manager, Community Programs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, Community Programs @ gohighlevel',
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
[2026-01-04T13:51:30.396Z] [BOT] ❌ Industry post failed: Manager, Community Programs
⚠️  Channel full error count: 2/5
[2026-01-04T13:51:34.898Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_9e661190 (posted within 7 days)
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_40fb2d1a (posted within 7 days)
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_7f179bae (posted within 7 days)
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_42f20984 (posted within 7 days)
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_50e3b0eb (posted within 7 days)
⏭️  Skipping duplicate: JID_3a1c74f3 (posted within 7 days)
[2026-01-04T13:51:34.899Z] [BOT] ⏭️  Skipping duplicate: JID_853a3ab6 (posted within 7 days)
[2026-01-04T13:51:34.900Z] [BOT] ⏭️  Skipping duplicate: JID_6415563a (posted within 7 days)
[2026-01-04T13:51:34.907Z] [BOT] ✅ Loaded pending queue: 171 total (151 pending, 20 enriched, 0 posted)
[2026-01-04T13:51:34.917Z] [BOT] ✅ Saved pending queue: 171 total (151 pending, 12 enriched, 8 posted)
[2026-01-04T13:51:34.917Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T13:51:34.971Z] [BOT] 📂 Loaded 2029 existing routing entries
[2026-01-04T13:51:35.027Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T13:51:35.028Z] [BOT] Total entries: 2039
   Timestamp: 2026-01-04T13:51:35.017Z
[2026-01-04T13:51:35.028Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T13:51:35.028Z] [BOT] Total attempts: 17
   Successful: 14
   Failed: 3
   Skipped: 0
[2026-01-04T13:51:35.029Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
[2026-01-04T13:51:35.029Z] [BOT] 1. #🌉・san-francisco: 7 posts
     2. #💻・tech-jobs: 6 posts
     3. #💲・sales-jobs: 1 posts
[2026-01-04T13:51:35.029Z] [BOT] [STATS] Channel stats saved
[2026-01-04T13:51:37.042Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Partner Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Director, Integrated Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Director, Integrated Marketing
- [BOT ERROR] ❌ Error posting job Manager, Community Programs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager, Community Programs
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*