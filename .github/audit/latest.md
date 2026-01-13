# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T22:27:29.075Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T22:26:32.572Z] ========================================
[2026-01-13T22:26:32.574Z] Discord Bot Execution Log
[2026-01-13T22:26:32.574Z] Environment: GitHub Actions
[2026-01-13T22:26:32.574Z] Node Version: v20.19.6
[2026-01-13T22:26:32.574Z] ========================================
[2026-01-13T22:26:32.574Z] Environment Variables Check:
[2026-01-13T22:26:32.574Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T22:26:32.574Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.574Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T22:26:32.574Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T22:26:32.574Z] 
Multi-Channel Configuration:
[2026-01-13T22:26:32.575Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T22:26:32.575Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T22:26:32.575Z] 
Data Files Check:
[2026-01-13T22:26:32.576Z] .github/data/new_jobs.json: ✅ Exists (10 items, 65941 bytes)
[2026-01-13T22:26:32.580Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 544441 bytes)
[2026-01-13T22:26:32.580Z] 
========================================
[2026-01-13T22:26:32.580Z] Starting Enhanced Discord Bot...
[2026-01-13T22:26:32.580Z] ========================================
[2026-01-13T22:26:33.114Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-13T22:26:33.808Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T22:26:33.808Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T22:26:33.808Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T22:26:33.917Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at General Dynamics Information Technology
[2026-01-13T22:26:33.920Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T22:26:33.920Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T22:26:33.920Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T22:26:33.921Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-13T22:26:33.921Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T22:26:33.921Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T22:26:33.926Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T22:26:33.927Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c910d474 Dynamics Information Technology
[2026-01-13T22:26:33.927Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:26:33.931Z] [BOT ERROR] (node:3269) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T22:26:34.144Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_c910d474 Dynamics Information Technology
[2026-01-13T22:26:35.904Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2026-01-13T22:26:35.904Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T22:26:37.404Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-13T22:26:37.405Z] [BOT] 💾 BEFORE ARCHIVING: 1027 jobs in database
[2026-01-13T22:26:37.406Z] [BOT] ✅ No jobs to archive (all 1027 jobs within 7-day window)
[2026-01-13T22:26:37.417Z] [BOT] 💾 Saved posted_jobs.json: 1027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:37.417Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:26:37.633Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-13T22:26:39.368Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:26:40.868Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
💾 BEFORE ARCHIVING: 1028 jobs in database
[2026-01-13T22:26:40.869Z] [BOT] ✅ No jobs to archive (all 1028 jobs within 7-day window)
[2026-01-13T22:26:40.876Z] [BOT] 💾 Saved posted_jobs.json: 1028 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:40.876Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
💾 BEFORE ARCHIVING: 1029 jobs in database
[2026-01-13T22:26:40.877Z] [BOT] ✅ No jobs to archive (all 1029 jobs within 7-day window)
[2026-01-13T22:26:40.883Z] [BOT] 💾 Saved posted_jobs.json: 1029 active jobs
[2026-01-13T22:26:40.884Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:40.884Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center" @ ORG_f5f75c9b U
[2026-01-13T22:26:40.884Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:26:41.057Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #💻・tech-jobs
  ✅ Industry: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U
[2026-01-13T22:26:42.780Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:26:44.282Z] [BOT] 💾 Marked as posted: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U (instance #1)
[2026-01-13T22:26:44.282Z] [BOT] 💾 BEFORE ARCHIVING: 1030 jobs in database
[2026-01-13T22:26:44.283Z] [BOT] ✅ No jobs to archive (all 1030 jobs within 7-day window)
[2026-01-13T22:26:44.291Z] [BOT] 💾 Saved posted_jobs.json: 1030 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:44.292Z] [BOT] 📍 [ROUTING] "Data Quality Analyst 1" @ ORG_0aa5052d State University (LSU)
[2026-01-13T22:26:44.292Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:26:44.488Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
  ✅ Industry: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU)
[2026-01-13T22:26:46.380Z] [BOT] ✅ Created forum post: 🏢 Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:26:47.881Z] [BOT] 💾 Marked as posted: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-13T22:26:47.881Z] [BOT] 💾 BEFORE ARCHIVING: 1031 jobs in database
[2026-01-13T22:26:47.882Z] [BOT] ✅ No jobs to archive (all 1031 jobs within 7-day window)
[2026-01-13T22:26:47.891Z] [BOT] 💾 Saved posted_jobs.json: 1031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:50.891Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T22:26:50.891Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Engineer I" @ ORG_1b91b475 Automation
[2026-01-13T22:26:50.891Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T22:26:51.118Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #🤖・ai-jobs
  ✅ Industry: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation
[2026-01-13T22:26:52.845Z] [BOT] ✅ Created forum post: 🏢 Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T22:26:54.347Z] [BOT] 💾 Marked as posted: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation (instance #1)
[2026-01-13T22:26:54.347Z] [BOT] 💾 BEFORE ARCHIVING: 1032 jobs in database
[2026-01-13T22:26:54.348Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-13T22:26:54.356Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-13T22:26:54.356Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:26:54.357Z] [BOT] 📍 [ROUTING] "Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles" @ ORG_0890f456
[2026-01-13T22:26:54.357Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:26:54.556Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456
[2026-01-13T22:26:56.292Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:26:57.794Z] [BOT] 💾 Marked as posted: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 (instance #1)
[2026-01-13T22:26:57.795Z] [BOT] 💾 BEFORE ARCHIVING: 1033 jobs in database
[2026-01-13T22:26:57.796Z] [BOT] ✅ No jobs to archive (all 1033 jobs within 7-day window)
[2026-01-13T22:26:57.807Z] [BOT] 💾 Saved posted_jobs.json: 1033 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:00.808Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T22:27:00.809Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_441f2234
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T22:27:01.019Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_441f2234 in #📈・JID_fb739488
  ✅ Industry: Data Engineer 1 @ ORG_441f2234
[2026-01-13T22:27:02.522Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_441f2234 (instance #1)
[2026-01-13T22:27:02.522Z] [BOT] 💾 BEFORE ARCHIVING: 1034 jobs in database
[2026-01-13T22:27:02.523Z] [BOT] ✅ No jobs to archive (all 1034 jobs within 7-day window)
[2026-01-13T22:27:02.532Z] [BOT] 💾 Saved posted_jobs.json: 1034 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:05.532Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T22:27:05.533Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Code " @ anthropic
[2026-01-13T22:27:05.533Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T22:27:05.741Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Code  @ anthropic in #💲・sales-jobs
  ✅ Industry: Product Designer, Claude Code  @ anthropic
[2026-01-13T22:27:07.444Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Code  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:27:08.946Z] [BOT] 💾 Marked as posted: Product Designer, Claude Code  @ anthropic (instance #1)
[2026-01-13T22:27:08.946Z] [BOT] 💾 BEFORE ARCHIVING: 1035 jobs in database
[2026-01-13T22:27:08.947Z] [BOT] ✅ No jobs to archive (all 1035 jobs within 7-day window)
[2026-01-13T22:27:08.956Z] [BOT] 💾 Saved posted_jobs.json: 1035 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:11.956Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T22:27:11.956Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
[2026-01-13T22:27:11.957Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T22:27:12.547Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
[2026-01-13T22:27:12.547Z] [BOT] ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-13T22:27:14.336Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T22:27:15.837Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
[2026-01-13T22:27:15.837Z] [BOT] 💾 BEFORE ARCHIVING: 1036 jobs in database
[2026-01-13T22:27:15.839Z] [BOT] ✅ No jobs to archive (all 1036 jobs within 7-day window)
[2026-01-13T22:27:15.847Z] [BOT] 💾 Saved posted_jobs.json: 1036 active jobs
[2026-01-13T22:27:15.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:15.848Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
💾 BEFORE ARCHIVING: 1037 jobs in database
[2026-01-13T22:27:15.848Z] [BOT] ✅ No jobs to archive (all 1037 jobs within 7-day window)
[2026-01-13T22:27:15.856Z] [BOT] 💾 Saved posted_jobs.json: 1037 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:18.857Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T22:27:18.858Z] [BOT] 📍 [ROUTING] "Consulting Associate - EHS Management Information Systems" @ ORG_d41a2092
   Category: MARKETING (matched: "growth")
[2026-01-13T22:27:18.858Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T22:27:19.548Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #📣・marketing-jobs
  ✅ Industry: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092
[2026-01-13T22:27:21.245Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T22:27:22.746Z] [BOT] 💾 Marked as posted: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 (instance #1)
[2026-01-13T22:27:22.747Z] [BOT] 💾 BEFORE ARCHIVING: 1038 jobs in database
[2026-01-13T22:27:22.747Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-13T22:27:22.756Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-13T22:27:22.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:27:25.757Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T22:27:25.757Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_975bace0-engineer_rq211472-1 (posted within 7 days)
[2026-01-13T22:27:25.758Z] [BOT] ⏭️  Skipping duplicate: JID_c2bcf3af (posted within 7 days)
⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_524db41a-i_1624077 (posted within 7 days)
⏭️  Skipping duplicate: JID_8071fa01 (posted within 7 days)
[2026-01-13T22:27:25.758Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31936 (posted within 7 days)
[2026-01-13T22:27:25.758Z] [BOT] ⏭️  Skipping duplicate: JID_0940be93-rater_r0007198 (posted within 7 days)
[2026-01-13T22:27:25.758Z] [BOT] ⏭️  Skipping duplicate: JID_8d05fa0a-2026_jr2008395 (posted within 7 days)
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_84208682-_r00025970 (posted within 7 days)
[2026-01-13T22:27:25.758Z] [BOT] ⏭️  Skipping duplicate: JID_22c9c844-center_jr89315-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_a9275996-1_r00111644-1 (posted within 7 days)
[2026-01-13T22:27:25.896Z] [BOT] ✅ Loaded pending queue: 2724 total (2704 pending, 20 enriched, 0 posted)
[2026-01-13T22:27:26.057Z] [BOT] ✅ Saved pending queue: 2724 total (2704 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T22:27:26.057Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T22:27:26.112Z] [BOT] 📂 Loaded 3175 existing routing entries
[2026-01-13T22:27:26.171Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3185
   Timestamp: 2026-01-13T22:27:26.158Z
[2026-01-13T22:27:26.172Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 19
[2026-01-13T22:27:26.172Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T22:27:26.173Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T22:27:26.173Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 11
   Top channels:
     1. #💻・tech-jobs: 4 posts
[2026-01-13T22:27:26.173Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-13T22:27:26.173Z] [BOT] [STATS] Channel stats saved
[2026-01-13T22:27:28.198Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3269) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*