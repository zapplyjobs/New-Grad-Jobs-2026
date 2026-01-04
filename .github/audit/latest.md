# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T09:37:35.205Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T09:36:50.587Z] ========================================
[2026-01-04T09:36:50.589Z] Discord Bot Execution Log
[2026-01-04T09:36:50.589Z] Environment: GitHub Actions
[2026-01-04T09:36:50.589Z] Node Version: v20.19.6
[2026-01-04T09:36:50.589Z] ========================================
[2026-01-04T09:36:50.589Z] Environment Variables Check:
[2026-01-04T09:36:50.589Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T09:36:50.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T09:36:50.589Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T09:36:50.589Z] 
Multi-Channel Configuration:
[2026-01-04T09:36:50.590Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T09:36:50.590Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T09:36:50.590Z] 
Data Files Check:
[2026-01-04T09:36:50.592Z] .github/data/new_jobs.json: ✅ Exists (10 items, 169279 bytes)
[2026-01-04T09:36:50.595Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 494741 bytes)
[2026-01-04T09:36:50.595Z] 
========================================
[2026-01-04T09:36:50.595Z] Starting Enhanced Discord Bot...
[2026-01-04T09:36:50.595Z] ========================================
[2026-01-04T09:36:51.132Z] [BOT] ✅ Loaded V2 database: 982 jobs
[2026-01-04T09:36:51.877Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T09:36:51.877Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T09:36:51.877Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T09:36:51.878Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T09:36:51.948Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T09:36:52.038Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T09:36:52.040Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T09:36:52.041Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T09:36:52.041Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T09:36:52.042Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T09:36:52.042Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T09:36:52.046Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-04T09:36:52.046Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-04T09:36:52.046Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:36:52.064Z] [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T09:36:52.147Z] [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, ML Acceleration @ anthropic',
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
[2026-01-04T09:36:52.147Z] [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
⚠️  Channel full error count: 1/5
[2026-01-04T09:36:53.852Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, ML Acceleration @ anthropic in #🌉・san-francisco
[2026-01-04T09:36:53.852Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T09:36:55.354Z] [BOT] 💾 Marked as posted: Engineering Manager, ML Acceleration @ anthropic (instance #1)
[2026-01-04T09:36:55.354Z] [BOT] 💾 BEFORE ARCHIVING: 983 jobs in database
[2026-01-04T09:36:55.355Z] [BOT] ✅ No jobs to archive (all 983 jobs within 7-day window)
[2026-01-04T09:36:55.365Z] [BOT] 💾 Saved posted_jobs.json: 983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:36:55.365Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, Research Tools" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-04T09:36:55.366Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:36:55.574Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, Research Tools @ anthropic in #🤖・ai-jobs
[2026-01-04T09:36:55.574Z] [BOT] ✅ Industry: Machine Learning Systems Engineer, Research Tools @ anthropic
[2026-01-04T09:36:57.274Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, Research Tools @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:36:58.775Z] [BOT] 💾 Marked as posted: Machine Learning Systems Engineer, Research Tools @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 984 jobs in database
[2026-01-04T09:36:58.776Z] [BOT] ✅ No jobs to archive (all 984 jobs within 7-day window)
[2026-01-04T09:36:58.783Z] [BOT] 💾 Saved posted_jobs.json: 984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:36:58.783Z] [BOT] 📍 [ROUTING] "Machine Learning Systems Engineer, RL Engineering" @ anthropic
[2026-01-04T09:36:58.783Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:36:58.960Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, RL Engineering @ anthropic in #🤖・ai-jobs
  ✅ Industry: Machine Learning Systems Engineer, RL Engineering @ anthropic
[2026-01-04T09:37:00.728Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Systems Engineer, RL Engineering @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:02.230Z] [BOT] 💾 Marked as posted: Machine Learning Systems Engineer, RL Engineering @ anthropic (instance #1)
[2026-01-04T09:37:02.230Z] [BOT] 💾 BEFORE ARCHIVING: 985 jobs in database
[2026-01-04T09:37:02.231Z] [BOT] ✅ No jobs to archive (all 985 jobs within 7-day window)
[2026-01-04T09:37:02.238Z] [BOT] 💾 Saved posted_jobs.json: 985 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Manager of Solutions Architecture" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T09:37:02.621Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture @ anthropic in #🤖・ai-jobs
  ✅ Industry: Manager of Solutions Architecture @ anthropic
[2026-01-04T09:37:04.272Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:05.774Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture @ anthropic (instance #1)
[2026-01-04T09:37:05.774Z] [BOT] 💾 BEFORE ARCHIVING: 986 jobs in database
[2026-01-04T09:37:05.775Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-04T09:37:05.781Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:05.782Z] [BOT] 📍 [ROUTING] "Manager of Solutions Architecture, Public Sector, Applied AI" @ anthropic
[2026-01-04T09:37:05.782Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:37:05.939Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic
[2026-01-04T09:37:07.678Z] [BOT] ✅ Created forum post: 🏢 Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:09.178Z] [BOT] 💾 Marked as posted: Manager of Solutions Architecture, Public Sector, Applied AI @ anthropic (instance #1)
[2026-01-04T09:37:09.179Z] [BOT] 💾 BEFORE ARCHIVING: 987 jobs in database
[2026-01-04T09:37:09.180Z] [BOT] ✅ No jobs to archive (all 987 jobs within 7-day window)
[2026-01-04T09:37:09.188Z] [BOT] 💾 Saved posted_jobs.json: 987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:09.189Z] [BOT] 📍 [ROUTING] "ML Infrastructure Engineer, Safeguards" @ anthropic
[2026-01-04T09:37:09.189Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T09:37:09.492Z] [BOT] ✅ Created forum post: 🏢 ML Infrastructure Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: ML Infrastructure Engineer, Safeguards @ anthropic
[2026-01-04T09:37:11.123Z] [BOT] ✅ Created forum post: 🏢 ML Infrastructure Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:12.624Z] [BOT] 💾 Marked as posted: ML Infrastructure Engineer, Safeguards @ anthropic (instance #1)
[2026-01-04T09:37:12.624Z] [BOT] 💾 BEFORE ARCHIVING: 988 jobs in database
[2026-01-04T09:37:12.625Z] [BOT] ✅ No jobs to archive (all 988 jobs within 7-day window)
[2026-01-04T09:37:12.632Z] [BOT] 💾 Saved posted_jobs.json: 988 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:15.633Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-04T09:37:15.634Z] [BOT] 📍 [ROUTING] "Manager, Customer Success" @ anthropic
[2026-01-04T09:37:15.634Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:37:15.836Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Customer Success @ anthropic
[2026-01-04T09:37:17.649Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:19.150Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ anthropic (instance #1)
[2026-01-04T09:37:19.150Z] [BOT] 💾 BEFORE ARCHIVING: 989 jobs in database
[2026-01-04T09:37:19.151Z] [BOT] ✅ No jobs to archive (all 989 jobs within 7-day window)
[2026-01-04T09:37:19.160Z] [BOT] 💾 Saved posted_jobs.json: 989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:19.160Z] [BOT] 📍 [ROUTING] "Manager of Associate Solutions Architects" @ anthropic
[2026-01-04T09:37:19.160Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:37:19.426Z] [BOT] ✅ Created forum post: 🏢 Manager of Associate Solutions Architects @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager of Associate Solutions Architects @ anthropic
[2026-01-04T09:37:21.124Z] [BOT] ✅ Created forum post: 🏢 Manager of Associate Solutions Architects @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:22.626Z] [BOT] 💾 Marked as posted: Manager of Associate Solutions Architects @ anthropic (instance #1)
[2026-01-04T09:37:22.626Z] [BOT] 💾 BEFORE ARCHIVING: 990 jobs in database
[2026-01-04T09:37:22.627Z] [BOT] ✅ No jobs to archive (all 990 jobs within 7-day window)
[2026-01-04T09:37:22.635Z] [BOT] 💾 Saved posted_jobs.json: 990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:22.636Z] [BOT] 📍 [ROUTING] "Manager, Sales Development" @ anthropic
[2026-01-04T09:37:22.636Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:37:22.820Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Sales Development @ anthropic
[2026-01-04T09:37:24.491Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:25.992Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ anthropic (instance #1)
[2026-01-04T09:37:25.992Z] [BOT] 💾 BEFORE ARCHIVING: 991 jobs in database
[2026-01-04T09:37:25.993Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-04T09:37:26.002Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:26.002Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive, Industries" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-04T09:37:26.002Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T09:37:26.210Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Executive, Industries @ anthropic
[2026-01-04T09:37:27.935Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T09:37:29.436Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive, Industries @ anthropic (instance #1)
[2026-01-04T09:37:29.437Z] [BOT] 💾 BEFORE ARCHIVING: 992 jobs in database
[2026-01-04T09:37:29.437Z] [BOT] ✅ No jobs to archive (all 992 jobs within 7-day window)
[2026-01-04T09:37:29.445Z] [BOT] 💾 Saved posted_jobs.json: 992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T09:37:32.446Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T09:37:32.446Z] [BOT] ⏭️  Skipping duplicate: JID_8721beb5 (posted within 7 days)
[2026-01-04T09:37:32.446Z] [BOT] ⏭️  Skipping duplicate: JID_bf081e6e (posted within 7 days)
[2026-01-04T09:37:32.447Z] [BOT] ⏭️  Skipping duplicate: JID_d9b8afd8 (posted within 7 days)
⏭️  Skipping duplicate: JID_dda80660 (posted within 7 days)
⏭️  Skipping duplicate: JID_e19bc474 (posted within 7 days)
⏭️  Skipping duplicate: JID_58b7e124 (posted within 7 days)
⏭️  Skipping duplicate: JID_620d10bb (posted within 7 days)
[2026-01-04T09:37:32.447Z] [BOT] ⏭️  Skipping duplicate: JID_d2d21292 (posted within 7 days)
⏭️  Skipping duplicate: JID_d1e0fc36 (posted within 7 days)
[2026-01-04T09:37:32.447Z] [BOT] ⏭️  Skipping duplicate: JID_6ef7d85e (posted within 7 days)
[2026-01-04T09:37:32.475Z] [BOT] ✅ Loaded pending queue: 308 total (288 pending, 20 enriched, 0 posted)
[2026-01-04T09:37:32.504Z] [BOT] ✅ Saved pending queue: 308 total (288 pending, 10 enriched, 10 posted)
[2026-01-04T09:37:32.504Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T09:37:32.556Z] [BOT] 📂 Loaded 1889 existing routing entries
[2026-01-04T09:37:32.606Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T09:37:32.606Z] [BOT] Total entries: 1899
   Timestamp: 2026-01-04T09:37:32.598Z
[2026-01-04T09:37:32.607Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 20
[2026-01-04T09:37:32.607Z] [BOT] Successful: 19
   Failed: 1
   Skipped: 0
[2026-01-04T09:37:32.607Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-04T09:37:32.607Z] [BOT] Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 10 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💲・sales-jobs: 4 posts
[2026-01-04T09:37:32.607Z] [BOT] [STATS] Channel stats saved
[2026-01-04T09:37:34.622Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, ML Acceleration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, ML Acceleration
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*