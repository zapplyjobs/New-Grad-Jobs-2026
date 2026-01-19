# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T00:19:43.377Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T00:18:52.899Z] ========================================
[2026-01-19T00:18:52.901Z] Discord Bot Execution Log
[2026-01-19T00:18:52.901Z] Environment: GitHub Actions
[2026-01-19T00:18:52.901Z] Node Version: v20.19.6
[2026-01-19T00:18:52.901Z] ========================================
[2026-01-19T00:18:52.902Z] Environment Variables Check:
[2026-01-19T00:18:52.902Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T00:18:52.902Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.902Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T00:18:52.902Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T00:18:52.902Z] 
Multi-Channel Configuration:
[2026-01-19T00:18:52.902Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.902Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.902Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.902Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T00:18:52.903Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T00:18:52.903Z] 
Data Files Check:
[2026-01-19T00:18:52.904Z] .github/data/new_jobs.json: ✅ Exists (10 items, 134707 bytes)
[2026-01-19T00:18:52.914Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1523900 bytes)
[2026-01-19T00:18:52.914Z] 
========================================
[2026-01-19T00:18:52.914Z] Starting Enhanced Discord Bot...
[2026-01-19T00:18:52.914Z] ========================================
[2026-01-19T00:18:53.440Z] [BOT] ✅ Loaded V2 database: 2805 jobs
[2026-01-19T00:18:54.186Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T00:18:54.186Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T00:18:54.187Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T00:18:54.321Z] [BOT] ✅ Loaded pending queue: 2826 total (2806 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Area Vice President, Enterprise Security Sales at datadog
[2026-01-19T00:18:54.325Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T00:18:54.326Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T00:18:54.326Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T00:18:54.327Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-19T00:18:54.327Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Manager, Customer Success @ brex: seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T00:18:54.332Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T00:18:54.332Z] [BOT] 📍 [ROUTING] "Area Vice President, Enterprise Security Sales" @ datadog
[2026-01-19T00:18:54.333Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T00:18:54.337Z] [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T00:18:54.505Z] [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Area Vice President, Enterprise Security Sales @ datadog',
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
[2026-01-19T00:18:54.506Z] [BOT] ❌ Industry post failed: Area Vice President, Enterprise Security Sales
⚠️  Channel full error count: 1/5
[2026-01-19T00:18:56.372Z] [BOT] ✅ Created forum post: 🏢 Area Vice President, Enterprise Security Sales @ datadog in #🌉・san-francisco
[2026-01-19T00:18:56.373Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T00:18:57.874Z] [BOT] 💾 Marked as posted: Area Vice President, Enterprise Security Sales @ datadog (instance #1)
[2026-01-19T00:18:57.874Z] [BOT] 💾 BEFORE ARCHIVING: 2806 jobs in database
[2026-01-19T00:18:57.876Z] [BOT] ✅ No jobs to archive (all 2806 jobs within 7-day window)
[2026-01-19T00:18:57.899Z] [BOT] 💾 Saved posted_jobs.json: 2806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:18:57.899Z] [BOT] 📍 [ROUTING] "IT Services Academy Program - Software Analyst" @ ORG_d5ef9966 Family
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T00:18:58.298Z] [BOT] ✅ Created forum post: 🏢 IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family in #💻・tech-jobs
[2026-01-19T00:18:58.298Z] [BOT] ✅ Industry: IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family
[2026-01-19T00:19:00.039Z] [BOT] ✅ Created forum post: 🏢 IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family in #💻・remote-usa
[2026-01-19T00:19:00.040Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T00:19:01.540Z] [BOT] 💾 Marked as posted: IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family (instance #1)
[2026-01-19T00:19:01.540Z] [BOT] 💾 BEFORE ARCHIVING: 2807 jobs in database
[2026-01-19T00:19:01.542Z] [BOT] ✅ No jobs to archive (all 2807 jobs within 7-day window)
[2026-01-19T00:19:01.559Z] [BOT] 💾 Saved posted_jobs.json: 2807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:01.559Z] [BOT] 📍 [ROUTING] "Software Developer - Emerging Career - Java / Spring Boot" @ ORG_a9d35ae9
   Category: TECH (matched: "software")
[2026-01-19T00:19:01.559Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T00:19:01.966Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Emerging Career - Java / Spring Boot @ ORG_a9d35ae9 in #💻・tech-jobs
  ✅ Industry: Software Developer - Emerging Career - Java / Spring Boot @ ORG_a9d35ae9
[2026-01-19T00:19:03.679Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Emerging Career - Java / Spring Boot @ ORG_a9d35ae9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T00:19:05.180Z] [BOT] 💾 Marked as posted: Software Developer - Emerging Career - Java / Spring Boot @ ORG_a9d35ae9 (instance #1)
[2026-01-19T00:19:05.180Z] [BOT] 💾 BEFORE ARCHIVING: 2808 jobs in database
[2026-01-19T00:19:05.182Z] [BOT] ✅ No jobs to archive (all 2808 jobs within 7-day window)
[2026-01-19T00:19:05.201Z] [BOT] 💾 Saved posted_jobs.json: 2808 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:08.202Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T00:19:08.202Z] [BOT] 📍 [ROUTING] "Statistical Data Analyst - Surgery" @ ORG_f5f75c9b U
[2026-01-19T00:19:08.203Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T00:19:08.484Z] [BOT] ✅ Created forum post: 🏢 Statistical Data Analyst - Surgery @ ORG_f5f75c9b U in #📈・JID_fb739488
[2026-01-19T00:19:08.484Z] [BOT] ✅ Industry: Statistical Data Analyst - Surgery @ ORG_f5f75c9b U
[2026-01-19T00:19:10.166Z] [BOT] ✅ Created forum post: 🏢 Statistical Data Analyst - Surgery @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T00:19:11.667Z] [BOT] 💾 Marked as posted: Statistical Data Analyst - Surgery @ ORG_f5f75c9b U (instance #1)
[2026-01-19T00:19:11.668Z] [BOT] 💾 BEFORE ARCHIVING: 2809 jobs in database
[2026-01-19T00:19:11.670Z] [BOT] ✅ No jobs to archive (all 2809 jobs within 7-day window)
[2026-01-19T00:19:11.690Z] [BOT] 💾 Saved posted_jobs.json: 2809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:14.691Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-19T00:19:14.691Z] [BOT] 📍 [ROUTING] "Finance Systems, Finance & Strategy Lead" @ anthropic
[2026-01-19T00:19:14.691Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T00:19:14.901Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy Lead @ anthropic in #💲・sales-jobs
[2026-01-19T00:19:14.901Z] [BOT] ✅ Industry: Finance Systems, Finance & Strategy Lead @ anthropic
[2026-01-19T00:19:16.645Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy Lead @ anthropic in #🌉・san-francisco
[2026-01-19T00:19:16.645Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T00:19:18.145Z] [BOT] 💾 Marked as posted: Finance Systems, Finance & Strategy Lead @ anthropic (instance #1)
[2026-01-19T00:19:18.146Z] [BOT] 💾 BEFORE ARCHIVING: 2810 jobs in database
[2026-01-19T00:19:18.147Z] [BOT] ✅ No jobs to archive (all 2810 jobs within 7-day window)
[2026-01-19T00:19:18.165Z] [BOT] 💾 Saved posted_jobs.json: 2810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:18.165Z] [BOT] 📍 [ROUTING] "Product Marketing Lead, Agents" @ anthropic
[2026-01-19T00:19:18.165Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T00:19:18.356Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #💲・sales-jobs
[2026-01-19T00:19:18.356Z] [BOT] ✅ Industry: Product Marketing Lead, Agents @ anthropic
[2026-01-19T00:19:20.186Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #🌉・san-francisco
[2026-01-19T00:19:20.186Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T00:19:21.688Z] [BOT] 💾 Marked as posted: Product Marketing Lead, Agents @ anthropic (instance #1)
[2026-01-19T00:19:21.688Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-19T00:19:21.690Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-19T00:19:21.706Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:21.706Z] [BOT] 📍 [ROUTING] "Manager, Customer Success" @ brex
[2026-01-19T00:19:21.706Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T00:19:21.935Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ brex in #💲・sales-jobs
[2026-01-19T00:19:21.935Z] [BOT] ✅ Industry: Manager, Customer Success @ brex
[2026-01-19T00:19:23.688Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ brex in #🌧️・seattle
[2026-01-19T00:19:23.688Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-19T00:19:25.189Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-19T00:19:25.190Z] [BOT] 💾 BEFORE ARCHIVING: 2812 jobs in database
[2026-01-19T00:19:25.191Z] [BOT] ✅ No jobs to archive (all 2812 jobs within 7-day window)
[2026-01-19T00:19:25.209Z] [BOT] 💾 Saved posted_jobs.json: 2812 active jobs
[2026-01-19T00:19:25.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:25.209Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-19T00:19:25.209Z] [BOT] 💾 BEFORE ARCHIVING: 2813 jobs in database
[2026-01-19T00:19:25.211Z] [BOT] ✅ No jobs to archive (all 2813 jobs within 7-day window)
[2026-01-19T00:19:25.227Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:25.227Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-19T00:19:25.227Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-19T00:19:25.229Z] [BOT] ✅ No jobs to archive (all 2814 jobs within 7-day window)
[2026-01-19T00:19:25.243Z] [BOT] 💾 Saved posted_jobs.json: 2814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:25.244Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-19T00:19:25.244Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-19T00:19:25.245Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-19T00:19:25.260Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
[2026-01-19T00:19:25.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:25.261Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-19T00:19:25.262Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-19T00:19:25.278Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
[2026-01-19T00:19:25.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:25.278Z] [BOT] 📍 [ROUTING] "Sales Development Representative (LATAM - Spanish Speaking)" @ datadog
[2026-01-19T00:19:25.278Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T00:19:25.554Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (LATAM - Spanish Speaking) @ datadog in #💲・sales-jobs
[2026-01-19T00:19:25.554Z] [BOT] ✅ Industry: Sales Development Representative (LATAM - Spanish Speaking) @ datadog
[2026-01-19T00:19:27.194Z] [BOT ERROR] ❌ Error posting job Sales Development Representative (LATAM - Spanish Speaking): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sales Development Representative (LATAM - Spanish Speaking) @ datadog',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-19T00:19:27.195Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-19T00:19:28.695Z] [BOT] 💾 Marked as posted: Sales Development Representative (LATAM - Spanish Speaking) @ datadog (instance #1)
[2026-01-19T00:19:28.695Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-19T00:19:28.697Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-19T00:19:28.712Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:19:31.712Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T00:19:31.712Z] [BOT] 📍 [ROUTING] "Data Engineering Manager" @ discord
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T00:19:31.911Z] [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineering Manager @ discord',
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
[2026-01-19T00:19:31.911Z] [BOT] ❌ Industry post failed: Data Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-19T00:19:33.413Z] [BOT] 📍 [ROUTING] "Software Engineer, Observability" @ airtable
[2026-01-19T00:19:33.413Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T00:19:33.557Z] [BOT ERROR] ❌ Error posting job Software Engineer, Observability: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Observability @ airtable',
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
[2026-01-19T00:19:33.557Z] [BOT] ❌ Industry post failed: Software Engineer, Observability
⚠️  Channel full error count: 2/5
[2026-01-19T00:19:35.240Z] [BOT ERROR] ❌ Error posting job Software Engineer, Observability: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Observability @ airtable',
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
[2026-01-19T00:19:35.241Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T00:19:39.742Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2026-01-19T00:19:39.743Z] [BOT] ⏭️  Skipping duplicate: JID_8df93fb6 (posted within 7 days)
[2026-01-19T00:19:39.743Z] [BOT] ⏭️  Skipping duplicate: JID_0fa63293-jmfamily_external-JID_295ddac3-analyst_jr104494 (posted within 7 days)
[2026-01-19T00:19:39.743Z] [BOT] ⏭️  Skipping duplicate: JID_97bdf599 (posted within 7 days)
[2026-01-19T00:19:39.744Z] [BOT] ⏭️  Skipping duplicate: JID_afcbb02c-surgery_jr92156 (posted within 7 days)
[2026-01-19T00:19:39.744Z] [BOT] ⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
[2026-01-19T00:19:39.744Z] [BOT] ⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
[2026-01-19T00:19:39.744Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
[2026-01-19T00:19:39.744Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
[2026-01-19T00:19:39.872Z] [BOT] ✅ Loaded pending queue: 2826 total (2806 pending, 20 enriched, 0 posted)
[2026-01-19T00:19:40.044Z] [BOT] ✅ Saved pending queue: 2826 total (2806 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-19T00:19:40.044Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T00:19:40.103Z] [BOT] 📂 Loaded 4945 existing routing entries
[2026-01-19T00:19:40.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T00:19:40.174Z] [BOT] Total entries: 4955
   Timestamp: 2026-01-19T00:19:40.153Z
[2026-01-19T00:19:40.174Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T00:19:40.174Z] [BOT] Total attempts: 19
   Successful: 14
   Failed: 5
   Skipped: 0
[2026-01-19T00:19:40.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T00:19:40.175Z] [BOT] Total posts: 14
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 4 posts
[2026-01-19T00:19:40.175Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #💻・remote-usa: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-19T00:19:40.175Z] [BOT] [STATS] Channel stats saved
[2026-01-19T00:19:42.201Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2613) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Area Vice President, Enterprise Security Sales: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Area Vice President, Enterprise Security Sales
- [BOT ERROR] ❌ Error posting job Sales Development Representative (LATAM - Spanish Speaking): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineering Manager
- [BOT ERROR] ❌ Error posting job Software Engineer, Observability: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, Observability
- [BOT ERROR] ❌ Error posting job Software Engineer, Observability: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*