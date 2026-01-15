# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T18:49:16.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T18:48:29.437Z] ========================================
[2026-01-15T18:48:29.439Z] Discord Bot Execution Log
[2026-01-15T18:48:29.439Z] Environment: GitHub Actions
[2026-01-15T18:48:29.439Z] Node Version: v20.19.6
[2026-01-15T18:48:29.439Z] ========================================
[2026-01-15T18:48:29.439Z] Environment Variables Check:
[2026-01-15T18:48:29.439Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T18:48:29.439Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T18:48:29.440Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T18:48:29.440Z] 
Multi-Channel Configuration:
[2026-01-15T18:48:29.440Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T18:48:29.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T18:48:29.440Z] 
Data Files Check:
[2026-01-15T18:48:29.441Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36825 bytes)
[2026-01-15T18:48:29.448Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 947461 bytes)
[2026-01-15T18:48:29.448Z] 
========================================
[2026-01-15T18:48:29.448Z] Starting Enhanced Discord Bot...
[2026-01-15T18:48:29.448Z] ========================================
[2026-01-15T18:48:29.900Z] [BOT] ✅ Loaded V2 database: 1769 jobs
[2026-01-15T18:48:30.809Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T18:48:30.809Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T18:48:30.810Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T18:48:30.958Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start at ByteDance
[2026-01-15T18:48:30.961Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T18:48:30.961Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T18:48:30.962Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T18:48:30.962Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T18:48:30.962Z] [BOT] (1 grouped as same job with different locations)
[2026-01-15T18:48:30.963Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T18:48:30.967Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T18:48:30.968Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
[2026-01-15T18:48:30.968Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T18:48:30.991Z] [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T18:48:31.199Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T18:48:31.199Z] [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-15T18:48:32.865Z] [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T18:48:32.865Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T18:48:34.365Z] [BOT] 📍 [ROUTING] "Chemical Data Annotation Specialist" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
[2026-01-15T18:48:34.365Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T18:48:34.619Z] [BOT] ✅ Created forum post: 🏢 Chemical Data Annotation Specialist @ ORG_6a1ef406 in #🤖・ai-jobs
[2026-01-15T18:48:34.619Z] [BOT] ✅ Industry: Chemical Data Annotation Specialist @ ORG_6a1ef406
[2026-01-15T18:48:36.120Z] [BOT] 💾 Marked as posted: Chemical Data Annotation Specialist @ ORG_6a1ef406 (instance #1)
[2026-01-15T18:48:36.121Z] [BOT] 💾 BEFORE ARCHIVING: 1770 jobs in database
[2026-01-15T18:48:36.122Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T18:48:36.126Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T18:48:36.126Z] [BOT] ✅ Archiving complete: 2 archived, 1768 active
[2026-01-15T18:48:36.138Z] [BOT] 💾 Saved posted_jobs.json: 1768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:36.138Z] [BOT] 📍 [ROUTING] "Full-Stack Engineer" @ ORG_91268016
[2026-01-15T18:48:36.138Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T18:48:36.448Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_91268016 in #🤖・ai-jobs
  ✅ Industry: Full-Stack Engineer @ ORG_91268016
[2026-01-15T18:48:38.219Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_91268016 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T18:48:39.719Z] [BOT] 💾 Marked as posted: Full-Stack Engineer @ ORG_91268016 (instance #1)
[2026-01-15T18:48:39.719Z] [BOT] 💾 BEFORE ARCHIVING: 1769 jobs in database
[2026-01-15T18:48:39.720Z] [BOT] ✅ No jobs to archive (all 1769 jobs within 7-day window)
[2026-01-15T18:48:39.733Z] [BOT] 💾 Saved posted_jobs.json: 1769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:42.735Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T18:48:42.736Z] [BOT] 📍 [ROUTING] "Integrations Analyst 1/2" @ ORG_bb3d83ffinessolver
   Category: TECH (default)
[2026-01-15T18:48:42.736Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:48:43.010Z] [BOT] ✅ Created forum post: 🏢 Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver in #💻・tech-jobs
  ✅ Industry: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver
[2026-01-15T18:48:44.734Z] [BOT] ✅ Created forum post: 🏢 Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T18:48:46.234Z] [BOT] 💾 Marked as posted: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver (instance #1)
[2026-01-15T18:48:46.235Z] [BOT] 💾 BEFORE ARCHIVING: 1770 jobs in database
[2026-01-15T18:48:46.236Z] [BOT] ✅ No jobs to archive (all 1770 jobs within 7-day window)
[2026-01-15T18:48:46.249Z] [BOT] 💾 Saved posted_jobs.json: 1770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:46.250Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Software Engineering" @ ORG_ea9973d1 Point Solutions
   Category: TECH (matched: "software")
[2026-01-15T18:48:46.250Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:48:46.436Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions in #💻・tech-jobs
[2026-01-15T18:48:46.436Z] [BOT] ✅ Industry: Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions
[2026-01-15T18:48:48.166Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions in #💻・remote-usa
[2026-01-15T18:48:48.167Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T18:48:49.668Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions (instance #1)
[2026-01-15T18:48:49.668Z] [BOT] 💾 BEFORE ARCHIVING: 1771 jobs in database
[2026-01-15T18:48:49.669Z] [BOT] ✅ No jobs to archive (all 1771 jobs within 7-day window)
[2026-01-15T18:48:49.683Z] [BOT] 💾 Saved posted_jobs.json: 1771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:49.683Z] [BOT] 📍 [ROUTING] "Senior Associate - Application Development - Greenville TX" @ L3Harris Technologies
   Category: TECH (default)
[2026-01-15T18:48:49.683Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:48:50.177Z] [BOT] ✅ Created forum post: 🏢 Senior Associate - Application Development - Greenville TX @ L3Harris Technologies in #💻・tech-jobs
  ✅ Industry: Senior Associate - Application Development - Greenville TX @ L3Harris Technologies
[2026-01-15T18:48:52.079Z] [BOT] ✅ Created forum post: 🏢 Senior Associate - Application Development - Greenville TX @ L3Harris Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T18:48:53.579Z] [BOT] 💾 Marked as posted: Senior Associate - Application Development - Greenville TX @ L3Harris Technologies (instance #1)
[2026-01-15T18:48:53.579Z] [BOT] 💾 BEFORE ARCHIVING: 1772 jobs in database
[2026-01-15T18:48:53.580Z] [BOT] ✅ No jobs to archive (all 1772 jobs within 7-day window)
[2026-01-15T18:48:53.592Z] [BOT] 💾 Saved posted_jobs.json: 1772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:53.592Z] [BOT] 📍 [ROUTING] "DOPS Graduate Software Developer - Federal Work Study - Remote Optional" @ ORG_9d38443e of Virginia
[2026-01-15T18:48:53.592Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:48:53.898Z] [BOT] ✅ Created forum post: 🏢 DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia in #💻・tech-jobs
  ✅ Industry: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia
[2026-01-15T18:48:55.714Z] [BOT] ✅ Created forum post: 🏢 DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T18:48:57.216Z] [BOT] 💾 Marked as posted: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia (instance #1)
[2026-01-15T18:48:57.216Z] [BOT] 💾 BEFORE ARCHIVING: 1773 jobs in database
[2026-01-15T18:48:57.217Z] [BOT] ✅ No jobs to archive (all 1773 jobs within 7-day window)
[2026-01-15T18:48:57.229Z] [BOT] 💾 Saved posted_jobs.json: 1773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T18:48:57.229Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Fusion" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T18:48:57.366Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer - Fusion @ Oracle',
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
[2026-01-15T18:48:57.366Z] [BOT] ❌ Industry post failed: Undergrad Software Engineer - Fusion
⚠️  Channel full error count: 1/5
[2026-01-15T18:48:59.047Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer - Fusion @ Oracle',
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
[2026-01-15T18:48:59.048Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-15T18:49:03.549Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T18:49:03.549Z] [BOT] 📍 [ROUTING] "Engineering Students Seeking Full-Time Employment" @ ORG_6adce842
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T18:49:03.549Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T18:49:03.550Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T18:49:03.721Z] [BOT ERROR] ❌ Error posting job Engineering Students Seeking Full-Time Employment: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Students Seeking Full-Time Employment @ ExxonMobil',
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
[2026-01-15T18:49:03.721Z] [BOT] ❌ Industry post failed: Engineering Students Seeking Full-Time Employment
⚠️  Channel full error count: 2/5
[2026-01-15T18:49:05.418Z] [BOT ERROR] ❌ Error posting job Engineering Students Seeking Full-Time Employment: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Students Seeking Full-Time Employment @ ExxonMobil',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-15T18:49:05.418Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-15T18:49:06.919Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst 1" @ ORG_d7d2f0ff & Southern Financial Group
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T18:49:07.107Z] [BOT ERROR] ❌ Error posting job Business Intelligence Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group',
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
[2026-01-15T18:49:07.107Z] [BOT] ❌ Industry post failed: Business Intelligence Analyst 1
⚠️  Channel full error count: 3/5
[2026-01-15T18:49:08.837Z] [BOT ERROR] ❌ Error posting job Business Intelligence Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group',
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
[2026-01-15T18:49:08.838Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T18:49:13.340Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-15T18:49:13.340Z] [BOT] ⏭️  Skipping duplicate: JID_e175a8dd (posted within 7 days)
[2026-01-15T18:49:13.340Z] [BOT] ⏭️  Skipping duplicate: JID_68b98c66 (posted within 7 days)
⏭️  Skipping duplicate: JID_e4cc550d (posted within 7 days)
[2026-01-15T18:49:13.341Z] [BOT] ⏭️  Skipping duplicate: JID_2bf7ebd0 (posted within 7 days)
[2026-01-15T18:49:13.341Z] [BOT] ⏭️  Skipping duplicate: JID_effc6dad (posted within 7 days)
[2026-01-15T18:49:13.341Z] [BOT] ⏭️  Skipping duplicate: JID_dc564ec0-optional_r0076751 (posted within 7 days)
[2026-01-15T18:49:13.488Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[2026-01-15T18:49:13.653Z] [BOT] ✅ Saved pending queue: 2755 total (2735 pending, 14 enriched, 6 posted)
[2026-01-15T18:49:13.653Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T18:49:13.711Z] [BOT] 📂 Loaded 3945 existing routing entries
[2026-01-15T18:49:13.772Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3955
   Timestamp: 2026-01-15T18:49:13.757Z
[2026-01-15T18:49:13.772Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T18:49:13.772Z] [BOT] Total attempts: 19
   Successful: 11
   Failed: 8
   Skipped: 0
[2026-01-15T18:49:13.772Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-15T18:49:13.772Z] [BOT] Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-15T18:49:13.773Z] [BOT] [STATS] Channel stats saved
[2026-01-15T18:49:15.792Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start
- [BOT ERROR] ❌ Error posting job Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Undergrad Software Engineer - Fusion
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer - Fusion: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Students Seeking Full-Time Employment: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Students Seeking Full-Time Employment
- [BOT ERROR] ❌ Error posting job Engineering Students Seeking Full-Time Employment: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Intelligence Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Intelligence Analyst 1
- [BOT ERROR] ❌ Error posting job Business Intelligence Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*