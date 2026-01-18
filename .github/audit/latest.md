# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T22:42:20.180Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T22:41:20.928Z] ========================================
[2026-01-18T22:41:20.930Z] Discord Bot Execution Log
[2026-01-18T22:41:20.930Z] Environment: GitHub Actions
[2026-01-18T22:41:20.930Z] Node Version: v20.19.6
[2026-01-18T22:41:20.930Z] ========================================
[2026-01-18T22:41:20.930Z] Environment Variables Check:
[2026-01-18T22:41:20.931Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T22:41:20.931Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T22:41:20.931Z] 
Multi-Channel Configuration:
[2026-01-18T22:41:20.931Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.931Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.932Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.932Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.932Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.932Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T22:41:20.932Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T22:41:20.932Z] 
Data Files Check:
[2026-01-18T22:41:20.933Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49960 bytes)
[2026-01-18T22:41:20.943Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1504259 bytes)
[2026-01-18T22:41:20.943Z] 
========================================
[2026-01-18T22:41:20.943Z] Starting Enhanced Discord Bot...
[2026-01-18T22:41:20.943Z] ========================================
[2026-01-18T22:41:21.516Z] [BOT] ✅ Loaded V2 database: 2768 jobs
[2026-01-18T22:41:22.123Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T22:41:22.123Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T22:41:22.124Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T22:41:22.249Z] [BOT] ✅ Loaded pending queue: 2833 total (2813 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Machine Learning at Barclays
[2026-01-18T22:41:22.252Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T22:41:22.252Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T22:41:22.253Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T22:41:22.253Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T22:41:22.254Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T22:41:22.258Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T22:41:22.259Z] [BOT] 📍 [ROUTING] "Data Scientist - Machine Learning" @ ORG_8dd79439
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T22:41:22.263Z] [BOT ERROR] (node:2858) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T22:41:22.472Z] [BOT ERROR] ❌ Error posting job Data Scientist - Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist - Machine Learning @ Barclays',
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
[2026-01-18T22:41:22.472Z] [BOT] ❌ Industry post failed: Data Scientist - Machine Learning
⚠️  Channel full error count: 1/5
[2026-01-18T22:41:24.281Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Machine Learning @ ORG_8dd79439 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:41:25.782Z] [BOT] 💾 Marked as posted: Data Scientist - Machine Learning @ ORG_8dd79439 (instance #1)
[2026-01-18T22:41:25.782Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-18T22:41:25.784Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-18T22:41:25.805Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:25.805Z] [BOT] 📍 [ROUTING] "Commercial Operations & Analytics Associate" @ ORG_d7c9c3f6
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T22:41:26.259Z] [BOT] ✅ Created forum post: 🏢 Commercial Operations & Analytics Associate @ ORG_d7c9c3f6 in #🤖・ai-jobs
  ✅ Industry: Commercial Operations & Analytics Associate @ ORG_d7c9c3f6
[2026-01-18T22:41:27.981Z] [BOT] ✅ Created forum post: 🏢 Commercial Operations & Analytics Associate @ ORG_d7c9c3f6 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:41:29.482Z] [BOT] 💾 Marked as posted: Commercial Operations & Analytics Associate @ ORG_d7c9c3f6 (instance #1)
[2026-01-18T22:41:29.483Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-18T22:41:29.484Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-18T22:41:29.499Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:29.499Z] [BOT] 📍 [ROUTING] "AI/Machine Learning Engineer" @ ORG_f128ceac
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T22:41:29.499Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T22:41:29.978Z] [BOT] ✅ Created forum post: 🏢 AI/Machine Learning Engineer @ ORG_f128ceac in #🤖・ai-jobs
  ✅ Industry: AI/Machine Learning Engineer @ ORG_f128ceac
