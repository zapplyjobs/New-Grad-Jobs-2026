# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T08:49:26.189Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T08:48:35.943Z] ========================================
[2026-01-16T08:48:35.945Z] Discord Bot Execution Log
[2026-01-16T08:48:35.945Z] Environment: GitHub Actions
[2026-01-16T08:48:35.945Z] Node Version: v20.19.6
[2026-01-16T08:48:35.945Z] ========================================
[2026-01-16T08:48:35.945Z] Environment Variables Check:
[2026-01-16T08:48:35.945Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T08:48:35.945Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.945Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T08:48:35.946Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T08:48:35.946Z] 
Multi-Channel Configuration:
[2026-01-16T08:48:35.946Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T08:48:35.946Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T08:48:35.946Z] 
Data Files Check:
[2026-01-16T08:48:35.947Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27802 bytes)
[2026-01-16T08:48:35.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1084534 bytes)
[2026-01-16T08:48:35.955Z] 
========================================
[2026-01-16T08:48:35.955Z] Starting Enhanced Discord Bot...
[2026-01-16T08:48:35.955Z] ========================================
[2026-01-16T08:48:36.484Z] [BOT] ✅ Loaded V2 database: 2011 jobs
[2026-01-16T08:48:37.105Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T08:48:37.105Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T08:48:37.105Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T08:48:37.217Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Reference Data Analyst Junior at Citi
[2026-01-16T08:48:37.221Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T08:48:37.222Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T08:48:37.222Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T08:48:37.223Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T08:48:37.223Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T08:48:37.223Z] [BOT] - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T08:48:37.227Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T08:48:37.227Z] [BOT] 📍 [ROUTING] "Reference Data Analyst Junior" @ ORG_e9591c52
[2026-01-16T08:48:37.227Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T08:48:37.227Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T08:48:37.244Z] [BOT ERROR] (node:3351) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T08:48:37.374Z] [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Reference Data Analyst Junior @ Citi',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2026-01-16T08:48:37.374Z] [BOT] ❌ Industry post failed: Reference Data Analyst Junior
⚠️  Channel full error count: 1/5
[2026-01-16T08:48:39.079Z] [BOT] ✅ Created forum post: 🏢 Reference Data Analyst Junior @ ORG_e9591c52 in #🗽・new-york
[2026-01-16T08:48:39.080Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T08:48:40.581Z] [BOT] 💾 Marked as posted: Reference Data Analyst Junior @ ORG_e9591c52 (instance #1)
[2026-01-16T08:48:40.582Z] [BOT] 💾 BEFORE ARCHIVING: 2012 jobs in database
[2026-01-16T08:48:40.583Z] [BOT] ✅ No jobs to archive (all 2012 jobs within 7-day window)
[2026-01-16T08:48:40.600Z] [BOT] 💾 Saved posted_jobs.json: 2012 active jobs
[2026-01-16T08:48:40.600Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:48:43.601Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T08:48:43.601Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:48:43.815Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2026-01-16T08:48:45.485Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #🚌・boston
[2026-01-16T08:48:45.485Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T08:48:46.986Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_2c6b11e0 (instance #1)
[2026-01-16T08:48:46.987Z] [BOT] 💾 BEFORE ARCHIVING: 2013 jobs in database
[2026-01-16T08:48:46.988Z] [BOT] ✅ No jobs to archive (all 2013 jobs within 7-day window)
[2026-01-16T08:48:47.003Z] [BOT] 💾 Saved posted_jobs.json: 2013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:48:47.004Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer, AI" @ ORG_0890f456
[2026-01-16T08:48:47.004Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:48:47.268Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer, AI @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Developer Technology Engineer, AI @ ORG_0890f456
[2026-01-16T08:48:49.283Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer, AI @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T08:48:50.784Z] [BOT] 💾 Marked as posted: Developer Technology Engineer, AI @ ORG_0890f456 (instance #1)
[2026-01-16T08:48:50.784Z] [BOT] 💾 BEFORE ARCHIVING: 2014 jobs in database
[2026-01-16T08:48:50.785Z] [BOT] ✅ No jobs to archive (all 2014 jobs within 7-day window)
[2026-01-16T08:48:50.800Z] [BOT] 💾 Saved posted_jobs.json: 2014 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:48:50.800Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_346f8710
[2026-01-16T08:48:50.800Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:48:51.150Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_346f8710 in #💻・tech-jobs
[2026-01-16T08:48:51.150Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_346f8710
[2026-01-16T08:48:52.868Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_346f8710 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T08:48:54.369Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career @ ORG_346f8710 (instance #1)
[2026-01-16T08:48:54.370Z] [BOT] 💾 BEFORE ARCHIVING: 2015 jobs in database
[2026-01-16T08:48:54.371Z] [BOT] ✅ No jobs to archive (all 2015 jobs within 7-day window)
[2026-01-16T08:48:54.384Z] [BOT] 💾 Saved posted_jobs.json: 2015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:48:54.384Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c5cf5d7d Group
[2026-01-16T08:48:54.385Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:48:54.665Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c5cf5d7d Group in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_c5cf5d7d Group
[2026-01-16T08:48:56.348Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c5cf5d7d Group in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T08:48:57.849Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c5cf5d7d Group (instance #1)
[2026-01-16T08:48:57.849Z] [BOT] 💾 BEFORE ARCHIVING: 2016 jobs in database
[2026-01-16T08:48:57.851Z] [BOT] ✅ No jobs to archive (all 2016 jobs within 7-day window)
[2026-01-16T08:48:57.865Z] [BOT] 💾 Saved posted_jobs.json: 2016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:48:57.866Z] [BOT] 📍 [ROUTING] "Backend Software Engineer" @ ORG_175f350d
[2026-01-16T08:48:57.866Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:48:58.214Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_175f350d in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer @ ORG_175f350d
[2026-01-16T08:49:00.103Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_175f350d in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T08:49:01.604Z] [BOT] 💾 Marked as posted: Backend Software Engineer @ ORG_175f350d (instance #1)
[2026-01-16T08:49:01.604Z] [BOT] 💾 BEFORE ARCHIVING: 2017 jobs in database
[2026-01-16T08:49:01.606Z] [BOT] ✅ No jobs to archive (all 2017 jobs within 7-day window)
[2026-01-16T08:49:01.618Z] [BOT] 💾 Saved posted_jobs.json: 2017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:01.618Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer" @ ORG_b1e645a8
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:49:01.854Z] [BOT] ✅ Created forum post: 🏢 Associate, Software Engineer @ ORG_b1e645a8 in #💻・tech-jobs
  ✅ Industry: Associate, Software Engineer @ ORG_b1e645a8
[2026-01-16T08:49:03.739Z] [BOT] ✅ Created forum post: 🏢 Associate, Software Engineer @ ORG_b1e645a8 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T08:49:05.241Z] [BOT] 💾 Marked as posted: Associate, Software Engineer @ ORG_b1e645a8 (instance #1)
[2026-01-16T08:49:05.241Z] [BOT] 💾 BEFORE ARCHIVING: 2018 jobs in database
[2026-01-16T08:49:05.242Z] [BOT] ✅ No jobs to archive (all 2018 jobs within 7-day window)
[2026-01-16T08:49:05.255Z] [BOT] 💾 Saved posted_jobs.json: 2018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:05.255Z] [BOT] 💾 Marked as posted: Associate, Software Engineer @ ORG_b1e645a8 (instance #1)
[2026-01-16T08:49:05.255Z] [BOT] 💾 BEFORE ARCHIVING: 2019 jobs in database
[2026-01-16T08:49:05.257Z] [BOT] ✅ No jobs to archive (all 2019 jobs within 7-day window)
[2026-01-16T08:49:05.268Z] [BOT] 💾 Saved posted_jobs.json: 2019 active jobs
[2026-01-16T08:49:05.268Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:05.268Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_2786613c Engineering
[2026-01-16T08:49:05.268Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:49:05.545Z] [BOT] ✅ Created forum post: 🏢 Jr. Software Engineer @ ORG_2786613c Engineering in #💻・tech-jobs
  ✅ Industry: Jr. Software Engineer @ ORG_2786613c Engineering
[2026-01-16T08:49:07.289Z] [BOT] ✅ Created forum post: 🏢 Jr. Software Engineer @ ORG_2786613c Engineering in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T08:49:08.790Z] [BOT] 💾 Marked as posted: Jr. Software Engineer @ ORG_2786613c Engineering (instance #1)
[2026-01-16T08:49:08.791Z] [BOT] 💾 BEFORE ARCHIVING: 2020 jobs in database
[2026-01-16T08:49:08.792Z] [BOT] ✅ No jobs to archive (all 2020 jobs within 7-day window)
[2026-01-16T08:49:08.804Z] [BOT] 💾 Saved posted_jobs.json: 2020 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:11.806Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T08:49:11.806Z] [BOT] 📍 [ROUTING] "Assistant Scientist - Cnm" @ ORG_a867f63f National Laboratory
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T08:49:12.001Z] [BOT] ✅ Created forum post: 🏢 Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #📣・marketing-jobs
  ✅ Industry: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory
[2026-01-16T08:49:13.737Z] [BOT] ✅ Created forum post: 🏢 Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T08:49:15.238Z] [BOT] 💾 Marked as posted: Assistant Scientist - Cnm @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-16T08:49:15.238Z] [BOT] 💾 BEFORE ARCHIVING: 2021 jobs in database
[2026-01-16T08:49:15.240Z] [BOT] ✅ No jobs to archive (all 2021 jobs within 7-day window)
[2026-01-16T08:49:15.253Z] [BOT] 💾 Saved posted_jobs.json: 2021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:18.254Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T08:49:18.254Z] [BOT] 📍 [ROUTING] "Product Marketing Manager " @ supabase
[2026-01-16T08:49:18.254Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-16T08:49:18.475Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager  @ supabase in #🤖・ai-jobs
[2026-01-16T08:49:18.475Z] [BOT] ✅ Industry: Product Marketing Manager  @ supabase
[2026-01-16T08:49:19.977Z] [BOT] 💾 Marked as posted: Product Marketing Manager  @ supabase (instance #1)
[2026-01-16T08:49:19.977Z] [BOT] 💾 BEFORE ARCHIVING: 2022 jobs in database
[2026-01-16T08:49:19.978Z] [BOT] ✅ No jobs to archive (all 2022 jobs within 7-day window)
[2026-01-16T08:49:19.992Z] [BOT] 💾 Saved posted_jobs.json: 2022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:49:22.993Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T08:49:22.993Z] [BOT] ⏭️  Skipping duplicate: JID_ae0ea2d7-junior_25905888 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_1f1ccda0 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_67340486-2025_jr2003035 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_698aa5c9-_421023 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_59fa8df9 (posted within 7 days)
⏭️  Skipping duplicate: JID_823c1036 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_aecec8b5 (posted within 7 days)
⏭️  Skipping duplicate: JID_8fd8a828 (posted within 7 days)
[2026-01-16T08:49:22.994Z] [BOT] ⏭️  Skipping duplicate: JID_94a33323 (posted within 7 days)
[2026-01-16T08:49:22.995Z] [BOT] ⏭️  Skipping duplicate: JID_44d618c5 (posted within 7 days)
[2026-01-16T08:49:23.101Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[2026-01-16T08:49:23.266Z] [BOT] ✅ Saved pending queue: 2763 total (2743 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T08:49:23.266Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T08:49:23.324Z] [BOT] 📂 Loaded 4235 existing routing entries
[2026-01-16T08:49:23.389Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4245
[2026-01-16T08:49:23.390Z] [BOT] Timestamp: 2026-01-16T08:49:23.372Z
[2026-01-16T08:49:23.393Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・new-york: 2 posts
     3. #🤠・austin: 2 posts
     4. #🚌・boston: 1 posts
     5. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-16T08:49:25.414Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3351) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Reference Data Analyst Junior
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*