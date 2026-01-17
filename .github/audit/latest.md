# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T22:42:08.362Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T22:41:22.644Z] ========================================
[2026-01-17T22:41:22.646Z] Discord Bot Execution Log
[2026-01-17T22:41:22.646Z] Environment: GitHub Actions
[2026-01-17T22:41:22.646Z] Node Version: v20.19.6
[2026-01-17T22:41:22.646Z] ========================================
[2026-01-17T22:41:22.646Z] Environment Variables Check:
[2026-01-17T22:41:22.646Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T22:41:22.646Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.646Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T22:41:22.646Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T22:41:22.646Z] 
Multi-Channel Configuration:
[2026-01-17T22:41:22.646Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.646Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T22:41:22.647Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T22:41:22.647Z] 
Data Files Check:
[2026-01-17T22:41:22.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 35631 bytes)
[2026-01-17T22:41:22.657Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1338130 bytes)
[2026-01-17T22:41:22.658Z] 
========================================
[2026-01-17T22:41:22.658Z] Starting Enhanced Discord Bot...
[2026-01-17T22:41:22.658Z] ========================================
[2026-01-17T22:41:23.130Z] [BOT] ✅ Loaded V2 database: 2473 jobs
[2026-01-17T22:41:23.725Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T22:41:23.726Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T22:41:23.726Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T22:41:23.889Z] [BOT] ✅ Loaded pending queue: 2892 total (2872 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Kernel Software Engineer at Tesla
[2026-01-17T22:41:23.894Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T22:41:23.894Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T22:41:23.894Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T22:41:23.895Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T22:41:23.895Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T22:41:23.897Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-17T22:41:23.898Z] [BOT] 📍 [ROUTING] "Kernel Software Engineer" @ ORG_f89f8538
[2026-01-17T22:41:23.898Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:41:23.918Z] [BOT ERROR] (node:2946) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T22:41:24.127Z] [BOT] ✅ Created forum post: ⚡ Kernel Software Engineer @ ORG_f89f8538 in #💻・tech-jobs
  ✅ Industry: Kernel Software Engineer @ ORG_f89f8538
[2026-01-17T22:41:25.900Z] [BOT] ✅ Created forum post: ⚡ Kernel Software Engineer @ ORG_f89f8538 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:41:27.400Z] [BOT] 💾 Marked as posted: Kernel Software Engineer @ ORG_f89f8538 (instance #1)
[2026-01-17T22:41:27.401Z] [BOT] 💾 BEFORE ARCHIVING: 2474 jobs in database
[2026-01-17T22:41:27.403Z] [BOT] ✅ No jobs to archive (all 2474 jobs within 7-day window)
[2026-01-17T22:41:27.424Z] [BOT] 💾 Saved posted_jobs.json: 2474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:27.425Z] [BOT] 📍 [ROUTING] "Alternative Data Management - Analyst" @ iCapital Network
[2026-01-17T22:41:27.425Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:41:27.718Z] [BOT] ✅ Created forum post: 🏢 Alternative Data Management - Analyst @ iCapital Network in #💻・tech-jobs
  ✅ Industry: Alternative Data Management - Analyst @ iCapital Network
[2026-01-17T22:41:29.490Z] [BOT] ✅ Created forum post: 🏢 Alternative Data Management - Analyst @ iCapital Network in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T22:41:30.992Z] [BOT] 💾 Marked as posted: Alternative Data Management - Analyst @ iCapital Network (instance #1)
[2026-01-17T22:41:30.992Z] [BOT] 💾 BEFORE ARCHIVING: 2475 jobs in database
[2026-01-17T22:41:30.994Z] [BOT] ✅ No jobs to archive (all 2475 jobs within 7-day window)
[2026-01-17T22:41:31.009Z] [BOT] 💾 Saved posted_jobs.json: 2475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:31.009Z] [BOT] 📍 [ROUTING] "Software Developer - Amts" @ ORG_412b726d Health
   Category: TECH (matched: "software")
