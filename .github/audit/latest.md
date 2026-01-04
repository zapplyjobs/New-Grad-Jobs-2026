# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T10:39:50.995Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T10:39:03.823Z] ========================================
[2026-01-04T10:39:03.825Z] Discord Bot Execution Log
[2026-01-04T10:39:03.825Z] Environment: GitHub Actions
[2026-01-04T10:39:03.825Z] Node Version: v20.19.6
[2026-01-04T10:39:03.825Z] ========================================
[2026-01-04T10:39:03.825Z] Environment Variables Check:
[2026-01-04T10:39:03.825Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T10:39:03.825Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.825Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T10:39:03.825Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T10:39:03.826Z] 
Multi-Channel Configuration:
[2026-01-04T10:39:03.826Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T10:39:03.826Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T10:39:03.826Z] 
Data Files Check:
[2026-01-04T10:39:03.828Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156239 bytes)
[2026-01-04T10:39:03.831Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 514296 bytes)
[2026-01-04T10:39:03.831Z] 
========================================
[2026-01-04T10:39:03.831Z] Starting Enhanced Discord Bot...
[2026-01-04T10:39:03.831Z] ========================================
[2026-01-04T10:39:04.367Z] [BOT] ✅ Loaded V2 database: 1021 jobs
[2026-01-04T10:39:05.197Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T10:39:05.197Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T10:39:05.198Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T10:39:05.198Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T10:39:05.268Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T10:39:05.360Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T10:39:05.363Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T10:39:05.363Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T10:39:05.363Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T10:39:05.364Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T10:39:05.364Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T10:39:05.366Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-04T10:39:05.367Z] [BOT] 📍 [ROUTING] "Senior Software Security Engineer" @ anthropic
   Category: TECH (matched: "software")
