# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T19:28:03.244Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T19:27:14.120Z] ========================================
[2026-01-15T19:27:14.122Z] Discord Bot Execution Log
[2026-01-15T19:27:14.122Z] Environment: GitHub Actions
[2026-01-15T19:27:14.122Z] Node Version: v20.19.6
[2026-01-15T19:27:14.123Z] ========================================
[2026-01-15T19:27:14.123Z] Environment Variables Check:
[2026-01-15T19:27:14.123Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T19:27:14.123Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.123Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T19:27:14.123Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T19:27:14.123Z] 
Multi-Channel Configuration:
[2026-01-15T19:27:14.123Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.123Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.123Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.123Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T19:27:14.124Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T19:27:14.124Z] 
Data Files Check:
[2026-01-15T19:27:14.125Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37304 bytes)
[2026-01-15T19:27:14.132Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 952453 bytes)
[2026-01-15T19:27:14.132Z] 
========================================
[2026-01-15T19:27:14.132Z] Starting Enhanced Discord Bot...
[2026-01-15T19:27:14.132Z] ========================================
[2026-01-15T19:27:14.672Z] [BOT] ✅ Loaded V2 database: 1776 jobs
[2026-01-15T19:27:15.156Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T19:27:15.157Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T19:27:15.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T19:27:15.269Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Undergrad Software Engineer - Fusion at Oracle
[2026-01-15T19:27:15.270Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T19:27:15.271Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T19:27:15.271Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T19:27:15.272Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T19:27:15.272Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T19:27:15.272Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T19:27:15.276Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T19:27:15.277Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Fusion" @ ORG_dc7620eb
[2026-01-15T19:27:15.277Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:15.294Z] [BOT ERROR] (node:2632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T19:27:15.619Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-15T19:27:15.619Z] [BOT] ✅ Industry: Undergrad Software Engineer - Fusion @ ORG_dc7620eb
[2026-01-15T19:27:17.464Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Fusion @ ORG_dc7620eb in #🦢・los-angeles
[2026-01-15T19:27:17.465Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-15T19:27:18.966Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Fusion @ ORG_dc7620eb (instance #1)
[2026-01-15T19:27:18.966Z] [BOT] 💾 BEFORE ARCHIVING: 1777 jobs in database
[2026-01-15T19:27:18.968Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T19:27:18.972Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-15T19:27:18.972Z] [BOT] ✅ Archiving complete: 3 archived, 1774 active
[2026-01-15T19:27:18.986Z] [BOT] 💾 Saved posted_jobs.json: 1774 active jobs
[2026-01-15T19:27:18.986Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:18.987Z] [BOT] 📍 [ROUTING] "Software Engineer 2/3" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:19.325Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-15T19:27:19.325Z] [BOT] ✅ Industry: Software Engineer 2/3 @ ORG_f3f2248d Grumman
[2026-01-15T19:27:21.013Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman in #🌆・chicago
[2026-01-15T19:27:21.013Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T19:27:22.515Z] [BOT] 💾 Marked as posted: Software Engineer 2/3 @ ORG_f3f2248d Grumman (instance #1)
[2026-01-15T19:27:22.515Z] [BOT] 💾 BEFORE ARCHIVING: 1775 jobs in database
[2026-01-15T19:27:22.516Z] [BOT] ✅ No jobs to archive (all 1775 jobs within 7-day window)
[2026-01-15T19:27:22.527Z] [BOT] 💾 Saved posted_jobs.json: 1775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:22.527Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_931a39c9
[2026-01-15T19:27:22.527Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:22.701Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_931a39c9 in #💻・tech-jobs
[2026-01-15T19:27:22.701Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_931a39c9
[2026-01-15T19:27:24.489Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_931a39c9 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T19:27:25.989Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_931a39c9 (instance #1)
[2026-01-15T19:27:25.989Z] [BOT] 💾 BEFORE ARCHIVING: 1776 jobs in database
[2026-01-15T19:27:25.990Z] [BOT] ✅ No jobs to archive (all 1776 jobs within 7-day window)
[2026-01-15T19:27:26.004Z] [BOT] 💾 Saved posted_jobs.json: 1776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:26.005Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Engine" @ ORG_1bb6fcfb
[2026-01-15T19:27:26.005Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:26.156Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T19:27:26.156Z] [BOT] ✅ Industry: Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb
[2026-01-15T19:27:27.878Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T19:27:27.879Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T19:27:29.380Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb (instance #1)
[2026-01-15T19:27:29.380Z] [BOT] 💾 BEFORE ARCHIVING: 1777 jobs in database
[2026-01-15T19:27:29.382Z] [BOT] ✅ No jobs to archive (all 1777 jobs within 7-day window)
[2026-01-15T19:27:29.394Z] [BOT] 💾 Saved posted_jobs.json: 1777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:29.394Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb (instance #1)
[2026-01-15T19:27:29.394Z] [BOT] 💾 BEFORE ARCHIVING: 1778 jobs in database
[2026-01-15T19:27:29.395Z] [BOT] ✅ No jobs to archive (all 1778 jobs within 7-day window)
[2026-01-15T19:27:29.407Z] [BOT] 💾 Saved posted_jobs.json: 1778 active jobs
[2026-01-15T19:27:29.407Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:29.407Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2026-01-15T19:27:29.407Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:29.584Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2026-01-15T19:27:31.610Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T19:27:33.112Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate @ ORG_08c9a13c (instance #1)
[2026-01-15T19:27:33.112Z] [BOT] 💾 BEFORE ARCHIVING: 1779 jobs in database
[2026-01-15T19:27:33.113Z] [BOT] ✅ No jobs to archive (all 1779 jobs within 7-day window)
[2026-01-15T19:27:33.124Z] [BOT] 💾 Saved posted_jobs.json: 1779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:33.124Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
   Category: TECH (matched: "software")
[2026-01-15T19:27:33.124Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:33.310Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2026-01-15T19:27:35.041Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T19:27:36.543Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-15T19:27:36.543Z] [BOT] 💾 BEFORE ARCHIVING: 1780 jobs in database
[2026-01-15T19:27:36.544Z] [BOT] ✅ No jobs to archive (all 1780 jobs within 7-day window)
[2026-01-15T19:27:36.554Z] [BOT] 💾 Saved posted_jobs.json: 1780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:36.555Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b08efd2b
[2026-01-15T19:27:36.555Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T19:27:36.718Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b08efd2b in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_b08efd2b
[2026-01-15T19:27:38.789Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b08efd2b in #🌉・san-francisco
[2026-01-15T19:27:38.790Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T19:27:40.291Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b08efd2b (instance #1)
[2026-01-15T19:27:40.291Z] [BOT] 💾 BEFORE ARCHIVING: 1781 jobs in database
[2026-01-15T19:27:40.292Z] [BOT] ✅ No jobs to archive (all 1781 jobs within 7-day window)
[2026-01-15T19:27:40.303Z] [BOT] 💾 Saved posted_jobs.json: 1781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:43.303Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T19:27:43.304Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T19:27:43.469Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2026-01-15T19:27:45.191Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T19:27:46.693Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T19:27:46.693Z] [BOT] 💾 BEFORE ARCHIVING: 1782 jobs in database
[2026-01-15T19:27:46.694Z] [BOT] ✅ No jobs to archive (all 1782 jobs within 7-day window)
[2026-01-15T19:27:46.705Z] [BOT] 💾 Saved posted_jobs.json: 1782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:46.705Z] [BOT] 📍 [ROUTING] "Post-Doctoral Associate" @ ORG_9d38443e of Maryland - College Park
   Category: AI (matched: "machine learning")
[2026-01-15T19:27:46.705Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T19:27:47.139Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park in #🤖・ai-jobs
  ✅ Industry: Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park
[2026-01-15T19:27:48.950Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T19:27:50.451Z] [BOT] 💾 Marked as posted: Post-Doctoral Associate @ ORG_9d38443e of Maryland - College Park (instance #1)
[2026-01-15T19:27:50.451Z] [BOT] 💾 BEFORE ARCHIVING: 1783 jobs in database
[2026-01-15T19:27:50.453Z] [BOT] ✅ No jobs to archive (all 1783 jobs within 7-day window)
[2026-01-15T19:27:50.468Z] [BOT] 💾 Saved posted_jobs.json: 1783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:27:53.467Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T19:27:53.468Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2026-01-15T19:27:53.468Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T19:27:53.891Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
[2026-01-15T19:27:53.891Z] [BOT] ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-15T19:27:55.649Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T19:27:57.150Z] [BOT] 💾 Marked as posted: Research Professional @ ORG_9d38443e of Chicago (instance #1)
[2026-01-15T19:27:57.150Z] [BOT] 💾 BEFORE ARCHIVING: 1784 jobs in database
[2026-01-15T19:27:57.151Z] [BOT] ✅ No jobs to archive (all 1784 jobs within 7-day window)
[2026-01-15T19:27:57.173Z] [BOT] 💾 Saved posted_jobs.json: 1784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T19:28:00.173Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T19:28:00.174Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305904 (posted within 7 days)
[2026-01-15T19:28:00.174Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_79baa5e1-3_r10206037 (posted within 7 days)
⏭️  Skipping duplicate: JID_8352e833 (posted within 7 days)
[2026-01-15T19:28:00.174Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_d9fe0b4f (posted within 7 days)
[2026-01-15T19:28:00.174Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_cb26526c-detail (posted within 7 days)
[2026-01-15T19:28:00.175Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_ed1f0cfa-science_421248 (posted within 7 days)
[2026-01-15T19:28:00.175Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-professional_jr31354 (posted within 7 days)
[2026-01-15T19:28:00.175Z] [BOT] ⏭️  Skipping duplicate: JID_79063f25-engineer_req-11665 (posted within 7 days)
[2026-01-15T19:28:00.175Z] [BOT] ⏭️  Skipping duplicate: JID_59bd0186-associate_jr100737 (posted within 7 days)
[2026-01-15T19:28:00.175Z] [BOT] ⏭️  Skipping duplicate: JID_13f83d10 (posted within 7 days)
[2026-01-15T19:28:00.294Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[2026-01-15T19:28:00.460Z] [BOT] ✅ Saved pending queue: 2752 total (2732 pending, 10 enriched, 10 posted)
[2026-01-15T19:28:00.460Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T19:28:00.516Z] [BOT] 📂 Loaded 3955 existing routing entries
[2026-01-15T19:28:00.579Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3965
   Timestamp: 2026-01-15T19:28:00.563Z
[2026-01-15T19:28:00.580Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T19:28:00.580Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2026-01-15T19:28:00.580Z] [BOT] 1. #💻・tech-jobs: 7 posts
[2026-01-15T19:28:00.580Z] [BOT] 2. #🌉・san-francisco: 4 posts
     3. #🌆・chicago: 3 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-15T19:28:00.581Z] [BOT] 5. #🦢・los-angeles: 1 posts
[2026-01-15T19:28:00.581Z] [BOT] [STATS] Channel stats saved
[2026-01-15T19:28:02.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*