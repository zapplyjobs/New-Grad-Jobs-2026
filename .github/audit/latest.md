# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T06:50:08.168Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T06:49:11.209Z] ========================================
[2026-01-19T06:49:11.211Z] Discord Bot Execution Log
[2026-01-19T06:49:11.211Z] Environment: GitHub Actions
[2026-01-19T06:49:11.211Z] Node Version: v20.19.6
[2026-01-19T06:49:11.211Z] ========================================
[2026-01-19T06:49:11.211Z] Environment Variables Check:
[2026-01-19T06:49:11.211Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T06:49:11.211Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.211Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T06:49:11.212Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T06:49:11.212Z] 
Multi-Channel Configuration:
[2026-01-19T06:49:11.212Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T06:49:11.212Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T06:49:11.212Z] 
Data Files Check:
[2026-01-19T06:49:11.213Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45662 bytes)
[2026-01-19T06:49:11.223Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562904 bytes)
[2026-01-19T06:49:11.223Z] 
========================================
[2026-01-19T06:49:11.223Z] Starting Enhanced Discord Bot...
[2026-01-19T06:49:11.223Z] ========================================
[2026-01-19T06:49:11.755Z] [BOT] ✅ Loaded V2 database: 2874 jobs
[2026-01-19T06:49:12.511Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T06:49:12.512Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T06:49:12.512Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T06:49:12.632Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Advanced Practice Provider - Aprn or PA - Medical Informatics at Kettering Health
[2026-01-19T06:49:12.636Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T06:49:12.636Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T06:49:12.636Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T06:49:12.637Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T06:49:12.637Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T06:49:12.642Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T06:49:12.642Z] [BOT] 📍 [ROUTING] "Advanced Practice Provider - Aprn or PA - Medical Informatics" @ ORG_0f4848d3ing Health
[2026-01-19T06:49:12.642Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T06:49:12.660Z] [BOT ERROR] (node:2809) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T06:49:12.774Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health',
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
[2026-01-19T06:49:12.775Z] [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
⚠️  Channel full error count: 1/5
[2026-01-19T06:49:14.568Z] [BOT] ✅ Created forum post: 🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health in #💻・remote-usa
[2026-01-19T06:49:14.569Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T06:49:16.069Z] [BOT] 💾 Marked as posted: Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health (instance #1)
[2026-01-19T06:49:16.070Z] [BOT] 💾 BEFORE ARCHIVING: 2875 jobs in database
[2026-01-19T06:49:16.072Z] [BOT] ✅ No jobs to archive (all 2875 jobs within 7-day window)
[2026-01-19T06:49:16.093Z] [BOT] 💾 Saved posted_jobs.json: 2875 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:19.093Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T06:49:19.094Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
[2026-01-19T06:49:19.094Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T06:49:19.411Z] [BOT] ✅ Created forum post: 🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #📣・marketing-jobs
[2026-01-19T06:49:19.411Z] [BOT] ✅ Industry: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics
[2026-01-19T06:49:21.127Z] [BOT] ✅ Created forum post: 🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics in #💻・remote-usa
[2026-01-19T06:49:21.127Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T06:49:22.628Z] [BOT] 💾 Marked as posted: Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics (instance #1)
[2026-01-19T06:49:22.628Z] [BOT] 💾 BEFORE ARCHIVING: 2876 jobs in database
[2026-01-19T06:49:22.630Z] [BOT] ✅ No jobs to archive (all 2876 jobs within 7-day window)
[2026-01-19T06:49:22.650Z] [BOT] 💾 Saved posted_jobs.json: 2876 active jobs
[2026-01-19T06:49:22.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:25.651Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-19T06:49:25.652Z] [BOT] 📍 [ROUTING] "Database Analyst 1" @ ORG_66279f04 National Information Services
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T06:49:25.653Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T06:49:25.883Z] [BOT] ✅ Created forum post: 🏢 Database Analyst 1 @ ORG_66279f04 National Information Services in #📈・JID_fb739488
  ✅ Industry: Database Analyst 1 @ ORG_66279f04 National Information Services
[2026-01-19T06:49:27.543Z] [BOT] ✅ Created forum post: 🏢 Database Analyst 1 @ ORG_66279f04 National Information Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T06:49:29.045Z] [BOT] 💾 Marked as posted: Database Analyst 1 @ ORG_66279f04 National Information Services (instance #1)
[2026-01-19T06:49:29.045Z] [BOT] 💾 BEFORE ARCHIVING: 2877 jobs in database
[2026-01-19T06:49:29.047Z] [BOT] ✅ No jobs to archive (all 2877 jobs within 7-day window)
[2026-01-19T06:49:29.066Z] [BOT] 💾 Saved posted_jobs.json: 2877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:29.067Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_0c79a9c2 Materials
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T06:49:29.067Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T06:49:29.314Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_0c79a9c2 Materials in #📈・JID_fb739488
  ✅ Industry: Data Scientist @ ORG_0c79a9c2 Materials
[2026-01-19T06:49:30.996Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T06:49:32.498Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-19T06:49:32.498Z] [BOT] 💾 BEFORE ARCHIVING: 2878 jobs in database
[2026-01-19T06:49:32.500Z] [BOT] ✅ No jobs to archive (all 2878 jobs within 7-day window)
[2026-01-19T06:49:32.517Z] [BOT] 💾 Saved posted_jobs.json: 2878 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:32.518Z] [BOT] 📍 [ROUTING] "EHR Data Analyst" @ ORG_10a0c5f8 General Brigham
[2026-01-19T06:49:32.518Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T06:49:32.518Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T06:49:32.518Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T06:49:32.707Z] [BOT] ✅ Created forum post: 🏢 EHR Data Analyst @ ORG_10a0c5f8 General Brigham in #📈・JID_fb739488
  ✅ Industry: EHR Data Analyst @ ORG_10a0c5f8 General Brigham
[2026-01-19T06:49:34.383Z] [BOT] ✅ Created forum post: 🏢 EHR Data Analyst @ ORG_10a0c5f8 General Brigham in #🚌・boston
[2026-01-19T06:49:34.383Z] [BOT] ✅ Location: 🚌・boston
[2026-01-19T06:49:35.885Z] [BOT] 💾 Marked as posted: EHR Data Analyst @ ORG_10a0c5f8 General Brigham (instance #1)
[2026-01-19T06:49:35.885Z] [BOT] 💾 BEFORE ARCHIVING: 2879 jobs in database
[2026-01-19T06:49:35.887Z] [BOT] ✅ No jobs to archive (all 2879 jobs within 7-day window)
[2026-01-19T06:49:35.904Z] [BOT] 💾 Saved posted_jobs.json: 2879 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:38.905Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T06:49:38.906Z] [BOT] 📍 [ROUTING] "Parts Counter Sales Representative" @ ORG_8856d174 CAT
[2026-01-19T06:49:38.906Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T06:49:39.291Z] [BOT] ✅ Created forum post: 🏢 Parts Counter Sales Representative @ ORG_8856d174 CAT in #💲・sales-jobs
[2026-01-19T06:49:39.291Z] [BOT] ✅ Industry: Parts Counter Sales Representative @ ORG_8856d174 CAT
[2026-01-19T06:49:40.794Z] [BOT] 💾 Marked as posted: Parts Counter Sales Representative @ ORG_8856d174 CAT (instance #1)
[2026-01-19T06:49:40.794Z] [BOT] 💾 BEFORE ARCHIVING: 2880 jobs in database
[2026-01-19T06:49:40.796Z] [BOT] ✅ No jobs to archive (all 2880 jobs within 7-day window)
[2026-01-19T06:49:40.813Z] [BOT] 💾 Saved posted_jobs.json: 2880 active jobs
[2026-01-19T06:49:40.813Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:43.814Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T06:49:43.815Z] [BOT] 📍 [ROUTING] "Security Software Engineer – University Graduate 2026" @ ORG_175f350d
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T06:49:43.815Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T06:49:45.304Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer – University Graduate 2026 @ ORG_175f350d in #🤖・ai-jobs
[2026-01-19T06:49:45.304Z] [BOT] ✅ Industry: Security Software Engineer – University Graduate 2026 @ ORG_175f350d
[2026-01-19T06:49:47.073Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer – University Graduate 2026 @ ORG_175f350d in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T06:49:48.574Z] [BOT] 💾 Marked as posted: Security Software Engineer – University Graduate 2026 @ ORG_175f350d (instance #1)
[2026-01-19T06:49:48.574Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-19T06:49:48.576Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-19T06:49:48.596Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:48.596Z] [BOT] 📍 [ROUTING] "Backend Software Engineer – University Graduate" @ ORG_175f350d
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T06:49:48.597Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T06:49:48.757Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer – University Graduate @ ORG_175f350d in #🤖・ai-jobs
[2026-01-19T06:49:48.757Z] [BOT] ✅ Industry: Backend Software Engineer – University Graduate @ ORG_175f350d
[2026-01-19T06:49:50.420Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer – University Graduate @ ORG_175f350d in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T06:49:51.921Z] [BOT] 💾 Marked as posted: Backend Software Engineer – University Graduate @ ORG_175f350d (instance #1)
[2026-01-19T06:49:51.921Z] [BOT] 💾 BEFORE ARCHIVING: 2882 jobs in database
[2026-01-19T06:49:51.923Z] [BOT] ✅ No jobs to archive (all 2882 jobs within 7-day window)
[2026-01-19T06:49:51.941Z] [BOT] 💾 Saved posted_jobs.json: 2882 active jobs
[2026-01-19T06:49:51.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:54.943Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T06:49:54.943Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ mthree
[2026-01-19T06:49:54.943Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:49:55.459Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ mthree in #💻・tech-jobs
  ✅ Industry: Entry Level Software Developer @ mthree
[2026-01-19T06:49:57.132Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ mthree in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-19T06:49:58.634Z] [BOT] 💾 Marked as posted: Entry Level Software Developer @ mthree (instance #1)
[2026-01-19T06:49:58.634Z] [BOT] 💾 BEFORE ARCHIVING: 2883 jobs in database
[2026-01-19T06:49:58.636Z] [BOT] ✅ No jobs to archive (all 2883 jobs within 7-day window)
[2026-01-19T06:49:58.654Z] [BOT] 💾 Saved posted_jobs.json: 2883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:49:58.654Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack" @ ORG_0baaf6f2 Express
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:49:58.755Z] [BOT ERROR] ❌ Error posting job Software Engineer - Full Stack: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Full Stack @ ORG_0baaf6f2 Express',
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
[2026-01-19T06:49:58.756Z] [BOT] ❌ Industry post failed: Software Engineer - Full Stack
⚠️  Channel full error count: 1/5
[2026-01-19T06:50:00.402Z] [BOT ERROR] ❌ Error posting job Software Engineer - Full Stack: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Full Stack @ ORG_0baaf6f2 Express',
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
[2026-01-19T06:50:00.402Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:50:04.904Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T06:50:04.905Z] [BOT] ⏭️  Skipping duplicate: JID_483d9ea9 (posted within 7 days)
[2026-01-19T06:50:04.905Z] [BOT] ⏭️  Skipping duplicate: JID_5595c1be (posted within 7 days)
[2026-01-19T06:50:04.905Z] [BOT] ⏭️  Skipping duplicate: JID_b2667136-i_jr0303337 (posted within 7 days)
[2026-01-19T06:50:04.905Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
[2026-01-19T06:50:04.905Z] [BOT] ⏭️  Skipping duplicate: JID_0efdd891 (posted within 7 days)
[2026-01-19T06:50:04.906Z] [BOT] ⏭️  Skipping duplicate: JID_334ea64d (posted within 7 days)
⏭️  Skipping duplicate: JID_00ce28a4-analyst_rq4036902 (posted within 7 days)
⏭️  Skipping duplicate: JID_47f128e5 (posted within 7 days)
⏭️  Skipping duplicate: JID_9219b453 (posted within 7 days)
[2026-01-19T06:50:05.022Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[2026-01-19T06:50:05.192Z] [BOT] ✅ Saved pending queue: 2834 total (2814 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T06:50:05.251Z] [BOT] 📂 Loaded 5025 existing routing entries
[2026-01-19T06:50:05.322Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5035
   Timestamp: 2026-01-19T06:50:05.301Z
[2026-01-19T06:50:05.322Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T06:50:05.323Z] [BOT] Total attempts: 19
   Successful: 16
   Failed: 3
   Skipped: 0
[2026-01-19T06:50:05.323Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T06:50:05.323Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
     1. #💻・remote-usa: 3 posts
     2. #📈・JID_fb739488: 3 posts
     3. #🚌・boston: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🦢・los-angeles: 2 posts
[2026-01-19T06:50:05.323Z] [BOT] [STATS] Channel stats saved
[2026-01-19T06:50:07.344Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2809) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
- [BOT ERROR] ❌ Error posting job Software Engineer - Full Stack: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Full Stack
- [BOT ERROR] ❌ Error posting job Software Engineer - Full Stack: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*