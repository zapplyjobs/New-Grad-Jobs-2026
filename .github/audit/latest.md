# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T19:11:10.582Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T19:10:09.842Z] ========================================
[2026-01-14T19:10:09.844Z] Discord Bot Execution Log
[2026-01-14T19:10:09.844Z] Environment: GitHub Actions
[2026-01-14T19:10:09.844Z] Node Version: v20.19.6
[2026-01-14T19:10:09.844Z] ========================================
[2026-01-14T19:10:09.844Z] Environment Variables Check:
[2026-01-14T19:10:09.844Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T19:10:09.844Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.844Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T19:10:09.845Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T19:10:09.845Z] 
Multi-Channel Configuration:
[2026-01-14T19:10:09.845Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T19:10:09.845Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T19:10:09.846Z] 
Data Files Check:
[2026-01-14T19:10:09.846Z] .github/data/new_jobs.json: ✅ Exists (10 items, 93178 bytes)
[2026-01-14T19:10:09.852Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 726288 bytes)
[2026-01-14T19:10:09.852Z] 
========================================
[2026-01-14T19:10:09.852Z] Starting Enhanced Discord Bot...
[2026-01-14T19:10:09.852Z] ========================================
[2026-01-14T19:10:10.377Z] [BOT] ✅ Loaded V2 database: 1363 jobs
[2026-01-14T19:10:11.181Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T19:10:11.182Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T19:10:11.182Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T19:10:11.294Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Applications Analyst 1 at Endeavor Health
[2026-01-14T19:10:11.297Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T19:10:11.297Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T19:10:11.297Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T19:10:11.298Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T19:10:11.298Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T19:10:11.303Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T19:10:11.303Z] [BOT] 📍 [ROUTING] "Applications Analyst 1" @ ORG_66ea81b5 Health
[2026-01-14T19:10:11.304Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T19:10:11.320Z] [BOT ERROR] (node:2652) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T19:10:11.782Z] [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Applications Analyst 1 @ ORG_66ea81b5 Health',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-14T19:10:11.782Z] [BOT] ❌ Industry post failed: Applications Analyst 1
⚠️  Channel full error count: 1/5
[2026-01-14T19:10:13.733Z] [BOT] ✅ Created forum post: 🏢 Applications Analyst 1 @ ORG_66ea81b5 Health in #🌆・chicago
[2026-01-14T19:10:13.733Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T19:10:15.234Z] [BOT] 💾 Marked as posted: Applications Analyst 1 @ ORG_66ea81b5 Health (instance #1)
[2026-01-14T19:10:15.234Z] [BOT] 💾 BEFORE ARCHIVING: 1364 jobs in database
[2026-01-14T19:10:15.235Z] [BOT] ✅ No jobs to archive (all 1364 jobs within 7-day window)
[2026-01-14T19:10:15.248Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:18.248Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T19:10:18.249Z] [BOT] 📍 [ROUTING] "IT Systems Engineer" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:10:18.786Z] [BOT] ✅ Created forum post: 🏢 IT Systems Engineer @ anthropic in #💻・tech-jobs
  ✅ Industry: IT Systems Engineer @ anthropic
[2026-01-14T19:10:20.806Z] [BOT] ✅ Created forum post: 🏢 IT Systems Engineer @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:10:22.307Z] [BOT] 💾 Marked as posted: IT Systems Engineer @ anthropic (instance #1)
[2026-01-14T19:10:22.307Z] [BOT] 💾 BEFORE ARCHIVING: 1365 jobs in database
[2026-01-14T19:10:22.308Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-01-14T19:10:22.318Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:22.319Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Level 1 - Direct-to-Consumer Streaming" @ ORG_91249fea
[2026-01-14T19:10:22.319Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:10:22.585Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea in #💻・tech-jobs
[2026-01-14T19:10:22.585Z] [BOT] ✅ Industry: Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea
[2026-01-14T19:10:25.781Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-14T19:10:27.281Z] [BOT] 💾 Marked as posted: Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea (instance #1)
[2026-01-14T19:10:27.282Z] [BOT] 💾 BEFORE ARCHIVING: 1366 jobs in database
[2026-01-14T19:10:27.283Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-01-14T19:10:27.293Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
[2026-01-14T19:10:27.293Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:27.293Z] [BOT] 📍 [ROUTING] "Application Security Engineering Manager" @ anthropic
[2026-01-14T19:10:27.294Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:10:27.515Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineering Manager @ anthropic in #💻・tech-jobs
  ✅ Industry: Application Security Engineering Manager @ anthropic
[2026-01-14T19:10:29.586Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineering Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:10:31.088Z] [BOT] 💾 Marked as posted: Application Security Engineering Manager @ anthropic (instance #1)
[2026-01-14T19:10:31.088Z] [BOT] 💾 BEFORE ARCHIVING: 1367 jobs in database
[2026-01-14T19:10:31.089Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-01-14T19:10:31.098Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:31.098Z] [BOT] 📍 [ROUTING] "Engineering Manager, Cloud Security" @ anthropic
[2026-01-14T19:10:31.098Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:10:31.552Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Security @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Cloud Security @ anthropic
[2026-01-14T19:10:33.356Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Security @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:10:34.856Z] [BOT] 💾 Marked as posted: Engineering Manager, Cloud Security @ anthropic (instance #1)
[2026-01-14T19:10:34.857Z] [BOT] 💾 BEFORE ARCHIVING: 1368 jobs in database
[2026-01-14T19:10:34.858Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-01-14T19:10:34.868Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:34.868Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
[2026-01-14T19:10:34.868Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:10:35.279Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-01-14T19:10:37.046Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T19:10:38.546Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_b1b059ca Systems (instance #1)
[2026-01-14T19:10:38.547Z] [BOT] 💾 BEFORE ARCHIVING: 1369 jobs in database
[2026-01-14T19:10:38.548Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-01-14T19:10:38.558Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
[2026-01-14T19:10:38.558Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:41.559Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T19:10:41.559Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:10:43.463Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #💲・sales-jobs
  ✅ Industry: Operations Analyst @ ORG_ad6fabcb
[2026-01-14T19:10:45.758Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T19:10:47.259Z] [BOT] 💾 Marked as posted: Operations Analyst @ ORG_ad6fabcb (instance #1)
[2026-01-14T19:10:47.259Z] [BOT] 💾 BEFORE ARCHIVING: 1370 jobs in database
[2026-01-14T19:10:47.260Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-01-14T19:10:47.271Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
[2026-01-14T19:10:47.272Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:50.272Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T19:10:50.272Z] [BOT] 📍 [ROUTING] "Young Investigator - Flexolmo" @ ORG_b344d80e Allen Institute for AI
[2026-01-14T19:10:50.273Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:10:50.524Z] [BOT] ✅ Created forum post: 🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI in #🤖・ai-jobs
  ✅ Industry: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI
[2026-01-14T19:10:52.296Z] [BOT] ✅ Created forum post: 🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI in #🌉・san-francisco
[2026-01-14T19:10:52.296Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:10:53.797Z] [BOT] 💾 Marked as posted: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI (instance #1)
[2026-01-14T19:10:53.797Z] [BOT] 💾 BEFORE ARCHIVING: 1371 jobs in database
[2026-01-14T19:10:53.798Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-01-14T19:10:53.808Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
[2026-01-14T19:10:53.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:10:53.809Z] [BOT] 📍 [ROUTING] "Brand Designer" @ nominal
[2026-01-14T19:10:53.809Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:10:54.075Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ nominal in #🤖・ai-jobs
[2026-01-14T19:10:54.076Z] [BOT] ✅ Industry: Brand Designer @ nominal
[2026-01-14T19:10:55.773Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ nominal in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T19:10:57.275Z] [BOT] 💾 Marked as posted: Brand Designer @ nominal (instance #1)
[2026-01-14T19:10:57.275Z] [BOT] 💾 BEFORE ARCHIVING: 1372 jobs in database
[2026-01-14T19:10:57.276Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-01-14T19:10:57.285Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
[2026-01-14T19:10:57.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:11:00.286Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T19:11:00.287Z] [BOT] 📍 [ROUTING] "Software Engineer, Payments" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T19:11:00.559Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Payments @ discord in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Payments @ discord
[2026-01-14T19:11:02.294Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Payments @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:11:03.796Z] [BOT] 💾 Marked as posted: Software Engineer, Payments @ discord (instance #1)
[2026-01-14T19:11:03.796Z] [BOT] 💾 BEFORE ARCHIVING: 1373 jobs in database
[2026-01-14T19:11:03.797Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-01-14T19:11:03.806Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:11:06.806Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T19:11:06.806Z] [BOT] ⏭️  Skipping duplicate: JID_3984b544-i_r36505 (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_e4ae921c (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_59941b58-cx_2001-job-8330 (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_adcf6a54-cx_2002-job-14900 (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1d79e (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_b454904b (posted within 7 days)
⏭️  Skipping duplicate: JID_dd2952fb (posted within 7 days)
⏭️  Skipping duplicate: JID_2b045dca (posted within 7 days)
[2026-01-14T19:11:06.807Z] [BOT] ⏭️  Skipping duplicate: JID_0af813db (posted within 7 days)
⏭️  Skipping duplicate: JID_748bd25e (posted within 7 days)
[2026-01-14T19:11:06.934Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[2026-01-14T19:11:07.090Z] [BOT] ✅ Saved pending queue: 2735 total (2715 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T19:11:07.091Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T19:11:07.145Z] [BOT] 📂 Loaded 3495 existing routing entries
[2026-01-14T19:11:07.205Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3505
   Timestamp: 2026-01-14T19:11:07.191Z
[2026-01-14T19:11:07.206Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T19:11:07.206Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-14T19:11:07.206Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
[2026-01-14T19:11:07.206Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 5 posts
     3. #🤠・austin: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-14T19:11:07.206Z] [BOT] [STATS] Channel stats saved
[2026-01-14T19:11:09.232Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2652) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Applications Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Applications Analyst 1
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*