# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T05:02:29.495Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T05:02:05.864Z] ========================================
[2026-01-13T05:02:05.866Z] Discord Bot Execution Log
[2026-01-13T05:02:05.866Z] Environment: GitHub Actions
[2026-01-13T05:02:05.866Z] Node Version: v20.19.6
[2026-01-13T05:02:05.866Z] ========================================
[2026-01-13T05:02:05.866Z] Environment Variables Check:
[2026-01-13T05:02:05.866Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T05:02:05.866Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.866Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T05:02:05.867Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T05:02:05.867Z] 
Multi-Channel Configuration:
[2026-01-13T05:02:05.867Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T05:02:05.867Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T05:02:05.867Z] 
Data Files Check:
[2026-01-13T05:02:05.869Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190237 bytes)
[2026-01-13T05:02:05.872Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 377764 bytes)
[2026-01-13T05:02:05.872Z] 
========================================
[2026-01-13T05:02:05.872Z] Starting Enhanced Discord Bot...
[2026-01-13T05:02:05.872Z] ========================================
[2026-01-13T05:02:06.417Z] [BOT] ✅ Loaded V2 database: 718 jobs
[2026-01-13T05:02:07.306Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T05:02:07.307Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T05:02:07.307Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T05:02:07.414Z] [BOT] ✅ Loaded pending queue: 2703 total (2683 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Select Major Account Executive EST/CST - Hartford, CT at samsara
[2026-01-13T05:02:07.418Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T05:02:07.419Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T05:02:07.419Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T05:02:07.420Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-13T05:02:07.420Z] [BOT] (16 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Select Major Account Executive EST/CST - Hartford, CT @ samsara: hartford, houston, texas, jacksonville, miami, nashville, orlando, philadelphia, providence, raleigh, richmond, san antonio, tallahassee, tampa, washington, d.c.
   - Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara: los angeles, san diego
   - Senior Hardware Systems Engineer @ samsara: san francisco, ca, united states, san francisco - sf9
⏸️ Limiting to 10 jobs this run, 16 deferred for next run
📤 Posting 4 jobs...
[2026-01-13T05:02:07.421Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T05:02:07.425Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T05:02:07.426Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Hartford, CT" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:02:07.431Z] [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T05:02:07.907Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST - Hartford, CT @ samsara in #💲・sales-jobs
[2026-01-13T05:02:07.907Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Hartford, CT @ samsara
[2026-01-13T05:02:09.409Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Hartford, CT @ samsara (instance #1)
[2026-01-13T05:02:09.410Z] [BOT] 💾 BEFORE ARCHIVING: 719 jobs in database
[2026-01-13T05:02:09.410Z] [BOT] ✅ No jobs to archive (all 719 jobs within 7-day window)
[2026-01-13T05:02:09.420Z] [BOT] 💾 Saved posted_jobs.json: 719 active jobs
[2026-01-13T05:02:09.420Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.421Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Houston, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 720 jobs in database
[2026-01-13T05:02:09.421Z] [BOT] ✅ No jobs to archive (all 720 jobs within 7-day window)
[2026-01-13T05:02:09.427Z] [BOT] 💾 Saved posted_jobs.json: 720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.428Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 721 jobs in database
[2026-01-13T05:02:09.428Z] [BOT] ✅ No jobs to archive (all 721 jobs within 7-day window)
[2026-01-13T05:02:09.433Z] [BOT] 💾 Saved posted_jobs.json: 721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.433Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 722 jobs in database
[2026-01-13T05:02:09.434Z] [BOT] ✅ No jobs to archive (all 722 jobs within 7-day window)
[2026-01-13T05:02:09.438Z] [BOT] 💾 Saved posted_jobs.json: 722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.438Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
[2026-01-13T05:02:09.439Z] [BOT] 💾 BEFORE ARCHIVING: 723 jobs in database
[2026-01-13T05:02:09.439Z] [BOT] ✅ No jobs to archive (all 723 jobs within 7-day window)
[2026-01-13T05:02:09.443Z] [BOT] 💾 Saved posted_jobs.json: 723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.444Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Nashville, TN @ samsara (instance #1)
💾 BEFORE ARCHIVING: 724 jobs in database
[2026-01-13T05:02:09.444Z] [BOT] ✅ No jobs to archive (all 724 jobs within 7-day window)
[2026-01-13T05:02:09.448Z] [BOT] 💾 Saved posted_jobs.json: 724 active jobs
[2026-01-13T05:02:09.449Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Orlando, FL @ samsara (instance #1)
[2026-01-13T05:02:09.449Z] [BOT] 💾 BEFORE ARCHIVING: 725 jobs in database
[2026-01-13T05:02:09.449Z] [BOT] ✅ No jobs to archive (all 725 jobs within 7-day window)
[2026-01-13T05:02:09.454Z] [BOT] 💾 Saved posted_jobs.json: 725 active jobs
[2026-01-13T05:02:09.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.454Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 726 jobs in database
[2026-01-13T05:02:09.455Z] [BOT] ✅ No jobs to archive (all 726 jobs within 7-day window)
[2026-01-13T05:02:09.459Z] [BOT] 💾 Saved posted_jobs.json: 726 active jobs
[2026-01-13T05:02:09.459Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Providence, RI @ samsara (instance #1)
[2026-01-13T05:02:09.459Z] [BOT] 💾 BEFORE ARCHIVING: 727 jobs in database
[2026-01-13T05:02:09.460Z] [BOT] ✅ No jobs to archive (all 727 jobs within 7-day window)
[2026-01-13T05:02:09.464Z] [BOT] 💾 Saved posted_jobs.json: 727 active jobs
[2026-01-13T05:02:09.464Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.464Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Raleigh, NC @ samsara (instance #1)
[2026-01-13T05:02:09.465Z] [BOT] 💾 BEFORE ARCHIVING: 728 jobs in database
[2026-01-13T05:02:09.465Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2026-01-13T05:02:09.471Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
[2026-01-13T05:02:09.471Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Richmond, VA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 729 jobs in database
[2026-01-13T05:02:09.471Z] [BOT] ✅ No jobs to archive (all 729 jobs within 7-day window)
[2026-01-13T05:02:09.478Z] [BOT] 💾 Saved posted_jobs.json: 729 active jobs
[2026-01-13T05:02:09.478Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - San Antonio, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 730 jobs in database
[2026-01-13T05:02:09.478Z] [BOT] ✅ No jobs to archive (all 730 jobs within 7-day window)
[2026-01-13T05:02:09.485Z] [BOT] 💾 Saved posted_jobs.json: 730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.485Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara (instance #1)
[2026-01-13T05:02:09.485Z] [BOT] 💾 BEFORE ARCHIVING: 731 jobs in database
[2026-01-13T05:02:09.486Z] [BOT] ✅ No jobs to archive (all 731 jobs within 7-day window)
[2026-01-13T05:02:09.490Z] [BOT] 💾 Saved posted_jobs.json: 731 active jobs
[2026-01-13T05:02:09.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.491Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tampa, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 732 jobs in database
[2026-01-13T05:02:09.491Z] [BOT] ✅ No jobs to archive (all 732 jobs within 7-day window)
[2026-01-13T05:02:09.496Z] [BOT] 💾 Saved posted_jobs.json: 732 active jobs
[2026-01-13T05:02:09.496Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Washington, DC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 733 jobs in database
[2026-01-13T05:02:09.497Z] [BOT] ✅ No jobs to archive (all 733 jobs within 7-day window)
[2026-01-13T05:02:09.502Z] [BOT] 💾 Saved posted_jobs.json: 733 active jobs
[2026-01-13T05:02:09.502Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:09.502Z] [BOT] 📍 [ROUTING] "Select Major Account Executive (MST/PST) - Los Angeles, CA" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T05:02:09.502Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:02:09.728Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara in #💲・sales-jobs
  ✅ Industry: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara
[2026-01-13T05:02:11.397Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara in #🦢・los-angeles
[2026-01-13T05:02:11.397Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T05:02:12.898Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara (instance #1)
[2026-01-13T05:02:12.899Z] [BOT] 💾 BEFORE ARCHIVING: 734 jobs in database
[2026-01-13T05:02:12.899Z] [BOT] ✅ No jobs to archive (all 734 jobs within 7-day window)
[2026-01-13T05:02:12.905Z] [BOT] 💾 Saved posted_jobs.json: 734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:12.905Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - San Diego, CA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 735 jobs in database
[2026-01-13T05:02:12.905Z] [BOT] ✅ No jobs to archive (all 735 jobs within 7-day window)
[2026-01-13T05:02:12.910Z] [BOT] 💾 Saved posted_jobs.json: 735 active jobs
[2026-01-13T05:02:12.910Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:15.911Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-13T05:02:15.913Z] [BOT] 📍 [ROUTING] "Senior Hardware Systems Engineer" @ samsara
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:02:16.157Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Systems Engineer @ samsara in #💻・tech-jobs
[2026-01-13T05:02:16.157Z] [BOT] ✅ Industry: Senior Hardware Systems Engineer @ samsara
[2026-01-13T05:02:17.897Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Systems Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:02:19.398Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
[2026-01-13T05:02:19.398Z] [BOT] 💾 BEFORE ARCHIVING: 736 jobs in database
[2026-01-13T05:02:19.399Z] [BOT] ✅ No jobs to archive (all 736 jobs within 7-day window)
[2026-01-13T05:02:19.405Z] [BOT] 💾 Saved posted_jobs.json: 736 active jobs
[2026-01-13T05:02:19.405Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:19.405Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
💾 BEFORE ARCHIVING: 737 jobs in database
[2026-01-13T05:02:19.406Z] [BOT] ✅ No jobs to archive (all 737 jobs within 7-day window)
[2026-01-13T05:02:19.411Z] [BOT] 💾 Saved posted_jobs.json: 737 active jobs
[2026-01-13T05:02:19.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:19.413Z] [BOT] 📍 [ROUTING] "Senior IT Network Engineer" @ samsara
[2026-01-13T05:02:19.413Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:02:19.649Z] [BOT] ✅ Created forum post: 🏢 Senior IT Network Engineer @ samsara in #💻・tech-jobs
  ✅ Industry: Senior IT Network Engineer @ samsara
[2026-01-13T05:02:21.468Z] [BOT] ✅ Created forum post: 🏢 Senior IT Network Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:02:22.968Z] [BOT] 💾 Marked as posted: Senior IT Network Engineer @ samsara (instance #1)
[2026-01-13T05:02:22.968Z] [BOT] 💾 BEFORE ARCHIVING: 738 jobs in database
[2026-01-13T05:02:22.969Z] [BOT] ✅ No jobs to archive (all 738 jobs within 7-day window)
[2026-01-13T05:02:22.975Z] [BOT] 💾 Saved posted_jobs.json: 738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:02:25.976Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-13T05:02:25.977Z] [BOT] ⏭️  Skipping duplicate: JID_1c77b7cd (posted within 7 days)
[2026-01-13T05:02:25.977Z] [BOT] ⏭️  Skipping duplicate: JID_234d1170 (posted within 7 days)
⏭️  Skipping duplicate: JID_a7ff708b (posted within 7 days)
[2026-01-13T05:02:25.977Z] [BOT] ⏭️  Skipping duplicate: JID_de31ab0e (posted within 7 days)
[2026-01-13T05:02:26.098Z] [BOT] ✅ Loaded pending queue: 2703 total (2683 pending, 20 enriched, 0 posted)
[2026-01-13T05:02:26.275Z] [BOT] ✅ Saved pending queue: 2703 total (2683 pending, 16 enriched, 4 posted)
[2026-01-13T05:02:26.275Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T05:02:26.328Z] [BOT] 📂 Loaded 2881 existing routing entries
[2026-01-13T05:02:26.385Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-13T05:02:26.385Z] [BOT] Total entries: 2885
   Timestamp: 2026-01-13T05:02:26.372Z
[2026-01-13T05:02:26.385Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T05:02:26.386Z] [BOT] Total attempts: 7
   Successful: 7
   Failed: 0
   Skipped: 0
[2026-01-13T05:02:26.386Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
[2026-01-13T05:02:26.386Z] [BOT] Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 2 posts
[2026-01-13T05:02:26.386Z] [BOT] 2. #💻・tech-jobs: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #🦢・los-angeles: 1 posts
[2026-01-13T05:02:26.386Z] [BOT] [STATS] Channel stats saved
[2026-01-13T05:02:28.413Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*