# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T21:29:51.571Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T21:28:53.622Z] ========================================
[2026-01-19T21:28:53.624Z] Discord Bot Execution Log
[2026-01-19T21:28:53.624Z] Environment: GitHub Actions
[2026-01-19T21:28:53.624Z] Node Version: v20.19.6
[2026-01-19T21:28:53.624Z] ========================================
[2026-01-19T21:28:53.625Z] Environment Variables Check:
[2026-01-19T21:28:53.625Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T21:28:53.625Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T21:28:53.625Z] 
Multi-Channel Configuration:
[2026-01-19T21:28:53.625Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.625Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.626Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.626Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.626Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.626Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T21:28:53.626Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T21:28:53.626Z] 
Data Files Check:
[2026-01-19T21:28:53.627Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167278 bytes)
[2026-01-19T21:28:53.638Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1578671 bytes)
[2026-01-19T21:28:53.638Z] 
========================================
[2026-01-19T21:28:53.638Z] Starting Enhanced Discord Bot...
[2026-01-19T21:28:53.638Z] ========================================
[2026-01-19T21:28:54.175Z] [BOT] ✅ Loaded V2 database: 2888 jobs
[2026-01-19T21:28:54.781Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T21:28:54.781Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T21:28:54.782Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T21:28:54.900Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Data Scientist - Product at gusto
[2026-01-19T21:28:54.904Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T21:28:54.904Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T21:28:54.904Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T21:28:54.905Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T21:28:54.905Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T21:28:54.910Z] [BOT] 📌 Posting 5 jobs to #📈・JID_fb739488
[2026-01-19T21:28:54.910Z] [BOT] 📍 [ROUTING] "Staff Data Scientist - Product" @ gusto
[2026-01-19T21:28:54.910Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T21:28:54.915Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T21:28:54.999Z] [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Data Scientist - Product @ gusto',
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
[2026-01-19T21:28:54.999Z] [BOT] ❌ Industry post failed: Staff Data Scientist - Product
⚠️  Channel full error count: 1/5
[2026-01-19T21:28:56.681Z] [BOT] ✅ Created forum post: 🏢 Staff Data Scientist - Product @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:28:58.183Z] [BOT] 💾 Marked as posted: Staff Data Scientist - Product @ gusto (instance #1)
[2026-01-19T21:28:58.183Z] [BOT] 💾 BEFORE ARCHIVING: 2889 jobs in database
[2026-01-19T21:28:58.186Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T21:28:58.191Z] [BOT] 📦 Archived 25 jobs to 2026-01.json (25 total in archive)
[2026-01-19T21:28:58.191Z] [BOT] ✅ Archiving complete: 25 archived, 2864 active
[2026-01-19T21:28:58.209Z] [BOT] 💾 Saved posted_jobs.json: 2864 active jobs
[2026-01-19T21:28:58.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T21:28:58.210Z] [BOT] 📍 [ROUTING] "Senior Sales Operations Analyst - Business Insurance" @ gusto
[2026-01-19T21:28:58.210Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T21:28:58.372Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Operations Analyst - Business Insurance @ gusto in #📈・JID_fb739488
[2026-01-19T21:28:58.372Z] [BOT] ✅ Industry: Senior Sales Operations Analyst - Business Insurance @ gusto
[2026-01-19T21:29:00.132Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Operations Analyst - Business Insurance @ gusto in #🌉・san-francisco
[2026-01-19T21:29:00.132Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:01.633Z] [BOT] 💾 Marked as posted: Senior Sales Operations Analyst - Business Insurance @ gusto (instance #1)
[2026-01-19T21:29:01.634Z] [BOT] 💾 BEFORE ARCHIVING: 2865 jobs in database
[2026-01-19T21:29:01.635Z] [BOT] ✅ No jobs to archive (all 2865 jobs within 7-day window)
[2026-01-19T21:29:01.652Z] [BOT] 💾 Saved posted_jobs.json: 2865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:01.652Z] [BOT] 📍 [ROUTING] "Finance, BizOps, & Strategy" @ gusto
[2026-01-19T21:29:01.652Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T21:29:02.013Z] [BOT] ✅ Created forum post: 🏢 Finance, BizOps, & Strategy @ gusto in #📈・JID_fb739488
  ✅ Industry: Finance, BizOps, & Strategy @ gusto
[2026-01-19T21:29:03.687Z] [BOT] ✅ Created forum post: 🏢 Finance, BizOps, & Strategy @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:05.189Z] [BOT] 💾 Marked as posted: Finance, BizOps, & Strategy @ gusto (instance #1)
[2026-01-19T21:29:05.189Z] [BOT] 💾 BEFORE ARCHIVING: 2866 jobs in database
[2026-01-19T21:29:05.191Z] [BOT] ✅ No jobs to archive (all 2866 jobs within 7-day window)
[2026-01-19T21:29:05.210Z] [BOT] 💾 Saved posted_jobs.json: 2866 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:05.211Z] [BOT] 📍 [ROUTING] "People Technology Workday Developer" @ gusto
[2026-01-19T21:29:05.211Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T21:29:05.368Z] [BOT] ✅ Created forum post: 🏢 People Technology Workday Developer @ gusto in #📈・JID_fb739488
[2026-01-19T21:29:05.368Z] [BOT] ✅ Industry: People Technology Workday Developer @ gusto
[2026-01-19T21:29:07.048Z] [BOT] ✅ Created forum post: 🏢 People Technology Workday Developer @ gusto in #🌉・san-francisco
[2026-01-19T21:29:07.048Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:08.549Z] [BOT] 💾 Marked as posted: People Technology Workday Developer @ gusto (instance #1)
[2026-01-19T21:29:08.549Z] [BOT] 💾 BEFORE ARCHIVING: 2867 jobs in database
[2026-01-19T21:29:08.551Z] [BOT] ✅ No jobs to archive (all 2867 jobs within 7-day window)
[2026-01-19T21:29:08.570Z] [BOT] 💾 Saved posted_jobs.json: 2867 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:08.571Z] [BOT] 📍 [ROUTING] "Indirect Channel Sales Analyst" @ gusto
[2026-01-19T21:29:08.571Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T21:29:09.339Z] [BOT] ✅ Created forum post: 🏢 Indirect Channel Sales Analyst @ gusto in #📈・JID_fb739488
  ✅ Industry: Indirect Channel Sales Analyst @ gusto
[2026-01-19T21:29:10.995Z] [BOT] ✅ Created forum post: 🏢 Indirect Channel Sales Analyst @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:12.496Z] [BOT] 💾 Marked as posted: Indirect Channel Sales Analyst @ gusto (instance #1)
[2026-01-19T21:29:12.497Z] [BOT] 💾 BEFORE ARCHIVING: 2868 jobs in database
[2026-01-19T21:29:12.498Z] [BOT] ✅ No jobs to archive (all 2868 jobs within 7-day window)
[2026-01-19T21:29:12.515Z] [BOT] 💾 Saved posted_jobs.json: 2868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:15.516Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T21:29:15.517Z] [BOT] 📍 [ROUTING] "Retirement Account Executive" @ gusto
[2026-01-19T21:29:15.517Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T21:29:15.740Z] [BOT] ✅ Created forum post: 🏢 Retirement Account Executive @ gusto in #💲・sales-jobs
  ✅ Industry: Retirement Account Executive @ gusto
[2026-01-19T21:29:17.846Z] [BOT] ✅ Created forum post: 🏢 Retirement Account Executive @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:19.348Z] [BOT] 💾 Marked as posted: Retirement Account Executive @ gusto (instance #1)
[2026-01-19T21:29:19.348Z] [BOT] 💾 BEFORE ARCHIVING: 2869 jobs in database
[2026-01-19T21:29:19.350Z] [BOT] ✅ No jobs to archive (all 2869 jobs within 7-day window)
[2026-01-19T21:29:19.372Z] [BOT] 💾 Saved posted_jobs.json: 2869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:22.373Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T21:29:22.373Z] [BOT] 📍 [ROUTING] "People Technology Delivery Manager" @ gusto
[2026-01-19T21:29:22.373Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T21:29:22.646Z] [BOT] ✅ Created forum post: 🏢 People Technology Delivery Manager @ gusto in #📣・marketing-jobs
[2026-01-19T21:29:22.646Z] [BOT] ✅ Industry: People Technology Delivery Manager @ gusto
[2026-01-19T21:29:24.469Z] [BOT] ✅ Created forum post: 🏢 People Technology Delivery Manager @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:25.970Z] [BOT] 💾 Marked as posted: People Technology Delivery Manager @ gusto (instance #1)
[2026-01-19T21:29:25.970Z] [BOT] 💾 BEFORE ARCHIVING: 2870 jobs in database
[2026-01-19T21:29:25.972Z] [BOT] ✅ No jobs to archive (all 2870 jobs within 7-day window)
[2026-01-19T21:29:25.991Z] [BOT] 💾 Saved posted_jobs.json: 2870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:28.992Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T21:29:28.992Z] [BOT] 📍 [ROUTING] "Senior Marketing Manager, Accountants and Partners" @ gusto
[2026-01-19T21:29:28.992Z] [BOT] Category: AI (matched: "AI/ML")
[2026-01-19T21:29:28.992Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T21:29:28.992Z] [BOT] ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-19T21:29:29.468Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Manager, Accountants and Partners @ gusto in #🤖・ai-jobs
  ✅ Industry: Senior Marketing Manager, Accountants and Partners @ gusto
