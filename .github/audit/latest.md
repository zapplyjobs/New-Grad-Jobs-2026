# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T19:27:44.618Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T19:26:52.415Z] ========================================
[2026-01-16T19:26:52.417Z] Discord Bot Execution Log
[2026-01-16T19:26:52.417Z] Environment: GitHub Actions
[2026-01-16T19:26:52.417Z] Node Version: v20.19.6
[2026-01-16T19:26:52.417Z] ========================================
[2026-01-16T19:26:52.417Z] Environment Variables Check:
[2026-01-16T19:26:52.417Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T19:26:52.417Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.417Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T19:26:52.417Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T19:26:52.417Z] 
Multi-Channel Configuration:
[2026-01-16T19:26:52.417Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T19:26:52.418Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T19:26:52.418Z] 
Data Files Check:
[2026-01-16T19:26:52.419Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37431 bytes)
[2026-01-16T19:26:52.427Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1106997 bytes)
[2026-01-16T19:26:52.427Z] 
========================================
[2026-01-16T19:26:52.427Z] Starting Enhanced Discord Bot...
[2026-01-16T19:26:52.427Z] ========================================
[2026-01-16T19:26:52.952Z] [BOT] ✅ Loaded V2 database: 2049 jobs
[2026-01-16T19:26:53.805Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T19:26:53.805Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T19:26:53.805Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T19:26:53.915Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-16T19:26:53.917Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Solution Architect (EMEA) at supabase
[2026-01-16T19:26:53.920Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T19:26:53.920Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T19:26:53.920Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T19:26:53.921Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T19:26:53.921Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T19:26:53.922Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T19:26:53.925Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T19:26:53.926Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-01-16T19:26:53.926Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T19:26:53.943Z] [BOT ERROR] (node:2953) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T19:26:54.103Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Solution Architect (EMEA) @ supabase',
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
[2026-01-16T19:26:54.103Z] [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
⚠️  Channel full error count: 1/5
[2026-01-16T19:26:58.605Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T19:26:58.606Z] [BOT] 📍 [ROUTING] "Workday Payroll Specialist" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T19:26:59.005Z] [BOT] ✅ Created forum post: 🏢 Workday Payroll Specialist @ spotify in #🤖・ai-jobs
[2026-01-16T19:26:59.006Z] [BOT] ✅ Industry: Workday Payroll Specialist @ spotify
[2026-01-16T19:27:00.911Z] [BOT] ✅ Created forum post: 🏢 Workday Payroll Specialist @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T19:27:02.412Z] [BOT] 💾 Marked as posted: Workday Payroll Specialist @ spotify (instance #1)
[2026-01-16T19:27:02.413Z] [BOT] 💾 BEFORE ARCHIVING: 2050 jobs in database
[2026-01-16T19:27:02.414Z] [BOT] ✅ No jobs to archive (all 2050 jobs within 7-day window)
[2026-01-16T19:27:02.434Z] [BOT] 💾 Saved posted_jobs.json: 2050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:02.436Z] [BOT] 📍 [ROUTING] "GPU Architecture Engineer" @ ORG_0890f456
[2026-01-16T19:27:02.436Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T19:27:02.436Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:27:02.680Z] [BOT] ✅ Created forum post: 🏢 GPU Architecture Engineer @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-16T19:27:02.681Z] [BOT] ✅ Industry: GPU Architecture Engineer @ ORG_0890f456
[2026-01-16T19:27:04.517Z] [BOT] ✅ Created forum post: 🏢 GPU Architecture Engineer @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:06.018Z] [BOT] 💾 Marked as posted: GPU Architecture Engineer @ ORG_0890f456 (instance #1)
[2026-01-16T19:27:06.018Z] [BOT] 💾 BEFORE ARCHIVING: 2051 jobs in database
[2026-01-16T19:27:06.019Z] [BOT] ✅ No jobs to archive (all 2051 jobs within 7-day window)
[2026-01-16T19:27:06.035Z] [BOT] 💾 Saved posted_jobs.json: 2051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:06.036Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing)" @ ORG_08c9a13c
[2026-01-16T19:27:06.036Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T19:27:06.306Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c
[2026-01-16T19:27:08.381Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-16T19:27:08.381Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:09.882Z] [BOT] 💾 Marked as posted: Machine Learning Graduate (eCommerce User Growth & Intelligent Marketing) @ ORG_08c9a13c (instance #1)
[2026-01-16T19:27:09.882Z] [BOT] 💾 BEFORE ARCHIVING: 2052 jobs in database
[2026-01-16T19:27:09.883Z] [BOT] ✅ No jobs to archive (all 2052 jobs within 7-day window)
[2026-01-16T19:27:09.899Z] [BOT] 💾 Saved posted_jobs.json: 2052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:12.899Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T19:27:12.900Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - PhD" @ ORG_1bb6fcfb
[2026-01-16T19:27:12.900Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T19:27:13.358Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-16T19:27:13.358Z] [BOT] ✅ Industry: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb
[2026-01-16T19:27:15.035Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-16T19:27:15.035Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:16.537Z] [BOT] 💾 Marked as posted: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-16T19:27:16.537Z] [BOT] 💾 BEFORE ARCHIVING: 2053 jobs in database
[2026-01-16T19:27:16.539Z] [BOT] ✅ No jobs to archive (all 2053 jobs within 7-day window)
[2026-01-16T19:27:16.552Z] [BOT] 💾 Saved posted_jobs.json: 2053 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:19.552Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-16T19:27:19.553Z] [BOT] 📍 [ROUTING] "Implementation Analyst" @ ORG_53b59486 Financial Software 
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-16T19:27:19.913Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💰・finance-jobs
  ✅ Industry: Implementation Analyst @ ORG_53b59486 Financial Software
