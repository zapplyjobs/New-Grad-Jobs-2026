# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T19:08:50.502Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T19:07:57.714Z] ========================================
[2026-01-13T19:07:57.716Z] Discord Bot Execution Log
[2026-01-13T19:07:57.716Z] Environment: GitHub Actions
[2026-01-13T19:07:57.716Z] Node Version: v20.19.6
[2026-01-13T19:07:57.716Z] ========================================
[2026-01-13T19:07:57.716Z] Environment Variables Check:
[2026-01-13T19:07:57.716Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T19:07:57.716Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.716Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T19:07:57.716Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T19:07:57.716Z] 
Multi-Channel Configuration:
[2026-01-13T19:07:57.716Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T19:07:57.717Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T19:07:57.717Z] 
Data Files Check:
[2026-01-13T19:07:57.718Z] .github/data/new_jobs.json: ✅ Exists (10 items, 116205 bytes)
[2026-01-13T19:07:57.722Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 476064 bytes)
[2026-01-13T19:07:57.722Z] 
========================================
[2026-01-13T19:07:57.722Z] Starting Enhanced Discord Bot...
[2026-01-13T19:07:57.722Z] ========================================
[2026-01-13T19:07:58.169Z] [BOT] ✅ Loaded V2 database: 902 jobs
[2026-01-13T19:07:58.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T19:07:58.694Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T19:07:58.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T19:07:58.843Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T19:07:58.843Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Enterprise Marketing Manager at airtable
[2026-01-13T19:07:58.845Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T19:07:58.846Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T19:07:58.846Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T19:07:58.847Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T19:07:58.847Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T19:07:58.851Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-13T19:07:58.852Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
   Category: MARKETING (matched: "marketing")
[2026-01-13T19:07:58.852Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T19:07:58.856Z] [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T19:07:58.977Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T19:07:58.977Z] [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-13T19:08:00.726Z] [BOT] ✅ Created forum post: 🏢 Senior Enterprise Marketing Manager @ airtable in #🌉・san-francisco
[2026-01-13T19:08:00.726Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:02.227Z] [BOT] 💾 Marked as posted: Senior Enterprise Marketing Manager @ airtable (instance #1)
[2026-01-13T19:08:02.227Z] [BOT] 💾 BEFORE ARCHIVING: 903 jobs in database
[2026-01-13T19:08:02.228Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T19:08:02.232Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T19:08:02.232Z] [BOT] ✅ Archiving complete: 1 archived, 902 active
[2026-01-13T19:08:02.239Z] [BOT] 💾 Saved posted_jobs.json: 902 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:02.239Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
   Category: MARKETING (matched: "marketing")
[2026-01-13T19:08:02.240Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T19:08:02.486Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager, Builders @ airtable in #📣・marketing-jobs
[2026-01-13T19:08:02.487Z] [BOT] ✅ Industry: Senior Growth Marketing Manager, Builders @ airtable
[2026-01-13T19:08:04.227Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager, Builders @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:05.728Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager, Builders @ airtable (instance #1)
💾 BEFORE ARCHIVING: 903 jobs in database
[2026-01-13T19:08:05.729Z] [BOT] ✅ No jobs to archive (all 903 jobs within 7-day window)
[2026-01-13T19:08:05.735Z] [BOT] 💾 Saved posted_jobs.json: 903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:05.735Z] [BOT] 📍 [ROUTING] "GIS Technician" @ NV5 Global
[2026-01-13T19:08:05.735Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T19:08:05.990Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ NV5 Global in #📣・marketing-jobs
  ✅ Industry: GIS Technician @ NV5 Global
[2026-01-13T19:08:07.775Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ NV5 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T19:08:09.277Z] [BOT] 💾 Marked as posted: GIS Technician @ NV5 Global (instance #1)
[2026-01-13T19:08:09.278Z] [BOT] 💾 BEFORE ARCHIVING: 904 jobs in database
[2026-01-13T19:08:09.278Z] [BOT] ✅ No jobs to archive (all 904 jobs within 7-day window)
[2026-01-13T19:08:09.286Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:12.287Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T19:08:12.287Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Contract)" @ airtable
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T19:08:12.720Z] [BOT] ✅ Created forum post: 🏢 Technical Sourcer (Contract) @ airtable in #🩺・healthcare-jobs
  ✅ Industry: Technical Sourcer (Contract) @ airtable
[2026-01-13T19:08:14.501Z] [BOT] ✅ Created forum post: 🏢 Technical Sourcer (Contract) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:16.001Z] [BOT] 💾 Marked as posted: Technical Sourcer (Contract) @ airtable (instance #1)
[2026-01-13T19:08:16.001Z] [BOT] 💾 BEFORE ARCHIVING: 905 jobs in database
[2026-01-13T19:08:16.002Z] [BOT] ✅ No jobs to archive (all 905 jobs within 7-day window)
[2026-01-13T19:08:16.010Z] [BOT] 💾 Saved posted_jobs.json: 905 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:19.012Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T19:08:19.012Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2026-01-13T19:08:19.012Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:08:19.325Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
[2026-01-13T19:08:19.325Z] [BOT] ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-13T19:08:21.092Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:22.592Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2026-01-13T19:08:22.592Z] [BOT] 💾 BEFORE ARCHIVING: 906 jobs in database
[2026-01-13T19:08:22.593Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2026-01-13T19:08:22.601Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:22.602Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_4893d237 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:08:22.836Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_4893d237 Technologies in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_4893d237 Technologies
[2026-01-13T19:08:24.567Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_4893d237 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T19:08:26.069Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_4893d237 Technologies (instance #1)
💾 BEFORE ARCHIVING: 907 jobs in database
[2026-01-13T19:08:26.070Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2026-01-13T19:08:26.078Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:26.078Z] [BOT] 📍 [ROUTING] "Algorithm and Analysis Software Engineer Scientist Associate" @ ORG_9d38443e of Texas - Austin
   Category: TECH (matched: "software")
[2026-01-13T19:08:26.078Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:08:26.642Z] [BOT] ✅ Created forum post: 🏢 Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
  ✅ Industry: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-01-13T19:08:28.791Z] [BOT] ✅ Created forum post: 🏢 Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-13T19:08:28.792Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T19:08:30.293Z] [BOT] 💾 Marked as posted: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
💾 BEFORE ARCHIVING: 908 jobs in database
[2026-01-13T19:08:30.293Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2026-01-13T19:08:30.300Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
[2026-01-13T19:08:30.300Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:30.300Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ anthropic
[2026-01-13T19:08:30.300Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:08:30.548Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ anthropic in #💻・tech-jobs
[2026-01-13T19:08:30.548Z] [BOT] ✅ Industry: Software Engineer, Growth @ anthropic
[2026-01-13T19:08:32.323Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:33.823Z] [BOT] 💾 Marked as posted: Software Engineer, Growth @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 909 jobs in database
[2026-01-13T19:08:33.824Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2026-01-13T19:08:33.831Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:36.832Z] [BOT] 📌 Posting 2 jobs to #📊・JID_9910249a
[2026-01-13T19:08:36.832Z] [BOT] 📍 [ROUTING] "Senior Program Manager, Product & Platform Compliance" @ discord
   Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-13T19:08:37.344Z] [BOT] ✅ Created forum post: 🏢 Senior Program Manager, Product & Platform Compliance @ discord in #📊・JID_9910249a
  ✅ Industry: Senior Program Manager, Product & Platform Compliance @ discord
[2026-01-13T19:08:39.198Z] [BOT] ✅ Created forum post: 🏢 Senior Program Manager, Product & Platform Compliance @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:40.699Z] [BOT] 💾 Marked as posted: Senior Program Manager, Product & Platform Compliance @ discord (instance #1)
💾 BEFORE ARCHIVING: 910 jobs in database
[2026-01-13T19:08:40.699Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2026-01-13T19:08:40.707Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:40.707Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Safety" @ discord
[2026-01-13T19:08:40.707Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-13T19:08:41.004Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Safety @ discord in #📊・JID_9910249a
  ✅ Industry: Senior Technical Program Manager, Safety @ discord
[2026-01-13T19:08:42.734Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Safety @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:08:44.234Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Safety @ discord (instance #1)
[2026-01-13T19:08:44.234Z] [BOT] 💾 BEFORE ARCHIVING: 911 jobs in database
[2026-01-13T19:08:44.235Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2026-01-13T19:08:44.243Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:08:47.243Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T19:08:47.243Z] [BOT] ⏭️  Skipping duplicate: JID_06554dac (posted within 7 days)
[2026-01-13T19:08:47.243Z] [BOT] ⏭️  Skipping duplicate: JID_2fbb5b06 (posted within 7 days)
⏭️  Skipping duplicate: JID_e81b6402 (posted within 7 days)
[2026-01-13T19:08:47.243Z] [BOT] ⏭️  Skipping duplicate: JID_c313cfe5 (posted within 7 days)
[2026-01-13T19:08:47.244Z] [BOT] ⏭️  Skipping duplicate: JID_1163d0da (posted within 7 days)
⏭️  Skipping duplicate: JID_e59cfc28 (posted within 7 days)
[2026-01-13T19:08:47.244Z] [BOT] ⏭️  Skipping duplicate: JID_bc250026 (posted within 7 days)
⏭️  Skipping duplicate: JID_ec4e396f-associate_r_00043737 (posted within 7 days)
[2026-01-13T19:08:47.244Z] [BOT] ⏭️  Skipping duplicate: JID_f718e68a (posted within 7 days)
[2026-01-13T19:08:47.244Z] [BOT] ⏭️  Skipping duplicate: JID_fce8d8c4 (posted within 7 days)
[2026-01-13T19:08:47.395Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T19:08:47.555Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T19:08:47.611Z] [BOT] 📂 Loaded 3055 existing routing entries
[2026-01-13T19:08:47.666Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3065
   Timestamp: 2026-01-13T19:08:47.655Z
[2026-01-13T19:08:47.667Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
   Successful: 19
   Failed: 1
[2026-01-13T19:08:47.667Z] [BOT] Skipped: 0
[2026-01-13T19:08:47.667Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #💻・tech-jobs: 4 posts
     3. #📣・marketing-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #📊・JID_9910249a: 2 posts
[2026-01-13T19:08:47.667Z] [BOT] [STATS] Channel stats saved
[2026-01-13T19:08:49.686Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*