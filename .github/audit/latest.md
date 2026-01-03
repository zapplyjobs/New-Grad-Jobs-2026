# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T23:36:45.312Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T23:36:14.954Z] ========================================
[2026-01-03T23:36:14.955Z] Discord Bot Execution Log
[2026-01-03T23:36:14.955Z] Environment: GitHub Actions
[2026-01-03T23:36:14.955Z] Node Version: v20.19.6
[2026-01-03T23:36:14.955Z] ========================================
[2026-01-03T23:36:14.955Z] Environment Variables Check:
[2026-01-03T23:36:14.956Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T23:36:14.956Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T23:36:14.956Z] 
Multi-Channel Configuration:
[2026-01-03T23:36:14.956Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.956Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T23:36:14.957Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T23:36:14.957Z] 
Data Files Check:
[2026-01-03T23:36:14.958Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150193 bytes)
[2026-01-03T23:36:14.961Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 419709 bytes)
[2026-01-03T23:36:14.961Z] 
========================================
[2026-01-03T23:36:14.961Z] Starting Enhanced Discord Bot...
[2026-01-03T23:36:14.961Z] ========================================
[2026-01-03T23:36:15.408Z] [BOT] ✅ Loaded V2 database: 828 jobs
[2026-01-03T23:36:15.900Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T23:36:15.901Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T23:36:15.901Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T23:36:15.902Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T23:36:15.978Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T23:36:16.063Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T23:36:16.065Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T23:36:16.065Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T23:36:16.065Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T23:36:16.066Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T23:36:16.066Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Senior Engineering Manager, Activation @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Senior Engineering Manager, Risk Management @ brex: new york, new york, united states, san francisco, california, united states, seattle, washington, united states
   - Senior GTM Recruiter @ brex: san francisco, california, united states, new york, new york, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T23:36:16.070Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T23:36:16.071Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
[2026-01-03T23:36:16.071Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T23:36:16.075Z] [BOT ERROR] (node:2352) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T23:36:16.281Z] [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Engineering Manager, Activation @ brex',
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
[2026-01-03T23:36:16.281Z] [BOT] ❌ Industry post failed: Senior Engineering Manager, Activation
⚠️  Channel full error count: 1/5
[2026-01-03T23:36:18.186Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Activation @ brex in #🌧️・seattle
[2026-01-03T23:36:18.186Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-03T23:36:19.686Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-03T23:36:19.686Z] [BOT] 💾 BEFORE ARCHIVING: 829 jobs in database
[2026-01-03T23:36:19.687Z] [BOT] ✅ No jobs to archive (all 829 jobs within 7-day window)
[2026-01-03T23:36:19.695Z] [BOT] 💾 Saved posted_jobs.json: 829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:19.696Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-03T23:36:19.696Z] [BOT] 💾 BEFORE ARCHIVING: 830 jobs in database
[2026-01-03T23:36:19.696Z] [BOT] ✅ No jobs to archive (all 830 jobs within 7-day window)
[2026-01-03T23:36:19.702Z] [BOT] 💾 Saved posted_jobs.json: 830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:19.702Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-03T23:36:19.702Z] [BOT] 💾 BEFORE ARCHIVING: 831 jobs in database
[2026-01-03T23:36:19.703Z] [BOT] ✅ No jobs to archive (all 831 jobs within 7-day window)
[2026-01-03T23:36:19.708Z] [BOT] 💾 Saved posted_jobs.json: 831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:22.709Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T23:36:22.711Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Risk Management" @ brex
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T23:36:22.711Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T23:36:23.189Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Risk Management @ brex in #💻・tech-jobs
  ✅ Industry: Senior Engineering Manager, Risk Management @ brex
