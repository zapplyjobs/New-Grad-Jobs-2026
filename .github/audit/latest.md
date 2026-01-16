# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T02:44:04.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T02:43:17.053Z] ========================================
[2026-01-16T02:43:17.055Z] Discord Bot Execution Log
[2026-01-16T02:43:17.055Z] Environment: GitHub Actions
[2026-01-16T02:43:17.055Z] Node Version: v20.19.6
[2026-01-16T02:43:17.055Z] ========================================
[2026-01-16T02:43:17.055Z] Environment Variables Check:
[2026-01-16T02:43:17.055Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T02:43:17.055Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.055Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T02:43:17.056Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T02:43:17.056Z] 
Multi-Channel Configuration:
[2026-01-16T02:43:17.056Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T02:43:17.056Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T02:43:17.056Z] 
Data Files Check:
[2026-01-16T02:43:17.057Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49359 bytes)
[2026-01-16T02:43:17.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1021704 bytes)
[2026-01-16T02:43:17.064Z] 
========================================
[2026-01-16T02:43:17.064Z] Starting Enhanced Discord Bot...
[2026-01-16T02:43:17.064Z] ========================================
[2026-01-16T02:43:17.588Z] [BOT] ✅ Loaded V2 database: 1900 jobs
[2026-01-16T02:43:18.303Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T02:43:18.304Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T02:43:18.304Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T02:43:18.425Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Area Director - Sales at nominal
[2026-01-16T02:43:18.428Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T02:43:18.429Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T02:43:18.429Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T02:43:18.430Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T02:43:18.430Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Area Director - Sales @ nominal: new york, austin, los angeles
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T02:43:18.430Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T02:43:18.432Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T02:43:18.435Z] [BOT] 📍 [ROUTING] "Area Director - Sales" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T02:43:18.461Z] [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T02:43:18.617Z] [BOT ERROR] ❌ Error posting job Area Director - Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Area Director - Sales @ nominal',
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
[2026-01-16T02:43:18.617Z] [BOT] ❌ Industry post failed: Area Director - Sales
⚠️  Channel full error count: 1/5
[2026-01-16T02:43:20.354Z] [BOT] ✅ Created forum post: 🏢 Area Director - Sales @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T02:43:21.855Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
[2026-01-16T02:43:21.855Z] [BOT] 💾 BEFORE ARCHIVING: 1901 jobs in database
[2026-01-16T02:43:21.857Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T02:43:21.862Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-16T02:43:21.862Z] [BOT] ✅ Archiving complete: 5 archived, 1896 active
[2026-01-16T02:43:21.875Z] [BOT] 💾 Saved posted_jobs.json: 1896 active jobs
[2026-01-16T02:43:21.875Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:21.875Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1897 jobs in database
[2026-01-16T02:43:21.877Z] [BOT] ✅ No jobs to archive (all 1897 jobs within 7-day window)
[2026-01-16T02:43:21.890Z] [BOT] 💾 Saved posted_jobs.json: 1897 active jobs
[2026-01-16T02:43:21.890Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:21.890Z] [BOT] 💾 Marked as posted: Area Director - Sales @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1898 jobs in database
[2026-01-16T02:43:21.892Z] [BOT] ✅ No jobs to archive (all 1898 jobs within 7-day window)
[2026-01-16T02:43:21.904Z] [BOT] 💾 Saved posted_jobs.json: 1898 active jobs
[2026-01-16T02:43:21.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:21.906Z] [BOT] 📍 [ROUTING] "Lead Sales Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-16T02:43:21.906Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T02:43:22.074Z] [BOT ERROR] ❌ Error posting job Lead Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Sales Engineer @ nominal',
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
[2026-01-16T02:43:22.074Z] [BOT] ❌ Industry post failed: Lead Sales Engineer
⚠️  Channel full error count: 2/5
[2026-01-16T02:43:23.807Z] [BOT] ✅ Created forum post: 🏢 Lead Sales Engineer @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T02:43:25.308Z] [BOT] 💾 Marked as posted: Lead Sales Engineer @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1899 jobs in database
[2026-01-16T02:43:25.310Z] [BOT] ✅ No jobs to archive (all 1899 jobs within 7-day window)
[2026-01-16T02:43:25.321Z] [BOT] 💾 Saved posted_jobs.json: 1899 active jobs
[2026-01-16T02:43:25.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:28.322Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T02:43:28.322Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:28.511Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-16T02:43:28.512Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-16T02:43:30.012Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-16T02:43:30.013Z] [BOT] 💾 BEFORE ARCHIVING: 1900 jobs in database
[2026-01-16T02:43:30.014Z] [BOT] ✅ No jobs to archive (all 1900 jobs within 7-day window)
[2026-01-16T02:43:30.025Z] [BOT] 💾 Saved posted_jobs.json: 1900 active jobs
[2026-01-16T02:43:30.025Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:30.026Z] [BOT] 📍 [ROUTING] "Software Developer Associate - TS/SCI w/Poly" @ ORG_c910d474 Dynamics Information Technology
[2026-01-16T02:43:30.026Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:30.194Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-16T02:43:30.194Z] [BOT] ✅ Industry: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology
[2026-01-16T02:43:31.975Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2026-01-16T02:43:31.975Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T02:43:33.476Z] [BOT] 💾 Marked as posted: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-16T02:43:33.476Z] [BOT] 💾 BEFORE ARCHIVING: 1901 jobs in database
[2026-01-16T02:43:33.477Z] [BOT] ✅ No jobs to archive (all 1901 jobs within 7-day window)
[2026-01-16T02:43:33.490Z] [BOT] 💾 Saved posted_jobs.json: 1901 active jobs
[2026-01-16T02:43:33.490Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:33.490Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Multiple Teams" @ ORG_153091ce
[2026-01-16T02:43:33.490Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:33.844Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Multiple Teams @ ORG_153091ce in #💻・tech-jobs
[2026-01-16T02:43:33.845Z] [BOT] ✅ Industry: Software Engineer 1 - Multiple Teams @ ORG_153091ce
[2026-01-16T02:43:35.540Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Multiple Teams @ ORG_153091ce in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T02:43:37.041Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Multiple Teams @ ORG_153091ce (instance #1)
[2026-01-16T02:43:37.041Z] [BOT] 💾 BEFORE ARCHIVING: 1902 jobs in database
[2026-01-16T02:43:37.043Z] [BOT] ✅ No jobs to archive (all 1902 jobs within 7-day window)
[2026-01-16T02:43:37.057Z] [BOT] 💾 Saved posted_jobs.json: 1902 active jobs
[2026-01-16T02:43:37.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:37.058Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-16T02:43:37.058Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:37.272Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-01-16T02:43:37.273Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-01-16T02:43:39.012Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
[2026-01-16T02:43:39.012Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T02:43:40.514Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-16T02:43:40.514Z] [BOT] 💾 BEFORE ARCHIVING: 1903 jobs in database
[2026-01-16T02:43:40.515Z] [BOT] ✅ No jobs to archive (all 1903 jobs within 7-day window)
[2026-01-16T02:43:40.528Z] [BOT] 💾 Saved posted_jobs.json: 1903 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:40.529Z] [BOT] 📍 [ROUTING] "AI Forward Deployed Engineer – Early Career - Agentforce - Software Engineering" @ ORG_33a7935d
[2026-01-16T02:43:40.529Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:40.948Z] [BOT] ✅ Created forum post: ☁️ AI Forward Deployed Engineer – Early Career - Agentforce - Software Engineering @ ORG_33a7935d in #💻・tech-jobs
  ✅ Industry: AI Forward Deployed Engineer – Early Career - Agentforce - Software Engineering @ ORG_33a7935d
[2026-01-16T02:43:42.642Z] [BOT] ✅ Created forum post: ☁️ AI Forward Deployed Engineer – Early Career - Agentforce - Software Engineering @ ORG_33a7935d in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T02:43:44.143Z] [BOT] 💾 Marked as posted: AI Forward Deployed Engineer – Early Career - Agentforce - Software Engineering @ ORG_33a7935d (instance #1)
[2026-01-16T02:43:44.143Z] [BOT] 💾 BEFORE ARCHIVING: 1904 jobs in database
[2026-01-16T02:43:44.145Z] [BOT] ✅ No jobs to archive (all 1904 jobs within 7-day window)
[2026-01-16T02:43:44.157Z] [BOT] 💾 Saved posted_jobs.json: 1904 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:44.157Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_b18a8c08
[2026-01-16T02:43:44.157Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:44.325Z] [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I @ Fanatics',
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
[2026-01-16T02:43:44.325Z] [BOT] ❌ Industry post failed: Software Engineer I
⚠️  Channel full error count: 1/5
[2026-01-16T02:43:45.980Z] [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I @ Fanatics',
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
[2026-01-16T02:43:45.981Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T02:43:47.481Z] [BOT] 📍 [ROUTING] "Software Engineer - Schemas & Object Framework" @ ORG_c4edd50eing
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T02:43:47.735Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing in #💻・tech-jobs
  ✅ Industry: Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing
[2026-01-16T02:43:49.422Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T02:43:50.924Z] [BOT] 💾 Marked as posted: Software Engineer - Schemas & Object Framework @ ORG_c4edd50eing (instance #1)
[2026-01-16T02:43:50.924Z] [BOT] 💾 BEFORE ARCHIVING: 1905 jobs in database
[2026-01-16T02:43:50.925Z] [BOT] ✅ No jobs to archive (all 1905 jobs within 7-day window)
[2026-01-16T02:43:50.938Z] [BOT] 💾 Saved posted_jobs.json: 1905 active jobs
[2026-01-16T02:43:50.938Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:43:53.939Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T02:43:53.940Z] [BOT] 📍 [ROUTING] "Data Analyst I - Consumer Loan Analytics" @ ORG_8c28bf8a
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T02:43:53.940Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T02:43:54.201Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a in #📈・JID_fb739488
[2026-01-16T02:43:54.201Z] [BOT] ✅ Industry: Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a
[2026-01-16T02:43:56.005Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T02:43:57.507Z] [BOT] 💾 Marked as posted: Data Analyst I - Consumer Loan Analytics @ ORG_8c28bf8a (instance #1)
[2026-01-16T02:43:57.507Z] [BOT] 💾 BEFORE ARCHIVING: 1906 jobs in database
[2026-01-16T02:43:57.508Z] [BOT] ✅ No jobs to archive (all 1906 jobs within 7-day window)
[2026-01-16T02:43:57.521Z] [BOT] 💾 Saved posted_jobs.json: 1906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:44:00.522Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_d82e3c61 (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_baa95e15 (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_8863b708 (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_560c9b02-external_career_site-JID_2640b0db-poly_rq199001 (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_26748913 (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_0b7a884b (posted within 7 days)
[2026-01-16T02:44:00.523Z] [BOT] ⏭️  Skipping duplicate: JID_c9ba7f33-analytics_r21677-1 (posted within 7 days)
[2026-01-16T02:44:00.524Z] [BOT] ⏭️  Skipping duplicate: JID_6098fed3-external_career_site-JID_111189af-_jr312405-1 (posted within 7 days)
[2026-01-16T02:44:00.524Z] [BOT] ⏭️  Skipping duplicate: JID_5cecdc45 (posted within 7 days)
[2026-01-16T02:44:00.637Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-16T02:44:00.808Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T02:44:00.870Z] [BOT] 📂 Loaded 4115 existing routing entries
[2026-01-16T02:44:00.934Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T02:44:00.934Z] [BOT] Total entries: 4125
   Timestamp: 2026-01-16T02:44:00.917Z
[2026-01-16T02:44:00.935Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T02:44:00.935Z] [BOT] Total attempts: 19
   Successful: 15
   Failed: 4
   Skipped: 0
[2026-01-16T02:44:00.935Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 2 posts
     3. #🚌・boston: 2 posts
     4. #🗽・new-york: 1 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-16T02:44:00.935Z] [BOT] [STATS] Channel stats saved
[2026-01-16T02:44:02.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Area Director - Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Area Director - Sales
- [BOT ERROR] ❌ Error posting job Lead Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lead Sales Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer I
- [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*