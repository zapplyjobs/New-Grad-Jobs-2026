# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T23:27:35.940Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 3
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T23:26:42.653Z] ========================================
[2026-01-18T23:26:42.655Z] Discord Bot Execution Log
[2026-01-18T23:26:42.655Z] Environment: GitHub Actions
[2026-01-18T23:26:42.655Z] Node Version: v20.19.6
[2026-01-18T23:26:42.655Z] ========================================
[2026-01-18T23:26:42.655Z] Environment Variables Check:
[2026-01-18T23:26:42.655Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T23:26:42.655Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.655Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T23:26:42.656Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T23:26:42.656Z] 
Multi-Channel Configuration:
[2026-01-18T23:26:42.656Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T23:26:42.656Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T23:26:42.656Z] 
Data Files Check:
[2026-01-18T23:26:42.657Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79682 bytes)
[2026-01-18T23:26:42.668Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1514727 bytes)
[2026-01-18T23:26:42.668Z] 
========================================
[2026-01-18T23:26:42.668Z] Starting Enhanced Discord Bot...
[2026-01-18T23:26:42.668Z] ========================================
[2026-01-18T23:26:43.215Z] [BOT] ✅ Loaded V2 database: 2787 jobs
[2026-01-18T23:26:43.843Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T23:26:43.843Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T23:26:43.843Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T23:26:43.963Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Dental Assistant at Blue Ridge Health
[2026-01-18T23:26:43.967Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T23:26:43.967Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T23:26:43.968Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T23:26:43.968Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-18T23:26:43.969Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - BizOps Lead, BD @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T23:26:43.969Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T23:26:43.973Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T23:26:43.973Z] [BOT] 📍 [ROUTING] "Dental Assistant" @ ORG_ec7d56a0 Ridge Health
[2026-01-18T23:26:43.973Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T23:26:43.990Z] [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T23:26:44.106Z] [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health',
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
[2026-01-18T23:26:44.106Z] [BOT] ❌ Industry post failed: Dental Assistant
⚠️  Channel full error count: 1/5
[2026-01-18T23:26:45.758Z] [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Dental Assistant @ ORG_ec7d56a0 Ridge Health',
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
[2026-01-18T23:26:45.759Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T23:26:50.260Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T23:26:50.261Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_268710f9
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T23:26:50.261Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T23:26:50.529Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_268710f9 in #📈・JID_fb739488
[2026-01-18T23:26:50.529Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_268710f9
[2026-01-18T23:26:52.280Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_268710f9 in #🌆・chicago
[2026-01-18T23:26:52.280Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-18T23:26:53.781Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_268710f9 (instance #1)
[2026-01-18T23:26:53.781Z] [BOT] 💾 BEFORE ARCHIVING: 2788 jobs in database
[2026-01-18T23:26:53.783Z] [BOT] ✅ No jobs to archive (all 2788 jobs within 7-day window)
[2026-01-18T23:26:53.809Z] [BOT] 💾 Saved posted_jobs.json: 2788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:26:53.810Z] [BOT] 📍 [ROUTING] "Associate Developer Business Intelligence Analyst" @ ORG_1111d586inion Energy
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T23:26:53.810Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T23:26:54.091Z] [BOT] ✅ Created forum post: 🏢 Associate Developer Business Intelligence Analyst @ ORG_1111d586inion Energy in #📈・JID_fb739488
[2026-01-18T23:26:54.092Z] [BOT] ✅ Industry: Associate Developer Business Intelligence Analyst @ ORG_1111d586inion Energy
[2026-01-18T23:26:57.206Z] [BOT] ✅ Created forum post: 🏢 Associate Developer Business Intelligence Analyst @ ORG_1111d586inion Energy in #🌉・san-francisco
[2026-01-18T23:26:57.207Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T23:26:58.707Z] [BOT] 💾 Marked as posted: Associate Developer Business Intelligence Analyst @ ORG_1111d586inion Energy (instance #1)
[2026-01-18T23:26:58.707Z] [BOT] 💾 BEFORE ARCHIVING: 2789 jobs in database
[2026-01-18T23:26:58.709Z] [BOT] ✅ No jobs to archive (all 2789 jobs within 7-day window)
[2026-01-18T23:26:58.729Z] [BOT] 💾 Saved posted_jobs.json: 2789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:01.729Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-18T23:27:01.730Z] [BOT] 📍 [ROUTING] "IT Services Academy Program-Software Analyst" @ ORG_d5ef9966 Family
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:27:02.407Z] [BOT] ✅ Created forum post: 🏢 IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family in #💻・tech-jobs
  ✅ Industry: IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family
[2026-01-18T23:27:04.094Z] [BOT] ✅ Created forum post: 🏢 IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:27:05.596Z] [BOT] 💾 Marked as posted: IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family (instance #1)
[2026-01-18T23:27:05.596Z] [BOT] 💾 BEFORE ARCHIVING: 2790 jobs in database
[2026-01-18T23:27:05.598Z] [BOT] ✅ No jobs to archive (all 2790 jobs within 7-day window)
[2026-01-18T23:27:05.615Z] [BOT] 💾 Saved posted_jobs.json: 2790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:05.615Z] [BOT] 📍 [ROUTING] "Software Developer - Provisioning" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
   Category: TECH (matched: "software")
[2026-01-18T23:27:05.615Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:27:05.836Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・tech-jobs
[2026-01-18T23:27:05.836Z] [BOT] ✅ Industry: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-18T23:27:07.618Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:27:09.120Z] [BOT] 💾 Marked as posted: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) (instance #1)
[2026-01-18T23:27:09.120Z] [BOT] 💾 BEFORE ARCHIVING: 2791 jobs in database
[2026-01-18T23:27:09.122Z] [BOT] ✅ No jobs to archive (all 2791 jobs within 7-day window)
[2026-01-18T23:27:09.143Z] [BOT] 💾 Saved posted_jobs.json: 2791 active jobs
[2026-01-18T23:27:09.143Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:09.143Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_9a413545
   Category: TECH (matched: "software")
[2026-01-18T23:27:09.143Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:27:09.356Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_9a413545 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_9a413545
[2026-01-18T23:27:11.249Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_9a413545 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:27:12.751Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_9a413545 (instance #1)
[2026-01-18T23:27:12.751Z] [BOT] 💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-18T23:27:12.753Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-18T23:27:12.771Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:12.771Z] [BOT] 📍 [ROUTING] "Specialist - Data Transfer - Integration & Quality" @ ORG_01d9a8c4
   Category: TECH (matched: "data")
[2026-01-18T23:27:12.771Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:27:12.949Z] [BOT] ✅ Created forum post: 🏢 Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 in #💻・tech-jobs
  ✅ Industry: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4
[2026-01-18T23:27:14.737Z] [BOT] ✅ Created forum post: 🏢 Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T23:27:16.239Z] [BOT] 💾 Marked as posted: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 (instance #1)
[2026-01-18T23:27:16.239Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-18T23:27:16.241Z] [BOT] ✅ No jobs to archive (all 2793 jobs within 7-day window)
[2026-01-18T23:27:16.259Z] [BOT] 💾 Saved posted_jobs.json: 2793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:16.259Z] [BOT] 📍 [ROUTING] "QA Engineer II" @ duolingo
   Category: TECH (matched: "QA engineer")
[2026-01-18T23:27:16.259Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T23:27:16.450Z] [BOT] ✅ Created forum post: 🏢 QA Engineer II @ duolingo in #💻・tech-jobs
[2026-01-18T23:27:16.450Z] [BOT] ✅ Industry: QA Engineer II @ duolingo
[2026-01-18T23:27:18.122Z] [BOT] ✅ Created forum post: 🏢 QA Engineer II @ duolingo in #🗽・new-york
[2026-01-18T23:27:18.122Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T23:27:19.622Z] [BOT] 💾 Marked as posted: QA Engineer II @ duolingo (instance #1)
[2026-01-18T23:27:19.623Z] [BOT] 💾 BEFORE ARCHIVING: 2794 jobs in database
[2026-01-18T23:27:19.624Z] [BOT] ✅ No jobs to archive (all 2794 jobs within 7-day window)
[2026-01-18T23:27:19.641Z] [BOT] 💾 Saved posted_jobs.json: 2794 active jobs
[2026-01-18T23:27:19.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:22.642Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T23:27:22.642Z] [BOT] 📍 [ROUTING] "BizOps Lead, BD" @ brex
[2026-01-18T23:27:22.642Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T23:27:22.976Z] [BOT] ✅ Created forum post: 🏢 BizOps Lead, BD @ brex in #💲・sales-jobs
  ✅ Industry: BizOps Lead, BD @ brex
[2026-01-18T23:27:24.665Z] [BOT] ✅ Created forum post: 🏢 BizOps Lead, BD @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T23:27:26.165Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
[2026-01-18T23:27:26.165Z] [BOT] 💾 BEFORE ARCHIVING: 2795 jobs in database
[2026-01-18T23:27:26.167Z] [BOT] ✅ No jobs to archive (all 2795 jobs within 7-day window)
[2026-01-18T23:27:26.183Z] [BOT] 💾 Saved posted_jobs.json: 2795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:26.183Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
[2026-01-18T23:27:26.183Z] [BOT] 💾 BEFORE ARCHIVING: 2796 jobs in database
[2026-01-18T23:27:26.185Z] [BOT] ✅ No jobs to archive (all 2796 jobs within 7-day window)
[2026-01-18T23:27:26.202Z] [BOT] 💾 Saved posted_jobs.json: 2796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:26.202Z] [BOT] 💾 Marked as posted:  BizOps Lead, BD @ brex (instance #1)
[2026-01-18T23:27:26.202Z] [BOT] 💾 BEFORE ARCHIVING: 2797 jobs in database
[2026-01-18T23:27:26.204Z] [BOT] ✅ No jobs to archive (all 2797 jobs within 7-day window)
[2026-01-18T23:27:26.220Z] [BOT] 💾 Saved posted_jobs.json: 2797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:26.220Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
[2026-01-18T23:27:26.220Z] [BOT] 💾 BEFORE ARCHIVING: 2798 jobs in database
[2026-01-18T23:27:26.222Z] [BOT] ✅ No jobs to archive (all 2798 jobs within 7-day window)
[2026-01-18T23:27:26.237Z] [BOT] 💾 Saved posted_jobs.json: 2798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:26.238Z] [BOT] 📍 [ROUTING] "Early-Career Subsurface Modeler" @ ORG_77d789fe Consultants
   Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T23:27:26.568Z] [BOT] ✅ Created forum post: 🏢 Early-Career Subsurface Modeler @ ORG_77d789fe Consultants in #💲・sales-jobs
  ✅ Industry: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants
[2026-01-18T23:27:28.232Z] [BOT ERROR] ❌ Error posting job Early-Career Subsurface Modeler: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Early-Career Subsurface Modeler @ ORG_77d789fe Consultants',
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
[2026-01-18T23:27:28.233Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T23:27:29.733Z] [BOT] 💾 Marked as posted: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants (instance #1)
[2026-01-18T23:27:29.733Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-18T23:27:29.735Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-18T23:27:29.751Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T23:27:32.752Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T23:27:32.753Z] [BOT] ⏭️  Skipping duplicate: JID_3a8c3d34 (posted within 7 days)
[2026-01-18T23:27:32.753Z] [BOT] ⏭️  Skipping duplicate: JID_0fa63293-jmfamily_external-JID_8b35bc7a-analyst_jr104504 (posted within 7 days)
[2026-01-18T23:27:32.753Z] [BOT] ⏭️  Skipping duplicate: JID_7acacb68 (posted within 7 days)
[2026-01-18T23:27:32.754Z] [BOT] ⏭️  Skipping duplicate: JID_2e8e9de8 (posted within 7 days)
[2026-01-18T23:27:32.754Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
[2026-01-18T23:27:32.754Z] [BOT] ⏭️  Skipping duplicate: JID_7f8ffc9a (posted within 7 days)
[2026-01-18T23:27:32.754Z] [BOT] ⏭️  Skipping duplicate: JID_319c3705 (posted within 7 days)
[2026-01-18T23:27:32.754Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️  Skipping duplicate: JID_80a19829 (posted within 7 days)
[2026-01-18T23:27:32.867Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[2026-01-18T23:27:33.037Z] [BOT] ✅ Saved pending queue: 2828 total (2808 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-18T23:27:33.038Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T23:27:33.100Z] [BOT] 📂 Loaded 4925 existing routing entries
[2026-01-18T23:27:33.169Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T23:27:33.169Z] [BOT] Total entries: 4935
   Timestamp: 2026-01-18T23:27:33.149Z
[2026-01-18T23:27:33.169Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T23:27:33.170Z] [BOT] Total attempts: 20
   Successful: 17
   Failed: 3
   Skipped: 0
[2026-01-18T23:27:33.170Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T23:27:33.170Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-18T23:27:33.170Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #📈・JID_fb739488: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-18T23:27:33.170Z] [BOT] [STATS] Channel stats saved
[2026-01-18T23:27:35.192Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Dental Assistant
- [BOT ERROR] ❌ Error posting job Dental Assistant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Early-Career Subsurface Modeler: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*