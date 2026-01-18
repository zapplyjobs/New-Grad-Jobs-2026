# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T05:03:42.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T05:02:43.979Z] ========================================
[2026-01-18T05:02:43.981Z] Discord Bot Execution Log
[2026-01-18T05:02:43.981Z] Environment: GitHub Actions
[2026-01-18T05:02:43.981Z] Node Version: v20.19.6
[2026-01-18T05:02:43.981Z] ========================================
[2026-01-18T05:02:43.982Z] Environment Variables Check:
[2026-01-18T05:02:43.982Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T05:02:43.982Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.982Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T05:02:43.982Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T05:02:43.982Z] 
Multi-Channel Configuration:
[2026-01-18T05:02:43.982Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.982Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.982Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T05:02:43.983Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T05:02:43.983Z] 
Data Files Check:
[2026-01-18T05:02:43.984Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140861 bytes)
[2026-01-18T05:02:43.994Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1388200 bytes)
[2026-01-18T05:02:43.994Z] 
========================================
[2026-01-18T05:02:43.994Z] Starting Enhanced Discord Bot...
[2026-01-18T05:02:43.995Z] ========================================
[2026-01-18T05:02:44.530Z] [BOT] ✅ Loaded V2 database: 2565 jobs
[2026-01-18T05:02:45.326Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T05:02:45.326Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T05:02:45.327Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T05:02:45.446Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Federal Support Engineer 3 - Denver at datadog
[2026-01-18T05:02:45.449Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T05:02:45.450Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T05:02:45.450Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T05:02:45.451Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T05:02:45.451Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T05:02:45.456Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-18T05:02:45.456Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 3 - Denver" @ datadog
[2026-01-18T05:02:45.457Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:02:45.461Z] [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T05:02:45.718Z] [BOT] ✅ Created forum post: 🏢 Federal Support Engineer 3 - Denver @ datadog in #💻・tech-jobs
  ✅ Industry: Federal Support Engineer 3 - Denver @ datadog
[2026-01-18T05:02:47.221Z] [BOT] 💾 Marked as posted: Federal Support Engineer 3 - Denver @ datadog (instance #1)
[2026-01-18T05:02:47.221Z] [BOT] 💾 BEFORE ARCHIVING: 2566 jobs in database
[2026-01-18T05:02:47.223Z] [BOT] ✅ No jobs to archive (all 2566 jobs within 7-day window)
[2026-01-18T05:02:47.244Z] [BOT] 💾 Saved posted_jobs.json: 2566 active jobs
[2026-01-18T05:02:47.244Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T05:02:47.244Z] [BOT] 📍 [ROUTING] "Application Security Engineer" @ anthropic
[2026-01-18T05:02:47.245Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:02:47.573Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineer @ anthropic in #💻・tech-jobs
[2026-01-18T05:02:47.573Z] [BOT] ✅ Industry: Application Security Engineer @ anthropic
[2026-01-18T05:02:49.289Z] [BOT] ✅ Created forum post: 🏢 Application Security Engineer @ anthropic in #🌉・san-francisco
[2026-01-18T05:02:49.289Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T05:02:50.791Z] [BOT] 💾 Marked as posted: Application Security Engineer @ anthropic (instance #1)
[2026-01-18T05:02:50.791Z] [BOT] 💾 BEFORE ARCHIVING: 2567 jobs in database
[2026-01-18T05:02:50.792Z] [BOT] ✅ No jobs to archive (all 2567 jobs within 7-day window)
[2026-01-18T05:02:50.807Z] [BOT] 💾 Saved posted_jobs.json: 2567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:02:50.808Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1" @ ORG_3cfbdbc3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:02:50.988Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer 1 @ ORG_3cfbdbc3
[2026-01-18T05:02:52.647Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 @ ORG_3cfbdbc3 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T05:02:54.148Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 @ ORG_3cfbdbc3 (instance #1)
[2026-01-18T05:02:54.148Z] [BOT] 💾 BEFORE ARCHIVING: 2568 jobs in database
[2026-01-18T05:02:54.150Z] [BOT] ✅ No jobs to archive (all 2568 jobs within 7-day window)
[2026-01-18T05:02:54.168Z] [BOT] 💾 Saved posted_jobs.json: 2568 active jobs
[2026-01-18T05:02:54.168Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T05:02:54.168Z] [BOT] 📍 [ROUTING] "Engineering Manager, UI Claude Consumer Products" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-18T05:02:54.168Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:02:54.421Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Claude Consumer Products @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, UI Claude Consumer Products @ anthropic
[2026-01-18T05:02:56.132Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Claude Consumer Products @ anthropic in #🌉・san-francisco
[2026-01-18T05:02:56.133Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T05:02:57.634Z] [BOT] 💾 Marked as posted: Engineering Manager, UI Claude Consumer Products @ anthropic (instance #1)
[2026-01-18T05:02:57.634Z] [BOT] 💾 BEFORE ARCHIVING: 2569 jobs in database
[2026-01-18T05:02:57.637Z] [BOT] ✅ No jobs to archive (all 2569 jobs within 7-day window)
[2026-01-18T05:02:57.654Z] [BOT] 💾 Saved posted_jobs.json: 2569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:03:00.654Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-18T05:03:00.654Z] [BOT] 📍 [ROUTING] "Technical Advisor" @ ORG_84877948 Enterprises, LLC
   Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-18T05:03:00.926Z] [BOT] ✅ Created forum post: 🏢 Technical Advisor @ ORG_84877948 Enterprises, LLC in #🏗️・JID_b7c6683f
  ✅ Industry: Technical Advisor @ ORG_84877948 Enterprises, LLC
[2026-01-18T05:03:02.646Z] [BOT] ✅ Created forum post: 🏢 Technical Advisor @ ORG_84877948 Enterprises, LLC in #💻・remote-usa
[2026-01-18T05:03:02.646Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T05:03:04.148Z] [BOT] 💾 Marked as posted: Technical Advisor @ ORG_84877948 Enterprises, LLC (instance #1)
[2026-01-18T05:03:04.148Z] [BOT] 💾 BEFORE ARCHIVING: 2570 jobs in database
[2026-01-18T05:03:04.150Z] [BOT] ✅ No jobs to archive (all 2570 jobs within 7-day window)
[2026-01-18T05:03:04.166Z] [BOT] 💾 Saved posted_jobs.json: 2570 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:03:07.166Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-18T05:03:07.167Z] [BOT] 📍 [ROUTING] "Internal Communications Program Manager" @ datadog
[2026-01-18T05:03:07.167Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-18T05:03:07.722Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Program Manager @ datadog in #📊・JID_9910249a
  ✅ Industry: Internal Communications Program Manager @ datadog
[2026-01-18T05:03:09.386Z] [BOT] ✅ Created forum post: 🏢 Internal Communications Program Manager @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T05:03:10.887Z] [BOT] 💾 Marked as posted: Internal Communications Program Manager @ datadog (instance #1)
[2026-01-18T05:03:10.887Z] [BOT] 💾 BEFORE ARCHIVING: 2571 jobs in database
[2026-01-18T05:03:10.889Z] [BOT] ✅ No jobs to archive (all 2571 jobs within 7-day window)
[2026-01-18T05:03:10.905Z] [BOT] 💾 Saved posted_jobs.json: 2571 active jobs
[2026-01-18T05:03:10.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T05:03:13.906Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T05:03:13.906Z] [BOT] 📍 [ROUTING] "People Analyst II" @ datadog
[2026-01-18T05:03:13.906Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T05:03:14.084Z] [BOT ERROR] ❌ Error posting job People Analyst II: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 People Analyst II @ datadog',
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
[2026-01-18T05:03:14.084Z] [BOT] ❌ Industry post failed: People Analyst II
⚠️  Channel full error count: 1/5
[2026-01-18T05:03:15.691Z] [BOT ERROR] ❌ Error posting job People Analyst II: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 People Analyst II @ datadog',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-18T05:03:15.692Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T05:03:20.193Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T05:03:20.194Z] [BOT] 📍 [ROUTING] "Compute Capacity Strategy & Operations" @ anthropic
[2026-01-18T05:03:20.194Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T05:03:20.374Z] [BOT ERROR] ❌ Error posting job Compute Capacity Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Compute Capacity Strategy & Operations @ anthropic',
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
[2026-01-18T05:03:20.375Z] [BOT] ❌ Industry post failed: Compute Capacity Strategy & Operations
⚠️  Channel full error count: 2/5
[2026-01-18T05:03:21.984Z] [BOT ERROR] ❌ Error posting job Compute Capacity Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Compute Capacity Strategy & Operations @ anthropic',
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
[2026-01-18T05:03:21.984Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:03:26.485Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T05:03:26.485Z] [BOT] 📍 [ROUTING] "Senior Field Enablement Manager - Leadership Development" @ datadog
   Category: SALES (matched: "sales")
[2026-01-18T05:03:26.486Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:03:26.722Z] [BOT ERROR] ❌ Error posting job Senior Field Enablement Manager - Leadership Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Enablement Manager - Leadership Development @ datadog',
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
[2026-01-18T05:03:26.722Z] [BOT] ❌ Industry post failed: Senior Field Enablement Manager - Leadership Development
⚠️  Channel full error count: 3/5
[2026-01-18T05:03:28.334Z] [BOT ERROR] ❌ Error posting job Senior Field Enablement Manager - Leadership Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Enablement Manager - Leadership Development @ datadog',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-18T05:03:28.334Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T05:03:32.834Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-18T05:03:32.835Z] [BOT] 📍 [ROUTING] "Finance Manager, Business Operations" @ discord
[2026-01-18T05:03:32.835Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-18T05:03:33.019Z] [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Manager, Business Operations @ discord',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-18T05:03:33.019Z] [BOT] ❌ Industry post failed: Finance Manager, Business Operations
⚠️  Channel full error count: 4/5
[2026-01-18T05:03:34.646Z] [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Manager, Business Operations @ discord',
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
[2026-01-18T05:03:34.646Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T05:03:39.148Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-18T05:03:39.149Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-18T05:03:39.149Z] [BOT] ⏭️  Skipping duplicate: JID_4497394c (posted within 7 days)
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-18T05:03:39.150Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
[2026-01-18T05:03:39.150Z] [BOT] ⏭️  Skipping duplicate: JID_16ff0fbc (posted within 7 days)
[2026-01-18T05:03:39.150Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-18T05:03:39.268Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[2026-01-18T05:03:39.454Z] [BOT] ✅ Saved pending queue: 2864 total (2844 pending, 14 enriched, 6 posted)
[2026-01-18T05:03:39.454Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T05:03:39.513Z] [BOT] 📂 Loaded 4735 existing routing entries
[2026-01-18T05:03:39.580Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4745
   Timestamp: 2026-01-18T05:03:39.561Z
[2026-01-18T05:03:39.581Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
[2026-01-18T05:03:39.581Z] [BOT] Successful: 11
   Failed: 8
   Skipped: 0
[2026-01-18T05:03:39.581Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T05:03:39.581Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 7
   Top channels:
[2026-01-18T05:03:39.581Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 2 posts
     3. #🌧️・seattle: 1 posts
     4. #🏗️・JID_b7c6683f: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-18T05:03:39.581Z] [BOT] [STATS] Channel stats saved
[2026-01-18T05:03:41.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2397) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job People Analyst II: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: People Analyst II
- [BOT ERROR] ❌ Error posting job People Analyst II: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Compute Capacity Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Compute Capacity Strategy & Operations
- [BOT ERROR] ❌ Error posting job Compute Capacity Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Field Enablement Manager - Leadership Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Enablement Manager - Leadership Development
- [BOT ERROR] ❌ Error posting job Senior Field Enablement Manager - Leadership Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Manager, Business Operations
- [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*