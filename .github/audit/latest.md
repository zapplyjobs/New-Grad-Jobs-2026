# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T02:00:36.522Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T01:59:51.540Z] ========================================
[2026-01-16T01:59:51.542Z] Discord Bot Execution Log
[2026-01-16T01:59:51.543Z] Environment: GitHub Actions
[2026-01-16T01:59:51.543Z] Node Version: v20.19.6
[2026-01-16T01:59:51.543Z] ========================================
[2026-01-16T01:59:51.543Z] Environment Variables Check:
[2026-01-16T01:59:51.543Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T01:59:51.543Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.543Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T01:59:51.543Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T01:59:51.543Z] 
Multi-Channel Configuration:
[2026-01-16T01:59:51.543Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T01:59:51.544Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T01:59:51.544Z] 
Data Files Check:
[2026-01-16T01:59:51.545Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58018 bytes)
[2026-01-16T01:59:51.552Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1016159 bytes)
[2026-01-16T01:59:51.552Z] 
========================================
[2026-01-16T01:59:51.552Z] Starting Enhanced Discord Bot...
[2026-01-16T01:59:51.552Z] ========================================
[2026-01-16T01:59:52.087Z] [BOT] ✅ Loaded V2 database: 1890 jobs
[2026-01-16T01:59:52.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T01:59:52.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T01:59:52.528Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T01:59:52.641Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation at Lawrence Berkeley National Laboratory
[2026-01-16T01:59:52.644Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T01:59:52.645Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T01:59:52.645Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T01:59:52.646Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T01:59:52.646Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T01:59:52.646Z] [BOT] - Area Director - Sales @ nominal: new york, austin, los angeles
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T01:59:52.651Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-16T01:59:52.651Z] [BOT] 📍 [ROUTING] "Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation" @ ORG_76364d81 Berkeley National Laboratory
[2026-01-16T01:59:52.651Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T01:59:52.668Z] [BOT ERROR] (node:2771) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T01:59:52.763Z] [BOT ERROR] ❌ Error posting job Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National',
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
[2026-01-16T01:59:52.763Z] [BOT] ❌ Industry post failed: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation
⚠️  Channel full error count: 1/5
[2026-01-16T01:59:54.441Z] [BOT] ✅ Created forum post: 🏢 Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National in #🌉・san-francisco
[2026-01-16T01:59:54.442Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T01:59:55.943Z] [BOT] 💾 Marked as posted: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National Laboratory (instance #1)
[2026-01-16T01:59:55.944Z] [BOT] 💾 BEFORE ARCHIVING: 1891 jobs in database
[2026-01-16T01:59:55.945Z] [BOT] ✅ No jobs to archive (all 1891 jobs within 7-day window)
[2026-01-16T01:59:55.964Z] [BOT] 💾 Saved posted_jobs.json: 1891 active jobs
[2026-01-16T01:59:55.964Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T01:59:55.964Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_84b6e4b8
[2026-01-16T01:59:55.965Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T01:59:56.112Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_84b6e4b8 in #💻・tech-jobs
[2026-01-16T01:59:56.112Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_84b6e4b8
[2026-01-16T01:59:57.770Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_84b6e4b8 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T01:59:59.271Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_84b6e4b8 (instance #1)
[2026-01-16T01:59:59.272Z] [BOT] 💾 BEFORE ARCHIVING: 1892 jobs in database
[2026-01-16T01:59:59.273Z] [BOT] ✅ No jobs to archive (all 1892 jobs within 7-day window)
[2026-01-16T01:59:59.284Z] [BOT] 💾 Saved posted_jobs.json: 1892 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T01:59:59.284Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f8d13f3b Health
[2026-01-16T01:59:59.284Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T01:59:59.511Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f8d13f3b Health in #💻・tech-jobs
[2026-01-16T01:59:59.511Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_f8d13f3b Health
[2026-01-16T02:00:01.287Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f8d13f3b Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T02:00:02.788Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_f8d13f3b Health (instance #1)
[2026-01-16T02:00:02.789Z] [BOT] 💾 BEFORE ARCHIVING: 1893 jobs in database
[2026-01-16T02:00:02.790Z] [BOT] ✅ No jobs to archive (all 1893 jobs within 7-day window)
[2026-01-16T02:00:02.804Z] [BOT] 💾 Saved posted_jobs.json: 1893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:05.804Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-16T02:00:05.806Z] [BOT] 📍 [ROUTING] "Machine Learning Fellowship" @ 10a Labs
[2026-01-16T02:00:05.806Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T02:00:06.609Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Fellowship @ 10a Labs in #🤖・ai-jobs
[2026-01-16T02:00:06.609Z] [BOT] ✅ Industry: Machine Learning Fellowship @ 10a Labs
[2026-01-16T02:00:08.403Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Fellowship @ 10a Labs in #🗽・new-york
[2026-01-16T02:00:08.403Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T02:00:09.904Z] [BOT] 💾 Marked as posted: Machine Learning Fellowship @ 10a Labs (instance #1)
[2026-01-16T02:00:09.904Z] [BOT] 💾 BEFORE ARCHIVING: 1894 jobs in database
[2026-01-16T02:00:09.906Z] [BOT] ✅ No jobs to archive (all 1894 jobs within 7-day window)
[2026-01-16T02:00:09.919Z] [BOT] 💾 Saved posted_jobs.json: 1894 active jobs
[2026-01-16T02:00:09.919Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:09.920Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Department of Computer Science" @ ORG_9d38443e of Texas - Austin
[2026-01-16T02:00:09.920Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T02:00:10.166Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2026-01-16T02:00:10.166Z] [BOT] ✅ Industry: Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin
[2026-01-16T02:00:11.940Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-16T02:00:11.941Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T02:00:13.442Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T02:00:13.442Z] [BOT] 💾 BEFORE ARCHIVING: 1895 jobs in database
[2026-01-16T02:00:13.444Z] [BOT] ✅ No jobs to archive (all 1895 jobs within 7-day window)
[2026-01-16T02:00:13.456Z] [BOT] 💾 Saved posted_jobs.json: 1895 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:13.456Z] [BOT] 📍 [ROUTING] "Executive Assistant" @ nominal
[2026-01-16T02:00:13.456Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T02:00:13.725Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant @ nominal in #🤖・ai-jobs
[2026-01-16T02:00:13.725Z] [BOT] ✅ Industry: Executive Assistant @ nominal
[2026-01-16T02:00:15.437Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant @ nominal in #🦢・los-angeles
[2026-01-16T02:00:15.437Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T02:00:16.938Z] [BOT] 💾 Marked as posted: Executive Assistant @ nominal (instance #1)
[2026-01-16T02:00:16.938Z] [BOT] 💾 BEFORE ARCHIVING: 1896 jobs in database
[2026-01-16T02:00:16.939Z] [BOT] ✅ No jobs to archive (all 1896 jobs within 7-day window)
[2026-01-16T02:00:16.952Z] [BOT] 💾 Saved posted_jobs.json: 1896 active jobs
[2026-01-16T02:00:16.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:16.952Z] [BOT] 📍 [ROUTING] "Entry Level Engineer" @ ORG_fdffd77e
[2026-01-16T02:00:16.952Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T02:00:17.104Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_fdffd77e in #🤖・ai-jobs
[2026-01-16T02:00:17.104Z] [BOT] ✅ Industry: Entry Level Engineer @ ORG_fdffd77e
[2026-01-16T02:00:18.802Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_fdffd77e in #🗽・new-york
[2026-01-16T02:00:18.803Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T02:00:20.304Z] [BOT] 💾 Marked as posted: Entry Level Engineer @ ORG_fdffd77e (instance #1)
[2026-01-16T02:00:20.304Z] [BOT] 💾 BEFORE ARCHIVING: 1897 jobs in database
[2026-01-16T02:00:20.306Z] [BOT] ✅ No jobs to archive (all 1897 jobs within 7-day window)
[2026-01-16T02:00:20.318Z] [BOT] 💾 Saved posted_jobs.json: 1897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:20.319Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f19d0512 Polytechnic Institute
   Category: AI (matched: "machine learning")
[2026-01-16T02:00:20.319Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T02:00:20.575Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #🤖・ai-jobs
  ✅ Industry: Assistant Professor @ ORG_f19d0512 Polytechnic Institute
[2026-01-16T02:00:22.384Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T02:00:23.885Z] [BOT] 💾 Marked as posted: Assistant Professor @ ORG_f19d0512 Polytechnic Institute (instance #1)
[2026-01-16T02:00:23.885Z] [BOT] 💾 BEFORE ARCHIVING: 1898 jobs in database
[2026-01-16T02:00:23.886Z] [BOT] ✅ No jobs to archive (all 1898 jobs within 7-day window)
[2026-01-16T02:00:23.898Z] [BOT] 💾 Saved posted_jobs.json: 1898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:23.898Z] [BOT] 📍 [ROUTING] "Mercury Ignite Data Science Graduate Development Program" @ ORG_6a7367ef Insurance
[2026-01-16T02:00:23.899Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T02:00:24.178Z] [BOT] ✅ Created forum post: 🏢 Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
[2026-01-16T02:00:24.178Z] [BOT] ✅ Industry: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance
[2026-01-16T02:00:25.680Z] [BOT] 💾 Marked as posted: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance (instance #1)
[2026-01-16T02:00:25.680Z] [BOT] 💾 BEFORE ARCHIVING: 1899 jobs in database
[2026-01-16T02:00:25.681Z] [BOT] ✅ No jobs to archive (all 1899 jobs within 7-day window)
[2026-01-16T02:00:25.693Z] [BOT] 💾 Saved posted_jobs.json: 1899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:28.694Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T02:00:28.694Z] [BOT] 📍 [ROUTING] "Brand Designer" @ supabase
   Category: SALES (matched: "sales")
[2026-01-16T02:00:28.694Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T02:00:28.954Z] [BOT] ✅ Created forum post: 🏢 Brand Designer @ supabase in #💲・sales-jobs
  ✅ Industry: Brand Designer @ supabase
[2026-01-16T02:00:30.456Z] [BOT] 💾 Marked as posted: Brand Designer @ supabase (instance #1)
[2026-01-16T02:00:30.457Z] [BOT] 💾 BEFORE ARCHIVING: 1900 jobs in database
[2026-01-16T02:00:30.458Z] [BOT] ✅ No jobs to archive (all 1900 jobs within 7-day window)
[2026-01-16T02:00:30.470Z] [BOT] 💾 Saved posted_jobs.json: 1900 active jobs
[2026-01-16T02:00:30.470Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T02:00:33.471Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_feac3e22 (posted within 7 days)
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_1dbdf68d (posted within 7 days)
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_87398140 (posted within 7 days)
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_4bd14ce6-science_r_00042583 (posted within 7 days)
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_38f88f25 (posted within 7 days)
[2026-01-16T02:00:33.472Z] [BOT] ⏭️  Skipping duplicate: JID_4cecf120 (posted within 7 days)
[2026-01-16T02:00:33.473Z] [BOT] ⏭️  Skipping duplicate: JID_270ff750 (posted within 7 days)
[2026-01-16T02:00:33.473Z] [BOT] ⏭️  Skipping duplicate: JID_c7528939 (posted within 7 days)
[2026-01-16T02:00:33.473Z] [BOT] ⏭️  Skipping duplicate: JID_681daa8d-wpi_external_career_site-JID_259259e9-professor_r0003284 (posted within 7 days)
[2026-01-16T02:00:33.473Z] [BOT] ⏭️  Skipping duplicate: JID_2d34bf8f (posted within 7 days)
[2026-01-16T02:00:33.587Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-16T02:00:33.755Z] [BOT] ✅ Saved pending queue: 2770 total (2750 pending, 10 enriched, 10 posted)
[2026-01-16T02:00:33.756Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T02:00:33.812Z] [BOT] 📂 Loaded 4105 existing routing entries
[2026-01-16T02:00:33.877Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4115
   Timestamp: 2026-01-16T02:00:33.860Z
[2026-01-16T02:00:33.878Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T02:00:33.878Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 1
   Skipped: 0
[2026-01-16T02:00:33.878Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T02:00:33.879Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #🗽・new-york: 3 posts
[2026-01-16T02:00:33.879Z] [BOT] 3. #🌉・san-francisco: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #🤠・austin: 1 posts
[2026-01-16T02:00:33.879Z] [BOT] [STATS] Channel stats saved
[2026-01-16T02:00:35.903Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2771) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*