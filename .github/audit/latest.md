# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T20:28:02.290Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T20:27:08.288Z] ========================================
[2026-01-18T20:27:08.289Z] Discord Bot Execution Log
[2026-01-18T20:27:08.290Z] Environment: GitHub Actions
[2026-01-18T20:27:08.290Z] Node Version: v20.19.6
[2026-01-18T20:27:08.290Z] ========================================
[2026-01-18T20:27:08.290Z] Environment Variables Check:
[2026-01-18T20:27:08.290Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T20:27:08.290Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T20:27:08.290Z] 
Multi-Channel Configuration:
[2026-01-18T20:27:08.290Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.290Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.291Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.291Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.291Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T20:27:08.291Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T20:27:08.291Z] 
Data Files Check:
[2026-01-18T20:27:08.292Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104733 bytes)
[2026-01-18T20:27:08.303Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1472726 bytes)
[2026-01-18T20:27:08.303Z] 
========================================
[2026-01-18T20:27:08.303Z] Starting Enhanced Discord Bot...
[2026-01-18T20:27:08.303Z] ========================================
[2026-01-18T20:27:08.755Z] [BOT] ✅ Loaded V2 database: 2717 jobs
[2026-01-18T20:27:09.604Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T20:27:09.605Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T20:27:09.605Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T20:27:09.764Z] [BOT] ✅ Loaded pending queue: 2839 total (2819 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-18T20:27:09.768Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T20:27:09.768Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T20:27:09.769Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T20:27:09.769Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T20:27:09.769Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T20:27:09.774Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T20:27:09.774Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
[2026-01-18T20:27:09.774Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:27:09.778Z] [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T20:27:10.048Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-18T20:27:10.048Z] [BOT] ✅ Industry: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman
[2026-01-18T20:27:12.049Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman in #🦢・los-angeles
[2026-01-18T20:27:12.050Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-18T20:27:13.550Z] [BOT] 💾 Marked as posted: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman (instance #1)
[2026-01-18T20:27:13.551Z] [BOT] 💾 BEFORE ARCHIVING: 2718 jobs in database
[2026-01-18T20:27:13.553Z] [BOT] ✅ No jobs to archive (all 2718 jobs within 7-day window)
[2026-01-18T20:27:13.575Z] [BOT] 💾 Saved posted_jobs.json: 2718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:13.575Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
[2026-01-18T20:27:13.575Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:27:13.781Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-18T20:27:15.511Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:27:17.015Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies (instance #1)
💾 BEFORE ARCHIVING: 2719 jobs in database
[2026-01-18T20:27:17.016Z] [BOT] ✅ No jobs to archive (all 2719 jobs within 7-day window)
[2026-01-18T20:27:17.032Z] [BOT] 💾 Saved posted_jobs.json: 2719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:17.032Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant - ServiceNow" @ ORG_60d01372
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:27:17.239Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #💻・tech-jobs
[2026-01-18T20:27:17.240Z] [BOT] ✅ Industry: Associate Technical Consultant - ServiceNow @ ORG_60d01372
[2026-01-18T20:27:18.933Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:27:20.435Z] [BOT] 💾 Marked as posted: Associate Technical Consultant - ServiceNow @ ORG_60d01372 (instance #1)
[2026-01-18T20:27:20.435Z] [BOT] 💾 BEFORE ARCHIVING: 2720 jobs in database
[2026-01-18T20:27:20.438Z] [BOT] ✅ No jobs to archive (all 2720 jobs within 7-day window)
[2026-01-18T20:27:20.457Z] [BOT] 💾 Saved posted_jobs.json: 2720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:23.457Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-18T20:27:23.459Z] [BOT] 📍 [ROUTING] "AI/ML Engineer" @ ORG_e4e67255
[2026-01-18T20:27:23.459Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T20:27:23.870Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer @ ORG_e4e67255 in #🤖・ai-jobs
  ✅ Industry: AI/ML Engineer @ ORG_e4e67255
[2026-01-18T20:27:26.397Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer @ ORG_e4e67255 in #🦢・los-angeles
[2026-01-18T20:27:26.397Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-18T20:27:27.897Z] [BOT] 💾 Marked as posted: AI/ML Engineer @ ORG_e4e67255 (instance #1)
[2026-01-18T20:27:27.897Z] [BOT] 💾 BEFORE ARCHIVING: 2721 jobs in database
[2026-01-18T20:27:27.900Z] [BOT] ✅ No jobs to archive (all 2721 jobs within 7-day window)
[2026-01-18T20:27:27.920Z] [BOT] 💾 Saved posted_jobs.json: 2721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:27.921Z] [BOT] 📍 [ROUTING] "Research Analyst - Pnw" @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-18T20:27:27.921Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T20:27:28.286Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-18T20:27:30.022Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T20:27:31.523Z] [BOT] 💾 Marked as posted: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) (instance #1)
[2026-01-18T20:27:31.523Z] [BOT] 💾 BEFORE ARCHIVING: 2722 jobs in database
[2026-01-18T20:27:31.525Z] [BOT] ✅ No jobs to archive (all 2722 jobs within 7-day window)
[2026-01-18T20:27:31.542Z] [BOT] 💾 Saved posted_jobs.json: 2722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:31.543Z] [BOT] 📍 [ROUTING] "Program Manager, US K-12 Education" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-18T20:27:31.788Z] [BOT] ✅ Created forum post: 🏢 Program Manager, US K-12 Education @ anthropic in #🤖・ai-jobs
[2026-01-18T20:27:31.788Z] [BOT] ✅ Industry: Program Manager, US K-12 Education @ anthropic
[2026-01-18T20:27:33.469Z] [BOT ERROR] ❌ Error posting job Program Manager, US K-12 Education: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Program Manager, US K-12 Education @ anthropic',
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
[2026-01-18T20:27:33.469Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:27:34.969Z] [BOT] 💾 Marked as posted: Program Manager, US K-12 Education @ anthropic (instance #1)
[2026-01-18T20:27:34.970Z] [BOT] 💾 BEFORE ARCHIVING: 2723 jobs in database
[2026-01-18T20:27:34.972Z] [BOT] ✅ No jobs to archive (all 2723 jobs within 7-day window)
[2026-01-18T20:27:34.989Z] [BOT] 💾 Saved posted_jobs.json: 2723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:27:34.989Z] [BOT] 📍 [ROUTING] "Program Manager, Global Education" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-18T20:27:34.989Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-18T20:27:35.153Z] [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Program Manager, Global Education @ anthropic',
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
[2026-01-18T20:27:35.153Z] [BOT] ❌ Industry post failed: Program Manager, Global Education
⚠️  Channel full error count: 1/5
[2026-01-18T20:27:36.791Z] [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Program Manager, Global Education @ anthropic',
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
[2026-01-18T20:27:36.791Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:27:41.292Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T20:27:41.292Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T20:27:41.292Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:27:41.504Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T20:27:41.504Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 2/5
[2026-01-18T20:27:43.145Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T20:27:43.146Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:27:47.648Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T20:27:47.649Z] [BOT] 📍 [ROUTING] "Assoc Analyst Technology" @ ORG_4aef9434ine
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:27:47.901Z] [BOT ERROR] ❌ Error posting job Assoc Analyst Technology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Assoc Analyst Technology @ ORG_4aef9434ine',
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
[2026-01-18T20:27:47.902Z] [BOT] ❌ Industry post failed: Assoc Analyst Technology
⚠️  Channel full error count: 3/5
[2026-01-18T20:27:52.405Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T20:27:52.405Z] [BOT] 📍 [ROUTING] "Research Data Analyst 1" @ Children's Hospital of Philadelphia
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T20:27:52.405Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T20:27:52.573Z] [BOT ERROR] ❌ Error posting job Research Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 Research Data Analyst 1 @ Children's Hospital of Philadelphia",
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
[2026-01-18T20:27:52.573Z] [BOT] ❌ Industry post failed: Research Data Analyst 1
⚠️  Channel full error count: 4/5
[2026-01-18T20:27:54.198Z] [BOT ERROR] ❌ Error posting job Research Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 Research Data Analyst 1 @ Children's Hospital of Philadelphia",
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
[2026-01-18T20:27:54.198Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T20:27:58.699Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-18T20:27:58.699Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
[2026-01-18T20:27:58.700Z] [BOT] ⏭️  Skipping duplicate: JID_b1904fca-_r-48456 (posted within 7 days)
[2026-01-18T20:27:58.700Z] [BOT] ⏭️  Skipping duplicate: JID_60fbf9d1-engineer_r10000621 (posted within 7 days)
[2026-01-18T20:27:58.700Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
[2026-01-18T20:27:58.701Z] [BOT] ⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003905 (posted within 7 days)
[2026-01-18T20:27:58.701Z] [BOT] ⏭️  Skipping duplicate: JID_a5bdf9b7 (posted within 7 days)
[2026-01-18T20:27:58.879Z] [BOT] ✅ Loaded pending queue: 2839 total (2819 pending, 20 enriched, 0 posted)
[2026-01-18T20:27:59.043Z] [BOT] ✅ Saved pending queue: 2839 total (2819 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T20:27:59.108Z] [BOT] 📂 Loaded 4845 existing routing entries
[2026-01-18T20:27:59.176Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4855
   Timestamp: 2026-01-18T20:27:59.160Z
[2026-01-18T20:27:59.177Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
   Successful: 11
[2026-01-18T20:27:59.177Z] [BOT] Failed: 8
   Skipped: 0
[2026-01-18T20:27:59.177Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
[2026-01-18T20:27:59.177Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🦢・los-angeles: 2 posts
     4. #💻・remote-usa: 2 posts
[2026-01-18T20:27:59.177Z] [BOT] 5. #🌧️・seattle: 1 posts
[2026-01-18T20:27:59.178Z] [BOT] [STATS] Channel stats saved
[2026-01-18T20:28:01.198Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Program Manager, US K-12 Education: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Program Manager, Global Education
- [BOT ERROR] ❌ Error posting job Program Manager, Global Education: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Assoc Analyst Technology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Assoc Analyst Technology
- [BOT ERROR] ❌ Error posting job Research Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Data Analyst 1
- [BOT ERROR] ❌ Error posting job Research Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*