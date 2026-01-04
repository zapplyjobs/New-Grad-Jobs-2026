# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T00:49:21.897Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T00:48:58.417Z] ========================================
[2026-01-04T00:48:58.419Z] Discord Bot Execution Log
[2026-01-04T00:48:58.419Z] Environment: GitHub Actions
[2026-01-04T00:48:58.419Z] Node Version: v20.19.6
[2026-01-04T00:48:58.419Z] ========================================
[2026-01-04T00:48:58.419Z] Environment Variables Check:
[2026-01-04T00:48:58.419Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T00:48:58.419Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.419Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T00:48:58.419Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T00:48:58.419Z] 
Multi-Channel Configuration:
[2026-01-04T00:48:58.420Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T00:48:58.420Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T00:48:58.420Z] 
Data Files Check:
[2026-01-04T00:48:58.421Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159668 bytes)
[2026-01-04T00:48:58.425Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 428156 bytes)
[2026-01-04T00:48:58.425Z] 
========================================
[2026-01-04T00:48:58.425Z] Starting Enhanced Discord Bot...
[2026-01-04T00:48:58.425Z] ========================================
[2026-01-04T00:48:58.934Z] [BOT] ✅ Loaded V2 database: 847 jobs
[2026-01-04T00:48:59.300Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T00:48:59.300Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T00:48:59.300Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T00:48:59.301Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T00:48:59.369Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T00:48:59.456Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T00:48:59.459Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T00:48:59.459Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T00:48:59.459Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T00:48:59.460Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-04T00:48:59.460Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   -  Senior Manager, Implementation @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Staff Product Designer @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-04T00:48:59.460Z] [BOT] - Startups Account Executive @ brex: new york, new york, united states, san francisco, california, united states
   - Startups Ambassador @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 6 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T00:48:59.464Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-04T00:48:59.465Z] [BOT] 📍 [ROUTING] " Senior Manager, Implementation" @ brex
   Category: SALES (matched: "sales")
