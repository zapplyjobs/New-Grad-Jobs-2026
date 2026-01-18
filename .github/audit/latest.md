# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T08:30:10.713Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T08:29:16.658Z] ========================================
[2026-01-18T08:29:16.660Z] Discord Bot Execution Log
[2026-01-18T08:29:16.660Z] Environment: GitHub Actions
[2026-01-18T08:29:16.660Z] Node Version: v20.19.6
[2026-01-18T08:29:16.660Z] ========================================
[2026-01-18T08:29:16.660Z] Environment Variables Check:
[2026-01-18T08:29:16.660Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T08:29:16.660Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T08:29:16.661Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T08:29:16.661Z] 
Multi-Channel Configuration:
[2026-01-18T08:29:16.661Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T08:29:16.661Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T08:29:16.662Z] 
Data Files Check:
[2026-01-18T08:29:16.663Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115125 bytes)
[2026-01-18T08:29:16.673Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1436916 bytes)
[2026-01-18T08:29:16.673Z] 
========================================
[2026-01-18T08:29:16.673Z] Starting Enhanced Discord Bot...
[2026-01-18T08:29:16.673Z] ========================================
[2026-01-18T08:29:17.205Z] [BOT] ✅ Loaded V2 database: 2652 jobs
[2026-01-18T08:29:18.161Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T08:29:18.161Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T08:29:18.161Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T08:29:18.280Z] [BOT] ✅ Loaded pending queue: 2852 total (2832 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Direct Care Staff - Female Only at Advocates
[2026-01-18T08:29:18.284Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T08:29:18.284Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T08:29:18.284Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T08:29:18.285Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T08:29:18.285Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T08:29:18.290Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-18T08:29:18.290Z] [BOT] 📍 [ROUTING] "Direct Care Staff - Female Only" @ ORG_55023686
[2026-01-18T08:29:18.290Z] [BOT] Category: PRODUCT (matched: "pm")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-18T08:29:18.308Z] [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T08:29:18.449Z] [BOT ERROR] ❌ Error posting job Direct Care Staff - Female Only: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Direct Care Staff - Female Only @ Advocates',
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
  url: 'https://discord.com/api/v10/channels/CH_c616cbe4/threads'
}
[2026-01-18T08:29:18.450Z] [BOT] ❌ Industry post failed: Direct Care Staff - Female Only
⚠️  Channel full error count: 1/5
[2026-01-18T08:29:20.224Z] [BOT] ✅ Created forum post: 🏢 Direct Care Staff - Female Only @ ORG_55023686 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:29:21.725Z] [BOT] 💾 Marked as posted: Direct Care Staff - Female Only @ ORG_55023686 (instance #1)
[2026-01-18T08:29:21.726Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-18T08:29:21.728Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-18T08:29:21.748Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:24.748Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-18T08:29:24.749Z] [BOT] 📍 [ROUTING] "Verizon Sales Consultant" @ ORG_144d4f9a Sales
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:29:24.994Z] [BOT] ✅ Created forum post: 🏢 Verizon Sales Consultant @ ORG_144d4f9a Sales in #💲・sales-jobs
[2026-01-18T08:29:24.994Z] [BOT] ✅ Industry: Verizon Sales Consultant @ ORG_144d4f9a Sales
[2026-01-18T08:29:26.755Z] [BOT] ✅ Created forum post: 🏢 Verizon Sales Consultant @ ORG_144d4f9a Sales in #🗽・new-york
[2026-01-18T08:29:26.755Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T08:29:28.255Z] [BOT] 💾 Marked as posted: Verizon Sales Consultant @ ORG_144d4f9a Sales (instance #1)
[2026-01-18T08:29:28.255Z] [BOT] 💾 BEFORE ARCHIVING: 2654 jobs in database
[2026-01-18T08:29:28.257Z] [BOT] ✅ No jobs to archive (all 2654 jobs within 7-day window)
[2026-01-18T08:29:28.277Z] [BOT] 💾 Saved posted_jobs.json: 2654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:28.277Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-18T08:29:28.277Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:29:28.522Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-18T08:29:30.223Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:29:31.725Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-18T08:29:31.725Z] [BOT] 💾 BEFORE ARCHIVING: 2655 jobs in database
[2026-01-18T08:29:31.728Z] [BOT] ✅ No jobs to archive (all 2655 jobs within 7-day window)
[2026-01-18T08:29:31.746Z] [BOT] 💾 Saved posted_jobs.json: 2655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:31.747Z] [BOT] 📍 [ROUTING] "Sr. Sales Operations and Strategy Analyst" @ samsara
[2026-01-18T08:29:31.747Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:29:32.203Z] [BOT] ✅ Created forum post: 🏢 Sr. Sales Operations and Strategy Analyst @ samsara in #💲・sales-jobs
[2026-01-18T08:29:32.203Z] [BOT] ✅ Industry: Sr. Sales Operations and Strategy Analyst @ samsara
[2026-01-18T08:29:34.238Z] [BOT] ✅ Created forum post: 🏢 Sr. Sales Operations and Strategy Analyst @ samsara in #💻・remote-usa
[2026-01-18T08:29:34.238Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T08:29:35.740Z] [BOT] 💾 Marked as posted: Sr. Sales Operations and Strategy Analyst @ samsara (instance #1)
[2026-01-18T08:29:35.740Z] [BOT] 💾 BEFORE ARCHIVING: 2656 jobs in database
[2026-01-18T08:29:35.742Z] [BOT] ✅ No jobs to archive (all 2656 jobs within 7-day window)
[2026-01-18T08:29:35.757Z] [BOT] 💾 Saved posted_jobs.json: 2656 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:38.758Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T08:29:38.759Z] [BOT] 📍 [ROUTING] "Product Analyst-Gen AI Automation" @ ORG_ca80fdf7 Parcel Service (UPS)
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:29:39.079Z] [BOT] ✅ Created forum post: 🏢 Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) in #💻・tech-jobs
  ✅ Industry: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-18T08:29:40.582Z] [BOT] 💾 Marked as posted: Product Analyst-Gen AI Automation @ ORG_ca80fdf7 Parcel Service (UPS) (instance #1)
[2026-01-18T08:29:40.582Z] [BOT] 💾 BEFORE ARCHIVING: 2657 jobs in database
[2026-01-18T08:29:40.584Z] [BOT] ✅ No jobs to archive (all 2657 jobs within 7-day window)
[2026-01-18T08:29:40.602Z] [BOT] 💾 Saved posted_jobs.json: 2657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:40.603Z] [BOT] 📍 [ROUTING] "Technical Escalations Engineer 3 (Internal Developer Portal) - US-East" @ datadog
[2026-01-18T08:29:40.603Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:29:40.940Z] [BOT] ✅ Created forum post: 🏢 Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog in #💻・tech-jobs
  ✅ Industry: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog
