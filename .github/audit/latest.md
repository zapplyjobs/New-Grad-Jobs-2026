# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T17:49:28.190Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T17:49:00.261Z] ========================================
[2025-12-22T17:49:00.263Z] Discord Bot Execution Log
[2025-12-22T17:49:00.263Z] Environment: GitHub Actions
[2025-12-22T17:49:00.263Z] Node Version: v20.19.6
[2025-12-22T17:49:00.263Z] ========================================
[2025-12-22T17:49:00.263Z] Environment Variables Check:
[2025-12-22T17:49:00.263Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T17:49:00.263Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T17:49:00.264Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T17:49:00.264Z] 
Multi-Channel Configuration:
[2025-12-22T17:49:00.264Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T17:49:00.264Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T17:49:00.264Z] 
Data Files Check:
[2025-12-22T17:49:00.265Z] .github/data/new_jobs.json: ✅ Exists (5 items, 26524 bytes)
[2025-12-22T17:49:00.269Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 538470 bytes)
[2025-12-22T17:49:00.269Z] 
========================================
[2025-12-22T17:49:00.269Z] Starting Enhanced Discord Bot...
[2025-12-22T17:49:00.269Z] ========================================
[2025-12-22T17:49:00.779Z] [BOT] ✅ Loaded V2 database: 920 jobs
[2025-12-22T17:49:01.420Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T17:49:01.421Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T17:49:01.421Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T17:49:01.421Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2025-12-22T17:49:01.534Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 169
[2025-12-22T17:49:01.536Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-22T17:49:01.536Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T17:49:01.536Z] [BOT] 📋 After blacklist filter: 4 jobs (1 blacklisted)
[2025-12-22T17:49:01.536Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2025-12-22T17:49:01.537Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2025-12-22T17:49:01.537Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T17:49:01.538Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-22T17:49:01.540Z] [BOT] 📍 [ROUTING] "Data Scientist I - Hybrid" @ ORG_96324500
[2025-12-22T17:49:01.540Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-22T17:49:01.544Z] [BOT ERROR] (node:2723) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T17:49:01.720Z] [BOT ERROR] ❌ Error posting job Data Scientist I - Hybrid: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist I - Hybrid @ Radian',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2025-12-22T17:49:01.720Z] [BOT] ❌ Industry post failed: Data Scientist I - Hybrid
⚠️  Channel full error count: 1/5
[2025-12-22T17:49:03.504Z] [BOT] ✅ Created forum post: 🏢 Data Scientist I - Hybrid @ ORG_96324500 in #🗽・new-york
[2025-12-22T17:49:03.504Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-22T17:49:05.005Z] [BOT] 💾 Marked as posted: Data Scientist I - Hybrid @ ORG_96324500 (instance #1)
[2025-12-22T17:49:05.006Z] [BOT] 💾 BEFORE ARCHIVING: 921 jobs in database
[2025-12-22T17:49:05.007Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2025-12-22T17:49:05.418Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T17:49:08.419Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-22T17:49:08.419Z] [BOT] 📍 [ROUTING] "Data Analyst Associate" @ ORG_82c7ab7d
[2025-12-22T17:49:08.419Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-22T17:49:08.700Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Associate @ ORG_82c7ab7d in #🤖・ai-jobs
[2025-12-22T17:49:08.700Z] [BOT] ✅ Industry: Data Analyst Associate @ ORG_82c7ab7d
[2025-12-22T17:49:10.487Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Associate @ ORG_82c7ab7d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T17:49:11.986Z] [BOT] 💾 Marked as posted: Data Analyst Associate @ ORG_82c7ab7d (instance #1)
[2025-12-22T17:49:11.987Z] [BOT] 💾 BEFORE ARCHIVING: 922 jobs in database
[2025-12-22T17:49:11.987Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2025-12-22T17:49:11.996Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2025-12-22T17:49:11.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T17:49:11.997Z] [BOT] 📍 [ROUTING] "AI Developer I- Call Center" @ ORG_a151ceb1 Financial Bank
[2025-12-22T17:49:11.997Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-22T17:49:12.308Z] [BOT] ✅ Created forum post: 🏢 AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #🤖・ai-jobs
  ✅ Industry: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank
[2025-12-22T17:49:14.046Z] [BOT] ✅ Created forum post: 🏢 AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-22T17:49:15.547Z] [BOT] 💾 Marked as posted: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank (instance #1)
[2025-12-22T17:49:15.547Z] [BOT] 💾 BEFORE ARCHIVING: 923 jobs in database
[2025-12-22T17:49:15.548Z] [BOT] ✅ No jobs to archive (all 923 jobs within 7-day window)
[2025-12-22T17:49:15.555Z] [BOT] 💾 Saved posted_jobs.json: 923 active jobs
[2025-12-22T17:49:15.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T17:49:18.556Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-22T17:49:18.557Z] [BOT] 📍 [ROUTING] "Associate Software Engineer (Temporary)" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T17:49:18.801Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros.
[2025-12-22T17:49:20.753Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-22T17:49:22.254Z] [BOT] 💾 Marked as posted: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. (instance #1)
[2025-12-22T17:49:22.255Z] [BOT] 💾 BEFORE ARCHIVING: 924 jobs in database
[2025-12-22T17:49:22.255Z] [BOT] ✅ No jobs to archive (all 924 jobs within 7-day window)
[2025-12-22T17:49:22.263Z] [BOT] 💾 Saved posted_jobs.json: 924 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T17:49:25.263Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-12-22T17:49:25.264Z] [BOT] ⏭️  Skipping duplicate: JID_ad33ad88-radian_external_career_site-JID_af066355-hybrid_r20250160 (posted within 7 days)
[2025-12-22T17:49:25.264Z] [BOT] ⏭️  Skipping duplicate: JID_3565e15e-associate_r16544 (posted within 7 days)
[2025-12-22T17:49:25.264Z] [BOT] ⏭️  Skipping duplicate: JID_5468cf71-first_financial_bank-JID_a7a52860-center_jr102406 (posted within 7 days)
[2025-12-22T17:49:25.264Z] [BOT] ⏭️  Skipping duplicate: JID_ee7c7aa1-_r000101071 (posted within 7 days)
[2025-12-22T17:49:25.265Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-22T17:49:25.266Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 1 enriched, 4 posted)
[2025-12-22T17:49:25.266Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T17:49:25.308Z] [BOT] 📂 Loaded 1005 existing routing entries
[2025-12-22T17:49:25.357Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 1009
   Timestamp: 2025-12-22T17:49:25.349Z
📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
   Total attempts: 9
   Successful: 7
   Failed: 1
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🗽・new-york: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #🤠・austin: 1 posts
     5. #💻・tech-jobs: 1 posts
[STATS] Channel stats saved
[2025-12-22T17:49:27.366Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2723) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Scientist I - Hybrid: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist I - Hybrid
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*