# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T05:06:43.623Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T05:05:50.590Z] ========================================
[2026-01-16T05:05:50.592Z] Discord Bot Execution Log
[2026-01-16T05:05:50.592Z] Environment: GitHub Actions
[2026-01-16T05:05:50.592Z] Node Version: v20.19.6
[2026-01-16T05:05:50.592Z] ========================================
[2026-01-16T05:05:50.593Z] Environment Variables Check:
[2026-01-16T05:05:50.593Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T05:05:50.593Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T05:05:50.593Z] 
Multi-Channel Configuration:
[2026-01-16T05:05:50.593Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.593Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.594Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T05:05:50.594Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T05:05:50.594Z] 
Data Files Check:
[2026-01-16T05:05:50.594Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31527 bytes)
[2026-01-16T05:05:50.601Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1032239 bytes)
[2026-01-16T05:05:50.601Z] 
========================================
[2026-01-16T05:05:50.601Z] Starting Enhanced Discord Bot...
[2026-01-16T05:05:50.601Z] ========================================
[2026-01-16T05:05:51.133Z] [BOT] ✅ Loaded V2 database: 1920 jobs
[2026-01-16T05:05:52.471Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T05:05:52.472Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T05:05:52.472Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T05:05:52.586Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Utility Analyst 1 at Bernhard
[2026-01-16T05:05:52.589Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T05:05:52.589Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T05:05:52.590Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T05:05:52.591Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T05:05:52.591Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T05:05:52.591Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T05:05:52.596Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T05:05:52.597Z] [BOT] 📍 [ROUTING] "Utility Analyst 1" @ ORG_43fee717
[2026-01-16T05:05:52.597Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T05:05:52.614Z] [BOT ERROR] (node:4366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T05:05:52.759Z] [BOT ERROR] ❌ Error posting job Utility Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Utility Analyst 1 @ Bernhard',
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
[2026-01-16T05:05:52.760Z] [BOT] ❌ Industry post failed: Utility Analyst 1
⚠️  Channel full error count: 1/5
[2026-01-16T05:05:54.494Z] [BOT ERROR] ❌ Error posting job Utility Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Utility Analyst 1 @ Bernhard',
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
[2026-01-16T05:05:54.494Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T05:05:58.995Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T05:05:58.995Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3 Group
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:05:59.248Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3 Group
[2026-01-16T05:06:00.977Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 Group in #💻・remote-usa
[2026-01-16T05:06:00.977Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T05:06:02.478Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_e5ca4df3 Group (instance #1)
[2026-01-16T05:06:02.478Z] [BOT] 💾 BEFORE ARCHIVING: 1921 jobs in database
[2026-01-16T05:06:02.480Z] [BOT] ✅ No jobs to archive (all 1921 jobs within 7-day window)
[2026-01-16T05:06:02.499Z] [BOT] 💾 Saved posted_jobs.json: 1921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:02.500Z] [BOT] 📍 [ROUTING] "Software Engineer 1 with AWS & Python" @ ORG_a35c6c02
   Category: TECH (matched: "software")
[2026-01-16T05:06:02.500Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:06:02.763Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 with AWS & Python @ ORG_a35c6c02 in #💻・tech-jobs
[2026-01-16T05:06:02.763Z] [BOT] ✅ Industry: Software Engineer 1 with AWS & Python @ ORG_a35c6c02
[2026-01-16T05:06:04.541Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 with AWS & Python @ ORG_a35c6c02 in #🌆・chicago
[2026-01-16T05:06:04.541Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-16T05:06:06.042Z] [BOT] 💾 Marked as posted: Software Engineer 1 with AWS & Python @ ORG_a35c6c02 (instance #1)
[2026-01-16T05:06:06.042Z] [BOT] 💾 BEFORE ARCHIVING: 1922 jobs in database
[2026-01-16T05:06:06.043Z] [BOT] ✅ No jobs to archive (all 1922 jobs within 7-day window)
[2026-01-16T05:06:06.058Z] [BOT] 💾 Saved posted_jobs.json: 1922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:06.058Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - iOS - iOS" @ McDonald's
[2026-01-16T05:06:06.059Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:06:06.267Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - iOS - iOS @ McDonald's in #💻・tech-jobs
[2026-01-16T05:06:06.267Z] [BOT] ✅ Industry: Software Engineer 1 - iOS - iOS @ McDonald's
[2026-01-16T05:06:07.948Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - iOS - iOS @ McDonald's in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T05:06:09.449Z] [BOT] 💾 Marked as posted: Software Engineer 1 - iOS - iOS @ McDonald's (instance #1)
[2026-01-16T05:06:09.449Z] [BOT] 💾 BEFORE ARCHIVING: 1923 jobs in database
[2026-01-16T05:06:09.451Z] [BOT] ✅ No jobs to archive (all 1923 jobs within 7-day window)
[2026-01-16T05:06:09.464Z] [BOT] 💾 Saved posted_jobs.json: 1923 active jobs
[2026-01-16T05:06:09.464Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineering, Associate" @ ORG_d6d2009d
   Category: TECH (matched: "software")
[2026-01-16T05:06:09.464Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:06:09.929Z] [BOT] ✅ Created forum post: 🏢 Software Engineering, Associate @ ORG_d6d2009d in #💻・tech-jobs
[2026-01-16T05:06:09.929Z] [BOT] ✅ Industry: Software Engineering, Associate @ ORG_d6d2009d
[2026-01-16T05:06:11.715Z] [BOT] ✅ Created forum post: 🏢 Software Engineering, Associate @ ORG_d6d2009d in #🌉・san-francisco
[2026-01-16T05:06:11.715Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T05:06:13.216Z] [BOT] 💾 Marked as posted: Software Engineering, Associate @ ORG_d6d2009d (instance #1)
[2026-01-16T05:06:13.216Z] [BOT] 💾 BEFORE ARCHIVING: 1924 jobs in database
[2026-01-16T05:06:13.218Z] [BOT] ✅ No jobs to archive (all 1924 jobs within 7-day window)
[2026-01-16T05:06:13.229Z] [BOT] 💾 Saved posted_jobs.json: 1924 active jobs
[2026-01-16T05:06:13.229Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:13.230Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate" @ ORG_1bb6fcfb
[2026-01-16T05:06:13.230Z] [BOT] Category: TECH (default)
[2026-01-16T05:06:13.230Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:06:13.428Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-16T05:06:13.428Z] [BOT] ✅ Industry: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb
[2026-01-16T05:06:15.122Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-16T05:06:15.122Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T05:06:16.622Z] [BOT] 💾 Marked as posted: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb (instance #1)
[2026-01-16T05:06:16.623Z] [BOT] 💾 BEFORE ARCHIVING: 1925 jobs in database
[2026-01-16T05:06:16.624Z] [BOT] ✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-01-16T05:06:16.637Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
[2026-01-16T05:06:16.637Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Full Stack Engineer" @ ORG_69f01140 Financial
[2026-01-16T05:06:16.637Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:06:17.013Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_69f01140 Financial in #💻・tech-jobs
[2026-01-16T05:06:17.014Z] [BOT] ✅ Industry: Full Stack Engineer @ ORG_69f01140 Financial
[2026-01-16T05:06:18.700Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_69f01140 Financial in #💻・remote-usa
[2026-01-16T05:06:18.700Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T05:06:20.203Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ ORG_69f01140 Financial (instance #1)
[2026-01-16T05:06:20.203Z] [BOT] 💾 BEFORE ARCHIVING: 1926 jobs in database
[2026-01-16T05:06:20.204Z] [BOT] ✅ No jobs to archive (all 1926 jobs within 7-day window)
[2026-01-16T05:06:20.216Z] [BOT] 💾 Saved posted_jobs.json: 1926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:23.216Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T05:06:23.217Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_2380d607 View A&M University
[2026-01-16T05:06:23.217Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T05:06:23.801Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_2380d607 View A&M University in #🤖・ai-jobs
[2026-01-16T05:06:23.801Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_2380d607 View A&M University
[2026-01-16T05:06:25.556Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_2380d607 View A&M University in #🤠・austin
[2026-01-16T05:06:25.556Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T05:06:27.056Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_2380d607 View A&M University (instance #1)
[2026-01-16T05:06:27.056Z] [BOT] 💾 BEFORE ARCHIVING: 1927 jobs in database
[2026-01-16T05:06:27.058Z] [BOT] ✅ No jobs to archive (all 1927 jobs within 7-day window)
[2026-01-16T05:06:27.072Z] [BOT] 💾 Saved posted_jobs.json: 1927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:27.072Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - TikTok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T05:06:27.072Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:06:27.291Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-16T05:06:27.291Z] [BOT] ✅ Industry: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb
[2026-01-16T05:06:29.034Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T05:06:30.535Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-16T05:06:30.535Z] [BOT] 💾 BEFORE ARCHIVING: 1928 jobs in database
[2026-01-16T05:06:30.536Z] [BOT] ✅ No jobs to archive (all 1928 jobs within 7-day window)
[2026-01-16T05:06:30.552Z] [BOT] 💾 Saved posted_jobs.json: 1928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:33.552Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T05:06:33.552Z] [BOT] 📍 [ROUTING] "Data Developer" @ ORG_a258b30f Lending Services
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:06:33.821Z] [BOT] ✅ Created forum post: 🏢 Data Developer @ ORG_a258b30f Lending Services in #📈・JID_fb739488
[2026-01-16T05:06:33.821Z] [BOT] ✅ Industry: Data Developer @ ORG_a258b30f Lending Services
[2026-01-16T05:06:35.537Z] [BOT] ✅ Created forum post: 🏢 Data Developer @ ORG_a258b30f Lending Services in #💻・remote-usa
[2026-01-16T05:06:35.537Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T05:06:37.038Z] [BOT] 💾 Marked as posted: Data Developer @ ORG_a258b30f Lending Services (instance #1)
[2026-01-16T05:06:37.038Z] [BOT] 💾 BEFORE ARCHIVING: 1929 jobs in database
[2026-01-16T05:06:37.039Z] [BOT] ✅ No jobs to archive (all 1929 jobs within 7-day window)
[2026-01-16T05:06:37.052Z] [BOT] 💾 Saved posted_jobs.json: 1929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:06:40.052Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T05:06:40.053Z] [BOT] ⏭️  Skipping duplicate: JID_56769918-tn_r37023-1 (posted within 7 days)
[2026-01-16T05:06:40.053Z] [BOT] ⏭️  Skipping duplicate: JID_27853d36 (posted within 7 days)
[2026-01-16T05:06:40.053Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_de907147-_r-079402 (posted within 7 days)
[2026-01-16T05:06:40.053Z] [BOT] ⏭️  Skipping duplicate: JID_6e2c4eb6 (posted within 7 days)
[2026-01-16T05:06:40.054Z] [BOT] ⏭️  Skipping duplicate: JID_7cf8c7ec (posted within 7 days)
[2026-01-16T05:06:40.054Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9eb8de67 (posted within 7 days)
[2026-01-16T05:06:40.054Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_583d1412 (posted within 7 days)
[2026-01-16T05:06:40.054Z] [BOT] ⏭️  Skipping duplicate: JID_0a01ff65 (posted within 7 days)
[2026-01-16T05:06:40.054Z] [BOT] ⏭️  Skipping duplicate: JID_326b4a56 (posted within 7 days)
[2026-01-16T05:06:40.165Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-16T05:06:40.332Z] [BOT] ✅ Saved pending queue: 2769 total (2749 pending, 11 enriched, 9 posted)
[2026-01-16T05:06:40.332Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T05:06:40.389Z] [BOT] 📂 Loaded 4145 existing routing entries
[2026-01-16T05:06:40.456Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T05:06:40.456Z] [BOT] Total entries: 4155
   Timestamp: 2026-01-16T05:06:40.437Z
[2026-01-16T05:06:40.457Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T05:06:40.457Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T05:06:40.457Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T05:06:40.457Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-16T05:06:40.458Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #🌉・san-francisco: 3 posts
     4. #🌆・chicago: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-16T05:06:40.458Z] [BOT] [STATS] Channel stats saved
[2026-01-16T05:06:42.483Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Utility Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Utility Analyst 1
- [BOT ERROR] ❌ Error posting job Utility Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*