[2026-01-04T00:48:59.465Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T00:48:59.470Z] [BOT ERROR] (node:2438) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T00:48:59.578Z] [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1361:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:863:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢  Senior Manager, Implementation @ brex',
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
[2026-01-04T00:48:59.578Z] [BOT] ❌ Industry post failed:  Senior Manager, Implementation
⚠️  Channel full error count: 1/5
[2026-01-04T00:49:01.308Z] [BOT] ✅ Created forum post: 🏢  Senior Manager, Implementation @ brex in #💻・remote-usa
[2026-01-04T00:49:01.308Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T00:49:02.808Z] [BOT] 💾 Marked as posted:  Senior Manager, Implementation @ brex (instance #1)
[2026-01-04T00:49:02.809Z] [BOT] 💾 BEFORE ARCHIVING: 848 jobs in database
[2026-01-04T00:49:02.809Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2026-01-04T00:49:02.818Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:02.818Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-04T00:49:02.819Z] [BOT] 💾 BEFORE ARCHIVING: 849 jobs in database
[2026-01-04T00:49:02.819Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2026-01-04T00:49:02.825Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
[2026-01-04T00:49:02.826Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:02.826Z] [BOT] 💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
💾 BEFORE ARCHIVING: 850 jobs in database
[2026-01-04T00:49:02.826Z] [BOT] ✅ No jobs to archive (all 850 jobs within 7-day window)
[2026-01-04T00:49:02.833Z] [BOT] 💾 Saved posted_jobs.json: 850 active jobs
[2026-01-04T00:49:02.833Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Manager, Implementation @ brex (instance #1)
[2026-01-04T00:49:02.833Z] [BOT] 💾 BEFORE ARCHIVING: 851 jobs in database
[2026-01-04T00:49:02.833Z] [BOT] ✅ No jobs to archive (all 851 jobs within 7-day window)
[2026-01-04T00:49:02.840Z] [BOT] 💾 Saved posted_jobs.json: 851 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:02.841Z] [BOT] 📍 [ROUTING] "Startups Account Executive" @ brex
   Category: SALES (matched: "sales")
[2026-01-04T00:49:02.841Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T00:49:03.087Z] [BOT] ✅ Created forum post: 🏢 Startups Account Executive @ brex in #💲・sales-jobs
[2026-01-04T00:49:03.087Z] [BOT] ✅ Industry: Startups Account Executive @ brex
[2026-01-04T00:49:04.760Z] [BOT] ✅ Created forum post: 🏢 Startups Account Executive @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T00:49:06.262Z] [BOT] 💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-04T00:49:06.262Z] [BOT] 💾 BEFORE ARCHIVING: 852 jobs in database
[2026-01-04T00:49:06.262Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2026-01-04T00:49:06.268Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
[2026-01-04T00:49:06.268Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Startups Account Executive @ brex (instance #1)
[2026-01-04T00:49:06.268Z] [BOT] 💾 BEFORE ARCHIVING: 853 jobs in database
[2026-01-04T00:49:06.269Z] [BOT] ✅ No jobs to archive (all 853 jobs within 7-day window)
[2026-01-04T00:49:06.273Z] [BOT] 💾 Saved posted_jobs.json: 853 active jobs
[2026-01-04T00:49:06.273Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:06.275Z] [BOT] 📍 [ROUTING] "Startups Ambassador" @ brex
[2026-01-04T00:49:06.275Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T00:49:06.493Z] [BOT] ✅ Created forum post: 🏢 Startups Ambassador @ brex in #💲・sales-jobs
[2026-01-04T00:49:06.494Z] [BOT] ✅ Industry: Startups Ambassador @ brex
[2026-01-04T00:49:08.221Z] [BOT] ✅ Created forum post: 🏢 Startups Ambassador @ brex in #🌉・san-francisco
[2026-01-04T00:49:08.222Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T00:49:09.722Z] [BOT] 💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-04T00:49:09.722Z] [BOT] 💾 BEFORE ARCHIVING: 854 jobs in database
[2026-01-04T00:49:09.723Z] [BOT] ✅ No jobs to archive (all 854 jobs within 7-day window)
[2026-01-04T00:49:09.730Z] [BOT] 💾 Saved posted_jobs.json: 854 active jobs
[2026-01-04T00:49:09.730Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Startups Ambassador @ brex (instance #1)
[2026-01-04T00:49:09.730Z] [BOT] 💾 BEFORE ARCHIVING: 855 jobs in database
[2026-01-04T00:49:09.731Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-04T00:49:09.736Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
[2026-01-04T00:49:09.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:12.737Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T00:49:12.738Z] [BOT] 📍 [ROUTING] "Staff Product Designer" @ brex
   Category: MARKETING (matched: "marketing")
[2026-01-04T00:49:12.738Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T00:49:12.931Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ brex in #📣・marketing-jobs
[2026-01-04T00:49:12.931Z] [BOT] ✅ Industry: Staff Product Designer @ brex
[2026-01-04T00:49:14.602Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ brex in #🌉・san-francisco
[2026-01-04T00:49:14.602Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T00:49:16.103Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-04T00:49:16.103Z] [BOT] 💾 BEFORE ARCHIVING: 856 jobs in database
[2026-01-04T00:49:16.104Z] [BOT] ✅ No jobs to archive (all 856 jobs within 7-day window)
[2026-01-04T00:49:16.111Z] [BOT] 💾 Saved posted_jobs.json: 856 active jobs
[2026-01-04T00:49:16.111Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:16.111Z] [BOT] 💾 Marked as posted: Staff Product Designer @ brex (instance #1)
[2026-01-04T00:49:16.111Z] [BOT] 💾 BEFORE ARCHIVING: 857 jobs in database
[2026-01-04T00:49:16.112Z] [BOT] ✅ No jobs to archive (all 857 jobs within 7-day window)
[2026-01-04T00:49:16.118Z] [BOT] 💾 Saved posted_jobs.json: 857 active jobs
[2026-01-04T00:49:16.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T00:49:19.118Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-04T00:49:19.119Z] [BOT] ⏭️  Skipping duplicate: JID_a30c2924 (posted within 7 days)
[2026-01-04T00:49:19.119Z] [BOT] ⏭️  Skipping duplicate: JID_c98b801d (posted within 7 days)
[2026-01-04T00:49:19.119Z] [BOT] ⏭️  Skipping duplicate: JID_bb4f8bca (posted within 7 days)
[2026-01-04T00:49:19.119Z] [BOT] ⏭️  Skipping duplicate: JID_9259cd44 (posted within 7 days)
[2026-01-04T00:49:19.157Z] [BOT] ✅ Loaded pending queue: 443 total (423 pending, 20 enriched, 0 posted)
[2026-01-04T00:49:19.197Z] [BOT] ✅ Saved pending queue: 443 total (423 pending, 16 enriched, 4 posted)
[2026-01-04T00:49:19.198Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T00:49:19.246Z] [BOT] 📂 Loaded 1755 existing routing entries
[2026-01-04T00:49:19.293Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-04T00:49:19.293Z] [BOT] Total entries: 1759
   Timestamp: 2026-01-04T00:49:19.286Z
[2026-01-04T00:49:19.294Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 8
   Successful: 7
   Failed: 1
   Skipped: 0
[2026-01-04T00:49:19.294Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T00:49:19.294Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
[2026-01-04T00:49:19.294Z] [BOT] 1. #💲・sales-jobs: 2 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 1 posts
     4. #🗽・new-york: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-04T00:49:19.294Z] [BOT] [STATS] Channel stats saved
[2026-01-04T00:49:21.310Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2438) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job  Senior Manager, Implementation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  Senior Manager, Implementation
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*