# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T08:14:33.369Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T08:13:35.872Z] ========================================
[2026-01-19T08:13:35.873Z] Discord Bot Execution Log
[2026-01-19T08:13:35.874Z] Environment: GitHub Actions
[2026-01-19T08:13:35.874Z] Node Version: v20.19.6
[2026-01-19T08:13:35.874Z] ========================================
[2026-01-19T08:13:35.874Z] Environment Variables Check:
[2026-01-19T08:13:35.874Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T08:13:35.874Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.874Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T08:13:35.874Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T08:13:35.874Z] 
Multi-Channel Configuration:
[2026-01-19T08:13:35.874Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.874Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T08:13:35.875Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T08:13:35.875Z] 
Data Files Check:
[2026-01-19T08:13:35.876Z] .github/data/new_jobs.json: ✅ Exists (10 items, 99558 bytes)
[2026-01-19T08:13:35.887Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1590601 bytes)
[2026-01-19T08:13:35.887Z] 
========================================
[2026-01-19T08:13:35.887Z] Starting Enhanced Discord Bot...
[2026-01-19T08:13:35.887Z] ========================================
[2026-01-19T08:13:36.405Z] [BOT] ✅ Loaded V2 database: 2923 jobs
[2026-01-19T08:13:37.297Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T08:13:37.297Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T08:13:37.297Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T08:13:37.415Z] [BOT] ✅ Loaded pending queue: 2827 total (2807 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Tax - International Tax and Transaction Services - Transfer Pricing at Ernst & Young
[2026-01-19T08:13:37.420Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T08:13:37.420Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T08:13:37.420Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T08:13:37.421Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T08:13:37.421Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior GRC Lead @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T08:13:37.421Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T08:13:37.426Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-19T08:13:37.427Z] [BOT] 📍 [ROUTING] "Tax - International Tax and Transaction Services - Transfer Pricing" @ ORG_b54c9975 & Young
[2026-01-19T08:13:37.427Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T08:13:37.432Z] [BOT ERROR] (node:2659) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T08:13:37.544Z] [BOT ERROR] ❌ Error posting job Tax - International Tax and Transaction Services - Transfer Pricing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Tax - International Tax and Transaction Services - Transfer Pricing @ ORG_b54c9975 & Young',
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
[2026-01-19T08:13:37.544Z] [BOT] ❌ Industry post failed: Tax - International Tax and Transaction Services - Transfer Pricing
⚠️  Channel full error count: 1/5
[2026-01-19T08:13:39.422Z] [BOT] ✅ Created forum post: 🏢 Tax - International Tax and Transaction Services - Transfer Pricing @ ORG_b54c9975 & Young in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:13:40.924Z] [BOT] 💾 Marked as posted: Tax - International Tax and Transaction Services - Transfer Pricing @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T08:13:40.924Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-19T08:13:40.926Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-19T08:13:40.947Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:13:40.948Z] [BOT] 📍 [ROUTING] "Tax - Multiple Teams" @ ORG_b54c9975 & Young
[2026-01-19T08:13:40.948Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T08:13:41.237Z] [BOT] ✅ Created forum post: 🏢 Tax - Multiple Teams @ ORG_b54c9975 & Young in #🤖・ai-jobs
[2026-01-19T08:13:41.238Z] [BOT] ✅ Industry: Tax - Multiple Teams @ ORG_b54c9975 & Young
[2026-01-19T08:13:43.205Z] [BOT] ✅ Created forum post: 🏢 Tax - Multiple Teams @ ORG_b54c9975 & Young in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:13:44.705Z] [BOT] 💾 Marked as posted: Tax - Multiple Teams @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T08:13:44.706Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-19T08:13:44.708Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-19T08:13:44.723Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:13:44.723Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Maryland - US" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-19T08:13:44.724Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T08:13:44.944Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist - Maryland - US @ ORG_f3ae3598 in #🤖・ai-jobs
[2026-01-19T08:13:44.944Z] [BOT] ✅ Industry: AI Data Specialist - Maryland - US @ ORG_f3ae3598
[2026-01-19T08:13:46.446Z] [BOT] 💾 Marked as posted: AI Data Specialist - Maryland - US @ ORG_f3ae3598 (instance #1)
[2026-01-19T08:13:46.446Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-19T08:13:46.448Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-19T08:13:46.467Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
[2026-01-19T08:13:46.468Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T08:13:49.469Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T08:13:49.469Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_61a1d3bd Companies
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T08:13:49.749Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_61a1d3bd Companies in #📈・JID_fb739488
[2026-01-19T08:13:49.749Z] [BOT] ✅ Industry: Data Analyst @ ORG_61a1d3bd Companies
[2026-01-19T08:13:51.526Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_61a1d3bd Companies in #🦢・los-angeles
[2026-01-19T08:13:51.526Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T08:13:53.026Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_61a1d3bd Companies (instance #1)
[2026-01-19T08:13:53.027Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-19T08:13:53.029Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-19T08:13:53.046Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:13:56.047Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T08:13:56.047Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2026-01-19T08:13:56.047Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T08:13:56.320Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-19T08:13:56.321Z] [BOT] ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2026-01-19T08:13:58.045Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #☀️・sunnyvale
[2026-01-19T08:13:58.045Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-19T08:13:59.546Z] [BOT] 💾 Marked as posted: Software Engineer - Direct To Cell @ ORG_afd623b1 (instance #1)
[2026-01-19T08:13:59.547Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-19T08:13:59.549Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-19T08:13:59.572Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:13:59.572Z] [BOT] 📍 [ROUTING] "Senior Product Writer" @ duolingo
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T08:13:59.812Z] [BOT] ✅ Created forum post: 🏢 Senior Product Writer @ duolingo in #💻・tech-jobs
[2026-01-19T08:13:59.813Z] [BOT] ✅ Industry: Senior Product Writer @ duolingo
[2026-01-19T08:14:01.587Z] [BOT] ✅ Created forum post: 🏢 Senior Product Writer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:14:03.089Z] [BOT] 💾 Marked as posted: Senior Product Writer @ duolingo (instance #1)
[2026-01-19T08:14:03.089Z] [BOT] 💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-19T08:14:03.091Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-19T08:14:03.110Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:14:06.111Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T08:14:06.111Z] [BOT] 📍 [ROUTING] "Compute Transactions & Partnerships" @ anthropic
[2026-01-19T08:14:06.111Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T08:14:06.366Z] [BOT] ✅ Created forum post: 🏢 Compute Transactions & Partnerships @ anthropic in #💲・sales-jobs
[2026-01-19T08:14:06.366Z] [BOT] ✅ Industry: Compute Transactions & Partnerships @ anthropic
[2026-01-19T08:14:08.141Z] [BOT] ✅ Created forum post: 🏢 Compute Transactions & Partnerships @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T08:14:09.642Z] [BOT] 💾 Marked as posted: Compute Transactions & Partnerships @ anthropic (instance #1)
[2026-01-19T08:14:09.643Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-19T08:14:09.645Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-19T08:14:09.662Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:14:09.662Z] [BOT] 📍 [ROUTING] "Senior Partner Manager - Channels (Public Sector)" @ datadog
[2026-01-19T08:14:09.662Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T08:14:09.962Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Manager - Channels (Public Sector) @ datadog in #💲・sales-jobs
[2026-01-19T08:14:09.962Z] [BOT] ✅ Industry: Senior Partner Manager - Channels (Public Sector) @ datadog
[2026-01-19T08:14:11.952Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Manager - Channels (Public Sector) @ datadog in #💻・remote-usa
[2026-01-19T08:14:11.953Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T08:14:13.454Z] [BOT] 💾 Marked as posted: Senior Partner Manager - Channels (Public Sector) @ datadog (instance #1)
[2026-01-19T08:14:13.454Z] [BOT] 💾 BEFORE ARCHIVING: 2931 jobs in database
[2026-01-19T08:14:13.456Z] [BOT] ✅ No jobs to archive (all 2931 jobs within 7-day window)
[2026-01-19T08:14:13.476Z] [BOT] 💾 Saved posted_jobs.json: 2931 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:14:16.477Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T08:14:16.477Z] [BOT] 📍 [ROUTING] "Senior Enablement Manager, Emerging Technology" @ datadog
[2026-01-19T08:14:16.477Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T08:14:16.869Z] [BOT] ✅ Created forum post: 🏢 Senior Enablement Manager, Emerging Technology @ datadog in #📣・marketing-jobs
[2026-01-19T08:14:16.869Z] [BOT] ✅ Industry: Senior Enablement Manager, Emerging Technology @ datadog
[2026-01-19T08:14:18.624Z] [BOT] ✅ Created forum post: 🏢 Senior Enablement Manager, Emerging Technology @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T08:14:20.125Z] [BOT] 💾 Marked as posted: Senior Enablement Manager, Emerging Technology @ datadog (instance #1)
[2026-01-19T08:14:20.125Z] [BOT] 💾 BEFORE ARCHIVING: 2932 jobs in database
[2026-01-19T08:14:20.127Z] [BOT] ✅ No jobs to archive (all 2932 jobs within 7-day window)
[2026-01-19T08:14:20.146Z] [BOT] 💾 Saved posted_jobs.json: 2932 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:14:23.147Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-19T08:14:23.148Z] [BOT] 📍 [ROUTING] "Senior Accountant" @ vercel
[2026-01-19T08:14:23.148Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T08:14:23.407Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ vercel in #💰・finance-jobs
[2026-01-19T08:14:23.407Z] [BOT] ✅ Industry: Senior Accountant @ vercel
[2026-01-19T08:14:25.414Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ vercel in #🌉・san-francisco
[2026-01-19T08:14:25.414Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T08:14:26.917Z] [BOT] 💾 Marked as posted: Senior Accountant @ vercel (instance #1)
[2026-01-19T08:14:26.917Z] [BOT] 💾 BEFORE ARCHIVING: 2933 jobs in database
[2026-01-19T08:14:26.919Z] [BOT] ✅ No jobs to archive (all 2933 jobs within 7-day window)
[2026-01-19T08:14:26.936Z] [BOT] 💾 Saved posted_jobs.json: 2933 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T08:14:29.938Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T08:14:29.939Z] [BOT] ⏭️  Skipping duplicate: JID_d4846738-fye_cgvkuve9hq-vxzmsng (posted within 7 days)
[2026-01-19T08:14:29.939Z] [BOT] ⏭️  Skipping duplicate: JID_9e1cd808-cx_1-job-9772 (posted within 7 days)
[2026-01-19T08:14:29.939Z] [BOT] ⏭️  Skipping duplicate: JID_7160eefa (posted within 7 days)
[2026-01-19T08:14:29.939Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-19T08:14:29.939Z] [BOT] ⏭️  Skipping duplicate: JID_d38de5ae (posted within 7 days)
[2026-01-19T08:14:29.940Z] [BOT] ⏭️  Skipping duplicate: JID_fd2df81c (posted within 7 days)
[2026-01-19T08:14:29.940Z] [BOT] ⏭️  Skipping duplicate: JID_beb3dcf8 (posted within 7 days)
[2026-01-19T08:14:29.940Z] [BOT] ⏭️  Skipping duplicate: JID_644207bb (posted within 7 days)
[2026-01-19T08:14:29.940Z] [BOT] ⏭️  Skipping duplicate: JID_93d2930f (posted within 7 days)
[2026-01-19T08:14:29.940Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-19T08:14:30.058Z] [BOT] ✅ Loaded pending queue: 2827 total (2807 pending, 20 enriched, 0 posted)
[2026-01-19T08:14:30.246Z] [BOT] ✅ Saved pending queue: 2827 total (2807 pending, 10 enriched, 10 posted)
[2026-01-19T08:14:30.246Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T08:14:30.307Z] [BOT] 📂 Loaded 5075 existing routing entries
[2026-01-19T08:14:30.378Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-19T08:14:30.378Z] [BOT] New entries: 10
   Total entries: 5085
   Timestamp: 2026-01-19T08:14:30.357Z
[2026-01-19T08:14:30.379Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T08:14:30.379Z] [BOT] Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-19T08:14:30.379Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 11
   Top channels:
     1. #🗽・new-york: 4 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #💲・sales-jobs: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-19T08:14:30.380Z] [BOT] [STATS] Channel stats saved
[2026-01-19T08:14:32.405Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2659) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Tax - International Tax and Transaction Services - Transfer Pricing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Tax - International Tax and Transaction Services - Transfer Pricing
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*