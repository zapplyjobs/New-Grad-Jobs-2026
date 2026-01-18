# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T09:08:16.076Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T09:07:17.810Z] ========================================
[2026-01-18T09:07:17.811Z] Discord Bot Execution Log
[2026-01-18T09:07:17.812Z] Environment: GitHub Actions
[2026-01-18T09:07:17.812Z] Node Version: v20.19.6
[2026-01-18T09:07:17.812Z] ========================================
[2026-01-18T09:07:17.812Z] Environment Variables Check:
[2026-01-18T09:07:17.812Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T09:07:17.812Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.812Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T09:07:17.812Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T09:07:17.812Z] 
Multi-Channel Configuration:
[2026-01-18T09:07:17.812Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.812Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T09:07:17.813Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T09:07:17.813Z] 
Data Files Check:
[2026-01-18T09:07:17.814Z] .github/data/new_jobs.json: ✅ Exists (10 items, 71620 bytes)
[2026-01-18T09:07:17.824Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1448082 bytes)
[2026-01-18T09:07:17.824Z] 
========================================
[2026-01-18T09:07:17.824Z] Starting Enhanced Discord Bot...
[2026-01-18T09:07:17.824Z] ========================================
[2026-01-18T09:07:18.350Z] [BOT] ✅ Loaded V2 database: 2672 jobs
[2026-01-18T09:07:18.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T09:07:18.838Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T09:07:18.838Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T09:07:18.956Z] [BOT] ✅ Loaded pending queue: 2844 total (2824 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Sourcing Manager at discord
[2026-01-18T09:07:18.960Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T09:07:18.961Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T09:07:18.961Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T09:07:18.962Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T09:07:18.962Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T09:07:18.967Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T09:07:18.968Z] [BOT] 📍 [ROUTING] "Strategic Sourcing Manager" @ discord
[2026-01-18T09:07:18.968Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T09:07:18.972Z] [BOT ERROR] (node:2699) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T09:07:19.073Z] [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Sourcing Manager @ discord',
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
[2026-01-18T09:07:19.073Z] [BOT] ❌ Industry post failed: Strategic Sourcing Manager
⚠️  Channel full error count: 1/5
[2026-01-18T09:07:20.736Z] [BOT] ✅ Created forum post: 🏢 Strategic Sourcing Manager @ discord in #🌉・san-francisco
[2026-01-18T09:07:20.736Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T09:07:22.238Z] [BOT] 💾 Marked as posted: Strategic Sourcing Manager @ discord (instance #1)
[2026-01-18T09:07:22.238Z] [BOT] 💾 BEFORE ARCHIVING: 2673 jobs in database
[2026-01-18T09:07:22.240Z] [BOT] ✅ No jobs to archive (all 2673 jobs within 7-day window)
[2026-01-18T09:07:22.259Z] [BOT] 💾 Saved posted_jobs.json: 2673 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:25.259Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-18T09:07:25.260Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_0a732051
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T09:07:25.260Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T09:07:25.507Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_0a732051 in #📈・JID_fb739488
[2026-01-18T09:07:25.507Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_0a732051
[2026-01-18T09:07:27.009Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_0a732051 (instance #1)
[2026-01-18T09:07:27.009Z] [BOT] 💾 BEFORE ARCHIVING: 2674 jobs in database
[2026-01-18T09:07:27.011Z] [BOT] ✅ No jobs to archive (all 2674 jobs within 7-day window)
[2026-01-18T09:07:27.025Z] [BOT] 💾 Saved posted_jobs.json: 2674 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:27.025Z] [BOT] 📍 [ROUTING] "Marketing and Sales Data Analyst" @ ORG_1f7024cb Autism
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T09:07:27.025Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T09:07:27.253Z] [BOT] ✅ Created forum post: 🏢 Marketing and Sales Data Analyst @ ORG_1f7024cb Autism in #📈・JID_fb739488
  ✅ Industry: Marketing and Sales Data Analyst @ ORG_1f7024cb Autism
[2026-01-18T09:07:28.885Z] [BOT] ✅ Created forum post: 🏢 Marketing and Sales Data Analyst @ ORG_1f7024cb Autism in #💻・remote-usa
[2026-01-18T09:07:28.885Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T09:07:30.387Z] [BOT] 💾 Marked as posted: Marketing and Sales Data Analyst @ ORG_1f7024cb Autism (instance #1)
[2026-01-18T09:07:30.387Z] [BOT] 💾 BEFORE ARCHIVING: 2675 jobs in database
[2026-01-18T09:07:30.389Z] [BOT] ✅ No jobs to archive (all 2675 jobs within 7-day window)
[2026-01-18T09:07:30.408Z] [BOT] 💾 Saved posted_jobs.json: 2675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:30.408Z] [BOT] 📍 [ROUTING] "Data Analyst-School of Medicine - Hematology" @ ORG_ed6b3747 University
[2026-01-18T09:07:30.408Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T09:07:30.570Z] [BOT] ✅ Created forum post: 🏢 Data Analyst-School of Medicine - Hematology @ ORG_ed6b3747 University in #📈・JID_fb739488
  ✅ Industry: Data Analyst-School of Medicine - Hematology @ ORG_ed6b3747 University
[2026-01-18T09:07:32.297Z] [BOT] ✅ Created forum post: 🏢 Data Analyst-School of Medicine - Hematology @ ORG_ed6b3747 University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T09:07:33.798Z] [BOT] 💾 Marked as posted: Data Analyst-School of Medicine - Hematology @ ORG_ed6b3747 University (instance #1)
[2026-01-18T09:07:33.799Z] [BOT] 💾 BEFORE ARCHIVING: 2676 jobs in database
[2026-01-18T09:07:33.800Z] [BOT] ✅ No jobs to archive (all 2676 jobs within 7-day window)
[2026-01-18T09:07:33.818Z] [BOT] 💾 Saved posted_jobs.json: 2676 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:33.818Z] [BOT] 📍 [ROUTING] "Entry-Level Data Analyst" @ ORG_30165398ing World
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T09:07:33.818Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T09:07:33.984Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Analyst @ ORG_30165398ing World in #📈・JID_fb739488
  ✅ Industry: Entry-Level Data Analyst @ ORG_30165398ing World
[2026-01-18T09:07:35.756Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Analyst @ ORG_30165398ing World in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T09:07:37.257Z] [BOT] 💾 Marked as posted: Entry-Level Data Analyst @ ORG_30165398ing World (instance #1)
[2026-01-18T09:07:37.257Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-18T09:07:37.260Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-18T09:07:37.277Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:40.278Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-18T09:07:40.278Z] [BOT] 📍 [ROUTING] "Environmental Programs Specialist" @ ORG_c9c7c514 State Government
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T09:07:40.777Z] [BOT] ✅ Created forum post: 🏢 Environmental Programs Specialist @ ORG_c9c7c514 State Government in #💻・tech-jobs
[2026-01-18T09:07:40.777Z] [BOT] ✅ Industry: Environmental Programs Specialist @ ORG_c9c7c514 State Government
[2026-01-18T09:07:42.383Z] [BOT ERROR] ❌ Error posting job Environmental Programs Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Environmental Programs Specialist @ ORG_c9c7c514 State Government',
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
[2026-01-18T09:07:42.383Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T09:07:43.884Z] [BOT] 💾 Marked as posted: Environmental Programs Specialist @ ORG_c9c7c514 State Government (instance #1)
[2026-01-18T09:07:43.885Z] [BOT] 💾 BEFORE ARCHIVING: 2678 jobs in database
[2026-01-18T09:07:43.886Z] [BOT] ✅ No jobs to archive (all 2678 jobs within 7-day window)
[2026-01-18T09:07:43.904Z] [BOT] 💾 Saved posted_jobs.json: 2678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:46.904Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T09:07:46.905Z] [BOT] 📍 [ROUTING] "Research Assistant in Geomorphology-GEOSCI" @ ORG_478e100e University
[2026-01-18T09:07:46.905Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T09:07:47.158Z] [BOT] ✅ Created forum post: 🏢 Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University
[2026-01-18T09:07:48.754Z] [BOT ERROR] ❌ Error posting job Research Assistant in Geomorphology-GEOSCI: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University',
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
[2026-01-18T09:07:48.754Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T09:07:50.255Z] [BOT] 💾 Marked as posted: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University (instance #1)
[2026-01-18T09:07:50.255Z] [BOT] 💾 BEFORE ARCHIVING: 2679 jobs in database
[2026-01-18T09:07:50.257Z] [BOT] ✅ No jobs to archive (all 2679 jobs within 7-day window)
[2026-01-18T09:07:50.273Z] [BOT] 💾 Saved posted_jobs.json: 2679 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:53.274Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T09:07:53.274Z] [BOT] 📍 [ROUTING] "Quantitative Model Analyst 1" @ ORG_5e4eb7c5 Bank
[2026-01-18T09:07:53.275Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T09:07:53.576Z] [BOT] ✅ Created forum post: 🏢 Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank in #🩺・healthcare-jobs
  ✅ Industry: Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank
[2026-01-18T09:07:55.270Z] [BOT] ✅ Created forum post: 🏢 Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T09:07:56.771Z] [BOT] 💾 Marked as posted: Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank (instance #1)
[2026-01-18T09:07:56.771Z] [BOT] 💾 BEFORE ARCHIVING: 2680 jobs in database
[2026-01-18T09:07:56.772Z] [BOT] ✅ No jobs to archive (all 2680 jobs within 7-day window)
[2026-01-18T09:07:56.789Z] [BOT] 💾 Saved posted_jobs.json: 2680 active jobs
[2026-01-18T09:07:56.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T09:07:59.790Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-18T09:07:59.791Z] [BOT] 📍 [ROUTING] "Strategic Program Manager, Contingent Workforce" @ figma
[2026-01-18T09:07:59.791Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-18T09:07:59.975Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager, Contingent Workforce @ figma in #📊・JID_9910249a
  ✅ Industry: Strategic Program Manager, Contingent Workforce @ figma
[2026-01-18T09:08:01.738Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager, Contingent Workforce @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T09:08:03.239Z] [BOT] 💾 Marked as posted: Strategic Program Manager, Contingent Workforce @ figma (instance #1)
[2026-01-18T09:08:03.239Z] [BOT] 💾 BEFORE ARCHIVING: 2681 jobs in database
[2026-01-18T09:08:03.240Z] [BOT] ✅ No jobs to archive (all 2681 jobs within 7-day window)
[2026-01-18T09:08:03.255Z] [BOT] 💾 Saved posted_jobs.json: 2681 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:08:06.257Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T09:08:06.257Z] [BOT] 📍 [ROUTING] "External Policy & Partnerships Manager, Safeguards" @ anthropic
[2026-01-18T09:08:06.257Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T09:08:06.448Z] [BOT] ✅ Created forum post: 🏢 External Policy & Partnerships Manager, Safeguards @ anthropic in #💲・sales-jobs
[2026-01-18T09:08:06.449Z] [BOT] ✅ Industry: External Policy & Partnerships Manager, Safeguards @ anthropic
[2026-01-18T09:08:08.421Z] [BOT] ✅ Created forum post: 🏢 External Policy & Partnerships Manager, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-18T09:08:08.421Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T09:08:09.922Z] [BOT] 💾 Marked as posted: External Policy & Partnerships Manager, Safeguards @ anthropic (instance #1)
[2026-01-18T09:08:09.923Z] [BOT] 💾 BEFORE ARCHIVING: 2682 jobs in database
[2026-01-18T09:08:09.924Z] [BOT] ✅ No jobs to archive (all 2682 jobs within 7-day window)
[2026-01-18T09:08:09.941Z] [BOT] 💾 Saved posted_jobs.json: 2682 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T09:08:12.942Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T09:08:12.943Z] [BOT] ⏭️  Skipping duplicate: JID_e0a1c8f4 (posted within 7 days)
[2026-01-18T09:08:12.943Z] [BOT] ⏭️  Skipping duplicate: JID_4d32b5de-scientist_539155 (posted within 7 days)
[2026-01-18T09:08:12.943Z] [BOT] ⏭️  Skipping duplicate: JID_86771786 (posted within 7 days)
[2026-01-18T09:08:12.943Z] [BOT] ⏭️  Skipping duplicate: JID_f4ed0923 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
[2026-01-18T09:08:12.944Z] [BOT] ⏭️  Skipping duplicate: JID_74f8c586 (posted within 7 days)
[2026-01-18T09:08:13.077Z] [BOT] ✅ Loaded pending queue: 2844 total (2824 pending, 20 enriched, 0 posted)
[2026-01-18T09:08:13.244Z] [BOT] ✅ Saved pending queue: 2844 total (2824 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T09:08:13.244Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T09:08:13.305Z] [BOT] 📂 Loaded 4835 existing routing entries
[2026-01-18T09:08:13.375Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4845
   Timestamp: 2026-01-18T09:08:13.355Z
[2026-01-18T09:08:13.376Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T09:08:13.376Z] [BOT] Total attempts: 19
   Successful: 16
   Failed: 3
   Skipped: 0
[2026-01-18T09:08:13.376Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T09:08:13.376Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
[2026-01-18T09:08:13.376Z] [BOT] 1. #🌉・san-francisco: 4 posts
     2. #📈・JID_fb739488: 4 posts
     3. #💻・remote-usa: 2 posts
     4. #🌆・chicago: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-18T09:08:13.376Z] [BOT] [STATS] Channel stats saved
[2026-01-18T09:08:15.401Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2699) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Strategic Sourcing Manager
- [BOT ERROR] ❌ Error posting job Environmental Programs Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Assistant in Geomorphology-GEOSCI: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*