[2026-01-03T23:36:25.099Z] [BOT] ✅ Created forum post: 🏢 Senior Engineering Manager, Risk Management @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T23:36:26.600Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management @ brex (instance #1)
[2026-01-03T23:36:26.601Z] [BOT] 💾 BEFORE ARCHIVING: 832 jobs in database
[2026-01-03T23:36:26.601Z] [BOT] ✅ No jobs to archive (all 832 jobs within 7-day window)
[2026-01-03T23:36:26.609Z] [BOT] 💾 Saved posted_jobs.json: 832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:26.609Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
[2026-01-03T23:36:26.609Z] [BOT] 💾 BEFORE ARCHIVING: 833 jobs in database
[2026-01-03T23:36:26.610Z] [BOT] ✅ No jobs to archive (all 833 jobs within 7-day window)
[2026-01-03T23:36:26.617Z] [BOT] 💾 Saved posted_jobs.json: 833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:26.617Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
[2026-01-03T23:36:26.617Z] [BOT] 💾 BEFORE ARCHIVING: 834 jobs in database
[2026-01-03T23:36:26.617Z] [BOT] ✅ No jobs to archive (all 834 jobs within 7-day window)
[2026-01-03T23:36:26.623Z] [BOT] 💾 Saved posted_jobs.json: 834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:29.624Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T23:36:29.626Z] [BOT] 📍 [ROUTING] "Senior GTM Recruiter" @ brex
   Category: HR (matched: "hr")
[2026-01-03T23:36:29.626Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T23:36:29.911Z] [BOT] ✅ Created forum post: 🏢 Senior GTM Recruiter @ brex in #📁・JID_e938df7b
[2026-01-03T23:36:29.911Z] [BOT] ✅ Industry: Senior GTM Recruiter @ brex
[2026-01-03T23:36:31.552Z] [BOT ERROR] ❌ Error posting job Senior GTM Recruiter: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior GTM Recruiter @ brex',
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
[2026-01-03T23:36:31.552Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-03T23:36:33.052Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-03T23:36:33.053Z] [BOT] 💾 BEFORE ARCHIVING: 835 jobs in database
[2026-01-03T23:36:33.053Z] [BOT] ✅ No jobs to archive (all 835 jobs within 7-day window)
[2026-01-03T23:36:33.060Z] [BOT] 💾 Saved posted_jobs.json: 835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:33.060Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-03T23:36:33.060Z] [BOT] 💾 BEFORE ARCHIVING: 836 jobs in database
[2026-01-03T23:36:33.061Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2026-01-03T23:36:33.067Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:33.067Z] [BOT] 💾 Marked as posted: Senior GTM Recruiter @ brex (instance #1)
[2026-01-03T23:36:33.067Z] [BOT] 💾 BEFORE ARCHIVING: 837 jobs in database
[2026-01-03T23:36:33.068Z] [BOT] ✅ No jobs to archive (all 837 jobs within 7-day window)
[2026-01-03T23:36:33.074Z] [BOT] 💾 Saved posted_jobs.json: 837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T23:36:36.075Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T23:36:36.076Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
[2026-01-03T23:36:36.076Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T23:36:36.246Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  Senior Manager, Implementation @ brex',
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
[2026-01-03T23:36:36.246Z] [BOT] ❌ Industry post failed:  Senior Manager, Implementation
⚠️  Channel full error count: 1/5
[2026-01-03T23:36:37.883Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  Senior Manager, Implementation @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-03T23:36:37.883Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-03T23:36:42.384Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 1
[2026-01-03T23:36:42.384Z] [BOT] ⏭️  Skipping duplicate: JID_5c29754d (posted within 7 days)
⏭️  Skipping duplicate: JID_ce5b43d8 (posted within 7 days)
⏭️  Skipping duplicate: JID_7856d05a (posted within 7 days)
[2026-01-03T23:36:42.432Z] [BOT] ✅ Loaded pending queue: 461 total (441 pending, 20 enriched, 0 posted)
[2026-01-03T23:36:42.472Z] [BOT] ✅ Saved pending queue: 461 total (441 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T23:36:42.522Z] [BOT] 📂 Loaded 1741 existing routing entries
[2026-01-03T23:36:42.568Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 1745
   Timestamp: 2026-01-03T23:36:42.562Z
[2026-01-03T23:36:42.568Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 8
   Successful: 4
[2026-01-03T23:36:42.568Z] [BOT] Failed: 4
   Skipped: 0
[2026-01-03T23:36:42.569Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🌧️・seattle: 1 posts
[2026-01-03T23:36:42.569Z] [BOT] 2. #💻・tech-jobs: 1 posts
     3. #🗽・new-york: 1 posts
     4. #📁・JID_e938df7b: 1 posts
[2026-01-03T23:36:42.569Z] [BOT] [STATS] Channel stats saved
[2026-01-03T23:36:44.581Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2352) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Engineering Manager, Activation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Engineering Manager, Activation
- [BOT ERROR] ❌ Error posting job Senior GTM Recruiter: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  Senior Manager, Implementation
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*