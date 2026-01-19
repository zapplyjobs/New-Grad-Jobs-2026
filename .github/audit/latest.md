# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T00:51:17.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T00:50:21.151Z] ========================================
[2026-01-19T00:50:21.153Z] Discord Bot Execution Log
[2026-01-19T00:50:21.153Z] Environment: GitHub Actions
[2026-01-19T00:50:21.153Z] Node Version: v20.19.6
[2026-01-19T00:50:21.153Z] ========================================
[2026-01-19T00:50:21.153Z] Environment Variables Check:
[2026-01-19T00:50:21.153Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T00:50:21.153Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.153Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T00:50:21.154Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T00:50:21.154Z] 
Multi-Channel Configuration:
[2026-01-19T00:50:21.154Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T00:50:21.154Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T00:50:21.155Z] 
Data Files Check:
[2026-01-19T00:50:21.156Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130872 bytes)
[2026-01-19T00:50:21.167Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1530008 bytes)
[2026-01-19T00:50:21.167Z] 
========================================
[2026-01-19T00:50:21.167Z] Starting Enhanced Discord Bot...
[2026-01-19T00:50:21.167Z] ========================================
[2026-01-19T00:50:21.715Z] [BOT] ✅ Loaded V2 database: 2817 jobs
[2026-01-19T00:50:22.247Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T00:50:22.247Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T00:50:22.248Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T00:50:22.372Z] [BOT] ✅ Loaded pending queue: 2825 total (2805 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineering Manager at discord
[2026-01-19T00:50:22.376Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T00:50:22.377Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T00:50:22.377Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T00:50:22.378Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T00:50:22.378Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T00:50:22.383Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-19T00:50:22.383Z] [BOT] 📍 [ROUTING] "Data Engineering Manager" @ discord
   Category: AI (matched: "machine learning")
[2026-01-19T00:50:22.384Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T00:50:22.388Z] [BOT ERROR] (node:3018) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T00:50:22.520Z] [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineering Manager @ discord',
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
[2026-01-19T00:50:22.520Z] [BOT] ❌ Industry post failed: Data Engineering Manager
⚠️  Channel full error count: 1/5
[2026-01-19T00:50:24.022Z] [BOT] 📍 [ROUTING] "Software Engineer, Observability" @ airtable
   Category: AI (matched: "AI/ML")
[2026-01-19T00:50:24.022Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T00:50:24.400Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Observability @ airtable in #🤖・ai-jobs
[2026-01-19T00:50:24.401Z] [BOT] ✅ Industry: Software Engineer, Observability @ airtable
[2026-01-19T00:50:26.141Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Observability @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T00:50:27.643Z] [BOT] 💾 Marked as posted: Software Engineer, Observability @ airtable (instance #1)
[2026-01-19T00:50:27.643Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-19T00:50:27.645Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T00:50:27.648Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-19T00:50:27.648Z] [BOT] ✅ Archiving complete: 1 archived, 2817 active
[2026-01-19T00:50:27.663Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:27.663Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Site Defense" @ reddit
[2026-01-19T00:50:27.663Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T00:50:29.459Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Site Defense @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Site Defense @ reddit
[2026-01-19T00:50:31.111Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Site Defense @ reddit in #🗽・new-york
[2026-01-19T00:50:31.111Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-19T00:50:32.612Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Site Defense @ reddit (instance #1)
[2026-01-19T00:50:32.613Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-19T00:50:32.615Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-19T00:50:32.635Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:32.636Z] [BOT] 📍 [ROUTING] "Finance Program Manager" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-19T00:50:32.636Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-19T00:50:32.811Z] [BOT] ✅ Created forum post: 🏢 Finance Program Manager @ spotify in #🤖・ai-jobs
  ✅ Industry: Finance Program Manager @ spotify
[2026-01-19T00:50:34.538Z] [BOT] ✅ Created forum post: 🏢 Finance Program Manager @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T00:50:36.040Z] [BOT] 💾 Marked as posted: Finance Program Manager @ spotify (instance #1)
[2026-01-19T00:50:36.040Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-19T00:50:36.042Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-19T00:50:36.062Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:36.063Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Foundation Models with Federated Learning" @ ORG_a867f63f National Laboratory
[2026-01-19T00:50:36.063Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T00:50:36.214Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Foundation Models with Federated Learning @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-19T00:50:36.214Z] [BOT] ✅ Industry: Postdoctoral Appointee - Foundation Models with Federated Learning @ ORG_a867f63f National Laboratory
[2026-01-19T00:50:37.886Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Foundation Models with Federated Learning @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T00:50:39.388Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Foundation Models with Federated Learning @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-19T00:50:39.389Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-19T00:50:39.390Z] [BOT] ✅ No jobs to archive (all 2820 jobs within 7-day window)
[2026-01-19T00:50:39.409Z] [BOT] 💾 Saved posted_jobs.json: 2820 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:42.410Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T00:50:42.410Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Finance " @ brex
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T00:50:42.410Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T00:50:42.663Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Finance  @ brex in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist, Finance  @ brex
[2026-01-19T00:50:44.343Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Finance  @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T00:50:45.845Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Finance  @ brex (instance #1)
[2026-01-19T00:50:45.845Z] [BOT] 💾 BEFORE ARCHIVING: 2821 jobs in database
[2026-01-19T00:50:45.847Z] [BOT] ✅ No jobs to archive (all 2821 jobs within 7-day window)
[2026-01-19T00:50:45.868Z] [BOT] 💾 Saved posted_jobs.json: 2821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:48.869Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-19T00:50:48.869Z] [BOT] 📍 [ROUTING] "Senior Manager, Recruiting" @ samsara
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-19T00:50:49.327Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Recruiting @ samsara in #📁・JID_e938df7b
[2026-01-19T00:50:49.327Z] [BOT] ✅ Industry: Senior Manager, Recruiting @ samsara
[2026-01-19T00:50:51.023Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Recruiting @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T00:50:52.524Z] [BOT] 💾 Marked as posted: Senior Manager, Recruiting @ samsara (instance #1)
[2026-01-19T00:50:52.525Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-19T00:50:52.527Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-19T00:50:52.546Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:50:55.547Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-19T00:50:55.548Z] [BOT] 📍 [ROUTING] "Engineering Manager, UI Platform" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T00:50:55.548Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T00:50:55.721Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Platform @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, UI Platform @ anthropic
[2026-01-19T00:50:57.372Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T00:50:58.873Z] [BOT] 💾 Marked as posted: Engineering Manager, UI Platform @ anthropic (instance #1)
[2026-01-19T00:50:58.873Z] [BOT] 💾 BEFORE ARCHIVING: 2823 jobs in database
[2026-01-19T00:50:58.875Z] [BOT] ✅ No jobs to archive (all 2823 jobs within 7-day window)
[2026-01-19T00:50:58.894Z] [BOT] 💾 Saved posted_jobs.json: 2823 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:51:01.895Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T00:51:01.895Z] [BOT] 📍 [ROUTING] "FAST Configuration Analyst" @ ORG_da05efaa
[2026-01-19T00:51:01.896Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T00:51:02.101Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #📣・marketing-jobs
  ✅ Industry: FAST Configuration Analyst @ ORG_da05efaa
[2026-01-19T00:51:03.754Z] [BOT] ✅ Created forum post: 🏢 FAST Configuration Analyst @ ORG_da05efaa in #💻・remote-usa
[2026-01-19T00:51:03.755Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T00:51:05.256Z] [BOT] 💾 Marked as posted: FAST Configuration Analyst @ ORG_da05efaa (instance #1)
[2026-01-19T00:51:05.256Z] [BOT] 💾 BEFORE ARCHIVING: 2824 jobs in database
[2026-01-19T00:51:05.258Z] [BOT] ✅ No jobs to archive (all 2824 jobs within 7-day window)
[2026-01-19T00:51:05.277Z] [BOT] 💾 Saved posted_jobs.json: 2824 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:51:08.278Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T00:51:08.278Z] [BOT] 📍 [ROUTING] "Head of Enterprise Support" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-19T00:51:08.278Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T00:51:08.545Z] [BOT] ✅ Created forum post: 🏢 Head of Enterprise Support @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Enterprise Support @ anthropic
[2026-01-19T00:51:10.218Z] [BOT] ✅ Created forum post: 🏢 Head of Enterprise Support @ anthropic in #🌉・san-francisco
[2026-01-19T00:51:10.218Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T00:51:11.720Z] [BOT] 💾 Marked as posted: Head of Enterprise Support @ anthropic (instance #1)
[2026-01-19T00:51:11.720Z] [BOT] 💾 BEFORE ARCHIVING: 2825 jobs in database
[2026-01-19T00:51:11.722Z] [BOT] ✅ No jobs to archive (all 2825 jobs within 7-day window)
[2026-01-19T00:51:11.741Z] [BOT] 💾 Saved posted_jobs.json: 2825 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T00:51:14.742Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-19T00:51:14.743Z] [BOT] ⏭️  Skipping duplicate: JID_82b91f04 (posted within 7 days)
[2026-01-19T00:51:14.743Z] [BOT] ⏭️  Skipping duplicate: JID_48157790 (posted within 7 days)
[2026-01-19T00:51:14.743Z] [BOT] ⏭️  Skipping duplicate: JID_f2e588c1 (posted within 7 days)
[2026-01-19T00:51:14.744Z] [BOT] ⏭️  Skipping duplicate: JID_baf93bdb (posted within 7 days)
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️  Skipping duplicate: JID_c4ab4833 (posted within 7 days)
[2026-01-19T00:51:14.745Z] [BOT] ⏭️  Skipping duplicate: JID_4e0104da (posted within 7 days)
⏭️  Skipping duplicate: JID_27e5c284 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_3018ab46-learning_421653 (posted within 7 days)
[2026-01-19T00:51:14.864Z] [BOT] ✅ Loaded pending queue: 2825 total (2805 pending, 20 enriched, 0 posted)
[2026-01-19T00:51:15.033Z] [BOT] ✅ Saved pending queue: 2825 total (2805 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-19T00:51:15.033Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T00:51:15.094Z] [BOT] 📂 Loaded 4955 existing routing entries
[2026-01-19T00:51:15.165Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T00:51:15.166Z] [BOT] Total entries: 4965
   Timestamp: 2026-01-19T00:51:15.145Z
[2026-01-19T00:51:15.166Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T00:51:15.166Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-19T00:51:15.167Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 10
[2026-01-19T00:51:15.167Z] [BOT] Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・new-york: 2 posts
     4. #🌆・chicago: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-19T00:51:15.167Z] [BOT] [STATS] Channel stats saved
[2026-01-19T00:51:17.191Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3018) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Engineering Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineering Manager
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*