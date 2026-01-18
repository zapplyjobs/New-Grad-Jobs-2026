# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T08:08:36.319Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T08:07:41.934Z] ========================================
[2026-01-18T08:07:41.936Z] Discord Bot Execution Log
[2026-01-18T08:07:41.936Z] Environment: GitHub Actions
[2026-01-18T08:07:41.936Z] Node Version: v20.19.6
[2026-01-18T08:07:41.936Z] ========================================
[2026-01-18T08:07:41.936Z] Environment Variables Check:
[2026-01-18T08:07:41.936Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T08:07:41.936Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.936Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T08:07:41.937Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T08:07:41.937Z] 
Multi-Channel Configuration:
[2026-01-18T08:07:41.937Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T08:07:41.937Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T08:07:41.938Z] 
Data Files Check:
[2026-01-18T08:07:41.938Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58932 bytes)
[2026-01-18T08:07:41.948Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1430994 bytes)
[2026-01-18T08:07:41.948Z] 
========================================
[2026-01-18T08:07:41.948Z] Starting Enhanced Discord Bot...
[2026-01-18T08:07:41.948Z] ========================================
[2026-01-18T08:07:42.472Z] [BOT] ✅ Loaded V2 database: 2642 jobs
[2026-01-18T08:07:43.196Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T08:07:43.196Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T08:07:43.196Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T08:07:43.313Z] [BOT] ✅ Loaded pending queue: 2854 total (2834 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer at Carnegie Mellon University
[2026-01-18T08:07:43.317Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T08:07:43.317Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T08:07:43.317Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T08:07:43.318Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T08:07:43.318Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T08:07:43.322Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-18T08:07:43.323Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_15a5b314 Mellon University
[2026-01-18T08:07:43.323Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T08:07:43.328Z] [BOT ERROR] (node:2696) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T08:07:43.488Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ ORG_15a5b314 Mellon University',
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
[2026-01-18T08:07:43.488Z] [BOT] ❌ Industry post failed: Data Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T08:07:45.254Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_15a5b314 Mellon University in #💻・remote-usa
[2026-01-18T08:07:45.254Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T08:07:46.756Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-18T08:07:46.756Z] [BOT] 💾 BEFORE ARCHIVING: 2643 jobs in database
[2026-01-18T08:07:46.758Z] [BOT] ✅ No jobs to archive (all 2643 jobs within 7-day window)
[2026-01-18T08:07:46.781Z] [BOT] 💾 Saved posted_jobs.json: 2643 active jobs
[2026-01-18T08:07:46.781Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer" @ ORG_44ebd2cb
[2026-01-18T08:07:46.782Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T08:07:48.448Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
[2026-01-18T08:07:48.448Z] [BOT] ✅ Industry: Software Engineer @ ORG_44ebd2cb
[2026-01-18T08:07:50.230Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_44ebd2cb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:07:51.730Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_44ebd2cb (instance #1)
[2026-01-18T08:07:51.731Z] [BOT] 💾 BEFORE ARCHIVING: 2644 jobs in database
[2026-01-18T08:07:51.732Z] [BOT] ✅ No jobs to archive (all 2644 jobs within 7-day window)
[2026-01-18T08:07:51.749Z] [BOT] 💾 Saved posted_jobs.json: 2644 active jobs
[2026-01-18T08:07:51.750Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T08:07:51.751Z] [BOT] 📍 [ROUTING] "Power Analyst - Power" @ ORG_54f9eaef International Group (SIG)
[2026-01-18T08:07:51.751Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T08:07:51.944Z] [BOT] ✅ Created forum post: 🏢 Power Analyst - Power @ ORG_54f9eaef International Group (SIG) in #🤖・ai-jobs
  ✅ Industry: Power Analyst - Power @ ORG_54f9eaef International Group (SIG)
[2026-01-18T08:07:53.627Z] [BOT] ✅ Created forum post: 🏢 Power Analyst - Power @ ORG_54f9eaef International Group (SIG) in #💻・remote-usa
[2026-01-18T08:07:53.627Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T08:07:55.128Z] [BOT] 💾 Marked as posted: Power Analyst - Power @ ORG_54f9eaef International Group (SIG) (instance #1)
[2026-01-18T08:07:55.128Z] [BOT] 💾 BEFORE ARCHIVING: 2645 jobs in database
[2026-01-18T08:07:55.130Z] [BOT] ✅ No jobs to archive (all 2645 jobs within 7-day window)
[2026-01-18T08:07:55.148Z] [BOT] 💾 Saved posted_jobs.json: 2645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:07:55.149Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_39417f32 Allen
[2026-01-18T08:07:55.150Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T08:07:55.471Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #🤖・ai-jobs
[2026-01-18T08:07:55.471Z] [BOT] ✅ Industry: Data Scientist @ ORG_39417f32 Allen
[2026-01-18T08:07:57.372Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_39417f32 Allen in #💻・remote-usa
[2026-01-18T08:07:57.373Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T08:07:58.874Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_39417f32 Allen (instance #1)
[2026-01-18T08:07:58.875Z] [BOT] 💾 BEFORE ARCHIVING: 2646 jobs in database
[2026-01-18T08:07:58.876Z] [BOT] ✅ No jobs to archive (all 2646 jobs within 7-day window)
[2026-01-18T08:07:58.894Z] [BOT] 💾 Saved posted_jobs.json: 2646 active jobs
[2026-01-18T08:07:58.894Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T08:07:58.895Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_eb5a1852
[2026-01-18T08:07:58.895Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T08:07:58.895Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T08:07:59.104Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_eb5a1852 in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_eb5a1852
[2026-01-18T08:08:00.874Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_eb5a1852 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T08:08:02.375Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_eb5a1852 (instance #1)
[2026-01-18T08:08:02.375Z] [BOT] 💾 BEFORE ARCHIVING: 2647 jobs in database
[2026-01-18T08:08:02.377Z] [BOT] ✅ No jobs to archive (all 2647 jobs within 7-day window)
[2026-01-18T08:08:02.394Z] [BOT] 💾 Saved posted_jobs.json: 2647 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:05.394Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T08:08:05.395Z] [BOT] 📍 [ROUTING] "AI and Data Science Administrator - Part-time/28 hrs per week" @ ORG_eb6c7f52 Young University - Provo
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T08:08:05.395Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T08:08:05.658Z] [BOT] ✅ Created forum post: 🏢 AI and Data Science Administrator - Part-time/28 hrs per week @ ORG_eb6c7f52 Young University - Provo in #📈・JID_fb739488
  ✅ Industry: AI and Data Science Administrator - Part-time/28 hrs per week @ ORG_eb6c7f52 Young University - Provo
[2026-01-18T08:08:07.370Z] [BOT] ✅ Created forum post: 🏢 AI and Data Science Administrator - Part-time/28 hrs per week @ ORG_eb6c7f52 Young University - Provo in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:08:08.872Z] [BOT] 💾 Marked as posted: AI and Data Science Administrator - Part-time/28 hrs per week @ ORG_eb6c7f52 Young University - Provo (instance #1)
[2026-01-18T08:08:08.872Z] [BOT] 💾 BEFORE ARCHIVING: 2648 jobs in database
[2026-01-18T08:08:08.874Z] [BOT] ✅ No jobs to archive (all 2648 jobs within 7-day window)
[2026-01-18T08:08:08.891Z] [BOT] 💾 Saved posted_jobs.json: 2648 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:08.892Z] [BOT] 📍 [ROUTING] "Associate Azure Data Engineer" @ ORG_c910d474 Dynamics
[2026-01-18T08:08:08.892Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T08:08:09.241Z] [BOT] ✅ Created forum post: 🏢 Associate Azure Data Engineer @ ORG_c910d474 Dynamics in #📈・JID_fb739488
  ✅ Industry: Associate Azure Data Engineer @ ORG_c910d474 Dynamics
[2026-01-18T08:08:10.970Z] [BOT] ✅ Created forum post: 🏢 Associate Azure Data Engineer @ ORG_c910d474 Dynamics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:08:12.472Z] [BOT] 💾 Marked as posted: Associate Azure Data Engineer @ ORG_c910d474 Dynamics (instance #1)
[2026-01-18T08:08:12.472Z] [BOT] 💾 BEFORE ARCHIVING: 2649 jobs in database
[2026-01-18T08:08:12.474Z] [BOT] ✅ No jobs to archive (all 2649 jobs within 7-day window)
[2026-01-18T08:08:12.491Z] [BOT] 💾 Saved posted_jobs.json: 2649 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:15.493Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T08:08:15.493Z] [BOT] 📍 [ROUTING] "Software Engineer - Engineering Productivity - Infotainment Platform" @ ORG_0555fb46
[2026-01-18T08:08:15.493Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:08:15.792Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46
[2026-01-18T08:08:17.813Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:08:19.314Z] [BOT] 💾 Marked as posted: Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46 (instance #1)
[2026-01-18T08:08:19.315Z] [BOT] 💾 BEFORE ARCHIVING: 2650 jobs in database
[2026-01-18T08:08:19.316Z] [BOT] ✅ No jobs to archive (all 2650 jobs within 7-day window)
[2026-01-18T08:08:19.333Z] [BOT] 💾 Saved posted_jobs.json: 2650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:19.334Z] [BOT] 📍 [ROUTING] "Engineer 2 - Product" @ ORG_230fe79b Technology
   Category: TECH (matched: "engineer/engineering")
[2026-01-18T08:08:19.334Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:08:19.633Z] [BOT] ✅ Created forum post: 🏢 Engineer 2 - Product @ ORG_230fe79b Technology in #💻・tech-jobs
  ✅ Industry: Engineer 2 - Product @ ORG_230fe79b Technology
[2026-01-18T08:08:21.478Z] [BOT] ✅ Created forum post: 🏢 Engineer 2 - Product @ ORG_230fe79b Technology in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:08:22.979Z] [BOT] 💾 Marked as posted: Engineer 2 - Product @ ORG_230fe79b Technology (instance #1)
[2026-01-18T08:08:22.979Z] [BOT] 💾 BEFORE ARCHIVING: 2651 jobs in database
[2026-01-18T08:08:22.981Z] [BOT] ✅ No jobs to archive (all 2651 jobs within 7-day window)
[2026-01-18T08:08:22.996Z] [BOT] 💾 Saved posted_jobs.json: 2651 active jobs
[2026-01-18T08:08:22.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:25.996Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T08:08:25.997Z] [BOT] 📍 [ROUTING] "Admitting Representative" @ ORG_56eee111 Healthcare
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T08:08:26.368Z] [BOT] ✅ Created forum post: 🏢 Admitting Representative @ ORG_56eee111 Healthcare in #📣・marketing-jobs
  ✅ Industry: Admitting Representative @ ORG_56eee111 Healthcare
[2026-01-18T08:08:28.275Z] [BOT] ✅ Created forum post: 🏢 Admitting Representative @ ORG_56eee111 Healthcare in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:08:29.776Z] [BOT] 💾 Marked as posted: Admitting Representative @ ORG_56eee111 Healthcare (instance #1)
[2026-01-18T08:08:29.777Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-18T08:08:29.778Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-18T08:08:29.795Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:08:32.796Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T08:08:32.797Z] [BOT] ⏭️  Skipping duplicate: JID_02aca0ec-services_2024012 (posted within 7 days)
[2026-01-18T08:08:32.798Z] [BOT] ⏭️  Skipping duplicate: JID_cea883ac-_jr-7678 (posted within 7 days)
⏭️  Skipping duplicate: JID_d30d38d3 (posted within 7 days)
⏭️  Skipping duplicate: JID_873e9a01 (posted within 7 days)
⏭️  Skipping duplicate: JID_319f4ddd (posted within 7 days)
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_d2776e29-scientist_r0227412-1 (posted within 7 days)
[2026-01-18T08:08:32.798Z] [BOT] ⏭️  Skipping duplicate: JID_14eea817 (posted within 7 days)
⏭️  Skipping duplicate: JID_2b05ace0 (posted within 7 days)
[2026-01-18T08:08:32.798Z] [BOT] ⏭️  Skipping duplicate: JID_4a793790-product_r1840-25 (posted within 7 days)
[2026-01-18T08:08:32.798Z] [BOT] ⏭️  Skipping duplicate: JID_75620a2f (posted within 7 days)
[2026-01-18T08:08:32.927Z] [BOT] ✅ Loaded pending queue: 2854 total (2834 pending, 20 enriched, 0 posted)
[2026-01-18T08:08:33.097Z] [BOT] ✅ Saved pending queue: 2854 total (2834 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T08:08:33.097Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T08:08:33.156Z] [BOT] 📂 Loaded 4805 existing routing entries
[2026-01-18T08:08:33.225Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T08:08:33.226Z] [BOT] Total entries: 4815
   Timestamp: 2026-01-18T08:08:33.206Z
[2026-01-18T08:08:33.226Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T08:08:33.226Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-18T08:08:33.226Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・remote-usa: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🌉・san-francisco: 3 posts
[2026-01-18T08:08:33.227Z] [BOT] 4. #📈・JID_fb739488: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-18T08:08:33.227Z] [BOT] [STATS] Channel stats saved
[2026-01-18T08:08:35.253Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2696) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*