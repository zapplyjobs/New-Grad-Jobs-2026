# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T05:47:01.612Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T05:46:15.599Z] ========================================
[2026-01-16T05:46:15.600Z] Discord Bot Execution Log
[2026-01-16T05:46:15.600Z] Environment: GitHub Actions
[2026-01-16T05:46:15.601Z] Node Version: v20.19.6
[2026-01-16T05:46:15.601Z] ========================================
[2026-01-16T05:46:15.601Z] Environment Variables Check:
[2026-01-16T05:46:15.601Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T05:46:15.601Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.601Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T05:46:15.601Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T05:46:15.601Z] 
Multi-Channel Configuration:
[2026-01-16T05:46:15.601Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.601Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T05:46:15.602Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T05:46:15.602Z] 
Data Files Check:
[2026-01-16T05:46:15.603Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27227 bytes)
[2026-01-16T05:46:15.610Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1037291 bytes)
[2026-01-16T05:46:15.610Z] 
========================================
[2026-01-16T05:46:15.610Z] Starting Enhanced Discord Bot...
[2026-01-16T05:46:15.610Z] ========================================
[2026-01-16T05:46:16.130Z] [BOT] ✅ Loaded V2 database: 1929 jobs
[2026-01-16T05:46:16.877Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T05:46:16.877Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T05:46:16.877Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T05:46:16.991Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – New Grad - Agent at Sierra
[2026-01-16T05:46:16.993Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T05:46:16.994Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T05:46:16.994Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T05:46:16.995Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-16T05:46:16.995Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-16T05:46:16.995Z] [BOT] - Software Engineer - Backend @ OpenAI: sf, seattle
   - Junior Software Developer - Go Lang @ mthree: united kingdom, ireland
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T05:46:16.996Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-16T05:46:16.998Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Agent" @ ORG_d5eef8ad
[2026-01-16T05:46:16.998Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:46:17.015Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T05:46:17.138Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – New Grad - Agent @ Sierra',
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
[2026-01-16T05:46:17.138Z] [BOT] ❌ Industry post failed: Software Engineer – New Grad - Agent
⚠️  Channel full error count: 1/5
[2026-01-16T05:46:18.915Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Agent @ ORG_d5eef8ad in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T05:46:20.415Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Agent @ ORG_d5eef8ad (instance #1)
[2026-01-16T05:46:20.415Z] [BOT] 💾 BEFORE ARCHIVING: 1930 jobs in database
[2026-01-16T05:46:20.417Z] [BOT] ✅ No jobs to archive (all 1930 jobs within 7-day window)
[2026-01-16T05:46:20.432Z] [BOT] 💾 Saved posted_jobs.json: 1930 active jobs
[2026-01-16T05:46:20.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:20.433Z] [BOT] 📍 [ROUTING] "Software Engineer - Starshield" @ ORG_afd623b1
   Category: AI (matched: "machine learning")
[2026-01-16T05:46:20.433Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:46:20.737Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Starshield @ ORG_afd623b1
[2026-01-16T05:46:22.433Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starshield @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T05:46:23.933Z] [BOT] 💾 Marked as posted: Software Engineer - Starshield @ ORG_afd623b1 (instance #1)
[2026-01-16T05:46:23.933Z] [BOT] 💾 BEFORE ARCHIVING: 1931 jobs in database
[2026-01-16T05:46:23.935Z] [BOT] ✅ No jobs to archive (all 1931 jobs within 7-day window)
[2026-01-16T05:46:23.947Z] [BOT] 💾 Saved posted_jobs.json: 1931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:23.947Z] [BOT] 📍 [ROUTING] "University Graduate Software Engineer - Software Engineering" @ ORG_72fd3ae0
[2026-01-16T05:46:23.947Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:46:24.411Z] [BOT] ✅ Created forum post: 🎨 University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0
[2026-01-16T05:46:26.253Z] [BOT] ✅ Created forum post: 🎨 University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T05:46:27.753Z] [BOT] 💾 Marked as posted: University Graduate Software Engineer - Software Engineering @ ORG_72fd3ae0 (instance #1)
[2026-01-16T05:46:27.753Z] [BOT] 💾 BEFORE ARCHIVING: 1932 jobs in database
[2026-01-16T05:46:27.755Z] [BOT] ✅ No jobs to archive (all 1932 jobs within 7-day window)
[2026-01-16T05:46:27.772Z] [BOT] 💾 Saved posted_jobs.json: 1932 active jobs
[2026-01-16T05:46:27.772Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:27.773Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_096a7f3dine Trading
[2026-01-16T05:46:27.773Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T05:46:28.049Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_096a7f3dine Trading in #🤖・ai-jobs
[2026-01-16T05:46:28.049Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_096a7f3dine Trading
[2026-01-16T05:46:29.745Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_096a7f3dine Trading in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T05:46:31.246Z] [BOT] 💾 Marked as posted: C++ Software Engineer @ ORG_096a7f3dine Trading (instance #1)
[2026-01-16T05:46:31.246Z] [BOT] 💾 BEFORE ARCHIVING: 1933 jobs in database
[2026-01-16T05:46:31.248Z] [BOT] ✅ No jobs to archive (all 1933 jobs within 7-day window)
[2026-01-16T05:46:31.262Z] [BOT] 💾 Saved posted_jobs.json: 1933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:34.261Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-16T05:46:34.262Z] [BOT] 📍 [ROUTING] "Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-16T05:46:34.262Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:46:34.455Z] [BOT] ✅ Created forum post: 🏢 Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📈・JID_fb739488
  ✅ Industry: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2026-01-16T05:46:35.956Z] [BOT] 💾 Marked as posted: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b (instance #1)
[2026-01-16T05:46:35.956Z] [BOT] 💾 BEFORE ARCHIVING: 1934 jobs in database
[2026-01-16T05:46:35.958Z] [BOT] ✅ No jobs to archive (all 1934 jobs within 7-day window)
[2026-01-16T05:46:35.970Z] [BOT] 💾 Saved posted_jobs.json: 1934 active jobs
[2026-01-16T05:46:35.970Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:35.970Z] [BOT] 📍 [ROUTING] "Information Systems - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
[2026-01-16T05:46:35.970Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T05:46:35.970Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:46:36.164Z] [BOT] ✅ Created forum post: 🏢 Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📈・JID_fb739488
[2026-01-16T05:46:36.164Z] [BOT] ✅ Industry: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2026-01-16T05:46:37.666Z] [BOT] 💾 Marked as posted: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b (instance #1)
[2026-01-16T05:46:37.666Z] [BOT] 💾 BEFORE ARCHIVING: 1935 jobs in database
[2026-01-16T05:46:37.667Z] [BOT] ✅ No jobs to archive (all 1935 jobs within 7-day window)
[2026-01-16T05:46:37.679Z] [BOT] 💾 Saved posted_jobs.json: 1935 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:37.679Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_89135357 Airlines
[2026-01-16T05:46:37.679Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:46:37.908Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_89135357 Airlines in #📈・JID_fb739488
[2026-01-16T05:46:37.908Z] [BOT] ✅ Industry: Associate Data Engineer @ ORG_89135357 Airlines
[2026-01-16T05:46:39.739Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_89135357 Airlines in #🤠・austin
[2026-01-16T05:46:39.739Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T05:46:41.240Z] [BOT] 💾 Marked as posted: Associate Data Engineer @ ORG_89135357 Airlines (instance #1)
[2026-01-16T05:46:41.241Z] [BOT] 💾 BEFORE ARCHIVING: 1936 jobs in database
[2026-01-16T05:46:41.242Z] [BOT] ✅ No jobs to archive (all 1936 jobs within 7-day window)
[2026-01-16T05:46:41.253Z] [BOT] 💾 Saved posted_jobs.json: 1936 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:41.254Z] [BOT] 💾 Marked as posted: Associate Data Engineer @ ORG_89135357 Airlines (instance #1)
💾 BEFORE ARCHIVING: 1937 jobs in database
[2026-01-16T05:46:41.255Z] [BOT] ✅ No jobs to archive (all 1937 jobs within 7-day window)
[2026-01-16T05:46:41.267Z] [BOT] 💾 Saved posted_jobs.json: 1937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:41.268Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_89135357 Airlines
[2026-01-16T05:46:41.268Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T05:46:41.565Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_89135357 Airlines in #📈・JID_fb739488
  ✅ Industry: Associate Data Scientist @ ORG_89135357 Airlines
[2026-01-16T05:46:43.329Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_89135357 Airlines in #🤠・austin
[2026-01-16T05:46:43.329Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T05:46:44.830Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_89135357 Airlines (instance #1)
[2026-01-16T05:46:44.830Z] [BOT] 💾 BEFORE ARCHIVING: 1938 jobs in database
[2026-01-16T05:46:44.832Z] [BOT] ✅ No jobs to archive (all 1938 jobs within 7-day window)
[2026-01-16T05:46:44.843Z] [BOT] 💾 Saved posted_jobs.json: 1938 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:47.845Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-16T05:46:47.845Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_89135357 Airlines
[2026-01-16T05:46:47.845Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:46:48.074Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_89135357 Airlines in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_89135357 Airlines
[2026-01-16T05:46:49.804Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_89135357 Airlines in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T05:46:51.307Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_89135357 Airlines (instance #1)
[2026-01-16T05:46:51.307Z] [BOT] 💾 BEFORE ARCHIVING: 1939 jobs in database
[2026-01-16T05:46:51.308Z] [BOT] ✅ No jobs to archive (all 1939 jobs within 7-day window)
[2026-01-16T05:46:51.322Z] [BOT] 💾 Saved posted_jobs.json: 1939 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:51.322Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_89135357 Airlines (instance #1)
[2026-01-16T05:46:51.322Z] [BOT] 💾 BEFORE ARCHIVING: 1940 jobs in database
[2026-01-16T05:46:51.323Z] [BOT] ✅ No jobs to archive (all 1940 jobs within 7-day window)
[2026-01-16T05:46:51.339Z] [BOT] 💾 Saved posted_jobs.json: 1940 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:51.339Z] [BOT] 📍 [ROUTING] "Software Operations Engineer I" @ ORG_fa31032b
   Category: TECH (matched: "software")
[2026-01-16T05:46:51.339Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T05:46:51.552Z] [BOT] ✅ Created forum post: 🏢 Software Operations Engineer I @ ORG_fa31032b in #💻・tech-jobs
  ✅ Industry: Software Operations Engineer I @ ORG_fa31032b
[2026-01-16T05:46:53.337Z] [BOT] ✅ Created forum post: 🏢 Software Operations Engineer I @ ORG_fa31032b in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T05:46:54.840Z] [BOT] 💾 Marked as posted: Software Operations Engineer I @ ORG_fa31032b (instance #1)
[2026-01-16T05:46:54.840Z] [BOT] 💾 BEFORE ARCHIVING: 1941 jobs in database
[2026-01-16T05:46:54.841Z] [BOT] ✅ No jobs to archive (all 1941 jobs within 7-day window)
[2026-01-16T05:46:54.855Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
[2026-01-16T05:46:54.855Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T05:46:57.855Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T05:46:57.856Z] [BOT] ⏭️  Skipping duplicate: JID_9a99bb31 (posted within 7 days)
[2026-01-16T05:46:57.856Z] [BOT] ⏭️  Skipping duplicate: JID_b7bad0bf (posted within 7 days)
[2026-01-16T05:46:57.856Z] [BOT] ⏭️  Skipping duplicate: JID_8760cf7f (posted within 7 days)
[2026-01-16T05:46:57.856Z] [BOT] ⏭️  Skipping duplicate: JID_9a58246b-hire_r-2025-59816 (posted within 7 days)
⏭️  Skipping duplicate: JID_f3329f2c-hire_r-2025-59810 (posted within 7 days)
[2026-01-16T05:46:57.857Z] [BOT] ⏭️  Skipping duplicate: JID_667df36a-hire_r-2025-59817 (posted within 7 days)
[2026-01-16T05:46:57.857Z] [BOT] ⏭️  Skipping duplicate: JID_1d5192c6 (posted within 7 days)
[2026-01-16T05:46:57.857Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_a8dc759f-engineer_r158638 (posted within 7 days)
[2026-01-16T05:46:57.857Z] [BOT] ⏭️  Skipping duplicate: JID_74ba5cff-i_r46476 (posted within 7 days)
[2026-01-16T05:46:57.857Z] [BOT] ⏭️  Skipping duplicate: JID_0c7a7ae3 (posted within 7 days)
[2026-01-16T05:46:57.973Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-16T05:46:58.140Z] [BOT] ✅ Saved pending queue: 2767 total (2747 pending, 10 enriched, 10 posted)
[2026-01-16T05:46:58.141Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T05:46:58.197Z] [BOT] 📂 Loaded 4155 existing routing entries
[2026-01-16T05:46:58.261Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4165
   Timestamp: 2026-01-16T05:46:58.244Z
[2026-01-16T05:46:58.262Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 18
[2026-01-16T05:46:58.262Z] [BOT] Successful: 17
   Failed: 1
   Skipped: 0
[2026-01-16T05:46:58.262Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #📈・JID_fb739488: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🤠・austin: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #💻・tech-jobs: 2 posts
[STATS] Channel stats saved
[2026-01-16T05:47:00.288Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad - Agent: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New Grad - Agent
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*