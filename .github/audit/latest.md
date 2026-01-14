# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T23:07:24.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T23:06:30.436Z] ========================================
[2026-01-14T23:06:30.438Z] Discord Bot Execution Log
[2026-01-14T23:06:30.438Z] Environment: GitHub Actions
[2026-01-14T23:06:30.438Z] Node Version: v20.19.6
[2026-01-14T23:06:30.438Z] ========================================
[2026-01-14T23:06:30.438Z] Environment Variables Check:
[2026-01-14T23:06:30.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T23:06:30.438Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.438Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T23:06:30.439Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T23:06:30.439Z] 
Multi-Channel Configuration:
[2026-01-14T23:06:30.439Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T23:06:30.439Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T23:06:30.440Z] 
Data Files Check:
[2026-01-14T23:06:30.441Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173975 bytes)
[2026-01-14T23:06:30.447Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 797591 bytes)
[2026-01-14T23:06:30.447Z] 
========================================
[2026-01-14T23:06:30.447Z] Starting Enhanced Discord Bot...
[2026-01-14T23:06:30.447Z] ========================================
[2026-01-14T23:06:30.987Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-14T23:06:31.503Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T23:06:31.503Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T23:06:31.504Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T23:06:31.612Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Director, Payroll Operations at figma
[2026-01-14T23:06:31.614Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T23:06:31.614Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T23:06:31.615Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T23:06:31.615Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-14T23:06:31.615Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Manager, Software Engineering - Creation Engine @ figma: san francisco, ca • new york, ny • united states, new york, ny • united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-14T23:06:31.616Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T23:06:31.620Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-14T23:06:31.620Z] [BOT] 📍 [ROUTING] "Director, Payroll Operations" @ figma
[2026-01-14T23:06:31.620Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:06:31.638Z] [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T23:06:31.878Z] [BOT] ✅ Created forum post: 🏢 Director, Payroll Operations @ figma in #💲・sales-jobs
  ✅ Industry: Director, Payroll Operations @ figma
[2026-01-14T23:06:33.587Z] [BOT] ✅ Created forum post: 🏢 Director, Payroll Operations @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:35.088Z] [BOT] 💾 Marked as posted: Director, Payroll Operations @ figma (instance #1)
[2026-01-14T23:06:35.088Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-14T23:06:35.089Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-14T23:06:35.106Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:35.106Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T23:06:35.107Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:06:35.368Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Mid-Market Sales @ figma
[2026-01-14T23:06:37.072Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:38.573Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales @ figma (instance #1)
[2026-01-14T23:06:38.574Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-14T23:06:38.575Z] [BOT] ✅ No jobs to archive (all 1498 jobs within 7-day window)
[2026-01-14T23:06:38.585Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
[2026-01-14T23:06:38.585Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:38.585Z] [BOT] 📍 [ROUTING] "Manager, Solutions Consulting" @ figma
[2026-01-14T23:06:38.585Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:06:38.867Z] [BOT] ✅ Created forum post: 🏢 Manager, Solutions Consulting @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Solutions Consulting @ figma
[2026-01-14T23:06:40.535Z] [BOT] ✅ Created forum post: 🏢 Manager, Solutions Consulting @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:42.036Z] [BOT] 💾 Marked as posted: Manager, Solutions Consulting @ figma (instance #1)
[2026-01-14T23:06:42.037Z] [BOT] 💾 BEFORE ARCHIVING: 1499 jobs in database
[2026-01-14T23:06:42.038Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-14T23:06:42.048Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:42.049Z] [BOT] 📍 [ROUTING] "Partner Manager, Scaled" @ figma
[2026-01-14T23:06:42.049Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:06:42.258Z] [BOT] ✅ Created forum post: 🏢 Partner Manager, Scaled @ figma in #💲・sales-jobs
[2026-01-14T23:06:42.258Z] [BOT] ✅ Industry: Partner Manager, Scaled @ figma
[2026-01-14T23:06:44.037Z] [BOT] ✅ Created forum post: 🏢 Partner Manager, Scaled @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:45.539Z] [BOT] 💾 Marked as posted: Partner Manager, Scaled @ figma (instance #1)
[2026-01-14T23:06:45.539Z] [BOT] 💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-14T23:06:45.540Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-14T23:06:45.551Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:45.551Z] [BOT] 📍 [ROUTING] "Account Executive, SMB " @ figma
[2026-01-14T23:06:45.551Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T23:06:45.819Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB  @ figma in #💲・sales-jobs
[2026-01-14T23:06:45.819Z] [BOT] ✅ Industry: Account Executive, SMB  @ figma
[2026-01-14T23:06:47.485Z] [BOT] ✅ Created forum post: 🏢 Account Executive, SMB  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:48.986Z] [BOT] 💾 Marked as posted: Account Executive, SMB  @ figma (instance #1)
[2026-01-14T23:06:48.986Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-14T23:06:48.987Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-14T23:06:48.998Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-14T23:06:48.998Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:51.999Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T23:06:51.999Z] [BOT] 📍 [ROUTING] "Growth Marketing Manager, Creator & Affiliate" @ figma
   Category: MARKETING (matched: "marketing")
[2026-01-14T23:06:51.999Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T23:06:52.326Z] [BOT] ✅ Created forum post: 🏢 Growth Marketing Manager, Creator & Affiliate @ figma in #📣・marketing-jobs
  ✅ Industry: Growth Marketing Manager, Creator & Affiliate @ figma
[2026-01-14T23:06:54.013Z] [BOT] ✅ Created forum post: 🏢 Growth Marketing Manager, Creator & Affiliate @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T23:06:55.515Z] [BOT] 💾 Marked as posted: Growth Marketing Manager, Creator & Affiliate @ figma (instance #1)
[2026-01-14T23:06:55.515Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-14T23:06:55.516Z] [BOT] ✅ No jobs to archive (all 1502 jobs within 7-day window)
[2026-01-14T23:06:55.526Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:06:58.526Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T23:06:58.527Z] [BOT] 📍 [ROUTING] "Manager, Software Engineering - Creation Engine" @ figma
[2026-01-14T23:06:58.527Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T23:06:58.824Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Creation Engine @ figma in #📈・JID_fb739488
[2026-01-14T23:06:58.824Z] [BOT] ✅ Industry: Manager, Software Engineering - Creation Engine @ figma
[2026-01-14T23:07:00.510Z] [BOT] ✅ Created forum post: 🏢 Manager, Software Engineering - Creation Engine @ figma in #🌉・san-francisco
[2026-01-14T23:07:00.511Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:07:02.012Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Creation Engine @ figma (instance #1)
[2026-01-14T23:07:02.012Z] [BOT] 💾 BEFORE ARCHIVING: 1503 jobs in database
[2026-01-14T23:07:02.013Z] [BOT] ✅ No jobs to archive (all 1503 jobs within 7-day window)
[2026-01-14T23:07:02.025Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T23:07:02.025Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Expressive AI @ figma (instance #1)
[2026-01-14T23:07:02.026Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-14T23:07:02.027Z] [BOT] ✅ No jobs to archive (all 1504 jobs within 7-day window)
[2026-01-14T23:07:02.036Z] [BOT] 💾 Saved posted_jobs.json: 1504 active jobs
[2026-01-14T23:07:02.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:07:02.036Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Collaboration Tools @ figma (instance #1)
[2026-01-14T23:07:02.036Z] [BOT] 💾 BEFORE ARCHIVING: 1505 jobs in database
[2026-01-14T23:07:02.037Z] [BOT] ✅ No jobs to archive (all 1505 jobs within 7-day window)
[2026-01-14T23:07:02.046Z] [BOT] 💾 Saved posted_jobs.json: 1505 active jobs
[2026-01-14T23:07:02.046Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:07:02.046Z] [BOT] 📍 [ROUTING] "Strategic Finance, Finance Systems & Automation" @ figma
[2026-01-14T23:07:02.046Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T23:07:02.358Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance, Finance Systems & Automation @ figma in #📈・JID_fb739488
[2026-01-14T23:07:02.358Z] [BOT] ✅ Industry: Strategic Finance, Finance Systems & Automation @ figma
[2026-01-14T23:07:04.130Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance, Finance Systems & Automation @ figma in #🌉・san-francisco
[2026-01-14T23:07:04.130Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T23:07:05.631Z] [BOT] 💾 Marked as posted: Strategic Finance, Finance Systems & Automation @ figma (instance #1)
[2026-01-14T23:07:05.632Z] [BOT] 💾 BEFORE ARCHIVING: 1506 jobs in database
[2026-01-14T23:07:05.633Z] [BOT] ✅ No jobs to archive (all 1506 jobs within 7-day window)
[2026-01-14T23:07:05.643Z] [BOT] 💾 Saved posted_jobs.json: 1506 active jobs
[2026-01-14T23:07:05.643Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T23:07:08.644Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-14T23:07:08.645Z] [BOT] 📍 [ROUTING] "Product Manager, Sites" @ figma
   Category: PRODUCT (matched: "product")
[2026-01-14T23:07:08.645Z] [BOT] Channel: 📦・product-jobs (1391...8889)
[2026-01-14T23:07:08.766Z] [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Manager, Sites @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_c616cbe4/threads'
}
[2026-01-14T23:07:08.766Z] [BOT] ❌ Industry post failed: Product Manager, Sites
⚠️  Channel full error count: 1/5
[2026-01-14T23:07:10.442Z] [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Manager, Sites @ figma',
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
[2026-01-14T23:07:10.442Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T23:07:14.943Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-14T23:07:14.943Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Product" @ figma
[2026-01-14T23:07:14.944Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T23:07:15.150Z] [BOT ERROR] ❌ Error posting job Technical Recruiter, Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Recruiter, Product @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2026-01-14T23:07:15.150Z] [BOT] ❌ Industry post failed: Technical Recruiter, Product
⚠️  Channel full error count: 2/5
[2026-01-14T23:07:16.766Z] [BOT ERROR] ❌ Error posting job Technical Recruiter, Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Recruiter, Product @ figma',
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
[2026-01-14T23:07:16.767Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T23:07:21.268Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-14T23:07:21.269Z] [BOT] ⏭️  Skipping duplicate: JID_ec3f0bda (posted within 7 days)
[2026-01-14T23:07:21.270Z] [BOT] ⏭️  Skipping duplicate: JID_ca57f095 (posted within 7 days)
⏭️  Skipping duplicate: JID_4aa9ae38 (posted within 7 days)
⏭️  Skipping duplicate: JID_1d1edb55 (posted within 7 days)
⏭️  Skipping duplicate: JID_e1299199 (posted within 7 days)
[2026-01-14T23:07:21.270Z] [BOT] ⏭️  Skipping duplicate: JID_caf7d4ef (posted within 7 days)
⏭️  Skipping duplicate: JID_e63c6a0e (posted within 7 days)
[2026-01-14T23:07:21.270Z] [BOT] ⏭️  Skipping duplicate: JID_fbea14ba (posted within 7 days)
[2026-01-14T23:07:21.383Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-14T23:07:21.545Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-14T23:07:21.545Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T23:07:21.599Z] [BOT] 📂 Loaded 3635 existing routing entries
[2026-01-14T23:07:21.660Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-14T23:07:21.660Z] [BOT] New entries: 10
   Total entries: 3645
   Timestamp: 2026-01-14T23:07:21.645Z
[2026-01-14T23:07:21.661Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T23:07:21.661Z] [BOT] Total attempts: 20
   Successful: 16
   Failed: 4
   Skipped: 0
[2026-01-14T23:07:21.661Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 8 posts
[2026-01-14T23:07:21.661Z] [BOT] 2. #💲・sales-jobs: 5 posts
     3. #📈・JID_fb739488: 2 posts
     4. #📣・marketing-jobs: 1 posts
[2026-01-14T23:07:21.661Z] [BOT] [STATS] Channel stats saved
[2026-01-14T23:07:23.687Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Manager, Sites
- [BOT ERROR] ❌ Error posting job Product Manager, Sites: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Recruiter, Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Recruiter, Product
- [BOT ERROR] ❌ Error posting job Technical Recruiter, Product: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*