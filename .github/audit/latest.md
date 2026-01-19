# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T02:20:46.192Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T02:19:56.432Z] ========================================
[2026-01-19T02:19:56.434Z] Discord Bot Execution Log
[2026-01-19T02:19:56.434Z] Environment: GitHub Actions
[2026-01-19T02:19:56.434Z] Node Version: v20.19.6
[2026-01-19T02:19:56.434Z] ========================================
[2026-01-19T02:19:56.434Z] Environment Variables Check:
[2026-01-19T02:19:56.435Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T02:19:56.435Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.435Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T02:19:56.435Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T02:19:56.435Z] 
Multi-Channel Configuration:
[2026-01-19T02:19:56.435Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.435Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.435Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.435Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T02:19:56.436Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T02:19:56.436Z] 
Data Files Check:
[2026-01-19T02:19:56.437Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153650 bytes)
[2026-01-19T02:19:56.447Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1540519 bytes)
[2026-01-19T02:19:56.447Z] 
========================================
[2026-01-19T02:19:56.447Z] Starting Enhanced Discord Bot...
[2026-01-19T02:19:56.447Z] ========================================
[2026-01-19T02:19:56.986Z] [BOT] ✅ Loaded V2 database: 2836 jobs
[2026-01-19T02:19:57.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T02:19:57.694Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T02:19:57.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T02:19:57.813Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineering Manager at discord
[2026-01-19T02:19:57.818Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T02:19:57.819Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T02:19:57.819Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T02:19:57.820Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-19T02:19:57.820Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Manager, Mid-Market Sales (Client Account Executives) @ reddit: new york, san francisco
   - Engineering Manager, GTM Engineering  @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Engineering Manager, Salesforce @ brex: new york, new york, united states, san francisco, california, united states
[2026-01-19T02:19:57.820Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T02:19:57.824Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-19T02:19:57.825Z] [BOT] 📍 [ROUTING] "Data Engineering Manager" @ discord
[2026-01-19T02:19:57.825Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T02:19:57.829Z] [BOT ERROR] (node:2955) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T02:19:57.942Z] [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T02:19:57.942Z] [BOT] ❌ Industry post failed: Data Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-19T02:19:59.444Z] [BOT] 📍 [ROUTING] "Data Operations, Product Partnerships" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-19T02:19:59.445Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T02:19:59.675Z] [BOT] ✅ Created forum post: 🏢 Data Operations, Product Partnerships @ anthropic in #🤖・ai-jobs
[2026-01-19T02:19:59.675Z] [BOT] ✅ Industry: Data Operations, Product Partnerships @ anthropic
[2026-01-19T02:20:01.440Z] [BOT] ✅ Created forum post: 🏢 Data Operations, Product Partnerships @ anthropic in #🌉・san-francisco
[2026-01-19T02:20:01.441Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T02:20:02.941Z] [BOT] 💾 Marked as posted: Data Operations, Product Partnerships @ anthropic (instance #1)
[2026-01-19T02:20:02.942Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-19T02:20:02.944Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T02:20:02.949Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-19T02:20:02.949Z] [BOT] ✅ Archiving complete: 6 archived, 2831 active
[2026-01-19T02:20:02.967Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:02.968Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Mid-Market (Goods - Shopping)" @ reddit
[2026-01-19T02:20:02.968Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T02:20:02.968Z] [BOT] ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-19T02:20:03.279Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Mid-Market (Goods - Shopping) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Mid-Market (Goods - Shopping) @ reddit
[2026-01-19T02:20:05.070Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Mid-Market (Goods - Shopping) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T02:20:06.572Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Mid-Market (Goods - Shopping) @ reddit (instance #1)
[2026-01-19T02:20:06.573Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-19T02:20:06.575Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-19T02:20:06.595Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:06.596Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales (Client Account Executives)" @ reddit
[2026-01-19T02:20:06.596Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T02:20:06.797Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales (Client Account Executives) @ reddit in #🤖・ai-jobs
  ✅ Industry: Manager, Mid-Market Sales (Client Account Executives) @ reddit
[2026-01-19T02:20:08.481Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales (Client Account Executives) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T02:20:09.981Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales (Client Account Executives) @ reddit (instance #1)
[2026-01-19T02:20:09.982Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-19T02:20:09.984Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-19T02:20:10.003Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:10.004Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales (Client Account Executives) @ reddit (instance #1)
[2026-01-19T02:20:10.004Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-19T02:20:10.006Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-19T02:20:10.025Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:13.025Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-19T02:20:13.026Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Spanish-speaking)" @ datadog
[2026-01-19T02:20:13.026Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T02:20:13.303Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Spanish-speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Associate - Boston (Spanish-speaking) @ datadog
[2026-01-19T02:20:15.018Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Spanish-speaking) @ datadog in #🚌・boston
[2026-01-19T02:20:15.018Z] [BOT] ✅ Location: 🚌・boston
[2026-01-19T02:20:16.520Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston (Spanish-speaking) @ datadog (instance #1)
[2026-01-19T02:20:16.520Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-19T02:20:16.522Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-19T02:20:16.538Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:16.538Z] [BOT] 📍 [ROUTING] "Manager Account Development - Atlanta" @ samsara
[2026-01-19T02:20:16.538Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T02:20:16.754Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development - Atlanta @ samsara in #💲・sales-jobs
[2026-01-19T02:20:16.754Z] [BOT] ✅ Industry: Manager Account Development - Atlanta @ samsara
[2026-01-19T02:20:18.471Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development - Atlanta @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T02:20:19.973Z] [BOT] 💾 Marked as posted: Manager Account Development - Atlanta @ samsara (instance #1)
[2026-01-19T02:20:19.973Z] [BOT] 💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-19T02:20:19.975Z] [BOT] ✅ No jobs to archive (all 2836 jobs within 7-day window)
[2026-01-19T02:20:19.996Z] [BOT] 💾 Saved posted_jobs.json: 2836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:19.996Z] [BOT] 📍 [ROUTING] "Manager Account Development, Relocation to Atlanta" @ samsara
[2026-01-19T02:20:19.996Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T02:20:20.154Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development, Relocation to Atlanta @ samsara in #💲・sales-jobs
[2026-01-19T02:20:20.154Z] [BOT] ✅ Industry: Manager Account Development, Relocation to Atlanta @ samsara
[2026-01-19T02:20:22.105Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development, Relocation to Atlanta @ samsara in #💻・remote-usa
[2026-01-19T02:20:22.105Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T02:20:23.607Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-19T02:20:23.607Z] [BOT] 💾 BEFORE ARCHIVING: 2837 jobs in database
[2026-01-19T02:20:23.609Z] [BOT] ✅ No jobs to archive (all 2837 jobs within 7-day window)
[2026-01-19T02:20:23.627Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:26.627Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T02:20:26.627Z] [BOT] 📍 [ROUTING] "Data Engineer" @ brex
[2026-01-19T02:20:26.627Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T02:20:26.829Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ brex in #📈・JID_fb739488
[2026-01-19T02:20:26.829Z] [BOT] ✅ Industry: Data Engineer @ brex
[2026-01-19T02:20:28.600Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ brex in #🌉・san-francisco
[2026-01-19T02:20:28.600Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T02:20:30.101Z] [BOT] 💾 Marked as posted: Data Engineer @ brex (instance #1)
[2026-01-19T02:20:30.102Z] [BOT] 💾 BEFORE ARCHIVING: 2838 jobs in database
[2026-01-19T02:20:30.103Z] [BOT] ✅ No jobs to archive (all 2838 jobs within 7-day window)
[2026-01-19T02:20:30.125Z] [BOT] 💾 Saved posted_jobs.json: 2838 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:33.126Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T02:20:33.126Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T02:20:33.350Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-19T02:20:35.014Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T02:20:36.514Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-19T02:20:36.515Z] [BOT] 💾 BEFORE ARCHIVING: 2839 jobs in database
[2026-01-19T02:20:36.517Z] [BOT] ✅ No jobs to archive (all 2839 jobs within 7-day window)
[2026-01-19T02:20:36.535Z] [BOT] 💾 Saved posted_jobs.json: 2839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:36.536Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
[2026-01-19T02:20:36.536Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T02:20:36.852Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2026-01-19T02:20:38.483Z] [BOT ERROR] ❌ Error posting job Software Development Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🎨 Software Development Engineer @ Adobe',
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
[2026-01-19T02:20:38.484Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T02:20:39.984Z] [BOT] 💾 Marked as posted: Software Development Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-19T02:20:39.984Z] [BOT] 💾 BEFORE ARCHIVING: 2840 jobs in database
[2026-01-19T02:20:39.986Z] [BOT] ✅ No jobs to archive (all 2840 jobs within 7-day window)
[2026-01-19T02:20:40.003Z] [BOT] 💾 Saved posted_jobs.json: 2840 active jobs
[2026-01-19T02:20:40.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T02:20:43.003Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T02:20:43.004Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_3e1cc36b (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_ce1a26c5 (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_5412908e (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
[2026-01-19T02:20:43.005Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_44eaaa07-engineer_r161061 (posted within 7 days)
[2026-01-19T02:20:43.135Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[2026-01-19T02:20:43.317Z] [BOT] ✅ Saved pending queue: 2834 total (2814 pending, 11 enriched, 9 posted)
[2026-01-19T02:20:43.317Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T02:20:43.378Z] [BOT] 📂 Loaded 4975 existing routing entries
[2026-01-19T02:20:43.450Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4985
[2026-01-19T02:20:43.450Z] [BOT] Timestamp: 2026-01-19T02:20:43.429Z
[2026-01-19T02:20:43.450Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T02:20:43.450Z] [BOT] Total attempts: 19
   Successful: 17
   Failed: 2
   Skipped: 0
[2026-01-19T02:20:43.451Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
[2026-01-19T02:20:43.451Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #💲・sales-jobs: 3 posts
[2026-01-19T02:20:43.451Z] [BOT] 3. #💻・remote-usa: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🗽・new-york: 2 posts
[2026-01-19T02:20:43.451Z] [BOT] [STATS] Channel stats saved
[2026-01-19T02:20:45.476Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2955) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineering Manager
- [BOT ERROR] ❌ Error posting job Software Development Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*