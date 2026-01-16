# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T23:40:08.790Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T23:39:22.071Z] ========================================
[2026-01-16T23:39:22.073Z] Discord Bot Execution Log
[2026-01-16T23:39:22.073Z] Environment: GitHub Actions
[2026-01-16T23:39:22.073Z] Node Version: v20.19.6
[2026-01-16T23:39:22.073Z] ========================================
[2026-01-16T23:39:22.073Z] Environment Variables Check:
[2026-01-16T23:39:22.073Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T23:39:22.073Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.073Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T23:39:22.074Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T23:39:22.074Z] 
Multi-Channel Configuration:
[2026-01-16T23:39:22.074Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.074Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T23:39:22.075Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T23:39:22.075Z] 
Data Files Check:
[2026-01-16T23:39:22.075Z] .github/data/new_jobs.json: ✅ Exists (10 items, 21692 bytes)
[2026-01-16T23:39:22.084Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1200065 bytes)
[2026-01-16T23:39:22.084Z] 
========================================
[2026-01-16T23:39:22.084Z] Starting Enhanced Discord Bot...
[2026-01-16T23:39:22.084Z] ========================================
[2026-01-16T23:39:22.607Z] [BOT] ✅ Loaded V2 database: 2212 jobs
[2026-01-16T23:39:23.397Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T23:39:23.397Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T23:39:23.398Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T23:39:23.511Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Embedded Software Engineer at Applied Intuition
[2026-01-16T23:39:23.514Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T23:39:23.514Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T23:39:23.515Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T23:39:23.515Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T23:39:23.516Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T23:39:23.516Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: dallas, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T23:39:23.516Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T23:39:23.519Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-16T23:39:23.520Z] [BOT] 📍 [ROUTING] "Embedded Software Engineer" @ ORG_0c79a9c2 Intuition
[2026-01-16T23:39:23.520Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:23.538Z] [BOT ERROR] (node:2579) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T23:39:23.780Z] [BOT] ✅ Created forum post: 🏢 Embedded Software Engineer @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-01-16T23:39:23.781Z] [BOT] ✅ Industry: Embedded Software Engineer @ ORG_0c79a9c2 Intuition
[2026-01-16T23:39:25.815Z] [BOT] ✅ Created forum post: 🏢 Embedded Software Engineer @ ORG_0c79a9c2 Intuition in #🌄・mountain-view
[2026-01-16T23:39:25.816Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-16T23:39:27.316Z] [BOT] 💾 Marked as posted: Embedded Software Engineer @ ORG_0c79a9c2 Intuition (instance #1)
[2026-01-16T23:39:27.317Z] [BOT] 💾 BEFORE ARCHIVING: 2213 jobs in database
[2026-01-16T23:39:27.319Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T23:39:27.323Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 2212 active
[2026-01-16T23:39:27.337Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:27.338Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_28592017 Fleming
[2026-01-16T23:39:27.338Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:27.603Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_28592017 Fleming in #💻・tech-jobs
[2026-01-16T23:39:27.604Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_28592017 Fleming
[2026-01-16T23:39:29.315Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_28592017 Fleming in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T23:39:30.815Z] [BOT] 💾 Marked as posted: Entry Level Software Developer @ ORG_28592017 Fleming (instance #1)
[2026-01-16T23:39:30.815Z] [BOT] 💾 BEFORE ARCHIVING: 2213 jobs in database
[2026-01-16T23:39:30.817Z] [BOT] ✅ No jobs to archive (all 2213 jobs within 7-day window)
[2026-01-16T23:39:30.830Z] [BOT] 💾 Saved posted_jobs.json: 2213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:30.830Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Microstrategy Tableau" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:31.069Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:32.836Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-16T23:39:32.836Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T23:39:34.337Z] [BOT] 💾 Marked as posted: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:34.337Z] [BOT] 💾 BEFORE ARCHIVING: 2214 jobs in database
[2026-01-16T23:39:34.339Z] [BOT] ✅ No jobs to archive (all 2214 jobs within 7-day window)
[2026-01-16T23:39:34.357Z] [BOT] 💾 Saved posted_jobs.json: 2214 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:34.358Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:34.358Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:34.710Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T23:39:34.710Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:36.607Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・remote-usa
[2026-01-16T23:39:36.607Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T23:39:38.108Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:38.108Z] [BOT] 💾 BEFORE ARCHIVING: 2215 jobs in database
[2026-01-16T23:39:38.110Z] [BOT] ✅ No jobs to archive (all 2215 jobs within 7-day window)
[2026-01-16T23:39:38.126Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:38.126Z] [BOT] 📍 [ROUTING] "Test Analyst - Java - Selenium" @ ORG_a3a09e18 Consulting
[2026-01-16T23:39:38.126Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:38.362Z] [BOT] ✅ Created forum post: 🏢 Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #💻・tech-jobs
[2026-01-16T23:39:38.362Z] [BOT] ✅ Industry: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting
[2026-01-16T23:39:40.122Z] [BOT] ✅ Created forum post: 🏢 Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T23:39:41.623Z] [BOT] 💾 Marked as posted: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting (instance #1)
💾 BEFORE ARCHIVING: 2216 jobs in database
[2026-01-16T23:39:41.625Z] [BOT] ✅ No jobs to archive (all 2216 jobs within 7-day window)
[2026-01-16T23:39:41.638Z] [BOT] 💾 Saved posted_jobs.json: 2216 active jobs
[2026-01-16T23:39:41.638Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:41.639Z] [BOT] 📍 [ROUTING] "Entry Level Informatica Developer" @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:41.639Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:41.960Z] [BOT] ✅ Created forum post: 🏢 Entry Level Informatica Developer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:43.595Z] [BOT ERROR] ❌ Error posting job Entry Level Informatica Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Informatica Developer @ ORG_9af9eef3 Technologies',
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
[2026-01-16T23:39:43.595Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T23:39:45.096Z] [BOT] 💾 Marked as posted: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:45.096Z] [BOT] 💾 BEFORE ARCHIVING: 2217 jobs in database
[2026-01-16T23:39:45.097Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-01-16T23:39:45.112Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:45.112Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:45.112Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:45.301Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T23:39:45.301Z] [BOT] ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:47.057Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #🌉・san-francisco
[2026-01-16T23:39:47.057Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T23:39:48.557Z] [BOT] 💾 Marked as posted: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:48.557Z] [BOT] 💾 BEFORE ARCHIVING: 2218 jobs in database
[2026-01-16T23:39:48.559Z] [BOT] ✅ No jobs to archive (all 2218 jobs within 7-day window)
[2026-01-16T23:39:48.573Z] [BOT] 💾 Saved posted_jobs.json: 2218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:48.573Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:48.573Z] [BOT] Category: TECH (matched: "software")
[2026-01-16T23:39:48.574Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:39:48.972Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-16T23:39:50.698Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T23:39:52.200Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:52.200Z] [BOT] 💾 BEFORE ARCHIVING: 2219 jobs in database
[2026-01-16T23:39:52.201Z] [BOT] ✅ No jobs to archive (all 2219 jobs within 7-day window)
[2026-01-16T23:39:52.214Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
[2026-01-16T23:39:52.214Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:52.215Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:39:52.215Z] [BOT] 💾 BEFORE ARCHIVING: 2220 jobs in database
[2026-01-16T23:39:52.216Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-01-16T23:39:52.229Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:55.229Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T23:39:55.230Z] [BOT] 📍 [ROUTING] "SQL data analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T23:39:55.469Z] [BOT] ✅ Created forum post: 🏢 SQL data analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: SQL data analyst @ 360 IT Professionals
[2026-01-16T23:39:57.206Z] [BOT] ✅ Created forum post: 🏢 SQL data analyst @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T23:39:58.707Z] [BOT] 💾 Marked as posted: SQL data analyst @ 360 IT Professionals (instance #1)
[2026-01-16T23:39:58.708Z] [BOT] 💾 BEFORE ARCHIVING: 2221 jobs in database
[2026-01-16T23:39:58.709Z] [BOT] ✅ No jobs to archive (all 2221 jobs within 7-day window)
[2026-01-16T23:39:58.723Z] [BOT] 💾 Saved posted_jobs.json: 2221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:39:58.723Z] [BOT] 📍 [ROUTING] "MDM Data Analyst 1" @ ORG_9b202ecb Tech Solutions
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-16T23:39:58.724Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T23:39:58.926Z] [BOT] ✅ Created forum post: 🏢 MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #📈・JID_fb739488
  ✅ Industry: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions
