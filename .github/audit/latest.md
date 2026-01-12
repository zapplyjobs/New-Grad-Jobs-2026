# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T23:25:49.454Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T23:25:00.658Z] ========================================
[2026-01-12T23:25:00.660Z] Discord Bot Execution Log
[2026-01-12T23:25:00.660Z] Environment: GitHub Actions
[2026-01-12T23:25:00.660Z] Node Version: v20.19.6
[2026-01-12T23:25:00.660Z] ========================================
[2026-01-12T23:25:00.660Z] Environment Variables Check:
[2026-01-12T23:25:00.660Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T23:25:00.661Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T23:25:00.661Z] 
Multi-Channel Configuration:
[2026-01-12T23:25:00.661Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.661Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.662Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.662Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T23:25:00.662Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T23:25:00.662Z] 
Data Files Check:
[2026-01-12T23:25:00.664Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145100 bytes)
[2026-01-12T23:25:00.666Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 325134 bytes)
[2026-01-12T23:25:00.666Z] 
========================================
[2026-01-12T23:25:00.666Z] Starting Enhanced Discord Bot...
[2026-01-12T23:25:00.666Z] ========================================
[2026-01-12T23:25:01.197Z] [BOT] ✅ Loaded V2 database: 606 jobs
[2026-01-12T23:25:01.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T23:25:01.927Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T23:25:01.927Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T23:25:02.036Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Security Engineer at duolingo
[2026-01-12T23:25:02.037Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T23:25:02.038Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T23:25:02.038Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T23:25:02.039Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-12T23:25:02.039Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T23:25:02.045Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-12T23:25:02.045Z] [BOT] 📍 [ROUTING] "Senior Security Engineer" @ duolingo
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:02.050Z] [BOT ERROR] (node:2346) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T23:25:02.286Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer @ duolingo in #💻・tech-jobs
[2026-01-12T23:25:02.286Z] [BOT] ✅ Industry: Senior Security Engineer @ duolingo
[2026-01-12T23:25:04.031Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:05.531Z] [BOT] 💾 Marked as posted: Senior Security Engineer @ duolingo (instance #1)
[2026-01-12T23:25:05.532Z] [BOT] 💾 BEFORE ARCHIVING: 607 jobs in database
[2026-01-12T23:25:05.532Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2026-01-12T23:25:05.540Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
[2026-01-12T23:25:05.540Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:05.541Z] [BOT] 📍 [ROUTING] "Senior Site Reliability Engineer" @ duolingo
   Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:05.760Z] [BOT] ✅ Created forum post: 🏢 Senior Site Reliability Engineer @ duolingo in #💻・tech-jobs
[2026-01-12T23:25:05.761Z] [BOT] ✅ Industry: Senior Site Reliability Engineer @ duolingo
[2026-01-12T23:25:07.498Z] [BOT] ✅ Created forum post: 🏢 Senior Site Reliability Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:08.999Z] [BOT] 💾 Marked as posted: Senior Site Reliability Engineer @ duolingo (instance #1)
[2026-01-12T23:25:08.999Z] [BOT] 💾 BEFORE ARCHIVING: 608 jobs in database
[2026-01-12T23:25:08.999Z] [BOT] ✅ No jobs to archive (all 608 jobs within 7-day window)
[2026-01-12T23:25:09.005Z] [BOT] 💾 Saved posted_jobs.json: 608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:09.005Z] [BOT] 📍 [ROUTING] "Social Content Creator, Intern" @ duolingo
[2026-01-12T23:25:09.005Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:09.227Z] [BOT] ✅ Created forum post: 🏢 Social Content Creator, Intern @ duolingo in #💻・tech-jobs
  ✅ Industry: Social Content Creator, Intern @ duolingo
