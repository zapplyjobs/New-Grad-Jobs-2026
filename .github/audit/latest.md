# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T03:23:24.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T03:22:27.728Z] ========================================
[2026-01-13T03:22:27.730Z] Discord Bot Execution Log
[2026-01-13T03:22:27.730Z] Environment: GitHub Actions
[2026-01-13T03:22:27.730Z] Node Version: v20.19.6
[2026-01-13T03:22:27.730Z] ========================================
[2026-01-13T03:22:27.730Z] Environment Variables Check:
[2026-01-13T03:22:27.730Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T03:22:27.730Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.730Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T03:22:27.730Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T03:22:27.730Z] 
Multi-Channel Configuration:
[2026-01-13T03:22:27.730Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T03:22:27.731Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T03:22:27.731Z] 
Data Files Check:
[2026-01-13T03:22:27.732Z] .github/data/new_jobs.json: ✅ Exists (10 items, 107157 bytes)
[2026-01-13T03:22:27.735Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 350135 bytes)
[2026-01-13T03:22:27.735Z] 
========================================
[2026-01-13T03:22:27.735Z] Starting Enhanced Discord Bot...
[2026-01-13T03:22:27.735Z] ========================================
[2026-01-13T03:22:28.250Z] [BOT] ✅ Loaded V2 database: 664 jobs
[2026-01-13T03:22:28.850Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T03:22:28.850Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T03:22:28.850Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T03:22:28.958Z] [BOT] ✅ Loaded pending queue: 2696 total (2676 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Director, Global Sales Enablement at reddit
[2026-01-13T03:22:28.959Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T03:22:28.960Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T03:22:28.960Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T03:22:28.961Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T03:22:28.961Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Development Representative Intern @ samsara: phoenix, arizona, atlanta
[2026-01-13T03:22:28.961Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T03:22:28.966Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T03:22:28.966Z] [BOT] 📍 [ROUTING] "Director, Global Sales Enablement" @ reddit
[2026-01-13T03:22:28.966Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T03:22:28.971Z] [BOT ERROR] (node:3106) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T03:22:29.177Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🤖・ai-jobs
  ✅ Industry: Director, Global Sales Enablement @ reddit
[2026-01-13T03:22:30.938Z] [BOT] ✅ Created forum post: 🏢 Director, Global Sales Enablement @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T03:22:32.439Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-13T03:22:32.439Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2026-01-13T03:22:32.440Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T03:22:32.445Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-13T03:22:32.445Z] [BOT] ✅ Archiving complete: 3 archived, 662 active
[2026-01-13T03:22:32.451Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
[2026-01-13T03:22:32.451Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:22:32.451Z] [BOT] 📍 [ROUTING] "Snoo Operations and IT Support (SOS) Manager" @ reddit
[2026-01-13T03:22:32.451Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T03:22:33.970Z] [BOT] ✅ Created forum post: 🏢 Snoo Operations and IT Support (SOS) Manager @ reddit in #🤖・ai-jobs
[2026-01-13T03:22:33.970Z] [BOT] ✅ Industry: Snoo Operations and IT Support (SOS) Manager @ reddit
[2026-01-13T03:22:35.979Z] [BOT] ✅ Created forum post: 🏢 Snoo Operations and IT Support (SOS) Manager @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T03:22:37.481Z] [BOT] 💾 Marked as posted: Snoo Operations and IT Support (SOS) Manager @ reddit (instance #1)
[2026-01-13T03:22:37.481Z] [BOT] 💾 BEFORE ARCHIVING: 663 jobs in database
[2026-01-13T03:22:37.482Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2026-01-13T03:22:37.487Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
[2026-01-13T03:22:37.487Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:22:37.488Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (Gaming & Tech)" @ reddit
[2026-01-13T03:22:37.488Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-13T03:22:37.826Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit
[2026-01-13T03:22:39.592Z] [BOT] ✅ Created forum post: 🏢 Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T03:22:41.094Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit (instance #1)
[2026-01-13T03:22:41.094Z] [BOT] 💾 BEFORE ARCHIVING: 664 jobs in database
[2026-01-13T03:22:41.095Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2026-01-13T03:22:41.101Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
[2026-01-13T03:22:41.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:22:41.102Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
[2026-01-13T03:22:41.102Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T03:22:41.333Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
[2026-01-13T03:22:41.333Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-13T03:22:43.746Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T03:22:45.246Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2026-01-13T03:22:45.246Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2026-01-13T03:22:45.248Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
[2026-01-13T03:22:45.248Z] [BOT] ✅ Archiving complete: 1 archived, 664 active
[2026-01-13T03:22:45.254Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
[2026-01-13T03:22:45.254Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:22:48.254Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T03:22:48.255Z] [BOT] 📍 [ROUTING] "Director's Fellowship Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
   Category: MARKETING (matched: "growth")
[2026-01-13T03:22:48.255Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T03:22:48.533Z] [BOT] ✅ Created forum post: 🏢 Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
[2026-01-13T03:22:48.533Z] [BOT] ✅ Industry: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-13T03:22:50.241Z] [BOT] ✅ Created forum post: 🏢 Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T03:22:51.741Z] [BOT] 💾 Marked as posted: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
[2026-01-13T03:22:51.741Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2026-01-13T03:22:51.742Z] [BOT] ✅ No jobs to archive (all 665 jobs within 7-day window)
[2026-01-13T03:22:51.748Z] [BOT] 💾 Saved posted_jobs.json: 665 active jobs
[2026-01-13T03:22:51.748Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:22:54.749Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T03:22:54.750Z] [BOT] 📍 [ROUTING] "Therapist - PHP/IOP" @ ORG_6a97f77a Behavioral Health
[2026-01-13T03:22:54.750Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T03:22:54.988Z] [BOT] ✅ Created forum post: 🏢 Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
  ✅ Industry: Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health
[2026-01-13T03:22:56.840Z] [BOT] ✅ Created forum post: 🏢 Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T03:22:58.340Z] [BOT] 💾 Marked as posted: Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-13T03:22:58.340Z] [BOT] 💾 BEFORE ARCHIVING: 666 jobs in database
[2026-01-13T03:22:58.341Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-13T03:22:58.347Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-13T03:22:58.347Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:23:01.347Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T03:23:01.348Z] [BOT] 📍 [ROUTING] "Java City – Hhs - AM Food Service Worker - Western Carolina University" @ ORG_e93b6c76
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:23:02.018Z] [BOT] ✅ Created forum post: 🏢 Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #💻・tech-jobs
  ✅ Industry: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76
[2026-01-13T03:23:03.743Z] [BOT] ✅ Created forum post: 🏢 Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T03:23:05.244Z] [BOT] 💾 Marked as posted: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 (instance #1)
[2026-01-13T03:23:05.244Z] [BOT] 💾 BEFORE ARCHIVING: 667 jobs in database
[2026-01-13T03:23:05.245Z] [BOT] ✅ No jobs to archive (all 667 jobs within 7-day window)
[2026-01-13T03:23:05.251Z] [BOT] 💾 Saved posted_jobs.json: 667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T03:23:05.252Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2026-01-13T03:23:05.252Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:23:05.549Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2026-01-13T03:23:05.549Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2026-01-13T03:23:07.443Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
[2026-01-13T03:23:07.443Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T03:23:08.944Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2026-01-13T03:23:08.944Z] [BOT] 💾 BEFORE ARCHIVING: 668 jobs in database
[2026-01-13T03:23:08.945Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2026-01-13T03:23:08.951Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
[2026-01-13T03:23:08.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:23:08.951Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – College Grad 2026" @ ORG_06fec48a Health
[2026-01-13T03:23:08.951Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:23:09.176Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #💻・tech-jobs
[2026-01-13T03:23:09.176Z] [BOT] ✅ Industry: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health
[2026-01-13T03:23:12.462Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #🦢・los-angeles
[2026-01-13T03:23:12.462Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T03:23:13.963Z] [BOT] 💾 Marked as posted: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health (instance #1)
[2026-01-13T03:23:13.964Z] [BOT] 💾 BEFORE ARCHIVING: 669 jobs in database
[2026-01-13T03:23:13.964Z] [BOT] ✅ No jobs to archive (all 669 jobs within 7-day window)
[2026-01-13T03:23:13.970Z] [BOT] 💾 Saved posted_jobs.json: 669 active jobs
[2026-01-13T03:23:13.970Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:23:13.971Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – College Grad" @ ORG_33a7935d
[2026-01-13T03:23:13.971Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T03:23:14.227Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – College Grad @ ORG_33a7935d in #💻・tech-jobs
[2026-01-13T03:23:14.227Z] [BOT] ✅ Industry: Software Engineering AMTS – College Grad @ ORG_33a7935d
[2026-01-13T03:23:15.946Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – College Grad @ ORG_33a7935d in #💻・remote-usa
[2026-01-13T03:23:15.946Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T03:23:17.447Z] [BOT] 💾 Marked as posted: Software Engineering AMTS – College Grad @ ORG_33a7935d (instance #1)
[2026-01-13T03:23:17.448Z] [BOT] 💾 BEFORE ARCHIVING: 670 jobs in database
[2026-01-13T03:23:17.448Z] [BOT] ✅ No jobs to archive (all 670 jobs within 7-day window)
[2026-01-13T03:23:17.454Z] [BOT] 💾 Saved posted_jobs.json: 670 active jobs
[2026-01-13T03:23:17.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T03:23:20.454Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_595a8cc0 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_66854faa (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_c3efc08f (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_f1cb696e-researcher_r14061 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_60b963d2-iop_r5836 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_3cfbf2c4 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_273b1230 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_b9af3f81 (posted within 7 days)
⏭️  Skipping duplicate: JID_7689d913 (posted within 7 days)
[2026-01-13T03:23:20.455Z] [BOT] ⏭️  Skipping duplicate: JID_edadfe67-external_career_site-JID_ba958958-_jr322433-1 (posted within 7 days)
[2026-01-13T03:23:20.582Z] [BOT] ✅ Loaded pending queue: 2696 total (2676 pending, 20 enriched, 0 posted)
[2026-01-13T03:23:20.735Z] [BOT] ✅ Saved pending queue: 2696 total (2676 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T03:23:20.735Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T03:23:20.785Z] [BOT] 📂 Loaded 2846 existing routing entries
[2026-01-13T03:23:20.840Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T03:23:20.840Z] [BOT] Total entries: 2856
   Timestamp: 2026-01-13T03:23:20.829Z
[2026-01-13T03:23:20.841Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T03:23:20.841Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T03:23:20.841Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T03:23:20.841Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-13T03:23:20.841Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #💻・remote-usa: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #🗽・new-york: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-13T03:23:20.842Z] [BOT] [STATS] Channel stats saved
[2026-01-13T03:23:22.867Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3106) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*