# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T01:57:03.842Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T01:56:16.012Z] ========================================
[2026-01-15T01:56:16.014Z] Discord Bot Execution Log
[2026-01-15T01:56:16.014Z] Environment: GitHub Actions
[2026-01-15T01:56:16.014Z] Node Version: v20.19.6
[2026-01-15T01:56:16.014Z] ========================================
[2026-01-15T01:56:16.014Z] Environment Variables Check:
[2026-01-15T01:56:16.014Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T01:56:16.015Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T01:56:16.015Z] 
Multi-Channel Configuration:
[2026-01-15T01:56:16.015Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.015Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.016Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T01:56:16.016Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T01:56:16.016Z] 
Data Files Check:
[2026-01-15T01:56:16.016Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57967 bytes)
[2026-01-15T01:56:16.023Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 819502 bytes)
[2026-01-15T01:56:16.023Z] 
========================================
[2026-01-15T01:56:16.023Z] Starting Enhanced Discord Bot...
[2026-01-15T01:56:16.023Z] ========================================
[2026-01-15T01:56:16.573Z] [BOT] ✅ Loaded V2 database: 1544 jobs
[2026-01-15T01:56:17.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T01:56:17.003Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T01:56:17.003Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T01:56:17.119Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Junior Software Engineer at mthree
[2026-01-15T01:56:17.121Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T01:56:17.122Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T01:56:17.122Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T01:56:17.123Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T01:56:17.123Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T01:56:17.123Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T01:56:17.127Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T01:56:17.128Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-01-15T01:56:17.128Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T01:56:17.146Z] [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T01:56:17.267Z] [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Engineer @ mthree',
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
[2026-01-15T01:56:17.267Z] [BOT] ❌ Industry post failed: Junior Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-15T01:56:18.952Z] [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Engineer @ mthree',
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
[2026-01-15T01:56:18.952Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T01:56:23.453Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T01:56:23.454Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Data Engineering" @ ORG_2bc58fcc League Baseball
[2026-01-15T01:56:23.454Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:23.617Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball
[2026-01-15T01:56:25.568Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T01:56:27.069Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-15T01:56:27.069Z] [BOT] 💾 BEFORE ARCHIVING: 1545 jobs in database
[2026-01-15T01:56:27.071Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T01:56:27.077Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-15T01:56:27.077Z] [BOT] ✅ Archiving complete: 10 archived, 1535 active
[2026-01-15T01:56:27.096Z] [BOT] 💾 Saved posted_jobs.json: 1535 active jobs
[2026-01-15T01:56:27.096Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:27.098Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Full-Stack Development" @ ORG_2bc58fcc League Baseball
[2026-01-15T01:56:27.098Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:27.249Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball
[2026-01-15T01:56:29.068Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball in #💻・remote-usa
[2026-01-15T01:56:29.068Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T01:56:30.569Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Full-Stack Development @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-15T01:56:30.569Z] [BOT] 💾 BEFORE ARCHIVING: 1536 jobs in database
[2026-01-15T01:56:30.570Z] [BOT] ✅ No jobs to archive (all 1536 jobs within 7-day window)
[2026-01-15T01:56:30.581Z] [BOT] 💾 Saved posted_jobs.json: 1536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:30.582Z] [BOT] 📍 [ROUTING] "Data Labeler" @ ORG_1f5be668
[2026-01-15T01:56:30.582Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:30.831Z] [BOT] ✅ Created forum post: 🏢 Data Labeler @ ORG_1f5be668 in #💻・tech-jobs
[2026-01-15T01:56:30.831Z] [BOT] ✅ Industry: Data Labeler @ ORG_1f5be668
[2026-01-15T01:56:32.486Z] [BOT] ✅ Created forum post: 🏢 Data Labeler @ ORG_1f5be668 in #🌉・san-francisco
[2026-01-15T01:56:32.486Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T01:56:33.987Z] [BOT] 💾 Marked as posted: Data Labeler @ ORG_1f5be668 (instance #1)
[2026-01-15T01:56:33.987Z] [BOT] 💾 BEFORE ARCHIVING: 1537 jobs in database
[2026-01-15T01:56:33.988Z] [BOT] ✅ No jobs to archive (all 1537 jobs within 7-day window)
[2026-01-15T01:56:33.999Z] [BOT] 💾 Saved posted_jobs.json: 1537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:33.999Z] [BOT] 📍 [ROUTING] "Emerging Talent Software Engineers" @ ORG_569ec613 Morgan Chase
   Category: TECH (matched: "software")
[2026-01-15T01:56:33.999Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:34.178Z] [BOT] ✅ Created forum post: 🏢 Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
  ✅ Industry: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase
[2026-01-15T01:56:35.898Z] [BOT] ✅ Created forum post: 🏢 Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T01:56:37.399Z] [BOT] 💾 Marked as posted: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase (instance #1)
[2026-01-15T01:56:37.399Z] [BOT] 💾 BEFORE ARCHIVING: 1538 jobs in database
[2026-01-15T01:56:37.400Z] [BOT] ✅ No jobs to archive (all 1538 jobs within 7-day window)
[2026-01-15T01:56:37.411Z] [BOT] 💾 Saved posted_jobs.json: 1538 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:37.411Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_cff1e0b2
[2026-01-15T01:56:37.411Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:37.673Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_cff1e0b2 in #💻・tech-jobs
[2026-01-15T01:56:37.673Z] [BOT] ✅ Industry: Graduate Software Engineer @ ORG_cff1e0b2
[2026-01-15T01:56:39.370Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer @ ORG_cff1e0b2 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T01:56:40.872Z] [BOT] 💾 Marked as posted: Graduate Software Engineer @ ORG_cff1e0b2 (instance #1)
[2026-01-15T01:56:40.872Z] [BOT] 💾 BEFORE ARCHIVING: 1539 jobs in database
[2026-01-15T01:56:40.873Z] [BOT] ✅ No jobs to archive (all 1539 jobs within 7-day window)
[2026-01-15T01:56:40.883Z] [BOT] 💾 Saved posted_jobs.json: 1539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:40.884Z] [BOT] 📍 [ROUTING] "Engineering Manager, CDN" @ vercel
[2026-01-15T01:56:40.884Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:41.118Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, CDN @ vercel in #💻・tech-jobs
[2026-01-15T01:56:41.118Z] [BOT] ✅ Industry: Engineering Manager, CDN @ vercel
[2026-01-15T01:56:42.782Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, CDN @ vercel in #🌉・san-francisco
[2026-01-15T01:56:42.782Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T01:56:44.284Z] [BOT] 💾 Marked as posted: Engineering Manager, CDN @ vercel (instance #1)
[2026-01-15T01:56:44.284Z] [BOT] 💾 BEFORE ARCHIVING: 1540 jobs in database
[2026-01-15T01:56:44.285Z] [BOT] ✅ No jobs to archive (all 1540 jobs within 7-day window)
[2026-01-15T01:56:44.295Z] [BOT] 💾 Saved posted_jobs.json: 1540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:44.295Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 4" @ ORG_8d0003a5
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T01:56:44.421Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 4 @ ORG_8d0003a5 in #💻・tech-jobs
[2026-01-15T01:56:44.421Z] [BOT] ✅ Industry: Data Center Network Modeling Technician 4 @ ORG_8d0003a5
[2026-01-15T01:56:46.099Z] [BOT] ✅ Created forum post: 🏢 Data Center Network Modeling Technician 4 @ ORG_8d0003a5 in #💻・remote-usa
[2026-01-15T01:56:46.099Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T01:56:47.599Z] [BOT] 💾 Marked as posted: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 (instance #1)
[2026-01-15T01:56:47.600Z] [BOT] 💾 BEFORE ARCHIVING: 1541 jobs in database
[2026-01-15T01:56:47.601Z] [BOT] ✅ No jobs to archive (all 1541 jobs within 7-day window)
[2026-01-15T01:56:47.611Z] [BOT] 💾 Saved posted_jobs.json: 1541 active jobs
[2026-01-15T01:56:47.611Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:47.611Z] [BOT] 💾 Marked as posted: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 (instance #1)
[2026-01-15T01:56:47.611Z] [BOT] 💾 BEFORE ARCHIVING: 1542 jobs in database
[2026-01-15T01:56:47.612Z] [BOT] ✅ No jobs to archive (all 1542 jobs within 7-day window)
[2026-01-15T01:56:47.624Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:50.625Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-15T01:56:50.625Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Commercial" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T01:56:50.891Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Commercial @ vercel in #💲・sales-jobs
[2026-01-15T01:56:50.891Z] [BOT] ✅ Industry: Vercel Development Representative, Commercial @ vercel
[2026-01-15T01:56:52.626Z] [BOT] ✅ Created forum post: 🏢 Vercel Development Representative, Commercial @ vercel in #🌉・san-francisco
[2026-01-15T01:56:52.626Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T01:56:54.127Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Commercial @ vercel (instance #1)
[2026-01-15T01:56:54.127Z] [BOT] 💾 BEFORE ARCHIVING: 1543 jobs in database
[2026-01-15T01:56:54.129Z] [BOT] ✅ No jobs to archive (all 1543 jobs within 7-day window)
[2026-01-15T01:56:54.139Z] [BOT] 💾 Saved posted_jobs.json: 1543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:56:54.139Z] [BOT] 📍 [ROUTING] "Account Executive, v0 Majors" @ vercel
[2026-01-15T01:56:54.139Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T01:56:54.327Z] [BOT] ✅ Created forum post: 🏢 Account Executive, v0 Majors @ vercel in #💲・sales-jobs
  ✅ Industry: Account Executive, v0 Majors @ vercel
[2026-01-15T01:56:56.270Z] [BOT] ✅ Created forum post: 🏢 Account Executive, v0 Majors @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T01:56:57.772Z] [BOT] 💾 Marked as posted: Account Executive, v0 Majors @ vercel (instance #1)
[2026-01-15T01:56:57.772Z] [BOT] 💾 BEFORE ARCHIVING: 1544 jobs in database
[2026-01-15T01:56:57.773Z] [BOT] ✅ No jobs to archive (all 1544 jobs within 7-day window)
[2026-01-15T01:56:57.786Z] [BOT] 💾 Saved posted_jobs.json: 1544 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T01:57:00.786Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T01:57:00.787Z] [BOT] ⏭️  Skipping duplicate: JID_d6959801 (posted within 7 days)
[2026-01-15T01:57:00.787Z] [BOT] ⏭️  Skipping duplicate: JID_986150c3 (posted within 7 days)
[2026-01-15T01:57:00.787Z] [BOT] ⏭️  Skipping duplicate: JID_2364e74c (posted within 7 days)
[2026-01-15T01:57:00.788Z] [BOT] ⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210683258 (posted within 7 days)
[2026-01-15T01:57:00.788Z] [BOT] ⏭️  Skipping duplicate: JID_8d9fe176 (posted within 7 days)
[2026-01-15T01:57:00.788Z] [BOT] ⏭️  Skipping duplicate: JID_4268540e (posted within 7 days)
⏭️  Skipping duplicate: JID_c168854e (posted within 7 days)
[2026-01-15T01:57:00.788Z] [BOT] ⏭️  Skipping duplicate: JID_47948d6e (posted within 7 days)
[2026-01-15T01:57:00.788Z] [BOT] ⏭️  Skipping duplicate: JID_7628941b-iv_r0013743 (posted within 7 days)
[2026-01-15T01:57:00.904Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-15T01:57:01.078Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 11 enriched, 9 posted)
[2026-01-15T01:57:01.078Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T01:57:01.135Z] [BOT] 📂 Loaded 3705 existing routing entries
[2026-01-15T01:57:01.197Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T01:57:01.197Z] [BOT] Total entries: 3715
   Timestamp: 2026-01-15T01:57:01.182Z
[2026-01-15T01:57:01.198Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T01:57:01.198Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-15T01:57:01.198Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 4 posts
     3. #🌉・san-francisco: 4 posts
[2026-01-15T01:57:01.199Z] [BOT] 4. #💲・sales-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-15T01:57:03.225Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software Engineer
- [BOT ERROR] ❌ Error posting job Junior Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*