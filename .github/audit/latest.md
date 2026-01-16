# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T08:29:52.526Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T08:29:04.908Z] ========================================
[2026-01-16T08:29:04.909Z] Discord Bot Execution Log
[2026-01-16T08:29:04.910Z] Environment: GitHub Actions
[2026-01-16T08:29:04.910Z] Node Version: v20.19.6
[2026-01-16T08:29:04.910Z] ========================================
[2026-01-16T08:29:04.910Z] Environment Variables Check:
[2026-01-16T08:29:04.910Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T08:29:04.910Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.910Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T08:29:04.910Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T08:29:04.910Z] 
Multi-Channel Configuration:
[2026-01-16T08:29:04.910Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T08:29:04.911Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T08:29:04.911Z] 
Data Files Check:
[2026-01-16T08:29:04.912Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56895 bytes)
[2026-01-16T08:29:04.919Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1079119 bytes)
[2026-01-16T08:29:04.920Z] 
========================================
[2026-01-16T08:29:04.920Z] Starting Enhanced Discord Bot...
[2026-01-16T08:29:04.920Z] ========================================
[2026-01-16T08:29:05.447Z] [BOT] ✅ Loaded V2 database: 2001 jobs
[2026-01-16T08:29:06.549Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T08:29:06.550Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T08:29:06.550Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T08:29:06.662Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Reference Data Analyst Junior at Citi
[2026-01-16T08:29:06.664Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T08:29:06.665Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T08:29:06.665Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T08:29:06.666Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T08:29:06.666Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Mission Operations Engineer @ nominal: new york, austin
   - Associate, Software Engineer @ Epsilon: irving, chicago
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T08:29:06.666Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T08:29:06.669Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T08:29:06.670Z] [BOT] 📍 [ROUTING] "Reference Data Analyst Junior" @ ORG_e9591c52
[2026-01-16T08:29:06.670Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T08:29:06.687Z] [BOT ERROR] (node:2905) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T08:29:06.854Z] [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Reference Data Analyst Junior @ Citi',
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
[2026-01-16T08:29:06.854Z] [BOT] ❌ Industry post failed: Reference Data Analyst Junior
⚠️  Channel full error count: 1/5
[2026-01-16T08:29:08.492Z] [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Reference Data Analyst Junior @ Citi',
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
[2026-01-16T08:29:08.492Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T08:29:09.992Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_10cc9416
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T08:29:09.993Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T08:29:10.171Z] [BOT] ✅ Created forum post: 🏢 Data Engineer I @ ORG_10cc9416 in #📈・JID_fb739488
[2026-01-16T08:29:10.171Z] [BOT] ✅ Industry: Data Engineer I @ ORG_10cc9416
[2026-01-16T08:29:11.904Z] [BOT] ✅ Created forum post: 🏢 Data Engineer I @ ORG_10cc9416 in #💻・remote-usa
[2026-01-16T08:29:11.904Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T08:29:13.406Z] [BOT] 💾 Marked as posted: Data Engineer I @ ORG_10cc9416 (instance #1)
[2026-01-16T08:29:13.407Z] [BOT] 💾 BEFORE ARCHIVING: 2002 jobs in database
[2026-01-16T08:29:13.408Z] [BOT] ✅ No jobs to archive (all 2002 jobs within 7-day window)
[2026-01-16T08:29:13.426Z] [BOT] 💾 Saved posted_jobs.json: 2002 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:16.427Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T08:29:16.428Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-16T08:29:16.429Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T08:29:16.429Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T08:29:16.708Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Mission Operations Engineer @ nominal
[2026-01-16T08:29:18.541Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T08:29:20.042Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
[2026-01-16T08:29:20.042Z] [BOT] 💾 BEFORE ARCHIVING: 2003 jobs in database
[2026-01-16T08:29:20.044Z] [BOT] ✅ No jobs to archive (all 2003 jobs within 7-day window)
[2026-01-16T08:29:20.062Z] [BOT] 💾 Saved posted_jobs.json: 2003 active jobs
[2026-01-16T08:29:20.063Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:20.063Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
💾 BEFORE ARCHIVING: 2004 jobs in database
[2026-01-16T08:29:20.065Z] [BOT] ✅ No jobs to archive (all 2004 jobs within 7-day window)
[2026-01-16T08:29:20.078Z] [BOT] 💾 Saved posted_jobs.json: 2004 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:20.079Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_19887ac7
[2026-01-16T08:29:20.079Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T08:29:20.290Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_19887ac7 in #🤖・ai-jobs
[2026-01-16T08:29:20.290Z] [BOT] ✅ Industry: Software Engineer @ ORG_19887ac7
[2026-01-16T08:29:22.006Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_19887ac7 in #🗽・new-york
[2026-01-16T08:29:22.006Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T08:29:23.507Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_19887ac7 (instance #1)
[2026-01-16T08:29:23.507Z] [BOT] 💾 BEFORE ARCHIVING: 2005 jobs in database
[2026-01-16T08:29:23.508Z] [BOT] ✅ No jobs to archive (all 2005 jobs within 7-day window)
[2026-01-16T08:29:23.521Z] [BOT] 💾 Saved posted_jobs.json: 2005 active jobs
[2026-01-16T08:29:23.521Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:23.522Z] [BOT] 📍 [ROUTING] "Product Designer" @ nominal
[2026-01-16T08:29:23.523Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T08:29:23.759Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ nominal in #🤖・ai-jobs
[2026-01-16T08:29:23.759Z] [BOT] ✅ Industry: Product Designer @ nominal
[2026-01-16T08:29:25.499Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ nominal in #🦢・los-angeles
[2026-01-16T08:29:25.499Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T08:29:27.001Z] [BOT] 💾 Marked as posted: Product Designer @ nominal (instance #1)
[2026-01-16T08:29:27.001Z] [BOT] 💾 BEFORE ARCHIVING: 2006 jobs in database
[2026-01-16T08:29:27.002Z] [BOT] ✅ No jobs to archive (all 2006 jobs within 7-day window)
[2026-01-16T08:29:27.017Z] [BOT] 💾 Saved posted_jobs.json: 2006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:30.018Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T08:29:30.019Z] [BOT] 📍 [ROUTING] "Backend Engineer" @ clerk
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:29:30.391Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ clerk in #💻・tech-jobs
  ✅ Industry: Backend Engineer @ clerk
[2026-01-16T08:29:31.893Z] [BOT] 💾 Marked as posted: Backend Engineer @ clerk (instance #1)
[2026-01-16T08:29:31.894Z] [BOT] 💾 BEFORE ARCHIVING: 2007 jobs in database
[2026-01-16T08:29:31.895Z] [BOT] ✅ No jobs to archive (all 2007 jobs within 7-day window)
[2026-01-16T08:29:31.908Z] [BOT] 💾 Saved posted_jobs.json: 2007 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:31.909Z] [BOT] 📍 [ROUTING] "Engineer 1 - Full Stack, Store POS+" @ ORG_2d67c3be
[2026-01-16T08:29:31.909Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:29:32.077Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be in #💻・tech-jobs
[2026-01-16T08:29:32.077Z] [BOT] ✅ Industry: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be
[2026-01-16T08:29:33.741Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be in #🌧️・seattle
[2026-01-16T08:29:33.742Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-16T08:29:35.241Z] [BOT] 💾 Marked as posted: Engineer 1 - Full Stack, Store POS+ @ ORG_2d67c3be (instance #1)
[2026-01-16T08:29:35.242Z] [BOT] 💾 BEFORE ARCHIVING: 2008 jobs in database
[2026-01-16T08:29:35.243Z] [BOT] ✅ No jobs to archive (all 2008 jobs within 7-day window)
[2026-01-16T08:29:35.257Z] [BOT] 💾 Saved posted_jobs.json: 2008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:35.257Z] [BOT] 📍 [ROUTING] "Cybersecurity Analyst" @ ORG_4f23798d Street
[2026-01-16T08:29:35.257Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:29:35.481Z] [BOT] ✅ Created forum post: 🏢 Cybersecurity Analyst @ ORG_4f23798d Street in #💻・tech-jobs
[2026-01-16T08:29:35.481Z] [BOT] ✅ Industry: Cybersecurity Analyst @ ORG_4f23798d Street
[2026-01-16T08:29:37.388Z] [BOT] ✅ Created forum post: 🏢 Cybersecurity Analyst @ ORG_4f23798d Street in #🗽・new-york
[2026-01-16T08:29:37.389Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T08:29:38.889Z] [BOT] 💾 Marked as posted: Cybersecurity Analyst @ ORG_4f23798d Street (instance #1)
[2026-01-16T08:29:38.889Z] [BOT] 💾 BEFORE ARCHIVING: 2009 jobs in database
[2026-01-16T08:29:38.890Z] [BOT] ✅ No jobs to archive (all 2009 jobs within 7-day window)
[2026-01-16T08:29:38.903Z] [BOT] 💾 Saved posted_jobs.json: 2009 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:38.903Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer" @ ORG_12af02bd
[2026-01-16T08:29:38.903Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:29:39.198Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_12af02bd in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Engineer @ ORG_12af02bd
[2026-01-16T08:29:41.127Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer @ ORG_12af02bd in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T08:29:42.628Z] [BOT] 💾 Marked as posted: Entry-Level Software Engineer @ ORG_12af02bd (instance #1)
[2026-01-16T08:29:42.628Z] [BOT] 💾 BEFORE ARCHIVING: 2010 jobs in database
[2026-01-16T08:29:42.629Z] [BOT] ✅ No jobs to archive (all 2010 jobs within 7-day window)
[2026-01-16T08:29:42.642Z] [BOT] 💾 Saved posted_jobs.json: 2010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:42.642Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
[2026-01-16T08:29:42.642Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T08:29:42.856Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-01-16T08:29:44.584Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T08:29:46.085Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7b717950 (instance #1)
[2026-01-16T08:29:46.085Z] [BOT] 💾 BEFORE ARCHIVING: 2011 jobs in database
[2026-01-16T08:29:46.086Z] [BOT] ✅ No jobs to archive (all 2011 jobs within 7-day window)
[2026-01-16T08:29:46.098Z] [BOT] 💾 Saved posted_jobs.json: 2011 active jobs
[2026-01-16T08:29:46.099Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T08:29:49.099Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T08:29:49.099Z] [BOT] ⏭️  Skipping duplicate: JID_47c4946b (posted within 7 days)
[2026-01-16T08:29:49.099Z] [BOT] ⏭️  Skipping duplicate: JID_d56c9495 (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_f451c4d9 (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_68ae8249 (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_939a38e1 (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_32ded7ff (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_b8e1326e (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_4b7fae1b (posted within 7 days)
[2026-01-16T08:29:49.100Z] [BOT] ⏭️  Skipping duplicate: JID_1efeee05 (posted within 7 days)
[2026-01-16T08:29:49.210Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-16T08:29:49.382Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 11 enriched, 9 posted)
[2026-01-16T08:29:49.382Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T08:29:49.439Z] [BOT] 📂 Loaded 4225 existing routing entries
[2026-01-16T08:29:49.504Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T08:29:49.504Z] [BOT] Total entries: 4235
   Timestamp: 2026-01-16T08:29:49.486Z
[2026-01-16T08:29:49.505Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T08:29:49.505Z] [BOT] Total attempts: 19
   Successful: 17
   Failed: 2
   Skipped: 0
[2026-01-16T08:29:49.505Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T08:29:49.505Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-16T08:29:49.505Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・new-york: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-16T08:29:49.505Z] [BOT] [STATS] Channel stats saved
[2026-01-16T08:29:51.531Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2905) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Reference Data Analyst Junior
- [BOT ERROR] ❌ Error posting job Reference Data Analyst Junior: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*