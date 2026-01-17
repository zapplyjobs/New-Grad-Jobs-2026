# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T02:37:59.180Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T02:37:08.787Z] ========================================
[2026-01-17T02:37:08.789Z] Discord Bot Execution Log
[2026-01-17T02:37:08.789Z] Environment: GitHub Actions
[2026-01-17T02:37:08.789Z] Node Version: v20.19.6
[2026-01-17T02:37:08.790Z] ========================================
[2026-01-17T02:37:08.790Z] Environment Variables Check:
[2026-01-17T02:37:08.790Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T02:37:08.790Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.790Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T02:37:08.790Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T02:37:08.790Z] 
Multi-Channel Configuration:
[2026-01-17T02:37:08.790Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.790Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.790Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.790Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T02:37:08.791Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T02:37:08.791Z] 
Data Files Check:
[2026-01-17T02:37:08.791Z] .github/data/new_jobs.json: ✅ Exists (10 items, 25915 bytes)
[2026-01-17T02:37:08.800Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1200764 bytes)
[2026-01-17T02:37:08.800Z] 
========================================
[2026-01-17T02:37:08.800Z] Starting Enhanced Discord Bot...
[2026-01-17T02:37:08.800Z] ========================================
[2026-01-17T02:37:09.320Z] [BOT] ✅ Loaded V2 database: 2216 jobs
[2026-01-17T02:37:10.136Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T02:37:10.136Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T02:37:10.136Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T02:37:10.249Z] [BOT] ✅ Loaded pending queue: 2810 total (2790 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Salesforce OBIEE ETL Training and Placement at AG Technologies
[2026-01-17T02:37:10.251Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T02:37:10.252Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T02:37:10.252Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T02:37:10.253Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-17T02:37:10.253Z] [BOT] (6 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T02:37:10.253Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T02:37:10.257Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T02:37:10.258Z] [BOT] 📍 [ROUTING] "Salesforce OBIEE ETL Training and Placement" @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:10.258Z] [BOT] Category: SALES (matched: "sales")
[2026-01-17T02:37:10.258Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T02:37:10.275Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T02:37:10.482Z] [BOT] ✅ Created forum post: 🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #💲・sales-jobs
[2026-01-17T02:37:10.482Z] [BOT] ✅ Industry: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:12.176Z] [BOT] ✅ Created forum post: 🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-17T02:37:13.677Z] [BOT] 💾 Marked as posted: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:13.677Z] [BOT] 💾 BEFORE ARCHIVING: 2217 jobs in database
[2026-01-17T02:37:13.679Z] [BOT] ✅ No jobs to archive (all 2217 jobs within 7-day window)
[2026-01-17T02:37:13.696Z] [BOT] 💾 Saved posted_jobs.json: 2217 active jobs
[2026-01-17T02:37:13.696Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:16.695Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-17T02:37:16.696Z] [BOT] 📍 [ROUTING] "Software Engineer, Connected Warfare" @ ORG_fa549ffc Industries
   Category: AI (matched: "AI specialization")