[2026-01-16T19:27:21.617Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T19:27:23.119Z] [BOT] 💾 Marked as posted: Implementation Analyst @ ORG_53b59486 Financial Software  (instance #1)
[2026-01-16T19:27:23.119Z] [BOT] 💾 BEFORE ARCHIVING: 2054 jobs in database
[2026-01-16T19:27:23.121Z] [BOT] ✅ No jobs to archive (all 2054 jobs within 7-day window)
[2026-01-16T19:27:23.136Z] [BOT] 💾 Saved posted_jobs.json: 2054 active jobs
[2026-01-16T19:27:23.137Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:26.137Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-16T19:27:26.138Z] [BOT] 📍 [ROUTING] "OEM Account Applications Engineer" @ ORG_0890f456
[2026-01-16T19:27:26.138Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:27:26.403Z] [BOT] ✅ Created forum post: 🏢 OEM Account Applications Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: OEM Account Applications Engineer @ ORG_0890f456
[2026-01-16T19:27:28.326Z] [BOT] ✅ Created forum post: 🏢 OEM Account Applications Engineer @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:29.827Z] [BOT] 💾 Marked as posted: OEM Account Applications Engineer @ ORG_0890f456 (instance #1)
[2026-01-16T19:27:29.827Z] [BOT] 💾 BEFORE ARCHIVING: 2055 jobs in database
[2026-01-16T19:27:29.828Z] [BOT] ✅ No jobs to archive (all 2055 jobs within 7-day window)
[2026-01-16T19:27:29.844Z] [BOT] 💾 Saved posted_jobs.json: 2055 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:29.844Z] [BOT] 📍 [ROUTING] "AI/ML Software Engineer Graduate (Data Platform TikTok BP)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:27:30.027Z] [BOT] ✅ Created forum post: 🏢 AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-16T19:27:30.027Z] [BOT] ✅ Industry: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb
[2026-01-16T19:27:31.715Z] [BOT] ✅ Created forum post: 🏢 AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-16T19:27:31.715Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:33.215Z] [BOT] 💾 Marked as posted: AI/ML Software Engineer Graduate (Data Platform TikTok BP) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T19:27:33.216Z] [BOT] 💾 BEFORE ARCHIVING: 2056 jobs in database
[2026-01-16T19:27:33.217Z] [BOT] ✅ No jobs to archive (all 2056 jobs within 7-day window)
[2026-01-16T19:27:33.231Z] [BOT] 💾 Saved posted_jobs.json: 2056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:33.231Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (AI Applications)" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:27:33.441Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (AI Applications) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c
[2026-01-16T19:27:35.118Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (AI Applications) @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-16T19:27:35.118Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T19:27:36.619Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (AI Applications) @ ORG_08c9a13c (instance #1)
[2026-01-16T19:27:36.619Z] [BOT] 💾 BEFORE ARCHIVING: 2057 jobs in database
[2026-01-16T19:27:36.620Z] [BOT] ✅ No jobs to archive (all 2057 jobs within 7-day window)
[2026-01-16T19:27:36.635Z] [BOT] 💾 Saved posted_jobs.json: 2057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:36.635Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-01-16T19:27:36.635Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:27:36.833Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-16T19:27:36.833Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-16T19:27:38.334Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-16T19:27:38.334Z] [BOT] 💾 BEFORE ARCHIVING: 2058 jobs in database
[2026-01-16T19:27:38.335Z] [BOT] ✅ No jobs to archive (all 2058 jobs within 7-day window)
[2026-01-16T19:27:38.347Z] [BOT] 💾 Saved posted_jobs.json: 2058 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:27:41.347Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-16T19:27:41.348Z] [BOT] ⏭️  Skipping duplicate: JID_75c19651 (posted within 7 days)
[2026-01-16T19:27:41.348Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a50ea67b (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_12411879-2026_r170 (posted within 7 days)
⏭️  Skipping duplicate: JID_ccaa0764-2025_jr2002495 (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_b099875f-2025_jr2002780 (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_d2a1334e (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_bf0b16a2 (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_2e04d983 (posted within 7 days)
[2026-01-16T19:27:41.349Z] [BOT] ⏭️  Skipping duplicate: JID_7a7d9d99 (posted within 7 days)
[2026-01-16T19:27:41.459Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[2026-01-16T19:27:41.617Z] [BOT] ✅ Saved pending queue: 2772 total (2752 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-16T19:27:41.617Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T19:27:41.688Z] [BOT] 📂 Loaded 4285 existing routing entries
[2026-01-16T19:27:41.754Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4295
[2026-01-16T19:27:41.754Z] [BOT] Timestamp: 2026-01-16T19:27:41.736Z
[2026-01-16T19:27:41.754Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 18
   Successful: 17
[2026-01-16T19:27:41.755Z] [BOT] Failed: 1
   Skipped: 0
[2026-01-16T19:27:41.755Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T19:27:41.755Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 6 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-16T19:27:41.756Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-16T19:27:41.756Z] [BOT] [STATS] Channel stats saved
[2026-01-16T19:27:43.778Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2953) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (EMEA): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (EMEA)
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*