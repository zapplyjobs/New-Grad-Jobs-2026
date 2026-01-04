# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T07:50:23.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T07:49:32.014Z] ========================================
[2026-01-04T07:49:32.016Z] Discord Bot Execution Log
[2026-01-04T07:49:32.016Z] Environment: GitHub Actions
[2026-01-04T07:49:32.016Z] Node Version: v20.19.6
[2026-01-04T07:49:32.016Z] ========================================
[2026-01-04T07:49:32.016Z] Environment Variables Check:
[2026-01-04T07:49:32.016Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T07:49:32.016Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.016Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T07:49:32.017Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T07:49:32.017Z] 
Multi-Channel Configuration:
[2026-01-04T07:49:32.017Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T07:49:32.017Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T07:49:32.018Z] 
Data Files Check:
[2026-01-04T07:49:32.019Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142567 bytes)
[2026-01-04T07:49:32.022Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 469133 bytes)
[2026-01-04T07:49:32.022Z] 
========================================
[2026-01-04T07:49:32.022Z] Starting Enhanced Discord Bot...
[2026-01-04T07:49:32.022Z] ========================================
[2026-01-04T07:49:32.552Z] [BOT] ✅ Loaded V2 database: 931 jobs
[2026-01-04T07:49:33.384Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T07:49:33.385Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T07:49:33.385Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T07:49:33.386Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T07:49:33.452Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T07:49:33.539Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T07:49:33.542Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T07:49:33.542Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T07:49:33.542Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T07:49:33.543Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T07:49:33.543Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T07:49:33.548Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-04T07:49:33.548Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Data Center Infrastructure" @ anthropic
[2026-01-04T07:49:33.549Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-04T07:49:33.566Z] [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T07:49:33.634Z] [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Program Manager, Data Center Infrastructure @ anthropic',
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
[2026-01-04T07:49:33.634Z] [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-04T07:49:35.330Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Data Center Infrastructure @ anthropic in #🌉・san-francisco
[2026-01-04T07:49:35.331Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T07:49:36.831Z] [BOT] 💾 Marked as posted: Technical Program Manager, Data Center Infrastructure @ anthropic (instance #1)
[2026-01-04T07:49:36.831Z] [BOT] 💾 BEFORE ARCHIVING: 932 jobs in database
[2026-01-04T07:49:36.832Z] [BOT] ✅ No jobs to archive (all 932 jobs within 7-day window)
[2026-01-04T07:49:36.843Z] [BOT] 💾 Saved posted_jobs.json: 932 active jobs
[2026-01-04T07:49:36.843Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:36.843Z] [BOT] 📍 [ROUTING] "Application Security Engineering Manager" @ anthropic
[2026-01-04T07:49:36.843Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:49:36.923Z] [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Application Security Engineering Manager @ anthropic',
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
[2026-01-04T07:49:36.924Z] [BOT] ❌ Industry post failed: Application Security Engineering Manager
⚠️  Channel full error count: 2/5
[2026-01-04T07:49:38.567Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineering Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:49:40.067Z] [BOT] 💾 Marked as posted: Application Security Engineering Manager @ anthropic (instance #1)
[2026-01-04T07:49:40.067Z] [BOT] 💾 BEFORE ARCHIVING: 933 jobs in database
[2026-01-04T07:49:40.068Z] [BOT] ✅ No jobs to archive (all 933 jobs within 7-day window)
[2026-01-04T07:49:40.074Z] [BOT] 💾 Saved posted_jobs.json: 933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:40.075Z] [BOT] 📍 [ROUTING] "Engineering Manager, Cloud Security" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T07:49:40.075Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:49:40.435Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Security @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Cloud Security @ anthropic
[2026-01-04T07:49:42.091Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Security @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:49:43.593Z] [BOT] 💾 Marked as posted: Engineering Manager, Cloud Security @ anthropic (instance #1)
[2026-01-04T07:49:43.593Z] [BOT] 💾 BEFORE ARCHIVING: 934 jobs in database
[2026-01-04T07:49:43.594Z] [BOT] ✅ No jobs to archive (all 934 jobs within 7-day window)
[2026-01-04T07:49:43.601Z] [BOT] 💾 Saved posted_jobs.json: 934 active jobs
[2026-01-04T07:49:43.601Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:43.602Z] [BOT] 📍 [ROUTING] "Developer Productivity Engineer" @ supabase
[2026-01-04T07:49:43.602Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T07:49:43.761Z] [BOT] ✅ Created forum post: 🏢 Developer Productivity Engineer @ supabase in #💻・tech-jobs
[2026-01-04T07:49:43.761Z] [BOT] ✅ Industry: Developer Productivity Engineer @ supabase
[2026-01-04T07:49:45.263Z] [BOT] 💾 Marked as posted: Developer Productivity Engineer @ supabase (instance #1)
[2026-01-04T07:49:45.263Z] [BOT] 💾 BEFORE ARCHIVING: 935 jobs in database
[2026-01-04T07:49:45.264Z] [BOT] ✅ No jobs to archive (all 935 jobs within 7-day window)
[2026-01-04T07:49:45.271Z] [BOT] 💾 Saved posted_jobs.json: 935 active jobs
[2026-01-04T07:49:45.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:48.271Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T07:49:48.272Z] [BOT] 📍 [ROUTING] "Corporate Legal Specialist" @ anthropic
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T07:49:48.470Z] [BOT] ✅ Created forum post: 🏢 Corporate Legal Specialist @ anthropic in #💰・finance-jobs
  ✅ Industry: Corporate Legal Specialist @ anthropic
[2026-01-04T07:49:50.249Z] [BOT] ✅ Created forum post: 🏢 Corporate Legal Specialist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T07:49:51.750Z] [BOT] 💾 Marked as posted: Corporate Legal Specialist @ anthropic (instance #1)
[2026-01-04T07:49:51.751Z] [BOT] 💾 BEFORE ARCHIVING: 936 jobs in database
[2026-01-04T07:49:51.751Z] [BOT] ✅ No jobs to archive (all 936 jobs within 7-day window)
[2026-01-04T07:49:51.758Z] [BOT] 💾 Saved posted_jobs.json: 936 active jobs
[2026-01-04T07:49:51.759Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:54.759Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T07:49:54.760Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Specialized" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-04T07:49:54.760Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-04T07:49:54.915Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Specialized @ anthropic in #🤖・ai-jobs
[2026-01-04T07:49:54.915Z] [BOT] ✅ Industry: Technical Recruiter, Specialized @ anthropic
[2026-01-04T07:49:56.737Z] [BOT] ✅ Created forum post: 🏢 Technical Recruiter, Specialized @ anthropic in #🌉・san-francisco
[2026-01-04T07:49:56.737Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T07:49:58.239Z] [BOT] 💾 Marked as posted: Technical Recruiter, Specialized @ anthropic (instance #1)
[2026-01-04T07:49:58.239Z] [BOT] 💾 BEFORE ARCHIVING: 937 jobs in database
[2026-01-04T07:49:58.240Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-04T07:49:58.247Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-04T07:49:58.248Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:49:58.248Z] [BOT] 📍 [ROUTING] "Brand Designer" @ nominal
[2026-01-04T07:49:58.248Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T07:49:58.461Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ nominal in #🤖・ai-jobs
  ✅ Industry: Brand Designer @ nominal
[2026-01-04T07:50:00.101Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ nominal in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-04T07:50:01.602Z] [BOT] 💾 Marked as posted: Brand Designer @ nominal (instance #1)
[2026-01-04T07:50:01.602Z] [BOT] 💾 BEFORE ARCHIVING: 938 jobs in database
[2026-01-04T07:50:01.603Z] [BOT] ✅ No jobs to archive (all 938 jobs within 7-day window)
[2026-01-04T07:50:01.610Z] [BOT] 💾 Saved posted_jobs.json: 938 active jobs
[2026-01-04T07:50:01.610Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:50:04.610Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T07:50:04.611Z] [BOT] 📍 [ROUTING] "Software Engineer, Payments" @ discord
[2026-01-04T07:50:04.611Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T07:50:04.850Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Payments @ discord in #📈・JID_fb739488
[2026-01-04T07:50:04.851Z] [BOT] ✅ Industry: Software Engineer, Payments @ discord
[2026-01-04T07:50:06.444Z] [BOT ERROR] ❌ Error posting job Software Engineer, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Payments @ discord',
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
[2026-01-04T07:50:06.444Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:50:07.945Z] [BOT] 💾 Marked as posted: Software Engineer, Payments @ discord (instance #1)
[2026-01-04T07:50:07.946Z] [BOT] 💾 BEFORE ARCHIVING: 939 jobs in database
[2026-01-04T07:50:07.947Z] [BOT] ✅ No jobs to archive (all 939 jobs within 7-day window)
[2026-01-04T07:50:07.954Z] [BOT] 💾 Saved posted_jobs.json: 939 active jobs
[2026-01-04T07:50:07.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T07:50:10.955Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-04T07:50:10.955Z] [BOT] 📍 [ROUTING] "Director, Inside Sales" @ figma
[2026-01-04T07:50:10.955Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T07:50:11.077Z] [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T07:50:11.077Z] [BOT] ❌ Industry post failed: Director, Inside Sales
⚠️  Channel full error count: 1/5
[2026-01-04T07:50:12.684Z] [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-04T07:50:12.685Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:50:14.186Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Beneficial Deployments" @ anthropic
   Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T07:50:14.290Z] [BOT ERROR] ❌ Error posting job Customer Success Manager, Beneficial Deployments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Success Manager, Beneficial Deployments @ anthropic',
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
[2026-01-04T07:50:14.290Z] [BOT] ❌ Industry post failed: Customer Success Manager, Beneficial Deployments
⚠️  Channel full error count: 2/5
[2026-01-04T07:50:15.867Z] [BOT ERROR] ❌ Error posting job Customer Success Manager, Beneficial Deployments: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Success Manager, Beneficial Deployments @ anthropic',
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
[2026-01-04T07:50:15.867Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T07:50:20.368Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_5bcd5a20 (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_98983d06 (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_9b25512e (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_b454904b (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_dd2952fb (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_2b045dca (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_748bd25e (posted within 7 days)
[2026-01-04T07:50:20.369Z] [BOT] ⏭️  Skipping duplicate: JID_b04f1d2e (posted within 7 days)
[2026-01-04T07:50:20.401Z] [BOT] ✅ Loaded pending queue: 359 total (339 pending, 20 enriched, 0 posted)
[2026-01-04T07:50:20.434Z] [BOT] ✅ Saved pending queue: 359 total (339 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-04T07:50:20.434Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T07:50:20.482Z] [BOT] 📂 Loaded 1829 existing routing entries
[2026-01-04T07:50:20.530Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T07:50:20.530Z] [BOT] Total entries: 1839
   Timestamp: 2026-01-04T07:50:20.522Z
[2026-01-04T07:50:20.531Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T07:50:20.531Z] [BOT] Total attempts: 19
   Successful: 12
   Failed: 7
   Skipped: 0
[2026-01-04T07:50:20.531Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-04T07:50:20.531Z] [BOT] Total posts: 12
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-04T07:50:20.531Z] [BOT] 4. #💰・finance-jobs: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-04T07:50:20.532Z] [BOT] [STATS] Channel stats saved
[2026-01-04T07:50:22.547Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technical Program Manager, Data Center Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Program Manager, Data Center Infrastructure
- [BOT ERROR] ❌ Error posting job Application Security Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Application Security Engineering Manager
- [BOT ERROR] ❌ Error posting job Software Engineer, Payments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Inside Sales
- [BOT ERROR] ❌ Error posting job Director, Inside Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Success Manager, Beneficial Deployments: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Success Manager, Beneficial Deployments
- [BOT ERROR] ❌ Error posting job Customer Success Manager, Beneficial Deployments: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*