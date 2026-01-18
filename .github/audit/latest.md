# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T04:02:41.914Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T04:01:49.197Z] ========================================
[2026-01-18T04:01:49.199Z] Discord Bot Execution Log
[2026-01-18T04:01:49.199Z] Environment: GitHub Actions
[2026-01-18T04:01:49.199Z] Node Version: v20.19.6
[2026-01-18T04:01:49.199Z] ========================================
[2026-01-18T04:01:49.199Z] Environment Variables Check:
[2026-01-18T04:01:49.199Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T04:01:49.199Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.199Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T04:01:49.200Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T04:01:49.200Z] 
Multi-Channel Configuration:
[2026-01-18T04:01:49.200Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T04:01:49.200Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T04:01:49.200Z] 
Data Files Check:
[2026-01-18T04:01:49.201Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141647 bytes)
[2026-01-18T04:01:49.212Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1371844 bytes)
[2026-01-18T04:01:49.212Z] 
========================================
[2026-01-18T04:01:49.212Z] Starting Enhanced Discord Bot...
[2026-01-18T04:01:49.212Z] ========================================
[2026-01-18T04:01:49.767Z] [BOT] ✅ Loaded V2 database: 2533 jobs
[2026-01-18T04:01:50.433Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T04:01:50.433Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T04:01:50.433Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T04:01:50.560Z] [BOT] ✅ Loaded pending queue: 2866 total (2846 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Q2
[2026-01-18T04:01:50.562Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T04:01:50.563Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T04:01:50.563Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T04:01:50.564Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-18T04:01:50.564Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Director, Mid-Market Sales (B2B Services) @ reddit: san francisco, new york
   - Director, Mid-Market Sales (Goods - Shopping) @ reddit: los angeles, san francisco, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-18T04:01:50.564Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T04:01:50.568Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T04:01:50.569Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-18T04:01:50.569Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:01:50.573Z] [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T04:01:50.664Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Q2',
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
[2026-01-18T04:01:50.664Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T04:01:52.318Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-18T04:01:53.821Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-18T04:01:53.821Z] [BOT] 💾 BEFORE ARCHIVING: 2534 jobs in database
[2026-01-18T04:01:53.824Z] [BOT] ✅ No jobs to archive (all 2534 jobs within 7-day window)
[2026-01-18T04:01:53.841Z] [BOT] 💾 Saved posted_jobs.json: 2534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:01:53.841Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-18T04:01:53.841Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:01:53.995Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 @ datadog in #💻・tech-jobs
[2026-01-18T04:01:53.995Z] [BOT] ✅ Industry: Premier Support Engineer 2 @ datadog
[2026-01-18T04:01:55.751Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:01:57.252Z] [BOT] 💾 Marked as posted: Premier Support Engineer 2 @ datadog (instance #1)
[2026-01-18T04:01:57.253Z] [BOT] 💾 BEFORE ARCHIVING: 2535 jobs in database
[2026-01-18T04:01:57.254Z] [BOT] ✅ No jobs to archive (all 2535 jobs within 7-day window)
[2026-01-18T04:01:57.270Z] [BOT] 💾 Saved posted_jobs.json: 2535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:01:57.270Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - AI" @ ORG_8b92e640 Systems
   Category: TECH (matched: "software")
[2026-01-18T04:01:57.270Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:01:57.436Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - AI @ ORG_8b92e640 Systems in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - AI @ ORG_8b92e640 Systems
[2026-01-18T04:01:59.108Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - AI @ ORG_8b92e640 Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T04:02:00.610Z] [BOT] 💾 Marked as posted: Software Engineer 1 - AI @ ORG_8b92e640 Systems (instance #1)
[2026-01-18T04:02:00.610Z] [BOT] 💾 BEFORE ARCHIVING: 2536 jobs in database
[2026-01-18T04:02:00.612Z] [BOT] ✅ No jobs to archive (all 2536 jobs within 7-day window)
[2026-01-18T04:02:00.630Z] [BOT] 💾 Saved posted_jobs.json: 2536 active jobs
[2026-01-18T04:02:00.631Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:03.632Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-18T04:02:03.633Z] [BOT] 📍 [ROUTING] "Scientist 1 - Data Science" @ ORG_0264ad50
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T04:02:03.633Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T04:02:03.868Z] [BOT] ✅ Created forum post: 🏢 Scientist 1 - Data Science @ ORG_0264ad50 in #🤖・ai-jobs
  ✅ Industry: Scientist 1 - Data Science @ ORG_0264ad50
[2026-01-18T04:02:05.533Z] [BOT] ✅ Created forum post: 🏢 Scientist 1 - Data Science @ ORG_0264ad50 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-18T04:02:07.034Z] [BOT] 💾 Marked as posted: Scientist 1 - Data Science @ ORG_0264ad50 (instance #1)
[2026-01-18T04:02:07.034Z] [BOT] 💾 BEFORE ARCHIVING: 2537 jobs in database
[2026-01-18T04:02:07.036Z] [BOT] ✅ No jobs to archive (all 2537 jobs within 7-day window)
[2026-01-18T04:02:07.054Z] [BOT] 💾 Saved posted_jobs.json: 2537 active jobs
[2026-01-18T04:02:07.054Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:07.054Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Platform" @ anthropic
[2026-01-18T04:02:07.055Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:02:07.252Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform @ anthropic in #🤖・ai-jobs
[2026-01-18T04:02:07.252Z] [BOT] ✅ Industry: Staff Software Engineer, Platform @ anthropic
[2026-01-18T04:02:10.646Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Platform @ anthropic in #🌉・san-francisco
[2026-01-18T04:02:10.646Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T04:02:12.147Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Platform @ anthropic (instance #1)
[2026-01-18T04:02:12.147Z] [BOT] 💾 BEFORE ARCHIVING: 2538 jobs in database
[2026-01-18T04:02:12.149Z] [BOT] ✅ No jobs to archive (all 2538 jobs within 7-day window)
[2026-01-18T04:02:12.163Z] [BOT] 💾 Saved posted_jobs.json: 2538 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:12.165Z] [BOT] 📍 [ROUTING] "Director, Mid-Market Sales (B2B Services)" @ reddit
[2026-01-18T04:02:12.165Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T04:02:12.501Z] [BOT] ✅ Created forum post: 🏢 Director, Mid-Market Sales (B2B Services) @ reddit in #🤖・ai-jobs
  ✅ Industry: Director, Mid-Market Sales (B2B Services) @ reddit
[2026-01-18T04:02:14.188Z] [BOT] ✅ Created forum post: 🏢 Director, Mid-Market Sales (B2B Services) @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:02:15.689Z] [BOT] 💾 Marked as posted: Director, Mid-Market Sales (B2B Services) @ reddit (instance #1)
[2026-01-18T04:02:15.690Z] [BOT] 💾 BEFORE ARCHIVING: 2539 jobs in database
[2026-01-18T04:02:15.692Z] [BOT] ✅ No jobs to archive (all 2539 jobs within 7-day window)
[2026-01-18T04:02:15.707Z] [BOT] 💾 Saved posted_jobs.json: 2539 active jobs
[2026-01-18T04:02:15.707Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:15.708Z] [BOT] 💾 Marked as posted: Director, Mid-Market Sales (B2B Services) @ reddit (instance #1)
[2026-01-18T04:02:15.708Z] [BOT] 💾 BEFORE ARCHIVING: 2540 jobs in database
[2026-01-18T04:02:15.709Z] [BOT] ✅ No jobs to archive (all 2540 jobs within 7-day window)
[2026-01-18T04:02:15.726Z] [BOT] 💾 Saved posted_jobs.json: 2540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:15.727Z] [BOT] 📍 [ROUTING] "Director, Mid-Market Sales (Goods - Shopping)" @ reddit
[2026-01-18T04:02:15.727Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T04:02:15.940Z] [BOT] ✅ Created forum post: 🏢 Director, Mid-Market Sales (Goods - Shopping) @ reddit in #🤖・ai-jobs
[2026-01-18T04:02:15.940Z] [BOT] ✅ Industry: Director, Mid-Market Sales (Goods - Shopping) @ reddit
[2026-01-18T04:02:17.617Z] [BOT] ✅ Created forum post: 🏢 Director, Mid-Market Sales (Goods - Shopping) @ reddit in #🦢・los-angeles
[2026-01-18T04:02:17.617Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-18T04:02:19.118Z] [BOT] 💾 Marked as posted: Director, Mid-Market Sales (Goods - Shopping) @ reddit (instance #1)
[2026-01-18T04:02:19.118Z] [BOT] 💾 BEFORE ARCHIVING: 2541 jobs in database
[2026-01-18T04:02:19.120Z] [BOT] ✅ No jobs to archive (all 2541 jobs within 7-day window)
[2026-01-18T04:02:19.135Z] [BOT] 💾 Saved posted_jobs.json: 2541 active jobs
[2026-01-18T04:02:19.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:19.135Z] [BOT] 💾 Marked as posted: Director, Mid-Market Sales (Goods - Shopping) @ reddit (instance #1)
[2026-01-18T04:02:19.135Z] [BOT] 💾 BEFORE ARCHIVING: 2542 jobs in database
[2026-01-18T04:02:19.137Z] [BOT] ✅ No jobs to archive (all 2542 jobs within 7-day window)
[2026-01-18T04:02:19.153Z] [BOT] 💾 Saved posted_jobs.json: 2542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:19.153Z] [BOT] 💾 Marked as posted: Director, Mid-Market Sales (Goods - Shopping) @ reddit (instance #1)
[2026-01-18T04:02:19.153Z] [BOT] 💾 BEFORE ARCHIVING: 2543 jobs in database
[2026-01-18T04:02:19.155Z] [BOT] ✅ No jobs to archive (all 2543 jobs within 7-day window)
[2026-01-18T04:02:19.169Z] [BOT] 💾 Saved posted_jobs.json: 2543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:19.170Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Grad - 2026 - Foster City" @ ORG_a725bda1
[2026-01-18T04:02:19.170Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T04:02:19.170Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:02:19.345Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad - 2026 - Foster City @ ORG_a725bda1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New College Grad - 2026 - Foster City @ ORG_a725bda1
[2026-01-18T04:02:21.093Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad - 2026 - Foster City @ ORG_a725bda1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:02:22.594Z] [BOT] 💾 Marked as posted: Software Engineer – New College Grad - 2026 - Foster City @ ORG_a725bda1 (instance #1)
[2026-01-18T04:02:22.594Z] [BOT] 💾 BEFORE ARCHIVING: 2544 jobs in database
[2026-01-18T04:02:22.596Z] [BOT] ✅ No jobs to archive (all 2544 jobs within 7-day window)
[2026-01-18T04:02:22.613Z] [BOT] 💾 Saved posted_jobs.json: 2544 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:25.614Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T04:02:25.614Z] [BOT] 📍 [ROUTING] "Controls Technologist 1" @ ORG_b4d76491
[2026-01-18T04:02:25.614Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T04:02:26.167Z] [BOT] ✅ Created forum post: 🏢 Controls Technologist 1 @ ORG_b4d76491 in #📣・marketing-jobs
  ✅ Industry: Controls Technologist 1 @ ORG_b4d76491
[2026-01-18T04:02:27.871Z] [BOT] ✅ Created forum post: 🏢 Controls Technologist 1 @ ORG_b4d76491 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T04:02:29.372Z] [BOT] 💾 Marked as posted: Controls Technologist 1 @ ORG_b4d76491 (instance #1)
[2026-01-18T04:02:29.372Z] [BOT] 💾 BEFORE ARCHIVING: 2545 jobs in database
[2026-01-18T04:02:29.374Z] [BOT] ✅ No jobs to archive (all 2545 jobs within 7-day window)
[2026-01-18T04:02:29.389Z] [BOT] 💾 Saved posted_jobs.json: 2545 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:32.389Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T04:02:32.389Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_a725bda1
[2026-01-18T04:02:32.390Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T04:02:32.699Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_a725bda1 in #📈・JID_fb739488
  ✅ Industry: Data Engineer @ ORG_a725bda1
[2026-01-18T04:02:34.307Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ Visa',
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
[2026-01-18T04:02:34.307Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T04:02:35.808Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_a725bda1 (instance #1)
[2026-01-18T04:02:35.808Z] [BOT] 💾 BEFORE ARCHIVING: 2546 jobs in database
[2026-01-18T04:02:35.810Z] [BOT] ✅ No jobs to archive (all 2546 jobs within 7-day window)
[2026-01-18T04:02:35.826Z] [BOT] 💾 Saved posted_jobs.json: 2546 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:02:38.827Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T04:02:38.828Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
[2026-01-18T04:02:38.828Z] [BOT] ⏭️  Skipping duplicate: JID_414d734c-science_r2822005-1 (posted within 7 days)
[2026-01-18T04:02:38.828Z] [BOT] ⏭️  Skipping duplicate: JID_da59fd29 (posted within 7 days)
[2026-01-18T04:02:38.828Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_4e7cc1e3 (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_2ed7b688 (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_6d0e0a69 (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_2612e083 (posted within 7 days)
[2026-01-18T04:02:38.829Z] [BOT] ⏭️  Skipping duplicate: JID_7b9ca576 (posted within 7 days)
[2026-01-18T04:02:38.957Z] [BOT] ✅ Loaded pending queue: 2866 total (2846 pending, 20 enriched, 0 posted)
[2026-01-18T04:02:39.129Z] [BOT] ✅ Saved pending queue: 2866 total (2846 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T04:02:39.129Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T04:02:39.188Z] [BOT] 📂 Loaded 4705 existing routing entries
[2026-01-18T04:02:39.257Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4715
[2026-01-18T04:02:39.257Z] [BOT] Timestamp: 2026-01-18T04:02:39.238Z
[2026-01-18T04:02:39.258Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T04:02:39.258Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-18T04:02:39.258Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2026-01-18T04:02:39.258Z] [BOT] Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・tech-jobs: 2 posts
[2026-01-18T04:02:39.259Z] [BOT] 4. #💻・remote-usa: 2 posts
     5. #🤠・austin: 1 posts
[2026-01-18T04:02:39.259Z] [BOT] [STATS] Channel stats saved
[2026-01-18T04:02:41.286Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*