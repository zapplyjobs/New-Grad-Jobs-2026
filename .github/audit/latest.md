# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T16:25:45.903Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T16:25:11.950Z] ========================================
[2026-01-03T16:25:11.952Z] Discord Bot Execution Log
[2026-01-03T16:25:11.952Z] Environment: GitHub Actions
[2026-01-03T16:25:11.952Z] Node Version: v20.19.6
[2026-01-03T16:25:11.952Z] ========================================
[2026-01-03T16:25:11.952Z] Environment Variables Check:
[2026-01-03T16:25:11.952Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T16:25:11.953Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T16:25:11.953Z] 
Multi-Channel Configuration:
[2026-01-03T16:25:11.953Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.953Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.954Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.954Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.954Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T16:25:11.954Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T16:25:11.954Z] 
Data Files Check:
[2026-01-03T16:25:11.955Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163889 bytes)
[2026-01-03T16:25:11.958Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 312478 bytes)
[2026-01-03T16:25:11.958Z] 
========================================
[2026-01-03T16:25:11.958Z] Starting Enhanced Discord Bot...
[2026-01-03T16:25:11.958Z] ========================================
[2026-01-03T16:25:12.462Z] [BOT] ✅ Loaded V2 database: 603 jobs
[2026-01-03T16:25:12.984Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T16:25:12.984Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T16:25:12.985Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T16:25:12.986Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T16:25:13.056Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T16:25:13.152Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T16:25:13.154Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T16:25:13.155Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T16:25:13.155Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T16:25:13.156Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-03T16:25:13.156Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Android Software Engineer, Ad Formats @ reddit: chicago, san francisco, new york
   - iOS Software Engineer, Ad Formats @ reddit: chicago, san francisco, new york
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T16:25:13.158Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T16:25:13.159Z] [BOT] 📍 [ROUTING] "Software Engineer, Web Product" @ anthropic
[2026-01-03T16:25:13.159Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T16:25:13.164Z] [BOT ERROR] (node:2595) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T16:25:13.319Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Product @ anthropic in #💻・tech-jobs
[2026-01-03T16:25:13.320Z] [BOT] ✅ Industry: Software Engineer, Web Product @ anthropic
[2026-01-03T16:25:14.997Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Web Product @ anthropic in #🌉・san-francisco
[2026-01-03T16:25:14.997Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T16:25:16.497Z] [BOT] 💾 Marked as posted: Software Engineer, Web Product @ anthropic (instance #1)
[2026-01-03T16:25:16.498Z] [BOT] 💾 BEFORE ARCHIVING: 604 jobs in database
[2026-01-03T16:25:16.498Z] [BOT] ✅ No jobs to archive (all 604 jobs within 7-day window)
[2026-01-03T16:25:16.507Z] [BOT] 💾 Saved posted_jobs.json: 604 active jobs
[2026-01-03T16:25:16.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:19.507Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-03T16:25:19.509Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Training" @ anthropic
[2026-01-03T16:25:19.509Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:25:19.786Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Reward Models Training @ anthropic
[2026-01-03T16:25:21.445Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Reward Models Training @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:25:22.945Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Training @ anthropic (instance #1)
[2026-01-03T16:25:22.945Z] [BOT] 💾 BEFORE ARCHIVING: 605 jobs in database
[2026-01-03T16:25:22.945Z] [BOT] ✅ No jobs to archive (all 605 jobs within 7-day window)
[2026-01-03T16:25:22.950Z] [BOT] 💾 Saved posted_jobs.json: 605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:22.952Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-03T16:25:22.952Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:25:23.513Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
  ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-03T16:25:25.222Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer, Ad Formats @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T16:25:26.724Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-03T16:25:26.724Z] [BOT] 💾 BEFORE ARCHIVING: 606 jobs in database
[2026-01-03T16:25:26.724Z] [BOT] ✅ No jobs to archive (all 606 jobs within 7-day window)
[2026-01-03T16:25:26.730Z] [BOT] 💾 Saved posted_jobs.json: 606 active jobs
[2026-01-03T16:25:26.730Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:26.730Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-03T16:25:26.730Z] [BOT] 💾 BEFORE ARCHIVING: 607 jobs in database
[2026-01-03T16:25:26.731Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2026-01-03T16:25:26.736Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
[2026-01-03T16:25:26.736Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-03T16:25:26.736Z] [BOT] 💾 BEFORE ARCHIVING: 608 jobs in database
[2026-01-03T16:25:26.736Z] [BOT] ✅ No jobs to archive (all 608 jobs within 7-day window)
[2026-01-03T16:25:26.740Z] [BOT] 💾 Saved posted_jobs.json: 608 active jobs
[2026-01-03T16:25:26.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:26.742Z] [BOT] 📍 [ROUTING] "Director, Global 3rd Party Partnerships" @ reddit
[2026-01-03T16:25:26.742Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T16:25:26.948Z] [BOT] ✅ Created forum post: 🏢 Director, Global 3rd Party Partnerships @ reddit in #🤖・ai-jobs
[2026-01-03T16:25:26.948Z] [BOT] ✅ Industry: Director, Global 3rd Party Partnerships @ reddit
[2026-01-03T16:25:28.754Z] [BOT] ✅ Created forum post: 🏢 Director, Global 3rd Party Partnerships @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T16:25:30.255Z] [BOT] 💾 Marked as posted: Director, Global 3rd Party Partnerships @ reddit (instance #1)
[2026-01-03T16:25:30.255Z] [BOT] 💾 BEFORE ARCHIVING: 609 jobs in database
[2026-01-03T16:25:30.256Z] [BOT] ✅ No jobs to archive (all 609 jobs within 7-day window)
[2026-01-03T16:25:30.261Z] [BOT] 💾 Saved posted_jobs.json: 609 active jobs
[2026-01-03T16:25:30.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:30.261Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, Ad Formats" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-03T16:25:30.261Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T16:25:30.505Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, Ad Formats @ reddit in #🤖・ai-jobs
  ✅ Industry: iOS Software Engineer, Ad Formats @ reddit
[2026-01-03T16:25:32.142Z] [BOT] ✅ Created forum post: 🏢 iOS Software Engineer, Ad Formats @ reddit in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T16:25:33.643Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-03T16:25:33.643Z] [BOT] 💾 BEFORE ARCHIVING: 610 jobs in database
[2026-01-03T16:25:33.644Z] [BOT] ✅ No jobs to archive (all 610 jobs within 7-day window)
[2026-01-03T16:25:33.648Z] [BOT] 💾 Saved posted_jobs.json: 610 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:33.648Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-03T16:25:33.648Z] [BOT] 💾 BEFORE ARCHIVING: 611 jobs in database
[2026-01-03T16:25:33.649Z] [BOT] ✅ No jobs to archive (all 611 jobs within 7-day window)
[2026-01-03T16:25:33.653Z] [BOT] 💾 Saved posted_jobs.json: 611 active jobs
[2026-01-03T16:25:33.654Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:33.654Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
💾 BEFORE ARCHIVING: 612 jobs in database
[2026-01-03T16:25:33.654Z] [BOT] ✅ No jobs to archive (all 612 jobs within 7-day window)
[2026-01-03T16:25:33.659Z] [BOT] 💾 Saved posted_jobs.json: 612 active jobs
[2026-01-03T16:25:33.659Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:36.659Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T16:25:36.660Z] [BOT] 📍 [ROUTING] "Nonprofit Account Executive" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-03T16:25:36.660Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T16:25:36.874Z] [BOT] ✅ Created forum post: 🏢 Nonprofit Account Executive @ anthropic in #💲・sales-jobs
  ✅ Industry: Nonprofit Account Executive @ anthropic
[2026-01-03T16:25:38.604Z] [BOT] ✅ Created forum post: 🏢 Nonprofit Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T16:25:40.105Z] [BOT] 💾 Marked as posted: Nonprofit Account Executive @ anthropic (instance #1)
[2026-01-03T16:25:40.105Z] [BOT] 💾 BEFORE ARCHIVING: 613 jobs in database
[2026-01-03T16:25:40.105Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2026-01-03T16:25:40.111Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T16:25:43.111Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T16:25:43.111Z] [BOT] ⏭️  Skipping duplicate: JID_07a84756 (posted within 7 days)
[2026-01-03T16:25:43.111Z] [BOT] ⏭️  Skipping duplicate: JID_aa3e041f (posted within 7 days)
[2026-01-03T16:25:43.111Z] [BOT] ⏭️  Skipping duplicate: JID_bd579612 (posted within 7 days)
⏭️  Skipping duplicate: JID_301322c4 (posted within 7 days)
[2026-01-03T16:25:43.111Z] [BOT] ⏭️  Skipping duplicate: JID_8ccc27e9 (posted within 7 days)
[2026-01-03T16:25:43.111Z] [BOT] ⏭️  Skipping duplicate: JID_e5471d14 (posted within 7 days)
[2026-01-03T16:25:43.171Z] [BOT] ✅ Loaded pending queue: 686 total (666 pending, 20 enriched, 0 posted)
[2026-01-03T16:25:43.234Z] [BOT] ✅ Saved pending queue: 686 total (666 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-03T16:25:43.235Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T16:25:43.279Z] [BOT] 📂 Loaded 1577 existing routing entries
[2026-01-03T16:25:43.327Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 1583
[2026-01-03T16:25:43.328Z] [BOT] Timestamp: 2026-01-03T16:25:43.320Z
[2026-01-03T16:25:43.328Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T16:25:43.328Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-03T16:25:43.328Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T16:25:43.329Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-03T16:25:43.329Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #🌆・chicago: 2 posts
     4. #💻・tech-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-03T16:25:43.329Z] [BOT] [STATS] Channel stats saved
[2026-01-03T16:25:45.344Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2595) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*