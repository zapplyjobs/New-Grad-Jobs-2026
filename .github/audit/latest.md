# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T19:04:48.039Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T19:03:59.831Z] ========================================
[2025-12-21T19:03:59.833Z] Discord Bot Execution Log
[2025-12-21T19:03:59.833Z] Environment: GitHub Actions
[2025-12-21T19:03:59.833Z] Node Version: v20.19.6
[2025-12-21T19:03:59.833Z] ========================================
[2025-12-21T19:03:59.833Z] Environment Variables Check:
[2025-12-21T19:03:59.833Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T19:03:59.833Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.833Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T19:03:59.833Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T19:03:59.833Z] 
Multi-Channel Configuration:
[2025-12-21T19:03:59.834Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T19:03:59.834Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T19:03:59.834Z] 
Data Files Check:
[2025-12-21T19:03:59.835Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36878 bytes)
[2025-12-21T19:03:59.839Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493104 bytes)
[2025-12-21T19:03:59.839Z] 
========================================
[2025-12-21T19:03:59.839Z] Starting Enhanced Discord Bot...
[2025-12-21T19:03:59.839Z] ========================================
[2025-12-21T19:04:00.379Z] [BOT] ✅ Loaded V2 database: 843 jobs
[2025-12-21T19:04:01.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T19:04:01.027Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T19:04:01.027Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T19:04:01.027Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T19:04:01.138Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 130
[2025-12-21T19:04:01.141Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T19:04:01.141Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T19:04:01.141Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T19:04:01.141Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T19:04:01.142Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-21T19:04:01.142Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T19:04:01.146Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T19:04:01.147Z] [BOT] 📍 [ROUTING] "GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering" @ ORG_36b77757
[2025-12-21T19:04:01.147Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T19:04:01.152Z] [BOT ERROR] (node:2713) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T19:04:01.788Z] [BOT] ✅ Created forum post: 📱 GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_ba40a97d in #🤖・ai-jobs
  ✅ Industry: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757