[2026-01-16T23:40:00.692Z] [BOT] ✅ Created forum post: 🏢 MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T23:40:02.193Z] [BOT] 💾 Marked as posted: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions (instance #1)
[2026-01-16T23:40:02.193Z] [BOT] 💾 BEFORE ARCHIVING: 2222 jobs in database
[2026-01-16T23:40:02.195Z] [BOT] ✅ No jobs to archive (all 2222 jobs within 7-day window)
[2026-01-16T23:40:02.208Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:40:05.209Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T23:40:05.209Z] [BOT] ⏭️  Skipping duplicate: JID_6307eea9 (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_f8f7521f (posted within 7 days)
⏭️  Skipping duplicate: JID_502a0023 (posted within 7 days)
⏭️  Skipping duplicate: JID_d9176382 (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_44a6fa11 (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_e240571a (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_ae9fc2b3 (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_e0f592ba (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_56c9c811 (posted within 7 days)
[2026-01-16T23:40:05.210Z] [BOT] ⏭️  Skipping duplicate: JID_a3498d87 (posted within 7 days)
[2026-01-16T23:40:05.322Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[2026-01-16T23:40:05.482Z] [BOT] ✅ Saved pending queue: 2784 total (2764 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T23:40:05.482Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T23:40:05.538Z] [BOT] 📂 Loaded 4435 existing routing entries
[2026-01-16T23:40:05.605Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4445
   Timestamp: 2026-01-16T23:40:05.586Z
[2026-01-16T23:40:05.606Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-16T23:40:05.607Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T23:40:05.607Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 8 posts
[2026-01-16T23:40:05.607Z] [BOT] 2. #🤠・austin: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #📈・JID_fb739488: 2 posts
     5. #🌄・mountain-view: 1 posts
[2026-01-16T23:40:05.607Z] [BOT] [STATS] Channel stats saved
[2026-01-16T23:40:07.626Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2579) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Entry Level Informatica Developer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*