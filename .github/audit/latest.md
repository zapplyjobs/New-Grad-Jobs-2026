# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T04:27:31.583Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 4
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T04:26:43.711Z] ========================================
[2026-01-18T04:26:43.713Z] Discord Bot Execution Log
[2026-01-18T04:26:43.713Z] Environment: GitHub Actions
[2026-01-18T04:26:43.713Z] Node Version: v20.19.6
[2026-01-18T04:26:43.713Z] ========================================
[2026-01-18T04:26:43.713Z] Environment Variables Check:
[2026-01-18T04:26:43.713Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T04:26:43.713Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.713Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T04:26:43.714Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T04:26:43.714Z] 
Multi-Channel Configuration:
[2026-01-18T04:26:43.714Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T04:26:43.714Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T04:26:43.714Z] 
Data Files Check:
[2026-01-18T04:26:43.716Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149080 bytes)
[2026-01-18T04:26:43.725Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1378380 bytes)
[2026-01-18T04:26:43.725Z] 
========================================
[2026-01-18T04:26:43.725Z] Starting Enhanced Discord Bot...
[2026-01-18T04:26:43.726Z] ========================================
[2026-01-18T04:26:44.285Z] [BOT] ✅ Loaded V2 database: 2546 jobs
[2026-01-18T04:26:44.944Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T04:26:44.944Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T04:26:44.944Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T04:26:45.064Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Sales Executive  at datadog
[2026-01-18T04:26:45.067Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T04:26:45.068Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T04:26:45.068Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T04:26:45.069Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-18T04:26:45.069Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Marketing Operations Manager, Product-Led Growth @ brex: san francisco, california, united states, new york, new york, united states
   - Senior Marketing Operations Manager, B2B Sales @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-18T04:26:45.069Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T04:26:45.073Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-18T04:26:45.074Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive " @ datadog
[2026-01-18T04:26:45.074Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T04:26:45.078Z] [BOT ERROR] (node:2766) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T04:26:45.191Z] [BOT ERROR] ❌ Error posting job Enterprise Sales Executive : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Sales Executive  @ datadog',
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
[2026-01-18T04:26:45.191Z] [BOT] ❌ Industry post failed: Enterprise Sales Executive 
⚠️  Channel full error count: 1/5
[2026-01-18T04:26:47.027Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T04:26:48.528Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive  @ datadog (instance #1)
[2026-01-18T04:26:48.528Z] [BOT] 💾 BEFORE ARCHIVING: 2547 jobs in database
[2026-01-18T04:26:48.530Z] [BOT] ✅ No jobs to archive (all 2547 jobs within 7-day window)
[2026-01-18T04:26:48.554Z] [BOT] 💾 Saved posted_jobs.json: 2547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:26:48.554Z] [BOT] 📍 [ROUTING] "Head of Protective Services" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T04:26:48.554Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T04:26:48.761Z] [BOT] ✅ Created forum post: 🏢 Head of Protective Services @ anthropic in #💲・sales-jobs
[2026-01-18T04:26:48.761Z] [BOT] ✅ Industry: Head of Protective Services @ anthropic
[2026-01-18T04:26:50.544Z] [BOT] ✅ Created forum post: 🏢 Head of Protective Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:26:52.045Z] [BOT] 💾 Marked as posted: Head of Protective Services @ anthropic (instance #1)
[2026-01-18T04:26:52.045Z] [BOT] 💾 BEFORE ARCHIVING: 2548 jobs in database
[2026-01-18T04:26:52.046Z] [BOT] ✅ No jobs to archive (all 2548 jobs within 7-day window)
[2026-01-18T04:26:52.062Z] [BOT] 💾 Saved posted_jobs.json: 2548 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:26:52.062Z] [BOT] 📍 [ROUTING] "Senior Associate, Sales Enablement Operations" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T04:26:52.565Z] [BOT] ✅ Created forum post: 🏢 Senior Associate, Sales Enablement Operations @ datadog in #💲・sales-jobs
  ✅ Industry: Senior Associate, Sales Enablement Operations @ datadog
