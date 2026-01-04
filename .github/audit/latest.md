# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T06:26:20.531Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T06:25:28.306Z] ========================================
[2026-01-04T06:25:28.308Z] Discord Bot Execution Log
[2026-01-04T06:25:28.308Z] Environment: GitHub Actions
[2026-01-04T06:25:28.308Z] Node Version: v20.19.6
[2026-01-04T06:25:28.308Z] ========================================
[2026-01-04T06:25:28.308Z] Environment Variables Check:
[2026-01-04T06:25:28.308Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T06:25:28.309Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T06:25:28.309Z] 
Multi-Channel Configuration:
[2026-01-04T06:25:28.309Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.309Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.310Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T06:25:28.310Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T06:25:28.310Z] 
Data Files Check:
[2026-01-04T06:25:28.311Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159118 bytes)
[2026-01-04T06:25:28.314Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 460158 bytes)
[2026-01-04T06:25:28.314Z] 
========================================
[2026-01-04T06:25:28.314Z] Starting Enhanced Discord Bot...
[2026-01-04T06:25:28.314Z] ========================================
[2026-01-04T06:25:28.845Z] [BOT] ✅ Loaded V2 database: 913 jobs
[2026-01-04T06:25:29.540Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T06:25:29.541Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T06:25:29.541Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T06:25:29.542Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T06:25:29.612Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T06:25:29.710Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T06:25:29.713Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T06:25:29.713Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T06:25:29.713Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T06:25:29.714Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T06:25:29.714Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T06:25:29.718Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T06:25:29.719Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Applied AI" @ anthropic
[2026-01-04T06:25:29.719Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T06:25:29.737Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T06:25:29.872Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T06:25:29.872Z] [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T06:25:31.529Z] [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager of Solutions Architecture, Applied AI @ anthropic',
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
[2026-01-04T06:25:31.529Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:25:33.030Z] [BOT] 📍 [ROUTING] "Finance Systems Integration Engineer" @ anthropic
[2026-01-04T06:25:33.031Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T06:25:33.171Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems Integration Engineer @ anthropic',
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
[2026-01-04T06:25:33.171Z] [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
⚠️  Channel full error count: 2/5
[2026-01-04T06:25:34.810Z] [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Systems Integration Engineer @ anthropic',
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
[2026-01-04T06:25:34.810Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:25:36.311Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T06:25:36.506Z] [BOT ERROR] ❌ Error posting job Internship Program Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Internship Program Coordinator @ gohighlevel',
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
[2026-01-04T06:25:36.506Z] [BOT] ❌ Industry post failed: Internship Program Coordinator
⚠️  Channel full error count: 3/5
[2026-01-04T06:25:41.009Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T06:25:41.009Z] [BOT] 📍 [ROUTING] "Senior AI Engineering Manager" @ duolingo
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T06:25:41.239Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineering Manager @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior AI Engineering Manager @ duolingo
[2026-01-04T06:25:42.973Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineering Manager @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T06:25:44.475Z] [BOT] 💾 Marked as posted: Senior AI Engineering Manager @ duolingo (instance #1)
[2026-01-04T06:25:44.475Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2026-01-04T06:25:44.476Z] [BOT] ✅ No jobs to archive (all 914 jobs within 7-day window)
[2026-01-04T06:25:44.486Z] [BOT] 💾 Saved posted_jobs.json: 914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:25:44.486Z] [BOT] 📍 [ROUTING] "Manager, Software Engineering - Billing" @ figma
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T06:25:44.711Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Billing @ figma in #💻・tech-jobs
[2026-01-04T06:25:44.711Z] [BOT] ✅ Industry: Manager, Software Engineering - Billing @ figma
[2026-01-04T06:25:46.441Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Billing @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T06:25:47.942Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Billing @ figma (instance #1)
[2026-01-04T06:25:47.943Z] [BOT] 💾 BEFORE ARCHIVING: 915 jobs in database
[2026-01-04T06:25:47.944Z] [BOT] ✅ No jobs to archive (all 915 jobs within 7-day window)
[2026-01-04T06:25:47.952Z] [BOT] 💾 Saved posted_jobs.json: 915 active jobs
[2026-01-04T06:25:47.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:25:50.953Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-04T06:25:50.953Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
[2026-01-04T06:25:50.954Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:25:52.896Z] [BOT] ✅ Created forum post: 🏢 Inside Sales Representative - Early Career (2026) @ figma in #💲・sales-jobs
  ✅ Industry: Inside Sales Representative - Early Career (2026) @ figma
[2026-01-04T06:25:54.995Z] [BOT] ✅ Created forum post: 🏢 Inside Sales Representative - Early Career (2026) @ figma in #🗽・new-york
[2026-01-04T06:25:54.996Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T06:25:56.495Z] [BOT] 💾 Marked as posted: Inside Sales Representative - Early Career (2026) @ figma (instance #1)
[2026-01-04T06:25:56.495Z] [BOT] 💾 BEFORE ARCHIVING: 916 jobs in database
[2026-01-04T06:25:56.496Z] [BOT] ✅ No jobs to archive (all 916 jobs within 7-day window)
[2026-01-04T06:25:56.505Z] [BOT] 💾 Saved posted_jobs.json: 916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:25:56.506Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:25:57.010Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ anthropic in #💲・sales-jobs
  ✅ Industry: Business Development Representative @ anthropic
[2026-01-04T06:25:58.773Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T06:26:00.274Z] [BOT] 💾 Marked as posted: Business Development Representative @ anthropic (instance #1)
[2026-01-04T06:26:00.275Z] [BOT] 💾 BEFORE ARCHIVING: 917 jobs in database
[2026-01-04T06:26:00.275Z] [BOT] ✅ No jobs to archive (all 917 jobs within 7-day window)
[2026-01-04T06:26:00.283Z] [BOT] 💾 Saved posted_jobs.json: 917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:26:00.284Z] [BOT] 📍 [ROUTING] "Community Experiences Manager" @ figma
[2026-01-04T06:26:00.284Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:26:00.647Z] [BOT] ✅ Created forum post: 🏢 Community Experiences Manager @ figma in #💲・sales-jobs
  ✅ Industry: Community Experiences Manager @ figma
[2026-01-04T06:26:02.501Z] [BOT] ✅ Created forum post: 🏢 Community Experiences Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T06:26:04.002Z] [BOT] 💾 Marked as posted: Community Experiences Manager @ figma (instance #1)
[2026-01-04T06:26:04.003Z] [BOT] 💾 BEFORE ARCHIVING: 918 jobs in database
[2026-01-04T06:26:04.003Z] [BOT] ✅ No jobs to archive (all 918 jobs within 7-day window)
[2026-01-04T06:26:04.011Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
[2026-01-04T06:26:04.011Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:26:04.011Z] [BOT] 📍 [ROUTING] "Director, Global Payments Strategy and Operations" @ discord
[2026-01-04T06:26:04.011Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T06:26:04.230Z] [BOT] ✅ Created forum post: 🏢 Director, Global Payments Strategy and Operations @ discord in #💲・sales-jobs
  ✅ Industry: Director, Global Payments Strategy and Operations @ discord
[2026-01-04T06:26:05.980Z] [BOT] ✅ Created forum post: 🏢 Director, Global Payments Strategy and Operations @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T06:26:07.482Z] [BOT] 💾 Marked as posted: Director, Global Payments Strategy and Operations @ discord (instance #1)
[2026-01-04T06:26:07.482Z] [BOT] 💾 BEFORE ARCHIVING: 919 jobs in database
[2026-01-04T06:26:07.482Z] [BOT] ✅ No jobs to archive (all 919 jobs within 7-day window)
[2026-01-04T06:26:07.490Z] [BOT] 💾 Saved posted_jobs.json: 919 active jobs
[2026-01-04T06:26:07.490Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T06:26:10.491Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T06:26:10.491Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager" @ anthropic
   Category: MARKETING (matched: "marketing")
[2026-01-04T06:26:10.491Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T06:26:10.950Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Manager @ anthropic in #📣・marketing-jobs
  ✅ Industry: Partner Marketing Manager @ anthropic
[2026-01-04T06:26:12.601Z] [BOT ERROR] ❌ Error posting job Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Partner Marketing Manager @ anthropic',
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
[2026-01-04T06:26:12.601Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T06:26:14.101Z] [BOT] 💾 Marked as posted: Partner Marketing Manager @ anthropic (instance #1)
[2026-01-04T06:26:14.102Z] [BOT] 💾 BEFORE ARCHIVING: 920 jobs in database
[2026-01-04T06:26:14.102Z] [BOT] ✅ No jobs to archive (all 920 jobs within 7-day window)
[2026-01-04T06:26:14.110Z] [BOT] 💾 Saved posted_jobs.json: 920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T06:26:17.111Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-04T06:26:17.112Z] [BOT] ⏭️  Skipping duplicate: JID_b2e8be7b (posted within 7 days)
[2026-01-04T06:26:17.112Z] [BOT] ⏭️  Skipping duplicate: JID_cb0e6e14 (posted within 7 days)
[2026-01-04T06:26:17.112Z] [BOT] ⏭️  Skipping duplicate: JID_4bca4deb (posted within 7 days)
⏭️  Skipping duplicate: JID_b623225e (posted within 7 days)
[2026-01-04T06:26:17.112Z] [BOT] ⏭️  Skipping duplicate: JID_c4f9a5a5 (posted within 7 days)
⏭️  Skipping duplicate: JID_8daed847 (posted within 7 days)
[2026-01-04T06:26:17.112Z] [BOT] ⏭️  Skipping duplicate: JID_663bfed6 (posted within 7 days)
[2026-01-04T06:26:17.147Z] [BOT] ✅ Loaded pending queue: 376 total (356 pending, 20 enriched, 0 posted)
[2026-01-04T06:26:17.182Z] [BOT] ✅ Saved pending queue: 376 total (356 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-04T06:26:17.182Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T06:26:17.233Z] [BOT] 📂 Loaded 1819 existing routing entries
[2026-01-04T06:26:17.284Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T06:26:17.284Z] [BOT] Total entries: 1829
   Timestamp: 2026-01-04T06:26:17.276Z
[2026-01-04T06:26:17.284Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 19
   Successful: 13
   Failed: 6
   Skipped: 0
[2026-01-04T06:26:17.285Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T06:26:17.285Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 4 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #🗽・new-york: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-04T06:26:17.285Z] [BOT] [STATS] Channel stats saved
[2026-01-04T06:26:19.301Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager of Solutions Architecture, Applied AI
- [BOT ERROR] ❌ Error posting job Manager of Solutions Architecture, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Systems Integration Engineer
- [BOT ERROR] ❌ Error posting job Finance Systems Integration Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Internship Program Coordinator: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Internship Program Coordinator
- [BOT ERROR] ❌ Error posting job Partner Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*