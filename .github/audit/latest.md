# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T11:05:30.323Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T11:04:39.322Z] ========================================
[2026-01-04T11:04:39.324Z] Discord Bot Execution Log
[2026-01-04T11:04:39.324Z] Environment: GitHub Actions
[2026-01-04T11:04:39.324Z] Node Version: v20.19.6
[2026-01-04T11:04:39.324Z] ========================================
[2026-01-04T11:04:39.324Z] Environment Variables Check:
[2026-01-04T11:04:39.324Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T11:04:39.324Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T11:04:39.325Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T11:04:39.325Z] 
Multi-Channel Configuration:
[2026-01-04T11:04:39.325Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.325Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.326Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T11:04:39.326Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T11:04:39.326Z] 
Data Files Check:
[2026-01-04T11:04:39.327Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161675 bytes)
[2026-01-04T11:04:39.331Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 518815 bytes)
[2026-01-04T11:04:39.331Z] 
========================================
[2026-01-04T11:04:39.331Z] Starting Enhanced Discord Bot...
[2026-01-04T11:04:39.331Z] ========================================
[2026-01-04T11:04:39.866Z] [BOT] ✅ Loaded V2 database: 1030 jobs
[2026-01-04T11:04:42.340Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T11:04:42.340Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T11:04:42.340Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T11:04:42.344Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T11:04:42.413Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T11:04:42.503Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T11:04:42.505Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T11:04:42.506Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T11:04:42.506Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T11:04:42.506Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T11:04:42.507Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T11:04:42.510Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T11:04:42.511Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI" @ anthropic
[2026-01-04T11:04:42.511Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T11:04:42.529Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T11:04:42.700Z] [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-04T11:04:42.701Z] [BOT] ❌ Industry post failed: Solutions Architect, Applied AI
⚠️  Channel full error count: 1/5
[2026-01-04T11:04:44.471Z] [BOT] ✅ Created forum post: 🏢 Solutions Architect, Applied AI @ anthropic in #🌉・san-francisco
[2026-01-04T11:04:44.471Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:04:45.972Z] [BOT] 💾 Marked as posted: Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-04T11:04:45.972Z] [BOT] 💾 BEFORE ARCHIVING: 1031 jobs in database
[2026-01-04T11:04:45.973Z] [BOT] ✅ No jobs to archive (all 1031 jobs within 7-day window)
[2026-01-04T11:04:45.985Z] [BOT] 💾 Saved posted_jobs.json: 1031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:04:45.986Z] [BOT] 📍 [ROUTING] "Staff Infrastructure Engineer, Pre-training" @ anthropic
[2026-01-04T11:04:45.986Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T11:04:46.181Z] [BOT] ✅ Created forum post: 🏢 Staff Infrastructure Engineer, Pre-training @ anthropic in #🤖・ai-jobs
[2026-01-04T11:04:46.181Z] [BOT] ✅ Industry: Staff Infrastructure Engineer, Pre-training @ anthropic
[2026-01-04T11:04:47.943Z] [BOT] ✅ Created forum post: 🏢 Staff Infrastructure Engineer, Pre-training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:04:49.445Z] [BOT] 💾 Marked as posted: Staff Infrastructure Engineer, Pre-training @ anthropic (instance #1)
[2026-01-04T11:04:49.445Z] [BOT] 💾 BEFORE ARCHIVING: 1032 jobs in database
[2026-01-04T11:04:49.446Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-04T11:04:49.453Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:04:49.454Z] [BOT] 📍 [ROUTING] "Staff Machine Learning Engineer, Agent Skills" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T11:04:49.454Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T11:04:49.698Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Agent Skills @ anthropic in #🤖・ai-jobs
  ✅ Industry: Staff Machine Learning Engineer, Agent Skills @ anthropic
[2026-01-04T11:04:51.401Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Agent Skills @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:04:52.902Z] [BOT] 💾 Marked as posted: Staff Machine Learning Engineer, Agent Skills @ anthropic (instance #1)
[2026-01-04T11:04:52.903Z] [BOT] 💾 BEFORE ARCHIVING: 1033 jobs in database
[2026-01-04T11:04:52.904Z] [BOT] ✅ No jobs to archive (all 1033 jobs within 7-day window)
[2026-01-04T11:04:52.911Z] [BOT] 💾 Saved posted_jobs.json: 1033 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:04:52.911Z] [BOT] 📍 [ROUTING] "Staff Machine Learning Engineer, Virtual Collaborator" @ anthropic
[2026-01-04T11:04:52.911Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T11:04:53.248Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Virtual Collaborator @ anthropic in #🤖・ai-jobs
[2026-01-04T11:04:53.249Z] [BOT] ✅ Industry: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic
[2026-01-04T11:04:54.936Z] [BOT] ✅ Created forum post: 🏢 Staff Machine Learning Engineer, Virtual Collaborator @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:04:56.437Z] [BOT] 💾 Marked as posted: Staff Machine Learning Engineer, Virtual Collaborator @ anthropic (instance #1)
[2026-01-04T11:04:56.437Z] [BOT] 💾 BEFORE ARCHIVING: 1034 jobs in database
[2026-01-04T11:04:56.438Z] [BOT] ✅ No jobs to archive (all 1034 jobs within 7-day window)
[2026-01-04T11:04:56.447Z] [BOT] 💾 Saved posted_jobs.json: 1034 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:04:59.448Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T11:04:59.449Z] [BOT] 📍 [ROUTING] "Staff Research Engineer, Discovery Team" @ anthropic
[2026-01-04T11:04:59.449Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:04:59.650Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer, Discovery Team @ anthropic in #💻・tech-jobs
[2026-01-04T11:04:59.650Z] [BOT] ✅ Industry: Staff Research Engineer, Discovery Team @ anthropic
[2026-01-04T11:05:01.358Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer, Discovery Team @ anthropic in #🌉・san-francisco
[2026-01-04T11:05:01.359Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:02.860Z] [BOT] 💾 Marked as posted: Staff Research Engineer, Discovery Team @ anthropic (instance #1)
[2026-01-04T11:05:02.860Z] [BOT] 💾 BEFORE ARCHIVING: 1035 jobs in database
[2026-01-04T11:05:02.861Z] [BOT] ✅ No jobs to archive (all 1035 jobs within 7-day window)
[2026-01-04T11:05:02.870Z] [BOT] 💾 Saved posted_jobs.json: 1035 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:02.870Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Claude Developer Platform (Backend)" @ anthropic
[2026-01-04T11:05:02.870Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:05:03.180Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic in #💻・tech-jobs
[2026-01-04T11:05:03.180Z] [BOT] ✅ Industry: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic
[2026-01-04T11:05:04.885Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic in #🌉・san-francisco
[2026-01-04T11:05:04.886Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:06.387Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Claude Developer Platform (Backend) @ anthropic (instance #1)
[2026-01-04T11:05:06.387Z] [BOT] 💾 BEFORE ARCHIVING: 1036 jobs in database
[2026-01-04T11:05:06.388Z] [BOT] ✅ No jobs to archive (all 1036 jobs within 7-day window)
[2026-01-04T11:05:06.396Z] [BOT] 💾 Saved posted_jobs.json: 1036 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:06.396Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Claude Developer Platform (Full Stack)" @ anthropic
[2026-01-04T11:05:06.396Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T11:05:06.576Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic
[2026-01-04T11:05:08.540Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:10.042Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Claude Developer Platform (Full Stack) @ anthropic (instance #1)
[2026-01-04T11:05:10.042Z] [BOT] 💾 BEFORE ARCHIVING: 1037 jobs in database
[2026-01-04T11:05:10.043Z] [BOT] ✅ No jobs to archive (all 1037 jobs within 7-day window)
[2026-01-04T11:05:10.051Z] [BOT] 💾 Saved posted_jobs.json: 1037 active jobs
[2026-01-04T11:05:10.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:13.051Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T11:05:13.052Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ anthropic
[2026-01-04T11:05:13.052Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:05:13.269Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ anthropic in #💲・sales-jobs
[2026-01-04T11:05:13.269Z] [BOT] ✅ Industry: Startup Account Executive @ anthropic
[2026-01-04T11:05:14.966Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:16.467Z] [BOT] 💾 Marked as posted: Startup Account Executive @ anthropic (instance #1)
[2026-01-04T11:05:16.468Z] [BOT] 💾 BEFORE ARCHIVING: 1038 jobs in database
[2026-01-04T11:05:16.468Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-04T11:05:16.477Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-04T11:05:16.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:16.477Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Financial Services" @ anthropic
[2026-01-04T11:05:16.478Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:05:17.006Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Financial Services @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Financial Services @ anthropic
[2026-01-04T11:05:18.886Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Financial Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:20.386Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Financial Services @ anthropic (instance #1)
[2026-01-04T11:05:20.386Z] [BOT] 💾 BEFORE ARCHIVING: 1039 jobs in database
[2026-01-04T11:05:20.387Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-04T11:05:20.394Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:20.395Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Startups" @ anthropic
[2026-01-04T11:05:20.395Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T11:05:20.619Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Startups @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Startups @ anthropic
[2026-01-04T11:05:22.344Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T11:05:23.844Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Startups @ anthropic (instance #1)
[2026-01-04T11:05:23.845Z] [BOT] 💾 BEFORE ARCHIVING: 1040 jobs in database
[2026-01-04T11:05:23.845Z] [BOT] ✅ No jobs to archive (all 1040 jobs within 7-day window)
[2026-01-04T11:05:23.853Z] [BOT] 💾 Saved posted_jobs.json: 1040 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T11:05:26.854Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_f05e0595 (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_96879384 (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_a1e38cd4 (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_8eaf89fb (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_b9aceaaa (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_c37304c6 (posted within 7 days)
[2026-01-04T11:05:26.855Z] [BOT] ⏭️  Skipping duplicate: JID_8eb25d02 (posted within 7 days)
⏭️  Skipping duplicate: JID_240785c7 (posted within 7 days)
[2026-01-04T11:05:26.856Z] [BOT] ⏭️  Skipping duplicate: JID_4853c68d (posted within 7 days)
⏭️  Skipping duplicate: JID_efbb0ec7 (posted within 7 days)
[2026-01-04T11:05:26.868Z] [BOT] ✅ Loaded pending queue: 260 total (240 pending, 20 enriched, 0 posted)
[2026-01-04T11:05:26.896Z] [BOT] ✅ Saved pending queue: 260 total (240 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T11:05:26.896Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T11:05:26.947Z] [BOT] 📂 Loaded 1939 existing routing entries
[2026-01-04T11:05:26.999Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T11:05:27.000Z] [BOT] Total entries: 1949
   Timestamp: 2026-01-04T11:05:26.991Z
[2026-01-04T11:05:27.000Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T11:05:27.000Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-04T11:05:27.001Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 4
   Top channels:
[2026-01-04T11:05:27.001Z] [BOT] 1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #💲・sales-jobs: 3 posts
[2026-01-04T11:05:27.001Z] [BOT] [STATS] Channel stats saved
[2026-01-04T11:05:29.015Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Solutions Architect, Applied AI: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Solutions Architect, Applied AI
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*