# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T19:05:53.360Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T19:05:12.830Z] ========================================
[2026-01-15T19:05:12.832Z] Discord Bot Execution Log
[2026-01-15T19:05:12.832Z] Environment: GitHub Actions
[2026-01-15T19:05:12.832Z] Node Version: v20.19.6
[2026-01-15T19:05:12.832Z] ========================================
[2026-01-15T19:05:12.832Z] Environment Variables Check:
[2026-01-15T19:05:12.832Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T19:05:12.832Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.832Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T19:05:12.833Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T19:05:12.833Z] 
Multi-Channel Configuration:
[2026-01-15T19:05:12.833Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T19:05:12.833Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T19:05:12.834Z] 
Data Files Check:
[2026-01-15T19:05:12.834Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31879 bytes)
[2026-01-15T19:05:12.842Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 950153 bytes)
[2026-01-15T19:05:12.842Z] 
========================================
[2026-01-15T19:05:12.842Z] Starting Enhanced Discord Bot...
[2026-01-15T19:05:12.842Z] ========================================
[2026-01-15T19:05:13.359Z] [BOT] ✅ Loaded V2 database: 1773 jobs
[2026-01-15T19:05:14.009Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T19:05:14.009Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T19:05:14.010Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T19:05:14.126Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start at ByteDance
[2026-01-15T19:05:14.129Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T19:05:14.129Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T19:05:14.129Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T19:05:14.130Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T19:05:14.130Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T19:05:14.130Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T19:05:14.132Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T19:05:14.134Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
[2026-01-15T19:05:14.134Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:05:14.150Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T19:05:14.279Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ByteDance',
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
[2026-01-15T19:05:14.279Z] [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T19:05:16.005Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
[2026-01-15T19:05:16.005Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-15T19:05:17.505Z] [BOT] 💾 Marked as posted: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T19:05:17.506Z] [BOT] 💾 BEFORE ARCHIVING: 1774 jobs in database
[2026-01-15T19:05:17.507Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T19:05:17.512Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T19:05:17.512Z] [BOT] ✅ Archiving complete: 2 archived, 1772 active
[2026-01-15T19:05:17.523Z] [BOT] 💾 Saved posted_jobs.json: 1772 active jobs
[2026-01-15T19:05:17.523Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:05:17.524Z] [BOT] 📍 [ROUTING] "CAS-Chemistry-Computational" @ ORG_9d38443e of Miami
[2026-01-15T19:05:17.524Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T19:05:17.823Z] [BOT] ✅ Created forum post: 🏢 CAS-Chemistry-Computational @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2026-01-15T19:05:17.823Z] [BOT] ✅ Industry: CAS-Chemistry-Computational @ ORG_9d38443e of Miami
[2026-01-15T19:05:19.820Z] [BOT] ✅ Created forum post: 🏢 CAS-Chemistry-Computational @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:05:21.321Z] [BOT] 💾 Marked as posted: CAS-Chemistry-Computational @ ORG_9d38443e of Miami (instance #1)
[2026-01-15T19:05:21.321Z] [BOT] 💾 BEFORE ARCHIVING: 1773 jobs in database
[2026-01-15T19:05:21.323Z] [BOT] ✅ No jobs to archive (all 1773 jobs within 7-day window)
[2026-01-15T19:05:21.334Z] [BOT] 💾 Saved posted_jobs.json: 1773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:05:21.334Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Applied Machine Learning - ML System" @ ORG_08c9a13c
[2026-01-15T19:05:21.334Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-15T19:05:21.334Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T19:05:21.566Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T19:05:21.566Z] [BOT] ✅ Industry: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c
[2026-01-15T19:05:23.395Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T19:05:24.896Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c (instance #1)
[2026-01-15T19:05:24.896Z] [BOT] 💾 BEFORE ARCHIVING: 1774 jobs in database
[2026-01-15T19:05:24.898Z] [BOT] ✅ No jobs to archive (all 1774 jobs within 7-day window)
[2026-01-15T19:05:24.912Z] [BOT] 💾 Saved posted_jobs.json: 1774 active jobs
[2026-01-15T19:05:24.912Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:05:27.913Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T19:05:27.915Z] [BOT] 📍 [ROUTING] "Engineering Students Seeking Full-Time Employment" @ ORG_6adce842
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T19:05:27.915Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T19:05:28.340Z] [BOT] ✅ Created forum post: 🏢 Engineering Students Seeking Full-Time Employment @ ORG_6adce842 in #📈・JID_fb739488
  ✅ Industry: Engineering Students Seeking Full-Time Employment @ ORG_6adce842
[2026-01-15T19:05:30.126Z] [BOT] ✅ Created forum post: 🏢 Engineering Students Seeking Full-Time Employment @ ORG_6adce842 in #🌆・chicago
[2026-01-15T19:05:30.126Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T19:05:31.627Z] [BOT] 💾 Marked as posted: Engineering Students Seeking Full-Time Employment @ ORG_6adce842 (instance #1)
[2026-01-15T19:05:31.627Z] [BOT] 💾 BEFORE ARCHIVING: 1775 jobs in database
[2026-01-15T19:05:31.629Z] [BOT] ✅ No jobs to archive (all 1775 jobs within 7-day window)
[2026-01-15T19:05:31.642Z] [BOT] 💾 Saved posted_jobs.json: 1775 active jobs
[2026-01-15T19:05:31.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:05:31.643Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst 1" @ ORG_d7d2f0ff & Southern Financial Group
[2026-01-15T19:05:31.643Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T19:05:31.997Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group in #📈・JID_fb739488
[2026-01-15T19:05:31.997Z] [BOT] ✅ Industry: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group
[2026-01-15T19:05:33.727Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group in #💻・remote-usa
[2026-01-15T19:05:33.728Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T19:05:35.228Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group (instance #1)
[2026-01-15T19:05:35.228Z] [BOT] 💾 BEFORE ARCHIVING: 1776 jobs in database
[2026-01-15T19:05:35.229Z] [BOT] ✅ No jobs to archive (all 1776 jobs within 7-day window)
[2026-01-15T19:05:35.241Z] [BOT] 💾 Saved posted_jobs.json: 1776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:05:38.242Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T19:05:38.242Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Fusion" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:05:38.382Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer - Fusion @ Oracle',
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
[2026-01-15T19:05:38.382Z] [BOT] ❌ Industry post failed: Undergrad Software Engineer - Fusion
⚠️  Channel full error count: 1/5
[2026-01-15T19:05:40.011Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer - Fusion @ Oracle',
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
  url: 'https://discord.com/api/v10/channels/CH_297f020b/threads'
}
[2026-01-15T19:05:40.012Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T19:05:41.512Z] [BOT] 📍 [ROUTING] "Software Engineer 2/3" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:05:41.702Z] [BOT ERROR] ❌ Error posting job Software Engineer 2/3: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman',
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
[2026-01-15T19:05:41.702Z] [BOT] ❌ Industry post failed: Software Engineer 2/3
⚠️  Channel full error count: 2/5
[2026-01-15T19:05:43.333Z] [BOT ERROR] ❌ Error posting job Software Engineer 2/3: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-15T19:05:43.333Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-15T19:05:44.834Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_931a39c9
[2026-01-15T19:05:44.834Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:05:44.982Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grad @ Netic',
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
[2026-01-15T19:05:44.982Z] [BOT] ❌ Industry post failed: Software Engineer – New Grad
⚠️  Channel full error count: 3/5
[2026-01-15T19:05:46.673Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grad @ Netic',
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
[2026-01-15T19:05:46.673Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T19:05:48.174Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Engine" @ ORG_1bb6fcfb
[2026-01-15T19:05:48.174Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:05:48.313Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Media Engine: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Media Engine @ TikTok',
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
[2026-01-15T19:05:48.313Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Media Engine
⚠️  Channel full error count: 4/5
[2026-01-15T19:05:49.951Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Media Engine: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Media Engine @ TikTok',
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
[2026-01-15T19:05:49.951Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T19:05:51.451Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2026-01-15T19:05:51.452Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:05:51.582Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer Graduate @ ByteDance',
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
[2026-01-15T19:05:51.582Z] [BOT] ❌ Industry post failed: Backend Software Engineer Graduate
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T19:05:51.583Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T19:05:51.583Z] [BOT] Total attempts: 19
   Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-15T19:05:51.583Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T19:05:51.583Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🌧️・seattle: 1 posts
[2026-01-15T19:05:51.583Z] [BOT] 5. #🌉・san-francisco: 1 posts
[2026-01-15T19:05:51.584Z] [BOT] [STATS] Channel stats saved
[2026-01-15T19:05:51.584Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T19:05:51.598Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Undergrad Software Engineer - Fusion
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2/3: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 2/3
- [BOT ERROR] ❌ Error posting job Software Engineer 2/3: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New Grad
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Media Engine: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Media Engine
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Media Engine: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Backend Software Engineer Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Backend Software Engineer Graduate
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*