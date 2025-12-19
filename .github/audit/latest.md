# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T20:50:36.197Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T20:49:49.896Z] ========================================
[2025-12-19T20:49:49.898Z] Discord Bot Execution Log
[2025-12-19T20:49:49.898Z] Environment: GitHub Actions
[2025-12-19T20:49:49.898Z] Node Version: v20.19.6
[2025-12-19T20:49:49.898Z] ========================================
[2025-12-19T20:49:49.898Z] Environment Variables Check:
[2025-12-19T20:49:49.898Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T20:49:49.898Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.898Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T20:49:49.898Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T20:49:49.898Z] 
Multi-Channel Configuration:
[2025-12-19T20:49:49.898Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T20:49:49.899Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T20:49:49.899Z] 
Data Files Check:
[2025-12-19T20:49:49.900Z] .github/data/new_jobs.json: ✅ Exists (10 items, 20299 bytes)
[2025-12-19T20:49:49.902Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 339483 bytes)
[2025-12-19T20:49:49.902Z] 
========================================
[2025-12-19T20:49:49.902Z] Starting Enhanced Discord Bot...
[2025-12-19T20:49:49.902Z] ========================================
[2025-12-19T20:49:50.428Z] [BOT] ✅ Loaded V2 database: 569 jobs
[2025-12-19T20:49:51.674Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T20:49:51.674Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T20:49:51.675Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T20:49:51.675Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T20:49:51.719Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T20:49:51.767Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T20:49:51.769Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T20:49:51.769Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T20:49:51.770Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T20:49:51.770Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-19T20:49:51.771Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T20:49:51.774Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-19T20:49:51.775Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
[2025-12-19T20:49:51.775Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:49:51.792Z] [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T20:49:51.996Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ByteDance',
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
[2025-12-19T20:49:51.996Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
⚠️  Channel full error count: 1/5
[2025-12-19T20:49:53.715Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-19T20:49:53.716Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T20:49:55.215Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-19T20:49:55.216Z] [BOT] 💾 BEFORE ARCHIVING: 570 jobs in database
[2025-12-19T20:49:55.217Z] [BOT] ✅ No jobs to archive (all 570 jobs within 7-day window)
[2025-12-19T20:49:55.230Z] [BOT] 💾 Saved posted_jobs.json: 570 active jobs
[2025-12-19T20:49:55.231Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:49:55.231Z] [BOT] 📍 [ROUTING] "SAS Programmer" @ ORG_6675b3b7 Information System
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:49:55.425Z] [BOT] ✅ Created forum post: 🏢 SAS Programmer @ ORG_6675b3b7 Information System in #💻・tech-jobs
[2025-12-19T20:49:55.425Z] [BOT] ✅ Industry: SAS Programmer @ ORG_6675b3b7 Information System
[2025-12-19T20:49:57.175Z] [BOT] ✅ Created forum post: 🏢 SAS Programmer @ ORG_6675b3b7 Information System in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-19T20:49:58.676Z] [BOT] 💾 Marked as posted: SAS Programmer @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T20:49:58.676Z] [BOT] 💾 BEFORE ARCHIVING: 571 jobs in database
[2025-12-19T20:49:58.676Z] [BOT] ✅ No jobs to archive (all 571 jobs within 7-day window)
[2025-12-19T20:49:58.753Z] [BOT] 💾 Saved posted_jobs.json: 571 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:49:58.755Z] [BOT] 📍 [ROUTING] "POS Analyst" @ ORG_6675b3b7 Information System
[2025-12-19T20:49:58.755Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:49:58.973Z] [BOT] ✅ Created forum post: 🏢 POS Analyst @ ORG_6675b3b7 Information System in #💻・tech-jobs
[2025-12-19T20:49:58.973Z] [BOT] ✅ Industry: POS Analyst @ ORG_6675b3b7 Information System
[2025-12-19T20:50:00.812Z] [BOT] ✅ Created forum post: 🏢 POS Analyst @ ORG_6675b3b7 Information System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T20:50:02.313Z] [BOT] 💾 Marked as posted: POS Analyst @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T20:50:02.314Z] [BOT] 💾 BEFORE ARCHIVING: 572 jobs in database
[2025-12-19T20:50:02.314Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2025-12-19T20:50:02.320Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
[2025-12-19T20:50:02.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:05.321Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-19T20:50:05.323Z] [BOT] 📍 [ROUTING] "Engineer – Network Observability Platform and Automation" @ ORG_42be1f53 Realty
[2025-12-19T20:50:05.323Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T20:50:05.603Z] [BOT] ✅ Created forum post: 🏢 Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty in #📈・JID_fb739488
  ✅ Industry: Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty
[2025-12-19T20:50:07.426Z] [BOT] ✅ Created forum post: 🏢 Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-19T20:50:08.925Z] [BOT] 💾 Marked as posted: Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty (instance #1)
[2025-12-19T20:50:08.926Z] [BOT] 💾 BEFORE ARCHIVING: 573 jobs in database
[2025-12-19T20:50:08.926Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2025-12-19T20:50:08.932Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:11.932Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-19T20:50:11.933Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
[2025-12-19T20:50:11.933Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:50:12.248Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T20:50:12.248Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2025-12-19T20:50:14.001Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-19T20:50:14.001Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T20:50:15.500Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c (instance #1)
[2025-12-19T20:50:15.501Z] [BOT] 💾 BEFORE ARCHIVING: 574 jobs in database
[2025-12-19T20:50:15.501Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2025-12-19T20:50:15.507Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
[2025-12-19T20:50:15.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:15.507Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - E-Commerce Governance - BS/MS" @ ORG_08c9a13c
[2025-12-19T20:50:15.508Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:50:15.697Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c
[2025-12-19T20:50:18.081Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T20:50:19.582Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - E-Commerce Governance - BS/MS @ ORG_08c9a13c (instance #1)
[2025-12-19T20:50:19.582Z] [BOT] 💾 BEFORE ARCHIVING: 575 jobs in database
[2025-12-19T20:50:19.583Z] [BOT] ✅ No jobs to archive (all 575 jobs within 7-day window)
[2025-12-19T20:50:19.588Z] [BOT] 💾 Saved posted_jobs.json: 575 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:19.589Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - Ecommerce Recommendation - 2026 Start" @ ORG_08c9a13c
[2025-12-19T20:50:19.589Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:50:20.045Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T20:50:20.045Z] [BOT] ✅ Industry: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c
[2025-12-19T20:50:21.792Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T20:50:23.292Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-19T20:50:23.293Z] [BOT] 💾 BEFORE ARCHIVING: 576 jobs in database
[2025-12-19T20:50:23.293Z] [BOT] ✅ No jobs to archive (all 576 jobs within 7-day window)
[2025-12-19T20:50:23.298Z] [BOT] 💾 Saved posted_jobs.json: 576 active jobs
[2025-12-19T20:50:23.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:23.299Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - Ecommerce Recommendation - BS/MS @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 577 jobs in database
[2025-12-19T20:50:23.299Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2025-12-19T20:50:23.304Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:23.305Z] [BOT] 📍 [ROUTING] "Data Analyst - Product & Marketing" @ ORG_b344d80e League
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-19T20:50:23.672Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Product & Marketing @ ORG_b344d80e League in #🤖・ai-jobs
[2025-12-19T20:50:23.672Z] [BOT] ✅ Industry: Data Analyst - Product & Marketing @ ORG_b344d80e League
[2025-12-19T20:50:25.174Z] [BOT] 💾 Marked as posted: Data Analyst - Product & Marketing @ ORG_b344d80e League (instance #1)
[2025-12-19T20:50:25.174Z] [BOT] 💾 BEFORE ARCHIVING: 578 jobs in database
[2025-12-19T20:50:25.174Z] [BOT] ✅ No jobs to archive (all 578 jobs within 7-day window)
[2025-12-19T20:50:25.180Z] [BOT] 💾 Saved posted_jobs.json: 578 active jobs
[2025-12-19T20:50:25.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:25.181Z] [BOT] 📍 [ROUTING] "Computer Science Postdoctoral Fellow" @ ORG_0baaf6f2 University
[2025-12-19T20:50:25.181Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T20:50:26.600Z] [BOT] ✅ Created forum post: 🏢 Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University in #🤖・ai-jobs
  ✅ Industry: Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University
[2025-12-19T20:50:28.368Z] [BOT] ✅ Created forum post: 🏢 Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T20:50:29.869Z] [BOT] 💾 Marked as posted: Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University (instance #1)
[2025-12-19T20:50:29.870Z] [BOT] 💾 BEFORE ARCHIVING: 579 jobs in database
[2025-12-19T20:50:29.870Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2025-12-19T20:50:29.877Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
[2025-12-19T20:50:29.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:50:32.877Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-19T20:50:32.877Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_74fc3db8-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_b09c5079 (posted within 7 days)
⏭️  Skipping duplicate: JID_818720ae (posted within 7 days)
⏭️  Skipping duplicate: JID_5d4ab4e7 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_c43f7af2-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_91a528d1-detail (posted within 7 days)
[2025-12-19T20:50:32.878Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e31f99b5-detail (posted within 7 days)
[2025-12-19T20:50:32.878Z] [BOT] ⏭️  Skipping duplicate: JID_69e1bbf2 (posted within 7 days)
[2025-12-19T20:50:32.878Z] [BOT] ⏭️  Skipping duplicate: JID_8b5d8daf-fellow_r1839 (posted within 7 days)
[2025-12-19T20:50:32.881Z] [BOT] ✅ Loaded pending queue: 346 total (326 pending, 20 enriched, 0 posted)
[2025-12-19T20:50:32.886Z] [BOT] ✅ Saved pending queue: 346 total (326 pending, 11 enriched, 9 posted)
[2025-12-19T20:50:32.886Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T20:50:32.927Z] [BOT] 📂 Loaded 651 existing routing entries
[2025-12-19T20:50:32.973Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 660
   Timestamp: 2025-12-19T20:50:32.967Z
📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 17
   Successful: 16
   Failed: 1
[2025-12-19T20:50:32.973Z] [BOT] Skipped: 0
[2025-12-19T20:50:32.974Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T20:50:32.974Z] [BOT] Last cleanup: Never
[2025-12-19T20:50:32.974Z] [BOT] Total posts: 16
[2025-12-19T20:50:32.976Z] [BOT] Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #🌧️・seattle: 2 posts
[STATS] Channel stats saved
[2025-12-19T20:50:34.985Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*