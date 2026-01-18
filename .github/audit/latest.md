# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T22:54:26.316Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T22:53:34.488Z] ========================================
[2026-01-18T22:53:34.490Z] Discord Bot Execution Log
[2026-01-18T22:53:34.490Z] Environment: GitHub Actions
[2026-01-18T22:53:34.490Z] Node Version: v20.19.6
[2026-01-18T22:53:34.490Z] ========================================
[2026-01-18T22:53:34.490Z] Environment Variables Check:
[2026-01-18T22:53:34.490Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T22:53:34.490Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.490Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T22:53:34.490Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T22:53:34.490Z] 
Multi-Channel Configuration:
[2026-01-18T22:53:34.491Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T22:53:34.491Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T22:53:34.491Z] 
Data Files Check:
[2026-01-18T22:53:34.492Z] .github/data/new_jobs.json: ✅ Exists (10 items, 89804 bytes)
[2026-01-18T22:53:34.502Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1509508 bytes)
[2026-01-18T22:53:34.502Z] 
========================================
[2026-01-18T22:53:34.502Z] Starting Enhanced Discord Bot...
[2026-01-18T22:53:34.502Z] ========================================
[2026-01-18T22:53:35.018Z] [BOT] ✅ Loaded V2 database: 2778 jobs
[2026-01-18T22:53:35.781Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T22:53:35.782Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T22:53:35.782Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T22:53:35.899Z] [BOT] ✅ Loaded pending queue: 2829 total (2809 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Dental Assistant at Blue Ridge Health
[2026-01-18T22:53:35.903Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T22:53:35.904Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T22:53:35.904Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T22:53:35.905Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-18T22:53:35.905Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - BizOps Lead, BD @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T22:53:35.905Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T22:53:35.909Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-18T22:53:35.910Z] [BOT] 📍 [ROUTING] "Dental Assistant" @ ORG_ec7d56a0 Ridge Health
[2026-01-18T22:53:35.910Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T22:53:35.927Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T22:53:36.081Z] [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health',
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
[2026-01-18T22:53:36.082Z] [BOT] ❌ Industry post failed: Dental Assistant
⚠️  Channel full error count: 1/5
[2026-01-18T22:53:37.734Z] [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health',
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
[2026-01-18T22:53:37.734Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T22:53:39.235Z] [BOT] 📍 [ROUTING] "Speech Language Pathologist Clinical Fellow" @ ORG_a284c4f1 Therapy
[2026-01-18T22:53:39.235Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T22:53:39.432Z] [BOT] ✅ Created forum post: 🏢 Speech Language Pathologist Clinical Fellow @ ORG_a284c4f1 Therapy in #🩺・healthcare-jobs
[2026-01-18T22:53:39.432Z] [BOT] ✅ Industry: Speech Language Pathologist Clinical Fellow @ ORG_a284c4f1 Therapy
[2026-01-18T22:53:41.209Z] [BOT] ✅ Created forum post: 🏢 Speech Language Pathologist Clinical Fellow @ ORG_a284c4f1 Therapy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:53:42.710Z] [BOT] 💾 Marked as posted: Speech Language Pathologist Clinical Fellow @ ORG_a284c4f1 Therapy (instance #1)
[2026-01-18T22:53:42.711Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-18T22:53:42.713Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-18T22:53:42.735Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:53:45.736Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-18T22:53:45.737Z] [BOT] 📍 [ROUTING] "Product Designer" @ clerk
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T22:53:45.965Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ clerk in #📣・marketing-jobs
  ✅ Industry: Product Designer @ clerk
[2026-01-18T22:53:47.467Z] [BOT] 💾 Marked as posted: Product Designer @ clerk (instance #1)
[2026-01-18T22:53:47.468Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-18T22:53:47.470Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-18T22:53:47.493Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:53:47.494Z] [BOT] 📍 [ROUTING] "Community Marketing Manager - Figma Weave (New York, United States) " @ figma
[2026-01-18T22:53:47.494Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T22:53:47.712Z] [BOT] ✅ Created forum post: 🏢 Community Marketing Manager - Figma Weave (New York, United States)  @ figma in #📣・marketing-jobs
  ✅ Industry: Community Marketing Manager - Figma Weave (New York, United States)  @ figma
[2026-01-18T22:53:49.408Z] [BOT] ✅ Created forum post: 🏢 Community Marketing Manager - Figma Weave (New York, United States)  @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T22:53:50.910Z] [BOT] 💾 Marked as posted: Community Marketing Manager - Figma Weave (New York, United States)  @ figma (instance #1)
[2026-01-18T22:53:50.910Z] [BOT] 💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-18T22:53:50.912Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-18T22:53:50.930Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:53:53.931Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T22:53:53.932Z] [BOT] 📍 [ROUTING] "Postdoctoral researcher Omics" @ ORG_3013b18f & Johnson
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T22:53:53.932Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-18T22:53:54.158Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral researcher Omics @ ORG_3013b18f & Johnson in #🤖・ai-jobs
  ✅ Industry: Postdoctoral researcher Omics @ ORG_3013b18f & Johnson
[2026-01-18T22:53:55.942Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral researcher Omics @ ORG_3013b18f & Johnson in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T22:53:57.444Z] [BOT] 💾 Marked as posted: Postdoctoral researcher Omics @ ORG_3013b18f & Johnson (instance #1)
[2026-01-18T22:53:57.444Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-18T22:53:57.446Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-18T22:53:57.463Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
[2026-01-18T22:53:57.463Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T22:53:57.463Z] [BOT] 📍 [ROUTING] "Data Engineer II - Gen AI - Music" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-18T22:53:57.463Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T22:53:57.464Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T22:53:57.718Z] [BOT] ✅ Created forum post: 🏢 Data Engineer II - Gen AI - Music @ spotify in #🤖・ai-jobs
[2026-01-18T22:53:57.718Z] [BOT] ✅ Industry: Data Engineer II - Gen AI - Music @ spotify
[2026-01-18T22:53:59.451Z] [BOT] ✅ Created forum post: 🏢 Data Engineer II - Gen AI - Music @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T22:54:00.953Z] [BOT] 💾 Marked as posted: Data Engineer II - Gen AI - Music @ spotify (instance #1)
[2026-01-18T22:54:00.953Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-18T22:54:00.955Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-18T22:54:00.976Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:54:00.976Z] [BOT] 📍 [ROUTING] "Research Associate in Theoretical and Computational Condensed Matter Physics" @ ORG_13e36faa Lab
[2026-01-18T22:54:00.976Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T22:54:01.181Z] [BOT] ✅ Created forum post: 🏢 Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab
[2026-01-18T22:54:03.031Z] [BOT] ✅ Created forum post: 🏢 Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T22:54:04.532Z] [BOT] 💾 Marked as posted: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab (instance #1)
[2026-01-18T22:54:04.533Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-18T22:54:04.534Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-18T22:54:04.552Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:54:07.553Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T22:54:07.554Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Denver" @ datadog
[2026-01-18T22:54:07.554Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T22:54:08.026Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Denver @ datadog in #💲・sales-jobs
[2026-01-18T22:54:08.026Z] [BOT] ✅ Industry: Customer Success Associate - Denver @ datadog
[2026-01-18T22:54:09.528Z] [BOT] 💾 Marked as posted: Customer Success Associate - Denver @ datadog (instance #1)
[2026-01-18T22:54:09.529Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-18T22:54:09.530Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-18T22:54:09.547Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:54:12.548Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T22:54:12.548Z] [BOT] 📍 [ROUTING] "Security Director, Sales Engineering" @ datadog
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:54:12.768Z] [BOT] ✅ Created forum post: 🏢 Security Director, Sales Engineering @ datadog in #💻・tech-jobs
  ✅ Industry: Security Director, Sales Engineering @ datadog
[2026-01-18T22:54:14.483Z] [BOT] ✅ Created forum post: 🏢 Security Director, Sales Engineering @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T22:54:15.985Z] [BOT] 💾 Marked as posted: Security Director, Sales Engineering @ datadog (instance #1)
[2026-01-18T22:54:15.985Z] [BOT] 💾 BEFORE ARCHIVING: 2786 jobs in database
[2026-01-18T22:54:15.987Z] [BOT] ✅ No jobs to archive (all 2786 jobs within 7-day window)
[2026-01-18T22:54:16.006Z] [BOT] 💾 Saved posted_jobs.json: 2786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:54:16.006Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
[2026-01-18T22:54:16.006Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:54:16.368Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2026-01-18T22:54:18.102Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T22:54:19.604Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_7dcce8d0ine (instance #1)
[2026-01-18T22:54:19.604Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-18T22:54:19.605Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-18T22:54:19.623Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-18T22:54:19.624Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T22:54:22.625Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T22:54:22.626Z] [BOT] ⏭️  Skipping duplicate: JID_5d69e6d3 (posted within 7 days)
[2026-01-18T22:54:22.626Z] [BOT] ⏭️  Skipping duplicate: JID_277ab49f (posted within 7 days)
[2026-01-18T22:54:22.626Z] [BOT] ⏭️  Skipping duplicate: JID_bb7db7ae-health_r-052122 (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_1c4814a4 (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_d941c973-physics_jr102043 (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_92dc589f (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-18T22:54:22.627Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
[2026-01-18T22:54:22.741Z] [BOT] ✅ Loaded pending queue: 2829 total (2809 pending, 20 enriched, 0 posted)
[2026-01-18T22:54:22.911Z] [BOT] ✅ Saved pending queue: 2829 total (2809 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-18T22:54:22.911Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T22:54:22.970Z] [BOT] 📂 Loaded 4915 existing routing entries
[2026-01-18T22:54:23.054Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-18T22:54:23.054Z] [BOT] New entries: 10
   Total entries: 4925
   Timestamp: 2026-01-18T22:54:23.034Z
[2026-01-18T22:54:23.055Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T22:54:23.055Z] [BOT] Total attempts: 18
   Successful: 16
   Failed: 2
   Skipped: 0
[2026-01-18T22:54:23.055Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T22:54:23.055Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 10
   Top channels:
     1. #🗽・new-york: 3 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📣・marketing-jobs: 2 posts
[2026-01-18T22:54:23.055Z] [BOT] 4. #💻・tech-jobs: 2 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-18T22:54:23.055Z] [BOT] [STATS] Channel stats saved
[2026-01-18T22:54:25.078Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Dental Assistant
- [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*