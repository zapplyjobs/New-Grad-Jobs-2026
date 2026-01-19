# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T09:03:31.014Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T09:02:40.705Z] ========================================
[2026-01-19T09:02:40.706Z] Discord Bot Execution Log
[2026-01-19T09:02:40.707Z] Environment: GitHub Actions
[2026-01-19T09:02:40.707Z] Node Version: v20.19.6
[2026-01-19T09:02:40.707Z] ========================================
[2026-01-19T09:02:40.707Z] Environment Variables Check:
[2026-01-19T09:02:40.707Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T09:02:40.707Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.707Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T09:02:40.707Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T09:02:40.707Z] 
Multi-Channel Configuration:
[2026-01-19T09:02:40.707Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T09:02:40.708Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T09:02:40.708Z] 
Data Files Check:
[2026-01-19T09:02:40.709Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143230 bytes)
[2026-01-19T09:02:40.720Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1601100 bytes)
[2026-01-19T09:02:40.720Z] 
========================================
[2026-01-19T09:02:40.720Z] Starting Enhanced Discord Bot...
[2026-01-19T09:02:40.720Z] ========================================
[2026-01-19T09:02:41.245Z] [BOT] ✅ Loaded V2 database: 2944 jobs
[2026-01-19T09:02:41.940Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T09:02:41.940Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T09:02:41.940Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T09:02:42.060Z] [BOT] ✅ Loaded pending queue: 2823 total (2803 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Finance Data & Insights, Ads and Podcasts at spotify
[2026-01-19T09:02:42.064Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T09:02:42.064Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T09:02:42.065Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T09:02:42.065Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-19T09:02:42.066Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, E-Commerce  @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T09:02:42.066Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T09:02:42.070Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-19T09:02:42.070Z] [BOT] 📍 [ROUTING] "Data Scientist - Finance Data & Insights, Ads and Podcasts" @ spotify
[2026-01-19T09:02:42.070Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T09:02:42.075Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T09:02:42.250Z] [BOT ERROR] ❌ Error posting job Data Scientist - Finance Data & Insights, Ads and Podcasts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist - Finance Data & Insights, Ads and Podcasts @ spotify',
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
[2026-01-19T09:02:42.250Z] [BOT] ❌ Industry post failed: Data Scientist - Finance Data & Insights, Ads and Podcasts
⚠️  Channel full error count: 1/5
[2026-01-19T09:02:43.925Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Finance Data & Insights, Ads and Podcasts @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T09:02:45.427Z] [BOT] 💾 Marked as posted: Data Scientist - Finance Data & Insights, Ads and Podcasts @ spotify (instance #1)
[2026-01-19T09:02:45.427Z] [BOT] 💾 BEFORE ARCHIVING: 2945 jobs in database
[2026-01-19T09:02:45.429Z] [BOT] ✅ No jobs to archive (all 2945 jobs within 7-day window)
[2026-01-19T09:02:45.449Z] [BOT] 💾 Saved posted_jobs.json: 2945 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:02:45.449Z] [BOT] 📍 [ROUTING] "Senior Staff Machine Learning Engineer - Home" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T09:02:45.450Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T09:02:45.666Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer - Home @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Staff Machine Learning Engineer - Home @ spotify
[2026-01-19T09:02:47.513Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer - Home @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T09:02:49.014Z] [BOT] 💾 Marked as posted: Senior Staff Machine Learning Engineer - Home @ spotify (instance #1)
[2026-01-19T09:02:49.014Z] [BOT] 💾 BEFORE ARCHIVING: 2946 jobs in database
[2026-01-19T09:02:49.017Z] [BOT] ✅ No jobs to archive (all 2946 jobs within 7-day window)
[2026-01-19T09:02:49.032Z] [BOT] 💾 Saved posted_jobs.json: 2946 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:02:49.032Z] [BOT] 📍 [ROUTING] "Senior Machine Learning Engineer - Ads R&D" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-19T09:02:49.032Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T09:02:49.229Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer - Ads R&D @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Machine Learning Engineer - Ads R&D @ spotify
[2026-01-19T09:02:51.150Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer - Ads R&D @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T09:02:52.652Z] [BOT] 💾 Marked as posted: Senior Machine Learning Engineer - Ads R&D @ spotify (instance #1)
[2026-01-19T09:02:52.652Z] [BOT] 💾 BEFORE ARCHIVING: 2947 jobs in database
[2026-01-19T09:02:52.654Z] [BOT] ✅ No jobs to archive (all 2947 jobs within 7-day window)
[2026-01-19T09:02:52.675Z] [BOT] 💾 Saved posted_jobs.json: 2947 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:02:52.675Z] [BOT] 📍 [ROUTING] "Research Engineer, Audio" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-19T09:02:52.675Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T09:02:52.947Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Audio @ anthropic in #🤖・ai-jobs
[2026-01-19T09:02:52.947Z] [BOT] ✅ Industry: Research Engineer, Audio @ anthropic
[2026-01-19T09:02:54.646Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Audio @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T09:02:56.148Z] [BOT] 💾 Marked as posted: Research Engineer, Audio @ anthropic (instance #1)
[2026-01-19T09:02:56.148Z] [BOT] 💾 BEFORE ARCHIVING: 2948 jobs in database
[2026-01-19T09:02:56.150Z] [BOT] ✅ No jobs to archive (all 2948 jobs within 7-day window)
[2026-01-19T09:02:56.169Z] [BOT] 💾 Saved posted_jobs.json: 2948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:02:56.169Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Vision" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T09:02:56.429Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Vision @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer / Research Scientist, Vision @ anthropic
[2026-01-19T09:02:58.176Z] [BOT] ✅ Created forum post: 🏢 Research Engineer / Research Scientist, Vision @ anthropic in #🌉・san-francisco
[2026-01-19T09:02:58.176Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T09:02:59.678Z] [BOT] 💾 Marked as posted: Research Engineer / Research Scientist, Vision @ anthropic (instance #1)
[2026-01-19T09:02:59.678Z] [BOT] 💾 BEFORE ARCHIVING: 2949 jobs in database
[2026-01-19T09:02:59.680Z] [BOT] ✅ No jobs to archive (all 2949 jobs within 7-day window)
[2026-01-19T09:02:59.698Z] [BOT] 💾 Saved posted_jobs.json: 2949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:02.699Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-19T09:03:02.699Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Phoenix) " @ verkada
[2026-01-19T09:03:02.700Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T09:03:02.925Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, West (Phoenix)  @ verkada in #💲・sales-jobs
[2026-01-19T09:03:02.925Z] [BOT] ✅ Industry: Channel Development Representative, West (Phoenix)  @ verkada
[2026-01-19T09:03:04.427Z] [BOT] 💾 Marked as posted: Channel Development Representative, West (Phoenix)  @ verkada (instance #1)
[2026-01-19T09:03:04.428Z] [BOT] 💾 BEFORE ARCHIVING: 2950 jobs in database
[2026-01-19T09:03:04.429Z] [BOT] ✅ No jobs to archive (all 2950 jobs within 7-day window)
[2026-01-19T09:03:04.448Z] [BOT] 💾 Saved posted_jobs.json: 2950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:04.448Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer - Key Accounts (West)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-19T09:03:04.448Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T09:03:04.809Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Key Accounts (West) @ datadog in #💲・sales-jobs
[2026-01-19T09:03:04.809Z] [BOT] ✅ Industry: Senior Sales Engineer - Key Accounts (West) @ datadog
[2026-01-19T09:03:06.692Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Key Accounts (West) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T09:03:08.193Z] [BOT] 💾 Marked as posted: Senior Sales Engineer - Key Accounts (West) @ datadog (instance #1)
[2026-01-19T09:03:08.193Z] [BOT] 💾 BEFORE ARCHIVING: 2951 jobs in database
[2026-01-19T09:03:08.195Z] [BOT] ✅ No jobs to archive (all 2951 jobs within 7-day window)
[2026-01-19T09:03:08.212Z] [BOT] 💾 Saved posted_jobs.json: 2951 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:08.212Z] [BOT] 📍 [ROUTING] "Director, FX & Investments" @ anthropic
[2026-01-19T09:03:08.212Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T09:03:08.455Z] [BOT] ✅ Created forum post: 🏢 Director, FX & Investments @ anthropic in #💲・sales-jobs
  ✅ Industry: Director, FX & Investments @ anthropic
[2026-01-19T09:03:10.194Z] [BOT] ✅ Created forum post: 🏢 Director, FX & Investments @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T09:03:11.694Z] [BOT] 💾 Marked as posted: Director, FX & Investments @ anthropic (instance #1)
[2026-01-19T09:03:11.695Z] [BOT] 💾 BEFORE ARCHIVING: 2952 jobs in database
[2026-01-19T09:03:11.696Z] [BOT] ✅ No jobs to archive (all 2952 jobs within 7-day window)
[2026-01-19T09:03:11.713Z] [BOT] 💾 Saved posted_jobs.json: 2952 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:14.713Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-19T09:03:14.714Z] [BOT] 📍 [ROUTING] "Software Engineer, Cybersecurity Products" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T09:03:14.910Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Cybersecurity Products @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Cybersecurity Products @ anthropic
[2026-01-19T09:03:16.642Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Cybersecurity Products @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T09:03:18.143Z] [BOT] 💾 Marked as posted: Software Engineer, Cybersecurity Products @ anthropic (instance #1)
[2026-01-19T09:03:18.144Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-19T09:03:18.145Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-19T09:03:18.163Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:21.164Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-19T09:03:21.164Z] [BOT] 📍 [ROUTING] "Program Manager, Responsible Scaling Policy" @ anthropic
[2026-01-19T09:03:21.164Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T09:03:21.377Z] [BOT] ✅ Created forum post: 🏢 Program Manager, Responsible Scaling Policy @ anthropic in #📊・JID_9910249a
  ✅ Industry: Program Manager, Responsible Scaling Policy @ anthropic
[2026-01-19T09:03:23.251Z] [BOT] ✅ Created forum post: 🏢 Program Manager, Responsible Scaling Policy @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T09:03:24.753Z] [BOT] 💾 Marked as posted: Program Manager, Responsible Scaling Policy @ anthropic (instance #1)
[2026-01-19T09:03:24.753Z] [BOT] 💾 BEFORE ARCHIVING: 2954 jobs in database
[2026-01-19T09:03:24.755Z] [BOT] ✅ No jobs to archive (all 2954 jobs within 7-day window)
[2026-01-19T09:03:24.775Z] [BOT] 💾 Saved posted_jobs.json: 2954 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:03:27.776Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T09:03:27.777Z] [BOT] ⏭️  Skipping duplicate: JID_ce546651 (posted within 7 days)
[2026-01-19T09:03:27.777Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
[2026-01-19T09:03:27.777Z] [BOT] ⏭️  Skipping duplicate: JID_00c77ec6 (posted within 7 days)
[2026-01-19T09:03:27.777Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-01-19T09:03:27.777Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
[2026-01-19T09:03:27.778Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
[2026-01-19T09:03:27.778Z] [BOT] ⏭️  Skipping duplicate: JID_86a56bd5 (posted within 7 days)
[2026-01-19T09:03:27.778Z] [BOT] ⏭️  Skipping duplicate: JID_7083a451 (posted within 7 days)
[2026-01-19T09:03:27.778Z] [BOT] ⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
[2026-01-19T09:03:27.778Z] [BOT] ⏭️  Skipping duplicate: JID_6178c9fc (posted within 7 days)
[2026-01-19T09:03:27.892Z] [BOT] ✅ Loaded pending queue: 2823 total (2803 pending, 20 enriched, 0 posted)
[2026-01-19T09:03:28.075Z] [BOT] ✅ Saved pending queue: 2823 total (2803 pending, 10 enriched, 10 posted)
[2026-01-19T09:03:28.075Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T09:03:28.136Z] [BOT] 📂 Loaded 5095 existing routing entries
[2026-01-19T09:03:28.209Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5105
   Timestamp: 2026-01-19T09:03:28.186Z
[2026-01-19T09:03:28.209Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
[2026-01-19T09:03:28.210Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-19T09:03:28.210Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-19T09:03:28.210Z] [BOT] 3. #🗽・new-york: 3 posts
     4. #💲・sales-jobs: 3 posts
     5. #💻・remote-usa: 1 posts
[2026-01-19T09:03:28.210Z] [BOT] [STATS] Channel stats saved
[2026-01-19T09:03:30.235Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Scientist - Finance Data & Insights, Ads and Podcasts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist - Finance Data & Insights, Ads and Podcasts
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*