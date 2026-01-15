# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T23:53:43.468Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T23:52:56.266Z] ========================================
[2026-01-15T23:52:56.267Z] Discord Bot Execution Log
[2026-01-15T23:52:56.267Z] Environment: GitHub Actions
[2026-01-15T23:52:56.268Z] Node Version: v20.19.6
[2026-01-15T23:52:56.268Z] ========================================
[2026-01-15T23:52:56.268Z] Environment Variables Check:
[2026-01-15T23:52:56.268Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T23:52:56.268Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.268Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T23:52:56.268Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T23:52:56.268Z] 
Multi-Channel Configuration:
[2026-01-15T23:52:56.268Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.268Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T23:52:56.269Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T23:52:56.269Z] 
Data Files Check:
[2026-01-15T23:52:56.270Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58541 bytes)
[2026-01-15T23:52:56.277Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1010303 bytes)
[2026-01-15T23:52:56.277Z] 
========================================
[2026-01-15T23:52:56.277Z] Starting Enhanced Discord Bot...
[2026-01-15T23:52:56.277Z] ========================================
[2026-01-15T23:52:56.794Z] [BOT] ✅ Loaded V2 database: 1877 jobs
[2026-01-15T23:52:57.384Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T23:52:57.384Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T23:52:57.384Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T23:52:57.495Z] [BOT] ✅ Loaded pending queue: 2751 total (2731 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Payroll Specialist at spotify
[2026-01-15T23:52:57.498Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T23:52:57.499Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T23:52:57.499Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T23:52:57.500Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T23:52:57.500Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T23:52:57.500Z] [BOT] - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T23:52:57.502Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T23:52:57.504Z] [BOT] 📍 [ROUTING] "Payroll Specialist" @ spotify
[2026-01-15T23:52:57.504Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:52:57.521Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T23:52:57.652Z] [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Payroll Specialist @ spotify',
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
[2026-01-15T23:52:57.653Z] [BOT] ❌ Industry post failed: Payroll Specialist
⚠️  Channel full error count: 1/5
[2026-01-15T23:52:59.353Z] [BOT] ✅ Created forum post: 🏢 Payroll Specialist @ spotify in #🗽・new-york
[2026-01-15T23:52:59.353Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T23:53:00.855Z] [BOT] 💾 Marked as posted: Payroll Specialist @ spotify (instance #1)
[2026-01-15T23:53:00.855Z] [BOT] 💾 BEFORE ARCHIVING: 1878 jobs in database
[2026-01-15T23:53:00.857Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T23:53:00.862Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-15T23:53:00.862Z] [BOT] ✅ Archiving complete: 5 archived, 1873 active
[2026-01-15T23:53:00.877Z] [BOT] 💾 Saved posted_jobs.json: 1873 active jobs
[2026-01-15T23:53:00.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:00.878Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grads: Fall 2025/Spring 2026" @ ORG_2e5592d2 Technologies
[2026-01-15T23:53:00.878Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:53:01.077Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies in #🤖・ai-jobs
[2026-01-15T23:53:01.077Z] [BOT] ✅ Industry: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies
[2026-01-15T23:53:02.843Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies in #🦢・los-angeles
[2026-01-15T23:53:02.844Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-15T23:53:04.345Z] [BOT] 💾 Marked as posted: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies (instance #1)
[2026-01-15T23:53:04.345Z] [BOT] 💾 BEFORE ARCHIVING: 1874 jobs in database
[2026-01-15T23:53:04.347Z] [BOT] ✅ No jobs to archive (all 1874 jobs within 7-day window)
[2026-01-15T23:53:04.357Z] [BOT] 💾 Saved posted_jobs.json: 1874 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:04.358Z] [BOT] 📍 [ROUTING] "Senior Growth Engineer" @ clerk
[2026-01-15T23:53:04.358Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:53:04.604Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Engineer @ clerk in #🤖・ai-jobs
[2026-01-15T23:53:04.605Z] [BOT] ✅ Industry: Senior Growth Engineer @ clerk
[2026-01-15T23:53:06.105Z] [BOT] 💾 Marked as posted: Senior Growth Engineer @ clerk (instance #1)
[2026-01-15T23:53:06.105Z] [BOT] 💾 BEFORE ARCHIVING: 1875 jobs in database
[2026-01-15T23:53:06.107Z] [BOT] ✅ No jobs to archive (all 1875 jobs within 7-day window)
[2026-01-15T23:53:06.120Z] [BOT] 💾 Saved posted_jobs.json: 1875 active jobs
[2026-01-15T23:53:06.120Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:06.121Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager, Personalization" @ spotify
[2026-01-15T23:53:06.121Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:53:06.639Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🤖・ai-jobs
[2026-01-15T23:53:06.640Z] [BOT] ✅ Industry: Machine Learning Engineering Manager, Personalization @ spotify
[2026-01-15T23:53:08.324Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineering Manager, Personalization @ spotify in #🗽・new-york
[2026-01-15T23:53:08.324Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T23:53:09.825Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager, Personalization @ spotify (instance #1)
[2026-01-15T23:53:09.825Z] [BOT] 💾 BEFORE ARCHIVING: 1876 jobs in database
[2026-01-15T23:53:09.827Z] [BOT] ✅ No jobs to archive (all 1876 jobs within 7-day window)
[2026-01-15T23:53:09.843Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:12.843Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T23:53:12.844Z] [BOT] 📍 [ROUTING] "Software Engineer - Kernels" @ ORG_cdec6f53
[2026-01-15T23:53:12.844Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:53:13.021Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Kernels @ ORG_cdec6f53 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Kernels @ ORG_cdec6f53
[2026-01-15T23:53:14.851Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Kernels @ ORG_cdec6f53 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-15T23:53:16.352Z] [BOT] 💾 Marked as posted: Software Engineer - Kernels @ ORG_cdec6f53 (instance #1)
[2026-01-15T23:53:16.352Z] [BOT] 💾 BEFORE ARCHIVING: 1877 jobs in database
[2026-01-15T23:53:16.354Z] [BOT] ✅ No jobs to archive (all 1877 jobs within 7-day window)
[2026-01-15T23:53:16.367Z] [BOT] 💾 Saved posted_jobs.json: 1877 active jobs
[2026-01-15T23:53:16.367Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:16.368Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_02281b3b Stanley
[2026-01-15T23:53:16.368Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:53:16.547Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_02281b3b Stanley
[2026-01-15T23:53:18.233Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_02281b3b Stanley in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T23:53:19.735Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_02281b3b Stanley (instance #1)
[2026-01-15T23:53:19.735Z] [BOT] 💾 BEFORE ARCHIVING: 1878 jobs in database
[2026-01-15T23:53:19.736Z] [BOT] ✅ No jobs to archive (all 1878 jobs within 7-day window)
[2026-01-15T23:53:19.748Z] [BOT] 💾 Saved posted_jobs.json: 1878 active jobs
[2026-01-15T23:53:19.749Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:19.749Z] [BOT] 📍 [ROUTING] "Software Engineer - Hardware Test & Automation - Optical Payloads" @ ORG_afd623b1
[2026-01-15T23:53:19.749Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:53:20.092Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-15T23:53:20.092Z] [BOT] ✅ Industry: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1
[2026-01-15T23:53:21.782Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 in #🖥️・redmond
[2026-01-15T23:53:21.782Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-15T23:53:23.283Z] [BOT] 💾 Marked as posted: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 (instance #1)
[2026-01-15T23:53:23.283Z] [BOT] 💾 BEFORE ARCHIVING: 1879 jobs in database
[2026-01-15T23:53:23.284Z] [BOT] ✅ No jobs to archive (all 1879 jobs within 7-day window)
[2026-01-15T23:53:23.295Z] [BOT] 💾 Saved posted_jobs.json: 1879 active jobs
[2026-01-15T23:53:23.295Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:23.297Z] [BOT] 📍 [ROUTING] "Frontend Engineer – New Grad" @ D3
[2026-01-15T23:53:23.297Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:53:23.606Z] [BOT] ✅ Created forum post: 🏢 Frontend Engineer – New Grad @ D3 in #💻・tech-jobs
[2026-01-15T23:53:23.606Z] [BOT] ✅ Industry: Frontend Engineer – New Grad @ D3
[2026-01-15T23:53:25.393Z] [BOT] ✅ Created forum post: 🏢 Frontend Engineer – New Grad @ D3 in #🌉・san-francisco
[2026-01-15T23:53:25.393Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T23:53:26.894Z] [BOT] 💾 Marked as posted: Frontend Engineer – New Grad @ D3 (instance #1)
[2026-01-15T23:53:26.895Z] [BOT] 💾 BEFORE ARCHIVING: 1880 jobs in database
[2026-01-15T23:53:26.896Z] [BOT] ✅ No jobs to archive (all 1880 jobs within 7-day window)
[2026-01-15T23:53:26.910Z] [BOT] 💾 Saved posted_jobs.json: 1880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:26.910Z] [BOT] 📍 [ROUTING] "Full Stack Engineer – Early Career" @ ORG_f27752c0
[2026-01-15T23:53:26.910Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:53:27.102Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer – Early Career @ ORG_f27752c0 in #💻・tech-jobs
[2026-01-15T23:53:27.103Z] [BOT] ✅ Industry: Full Stack Engineer – Early Career @ ORG_f27752c0
[2026-01-15T23:53:28.836Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer – Early Career @ ORG_f27752c0 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T23:53:30.337Z] [BOT] 💾 Marked as posted: Full Stack Engineer – Early Career @ ORG_f27752c0 (instance #1)
[2026-01-15T23:53:30.337Z] [BOT] 💾 BEFORE ARCHIVING: 1881 jobs in database
[2026-01-15T23:53:30.338Z] [BOT] ✅ No jobs to archive (all 1881 jobs within 7-day window)
[2026-01-15T23:53:30.351Z] [BOT] 💾 Saved posted_jobs.json: 1881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:33.351Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T23:53:33.351Z] [BOT] 📍 [ROUTING] "Junior Software Engineer - Software Engineer" @ ORG_ce460410
[2026-01-15T23:53:33.352Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T23:53:33.532Z] [BOT] ✅ Created forum post: 🎨 Junior Software Engineer - Software Engineer @ ORG_ce460410 in #📈・JID_fb739488
  ✅ Industry: Junior Software Engineer - Software Engineer @ ORG_ce460410
[2026-01-15T23:53:35.705Z] [BOT] ✅ Created forum post: 🎨 Junior Software Engineer - Software Engineer @ ORG_ce460410 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T23:53:37.206Z] [BOT] 💾 Marked as posted: Junior Software Engineer - Software Engineer @ ORG_ce460410 (instance #1)
[2026-01-15T23:53:37.206Z] [BOT] 💾 BEFORE ARCHIVING: 1882 jobs in database
[2026-01-15T23:53:37.208Z] [BOT] ✅ No jobs to archive (all 1882 jobs within 7-day window)
[2026-01-15T23:53:37.221Z] [BOT] 💾 Saved posted_jobs.json: 1882 active jobs
[2026-01-15T23:53:37.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:53:40.222Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T23:53:40.222Z] [BOT] ⏭️  Skipping duplicate: JID_8612d4b2 (posted within 7 days)
[2026-01-15T23:53:40.222Z] [BOT] ⏭️  Skipping duplicate: JID_74032a0e (posted within 7 days)
[2026-01-15T23:53:40.222Z] [BOT] ⏭️  Skipping duplicate: JID_cbfee1f8-engineer_pt-jr021580 (posted within 7 days)
[2026-01-15T23:53:40.223Z] [BOT] ⏭️  Skipping duplicate: JID_83c2739e (posted within 7 days)
⏭️  Skipping duplicate: JID_fafdd972 (posted within 7 days)
⏭️  Skipping duplicate: JID_63864911 (posted within 7 days)
⏭️  Skipping duplicate: JID_b92b1652 (posted within 7 days)
[2026-01-15T23:53:40.223Z] [BOT] ⏭️  Skipping duplicate: JID_8ee30c28 (posted within 7 days)
[2026-01-15T23:53:40.223Z] [BOT] ⏭️  Skipping duplicate: JID_09497a40 (posted within 7 days)
[2026-01-15T23:53:40.223Z] [BOT] ⏭️  Skipping duplicate: JID_cd9053b6 (posted within 7 days)
[2026-01-15T23:53:40.340Z] [BOT] ✅ Loaded pending queue: 2751 total (2731 pending, 20 enriched, 0 posted)
[2026-01-15T23:53:40.520Z] [BOT] ✅ Saved pending queue: 2751 total (2731 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T23:53:40.581Z] [BOT] 📂 Loaded 4075 existing routing entries
[2026-01-15T23:53:40.644Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T23:53:40.645Z] [BOT] Total entries: 4085
   Timestamp: 2026-01-15T23:53:40.628Z
[2026-01-15T23:53:40.645Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T23:53:40.645Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-15T23:53:40.645Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
[2026-01-15T23:53:40.645Z] [BOT] Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・new-york: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-15T23:53:40.646Z] [BOT] [STATS] Channel stats saved
[2026-01-15T23:53:42.668Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Payroll Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Payroll Specialist
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*