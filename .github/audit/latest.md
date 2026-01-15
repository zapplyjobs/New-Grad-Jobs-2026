# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T22:45:02.145Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T22:44:18.067Z] ========================================
[2026-01-15T22:44:18.069Z] Discord Bot Execution Log
[2026-01-15T22:44:18.069Z] Environment: GitHub Actions
[2026-01-15T22:44:18.069Z] Node Version: v20.19.6
[2026-01-15T22:44:18.069Z] ========================================
[2026-01-15T22:44:18.070Z] Environment Variables Check:
[2026-01-15T22:44:18.070Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T22:44:18.070Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.070Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T22:44:18.070Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T22:44:18.070Z] 
Multi-Channel Configuration:
[2026-01-15T22:44:18.070Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.070Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.070Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T22:44:18.071Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T22:44:18.071Z] 
Data Files Check:
[2026-01-15T22:44:18.072Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69696 bytes)
[2026-01-15T22:44:18.080Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 996195 bytes)
[2026-01-15T22:44:18.080Z] 
========================================
[2026-01-15T22:44:18.080Z] Starting Enhanced Discord Bot...
[2026-01-15T22:44:18.080Z] ========================================
[2026-01-15T22:44:18.621Z] [BOT] ✅ Loaded V2 database: 1853 jobs
[2026-01-15T22:44:19.230Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T22:44:19.230Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T22:44:19.230Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T22:44:19.342Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Research Engineer - Music at spotify
[2026-01-15T22:44:19.345Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T22:44:19.346Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T22:44:19.346Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T22:44:19.347Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T22:44:19.347Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners: nyc, colorado
[2026-01-15T22:44:19.347Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T22:44:19.350Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-15T22:44:19.351Z] [BOT] 📍 [ROUTING] "Staff Research Engineer - Music" @ spotify
[2026-01-15T22:44:19.351Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T22:44:19.368Z] [BOT ERROR] (node:3537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T22:44:19.482Z] [BOT ERROR] ❌ Error posting job Staff Research Engineer - Music: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Research Engineer - Music @ spotify',
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
[2026-01-15T22:44:19.482Z] [BOT] ❌ Industry post failed: Staff Research Engineer - Music
⚠️  Channel full error count: 1/5
[2026-01-15T22:44:21.232Z] [BOT] ✅ Created forum post: 🏢 Staff Research Engineer - Music @ spotify in #🗽・new-york
[2026-01-15T22:44:21.233Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T22:44:22.734Z] [BOT] 💾 Marked as posted: Staff Research Engineer - Music @ spotify (instance #1)
[2026-01-15T22:44:22.734Z] [BOT] 💾 BEFORE ARCHIVING: 1854 jobs in database
[2026-01-15T22:44:22.736Z] [BOT] ✅ No jobs to archive (all 1854 jobs within 7-day window)
[2026-01-15T22:44:22.752Z] [BOT] 💾 Saved posted_jobs.json: 1854 active jobs
[2026-01-15T22:44:22.753Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:22.754Z] [BOT] 📍 [ROUTING] "Senior Research Engineer - Music" @ spotify
[2026-01-15T22:44:22.754Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T22:44:23.838Z] [BOT] ✅ Created forum post: 🏢 Senior Research Engineer - Music @ spotify in #🤖・ai-jobs
[2026-01-15T22:44:23.838Z] [BOT] ✅ Industry: Senior Research Engineer - Music @ spotify
[2026-01-15T22:44:25.531Z] [BOT] ✅ Created forum post: 🏢 Senior Research Engineer - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T22:44:27.031Z] [BOT] 💾 Marked as posted: Senior Research Engineer - Music @ spotify (instance #1)
💾 BEFORE ARCHIVING: 1855 jobs in database
[2026-01-15T22:44:27.033Z] [BOT] ✅ No jobs to archive (all 1855 jobs within 7-day window)
[2026-01-15T22:44:27.045Z] [BOT] 💾 Saved posted_jobs.json: 1855 active jobs
[2026-01-15T22:44:27.045Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:27.046Z] [BOT] 📍 [ROUTING] "Principal Research Scientist - Music" @ spotify
[2026-01-15T22:44:27.046Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T22:44:27.238Z] [BOT] ✅ Created forum post: 🏢 Principal Research Scientist - Music @ spotify in #🤖・ai-jobs
[2026-01-15T22:44:27.238Z] [BOT] ✅ Industry: Principal Research Scientist - Music @ spotify
[2026-01-15T22:44:28.931Z] [BOT] ✅ Created forum post: 🏢 Principal Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T22:44:30.431Z] [BOT] 💾 Marked as posted: Principal Research Scientist - Music @ spotify (instance #1)
[2026-01-15T22:44:30.431Z] [BOT] 💾 BEFORE ARCHIVING: 1856 jobs in database
[2026-01-15T22:44:30.433Z] [BOT] ✅ No jobs to archive (all 1856 jobs within 7-day window)
[2026-01-15T22:44:30.448Z] [BOT] 💾 Saved posted_jobs.json: 1856 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:30.449Z] [BOT] 📍 [ROUTING] "Staff Research Scientist - Music" @ spotify
[2026-01-15T22:44:30.450Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T22:44:30.674Z] [BOT] ✅ Created forum post: 🏢 Staff Research Scientist - Music @ spotify in #🤖・ai-jobs
[2026-01-15T22:44:30.674Z] [BOT] ✅ Industry: Staff Research Scientist - Music @ spotify
[2026-01-15T22:44:32.342Z] [BOT] ✅ Created forum post: 🏢 Staff Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T22:44:33.843Z] [BOT] 💾 Marked as posted: Staff Research Scientist - Music @ spotify (instance #1)
[2026-01-15T22:44:33.843Z] [BOT] 💾 BEFORE ARCHIVING: 1857 jobs in database
[2026-01-15T22:44:33.845Z] [BOT] ✅ No jobs to archive (all 1857 jobs within 7-day window)
[2026-01-15T22:44:33.857Z] [BOT] 💾 Saved posted_jobs.json: 1857 active jobs
[2026-01-15T22:44:33.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:33.858Z] [BOT] 📍 [ROUTING] "Senior Research Scientist - Music" @ spotify
[2026-01-15T22:44:33.858Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T22:44:33.995Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist - Music @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Research Scientist - Music @ spotify
[2026-01-15T22:44:35.636Z] [BOT] ✅ Created forum post: 🏢 Senior Research Scientist - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T22:44:37.137Z] [BOT] 💾 Marked as posted: Senior Research Scientist - Music @ spotify (instance #1)
[2026-01-15T22:44:37.137Z] [BOT] 💾 BEFORE ARCHIVING: 1858 jobs in database
[2026-01-15T22:44:37.138Z] [BOT] ✅ No jobs to archive (all 1858 jobs within 7-day window)
[2026-01-15T22:44:37.149Z] [BOT] 💾 Saved posted_jobs.json: 1858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:37.149Z] [BOT] 📍 [ROUTING] "Senior Content Accountant" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-15T22:44:37.149Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-15T22:44:37.395Z] [BOT] ✅ Created forum post: 🏢 Senior Content Accountant @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Content Accountant @ spotify
[2026-01-15T22:44:39.161Z] [BOT] ✅ Created forum post: 🏢 Senior Content Accountant @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T22:44:40.662Z] [BOT] 💾 Marked as posted: Senior Content Accountant @ spotify (instance #1)
[2026-01-15T22:44:40.662Z] [BOT] 💾 BEFORE ARCHIVING: 1859 jobs in database
[2026-01-15T22:44:40.663Z] [BOT] ✅ No jobs to archive (all 1859 jobs within 7-day window)
[2026-01-15T22:44:40.674Z] [BOT] 💾 Saved posted_jobs.json: 1859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:43.675Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T22:44:43.675Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2026-01-15T22:44:43.675Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:44:44.022Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2026-01-15T22:44:44.022Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2026-01-15T22:44:45.666Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-15T22:44:45.666Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T22:44:47.167Z] [BOT] 💾 Marked as posted: Software Development Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-15T22:44:47.167Z] [BOT] 💾 BEFORE ARCHIVING: 1860 jobs in database
[2026-01-15T22:44:47.168Z] [BOT] ✅ No jobs to archive (all 1860 jobs within 7-day window)
[2026-01-15T22:44:47.183Z] [BOT] 💾 Saved posted_jobs.json: 1860 active jobs
[2026-01-15T22:44:47.183Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:47.184Z] [BOT] 📍 [ROUTING] "Growth Engineering - Mobile" @ ORG_91268016
[2026-01-15T22:44:47.184Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2026-01-15T22:44:47.184Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:44:47.731Z] [BOT] ✅ Created forum post: 🏢 Growth Engineering - Mobile @ ORG_91268016 in #💻・tech-jobs
[2026-01-15T22:44:47.731Z] [BOT] ✅ Industry: Growth Engineering - Mobile @ ORG_91268016
[2026-01-15T22:44:49.601Z] [BOT] ✅ Created forum post: 🏢 Growth Engineering - Mobile @ ORG_91268016 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T22:44:51.103Z] [BOT] 💾 Marked as posted: Growth Engineering - Mobile @ ORG_91268016 (instance #1)
[2026-01-15T22:44:51.103Z] [BOT] 💾 BEFORE ARCHIVING: 1861 jobs in database
[2026-01-15T22:44:51.104Z] [BOT] ✅ No jobs to archive (all 1861 jobs within 7-day window)
[2026-01-15T22:44:51.119Z] [BOT] 💾 Saved posted_jobs.json: 1861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:51.119Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_7f34df62ings
[2026-01-15T22:44:51.119Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:44:51.256Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_7f34df62ings in #💻・tech-jobs
[2026-01-15T22:44:51.256Z] [BOT] ✅ Industry: Software Engineer @ ORG_7f34df62ings
[2026-01-15T22:44:52.899Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_7f34df62ings in #💻・remote-usa
[2026-01-15T22:44:52.899Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T22:44:54.401Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_7f34df62ings (instance #1)
[2026-01-15T22:44:54.401Z] [BOT] 💾 BEFORE ARCHIVING: 1862 jobs in database
[2026-01-15T22:44:54.402Z] [BOT] ✅ No jobs to archive (all 1862 jobs within 7-day window)
[2026-01-15T22:44:54.414Z] [BOT] 💾 Saved posted_jobs.json: 1862 active jobs
[2026-01-15T22:44:54.415Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:54.415Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-01-15T22:44:54.415Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:44:54.565Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-15T22:44:54.565Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-15T22:44:56.066Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-15T22:44:56.067Z] [BOT] 💾 BEFORE ARCHIVING: 1863 jobs in database
[2026-01-15T22:44:56.068Z] [BOT] ✅ No jobs to archive (all 1863 jobs within 7-day window)
[2026-01-15T22:44:56.079Z] [BOT] 💾 Saved posted_jobs.json: 1863 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:44:59.080Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T22:44:59.081Z] [BOT] ⏭️  Skipping duplicate: JID_59b63486 (posted within 7 days)
[2026-01-15T22:44:59.081Z] [BOT] ⏭️  Skipping duplicate: JID_33936fee (posted within 7 days)
[2026-01-15T22:44:59.081Z] [BOT] ⏭️  Skipping duplicate: JID_3184f7b9 (posted within 7 days)
[2026-01-15T22:44:59.081Z] [BOT] ⏭️  Skipping duplicate: JID_1bbc12f0 (posted within 7 days)
⏭️  Skipping duplicate: JID_4d3af71c (posted within 7 days)
[2026-01-15T22:44:59.081Z] [BOT] ⏭️  Skipping duplicate: JID_b18dfc7e (posted within 7 days)
⏭️  Skipping duplicate: JID_d46d4f50 (posted within 7 days)
[2026-01-15T22:44:59.082Z] [BOT] ⏭️  Skipping duplicate: JID_8961d017 (posted within 7 days)
⏭️  Skipping duplicate: JID_30015f1e-engineer_jr13105-3 (posted within 7 days)
[2026-01-15T22:44:59.082Z] [BOT] ⏭️  Skipping duplicate: JID_3f8d080c (posted within 7 days)
[2026-01-15T22:44:59.196Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[2026-01-15T22:44:59.358Z] [BOT] ✅ Saved pending queue: 2750 total (2730 pending, 10 enriched, 10 posted)
[2026-01-15T22:44:59.358Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T22:44:59.413Z] [BOT] 📂 Loaded 4045 existing routing entries
[2026-01-15T22:44:59.477Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4055
   Timestamp: 2026-01-15T22:44:59.461Z
[2026-01-15T22:44:59.478Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 19
[2026-01-15T22:44:59.478Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-15T22:44:59.478Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #🗽・new-york: 6 posts
[2026-01-15T22:44:59.479Z] [BOT] 2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 4 posts
     4. #🌉・san-francisco: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-15T22:44:59.479Z] [BOT] [STATS] Channel stats saved
[2026-01-15T22:45:01.504Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Staff Research Engineer - Music: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Research Engineer - Music
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*