[2026-01-18T08:29:42.650Z] [BOT] ✅ Created forum post: 🏢 Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T08:29:44.152Z] [BOT] 💾 Marked as posted: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog (instance #1)
[2026-01-18T08:29:44.152Z] [BOT] 💾 BEFORE ARCHIVING: 2658 jobs in database
[2026-01-18T08:29:44.154Z] [BOT] ✅ No jobs to archive (all 2658 jobs within 7-day window)
[2026-01-18T08:29:44.171Z] [BOT] 💾 Saved posted_jobs.json: 2658 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:44.171Z] [BOT] 📍 [ROUTING] "Datadog for Startups Engineering Lead" @ datadog
[2026-01-18T08:29:44.172Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:29:44.390Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Engineering Lead @ datadog in #💻・tech-jobs
  ✅ Industry: Datadog for Startups Engineering Lead @ datadog
[2026-01-18T08:29:46.131Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Engineering Lead @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:29:47.631Z] [BOT] 💾 Marked as posted: Datadog for Startups Engineering Lead @ datadog (instance #1)
[2026-01-18T08:29:47.632Z] [BOT] 💾 BEFORE ARCHIVING: 2659 jobs in database
[2026-01-18T08:29:47.633Z] [BOT] ✅ No jobs to archive (all 2659 jobs within 7-day window)
[2026-01-18T08:29:47.648Z] [BOT] 💾 Saved posted_jobs.json: 2659 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:50.648Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T08:29:50.648Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - International" @ ORG_7dcce8d0ine
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T08:29:50.898Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - International @ ORG_7dcce8d0ine in #🩺・healthcare-jobs
  ✅ Industry: Business Systems Analyst - International @ ORG_7dcce8d0ine
[2026-01-18T08:29:52.600Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - International @ ORG_7dcce8d0ine in #🌆・chicago
[2026-01-18T08:29:52.600Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-18T08:29:54.100Z] [BOT] 💾 Marked as posted: Business Systems Analyst - International @ ORG_7dcce8d0ine (instance #1)
[2026-01-18T08:29:54.101Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-18T08:29:54.102Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-18T08:29:54.119Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:29:57.120Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T08:29:57.120Z] [BOT] 📍 [ROUTING] "GM, Surfaces Personalization" @ spotify
[2026-01-18T08:29:57.121Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T08:29:57.421Z] [BOT] ✅ Created forum post: 🏢 GM, Surfaces Personalization @ spotify in #🤖・ai-jobs
[2026-01-18T08:29:57.421Z] [BOT] ✅ Industry: GM, Surfaces Personalization @ spotify
[2026-01-18T08:29:59.124Z] [BOT] ✅ Created forum post: 🏢 GM, Surfaces Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T08:30:00.625Z] [BOT] 💾 Marked as posted: GM, Surfaces Personalization @ spotify (instance #1)
[2026-01-18T08:30:00.626Z] [BOT] 💾 BEFORE ARCHIVING: 2661 jobs in database
[2026-01-18T08:30:00.627Z] [BOT] ✅ No jobs to archive (all 2661 jobs within 7-day window)
[2026-01-18T08:30:00.648Z] [BOT] 💾 Saved posted_jobs.json: 2661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:30:00.648Z] [BOT] 📍 [ROUTING] "Engineering Manager, Cloud Inference Azure" @ anthropic
[2026-01-18T08:30:00.648Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T08:30:00.886Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Inference Azure @ anthropic in #🤖・ai-jobs
[2026-01-18T08:30:00.887Z] [BOT] ✅ Industry: Engineering Manager, Cloud Inference Azure @ anthropic
[2026-01-18T08:30:02.643Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Cloud Inference Azure @ anthropic in #🌉・san-francisco
[2026-01-18T08:30:02.644Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T08:30:04.145Z] [BOT] 💾 Marked as posted: Engineering Manager, Cloud Inference Azure @ anthropic (instance #1)
[2026-01-18T08:30:04.145Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-18T08:30:04.147Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-18T08:30:04.164Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:30:07.164Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-18T08:30:07.165Z] [BOT] ⏭️  Skipping duplicate: JID_86eaa3c7 (posted within 7 days)
[2026-01-18T08:30:07.165Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c5789 (posted within 7 days)
[2026-01-18T08:30:07.166Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
[2026-01-18T08:30:07.166Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️  Skipping duplicate: JID_57ac7656 (posted within 7 days)
[2026-01-18T08:30:07.166Z] [BOT] ⏭️  Skipping duplicate: JID_9ae00242 (posted within 7 days)
⏭️  Skipping duplicate: JID_efbb1d2e (posted within 7 days)
[2026-01-18T08:30:07.167Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-01-18T08:30:07.167Z] [BOT] ⏭️  Skipping duplicate: JID_3a9dc05e (posted within 7 days)
[2026-01-18T08:30:07.280Z] [BOT] ✅ Loaded pending queue: 2852 total (2832 pending, 20 enriched, 0 posted)
[2026-01-18T08:30:07.451Z] [BOT] ✅ Saved pending queue: 2852 total (2832 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-18T08:30:07.451Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-18T08:30:07.511Z] [BOT] 📂 Loaded 4815 existing routing entries
[2026-01-18T08:30:07.581Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4825
[2026-01-18T08:30:07.581Z] [BOT] Timestamp: 2026-01-18T08:30:07.561Z
[2026-01-18T08:30:07.581Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 19
[2026-01-18T08:30:07.581Z] [BOT] Successful: 18
   Failed: 1
   Skipped: 0
[2026-01-18T08:30:07.582Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T08:30:07.582Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 3 posts
[2026-01-18T08:30:07.582Z] [BOT] 2. #💲・sales-jobs: 3 posts
     3. #🗽・new-york: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-18T08:30:07.582Z] [BOT] [STATS] Channel stats saved
[2026-01-18T08:30:09.604Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Direct Care Staff - Female Only: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Direct Care Staff - Female Only
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*