[2026-01-12T23:25:11.030Z] [BOT] ✅ Created forum post: 🏢 Social Content Creator, Intern @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:12.531Z] [BOT] 💾 Marked as posted: Social Content Creator, Intern @ duolingo (instance #1)
[2026-01-12T23:25:12.531Z] [BOT] 💾 BEFORE ARCHIVING: 609 jobs in database
[2026-01-12T23:25:12.531Z] [BOT] ✅ No jobs to archive (all 609 jobs within 7-day window)
[2026-01-12T23:25:12.538Z] [BOT] 💾 Saved posted_jobs.json: 609 active jobs
[2026-01-12T23:25:12.538Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:12.539Z] [BOT] 📍 [ROUTING] "Staff Android Engineer, Client Architecture" @ duolingo
[2026-01-12T23:25:12.539Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:14.746Z] [BOT] ✅ Created forum post: 🏢 Staff Android Engineer, Client Architecture @ duolingo in #💻・tech-jobs
  ✅ Industry: Staff Android Engineer, Client Architecture @ duolingo
[2026-01-12T23:25:16.533Z] [BOT] ✅ Created forum post: 🏢 Staff Android Engineer, Client Architecture @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:18.034Z] [BOT] 💾 Marked as posted: Staff Android Engineer, Client Architecture @ duolingo (instance #1)
[2026-01-12T23:25:18.035Z] [BOT] 💾 BEFORE ARCHIVING: 610 jobs in database
[2026-01-12T23:25:18.035Z] [BOT] ✅ No jobs to archive (all 610 jobs within 7-day window)
[2026-01-12T23:25:18.041Z] [BOT] 💾 Saved posted_jobs.json: 610 active jobs
[2026-01-12T23:25:18.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:18.042Z] [BOT] 📍 [ROUTING] "Staff iOS Engineer, App Builds" @ duolingo
[2026-01-12T23:25:18.042Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:18.297Z] [BOT] ✅ Created forum post: 🏢 Staff iOS Engineer, App Builds @ duolingo in #💻・tech-jobs
  ✅ Industry: Staff iOS Engineer, App Builds @ duolingo
[2026-01-12T23:25:19.991Z] [BOT] ✅ Created forum post: 🏢 Staff iOS Engineer, App Builds @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:21.492Z] [BOT] 💾 Marked as posted: Staff iOS Engineer, App Builds @ duolingo (instance #1)
[2026-01-12T23:25:21.492Z] [BOT] 💾 BEFORE ARCHIVING: 611 jobs in database
[2026-01-12T23:25:21.492Z] [BOT] ✅ No jobs to archive (all 611 jobs within 7-day window)
[2026-01-12T23:25:21.498Z] [BOT] 💾 Saved posted_jobs.json: 611 active jobs
[2026-01-12T23:25:21.499Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Staff Product Designer" @ duolingo
[2026-01-12T23:25:21.499Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:21.946Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ duolingo in #💻・tech-jobs
  ✅ Industry: Staff Product Designer @ duolingo
[2026-01-12T23:25:23.835Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:25:25.337Z] [BOT] 💾 Marked as posted: Staff Product Designer @ duolingo (instance #1)
[2026-01-12T23:25:25.337Z] [BOT] 💾 BEFORE ARCHIVING: 612 jobs in database
[2026-01-12T23:25:25.337Z] [BOT] ✅ No jobs to archive (all 612 jobs within 7-day window)
[2026-01-12T23:25:25.343Z] [BOT] 💾 Saved posted_jobs.json: 612 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:25.343Z] [BOT] 📍 [ROUTING] "Rust/C++ Senior Software Engineer" @ discord
[2026-01-12T23:25:25.343Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:25:25.784Z] [BOT] ✅ Created forum post: 🏢 Rust/C++ Senior Software Engineer @ discord in #💻・tech-jobs
  ✅ Industry: Rust/C++ Senior Software Engineer @ discord
[2026-01-12T23:25:27.594Z] [BOT] ✅ Created forum post: 🏢 Rust/C++ Senior Software Engineer @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:25:29.095Z] [BOT] 💾 Marked as posted: Rust/C++ Senior Software Engineer @ discord (instance #1)
[2026-01-12T23:25:29.095Z] [BOT] 💾 BEFORE ARCHIVING: 613 jobs in database
[2026-01-12T23:25:29.096Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2026-01-12T23:25:29.101Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
[2026-01-12T23:25:29.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:29.101Z] [BOT] 📍 [ROUTING] "Recruiter, Applied AI" @ anthropic
[2026-01-12T23:25:29.101Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-12T23:25:29.377Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Applied AI @ anthropic in #💻・tech-jobs
  ✅ Industry: Recruiter, Applied AI @ anthropic
[2026-01-12T23:25:31.112Z] [BOT] ✅ Created forum post: 🏢 Recruiter, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:25:32.613Z] [BOT] 💾 Marked as posted: Recruiter, Applied AI @ anthropic (instance #1)
[2026-01-12T23:25:32.613Z] [BOT] 💾 BEFORE ARCHIVING: 614 jobs in database
[2026-01-12T23:25:32.613Z] [BOT] ✅ No jobs to archive (all 614 jobs within 7-day window)
[2026-01-12T23:25:32.620Z] [BOT] 💾 Saved posted_jobs.json: 614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:35.621Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T23:25:35.621Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Insurance" @ anthropic
[2026-01-12T23:25:35.621Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:25:35.974Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Insurance @ anthropic in #💲・sales-jobs
[2026-01-12T23:25:35.975Z] [BOT] ✅ Industry: Strategic Account Executive, Insurance @ anthropic
[2026-01-12T23:25:37.716Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Insurance @ anthropic in #🗽・new-york
[2026-01-12T23:25:37.716Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T23:25:39.217Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Insurance @ anthropic (instance #1)
[2026-01-12T23:25:39.218Z] [BOT] 💾 BEFORE ARCHIVING: 615 jobs in database
[2026-01-12T23:25:39.218Z] [BOT] ✅ No jobs to archive (all 615 jobs within 7-day window)
[2026-01-12T23:25:39.224Z] [BOT] 💾 Saved posted_jobs.json: 615 active jobs
[2026-01-12T23:25:39.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:39.225Z] [BOT] 📍 [ROUTING] "Technical Product Marketing Lead" @ anthropic
[2026-01-12T23:25:39.225Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:25:39.626Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #💲・sales-jobs
  ✅ Industry: Technical Product Marketing Lead @ anthropic
[2026-01-12T23:25:41.367Z] [BOT] ✅ Created forum post: 🏢 Technical Product Marketing Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:25:42.868Z] [BOT] 💾 Marked as posted: Technical Product Marketing Lead @ anthropic (instance #1)
[2026-01-12T23:25:42.869Z] [BOT] 💾 BEFORE ARCHIVING: 616 jobs in database
[2026-01-12T23:25:42.869Z] [BOT] ✅ No jobs to archive (all 616 jobs within 7-day window)
[2026-01-12T23:25:42.875Z] [BOT] 💾 Saved posted_jobs.json: 616 active jobs
[2026-01-12T23:25:42.875Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:25:45.876Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T23:25:45.876Z] [BOT] ⏭️  Skipping duplicate: JID_cfe20d8a (posted within 7 days)
[2026-01-12T23:25:45.876Z] [BOT] ⏭️  Skipping duplicate: JID_8b52879f (posted within 7 days)
[2026-01-12T23:25:45.876Z] [BOT] ⏭️  Skipping duplicate: JID_92e4bda1 (posted within 7 days)
⏭️  Skipping duplicate: JID_80859da3 (posted within 7 days)
[2026-01-12T23:25:45.876Z] [BOT] ⏭️  Skipping duplicate: JID_98962c52 (posted within 7 days)
[2026-01-12T23:25:45.877Z] [BOT] ⏭️  Skipping duplicate: JID_d4ffa3ed (posted within 7 days)
[2026-01-12T23:25:45.877Z] [BOT] ⏭️  Skipping duplicate: JID_e13d0cd0 (posted within 7 days)
⏭️  Skipping duplicate: JID_ef00ba2c (posted within 7 days)
⏭️  Skipping duplicate: JID_be04a6b5 (posted within 7 days)
⏭️  Skipping duplicate: JID_6f02cdd5 (posted within 7 days)
[2026-01-12T23:25:45.992Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[2026-01-12T23:25:46.155Z] [BOT] ✅ Saved pending queue: 2654 total (2634 pending, 10 enriched, 10 posted)
[2026-01-12T23:25:46.155Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T23:25:46.206Z] [BOT] 📂 Loaded 2770 existing routing entries
[2026-01-12T23:25:46.262Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2780
   Timestamp: 2026-01-12T23:25:46.250Z
[2026-01-12T23:25:46.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T23:25:46.263Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T23:25:46.263Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T23:25:46.264Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
[2026-01-12T23:25:46.264Z] [BOT] 2. #🗽・new-york: 7 posts
     3. #🌉・san-francisco: 3 posts
     4. #💲・sales-jobs: 2 posts
[2026-01-12T23:25:46.264Z] [BOT] [STATS] Channel stats saved
[2026-01-12T23:25:48.288Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2346) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*