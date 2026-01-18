# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T05:28:11.652Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T05:27:17.662Z] ========================================
[2026-01-18T05:27:17.664Z] Discord Bot Execution Log
[2026-01-18T05:27:17.664Z] Environment: GitHub Actions
[2026-01-18T05:27:17.664Z] Node Version: v20.19.6
[2026-01-18T05:27:17.664Z] ========================================
[2026-01-18T05:27:17.664Z] Environment Variables Check:
[2026-01-18T05:27:17.664Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T05:27:17.664Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.664Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T05:27:17.665Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T05:27:17.665Z] 
Multi-Channel Configuration:
[2026-01-18T05:27:17.665Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T05:27:17.665Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T05:27:17.665Z] 
Data Files Check:
[2026-01-18T05:27:17.667Z] .github/data/new_jobs.json: ✅ Exists (10 items, 173954 bytes)
[2026-01-18T05:27:17.676Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1393591 bytes)
[2026-01-18T05:27:17.676Z] 
========================================
[2026-01-18T05:27:17.676Z] Starting Enhanced Discord Bot...
[2026-01-18T05:27:17.676Z] ========================================
[2026-01-18T05:27:18.206Z] [BOT] ✅ Loaded V2 database: 2576 jobs
[2026-01-18T05:27:18.749Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T05:27:18.749Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T05:27:18.750Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T05:27:18.873Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Finance Manager, Business Operations at discord
[2026-01-18T05:27:18.876Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T05:27:18.876Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T05:27:18.876Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T05:27:18.877Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T05:27:18.877Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Developer 1 @ Oracle: pleasanton, nashville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T05:27:18.878Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T05:27:18.882Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-18T05:27:18.882Z] [BOT] 📍 [ROUTING] "Finance Manager, Business Operations" @ discord
[2026-01-18T05:27:18.882Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-18T05:27:18.887Z] [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T05:27:19.038Z] [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Finance Manager, Business Operations @ discord',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-18T05:27:19.038Z] [BOT] ❌ Industry post failed: Finance Manager, Business Operations
⚠️  Channel full error count: 1/5
[2026-01-18T05:27:20.722Z] [BOT] ✅ Created forum post: 🏢 Finance Manager, Business Operations @ discord in #🌉・san-francisco
[2026-01-18T05:27:20.722Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:22.224Z] [BOT] 💾 Marked as posted: Finance Manager, Business Operations @ discord (instance #1)
[2026-01-18T05:27:22.224Z] [BOT] 💾 BEFORE ARCHIVING: 2577 jobs in database
[2026-01-18T05:27:22.227Z] [BOT] ✅ No jobs to archive (all 2577 jobs within 7-day window)
[2026-01-18T05:27:22.245Z] [BOT] 💾 Saved posted_jobs.json: 2577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:25.246Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T05:27:25.246Z] [BOT] 📍 [ROUTING] "Data Center Physical Security Lead" @ anthropic
[2026-01-18T05:27:25.247Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:27:25.588Z] [BOT] ✅ Created forum post: 🏢 Data Center Physical Security Lead @ anthropic in #💻・tech-jobs
[2026-01-18T05:27:25.589Z] [BOT] ✅ Industry: Data Center Physical Security Lead @ anthropic
[2026-01-18T05:27:27.437Z] [BOT] ✅ Created forum post: 🏢 Data Center Physical Security Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:28.937Z] [BOT] 💾 Marked as posted: Data Center Physical Security Lead @ anthropic (instance #1)
[2026-01-18T05:27:28.938Z] [BOT] 💾 BEFORE ARCHIVING: 2578 jobs in database
[2026-01-18T05:27:28.940Z] [BOT] ✅ No jobs to archive (all 2578 jobs within 7-day window)
[2026-01-18T05:27:28.959Z] [BOT] 💾 Saved posted_jobs.json: 2578 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:28.960Z] [BOT] 📍 [ROUTING] "Senior / Staff Software Engineer - Autonomous Agent Infrastructure" @ anthropic
[2026-01-18T05:27:28.960Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T05:27:29.138Z] [BOT] ✅ Created forum post: 🏢 Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic in #💻・tech-jobs
  ✅ Industry: Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic
[2026-01-18T05:27:30.890Z] [BOT] ✅ Created forum post: 🏢 Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:32.390Z] [BOT] 💾 Marked as posted: Senior / Staff Software Engineer - Autonomous Agent Infrastructure @ anthropic (instance #1)
[2026-01-18T05:27:32.391Z] [BOT] 💾 BEFORE ARCHIVING: 2579 jobs in database
[2026-01-18T05:27:32.393Z] [BOT] ✅ No jobs to archive (all 2579 jobs within 7-day window)
[2026-01-18T05:27:32.410Z] [BOT] 💾 Saved posted_jobs.json: 2579 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:35.410Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T05:27:35.411Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Developer Platform" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T05:27:35.411Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T05:27:35.833Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Developer Platform @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Claude Developer Platform @ anthropic
[2026-01-18T05:27:37.953Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Developer Platform @ anthropic in #🌉・san-francisco
[2026-01-18T05:27:37.954Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:39.455Z] [BOT] 💾 Marked as posted: Product Designer, Claude Developer Platform @ anthropic (instance #1)
[2026-01-18T05:27:39.455Z] [BOT] 💾 BEFORE ARCHIVING: 2580 jobs in database
[2026-01-18T05:27:39.458Z] [BOT] ✅ No jobs to archive (all 2580 jobs within 7-day window)
[2026-01-18T05:27:39.474Z] [BOT] 💾 Saved posted_jobs.json: 2580 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:39.475Z] [BOT] 📍 [ROUTING] "Security GRC Specialist" @ anthropic
[2026-01-18T05:27:39.475Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T05:27:39.840Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist @ anthropic in #🤖・ai-jobs
  ✅ Industry: Security GRC Specialist @ anthropic
[2026-01-18T05:27:41.961Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:43.462Z] [BOT] 💾 Marked as posted: Security GRC Specialist @ anthropic (instance #1)
[2026-01-18T05:27:43.463Z] [BOT] 💾 BEFORE ARCHIVING: 2581 jobs in database
[2026-01-18T05:27:43.464Z] [BOT] ✅ No jobs to archive (all 2581 jobs within 7-day window)
[2026-01-18T05:27:43.483Z] [BOT] 💾 Saved posted_jobs.json: 2581 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:43.483Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer - Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-18T05:27:43.483Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T05:27:43.891Z] [BOT] ✅ Created forum post: 🏢 Developer Campaign Marketer - Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer - Claude Code @ anthropic
[2026-01-18T05:27:45.589Z] [BOT] ✅ Created forum post: 🏢 Developer Campaign Marketer - Claude Code @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:47.090Z] [BOT] 💾 Marked as posted: Developer Campaign Marketer - Claude Code @ anthropic (instance #1)
[2026-01-18T05:27:47.091Z] [BOT] 💾 BEFORE ARCHIVING: 2582 jobs in database
[2026-01-18T05:27:47.092Z] [BOT] ✅ No jobs to archive (all 2582 jobs within 7-day window)
[2026-01-18T05:27:47.109Z] [BOT] 💾 Saved posted_jobs.json: 2582 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:50.110Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T05:27:50.111Z] [BOT] 📍 [ROUTING] "Sales Development Representative (Denver)" @ datadog
[2026-01-18T05:27:50.111Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:27:50.330Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (Denver) @ datadog in #💲・sales-jobs
[2026-01-18T05:27:50.331Z] [BOT] ✅ Industry: Sales Development Representative (Denver) @ datadog
[2026-01-18T05:27:51.833Z] [BOT] 💾 Marked as posted: Sales Development Representative (Denver) @ datadog (instance #1)
[2026-01-18T05:27:51.833Z] [BOT] 💾 BEFORE ARCHIVING: 2583 jobs in database
[2026-01-18T05:27:51.835Z] [BOT] ✅ No jobs to archive (all 2583 jobs within 7-day window)
[2026-01-18T05:27:51.850Z] [BOT] 💾 Saved posted_jobs.json: 2583 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:51.851Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ airtable
[2026-01-18T05:27:51.851Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:27:52.097Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ airtable in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid Market @ airtable
[2026-01-18T05:27:53.824Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ airtable in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-18T05:27:55.326Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ airtable (instance #1)
[2026-01-18T05:27:55.326Z] [BOT] 💾 BEFORE ARCHIVING: 2584 jobs in database
[2026-01-18T05:27:55.328Z] [BOT] ✅ No jobs to archive (all 2584 jobs within 7-day window)
[2026-01-18T05:27:55.345Z] [BOT] 💾 Saved posted_jobs.json: 2584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:27:55.346Z] [BOT] 📍 [ROUTING] "Recruiting Systems Analyst" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T05:27:55.544Z] [BOT] ✅ Created forum post: 🏢 Recruiting Systems Analyst @ anthropic in #💲・sales-jobs
[2026-01-18T05:27:55.544Z] [BOT] ✅ Industry: Recruiting Systems Analyst @ anthropic
[2026-01-18T05:27:57.224Z] [BOT] ✅ Created forum post: 🏢 Recruiting Systems Analyst @ anthropic in #🌉・san-francisco
[2026-01-18T05:27:57.224Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T05:27:58.725Z] [BOT] 💾 Marked as posted: Recruiting Systems Analyst @ anthropic (instance #1)
[2026-01-18T05:27:58.725Z] [BOT] 💾 BEFORE ARCHIVING: 2585 jobs in database
[2026-01-18T05:27:58.727Z] [BOT] ✅ No jobs to archive (all 2585 jobs within 7-day window)
[2026-01-18T05:27:58.744Z] [BOT] 💾 Saved posted_jobs.json: 2585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:28:01.745Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-18T05:28:01.745Z] [BOT] 📍 [ROUTING] "Channel Sales Manager, HBS" @ verkada
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-18T05:28:01.745Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T05:28:01.745Z] [BOT] ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-18T05:28:02.042Z] [BOT] ✅ Created forum post: 🏢 Channel Sales Manager, HBS @ verkada in #📈・JID_fb739488
  ✅ Industry: Channel Sales Manager, HBS @ verkada
[2026-01-18T05:28:03.875Z] [BOT] ✅ Created forum post: 🏢 Channel Sales Manager, HBS @ verkada in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T05:28:05.377Z] [BOT] 💾 Marked as posted: Channel Sales Manager, HBS @ verkada (instance #1)
[2026-01-18T05:28:05.377Z] [BOT] 💾 BEFORE ARCHIVING: 2586 jobs in database
[2026-01-18T05:28:05.379Z] [BOT] ✅ No jobs to archive (all 2586 jobs within 7-day window)
[2026-01-18T05:28:05.396Z] [BOT] 💾 Saved posted_jobs.json: 2586 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T05:28:08.397Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T05:28:08.398Z] [BOT] ⏭️  Skipping duplicate: JID_f4417534 (posted within 7 days)
[2026-01-18T05:28:08.398Z] [BOT] ⏭️  Skipping duplicate: JID_481466d0 (posted within 7 days)
[2026-01-18T05:28:08.399Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️  Skipping duplicate: JID_48ecbfeb (posted within 7 days)
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️  Skipping duplicate: JID_33779413 (posted within 7 days)
[2026-01-18T05:28:08.399Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
[2026-01-18T05:28:08.399Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
[2026-01-18T05:28:08.399Z] [BOT] ⏭️  Skipping duplicate: JID_b6f5d3f0 (posted within 7 days)
[2026-01-18T05:28:08.400Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-18T05:28:08.514Z] [BOT] ✅ Loaded pending queue: 2864 total (2844 pending, 20 enriched, 0 posted)
[2026-01-18T05:28:08.701Z] [BOT] ✅ Saved pending queue: 2864 total (2844 pending, 10 enriched, 10 posted)
[2026-01-18T05:28:08.702Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T05:28:08.762Z] [BOT] 📂 Loaded 4745 existing routing entries
[2026-01-18T05:28:08.834Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-18T05:28:08.834Z] [BOT] Total entries: 4755
   Timestamp: 2026-01-18T05:28:08.812Z
[2026-01-18T05:28:08.835Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
   Successful: 18
   Failed: 1
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-18T05:28:10.862Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Finance Manager, Business Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Finance Manager, Business Operations
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*