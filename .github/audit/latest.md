# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T20:08:57.045Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T20:08:03.557Z] ========================================
[2026-01-15T20:08:03.559Z] Discord Bot Execution Log
[2026-01-15T20:08:03.559Z] Environment: GitHub Actions
[2026-01-15T20:08:03.559Z] Node Version: v20.19.6
[2026-01-15T20:08:03.559Z] ========================================
[2026-01-15T20:08:03.559Z] Environment Variables Check:
[2026-01-15T20:08:03.559Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T20:08:03.559Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.559Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T20:08:03.559Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T20:08:03.559Z] 
Multi-Channel Configuration:
[2026-01-15T20:08:03.560Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T20:08:03.560Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T20:08:03.560Z] 
Data Files Check:
[2026-01-15T20:08:03.561Z] .github/data/new_jobs.json: ✅ Exists (10 items, 20494 bytes)
[2026-01-15T20:08:03.568Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 964883 bytes)
[2026-01-15T20:08:03.568Z] 
========================================
[2026-01-15T20:08:03.568Z] Starting Enhanced Discord Bot...
[2026-01-15T20:08:03.568Z] ========================================
[2026-01-15T20:08:04.116Z] [BOT] ✅ Loaded V2 database: 1798 jobs
[2026-01-15T20:08:04.943Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T20:08:04.944Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T20:08:04.944Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T20:08:05.064Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Fellow at University of Texas - Austin
[2026-01-15T20:08:05.067Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T20:08:05.067Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T20:08:05.067Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T20:08:05.068Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T20:08:05.068Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T20:08:05.072Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-15T20:08:05.073Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2026-01-15T20:08:05.073Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-15T20:08:05.091Z] [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T20:08:05.247Z] [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-15T20:08:05.247Z] [BOT] ❌ Industry post failed: Postdoctoral Fellow
⚠️  Channel full error count: 1/5
[2026-01-15T20:08:07.225Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-15T20:08:07.226Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T20:08:08.727Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-15T20:08:08.727Z] [BOT] 💾 BEFORE ARCHIVING: 1799 jobs in database
[2026-01-15T20:08:08.729Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T20:08:08.745Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T20:08:08.746Z] [BOT] ✅ Archiving complete: 1 archived, 1798 active
[2026-01-15T20:08:08.758Z] [BOT] 💾 Saved posted_jobs.json: 1798 active jobs
[2026-01-15T20:08:08.758Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:11.758Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T20:08:11.759Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T20:08:11.759Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:08:11.964Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2026-01-15T20:08:13.712Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:08:15.213Z] [BOT] 💾 Marked as posted: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T20:08:15.213Z] [BOT] 💾 BEFORE ARCHIVING: 1799 jobs in database
[2026-01-15T20:08:15.215Z] [BOT] ✅ No jobs to archive (all 1799 jobs within 7-day window)
[2026-01-15T20:08:15.228Z] [BOT] 💾 Saved posted_jobs.json: 1799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:15.230Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
[2026-01-15T20:08:15.230Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:08:15.469Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2026-01-15T20:08:17.656Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:08:19.157Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:08:19.157Z] [BOT] 💾 BEFORE ARCHIVING: 1800 jobs in database
[2026-01-15T20:08:19.159Z] [BOT] ✅ No jobs to archive (all 1800 jobs within 7-day window)
[2026-01-15T20:08:19.171Z] [BOT] 💾 Saved posted_jobs.json: 1800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:19.172Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_10cc9416
[2026-01-15T20:08:19.172Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T20:08:19.418Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_10cc9416 in #🤖・ai-jobs
  ✅ Industry: Data Scientist 1 @ ORG_10cc9416
[2026-01-15T20:08:21.130Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_10cc9416 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T20:08:22.632Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_10cc9416 (instance #1)
[2026-01-15T20:08:22.632Z] [BOT] 💾 BEFORE ARCHIVING: 1801 jobs in database
[2026-01-15T20:08:22.634Z] [BOT] ✅ No jobs to archive (all 1801 jobs within 7-day window)
[2026-01-15T20:08:22.647Z] [BOT] 💾 Saved posted_jobs.json: 1801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:22.648Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
[2026-01-15T20:08:22.648Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T20:08:23.029Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2026-01-15T20:08:24.811Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T20:08:26.313Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2026-01-15T20:08:26.313Z] [BOT] 💾 BEFORE ARCHIVING: 1802 jobs in database
[2026-01-15T20:08:26.315Z] [BOT] ✅ No jobs to archive (all 1802 jobs within 7-day window)
[2026-01-15T20:08:26.328Z] [BOT] 💾 Saved posted_jobs.json: 1802 active jobs
[2026-01-15T20:08:26.328Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:29.329Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T20:08:29.330Z] [BOT] 📍 [ROUTING] "Frontend Engineer - Trust and Safety - Tiktok" @ ORG_1bb6fcfb
   Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:08:29.596Z] [BOT] ✅ Created forum post: 🏢 Frontend Engineer - Trust and Safety - Tiktok @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Frontend Engineer - Trust and Safety - Tiktok @ ORG_1bb6fcfb
[2026-01-15T20:08:31.358Z] [BOT] ✅ Created forum post: 🏢 Frontend Engineer - Trust and Safety - Tiktok @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:08:32.858Z] [BOT] 💾 Marked as posted: Frontend Engineer - Trust and Safety - Tiktok @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:08:32.858Z] [BOT] 💾 BEFORE ARCHIVING: 1803 jobs in database
[2026-01-15T20:08:32.860Z] [BOT] ✅ No jobs to archive (all 1803 jobs within 7-day window)
[2026-01-15T20:08:32.872Z] [BOT] 💾 Saved posted_jobs.json: 1803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:32.872Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:08:33.202Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2026-01-15T20:08:34.972Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:08:36.473Z] [BOT] 💾 Marked as posted: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:08:36.474Z] [BOT] 💾 BEFORE ARCHIVING: 1804 jobs in database
[2026-01-15T20:08:36.475Z] [BOT] ✅ No jobs to archive (all 1804 jobs within 7-day window)
[2026-01-15T20:08:36.486Z] [BOT] 💾 Saved posted_jobs.json: 1804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:36.486Z] [BOT] 📍 [ROUTING] "Fullstack Engineer Graduate - Trust and Safety - 2026 Start" @ ORG_1bb6fcfb
[2026-01-15T20:08:36.486Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:08:36.800Z] [BOT] ✅ Created forum post: 🏢 Fullstack Engineer Graduate - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Fullstack Engineer Graduate - Trust and Safety - 2026 Start @ ORG_1bb6fcfb
[2026-01-15T20:08:38.581Z] [BOT] ✅ Created forum post: 🏢 Fullstack Engineer Graduate - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T20:08:40.081Z] [BOT] 💾 Marked as posted: Fullstack Engineer Graduate - Trust and Safety - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:08:40.082Z] [BOT] 💾 BEFORE ARCHIVING: 1805 jobs in database
[2026-01-15T20:08:40.083Z] [BOT] ✅ No jobs to archive (all 1805 jobs within 7-day window)
[2026-01-15T20:08:40.095Z] [BOT] 💾 Saved posted_jobs.json: 1805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:40.096Z] [BOT] 📍 [ROUTING] "Digital Technology Engineer" @ ORG_0ee6cb3e Data
   Category: TECH (matched: "engineer/engineering")