[2026-01-17T02:37:16.696Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T02:37:16.955Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Connected Warfare @ ORG_fa549ffc Industries in #🤖・ai-jobs
[2026-01-17T02:37:16.956Z] [BOT] ✅ Industry: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries
[2026-01-17T02:37:18.694Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Connected Warfare @ ORG_fa549ffc Industries in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T02:37:20.195Z] [BOT] 💾 Marked as posted: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries (instance #1)
[2026-01-17T02:37:20.195Z] [BOT] 💾 BEFORE ARCHIVING: 2218 jobs in database
[2026-01-17T02:37:20.197Z] [BOT] ✅ No jobs to archive (all 2218 jobs within 7-day window)
[2026-01-17T02:37:20.215Z] [BOT] 💾 Saved posted_jobs.json: 2218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:20.216Z] [BOT] 📍 [ROUTING] "Air Dominance & Strike - Flight Software Engineer, Embedded C/C++" @ ORG_fa549ffc Industries
[2026-01-17T02:37:20.216Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T02:37:20.428Z] [BOT] ✅ Created forum post: 🏢 Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries in #🤖・ai-jobs
  ✅ Industry: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries
[2026-01-17T02:37:22.170Z] [BOT] ✅ Created forum post: 🏢 Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T02:37:23.670Z] [BOT] 💾 Marked as posted: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries (instance #1)
[2026-01-17T02:37:23.670Z] [BOT] 💾 BEFORE ARCHIVING: 2219 jobs in database
[2026-01-17T02:37:23.672Z] [BOT] ✅ No jobs to archive (all 2219 jobs within 7-day window)
[2026-01-17T02:37:23.687Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:26.687Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-17T02:37:26.688Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:26.689Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:26.981Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-17T02:37:26.981Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:28.867Z] [BOT] ✅ Created forum post: 🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T02:37:30.368Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:30.369Z] [BOT] 💾 BEFORE ARCHIVING: 2220 jobs in database
[2026-01-17T02:37:30.370Z] [BOT] ✅ No jobs to archive (all 2220 jobs within 7-day window)
[2026-01-17T02:37:30.385Z] [BOT] 💾 Saved posted_jobs.json: 2220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.385Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:30.385Z] [BOT] 💾 BEFORE ARCHIVING: 2221 jobs in database
[2026-01-17T02:37:30.386Z] [BOT] ✅ No jobs to archive (all 2221 jobs within 7-day window)
[2026-01-17T02:37:30.400Z] [BOT] 💾 Saved posted_jobs.json: 2221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.400Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:30.400Z] [BOT] 💾 BEFORE ARCHIVING: 2222 jobs in database
[2026-01-17T02:37:30.401Z] [BOT] ✅ No jobs to archive (all 2222 jobs within 7-day window)
[2026-01-17T02:37:30.414Z] [BOT] 💾 Saved posted_jobs.json: 2222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.415Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:30.415Z] [BOT] 💾 BEFORE ARCHIVING: 2223 jobs in database
[2026-01-17T02:37:30.416Z] [BOT] ✅ No jobs to archive (all 2223 jobs within 7-day window)
[2026-01-17T02:37:30.434Z] [BOT] 💾 Saved posted_jobs.json: 2223 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.435Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:30.435Z] [BOT] 💾 BEFORE ARCHIVING: 2224 jobs in database
[2026-01-17T02:37:30.436Z] [BOT] ✅ No jobs to archive (all 2224 jobs within 7-day window)
[2026-01-17T02:37:30.449Z] [BOT] 💾 Saved posted_jobs.json: 2224 active jobs
[2026-01-17T02:37:30.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.449Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 2225 jobs in database
[2026-01-17T02:37:30.450Z] [BOT] ✅ No jobs to archive (all 2225 jobs within 7-day window)
[2026-01-17T02:37:30.462Z] [BOT] 💾 Saved posted_jobs.json: 2225 active jobs
[2026-01-17T02:37:30.462Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.463Z] [BOT] 💾 Marked as posted: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
💾 BEFORE ARCHIVING: 2226 jobs in database
[2026-01-17T02:37:30.464Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-01-17T02:37:30.477Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:30.478Z] [BOT] 📍 [ROUTING] "Training & Placement on Informatica/ Microstrategy" @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:30.478Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:30.703Z] [BOT] ✅ Created forum post: 🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-17T02:37:30.703Z] [BOT] ✅ Industry: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:32.432Z] [BOT] ✅ Created forum post: 🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-17T02:37:32.432Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T02:37:33.933Z] [BOT] 💾 Marked as posted: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:33.934Z] [BOT] 💾 BEFORE ARCHIVING: 2227 jobs in database
[2026-01-17T02:37:33.935Z] [BOT] ✅ No jobs to archive (all 2227 jobs within 7-day window)
[2026-01-17T02:37:33.948Z] [BOT] 💾 Saved posted_jobs.json: 2227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:33.948Z] [BOT] 📍 [ROUTING] "Software Engineer Position" @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:33.948Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:34.374Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Position @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-17T02:37:34.374Z] [BOT] ✅ Industry: Software Engineer Position @ ORG_9af9eef3 Technologies
[2026-01-17T02:37:36.294Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Position @ ORG_9af9eef3 Technologies in #🤠・austin
[2026-01-17T02:37:36.294Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T02:37:37.795Z] [BOT] 💾 Marked as posted: Software Engineer Position @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T02:37:37.796Z] [BOT] 💾 BEFORE ARCHIVING: 2228 jobs in database
[2026-01-17T02:37:37.797Z] [BOT] ✅ No jobs to archive (all 2228 jobs within 7-day window)
[2026-01-17T02:37:37.811Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:37.811Z] [BOT] 📍 [ROUTING] "Software Engineering, Associate" @ ORG_d6d2009d
[2026-01-17T02:37:37.811Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:38.636Z] [BOT] ✅ Created forum post: 🏢 Software Engineering, Associate @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Software Engineering, Associate @ ORG_d6d2009d
[2026-01-17T02:37:40.378Z] [BOT] ✅ Created forum post: 🏢 Software Engineering, Associate @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T02:37:41.879Z] [BOT] 💾 Marked as posted: Software Engineering, Associate @ ORG_d6d2009d (instance #1)
[2026-01-17T02:37:41.879Z] [BOT] 💾 BEFORE ARCHIVING: 2229 jobs in database
[2026-01-17T02:37:41.881Z] [BOT] ✅ No jobs to archive (all 2229 jobs within 7-day window)
[2026-01-17T02:37:41.895Z] [BOT] 💾 Saved posted_jobs.json: 2229 active jobs
[2026-01-17T02:37:41.895Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:41.895Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_0c2b26a5
[2026-01-17T02:37:41.896Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:42.111Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_0c2b26a5 in #💻・tech-jobs
[2026-01-17T02:37:42.111Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_0c2b26a5
[2026-01-17T02:37:43.816Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_0c2b26a5 in #🦢・los-angeles
[2026-01-17T02:37:43.816Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T02:37:45.316Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_0c2b26a5 (instance #1)
[2026-01-17T02:37:45.316Z] [BOT] 💾 BEFORE ARCHIVING: 2230 jobs in database
[2026-01-17T02:37:45.317Z] [BOT] ✅ No jobs to archive (all 2230 jobs within 7-day window)
[2026-01-17T02:37:45.332Z] [BOT] 💾 Saved posted_jobs.json: 2230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:45.332Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_0ab76d65
[2026-01-17T02:37:45.332Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:45.930Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_0ab76d65 in #💻・tech-jobs
[2026-01-17T02:37:45.930Z] [BOT] ✅ Industry: Software Engineer @ ORG_0ab76d65
[2026-01-17T02:37:47.771Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_0ab76d65 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-17T02:37:49.272Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_0ab76d65 (instance #1)
[2026-01-17T02:37:49.272Z] [BOT] 💾 BEFORE ARCHIVING: 2231 jobs in database
[2026-01-17T02:37:49.274Z] [BOT] ✅ No jobs to archive (all 2231 jobs within 7-day window)
[2026-01-17T02:37:49.287Z] [BOT] 💾 Saved posted_jobs.json: 2231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T02:37:49.288Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate Social - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T02:37:49.288Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T02:37:49.422Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate Social - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate Social - 2026 Start @ TikTok',
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
[2026-01-17T02:37:49.422Z] [BOT] ❌ Industry post failed: Software Engineer Graduate Social - 2026 Start
⚠️  Channel full error count: 1/5
[2026-01-17T02:37:51.081Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate Social - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate Social - 2026 Start @ TikTok',
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
[2026-01-17T02:37:51.081Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-17T02:37:55.583Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-17T02:37:55.584Z] [BOT] ⏭️  Skipping duplicate: JID_2aaae98d (posted within 7 days)
[2026-01-17T02:37:55.584Z] [BOT] ⏭️  Skipping duplicate: JID_0692174e (posted within 7 days)
⏭️  Skipping duplicate: JID_c539d32f (posted within 7 days)
[2026-01-17T02:37:55.584Z] [BOT] ⏭️  Skipping duplicate: JID_e539055d (posted within 7 days)
[2026-01-17T02:37:55.584Z] [BOT] ⏭️  Skipping duplicate: JID_dd5696c2 (posted within 7 days)
[2026-01-17T02:37:55.584Z] [BOT] ⏭️  Skipping duplicate: JID_90b218d5 (posted within 7 days)
⏭️  Skipping duplicate: JID_9dcb7870 (posted within 7 days)
[2026-01-17T02:37:55.585Z] [BOT] ⏭️  Skipping duplicate: JID_ea2931f4-moog_external_career_site-JID_8250d355-assc_r-25-13250 (posted within 7 days)
[2026-01-17T02:37:55.585Z] [BOT] ⏭️  Skipping duplicate: JID_76b3d674-_r250019232 (posted within 7 days)
[2026-01-17T02:37:55.700Z] [BOT] ✅ Loaded pending queue: 2810 total (2790 pending, 20 enriched, 0 posted)
[2026-01-17T02:37:55.869Z] [BOT] ✅ Saved pending queue: 2810 total (2790 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-17T02:37:55.869Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T02:37:55.927Z] [BOT] 📂 Loaded 4455 existing routing entries
[2026-01-17T02:37:55.994Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4465
[2026-01-17T02:37:55.994Z] [BOT] Timestamp: 2026-01-17T02:37:55.975Z
[2026-01-17T02:37:55.994Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T02:37:55.995Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-17T02:37:55.995Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
[2026-01-17T02:37:55.995Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🦢・los-angeles: 4 posts
     3. #🤠・austin: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-17T02:37:55.995Z] [BOT] [STATS] Channel stats saved
[2026-01-17T02:37:58.016Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate Social - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate Social - 2026 Start
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate Social - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*