[2025-12-21T19:04:03.472Z] [BOT] ✅ Created forum post: 📱 GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_ba40a97d in #🦢・los-angeles
[2025-12-21T19:04:03.472Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-21T19:04:04.973Z] [BOT] 💾 Marked as posted: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 (instance #1)
[2025-12-21T19:04:04.973Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T19:04:04.975Z] [BOT] ✅ No jobs to archive (all 844 jobs within 7-day window)
[2025-12-21T19:04:04.986Z] [BOT] 💾 Saved posted_jobs.json: 844 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:04.987Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee-Developing an Exascale Muphfasa - Multi Phase Flow Adaptive Simulator" @ ORG_a867f63f National Laboratory
[2025-12-21T19:04:04.987Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T19:04:06.268Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee-Developing an Exascale Muphfasa - Multi Phase Flow Adaptive Simulator @ ORG_29f94193 in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee-Developing an Exascale Muphfasa - Multi Phase Flow Adaptive Simulator @ ORG_a867f63f National Laboratory
[2025-12-21T19:04:08.071Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee-Developing an Exascale Muphfasa - Multi Phase Flow Adaptive Simulator @ ORG_29f94193 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-21T19:04:09.571Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee-Developing an Exascale Muphfasa - Multi Phase Flow Adaptive Simulator @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-21T19:04:09.571Z] [BOT] 💾 BEFORE ARCHIVING: 845 jobs in database
[2025-12-21T19:04:09.572Z] [BOT] ✅ No jobs to archive (all 845 jobs within 7-day window)
[2025-12-21T19:04:09.580Z] [BOT] 💾 Saved posted_jobs.json: 845 active jobs
[2025-12-21T19:04:09.580Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:12.581Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-21T19:04:12.582Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_dc7620eb
[2025-12-21T19:04:12.582Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:04:12.959Z] [BOT] ✅ Created forum post: 🔴 Senior Software Engineer @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-21T19:04:12.959Z] [BOT] ✅ Industry: Senior Software Engineer @ ORG_dc7620eb
[2025-12-21T19:04:14.646Z] [BOT] ✅ Created forum post: 🔴 Senior Software Engineer @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-21T19:04:16.148Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_dc7620eb (instance #1)
[2025-12-21T19:04:16.148Z] [BOT] 💾 BEFORE ARCHIVING: 846 jobs in database
[2025-12-21T19:04:16.149Z] [BOT] ✅ No jobs to archive (all 846 jobs within 7-day window)
[2025-12-21T19:04:16.157Z] [BOT] 💾 Saved posted_jobs.json: 846 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:16.158Z] [BOT] 📍 [ROUTING] "Backend Software Engineer" @ ORG_70c9b406
[2025-12-21T19:04:16.158Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:04:16.439Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_70c9b406 in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer @ ORG_70c9b406
[2025-12-21T19:04:18.230Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_70c9b406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T19:04:19.732Z] [BOT] 💾 Marked as posted: Backend Software Engineer @ ORG_70c9b406 (instance #1)
[2025-12-21T19:04:19.732Z] [BOT] 💾 BEFORE ARCHIVING: 847 jobs in database
[2025-12-21T19:04:19.733Z] [BOT] ✅ No jobs to archive (all 847 jobs within 7-day window)
[2025-12-21T19:04:19.740Z] [BOT] 💾 Saved posted_jobs.json: 847 active jobs
[2025-12-21T19:04:19.741Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:19.741Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_56d3e805 Computer
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:04:19.995Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_56d3e805 Computer in #💻・tech-jobs
[2025-12-21T19:04:19.995Z] [BOT] ✅ Industry: Associate Software Developer @ ORG_56d3e805 Computer
[2025-12-21T19:04:21.497Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_56d3e805 Computer (instance #1)
[2025-12-21T19:04:21.497Z] [BOT] 💾 BEFORE ARCHIVING: 848 jobs in database
[2025-12-21T19:04:21.498Z] [BOT] ✅ No jobs to archive (all 848 jobs within 7-day window)
[2025-12-21T19:04:21.505Z] [BOT] 💾 Saved posted_jobs.json: 848 active jobs
[2025-12-21T19:04:21.505Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:21.505Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2025-12-21T19:04:21.505Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:04:21.789Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
[2025-12-21T19:04:21.789Z] [BOT] ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2025-12-21T19:04:23.534Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
[2025-12-21T19:04:23.534Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T19:04:25.036Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2025-12-21T19:04:25.036Z] [BOT] 💾 BEFORE ARCHIVING: 849 jobs in database
[2025-12-21T19:04:25.036Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2025-12-21T19:04:25.043Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:28.044Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-21T19:04:28.044Z] [BOT] 📍 [ROUTING] "Associate Data Analyst" @ ORG_526691c5 Insurance
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-21T19:04:28.044Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:04:28.334Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_526691c5 Insurance in #📈・JID_fb739488
  ✅ Industry: Associate Data Analyst @ ORG_526691c5 Insurance
[2025-12-21T19:04:30.127Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_526691c5 Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:04:31.627Z] [BOT] 💾 Marked as posted: Associate Data Analyst @ ORG_526691c5 Insurance (instance #1)
[2025-12-21T19:04:31.627Z] [BOT] 💾 BEFORE ARCHIVING: 850 jobs in database
[2025-12-21T19:04:31.628Z] [BOT] ✅ No jobs to archive (all 850 jobs within 7-day window)
[2025-12-21T19:04:31.636Z] [BOT] 💾 Saved posted_jobs.json: 850 active jobs
[2025-12-21T19:04:31.636Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:31.636Z] [BOT] 📍 [ROUTING] "Planning Data Analyst - Strategic Planning" @ ORG_1b374809 Health System
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:04:31.836Z] [BOT] ✅ Created forum post: 🏢 Planning Data Analyst - Strategic Planning @ ORG_1b374809 Health System in #📈・JID_fb739488
  ✅ Industry: Planning Data Analyst - Strategic Planning @ ORG_1b374809 Health System
[2025-12-21T19:04:33.748Z] [BOT] ✅ Created forum post: 🏢 Planning Data Analyst - Strategic Planning @ ORG_1b374809 Health System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:04:35.248Z] [BOT] 💾 Marked as posted: Planning Data Analyst - Strategic Planning @ ORG_1b374809 Health System (instance #1)
[2025-12-21T19:04:35.248Z] [BOT] 💾 BEFORE ARCHIVING: 851 jobs in database
[2025-12-21T19:04:35.249Z] [BOT] ✅ No jobs to archive (all 851 jobs within 7-day window)
[2025-12-21T19:04:35.257Z] [BOT] 💾 Saved posted_jobs.json: 851 active jobs
[2025-12-21T19:04:35.257Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:38.258Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-21T19:04:38.260Z] [BOT] 📍 [ROUTING] "Mining Application Specialist – Early Career" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-21T19:04:38.448Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist – Early Career @ ORG_85937e82 Inc. in #📣・marketing-jobs
[2025-12-21T19:04:38.448Z] [BOT] ✅ Industry: Mining Application Specialist – Early Career @ ORG_85937e82 Inc.
[2025-12-21T19:04:40.192Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist – Early Career @ ORG_85937e82 Inc. in #💻・remote-usa
[2025-12-21T19:04:40.192Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:04:41.693Z] [BOT] 💾 Marked as posted: Mining Application Specialist – Early Career @ ORG_85937e82 Inc. (instance #1)
[2025-12-21T19:04:41.694Z] [BOT] 💾 BEFORE ARCHIVING: 852 jobs in database
[2025-12-21T19:04:41.694Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2025-12-21T19:04:41.706Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:04:44.706Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-21T19:04:44.706Z] [BOT] ⏭️  Skipping duplicate: JID_a669bb44 (posted within 7 days)
[2025-12-21T19:04:44.706Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320808 (posted within 7 days)
[2025-12-21T19:04:44.706Z] [BOT] ⏭️  Skipping duplicate: JID_7db23538-cohesity_careers-JID_59af40bf-engineer_r02283 (posted within 7 days)
[2025-12-21T19:04:44.707Z] [BOT] ⏭️  Skipping duplicate: JID_e0d539a3-developer_r0038814-6 (posted within 7 days)
⏭️  Skipping duplicate: JID_5132331f-analyst_r2551 (posted within 7 days)
[2025-12-21T19:04:44.707Z] [BOT] ⏭️  Skipping duplicate: JID_00379630-planning_req_00239147 (posted within 7 days)
[2025-12-21T19:04:44.707Z] [BOT] ⏭️  Skipping duplicate: JID_19e9684f (posted within 7 days)
[2025-12-21T19:04:44.707Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_23ed8024-_421533 (posted within 7 days)
⏭️  Skipping duplicate: JID_cce64a94-career_r0000341180 (posted within 7 days)
[2025-12-21T19:04:44.708Z] [BOT] ✅ Loaded pending queue: 71 total (51 pending, 20 enriched, 0 posted)
[2025-12-21T19:04:44.711Z] [BOT] ✅ Saved pending queue: 71 total (51 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2025-12-21T19:04:44.711Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-21T19:04:44.754Z] [BOT] 📂 Loaded 931 existing routing entries
[2025-12-21T19:04:44.801Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-21T19:04:44.801Z] [BOT] Total entries: 940
   Timestamp: 2025-12-21T19:04:44.796Z
[2025-12-21T19:04:44.802Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T19:04:44.802Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 0
   Skipped: 1
[2025-12-21T19:04:44.802Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T19:04:44.802Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
[2025-12-21T19:04:44.802Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2025-12-21T19:04:44.802Z] [BOT] [STATS] Channel stats saved
[2025-12-21T19:04:46.815Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2713) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*