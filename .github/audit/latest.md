# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T20:26:55.424Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T20:26:11.390Z] ========================================
[2026-01-13T20:26:11.392Z] Discord Bot Execution Log
[2026-01-13T20:26:11.392Z] Environment: GitHub Actions
[2026-01-13T20:26:11.392Z] Node Version: v20.19.6
[2026-01-13T20:26:11.392Z] ========================================
[2026-01-13T20:26:11.392Z] Environment Variables Check:
[2026-01-13T20:26:11.392Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T20:26:11.392Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.392Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T20:26:11.393Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T20:26:11.393Z] 
Multi-Channel Configuration:
[2026-01-13T20:26:11.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T20:26:11.393Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T20:26:11.393Z] 
Data Files Check:
[2026-01-13T20:26:11.395Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132724 bytes)
[2026-01-13T20:26:11.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 505331 bytes)
[2026-01-13T20:26:11.398Z] 
========================================
[2026-01-13T20:26:11.398Z] Starting Enhanced Discord Bot...
[2026-01-13T20:26:11.398Z] ========================================
[2026-01-13T20:26:11.938Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-13T20:26:12.627Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T20:26:12.628Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T20:26:12.628Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T20:26:12.734Z] [BOT] ✅ Loaded pending queue: 2727 total (2707 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Enova
[2026-01-13T20:26:12.736Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T20:26:12.737Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T20:26:12.737Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T20:26:12.738Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T20:26:12.738Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T20:26:12.742Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T20:26:12.743Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b4800baa
[2026-01-13T20:26:12.743Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T20:26:12.747Z] [BOT ERROR] (node:2350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T20:26:12.874Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Enova',
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
[2026-01-13T20:26:12.874Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-13T20:26:14.565Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b4800baa in #🌆・chicago
[2026-01-13T20:26:14.565Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T20:26:16.066Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b4800baa (instance #1)
[2026-01-13T20:26:16.066Z] [BOT] 💾 BEFORE ARCHIVING: 958 jobs in database
[2026-01-13T20:26:16.067Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T20:26:16.072Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T20:26:16.072Z] [BOT] ✅ Archiving complete: 1 archived, 957 active
[2026-01-13T20:26:16.079Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:16.079Z] [BOT] 📍 [ROUTING] "AI Applied Scientist" @ figma
[2026-01-13T20:26:16.079Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T20:26:16.325Z] [BOT] ✅ Created forum post: 🏢 AI Applied Scientist @ figma in #🤖・ai-jobs
[2026-01-13T20:26:16.326Z] [BOT] ✅ Industry: AI Applied Scientist @ figma
[2026-01-13T20:26:18.119Z] [BOT] ✅ Created forum post: 🏢 AI Applied Scientist @ figma in #🌉・san-francisco
[2026-01-13T20:26:18.119Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:19.619Z] [BOT] 💾 Marked as posted: AI Applied Scientist @ figma (instance #1)
[2026-01-13T20:26:19.619Z] [BOT] 💾 BEFORE ARCHIVING: 958 jobs in database
[2026-01-13T20:26:19.620Z] [BOT] ✅ No jobs to archive (all 958 jobs within 7-day window)
[2026-01-13T20:26:19.626Z] [BOT] 💾 Saved posted_jobs.json: 958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:22.626Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-13T20:26:22.627Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Database Technologies" @ ORG_dc7620eb
[2026-01-13T20:26:22.627Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:22.899Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-13T20:26:22.899Z] [BOT] ✅ Industry: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb
[2026-01-13T20:26:24.665Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #🌉・san-francisco
[2026-01-13T20:26:24.665Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:26.167Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2026-01-13T20:26:26.167Z] [BOT] 💾 BEFORE ARCHIVING: 959 jobs in database
[2026-01-13T20:26:26.168Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-13T20:26:26.175Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
[2026-01-13T20:26:26.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:26.175Z] [BOT] 📍 [ROUTING] "Data Center Hardware Operations Lead" @ anthropic
[2026-01-13T20:26:26.176Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:26.516Z] [BOT] ✅ Created forum post: 🏢 Data Center Hardware Operations Lead @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Center Hardware Operations Lead @ anthropic
[2026-01-13T20:26:28.333Z] [BOT] ✅ Created forum post: 🏢 Data Center Hardware Operations Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:29.834Z] [BOT] 💾 Marked as posted: Data Center Hardware Operations Lead @ anthropic (instance #1)
[2026-01-13T20:26:29.834Z] [BOT] 💾 BEFORE ARCHIVING: 960 jobs in database
[2026-01-13T20:26:29.835Z] [BOT] ✅ No jobs to archive (all 960 jobs within 7-day window)
[2026-01-13T20:26:29.844Z] [BOT] 💾 Saved posted_jobs.json: 960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:29.844Z] [BOT] 📍 [ROUTING] "Database Support Engineer (APAC)" @ supabase
[2026-01-13T20:26:29.844Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:30.032Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (APAC) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (APAC) @ supabase
[2026-01-13T20:26:31.534Z] [BOT] 💾 Marked as posted: Database Support Engineer (APAC) @ supabase (instance #1)
[2026-01-13T20:26:31.535Z] [BOT] 💾 BEFORE ARCHIVING: 961 jobs in database
[2026-01-13T20:26:31.535Z] [BOT] ✅ No jobs to archive (all 961 jobs within 7-day window)
[2026-01-13T20:26:31.542Z] [BOT] 💾 Saved posted_jobs.json: 961 active jobs
[2026-01-13T20:26:31.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:31.542Z] [BOT] 📍 [ROUTING] "Database Support Engineer (EMEA)" @ supabase
[2026-01-13T20:26:31.542Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:31.867Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (EMEA) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (EMEA) @ supabase
[2026-01-13T20:26:33.368Z] [BOT] 💾 Marked as posted: Database Support Engineer (EMEA) @ supabase (instance #1)
[2026-01-13T20:26:33.368Z] [BOT] 💾 BEFORE ARCHIVING: 962 jobs in database
[2026-01-13T20:26:33.369Z] [BOT] ✅ No jobs to archive (all 962 jobs within 7-day window)
[2026-01-13T20:26:33.376Z] [BOT] 💾 Saved posted_jobs.json: 962 active jobs
[2026-01-13T20:26:33.376Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:33.376Z] [BOT] 📍 [ROUTING] "Database Support Engineer (AMER)" @ supabase
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:33.757Z] [BOT] ✅ Created forum post: 🏢 Database Support Engineer (AMER) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (AMER) @ supabase
[2026-01-13T20:26:35.258Z] [BOT] 💾 Marked as posted: Database Support Engineer (AMER) @ supabase (instance #1)
[2026-01-13T20:26:35.258Z] [BOT] 💾 BEFORE ARCHIVING: 963 jobs in database
[2026-01-13T20:26:35.258Z] [BOT] ✅ No jobs to archive (all 963 jobs within 7-day window)
[2026-01-13T20:26:35.266Z] [BOT] 💾 Saved posted_jobs.json: 963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:35.266Z] [BOT] 📍 [ROUTING] "Director, Security Operations & Information Security" @ figma
[2026-01-13T20:26:35.266Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:26:35.545Z] [BOT] ✅ Created forum post: 🏢 Director, Security Operations & Information Security @ figma in #💻・tech-jobs
  ✅ Industry: Director, Security Operations & Information Security @ figma
[2026-01-13T20:26:37.303Z] [BOT] ✅ Created forum post: 🏢 Director, Security Operations & Information Security @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:38.803Z] [BOT] 💾 Marked as posted: Director, Security Operations & Information Security @ figma (instance #1)
[2026-01-13T20:26:38.803Z] [BOT] 💾 BEFORE ARCHIVING: 964 jobs in database
[2026-01-13T20:26:38.804Z] [BOT] ✅ No jobs to archive (all 964 jobs within 7-day window)
[2026-01-13T20:26:38.812Z] [BOT] 💾 Saved posted_jobs.json: 964 active jobs
[2026-01-13T20:26:38.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:41.812Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T20:26:41.813Z] [BOT] 📍 [ROUTING] "Compensation Systems and Infrastructure" @ anthropic
[2026-01-13T20:26:41.813Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T20:26:42.099Z] [BOT] ✅ Created forum post: 🏢 Compensation Systems and Infrastructure @ anthropic in #💲・sales-jobs
[2026-01-13T20:26:42.099Z] [BOT] ✅ Industry: Compensation Systems and Infrastructure @ anthropic
[2026-01-13T20:26:43.895Z] [BOT] ✅ Created forum post: 🏢 Compensation Systems and Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:45.396Z] [BOT] 💾 Marked as posted: Compensation Systems and Infrastructure @ anthropic (instance #1)
[2026-01-13T20:26:45.396Z] [BOT] 💾 BEFORE ARCHIVING: 965 jobs in database
[2026-01-13T20:26:45.397Z] [BOT] ✅ No jobs to archive (all 965 jobs within 7-day window)
[2026-01-13T20:26:45.406Z] [BOT] 💾 Saved posted_jobs.json: 965 active jobs
[2026-01-13T20:26:45.406Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:45.406Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst - Finance & Strategy" @ anthropic
[2026-01-13T20:26:45.406Z] [BOT] Category: SALES (matched: "sales")
[2026-01-13T20:26:45.406Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T20:26:45.613Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic in #💲・sales-jobs
[2026-01-13T20:26:45.613Z] [BOT] ✅ Industry: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic
[2026-01-13T20:26:47.356Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic in #🌉・san-francisco
[2026-01-13T20:26:47.357Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:26:48.858Z] [BOT] 💾 Marked as posted: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic (instance #1)
[2026-01-13T20:26:48.858Z] [BOT] 💾 BEFORE ARCHIVING: 966 jobs in database
[2026-01-13T20:26:48.858Z] [BOT] ✅ No jobs to archive (all 966 jobs within 7-day window)
[2026-01-13T20:26:48.866Z] [BOT] 💾 Saved posted_jobs.json: 966 active jobs
[2026-01-13T20:26:48.866Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:26:51.866Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T20:26:51.866Z] [BOT] ⏭️  Skipping duplicate: JID_4c68b8d2 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320582 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_de199501 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_010025e8 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_2c984041 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_eba04086 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_9f7e5676 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_682e1f65 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_8634f5d2 (posted within 7 days)
[2026-01-13T20:26:51.867Z] [BOT] ⏭️  Skipping duplicate: JID_da0d656b (posted within 7 days)
[2026-01-13T20:26:51.982Z] [BOT] ✅ Loaded pending queue: 2727 total (2707 pending, 20 enriched, 0 posted)
[2026-01-13T20:26:52.143Z] [BOT] ✅ Saved pending queue: 2727 total (2707 pending, 10 enriched, 10 posted)
[2026-01-13T20:26:52.144Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T20:26:52.196Z] [BOT] 📂 Loaded 3105 existing routing entries
[2026-01-13T20:26:52.254Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T20:26:52.254Z] [BOT] Total entries: 3115
   Timestamp: 2026-01-13T20:26:52.241Z
[2026-01-13T20:26:52.254Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 17
[2026-01-13T20:26:52.254Z] [BOT] Successful: 16
   Failed: 1
   Skipped: 0
[2026-01-13T20:26:52.254Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T20:26:52.254Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
[2026-01-13T20:26:52.255Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 6 posts
     3. #💲・sales-jobs: 2 posts
     4. #🌆・chicago: 1 posts
[2026-01-13T20:26:52.255Z] [BOT] 5. #🤖・ai-jobs: 1 posts
[2026-01-13T20:26:52.255Z] [BOT] [STATS] Channel stats saved
[2026-01-13T20:26:54.279Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2350) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*