[2026-01-18T04:26:55.640Z] [BOT] ✅ Created forum post: 🏢 Senior Associate, Sales Enablement Operations @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T04:26:57.142Z] [BOT] 💾 Marked as posted: Senior Associate, Sales Enablement Operations @ datadog (instance #1)
[2026-01-18T04:26:57.142Z] [BOT] 💾 BEFORE ARCHIVING: 2549 jobs in database
[2026-01-18T04:26:57.144Z] [BOT] ✅ No jobs to archive (all 2549 jobs within 7-day window)
[2026-01-18T04:26:57.162Z] [BOT] 💾 Saved posted_jobs.json: 2549 active jobs
[2026-01-18T04:26:57.162Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:26:57.162Z] [BOT] 📍 [ROUTING] "Senior Marketing Operations Manager, Product-Led Growth" @ brex
[2026-01-18T04:26:57.162Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T04:26:57.386Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Operations Manager, Product-Led Growth @ brex in #💲・sales-jobs
  ✅ Industry: Senior Marketing Operations Manager, Product-Led Growth @ brex
[2026-01-18T04:26:59.059Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Operations Manager, Product-Led Growth @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:27:00.561Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, Product-Led Growth @ brex (instance #1)
[2026-01-18T04:27:00.561Z] [BOT] 💾 BEFORE ARCHIVING: 2550 jobs in database
[2026-01-18T04:27:00.563Z] [BOT] ✅ No jobs to archive (all 2550 jobs within 7-day window)
[2026-01-18T04:27:00.579Z] [BOT] 💾 Saved posted_jobs.json: 2550 active jobs
[2026-01-18T04:27:00.579Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:00.579Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, Product-Led Growth @ brex (instance #1)
[2026-01-18T04:27:00.579Z] [BOT] 💾 BEFORE ARCHIVING: 2551 jobs in database
[2026-01-18T04:27:00.581Z] [BOT] ✅ No jobs to archive (all 2551 jobs within 7-day window)
[2026-01-18T04:27:00.595Z] [BOT] 💾 Saved posted_jobs.json: 2551 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:00.595Z] [BOT] 📍 [ROUTING] "Senior Marketing Operations Manager, B2B Sales" @ brex
[2026-01-18T04:27:00.595Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T04:27:00.829Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Operations Manager, B2B Sales @ brex in #💲・sales-jobs
  ✅ Industry: Senior Marketing Operations Manager, B2B Sales @ brex
[2026-01-18T04:27:02.505Z] [BOT] ✅ Created forum post: 🏢 Senior Marketing Operations Manager, B2B Sales @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:27:04.007Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, B2B Sales @ brex (instance #1)
[2026-01-18T04:27:04.007Z] [BOT] 💾 BEFORE ARCHIVING: 2552 jobs in database
[2026-01-18T04:27:04.009Z] [BOT] ✅ No jobs to archive (all 2552 jobs within 7-day window)
[2026-01-18T04:27:04.024Z] [BOT] 💾 Saved posted_jobs.json: 2552 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:04.024Z] [BOT] 💾 Marked as posted: Senior Marketing Operations Manager, B2B Sales @ brex (instance #1)
💾 BEFORE ARCHIVING: 2553 jobs in database
[2026-01-18T04:27:04.026Z] [BOT] ✅ No jobs to archive (all 2553 jobs within 7-day window)
[2026-01-18T04:27:04.041Z] [BOT] 💾 Saved posted_jobs.json: 2553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:07.042Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-18T04:27:07.043Z] [BOT] 📍 [ROUTING] "AI Machine Learning Engineer 2" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
[2026-01-18T04:27:07.043Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T04:27:07.248Z] [BOT] ✅ Created forum post: 🏢 AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-18T04:27:07.248Z] [BOT] ✅ Industry: AI Machine Learning Engineer 2 @ ORG_aa669b28
[2026-01-18T04:27:08.920Z] [BOT] ✅ Created forum post: 🏢 AI Machine Learning Engineer 2 @ ORG_aa669b28 in #🌉・san-francisco
[2026-01-18T04:27:08.920Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T04:27:10.421Z] [BOT] 💾 Marked as posted: AI Machine Learning Engineer 2 @ ORG_aa669b28 (instance #1)
[2026-01-18T04:27:10.421Z] [BOT] 💾 BEFORE ARCHIVING: 2554 jobs in database
[2026-01-18T04:27:10.423Z] [BOT] ✅ No jobs to archive (all 2554 jobs within 7-day window)
[2026-01-18T04:27:10.441Z] [BOT] 💾 Saved posted_jobs.json: 2554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:10.441Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a725bda1
[2026-01-18T04:27:10.441Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:27:10.702Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #🤖・ai-jobs
[2026-01-18T04:27:10.703Z] [BOT] ✅ Industry: Software Engineer @ ORG_a725bda1
[2026-01-18T04:27:12.445Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #🤠・austin
[2026-01-18T04:27:12.445Z] [BOT] ✅ Location: 🤠・austin
[2026-01-18T04:27:13.947Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a725bda1 (instance #1)
[2026-01-18T04:27:13.947Z] [BOT] 💾 BEFORE ARCHIVING: 2555 jobs in database
[2026-01-18T04:27:13.948Z] [BOT] ✅ No jobs to archive (all 2555 jobs within 7-day window)
[2026-01-18T04:27:13.965Z] [BOT] 💾 Saved posted_jobs.json: 2555 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:13.965Z] [BOT] 📍 [ROUTING] "Software Engineer  New College Grad - New College Grad" @ ORG_a725bda1
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T04:27:13.965Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:27:14.281Z] [BOT] ✅ Created forum post: 🏢 Software Engineer  New College Grad - New College Grad @ ORG_a725bda1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer  New College Grad - New College Grad @ ORG_a725bda1
[2026-01-18T04:27:15.957Z] [BOT] ✅ Created forum post: 🏢 Software Engineer  New College Grad - New College Grad @ ORG_a725bda1 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T04:27:17.459Z] [BOT] 💾 Marked as posted: Software Engineer  New College Grad - New College Grad @ ORG_a725bda1 (instance #1)
[2026-01-18T04:27:17.459Z] [BOT] 💾 BEFORE ARCHIVING: 2556 jobs in database
[2026-01-18T04:27:17.460Z] [BOT] ✅ No jobs to archive (all 2556 jobs within 7-day window)
[2026-01-18T04:27:17.476Z] [BOT] 💾 Saved posted_jobs.json: 2556 active jobs
[2026-01-18T04:27:17.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:27:17.477Z] [BOT] 📍 [ROUTING] "Software Engineer, Web Platform" @ figma
[2026-01-18T04:27:17.477Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:27:17.590Z] [BOT ERROR] ❌ Error posting job Software Engineer, Web Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Web Platform @ figma',
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
[2026-01-18T04:27:17.590Z] [BOT] ❌ Industry post failed: Software Engineer, Web Platform
⚠️  Channel full error count: 1/5
[2026-01-18T04:27:19.199Z] [BOT ERROR] ❌ Error posting job Software Engineer, Web Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Web Platform @ figma',
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
[2026-01-18T04:27:19.199Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T04:27:23.700Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-18T04:27:23.700Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 3 - Denver" @ datadog
[2026-01-18T04:27:23.701Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:27:23.834Z] [BOT ERROR] ❌ Error posting job Federal Support Engineer 3 - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Federal Support Engineer 3 - Denver @ datadog',
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
[2026-01-18T04:27:23.834Z] [BOT] ❌ Industry post failed: Federal Support Engineer 3 - Denver
⚠️  Channel full error count: 2/5
[2026-01-18T04:27:28.337Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-18T04:27:28.338Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-18T04:27:28.339Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️  Skipping duplicate: JID_d32e72ab (posted within 7 days)
⏭️  Skipping duplicate: JID_17b0c145 (posted within 7 days)
[2026-01-18T04:27:28.339Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-18T04:27:28.339Z] [BOT] ⏭️  Skipping duplicate: JID_cf67353e (posted within 7 days)
[2026-01-18T04:27:28.339Z] [BOT] ⏭️  Skipping duplicate: JID_3f6fe43a (posted within 7 days)
[2026-01-18T04:27:28.339Z] [BOT] ⏭️  Skipping duplicate: JID_c5844755 (posted within 7 days)
[2026-01-18T04:27:28.459Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[2026-01-18T04:27:28.652Z] [BOT] ✅ Saved pending queue: 2865 total (2845 pending, 12 enriched, 8 posted)
[2026-01-18T04:27:28.652Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T04:27:28.710Z] [BOT] 📂 Loaded 4715 existing routing entries
[2026-01-18T04:27:28.779Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4725
   Timestamp: 2026-01-18T04:27:28.760Z
[2026-01-18T04:27:28.780Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T04:27:28.780Z] [BOT] Total attempts: 19
   Successful: 15
   Failed: 4
   Skipped: 0
[2026-01-18T04:27:28.781Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-18T04:27:30.806Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2766) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Enterprise Sales Executive : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Sales Executive
- [BOT ERROR] ❌ Error posting job Software Engineer, Web Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, Web Platform
- [BOT ERROR] ❌ Error posting job Software Engineer, Web Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Federal Support Engineer 3 - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Federal Support Engineer 3 - Denver
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*