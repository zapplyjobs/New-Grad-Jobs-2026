# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T17:14:46.996Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T17:13:50.080Z] ========================================
[2026-01-13T17:13:50.082Z] Discord Bot Execution Log
[2026-01-13T17:13:50.082Z] Environment: GitHub Actions
[2026-01-13T17:13:50.083Z] Node Version: v20.19.6
[2026-01-13T17:13:50.083Z] ========================================
[2026-01-13T17:13:50.083Z] Environment Variables Check:
[2026-01-13T17:13:50.083Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T17:13:50.083Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T17:13:50.083Z] 
Multi-Channel Configuration:
[2026-01-13T17:13:50.083Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.083Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.084Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.084Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.084Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T17:13:50.084Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T17:13:50.084Z] 
Data Files Check:
[2026-01-13T17:13:50.085Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200174 bytes)
[2026-01-13T17:13:50.088Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 471418 bytes)
[2026-01-13T17:13:50.088Z] 
========================================
[2026-01-13T17:13:50.088Z] Starting Enhanced Discord Bot...
[2026-01-13T17:13:50.088Z] ========================================
[2026-01-13T17:13:50.613Z] [BOT] ✅ Loaded V2 database: 892 jobs
[2026-01-13T17:13:51.096Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T17:13:51.096Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T17:13:51.097Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T17:13:51.202Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: People Analytics Lead at airtable
[2026-01-13T17:13:51.205Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T17:13:51.205Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T17:13:51.205Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T17:13:51.206Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T17:13:51.206Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T17:13:51.211Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T17:13:51.211Z] [BOT] 📍 [ROUTING] "People Analytics Lead" @ airtable
[2026-01-13T17:13:51.211Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T17:13:51.216Z] [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T17:13:51.341Z] [BOT ERROR] ❌ Error posting job People Analytics Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 People Analytics Lead @ airtable',
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
[2026-01-13T17:13:51.342Z] [BOT] ❌ Industry post failed: People Analytics Lead
⚠️  Channel full error count: 1/5
[2026-01-13T17:13:53.053Z] [BOT] ✅ Created forum post: 🏢 People Analytics Lead @ airtable in #🌉・san-francisco
[2026-01-13T17:13:53.053Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T17:13:54.554Z] [BOT] 💾 Marked as posted: People Analytics Lead @ airtable (instance #1)
[2026-01-13T17:13:54.554Z] [BOT] 💾 BEFORE ARCHIVING: 893 jobs in database
[2026-01-13T17:13:54.555Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T17:13:54.560Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-13T17:13:54.560Z] [BOT] ✅ Archiving complete: 2 archived, 891 active
[2026-01-13T17:13:54.568Z] [BOT] 💾 Saved posted_jobs.json: 891 active jobs
[2026-01-13T17:13:54.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:13:57.569Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T17:13:57.569Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
[2026-01-13T17:13:57.569Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T17:13:57.923Z] [BOT] ✅ Created forum post: 🏢  People Systems Engineer, Airtable Specialist @ airtable in #🤖・ai-jobs
[2026-01-13T17:13:57.923Z] [BOT] ✅ Industry:  People Systems Engineer, Airtable Specialist @ airtable
[2026-01-13T17:13:59.773Z] [BOT] ✅ Created forum post: 🏢  People Systems Engineer, Airtable Specialist @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T17:14:01.273Z] [BOT] 💾 Marked as posted:  People Systems Engineer, Airtable Specialist @ airtable (instance #1)
[2026-01-13T17:14:01.274Z] [BOT] 💾 BEFORE ARCHIVING: 892 jobs in database
[2026-01-13T17:14:01.274Z] [BOT] ✅ No jobs to archive (all 892 jobs within 7-day window)
[2026-01-13T17:14:01.282Z] [BOT] 💾 Saved posted_jobs.json: 892 active jobs
[2026-01-13T17:14:01.282Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:01.283Z] [BOT] 📍 [ROUTING] "Product Manager, Omni Analysis & Q&A" @ airtable
[2026-01-13T17:14:01.283Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T17:14:01.467Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Omni Analysis & Q&A @ airtable in #🤖・ai-jobs
[2026-01-13T17:14:01.467Z] [BOT] ✅ Industry: Product Manager, Omni Analysis & Q&A @ airtable
[2026-01-13T17:14:03.149Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Omni Analysis & Q&A @ airtable in #🌉・san-francisco
[2026-01-13T17:14:03.150Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T17:14:04.650Z] [BOT] 💾 Marked as posted: Product Manager, Omni Analysis & Q&A @ airtable (instance #1)
[2026-01-13T17:14:04.650Z] [BOT] 💾 BEFORE ARCHIVING: 893 jobs in database
[2026-01-13T17:14:04.651Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-13T17:14:04.658Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-13T17:14:04.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:04.659Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ airtable
[2026-01-13T17:14:04.659Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T17:14:04.854Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ airtable in #🤖・ai-jobs
  ✅ Industry: Product Security Engineer @ airtable
[2026-01-13T17:14:07.051Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T17:14:08.553Z] [BOT] 💾 Marked as posted: Product Security Engineer @ airtable (instance #1)
[2026-01-13T17:14:08.553Z] [BOT] 💾 BEFORE ARCHIVING: 894 jobs in database
[2026-01-13T17:14:08.553Z] [BOT] ✅ No jobs to archive (all 894 jobs within 7-day window)
[2026-01-13T17:14:08.560Z] [BOT] 💾 Saved posted_jobs.json: 894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:11.560Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T17:14:11.560Z] [BOT] 📍 [ROUTING] "Product Manager, AI & Automation" @ airtable
[2026-01-13T17:14:11.560Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-13T17:14:12.034Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI & Automation @ airtable in #💻・tech-jobs
[2026-01-13T17:14:12.034Z] [BOT] ✅ Industry: Product Manager, AI & Automation @ airtable
[2026-01-13T17:14:13.752Z] [BOT] ✅ Created forum post: 🏢 Product Manager, AI & Automation @ airtable in #🌉・san-francisco
[2026-01-13T17:14:13.752Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T17:14:15.254Z] [BOT] 💾 Marked as posted: Product Manager, AI & Automation @ airtable (instance #1)
[2026-01-13T17:14:15.254Z] [BOT] 💾 BEFORE ARCHIVING: 895 jobs in database
[2026-01-13T17:14:15.254Z] [BOT] ✅ No jobs to archive (all 895 jobs within 7-day window)
[2026-01-13T17:14:15.263Z] [BOT] 💾 Saved posted_jobs.json: 895 active jobs
[2026-01-13T17:14:15.263Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:18.263Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T17:14:18.264Z] [BOT] 📍 [ROUTING] "Risk Specialist, GRCP" @ airtable
[2026-01-13T17:14:18.264Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T17:14:18.503Z] [BOT] ✅ Created forum post: 🏢 Risk Specialist, GRCP @ airtable in #💰・finance-jobs
[2026-01-13T17:14:18.503Z] [BOT] ✅ Industry: Risk Specialist, GRCP @ airtable
[2026-01-13T17:14:20.473Z] [BOT] ✅ Created forum post: 🏢 Risk Specialist, GRCP @ airtable in #🌉・san-francisco
[2026-01-13T17:14:20.473Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T17:14:21.973Z] [BOT] 💾 Marked as posted: Risk Specialist, GRCP @ airtable (instance #1)
[2026-01-13T17:14:21.973Z] [BOT] 💾 BEFORE ARCHIVING: 896 jobs in database
[2026-01-13T17:14:21.974Z] [BOT] ✅ No jobs to archive (all 896 jobs within 7-day window)
[2026-01-13T17:14:21.982Z] [BOT] 💾 Saved posted_jobs.json: 896 active jobs
[2026-01-13T17:14:21.982Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:24.983Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T17:14:24.984Z] [BOT] 📍 [ROUTING] "Scaled Customer Success Manager" @ airtable
[2026-01-13T17:14:24.984Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T17:14:25.206Z] [BOT] ✅ Created forum post: 🏢 Scaled Customer Success Manager @ airtable in #💲・sales-jobs
[2026-01-13T17:14:25.206Z] [BOT] ✅ Industry: Scaled Customer Success Manager @ airtable
[2026-01-13T17:14:26.793Z] [BOT ERROR] ❌ Error posting job Scaled Customer Success Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Scaled Customer Success Manager @ airtable',
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
[2026-01-13T17:14:26.794Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T17:14:28.294Z] [BOT] 💾 Marked as posted: Scaled Customer Success Manager @ airtable (instance #1)
[2026-01-13T17:14:28.295Z] [BOT] 💾 BEFORE ARCHIVING: 897 jobs in database
[2026-01-13T17:14:28.295Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2026-01-13T17:14:28.303Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
[2026-01-13T17:14:28.303Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T17:14:28.303Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ airtable
[2026-01-13T17:14:28.303Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T17:14:28.393Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Finance Systems @ airtable',
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
[2026-01-13T17:14:28.393Z] [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
⚠️  Channel full error count: 1/5
[2026-01-13T17:14:29.974Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Finance Systems @ airtable',
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
[2026-01-13T17:14:29.975Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T17:14:34.476Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-13T17:14:34.476Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
[2026-01-13T17:14:34.476Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T17:14:34.627Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-13T17:14:34.627Z] [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
⚠️  Channel full error count: 2/5
[2026-01-13T17:14:36.210Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T17:14:36.210Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T17:14:37.711Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
[2026-01-13T17:14:37.711Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T17:14:37.805Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-13T17:14:37.805Z] [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
⚠️  Channel full error count: 3/5
[2026-01-13T17:14:39.403Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
[2026-01-13T17:14:39.403Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T17:14:43.905Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-13T17:14:43.905Z] [BOT] ⏭️  Skipping duplicate: JID_37726e3e (posted within 7 days)
[2026-01-13T17:14:43.905Z] [BOT] ⏭️  Skipping duplicate: JID_ba7988a5 (posted within 7 days)
[2026-01-13T17:14:43.905Z] [BOT] ⏭️  Skipping duplicate: JID_4b48924d (posted within 7 days)
[2026-01-13T17:14:43.906Z] [BOT] ⏭️  Skipping duplicate: JID_fb8f2bd9 (posted within 7 days)
[2026-01-13T17:14:43.906Z] [BOT] ⏭️  Skipping duplicate: JID_4bba1742 (posted within 7 days)
[2026-01-13T17:14:43.906Z] [BOT] ⏭️  Skipping duplicate: JID_3579e77b (posted within 7 days)
[2026-01-13T17:14:43.906Z] [BOT] ⏭️  Skipping duplicate: JID_0f66f7f5 (posted within 7 days)
[2026-01-13T17:14:44.036Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[2026-01-13T17:14:44.193Z] [BOT] ✅ Saved pending queue: 2719 total (2699 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2026-01-13T17:14:44.193Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T17:14:44.243Z] [BOT] 📂 Loaded 3025 existing routing entries
[2026-01-13T17:14:44.300Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3035
[2026-01-13T17:14:44.300Z] [BOT] Timestamp: 2026-01-13T17:14:44.288Z
[2026-01-13T17:14:44.301Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T17:14:44.301Z] [BOT] Total attempts: 20
   Successful: 12
   Failed: 8
   Skipped: 0
[2026-01-13T17:14:44.301Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T17:14:44.301Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
[2026-01-13T17:14:44.301Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💻・tech-jobs: 1 posts
     4. #💰・finance-jobs: 1 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-13T17:14:44.302Z] [BOT] [STATS] Channel stats saved
[2026-01-13T17:14:46.327Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job People Analytics Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: People Analytics Lead
- [BOT ERROR] ❌ Error posting job Scaled Customer Success Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*