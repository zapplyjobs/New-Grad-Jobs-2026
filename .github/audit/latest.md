# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T22:09:43.757Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T22:08:50.384Z] ========================================
[2026-01-16T22:08:50.386Z] Discord Bot Execution Log
[2026-01-16T22:08:50.386Z] Environment: GitHub Actions
[2026-01-16T22:08:50.386Z] Node Version: v20.19.6
[2026-01-16T22:08:50.386Z] ========================================
[2026-01-16T22:08:50.386Z] Environment Variables Check:
[2026-01-16T22:08:50.386Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T22:08:50.386Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.386Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T22:08:50.386Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T22:08:50.387Z] 
Multi-Channel Configuration:
[2026-01-16T22:08:50.387Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T22:08:50.387Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T22:08:50.387Z] 
Data Files Check:
[2026-01-16T22:08:50.388Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44223 bytes)
[2026-01-16T22:08:50.397Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1162840 bytes)
[2026-01-16T22:08:50.397Z] 
========================================
[2026-01-16T22:08:50.397Z] Starting Enhanced Discord Bot...
[2026-01-16T22:08:50.397Z] ========================================
[2026-01-16T22:08:50.859Z] [BOT] ✅ Loaded V2 database: 2144 jobs
[2026-01-16T22:08:52.222Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T22:08:52.223Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T22:08:52.223Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T22:08:52.368Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Graduate - E-Commerce Governance - BS/MS at ByteDance
[2026-01-16T22:08:52.371Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T22:08:52.371Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T22:08:52.371Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T22:08:52.372Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T22:08:52.372Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T22:08:52.372Z] [BOT] - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T22:08:52.376Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-16T22:08:52.377Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - E-Commerce Governance - BS/MS" @ ORG_08c9a13c
[2026-01-16T22:08:52.377Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T22:08:52.377Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:08:52.393Z] [BOT ERROR] (node:3266) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T22:08:52.546Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ByteDance',
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
[2026-01-16T22:08:52.546Z] [BOT] ❌ Industry post failed: Machine Learning Graduate - E-Commerce Governance - BS/MS
⚠️  Channel full error count: 1/5
[2026-01-16T22:08:54.219Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T22:08:55.719Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c (instance #1)
[2026-01-16T22:08:55.720Z] [BOT] 💾 BEFORE ARCHIVING: 2145 jobs in database
[2026-01-16T22:08:55.721Z] [BOT] ✅ No jobs to archive (all 2145 jobs within 7-day window)
[2026-01-16T22:08:55.737Z] [BOT] 💾 Saved posted_jobs.json: 2145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:08:55.738Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - Ecommerce Recommendation - 2026 Start" @ ORG_08c9a13c
[2026-01-16T22:08:55.738Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:08:56.141Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c
[2026-01-16T22:08:58.032Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T22:08:59.532Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-16T22:08:59.532Z] [BOT] 💾 BEFORE ARCHIVING: 2146 jobs in database
[2026-01-16T22:08:59.534Z] [BOT] ✅ No jobs to archive (all 2146 jobs within 7-day window)
[2026-01-16T22:08:59.546Z] [BOT] 💾 Saved posted_jobs.json: 2146 active jobs
[2026-01-16T22:08:59.546Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:08:59.547Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 2147 jobs in database
[2026-01-16T22:08:59.548Z] [BOT] ✅ No jobs to archive (all 2147 jobs within 7-day window)
[2026-01-16T22:08:59.559Z] [BOT] 💾 Saved posted_jobs.json: 2147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:08:59.560Z] [BOT] 📍 [ROUTING] "Data Analyst - Product & Marketing" @ ORG_b344d80e League
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T22:09:01.241Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Product & Marketing @ ORG_b344d80e League in #🤖・ai-jobs
[2026-01-16T22:09:01.241Z] [BOT] ✅ Industry: Data Analyst - Product & Marketing @ ORG_b344d80e League
[2026-01-16T22:09:02.743Z] [BOT] 💾 Marked as posted: Data Analyst - Product & Marketing @ ORG_b344d80e League (instance #1)
[2026-01-16T22:09:02.743Z] [BOT] 💾 BEFORE ARCHIVING: 2148 jobs in database
[2026-01-16T22:09:02.745Z] [BOT] ✅ No jobs to archive (all 2148 jobs within 7-day window)
[2026-01-16T22:09:02.760Z] [BOT] 💾 Saved posted_jobs.json: 2148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:02.762Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2026-01-16T22:09:02.762Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:09:03.158Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2026-01-16T22:09:04.834Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:09:06.335Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 2149 jobs in database
[2026-01-16T22:09:06.336Z] [BOT] ✅ No jobs to archive (all 2149 jobs within 7-day window)
[2026-01-16T22:09:06.351Z] [BOT] 💾 Saved posted_jobs.json: 2149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:06.352Z] [BOT] 📍 [ROUTING] "Computer Science Postdoctoral Fellow" @ ORG_0baaf6f2 University
[2026-01-16T22:09:06.352Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-16T22:09:06.353Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T22:09:06.608Z] [BOT] ✅ Created forum post: 🏢 Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University in #🤖・ai-jobs
  ✅ Industry: Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University
[2026-01-16T22:09:08.318Z] [BOT] ✅ Created forum post: 🏢 Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University in #💻・remote-usa
[2026-01-16T22:09:08.318Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T22:09:09.820Z] [BOT] 💾 Marked as posted: Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University (instance #1)
[2026-01-16T22:09:09.820Z] [BOT] 💾 BEFORE ARCHIVING: 2150 jobs in database
[2026-01-16T22:09:09.822Z] [BOT] ✅ No jobs to archive (all 2150 jobs within 7-day window)
[2026-01-16T22:09:09.834Z] [BOT] 💾 Saved posted_jobs.json: 2150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:12.835Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-16T22:09:12.836Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-16T22:09:12.836Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T22:09:13.384Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2026-01-16T22:09:15.080Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:09:16.582Z] [BOT] 💾 Marked as posted: Entry Level Business/Data Analyst @ 360 IT Professionals (instance #1)
[2026-01-16T22:09:16.582Z] [BOT] 💾 BEFORE ARCHIVING: 2151 jobs in database
[2026-01-16T22:09:16.583Z] [BOT] ✅ No jobs to archive (all 2151 jobs within 7-day window)
[2026-01-16T22:09:16.598Z] [BOT] 💾 Saved posted_jobs.json: 2151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:16.598Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1 - WA" @ ORG_52575429 Consulting
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-16T22:09:16.599Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T22:09:16.809Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #📈・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting
[2026-01-16T22:09:18.696Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T22:09:20.197Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting (instance #1)
💾 BEFORE ARCHIVING: 2152 jobs in database
[2026-01-16T22:09:20.199Z] [BOT] ✅ No jobs to archive (all 2152 jobs within 7-day window)
[2026-01-16T22:09:20.212Z] [BOT] 💾 Saved posted_jobs.json: 2152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:23.213Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-16T22:09:23.213Z] [BOT] 📍 [ROUTING] "Data Security Analyst - Cisco Certified - Linux" @ 360 IT Professionals
   Category: TECH (matched: "data")
[2026-01-16T22:09:23.213Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:09:23.533Z] [BOT] ✅ Created forum post: 🏢 Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals
[2026-01-16T22:09:25.418Z] [BOT] ✅ Created forum post: 🏢 Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:09:26.919Z] [BOT] 💾 Marked as posted: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals (instance #1)
💾 BEFORE ARCHIVING: 2153 jobs in database
[2026-01-16T22:09:26.921Z] [BOT] ✅ No jobs to archive (all 2153 jobs within 7-day window)
[2026-01-16T22:09:26.934Z] [BOT] 💾 Saved posted_jobs.json: 2153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:26.934Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-16T22:09:26.934Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:09:27.189Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c
[2026-01-16T22:09:29.127Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T22:09:30.627Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 2154 jobs in database
[2026-01-16T22:09:30.629Z] [BOT] ✅ No jobs to archive (all 2154 jobs within 7-day window)
[2026-01-16T22:09:30.645Z] [BOT] 💾 Saved posted_jobs.json: 2154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:33.646Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T22:09:33.648Z] [BOT] 📍 [ROUTING] "Analyst 2 - Technical Analysis" @ ORG_52575429 Consulting
[2026-01-16T22:09:33.648Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T22:09:33.939Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #💲・sales-jobs
  ✅ Industry: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting
[2026-01-16T22:09:35.771Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:09:37.272Z] [BOT] 💾 Marked as posted: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting (instance #1)
[2026-01-16T22:09:37.273Z] [BOT] 💾 BEFORE ARCHIVING: 2155 jobs in database
[2026-01-16T22:09:37.275Z] [BOT] ✅ No jobs to archive (all 2155 jobs within 7-day window)
[2026-01-16T22:09:37.289Z] [BOT] 💾 Saved posted_jobs.json: 2155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:09:40.289Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T22:09:40.289Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_91a528d1-detail (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e31f99b5-detail (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_69e1bbf2 (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f2b79517 (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_8b5d8daf-fellow_r1839 (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_731e0868 (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_033a2d3b (posted within 7 days)
⏭️  Skipping duplicate: JID_46e0260f (posted within 7 days)
[2026-01-16T22:09:40.290Z] [BOT] ⏭️  Skipping duplicate: JID_147cd798 (posted within 7 days)
[2026-01-16T22:09:40.292Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2afd3302-detail (posted within 7 days)
[2026-01-16T22:09:40.433Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[2026-01-16T22:09:40.595Z] [BOT] ✅ Saved pending queue: 2784 total (2764 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T22:09:40.595Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T22:09:40.655Z] [BOT] 📂 Loaded 4375 existing routing entries
[2026-01-16T22:09:40.718Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4385
[2026-01-16T22:09:40.718Z] [BOT] Timestamp: 2026-01-16T22:09:40.702Z
[2026-01-16T22:09:40.718Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 19
[2026-01-16T22:09:40.718Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-16T22:09:40.718Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T22:09:40.719Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌧️・seattle: 4 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・remote-usa: 2 posts
[2026-01-16T22:09:40.719Z] [BOT] 5. #📈・JID_fb739488: 2 posts
[2026-01-16T22:09:40.719Z] [BOT] [STATS] Channel stats saved
[2026-01-16T22:09:42.737Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3266) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Graduate - E-Commerce Governance - BS/MS
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*