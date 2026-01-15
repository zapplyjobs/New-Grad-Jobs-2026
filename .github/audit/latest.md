# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T21:14:07.228Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T21:13:15.801Z] ========================================
[2026-01-15T21:13:15.803Z] Discord Bot Execution Log
[2026-01-15T21:13:15.803Z] Environment: GitHub Actions
[2026-01-15T21:13:15.803Z] Node Version: v20.19.6
[2026-01-15T21:13:15.804Z] ========================================
[2026-01-15T21:13:15.804Z] Environment Variables Check:
[2026-01-15T21:13:15.804Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T21:13:15.804Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.804Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T21:13:15.804Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T21:13:15.804Z] 
Multi-Channel Configuration:
[2026-01-15T21:13:15.804Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.804Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.804Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.804Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T21:13:15.805Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T21:13:15.805Z] 
Data Files Check:
[2026-01-15T21:13:15.805Z] .github/data/new_jobs.json: ✅ Exists (10 items, 32323 bytes)
[2026-01-15T21:13:15.813Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 976706 bytes)
[2026-01-15T21:13:15.813Z] 
========================================
[2026-01-15T21:13:15.813Z] Starting Enhanced Discord Bot...
[2026-01-15T21:13:15.813Z] ========================================
[2026-01-15T21:13:16.338Z] [BOT] ✅ Loaded V2 database: 1820 jobs
[2026-01-15T21:13:17.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T21:13:17.294Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T21:13:17.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T21:13:17.407Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer I at Kroll
[2026-01-15T21:13:17.409Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T21:13:17.410Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T21:13:17.410Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T21:13:17.411Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T21:13:17.411Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T21:13:17.415Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-15T21:13:17.415Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
[2026-01-15T21:13:17.415Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:13:17.432Z] [BOT ERROR] (node:3011) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T21:13:17.553Z] [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer I @ Kroll',
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
[2026-01-15T21:13:17.553Z] [BOT] ❌ Industry post failed: Data Engineer I
⚠️  Channel full error count: 1/5
[2026-01-15T21:13:19.054Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_dc7620eb
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T21:13:19.055Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:13:19.275Z] [BOT] ✅ Created forum post: 🔴 Senior Data Scientist @ ORG_dc7620eb in #📈・JID_fb739488
[2026-01-15T21:13:19.275Z] [BOT] ✅ Industry: Senior Data Scientist @ ORG_dc7620eb
[2026-01-15T21:13:20.777Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ ORG_dc7620eb (instance #1)
[2026-01-15T21:13:20.777Z] [BOT] 💾 BEFORE ARCHIVING: 1821 jobs in database
[2026-01-15T21:13:20.778Z] [BOT] ✅ No jobs to archive (all 1821 jobs within 7-day window)
[2026-01-15T21:13:20.794Z] [BOT] 💾 Saved posted_jobs.json: 1821 active jobs
[2026-01-15T21:13:20.795Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:20.795Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_5f7f16bb Engineering
[2026-01-15T21:13:20.795Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:13:21.174Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering in #📈・JID_fb739488
[2026-01-15T21:13:21.174Z] [BOT] ✅ Industry: Data Analyst 1 @ ORG_5f7f16bb Engineering
[2026-01-15T21:13:24.263Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T21:13:25.763Z] [BOT] 💾 Marked as posted: Data Analyst 1 @ ORG_5f7f16bb Engineering (instance #1)
[2026-01-15T21:13:25.764Z] [BOT] 💾 BEFORE ARCHIVING: 1822 jobs in database
[2026-01-15T21:13:25.765Z] [BOT] ✅ No jobs to archive (all 1822 jobs within 7-day window)
[2026-01-15T21:13:25.777Z] [BOT] 💾 Saved posted_jobs.json: 1822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:25.778Z] [BOT] 📍 [ROUTING] "Enterprise Performance Analytics Engineer" @ ORG_4262074d Access
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T21:13:25.779Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T21:13:26.005Z] [BOT] ✅ Created forum post: 🏢 Enterprise Performance Analytics Engineer @ ORG_4262074d Access in #📈・JID_fb739488
  ✅ Industry: Enterprise Performance Analytics Engineer @ ORG_4262074d Access
[2026-01-15T21:13:27.755Z] [BOT] ✅ Created forum post: 🏢 Enterprise Performance Analytics Engineer @ ORG_4262074d Access in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:13:29.256Z] [BOT] 💾 Marked as posted: Enterprise Performance Analytics Engineer @ ORG_4262074d Access (instance #1)
[2026-01-15T21:13:29.257Z] [BOT] 💾 BEFORE ARCHIVING: 1823 jobs in database
[2026-01-15T21:13:29.258Z] [BOT] ✅ No jobs to archive (all 1823 jobs within 7-day window)
[2026-01-15T21:13:29.273Z] [BOT] 💾 Saved posted_jobs.json: 1823 active jobs
[2026-01-15T21:13:29.273Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:32.273Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T21:13:32.274Z] [BOT] 📍 [ROUTING] "Minor League Affiliate Technology Coordinator" @ ORG_2bc58fcc League Baseball
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T21:13:32.679Z] [BOT] ✅ Created forum post: 🏢 Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball in #📣・marketing-jobs
  ✅ Industry: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball
[2026-01-15T21:13:34.424Z] [BOT] ✅ Created forum post: 🏢 Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:13:35.925Z] [BOT] 💾 Marked as posted: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-15T21:13:35.926Z] [BOT] 💾 BEFORE ARCHIVING: 1824 jobs in database
[2026-01-15T21:13:35.927Z] [BOT] ✅ No jobs to archive (all 1824 jobs within 7-day window)
[2026-01-15T21:13:35.940Z] [BOT] 💾 Saved posted_jobs.json: 1824 active jobs
[2026-01-15T21:13:35.940Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:38.942Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T21:13:38.942Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f30b244b
[2026-01-15T21:13:38.942Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:13:40.438Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f30b244b in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_f30b244b
[2026-01-15T21:13:42.102Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f30b244b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:13:43.604Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_f30b244b (instance #1)
[2026-01-15T21:13:43.604Z] [BOT] 💾 BEFORE ARCHIVING: 1825 jobs in database
[2026-01-15T21:13:43.605Z] [BOT] ✅ No jobs to archive (all 1825 jobs within 7-day window)
[2026-01-15T21:13:43.617Z] [BOT] 💾 Saved posted_jobs.json: 1825 active jobs
[2026-01-15T21:13:43.617Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:43.618Z] [BOT] 📍 [ROUTING] "Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned)" @ ORG_08c9a13c
[2026-01-15T21:13:43.618Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:13:43.802Z] [BOT] ✅ Created forum post: 🏢 Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_2936dbe3 in #💻・tech-jobs
  ✅ Industry: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c
[2026-01-15T21:13:45.470Z] [BOT] ✅ Created forum post: 🏢 Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_2936dbe3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T21:13:46.970Z] [BOT] 💾 Marked as posted: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c (instance #1)
[2026-01-15T21:13:46.970Z] [BOT] 💾 BEFORE ARCHIVING: 1826 jobs in database
[2026-01-15T21:13:46.972Z] [BOT] ✅ No jobs to archive (all 1826 jobs within 7-day window)
[2026-01-15T21:13:46.986Z] [BOT] 💾 Saved posted_jobs.json: 1826 active jobs
[2026-01-15T21:13:46.986Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Advanced Degree Software Engineer - Fusion" @ ORG_dc7620eb
[2026-01-15T21:13:46.986Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:13:47.219Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb
[2026-01-15T21:13:49.109Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T21:13:50.610Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb (instance #1)
[2026-01-15T21:13:50.610Z] [BOT] 💾 BEFORE ARCHIVING: 1827 jobs in database
[2026-01-15T21:13:50.612Z] [BOT] ✅ No jobs to archive (all 1827 jobs within 7-day window)
[2026-01-15T21:13:50.625Z] [BOT] 💾 Saved posted_jobs.json: 1827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:50.626Z] [BOT] 📍 [ROUTING] "Senior Associate Systems Engineer" @ ORG_d6d2009d
[2026-01-15T21:13:50.626Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T21:13:50.907Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Systems Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Senior Associate Systems Engineer @ ORG_d6d2009d
[2026-01-15T21:13:52.577Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Systems Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T21:13:54.078Z] [BOT] 💾 Marked as posted: Senior Associate Systems Engineer @ ORG_d6d2009d (instance #1)
[2026-01-15T21:13:54.078Z] [BOT] 💾 BEFORE ARCHIVING: 1828 jobs in database
[2026-01-15T21:13:54.079Z] [BOT] ✅ No jobs to archive (all 1828 jobs within 7-day window)
[2026-01-15T21:13:54.092Z] [BOT] 💾 Saved posted_jobs.json: 1828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:13:57.092Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T21:13:57.092Z] [BOT] 📍 [ROUTING] "Geotypical Production Analyst 1" @ ORG_397501d7 Technology
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T21:13:57.374Z] [BOT] ✅ Created forum post: 🏢 Geotypical Production Analyst 1 @ ORG_397501d7 Technology in #🤖・ai-jobs
  ✅ Industry: Geotypical Production Analyst 1 @ ORG_397501d7 Technology
[2026-01-15T21:13:59.201Z] [BOT] ✅ Created forum post: 🏢 Geotypical Production Analyst 1 @ ORG_397501d7 Technology in #🏙️・san-bruno
[2026-01-15T21:13:59.201Z] [BOT] ✅ Location: 🏙️・san-bruno
[2026-01-15T21:14:00.702Z] [BOT] 💾 Marked as posted: Geotypical Production Analyst 1 @ ORG_397501d7 Technology (instance #1)
[2026-01-15T21:14:00.702Z] [BOT] 💾 BEFORE ARCHIVING: 1829 jobs in database
[2026-01-15T21:14:00.704Z] [BOT] ✅ No jobs to archive (all 1829 jobs within 7-day window)
[2026-01-15T21:14:00.716Z] [BOT] 💾 Saved posted_jobs.json: 1829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T21:14:03.717Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-313247 (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_0c057f97 (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_e460bc9c (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_5b77bff1 (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_105b504b (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c36d4464-detail (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311889 (posted within 7 days)
[2026-01-15T21:14:03.718Z] [BOT] ⏭️  Skipping duplicate: JID_ba4ad378 (posted within 7 days)
[2026-01-15T21:14:03.719Z] [BOT] ⏭️  Skipping duplicate: JID_2fb7f596 (posted within 7 days)
[2026-01-15T21:14:03.835Z] [BOT] ✅ Loaded pending queue: 2756 total (2736 pending, 20 enriched, 0 posted)
[2026-01-15T21:14:04.011Z] [BOT] ✅ Saved pending queue: 2756 total (2736 pending, 11 enriched, 9 posted)
[2026-01-15T21:14:04.012Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T21:14:04.068Z] [BOT] 📂 Loaded 4005 existing routing entries
[2026-01-15T21:14:04.135Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4015
   Timestamp: 2026-01-15T21:14:04.116Z
[2026-01-15T21:14:04.135Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T21:14:04.136Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 1
   Skipped: 0
[2026-01-15T21:14:04.136Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T21:14:04.136Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
[2026-01-15T21:14:04.136Z] [BOT] 1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #📈・JID_fb739488: 3 posts
     4. #🦢・los-angeles: 2 posts
[2026-01-15T21:14:04.136Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2026-01-15T21:14:04.136Z] [BOT] [STATS] Channel stats saved
[2026-01-15T21:14:06.163Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3011) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer I
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*