[2026-01-18T22:41:31.944Z] [BOT] ✅ Created forum post: 🏢 AI/Machine Learning Engineer @ ORG_f128ceac in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-18T22:41:33.445Z] [BOT] 💾 Marked as posted: AI/Machine Learning Engineer @ ORG_f128ceac (instance #1)
[2026-01-18T22:41:33.445Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-18T22:41:33.447Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-18T22:41:33.468Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:36.470Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T22:41:36.470Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market" @ datadog
   Category: SALES (matched: "sales")
[2026-01-18T22:41:36.470Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T22:41:36.705Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market @ datadog in #💲・sales-jobs
[2026-01-18T22:41:36.705Z] [BOT] ✅ Industry: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market @ datadog
[2026-01-18T22:41:38.414Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market @ datadog in #🗽・new-york
[2026-01-18T22:41:38.414Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T22:41:39.915Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market @ datadog (instance #1)
[2026-01-18T22:41:39.915Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-18T22:41:39.917Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-18T22:41:39.936Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:39.936Z] [BOT] 📍 [ROUTING] "Campus Retail Associate" @ ORG_0b222f2a & Noble Education
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T22:41:40.108Z] [BOT] ✅ Created forum post: 🏢 Campus Retail Associate @ ORG_0b222f2a & Noble Education in #💲・sales-jobs
[2026-01-18T22:41:40.108Z] [BOT] ✅ Industry: Campus Retail Associate @ ORG_0b222f2a & Noble Education
[2026-01-18T22:41:42.345Z] [BOT] ✅ Created forum post: 🏢 Campus Retail Associate @ ORG_0b222f2a & Noble Education in #💻・remote-usa
[2026-01-18T22:41:42.345Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T22:41:43.847Z] [BOT] 💾 Marked as posted: Campus Retail Associate @ ORG_0b222f2a & Noble Education (instance #1)
[2026-01-18T22:41:43.847Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-18T22:41:43.849Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-18T22:41:43.866Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:46.866Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T22:41:46.866Z] [BOT] 📍 [ROUTING] "Environmental Services Aide" @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-18T22:41:46.866Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T22:41:47.118Z] [BOT] ✅ Created forum post: 🏢 Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital in #🩺・healthcare-jobs
[2026-01-18T22:41:47.118Z] [BOT] ✅ Industry: Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital
[2026-01-18T22:41:49.187Z] [BOT] ✅ Created forum post: 🏢 Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital in #🗽・new-york
[2026-01-18T22:41:49.187Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T22:41:50.688Z] [BOT] 💾 Marked as posted: Environmental Services Aide @ ORG_3d29dfd3 Johns Riverside Hospital (instance #1)
[2026-01-18T22:41:50.688Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-18T22:41:50.690Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-18T22:41:50.710Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:53.710Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T22:41:53.710Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_64fb62c2
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:41:54.001Z] [BOT] ✅ Created forum post: 🏢 Quantum Software Engineer @ ORG_64fb62c2 in #💻・tech-jobs
  ✅ Industry: Quantum Software Engineer @ ORG_64fb62c2
[2026-01-18T22:41:55.718Z] [BOT] ✅ Created forum post: 🏢 Quantum Software Engineer @ ORG_64fb62c2 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T22:41:57.220Z] [BOT] 💾 Marked as posted: Quantum Software Engineer @ ORG_64fb62c2 (instance #1)
[2026-01-18T22:41:57.220Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-18T22:41:57.222Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-18T22:41:57.241Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
[2026-01-18T22:41:57.242Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T22:41:57.242Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_86bc4e7d Major
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T22:41:57.519Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_86bc4e7d Major in #💻・tech-jobs
[2026-01-18T22:41:57.519Z] [BOT] ✅ Industry: Software Engineer @ ORG_86bc4e7d Major
[2026-01-18T22:41:59.362Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_86bc4e7d Major in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:42:00.863Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_86bc4e7d Major (instance #1)
[2026-01-18T22:42:00.863Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-18T22:42:00.865Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-18T22:42:00.883Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:42:03.885Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T22:42:03.885Z] [BOT] 📍 [ROUTING] "Dental Hygienist" @ 42 North Dental
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T22:42:04.101Z] [BOT] ✅ Created forum post: 🏢 Dental Hygienist @ 42 North Dental in #📣・marketing-jobs
  ✅ Industry: Dental Hygienist @ 42 North Dental
[2026-01-18T22:42:05.797Z] [BOT] ✅ Created forum post: 🏢 Dental Hygienist @ 42 North Dental in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-18T22:42:07.299Z] [BOT] 💾 Marked as posted: Dental Hygienist @ 42 North Dental (instance #1)
[2026-01-18T22:42:07.299Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-18T22:42:07.301Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-18T22:42:07.320Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:42:10.321Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-18T22:42:10.321Z] [BOT] 📍 [ROUTING] "Entitlement Specialist" @ ORG_66afb83d
[2026-01-18T22:42:10.321Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-18T22:42:10.666Z] [BOT] ✅ Created forum post: 🏢 Entitlement Specialist @ ORG_66afb83d in #💰・finance-jobs
[2026-01-18T22:42:10.666Z] [BOT] ✅ Industry: Entitlement Specialist @ ORG_66afb83d
[2026-01-18T22:42:12.393Z] [BOT] ✅ Created forum post: 🏢 Entitlement Specialist @ ORG_66afb83d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T22:42:13.894Z] [BOT] 💾 Marked as posted: Entitlement Specialist @ ORG_66afb83d (instance #1)
[2026-01-18T22:42:13.895Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-18T22:42:13.897Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-18T22:42:13.912Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T22:42:16.913Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T22:42:16.914Z] [BOT] ⏭️  Skipping duplicate: JID_533ead17-external_career_site_barclays-JID_d21ebba0-_jr-0000083143-1 (posted within 7 days)
[2026-01-18T22:42:16.915Z] [BOT] ⏭️  Skipping duplicate: JID_9dd8fa88 (posted within 7 days)
⏭️  Skipping duplicate: JID_66e11a42 (posted within 7 days)
⏭️  Skipping duplicate: JID_1cb9dd4f (posted within 7 days)
[2026-01-18T22:42:16.915Z] [BOT] ⏭️  Skipping duplicate: JID_53b0911a (posted within 7 days)
[2026-01-18T22:42:16.915Z] [BOT] ⏭️  Skipping duplicate: JID_5c643244 (posted within 7 days)
[2026-01-18T22:42:16.915Z] [BOT] ⏭️  Skipping duplicate: JID_e810b5f0 (posted within 7 days)
⏭️  Skipping duplicate: JID_253dbe6a (posted within 7 days)
[2026-01-18T22:42:16.915Z] [BOT] ⏭️  Skipping duplicate: JID_7814593a (posted within 7 days)
[2026-01-18T22:42:16.916Z] [BOT] ⏭️  Skipping duplicate: JID_a6933c4a (posted within 7 days)
[2026-01-18T22:42:17.049Z] [BOT] ✅ Loaded pending queue: 2833 total (2813 pending, 20 enriched, 0 posted)
[2026-01-18T22:42:17.218Z] [BOT] ✅ Saved pending queue: 2833 total (2813 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T22:42:17.219Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T22:42:17.280Z] [BOT] 📂 Loaded 4905 existing routing entries
[2026-01-18T22:42:17.351Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4915
   Timestamp: 2026-01-18T22:42:17.331Z
[2026-01-18T22:42:17.351Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 20
[2026-01-18T22:42:17.352Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-18T22:42:17.352Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-18T22:42:17.352Z] [BOT] Channels used: 11
   Top channels:
     1. #💻・remote-usa: 5 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💲・sales-jobs: 2 posts
     4. #🗽・new-york: 2 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-18T22:42:17.352Z] [BOT] [STATS] Channel stats saved
[2026-01-18T22:42:19.378Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2858) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Scientist - Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist - Machine Learning
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*