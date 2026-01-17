# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T08:56:06.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T08:55:21.147Z] ========================================
[2026-01-17T08:55:21.149Z] Discord Bot Execution Log
[2026-01-17T08:55:21.149Z] Environment: GitHub Actions
[2026-01-17T08:55:21.149Z] Node Version: v20.19.6
[2026-01-17T08:55:21.149Z] ========================================
[2026-01-17T08:55:21.149Z] Environment Variables Check:
[2026-01-17T08:55:21.149Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T08:55:21.149Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.149Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T08:55:21.150Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T08:55:21.150Z] 
Multi-Channel Configuration:
[2026-01-17T08:55:21.150Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T08:55:21.150Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T08:55:21.151Z] 
Data Files Check:
[2026-01-17T08:55:21.151Z] .github/data/new_jobs.json: ✅ Exists (10 items, 73419 bytes)
[2026-01-17T08:55:21.161Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1293904 bytes)
[2026-01-17T08:55:21.161Z] 
========================================
[2026-01-17T08:55:21.161Z] Starting Enhanced Discord Bot...
[2026-01-17T08:55:21.161Z] ========================================
[2026-01-17T08:55:21.687Z] [BOT] ✅ Loaded V2 database: 2391 jobs
[2026-01-17T08:55:22.173Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T08:55:22.173Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T08:55:22.174Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T08:55:22.292Z] [BOT] ✅ Loaded pending queue: 2894 total (2874 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Solution Architect (APAC) at supabase
[2026-01-17T08:55:22.296Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T08:55:22.296Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T08:55:22.296Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T08:55:22.297Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T08:55:22.297Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T08:55:22.303Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-17T08:55:22.304Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (APAC)" @ supabase
[2026-01-17T08:55:22.304Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T08:55:22.322Z] [BOT ERROR] (node:3002) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T08:55:22.412Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Solution Architect (APAC) @ supabase',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-17T08:55:22.413Z] [BOT] ❌ Industry post failed: Customer Solution Architect (APAC)
⚠️  Channel full error count: 1/5
[2026-01-17T08:55:23.914Z] [BOT] 📍 [ROUTING] "Business Development Representative (USA)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-17T08:55:23.914Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T08:55:24.090Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative (USA) @ supabase in #💲・sales-jobs
[2026-01-17T08:55:24.090Z] [BOT] ✅ Industry: Business Development Representative (USA) @ supabase
[2026-01-17T08:55:26.157Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative (USA) @ supabase in #💻・remote-usa
[2026-01-17T08:55:26.157Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T08:55:27.659Z] [BOT] 💾 Marked as posted: Business Development Representative (USA) @ supabase (instance #1)
[2026-01-17T08:55:27.659Z] [BOT] 💾 BEFORE ARCHIVING: 2392 jobs in database
[2026-01-17T08:55:27.661Z] [BOT] ✅ No jobs to archive (all 2392 jobs within 7-day window)
[2026-01-17T08:55:27.679Z] [BOT] 💾 Saved posted_jobs.json: 2392 active jobs
[2026-01-17T08:55:27.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:30.680Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T08:55:30.681Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:55:31.148Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (EMEA) @ supabase in #💻・tech-jobs
  ✅ Industry: Support Engineer (EMEA) @ supabase
[2026-01-17T08:55:32.649Z] [BOT] 💾 Marked as posted: Support Engineer (EMEA) @ supabase (instance #1)
[2026-01-17T08:55:32.649Z] [BOT] 💾 BEFORE ARCHIVING: 2393 jobs in database
[2026-01-17T08:55:32.651Z] [BOT] ✅ No jobs to archive (all 2393 jobs within 7-day window)
[2026-01-17T08:55:32.668Z] [BOT] 💾 Saved posted_jobs.json: 2393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:32.669Z] [BOT] 📍 [ROUTING] "RDMA Network Software Development Engineer - High Speed Network" @ ORG_08c9a13c
[2026-01-17T08:55:32.669Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:55:33.094Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c
[2026-01-17T08:55:34.742Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:55:36.243Z] [BOT] 💾 Marked as posted: RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c (instance #1)
[2026-01-17T08:55:36.244Z] [BOT] 💾 BEFORE ARCHIVING: 2394 jobs in database
[2026-01-17T08:55:36.245Z] [BOT] ✅ No jobs to archive (all 2394 jobs within 7-day window)
[2026-01-17T08:55:36.261Z] [BOT] 💾 Saved posted_jobs.json: 2394 active jobs
[2026-01-17T08:55:36.262Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:36.262Z] [BOT] 📍 [ROUTING] "RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:55:36.417Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-17T08:55:36.418Z] [BOT] ✅ Industry: RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c
[2026-01-17T08:55:38.080Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T08:55:39.581Z] [BOT] 💾 Marked as posted: RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-17T08:55:39.582Z] [BOT] 💾 BEFORE ARCHIVING: 2395 jobs in database
[2026-01-17T08:55:39.584Z] [BOT] ✅ No jobs to archive (all 2395 jobs within 7-day window)
[2026-01-17T08:55:39.597Z] [BOT] 💾 Saved posted_jobs.json: 2395 active jobs
[2026-01-17T08:55:39.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:39.598Z] [BOT] 📍 [ROUTING] "Global Financial Crimes - Issues Management - Reporting & Data Analysis" @ ORG_45e3580d UFG
[2026-01-17T08:55:39.598Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:55:39.779Z] [BOT] ✅ Created forum post: 🏢 Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG in #💻・tech-jobs
  ✅ Industry: Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG
[2026-01-17T08:55:41.579Z] [BOT] ✅ Created forum post: 🏢 Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T08:55:43.081Z] [BOT] 💾 Marked as posted: Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG (instance #1)
[2026-01-17T08:55:43.081Z] [BOT] 💾 BEFORE ARCHIVING: 2396 jobs in database
[2026-01-17T08:55:43.083Z] [BOT] ✅ No jobs to archive (all 2396 jobs within 7-day window)
[2026-01-17T08:55:43.097Z] [BOT] 💾 Saved posted_jobs.json: 2396 active jobs
[2026-01-17T08:55:43.098Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:46.098Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T08:55:46.098Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, GenRecs, Personalization" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T08:55:46.284Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, GenRecs, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, GenRecs, Personalization @ spotify
[2026-01-17T08:55:48.003Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, GenRecs, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T08:55:49.504Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, GenRecs, Personalization @ spotify (instance #1)
[2026-01-17T08:55:49.504Z] [BOT] 💾 BEFORE ARCHIVING: 2397 jobs in database
[2026-01-17T08:55:49.507Z] [BOT] ✅ No jobs to archive (all 2397 jobs within 7-day window)
[2026-01-17T08:55:49.524Z] [BOT] 💾 Saved posted_jobs.json: 2397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:49.524Z] [BOT] 📍 [ROUTING] "Production Engineer (PE)" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-17T08:55:49.524Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:55:49.717Z] [BOT] ✅ Created forum post: 🏢 Production Engineer (PE) @ nominal in #🤖・ai-jobs
[2026-01-17T08:55:49.717Z] [BOT] ✅ Industry: Production Engineer (PE) @ nominal
[2026-01-17T08:55:51.603Z] [BOT] ✅ Created forum post: 🏢 Production Engineer (PE) @ nominal in #🗽・new-york
[2026-01-17T08:55:51.603Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:55:53.105Z] [BOT] 💾 Marked as posted: Production Engineer (PE) @ nominal (instance #1)
[2026-01-17T08:55:53.105Z] [BOT] 💾 BEFORE ARCHIVING: 2398 jobs in database
[2026-01-17T08:55:53.106Z] [BOT] ✅ No jobs to archive (all 2398 jobs within 7-day window)
[2026-01-17T08:55:53.121Z] [BOT] 💾 Saved posted_jobs.json: 2398 active jobs
[2026-01-17T08:55:53.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:53.122Z] [BOT] 📍 [ROUTING] "Production Engineer" @ nominal
[2026-01-17T08:55:53.122Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:55:53.305Z] [BOT] ✅ Created forum post: 🏢 Production Engineer @ nominal in #🤖・ai-jobs
[2026-01-17T08:55:53.305Z] [BOT] ✅ Industry: Production Engineer @ nominal
[2026-01-17T08:55:54.990Z] [BOT] ✅ Created forum post: 🏢 Production Engineer @ nominal in #🗽・new-york
[2026-01-17T08:55:54.990Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:55:56.492Z] [BOT] 💾 Marked as posted: Production Engineer @ nominal (instance #1)
[2026-01-17T08:55:56.492Z] [BOT] 💾 BEFORE ARCHIVING: 2399 jobs in database
[2026-01-17T08:55:56.493Z] [BOT] ✅ No jobs to archive (all 2399 jobs within 7-day window)
[2026-01-17T08:55:56.508Z] [BOT] 💾 Saved posted_jobs.json: 2399 active jobs
[2026-01-17T08:55:56.508Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:55:56.508Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ nominal
[2026-01-17T08:55:56.508Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-17T08:55:56.847Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🤖・ai-jobs
  ✅ Industry: Enterprise Account Executive @ nominal
[2026-01-17T08:55:58.549Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T08:56:00.050Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ nominal (instance #1)
[2026-01-17T08:56:00.051Z] [BOT] 💾 BEFORE ARCHIVING: 2400 jobs in database
[2026-01-17T08:56:00.052Z] [BOT] ✅ No jobs to archive (all 2400 jobs within 7-day window)
[2026-01-17T08:56:00.068Z] [BOT] 💾 Saved posted_jobs.json: 2400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:56:03.068Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-17T08:56:03.069Z] [BOT] ⏭️  Skipping duplicate: JID_3ecc5e05 (posted within 7 days)
[2026-01-17T08:56:03.069Z] [BOT] ⏭️  Skipping duplicate: JID_18c96a34 (posted within 7 days)
[2026-01-17T08:56:03.069Z] [BOT] ⏭️  Skipping duplicate: JID_94cdbd47 (posted within 7 days)
[2026-01-17T08:56:03.069Z] [BOT] ⏭️  Skipping duplicate: JID_d93b8c9d (posted within 7 days)
[2026-01-17T08:56:03.070Z] [BOT] ⏭️  Skipping duplicate: JID_590d3304 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_74d17a9c-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_df998353-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_d7670d15-analyst_10070365-wd (posted within 7 days)
[2026-01-17T08:56:03.070Z] [BOT] ⏭️  Skipping duplicate: JID_a2242605 (posted within 7 days)
[2026-01-17T08:56:03.186Z] [BOT] ✅ Loaded pending queue: 2894 total (2874 pending, 20 enriched, 0 posted)
[2026-01-17T08:56:03.355Z] [BOT] ✅ Saved pending queue: 2894 total (2874 pending, 11 enriched, 9 posted)
[2026-01-17T08:56:03.356Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T08:56:03.412Z] [BOT] 📂 Loaded 4595 existing routing entries
[2026-01-17T08:56:03.482Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T08:56:03.483Z] [BOT] Total entries: 4605
   Timestamp: 2026-01-17T08:56:03.462Z
[2026-01-17T08:56:03.483Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 18
   Successful: 17
   Failed: 1
[2026-01-17T08:56:03.483Z] [BOT] Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
[2026-01-17T08:56:03.484Z] [BOT] Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🗽・new-york: 4 posts
[2026-01-17T08:56:03.484Z] [BOT] 3. #🤖・ai-jobs: 4 posts
     4. #💲・sales-jobs: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-17T08:56:03.484Z] [BOT] [STATS] Channel stats saved
[2026-01-17T08:56:05.509Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3002) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (APAC): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (APAC)
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*