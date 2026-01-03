# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T17:24:31.584Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T17:23:34.607Z] ========================================
[2026-01-03T17:23:34.609Z] Discord Bot Execution Log
[2026-01-03T17:23:34.609Z] Environment: GitHub Actions
[2026-01-03T17:23:34.609Z] Node Version: v20.19.6
[2026-01-03T17:23:34.609Z] ========================================
[2026-01-03T17:23:34.609Z] Environment Variables Check:
[2026-01-03T17:23:34.610Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T17:23:34.610Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T17:23:34.610Z] 
Multi-Channel Configuration:
[2026-01-03T17:23:34.610Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.610Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.611Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.611Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.611Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.611Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T17:23:34.611Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T17:23:34.611Z] 
Data Files Check:
[2026-01-03T17:23:34.612Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150674 bytes)
[2026-01-03T17:23:34.615Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 332296 bytes)
[2026-01-03T17:23:34.615Z] 
========================================
[2026-01-03T17:23:34.615Z] Starting Enhanced Discord Bot...
[2026-01-03T17:23:34.615Z] ========================================
[2026-01-03T17:23:35.128Z] [BOT] ✅ Loaded V2 database: 643 jobs
[2026-01-03T17:23:35.558Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T17:23:35.559Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T17:23:35.559Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T17:23:35.560Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T17:23:35.626Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T17:23:35.716Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T17:23:35.718Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T17:23:35.719Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T17:23:35.719Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T17:23:35.719Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T17:23:35.720Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T17:23:35.725Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T17:23:35.725Z] [BOT] 📍 [ROUTING] "Software Engineer, Languages" @ anthropic
[2026-01-03T17:23:35.725Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:23:35.730Z] [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T17:23:36.001Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Languages @ anthropic in #💻・tech-jobs
[2026-01-03T17:23:36.002Z] [BOT] ✅ Industry: Software Engineer, Languages @ anthropic
[2026-01-03T17:23:37.739Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Languages @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:23:39.240Z] [BOT] 💾 Marked as posted: Software Engineer, Languages @ anthropic (instance #1)
[2026-01-03T17:23:39.240Z] [BOT] 💾 BEFORE ARCHIVING: 644 jobs in database
[2026-01-03T17:23:39.241Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-03T17:23:39.249Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
[2026-01-03T17:23:39.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:23:39.250Z] [BOT] 📍 [ROUTING] "Engineering Manager, Design Accelerator" @ duolingo
[2026-01-03T17:23:39.250Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:23:39.630Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Design Accelerator @ duolingo in #💻・tech-jobs
[2026-01-03T17:23:39.631Z] [BOT] ✅ Industry: Engineering Manager, Design Accelerator @ duolingo
[2026-01-03T17:23:41.639Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Design Accelerator @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T17:23:43.141Z] [BOT] 💾 Marked as posted: Engineering Manager, Design Accelerator @ duolingo (instance #1)
[2026-01-03T17:23:43.141Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2026-01-03T17:23:43.141Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-03T17:23:43.147Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2026-01-03T17:23:43.147Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:23:43.148Z] [BOT] 📍 [ROUTING] "Security Software Engineer, Detection Platform Infrastructure" @ anthropic
[2026-01-03T17:23:43.148Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:23:43.378Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer, Detection Platform Infrastructure @ anthropic in #💻・tech-jobs
  ✅ Industry: Security Software Engineer, Detection Platform Infrastructure @ anthropic
[2026-01-03T17:23:45.068Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer, Detection Platform Infrastructure @ anthropic in #🌉・san-francisco
[2026-01-03T17:23:45.068Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:23:46.569Z] [BOT] 💾 Marked as posted: Security Software Engineer, Detection Platform Infrastructure @ anthropic (instance #1)
[2026-01-03T17:23:46.569Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2026-01-03T17:23:46.570Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-03T17:23:46.576Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2026-01-03T17:23:46.576Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:23:46.577Z] [BOT] 📍 [ROUTING] "Staff Data Platform Engineer" @ vercel
[2026-01-03T17:23:46.577Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:23:47.091Z] [BOT] ✅ Created forum post: 🏢 Staff Data Platform Engineer @ vercel in #💻・tech-jobs
[2026-01-03T17:23:47.091Z] [BOT] ✅ Industry: Staff Data Platform Engineer @ vercel
[2026-01-03T17:23:48.742Z] [BOT] ✅ Created forum post: 🏢 Staff Data Platform Engineer @ vercel in #🌉・san-francisco
[2026-01-03T17:23:48.742Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:23:50.244Z] [BOT] 💾 Marked as posted: Staff Data Platform Engineer @ vercel (instance #1)
[2026-01-03T17:23:50.244Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2026-01-03T17:23:50.245Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-03T17:23:50.250Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-03T17:23:50.250Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:23:53.251Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T17:23:53.251Z] [BOT] 📍 [ROUTING] "Business Systems Analyst " @ anthropic
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-03T17:23:53.436Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst  @ anthropic in #📈・JID_fb739488
[2026-01-03T17:23:53.436Z] [BOT] ✅ Industry: Business Systems Analyst  @ anthropic
[2026-01-03T17:23:55.194Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst  @ anthropic in #🌉・san-francisco
[2026-01-03T17:23:55.195Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:23:56.696Z] [BOT] 💾 Marked as posted: Business Systems Analyst  @ anthropic (instance #1)
[2026-01-03T17:23:56.696Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-03T17:23:56.697Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2026-01-03T17:23:56.703Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
[2026-01-03T17:23:56.703Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:23:59.704Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T17:23:59.705Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
[2026-01-03T17:23:59.705Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:23:59.873Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive, Industries @ anthropic
[2026-01-03T17:24:01.745Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:24:03.246Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Industries @ anthropic (instance #1)
[2026-01-03T17:24:03.247Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2026-01-03T17:24:03.247Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-03T17:24:03.253Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
[2026-01-03T17:24:03.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:24:03.253Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Install Base " @ vercel
[2026-01-03T17:24:03.253Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:24:03.420Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Install Base  @ vercel in #💲・sales-jobs
[2026-01-03T17:24:03.420Z] [BOT] ✅ Industry: Account Executive, Commercial Install Base  @ vercel
[2026-01-03T17:24:05.049Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Install Base  @ vercel in #🌉・san-francisco
[2026-01-03T17:24:05.049Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:24:06.550Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Install Base  @ vercel (instance #1)
[2026-01-03T17:24:06.550Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2026-01-03T17:24:06.551Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-03T17:24:06.557Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
[2026-01-03T17:24:06.557Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:24:09.558Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T17:24:09.558Z] [BOT] 📍 [ROUTING] "Technical Policy Lead, Government & Third-Party Safety Partnerships" @ anthropic
[2026-01-03T17:24:09.559Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T17:24:09.743Z] [BOT] ✅ Created forum post: 🏢 Technical Policy Lead, Government & Third-Party Safety Partnerships @ anthropic in #📁・JID_e938df7b
  ✅ Industry: Technical Policy Lead, Government & Third-Party Safety Partnerships @ anthropic
[2026-01-03T17:24:11.390Z] [BOT] ✅ Created forum post: 🏢 Technical Policy Lead, Government & Third-Party Safety Partnerships @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:24:12.891Z] [BOT] 💾 Marked as posted: Technical Policy Lead, Government & Third-Party Safety Partnerships @ anthropic (instance #1)
[2026-01-03T17:24:12.891Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2026-01-03T17:24:12.892Z] [BOT] ✅ No jobs to archive (all 651 jobs within 7-day window)
[2026-01-03T17:24:12.897Z] [BOT] 💾 Saved posted_jobs.json: 651 active jobs
[2026-01-03T17:24:12.898Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:24:15.898Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-03T17:24:15.898Z] [BOT] 📍 [ROUTING] "Strategic Program Manager" @ figma
[2026-01-03T17:24:15.898Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-03T17:24:16.154Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager @ figma in #📊・JID_9910249a
  ✅ Industry: Strategic Program Manager @ figma
[2026-01-03T17:24:17.843Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:24:19.345Z] [BOT] 💾 Marked as posted: Strategic Program Manager @ figma (instance #1)
[2026-01-03T17:24:19.345Z] [BOT] 💾 BEFORE ARCHIVING: 652 jobs in database
[2026-01-03T17:24:19.346Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2026-01-03T17:24:19.351Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
[2026-01-03T17:24:19.352Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:24:22.352Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T17:24:22.352Z] [BOT] 📍 [ROUTING] "AI Engineer" @ vercel
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T17:24:22.511Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ vercel in #🤖・ai-jobs
  ✅ Industry: AI Engineer @ vercel
[2026-01-03T17:24:24.152Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:24:25.653Z] [BOT] 💾 Marked as posted: AI Engineer @ vercel (instance #1)
[2026-01-03T17:24:25.654Z] [BOT] 💾 BEFORE ARCHIVING: 653 jobs in database
[2026-01-03T17:24:25.654Z] [BOT] ✅ No jobs to archive (all 653 jobs within 7-day window)
[2026-01-03T17:24:25.660Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
[2026-01-03T17:24:25.660Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:24:28.660Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T17:24:28.660Z] [BOT] ⏭️  Skipping duplicate: JID_ffe128ac (posted within 7 days)
[2026-01-03T17:24:28.660Z] [BOT] ⏭️  Skipping duplicate: JID_5921c4f7 (posted within 7 days)
[2026-01-03T17:24:28.660Z] [BOT] ⏭️  Skipping duplicate: JID_e7a0cae8 (posted within 7 days)
[2026-01-03T17:24:28.660Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dd6f9 (posted within 7 days)
[2026-01-03T17:24:28.661Z] [BOT] ⏭️  Skipping duplicate: JID_c93a8f24 (posted within 7 days)
[2026-01-03T17:24:28.661Z] [BOT] ⏭️  Skipping duplicate: JID_8ffa1ccf (posted within 7 days)
⏭️  Skipping duplicate: JID_d535d200 (posted within 7 days)
⏭️  Skipping duplicate: JID_527413fd (posted within 7 days)
[2026-01-03T17:24:28.661Z] [BOT] ⏭️  Skipping duplicate: JID_32dda557 (posted within 7 days)
[2026-01-03T17:24:28.661Z] [BOT] ⏭️  Skipping duplicate: JID_e8051f69 (posted within 7 days)
[2026-01-03T17:24:28.719Z] [BOT] ✅ Loaded pending queue: 646 total (626 pending, 20 enriched, 0 posted)
[2026-01-03T17:24:28.781Z] [BOT] ✅ Saved pending queue: 646 total (626 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T17:24:28.781Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T17:24:28.834Z] [BOT] 📂 Loaded 1610 existing routing entries
[2026-01-03T17:24:28.894Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T17:24:28.895Z] [BOT] Total entries: 1620
   Timestamp: 2026-01-03T17:24:28.886Z
[2026-01-03T17:24:28.895Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T17:24:28.895Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T17:24:28.895Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T17:24:28.895Z] [BOT] Total posts: 20
   Channels used: 8
   Top channels:
[2026-01-03T17:24:28.896Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #💻・tech-jobs: 4 posts
     3. #💲・sales-jobs: 2 posts
     4. #🗽・new-york: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-03T17:24:28.896Z] [BOT] [STATS] Channel stats saved
[2026-01-03T17:24:30.913Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2322) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*