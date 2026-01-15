# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T23:27:14.047Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T23:26:22.641Z] ========================================
[2026-01-15T23:26:22.643Z] Discord Bot Execution Log
[2026-01-15T23:26:22.643Z] Environment: GitHub Actions
[2026-01-15T23:26:22.643Z] Node Version: v20.19.6
[2026-01-15T23:26:22.643Z] ========================================
[2026-01-15T23:26:22.643Z] Environment Variables Check:
[2026-01-15T23:26:22.644Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T23:26:22.644Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T23:26:22.644Z] 
Multi-Channel Configuration:
[2026-01-15T23:26:22.644Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.644Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.645Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.645Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T23:26:22.645Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T23:26:22.645Z] 
Data Files Check:
[2026-01-15T23:26:22.646Z] .github/data/new_jobs.json: ✅ Exists (10 items, 67044 bytes)
[2026-01-15T23:26:22.653Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1006541 bytes)
[2026-01-15T23:26:22.653Z] 
========================================
[2026-01-15T23:26:22.653Z] Starting Enhanced Discord Bot...
[2026-01-15T23:26:22.653Z] ========================================
[2026-01-15T23:26:23.167Z] [BOT] ✅ Loaded V2 database: 1871 jobs
[2026-01-15T23:26:23.923Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T23:26:23.923Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T23:26:23.923Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T23:26:24.034Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Marketing Analytics - Data Analyst - Adp at Veeva Systems
[2026-01-15T23:26:24.037Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T23:26:24.037Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T23:26:24.037Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T23:26:24.038Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T23:26:24.038Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T23:26:24.042Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-15T23:26:24.042Z] [BOT] 📍 [ROUTING] "Marketing Analytics - Data Analyst - Adp" @ ORG_d0ca1d93 Systems
[2026-01-15T23:26:24.043Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:26:24.043Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T23:26:24.060Z] [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T23:26:24.254Z] [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems',
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
[2026-01-15T23:26:24.254Z] [BOT] ❌ Industry post failed: Marketing Analytics - Data Analyst - Adp
⚠️  Channel full error count: 1/5
[2026-01-15T23:26:25.890Z] [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-15T23:26:25.890Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-15T23:26:27.391Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2026 Grads" @ ORG_d0ca1d93 Systems
[2026-01-15T23:26:27.391Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:26:27.895Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
[2026-01-15T23:26:27.896Z] [BOT] ✅ Industry: Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems
[2026-01-15T23:26:29.999Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems in #🚌・boston
[2026-01-15T23:26:29.999Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T23:26:31.500Z] [BOT] 💾 Marked as posted: Associate Software Engineer – Seeking 2026 Grads @ ORG_d0ca1d93 Systems (instance #1)
[2026-01-15T23:26:31.500Z] [BOT] 💾 BEFORE ARCHIVING: 1872 jobs in database
[2026-01-15T23:26:31.502Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T23:26:31.507Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 1868 active
[2026-01-15T23:26:31.518Z] [BOT] 💾 Saved posted_jobs.json: 1868 active jobs
[2026-01-15T23:26:31.519Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:31.519Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-01-15T23:26:31.519Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T23:26:31.519Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:26:31.781Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-15T23:26:33.489Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2026-01-15T23:26:33.489Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-15T23:26:34.990Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-15T23:26:34.990Z] [BOT] 💾 BEFORE ARCHIVING: 1869 jobs in database
[2026-01-15T23:26:34.992Z] [BOT] ✅ No jobs to archive (all 1869 jobs within 7-day window)
[2026-01-15T23:26:35.007Z] [BOT] 💾 Saved posted_jobs.json: 1869 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:35.008Z] [BOT] 📍 [ROUTING] "Research Engineer - Cbrn" @ ORG_0418e87bind
[2026-01-15T23:26:35.008Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T23:26:35.283Z] [BOT] ✅ Created forum post: 🏢 Research Engineer - Cbrn @ ORG_0418e87bind in #🤖・ai-jobs
  ✅ Industry: Research Engineer - Cbrn @ ORG_0418e87bind
[2026-01-15T23:26:37.110Z] [BOT] ✅ Created forum post: 🏢 Research Engineer - Cbrn @ ORG_0418e87bind in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-15T23:26:38.612Z] [BOT] 💾 Marked as posted: Research Engineer - Cbrn @ ORG_0418e87bind (instance #1)
[2026-01-15T23:26:38.612Z] [BOT] 💾 BEFORE ARCHIVING: 1870 jobs in database
[2026-01-15T23:26:38.614Z] [BOT] ✅ No jobs to archive (all 1870 jobs within 7-day window)
[2026-01-15T23:26:38.628Z] [BOT] 💾 Saved posted_jobs.json: 1870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:38.628Z] [BOT] 📍 [ROUTING] "AI Deployment Analyst" @ ORG_aa834d14 Health
[2026-01-15T23:26:38.628Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T23:26:38.921Z] [BOT] ✅ Created forum post: 🏢 AI Deployment Analyst @ ORG_aa834d14 Health in #🤖・ai-jobs
[2026-01-15T23:26:38.922Z] [BOT] ✅ Industry: AI Deployment Analyst @ ORG_aa834d14 Health
[2026-01-15T23:26:40.609Z] [BOT] ✅ Created forum post: 🏢 AI Deployment Analyst @ ORG_aa834d14 Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T23:26:42.110Z] [BOT] 💾 Marked as posted: AI Deployment Analyst @ ORG_aa834d14 Health (instance #1)
[2026-01-15T23:26:42.110Z] [BOT] 💾 BEFORE ARCHIVING: 1871 jobs in database
[2026-01-15T23:26:42.112Z] [BOT] ✅ No jobs to archive (all 1871 jobs within 7-day window)
[2026-01-15T23:26:42.123Z] [BOT] 💾 Saved posted_jobs.json: 1871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:45.124Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T23:26:45.124Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ ORG_d930a4d9
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T23:26:45.417Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ ORG_d930a4d9 in #📣・marketing-jobs
  ✅ Industry: Technical Consultant @ ORG_d930a4d9
[2026-01-15T23:26:47.240Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ ORG_d930a4d9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T23:26:48.742Z] [BOT] 💾 Marked as posted: Technical Consultant @ ORG_d930a4d9 (instance #1)
[2026-01-15T23:26:48.742Z] [BOT] 💾 BEFORE ARCHIVING: 1872 jobs in database
[2026-01-15T23:26:48.743Z] [BOT] ✅ No jobs to archive (all 1872 jobs within 7-day window)
[2026-01-15T23:26:48.756Z] [BOT] 💾 Saved posted_jobs.json: 1872 active jobs
[2026-01-15T23:26:48.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:51.757Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-15T23:26:51.758Z] [BOT] 📍 [ROUTING] "Software Engineer 1 SAS Programmer" @ ORG_b93825c5 Bank
[2026-01-15T23:26:51.758Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:26:52.068Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank in #💻・tech-jobs
[2026-01-15T23:26:52.068Z] [BOT] ✅ Industry: Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank
[2026-01-15T23:26:53.816Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank in #💻・remote-usa
[2026-01-15T23:26:53.816Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T23:26:55.318Z] [BOT] 💾 Marked as posted: Software Engineer 1 SAS Programmer @ ORG_b93825c5 Bank (instance #1)
[2026-01-15T23:26:55.318Z] [BOT] 💾 BEFORE ARCHIVING: 1873 jobs in database
[2026-01-15T23:26:55.319Z] [BOT] ✅ No jobs to archive (all 1873 jobs within 7-day window)
[2026-01-15T23:26:55.333Z] [BOT] 💾 Saved posted_jobs.json: 1873 active jobs
[2026-01-15T23:26:55.333Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:26:55.333Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
[2026-01-15T23:26:55.333Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T23:26:55.555Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-15T23:26:55.555Z] [BOT] ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2026-01-15T23:26:57.327Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T23:26:58.829Z] [BOT] 💾 Marked as posted: Application Software Engineer @ ORG_afd623b1 (instance #1)
[2026-01-15T23:26:58.829Z] [BOT] 💾 BEFORE ARCHIVING: 1874 jobs in database
[2026-01-15T23:26:58.830Z] [BOT] ✅ No jobs to archive (all 1874 jobs within 7-day window)
[2026-01-15T23:26:58.846Z] [BOT] 💾 Saved posted_jobs.json: 1874 active jobs
[2026-01-15T23:26:58.846Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T23:27:01.847Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-15T23:27:01.847Z] [BOT] 📍 [ROUTING] "Account Executive , USA " @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T23:27:02.424Z] [BOT] ✅ Created forum post: 🏢 Account Executive , USA  @ supabase in #💲・sales-jobs
  ✅ Industry: Account Executive , USA  @ supabase
[2026-01-15T23:27:04.164Z] [BOT] ✅ Created forum post: 🏢 Account Executive , USA  @ supabase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T23:27:05.665Z] [BOT] 💾 Marked as posted: Account Executive , USA  @ supabase (instance #1)
[2026-01-15T23:27:05.665Z] [BOT] 💾 BEFORE ARCHIVING: 1875 jobs in database
[2026-01-15T23:27:05.666Z] [BOT] ✅ No jobs to archive (all 1875 jobs within 7-day window)
[2026-01-15T23:27:05.689Z] [BOT] 💾 Saved posted_jobs.json: 1875 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] " Account Executive, EMEA" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T23:27:05.951Z] [BOT] ✅ Created forum post: 🏢  Account Executive, EMEA @ supabase in #💲・sales-jobs
  ✅ Industry:  Account Executive, EMEA @ supabase
[2026-01-15T23:27:07.453Z] [BOT] 💾 Marked as posted:  Account Executive, EMEA @ supabase (instance #1)
[2026-01-15T23:27:07.454Z] [BOT] 💾 BEFORE ARCHIVING: 1876 jobs in database
[2026-01-15T23:27:07.455Z] [BOT] ✅ No jobs to archive (all 1876 jobs within 7-day window)
[2026-01-15T23:27:07.467Z] [BOT] 💾 Saved posted_jobs.json: 1876 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T23:27:10.468Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-15T23:27:10.469Z] [BOT] ⏭️  Skipping duplicate: JID_d2f18275 (posted within 7 days)
[2026-01-15T23:27:10.469Z] [BOT] ⏭️  Skipping duplicate: JID_f045acf8 (posted within 7 days)
[2026-01-15T23:27:10.469Z] [BOT] ⏭️  Skipping duplicate: JID_37aabcfc (posted within 7 days)
[2026-01-15T23:27:10.469Z] [BOT] ⏭️  Skipping duplicate: JID_acba5c68-_jr100868 (posted within 7 days)
[2026-01-15T23:27:10.470Z] [BOT] ⏭️  Skipping duplicate: JID_5aba4137 (posted within 7 days)
[2026-01-15T23:27:10.470Z] [BOT] ⏭️  Skipping duplicate: JID_010527f2-i_r0107411 (posted within 7 days)
[2026-01-15T23:27:10.470Z] [BOT] ⏭️  Skipping duplicate: JID_4d1ad586 (posted within 7 days)
[2026-01-15T23:27:10.470Z] [BOT] ⏭️  Skipping duplicate: JID_8807d73b (posted within 7 days)
⏭️  Skipping duplicate: JID_f55550ba (posted within 7 days)
[2026-01-15T23:27:10.580Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[2026-01-15T23:27:10.756Z] [BOT] ✅ Saved pending queue: 2749 total (2729 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T23:27:10.818Z] [BOT] 📂 Loaded 4065 existing routing entries
[2026-01-15T23:27:10.883Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T23:27:10.883Z] [BOT] Total entries: 4075
   Timestamp: 2026-01-15T23:27:10.866Z
[2026-01-15T23:27:10.884Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T23:27:10.884Z] [BOT] Total attempts: 19
   Successful: 17
   Failed: 2
   Skipped: 0
[2026-01-15T23:27:10.884Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 9
   Top channels:
[2026-01-15T23:27:10.885Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #🌄・mountain-view: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-15T23:27:10.885Z] [BOT] [STATS] Channel stats saved
[2026-01-15T23:27:12.909Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Marketing Analytics - Data Analyst - Adp
- [BOT ERROR] ❌ Error posting job Marketing Analytics - Data Analyst - Adp: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*