[2026-01-17T22:41:31.009Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:41:31.468Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Amts @ ORG_412b726d Health in #💻・tech-jobs
  ✅ Industry: Software Developer - Amts @ ORG_412b726d Health
[2026-01-17T22:41:33.144Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Amts @ ORG_412b726d Health in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-17T22:41:34.646Z] [BOT] 💾 Marked as posted: Software Developer - Amts @ ORG_412b726d Health (instance #1)
[2026-01-17T22:41:34.647Z] [BOT] 💾 BEFORE ARCHIVING: 2476 jobs in database
[2026-01-17T22:41:34.649Z] [BOT] ✅ No jobs to archive (all 2476 jobs within 7-day window)
[2026-01-17T22:41:34.666Z] [BOT] 💾 Saved posted_jobs.json: 2476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:34.667Z] [BOT] 📍 [ROUTING] "Business Solutions Developer 1" @ ORG_441f2234
[2026-01-17T22:41:34.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:41:34.852Z] [BOT] ✅ Created forum post: 🏢 Business Solutions Developer 1 @ ORG_441f2234 in #💻・tech-jobs
[2026-01-17T22:41:34.852Z] [BOT] ✅ Industry: Business Solutions Developer 1 @ ORG_441f2234
[2026-01-17T22:41:36.354Z] [BOT] 💾 Marked as posted: Business Solutions Developer 1 @ ORG_441f2234 (instance #1)
[2026-01-17T22:41:36.354Z] [BOT] 💾 BEFORE ARCHIVING: 2477 jobs in database
[2026-01-17T22:41:36.356Z] [BOT] ✅ No jobs to archive (all 2477 jobs within 7-day window)
[2026-01-17T22:41:36.373Z] [BOT] 💾 Saved posted_jobs.json: 2477 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:36.374Z] [BOT] 📍 [ROUTING] "Senior Associate - Analytics - Media" @ ORG_3718d82b
   Category: TECH (matched: "analytics")
[2026-01-17T22:41:36.374Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:41:36.743Z] [BOT] ✅ Created forum post: 🏢 Senior Associate - Analytics - Media @ ORG_3718d82b in #💻・tech-jobs
[2026-01-17T22:41:36.743Z] [BOT] ✅ Industry: Senior Associate - Analytics - Media @ ORG_3718d82b
[2026-01-17T22:41:38.245Z] [BOT] 💾 Marked as posted: Senior Associate - Analytics - Media @ ORG_3718d82b (instance #1)
[2026-01-17T22:41:38.246Z] [BOT] 💾 BEFORE ARCHIVING: 2478 jobs in database
[2026-01-17T22:41:38.247Z] [BOT] ✅ No jobs to archive (all 2478 jobs within 7-day window)
[2026-01-17T22:41:38.262Z] [BOT] 💾 Saved posted_jobs.json: 2478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:41.263Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T22:41:41.264Z] [BOT] 📍 [ROUTING] "Machine Learning Analyst" @ ORG_55640109 Capital
[2026-01-17T22:41:41.264Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T22:41:41.749Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Analyst @ ORG_55640109 Capital in #🤖・ai-jobs
  ✅ Industry: Machine Learning Analyst @ ORG_55640109 Capital
[2026-01-17T22:41:43.542Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Analyst @ ORG_55640109 Capital in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-17T22:41:45.043Z] [BOT] 💾 Marked as posted: Machine Learning Analyst @ ORG_55640109 Capital (instance #1)
[2026-01-17T22:41:45.044Z] [BOT] 💾 BEFORE ARCHIVING: 2479 jobs in database
[2026-01-17T22:41:45.046Z] [BOT] ✅ No jobs to archive (all 2479 jobs within 7-day window)
[2026-01-17T22:41:45.063Z] [BOT] 💾 Saved posted_jobs.json: 2479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:45.064Z] [BOT] 📍 [ROUTING] "Predoctoral Appointee - Engineer Research Associate" @ ORG_a867f63f National Laboratory
[2026-01-17T22:41:45.064Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T22:41:45.360Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-17T22:41:45.361Z] [BOT] ✅ Industry: Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory
[2026-01-17T22:41:47.126Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-17T22:41:47.126Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-17T22:41:48.627Z] [BOT] 💾 Marked as posted: Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-17T22:41:48.627Z] [BOT] 💾 BEFORE ARCHIVING: 2480 jobs in database
[2026-01-17T22:41:48.629Z] [BOT] ✅ No jobs to archive (all 2480 jobs within 7-day window)
[2026-01-17T22:41:48.645Z] [BOT] 💾 Saved posted_jobs.json: 2480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:48.646Z] [BOT] 📍 [ROUTING] "Research Analyst" @ ORG_fe16a941 Lang LaSalle (JLL)
   Category: AI (matched: "artificial intelligence")
