# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T21:23:21.450Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T21:22:44.290Z] ========================================
[2025-12-19T21:22:44.291Z] Discord Bot Execution Log
[2025-12-19T21:22:44.291Z] Environment: GitHub Actions
[2025-12-19T21:22:44.292Z] Node Version: v20.19.6
[2025-12-19T21:22:44.292Z] ========================================
[2025-12-19T21:22:44.292Z] Environment Variables Check:
[2025-12-19T21:22:44.292Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T21:22:44.292Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.292Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T21:22:44.292Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T21:22:44.292Z] 
Multi-Channel Configuration:
[2025-12-19T21:22:44.292Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.292Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T21:22:44.293Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T21:22:44.293Z] 
Data Files Check:
[2025-12-19T21:22:44.294Z] .github/data/new_jobs.json: ✅ Exists (10 items, 26991 bytes)
[2025-12-19T21:22:44.296Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 349809 bytes)
[2025-12-19T21:22:44.296Z] 
========================================
[2025-12-19T21:22:44.296Z] Starting Enhanced Discord Bot...
[2025-12-19T21:22:44.296Z] ========================================
[2025-12-19T21:22:44.836Z] [BOT] ✅ Loaded V2 database: 588 jobs
[2025-12-19T21:22:45.745Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T21:22:45.746Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T21:22:45.746Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T21:22:45.746Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T21:22:45.789Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T21:22:45.835Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T21:22:45.837Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T21:22:45.837Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T21:22:45.837Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T21:22:45.838Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-19T21:22:45.838Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
[2025-12-19T21:22:45.838Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T21:22:45.843Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-19T21:22:45.843Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 2" @ ORG_52575429 Consulting
[2025-12-19T21:22:45.843Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-19T21:22:45.861Z] [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T21:22:46.109Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting in #📣・marketing-jobs
[2025-12-19T21:22:46.109Z] [BOT] ✅ Industry: Geospatial Analyst 2 @ ORG_52575429 Consulting
[2025-12-19T21:22:47.820Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:22:49.320Z] [BOT] 💾 Marked as posted: Geospatial Analyst 2 @ ORG_52575429 Consulting (instance #1)
[2025-12-19T21:22:49.321Z] [BOT] 💾 BEFORE ARCHIVING: 589 jobs in database
[2025-12-19T21:22:49.321Z] [BOT] ✅ No jobs to archive (all 589 jobs within 7-day window)
[2025-12-19T21:22:49.336Z] [BOT] 💾 Saved posted_jobs.json: 589 active jobs
[2025-12-19T21:22:49.336Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:22:52.337Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-19T21:22:52.337Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2025-12-19T21:22:52.337Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:22:52.658Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T21:22:52.659Z] [BOT] ✅ Industry: Java Developer @ ORG_9af9eef3 Technologies
[2025-12-19T21:22:54.528Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T21:22:56.028Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:22:56.028Z] [BOT] 💾 BEFORE ARCHIVING: 590 jobs in database
[2025-12-19T21:22:56.029Z] [BOT] ✅ No jobs to archive (all 590 jobs within 7-day window)
[2025-12-19T21:22:56.359Z] [BOT] 💾 Saved posted_jobs.json: 590 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:22:56.359Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
[2025-12-19T21:22:56.360Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:22:57.192Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2025-12-19T21:22:59.066Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T21:23:00.568Z] [BOT] 💾 Marked as posted: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:00.568Z] [BOT] 💾 BEFORE ARCHIVING: 591 jobs in database
[2025-12-19T21:23:00.568Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2025-12-19T21:23:00.575Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:00.576Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:00.576Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:23:00.941Z] [BOT] ✅ Created forum post: 🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T21:23:00.941Z] [BOT] ✅ Industry: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:02.779Z] [BOT] ✅ Created forum post: 🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies in #🤠・austin
[2025-12-19T21:23:02.779Z] [BOT] ✅ Location: 🤠・austin
[2025-12-19T21:23:04.281Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:04.281Z] [BOT] 💾 BEFORE ARCHIVING: 592 jobs in database
[2025-12-19T21:23:04.282Z] [BOT] ✅ No jobs to archive (all 592 jobs within 7-day window)
[2025-12-19T21:23:04.287Z] [BOT] 💾 Saved posted_jobs.json: 592 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:04.287Z] [BOT] 💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:04.287Z] [BOT] 💾 BEFORE ARCHIVING: 593 jobs in database
[2025-12-19T21:23:04.288Z] [BOT] ✅ No jobs to archive (all 593 jobs within 7-day window)
[2025-12-19T21:23:04.293Z] [BOT] 💾 Saved posted_jobs.json: 593 active jobs
[2025-12-19T21:23:04.293Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 594 jobs in database
[2025-12-19T21:23:04.293Z] [BOT] ✅ No jobs to archive (all 594 jobs within 7-day window)
[2025-12-19T21:23:04.298Z] [BOT] 💾 Saved posted_jobs.json: 594 active jobs
[2025-12-19T21:23:04.298Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:04.298Z] [BOT] 💾 BEFORE ARCHIVING: 595 jobs in database
[2025-12-19T21:23:04.299Z] [BOT] ✅ No jobs to archive (all 595 jobs within 7-day window)
[2025-12-19T21:23:04.304Z] [BOT] 💾 Saved posted_jobs.json: 595 active jobs
[2025-12-19T21:23:04.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:04.304Z] [BOT] 📍 [ROUTING] "Software Engineer openings for OPT/GC/EAD" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:23:04.704Z] [BOT] ✅ Created forum post: 🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:06.612Z] [BOT] ✅ Created forum post: 🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T21:23:08.113Z] [BOT] 💾 Marked as posted: Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:08.113Z] [BOT] 💾 BEFORE ARCHIVING: 596 jobs in database
[2025-12-19T21:23:08.114Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2025-12-19T21:23:08.119Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
[2025-12-19T21:23:08.119Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:08.119Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Fullstack" @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:08.119Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:23:08.325Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T21:23:08.325Z] [BOT] ✅ Industry: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:10.075Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies in #💻・remote-usa
[2025-12-19T21:23:10.076Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T21:23:11.577Z] [BOT] 💾 Marked as posted: Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:11.577Z] [BOT] 💾 BEFORE ARCHIVING: 597 jobs in database
[2025-12-19T21:23:11.578Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2025-12-19T21:23:11.583Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:11.583Z] [BOT] 📍 [ROUTING] "OBIEE Salesforce Training and Placement" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2025-12-19T21:23:11.583Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:23:11.925Z] [BOT] ✅ Created forum post: 🏢 OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies
[2025-12-19T21:23:13.583Z] [BOT ERROR] ❌ Error posting job OBIEE Salesforce Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies',
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
[2025-12-19T21:23:13.584Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T21:23:15.084Z] [BOT] 💾 Marked as posted: OBIEE Salesforce Training and Placement @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:23:15.084Z] [BOT] 💾 BEFORE ARCHIVING: 598 jobs in database
[2025-12-19T21:23:15.085Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2025-12-19T21:23:15.090Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:23:18.091Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_73d69676 (posted within 7 days)
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_aa3587dd (posted within 7 days)
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_8924f07e (posted within 7 days)
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_c114392d (posted within 7 days)
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_3278d02d (posted within 7 days)
⏭️  Skipping duplicate: JID_e33c64fd (posted within 7 days)
[2025-12-19T21:23:18.092Z] [BOT] ⏭️  Skipping duplicate: JID_747d14a2 (posted within 7 days)
[2025-12-19T21:23:18.096Z] [BOT] ✅ Loaded pending queue: 327 total (307 pending, 20 enriched, 0 posted)
[2025-12-19T21:23:18.100Z] [BOT] ✅ Saved pending queue: 327 total (307 pending, 13 enriched, 7 posted)
[2025-12-19T21:23:18.100Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T21:23:18.142Z] [BOT] 📂 Loaded 670 existing routing entries
[2025-12-19T21:23:18.183Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-12-19T21:23:18.183Z] [BOT] Total entries: 677
   Timestamp: 2025-12-19T21:23:18.180Z
[2025-12-19T21:23:18.184Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T21:23:18.184Z] [BOT] Total attempts: 14
   Successful: 13
   Failed: 1
   Skipped: 0
[2025-12-19T21:23:18.184Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-19T21:23:18.184Z] [BOT] Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤠・austin: 4 posts
     3. #💻・remote-usa: 2 posts
     4. #📣・marketing-jobs: 1 posts
[2025-12-19T21:23:18.185Z] [BOT] [STATS] Channel stats saved
[2025-12-19T21:23:20.197Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job OBIEE Salesforce Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*