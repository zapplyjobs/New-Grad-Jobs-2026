# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T22:30:01.612Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T22:29:03.852Z] ========================================
[2026-01-19T22:29:03.854Z] Discord Bot Execution Log
[2026-01-19T22:29:03.854Z] Environment: GitHub Actions
[2026-01-19T22:29:03.854Z] Node Version: v20.19.6
[2026-01-19T22:29:03.854Z] ========================================
[2026-01-19T22:29:03.854Z] Environment Variables Check:
[2026-01-19T22:29:03.854Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T22:29:03.854Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.854Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T22:29:03.855Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T22:29:03.855Z] 
Multi-Channel Configuration:
[2026-01-19T22:29:03.855Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.855Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T22:29:03.856Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T22:29:03.856Z] 
Data Files Check:
[2026-01-19T22:29:03.857Z] .github/data/new_jobs.json: ✅ Exists (10 items, 180285 bytes)
[2026-01-19T22:29:03.867Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1568514 bytes)
[2026-01-19T22:29:03.868Z] 
========================================
[2026-01-19T22:29:03.868Z] Starting Enhanced Discord Bot...
[2026-01-19T22:29:03.868Z] ========================================
[2026-01-19T22:29:04.401Z] [BOT] ✅ Loaded V2 database: 2867 jobs
[2026-01-19T22:29:04.930Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T22:29:04.931Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T22:29:04.931Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T22:29:05.046Z] [BOT] ✅ Loaded pending queue: 2812 total (2792 pending, 20 enriched, 0 posted)
[2026-01-19T22:29:05.046Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Future Opportunities: Benefits Advocate at gusto
[2026-01-19T22:29:05.052Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T22:29:05.053Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T22:29:05.053Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T22:29:05.054Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T22:29:05.054Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T22:29:05.059Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-19T22:29:05.060Z] [BOT] 📍 [ROUTING] "Future Opportunities: Benefits Advocate" @ gusto
[2026-01-19T22:29:05.060Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T22:29:05.065Z] [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T22:29:05.624Z] [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Future Opportunities: Benefits Advocate @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-19T22:29:05.624Z] [BOT] ❌ Industry post failed: Future Opportunities: Benefits Advocate
⚠️  Channel full error count: 1/5
[2026-01-19T22:29:07.411Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Benefits Advocate @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T22:29:08.911Z] [BOT] 💾 Marked as posted: Future Opportunities: Benefits Advocate @ gusto (instance #1)
[2026-01-19T22:29:08.911Z] [BOT] 💾 BEFORE ARCHIVING: 2868 jobs in database
[2026-01-19T22:29:08.914Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T22:29:08.919Z] [BOT] 📦 Archived 42 jobs to 2026-01.json (42 total in archive)
[2026-01-19T22:29:08.919Z] [BOT] ✅ Archiving complete: 42 archived, 2826 active
[2026-01-19T22:29:08.936Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:08.936Z] [BOT] 📍 [ROUTING] "Future Opportunities: Payroll Advocate" @ gusto
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T22:29:09.087Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Payroll Advocate @ gusto in #🩺・healthcare-jobs
[2026-01-19T22:29:09.087Z] [BOT] ✅ Industry: Future Opportunities: Payroll Advocate @ gusto
[2026-01-19T22:29:10.752Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Payroll Advocate @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T22:29:12.253Z] [BOT] 💾 Marked as posted: Future Opportunities: Payroll Advocate @ gusto (instance #1)
[2026-01-19T22:29:12.254Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-19T22:29:12.255Z] [BOT] ✅ No jobs to archive (all 2827 jobs within 7-day window)
[2026-01-19T22:29:12.271Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:12.271Z] [BOT] 📍 [ROUTING] "Future Opportunities: Retirement Advocate" @ gusto
   Category: HEALTHCARE (matched: "medical")
[2026-01-19T22:29:12.272Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T22:29:12.536Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Retirement Advocate @ gusto in #🩺・healthcare-jobs
  ✅ Industry: Future Opportunities: Retirement Advocate @ gusto
[2026-01-19T22:29:14.344Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Retirement Advocate @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T22:29:15.846Z] [BOT] 💾 Marked as posted: Future Opportunities: Retirement Advocate @ gusto (instance #1)
[2026-01-19T22:29:15.846Z] [BOT] 💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-19T22:29:15.849Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-19T22:29:15.869Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:18.870Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T22:29:18.871Z] [BOT] 📍 [ROUTING] "Head of Business Systems Analysts, Revenue" @ gusto
[2026-01-19T22:29:18.871Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:29:19.136Z] [BOT] ✅ Created forum post: 🏢 Head of Business Systems Analysts, Revenue @ gusto in #💲・sales-jobs
[2026-01-19T22:29:19.136Z] [BOT] ✅ Industry: Head of Business Systems Analysts, Revenue @ gusto
[2026-01-19T22:29:20.858Z] [BOT] ✅ Created forum post: 🏢 Head of Business Systems Analysts, Revenue @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:29:22.359Z] [BOT] 💾 Marked as posted: Head of Business Systems Analysts, Revenue @ gusto (instance #1)
[2026-01-19T22:29:22.360Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-19T22:29:22.362Z] [BOT] ✅ No jobs to archive (all 2829 jobs within 7-day window)
[2026-01-19T22:29:22.379Z] [BOT] 💾 Saved posted_jobs.json: 2829 active jobs
[2026-01-19T22:29:22.379Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:25.380Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T22:29:25.381Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager, Payroll GTM" @ gusto
   Category: MARKETING (matched: "marketing")
[2026-01-19T22:29:25.381Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T22:29:25.569Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Payroll GTM @ gusto in #📣・marketing-jobs
[2026-01-19T22:29:25.569Z] [BOT] ✅ Industry: Senior Product Marketing Manager, Payroll GTM @ gusto
[2026-01-19T22:29:27.495Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager, Payroll GTM @ gusto in #🌉・san-francisco
[2026-01-19T22:29:27.495Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:29:28.997Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager, Payroll GTM @ gusto (instance #1)
[2026-01-19T22:29:28.997Z] [BOT] 💾 BEFORE ARCHIVING: 2830 jobs in database
[2026-01-19T22:29:28.999Z] [BOT] ✅ No jobs to archive (all 2830 jobs within 7-day window)
[2026-01-19T22:29:29.016Z] [BOT] 💾 Saved posted_jobs.json: 2830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:32.017Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T22:29:32.018Z] [BOT] 📍 [ROUTING] "Enterprise Application AI Architect" @ gusto
[2026-01-19T22:29:32.018Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T22:29:32.319Z] [BOT] ✅ Created forum post: 🏢 Enterprise Application AI Architect @ gusto in #🤖・ai-jobs
  ✅ Industry: Enterprise Application AI Architect @ gusto
[2026-01-19T22:29:34.167Z] [BOT] ✅ Created forum post: 🏢 Enterprise Application AI Architect @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:29:35.668Z] [BOT] 💾 Marked as posted: Enterprise Application AI Architect @ gusto (instance #1)
[2026-01-19T22:29:35.669Z] [BOT] 💾 BEFORE ARCHIVING: 2831 jobs in database
[2026-01-19T22:29:35.670Z] [BOT] ✅ No jobs to archive (all 2831 jobs within 7-day window)
[2026-01-19T22:29:35.686Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
[2026-01-19T22:29:35.687Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Taxonomist / Ontologist" @ gusto
[2026-01-19T22:29:35.687Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T22:29:35.687Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-19T22:29:35.931Z] [BOT] ✅ Created forum post: 🏢 Taxonomist / Ontologist @ gusto in #🤖・ai-jobs
  ✅ Industry: Taxonomist / Ontologist @ gusto
[2026-01-19T22:29:37.630Z] [BOT] ✅ Created forum post: 🏢 Taxonomist / Ontologist @ gusto in #🌉・san-francisco
[2026-01-19T22:29:37.631Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:29:39.132Z] [BOT] 💾 Marked as posted: Taxonomist / Ontologist @ gusto (instance #1)
[2026-01-19T22:29:39.132Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-19T22:29:39.134Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-19T22:29:39.153Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
[2026-01-19T22:29:39.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:42.153Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-19T22:29:42.153Z] [BOT] 📍 [ROUTING] "Future Opportunities: Accountant Sales Talent" @ gusto
[2026-01-19T22:29:42.153Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T22:29:42.494Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Accountant Sales Talent @ gusto in #💰・finance-jobs
  ✅ Industry: Future Opportunities: Accountant Sales Talent @ gusto
[2026-01-19T22:29:44.267Z] [BOT] ✅ Created forum post: 🏢 Future Opportunities: Accountant Sales Talent @ gusto in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-19T22:29:45.769Z] [BOT] 💾 Marked as posted: Future Opportunities: Accountant Sales Talent @ gusto (instance #1)
[2026-01-19T22:29:45.769Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-19T22:29:45.771Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-19T22:29:45.790Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:45.790Z] [BOT] 📍 [ROUTING] "Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy)" @ gusto
[2026-01-19T22:29:45.790Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-19T22:29:45.983Z] [BOT] ✅ Created forum post: 🏢 Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) @ gusto in #💰・finance-jobs
  ✅ Industry: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) @ gusto
[2026-01-19T22:29:47.686Z] [BOT] ✅ Created forum post: 🏢 Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) @ gusto in #🌉・san-francisco
[2026-01-19T22:29:47.686Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:29:49.187Z] [BOT] 💾 Marked as posted: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) @ gusto (instance #1)
[2026-01-19T22:29:49.187Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-19T22:29:49.189Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-19T22:29:49.207Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:52.207Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T22:29:52.207Z] [BOT] 📍 [ROUTING] "Principal Product Manager, Gusto Solo" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T22:29:52.208Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-19T22:29:52.389Z] [BOT] ✅ Created forum post: 🏢 Principal Product Manager, Gusto Solo @ gusto in #📈・JID_fb739488
  ✅ Industry: Principal Product Manager, Gusto Solo @ gusto
[2026-01-19T22:29:53.989Z] [BOT ERROR] ❌ Error posting job Principal Product Manager, Gusto Solo: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Principal Product Manager, Gusto Solo @ gusto',
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
[2026-01-19T22:29:53.989Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T22:29:55.490Z] [BOT] 💾 Marked as posted: Principal Product Manager, Gusto Solo @ gusto (instance #1)
[2026-01-19T22:29:55.490Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-19T22:29:55.492Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-19T22:29:55.512Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:29:58.513Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T22:29:58.514Z] [BOT] ⏭️  Skipping duplicate: JID_91470a5e (posted within 7 days)
[2026-01-19T22:29:58.514Z] [BOT] ⏭️  Skipping duplicate: JID_426660b7 (posted within 7 days)
⏭️  Skipping duplicate: JID_5def375d (posted within 7 days)
[2026-01-19T22:29:58.514Z] [BOT] ⏭️  Skipping duplicate: JID_f4a28838 (posted within 7 days)
[2026-01-19T22:29:58.514Z] [BOT] ⏭️  Skipping duplicate: JID_109e986c (posted within 7 days)
[2026-01-19T22:29:58.515Z] [BOT] ⏭️  Skipping duplicate: JID_e5f75dc6 (posted within 7 days)
[2026-01-19T22:29:58.515Z] [BOT] ⏭️  Skipping duplicate: JID_f549dcde (posted within 7 days)
[2026-01-19T22:29:58.515Z] [BOT] ⏭️  Skipping duplicate: JID_804f6fc4 (posted within 7 days)
⏭️  Skipping duplicate: JID_2e1e9cdc (posted within 7 days)
⏭️  Skipping duplicate: JID_55d680ab (posted within 7 days)
[2026-01-19T22:29:58.634Z] [BOT] ✅ Loaded pending queue: 2812 total (2792 pending, 20 enriched, 0 posted)
[2026-01-19T22:29:58.802Z] [BOT] ✅ Saved pending queue: 2812 total (2792 pending, 10 enriched, 10 posted)
[2026-01-19T22:29:58.802Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T22:29:58.865Z] [BOT] 📂 Loaded 5175 existing routing entries
[2026-01-19T22:29:58.936Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T22:29:58.937Z] [BOT] Total entries: 5185
   Timestamp: 2026-01-19T22:29:58.915Z
[2026-01-19T22:29:58.937Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T22:29:58.937Z] [BOT] Total attempts: 20
   Successful: 18
   Failed: 2
   Skipped: 0
[2026-01-19T22:29:58.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T22:29:58.938Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
[2026-01-19T22:29:58.938Z] [BOT] 1. #🌉・san-francisco: 5 posts
     2. #🌆・chicago: 4 posts
     3. #🩺・healthcare-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-19T22:29:58.938Z] [BOT] 5. #💰・finance-jobs: 2 posts
[2026-01-19T22:29:58.938Z] [BOT] [STATS] Channel stats saved
[2026-01-19T22:30:00.959Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Future Opportunities: Benefits Advocate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Future Opportunities: Benefits Advocate
- [BOT ERROR] ❌ Error posting job Principal Product Manager, Gusto Solo: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*