[2026-01-04T10:39:05.367Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T10:39:05.385Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T10:39:05.700Z] [BOT] ✅ Created forum post: 🏢 Senior Software Security Engineer @ anthropic in #💻・tech-jobs
[2026-01-04T10:39:05.700Z] [BOT] ✅ Industry: Senior Software Security Engineer @ anthropic
[2026-01-04T10:39:07.639Z] [BOT] ✅ Created forum post: 🏢 Senior Software Security Engineer @ anthropic in #🌉・san-francisco
[2026-01-04T10:39:07.640Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:09.140Z] [BOT] 💾 Marked as posted: Senior Software Security Engineer @ anthropic (instance #1)
[2026-01-04T10:39:09.140Z] [BOT] 💾 BEFORE ARCHIVING: 1022 jobs in database
[2026-01-04T10:39:09.141Z] [BOT] ✅ No jobs to archive (all 1022 jobs within 7-day window)
[2026-01-04T10:39:09.148Z] [BOT] 💾 Saved posted_jobs.json: 1022 active jobs
[2026-01-04T10:39:09.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:09.149Z] [BOT] 📍 [ROUTING] "Software Engineer, Desktop" @ anthropic
[2026-01-04T10:39:09.149Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T10:39:09.359Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Desktop @ anthropic in #💻・tech-jobs
[2026-01-04T10:39:09.359Z] [BOT] ✅ Industry: Software Engineer, Desktop @ anthropic
[2026-01-04T10:39:11.094Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Desktop @ anthropic in #🌉・san-francisco
[2026-01-04T10:39:11.094Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:12.595Z] [BOT] 💾 Marked as posted: Software Engineer, Desktop @ anthropic (instance #1)
[2026-01-04T10:39:12.595Z] [BOT] 💾 BEFORE ARCHIVING: 1023 jobs in database
[2026-01-04T10:39:12.596Z] [BOT] ✅ No jobs to archive (all 1023 jobs within 7-day window)
[2026-01-04T10:39:12.605Z] [BOT] 💾 Saved posted_jobs.json: 1023 active jobs
[2026-01-04T10:39:12.605Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:12.606Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Networking" @ anthropic
[2026-01-04T10:39:12.606Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T10:39:12.832Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Networking @ anthropic in #💻・tech-jobs
[2026-01-04T10:39:12.832Z] [BOT] ✅ Industry: Software Engineer, ML Networking @ anthropic
[2026-01-04T10:39:14.871Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Networking @ anthropic in #🌉・san-francisco
[2026-01-04T10:39:14.872Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:16.372Z] [BOT] 💾 Marked as posted: Software Engineer, ML Networking @ anthropic (instance #1)
[2026-01-04T10:39:16.372Z] [BOT] 💾 BEFORE ARCHIVING: 1024 jobs in database
[2026-01-04T10:39:16.373Z] [BOT] ✅ No jobs to archive (all 1024 jobs within 7-day window)
[2026-01-04T10:39:16.382Z] [BOT] 💾 Saved posted_jobs.json: 1024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:16.384Z] [BOT] 📍 [ROUTING] "Software Engineer, Public Sector" @ anthropic
[2026-01-04T10:39:16.384Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T10:39:16.890Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Public Sector @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Public Sector @ anthropic
[2026-01-04T10:39:18.722Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Public Sector @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:20.224Z] [BOT] 💾 Marked as posted: Software Engineer, Public Sector @ anthropic (instance #1)
[2026-01-04T10:39:20.224Z] [BOT] 💾 BEFORE ARCHIVING: 1025 jobs in database
[2026-01-04T10:39:20.225Z] [BOT] ✅ No jobs to archive (all 1025 jobs within 7-day window)
[2026-01-04T10:39:20.234Z] [BOT] 💾 Saved posted_jobs.json: 1025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:20.235Z] [BOT] 📍 [ROUTING] "Software Engineer, Safeguards" @ anthropic
[2026-01-04T10:39:20.235Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T10:39:20.580Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Safeguards @ anthropic in #💻・tech-jobs
[2026-01-04T10:39:20.580Z] [BOT] ✅ Industry: Software Engineer, Safeguards @ anthropic
[2026-01-04T10:39:22.326Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-04T10:39:22.326Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:23.827Z] [BOT] 💾 Marked as posted: Software Engineer, Safeguards @ anthropic (instance #1)
[2026-01-04T10:39:23.828Z] [BOT] 💾 BEFORE ARCHIVING: 1026 jobs in database
[2026-01-04T10:39:23.829Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-04T10:39:23.836Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:26.836Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T10:39:26.836Z] [BOT] 📍 [ROUTING] "Senior/Staff Software Engineer, Inference" @ anthropic
[2026-01-04T10:39:26.836Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:39:27.251Z] [BOT] ✅ Created forum post: 🏢 Senior/Staff Software Engineer, Inference @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior/Staff Software Engineer, Inference @ anthropic
[2026-01-04T10:39:29.154Z] [BOT] ✅ Created forum post: 🏢 Senior/Staff Software Engineer, Inference @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:30.655Z] [BOT] 💾 Marked as posted: Senior/Staff Software Engineer, Inference @ anthropic (instance #1)
[2026-01-04T10:39:30.655Z] [BOT] 💾 BEFORE ARCHIVING: 1027 jobs in database
[2026-01-04T10:39:30.656Z] [BOT] ✅ No jobs to archive (all 1027 jobs within 7-day window)
[2026-01-04T10:39:30.664Z] [BOT] 💾 Saved posted_jobs.json: 1027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:30.664Z] [BOT] 📍 [ROUTING] "Software Engineer, Accelerator Build Infrastructure" @ anthropic
[2026-01-04T10:39:30.665Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:39:30.930Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Accelerator Build Infrastructure @ anthropic in #🤖・ai-jobs
[2026-01-04T10:39:30.930Z] [BOT] ✅ Industry: Software Engineer, Accelerator Build Infrastructure @ anthropic
[2026-01-04T10:39:32.756Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Accelerator Build Infrastructure @ anthropic in #🌉・san-francisco
[2026-01-04T10:39:32.756Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:34.257Z] [BOT] 💾 Marked as posted: Software Engineer, Accelerator Build Infrastructure @ anthropic (instance #1)
[2026-01-04T10:39:34.257Z] [BOT] 💾 BEFORE ARCHIVING: 1028 jobs in database
[2026-01-04T10:39:34.258Z] [BOT] ✅ No jobs to archive (all 1028 jobs within 7-day window)
[2026-01-04T10:39:34.266Z] [BOT] 💾 Saved posted_jobs.json: 1028 active jobs
[2026-01-04T10:39:34.266Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:34.266Z] [BOT] 📍 [ROUTING] "Software Engineer, Beneficial Deployments " @ anthropic
[2026-01-04T10:39:34.267Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:39:34.818Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Beneficial Deployments  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Beneficial Deployments  @ anthropic
[2026-01-04T10:39:36.527Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Beneficial Deployments  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:38.027Z] [BOT] 💾 Marked as posted: Software Engineer, Beneficial Deployments  @ anthropic (instance #1)
[2026-01-04T10:39:38.027Z] [BOT] 💾 BEFORE ARCHIVING: 1029 jobs in database
[2026-01-04T10:39:38.028Z] [BOT] ✅ No jobs to archive (all 1029 jobs within 7-day window)
[2026-01-04T10:39:38.036Z] [BOT] 💾 Saved posted_jobs.json: 1029 active jobs
[2026-01-04T10:39:38.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T10:39:38.036Z] [BOT] 📍 [ROUTING] "Software Engineer, Claude Code" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-04T10:39:38.036Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T10:39:38.230Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-04T10:39:38.230Z] [BOT] ✅ Industry: Software Engineer, Claude Code @ anthropic
[2026-01-04T10:39:39.947Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T10:39:41.449Z] [BOT] 💾 Marked as posted: Software Engineer, Claude Code @ anthropic (instance #1)
[2026-01-04T10:39:41.449Z] [BOT] 💾 BEFORE ARCHIVING: 1030 jobs in database
[2026-01-04T10:39:41.449Z] [BOT] ✅ No jobs to archive (all 1030 jobs within 7-day window)
[2026-01-04T10:39:41.461Z] [BOT] 💾 Saved posted_jobs.json: 1030 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Solutions Architect, Applied AI" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T10:39:41.593Z] [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions Architect, Applied AI @ anthropic',
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
[2026-01-04T10:39:41.593Z] [BOT] ❌ Industry post failed: Solutions Architect, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T10:39:43.217Z] [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Solutions Architect, Applied AI @ anthropic',
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
[2026-01-04T10:39:43.218Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-04T10:39:47.718Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_21719862 (posted within 7 days)
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_5518fc76 (posted within 7 days)
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_00920064 (posted within 7 days)
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_691589b6 (posted within 7 days)
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_310f7e64 (posted within 7 days)
⏭️  Skipping duplicate: JID_d04e5201 (posted within 7 days)
[2026-01-04T10:39:47.719Z] [BOT] ⏭️  Skipping duplicate: JID_fe906425 (posted within 7 days)
[2026-01-04T10:39:47.720Z] [BOT] ⏭️  Skipping duplicate: JID_e91d1e6d (posted within 7 days)
[2026-01-04T10:39:47.720Z] [BOT] ⏭️  Skipping duplicate: JID_8ec96c63 (posted within 7 days)
[2026-01-04T10:39:47.733Z] [BOT] ✅ Loaded pending queue: 269 total (249 pending, 20 enriched, 0 posted)
[2026-01-04T10:39:47.761Z] [BOT] ✅ Saved pending queue: 269 total (249 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-04T10:39:47.761Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T10:39:47.814Z] [BOT] 📂 Loaded 1929 existing routing entries
[2026-01-04T10:39:47.862Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T10:39:47.863Z] [BOT] Total entries: 1939
   Timestamp: 2026-01-04T10:39:47.854Z
[2026-01-04T10:39:47.863Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
   Successful: 18
[2026-01-04T10:39:47.863Z] [BOT] Failed: 2
   Skipped: 0
[2026-01-04T10:39:47.863Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T10:39:47.863Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💻・tech-jobs: 5 posts
[2026-01-04T10:39:47.864Z] [BOT] 3. #🤖・ai-jobs: 4 posts
[2026-01-04T10:39:47.864Z] [BOT] [STATS] Channel stats saved
[2026-01-04T10:39:49.878Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Solutions Architect, Applied AI
- [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*