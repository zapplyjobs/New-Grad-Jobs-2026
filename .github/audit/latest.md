# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T19:40:30.651Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T19:39:32.612Z] ========================================
[2026-01-13T19:39:32.614Z] Discord Bot Execution Log
[2026-01-13T19:39:32.614Z] Environment: GitHub Actions
[2026-01-13T19:39:32.614Z] Node Version: v20.19.6
[2026-01-13T19:39:32.614Z] ========================================
[2026-01-13T19:39:32.614Z] Environment Variables Check:
[2026-01-13T19:39:32.614Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T19:39:32.615Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T19:39:32.615Z] 
Multi-Channel Configuration:
[2026-01-13T19:39:32.615Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.615Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.616Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T19:39:32.616Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T19:39:32.616Z] 
Data Files Check:
[2026-01-13T19:39:32.617Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123762 bytes)
[2026-01-13T19:39:32.620Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493167 bytes)
[2026-01-13T19:39:32.620Z] 
========================================
[2026-01-13T19:39:32.620Z] Starting Enhanced Discord Bot...
[2026-01-13T19:39:32.620Z] ========================================
[2026-01-13T19:39:33.140Z] [BOT] ✅ Loaded V2 database: 936 jobs
[2026-01-13T19:39:33.999Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T19:39:34.000Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T19:39:34.000Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T19:39:34.124Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Community Support Specialist at figma
[2026-01-13T19:39:34.126Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T19:39:34.126Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T19:39:34.127Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T19:39:34.127Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-13T19:39:34.128Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer 1 @ Intuit: nyc, mountain view
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T19:39:34.128Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T19:39:34.132Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-13T19:39:34.133Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
[2026-01-13T19:39:34.133Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:39:34.137Z] [BOT ERROR] (node:3457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T19:39:34.296Z] [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Community Support Specialist @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-13T19:39:34.296Z] [BOT] ❌ Industry post failed: Community Support Specialist
⚠️  Channel full error count: 1/5
[2026-01-13T19:39:35.942Z] [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Community Support Specialist @ figma',
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
[2026-01-13T19:39:35.942Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T19:39:37.443Z] [BOT] 📍 [ROUTING] "Legal Operations Lead, CLM & Technology" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:39:37.682Z] [BOT] ✅ Created forum post: 🏢 Legal Operations Lead, CLM & Technology @ figma in #💲・sales-jobs
[2026-01-13T19:39:37.682Z] [BOT] ✅ Industry: Legal Operations Lead, CLM & Technology @ figma
[2026-01-13T19:39:39.438Z] [BOT] ✅ Created forum post: 🏢 Legal Operations Lead, CLM & Technology @ figma in #🌉・san-francisco
[2026-01-13T19:39:39.438Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:39:40.939Z] [BOT] 💾 Marked as posted: Legal Operations Lead, CLM & Technology @ figma (instance #1)
[2026-01-13T19:39:40.939Z] [BOT] 💾 BEFORE ARCHIVING: 937 jobs in database
[2026-01-13T19:39:40.940Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T19:39:40.945Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T19:39:40.945Z] [BOT] ✅ Archiving complete: 1 archived, 936 active
[2026-01-13T19:39:40.952Z] [BOT] 💾 Saved posted_jobs.json: 936 active jobs
[2026-01-13T19:39:40.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:39:40.952Z] [BOT] 📍 [ROUTING] "Finance Variable Compensation Lead" @ anthropic
[2026-01-13T19:39:40.952Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:39:41.263Z] [BOT] ✅ Created forum post: 🏢 Finance Variable Compensation Lead @ anthropic in #💲・sales-jobs
  ✅ Industry: Finance Variable Compensation Lead @ anthropic
[2026-01-13T19:39:43.013Z] [BOT] ✅ Created forum post: 🏢 Finance Variable Compensation Lead @ anthropic in #🌉・san-francisco
[2026-01-13T19:39:43.013Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:39:44.514Z] [BOT] 💾 Marked as posted: Finance Variable Compensation Lead @ anthropic (instance #1)
[2026-01-13T19:39:44.514Z] [BOT] 💾 BEFORE ARCHIVING: 937 jobs in database
[2026-01-13T19:39:44.515Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-13T19:39:44.522Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:39:44.523Z] [BOT] 📍 [ROUTING] "Launch Strategy & Operations - Marketing & Comms" @ figma
[2026-01-13T19:39:44.523Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:39:44.838Z] [BOT] ✅ Created forum post: 🏢 Launch Strategy & Operations - Marketing & Comms @ figma in #💲・sales-jobs
[2026-01-13T19:39:44.838Z] [BOT] ✅ Industry: Launch Strategy & Operations - Marketing & Comms @ figma
[2026-01-13T19:39:46.703Z] [BOT] ✅ Created forum post: 🏢 Launch Strategy & Operations - Marketing & Comms @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T19:39:48.204Z] [BOT] 💾 Marked as posted: Launch Strategy & Operations - Marketing & Comms @ figma (instance #1)
[2026-01-13T19:39:48.204Z] [BOT] 💾 BEFORE ARCHIVING: 938 jobs in database
[2026-01-13T19:39:48.205Z] [BOT] ✅ No jobs to archive (all 938 jobs within 7-day window)
[2026-01-13T19:39:48.212Z] [BOT] 💾 Saved posted_jobs.json: 938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:39:48.213Z] [BOT] 📍 [ROUTING] "Senior Technical Revenue Manager" @ figma
[2026-01-13T19:39:48.213Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:39:48.585Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Revenue Manager @ figma in #💲・sales-jobs
  ✅ Industry: Senior Technical Revenue Manager @ figma
[2026-01-13T19:39:51.930Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Revenue Manager @ figma in #🌉・san-francisco
[2026-01-13T19:39:51.930Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T19:39:53.430Z] [BOT] 💾 Marked as posted: Senior Technical Revenue Manager @ figma (instance #1)
[2026-01-13T19:39:53.430Z] [BOT] 💾 BEFORE ARCHIVING: 939 jobs in database
[2026-01-13T19:39:53.431Z] [BOT] ✅ No jobs to archive (all 939 jobs within 7-day window)
[2026-01-13T19:39:53.439Z] [BOT] 💾 Saved posted_jobs.json: 939 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T19:39:56.439Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T19:39:56.440Z] [BOT] 📍 [ROUTING] "Therapist - Child & Adolescent" @ ORG_6a97f77a Behavioral Health
[2026-01-13T19:39:56.440Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T19:39:56.863Z] [BOT] ✅ Created forum post: 🏢 Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
[2026-01-13T19:39:56.863Z] [BOT] ✅ Industry: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health
[2026-01-13T19:39:58.740Z] [BOT] ✅ Created forum post: 🏢 Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T19:40:00.241Z] [BOT] 💾 Marked as posted: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-13T19:40:00.241Z] [BOT] 💾 BEFORE ARCHIVING: 940 jobs in database
[2026-01-13T19:40:00.242Z] [BOT] ✅ No jobs to archive (all 940 jobs within 7-day window)
[2026-01-13T19:40:00.250Z] [BOT] 💾 Saved posted_jobs.json: 940 active jobs
[2026-01-13T19:40:00.250Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:03.251Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T19:40:03.252Z] [BOT] 📍 [ROUTING] "Senior Manager, Music Label Deal Analysis - FP&A" @ spotify
[2026-01-13T19:40:03.252Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T19:40:03.722Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Manager, Music Label Deal Analysis - FP&A @ spotify
[2026-01-13T19:40:05.531Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T19:40:07.033Z] [BOT] 💾 Marked as posted: Senior Manager, Music Label Deal Analysis - FP&A @ spotify (instance #1)
[2026-01-13T19:40:07.033Z] [BOT] 💾 BEFORE ARCHIVING: 941 jobs in database
[2026-01-13T19:40:07.034Z] [BOT] ✅ No jobs to archive (all 941 jobs within 7-day window)
[2026-01-13T19:40:07.042Z] [BOT] 💾 Saved posted_jobs.json: 941 active jobs
[2026-01-13T19:40:07.042Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:10.042Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T19:40:10.042Z] [BOT] 📍 [ROUTING] "Data Scientist, Social - PhD Early Career" @ ORG_0acab0cf
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T19:40:10.042Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T19:40:10.298Z] [BOT] ✅ Created forum post: 🟩 Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #📈・JID_fb739488
  ✅ Industry: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf
[2026-01-13T19:40:12.040Z] [BOT] ✅ Created forum post: 🟩 Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T19:40:13.541Z] [BOT] 💾 Marked as posted: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf (instance #1)
[2026-01-13T19:40:13.541Z] [BOT] 💾 BEFORE ARCHIVING: 942 jobs in database
[2026-01-13T19:40:13.542Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-13T19:40:13.551Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-13T19:40:13.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:16.552Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-13T19:40:16.552Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_1954b120
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:40:17.094Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_1954b120 in #💻・tech-jobs
[2026-01-13T19:40:17.094Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_1954b120
[2026-01-13T19:40:18.860Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T19:40:20.362Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_1954b120 (instance #1)
[2026-01-13T19:40:20.362Z] [BOT] 💾 BEFORE ARCHIVING: 943 jobs in database
[2026-01-13T19:40:20.363Z] [BOT] ✅ No jobs to archive (all 943 jobs within 7-day window)
[2026-01-13T19:40:20.371Z] [BOT] 💾 Saved posted_jobs.json: 943 active jobs
[2026-01-13T19:40:20.371Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:20.371Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T19:40:20.659Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-13T19:40:22.398Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T19:40:23.899Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-13T19:40:23.899Z] [BOT] 💾 BEFORE ARCHIVING: 944 jobs in database
[2026-01-13T19:40:23.900Z] [BOT] ✅ No jobs to archive (all 944 jobs within 7-day window)
[2026-01-13T19:40:23.908Z] [BOT] 💾 Saved posted_jobs.json: 944 active jobs
[2026-01-13T19:40:23.908Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:23.908Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-13T19:40:23.908Z] [BOT] 💾 BEFORE ARCHIVING: 945 jobs in database
[2026-01-13T19:40:23.909Z] [BOT] ✅ No jobs to archive (all 945 jobs within 7-day window)
[2026-01-13T19:40:23.916Z] [BOT] 💾 Saved posted_jobs.json: 945 active jobs
[2026-01-13T19:40:23.916Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
💾 BEFORE ARCHIVING: 946 jobs in database
[2026-01-13T19:40:23.917Z] [BOT] ✅ No jobs to archive (all 946 jobs within 7-day window)
[2026-01-13T19:40:23.923Z] [BOT] 💾 Saved posted_jobs.json: 946 active jobs
[2026-01-13T19:40:23.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T19:40:26.924Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-13T19:40:26.925Z] [BOT] ⏭️  Skipping duplicate: JID_7cb5a7fa-iop_r5758 (posted within 7 days)
[2026-01-13T19:40:26.925Z] [BOT] ⏭️  Skipping duplicate: JID_e3889d25 (posted within 7 days)
[2026-01-13T19:40:26.925Z] [BOT] ⏭️  Skipping duplicate: JID_fb43f40b (posted within 7 days)
[2026-01-13T19:40:26.925Z] [BOT] ⏭️  Skipping duplicate: JID_dc8c6a6c (posted within 7 days)
[2026-01-13T19:40:26.925Z] [BOT] ⏭️  Skipping duplicate: JID_b75ac13d-engineer_320514 (posted within 7 days)
[2026-01-13T19:40:26.926Z] [BOT] ⏭️  Skipping duplicate: JID_8466d1ec (posted within 7 days)
⏭️  Skipping duplicate: JID_d6dd207d (posted within 7 days)
⏭️  Skipping duplicate: JID_950b4696 (posted within 7 days)
⏭️  Skipping duplicate: JID_43d6f6bd (posted within 7 days)
[2026-01-13T19:40:27.043Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T19:40:27.196Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 11 enriched, 9 posted)
[2026-01-13T19:40:27.196Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T19:40:27.248Z] [BOT] 📂 Loaded 3085 existing routing entries
[2026-01-13T19:40:27.308Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3095
[2026-01-13T19:40:27.308Z] [BOT] Timestamp: 2026-01-13T19:40:27.293Z
[2026-01-13T19:40:27.308Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
[2026-01-13T19:40:27.309Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-13T19:40:27.309Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T19:40:27.309Z] [BOT] Total posts: 18
   Channels used: 9
   Top channels:
     1. #💲・sales-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 2 posts
     4. #🗽・new-york: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-13T19:40:27.309Z] [BOT] [STATS] Channel stats saved
[2026-01-13T19:40:29.333Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Community Support Specialist
- [BOT ERROR] ❌ Error posting job Community Support Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*