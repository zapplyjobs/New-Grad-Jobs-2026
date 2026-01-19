# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T23:29:48.844Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T23:28:53.028Z] ========================================
[2026-01-19T23:28:53.030Z] Discord Bot Execution Log
[2026-01-19T23:28:53.030Z] Environment: GitHub Actions
[2026-01-19T23:28:53.030Z] Node Version: v20.19.6
[2026-01-19T23:28:53.030Z] ========================================
[2026-01-19T23:28:53.031Z] Environment Variables Check:
[2026-01-19T23:28:53.031Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T23:28:53.031Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T23:28:53.031Z] 
Multi-Channel Configuration:
[2026-01-19T23:28:53.031Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.031Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.032Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.032Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.032Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.032Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T23:28:53.032Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T23:28:53.032Z] 
Data Files Check:
[2026-01-19T23:28:53.033Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48658 bytes)
[2026-01-19T23:28:53.042Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1553705 bytes)
[2026-01-19T23:28:53.042Z] 
========================================
[2026-01-19T23:28:53.042Z] Starting Enhanced Discord Bot...
[2026-01-19T23:28:53.042Z] ========================================
[2026-01-19T23:28:53.560Z] [BOT] ✅ Loaded V2 database: 2836 jobs
[2026-01-19T23:28:54.382Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T23:28:54.382Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T23:28:54.382Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T23:28:54.498Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Data Specialist - Florida - US at RWS
[2026-01-19T23:28:54.503Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T23:28:54.503Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-19T23:28:54.503Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-19T23:28:54.503Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-19T23:28:54.503Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-19T23:28:54.596Z] [BOT] ✅ Loaded pending queue: 2813 total (2793 pending, 20 enriched, 0 posted)
[2026-01-19T23:28:54.766Z] [BOT] ✅ Saved pending queue: 2803 total (2793 pending, 10 enriched, 0 posted)
[2026-01-19T23:28:54.766Z] [BOT] 🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 10 jobs (10 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-19T23:28:54.767Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-19T23:28:54.767Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T23:28:54.771Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T23:28:54.772Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Florida - US" @ ORG_f3ae3598
[2026-01-19T23:28:54.772Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T23:28:54.772Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T23:28:54.789Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T23:28:54.922Z] [BOT ERROR] ❌ Error posting job AI Data Specialist - Florida - US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Data Specialist - Florida - US @ RWS',
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
[2026-01-19T23:28:54.922Z] [BOT] ❌ Industry post failed: AI Data Specialist - Florida - US
⚠️  Channel full error count: 1/5
[2026-01-19T23:28:56.425Z] [BOT] 📍 [ROUTING] "Agent Engineer" @ ORG_581c57aa Health
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T23:28:56.425Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T23:28:57.707Z] [BOT] ✅ Created forum post: 🏢 Agent Engineer @ ORG_581c57aa Health in #🤖・ai-jobs
  ✅ Industry: Agent Engineer @ ORG_581c57aa Health
[2026-01-19T23:28:59.607Z] [BOT] ✅ Created forum post: 🏢 Agent Engineer @ ORG_581c57aa Health in #🌉・san-francisco
[2026-01-19T23:28:59.608Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T23:29:01.108Z] [BOT] 💾 Marked as posted: Agent Engineer @ ORG_581c57aa Health (instance #1)
[2026-01-19T23:29:01.108Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-19T23:29:01.111Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T23:29:01.116Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-19T23:29:01.116Z] [BOT] ✅ Archiving complete: 21 archived, 2816 active
[2026-01-19T23:29:01.136Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:01.137Z] [BOT] 📍 [ROUTING] "Product Marketing Manager - Spotify for Artists, Campaign Kit" @ spotify
[2026-01-19T23:29:01.137Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-19T23:29:01.332Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - Spotify for Artists, Campaign Kit @ spotify in #🤖・ai-jobs
[2026-01-19T23:29:01.332Z] [BOT] ✅ Industry: Product Marketing Manager - Spotify for Artists, Campaign Kit @ spotify
[2026-01-19T23:29:03.310Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager - Spotify for Artists, Campaign Kit @ spotify in #🗽・new-york
[2026-01-19T23:29:03.311Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T23:29:04.811Z] [BOT] 💾 Marked as posted: Product Marketing Manager - Spotify for Artists, Campaign Kit @ spotify (instance #1)
[2026-01-19T23:29:04.811Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-19T23:29:04.813Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-19T23:29:04.835Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:07.835Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-19T23:29:07.836Z] [BOT] 📍 [ROUTING] "Auto Technician/ Mechanic" @ Model1 Commercial Vehicles
[2026-01-19T23:29:07.836Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T23:29:08.087Z] [BOT] ✅ Created forum post: 🏢 Auto Technician/ Mechanic @ Model1 Commercial Vehicles in #🩺・healthcare-jobs
[2026-01-19T23:29:08.087Z] [BOT] ✅ Industry: Auto Technician/ Mechanic @ Model1 Commercial Vehicles
[2026-01-19T23:29:09.978Z] [BOT] ✅ Created forum post: 🏢 Auto Technician/ Mechanic @ Model1 Commercial Vehicles in #💻・remote-usa
[2026-01-19T23:29:09.978Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T23:29:11.479Z] [BOT] 💾 Marked as posted: Auto Technician/ Mechanic @ Model1 Commercial Vehicles (instance #1)
[2026-01-19T23:29:11.480Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-19T23:29:11.482Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-19T23:29:11.500Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:11.501Z] [BOT] 📍 [ROUTING] "Environmental Services Aide" @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-19T23:29:11.501Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T23:29:11.726Z] [BOT] ✅ Created forum post: 🏢 Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital in #🩺・healthcare-jobs
  ✅ Industry: Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-19T23:29:13.461Z] [BOT] ✅ Created forum post: 🏢 Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T23:29:14.961Z] [BOT] 💾 Marked as posted: Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital (instance #1)
[2026-01-19T23:29:14.962Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-19T23:29:14.963Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-19T23:29:14.980Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
[2026-01-19T23:29:14.980Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:17.980Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-19T23:29:17.981Z] [BOT] 📍 [ROUTING] "Aggie Creamery Shift Lead Spring" @ ORG_82bce10b State University
[2026-01-19T23:29:17.981Z] [BOT] Category: PRODUCT (matched: "pm")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-19T23:29:18.286Z] [BOT] ✅ Created forum post: 🏢 Aggie Creamery Shift Lead Spring @ ORG_82bce10b State University in #📦・product-jobs
  ✅ Industry: Aggie Creamery Shift Lead Spring @ ORG_82bce10b State University
[2026-01-19T23:29:20.054Z] [BOT] ✅ Created forum post: 🏢 Aggie Creamery Shift Lead Spring @ ORG_82bce10b State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T23:29:21.555Z] [BOT] 💾 Marked as posted: Aggie Creamery Shift Lead Spring @ ORG_82bce10b State University (instance #1)
[2026-01-19T23:29:21.555Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-19T23:29:21.557Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-19T23:29:21.578Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
[2026-01-19T23:29:21.578Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:24.579Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T23:29:24.579Z] [BOT] 📍 [ROUTING] "Data Scientist - Product Analytics - Usds" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T23:29:24.579Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T23:29:24.846Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Product Analytics - Usds @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist - Product Analytics - Usds @ ORG_1bb6fcfb
[2026-01-19T23:29:26.589Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Product Analytics - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T23:29:28.091Z] [BOT] 💾 Marked as posted: Data Scientist - Product Analytics - Usds @ ORG_1bb6fcfb (instance #1)
[2026-01-19T23:29:28.091Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-19T23:29:28.093Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-19T23:29:28.112Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
[2026-01-19T23:29:28.112Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:31.112Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T23:29:31.113Z] [BOT] 📍 [ROUTING] "Engineering Technical Specialist 1" @ ORG_1111d586inion Energy
[2026-01-19T23:29:31.113Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:29:31.617Z] [BOT] ✅ Created forum post: 🏢 Engineering Technical Specialist 1 @ ORG_1111d586inion Energy in #💻・tech-jobs
[2026-01-19T23:29:31.617Z] [BOT] ✅ Industry: Engineering Technical Specialist 1 @ ORG_1111d586inion Energy
[2026-01-19T23:29:33.422Z] [BOT] ✅ Created forum post: 🏢 Engineering Technical Specialist 1 @ ORG_1111d586inion Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T23:29:34.923Z] [BOT] 💾 Marked as posted: Engineering Technical Specialist 1 @ ORG_1111d586inion Energy (instance #1)
[2026-01-19T23:29:34.923Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-19T23:29:34.925Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-19T23:29:34.946Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:34.946Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:29:35.201Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-19T23:29:36.939Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T23:29:38.440Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-19T23:29:38.440Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-19T23:29:38.442Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-19T23:29:38.459Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:38.460Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
[2026-01-19T23:29:38.460Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T23:29:38.763Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-19T23:29:40.692Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T23:29:42.193Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-19T23:29:42.193Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-19T23:29:42.195Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-19T23:29:42.213Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T23:29:45.214Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T23:29:45.215Z] [BOT] ⏭️  Skipping duplicate: JID_588c2f46 (posted within 7 days)
[2026-01-19T23:29:45.215Z] [BOT] ⏭️  Skipping duplicate: JID_b270e1f6 (posted within 7 days)
[2026-01-19T23:29:45.215Z] [BOT] ⏭️  Skipping duplicate: JID_3152516c (posted within 7 days)
[2026-01-19T23:29:45.215Z] [BOT] ⏭️  Skipping duplicate: JID_d9588d33 (posted within 7 days)
[2026-01-19T23:29:45.216Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8088b7c1 (posted within 7 days)
⏭️  Skipping duplicate: JID_7ebe7708 (posted within 7 days)
[2026-01-19T23:29:45.216Z] [BOT] ⏭️  Skipping duplicate: JID_2ef1ec6e (posted within 7 days)
[2026-01-19T23:29:45.216Z] [BOT] ⏭️  Skipping duplicate: JID_310b1343 (posted within 7 days)
[2026-01-19T23:29:45.216Z] [BOT] ⏭️  Skipping duplicate: JID_1c4074ea-aws_r-48613 (posted within 7 days)
[2026-01-19T23:29:45.328Z] [BOT] ✅ Loaded pending queue: 2803 total (2793 pending, 10 enriched, 0 posted)
[2026-01-19T23:29:45.511Z] [BOT] ✅ Saved pending queue: 2803 total (2793 pending, 1 enriched, 9 posted)
[2026-01-19T23:29:45.511Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T23:29:45.572Z] [BOT] 📂 Loaded 5205 existing routing entries
[2026-01-19T23:29:45.643Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5215
[2026-01-19T23:29:45.643Z] [BOT] Timestamp: 2026-01-19T23:29:45.621Z
[2026-01-19T23:29:45.644Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T23:29:45.644Z] [BOT] Total attempts: 29
   Successful: 18
   Failed: 1
   Skipped: 10
[2026-01-19T23:29:45.644Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T23:29:45.644Z] [BOT] Total posts: 18
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 4 posts
     2. #🗽・new-york: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-19T23:29:45.645Z] [BOT] [STATS] Channel stats saved
[2026-01-19T23:29:47.672Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job AI Data Specialist - Florida - US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Data Specialist - Florida - US
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*