[2026-01-15T20:08:40.096Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T20:08:40.306Z] [BOT] ✅ Created forum post: 🏢 Digital Technology Engineer @ ORG_0ee6cb3e Data in #💻・tech-jobs
  ✅ Industry: Digital Technology Engineer @ ORG_0ee6cb3e Data
[2026-01-15T20:08:42.047Z] [BOT] ✅ Created forum post: 🏢 Digital Technology Engineer @ ORG_0ee6cb3e Data in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T20:08:43.549Z] [BOT] 💾 Marked as posted: Digital Technology Engineer @ ORG_0ee6cb3e Data (instance #1)
[2026-01-15T20:08:43.549Z] [BOT] 💾 BEFORE ARCHIVING: 1806 jobs in database
[2026-01-15T20:08:43.550Z] [BOT] ✅ No jobs to archive (all 1806 jobs within 7-day window)
[2026-01-15T20:08:43.561Z] [BOT] 💾 Saved posted_jobs.json: 1806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:46.562Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T20:08:46.562Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - TikTok Product Data Science - BS/MS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T20:08:46.865Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb
[2026-01-15T20:08:48.733Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T20:08:50.234Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T20:08:50.234Z] [BOT] 💾 BEFORE ARCHIVING: 1807 jobs in database
[2026-01-15T20:08:50.236Z] [BOT] ✅ No jobs to archive (all 1807 jobs within 7-day window)
[2026-01-15T20:08:50.247Z] [BOT] 💾 Saved posted_jobs.json: 1807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T20:08:53.247Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T20:08:53.248Z] [BOT] ⏭️  Skipping duplicate: JID_9473c763-fellow_r_00029113 (posted within 7 days)
[2026-01-15T20:08:53.248Z] [BOT] ⏭️  Skipping duplicate: JID_17efcd6d (posted within 7 days)
[2026-01-15T20:08:53.248Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e987b3a6 (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8bfeb160 (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9a92ffb0 (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_0022a53a (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_41d593dc (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_e5d347af (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3a8a0647-detail (posted within 7 days)
[2026-01-15T20:08:53.249Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_61376ce9 (posted within 7 days)
[2026-01-15T20:08:53.370Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[2026-01-15T20:08:53.539Z] [BOT] ✅ Saved pending queue: 2757 total (2737 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T20:08:53.540Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T20:08:53.597Z] [BOT] 📂 Loaded 3985 existing routing entries
[2026-01-15T20:08:53.661Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3995
   Timestamp: 2026-01-15T20:08:53.645Z
[2026-01-15T20:08:53.662Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T20:08:53.662Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-15T20:08:53.662Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
[2026-01-15T20:08:53.662Z] [BOT] 1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #💻・remote-usa: 2 posts
     5. #🌧️・seattle: 2 posts
[2026-01-15T20:08:53.663Z] [BOT] [STATS] Channel stats saved
[2026-01-15T20:08:55.689Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Fellow
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*