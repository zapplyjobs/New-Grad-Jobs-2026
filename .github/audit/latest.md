# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T08:28:21.232Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T08:27:27.587Z] ========================================
[2026-01-14T08:27:27.589Z] Discord Bot Execution Log
[2026-01-14T08:27:27.589Z] Environment: GitHub Actions
[2026-01-14T08:27:27.589Z] Node Version: v20.19.6
[2026-01-14T08:27:27.589Z] ========================================
[2026-01-14T08:27:27.589Z] Environment Variables Check:
[2026-01-14T08:27:27.589Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T08:27:27.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T08:27:27.589Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T08:27:27.590Z] 
Multi-Channel Configuration:
[2026-01-14T08:27:27.590Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T08:27:27.590Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T08:27:27.590Z] 
Data Files Check:
[2026-01-14T08:27:27.591Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51557 bytes)
[2026-01-14T08:27:27.597Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 706407 bytes)
[2026-01-14T08:27:27.597Z] 
========================================
[2026-01-14T08:27:27.597Z] Starting Enhanced Discord Bot...
[2026-01-14T08:27:27.597Z] ========================================
[2026-01-14T08:27:28.117Z] [BOT] ✅ Loaded V2 database: 1331 jobs
[2026-01-14T08:27:29.002Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T08:27:29.003Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T08:27:29.003Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T08:27:29.110Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Report Developer at Lineage Logistics
[2026-01-14T08:27:29.112Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T08:27:29.113Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T08:27:29.113Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T08:27:29.114Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T08:27:29.114Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T08:27:29.118Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T08:27:29.118Z] [BOT] 📍 [ROUTING] "Associate Report Developer" @ ORG_044baaec Logistics
[2026-01-14T08:27:29.118Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:29.135Z] [BOT ERROR] (node:2899) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T08:27:29.347Z] [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Report Developer @ ORG_044baaec Logistics',
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
[2026-01-14T08:27:29.347Z] [BOT] ❌ Industry post failed: Associate Report Developer
⚠️  Channel full error count: 1/5
[2026-01-14T08:27:31.100Z] [BOT] ✅ Created forum post: 🏢 Associate Report Developer @ ORG_044baaec Logistics in #💻・remote-usa
[2026-01-14T08:27:31.100Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T08:27:32.601Z] [BOT] 💾 Marked as posted: Associate Report Developer @ ORG_044baaec Logistics (instance #1)
[2026-01-14T08:27:32.602Z] [BOT] 💾 BEFORE ARCHIVING: 1332 jobs in database
[2026-01-14T08:27:32.603Z] [BOT] ✅ No jobs to archive (all 1332 jobs within 7-day window)
[2026-01-14T08:27:32.616Z] [BOT] 💾 Saved posted_jobs.json: 1332 active jobs
[2026-01-14T08:27:32.616Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:32.616Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Fullstack - Hardware Accelerate" @ ORG_3acb0a4a
[2026-01-14T08:27:32.616Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:32.890Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a in #💻・tech-jobs
[2026-01-14T08:27:32.890Z] [BOT] ✅ Industry: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a
[2026-01-14T08:27:34.723Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-14T08:27:36.223Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a (instance #1)
💾 BEFORE ARCHIVING: 1333 jobs in database
[2026-01-14T08:27:36.224Z] [BOT] ✅ No jobs to archive (all 1333 jobs within 7-day window)
[2026-01-14T08:27:36.233Z] [BOT] 💾 Saved posted_jobs.json: 1333 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:36.233Z] [BOT] 📍 [ROUTING] "AI/ML Systems Engineer" @ ORG_04c08645ins
[2026-01-14T08:27:36.233Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:36.636Z] [BOT] ✅ Created forum post: 🏢 AI/ML Systems Engineer @ ORG_04c08645ins in #💻・tech-jobs
[2026-01-14T08:27:36.636Z] [BOT] ✅ Industry: AI/ML Systems Engineer @ ORG_04c08645ins
[2026-01-14T08:27:38.390Z] [BOT] ✅ Created forum post: 🏢 AI/ML Systems Engineer @ ORG_04c08645ins in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T08:27:39.890Z] [BOT] 💾 Marked as posted: AI/ML Systems Engineer @ ORG_04c08645ins (instance #1)
[2026-01-14T08:27:39.891Z] [BOT] 💾 BEFORE ARCHIVING: 1334 jobs in database
[2026-01-14T08:27:39.892Z] [BOT] ✅ No jobs to archive (all 1334 jobs within 7-day window)
[2026-01-14T08:27:39.902Z] [BOT] 💾 Saved posted_jobs.json: 1334 active jobs
[2026-01-14T08:27:39.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:39.903Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_05d2f9ea Electric
[2026-01-14T08:27:39.903Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:40.291Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2026-01-14T08:27:40.291Z] [BOT] ✅ Industry: Software Engineer @ ORG_05d2f9ea Electric
[2026-01-14T08:27:42.235Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T08:27:43.736Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_05d2f9ea Electric (instance #1)
[2026-01-14T08:27:43.736Z] [BOT] 💾 BEFORE ARCHIVING: 1335 jobs in database
[2026-01-14T08:27:43.738Z] [BOT] ✅ No jobs to archive (all 1335 jobs within 7-day window)
[2026-01-14T08:27:43.747Z] [BOT] 💾 Saved posted_jobs.json: 1335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:43.748Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_07b9fafa
[2026-01-14T08:27:43.748Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:43.993Z] [BOT] ✅ Created forum post: 💰 Software Engineer, Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer, Early Career @ ORG_07b9fafa
[2026-01-14T08:27:45.709Z] [BOT] ✅ Created forum post: 💰 Software Engineer, Early Career @ ORG_07b9fafa in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T08:27:47.210Z] [BOT] 💾 Marked as posted: Software Engineer, Early Career @ ORG_07b9fafa (instance #1)
[2026-01-14T08:27:47.210Z] [BOT] 💾 BEFORE ARCHIVING: 1336 jobs in database
[2026-01-14T08:27:47.211Z] [BOT] ✅ No jobs to archive (all 1336 jobs within 7-day window)
[2026-01-14T08:27:47.221Z] [BOT] 💾 Saved posted_jobs.json: 1336 active jobs
[2026-01-14T08:27:47.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:47.221Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-14T08:27:47.221Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T08:27:47.522Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-14T08:27:49.513Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Integration @ ORG_86851bed Decision Technology in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-14T08:27:51.014Z] [BOT] 💾 Marked as posted: Analyst – Data Integration @ ORG_86851bed Decision Technology (instance #1)
[2026-01-14T08:27:51.014Z] [BOT] 💾 BEFORE ARCHIVING: 1337 jobs in database
[2026-01-14T08:27:51.015Z] [BOT] ✅ No jobs to archive (all 1337 jobs within 7-day window)
[2026-01-14T08:27:51.025Z] [BOT] 💾 Saved posted_jobs.json: 1337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:27:54.026Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T08:27:54.026Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_7f1f7a12
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T08:27:54.026Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T08:27:54.309Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_7f1f7a12 in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_7f1f7a12
[2026-01-14T08:27:56.203Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_7f1f7a12 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T08:27:57.705Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_7f1f7a12 (instance #1)
[2026-01-14T08:27:57.705Z] [BOT] 💾 BEFORE ARCHIVING: 1338 jobs in database
[2026-01-14T08:27:57.706Z] [BOT] ✅ No jobs to archive (all 1338 jobs within 7-day window)
[2026-01-14T08:27:57.714Z] [BOT] 💾 Saved posted_jobs.json: 1338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:28:00.715Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T08:28:00.715Z] [BOT] 📍 [ROUTING] "Director, Technical Accounting & Financial Reporting" @ vercel
[2026-01-14T08:28:00.715Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T08:28:01.029Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Accounting & Financial Reporting @ vercel in #📣・marketing-jobs
[2026-01-14T08:28:01.029Z] [BOT] ✅ Industry: Director, Technical Accounting & Financial Reporting @ vercel
[2026-01-14T08:28:02.780Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Accounting & Financial Reporting @ vercel in #🌉・san-francisco
[2026-01-14T08:28:02.780Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T08:28:04.281Z] [BOT] 💾 Marked as posted: Director, Technical Accounting & Financial Reporting @ vercel (instance #1)
[2026-01-14T08:28:04.281Z] [BOT] 💾 BEFORE ARCHIVING: 1339 jobs in database
[2026-01-14T08:28:04.282Z] [BOT] ✅ No jobs to archive (all 1339 jobs within 7-day window)
[2026-01-14T08:28:04.292Z] [BOT] 💾 Saved posted_jobs.json: 1339 active jobs
[2026-01-14T08:28:04.292Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T08:28:07.293Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T08:28:07.293Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager II" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-14T08:28:07.293Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T08:28:07.652Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager II @ spotify in #🤖・ai-jobs
[2026-01-14T08:28:07.653Z] [BOT] ✅ Industry: Machine Learning Engineering Manager II @ spotify
[2026-01-14T08:28:09.375Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager II @ spotify in #🗽・new-york
[2026-01-14T08:28:09.376Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T08:28:10.875Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager II @ spotify (instance #1)
[2026-01-14T08:28:10.876Z] [BOT] 💾 BEFORE ARCHIVING: 1340 jobs in database
[2026-01-14T08:28:10.877Z] [BOT] ✅ No jobs to archive (all 1340 jobs within 7-day window)
[2026-01-14T08:28:10.888Z] [BOT] 💾 Saved posted_jobs.json: 1340 active jobs
[2026-01-14T08:28:10.888Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T08:28:10.889Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
[2026-01-14T08:28:10.889Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:28:11.206Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-14T08:28:11.206Z] [BOT] ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2026-01-14T08:28:12.993Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-14T08:28:12.993Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T08:28:14.493Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-14T08:28:14.494Z] [BOT] 💾 BEFORE ARCHIVING: 1341 jobs in database
[2026-01-14T08:28:14.495Z] [BOT] ✅ No jobs to archive (all 1341 jobs within 7-day window)
[2026-01-14T08:28:14.504Z] [BOT] 💾 Saved posted_jobs.json: 1341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:28:17.505Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T08:28:17.505Z] [BOT] ⏭️  Skipping duplicate: JID_0c5571aa-developer_r0097857 (posted within 7 days)
[2026-01-14T08:28:17.505Z] [BOT] ⏭️  Skipping duplicate: JID_eed10ef9-analyst_r00221046 (posted within 7 days)
[2026-01-14T08:28:17.505Z] [BOT] ⏭️  Skipping duplicate: JID_6aa65224 (posted within 7 days)
[2026-01-14T08:28:17.505Z] [BOT] ⏭️  Skipping duplicate: JID_783695d9 (posted within 7 days)
[2026-01-14T08:28:17.505Z] [BOT] ⏭️  Skipping duplicate: JID_353416e4-cx_1-job-2418409 (posted within 7 days)
[2026-01-14T08:28:17.506Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25028581 (posted within 7 days)
[2026-01-14T08:28:17.506Z] [BOT] ⏭️  Skipping duplicate: JID_efe0ae10 (posted within 7 days)
[2026-01-14T08:28:17.506Z] [BOT] ⏭️  Skipping duplicate: JID_13adae03 (posted within 7 days)
[2026-01-14T08:28:17.506Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
[2026-01-14T08:28:17.506Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_7ba461a4-networks_420061 (posted within 7 days)
[2026-01-14T08:28:17.617Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[2026-01-14T08:28:17.781Z] [BOT] ✅ Saved pending queue: 2724 total (2704 pending, 10 enriched, 10 posted)
[2026-01-14T08:28:17.781Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T08:28:17.834Z] [BOT] 📂 Loaded 3455 existing routing entries
[2026-01-14T08:28:17.893Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T08:28:17.893Z] [BOT] Total entries: 3465
   Timestamp: 2026-01-14T08:28:17.879Z
[2026-01-14T08:28:17.894Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-14T08:28:17.894Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 10
   Top channels:
[2026-01-14T08:28:17.894Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #🌆・chicago: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-14T08:28:17.894Z] [BOT] [STATS] Channel stats saved
[2026-01-14T08:28:19.919Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2899) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Associate Report Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Report Developer
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*