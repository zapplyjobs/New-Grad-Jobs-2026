# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T05:43:49.323Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T05:43:00.931Z] ========================================
[2026-01-14T05:43:00.933Z] Discord Bot Execution Log
[2026-01-14T05:43:00.933Z] Environment: GitHub Actions
[2026-01-14T05:43:00.933Z] Node Version: v20.19.6
[2026-01-14T05:43:00.933Z] ========================================
[2026-01-14T05:43:00.933Z] Environment Variables Check:
[2026-01-14T05:43:00.933Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T05:43:00.933Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.933Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T05:43:00.933Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T05:43:00.933Z] 
Multi-Channel Configuration:
[2026-01-14T05:43:00.933Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T05:43:00.934Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T05:43:00.934Z] 
Data Files Check:
[2026-01-14T05:43:00.935Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57455 bytes)
[2026-01-14T05:43:00.939Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 646081 bytes)
[2026-01-14T05:43:00.939Z] 
========================================
[2026-01-14T05:43:00.939Z] Starting Enhanced Discord Bot...
[2026-01-14T05:43:00.939Z] ========================================
[2026-01-14T05:43:01.460Z] [BOT] ✅ Loaded V2 database: 1225 jobs
[2026-01-14T05:43:02.318Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T05:43:02.319Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T05:43:02.319Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T05:43:02.427Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Backend Engineer at Baselayer
[2026-01-14T05:43:02.430Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T05:43:02.430Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T05:43:02.430Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T05:43:02.431Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T05:43:02.431Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T05:43:02.435Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T05:43:02.436Z] [BOT] 📍 [ROUTING] "Senior Backend Engineer" @ ORG_81885e17
[2026-01-14T05:43:02.436Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:43:02.452Z] [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T05:43:02.749Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Engineer @ ORG_81885e17 in #💻・tech-jobs
[2026-01-14T05:43:02.749Z] [BOT] ✅ Industry: Senior Backend Engineer @ ORG_81885e17
[2026-01-14T05:43:04.899Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Engineer @ ORG_81885e17 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:43:06.400Z] [BOT] 💾 Marked as posted: Senior Backend Engineer @ ORG_81885e17 (instance #1)
[2026-01-14T05:43:06.401Z] [BOT] 💾 BEFORE ARCHIVING: 1226 jobs in database
[2026-01-14T05:43:06.402Z] [BOT] ✅ No jobs to archive (all 1226 jobs within 7-day window)
[2026-01-14T05:43:06.414Z] [BOT] 💾 Saved posted_jobs.json: 1226 active jobs
[2026-01-14T05:43:06.415Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:06.415Z] [BOT] 📍 [ROUTING] "Software Engineering Associate" @ ORG_c3f8f1e2 Insurance
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:43:06.611Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #💻・tech-jobs
[2026-01-14T05:43:06.612Z] [BOT] ✅ Industry: Software Engineering Associate @ ORG_c3f8f1e2 Insurance
[2026-01-14T05:43:08.348Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:43:09.849Z] [BOT] 💾 Marked as posted: Software Engineering Associate @ ORG_c3f8f1e2 Insurance (instance #1)
[2026-01-14T05:43:09.849Z] [BOT] 💾 BEFORE ARCHIVING: 1227 jobs in database
[2026-01-14T05:43:09.850Z] [BOT] ✅ No jobs to archive (all 1227 jobs within 7-day window)
[2026-01-14T05:43:09.858Z] [BOT] 💾 Saved posted_jobs.json: 1227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:09.859Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Quest Experiences" @ discord
   Category: TECH (matched: "software")
[2026-01-14T05:43:09.859Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:43:10.085Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Quest Experiences @ discord in #💻・tech-jobs
[2026-01-14T05:43:10.086Z] [BOT] ✅ Industry: Staff Software Engineer, Quest Experiences @ discord
[2026-01-14T05:43:11.815Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Quest Experiences @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T05:43:13.316Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Quest Experiences @ discord (instance #1)
[2026-01-14T05:43:13.317Z] [BOT] 💾 BEFORE ARCHIVING: 1228 jobs in database
[2026-01-14T05:43:13.318Z] [BOT] ✅ No jobs to archive (all 1228 jobs within 7-day window)
[2026-01-14T05:43:13.327Z] [BOT] 💾 Saved posted_jobs.json: 1228 active jobs
[2026-01-14T05:43:13.327Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:13.328Z] [BOT] 📍 [ROUTING] "Software Engineer – May Graduates" @ ORG_6b607b1f
[2026-01-14T05:43:13.328Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:43:13.673Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – May Graduates @ ORG_6b607b1f in #💻・tech-jobs
[2026-01-14T05:43:13.673Z] [BOT] ✅ Industry: Software Engineer – May Graduates @ ORG_6b607b1f
[2026-01-14T05:43:15.398Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – May Graduates @ ORG_6b607b1f in #💻・remote-usa
[2026-01-14T05:43:15.399Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T05:43:16.900Z] [BOT] 💾 Marked as posted: Software Engineer – May Graduates @ ORG_6b607b1f (instance #1)
[2026-01-14T05:43:16.900Z] [BOT] 💾 BEFORE ARCHIVING: 1229 jobs in database
[2026-01-14T05:43:16.901Z] [BOT] ✅ No jobs to archive (all 1229 jobs within 7-day window)
[2026-01-14T05:43:16.909Z] [BOT] 💾 Saved posted_jobs.json: 1229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:16.910Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2026-01-14T05:43:16.910Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T05:43:17.135Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-14T05:43:19.077Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T05:43:20.577Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2026-01-14T05:43:20.577Z] [BOT] 💾 BEFORE ARCHIVING: 1230 jobs in database
[2026-01-14T05:43:20.578Z] [BOT] ✅ No jobs to archive (all 1230 jobs within 7-day window)
[2026-01-14T05:43:20.587Z] [BOT] 💾 Saved posted_jobs.json: 1230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:23.587Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T05:43:23.588Z] [BOT] 📍 [ROUTING] "Associate Data Science" @ ORG_ae835968 media
   Category: AI (matched: "machine learning")
[2026-01-14T05:43:23.588Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T05:43:23.815Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science @ ORG_ae835968 media in #🤖・ai-jobs
  ✅ Industry: Associate Data Science @ ORG_ae835968 media
[2026-01-14T05:43:25.658Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science @ ORG_ae835968 media in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T05:43:27.159Z] [BOT] 💾 Marked as posted: Associate Data Science @ ORG_ae835968 media (instance #1)
[2026-01-14T05:43:27.159Z] [BOT] 💾 BEFORE ARCHIVING: 1231 jobs in database
[2026-01-14T05:43:27.160Z] [BOT] ✅ No jobs to archive (all 1231 jobs within 7-day window)
[2026-01-14T05:43:27.169Z] [BOT] 💾 Saved posted_jobs.json: 1231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:27.170Z] [BOT] 📍 [ROUTING] "Staff Analytics Engineer" @ gohighlevel
[2026-01-14T05:43:27.170Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:43:27.170Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T05:43:27.616Z] [BOT] ✅ Created forum post: 🏢 Staff Analytics Engineer @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Staff Analytics Engineer @ gohighlevel
[2026-01-14T05:43:29.118Z] [BOT] 💾 Marked as posted: Staff Analytics Engineer @ gohighlevel (instance #1)
[2026-01-14T05:43:29.118Z] [BOT] 💾 BEFORE ARCHIVING: 1232 jobs in database
[2026-01-14T05:43:29.119Z] [BOT] ✅ No jobs to archive (all 1232 jobs within 7-day window)
[2026-01-14T05:43:29.127Z] [BOT] 💾 Saved posted_jobs.json: 1232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:29.128Z] [BOT] 📍 [ROUTING] "Senior Systems Engineer - Corporate Systems" @ ORG_9379ad87 International
[2026-01-14T05:43:29.128Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:43:29.396Z] [BOT] ✅ Created forum post: 🏢 Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #🤖・ai-jobs
[2026-01-14T05:43:29.397Z] [BOT] ✅ Industry: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International
[2026-01-14T05:43:31.237Z] [BOT] ✅ Created forum post: 🏢 Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T05:43:32.738Z] [BOT] 💾 Marked as posted: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International (instance #1)
[2026-01-14T05:43:32.738Z] [BOT] 💾 BEFORE ARCHIVING: 1233 jobs in database
[2026-01-14T05:43:32.739Z] [BOT] ✅ No jobs to archive (all 1233 jobs within 7-day window)
[2026-01-14T05:43:32.749Z] [BOT] 💾 Saved posted_jobs.json: 1233 active jobs
[2026-01-14T05:43:32.749Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:32.749Z] [BOT] 📍 [ROUTING] "AI Developer" @ ORG_8fc44164 Consulting
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T05:43:32.749Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T05:43:33.122Z] [BOT] ✅ Created forum post: 🏢 AI Developer @ ORG_8fc44164 Consulting in #🤖・ai-jobs
[2026-01-14T05:43:33.123Z] [BOT] ✅ Industry: AI Developer @ ORG_8fc44164 Consulting
[2026-01-14T05:43:34.844Z] [BOT] ✅ Created forum post: 🏢 AI Developer @ ORG_8fc44164 Consulting in #🚌・boston
[2026-01-14T05:43:34.844Z] [BOT] ✅ Location: 🚌・boston
[2026-01-14T05:43:36.345Z] [BOT] 💾 Marked as posted: AI Developer @ ORG_8fc44164 Consulting (instance #1)
[2026-01-14T05:43:36.346Z] [BOT] 💾 BEFORE ARCHIVING: 1234 jobs in database
[2026-01-14T05:43:36.347Z] [BOT] ✅ No jobs to archive (all 1234 jobs within 7-day window)
[2026-01-14T05:43:36.355Z] [BOT] 💾 Saved posted_jobs.json: 1234 active jobs
[2026-01-14T05:43:36.355Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:39.356Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T05:43:39.356Z] [BOT] 📍 [ROUTING] "Analyst – Customer Insights" @ ORG_85aef4c3
   Category: MARKETING (matched: "marketing")
[2026-01-14T05:43:39.357Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T05:43:39.588Z] [BOT] ✅ Created forum post: 🏢 Analyst – Customer Insights @ ORG_85aef4c3 in #📣・marketing-jobs
  ✅ Industry: Analyst – Customer Insights @ ORG_85aef4c3
[2026-01-14T05:43:41.279Z] [BOT] ✅ Created forum post: 🏢 Analyst – Customer Insights @ ORG_85aef4c3 in #🗽・new-york
[2026-01-14T05:43:41.279Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T05:43:42.780Z] [BOT] 💾 Marked as posted: Analyst – Customer Insights @ ORG_85aef4c3 (instance #1)
[2026-01-14T05:43:42.780Z] [BOT] 💾 BEFORE ARCHIVING: 1235 jobs in database
[2026-01-14T05:43:42.781Z] [BOT] ✅ No jobs to archive (all 1235 jobs within 7-day window)
[2026-01-14T05:43:42.790Z] [BOT] 💾 Saved posted_jobs.json: 1235 active jobs
[2026-01-14T05:43:42.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T05:43:45.791Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T05:43:45.791Z] [BOT] ⏭️  Skipping duplicate: JID_a215e590 (posted within 7 days)
[2026-01-14T05:43:45.791Z] [BOT] ⏭️  Skipping duplicate: JID_aa958bc9-science_r0016354 (posted within 7 days)
[2026-01-14T05:43:45.791Z] [BOT] ⏭️  Skipping duplicate: JID_773e7b6d-associate_347265 (posted within 7 days)
[2026-01-14T05:43:45.791Z] [BOT] ⏭️  Skipping duplicate: JID_6e5d6b65-us_corporate_jobs-JID_c1613c68-insights_r-2019782 (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_7845e4eb (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_25436736 (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_e3e16e88 (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_62f2a8da (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_059fdb40 (posted within 7 days)
[2026-01-14T05:43:45.792Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-315615 (posted within 7 days)
[2026-01-14T05:43:45.907Z] [BOT] ✅ Loaded pending queue: 2737 total (2717 pending, 20 enriched, 0 posted)
[2026-01-14T05:43:46.071Z] [BOT] ✅ Saved pending queue: 2737 total (2717 pending, 10 enriched, 10 posted)
[2026-01-14T05:43:46.071Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T05:43:46.123Z] [BOT] 📂 Loaded 3345 existing routing entries
[2026-01-14T05:43:46.181Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T05:43:46.181Z] [BOT] Total entries: 3355
   Timestamp: 2026-01-14T05:43:46.167Z
[2026-01-14T05:43:46.182Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T05:43:46.182Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-14T05:43:46.182Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T05:43:46.182Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-14T05:43:46.182Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🗽・new-york: 2 posts
[2026-01-14T05:43:46.183Z] [BOT] [STATS] Channel stats saved
[2026-01-14T05:43:48.207Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*