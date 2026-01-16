# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T23:10:52.673Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T23:10:05.230Z] ========================================
[2026-01-16T23:10:05.232Z] Discord Bot Execution Log
[2026-01-16T23:10:05.232Z] Environment: GitHub Actions
[2026-01-16T23:10:05.232Z] Node Version: v20.19.6
[2026-01-16T23:10:05.232Z] ========================================
[2026-01-16T23:10:05.232Z] Environment Variables Check:
[2026-01-16T23:10:05.232Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T23:10:05.232Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T23:10:05.233Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T23:10:05.233Z] 
Multi-Channel Configuration:
[2026-01-16T23:10:05.233Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.233Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.234Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T23:10:05.234Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T23:10:05.234Z] 
Data Files Check:
[2026-01-16T23:10:05.234Z] .github/data/new_jobs.json: ✅ Exists (10 items, 25462 bytes)
[2026-01-16T23:10:05.243Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1189748 bytes)
[2026-01-16T23:10:05.243Z] 
========================================
[2026-01-16T23:10:05.243Z] Starting Enhanced Discord Bot...
[2026-01-16T23:10:05.243Z] ========================================
[2026-01-16T23:10:05.779Z] [BOT] ✅ Loaded V2 database: 2193 jobs
[2026-01-16T23:10:06.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T23:10:06.717Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T23:10:06.717Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T23:10:06.830Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Software Engineers at AG Technologies
[2026-01-16T23:10:06.833Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T23:10:06.833Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T23:10:06.834Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T23:10:06.834Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T23:10:06.835Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T23:10:06.835Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: casa grande, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T23:10:06.837Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-16T23:10:06.838Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineers" @ ORG_9af9eef3 Technologies
[2026-01-16T23:10:06.838Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:06.855Z] [BOT ERROR] (node:3076) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T23:10:06.990Z] [BOT ERROR] ❌ Error posting job Entry Level Software Engineers: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Software Engineers @ ORG_9af9eef3 Technologies',
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-16T23:10:06.990Z] [BOT] ❌ Industry post failed: Entry Level Software Engineers
⚠️  Channel full error count: 1/5
[2026-01-16T23:10:08.774Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineers @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-16T23:10:08.774Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T23:10:10.275Z] [BOT] 💾 Marked as posted: Entry Level Software Engineers @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:10:10.276Z] [BOT] 💾 BEFORE ARCHIVING: 2194 jobs in database
[2026-01-16T23:10:10.277Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T23:10:10.282Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T23:10:10.282Z] [BOT] ✅ Archiving complete: 1 archived, 2193 active
[2026-01-16T23:10:10.298Z] [BOT] 💾 Saved posted_jobs.json: 2193 active jobs
[2026-01-16T23:10:10.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:10.299Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-01-16T23:10:10.299Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:10.620Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-16T23:10:10.621Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-16T23:10:12.359Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:10:13.860Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:10:13.860Z] [BOT] 💾 BEFORE ARCHIVING: 2194 jobs in database
[2026-01-16T23:10:13.862Z] [BOT] ✅ No jobs to archive (all 2194 jobs within 7-day window)
[2026-01-16T23:10:13.874Z] [BOT] 💾 Saved posted_jobs.json: 2194 active jobs
[2026-01-16T23:10:13.874Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:13.875Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 2195 jobs in database
[2026-01-16T23:10:13.876Z] [BOT] ✅ No jobs to archive (all 2195 jobs within 7-day window)
[2026-01-16T23:10:13.887Z] [BOT] 💾 Saved posted_jobs.json: 2195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:13.887Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:14.258Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-16T23:10:16.032Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
[2026-01-16T23:10:16.032Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T23:10:17.533Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2026-01-16T23:10:17.533Z] [BOT] 💾 BEFORE ARCHIVING: 2196 jobs in database
[2026-01-16T23:10:17.535Z] [BOT] ✅ No jobs to archive (all 2196 jobs within 7-day window)
[2026-01-16T23:10:17.552Z] [BOT] 💾 Saved posted_jobs.json: 2196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:17.553Z] [BOT] 📍 [ROUTING] "Software Engineer I (ALDP)" @ ORG_bdf03daa Fintech Solutions
[2026-01-16T23:10:17.553Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:19.128Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2026-01-16T23:10:19.128Z] [BOT] ✅ Industry: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions
[2026-01-16T23:10:21.067Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions in #🤠・austin
[2026-01-16T23:10:21.068Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T23:10:22.568Z] [BOT] 💾 Marked as posted: Software Engineer I (ALDP) @ ORG_bdf03daa Fintech Solutions (instance #1)
[2026-01-16T23:10:22.568Z] [BOT] 💾 BEFORE ARCHIVING: 2197 jobs in database
[2026-01-16T23:10:22.570Z] [BOT] ✅ No jobs to archive (all 2197 jobs within 7-day window)
[2026-01-16T23:10:22.585Z] [BOT] 💾 Saved posted_jobs.json: 2197 active jobs
[2026-01-16T23:10:22.585Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:22.586Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_30841378 Health
   Category: TECH (matched: "software")
[2026-01-16T23:10:22.586Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:22.794Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_30841378 Health in #💻・tech-jobs
[2026-01-16T23:10:22.794Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_30841378 Health
[2026-01-16T23:10:24.525Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_30841378 Health in #🚌・boston
[2026-01-16T23:10:24.525Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T23:10:26.026Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_30841378 Health (instance #1)
[2026-01-16T23:10:26.026Z] [BOT] 💾 BEFORE ARCHIVING: 2198 jobs in database
[2026-01-16T23:10:26.028Z] [BOT] ✅ No jobs to archive (all 2198 jobs within 7-day window)
[2026-01-16T23:10:26.041Z] [BOT] 💾 Saved posted_jobs.json: 2198 active jobs
[2026-01-16T23:10:26.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:26.042Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_3429c666 United Home Loans
[2026-01-16T23:10:26.042Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:26.593Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3429c666 United Home Loans in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_3429c666 United Home Loans
[2026-01-16T23:10:28.362Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3429c666 United Home Loans in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:10:29.863Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_3429c666 United Home Loans (instance #1)
[2026-01-16T23:10:29.863Z] [BOT] 💾 BEFORE ARCHIVING: 2199 jobs in database
[2026-01-16T23:10:29.865Z] [BOT] ✅ No jobs to archive (all 2199 jobs within 7-day window)
[2026-01-16T23:10:29.879Z] [BOT] 💾 Saved posted_jobs.json: 2199 active jobs
[2026-01-16T23:10:29.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:29.879Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ ORG_fe22cd40
[2026-01-16T23:10:29.879Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:30.158Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer @ ORG_fe22cd40 in #💻・tech-jobs
  ✅ Industry: Junior Software Developer @ ORG_fe22cd40
[2026-01-16T23:10:31.659Z] [BOT] 💾 Marked as posted: Junior Software Developer @ ORG_fe22cd40 (instance #1)
[2026-01-16T23:10:31.659Z] [BOT] 💾 BEFORE ARCHIVING: 2200 jobs in database
[2026-01-16T23:10:31.660Z] [BOT] ✅ No jobs to archive (all 2200 jobs within 7-day window)
[2026-01-16T23:10:31.674Z] [BOT] 💾 Saved posted_jobs.json: 2200 active jobs
[2026-01-16T23:10:31.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:31.675Z] [BOT] 📍 [ROUTING] "Systems Development Engineer I, Ops Tech Solution (OTS)" @ ORG_49d2dc07
[2026-01-16T23:10:31.675Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2026-01-16T23:10:31.675Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:31.889Z] [BOT] ✅ Created forum post: 📦 Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07
[2026-01-16T23:10:33.877Z] [BOT] ✅ Created forum post: 📦 Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T23:10:35.379Z] [BOT] 💾 Marked as posted: Systems Development Engineer I, Ops Tech Solution (OTS) @ ORG_49d2dc07 (instance #1)
[2026-01-16T23:10:35.380Z] [BOT] 💾 BEFORE ARCHIVING: 2201 jobs in database
[2026-01-16T23:10:35.381Z] [BOT] ✅ No jobs to archive (all 2201 jobs within 7-day window)
[2026-01-16T23:10:35.394Z] [BOT] 💾 Saved posted_jobs.json: 2201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:35.394Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_e5deb41a Securities
[2026-01-16T23:10:35.394Z] [BOT] Category: TECH (matched: "software")
[2026-01-16T23:10:35.394Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:10:35.586Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_e5deb41a Securities in #💻・tech-jobs
[2026-01-16T23:10:35.586Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_e5deb41a Securities
[2026-01-16T23:10:37.580Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_e5deb41a Securities in #💻・remote-usa
[2026-01-16T23:10:37.580Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T23:10:39.082Z] [BOT] 💾 Marked as posted: C++ Software Engineer @ ORG_e5deb41a Securities (instance #1)
[2026-01-16T23:10:39.082Z] [BOT] 💾 BEFORE ARCHIVING: 2202 jobs in database
[2026-01-16T23:10:39.083Z] [BOT] ✅ No jobs to archive (all 2202 jobs within 7-day window)
[2026-01-16T23:10:39.096Z] [BOT] 💾 Saved posted_jobs.json: 2202 active jobs
[2026-01-16T23:10:39.096Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:42.097Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T23:10:42.098Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_64923ce3
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T23:10:42.098Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T23:10:42.754Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_64923ce3 in #🤖・ai-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_64923ce3
[2026-01-16T23:10:44.572Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_64923ce3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T23:10:46.072Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_64923ce3 (instance #1)
[2026-01-16T23:10:46.073Z] [BOT] 💾 BEFORE ARCHIVING: 2203 jobs in database
[2026-01-16T23:10:46.074Z] [BOT] ✅ No jobs to archive (all 2203 jobs within 7-day window)
[2026-01-16T23:10:46.090Z] [BOT] 💾 Saved posted_jobs.json: 2203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:10:49.091Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T23:10:49.091Z] [BOT] ⏭️  Skipping duplicate: JID_ae20f0cf (posted within 7 days)
[2026-01-16T23:10:49.092Z] [BOT] ⏭️  Skipping duplicate: JID_ac39afe5 (posted within 7 days)
[2026-01-16T23:10:49.092Z] [BOT] ⏭️  Skipping duplicate: JID_c7f330d7 (posted within 7 days)
[2026-01-16T23:10:49.092Z] [BOT] ⏭️  Skipping duplicate: JID_42693f82-_jr103414-1 (posted within 7 days)
[2026-01-16T23:10:49.092Z] [BOT] ⏭️  Skipping duplicate: JID_67c95399 (posted within 7 days)
[2026-01-16T23:10:49.092Z] [BOT] ⏭️  Skipping duplicate: JID_5f600b66-engineer_r5288 (posted within 7 days)
⏭️  Skipping duplicate: JID_f4109327 (posted within 7 days)
[2026-01-16T23:10:49.093Z] [BOT] ⏭️  Skipping duplicate: JID_6b14a5e1 (posted within 7 days)
[2026-01-16T23:10:49.093Z] [BOT] ⏭️  Skipping duplicate: JID_6cc37fe2 (posted within 7 days)
[2026-01-16T23:10:49.093Z] [BOT] ⏭️  Skipping duplicate: JID_40eb513f (posted within 7 days)
[2026-01-16T23:10:49.202Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[2026-01-16T23:10:49.372Z] [BOT] ✅ Saved pending queue: 2779 total (2759 pending, 10 enriched, 10 posted)
[2026-01-16T23:10:49.373Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T23:10:49.431Z] [BOT] 📂 Loaded 4415 existing routing entries
[2026-01-16T23:10:49.499Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4425
   Timestamp: 2026-01-16T23:10:49.479Z
[2026-01-16T23:10:49.500Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T23:10:49.500Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-16T23:10:49.500Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-01-16T23:10:49.500Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🤠・austin: 3 posts
     3. #💻・remote-usa: 3 posts
[2026-01-16T23:10:49.500Z] [BOT] 4. #🌉・san-francisco: 2 posts
     5. #🚌・boston: 1 posts
[STATS] Channel stats saved
[2026-01-16T23:10:51.526Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3076) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Entry Level Software Engineers: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry Level Software Engineers
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*