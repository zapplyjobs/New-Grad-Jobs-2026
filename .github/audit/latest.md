# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T22:43:11.394Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T22:42:16.485Z] ========================================
[2026-01-13T22:42:16.487Z] Discord Bot Execution Log
[2026-01-13T22:42:16.487Z] Environment: GitHub Actions
[2026-01-13T22:42:16.487Z] Node Version: v20.19.6
[2026-01-13T22:42:16.488Z] ========================================
[2026-01-13T22:42:16.488Z] Environment Variables Check:
[2026-01-13T22:42:16.488Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T22:42:16.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.488Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T22:42:16.488Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T22:42:16.488Z] 
Multi-Channel Configuration:
[2026-01-13T22:42:16.488Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.488Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.488Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.488Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T22:42:16.489Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T22:42:16.489Z] 
Data Files Check:
[2026-01-13T22:42:16.490Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101970 bytes)
[2026-01-13T22:42:16.494Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 552229 bytes)
[2026-01-13T22:42:16.494Z] 
========================================
[2026-01-13T22:42:16.494Z] Starting Enhanced Discord Bot...
[2026-01-13T22:42:16.494Z] ========================================
[2026-01-13T22:42:17.007Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-13T22:42:17.945Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T22:42:17.946Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T22:42:17.946Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T22:42:18.058Z] [BOT] ✅ Loaded pending queue: 2717 total (2697 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Fellow - AI Driven Precision Oncology at University of Texas - Austin
[2026-01-13T22:42:18.061Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T22:42:18.061Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T22:42:18.061Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T22:42:18.062Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T22:42:18.062Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-13T22:42:18.062Z] [BOT] - Senior Security Operations Engineer  @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T22:42:18.063Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T22:42:18.067Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T22:42:18.068Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - AI Driven Precision Oncology" @ ORG_9d38443e of Texas - Austin
[2026-01-13T22:42:18.068Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T22:42:18.085Z] [BOT ERROR] (node:3172) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T22:42:18.434Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin
[2026-01-13T22:42:20.194Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-13T22:42:20.194Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T22:42:21.695Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-13T22:42:21.695Z] [BOT] 💾 BEFORE ARCHIVING: 1039 jobs in database
[2026-01-13T22:42:21.696Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T22:42:21.702Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 1038 active
[2026-01-13T22:42:21.709Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-13T22:42:21.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:21.709Z] [BOT] 📍 [ROUTING] "Applications Programmer" @ ORG_5132f94c
[2026-01-13T22:42:21.709Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T22:42:21.890Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer @ ORG_5132f94c in #🤖・ai-jobs
[2026-01-13T22:42:21.890Z] [BOT] ✅ Industry: Applications Programmer @ ORG_5132f94c
[2026-01-13T22:42:23.638Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer @ ORG_5132f94c in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T22:42:25.139Z] [BOT] 💾 Marked as posted: Applications Programmer @ ORG_5132f94c (instance #1)
[2026-01-13T22:42:25.139Z] [BOT] 💾 BEFORE ARCHIVING: 1039 jobs in database
[2026-01-13T22:42:25.140Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-13T22:42:25.147Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:25.147Z] [BOT] 📍 [ROUTING] "Data Scientist 2 - Growth" @ ORG_534e1fbb
   Category: AI (matched: "machine learning")
[2026-01-13T22:42:25.147Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:42:25.147Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T22:42:25.494Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 - Growth @ ORG_534e1fbb in #🤖・ai-jobs
  ✅ Industry: Data Scientist 2 - Growth @ ORG_534e1fbb
[2026-01-13T22:42:27.295Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 - Growth @ ORG_534e1fbb in #🌉・san-francisco
[2026-01-13T22:42:27.295Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T22:42:28.797Z] [BOT] 💾 Marked as posted: Data Scientist 2 - Growth @ ORG_534e1fbb (instance #1)
[2026-01-13T22:42:28.797Z] [BOT] 💾 BEFORE ARCHIVING: 1040 jobs in database
[2026-01-13T22:42:28.798Z] [BOT] ✅ No jobs to archive (all 1040 jobs within 7-day window)
[2026-01-13T22:42:28.807Z] [BOT] 💾 Saved posted_jobs.json: 1040 active jobs
[2026-01-13T22:42:28.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:28.808Z] [BOT] 📍 [ROUTING] "Event Planner I - Hosted Events" @ gohighlevel
[2026-01-13T22:42:28.808Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T22:42:29.020Z] [BOT] ✅ Created forum post: 🏢 Event Planner I - Hosted Events @ gohighlevel in #🤖・ai-jobs
[2026-01-13T22:42:29.020Z] [BOT] ✅ Industry: Event Planner I - Hosted Events @ gohighlevel
[2026-01-13T22:42:30.522Z] [BOT] 💾 Marked as posted: Event Planner I - Hosted Events @ gohighlevel (instance #1)
[2026-01-13T22:42:30.523Z] [BOT] 💾 BEFORE ARCHIVING: 1041 jobs in database
[2026-01-13T22:42:30.523Z] [BOT] ✅ No jobs to archive (all 1041 jobs within 7-day window)
[2026-01-13T22:42:30.531Z] [BOT] 💾 Saved posted_jobs.json: 1041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:30.531Z] [BOT] 💾 Marked as posted: Event Planner I - Sponsored Events @ gohighlevel (instance #1)
[2026-01-13T22:42:30.532Z] [BOT] 💾 BEFORE ARCHIVING: 1042 jobs in database
[2026-01-13T22:42:30.532Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-13T22:42:30.539Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:33.540Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T22:42:33.541Z] [BOT] 📍 [ROUTING] "Digital Services Coordinator 1" @ ORG_da52cfea Children's
[2026-01-13T22:42:33.541Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T22:42:33.780Z] [BOT] ✅ Created forum post: 🏢 Digital Services Coordinator 1 @ ORG_da52cfea Children's in #📣・marketing-jobs
[2026-01-13T22:42:33.780Z] [BOT] ✅ Industry: Digital Services Coordinator 1 @ ORG_da52cfea Children's
[2026-01-13T22:42:35.622Z] [BOT] ✅ Created forum post: 🏢 Digital Services Coordinator 1 @ ORG_da52cfea Children's in #💻・remote-usa
[2026-01-13T22:42:35.623Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T22:42:37.124Z] [BOT] 💾 Marked as posted: Digital Services Coordinator 1 @ ORG_da52cfea Children's (instance #1)
[2026-01-13T22:42:37.124Z] [BOT] 💾 BEFORE ARCHIVING: 1043 jobs in database
[2026-01-13T22:42:37.125Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-13T22:42:37.134Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-13T22:42:37.134Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:40.135Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T22:42:40.135Z] [BOT] 📍 [ROUTING] "Americas Delivery Center Technology Experienced Analyst" @ ORG_cdfa0c05
[2026-01-13T22:42:40.135Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T22:42:40.657Z] [BOT] ✅ Created forum post: 🏢 Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 in #💰・finance-jobs
  ✅ Industry: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05
[2026-01-13T22:42:42.342Z] [BOT] ✅ Created forum post: 🏢 Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:42:43.843Z] [BOT] 💾 Marked as posted: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 (instance #1)
[2026-01-13T22:42:43.843Z] [BOT] 💾 BEFORE ARCHIVING: 1044 jobs in database
[2026-01-13T22:42:43.844Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-13T22:42:43.852Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-13T22:42:43.852Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:46.853Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T22:42:46.854Z] [BOT] 📍 [ROUTING] "Cantonese Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:42:49.027Z] [BOT] ✅ Created forum post: 🏢 Cantonese Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Cantonese Language Specialist @ ORG_0f2833f9
[2026-01-13T22:42:50.862Z] [BOT] ✅ Created forum post: 🏢 Cantonese Language Specialist @ ORG_0f2833f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:42:52.363Z] [BOT] 💾 Marked as posted: Cantonese Language Specialist @ ORG_0f2833f9 (instance #1)
[2026-01-13T22:42:52.363Z] [BOT] 💾 BEFORE ARCHIVING: 1045 jobs in database
[2026-01-13T22:42:52.364Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-13T22:42:52.373Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:42:52.374Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer, Sandboxing" @ anthropic
[2026-01-13T22:42:52.374Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:42:52.711Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer, Sandboxing @ anthropic in #💻・tech-jobs
[2026-01-13T22:42:52.712Z] [BOT] ✅ Industry: Infrastructure Engineer, Sandboxing @ anthropic
[2026-01-13T22:42:54.469Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer, Sandboxing @ anthropic in #🌉・san-francisco
[2026-01-13T22:42:54.469Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T22:42:55.971Z] [BOT] 💾 Marked as posted: Infrastructure Engineer, Sandboxing @ anthropic (instance #1)
[2026-01-13T22:42:55.971Z] [BOT] 💾 BEFORE ARCHIVING: 1046 jobs in database
[2026-01-13T22:42:55.972Z] [BOT] ✅ No jobs to archive (all 1046 jobs within 7-day window)
[2026-01-13T22:42:55.985Z] [BOT] 💾 Saved posted_jobs.json: 1046 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer, Sandboxing (Systems)" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:42:56.234Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Sandboxing (Systems) @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Sandboxing (Systems) @ anthropic
[2026-01-13T22:42:59.690Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Sandboxing (Systems) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:43:01.191Z] [BOT] 💾 Marked as posted: Software Engineer, Sandboxing (Systems) @ anthropic (instance #1)
[2026-01-13T22:43:01.191Z] [BOT] 💾 BEFORE ARCHIVING: 1047 jobs in database
[2026-01-13T22:43:01.192Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-13T22:43:01.201Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:43:01.201Z] [BOT] 📍 [ROUTING] "Senior Security Operations Engineer " @ brex
[2026-01-13T22:43:01.201Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:43:01.436Z] [BOT] ✅ Created forum post: 🏢 Senior Security Operations Engineer  @ brex in #💻・tech-jobs
[2026-01-13T22:43:01.437Z] [BOT] ✅ Industry: Senior Security Operations Engineer  @ brex
[2026-01-13T22:43:03.191Z] [BOT] ✅ Created forum post: 🏢 Senior Security Operations Engineer  @ brex in #🌧️・seattle
[2026-01-13T22:43:03.191Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-13T22:43:04.692Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-13T22:43:04.692Z] [BOT] 💾 BEFORE ARCHIVING: 1048 jobs in database
[2026-01-13T22:43:04.693Z] [BOT] ✅ No jobs to archive (all 1048 jobs within 7-day window)
[2026-01-13T22:43:04.701Z] [BOT] 💾 Saved posted_jobs.json: 1048 active jobs
[2026-01-13T22:43:04.701Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:43:04.702Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1049 jobs in database
[2026-01-13T22:43:04.702Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-13T22:43:04.709Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:43:04.709Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1050 jobs in database
[2026-01-13T22:43:04.710Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-13T22:43:04.718Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-13T22:43:04.718Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:43:07.719Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T22:43:07.719Z] [BOT] ⏭️  Skipping duplicate: JID_18690460-oncology_r_00039870-1 (posted within 7 days)
[2026-01-13T22:43:07.719Z] [BOT] ⏭️  Skipping duplicate: JID_b2ef42ea-programmer_r59946 (posted within 7 days)
[2026-01-13T22:43:07.719Z] [BOT] ⏭️  Skipping duplicate: JID_fbc97492-external_career_site-JID_4ebae7a0-i_r0022409 (posted within 7 days)
[2026-01-13T22:43:07.719Z] [BOT] ⏭️  Skipping duplicate: JID_7a3179d1-analyst_jr-259121-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_a9d7df3a (posted within 7 days)
[2026-01-13T22:43:07.720Z] [BOT] ⏭️  Skipping duplicate: JID_2883b741 (posted within 7 days)
⏭️  Skipping duplicate: JID_37f991dd (posted within 7 days)
[2026-01-13T22:43:07.720Z] [BOT] ⏭️  Skipping duplicate: JID_59f7845f (posted within 7 days)
[2026-01-13T22:43:07.720Z] [BOT] ⏭️  Skipping duplicate: JID_376daae5 (posted within 7 days)
[2026-01-13T22:43:07.720Z] [BOT] ⏭️  Skipping duplicate: JID_70cd8084 (posted within 7 days)
[2026-01-13T22:43:07.836Z] [BOT] ✅ Loaded pending queue: 2717 total (2697 pending, 20 enriched, 0 posted)
[2026-01-13T22:43:08.006Z] [BOT] ✅ Saved pending queue: 2717 total (2697 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T22:43:08.006Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T22:43:08.060Z] [BOT] 📂 Loaded 3185 existing routing entries
[2026-01-13T22:43:08.118Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-13T22:43:08.119Z] [BOT] New entries: 10
   Total entries: 3195
   Timestamp: 2026-01-13T22:43:08.106Z
[2026-01-13T22:43:08.119Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T22:43:08.119Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T22:43:08.120Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T22:43:08.120Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
[2026-01-13T22:43:08.120Z] [BOT] 3. #💻・tech-jobs: 4 posts
     4. #💻・remote-usa: 2 posts
     5. #🤠・austin: 1 posts
[2026-01-13T22:43:08.120Z] [BOT] [STATS] Channel stats saved
[2026-01-13T22:43:10.145Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3172) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*