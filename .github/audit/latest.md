# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T17:22:06.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T17:21:21.587Z] ========================================
[2026-01-15T17:21:21.589Z] Discord Bot Execution Log
[2026-01-15T17:21:21.589Z] Environment: GitHub Actions
[2026-01-15T17:21:21.589Z] Node Version: v20.19.6
[2026-01-15T17:21:21.589Z] ========================================
[2026-01-15T17:21:21.590Z] Environment Variables Check:
[2026-01-15T17:21:21.590Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T17:21:21.590Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T17:21:21.590Z] 
Multi-Channel Configuration:
[2026-01-15T17:21:21.590Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.590Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.591Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.591Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.591Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.591Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T17:21:21.591Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T17:21:21.591Z] 
Data Files Check:
[2026-01-15T17:21:21.591Z] .github/data/new_jobs.json: ✅ Exists (10 items, 19601 bytes)
[2026-01-15T17:21:21.598Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 942549 bytes)
[2026-01-15T17:21:21.598Z] 
========================================
[2026-01-15T17:21:21.598Z] Starting Enhanced Discord Bot...
[2026-01-15T17:21:21.598Z] ========================================
[2026-01-15T17:21:22.136Z] [BOT] ✅ Loaded V2 database: 1762 jobs
[2026-01-15T17:21:23.076Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T17:21:23.077Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T17:21:23.077Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T17:21:23.189Z] [BOT] ✅ Loaded pending queue: 2740 total (2720 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) at ByteDance
[2026-01-15T17:21:23.192Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T17:21:23.192Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T17:21:23.193Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T17:21:23.193Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T17:21:23.193Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T17:21:23.197Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T17:21:23.198Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
[2026-01-15T17:21:23.199Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:23.216Z] [BOT ERROR] (node:2462) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T17:21:23.363Z] [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ByteDance',
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
[2026-01-15T17:21:23.364Z] [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
⚠️  Channel full error count: 1/5
[2026-01-15T17:21:25.190Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T17:21:25.191Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T17:21:26.692Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c (instance #1)
[2026-01-15T17:21:26.692Z] [BOT] 💾 BEFORE ARCHIVING: 1763 jobs in database
[2026-01-15T17:21:26.694Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T17:21:26.707Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T17:21:26.707Z] [BOT] ✅ Archiving complete: 1 archived, 1762 active
[2026-01-15T17:21:26.719Z] [BOT] 💾 Saved posted_jobs.json: 1762 active jobs
[2026-01-15T17:21:26.719Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:26.719Z] [BOT] 📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-15T17:21:26.719Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:26.996Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T17:21:26.996Z] [BOT] ✅ Industry: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c
[2026-01-15T17:21:28.739Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T17:21:30.240Z] [BOT] 💾 Marked as posted: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c (instance #1)
[2026-01-15T17:21:30.240Z] [BOT] 💾 BEFORE ARCHIVING: 1763 jobs in database
[2026-01-15T17:21:30.242Z] [BOT] ✅ No jobs to archive (all 1763 jobs within 7-day window)
[2026-01-15T17:21:30.253Z] [BOT] 💾 Saved posted_jobs.json: 1763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:30.253Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-15T17:21:30.253Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:30.493Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T17:21:30.494Z] [BOT] ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2026-01-15T17:21:32.289Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #🦢・los-angeles
[2026-01-15T17:21:32.289Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-15T17:21:33.791Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T17:21:33.791Z] [BOT] 💾 BEFORE ARCHIVING: 1764 jobs in database
[2026-01-15T17:21:33.793Z] [BOT] ✅ No jobs to archive (all 1764 jobs within 7-day window)
[2026-01-15T17:21:33.806Z] [BOT] 💾 Saved posted_jobs.json: 1764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:33.807Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Global Industries" @ ORG_dc7620eb
[2026-01-15T17:21:33.807Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:34.089Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Global Industries @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-15T17:21:34.089Z] [BOT] ✅ Industry: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb
[2026-01-15T17:21:35.591Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb (instance #1)
[2026-01-15T17:21:35.591Z] [BOT] 💾 BEFORE ARCHIVING: 1765 jobs in database
[2026-01-15T17:21:35.592Z] [BOT] ✅ No jobs to archive (all 1765 jobs within 7-day window)
[2026-01-15T17:21:35.604Z] [BOT] 💾 Saved posted_jobs.json: 1765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:35.605Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required" @ ORG_7a23266b
   Category: TECH (matched: "software")
[2026-01-15T17:21:35.605Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:35.945Z] [BOT] ✅ Created forum post: 🏢 Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b
[2026-01-15T17:21:37.446Z] [BOT] 💾 Marked as posted: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b (instance #1)
💾 BEFORE ARCHIVING: 1766 jobs in database
[2026-01-15T17:21:37.448Z] [BOT] ✅ No jobs to archive (all 1766 jobs within 7-day window)
[2026-01-15T17:21:37.459Z] [BOT] 💾 Saved posted_jobs.json: 1766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:37.460Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ ORG_b26219beina
   Category: TECH (matched: "web engineer")
[2026-01-15T17:21:37.460Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T17:21:37.755Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_b26219beina in #💻・tech-jobs
  ✅ Industry: Full Stack Engineer @ ORG_b26219beina
[2026-01-15T17:21:39.571Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_b26219beina in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T17:21:41.072Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ ORG_b26219beina (instance #1)
[2026-01-15T17:21:41.072Z] [BOT] 💾 BEFORE ARCHIVING: 1767 jobs in database
[2026-01-15T17:21:41.073Z] [BOT] ✅ No jobs to archive (all 1767 jobs within 7-day window)
[2026-01-15T17:21:41.084Z] [BOT] 💾 Saved posted_jobs.json: 1767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T17:21:44.084Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T17:21:44.085Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T17:21:44.258Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T17:21:44.258Z] [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T17:21:45.889Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T17:21:45.889Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T17:21:47.390Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T17:21:47.531Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Multiple Teams @ ByteDance',
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
[2026-01-15T17:21:47.532Z] [BOT] ❌ Industry post failed: Graduate Research Scientist - Multiple Teams
⚠️  Channel full error count: 2/5
[2026-01-15T17:21:49.174Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Multiple Teams @ ByteDance',
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
[2026-01-15T17:21:49.174Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T17:21:50.675Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T17:21:50.675Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T17:21:50.803Z] [BOT ERROR] ❌ Error posting job University Graduate - Research Scientist/Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🎨 University Graduate - Research Scientist/Engineer @ Adobe',
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
[2026-01-15T17:21:50.803Z] [BOT] ❌ Industry post failed: University Graduate - Research Scientist/Engineer
⚠️  Channel full error count: 3/5
[2026-01-15T17:21:52.442Z] [BOT ERROR] ❌ Error posting job University Graduate - Research Scientist/Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🎨 University Graduate - Research Scientist/Engineer @ Adobe',
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
[2026-01-15T17:21:52.442Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T17:21:56.945Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T17:21:56.946Z] [BOT] 📍 [ROUTING] "Financial Data Analyst" @ ORG_23325912 Global
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-15T17:21:56.946Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T17:21:56.946Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T17:21:57.108Z] [BOT ERROR] ❌ Error posting job Financial Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Financial Data Analyst @ ORG_23325912 Global',
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
[2026-01-15T17:21:57.108Z] [BOT] ❌ Industry post failed: Financial Data Analyst
⚠️  Channel full error count: 4/5
[2026-01-15T17:21:58.785Z] [BOT ERROR] ❌ Error posting job Financial Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Financial Data Analyst @ ORG_23325912 Global',
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
[2026-01-15T17:21:58.785Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-15T17:22:03.287Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-15T17:22:03.287Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f529a541-detail (posted within 7 days)
[2026-01-15T17:22:03.288Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_05246c05-detail (posted within 7 days)
[2026-01-15T17:22:03.288Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a9aa0f74-detail (posted within 7 days)
[2026-01-15T17:22:03.288Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-313437 (posted within 7 days)
[2026-01-15T17:22:03.288Z] [BOT] ⏭️  Skipping duplicate: JID_2d3360d6 (posted within 7 days)
[2026-01-15T17:22:03.289Z] [BOT] ⏭️  Skipping duplicate: JID_dd169aa0 (posted within 7 days)
[2026-01-15T17:22:03.399Z] [BOT] ✅ Loaded pending queue: 2740 total (2720 pending, 20 enriched, 0 posted)
[2026-01-15T17:22:03.583Z] [BOT] ✅ Saved pending queue: 2740 total (2720 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-15T17:22:03.583Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T17:22:03.639Z] [BOT] 📂 Loaded 3925 existing routing entries
[2026-01-15T17:22:03.701Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T17:22:03.701Z] [BOT] Total entries: 3935
   Timestamp: 2026-01-15T17:22:03.685Z
[2026-01-15T17:22:03.702Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 18
[2026-01-15T17:22:03.702Z] [BOT] Successful: 9
   Failed: 9
   Skipped: 0
[2026-01-15T17:22:03.703Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 1 posts
     3. #🌧️・seattle: 1 posts
     4. #🦢・los-angeles: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-15T17:22:03.703Z] [BOT] [STATS] Channel stats saved
[2026-01-15T17:22:05.728Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2462) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Research Scientist - Multiple Teams
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multiple Teams: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job University Graduate - Research Scientist/Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: University Graduate - Research Scientist/Engineer
- [BOT ERROR] ❌ Error posting job University Graduate - Research Scientist/Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Financial Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Financial Data Analyst
- [BOT ERROR] ❌ Error posting job Financial Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*