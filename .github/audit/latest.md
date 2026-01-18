# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T07:09:00.587Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T07:08:04.781Z] ========================================
[2026-01-18T07:08:04.783Z] Discord Bot Execution Log
[2026-01-18T07:08:04.783Z] Environment: GitHub Actions
[2026-01-18T07:08:04.783Z] Node Version: v20.19.6
[2026-01-18T07:08:04.783Z] ========================================
[2026-01-18T07:08:04.783Z] Environment Variables Check:
[2026-01-18T07:08:04.783Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T07:08:04.784Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T07:08:04.784Z] 
Multi-Channel Configuration:
[2026-01-18T07:08:04.784Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T07:08:04.784Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T07:08:04.784Z] 
Data Files Check:
[2026-01-18T07:08:04.786Z] .github/data/new_jobs.json: ✅ Exists (10 items, 119515 bytes)
[2026-01-18T07:08:04.798Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1414565 bytes)
[2026-01-18T07:08:04.798Z] 
========================================
[2026-01-18T07:08:04.798Z] Starting Enhanced Discord Bot...
[2026-01-18T07:08:04.798Z] ========================================
[2026-01-18T07:08:05.283Z] [BOT] ✅ Loaded V2 database: 2613 jobs
[2026-01-18T07:08:05.692Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T07:08:05.693Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T07:08:05.693Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T07:08:05.852Z] [BOT] ✅ Loaded pending queue: 2857 total (2837 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Recruiter, G&A at anthropic
[2026-01-18T07:08:05.856Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T07:08:05.857Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T07:08:05.857Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T07:08:05.858Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-18T07:08:05.858Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Litigation and Risk Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T07:08:05.858Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T07:08:05.863Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-18T07:08:05.864Z] [BOT] 📍 [ROUTING] "Recruiter, G&A" @ anthropic
[2026-01-18T07:08:05.864Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T07:08:05.868Z] [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T07:08:05.993Z] [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Recruiter, G&A @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2026-01-18T07:08:05.993Z] [BOT] ❌ Industry post failed: Recruiter, G&A
⚠️  Channel full error count: 1/5
[2026-01-18T07:08:07.756Z] [BOT] ✅ Created forum post: 🏢 Recruiter, G&A @ anthropic in #🌉・san-francisco
[2026-01-18T07:08:07.756Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:08:09.258Z] [BOT] 💾 Marked as posted: Recruiter, G&A @ anthropic (instance #1)
[2026-01-18T07:08:09.258Z] [BOT] 💾 BEFORE ARCHIVING: 2614 jobs in database
[2026-01-18T07:08:09.260Z] [BOT] ✅ No jobs to archive (all 2614 jobs within 7-day window)
[2026-01-18T07:08:09.278Z] [BOT] 💾 Saved posted_jobs.json: 2614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:12.280Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T07:08:12.280Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
[2026-01-18T07:08:12.280Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T07:08:12.585Z] [BOT] ✅ Created forum post: 🏢 Litigation and Risk Counsel @ brex in #📣・marketing-jobs
[2026-01-18T07:08:12.586Z] [BOT] ✅ Industry: Litigation and Risk Counsel @ brex
[2026-01-18T07:08:14.330Z] [BOT] ✅ Created forum post: 🏢 Litigation and Risk Counsel @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T07:08:15.831Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-18T07:08:15.831Z] [BOT] 💾 BEFORE ARCHIVING: 2615 jobs in database
[2026-01-18T07:08:15.833Z] [BOT] ✅ No jobs to archive (all 2615 jobs within 7-day window)
[2026-01-18T07:08:15.852Z] [BOT] 💾 Saved posted_jobs.json: 2615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:15.852Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-18T07:08:15.852Z] [BOT] 💾 BEFORE ARCHIVING: 2616 jobs in database
[2026-01-18T07:08:15.855Z] [BOT] ✅ No jobs to archive (all 2616 jobs within 7-day window)
[2026-01-18T07:08:15.871Z] [BOT] 💾 Saved posted_jobs.json: 2616 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:15.872Z] [BOT] 💾 Marked as posted: Litigation and Risk Counsel @ brex (instance #1)
[2026-01-18T07:08:15.872Z] [BOT] 💾 BEFORE ARCHIVING: 2617 jobs in database
[2026-01-18T07:08:15.873Z] [BOT] ✅ No jobs to archive (all 2617 jobs within 7-day window)
[2026-01-18T07:08:15.889Z] [BOT] 💾 Saved posted_jobs.json: 2617 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:18.889Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T07:08:18.890Z] [BOT] 📍 [ROUTING] "Associate Systems Analyst-IT Sales & Trade Portfolio" @ ORG_4d4fb8cc Brands
[2026-01-18T07:08:18.890Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:08:19.242Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands in #💲・sales-jobs
  ✅ Industry: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands
[2026-01-18T07:08:20.910Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-18T07:08:22.412Z] [BOT] 💾 Marked as posted: Associate Systems Analyst-IT Sales & Trade Portfolio @ ORG_4d4fb8cc Brands (instance #1)
[2026-01-18T07:08:22.412Z] [BOT] 💾 BEFORE ARCHIVING: 2618 jobs in database
[2026-01-18T07:08:22.414Z] [BOT] ✅ No jobs to archive (all 2618 jobs within 7-day window)
[2026-01-18T07:08:22.430Z] [BOT] 💾 Saved posted_jobs.json: 2618 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:22.430Z] [BOT] 📍 [ROUTING] "Head of IT SOX" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-18T07:08:22.430Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T07:08:22.762Z] [BOT] ✅ Created forum post: 🏢 Head of IT SOX @ anthropic in #💲・sales-jobs
[2026-01-18T07:08:22.762Z] [BOT] ✅ Industry: Head of IT SOX @ anthropic
[2026-01-18T07:08:24.469Z] [BOT] ✅ Created forum post: 🏢 Head of IT SOX @ anthropic in #🌉・san-francisco
[2026-01-18T07:08:24.469Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T07:08:25.970Z] [BOT] 💾 Marked as posted: Head of IT SOX @ anthropic (instance #1)
[2026-01-18T07:08:25.971Z] [BOT] 💾 BEFORE ARCHIVING: 2619 jobs in database
[2026-01-18T07:08:25.973Z] [BOT] ✅ No jobs to archive (all 2619 jobs within 7-day window)
[2026-01-18T07:08:25.992Z] [BOT] 💾 Saved posted_jobs.json: 2619 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:28.994Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T07:08:28.994Z] [BOT] 📍 [ROUTING] "Applied Scientist – New College Grad - AI Enterprise Products" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-18T07:08:28.994Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T07:08:29.234Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist – New College Grad - AI Enterprise Products @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Applied Scientist – New College Grad - AI Enterprise Products @ ORG_0890f456
[2026-01-18T07:08:30.973Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist – New College Grad - AI Enterprise Products @ ORG_0890f456 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T07:08:32.474Z] [BOT] 💾 Marked as posted: Applied Scientist – New College Grad - AI Enterprise Products @ ORG_0890f456 (instance #1)
[2026-01-18T07:08:32.474Z] [BOT] 💾 BEFORE ARCHIVING: 2620 jobs in database
[2026-01-18T07:08:32.476Z] [BOT] ✅ No jobs to archive (all 2620 jobs within 7-day window)
[2026-01-18T07:08:32.493Z] [BOT] 💾 Saved posted_jobs.json: 2620 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:32.493Z] [BOT] 📍 [ROUTING] "Product Designer, Enterprise " @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-18T07:08:32.493Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T07:08:32.793Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Enterprise  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Enterprise  @ anthropic
[2026-01-18T07:08:34.466Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Enterprise  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T07:08:35.967Z] [BOT] 💾 Marked as posted: Product Designer, Enterprise  @ anthropic (instance #1)
[2026-01-18T07:08:35.967Z] [BOT] 💾 BEFORE ARCHIVING: 2621 jobs in database
[2026-01-18T07:08:35.969Z] [BOT] ✅ No jobs to archive (all 2621 jobs within 7-day window)
[2026-01-18T07:08:35.985Z] [BOT] 💾 Saved posted_jobs.json: 2621 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:38.986Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T07:08:38.986Z] [BOT] 📍 [ROUTING] "Junior Java Developer" @ mthree
[2026-01-18T07:08:38.986Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:08:39.195Z] [BOT] ✅ Created forum post: 🏢 Junior Java Developer @ mthree in #💻・tech-jobs
[2026-01-18T07:08:39.195Z] [BOT] ✅ Industry: Junior Java Developer @ mthree
[2026-01-18T07:08:40.898Z] [BOT] ✅ Created forum post: 🏢 Junior Java Developer @ mthree in #🗽・new-york
[2026-01-18T07:08:40.898Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T07:08:42.399Z] [BOT] 💾 Marked as posted: Junior Java Developer @ mthree (instance #1)
💾 BEFORE ARCHIVING: 2622 jobs in database
[2026-01-18T07:08:42.401Z] [BOT] ✅ No jobs to archive (all 2622 jobs within 7-day window)
[2026-01-18T07:08:42.419Z] [BOT] 💾 Saved posted_jobs.json: 2622 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:42.420Z] [BOT] 📍 [ROUTING] "2026 Technology Early Career Development Program-Full Stack Development" @ ORG_d637ebfb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:08:42.581Z] [BOT] ✅ Created forum post: 🏢 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb in #💻・tech-jobs
[2026-01-18T07:08:42.581Z] [BOT] ✅ Industry: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb
[2026-01-18T07:08:44.588Z] [BOT] ✅ Created forum post: 🏢 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T07:08:46.089Z] [BOT] 💾 Marked as posted: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb (instance #1)
💾 BEFORE ARCHIVING: 2623 jobs in database
[2026-01-18T07:08:46.091Z] [BOT] ✅ No jobs to archive (all 2623 jobs within 7-day window)
[2026-01-18T07:08:46.107Z] [BOT] 💾 Saved posted_jobs.json: 2623 active jobs
[2026-01-18T07:08:46.107Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:46.108Z] [BOT] 📍 [ROUTING] "Space Payload 1&T – Engineer/Principal Engineer" @ ORG_f3f2248d Grumman
[2026-01-18T07:08:46.108Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T07:08:46.319Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman
[2026-01-18T07:08:48.007Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T07:08:49.508Z] [BOT] 💾 Marked as posted: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-18T07:08:49.508Z] [BOT] 💾 BEFORE ARCHIVING: 2624 jobs in database
[2026-01-18T07:08:49.509Z] [BOT] ✅ No jobs to archive (all 2624 jobs within 7-day window)
[2026-01-18T07:08:49.524Z] [BOT] 💾 Saved posted_jobs.json: 2624 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:52.524Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
📍 [ROUTING] "Manufacturing Data Analyst" @ ORG_2fb6cbf5 Industries
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T07:08:52.802Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries in #📈・JID_fb739488
  ✅ Industry: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries
[2026-01-18T07:08:54.302Z] [BOT] 💾 Marked as posted: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries (instance #1)
[2026-01-18T07:08:54.303Z] [BOT] 💾 BEFORE ARCHIVING: 2625 jobs in database
[2026-01-18T07:08:54.304Z] [BOT] ✅ No jobs to archive (all 2625 jobs within 7-day window)
[2026-01-18T07:08:54.319Z] [BOT] 💾 Saved posted_jobs.json: 2625 active jobs
[2026-01-18T07:08:54.319Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T07:08:57.320Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T07:08:57.320Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-18T07:08:57.320Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_cbc305b9 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_24e9bed4-2026_jr2006411 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_8ae35ea4 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_802c8302-development_r021433 (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
[2026-01-18T07:08:57.321Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
[2026-01-18T07:08:57.322Z] [BOT] ⏭️  Skipping duplicate: JID_aa367e41-ppg_careers-JID_e53563da-analyst_jr2518708 (posted within 7 days)
[2026-01-18T07:08:57.479Z] [BOT] ✅ Loaded pending queue: 2857 total (2837 pending, 20 enriched, 0 posted)
[2026-01-18T07:08:57.672Z] [BOT] ✅ Saved pending queue: 2857 total (2837 pending, 10 enriched, 10 posted)
[2026-01-18T07:08:57.672Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T07:08:57.738Z] [BOT] 📂 Loaded 4775 existing routing entries
[2026-01-18T07:08:57.805Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4785
   Timestamp: 2026-01-18T07:08:57.788Z
[2026-01-18T07:08:57.805Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
[2026-01-18T07:08:57.805Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-18T07:08:57.806Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2026-01-18T07:08:57.806Z] [BOT] Channels used: 10
   Top channels:
     1. #🌉・san-francisco: 3 posts
[2026-01-18T07:08:57.806Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-18T07:08:57.806Z] [BOT] [STATS] Channel stats saved
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Recruiter, G&A: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Recruiter, G&A
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*