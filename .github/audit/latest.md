# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T20:54:36.526Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T20:53:42.039Z] ========================================
[2026-01-18T20:53:42.041Z] Discord Bot Execution Log
[2026-01-18T20:53:42.041Z] Environment: GitHub Actions
[2026-01-18T20:53:42.041Z] Node Version: v20.19.6
[2026-01-18T20:53:42.041Z] ========================================
[2026-01-18T20:53:42.041Z] Environment Variables Check:
[2026-01-18T20:53:42.041Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T20:53:42.041Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.041Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T20:53:42.041Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T20:53:42.041Z] 
Multi-Channel Configuration:
[2026-01-18T20:53:42.041Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T20:53:42.042Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T20:53:42.042Z] 
Data Files Check:
[2026-01-18T20:53:42.043Z] .github/data/new_jobs.json: ✅ Exists (10 items, 85801 bytes)
[2026-01-18T20:53:42.053Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1479957 bytes)
[2026-01-18T20:53:42.053Z] 
========================================
[2026-01-18T20:53:42.053Z] Starting Enhanced Discord Bot...
[2026-01-18T20:53:42.053Z] ========================================
[2026-01-18T20:53:42.583Z] [BOT] ✅ Loaded V2 database: 2729 jobs
[2026-01-18T20:53:43.486Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T20:53:43.487Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T20:53:43.487Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T20:53:43.605Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Trust Lead at anthropic
[2026-01-18T20:53:43.609Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T20:53:43.609Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T20:53:43.609Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T20:53:43.610Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T20:53:43.610Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-18T20:53:43.611Z] [BOT] - Software Engineer 1 - CRM @ Intuit: nyc, san diego
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T20:53:43.616Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T20:53:43.616Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T20:53:43.616Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:53:43.621Z] [BOT ERROR] (node:2734) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T20:53:43.730Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
[2026-01-18T20:53:43.730Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 1/5
[2026-01-18T20:53:45.348Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Customer Trust Lead @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-18T20:53:45.348Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T20:53:46.848Z] [BOT] 📍 [ROUTING] "Technical Product Marketing Lead" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T20:53:46.848Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:53:47.162Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #💲・sales-jobs
[2026-01-18T20:53:47.163Z] [BOT] ✅ Industry: Technical Product Marketing Lead @ anthropic
[2026-01-18T20:53:48.811Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #🌉・san-francisco
[2026-01-18T20:53:48.811Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T20:53:50.313Z] [BOT] 💾 Marked as posted: Technical Product Marketing Lead @ anthropic (instance #1)
[2026-01-18T20:53:50.313Z] [BOT] 💾 BEFORE ARCHIVING: 2730 jobs in database
[2026-01-18T20:53:50.315Z] [BOT] ✅ No jobs to archive (all 2730 jobs within 7-day window)
[2026-01-18T20:53:50.335Z] [BOT] 💾 Saved posted_jobs.json: 2730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:53:50.335Z] [BOT] 📍 [ROUTING] "Assistant – Sales" @ ORG_502ae197 Rancheria Casino Resort
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:53:50.559Z] [BOT] ✅ Created forum post: 🏢 Assistant – Sales @ ORG_502ae197 Rancheria Casino Resort in #💲・sales-jobs
  ✅ Industry: Assistant – Sales @ ORG_502ae197 Rancheria Casino Resort
[2026-01-18T20:53:52.266Z] [BOT] ✅ Created forum post: 🏢 Assistant – Sales @ ORG_502ae197 Rancheria Casino Resort in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:53:53.768Z] [BOT] 💾 Marked as posted: Assistant – Sales @ ORG_502ae197 Rancheria Casino Resort (instance #1)
[2026-01-18T20:53:53.768Z] [BOT] 💾 BEFORE ARCHIVING: 2731 jobs in database
[2026-01-18T20:53:53.770Z] [BOT] ✅ No jobs to archive (all 2731 jobs within 7-day window)
[2026-01-18T20:53:53.789Z] [BOT] 💾 Saved posted_jobs.json: 2731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:53:56.791Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T20:53:56.791Z] [BOT] 📍 [ROUTING] "Assoc Analyst Technology" @ ORG_4aef9434ine
[2026-01-18T20:53:56.791Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:53:57.090Z] [BOT] ✅ Created forum post: 🏢 Assoc Analyst Technology @ ORG_4aef9434ine in #🩺・healthcare-jobs
[2026-01-18T20:53:57.090Z] [BOT] ✅ Industry: Assoc Analyst Technology @ ORG_4aef9434ine
[2026-01-18T20:53:58.591Z] [BOT] 💾 Marked as posted: Assoc Analyst Technology @ ORG_4aef9434ine (instance #1)
[2026-01-18T20:53:58.592Z] [BOT] 💾 BEFORE ARCHIVING: 2732 jobs in database
[2026-01-18T20:53:58.594Z] [BOT] ✅ No jobs to archive (all 2732 jobs within 7-day window)
[2026-01-18T20:53:58.613Z] [BOT] 💾 Saved posted_jobs.json: 2732 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:01.614Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T20:54:01.614Z] [BOT] 📍 [ROUTING] "Construction Inspector" @ ORG_b1bcd3e3
   Category: MARKETING (matched: "growth")