[2026-01-17T22:41:48.646Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T22:41:48.834Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-17T22:41:50.531Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:41:52.033Z] [BOT] 💾 Marked as posted: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) (instance #1)
[2026-01-17T22:41:52.033Z] [BOT] 💾 BEFORE ARCHIVING: 2481 jobs in database
[2026-01-17T22:41:52.035Z] [BOT] ✅ No jobs to archive (all 2481 jobs within 7-day window)
[2026-01-17T22:41:52.051Z] [BOT] 💾 Saved posted_jobs.json: 2481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:52.051Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Software Development Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-17T22:41:52.051Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T22:41:52.589Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0
[2026-01-17T22:41:54.290Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:41:55.792Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 (instance #1)
💾 BEFORE ARCHIVING: 2482 jobs in database
[2026-01-17T22:41:55.794Z] [BOT] ✅ No jobs to archive (all 2482 jobs within 7-day window)
[2026-01-17T22:41:55.808Z] [BOT] 💾 Saved posted_jobs.json: 2482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:41:58.810Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T22:41:58.810Z] [BOT] 📍 [ROUTING] "Data Analyst 1 - Data Warehouse" @ ORG_17636dd6
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T22:41:58.954Z] [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 - Data Warehouse @ Frost',
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
[2026-01-17T22:41:58.954Z] [BOT] ❌ Industry post failed: Data Analyst 1 - Data Warehouse
⚠️  Channel full error count: 1/5
[2026-01-17T22:42:00.568Z] [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 - Data Warehouse @ Frost',
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
[2026-01-17T22:42:00.568Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T22:42:05.070Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-17T22:42:05.071Z] [BOT] ⏭️  Skipping duplicate: JID_f31bd15a (posted within 7 days)
[2026-01-17T22:42:05.071Z] [BOT] ⏭️  Skipping duplicate: JID_1e38ba0d (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_35faf930-engineer_r160657 (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_22bdff7a-amts_r14043 (posted within 7 days)
[2026-01-17T22:42:05.072Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_fc0317e1-i_1601216 (posted within 7 days)
[2026-01-17T22:42:05.073Z] [BOT] ⏭️  Skipping duplicate: JID_0df88236 (posted within 7 days)
[2026-01-17T22:42:05.236Z] [BOT] ✅ Loaded pending queue: 2892 total (2872 pending, 20 enriched, 0 posted)
[2026-01-17T22:42:05.426Z] [BOT] ✅ Saved pending queue: 2892 total (2872 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-17T22:42:05.427Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T22:42:05.491Z] [BOT] 📂 Loaded 4645 existing routing entries
[2026-01-17T22:42:05.555Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4655
   Timestamp: 2026-01-17T22:42:05.539Z
[2026-01-17T22:42:05.556Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 18
[2026-01-17T22:42:05.556Z] [BOT] Successful: 16
   Failed: 2
   Skipped: 0
[2026-01-17T22:42:05.556Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T22:42:05.556Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-17T22:42:05.556Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🌉・san-francisco: 3 posts
     4. #🚌・boston: 2 posts
     5. #💻・remote-usa: 1 posts
[2026-01-17T22:42:05.557Z] [BOT] [STATS] Channel stats saved
[2026-01-17T22:42:07.576Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2946) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst 1 - Data Warehouse
- [BOT ERROR] ❌ Error posting job Data Analyst 1 - Data Warehouse: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*