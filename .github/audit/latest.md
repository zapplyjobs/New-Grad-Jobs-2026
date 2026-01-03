# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T17:37:24.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T17:36:40.762Z] ========================================
[2026-01-03T17:36:40.764Z] Discord Bot Execution Log
[2026-01-03T17:36:40.764Z] Environment: GitHub Actions
[2026-01-03T17:36:40.764Z] Node Version: v20.19.6
[2026-01-03T17:36:40.764Z] ========================================
[2026-01-03T17:36:40.764Z] Environment Variables Check:
[2026-01-03T17:36:40.764Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T17:36:40.764Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.764Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T17:36:40.764Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T17:36:40.765Z] 
Multi-Channel Configuration:
[2026-01-03T17:36:40.765Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T17:36:40.765Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T17:36:40.765Z] 
Data Files Check:
[2026-01-03T17:36:40.767Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153811 bytes)
[2026-01-03T17:36:40.769Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 337261 bytes)
[2026-01-03T17:36:40.769Z] 
========================================
[2026-01-03T17:36:40.770Z] Starting Enhanced Discord Bot...
[2026-01-03T17:36:40.770Z] ========================================
[2026-01-03T17:36:41.294Z] [BOT] ✅ Loaded V2 database: 653 jobs
[2026-01-03T17:36:41.792Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T17:36:41.792Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T17:36:41.792Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T17:36:41.793Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T17:36:41.862Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T17:36:41.953Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T17:36:41.955Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T17:36:41.956Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T17:36:41.956Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T17:36:41.956Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T17:36:41.957Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Staff Economist @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2026-01-03T17:36:41.957Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T17:36:41.962Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-03T17:36:41.963Z] [BOT] 📍 [ROUTING] "Group Product Marketing Manager, Developer Commerce Solutions" @ discord
[2026-01-03T17:36:41.963Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T17:36:41.967Z] [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T17:36:42.233Z] [BOT] ✅ Created forum post: 🏢 Group Product Marketing Manager, Developer Commerce Solutions @ discord in #💻・tech-jobs
[2026-01-03T17:36:42.233Z] [BOT] ✅ Industry: Group Product Marketing Manager, Developer Commerce Solutions @ discord
[2026-01-03T17:36:43.926Z] [BOT] ✅ Created forum post: 🏢 Group Product Marketing Manager, Developer Commerce Solutions @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T17:36:45.428Z] [BOT] 💾 Marked as posted: Group Product Marketing Manager, Developer Commerce Solutions @ discord (instance #1)
[2026-01-03T17:36:45.428Z] [BOT] 💾 BEFORE ARCHIVING: 654 jobs in database
[2026-01-03T17:36:45.429Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2026-01-03T17:36:45.437Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
[2026-01-03T17:36:45.437Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:36:45.438Z] [BOT] 📍 [ROUTING] "Manager, Customer Support Engineering" @ vercel
[2026-01-03T17:36:45.439Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:36:45.619Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Support Engineering @ vercel in #💻・tech-jobs
[2026-01-03T17:36:45.619Z] [BOT] ✅ Industry: Manager, Customer Support Engineering @ vercel
[2026-01-03T17:36:47.344Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Support Engineering @ vercel in #🌉・san-francisco
[2026-01-03T17:36:47.344Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:36:48.845Z] [BOT] 💾 Marked as posted: Manager, Customer Support Engineering @ vercel (instance #1)
[2026-01-03T17:36:48.845Z] [BOT] 💾 BEFORE ARCHIVING: 655 jobs in database
[2026-01-03T17:36:48.846Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2026-01-03T17:36:48.850Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:36:48.851Z] [BOT] 📍 [ROUTING] "Social Content Creator, Intern" @ duolingo
[2026-01-03T17:36:48.851Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:36:49.080Z] [BOT] ✅ Created forum post: 🏢 Social Content Creator, Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Social Content Creator, Intern @ duolingo
[2026-01-03T17:36:50.732Z] [BOT] ✅ Created forum post: 🏢 Social Content Creator, Intern @ duolingo in #🗽・new-york
[2026-01-03T17:36:50.733Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T17:36:52.233Z] [BOT] 💾 Marked as posted: Social Content Creator, Intern @ duolingo (instance #1)
[2026-01-03T17:36:52.233Z] [BOT] 💾 BEFORE ARCHIVING: 656 jobs in database
[2026-01-03T17:36:52.234Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2026-01-03T17:36:52.240Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
[2026-01-03T17:36:52.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:36:52.241Z] [BOT] 📍 [ROUTING] "Senior Security Software Engineer, Detection and Response" @ discord
[2026-01-03T17:36:52.241Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:36:52.387Z] [BOT] ✅ Created forum post: 🏢 Senior Security Software Engineer, Detection and Response @ discord in #💻・tech-jobs
[2026-01-03T17:36:52.388Z] [BOT] ✅ Industry: Senior Security Software Engineer, Detection and Response @ discord
[2026-01-03T17:36:54.011Z] [BOT] ✅ Created forum post: 🏢 Senior Security Software Engineer, Detection and Response @ discord in #🌉・san-francisco
[2026-01-03T17:36:54.012Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:36:55.513Z] [BOT] 💾 Marked as posted: Senior Security Software Engineer, Detection and Response @ discord (instance #1)
[2026-01-03T17:36:55.513Z] [BOT] 💾 BEFORE ARCHIVING: 657 jobs in database
[2026-01-03T17:36:55.514Z] [BOT] ✅ No jobs to archive (all 657 jobs within 7-day window)
[2026-01-03T17:36:55.520Z] [BOT] 💾 Saved posted_jobs.json: 657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:36:55.520Z] [BOT] 📍 [ROUTING] "Data Center Leasing and Transaction Manager" @ anthropic
   Category: TECH (matched: "data")
[2026-01-03T17:36:55.520Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T17:36:55.833Z] [BOT] ✅ Created forum post: 🏢 Data Center Leasing and Transaction Manager @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Center Leasing and Transaction Manager @ anthropic
[2026-01-03T17:36:57.497Z] [BOT] ✅ Created forum post: 🏢 Data Center Leasing and Transaction Manager @ anthropic in #🌉・san-francisco
[2026-01-03T17:36:57.497Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:36:58.998Z] [BOT] 💾 Marked as posted: Data Center Leasing and Transaction Manager @ anthropic (instance #1)
[2026-01-03T17:36:58.999Z] [BOT] 💾 BEFORE ARCHIVING: 658 jobs in database
[2026-01-03T17:36:58.999Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2026-01-03T17:36:59.004Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
[2026-01-03T17:36:59.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:02.005Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T17:37:02.005Z] [BOT] 📍 [ROUTING] "Manager, Figma for Education " @ figma
[2026-01-03T17:37:02.005Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:37:02.305Z] [BOT] ✅ Created forum post: 🏢 Manager, Figma for Education  @ figma in #💲・sales-jobs
[2026-01-03T17:37:02.306Z] [BOT] ✅ Industry: Manager, Figma for Education  @ figma
[2026-01-03T17:37:04.035Z] [BOT] ✅ Created forum post: 🏢 Manager, Figma for Education  @ figma in #🌉・san-francisco
[2026-01-03T17:37:04.036Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:37:05.537Z] [BOT] 💾 Marked as posted: Manager, Figma for Education  @ figma (instance #1)
[2026-01-03T17:37:05.537Z] [BOT] 💾 BEFORE ARCHIVING: 659 jobs in database
[2026-01-03T17:37:05.538Z] [BOT] ✅ No jobs to archive (all 659 jobs within 7-day window)
[2026-01-03T17:37:05.543Z] [BOT] 💾 Saved posted_jobs.json: 659 active jobs
[2026-01-03T17:37:05.543Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:05.543Z] [BOT] 📍 [ROUTING] "Staff Economist" @ brex
[2026-01-03T17:37:05.544Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:37:05.772Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #💲・sales-jobs
  ✅ Industry: Staff Economist @ brex
[2026-01-03T17:37:07.438Z] [BOT] ✅ Created forum post: 🏢 Staff Economist @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T17:37:08.939Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-03T17:37:08.939Z] [BOT] 💾 BEFORE ARCHIVING: 660 jobs in database
[2026-01-03T17:37:08.940Z] [BOT] ✅ No jobs to archive (all 660 jobs within 7-day window)
[2026-01-03T17:37:08.946Z] [BOT] 💾 Saved posted_jobs.json: 660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:08.946Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-03T17:37:08.946Z] [BOT] 💾 BEFORE ARCHIVING: 661 jobs in database
[2026-01-03T17:37:08.947Z] [BOT] ✅ No jobs to archive (all 661 jobs within 7-day window)
[2026-01-03T17:37:08.951Z] [BOT] 💾 Saved posted_jobs.json: 661 active jobs
[2026-01-03T17:37:08.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:08.952Z] [BOT] 📍 [ROUTING] "Head of Insurance, GTM Sales" @ anthropic
[2026-01-03T17:37:08.952Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T17:37:09.347Z] [BOT] ✅ Created forum post: 🏢 Head of Insurance, GTM Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Insurance, GTM Sales @ anthropic
[2026-01-03T17:37:11.011Z] [BOT] ✅ Created forum post: 🏢 Head of Insurance, GTM Sales @ anthropic in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T17:37:12.512Z] [BOT] 💾 Marked as posted: Head of Insurance, GTM Sales @ anthropic (instance #1)
[2026-01-03T17:37:12.512Z] [BOT] 💾 BEFORE ARCHIVING: 662 jobs in database
[2026-01-03T17:37:12.513Z] [BOT] ✅ No jobs to archive (all 662 jobs within 7-day window)
[2026-01-03T17:37:12.518Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
[2026-01-03T17:37:12.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:15.519Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T17:37:15.519Z] [BOT] 📍 [ROUTING] "Research Scientist, Life Sciences" @ anthropic
[2026-01-03T17:37:15.519Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T17:37:15.716Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Life Sciences @ anthropic in #🤖・ai-jobs
[2026-01-03T17:37:15.716Z] [BOT] ✅ Industry: Research Scientist, Life Sciences @ anthropic
[2026-01-03T17:37:17.397Z] [BOT] ✅ Created forum post: 🏢 Research Scientist, Life Sciences @ anthropic in #🌉・san-francisco
[2026-01-03T17:37:17.397Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T17:37:18.898Z] [BOT] 💾 Marked as posted: Research Scientist, Life Sciences @ anthropic (instance #1)
[2026-01-03T17:37:18.898Z] [BOT] 💾 BEFORE ARCHIVING: 663 jobs in database
[2026-01-03T17:37:18.899Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2026-01-03T17:37:18.904Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
[2026-01-03T17:37:18.904Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T17:37:21.904Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T17:37:21.904Z] [BOT] ⏭️  Skipping duplicate: JID_42aa0817 (posted within 7 days)
[2026-01-03T17:37:21.904Z] [BOT] ⏭️  Skipping duplicate: JID_3ad8d869 (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_9d30b256 (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_92e4bda1 (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_8a8316ad (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_f3f7bbd7 (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_04016603 (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_120669dc (posted within 7 days)
[2026-01-03T17:37:21.905Z] [BOT] ⏭️  Skipping duplicate: JID_5d08b64b (posted within 7 days)
[2026-01-03T17:37:21.961Z] [BOT] ✅ Loaded pending queue: 636 total (616 pending, 20 enriched, 0 posted)
[2026-01-03T17:37:22.020Z] [BOT] ✅ Saved pending queue: 636 total (616 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-03T17:37:22.021Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T17:37:22.065Z] [BOT] 📂 Loaded 1620 existing routing entries
[2026-01-03T17:37:22.114Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-03T17:37:22.114Z] [BOT] Total entries: 1629
   Timestamp: 2026-01-03T17:37:22.106Z
[2026-01-03T17:37:22.115Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T17:37:22.115Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T17:37:22.115Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T17:37:22.115Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 6 posts
[2026-01-03T17:37:22.115Z] [BOT] 2. #💻・tech-jobs: 5 posts
     3. #🗽・new-york: 3 posts
     4. #💲・sales-jobs: 3 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-03T17:37:22.115Z] [BOT] [STATS] Channel stats saved
[2026-01-03T17:37:24.131Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*