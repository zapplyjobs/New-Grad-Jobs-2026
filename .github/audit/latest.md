# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T04:49:38.178Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T04:48:48.107Z] ========================================
[2026-01-18T04:48:48.109Z] Discord Bot Execution Log
[2026-01-18T04:48:48.109Z] Environment: GitHub Actions
[2026-01-18T04:48:48.109Z] Node Version: v20.19.6
[2026-01-18T04:48:48.109Z] ========================================
[2026-01-18T04:48:48.109Z] Environment Variables Check:
[2026-01-18T04:48:48.110Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T04:48:48.110Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.110Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T04:48:48.110Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T04:48:48.110Z] 
Multi-Channel Configuration:
[2026-01-18T04:48:48.110Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.110Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.110Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.110Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T04:48:48.111Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T04:48:48.111Z] 
Data Files Check:
[2026-01-18T04:48:48.112Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104507 bytes)
[2026-01-18T04:48:48.122Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1383089 bytes)
[2026-01-18T04:48:48.122Z] 
========================================
[2026-01-18T04:48:48.122Z] Starting Enhanced Discord Bot...
[2026-01-18T04:48:48.122Z] ========================================
[2026-01-18T04:48:48.643Z] [BOT] ✅ Loaded V2 database: 2556 jobs
[2026-01-18T04:48:49.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T04:48:49.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T04:48:49.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T04:48:49.123Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Federal Support Engineer 3 - Denver at datadog
[2026-01-18T04:48:49.127Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T04:48:49.127Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T04:48:49.127Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T04:48:49.128Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T04:48:49.128Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T04:48:49.133Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T04:48:49.134Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 3 - Denver" @ datadog
[2026-01-18T04:48:49.134Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:48:49.138Z] [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T04:48:49.222Z] [BOT ERROR] ❌ Error posting job Federal Support Engineer 3 - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Federal Support Engineer 3 - Denver @ datadog',
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
[2026-01-18T04:48:49.222Z] [BOT] ❌ Industry post failed: Federal Support Engineer 3 - Denver
⚠️  Channel full error count: 1/5
[2026-01-18T04:48:50.725Z] [BOT] 📍 [ROUTING] "Audio Visual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2026-01-18T04:48:50.725Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:48:50.981Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2026-01-18T04:48:50.981Z] [BOT] ✅ Industry: Audio Visual Programmer @ ORG_b344d80e Boeing Company
[2026-01-18T04:48:52.621Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2026-01-18T04:48:52.621Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T04:48:54.123Z] [BOT] 💾 Marked as posted: Audio Visual Programmer @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-18T04:48:54.123Z] [BOT] 💾 BEFORE ARCHIVING: 2557 jobs in database
[2026-01-18T04:48:54.125Z] [BOT] ✅ No jobs to archive (all 2557 jobs within 7-day window)
[2026-01-18T04:48:54.148Z] [BOT] 💾 Saved posted_jobs.json: 2557 active jobs
[2026-01-18T04:48:54.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:48:54.148Z] [BOT] 📍 [ROUTING] "Audiovisual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T04:48:54.335Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audiovisual Programmer @ ORG_b344d80e Boeing Company
[2026-01-18T04:48:56.077Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T04:48:57.578Z] [BOT] 💾 Marked as posted: Audiovisual Programmer @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-18T04:48:57.578Z] [BOT] 💾 BEFORE ARCHIVING: 2558 jobs in database
[2026-01-18T04:48:57.580Z] [BOT] ✅ No jobs to archive (all 2558 jobs within 7-day window)
[2026-01-18T04:48:57.598Z] [BOT] 💾 Saved posted_jobs.json: 2558 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:00.598Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T04:49:00.599Z] [BOT] 📍 [ROUTING] "Software Engineer, Web Platform" @ figma
[2026-01-18T04:49:00.599Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:49:00.745Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Platform @ figma in #🤖・ai-jobs
[2026-01-18T04:49:00.745Z] [BOT] ✅ Industry: Software Engineer, Web Platform @ figma
[2026-01-18T04:49:02.453Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Platform @ figma in #🌉・san-francisco
[2026-01-18T04:49:02.453Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T04:49:03.955Z] [BOT] 💾 Marked as posted: Software Engineer, Web Platform @ figma (instance #1)
[2026-01-18T04:49:03.955Z] [BOT] 💾 BEFORE ARCHIVING: 2559 jobs in database
[2026-01-18T04:49:03.957Z] [BOT] ✅ No jobs to archive (all 2559 jobs within 7-day window)
[2026-01-18T04:49:03.975Z] [BOT] 💾 Saved posted_jobs.json: 2559 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:03.975Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Storage" @ reddit
   Category: AI (matched: "machine learning")
[2026-01-18T04:49:03.975Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T04:49:04.171Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Storage @ reddit in #🤖・ai-jobs
  ✅ Industry: Staff Software Engineer, Storage @ reddit
[2026-01-18T04:49:05.948Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Storage @ reddit in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T04:49:07.450Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Storage @ reddit (instance #1)
[2026-01-18T04:49:07.450Z] [BOT] 💾 BEFORE ARCHIVING: 2560 jobs in database
[2026-01-18T04:49:07.452Z] [BOT] ✅ No jobs to archive (all 2560 jobs within 7-day window)
[2026-01-18T04:49:07.470Z] [BOT] 💾 Saved posted_jobs.json: 2560 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:10.471Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-18T04:49:10.471Z] [BOT] 📍 [ROUTING] "Recruiter, Technical" @ anthropic
[2026-01-18T04:49:10.471Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T04:49:10.884Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Technical @ anthropic in #📁・JID_e938df7b
  ✅ Industry: Recruiter, Technical @ anthropic
[2026-01-18T04:49:12.532Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Technical @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T04:49:14.034Z] [BOT] 💾 Marked as posted: Recruiter, Technical @ anthropic (instance #1)
[2026-01-18T04:49:14.034Z] [BOT] 💾 BEFORE ARCHIVING: 2561 jobs in database
[2026-01-18T04:49:14.036Z] [BOT] ✅ No jobs to archive (all 2561 jobs within 7-day window)
[2026-01-18T04:49:14.051Z] [BOT] 💾 Saved posted_jobs.json: 2561 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:14.051Z] [BOT] 📍 [ROUTING] "Visual Charting Specialist" @ ORG_d51736fa
   Category: HR (matched: "compensation")
[2026-01-18T04:49:14.051Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-18T04:49:14.298Z] [BOT] ✅ Created forum post: 🏢 Visual Charting Specialist @ ORG_d51736fa in #📁・JID_e938df7b
  ✅ Industry: Visual Charting Specialist @ ORG_d51736fa
[2026-01-18T04:49:15.983Z] [BOT] ✅ Created forum post: 🏢 Visual Charting Specialist @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T04:49:17.484Z] [BOT] 💾 Marked as posted: Visual Charting Specialist @ ORG_d51736fa (instance #1)
[2026-01-18T04:49:17.485Z] [BOT] 💾 BEFORE ARCHIVING: 2562 jobs in database
[2026-01-18T04:49:17.486Z] [BOT] ✅ No jobs to archive (all 2562 jobs within 7-day window)
[2026-01-18T04:49:17.504Z] [BOT] 💾 Saved posted_jobs.json: 2562 active jobs
[2026-01-18T04:49:17.504Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:20.505Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T04:49:20.506Z] [BOT] 📍 [ROUTING] "Site Manufacturing Data Engineer" @ ORG_58b7c913 & Gamble (P&G)
[2026-01-18T04:49:20.506Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T04:49:20.715Z] [BOT] ✅ Created forum post: 🏢 Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G) in #📈・JID_fb739488
[2026-01-18T04:49:20.715Z] [BOT] ✅ Industry: Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G)
[2026-01-18T04:49:22.348Z] [BOT] ✅ Created forum post: 🏢 Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T04:49:23.849Z] [BOT] 💾 Marked as posted: Site Manufacturing Data Engineer @ ORG_58b7c913 & Gamble (P&G) (instance #1)
[2026-01-18T04:49:23.849Z] [BOT] 💾 BEFORE ARCHIVING: 2563 jobs in database
[2026-01-18T04:49:23.851Z] [BOT] ✅ No jobs to archive (all 2563 jobs within 7-day window)
[2026-01-18T04:49:23.867Z] [BOT] 💾 Saved posted_jobs.json: 2563 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:23.867Z] [BOT] 📍 [ROUTING] "Web Content Strategist" @ figma
[2026-01-18T04:49:23.867Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T04:49:23.868Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-18T04:49:24.032Z] [BOT] ✅ Created forum post: 🏢 Web Content Strategist @ figma in #📈・JID_fb739488
[2026-01-18T04:49:24.032Z] [BOT] ✅ Industry: Web Content Strategist @ figma
[2026-01-18T04:49:25.867Z] [BOT] ✅ Created forum post: 🏢 Web Content Strategist @ figma in #🌉・san-francisco
[2026-01-18T04:49:25.867Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T04:49:27.368Z] [BOT] 💾 Marked as posted: Web Content Strategist @ figma (instance #1)
[2026-01-18T04:49:27.368Z] [BOT] 💾 BEFORE ARCHIVING: 2564 jobs in database
[2026-01-18T04:49:27.370Z] [BOT] ✅ No jobs to archive (all 2564 jobs within 7-day window)
[2026-01-18T04:49:27.385Z] [BOT] 💾 Saved posted_jobs.json: 2564 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:30.385Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-18T04:49:30.386Z] [BOT] 📍 [ROUTING] "Healthcare Analyst" @ ORG_47633304
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T04:49:30.540Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_47633304 in #🩺・healthcare-jobs
  ✅ Industry: Healthcare Analyst @ ORG_47633304
[2026-01-18T04:49:32.042Z] [BOT] 💾 Marked as posted: Healthcare Analyst @ ORG_47633304 (instance #1)
[2026-01-18T04:49:32.042Z] [BOT] 💾 BEFORE ARCHIVING: 2565 jobs in database
[2026-01-18T04:49:32.044Z] [BOT] ✅ No jobs to archive (all 2565 jobs within 7-day window)
[2026-01-18T04:49:32.061Z] [BOT] 💾 Saved posted_jobs.json: 2565 active jobs
[2026-01-18T04:49:32.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T04:49:35.061Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2026-01-18T04:49:35.061Z] [BOT] ⏭️  Skipping duplicate: JID_0b3e33cd (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_b44da150 (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_836a54e3-engineer_r000142913-1 (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8734 (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
[2026-01-18T04:49:35.062Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
[2026-01-18T04:49:35.063Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_98b6d09f-programmer_jr2025482477-1 (posted within 7 days)
[2026-01-18T04:49:35.063Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_d51c96be-programmer_jr2025487536-1 (posted within 7 days)
[2026-01-18T04:49:35.180Z] [BOT] ✅ Loaded pending queue: 2865 total (2845 pending, 20 enriched, 0 posted)
[2026-01-18T04:49:35.343Z] [BOT] ✅ Saved pending queue: 2865 total (2845 pending, 11 enriched, 9 posted)
[2026-01-18T04:49:35.344Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-18T04:49:35.402Z] [BOT] 📂 Loaded 4725 existing routing entries
[2026-01-18T04:49:35.474Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4735
   Timestamp: 2026-01-18T04:49:35.452Z
[2026-01-18T04:49:35.474Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T04:49:35.474Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 1
   Skipped: 0
[2026-01-18T04:49:35.475Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 4 posts
     2. #🌉・san-francisco: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📁・JID_e938df7b: 2 posts
[2026-01-18T04:49:35.475Z] [BOT] [STATS] Channel stats saved
[2026-01-18T04:49:37.498Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Federal Support Engineer 3 - Denver: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Federal Support Engineer 3 - Denver
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*