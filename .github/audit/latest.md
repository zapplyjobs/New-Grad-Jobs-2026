# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T06:51:30.653Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T06:50:40.556Z] ========================================
[2026-01-16T06:50:40.557Z] Discord Bot Execution Log
[2026-01-16T06:50:40.557Z] Environment: GitHub Actions
[2026-01-16T06:50:40.558Z] Node Version: v20.19.6
[2026-01-16T06:50:40.558Z] ========================================
[2026-01-16T06:50:40.558Z] Environment Variables Check:
[2026-01-16T06:50:40.558Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T06:50:40.558Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T06:50:40.558Z] 
Multi-Channel Configuration:
[2026-01-16T06:50:40.558Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.558Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.559Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T06:50:40.559Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T06:50:40.559Z] 
Data Files Check:
[2026-01-16T06:50:40.559Z] .github/data/new_jobs.json: ✅ Exists (10 items, 39668 bytes)
[2026-01-16T06:50:40.567Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1050903 bytes)
[2026-01-16T06:50:40.568Z] 
========================================
[2026-01-16T06:50:40.568Z] Starting Enhanced Discord Bot...
[2026-01-16T06:50:40.568Z] ========================================
[2026-01-16T06:50:41.022Z] [BOT] ✅ Loaded V2 database: 1952 jobs
[2026-01-16T06:50:41.777Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T06:50:41.778Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T06:50:41.778Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T06:50:41.924Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-16T06:50:41.926Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New College Graduate at SIFT
[2026-01-16T06:50:41.928Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T06:50:41.929Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T06:50:41.929Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T06:50:41.930Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T06:50:41.930Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T06:50:41.930Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T06:50:41.932Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T06:50:41.933Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Graduate" @ ORG_2b380db8
   Category: TECH (matched: "software")
[2026-01-16T06:50:41.933Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:41.950Z] [BOT ERROR] (node:3932) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T06:50:42.146Z] [BOT ERROR] ❌ Error posting job Software Engineer – New College Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New College Graduate @ SIFT',
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
[2026-01-16T06:50:42.146Z] [BOT] ❌ Industry post failed: Software Engineer – New College Graduate
⚠️  Channel full error count: 1/5
[2026-01-16T06:50:43.889Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate @ ORG_2b380db8 in #🦢・los-angeles
[2026-01-16T06:50:43.889Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T06:50:45.390Z] [BOT] 💾 Marked as posted: Software Engineer – New College Graduate @ ORG_2b380db8 (instance #1)
[2026-01-16T06:50:45.390Z] [BOT] 💾 BEFORE ARCHIVING: 1953 jobs in database
[2026-01-16T06:50:45.392Z] [BOT] ✅ No jobs to archive (all 1953 jobs within 7-day window)
[2026-01-16T06:50:45.408Z] [BOT] 💾 Saved posted_jobs.json: 1953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:50:45.408Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_e5ca4df3 Group
   Category: TECH (matched: "software")
[2026-01-16T06:50:45.408Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:45.645Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
[2026-01-16T06:50:45.645Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_e5ca4df3 Group
[2026-01-16T06:50:47.363Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e5ca4df3 Group in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T06:50:48.865Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_e5ca4df3 Group (instance #1)
💾 BEFORE ARCHIVING: 1954 jobs in database
[2026-01-16T06:50:48.867Z] [BOT] ✅ No jobs to archive (all 1954 jobs within 7-day window)
[2026-01-16T06:50:48.879Z] [BOT] 💾 Saved posted_jobs.json: 1954 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:50:48.879Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5b56d21e
   Category: TECH (matched: "software")
[2026-01-16T06:50:48.880Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:49.076Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5b56d21e in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_5b56d21e
[2026-01-16T06:50:50.780Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5b56d21e in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T06:50:52.281Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_5b56d21e (instance #1)
[2026-01-16T06:50:52.281Z] [BOT] 💾 BEFORE ARCHIVING: 1955 jobs in database
[2026-01-16T06:50:52.282Z] [BOT] ✅ No jobs to archive (all 1955 jobs within 7-day window)
[2026-01-16T06:50:52.297Z] [BOT] 💾 Saved posted_jobs.json: 1955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:50:52.299Z] [BOT] 📍 [ROUTING] "Cloud Support Engineer I (Support Response)" @ ORG_862a3f0f
   Category: TECH (matched: "engineer/engineering")
[2026-01-16T06:50:52.299Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:52.486Z] [BOT] ✅ Created forum post: 🏢 Cloud Support Engineer I (Support Response) @ ORG_862a3f0f in #💻・tech-jobs
[2026-01-16T06:50:52.486Z] [BOT] ✅ Industry: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f
[2026-01-16T06:50:54.317Z] [BOT] ✅ Created forum post: 🏢 Cloud Support Engineer I (Support Response) @ ORG_862a3f0f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:50:55.819Z] [BOT] 💾 Marked as posted: Cloud Support Engineer I (Support Response) @ ORG_862a3f0f (instance #1)
[2026-01-16T06:50:55.819Z] [BOT] 💾 BEFORE ARCHIVING: 1956 jobs in database
[2026-01-16T06:50:55.820Z] [BOT] ✅ No jobs to archive (all 1956 jobs within 7-day window)
[2026-01-16T06:50:55.836Z] [BOT] 💾 Saved posted_jobs.json: 1956 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:50:55.837Z] [BOT] 📍 [ROUTING] "Analyst, Data & Software Engineering" @ ORG_82e4502a Group
[2026-01-16T06:50:55.837Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:56.021Z] [BOT] ✅ Created forum post: 🏢 Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・tech-jobs
  ✅ Industry: Analyst, Data & Software Engineering @ ORG_82e4502a Group
[2026-01-16T06:50:58.034Z] [BOT] ✅ Created forum post: 🏢 Analyst, Data & Software Engineering @ ORG_82e4502a Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:50:59.536Z] [BOT] 💾 Marked as posted: Analyst, Data & Software Engineering @ ORG_82e4502a Group (instance #1)
💾 BEFORE ARCHIVING: 1957 jobs in database
[2026-01-16T06:50:59.537Z] [BOT] ✅ No jobs to archive (all 1957 jobs within 7-day window)
[2026-01-16T06:50:59.550Z] [BOT] 💾 Saved posted_jobs.json: 1957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:50:59.551Z] [BOT] 📍 [ROUTING] "Analyst Rotational Program – Software Engineering" @ ORG_b6a51c2a
[2026-01-16T06:50:59.551Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T06:50:59.891Z] [BOT] ✅ Created forum post: 🏢 Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a in #💻・tech-jobs
  ✅ Industry: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a
[2026-01-16T06:51:01.871Z] [BOT] ✅ Created forum post: 🏢 Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a in #🗽・new-york
[2026-01-16T06:51:01.871Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T06:51:03.372Z] [BOT] 💾 Marked as posted: Analyst Rotational Program – Software Engineering @ ORG_b6a51c2a (instance #1)
[2026-01-16T06:51:03.372Z] [BOT] 💾 BEFORE ARCHIVING: 1958 jobs in database
[2026-01-16T06:51:03.374Z] [BOT] ✅ No jobs to archive (all 1958 jobs within 7-day window)
[2026-01-16T06:51:03.388Z] [BOT] 💾 Saved posted_jobs.json: 1958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:51:06.390Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T06:51:06.390Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-16T06:51:06.390Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T06:51:06.674Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-16T06:51:08.343Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-16T06:51:08.343Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T06:51:09.844Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-16T06:51:09.844Z] [BOT] 💾 BEFORE ARCHIVING: 1959 jobs in database
[2026-01-16T06:51:09.845Z] [BOT] ✅ No jobs to archive (all 1959 jobs within 7-day window)
[2026-01-16T06:51:09.858Z] [BOT] 💾 Saved posted_jobs.json: 1959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:51:09.858Z] [BOT] 📍 [ROUTING] "Data Science Engineer" @ ORG_c9453059 Berkley
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T06:51:09.858Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T06:51:10.182Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer @ ORG_c9453059 Berkley in #🤖・ai-jobs
[2026-01-16T06:51:10.182Z] [BOT] ✅ Industry: Data Science Engineer @ ORG_c9453059 Berkley
[2026-01-16T06:51:12.421Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer @ ORG_c9453059 Berkley in #💻・remote-usa
[2026-01-16T06:51:12.422Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T06:51:13.922Z] [BOT] 💾 Marked as posted: Data Science Engineer @ ORG_c9453059 Berkley (instance #1)
[2026-01-16T06:51:13.922Z] [BOT] 💾 BEFORE ARCHIVING: 1960 jobs in database
[2026-01-16T06:51:13.923Z] [BOT] ✅ No jobs to archive (all 1960 jobs within 7-day window)
[2026-01-16T06:51:13.938Z] [BOT] 💾 Saved posted_jobs.json: 1960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:51:13.938Z] [BOT] 📍 [ROUTING] "Data/Ai Engineer Intern" @ ORG_9fbbe982 Global
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T06:51:13.938Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T06:51:14.189Z] [BOT] ✅ Created forum post: 🏢 Data/Ai Engineer Intern @ ORG_9fbbe982 Global in #🤖・ai-jobs
  ✅ Industry: Data/Ai Engineer Intern @ ORG_9fbbe982 Global
[2026-01-16T06:51:15.907Z] [BOT] ✅ Created forum post: 🏢 Data/Ai Engineer Intern @ ORG_9fbbe982 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T06:51:17.407Z] [BOT] 💾 Marked as posted: Data/Ai Engineer Intern @ ORG_9fbbe982 Global (instance #1)
[2026-01-16T06:51:17.407Z] [BOT] 💾 BEFORE ARCHIVING: 1961 jobs in database
[2026-01-16T06:51:17.408Z] [BOT] ✅ No jobs to archive (all 1961 jobs within 7-day window)
[2026-01-16T06:51:17.423Z] [BOT] 💾 Saved posted_jobs.json: 1961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:51:20.423Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T06:51:20.424Z] [BOT] 📍 [ROUTING] "Graduate Engineering Program" @ ORG_6ba43877 Strategies
[2026-01-16T06:51:20.424Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T06:51:20.724Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineering Program @ ORG_6ba43877 Strategies in #📈・JID_fb739488
  ✅ Industry: Graduate Engineering Program @ ORG_6ba43877 Strategies
[2026-01-16T06:51:22.527Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineering Program @ ORG_6ba43877 Strategies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T06:51:24.029Z] [BOT] 💾 Marked as posted: Graduate Engineering Program @ ORG_6ba43877 Strategies (instance #1)
[2026-01-16T06:51:24.029Z] [BOT] 💾 BEFORE ARCHIVING: 1962 jobs in database
[2026-01-16T06:51:24.030Z] [BOT] ✅ No jobs to archive (all 1962 jobs within 7-day window)
[2026-01-16T06:51:24.043Z] [BOT] 💾 Saved posted_jobs.json: 1962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T06:51:27.045Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T06:51:27.045Z] [BOT] ⏭️  Skipping duplicate: JID_aa2bd70e (posted within 7 days)
[2026-01-16T06:51:27.045Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ced046c2-engineer_r160133 (posted within 7 days)
[2026-01-16T06:51:27.046Z] [BOT] ⏭️  Skipping duplicate: JID_6e0739e9-program_r12714 (posted within 7 days)
[2026-01-16T06:51:27.046Z] [BOT] ⏭️  Skipping duplicate: JID_fd945994 (posted within 7 days)
[2026-01-16T06:51:27.046Z] [BOT] ⏭️  Skipping duplicate: JID_30b1dfd1-ca_r37014-1 (posted within 7 days)
[2026-01-16T06:51:27.046Z] [BOT] ⏭️  Skipping duplicate: JID_c9acf132-jade_careers-JID_74480211-intern_r-103685 (posted within 7 days)
[2026-01-16T06:51:27.046Z] [BOT] ⏭️  Skipping duplicate: JID_a62d7775 (posted within 7 days)
[2026-01-16T06:51:27.047Z] [BOT] ⏭️  Skipping duplicate: JID_3182d2ed (posted within 7 days)
[2026-01-16T06:51:27.047Z] [BOT] ⏭️  Skipping duplicate: JID_c6d53b25-date_jr100120 (posted within 7 days)
[2026-01-16T06:51:27.047Z] [BOT] ⏭️  Skipping duplicate: JID_2a8b22bb-td_bank_careers-JID_fe9e45f5-engineering_r_1446300 (posted within 7 days)
[2026-01-16T06:51:27.201Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-16T06:51:27.370Z] [BOT] ✅ Saved pending queue: 2765 total (2745 pending, 10 enriched, 10 posted)
[2026-01-16T06:51:27.370Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T06:51:27.430Z] [BOT] 📂 Loaded 4175 existing routing entries
[2026-01-16T06:51:27.492Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T06:51:27.492Z] [BOT] Total entries: 4185
   Timestamp: 2026-01-16T06:51:27.478Z
[2026-01-16T06:51:27.493Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T06:51:27.493Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-16T06:51:27.493Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T06:51:27.493Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
[2026-01-16T06:51:27.493Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🦢・los-angeles: 3 posts
     4. #🤖・ai-jobs: 3 posts
     5. #🗽・new-york: 1 posts
[2026-01-16T06:51:27.493Z] [BOT] [STATS] Channel stats saved
[2026-01-16T06:51:29.514Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3932) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer – New College Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New College Graduate
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*