[2026-01-18T20:54:01.614Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T20:54:02.193Z] [BOT] ✅ Created forum post: 🏢 Construction Inspector @ ORG_b1bcd3e3 in #📣・marketing-jobs
  ✅ Industry: Construction Inspector @ ORG_b1bcd3e3
[2026-01-18T20:54:03.871Z] [BOT] ✅ Created forum post: 🏢 Construction Inspector @ ORG_b1bcd3e3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:54:05.373Z] [BOT] 💾 Marked as posted: Construction Inspector @ ORG_b1bcd3e3 (instance #1)
[2026-01-18T20:54:05.373Z] [BOT] 💾 BEFORE ARCHIVING: 2733 jobs in database
[2026-01-18T20:54:05.375Z] [BOT] ✅ No jobs to archive (all 2733 jobs within 7-day window)
[2026-01-18T20:54:05.391Z] [BOT] 💾 Saved posted_jobs.json: 2733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:08.393Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T20:54:08.393Z] [BOT] 📍 [ROUTING] "IT Warehouse System Developer" @ ORG_540647baing
[2026-01-18T20:54:08.393Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:54:08.590Z] [BOT] ✅ Created forum post: 🏢 IT Warehouse System Developer @ ORG_540647baing in #💻・tech-jobs
  ✅ Industry: IT Warehouse System Developer @ ORG_540647baing
