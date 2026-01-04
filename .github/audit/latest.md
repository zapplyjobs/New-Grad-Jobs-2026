# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T14:05:52.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T14:05:03.895Z] ========================================
[2026-01-04T14:05:03.897Z] Discord Bot Execution Log
[2026-01-04T14:05:03.897Z] Environment: GitHub Actions
[2026-01-04T14:05:03.897Z] Node Version: v20.19.6
[2026-01-04T14:05:03.897Z] ========================================
[2026-01-04T14:05:03.897Z] Environment Variables Check:
[2026-01-04T14:05:03.897Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T14:05:03.897Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.897Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T14:05:03.897Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T14:05:03.897Z] 
Multi-Channel Configuration:
[2026-01-04T14:05:03.898Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T14:05:03.898Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T14:05:03.898Z] 
Data Files Check:
[2026-01-04T14:05:03.899Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118644 bytes)
[2026-01-04T14:05:03.903Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 566374 bytes)
[2026-01-04T14:05:03.903Z] 
========================================
[2026-01-04T14:05:03.903Z] Starting Enhanced Discord Bot...
[2026-01-04T14:05:03.903Z] ========================================
[2026-01-04T14:05:04.426Z] [BOT] ✅ Loaded V2 database: 1127 jobs
[2026-01-04T14:05:05.015Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T14:05:05.016Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T14:05:05.016Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T14:05:05.017Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T14:05:05.085Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T14:05:05.181Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T14:05:05.184Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T14:05:05.184Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T14:05:05.184Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T14:05:05.185Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T14:05:05.185Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T14:05:05.191Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T14:05:05.191Z] [BOT] 📍 [ROUTING] "Senior Director, Integrated Marketing" @ gohighlevel
[2026-01-04T14:05:05.191Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:05:05.209Z] [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T14:05:05.386Z] [BOT ERROR] ❌ Error posting job Senior Director, Integrated Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T14:05:05.387Z] [BOT] ❌ Industry post failed: Senior Director, Integrated Marketing
⚠️  Channel full error count: 1/5
[2026-01-04T14:05:06.889Z] [BOT] 📍 [ROUTING] "Manager, Community Programs" @ gohighlevel
[2026-01-04T14:05:06.889Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T14:05:07.025Z] [BOT ERROR] ❌ Error posting job Manager, Community Programs: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T14:05:07.025Z] [BOT] ❌ Industry post failed: Manager, Community Programs
⚠️  Channel full error count: 2/5
[2026-01-04T14:05:08.527Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ nominal
[2026-01-04T14:05:08.527Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T14:05:08.665Z] [BOT ERROR] ❌ Error posting job Software Engineer - Full-Stack: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Full-Stack @ nominal',
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
[2026-01-04T14:05:08.665Z] [BOT] ❌ Industry post failed: Software Engineer - Full-Stack
⚠️  Channel full error count: 3/5
[2026-01-04T14:05:10.590Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ nominal in #🗽・new-york
[2026-01-04T14:05:10.591Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:05:12.091Z] [BOT] 💾 Marked as posted: Software Engineer - Full-Stack @ nominal (instance #1)
[2026-01-04T14:05:12.092Z] [BOT] 💾 BEFORE ARCHIVING: 1128 jobs in database
[2026-01-04T14:05:12.092Z] [BOT] ✅ No jobs to archive (all 1128 jobs within 7-day window)
[2026-01-04T14:05:12.103Z] [BOT] 💾 Saved posted_jobs.json: 1128 active jobs
[2026-01-04T14:05:12.103Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:12.104Z] [BOT] 📍 [ROUTING] "Salesforce Engineer" @ spotify
[2026-01-04T14:05:12.104Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T14:05:12.325Z] [BOT] ✅ Created forum post: 🏢 Salesforce Engineer @ spotify in #🤖・ai-jobs
[2026-01-04T14:05:12.325Z] [BOT] ✅ Industry: Salesforce Engineer @ spotify
[2026-01-04T14:05:14.151Z] [BOT] ✅ Created forum post: 🏢 Salesforce Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T14:05:15.652Z] [BOT] 💾 Marked as posted: Salesforce Engineer @ spotify (instance #1)
[2026-01-04T14:05:15.652Z] [BOT] 💾 BEFORE ARCHIVING: 1129 jobs in database
[2026-01-04T14:05:15.654Z] [BOT] ✅ No jobs to archive (all 1129 jobs within 7-day window)
[2026-01-04T14:05:15.662Z] [BOT] 💾 Saved posted_jobs.json: 1129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:18.662Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-04T14:05:18.663Z] [BOT] 📍 [ROUTING] "Senior Motion Designer" @ duolingo
[2026-01-04T14:05:18.663Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:05:18.890Z] [BOT] ✅ Created forum post: 🏢 Senior Motion Designer @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior Motion Designer @ duolingo
[2026-01-04T14:05:20.643Z] [BOT] ✅ Created forum post: 🏢 Senior Motion Designer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T14:05:22.143Z] [BOT] 💾 Marked as posted: Senior Motion Designer @ duolingo (instance #1)
[2026-01-04T14:05:22.143Z] [BOT] 💾 BEFORE ARCHIVING: 1130 jobs in database
[2026-01-04T14:05:22.144Z] [BOT] ✅ No jobs to archive (all 1130 jobs within 7-day window)
[2026-01-04T14:05:22.153Z] [BOT] 💾 Saved posted_jobs.json: 1130 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:22.153Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ duolingo
   Category: TECH (default)
[2026-01-04T14:05:22.154Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:05:22.427Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ duolingo in #💻・tech-jobs
  ✅ Industry: Staff Product Designer @ duolingo
[2026-01-04T14:05:24.145Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T14:05:25.646Z] [BOT] 💾 Marked as posted: Staff Product Designer @ duolingo (instance #1)
[2026-01-04T14:05:25.646Z] [BOT] 💾 BEFORE ARCHIVING: 1131 jobs in database
[2026-01-04T14:05:25.647Z] [BOT] ✅ No jobs to archive (all 1131 jobs within 7-day window)
[2026-01-04T14:05:25.656Z] [BOT] 💾 Saved posted_jobs.json: 1131 active jobs
[2026-01-04T14:05:25.656Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:25.656Z] [BOT] 📍 [ROUTING] "Staff Android Engineer, Client Architecture" @ duolingo
[2026-01-04T14:05:25.656Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:05:25.944Z] [BOT] ✅ Created forum post: 🏢 Staff Android Engineer, Client Architecture @ duolingo in #💻・tech-jobs
[2026-01-04T14:05:25.945Z] [BOT] ✅ Industry: Staff Android Engineer, Client Architecture @ duolingo
[2026-01-04T14:05:27.657Z] [BOT] ✅ Created forum post: 🏢 Staff Android Engineer, Client Architecture @ duolingo in #🗽・new-york
[2026-01-04T14:05:27.657Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:05:29.158Z] [BOT] 💾 Marked as posted: Staff Android Engineer, Client Architecture @ duolingo (instance #1)
[2026-01-04T14:05:29.159Z] [BOT] 💾 BEFORE ARCHIVING: 1132 jobs in database
[2026-01-04T14:05:29.159Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-04T14:05:29.167Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-04T14:05:29.167Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:29.167Z] [BOT] 📍 [ROUTING] "Senior Android Engineer" @ duolingo
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:05:29.805Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #💻・tech-jobs
[2026-01-04T14:05:29.805Z] [BOT] ✅ Industry: Senior Android Engineer @ duolingo
[2026-01-04T14:05:31.623Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #🗽・new-york
[2026-01-04T14:05:31.623Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:05:33.123Z] [BOT] 💾 Marked as posted: Senior Android Engineer @ duolingo (instance #1)
[2026-01-04T14:05:33.123Z] [BOT] 💾 BEFORE ARCHIVING: 1133 jobs in database
[2026-01-04T14:05:33.124Z] [BOT] ✅ No jobs to archive (all 1133 jobs within 7-day window)
[2026-01-04T14:05:33.131Z] [BOT] 💾 Saved posted_jobs.json: 1133 active jobs
[2026-01-04T14:05:33.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:36.132Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T14:05:36.132Z] [BOT] 📍 [ROUTING] "Director, Account Management" @ discord
   Category: SALES (matched: "sales")
[2026-01-04T14:05:36.132Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T14:05:36.632Z] [BOT] ✅ Created forum post: 🏢 Director, Account Management @ discord in #💲・sales-jobs
[2026-01-04T14:05:36.632Z] [BOT] ✅ Industry: Director, Account Management @ discord
[2026-01-04T14:05:38.483Z] [BOT] ✅ Created forum post: 🏢 Director, Account Management @ discord in #🌉・san-francisco
[2026-01-04T14:05:38.484Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T14:05:39.984Z] [BOT] 💾 Marked as posted: Director, Account Management @ discord (instance #1)
[2026-01-04T14:05:39.984Z] [BOT] 💾 BEFORE ARCHIVING: 1134 jobs in database
[2026-01-04T14:05:39.985Z] [BOT] ✅ No jobs to archive (all 1134 jobs within 7-day window)
[2026-01-04T14:05:39.993Z] [BOT] 💾 Saved posted_jobs.json: 1134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:42.994Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T14:05:42.994Z] [BOT] 📍 [ROUTING] "Leave of Absence Program Specialist" @ discord
[2026-01-04T14:05:42.995Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T14:05:43.349Z] [BOT] ✅ Created forum post: 🏢 Leave of Absence Program Specialist @ discord in #💰・finance-jobs
[2026-01-04T14:05:43.349Z] [BOT] ✅ Industry: Leave of Absence Program Specialist @ discord
[2026-01-04T14:05:45.137Z] [BOT] ✅ Created forum post: 🏢 Leave of Absence Program Specialist @ discord in #🌉・san-francisco
[2026-01-04T14:05:45.137Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T14:05:46.637Z] [BOT] 💾 Marked as posted: Leave of Absence Program Specialist @ discord (instance #1)
[2026-01-04T14:05:46.637Z] [BOT] 💾 BEFORE ARCHIVING: 1135 jobs in database
[2026-01-04T14:05:46.638Z] [BOT] ✅ No jobs to archive (all 1135 jobs within 7-day window)
[2026-01-04T14:05:46.647Z] [BOT] 💾 Saved posted_jobs.json: 1135 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:05:49.647Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-04T14:05:49.647Z] [BOT] ⏭️  Skipping duplicate: JID_e91ccca9 (posted within 7 days)
[2026-01-04T14:05:49.647Z] [BOT] ⏭️  Skipping duplicate: JID_d4ffa3ed (posted within 7 days)
⏭️  Skipping duplicate: JID_80859da3 (posted within 7 days)
[2026-01-04T14:05:49.648Z] [BOT] ⏭️  Skipping duplicate: JID_8e6f3c72 (posted within 7 days)
⏭️  Skipping duplicate: JID_640730e3 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a2871be (posted within 7 days)
[2026-01-04T14:05:49.648Z] [BOT] ⏭️  Skipping duplicate: JID_eeb159d2 (posted within 7 days)
[2026-01-04T14:05:49.648Z] [BOT] ⏭️  Skipping duplicate: JID_a01fd1b4 (posted within 7 days)
[2026-01-04T14:05:49.656Z] [BOT] ✅ Loaded pending queue: 163 total (143 pending, 20 enriched, 0 posted)
[2026-01-04T14:05:49.665Z] [BOT] ✅ Saved pending queue: 163 total (143 pending, 12 enriched, 8 posted)
[2026-01-04T14:05:49.665Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T14:05:49.721Z] [BOT] 📂 Loaded 2039 existing routing entries
[2026-01-04T14:05:49.772Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T14:05:49.772Z] [BOT] Total entries: 2049
   Timestamp: 2026-01-04T14:05:49.761Z
[2026-01-04T14:05:49.772Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T14:05:49.773Z] [BOT] Total attempts: 18
   Successful: 15
   Failed: 3
   Skipped: 0
[2026-01-04T14:05:49.773Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T14:05:49.773Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #🗽・new-york: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤖・ai-jobs: 1 posts
     5. #💲・sales-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-04T14:05:51.787Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Director, Integrated Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Director, Integrated Marketing
- [BOT ERROR] ❌ Error posting job Manager, Community Programs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager, Community Programs
- [BOT ERROR] ❌ Error posting job Software Engineer - Full-Stack: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Full-Stack
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*