# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T21:28:14.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T21:27:21.969Z] ========================================
[2026-01-18T21:27:21.971Z] Discord Bot Execution Log
[2026-01-18T21:27:21.971Z] Environment: GitHub Actions
[2026-01-18T21:27:21.971Z] Node Version: v20.19.6
[2026-01-18T21:27:21.971Z] ========================================
[2026-01-18T21:27:21.971Z] Environment Variables Check:
[2026-01-18T21:27:21.971Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T21:27:21.971Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.971Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T21:27:21.972Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T21:27:21.972Z] 
Multi-Channel Configuration:
[2026-01-18T21:27:21.972Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T21:27:21.972Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T21:27:21.973Z] 
Data Files Check:
[2026-01-18T21:27:21.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 102168 bytes)
[2026-01-18T21:27:21.984Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1485114 bytes)
[2026-01-18T21:27:21.984Z] 
========================================
[2026-01-18T21:27:21.984Z] Starting Enhanced Discord Bot...
[2026-01-18T21:27:21.984Z] ========================================
[2026-01-18T21:27:22.517Z] [BOT] ✅ Loaded V2 database: 2738 jobs
[2026-01-18T21:27:23.004Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T21:27:23.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T21:27:23.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T21:27:23.125Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Trust Lead at anthropic
[2026-01-18T21:27:23.129Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T21:27:23.129Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T21:27:23.130Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T21:27:23.130Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T21:27:23.131Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-18T21:27:23.131Z] [BOT] - Software Engineer 1 - CRM @ Intuit: nyc, san diego
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T21:27:23.134Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T21:27:23.136Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T21:27:23.136Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T21:27:23.140Z] [BOT ERROR] (node:3126) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T21:27:23.281Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T21:27:23.281Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 1/5
[2026-01-18T21:27:24.963Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T21:27:24.963Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T21:27:29.463Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T21:27:29.463Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:27:29.831Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・tech-jobs
[2026-01-18T21:27:29.831Z] [BOT] ✅ Industry: Software Engineer @ ORG_d51736fa
[2026-01-18T21:27:31.539Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・remote-usa
[2026-01-18T21:27:31.539Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T21:27:33.040Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_d51736fa (instance #1)
[2026-01-18T21:27:33.040Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-18T21:27:33.042Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-18T21:27:33.068Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:33.070Z] [BOT] 📍 [ROUTING] "Software Systems Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2026-01-18T21:27:33.070Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:27:33.418Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_d51736fa in #💻・tech-jobs
[2026-01-18T21:27:33.418Z] [BOT] ✅ Industry: Software Systems Engineer @ ORG_d51736fa
[2026-01-18T21:27:35.099Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_d51736fa in #💻・remote-usa
[2026-01-18T21:27:35.099Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T21:27:36.600Z] [BOT] 💾 Marked as posted: Software Systems Engineer @ ORG_d51736fa (instance #1)
[2026-01-18T21:27:36.600Z] [BOT] 💾 BEFORE ARCHIVING: 2740 jobs in database
[2026-01-18T21:27:36.602Z] [BOT] ✅ No jobs to archive (all 2740 jobs within 7-day window)
[2026-01-18T21:27:36.620Z] [BOT] 💾 Saved posted_jobs.json: 2740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:36.622Z] [BOT] 📍 [ROUTING] "Engineer – Cloud Development" @ ORG_c339827b
[2026-01-18T21:27:36.622Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:27:36.908Z] [BOT] ✅ Created forum post: 🏢 Engineer – Cloud Development @ ORG_c339827b in #💻・tech-jobs
[2026-01-18T21:27:36.908Z] [BOT] ✅ Industry: Engineer – Cloud Development @ ORG_c339827b
[2026-01-18T21:27:38.740Z] [BOT] ✅ Created forum post: 🏢 Engineer – Cloud Development @ ORG_c339827b in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T21:27:40.241Z] [BOT] 💾 Marked as posted: Engineer – Cloud Development @ ORG_c339827b (instance #1)
[2026-01-18T21:27:40.242Z] [BOT] 💾 BEFORE ARCHIVING: 2741 jobs in database
[2026-01-18T21:27:40.243Z] [BOT] ✅ No jobs to archive (all 2741 jobs within 7-day window)
[2026-01-18T21:27:40.260Z] [BOT] 💾 Saved posted_jobs.json: 2741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:43.261Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-18T21:27:43.262Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Notifications" @ discord
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T21:27:43.262Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:27:43.737Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Notifications @ discord in #🤖・ai-jobs
[2026-01-18T21:27:43.737Z] [BOT] ✅ Industry: Senior Software Engineer - Notifications @ discord
[2026-01-18T21:27:45.463Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Notifications @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T21:27:46.965Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Notifications @ discord (instance #1)
[2026-01-18T21:27:46.965Z] [BOT] 💾 BEFORE ARCHIVING: 2742 jobs in database
[2026-01-18T21:27:46.967Z] [BOT] ✅ No jobs to archive (all 2742 jobs within 7-day window)
[2026-01-18T21:27:46.988Z] [BOT] 💾 Saved posted_jobs.json: 2742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:46.989Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c908d13f
[2026-01-18T21:27:46.989Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:27:47.304Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c908d13f in #🤖・ai-jobs
[2026-01-18T21:27:47.304Z] [BOT] ✅ Industry: Software Engineer @ ORG_c908d13f
[2026-01-18T21:27:49.023Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c908d13f in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T21:27:50.525Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c908d13f (instance #1)
[2026-01-18T21:27:50.525Z] [BOT] 💾 BEFORE ARCHIVING: 2743 jobs in database
[2026-01-18T21:27:50.527Z] [BOT] ✅ No jobs to archive (all 2743 jobs within 7-day window)
[2026-01-18T21:27:50.544Z] [BOT] 💾 Saved posted_jobs.json: 2743 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:50.545Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - CRM" @ ORG_0bbe3cb1
[2026-01-18T21:27:50.545Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:27:50.743Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - CRM @ ORG_0bbe3cb1 in #🤖・ai-jobs
[2026-01-18T21:27:50.743Z] [BOT] ✅ Industry: Software Engineer 1 - CRM @ ORG_0bbe3cb1
[2026-01-18T21:27:52.441Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - CRM @ ORG_0bbe3cb1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T21:27:53.941Z] [BOT] 💾 Marked as posted: Software Engineer 1 - CRM @ ORG_0bbe3cb1 (instance #1)
[2026-01-18T21:27:53.942Z] [BOT] 💾 BEFORE ARCHIVING: 2744 jobs in database
[2026-01-18T21:27:53.943Z] [BOT] ✅ No jobs to archive (all 2744 jobs within 7-day window)
[2026-01-18T21:27:53.960Z] [BOT] 💾 Saved posted_jobs.json: 2744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:53.961Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-18T21:27:53.961Z] [BOT] 💾 BEFORE ARCHIVING: 2745 jobs in database
[2026-01-18T21:27:53.963Z] [BOT] ✅ No jobs to archive (all 2745 jobs within 7-day window)
[2026-01-18T21:27:53.979Z] [BOT] 💾 Saved posted_jobs.json: 2745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:53.979Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Grad" @ ORG_a725bda1
[2026-01-18T21:27:53.979Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:27:54.769Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad @ ORG_a725bda1 in #🤖・ai-jobs
[2026-01-18T21:27:54.769Z] [BOT] ✅ Industry: Software Engineer – New College Grad @ ORG_a725bda1
[2026-01-18T21:27:56.485Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad @ ORG_a725bda1 in #🌉・san-francisco
[2026-01-18T21:27:56.485Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T21:27:57.985Z] [BOT] 💾 Marked as posted: Software Engineer – New College Grad @ ORG_a725bda1 (instance #1)
[2026-01-18T21:27:57.986Z] [BOT] 💾 BEFORE ARCHIVING: 2746 jobs in database
[2026-01-18T21:27:57.987Z] [BOT] ✅ No jobs to archive (all 2746 jobs within 7-day window)
[2026-01-18T21:27:58.003Z] [BOT] 💾 Saved posted_jobs.json: 2746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:27:58.003Z] [BOT] 📍 [ROUTING] "AI Software Engineer - LLM Inference Performance Analysis" @ ORG_0890f456
[2026-01-18T21:27:58.003Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:27:58.295Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - LLM Inference Performance Analysis @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-18T21:27:58.295Z] [BOT] ✅ Industry: AI Software Engineer - LLM Inference Performance Analysis @ ORG_0890f456
[2026-01-18T21:28:00.027Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - LLM Inference Performance Analysis @ ORG_0890f456 in #🗽・new-york
[2026-01-18T21:28:00.027Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T21:28:01.529Z] [BOT] 💾 Marked as posted: AI Software Engineer - LLM Inference Performance Analysis @ ORG_0890f456 (instance #1)
[2026-01-18T21:28:01.529Z] [BOT] 💾 BEFORE ARCHIVING: 2747 jobs in database
[2026-01-18T21:28:01.531Z] [BOT] ✅ No jobs to archive (all 2747 jobs within 7-day window)
[2026-01-18T21:28:01.548Z] [BOT] 💾 Saved posted_jobs.json: 2747 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:28:04.550Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T21:28:04.550Z] [BOT] 📍 [ROUTING] "Software Systems Engineer" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-18T21:28:04.550Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T21:28:04.798Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
[2026-01-18T21:28:04.798Z] [BOT] ✅ Industry: Software Systems Engineer @ ORG_b344d80e Boeing Company
[2026-01-18T21:28:06.516Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T21:28:08.016Z] [BOT] 💾 Marked as posted: Software Systems Engineer @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-18T21:28:08.017Z] [BOT] 💾 BEFORE ARCHIVING: 2748 jobs in database
[2026-01-18T21:28:08.018Z] [BOT] ✅ No jobs to archive (all 2748 jobs within 7-day window)
[2026-01-18T21:28:08.036Z] [BOT] 💾 Saved posted_jobs.json: 2748 active jobs
[2026-01-18T21:28:08.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T21:28:11.036Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T21:28:11.037Z] [BOT] ⏭️  Skipping duplicate: JID_62bbf9b0-engineer_r-00171275 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_5e072781-engineer_r-00171075 (posted within 7 days)
⏭️  Skipping duplicate: JID_7d293a3e (posted within 7 days)
⏭️  Skipping duplicate: JID_1458231b-engineer_j-00331106 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_1eacd2d3 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_236528a7 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_3003029b-resmed_external_careers-JID_27a2200d-development_jr_047681-1 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_f4ff26d6-2026_jr2011392 (posted within 7 days)
[2026-01-18T21:28:11.038Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_7f0b151f-engineer_jr2025489040-1 (posted within 7 days)
[2026-01-18T21:28:11.164Z] [BOT] ✅ Loaded pending queue: 2834 total (2814 pending, 20 enriched, 0 posted)
[2026-01-18T21:28:11.339Z] [BOT] ✅ Saved pending queue: 2834 total (2814 pending, 11 enriched, 9 posted)
[2026-01-18T21:28:11.339Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T21:28:11.399Z] [BOT] 📂 Loaded 4875 existing routing entries
[2026-01-18T21:28:11.468Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4885
[2026-01-18T21:28:11.468Z] [BOT] Timestamp: 2026-01-18T21:28:11.448Z
[2026-01-18T21:28:11.469Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-18T21:28:11.469Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T21:28:11.469Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-18T21:28:11.469Z] [BOT] 3. #💻・remote-usa: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-18T21:28:11.469Z] [BOT] [STATS] Channel stats saved
[2026-01-18T21:28:13.494Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3126) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*