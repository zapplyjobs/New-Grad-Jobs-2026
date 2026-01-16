# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T07:54:43.934Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T07:53:53.613Z] ========================================
[2026-01-16T07:53:53.615Z] Discord Bot Execution Log
[2026-01-16T07:53:53.615Z] Environment: GitHub Actions
[2026-01-16T07:53:53.615Z] Node Version: v20.19.6
[2026-01-16T07:53:53.615Z] ========================================
[2026-01-16T07:53:53.615Z] Environment Variables Check:
[2026-01-16T07:53:53.615Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T07:53:53.615Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.615Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T07:53:53.615Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T07:53:53.615Z] 
Multi-Channel Configuration:
[2026-01-16T07:53:53.616Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T07:53:53.616Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T07:53:53.616Z] 
Data Files Check:
[2026-01-16T07:53:53.617Z] .github/data/new_jobs.json: ✅ Exists (10 items, 11777 bytes)
[2026-01-16T07:53:53.624Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1069022 bytes)
[2026-01-16T07:53:53.624Z] 
========================================
[2026-01-16T07:53:53.624Z] Starting Enhanced Discord Bot...
[2026-01-16T07:53:53.624Z] ========================================
[2026-01-16T07:53:54.186Z] [BOT] ✅ Loaded V2 database: 1984 jobs
[2026-01-16T07:53:54.748Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T07:53:54.748Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T07:53:54.748Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T07:53:54.863Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst at Gartner
[2026-01-16T07:53:54.865Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T07:53:54.866Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T07:53:54.866Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T07:53:54.867Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T07:53:54.867Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T07:53:54.869Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T07:53:54.870Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_0760d36d
[2026-01-16T07:53:54.870Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T07:53:54.888Z] [BOT ERROR] (node:2776) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T07:53:55.008Z] [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst @ Gartner',
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
[2026-01-16T07:53:55.009Z] [BOT] ❌ Industry post failed: Data Analyst
⚠️  Channel full error count: 1/5
[2026-01-16T07:53:56.636Z] [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst @ Gartner',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-16T07:53:56.636Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T07:54:01.138Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T07:54:01.139Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
[2026-01-16T07:54:01.139Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:54:01.367Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-16T07:54:01.367Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-01-16T07:54:03.046Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T07:54:04.548Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2026-01-16T07:54:04.548Z] [BOT] 💾 BEFORE ARCHIVING: 1985 jobs in database
[2026-01-16T07:54:04.550Z] [BOT] ✅ No jobs to archive (all 1985 jobs within 7-day window)
[2026-01-16T07:54:04.573Z] [BOT] 💾 Saved posted_jobs.json: 1985 active jobs
[2026-01-16T07:54:04.573Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:04.575Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
[2026-01-16T07:54:04.575Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T07:54:04.739Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-16T07:54:04.739Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-01-16T07:54:06.371Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌧️・seattle
[2026-01-16T07:54:06.371Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T07:54:07.873Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2026-01-16T07:54:07.874Z] [BOT] 💾 BEFORE ARCHIVING: 1986 jobs in database
[2026-01-16T07:54:07.875Z] [BOT] ✅ No jobs to archive (all 1986 jobs within 7-day window)
[2026-01-16T07:54:07.889Z] [BOT] 💾 Saved posted_jobs.json: 1986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:10.890Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T07:54:10.891Z] [BOT] 📍 [ROUTING] "BNY Analyst Program-Engineering - Developer" @ ORG_01d9a8c4
   Category: TECH (matched: "software")
[2026-01-16T07:54:10.891Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:11.207Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #💻・tech-jobs
[2026-01-16T07:54:11.207Z] [BOT] ✅ Industry: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4
[2026-01-16T07:54:12.898Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T07:54:14.398Z] [BOT] 💾 Marked as posted: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 (instance #1)
[2026-01-16T07:54:14.398Z] [BOT] 💾 BEFORE ARCHIVING: 1987 jobs in database
[2026-01-16T07:54:14.400Z] [BOT] ✅ No jobs to archive (all 1987 jobs within 7-day window)
[2026-01-16T07:54:14.412Z] [BOT] 💾 Saved posted_jobs.json: 1987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:14.413Z] [BOT] 💾 Marked as posted: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 (instance #1)
[2026-01-16T07:54:14.413Z] [BOT] 💾 BEFORE ARCHIVING: 1988 jobs in database
[2026-01-16T07:54:14.414Z] [BOT] ✅ No jobs to archive (all 1988 jobs within 7-day window)
[2026-01-16T07:54:14.427Z] [BOT] 💾 Saved posted_jobs.json: 1988 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:14.428Z] [BOT] 📍 [ROUTING] "Moodle Developer" @ ORG_0aa5052d State University (LSU)
[2026-01-16T07:54:14.429Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:14.628Z] [BOT] ✅ Created forum post: 🏢 Moodle Developer @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2026-01-16T07:54:14.628Z] [BOT] ✅ Industry: Moodle Developer @ ORG_0aa5052d State University (LSU)
[2026-01-16T07:54:16.307Z] [BOT] ✅ Created forum post: 🏢 Moodle Developer @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2026-01-16T07:54:16.307Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T07:54:17.809Z] [BOT] 💾 Marked as posted: Moodle Developer @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-16T07:54:17.809Z] [BOT] 💾 BEFORE ARCHIVING: 1989 jobs in database
[2026-01-16T07:54:17.810Z] [BOT] ✅ No jobs to archive (all 1989 jobs within 7-day window)
[2026-01-16T07:54:17.823Z] [BOT] 💾 Saved posted_jobs.json: 1989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:17.824Z] [BOT] 📍 [ROUTING] "Engineering Assistant I – Software" @ ORG_b1b059ca Systems
[2026-01-16T07:54:17.824Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:17.988Z] [BOT] ✅ Created forum post: 🏢 Engineering Assistant I – Software @ ORG_b1b059ca Systems in #💻・tech-jobs
[2026-01-16T07:54:17.988Z] [BOT] ✅ Industry: Engineering Assistant I – Software @ ORG_b1b059ca Systems
[2026-01-16T07:54:19.748Z] [BOT] ✅ Created forum post: 🏢 Engineering Assistant I – Software @ ORG_b1b059ca Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:54:21.250Z] [BOT] 💾 Marked as posted: Engineering Assistant I – Software @ ORG_b1b059ca Systems (instance #1)
[2026-01-16T07:54:21.250Z] [BOT] 💾 BEFORE ARCHIVING: 1990 jobs in database
[2026-01-16T07:54:21.251Z] [BOT] ✅ No jobs to archive (all 1990 jobs within 7-day window)
[2026-01-16T07:54:21.265Z] [BOT] 💾 Saved posted_jobs.json: 1990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:21.266Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3
[2026-01-16T07:54:21.266Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:23.661Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3
[2026-01-16T07:54:25.579Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T07:54:27.080Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_e5ca4df3 (instance #1)
[2026-01-16T07:54:27.081Z] [BOT] 💾 BEFORE ARCHIVING: 1991 jobs in database
[2026-01-16T07:54:27.082Z] [BOT] ✅ No jobs to archive (all 1991 jobs within 7-day window)
[2026-01-16T07:54:27.098Z] [BOT] 💾 Saved posted_jobs.json: 1991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:27.098Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_e5ca4df3 (instance #1)
[2026-01-16T07:54:27.099Z] [BOT] 💾 BEFORE ARCHIVING: 1992 jobs in database
[2026-01-16T07:54:27.100Z] [BOT] ✅ No jobs to archive (all 1992 jobs within 7-day window)
[2026-01-16T07:54:27.113Z] [BOT] 💾 Saved posted_jobs.json: 1992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:27.114Z] [BOT] 📍 [ROUTING] "Analyst, Data & Software Engineering" @ ORG_82e4502a Group
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:27.362Z] [BOT] ✅ Created forum post: 🏢 Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・tech-jobs
[2026-01-16T07:54:27.362Z] [BOT] ✅ Industry: Analyst, Data & Software Engineering @ ORG_82e4502a Group
[2026-01-16T07:54:29.141Z] [BOT] ✅ Created forum post: 🏢 Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・remote-usa
[2026-01-16T07:54:29.141Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T07:54:30.643Z] [BOT] 💾 Marked as posted: Analyst, Data & Software Engineering @ ORG_82e4502a Group (instance #1)
[2026-01-16T07:54:30.643Z] [BOT] 💾 BEFORE ARCHIVING: 1993 jobs in database
[2026-01-16T07:54:30.644Z] [BOT] ✅ No jobs to archive (all 1993 jobs within 7-day window)
[2026-01-16T07:54:30.657Z] [BOT] 💾 Saved posted_jobs.json: 1993 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:30.657Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_1940d70c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:30.883Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_1940d70c in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_1940d70c
[2026-01-16T07:54:32.687Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_1940d70c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:54:34.189Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_1940d70c (instance #1)
[2026-01-16T07:54:34.189Z] [BOT] 💾 BEFORE ARCHIVING: 1994 jobs in database
[2026-01-16T07:54:34.190Z] [BOT] ✅ No jobs to archive (all 1994 jobs within 7-day window)
[2026-01-16T07:54:34.203Z] [BOT] 💾 Saved posted_jobs.json: 1994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:34.203Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_dbcd5e7b & Wonder
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T07:54:34.423Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dbcd5e7b & Wonder in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_dbcd5e7b & Wonder
[2026-01-16T07:54:36.307Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_dbcd5e7b & Wonder in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T07:54:37.809Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_dbcd5e7b & Wonder (instance #1)
[2026-01-16T07:54:37.810Z] [BOT] 💾 BEFORE ARCHIVING: 1995 jobs in database
[2026-01-16T07:54:37.811Z] [BOT] ✅ No jobs to archive (all 1995 jobs within 7-day window)
[2026-01-16T07:54:37.825Z] [BOT] 💾 Saved posted_jobs.json: 1995 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T07:54:40.826Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T07:54:40.826Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f125be66 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ede63458 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-JID_0788be3f (posted within 7 days)
⏭️  Skipping duplicate: JID_59da8200-developer_r00109175 (posted within 7 days)
⏭️  Skipping duplicate: JID_e0e8d951 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_f70ba3d0-costar_campus-JID_c6957ea8-ca_r37014 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_c71e4b07-date_jr100105 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_77cb80d2-engineer_r6157 (posted within 7 days)
[2026-01-16T07:54:40.827Z] [BOT] ⏭️  Skipping duplicate: JID_2065982b-engineer_r320511 (posted within 7 days)
[2026-01-16T07:54:40.938Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[2026-01-16T07:54:41.115Z] [BOT] ✅ Saved pending queue: 2763 total (2743 pending, 11 enriched, 9 posted)
[2026-01-16T07:54:41.116Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T07:54:41.174Z] [BOT] 📂 Loaded 4205 existing routing entries
[2026-01-16T07:54:41.243Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4215
[2026-01-16T07:54:41.244Z] [BOT] Timestamp: 2026-01-16T07:54:41.224Z
[2026-01-16T07:54:41.244Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T07:54:41.244Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-16T07:54:41.245Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-16T07:54:41.245Z] [BOT] Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 5 posts
[2026-01-16T07:54:41.245Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-16T07:54:41.245Z] [BOT] [STATS] Channel stats saved
[2026-01-16T07:54:43.269Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2776) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst
- [BOT ERROR] ❌ Error posting job Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*