[2026-01-19T21:29:31.196Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Manager, Accountants and Partners @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:32.696Z] [BOT] 💾 Marked as posted: Senior Marketing Manager, Accountants and Partners @ gusto (instance #1)
[2026-01-19T21:29:32.696Z] [BOT] 💾 BEFORE ARCHIVING: 2871 jobs in database
[2026-01-19T21:29:32.698Z] [BOT] ✅ No jobs to archive (all 2871 jobs within 7-day window)
[2026-01-19T21:29:32.715Z] [BOT] 💾 Saved posted_jobs.json: 2871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:35.715Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-19T21:29:35.716Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Product Engineer" @ gusto
[2026-01-19T21:29:35.716Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T21:29:35.886Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Product Engineer @ gusto in #💻・tech-jobs
[2026-01-19T21:29:35.886Z] [BOT] ✅ Industry: Staff Software Engineer, Product Engineer @ gusto
[2026-01-19T21:29:37.613Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Product Engineer @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T21:29:39.114Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Product Engineer @ gusto (instance #1)
[2026-01-19T21:29:39.114Z] [BOT] 💾 BEFORE ARCHIVING: 2872 jobs in database
[2026-01-19T21:29:39.116Z] [BOT] ✅ No jobs to archive (all 2872 jobs within 7-day window)
[2026-01-19T21:29:39.137Z] [BOT] 💾 Saved posted_jobs.json: 2872 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:42.138Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T21:29:42.138Z] [BOT] 📍 [ROUTING] "Executive Operations R&D" @ gusto
   Category: HEALTHCARE (matched: "medical")
[2026-01-19T21:29:42.138Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T21:29:42.394Z] [BOT] ✅ Created forum post: 🏢 Executive Operations R&D @ gusto in #🩺・healthcare-jobs
  ✅ Industry: Executive Operations R&D @ gusto
[2026-01-19T21:29:43.981Z] [BOT ERROR] ❌ Error posting job Executive Operations R&D: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Executive Operations R&D @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-19T21:29:43.981Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T21:29:45.483Z] [BOT] 💾 Marked as posted: Executive Operations R&D @ gusto (instance #1)
[2026-01-19T21:29:45.483Z] [BOT] 💾 BEFORE ARCHIVING: 2873 jobs in database
[2026-01-19T21:29:45.485Z] [BOT] ✅ No jobs to archive (all 2873 jobs within 7-day window)
[2026-01-19T21:29:45.503Z] [BOT] 💾 Saved posted_jobs.json: 2873 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T21:29:48.504Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_87d91840 (posted within 7 days)
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_88db34ec (posted within 7 days)
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_e6731423 (posted within 7 days)
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_2e16ccf1 (posted within 7 days)
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_4087dc1d (posted within 7 days)
[2026-01-19T21:29:48.505Z] [BOT] ⏭️  Skipping duplicate: JID_5382cd2b (posted within 7 days)
[2026-01-19T21:29:48.506Z] [BOT] ⏭️  Skipping duplicate: JID_f4248e81 (posted within 7 days)
[2026-01-19T21:29:48.506Z] [BOT] ⏭️  Skipping duplicate: JID_026ae663 (posted within 7 days)
[2026-01-19T21:29:48.506Z] [BOT] ⏭️  Skipping duplicate: JID_bc52b898 (posted within 7 days)
[2026-01-19T21:29:48.506Z] [BOT] ⏭️  Skipping duplicate: JID_63328820 (posted within 7 days)
[2026-01-19T21:29:48.618Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[2026-01-19T21:29:48.794Z] [BOT] ✅ Saved pending queue: 2814 total (2794 pending, 10 enriched, 10 posted)
[2026-01-19T21:29:48.795Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T21:29:48.854Z] [BOT] 📂 Loaded 5155 existing routing entries
[2026-01-19T21:29:48.927Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T21:29:48.927Z] [BOT] Total entries: 5165
   Timestamp: 2026-01-19T21:29:48.903Z
[2026-01-19T21:29:48.927Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T21:29:48.928Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-19T21:29:48.928Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T21:29:48.928Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 9 posts
[2026-01-19T21:29:48.928Z] [BOT] 2. #📈・JID_fb739488: 4 posts
     3. #💲・sales-jobs: 1 posts
     4. #📣・marketing-jobs: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-19T21:29:48.928Z] [BOT] [STATS] Channel stats saved
[2026-01-19T21:29:50.952Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Staff Data Scientist - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Data Scientist - Product
- [BOT ERROR] ❌ Error posting job Executive Operations R&D: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*