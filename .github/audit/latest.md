# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T05:42:13.262Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T05:41:23.671Z] ========================================
[2026-01-17T05:41:23.673Z] Discord Bot Execution Log
[2026-01-17T05:41:23.673Z] Environment: GitHub Actions
[2026-01-17T05:41:23.673Z] Node Version: v20.19.6
[2026-01-17T05:41:23.673Z] ========================================
[2026-01-17T05:41:23.673Z] Environment Variables Check:
[2026-01-17T05:41:23.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T05:41:23.673Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T05:41:23.673Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T05:41:23.673Z] 
Multi-Channel Configuration:
[2026-01-17T05:41:23.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T05:41:23.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T05:41:23.674Z] 
Data Files Check:
[2026-01-17T05:41:23.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7665 bytes)
[2026-01-17T05:41:23.683Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1235218 bytes)
[2026-01-17T05:41:23.683Z] 
========================================
[2026-01-17T05:41:23.683Z] Starting Enhanced Discord Bot...
[2026-01-17T05:41:23.683Z] ========================================
[2026-01-17T05:41:24.212Z] [BOT] ✅ Loaded V2 database: 2281 jobs
[2026-01-17T05:41:25.002Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T05:41:25.002Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T05:41:25.002Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T05:41:25.119Z] [BOT] ✅ Loaded pending queue: 2878 total (2858 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineer Graduate: - Machine Learning Engineer - Local Services Search at TikTok
[2026-01-17T05:41:25.121Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T05:41:25.122Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T05:41:25.122Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T05:41:25.123Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T05:41:25.123Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T05:41:25.127Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-17T05:41:25.128Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2026-01-17T05:41:25.128Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:25.144Z] [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T05:41:25.285Z] [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok',
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
[2026-01-17T05:41:25.285Z] [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Local Services Search
⚠️  Channel full error count: 1/5
[2026-01-17T05:41:27.106Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:41:27.106Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:28.607Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:28.607Z] [BOT] 💾 BEFORE ARCHIVING: 2282 jobs in database
[2026-01-17T05:41:28.609Z] [BOT] ✅ No jobs to archive (all 2282 jobs within 7-day window)
[2026-01-17T05:41:28.658Z] [BOT] 💾 Saved posted_jobs.json: 2282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:28.659Z] [BOT] 📍 [ROUTING] "Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD" @ ORG_1bb6fcfb
[2026-01-17T05:41:28.659Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:41:28.659Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:28.859Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start  in #🤖・ai-jobs
[2026-01-17T05:41:28.859Z] [BOT] ✅ Industry: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb
[2026-01-17T05:41:30.553Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start  in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:41:32.054Z] [BOT] 💾 Marked as posted: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:32.054Z] [BOT] 💾 BEFORE ARCHIVING: 2283 jobs in database
[2026-01-17T05:41:32.056Z] [BOT] ✅ No jobs to archive (all 2283 jobs within 7-day window)
[2026-01-17T05:41:32.068Z] [BOT] 💾 Saved posted_jobs.json: 2283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:32.069Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T05:41:32.069Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:32.259Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb
[2026-01-17T05:41:34.035Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:41:34.035Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:35.536Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:35.536Z] [BOT] 💾 BEFORE ARCHIVING: 2284 jobs in database
[2026-01-17T05:41:35.538Z] [BOT] ✅ No jobs to archive (all 2284 jobs within 7-day window)
[2026-01-17T05:41:35.555Z] [BOT] 💾 Saved posted_jobs.json: 2284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:35.556Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
[2026-01-17T05:41:35.556Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T05:41:35.556Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:35.823Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2026-01-17T05:41:37.526Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:41:39.027Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:39.027Z] [BOT] 💾 BEFORE ARCHIVING: 2285 jobs in database
[2026-01-17T05:41:39.028Z] [BOT] ✅ No jobs to archive (all 2285 jobs within 7-day window)
[2026-01-17T05:41:39.045Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:39.046Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD" @ ORG_1bb6fcfb
[2026-01-17T05:41:39.046Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:39.495Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_e632b709in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb
[2026-01-17T05:41:41.170Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_e632b709in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:42.670Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:42.670Z] [BOT] 💾 BEFORE ARCHIVING: 2286 jobs in database
[2026-01-17T05:41:42.672Z] [BOT] ✅ No jobs to archive (all 2286 jobs within 7-day window)
[2026-01-17T05:41:42.686Z] [BOT] 💾 Saved posted_jobs.json: 2286 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:42.687Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS" @ ORG_1bb6fcfb
[2026-01-17T05:41:42.687Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:41:43.077Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb
[2026-01-17T05:41:44.768Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:41:44.769Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:46.269Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:46.269Z] [BOT] 💾 BEFORE ARCHIVING: 2287 jobs in database
[2026-01-17T05:41:46.271Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-01-17T05:41:46.287Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:49.287Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-17T05:41:49.288Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:41:49.510Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Algorithm Engineer @ ORG_1bb6fcfb
[2026-01-17T05:41:51.233Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:52.734Z] [BOT] 💾 Marked as posted: Graduate Algorithm Engineer @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:52.734Z] [BOT] 💾 BEFORE ARCHIVING: 2288 jobs in database
[2026-01-17T05:41:52.735Z] [BOT] ✅ No jobs to archive (all 2288 jobs within 7-day window)
[2026-01-17T05:41:52.753Z] [BOT] 💾 Saved posted_jobs.json: 2288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:52.753Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T05:41:52.754Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:41:52.937Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T05:41:52.937Z] [BOT] ✅ Industry: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb
[2026-01-17T05:41:54.787Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:41:54.787Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:41:56.288Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:41:56.289Z] [BOT] 💾 BEFORE ARCHIVING: 2289 jobs in database
[2026-01-17T05:41:56.290Z] [BOT] ✅ No jobs to archive (all 2289 jobs within 7-day window)
[2026-01-17T05:41:56.305Z] [BOT] 💾 Saved posted_jobs.json: 2289 active jobs
[2026-01-17T05:41:56.305Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:41:59.306Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-17T05:41:59.307Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Multiple Teams" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:41:59.615Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb
[2026-01-17T05:42:01.695Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:42:01.695Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:42:03.197Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:42:03.197Z] [BOT] 💾 BEFORE ARCHIVING: 2290 jobs in database
[2026-01-17T05:42:03.198Z] [BOT] ✅ No jobs to archive (all 2290 jobs within 7-day window)
[2026-01-17T05:42:03.214Z] [BOT] 💾 Saved posted_jobs.json: 2290 active jobs
[2026-01-17T05:42:03.215Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:42:03.215Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - BS/MS" @ ORG_1bb6fcfb
[2026-01-17T05:42:03.215Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:42:03.429Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb
[2026-01-17T05:42:05.072Z] [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Science Graduate - Advertisement Team - BS/MS @ TikTok',
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
[2026-01-17T05:42:05.072Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T05:42:06.574Z] [BOT] 💾 Marked as posted: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:42:06.574Z] [BOT] 💾 BEFORE ARCHIVING: 2291 jobs in database
[2026-01-17T05:42:06.575Z] [BOT] ✅ No jobs to archive (all 2291 jobs within 7-day window)
[2026-01-17T05:42:06.589Z] [BOT] 💾 Saved posted_jobs.json: 2291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:42:09.591Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T05:42:09.591Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9e609b2f (posted within 7 days)
[2026-01-17T05:42:09.591Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6ef6fdf8 (posted within 7 days)
[2026-01-17T05:42:09.592Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_5e88383a (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_049fadae (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_0fb3e517 (posted within 7 days)
[2026-01-17T05:42:09.592Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f78a57c6 (posted within 7 days)
[2026-01-17T05:42:09.592Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f53d6e78 (posted within 7 days)
[2026-01-17T05:42:09.592Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_4edc014c (posted within 7 days)
[2026-01-17T05:42:09.592Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05d72209 (posted within 7 days)
[2026-01-17T05:42:09.593Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3e50c48f (posted within 7 days)
[2026-01-17T05:42:09.710Z] [BOT] ✅ Loaded pending queue: 2878 total (2858 pending, 20 enriched, 0 posted)
[2026-01-17T05:42:09.896Z] [BOT] ✅ Saved pending queue: 2878 total (2858 pending, 10 enriched, 10 posted)
[2026-01-17T05:42:09.897Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T05:42:09.954Z] [BOT] 📂 Loaded 4495 existing routing entries
[2026-01-17T05:42:10.021Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4505
   Timestamp: 2026-01-17T05:42:10.002Z
[2026-01-17T05:42:10.022Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 20
[2026-01-17T05:42:10.022Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-17T05:42:10.022Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-17T05:42:10.022Z] [BOT] Total posts: 18
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 5 posts
     3. #🌧️・seattle: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-17T05:42:10.022Z] [BOT] [STATS] Channel stats saved
[2026-01-17T05:42:12.048Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineer Graduate: - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineer Graduate: - Machine Learning Engineer - Local Services Search
- [BOT ERROR] ❌ Error posting job Data Science Graduate - Advertisement Team - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*