[2026-01-18T20:54:10.285Z] [BOT] ✅ Created forum post: 🏢 IT Warehouse System Developer @ ORG_540647baing in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:54:11.787Z] [BOT] 💾 Marked as posted: IT Warehouse System Developer @ ORG_540647baing (instance #1)
[2026-01-18T20:54:11.787Z] [BOT] 💾 BEFORE ARCHIVING: 2734 jobs in database
[2026-01-18T20:54:11.789Z] [BOT] ✅ No jobs to archive (all 2734 jobs within 7-day window)
[2026-01-18T20:54:11.811Z] [BOT] 💾 Saved posted_jobs.json: 2734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:11.811Z] [BOT] 📍 [ROUTING] "Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States" @ ORG_3cfbdbc3
[2026-01-18T20:54:11.811Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:54:12.185Z] [BOT] ✅ Created forum post: 🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 in #💻・tech-jobs
[2026-01-18T20:54:12.185Z] [BOT] ✅ Industry: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3
[2026-01-18T20:54:13.900Z] [BOT] ✅ Created forum post: 🏢 Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 in #🌉・san-francisco
[2026-01-18T20:54:13.901Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T20:54:15.402Z] [BOT] 💾 Marked as posted: Graduate 2026 PhD Software Engineer 2 - Consumer Structural Pricing - United States @ ORG_3cfbdbc3 (instance #1)
[2026-01-18T20:54:15.402Z] [BOT] 💾 BEFORE ARCHIVING: 2735 jobs in database
[2026-01-18T20:54:15.405Z] [BOT] ✅ No jobs to archive (all 2735 jobs within 7-day window)
[2026-01-18T20:54:15.422Z] [BOT] 💾 Saved posted_jobs.json: 2735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:18.423Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T20:54:18.423Z] [BOT] 📍 [ROUTING] "Associate Software Engineer Graduate" @ ORG_6c906633
[2026-01-18T20:54:18.423Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T20:54:18.622Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer Graduate @ ORG_6c906633 in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer Graduate @ ORG_6c906633
[2026-01-18T20:54:20.417Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer Graduate @ ORG_6c906633 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T20:54:21.919Z] [BOT] 💾 Marked as posted: Associate Software Engineer Graduate @ ORG_6c906633 (instance #1)
[2026-01-18T20:54:21.919Z] [BOT] 💾 BEFORE ARCHIVING: 2736 jobs in database
[2026-01-18T20:54:21.921Z] [BOT] ✅ No jobs to archive (all 2736 jobs within 7-day window)
[2026-01-18T20:54:21.939Z] [BOT] 💾 Saved posted_jobs.json: 2736 active jobs
[2026-01-18T20:54:21.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:21.939Z] [BOT] 📍 [ROUTING] "Early Career AI/ML Engineer" @ ORG_86b8b6fdin Co.
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T20:54:21.939Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T20:54:22.392Z] [BOT] ✅ Created forum post: 🏢 Early Career AI/ML Engineer @ ORG_86b8b6fdin Co. in #🤖・ai-jobs
  ✅ Industry: Early Career AI/ML Engineer @ ORG_86b8b6fdin Co.
[2026-01-18T20:54:23.894Z] [BOT] 💾 Marked as posted: Early Career AI/ML Engineer @ ORG_86b8b6fdin Co. (instance #1)
[2026-01-18T20:54:23.894Z] [BOT] 💾 BEFORE ARCHIVING: 2737 jobs in database
[2026-01-18T20:54:23.895Z] [BOT] ✅ No jobs to archive (all 2737 jobs within 7-day window)
[2026-01-18T20:54:23.913Z] [BOT] 💾 Saved posted_jobs.json: 2737 active jobs
[2026-01-18T20:54:23.913Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:26.914Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T20:54:26.914Z] [BOT] 📍 [ROUTING] "Entry-Level Data Engineer" @ ORG_c910d474 Motors
[2026-01-18T20:54:26.914Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T20:54:27.250Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Engineer @ ORG_c910d474 Motors in #📈・JID_fb739488
  ✅ Industry: Entry-Level Data Engineer @ ORG_c910d474 Motors
[2026-01-18T20:54:28.909Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Engineer @ ORG_c910d474 Motors in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-18T20:54:30.410Z] [BOT] 💾 Marked as posted: Entry-Level Data Engineer @ ORG_c910d474 Motors (instance #1)
[2026-01-18T20:54:30.410Z] [BOT] 💾 BEFORE ARCHIVING: 2738 jobs in database
[2026-01-18T20:54:30.412Z] [BOT] ✅ No jobs to archive (all 2738 jobs within 7-day window)
[2026-01-18T20:54:30.428Z] [BOT] 💾 Saved posted_jobs.json: 2738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:54:33.428Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T20:54:33.429Z] [BOT] ⏭️  Skipping duplicate: JID_960dfdf4-technology_r2521966 (posted within 7 days)
[2026-01-18T20:54:33.429Z] [BOT] ⏭️  Skipping duplicate: JID_712ba8c0 (posted within 7 days)
[2026-01-18T20:54:33.429Z] [BOT] ⏭️  Skipping duplicate: JID_01c3ba57 (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_34978941 (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_7edb110b (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_57848c69 (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_75820c66 (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_c0603ac0-careers_gm-JID_de8e9f1c-engineer_jr-202520494 (posted within 7 days)
[2026-01-18T20:54:33.430Z] [BOT] ⏭️  Skipping duplicate: JID_a6798459 (posted within 7 days)
[2026-01-18T20:54:33.560Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[2026-01-18T20:54:33.735Z] [BOT] ✅ Saved pending queue: 2836 total (2816 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-18T20:54:33.735Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T20:54:33.794Z] [BOT] 📂 Loaded 4865 existing routing entries
[2026-01-18T20:54:33.864Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4875
   Timestamp: 2026-01-18T20:54:33.844Z
[2026-01-18T20:54:33.865Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T20:54:33.865Z] [BOT] Total attempts: 18
   Successful: 16
   Failed: 2
   Skipped: 0
[2026-01-18T20:54:33.865Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T20:54:33.865Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 3 posts
[2026-01-18T20:54:33.865Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-18T20:54:33.865Z] [BOT] [STATS] Channel stats saved
[2026-01-18T20:54:35.892Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2734) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*