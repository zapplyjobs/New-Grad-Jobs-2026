# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T20:08:42.665Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T20:07:52.164Z] ========================================
[2026-01-14T20:07:52.166Z] Discord Bot Execution Log
[2026-01-14T20:07:52.166Z] Environment: GitHub Actions
[2026-01-14T20:07:52.166Z] Node Version: v20.19.6
[2026-01-14T20:07:52.166Z] ========================================
[2026-01-14T20:07:52.166Z] Environment Variables Check:
[2026-01-14T20:07:52.166Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T20:07:52.166Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.166Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T20:07:52.166Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T20:07:52.166Z] 
Multi-Channel Configuration:
[2026-01-14T20:07:52.166Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T20:07:52.167Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T20:07:52.167Z] 
Data Files Check:
[2026-01-14T20:07:52.169Z] .github/data/new_jobs.json: ✅ Exists (10 items, 195938 bytes)
[2026-01-14T20:07:52.174Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 747432 bytes)
[2026-01-14T20:07:52.174Z] 
========================================
[2026-01-14T20:07:52.174Z] Starting Enhanced Discord Bot...
[2026-01-14T20:07:52.174Z] ========================================
[2026-01-14T20:07:52.697Z] [BOT] ✅ Loaded V2 database: 1401 jobs
[2026-01-14T20:07:53.405Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T20:07:53.406Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T20:07:53.406Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T20:07:53.517Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, Digital Native Business at anthropic
[2026-01-14T20:07:53.520Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T20:07:53.520Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T20:07:53.521Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T20:07:53.521Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T20:07:53.521Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T20:07:53.526Z] [BOT] 📌 Posting 8 jobs to #💲・sales-jobs
[2026-01-14T20:07:53.527Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Digital Native Business" @ anthropic
[2026-01-14T20:07:53.527Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:07:53.544Z] [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T20:07:53.678Z] [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Digital Native Business: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Account Executive, Digital Native Business @ anthropic',
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
[2026-01-14T20:07:53.678Z] [BOT] ❌ Industry post failed: Enterprise Account Executive, Digital Native Business
⚠️  Channel full error count: 1/5
[2026-01-14T20:07:55.462Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Digital Native Business @ anthropic in #🌉・san-francisco
[2026-01-14T20:07:55.462Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:07:56.964Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Digital Native Business @ anthropic (instance #1)
[2026-01-14T20:07:56.964Z] [BOT] 💾 BEFORE ARCHIVING: 1402 jobs in database
[2026-01-14T20:07:56.965Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T20:07:56.970Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T20:07:56.970Z] [BOT] ✅ Archiving complete: 1 archived, 1401 active
[2026-01-14T20:07:56.981Z] [BOT] 💾 Saved posted_jobs.json: 1401 active jobs
[2026-01-14T20:07:56.981Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:07:56.981Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, DOD/IC" @ anthropic
[2026-01-14T20:07:56.982Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:07:57.216Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, DOD/IC @ anthropic in #💲・sales-jobs
[2026-01-14T20:07:57.216Z] [BOT] ✅ Industry: Enterprise Account Executive, DOD/IC @ anthropic
[2026-01-14T20:07:59.050Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, DOD/IC @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:00.551Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, DOD/IC @ anthropic (instance #1)
[2026-01-14T20:08:00.552Z] [BOT] 💾 BEFORE ARCHIVING: 1402 jobs in database
[2026-01-14T20:08:00.553Z] [BOT] ✅ No jobs to archive (all 1402 jobs within 7-day window)
[2026-01-14T20:08:00.561Z] [BOT] 💾 Saved posted_jobs.json: 1402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:00.562Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Civilian Sales" @ anthropic
[2026-01-14T20:08:00.562Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:00.808Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Civilian Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, Federal Civilian Sales @ anthropic
[2026-01-14T20:08:02.603Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Civilian Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:04.104Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Federal Civilian Sales @ anthropic (instance #1)
[2026-01-14T20:08:04.104Z] [BOT] 💾 BEFORE ARCHIVING: 1403 jobs in database
[2026-01-14T20:08:04.105Z] [BOT] ✅ No jobs to archive (all 1403 jobs within 7-day window)
[2026-01-14T20:08:04.116Z] [BOT] 💾 Saved posted_jobs.json: 1403 active jobs
[2026-01-14T20:08:04.116Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:04.116Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Partners Sales" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-14T20:08:04.116Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:04.344Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Partners Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, Federal Partners Sales @ anthropic
[2026-01-14T20:08:06.070Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Federal Partners Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:07.572Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Federal Partners Sales @ anthropic (instance #1)
[2026-01-14T20:08:07.572Z] [BOT] 💾 BEFORE ARCHIVING: 1404 jobs in database
[2026-01-14T20:08:07.573Z] [BOT] ✅ No jobs to archive (all 1404 jobs within 7-day window)
[2026-01-14T20:08:07.583Z] [BOT] 💾 Saved posted_jobs.json: 1404 active jobs
[2026-01-14T20:08:07.583Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:07.583Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:08.312Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, Industries @ anthropic
[2026-01-14T20:08:11.002Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:12.503Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Industries @ anthropic (instance #1)
[2026-01-14T20:08:12.503Z] [BOT] 💾 BEFORE ARCHIVING: 1405 jobs in database
[2026-01-14T20:08:12.504Z] [BOT] ✅ No jobs to archive (all 1405 jobs within 7-day window)
[2026-01-14T20:08:12.513Z] [BOT] 💾 Saved posted_jobs.json: 1405 active jobs
[2026-01-14T20:08:12.514Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:12.514Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, State & Local Sales" @ anthropic
[2026-01-14T20:08:12.514Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:12.805Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, State & Local Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive, State & Local Sales @ anthropic
[2026-01-14T20:08:14.537Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive, State & Local Sales @ anthropic in #🌉・san-francisco
[2026-01-14T20:08:14.537Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:16.039Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, State & Local Sales @ anthropic (instance #1)
[2026-01-14T20:08:16.039Z] [BOT] 💾 BEFORE ARCHIVING: 1406 jobs in database
[2026-01-14T20:08:16.040Z] [BOT] ✅ No jobs to archive (all 1406 jobs within 7-day window)
[2026-01-14T20:08:16.052Z] [BOT] 💾 Saved posted_jobs.json: 1406 active jobs
[2026-01-14T20:08:16.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:16.052Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst" @ anthropic
[2026-01-14T20:08:16.052Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:16.421Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst @ anthropic in #💲・sales-jobs
  ✅ Industry: Finance Systems, Senior Business Systems Analyst @ anthropic
[2026-01-14T20:08:18.172Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Senior Business Systems Analyst @ anthropic in #🌉・san-francisco
[2026-01-14T20:08:18.173Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:19.674Z] [BOT] 💾 Marked as posted: Finance Systems, Senior Business Systems Analyst @ anthropic (instance #1)
[2026-01-14T20:08:19.674Z] [BOT] 💾 BEFORE ARCHIVING: 1407 jobs in database
[2026-01-14T20:08:19.675Z] [BOT] ✅ No jobs to archive (all 1407 jobs within 7-day window)
[2026-01-14T20:08:19.685Z] [BOT] 💾 Saved posted_jobs.json: 1407 active jobs
[2026-01-14T20:08:19.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:19.685Z] [BOT] 📍 [ROUTING] "Global Indirect Tax Compliance Lead" @ anthropic
[2026-01-14T20:08:19.685Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T20:08:19.993Z] [BOT] ✅ Created forum post: 🏢 Global Indirect Tax Compliance Lead @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Indirect Tax Compliance Lead @ anthropic
[2026-01-14T20:08:21.805Z] [BOT] ✅ Created forum post: 🏢 Global Indirect Tax Compliance Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:23.305Z] [BOT] 💾 Marked as posted: Global Indirect Tax Compliance Lead @ anthropic (instance #1)
[2026-01-14T20:08:23.305Z] [BOT] 💾 BEFORE ARCHIVING: 1408 jobs in database
[2026-01-14T20:08:23.306Z] [BOT] ✅ No jobs to archive (all 1408 jobs within 7-day window)
[2026-01-14T20:08:23.316Z] [BOT] 💾 Saved posted_jobs.json: 1408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:26.317Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T20:08:26.318Z] [BOT] 📍 [ROUTING] "Event Security Program Coordinator " @ anthropic
   Category: TECH (matched: "security")
[2026-01-14T20:08:26.318Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T20:08:26.541Z] [BOT] ✅ Created forum post: 🏢 Event Security Program Coordinator  @ anthropic in #💻・tech-jobs
  ✅ Industry: Event Security Program Coordinator  @ anthropic
[2026-01-14T20:08:28.369Z] [BOT] ✅ Created forum post: 🏢 Event Security Program Coordinator  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:29.870Z] [BOT] 💾 Marked as posted: Event Security Program Coordinator  @ anthropic (instance #1)
[2026-01-14T20:08:29.870Z] [BOT] 💾 BEFORE ARCHIVING: 1409 jobs in database
[2026-01-14T20:08:29.871Z] [BOT] ✅ No jobs to archive (all 1409 jobs within 7-day window)
[2026-01-14T20:08:29.883Z] [BOT] 💾 Saved posted_jobs.json: 1409 active jobs
[2026-01-14T20:08:29.883Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:32.884Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T20:08:32.884Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, Industries" @ anthropic
[2026-01-14T20:08:32.884Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T20:08:33.087Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Industries @ anthropic in #📣・marketing-jobs
[2026-01-14T20:08:33.087Z] [BOT] ✅ Industry: Field Marketing Manager, Industries @ anthropic
[2026-01-14T20:08:34.826Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T20:08:36.327Z] [BOT] 💾 Marked as posted: Field Marketing Manager, Industries @ anthropic (instance #1)
[2026-01-14T20:08:36.327Z] [BOT] 💾 BEFORE ARCHIVING: 1410 jobs in database
[2026-01-14T20:08:36.328Z] [BOT] ✅ No jobs to archive (all 1410 jobs within 7-day window)
[2026-01-14T20:08:36.339Z] [BOT] 💾 Saved posted_jobs.json: 1410 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T20:08:39.340Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T20:08:39.340Z] [BOT] ⏭️  Skipping duplicate: JID_7b5ee9ef (posted within 7 days)
[2026-01-14T20:08:39.341Z] [BOT] ⏭️  Skipping duplicate: JID_19d4825d (posted within 7 days)
[2026-01-14T20:08:39.341Z] [BOT] ⏭️  Skipping duplicate: JID_c9c7ac06 (posted within 7 days)
[2026-01-14T20:08:39.341Z] [BOT] ⏭️  Skipping duplicate: JID_436eda90 (posted within 7 days)
[2026-01-14T20:08:39.342Z] [BOT] ⏭️  Skipping duplicate: JID_38dd38a6 (posted within 7 days)
⏭️  Skipping duplicate: JID_309b7949 (posted within 7 days)
⏭️  Skipping duplicate: JID_ba5a5ed7 (posted within 7 days)
⏭️  Skipping duplicate: JID_1f27265e (posted within 7 days)
⏭️  Skipping duplicate: JID_bc9a7971 (posted within 7 days)
⏭️  Skipping duplicate: JID_cea6099e (posted within 7 days)
[2026-01-14T20:08:39.454Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-14T20:08:39.624Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 10 enriched, 10 posted)
[2026-01-14T20:08:39.625Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T20:08:39.677Z] [BOT] 📂 Loaded 3535 existing routing entries
[2026-01-14T20:08:39.737Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3545
   Timestamp: 2026-01-14T20:08:39.722Z
[2026-01-14T20:08:39.738Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T20:08:39.738Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-14T20:08:39.738Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-14T20:08:39.738Z] [BOT] Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #💲・sales-jobs: 7 posts
     3. #💻・tech-jobs: 1 posts
     4. #📣・marketing-jobs: 1 posts
[2026-01-14T20:08:39.739Z] [BOT] [STATS] Channel stats saved
[2026-01-14T20:08:41.763Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Enterprise Account Executive, Digital Native Business: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Account Executive, Digital Native Business
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*