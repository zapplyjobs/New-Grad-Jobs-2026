# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T05:01:47.722Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T05:00:56.733Z] ========================================
[2026-01-04T05:00:56.735Z] Discord Bot Execution Log
[2026-01-04T05:00:56.735Z] Environment: GitHub Actions
[2026-01-04T05:00:56.735Z] Node Version: v20.19.6
[2026-01-04T05:00:56.735Z] ========================================
[2026-01-04T05:00:56.735Z] Environment Variables Check:
[2026-01-04T05:00:56.735Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T05:00:56.735Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T05:00:56.736Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T05:00:56.736Z] 
Multi-Channel Configuration:
[2026-01-04T05:00:56.736Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.736Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.737Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T05:00:56.737Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T05:00:56.737Z] 
Data Files Check:
[2026-01-04T05:00:56.738Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162050 bytes)
[2026-01-04T05:00:56.741Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 437942 bytes)
[2026-01-04T05:00:56.741Z] 
========================================
[2026-01-04T05:00:56.741Z] Starting Enhanced Discord Bot...
[2026-01-04T05:00:56.741Z] ========================================
[2026-01-04T05:00:57.257Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-04T05:00:57.765Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T05:00:57.766Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T05:00:57.766Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T05:00:57.767Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T05:00:57.836Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T05:00:57.926Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T05:00:57.929Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T05:00:57.929Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T05:00:57.930Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T05:00:57.930Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T05:00:57.931Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T05:00:57.935Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T05:00:57.935Z] [BOT] 📍 [ROUTING] "Software Engineer, iOS" @ anthropic
[2026-01-04T05:00:57.936Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:00:57.940Z] [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T05:00:58.068Z] [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, iOS @ anthropic',
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
[2026-01-04T05:00:58.068Z] [BOT] ❌ Industry post failed: Software Engineer, iOS
[2026-01-04T05:00:58.068Z] [BOT] ⚠️  Channel full error count: 1/5
[2026-01-04T05:00:59.754Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, iOS @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:01.256Z] [BOT] 💾 Marked as posted: Software Engineer, iOS @ anthropic (instance #1)
[2026-01-04T05:01:01.257Z] [BOT] 💾 BEFORE ARCHIVING: 869 jobs in database
[2026-01-04T05:01:01.257Z] [BOT] ✅ No jobs to archive (all 869 jobs within 7-day window)
[2026-01-04T05:01:01.270Z] [BOT] 💾 Saved posted_jobs.json: 869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:01.270Z] [BOT] 📍 [ROUTING] "Performance Engineer, GPU" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T05:01:01.271Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:01:01.470Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer, GPU @ anthropic in #💻・tech-jobs
[2026-01-04T05:01:01.470Z] [BOT] ✅ Industry: Performance Engineer, GPU @ anthropic
[2026-01-04T05:01:03.196Z] [BOT] ✅ Created forum post: 🏢 Performance Engineer, GPU @ anthropic in #🌉・san-francisco
[2026-01-04T05:01:03.196Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:04.697Z] [BOT] 💾 Marked as posted: Performance Engineer, GPU @ anthropic (instance #1)
[2026-01-04T05:01:04.698Z] [BOT] 💾 BEFORE ARCHIVING: 870 jobs in database
[2026-01-04T05:01:04.698Z] [BOT] ✅ No jobs to archive (all 870 jobs within 7-day window)
[2026-01-04T05:01:04.704Z] [BOT] 💾 Saved posted_jobs.json: 870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:04.704Z] [BOT] 📍 [ROUTING] "Engineering Manager, Human Data Interfaces" @ anthropic
[2026-01-04T05:01:04.705Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T05:01:04.983Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Human Data Interfaces @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Human Data Interfaces @ anthropic
[2026-01-04T05:01:06.714Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Human Data Interfaces @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:08.215Z] [BOT] 💾 Marked as posted: Engineering Manager, Human Data Interfaces @ anthropic (instance #1)
[2026-01-04T05:01:08.215Z] [BOT] 💾 BEFORE ARCHIVING: 871 jobs in database
[2026-01-04T05:01:08.216Z] [BOT] ✅ No jobs to archive (all 871 jobs within 7-day window)
[2026-01-04T05:01:08.223Z] [BOT] 💾 Saved posted_jobs.json: 871 active jobs
[2026-01-04T05:01:08.223Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:11.224Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T05:01:11.225Z] [BOT] 📍 [ROUTING] "Business Development, Strategic Technology Partnerships" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T05:01:11.487Z] [BOT] ✅ Created forum post: 🏢 Business Development, Strategic Technology Partnerships @ anthropic in #💲・sales-jobs
  ✅ Industry: Business Development, Strategic Technology Partnerships @ anthropic
[2026-01-04T05:01:13.273Z] [BOT] ✅ Created forum post: 🏢 Business Development, Strategic Technology Partnerships @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:14.774Z] [BOT] 💾 Marked as posted: Business Development, Strategic Technology Partnerships @ anthropic (instance #1)
[2026-01-04T05:01:14.774Z] [BOT] 💾 BEFORE ARCHIVING: 872 jobs in database
[2026-01-04T05:01:14.775Z] [BOT] ✅ No jobs to archive (all 872 jobs within 7-day window)
[2026-01-04T05:01:14.783Z] [BOT] 💾 Saved posted_jobs.json: 872 active jobs
[2026-01-04T05:01:14.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:17.784Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-04T05:01:17.785Z] [BOT] 📍 [ROUTING] "Research Engineer – Cybersecurity RL" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:01:17.785Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T05:01:20.153Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – Cybersecurity RL @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer – Cybersecurity RL @ anthropic
[2026-01-04T05:01:21.867Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – Cybersecurity RL @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:23.368Z] [BOT] 💾 Marked as posted: Research Engineer – Cybersecurity RL @ anthropic (instance #1)
[2026-01-04T05:01:23.369Z] [BOT] 💾 BEFORE ARCHIVING: 873 jobs in database
[2026-01-04T05:01:23.369Z] [BOT] ✅ No jobs to archive (all 873 jobs within 7-day window)
[2026-01-04T05:01:23.377Z] [BOT] 💾 Saved posted_jobs.json: 873 active jobs
[2026-01-04T05:01:23.377Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:23.377Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Portuguese Speaking" @ figma
[2026-01-04T05:01:23.377Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:01:23.541Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Portuguese Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Portuguese Speaking @ figma
[2026-01-04T05:01:25.322Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Portuguese Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:26.823Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Portuguese Speaking @ figma (instance #1)
[2026-01-04T05:01:26.823Z] [BOT] 💾 BEFORE ARCHIVING: 874 jobs in database
[2026-01-04T05:01:26.824Z] [BOT] ✅ No jobs to archive (all 874 jobs within 7-day window)
[2026-01-04T05:01:26.831Z] [BOT] 💾 Saved posted_jobs.json: 874 active jobs
[2026-01-04T05:01:26.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:26.831Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Korean Speaking" @ figma
[2026-01-04T05:01:26.831Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-04T05:01:26.832Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:01:27.024Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Korean Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Korean Speaking @ figma
[2026-01-04T05:01:28.717Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Korean Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:30.218Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Korean Speaking @ figma (instance #1)
[2026-01-04T05:01:30.218Z] [BOT] 💾 BEFORE ARCHIVING: 875 jobs in database
[2026-01-04T05:01:30.219Z] [BOT] ✅ No jobs to archive (all 875 jobs within 7-day window)
[2026-01-04T05:01:30.226Z] [BOT] 💾 Saved posted_jobs.json: 875 active jobs
[2026-01-04T05:01:30.227Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:30.227Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Japanese Speaking" @ figma
[2026-01-04T05:01:30.227Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T05:01:30.442Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Japanese Speaking @ figma in #🤖・ai-jobs
  ✅ Industry: Enterprise Support Specialist, Japanese Speaking @ figma
[2026-01-04T05:01:32.107Z] [BOT] ✅ Created forum post: 🏢 Enterprise Support Specialist, Japanese Speaking @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:33.608Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Japanese Speaking @ figma (instance #1)
[2026-01-04T05:01:33.609Z] [BOT] 💾 BEFORE ARCHIVING: 876 jobs in database
[2026-01-04T05:01:33.609Z] [BOT] ✅ No jobs to archive (all 876 jobs within 7-day window)
[2026-01-04T05:01:33.619Z] [BOT] 💾 Saved posted_jobs.json: 876 active jobs
[2026-01-04T05:01:33.619Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:33.619Z] [BOT] 📍 [ROUTING] "Staff Analytics Engineer" @ gohighlevel
[2026-01-04T05:01:33.620Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T05:01:33.811Z] [BOT] ✅ Created forum post: 🏢 Staff Analytics Engineer @ gohighlevel in #🤖・ai-jobs
[2026-01-04T05:01:33.811Z] [BOT] ✅ Industry: Staff Analytics Engineer @ gohighlevel
[2026-01-04T05:01:35.313Z] [BOT] 💾 Marked as posted: Staff Analytics Engineer @ gohighlevel (instance #1)
[2026-01-04T05:01:35.313Z] [BOT] 💾 BEFORE ARCHIVING: 877 jobs in database
[2026-01-04T05:01:35.314Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-04T05:01:35.322Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:38.323Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-04T05:01:38.323Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Claude Code" @ anthropic
   Category: MARKETING (matched: "marketing")
[2026-01-04T05:01:38.323Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-04T05:01:38.581Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Claude Code @ anthropic in #📣・marketing-jobs
[2026-01-04T05:01:38.581Z] [BOT] ✅ Industry: Product Marketing Manager, Claude Code @ anthropic
[2026-01-04T05:01:40.283Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Claude Code @ anthropic in #🌉・san-francisco
[2026-01-04T05:01:40.283Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T05:01:41.784Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Claude Code @ anthropic (instance #1)
[2026-01-04T05:01:41.785Z] [BOT] 💾 BEFORE ARCHIVING: 878 jobs in database
[2026-01-04T05:01:41.785Z] [BOT] ✅ No jobs to archive (all 878 jobs within 7-day window)
[2026-01-04T05:01:41.792Z] [BOT] 💾 Saved posted_jobs.json: 878 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T05:01:44.793Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T05:01:44.793Z] [BOT] ⏭️  Skipping duplicate: JID_5f23f2e1 (posted within 7 days)
[2026-01-04T05:01:44.794Z] [BOT] ⏭️  Skipping duplicate: JID_7bf52a08 (posted within 7 days)
[2026-01-04T05:01:44.794Z] [BOT] ⏭️  Skipping duplicate: JID_3008de4b (posted within 7 days)
⏭️  Skipping duplicate: JID_a84fdeff (posted within 7 days)
⏭️  Skipping duplicate: JID_88d8e6a9 (posted within 7 days)
⏭️  Skipping duplicate: JID_a0ec39cd (posted within 7 days)
[2026-01-04T05:01:44.794Z] [BOT] ⏭️  Skipping duplicate: JID_8eb7eef1 (posted within 7 days)
⏭️  Skipping duplicate: JID_68539aa3 (posted within 7 days)
[2026-01-04T05:01:44.794Z] [BOT] ⏭️  Skipping duplicate: JID_bc9a62c1 (posted within 7 days)
[2026-01-04T05:01:44.794Z] [BOT] ⏭️  Skipping duplicate: JID_7845e4eb (posted within 7 days)
[2026-01-04T05:01:44.832Z] [BOT] ✅ Loaded pending queue: 421 total (401 pending, 20 enriched, 0 posted)
[2026-01-04T05:01:44.871Z] [BOT] ✅ Saved pending queue: 421 total (401 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-04T05:01:44.872Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-04T05:01:44.920Z] [BOT] 📂 Loaded 1769 existing routing entries
[2026-01-04T05:01:44.968Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T05:01:44.968Z] [BOT] Total entries: 1779
   Timestamp: 2026-01-04T05:01:44.960Z
[2026-01-04T05:01:44.968Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T05:01:44.968Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-04T05:01:44.969Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T05:01:44.969Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
[2026-01-04T05:01:44.969Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 2 posts
     4. #💲・sales-jobs: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-04T05:01:44.969Z] [BOT] [STATS] Channel stats saved
[2026-01-04T05:01:46.985Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, iOS
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*